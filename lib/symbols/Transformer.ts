// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 863-928MHz 1:1 RF Transformer, Unbalanced to Balanced
 *
 * KiCad symbol: `Transformer:0896BM15A0001`. Reference prefix: `U`.
 * Footprint filters: Balun*Johanson*0896BM15A0001*.
 * @see https://www.johansontechnology.com/datasheets/0896BM15A0001/0896BM15A0001.pdf
 * Keywords: balun rf transformer.
 * Default footprint: RF_Converter:Balun_Johanson_0896BM15A0001.
 */
export class _0896BM15A0001 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "P3": "3",
  "P4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", P3: "passive", P4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:0896BM15A0001";
  override referencePrefix = "U";
}

/**
 * 430-435MHz 1:1 RF Transformer, Unbalanced to Balanced, with integrated DC blocking capacitor
 *
 * KiCad symbol: `Transformer:0433BM15A0001`. Reference prefix: `U`.
 * Footprint filters: Balun*Johanson*0896BM15A0001*.
 * @see https://www.johansontechnology.com/datasheets/0433BM15A0001/0433BM15A0001.pdf
 * Keywords: balun rf transformer.
 * Default footprint: RF_Converter:Balun_Johanson_0896BM15A0001.
 */
export class _0433BM15A0001 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "P3": "3",
  "P4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", P3: "passive", P4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:0433BM15A0001";
  override referencePrefix = "U";
}

/**
 * 863-873MHz 1:1 RF Transformer, Unbalanced to Balanced, with integrated DC blocking capacitor
 *
 * KiCad symbol: `Transformer:0868BM15C0001`. Reference prefix: `U`.
 * Footprint filters: Balun*Johanson*0896BM15A0001*.
 * @see https://www.johansontechnology.com/datasheets/0868BM15C0001/0868BM15C0001.pdf
 * Keywords: balun rf transformer.
 * Default footprint: RF_Converter:Balun_Johanson_0896BM15A0001.
 */
export class _0868BM15C0001 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "P3": "3",
  "P4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", P3: "passive", P4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:0868BM15C0001";
  override referencePrefix = "U";
}

/**
 * 902-928MHz 1:1 RF Transformer, Unbalanced to Balanced, with integrated DC blocking capacitor
 *
 * KiCad symbol: `Transformer:0915BM15A0001`. Reference prefix: `U`.
 * Footprint filters: Balun*Johanson*0896BM15A0001*.
 * @see https://www.johansontechnology.com/datasheets/0915BM15A0001/0915BM15A0001.pdf
 * Keywords: balun rf transformer.
 * Default footprint: RF_Converter:Balun_Johanson_0896BM15A0001.
 */
export class _0915BM15A0001 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "P3": "3",
  "P4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", P3: "passive", P4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:0915BM15A0001";
  override referencePrefix = "U";
}

/**
 * 1CT:1CT 10/100/1000 Base-T Ethernet Transformer, SMD-24
 *
 * KiCad symbol: `Transformer:30F-51NL`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Ethernet*YDS*30F?51NL*.
 * @see https://datasheet.lcsc.com/lcsc/1811051610_Shanghai-YDS-Tech-30F-51NL_C123168.pdf
 * Keywords: gigabit RJ45 transformer ethernet lan.
 * Default footprint: Transformer_SMD:Transformer_Ethernet_YDS_30F-51NL_SO-24_7.1x15.1mm.
 */
export class _30F_51NL extends Component.withPins({
  "CT_1": "1",
  "TD1+": "2",
  "TD1-": "3",
  "CT_4": "4",
  "TD2+": "5",
  "TD2-": "6",
  "CT_7": "7",
  "TD3+": "8",
  "TD3-": "9",
  "CT_10": "10",
  "TD4+": "11",
  "TD4-": "12",
  "MX4-": "13",
  "MX4+": "14",
  "CT_15": "15",
  "MX3-": "16",
  "MX3+": "17",
  "CT_18": "18",
  "MX2-": "19",
  "MX2+": "20",
  "CT_21": "21",
  "MX1-": "22",
  "MX1+": "23",
  "CT_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CT_1: "passive", "TD1+": "passive", "TD1-": "passive", CT_4: "passive", "TD2+": "passive", "TD2-": "passive", CT_7: "passive", "TD3+": "passive", "TD3-": "passive", CT_10: "passive", "TD4+": "passive", "TD4-": "passive", "MX4-": "passive", "MX4+": "passive", CT_15: "passive", "MX3-": "passive", "MX3+": "passive", CT_18: "passive", "MX2-": "passive", "MX2+": "passive", CT_21: "passive", "MX1-": "passive", "MX1+": "passive", CT_24: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:30F-51NL";
  override referencePrefix = "TR";
}

/**
 * 4.9-5.9GHz 1:1 RF Transformer, Unbalanced to Balanced
 *
 * KiCad symbol: `Transformer:5400BL15B050`. Reference prefix: `U`.
 * Footprint filters: Balun*Johanson*5400BL15B050E*.
 * @see https://www.johansontechnology.com/datasheets/5400BL15B050/5400BL15B050.pdf
 * Keywords: balun rf transformer.
 * Default footprint: RF_Converter:Balun_Johanson_5400BL15B050E.
 */
export class _5400BL15B050 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "P3": "3",
  "P4": "4",
  "GND_5": "5",
  "NC": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", P3: "passive", P4: "passive", GND_5: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Transformer:5400BL15B050";
  override referencePrefix = "U";
}

/**
 * 0.15-400MHz 1:1 RF Transformer, Balanced to Balanced, CD542
 *
 * KiCad symbol: `Transformer:ADT1-1`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT1-1+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT1_1 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT1-1";
  override referencePrefix = "TR";
}

/**
 * 0.005-125MHz 1:1 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT1-1WT`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT1-1WT.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT1_1WT extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "no_connect", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT1-1WT";
  override referencePrefix = "TR";
}

/**
 * 1-400MHz 1:1 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT1-1WT-1`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT1-1WT-1+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT1_1WT_1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT1-1WT-1";
  override referencePrefix = "TR";
}

/**
 * 0.06-160MHz 1:1 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT1-6T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD637*.
 * @see https://www.minicircuits.com/pdfs/ADT1-6T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD637_H5.23mm.
 */
