// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * SiPM supply temperature compendsated, input 5V, output 20V-90V, UART
 *
 * KiCad symbol: `Converter_DCDC:C11204-01`. Reference prefix: `U`.
 * Footprint filters: Converter*Hamamatsu*.
 * @see https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/ssd/c11204-01_kacc1203e.pdf
 * Keywords: bias-supply MPPC.
 * Default footprint: Converter_DCDC:Converter_DCDC_Hamamatsu_C11204-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C11204_01 extends Component.withPins({
  /** Physical pin 1: Vs; power_in. */
  "Vs": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: TXD; output. */
  "TXD": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: Vo; power_out. */
  "Vo": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: Temp; input. */
  "Temp": "16",
}) {
  override schema = "Converter_DCDC:C11204-01";
  override referencePrefix = "U";
}

/**
 * 8A Adjustable Step-Down DC/DC Power Module in 15x15mm, Texas NDY0011A
 *
 * KiCad symbol: `Converter_DCDC:LMZ13608`. Reference prefix: `U`.
 * Footprint filters: Texas*NDY0011A*.
 * @see http://www.ti.com/lit/ds/snvs710i/snvs710i.pdf
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_TO_SOT_SMD:Texas_NDY0011A.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZ13608 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN_1": "1",
  /** Physical pin 2: VIN; passive. */
  "VIN_2": "2",
  /** Physical pin 3: AGND; passive. */
  "AGND_3": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: AGND; power_in. */
  "AGND_5": "5",
  /** Physical pin 6: AGND; passive. */
  "AGND_6": "6",
  /** Physical pin 7: FB; input. */
  "FB": "7",
  /** Physical pin 8: SS; input. */
  "SS": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: VOUT; power_out. */
  "VOUT_10": "10",
  /** Physical pin 11: VOUT; passive. */
  "VOUT_11": "11",
  /** Physical pin 12: PGND; power_in. */
  "PGND": "12",
}) {
  override schema = "Converter_DCDC:LMZ13608";
  override referencePrefix = "U";
}

/**
 * 5A Adjustable Step-Down DC/DC Power Module, Vin: 6-36V
 *
 * KiCad symbol: `Converter_DCDC:LMZ23605TZ`. Reference prefix: `U`.
 * Footprint filters: Texas*NDW*.
 * @see http://www.ti.com/lit/gpn/lmz23605
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_TO_SOT_SMD:Texas_NDW-7_TabPin4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZ23605TZ extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: SYNC; input. */
  "SYNC": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: FB; input. */
  "FB": "5",
  /** Physical pin 6: SS/TRK; passive. */
  "SS/TRK": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT": "7",
}) {
  override schema = "Converter_DCDC:LMZ23605TZ";
  override referencePrefix = "U";
}

/**
 * 3A Adjustable Step-Down DC/DC Power Module, Vin: 6-20V
 *
 * KiCad symbol: `Converter_DCDC:LMZ22003TZ`. Reference prefix: `U`.
 * Footprint filters: Texas*NDW*.
 * @see http://www.ti.com/lit/gpn/LMZ22003
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_TO_SOT_SMD:Texas_NDW-7_TabPin4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZ22003TZ extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: SYNC; input. */
  "SYNC": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: FB; input. */
  "FB": "5",
  /** Physical pin 6: SS/TRK; passive. */
  "SS/TRK": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT": "7",
}) {
  override schema = "Converter_DCDC:LMZ22003TZ";
  override referencePrefix = "U";
}

/**
 * 5A Adjustable Step-Down DC/DC Power Module, Vin: 6-20V
 *
 * KiCad symbol: `Converter_DCDC:LMZ22005TZ`. Reference prefix: `U`.
 * Footprint filters: Texas*NDW*.
 * @see http://www.ti.com/lit/gpn/LMZ22005
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_TO_SOT_SMD:Texas_NDW-7_TabPin4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZ22005TZ extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: SYNC; input. */
  "SYNC": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: FB; input. */
  "FB": "5",
  /** Physical pin 6: SS/TRK; passive. */
  "SS/TRK": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT": "7",
}) {
  override schema = "Converter_DCDC:LMZ22005TZ";
  override referencePrefix = "U";
}

/**
 * 3A Adjustable Step-Down DC/DC Power Module, Vin: 6-36V
 *
 * KiCad symbol: `Converter_DCDC:LMZ23603TZ`. Reference prefix: `U`.
 * Footprint filters: Texas*NDW*.
 * @see http://www.ti.com/lit/gpn/lmz23603
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_TO_SOT_SMD:Texas_NDW-7_TabPin4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZ23603TZ extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: SYNC; input. */
  "SYNC": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: FB; input. */
  "FB": "5",
  /** Physical pin 6: SS/TRK; passive. */
  "SS/TRK": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT": "7",
}) {
  override schema = "Converter_DCDC:LMZ23603TZ";
  override referencePrefix = "U";
}

/**
 * 1A Adjustable Step-Down DC/DC Power Module in 3.8x3mm, MicroSIP-10
 *
 * KiCad symbol: `Converter_DCDC:LMZM23601`. Reference prefix: `U`.
 * Footprint filters: Texas*SIL*1EP*3.8x3mm*P0.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmzm23601.pdf
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_LGA:Texas_SIL0010A_MicroSiP-10-1EP_3.8x3mm_P0.6mm_EP0.7x2.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZM23601 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MODE/SYNC; input. */
  "MODE/SYNC": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: PG; open_collector. */
  "PG": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
  /** Physical pin 7: FB; input. */
  "FB": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
  /** Physical pin 9: unnamed; no_connect. */
  "P9": "9",
  /** Physical pin 10: unnamed; no_connect. */
  "P10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:LMZM23601";
  override referencePrefix = "U";
}

/**
 * 0.5A Adjustable Step-Down DC/DC Power Module in 3.8x3mm, MicroSIP-10
 *
 * KiCad symbol: `Converter_DCDC:LMZM23600`. Reference prefix: `U`.
 * Footprint filters: Texas*SIL*1EP*3.8x3mm*P0.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmzm23600.pdf
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_LGA:Texas_SIL0010A_MicroSiP-10-1EP_3.8x3mm_P0.6mm_EP0.7x2.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZM23600 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MODE/SYNC; input. */
  "MODE/SYNC": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: PG; open_collector. */
  "PG": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
  /** Physical pin 7: FB; input. */
  "FB": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
  /** Physical pin 9: unnamed; no_connect. */
  "P9": "9",
  /** Physical pin 10: unnamed; no_connect. */
  "P10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:LMZM23600";
  override referencePrefix = "U";
}

/**
 * 0.5A 3.3V Step-Down DC/DC Power Module in 3.8x3mm, MicroSIP-10
 *
 * KiCad symbol: `Converter_DCDC:LMZM23600V3`. Reference prefix: `U`.
 * Footprint filters: Texas*SIL*1EP*3.8x3mm*P0.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmzm23600.pdf
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_LGA:Texas_SIL0010A_MicroSiP-10-1EP_3.8x3mm_P0.6mm_EP0.7x2.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZM23600V3 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MODE/SYNC; input. */
  "MODE/SYNC": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: PG; open_collector. */
  "PG": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
  /** Physical pin 7: FB; input. */
  "FB": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
  /** Physical pin 9: unnamed; no_connect. */
  "P9": "9",
  /** Physical pin 10: unnamed; no_connect. */
  "P10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:LMZM23600V3";
  override referencePrefix = "U";
}

/**
 * 0.5A 5V Step-Down DC/DC Power Module in 3.8x3mm, MicroSIP-10
 *
 * KiCad symbol: `Converter_DCDC:LMZM23600V5`. Reference prefix: `U`.
 * Footprint filters: Texas*SIL*1EP*3.8x3mm*P0.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmzm23600.pdf
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_LGA:Texas_SIL0010A_MicroSiP-10-1EP_3.8x3mm_P0.6mm_EP0.7x2.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZM23600V5 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MODE/SYNC; input. */
  "MODE/SYNC": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: PG; open_collector. */
  "PG": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
  /** Physical pin 7: FB; input. */
  "FB": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
  /** Physical pin 9: unnamed; no_connect. */
  "P9": "9",
  /** Physical pin 10: unnamed; no_connect. */
  "P10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:LMZM23600V5";
  override referencePrefix = "U";
}

/**
 * 1A 3.3V Step-Down DC/DC Power Module in 3.8x3mm, MicroSIP-10
 *
 * KiCad symbol: `Converter_DCDC:LMZM23601V3`. Reference prefix: `U`.
 * Footprint filters: Texas*SIL*1EP*3.8x3mm*P0.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmzm23601.pdf
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_LGA:Texas_SIL0010A_MicroSiP-10-1EP_3.8x3mm_P0.6mm_EP0.7x2.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZM23601V3 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MODE/SYNC; input. */
  "MODE/SYNC": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: PG; open_collector. */
  "PG": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
  /** Physical pin 7: FB; input. */
  "FB": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
  /** Physical pin 9: unnamed; no_connect. */
  "P9": "9",
  /** Physical pin 10: unnamed; no_connect. */
  "P10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:LMZM23601V3";
  override referencePrefix = "U";
}

/**
 * 1A 5V Step-Down DC/DC Power Module in 3.8x3mm, MicroSIP-10
 *
 * KiCad symbol: `Converter_DCDC:LMZM23601V5`. Reference prefix: `U`.
 * Footprint filters: Texas*SIL*1EP*3.8x3mm*P0.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmzm23601.pdf
 * Keywords: Step-Down DC/DC Module.
 * Default footprint: Package_LGA:Texas_SIL0010A_MicroSiP-10-1EP_3.8x3mm_P0.6mm_EP0.7x2.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMZM23601V5 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MODE/SYNC; input. */
  "MODE/SYNC": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: PG; open_collector. */
  "PG": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
  /** Physical pin 7: FB; input. */
  "FB": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
  /** Physical pin 9: unnamed; no_connect. */
  "P9": "9",
  /** Physical pin 10: unnamed; no_connect. */
  "P10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:LMZM23601V5";
  override referencePrefix = "U";
}

/**
 * voltage doubler and inverter
 *
 * KiCad symbol: `Converter_DCDC:LT1026`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1026fb.pdf
 * Keywords: monolithic switched capacitor voltage doubler inverter .
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1026 extends Component.withPins({
  /** Physical pin 1: C1-; passive. */
  "C1-": "1",
  /** Physical pin 2: C2+; passive. */
  "C2+": "2",
  /** Physical pin 3: C2-; passive. */
  "C2-": "3",
  /** Physical pin 4: -Vout; power_out. */
  "-Vout": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: Vin; power_in. */
  "Vin": "6",
  /** Physical pin 7: C1+; passive. */
  "C1+": "7",
  /** Physical pin 8: +Vout; power_out. */
  "+Vout": "8",
}) {
  override schema = "Converter_DCDC:LT1026";
  override referencePrefix = "U";
}

/**
 * Analog Devices 20VIN, 15A Step-Down DC/DC uModule Regulator, BGA-49
 *
 * KiCad symbol: `Converter_DCDC:LTM4638`. Reference prefix: `U`.
 * Footprint filters: Analog*BGA*6.25x6.25mm*Layout7x7*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltm4638.pdf
 * Keywords: uModule Buck Regulator.
 * Default footprint: Package_BGA:Analog_BGA-49_6.25x6.25mm_Layout7x7_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM4638 extends Component.withPins({
  /** Physical pin A1: V_{OUT}; power_out. */
  "V_{OUT}_A1": "A1",
  /** Physical pin A2: V_{OUT}; passive. */
  "V_{OUT}_A2": "A2",
  /** Physical pin A3: V_{OUT}; passive. */
  "V_{OUT}_A3": "A3",
  /** Physical pin A4: V_{OUT}; passive. */
  "V_{OUT}_A4": "A4",
  /** Physical pin A5: V_{OUT}; passive. */
  "V_{OUT}_A5": "A5",
  /** Physical pin A6: T_{SENSE}+; passive. */
  "T_{SENSE}+": "A6",
  /** Physical pin A7: T_{SENSE}-; passive. */
  "T_{SENSE}-": "A7",
  /** Physical pin B1: V_{OSNS}+; input. */
  "V_{OSNS}+": "B1",
  /** Physical pin B2: GND; power_in. */
  "GND_B2": "B2",
  /** Physical pin B3: INTV_{CC}; power_out. */
  "INTV_{CC}": "B3",
  /** Physical pin B4: RUN; input. */
  "RUN": "B4",
  /** Physical pin B5: PGOOD; open_collector. */
  "PGOOD": "B5",
  /** Physical pin B6: GND; passive. */
  "GND_B6": "B6",
  /** Physical pin B7: SW; passive. */
  "SW": "B7",
  /** Physical pin C1: FB; input. */
  "FB": "C1",
  /** Physical pin C2: V_{OSNS}-; input. */
  "V_{OSNS}-": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: GND; passive. */
  "GND_C5": "C5",
  /** Physical pin C6: GND; passive. */
  "GND_C6": "C6",
  /** Physical pin C7: GND; passive. */
  "GND_C7": "C7",
  /** Physical pin D1: COMPa; passive. */
  "COMPa": "D1",
  /** Physical pin D2: MODE/CLKIN; passive. */
  "MODE/CLKIN": "D2",
  /** Physical pin D3: V_{IN}; power_in. */
  "V_{IN}_D3": "D3",
  /** Physical pin D4: V_{IN}; passive. */
  "V_{IN}_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: GND; passive. */
  "GND_D6": "D6",
  /** Physical pin D7: GND; passive. */
  "GND_D7": "D7",
  /** Physical pin E1: FREQ; passive. */
  "FREQ": "E1",
  /** Physical pin E2: TRACK/SS; passive. */
  "TRACK/SS": "E2",
  /** Physical pin E3: V_{IN}; passive. */
  "V_{IN}_E3": "E3",
  /** Physical pin E4: V_{IN}; passive. */
  "V_{IN}_E4": "E4",
  /** Physical pin E5: GND; passive. */
  "GND_E5": "E5",
  /** Physical pin E6: GND; passive. */
  "GND_E6": "E6",
  /** Physical pin E7: GND; passive. */
  "GND_E7": "E7",
  /** Physical pin F1: COMPb; passive. */
  "COMPb": "F1",
  /** Physical pin F2: CLKOUT; output. */
  "CLKOUT": "F2",
  /** Physical pin F3: V_{OUT}; passive. */
  "V_{OUT}_F3": "F3",
  /** Physical pin F4: V_{IN}; passive. */
  "V_{IN}_F4": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin G1: V_{OUT}; passive. */
  "V_{OUT}_G1": "G1",
  /** Physical pin G2: V_{OUT}; passive. */
  "V_{OUT}_G2": "G2",
  /** Physical pin G3: V_{OUT}; passive. */
  "V_{OUT}_G3": "G3",
  /** Physical pin G4: V_{IN}; passive. */
  "V_{IN}_G4": "G4",
  /** Physical pin G5: PHMODE; passive. */
  "PHMODE": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: GND; passive. */
  "GND_G7": "G7",
}) {
  override schema = "Converter_DCDC:LTM4638";
  override referencePrefix = "U";
}

