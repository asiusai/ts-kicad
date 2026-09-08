// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * AC ammeter
 *
 * KiCad symbol: `Device:Ammeter_AC`. Reference prefix: `MES`.
 * Keywords: ammeter AC ampere meter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Ammeter_AC extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Ammeter_AC";
  override referencePrefix = "MES";
}

/**
 * DC ammeter
 *
 * KiCad symbol: `Device:Ammeter_DC`. Reference prefix: `MES`.
 * Keywords: ammeter DC ampere meter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Ammeter_DC extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Ammeter_DC";
  override referencePrefix = "MES";
}

/**
 * Antenna
 *
 * KiCad symbol: `Device:Antenna`. Reference prefix: `AE`.
 * Keywords: antenna.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Antenna extends Component.withPins({
  /** Physical pin 1: A; input. */
  "A": "1",
}) {
  override schema = "Device:Antenna";
  override referencePrefix = "AE";
}

/**
 * Ceramic chip antenna with pin for PCB trace
 *
 * KiCad symbol: `Device:Antenna_Chip`. Reference prefix: `AE`.
 * Keywords: antenna.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Antenna_Chip extends Component.withPins({
  /** Physical pin 1: FEED; input. */
  "FEED": "1",
  /** Physical pin 2: PCB_Trace; passive. */
  "PCB_Trace": "2",
}) {
  override schema = "Device:Antenna_Chip";
  override referencePrefix = "AE";
}

/**
 * Dipole antenna
 *
 * KiCad symbol: `Device:Antenna_Dipole`. Reference prefix: `AE`.
 * Keywords: dipole antenna.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Antenna_Dipole extends Component.withPins({
  /** Physical pin 1: unnamed; input. */
  "P1": "1",
  /** Physical pin 2: unnamed; input. */
  "P2": "2",
}) {
  override schema = "Device:Antenna_Dipole";
  override referencePrefix = "AE";
}

/**
 * Loop antenna
 *
 * KiCad symbol: `Device:Antenna_Loop`. Reference prefix: `AE`.
 * Keywords: loop antenna.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Antenna_Loop extends Component.withPins({
  /** Physical pin 1: unnamed; input. */
  "P1": "1",
  /** Physical pin 2: unnamed; input. */
  "P2": "2",
}) {
  override schema = "Device:Antenna_Loop";
  override referencePrefix = "AE";
}

/**
 * Antenna with extra pin for shielding
 *
 * KiCad symbol: `Device:Antenna_Shield`. Reference prefix: `AE`.
 * Keywords: antenna.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Antenna_Shield extends Component.withPins({
  /** Physical pin 1: A; input. */
  "A": "1",
  /** Physical pin 2: Shield; input. */
  "Shield": "2",
}) {
  override schema = "Device:Antenna_Shield";
  override referencePrefix = "AE";
}

/**
 * Multiple-cell battery
 *
 * KiCad symbol: `Device:Battery`. Reference prefix: `BT`.
 * Keywords: batt voltage-source cell.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Battery extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Device:Battery";
  override referencePrefix = "BT";
}

/**
 * Single-cell battery
 *
 * KiCad symbol: `Device:Battery_Cell`. Reference prefix: `BT`.
 * Keywords: battery cell.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Battery_Cell extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Device:Battery_Cell";
  override referencePrefix = "BT";
}

/**
 * Buzzer, polarized
 *
 * KiCad symbol: `Device:Buzzer`. Reference prefix: `BZ`.
 * Footprint filters: *Buzzer*.
 * Keywords: quartz resonator ceramic.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Buzzer extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Device:Buzzer";
  override referencePrefix = "BZ";
}

/**
 * Unpolarized capacitor
 *
 * KiCad symbol: `Device:C`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C";
  override referencePrefix = "C";
}

/**
 * Unpolarized capacitor, rotated by 45°
 *
 * KiCad symbol: `Device:C_45deg`. Reference prefix: `C`.
 * Footprint filters: R_*.
 * Keywords: capacitor cap.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_45deg extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_45deg";
  override referencePrefix = "C";
}

/**
 * Feedthrough capacitor
 *
 * KiCad symbol: `Device:C_Feedthrough`. Reference prefix: `C`.
 * Keywords: EMI filter feedthrough capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Feedthrough extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:C_Feedthrough";
  override referencePrefix = "C";
}

/**
 * 4 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-5
 *
 * KiCad symbol: `Device:C_Network04`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Network04 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: C1; passive. */
  "C1": "2",
  /** Physical pin 3: C2; passive. */
  "C2": "3",
  /** Physical pin 4: C3; passive. */
  "C3": "4",
  /** Physical pin 5: C4; passive. */
  "C4": "5",
}) {
  override schema = "Device:C_Network04";
  override referencePrefix = "CN";
}

/**
 * 5 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-6
 *
 * KiCad symbol: `Device:C_Network05`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Network05 extends Component.withPins({
  /** Physical pin 6: C5; passive. */
  "C5": "6",
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: C1; passive. */
  "C1": "2",
  /** Physical pin 3: C2; passive. */
  "C2": "3",
  /** Physical pin 4: C3; passive. */
  "C3": "4",
  /** Physical pin 5: C4; passive. */
  "C4": "5",
}) {
  override schema = "Device:C_Network05";
  override referencePrefix = "CN";
}

/**
 * 6 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-7
 *
 * KiCad symbol: `Device:C_Network06`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Network06 extends Component.withPins({
  /** Physical pin 6: C5; passive. */
  "C5": "6",
  /** Physical pin 7: C6; passive. */
  "C6": "7",
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: C1; passive. */
  "C1": "2",
  /** Physical pin 3: C2; passive. */
  "C2": "3",
  /** Physical pin 4: C3; passive. */
  "C3": "4",
  /** Physical pin 5: C4; passive. */
  "C4": "5",
}) {
  override schema = "Device:C_Network06";
  override referencePrefix = "CN";
}

/**
 * 7 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-8
 *
 * KiCad symbol: `Device:C_Network07`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Network07 extends Component.withPins({
  /** Physical pin 6: C5; passive. */
  "C5": "6",
  /** Physical pin 7: C6; passive. */
  "C6": "7",
  /** Physical pin 8: C7; passive. */
  "C7": "8",
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: C1; passive. */
  "C1": "2",
  /** Physical pin 3: C2; passive. */
  "C2": "3",
  /** Physical pin 4: C3; passive. */
  "C3": "4",
  /** Physical pin 5: C4; passive. */
  "C4": "5",
}) {
  override schema = "Device:C_Network07";
  override referencePrefix = "CN";
}

/**
 * 8 capacitor network, star topology, bussed capacitors, single bus pin, small symbol, SIP-9
 *
 * KiCad symbol: `Device:C_Network08`. Reference prefix: `CN`.
 * Footprint filters: C*Array*, SIP*.
 * Keywords: C network star-topology.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Network08 extends Component.withPins({
  /** Physical pin 6: C5; passive. */
  "C5": "6",
  /** Physical pin 7: C6; passive. */
  "C6": "7",
  /** Physical pin 8: C7; passive. */
  "C7": "8",
  /** Physical pin 9: C8; passive. */
  "C8": "9",
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: C1; passive. */
  "C1": "2",
  /** Physical pin 3: C2; passive. */
  "C2": "3",
  /** Physical pin 4: C3; passive. */
  "C3": "4",
  /** Physical pin 5: C4; passive. */
  "C4": "5",
}) {
  override schema = "Device:C_Network08";
  override referencePrefix = "CN";
}

/**
 * Polarized capacitor
 *
 * KiCad symbol: `Device:C_Polarized`. Reference prefix: `C`.
 * Footprint filters: CP_*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Polarized extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Polarized";
  override referencePrefix = "C";
}

/**
 * Set of two polarized capacitors in series
 *
 * KiCad symbol: `Device:C_Polarized_Series_2C`. Reference prefix: `C`.
 * Footprint filters: CP*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Polarized_Series_2C extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:C_Polarized_Series_2C";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, small symbol
 *
 * KiCad symbol: `Device:C_Polarized_Small`. Reference prefix: `C`.
 * Footprint filters: CP_*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Polarized_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Polarized_Small";
  override referencePrefix = "C";
}

/**
 * Set of two polarized capacitors in series, small symbol
 *
 * KiCad symbol: `Device:C_Polarized_Small_Series_2C`. Reference prefix: `C`.
 * Footprint filters: CP*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Polarized_Small_Series_2C extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:C_Polarized_Small_Series_2C";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, small US symbol
 *
 * KiCad symbol: `Device:C_Polarized_Small_US`. Reference prefix: `C`.
 * Footprint filters: CP_*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Polarized_Small_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Polarized_Small_US";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, small US symbol
 *
 * KiCad symbol: `Device:C_Polarized_Small_US_Series_2C`. Reference prefix: `C`.
 * Footprint filters: CP*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Polarized_Small_US_Series_2C extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:C_Polarized_Small_US_Series_2C";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, US symbol
 *
 * KiCad symbol: `Device:C_Polarized_US`. Reference prefix: `C`.
 * Footprint filters: CP_*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Polarized_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Polarized_US";
  override referencePrefix = "C";
}

/**
 * Polarized capacitor, US symbol
 *
 * KiCad symbol: `Device:C_Polarized_US_Series_2C`. Reference prefix: `C`.
 * Footprint filters: CP*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Polarized_US_Series_2C extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:C_Polarized_US_Series_2C";
  override referencePrefix = "C";
}

/**
 * Unpolarized capacitor, small symbol
 *
 * KiCad symbol: `Device:C_Small`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: capacitor cap.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Small";
  override referencePrefix = "C";
}

/**
 * capacitor, small US symbol
 *
 * KiCad symbol: `Device:C_Small_US`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Small_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Small_US";
  override referencePrefix = "C";
}

/**
 * Trimmable capacitor
 *
 * KiCad symbol: `Device:C_Trim`. Reference prefix: `C`.
 * Keywords: trimmer variable capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Trim extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Trim";
  override referencePrefix = "C";
}

/**
 * Differential variable capacitor with two stators
 *
 * KiCad symbol: `Device:C_Trim_Differential`. Reference prefix: `C`.
 * Keywords: trimmer capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Trim_Differential extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:C_Trim_Differential";
  override referencePrefix = "C";
}

/**
 * Trimmable capacitor, small symbol
 *
 * KiCad symbol: `Device:C_Trim_Small`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: trimmer variable capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Trim_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Trim_Small";
  override referencePrefix = "C";
}

/**
 * capacitor, US symbol
 *
 * KiCad symbol: `Device:C_US`. Reference prefix: `C`.
 * Footprint filters: C_*.
 * Keywords: cap capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_US";
  override referencePrefix = "C";
}

/**
 * Variable capacitor
 *
 * KiCad symbol: `Device:C_Variable`. Reference prefix: `C`.
 * Keywords: trimmer capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C_Variable extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:C_Variable";
  override referencePrefix = "C";
}

/**
 * Single pole circuit breaker
 *
 * KiCad symbol: `Device:CircuitBreaker_1P`. Reference prefix: `CB`.
 * Keywords: CB.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CircuitBreaker_1P extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:CircuitBreaker_1P";
  override referencePrefix = "CB";
}

/**
 * Single pole circuit breaker, US symbol
 *
 * KiCad symbol: `Device:CircuitBreaker_1P_US`. Reference prefix: `CB`.
 * Keywords: CB.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CircuitBreaker_1P_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:CircuitBreaker_1P_US";
  override referencePrefix = "CB";
}

/**
 * Double pole circuit breaker
 *
 * KiCad symbol: `Device:CircuitBreaker_2P`. Reference prefix: `CB`.
 * Keywords: CB 2P.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CircuitBreaker_2P extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:CircuitBreaker_2P";
  override referencePrefix = "CB";
}

/**
 * Double pole circuit breaker, US symbol
 *
 * KiCad symbol: `Device:CircuitBreaker_2P_US`. Reference prefix: `CB`.
 * Keywords: CB 2P.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CircuitBreaker_2P_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:CircuitBreaker_2P_US";
  override referencePrefix = "CB";
}

/**
 * Triple pole circuit breaker
 *
 * KiCad symbol: `Device:CircuitBreaker_3P`. Reference prefix: `CB`.
 * Keywords: CB 3P.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CircuitBreaker_3P extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
}) {
  override schema = "Device:CircuitBreaker_3P";
  override referencePrefix = "CB";
}

/**
 * Triple pole circuit breaker, US symbol
 *
 * KiCad symbol: `Device:CircuitBreaker_3P_US`. Reference prefix: `CB`.
 * Keywords: CB 3P.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CircuitBreaker_3P_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
}) {
  override schema = "Device:CircuitBreaker_3P_US";
  override referencePrefix = "CB";
}

/**
 * 3 Port RF Circulator, Right Handed
 *
 * KiCad symbol: `Device:Circulator_Left_3Port`. Reference prefix: `FL`.
 * Keywords: Microwave Reflection SWR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Circulator_Left_3Port extends Component.withPins({
  /** Physical pin 1: P1; passive. */
  "P1": "1",
  /** Physical pin 2: P2; passive. */
  "P2": "2",
  /** Physical pin 3: P3; passive. */
  "P3": "3",
  /** Physical pin 4: GND; passive. */
  "GND": "4",
}) {
  override schema = "Device:Circulator_Left_3Port";
  override referencePrefix = "FL";
}

/**
 * 4 Port RF Circulator, Right Handed
 *
 * KiCad symbol: `Device:Circulator_Left_4Port`. Reference prefix: `FL`.
 * Keywords: Microwave Reflection SWR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Circulator_Left_4Port extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: GND; passive. */
  "GND": "5",
}) {
  override schema = "Device:Circulator_Left_4Port";
  override referencePrefix = "FL";
}

/**
 * 3 Port RF Circulator, Left Handed
 *
 * KiCad symbol: `Device:Circulator_Right_3Port`. Reference prefix: `FL`.
 * Keywords: Microwave Reflection SWR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Circulator_Right_3Port extends Component.withPins({
  /** Physical pin 1: P1; passive. */
  "P1": "1",
  /** Physical pin 2: P2; passive. */
  "P2": "2",
  /** Physical pin 3: P3; passive. */
  "P3": "3",
  /** Physical pin 4: GND; passive. */
  "GND": "4",
}) {
  override schema = "Device:Circulator_Right_3Port";
  override referencePrefix = "FL";
}

/**
 * 4 Port RF Circulator, Left Handed
 *
 * KiCad symbol: `Device:Circulator_Right_4Port`. Reference prefix: `FL`.
 * Keywords: Microwave Reflection SWR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Circulator_Right_4Port extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: GND; passive. */
  "GND": "5",
}) {
  override schema = "Device:Circulator_Right_4Port";
  override referencePrefix = "FL";
}

/**
 * Two pin crystal
 *
 * KiCad symbol: `Device:Crystal`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
}) {
  override schema = "Device:Crystal";
  override referencePrefix = "Y";
}

/**
 * Three pin crystal, GND on pin 2
 *
 * KiCad symbol: `Device:Crystal_GND2`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_GND2 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:Crystal_GND2";
  override referencePrefix = "Y";
}

/**
 * Four pin crystal, GND on pins 2 and 3
 *
 * KiCad symbol: `Device:Crystal_GND23`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_GND23 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: G; passive. */
  "G_2": "2",
  /** Physical pin 3: G; passive. */
  "G_3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:Crystal_GND23";
  override referencePrefix = "Y";
}

/**
 * Four pin crystal, GND on pins 2 and 3, small symbol
 *
 * KiCad symbol: `Device:Crystal_GND23_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_GND23_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: G; passive. */
  "G_2": "2",
  /** Physical pin 3: G; passive. */
  "G_3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:Crystal_GND23_Small";
  override referencePrefix = "Y";
}

/**
 * Four pin crystal, GND on pins 2 and 4
 *
 * KiCad symbol: `Device:Crystal_GND24`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_GND24 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: G; passive. */
  "G_2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: G; passive. */
  "G_4": "4",
}) {
  override schema = "Device:Crystal_GND24";
  override referencePrefix = "Y";
}

/**
 * Four pin crystal, GND on pins 2 and 4, small symbol
 *
 * KiCad symbol: `Device:Crystal_GND24_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_GND24_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: G; passive. */
  "G_2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: G; passive. */
  "G_4": "4",
}) {
  override schema = "Device:Crystal_GND24_Small";
  override referencePrefix = "Y";
}

