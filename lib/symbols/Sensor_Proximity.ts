// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Capacitance to digital converter for proximity sensing, 2-channel, 12 bit, 0..13pF range, 2.7..3.6V supply, I²C interface, MSOP-8
 *
 * KiCad symbol: `Sensor_Proximity:AD7150BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7150.pdf
 * Keywords: Analog ADI CDC dual.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD7150BRMZ extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "CIN2": "3",
  "CIN1": "4",
  "EXC2": "5",
  "EXC1": "6",
  "OUT1": "7",
  "OUT2": "8",
  "SCL": "9",
  "SDA": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", CIN2: "passive", CIN1: "passive", EXC2: "output", EXC1: "output", OUT1: "output", OUT2: "output", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:AD7150BRMZ";
  override referencePrefix = "U";
}

/**
 * Capacitance to digital converter for proximity sensing, 1-channel, 12 bit, 0..13pF range, 2.7..3.6V supply, I²C interface, MSOP-8
 *
 * KiCad symbol: `Sensor_Proximity:AD7151BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7151.pdf
 * Keywords: Analog ADI CDC single.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD7151BRMZ extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "SCL": "9",
  "SDA": "10",
  "NC_3": "3",
  "CIN": "4",
  "NC_5": "5",
  "EXC": "6",
  "OUT": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", SCL: "input", SDA: "bidirectional", NC_3: "no_connect", CIN: "passive", NC_5: "no_connect", EXC: "output", OUT: "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:AD7151BRMZ";
  override referencePrefix = "U";
}

/**
 * Proximity Sensor, I2C interface, 1.7-3.6V, LGA-8
 *
 * KiCad symbol: `Sensor_Proximity:APDS-9160-003`. Reference prefix: `U`.
 * Footprint filters: Broadcom*APDS*9160*003*.
 * @see https://docs.broadcom.com/docs/APDS-9160-003-DS
 * Keywords: opto proximity sensor avago broadcom.
 * Default footprint: OptoDevice:Broadcom_APDS-9160-003.
 */
