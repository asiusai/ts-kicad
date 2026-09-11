// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 28A, 900V, N-Channel IGBT
 *
 * KiCad symbol: `Transistor_IGBT:IRG4PF50W`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see http://www.irf.com/product-info/datasheets/data/irg4pf50w.pdf
 * Keywords: N-Channel IGBT Power Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class IRG4PF50W extends Component.withPins({
  "G": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_IGBT:IRG4PF50W";
  override referencePrefix = "Q";
}

/**
 * 25A, 600V, N-Channel IGBT, TO-220
 *
 * KiCad symbol: `Transistor_IGBT:STGP7NC60HD`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.farnell.com/datasheets/2309889.pdf
 * Keywords: N-Channel very fast IGBT with ultrafast diode Power Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class STGP7NC60HD extends Component.withPins({
  "G": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_IGBT:STGP7NC60HD";
  override referencePrefix = "Q";
}
