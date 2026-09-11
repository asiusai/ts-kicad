// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 8-Channel Source Driver, TTL DTL, PMOS or CMOS compatible, 500mA 50V output, SOIC-20W
 *
 * KiCad symbol: `Transistor_Array:A2982`. Reference prefix: `U`.
 * Footprint filters: SOIC*20W*7.5x12.8mm*P1.27mm*.
 * @see https://www.allegromicro.com/~/media/Files/Datasheets/A2981-2-Datasheet.ashx
 * Keywords: relays solenoids lamps steppers servos LEDs.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class A2982 extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "IN4": "4",
  "IN5": "5",
  "IN6": "6",
  "IN7": "7",
  "IN8": "8",
  "+VS": "9",
  "NC_10": "10",
  "NC_11": "11",
  "GND": "12",
  "OUT8": "13",
  "OUT7": "14",
  "OUT6": "15",
  "OUT5": "16",
  "OUT4": "17",
  "OUT3": "18",
  "OUT2": "19",
  "OUT1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN2: "input", IN3: "input", IN4: "input", IN5: "input", IN6: "input", IN7: "input", IN8: "input", "+VS": "power_in", NC_10: "no_connect", NC_11: "no_connect", GND: "power_in", OUT8: "open_emitter", OUT7: "open_emitter", OUT6: "open_emitter", OUT5: "open_emitter", OUT4: "open_emitter", OUT3: "open_emitter", OUT2: "open_emitter", OUT1: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:A2982";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC-16
 *
 * KiCad symbol: `Transistor_Array:MC1413D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/MC1413-D.PDF
 * Keywords: darlington transistor array.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MC1413D extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:MC1413D";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays,  TTL/CMOS-compatible, SOIC-16
 *
 * KiCad symbol: `Transistor_Array:MC1413BD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/MC1413-D.PDF
 * Keywords: darlington transistor array.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MC1413BD extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:MC1413BD";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays,  TTL/CMOS-compatible, PDIP-16
 *
 * KiCad symbol: `Transistor_Array:MC1413BP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/MC1413-D.PDF
 * Keywords: darlington transistor array.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MC1413BP extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:MC1413BP";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, PDIP-16
 *
 * KiCad symbol: `Transistor_Array:MC1413P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/MC1413-D.PDF
 * Keywords: darlington transistor array.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MC1413P extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:MC1413P";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays,  TTL/CMOS-compatible, SOIC-16
 *
 * KiCad symbol: `Transistor_Array:NCV1413B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/MC1413-D.PDF
 * Keywords: darlington transistor array.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class NCV1413B extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:NCV1413B";
  override referencePrefix = "U";
}

/**
 * Higher Voltage, High Current Darlington Transistor Arrays, 5V CMOS/TTL-compatible input, SOIC16/SOIC16W/DIP16
 *
 * KiCad symbol: `Transistor_Array:SN75468`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/slrs023e/slrs023e.pdf
 * Keywords: darlington transistor array.
 */
export class SN75468 extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:SN75468";
  override referencePrefix = "U";
}

/**
 * Higher Voltage, High Current Darlington Transistor Arrays, 6-15V CMOS/PMOS-compatible input, SOIC16/SOIC16W/DIP16
 *
 * KiCad symbol: `Transistor_Array:SN75469`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/slrs023e/slrs023e.pdf
 * Keywords: darlington transistor array.
 */
export class SN75469 extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:SN75469";
  override referencePrefix = "U";
}

/**
 * 8-Channel Source Type Transistor Array, TTL and CMOS compatible, 500mA, 50V, DIP-18/SOP-18/SSOP-18/SOIC-18W
 *
 * KiCad symbol: `Transistor_Array:TBD62783A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOP*7.0x12.5mm*P1.27mm*, SSOP*4.4x6.5mm*P0.65mm*, SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://toshiba.semicon-storage.com/info/docget.jsp?did=30523&prodName=TBD62783APG
 * Keywords: relays solenoids lamps steppers servos LEDs.
 */
export class TBD62783A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "I8": "8",
  "VCC": "9",
  "GND": "10",
  "O8": "11",
  "O7": "12",
  "O6": "13",
  "O5": "14",
  "O4": "15",
  "O3": "16",
  "O2": "17",
  "O1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", I8: "input", VCC: "power_in", GND: "power_in", O8: "open_emitter", O7: "open_emitter", O6: "open_emitter", O5: "open_emitter", O4: "open_emitter", O3: "open_emitter", O2: "open_emitter", O1: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:TBD62783A";
  override referencePrefix = "U";
}