/**
 * Analog Devices 20VIN, 12A Step-Down DC/DC uModule Regulator, BGA-49
 *
 * KiCad symbol: `Converter_DCDC:LTM4626`. Reference prefix: `U`.
 * Footprint filters: Analog*BGA*6.25x6.25mm*Layout7x7*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltm4626.pdf
 * Keywords: uModule Buck Regulator.
 * Default footprint: Package_BGA:Analog_BGA-49_6.25x6.25mm_Layout7x7_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM4626 extends Component.withPins({
  /** Physical pin A1: V_{OUT}; power_out. */
  "V_{OUT}_A1": "A1",
  /** Physical pin A2: V_{OUT}; passive. */
  "V_{OUT}_A2": "A2",
  /** Physical pin A3: V_{OUT}; passive. */
  "V_{OUT}_A3": "A3",
  /** Physical pin A4: V_{OUT}; passive. */
  "V_{OUT}_A4": "A4",
  /** Physical pin A5: V_{OUT}; passive. */
  "V_{OUT}_A5": "A5",
  /** Physical pin A6: T_{SENSE}+; passive. */
  "T_{SENSE}+": "A6",
  /** Physical pin A7: T_{SENSE}-; passive. */
  "T_{SENSE}-": "A7",
  /** Physical pin B1: V_{OSNS}+; input. */
  "V_{OSNS}+": "B1",
  /** Physical pin B2: GND; power_in. */
  "GND_B2": "B2",
  /** Physical pin B3: INTV_{CC}; power_out. */
  "INTV_{CC}": "B3",
  /** Physical pin B4: RUN; input. */
  "RUN": "B4",
  /** Physical pin B5: PGOOD; open_collector. */
  "PGOOD": "B5",
  /** Physical pin B6: GND; passive. */
  "GND_B6": "B6",
  /** Physical pin B7: SW; passive. */
  "SW": "B7",
  /** Physical pin C1: FB; input. */
  "FB": "C1",
  /** Physical pin C2: V_{OSNS}-; input. */
  "V_{OSNS}-": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: GND; passive. */
  "GND_C5": "C5",
  /** Physical pin C6: GND; passive. */
  "GND_C6": "C6",
  /** Physical pin C7: GND; passive. */
  "GND_C7": "C7",
  /** Physical pin D1: COMPa; passive. */
  "COMPa": "D1",
  /** Physical pin D2: MODE/CLKIN; passive. */
  "MODE/CLKIN": "D2",
  /** Physical pin D3: V_{IN}; power_in. */
  "V_{IN}_D3": "D3",
  /** Physical pin D4: V_{IN}; passive. */
  "V_{IN}_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: GND; passive. */
  "GND_D6": "D6",
  /** Physical pin D7: GND; passive. */
  "GND_D7": "D7",
  /** Physical pin E1: FREQ; passive. */
  "FREQ": "E1",
  /** Physical pin E2: TRACK/SS; passive. */
  "TRACK/SS": "E2",
  /** Physical pin E3: V_{IN}; passive. */
  "V_{IN}_E3": "E3",
  /** Physical pin E4: V_{IN}; passive. */
  "V_{IN}_E4": "E4",
  /** Physical pin E5: GND; passive. */
  "GND_E5": "E5",
  /** Physical pin E6: GND; passive. */
  "GND_E6": "E6",
  /** Physical pin E7: GND; passive. */
  "GND_E7": "E7",
  /** Physical pin F1: COMPb; passive. */
  "COMPb": "F1",
  /** Physical pin F2: CLKOUT; output. */
  "CLKOUT": "F2",
  /** Physical pin F3: V_{OUT}; passive. */
  "V_{OUT}_F3": "F3",
  /** Physical pin F4: V_{IN}; passive. */
  "V_{IN}_F4": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin G1: V_{OUT}; passive. */
  "V_{OUT}_G1": "G1",
  /** Physical pin G2: V_{OUT}; passive. */
  "V_{OUT}_G2": "G2",
  /** Physical pin G3: V_{OUT}; passive. */
  "V_{OUT}_G3": "G3",
  /** Physical pin G4: V_{IN}; passive. */
  "V_{IN}_G4": "G4",
  /** Physical pin G5: PHMODE; passive. */
  "PHMODE": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: GND; passive. */
  "GND_G7": "G7",
}) {
  override schema = "Converter_DCDC:LTM4626";
  override referencePrefix = "U";
}

/**
 * 20A DC/DC µModule Step-Down Regulator, LGA-133
 *
 * KiCad symbol: `Converter_DCDC:LTM4637xV`. Reference prefix: `U`.
 * Footprint filters: Linear*LGA*15.0x15.0mm*Layout12x12*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4637fc.pdf
 * Keywords: uModule DCDC.
 * Default footprint: Package_LGA:Linear_LGA-133_15.0x15.0mm_Layout12x12_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM4637xV extends Component.withPins({
  /** Physical pin A1: VIN; power_in. */
  "VIN_A1": "A1",
  /** Physical pin A2: VIN; passive. */
  "VIN_A2": "A2",
  /** Physical pin A3: VIN; passive. */
  "VIN_A3": "A3",
  /** Physical pin A4: VIN; passive. */
  "VIN_A4": "A4",
  /** Physical pin A5: VIN; passive. */
  "VIN_A5": "A5",
  /** Physical pin A6: VIN; passive. */
  "VIN_A6": "A6",
  /** Physical pin A7: INTVCC; power_out. */
  "INTVCC_A7": "A7",
  /** Physical pin A8: MODE_PLLIN; input. */
  "MODE_PLLIN": "A8",
  /** Physical pin A9: TRACK/SS; passive. */
  "TRACK/SS": "A9",
  /** Physical pin A10: RUN; input. */
  "RUN": "A10",
  /** Physical pin A11: COMP; passive. */
  "COMP": "A11",
  /** Physical pin A12: MTP1; no_connect. */
  "MTP1": "A12",
  /** Physical pin B1: VIN; passive. */
  "VIN_B1": "B1",
  /** Physical pin B2: VIN; passive. */
  "VIN_B2": "B2",
  /** Physical pin B3: VIN; passive. */
  "VIN_B3": "B3",
  /** Physical pin B4: VIN; passive. */
  "VIN_B4": "B4",
  /** Physical pin B5: VIN; passive. */
  "VIN_B5": "B5",
  /** Physical pin B6: VIN; passive. */
  "VIN_B6": "B6",
  /** Physical pin B7: GND; power_in. */
  "GND_B7": "B7",
  /** Physical pin B9: GND; passive. */
  "GND_B9": "B9",
  /** Physical pin B11: MTP2; no_connect. */
  "MTP2": "B11",
  /** Physical pin B12: FSET; passive. */
  "FSET": "B12",
  /** Physical pin C1: VIN; passive. */
  "VIN_C1": "C1",
  /** Physical pin C2: VIN; passive. */
  "VIN_C2": "C2",
  /** Physical pin C3: VIN; passive. */
  "VIN_C3": "C3",
  /** Physical pin C4: VIN; passive. */
  "VIN_C4": "C4",
  /** Physical pin C5: VIN; passive. */
  "VIN_C5": "C5",
  /** Physical pin C6: VIN; passive. */
  "VIN_C6": "C6",
  /** Physical pin C7: GND; passive. */
  "GND_C7": "C7",
  /** Physical pin C9: GND; passive. */
  "GND_C9": "C9",
  /** Physical pin C10: MTP3; no_connect. */
  "MTP3": "C10",
  /** Physical pin C11: MTP4; no_connect. */
  "MTP4": "C11",
  /** Physical pin C12: MTP5; no_connect. */
  "MTP5": "C12",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: GND; passive. */
  "GND_D6": "D6",
  /** Physical pin D8: GND; passive. */
  "GND_D8": "D8",
  /** Physical pin D9: INTVCC; passive. */
  "INTVCC_D9": "D9",
  /** Physical pin D10: TEMP; passive. */
  "TEMP": "D10",
  /** Physical pin D11: MTP6; no_connect. */
  "MTP6": "D11",
  /** Physical pin D12: MTP7; no_connect. */
  "MTP7": "D12",
  /** Physical pin E1: GND; passive. */
  "GND_E1": "E1",
  /** Physical pin E2: GND; passive. */
  "GND_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: GND; passive. */
  "GND_E5": "E5",
  /** Physical pin E6: GND; passive. */
  "GND_E6": "E6",
  /** Physical pin E7: GND; passive. */
  "GND_E7": "E7",
  /** Physical pin E9: GND; passive. */
  "GND_E9": "E9",
  /** Physical pin E12: EXTVCC; power_in. */
  "EXTVCC": "E12",
  /** Physical pin F1: GND; passive. */
  "GND_F1": "F1",
  /** Physical pin F2: GND; passive. */
  "GND_F2": "F2",
  /** Physical pin F3: GND; passive. */
  "GND_F3": "F3",
  /** Physical pin F4: GND; passive. */
  "GND_F4": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin F8: GND; passive. */
  "GND_F8": "F8",
  /** Physical pin F9: GND; passive. */
  "GND_F9": "F9",
  /** Physical pin F11: PGOOD; open_collector. */
  "PGOOD_F11": "F11",
  /** Physical pin F12: VFB; input. */
  "VFB": "F12",
  /** Physical pin G1: GND; passive. */
  "GND_G1": "G1",
  /** Physical pin G2: GND; passive. */
  "GND_G2": "G2",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: GND; passive. */
  "GND_G4": "G4",
  /** Physical pin G5: GND; passive. */
  "GND_G5": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: GND; passive. */
  "GND_G7": "G7",
  /** Physical pin G8: GND; passive. */
  "GND_G8": "G8",
  /** Physical pin G9: GND; passive. */
  "GND_G9": "G9",
  /** Physical pin G11: SGND; power_in. */
  "SGND_G11": "G11",
  /** Physical pin G12: PGOOD; open_collector. */
  "PGOOD_G12": "G12",
  /** Physical pin H1: GND; passive. */
  "GND_H1": "H1",
  /** Physical pin H2: GND; passive. */
  "GND_H2": "H2",
  /** Physical pin H3: GND; passive. */
  "GND_H3": "H3",
  /** Physical pin H4: GND; passive. */
  "GND_H4": "H4",
  /** Physical pin H5: GND; passive. */
  "GND_H5": "H5",
  /** Physical pin H6: GND; passive. */
  "GND_H6": "H6",
  /** Physical pin H7: GND; passive. */
  "GND_H7": "H7",
  /** Physical pin H8: GND; passive. */
  "GND_H8": "H8",
  /** Physical pin H9: GND; passive. */
  "GND_H9": "H9",
  /** Physical pin H11: SGND; passive. */
  "SGND_H11": "H11",
  /** Physical pin H12: SGND; passive. */
  "SGND_H12": "H12",
  /** Physical pin J1: VOUT; power_out. */
  "VOUT_J1": "J1",
  /** Physical pin J2: VOUT; passive. */
  "VOUT_J2": "J2",
  /** Physical pin J3: VOUT; passive. */
  "VOUT_J3": "J3",
  /** Physical pin J4: VOUT; passive. */
  "VOUT_J4": "J4",
  /** Physical pin J5: VOUT; passive. */
  "VOUT_J5": "J5",
  /** Physical pin J6: VOUT; passive. */
  "VOUT_J6": "J6",
  /** Physical pin J7: VOUT; passive. */
  "VOUT_J7": "J7",
  /** Physical pin J8: VOUT; passive. */
  "VOUT_J8": "J8",
  /** Physical pin J9: VOUT; passive. */
  "VOUT_J9": "J9",
  /** Physical pin J10: VOUT; passive. */
  "VOUT_J10": "J10",
  /** Physical pin J12: VOSNS+; input. */
  "VOSNS+": "J12",
  /** Physical pin K1: VOUT; passive. */
  "VOUT_K1": "K1",
  /** Physical pin K2: VOUT; passive. */
  "VOUT_K2": "K2",
  /** Physical pin K3: VOUT; passive. */
  "VOUT_K3": "K3",
  /** Physical pin K4: VOUT; passive. */
  "VOUT_K4": "K4",
  /** Physical pin K5: VOUT; passive. */
  "VOUT_K5": "K5",
  /** Physical pin K6: VOUT; passive. */
  "VOUT_K6": "K6",
  /** Physical pin K7: VOUT; passive. */
  "VOUT_K7": "K7",
  /** Physical pin K8: VOUT; passive. */
  "VOUT_K8": "K8",
  /** Physical pin K9: VOUT; passive. */
  "VOUT_K9": "K9",
  /** Physical pin K10: VOUT; passive. */
  "VOUT_K10": "K10",
  /** Physical pin K11: VOUT; passive. */
  "VOUT_K11": "K11",
  /** Physical pin K12: DIFF_OUT; output. */
  "DIFF_OUT": "K12",
  /** Physical pin L1: VOUT; passive. */
  "VOUT_L1": "L1",
  /** Physical pin L2: VOUT; passive. */
  "VOUT_L2": "L2",
  /** Physical pin L3: VOUT; passive. */
  "VOUT_L3": "L3",
  /** Physical pin L4: VOUT; passive. */
  "VOUT_L4": "L4",
  /** Physical pin L5: VOUT; passive. */
  "VOUT_L5": "L5",
  /** Physical pin L6: VOUT; passive. */
  "VOUT_L6": "L6",
  /** Physical pin L7: VOUT; passive. */
  "VOUT_L7": "L7",
  /** Physical pin L8: VOUT; passive. */
  "VOUT_L8": "L8",
  /** Physical pin L9: VOUT; passive. */
  "VOUT_L9": "L9",
  /** Physical pin L10: VOUT; passive. */
  "VOUT_L10": "L10",
  /** Physical pin L11: VOUT; passive. */
  "VOUT_L11": "L11",
  /** Physical pin L12: VOUT_LCL; input. */
  "VOUT_LCL": "L12",
  /** Physical pin M1: VOUT; passive. */
  "VOUT_M1": "M1",
  /** Physical pin M2: VOUT; passive. */
  "VOUT_M2": "M2",
  /** Physical pin M3: VOUT; passive. */
  "VOUT_M3": "M3",
  /** Physical pin M4: VOUT; passive. */
  "VOUT_M4": "M4",
  /** Physical pin M5: VOUT; passive. */
  "VOUT_M5": "M5",
  /** Physical pin M6: VOUT; passive. */
  "VOUT_M6": "M6",
  /** Physical pin M7: VOUT; passive. */
  "VOUT_M7": "M7",
  /** Physical pin M8: VOUT; passive. */
  "VOUT_M8": "M8",
  /** Physical pin M9: VOUT; passive. */
  "VOUT_M9": "M9",
  /** Physical pin M10: VOUT; passive. */
  "VOUT_M10": "M10",
  /** Physical pin M11: VOUT; passive. */
  "VOUT_M11": "M11",
  /** Physical pin M12: VOSNS-; input. */
  "VOSNS-": "M12",
}) {
  override schema = "Converter_DCDC:LTM4637xV";
  override referencePrefix = "U";
}

