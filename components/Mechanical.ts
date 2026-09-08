// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * DIN Rail adapter universal, mounting holes without connection
 *
 * KiCad symbol: `Mechanical:DIN_Rail_Adapter`. Reference prefix: `DRA`.
 * Footprint filters: DINRailAdapter?3xM3*, DINRailAdapter?2xM3*.
 * Keywords: Mounting holes, DIN rail adapter.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DIN_Rail_Adapter extends Component.withPins({
}) {
  override schema = "Mechanical:DIN_Rail_Adapter";
  override referencePrefix = "DRA";
}

/**
 * Fiducial Marker
 *
 * KiCad symbol: `Mechanical:Fiducial`. Reference prefix: `FID`.
 * Footprint filters: Fiducial*.
 * Keywords: fiducial marker.
 * Units: 0.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class Fiducial extends Component.withPins({
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Heatsink extends Component.withPins({
}) {
  override schema = "Mechanical:Heatsink";
  override referencePrefix = "HS";
}

/**
 * Heatsink with electrical connection, 1 pin
 *
 * KiCad symbol: `Mechanical:Heatsink_Pad`. Reference prefix: `HS`.
 * Footprint filters: Heatsink_*.
 * Keywords: thermal heat temperature.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Heatsink_Pad extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
}) {
  override schema = "Mechanical:Heatsink_Pad";
  override referencePrefix = "HS";
}

/**
 * Heatsink with electrical connection, 2 pin
 *
 * KiCad symbol: `Mechanical:Heatsink_Pad_2Pin`. Reference prefix: `HS`.
 * Footprint filters: Heatsink_*.
 * Keywords: thermal heat temperature.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Heatsink_Pad_2Pin extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Mechanical:Heatsink_Pad_2Pin";
  override referencePrefix = "HS";
}

/**
 * Heatsink with electrical connection, 3 pin
 *
 * KiCad symbol: `Mechanical:Heatsink_Pad_3Pin`. Reference prefix: `HS`.
 * Footprint filters: Heatsink_*.
 * Keywords: thermal heat temperature.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Heatsink_Pad_3Pin extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Mechanical:Heatsink_Pad_3Pin";
  override referencePrefix = "HS";
}

/**
 * Housing
 *
 * KiCad symbol: `Mechanical:Housing`. Reference prefix: `N`.
 * Footprint filters: Enclosure*, Housing*.
 * Keywords: housing enclosure.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Housing extends Component.withPins({
}) {
  override schema = "Mechanical:Housing";
  override referencePrefix = "N";
}

/**
 * Housing with connection pin
 *
 * KiCad symbol: `Mechanical:Housing_Pad`. Reference prefix: `N`.
 * Keywords: housing enclosure shield.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Housing_Pad extends Component.withPins({
  /** Physical pin 1: PAD; input. */
  "PAD": "1",
}) {
  override schema = "Mechanical:Housing_Pad";
  override referencePrefix = "N";
}

/**
 * Mechanical shape, non-electric, board outlines
 *
 * KiCad symbol: `Mechanical:Mechanical_Shape`. Reference prefix: `S`.
 * Footprint filters: *Shape*, *Outline*.
 * Keywords: Mechanical Shape Outline.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class Mechanical_Shape extends Component.withPins({
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 0.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class MountingHole extends Component.withPins({
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class MountingHole_Pad extends Component.withPins({
  /** Physical pin 1: 1; input. */
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class MountingHole_Pad_MP extends Component.withPins({
  /** Physical pin MP: MP; input. */
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class MouseBite extends Component.withPins({
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Mechanical:MouseBite";
  override referencePrefix = "B";
}

