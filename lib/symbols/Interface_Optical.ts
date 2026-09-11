// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * IR Receiver Modules for remote controls
 *
 * KiCad symbol: `Interface_Optical:IRM-H6xxT`. Reference prefix: `U`.
 * Footprint filters: Everlight*IRM?H6xxT*.
 * @see https://en.everlight.com/wp-content/plugins/ItemRelationship/product_files/pdf/DMO-0000004-IRM-H6XX-TR2_Series_Datasheet_V4.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Everlight_IRM-H6xxT.
 */
export class IRM_H6xxT extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:IRM-H6xxT";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:IS471F`. Reference prefix: `U`.
 * Footprint filters: Sharp*IS471F*.
 * @see http://www.micropik.com/PDF/tsop17xx.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Sharp_IS471F.
 */
export class IS471F extends Component.withPins({
  "Vs": "1",
  "OUT": "2",
  "GND": "3",
  "GLo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vs: "power_in", OUT: "output", GND: "power_in", GLo: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:IS471F";
  override referencePrefix = "U";
}

/**
 * Built-in Amplifier Type OPIC Light Detector
 *
 * KiCad symbol: `Interface_Optical:IS485`. Reference prefix: `U`.
 * Footprint filters: Sharp*IS485*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Sharp%20PDFs/is485,486_e.pdf
 * Keywords: opto receiver amplifier light detector OPIC.
 * Default footprint: OptoDevice:Sharp_IS485.
 */
export class IS485 extends Component.withPins({
  "GND": "1",
  "OUT": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", OUT: "output", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:IS485";
  override referencePrefix = "U";
}

/**
 * Built-in Amplifier Type OPIC Light Detector
 *
 * KiCad symbol: `Interface_Optical:IS486`. Reference prefix: `U`.
 * Footprint filters: Sharp*IS485*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Sharp%20PDFs/is485,486_e.pdf
 * Keywords: opto receiver amplifier light detector OPIC.
 * Default footprint: OptoDevice:Sharp_IS485.
 */
export class IS486 extends Component.withPins({
  "GND": "1",
  "OUT": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", OUT: "output", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:IS486";
  override referencePrefix = "U";
}

/**
 * Plastic Silicon Photosensor
 *
 * KiCad symbol: `Interface_Optical:QSE159`. Reference prefix: `U`.
 * Footprint filters: *QSE15*.
 * @see http://www.onsemi.com/pub/Collateral/QSE159-D.pdf
 * Keywords: opto IR.
 * Default footprint: OptoDevice:ONSemi_QSE15x.
 */
export class QSE159 extends Component.withPins({
  "GND": "1",
  "Out": "2",
  "Vcc": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", Out: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:QSE159";
  override referencePrefix = "U";
}

/**
 * Connector for Small Form Factor Pluggable (SFP) module, 1 Gbit/s, serial-to-serial data-agnostic optical transceiver
 *
 * KiCad symbol: `Interface_Optical:SFP`. Reference prefix: `J`.
 * Footprint filters: *SFP*.
 * @see http://www.10gtek.com/templates/wzten/pdf/INF-8074.pdf
 * Keywords: SFP transceiver gigabit ethernet INF-8074i.
 */
export class SFP extends Component.withPins({
  "VeeT_1": "1",
  "TX_FAULT": "2",
  "TX_DISABLE": "3",
  "MOD_DEF2": "4",
  "MOD_DEF1": "5",
  "MOD_DEF0": "6",
  "RATE_SELECT": "7",
  "RX_LOS": "8",
  "VeeR_9": "9",
  "VeeR_10": "10",
  "VeeR_11": "11",
  "RD-": "12",
  "RD+": "13",
  "VeeR_14": "14",
  "VccR": "15",
  "VccT": "16",
  "VeeT_17": "17",
  "TD+": "18",
  "TD-": "19",
  "VeeT_20": "20",
  "PCAGE": "CAGE",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VeeT_1: "power_in", TX_FAULT: "open_collector", TX_DISABLE: "input", MOD_DEF2: "bidirectional", MOD_DEF1: "input", MOD_DEF0: "passive", RATE_SELECT: "input", RX_LOS: "open_collector", VeeR_9: "passive", VeeR_10: "power_in", VeeR_11: "passive", "RD-": "output", "RD+": "output", VeeR_14: "passive", VccR: "power_in", VccT: "power_in", VeeT_17: "passive", "TD+": "input", "TD-": "input", VeeT_20: "passive", PCAGE: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:SFP";
  override referencePrefix = "J";
}

/**
 * Connector for Small Form Factor Pluggable (SFP+) module, 10 Gbit/s, serial-to-serial data-agnostic optical transceiver
 *
 * KiCad symbol: `Interface_Optical:SFP+`. Reference prefix: `J`.
 * Footprint filters: *SFP*.
 * @see https://members.snia.org/document/dl/25892
 * Keywords: SFP transceiver gigabit ethernet SFF-8432.
 */
export class SFP_ extends Component.withPins({
  "VeeT_1": "1",
  "TX_FAULT": "2",
  "TX_DISABLE": "3",
  "SDA": "4",
  "SCL": "5",
  "MOD_ABS": "6",
  "RS0": "7",
  "RX_LOS": "8",
  "RS1": "9",
  "VeeR_10": "10",
  "VeeR_11": "11",
  "RD-": "12",
  "RD+": "13",
  "VeeR_14": "14",
  "VccR": "15",
  "VccT": "16",
  "VeeT_17": "17",
  "TD+": "18",
  "TD-": "19",
  "VeeT_20": "20",
  "PCAGE": "CAGE",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VeeT_1: "power_in", TX_FAULT: "open_collector", TX_DISABLE: "input", SDA: "bidirectional", SCL: "input", MOD_ABS: "passive", RS0: "input", RX_LOS: "open_collector", RS1: "input", VeeR_10: "power_in", VeeR_11: "passive", "RD-": "output", "RD+": "output", VeeR_14: "passive", VccR: "power_in", VccT: "power_in", VeeT_17: "passive", "TD+": "input", "TD-": "input", VeeT_20: "passive", PCAGE: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:SFP+";
  override referencePrefix = "J";
}

/**
 * IR Receiver Modules for Data Transmission
 *
 * KiCad symbol: `Interface_Optical:TSDP341xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82667/tsdp341.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSDP341xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSDP341xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Data Transmission
 *
 * KiCad symbol: `Interface_Optical:TSDP343xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82667/tsdp341.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSDP343xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSDP343xx";
  override referencePrefix = "U";
}

/**
 * Photo Module (Repeater) for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSMP58138`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82486/tsmp58138.pdf
 * Keywords: opto IR repeater receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSMP58138 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSMP58138";
  override referencePrefix = "U";
}

/**
 * Photo Module (Amplify&Condition) for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSMP58000`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82485/tsmp58000.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSMP58000 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSMP58000";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP17xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*CAST*.
 * @see http://www.micropik.com/PDF/tsop17xx.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_CAST-3Pin.
 */
export class TSOP17xx extends Component.withPins({
  "GND": "1",
  "Vs": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", Vs: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP17xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP32S40F`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82669/tsop32s40f.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP32S40F extends Component.withPins({
  "OUT": "1",
  "Vs": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", Vs: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP32S40F";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP21xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP21xx extends Component.withPins({
  "OUT": "1",
  "Vs": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", Vs: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP21xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP23xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP23xx extends Component.withPins({
  "OUT": "1",
  "Vs": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", Vs: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP23xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP25xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP25xx extends Component.withPins({
  "OUT": "1",
  "Vs": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", Vs: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP25xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP312xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*CAST*.
 * @see http://www.vishay.com/docs/82492/tsop312.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_CAST-3Pin.
 */
export class TSOP312xx extends Component.withPins({
  "GND": "1",
  "Vs": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", Vs: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP312xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP314xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*CAST*.
 * @see http://www.vishay.com/docs/82492/tsop312.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_CAST-3Pin.
 */
export class TSOP314xx extends Component.withPins({
  "GND": "1",
  "Vs": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", Vs: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP314xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP321xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP321xx extends Component.withPins({
  "OUT": "1",
  "Vs": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", Vs: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP321xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP323xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP323xx extends Component.withPins({
  "OUT": "1",
  "Vs": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", Vs: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP323xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP325xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP325xx extends Component.withPins({
  "OUT": "1",
  "Vs": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", Vs: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP325xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP331xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82742/tsop331.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 */
export class TSOP331xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP331xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP333xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82742/tsop331.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 */
export class TSOP333xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP333xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP335xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82742/tsop331.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 */
export class TSOP335xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP335xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP341xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP341xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP341xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP343xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP343xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP343xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP345xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP345xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP345xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP348xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see https://www.vishay.com/docs/82489/tsop322.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP348xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP348xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP34S40F`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82669/tsop32s40f.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP34S40F extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP34S40F";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP581xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82462/tsop581.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSOP581xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP581xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP382xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82491/tsop382.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSOP382xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP382xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP384xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82491/tsop382.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSOP384xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP384xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP38G36`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82731/tsop38g36.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSOP38G36 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP38G36";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP41xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP41xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP41xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP43xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP43xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP43xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP45xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 */
export class TSOP45xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP45xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP531xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82745/tsop531.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 */
export class TSOP531xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP531xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP533xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82745/tsop531.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 */
export class TSOP533xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP533xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP535xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82745/tsop531.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 */
export class TSOP535xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP535xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP582xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82461/tsop582.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSOP582xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP582xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP583xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82462/tsop581.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSOP583xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP583xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP584xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82461/tsop582.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSOP584xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP584xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP585xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82462/tsop581.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSOP585xx extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Optical:TSOP585xx";
  override referencePrefix = "U";
}