/**
 * Three pin crystal, GND on pin 2, small symbol
 *
 * KiCad symbol: `Device:Crystal_GND2_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_GND2_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:Crystal_GND2_Small";
  override referencePrefix = "Y";
}

/**
 * Three pin crystal, GND on pin 3
 *
 * KiCad symbol: `Device:Crystal_GND3`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_GND3 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:Crystal_GND3";
  override referencePrefix = "Y";
}

/**
 * Three pin crystal, GND on pin 3, small symbol
 *
 * KiCad symbol: `Device:Crystal_GND3_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_GND3_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:Crystal_GND3_Small";
  override referencePrefix = "Y";
}

/**
 * Two pin crystal, small symbol
 *
 * KiCad symbol: `Device:Crystal_Small`. Reference prefix: `Y`.
 * Footprint filters: Crystal*.
 * Keywords: quartz ceramic resonator oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Crystal_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
}) {
  override schema = "Device:Crystal_Small";
  override referencePrefix = "Y";
}

/**
 * Diode
 *
 * KiCad symbol: `Device:D`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
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
  override schema = "Device:D";
  override referencePrefix = "D";
}

/**
 * Diode for alternating current
 *
 * KiCad symbol: `Device:DIAC`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: AC diode DIAC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DIAC extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:DIAC";
  override referencePrefix = "D";
}

/**
 * Diode for alternating current, filled shape
 *
 * KiCad symbol: `Device:DIAC_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: AC diode DIAC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DIAC_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:DIAC_Filled";
  override referencePrefix = "D";
}

/**
 * Diode, rotated by 45°
 *
 * KiCad symbol: `Device:D_45deg`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: Diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_45deg extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_45deg";
  override referencePrefix = "D";
}

/**
 * Diode, filled, rotated by 45°
 *
 * KiCad symbol: `Device:D_45deg_Filled`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: Diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_45deg_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_45deg_Filled";
  override referencePrefix = "D";
}

/**
 * Diode, anode on pins 1 and 2
 *
 * KiCad symbol: `Device:D_AAK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_AAK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_AAK";
  override referencePrefix = "D";
}

/**
 * Diode bridge, +ve/-ve/AC/AC
 *
 * KiCad symbol: `Device:D_Bridge_+-AA`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Bridge___AA extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:D_Bridge_+-AA";
  override referencePrefix = "D";
}

/**
 * Diode bridge, +ve/AC/-ve/AC
 *
 * KiCad symbol: `Device:D_Bridge_+A-A`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Bridge__A_A extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:D_Bridge_+A-A";
  override referencePrefix = "D";
}

/**
 * Diode bridge, +ve/AC/AC/-ve
 *
 * KiCad symbol: `Device:D_Bridge_+AA-`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Bridge__AA_ extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: -; passive. */
  "-": "4",
}) {
  override schema = "Device:D_Bridge_+AA-";
  override referencePrefix = "D";
}

/**
 * Diode bridge, -ve/AC/+ve/AC
 *
 * KiCad symbol: `Device:D_Bridge_-A+A`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Device_D_Bridge__A_A extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: +; passive. */
  "+": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:D_Bridge_-A+A";
  override referencePrefix = "D";
}

/**
 * Diode bridge, -ve/AC/AC/+ve
 *
 * KiCad symbol: `Device:D_Bridge_-AA+`. Reference prefix: `D`.
 * Footprint filters: D*Bridge*, D*Rectifier*.
 * Keywords: rectifier ACDC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Device_D_Bridge__AA_ extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: +; passive. */
  "+": "4",
}) {
  override schema = "Device:D_Bridge_-AA+";
  override referencePrefix = "D";
}

/**
 * Variable capacitance diode
 *
 * KiCad symbol: `Device:D_Capacitance`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: capacitance diode varicap varactor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Capacitance extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Capacitance";
  override referencePrefix = "D";
}

/**
 * Variable capacitance diode, filled shape
 *
 * KiCad symbol: `Device:D_Capacitance_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: capacitance diode varicap varactor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Capacitance_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Capacitance_Filled";
  override referencePrefix = "D";
}

/**
 * Constant-current diode / current limiting diode / current regulator diode, IEC60747-3:2013
 *
 * KiCad symbol: `Device:D_Current-regulator`. Reference prefix: `D`.
 * Footprint filters: TO-???*, D_*.
 * Keywords: diode constant-current current limit regulator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Current_regulator extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Current-regulator";
  override referencePrefix = "D";
}

/**
 * Constant-current diode / current limiting diode / current regulator diode, IEC60747-3:2013, small symbol
 *
 * KiCad symbol: `Device:D_Current-regulator_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, D_*.
 * Keywords: diode constant-current current limit regulator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Current_regulator_Small extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Current-regulator_Small";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_AKK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_AKK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Dual_CommonAnode_AKK";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_AKK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_AKK_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Dual_CommonAnode_AKK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_AKK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_AKK_Split extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Dual_CommonAnode_AKK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 2
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KAK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_KAK extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Dual_CommonAnode_KAK";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_KAK_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Dual_CommonAnode_KAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_KAK_Split extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Dual_CommonAnode_KAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 3
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KKA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_KKA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Dual_CommonAnode_KKA";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_KKA_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Dual_CommonAnode_KKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonAnode_KKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonAnode_KKA_Split extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Device:D_Dual_CommonAnode_KKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AAK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_AAK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Dual_CommonCathode_AAK";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_AAK_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Dual_CommonCathode_AAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_AAK_Split extends Component.withPins({
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
}) {
  override schema = "Device:D_Dual_CommonCathode_AAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 2
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AKA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_AKA extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Dual_CommonCathode_AKA";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_AKA_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Dual_CommonCathode_AKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_AKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_AKA_Split extends Component.withPins({
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Dual_CommonCathode_AKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_KAA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_KAA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Dual_CommonCathode_KAA";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_KAA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_KAA_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Dual_CommonCathode_KAA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Dual_CommonCathode_KAA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_CommonCathode_KAA_Split extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Dual_CommonCathode_KAA_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_ACK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_ACK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Dual_Series_ACK";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_ACK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_ACK_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Dual_Series_ACK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_ACK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_ACK_Split extends Component.withPins({
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Dual_Series_ACK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_AKC`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_AKC extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: common; passive. */
  "common": "3",
}) {
  override schema = "Device:D_Dual_Series_AKC";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_AKC_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_AKC_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: common; passive. */
  "common": "3",
}) {
  override schema = "Device:D_Dual_Series_AKC_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_AKC_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_AKC_Split extends Component.withPins({
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: common; passive. */
  "common": "2",
}) {
  override schema = "Device:D_Dual_Series_AKC_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_CAK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_CAK extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Dual_Series_CAK";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_CAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_CAK_Parallel extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Dual_Series_CAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Dual_Series_CAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_CAK_Split extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Dual_Series_CAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_CKA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_CKA extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Dual_Series_CKA";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_CKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_CKA_Parallel extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Dual_Series_CKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_CKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_CKA_Split extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 2: K; passive. */
  "K": "2",
}) {
  override schema = "Device:D_Dual_Series_CKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_KAC`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_KAC extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: common; passive. */
  "common": "3",
}) {
  override schema = "Device:D_Dual_Series_KAC";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_KAC_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_KAC_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: common; passive. */
  "common": "3",
}) {
  override schema = "Device:D_Dual_Series_KAC_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Dual_Series_KAC_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_KAC_Split extends Component.withPins({
  /** Physical pin 3: common; passive. */
  "common": "3",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K": "1",
}) {
  override schema = "Device:D_Dual_Series_KAC_Split";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_KCA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_KCA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Dual_Series_KCA";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_KCA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_KCA_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Dual_Series_KCA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Dual_Series_KCA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Dual_Series_KCA_Split extends Component.withPins({
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K": "1",
}) {
  override schema = "Device:D_Dual_Series_KCA_Split";
  override referencePrefix = "D";
}

/**
 * Diode, filled shape
 *
 * KiCad symbol: `Device:D_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Filled";
  override referencePrefix = "D";
}

/**
 * Diode, anode on pins 2 and 3
 *
 * KiCad symbol: `Device:D_KAA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_KAA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_KAA";
  override referencePrefix = "D";
}

/**
 * Diode, cathode on pins 1 and 3
 *
 * KiCad symbol: `Device:D_KAK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_KAK extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_KAK";
  override referencePrefix = "D";
}

/**
 * Diode, cathode on pins 1 and 2
 *
 * KiCad symbol: `Device:D_KKA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_KKA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_KKA";
  override referencePrefix = "D";
}

/**
 * Laser diode, cathode on pin 3, anode on pin 1
 *
 * KiCad symbol: `Device:D_Laser_1A3C`. Reference prefix: `LD`.
 * Footprint filters: *LaserDiode*.
 * Keywords: opto laserdiode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Laser_1A3C extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Laser_1A3C";
  override referencePrefix = "LD";
}

/**
 * Laser diode, cathode on pin 1, anode on pin 2
 *
 * KiCad symbol: `Device:D_Laser_1C2A`. Reference prefix: `LD`.
 * Footprint filters: *LaserDiode*.
 * Keywords: opto laserdiode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Laser_1C2A extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Laser_Photo_MType extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Laser_Photo_NType extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Laser_Photo_PType extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:D_Laser_Photo_PType";
  override referencePrefix = "LD";
}

/**
 * Photodiode
 *
 * KiCad symbol: `Device:D_Photo`. Reference prefix: `D`.
 * Keywords: photodiode diode opto.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Photo extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Photo";
  override referencePrefix = "D";
}

/**
 * Photodiode, filled shape
 *
 * KiCad symbol: `Device:D_Photo_Filled`. Reference prefix: `D`.
 * Keywords: photodiode diode opto.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Photo_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Photo_Filled";
  override referencePrefix = "D";
}

/**
 * Semiconductor radiation detector
 *
 * KiCad symbol: `Device:D_Radiation`. Reference prefix: `D`.
 * Keywords: radiation detector diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Radiation extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Radiation";
  override referencePrefix = "D";
}

/**
 * Semiconductor radiation detector, filled shape
 *
 * KiCad symbol: `Device:D_Radiation_Filled`. Reference prefix: `D`.
 * Keywords: radiation detector diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Radiation_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Radiation_Filled";
  override referencePrefix = "D";
}

/**
 * Schottky diode
 *
 * KiCad symbol: `Device:D_Schottky`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Schottky";
  override referencePrefix = "D";
}

/**
 * Schottky diode, anode on pins 1 and 2
 *
 * KiCad symbol: `Device:D_Schottky_AAK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_AAK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Schottky_AAK";
  override referencePrefix = "D";
}

/**
 * Schottky diode, anode on pins 1 and 3
 *
 * KiCad symbol: `Device:D_Schottky_AKA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_AKA extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Schottky_AKA";
  override referencePrefix = "D";
}

/**
 * Schottky diode, cathode on pins 2 and 3
 *
 * KiCad symbol: `Device:D_Schottky_AKK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_AKK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_AKK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_AKK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_AKK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_AKK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_AKK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_AKK_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_AKK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_AKK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_AKK_Split extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_AKK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 2
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KAK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_KAK extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_KAK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_KAK_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_KAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_KAK_Split extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_KAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 3
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KKA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_KKA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_KKA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_KKA_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_KKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonAnode_KKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonAnode_KKA_Split extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Device:D_Schottky_Dual_CommonAnode_KKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AAK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_AAK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_AAK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_AAK_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_AAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_AAK_Split extends Component.withPins({
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_AAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 2
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AKA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_AKA extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_AKA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_AKA_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_AKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_AKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_AKA_Split extends Component.withPins({
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_AKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_KAA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_KAA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_KAA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_KAA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_KAA_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_KAA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Schottky_Dual_CommonCathode_KAA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_CommonCathode_KAA_Split extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_CommonCathode_KAA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_ACK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_ACK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_ACK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_ACK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_ACK_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_ACK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/center/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_ACK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_ACK_Split extends Component.withPins({
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_ACK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_AKC`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_AKC extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: common; passive. */
  "common": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_AKC";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_AKC_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_AKC_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_AKC_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, anode/cathode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_AKC_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_AKC_Split extends Component.withPins({
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Device:D_Schottky_Dual_Series_AKC_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CAK`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_CAK extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_CAK";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_CAK_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_CAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/anode/cathode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_CAK_Split extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_CAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CKA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_CKA extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_CKA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_CKA_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_CKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, center/cathode/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_CKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_CKA_Split extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Device:D_Schottky_Dual_Series_CKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KAC`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_KAC extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: common; passive. */
  "common": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_KAC";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KAC_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_KAC_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_KAC_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/anode/center
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KAC_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_KAC_Split extends Component.withPins({
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
}) {
  override schema = "Device:D_Schottky_Dual_Series_KAC_Split";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KCA`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_KCA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_KCA";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KCA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_KCA_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_Dual_Series_KCA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Schottky diode, cathode/center/anode
 *
 * KiCad symbol: `Device:D_Schottky_Dual_Series_KCA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Dual_Series_KCA_Split extends Component.withPins({
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
}) {
  override schema = "Device:D_Schottky_Dual_Series_KCA_Split";
  override referencePrefix = "D";
}

/**
 * Schottky diode, filled shape
 *
 * KiCad symbol: `Device:D_Schottky_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Schottky_Filled";
  override referencePrefix = "D";
}

/**
 * Schottky diode, anode on pins 2 and 3
 *
 * KiCad symbol: `Device:D_Schottky_KAA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_KAA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Schottky_KAA";
  override referencePrefix = "D";
}

/**
 * Schottky diode, cathode on pins 1 and 3
 *
 * KiCad symbol: `Device:D_Schottky_KAK`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_KAK extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Schottky_KAK";
  override referencePrefix = "D";
}

/**
 * Schottky diode, cathode on pins 1 and 2
 *
 * KiCad symbol: `Device:D_Schottky_KKA`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky SCHDPAK.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_KKA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Schottky_KKA";
  override referencePrefix = "D";
}

/**
 * Schottky diode, small symbol
 *
 * KiCad symbol: `Device:D_Schottky_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Small extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Schottky_Small";
  override referencePrefix = "D";
}

/**
 * Schottky diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:D_Schottky_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode Schottky.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Schottky_Small_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Schottky_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Shockley (PNPN) diode
 *
 * KiCad symbol: `Device:D_Shockley`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: Shockley diode PNPN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Shockley extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Shockley";
  override referencePrefix = "D";
}

/**
 * Silicon photomultiplier
 *
 * KiCad symbol: `Device:D_SiPM`. Reference prefix: `D`.
 * Footprint filters: MPPC*.
 * Keywords: SiPM MPPC SPAD photon counting.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_SiPM extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_SiPM";
  override referencePrefix = "D";
}

/**
 * Diode, small symbol
 *
 * KiCad symbol: `Device:D_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Small extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Small";
  override referencePrefix = "D";
}

/**
 * Diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:D_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Small_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Bidirectional transient-voltage-suppression diode
 *
 * KiCad symbol: `Device:D_TVS`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode TVS thyrector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TVS extends Component.withPins({
  /** Physical pin 1: A1; passive. */
  "A1": "1",
  /** Physical pin 2: A2; passive. */
  "A2": "2",
}) {
  override schema = "Device:D_TVS";
  override referencePrefix = "D";
}

/**
 * Bidirectional dual transient-voltage-suppression diode, center on pin 3
 *
 * KiCad symbol: `Device:D_TVS_Dual_AAC`. Reference prefix: `D`.
 * Keywords: diode TVS thyrector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TVS_Dual_AAC extends Component.withPins({
  /** Physical pin 1: A1; passive. */
  "A1": "1",
  /** Physical pin 2: A2; passive. */
  "A2": "2",
  /** Physical pin 3: common; passive. */
  "common": "3",
}) {
  override schema = "Device:D_TVS_Dual_AAC";
  override referencePrefix = "D";
}

/**
 * Bidirectional dual transient-voltage-suppression diode, center on pin 2
 *
 * KiCad symbol: `Device:D_TVS_Dual_ACA`. Reference prefix: `D`.
 * Keywords: diode TVS thyrector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TVS_Dual_ACA extends Component.withPins({
  /** Physical pin 1: A1; passive. */
  "A1": "1",
  /** Physical pin 2: common; passive. */
  "common": "2",
  /** Physical pin 3: A2; passive. */
  "A2": "3",
}) {
  override schema = "Device:D_TVS_Dual_ACA";
  override referencePrefix = "D";
}

/**
 * Bidirectional dual transient-voltage-suppression diode, center on pin 1
 *
 * KiCad symbol: `Device:D_TVS_Dual_CAA`. Reference prefix: `D`.
 * Keywords: diode TVS thyrector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TVS_Dual_CAA extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: A1; passive. */
  "A1": "2",
  /** Physical pin 3: A2; passive. */
  "A2": "3",
}) {
  override schema = "Device:D_TVS_Dual_CAA";
  override referencePrefix = "D";
}

/**
 * Bidirectional transient-voltage-suppression diode, filled shape
 *
 * KiCad symbol: `Device:D_TVS_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode TVS thyrector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TVS_Filled extends Component.withPins({
  /** Physical pin 1: A1; passive. */
  "A1": "1",
  /** Physical pin 2: A2; passive. */
  "A2": "2",
}) {
  override schema = "Device:D_TVS_Filled";
  override referencePrefix = "D";
}