/**
 * 8-Channel Source Type Transistor Array, TTL and CMOS compatible, 500mA, 50V, DIP-18-18W
 *
 * KiCad symbol: `Transistor_Array:TBD62785APG`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://toshiba.semicon-storage.com/info/TBD62785APG_datasheet_en_20170530.pdf?did=58399&prodName=TBD62785APG
 * Keywords: relays solenoids lamps steppers servos LEDs.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 */
export class TBD62785APG extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "I8": "8",
  "VCC": "9",
  "GND": "10",
  "O8": "11",
  "O7": "12",
  "O6": "13",
  "O5": "14",
  "O4": "15",
  "O3": "16",
  "O2": "17",
  "O1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", I8: "input", VCC: "power_in", GND: "power_in", O8: "open_emitter", O7: "open_emitter", O6: "open_emitter", O5: "open_emitter", O4: "open_emitter", O3: "open_emitter", O2: "open_emitter", O1: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:TBD62785APG";
  override referencePrefix = "U";
}

/**
 * 8-Channel Source Type Transistor Array, TTL and CMOS compatible, 500mA, 50V, SOP-18-18W
 *
 * KiCad symbol: `Transistor_Array:TBD62785AFWG`. Reference prefix: `U`.
 * Footprint filters: SOP*7.495x11.515mm*P1.27mm*.
 * @see https://toshiba.semicon-storage.com/info/TBD62785AFWG_datasheet_en_20170530.pdf?did=58399&prodName=TBD62785AFWG
 * Keywords: relays solenoids lamps steppers servos LEDs.
 * Default footprint: Package_SO:SOP-18_7.495x11.515mm_P1.27mm.
 */
export class TBD62785AFWG extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "I8": "8",
  "VCC": "9",
  "GND": "10",
  "O8": "11",
  "O7": "12",
  "O6": "13",
  "O5": "14",
  "O4": "15",
  "O3": "16",
  "O2": "17",
  "O1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", I8: "input", VCC: "power_in", GND: "power_in", O8: "open_emitter", O7: "open_emitter", O6: "open_emitter", O5: "open_emitter", O4: "open_emitter", O3: "open_emitter", O2: "open_emitter", O1: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:TBD62785AFWG";
  override referencePrefix = "U";
}

/**
 * 7-Channel Low Side Driver, CMOS Improvement of Darlington Array, 30V, TSSOP-16
 *
 * KiCad symbol: `Transistor_Array:TPL7407LAPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/gpn/tpl7407la
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class TPL7407LAPW extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "IN4": "4",
  "IN5": "5",
  "IN6": "6",
  "IN7": "7",
  "GND": "8",
  "COM": "9",
  "OUT7": "10",
  "OUT6": "11",
  "OUT5": "12",
  "OUT4": "13",
  "OUT3": "14",
  "OUT2": "15",
  "OUT1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN2: "input", IN3: "input", IN4: "input", IN5: "input", IN6: "input", IN7: "input", GND: "power_in", COM: "power_in", OUT7: "open_collector", OUT6: "open_collector", OUT5: "open_collector", OUT4: "open_collector", OUT3: "open_collector", OUT2: "open_collector", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:TPL7407LAPW";
  override referencePrefix = "U";
}

/**
 * 7-Channel Low Side Driver, CMOS Improvement of Darlington Array, 30V, SOIC-16
 *
 * KiCad symbol: `Transistor_Array:TPL7407LAD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/gpn/tpl7407la
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TPL7407LAD extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "IN4": "4",
  "IN5": "5",
  "IN6": "6",
  "IN7": "7",
  "GND": "8",
  "COM": "9",
  "OUT7": "10",
  "OUT6": "11",
  "OUT5": "12",
  "OUT4": "13",
  "OUT3": "14",
  "OUT2": "15",
  "OUT1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN2: "input", IN3: "input", IN4: "input", IN5: "input", IN6: "input", IN7: "input", GND: "power_in", COM: "power_in", OUT7: "open_collector", OUT6: "open_collector", OUT5: "open_collector", OUT4: "open_collector", OUT3: "open_collector", OUT2: "open_collector", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:TPL7407LAD";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC16/SOIC16W/DIP16/TSSOP16
 *
 * KiCad symbol: `Transistor_Array:ULN2003`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*4.4x5.2mm*P0.65mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2003a.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2003 extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2003";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC16/SOIC16W/DIP16/TSSOP16
 *
 * KiCad symbol: `Transistor_Array:ULN2002`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*4.4x5.2mm*P0.65mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2003a.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2002 extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2002";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC16/SOIC16W/DIP16/TSSOP16
 *
 * KiCad symbol: `Transistor_Array:ULN2002A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*4.4x5.2mm*P0.65mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2003a.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2002A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2002A";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC16/SOIC16W/DIP16/TSSOP16
 *
 * KiCad symbol: `Transistor_Array:ULN2003A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*4.4x5.2mm*P0.65mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2003a.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2003A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2003A";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC16/SOIC16W/DIP16/TSSOP16
 *
 * KiCad symbol: `Transistor_Array:ULN2004`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*4.4x5.2mm*P0.65mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2003a.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2004 extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2004";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC16/SOIC16W/DIP16/TSSOP16
 *
 * KiCad symbol: `Transistor_Array:ULN2004A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*4.4x5.2mm*P0.65mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2003a.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2004A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2004A";
  override referencePrefix = "U";
}

/**
 * Darlington Transistor Arrays, SOIC18/DIP18
 *
 * KiCad symbol: `Transistor_Array:ULN2803A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2803a.pdf
 * Keywords: Darlington transistor array.
 */
