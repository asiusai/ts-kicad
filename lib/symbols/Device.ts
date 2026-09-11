// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * AC ammeter
 *
 * KiCad symbol: `Device:Ammeter_AC`. Reference prefix: `MES`.
 * Keywords: ammeter AC ampere meter.
 */
export class Ammeter_AC extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Ammeter_AC";
  override referencePrefix = "MES";
}

/**
 * DC ammeter
 *
 * KiCad symbol: `Device:Ammeter_DC`. Reference prefix: `MES`.
 * Keywords: ammeter DC ampere meter.
 */
export class Ammeter_DC extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Ammeter_DC";
  override referencePrefix = "MES";
}

/**
 * Antenna
 *
 * KiCad symbol: `Device:Antenna`. Reference prefix: `AE`.
 * Keywords: antenna.
 */
export class Antenna extends Component.withPins({
  "A": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Antenna";
  override referencePrefix = "AE";
}

/**
 * Ceramic chip antenna with pin for PCB trace
 *
 * KiCad symbol: `Device:Antenna_Chip`. Reference prefix: `AE`.
 * Keywords: antenna.
 */
export class Antenna_Chip extends Component.withPins({
  "FEED": "1",
  "PCB_Trace": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FEED: "input", PCB_Trace: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Antenna_Chip";
  override referencePrefix = "AE";
}

/**
 * Dipole antenna
 *
 * KiCad symbol: `Device:Antenna_Dipole`. Reference prefix: `AE`.
 * Keywords: dipole antenna.
 */
export class Antenna_Dipole extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Antenna_Dipole";
  override referencePrefix = "AE";
}

/**
 * Loop antenna
 *
 * KiCad symbol: `Device:Antenna_Loop`. Reference prefix: `AE`.
 * Keywords: loop antenna.
 */
export class Antenna_Loop extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Antenna_Loop";
  override referencePrefix = "AE";
}

/**
 * Antenna with extra pin for shielding
 *
 * KiCad symbol: `Device:Antenna_Shield`. Reference prefix: `AE`.
 * Keywords: antenna.
 */
export class Antenna_Shield extends Component.withPins({
  "A": "1",
  "Shield": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", Shield: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Antenna_Shield";
  override referencePrefix = "AE";
}

/**
 * Multiple-cell battery
 *
 * KiCad symbol: `Device:Battery`. Reference prefix: `BT`.
 * Keywords: batt voltage-source cell.
 */
export class Battery extends Component.withPins({
  "+": "1",
  "-": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Battery";
  override referencePrefix = "BT";
}

/**
 * Single-cell battery
 *
 * KiCad symbol: `Device:Battery_Cell`. Reference prefix: `BT`.
 * Keywords: battery cell.
 */
export class Battery_Cell extends Component.withPins({
  "+": "1",
  "-": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Battery_Cell";
  override referencePrefix = "BT";
}

/**
 * Buzzer, polarized
 *
 * KiCad symbol: `Device:Buzzer`. Reference prefix: `BZ`.
 * Footprint filters: *Buzzer*.
 * Keywords: quartz resonator ceramic.
 */
export class Buzzer extends Component.withPins({
  "+": "1",
  "-": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Buzzer";
  override referencePrefix = "BZ";
}

/**
 * Unpolarized capacitor
 *
 * KiCad symbol: `Device:C`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: cap capacitor.
 */
export class C extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C";
  override referencePrefix = "C";
}

/**
 * Unpolarized capacitor, rotated by 45°
 *
 * KiCad symbol: `Device:C_45deg`. Reference prefix: `C`.
 * Footprint filters: R_*.
 * Keywords: capacitor cap.
 */
export class C_45deg extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_45deg";
  override referencePrefix = "C";
}

/**
 * Feedthrough capacitor
 *
 * KiCad symbol: `Device:C_Feedthrough`. Reference prefix: `C`.
 * Keywords: EMI filter feedthrough capacitor.
 */
export class C_Feedthrough extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Feedthrough";
  override referencePrefix = "C";
}

/**
 * 4 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-5
 *
 * KiCad symbol: `Device:C_Network04`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 */
export class C_Network04 extends Component.withPins({
  "common": "1",
  "C1": "2",
  "C2": "3",
  "C3": "4",
  "C4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", C1: "passive", C2: "passive", C3: "passive", C4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Network04";
  override referencePrefix = "CN";
}

/**
 * 5 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-6
 *
 * KiCad symbol: `Device:C_Network05`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 */
export class C_Network05 extends Component.withPins({
  "C5": "6",
  "common": "1",
  "C1": "2",
  "C2": "3",
  "C3": "4",
  "C4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C5: "passive", common: "passive", C1: "passive", C2: "passive", C3: "passive", C4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Network05";
  override referencePrefix = "CN";
}

/**
 * 6 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-7
 *
 * KiCad symbol: `Device:C_Network06`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 */
export class C_Network06 extends Component.withPins({
  "C5": "6",
  "C6": "7",
  "common": "1",
  "C1": "2",
  "C2": "3",
  "C3": "4",
  "C4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C5: "passive", C6: "passive", common: "passive", C1: "passive", C2: "passive", C3: "passive", C4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Network06";
  override referencePrefix = "CN";
}

/**
 * 7 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-8
 *
 * KiCad symbol: `Device:C_Network07`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 */
export class C_Network07 extends Component.withPins({
  "C5": "6",
  "C6": "7",
  "C7": "8",
  "common": "1",
  "C1": "2",
  "C2": "3",
  "C3": "4",
  "C4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C5: "passive", C6: "passive", C7: "passive", common: "passive", C1: "passive", C2: "passive", C3: "passive", C4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Network07";
  override referencePrefix = "CN";
}

/**
 * 8 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-9
 *
 * KiCad symbol: `Device:C_Network08`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 */
export class C_Network08 extends Component.withPins({
  "C5": "6",
  "C6": "7",
  "C7": "8",
  "C8": "9",
  "common": "1",
  "C1": "2",
  "C2": "3",
  "C3": "4",
  "C4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C5: "passive", C6: "passive", C7: "passive", C8: "passive", common: "passive", C1: "passive", C2: "passive", C3: "passive", C4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Network08";
  override referencePrefix = "CN";
}

/**
 * Polarized capacitor
 *
 * KiCad symbol: `Device:C_Polarized`. Reference prefix: `C`.
 * Footprint filters: CP_*.
 * Keywords: cap capacitor.
 */
export class C_Polarized extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Polarized";
  override referencePrefix = "C";
}

/**
 * Set of two polarized capacitors in series
 *
 * KiCad symbol: `Device:C_Polarized_Series_2C`. Reference prefix: `C`.
 * Footprint filters: CP*.
 * Keywords: cap capacitor.
 */
export class C_Polarized_Series_2C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Polarized_Series_2C";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, small symbol
 *
 * KiCad symbol: `Device:C_Polarized_Small`. Reference prefix: `C`.
 * Footprint filters: CP_*.
 * Keywords: cap capacitor.
 */
export class C_Polarized_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Polarized_Small";
  override referencePrefix = "C";
}

/**
 * Set of two polarized capacitors in series, small symbol
 *
 * KiCad symbol: `Device:C_Polarized_Small_Series_2C`. Reference prefix: `C`.
 * Footprint filters: CP*.
 * Keywords: cap capacitor.
 */
export class C_Polarized_Small_Series_2C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Polarized_Small_Series_2C";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, small US symbol
 *
 * KiCad symbol: `Device:C_Polarized_Small_US`. Reference prefix: `C`.
 * Footprint filters: CP_*.
 * Keywords: cap capacitor.
 */
export class C_Polarized_Small_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Polarized_Small_US";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, small US symbol
 *
 * KiCad symbol: `Device:C_Polarized_Small_US_Series_2C`. Reference prefix: `C`.
 * Footprint filters: CP*.
 * Keywords: cap capacitor.
 */
export class C_Polarized_Small_US_Series_2C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Polarized_Small_US_Series_2C";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, US symbol
 *
 * KiCad symbol: `Device:C_Polarized_US`. Reference prefix: `C`.
 * Footprint filters: CP_*.
 * Keywords: cap capacitor.
 */
export class C_Polarized_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Polarized_US";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, US symbol
 *
 * KiCad symbol: `Device:C_Polarized_US_Series_2C`. Reference prefix: `C`.
 * Footprint filters: CP*.
 * Keywords: cap capacitor.
 */
export class C_Polarized_US_Series_2C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Polarized_US_Series_2C";
  override referencePrefix = "C";
}

/**
 * Unpolarized capacitor, small symbol
 *
 * KiCad symbol: `Device:C_Small`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: capacitor cap.
 */
export class C_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Small";
  override referencePrefix = "C";
}

/**
 * capacitor, small US symbol
 *
 * KiCad symbol: `Device:C_Small_US`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: cap capacitor.
 */
export class C_Small_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Small_US";
  override referencePrefix = "C";
}

/**
 * Trimmable capacitor
 *
 * KiCad symbol: `Device:C_Trim`. Reference prefix: `C`.
 * Keywords: trimmer variable capacitor.
 */
export class C_Trim extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Trim";
  override referencePrefix = "C";
}

/**
 * Differential variable capacitor with two stators
 *
 * KiCad symbol: `Device:C_Trim_Differential`. Reference prefix: `C`.
 * Keywords: trimmer capacitor.
 */
export class C_Trim_Differential extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Trim_Differential";
  override referencePrefix = "C";
}

/**
 * Trimmable capacitor, small symbol
 *
 * KiCad symbol: `Device:C_Trim_Small`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: trimmer variable capacitor.
 */
export class C_Trim_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Trim_Small";
  override referencePrefix = "C";
}

/**
 * capacitor, US symbol
 *
 * KiCad symbol: `Device:C_US`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: cap capacitor.
 */
export class C_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_US";
  override referencePrefix = "C";
}

/**
 * Variable capacitor
 *
 * KiCad symbol: `Device:C_Variable`. Reference prefix: `C`.
 * Keywords: trimmer capacitor.
 */
export class C_Variable extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:C_Variable";
  override referencePrefix = "C";
}

/**
 * Single pole circuit breaker
 *
 * KiCad symbol: `Device:CircuitBreaker_1P`. Reference prefix: `CB`.
 * Keywords: CB.
 */
export class CircuitBreaker_1P extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:CircuitBreaker_1P";
  override referencePrefix = "CB";
}

/**
 * Single pole circuit breaker, US symbol
 *
 * KiCad symbol: `Device:CircuitBreaker_1P_US`. Reference prefix: `CB`.
 * Keywords: CB.
 */
export class CircuitBreaker_1P_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:CircuitBreaker_1P_US";
  override referencePrefix = "CB";
}

/**
 * Double pole circuit breaker
 *
 * KiCad symbol: `Device:CircuitBreaker_2P`. Reference prefix: `CB`.
 * Keywords: CB 2P.
 */
export class CircuitBreaker_2P extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:CircuitBreaker_2P";
  override referencePrefix = "CB";
}

/**
 * Double pole circuit breaker, US symbol
 *
 * KiCad symbol: `Device:CircuitBreaker_2P_US`. Reference prefix: `CB`.
 * Keywords: CB 2P.
 */
export class CircuitBreaker_2P_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:CircuitBreaker_2P_US";
  override referencePrefix = "CB";
}

/**
 * Triple pole circuit breaker
 *
 * KiCad symbol: `Device:CircuitBreaker_3P`. Reference prefix: `CB`.
 * Keywords: CB 3P.
 */
export class CircuitBreaker_3P extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:CircuitBreaker_3P";
  override referencePrefix = "CB";
}

/**
 * Triple pole circuit breaker, US symbol
 *
 * KiCad symbol: `Device:CircuitBreaker_3P_US`. Reference prefix: `CB`.
 * Keywords: CB 3P.
 */
export class CircuitBreaker_3P_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:CircuitBreaker_3P_US";
  override referencePrefix = "CB";
}

/**
 * 3 Port RF Circulator, Right Handed
 *
 * KiCad symbol: `Device:Circulator_Left_3Port`. Reference prefix: `FL`.
 * Keywords: Microwave Reflection SWR.
 */
export class Circulator_Left_3Port extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "GND": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", GND: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Circulator_Left_3Port";
  override referencePrefix = "FL";
}

/**
 * 4 Port RF Circulator, Right Handed
 *
 * KiCad symbol: `Device:Circulator_Left_4Port`. Reference prefix: `FL`.
 * Keywords: Microwave Reflection SWR.
 */
export class Circulator_Left_4Port extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "GND": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", GND: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Circulator_Left_4Port";
  override referencePrefix = "FL";
}

/**
 * 3 Port RF Circulator, Left Handed
 *
 * KiCad symbol: `Device:Circulator_Right_3Port`. Reference prefix: `FL`.
 * Keywords: Microwave Reflection SWR.
 */
export class Circulator_Right_3Port extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "GND": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", GND: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Circulator_Right_3Port";
  override referencePrefix = "FL";
}

/**
 * 4 Port RF Circulator, Left Handed
 *
 * KiCad symbol: `Device:Circulator_Right_4Port`. Reference prefix: `FL`.
 * Keywords: Microwave Reflection SWR.
 */
export class Circulator_Right_4Port extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "GND": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", GND: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Circulator_Right_4Port";
  override referencePrefix = "FL";
}

/**
 * Two pin crystal
 *
 * KiCad symbol: `Device:Crystal`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal";
  override referencePrefix = "Y";
}

/**
 * Three pin crystal, GND on pin 2
 *
 * KiCad symbol: `Device:Crystal_GND2`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_GND2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_GND2";
  override referencePrefix = "Y";
}

/**
 * Four pin crystal, GND on pins 2 and 3
 *
 * KiCad symbol: `Device:Crystal_GND23`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_GND23 extends Component.withPins({
  "P1": "1",
  "G_2": "2",
  "G_3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", G_2: "passive", G_3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_GND23";
  override referencePrefix = "Y";
}

/**
 * Four pin crystal, GND on pins 2 and 3, small symbol
 *
 * KiCad symbol: `Device:Crystal_GND23_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_GND23_Small extends Component.withPins({
  "P1": "1",
  "G_2": "2",
  "G_3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", G_2: "passive", G_3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_GND23_Small";
  override referencePrefix = "Y";
}

/**
 * Four pin crystal, GND on pins 2 and 4
 *
 * KiCad symbol: `Device:Crystal_GND24`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_GND24 extends Component.withPins({
  "P1": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", G_2: "passive", P3: "passive", G_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_GND24";
  override referencePrefix = "Y";
}

/**
 * Four pin crystal, GND on pins 2 and 4, small symbol
 *
 * KiCad symbol: `Device:Crystal_GND24_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_GND24_Small extends Component.withPins({
  "P1": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", G_2: "passive", P3: "passive", G_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_GND24_Small";
  override referencePrefix = "Y";
}

/**
 * Three pin crystal, GND on pin 2, small symbol
 *
 * KiCad symbol: `Device:Crystal_GND2_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_GND2_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_GND2_Small";
  override referencePrefix = "Y";
}

/**
 * Three pin crystal, GND on pin 3
 *
 * KiCad symbol: `Device:Crystal_GND3`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_GND3 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_GND3";
  override referencePrefix = "Y";
}

/**
 * Three pin crystal, GND on pin 3, small symbol
 *
 * KiCad symbol: `Device:Crystal_GND3_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_GND3_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_GND3_Small";
  override referencePrefix = "Y";
}

/**
 * Two pin crystal, small symbol
 *
 * KiCad symbol: `Device:Crystal_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 */
export class Crystal_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Crystal_Small";
  override referencePrefix = "Y";
}

/**
 * Diode
 *
 * KiCad symbol: `Device:D`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D";
  override referencePrefix = "D";
}

/**
 * Diode for alternating current
 *
 * KiCad symbol: `Device:DIAC`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: AC diode DIAC.
 */
