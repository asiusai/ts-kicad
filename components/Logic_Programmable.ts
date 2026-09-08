// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High-performance EE PLD, PAL Device Emulation / PAL Replacement, DIP-20
 *
 * KiCad symbol: `Logic_Programmable:ATF16V8Bxx-xxPU`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-0364-PLD-ATF16V8B-8BQ-8BQL-Datasheet.pdf
 * Keywords: Atmel Microchip SPLD CMOS Flash Electrically-Erasable Programmable-Logic-Device Combinatorial Logic-Array ATF16V8B-15PU ATF16V8BQL-15PU GAL16V8-replacement 16R8 16R6 16R4 16RP8 16RP6 16RP4 16L8 16H8 16P8 10L8 12L6 14L4 16L2 10H8 12H6 14H4 16H2 10P8 12P6 14P4 16P2.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ATF16V8Bxx_xxPU extends Component.withPins({
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: I; input. */
  "I": "1",
  /** Physical pin 2: I1; input. */
  "I1": "2",
  /** Physical pin 3: I2; input. */
  "I2": "3",
  /** Physical pin 4: I3; input. */
  "I3": "4",
  /** Physical pin 5: I4; input. */
  "I4": "5",
  /** Physical pin 6: I5; input. */
  "I5": "6",
  /** Physical pin 7: I6; input. */
  "I6": "7",
  /** Physical pin 8: I7; input. */
  "I7": "8",
  /** Physical pin 9: I8; input. */
  "I8": "9",
  /** Physical pin 11: I9; input. */
  "I9": "11",
  /** Physical pin 12: I/O; bidirectional. */
  "I/O_12": "12",
  /** Physical pin 13: I/O; bidirectional. */
  "I/O_13": "13",
  /** Physical pin 14: I/O; bidirectional. */
  "I/O_14": "14",
  /** Physical pin 15: I/O; bidirectional. */
  "I/O_15": "15",
  /** Physical pin 16: I/O; bidirectional. */
  "I/O_16": "16",
  /** Physical pin 17: I/O; bidirectional. */
  "I/O_17": "17",
  /** Physical pin 18: I/O; bidirectional. */
  "I/O_18": "18",
  /** Physical pin 19: I/O; bidirectional. */
  "I/O_19": "19",
}) {
  override schema = "Logic_Programmable:ATF16V8Bxx-xxPU";
  override referencePrefix = "U";
}

/**
 * High Performance E²CMOS PLD, Generic Array Logic, PAL Device Emulation, DIP-20 / PLCC-20 / SOIC-20
 *
 * KiCad symbol: `Logic_Programmable:GAL16V8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, *SOIC*7.5x12.8mm*P1.27mm*, *PLCC*.
 * @see https://www.bitsavers.org/components/latticeSemiconductor/_dataBooks/1988_Lattice_GAL_Data_Book.pdf#page=6
 * Keywords: Obsolete Lattice SPLD 16V8 EECMOS OLMC Macrocell 16R8 16R6 16R4 16RP8 16RP6 16RP4 16L8 16H8 16P8 10L8 12L6 14L4 16L2 10H8 12H6 14H4 16H2 10P8 12P6 14P4 16P2.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GAL16V8 extends Component.withPins({
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: I_{0}; input. */
  "I_{0}": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 11: I_{9}; input. */
  "I_{9}": "11",
  /** Physical pin 12: F_{0}; bidirectional. */
  "F_{0}": "12",
  /** Physical pin 13: F_{1}; bidirectional. */
  "F_{1}": "13",
  /** Physical pin 14: F_{2}; bidirectional. */
  "F_{2}": "14",
  /** Physical pin 15: F_{3}; bidirectional. */
  "F_{3}": "15",
  /** Physical pin 16: F_{4}; bidirectional. */
  "F_{4}": "16",
  /** Physical pin 17: F_{5}; bidirectional. */
  "F_{5}": "17",
  /** Physical pin 18: F_{6}; bidirectional. */
  "F_{6}": "18",
  /** Physical pin 19: F_{7}; bidirectional. */
  "F_{7}": "19",
}) {
  override schema = "Logic_Programmable:GAL16V8";
  override referencePrefix = "U";
}