/**
 * Bidirectional transient-voltage-suppression diode, small symbol
 *
 * KiCad symbol: `Device:D_TVS_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode TVS thyrector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TVS_Small extends Component.withPins({
  /** Physical pin 1: A1; passive. */
  "A1": "1",
  /** Physical pin 2: A2; passive. */
  "A2": "2",
}) {
  override schema = "Device:D_TVS_Small";
  override referencePrefix = "D";
}

/**
 * Bidirectional transient-voltage-suppression diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:D_TVS_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode TVS thyrector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TVS_Small_Filled extends Component.withPins({
  /** Physical pin 1: A1; passive. */
  "A1": "1",
  /** Physical pin 2: A2; passive. */
  "A2": "2",
}) {
  override schema = "Device:D_TVS_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Temperature dependent diode
 *
 * KiCad symbol: `Device:D_TemperatureDependent`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: temperature sensor diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TemperatureDependent extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_TemperatureDependent";
  override referencePrefix = "D";
}

/**
 * Temperature dependent diode, filled shape
 *
 * KiCad symbol: `Device:D_TemperatureDependent_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: temperature sensor diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_TemperatureDependent_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_TemperatureDependent_Filled";
  override referencePrefix = "D";
}

/**
 * Tunnel diode (Esaki diode)
 *
 * KiCad symbol: `Device:D_Tunnel`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: tunnel diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Tunnel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Tunnel";
  override referencePrefix = "D";
}

/**
 * Tunnel diode (Esaki diode), filled shape
 *
 * KiCad symbol: `Device:D_Tunnel_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: tunnel diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Tunnel_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Tunnel_Filled";
  override referencePrefix = "D";
}

/**
 * Unitunnel diode
 *
 * KiCad symbol: `Device:D_Unitunnel`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: unitunnel diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Unitunnel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Unitunnel";
  override referencePrefix = "D";
}

/**
 * Unitunnel diode, filled shape
 *
 * KiCad symbol: `Device:D_Unitunnel_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: unitunnel diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Unitunnel_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Unitunnel_Filled";
  override referencePrefix = "D";
}

/**
 * Zener diode
 *
 * KiCad symbol: `Device:D_Zener`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Zener";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_AKK`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_AKK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_AKK";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_AKK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_AKK_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_AKK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_AKK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_AKK_Split extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_AKK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 2
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KAK`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_KAK extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_KAK";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_KAK_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_KAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_KAK_Split extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_KAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KKA`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_KKA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_KKA";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_KKA_Parallel extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_KKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonAnode_KKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonAnode_KKA_Split extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Device:D_Zener_Dual_CommonAnode_KKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AAK`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_AAK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_AAK";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AAK_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_AAK_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_AAK_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AAK_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_AAK_Split extends Component.withPins({
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_AAK_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 2
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AKA`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_AKA extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_AKA";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AKA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_AKA_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_AKA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_AKA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_AKA_Split extends Component.withPins({
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_AKA_Split";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common cathode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_KAA`. Reference prefix: `D`.
 * Footprint filters: SOT*, SC*.
 * Keywords: diode zener dual.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_KAA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_KAA";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 3
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_KAA_Parallel`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_KAA_Parallel extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_KAA_Parallel";
  override referencePrefix = "D";
}

/**
 * Dual Zener diode, common anode on pin 1
 *
 * KiCad symbol: `Device:D_Zener_Dual_CommonCathode_KAA_Split`. Reference prefix: `D`.
 * Keywords: diode.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Dual_CommonCathode_KAA_Split extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
}) {
  override schema = "Device:D_Zener_Dual_CommonCathode_KAA_Split";
  override referencePrefix = "D";
}

/**
 * Zener diode, filled shape
 *
 * KiCad symbol: `Device:D_Zener_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Zener_Filled";
  override referencePrefix = "D";
}

/**
 * Zener diode, small symbol
 *
 * KiCad symbol: `Device:D_Zener_Small`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Small extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Zener_Small";
  override referencePrefix = "D";
}

/**
 * Zener diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:D_Zener_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: TO-???*, *_Diode_*, *SingleDiode*, D_*.
 * Keywords: diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_Zener_Small_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:D_Zener_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Delay line
 *
 * KiCad symbol: `Device:DelayLine`. Reference prefix: `L`.
 * Keywords: delay propagation retard impedance.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DelayLine extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: COMMUN; input. */
  "COMMUN": "3",
}) {
  override schema = "Device:DelayLine";
  override referencePrefix = "L";
}

/**
 * Earphone, polarized
 *
 * KiCad symbol: `Device:Earphone`. Reference prefix: `LS`.
 * Keywords: earphone speaker headphone.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Earphone extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Earphone";
  override referencePrefix = "LS";
}

/**
 * Electromagnetic actor
 *
 * KiCad symbol: `Device:ElectromagneticActor`. Reference prefix: `L`.
 * Footprint filters: Inductor_*, L_*.
 * Keywords: electromagnet coil inductor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ElectromagneticActor extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:ElectromagneticActor";
  override referencePrefix = "L";
}

/**
 * Ferrite bead
 *
 * KiCad symbol: `Device:FerriteBead`. Reference prefix: `FB`.
 * Footprint filters: Inductor_*, L_*, *Ferrite*.
 * Keywords: L ferrite bead inductor filter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FerriteBead extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:FerriteBead";
  override referencePrefix = "FB";
}

/**
 * Ferrite bead, small symbol
 *
 * KiCad symbol: `Device:FerriteBead_Small`. Reference prefix: `FB`.
 * Footprint filters: Inductor_*, L_*, *Ferrite*.
 * Keywords: L ferrite bead inductor filter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FerriteBead_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:FerriteBead_Small";
  override referencePrefix = "FB";
}

/**
 * EMI filter, single capacitor
 *
 * KiCad symbol: `Device:Filter_EMI_C`. Reference prefix: `C`.
 * @see http://www.murata.com/~/media/webrenewal/support/library/catalog/products/emc/emifil/c31e.ashx?la=en-gb
 * Keywords: EMI filter feedthrough capacitor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_C extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_CLC extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:Filter_EMI_CLC";
  override referencePrefix = "FL";
}

/**
 * EMI 2-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LL`. Reference prefix: `FL`.
 * Footprint filters: L_*, L_CommonMode*.
 * Keywords: EMI filter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_LL extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:Filter_EMI_LL";
  override referencePrefix = "FL";
}

/**
 * EMI 2-inductor common mode filter
 *
 * KiCad symbol: `Device:Filter_EMI_CommonMode`. Reference prefix: `FL`.
 * Footprint filters: L_*, L_CommonMode*.
 * Keywords: EMI common mode filter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_CommonMode extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_LCL extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:Filter_EMI_LCL";
  override referencePrefix = "FL";
}

/**
 * EMI 3-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LLL`. Reference prefix: `FL`.
 * Footprint filters: L*, L_CommonMode*.
 * Keywords: three phase common mode choke.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_LLL extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
  /** Physical pin 5: 5; passive. */
  "P5": "5",
  /** Physical pin 6: 6; passive. */
  "P6": "6",
}) {
  override schema = "Device:Filter_EMI_LLL";
  override referencePrefix = "FL";
}

/**
 * EMI 4-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LLLL`. Reference prefix: `FL`.
 * Footprint filters: L*, L_CommonMode*.
 * Keywords: common mode quadruple choke quad coil.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_LLLL extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
  /** Physical pin 5: 5; passive. */
  "P5": "5",
  /** Physical pin 6: 6; passive. */
  "P6": "6",
  /** Physical pin 7: 7; passive. */
  "P7": "7",
  /** Physical pin 8: 8; passive. */
  "P8": "8",
}) {
  override schema = "Device:Filter_EMI_LLLL";
  override referencePrefix = "FL";
}

/**
 * EMI 4-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LLLL_15263748`. Reference prefix: `FL`.
 * Footprint filters: L*, L_CommonMode*.
 * Keywords: common mode quadruple choke quad coil.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_LLLL_15263748 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
  /** Physical pin 5: 5; passive. */
  "P5": "5",
  /** Physical pin 6: 6; passive. */
  "P6": "6",
  /** Physical pin 7: 7; passive. */
  "P7": "7",
  /** Physical pin 8: 8; passive. */
  "P8": "8",
}) {
  override schema = "Device:Filter_EMI_LLLL_15263748";
  override referencePrefix = "FL";
}

/**
 * EMI 3-inductor filter
 *
 * KiCad symbol: `Device:Filter_EMI_LLL_162534`. Reference prefix: `FL`.
 * Footprint filters: L*, L_CommonMode*.
 * Keywords: three phase common mode choke.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_LLL_162534 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
  /** Physical pin 5: 5; passive. */
  "P5": "5",
  /** Physical pin 6: 6; passive. */
  "P6": "6",
}) {
  override schema = "Device:Filter_EMI_LLL_162534";
  override referencePrefix = "FL";
}

/**
 * EMI 2-inductor filter, pin-connections 1-4 and 2-3
 *
 * KiCad symbol: `Device:Filter_EMI_LL_1423`. Reference prefix: `FL`.
 * Footprint filters: Bourns*SRF0905*.
 * Keywords: EMI filter common-mode choke.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Filter_EMI_LL_1423 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:Filter_EMI_LL_1423";
  override referencePrefix = "FL";
}

/**
 * Frequency counter
 *
 * KiCad symbol: `Device:FrequencyCounter`. Reference prefix: `MES`.
 * Keywords: frequency counter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FrequencyCounter extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:FrequencyCounter";
  override referencePrefix = "MES";
}

/**
 * Fuse
 *
 * KiCad symbol: `Device:Fuse`. Reference prefix: `F`.
 * Footprint filters: *Fuse*.
 * Keywords: fuse.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fuse extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Fuse";
  override referencePrefix = "F";
}

/**
 * Polarized fuse
 *
 * KiCad symbol: `Device:Fuse_Polarized`. Reference prefix: `F`.
 * Footprint filters: *Fuse*.
 * Keywords: fuse.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fuse_Polarized extends Component.withPins({
  /** Physical pin 1: unnamed; power_in. */
  "P1": "1",
  /** Physical pin 2: unnamed; power_out. */
  "P2": "2",
}) {
  override schema = "Device:Fuse_Polarized";
  override referencePrefix = "F";
}

/**
 * Polarized fuse, small symbol
 *
 * KiCad symbol: `Device:Fuse_Polarized_Small`. Reference prefix: `F`.
 * Footprint filters: *Fuse*.
 * Keywords: fuse.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fuse_Polarized_Small extends Component.withPins({
  /** Physical pin 1: unnamed; power_in. */
  "P1": "1",
  /** Physical pin 2: unnamed; power_out. */
  "P2": "2",
}) {
  override schema = "Device:Fuse_Polarized_Small";
  override referencePrefix = "F";
}

/**
 * Fuse, small symbol
 *
 * KiCad symbol: `Device:Fuse_Small`. Reference prefix: `F`.
 * Footprint filters: *Fuse*.
 * Keywords: fuse.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fuse_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Fuse_Small";
  override referencePrefix = "F";
}

/**
 * Gas Discharge Tube with 2 Pins
 *
 * KiCad symbol: `Device:GDT_2Pin`. Reference prefix: `GD`.
 * Keywords: gdt.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GDT_2Pin extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:GDT_2Pin";
  override referencePrefix = "GD";
}

/**
 * Gas Discharge Tube with 3 Pins
 *
 * KiCad symbol: `Device:GDT_3Pin`. Reference prefix: `GD`.
 * Keywords: gdt.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GDT_3Pin extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:GDT_3Pin";
  override referencePrefix = "GD";
}

/**
 * Galvanometer
 *
 * KiCad symbol: `Device:Galvanometer`. Reference prefix: `MES`.
 * Keywords: galvanometer.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Galvanometer extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Galvanometer";
  override referencePrefix = "MES";
}

/**
 * Hall effect generator
 *
 * KiCad symbol: `Device:HallGenerator`. Reference prefix: `HG`.
 * Keywords: Hall generator magnet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HallGenerator extends Component.withPins({
  /** Physical pin 1: U1; passive. */
  "U1": "1",
  /** Physical pin 2: U2; passive. */
  "U2": "2",
  /** Physical pin 3: UH1; passive. */
  "UH1": "3",
  /** Physical pin 4: UH2; passive. */
  "UH2": "4",
}) {
  override schema = "Device:HallGenerator";
  override referencePrefix = "HG";
}

/**
 * Resistive heater
 *
 * KiCad symbol: `Device:Heater`. Reference prefix: `R`.
 * Keywords: heater R resistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Heater extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Heater";
  override referencePrefix = "R";
}

/**
 * Inductor
 *
 * KiCad symbol: `Device:L`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
}) {
  override schema = "Device:L";
  override referencePrefix = "L";
}

/**
 * Light emitting diode
 *
 * KiCad symbol: `Device:LED`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:LED";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, rotated by 45°
 *
 * KiCad symbol: `Device:LED_45deg`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_45deg extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:LED_45deg";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, rotated by 45°
 *
 * KiCad symbol: `Device:LED_45deg_Filled`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_45deg_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:LED_45deg_Filled";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/blue/green/red
 *
 * KiCad symbol: `Device:LED_ABGR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_ABGR extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: BK; passive. */
  "BK": "2",
  /** Physical pin 3: GK; passive. */
  "GK": "3",
  /** Physical pin 4: RK; passive. */
  "RK": "4",
}) {
  override schema = "Device:LED_ABGR";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/blue/red/green
 *
 * KiCad symbol: `Device:LED_ABRG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_ABRG extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: BK; passive. */
  "BK": "2",
  /** Physical pin 3: RK; passive. */
  "RK": "3",
  /** Physical pin 4: GK; passive. */
  "GK": "4",
}) {
  override schema = "Device:LED_ABRG";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/green/blue/red
 *
 * KiCad symbol: `Device:LED_AGBR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_AGBR extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: RK; passive. */
  "RK": "4",
}) {
  override schema = "Device:LED_AGBR";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/green/red/blue
 *
 * KiCad symbol: `Device:LED_AGRB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_AGRB extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: RK; passive. */
  "RK": "3",
  /** Physical pin 4: BK; passive. */
  "BK": "4",
}) {
  override schema = "Device:LED_AGRB";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/red/blue/green
 *
 * KiCad symbol: `Device:LED_ARBG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_ARBG extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: RK; passive. */
  "RK": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: GK; passive. */
  "GK": "4",
}) {
  override schema = "Device:LED_ARBG";
  override referencePrefix = "D";
}

