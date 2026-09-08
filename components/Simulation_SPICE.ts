// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 0V reference potential for simulation
 *
 * KiCad symbol: `Simulation_SPICE:0`. Reference prefix: `#GND`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#subsec_Circuit_elements__device
 * Power symbol: global.
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: no.
 */
export class _0 extends Component.withPins({
  /** Physical pin 1: unnamed; power_in. */
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ value: "0", ...opts, properties: { ...{"exclude_from_bom":null,"exclude_from_board":null}, ...opts.properties } });
  }
  override schema = "Simulation_SPICE:0";
  override referencePrefix = "#GND";
}

/**
 * Arbitrary behavioral voltage or current source for simulation only
 *
 * KiCad symbol: `Simulation_SPICE:BSOURCE`. Reference prefix: `B`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Non_linear_Dependent_Sources
 * Keywords: simulation dependent.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BSOURCE extends Component.withPins({
  /** Physical pin 1: N+; passive. */
  "N+": "1",
  /** Physical pin 2: N-; passive. */
  "N-": "2",
}) {
  override schema = "Simulation_SPICE:BSOURCE";
  override referencePrefix = "B";
}

/**
 * Diode for simulation or PCB
 *
 * KiCad symbol: `Simulation_SPICE:D`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_DIODEs
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Simulation_SPICE:D";
  override referencePrefix = "D";
}

/**
 * Voltage-controlled voltage source symbol for simulation only
 *
 * KiCad symbol: `Simulation_SPICE:ESOURCE`. Reference prefix: `E`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#subsec_Exxxx__Linear_Voltage_Controlled
 * Keywords: simulation vcvs dependent.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESOURCE extends Component.withPins({
  /** Physical pin 1: N+; passive. */
  "N+": "1",
  /** Physical pin 2: N-; passive. */
  "N-": "2",
  /** Physical pin 3: C+; input. */
  "C+": "3",
  /** Physical pin 4: C-; input. */
  "C-": "4",
}) {
  override schema = "Simulation_SPICE:ESOURCE";
  override referencePrefix = "E";
}

/**
 * Voltage-controlled current source symbol for simulation only
 *
 * KiCad symbol: `Simulation_SPICE:GSOURCE`. Reference prefix: `G`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#subsec_Gxxxx__Linear_Voltage_Controlled
 * Keywords: simulation vccs dependent.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GSOURCE extends Component.withPins({
  /** Physical pin 1: N+; passive. */
  "N+": "1",
  /** Physical pin 2: N-; passive. */
  "N-": "2",
  /** Physical pin 3: C+; input. */
  "C+": "3",
  /** Physical pin 4: C-; input. */
  "C-": "4",
}) {
  override schema = "Simulation_SPICE:GSOURCE";
  override referencePrefix = "G";
}

/**
 * Current source, AM
 *
 * KiCad symbol: `Simulation_SPICE:IAM`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation amplitude modulated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IAM extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:IAM";
  override referencePrefix = "I";
}

/**
 * Device model for IBIS files. Pin 3 can be used to monitor the die potential
 *
 * KiCad symbol: `Simulation_SPICE:IBIS_DEVICE`. Reference prefix: `U?`.
 * @see https://ibis.org
 * Keywords: Simulation IBIS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IBIS_DEVICE extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: unnamed; input. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:IBIS_DEVICE";
  override referencePrefix = "U?";
}

/**
 * Device model for IBIS files. Pin 3 can be used to monitor the die potential
 *
 * KiCad symbol: `Simulation_SPICE:IBIS_DEVICE_DIFF`. Reference prefix: `U?`.
 * @see https://ibis.org
 * Keywords: Simulation IBIS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IBIS_DEVICE_DIFF extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
}) {
  override schema = "Simulation_SPICE:IBIS_DEVICE_DIFF";
  override referencePrefix = "U?";
}

/**
 * Driver model for IBIS files.
 *
 * KiCad symbol: `Simulation_SPICE:IBIS_DRIVER`. Reference prefix: `U?`.
 * @see https://ibis.org
 * Keywords: Simulation IBIS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IBIS_DRIVER extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: unnamed; bidirectional. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:IBIS_DRIVER";
  override referencePrefix = "U?";
}

/**
 * Driver model for IBIS files. Pin 3 can be used to monitor the die potential.
 *
 * KiCad symbol: `Simulation_SPICE:IBIS_DRIVER_DIFF`. Reference prefix: `U?`.
 * @see https://ibis.org
 * Keywords: Simulation IBIS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IBIS_DRIVER_DIFF extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: +; bidirectional. */
  "+": "2",
  /** Physical pin 3: -; bidirectional. */
  "-": "3",
}) {
  override schema = "Simulation_SPICE:IBIS_DRIVER_DIFF";
  override referencePrefix = "U?";
}

