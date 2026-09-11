// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * DIN Rail adapter universal, mounting holes without connection
 *
 * KiCad symbol: `Mechanical:DIN_Rail_Adapter`. Reference prefix: `DRA`.
 * Footprint filters: DINRailAdapter?3xM3*, DINRailAdapter?2xM3*.
 * Keywords: Mounting holes, DIN rail adapter.
 */
export class DIN_Rail_Adapter extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes } });
  }
  override schema = "Mechanical:DIN_Rail_Adapter";
  override referencePrefix = "DRA";
}

/**
 * Fiducial Marker
 *
 * KiCad symbol: `Mechanical:Fiducial`. Reference prefix: `FID`.
 * Footprint filters: Fiducial*.
 * Keywords: fiducial marker.
 */
export class Fiducial extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Mechanical:Fiducial";
  override referencePrefix = "FID";
}

/**
 * Heatsink
 *
 * KiCad symbol: `Mechanical:Heatsink`. Reference prefix: `HS`.
 * Footprint filters: Heatsink_*.
 * Keywords: thermal heat temperature.
 */
export class Heatsink extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes } });
  }
  override schema = "Mechanical:Heatsink";
  override referencePrefix = "HS";
}

/**
 * Heatsink with electrical connection, 1 pin
 *
 * KiCad symbol: `Mechanical:Heatsink_Pad`. Reference prefix: `HS`.
 * Footprint filters: Heatsink_*.
 * Keywords: thermal heat temperature.
 */
export class Heatsink_Pad extends Component.withPins({
  "P1": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", ...opts.pinTypes } });
  }
  override schema = "Mechanical:Heatsink_Pad";
  override referencePrefix = "HS";
}

/**
 * Heatsink with electrical connection, 2 pin
 *
 * KiCad symbol: `Mechanical:Heatsink_Pad_2Pin`. Reference prefix: `HS`.
 * Footprint filters: Heatsink_*.
 * Keywords: thermal heat temperature.
 */
export class Heatsink_Pad_2Pin extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Mechanical:Heatsink_Pad_2Pin";
  override referencePrefix = "HS";
}

/**
 * Heatsink with electrical connection, 3 pin
 *
 * KiCad symbol: `Mechanical:Heatsink_Pad_3Pin`. Reference prefix: `HS`.
 * Footprint filters: Heatsink_*.
 * Keywords: thermal heat temperature.
 */
export class Heatsink_Pad_3Pin extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Mechanical:Heatsink_Pad_3Pin";
  override referencePrefix = "HS";
}

/**
 * Housing
 *
 * KiCad symbol: `Mechanical:Housing`. Reference prefix: `N`.
 * Footprint filters: Enclosure*, Housing*.
 * Keywords: housing enclosure.
 */
export class Housing extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes } });
  }
  override schema = "Mechanical:Housing";
  override referencePrefix = "N";
}

/**
 * Housing with connection pin
 *
 * KiCad symbol: `Mechanical:Housing_Pad`. Reference prefix: `N`.
 * Keywords: housing enclosure shield.
 */
export class Housing_Pad extends Component.withPins({
  "PAD": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "input", ...opts.pinTypes } });
  }
  override schema = "Mechanical:Housing_Pad";
  override referencePrefix = "N";
}

/**
 * Mechanical shape, non-electric, board outlines
 *
 * KiCad symbol: `Mechanical:Mechanical_Shape`. Reference prefix: `S`.
 * Footprint filters: *Shape*, *Outline*.
 * Keywords: Mechanical Shape Outline.
 */
export class Mechanical_Shape extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Mechanical:Mechanical_Shape";
  override referencePrefix = "S";
}

/**
 * Mounting Hole without connection
 *
 * KiCad symbol: `Mechanical:MountingHole`. Reference prefix: `H`.
 * Footprint filters: MountingHole*.
 * Keywords: mounting hole.
 */
export class MountingHole extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Mechanical:MountingHole";
  override referencePrefix = "H";
}

/**
 * Mounting Hole with connection
 *
 * KiCad symbol: `Mechanical:MountingHole_Pad`. Reference prefix: `H`.
 * Footprint filters: MountingHole*Pad*.
 * Keywords: mounting hole.
 */
export class MountingHole_Pad extends Component.withPins({
  "P1": "1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Mechanical:MountingHole_Pad";
  override referencePrefix = "H";
}

/**
 * Mounting Hole with connection as pad named MP
 *
 * KiCad symbol: `Mechanical:MountingHole_Pad_MP`. Reference prefix: `H`.
 * Footprint filters: MountingHole*Pad*.
 * Keywords: mounting hole.
 */
export class MountingHole_Pad_MP extends Component.withPins({
  "PMP": "MP",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PMP: "input", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Mechanical:MountingHole_Pad_MP";
  override referencePrefix = "H";
}

/**
 * Mouse bites, break lines
 *
 * KiCad symbol: `Mechanical:MouseBite`. Reference prefix: `B`.
 * Footprint filters: MouseBite*, BreakLine*.
 * Keywords: mouse break line.
 */
export class MouseBite extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Mechanical:MouseBite";
  override referencePrefix = "B";
}