export class ADT1_6T extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT1-6T";
  override referencePrefix = "TR";
}

/**
 * 0.5-650MHz 1:1.5 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT1.5-1`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT1.5-1+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT1_5_1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "no_connect", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT1.5-1";
  override referencePrefix = "TR";
}

/**
 * 20-1200MHz 1:1.5 RF Transformer, Balanced Transmission Line, CD542
 *
 * KiCad symbol: `Transformer:ADT1.5-122`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT1.5-122+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT1_5_122 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT1.5-122";
  override referencePrefix = "TR";
}

/**
 * 0.5-1700MHz 1:1.5 RF Transformer, Unbalanced to Unbalanced, CD542
 *
 * KiCad symbol: `Transformer:ADT1.5-17`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT1.5-17+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT1_5_17 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT1.5-17";
  override referencePrefix = "TR";
}

/**
 * 0.3-225MHz 1:1.5 RF Transformer, Balanced to Balanced, CD636
 *
 * KiCad symbol: `Transformer:ADT1.5-2`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD636*.
 * @see https://www.minicircuits.com/pdfs/ADT1.5-2+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD636_H4.11mm.
 */
export class ADT1_5_2 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT1.5-2";
  override referencePrefix = "TR";
}

/**
 * 1.5-160MHz 1:16 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT16-1T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT16-1T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT16_1T extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT16-1T";
  override referencePrefix = "TR";
}

/**
 * 0.25-105MHz 1:16 RF Transformer, Balanced to Balanced, CD636
 *
 * KiCad symbol: `Transformer:ADT16-6`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD636*.
 * @see https://www.minicircuits.com/pdfs/ADT16-6+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD636_H4.11mm.
 */
export class ADT16_6 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT16-6";
  override referencePrefix = "TR";
}

/**
 * 0.10-400MHz 1:16 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT16-6T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD637*.
 * @see https://www.minicircuits.com/pdfs/ADT16-6T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD637_H5.23mm.
 */
export class ADT16_6T extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT16-6T";
  override referencePrefix = "TR";
}

/**
 * 0.40-450MHz 1:2 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT2-1T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT2-1T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT2_1T extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT2-1T";
  override referencePrefix = "TR";
}

/**
 * 8-600MHz 1:2 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT2-1T-1P`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT2-1T-1P+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT2_1T_1P extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT2-1T-1P";
  override referencePrefix = "TR";
}

/**
 * 0.40-500MHz 1:2 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT2-71T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD637*.
 * @see https://www.minicircuits.com/pdfs/ADT2-71T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD637_H5.23mm.
 */
export class ADT2_71T extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT2-71T";
  override referencePrefix = "TR";
}

/**
 * 1-500MHz 1:3 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT3-1T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT3-1T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT3_1T extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT3-1T";
  override referencePrefix = "TR";
}

/**
 * 1-500MHz 1:3 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT3-1T-75`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT3-1T-75+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT3_1T_75 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT3-1T-75";
  override referencePrefix = "TR";
}

/**
 * 1-600MHz 1:3 RF Transformer, Unbalanced to Balanced Center Tap, CD636
 *
 * KiCad symbol: `Transformer:ADT3-6T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD636*.
 * @see https://www.minicircuits.com/pdfs/ADT3-6T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD636_H4.11mm.
 */
export class ADT3_6T extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT3-6T";
  override referencePrefix = "TR";
}

/**
 * 9-625MHz 1:4 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT4-1T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT4-1T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT4_1T extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT4-1T";
  override referencePrefix = "TR";
}

/**
 * 2-775MHz 1:4 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT4-1WT`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT4-1WT+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT4_1WT extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT4-1WT";
  override referencePrefix = "TR";
}

/**
 * 1-650MHz 1:4 RF Transformer, Unbalanced to Balanced Center Tap, CD637
 *
 * KiCad symbol: `Transformer:ADT4-5WT`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD637*.
 * @see https://www.minicircuits.com/pdfs/ADT4-5WT+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD637_H5.23mm.
 */
export class ADT4_5WT extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT4-5WT";
  override referencePrefix = "TR";
}

/**
 * 0.07-250MHz 1:4 RF Transformer, Balanced to Balanced, CD542
 *
 * KiCad symbol: `Transformer:ADT4-6`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD637*.
 * @see https://www.minicircuits.com/pdfs/ADT4-6+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD637_H5.23mm.
 */
export class ADT4_6 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT4-6";
  override referencePrefix = "TR";
}

/**
 * 1.5-70MHz 1:4 RF Transformer, Unbalanced to Balanced Center Tap, CD637
 *
 * KiCad symbol: `Transformer:ADT4-6T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD637*.
 * @see https://www.minicircuits.com/pdfs/ADT4-6T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD637_H5.23mm.
 */
export class ADT4_6T extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT4-6T";
  override referencePrefix = "TR";
}

/**
 * 2-70MHz 1:4 RF Transformer, Unbalanced to Balanced Center Tap, CD637
 *
 * KiCad symbol: `Transformer:ADT4-6WT`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD636*.
 * @see https://www.minicircuits.com/pdfs/ADT4-6WT+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD636_H4.11mm.
 */
export class ADT4_6WT extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT4-6WT";
  override referencePrefix = "TR";
}

/**
 * 8-775MHz 1:8 RF Transformer, Unbalanced to Balanced Center Tap, CD637
 *
 * KiCad symbol: `Transformer:ADT8-1T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD637*.
 * @see https://www.minicircuits.com/pdfs/ADT8-1T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD637_H5.23mm.
 */
export class ADT8_1T extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT8-1T";
  override referencePrefix = "TR";
}

