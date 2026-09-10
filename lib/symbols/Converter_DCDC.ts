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
 */
export class C11204_01 extends Component.withPins({
  "Vs": "1",
  "GND_2": "2",
  "RXD": "3",
  "TXD": "4",
  "GND_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "GND_8": "8",
  "NC_9": "9",
  "Vo": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "GND_15": "15",
  "Temp": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vs: "power_in", GND_2: "power_in", RXD: "input", TXD: "output", GND_5: "passive", NC_6: "no_connect", NC_7: "no_connect", GND_8: "passive", NC_9: "no_connect", Vo: "power_out", NC_11: "no_connect", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", GND_15: "passive", Temp: "input", ...opts.pinTypes } });
  }
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
 */
export class LMZ13608 extends Component.withPins({
  "VIN_1": "1",
  "VIN_2": "2",
  "AGND_3": "3",
  "EN": "4",
  "AGND_5": "5",
  "AGND_6": "6",
  "FB": "7",
  "SS": "8",
  "NC": "9",
  "VOUT_10": "10",
  "VOUT_11": "11",
  "PGND": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_1: "power_in", VIN_2: "passive", AGND_3: "passive", EN: "input", AGND_5: "power_in", AGND_6: "passive", FB: "input", SS: "input", NC: "no_connect", VOUT_10: "power_out", VOUT_11: "passive", PGND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LMZ23605TZ extends Component.withPins({
  "VIN": "1",
  "SYNC": "2",
  "EN": "3",
  "GND": "4",
  "FB": "5",
  "SS/TRK": "6",
  "VOUT": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", SYNC: "input", EN: "input", GND: "power_in", FB: "input", "SS/TRK": "passive", VOUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class LMZ22003TZ extends Component.withPins({
  "VIN": "1",
  "SYNC": "2",
  "EN": "3",
  "GND": "4",
  "FB": "5",
  "SS/TRK": "6",
  "VOUT": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", SYNC: "input", EN: "input", GND: "power_in", FB: "input", "SS/TRK": "passive", VOUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class LMZ22005TZ extends Component.withPins({
  "VIN": "1",
  "SYNC": "2",
  "EN": "3",
  "GND": "4",
  "FB": "5",
  "SS/TRK": "6",
  "VOUT": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", SYNC: "input", EN: "input", GND: "power_in", FB: "input", "SS/TRK": "passive", VOUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class LMZ23603TZ extends Component.withPins({
  "VIN": "1",
  "SYNC": "2",
  "EN": "3",
  "GND": "4",
  "FB": "5",
  "SS/TRK": "6",
  "VOUT": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", SYNC: "input", EN: "input", GND: "power_in", FB: "input", "SS/TRK": "passive", VOUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class LMZM23601 extends Component.withPins({
  "GND_1": "1",
  "MODE/SYNC": "2",
  "VIN": "3",
  "EN": "4",
  "PG": "5",
  "VOUT": "6",
  "FB": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "MODE/SYNC": "input", VIN: "power_in", EN: "input", PG: "open_collector", VOUT: "power_out", FB: "input", P8: "no_connect", P9: "no_connect", P10: "no_connect", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LMZM23600 extends Component.withPins({
  "GND_1": "1",
  "MODE/SYNC": "2",
  "VIN": "3",
  "EN": "4",
  "PG": "5",
  "VOUT": "6",
  "FB": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "MODE/SYNC": "input", VIN: "power_in", EN: "input", PG: "open_collector", VOUT: "power_out", FB: "input", P8: "no_connect", P9: "no_connect", P10: "no_connect", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LMZM23600V3 extends Component.withPins({
  "GND_1": "1",
  "MODE/SYNC": "2",
  "VIN": "3",
  "EN": "4",
  "PG": "5",
  "VOUT": "6",
  "FB": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "MODE/SYNC": "input", VIN: "power_in", EN: "input", PG: "open_collector", VOUT: "power_out", FB: "input", P8: "no_connect", P9: "no_connect", P10: "no_connect", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LMZM23600V5 extends Component.withPins({
  "GND_1": "1",
  "MODE/SYNC": "2",
  "VIN": "3",
  "EN": "4",
  "PG": "5",
  "VOUT": "6",
  "FB": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "MODE/SYNC": "input", VIN: "power_in", EN: "input", PG: "open_collector", VOUT: "power_out", FB: "input", P8: "no_connect", P9: "no_connect", P10: "no_connect", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LMZM23601V3 extends Component.withPins({
  "GND_1": "1",
  "MODE/SYNC": "2",
  "VIN": "3",
  "EN": "4",
  "PG": "5",
  "VOUT": "6",
  "FB": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "MODE/SYNC": "input", VIN: "power_in", EN: "input", PG: "open_collector", VOUT: "power_out", FB: "input", P8: "no_connect", P9: "no_connect", P10: "no_connect", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LMZM23601V5 extends Component.withPins({
  "GND_1": "1",
  "MODE/SYNC": "2",
  "VIN": "3",
  "EN": "4",
  "PG": "5",
  "VOUT": "6",
  "FB": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "MODE/SYNC": "input", VIN: "power_in", EN: "input", PG: "open_collector", VOUT: "power_out", FB: "input", P8: "no_connect", P9: "no_connect", P10: "no_connect", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LT1026 extends Component.withPins({
  "C1-": "1",
  "C2+": "2",
  "C2-": "3",
  "-Vout": "4",
  "GND": "5",
  "Vin": "6",
  "C1+": "7",
  "+Vout": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "C1-": "passive", "C2+": "passive", "C2-": "passive", "-Vout": "power_out", GND: "power_in", Vin: "power_in", "C1+": "passive", "+Vout": "power_out", ...opts.pinTypes } });
  }
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
 */
export class LTM4638 extends Component.withPins({
  "V_{OUT}_A1": "A1",
  "V_{OUT}_A2": "A2",
  "V_{OUT}_A3": "A3",
  "V_{OUT}_A4": "A4",
  "V_{OUT}_A5": "A5",
  "T_{SENSE}+": "A6",
  "T_{SENSE}-": "A7",
  "V_{OSNS}+": "B1",
  "GND_B2": "B2",
  "INTV_{CC}": "B3",
  "RUN": "B4",
  "PGOOD": "B5",
  "GND_B6": "B6",
  "SW": "B7",
  "FB": "C1",
  "V_{OSNS}-": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "GND_C5": "C5",
  "GND_C6": "C6",
  "GND_C7": "C7",
  "COMPa": "D1",
  "MODE/CLKIN": "D2",
  "V_{IN}_D3": "D3",
  "V_{IN}_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "GND_D7": "D7",
  "FREQ": "E1",
  "TRACK/SS": "E2",
  "V_{IN}_E3": "E3",
  "V_{IN}_E4": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "GND_E7": "E7",
  "COMPb": "F1",
  "CLKOUT": "F2",
  "V_{OUT}_F3": "F3",
  "V_{IN}_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "V_{OUT}_G1": "G1",
  "V_{OUT}_G2": "G2",
  "V_{OUT}_G3": "G3",
  "V_{IN}_G4": "G4",
  "PHMODE": "G5",
  "GND_G6": "G6",
  "GND_G7": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{OUT}_A1": "power_out", "V_{OUT}_A2": "passive", "V_{OUT}_A3": "passive", "V_{OUT}_A4": "passive", "V_{OUT}_A5": "passive", "T_{SENSE}+": "passive", "T_{SENSE}-": "passive", "V_{OSNS}+": "input", GND_B2: "power_in", "INTV_{CC}": "power_out", RUN: "input", PGOOD: "open_collector", GND_B6: "passive", SW: "passive", FB: "input", "V_{OSNS}-": "input", GND_C3: "passive", GND_C4: "passive", GND_C5: "passive", GND_C6: "passive", GND_C7: "passive", COMPa: "passive", "MODE/CLKIN": "passive", "V_{IN}_D3": "power_in", "V_{IN}_D4": "passive", GND_D5: "passive", GND_D6: "passive", GND_D7: "passive", FREQ: "passive", "TRACK/SS": "passive", "V_{IN}_E3": "passive", "V_{IN}_E4": "passive", GND_E5: "passive", GND_E6: "passive", GND_E7: "passive", COMPb: "passive", CLKOUT: "output", "V_{OUT}_F3": "passive", "V_{IN}_F4": "passive", GND_F5: "passive", GND_F6: "passive", GND_F7: "passive", "V_{OUT}_G1": "passive", "V_{OUT}_G2": "passive", "V_{OUT}_G3": "passive", "V_{IN}_G4": "passive", PHMODE: "passive", GND_G6: "passive", GND_G7: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTM4626 extends Component.withPins({
  "V_{OUT}_A1": "A1",
  "V_{OUT}_A2": "A2",
  "V_{OUT}_A3": "A3",
  "V_{OUT}_A4": "A4",
  "V_{OUT}_A5": "A5",
  "T_{SENSE}+": "A6",
  "T_{SENSE}-": "A7",
  "V_{OSNS}+": "B1",
  "GND_B2": "B2",
  "INTV_{CC}": "B3",
  "RUN": "B4",
  "PGOOD": "B5",
  "GND_B6": "B6",
  "SW": "B7",
  "FB": "C1",
  "V_{OSNS}-": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "GND_C5": "C5",
  "GND_C6": "C6",
  "GND_C7": "C7",
  "COMPa": "D1",
  "MODE/CLKIN": "D2",
  "V_{IN}_D3": "D3",
  "V_{IN}_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "GND_D7": "D7",
  "FREQ": "E1",
  "TRACK/SS": "E2",
  "V_{IN}_E3": "E3",
  "V_{IN}_E4": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "GND_E7": "E7",
  "COMPb": "F1",
  "CLKOUT": "F2",
  "V_{OUT}_F3": "F3",
  "V_{IN}_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "V_{OUT}_G1": "G1",
  "V_{OUT}_G2": "G2",
  "V_{OUT}_G3": "G3",
  "V_{IN}_G4": "G4",
  "PHMODE": "G5",
  "GND_G6": "G6",
  "GND_G7": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{OUT}_A1": "power_out", "V_{OUT}_A2": "passive", "V_{OUT}_A3": "passive", "V_{OUT}_A4": "passive", "V_{OUT}_A5": "passive", "T_{SENSE}+": "passive", "T_{SENSE}-": "passive", "V_{OSNS}+": "input", GND_B2: "power_in", "INTV_{CC}": "power_out", RUN: "input", PGOOD: "open_collector", GND_B6: "passive", SW: "passive", FB: "input", "V_{OSNS}-": "input", GND_C3: "passive", GND_C4: "passive", GND_C5: "passive", GND_C6: "passive", GND_C7: "passive", COMPa: "passive", "MODE/CLKIN": "passive", "V_{IN}_D3": "power_in", "V_{IN}_D4": "passive", GND_D5: "passive", GND_D6: "passive", GND_D7: "passive", FREQ: "passive", "TRACK/SS": "passive", "V_{IN}_E3": "passive", "V_{IN}_E4": "passive", GND_E5: "passive", GND_E6: "passive", GND_E7: "passive", COMPb: "passive", CLKOUT: "output", "V_{OUT}_F3": "passive", "V_{IN}_F4": "passive", GND_F5: "passive", GND_F6: "passive", GND_F7: "passive", "V_{OUT}_G1": "passive", "V_{OUT}_G2": "passive", "V_{OUT}_G3": "passive", "V_{IN}_G4": "passive", PHMODE: "passive", GND_G6: "passive", GND_G7: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTM4637xV extends Component.withPins({
  "VIN_A1": "A1",
  "VIN_A2": "A2",
  "VIN_A3": "A3",
  "VIN_A4": "A4",
  "VIN_A5": "A5",
  "VIN_A6": "A6",
  "INTVCC_A7": "A7",
  "MODE_PLLIN": "A8",
  "TRACK/SS": "A9",
  "RUN": "A10",
  "COMP": "A11",
  "MTP1": "A12",
  "VIN_B1": "B1",
  "VIN_B2": "B2",
  "VIN_B3": "B3",
  "VIN_B4": "B4",
  "VIN_B5": "B5",
  "VIN_B6": "B6",
  "GND_B7": "B7",
  "GND_B9": "B9",
  "MTP2": "B11",
  "FSET": "B12",
  "VIN_C1": "C1",
  "VIN_C2": "C2",
  "VIN_C3": "C3",
  "VIN_C4": "C4",
  "VIN_C5": "C5",
  "VIN_C6": "C6",
  "GND_C7": "C7",
  "GND_C9": "C9",
  "MTP3": "C10",
  "MTP4": "C11",
  "MTP5": "C12",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "GND_D8": "D8",
  "INTVCC_D9": "D9",
  "TEMP": "D10",
  "MTP6": "D11",
  "MTP7": "D12",
  "GND_E1": "E1",
  "GND_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "GND_E7": "E7",
  "GND_E9": "E9",
  "EXTVCC": "E12",
  "GND_F1": "F1",
  "GND_F2": "F2",
  "GND_F3": "F3",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "GND_F8": "F8",
  "GND_F9": "F9",
  "PGOOD_F11": "F11",
  "VFB": "F12",
  "GND_G1": "G1",
  "GND_G2": "G2",
  "GND_G3": "G3",
  "GND_G4": "G4",
  "GND_G5": "G5",
  "GND_G6": "G6",
  "GND_G7": "G7",
  "GND_G8": "G8",
  "GND_G9": "G9",
  "SGND_G11": "G11",
  "PGOOD_G12": "G12",
  "GND_H1": "H1",
  "GND_H2": "H2",
  "GND_H3": "H3",
  "GND_H4": "H4",
  "GND_H5": "H5",
  "GND_H6": "H6",
  "GND_H7": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "SGND_H11": "H11",
  "SGND_H12": "H12",
  "VOUT_J1": "J1",
  "VOUT_J2": "J2",
  "VOUT_J3": "J3",
  "VOUT_J4": "J4",
  "VOUT_J5": "J5",
  "VOUT_J6": "J6",
  "VOUT_J7": "J7",
  "VOUT_J8": "J8",
  "VOUT_J9": "J9",
  "VOUT_J10": "J10",
  "VOSNS+": "J12",
  "VOUT_K1": "K1",
  "VOUT_K2": "K2",
  "VOUT_K3": "K3",
  "VOUT_K4": "K4",
  "VOUT_K5": "K5",
  "VOUT_K6": "K6",
  "VOUT_K7": "K7",
  "VOUT_K8": "K8",
  "VOUT_K9": "K9",
  "VOUT_K10": "K10",
  "VOUT_K11": "K11",
  "DIFF_OUT": "K12",
  "VOUT_L1": "L1",
  "VOUT_L2": "L2",
  "VOUT_L3": "L3",
  "VOUT_L4": "L4",
  "VOUT_L5": "L5",
  "VOUT_L6": "L6",
  "VOUT_L7": "L7",
  "VOUT_L8": "L8",
  "VOUT_L9": "L9",
  "VOUT_L10": "L10",
  "VOUT_L11": "L11",
  "VOUT_LCL": "L12",
  "VOUT_M1": "M1",
  "VOUT_M2": "M2",
  "VOUT_M3": "M3",
  "VOUT_M4": "M4",
  "VOUT_M5": "M5",
  "VOUT_M6": "M6",
  "VOUT_M7": "M7",
  "VOUT_M8": "M8",
  "VOUT_M9": "M9",
  "VOUT_M10": "M10",
  "VOUT_M11": "M11",
  "VOSNS-": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_A1: "power_in", VIN_A2: "passive", VIN_A3: "passive", VIN_A4: "passive", VIN_A5: "passive", VIN_A6: "passive", INTVCC_A7: "power_out", MODE_PLLIN: "input", "TRACK/SS": "passive", RUN: "input", COMP: "passive", MTP1: "no_connect", VIN_B1: "passive", VIN_B2: "passive", VIN_B3: "passive", VIN_B4: "passive", VIN_B5: "passive", VIN_B6: "passive", GND_B7: "power_in", GND_B9: "passive", MTP2: "no_connect", FSET: "passive", VIN_C1: "passive", VIN_C2: "passive", VIN_C3: "passive", VIN_C4: "passive", VIN_C5: "passive", VIN_C6: "passive", GND_C7: "passive", GND_C9: "passive", MTP3: "no_connect", MTP4: "no_connect", MTP5: "no_connect", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", GND_D6: "passive", GND_D8: "passive", INTVCC_D9: "passive", TEMP: "passive", MTP6: "no_connect", MTP7: "no_connect", GND_E1: "passive", GND_E2: "passive", GND_E3: "passive", GND_E4: "passive", GND_E5: "passive", GND_E6: "passive", GND_E7: "passive", GND_E9: "passive", EXTVCC: "power_in", GND_F1: "passive", GND_F2: "passive", GND_F3: "passive", GND_F4: "passive", GND_F5: "passive", GND_F6: "passive", GND_F7: "passive", GND_F8: "passive", GND_F9: "passive", PGOOD_F11: "open_collector", VFB: "input", GND_G1: "passive", GND_G2: "passive", GND_G3: "passive", GND_G4: "passive", GND_G5: "passive", GND_G6: "passive", GND_G7: "passive", GND_G8: "passive", GND_G9: "passive", SGND_G11: "power_in", PGOOD_G12: "open_collector", GND_H1: "passive", GND_H2: "passive", GND_H3: "passive", GND_H4: "passive", GND_H5: "passive", GND_H6: "passive", GND_H7: "passive", GND_H8: "passive", GND_H9: "passive", SGND_H11: "passive", SGND_H12: "passive", VOUT_J1: "power_out", VOUT_J2: "passive", VOUT_J3: "passive", VOUT_J4: "passive", VOUT_J5: "passive", VOUT_J6: "passive", VOUT_J7: "passive", VOUT_J8: "passive", VOUT_J9: "passive", VOUT_J10: "passive", "VOSNS+": "input", VOUT_K1: "passive", VOUT_K2: "passive", VOUT_K3: "passive", VOUT_K4: "passive", VOUT_K5: "passive", VOUT_K6: "passive", VOUT_K7: "passive", VOUT_K8: "passive", VOUT_K9: "passive", VOUT_K10: "passive", VOUT_K11: "passive", DIFF_OUT: "output", VOUT_L1: "passive", VOUT_L2: "passive", VOUT_L3: "passive", VOUT_L4: "passive", VOUT_L5: "passive", VOUT_L6: "passive", VOUT_L7: "passive", VOUT_L8: "passive", VOUT_L9: "passive", VOUT_L10: "passive", VOUT_L11: "passive", VOUT_LCL: "input", VOUT_M1: "passive", VOUT_M2: "passive", VOUT_M3: "passive", VOUT_M4: "passive", VOUT_M5: "passive", VOUT_M6: "passive", VOUT_M7: "passive", VOUT_M8: "passive", VOUT_M9: "passive", VOUT_M10: "passive", VOUT_M11: "passive", "VOSNS-": "input", ...opts.pinTypes } });
  }
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
 */
export class LTM4637xY extends Component.withPins({
  "VIN_A1": "A1",
  "VIN_A2": "A2",
  "VIN_A3": "A3",
  "VIN_A4": "A4",
  "VIN_A5": "A5",
  "VIN_A6": "A6",
  "INTVCC_A7": "A7",
  "MODE_PLLIN": "A8",
  "TRACK/SS": "A9",
  "RUN": "A10",
  "COMP": "A11",
  "MTP1": "A12",
  "VIN_B1": "B1",
  "VIN_B2": "B2",
  "VIN_B3": "B3",
  "VIN_B4": "B4",
  "VIN_B5": "B5",
  "VIN_B6": "B6",
  "GND_B7": "B7",
  "GND_B9": "B9",
  "MTP2": "B11",
  "FSET": "B12",
  "VIN_C1": "C1",
  "VIN_C2": "C2",
  "VIN_C3": "C3",
  "VIN_C4": "C4",
  "VIN_C5": "C5",
  "VIN_C6": "C6",
  "GND_C7": "C7",
  "GND_C9": "C9",
  "MTP3": "C10",
  "MTP4": "C11",
  "MTP5": "C12",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "GND_D8": "D8",
  "INTVCC_D9": "D9",
  "TEMP": "D10",
  "MTP6": "D11",
  "MTP7": "D12",
  "GND_E1": "E1",
  "GND_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "GND_E7": "E7",
  "GND_E9": "E9",
  "EXTVCC": "E12",
  "GND_F1": "F1",
  "GND_F2": "F2",
  "GND_F3": "F3",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "GND_F8": "F8",
  "GND_F9": "F9",
  "PGOOD_F11": "F11",
  "VFB": "F12",
  "GND_G1": "G1",
  "GND_G2": "G2",
  "GND_G3": "G3",
  "GND_G4": "G4",
  "GND_G5": "G5",
  "GND_G6": "G6",
  "GND_G7": "G7",
  "GND_G8": "G8",
  "GND_G9": "G9",
  "SGND_G11": "G11",
  "PGOOD_G12": "G12",
  "GND_H1": "H1",
  "GND_H2": "H2",
  "GND_H3": "H3",
  "GND_H4": "H4",
  "GND_H5": "H5",
  "GND_H6": "H6",
  "GND_H7": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "SGND_H11": "H11",
  "SGND_H12": "H12",
  "VOUT_J1": "J1",
  "VOUT_J2": "J2",
  "VOUT_J3": "J3",
  "VOUT_J4": "J4",
  "VOUT_J5": "J5",
  "VOUT_J6": "J6",
  "VOUT_J7": "J7",
  "VOUT_J8": "J8",
  "VOUT_J9": "J9",
  "VOUT_J10": "J10",
  "VOSNS+": "J12",
  "VOUT_K1": "K1",
  "VOUT_K2": "K2",
  "VOUT_K3": "K3",
  "VOUT_K4": "K4",
  "VOUT_K5": "K5",
  "VOUT_K6": "K6",
  "VOUT_K7": "K7",
  "VOUT_K8": "K8",
  "VOUT_K9": "K9",
  "VOUT_K10": "K10",
  "VOUT_K11": "K11",
  "DIFF_OUT": "K12",
  "VOUT_L1": "L1",
  "VOUT_L2": "L2",
  "VOUT_L3": "L3",
  "VOUT_L4": "L4",
  "VOUT_L5": "L5",
  "VOUT_L6": "L6",
  "VOUT_L7": "L7",
  "VOUT_L8": "L8",
  "VOUT_L9": "L9",
  "VOUT_L10": "L10",
  "VOUT_L11": "L11",
  "VOUT_LCL": "L12",
  "VOUT_M1": "M1",
  "VOUT_M2": "M2",
  "VOUT_M3": "M3",
  "VOUT_M4": "M4",
  "VOUT_M5": "M5",
  "VOUT_M6": "M6",
  "VOUT_M7": "M7",
  "VOUT_M8": "M8",
  "VOUT_M9": "M9",
  "VOUT_M10": "M10",
  "VOUT_M11": "M11",
  "VOSNS-": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_A1: "power_in", VIN_A2: "passive", VIN_A3: "passive", VIN_A4: "passive", VIN_A5: "passive", VIN_A6: "passive", INTVCC_A7: "power_out", MODE_PLLIN: "input", "TRACK/SS": "passive", RUN: "input", COMP: "passive", MTP1: "no_connect", VIN_B1: "passive", VIN_B2: "passive", VIN_B3: "passive", VIN_B4: "passive", VIN_B5: "passive", VIN_B6: "passive", GND_B7: "power_in", GND_B9: "passive", MTP2: "no_connect", FSET: "passive", VIN_C1: "passive", VIN_C2: "passive", VIN_C3: "passive", VIN_C4: "passive", VIN_C5: "passive", VIN_C6: "passive", GND_C7: "passive", GND_C9: "passive", MTP3: "no_connect", MTP4: "no_connect", MTP5: "no_connect", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", GND_D6: "passive", GND_D8: "passive", INTVCC_D9: "passive", TEMP: "passive", MTP6: "no_connect", MTP7: "no_connect", GND_E1: "passive", GND_E2: "passive", GND_E3: "passive", GND_E4: "passive", GND_E5: "passive", GND_E6: "passive", GND_E7: "passive", GND_E9: "passive", EXTVCC: "power_in", GND_F1: "passive", GND_F2: "passive", GND_F3: "passive", GND_F4: "passive", GND_F5: "passive", GND_F6: "passive", GND_F7: "passive", GND_F8: "passive", GND_F9: "passive", PGOOD_F11: "open_collector", VFB: "input", GND_G1: "passive", GND_G2: "passive", GND_G3: "passive", GND_G4: "passive", GND_G5: "passive", GND_G6: "passive", GND_G7: "passive", GND_G8: "passive", GND_G9: "passive", SGND_G11: "power_in", PGOOD_G12: "open_collector", GND_H1: "passive", GND_H2: "passive", GND_H3: "passive", GND_H4: "passive", GND_H5: "passive", GND_H6: "passive", GND_H7: "passive", GND_H8: "passive", GND_H9: "passive", SGND_H11: "passive", SGND_H12: "passive", VOUT_J1: "power_out", VOUT_J2: "passive", VOUT_J3: "passive", VOUT_J4: "passive", VOUT_J5: "passive", VOUT_J6: "passive", VOUT_J7: "passive", VOUT_J8: "passive", VOUT_J9: "passive", VOUT_J10: "passive", "VOSNS+": "input", VOUT_K1: "passive", VOUT_K2: "passive", VOUT_K3: "passive", VOUT_K4: "passive", VOUT_K5: "passive", VOUT_K6: "passive", VOUT_K7: "passive", VOUT_K8: "passive", VOUT_K9: "passive", VOUT_K10: "passive", VOUT_K11: "passive", DIFF_OUT: "output", VOUT_L1: "passive", VOUT_L2: "passive", VOUT_L3: "passive", VOUT_L4: "passive", VOUT_L5: "passive", VOUT_L6: "passive", VOUT_L7: "passive", VOUT_L8: "passive", VOUT_L9: "passive", VOUT_L10: "passive", VOUT_L11: "passive", VOUT_LCL: "input", VOUT_M1: "passive", VOUT_M2: "passive", VOUT_M3: "passive", VOUT_M4: "passive", VOUT_M5: "passive", VOUT_M6: "passive", VOUT_M7: "passive", VOUT_M8: "passive", VOUT_M9: "passive", VOUT_M10: "passive", VOUT_M11: "passive", "VOSNS-": "input", ...opts.pinTypes } });
  }
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
 */
export class LTM4657 extends Component.withPins({
  "V_{OUT}_A1": "A1",
  "V_{OUT}_A2": "A2",
  "V_{OUT}_A3": "A3",
  "V_{OUT}_A4": "A4",
  "V_{OUT}_A5": "A5",
  "T_{SENSE}+": "A6",
  "T_{SENSE}-": "A7",
  "V_{OSNS}+": "B1",
  "GND_B2": "B2",
  "INTV_{CC}": "B3",
  "RUN": "B4",
  "PGOOD": "B5",
  "GND_B6": "B6",
  "SW": "B7",
  "FB": "C1",
  "V_{OSNS}-": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "GND_C5": "C5",
  "GND_C6": "C6",
  "GND_C7": "C7",
  "COMPa": "D1",
  "MODE/CLKIN": "D2",
  "V_{IN}_D3": "D3",
  "V_{IN}_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "GND_D7": "D7",
  "FREQ": "E1",
  "TRACK/SS": "E2",
  "V_{IN}_E3": "E3",
  "V_{IN}_E4": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "GND_E7": "E7",
  "COMPb": "F1",
  "CLKOUT": "F2",
  "V_{OUT}_F3": "F3",
  "V_{IN}_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "V_{OUT}_G1": "G1",
  "V_{OUT}_G2": "G2",
  "V_{OUT}_G3": "G3",
  "V_{IN}_G4": "G4",
  "PHMODE": "G5",
  "GND_G6": "G6",
  "GND_G7": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{OUT}_A1": "power_out", "V_{OUT}_A2": "passive", "V_{OUT}_A3": "passive", "V_{OUT}_A4": "passive", "V_{OUT}_A5": "passive", "T_{SENSE}+": "passive", "T_{SENSE}-": "passive", "V_{OSNS}+": "input", GND_B2: "power_in", "INTV_{CC}": "power_out", RUN: "input", PGOOD: "open_collector", GND_B6: "passive", SW: "passive", FB: "input", "V_{OSNS}-": "input", GND_C3: "passive", GND_C4: "passive", GND_C5: "passive", GND_C6: "passive", GND_C7: "passive", COMPa: "passive", "MODE/CLKIN": "passive", "V_{IN}_D3": "power_in", "V_{IN}_D4": "passive", GND_D5: "passive", GND_D6: "passive", GND_D7: "passive", FREQ: "passive", "TRACK/SS": "passive", "V_{IN}_E3": "passive", "V_{IN}_E4": "passive", GND_E5: "passive", GND_E6: "passive", GND_E7: "passive", COMPb: "passive", CLKOUT: "output", "V_{OUT}_F3": "passive", "V_{IN}_F4": "passive", GND_F5: "passive", GND_F6: "passive", GND_F7: "passive", "V_{OUT}_G1": "passive", "V_{OUT}_G2": "passive", "V_{OUT}_G3": "passive", "V_{IN}_G4": "passive", PHMODE: "passive", GND_G6: "passive", GND_G7: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTM4668 extends Component.withPins({
  "VOUT1_A1": "A1",
  "GND_A2": "A2",
  "GND_A3": "A3",
  "VIN_A4": "A4",
  "GND_A5": "A5",
  "GND_A6": "A6",
  "VOUT2_A7": "A7",
  "VOUT1_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "VIN_B4": "B4",
  "GND_B5": "B5",
  "GND_B6": "B6",
  "VOUT2_B7": "B7",
  "FB1": "C1",
  "GND_C2": "C2",
  "RUN1": "C3",
  "INTVCC": "C4",
  "RUN2": "C5",
  "GND_C6": "C6",
  "FB2": "C7",
  "PGOOD4": "D1",
  "PGOOD1": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "PGOOD2": "D6",
  "PGOOD3": "D7",
  "FB4": "E1",
  "GND_E2": "E2",
  "RUN4": "E3",
  "MODE/SYNC": "E4",
  "RUN3": "E5",
  "GND_E6": "E6",
  "FB3": "E7",
  "VOUT4_F1": "F1",
  "GND_F2": "F2",
  "GND_F3": "F3",
  "VIN_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "VOUT3_F7": "F7",
  "VOUT4_G1": "G1",
  "GND_G2": "G2",
  "GND_G3": "G3",
  "VIN_G4": "G4",
  "GND_G5": "G5",
  "GND_G6": "G6",
  "VOUT3_G7": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT1_A1: "power_out", GND_A2: "power_in", GND_A3: "passive", VIN_A4: "power_in", GND_A5: "passive", GND_A6: "passive", VOUT2_A7: "power_out", VOUT1_B1: "passive", GND_B2: "passive", GND_B3: "passive", VIN_B4: "passive", GND_B5: "passive", GND_B6: "passive", VOUT2_B7: "passive", FB1: "output", GND_C2: "passive", RUN1: "input", INTVCC: "output", RUN2: "input", GND_C6: "passive", FB2: "output", PGOOD4: "open_collector", PGOOD1: "open_collector", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", PGOOD2: "open_collector", PGOOD3: "open_collector", FB4: "output", GND_E2: "passive", RUN4: "input", "MODE/SYNC": "input", RUN3: "input", GND_E6: "passive", FB3: "output", VOUT4_F1: "power_out", GND_F2: "passive", GND_F3: "passive", VIN_F4: "power_in", GND_F5: "passive", GND_F6: "passive", VOUT3_F7: "power_out", VOUT4_G1: "passive", GND_G2: "passive", GND_G3: "passive", VIN_G4: "passive", GND_G5: "passive", GND_G6: "passive", VOUT3_G7: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTM4668A extends Component.withPins({
  "VOUT1_A1": "A1",
  "GND_A2": "A2",
  "GND_A3": "A3",
  "VIN_A4": "A4",
  "GND_A5": "A5",
  "GND_A6": "A6",
  "VOUT2_A7": "A7",
  "VOUT1_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "VIN_B4": "B4",
  "GND_B5": "B5",
  "GND_B6": "B6",
  "VOUT2_B7": "B7",
  "FB1": "C1",
  "GND_C2": "C2",
  "RUN1": "C3",
  "INTVCC": "C4",
  "RUN2": "C5",
  "GND_C6": "C6",
  "FB2": "C7",
  "PGOOD4": "D1",
  "PGOOD1": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "PGOOD2": "D6",
  "PGOOD3": "D7",
  "FB4": "E1",
  "GND_E2": "E2",
  "RUN4": "E3",
  "MODE/SYNC": "E4",
  "RUN3": "E5",
  "GND_E6": "E6",
  "FB3": "E7",
  "VOUT4_F1": "F1",
  "GND_F2": "F2",
  "GND_F3": "F3",
  "VIN_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "VOUT3_F7": "F7",
  "VOUT4_G1": "G1",
  "GND_G2": "G2",
  "GND_G3": "G3",
  "VIN_G4": "G4",
  "GND_G5": "G5",
  "GND_G6": "G6",
  "VOUT3_G7": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT1_A1: "power_out", GND_A2: "power_in", GND_A3: "passive", VIN_A4: "power_in", GND_A5: "passive", GND_A6: "passive", VOUT2_A7: "power_out", VOUT1_B1: "passive", GND_B2: "passive", GND_B3: "passive", VIN_B4: "passive", GND_B5: "passive", GND_B6: "passive", VOUT2_B7: "passive", FB1: "output", GND_C2: "passive", RUN1: "input", INTVCC: "output", RUN2: "input", GND_C6: "passive", FB2: "output", PGOOD4: "open_collector", PGOOD1: "open_collector", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", PGOOD2: "open_collector", PGOOD3: "open_collector", FB4: "output", GND_E2: "passive", RUN4: "input", "MODE/SYNC": "input", RUN3: "input", GND_E6: "passive", FB3: "output", VOUT4_F1: "power_out", GND_F2: "passive", GND_F3: "passive", VIN_F4: "power_in", GND_F5: "passive", GND_F6: "passive", VOUT3_F7: "power_out", VOUT4_G1: "passive", GND_G2: "passive", GND_G3: "passive", VIN_G4: "passive", GND_G5: "passive", GND_G6: "passive", VOUT3_G7: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTM4671 extends Component.withPins({
  "V_{OUT0}_A1": "A1",
  "V_{OUT0}_A2": "A2",
  "V_{OUT0}_A3": "A3",
  "GND_A4": "A4",
  "GND_A5": "A5",
  "TSENSE0^{-}": "A6",
  "TSENSE0^{+}": "A7",
  "GND_A8": "A8",
  "GND_A9": "A9",
  "GND_A10": "A10",
  "GND_A11": "A11",
  "V_{OUT0}_B1": "B1",
  "V_{OUT0}_B2": "B2",
  "V_{OUT0}_B3": "B3",
  "GND_B4": "B4",
  "GND_B5": "B5",
  "GND_B6": "B6",
  "GND_B7": "B7",
  "GND_B8": "B8",
  "GND_B9": "B9",
  "GND_B10": "B10",
  "GND_B11": "B11",
  "V_{OUT0}_C1": "C1",
  "V_{OUT0}_C2": "C2",
  "V_{OUT0}_C3": "C3",
  "GND_C4": "C4",
  "GND_C5": "C5",
  "GND_C6": "C6",
  "GND_C7": "C7",
  "GND_C8": "C8",
  "GND_C9": "C9",
  "GND_C10": "C10",
  "GND_C11": "C11",
  "V_{OUT0}_D1": "D1",
  "V_{OUT0}_D2": "D2",
  "V_{OUT0}_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "V_{IN}_D7": "D7",
  "V_{IN}_D8": "D8",
  "V_{IN}_D9": "D9",
  "V_{IN}_D10": "D10",
  "V_{IN}_D11": "D11",
  "V_{OUT0}_E1": "E1",
  "V_{OUT0}_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "GND_E5": "E5",
  "PHMODE0": "E6",
  "INTV_{CC0}": "E7",
  "V_{IN}_E8": "E8",
  "SV_{IN0}": "E9",
  "CLKOUT0": "E10",
  "PGOOD0": "E11",
  "GND_F1": "F1",
  "GND_F2": "F2",
  "GND_F3": "F3",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "VOSNS0^{-}": "F8",
  "TRACK/SS0": "F9",
  "FREQ0": "F10",
  "RUN0": "F11",
  "GND_G1": "G1",
  "GND_G2": "G2",
  "GND_G3": "G3",
  "GND_G4": "G4",
  "GND_G5": "G5",
  "GND_G6": "G6",
  "TRACK/SS1": "G7",
  "VOSNS0^{+}": "G8",
  "FB0": "G9",
  "GND_G10": "G10",
  "MODE/CLKIN0": "G11",
  "V_{OUT1}_H1": "H1",
  "V_{OUT1}_H2": "H2",
  "V_{OUT1}_H3": "H3",
  "V_{OUT1}_H4": "H4",
  "GND_H5": "H5",
  "V_{IN}_H6": "H6",
  "GND_H7": "H7",
  "PGOOD1": "H8",
  "FB1": "H9",
  "COMP0a": "H10",
  "COMP0b": "H11",
  "V_{OUT1}_J1": "J1",
  "V_{OUT1}_J2": "J2",
  "V_{OUT1}_J3": "J3",
  "V_{OUT1}_J4": "J4",
  "V_{IN}_J5": "J5",
  "V_{IN}_J6": "J6",
  "GND_J7": "J7",
  "RUN1": "J8",
  "GND_J9": "J9",
  "VOSNS1": "J10",
  "COMP1": "J11",
  "GND_K1": "K1",
  "GND_K2": "K2",
  "GND_K3": "K3",
  "GND_K4": "K4",
  "GND_K5": "K5",
  "GND_K6": "K6",
  "GND_K7": "K7",
  "TMON": "K8",
  "INTV_{CC12}": "K9",
  "FREQ12": "K10",
  "GND_K11": "K11",
  "V_{OUT2}_L1": "L1",
  "V_{OUT2}_L2": "L2",
  "V_{OUT2}_L3": "L3",
  "V_{OUT2}_L4": "L4",
  "V_{IN}_L5": "L5",
  "V_{IN}_L6": "L6",
  "GND_L7": "L7",
  "RUN2": "L8",
  "MODE/CLKIN12": "L9",
  "VOSNS2": "L10",
  "GND_L11": "L11",
  "V_{OUT2}_M1": "M1",
  "V_{OUT2}_M2": "M2",
  "V_{OUT2}_M3": "M3",
  "V_{OUT2}_M4": "M4",
  "GND_M5": "M5",
  "V_{IN}_M6": "M6",
  "GND_M7": "M7",
  "PGOOD2": "M8",
  "FB2": "M9",
  "GND_M10": "M10",
  "COMP2": "M11",
  "GND_N1": "N1",
  "GND_N2": "N2",
  "GND_N3": "N3",
  "GND_N4": "N4",
  "GND_N5": "N5",
  "GND_N6": "N6",
  "TRACK/SS2": "N7",
  "COMP3b": "N8",
  "COMP3a": "N9",
  "FB3": "N10",
  "VOSNS3^{+}": "N11",
  "GND_P1": "P1",
  "GND_P2": "P2",
  "GND_P3": "P3",
  "GND_P4": "P4",
  "GND_P5": "P5",
  "CLKOUT3": "P6",
  "RUN3": "P7",
  "FREQ3": "P8",
  "TRACK/SS3": "P9",
  "VOSNS3^{-}": "P10",
  "GND_P11": "P11",
  "V_{OUT3}_R1": "R1",
  "V_{OUT3}_R2": "R2",
  "GND_R3": "R3",
  "GND_R4": "R4",
  "GND_R5": "R5",
  "PHMODE3": "R6",
  "PGOOD3": "R7",
  "MODE/CLKIN3": "R8",
  "SV_{IN3}": "R9",
  "V_{IN}_R10": "R10",
  "INTV_{CC3}": "R11",
  "V_{OUT3}_T1": "T1",
  "V_{OUT3}_T2": "T2",
  "V_{OUT3}_T3": "T3",
  "GND_T4": "T4",
  "GND_T5": "T5",
  "GND_T6": "T6",
  "V_{IN}_T7": "T7",
  "V_{IN}_T8": "T8",
  "V_{IN}_T9": "T9",
  "V_{IN}_T10": "T10",
  "V_{IN}_T11": "T11",
  "V_{OUT3}_U1": "U1",
  "V_{OUT3}_U2": "U2",
  "V_{OUT3}_U3": "U3",
  "GND_U4": "U4",
  "GND_U5": "U5",
  "GND_U6": "U6",
  "GND_U7": "U7",
  "GND_U8": "U8",
  "GND_U9": "U9",
  "GND_U10": "U10",
  "GND_U11": "U11",
  "V_{OUT3}_V1": "V1",
  "V_{OUT3}_V2": "V2",
  "V_{OUT3}_V3": "V3",
  "GND_V4": "V4",
  "GND_V5": "V5",
  "GND_V6": "V6",
  "GND_V7": "V7",
  "GND_V8": "V8",
  "GND_V9": "V9",
  "GND_V10": "V10",
  "GND_V11": "V11",
  "V_{OUT3}_W1": "W1",
  "V_{OUT3}_W2": "W2",
  "V_{OUT3}_W3": "W3",
  "GND_W4": "W4",
  "GND_W5": "W5",
  "TSENSE3^{+}": "W6",
  "TSENSE3^{-}": "W7",
  "GND_W8": "W8",
  "GND_W9": "W9",
  "GND_W10": "W10",
  "GND_W11": "W11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{OUT0}_A1": "power_out", "V_{OUT0}_A2": "passive", "V_{OUT0}_A3": "passive", GND_A4: "power_in", GND_A5: "passive", "TSENSE0^{-}": "passive", "TSENSE0^{+}": "passive", GND_A8: "passive", GND_A9: "passive", GND_A10: "passive", GND_A11: "passive", "V_{OUT0}_B1": "passive", "V_{OUT0}_B2": "passive", "V_{OUT0}_B3": "passive", GND_B4: "passive", GND_B5: "passive", GND_B6: "passive", GND_B7: "passive", GND_B8: "passive", GND_B9: "passive", GND_B10: "passive", GND_B11: "passive", "V_{OUT0}_C1": "passive", "V_{OUT0}_C2": "passive", "V_{OUT0}_C3": "passive", GND_C4: "passive", GND_C5: "passive", GND_C6: "passive", GND_C7: "passive", GND_C8: "passive", GND_C9: "passive", GND_C10: "passive", GND_C11: "passive", "V_{OUT0}_D1": "passive", "V_{OUT0}_D2": "passive", "V_{OUT0}_D3": "passive", GND_D4: "passive", GND_D5: "passive", GND_D6: "passive", "V_{IN}_D7": "power_in", "V_{IN}_D8": "passive", "V_{IN}_D9": "passive", "V_{IN}_D10": "passive", "V_{IN}_D11": "passive", "V_{OUT0}_E1": "passive", "V_{OUT0}_E2": "passive", GND_E3: "passive", GND_E4: "passive", GND_E5: "passive", PHMODE0: "passive", "INTV_{CC0}": "power_out", "V_{IN}_E8": "passive", "SV_{IN0}": "power_in", CLKOUT0: "output", PGOOD0: "open_collector", GND_F1: "passive", GND_F2: "passive", GND_F3: "passive", GND_F4: "passive", GND_F5: "passive", GND_F6: "passive", GND_F7: "passive", "VOSNS0^{-}": "input", "TRACK/SS0": "passive", FREQ0: "input", RUN0: "input", GND_G1: "passive", GND_G2: "passive", GND_G3: "passive", GND_G4: "passive", GND_G5: "passive", GND_G6: "passive", "TRACK/SS1": "passive", "VOSNS0^{+}": "input", FB0: "input", GND_G10: "passive", "MODE/CLKIN0": "passive", "V_{OUT1}_H1": "power_out", "V_{OUT1}_H2": "passive", "V_{OUT1}_H3": "passive", "V_{OUT1}_H4": "passive", GND_H5: "passive", "V_{IN}_H6": "power_in", GND_H7: "passive", PGOOD1: "open_collector", FB1: "input", COMP0a: "passive", COMP0b: "passive", "V_{OUT1}_J1": "passive", "V_{OUT1}_J2": "passive", "V_{OUT1}_J3": "passive", "V_{OUT1}_J4": "passive", "V_{IN}_J5": "passive", "V_{IN}_J6": "passive", GND_J7: "passive", RUN1: "input", GND_J9: "passive", VOSNS1: "input", COMP1: "passive", GND_K1: "passive", GND_K2: "passive", GND_K3: "passive", GND_K4: "passive", GND_K5: "passive", GND_K6: "passive", GND_K7: "passive", TMON: "passive", "INTV_{CC12}": "power_out", FREQ12: "passive", GND_K11: "passive", "V_{OUT2}_L1": "power_out", "V_{OUT2}_L2": "passive", "V_{OUT2}_L3": "passive", "V_{OUT2}_L4": "passive", "V_{IN}_L5": "power_in", "V_{IN}_L6": "passive", GND_L7: "passive", RUN2: "input", "MODE/CLKIN12": "passive", VOSNS2: "input", GND_L11: "passive", "V_{OUT2}_M1": "passive", "V_{OUT2}_M2": "passive", "V_{OUT2}_M3": "passive", "V_{OUT2}_M4": "passive", GND_M5: "passive", "V_{IN}_M6": "passive", GND_M7: "passive", PGOOD2: "open_collector", FB2: "input", GND_M10: "passive", COMP2: "passive", GND_N1: "passive", GND_N2: "passive", GND_N3: "passive", GND_N4: "passive", GND_N5: "passive", GND_N6: "passive", "TRACK/SS2": "passive", COMP3b: "passive", COMP3a: "passive", FB3: "input", "VOSNS3^{+}": "input", GND_P1: "passive", GND_P2: "passive", GND_P3: "passive", GND_P4: "passive", GND_P5: "passive", CLKOUT3: "output", RUN3: "input", FREQ3: "input", "TRACK/SS3": "passive", "VOSNS3^{-}": "input", GND_P11: "passive", "V_{OUT3}_R1": "power_out", "V_{OUT3}_R2": "passive", GND_R3: "passive", GND_R4: "passive", GND_R5: "passive", PHMODE3: "passive", PGOOD3: "open_collector", "MODE/CLKIN3": "passive", "SV_{IN3}": "power_in", "V_{IN}_R10": "power_in", "INTV_{CC3}": "power_out", "V_{OUT3}_T1": "passive", "V_{OUT3}_T2": "passive", "V_{OUT3}_T3": "passive", GND_T4: "passive", GND_T5: "passive", GND_T6: "passive", "V_{IN}_T7": "passive", "V_{IN}_T8": "passive", "V_{IN}_T9": "passive", "V_{IN}_T10": "passive", "V_{IN}_T11": "passive", "V_{OUT3}_U1": "passive", "V_{OUT3}_U2": "passive", "V_{OUT3}_U3": "passive", GND_U4: "passive", GND_U5: "passive", GND_U6: "passive", GND_U7: "passive", GND_U8: "passive", GND_U9: "passive", GND_U10: "passive", GND_U11: "passive", "V_{OUT3}_V1": "passive", "V_{OUT3}_V2": "passive", "V_{OUT3}_V3": "passive", GND_V4: "passive", GND_V5: "passive", GND_V6: "passive", GND_V7: "passive", GND_V8: "passive", GND_V9: "passive", GND_V10: "passive", GND_V11: "passive", "V_{OUT3}_W1": "passive", "V_{OUT3}_W2": "passive", "V_{OUT3}_W3": "passive", GND_W4: "passive", GND_W5: "passive", "TSENSE3^{+}": "passive", "TSENSE3^{-}": "passive", GND_W8: "passive", GND_W9: "passive", GND_W10: "passive", GND_W11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTM8049 extends Component.withPins({
  "V_{OUT1P}_A1": "A1",
  "V_{OUT1P}_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "V_{IN1}_A5": "A5",
  "V_{IN1}_A6": "A6",
  "V_{IN1}_A7": "A7",
  "V_{OUT1P}_B1": "B1",
  "V_{OUT1P}_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "GND_B5": "B5",
  "GND_B6": "B6",
  "RUN1": "B7",
  "FBX1": "C1",
  "V_{OUT1N}_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "GND_C5": "C5",
  "GND_C6": "C6",
  "SS1": "C7",
  "V_{OUT1N}_D1": "D1",
  "V_{OUT1N}_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "PG1": "D6",
  "SYNC1": "D7",
  "V_{OUT1N}_E1": "E1",
  "V_{OUT1N}_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "GND_E5": "E5",
  "CLKOUT1": "E6",
  "RT1": "E7",
  "GND_F1": "F1",
  "GND_F2": "F2",
  "SHARE1": "F3",
  "SHARE2": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "V_{OUT2N}_G1": "G1",
  "V_{OUT2N}_G2": "G2",
  "GND_G3": "G3",
  "GND_G4": "G4",
  "GND_G5": "G5",
  "CLKOUT2": "G6",
  "RT2": "G7",
  "V_{OUT2N}_H1": "H1",
  "V_{OUT2N}_H2": "H2",
  "GND_H3": "H3",
  "GND_H4": "H4",
  "GND_H5": "H5",
  "PG2": "H6",
  "SYNC2": "H7",
  "FBX2": "J1",
  "V_{OUT2N}_J2": "J2",
  "GND_J3": "J3",
  "GND_J4": "J4",
  "GND_J5": "J5",
  "GND_J6": "J6",
  "SS2": "J7",
  "V_{OUT2P}_K1": "K1",
  "V_{OUT2P}_K2": "K2",
  "GND_K3": "K3",
  "GND_K4": "K4",
  "GND_K5": "K5",
  "GND_K6": "K6",
  "RUN2": "K7",
  "V_{OUT2P}_L1": "L1",
  "V_{OUT2P}_L2": "L2",
  "GND_L3": "L3",
  "GND_L4": "L4",
  "V_{IN2}_L5": "L5",
  "V_{IN2}_L6": "L6",
  "V_{IN2}_L7": "L7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{OUT1P}_A1": "power_out", "V_{OUT1P}_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "V_{IN1}_A5": "power_in", "V_{IN1}_A6": "passive", "V_{IN1}_A7": "passive", "V_{OUT1P}_B1": "passive", "V_{OUT1P}_B2": "passive", GND_B3: "passive", GND_B4: "passive", GND_B5: "passive", GND_B6: "passive", RUN1: "input", FBX1: "input", "V_{OUT1N}_C2": "power_out", GND_C3: "passive", GND_C4: "passive", GND_C5: "passive", GND_C6: "passive", SS1: "output", "V_{OUT1N}_D1": "passive", "V_{OUT1N}_D2": "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", PG1: "output", SYNC1: "input", "V_{OUT1N}_E1": "passive", "V_{OUT1N}_E2": "passive", GND_E3: "passive", GND_E4: "passive", GND_E5: "passive", CLKOUT1: "output", RT1: "input", GND_F1: "passive", GND_F2: "passive", SHARE1: "input", SHARE2: "input", GND_F5: "passive", GND_F6: "passive", GND_F7: "passive", "V_{OUT2N}_G1": "power_out", "V_{OUT2N}_G2": "passive", GND_G3: "passive", GND_G4: "passive", GND_G5: "passive", CLKOUT2: "output", RT2: "input", "V_{OUT2N}_H1": "passive", "V_{OUT2N}_H2": "passive", GND_H3: "passive", GND_H4: "passive", GND_H5: "passive", PG2: "output", SYNC2: "input", FBX2: "input", "V_{OUT2N}_J2": "passive", GND_J3: "passive", GND_J4: "passive", GND_J5: "passive", GND_J6: "passive", SS2: "output", "V_{OUT2P}_K1": "power_out", "V_{OUT2P}_K2": "passive", GND_K3: "passive", GND_K4: "passive", GND_K5: "passive", GND_K6: "passive", RUN2: "input", "V_{OUT2P}_L1": "passive", "V_{OUT2P}_L2": "passive", GND_L3: "passive", GND_L4: "passive", "V_{IN2}_L5": "power_in", "V_{IN2}_L6": "passive", "V_{IN2}_L7": "passive", ...opts.pinTypes } });
  }
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
 */
export class LTM8063 extends Component.withPins({
  "GND_A1": "A1",
  "FB": "A2",
  "TR/SS": "A3",
  "GND_A4": "A4",
  "PG": "B1",
  "SYNC": "B2",
  "RUN": "B3",
  "VIN_B4": "B4",
  "RT": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "VIN_C4": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_E1": "E1",
  "GND_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "VOUT_F1": "F1",
  "VOUT_F2": "F2",
  "VOUT_F3": "F3",
  "VOUT_F4": "F4",
  "VOUT_G1": "G1",
  "VOUT_G2": "G2",
  "VOUT_G3": "G3",
  "VOUT_G4": "G4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "power_in", FB: "input", "TR/SS": "input", GND_A4: "passive", PG: "open_collector", SYNC: "input", RUN: "input", VIN_B4: "power_in", RT: "input", GND_C2: "passive", GND_C3: "passive", VIN_C4: "power_in", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_E1: "passive", GND_E2: "passive", GND_E3: "passive", GND_E4: "passive", VOUT_F1: "power_out", VOUT_F2: "passive", VOUT_F3: "passive", VOUT_F4: "passive", VOUT_G1: "passive", VOUT_G2: "passive", VOUT_G3: "passive", VOUT_G4: "passive", ...opts.pinTypes } });
  }
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
 */
export class MUN12AD01_SH extends Component.withPins({
  "SS": "1",
  "FB": "2",
  "PGOOD": "3",
  "VOUT": "4",
  "GND_5": "5",
  "NC": "6",
  "EN": "7",
  "VIN": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SS: "input", FB: "input", PGOOD: "open_collector", VOUT: "power_out", GND_5: "power_in", NC: "no_connect", EN: "input", VIN: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MUN12AD03_SH extends Component.withPins({
  "SS": "1",
  "FB": "2",
  "PGOOD": "3",
  "VOUT_4": "4",
  "GND_5": "5",
  "NC": "6",
  "EN": "7",
  "VIN": "8",
  "VOUT_9": "9",
  "GND_10": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SS: "input", FB: "input", PGOOD: "open_collector", VOUT_4: "power_out", GND_5: "power_in", NC: "no_connect", EN: "input", VIN: "power_in", VOUT_9: "passive", GND_10: "passive", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class MYRGPxx0060x21RC extends Component.withPins({
  "Lx": "1",
  "V_{SS}_2": "2",
  "V_{OUT}": "3",
  "CE/MODE": "4",
  "V_{SS}_5": "5",
  "V_{IN}": "6",
  "L1": "7",
  "L2": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Lx: "passive", "V_{SS}_2": "power_in", "V_{OUT}": "power_out", "CE/MODE": "input", "V_{SS}_5": "passive", "V_{IN}": "power_in", L1: "passive", L2: "passive", PAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class MYRGPxx0060x21RF extends Component.withPins({
  "Lx": "1",
  "V_{SS}_2": "2",
  "FB": "3",
  "CE/MODE": "4",
  "V_{SS}_5": "5",
  "V_{IN}": "6",
  "L1": "7",
  "L2": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Lx: "passive", "V_{SS}_2": "power_in", FB: "input", "CE/MODE": "input", "V_{SS}_5": "passive", "V_{IN}": "power_in", L1: "passive", L2: "passive", PAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class OKI_78SR_3_3_1_5_W36_C extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class OKI_78SR_12_1_0_W36_C extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class OKI_78SR_3_3_1_5_W36H_C extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class OKI_78SR_12_1_0_W36H_C extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class OKI_78SR_5_1_5_W36_C extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class OKI_78SR_5_1_5_W36H_C extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class PTN78000W_EUS_5 extends Component.withPins({
  "GND": "1",
  "VI": "2",
  "~{Inhibit}": "3",
  "Vo_Adj": "4",
  "VO": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VI: "power_in", "~{Inhibit}": "input", Vo_Adj: "output", VO: "power_out", ...opts.pinTypes } });
  }
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
 */
export class PTN78000H_EUS_5 extends Component.withPins({
  "GND": "1",
  "VI": "2",
  "~{Inhibit}": "3",
  "Vo_Adj": "4",
  "VO": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VI: "power_in", "~{Inhibit}": "input", Vo_Adj: "output", VO: "power_out", ...opts.pinTypes } });
  }
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
 */
export class PTN78020W_EUK_7 extends Component.withPins({
  "GND_1": "1",
  "VI": "2",
  "~{Inhibit}": "3",
  "VO_Adj": "4",
  "VO_Sense": "5",
  "VO": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VI: "power_in", "~{Inhibit}": "input", VO_Adj: "input", VO_Sense: "power_out", VO: "power_out", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class PTN78020H_EUK_7 extends Component.withPins({
  "GND_1": "1",
  "VI": "2",
  "~{Inhibit}": "3",
  "VO_Adj": "4",
  "VO_Sense": "5",
  "VO": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VI: "power_in", "~{Inhibit}": "input", VO_Adj: "input", VO_Sense: "power_out", VO: "power_out", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class PTN78060W_EUW_7 extends Component.withPins({
  "GND_1": "1",
  "VI": "2",
  "~{Inhibit}": "3",
  "VO_Adj": "4",
  "VO_Sense": "5",
  "VO": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VI: "power_in", "~{Inhibit}": "input", VO_Adj: "input", VO_Sense: "power_out", VO: "power_out", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class PTN78060H_EUW_7 extends Component.withPins({
  "GND_1": "1",
  "VI": "2",
  "~{Inhibit}": "3",
  "VO_Adj": "4",
  "VO_Sense": "5",
  "VO": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VI: "power_in", "~{Inhibit}": "input", VO_Adj: "input", VO_Sense: "power_out", VO: "power_out", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class R_78E5_0_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_781_5_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_781_8_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_781_8_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_7812_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_7815_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_782_5_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_782_5_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_783_3_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_783_3_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_785_0_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_785_0_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_786_5_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B1_2_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B1_5_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B1_8_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B12_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B15_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B2_5_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B3_3_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B5_0_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78B9_0_2_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78C1_8_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78C12_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78C15_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78C3_3_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78C5_0_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78C9_0_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78E12_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78E15_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78E3_3_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78E3_3_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78E5_0_1_0 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78E9_0_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78HB24_0_3 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78HB12_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78HB15_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78HB3_3_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78HB5_0_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78HB6_5_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78HB9_0_0_5 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class R_78S3_3_0_1 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
  "CTRL": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", CTRL: "input", ...opts.pinTypes } });
  }
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
 */
export class RPM5_0_6_0 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "SEQ": "E1",
  "NC": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", SEQ: "passive", NC: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPM3_3_1_0 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "SEQ": "E1",
  "NC": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", SEQ: "passive", NC: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPM3_3_2_0 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "SEQ": "E1",
  "NC": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", SEQ: "passive", NC: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPM3_3_3_0 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "SEQ": "E1",
  "NC": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", SEQ: "passive", NC: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPM3_3_6_0 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "SEQ": "E1",
  "NC": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", SEQ: "passive", NC: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPM5_0_1_0 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "SEQ": "E1",
  "NC": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", SEQ: "passive", NC: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPM5_0_2_0 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "SEQ": "E1",
  "NC": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", SEQ: "passive", NC: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPM5_0_3_0 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "SEQ": "E1",
  "NC": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", SEQ: "passive", NC: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPMH3_3_1_5 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "NC_E1": "E1",
  "NC_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", NC_E1: "no_connect", NC_E2: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPMH12_1_5 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "NC_E1": "E1",
  "NC_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", NC_E1: "no_connect", NC_E2: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPMH15_1_5 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "NC_E1": "E1",
  "NC_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", NC_E1: "no_connect", NC_E2: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPMH24_1_5 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "NC_E1": "E1",
  "NC_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", NC_E1: "no_connect", NC_E2: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class RPMH5_0_1_5 extends Component.withPins({
  "+VIN_A1": "A1",
  "+VIN_A2": "A2",
  "GND_A3": "A3",
  "GND_A4": "A4",
  "+VOUT_A5": "A5",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "GND_B3": "B3",
  "GND_B4": "B4",
  "+VOUT_B5": "B5",
  "CTRL": "C1",
  "GND_C2": "C2",
  "GND_C3": "C3",
  "GND_C4": "C4",
  "Sense": "C5",
  "PGood": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "NC_E1": "E1",
  "NC_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Trim": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VIN_A1": "power_in", "+VIN_A2": "passive", GND_A3: "power_in", GND_A4: "passive", "+VOUT_A5": "power_out", GND_B1: "passive", GND_B2: "passive", GND_B3: "passive", GND_B4: "passive", "+VOUT_B5": "passive", CTRL: "input", GND_C2: "passive", GND_C3: "passive", GND_C4: "passive", Sense: "input", PGood: "output", GND_D2: "passive", GND_D3: "passive", GND_D4: "passive", GND_D5: "passive", NC_E1: "no_connect", NC_E2: "no_connect", GND_E3: "passive", GND_E4: "passive", Trim: "input", ...opts.pinTypes } });
  }
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
 */
export class TC7662AxPA extends Component.withPins({
  "NC_1": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "VOUT": "5",
  "NC_6": "6",
  "OSC": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", "CAP+": "passive", GND: "power_in", "CAP-": "passive", VOUT: "power_out", NC_6: "passive", OSC: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TC7662Bx0A extends Component.withPins({
  "BOOST": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "VOUT": "5",
  "LV": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOST: "input", "CAP+": "passive", GND: "power_in", "CAP-": "passive", VOUT: "power_out", LV: "input", OSC: "passive", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class TC7662BxPA extends Component.withPins({
  "BOOST": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "VOUT": "5",
  "LV": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOST: "input", "CAP+": "passive", GND: "power_in", "CAP-": "passive", VOUT: "power_out", LV: "input", OSC: "passive", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPS43060RTE extends Component.withPins({
  "RT/CLK": "1",
  "SS": "2",
  "COMP": "3",
  "FB": "4",
  "ISNS–": "5",
  "ISNS+": "6",
  "VIN": "7",
  "LDRV": "8",
  "PGND": "9",
  "VCC": "10",
  "BOOT": "11",
  "SW": "12",
  "HDRV": "13",
  "PGOOD": "14",
  "EN": "15",
  "AGND_16": "16",
  "AGND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RT/CLK": "passive", SS: "passive", COMP: "passive", FB: "input", "ISNS–": "input", "ISNS+": "input", VIN: "power_in", LDRV: "output", PGND: "power_in", VCC: "power_out", BOOT: "input", SW: "input", HDRV: "input", PGOOD: "open_collector", EN: "passive", AGND_16: "power_in", AGND_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS54240DGQ extends Component.withPins({
  "BOOT": "1",
  "VIN": "2",
  "EN": "3",
  "SS/TR": "4",
  "RT/CLK": "5",
  "PWRGD": "6",
  "VSENSE": "7",
  "COMP": "8",
  "GND_9": "9",
  "PH": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT: "input", VIN: "power_in", EN: "input", "SS/TR": "passive", "RT/CLK": "passive", PWRGD: "open_collector", VSENSE: "input", COMP: "passive", GND_9: "power_in", PH: "power_out", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS54240DRC extends Component.withPins({
  "BOOT": "1",
  "VIN": "2",
  "EN": "3",
  "SS/TR": "4",
  "RT/CLK": "5",
  "PWRGD": "6",
  "VSENSE": "7",
  "COMP": "8",
  "GND_9": "9",
  "PH": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT: "input", VIN: "power_in", EN: "input", "SS/TR": "passive", "RT/CLK": "passive", PWRGD: "open_collector", VSENSE: "input", COMP: "passive", GND_9: "power_in", PH: "power_out", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS61022 extends Component.withPins({
  "GND": "1",
  "SW": "2",
  "VOUT": "3",
  "FB": "4",
  "EN": "5",
  "MODE": "6",
  "VIN": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SW: "input", VOUT: "power_out", FB: "input", EN: "input", MODE: "input", VIN: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPS82130 extends Component.withPins({
  "EN": "1",
  "VIN": "2",
  "GND_3": "3",
  "VOUT_4": "4",
  "VOUT_5": "5",
  "FB": "6",
  "PG": "7",
  "SS/TR": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", VIN: "power_in", GND_3: "power_in", VOUT_4: "power_out", VOUT_5: "passive", FB: "input", PG: "open_collector", "SS/TR": "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS82140 extends Component.withPins({
  "EN": "1",
  "VIN": "2",
  "GND_3": "3",
  "VOUT_4": "4",
  "VOUT_5": "5",
  "FB": "6",
  "PG": "7",
  "SS/TR": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", VIN: "power_in", GND_3: "power_in", VOUT_4: "power_out", VOUT_5: "passive", FB: "input", PG: "open_collector", "SS/TR": "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS82150 extends Component.withPins({
  "EN": "1",
  "VIN": "2",
  "GND_3": "3",
  "VOUT_4": "4",
  "VOUT_5": "5",
  "FB": "6",
  "PG": "7",
  "SS/TR": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", VIN: "power_in", GND_3: "power_in", VOUT_4: "power_out", VOUT_5: "passive", FB: "input", PG: "open_collector", "SS/TR": "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPSM53602RDA extends Component.withPins({
  "VIN_1": "1",
  "EN": "2",
  "PGND_3": "3",
  "DNC_4": "4",
  "DNC_5": "5",
  "PGOOD": "6",
  "VOUT_7": "7",
  "VOUT_8": "8",
  "FB": "9",
  "PGND_10": "10",
  "PGND_11": "11",
  "AGND": "12",
  "V5V": "13",
  "VIN_14": "14",
  "PGND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_1: "power_in", EN: "input", PGND_3: "passive", DNC_4: "no_connect", DNC_5: "no_connect", PGOOD: "open_collector", VOUT_7: "power_out", VOUT_8: "passive", FB: "input", PGND_10: "passive", PGND_11: "passive", AGND: "power_in", V5V: "output", VIN_14: "passive", PGND_15: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPSM53603RDA extends Component.withPins({
  "VIN_1": "1",
  "EN": "2",
  "PGND_3": "3",
  "DNC_4": "4",
  "DNC_5": "5",
  "PGOOD": "6",
  "VOUT_7": "7",
  "VOUT_8": "8",
  "FB": "9",
  "PGND_10": "10",
  "PGND_11": "11",
  "AGND": "12",
  "V5V": "13",
  "VIN_14": "14",
  "PGND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_1: "power_in", EN: "input", PGND_3: "passive", DNC_4: "no_connect", DNC_5: "no_connect", PGOOD: "open_collector", VOUT_7: "power_out", VOUT_8: "passive", FB: "input", PGND_10: "passive", PGND_11: "passive", AGND: "power_in", V5V: "output", VIN_14: "passive", PGND_15: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPSM53604RDA extends Component.withPins({
  "VIN_1": "1",
  "EN": "2",
  "PGND_3": "3",
  "DNC_4": "4",
  "DNC_5": "5",
  "PGOOD": "6",
  "VOUT_7": "7",
  "VOUT_8": "8",
  "FB": "9",
  "PGND_10": "10",
  "PGND_11": "11",
  "AGND": "12",
  "V5V": "13",
  "VIN_14": "14",
  "PGND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_1: "power_in", EN: "input", PGND_3: "passive", DNC_4: "no_connect", DNC_5: "no_connect", PGOOD: "open_collector", VOUT_7: "power_out", VOUT_8: "passive", FB: "input", PGND_10: "passive", PGND_11: "passive", AGND: "power_in", V5V: "output", VIN_14: "passive", PGND_15: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_2450 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_24120 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_24120SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2415 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_24150 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_24150SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2415SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2418 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2418SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2425 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2425SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2433 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2433SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2450 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2450SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2465 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2465SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2490 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_5_2490SM extends Component.withPins({
  "Vin_1": "1",
  "Vin_2": "2",
  "GND_3": "3",
  "Vout_4": "4",
  "Vout_5": "5",
  "Trim": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Remote": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin_1: "power_in", Vin_2: "passive", GND_3: "power_in", Vout_4: "power_out", Vout_5: "passive", Trim: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Remote: "input", ...opts.pinTypes } });
  }
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
 */
export class TSR0_6_48120WI extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_6_48150WI extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_6_48240WI extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_6_4833WI extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_6_4850WI extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_6_4865WI extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR0_6_4890WI extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR1_2433E extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR1_2450E extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR1_5_24120E extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR1_5_2433E extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR1_5_2450E extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_0512 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_0515 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_0518 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_0525 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2412 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_24120 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_24120N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2412N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2415 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_24150 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_24150N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2415N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2418 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2418N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2425 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2425N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2433 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2433N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2450 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2450N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2465 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2465N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2490 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR2_2490N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_24120N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_2412N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_24150N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_2415N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_2418N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_2425N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_2433N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_2450N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_2465N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR3_2490N extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_2412 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_24120 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_2415 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_24150 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_2418 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_2425 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_2433 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_2465 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
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
 */
export class TSR_1_2490 extends Component.withPins({
  "Vin": "1",
  "GND": "2",
  "Vout": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", GND: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_DCDC:TSR_1-2490";
  override referencePrefix = "U";
}