export class ULN2803A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "I8": "8",
  "GND": "9",
  "COM": "10",
  "O8": "11",
  "O7": "12",
  "O6": "13",
  "O5": "14",
  "O4": "15",
  "O3": "16",
  "O2": "17",
  "O1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", I8: "input", GND: "power_in", COM: "passive", O8: "open_collector", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2803A";
  override referencePrefix = "U";
}

/**
 * Darlington Transistor Arrays, SOIC18/DIP18
 *
 * KiCad symbol: `Transistor_Array:ULN2801A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://www.promelec.ru/pdf/1536.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2801A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "I8": "8",
  "GND": "9",
  "COM": "10",
  "O8": "11",
  "O7": "12",
  "O6": "13",
  "O5": "14",
  "O4": "15",
  "O3": "16",
  "O2": "17",
  "O1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", I8: "input", GND: "power_in", COM: "passive", O8: "open_collector", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2801A";
  override referencePrefix = "U";
}

/**
 * Darlington Transistor Arrays, SOIC18/DIP18
 *
 * KiCad symbol: `Transistor_Array:ULN2802A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://www.promelec.ru/pdf/1536.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2802A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "I8": "8",
  "GND": "9",
  "COM": "10",
  "O8": "11",
  "O7": "12",
  "O6": "13",
  "O5": "14",
  "O4": "15",
  "O3": "16",
  "O2": "17",
  "O1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", I8: "input", GND: "power_in", COM: "passive", O8: "open_collector", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2802A";
  override referencePrefix = "U";
}

/**
 * Darlington Transistor Arrays, SOIC18/DIP18
 *
 * KiCad symbol: `Transistor_Array:ULN2804A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://www.promelec.ru/pdf/1536.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2804A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "I8": "8",
  "GND": "9",
  "COM": "10",
  "O8": "11",
  "O7": "12",
  "O6": "13",
  "O5": "14",
  "O4": "15",
  "O3": "16",
  "O2": "17",
  "O1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", I8: "input", GND: "power_in", COM: "passive", O8: "open_collector", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2804A";
  override referencePrefix = "U";
}

/**
 * Darlington Transistor Arrays, SOIC18/DIP18
 *
 * KiCad symbol: `Transistor_Array:ULN2805A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://www.promelec.ru/pdf/1536.pdf
 * Keywords: darlington transistor array.
 */
export class ULN2805A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "I8": "8",
  "GND": "9",
  "COM": "10",
  "O8": "11",
  "O7": "12",
  "O6": "13",
  "O5": "14",
  "O4": "15",
  "O3": "16",
  "O2": "17",
  "O1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", I8: "input", GND: "power_in", COM: "passive", O8: "open_collector", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULN2805A";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC16W/TSSOP16
 *
 * KiCad symbol: `Transistor_Array:ULQ2003A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*4.4x5.2mm*P0.65mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2003a.pdf
 * Keywords: darlington transistor array.
 */
export class ULQ2003A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULQ2003A";
  override referencePrefix = "U";
}

/**
 * High Voltage, High Current Darlington Transistor Arrays, SOIC16W/TSSOP16
 *
 * KiCad symbol: `Transistor_Array:ULQ2004A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*4.4x5.2mm*P0.65mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*W*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uln2003a.pdf
 * Keywords: darlington transistor array.
 */
export class ULQ2004A extends Component.withPins({
  "I1": "1",
  "I2": "2",
  "I3": "3",
  "I4": "4",
  "I5": "5",
  "I6": "6",
  "I7": "7",
  "GND": "8",
  "COM": "9",
  "O7": "10",
  "O6": "11",
  "O5": "12",
  "O4": "13",
  "O3": "14",
  "O2": "15",
  "O1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", GND: "power_in", COM: "passive", O7: "open_collector", O6: "open_collector", O5: "open_collector", O4: "open_collector", O3: "open_collector", O2: "open_collector", O1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Transistor_Array:ULQ2004A";
  override referencePrefix = "U";
}