export class APDS_9160_003 extends Component.withPins({
  "GND": "1",
  "INT": "2",
  "LDR": "3",
  "LEDK": "4",
  "LEDA": "5",
  "VDD": "6",
  "SDA": "7",
  "SCL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", INT: "open_collector", LDR: "input", LEDK: "output", LEDA: "input", VDD: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:APDS-9160-003";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:ITR8307`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307*.
 * @see http://www.everlight.com/file/ProductFile/ITR8307.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307.
 */
export class ITR8307 extends Component.withPins({
  "K": "1",
  "A": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:ITR8307";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:BPR-105`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307*.
 * @see http://www.ystone.com.tw/en/data/goods/IRPT/Photo%20Interrupters-Reflective%20Type.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307.
 */
export class BPR_105 extends Component.withPins({
  "K": "1",
  "A": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:BPR-105";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, DIP-like THT-package
 *
 * KiCad symbol: `Sensor_Proximity:ITR8307-F43`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307F43*.
 * @see https://everlighteurope.com/index.php?controller=attachment&id_attachment=5385
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307F43.
 */
export class ITR8307_F43 extends Component.withPins({
  "K": "1",
  "A": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:ITR8307-F43";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, DIP-like THT-package
 *
 * KiCad symbol: `Sensor_Proximity:BPR-105F`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307F43*.
 * @see http://www.ystone.com.tw/en/data/goods/IRPT/Photo%20Interrupters-Reflective%20Type.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307F43.
 */
export class BPR_105F extends Component.withPins({
  "K": "1",
  "A": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:BPR-105F";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, Darlington photo transistor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:BPR-205`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307*.
 * @see http://www.ystone.com.tw/en/data/goods/IRPT/Photo%20Interrupters-Reflective%20Type.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307.
 */
export class BPR_205 extends Component.withPins({
  "K": "1",
  "A": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:BPR-205";
  override referencePrefix = "U";
}

/**
 * Reflective Optical Sensor with Transistor Output
 *
 * KiCad symbol: `Sensor_Proximity:CNY70`. Reference prefix: `U`.
 * Footprint filters: Vishay*CNY70*.
 * @see https://www.vishay.com/docs/83751/cny70.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Vishay_CNY70.
 */
export class CNY70 extends Component.withPins({
  "A": "1",
  "K": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:CNY70";
  override referencePrefix = "U";
}

/**
 * Capacitance-to-digital converter for proximity sensing with active shield, 4-channel, 16-bit, +/-15 pF range, 3.3V supply, I²C interface, TSSOP-10
 *
 * KiCad symbol: `Sensor_Proximity:FDC1004DGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/fdc1004.pdf
 * Keywords: Texas-Instruments CDC quad I2C.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class FDC1004DGS extends Component.withPins({
  "SHLD1": "1",
  "CIN1": "2",
  "CIN2": "3",
  "CIN3": "4",
  "CIN4": "5",
  "SHLD2": "6",
  "GND": "7",
  "VDD": "8",
  "SCL": "9",
  "SDA": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SHLD1: "output", CIN1: "input", CIN2: "input", CIN3: "input", CIN4: "input", SHLD2: "output", GND: "power_in", VDD: "power_in", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:FDC1004DGS";
  override referencePrefix = "U";
}

/**
 * Reflective Optical Sensor 0.217" (5.5mm) 4-SMD
 *
 * KiCad symbol: `Sensor_Proximity:GP2S700HCP`. Reference prefix: `U`.
 * Footprint filters: Sharp*GP2S700HCP*.
 * @see https://www.sharpsde.com/fileadmin/products/Optoelectronics/Isolation%20Devices/Specs_Photointerrupter/GP2S700HCP_03Oct05_DS_D3-A02201FEN.pdf
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:Sharp_GP2S700HCP.
 */
export class GP2S700HCP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "K": "3",
  "A": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "open_emitter", P2: "open_collector", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:GP2S700HCP";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, SMD-4
 *
 * KiCad symbol: `Sensor_Proximity:ITR1201SR10AR`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR1201SR10AR*.
 * @see http://www.everlight.com/file/ProductFile/ITR1201SR10AR-TR.pdf
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:Everlight_ITR1201SR10AR.
 */
export class ITR1201SR10AR extends Component.withPins({
  "K": "1",
  "A": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", P3: "open_collector", P4: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:ITR1201SR10AR";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, SMD-4
 *
 * KiCad symbol: `Sensor_Proximity:ITR8307-L24-TR8`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR1201SR10AR*.
 * @see https://www.everlight.com/file/ProductFile/ITR8307-L24-TR8.pdf
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:Everlight_ITR1201SR10AR.
 */
export class ITR8307_L24_TR8 extends Component.withPins({
  "K": "1",
  "A": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", P3: "open_collector", P4: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:ITR8307-L24-TR8";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, SMD-4
 *
 * KiCad symbol: `Sensor_Proximity:ITR8307-S17-TR8`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR1201SR10AR*.
 * @see https://datasheet.lcsc.com/szlcsc/1810010232_Everlight-Elec-ITR8307-S17-TR8-B_C81632.pdf
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:Everlight_ITR1201SR10AR.
 */
export class ITR8307_S17_TR8 extends Component.withPins({
  "K": "1",
  "A": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", P3: "open_collector", P4: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:ITR8307-S17-TR8";
  override referencePrefix = "U";
}

/**
 * Photointerrupter infrared LED with photo IC, -25 to +85 degree Celsius
 *
 * KiCad symbol: `Sensor_Proximity:ITR9608-F`. Reference prefix: `U`.
 * Footprint filters: *ITR9608*.
 * @see https://www.everlighteurope.com/custom/files/datasheets/DRX-0000076.pdf
 * Keywords: Photointerrupter opto interrupter infrared LED fast response time infrared 940nm 5mm gap.
 * Default footprint: OptoDevice:Everlight_ITR9608-F.
 */
export class ITR9608_F extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "open_collector", P4: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:ITR9608-F";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor
 *
 * KiCad symbol: `Sensor_Proximity:KRC011`. Reference prefix: `U`.
 * Footprint filters: Kingbright?KRC011*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KRC011(Ver.15).pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kingbright_KRC011_Vertical.
 */
export class KRC011 extends Component.withPins({
  "A": "1",
  "K": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:KRC011";
  override referencePrefix = "U";
}

/**
 * Inductance to digital converter, 2-channel 12-bit, WSON-12
 *
 * KiCad symbol: `Sensor_Proximity:LDC1312`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ldc1312.pdf
 * Keywords: inductance sensor.
 * Default footprint: Package_SON:WSON-12-1EP_4x4mm_P0.5mm_EP2.6x3mm_ThermalVias.
 */
export class LDC1312 extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "CLKIN": "3",
  "ADDR": "4",
  "INTB": "5",
  "SD": "6",
  "VDD": "7",
  "GND_8": "8",
  "IN0A": "9",
  "IN0B": "10",
  "IN1A": "11",
  "IN1B": "12",
  "GND_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", CLKIN: "input", ADDR: "input", INTB: "open_collector", SD: "input", VDD: "power_in", GND_8: "power_in", IN0A: "input", IN0B: "input", IN1A: "input", IN1B: "input", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:LDC1312";
  override referencePrefix = "U";
}

/**
 * Inductance to digital converter, 4-channel 12-bit, WQFN-16
 *
 * KiCad symbol: `Sensor_Proximity:LDC1314`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ldc1312.pdf
 * Keywords: inductance sensor.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 */
export class LDC1314 extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "CLKIN": "3",
  "ADDR": "4",
  "INTB": "5",
  "SD": "6",
  "VDD": "7",
  "GND_8": "8",
  "IN0A": "9",
  "IN0B": "10",
  "IN1A": "11",
  "IN1B": "12",
  "IN2A": "13",
  "IN2B": "14",
  "IN3A": "15",
  "IN3B": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", CLKIN: "input", ADDR: "input", INTB: "open_collector", SD: "input", VDD: "power_in", GND_8: "power_in", IN0A: "input", IN0B: "input", IN1A: "input", IN1B: "input", IN2A: "input", IN2B: "input", IN3A: "input", IN3B: "input", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:LDC1314";
  override referencePrefix = "U";
}

/**
 * Inductance to digital converter, 2-channel 28-bit, WSON-12
 *
 * KiCad symbol: `Sensor_Proximity:LDC1612`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ldc1612.pdf
 * Keywords: inductance sensor.
 * Default footprint: Package_SON:WSON-12-1EP_4x4mm_P0.5mm_EP2.6x3mm_ThermalVias.
 */
export class LDC1612 extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "CLKIN": "3",
  "ADDR": "4",
  "INTB": "5",
  "SD": "6",
  "VDD": "7",
  "GND_8": "8",
  "IN0A": "9",
  "IN0B": "10",
  "IN1A": "11",
  "IN1B": "12",
  "GND_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", CLKIN: "input", ADDR: "input", INTB: "open_collector", SD: "input", VDD: "power_in", GND_8: "power_in", IN0A: "input", IN0B: "input", IN1A: "input", IN1B: "input", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:LDC1612";
  override referencePrefix = "U";
}

/**
 * Inductance to digital converter, 4-channel 28-bit, WQFN-16
 *
 * KiCad symbol: `Sensor_Proximity:LDC1614`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ldc1612.pdf
 * Keywords: inductance sensor.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 */
export class LDC1614 extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "CLKIN": "3",
  "ADDR": "4",
  "INTB": "5",
  "SD": "6",
  "VDD": "7",
  "GND_8": "8",
  "IN0A": "9",
  "IN0B": "10",
  "IN1A": "11",
  "IN1B": "12",
  "IN2A": "13",
  "IN2B": "14",
  "IN3A": "15",
  "IN3B": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", CLKIN: "input", ADDR: "input", INTB: "open_collector", SD: "input", VDD: "power_in", GND_8: "power_in", IN0A: "input", IN0B: "input", IN1A: "input", IN1B: "input", IN2A: "input", IN2B: "input", IN3A: "input", IN3B: "input", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:LDC1614";
  override referencePrefix = "U";
}

/**
 * Photointerrupter infrared LED with photo IC, non-inverting output, -0.5V to 17V VDD, -20 to +85 degree Celsius, LG206D
 *
 * KiCad symbol: `Sensor_Proximity:LG206D`. Reference prefix: `U`.
 * Footprint filters: Kodenshi?LG206D*.
 * @see http://kodenshi.co.jp/products/pdf/sensor/photointerrupter_ic/LG206D.pdf
 * Keywords: Photointerrupter infrared LED with photo IC, non-inverting output, -0.5V to 17V VDD, -20 to +85 degree Celsius, LG206D.
 * Default footprint: OptoDevice:Kodenshi_LG206D.
 */
export class LG206D extends Component.withPins({
  "VCC": "1",
  "VOUT": "2",
  "GND": "3",
  "A": "4",
  "K": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", VOUT: "open_collector", GND: "power_in", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:LG206D";
  override referencePrefix = "U";
}

/**
 * Photointerrupter infrared LED with photo IC, inverting output, -0.5V to 17V VDD, -20 to +85 degree Celsius, LG206X
 *
 * KiCad symbol: `Sensor_Proximity:LG206L`. Reference prefix: `U`.
 * Footprint filters: Kodenshi?LG206L*.
 * @see http://kodenshi.co.jp/products/pdf/sensor/photointerrupter_ic/LG206L.pdf
 * Keywords: Photointerrupter infrared LED with photo IC, inverting output, -0.5V to 17V VDD, -20 to +85 degree Celsius, LG206X.
 * Default footprint: OptoDevice:Kodenshi_LG206L.
 */
export class LG206L extends Component.withPins({
  "VCC": "1",
  "VOUT": "2",
  "GND": "3",
  "A": "4",
  "K": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", VOUT: "open_collector", GND: "power_in", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:LG206L";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, DIP-like THT-package
 *
 * KiCad symbol: `Sensor_Proximity:QRE1113`. Reference prefix: `U`.
 * Footprint filters: OnSemi*CASE100AQ*.
 * @see http://www.onsemi.com/pub/Collateral/QRE1113-D.PDF
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:OnSemi_CASE100AQ.
 */
export class QRE1113 extends Component.withPins({
  "A": "1",
  "K": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", P3: "open_collector", P4: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:QRE1113";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, SMD-4
 *
 * KiCad symbol: `Sensor_Proximity:QRE1113GR`. Reference prefix: `U`.
 * Footprint filters: OnSemi*CASE100CY*.
 * @see http://www.onsemi.com/pub/Collateral/QRE1113-D.PDF
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:OnSemi_CASE100CY.
 */
export class QRE1113GR extends Component.withPins({
  "A": "1",
  "K": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", P3: "open_collector", P4: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:QRE1113GR";
  override referencePrefix = "U";
}

/**
 * Proximity Sensor, I2C interface, 2x1x0.55mm, 1-15mm, 2.5-3.6V, LGA-6
 *
 * KiCad symbol: `Sensor_Proximity:RPR-0720`. Reference prefix: `U`.
 * Footprint filters: Rohm*RPR*0720*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/opto/optical_sensor/photosensor/rpr-0720-e.pdf
 * Keywords: opto rohm.
 * Default footprint: OptoDevice:Rohm_RPR-0720.
 */
export class RPR_0720 extends Component.withPins({
  "VCSELA": "1",
  "SCL": "2",
  "SDA": "3",
  "INT": "4",
  "VCC": "5",
  "GND": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCSELA: "power_in", SCL: "input", SDA: "bidirectional", INT: "open_collector", VCC: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:RPR-0720";
  override referencePrefix = "U";
}

/**
 * Miniature Light Reflection Switches
 *
 * KiCad symbol: `Sensor_Proximity:SFH900`. Reference prefix: `U`.
 * Footprint filters: Siemens*SFH900*.
 * @see https://www.batronix.com/pdf/sfh900.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Siemens_SFH900.
 */
export class SFH900 extends Component.withPins({
  "A": "1",
  "K": "2",
  "C": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", C: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:SFH900";
  override referencePrefix = "U";
}

/**
 * Reflective Opto Interrupter/Coupler, SMD-6
 *
 * KiCad symbol: `Sensor_Proximity:SFH9206`. Reference prefix: `U`.
 * Footprint filters: Osram*SFH9x0x*.
 * @see http://www.osram-os.com/Graphics/XPic6/00200860_0.pdf
 * Keywords: Reflective Opto Interrupter Coupler.
 * Default footprint: OptoDevice:Osram_SFH9x0x.
 */
export class SFH9206 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "E": "3",
  "C": "4",
  "NC_5": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", E: "open_emitter", C: "open_collector", NC_5: "no_connect", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:SFH9206";
  override referencePrefix = "U";
}

/**
 * Reflective Opto Interrupter/Coupler, SMD-6
 *
 * KiCad symbol: `Sensor_Proximity:SFH9201`. Reference prefix: `U`.
 * Footprint filters: Osram*SFH9x0x*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Osram%20PDFs/SFH_9201.pdf
 * Keywords: Reflective Opto Interrupter Coupler.
 * Default footprint: OptoDevice:Osram_SFH9x0x.
 */
export class SFH9201 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "E": "3",
  "C": "4",
  "NC_5": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", E: "open_emitter", C: "open_collector", NC_5: "no_connect", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:SFH9201";
  override referencePrefix = "U";
}

/**
 * Reflective Opto Interrupter/Coupler, SMD-6
 *
 * KiCad symbol: `Sensor_Proximity:SFH9202`. Reference prefix: `U`.
 * Footprint filters: Osram*SFH9x0x*.
 * @see http://www.osram-os.com/Graphics/XPic0/00083379_0.pdf/SFH%209202,%20Lead%20%28Pb%29%20Free%20Product%20-%20RoHS%20Compliant.pdf
 * Keywords: Reflective Opto Interrupter Coupler.
 * Default footprint: OptoDevice:Osram_SFH9x0x.
 */
export class SFH9202 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "E": "3",
  "C": "4",
  "NC_5": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", E: "open_emitter", C: "open_collector", NC_5: "no_connect", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:SFH9202";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:SG-105`. Reference prefix: `U`.
 * Footprint filters: Kodenshi*SG105*.
 * @see http://www.kodenshi.co.jp/products/pdf/sensor/photointerrupter_ref/SG-105.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kodenshi_SG105.
 */
export class SG_105 extends Component.withPins({
  "A": "1",
  "K": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:SG-105";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, DIP-lie THT-package
 *
 * KiCad symbol: `Sensor_Proximity:SG-105F`. Reference prefix: `U`.
 * Footprint filters: Kodenshi*SG105F*.
 * @see http://www.kodenshi.co.jp/products/pdf/sensor/photointerrupter_ref/SG-105F.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kodenshi_SG105F.
 */
export class SG_105F extends Component.withPins({
  "A": "1",
  "K": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:SG-105F";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:SG-107`. Reference prefix: `U`.
 * Footprint filters: Kodenshi*SG105*.
 * @see http://www.kodenshi.co.jp/products/pdf/sensor/photointerrupter_ref/SG-107.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kodenshi_SG105.
 */
export class SG_107 extends Component.withPins({
  "A": "1",
  "K": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:SG-107";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, DIP-lie THT-package
 *
 * KiCad symbol: `Sensor_Proximity:SG-107F`. Reference prefix: `U`.
 * Footprint filters: Kodenshi*SG105F*.
 * @see https://www.pacer.co.uk/Assets/User/1055-SG-107F.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kodenshi_SG105F.
 */
export class SG_107F extends Component.withPins({
  "A": "1",
  "K": "2",
  "C": "3",
  "E": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", C: "open_collector", E: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:SG-107F";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Sensor_Proximity:TSSP58P38`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82462/tsop581.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSSP58P38 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:TSSP58P38";
  override referencePrefix = "U";
}

/**
 * IR Detector for Mid Range Proximity Sensor
 *
 * KiCad symbol: `Sensor_Proximity:TSSP58038`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82476/tssp58p38.pdf
 * Keywords: opto IR receiver proximity sensor.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSSP58038 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:TSSP58038";
  override referencePrefix = "U";
}

/**
 * IR Receiver Module for Light Barrier Systems
 *
 * KiCad symbol: `Sensor_Proximity:TSSP58038SS1XB`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82740/tssp58038ss1xb.pdf
 * Keywords: opto IR receiver light barrier.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 */
export class TSSP58038SS1XB extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Proximity:TSSP58038SS1XB";
  override referencePrefix = "U";
}