/**
 * Programmable Array Logic (PAL), Active-Low Combinatorial, DIP-20 / PLCC-20
 *
 * KiCad symbol: `Logic_Programmable:PAL16L8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, *PLCC*.
 * @see https://docs.rs-online.com/53eb/0900766b8002a354.pdf
 * Keywords: Obsolete Monolithic-Memories AMD PLD 16L8 PAL16L8-7PC PAL16L8-7JC PAL16L8D/2PC PAL16L8B-2CN PAL16L8ACN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL16L8 extends Component.withPins({
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: I_{0}; input. */
  "I_{0}": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 11: I_{9}; input. */
  "I_{9}": "11",
  /** Physical pin 12: ~{O_{1}}; tri_state. */
  "~{O_{1}}": "12",
  /** Physical pin 13: I/~{O_{2}}; bidirectional. */
  "I/~{O_{2}}": "13",
  /** Physical pin 14: I/~{O_{3}}; bidirectional. */
  "I/~{O_{3}}": "14",
  /** Physical pin 15: I/~{O_{4}}; bidirectional. */
  "I/~{O_{4}}": "15",
  /** Physical pin 16: I/~{O_{5}}; bidirectional. */
  "I/~{O_{5}}": "16",
  /** Physical pin 17: I/~{O_{6}}; bidirectional. */
  "I/~{O_{6}}": "17",
  /** Physical pin 18: I/~{O_{7}}; bidirectional. */
  "I/~{O_{7}}": "18",
  /** Physical pin 19: ~{O_{8}}; tri_state. */
  "~{O_{8}}": "19",
}) {
  override schema = "Logic_Programmable:PAL16L8";
  override referencePrefix = "U";
}

/**
 * Programmable Array Logic (PAL), 8 Registered Outputs, DIP-20 / PLCC-20
 *
 * KiCad symbol: `Logic_Programmable:PAL16R8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, *PLCC*.
 * @see https://docs.rs-online.com/53eb/0900766b8002a354.pdf
 * Keywords: Obsolete Monolithic-Memories AMD PLD 16R8 PAL16R8-7PC PAL16R8-7JC PAL16R8D/2PC PAL16R8B-2CN PAL16R8ACN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL16R8 extends Component.withPins({
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 11: ~{OE}; input. */
  "~{OE}": "11",
  /** Physical pin 12: ~{O_{1}}; tri_state. */
  "~{O_{1}}": "12",
  /** Physical pin 13: ~{O_{2}}; tri_state. */
  "~{O_{2}}": "13",
  /** Physical pin 14: ~{O_{3}}; tri_state. */
  "~{O_{3}}": "14",
  /** Physical pin 15: ~{O_{4}}; tri_state. */
  "~{O_{4}}": "15",
  /** Physical pin 16: ~{O_{5}}; tri_state. */
  "~{O_{5}}": "16",
  /** Physical pin 17: ~{O_{6}}; tri_state. */
  "~{O_{6}}": "17",
  /** Physical pin 18: ~{O_{7}}; tri_state. */
  "~{O_{7}}": "18",
  /** Physical pin 19: ~{O_{8}}; tri_state. */
  "~{O_{8}}": "19",
}) {
  override schema = "Logic_Programmable:PAL16R8";
  override referencePrefix = "U";
}

/**
 * Programmable Array Logic (PAL), 16 array inputs (8 dedicated inputs), 8 registered outputs, programmable output polarity, DIP-20 / PLCC-20
 *
 * KiCad symbol: `Logic_Programmable:PAL16RP8A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, *PLCC*.
 * @see https://bitsavers.org/components/amd/_dataBooks/1988_AMD_PAL_Device_Data_Book.pdf#page=487
 * Keywords: Obsolete Monolithic-Memories AMD PLD PAL-Series-20AP Medium-20PA-Series.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL16RP8A extends Component.withPins({
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{OE}; input. */
  "~{OE}": "11",
  /** Physical pin 12: O_{1}; tri_state. */
  "O_{1}": "12",
  /** Physical pin 13: O_{2}; tri_state. */
  "O_{2}": "13",
  /** Physical pin 14: O_{3}; tri_state. */
  "O_{3}": "14",
  /** Physical pin 15: O_{4}; tri_state. */
  "O_{4}": "15",
  /** Physical pin 16: O_{5}; tri_state. */
  "O_{5}": "16",
  /** Physical pin 17: O_{6}; tri_state. */
  "O_{6}": "17",
  /** Physical pin 18: O_{7}; tri_state. */
  "O_{7}": "18",
  /** Physical pin 19: O_{8}; tri_state. */
  "O_{8}": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
}) {
  override schema = "Logic_Programmable:PAL16RP8A";
  override referencePrefix = "U";
}