/**
 * 20A DC/DC µModule Step-Down Regulator, BGA-133
 *
 * KiCad symbol: `Converter_DCDC:LTM4637xY`. Reference prefix: `U`.
 * Footprint filters: Linear*BGA*15.0x15.0mm*Layout12x12*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4637fc.pdf
 * Keywords: uModule DCDC.
 * Default footprint: Package_BGA:Linear_BGA-133_15.0x15.0mm_Layout12x12_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM4637xY extends Component.withPins({
  /** Physical pin A1: VIN; power_in. */
  "VIN_A1": "A1",
  /** Physical pin A2: VIN; passive. */
  "VIN_A2": "A2",
  /** Physical pin A3: VIN; passive. */
  "VIN_A3": "A3",
  /** Physical pin A4: VIN; passive. */
  "VIN_A4": "A4",
  /** Physical pin A5: VIN; passive. */
  "VIN_A5": "A5",
  /** Physical pin A6: VIN; passive. */
  "VIN_A6": "A6",
  /** Physical pin A7: INTVCC; power_out. */
  "INTVCC_A7": "A7",
  /** Physical pin A8: MODE_PLLIN; input. */
  "MODE_PLLIN": "A8",
  /** Physical pin A9: TRACK/SS; passive. */
  "TRACK/SS": "A9",
  /** Physical pin A10: RUN; input. */
  "RUN": "A10",
  /** Physical pin A11: COMP; passive. */
  "COMP": "A11",
  /** Physical pin A12: MTP1; no_connect. */
  "MTP1": "A12",
  /** Physical pin B1: VIN; passive. */
  "VIN_B1": "B1",
  /** Physical pin B2: VIN; passive. */
  "VIN_B2": "B2",
  /** Physical pin B3: VIN; passive. */
  "VIN_B3": "B3",
  /** Physical pin B4: VIN; passive. */
  "VIN_B4": "B4",
  /** Physical pin B5: VIN; passive. */
  "VIN_B5": "B5",
  /** Physical pin B6: VIN; passive. */
  "VIN_B6": "B6",
  /** Physical pin B7: GND; power_in. */
  "GND_B7": "B7",
  /** Physical pin B9: GND; passive. */
  "GND_B9": "B9",
  /** Physical pin B11: MTP2; no_connect. */
  "MTP2": "B11",
  /** Physical pin B12: FSET; passive. */
  "FSET": "B12",
  /** Physical pin C1: VIN; passive. */
  "VIN_C1": "C1",
  /** Physical pin C2: VIN; passive. */
  "VIN_C2": "C2",
  /** Physical pin C3: VIN; passive. */
  "VIN_C3": "C3",
  /** Physical pin C4: VIN; passive. */
  "VIN_C4": "C4",
  /** Physical pin C5: VIN; passive. */
  "VIN_C5": "C5",
  /** Physical pin C6: VIN; passive. */
  "VIN_C6": "C6",
  /** Physical pin C7: GND; passive. */
  "GND_C7": "C7",
  /** Physical pin C9: GND; passive. */
  "GND_C9": "C9",
  /** Physical pin C10: MTP3; no_connect. */
  "MTP3": "C10",
  /** Physical pin C11: MTP4; no_connect. */
  "MTP4": "C11",
  /** Physical pin C12: MTP5; no_connect. */
  "MTP5": "C12",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: GND; passive. */
  "GND_D6": "D6",
  /** Physical pin D8: GND; passive. */
  "GND_D8": "D8",
  /** Physical pin D9: INTVCC; passive. */
  "INTVCC_D9": "D9",
  /** Physical pin D10: TEMP; passive. */
  "TEMP": "D10",
  /** Physical pin D11: MTP6; no_connect. */
  "MTP6": "D11",
  /** Physical pin D12: MTP7; no_connect. */
  "MTP7": "D12",
  /** Physical pin E1: GND; passive. */
  "GND_E1": "E1",
  /** Physical pin E2: GND; passive. */
  "GND_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: GND; passive. */
  "GND_E5": "E5",
  /** Physical pin E6: GND; passive. */
  "GND_E6": "E6",
  /** Physical pin E7: GND; passive. */
  "GND_E7": "E7",
  /** Physical pin E9: GND; passive. */
  "GND_E9": "E9",
  /** Physical pin E12: EXTVCC; power_in. */
  "EXTVCC": "E12",
  /** Physical pin F1: GND; passive. */
  "GND_F1": "F1",
  /** Physical pin F2: GND; passive. */
  "GND_F2": "F2",
  /** Physical pin F3: GND; passive. */
  "GND_F3": "F3",
  /** Physical pin F4: GND; passive. */
  "GND_F4": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin F8: GND; passive. */
  "GND_F8": "F8",
  /** Physical pin F9: GND; passive. */
  "GND_F9": "F9",
  /** Physical pin F11: PGOOD; open_collector. */
  "PGOOD_F11": "F11",
  /** Physical pin F12: VFB; input. */
  "VFB": "F12",
  /** Physical pin G1: GND; passive. */
  "GND_G1": "G1",
  /** Physical pin G2: GND; passive. */
  "GND_G2": "G2",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: GND; passive. */
  "GND_G4": "G4",
  /** Physical pin G5: GND; passive. */
  "GND_G5": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: GND; passive. */
  "GND_G7": "G7",
  /** Physical pin G8: GND; passive. */
  "GND_G8": "G8",
  /** Physical pin G9: GND; passive. */
  "GND_G9": "G9",
  /** Physical pin G11: SGND; power_in. */
  "SGND_G11": "G11",
  /** Physical pin G12: PGOOD; open_collector. */
  "PGOOD_G12": "G12",
  /** Physical pin H1: GND; passive. */
  "GND_H1": "H1",
  /** Physical pin H2: GND; passive. */
  "GND_H2": "H2",
  /** Physical pin H3: GND; passive. */
  "GND_H3": "H3",
  /** Physical pin H4: GND; passive. */
  "GND_H4": "H4",
  /** Physical pin H5: GND; passive. */
  "GND_H5": "H5",
  /** Physical pin H6: GND; passive. */
  "GND_H6": "H6",
  /** Physical pin H7: GND; passive. */
  "GND_H7": "H7",
  /** Physical pin H8: GND; passive. */
  "GND_H8": "H8",
  /** Physical pin H9: GND; passive. */
  "GND_H9": "H9",
  /** Physical pin H11: SGND; passive. */
  "SGND_H11": "H11",
  /** Physical pin H12: SGND; passive. */
  "SGND_H12": "H12",
  /** Physical pin J1: VOUT; power_out. */
  "VOUT_J1": "J1",
  /** Physical pin J2: VOUT; passive. */
  "VOUT_J2": "J2",
  /** Physical pin J3: VOUT; passive. */
  "VOUT_J3": "J3",
  /** Physical pin J4: VOUT; passive. */
  "VOUT_J4": "J4",
  /** Physical pin J5: VOUT; passive. */
  "VOUT_J5": "J5",
  /** Physical pin J6: VOUT; passive. */
  "VOUT_J6": "J6",
  /** Physical pin J7: VOUT; passive. */
  "VOUT_J7": "J7",
  /** Physical pin J8: VOUT; passive. */
  "VOUT_J8": "J8",
  /** Physical pin J9: VOUT; passive. */
  "VOUT_J9": "J9",
  /** Physical pin J10: VOUT; passive. */
  "VOUT_J10": "J10",
  /** Physical pin J12: VOSNS+; input. */
  "VOSNS+": "J12",
  /** Physical pin K1: VOUT; passive. */
  "VOUT_K1": "K1",
  /** Physical pin K2: VOUT; passive. */
  "VOUT_K2": "K2",
  /** Physical pin K3: VOUT; passive. */
  "VOUT_K3": "K3",
  /** Physical pin K4: VOUT; passive. */
  "VOUT_K4": "K4",
  /** Physical pin K5: VOUT; passive. */
  "VOUT_K5": "K5",
  /** Physical pin K6: VOUT; passive. */
  "VOUT_K6": "K6",
  /** Physical pin K7: VOUT; passive. */
  "VOUT_K7": "K7",
  /** Physical pin K8: VOUT; passive. */
  "VOUT_K8": "K8",
  /** Physical pin K9: VOUT; passive. */
  "VOUT_K9": "K9",
  /** Physical pin K10: VOUT; passive. */
  "VOUT_K10": "K10",
  /** Physical pin K11: VOUT; passive. */
  "VOUT_K11": "K11",
  /** Physical pin K12: DIFF_OUT; output. */
  "DIFF_OUT": "K12",
  /** Physical pin L1: VOUT; passive. */
  "VOUT_L1": "L1",
  /** Physical pin L2: VOUT; passive. */
  "VOUT_L2": "L2",
  /** Physical pin L3: VOUT; passive. */
  "VOUT_L3": "L3",
  /** Physical pin L4: VOUT; passive. */
  "VOUT_L4": "L4",
  /** Physical pin L5: VOUT; passive. */
  "VOUT_L5": "L5",
  /** Physical pin L6: VOUT; passive. */
  "VOUT_L6": "L6",
  /** Physical pin L7: VOUT; passive. */
  "VOUT_L7": "L7",
  /** Physical pin L8: VOUT; passive. */
  "VOUT_L8": "L8",
  /** Physical pin L9: VOUT; passive. */
  "VOUT_L9": "L9",
  /** Physical pin L10: VOUT; passive. */
  "VOUT_L10": "L10",
  /** Physical pin L11: VOUT; passive. */
  "VOUT_L11": "L11",
  /** Physical pin L12: VOUT_LCL; input. */
  "VOUT_LCL": "L12",
  /** Physical pin M1: VOUT; passive. */
  "VOUT_M1": "M1",
  /** Physical pin M2: VOUT; passive. */
  "VOUT_M2": "M2",
  /** Physical pin M3: VOUT; passive. */
  "VOUT_M3": "M3",
  /** Physical pin M4: VOUT; passive. */
  "VOUT_M4": "M4",
  /** Physical pin M5: VOUT; passive. */
  "VOUT_M5": "M5",
  /** Physical pin M6: VOUT; passive. */
  "VOUT_M6": "M6",
  /** Physical pin M7: VOUT; passive. */
  "VOUT_M7": "M7",
  /** Physical pin M8: VOUT; passive. */
  "VOUT_M8": "M8",
  /** Physical pin M9: VOUT; passive. */
  "VOUT_M9": "M9",
  /** Physical pin M10: VOUT; passive. */
  "VOUT_M10": "M10",
  /** Physical pin M11: VOUT; passive. */
  "VOUT_M11": "M11",
  /** Physical pin M12: VOSNS-; input. */
  "VOSNS-": "M12",
}) {
  override schema = "Converter_DCDC:LTM4637xY";
  override referencePrefix = "U";
}

/**
 * Analog Devices 20VIN, 8A Step-Down DC/DC uModule Regulator, BGA-49
 *
 * KiCad symbol: `Converter_DCDC:LTM4657`. Reference prefix: `U`.
 * Footprint filters: Analog*BGA*6.25x6.25mm*Layout7x7*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltm4657.pdf
 * Keywords: uModule Buck Regulator.
 * Default footprint: Package_BGA:Analog_BGA-49_6.25x6.25mm_Layout7x7_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM4657 extends Component.withPins({
  /** Physical pin A1: V_{OUT}; power_out. */
  "V_{OUT}_A1": "A1",
  /** Physical pin A2: V_{OUT}; passive. */
  "V_{OUT}_A2": "A2",
  /** Physical pin A3: V_{OUT}; passive. */
  "V_{OUT}_A3": "A3",
  /** Physical pin A4: V_{OUT}; passive. */
  "V_{OUT}_A4": "A4",
  /** Physical pin A5: V_{OUT}; passive. */
  "V_{OUT}_A5": "A5",
  /** Physical pin A6: T_{SENSE}+; passive. */
  "T_{SENSE}+": "A6",
  /** Physical pin A7: T_{SENSE}-; passive. */
  "T_{SENSE}-": "A7",
  /** Physical pin B1: V_{OSNS}+; input. */
  "V_{OSNS}+": "B1",
  /** Physical pin B2: GND; power_in. */
  "GND_B2": "B2",
  /** Physical pin B3: INTV_{CC}; power_out. */
  "INTV_{CC}": "B3",
  /** Physical pin B4: RUN; input. */
  "RUN": "B4",
  /** Physical pin B5: PGOOD; open_collector. */
  "PGOOD": "B5",
  /** Physical pin B6: GND; passive. */
  "GND_B6": "B6",
  /** Physical pin B7: SW; passive. */
  "SW": "B7",
  /** Physical pin C1: FB; input. */
  "FB": "C1",
  /** Physical pin C2: V_{OSNS}-; input. */
  "V_{OSNS}-": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: GND; passive. */
  "GND_C5": "C5",
  /** Physical pin C6: GND; passive. */
  "GND_C6": "C6",
  /** Physical pin C7: GND; passive. */
  "GND_C7": "C7",
  /** Physical pin D1: COMPa; passive. */
  "COMPa": "D1",
  /** Physical pin D2: MODE/CLKIN; passive. */
  "MODE/CLKIN": "D2",
  /** Physical pin D3: V_{IN}; power_in. */
  "V_{IN}_D3": "D3",
  /** Physical pin D4: V_{IN}; passive. */
  "V_{IN}_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: GND; passive. */
  "GND_D6": "D6",
  /** Physical pin D7: GND; passive. */
  "GND_D7": "D7",
  /** Physical pin E1: FREQ; passive. */
  "FREQ": "E1",
  /** Physical pin E2: TRACK/SS; passive. */
  "TRACK/SS": "E2",
  /** Physical pin E3: V_{IN}; passive. */
  "V_{IN}_E3": "E3",
  /** Physical pin E4: V_{IN}; passive. */
  "V_{IN}_E4": "E4",
  /** Physical pin E5: GND; passive. */
  "GND_E5": "E5",
  /** Physical pin E6: GND; passive. */
  "GND_E6": "E6",
  /** Physical pin E7: GND; passive. */
  "GND_E7": "E7",
  /** Physical pin F1: COMPb; passive. */
  "COMPb": "F1",
  /** Physical pin F2: CLKOUT; output. */
  "CLKOUT": "F2",
  /** Physical pin F3: V_{OUT}; passive. */
  "V_{OUT}_F3": "F3",
  /** Physical pin F4: V_{IN}; passive. */
  "V_{IN}_F4": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin G1: V_{OUT}; passive. */
  "V_{OUT}_G1": "G1",
  /** Physical pin G2: V_{OUT}; passive. */
  "V_{OUT}_G2": "G2",
  /** Physical pin G3: V_{OUT}; passive. */
  "V_{OUT}_G3": "G3",
  /** Physical pin G4: V_{IN}; passive. */
  "V_{IN}_G4": "G4",
  /** Physical pin G5: PHMODE; passive. */
  "PHMODE": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: GND; passive. */
  "GND_G7": "G7",
}) {
  override schema = "Converter_DCDC:LTM4657";
  override referencePrefix = "U";
}

/**
 * Quad DC/DC μModule Regulator with Configurable 1.2A Output Array
 *
 * KiCad symbol: `Converter_DCDC:LTM4668`. Reference prefix: `U`.
 * Footprint filters: Analog*BGA*6.25x6.25mm*Layout7x7*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltm4668.pdf
 * Keywords: uModule DCDC.
 * Default footprint: Package_BGA:Analog_BGA-49_6.25x6.25mm_Layout7x7_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM4668 extends Component.withPins({
  /** Physical pin A1: VOUT1; power_out. */
  "VOUT1_A1": "A1",
  /** Physical pin A2: GND; power_in. */
  "GND_A2": "A2",
  /** Physical pin A3: GND; passive. */
  "GND_A3": "A3",
  /** Physical pin A4: VIN; power_in. */
  "VIN_A4": "A4",
  /** Physical pin A5: GND; passive. */
  "GND_A5": "A5",
  /** Physical pin A6: GND; passive. */
  "GND_A6": "A6",
  /** Physical pin A7: VOUT2; power_out. */
  "VOUT2_A7": "A7",
  /** Physical pin B1: VOUT1; passive. */
  "VOUT1_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: VIN; passive. */
  "VIN_B4": "B4",
  /** Physical pin B5: GND; passive. */
  "GND_B5": "B5",
  /** Physical pin B6: GND; passive. */
  "GND_B6": "B6",
  /** Physical pin B7: VOUT2; passive. */
  "VOUT2_B7": "B7",
  /** Physical pin C1: FB1; output. */
  "FB1": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: RUN1; input. */
  "RUN1": "C3",
  /** Physical pin C4: INTVCC; output. */
  "INTVCC": "C4",
  /** Physical pin C5: RUN2; input. */
  "RUN2": "C5",
  /** Physical pin C6: GND; passive. */
  "GND_C6": "C6",
  /** Physical pin C7: FB2; output. */
  "FB2": "C7",
  /** Physical pin D1: PGOOD4; open_collector. */
  "PGOOD4": "D1",
  /** Physical pin D2: PGOOD1; open_collector. */
  "PGOOD1": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: PGOOD2; open_collector. */
  "PGOOD2": "D6",
  /** Physical pin D7: PGOOD3; open_collector. */
  "PGOOD3": "D7",
  /** Physical pin E1: FB4; output. */
  "FB4": "E1",
  /** Physical pin E2: GND; passive. */
  "GND_E2": "E2",
  /** Physical pin E3: RUN4; input. */
  "RUN4": "E3",
  /** Physical pin E4: MODE/SYNC; input. */
  "MODE/SYNC": "E4",
  /** Physical pin E5: RUN3; input. */
  "RUN3": "E5",
  /** Physical pin E6: GND; passive. */
  "GND_E6": "E6",
  /** Physical pin E7: FB3; output. */
  "FB3": "E7",
  /** Physical pin F1: VOUT4; power_out. */
  "VOUT4_F1": "F1",
  /** Physical pin F2: GND; passive. */
  "GND_F2": "F2",
  /** Physical pin F3: GND; passive. */
  "GND_F3": "F3",
  /** Physical pin F4: VIN; power_in. */
  "VIN_F4": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: VOUT3; power_out. */
  "VOUT3_F7": "F7",
  /** Physical pin G1: VOUT4; passive. */
  "VOUT4_G1": "G1",
  /** Physical pin G2: GND; passive. */
  "GND_G2": "G2",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: VIN; passive. */
  "VIN_G4": "G4",
  /** Physical pin G5: GND; passive. */
  "GND_G5": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: VOUT3; passive. */
  "VOUT3_G7": "G7",
}) {
  override schema = "Converter_DCDC:LTM4668";
  override referencePrefix = "U";
}

