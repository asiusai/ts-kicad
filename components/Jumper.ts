// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Jumper, 2-pole, closed/bridged
 *
 * KiCad symbol: `Jumper:Jumper_2_Bridged`. Reference prefix: `JP`.
 * Footprint filters: Jumper*, TestPoint*2Pads*, TestPoint*Bridge*.
 * Keywords: Jumper SPST.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Jumper_2_Bridged extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: B; passive. */
  "B": "2",
}) {
  override schema = "Jumper:Jumper_2_Bridged";
  override referencePrefix = "JP";
}

/**
 * Jumper, 2-pole, open
 *
 * KiCad symbol: `Jumper:Jumper_2_Open`. Reference prefix: `JP`.
 * Footprint filters: Jumper*, TestPoint*2Pads*, TestPoint*Bridge*.
 * Keywords: Jumper SPST.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Jumper_2_Open extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: B; passive. */
  "B": "2",
}) {
  override schema = "Jumper:Jumper_2_Open";
  override referencePrefix = "JP";
}

/**
 * Jumper, 2-pole, small symbol, bridged
 *
 * KiCad symbol: `Jumper:Jumper_2_Small_Bridged`. Reference prefix: `JP`.
 * Footprint filters: Jumper*, TestPoint*2Pads*, TestPoint*Bridge*.
 * Keywords: Jumper SPST.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Jumper_2_Small_Bridged extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: B; passive. */
  "B": "2",
}) {
  override schema = "Jumper:Jumper_2_Small_Bridged";
  override referencePrefix = "JP";
}

/**
 * Jumper, 2-pole, small symbol, open
 *
 * KiCad symbol: `Jumper:Jumper_2_Small_Open`. Reference prefix: `JP`.
 * Footprint filters: Jumper*, TestPoint*2Pads*, TestPoint*Bridge*.
 * Keywords: Jumper SPST.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Jumper_2_Small_Open extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: B; passive. */
  "B": "2",
}) {
  override schema = "Jumper:Jumper_2_Small_Open";
  override referencePrefix = "JP";
}

/**
 * Jumper, 3-pole, pins 1+2 closed/bridged
 *
 * KiCad symbol: `Jumper:Jumper_3_Bridged12`. Reference prefix: `JP`.
 * Footprint filters: Jumper*, TestPoint*3Pads*, TestPoint*Bridge*.
 * Keywords: Jumper SPDT.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class Jumper_3_Bridged12 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 3: B; passive. */
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Jumper:Jumper_3_Bridged12";
  override referencePrefix = "JP";
}

/**
 * Jumper, 3-pole, both open
 *
 * KiCad symbol: `Jumper:Jumper_3_Open`. Reference prefix: `JP`.
 * Footprint filters: Jumper*, TestPoint*3Pads*, TestPoint*Bridge*.
 * Keywords: Jumper SPDT.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class Jumper_3_Open extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 3: B; passive. */
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Jumper:Jumper_3_Open";
  override referencePrefix = "JP";
}

/**
 * Solder Jumper, 2-pole, closed/bridged
 *
 * KiCad symbol: `Jumper:SolderJumper_2_Bridged`. Reference prefix: `JP`.
 * Footprint filters: SolderJumper*Bridged*.
 * Keywords: solder jumper SPST.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class SolderJumper_2_Bridged extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: B; passive. */
  "B": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Jumper:SolderJumper_2_Bridged";
  override referencePrefix = "JP";
}

/**
 * Solder Jumper, 2-pole, open
 *
 * KiCad symbol: `Jumper:SolderJumper_2_Open`. Reference prefix: `JP`.
 * Footprint filters: SolderJumper*Open*.
 * Keywords: solder jumper SPST.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class SolderJumper_2_Open extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: B; passive. */
  "B": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Jumper:SolderJumper_2_Open";
  override referencePrefix = "JP";
}

/**
 * 3-pole Solder Jumper, pins 1+2 closed/bridged
 *
 * KiCad symbol: `Jumper:SolderJumper_3_Bridged12`. Reference prefix: `JP`.
 * Footprint filters: SolderJumper*Bridged12*.
 * Keywords: Solder Jumper SPDT.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class SolderJumper_3_Bridged12 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 3: B; passive. */
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Jumper:SolderJumper_3_Bridged12";
  override referencePrefix = "JP";
}

/**
 * Solder Jumper, 3-pole, pins 1+2+3 closed/bridged
 *
 * KiCad symbol: `Jumper:SolderJumper_3_Bridged123`. Reference prefix: `JP`.
 * Footprint filters: SolderJumper*Bridged123*.
 * Keywords: Solder Jumper SPDT.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class SolderJumper_3_Bridged123 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 3: B; passive. */
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Jumper:SolderJumper_3_Bridged123";
  override referencePrefix = "JP";
}

/**
 * Solder Jumper, 3-pole, open
 *
 * KiCad symbol: `Jumper:SolderJumper_3_Open`. Reference prefix: `JP`.
 * Footprint filters: SolderJumper*Open*.
 * Keywords: Solder Jumper SPDT.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class SolderJumper_3_Open extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 3: B; passive. */
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Jumper:SolderJumper_3_Open";
  override referencePrefix = "JP";
}