/**
 * Programmable Array Logic (PAL), 16 array inputs (8 dedicated inputs), 8 registered outputs, programmable output polarity, DIP-20 / PLCC-20
 *
 * KiCad symbol: `Logic_Programmable:PAL16RP8A_Programming`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, *PLCC*.
 * @see http://bitsavers.informatik.uni-stuttgart.de/components/mmi/_dataSheets/PAL20AP_Data_Sheet.pdf
 * Keywords: Obsolete Monolithic-Memories AMD PLD PAL-Series-20AP Medium-20PA-Series.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL16RP8A_Programming extends Component.withPins({
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: I_{0}; input. */
  "I_{0}": "2",
  /** Physical pin 3: I_{1}; input. */
  "I_{1}": "3",
  /** Physical pin 4: I_{2}; input. */
  "I_{2}": "4",
  /** Physical pin 5: I_{3}; input. */
  "I_{3}": "5",
  /** Physical pin 6: I_{4}; input. */
  "I_{4}": "6",
  /** Physical pin 7: I_{5}; input. */
  "I_{5}": "7",
  /** Physical pin 8: I_{6}; input. */
  "I_{6}": "8",
  /** Physical pin 9: I_{7}; input. */
  "I_{7}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: OD; input. */
  "OD": "11",
  /** Physical pin 12: O_{3}; tri_state. */
  "O_{3}": "12",
  /** Physical pin 13: O_{2}; tri_state. */
  "O_{2}": "13",
  /** Physical pin 14: O_{1}; tri_state. */
  "O_{1}": "14",
  /** Physical pin 15: O_{0}; tri_state. */
  "O_{0}": "15",
  /** Physical pin 16: A_{2}; input. */
  "A_{2}": "16",
  /** Physical pin 17: A_{1}; input. */
  "A_{1}": "17",
  /** Physical pin 18: A_{0}; input. */
  "A_{0}": "18",
  /** Physical pin 19: L/R; input. */
  "L/R": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
}) {
  override schema = "Logic_Programmable:PAL16RP8A_Programming";
  override referencePrefix = "U";
}

/**
 * Programmable Array Logic (PAL), 20 array inputs (12 dedicated inputs), 10 active-low combinatorial outputs, DIP-24
 *
 * KiCad symbol: `Logic_Programmable:PAL20L10xxNS`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.datasheet.directory/pdfviewer?url=https%3A%2F%2Fdatasheet.iiic.cc%2Fdatasheets-0%2Fadvanced_micro_devices%2FPAL20L10ACNS.pdf
 * Keywords: Obsolete Monolithic-Memories AMD PLD 20L10 PAL20L10ACNS AmPAL20L10BPC.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL20L10xxNS extends Component.withPins({
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 24: V_{CC}; power_in. */
  "V_{CC}": "24",
  /** Physical pin 1: I_{0}; input. */
  "I_{0}": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 10: I_{9}; input. */
  "I_{9}": "10",
  /** Physical pin 11: I_{10}; input. */
  "I_{10}": "11",
  /** Physical pin 13: I_{11}; input. */
  "I_{11}": "13",
  /** Physical pin 14: ~{O_{1}}; tri_state. */
  "~{O_{1}}": "14",
  /** Physical pin 15: I/~{O_{2}}; bidirectional. */
  "I/~{O_{2}}": "15",
  /** Physical pin 16: I/~{O_{3}}; bidirectional. */
  "I/~{O_{3}}": "16",
  /** Physical pin 17: I/~{O_{4}}; bidirectional. */
  "I/~{O_{4}}": "17",
  /** Physical pin 18: I/~{O_{5}}; bidirectional. */
  "I/~{O_{5}}": "18",
  /** Physical pin 19: I/~{O_{6}}; bidirectional. */
  "I/~{O_{6}}": "19",
  /** Physical pin 20: I/~{O_{7}}; bidirectional. */
  "I/~{O_{7}}": "20",
  /** Physical pin 21: I/~{O_{8}}; bidirectional. */
  "I/~{O_{8}}": "21",
  /** Physical pin 22: I/~{O_{9}}; bidirectional. */
  "I/~{O_{9}}": "22",
  /** Physical pin 23: ~{O_{10}}; tri_state. */
  "~{O_{10}}": "23",
}) {
  override schema = "Logic_Programmable:PAL20L10xxNS";
  override referencePrefix = "U";
}