/**
 * Quad DC/DC μModule Regulator with Configurable 1.2A Output Array
 *
 * KiCad symbol: `Converter_DCDC:LTM4668A`. Reference prefix: `U`.
 * Footprint filters: Analog*BGA*6.25x6.25mm*Layout7x7*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltm4668a.pdf
 * Keywords: uModule DCDC.
 * Default footprint: Package_BGA:Analog_BGA-49_6.25x6.25mm_Layout7x7_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM4668A extends Component.withPins({
  /** Physical pin A1: VOUT1; power_out. */
  "VOUT1_A1": "A1",
  /** Physical pin A2: GND; power_in. */
  "GND_A2": "A2",
  /** Physical pin A3: GND; passive. */
  "GND_A3": "A3",
  /** Physical pin A4: VIN; power_in. */
  "VIN_A4": "A4",
  /** Physical pin A5: GND; passive. */
  "GND_A5": "A5",
  /** Physical pin A6: GND; passive. */
  "GND_A6": "A6",
  /** Physical pin A7: VOUT2; power_out. */
  "VOUT2_A7": "A7",
  /** Physical pin B1: VOUT1; passive. */
  "VOUT1_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: VIN; passive. */
  "VIN_B4": "B4",
  /** Physical pin B5: GND; passive. */
  "GND_B5": "B5",
  /** Physical pin B6: GND; passive. */
  "GND_B6": "B6",
  /** Physical pin B7: VOUT2; passive. */
  "VOUT2_B7": "B7",
  /** Physical pin C1: FB1; output. */
  "FB1": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: RUN1; input. */
  "RUN1": "C3",
  /** Physical pin C4: INTVCC; output. */
  "INTVCC": "C4",
  /** Physical pin C5: RUN2; input. */
  "RUN2": "C5",
  /** Physical pin C6: GND; passive. */
  "GND_C6": "C6",
  /** Physical pin C7: FB2; output. */
  "FB2": "C7",
  /** Physical pin D1: PGOOD4; open_collector. */
  "PGOOD4": "D1",
  /** Physical pin D2: PGOOD1; open_collector. */
  "PGOOD1": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: PGOOD2; open_collector. */
  "PGOOD2": "D6",
  /** Physical pin D7: PGOOD3; open_collector. */
  "PGOOD3": "D7",
  /** Physical pin E1: FB4; output. */
  "FB4": "E1",
  /** Physical pin E2: GND; passive. */
  "GND_E2": "E2",
  /** Physical pin E3: RUN4; input. */
  "RUN4": "E3",
  /** Physical pin E4: MODE/SYNC; input. */
  "MODE/SYNC": "E4",
  /** Physical pin E5: RUN3; input. */
  "RUN3": "E5",
  /** Physical pin E6: GND; passive. */
  "GND_E6": "E6",
  /** Physical pin E7: FB3; output. */
  "FB3": "E7",
  /** Physical pin F1: VOUT4; power_out. */
  "VOUT4_F1": "F1",
  /** Physical pin F2: GND; passive. */
  "GND_F2": "F2",
  /** Physical pin F3: GND; passive. */
  "GND_F3": "F3",
  /** Physical pin F4: VIN; power_in. */
  "VIN_F4": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: VOUT3; power_out. */
  "VOUT3_F7": "F7",
  /** Physical pin G1: VOUT4; passive. */
  "VOUT4_G1": "G1",
  /** Physical pin G2: GND; passive. */
  "GND_G2": "G2",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: VIN; passive. */
  "VIN_G4": "G4",
  /** Physical pin G5: GND; passive. */
  "GND_G5": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: VOUT3; passive. */
  "VOUT3_G7": "G7",
}) {
  override schema = "Converter_DCDC:LTM4668A";
  override referencePrefix = "U";
}

/**
 * Quad DC/DC uModule Regulator with Configurable Dual 0.6-3.3V/12A, Dual 0.6-5.5V/5A Output Array, 3.1-20Vin (BGA-209)
 *
 * KiCad symbol: `Converter_DCDC:LTM4671`. Reference prefix: `U`.
 * Footprint filters: Analog*BGA*9.5x16mm*Layout11x19*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LTM4671.pdf
 * Keywords: uModule DCDC.
 * Default footprint: Package_BGA:Analog_BGA-209_9.5x16mm_Layout11x19_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM4671 extends Component.withPins({
  /** Physical pin A1: V_{OUT0}; power_out. */
  "V_{OUT0}_A1": "A1",
  /** Physical pin A2: V_{OUT0}; passive. */
  "V_{OUT0}_A2": "A2",
  /** Physical pin A3: V_{OUT0}; passive. */
  "V_{OUT0}_A3": "A3",
  /** Physical pin A4: GND; power_in. */
  "GND_A4": "A4",
  /** Physical pin A5: GND; passive. */
  "GND_A5": "A5",
  /** Physical pin A6: TSENSE0^{-}; passive. */
  "TSENSE0^{-}": "A6",
  /** Physical pin A7: TSENSE0^{+}; passive. */
  "TSENSE0^{+}": "A7",
  /** Physical pin A8: GND; passive. */
  "GND_A8": "A8",
  /** Physical pin A9: GND; passive. */
  "GND_A9": "A9",
  /** Physical pin A10: GND; passive. */
  "GND_A10": "A10",
  /** Physical pin A11: GND; passive. */
  "GND_A11": "A11",
  /** Physical pin B1: V_{OUT0}; passive. */
  "V_{OUT0}_B1": "B1",
  /** Physical pin B2: V_{OUT0}; passive. */
  "V_{OUT0}_B2": "B2",
  /** Physical pin B3: V_{OUT0}; passive. */
  "V_{OUT0}_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: GND; passive. */
  "GND_B5": "B5",
  /** Physical pin B6: GND; passive. */
  "GND_B6": "B6",
  /** Physical pin B7: GND; passive. */
  "GND_B7": "B7",
  /** Physical pin B8: GND; passive. */
  "GND_B8": "B8",
  /** Physical pin B9: GND; passive. */
  "GND_B9": "B9",
  /** Physical pin B10: GND; passive. */
  "GND_B10": "B10",
  /** Physical pin B11: GND; passive. */
  "GND_B11": "B11",
  /** Physical pin C1: V_{OUT0}; passive. */
  "V_{OUT0}_C1": "C1",
  /** Physical pin C2: V_{OUT0}; passive. */
  "V_{OUT0}_C2": "C2",
  /** Physical pin C3: V_{OUT0}; passive. */
  "V_{OUT0}_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: GND; passive. */
  "GND_C5": "C5",
  /** Physical pin C6: GND; passive. */
  "GND_C6": "C6",
  /** Physical pin C7: GND; passive. */
  "GND_C7": "C7",
  /** Physical pin C8: GND; passive. */
  "GND_C8": "C8",
  /** Physical pin C9: GND; passive. */
  "GND_C9": "C9",
  /** Physical pin C10: GND; passive. */
  "GND_C10": "C10",
  /** Physical pin C11: GND; passive. */
  "GND_C11": "C11",
  /** Physical pin D1: V_{OUT0}; passive. */
  "V_{OUT0}_D1": "D1",
  /** Physical pin D2: V_{OUT0}; passive. */
  "V_{OUT0}_D2": "D2",
  /** Physical pin D3: V_{OUT0}; passive. */
  "V_{OUT0}_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: GND; passive. */
  "GND_D6": "D6",
  /** Physical pin D7: V_{IN}; power_in. */
  "V_{IN}_D7": "D7",
  /** Physical pin D8: V_{IN}; passive. */
  "V_{IN}_D8": "D8",
  /** Physical pin D9: V_{IN}; passive. */
  "V_{IN}_D9": "D9",
  /** Physical pin D10: V_{IN}; passive. */
  "V_{IN}_D10": "D10",
  /** Physical pin D11: V_{IN}; passive. */
  "V_{IN}_D11": "D11",
  /** Physical pin E1: V_{OUT0}; passive. */
  "V_{OUT0}_E1": "E1",
  /** Physical pin E2: V_{OUT0}; passive. */
  "V_{OUT0}_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: GND; passive. */
  "GND_E5": "E5",
  /** Physical pin E6: PHMODE0; passive. */
  "PHMODE0": "E6",
  /** Physical pin E7: INTV_{CC0}; power_out. */
  "INTV_{CC0}": "E7",
  /** Physical pin E8: V_{IN}; passive. */
  "V_{IN}_E8": "E8",
  /** Physical pin E9: SV_{IN0}; power_in. */
  "SV_{IN0}": "E9",
  /** Physical pin E10: CLKOUT0; output. */
  "CLKOUT0": "E10",
  /** Physical pin E11: PGOOD0; open_collector. */
  "PGOOD0": "E11",
  /** Physical pin F1: GND; passive. */
  "GND_F1": "F1",
  /** Physical pin F2: GND; passive. */
  "GND_F2": "F2",
  /** Physical pin F3: GND; passive. */
  "GND_F3": "F3",
  /** Physical pin F4: GND; passive. */
  "GND_F4": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin F8: VOSNS0^{-}; input. */
  "VOSNS0^{-}": "F8",
  /** Physical pin F9: TRACK/SS0; passive. */
  "TRACK/SS0": "F9",
  /** Physical pin F10: FREQ0; input. */
  "FREQ0": "F10",
  /** Physical pin F11: RUN0; input. */
  "RUN0": "F11",
  /** Physical pin G1: GND; passive. */
  "GND_G1": "G1",
  /** Physical pin G2: GND; passive. */
  "GND_G2": "G2",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: GND; passive. */
  "GND_G4": "G4",
  /** Physical pin G5: GND; passive. */
  "GND_G5": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: TRACK/SS1; passive. */
  "TRACK/SS1": "G7",
  /** Physical pin G8: VOSNS0^{+}; input. */
  "VOSNS0^{+}": "G8",
  /** Physical pin G9: FB0; input. */
  "FB0": "G9",
  /** Physical pin G10: GND; passive. */
  "GND_G10": "G10",
  /** Physical pin G11: MODE/CLKIN0; passive. */
  "MODE/CLKIN0": "G11",
  /** Physical pin H1: V_{OUT1}; power_out. */
  "V_{OUT1}_H1": "H1",
  /** Physical pin H2: V_{OUT1}; passive. */
  "V_{OUT1}_H2": "H2",
  /** Physical pin H3: V_{OUT1}; passive. */
  "V_{OUT1}_H3": "H3",
  /** Physical pin H4: V_{OUT1}; passive. */
  "V_{OUT1}_H4": "H4",
  /** Physical pin H5: GND; passive. */
  "GND_H5": "H5",
  /** Physical pin H6: V_{IN}; power_in. */
  "V_{IN}_H6": "H6",
  /** Physical pin H7: GND; passive. */
  "GND_H7": "H7",
  /** Physical pin H8: PGOOD1; open_collector. */
  "PGOOD1": "H8",
  /** Physical pin H9: FB1; input. */
  "FB1": "H9",
  /** Physical pin H10: COMP0a; passive. */
  "COMP0a": "H10",
  /** Physical pin H11: COMP0b; passive. */
  "COMP0b": "H11",
  /** Physical pin J1: V_{OUT1}; passive. */
  "V_{OUT1}_J1": "J1",
  /** Physical pin J2: V_{OUT1}; passive. */
  "V_{OUT1}_J2": "J2",
  /** Physical pin J3: V_{OUT1}; passive. */
  "V_{OUT1}_J3": "J3",
  /** Physical pin J4: V_{OUT1}; passive. */
  "V_{OUT1}_J4": "J4",
  /** Physical pin J5: V_{IN}; passive. */
  "V_{IN}_J5": "J5",
  /** Physical pin J6: V_{IN}; passive. */
  "V_{IN}_J6": "J6",
  /** Physical pin J7: GND; passive. */
  "GND_J7": "J7",
  /** Physical pin J8: RUN1; input. */
  "RUN1": "J8",
  /** Physical pin J9: GND; passive. */
  "GND_J9": "J9",
  /** Physical pin J10: VOSNS1; input. */
  "VOSNS1": "J10",
  /** Physical pin J11: COMP1; passive. */
  "COMP1": "J11",
  /** Physical pin K1: GND; passive. */
  "GND_K1": "K1",
  /** Physical pin K2: GND; passive. */
  "GND_K2": "K2",
  /** Physical pin K3: GND; passive. */
  "GND_K3": "K3",
  /** Physical pin K4: GND; passive. */
  "GND_K4": "K4",
  /** Physical pin K5: GND; passive. */
  "GND_K5": "K5",
  /** Physical pin K6: GND; passive. */
  "GND_K6": "K6",
  /** Physical pin K7: GND; passive. */
  "GND_K7": "K7",
  /** Physical pin K8: TMON; passive. */
  "TMON": "K8",
  /** Physical pin K9: INTV_{CC12}; power_out. */
  "INTV_{CC12}": "K9",
  /** Physical pin K10: FREQ12; passive. */
  "FREQ12": "K10",
  /** Physical pin K11: GND; passive. */
  "GND_K11": "K11",
  /** Physical pin L1: V_{OUT2}; power_out. */
  "V_{OUT2}_L1": "L1",
  /** Physical pin L2: V_{OUT2}; passive. */
  "V_{OUT2}_L2": "L2",
  /** Physical pin L3: V_{OUT2}; passive. */
  "V_{OUT2}_L3": "L3",
  /** Physical pin L4: V_{OUT2}; passive. */
  "V_{OUT2}_L4": "L4",
  /** Physical pin L5: V_{IN}; power_in. */
  "V_{IN}_L5": "L5",
  /** Physical pin L6: V_{IN}; passive. */
  "V_{IN}_L6": "L6",
  /** Physical pin L7: GND; passive. */
  "GND_L7": "L7",
  /** Physical pin L8: RUN2; input. */
  "RUN2": "L8",
  /** Physical pin L9: MODE/CLKIN12; passive. */
  "MODE/CLKIN12": "L9",
  /** Physical pin L10: VOSNS2; input. */
  "VOSNS2": "L10",
  /** Physical pin L11: GND; passive. */
  "GND_L11": "L11",
  /** Physical pin M1: V_{OUT2}; passive. */
  "V_{OUT2}_M1": "M1",
  /** Physical pin M2: V_{OUT2}; passive. */
  "V_{OUT2}_M2": "M2",
  /** Physical pin M3: V_{OUT2}; passive. */
  "V_{OUT2}_M3": "M3",
  /** Physical pin M4: V_{OUT2}; passive. */
  "V_{OUT2}_M4": "M4",
  /** Physical pin M5: GND; passive. */
  "GND_M5": "M5",
  /** Physical pin M6: V_{IN}; passive. */
  "V_{IN}_M6": "M6",
  /** Physical pin M7: GND; passive. */
  "GND_M7": "M7",
  /** Physical pin M8: PGOOD2; open_collector. */
  "PGOOD2": "M8",
  /** Physical pin M9: FB2; input. */
  "FB2": "M9",
  /** Physical pin M10: GND; passive. */
  "GND_M10": "M10",
  /** Physical pin M11: COMP2; passive. */
  "COMP2": "M11",
  /** Physical pin N1: GND; passive. */
  "GND_N1": "N1",
  /** Physical pin N2: GND; passive. */
  "GND_N2": "N2",
  /** Physical pin N3: GND; passive. */
  "GND_N3": "N3",
  /** Physical pin N4: GND; passive. */
  "GND_N4": "N4",
  /** Physical pin N5: GND; passive. */
  "GND_N5": "N5",
  /** Physical pin N6: GND; passive. */
  "GND_N6": "N6",
  /** Physical pin N7: TRACK/SS2; passive. */
  "TRACK/SS2": "N7",
  /** Physical pin N8: COMP3b; passive. */
  "COMP3b": "N8",
  /** Physical pin N9: COMP3a; passive. */
  "COMP3a": "N9",
  /** Physical pin N10: FB3; input. */
  "FB3": "N10",
  /** Physical pin N11: VOSNS3^{+}; input. */
  "VOSNS3^{+}": "N11",
  /** Physical pin P1: GND; passive. */
  "GND_P1": "P1",
  /** Physical pin P2: GND; passive. */
  "GND_P2": "P2",
  /** Physical pin P3: GND; passive. */
  "GND_P3": "P3",
  /** Physical pin P4: GND; passive. */
  "GND_P4": "P4",
  /** Physical pin P5: GND; passive. */
  "GND_P5": "P5",
  /** Physical pin P6: CLKOUT3; output. */
  "CLKOUT3": "P6",
  /** Physical pin P7: RUN3; input. */
  "RUN3": "P7",
  /** Physical pin P8: FREQ3; input. */
  "FREQ3": "P8",
  /** Physical pin P9: TRACK/SS3; passive. */
  "TRACK/SS3": "P9",
  /** Physical pin P10: VOSNS3^{-}; input. */
  "VOSNS3^{-}": "P10",
  /** Physical pin P11: GND; passive. */
  "GND_P11": "P11",
  /** Physical pin R1: V_{OUT3}; power_out. */
  "V_{OUT3}_R1": "R1",
  /** Physical pin R2: V_{OUT3}; passive. */
  "V_{OUT3}_R2": "R2",
  /** Physical pin R3: GND; passive. */
  "GND_R3": "R3",
  /** Physical pin R4: GND; passive. */
  "GND_R4": "R4",
  /** Physical pin R5: GND; passive. */
  "GND_R5": "R5",
  /** Physical pin R6: PHMODE3; passive. */
  "PHMODE3": "R6",
  /** Physical pin R7: PGOOD3; open_collector. */
  "PGOOD3": "R7",
  /** Physical pin R8: MODE/CLKIN3; passive. */
  "MODE/CLKIN3": "R8",
  /** Physical pin R9: SV_{IN3}; power_in. */
  "SV_{IN3}": "R9",
  /** Physical pin R10: V_{IN}; power_in. */
  "V_{IN}_R10": "R10",
  /** Physical pin R11: INTV_{CC3}; power_out. */
  "INTV_{CC3}": "R11",
  /** Physical pin T1: V_{OUT3}; passive. */
  "V_{OUT3}_T1": "T1",
  /** Physical pin T2: V_{OUT3}; passive. */
  "V_{OUT3}_T2": "T2",
  /** Physical pin T3: V_{OUT3}; passive. */
  "V_{OUT3}_T3": "T3",
  /** Physical pin T4: GND; passive. */
  "GND_T4": "T4",
  /** Physical pin T5: GND; passive. */
  "GND_T5": "T5",
  /** Physical pin T6: GND; passive. */
  "GND_T6": "T6",
  /** Physical pin T7: V_{IN}; passive. */
  "V_{IN}_T7": "T7",
  /** Physical pin T8: V_{IN}; passive. */
  "V_{IN}_T8": "T8",
  /** Physical pin T9: V_{IN}; passive. */
  "V_{IN}_T9": "T9",
  /** Physical pin T10: V_{IN}; passive. */
  "V_{IN}_T10": "T10",
  /** Physical pin T11: V_{IN}; passive. */
  "V_{IN}_T11": "T11",
  /** Physical pin U1: V_{OUT3}; passive. */
  "V_{OUT3}_U1": "U1",
  /** Physical pin U2: V_{OUT3}; passive. */
  "V_{OUT3}_U2": "U2",
  /** Physical pin U3: V_{OUT3}; passive. */
  "V_{OUT3}_U3": "U3",
  /** Physical pin U4: GND; passive. */
  "GND_U4": "U4",
  /** Physical pin U5: GND; passive. */
  "GND_U5": "U5",
  /** Physical pin U6: GND; passive. */
  "GND_U6": "U6",
  /** Physical pin U7: GND; passive. */
  "GND_U7": "U7",
  /** Physical pin U8: GND; passive. */
  "GND_U8": "U8",
  /** Physical pin U9: GND; passive. */
  "GND_U9": "U9",
  /** Physical pin U10: GND; passive. */
  "GND_U10": "U10",
  /** Physical pin U11: GND; passive. */
  "GND_U11": "U11",
  /** Physical pin V1: V_{OUT3}; passive. */
  "V_{OUT3}_V1": "V1",
  /** Physical pin V2: V_{OUT3}; passive. */
  "V_{OUT3}_V2": "V2",
  /** Physical pin V3: V_{OUT3}; passive. */
  "V_{OUT3}_V3": "V3",
  /** Physical pin V4: GND; passive. */
  "GND_V4": "V4",
  /** Physical pin V5: GND; passive. */
  "GND_V5": "V5",
  /** Physical pin V6: GND; passive. */
  "GND_V6": "V6",
  /** Physical pin V7: GND; passive. */
  "GND_V7": "V7",
  /** Physical pin V8: GND; passive. */
  "GND_V8": "V8",
  /** Physical pin V9: GND; passive. */
  "GND_V9": "V9",
  /** Physical pin V10: GND; passive. */
  "GND_V10": "V10",
  /** Physical pin V11: GND; passive. */
  "GND_V11": "V11",
  /** Physical pin W1: V_{OUT3}; passive. */
  "V_{OUT3}_W1": "W1",
  /** Physical pin W2: V_{OUT3}; passive. */
  "V_{OUT3}_W2": "W2",
  /** Physical pin W3: V_{OUT3}; passive. */
  "V_{OUT3}_W3": "W3",
  /** Physical pin W4: GND; passive. */
  "GND_W4": "W4",
  /** Physical pin W5: GND; passive. */
  "GND_W5": "W5",
  /** Physical pin W6: TSENSE3^{+}; passive. */
  "TSENSE3^{+}": "W6",
  /** Physical pin W7: TSENSE3^{-}; passive. */
  "TSENSE3^{-}": "W7",
  /** Physical pin W8: GND; passive. */
  "GND_W8": "W8",
  /** Physical pin W9: GND; passive. */
  "GND_W9": "W9",
  /** Physical pin W10: GND; passive. */
  "GND_W10": "W10",
  /** Physical pin W11: GND; passive. */
  "GND_W11": "W11",
}) {
  override schema = "Converter_DCDC:LTM4671";
  override referencePrefix = "U";
}