export class DIAC extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:DIAC";
  override referencePrefix = "D";
}

/**
 * Diode for alternating current, filled shape
 *
 * KiCad symbol: `Device:DIAC_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: AC diode DIAC.
 */
export class DIAC_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:DIAC_Filled";
  override referencePrefix = "D";
}

/**
 * Diode, rotated by 45°
 *
 * KiCad symbol: `Device:D_45deg`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: Diode.
 */
export class D_45deg extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_45deg";
  override referencePrefix = "D";
}

/**
 * Diode, filled, rotated by 45°
 *
 * KiCad symbol: `Device:D_45deg_Filled`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: Diode.
 */
export class D_45deg_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_45deg_Filled";
  override referencePrefix = "D";
}

/**
 * Diode, anode on pins 1 and 2
 *
 * KiCad symbol: `Device:D_AAK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_AAK extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_AAK";
  override referencePrefix = "D";
}

/**
 * Diode bridge, +ve/-ve/AC/AC
 *
 * KiCad symbol: `Device:D_Bridge_+-AA`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 */
export class D_Bridge___AA extends Component.withPins({
  "+": "1",
  "-": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Bridge_+-AA";
  override referencePrefix = "D";
}

/**
 * Diode bridge, +ve/AC/-ve/AC
 *
 * KiCad symbol: `Device:D_Bridge_+A-A`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 */
export class D_Bridge__A_A extends Component.withPins({
  "+": "1",
  "P2": "2",
  "-": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", P2: "passive", "-": "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Bridge_+A-A";
  override referencePrefix = "D";
}

/**
 * Diode bridge, +ve/AC/AC/-ve
 *
 * KiCad symbol: `Device:D_Bridge_+AA-`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 */
export class D_Bridge__AA_ extends Component.withPins({
  "+": "1",
  "P2": "2",
  "P3": "3",
  "-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", P2: "passive", P3: "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Bridge_+AA-";
  override referencePrefix = "D";
}

/**
 * Diode bridge, -ve/AC/+ve/AC
 *
 * KiCad symbol: `Device:D_Bridge_-A+A`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 */
export class Device_D_Bridge__A_A extends Component.withPins({
  "-": "1",
  "P2": "2",
  "+": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", P2: "passive", "+": "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Bridge_-A+A";
  override referencePrefix = "D";
}

/**
 * Diode bridge, -ve/AC/AC/+ve
 *
 * KiCad symbol: `Device:D_Bridge_-AA+`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 */
export class Device_D_Bridge__AA_ extends Component.withPins({
  "-": "1",
  "P2": "2",
  "P3": "3",
  "+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", P2: "passive", P3: "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Bridge_-AA+";
  override referencePrefix = "D";
}

/**
 * Variable capacitance diode
 *
 * KiCad symbol: `Device:D_Capacitance`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: capacitance diode varicap varactor.
 */
export class D_Capacitance extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Capacitance";
  override referencePrefix = "D";
}

/**
 * Variable capacitance diode, filled shape
 *
 * KiCad symbol: `Device:D_Capacitance_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: capacitance diode varicap varactor.
 */
export class D_Capacitance_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Capacitance_Filled";
  override referencePrefix = "D";
}

/**
 * Constant-current diode / current limiting diode / current regulator diode, IEC60747-3:2013
 *
 * KiCad symbol: `Device:D_Current-regulator`. Reference prefix: `D`.
 * Footprint filters: TO-???*, D_*.
 * Keywords: diode constant-current current limit regulator.
 */
export class D_Current_regulator extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Current-regulator";
  override referencePrefix = "D";
}

/**
 * Constant-current diode / current limiting diode / current regulator diode, IEC60747-3:2013, small symbol
 *
 * KiCad symbol: `Device:D_Current-regulator_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, D_*.
 * Keywords: diode constant-current current limit regulator.
 */
export class D_Current_regulator_Small extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Current-regulator_Small";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_AKK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_AKK extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_AKK";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_AKK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_AKK_Parallel extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_AKK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_AKK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_AKK_Split extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_AKK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 2
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KAK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_KAK extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_KAK";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_KAK_Parallel extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_KAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_KAK_Split extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_KAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 3
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KKA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_KKA extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_KKA";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_KKA_Parallel extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_KKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonAnode_KKA_Split extends Component.withPins({
  "A": "3",
  "K_1": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonAnode_KKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AAK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_AAK extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_AAK";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_AAK_Parallel extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_AAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_AAK_Split extends Component.withPins({
  "K": "3",
  "A_1": "1",
  "A_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_1: "passive", A_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_AAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 2
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AKA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_AKA extends Component.withPins({
  "A_1": "1",
  "K": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_AKA";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_AKA_Parallel extends Component.withPins({
  "A_1": "1",
  "K": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_AKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_AKA_Split extends Component.withPins({
  "K": "2",
  "A_1": "1",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_1: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_AKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_KAA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_KAA extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_KAA";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_KAA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_KAA_Parallel extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_KAA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_KAA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_CommonCathode_KAA_Split extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_CommonCathode_KAA_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_ACK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_ACK extends Component.withPins({
  "A": "1",
  "common": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", common: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_ACK";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_ACK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_ACK_Parallel extends Component.withPins({
  "A": "1",
  "common": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", common: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_ACK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_ACK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_ACK_Split extends Component.withPins({
  "common": "2",
  "A": "1",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_ACK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_AKC`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_AKC extends Component.withPins({
  "A": "1",
  "K": "2",
  "common": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", common: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_AKC";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_AKC_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_AKC_Parallel extends Component.withPins({
  "A": "1",
  "K": "2",
  "common": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", common: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_AKC_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_AKC_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_AKC_Split extends Component.withPins({
  "K": "3",
  "A": "1",
  "common": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", common: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_AKC_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_CAK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_CAK extends Component.withPins({
  "common": "1",
  "A": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_CAK";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_CAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_CAK_Parallel extends Component.withPins({
  "common": "1",
  "A": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_CAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_CAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_CAK_Split extends Component.withPins({
  "common": "1",
  "A": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_CAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_CKA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_CKA extends Component.withPins({
  "common": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_CKA";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_CKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_CKA_Parallel extends Component.withPins({
  "common": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_CKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_CKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_CKA_Split extends Component.withPins({
  "common": "1",
  "A": "3",
  "K": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_CKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_KAC`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_KAC extends Component.withPins({
  "K": "1",
  "A": "2",
  "common": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", common: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_KAC";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_KAC_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_KAC_Parallel extends Component.withPins({
  "K": "1",
  "A": "2",
  "common": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", common: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_KAC_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_KAC_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_KAC_Split extends Component.withPins({
  "common": "3",
  "A": "2",
  "K": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_KAC_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_KCA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_KCA extends Component.withPins({
  "K": "1",
  "common": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", common: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_KCA";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_KCA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_KCA_Parallel extends Component.withPins({
  "K": "1",
  "common": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", common: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_KCA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_KCA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Dual_Series_KCA_Split extends Component.withPins({
  "common": "2",
  "A": "3",
  "K": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Dual_Series_KCA_Split";
  override referencePrefix = "D";
}

/**
 * Diode, filled shape
 *
 * KiCad symbol: `Device:D_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Filled";
  override referencePrefix = "D";
}

/**
 * Diode, anode on pins 2 and 3
 *
 * KiCad symbol: `Device:D_KAA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_KAA extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_KAA";
  override referencePrefix = "D";
}

/**
 * Diode, cathode on pins 1 and 3
 *
 * KiCad symbol: `Device:D_KAK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_KAK extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_KAK";
  override referencePrefix = "D";
}

/**
 * Diode, cathode on pins 1 and 2
 *
 * KiCad symbol: `Device:D_KKA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_KKA extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_KKA";
  override referencePrefix = "D";
}

/**
 * Laser diode, cathode on pin 3, anode on pin 1
 *
 * KiCad symbol: `Device:D_Laser_1A3C`. Reference prefix: `LD`.
 * Footprint filters: *LaserDiode*.
 * Keywords: opto laserdiode.
 */
export class D_Laser_1A3C extends Component.withPins({
  "A": "1",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Laser_1A3C";
  override referencePrefix = "LD";
}

/**
 * Laser diode, cathode on pin 1, anode on pin 2
 *
 * KiCad symbol: `Device:D_Laser_1C2A`. Reference prefix: `LD`.
 * Footprint filters: *LaserDiode*.
 * Keywords: opto laserdiode.
 */
export class D_Laser_1C2A extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Laser_1C2A";
  override referencePrefix = "LD";
}

/**
 * Laser diode with photodiode, common cathode on pin 2
 *
 * KiCad symbol: `Device:D_Laser_Photo_MType`. Reference prefix: `LD`.
 * Footprint filters: *LaserDiode*.
 * @see http://www.egismos.disonhu.com/laser/diode-package.htm
 * Keywords: opto laserdiode photodiode.
 */
export class D_Laser_Photo_MType extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Laser_Photo_MType";
  override referencePrefix = "LD";
}

/**
 * Laser diode with photodiode, center on pin 2, LD cathode on pin 1
 *
 * KiCad symbol: `Device:D_Laser_Photo_NType`. Reference prefix: `LD`.
 * Footprint filters: *LaserDiode*.
 * @see http://www.egismos.disonhu.com/laser/diode-package.htm
 * Keywords: opto laserdiode photodiode.
 */
export class D_Laser_Photo_NType extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Laser_Photo_NType";
  override referencePrefix = "LD";
}

/**
 * Laser diode with photodiode, center on pin 2, PD cathode on pin 3
 *
 * KiCad symbol: `Device:D_Laser_Photo_PType`. Reference prefix: `LD`.
 * Footprint filters: *LaserDiode*.
 * @see http://www.egismos.disonhu.com/laser/diode-package.htm
 * Keywords: opto laserdiode photodiode.
 */
export class D_Laser_Photo_PType extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Laser_Photo_PType";
  override referencePrefix = "LD";
}

/**
 * Photodiode
 *
 * KiCad symbol: `Device:D_Photo`. Reference prefix: `D`.
 * Keywords: photodiode diode opto.
 */
export class D_Photo extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Photo";
  override referencePrefix = "D";
}

/**
 * Photodiode, filled shape
 *
 * KiCad symbol: `Device:D_Photo_Filled`. Reference prefix: `D`.
 * Keywords: photodiode diode opto.
 */
export class D_Photo_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Photo_Filled";
  override referencePrefix = "D";
}

/**
 * Semiconductor radiation detector
 *
 * KiCad symbol: `Device:D_Radiation`. Reference prefix: `D`.
 * Keywords: radiation detector diode.
 */
export class D_Radiation extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Radiation";
  override referencePrefix = "D";
}

/**
 * Semiconductor radiation detector, filled shape
 *
 * KiCad symbol: `Device:D_Radiation_Filled`. Reference prefix: `D`.
 * Keywords: radiation detector diode.
 */
export class D_Radiation_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Radiation_Filled";
  override referencePrefix = "D";
}

/**
 * Schottky diode
 *
 * KiCad symbol: `Device:D_Schottky`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky.
 */
export class D_Schottky extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky";
  override referencePrefix = "D";
}

/**
 * Schottky diode, anode on pins 1 and 2
 *
 * KiCad symbol: `Device:D_Schottky_AAK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 */
export class D_Schottky_AAK extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_AAK";
  override referencePrefix = "D";
}

/**
 * Schottky diode, anode on pins 1 and 3
 *
 * KiCad symbol: `Device:D_Schottky_AKA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 */
export class D_Schottky_AKA extends Component.withPins({
  "A_1": "1",
  "K": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_AKA";
  override referencePrefix = "D";
}

/**
 * Schottky diode, cathode on pins 2 and 3
 *
 * KiCad symbol: `Device:D_Schottky_AKK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 */
export class D_Schottky_AKK extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_AKK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_AKK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_AKK extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_AKK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_AKK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_AKK_Parallel extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_AKK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_AKK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_AKK_Split extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_AKK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 2
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KAK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_KAK extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_KAK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_KAK_Parallel extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_KAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_KAK_Split extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_KAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 3
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KKA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_KKA extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_KKA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_KKA_Parallel extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_KKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonAnode_KKA_Split extends Component.withPins({
  "A": "3",
  "K_1": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonAnode_KKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AAK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_AAK extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_AAK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_AAK_Parallel extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_AAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_AAK_Split extends Component.withPins({
  "K": "3",
  "A_1": "1",
  "A_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_1: "passive", A_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_AAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 2
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AKA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_AKA extends Component.withPins({
  "A_1": "1",
  "K": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_AKA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_AKA_Parallel extends Component.withPins({
  "A_1": "1",
  "K": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_AKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_AKA_Split extends Component.withPins({
  "K": "2",
  "A_1": "1",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_1: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_AKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_KAA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_KAA extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_KAA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_KAA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_KAA_Parallel extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_KAA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_KAA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_CommonCathode_KAA_Split extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_CommonCathode_KAA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_ACK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_ACK extends Component.withPins({
  "A": "1",
  "common": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", common: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_ACK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_ACK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_ACK_Parallel extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_ACK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_ACK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_ACK_Split extends Component.withPins({
  "K_2": "2",
  "A": "1",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_2: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_ACK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_AKC`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_AKC extends Component.withPins({
  "A": "1",
  "K": "2",
  "common": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", common: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_AKC";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_AKC_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_AKC_Parallel extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_AKC_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_AKC_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_AKC_Split extends Component.withPins({
  "K_3": "3",
  "A": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_3: "passive", A: "passive", K_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_AKC_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CAK`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_CAK extends Component.withPins({
  "common": "1",
  "A": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_CAK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_CAK_Parallel extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_CAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_CAK_Split extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_CAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CKA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_CKA extends Component.withPins({
  "common": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_CKA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_CKA_Parallel extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_CKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_CKA_Split extends Component.withPins({
  "K_1": "1",
  "A": "3",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_CKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KAC`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_KAC extends Component.withPins({
  "K": "1",
  "A": "2",
  "common": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", common: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_KAC";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KAC_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_KAC_Parallel extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_KAC_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KAC_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_KAC_Split extends Component.withPins({
  "K_3": "3",
  "A": "2",
  "K_1": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_3: "passive", A: "passive", K_1: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_KAC_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KCA`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_KCA extends Component.withPins({
  "K": "1",
  "common": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", common: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_KCA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KCA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_KCA_Parallel extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_KCA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KCA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Schottky_Dual_Series_KCA_Split extends Component.withPins({
  "K_2": "2",
  "A": "3",
  "K_1": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_2: "passive", A: "passive", K_1: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Dual_Series_KCA_Split";
  override referencePrefix = "D";
}

/**
 * Schottky diode, filled shape
 *
 * KiCad symbol: `Device:D_Schottky_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky.
 */
export class D_Schottky_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Filled";
  override referencePrefix = "D";
}

/**
 * Schottky diode, anode on pins 2 and 3
 *
 * KiCad symbol: `Device:D_Schottky_KAA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 */
export class D_Schottky_KAA extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_KAA";
  override referencePrefix = "D";
}

/**
 * Schottky diode, cathode on pins 1 and 3
 *
 * KiCad symbol: `Device:D_Schottky_KAK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 */
export class D_Schottky_KAK extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_KAK";
  override referencePrefix = "D";
}

/**
 * Schottky diode, cathode on pins 1 and 2
 *
 * KiCad symbol: `Device:D_Schottky_KKA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 */
export class D_Schottky_KKA extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_KKA";
  override referencePrefix = "D";
}

/**
 * Schottky diode, small symbol
 *
 * KiCad symbol: `Device:D_Schottky_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky.
 */
export class D_Schottky_Small extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Small";
  override referencePrefix = "D";
}

/**
 * Schottky diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:D_Schottky_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky.
 */
export class D_Schottky_Small_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Schottky_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Shockley (PNPN) diode
 *
 * KiCad symbol: `Device:D_Shockley`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: Shockley diode PNPN.
 */
export class D_Shockley extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Shockley";
  override referencePrefix = "D";
}

/**
 * Silicon photomultiplier
 *
 * KiCad symbol: `Device:D_SiPM`. Reference prefix: `D`.
 * Footprint filters: MPPC*.
 * Keywords: SiPM MPPC SPAD photon counting.
 */
export class D_SiPM extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_SiPM";
  override referencePrefix = "D";
}

/**
 * Diode, small symbol
 *
 * KiCad symbol: `Device:D_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_Small extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Small";
  override referencePrefix = "D";
}

/**
 * Diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:D_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_Small_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Bidirectional transient-voltage-suppression diode
 *
 * KiCad symbol: `Device:D_TVS`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode TVS thyrector.
 */
export class D_TVS extends Component.withPins({
  "A1": "1",
  "A2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TVS";
  override referencePrefix = "D";
}

/**
 * Bidirectional dual transient-voltage-suppression diode, center on pin 3
 *
 * KiCad symbol: `Device:D_TVS_Dual_AAC`. Reference prefix: `D`.
 * Keywords: diode TVS thyrector.
 */
export class D_TVS_Dual_AAC extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "common": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", common: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TVS_Dual_AAC";
  override referencePrefix = "D";
}

/**
 * Bidirectional dual transient-voltage-suppression diode, center on pin 2
 *
 * KiCad symbol: `Device:D_TVS_Dual_ACA`. Reference prefix: `D`.
 * Keywords: diode TVS thyrector.
 */
export class D_TVS_Dual_ACA extends Component.withPins({
  "A1": "1",
  "common": "2",
  "A2": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", common: "passive", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TVS_Dual_ACA";
  override referencePrefix = "D";
}

/**
 * Bidirectional dual transient-voltage-suppression diode, center on pin 1
 *
 * KiCad symbol: `Device:D_TVS_Dual_CAA`. Reference prefix: `D`.
 * Keywords: diode TVS thyrector.
 */
export class D_TVS_Dual_CAA extends Component.withPins({
  "common": "1",
  "A1": "2",
  "A2": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", A1: "passive", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TVS_Dual_CAA";
  override referencePrefix = "D";
}

/**
 * Bidirectional transient-voltage-suppression diode, filled shape
 *
 * KiCad symbol: `Device:D_TVS_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode TVS thyrector.
 */
export class D_TVS_Filled extends Component.withPins({
  "A1": "1",
  "A2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TVS_Filled";
  override referencePrefix = "D";
}

/**
 * Bidirectional transient-voltage-suppression diode, small symbol
 *
 * KiCad symbol: `Device:D_TVS_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode TVS thyrector.
 */
export class D_TVS_Small extends Component.withPins({
  "A1": "1",
  "A2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TVS_Small";
  override referencePrefix = "D";
}

/**
 * Bidirectional transient-voltage-suppression diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:D_TVS_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode TVS thyrector.
 */
export class D_TVS_Small_Filled extends Component.withPins({
  "A1": "1",
  "A2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TVS_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Temperature dependent diode
 *
 * KiCad symbol: `Device:D_TemperatureDependent`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: temperature sensor diode.
 */
export class D_TemperatureDependent extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TemperatureDependent";
  override referencePrefix = "D";
}

/**
 * Temperature dependent diode, filled shape
 *
 * KiCad symbol: `Device:D_TemperatureDependent_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: temperature sensor diode.
 */
export class D_TemperatureDependent_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_TemperatureDependent_Filled";
  override referencePrefix = "D";
}

/**
 * Tunnel diode (Esaki diode)
 *
 * KiCad symbol: `Device:D_Tunnel`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: tunnel diode.
 */
export class D_Tunnel extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Tunnel";
  override referencePrefix = "D";
}

/**
 * Tunnel diode (Esaki diode), filled shape
 *
 * KiCad symbol: `Device:D_Tunnel_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: tunnel diode.
 */
export class D_Tunnel_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Tunnel_Filled";
  override referencePrefix = "D";
}

/**
 * Unitunnel diode
 *
 * KiCad symbol: `Device:D_Unitunnel`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: unitunnel diode.
 */
export class D_Unitunnel extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Unitunnel";
  override referencePrefix = "D";
}

/**
 * Unitunnel diode, filled shape
 *
 * KiCad symbol: `Device:D_Unitunnel_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: unitunnel diode.
 */
export class D_Unitunnel_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Unitunnel_Filled";
  override referencePrefix = "D";
}

/**
 * Zener diode
 *
 * KiCad symbol: `Device:D_Zener`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_Zener extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_AKK`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 */
export class D_Zener_Dual_CommonAnode_AKK extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_AKK";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_AKK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonAnode_AKK_Parallel extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_AKK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_AKK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonAnode_AKK_Split extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_AKK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 2
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KAK`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 */
export class D_Zener_Dual_CommonAnode_KAK extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_KAK";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonAnode_KAK_Parallel extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_KAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonAnode_KAK_Split extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_KAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KKA`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 */
export class D_Zener_Dual_CommonAnode_KKA extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_KKA";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonAnode_KKA_Parallel extends Component.withPins({
  "K_1": "1",
  "K_2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", K_2: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_KKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonAnode_KKA_Split extends Component.withPins({
  "A": "3",
  "K_1": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonAnode_KKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AAK`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 */
export class D_Zener_Dual_CommonCathode_AAK extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_AAK";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonCathode_AAK_Parallel extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_AAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonCathode_AAK_Split extends Component.withPins({
  "K": "3",
  "A_1": "1",
  "A_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_1: "passive", A_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_AAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 2
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AKA`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 */
export class D_Zener_Dual_CommonCathode_AKA extends Component.withPins({
  "A_1": "1",
  "K": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_AKA";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonCathode_AKA_Parallel extends Component.withPins({
  "A_1": "1",
  "K": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_AKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonCathode_AKA_Split extends Component.withPins({
  "K": "2",
  "A_1": "1",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_1: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_AKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_KAA`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 */
export class D_Zener_Dual_CommonCathode_KAA extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "A_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", A_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_KAA";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_KAA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonCathode_KAA_Parallel extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_KAA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_KAA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 */
export class D_Zener_Dual_CommonCathode_KAA_Split extends Component.withPins({
  "K_1": "1",
  "A": "2",
  "K_3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K_1: "passive", A: "passive", K_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Dual_CommonCathode_KAA_Split";
  override referencePrefix = "D";
}

/**
 * Zener diode, filled shape
 *
 * KiCad symbol: `Device:D_Zener_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_Zener_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Filled";
  override referencePrefix = "D";
}

/**
 * Zener diode, small symbol
 *
 * KiCad symbol: `Device:D_Zener_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_Zener_Small extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Small";
  override referencePrefix = "D";
}

/**
 * Zener diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:D_Zener_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 */
export class D_Zener_Small_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:D_Zener_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Delay line
 *
 * KiCad symbol: `Device:DelayLine`. Reference prefix: `L`.
 * Keywords: delay propagation retard impedance.
 */
export class DelayLine extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "COMMUN": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", COMMUN: "input", ...opts.pinTypes } });
  }
  override schema = "Device:DelayLine";
  override referencePrefix = "L";
}

/**
 * Earphone, polarized
 *
 * KiCad symbol: `Device:Earphone`. Reference prefix: `LS`.
 * Keywords: earphone speaker headphone.
 */
export class Earphone extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Earphone";
  override referencePrefix = "LS";
}

/**
 * Electromagnetic actor
 *
 * KiCad symbol: `Device:ElectromagneticActor`. Reference prefix: `L`.
 * Footprint filters: Inductor_*, L_*.
 * Keywords: electromagnet coil inductor.
 */
export class ElectromagneticActor extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:ElectromagneticActor";
  override referencePrefix = "L";
}

/**
 * Ferrite bead
 *
 * KiCad symbol: `Device:FerriteBead`. Reference prefix: `FB`.
 * Footprint filters: Inductor_*, L_*, *Ferrite*.
 * Keywords: L ferrite bead inductor filter.
 */
export class FerriteBead extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:FerriteBead";
  override referencePrefix = "FB";
}

/**
 * Ferrite bead, small symbol
 *
 * KiCad symbol: `Device:FerriteBead_Small`. Reference prefix: `FB`.
 * Footprint filters: Inductor_*, L_*, *Ferrite*.
 * Keywords: L ferrite bead inductor filter.
 */
export class FerriteBead_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:FerriteBead_Small";
  override referencePrefix = "FB";
}

/**
 * EMI filter, single capacitor
 *
 * KiCad symbol: `Device:Filter_EMI_C`. Reference prefix: `C`.
 * @see http://www.murata.com/~/media/webrenewal/support/library/catalog/products/emc/emifil/c31e.ashx?la=en-gb
 * Keywords: EMI filter feedthrough capacitor.
 */
export class Filter_EMI_C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_C";
  override referencePrefix = "C";
}

/**
 * EMI T-filter (CLC)
 *
 * KiCad symbol: `Device:Filter_EMI_CLC`. Reference prefix: `FL`.
 * Footprint filters: Filter*, Resonator*.
 * @see http://www.murata.com/~/media/webrenewal/support/library/catalog/products/emc/emifil/c31e.ashx?la=en-gb
 * Keywords: EMI T-filter.
 */
export class Filter_EMI_CLC extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_CLC";
  override referencePrefix = "FL";
}

/**
 * EMI 2-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LL`. Reference prefix: `FL`.
 * Footprint filters: L_*, L_CommonMode*.
 * Keywords: EMI filter.
 */
export class Filter_EMI_LL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_LL";
  override referencePrefix = "FL";
}

/**
 * EMI 2-inductor common mode filter
 *
 * KiCad symbol: `Device:Filter_EMI_CommonMode`. Reference prefix: `FL`.
 * Footprint filters: L_*, L_CommonMode*.
 * Keywords: EMI common mode filter.
 */
export class Filter_EMI_CommonMode extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_CommonMode";
  override referencePrefix = "FL";
}

/**
 * EMI T-filter (LCL)
 *
 * KiCad symbol: `Device:Filter_EMI_LCL`. Reference prefix: `FL`.
 * Footprint filters: Filter*, Resonator*.
 * @see http://www.murata.com/~/media/webrenewal/support/library/catalog/products/emc/emifil/c31e.ashx?la=en-gb
 * Keywords: EMI T-filter.
 */
export class Filter_EMI_LCL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_LCL";
  override referencePrefix = "FL";
}

/**
 * EMI 3-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LLL`. Reference prefix: `FL`.
 * Footprint filters: L*, L_CommonMode*.
 * Keywords: three phase common mode choke.
 */
export class Filter_EMI_LLL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_LLL";
  override referencePrefix = "FL";
}

/**
 * EMI 4-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LLLL`. Reference prefix: `FL`.
 * Footprint filters: L*, L_CommonMode*.
 * Keywords: common mode quadruple choke quad coil.
 */
export class Filter_EMI_LLLL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_LLLL";
  override referencePrefix = "FL";
}

/**
 * EMI 4-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LLLL_15263748`. Reference prefix: `FL`.
 * Footprint filters: L*, L_CommonMode*.
 * Keywords: common mode quadruple choke quad coil.
 */
export class Filter_EMI_LLLL_15263748 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_LLLL_15263748";
  override referencePrefix = "FL";
}

/**
 * EMI 3-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LLL_162534`. Reference prefix: `FL`.
 * Footprint filters: L*, L_CommonMode*.
 * Keywords: three phase common mode choke.
 */
export class Filter_EMI_LLL_162534 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_LLL_162534";
  override referencePrefix = "FL";
}

/**
 * EMI 2-inductor filter, pin-connections 1-4 and 2-3
 *
 * KiCad symbol: `Device:Filter_EMI_LL_1423`. Reference prefix: `FL`.
 * Footprint filters: Bourns*SRF0905*.
 * Keywords: EMI filter common-mode choke.
 */
export class Filter_EMI_LL_1423 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Filter_EMI_LL_1423";
  override referencePrefix = "FL";
}

/**
 * Frequency counter
 *
 * KiCad symbol: `Device:FrequencyCounter`. Reference prefix: `MES`.
 * Keywords: frequency counter.
 */
export class FrequencyCounter extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:FrequencyCounter";
  override referencePrefix = "MES";
}

/**
 * Fuse
 *
 * KiCad symbol: `Device:Fuse`. Reference prefix: `F`.
 * Footprint filters: *Fuse*.
 * Keywords: fuse.
 */
export class Fuse extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Fuse";
  override referencePrefix = "F";
}

/**
 * Polarized fuse
 *
 * KiCad symbol: `Device:Fuse_Polarized`. Reference prefix: `F`.
 * Footprint filters: *Fuse*.
 * Keywords: fuse.
 */
export class Fuse_Polarized extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "power_in", P2: "power_out", ...opts.pinTypes } });
  }
  override schema = "Device:Fuse_Polarized";
  override referencePrefix = "F";
}

/**
 * Polarized fuse, small symbol
 *
 * KiCad symbol: `Device:Fuse_Polarized_Small`. Reference prefix: `F`.
 * Footprint filters: *Fuse*.
 * Keywords: fuse.
 */
export class Fuse_Polarized_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "power_in", P2: "power_out", ...opts.pinTypes } });
  }
  override schema = "Device:Fuse_Polarized_Small";
  override referencePrefix = "F";
}