/**
 * Programmable Array Logic (PAL), Active-Low Combinatorial, DIP-24
 *
 * KiCad symbol: `Logic_Programmable:PAL20L8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://rocelec.widen.net/view/pdf/pn0qtf2whd/VANTS00076-1.pdf
 * Keywords: Obsolete Monolithic-Memories AMD PLD 20L8 PAL20L8-5PC PAL20L8-7PC PAL20L8-10PC PAL20L8-10/2PC PAL20L8B-2CNS.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL20L8 extends Component.withPins({
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 24: V_{CC}; power_in. */
  "V_{CC}": "24",
  /** Physical pin 1: I_{0}; input. */
  "I_{0}": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 10: I_{9}; input. */
  "I_{9}": "10",
  /** Physical pin 11: I_{10}; input. */
  "I_{10}": "11",
  /** Physical pin 13: I_{13}; input. */
  "I_{13}": "13",
  /** Physical pin 14: I_{11}; input. */
  "I_{11}": "14",
  /** Physical pin 15: ~{O_{1}}; tri_state. */
  "~{O_{1}}": "15",
  /** Physical pin 16: I/~{O_{2}}; bidirectional. */
  "I/~{O_{2}}": "16",
  /** Physical pin 17: I/~{O_{3}}; bidirectional. */
  "I/~{O_{3}}": "17",
  /** Physical pin 18: I/~{O_{4}}; bidirectional. */
  "I/~{O_{4}}": "18",
  /** Physical pin 19: I/~{O_{5}}; bidirectional. */
  "I/~{O_{5}}": "19",
  /** Physical pin 20: I/~{O_{6}}; bidirectional. */
  "I/~{O_{6}}": "20",
  /** Physical pin 21: I/~{O_{7}}; bidirectional. */
  "I/~{O_{7}}": "21",
  /** Physical pin 22: ~{O_{8}}; tri_state. */
  "~{O_{8}}": "22",
  /** Physical pin 23: I_{12}; input. */
  "I_{12}": "23",
}) {
  override schema = "Logic_Programmable:PAL20L8";
  override referencePrefix = "U";
}

/**
 * Programmable Array Logic (PAL), 20 array inputs (12 dedicated inputs), 8 registered outputs (active-low), DIP-24
 *
 * KiCad symbol: `Logic_Programmable:PAL20R8xx-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://rocelec.widen.net/view/pdf/pn0qtf2whd/VANTS00076-1.pdf
 * Keywords: Obsolete Monolithic-Memories AMD PLD 20R8 PAL20R8-5PC PAL20R8-7PC PAL20R8-10PC PAL20R8-10/2PC PAL20R8ACNS.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL20R8xx_P extends Component.withPins({
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 24: V_{CC}; power_in. */
  "V_{CC}": "24",
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 10: I_{9}; input. */
  "I_{9}": "10",
  /** Physical pin 11: I_{10}; input. */
  "I_{10}": "11",
  /** Physical pin 13: ~{OE}; input. */
  "~{OE}": "13",
  /** Physical pin 14: I_{11}; input. */
  "I_{11}": "14",
  /** Physical pin 15: ~{O_{1}}; tri_state. */
  "~{O_{1}}": "15",
  /** Physical pin 16: ~{O_{2}}; tri_state. */
  "~{O_{2}}": "16",
  /** Physical pin 17: ~{O_{3}}; tri_state. */
  "~{O_{3}}": "17",
  /** Physical pin 18: ~{O_{4}}; tri_state. */
  "~{O_{4}}": "18",
  /** Physical pin 19: ~{O_{5}}; tri_state. */
  "~{O_{5}}": "19",
  /** Physical pin 20: ~{O_{6}}; tri_state. */
  "~{O_{6}}": "20",
  /** Physical pin 21: ~{O_{7}}; tri_state. */
  "~{O_{7}}": "21",
  /** Physical pin 22: ~{O_{8}}; tri_state. */
  "~{O_{8}}": "22",
  /** Physical pin 23: I_{12}; input. */
  "I_{12}": "23",
}) {
  override schema = "Logic_Programmable:PAL20R8xx-P";
  override referencePrefix = "U";
}