/**
 * Dual SEPIC or Inverting μModule DC/DC Converter, 2.6 to 20V input, 2.5V to 24V or -2.5V to -24V output, 1A @ 5V output current per converter, BGA-77 package.
 *
 * KiCad symbol: `Converter_DCDC:LTM8049`. Reference prefix: `U`.
 * Footprint filters: Analog*BGA*9x15mm*Layout7x11*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LTM8049.pdf
 * Keywords: DC/DC Converter Dual.
 * Default footprint: Package_BGA:Analog_BGA-77_9x15mm_Layout7x11_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM8049 extends Component.withPins({
  /** Physical pin A1: V_{OUT1P}; power_out. */
  "V_{OUT1P}_A1": "A1",
  /** Physical pin A2: V_{OUT1P}; passive. */
  "V_{OUT1P}_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: V_{IN1}; power_in. */
  "V_{IN1}_A5": "A5",
  /** Physical pin A6: V_{IN1}; passive. */
  "V_{IN1}_A6": "A6",
  /** Physical pin A7: V_{IN1}; passive. */
  "V_{IN1}_A7": "A7",
  /** Physical pin B1: V_{OUT1P}; passive. */
  "V_{OUT1P}_B1": "B1",
  /** Physical pin B2: V_{OUT1P}; passive. */
  "V_{OUT1P}_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: GND; passive. */
  "GND_B5": "B5",
  /** Physical pin B6: GND; passive. */
  "GND_B6": "B6",
  /** Physical pin B7: RUN1; input. */
  "RUN1": "B7",
  /** Physical pin C1: FBX1; input. */
  "FBX1": "C1",
  /** Physical pin C2: V_{OUT1N}; power_out. */
  "V_{OUT1N}_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: GND; passive. */
  "GND_C5": "C5",
  /** Physical pin C6: GND; passive. */
  "GND_C6": "C6",
  /** Physical pin C7: SS1; output. */
  "SS1": "C7",
  /** Physical pin D1: V_{OUT1N}; passive. */
  "V_{OUT1N}_D1": "D1",
  /** Physical pin D2: V_{OUT1N}; passive. */
  "V_{OUT1N}_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin D6: PG1; output. */
  "PG1": "D6",
  /** Physical pin D7: SYNC1; input. */
  "SYNC1": "D7",
  /** Physical pin E1: V_{OUT1N}; passive. */
  "V_{OUT1N}_E1": "E1",
  /** Physical pin E2: V_{OUT1N}; passive. */
  "V_{OUT1N}_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: GND; passive. */
  "GND_E5": "E5",
  /** Physical pin E6: CLKOUT1; output. */
  "CLKOUT1": "E6",
  /** Physical pin E7: RT1; input. */
  "RT1": "E7",
  /** Physical pin F1: GND; passive. */
  "GND_F1": "F1",
  /** Physical pin F2: GND; passive. */
  "GND_F2": "F2",
  /** Physical pin F3: SHARE1; input. */
  "SHARE1": "F3",
  /** Physical pin F4: SHARE2; input. */
  "SHARE2": "F4",
  /** Physical pin F5: GND; passive. */
  "GND_F5": "F5",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin G1: V_{OUT2N}; power_out. */
  "V_{OUT2N}_G1": "G1",
  /** Physical pin G2: V_{OUT2N}; passive. */
  "V_{OUT2N}_G2": "G2",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: GND; passive. */
  "GND_G4": "G4",
  /** Physical pin G5: GND; passive. */
  "GND_G5": "G5",
  /** Physical pin G6: CLKOUT2; output. */
  "CLKOUT2": "G6",
  /** Physical pin G7: RT2; input. */
  "RT2": "G7",
  /** Physical pin H1: V_{OUT2N}; passive. */
  "V_{OUT2N}_H1": "H1",
  /** Physical pin H2: V_{OUT2N}; passive. */
  "V_{OUT2N}_H2": "H2",
  /** Physical pin H3: GND; passive. */
  "GND_H3": "H3",
  /** Physical pin H4: GND; passive. */
  "GND_H4": "H4",
  /** Physical pin H5: GND; passive. */
  "GND_H5": "H5",
  /** Physical pin H6: PG2; output. */
  "PG2": "H6",
  /** Physical pin H7: SYNC2; input. */
  "SYNC2": "H7",
  /** Physical pin J1: FBX2; input. */
  "FBX2": "J1",
  /** Physical pin J2: V_{OUT2N}; passive. */
  "V_{OUT2N}_J2": "J2",
  /** Physical pin J3: GND; passive. */
  "GND_J3": "J3",
  /** Physical pin J4: GND; passive. */
  "GND_J4": "J4",
  /** Physical pin J5: GND; passive. */
  "GND_J5": "J5",
  /** Physical pin J6: GND; passive. */
  "GND_J6": "J6",
  /** Physical pin J7: SS2; output. */
  "SS2": "J7",
  /** Physical pin K1: V_{OUT2P}; power_out. */
  "V_{OUT2P}_K1": "K1",
  /** Physical pin K2: V_{OUT2P}; passive. */
  "V_{OUT2P}_K2": "K2",
  /** Physical pin K3: GND; passive. */
  "GND_K3": "K3",
  /** Physical pin K4: GND; passive. */
  "GND_K4": "K4",
  /** Physical pin K5: GND; passive. */
  "GND_K5": "K5",
  /** Physical pin K6: GND; passive. */
  "GND_K6": "K6",
  /** Physical pin K7: RUN2; input. */
  "RUN2": "K7",
  /** Physical pin L1: V_{OUT2P}; passive. */
  "V_{OUT2P}_L1": "L1",
  /** Physical pin L2: V_{OUT2P}; passive. */
  "V_{OUT2P}_L2": "L2",
  /** Physical pin L3: GND; passive. */
  "GND_L3": "L3",
  /** Physical pin L4: GND; passive. */
  "GND_L4": "L4",
  /** Physical pin L5: V_{IN2}; power_in. */
  "V_{IN2}_L5": "L5",
  /** Physical pin L6: V_{IN2}; passive. */
  "V_{IN2}_L6": "L6",
  /** Physical pin L7: V_{IN2}; passive. */
  "V_{IN2}_L7": "L7",
}) {
  override schema = "Converter_DCDC:LTM8049";
  override referencePrefix = "U";
}

/**
 * 40VIN, 2A Silent Switcher µModule Regulator, BGA-28
 *
 * KiCad symbol: `Converter_DCDC:LTM8063`. Reference prefix: `U`.
 * Footprint filters: Analog*BGA*4x6.25mm*Layout4x7*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/8063fa.pdf
 * Keywords: uModule DCDC.
 * Default footprint: Package_BGA:Analog_BGA-28_4x6.25mm_Layout4x7_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTM8063 extends Component.withPins({
  /** Physical pin A1: GND; power_in. */
  "GND_A1": "A1",
  /** Physical pin A2: FB; input. */
  "FB": "A2",
  /** Physical pin A3: TR/SS; input. */
  "TR/SS": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin B1: PG; open_collector. */
  "PG": "B1",
  /** Physical pin B2: SYNC; input. */
  "SYNC": "B2",
  /** Physical pin B3: RUN; input. */
  "RUN": "B3",
  /** Physical pin B4: VIN; power_in. */
  "VIN_B4": "B4",
  /** Physical pin C1: RT; input. */
  "RT": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: VIN; power_in. */
  "VIN_C4": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin E1: GND; passive. */
  "GND_E1": "E1",
  /** Physical pin E2: GND; passive. */
  "GND_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin F1: VOUT; power_out. */
  "VOUT_F1": "F1",
  /** Physical pin F2: VOUT; passive. */
  "VOUT_F2": "F2",
  /** Physical pin F3: VOUT; passive. */
  "VOUT_F3": "F3",
  /** Physical pin F4: VOUT; passive. */
  "VOUT_F4": "F4",
  /** Physical pin G1: VOUT; passive. */
  "VOUT_G1": "G1",
  /** Physical pin G2: VOUT; passive. */
  "VOUT_G2": "G2",
  /** Physical pin G3: VOUT; passive. */
  "VOUT_G3": "G3",
  /** Physical pin G4: VOUT; passive. */
  "VOUT_G4": "G4",
}) {
  override schema = "Converter_DCDC:LTM8063";
  override referencePrefix = "U";
}

/**
 * DC/DC Switching Regulator, Power Module, 1A, Cyntec MUN12AD01
 *
 * KiCad symbol: `Converter_DCDC:MUN12AD01-SH`. Reference prefix: `U`.
 * Footprint filters: Converter?DCDC?Cyntec?MUN12AD01?SH*.
 * @see http://www.cyntec.com/upfile/products/download/Cyntec%20MUN12AD01-SH_Datasheet.pdf
 * Keywords: DC/DC Switching Regulator Power Module 1A Cyntec MUN12AD01.
 * Default footprint: Converter_DCDC:Converter_DCDC_Cyntec_MUN12AD01-SH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MUN12AD01_SH extends Component.withPins({
  /** Physical pin 1: SS; input. */
  "SS": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: PGOOD; open_collector. */
  "PGOOD": "3",
  /** Physical pin 4: VOUT; power_out. */
  "VOUT": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: EN; input. */
  "EN": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Converter_DCDC:MUN12AD01-SH";
  override referencePrefix = "U";
}

/**
 * DC/DC Switching Regulator, Power Module, 3A, Cyntec MUN12AD03
 *
 * KiCad symbol: `Converter_DCDC:MUN12AD03-SH`. Reference prefix: `U`.
 * Footprint filters: Converter?DCDC?Cyntec?MUN12AD03?SH*.
 * @see http://www.cyntec.com/upfile/products/download/Cyntec%20MUN12AD03-SH_Datasheet.pdf
 * Keywords: DC/DC Switching Regulator Power Module 3A Cyntec MUN12AD03.
 * Default footprint: Converter_DCDC:Converter_DCDC_Cyntec_MUN12AD03-SH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MUN12AD03_SH extends Component.withPins({
  /** Physical pin 1: SS; input. */
  "SS": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: PGOOD; open_collector. */
  "PGOOD": "3",
  /** Physical pin 4: VOUT; power_out. */
  "VOUT_4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: EN; input. */
  "EN": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: VOUT; passive. */
  "VOUT_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:MUN12AD03-SH";
  override referencePrefix = "U";
}

/**
 * PicoBK Inductor Built-in Step-Down “mini DC/DC” Converters. 3MHz, input 2V to 6V, fixed output voltage 0.8V to 4V, 600mA output current. 2.5 x 2.0mm.
 *
 * KiCad symbol: `Converter_DCDC:MYRGPxx0060x21RC`. Reference prefix: `U`.
 * Footprint filters: Converter?DCDC?Murata?MYRxP*.
 * @see https://www.murata.com/products/productdata/8816428285982/MYRGP-WB-RC.pdf
 * Keywords: Fixed step-down converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_Murata_MYRxP.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MYRGPxx0060x21RC extends Component.withPins({
  /** Physical pin 1: Lx; passive. */
  "Lx": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}_2": "2",
  /** Physical pin 3: V_{OUT}; power_out. */
  "V_{OUT}": "3",
  /** Physical pin 4: CE/MODE; input. */
  "CE/MODE": "4",
  /** Physical pin 5: V_{SS}; passive. */
  "V_{SS}_5": "5",
  /** Physical pin 6: V_{IN}; power_in. */
  "V_{IN}": "6",
  /** Physical pin 7: L1; passive. */
  "L1": "7",
  /** Physical pin 8: L2; passive. */
  "L2": "8",
  /** Physical pin 9: PAD; passive. */
  "PAD": "9",
}) {
  override schema = "Converter_DCDC:MYRGPxx0060x21RC";
  override referencePrefix = "U";
}