/**
 * Current source, DC
 *
 * KiCad symbol: `Simulation_SPICE:IDC`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDC extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:IDC";
  override referencePrefix = "I";
}

/**
 * Current source, exponential
 *
 * KiCad symbol: `Simulation_SPICE:IEXP`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IEXP extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:IEXP";
  override referencePrefix = "I";
}

/**
 * Current source, pulse
 *
 * KiCad symbol: `Simulation_SPICE:IPULSE`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPULSE extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:IPULSE";
  override referencePrefix = "I";
}

/**
 * Current source, piece-wise linear
 *
 * KiCad symbol: `Simulation_SPICE:IPWL`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPWL extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:IPWL";
  override referencePrefix = "I";
}

/**
 * Current source, single-frequency FM
 *
 * KiCad symbol: `Simulation_SPICE:ISFFM`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation frequency modulated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISFFM extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:ISFFM";
  override referencePrefix = "I";
}

/**
 * Current source, sinusoidal
 *
 * KiCad symbol: `Simulation_SPICE:ISIN`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISIN extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:ISIN";
  override referencePrefix = "I";
}

/**
 * Current source, transient noise
 *
 * KiCad symbol: `Simulation_SPICE:ITRNOISE`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#subsec_Transient_noise_source
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITRNOISE extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:ITRNOISE";
  override referencePrefix = "I";
}

/**
 * Current source, random noise
 *
 * KiCad symbol: `Simulation_SPICE:ITRRANDOM`. Reference prefix: `I`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#subsec_Random_voltage_source
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITRRANDOM extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:ITRRANDOM";
  override referencePrefix = "I";
}

/**
 * N-JFET transistor, for simulation only
 *
 * KiCad symbol: `Simulation_SPICE:NJFET`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_JFETs
 * Keywords: transistor NJFET N-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJFET extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
}) {
  override schema = "Simulation_SPICE:NJFET";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, drain/source/gate
 *
 * KiCad symbol: `Simulation_SPICE:NMOS`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_MOSFETs
 * Keywords: transistor NMOS N-MOS N-MOSFET simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NMOS extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
}) {
  override schema = "Simulation_SPICE:NMOS";
  override referencePrefix = "Q";
}

/**
 * N-channel MOSFET symbol with substrate (bulk) pin
 *
 * KiCad symbol: `Simulation_SPICE:NMOS_Substrate`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_MOSFETs
 * Keywords: mosfet nmos simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NMOS_Substrate extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
  /** Physical pin 4: Bulk; input. */
  "Bulk": "4",
}) {
  override schema = "Simulation_SPICE:NMOS_Substrate";
  override referencePrefix = "Q";
}

/**
 * Bipolar transistor symbol for simulation only, substrate tied to the emitter
 *
 * KiCad symbol: `Simulation_SPICE:NPN`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_BJTs
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NPN extends Component.withPins({
  /** Physical pin 1: C; open_collector. */
  "C": "1",
  /** Physical pin 2: B; input. */
  "B": "2",
  /** Physical pin 3: E; open_emitter. */
  "E": "3",
}) {
  override schema = "Simulation_SPICE:NPN";
  override referencePrefix = "Q";
}

/**
 * Bipolar transistor symbol for simulation only, with substrate pin
 *
 * KiCad symbol: `Simulation_SPICE:NPN_Substrate`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_BJTs
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NPN_Substrate extends Component.withPins({
  /** Physical pin 1: C; open_collector. */
  "C": "1",
  /** Physical pin 2: B; input. */
  "B": "2",
  /** Physical pin 3: E; open_emitter. */
  "E": "3",
  /** Physical pin 4: Substrate; passive. */
  "Substrate": "4",
}) {
  override schema = "Simulation_SPICE:NPN_Substrate";
  override referencePrefix = "Q";
}

/**
 * Operational amplifier, single
 *
 * KiCad symbol: `Simulation_SPICE:OPAMP`. Reference prefix: `U`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec__SUBCKT_Subcircuits
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPAMP extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
}) {
  override schema = "Simulation_SPICE:OPAMP";
  override referencePrefix = "U";
}

/**
 * P-JFET transistor, for simulation only
 *
 * KiCad symbol: `Simulation_SPICE:PJFET`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_JFETs
 * Keywords: transistor PJFET P-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PJFET extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
}) {
  override schema = "Simulation_SPICE:PJFET";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, drain/source/gate
 *
 * KiCad symbol: `Simulation_SPICE:PMOS`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_MOSFETs
 * Keywords: transistor PMOS P-MOS P-MOSFET simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PMOS extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
}) {
  override schema = "Simulation_SPICE:PMOS";
  override referencePrefix = "Q";
}

/**
 * P-channel MOSFET symbol with substrate (bulk) pin
 *
 * KiCad symbol: `Simulation_SPICE:PMOS_Substrate`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_MOSFETs
 * Keywords: mosfet pmos simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PMOS_Substrate extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
  /** Physical pin 4: Bulk; input. */
  "Bulk": "4",
}) {
  override schema = "Simulation_SPICE:PMOS_Substrate";
  override referencePrefix = "Q";
}