/**
 * Programmable Array Logic (PAL), 20 array inputs (10 dedicated inputs), 10 registered outputs (programmable polarity), product-term steering, DIP-24 (300 mils)
 *
 * KiCad symbol: `Logic_Programmable:PAL20RS10xNS`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://bitsavers.org/components/amd/_dataBooks/1988_AMD_PAL_Device_Data_Book.pdf#page=573
 * Keywords: Obsolete Monolithic-Memories AMD PLD Large-24RS-Series PAL20RS10CNS.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL20RS10xNS extends Component.withPins({
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 10: I_{9}; input. */
  "I_{9}": "10",
  /** Physical pin 11: I_{10}; input. */
  "I_{10}": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: ~{OE}; input. */
  "~{OE}": "13",
  /** Physical pin 14: I/~{O_{1}}; bidirectional. */
  "I/~{O_{1}}": "14",
  /** Physical pin 15: I/~{O_{2}}; bidirectional. */
  "I/~{O_{2}}": "15",
  /** Physical pin 16: I/~{O_{3}}; bidirectional. */
  "I/~{O_{3}}": "16",
  /** Physical pin 17: I/~{O_{4}}; bidirectional. */
  "I/~{O_{4}}": "17",
  /** Physical pin 18: I/~{O_{5}}; bidirectional. */
  "I/~{O_{5}}": "18",
  /** Physical pin 19: I/~{O_{6}}; bidirectional. */
  "I/~{O_{6}}": "19",
  /** Physical pin 20: I/~{O_{7}}; bidirectional. */
  "I/~{O_{7}}": "20",
  /** Physical pin 21: I/~{O_{8}}; bidirectional. */
  "I/~{O_{8}}": "21",
  /** Physical pin 22: I/~{O_{9}}; bidirectional. */
  "I/~{O_{9}}": "22",
  /** Physical pin 23: I/~{O_{10}}; bidirectional. */
  "I/~{O_{10}}": "23",
  /** Physical pin 24: V_{CC}; power_in. */
  "V_{CC}": "24",
}) {
  override schema = "Logic_Programmable:PAL20RS10xNS";
  override referencePrefix = "U";
}

/**
 * 24-pin TTL Versatile PAL Device, DIP-24
 *
 * KiCad symbol: `Logic_Programmable:PAL22V10-xxP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://web.archive.org/web/20251006042442/https://www.silicon-ark.co.uk/datasheets/pal22v10-pal22v10a-datasheet-amd.pdf
 * Keywords: Obsolete AMD PLD Programmable-Array-Logic PAL22V10-15PC AmPAL22V10APC.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAL22V10_xxP extends Component.withPins({
  /** Physical pin 1: I_{0}; input. */
  "I_{0}": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 10: I_{9}; input. */
  "I_{9}": "10",
  /** Physical pin 11: I_{10}; input. */
  "I_{10}": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: I_{11}; input. */
  "I_{11}": "13",
  /** Physical pin 14: I/O_{0}; bidirectional. */
  "I/O_{0}": "14",
  /** Physical pin 15: I/O_{1}; bidirectional. */
  "I/O_{1}": "15",
  /** Physical pin 16: I/O_{2}; bidirectional. */
  "I/O_{2}": "16",
  /** Physical pin 17: I/O_{3}; bidirectional. */
  "I/O_{3}": "17",
  /** Physical pin 18: I/O_{4}; bidirectional. */
  "I/O_{4}": "18",
  /** Physical pin 19: I/O_{5}; bidirectional. */
  "I/O_{5}": "19",
  /** Physical pin 20: I/O_{6}; bidirectional. */
  "I/O_{6}": "20",
  /** Physical pin 21: I/O_{7}; bidirectional. */
  "I/O_{7}": "21",
  /** Physical pin 22: I/O_{8}; bidirectional. */
  "I/O_{8}": "22",
  /** Physical pin 23: I/O_{9}; bidirectional. */
  "I/O_{9}": "23",
  /** Physical pin 24: V_{CC}; power_in. */
  "V_{CC}": "24",
}) {
  override schema = "Logic_Programmable:PAL22V10-xxP";
  override referencePrefix = "U";
}