/**
 * RGB LED, anode/red/green/blue
 *
 * KiCad symbol: `Device:LED_ARGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_ARGB extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: RK; passive. */
  "RK": "2",
  /** Physical pin 3: GK; passive. */
  "GK": "3",
  /** Physical pin 4: BK; passive. */
  "BK": "4",
}) {
  override schema = "Device:LED_ARGB";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/anode/green/red
 *
 * KiCad symbol: `Device:LED_BAGR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BAGR extends Component.withPins({
  /** Physical pin 1: BK; passive. */
  "BK": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: GK; passive. */
  "GK": "3",
  /** Physical pin 4: RK; passive. */
  "RK": "4",
}) {
  override schema = "Device:LED_BAGR";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/anode/red/green
 *
 * KiCad symbol: `Device:LED_BARG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BARG extends Component.withPins({
  /** Physical pin 1: BK; passive. */
  "BK": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: RK; passive. */
  "RK": "3",
  /** Physical pin 4: GK; passive. */
  "GK": "4",
}) {
  override schema = "Device:LED_BARG";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/green/anode/red
 *
 * KiCad symbol: `Device:LED_BGAR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BGAR extends Component.withPins({
  /** Physical pin 1: BK; passive. */
  "BK": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: RK; passive. */
  "RK": "4",
}) {
  override schema = "Device:LED_BGAR";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/green/cathode/red
 *
 * KiCad symbol: `Device:LED_BGKR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BGKR extends Component.withPins({
  /** Physical pin 1: BA; passive. */
  "BA": "1",
  /** Physical pin 2: GA; passive. */
  "GA": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 4: RA; passive. */
  "RA": "4",
}) {
  override schema = "Device:LED_BGKR";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/green/red/anode
 *
 * KiCad symbol: `Device:LED_BGRA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BGRA extends Component.withPins({
  /** Physical pin 1: BK; passive. */
  "BK": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: RK; passive. */
  "RK": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
}) {
  override schema = "Device:LED_BGRA";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/green/red/cathode
 *
 * KiCad symbol: `Device:LED_BGRK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BGRK extends Component.withPins({
  /** Physical pin 1: BA; passive. */
  "BA": "1",
  /** Physical pin 2: GA; passive. */
  "GA": "2",
  /** Physical pin 3: RA; passive. */
  "RA": "3",
  /** Physical pin 4: K; passive. */
  "K": "4",
}) {
  override schema = "Device:LED_BGRK";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/cathode/green/red
 *
 * KiCad symbol: `Device:LED_BKGR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BKGR extends Component.withPins({
  /** Physical pin 1: BA; passive. */
  "BA": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: GA; passive. */
  "GA": "3",
  /** Physical pin 4: RA; passive. */
  "RA": "4",
}) {
  override schema = "Device:LED_BKGR";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/cathode/red/green
 *
 * KiCad symbol: `Device:LED_BKRG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BKRG extends Component.withPins({
  /** Physical pin 1: BA; passive. */
  "BA": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: RA; passive. */
  "RA": "3",
  /** Physical pin 4: GA; passive. */
  "GA": "4",
}) {
  override schema = "Device:LED_BKRG";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/red/anode/green
 *
 * KiCad symbol: `Device:LED_BRAG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BRAG extends Component.withPins({
  /** Physical pin 1: BK; passive. */
  "BK": "1",
  /** Physical pin 2: RK; passive. */
  "RK": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: GK; passive. */
  "GK": "4",
}) {
  override schema = "Device:LED_BRAG";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/red/green/anode
 *
 * KiCad symbol: `Device:LED_BRGA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BRGA extends Component.withPins({
  /** Physical pin 1: BK; passive. */
  "BK": "1",
  /** Physical pin 2: RK; passive. */
  "RK": "2",
  /** Physical pin 3: GK; passive. */
  "GK": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
}) {
  override schema = "Device:LED_BRGA";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/red/green/cathode
 *
 * KiCad symbol: `Device:LED_BRGK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BRGK extends Component.withPins({
  /** Physical pin 1: BA; passive. */
  "BA": "1",
  /** Physical pin 2: RA; passive. */
  "RA": "2",
  /** Physical pin 3: GA; passive. */
  "GA": "3",
  /** Physical pin 4: K; passive. */
  "K": "4",
}) {
  override schema = "Device:LED_BRGK";
  override referencePrefix = "D";
}

/**
 * RGB LED, blue/red/cathode/green
 *
 * KiCad symbol: `Device:LED_BRKG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_BRKG extends Component.withPins({
  /** Physical pin 1: BA; passive. */
  "BA": "1",
  /** Physical pin 2: RA; passive. */
  "RA": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 4: GA; passive. */
  "GA": "4",
}) {
  override schema = "Device:LED_BRKG";
  override referencePrefix = "D";
}

/**
 * Dual LED, common cathode on pin 3
 *
 * KiCad symbol: `Device:LED_Dual_AAK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_AAK extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A2; input. */
  "A2": "2",
  /** Physical pin 3: K; input. */
  "K": "3",
}) {
  override schema = "Device:LED_Dual_AAK";
  override referencePrefix = "D";
}

/**
 * Dual LED, cathodes on pins 3 and 4
 *
 * KiCad symbol: `Device:LED_Dual_AAKK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_AAKK extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A2; input. */
  "A2": "2",
  /** Physical pin 3: K1; input. */
  "K1": "3",
  /** Physical pin 4: K2; input. */
  "K2": "4",
}) {
  override schema = "Device:LED_Dual_AAKK";
  override referencePrefix = "D";
}

/**
 * Dual LED, common cathode on pin 2
 *
 * KiCad symbol: `Device:LED_Dual_AKA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_AKA extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: K; input. */
  "K": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
}) {
  override schema = "Device:LED_Dual_AKA";
  override referencePrefix = "D";
}

/**
 * Dual LED, cathodes on pins 2 and 4
 *
 * KiCad symbol: `Device:LED_Dual_AKAK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_AKAK extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: K1; input. */
  "K1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: K2; input. */
  "K2": "4",
}) {
  override schema = "Device:LED_Dual_AKAK";
  override referencePrefix = "D";
}

/**
 * Dual LED, cathodes on pins 2 and 3
 *
 * KiCad symbol: `Device:LED_Dual_AKKA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_AKKA extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: K1; input. */
  "K1": "2",
  /** Physical pin 3: K2; input. */
  "K2": "3",
  /** Physical pin 4: A2; input. */
  "A2": "4",
}) {
  override schema = "Device:LED_Dual_AKKA";
  override referencePrefix = "D";
}

/**
 * Dual LED, bidirectional
 *
 * KiCad symbol: `Device:LED_Dual_Bidirectional`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_Bidirectional extends Component.withPins({
  /** Physical pin 1: KA; input. */
  "KA": "1",
  /** Physical pin 2: AK; input. */
  "AK": "2",
}) {
  override schema = "Device:LED_Dual_Bidirectional";
  override referencePrefix = "D";
}

/**
 * Dual LED, common anode on pin 2
 *
 * KiCad symbol: `Device:LED_Dual_KAK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_KAK extends Component.withPins({
  /** Physical pin 1: K1; input. */
  "K1": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: K2; input. */
  "K2": "3",
}) {
  override schema = "Device:LED_Dual_KAK";
  override referencePrefix = "D";
}

/**
 * Dual LED, cathodes on pins 1 and 3
 *
 * KiCad symbol: `Device:LED_Dual_KAKA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_KAKA extends Component.withPins({
  /** Physical pin 1: K1; input. */
  "K1": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: K2; input. */
  "K2": "3",
  /** Physical pin 4: A2; input. */
  "A2": "4",
}) {
  override schema = "Device:LED_Dual_KAKA";
  override referencePrefix = "D";
}

/**
 * Dual LED, common anode on pin 3
 *
 * KiCad symbol: `Device:LED_Dual_KKA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode bicolor dual.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Dual_KKA extends Component.withPins({
  /** Physical pin 1: K1; input. */
  "K1": "1",
  /** Physical pin 2: K2; input. */
  "K2": "2",
  /** Physical pin 3: A; input. */
  "A": "3",
}) {
  override schema = "Device:LED_Dual_KKA";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, filled shape
 *
 * KiCad symbol: `Device:LED_Filled`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:LED_Filled";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/anode/blue/red
 *
 * KiCad symbol: `Device:LED_GABR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GABR extends Component.withPins({
  /** Physical pin 1: GK; passive. */
  "GK": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: RK; passive. */
  "RK": "4",
}) {
  override schema = "Device:LED_GABR";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/anode/red/blue
 *
 * KiCad symbol: `Device:LED_GARB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GARB extends Component.withPins({
  /** Physical pin 1: GK; passive. */
  "GK": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: RK; passive. */
  "RK": "3",
  /** Physical pin 4: BK; passive. */
  "BK": "4",
}) {
  override schema = "Device:LED_GARB";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/blue/anode/red
 *
 * KiCad symbol: `Device:LED_GBAR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GBAR extends Component.withPins({
  /** Physical pin 1: GK; passive. */
  "GK": "1",
  /** Physical pin 2: BK; passive. */
  "BK": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: RK; passive. */
  "RK": "4",
}) {
  override schema = "Device:LED_GBAR";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/blue/cathode/red
 *
 * KiCad symbol: `Device:LED_GBKR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GBKR extends Component.withPins({
  /** Physical pin 1: GA; passive. */
  "GA": "1",
  /** Physical pin 2: BA; passive. */
  "BA": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 4: RA; passive. */
  "RA": "4",
}) {
  override schema = "Device:LED_GBKR";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/blue/red/anode
 *
 * KiCad symbol: `Device:LED_GBRA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GBRA extends Component.withPins({
  /** Physical pin 1: GK; passive. */
  "GK": "1",
  /** Physical pin 2: BK; passive. */
  "BK": "2",
  /** Physical pin 3: RK; passive. */
  "RK": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
}) {
  override schema = "Device:LED_GBRA";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/blue/red/cathode
 *
 * KiCad symbol: `Device:LED_GBRK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GBRK extends Component.withPins({
  /** Physical pin 1: GA; passive. */
  "GA": "1",
  /** Physical pin 2: BA; passive. */
  "BA": "2",
  /** Physical pin 3: RA; passive. */
  "RA": "3",
  /** Physical pin 4: K; passive. */
  "K": "4",
}) {
  override schema = "Device:LED_GBRK";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/cathode/blue/red
 *
 * KiCad symbol: `Device:LED_GKBR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GKBR extends Component.withPins({
  /** Physical pin 1: GA; passive. */
  "GA": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: BA; passive. */
  "BA": "3",
  /** Physical pin 4: RA; passive. */
  "RA": "4",
}) {
  override schema = "Device:LED_GKBR";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/cathode/red/blue
 *
 * KiCad symbol: `Device:LED_GKRB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GKRB extends Component.withPins({
  /** Physical pin 1: GA; passive. */
  "GA": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: RA; passive. */
  "RA": "3",
  /** Physical pin 4: BA; passive. */
  "BA": "4",
}) {
  override schema = "Device:LED_GKRB";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/red/anode/blue
 *
 * KiCad symbol: `Device:LED_GRAB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GRAB extends Component.withPins({
  /** Physical pin 1: GK; passive. */
  "GK": "1",
  /** Physical pin 2: RK; passive. */
  "RK": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: BK; passive. */
  "BK": "4",
}) {
  override schema = "Device:LED_GRAB";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/red/blue/anode
 *
 * KiCad symbol: `Device:LED_GRBA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GRBA extends Component.withPins({
  /** Physical pin 1: GK; passive. */
  "GK": "1",
  /** Physical pin 2: RK; passive. */
  "RK": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
}) {
  override schema = "Device:LED_GRBA";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/red/blue/cathode
 *
 * KiCad symbol: `Device:LED_GRBK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GRBK extends Component.withPins({
  /** Physical pin 1: GA; passive. */
  "GA": "1",
  /** Physical pin 2: RA; passive. */
  "RA": "2",
  /** Physical pin 3: BA; passive. */
  "BA": "3",
  /** Physical pin 4: K; passive. */
  "K": "4",
}) {
  override schema = "Device:LED_GRBK";
  override referencePrefix = "D";
}

/**
 * RGB LED, green/red/cathode/blue
 *
 * KiCad symbol: `Device:LED_GRKB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_GRKB extends Component.withPins({
  /** Physical pin 1: GA; passive. */
  "GA": "1",
  /** Physical pin 2: RA; passive. */
  "RA": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 4: BA; passive. */
  "BA": "4",
}) {
  override schema = "Device:LED_GRKB";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/blue/green/red
 *
 * KiCad symbol: `Device:LED_KBGR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_KBGR extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: BA; passive. */
  "BA": "2",
  /** Physical pin 3: GA; passive. */
  "GA": "3",
  /** Physical pin 4: RA; passive. */
  "RA": "4",
}) {
  override schema = "Device:LED_KBGR";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/blue/red/green
 *
 * KiCad symbol: `Device:LED_KBRG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_KBRG extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: BA; passive. */
  "BA": "2",
  /** Physical pin 3: RA; passive. */
  "RA": "3",
  /** Physical pin 4: GA; passive. */
  "GA": "4",
}) {
  override schema = "Device:LED_KBRG";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/green/blue/red
 *
 * KiCad symbol: `Device:LED_KGBR`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_KGBR extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: GA; passive. */
  "GA": "2",
  /** Physical pin 3: BA; passive. */
  "BA": "3",
  /** Physical pin 4: RA; passive. */
  "RA": "4",
}) {
  override schema = "Device:LED_KGBR";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/green/red/blue
 *
 * KiCad symbol: `Device:LED_KGRB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_KGRB extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: GA; passive. */
  "GA": "2",
  /** Physical pin 3: RA; passive. */
  "RA": "3",
  /** Physical pin 4: BA; passive. */
  "BA": "4",
}) {
  override schema = "Device:LED_KGRB";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/red/blue/green
 *
 * KiCad symbol: `Device:LED_KRBG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_KRBG extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: RA; passive. */
  "RA": "2",
  /** Physical pin 3: BA; passive. */
  "BA": "3",
  /** Physical pin 4: GA; passive. */
  "GA": "4",
}) {
  override schema = "Device:LED_KRBG";
  override referencePrefix = "D";
}

/**
 * RGB LED, cathode/red/green/blue
 *
 * KiCad symbol: `Device:LED_KRGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_KRGB extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: RA; passive. */
  "RA": "2",
  /** Physical pin 3: GA; passive. */
  "GA": "3",
  /** Physical pin 4: BA; passive. */
  "BA": "4",
}) {
  override schema = "Device:LED_KRGB";
  override referencePrefix = "D";
}

/**
 * Light emitting diode with pad
 *
 * KiCad symbol: `Device:LED_Pad`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode pad.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Pad extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "Device:LED_Pad";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/anode/blue/green
 *
 * KiCad symbol: `Device:LED_RABG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RABG extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: GK; passive. */
  "GK": "4",
}) {
  override schema = "Device:LED_RABG";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/anode/green/blue
 *
 * KiCad symbol: `Device:LED_RAGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RAGB extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: GK; passive. */
  "GK": "3",
  /** Physical pin 4: BK; passive. */
  "BK": "4",
}) {
  override schema = "Device:LED_RAGB";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/blue/anode/green
 *
 * KiCad symbol: `Device:LED_RBAG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RBAG extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: BK; passive. */
  "BK": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: GK; passive. */
  "GK": "4",
}) {
  override schema = "Device:LED_RBAG";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/blue/green/anode
 *
 * KiCad symbol: `Device:LED_RBGA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RBGA extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: BK; passive. */
  "BK": "2",
  /** Physical pin 3: GK; passive. */
  "GK": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
}) {
  override schema = "Device:LED_RBGA";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/blue/green/cathode
 *
 * KiCad symbol: `Device:LED_RBGK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RBGK extends Component.withPins({
  /** Physical pin 1: RA; passive. */
  "RA": "1",
  /** Physical pin 2: BA; passive. */
  "BA": "2",
  /** Physical pin 3: GA; passive. */
  "GA": "3",
  /** Physical pin 4: K; passive. */
  "K": "4",
}) {
  override schema = "Device:LED_RBGK";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/blue/cathode/green
 *
 * KiCad symbol: `Device:LED_RBKG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RBKG extends Component.withPins({
  /** Physical pin 1: RA; passive. */
  "RA": "1",
  /** Physical pin 2: BA; passive. */
  "BA": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 4: GA; passive. */
  "GA": "4",
}) {
  override schema = "Device:LED_RBKG";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/green/anode/blue
 *
 * KiCad symbol: `Device:LED_RGAB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RGAB extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: BK; passive. */
  "BK": "4",
}) {
  override schema = "Device:LED_RGAB";
  override referencePrefix = "D";
}