/**
 * Bipolar transistor symbol for simulation only, substrate tied to the emitter
 *
 * KiCad symbol: `Simulation_SPICE:PNP`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_BJTs
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PNP extends Component.withPins({
  /** Physical pin 1: C; open_collector. */
  "C": "1",
  /** Physical pin 2: B; input. */
  "B": "2",
  /** Physical pin 3: E; open_emitter. */
  "E": "3",
}) {
  override schema = "Simulation_SPICE:PNP";
  override referencePrefix = "Q";
}

/**
 * Bipolar transistor symbol for simulation only, with substrate pin
 *
 * KiCad symbol: `Simulation_SPICE:PNP_Substrate`. Reference prefix: `Q`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#cha_BJTs
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PNP_Substrate extends Component.withPins({
  /** Physical pin 1: C; open_collector. */
  "C": "1",
  /** Physical pin 2: B; input. */
  "B": "2",
  /** Physical pin 3: E; open_emitter. */
  "E": "3",
  /** Physical pin 4: Substrate; passive. */
  "Substrate": "4",
}) {
  override schema = "Simulation_SPICE:PNP_Substrate";
  override referencePrefix = "Q";
}

/**
 * Potentiometer for Simulation
 *
 * KiCad symbol: `Simulation_SPICE:Potentiometer`. Reference prefix: `R`.
 * Keywords: resistor variable spice sim.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Potentiometer extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Simulation_SPICE:Potentiometer";
  override referencePrefix = "R";
}

/**
 * Voltage controlled switch symbol for simulation only
 *
 * KiCad symbol: `Simulation_SPICE:SWITCH`. Reference prefix: `S`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#subsec_Switches
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SWITCH extends Component.withPins({
  /** Physical pin 1: N+; passive. */
  "N+": "1",
  /** Physical pin 2: N-; passive. */
  "N-": "2",
  /** Physical pin 3: C+; input. */
  "C+": "3",
  /** Physical pin 4: C-; input. */
  "C-": "4",
}) {
  override schema = "Simulation_SPICE:SWITCH";
  override referencePrefix = "S";
}

/**
 * Lossless transmission line, for simulation only
 *
 * KiCad symbol: `Simulation_SPICE:TLINE`. Reference prefix: `T`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Lossless_Transmission_Lines
 * Keywords: lossless transmission line characteristic impedance.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: no.
 */
export class TLINE extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null,"exclude_from_board":null}, ...opts.properties } });
  }
  override schema = "Simulation_SPICE:TLINE";
  override referencePrefix = "T";
}

/**
 * Voltage source, AM
 *
 * KiCad symbol: `Simulation_SPICE:VAM`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation amplitude modulated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VAM extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VAM";
  override referencePrefix = "V";
}

/**
 * Voltage source, DC
 *
 * KiCad symbol: `Simulation_SPICE:VDC`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VDC extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VDC";
  override referencePrefix = "V";
}

/**
 * Voltage source, exponential
 *
 * KiCad symbol: `Simulation_SPICE:VEXP`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VEXP extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VEXP";
  override referencePrefix = "V";
}

/**
 * Differential voltmeter for simulation. The sensed differential voltage can be measured on the third terminal as a single-ended voltage
 *
 * KiCad symbol: `Simulation_SPICE:VOLTMETER_DIFF`. Reference prefix: `MES?`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec__SUBCKT_Subcircuits
 * Keywords: voltmeter differential vdiff.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: no.
 */
export class VOLTMETER_DIFF extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
  /** Physical pin 3: out; output. */
  "out": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null,"exclude_from_board":null}, ...opts.properties } });
  }
  override schema = "Simulation_SPICE:VOLTMETER_DIFF";
  override referencePrefix = "MES?";
}

/**
 * Voltage source, pulse
 *
 * KiCad symbol: `Simulation_SPICE:VPULSE`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VPULSE extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VPULSE";
  override referencePrefix = "V";
}

/**
 * Voltage source, piece-wise linear
 *
 * KiCad symbol: `Simulation_SPICE:VPWL`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VPWL extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VPWL";
  override referencePrefix = "V";
}

/**
 * Voltage source, single-frequency FM
 *
 * KiCad symbol: `Simulation_SPICE:VSFFM`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation frequency modulated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VSFFM extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VSFFM";
  override referencePrefix = "V";
}

/**
 * Voltage source, sinusoidal
 *
 * KiCad symbol: `Simulation_SPICE:VSIN`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#sec_Independent_Sources_for
 * Keywords: simulation ac vac.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VSIN extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VSIN";
  override referencePrefix = "V";
}

/**
 * Voltage source, transient noise
 *
 * KiCad symbol: `Simulation_SPICE:VTRNOISE`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#subsec_Transient_noise_source
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VTRNOISE extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VTRNOISE";
  override referencePrefix = "V";
}

/**
 * Voltage source, random noise
 *
 * KiCad symbol: `Simulation_SPICE:VTRRANDOM`. Reference prefix: `V`.
 * @see https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml#subsec_Random_voltage_source
 * Keywords: simulation.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VTRRANDOM extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Simulation_SPICE:VTRRANDOM";
  override referencePrefix = "V";
}