/**
 * EE CMOS Universal Programmable Array Logic (PAL), 8 / 10 dedicated inputs, 8 I/O, DIP-20 / PLCC-20 / SOIC-20
 *
 * KiCad symbol: `Logic_Programmable:PALCE16V8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, *PLCC*, *SO*7.*x12.8mm?P1.27mm*.
 * @see https://www.alldatasheet.com/datasheet-pdf/view/55541/AMD/PALCE16V8.html
 * Keywords: Obsolete Monolithic-Memories AMD macrocell Electrically-Erasable PLD 16V8  PALCE16V8H-7PC/5 PALCE16V8H-10PC/4 PALCE16V8H-25PC/4 PALCE16V8H-15JC/4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PALCE16V8 extends Component.withPins({
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: I_{0}; input. */
  "I_{0}": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 11: I_{9}; input. */
  "I_{9}": "11",
  /** Physical pin 12: I/~{O_{0}}; bidirectional. */
  "I/~{O_{0}}": "12",
  /** Physical pin 13: I/~{O_{1}}; bidirectional. */
  "I/~{O_{1}}": "13",
  /** Physical pin 14: I/~{O_{2}}; bidirectional. */
  "I/~{O_{2}}": "14",
  /** Physical pin 15: I/~{O_{3}}; bidirectional. */
  "I/~{O_{3}}": "15",
  /** Physical pin 16: I/~{O_{4}}; bidirectional. */
  "I/~{O_{4}}": "16",
  /** Physical pin 17: I/~{O_{5}}; bidirectional. */
  "I/~{O_{5}}": "17",
  /** Physical pin 18: I/~{O_{6}}; bidirectional. */
  "I/~{O_{6}}": "18",
  /** Physical pin 19: I/~{O_{7}}; bidirectional. */
  "I/~{O_{7}}": "19",
}) {
  override schema = "Logic_Programmable:PALCE16V8";
  override referencePrefix = "U";
}

/**
 * 24-pin EE CMOS Versatile PAL Device, DIP-24
 *
 * KiCad symbol: `Logic_Programmable:PALCE22V10x-xxP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://docs.rs-online.com/4e85/0900766b80026541.pdf
 * Keywords: Obsolete AMD Electrically-Erasable PLD Programmable-Array-Logic PALCE22V10H-15PC/4.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PALCE22V10x_xxP extends Component.withPins({
  /** Physical pin 1: I_{0}; input. */
  "I_{0}": "1",
  /** Physical pin 2: I_{1}; input. */
  "I_{1}": "2",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{3}; input. */
  "I_{3}": "4",
  /** Physical pin 5: I_{4}; input. */
  "I_{4}": "5",
  /** Physical pin 6: I_{5}; input. */
  "I_{5}": "6",
  /** Physical pin 7: I_{6}; input. */
  "I_{6}": "7",
  /** Physical pin 8: I_{7}; input. */
  "I_{7}": "8",
  /** Physical pin 9: I_{8}; input. */
  "I_{8}": "9",
  /** Physical pin 10: I_{9}; input. */
  "I_{9}": "10",
  /** Physical pin 11: I_{10}; input. */
  "I_{10}": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: I_{11}; input. */
  "I_{11}": "13",
  /** Physical pin 14: I/O_{0}; bidirectional. */
  "I/O_{0}": "14",
  /** Physical pin 15: I/O_{1}; bidirectional. */
  "I/O_{1}": "15",
  /** Physical pin 16: I/O_{2}; bidirectional. */
  "I/O_{2}": "16",
  /** Physical pin 17: I/O_{3}; bidirectional. */
  "I/O_{3}": "17",
  /** Physical pin 18: I/O_{4}; bidirectional. */
  "I/O_{4}": "18",
  /** Physical pin 19: I/O_{5}; bidirectional. */
  "I/O_{5}": "19",
  /** Physical pin 20: I/O_{6}; bidirectional. */
  "I/O_{6}": "20",
  /** Physical pin 21: I/O_{7}; bidirectional. */
  "I/O_{7}": "21",
  /** Physical pin 22: I/O_{8}; bidirectional. */
  "I/O_{8}": "22",
  /** Physical pin 23: I/O_{9}; bidirectional. */
  "I/O_{9}": "23",
  /** Physical pin 24: V_{CC}; power_in. */
  "V_{CC}": "24",
}) {
  override schema = "Logic_Programmable:PALCE22V10x-xxP";
  override referencePrefix = "U";
}