/**
 * RGB LED, 6 pin package
 *
 * KiCad symbol: `Device:LED_RGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RGB extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: BA; passive. */
  "BA": "4",
  /** Physical pin 5: GA; passive. */
  "GA": "5",
  /** Physical pin 6: RA; passive. */
  "RA": "6",
}) {
  override schema = "Device:LED_RGB";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/green/blue/anode
 *
 * KiCad symbol: `Device:LED_RGBA`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RGBA extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
}) {
  override schema = "Device:LED_RGBA";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/green/blue/cathode
 *
 * KiCad symbol: `Device:LED_RGBK`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RGBK extends Component.withPins({
  /** Physical pin 1: RA; passive. */
  "RA": "1",
  /** Physical pin 2: GA; passive. */
  "GA": "2",
  /** Physical pin 3: BA; passive. */
  "BA": "3",
  /** Physical pin 4: K; passive. */
  "K": "4",
}) {
  override schema = "Device:LED_RGBK";
  override referencePrefix = "D";
}

/**
 * RGB LED, 6 pin package with exposed pad
 *
 * KiCad symbol: `Device:LED_RGB_EP`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RGB_EP extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: BA; passive. */
  "BA": "4",
  /** Physical pin 5: GA; passive. */
  "GA": "5",
  /** Physical pin 6: RA; passive. */
  "RA": "6",
  /** Physical pin 7: PAD; passive. */
  "PAD": "7",
}) {
  override schema = "Device:LED_RGB_EP";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/green/cathode/blue
 *
 * KiCad symbol: `Device:LED_RGKB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RGKB extends Component.withPins({
  /** Physical pin 1: RA; passive. */
  "RA": "1",
  /** Physical pin 2: GA; passive. */
  "GA": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 4: BA; passive. */
  "BA": "4",
}) {
  override schema = "Device:LED_RGKB";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/cathode/blue/green
 *
 * KiCad symbol: `Device:LED_RKBG`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RKBG extends Component.withPins({
  /** Physical pin 1: RA; passive. */
  "RA": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: BA; passive. */
  "BA": "3",
  /** Physical pin 4: GA; passive. */
  "GA": "4",
}) {
  override schema = "Device:LED_RKBG";
  override referencePrefix = "D";
}

/**
 * RGB LED, red/cathode/green/blue
 *
 * KiCad symbol: `Device:LED_RKGB`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED RGB diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_RKGB extends Component.withPins({
  /** Physical pin 1: RA; passive. */
  "RA": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: GA; passive. */
  "GA": "3",
  /** Physical pin 4: BA; passive. */
  "BA": "4",
}) {
  override schema = "Device:LED_RKGB";
  override referencePrefix = "D";
}

/**
 * Several LEDs in series
 *
 * KiCad symbol: `Device:LED_Series`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Series extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:LED_Series";
  override referencePrefix = "D";
}

/**
 * Several LEDs in series with exposed pad
 *
 * KiCad symbol: `Device:LED_Series_Pad`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode pad.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Series_Pad extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "Device:LED_Series_Pad";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, small symbol
 *
 * KiCad symbol: `Device:LED_Small`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode light-emitting-diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Small extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:LED_Small";
  override referencePrefix = "D";
}

/**
 * Light emitting diode, small symbol, filled shape
 *
 * KiCad symbol: `Device:LED_Small_Filled`. Reference prefix: `D`.
 * Footprint filters: LED*, LED_SMD:*, LED_THT:*.
 * Keywords: LED diode light-emitting-diode.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Small_Filled extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Device:LED_Small_Filled";
  override referencePrefix = "D";
}

/**
 * Inductor, rotated by 45°
 *
 * KiCad symbol: `Device:L_45deg`. Reference prefix: `L`.
 * Footprint filters: L_*, Choke_*, Inductor_*, *Coil*.
 * Keywords: inductor choke coil reactor magnetic inductor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_45deg extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:L_45deg";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_1243 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_1324 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_1342 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor
 *
 * KiCad symbol: `Device:L_Coupled_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_1423 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_1423";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_Small";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_Small_1243 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_Small_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_Small_1324 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_Small_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_Small_1342 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_Small_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor, small symbol
 *
 * KiCad symbol: `Device:L_Coupled_Small_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Coupled_Small_1423 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Coupled_Small_1423";
  override referencePrefix = "L";
}

/**
 * Inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
}) {
  override schema = "Device:L_Ferrite";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_1243 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_1324 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_1342 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_1423 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_1423";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_Small";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_Small_1243 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_Small_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_Small_1324 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_Small_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_Small_1342 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_Small_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Coupled_Small_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Coupled_Small_1423 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Ferrite_Coupled_Small_1423";
  override referencePrefix = "L";
}

/**
 * Inductor with ferrite core, small symbol
 *
 * KiCad symbol: `Device:L_Ferrite_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Ferrite_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:L_Ferrite_Small";
  override referencePrefix = "L";
}

/**
 * Inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
}) {
  override schema = "Device:L_Iron";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_1243 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_1324 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_1342 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core
 *
 * KiCad symbol: `Device:L_Iron_Coupled_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_1423 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_1423";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_Small";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small_1243`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_Small_1243 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_Small_1243";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small_1324`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_Small_1324 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_Small_1324";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small_1342`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_Small_1342 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_Small_1342";
  override referencePrefix = "L";
}

/**
 * Coupled inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Coupled_Small_1423`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic coupled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Coupled_Small_1423 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  override schema = "Device:L_Iron_Coupled_Small_1423";
  override referencePrefix = "L";
}

/**
 * Inductor with iron core, small symbol
 *
 * KiCad symbol: `Device:L_Iron_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Iron_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:L_Iron_Small";
  override referencePrefix = "L";
}

/**
 * 4 inductor network, parallel topology
 *
 * KiCad symbol: `Device:L_Pack04`. Reference prefix: `LN`.
 * Keywords: L network parallel topology.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Pack04 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: unnamed; passive. */
  "P7": "7",
  /** Physical pin 8: unnamed; passive. */
  "P8": "8",
}) {
  override schema = "Device:L_Pack04";
  override referencePrefix = "LN";
}

/**
 * Inductor, small symbol
 *
 * KiCad symbol: `Device:L_Small`. Reference prefix: `L`.
 * Footprint filters: Choke_*, *Coil*, Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:L_Small";
  override referencePrefix = "L";
}

/**
 * Variable inductor
 *
 * KiCad symbol: `Device:L_Trim`. Reference prefix: `L`.
 * Footprint filters: Inductor_*, L_*.
 * Keywords: inductor choke coil reactor magnetic.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L_Trim extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
}) {
  override schema = "Device:L_Trim";
  override referencePrefix = "L";
}

/**
 * Lamp
 *
 * KiCad symbol: `Device:Lamp`. Reference prefix: `LA`.
 * Keywords: lamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Lamp extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Lamp";
  override referencePrefix = "LA";
}

/**
 * Flash lamp tube
 *
 * KiCad symbol: `Device:Lamp_Flash`. Reference prefix: `LA`.
 * Keywords: flash lamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Lamp_Flash extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:Lamp_Flash";
  override referencePrefix = "LA";
}

/**
 * Neon lamp
 *
 * KiCad symbol: `Device:Lamp_Neon`. Reference prefix: `NE`.
 * Keywords: neon lamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Lamp_Neon extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Lamp_Neon";
  override referencePrefix = "NE";
}

/**
 * Memristor
 *
 * KiCad symbol: `Device:Memristor`. Reference prefix: `MR`.
 * Keywords: memristor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Memristor extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Memristor";
  override referencePrefix = "MR";
}

/**
 * Microphone
 *
 * KiCad symbol: `Device:Microphone`. Reference prefix: `MK`.
 * Keywords: microphone.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Microphone extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Microphone";
  override referencePrefix = "MK";
}

/**
 * Condenser microphone
 *
 * KiCad symbol: `Device:Microphone_Condenser`. Reference prefix: `MK`.
 * Keywords: capacitance condenser microphone.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Microphone_Condenser extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Microphone_Condenser";
  override referencePrefix = "MK";
}

/**
 * Crystal microphone
 *
 * KiCad symbol: `Device:Microphone_Crystal`. Reference prefix: `MK`.
 * Keywords: microphone crystal.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Microphone_Crystal extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Microphone_Crystal";
  override referencePrefix = "MK";
}

/**
 * Ultrasound receiver
 *
 * KiCad symbol: `Device:Microphone_Ultrasound`. Reference prefix: `MK`.
 * Keywords: microphone ultrasound crystal.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Microphone_Ultrasound extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Microphone_Ultrasound";
  override referencePrefix = "MK";
}

/**
 * Net tie, 2 pins
 *
 * KiCad symbol: `Device:NetTie_2`. Reference prefix: `NT`.
 * Footprint filters: Net*Tie*.
 * Keywords: net tie short.
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class NetTie_2 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class NetTie_3 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class NetTie_3_Tee extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class NetTie_4 extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
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
 * Units: 1.
 * Included in BOM: no.
 * Placed on board: yes.
 */
export class NetTie_4_Cross extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Device:NetTie_4_Cross";
  override referencePrefix = "NT";
}

/**
 * Ohmmeter
 *
 * KiCad symbol: `Device:Ohmmeter`. Reference prefix: `MES`.
 * Keywords: ohmmeter resistance.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Ohmmeter extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Ohmmeter";
  override referencePrefix = "MES";
}

/**
 * Oscilloscope
 *
 * KiCad symbol: `Device:Oscilloscope`. Reference prefix: `MES`.
 * Keywords: oscilloscope.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Oscilloscope extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Oscilloscope";
  override referencePrefix = "MES";
}

/**
 * Peltier element, thermoelectric cooler
 *
 * KiCad symbol: `Device:PeltierElement`. Reference prefix: `PE`.
 * Keywords: Peltier TEC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PeltierElement extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:PeltierElement";
  override referencePrefix = "PE";
}

/**
 * Resettable fuse, polymeric positive temperature coefficient
 *
 * KiCad symbol: `Device:Polyfuse`. Reference prefix: `F`.
 * Footprint filters: *polyfuse*, *PTC*.
 * Keywords: resettable fuse PTC PPTC polyfuse polyswitch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Polyfuse extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Polyfuse";
  override referencePrefix = "F";
}

/**
 * Resettable fuse, polymeric positive temperature coefficient, small symbol
 *
 * KiCad symbol: `Device:Polyfuse_Small`. Reference prefix: `F`.
 * Footprint filters: *polyfuse*, *PTC*.
 * Keywords: resettable fuse PTC PPTC polyfuse polyswitch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Polyfuse_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Polyfuse_Small";
  override referencePrefix = "F";
}

/**
 * N-IGBT transistor, collector/emitter/gate
 *
 * KiCad symbol: `Device:Q_NIGBT_CEG`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NIGBT_CEG extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
}) {
  override schema = "Device:Q_NIGBT_CEG";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, collector/gate/emitter
 *
 * KiCad symbol: `Device:Q_NIGBT_CGE`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NIGBT_CGE extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: E; passive. */
  "E": "3",
}) {
  override schema = "Device:Q_NIGBT_CGE";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, emitter/collector/gate
 *
 * KiCad symbol: `Device:Q_NIGBT_ECG`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NIGBT_ECG extends Component.withPins({
  /** Physical pin 1: E; passive. */
  "E": "1",
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
}) {
  override schema = "Device:Q_NIGBT_ECG";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, emitter/collector/gate, collector connected to mounting plane
 *
 * KiCad symbol: `Device:Q_NIGBT_ECGC`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NIGBT_ECGC extends Component.withPins({
  /** Physical pin 1: E; passive. */
  "E": "1",
  /** Physical pin 2: C; passive. */
  "C_2": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
  /** Physical pin 4: C; passive. */
  "C_4": "4",
}) {
  override schema = "Device:Q_NIGBT_ECGC";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, emitter/gate/collector
 *
 * KiCad symbol: `Device:Q_NIGBT_EGC`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NIGBT_EGC extends Component.withPins({
  /** Physical pin 1: E; passive. */
  "E": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
}) {
  override schema = "Device:Q_NIGBT_EGC";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, gate/collector/emitter
 *
 * KiCad symbol: `Device:Q_NIGBT_GCE`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NIGBT_GCE extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 3: E; passive. */
  "E": "3",
}) {
  override schema = "Device:Q_NIGBT_GCE";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, gate/collector/emitter, collector connected to mounting plane
 *
 * KiCad symbol: `Device:Q_NIGBT_GCEC`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NIGBT_GCEC extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: C; passive. */
  "C_2": "2",
  /** Physical pin 3: E; passive. */
  "E": "3",
  /** Physical pin 4: C; passive. */
  "C_4": "4",
}) {
  override schema = "Device:Q_NIGBT_GCEC";
  override referencePrefix = "Q";
}

/**
 * N-IGBT transistor, gate/emitter/collector
 *
 * KiCad symbol: `Device:Q_NIGBT_GEC`. Reference prefix: `Q`.
 * Keywords: transistor IGBT N-IGBT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NIGBT_GEC extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
}) {
  override schema = "Device:Q_NIGBT_GEC";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, drain/gate/source
 *
 * KiCad symbol: `Device:Q_NJFET_DGS`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NJFET_DGS extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
}) {
  override schema = "Device:Q_NJFET_DGS";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, drain/source/gate
 *
 * KiCad symbol: `Device:Q_NJFET_DSG`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NJFET_DSG extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: S; passive. */
  "S": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
}) {
  override schema = "Device:Q_NJFET_DSG";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, gate/drain/source
 *
 * KiCad symbol: `Device:Q_NJFET_GDS`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NJFET_GDS extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
}) {
  override schema = "Device:Q_NJFET_GDS";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, gate/source/drain
 *
 * KiCad symbol: `Device:Q_NJFET_GSD`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NJFET_GSD extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: S; passive. */
  "S": "2",
  /** Physical pin 3: D; passive. */
  "D": "3",
}) {
  override schema = "Device:Q_NJFET_GSD";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, source/drain/gate
 *
 * KiCad symbol: `Device:Q_NJFET_SDG`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NJFET_SDG extends Component.withPins({
  /** Physical pin 1: S; passive. */
  "S": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
}) {
  override schema = "Device:Q_NJFET_SDG";
  override referencePrefix = "Q";
}

/**
 * N-JFET transistor, source/gate/drain
 *
 * KiCad symbol: `Device:Q_NJFET_SGD`. Reference prefix: `Q`.
 * Keywords: transistor NJFET N-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NJFET_SGD extends Component.withPins({
  /** Physical pin 1: S; passive. */
  "S": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: D; passive. */
  "D": "3",
}) {
  override schema = "Device:Q_NJFET_SGD";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor
 *
 * KiCad symbol: `Device:Q_NMOS`. Reference prefix: `Q`.
 * Keywords: NMOS N-MOS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NMOS extends Component.withPins({
  /** Physical pin D: D; passive. */
  "PD": "D",
  /** Physical pin G: G; input. */
  "PG": "G",
  /** Physical pin S: S; passive. */
  "PS": "S",
}) {
  override schema = "Device:Q_NMOS";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode N-channel MOSFET
 *
 * KiCad symbol: `Device:Q_NMOS_Depletion`. Reference prefix: `Q`.
 * Keywords: NMOS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NMOS_Depletion extends Component.withPins({
  /** Physical pin D: D; passive. */
  "PD": "D",
  /** Physical pin G: G; input. */
  "PG": "G",
  /** Physical pin S: S; passive. */
  "PS": "S",
}) {
  override schema = "Device:Q_NMOS_Depletion";
  override referencePrefix = "Q";
}

/**
 * NPN bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_NPN`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NPN extends Component.withPins({
  /** Physical pin B: B; input. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin E: E; passive. */
  "PE": "E",
}) {
  override schema = "Device:Q_NPN";
  override referencePrefix = "Q";
}

/**
 * NPN bias resistor bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_NPN_BRT`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NPN_BRT extends Component.withPins({
  /** Physical pin B: B; input. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin E: E; passive. */
  "PE": "E",
}) {
  override schema = "Device:Q_NPN_BRT";
  override referencePrefix = "Q";
}

/**
 * NPN gate resistor bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_NPN_BRT_No_R2`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NPN_BRT_No_R2 extends Component.withPins({
  /** Physical pin B: B; input. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin E: E; passive. */
  "PE": "E",
}) {
  override schema = "Device:Q_NPN_BRT_No_R2";
  override referencePrefix = "Q";
}

/**
 * NPN bipolar junction transistors, current mirror configuration
 *
 * KiCad symbol: `Device:Q_NPN_CurrentMirror`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NPN_CurrentMirror extends Component.withPins({
  /** Physical pin C1: C1; passive. */
  "PC1": "C1",
  /** Physical pin C2: C2; passive. */
  "PC2": "C2",
  /** Physical pin E1: E1; passive. */
  "PE1": "E1",
  /** Physical pin E2: E2; passive. */
  "PE2": "E2",
}) {
  override schema = "Device:Q_NPN_CurrentMirror";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington  bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_NPN_Darlington`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NPN_Darlington extends Component.withPins({
  /** Physical pin B: B; input. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin E: E; passive. */
  "PE": "E",
}) {
  override schema = "Device:Q_NPN_Darlington";
  override referencePrefix = "Q";
}

/**
 * N-Type unijunction transistor
 *
 * KiCad symbol: `Device:Q_NUJT_BEB`. Reference prefix: `Q`.
 * Keywords: transistor UJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_NUJT_BEB extends Component.withPins({
  /** Physical pin 1: B2; passive. */
  "B2": "1",
  /** Physical pin 2: E; input. */
  "E": "2",
  /** Physical pin 3: B1; passive. */
  "B1": "3",
}) {
  override schema = "Device:Q_NUJT_BEB";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, drain/gate/source
 *
 * KiCad symbol: `Device:Q_PJFET_DGS`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PJFET_DGS extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
}) {
  override schema = "Device:Q_PJFET_DGS";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, drain/source/gate
 *
 * KiCad symbol: `Device:Q_PJFET_DSG`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PJFET_DSG extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: S; passive. */
  "S": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
}) {
  override schema = "Device:Q_PJFET_DSG";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, gate/drain/source
 *
 * KiCad symbol: `Device:Q_PJFET_GDS`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PJFET_GDS extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: S; passive. */
  "S": "3",
}) {
  override schema = "Device:Q_PJFET_GDS";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, gate/source/drain
 *
 * KiCad symbol: `Device:Q_PJFET_GSD`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PJFET_GSD extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: S; passive. */
  "S": "2",
  /** Physical pin 3: D; passive. */
  "D": "3",
}) {
  override schema = "Device:Q_PJFET_GSD";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, source/drain/gate
 *
 * KiCad symbol: `Device:Q_PJFET_SDG`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PJFET_SDG extends Component.withPins({
  /** Physical pin 1: S; passive. */
  "S": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
}) {
  override schema = "Device:Q_PJFET_SDG";
  override referencePrefix = "Q";
}

/**
 * P-JFET transistor, source/gate/drain
 *
 * KiCad symbol: `Device:Q_PJFET_SGD`. Reference prefix: `Q`.
 * Keywords: transistor PJFET P-JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PJFET_SGD extends Component.withPins({
  /** Physical pin 1: S; passive. */
  "S": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: D; passive. */
  "D": "3",
}) {
  override schema = "Device:Q_PJFET_SGD";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor
 *
 * KiCad symbol: `Device:Q_PMOS`. Reference prefix: `Q`.
 * Keywords: PMOS P-MOS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PMOS extends Component.withPins({
  /** Physical pin D: D; passive. */
  "PD": "D",
  /** Physical pin G: G; input. */
  "PG": "G",
  /** Physical pin S: S; passive. */
  "PS": "S",
}) {
  override schema = "Device:Q_PMOS";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode P-channel MOSFET
 *
 * KiCad symbol: `Device:Q_PMOS_Depletion`. Reference prefix: `Q`.
 * Keywords: PMOS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PMOS_Depletion extends Component.withPins({
  /** Physical pin D: D; passive. */
  "PD": "D",
  /** Physical pin G: G; input. */
  "PG": "G",
  /** Physical pin S: S; passive. */
  "PS": "S",
}) {
  override schema = "Device:Q_PMOS_Depletion";
  override referencePrefix = "Q";
}

/**
 * PNP bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_PNP`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PNP extends Component.withPins({
  /** Physical pin B: B; input. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin E: E; passive. */
  "PE": "E",
}) {
  override schema = "Device:Q_PNP";
  override referencePrefix = "Q";
}

/**
 * PNP bias resistor bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_PNP_BRT`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PNP_BRT extends Component.withPins({
  /** Physical pin B: B; input. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin E: E; passive. */
  "PE": "E",
}) {
  override schema = "Device:Q_PNP_BRT";
  override referencePrefix = "Q";
}