/**
 * 1-250MHz 1:9 RF Transformer, Unbalanced to Balanced Center Tap, CD542
 *
 * KiCad symbol: `Transformer:ADT9-1T`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADT9-1T+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADT9_1T extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADT9-1T";
  override referencePrefix = "TR";
}

/**
 * 0.5-1000MHz 1:1 RF Transformer, Balanced Transmission Line, CD542
 *
 * KiCad symbol: `Transformer:ADTL1-4-75`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADTL1-4-75+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADTL1_4_75 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTL1-4-75";
  override referencePrefix = "TR";
}

/**
 * 20-1200MHz 1:1 RF Transformer, Balanced Transmission Line, CD542
 *
 * KiCad symbol: `Transformer:ADTL1-12`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADTL1-12+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADTL1_12 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTL1-12";
  override referencePrefix = "TR";
}

/**
 * 10-1500MHz 1:1 RF Transformer, Balanced Transmission Line, CD542
 *
 * KiCad symbol: `Transformer:ADTL1-15-75`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADTL1-15-75+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADTL1_15_75 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTL1-15-75";
  override referencePrefix = "TR";
}

/**
 * 5-1800MHz 1:1 RF Transformer, Balanced Transmission Line, CD542
 *
 * KiCad symbol: `Transformer:ADTL1-18-75`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADTL1-18-75+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADTL1_18_75 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTL1-18-75";
  override referencePrefix = "TR";
}

/**
 * 30-1800MHz 1:2 RF Transformer, Balanced Transmission Line, CD542
 *
 * KiCad symbol: `Transformer:ADTL2-18`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADTL2-18+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADTL2_18 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTL2-18";
  override referencePrefix = "TR";
}

/**
 * 0.3-300MHz 1:1 RF Transformer, Unbalanced to Balanced Center Tap at Primary/Secondary, CD542
 *
 * KiCad symbol: `Transformer:ADTT1-1`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADTT1-1+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 */
export class ADTT1_1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTT1-1";
  override referencePrefix = "TR";
}

/**
 * 0.015-100MHz 1:1 RF Transformer, Unbalanced to Balanced Center Tap at Primary/Secondary, CD637
 *
 * KiCad symbol: `Transformer:ADTT1-6`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD637*.
 * @see https://www.minicircuits.com/pdfs/ADTT1-6+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD637_H5.23mm.
 */
export class ADTT1_6 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTT1-6";
  override referencePrefix = "TR";
}

/**
 * 0.25-300MHz 1:1.5 RF Transformer, Unbalanced to Balanced Center Tap at Primary/Secondary, CD636
 *
 * KiCad symbol: `Transformer:ADTT1.5-1`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD636*.
 * @see https://www.minicircuits.com/pdfs/ADTT1.5-1+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD636_H4.11mm.
 */
export class ADTT1_5_1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTT1.5-1";
  override referencePrefix = "TR";
}

/**
 * 0.2-210MHz 1:3 RF Transformer, Unbalanced to Balanced Center Tap at Primary/Secondary, CD636
 *
 * KiCad symbol: `Transformer:ADTT3-2`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD636*.
 * @see https://www.minicircuits.com/pdfs/ADTT3-2+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD636_H4.11mm.
 */
export class ADTT3_2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTT3-2";
  override referencePrefix = "TR";
}

/**
 * 0.2-120MHz 1:4 RF Transformer, Unbalanced to Balanced Center Tap at Primary/Secondary, CD636
 *
 * KiCad symbol: `Transformer:ADTT4-1`. Reference prefix: `TR`.
 * Footprint filters: Mini?Circuits*CD636*.
 * @see https://www.minicircuits.com/pdfs/ADTT4-1+.pdf
 * Keywords: Mini-Circuits RF Transformer.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD636_H4.11mm.
 */
export class ADTT4_1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ADTT4-1";
  override referencePrefix = "TR";
}

/**
 * 300MHz to 2200MHz 1:1 RF Transformer, 50 ohm, Unbalanced to Balanced
 *
 * KiCad symbol: `Transformer:B0322J5050AHF`. Reference prefix: `U`.
 * Footprint filters: Anaren*0805*2012Metric*.
 * @see https://cdn.ttm.com/repository/products/wireless-xinger/balun-transformers/B0322J5050AHF/B0322J5050AHF.pdf
 * Keywords: balun rf transformer.
 * Default footprint: RF_Converter:Anaren_0805_2012Metric-6.
 */
export class B0322J5050AHF extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND: "power_in", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:B0322J5050AHF";
  override referencePrefix = "U";
}

/**
 * Coilcraft Current Sense Transformer, SMD, 20A, 1:20 to 1:125
 *
 * KiCad symbol: `Transformer:CST1`. Reference prefix: `T`.
 * Footprint filters: Transformer*Coilcraft*CST1*.
 * @see https://www.coilcraft.com/pdfs/cst.pdf
 * Keywords: current sense transformer.
 * Default footprint: Transformer_SMD:Transformer_Coilcraft_CST1.
 */
export class CST1 extends Component.withPins({
  "P4": "4",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P4: "passive", P6: "passive", P7: "passive", P8: "passive", P1: "no_connect", P2: "no_connect", P3: "no_connect", P5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Transformer:CST1";
  override referencePrefix = "T";
}

/**
 * Coilcraft Current Sense Transformer, SMD, 20A, 1:20 to 1:125
 *
 * KiCad symbol: `Transformer:CST1_Split`. Reference prefix: `T`.
 * Footprint filters: Transformer*Coilcraft*CST1*.
 * @see https://www.coilcraft.com/pdfs/cst.pdf
 * Keywords: current sense transformer.
 * Default footprint: Transformer_SMD:Transformer_Coilcraft_CST1.
 */
export class CST1_Split extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P7": "7",
  "P8": "8",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "no_connect", P5: "no_connect", P7: "passive", P8: "passive", P2: "no_connect", P3: "no_connect", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:CST1_Split";
  override referencePrefix = "T";
}

/**
 * Coilcraft Current Sense Transformer, SMD, 20A, 1:20 to 1:125
 *
 * KiCad symbol: `Transformer:CST2`. Reference prefix: `T`.
 * Footprint filters: Transformer*Coilcraft*CST2*.
 * @see https://www.coilcraft.com/pdfs/cst.pdf
 * Keywords: current sense transformer.
 * Default footprint: Transformer_SMD:Transformer_Coilcraft_CST2.
 */