/**
 * PicoBK Inductor Built-in Step-Down “mini DC/DC” Converters. 3MHz, input 1.8V to 6V, adjustable output voltage 0.9V to 4V, 600mA output current. 2.5 x 2.0mm.
 *
 * KiCad symbol: `Converter_DCDC:MYRGPxx0060x21RF`. Reference prefix: `U`.
 * Footprint filters: Converter?DCDC?Murata?MYRxP*.
 * @see https://www.murata.com/products/productdata/8816428318750/MYRGP-WB-RF.pdf
 * Keywords: Adjustable step-down converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_Murata_MYRxP.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MYRGPxx0060x21RF extends Component.withPins({
  /** Physical pin 1: Lx; passive. */
  "Lx": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}_2": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: CE/MODE; input. */
  "CE/MODE": "4",
  /** Physical pin 5: V_{SS}; passive. */
  "V_{SS}_5": "5",
  /** Physical pin 6: V_{IN}; power_in. */
  "V_{IN}": "6",
  /** Physical pin 7: L1; passive. */
  "L1": "7",
  /** Physical pin 8: L2; passive. */
  "L2": "8",
  /** Physical pin 9: PAD; passive. */
  "PAD": "9",
}) {
  override schema = "Converter_DCDC:MYRGPxx0060x21RF";
  override referencePrefix = "U";
}

/**
 * 1.5A Step-Down DC/DC-Regulator, 7-36V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, OKI-78SR_Vertical
 *
 * KiCad symbol: `Converter_DCDC:OKI-78SR-3.3_1.5-W36-C`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*Murata*OKI*78SR*Vertical*.
 * @see https://power.murata.com/data/power/oki-78sr.pdf
 * Keywords: dc-dc murata Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_Murata_OKI-78SR_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OKI_78SR_3_3_1_5_W36_C extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:OKI-78SR-3.3_1.5-W36-C";
  override referencePrefix = "U";
}

/**
 * 1.0A Step-Down DC/DC-Regulator, 15-36V input, 12V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, OKI-78SR_Vertical
 *
 * KiCad symbol: `Converter_DCDC:OKI-78SR-12_1.0-W36-C`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*Murata*OKI*78SR*Vertical*.
 * @see https://power.murata.com/data/power/oki-78sr.pdf
 * Keywords: dc-dc murata Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_Murata_OKI-78SR_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OKI_78SR_12_1_0_W36_C extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:OKI-78SR-12_1.0-W36-C";
  override referencePrefix = "U";
}

/**
 * 1.5A Step-Down DC/DC-Regulator, 7-36V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, OKI-78SR_Horizontal
 *
 * KiCad symbol: `Converter_DCDC:OKI-78SR-3.3_1.5-W36H-C`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*Murata*OKI*78SR*Horizontal*.
 * @see https://power.murata.com/data/power/oki-78sr.pdf
 * Keywords: dc-dc murata Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_Murata_OKI-78SR_Horizontal.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OKI_78SR_3_3_1_5_W36H_C extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:OKI-78SR-3.3_1.5-W36H-C";
  override referencePrefix = "U";
}

/**
 * 1.0A Step-Down DC/DC-Regulator, 15-36V input, 12V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, OKI-78SR_Horizontal
 *
 * KiCad symbol: `Converter_DCDC:OKI-78SR-12_1.0-W36H-C`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*Murata*OKI*78SR*Horizontal*.
 * @see https://power.murata.com/data/power/oki-78sr.pdf
 * Keywords: dc-dc murata Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_Murata_OKI-78SR_Horizontal.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OKI_78SR_12_1_0_W36H_C extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:OKI-78SR-12_1.0-W36H-C";
  override referencePrefix = "U";
}

/**
 * 1.5A Step-Down DC/DC-Regulator, 7-36V input, 5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, OKI-78SR_Vertical
 *
 * KiCad symbol: `Converter_DCDC:OKI-78SR-5_1.5-W36-C`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*Murata*OKI*78SR*Vertical*.
 * @see https://power.murata.com/data/power/oki-78sr.pdf
 * Keywords: dc-dc murata Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_Murata_OKI-78SR_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OKI_78SR_5_1_5_W36_C extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:OKI-78SR-5_1.5-W36-C";
  override referencePrefix = "U";
}

/**
 * 1.5A Step-Down DC/DC-Regulator, 7-36V input, 5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, OKI-78SR_Horizontal
 *
 * KiCad symbol: `Converter_DCDC:OKI-78SR-5_1.5-W36H-C`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*Murata*OKI*78SR*Horizontal*.
 * @see https://power.murata.com/data/power/oki-78sr.pdf
 * Keywords: dc-dc murata Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_Murata_OKI-78SR_Horizontal.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OKI_78SR_5_1_5_W36H_C extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:OKI-78SR-5_1.5-W36H-C";
  override referencePrefix = "U";
}

/**
 * 1.5A non-isolated switching regulator power module, 7-36V input voltage, 2.5-12.6V output voltage, EUS-5
 *
 * KiCad symbol: `Converter_DCDC:PTN78000W_EUS-5`. Reference prefix: `U`.
 * Footprint filters: Texas*EUS*R?PDSS?T5*.
 * @see https://www.ti.com/lit/ds/symlink/ptn78000w.pdf
 * Keywords: texas dc-dc converter step down buck.
 * Default footprint: Module:Texas_EUS_R-PDSS-T5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PTN78000W_EUS_5 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VI; power_in. */
  "VI": "2",
  /** Physical pin 3: ~{Inhibit}; input. */
  "~{Inhibit}": "3",
  /** Physical pin 4: Vo_Adj; output. */
  "Vo_Adj": "4",
  /** Physical pin 5: VO; power_out. */
  "VO": "5",
}) {
  override schema = "Converter_DCDC:PTN78000W_EUS-5";
  override referencePrefix = "U";
}

/**
 * 1.5A non-isolated switching regulator power module, 7-36V input voltage, 11.85-22V output voltage, EUS-5
 *
 * KiCad symbol: `Converter_DCDC:PTN78000H_EUS-5`. Reference prefix: `U`.
 * Footprint filters: Texas*EUS*R?PDSS?T5*.
 * @see https://www.ti.com/lit/ds/symlink/ptn78000w.pdf
 * Keywords: texas dc-dc converter step down buck.
 * Default footprint: Module:Texas_EUS_R-PDSS-T5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PTN78000H_EUS_5 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VI; power_in. */
  "VI": "2",
  /** Physical pin 3: ~{Inhibit}; input. */
  "~{Inhibit}": "3",
  /** Physical pin 4: Vo_Adj; output. */
  "Vo_Adj": "4",
  /** Physical pin 5: VO; power_out. */
  "VO": "5",
}) {
  override schema = "Converter_DCDC:PTN78000H_EUS-5";
  override referencePrefix = "U";
}

/**
 * 6A non-isolated switching regulator power module, 7-36V input voltage, 2.5-12.6V output voltage, EUK-7
 *
 * KiCad symbol: `Converter_DCDC:PTN78020W_EUK-7`. Reference prefix: `U`.
 * Footprint filters: Texas*EUK*R?PDSS?T7*.
 * @see https://www.ti.com/lit/ds/symlink/ptn78020w.pdf
 * Keywords: texas dc-dc converter step down buck.
 * Default footprint: Module:Texas_EUK_R-PDSS-T7_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PTN78020W_EUK_7 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VI; power_in. */
  "VI": "2",
  /** Physical pin 3: ~{Inhibit}; input. */
  "~{Inhibit}": "3",
  /** Physical pin 4: VO_Adj; input. */
  "VO_Adj": "4",
  /** Physical pin 5: VO_Sense; power_out. */
  "VO_Sense": "5",
  /** Physical pin 6: VO; power_out. */
  "VO": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Converter_DCDC:PTN78020W_EUK-7";
  override referencePrefix = "U";
}

/**
 * 6A non-isolated switching regulator power module, 7-36V input voltage, 11.85-22V output voltage, EUK-7
 *
 * KiCad symbol: `Converter_DCDC:PTN78020H_EUK-7`. Reference prefix: `U`.
 * Footprint filters: Texas*EUK*R?PDSS?T7*.
 * @see https://www.ti.com/lit/ds/symlink/ptn78020w.pdf
 * Keywords: texas dc-dc converter step down buck.
 * Default footprint: Module:Texas_EUK_R-PDSS-T7_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PTN78020H_EUK_7 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VI; power_in. */
  "VI": "2",
  /** Physical pin 3: ~{Inhibit}; input. */
  "~{Inhibit}": "3",
  /** Physical pin 4: VO_Adj; input. */
  "VO_Adj": "4",
  /** Physical pin 5: VO_Sense; power_out. */
  "VO_Sense": "5",
  /** Physical pin 6: VO; power_out. */
  "VO": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Converter_DCDC:PTN78020H_EUK-7";
  override referencePrefix = "U";
}

/**
 * 3A non-isolated switching regulator power module, 7-36V input voltage, 2.5-12.6V output voltage, EUW-7
 *
 * KiCad symbol: `Converter_DCDC:PTN78060W_EUW-7`. Reference prefix: `U`.
 * Footprint filters: Texas*EUW*R?PDSS?T7*.
 * @see https://www.ti.com/lit/ds/symlink/ptn78060w.pdf
 * Keywords: texas dc-dc converter step down buck.
 * Default footprint: Module:Texas_EUW_R-PDSS-T7_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PTN78060W_EUW_7 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VI; power_in. */
  "VI": "2",
  /** Physical pin 3: ~{Inhibit}; input. */
  "~{Inhibit}": "3",
  /** Physical pin 4: VO_Adj; input. */
  "VO_Adj": "4",
  /** Physical pin 5: VO_Sense; power_out. */
  "VO_Sense": "5",
  /** Physical pin 6: VO; power_out. */
  "VO": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Converter_DCDC:PTN78060W_EUW-7";
  override referencePrefix = "U";
}

/**
 * 3A non-isolated switching regulator power module, 7-36V input voltage, 11.85-22V output voltage, EUW-7
 *
 * KiCad symbol: `Converter_DCDC:PTN78060H_EUW-7`. Reference prefix: `U`.
 * Footprint filters: Texas*EUW*R?PDSS?T7*.
 * @see https://www.ti.com/lit/ds/symlink/ptn78060w.pdf
 * Keywords: texas dc-dc converter step down buck.
 * Default footprint: Module:Texas_EUW_R-PDSS-T7_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PTN78060H_EUW_7 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VI; power_in. */
  "VI": "2",
  /** Physical pin 3: ~{Inhibit}; input. */
  "~{Inhibit}": "3",
  /** Physical pin 4: VO_Adj; input. */
  "VO_Adj": "4",
  /** Physical pin 5: VO_Sense; power_out. */
  "VO_Sense": "5",
  /** Physical pin 6: VO; power_out. */
  "VO": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Converter_DCDC:PTN78060H_EUW-7";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 7-28V input, 5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78E5.0-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Exx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78E5_0_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78E5.0-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 4.75-30V input, 1.5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-781.5-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_781_5_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-781.5-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 4.75-32V input, 1.8V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-781.8-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_781_8_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-781.8-0.5";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 4.75-18V input, 1.8V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-781.8-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_781_8_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-781.8-1.0";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 15-32V input, 12V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-7812-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_7812_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-7812-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 18-32V input, 15V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-7815-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_7815_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-7815-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 4.75-18V input, 2.5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-782.5-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_782_5_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-782.5-0.5";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 4.75-18V input, 2.5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-782.5-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_782_5_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-782.5-1.0";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 4.75-18V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-783.3-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_783_3_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-783.3-0.5";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 4.75-18V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-783.3-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_783_3_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-783.3-1.0";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 6.5-18V input, 5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-785.0-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_785_0_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-785.0-0.5";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 6.5-18V input, 5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-785.0-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_785_0_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-785.0-1.0";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 8-32V input, 6.5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-786.5-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78xx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_786_5_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-786.5-0.5";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 4.75-32V input, 1.2V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B1.2-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B1_2_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B1.2-2.0";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 4.75-32V input, 1.5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B1.5-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B1_5_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B1.5-2.0";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 4.75-32V input, 1.8V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B1.8-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B1_8_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B1.8-2.0";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 15-32V input, 12V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B12-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B12_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B12-2.0";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 18-32V input, 15V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B15-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B15_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B15-2.0";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 4.75-32V input, 2.5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B2.5-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B2_5_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B2.5-2.0";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 4.75-32V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B3.3-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B3_3_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B3.3-2.0";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 6.5-32V input, 5.0V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B5.0-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B5_0_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B5.0-2.0";
  override referencePrefix = "U";
}

/**
 * 2A Step-Down DC/DC-Regulator, 11-32V input, 9.0V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78B9.0-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78B*2.0*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Bxx-2.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78B-2.0_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78B9_0_2_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78B9.0-2.0";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 5-42V input, 1.8V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78C1.8-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Cxx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78C1_8_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78C1.8-1.0";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 15-42V input, 12V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78C12-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Cxx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78C12_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78C12-1.0";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 18-42V input, 15V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78C15-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Cxx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78C15_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78C15-1.0";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 6-42V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78C3.3-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Cxx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78C3_3_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78C3.3-1.0";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 7-42V input, 5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78C5.0-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Cxx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78C5_0_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78C5.0-1.0";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 12-42V input, 9V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78C9.0-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Cxx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78C9_0_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78C9.0-1.0";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 15-28V input, 12V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78E12-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Exx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78E12_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78E12-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 18-28V input, 15V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78E15-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Exx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78E15_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78E15-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 6-28V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78E3.3-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Exx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78E3_3_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78E3.3-0.5";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 6-28V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78E3.3-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Exx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78E3_3_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78E3.3-1.0";
  override referencePrefix = "U";
}

/**
 * 1A Step-Down DC/DC-Regulator, 7-28V input, 5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78E5.0-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Exx-1.0.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78E5_0_1_0 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78E5.0-1.0";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 12-28V input, 9V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78E9.0-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78E*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Exx-0.5.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78E-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78E9_0_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78E9.0-0.5";
  override referencePrefix = "U";
}

/**
 * 300mA Step-Down DC/DC-Regulator, 36-72V input, 24V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78HB24-0.3`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78HB*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78HBxx-0.5_L.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78HB-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78HB24_0_3 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78HB24-0.3";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 17-72V input, 12V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78HB12-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78HB*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78HBxx-0.5_L.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78HB-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78HB12_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78HB12-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 20-72V input, 15V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78HB15-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78HB*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78HBxx-0.5_L.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78HB-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78HB15_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78HB15-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 9-72V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78HB3.3-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78HB*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78HBxx-0.5_L.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78HB-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78HB3_3_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78HB3.3-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 9-72V input, 5.0V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78HB5.0-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78HB*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78HBxx-0.5_L.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78HB-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78HB5_0_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78HB5.0-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 9-72V input, 6.5V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78HB6.5-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78HB*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78HBxx-0.5_L.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78HB-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78HB6_5_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78HB6.5-0.5";
  override referencePrefix = "U";
}

/**
 * 500mA Step-Down DC/DC-Regulator, 14-72V input, 9.0V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP3
 *
 * KiCad symbol: `Converter_DCDC:R-78HB9.0-0.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78HB*0.5*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78HBxx-0.5_L.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78HB-0.5_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78HB9_0_0_5 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
}) {
  override schema = "Converter_DCDC:R-78HB9.0-0.5";
  override referencePrefix = "U";
}

/**
 * 100mA Step-Up DC/DC-Regulator, 0.65-3.15V input, 3.3V fixed Output Voltage, LM78xx replacement, -40°C to +85°C, SIP4
 *
 * KiCad symbol: `Converter_DCDC:R-78S3.3-0.1`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*R*78S*0.1*.
 * @see https://www.recom-power.com/pdf/Innoline/R-78Sxx-0.1.pdf
 * Keywords: dc-dc recom Step-Down DC/DC-Regulator.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_R-78S-0.1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R_78S3_3_0_1 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT": "3",
  /** Physical pin 4: CTRL; input. */
  "CTRL": "4",
}) {
  override schema = "Converter_DCDC:R-78S3.3-0.1";
  override referencePrefix = "U";
}