/**
 * PNP gate resistor bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_PNP_BRT_No_R2`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PNP_BRT_No_R2 extends Component.withPins({
  /** Physical pin B: B; input. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin E: E; passive. */
  "PE": "E",
}) {
  override schema = "Device:Q_PNP_BRT_No_R2";
  override referencePrefix = "Q";
}

/**
 * Double PNP bipolar junction transistors, current mirror configuration
 *
 * KiCad symbol: `Device:Q_PNP_CurrentMirror`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PNP_CurrentMirror extends Component.withPins({
  /** Physical pin C1: C1; passive. */
  "PC1": "C1",
  /** Physical pin C2: C2; passive. */
  "PC2": "C2",
  /** Physical pin E1: E1; passive. */
  "PE1": "E1",
  /** Physical pin E2: E2; passive. */
  "PE2": "E2",
}) {
  override schema = "Device:Q_PNP_CurrentMirror";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington bipolar junction transistor
 *
 * KiCad symbol: `Device:Q_PNP_Darlington`. Reference prefix: `Q`.
 * Keywords: BJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PNP_Darlington extends Component.withPins({
  /** Physical pin B: B; input. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin E: E; passive. */
  "PE": "E",
}) {
  override schema = "Device:Q_PNP_Darlington";
  override referencePrefix = "Q";
}

/**
 * P-Type unijunction transistor
 *
 * KiCad symbol: `Device:Q_PUJT_BEB`. Reference prefix: `Q`.
 * Keywords: transistor UJT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_PUJT_BEB extends Component.withPins({
  /** Physical pin 1: B2; passive. */
  "B2": "1",
  /** Physical pin 2: E; input. */
  "E": "2",
  /** Physical pin 3: B1; passive. */
  "B1": "3",
}) {
  override schema = "Device:Q_PUJT_BEB";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, collector/emitter
 *
 * KiCad symbol: `Device:Q_Photo_NPN`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_Photo_NPN extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Device:Q_Photo_NPN";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, collector/base/emitter
 *
 * KiCad symbol: `Device:Q_Photo_NPN_CBE`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_Photo_NPN_CBE extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: B; input. */
  "B": "2",
  /** Physical pin 3: E; passive. */
  "E": "3",
}) {
  override schema = "Device:Q_Photo_NPN_CBE";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, collector/emitter
 *
 * KiCad symbol: `Device:Q_Photo_NPN_CE`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_Photo_NPN_CE extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Device:Q_Photo_NPN_CE";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, emitter/base/collector
 *
 * KiCad symbol: `Device:Q_Photo_NPN_EBC`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_Photo_NPN_EBC extends Component.withPins({
  /** Physical pin 1: E; passive. */
  "E": "1",
  /** Physical pin 2: B; input. */
  "B": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
}) {
  override schema = "Device:Q_Photo_NPN_EBC";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor, emitter/collector
 *
 * KiCad symbol: `Device:Q_Photo_NPN_EC`. Reference prefix: `Q`.
 * Keywords: phototransistor NPN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_Photo_NPN_EC extends Component.withPins({
  /** Physical pin 1: E; passive. */
  "E": "1",
  /** Physical pin 2: C; passive. */
  "C": "2",
}) {
  override schema = "Device:Q_Photo_NPN_EC";
  override referencePrefix = "Q";
}

/**
 * Silicon controlled rectifier, anode/gate/cathode
 *
 * KiCad symbol: `Device:Q_SCR_AGK`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_SCR_AGK extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:Q_SCR_AGK";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, anode/cathode/gate
 *
 * KiCad symbol: `Device:Q_SCR_AKG`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_SCR_AKG extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
}) {
  override schema = "Device:Q_SCR_AKG";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, gate/anode/cathode
 *
 * KiCad symbol: `Device:Q_SCR_GAK`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_SCR_GAK extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
}) {
  override schema = "Device:Q_SCR_GAK";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, gate/cathode/anode
 *
 * KiCad symbol: `Device:Q_SCR_GKA`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_SCR_GKA extends Component.withPins({
  /** Physical pin 1: G; input. */
  "G": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:Q_SCR_GKA";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, cathode/anode/gate
 *
 * KiCad symbol: `Device:Q_SCR_KAG`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_SCR_KAG extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
}) {
  override schema = "Device:Q_SCR_KAG";
  override referencePrefix = "D";
}

/**
 * Silicon controlled rectifier, cathode/gate/anode
 *
 * KiCad symbol: `Device:Q_SCR_KGA`. Reference prefix: `D`.
 * Keywords: SCR thyristor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_SCR_KGA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: G; input. */
  "G": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Device:Q_SCR_KGA";
  override referencePrefix = "D";
}

/**
 * Triode for alternating current, generic/no defined pinout
 *
 * KiCad symbol: `Device:Q_Triac`. Reference prefix: `D`.
 * Keywords: TRIAC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Q_Triac extends Component.withPins({
  /** Physical pin A1: A1; passive. */
  "PA1": "A1",
  /** Physical pin A2: A2; passive. */
  "PA2": "A2",
  /** Physical pin G: G; input. */
  "PG": "G",
}) {
  override schema = "Device:Q_Triac";
  override referencePrefix = "D";
}

/**
 * Resistor
 *
 * KiCad symbol: `Device:R`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:R";
  override referencePrefix = "R";
}

/**
 * One-piece EMI RF shielding cabinet
 *
 * KiCad symbol: `Device:RFShield_OnePiece`. Reference prefix: `J`.
 * Keywords: RF EMI shielding cabinet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFShield_OnePiece extends Component.withPins({
  /** Physical pin 1: Shield; passive. */
  "Shield": "1",
}) {
  override schema = "Device:RFShield_OnePiece";
  override referencePrefix = "J";
}

/**
 * Two-piece EMI RF shielding cabinet
 *
 * KiCad symbol: `Device:RFShield_TwoPieces`. Reference prefix: `J`.
 * Keywords: RF EMI shielding cabinet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFShield_TwoPieces extends Component.withPins({
  /** Physical pin 1: Shield; passive. */
  "Shield": "1",
}) {
  override schema = "Device:RFShield_TwoPieces";
  override referencePrefix = "J";
}

/**
 * Resistor, rotated by 45°
 *
 * KiCad symbol: `Device:R_45deg`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor diagonal.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_45deg extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network03 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network03_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network03_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network04 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
}) {
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
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network04_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network04_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network05 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
}) {
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
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network05_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network05_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network06 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
}) {
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
 * Units: 6.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network06_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network06_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network07 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
}) {
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
 * Units: 7.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network07_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network07_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network08 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
}) {
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
 * Units: 8.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network08_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
  /** Physical pin 9: R8.2; passive. */
  "R8.2": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network08_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network09 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
}) {
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
 * Units: 9.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network09_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
  /** Physical pin 9: R8.2; passive. */
  "R8.2": "9",
  /** Physical pin 10: R9.2; passive. */
  "R9.2": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network09_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network10 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
}) {
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
 * Units: 10.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network10_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
  /** Physical pin 9: R8.2; passive. */
  "R8.2": "9",
  /** Physical pin 10: R9.2; passive. */
  "R9.2": "10",
  /** Physical pin 11: R10.2; passive. */
  "R10.2": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network10_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network11 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
  /** Physical pin 12: R11; passive. */
  "R11": "12",
}) {
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
 * Units: 11.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network11_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
  /** Physical pin 9: R8.2; passive. */
  "R8.2": "9",
  /** Physical pin 10: R9.2; passive. */
  "R9.2": "10",
  /** Physical pin 11: R10.2; passive. */
  "R10.2": "11",
  /** Physical pin 12: R11.2; passive. */
  "R11.2": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network11_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
  /** Physical pin 12: R11; passive. */
  "R11": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network12 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
  /** Physical pin 12: R11; passive. */
  "R11": "12",
  /** Physical pin 13: R12; passive. */
  "R12": "13",
}) {
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
 * Units: 12.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network12_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
  /** Physical pin 9: R8.2; passive. */
  "R8.2": "9",
  /** Physical pin 10: R9.2; passive. */
  "R9.2": "10",
  /** Physical pin 11: R10.2; passive. */
  "R10.2": "11",
  /** Physical pin 12: R11.2; passive. */
  "R11.2": "12",
  /** Physical pin 13: R12.2; passive. */
  "R12.2": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network12_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
  /** Physical pin 12: R11; passive. */
  "R11": "12",
  /** Physical pin 13: R12; passive. */
  "R12": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network13 extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
  /** Physical pin 12: R11; passive. */
  "R11": "12",
  /** Physical pin 13: R12; passive. */
  "R12": "13",
  /** Physical pin 14: R13; passive. */
  "R13": "14",
}) {
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
 * Units: 13.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network13_Split extends Component.withPins({
  /** Physical pin 1: R1; passive. */
  "R1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
  /** Physical pin 9: R8.2; passive. */
  "R8.2": "9",
  /** Physical pin 10: R9.2; passive. */
  "R9.2": "10",
  /** Physical pin 11: R10.2; passive. */
  "R10.2": "11",
  /** Physical pin 12: R11.2; passive. */
  "R11.2": "12",
  /** Physical pin 13: R12.2; passive. */
  "R12.2": "13",
  /** Physical pin 14: R13.2; passive. */
  "R13.2": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network13_US extends Component.withPins({
  /** Physical pin 1: common; passive. */
  "common": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
  /** Physical pin 12: R11; passive. */
  "R11": "12",
  /** Physical pin 13: R12; passive. */
  "R12": "13",
  /** Physical pin 14: R13; passive. */
  "R13": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x02_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: COM2; passive. */
  "COM2": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x03_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: COM2; passive. */
  "COM2": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x04_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: COM2; passive. */
  "COM2": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x05_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: COM2; passive. */
  "COM2": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x06_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: COM2; passive. */
  "COM2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x07_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: COM2; passive. */
  "COM2": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x08_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: COM2; passive. */
  "COM2": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x09_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: COM2; passive. */
  "COM2": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x10_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
  /** Physical pin 12: COM2; passive. */
  "COM2": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Network_Dividers_x11_SIP extends Component.withPins({
  /** Physical pin 1: COM1; passive. */
  "COM1": "1",
  /** Physical pin 2: R1; passive. */
  "R1": "2",
  /** Physical pin 3: R2; passive. */
  "R2": "3",
  /** Physical pin 4: R3; passive. */
  "R3": "4",
  /** Physical pin 5: R4; passive. */
  "R4": "5",
  /** Physical pin 6: R5; passive. */
  "R5": "6",
  /** Physical pin 7: R6; passive. */
  "R6": "7",
  /** Physical pin 8: R7; passive. */
  "R7": "8",
  /** Physical pin 9: R8; passive. */
  "R8": "9",
  /** Physical pin 10: R9; passive. */
  "R9": "10",
  /** Physical pin 11: R10; passive. */
  "R10": "11",
  /** Physical pin 12: R11; passive. */
  "R11": "12",
  /** Physical pin 13: COM2; passive. */
  "COM2": "13",
}) {
  override schema = "Device:R_Network_Dividers_x11_SIP";
  override referencePrefix = "RN";
}

/**
 * 2 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack02`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack02 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
  /** Physical pin 4: R1.2; passive. */
  "R1.2": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack02_SIP extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack02_SIP_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
}) {
  override schema = "Device:R_Pack02_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 2 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack02_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack02_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 4: R1.2; passive. */
  "R1.2": "4",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R2.2; passive. */
  "R2.2": "3",
}) {
  override schema = "Device:R_Pack02_Split";
  override referencePrefix = "RN";
}

/**
 * 3 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack03`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack03 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
  /** Physical pin 5: R2.2; passive. */
  "R2.2": "5",
  /** Physical pin 6: R1.2; passive. */
  "R1.2": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack03_SIP extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack03_SIP_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
}) {
  override schema = "Device:R_Pack03_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 3 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack03_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack03_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 6: R1.2; passive. */
  "R1.2": "6",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 5: R2.2; passive. */
  "R2.2": "5",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R3.2; passive. */
  "R3.2": "4",
}) {
  override schema = "Device:R_Pack03_Split";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack04`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*, MSOP*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack04 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R2.2; passive. */
  "R2.2": "7",
  /** Physical pin 8: R1.2; passive. */
  "R1.2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack04_SIP extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R4.1; passive. */
  "R4.1": "7",
  /** Physical pin 8: R4.2; passive. */
  "R4.2": "8",
}) {
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
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack04_SIP_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R4.1; passive. */
  "R4.1": "7",
  /** Physical pin 8: R4.2; passive. */
  "R4.2": "8",
}) {
  override schema = "Device:R_Pack04_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 4 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack04_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*, MSOP*.
 * Keywords: R network parallel topology isolated.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack04_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 8: R1.2; passive. */
  "R1.2": "8",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 7: R2.2; passive. */
  "R2.2": "7",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R4.2; passive. */
  "R4.2": "5",
}) {
  override schema = "Device:R_Pack04_Split";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack05`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack05 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
  /** Physical pin 7: R4.2; passive. */
  "R4.2": "7",
  /** Physical pin 8: R3.2; passive. */
  "R3.2": "8",
  /** Physical pin 9: R2.2; passive. */
  "R2.2": "9",
  /** Physical pin 10: R1.2; passive. */
  "R1.2": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack05_SIP extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R4.1; passive. */
  "R4.1": "7",
  /** Physical pin 8: R4.2; passive. */
  "R4.2": "8",
  /** Physical pin 9: R5.1; passive. */
  "R5.1": "9",
  /** Physical pin 10: R5.2; passive. */
  "R5.2": "10",
}) {
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
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack05_SIP_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R4.1; passive. */
  "R4.1": "7",
  /** Physical pin 8: R4.2; passive. */
  "R4.2": "8",
  /** Physical pin 9: R5.1; passive. */
  "R5.1": "9",
  /** Physical pin 10: R5.2; passive. */
  "R5.2": "10",
}) {
  override schema = "Device:R_Pack05_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 5 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack05_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack05_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 10: R1.2; passive. */
  "R1.2": "10",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 9: R2.2; passive. */
  "R2.2": "9",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 8: R3.2; passive. */
  "R3.2": "8",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 7: R4.2; passive. */
  "R4.2": "7",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 6: R5.2; passive. */
  "R5.2": "6",
}) {
  override schema = "Device:R_Pack05_Split";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack06`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack06 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
  /** Physical pin 8: R5.2; passive. */
  "R5.2": "8",
  /** Physical pin 9: R4.2; passive. */
  "R4.2": "9",
  /** Physical pin 10: R3.2; passive. */
  "R3.2": "10",
  /** Physical pin 11: R2.2; passive. */
  "R2.2": "11",
  /** Physical pin 12: R1.2; passive. */
  "R1.2": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack06_SIP extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R4.1; passive. */
  "R4.1": "7",
  /** Physical pin 8: R4.2; passive. */
  "R4.2": "8",
  /** Physical pin 9: R5.1; passive. */
  "R5.1": "9",
  /** Physical pin 10: R5.2; passive. */
  "R5.2": "10",
  /** Physical pin 11: R6.1; passive. */
  "R6.1": "11",
  /** Physical pin 12: R6.2; passive. */
  "R6.2": "12",
}) {
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
 * Units: 6.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack06_SIP_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R4.1; passive. */
  "R4.1": "7",
  /** Physical pin 8: R4.2; passive. */
  "R4.2": "8",
  /** Physical pin 9: R5.1; passive. */
  "R5.1": "9",
  /** Physical pin 10: R5.2; passive. */
  "R5.2": "10",
  /** Physical pin 11: R6.1; passive. */
  "R6.1": "11",
  /** Physical pin 12: R6.2; passive. */
  "R6.2": "12",
}) {
  override schema = "Device:R_Pack06_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 6 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack06_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 6.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack06_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 12: R1.2; passive. */
  "R1.2": "12",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 11: R2.2; passive. */
  "R2.2": "11",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 10: R3.2; passive. */
  "R3.2": "10",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 9: R4.2; passive. */
  "R4.2": "9",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 8: R5.2; passive. */
  "R5.2": "8",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 7: R6.2; passive. */
  "R6.2": "7",
}) {
  override schema = "Device:R_Pack06_Split";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack07`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack07 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
  /** Physical pin 9: R6.2; passive. */
  "R6.2": "9",
  /** Physical pin 10: R5.2; passive. */
  "R5.2": "10",
  /** Physical pin 11: R4.2; passive. */
  "R4.2": "11",
  /** Physical pin 12: R3.2; passive. */
  "R3.2": "12",
  /** Physical pin 13: R2.2; passive. */
  "R2.2": "13",
  /** Physical pin 14: R1.2; passive. */
  "R1.2": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack07_SIP extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R4.1; passive. */
  "R4.1": "7",
  /** Physical pin 8: R4.2; passive. */
  "R4.2": "8",
  /** Physical pin 9: R5.1; passive. */
  "R5.1": "9",
  /** Physical pin 10: R5.2; passive. */
  "R5.2": "10",
  /** Physical pin 11: R6.1; passive. */
  "R6.1": "11",
  /** Physical pin 12: R6.2; passive. */
  "R6.2": "12",
  /** Physical pin 13: R7.1; passive. */
  "R7.1": "13",
  /** Physical pin 14: R7.2; passive. */
  "R7.2": "14",
}) {
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
 * Units: 7.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack07_SIP_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R1.2; passive. */
  "R1.2": "2",
  /** Physical pin 3: R2.1; passive. */
  "R2.1": "3",
  /** Physical pin 4: R2.2; passive. */
  "R2.2": "4",
  /** Physical pin 5: R3.1; passive. */
  "R3.1": "5",
  /** Physical pin 6: R3.2; passive. */
  "R3.2": "6",
  /** Physical pin 7: R4.1; passive. */
  "R4.1": "7",
  /** Physical pin 8: R4.2; passive. */
  "R4.2": "8",
  /** Physical pin 9: R5.1; passive. */
  "R5.1": "9",
  /** Physical pin 10: R5.2; passive. */
  "R5.2": "10",
  /** Physical pin 11: R6.1; passive. */
  "R6.1": "11",
  /** Physical pin 12: R6.2; passive. */
  "R6.2": "12",
  /** Physical pin 13: R7.1; passive. */
  "R7.1": "13",
  /** Physical pin 14: R7.2; passive. */
  "R7.2": "14",
}) {
  override schema = "Device:R_Pack07_SIP_Split";
  override referencePrefix = "RN";
}

