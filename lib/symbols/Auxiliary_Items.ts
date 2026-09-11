// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Generic outline for a module
 *
 * KiCad symbol: `Auxiliary_Items:Generic_Outline`. Reference prefix: `H`.
 * Keywords: generic outline board module.
 */
export class Generic_Outline extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Auxiliary_Items:Generic_Outline";
  override referencePrefix = "H";
}

/**
 * Jumper or shunt, off-board part
 *
 * KiCad symbol: `Auxiliary_Items:Jumper_Shunt`. Reference prefix: `H`.
 * Keywords: jumper shunt .
 */
export class Jumper_Shunt extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes }, properties: { ...{"exclude_from_board":null}, ...opts.properties } });
  }
  override schema = "Auxiliary_Items:Jumper_Shunt";
  override referencePrefix = "H";
}

/**
 * Mounting screw
 *
 * KiCad symbol: `Auxiliary_Items:MountingScrew`. Reference prefix: `H`.
 * Footprint filters: Screw?Generic*.
 * Keywords: mounting screw.
 */
export class MountingScrew extends Component.withPins({
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Auxiliary_Items:MountingScrew";
  override referencePrefix = "H";
}