export class CST2 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P7": "7",
  "P8": "8",
  "P2": "2",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P7: "passive", P8: "passive", P2: "no_connect", P4: "no_connect", P5: "no_connect", P6: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Transformer:CST2";
  override referencePrefix = "T";
}

/**
 * Coilcraft Current Sense Transformer, SMD, 40A, 1:20 to 1:200
 *
 * KiCad symbol: `Transformer:CST2010`. Reference prefix: `T`.
 * Footprint filters: Transformer*Coilcraft*CST2010*.
 * @see https://www.coilcraft.com/pdfs/cst2010.pdf
 * Keywords: current sense transformer.
 * Default footprint: Transformer_SMD:Transformer_Coilcraft_CST2010.
 */
export class CST2010 extends Component.withPins({
  "P2": "2",
  "P4": "4",
  "P11": "11",
  "P12": "12",
  "P1": "1",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "passive", P4: "passive", P11: "passive", P12: "passive", P1: "no_connect", P3: "no_connect", P5: "no_connect", P6: "no_connect", P7: "no_connect", P8: "no_connect", P9: "no_connect", P10: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Transformer:CST2010";
  override referencePrefix = "T";
}

/**
 * Coilcraft Current Sense Transformer, SMD, 40A, 1:20 to 1:200
 *
 * KiCad symbol: `Transformer:CST2010_Split`. Reference prefix: `T`.
 * Footprint filters: Transformer*Coilcraft*CST2010*.
 * @see https://www.coilcraft.com/pdfs/cst2010.pdf
 * Keywords: current sense transformer.
 * Default footprint: Transformer_SMD:Transformer_Coilcraft_CST2010.
 */
export class CST2010_Split extends Component.withPins({
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P10: "no_connect", P11: "passive", P12: "passive", P1: "no_connect", P2: "passive", P3: "no_connect", P4: "passive", P5: "no_connect", P6: "no_connect", P7: "no_connect", P8: "no_connect", P9: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Transformer:CST2010_Split";
  override referencePrefix = "T";
}

/**
 * Coilcraft Current Sense Transformer, SMD, 20A, 1:20 to 1:125
 *
 * KiCad symbol: `Transformer:CST2_Split`. Reference prefix: `T`.
 * Footprint filters: Transformer*Coilcraft*CST2*.
 * @see https://www.coilcraft.com/pdfs/cst.pdf
 * Keywords: current sense transformer.
 * Default footprint: Transformer_SMD:Transformer_Coilcraft_CST2.
 */
export class CST2_Split extends Component.withPins({
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P5: "no_connect", P6: "no_connect", P7: "passive", P8: "passive", P1: "passive", P2: "no_connect", P3: "passive", P4: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Transformer:CST2_Split";
  override referencePrefix = "T";
}

/**
 * 600:600 Impedance Permalloy Core 1:1 Isolated Audio Transformer
 *
 * KiCad symbol: `Transformer:ED8_4`. Reference prefix: `T`.
 * Footprint filters: Transformer*ED8*4*Lead*10.5x8mm*P5mm*.
 * @see https://gitlab.com/kicad/libraries/kicad-footprints/-/merge_requests/3626
 * Keywords: ED8 4-lead body 10.5x8mm body pitch 5mm height 5mm.
 * Default footprint: Transformer_SMD:Transformer_ED8_4-Lead_10.5x8mm_P5mm.
 */
export class ED8_4 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ED8_4";
  override referencePrefix = "T";
}

/**
 * 4.5-4000MHz 1:1 RF Transformer, Balanced Transmission Line, SM-22
 *
 * KiCad symbol: `Transformer:ETC1-1-13`. Reference prefix: `TR`.
 * Footprint filters: Transformer*MACOM*SM?22*.
 * @see https://cdn.macom.com/datasheets/ETC1-1-13.pdf
 * Keywords: MACOM RF Transformer.
 * Default footprint: Transformer_SMD:Transformer_MACOM_SM-22.
 */
export class ETC1_1_13 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "MP": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", MP: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ETC1-1-13";
  override referencePrefix = "TR";
}

/**
 * Lundahl Transformers, Microphone Transformer
 *
 * KiCad symbol: `Transformer:LL1587`. Reference prefix: `T`.
 * Footprint filters: Transformer*Microphone*Lundahl*LL1587*.
 * @see http://www.lundahl.se/wp-content/uploads/datasheets/1587.pdf
 * Keywords: microphone transformer.
 * Default footprint: Transformer_THT:Transformer_Microphone_Lundahl_LL1587.
 */
export class LL1587 extends Component.withPins({
  "P1+": "1",
  "P1-": "2",
  "P2-": "3",
  "P2+": "4",
  "P5": "5",
  "S-": "6",
  "S+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1+": "passive", "P1-": "passive", "P2-": "passive", "P2+": "passive", P5: "input", "S-": "passive", "S+": "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:LL1587";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1:1
 *
 * KiCad symbol: `Transformer:PA2002NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2002NL*PA2008NL*PA2009NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/P663.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2002NL-PA2008NL-PA2009NL.
 */
export class PA2002NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2002NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1:1
 *
 * KiCad symbol: `Transformer:P0544NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2002NL*PA2008NL*PA2009NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2002NL-PA2008NL-PA2009NL.
 */
export class P0544NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:P0544NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1:1
 *
 * KiCad symbol: `Transformer:P0926NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*P0926NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_P0926NL.
 */
export class P0926NL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:P0926NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1:1
 *
 * KiCad symbol: `Transformer:PA2005NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2005NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/P663.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2005NL.
 */
export class PA2005NL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2005NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1:1
 *
 * KiCad symbol: `Transformer:PA0173NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2005NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2005NL.
 */
export class PA0173NL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA0173NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PA2007NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2007NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/P663.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2007NL.
 */
export class PA2007NL extends Component.withPins({
  "P1": "1",
  "P4": "4",
  "P5": "5",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P4: "passive", P5: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2007NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PA0184NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2007NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2007NL.
 */
export class PA0184NL extends Component.withPins({
  "P1": "1",
  "P4": "4",
  "P5": "5",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P4: "passive", P5: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA0184NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PA2777NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2777NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2777NL.
 */
export class PA2777NL extends Component.withPins({
  "P1": "1",
  "P4": "4",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P4: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2777NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PA0184NL1`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2777NL*.
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2777NL.
 */
export class PA0184NL1 extends Component.withPins({
  "P1": "1",
  "P4": "4",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P4: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA0184NL1";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PA2006NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2006NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/P663.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2006NL.
 */
export class PA2006NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2006NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PA0185NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2006NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2006NL.
 */
export class PA0185NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA0185NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1.25:1
 *
 * KiCad symbol: `Transformer:PA3493NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA3493NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA3493NL.
 */
export class PA3493NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA3493NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1.25:1
 *
 * KiCad symbol: `Transformer:PA0185NL1`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA3493NL*.
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA3493NL.
 */
export class PA0185NL1 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA0185NL1";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1:1
 *
 * KiCad symbol: `Transformer:PA2004NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2004NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/P663.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2004NL.
 */
export class PA2004NL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2004NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1:1
 *
 * KiCad symbol: `Transformer:PA0264NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2004NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2004NL.
 */
export class PA0264NL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA0264NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 2:1:1
 *
 * KiCad symbol: `Transformer:PA0297NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2002NL*PA2008NL*PA2009NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2002NL-PA2008NL-PA2009NL.
 */
export class PA0297NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA0297NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 2.5:1:1
 *
 * KiCad symbol: `Transformer:PA0510NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2002NL*PA2008NL*PA2009NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2002NL-PA2008NL-PA2009NL.
 */
export class PA0510NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA0510NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PA1323NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA1323NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA1323NL.
 */
export class PA1323NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA1323NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PA2001NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2001NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/P663.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2001NL.
 */
export class PA2001NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2001NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 2:1:1
 *
 * KiCad symbol: `Transformer:PA2008NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2002NL*PA2008NL*PA2009NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/P663.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2002NL-PA2008NL-PA2009NL.
 */
export class PA2008NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2008NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 2.5:1:1
 *
 * KiCad symbol: `Transformer:PA2009NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2002NL*PA2008NL*PA2009NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/P663.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2002NL-PA2008NL-PA2009NL.
 */
export class PA2009NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PA2009NL";
  override referencePrefix = "T";
}

/**
 * SMT Gate Drive Transformer, 1:1
 *
 * KiCad symbol: `Transformer:PE-68386NL`. Reference prefix: `T`.
 * Footprint filters: Pulse*PA2001NL*.
 * @see https://productfinder.pulseeng.com/products/datasheets/SPM2007_61.pdf
 * Keywords: pulse.
 * Default footprint: Transformer_SMD:Pulse_PA2001NL.
 */
export class PE_68386NL extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PE-68386NL";
  override referencePrefix = "T";
}

/**
 * Ethernet LAN 10/100 Base-Tx Transformer with Center Taps
 *
 * KiCad symbol: `Transformer:PT61017PEL`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Ethernet*Bourns*PT61017PEL*.
 * @see https://www.bourns.com/docs/Product-Datasheets/PT61017PEL.pdf
 * Keywords: single port ethernet transformer poe center-tap.
 * Default footprint: Transformer_SMD:Transformer_Ethernet_Bourns_PT61017PEL.
 */
export class PT61017PEL extends Component.withPins({
  "TD+": "1",
  "C_TD": "2",
  "TD-": "3",
  "RD+": "6",
  "C_RD": "7",
  "RD-": "8",
  "RX-": "9",
  "C_RX": "10",
  "RX+": "11",
  "TX-": "14",
  "C_TX": "15",
  "TX+": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", C_TD: "passive", "TD-": "passive", "RD+": "passive", C_RD: "passive", "RD-": "passive", "RX-": "passive", C_RX: "passive", "RX+": "passive", "TX-": "passive", C_TX: "passive", "TX+": "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PT61017PEL";
  override referencePrefix = "TR";
}

/**
 * 10/100/1000 Base-T Ethernet Transformer, SMD-24
 *
 * KiCad symbol: `Transformer:PT61020EL`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Ethernet*Bourns*PT61020EL*.
 * @see https://www.bourns.com/pdfs/PT61020.pdf
 * Keywords: Gigabit PoE RJ45 Transformer Ethernet Lan.
 * Default footprint: Transformer_SMD:Transformer_Ethernet_Bourns_PT61020EL.
 */
export class PT61020EL extends Component.withPins({
  "TCT1": "1",
  "TD1+": "2",
  "TD1-": "3",
  "TCT2": "4",
  "TD2+": "5",
  "TD2-": "6",
  "TCT3": "7",
  "TD3+": "8",
  "TD3-": "9",
  "TCT4": "10",
  "TD4+": "11",
  "TD4-": "12",
  "MX4-": "13",
  "MX4+": "14",
  "MCT4": "15",
  "MX3-": "16",
  "MX3+": "17",
  "MCT3": "18",
  "MX2-": "19",
  "MX2+": "20",
  "MCT2": "21",
  "MX1-": "22",
  "MX1+": "23",
  "MCT1": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TCT1: "passive", "TD1+": "passive", "TD1-": "passive", TCT2: "passive", "TD2+": "passive", "TD2-": "passive", TCT3: "passive", "TD3+": "passive", "TD3-": "passive", TCT4: "passive", "TD4+": "passive", "TD4-": "passive", "MX4-": "passive", "MX4+": "passive", MCT4: "passive", "MX3-": "passive", "MX3+": "passive", MCT3: "passive", "MX2-": "passive", "MX2+": "passive", MCT2: "passive", "MX1-": "passive", "MX1+": "passive", MCT1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:PT61020EL";
  override referencePrefix = "TR";
}

/**
 * 4.5-3000MHz 1:1 RF Transformer, Balanced Transmission Line, AT224-1A
 *
 * KiCad symbol: `Transformer:TC1-1-13M+`. Reference prefix: `TR`.
 * Footprint filters: Transformer*AT224*.
 * @see https://www.minicircuits.com/pdfs/TC1-1-13M+.pdf
 * Keywords: Mini-circuits RF Transformer.
 * Default footprint: Transformer_SMD:Transformer_MiniCircuits_AT224-1A.
 */
export class TC1_1_13M_ extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TC1-1-13M+";
  override referencePrefix = "TR";
}

/**
 * TEZ0.5/D/x, 0.5VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ0.5-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*22x24*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 0.5VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-22x24.
 */
export class TEZ0_5_D_1 extends Component.withPins({
  "P1": "1",
  "P4": "4",
  "P6": "6",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P4: "passive", P6: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ0.5-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ0.5/D/x-x, 0.5VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ0.5-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*22x24*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 0.5VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-22x24.
 */
export class TEZ0_5_D_2 extends Component.withPins({
  "P1": "1",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ0.5-D-2";
  override referencePrefix = "TR";
}

/**
 * TEZ1.5/D/x, 1.5VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ1.5-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*28x33*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 1.5VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-28x33.
 */
export class TEZ1_5_D_1 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P7": "7",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P7: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ1.5-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ1.5/D/x-x, 1.5VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ1.5-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*28x33*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 1.5VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-28x33.
 */
export class TEZ1_5_D_2 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P6: "passive", P7: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ1.5-D-2";
  override referencePrefix = "TR";
}

/**
 * TEZ10.0/D/x, 10VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ10.0-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*44x52*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 10VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-44x52.
 */
export class TEZ10_0_D_1 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "P11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P6: "passive", P8: "passive", P11: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ10.0-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ10.0/D/x-x, 10VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ10.0-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*44x52*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 10VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-44x52.
 */
export class TEZ10_0_D_2 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P11": "11",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P6: "passive", P7: "passive", P8: "passive", P11: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ10.0-D-2";
  override referencePrefix = "TR";
}

/**
 * TEZ16.0/D/x, 16VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ16.0-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*47x57*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 16VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-47x57.
 */
export class TEZ16_0_D_1 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P9": "9",
  "P13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P7: "passive", P9: "passive", P13: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ16.0-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ16.0/D/x-x, 16VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ16.0-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*47x57*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 16VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-47x57.
 */
export class TEZ16_0_D_2 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P13": "13",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P7: "passive", P8: "passive", P9: "passive", P13: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ16.0-D-2";
  override referencePrefix = "TR";
}

/**
 * TEZ2.0/D/x, 2VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ2.0-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*28x33*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 2VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-28x33.
 */
export class TEZ2_0_D_1 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P7": "7",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P7: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ2.0-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ2.0/D/x-x, 2VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ2.0-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*28x33*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 2VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-28x33.
 */
export class TEZ2_0_D_2 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P6: "passive", P7: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ2.0-D-2";
  override referencePrefix = "TR";
}

/**
 * TEZ2.5/D/x, 2.5VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ2.5-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*28x33*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 2.5VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-28x33.
 */
export class TEZ2_5_D_1 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P7": "7",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P7: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ2.5-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ2.5/D/x-x, 2.5VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ2.5-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*28x33*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 2.5VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-28x33.
 */
export class TEZ2_5_D_2 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P6: "passive", P7: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ2.5-D-2";
  override referencePrefix = "TR";
}

/**
 * TEZ2.6/D/x, 2.6VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ2.6-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*28x33*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 2.6VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-28x33.
 */
export class TEZ2_6_D_1 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P7": "7",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P7: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ2.6-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ2.6/D/x-x, 2.6VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ2.6-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*28x33*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 2.6VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-28x33.
 */
export class TEZ2_6_D_2 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P6: "passive", P7: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ2.6-D-2";
  override referencePrefix = "TR";
}

/**
 * TEZ4.0/D/x, 4VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ4.0-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*35x42*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 4VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-35x42.
 */
export class TEZ4_0_D_1 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P7": "7",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P7: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ4.0-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ4.0/D/x-x, 4VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ4.0-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*35x42*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 4VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-35x42.
 */
export class TEZ4_0_D_2 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P6: "passive", P7: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ4.0-D-2";
  override referencePrefix = "TR";
}

/**
 * TEZ6.0/D/x, 6VA, Single Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ6.0-D-1`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*38x45*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 6VA PCB Transformer Single Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-38x45.
 */
export class TEZ6_0_D_1 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P7": "7",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P7: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ6.0-D-1";
  override referencePrefix = "TR";
}

/**
 * TEZ6.0/D/x-x, 6VA, Dual Secondary, Cast Resin Transformer, PCB
 *
 * KiCad symbol: `Transformer:TEZ6.0-D-2`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Breve*TEZ*38x45*.
 * @see http://www.breve.pl/pdf/ANG/TEZ_ang.pdf
 * Keywords: 6VA PCB Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Breve_TEZ-38x45.
 */
export class TEZ6_0_D_2 extends Component.withPins({
  "P1": "1",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P5: "passive", P6: "passive", P7: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TEZ6.0-D-2";
  override referencePrefix = "TR";
}

/**
 * Ethernet LAN 10/100 Base-Tx Transformer
 *
 * KiCad symbol: `Transformer:TG110-E050N5xx`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Ethernet*Halo*N5*.
 * @see https://www.haloelectronics.com/pdf/discrete-ultra-100baset.pdf
 * Keywords: single port ethernet transformer.
 * Default footprint: Transformer_SMD:Transformer_Ethernet_Halo_N5_SO-16_7.11x12.7mm.
 */
export class TG110_E050N5xx extends Component.withPins({
  "TX-": "1",
  "C_TX": "2",
  "TX+": "3",
  "NC_4": "4",
  "NC_5": "5",
  "RX-": "6",
  "C_RX": "7",
  "RX+": "8",
  "RD+": "9",
  "C_RD": "10",
  "RD-": "11",
  "NC_12": "12",
  "NC_13": "13",
  "TD+": "14",
  "C_TD": "15",
  "TD-": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TX-": "passive", C_TX: "passive", "TX+": "passive", NC_4: "no_connect", NC_5: "no_connect", "RX-": "passive", C_RX: "passive", "RX+": "passive", "RD+": "passive", C_RD: "passive", "RD-": "passive", NC_12: "no_connect", NC_13: "no_connect", "TD+": "passive", C_TD: "passive", "TD-": "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TG110-E050N5xx";
  override referencePrefix = "TR";
}

/**
 * Ethernet LAN 10/100 Base-Tx Transformer
 *
 * KiCad symbol: `Transformer:TG110-S050N2xx`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Ethernet*Halo*N2*.
 * @see https://www.haloelectronics.com/pdf/discrete-ultra-100baset.pdf
 * Keywords: single port ethernet transformer.
 * Default footprint: Transformer_SMD:Transformer_Ethernet_Halo_N2_SO-16_7.11x12.7mm.
 */
export class TG110_S050N2xx extends Component.withPins({
  "TX-": "1",
  "C_TX": "2",
  "TX+": "3",
  "NC_4": "4",
  "NC_5": "5",
  "RX-": "6",
  "C_RX": "7",
  "RX+": "8",
  "RD+": "9",
  "C_RD": "10",
  "RD-": "11",
  "NC_12": "12",
  "NC_13": "13",
  "TD+": "14",
  "C_TD": "15",
  "TD-": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TX-": "passive", C_TX: "passive", "TX+": "passive", NC_4: "no_connect", NC_5: "no_connect", "RX-": "passive", C_RX: "passive", "RX+": "passive", "RD+": "passive", C_RD: "passive", "RD-": "passive", NC_12: "no_connect", NC_13: "no_connect", "TD+": "passive", C_TD: "passive", "TD-": "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TG110-S050N2xx";
  override referencePrefix = "TR";
}

/**
 * Single Port Gigabit Ethernet Transformers
 *
 * KiCad symbol: `Transformer:TG111-MSC13LF`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Ethernet*HALO*TG111*.
 * @see https://www.haloelectronics.com/pdf/discrete-genesus.pdf
 * Keywords: Single Port Gigabit Ethernet Transformer.
 * Default footprint: Transformer_SMD:Transformer_Ethernet_HALO_TG111-MSC13.
 */
export class TG111_MSC13LF extends Component.withPins({
  "TCT1": "1",
  "TD1+": "2",
  "TD1-": "3",
  "TCT2": "4",
  "TD2+": "5",
  "TD2-": "6",
  "TCT3": "7",
  "TD3+": "8",
  "TD3-": "9",
  "TCT4": "10",
  "TD4+": "11",
  "TD4-": "12",
  "MX4-": "13",
  "MX4+": "14",
  "MCT4": "15",
  "MTX3-": "16",
  "MTX3+": "17",
  "MCT3": "18",
  "MTX2-": "19",
  "MTX2+": "20",
  "MCT2": "21",
  "MTX1-": "22",
  "MTX1+": "23",
  "MTC1": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TCT1: "passive", "TD1+": "passive", "TD1-": "passive", TCT2: "passive", "TD2+": "passive", "TD2-": "passive", TCT3: "passive", "TD3+": "passive", "TD3-": "passive", TCT4: "passive", "TD4+": "passive", "TD4-": "passive", "MX4-": "passive", "MX4+": "passive", MCT4: "passive", "MTX3-": "passive", "MTX3+": "passive", MCT3: "passive", "MTX2-": "passive", "MTX2+": "passive", MCT2: "passive", "MTX1-": "passive", "MTX1+": "passive", MTC1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TG111-MSC13LF";
  override referencePrefix = "TR";
}

/**
 * TR1-SO8
 *
 * KiCad symbol: `Transformer:TR1-SO8`. Reference prefix: `TR`.
 */
export class TR1_SO8 extends Component.withPins({
  "P1": "1",
  "P4": "4",
  "P5": "5",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P4: "passive", P5: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TR1-SO8";
  override referencePrefix = "TR";
}

/**
 * TR60_FC
 *
 * KiCad symbol: `Transformer:TR60_FC`. Reference prefix: `TR`.
 */
export class TR60_FC extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TR60_FC";
  override referencePrefix = "TR";
}

/**
 * TR60_IC
 *
 * KiCad symbol: `Transformer:TR60_IC`. Reference prefix: `TR`.
 */
export class TR60_IC extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TR60_IC";
  override referencePrefix = "TR";
}

/**
 * TR60_IC2
 *
 * KiCad symbol: `Transformer:TR60_IC2`. Reference prefix: `TR`.
 */
export class TR60_IC2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TR60_IC2";
  override referencePrefix = "TR";
}

/**
 * TRANSF1
 *
 * KiCad symbol: `Transformer:TRANSF1`. Reference prefix: `TR`.
 */
export class TRANSF1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TRANSF1";
  override referencePrefix = "TR";
}

/**
 * TRANSF2
 *
 * KiCad symbol: `Transformer:TRANSF2`. Reference prefix: `TR`.
 */
export class TRANSF2 extends Component.withPins({
  "P0": "0",
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P0: "passive", P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TRANSF2";
  override referencePrefix = "TR";
}

/**
 * TRANSF3
 *
 * KiCad symbol: `Transformer:TRANSF3`. Reference prefix: `TR`.
 */
export class TRANSF3 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TRANSF3";
  override referencePrefix = "TR";
}

/**
 * TRANSF4
 *
 * KiCad symbol: `Transformer:TRANSF4`. Reference prefix: `TR`.
 */
export class TRANSF4 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TRANSF4";
  override referencePrefix = "TR";
}

/**
 * TRANSF5
 *
 * KiCad symbol: `Transformer:TRANSF5`. Reference prefix: `TR`.
 */
export class TRANSF5 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TRANSF5";
  override referencePrefix = "TR";
}

/**
 * TRANSF6
 *
 * KiCad symbol: `Transformer:TRANSF6`. Reference prefix: `TR`.
 */
export class TRANSF6 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TRANSF6";
  override referencePrefix = "TR";
}

/**
 * TRANSF7
 *
 * KiCad symbol: `Transformer:TRANSF7`. Reference prefix: `TR`.
 */
export class TRANSF7 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TRANSF7";
  override referencePrefix = "TR";
}

/**
 * TRANSF8
 *
 * KiCad symbol: `Transformer:TRANSF8`. Reference prefix: `TR`.
 */
export class TRANSF8 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:TRANSF8";
  override referencePrefix = "TR";
}