/**
 * 7 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack07_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 7.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack07_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 14: R1.2; passive. */
  "R1.2": "14",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 13: R2.2; passive. */
  "R2.2": "13",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 12: R3.2; passive. */
  "R3.2": "12",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 11: R4.2; passive. */
  "R4.2": "11",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 10: R5.2; passive. */
  "R5.2": "10",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 9: R6.2; passive. */
  "R6.2": "9",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 8: R7.2; passive. */
  "R7.2": "8",
}) {
  override schema = "Device:R_Pack07_Split";
  override referencePrefix = "RN";
}

/**
 * 8 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack08`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack08 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 8: R8.1; passive. */
  "R8.1": "8",
  /** Physical pin 9: R8.2; passive. */
  "R8.2": "9",
  /** Physical pin 10: R7.2; passive. */
  "R7.2": "10",
  /** Physical pin 11: R6.2; passive. */
  "R6.2": "11",
  /** Physical pin 12: R5.2; passive. */
  "R5.2": "12",
  /** Physical pin 13: R4.2; passive. */
  "R4.2": "13",
  /** Physical pin 14: R3.2; passive. */
  "R3.2": "14",
  /** Physical pin 15: R2.2; passive. */
  "R2.2": "15",
  /** Physical pin 16: R1.2; passive. */
  "R1.2": "16",
}) {
  override schema = "Device:R_Pack08";
  override referencePrefix = "RN";
}

/**
 * 8 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack08_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 8.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack08_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 16: R1.2; passive. */
  "R1.2": "16",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 15: R2.2; passive. */
  "R2.2": "15",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 14: R3.2; passive. */
  "R3.2": "14",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 13: R4.2; passive. */
  "R4.2": "13",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 12: R5.2; passive. */
  "R5.2": "12",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 11: R6.2; passive. */
  "R6.2": "11",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 10: R7.2; passive. */
  "R7.2": "10",
  /** Physical pin 8: R8.1; passive. */
  "R8.1": "8",
  /** Physical pin 9: R8.2; passive. */
  "R8.2": "9",
}) {
  override schema = "Device:R_Pack08_Split";
  override referencePrefix = "RN";
}

/**
 * 9 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack09`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack09 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 8: R8.1; passive. */
  "R8.1": "8",
  /** Physical pin 9: R9.1; passive. */
  "R9.1": "9",
  /** Physical pin 10: R9.2; passive. */
  "R9.2": "10",
  /** Physical pin 11: R8.2; passive. */
  "R8.2": "11",
  /** Physical pin 12: R7.2; passive. */
  "R7.2": "12",
  /** Physical pin 13: R6.2; passive. */
  "R6.2": "13",
  /** Physical pin 14: R5.2; passive. */
  "R5.2": "14",
  /** Physical pin 15: R4.2; passive. */
  "R4.2": "15",
  /** Physical pin 16: R3.2; passive. */
  "R3.2": "16",
  /** Physical pin 17: R2.2; passive. */
  "R2.2": "17",
  /** Physical pin 18: R1.2; passive. */
  "R1.2": "18",
}) {
  override schema = "Device:R_Pack09";
  override referencePrefix = "RN";
}

/**
 * 9 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack09_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 9.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack09_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 18: R1.2; passive. */
  "R1.2": "18",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 17: R2.2; passive. */
  "R2.2": "17",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 16: R3.2; passive. */
  "R3.2": "16",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 15: R4.2; passive. */
  "R4.2": "15",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 14: R5.2; passive. */
  "R5.2": "14",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 13: R6.2; passive. */
  "R6.2": "13",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 12: R7.2; passive. */
  "R7.2": "12",
  /** Physical pin 8: R8.1; passive. */
  "R8.1": "8",
  /** Physical pin 11: R8.2; passive. */
  "R8.2": "11",
  /** Physical pin 9: R9.1; passive. */
  "R9.1": "9",
  /** Physical pin 10: R9.2; passive. */
  "R9.2": "10",
}) {
  override schema = "Device:R_Pack09_Split";
  override referencePrefix = "RN";
}

/**
 * 10 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack10`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack10 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 8: R8.1; passive. */
  "R8.1": "8",
  /** Physical pin 9: R9.1; passive. */
  "R9.1": "9",
  /** Physical pin 10: R10.1; passive. */
  "R10.1": "10",
  /** Physical pin 11: R10.2; passive. */
  "R10.2": "11",
  /** Physical pin 12: R9.2; passive. */
  "R9.2": "12",
  /** Physical pin 13: R8.2; passive. */
  "R8.2": "13",
  /** Physical pin 14: R7.2; passive. */
  "R7.2": "14",
  /** Physical pin 15: R6.2; passive. */
  "R6.2": "15",
  /** Physical pin 16: R5.2; passive. */
  "R5.2": "16",
  /** Physical pin 17: R4.2; passive. */
  "R4.2": "17",
  /** Physical pin 18: R3.2; passive. */
  "R3.2": "18",
  /** Physical pin 19: R2.2; passive. */
  "R2.2": "19",
  /** Physical pin 20: R1.2; passive. */
  "R1.2": "20",
}) {
  override schema = "Device:R_Pack10";
  override referencePrefix = "RN";
}

/**
 * 10 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack10_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 10.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack10_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 20: R1.2; passive. */
  "R1.2": "20",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 19: R2.2; passive. */
  "R2.2": "19",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 18: R3.2; passive. */
  "R3.2": "18",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 17: R4.2; passive. */
  "R4.2": "17",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 16: R5.2; passive. */
  "R5.2": "16",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 15: R6.2; passive. */
  "R6.2": "15",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 14: R7.2; passive. */
  "R7.2": "14",
  /** Physical pin 8: R8.1; passive. */
  "R8.1": "8",
  /** Physical pin 13: R8.2; passive. */
  "R8.2": "13",
  /** Physical pin 9: R9.1; passive. */
  "R9.1": "9",
  /** Physical pin 12: R9.2; passive. */
  "R9.2": "12",
  /** Physical pin 10: R10.1; passive. */
  "R10.1": "10",
  /** Physical pin 11: R10.2; passive. */
  "R10.2": "11",
}) {
  override schema = "Device:R_Pack10_Split";
  override referencePrefix = "RN";
}

/**
 * 11 resistor network, parallel topology
 *
 * KiCad symbol: `Device:R_Pack11`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack11 extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 8: R8.1; passive. */
  "R8.1": "8",
  /** Physical pin 9: R9.1; passive. */
  "R9.1": "9",
  /** Physical pin 10: R10.1; passive. */
  "R10.1": "10",
  /** Physical pin 11: R11.1; passive. */
  "R11.1": "11",
  /** Physical pin 12: R11.2; passive. */
  "R11.2": "12",
  /** Physical pin 13: R10.2; passive. */
  "R10.2": "13",
  /** Physical pin 14: R9.2; passive. */
  "R9.2": "14",
  /** Physical pin 15: R8.2; passive. */
  "R8.2": "15",
  /** Physical pin 16: R7.2; passive. */
  "R7.2": "16",
  /** Physical pin 17: R6.2; passive. */
  "R6.2": "17",
  /** Physical pin 18: R5.2; passive. */
  "R5.2": "18",
  /** Physical pin 19: R4.2; passive. */
  "R4.2": "19",
  /** Physical pin 20: R3.2; passive. */
  "R3.2": "20",
  /** Physical pin 21: R2.2; passive. */
  "R2.2": "21",
  /** Physical pin 22: R1.2; passive. */
  "R1.2": "22",
}) {
  override schema = "Device:R_Pack11";
  override referencePrefix = "RN";
}

/**
 * 11 resistor network, parallel topology, split
 *
 * KiCad symbol: `Device:R_Pack11_Split`. Reference prefix: `RN`.
 * Footprint filters: DIP*, SOIC*, R*Array*Concave*, R*Array*Convex*.
 * Keywords: R network parallel topology isolated.
 * Units: 11.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Pack11_Split extends Component.withPins({
  /** Physical pin 1: R1.1; passive. */
  "R1.1": "1",
  /** Physical pin 22: R1.2; passive. */
  "R1.2": "22",
  /** Physical pin 2: R2.1; passive. */
  "R2.1": "2",
  /** Physical pin 21: R2.2; passive. */
  "R2.2": "21",
  /** Physical pin 3: R3.1; passive. */
  "R3.1": "3",
  /** Physical pin 20: R3.2; passive. */
  "R3.2": "20",
  /** Physical pin 4: R4.1; passive. */
  "R4.1": "4",
  /** Physical pin 19: R4.2; passive. */
  "R4.2": "19",
  /** Physical pin 5: R5.1; passive. */
  "R5.1": "5",
  /** Physical pin 18: R5.2; passive. */
  "R5.2": "18",
  /** Physical pin 6: R6.1; passive. */
  "R6.1": "6",
  /** Physical pin 17: R6.2; passive. */
  "R6.2": "17",
  /** Physical pin 7: R7.1; passive. */
  "R7.1": "7",
  /** Physical pin 16: R7.2; passive. */
  "R7.2": "16",
  /** Physical pin 8: R8.1; passive. */
  "R8.1": "8",
  /** Physical pin 15: R8.2; passive. */
  "R8.2": "15",
  /** Physical pin 9: R9.1; passive. */
  "R9.1": "9",
  /** Physical pin 14: R9.2; passive. */
  "R9.2": "14",
  /** Physical pin 10: R10.1; passive. */
  "R10.1": "10",
  /** Physical pin 13: R10.2; passive. */
  "R10.2": "13",
  /** Physical pin 11: R11.1; passive. */
  "R11.1": "11",
  /** Physical pin 12: R11.2; passive. */
  "R11.2": "12",
}) {
  override schema = "Device:R_Pack11_Split";
  override referencePrefix = "RN";
}

/**
 * Photoresistor
 *
 * KiCad symbol: `Device:R_Photo`. Reference prefix: `R`.
 * Footprint filters: *LDR*, R?LDR*.
 * Keywords: resistor variable light sensitive opto LDR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Photo extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:R_Photo";
  override referencePrefix = "R";
}

/**
 * Potentiometer
 *
 * KiCad symbol: `Device:R_Potentiometer`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:R_Potentiometer";
  override referencePrefix = "RV";
}

/**
 * Dual potentiometer
 *
 * KiCad symbol: `Device:R_Potentiometer_Dual`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer_Dual extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
  /** Physical pin 5: 5; passive. */
  "P5": "5",
  /** Physical pin 6: 6; passive. */
  "P6": "6",
}) {
  override schema = "Device:R_Potentiometer_Dual";
  override referencePrefix = "RV";
}

/**
 * Dual potentiometer with a mounting pin
 *
 * KiCad symbol: `Device:R_Potentiometer_Dual_MountingPin`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer_Dual_MountingPin extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
  /** Physical pin 5: 5; passive. */
  "P5": "5",
  /** Physical pin 6: 6; passive. */
  "P6": "6",
  /** Physical pin MP: MountPin; passive. */
  "MountPin": "MP",
}) {
  override schema = "Device:R_Potentiometer_Dual_MountingPin";
  override referencePrefix = "RV";
}

/**
 * Dual potentiometer, separate units
 *
 * KiCad symbol: `Device:R_Potentiometer_Dual_Separate`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer_Dual_Separate extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin 4: 4; passive. */
  "P4": "4",
  /** Physical pin 5: 5; passive. */
  "P5": "5",
  /** Physical pin 6: 6; passive. */
  "P6": "6",
}) {
  override schema = "Device:R_Potentiometer_Dual_Separate";
  override referencePrefix = "RV";
}

/**
 * Potentiometer with a mounting pin
 *
 * KiCad symbol: `Device:R_Potentiometer_MountingPin`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer_MountingPin extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
  /** Physical pin MP: MountPin; passive. */
  "MountPin": "MP",
}) {
  override schema = "Device:R_Potentiometer_MountingPin";
  override referencePrefix = "RV";
}