/**
 * Not in Production, CMOS Programmable Electrically Erasable Logic Device, DIP-24
 *
 * KiCad symbol: `Logic_Programmable:PEEL22CV10AP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.alldatasheet.com/datasheet-pdf/pdf/149182/ANACHIP/PEEL22CV10AP-15L.html
 * Keywords: PLD.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PEEL22CV10AP extends Component.withPins({
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 1: I1/CLK; input. */
  "I1/CLK": "1",
  /** Physical pin 2: I2; input. */
  "I2": "2",
  /** Physical pin 3: I3; input. */
  "I3": "3",
  /** Physical pin 4: I4; input. */
  "I4": "4",
  /** Physical pin 5: I5; input. */
  "I5": "5",
  /** Physical pin 6: I6; input. */
  "I6": "6",
  /** Physical pin 7: I7; input. */
  "I7": "7",
  /** Physical pin 8: I8; input. */
  "I8": "8",
  /** Physical pin 9: I9; input. */
  "I9": "9",
  /** Physical pin 10: I10; input. */
  "I10": "10",
  /** Physical pin 11: I11; input. */
  "I11": "11",
  /** Physical pin 13: I13; input. */
  "I13": "13",
  /** Physical pin 14: IO14; tri_state. */
  "IO14": "14",
  /** Physical pin 15: IO15; tri_state. */
  "IO15": "15",
  /** Physical pin 16: IO16; tri_state. */
  "IO16": "16",
  /** Physical pin 17: IO17; tri_state. */
  "IO17": "17",
  /** Physical pin 18: IO18; tri_state. */
  "IO18": "18",
  /** Physical pin 19: IO19; tri_state. */
  "IO19": "19",
  /** Physical pin 20: IO20; tri_state. */
  "IO20": "20",
  /** Physical pin 21: IO21; tri_state. */
  "IO21": "21",
  /** Physical pin 22: IO22; tri_state. */
  "IO22": "22",
  /** Physical pin 23: IO23; tri_state. */
  "IO23": "23",
}) {
  override schema = "Logic_Programmable:PEEL22CV10AP";
  override referencePrefix = "U";
}

/**
 * Not in Production, CMOS Programmable Electrically Erasable Logic Device, SOIC-24W
 *
 * KiCad symbol: `Logic_Programmable:PEEL22CV10AS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x15.4mm*P1.27mm*.
 * @see https://www.alldatasheet.com/datasheet-pdf/download/149182/ANACHIP/PEEL22CV10AP-15L.html
 * Keywords: PLD.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PEEL22CV10AS extends Component.withPins({
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 1: I1/CLK; input. */
  "I1/CLK": "1",
  /** Physical pin 2: I2; input. */
  "I2": "2",
  /** Physical pin 3: I3; input. */
  "I3": "3",
  /** Physical pin 4: I4; input. */
  "I4": "4",
  /** Physical pin 5: I5; input. */
  "I5": "5",
  /** Physical pin 6: I6; input. */
  "I6": "6",
  /** Physical pin 7: I7; input. */
  "I7": "7",
  /** Physical pin 8: I8; input. */
  "I8": "8",
  /** Physical pin 9: I9; input. */
  "I9": "9",
  /** Physical pin 10: I10; input. */
  "I10": "10",
  /** Physical pin 11: I11; input. */
  "I11": "11",
  /** Physical pin 13: I13; input. */
  "I13": "13",
  /** Physical pin 14: IO14; tri_state. */
  "IO14": "14",
  /** Physical pin 15: IO15; tri_state. */
  "IO15": "15",
  /** Physical pin 16: IO16; tri_state. */
  "IO16": "16",
  /** Physical pin 17: IO17; tri_state. */
  "IO17": "17",
  /** Physical pin 18: IO18; tri_state. */
  "IO18": "18",
  /** Physical pin 19: IO19; tri_state. */
  "IO19": "19",
  /** Physical pin 20: IO20; tri_state. */
  "IO20": "20",
  /** Physical pin 21: IO21; tri_state. */
  "IO21": "21",
  /** Physical pin 22: IO22; tri_state. */
  "IO22": "22",
  /** Physical pin 23: IO23; tri_state. */
  "IO23": "23",
}) {
  override schema = "Logic_Programmable:PEEL22CV10AS";
  override referencePrefix = "U";
}