/**
 * Power transformer, 2x Pri, 2x Sec, 230/115 VAC to 16/8V (0.31/0.62 A)
 *
 * KiCad symbol: `Transformer:Triad_VPP16-310`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Triad*VPP16?310*.
 * @see https://catalog.triadmagnetics.com/Asset/VPP16-310.pdf
 * Keywords: power center-tap.
 * Default footprint: Transformer_THT:Transformer_Triad_VPP16-310.
 */
export class Triad_VPP16_310 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "passive", P7: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:Triad_VPP16-310";
  override referencePrefix = "TR";
}

/**
 * Ethernet LAN 10/100 Base-Tx Transformer CT, SMD
 *
 * KiCad symbol: `Transformer:Wuerth_749013011A`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Ethernet*Wuerth*749013011A*.
 * @see https://www.we-online.com/katalog/datasheet/749013011A.pdf
 * Keywords: single port ethernet transformer poe center tap.
 * Default footprint: Transformer_SMD:Transformer_Ethernet_Wuerth_749013011A.
 */
export class Wuerth_749013011A extends Component.withPins({
  "TD+": "1",
  "C_TD": "2",
  "TD-": "3",
  "RD+": "6",
  "C_RD": "7",
  "RD-": "8",
  "RX-": "9",
  "C_RX": "10",
  "RX+": "11",
  "TX-": "14",
  "C_TX": "15",
  "TX+": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", C_TD: "passive", "TD-": "passive", "RD+": "passive", C_RD: "passive", "RD-": "passive", "RX-": "passive", C_RX: "passive", "RX+": "passive", "TX-": "passive", C_TX: "passive", "TX+": "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:Wuerth_749013011A";
  override referencePrefix = "TR";
}

/**
 * 5V, 1A , 320 - 480kHz, 1:1.1, Center Tapped, SMD
 *
 * KiCad symbol: `Transformer:Wuerth_750315371`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Wuerth*750315371*.
 * @see https://www.we-online.com/catalog/datasheet/750315371.pdf
 * Keywords: Power Center Tapped Flyback Transformer AEC-Q200.
 * Default footprint: Transformer_SMD:Transformer_Wuerth_750315371.
 */
export class Wuerth_750315371 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:Wuerth_750315371";
  override referencePrefix = "TR";
}