/**
 * Potentiometer
 *
 * KiCad symbol: `Device:R_Potentiometer_Small`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:R_Potentiometer_Small";
  override referencePrefix = "RV";
}

/**
 * Trim-potentiometer
 *
 * KiCad symbol: `Device:R_Potentiometer_Trim`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable trimpot trimmer.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer_Trim extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:R_Potentiometer_Trim";
  override referencePrefix = "RV";
}

/**
 * Trim-potentiometer, US symbol
 *
 * KiCad symbol: `Device:R_Potentiometer_Trim_US`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable trimpot trimmer.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer_Trim_US extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:R_Potentiometer_Trim_US";
  override referencePrefix = "RV";
}

/**
 * Potentiometer, US symbol
 *
 * KiCad symbol: `Device:R_Potentiometer_US`. Reference prefix: `RV`.
 * Footprint filters: Potentiometer*.
 * Keywords: resistor variable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Potentiometer_US extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:R_Potentiometer_US";
  override referencePrefix = "RV";
}

/**
 * Shunt resistor with Kelvin connections
 *
 * KiCad symbol: `Device:R_Shunt`. Reference prefix: `R`.
 * Footprint filters: R_*Shunt*.
 * Keywords: R res shunt resistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Shunt extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:R_Shunt";
  override referencePrefix = "R";
}

/**
 * Shunt resistor with Kelvin connections, US symbol
 *
 * KiCad symbol: `Device:R_Shunt_US`. Reference prefix: `R`.
 * Footprint filters: R_*Shunt*.
 * Keywords: R res shunt resistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Shunt_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:R_Shunt_US";
  override referencePrefix = "R";
}

/**
 * Resistor, small symbol
 *
 * KiCad symbol: `Device:R_Small`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R resistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Small extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:R_Small";
  override referencePrefix = "R";
}

/**
 * Resistor, small US symbol
 *
 * KiCad symbol: `Device:R_Small_US`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: r resistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Small_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:R_Small_US";
  override referencePrefix = "R";
}

/**
 * Trimmable resistor (preset resistor)
 *
 * KiCad symbol: `Device:R_Trim`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor variable potentiometer trimmer.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Trim extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:R_Trim";
  override referencePrefix = "R";
}

/**
 * Resistor, US symbol
 *
 * KiCad symbol: `Device:R_US`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:R_US";
  override referencePrefix = "R";
}

/**
 * Variable resistor
 *
 * KiCad symbol: `Device:R_Variable`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor variable potentiometer rheostat.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Variable extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:R_Variable";
  override referencePrefix = "R";
}

/**
 * Variable resistor, US symbol
 *
 * KiCad symbol: `Device:R_Variable_US`. Reference prefix: `R`.
 * Footprint filters: R_*.
 * Keywords: R res resistor variable potentiometer rheostat.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_Variable_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:R_Variable_US";
  override referencePrefix = "R";
}

/**
 * Three pin ceramic resonator
 *
 * KiCad symbol: `Device:Resonator`. Reference prefix: `Y`.
 * Footprint filters: Filter*, Resonator*.
 * Keywords: ceramic resonator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Resonator extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:Resonator";
  override referencePrefix = "Y";
}

/**
 * Three pin ceramic resonator, small symbol
 *
 * KiCad symbol: `Device:Resonator_Small`. Reference prefix: `Y`.
 * Footprint filters: Filter*, Resonator*.
 * Keywords: ceramic resonator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Resonator_Small extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
  /** Physical pin 3: 3; passive. */
  "P3": "3",
}) {
  override schema = "Device:Resonator_Small";
  override referencePrefix = "Y";
}

/**
 * Rotary encoder, dual channel, incremental quadrate outputs
 *
 * KiCad symbol: `Device:RotaryEncoder`. Reference prefix: `SW`.
 * Footprint filters: RotaryEncoder*.
 * Keywords: rotary switch encoder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RotaryEncoder extends Component.withPins({
  /** Physical pin A: A; passive. */
  "PA": "A",
  /** Physical pin B: B; passive. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
}) {
  override schema = "Device:RotaryEncoder";
  override referencePrefix = "SW";
}

/**
 * Rotary encoder, dual channel, incremental quadrate outputs, with switch
 *
 * KiCad symbol: `Device:RotaryEncoder_Switch`. Reference prefix: `SW`.
 * Footprint filters: RotaryEncoder*Switch*.
 * Keywords: rotary switch encoder switch push button.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RotaryEncoder_Switch extends Component.withPins({
  /** Physical pin A: A; passive. */
  "PA": "A",
  /** Physical pin B: B; passive. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin S1: S1; passive. */
  "PS1": "S1",
  /** Physical pin S2: S2; passive. */
  "PS2": "S2",
}) {
  override schema = "Device:RotaryEncoder_Switch";
  override referencePrefix = "SW";
}

/**
 * Rotary encoder, dual channel, incremental quadrate outputs, with switch and MP Pin
 *
 * KiCad symbol: `Device:RotaryEncoder_Switch_MP`. Reference prefix: `SW`.
 * Footprint filters: RotaryEncoder*Switch*.
 * Keywords: rotary switch encoder switch push button.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RotaryEncoder_Switch_MP extends Component.withPins({
  /** Physical pin A: A; passive. */
  "PA": "A",
  /** Physical pin B: B; passive. */
  "PB": "B",
  /** Physical pin C: C; passive. */
  "PC": "C",
  /** Physical pin MP: MP; passive. */
  "PMP": "MP",
  /** Physical pin S1: S1; passive. */
  "PS1": "S1",
  /** Physical pin S2: S2; passive. */
  "PS2": "S2",
}) {
  override schema = "Device:RotaryEncoder_Switch_MP";
  override referencePrefix = "SW";
}

/**
 * Single solar cell
 *
 * KiCad symbol: `Device:Solar_Cell`. Reference prefix: `SC`.
 * Keywords: solar cell.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Solar_Cell extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Device:Solar_Cell";
  override referencePrefix = "SC";
}

/**
 * Multiple solar cells
 *
 * KiCad symbol: `Device:Solar_Cells`. Reference prefix: `SC`.
 * Keywords: solar cell.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Solar_Cells extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Device:Solar_Cells";
  override referencePrefix = "SC";
}

/**
 * Spark gap
 *
 * KiCad symbol: `Device:SparkGap`. Reference prefix: `E`.
 * Footprint filters: SG*.
 * Keywords: spark gap ESD electrostatic suppression.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SparkGap extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:SparkGap";
  override referencePrefix = "E";
}

/**
 * Speaker
 *
 * KiCad symbol: `Device:Speaker`. Reference prefix: `LS`.
 * Keywords: speaker sound.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Speaker extends Component.withPins({
  /** Physical pin 1: 1; input. */
  "P1": "1",
  /** Physical pin 2: 2; input. */
  "P2": "2",
}) {
  override schema = "Device:Speaker";
  override referencePrefix = "LS";
}

/**
 * Crystal speaker/transducer
 *
 * KiCad symbol: `Device:Speaker_Crystal`. Reference prefix: `LS`.
 * Keywords: crystal speaker ultrasonic transducer.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Speaker_Crystal extends Component.withPins({
  /** Physical pin 1: 1; input. */
  "P1": "1",
  /** Physical pin 2: 2; input. */
  "P2": "2",
}) {
  override schema = "Device:Speaker_Crystal";
  override referencePrefix = "LS";
}

/**
 * Ultrasonic transducer
 *
 * KiCad symbol: `Device:Speaker_Ultrasound`. Reference prefix: `LS`.
 * Keywords: crystal speaker ultrasonic transducer.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Speaker_Ultrasound extends Component.withPins({
  /** Physical pin 1: 1; input. */
  "P1": "1",
  /** Physical pin 2: 2; input. */
  "P2": "2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermal_Jumper extends Component.withPins({
  /** Physical pin 1: Pin1; passive. */
  "Pin1": "1",
  /** Physical pin 2: Pin2; passive. */
  "Pin2": "2",
}) {
  override schema = "Device:Thermal_Jumper";
  override referencePrefix = "TJ";
}

/**
 * Temperature dependent resistor
 *
 * KiCad symbol: `Device:Thermistor`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: R res thermistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Thermistor";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, negative temperature coefficient
 *
 * KiCad symbol: `Device:Thermistor_NTC`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: thermistor NTC resistor sensor RTD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_NTC extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Thermistor_NTC";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, negative temperature coefficient, 3-wire interface
 *
 * KiCad symbol: `Device:Thermistor_NTC_3Wire`. Reference prefix: `TH`.
 * Keywords: thermistor NTC resistor sensor RTD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_NTC_3Wire extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:Thermistor_NTC_3Wire";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, negative temperature coefficient, 4-wire interface
 *
 * KiCad symbol: `Device:Thermistor_NTC_4Wire`. Reference prefix: `TH`.
 * Keywords: thermistor NTC resistor sensor RTD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_NTC_4Wire extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:Thermistor_NTC_4Wire";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, negative temperature coefficient, US symbol
 *
 * KiCad symbol: `Device:Thermistor_NTC_US`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: thermistor NTC resistor sensor RTD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_NTC_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Thermistor_NTC_US";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, positive temperature coefficient
 *
 * KiCad symbol: `Device:Thermistor_PTC`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: resistor PTC thermistor sensor RTD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_PTC extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Thermistor_PTC";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, positive temperature coefficient, 3-wire interface
 *
 * KiCad symbol: `Device:Thermistor_PTC_3Wire`. Reference prefix: `TH`.
 * Keywords: resistor PTC thermistor sensor RTD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_PTC_3Wire extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:Thermistor_PTC_3Wire";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, positive temperature coefficient, 4-wire interface
 *
 * KiCad symbol: `Device:Thermistor_PTC_4Wire`. Reference prefix: `TH`.
 * Keywords: resistor PTC thermistor sensor RTD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_PTC_4Wire extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Device:Thermistor_PTC_4Wire";
  override referencePrefix = "TH";
}

/**
 * Temperature dependent resistor, positive temperature coefficient, US symbol
 *
 * KiCad symbol: `Device:Thermistor_PTC_US`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: resistor PTC thermistor sensor RTD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_PTC_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Thermistor_PTC_US";
  override referencePrefix = "TH";
}

/**
 * Thermistor, temperature dependent resistor, US symbol
 *
 * KiCad symbol: `Device:Thermistor_US`. Reference prefix: `TH`.
 * Footprint filters: R_*, RV_*.
 * Keywords: R res thermistor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermistor_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Thermistor_US";
  override referencePrefix = "TH";
}

/**
 * Thermocouple
 *
 * KiCad symbol: `Device:Thermocouple`. Reference prefix: `TC`.
 * Footprint filters: PIN?ARRAY*, bornier*, *Terminal?Block*, Thermo*Couple*.
 * Keywords: thermocouple temperature sensor cold junction.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermocouple extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Device:Thermocouple";
  override referencePrefix = "TC";
}

/**
 * Thermocouple with connector block
 *
 * KiCad symbol: `Device:Thermocouple_Alt`. Reference prefix: `TC`.
 * Footprint filters: PIN?ARRAY*, bornier*, *Terminal?Block*, Thermo*Couple*.
 * Keywords: thermocouple temperature sensor cold junction.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermocouple_Alt extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Device:Thermocouple_Alt";
  override referencePrefix = "TC";
}

/**
 * Thermocouple with isothermal block
 *
 * KiCad symbol: `Device:Thermocouple_Block`. Reference prefix: `TC`.
 * Footprint filters: PIN?ARRAY*, bornier*, *Terminal?Block*, Thermo*Couple*.
 * Keywords: thermocouple temperature sensor cold junction.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Thermocouple_Block extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Device:Thermocouple_Block";
  override referencePrefix = "TC";
}

/**
 * Transformer, single primary, single secondary
 *
 * KiCad symbol: `Device:Transformer_1P_1S`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Transformer_1P_1S extends Component.withPins({
  /** Physical pin 1: AA; passive. */
  "AA": "1",
  /** Physical pin 2: AB; passive. */
  "AB": "2",
  /** Physical pin 3: SA; passive. */
  "SA": "3",
  /** Physical pin 4: SB; passive. */
  "SB": "4",
}) {
  override schema = "Device:Transformer_1P_1S";
  override referencePrefix = "T";
}

/**
 * Transformer, single primary, single secondary, SO-8 package
 *
 * KiCad symbol: `Device:Transformer_1P_1S_SO8`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Transformer_1P_1S_SO8 extends Component.withPins({
  /** Physical pin 1: AA; passive. */
  "AA": "1",
  /** Physical pin 4: AB; passive. */
  "AB": "4",
  /** Physical pin 5: SA; passive. */
  "SA": "5",
  /** Physical pin 8: SB; passive. */
  "SB": "8",
}) {
  override schema = "Device:Transformer_1P_1S_SO8";
  override referencePrefix = "T";
}

/**
 * Transformer, single primary, dual secondary
 *
 * KiCad symbol: `Device:Transformer_1P_2S`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Transformer_1P_2S extends Component.withPins({
  /** Physical pin 1: AA; passive. */
  "AA": "1",
  /** Physical pin 2: AB; passive. */
  "AB": "2",
  /** Physical pin 3: SA; passive. */
  "SA": "3",
  /** Physical pin 4: SB; passive. */
  "SB": "4",
  /** Physical pin 5: SC; passive. */
  "SC": "5",
  /** Physical pin 6: SD; passive. */
  "SD": "6",
}) {
  override schema = "Device:Transformer_1P_2S";
  override referencePrefix = "T";
}

/**
 * Transformer, single primary, split secondary
 *
 * KiCad symbol: `Device:Transformer_1P_SS`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Transformer_1P_SS extends Component.withPins({
  /** Physical pin 1: AA; passive. */
  "AA": "1",
  /** Physical pin 2: AB; passive. */
  "AB": "2",
  /** Physical pin 3: SA; passive. */
  "SA": "3",
  /** Physical pin 4: SC; passive. */
  "SC": "4",
  /** Physical pin 5: SB; passive. */
  "SB": "5",
}) {
  override schema = "Device:Transformer_1P_SS";
  override referencePrefix = "T";
}

/**
 * Audio transformer
 *
 * KiCad symbol: `Device:Transformer_Audio`. Reference prefix: `T`.
 * Keywords: transformer coil magnet sound.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Transformer_Audio extends Component.withPins({
  /** Physical pin 0: unnamed; input. */
  "P0": "0",
  /** Physical pin 1: AA; passive. */
  "AA": "1",
  /** Physical pin 2: AB; passive. */
  "AB": "2",
  /** Physical pin 3: SA; passive. */
  "SA": "3",
  /** Physical pin 4: SB; passive. */
  "SB": "4",
}) {
  override schema = "Device:Transformer_Audio";
  override referencePrefix = "T";
}

/**
 * Transformer, split primary, single secondary
 *
 * KiCad symbol: `Device:Transformer_SP_1S`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Transformer_SP_1S extends Component.withPins({
  /** Physical pin 1: PR1; passive. */
  "PR1": "1",
  /** Physical pin 2: PM; passive. */
  "PM": "2",
  /** Physical pin 3: PR2; passive. */
  "PR2": "3",
  /** Physical pin 4: S1; passive. */
  "S1": "4",
  /** Physical pin 5: S2; passive. */
  "S2": "5",
}) {
  override schema = "Device:Transformer_SP_1S";
  override referencePrefix = "T";
}

/**
 * Transformer, split primary, dual secondary
 *
 * KiCad symbol: `Device:Transformer_SP_2S`. Reference prefix: `T`.
 * Keywords: transformer coil magnet.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Transformer_SP_2S extends Component.withPins({
  /** Physical pin 1: IN+; passive. */
  "IN+": "1",
  /** Physical pin 2: PM; passive. */
  "PM": "2",
  /** Physical pin 3: IN-; passive. */
  "IN-": "3",
  /** Physical pin 4: OUT1A; passive. */
  "OUT1A": "4",
  /** Physical pin 5: OUT1B; passive. */
  "OUT1B": "5",
  /** Physical pin 6: OUT2A; passive. */
  "OUT2A": "6",
  /** Physical pin 7: OUT2B; passive. */
  "OUT2B": "7",
}) {
  override schema = "Device:Transformer_SP_2S";
  override referencePrefix = "T";
}

/**
 * Voltage dependent resistor
 *
 * KiCad symbol: `Device:Varistor`. Reference prefix: `RV`.
 * Footprint filters: RV_*, Varistor*.
 * Keywords: VDR resistance.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Varistor extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Varistor";
  override referencePrefix = "RV";
}

/**
 * Voltage dependent resistor, US symbol
 *
 * KiCad symbol: `Device:Varistor_US`. Reference prefix: `RV`.
 * Footprint filters: RV_*, Varistor*.
 * Keywords: VDR resistance.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Varistor_US extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Varistor_US";
  override referencePrefix = "RV";
}

/**
 * Voltage divider
 *
 * KiCad symbol: `Device:VoltageDivider`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*, SOT?23.
 * Keywords: R network voltage divider.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VoltageDivider extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:VoltageDivider";
  override referencePrefix = "RN";
}

/**
 * Voltage divider, center on pin 1
 *
 * KiCad symbol: `Device:VoltageDivider_CenterPin1`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*, SOT?23.
 * Keywords: R network voltage divider.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VoltageDivider_CenterPin1 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:VoltageDivider_CenterPin1";
  override referencePrefix = "RN";
}

/**
 * Voltage divider, center on pin 3
 *
 * KiCad symbol: `Device:VoltageDivider_CenterPin3`. Reference prefix: `RN`.
 * Footprint filters: R?Array?SIP*, SOT?23.
 * Keywords: R network voltage divider.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VoltageDivider_CenterPin3 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Device:VoltageDivider_CenterPin3";
  override referencePrefix = "RN";
}

/**
 * AC voltmeter
 *
 * KiCad symbol: `Device:Voltmeter_AC`. Reference prefix: `MES`.
 * Keywords: voltmeter AC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Voltmeter_AC extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Device:Voltmeter_AC";
  override referencePrefix = "MES";
}

/**
 * DC voltmeter
 *
 * KiCad symbol: `Device:Voltmeter_DC`. Reference prefix: `MES`.
 * Keywords: voltmeter DC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Voltmeter_DC extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
}) {
  override schema = "Device:Voltmeter_DC";
  override referencePrefix = "MES";
}

export const c = (opts: ConstructorParameters<typeof C>[0] = {}) => new C(opts);
export const r = (opts: ConstructorParameters<typeof R>[0] = {}) => new R(opts);