/**
 * Fuse, small symbol
 *
 * KiCad symbol: `Device:Fuse_Small`. Reference prefix: `F`.
 * Footprint filters: *Fuse*.
 * Keywords: fuse.
 */
export class Fuse_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Fuse_Small";
  override referencePrefix = "F";
}

/**
 * Gas Discharge Tube with 2 Pins
 *
 * KiCad symbol: `Device:GDT_2Pin`. Reference prefix: `GD`.
 * Keywords: gdt.
 */
export class GDT_2Pin extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:GDT_2Pin";
  override referencePrefix = "GD";
}

/**
 * Gas Discharge Tube with 3 Pins
 *
 * KiCad symbol: `Device:GDT_3Pin`. Reference prefix: `GD`.
 * Keywords: gdt.
 */
export class GDT_3Pin extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:GDT_3Pin";
  override referencePrefix = "GD";
}

/**
 * Galvanometer
 *
 * KiCad symbol: `Device:Galvanometer`. Reference prefix: `MES`.
 * Keywords: galvanometer.
 */
export class Galvanometer extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Galvanometer";
  override referencePrefix = "MES";
}

/**
 * Hall effect generator
 *
 * KiCad symbol: `Device:HallGenerator`. Reference prefix: `HG`.
 * Keywords: Hall generator magnet.
 */
export class HallGenerator extends Component.withPins({
  "U1": "1",
  "U2": "2",
  "UH1": "3",
  "UH2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { U1: "passive", U2: "passive", UH1: "passive", UH2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:HallGenerator";
  override referencePrefix = "HG";
}

/**
 * Resistive heater
 *
 * KiCad symbol: `Device:Heater`. Reference prefix: `R`.
 * Keywords: heater R resistor.
 */
export class Heater extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Heater";
  override referencePrefix = "R";
}

/**
 * Inductor
 *
 * KiCad symbol: `Device:L`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 */
export class L extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L";
  override referencePrefix = "L";
}

/**
 * Light emitting diode
 *
 * KiCad symbol: `Device:LED`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 */