/**
 * 6A non-isolated switching regulator power module, 4-15V input voltage, 5.0V output voltage, DOSA
 *
 * KiCad symbol: `Converter_DCDC:RPM5.0-6.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://www.recom-power.com/pdf/Innoline/RPM-6.0.pdf
 * Keywords: Recom dc-dc converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPM5_0_6_0 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: SEQ; passive. */
  "SEQ": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPM5.0-6.0";
  override referencePrefix = "U";
}

/**
 * 1A non-isolated switching regulator power module, 3-17V input voltage, 3.3V output voltage, DOSA
 *
 * KiCad symbol: `Converter_DCDC:RPM3.3-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://www.recom-power.com/pdf/Innoline/RPM-1.0.pdf
 * Keywords: Recom dc-dc converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPM3_3_1_0 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: SEQ; passive. */
  "SEQ": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPM3.3-1.0";
  override referencePrefix = "U";
}

/**
 * 2A non-isolated switching regulator power module, 3-17V input voltage, 3.3V output voltage, DOSA
 *
 * KiCad symbol: `Converter_DCDC:RPM3.3-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://www.recom-power.com/pdf/Innoline/RPM-2.0.pdf
 * Keywords: Recom dc-dc converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPM3_3_2_0 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: SEQ; passive. */
  "SEQ": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPM3.3-2.0";
  override referencePrefix = "U";
}

/**
 * 3A non-isolated switching regulator power module, 3-17V input voltage, 3.3V output voltage, DOSA
 *
 * KiCad symbol: `Converter_DCDC:RPM3.3-3.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://www.recom-power.com/pdf/Innoline/RPM-3.0.pdf
 * Keywords: Recom dc-dc converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPM3_3_3_0 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: SEQ; passive. */
  "SEQ": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPM3.3-3.0";
  override referencePrefix = "U";
}

/**
 * 6A non-isolated switching regulator power module, 4-15V input voltage, 3.3V output voltage, DOSA
 *
 * KiCad symbol: `Converter_DCDC:RPM3.3-6.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://www.recom-power.com/pdf/Innoline/RPM-6.0.pdf
 * Keywords: Recom dc-dc converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPM3_3_6_0 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: SEQ; passive. */
  "SEQ": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPM3.3-6.0";
  override referencePrefix = "U";
}

/**
 * 1A non-isolated switching regulator power module, 3-17V input voltage, 5.0V output voltage, DOSA
 *
 * KiCad symbol: `Converter_DCDC:RPM5.0-1.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://www.recom-power.com/pdf/Innoline/RPM-1.0.pdf
 * Keywords: Recom dc-dc converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPM5_0_1_0 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: SEQ; passive. */
  "SEQ": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPM5.0-1.0";
  override referencePrefix = "U";
}

/**
 * 2A non-isolated switching regulator power module, 3-17V input voltage, 5.0V output voltage, DOSA
 *
 * KiCad symbol: `Converter_DCDC:RPM5.0-2.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://www.recom-power.com/pdf/Innoline/RPM-2.0.pdf
 * Keywords: Recom dc-dc converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPM5_0_2_0 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: SEQ; passive. */
  "SEQ": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPM5.0-2.0";
  override referencePrefix = "U";
}

/**
 * 3A non-isolated switching regulator power module, 3-17V input voltage, 5.0V output voltage, DOSA
 *
 * KiCad symbol: `Converter_DCDC:RPM5.0-3.0`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://www.recom-power.com/pdf/Innoline/RPM-3.0.pdf
 * Keywords: Recom dc-dc converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPM5_0_3_0 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: SEQ; passive. */
  "SEQ": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPM5.0-3.0";
  override referencePrefix = "U";
}

/**
 * 1.5A non-isolated switching regulator power module, 5-60V input voltage, 3.3V output voltage
 *
 * KiCad symbol: `Converter_DCDC:RPMH3.3-1.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://recom-power.com/pdf/Innoline/RPMH-1.5.pdf
 * Keywords: Recom DC-DC converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPMH3_3_1_5 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: NC; no_connect. */
  "NC_E1": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPMH3.3-1.5";
  override referencePrefix = "U";
}

/**
 * 1.5A non-isolated switching regulator power module, 14-60V input voltage, 12V output voltage
 *
 * KiCad symbol: `Converter_DCDC:RPMH12-1.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://recom-power.com/pdf/Innoline/RPMH-1.5.pdf
 * Keywords: Recom DC-DC converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPMH12_1_5 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: NC; no_connect. */
  "NC_E1": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPMH12-1.5";
  override referencePrefix = "U";
}

/**
 * 1.5A non-isolated switching regulator power module, 17-60V input voltage, 15V output voltage
 *
 * KiCad symbol: `Converter_DCDC:RPMH15-1.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://recom-power.com/pdf/Innoline/RPMH-1.5.pdf
 * Keywords: Recom DC-DC converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPMH15_1_5 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: NC; no_connect. */
  "NC_E1": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPMH15-1.5";
  override referencePrefix = "U";
}

/**
 * 1.5A non-isolated switching regulator power module, 26-60V input voltage, 24V output voltage
 *
 * KiCad symbol: `Converter_DCDC:RPMH24-1.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://recom-power.com/pdf/Innoline/RPMH-1.5.pdf
 * Keywords: Recom DC-DC converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPMH24_1_5 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: NC; no_connect. */
  "NC_E1": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPMH24-1.5";
  override referencePrefix = "U";
}

/**
 * 1.5A non-isolated switching regulator power module, 7-60V input voltage, 5V output voltage
 *
 * KiCad symbol: `Converter_DCDC:RPMH5.0-1.5`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RPM*.
 * @see https://recom-power.com/pdf/Innoline/RPMH-1.5.pdf
 * Keywords: Recom DC-DC converter.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RPMx.x-x.0.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPMH5_0_1_5 extends Component.withPins({
  /** Physical pin A1: +VIN; power_in. */
  "+VIN_A1": "A1",
  /** Physical pin A2: +VIN; passive. */
  "+VIN_A2": "A2",
  /** Physical pin A3: GND; power_in. */
  "GND_A3": "A3",
  /** Physical pin A4: GND; passive. */
  "GND_A4": "A4",
  /** Physical pin A5: +VOUT; power_out. */
  "+VOUT_A5": "A5",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: GND; passive. */
  "GND_B3": "B3",
  /** Physical pin B4: GND; passive. */
  "GND_B4": "B4",
  /** Physical pin B5: +VOUT; passive. */
  "+VOUT_B5": "B5",
  /** Physical pin C1: CTRL; input. */
  "CTRL": "C1",
  /** Physical pin C2: GND; passive. */
  "GND_C2": "C2",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: GND; passive. */
  "GND_C4": "C4",
  /** Physical pin C5: Sense; input. */
  "Sense": "C5",
  /** Physical pin D1: PGood; output. */
  "PGood": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: GND; passive. */
  "GND_D4": "D4",
  /** Physical pin D5: GND; passive. */
  "GND_D5": "D5",
  /** Physical pin E1: NC; no_connect. */
  "NC_E1": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: Trim; input. */
  "Trim": "E5",
}) {
  override schema = "Converter_DCDC:RPMH5.0-1.5";
  override referencePrefix = "U";
}

/**
 * Charge Pump DC-to-DC Converter, 3 - 18V, 40mA, DIP-8
 *
 * KiCad symbol: `Converter_DCDC:TC7662AxPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21468B.pdf
 * Keywords: charge pump DC-to-DC converter.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC7662AxPA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: CAP+; passive. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; passive. */
  "CAP-": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
  /** Physical pin 6: NC; passive. */
  "NC_6": "6",
  /** Physical pin 7: OSC; passive. */
  "OSC": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Converter_DCDC:TC7662AxPA";
  override referencePrefix = "U";
}

/**
 * Charge Pump DC-to-DC Converter, 1.5 - 15V, 100mA, SOIC-8
 *
 * KiCad symbol: `Converter_DCDC:TC7662Bx0A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21469a.pdf
 * Keywords: charge pump DC-to-DC converter.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC7662Bx0A extends Component.withPins({
  /** Physical pin 1: BOOST; input. */
  "BOOST": "1",
  /** Physical pin 2: CAP+; passive. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; passive. */
  "CAP-": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
  /** Physical pin 6: LV; input. */
  "LV": "6",
  /** Physical pin 7: OSC; passive. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Converter_DCDC:TC7662Bx0A";
  override referencePrefix = "U";
}

/**
 * Charge Pump DC-to-DC Converter, 1.5 - 15V, 100mA, DIP-8
 *
 * KiCad symbol: `Converter_DCDC:TC7662BxPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21469a.pdf
 * Keywords: charge pump DC-to-DC converter.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC7662BxPA extends Component.withPins({
  /** Physical pin 1: BOOST; input. */
  "BOOST": "1",
  /** Physical pin 2: CAP+; passive. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; passive. */
  "CAP-": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
  /** Physical pin 6: LV; input. */
  "LV": "6",
  /** Physical pin 7: OSC; passive. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Converter_DCDC:TC7662BxPA";
  override referencePrefix = "U";
}

/**
 * Low Quiescent Current Synchronous Boost DC-DC Controller, 7.5V Gate Driver,  Input 4.5 to 38V, Output Vin to 58V, WQFN-16
 *
 * KiCad symbol: `Converter_DCDC:TPS43060RTE`. Reference prefix: `U`.
 * Footprint filters: Texas*S?PWQFN?N*EP1.2x0.8mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps43060.pdf
 * Keywords: Boost DC-DC.
 * Default footprint: Package_DFN_QFN:Texas_S-PWQFN-N16_EP1.2x0.8mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS43060RTE extends Component.withPins({
  /** Physical pin 1: RT/CLK; passive. */
  "RT/CLK": "1",
  /** Physical pin 2: SS; passive. */
  "SS": "2",
  /** Physical pin 3: COMP; passive. */
  "COMP": "3",
  /** Physical pin 4: FB; input. */
  "FB": "4",
  /** Physical pin 5: ISNS–; input. */
  "ISNS–": "5",
  /** Physical pin 6: ISNS+; input. */
  "ISNS+": "6",
  /** Physical pin 7: VIN; power_in. */
  "VIN": "7",
  /** Physical pin 8: LDRV; output. */
  "LDRV": "8",
  /** Physical pin 9: PGND; power_in. */
  "PGND": "9",
  /** Physical pin 10: VCC; power_out. */
  "VCC": "10",
  /** Physical pin 11: BOOT; input. */
  "BOOT": "11",
  /** Physical pin 12: SW; input. */
  "SW": "12",
  /** Physical pin 13: HDRV; input. */
  "HDRV": "13",
  /** Physical pin 14: PGOOD; open_collector. */
  "PGOOD": "14",
  /** Physical pin 15: EN; passive. */
  "EN": "15",
  /** Physical pin 16: AGND; power_in. */
  "AGND_16": "16",
  /** Physical pin 17: AGND; passive. */
  "AGND_17": "17",
}) {
  override schema = "Converter_DCDC:TPS43060RTE";
  override referencePrefix = "U";
}

/**
 * 3.5-V to 42-V 2.5A Step-Down DC DC Converter, SSOP-10
 *
 * KiCad symbol: `Converter_DCDC:TPS54240DGQ`. Reference prefix: `U`.
 * Footprint filters: HVSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps54240.pdf
 * Keywords: DC-DC converter step-down buck 42V.
 * Default footprint: Package_SO:HVSSOP-10-1EP_3x3mm_P0.5mm_EP1.57x1.88mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS54240DGQ extends Component.withPins({
  /** Physical pin 1: BOOT; input. */
  "BOOT": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SS/TR; passive. */
  "SS/TR": "4",
  /** Physical pin 5: RT/CLK; passive. */
  "RT/CLK": "5",
  /** Physical pin 6: PWRGD; open_collector. */
  "PWRGD": "6",
  /** Physical pin 7: VSENSE; input. */
  "VSENSE": "7",
  /** Physical pin 8: COMP; passive. */
  "COMP": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: PH; power_out. */
  "PH": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:TPS54240DGQ";
  override referencePrefix = "U";
}

/**
 * 3.5-V to 42-V 2.5A Step-Down DC DC Converter, VSON-10
 *
 * KiCad symbol: `Converter_DCDC:TPS54240DRC`. Reference prefix: `U`.
 * Footprint filters: Texas*DRC0010J*.
 * @see http://www.ti.com/lit/ds/symlink/tps54240.pdf
 * Keywords: DC-DC converter step-down buck 42V.
 * Default footprint: Package_SON:Texas_DRC0010J_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS54240DRC extends Component.withPins({
  /** Physical pin 1: BOOT; input. */
  "BOOT": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SS/TR; passive. */
  "SS/TR": "4",
  /** Physical pin 5: RT/CLK; passive. */
  "RT/CLK": "5",
  /** Physical pin 6: PWRGD; open_collector. */
  "PWRGD": "6",
  /** Physical pin 7: VSENSE; input. */
  "VSENSE": "7",
  /** Physical pin 8: COMP; passive. */
  "COMP": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: PH; power_out. */
  "PH": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Converter_DCDC:TPS54240DRC";
  override referencePrefix = "U";
}

/**
 * 8A Boost Converter, 0.5-5.5 V input, 2.2-5.5V output, Texas RWU0007A VQFN-7
 *
 * KiCad symbol: `Converter_DCDC:TPS61022`. Reference prefix: `U`.
 * Footprint filters: Texas*RWU0007A*VQFN*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps61022.pdf
 * Keywords: step-up.
 * Default footprint: Package_DFN_QFN:Texas_RWU0007A_VQFN-7_2x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS61022 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SW; input. */
  "SW": "2",
  /** Physical pin 3: VOUT; power_out. */
  "VOUT": "3",
  /** Physical pin 4: FB; input. */
  "FB": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: MODE; input. */
  "MODE": "6",
  /** Physical pin 7: VIN; power_in. */
  "VIN": "7",
}) {
  override schema = "Converter_DCDC:TPS61022";
  override referencePrefix = "U";
}

/**
 * 17V Input 3A Step-Down Converter MicroSiP Module with Integrated Inductor, μSiL-8
 *
 * KiCad symbol: `Converter_DCDC:TPS82130`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroSiP*1EP*2.8x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps82130.pdf
 * Keywords: 17V 3A Step-down Buck Module.
 * Default footprint: Package_LGA:Texas_SIL0008D_MicroSiP-8-1EP_2.8x3mm_P0.65mm_EP1.1x1.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS82130 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VOUT; power_out. */
  "VOUT_4": "4",
  /** Physical pin 5: VOUT; passive. */
  "VOUT_5": "5",
  /** Physical pin 6: FB; input. */
  "FB": "6",
  /** Physical pin 7: PG; open_collector. */
  "PG": "7",
  /** Physical pin 8: SS/TR; input. */
  "SS/TR": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Converter_DCDC:TPS82130";
  override referencePrefix = "U";
}

/**
 * 17V Input 2A Step-Down Converter MicroSiP Module with Integrated Inductor, μSiL-8
 *
 * KiCad symbol: `Converter_DCDC:TPS82140`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroSiP*1EP*2.8x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps82140.pdf
 * Keywords: 17V 2A Step-down Buck Module.
 * Default footprint: Package_LGA:Texas_SIL0008D_MicroSiP-8-1EP_2.8x3mm_P0.65mm_EP1.1x1.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS82140 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VOUT; power_out. */
  "VOUT_4": "4",
  /** Physical pin 5: VOUT; passive. */
  "VOUT_5": "5",
  /** Physical pin 6: FB; input. */
  "FB": "6",
  /** Physical pin 7: PG; open_collector. */
  "PG": "7",
  /** Physical pin 8: SS/TR; input. */
  "SS/TR": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Converter_DCDC:TPS82140";
  override referencePrefix = "U";
}