/**
 * Primary 18-60V 300kHz, Dual Secondary 12V-3A/12V-1A, Flyback Transformer, PCB
 *
 * KiCad symbol: `Transformer:Wuerth_750343373`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Wuerth*750343373*.
 * @see https://katalog.we-online.com/ctm/datasheet/750343373.pdf
 * Keywords: PCB Flyback Transformer Dual Secondary.
 * Default footprint: Transformer_THT:Transformer_Wuerth_750343373.
 */
export class Wuerth_750343373 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "no_connect", P9: "no_connect", P10: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Transformer:Wuerth_750343373";
  override referencePrefix = "TR";
}

/**
 * Primary 120-420V 60kHz, Dual Secondary 12V-0.5A/12V-0.5A, Single Aux 15V 0.1A, Flyback Transformer, PCB
 *
 * KiCad symbol: `Transformer:Wuerth_760871131`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Wuerth*760871131*.
 * @see https://www.we-online.com/catalog/datasheet/760871131.pdf
 * Keywords: flyback dual secondary single aux.
 * Default footprint: Transformer_THT:Transformer_Wuerth_760871131.
 */
export class Wuerth_760871131 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", P4: "no_connect", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:Wuerth_760871131";
  override referencePrefix = "TR";
}

/**
 * WE-AGDT Auxiliary Gate Drive, WE-AGDT-EP7
 *
 * KiCad symbol: `Transformer:Wurth_750319177`. Reference prefix: `TR`.
 * Footprint filters: Transformer*Wurth*WE*AGDT*EP7*.
 * @see https://www.we-online.com/components/products/datasheet/750319177.pdf
 * Keywords: auxiliary gate drive transformer low insulation capacitance.
 * Default footprint: Transformer_SMD:Transformer_Wurth_WE-AGDT-EP7.
 */