export class LED extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, rotated by 45°
 *
 * KiCad symbol: `Device:LED_45deg`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 */
export class LED_45deg extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_45deg";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, rotated by 45°
 *
 * KiCad symbol: `Device:LED_45deg_Filled`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 */
export class LED_45deg_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_45deg_Filled";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/blue/green/red
 *
 * KiCad symbol: `Device:LED_ABGR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_ABGR extends Component.withPins({
  "A": "1",
  "BK": "2",
  "GK": "3",
  "RK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", BK: "passive", GK: "passive", RK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_ABGR";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/blue/red/green
 *
 * KiCad symbol: `Device:LED_ABRG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_ABRG extends Component.withPins({
  "A": "1",
  "BK": "2",
  "RK": "3",
  "GK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", BK: "passive", RK: "passive", GK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_ABRG";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/green/blue/red
 *
 * KiCad symbol: `Device:LED_AGBR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_AGBR extends Component.withPins({
  "A": "1",
  "GK": "2",
  "BK": "3",
  "RK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", GK: "passive", BK: "passive", RK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_AGBR";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/green/red/blue
 *
 * KiCad symbol: `Device:LED_AGRB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_AGRB extends Component.withPins({
  "A": "1",
  "GK": "2",
  "RK": "3",
  "BK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", GK: "passive", RK: "passive", BK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_AGRB";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/red/blue/green
 *
 * KiCad symbol: `Device:LED_ARBG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_ARBG extends Component.withPins({
  "A": "1",
  "RK": "2",
  "BK": "3",
  "GK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", RK: "passive", BK: "passive", GK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_ARBG";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/red/green/blue
 *
 * KiCad symbol: `Device:LED_ARGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_ARGB extends Component.withPins({
  "A": "1",
  "RK": "2",
  "GK": "3",
  "BK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", RK: "passive", GK: "passive", BK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_ARGB";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/anode/green/red
 *
 * KiCad symbol: `Device:LED_BAGR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BAGR extends Component.withPins({
  "BK": "1",
  "A": "2",
  "GK": "3",
  "RK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BK: "passive", A: "passive", GK: "passive", RK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BAGR";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/anode/red/green
 *
 * KiCad symbol: `Device:LED_BARG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BARG extends Component.withPins({
  "BK": "1",
  "A": "2",
  "RK": "3",
  "GK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BK: "passive", A: "passive", RK: "passive", GK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BARG";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/green/anode/red
 *
 * KiCad symbol: `Device:LED_BGAR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BGAR extends Component.withPins({
  "BK": "1",
  "GK": "2",
  "A": "3",
  "RK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BK: "passive", GK: "passive", A: "passive", RK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BGAR";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/green/cathode/red
 *
 * KiCad symbol: `Device:LED_BGKR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BGKR extends Component.withPins({
  "BA": "1",
  "GA": "2",
  "K": "3",
  "RA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BA: "passive", GA: "passive", K: "passive", RA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BGKR";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/green/red/anode
 *
 * KiCad symbol: `Device:LED_BGRA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BGRA extends Component.withPins({
  "BK": "1",
  "GK": "2",
  "RK": "3",
  "A": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BK: "passive", GK: "passive", RK: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BGRA";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/green/red/cathode
 *
 * KiCad symbol: `Device:LED_BGRK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BGRK extends Component.withPins({
  "BA": "1",
  "GA": "2",
  "RA": "3",
  "K": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BA: "passive", GA: "passive", RA: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BGRK";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/cathode/green/red
 *
 * KiCad symbol: `Device:LED_BKGR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BKGR extends Component.withPins({
  "BA": "1",
  "K": "2",
  "GA": "3",
  "RA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BA: "passive", K: "passive", GA: "passive", RA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BKGR";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/cathode/red/green
 *
 * KiCad symbol: `Device:LED_BKRG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BKRG extends Component.withPins({
  "BA": "1",
  "K": "2",
  "RA": "3",
  "GA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BA: "passive", K: "passive", RA: "passive", GA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BKRG";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/red/anode/green
 *
 * KiCad symbol: `Device:LED_BRAG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BRAG extends Component.withPins({
  "BK": "1",
  "RK": "2",
  "A": "3",
  "GK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BK: "passive", RK: "passive", A: "passive", GK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BRAG";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/red/green/anode
 *
 * KiCad symbol: `Device:LED_BRGA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BRGA extends Component.withPins({
  "BK": "1",
  "RK": "2",
  "GK": "3",
  "A": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BK: "passive", RK: "passive", GK: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BRGA";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/red/green/cathode
 *
 * KiCad symbol: `Device:LED_BRGK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BRGK extends Component.withPins({
  "BA": "1",
  "RA": "2",
  "GA": "3",
  "K": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BA: "passive", RA: "passive", GA: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BRGK";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/red/cathode/green
 *
 * KiCad symbol: `Device:LED_BRKG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_BRKG extends Component.withPins({
  "BA": "1",
  "RA": "2",
  "K": "3",
  "GA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BA: "passive", RA: "passive", K: "passive", GA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_BRKG";
  override referencePrefix = "D";
}

/**
 * Dual LED, common cathode on pin 3
 *
 * KiCad symbol: `Device:LED_Dual_AAK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_AAK extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "input", A2: "input", K: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_AAK";
  override referencePrefix = "D";
}

/**
 * Dual LED, cathodes on pins 3 and 4
 *
 * KiCad symbol: `Device:LED_Dual_AAKK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_AAKK extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "K1": "3",
  "K2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "input", A2: "input", K1: "input", K2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_AAKK";
  override referencePrefix = "D";
}

/**
 * Dual LED, common cathode on pin 2
 *
 * KiCad symbol: `Device:LED_Dual_AKA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_AKA extends Component.withPins({
  "A1": "1",
  "K": "2",
  "A2": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "input", K: "input", A2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_AKA";
  override referencePrefix = "D";
}

/**
 * Dual LED, cathodes on pins 2 and 4
 *
 * KiCad symbol: `Device:LED_Dual_AKAK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_AKAK extends Component.withPins({
  "A1": "1",
  "K1": "2",
  "A2": "3",
  "K2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "input", K1: "input", A2: "input", K2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_AKAK";
  override referencePrefix = "D";
}

/**
 * Dual LED, cathodes on pins 2 and 3
 *
 * KiCad symbol: `Device:LED_Dual_AKKA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_AKKA extends Component.withPins({
  "A1": "1",
  "K1": "2",
  "K2": "3",
  "A2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "input", K1: "input", K2: "input", A2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_AKKA";
  override referencePrefix = "D";
}

/**
 * Dual LED, bidirectional
 *
 * KiCad symbol: `Device:LED_Dual_Bidirectional`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_Bidirectional extends Component.withPins({
  "KA": "1",
  "AK": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { KA: "input", AK: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_Bidirectional";
  override referencePrefix = "D";
}

/**
 * Dual LED, common anode on pin 2
 *
 * KiCad symbol: `Device:LED_Dual_KAK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_KAK extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "input", A: "input", K2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_KAK";
  override referencePrefix = "D";
}

/**
 * Dual LED, cathodes on pins 1 and 3
 *
 * KiCad symbol: `Device:LED_Dual_KAKA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_KAKA extends Component.withPins({
  "K1": "1",
  "A1": "2",
  "K2": "3",
  "A2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "input", A1: "input", K2: "input", A2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_KAKA";
  override referencePrefix = "D";
}

/**
 * Dual LED, common anode on pin 3
 *
 * KiCad symbol: `Device:LED_Dual_KKA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 */
export class LED_Dual_KKA extends Component.withPins({
  "K1": "1",
  "K2": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "input", K2: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Dual_KKA";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, filled shape
 *
 * KiCad symbol: `Device:LED_Filled`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 */
export class LED_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Filled";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/anode/blue/red
 *
 * KiCad symbol: `Device:LED_GABR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GABR extends Component.withPins({
  "GK": "1",
  "A": "2",
  "BK": "3",
  "RK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GK: "passive", A: "passive", BK: "passive", RK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GABR";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/anode/red/blue
 *
 * KiCad symbol: `Device:LED_GARB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GARB extends Component.withPins({
  "GK": "1",
  "A": "2",
  "RK": "3",
  "BK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GK: "passive", A: "passive", RK: "passive", BK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GARB";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/blue/anode/red
 *
 * KiCad symbol: `Device:LED_GBAR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GBAR extends Component.withPins({
  "GK": "1",
  "BK": "2",
  "A": "3",
  "RK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GK: "passive", BK: "passive", A: "passive", RK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GBAR";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/blue/cathode/red
 *
 * KiCad symbol: `Device:LED_GBKR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GBKR extends Component.withPins({
  "GA": "1",
  "BA": "2",
  "K": "3",
  "RA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GA: "passive", BA: "passive", K: "passive", RA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GBKR";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/blue/red/anode
 *
 * KiCad symbol: `Device:LED_GBRA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GBRA extends Component.withPins({
  "GK": "1",
  "BK": "2",
  "RK": "3",
  "A": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GK: "passive", BK: "passive", RK: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GBRA";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/blue/red/cathode
 *
 * KiCad symbol: `Device:LED_GBRK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GBRK extends Component.withPins({
  "GA": "1",
  "BA": "2",
  "RA": "3",
  "K": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GA: "passive", BA: "passive", RA: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GBRK";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/cathode/blue/red
 *
 * KiCad symbol: `Device:LED_GKBR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GKBR extends Component.withPins({
  "GA": "1",
  "K": "2",
  "BA": "3",
  "RA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GA: "passive", K: "passive", BA: "passive", RA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GKBR";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/cathode/red/blue
 *
 * KiCad symbol: `Device:LED_GKRB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GKRB extends Component.withPins({
  "GA": "1",
  "K": "2",
  "RA": "3",
  "BA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GA: "passive", K: "passive", RA: "passive", BA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GKRB";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/red/anode/blue
 *
 * KiCad symbol: `Device:LED_GRAB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GRAB extends Component.withPins({
  "GK": "1",
  "RK": "2",
  "A": "3",
  "BK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GK: "passive", RK: "passive", A: "passive", BK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GRAB";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/red/blue/anode
 *
 * KiCad symbol: `Device:LED_GRBA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GRBA extends Component.withPins({
  "GK": "1",
  "RK": "2",
  "BK": "3",
  "A": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GK: "passive", RK: "passive", BK: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GRBA";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/red/blue/cathode
 *
 * KiCad symbol: `Device:LED_GRBK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GRBK extends Component.withPins({
  "GA": "1",
  "RA": "2",
  "BA": "3",
  "K": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GA: "passive", RA: "passive", BA: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GRBK";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/red/cathode/blue
 *
 * KiCad symbol: `Device:LED_GRKB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_GRKB extends Component.withPins({
  "GA": "1",
  "RA": "2",
  "K": "3",
  "BA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GA: "passive", RA: "passive", K: "passive", BA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_GRKB";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/blue/green/red
 *
 * KiCad symbol: `Device:LED_KBGR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_KBGR extends Component.withPins({
  "K": "1",
  "BA": "2",
  "GA": "3",
  "RA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", BA: "passive", GA: "passive", RA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_KBGR";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/blue/red/green
 *
 * KiCad symbol: `Device:LED_KBRG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_KBRG extends Component.withPins({
  "K": "1",
  "BA": "2",
  "RA": "3",
  "GA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", BA: "passive", RA: "passive", GA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_KBRG";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/green/blue/red
 *
 * KiCad symbol: `Device:LED_KGBR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_KGBR extends Component.withPins({
  "K": "1",
  "GA": "2",
  "BA": "3",
  "RA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", GA: "passive", BA: "passive", RA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_KGBR";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/green/red/blue
 *
 * KiCad symbol: `Device:LED_KGRB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_KGRB extends Component.withPins({
  "K": "1",
  "GA": "2",
  "RA": "3",
  "BA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", GA: "passive", RA: "passive", BA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_KGRB";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/red/blue/green
 *
 * KiCad symbol: `Device:LED_KRBG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_KRBG extends Component.withPins({
  "K": "1",
  "RA": "2",
  "BA": "3",
  "GA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", RA: "passive", BA: "passive", GA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_KRBG";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/red/green/blue
 *
 * KiCad symbol: `Device:LED_KRGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_KRGB extends Component.withPins({
  "K": "1",
  "RA": "2",
  "GA": "3",
  "BA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", RA: "passive", GA: "passive", BA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_KRGB";
  override referencePrefix = "D";
}

/**
 * Light emitting diode with pad
 *
 * KiCad symbol: `Device:LED_Pad`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode pad.
 */
export class LED_Pad extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Pad";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/anode/blue/green
 *
 * KiCad symbol: `Device:LED_RABG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RABG extends Component.withPins({
  "RK": "1",
  "A": "2",
  "BK": "3",
  "GK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", A: "passive", BK: "passive", GK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RABG";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/anode/green/blue
 *
 * KiCad symbol: `Device:LED_RAGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RAGB extends Component.withPins({
  "RK": "1",
  "A": "2",
  "GK": "3",
  "BK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", A: "passive", GK: "passive", BK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RAGB";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/blue/anode/green
 *
 * KiCad symbol: `Device:LED_RBAG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RBAG extends Component.withPins({
  "RK": "1",
  "BK": "2",
  "A": "3",
  "GK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", BK: "passive", A: "passive", GK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RBAG";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/blue/green/anode
 *
 * KiCad symbol: `Device:LED_RBGA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RBGA extends Component.withPins({
  "RK": "1",
  "BK": "2",
  "GK": "3",
  "A": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", BK: "passive", GK: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RBGA";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/blue/green/cathode
 *
 * KiCad symbol: `Device:LED_RBGK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RBGK extends Component.withPins({
  "RA": "1",
  "BA": "2",
  "GA": "3",
  "K": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA: "passive", BA: "passive", GA: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RBGK";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/blue/cathode/green
 *
 * KiCad symbol: `Device:LED_RBKG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RBKG extends Component.withPins({
  "RA": "1",
  "BA": "2",
  "K": "3",
  "GA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA: "passive", BA: "passive", K: "passive", GA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RBKG";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/green/anode/blue
 *
 * KiCad symbol: `Device:LED_RGAB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RGAB extends Component.withPins({
  "RK": "1",
  "GK": "2",
  "A": "3",
  "BK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", GK: "passive", A: "passive", BK: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RGAB";
  override referencePrefix = "D";
}

/**
 * RGB LED, 6 pin package
 *
 * KiCad symbol: `Device:LED_RGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RGB extends Component.withPins({
  "RK": "1",
  "GK": "2",
  "BK": "3",
  "BA": "4",
  "GA": "5",
  "RA": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", GK: "passive", BK: "passive", BA: "passive", GA: "passive", RA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RGB";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/green/blue/anode
 *
 * KiCad symbol: `Device:LED_RGBA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RGBA extends Component.withPins({
  "RK": "1",
  "GK": "2",
  "BK": "3",
  "A": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", GK: "passive", BK: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RGBA";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/green/blue/cathode
 *
 * KiCad symbol: `Device:LED_RGBK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RGBK extends Component.withPins({
  "RA": "1",
  "GA": "2",
  "BA": "3",
  "K": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA: "passive", GA: "passive", BA: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RGBK";
  override referencePrefix = "D";
}

/**
 * RGB LED, 6 pin package with exposed pad
 *
 * KiCad symbol: `Device:LED_RGB_EP`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RGB_EP extends Component.withPins({
  "RK": "1",
  "GK": "2",
  "BK": "3",
  "BA": "4",
  "GA": "5",
  "RA": "6",
  "PAD": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", GK: "passive", BK: "passive", BA: "passive", GA: "passive", RA: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RGB_EP";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/green/cathode/blue
 *
 * KiCad symbol: `Device:LED_RGKB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RGKB extends Component.withPins({
  "RA": "1",
  "GA": "2",
  "K": "3",
  "BA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA: "passive", GA: "passive", K: "passive", BA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RGKB";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/cathode/blue/green
 *
 * KiCad symbol: `Device:LED_RKBG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RKBG extends Component.withPins({
  "RA": "1",
  "K": "2",
  "BA": "3",
  "GA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA: "passive", K: "passive", BA: "passive", GA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RKBG";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/cathode/green/blue
 *
 * KiCad symbol: `Device:LED_RKGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 */
export class LED_RKGB extends Component.withPins({
  "RA": "1",
  "K": "2",
  "GA": "3",
  "BA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA: "passive", K: "passive", GA: "passive", BA: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_RKGB";
  override referencePrefix = "D";
}

/**
 * Several LEDs in series
 *
 * KiCad symbol: `Device:LED_Series`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 */
export class LED_Series extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Series";
  override referencePrefix = "D";
}

/**
 * Several LEDs in series with exposed pad
 *
 * KiCad symbol: `Device:LED_Series_Pad`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode pad.
 */
export class LED_Series_Pad extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Series_Pad";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, small symbol
 *
 * KiCad symbol: `Device:LED_Small`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode light-emitting-diode.
 */
export class LED_Small extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Small";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:LED_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode light-emitting-diode.
 */
export class LED_Small_Filled extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:LED_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Inductor, rotated by 45°
 *
 * KiCad symbol: `Device:L_45deg`. Reference prefix: `L`.
 * Footprint filters: L_*, Choke_*, Inductor_*, *Coil*.
 * Keywords: inductor choke coil reactor magnetic inductor.
 */
export class L_45deg extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_45deg";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_1243 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_1324 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_1342 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_1423 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_1423";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_Small";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_Small_1243 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_Small_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_Small_1324 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_Small_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_Small_1342 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_Small_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Coupled_Small_1423 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Coupled_Small_1423";
  override referencePrefix = "L";
}

/**
 * Inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 */
export class L_Ferrite extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_1243 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_1324 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_1342 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_1423 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_1423";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_Small";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_Small_1243 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_Small_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_Small_1324 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_Small_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_Small_1342 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_Small_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Ferrite_Coupled_Small_1423 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Coupled_Small_1423";
  override referencePrefix = "L";
}

/**
 * Inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 */
export class L_Ferrite_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Ferrite_Small";
  override referencePrefix = "L";
}

/**
 * Inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 */
export class L_Iron extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_1243 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_1324 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_1342 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_1423 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_1423";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_Small";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_Small_1243 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_Small_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_Small_1324 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_Small_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_Small_1342 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_Small_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 */
export class L_Iron_Coupled_Small_1423 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Coupled_Small_1423";
  override referencePrefix = "L";
}

/**
 * Inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 */
export class L_Iron_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Iron_Small";
  override referencePrefix = "L";
}

/**
 * 4 inductor network, parallel topology
 *
 * KiCad symbol: `Device:L_Pack04`. Reference prefix: `LN`.
 * Keywords: L network parallel topology.
 */
export class L_Pack04 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Pack04";
  override referencePrefix = "LN";
}

/**
 * Inductor, small symbol
 *
 * KiCad symbol: `Device:L_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 */
export class L_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Small";
  override referencePrefix = "L";
}

/**
 * Variable inductor
 *
 * KiCad symbol: `Device:L_Trim`. Reference prefix: `L`.
 * Footprint filters: Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 */
export class L_Trim extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:L_Trim";
  override referencePrefix = "L";
}

/**
 * Lamp
 *
 * KiCad symbol: `Device:Lamp`. Reference prefix: `LA`.
 * Keywords: lamp.
 */
export class Lamp extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Lamp";
  override referencePrefix = "LA";
}

/**
 * Flash lamp tube
 *
 * KiCad symbol: `Device:Lamp_Flash`. Reference prefix: `LA`.
 * Keywords: flash lamp.
 */
export class Lamp_Flash extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Lamp_Flash";
  override referencePrefix = "LA";
}

/**
 * Neon lamp
 *
 * KiCad symbol: `Device:Lamp_Neon`. Reference prefix: `NE`.
 * Keywords: neon lamp.
 */
export class Lamp_Neon extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Lamp_Neon";
  override referencePrefix = "NE";
}

/**
 * Memristor
 *
 * KiCad symbol: `Device:Memristor`. Reference prefix: `MR`.
 * Keywords: memristor.
 */
export class Memristor extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Memristor";
  override referencePrefix = "MR";
}

/**
 * Microphone
 *
 * KiCad symbol: `Device:Microphone`. Reference prefix: `MK`.
 * Keywords: microphone.
 */
export class Microphone extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Microphone";
  override referencePrefix = "MK";
}

/**
 * Condenser microphone
 *
 * KiCad symbol: `Device:Microphone_Condenser`. Reference prefix: `MK`.
 * Keywords: capacitance condenser microphone.
 */
export class Microphone_Condenser extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Microphone_Condenser";
  override referencePrefix = "MK";
}

/**
 * Crystal microphone
 *
 * KiCad symbol: `Device:Microphone_Crystal`. Reference prefix: `MK`.
 * Keywords: microphone crystal.
 */
export class Microphone_Crystal extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Microphone_Crystal";
  override referencePrefix = "MK";
}

/**
 * Ultrasound receiver
 *
 * KiCad symbol: `Device:Microphone_Ultrasound`. Reference prefix: `MK`.
 * Keywords: microphone ultrasound crystal.
 */
export class Microphone_Ultrasound extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Microphone_Ultrasound";
  override referencePrefix = "MK";
}

/**
 * Net tie, 2 pins
 *
 * KiCad symbol: `Device:NetTie_2`. Reference prefix: `NT`.
 * Footprint filters: Net*Tie*.
 * Keywords: net tie short.
 */
export class NetTie_2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Device:NetTie_2";
  override referencePrefix = "NT";
}

/**
 * Net tie, 3 pins
 *
 * KiCad symbol: `Device:NetTie_3`. Reference prefix: `NT`.
 * Footprint filters: Net*Tie*.
 * Keywords: net tie short.
 */
export class NetTie_3 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Device:NetTie_3";
  override referencePrefix = "NT";
}

/**
 * Net tie, 3 pins, tee
 *
 * KiCad symbol: `Device:NetTie_3_Tee`. Reference prefix: `NT`.
 * Footprint filters: Net*Tie*.
 * Keywords: net tie short.
 */
export class NetTie_3_Tee extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Device:NetTie_3_Tee";
  override referencePrefix = "NT";
}

/**
 * Net tie, 4 pins
 *
 * KiCad symbol: `Device:NetTie_4`. Reference prefix: `NT`.
 * Footprint filters: Net*Tie*.
 * Keywords: net tie short.
 */
export class NetTie_4 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Device:NetTie_4";
  override referencePrefix = "NT";
}

/**
 * Net tie, 4 pins, cross
 *
 * KiCad symbol: `Device:NetTie_4_Cross`. Reference prefix: `NT`.
 * Footprint filters: Net*Tie*.
 * Keywords: net tie short.
 */
export class NetTie_4_Cross extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Device:NetTie_4_Cross";
  override referencePrefix = "NT";
}

/**
 * Ohmmeter
 *
 * KiCad symbol: `Device:Ohmmeter`. Reference prefix: `MES`.
 * Keywords: ohmmeter resistance.
 */
export class Ohmmeter extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Ohmmeter";
  override referencePrefix = "MES";
}

/**
 * Oscilloscope
 *
 * KiCad symbol: `Device:Oscilloscope`. Reference prefix: `MES`.
 * Keywords: oscilloscope.
 */
export class Oscilloscope extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Oscilloscope";
  override referencePrefix = "MES";
}

/**
 * Peltier element, thermoelectric cooler
 *
 * KiCad symbol: `Device:PeltierElement`. Reference prefix: `PE`.
 * Keywords: Peltier TEC.
 */
export class PeltierElement extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:PeltierElement";
  override referencePrefix = "PE";
}

/**
 * Resettable fuse, polymeric positive temperature coefficient
 *
 * KiCad symbol: `Device:Polyfuse`. Reference prefix: `F`.
 * Footprint filters: *polyfuse*, *PTC*.
 * Keywords: resettable fuse PTC PPTC polyfuse polyswitch.
 */
export class Polyfuse extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Polyfuse";
  override referencePrefix = "F";
}

/**
 * Resettable fuse, polymeric positive temperature coefficient, small symbol
 *
 * KiCad symbol: `Device:Polyfuse_Small`. Reference prefix: `F`.
 * Footprint filters: *polyfuse*, *PTC*.
 * Keywords: resettable fuse PTC PPTC polyfuse polyswitch.
 */
export class Polyfuse_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Polyfuse_Small";
  override referencePrefix = "F";
}

/**
 * N-IGBT transistor, collector/emitter/gate
 *
 * KiCad symbol: `Device:Q_NIGBT_CEG`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 */
export class Q_NIGBT_CEG extends Component.withPins({
  "C": "1",
  "E": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C: "passive", E: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NIGBT_CEG";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, collector/gate/emitter
 *
 * KiCad symbol: `Device:Q_NIGBT_CGE`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 */
export class Q_NIGBT_CGE extends Component.withPins({
  "C": "1",
  "G": "2",
  "E": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C: "passive", G: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NIGBT_CGE";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, emitter/collector/gate
 *
 * KiCad symbol: `Device:Q_NIGBT_ECG`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 */
export class Q_NIGBT_ECG extends Component.withPins({
  "E": "1",
  "C": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "passive", C: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NIGBT_ECG";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, emitter/collector/gate, collector connected to mounting plane
 *
 * KiCad symbol: `Device:Q_NIGBT_ECGC`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 */
export class Q_NIGBT_ECGC extends Component.withPins({
  "E": "1",
  "C_2": "2",
  "G": "3",
  "C_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "passive", C_2: "passive", G: "input", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NIGBT_ECGC";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, emitter/gate/collector
 *
 * KiCad symbol: `Device:Q_NIGBT_EGC`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 */
export class Q_NIGBT_EGC extends Component.withPins({
  "E": "1",
  "G": "2",
  "C": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "passive", G: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NIGBT_EGC";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, gate/collector/emitter
 *
 * KiCad symbol: `Device:Q_NIGBT_GCE`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 */
export class Q_NIGBT_GCE extends Component.withPins({
  "G": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NIGBT_GCE";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, gate/collector/emitter, collector connected to mounting plane
 *
 * KiCad symbol: `Device:Q_NIGBT_GCEC`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 */
export class Q_NIGBT_GCEC extends Component.withPins({
  "G": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NIGBT_GCEC";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, gate/emitter/collector
 *
 * KiCad symbol: `Device:Q_NIGBT_GEC`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 */
export class Q_NIGBT_GEC extends Component.withPins({
  "G": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NIGBT_GEC";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, drain/gate/source
 *
 * KiCad symbol: `Device:Q_NJFET_DGS`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 */
export class Q_NJFET_DGS extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NJFET_DGS";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, drain/source/gate
 *
 * KiCad symbol: `Device:Q_NJFET_DSG`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 */
export class Q_NJFET_DSG extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NJFET_DSG";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, gate/drain/source
 *
 * KiCad symbol: `Device:Q_NJFET_GDS`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 */
export class Q_NJFET_GDS extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NJFET_GDS";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, gate/source/drain
 *
 * KiCad symbol: `Device:Q_NJFET_GSD`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 */
export class Q_NJFET_GSD extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NJFET_GSD";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, source/drain/gate
 *
 * KiCad symbol: `Device:Q_NJFET_SDG`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 */
export class Q_NJFET_SDG extends Component.withPins({
  "S": "1",
  "D": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "passive", D: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NJFET_SDG";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, source/gate/drain
 *
 * KiCad symbol: `Device:Q_NJFET_SGD`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 */
export class Q_NJFET_SGD extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NJFET_SGD";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor
 *
 * KiCad symbol: `Device:Q_NMOS`. Reference prefix: `Q`.
 * Keywords: NMOS N-MOS.
 */
export class Q_NMOS extends Component.withPins({
  "PD": "D",
  "PG": "G",
  "PS": "S",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD: "passive", PG: "input", PS: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NMOS";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode N-channel MOSFET
 *
 * KiCad symbol: `Device:Q_NMOS_Depletion`. Reference prefix: `Q`.
 * Keywords: NMOS.
 */
export class Q_NMOS_Depletion extends Component.withPins({
  "PD": "D",
  "PG": "G",
  "PS": "S",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD: "passive", PG: "input", PS: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NMOS_Depletion";
  override referencePrefix = "Q";
}

/**
 * NPN bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_NPN`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN extends Component.withPins({
  "PB": "B",
  "PC": "C",
  "PE": "E",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB: "input", PC: "passive", PE: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NPN";
  override referencePrefix = "Q";
}

/**
 * NPN bias resistor bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_NPN_BRT`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_BRT extends Component.withPins({
  "PB": "B",
  "PC": "C",
  "PE": "E",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB: "input", PC: "passive", PE: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NPN_BRT";
  override referencePrefix = "Q";
}

/**
 * NPN gate resistor bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_NPN_BRT_No_R2`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_BRT_No_R2 extends Component.withPins({
  "PB": "B",
  "PC": "C",
  "PE": "E",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB: "input", PC: "passive", PE: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NPN_BRT_No_R2";
  override referencePrefix = "Q";
}

/**
 * NPN bipolar junction transistors, current mirror configuration
 *
 * KiCad symbol: `Device:Q_NPN_CurrentMirror`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_CurrentMirror extends Component.withPins({
  "PC1": "C1",
  "PC2": "C2",
  "PE1": "E1",
  "PE2": "E2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC1: "passive", PC2: "passive", PE1: "passive", PE2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NPN_CurrentMirror";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington  bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_NPN_Darlington`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington extends Component.withPins({
  "PB": "B",
  "PC": "C",
  "PE": "E",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB: "input", PC: "passive", PE: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NPN_Darlington";
  override referencePrefix = "Q";
}

/**
 * N-Type unijunction transistor
 *
 * KiCad symbol: `Device:Q_NUJT_BEB`. Reference prefix: `Q`.
 * Keywords: transistor UJT.
 */
export class Q_NUJT_BEB extends Component.withPins({
  "B2": "1",
  "E": "2",
  "B1": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { B2: "passive", E: "input", B1: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_NUJT_BEB";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, drain/gate/source
 *
 * KiCad symbol: `Device:Q_PJFET_DGS`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 */
export class Q_PJFET_DGS extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PJFET_DGS";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, drain/source/gate
 *
 * KiCad symbol: `Device:Q_PJFET_DSG`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 */
export class Q_PJFET_DSG extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PJFET_DSG";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, gate/drain/source
 *
 * KiCad symbol: `Device:Q_PJFET_GDS`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 */
export class Q_PJFET_GDS extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PJFET_GDS";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, gate/source/drain
 *
 * KiCad symbol: `Device:Q_PJFET_GSD`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 */
export class Q_PJFET_GSD extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PJFET_GSD";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, source/drain/gate
 *
 * KiCad symbol: `Device:Q_PJFET_SDG`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 */
export class Q_PJFET_SDG extends Component.withPins({
  "S": "1",
  "D": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "passive", D: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PJFET_SDG";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, source/gate/drain
 *
 * KiCad symbol: `Device:Q_PJFET_SGD`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 */
export class Q_PJFET_SGD extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PJFET_SGD";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor
 *
 * KiCad symbol: `Device:Q_PMOS`. Reference prefix: `Q`.
 * Keywords: PMOS P-MOS.
 */
export class Q_PMOS extends Component.withPins({
  "PD": "D",
  "PG": "G",
  "PS": "S",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD: "passive", PG: "input", PS: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PMOS";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode P-channel MOSFET
 *
 * KiCad symbol: `Device:Q_PMOS_Depletion`. Reference prefix: `Q`.
 * Keywords: PMOS.
 */
export class Q_PMOS_Depletion extends Component.withPins({
  "PD": "D",
  "PG": "G",
  "PS": "S",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD: "passive", PG: "input", PS: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PMOS_Depletion";
  override referencePrefix = "Q";
}

/**
 * PNP bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_PNP`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP extends Component.withPins({
  "PB": "B",
  "PC": "C",
  "PE": "E",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB: "input", PC: "passive", PE: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PNP";
  override referencePrefix = "Q";
}

/**
 * PNP bias resistor bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_PNP_BRT`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_BRT extends Component.withPins({
  "PB": "B",
  "PC": "C",
  "PE": "E",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB: "input", PC: "passive", PE: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PNP_BRT";
  override referencePrefix = "Q";
}

/**
 * PNP gate resistor bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_PNP_BRT_No_R2`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_BRT_No_R2 extends Component.withPins({
  "PB": "B",
  "PC": "C",
  "PE": "E",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB: "input", PC: "passive", PE: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PNP_BRT_No_R2";
  override referencePrefix = "Q";
}

/**
 * Double PNP bipolar junction transistors, current mirror configuration
 *
 * KiCad symbol: `Device:Q_PNP_CurrentMirror`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_CurrentMirror extends Component.withPins({
  "PC1": "C1",
  "PC2": "C2",
  "PE1": "E1",
  "PE2": "E2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC1: "passive", PC2: "passive", PE1: "passive", PE2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PNP_CurrentMirror";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_PNP_Darlington`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington extends Component.withPins({
  "PB": "B",
  "PC": "C",
  "PE": "E",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB: "input", PC: "passive", PE: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PNP_Darlington";
  override referencePrefix = "Q";
}

/**
 * P-Type unijunction transistor
 *
 * KiCad symbol: `Device:Q_PUJT_BEB`. Reference prefix: `Q`.
 * Keywords: transistor UJT.
 */
export class Q_PUJT_BEB extends Component.withPins({
  "B2": "1",
  "E": "2",
  "B1": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { B2: "passive", E: "input", B1: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_PUJT_BEB";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, collector/emitter
 *
 * KiCad symbol: `Device:Q_Photo_NPN`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 */
export class Q_Photo_NPN extends Component.withPins({
  "C": "1",
  "E": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_Photo_NPN";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, collector/base/emitter
 *
 * KiCad symbol: `Device:Q_Photo_NPN_CBE`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 */
export class Q_Photo_NPN_CBE extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_Photo_NPN_CBE";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, collector/emitter
 *
 * KiCad symbol: `Device:Q_Photo_NPN_CE`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 */
export class Q_Photo_NPN_CE extends Component.withPins({
  "C": "1",
  "E": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_Photo_NPN_CE";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, emitter/base/collector
 *
 * KiCad symbol: `Device:Q_Photo_NPN_EBC`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 */
export class Q_Photo_NPN_EBC extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_Photo_NPN_EBC";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, emitter/collector
 *
 * KiCad symbol: `Device:Q_Photo_NPN_EC`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 */
export class Q_Photo_NPN_EC extends Component.withPins({
  "E": "1",
  "C": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_Photo_NPN_EC";
  override referencePrefix = "Q";
}

/**
 * Silicon controlled rectifier, anode/gate/cathode
 *
 * KiCad symbol: `Device:Q_SCR_AGK`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 */
export class Q_SCR_AGK extends Component.withPins({
  "A": "1",
  "G": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", G: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_SCR_AGK";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, anode/cathode/gate
 *
 * KiCad symbol: `Device:Q_SCR_AKG`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 */
export class Q_SCR_AKG extends Component.withPins({
  "A": "1",
  "K": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_SCR_AKG";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, gate/anode/cathode
 *
 * KiCad symbol: `Device:Q_SCR_GAK`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 */
export class Q_SCR_GAK extends Component.withPins({
  "G": "1",
  "A": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_SCR_GAK";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, gate/cathode/anode
 *
 * KiCad symbol: `Device:Q_SCR_GKA`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 */
export class Q_SCR_GKA extends Component.withPins({
  "G": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_SCR_GKA";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, cathode/anode/gate
 *
 * KiCad symbol: `Device:Q_SCR_KAG`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 */
export class Q_SCR_KAG extends Component.withPins({
  "K": "1",
  "A": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_SCR_KAG";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, cathode/gate/anode
 *
 * KiCad symbol: `Device:Q_SCR_KGA`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 */
export class Q_SCR_KGA extends Component.withPins({
  "K": "1",
  "G": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", G: "input", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Q_SCR_KGA";
  override referencePrefix = "D";
}

/**
 * Triode for alternating current, generic/no defined pinout
 *
 * KiCad symbol: `Device:Q_Triac`. Reference prefix: `D`.
 * Keywords: TRIAC.
 */
export class Q_Triac extends Component.withPins({
  "PA1": "A1",
  "PA2": "A2",
  "PG": "G",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA1: "passive", PA2: "passive", PG: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Q_Triac";
  override referencePrefix = "D";
}

/**
 * Resistor
 *
 * KiCad symbol: `Device:R`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor.
 */
export class R extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R";
  override referencePrefix = "R";
}

/**
 * One-piece EMI RF shielding cabinet
 *
 * KiCad symbol: `Device:RFShield_OnePiece`. Reference prefix: `J`.
 * Keywords: RF EMI shielding cabinet.
 */
export class RFShield_OnePiece extends Component.withPins({
  "Shield": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:RFShield_OnePiece";
  override referencePrefix = "J";
}

/**
 * Two-piece EMI RF shielding cabinet
 *
 * KiCad symbol: `Device:RFShield_TwoPieces`. Reference prefix: `J`.
 * Keywords: RF EMI shielding cabinet.
 */
export class RFShield_TwoPieces extends Component.withPins({
  "Shield": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:RFShield_TwoPieces";
  override referencePrefix = "J";
}

/**
 * Resistor, rotated by 45°
 *
 * KiCad symbol: `Device:R_45deg`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor diagonal.
 */
export class R_45deg extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_45deg";
  override referencePrefix = "R";
}

/**
 * 3 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network03`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP4.
 */
export class R_Network03 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network03";
  override referencePrefix = "RN";
}

/**
 * 3 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network03_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP4.
 */
export class R_Network03_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network03_Split";
  override referencePrefix = "RN";
}

/**
 * 3 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network03_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP4.
 */
export class R_Network03_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network03_US";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network04`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP5.
 */
export class R_Network04 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network04";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network04_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP5.
 */
export class R_Network04_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network04_Split";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network04_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP5.
 */
export class R_Network04_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network04_US";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network05`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP6.
 */
export class R_Network05 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network05";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network05_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP6.
 */
export class R_Network05_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network05_Split";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network05_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP6.
 */
export class R_Network05_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network05_US";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network06`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP7.
 */
export class R_Network06 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network06";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network06_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP7.
 */
export class R_Network06_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
  "R6.2": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", "R6.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network06_Split";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network06_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP7.
 */
export class R_Network06_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network06_US";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network07`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP8.
 */
export class R_Network07 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network07";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network07_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP8.
 */
export class R_Network07_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
  "R6.2": "7",
  "R7.2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", "R6.2": "passive", "R7.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network07_Split";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network07_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP8.
 */
export class R_Network07_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network07_US";
  override referencePrefix = "RN";
}

/**
 * 8 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network08`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP9.
 */
export class R_Network08 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network08";
  override referencePrefix = "RN";
}

/**
 * 8 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network08_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP9.
 */
export class R_Network08_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
  "R6.2": "7",
  "R7.2": "8",
  "R8.2": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", "R6.2": "passive", "R7.2": "passive", "R8.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network08_Split";
  override referencePrefix = "RN";
}

/**
 * 8 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network08_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP9.
 */
export class R_Network08_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network08_US";
  override referencePrefix = "RN";
}

/**
 * 9 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network09`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP10.
 */
export class R_Network09 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network09";
  override referencePrefix = "RN";
}

/**
 * 9 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network09_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP10.
 */
export class R_Network09_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
  "R6.2": "7",
  "R7.2": "8",
  "R8.2": "9",
  "R9.2": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", "R6.2": "passive", "R7.2": "passive", "R8.2": "passive", "R9.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network09_Split";
  override referencePrefix = "RN";
}

/**
 * 9 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network09_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP10.
 */
export class R_Network09_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network09_US";
  override referencePrefix = "RN";
}

/**
 * 10 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network10`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP11.
 */
export class R_Network10 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network10";
  override referencePrefix = "RN";
}

/**
 * 10 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network10_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP11.
 */
export class R_Network10_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
  "R6.2": "7",
  "R7.2": "8",
  "R8.2": "9",
  "R9.2": "10",
  "R10.2": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", "R6.2": "passive", "R7.2": "passive", "R8.2": "passive", "R9.2": "passive", "R10.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network10_Split";
  override referencePrefix = "RN";
}

/**
 * 10 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network10_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP11.
 */
export class R_Network10_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network10_US";
  override referencePrefix = "RN";
}

/**
 * 11 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network11`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP12.
 */
export class R_Network11 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
  "R11": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", R11: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network11";
  override referencePrefix = "RN";
}

/**
 * 11 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network11_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP12.
 */
export class R_Network11_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
  "R6.2": "7",
  "R7.2": "8",
  "R8.2": "9",
  "R9.2": "10",
  "R10.2": "11",
  "R11.2": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", "R6.2": "passive", "R7.2": "passive", "R8.2": "passive", "R9.2": "passive", "R10.2": "passive", "R11.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network11_Split";
  override referencePrefix = "RN";
}

/**
 * 11 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network11_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP12.
 */
export class R_Network11_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
  "R11": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", R11: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network11_US";
  override referencePrefix = "RN";
}

/**
 * 12 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network12`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP13.
 */
export class R_Network12 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
  "R11": "12",
  "R12": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", R11: "passive", R12: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network12";
  override referencePrefix = "RN";
}

/**
 * 12 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network12_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP13.
 */
export class R_Network12_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
  "R6.2": "7",
  "R7.2": "8",
  "R8.2": "9",
  "R9.2": "10",
  "R10.2": "11",
  "R11.2": "12",
  "R12.2": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", "R6.2": "passive", "R7.2": "passive", "R8.2": "passive", "R9.2": "passive", "R10.2": "passive", "R11.2": "passive", "R12.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network12_Split";
  override referencePrefix = "RN";
}

/**
 * 12 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network12_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP13.
 */
export class R_Network12_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
  "R11": "12",
  "R12": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", R11: "passive", R12: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network12_US";
  override referencePrefix = "RN";
}

/**
 * 13 resistor network, star topology, bussed resistors, small symbol
 *
 * KiCad symbol: `Device:R_Network13`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP14.
 */
export class R_Network13 extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
  "R11": "12",
  "R12": "13",
  "R13": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", R11: "passive", R12: "passive", R13: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network13";
  override referencePrefix = "RN";
}

/**
 * 13 resistor network, star topology, bussed resistors, split
 *
 * KiCad symbol: `Device:R_Network13_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP14.
 */
export class R_Network13_Split extends Component.withPins({
  "R1": "1",
  "R1.2": "2",
  "R2.2": "3",
  "R3.2": "4",
  "R4.2": "5",
  "R5.2": "6",
  "R6.2": "7",
  "R7.2": "8",
  "R8.2": "9",
  "R9.2": "10",
  "R10.2": "11",
  "R11.2": "12",
  "R12.2": "13",
  "R13.2": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1: "passive", "R1.2": "passive", "R2.2": "passive", "R3.2": "passive", "R4.2": "passive", "R5.2": "passive", "R6.2": "passive", "R7.2": "passive", "R8.2": "passive", "R9.2": "passive", "R10.2": "passive", "R11.2": "passive", "R12.2": "passive", "R13.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network13_Split";
  override referencePrefix = "RN";
}

/**
 * 13 resistor network, star topology, bussed resistors, small US symbol
 *
 * KiCad symbol: `Device:R_Network13_US`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network star-topology.
 * Default footprint: Resistor_THT:R_Array_SIP14.
 */
export class R_Network13_US extends Component.withPins({
  "common": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
  "R11": "12",
  "R12": "13",
  "R13": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { common: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", R11: "passive", R12: "passive", R13: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network13_US";
  override referencePrefix = "RN";
}

/**
 * 2 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x02_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP4.
 */
export class R_Network_Dividers_x02_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "COM2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x02_SIP";
  override referencePrefix = "RN";
}

/**
 * 3 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x03_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP5.
 */
export class R_Network_Dividers_x03_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "COM2": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x03_SIP";
  override referencePrefix = "RN";
}

/**
 * 4 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x04_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP6.
 */
export class R_Network_Dividers_x04_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "COM2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x04_SIP";
  override referencePrefix = "RN";
}

/**
 * 5 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x05_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP7.
 */
export class R_Network_Dividers_x05_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "COM2": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x05_SIP";
  override referencePrefix = "RN";
}

/**
 * 6 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x06_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP8.
 */
export class R_Network_Dividers_x06_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "COM2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x06_SIP";
  override referencePrefix = "RN";
}

/**
 * 7 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x07_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP9.
 */
export class R_Network_Dividers_x07_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "COM2": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x07_SIP";
  override referencePrefix = "RN";
}

/**
 * 8 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x08_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP10.
 */
export class R_Network_Dividers_x08_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "COM2": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x08_SIP";
  override referencePrefix = "RN";
}

/**
 * 9 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x09_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP11.
 */
export class R_Network_Dividers_x09_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "COM2": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x09_SIP";
  override referencePrefix = "RN";
}

/**
 * 10 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x10_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP12.
 */
export class R_Network_Dividers_x10_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
  "COM2": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x10_SIP";
  override referencePrefix = "RN";
}

/**
 * 11 voltage divider network, dual terminator, SIP package
 *
 * KiCad symbol: `Device:R_Network_Dividers_x11_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network divider topology.
 * Default footprint: Resistor_THT:R_Array_SIP13.
 */
export class R_Network_Dividers_x11_SIP extends Component.withPins({
  "COM1": "1",
  "R1": "2",
  "R2": "3",
  "R3": "4",
  "R4": "5",
  "R5": "6",
  "R6": "7",
  "R7": "8",
  "R8": "9",
  "R9": "10",
  "R10": "11",
  "R11": "12",
  "COM2": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "passive", R1: "passive", R2: "passive", R3: "passive", R4: "passive", R5: "passive", R6: "passive", R7: "passive", R8: "passive", R9: "passive", R10: "passive", R11: "passive", COM2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Network_Dividers_x11_SIP";
  override referencePrefix = "RN";
}

/**
 * 2 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack02`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack02 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R2.2": "3",
  "R1.2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack02";
  override referencePrefix = "RN";
}

/**
 * 2 resistor network, parallel topology, SIP package
 *
 * KiCad symbol: `Device:R_Pack02_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP4.
 */
export class R_Pack02_SIP extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack02_SIP";
  override referencePrefix = "RN";
}

/**
 * 2 resistor network, parallel topology, SIP package, split
 *
 * KiCad symbol: `Device:R_Pack02_SIP_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP4.
 */
export class R_Pack02_SIP_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack02_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 2 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack02_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack02_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "4",
  "R2.1": "2",
  "R2.2": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack02_Split";
  override referencePrefix = "RN";
}

/**
 * 3 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack03`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack03 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R3.2": "4",
  "R2.2": "5",
  "R1.2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack03";
  override referencePrefix = "RN";
}

/**
 * 3 resistor network, parallel topology, SIP package
 *
 * KiCad symbol: `Device:R_Pack03_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP6.
 */
export class R_Pack03_SIP extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack03_SIP";
  override referencePrefix = "RN";
}

/**
 * 3 resistor network, parallel topology, SIP package, split
 *
 * KiCad symbol: `Device:R_Pack03_SIP_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP6.
 */
export class R_Pack03_SIP_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack03_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 3 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack03_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack03_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "6",
  "R2.1": "2",
  "R2.2": "5",
  "R3.1": "3",
  "R3.2": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack03_Split";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack04`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*, MSOP*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack04 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R4.1": "4",
  "R4.2": "5",
  "R3.2": "6",
  "R2.2": "7",
  "R1.2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R4.1": "passive", "R4.2": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack04";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, parallel topology, SIP package
 *
 * KiCad symbol: `Device:R_Pack04_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP8.
 */
export class R_Pack04_SIP extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
  "R4.1": "7",
  "R4.2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack04_SIP";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, parallel topology, SIP package, split
 *
 * KiCad symbol: `Device:R_Pack04_SIP_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP8.
 */
export class R_Pack04_SIP_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
  "R4.1": "7",
  "R4.2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack04_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack04_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*, MSOP*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack04_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "8",
  "R2.1": "2",
  "R2.2": "7",
  "R3.1": "3",
  "R3.2": "6",
  "R4.1": "4",
  "R4.2": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack04_Split";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack05`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack05 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R4.1": "4",
  "R5.1": "5",
  "R5.2": "6",
  "R4.2": "7",
  "R3.2": "8",
  "R2.2": "9",
  "R1.2": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R4.1": "passive", "R5.1": "passive", "R5.2": "passive", "R4.2": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack05";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, parallel topology, SIP package
 *
 * KiCad symbol: `Device:R_Pack05_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP10.
 */
export class R_Pack05_SIP extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
  "R4.1": "7",
  "R4.2": "8",
  "R5.1": "9",
  "R5.2": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack05_SIP";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, parallel topology, SIP package, split
 *
 * KiCad symbol: `Device:R_Pack05_SIP_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP10.
 */
export class R_Pack05_SIP_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
  "R4.1": "7",
  "R4.2": "8",
  "R5.1": "9",
  "R5.2": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack05_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack05_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack05_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "10",
  "R2.1": "2",
  "R2.2": "9",
  "R3.1": "3",
  "R3.2": "8",
  "R4.1": "4",
  "R4.2": "7",
  "R5.1": "5",
  "R5.2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack05_Split";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack06`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack06 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R4.1": "4",
  "R5.1": "5",
  "R6.1": "6",
  "R6.2": "7",
  "R5.2": "8",
  "R4.2": "9",
  "R3.2": "10",
  "R2.2": "11",
  "R1.2": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R4.1": "passive", "R5.1": "passive", "R6.1": "passive", "R6.2": "passive", "R5.2": "passive", "R4.2": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack06";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, parallel topology, SIP package
 *
 * KiCad symbol: `Device:R_Pack06_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP12.
 */
export class R_Pack06_SIP extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
  "R4.1": "7",
  "R4.2": "8",
  "R5.1": "9",
  "R5.2": "10",
  "R6.1": "11",
  "R6.2": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack06_SIP";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, parallel topology, SIP package, split
 *
 * KiCad symbol: `Device:R_Pack06_SIP_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP12.
 */
export class R_Pack06_SIP_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
  "R4.1": "7",
  "R4.2": "8",
  "R5.1": "9",
  "R5.2": "10",
  "R6.1": "11",
  "R6.2": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack06_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack06_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack06_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "12",
  "R2.1": "2",
  "R2.2": "11",
  "R3.1": "3",
  "R3.2": "10",
  "R4.1": "4",
  "R4.2": "9",
  "R5.1": "5",
  "R5.2": "8",
  "R6.1": "6",
  "R6.2": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack06_Split";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack07`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack07 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R4.1": "4",
  "R5.1": "5",
  "R6.1": "6",
  "R7.1": "7",
  "R7.2": "8",
  "R6.2": "9",
  "R5.2": "10",
  "R4.2": "11",
  "R3.2": "12",
  "R2.2": "13",
  "R1.2": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R4.1": "passive", "R5.1": "passive", "R6.1": "passive", "R7.1": "passive", "R7.2": "passive", "R6.2": "passive", "R5.2": "passive", "R4.2": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack07";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, parallel topology, SIP package
 *
 * KiCad symbol: `Device:R_Pack07_SIP`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP14.
 */
export class R_Pack07_SIP extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
  "R4.1": "7",
  "R4.2": "8",
  "R5.1": "9",
  "R5.2": "10",
  "R6.1": "11",
  "R6.2": "12",
  "R7.1": "13",
  "R7.2": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", "R7.1": "passive", "R7.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack07_SIP";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, parallel topology, SIP package, split
 *
 * KiCad symbol: `Device:R_Pack07_SIP_Split`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*.
 * @see http://www.vishay.com/docs/31509/csc.pdf
 * Keywords: R network parallel topology isolated.
 * Default footprint: Resistor_THT:R_Array_SIP14.
 */
export class R_Pack07_SIP_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "2",
  "R2.1": "3",
  "R2.2": "4",
  "R3.1": "5",
  "R3.2": "6",
  "R4.1": "7",
  "R4.2": "8",
  "R5.1": "9",
  "R5.2": "10",
  "R6.1": "11",
  "R6.2": "12",
  "R7.1": "13",
  "R7.2": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", "R7.1": "passive", "R7.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack07_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack07_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack07_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "14",
  "R2.1": "2",
  "R2.2": "13",
  "R3.1": "3",
  "R3.2": "12",
  "R4.1": "4",
  "R4.2": "11",
  "R5.1": "5",
  "R5.2": "10",
  "R6.1": "6",
  "R6.2": "9",
  "R7.1": "7",
  "R7.2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", "R7.1": "passive", "R7.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack07_Split";
  override referencePrefix = "RN";
}

/**
 * 8 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack08`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack08 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R4.1": "4",
  "R5.1": "5",
  "R6.1": "6",
  "R7.1": "7",
  "R8.1": "8",
  "R8.2": "9",
  "R7.2": "10",
  "R6.2": "11",
  "R5.2": "12",
  "R4.2": "13",
  "R3.2": "14",
  "R2.2": "15",
  "R1.2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R4.1": "passive", "R5.1": "passive", "R6.1": "passive", "R7.1": "passive", "R8.1": "passive", "R8.2": "passive", "R7.2": "passive", "R6.2": "passive", "R5.2": "passive", "R4.2": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack08";
  override referencePrefix = "RN";
}

/**
 * 8 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack08_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack08_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "16",
  "R2.1": "2",
  "R2.2": "15",
  "R3.1": "3",
  "R3.2": "14",
  "R4.1": "4",
  "R4.2": "13",
  "R5.1": "5",
  "R5.2": "12",
  "R6.1": "6",
  "R6.2": "11",
  "R7.1": "7",
  "R7.2": "10",
  "R8.1": "8",
  "R8.2": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", "R7.1": "passive", "R7.2": "passive", "R8.1": "passive", "R8.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack08_Split";
  override referencePrefix = "RN";
}

/**
 * 9 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack09`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack09 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R4.1": "4",
  "R5.1": "5",
  "R6.1": "6",
  "R7.1": "7",
  "R8.1": "8",
  "R9.1": "9",
  "R9.2": "10",
  "R8.2": "11",
  "R7.2": "12",
  "R6.2": "13",
  "R5.2": "14",
  "R4.2": "15",
  "R3.2": "16",
  "R2.2": "17",
  "R1.2": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R4.1": "passive", "R5.1": "passive", "R6.1": "passive", "R7.1": "passive", "R8.1": "passive", "R9.1": "passive", "R9.2": "passive", "R8.2": "passive", "R7.2": "passive", "R6.2": "passive", "R5.2": "passive", "R4.2": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack09";
  override referencePrefix = "RN";
}

/**
 * 9 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack09_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack09_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "18",
  "R2.1": "2",
  "R2.2": "17",
  "R3.1": "3",
  "R3.2": "16",
  "R4.1": "4",
  "R4.2": "15",
  "R5.1": "5",
  "R5.2": "14",
  "R6.1": "6",
  "R6.2": "13",
  "R7.1": "7",
  "R7.2": "12",
  "R8.1": "8",
  "R8.2": "11",
  "R9.1": "9",
  "R9.2": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", "R7.1": "passive", "R7.2": "passive", "R8.1": "passive", "R8.2": "passive", "R9.1": "passive", "R9.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack09_Split";
  override referencePrefix = "RN";
}

/**
 * 10 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack10`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack10 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R4.1": "4",
  "R5.1": "5",
  "R6.1": "6",
  "R7.1": "7",
  "R8.1": "8",
  "R9.1": "9",
  "R10.1": "10",
  "R10.2": "11",
  "R9.2": "12",
  "R8.2": "13",
  "R7.2": "14",
  "R6.2": "15",
  "R5.2": "16",
  "R4.2": "17",
  "R3.2": "18",
  "R2.2": "19",
  "R1.2": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R4.1": "passive", "R5.1": "passive", "R6.1": "passive", "R7.1": "passive", "R8.1": "passive", "R9.1": "passive", "R10.1": "passive", "R10.2": "passive", "R9.2": "passive", "R8.2": "passive", "R7.2": "passive", "R6.2": "passive", "R5.2": "passive", "R4.2": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack10";
  override referencePrefix = "RN";
}

/**
 * 10 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack10_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack10_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "20",
  "R2.1": "2",
  "R2.2": "19",
  "R3.1": "3",
  "R3.2": "18",
  "R4.1": "4",
  "R4.2": "17",
  "R5.1": "5",
  "R5.2": "16",
  "R6.1": "6",
  "R6.2": "15",
  "R7.1": "7",
  "R7.2": "14",
  "R8.1": "8",
  "R8.2": "13",
  "R9.1": "9",
  "R9.2": "12",
  "R10.1": "10",
  "R10.2": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", "R7.1": "passive", "R7.2": "passive", "R8.1": "passive", "R8.2": "passive", "R9.1": "passive", "R9.2": "passive", "R10.1": "passive", "R10.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack10_Split";
  override referencePrefix = "RN";
}

/**
 * 11 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack11`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack11 extends Component.withPins({
  "R1.1": "1",
  "R2.1": "2",
  "R3.1": "3",
  "R4.1": "4",
  "R5.1": "5",
  "R6.1": "6",
  "R7.1": "7",
  "R8.1": "8",
  "R9.1": "9",
  "R10.1": "10",
  "R11.1": "11",
  "R11.2": "12",
  "R10.2": "13",
  "R9.2": "14",
  "R8.2": "15",
  "R7.2": "16",
  "R6.2": "17",
  "R5.2": "18",
  "R4.2": "19",
  "R3.2": "20",
  "R2.2": "21",
  "R1.2": "22",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R2.1": "passive", "R3.1": "passive", "R4.1": "passive", "R5.1": "passive", "R6.1": "passive", "R7.1": "passive", "R8.1": "passive", "R9.1": "passive", "R10.1": "passive", "R11.1": "passive", "R11.2": "passive", "R10.2": "passive", "R9.2": "passive", "R8.2": "passive", "R7.2": "passive", "R6.2": "passive", "R5.2": "passive", "R4.2": "passive", "R3.2": "passive", "R2.2": "passive", "R1.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack11";
  override referencePrefix = "RN";
}

/**
 * 11 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack11_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 */
export class R_Pack11_Split extends Component.withPins({
  "R1.1": "1",
  "R1.2": "22",
  "R2.1": "2",
  "R2.2": "21",
  "R3.1": "3",
  "R3.2": "20",
  "R4.1": "4",
  "R4.2": "19",
  "R5.1": "5",
  "R5.2": "18",
  "R6.1": "6",
  "R6.2": "17",
  "R7.1": "7",
  "R7.2": "16",
  "R8.1": "8",
  "R8.2": "15",
  "R9.1": "9",
  "R9.2": "14",
  "R10.1": "10",
  "R10.2": "13",
  "R11.1": "11",
  "R11.2": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R1.1": "passive", "R1.2": "passive", "R2.1": "passive", "R2.2": "passive", "R3.1": "passive", "R3.2": "passive", "R4.1": "passive", "R4.2": "passive", "R5.1": "passive", "R5.2": "passive", "R6.1": "passive", "R6.2": "passive", "R7.1": "passive", "R7.2": "passive", "R8.1": "passive", "R8.2": "passive", "R9.1": "passive", "R9.2": "passive", "R10.1": "passive", "R10.2": "passive", "R11.1": "passive", "R11.2": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Pack11_Split";
  override referencePrefix = "RN";
}

/**
 * Photoresistor
 *
 * KiCad symbol: `Device:R_Photo`. Reference prefix: `R`.
 * Footprint filters: *LDR*, R?LDR*.
 * Keywords: resistor variable light sensitive opto LDR.
 */
export class R_Photo extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Photo";
  override referencePrefix = "R";
}

/**
 * Potentiometer
 *
 * KiCad symbol: `Device:R_Potentiometer`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 */
export class R_Potentiometer extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer";
  override referencePrefix = "RV";
}

/**
 * Dual potentiometer
 *
 * KiCad symbol: `Device:R_Potentiometer_Dual`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 */
export class R_Potentiometer_Dual extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer_Dual";
  override referencePrefix = "RV";
}

/**
 * Dual potentiometer with a mounting pin
 *
 * KiCad symbol: `Device:R_Potentiometer_Dual_MountingPin`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 */
export class R_Potentiometer_Dual_MountingPin extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "MountPin": "MP",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", MountPin: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer_Dual_MountingPin";
  override referencePrefix = "RV";
}

/**
 * Dual potentiometer, separate units
 *
 * KiCad symbol: `Device:R_Potentiometer_Dual_Separate`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 */
export class R_Potentiometer_Dual_Separate extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer_Dual_Separate";
  override referencePrefix = "RV";
}

/**
 * Potentiometer with a mounting pin
 *
 * KiCad symbol: `Device:R_Potentiometer_MountingPin`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 */
export class R_Potentiometer_MountingPin extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "MountPin": "MP",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", MountPin: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer_MountingPin";
  override referencePrefix = "RV";
}

/**
 * Potentiometer
 *
 * KiCad symbol: `Device:R_Potentiometer_Small`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 */
export class R_Potentiometer_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer_Small";
  override referencePrefix = "RV";
}

/**
 * Trim-potentiometer
 *
 * KiCad symbol: `Device:R_Potentiometer_Trim`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable trimpot trimmer.
 */
export class R_Potentiometer_Trim extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer_Trim";
  override referencePrefix = "RV";
}

/**
 * Trim-potentiometer, US symbol
 *
 * KiCad symbol: `Device:R_Potentiometer_Trim_US`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable trimpot trimmer.
 */
export class R_Potentiometer_Trim_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer_Trim_US";
  override referencePrefix = "RV";
}

/**
 * Potentiometer, US symbol
 *
 * KiCad symbol: `Device:R_Potentiometer_US`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 */
export class R_Potentiometer_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Potentiometer_US";
  override referencePrefix = "RV";
}

/**
 * Shunt resistor with Kelvin connections
 *
 * KiCad symbol: `Device:R_Shunt`. Reference prefix: `R`.
 * Footprint filters: R_*Shunt*.
 * Keywords: R res shunt resistor.
 */
export class R_Shunt extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Shunt";
  override referencePrefix = "R";
}

/**
 * Shunt resistor with Kelvin connections, US symbol
 *
 * KiCad symbol: `Device:R_Shunt_US`. Reference prefix: `R`.
 * Footprint filters: R_*Shunt*.
 * Keywords: R res shunt resistor.
 */
export class R_Shunt_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Shunt_US";
  override referencePrefix = "R";
}

/**
 * Resistor, small symbol
 *
 * KiCad symbol: `Device:R_Small`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R resistor.
 */
export class R_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Small";
  override referencePrefix = "R";
}

/**
 * Resistor, small US symbol
 *
 * KiCad symbol: `Device:R_Small_US`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: r resistor.
 */
export class R_Small_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Small_US";
  override referencePrefix = "R";
}

/**
 * Trimmable resistor (preset resistor)
 *
 * KiCad symbol: `Device:R_Trim`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor variable potentiometer trimmer.
 */
export class R_Trim extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Trim";
  override referencePrefix = "R";
}

/**
 * Resistor, US symbol
 *
 * KiCad symbol: `Device:R_US`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor.
 */
export class R_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_US";
  override referencePrefix = "R";
}

/**
 * Variable resistor
 *
 * KiCad symbol: `Device:R_Variable`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor variable potentiometer rheostat.
 */
export class R_Variable extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Variable";
  override referencePrefix = "R";
}

/**
 * Variable resistor, US symbol
 *
 * KiCad symbol: `Device:R_Variable_US`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor variable potentiometer rheostat.
 */
export class R_Variable_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:R_Variable_US";
  override referencePrefix = "R";
}

/**
 * Three pin ceramic resonator
 *
 * KiCad symbol: `Device:Resonator`. Reference prefix: `Y`.
 * Footprint filters: Filter*, Resonator*.
 * Keywords: ceramic resonator.
 */
export class Resonator extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Resonator";
  override referencePrefix = "Y";
}

/**
 * Three pin ceramic resonator, small symbol
 *
 * KiCad symbol: `Device:Resonator_Small`. Reference prefix: `Y`.
 * Footprint filters: Filter*, Resonator*.
 * Keywords: ceramic resonator.
 */
export class Resonator_Small extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Resonator_Small";
  override referencePrefix = "Y";
}

/**
 * Rotary encoder, dual channel, incremental quadrate outputs
 *
 * KiCad symbol: `Device:RotaryEncoder`. Reference prefix: `SW`.
 * Footprint filters: RotaryEncoder*.
 * Keywords: rotary switch encoder.
 */
export class RotaryEncoder extends Component.withPins({
  "PA": "A",
  "PB": "B",
  "PC": "C",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA: "passive", PB: "passive", PC: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:RotaryEncoder";
  override referencePrefix = "SW";
}

/**
 * Rotary encoder, dual channel, incremental quadrate outputs, with switch
 *
 * KiCad symbol: `Device:RotaryEncoder_Switch`. Reference prefix: `SW`.
 * Footprint filters: RotaryEncoder*Switch*.
 * Keywords: rotary switch encoder switch push button.
 */
export class RotaryEncoder_Switch extends Component.withPins({
  "PA": "A",
  "PB": "B",
  "PC": "C",
  "PS1": "S1",
  "PS2": "S2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA: "passive", PB: "passive", PC: "passive", PS1: "passive", PS2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:RotaryEncoder_Switch";
  override referencePrefix = "SW";
}

/**
 * Rotary encoder, dual channel, incremental quadrate outputs, with switch and MP Pin
 *
 * KiCad symbol: `Device:RotaryEncoder_Switch_MP`. Reference prefix: `SW`.
 * Footprint filters: RotaryEncoder*Switch*.
 * Keywords: rotary switch encoder switch push button.
 */
export class RotaryEncoder_Switch_MP extends Component.withPins({
  "PA": "A",
  "PB": "B",
  "PC": "C",
  "PMP": "MP",
  "PS1": "S1",
  "PS2": "S2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA: "passive", PB: "passive", PC: "passive", PMP: "passive", PS1: "passive", PS2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:RotaryEncoder_Switch_MP";
  override referencePrefix = "SW";
}

/**
 * Single solar cell
 *
 * KiCad symbol: `Device:Solar_Cell`. Reference prefix: `SC`.
 * Keywords: solar cell.
 */
export class Solar_Cell extends Component.withPins({
  "+": "1",
  "-": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Solar_Cell";
  override referencePrefix = "SC";
}

/**
 * Multiple solar cells
 *
 * KiCad symbol: `Device:Solar_Cells`. Reference prefix: `SC`.
 * Keywords: solar cell.
 */
export class Solar_Cells extends Component.withPins({
  "+": "1",
  "-": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Solar_Cells";
  override referencePrefix = "SC";
}

/**
 * Spark gap
 *
 * KiCad symbol: `Device:SparkGap`. Reference prefix: `E`.
 * Footprint filters: SG*.
 * Keywords: spark gap ESD electrostatic suppression.
 */
export class SparkGap extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:SparkGap";
  override referencePrefix = "E";
}

/**
 * Speaker
 *
 * KiCad symbol: `Device:Speaker`. Reference prefix: `LS`.
 * Keywords: speaker sound.
 */
export class Speaker extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Speaker";
  override referencePrefix = "LS";
}

/**
 * Crystal speaker/transducer
 *
 * KiCad symbol: `Device:Speaker_Crystal`. Reference prefix: `LS`.
 * Keywords: crystal speaker ultrasonic transducer.
 */
export class Speaker_Crystal extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Speaker_Crystal";
  override referencePrefix = "LS";
}

/**
 * Ultrasonic transducer
 *
 * KiCad symbol: `Device:Speaker_Ultrasound`. Reference prefix: `LS`.
 * Keywords: crystal speaker ultrasonic transducer.
 */
export class Speaker_Ultrasound extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", ...opts.pinTypes } });
  }
  override schema = "Device:Speaker_Ultrasound";
  override referencePrefix = "LS";
}

/**
 * Thermal Bridge/Jumper
 *
 * KiCad symbol: `Device:Thermal_Jumper`. Reference prefix: `TJ`.
 * Footprint filters: C_*.
 * @see https://datasheets.kyocera-avx.com/Q-Bridge-Thermal-Conductor.pdf
 * Keywords: heat dissipation q-bridge.
 */
export class Thermal_Jumper extends Component.withPins({
  "Pin1": "1",
  "Pin2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Pin1: "passive", Pin2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermal_Jumper";
  override referencePrefix = "TJ";
}

/**
 * Temperature dependent resistor
 *
 * KiCad symbol: `Device:Thermistor`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: R res thermistor.
 */
export class Thermistor extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, negative temperature coefficient
 *
 * KiCad symbol: `Device:Thermistor_NTC`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: thermistor NTC resistor sensor RTD.
 */
export class Thermistor_NTC extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_NTC";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, negative temperature coefficient, 3-wire interface
 *
 * KiCad symbol: `Device:Thermistor_NTC_3Wire`. Reference prefix: `TH`.
 * Keywords: thermistor NTC resistor sensor RTD.
 */
export class Thermistor_NTC_3Wire extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_NTC_3Wire";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, negative temperature coefficient, 4-wire interface
 *
 * KiCad symbol: `Device:Thermistor_NTC_4Wire`. Reference prefix: `TH`.
 * Keywords: thermistor NTC resistor sensor RTD.
 */
export class Thermistor_NTC_4Wire extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_NTC_4Wire";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, negative temperature coefficient, US symbol
 *
 * KiCad symbol: `Device:Thermistor_NTC_US`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: thermistor NTC resistor sensor RTD.
 */
export class Thermistor_NTC_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_NTC_US";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, positive temperature coefficient
 *
 * KiCad symbol: `Device:Thermistor_PTC`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: resistor PTC thermistor sensor RTD.
 */
export class Thermistor_PTC extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_PTC";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, positive temperature coefficient, 3-wire interface
 *
 * KiCad symbol: `Device:Thermistor_PTC_3Wire`. Reference prefix: `TH`.
 * Keywords: resistor PTC thermistor sensor RTD.
 */
export class Thermistor_PTC_3Wire extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_PTC_3Wire";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, positive temperature coefficient, 4-wire interface
 *
 * KiCad symbol: `Device:Thermistor_PTC_4Wire`. Reference prefix: `TH`.
 * Keywords: resistor PTC thermistor sensor RTD.
 */
export class Thermistor_PTC_4Wire extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_PTC_4Wire";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, positive temperature coefficient, US symbol
 *
 * KiCad symbol: `Device:Thermistor_PTC_US`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: resistor PTC thermistor sensor RTD.
 */
export class Thermistor_PTC_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_PTC_US";
  override referencePrefix = "TH";
}

/**
 * Thermistor, temperature dependent resistor, US symbol
 *
 * KiCad symbol: `Device:Thermistor_US`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: R res thermistor.
 */
export class Thermistor_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermistor_US";
  override referencePrefix = "TH";
}

/**
 * Thermocouple
 *
 * KiCad symbol: `Device:Thermocouple`. Reference prefix: `TC`.
 * Footprint filters: PIN?ARRAY*, bornier*, *Terminal?Block*, Thermo*Couple*.
 * Keywords: thermocouple temperature sensor cold junction.
 */
export class Thermocouple extends Component.withPins({
  "+": "1",
  "-": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermocouple";
  override referencePrefix = "TC";
}

/**
 * Thermocouple with connector block
 *
 * KiCad symbol: `Device:Thermocouple_Alt`. Reference prefix: `TC`.
 * Footprint filters: PIN?ARRAY*, bornier*, *Terminal?Block*, Thermo*Couple*.
 * Keywords: thermocouple temperature sensor cold junction.
 */
export class Thermocouple_Alt extends Component.withPins({
  "+": "1",
  "-": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermocouple_Alt";
  override referencePrefix = "TC";
}

/**
 * Thermocouple with isothermal block
 *
 * KiCad symbol: `Device:Thermocouple_Block`. Reference prefix: `TC`.
 * Footprint filters: PIN?ARRAY*, bornier*, *Terminal?Block*, Thermo*Couple*.
 * Keywords: thermocouple temperature sensor cold junction.
 */
export class Thermocouple_Block extends Component.withPins({
  "+": "1",
  "-": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "passive", "-": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Thermocouple_Block";
  override referencePrefix = "TC";
}

/**
 * Transformer, single primary, single secondary
 *
 * KiCad symbol: `Device:Transformer_1P_1S`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 */
export class Transformer_1P_1S extends Component.withPins({
  "AA": "1",
  "AB": "2",
  "SA": "3",
  "SB": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AA: "passive", AB: "passive", SA: "passive", SB: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Transformer_1P_1S";
  override referencePrefix = "T";
}

/**
 * Transformer, single primary, single secondary, SO-8 package
 *
 * KiCad symbol: `Device:Transformer_1P_1S_SO8`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 */
export class Transformer_1P_1S_SO8 extends Component.withPins({
  "AA": "1",
  "AB": "4",
  "SA": "5",
  "SB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AA: "passive", AB: "passive", SA: "passive", SB: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Transformer_1P_1S_SO8";
  override referencePrefix = "T";
}

/**
 * Transformer, single primary, dual secondary
 *
 * KiCad symbol: `Device:Transformer_1P_2S`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 */
export class Transformer_1P_2S extends Component.withPins({
  "AA": "1",
  "AB": "2",
  "SA": "3",
  "SB": "4",
  "SC": "5",
  "SD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AA: "passive", AB: "passive", SA: "passive", SB: "passive", SC: "passive", SD: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Transformer_1P_2S";
  override referencePrefix = "T";
}

/**
 * Transformer, single primary, split secondary
 *
 * KiCad symbol: `Device:Transformer_1P_SS`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 */
export class Transformer_1P_SS extends Component.withPins({
  "AA": "1",
  "AB": "2",
  "SA": "3",
  "SC": "4",
  "SB": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AA: "passive", AB: "passive", SA: "passive", SC: "passive", SB: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Transformer_1P_SS";
  override referencePrefix = "T";
}

/**
 * Audio transformer
 *
 * KiCad symbol: `Device:Transformer_Audio`. Reference prefix: `T`.
 * Keywords: transformer coil magnet sound.
 */
export class Transformer_Audio extends Component.withPins({
  "P0": "0",
  "AA": "1",
  "AB": "2",
  "SA": "3",
  "SB": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P0: "input", AA: "passive", AB: "passive", SA: "passive", SB: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Transformer_Audio";
  override referencePrefix = "T";
}

/**
 * Transformer, split primary, single secondary
 *
 * KiCad symbol: `Device:Transformer_SP_1S`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 */
export class Transformer_SP_1S extends Component.withPins({
  "PR1": "1",
  "PM": "2",
  "PR2": "3",
  "S1": "4",
  "S2": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PR1: "passive", PM: "passive", PR2: "passive", S1: "passive", S2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Transformer_SP_1S";
  override referencePrefix = "T";
}

/**
 * Transformer, split primary, dual secondary
 *
 * KiCad symbol: `Device:Transformer_SP_2S`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 */
export class Transformer_SP_2S extends Component.withPins({
  "IN+": "1",
  "PM": "2",
  "IN-": "3",
  "OUT1A": "4",
  "OUT1B": "5",
  "OUT2A": "6",
  "OUT2B": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "IN+": "passive", PM: "passive", "IN-": "passive", OUT1A: "passive", OUT1B: "passive", OUT2A: "passive", OUT2B: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Transformer_SP_2S";
  override referencePrefix = "T";
}

/**
 * Voltage dependent resistor
 *
 * KiCad symbol: `Device:Varistor`. Reference prefix: `RV`.
 * Footprint filters: RV_*, Varistor*.
 * Keywords: VDR resistance.
 */
export class Varistor extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Varistor";
  override referencePrefix = "RV";
}

/**
 * Voltage dependent resistor, US symbol
 *
 * KiCad symbol: `Device:Varistor_US`. Reference prefix: `RV`.
 * Footprint filters: RV_*, Varistor*.
 * Keywords: VDR resistance.
 */
export class Varistor_US extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Varistor_US";
  override referencePrefix = "RV";
}

/**
 * Voltage divider
 *
 * KiCad symbol: `Device:VoltageDivider`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*, SOT?23.
 * Keywords: R network voltage divider.
 */
export class VoltageDivider extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:VoltageDivider";
  override referencePrefix = "RN";
}

/**
 * Voltage divider, center on pin 1
 *
 * KiCad symbol: `Device:VoltageDivider_CenterPin1`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*, SOT?23.
 * Keywords: R network voltage divider.
 */
export class VoltageDivider_CenterPin1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:VoltageDivider_CenterPin1";
  override referencePrefix = "RN";
}

/**
 * Voltage divider, center on pin 3
 *
 * KiCad symbol: `Device:VoltageDivider_CenterPin3`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*, SOT?23.
 * Keywords: R network voltage divider.
 */
export class VoltageDivider_CenterPin3 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:VoltageDivider_CenterPin3";
  override referencePrefix = "RN";
}

/**
 * AC voltmeter
 *
 * KiCad symbol: `Device:Voltmeter_AC`. Reference prefix: `MES`.
 * Keywords: voltmeter AC.
 */
export class Voltmeter_AC extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Voltmeter_AC";
  override referencePrefix = "MES";
}

/**
 * DC voltmeter
 *
 * KiCad symbol: `Device:Voltmeter_DC`. Reference prefix: `MES`.
 * Keywords: voltmeter DC.
 */
export class Voltmeter_DC extends Component.withPins({
  "-": "1",
  "+": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "passive", "+": "passive", ...opts.pinTypes } });
  }
  override schema = "Device:Voltmeter_DC";
  override referencePrefix = "MES";
}

export const c = (...args: ConstructorParameters<typeof C>) => new C(...args);
export const r = (...args: ConstructorParameters<typeof R>) => new R(...args);