/**
 * 17V Input 1A Step-Down Converter MicroSiP Module with Integrated Inductor, μSiL-8
 *
 * KiCad symbol: `Converter_DCDC:TPS82150`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroSiP*1EP*2.8x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps82150.pdf
 * Keywords: 17V 1A Step-down Buck Module.
 * Default footprint: Package_LGA:Texas_SIL0008D_MicroSiP-8-1EP_2.8x3mm_P0.65mm_EP1.1x1.9mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS82150 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VOUT; power_out. */
  "VOUT_4": "4",
  /** Physical pin 5: VOUT; passive. */
  "VOUT_5": "5",
  /** Physical pin 6: FB; input. */
  "FB": "6",
  /** Physical pin 7: PG; open_collector. */
  "PG": "7",
  /** Physical pin 8: SS/TR; input. */
  "SS/TR": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Converter_DCDC:TPS82150";
  override referencePrefix = "U";
}

/**
 * 36-V, 2A input, stepdown, DC/DC converter, Texas B3QFN-14
 *
 * KiCad symbol: `Converter_DCDC:TPSM53602RDA`. Reference prefix: `U`.
 * Footprint filters: Texas*B3QFN*1EP*5x5.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tpsm53602.pdf
 * Keywords: step down DCDC converter regulator.
 * Default footprint: Package_DFN_QFN:Texas_B3QFN-14-1EP_5x5.5mm_P0.65mm_ThermalVia.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPSM53602RDA extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN_1": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: PGND; passive. */
  "PGND_3": "3",
  /** Physical pin 4: DNC; no_connect. */
  "DNC_4": "4",
  /** Physical pin 5: DNC; no_connect. */
  "DNC_5": "5",
  /** Physical pin 6: PGOOD; open_collector. */
  "PGOOD": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT_7": "7",
  /** Physical pin 8: VOUT; passive. */
  "VOUT_8": "8",
  /** Physical pin 9: FB; input. */
  "FB": "9",
  /** Physical pin 10: PGND; passive. */
  "PGND_10": "10",
  /** Physical pin 11: PGND; passive. */
  "PGND_11": "11",
  /** Physical pin 12: AGND; power_in. */
  "AGND": "12",
  /** Physical pin 13: V5V; output. */
  "V5V": "13",
  /** Physical pin 14: VIN; passive. */
  "VIN_14": "14",
  /** Physical pin 15: PGND; power_in. */
  "PGND_15": "15",
}) {
  override schema = "Converter_DCDC:TPSM53602RDA";
  override referencePrefix = "U";
}

/**
 * 36-V, 3A input, stepdown, DC/DC converter, Texas B3QFN-14
 *
 * KiCad symbol: `Converter_DCDC:TPSM53603RDA`. Reference prefix: `U`.
 * Footprint filters: Texas*B3QFN*1EP*5x5.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tpsm53603.pdf
 * Keywords: step down DCDC converter regulator.
 * Default footprint: Package_DFN_QFN:Texas_B3QFN-14-1EP_5x5.5mm_P0.65mm_ThermalVia.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPSM53603RDA extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN_1": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: PGND; passive. */
  "PGND_3": "3",
  /** Physical pin 4: DNC; no_connect. */
  "DNC_4": "4",
  /** Physical pin 5: DNC; no_connect. */
  "DNC_5": "5",
  /** Physical pin 6: PGOOD; open_collector. */
  "PGOOD": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT_7": "7",
  /** Physical pin 8: VOUT; passive. */
  "VOUT_8": "8",
  /** Physical pin 9: FB; input. */
  "FB": "9",
  /** Physical pin 10: PGND; passive. */
  "PGND_10": "10",
  /** Physical pin 11: PGND; passive. */
  "PGND_11": "11",
  /** Physical pin 12: AGND; power_in. */
  "AGND": "12",
  /** Physical pin 13: V5V; output. */
  "V5V": "13",
  /** Physical pin 14: VIN; passive. */
  "VIN_14": "14",
  /** Physical pin 15: PGND; power_in. */
  "PGND_15": "15",
}) {
  override schema = "Converter_DCDC:TPSM53603RDA";
  override referencePrefix = "U";
}

/**
 * 36-V, 4A input, stepdown, DC/DC converter, Texas B3QFN-14
 *
 * KiCad symbol: `Converter_DCDC:TPSM53604RDA`. Reference prefix: `U`.
 * Footprint filters: Texas*B3QFN*1EP*5x5.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tpsm53604.pdf
 * Keywords: step down DCDC converter regulator.
 * Default footprint: Package_DFN_QFN:Texas_B3QFN-14-1EP_5x5.5mm_P0.65mm_ThermalVia.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPSM53604RDA extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN_1": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: PGND; passive. */
  "PGND_3": "3",
  /** Physical pin 4: DNC; no_connect. */
  "DNC_4": "4",
  /** Physical pin 5: DNC; no_connect. */
  "DNC_5": "5",
  /** Physical pin 6: PGOOD; open_collector. */
  "PGOOD": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT_7": "7",
  /** Physical pin 8: VOUT; passive. */
  "VOUT_8": "8",
  /** Physical pin 9: FB; input. */
  "FB": "9",
  /** Physical pin 10: PGND; passive. */
  "PGND_10": "10",
  /** Physical pin 11: PGND; passive. */
  "PGND_11": "11",
  /** Physical pin 12: AGND; power_in. */
  "AGND": "12",
  /** Physical pin 13: V5V; output. */
  "V5V": "13",
  /** Physical pin 14: VIN; passive. */
  "VIN_14": "14",
  /** Physical pin 15: PGND; power_in. */
  "PGND_15": "15",
}) {
  override schema = "Converter_DCDC:TPSM53604RDA";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 5V output voltage, 5-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-2450`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_2450 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-2450";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 12V output voltage, 15-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-24120`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_24120 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-24120";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 12V output voltage, 15-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-24120SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_24120SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-24120SM";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 1.5V output voltage, 4.75-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2415`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2415 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-2415";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 15V output voltage, 18-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-24150`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_24150 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-24150";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 15V output voltage, 18-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-24150SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_24150SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-24150SM";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 1.5V output voltage, 4.75-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2415SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2415SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-2415SM";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 1.8V output voltage, 4.75-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2418`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2418 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-2418";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 1.8V output voltage, 4.75-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2418SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2418SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-2418SM";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 2.5V output voltage, 4.75-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2425`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2425 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-2425";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 2.5V output voltage, 4.75-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2425SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2425SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-2425SM";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 3.3V output voltage, 4.75-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2433`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2433 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-2433";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 3.3V output voltage, 4.75-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2433SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2433SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-2433SM";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 5V output voltage, 6.5-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2450`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2450 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-2450";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 5V output voltage, 6.5-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2450SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2450SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-2450SM";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 6.5V output voltage, 8-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2465`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2465 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-2465";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 6.5V output voltage, 8-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2465SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2465SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-2465SM";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 9V output voltage, 11-32V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2490`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xx*24xxx**THT*.
 * @see https://www.tracopower.com/products/tsr0.5.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xx_TSR0.5-24xxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2490 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.5-2490";
  override referencePrefix = "U";
}

/**
 * 0.5A step-down regulator, fixed 9V output voltage, 11-32V input voltage, LM78xx replacement, SMD-10
 *
 * KiCad symbol: `Converter_DCDC:TSR0.5-2490SM`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.5*24xxSM*241xxSM*SMD*.
 * @see https://www.tracopower.com/products/tsr0.5sm.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.5-24xxSM_241xxSM_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_5_2490SM extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin_1": "1",
  /** Physical pin 2: Vin; passive. */
  "Vin_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: Vout; power_out. */
  "Vout_4": "4",
  /** Physical pin 5: Vout; passive. */
  "Vout_5": "5",
  /** Physical pin 6: Trim; passive. */
  "Trim": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Remote; input. */
  "Remote": "10",
}) {
  override schema = "Converter_DCDC:TSR0.5-2490SM";
  override referencePrefix = "U";
}

/**
 * 0.6A step-down regulator, fixed 12V output voltage, 17-72V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR0.6-48120WI`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.6*48xxWI*48xxxWI*THT*.
 * @see https://www.tracopower.com/products/tsr0.6wi.pdf
 * Keywords: Traco non-isolated pol dcdc converter single 0.6A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.6-48xxWI_TSR0.6-48xxxWI_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_6_48120WI extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.6-48120WI";
  override referencePrefix = "U";
}

/**
 * 0.6A step-down regulator, fixed 15V output voltage, 20-72V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR0.6-48150WI`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.6*48xxWI*48xxxWI*THT*.
 * @see https://www.tracopower.com/products/tsr0.6wi.pdf
 * Keywords: Traco non-isolated pol dcdc converter single 0.6A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.6-48xxWI_TSR0.6-48xxxWI_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_6_48150WI extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.6-48150WI";
  override referencePrefix = "U";
}

/**
 * 0.4A step-down regulator, fixed 24V output voltage, 33-72V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR0.6-48240WI`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.6*48xxWI*48xxxWI*THT*.
 * @see https://www.tracopower.com/products/tsr0.6wi.pdf
 * Keywords: Traco non-isolated pol dcdc converter single 0.4A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.6-48xxWI_TSR0.6-48xxxWI_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_6_48240WI extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.6-48240WI";
  override referencePrefix = "U";
}

/**
 * 0.6A step-down regulator, fixed 3.3V output voltage, 9-72V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR0.6-4833WI`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.6*48xxWI*48xxxWI*THT*.
 * @see https://www.tracopower.com/products/tsr0.6wi.pdf
 * Keywords: Traco non-isolated pol dcdc converter single 0.6A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.6-48xxWI_TSR0.6-48xxxWI_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_6_4833WI extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.6-4833WI";
  override referencePrefix = "U";
}

/**
 * 0.6A step-down regulator, fixed 5V output voltage, 9-72V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR0.6-4850WI`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.6*48xxWI*48xxxWI*THT*.
 * @see https://www.tracopower.com/products/tsr0.6wi.pdf
 * Keywords: Traco non-isolated pol dcdc converter single 0.6A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.6-48xxWI_TSR0.6-48xxxWI_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_6_4850WI extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.6-4850WI";
  override referencePrefix = "U";
}

/**
 * 0.6A step-down regulator, fixed 6.5V output voltage, 9-72V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR0.6-4865WI`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.6*48xxWI*48xxxWI*THT*.
 * @see https://www.tracopower.com/products/tsr0.6wi.pdf
 * Keywords: Traco non-isolated pol dcdc converter single 0.6A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.6-48xxWI_TSR0.6-48xxxWI_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_6_4865WI extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.6-4865WI";
  override referencePrefix = "U";
}

/**
 * 0.6A step-down regulator, fixed 9V output voltage, 14-72V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR0.6-4890WI`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR0.6*48xxWI*48xxxWI*THT*.
 * @see https://www.tracopower.com/products/tsr0.6wi.pdf
 * Keywords: Traco non-isolated pol dcdc converter single 0.6A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR0.6-48xxWI_TSR0.6-48xxxWI_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR0_6_4890WI extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR0.6-4890WI";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator, fixed 3.3V output voltage, 6-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR1-2433E`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR1*xxxxE*THT*.
 * @see https://www.tracopower.com/products/tsr1e.pdf
 * Keywords: Traco non-isolated not-isolated pol dc-dc converter regulator single 1A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR1-xxxxE_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR1_2433E extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR1-2433E";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator, fixed 5V output voltage, 7-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR1-2450E`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR1*xxxxE*THT*.
 * @see https://www.tracopower.com/products/tsr1e.pdf
 * Keywords: Traco non-isolated not-isolated pol dc-dc converter regulator single 1A.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR1-xxxxE_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR1_2450E extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR1-2450E";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator, fixed 12V output voltage, 15-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR1.5-24120E`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR1.5*24xxE*24120E*THT*.
 * @see https://www.tracopower.com/products/tsr1.5e.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR1.5-24xxE_24120E_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR1_5_24120E extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR1.5-24120E";
  override referencePrefix = "U";
}

/**
 * 1.5A step-down regulator, fixed 3.3V output voltage, 7-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR1.5-2433E`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR1.5*24xxE*24120E*THT*.
 * @see https://www.tracopower.com/products/tsr1.5e.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR1.5-24xxE_24120E_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR1_5_2433E extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR1.5-2433E";
  override referencePrefix = "U";
}

/**
 * 1.5A step-down regulator, fixed 5V output voltage, 7-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR1.5-2450E`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR1.5*24xxE*24120E*THT*.
 * @see https://www.tracopower.com/products/tsr1.5e.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR1.5-24xxE_24120E_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR1_5_2450E extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR1.5-2450E";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.2V output voltage, 3-5.5V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-0512`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_0512 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-0512";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.5V output voltage, 3-5.5V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-0515`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_0515 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-0515";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.8V output voltage, 3-5.5V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-0518`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_0518 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-0518";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 2.5V output voltage, 3.8-5.5V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-0525`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_0525 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-0525";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.2V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2412`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2412 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2412";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 12V output voltage, 15-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-24120`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_24120 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-24120";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 12V output voltage, 15-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-24120N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_24120N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-24120N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.2V output voltage, 4.6-28V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2412N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2412N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2412N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.5V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2415`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2415 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2415";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 15V output voltage, 18-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-24150`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_24150 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-24150";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 15V output voltage, 18-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-24150N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_24150N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-24150N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.5V output voltage, 4.6-32V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2415N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2415N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2415N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.8V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2418`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2418 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2418";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 1.8V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2418N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2418N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2418N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 2.5V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2425`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2425 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2425";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 2.5V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2425N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2425N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2425N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 3.3V output voltage, 4.75-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2433`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2433 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2433";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 3.3V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2433N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2433N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2433N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 5V output voltage, 6.5-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2450`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2450 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2450";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 5V output voltage, 6.5-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2450N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2450N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2450N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 6.5V output voltage, 9-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2465`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2465 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2465";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 6.5V output voltage, 9-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2465N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2465N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2465N";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 9V output voltage, 12-36V input voltage, TO-220 compatible LM78xx replacement, SIP-3
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2490`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*xxxx**THT*.
 * @see https://www.tracopower.com/products/tsr2.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-xxxx_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2490 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2490";
  override referencePrefix = "U";
}

/**
 * 2A step-down regulator, fixed 9V output voltage, 11-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR2-2490N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr2n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR2_2490N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR2-2490N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 12V output voltage, 15-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-24120N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_24120N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-24120N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 1.2V output voltage, 4.6-28V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-2412N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_2412N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-2412N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 15V output voltage, 18-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-24150N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_24150N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-24150N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 1.5V output voltage, 4.6-32V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-2415N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_2415N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-2415N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 1.8V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-2418N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_2418N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-2418N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 2.5V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-2425N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_2425N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-2425N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 3.3V output voltage, 4.6-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-2433N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_2433N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-2433N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 5V output voltage, 6.5-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-2450N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_2450N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-2450N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 6.5V output voltage, 9-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-2465N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_2465N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-2465N";
  override referencePrefix = "U";
}

/**
 * 3A step-down regulator, fixed 9V output voltage, 11-36V input voltage, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR3-2490N`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR2*24xxN*24xxxN*THT*.
 * @see https://www.tracopower.com/products/tsr3n.pdf
 * Keywords: Traco non-isolated pol dcdc converter single.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR2-24xxN_TSR2-24xxxN_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR3_2490N extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR3-2490N";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 1.2V output voltage, 6-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-2412`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_2412 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-2412";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 12V output voltage, 5-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-24120`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_24120 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-24120";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 1.5V output voltage, 6-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-2415`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_2415 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-2415";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 15V output voltage, 8-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-24150`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_24150 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-24150";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 1.8V output voltage, 6-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-2418`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_2418 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-2418";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 2.5V output voltage, 6-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-2425`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_2425 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-2425";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 3.3V output voltage, 5-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-2433`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_2433 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-2433";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 6.5V output voltage, 9-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-2465`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_2465 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-2465";
  override referencePrefix = "U";
}

/**
 * 1A step-down regulator module, fixed 9V output voltage, 2-36V input voltage, -40°C to +85°C temperature range, TO-220 compatible LM78xx replacement
 *
 * KiCad symbol: `Converter_DCDC:TSR_1-2490`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*TRACO*TSR?1*.
 * @see http://www.tracopower.com/products/tsr1.pdf
 * Keywords: dc-dc traco buck.
 * Default footprint: Converter_DCDC:Converter_DCDC_TRACO_TSR-1_THT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSR_1_2490 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; power_out. */
  "Vout": "3",
}) {
  override schema = "Converter_DCDC:TSR_1-2490";
  override referencePrefix = "U";
}