export class Wurth_750319177 extends Component.withPins({
  "P1": "1",
  "NC_2": "2",
  "P3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "P6": "6",
  "NC_7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", NC_2: "no_connect", P3: "passive", NC_4: "no_connect", NC_5: "no_connect", P6: "passive", NC_7: "no_connect", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:Wurth_750319177";
  override referencePrefix = "TR";
}

/**
 * Qingxian Zeming Langxi Electronic ZMCT103C current transformer 1000:1 10A
 *
 * KiCad symbol: `Transformer:ZMCT103C`. Reference prefix: `TR`.
 * Footprint filters: Transformer*ZMCT103C*.
 * @see https://5krorwxhmqqirik.leadongcdn.com/ZMCT103C+specification-aidirBqoKomRilSjpimnokp.pdf
 * Keywords: current sense transformer.
 * Default footprint: Transformer_THT:Transformer_Zeming_ZMCT103C.
 */
export class ZMCT103C extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ZMCT103C";
  override referencePrefix = "TR";
}

/**
 * Qingxian Zeming Langxi Electronic ZMPT101K voltage transformer 1000:1000 2mA:2mA
 *
 * KiCad symbol: `Transformer:ZMPT101K`. Reference prefix: `TR`.
 * Footprint filters: Transformer*ZMPT101K*.
 * @see https://5krorwxhmqqirik.leadongcdn.com/ZMPT101K+specification-aidikBqoKomRilSkopqmikp.pdf
 * Default footprint: Transformer_THT:Transformer_Zeming_ZMPT101K.
 */
export class ZMPT101K extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transformer:ZMPT101K";
  override referencePrefix = "TR";
}
