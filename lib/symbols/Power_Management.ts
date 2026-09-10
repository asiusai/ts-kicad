// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Current Limited Load Switch, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AAT4610BIGV-1-T1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.skyworksinc.com/uploads/documents/201937A.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AAT4610BIGV_1_T1 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "SET": "3",
  "ON": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", SET: "passive", ON: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AAT4610BIGV-1-T1";
  override referencePrefix = "U";
}

/**
 * Current Limited Load Switch, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AAT4610BIGV-T1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.skyworksinc.com/uploads/documents/201937A.pdf
 * Keywords: Limit USB Active Low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AAT4610BIGV_T1 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "SET": "3",
  "~{ON}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", SET: "passive", "~{ON}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AAT4610BIGV-T1";
  override referencePrefix = "U";
}

/**
 * Adjustable Current Limited Load Switch, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AAT4616IGV-1-T1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.skyworksinc.com/uploads/documents/AAT4616_201940E.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AAT4616IGV_1_T1 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "SET": "3",
  "ON": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", SET: "passive", ON: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AAT4616IGV-1-T1";
  override referencePrefix = "U";
}

/**
 * Adjustable Current Limited Load Switch, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AAT4616IGV-T1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.skyworksinc.com/uploads/documents/AAT4616_201940E.pdf
 * Keywords: Limit USB Active Low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AAT4616IGV_T1 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "SET": "3",
  "~{ON}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", SET: "passive", "~{ON}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AAT4616IGV-T1";
  override referencePrefix = "U";
}

/**
 * High Voltage Input Protection Device
 *
 * KiCad symbol: `Power_Management:ADM1270ACPZ`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM1270.pdf
 * Keywords: high-voltage mosfet-driver hot-swap.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.5x1.5mm.
 */
export class ADM1270ACPZ extends Component.withPins({
  "GND": "7",
  "EP": "17",
  "VCAP": "1",
  "ISET": "2",
  "UV": "3",
  "OV": "4",
  "ENABLE": "5",
  "~{FAULT}": "6",
  "TIMER": "8",
  "TIMER_OFF": "9",
  "FB_PG": "10",
  "FLB": "11",
  "PWRGD": "12",
  "GATE": "13",
  "SENSE-": "14",
  "VCC": "15",
  "RPFG": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", EP: "passive", VCAP: "power_out", ISET: "input", UV: "input", OV: "input", ENABLE: "input", "~{FAULT}": "open_collector", TIMER: "input", TIMER_OFF: "input", FB_PG: "input", FLB: "input", PWRGD: "open_collector", GATE: "output", "SENSE-": "input", VCC: "power_in", RPFG: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:ADM1270ACPZ";
  override referencePrefix = "U";
}

/**
 * High Voltage Input Protection Device
 *
 * KiCad symbol: `Power_Management:ADM1270ARQZ`. Reference prefix: `U`.
 * Footprint filters: *QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM1270.pdf
 * Keywords: high-voltage mosfet-driver hot-swap.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 */
export class ADM1270ARQZ extends Component.withPins({
  "GND": "9",
  "VCC": "1",
  "RPFG": "2",
  "VCAP": "3",
  "ISET": "4",
  "UV": "5",
  "OV": "6",
  "ENABLE": "7",
  "~{FAULT}": "8",
  "TIMER": "10",
  "TIMER_OFF": "11",
  "FB_PG": "12",
  "FLB": "13",
  "PWRGD": "14",
  "GATE": "15",
  "SENSE-": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", RPFG: "input", VCAP: "power_out", ISET: "input", UV: "input", OV: "input", ENABLE: "input", "~{FAULT}": "open_collector", TIMER: "input", TIMER_OFF: "input", FB_PG: "input", FLB: "input", PWRGD: "open_collector", GATE: "output", "SENSE-": "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:ADM1270ARQZ";
  override referencePrefix = "U";
}

/**
 * Current limited power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP2161W`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP2161.pdf
 * Keywords: Limit USB Active Low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP2161W extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "~{EN}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", "~{EN}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP2161W";
  override referencePrefix = "U";
}

/**
 * Current limited power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP2171W`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP2161.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP2171W extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP2171W";
  override referencePrefix = "U";
}

/**
 * Current limited 2.5A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22804AW5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22804_14.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22804AW5 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22804AW5";
  override referencePrefix = "U";
}

/**
 * Current limited 2.5A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22804BW5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22804_14.pdf
 * Keywords: Limit USB Active Low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22804BW5 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "~{EN}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", "~{EN}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22804BW5";
  override referencePrefix = "U";
}

/**
 * Current limited 3A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22814AW5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22804_14.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22814AW5 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22814AW5";
  override referencePrefix = "U";
}

/**
 * Current limited 3A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22814BW5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22804_14.pdf
 * Keywords: Limit USB Active Low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22814BW5 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "~{EN}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", "~{EN}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22814BW5";
  override referencePrefix = "U";
}

/**
 * Current limited 1A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22816AKEWT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22816_17_18.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22816AKEWT extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22816AKEWT";
  override referencePrefix = "U";
}

/**
 * Current limited 1A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22816BKEWT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22816_17_18.pdf
 * Keywords: Limit USB Active Low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22816BKEWT extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "~{EN}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", "~{EN}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22816BKEWT";
  override referencePrefix = "U";
}

/**
 * Current limited 1.5A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22817AKEWT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22816_17_18.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22817AKEWT extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22817AKEWT";
  override referencePrefix = "U";
}

/**
 * Current limited 1.5A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22817BKEWT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22816_17_18.pdf
 * Keywords: Limit USB Active Low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22817BKEWT extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "~{EN}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", "~{EN}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22817BKEWT";
  override referencePrefix = "U";
}

/**
 * Current limited 2.0A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22818AKEWT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22816_17_18.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22818AKEWT extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22818AKEWT";
  override referencePrefix = "U";
}

/**
 * Current limited 2A power switch, single channel, SOT-23-5
 *
 * KiCad symbol: `Power_Management:AP22818BKEWT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP22816_17_18.pdf
 * Keywords: Limit USB Active Low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP22818BKEWT extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "~{EN}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", "~{EN}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22818BKEWT";
  override referencePrefix = "U";
}

/**
 * Slew rate controlled load switch, WLCSP-4
 *
 * KiCad symbol: `Power_Management:AP22913CN4`. Reference prefix: `U`.
 * Footprint filters: WLCSP*0.89x0.89mm*Layout2x2*P0.5mm*.
 * @see https://www.diodes.com/assets/Datasheets/AP22913.pdf
 * Keywords: Lead control switch slew rate.
 * Default footprint: Package_CSP:WLCSP-4_0.89x0.89mm_Layout2x2_P0.5mm.
 */
export class AP22913CN4 extends Component.withPins({
  "OUT": "A1",
  "IN": "A2",
  "GND": "B1",
  "ON": "B2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", IN: "power_in", GND: "power_in", ON: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AP22913CN4";
  override referencePrefix = "U";
}

/**
 * Intelligent Power Low Side Switch, 39V, 4.5A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS1041R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/Infineon-AUIPS1041-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aae14a0524c63
 * Keywords: low side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-3_TabPin2.
 */
export class AUIPS1041R extends Component.withPins({
  "IN": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", D: "passive", S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS1041R";
  override referencePrefix = "U";
}

/**
 * Dual Channel Intelligent Power Low Side Switch, 39V, 4.5A, SOIC-8
 *
 * KiCad symbol: `Power_Management:AUIPS1042G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-AUIPS1041-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aae14a0524c63
 * Keywords: dual low side switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AUIPS1042G extends Component.withPins({
  "S1": "1",
  "IN1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "IN2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "power_in", IN1: "input", D1_7: "passive", D1_8: "passive", S2: "power_in", IN2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS1042G";
  override referencePrefix = "U";
}

/**
 * Intelligent Power Low Side Switch, 39V, 2.8A, SOT-223
 *
 * KiCad symbol: `Power_Management:AUIPS1051L`. Reference prefix: `U`.
 * Footprint filters: SOT?223*.
 * @see https://www.infineon.com/dgdl/auips1051.pdf?fileId=5546d462533600a4015355a4710712fc
 * Keywords: low side switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class AUIPS1051L extends Component.withPins({
  "IN": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", D: "passive", S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS1051L";
  override referencePrefix = "U";
}

/**
 * Dual Channel Intelligent Power Low Side Switch, 39V, 2.8A, SOIC-8
 *
 * KiCad symbol: `Power_Management:AUIPS1052G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/auips1051.pdf?fileId=5546d462533600a4015355a4710712fc
 * Keywords: dual low side switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AUIPS1052G extends Component.withPins({
  "S1": "1",
  "IN1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "IN2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "power_in", IN1: "input", D1_7: "passive", D1_8: "passive", S2: "power_in", IN2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS1052G";
  override referencePrefix = "U";
}

/**
 * Intelligent Power Low Side Switch, 68V, 10A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS2031R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/Infineon-AUIPS2031R-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aae1488334c5c
 * Keywords: low side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-3_TabPin2.
 */
export class AUIPS2031R extends Component.withPins({
  "IN": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", D: "passive", S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS2031R";
  override referencePrefix = "U";
}

/**
 * Intelligent Power Low Side Switch, 68V, 5A, SOT-223
 *
 * KiCad symbol: `Power_Management:AUIPS2041L`. Reference prefix: `U`.
 * Footprint filters: SOT?223*.
 * @see https://www.infineon.com/dgdl/Infineon-AUIPS2041-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aae147a9d4c57
 * Keywords: low side switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class AUIPS2041L extends Component.withPins({
  "IN": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", D: "passive", S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS2041L";
  override referencePrefix = "U";
}

/**
 * Intelligent Power Low Side Switch, 70V, 1.8A, SOT-223
 *
 * KiCad symbol: `Power_Management:AUIPS2051L`. Reference prefix: `U`.
 * Footprint filters: SOT?223*.
 * @see https://www.infineon.com/dgdl/Infineon-AUIPS2052G-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aae0b6fb04c51
 * Keywords: low side switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class AUIPS2051L extends Component.withPins({
  "IN": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", D: "passive", S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS2051L";
  override referencePrefix = "U";
}

/**
 * Dual Channel Intelligent Power Low Side Switch, 70V, 1.8A, SOIC-8
 *
 * KiCad symbol: `Power_Management:AUIPS2052G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-AUIPS2052G-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aae0b6fb04c51
 * Keywords: dual low side switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AUIPS2052G extends Component.withPins({
  "S1": "1",
  "IN1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "IN2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "power_in", IN1: "input", D1_7: "passive", D1_8: "passive", S2: "power_in", IN2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS2052G";
  override referencePrefix = "U";
}

/**
 * Intelligent Power High Side Switch, 39V, 60A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS6011R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/auips6011.pdf?fileId=5546d462533600a4015355a787bf1309
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS6011R extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "open_collector", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS6011R";
  override referencePrefix = "U";
}

/**
 * Intelligent Power High Side Switch, 39V, 16A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS6031R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/auips6031.pdf?fileId=5546d462533600a4015355a797f51311
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS6031R extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "open_collector", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS6031R";
  override referencePrefix = "U";
}

/**
 * Intelligent Power High Side Switch, 39V, 7A, SOIC-8
 *
 * KiCad symbol: `Power_Management:AUIPS6041G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/auips6041.pdf?fileId=5546d462533600a4015355a7a0251315
 * Keywords: high side switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AUIPS6041G extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DG": "3",
  "OUT": "4",
  "VCC_5": "5",
  "VCC_6": "6",
  "VCC_7": "7",
  "VCC_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DG: "open_collector", OUT: "power_out", VCC_5: "power_in", VCC_6: "passive", VCC_7: "passive", VCC_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS6041G";
  override referencePrefix = "U";
}

/**
 * Intelligent Power High Side Switch, 39V, 7A, SOIC-28W
 *
 * KiCad symbol: `Power_Management:AUIPS6044G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/auips6044g.pdf?fileId=5546d462533600a4015355a7a8e4131a
 * Keywords: high side switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AUIPS6044G extends Component.withPins({
  "VCC_1": "1",
  "GND1": "2",
  "IN1": "3",
  "DG1": "4",
  "VCC_14": "14",
  "VCC_15": "15",
  "OUT1_25": "25",
  "OUT1_26": "26",
  "OUT1_27": "27",
  "VCC_28": "28",
  "DG2": "5",
  "IN2": "6",
  "GND2": "7",
  "OUT2_22": "22",
  "OUT2_23": "23",
  "OUT2_24": "24",
  "GND3": "8",
  "IN3": "9",
  "DG3": "10",
  "OUT3_19": "19",
  "OUT3_20": "20",
  "OUT3_21": "21",
  "DG4": "11",
  "IN4": "12",
  "GND4": "13",
  "OUT4_16": "16",
  "OUT4_17": "17",
  "OUT4_18": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC_1: "power_in", GND1: "power_in", IN1: "input", DG1: "open_collector", VCC_14: "passive", VCC_15: "passive", OUT1_25: "power_out", OUT1_26: "passive", OUT1_27: "passive", VCC_28: "passive", DG2: "open_collector", IN2: "input", GND2: "power_in", OUT2_22: "power_out", OUT2_23: "passive", OUT2_24: "passive", GND3: "power_in", IN3: "input", DG3: "open_collector", OUT3_19: "power_out", OUT3_20: "passive", OUT3_21: "passive", DG4: "open_collector", IN4: "input", GND4: "power_in", OUT4_16: "power_out", OUT4_17: "passive", OUT4_18: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS6044G";
  override referencePrefix = "U";
}

/**
 * Intelligent Power High Side Switch, 70V, 5A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS7081R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/auips7081.pdf?fileId=5546d462533600a4015355a7b8d5131e
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS7081R extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "open_collector", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7081R";
  override referencePrefix = "U";
}

/**
 * Intelligent Power High Side Switch, 70V, 5A, D2PAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS7081S`. Reference prefix: `U`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/auips7081.pdf?fileId=5546d462533600a4015355a7b8d5131e
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-4.
 */
export class AUIPS7081S extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "open_collector", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7081S";
  override referencePrefix = "U";
}

/**
 * Intelligent Power High Side Switch, 70V, 5A, SOIC-8
 *
 * KiCad symbol: `Power_Management:AUIPS7091G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/auips7091.pdf?fileId=5546d462533600a4015355a7c0d21322
 * Keywords: high side switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AUIPS7091G extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DG": "3",
  "OUT": "4",
  "VCC_5": "5",
  "VCC_6": "6",
  "VCC_7": "7",
  "VCC_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DG: "open_collector", OUT: "power_out", VCC_5: "power_in", VCC_6: "passive", VCC_7: "passive", VCC_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7091G";
  override referencePrefix = "U";
}

/**
 * Current Sense High Side Switch, 65V, 30A, D2PAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS7111S`. Reference prefix: `U`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/auips7111s.pdf?fileId=5546d462533600a4015355a7c94e1326
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-4.
 */
export class AUIPS7111S extends Component.withPins({
  "IN": "1",
  "IFB": "2",
  "VCC": "3",
  "OUT_4": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", IFB: "output", VCC: "power_in", OUT_4: "power_out", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7111S";
  override referencePrefix = "U";
}

/**
 * Current Sense High Side Switch, 65V, 50A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS7121R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see http://www.infineon.com/dgdl/auips7121.pdf?fileId=5546d462533600a4015355a7d1721328
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS7121R extends Component.withPins({
  "NC": "1",
  "IN": "2",
  "VCC": "3",
  "IFB": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", IN: "input", VCC: "power_in", IFB: "output", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7121R";
  override referencePrefix = "U";
}

/**
 * Current Sense High Side Switch, 65V, 50A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS7125R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/auips7125.pdf?fileId=5546d462533600a4015355a7d96a132a
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS7125R extends Component.withPins({
  "NC": "1",
  "IN": "2",
  "VCC": "3",
  "IFB": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", IN: "input", VCC: "power_in", IFB: "output", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7125R";
  override referencePrefix = "U";
}

/**
 * Current Sense High Side Switch, 65V, 20A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS7141R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/auips7141.pdf?fileId=5546d462533600a4015355a7e126132c
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS7141R extends Component.withPins({
  "NC": "1",
  "IN": "2",
  "VCC": "3",
  "IFB": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", IN: "input", VCC: "power_in", IFB: "output", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7141R";
  override referencePrefix = "U";
}

/**
 * Dual Channels Current Sense High Side Switch, 65V, 20A, SOIC-16W
 *
 * KiCad symbol: `Power_Management:AUIPS7142G`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/auips7142g.pdf?fileId=5546d462533600a4015355a7ef451330
 * Keywords: dual high side switch.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class AUIPS7142G extends Component.withPins({
  "VCC_1": "1",
  "VCC_2": "2",
  "IN1": "3",
  "IFB1": "4",
  "VCC_7": "7",
  "VCC_8": "8",
  "VCC_9": "9",
  "OUT1_13": "13",
  "OUT1_14": "14",
  "OUT1_15": "15",
  "VCC_16": "16",
  "IN2": "5",
  "IFB2": "6",
  "OUT2_10": "10",
  "OUT2_11": "11",
  "OUT2_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC_1: "power_in", VCC_2: "passive", IN1: "input", IFB1: "output", VCC_7: "passive", VCC_8: "passive", VCC_9: "passive", OUT1_13: "power_out", OUT1_14: "passive", OUT1_15: "passive", VCC_16: "passive", IN2: "input", IFB2: "output", OUT2_10: "power_out", OUT2_11: "passive", OUT2_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7142G";
  override referencePrefix = "U";
}

/**
 * Current Sense High Side Switch, 65V, 4A, SOIC-8
 *
 * KiCad symbol: `Power_Management:AUIPS71451G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/auips71451g.pdf?fileId=5546d462533600a4015355a7f7461332
 * Keywords: high side switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AUIPS71451G extends Component.withPins({
  "IN": "1",
  "IFB": "2",
  "OUT_3": "3",
  "OUT_4": "4",
  "VCC_5": "5",
  "VCC_6": "6",
  "VCC_7": "7",
  "VCC_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", IFB: "output", OUT_3: "power_out", OUT_4: "passive", VCC_5: "power_in", VCC_6: "passive", VCC_7: "passive", VCC_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS71451G";
  override referencePrefix = "U";
}

/**
 * Current Sense High Side Switch, 65V, 20A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS7145R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/auips7145r.pdf?fileId=5546d462533600a4015355a7ff1a1334
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS7145R extends Component.withPins({
  "NC": "1",
  "IN": "2",
  "VCC": "3",
  "IFB": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", IN: "input", VCC: "power_in", IFB: "output", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7145R";
  override referencePrefix = "U";
}

/**
 * PWM Intelligent Power High Side Switch, 75V, 25A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS7221R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/auips7221r.pdf?fileId=5546d462533600a4015355a80e761338
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS7221R extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "VCC": "3",
  "Cb": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND: "power_in", VCC: "power_in", Cb: "passive", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS7221R";
  override referencePrefix = "U";
}

/**
 * Low EMI PWM Intelligent Power High Side Switch, 75V, 20A, DPAK-5L
 *
 * KiCad symbol: `Power_Management:AUIPS72211R`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/Infineon-AUIPS72211R-DS-v01_10-EN.pdf?fileId=5546d4625a888733015aad6673cb4beb
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class AUIPS72211R extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "VCC": "3",
  "Cb": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND: "power_in", VCC: "power_in", Cb: "passive", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIPS72211R";
  override referencePrefix = "U";
}

/**
 * Programmable Current Sense High Side Switch, 32V, 90A, D2PAK-5L
 *
 * KiCad symbol: `Power_Management:AUIR3313S`. Reference prefix: `U`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/auir3313.pdf?fileId=5546d462533600a4015355a83e2d1347
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-4.
 */
export class AUIR3313S extends Component.withPins({
  "IN": "1",
  "IFB": "2",
  "VCC": "3",
  "OUT_4": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", IFB: "output", VCC: "power_in", OUT_4: "power_out", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIR3313S";
  override referencePrefix = "U";
}

/**
 * Programmable Current Sense High Side Switch, 32V, 58A, D2PAK-5L
 *
 * KiCad symbol: `Power_Management:AUIR3314S`. Reference prefix: `U`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/auir3314.pdf?fileId=5546d462533600a4015355a846b8134a
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-4.
 */
export class AUIR3314S extends Component.withPins({
  "IN": "1",
  "IFB": "2",
  "VCC": "3",
  "OUT_4": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", IFB: "output", VCC: "power_in", OUT_4: "power_out", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIR3314S";
  override referencePrefix = "U";
}

/**
 * Programmable Current Sense High Side Switch, 32V, 30A, D2PAK-5L
 *
 * KiCad symbol: `Power_Management:AUIR3315S`. Reference prefix: `U`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/auir3315.pdf?fileId=5546d462533600a4015355a84eda134d
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-4.
 */
export class AUIR3315S extends Component.withPins({
  "IN": "1",
  "IFB": "2",
  "VCC": "3",
  "OUT_4": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", IFB: "output", VCC: "power_in", OUT_4: "power_out", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIR3315S";
  override referencePrefix = "U";
}

/**
 * Low EMI Current Sense High Side Switch, 26V, 90A, D2PAK-5L
 *
 * KiCad symbol: `Power_Management:AUIR3316S`. Reference prefix: `U`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/auir3316.pdf?fileId=5546d462533600a4015355a856f41350
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-4.
 */
export class AUIR3316S extends Component.withPins({
  "IN": "1",
  "IFB": "2",
  "VCC": "3",
  "OUT_4": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", IFB: "output", VCC: "power_in", OUT_4: "power_out", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIR3316S";
  override referencePrefix = "U";
}

/**
 * Low EMI Current Sense High Side Switch, 26V, 55A, D2PAK-5L
 *
 * KiCad symbol: `Power_Management:AUIR3320S`. Reference prefix: `U`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/auir3320s.pdf?fileId=5546d462533600a4015355a867d01356
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-4.
 */
export class AUIR3320S extends Component.withPins({
  "IN": "1",
  "IFB": "2",
  "VCC": "3",
  "OUT_4": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", IFB: "output", VCC: "power_in", OUT_4: "power_out", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIR3320S";
  override referencePrefix = "U";
}

/**
 * Protected High Side Switch, 18V, 33A, D2PAK-7L
 *
 * KiCad symbol: `Power_Management:AUIR33402S`. Reference prefix: `U`.
 * Footprint filters: TO?263*TabPin4*.
 * @see https://www.infineon.com/dgdl/auir33402s.pdf?fileId=5546d462533600a4015355a88074135c
 * Keywords: high side switch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin4.
 */
export class AUIR33402S extends Component.withPins({
  "IFB": "1",
  "IN": "2",
  "GND": "3",
  "VCC": "4",
  "Cb": "5",
  "OUT_6": "6",
  "OUT_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IFB: "output", IN: "input", GND: "power_in", VCC: "power_in", Cb: "passive", OUT_6: "power_out", OUT_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:AUIR33402S";
  override referencePrefix = "U";
}

/**
 * Adjustable current limit high side switch IC, active-high enable, 2.8..5.5V, 0.2..1.7A, 89mOhm Ron, TSOP-6
 *
 * KiCad symbol: `Power_Management:BD2222G`. Reference prefix: `U`.
 * Footprint filters: TSOP*6*1.65x3.05mm*P0.95mm*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/ic/power/power_switch/bd2242g-e.pdf
 * Keywords: USB power-distribution ROHM.
 * Default footprint: Package_SO:TSOP-6_1.65x3.05mm_P0.95mm.
 */
export class BD2222G extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "EN": "3",
  "OUT": "6",
  "~{OC}": "4",
  "ILIM": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", EN: "input", OUT: "power_out", "~{OC}": "open_collector", ILIM: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD2222G";
  override referencePrefix = "U";
}

/**
 * Adjustable current limit high side switch IC, 2.8..5.5V, output discharge, active-high enable, 0.2..1.7A, 89mOhm Ron, TSOP-6
 *
 * KiCad symbol: `Power_Management:BD2242G`. Reference prefix: `U`.
 * Footprint filters: TSOP*6*1.65x3.05mm*P0.95mm*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/ic/power/power_switch/bd2242g-e.pdf
 * Keywords: USB power-distribution ROHM.
 * Default footprint: Package_SO:TSOP-6_1.65x3.05mm_P0.95mm.
 */
export class BD2242G extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "EN": "3",
  "OUT": "6",
  "~{OC}": "4",
  "ILIM": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", EN: "input", OUT: "power_out", "~{OC}": "open_collector", ILIM: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD2242G";
  override referencePrefix = "U";
}

/**
 * Adjustable current limit high side switch IC, active-low enable, output discharge, 2.8..5.5V, 0.2..1.7A, 89mOhm Ron, TSOP-6
 *
 * KiCad symbol: `Power_Management:BD2243G`. Reference prefix: `U`.
 * Footprint filters: TSOP*6*1.65x3.05mm*P0.95mm*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/ic/power/power_switch/bd2242g-e.pdf
 * Keywords: USB power-distribution ROHM.
 * Default footprint: Package_SO:TSOP-6_1.65x3.05mm_P0.95mm.
 */
export class BD2243G extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "6",
  "~{EN}": "3",
  "~{OC}": "4",
  "ILIM": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", OUT: "power_out", "~{EN}": "input", "~{OC}": "open_collector", ILIM: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD2243G";
  override referencePrefix = "U";
}

/**
 * Standard CMOS Voltage Detector IC, Open Drain Output, SSOP5
 *
 * KiCad symbol: `Power_Management:BD48ExxG`. Reference prefix: `U`.
 * Footprint filters: *SOT-23*5*.
 * @see https://www.rohm.de/datasheet/BD4830FVE/bd48xxg-e
 * Keywords: voltage detector open drain SSOP5.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class BD48ExxG extends Component.withPins({
  "VOUT": "1",
  "VDD": "2",
  "GND": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD48ExxG";
  override referencePrefix = "U";
}

/**
 * Standard CMOS Voltage Detector IC, Open Drain Output, SSOP3(1pin GND)
 *
 * KiCad symbol: `Power_Management:BD48KxxG`. Reference prefix: `U`.
 * Footprint filters: *SOT-23*.
 * @see https://www.rohm.de/datasheet/BD4830FVE/bd48xxg-e
 * Keywords: voltage detector open drain SSOP3.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BD48KxxG extends Component.withPins({
  "GND": "1",
  "VOUT": "2",
  "VDD": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VOUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD48KxxG";
  override referencePrefix = "U";
}

/**
 * Standard CMOS Voltage Detector IC, Open Drain Output, SSOP3(3pin GND)
 *
 * KiCad symbol: `Power_Management:BD48LxxG`. Reference prefix: `U`.
 * Footprint filters: *SOT-23*.
 * @see https://www.rohm.de/datasheet/BD4830FVE/bd48xxg-e
 * Keywords: voltage detector open drain SSOP3.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BD48LxxG extends Component.withPins({
  "VOUT": "1",
  "VDD": "2",
  "GND": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD48LxxG";
  override referencePrefix = "U";
}

/**
 * Standard CMOS Voltage Detector IC, Open Drain Output, VSOF5
 *
 * KiCad symbol: `Power_Management:BD48xxFVE`. Reference prefix: `U`.
 * Footprint filters: *VSOF*5*.
 * @see https://www.rohm.de/datasheet/BD4830FVE/bd48xxg-e
 * Keywords: voltage detector open drain VSOF5.
 * Default footprint: Package_TO_SOT_SMD:VSOF5.
 */
export class BD48xxFVE extends Component.withPins({
  "VOUT": "1",
  "GND_2": "2",
  "GND_4": "4",
  "VDD": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "output", GND_2: "passive", GND_4: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD48xxFVE";
  override referencePrefix = "U";
}

/**
 * Standard CMOS Voltage Detector IC, CMOS Output, SSOP5
 *
 * KiCad symbol: `Power_Management:BD49ExxG`. Reference prefix: `U`.
 * Footprint filters: *SOT-23*5*.
 * @see https://www.rohm.de/datasheet/BD4830FVE/bd48xxg-e
 * Keywords: voltage detector cmos SSOP5.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class BD49ExxG extends Component.withPins({
  "VOUT": "1",
  "VDD": "2",
  "GND": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD49ExxG";
  override referencePrefix = "U";
}

/**
 * Standard CMOS Voltage Detector IC, CMOS Output, SSOP3(1pin GND)
 *
 * KiCad symbol: `Power_Management:BD49KxxG`. Reference prefix: `U`.
 * Footprint filters: *SOT-23*.
 * @see https://www.rohm.de/datasheet/BD4830FVE/bd48xxg-e
 * Keywords: voltage detector cmos SSOP3.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BD49KxxG extends Component.withPins({
  "GND": "1",
  "VOUT": "2",
  "VDD": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VOUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD49KxxG";
  override referencePrefix = "U";
}

/**
 * Standard CMOS Voltage Detector IC, CMOS Output, SSOP3(3pin GND)
 *
 * KiCad symbol: `Power_Management:BD49LxxG`. Reference prefix: `U`.
 * Footprint filters: *SOT-23*.
 * @see https://www.rohm.de/datasheet/BD4830FVE/bd48xxg-e
 * Keywords: voltage detector cmos SSOP3.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BD49LxxG extends Component.withPins({
  "VOUT": "1",
  "VDD": "2",
  "GND": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD49LxxG";
  override referencePrefix = "U";
}

/**
 * Standard CMOS Voltage Detector IC, CMOS Output, VSOF5
 *
 * KiCad symbol: `Power_Management:BD49xxFVE`. Reference prefix: `U`.
 * Footprint filters: *VSOF*5*.
 * @see https://www.rohm.de/datasheet/BD4830FVE/bd48xxg-e
 * Keywords: voltage detector cmos VSOF5.
 * Default footprint: Package_TO_SOT_SMD:VSOF5.
 */
export class BD49xxFVE extends Component.withPins({
  "VOUT": "1",
  "GND_2": "2",
  "GND_4": "4",
  "VDD": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "output", GND_2: "passive", GND_4: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BD49xxFVE";
  override referencePrefix = "U";
}

/**
 * USB-Friendly Lithium-Ion Battery Charger And Power-Path Management IC, VQFN-16
 *
 * KiCad symbol: `Power_Management:BQ24230RGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/cn/lit/ds/symlink/bq24230.pdf
 * Keywords: Lithium-ion battery charger.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm_ThermalVias.
 */
export class BQ24230RGT extends Component.withPins({
  "TS": "1",
  "BAT_2": "2",
  "BAT_3": "3",
  "CE": "4",
  "EN2": "5",
  "EN1": "6",
  "PGOOD": "7",
  "VSS_8": "8",
  "CHG": "9",
  "OUT_10": "10",
  "OUT_11": "11",
  "ILIM": "12",
  "IN": "13",
  "TMR": "14",
  "TD": "15",
  "ISET": "16",
  "VSS_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TS: "passive", BAT_2: "bidirectional", BAT_3: "bidirectional", CE: "input", EN2: "input", EN1: "input", PGOOD: "open_collector", VSS_8: "power_in", CHG: "open_collector", OUT_10: "power_out", OUT_11: "passive", ILIM: "passive", IN: "power_in", TMR: "passive", TD: "input", ISET: "passive", VSS_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BQ24230RGT";
  override referencePrefix = "U";
}

/**
 * High Current PN Half Bridge, TO-263-7
 *
 * KiCad symbol: `Power_Management:BTN8982TA`. Reference prefix: `Q`.
 * Footprint filters: TO*263*TabPin8*.
 * @see https://www.infineon.com/dgdl/Infineon-BTN8982TA-DS-v01_00-EN.pdf?fileId=db3a30433fa9412f013fbe32289b7c17
 * Keywords: half bridge for motor drive applications.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin8.
 */
export class BTN8982TA extends Component.withPins({
  "P1": "1",
  "IN": "2",
  "INH": "3",
  "P4": "4",
  "SR": "5",
  "IS": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "power_in", IN: "input", INH: "input", P4: "passive", SR: "input", IS: "output", P7: "power_in", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTN8982TA";
  override referencePrefix = "Q";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 200mOhm, 1.5A, 36V, DSO-8
 *
 * KiCad symbol: `Power_Management:BTS40K2-1EJC`. Reference prefix: `U`.
 * Footprint filters: Infineon*PG*DSO*43*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS40K2-1EJC-DS-v01_00-EN.pdf?fileId=5546d462518ffd85015254ee4e601f99
 * Keywords: infineon power switch.
 * Default footprint: Package_SO:Infineon_PG-DSO-8-43.
 */
export class BTS40K2_1EJC extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DEN": "3",
  "IS": "4",
  "NC": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "OUT_8": "8",
  "VS": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DEN: "input", IS: "output", NC: "no_connect", OUT_6: "power_out", OUT_7: "passive", OUT_8: "passive", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS40K2-1EJC";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 16mOhm, 10A, 30V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS50080-1TEA`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS50080-1TEA-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa435f2d2115b
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS50080_1TEA extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS50080-1TEA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 16mOhm, 7.6A, 36V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS443P`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS443P-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa9afbc5035d5
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS443P extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS443P";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 100mOhm, 3.5A, 34V, TO-252-4
 *
 * KiCad symbol: `Power_Management:BTS462TATMA1`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS462T-DS-v01_01-EN.pdf?fileId=5546d4625a888733015aa9b0294035f6
 * Keywords: infineon power load switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS462TATMA1 extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "Vbb": "3",
  "NC": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", Vbb: "power_in", NC: "no_connect", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS462TATMA1";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 1mOhm, 40A, 18V, TO-263-7
 *
 * KiCad symbol: `Power_Management:BTS50010-1TAD`. Reference prefix: `U`.
 * Footprint filters: TO*263*TabPin4*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS50010-1TAD-DS-v01_00-EN.pdf?fileId=5546d462576f34750157c38810ca55cd
 * Keywords: BTS50010 PROFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin4.
 */
export class BTS50010_1TAD extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "IS": "3",
  "Vbb": "4",
  "OUT_5": "5",
  "OUT_6": "6",
  "OUT_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", IS: "output", Vbb: "power_in", OUT_5: "passive", OUT_6: "passive", OUT_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS50010-1TAD";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 6mOhm, 70A, 34V, TO220-7
 *
 * KiCad symbol: `Power_Management:BTS50055-1TMA`. Reference prefix: `U`.
 * Footprint filters: TO*263*TabPin4*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS50055-1TMA-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa9b00de935ed
 * Keywords: BTS50055 PROFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin4.
 */
export class BTS50055_1TMA extends Component.withPins({
  "OUT_1": "1",
  "OUT_2": "2",
  "IN": "3",
  "Vbb": "4",
  "IS": "5",
  "OUT_6": "6",
  "OUT_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", OUT_2: "passive", IN: "input", Vbb: "power_in", IS: "output", OUT_6: "passive", OUT_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS50055-1TMA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 6mOhm, 17A, 34V, TO220-7
 *
 * KiCad symbol: `Power_Management:BTS50055-1TMC`. Reference prefix: `U`.
 * Footprint filters: TO*263*TabPin4*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS50055-1TMC-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa9b0007235e9
 * Keywords: BTS50055 PROFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin4.
 */
export class BTS50055_1TMC extends Component.withPins({
  "OUT_1": "1",
  "OUT_2": "2",
  "IN": "3",
  "Vbb": "4",
  "IS": "5",
  "OUT_6": "6",
  "OUT_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", OUT_2: "passive", IN: "input", Vbb: "power_in", IS: "output", OUT_6: "passive", OUT_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS50055-1TMC";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 16mOhm, 10A, 30V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS50080-1TEB`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS50080-1TEB-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa435e5601157
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS50080_1TEB extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS50080-1TEB";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 16mOhm, 9.5A, 38V, TO220-7
 *
 * KiCad symbol: `Power_Management:BTS50080-1TMA`. Reference prefix: `U`.
 * Footprint filters: TO*263*TabPin4*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS50080-1TMA-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa435d7fe1153
 * Keywords: BTS50080 PROFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin4.
 */
export class BTS50080_1TMA extends Component.withPins({
  "OUT_1": "1",
  "OUT_2": "2",
  "IN": "3",
  "Vbb": "4",
  "IS": "5",
  "OUT_6": "6",
  "OUT_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", OUT_2: "passive", IN: "input", Vbb: "power_in", IS: "output", OUT_6: "passive", OUT_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS50080-1TMA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 16mOhm, 9.5A, 38V, TO220-7
 *
 * KiCad symbol: `Power_Management:BTS50080-1TMC`. Reference prefix: `U`.
 * Footprint filters: TO*263*TabPin4*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS50080_1TMC-DS-v01_00-en.pdf?fileId=db3a3043266237920126992737c951ee
 * Keywords: BTS50080 PROFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin4.
 */
export class BTS50080_1TMC extends Component.withPins({
  "OUT_1": "1",
  "OUT_2": "2",
  "IN": "3",
  "Vbb": "4",
  "IS": "5",
  "OUT_6": "6",
  "OUT_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", OUT_2: "passive", IN: "input", Vbb: "power_in", IS: "output", OUT_6: "passive", OUT_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS50080-1TMC";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 9mOhm, 11.1A, 58V, TO220-7
 *
 * KiCad symbol: `Power_Management:BTS50085-1TMA`. Reference prefix: `U`.
 * Footprint filters: TO*263*TabPin4*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS50085-1TMA-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa435bccd114b
 * Keywords: BTS50085 PROFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin4.
 */
export class BTS50085_1TMA extends Component.withPins({
  "OUT_1": "1",
  "OUT_2": "2",
  "IN": "3",
  "Vbb": "4",
  "IS": "5",
  "OUT_6": "6",
  "OUT_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", OUT_2: "passive", IN: "input", Vbb: "power_in", IS: "output", OUT_6: "passive", OUT_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS50085-1TMA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 24mOhm, 6.5A, 20V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS5012SDA`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS5012SDA-DS-v01_01-en.pdf?fileId=db3a30431d8a6b3c011db95c6eba237d
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS5012SDA extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS5012SDA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 28mOhm, 6A, 20V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS5014SDA`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS5014SDA-DS-v01_01-EN.pdf?fileId=5546d4625a888733015aa42c708e1142
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS5014SDA extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS5014SDA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 32mOhm, 5.5A, 20V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS5016SDA`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS5016SDA-DS-v01_01-EN.pdf?fileId=5546d4625a888733015aa41a6c38112d
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS5016SDA extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS5016SDA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 30mOhm, 5A, 28V, DSO-8
 *
 * KiCad symbol: `Power_Management:BTS5030-1EJA`. Reference prefix: `U`.
 * Footprint filters: Infineon*PG*DSO*43*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS5030-1EJA-DS-v02_20-EN.pdf?fileId=5546d46259d9a4bf015a84f3e686758a
 * Keywords: infineon power switch.
 * Default footprint: Package_SO:Infineon_PG-DSO-8-43.
 */
export class BTS5030_1EJA extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DEN": "3",
  "IS": "4",
  "NC": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "OUT_8": "8",
  "VS": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DEN: "input", IS: "output", NC: "no_connect", OUT_6: "power_out", OUT_7: "passive", OUT_8: "passive", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS5030-1EJA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 45mOhm, 4A, 28V, DSO-8
 *
 * KiCad symbol: `Power_Management:BTS5045-1EJA`. Reference prefix: `U`.
 * Footprint filters: Infineon*PG*DSO*43*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS5045-1EJA-DS-v02_02-EN.pdf?fileId=5546d4625a888733015aa411125b1069
 * Keywords: infineon power switch.
 * Default footprint: Package_SO:Infineon_PG-DSO-8-43.
 */
export class BTS5045_1EJA extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DEN": "3",
  "IS": "4",
  "NC": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "OUT_8": "8",
  "VS": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DEN: "input", IS: "output", NC: "no_connect", OUT_6: "power_out", OUT_7: "passive", OUT_8: "passive", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS5045-1EJA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 90mOhm, 3A, 28V, DSO-8
 *
 * KiCad symbol: `Power_Management:BTS5090-1EJA`. Reference prefix: `U`.
 * Footprint filters: Infineon*PG*DSO*43*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS5090-1EJA-DS-v02_02-EN.pdf?fileId=5546d4625a888733015aa410fc371059
 * Keywords: infineon power switch.
 * Default footprint: Package_SO:Infineon_PG-DSO-8-43.
 */
export class BTS5090_1EJA extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DEN": "3",
  "IS": "4",
  "NC": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "OUT_8": "8",
  "VS": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DEN: "input", IS: "output", NC: "no_connect", OUT_6: "power_out", OUT_7: "passive", OUT_8: "passive", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS5090-1EJA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 200mOhm, 1.5A, 28V, DSO-8
 *
 * KiCad symbol: `Power_Management:BTS5200-1EJA`. Reference prefix: `U`.
 * Footprint filters: Infineon*PG*DSO*43*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS5200-1EJA-DS-v01_00-EN.pdf?fileId=5546d46250cc1fdf0151636cd945402e
 * Keywords: infineon power switch.
 * Default footprint: Package_SO:Infineon_PG-DSO-8-43.
 */
export class BTS5200_1EJA extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DEN": "3",
  "IS": "4",
  "NC": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "OUT_8": "8",
  "VS": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DEN: "input", IS: "output", NC: "no_connect", OUT_6: "power_out", OUT_7: "passive", OUT_8: "passive", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS5200-1EJA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 10mOhm, 8A, 38V, TO-252-5
 *
 * KiCad symbol: `Power_Management:BTS6133D`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS6133D-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa3e3286f102a
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS6133D extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS6133D";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 12mOhm, 7A, 24V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS6142D`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS6142D-DS-v01_01-EN.pdf?fileId=5546d4625a888733015aa3da1e0e1026
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS6142D extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS6142D";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 10mOhm, 8A, 38V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS6143D`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS6143D-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa3da10821022
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS6143D extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS6143D";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 20mOhm, 5.5A, 62V, TO252-5
 *
 * KiCad symbol: `Power_Management:BTS6163D`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.infineon.com/dgdl/Infineon-BTS6163D-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa3da01a1101e
 * Keywords: infineon power switch.
 * Default footprint: Package_TO_SOT_SMD:TO-252-4.
 */
export class BTS6163D extends Component.withPins({
  "OUT_1": "1",
  "IN": "2",
  "Vbb": "3",
  "IS": "4",
  "OUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", IN: "input", Vbb: "power_in", IS: "output", OUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS6163D";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, Single, 200mOhm, 1.5A, 36V, DSO-8
 *
 * KiCad symbol: `Power_Management:BTS6200-1EJA`. Reference prefix: `U`.
 * Footprint filters: Infineon*PG*DSO*43*.
 * @see http://www.infineon.com/dgdl/Infineon-BTT6200-1EJA-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa3756ec20fcc
 * Keywords: infineon power switch.
 * Default footprint: Package_SO:Infineon_PG-DSO-8-43.
 */
export class BTS6200_1EJA extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DEN": "3",
  "IS": "4",
  "NC": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "OUT_8": "8",
  "VS": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DEN: "input", IS: "output", NC: "no_connect", OUT_6: "power_out", OUT_7: "passive", OUT_8: "passive", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS6200-1EJA";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, One Channel, 12V, 15A, Rds(on) 4.4mΩ, PG-TSDSO-14-22
 *
 * KiCad symbol: `Power_Management:BTS7004-1EPP`. Reference prefix: `U`.
 * Footprint filters: Infineon*TSDSO*22*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS7004-1EPP-DS-v01_00-EN.pdf?fileId=5546d4626102d35a016147550a725555
 * Keywords: BTS7004.
 * Default footprint: Package_SO:Infineon_PG-TSDSO-14-22.
 */
export class BTS7004_1EPP extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DEN": "3",
  "IS": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "OUT_8": "8",
  "OUT_9": "9",
  "OUT_10": "10",
  "NC_11": "11",
  "OUT_12": "12",
  "OUT_13": "13",
  "OUT_14": "14",
  "VS": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DEN: "input", IS: "output", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", OUT_8: "power_out", OUT_9: "passive", OUT_10: "passive", NC_11: "no_connect", OUT_12: "passive", OUT_13: "passive", OUT_14: "passive", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS7004-1EPP";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, 4 Channel, RON 90mOhm, IL(NOM) 3.3A, Vbb 5.5...40V, standby current 9 µA (Tj = -40...25°C), SOIC-20
 *
 * KiCad symbol: `Power_Management:BTS724G`. Reference prefix: `U`.
 * Footprint filters: *SO*7.6*12.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS724G-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa3a2f1030ff1
 * Keywords: High_Side_Switch ESD CMOS.
 * Default footprint: Package_SO:Infineon_SOIC-20W_7.6x12.8mm_P1.27mm.
 */
export class BTS724G extends Component.withPins({
  "VBB_1": "1",
  "GND1/2": "2",
  "IN1": "3",
  "ST1/2": "4",
  "IN2": "5",
  "GND3/4": "6",
  "IN3": "7",
  "ST3/4": "8",
  "IN4": "9",
  "VBB_10": "10",
  "VBB_11": "11",
  "VBB_12": "12",
  "OUT4": "13",
  "OUT3": "14",
  "VBB_15": "15",
  "VBB_16": "16",
  "OUT2": "17",
  "OUT1": "18",
  "VBB_19": "19",
  "VBB_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS724G";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, 4 Channel, RON 200mOhm, IL(NOM) 1.9A, Vbb 5.0...34V, standby current 28 µA (Tj = 25°C), SOIC-20
 *
 * KiCad symbol: `Power_Management:BTS711L1`. Reference prefix: `U`.
 * Footprint filters: *SO*7.6*12.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS711L1-DS-v01_03-EN.pdf?fileId=5546d4625a888733015aa3bea285100c
 * Keywords: High_Side_Switch ESD CMOS.
 * Default footprint: Package_SO:Infineon_SOIC-20W_7.6x12.8mm_P1.27mm.
 */
export class BTS711L1 extends Component.withPins({
  "VBB_1": "1",
  "GND1/2": "2",
  "IN1": "3",
  "ST1/2": "4",
  "IN2": "5",
  "GND3/4": "6",
  "IN3": "7",
  "ST3/4": "8",
  "IN4": "9",
  "VBB_10": "10",
  "VBB_11": "11",
  "VBB_12": "12",
  "OUT4": "13",
  "OUT3": "14",
  "VBB_15": "15",
  "VBB_16": "16",
  "OUT2": "17",
  "OUT1": "18",
  "VBB_19": "19",
  "VBB_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS711L1";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, 4 Channel, RON 200mOhm, IL(NOM) 1.9A, Vbb 5.0...34V, standby current 180 µA (Tj = 25°C), SOIC-20
 *
 * KiCad symbol: `Power_Management:BTS712N1`. Reference prefix: `U`.
 * Footprint filters: *SO*7.6*12.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS712N1-DS-v01_03-EN.pdf?fileId=5546d4625a888733015aa3be77471000
 * Keywords: High_Side_Switch ESD CMOS.
 * Default footprint: Package_SO:Infineon_SOIC-20W_7.6x12.8mm_P1.27mm.
 */
export class BTS712N1 extends Component.withPins({
  "VBB_1": "1",
  "GND1/2": "2",
  "IN1": "3",
  "ST1/2": "4",
  "IN2": "5",
  "GND3/4": "6",
  "IN3": "7",
  "ST3/4": "8",
  "IN4": "9",
  "VBB_10": "10",
  "VBB_11": "11",
  "VBB_12": "12",
  "OUT4": "13",
  "OUT3": "14",
  "VBB_15": "15",
  "VBB_16": "16",
  "OUT2": "17",
  "OUT1": "18",
  "VBB_19": "19",
  "VBB_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS712N1";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, 4 Channel, RON 140mOhm, IL(NOM) 2.6A, Vbb 5.5...40V, standby current 9 µA (Tj = -40...25°C), undervoltage switch off 4.5V, SOIC-20
 *
 * KiCad symbol: `Power_Management:BTS716G`. Reference prefix: `U`.
 * Footprint filters: *SO*7.6*12.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS716G-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa3be86601004
 * Keywords: High_Side_Switch ESD CMOS.
 * Default footprint: Package_SO:Infineon_SOIC-20W_7.6x12.8mm_P1.27mm.
 */
export class BTS716G extends Component.withPins({
  "VBB_1": "1",
  "GND1/2": "2",
  "IN1": "3",
  "ST1/2": "4",
  "IN2": "5",
  "GND3/4": "6",
  "IN3": "7",
  "ST3/4": "8",
  "IN4": "9",
  "VBB_10": "10",
  "VBB_11": "11",
  "VBB_12": "12",
  "OUT4": "13",
  "OUT3": "14",
  "VBB_15": "15",
  "VBB_16": "16",
  "OUT2": "17",
  "OUT1": "18",
  "VBB_19": "19",
  "VBB_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS716G";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, 4 Channel, RON 140mOhm, IL(NOM) 2.6A, Vbb 5.5...40V, standby current 9 µA (Tj = -40...25°C), undervoltage switch off 3.2V, SOIC-20
 *
 * KiCad symbol: `Power_Management:BTS716GB`. Reference prefix: `U`.
 * Footprint filters: *SO*7.6*12.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS716GB-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aa3be94e21008
 * Keywords: High_Side_Switch ESD CMOS.
 * Default footprint: Package_SO:Infineon_SOIC-20W_7.6x12.8mm_P1.27mm.
 */
export class BTS716GB extends Component.withPins({
  "VBB_1": "1",
  "GND1/2": "2",
  "IN1": "3",
  "ST1/2": "4",
  "IN2": "5",
  "GND3/4": "6",
  "IN3": "7",
  "ST3/4": "8",
  "IN4": "9",
  "VBB_10": "10",
  "VBB_11": "11",
  "VBB_12": "12",
  "OUT4": "13",
  "OUT3": "14",
  "VBB_15": "15",
  "VBB_16": "16",
  "OUT2": "17",
  "OUT1": "18",
  "VBB_19": "19",
  "VBB_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS716GB";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch, PROFET, 4 Channel, RON 100mOhm, IL(NOM) 2.9A, Vbb 5.0...34V, standby current 28 µA (Tj = 25°C), SOIC-20
 *
 * KiCad symbol: `Power_Management:BTS721L1`. Reference prefix: `U`.
 * Footprint filters: *SO*7.6*12.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS721L1-DS-v01_03-EN.pdf?fileId=5546d4625a888733015aa3ac546f0ff9
 * Keywords: High_Side_Switch ESD CMOS.
 * Default footprint: Package_SO:Infineon_SOIC-20W_7.6x12.8mm_P1.27mm.
 */
export class BTS721L1 extends Component.withPins({
  "VBB_1": "1",
  "GND1/2": "2",
  "IN1": "3",
  "ST1/2": "4",
  "IN2": "5",
  "GND3/4": "6",
  "IN3": "7",
  "ST3/4": "8",
  "IN4": "9",
  "VBB_10": "10",
  "VBB_11": "11",
  "VBB_12": "12",
  "OUT4": "13",
  "OUT3": "14",
  "VBB_15": "15",
  "VBB_16": "16",
  "OUT2": "17",
  "OUT1": "18",
  "VBB_19": "19",
  "VBB_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:BTS721L1";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 825V, <=500nF, 1.5MOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP002DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP002DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP002DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 825V, <=750nF, 1.02MOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP003DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP003DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP003DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 825V, <=1uF, 780kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP004DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP004DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP004DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 825V, <=1.5uF, 480kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP005DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP005DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP005DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 825V, <=2uF, 360kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP006DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP006DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP006DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 825V, <=2.5uF, 300kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP007DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP007DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP007DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 825V, <=3.5uF, 200kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP008DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger 825V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP008DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP008DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 825V, <=5uF, 150kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP009DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP009DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP009DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 1000V, <=500nF, 1.5MOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP012DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP012DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP012DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 1000V, <=750nF, 1.02MOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP013DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP013DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP013DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 1000V, <=1uF, 780kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP014DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP014DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP014DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 1000V, <=1.5uF, 480kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP015DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP015DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP015DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 1000V, <=2uF, 360kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP016DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP016DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP016DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 1000V, <=2.5uF, 300kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP017DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP017DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP017DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 1000V, <=3.5uF, 200kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP018DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP018DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP018DG";
  override referencePrefix = "U";
}

/**
 * CapZero Automatic Capacitor Discarger, 1000V, <=5uF, 150kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP019DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP019DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP019DG";
  override referencePrefix = "U";
}

/**
 * CapZero Zero Loss Automatic Capacitor Discharge IC, 1000V, 100nF-6uF, 7.5M-142kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP200DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product-docs/capzero-2_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP200DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP200DG";
  override referencePrefix = "U";
}

/**
 * CapZero Zero Loss Automatic Capacitor Discharge IC, 1000V, 100nF-6uF, >=54kOhm, SOIC-8
 *
 * KiCad symbol: `Power_Management:CAP300DG`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ac-dc.power.com/sites/default/files/product_document/data_sheet/capzero-3_family_datasheet.pdf
 * Keywords: Automatic Capacitor Discarger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CAP300DG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:CAP300DG";
  override referencePrefix = "U";
}

/**
 * Nonvolatile Controller, PDIP-8
 *
 * KiCad symbol: `Power_Management:DS1210`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1210.pdf
 * Keywords: Nonvolatile, RAM, Controller, Battery, Power.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DS1210 extends Component.withPins({
  "VCCO": "1",
  "VBAT1": "2",
  "TOL": "3",
  "GND": "4",
  "~{CE}": "5",
  "~{CEO}": "6",
  "VBAT2": "7",
  "VCCI": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCO: "power_out", VBAT1: "power_in", TOL: "input", GND: "power_in", "~{CE}": "input", "~{CEO}": "output", VBAT2: "power_in", VCCI: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:DS1210";
  override referencePrefix = "U";
}

/**
 * GaN Half-Bridge Power-Stage with Integrated Gate-Drivers, 80 V, 35 A, EPC_QFN-13-3EP
 *
 * KiCad symbol: `Power_Management:EPC23102`. Reference prefix: `U`.
 * Footprint filters: EPC?QFN*3EP*3.5x5mm*P0.5mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC23102_datasheet.pdf
 * Keywords: smart fast switching.
 * Default footprint: Package_DFN_QFN:EPC_QFN-13-3EP_3.5x5mm_P0.5mm.
 */
export class EPC23102 extends Component.withPins({
  "HSIN": "1",
  "LSIN": "2",
  "SD": "3",
  "VDD": "4",
  "VDRV": "5",
  "RDRV": "6",
  "AGND": "7",
  "PGND": "8",
  "SW": "9",
  "VIN": "10",
  "VPHASE": "11",
  "RBOOT": "12",
  "VBOOT": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HSIN: "input", LSIN: "input", SD: "input", VDD: "passive", VDRV: "power_in", RDRV: "passive", AGND: "power_in", PGND: "power_in", SW: "power_out", VIN: "power_in", VPHASE: "input", RBOOT: "passive", VBOOT: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:EPC23102";
  override referencePrefix = "U";
}

/**
 * GaN Half-Bridge Power-Stage with Integrated Gate-Drivers, 80 V, 25 A, EPC_QFN-13-3EP
 *
 * KiCad symbol: `Power_Management:EPC23103`. Reference prefix: `U`.
 * Footprint filters: EPC?QFN*3EP*3.5x5mm*P0.5mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC23103_datasheet.pdf
 * Keywords: smart fast switching.
 * Default footprint: Package_DFN_QFN:EPC_QFN-13-3EP_3.5x5mm_P0.5mm.
 */
export class EPC23103 extends Component.withPins({
  "HSIN": "1",
  "LSIN": "2",
  "SD": "3",
  "VDD": "4",
  "VDRV": "5",
  "RDRV": "6",
  "AGND": "7",
  "PGND": "8",
  "SW": "9",
  "VIN": "10",
  "VPHASE": "11",
  "RBOOT": "12",
  "VBOOT": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HSIN: "input", LSIN: "input", SD: "input", VDD: "passive", VDRV: "power_in", RDRV: "passive", AGND: "power_in", PGND: "power_in", SW: "power_out", VIN: "power_in", VPHASE: "input", RBOOT: "passive", VBOOT: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:EPC23103";
  override referencePrefix = "U";
}

/**
 * GaN Half-Bridge Power-Stage with Integrated Gate-Drivers, 80 V, 15 A, EPC_QFN-13-3EP
 *
 * KiCad symbol: `Power_Management:EPC23104`. Reference prefix: `U`.
 * Footprint filters: EPC?QFN*3EP*3.5x5mm*P0.5mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC23104_datasheet.pdf
 * Keywords: smart fast switching.
 * Default footprint: Package_DFN_QFN:EPC_QFN-13-3EP_3.5x5mm_P0.5mm.
 */
export class EPC23104 extends Component.withPins({
  "HSIN": "1",
  "LSIN": "2",
  "SD": "3",
  "VDD": "4",
  "VDRV": "5",
  "RDRV": "6",
  "AGND": "7",
  "PGND": "8",
  "SW": "9",
  "VIN": "10",
  "VPHASE": "11",
  "RBOOT": "12",
  "VBOOT": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HSIN: "input", LSIN: "input", SD: "input", VDD: "passive", VDRV: "power_in", RDRV: "passive", AGND: "power_in", PGND: "power_in", SW: "power_out", VIN: "power_in", VPHASE: "input", RBOOT: "passive", VBOOT: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:EPC23104";
  override referencePrefix = "U";
}

/**
 * Single power-distribution switcher, current limit = 50mA, blanking time = 10 ms, auto-restart time = 80 ms, ON Pin Polarity = HIGH, SOT-353
 *
 * KiCad symbol: `Power_Management:FPF2000`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.onsemi.com/pub/Collateral/FPF2001-D.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class FPF2000 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FLAGB": "3",
  "ON": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FLAGB: "open_collector", ON: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:FPF2000";
  override referencePrefix = "U";
}

/**
 * Single power-distribution switcher, current limit = 50mA, blanking time = 10 ms, auto-restart time = 80 ms, ON Pin Polarity = LOW, SOT-353
 *
 * KiCad symbol: `Power_Management:FPF2001`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.onsemi.com/pub/Collateral/FPF2001-D.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class FPF2001 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FLAGB": "3",
  "ON": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FLAGB: "open_collector", ON: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:FPF2001";
  override referencePrefix = "U";
}

/**
 * Single power-distribution switcher, current limit = 50mA, blanking time = 10 ms, w/o auto-restart, ON Pin Polarity = HIGH, SOT-353
 *
 * KiCad symbol: `Power_Management:FPF2002`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.onsemi.com/pub/Collateral/FPF2001-D.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class FPF2002 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FLAGB": "3",
  "ON": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FLAGB: "open_collector", ON: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:FPF2002";
  override referencePrefix = "U";
}

/**
 * Single power-distribution switcher, current limit = 50mA, blanking time = 0 ms, w/o auto-restart, ON Pin Polarity = HIGH, SOT-353
 *
 * KiCad symbol: `Power_Management:FPF2003`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.onsemi.com/pub/Collateral/FPF2001-D.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class FPF2003 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FLAGB": "3",
  "ON": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FLAGB: "open_collector", ON: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:FPF2003";
  override referencePrefix = "U";
}

/**
 * Single power-distribution switcher, current limit = 100mA, blanking time = 10 ms, auto-restart time = 80 ms, ON Pin Polarity = HIGH, SOT-353
 *
 * KiCad symbol: `Power_Management:FPF2004`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.onsemi.com/pub/Collateral/FPF2001-D.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class FPF2004 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FLAGB": "3",
  "ON": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FLAGB: "open_collector", ON: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:FPF2004";
  override referencePrefix = "U";
}

/**
 * Single power-distribution switcher, current limit = 100mA, blanking time = 10 ms, auto-restart time = 80 ms, ON Pin Polarity = LOW, SOT-353
 *
 * KiCad symbol: `Power_Management:FPF2005`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.onsemi.com/pub/Collateral/FPF2001-D.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class FPF2005 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FLAGB": "3",
  "ON": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FLAGB: "open_collector", ON: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:FPF2005";
  override referencePrefix = "U";
}

/**
 * Single power-distribution switcher, current limit = 100mA, blanking time = 10 ms, w/o auto-restart, ON Pin Polarity = HIGH, SOT-353
 *
 * KiCad symbol: `Power_Management:FPF2006`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.onsemi.com/pub/Collateral/FPF2001-D.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class FPF2006 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FLAGB": "3",
  "ON": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FLAGB: "open_collector", ON: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:FPF2006";
  override referencePrefix = "U";
}

/**
 * Single power-distribution switcher, current limit = 100mA, blanking time = 0 ms, w/o auto-restart, ON Pin Polarity = HIGH, SOT-353
 *
 * KiCad symbol: `Power_Management:FPF2007`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.onsemi.com/pub/Collateral/FPF2001-D.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class FPF2007 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FLAGB": "3",
  "ON": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FLAGB: "open_collector", ON: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:FPF2007";
  override referencePrefix = "U";
}

/**
 * X capacitor bleeder, SOIC-8
 *
 * KiCad symbol: `Power_Management:HF81`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.monolithicpower.com/DesktopModules/DocumentManage/API/Document/getDocument?id=142
 * Keywords: X capacitor discharge.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class HF81 extends Component.withPins({
  "NC_1": "1",
  "L1_2": "2",
  "L1_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "L2_6": "6",
  "L2_7": "7",
  "NC_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", L1_2: "passive", L1_3: "passive", NC_4: "no_connect", NC_5: "no_connect", L2_6: "passive", L2_7: "passive", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Management:HF81";
  override referencePrefix = "U";
}

/**
 * Triple-Channel High-Side Shunt and Bus Voltage Monitor with I2C and SMBUS Compatible Interface, QFN-16
 *
 * KiCad symbol: `Power_Management:INA3221`. Reference prefix: `U`.
 * Footprint filters: Texas*RGV0016A*.
 * @see http://www.ti.com/lit/ds/symlink/ina3221.pdf
 * Keywords: Shunt and Bus voltage monitor.
 * Default footprint: Package_DFN_QFN:Texas_RGV0016A_VQFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 */
export class INA3221 extends Component.withPins({
  "IN-3": "1",
  "IN+3": "2",
  "GND": "3",
  "VS": "4",
  "A0": "5",
  "SCL": "6",
  "SDA": "7",
  "WARNING": "8",
  "CRITICAL": "9",
  "PV": "10",
  "IN-1": "11",
  "IN+1": "12",
  "TC": "13",
  "IN-2": "14",
  "IN+2": "15",
  "VPU": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IN-3": "input", "IN+3": "input", GND: "power_in", VS: "power_in", A0: "input", SCL: "input", SDA: "bidirectional", WARNING: "open_collector", CRITICAL: "open_collector", PV: "open_collector", "IN-1": "input", "IN+1": "input", TC: "open_collector", "IN-2": "input", "IN+2": "input", VPU: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:INA3221";
  override referencePrefix = "U";
}

/**
 * 39V, 60A, Intelligent Power Switch High Side, TO-220-5
 *
 * KiCad symbol: `Power_Management:IPS6011PBF`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6011pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_Vertical.
 */
export class IPS6011PBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6011PBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 60A, Intelligent Power Switch High Side, D-PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS6011RPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6011pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-5_TabPin3.
 */
export class IPS6011RPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6011RPBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 60A, Intelligent Power Switch High Side, D2-PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS6011SPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6011pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-5_TabPin3.
 */
export class IPS6011SPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6011SPBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 32A, Intelligent Power Switch High Side, TO-220-5
 *
 * KiCad symbol: `Power_Management:IPS6021PBF`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6021pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_Vertical.
 */
export class IPS6021PBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6021PBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 32A, Intelligent Power Switch High Side, D-PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS6021RPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6021pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-5_TabPin3.
 */
export class IPS6021RPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6021RPBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 32A, Intelligent Power Switch High Side, D2-PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS6021SPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6021pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-5_TabPin3.
 */
export class IPS6021SPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6021SPBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 16A, Intelligent Power Switch High Side, TO-220-5
 *
 * KiCad symbol: `Power_Management:IPS6031PBF`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6031pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_Vertical.
 */
export class IPS6031PBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6031PBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 16A, Intelligent Power Switch High Side, D-PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS6031RPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6031pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-5_TabPin3.
 */
export class IPS6031RPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6031RPBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 16A, Intelligent Power Switch High Side, D2-PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS6031SPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6031pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-5_TabPin3.
 */
export class IPS6031SPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6031SPBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 5A, Intelligent Power Switch High Side, SO-8
 *
 * KiCad symbol: `Power_Management:IPS6041GPBF`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6041pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IPS6041GPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DG": "3",
  "OUT": "4",
  "VCC": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DG: "bidirectional", OUT: "output", VCC: "power_in", P6: "power_in", P7: "power_in", P8: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6041GPBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 5A, Intelligent Power Switch High Side, TO-220
 *
 * KiCad symbol: `Power_Management:IPS6041PBF`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6041pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_Vertical.
 */
export class IPS6041PBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6041PBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 5A, Intelligent Power Switch High Side, DPAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS6041RPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6041pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-5_TabPin3.
 */
export class IPS6041RPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6041RPBF";
  override referencePrefix = "Q";
}

/**
 * 39V, 5A, Intelligent Power Switch High Side, D2PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS6041SPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see http://www.irf.com/product-info/datasheets/data/ips6041pbf.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-5_TabPin3.
 */
export class IPS6041SPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS6041SPBF";
  override referencePrefix = "Q";
}

/**
 * 70V, 5A, Intelligent Power Switch High Side, D2-PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS7091GPBF`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.irf.com/product-info/datasheets/data/ips7091.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IPS7091GPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "DG": "3",
  "OUT": "4",
  "VCC": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", DG: "bidirectional", OUT: "output", VCC: "power_in", P6: "power_in", P7: "power_in", P8: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS7091GPBF";
  override referencePrefix = "Q";
}

/**
 * 70V, 5A, Intelligent Power Switch High Side, TO-220-5
 *
 * KiCad symbol: `Power_Management:IPS7091PBF`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/ips7091.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_Vertical.
 */
export class IPS7091PBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS7091PBF";
  override referencePrefix = "Q";
}

/**
 * 70V, 5A, Intelligent Power Switch High Side, D2-PAK 5pin
 *
 * KiCad symbol: `Power_Management:IPS7091SPBF`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see http://www.irf.com/product-info/datasheets/data/ips7091.pdf
 * Keywords: Intelligent Power Switch High Side MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-5_TabPin3.
 */
export class IPS7091SPBF extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "VCC": "3",
  "DG": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", VCC: "power_in", DG: "bidirectional", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IPS7091SPBF";
  override referencePrefix = "Q";
}

/**
 * High-Voltage Start-Up IC, 480V, SOT-23-5
 *
 * KiCad symbol: `Power_Management:IRS25751L`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/irs25751lpbf.pdf?fileId=5546d462533600a40153567b31da2837
 * Keywords: start up.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class IRS25751L extends Component.withPins({
  "VOUT": "1",
  "COM": "2",
  "VTH": "3",
  "ENN": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", COM: "power_in", VTH: "input", ENN: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:IRS25751L";
  override referencePrefix = "U";
}

/**
 * Smart Dual Channel High Side Powertrain Switch (90mOhm)
 *
 * KiCad symbol: `Power_Management:ITS5215`. Reference prefix: `IC`.
 * Footprint filters: *PG?DSO*.
 * @see http://www.infineon.com/dgdl/Infineon-ITS5215L-DS-v01_01-en.pdf?fileId=db3a304412b407950112b428dba73e98
 * Keywords: High_Side_Switch Power.
 * Default footprint: Package_SO:Infineon_PG-DSO-12-9_ThermalVias.
 */
export class ITS5215 extends Component.withPins({
  "GND": "1",
  "IN1": "2",
  "ST1": "3",
  "IN2": "4",
  "ST2": "5",
  "VBB_6": "6",
  "NC_7": "7",
  "OUT2": "8",
  "NC_9": "9",
  "OUT1": "10",
  "NC_11": "11",
  "VBB_12": "12",
  "VBB_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN1: "input", ST1: "open_collector", IN2: "input", ST2: "open_collector", VBB_6: "power_in", NC_7: "no_connect", OUT2: "open_emitter", NC_9: "no_connect", OUT1: "open_emitter", NC_11: "no_connect", VBB_12: "passive", VBB_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:ITS5215";
  override referencePrefix = "IC";
}

/**
 * High side OR-ing FET controller, 5V to 75V operation, TSOT-23-6
 *
 * KiCad symbol: `Power_Management:LM5050-1`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm5050-1-q1.pdf
 * Keywords: positive high-side or-ing ideal-diode.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LM5050_1 extends Component.withPins({
  "VS": "1",
  "GND": "2",
  "OFF": "3",
  "IN": "4",
  "GATE": "5",
  "OUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VS: "passive", GND: "power_in", OFF: "input", IN: "input", GATE: "output", OUT: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5050-1";
  override referencePrefix = "U";
}

/**
 * High side OR-ing FET controller, 6V to 75V operation, TSOT-23-6
 *
 * KiCad symbol: `Power_Management:LM5050-2`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm5050-2.pdf
 * Keywords: positive high-side or-ing ideal-diode.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LM5050_2 extends Component.withPins({
  "~{FGD}": "1",
  "GND": "2",
  "OFF": "3",
  "IN": "4",
  "GATE": "5",
  "OUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{FGD}": "open_collector", GND: "power_in", OFF: "input", IN: "input", GATE: "output", OUT: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5050-2";
  override referencePrefix = "U";
}

/**
 * Low side OR-ing FET controller, -6V to -100V, SOIC-8
 *
 * KiCad symbol: `Power_Management:LM5051`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5051.pdf
 * Keywords: negative low-side or-ing ideal-diode.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM5051 extends Component.withPins({
  "Line": "1",
  "VCC": "2",
  "OFF": "3",
  "~{FGD}": "4",
  "VSS": "5",
  "INN": "6",
  "INP": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Line: "power_in", VCC: "passive", OFF: "input", "~{FGD}": "open_collector", VSS: "power_in", INN: "input", INP: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5051";
  override referencePrefix = "U";
}

/**
 * High side protection controller, +5.5V to +65V operation, VSSOP-10 package
 *
 * KiCad symbol: `Power_Management:LM5060`. Reference prefix: `U`.
 * Footprint filters: *SOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5060.pdf
 * Keywords: high-voltage mosfet-driver hot-swap.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class LM5060 extends Component.withPins({
  "GND": "6",
  "SENSE": "1",
  "VIN": "2",
  "OVP": "3",
  "UVLO": "4",
  "EN": "5",
  "TIMER": "7",
  "~{PGD}": "8",
  "OUT": "9",
  "GATE": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SENSE: "input", VIN: "power_in", OVP: "input", UVLO: "input", EN: "input", TIMER: "input", "~{PGD}": "open_collector", OUT: "input", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5060";
  override referencePrefix = "U";
}

/**
 * Negative Hot Swap / Inrush Current Controller with Power Limiting, SOIC-14W
 *
 * KiCad symbol: `Power_Management:LM50672NPAR`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm5067.pdf
 * Keywords: high-voltage mosfet-driver hot-swap Texas Instruments.
 * Default footprint: Package_SO:SOIC-14W_7.5x9mm_P1.27mm.
 */
export class LM50672NPAR extends Component.withPins({
  "VEE": "6",
  "VCC": "1",
  "UVLO": "3",
  "OVLO": "4",
  "PWR": "5",
  "TIMER": "8",
  "SENSE": "9",
  "GATE": "10",
  "OUT": "12",
  "PGD": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VEE: "power_in", VCC: "power_in", UVLO: "input", OVLO: "input", PWR: "input", TIMER: "input", SENSE: "input", GATE: "output", OUT: "input", PGD: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM50672NPAR";
  override referencePrefix = "U";
}

/**
 * Negative Hot Swap / Inrush Current Controller with Power Limiting, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Power_Management:LM5067MM-1`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm5067.pdf
 * Keywords: high-voltage mosfet-driver hot-swap Texas Instruments LM5067MM-1/NOPB.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class LM5067MM_1 extends Component.withPins({
  "VEE": "5",
  "VCC": "1",
  "UVLO": "2",
  "OVLO": "3",
  "PWR": "4",
  "TIMER": "6",
  "SENSE": "7",
  "GATE": "8",
  "OUT": "9",
  "PGD": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VEE: "power_in", VCC: "power_in", UVLO: "input", OVLO: "input", PWR: "input", TIMER: "input", SENSE: "input", GATE: "output", OUT: "input", PGD: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5067MM-1";
  override referencePrefix = "U";
}

/**
 * Negative Hot Swap / Inrush Current Controller with Power Limiting, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Power_Management:LM5067MM-2`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm5067.pdf
 * Keywords: high-voltage mosfet-driver hot-swap Texas Instruments LM5067MM-2/NOPB.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class LM5067MM_2 extends Component.withPins({
  "VEE": "5",
  "VCC": "1",
  "UVLO": "2",
  "OVLO": "3",
  "PWR": "4",
  "TIMER": "6",
  "SENSE": "7",
  "GATE": "8",
  "OUT": "9",
  "PGD": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VEE: "power_in", VCC: "power_in", UVLO: "input", OVLO: "input", PWR: "input", TIMER: "input", SENSE: "input", GATE: "output", OUT: "input", PGD: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5067MM-2";
  override referencePrefix = "U";
}

/**
 * Negative Hot Swap / Inrush Current Controller with Power Limiting, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Power_Management:LM5067MMX-2`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm5067.pdf
 * Keywords: high-voltage mosfet-driver hot-swap Texas Instruments LM5067MM-1/NOPB.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class LM5067MMX_2 extends Component.withPins({
  "VEE": "5",
  "VCC": "1",
  "UVLO": "2",
  "OVLO": "3",
  "PWR": "4",
  "TIMER": "6",
  "SENSE": "7",
  "GATE": "8",
  "OUT": "9",
  "PGD": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VEE: "power_in", VCC: "power_in", UVLO: "input", OVLO: "input", PWR: "input", TIMER: "input", SENSE: "input", GATE: "output", OUT: "input", PGD: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5067MMX-2";
  override referencePrefix = "U";
}

/**
 * Negative Hot Swap / Inrush Current Controller with Power Limiting, SOIC-14W
 *
 * KiCad symbol: `Power_Management:LM5067MWX-1`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm5067.pdf
 * Keywords: high-voltage mosfet-driver hot-swap Texas Instruments LM5067MWX-1/NOPB.
 * Default footprint: Package_SO:SOIC-14W_7.5x9mm_P1.27mm.
 */
export class LM5067MWX_1 extends Component.withPins({
  "VEE": "6",
  "VCC": "1",
  "UVLO": "3",
  "OVLO": "4",
  "PWR": "5",
  "TIMER": "8",
  "SENSE": "9",
  "GATE": "10",
  "OUT": "12",
  "PGD": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VEE: "power_in", VCC: "power_in", UVLO: "input", OVLO: "input", PWR: "input", TIMER: "input", SENSE: "input", GATE: "output", OUT: "input", PGD: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5067MWX-1";
  override referencePrefix = "U";
}

/**
 * Hot swap & Inrush current controller with power limiting, latch off on fault, 9V to 80Vin, UVLO & OVLO, VSSOP-10
 *
 * KiCad symbol: `Power_Management:LM5069MM-1`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5069.pdf
 * Keywords: high-voltage mosfet-driver efuse.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class LM5069MM_1 extends Component.withPins({
  "TIMER": "6",
  "SENSE": "1",
  "VIN": "2",
  "UVLO": "3",
  "OVLO": "4",
  "GND": "5",
  "PWR": "7",
  "PGD": "8",
  "OUT": "9",
  "GATE": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TIMER: "input", SENSE: "input", VIN: "power_in", UVLO: "input", OVLO: "input", GND: "power_in", PWR: "input", PGD: "open_collector", OUT: "input", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5069MM-1";
  override referencePrefix = "U";
}

/**
 * Hot swap & Inrush current controller with power limiting, auto retry on fault, 9V to 80Vin, UVLO & OVLO, VSSOP-10
 *
 * KiCad symbol: `Power_Management:LM5069MM-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5069.pdf
 * Keywords: high-voltage mosfet-driver efuse.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class LM5069MM_2 extends Component.withPins({
  "TIMER": "6",
  "SENSE": "1",
  "VIN": "2",
  "UVLO": "3",
  "OVLO": "4",
  "GND": "5",
  "PWR": "7",
  "PGD": "8",
  "OUT": "9",
  "GATE": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TIMER: "input", SENSE: "input", VIN: "power_in", UVLO: "input", OVLO: "input", GND: "power_in", PWR: "input", PGD: "open_collector", OUT: "input", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM5069MM-2";
  override referencePrefix = "U";
}

/**
 * Ideal Diode With Input Polarity Protection 1.5 - 5.5V  Input Voltage, 1.5A Output Current, Ron 141 mOhm, SC-70-6
 *
 * KiCad symbol: `Power_Management:LM66100DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.ti.com/lit/ds/symlink/lm66100.pdf
 * Keywords: Texas Instruments.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class LM66100DCK extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "~{CE}": "3",
  "NC": "4",
  "ST": "5",
  "VOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", "~{CE}": "input", NC: "no_connect", ST: "open_collector", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM66100DCK";
  override referencePrefix = "U";
}

/**
 * Low Iq reverse battery protection ideal diode controller, SOT-23-6
 *
 * KiCad symbol: `Power_Management:LM74700`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/gpn/LM74700-Q1
 * Keywords: ideal-diode or-ing.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class LM74700 extends Component.withPins({
  "VCAP": "1",
  "GND": "2",
  "EN": "3",
  "CATHODE": "4",
  "GATE": "5",
  "ANODE": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCAP: "passive", GND: "power_in", EN: "input", CATHODE: "input", GATE: "output", ANODE: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM74700";
  override referencePrefix = "U";
}

/**
 * TVS Less Automotive Reverse Battery Protection Ideal Diode Controller, SOT-23-8
 *
 * KiCad symbol: `Power_Management:LM74701-Q1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/gpn/LM74701-Q1
 * Keywords: ideal-diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class LM74701_Q1 extends Component.withPins({
  "GATE": "1",
  "ANODE": "2",
  "VCAP": "3",
  "SW": "4",
  "GND": "5",
  "EN": "6",
  "N.C.": "7",
  "CATHODE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GATE: "output", ANODE: "power_in", VCAP: "passive", SW: "output", GND: "power_in", EN: "input", "N.C.": "no_connect", CATHODE: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LM74701-Q1";
  override referencePrefix = "U";
}

/**
 * 600-V 12-A Integrated GaN Power Stage, RWH0032A
 *
 * KiCad symbol: `Power_Management:LMG3410`. Reference prefix: `Q`.
 * Footprint filters: Texas*RWH0032A*.
 * @see http://www.ti.com/lit/ds/snosd10c/snosd10c.pdf
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_DFN_QFN:Texas_RWH0032A_ThermalVias.
 */
export class LMG3410 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "LDO5V": "25",
  "VNEG": "26",
  "VDD": "27",
  "BBSW": "28",
  "~{LPM}": "29",
  "RDRV": "30",
  "IN": "31",
  "~{FAULT}": "32",
  "P33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", LDO5V: "power_out", VNEG: "power_in", VDD: "power_in", BBSW: "passive", "~{LPM}": "input", RDRV: "passive", IN: "input", "~{FAULT}": "output", P33: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LMG3410";
  override referencePrefix = "Q";
}

/**
 * 80-V, 10-A GaN Half-Bridge Power Stage, MOF0009A
 *
 * KiCad symbol: `Power_Management:LMG5200`. Reference prefix: `Q`.
 * Footprint filters: Texas*MOF0009A*.
 * @see http://www.ti.com/lit/ds/symlink/lmg5200.pdf
 * Keywords: Dual N-Channel GaN MOSFET.
 * Default footprint: Package_DFN_QFN:Texas_MOF0009A.
 */
export class LMG5200 extends Component.withPins({
  "P1": "1",
  "HB": "2",
  "HS": "3",
  "HI": "4",
  "LI": "5",
  "VCC": "6",
  "AGND": "7",
  "P8": "8",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", HB: "passive", HS: "passive", HI: "input", LI: "input", VCC: "power_in", AGND: "power_in", P8: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LMG5200";
  override referencePrefix = "Q";
}

/**
 * High voltage hot swap controller, +9V to +80V, with latching feature, SOIC-8
 *
 * KiCad symbol: `Power_Management:LT1641-1`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/164112fc.pdf
 * Keywords: high-voltage hot-swap.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1641_1 extends Component.withPins({
  "GND": "4",
  "ON": "1",
  "FB": "2",
  "PWRGD": "3",
  "TIMER": "5",
  "GATE": "6",
  "Sense": "7",
  "Vcc": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ON: "input", FB: "input", PWRGD: "open_collector", TIMER: "input", GATE: "output", Sense: "input", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LT1641-1";
  override referencePrefix = "U";
}

/**
 * High voltage hot swap controller, +9V to +80V operation, with auto-retry feature
 *
 * KiCad symbol: `Power_Management:LT1641-2`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/164112fc.pdf
 * Keywords: high-voltage hot-swap.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1641_2 extends Component.withPins({
  "GND": "4",
  "ON": "1",
  "FB": "2",
  "PWRGD": "3",
  "TIMER": "5",
  "GATE": "6",
  "Sense": "7",
  "Vcc": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ON: "input", FB: "input", PWRGD: "open_collector", TIMER: "input", GATE: "output", Sense: "input", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LT1641-2";
  override referencePrefix = "U";
}

/**
 * Ideal Diode Bridge Controller, DC to 60Hz, DFN-8
 *
 * KiCad symbol: `Power_Management:LT4230xDD`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4320fb.pdf
 * Keywords: diode bridge replacement.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.65x2.38mm.
 */
export class LT4230xDD extends Component.withPins({
  "IN2": "1",
  "TG2": "2",
  "BG2": "3",
  "BG1": "4",
  "OUTN_5": "5",
  "OUTP": "6",
  "TG1": "7",
  "IN1": "8",
  "OUTN_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN2: "power_in", TG2: "output", BG2: "output", BG1: "output", OUTN_5: "power_in", OUTP: "power_in", TG1: "output", IN1: "power_in", OUTN_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LT4230xDD";
  override referencePrefix = "U";
}

/**
 * Ideal Diode Bridge Controller, DC to 600Hz, DFN-8
 *
 * KiCad symbol: `Power_Management:LT4320xDD-1`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4320fb.pdf
 * Keywords: diode bridge replacement.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.65x2.38mm.
 */
export class LT4320xDD_1 extends Component.withPins({
  "IN2": "1",
  "TG2": "2",
  "BG2": "3",
  "BG1": "4",
  "OUTN_5": "5",
  "OUTP": "6",
  "TG1": "7",
  "IN1": "8",
  "OUTN_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN2: "power_in", TG2: "output", BG2: "output", BG1: "output", OUTN_5: "power_in", OUTP: "power_in", TG1: "output", IN1: "power_in", OUTN_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LT4320xDD-1";
  override referencePrefix = "U";
}

/**
 * PoE Ideal Diode Bridge Controller, QFN-16
 *
 * KiCad symbol: `Power_Management:LT4321xUF`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4321f.pdf
 * Keywords: LTPoE++ dual diode bridge replacement.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.15x2.15mm.
 */
export class LT4321xUF extends Component.withPins({
  "TG36": "1",
  "IN36": "2",
  "IN45": "3",
  "TG45": "4",
  "TG78": "5",
  "IN78": "6",
  "BG78": "7",
  "BG45": "8",
  "~{EN}": "10",
  "EN": "11",
  "OUTP": "12",
  "BG36": "13",
  "BG12": "14",
  "IN12": "15",
  "TG12": "16",
  "OUTN": "[9,17]",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TG36: "output", IN36: "power_in", IN45: "power_in", TG45: "output", TG78: "output", IN78: "power_in", BG78: "output", BG45: "output", "~{EN}": "output", EN: "output", OUTP: "power_in", BG36: "output", BG12: "output", IN12: "power_in", TG12: "output", OUTN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LT4321xUF";
  override referencePrefix = "U";
}

/**
 * Dual Slot Hot Swap Controller for PCI Express, WQFN-38
 *
 * KiCad symbol: `Power_Management:LTC4242xUHF`. Reference prefix: `U`.
 * Footprint filters: *WQFN*5x7mm*P0.5mm*EP3.15x5.15mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4242f.pdf
 * Keywords: Power-Controller PCIe.
 * Default footprint: Package_DFN_QFN:WQFN-38-1EP_5x7mm_P0.5mm_EP3.15x5.15mm.
 */
export class LTC4242xUHF extends Component.withPins({
  "AUXON1": "1",
  "3V_OUT1": "2",
  "3V_GATE1": "3",
  "3V_SENSE1": "4",
  "3V_IN1": "5",
  "AUXIN1": "6",
  "VCC": "7",
  "AUXIN2": "8",
  "3V_IN2": "9",
  "3V_SENSE2": "10",
  "3V_GATE2": "11",
  "3V_OUT2": "12",
  "AUXON2": "13",
  "ON2": "14",
  "FON2": "15",
  "~{EN2}": "16",
  "~{FAULT2}": "17",
  "~{AUXFAULT2}": "18",
  "~{PGOOD2}": "19",
  "~{AUXPGOOD2}": "20",
  "12V_IN2": "21",
  "12V_SENSE2": "22",
  "12V_GATE2": "23",
  "12V_OUT2": "24",
  "AUXOUT2": "25",
  "GND": "26",
  "AUXOUT1": "27",
  "12V_OUT1": "28",
  "12V_GATE1": "29",
  "12V_SENSE1": "30",
  "12V_IN1": "31",
  "~{AUXPGOOD1}": "32",
  "~{PGOOD1}": "33",
  "~{AUXFAULT1}": "34",
  "~{FAULT1}": "35",
  "~{EN1}": "36",
  "FON1": "37",
  "ON1": "38",
  "EPAD": "39",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AUXON1: "input", "3V_OUT1": "open_collector", "3V_GATE1": "output", "3V_SENSE1": "input", "3V_IN1": "power_in", AUXIN1: "input", VCC: "power_in", AUXIN2: "input", "3V_IN2": "power_in", "3V_SENSE2": "input", "3V_GATE2": "output", "3V_OUT2": "open_collector", AUXON2: "input", ON2: "input", FON2: "input", "~{EN2}": "input", "~{FAULT2}": "open_collector", "~{AUXFAULT2}": "open_collector", "~{PGOOD2}": "open_collector", "~{AUXPGOOD2}": "open_collector", "12V_IN2": "power_in", "12V_SENSE2": "input", "12V_GATE2": "output", "12V_OUT2": "open_collector", AUXOUT2: "output", GND: "power_in", AUXOUT1: "output", "12V_OUT1": "open_collector", "12V_GATE1": "output", "12V_SENSE1": "input", "12V_IN1": "power_in", "~{AUXPGOOD1}": "open_collector", "~{PGOOD1}": "open_collector", "~{AUXFAULT1}": "open_collector", "~{FAULT1}": "open_collector", "~{EN1}": "input", FON1: "input", ON1: "input", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4242xUHF";
  override referencePrefix = "U";
}

/**
 * Ideal diode controller, 9-80V operation, DFN-6
 *
 * KiCad symbol: `Power_Management:LTC4357DCB`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4357fd.pdf
 * Keywords: ideal-diode or-ing.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x2mm_P0.5mm_EP1.65x1.35mm.
 */
export class LTC4357DCB extends Component.withPins({
  "OUT": "1",
  "IN": "2",
  "GATE": "3",
  "GND": "4",
  "NC": "5",
  "Vdd": "6",
  "PAD": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", IN: "input", GATE: "output", GND: "power_in", NC: "no_connect", Vdd: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4357DCB";
  override referencePrefix = "U";
}

/**
 * Ideal diode controller, 9-80V operation, MSOP-8
 *
 * KiCad symbol: `Power_Management:LTC4357MS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4357fd.pdf
 * Keywords: ideal-diode or-ing.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC4357MS8 extends Component.withPins({
  "IN": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GATE": "4",
  "GND": "5",
  "NC_6": "6",
  "Vdd": "7",
  "OUT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", NC_2: "no_connect", NC_3: "no_connect", GATE: "output", GND: "power_in", NC_6: "no_connect", Vdd: "power_in", OUT: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4357MS8";
  override referencePrefix = "U";
}

/**
 * Ideal diode controller with reverse input protection, DFN-6
 *
 * KiCad symbol: `Power_Management:LTC4359-DCB`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltc4359.pdf
 * Keywords: ideal-diode or-ing reverse-protection.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x2mm_P0.5mm_EP1.65x1.35mm.
 */
export class LTC4359_DCB extends Component.withPins({
  "OUT": "1",
  "GATE": "2",
  "SRC": "3",
  "IN": "4",
  "~{SHDN}": "5",
  "Vss": "6",
  "Pad": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", GATE: "output", SRC: "input", IN: "power_in", "~{SHDN}": "input", Vss: "power_in", Pad: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4359-DCB";
  override referencePrefix = "U";
}

/**
 * Ideal diode controller with reverse input protection, MSOP-8
 *
 * KiCad symbol: `Power_Management:LTC4359-MS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltc4359.pdf
 * Keywords: ideal-diode or-ing reverse-protection.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC4359_MS8 extends Component.withPins({
  "GATE": "1",
  "SRC": "2",
  "NC_3": "3",
  "IN": "4",
  "~{SHDN}": "5",
  "Vss": "6",
  "NC_7": "7",
  "OUT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GATE: "output", SRC: "input", NC_3: "no_connect", IN: "power_in", "~{SHDN}": "input", Vss: "power_in", NC_7: "no_connect", OUT: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4359-MS8";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection, -40V to +80V, 0°C to +40°C, DFN-14
 *
 * KiCad symbol: `Power_Management:LTC4364CDE`. Reference prefix: `U`.
 * Footprint filters: DFN*3x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: ideal-diode or-ing reverse-protection undervoltage overvoltage surge-stopper.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4mm_P0.5mm_EP1.7x3.3mm.
 */
export class LTC4364CDE extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "DGATE": "3",
  "SOURCE": "4",
  "GATE": "5",
  "VCC": "6",
  "~{SHDN}": "7",
  "UV": "8",
  "OV": "9",
  "GND_10": "10",
  "~{FLT}": "11",
  "ENOUT": "12",
  "TMR": "13",
  "FB": "14",
  "GND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", DGATE: "output", SOURCE: "input", GATE: "output", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND_10: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", GND_15: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364CDE";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection, -40V to +80V, 0°C to +40°C, MSOP-16
 *
 * KiCad symbol: `Power_Management:LTC4364CMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: ideal-diode or-ing reverse-protection undervoltage overvoltage surge-stopper.
 * Default footprint: Package_SO:MSOP-16_3x4.039mm_P0.5mm.
 */
export class LTC4364CMS extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "NC_3": "3",
  "DGATE": "4",
  "SOURCE": "5",
  "HGATE": "6",
  "NC_7": "7",
  "VCC": "8",
  "~{SHDN}": "9",
  "UV": "10",
  "OV": "11",
  "GND": "12",
  "~{FLT}": "13",
  "ENOUT": "14",
  "TMR": "15",
  "FB": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", NC_3: "no_connect", DGATE: "output", SOURCE: "input", HGATE: "output", NC_7: "no_connect", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364CMS";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection -40V to +80V, 0°C to +40°C, SOIC-16
 *
 * KiCad symbol: `Power_Management:LTC4364CS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: ideal-diode or-ing reverse-protection undervoltage overvoltage surge-stopper.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class LTC4364CS extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "NC_3": "3",
  "DGATE": "4",
  "SOURCE": "5",
  "HGATE": "6",
  "NC_7": "7",
  "VCC": "8",
  "~{SHDN}": "9",
  "UV": "10",
  "OV": "11",
  "GND": "12",
  "~{FLT}": "13",
  "ENOUT": "14",
  "TMR": "15",
  "FB": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", NC_3: "no_connect", DGATE: "output", SOURCE: "input", HGATE: "output", NC_7: "no_connect", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364CS";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection -40V to +80V, -40°C to +125°C, DFN-14
 *
 * KiCad symbol: `Power_Management:LTC4364HDE`. Reference prefix: `U`.
 * Footprint filters: DFN*3x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: surge overvoltage undervoltage reverse-polarity protection diode ORing MOSFET driver.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4mm_P0.5mm_EP1.7x3.3mm.
 */
export class LTC4364HDE extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "DGATE": "3",
  "SOURCE": "4",
  "GATE": "5",
  "VCC": "6",
  "~{SHDN}": "7",
  "UV": "8",
  "OV": "9",
  "GND_10": "10",
  "~{FLT}": "11",
  "ENOUT": "12",
  "TMR": "13",
  "FB": "14",
  "GND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", DGATE: "output", SOURCE: "input", GATE: "output", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND_10: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", GND_15: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364HDE";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection -40V to +80V, -40°C to +125°C, MSOP-16
 *
 * KiCad symbol: `Power_Management:LTC4364HMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: surge overvoltage undervoltage reverse-polarity protection diode ORing MOSFET driver.
 * Default footprint: Package_SO:MSOP-16_3x4.039mm_P0.5mm.
 */
export class LTC4364HMS extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "NC_3": "3",
  "DGATE": "4",
  "SOURCE": "5",
  "HGATE": "6",
  "NC_7": "7",
  "VCC": "8",
  "~{SHDN}": "9",
  "UV": "10",
  "OV": "11",
  "GND": "12",
  "~{FLT}": "13",
  "ENOUT": "14",
  "TMR": "15",
  "FB": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", NC_3: "no_connect", DGATE: "output", SOURCE: "input", HGATE: "output", NC_7: "no_connect", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364HMS";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection -40V to +80V, -40°C to +125°C, SOIC-16
 *
 * KiCad symbol: `Power_Management:LTC4364HS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: surge overvoltage undervoltage reverse-polarity protection diode ORing MOSFET driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class LTC4364HS extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "NC_3": "3",
  "DGATE": "4",
  "SOURCE": "5",
  "HGATE": "6",
  "NC_7": "7",
  "VCC": "8",
  "~{SHDN}": "9",
  "UV": "10",
  "OV": "11",
  "GND": "12",
  "~{FLT}": "13",
  "ENOUT": "14",
  "TMR": "15",
  "FB": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", NC_3: "no_connect", DGATE: "output", SOURCE: "input", HGATE: "output", NC_7: "no_connect", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364HS";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection -40V to +80V, -40°C to +85°C, DFN-14
 *
 * KiCad symbol: `Power_Management:LTC4364IDE`. Reference prefix: `U`.
 * Footprint filters: DFN*3x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: surge overvoltage undervoltage reverse-polarity protection diode ORing MOSFET driver.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4mm_P0.5mm_EP1.7x3.3mm.
 */
export class LTC4364IDE extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "DGATE": "3",
  "SOURCE": "4",
  "GATE": "5",
  "VCC": "6",
  "~{SHDN}": "7",
  "UV": "8",
  "OV": "9",
  "GND_10": "10",
  "~{FLT}": "11",
  "ENOUT": "12",
  "TMR": "13",
  "FB": "14",
  "GND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", DGATE: "output", SOURCE: "input", GATE: "output", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND_10: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", GND_15: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364IDE";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection -40V to +80V, -40°C to +85°C, MSOP-16
 *
 * KiCad symbol: `Power_Management:LTC4364IMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: surge overvoltage undervoltage reverse-polarity protection diode ORing MOSFET driver.
 * Default footprint: Package_SO:MSOP-16_3x4.039mm_P0.5mm.
 */
export class LTC4364IMS extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "NC_3": "3",
  "DGATE": "4",
  "SOURCE": "5",
  "HGATE": "6",
  "NC_7": "7",
  "VCC": "8",
  "~{SHDN}": "9",
  "UV": "10",
  "OV": "11",
  "GND": "12",
  "~{FLT}": "13",
  "ENOUT": "14",
  "TMR": "15",
  "FB": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", NC_3: "no_connect", DGATE: "output", SOURCE: "input", HGATE: "output", NC_7: "no_connect", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364IMS";
  override referencePrefix = "U";
}

/**
 * Surge stopper with ideal diode, UV and OV protection -40V to +80V, -40°C to +85°C, SOIC-16
 *
 * KiCad symbol: `Power_Management:LTC4364IS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/436412f.pdf
 * Keywords: surge overvoltage undervoltage reverse-polarity protection diode ORing MOSFET driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class LTC4364IS extends Component.withPins({
  "OUT": "1",
  "SENSE": "2",
  "NC_3": "3",
  "DGATE": "4",
  "SOURCE": "5",
  "HGATE": "6",
  "NC_7": "7",
  "VCC": "8",
  "~{SHDN}": "9",
  "UV": "10",
  "OV": "11",
  "GND": "12",
  "~{FLT}": "13",
  "ENOUT": "14",
  "TMR": "15",
  "FB": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "input", SENSE: "input", NC_3: "no_connect", DGATE: "output", SOURCE: "input", HGATE: "output", NC_7: "no_connect", VCC: "power_in", "~{SHDN}": "input", UV: "input", OV: "input", GND: "power_in", "~{FLT}": "open_collector", ENOUT: "open_collector", TMR: "input", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4364IS";
  override referencePrefix = "U";
}

/**
 * UV, OV and Reverse Supply Protection Controller, 50/60Hz noise rejection, DFN-8
 *
 * KiCad symbol: `Power_Management:LTC4365DDB`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4365fa.pdf
 * Keywords: overvoltage undervoltage reverse-polarity protection.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x3mm_P0.5mm_EP0.61x2.2mm.
 */
export class LTC4365DDB extends Component.withPins({
  "GND_1": "1",
  "OV": "2",
  "UV": "3",
  "Vin": "4",
  "GATE": "5",
  "Vout": "6",
  "~{FAULT}": "7",
  "~{SHDN}": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", OV: "input", UV: "input", Vin: "power_in", GATE: "output", Vout: "input", "~{FAULT}": "open_collector", "~{SHDN}": "input", GND_9: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4365DDB";
  override referencePrefix = "U";
}

/**
 * UV, OV and Reverse Supply Protection Controller, 1ms fault recovery, DFN-8
 *
 * KiCad symbol: `Power_Management:LTC4365DDB-1`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4365fa.pdf
 * Keywords: overvoltage undervoltage reverse-polarity protection.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x3mm_P0.5mm_EP0.61x2.2mm.
 */
export class LTC4365DDB_1 extends Component.withPins({
  "GND_1": "1",
  "OV": "2",
  "UV": "3",
  "Vin": "4",
  "GATE": "5",
  "Vout": "6",
  "~{FAULT}": "7",
  "~{SHDN}": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", OV: "input", UV: "input", Vin: "power_in", GATE: "output", Vout: "input", "~{FAULT}": "open_collector", "~{SHDN}": "input", GND_9: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4365DDB-1";
  override referencePrefix = "U";
}

/**
 * UV, OV and Reverse Supply Protection Controller, 50/60Hz noise rejection, TSOT23-8
 *
 * KiCad symbol: `Power_Management:LTC4365TS8`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4365fa.pdf
 * Keywords: overvoltage undervoltage reverse-polarity protection.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-8.
 */
export class LTC4365TS8 extends Component.withPins({
  "Vin": "1",
  "UV": "2",
  "OV": "3",
  "GND": "4",
  "~{SHDN}": "5",
  "~{FAULT}": "6",
  "Vout": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", UV: "input", OV: "input", GND: "power_in", "~{SHDN}": "input", "~{FAULT}": "open_collector", Vout: "input", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4365TS8";
  override referencePrefix = "U";
}

/**
 * UV, OV and Reverse Supply Protection Controller, 1ms fault recovery, TSOT23-8
 *
 * KiCad symbol: `Power_Management:LTC4365TS8-1`. Reference prefix: `U`.
 * Footprint filters: *SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4365fa.pdf
 * Keywords: overvoltage undervoltage reverse-polarity protection.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-8.
 */
export class LTC4365TS8_1 extends Component.withPins({
  "Vin": "1",
  "UV": "2",
  "OV": "3",
  "GND": "4",
  "~{SHDN}": "5",
  "~{FAULT}": "6",
  "Vout": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vin: "power_in", UV: "input", OV: "input", GND: "power_in", "~{SHDN}": "input", "~{FAULT}": "open_collector", Vout: "input", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4365TS8-1";
  override referencePrefix = "U";
}

/**
 * UV, OV and Reverse Supply Protection Controller, 50Hz/60Hz noise rejection, TSOT-23-8
 *
 * KiCad symbol: `Power_Management:LTC4365xTS8`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4365fa.pdf
 * Keywords: overvoltage undervoltage reverse-polarity protection.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-8.
 */
export class LTC4365xTS8 extends Component.withPins({
  "VIN": "1",
  "UV": "2",
  "OV": "3",
  "GND": "4",
  "~{SHDN}": "5",
  "~{FAULT}": "6",
  "VOUT": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", UV: "input", OV: "input", GND: "power_in", "~{SHDN}": "input", "~{FAULT}": "open_collector", VOUT: "input", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4365xTS8";
  override referencePrefix = "U";
}

/**
 * OR Controller Current Sharing Controller N-Channel 2:1, DFN-16
 *
 * KiCad symbol: `Power_Management:LTC4370xDE`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x4mm*P0.45mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4370f.pdf
 * Keywords: ideal-diode or-ing current sharing load balancing.
 * Default footprint: Package_DFN_QFN:DFN-16-1EP_3x4mm_P0.45mm_EP1.7x3.3mm.
 */
export class LTC4370xDE extends Component.withPins({
  "~{EN2}": "1",
  "RANGE": "2",
  "COMP": "3",
  "VIN2": "4",
  "GATE2": "5",
  "CPO2": "6",
  "OUT2": "7",
  "FETON2": "8",
  "FETON1": "9",
  "OUT1": "10",
  "CPO1": "11",
  "GATE1": "12",
  "VIN1": "13",
  "VCC": "14",
  "GND": "15",
  "~{EN1}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{EN2}": "input", RANGE: "passive", COMP: "passive", VIN2: "power_in", GATE2: "output", CPO2: "passive", OUT2: "input", FETON2: "open_collector", FETON1: "open_collector", OUT1: "input", CPO1: "passive", GATE1: "output", VIN1: "power_in", VCC: "power_in", GND: "power_in", "~{EN1}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4370xDE";
  override referencePrefix = "U";
}

/**
 * OR Controller Current Sharing Controller N-Channel 2:1, MSOP-16
 *
 * KiCad symbol: `Power_Management:LTC4370xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4370f.pdf
 * Keywords: ideal-diode or-ing current sharing load balancing.
 * Default footprint: Package_SO:MSOP-16_3x4.039mm_P0.5mm.
 */
export class LTC4370xMS extends Component.withPins({
  "~{EN2}": "1",
  "RANGE": "2",
  "COMP": "3",
  "VIN2": "4",
  "GATE2": "5",
  "CPO2": "6",
  "OUT2": "7",
  "FETON2": "8",
  "FETON1": "9",
  "OUT1": "10",
  "CPO1": "11",
  "GATE1": "12",
  "VIN1": "13",
  "VCC": "14",
  "GND": "15",
  "~{EN1}": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{EN2}": "input", RANGE: "passive", COMP: "passive", VIN2: "power_in", GATE2: "output", CPO2: "passive", OUT2: "input", FETON2: "open_collector", FETON1: "open_collector", OUT1: "input", CPO1: "passive", GATE1: "output", VIN1: "power_in", VCC: "power_in", GND: "power_in", "~{EN1}": "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4370xMS";
  override referencePrefix = "U";
}

/**
 * Low Loss PowerPath Controller, TSOT-23-6
 *
 * KiCad symbol: `Power_Management:LTC4412xS6`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4412fb.pdf
 * Keywords: ideal-diode or-ing.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LTC4412xS6 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "CTL": "3",
  "STAT": "4",
  "GATE": "5",
  "SENSE": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", CTL: "input", STAT: "open_collector", GATE: "output", SENSE: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4412xS6";
  override referencePrefix = "U";
}

/**
 * Prioritized PowerPath Controller, Selects Highest Priority Supply from Three Inputs, SSOP
 *
 * KiCad symbol: `Power_Management:LTC4417CGN`. Reference prefix: `U`.
 * Footprint filters: SSOP-24*3.9x8.7mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4417f.pdf
 * Keywords: switch power FET sequence.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 */
export class LTC4417CGN extends Component.withPins({
  "EN": "1",
  "~{SHDN}": "2",
  "HYS": "3",
  "UV1": "4",
  "OV1": "5",
  "UV2": "6",
  "OV2": "7",
  "UV3": "8",
  "OV3": "9",
  "~{VALID1}": "10",
  "~{VALID2}": "11",
  "~{VALID3}": "12",
  "GND": "13",
  "CAS": "14",
  "VOUT": "15",
  "G3": "16",
  "VS3": "17",
  "G2": "18",
  "VS2": "19",
  "G1": "20",
  "VS1": "21",
  "V3": "22",
  "V2": "23",
  "V1": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", "~{SHDN}": "input", HYS: "input", UV1: "input", OV1: "input", UV2: "input", OV2: "input", UV3: "input", OV3: "input", "~{VALID1}": "open_collector", "~{VALID2}": "open_collector", "~{VALID3}": "open_collector", GND: "power_in", CAS: "output", VOUT: "output", G3: "output", VS3: "output", G2: "output", VS2: "output", G1: "output", VS1: "output", V3: "input", V2: "input", V1: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4417CGN";
  override referencePrefix = "U";
}

/**
 * Prioritized PowerPath Controller, Selects Highest Priority Supply from Three Inputs, QFN
 *
 * KiCad symbol: `Power_Management:LTC4417CUF`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4417f.pdf
 * Keywords: switch power FET sequence.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class LTC4417CUF extends Component.withPins({
  "UV1": "1",
  "OV1": "2",
  "UV2": "3",
  "OV2": "4",
  "UV3": "5",
  "OV3": "6",
  "~{VALID1}": "7",
  "~{VALID2}": "8",
  "~{VALID3}": "9",
  "GND": "10",
  "CAS": "11",
  "VOUT": "12",
  "G3": "13",
  "VS3": "14",
  "G2": "15",
  "VS2": "16",
  "G1": "17",
  "VS1": "18",
  "V3": "19",
  "V2": "20",
  "V1": "21",
  "EN": "22",
  "~{SHDN}": "23",
  "HYS": "24",
  "PAD": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { UV1: "input", OV1: "input", UV2: "input", OV2: "input", UV3: "input", OV3: "input", "~{VALID1}": "open_collector", "~{VALID2}": "open_collector", "~{VALID3}": "open_collector", GND: "power_in", CAS: "output", VOUT: "output", G3: "output", VS3: "output", G2: "output", VS2: "output", G1: "output", VS1: "output", V3: "input", V2: "input", V1: "input", EN: "input", "~{SHDN}": "input", HYS: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4417CUF";
  override referencePrefix = "U";
}

/**
 * Prioritized PowerPath Controller, Selects Highest Priority Supply from Three Inputs, –40°C to 125°C, SSOP
 *
 * KiCad symbol: `Power_Management:LTC4417HGN`. Reference prefix: `U`.
 * Footprint filters: SSOP-24*3.9x8.7mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4417f.pdf
 * Keywords: switch power FET sequence.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 */
export class LTC4417HGN extends Component.withPins({
  "EN": "1",
  "~{SHDN}": "2",
  "HYS": "3",
  "UV1": "4",
  "OV1": "5",
  "UV2": "6",
  "OV2": "7",
  "UV3": "8",
  "OV3": "9",
  "~{VALID1}": "10",
  "~{VALID2}": "11",
  "~{VALID3}": "12",
  "GND": "13",
  "CAS": "14",
  "VOUT": "15",
  "G3": "16",
  "VS3": "17",
  "G2": "18",
  "VS2": "19",
  "G1": "20",
  "VS1": "21",
  "V3": "22",
  "V2": "23",
  "V1": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", "~{SHDN}": "input", HYS: "input", UV1: "input", OV1: "input", UV2: "input", OV2: "input", UV3: "input", OV3: "input", "~{VALID1}": "open_collector", "~{VALID2}": "open_collector", "~{VALID3}": "open_collector", GND: "power_in", CAS: "output", VOUT: "output", G3: "output", VS3: "output", G2: "output", VS2: "output", G1: "output", VS1: "output", V3: "input", V2: "input", V1: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4417HGN";
  override referencePrefix = "U";
}

/**
 * Prioritized PowerPath Controller, Selects Highest Priority Supply from Three Inputs, –40°C to 125°C, QFN
 *
 * KiCad symbol: `Power_Management:LTC4417HUF`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4417f.pdf
 * Keywords: switch power FET sequence.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class LTC4417HUF extends Component.withPins({
  "UV1": "1",
  "OV1": "2",
  "UV2": "3",
  "OV2": "4",
  "UV3": "5",
  "OV3": "6",
  "~{VALID1}": "7",
  "~{VALID2}": "8",
  "~{VALID3}": "9",
  "GND": "10",
  "CAS": "11",
  "VOUT": "12",
  "G3": "13",
  "VS3": "14",
  "G2": "15",
  "VS2": "16",
  "G1": "17",
  "VS1": "18",
  "V3": "19",
  "V2": "20",
  "V1": "21",
  "EN": "22",
  "~{SHDN}": "23",
  "HYS": "24",
  "PAD": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { UV1: "input", OV1: "input", UV2: "input", OV2: "input", UV3: "input", OV3: "input", "~{VALID1}": "open_collector", "~{VALID2}": "open_collector", "~{VALID3}": "open_collector", GND: "power_in", CAS: "output", VOUT: "output", G3: "output", VS3: "output", G2: "output", VS2: "output", G1: "output", VS1: "output", V3: "input", V2: "input", V1: "input", EN: "input", "~{SHDN}": "input", HYS: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4417HUF";
  override referencePrefix = "U";
}

/**
 * Prioritized PowerPath Controller, Selects Highest Priority Supply from Three Inputs, –40°C to 85°C, SSOP
 *
 * KiCad symbol: `Power_Management:LTC4417IGN`. Reference prefix: `U`.
 * Footprint filters: SSOP-24*3.9x8.7mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4417f.pdf
 * Keywords: switch power FET sequence.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 */
export class LTC4417IGN extends Component.withPins({
  "EN": "1",
  "~{SHDN}": "2",
  "HYS": "3",
  "UV1": "4",
  "OV1": "5",
  "UV2": "6",
  "OV2": "7",
  "UV3": "8",
  "OV3": "9",
  "~{VALID1}": "10",
  "~{VALID2}": "11",
  "~{VALID3}": "12",
  "GND": "13",
  "CAS": "14",
  "VOUT": "15",
  "G3": "16",
  "VS3": "17",
  "G2": "18",
  "VS2": "19",
  "G1": "20",
  "VS1": "21",
  "V3": "22",
  "V2": "23",
  "V1": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", "~{SHDN}": "input", HYS: "input", UV1: "input", OV1: "input", UV2: "input", OV2: "input", UV3: "input", OV3: "input", "~{VALID1}": "open_collector", "~{VALID2}": "open_collector", "~{VALID3}": "open_collector", GND: "power_in", CAS: "output", VOUT: "output", G3: "output", VS3: "output", G2: "output", VS2: "output", G1: "output", VS1: "output", V3: "input", V2: "input", V1: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4417IGN";
  override referencePrefix = "U";
}

/**
 * Prioritized PowerPath Controller, Selects Highest Priority Supply from Three Inputs, –40°C to 85°C, QFN
 *
 * KiCad symbol: `Power_Management:LTC4417IUF`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4417f.pdf
 * Keywords: switch power FET sequence.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class LTC4417IUF extends Component.withPins({
  "UV1": "1",
  "OV1": "2",
  "UV2": "3",
  "OV2": "4",
  "UV3": "5",
  "OV3": "6",
  "~{VALID1}": "7",
  "~{VALID2}": "8",
  "~{VALID3}": "9",
  "GND": "10",
  "CAS": "11",
  "VOUT": "12",
  "G3": "13",
  "VS3": "14",
  "G2": "15",
  "VS2": "16",
  "G1": "17",
  "VS1": "18",
  "V3": "19",
  "V2": "20",
  "V1": "21",
  "EN": "22",
  "~{SHDN}": "23",
  "HYS": "24",
  "PAD": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { UV1: "input", OV1: "input", UV2: "input", OV2: "input", UV3: "input", OV3: "input", "~{VALID1}": "open_collector", "~{VALID2}": "open_collector", "~{VALID3}": "open_collector", GND: "power_in", CAS: "output", VOUT: "output", G3: "output", VS3: "output", G2: "output", VS2: "output", G1: "output", VS1: "output", V3: "input", V2: "input", V1: "input", EN: "input", "~{SHDN}": "input", HYS: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:LTC4417IUF";
  override referencePrefix = "U";
}

/**
 * Industrial-Protected Quad-Channel Low-Side Switch, TSSOP-20
 *
 * KiCad symbol: `Power_Management:MAX14919xUP`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max14919-max14919a.pdf
 * Keywords: low side switch.
 * Default footprint: Package_SO:TSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP2.15x3.35mm.
 */
export class MAX14919xUP extends Component.withPins({
  "INRUSH": "1",
  "OUT1": "2",
  "GND_3": "3",
  "GND_4": "4",
  "OUT2": "5",
  "OUT3": "6",
  "GND_7": "7",
  "GND_8": "8",
  "OUT4": "9",
  "VL": "10",
  "RCLIM": "11",
  "REV": "12",
  "~{FAULT}": "13",
  "IN4": "14",
  "IN3": "15",
  "GND_16": "16",
  "IN2": "17",
  "IN1": "18",
  "V5": "19",
  "VDD": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INRUSH: "input", OUT1: "open_collector", GND_3: "power_in", GND_4: "passive", OUT2: "open_collector", OUT3: "open_collector", GND_7: "passive", GND_8: "passive", OUT4: "open_collector", VL: "power_in", RCLIM: "passive", REV: "open_collector", "~{FAULT}": "open_collector", IN4: "input", IN3: "input", GND_16: "passive", IN2: "input", IN1: "input", V5: "power_out", VDD: "power_in", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MAX14919xUP";
  override referencePrefix = "U";
}

/**
 * Single 1.2A USB Current Limiting Switch
 *
 * KiCad symbol: `Power_Management:MAX8586`. Reference prefix: `U`.
 * Footprint filters: DFN?8?1EP*3x3mm*P0.65mm*EP1.55x2.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX8586.pdf
 * Keywords: 1-channel USB current limiting power switch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MAX8586 extends Component.withPins({
  "SEL": "1",
  "ISET": "2",
  "ON": "3",
  "IN": "4",
  "OUT": "5",
  "~{FAULT}": "6",
  "GND_7": "7",
  "ENRESET": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SEL: "input", ISET: "input", ON: "input", IN: "power_in", OUT: "power_out", "~{FAULT}": "open_collector", GND_7: "power_in", ENRESET: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MAX8586";
  override referencePrefix = "U";
}

/**
 * High-Side, Current-Sense Amplifiers with 12-Bit ADC and Op Amp/Comparator, 0V to 60V Input Common-Mode Voltage Range, 2.7V to 5.5V Power-Supply Range, Compatible with 1.8V and 3.3V Logic, Noninverting Output, MSOP-10
 *
 * KiCad symbol: `Power_Management:MAX9611`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max9611-max9612.pdf
 * Keywords: high common-mode voltage range inrush-current-limiter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MAX9611 extends Component.withPins({
  "OUT": "1",
  "RS+": "2",
  "RS-": "3",
  "SET": "4",
  "GND": "5",
  "SCL": "6",
  "SDA": "7",
  "A1": "8",
  "A0": "9",
  "V_{CC}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "output", "RS+": "input", "RS-": "input", SET: "input", GND: "power_in", SCL: "input", SDA: "bidirectional", A1: "input", A0: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MAX9611";
  override referencePrefix = "U";
}

/**
 * High-Side, Current-Sense Amplifiers with 12-Bit ADC and Op Amp/Comparator, 0V to 60V Input Common-Mode Voltage Range, 2.7V to 5.5V Power-Supply Range, Compatible with 1.8V and 3.3V Logic, Inverting Output, MSOP-10
 *
 * KiCad symbol: `Power_Management:MAX9612`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max9611-max9612.pdf
 * Keywords: high common-mode voltage range inrush-current-limiter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MAX9612 extends Component.withPins({
  "OUT": "1",
  "RS+": "2",
  "RS-": "3",
  "SET": "4",
  "GND": "5",
  "SCL": "6",
  "SDA": "7",
  "A1": "8",
  "A0": "9",
  "V_{CC}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "output", "RS+": "input", "RS-": "input", SET: "input", GND: "power_in", SCL: "input", SDA: "bidirectional", A1: "input", A0: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MAX9612";
  override referencePrefix = "U";
}

/**
 * 5.5V, 2.1A, Adjustable Current Limiting Power Distribution Switch, SOT-23-6
 *
 * KiCad symbol: `Power_Management:MIC2007YM6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC20XX-Fixed-and-Adjustable-Current-Limiting-Power-Distribution-Switches-DS20006486B.pdf
 * Keywords: current limiting power switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MIC2007YM6 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN": "3",
  "ILIM": "4",
  "CSLEW": "5",
  "VOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", EN: "input", ILIM: "passive", CSLEW: "passive", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2007YM6";
  override referencePrefix = "U";
}

/**
 * 5.5V, 2.1A, Adjustable Current Limiting Power Distribution Switch, SOT-23-6
 *
 * KiCad symbol: `Power_Management:MIC2008YM6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC20XX-Fixed-and-Adjustable-Current-Limiting-Power-Distribution-Switches-DS20006486B.pdf
 * Keywords: current limiting power switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MIC2008YM6 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN": "3",
  "ILIM": "4",
  "CSLEW": "5",
  "VOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", EN: "input", ILIM: "passive", CSLEW: "passive", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2008YM6";
  override referencePrefix = "U";
}

/**
 * 5.5V, 2.1A, Adjustable Current Limiting Power Distribution Switch, SOT-23-6
 *
 * KiCad symbol: `Power_Management:MIC2017YM6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC20XX-Fixed-and-Adjustable-Current-Limiting-Power-Distribution-Switches-DS20006486B.pdf
 * Keywords: current limiting power switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MIC2017YM6 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN": "3",
  "ILIM": "4",
  "CSLEW": "5",
  "VOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", EN: "input", ILIM: "passive", CSLEW: "passive", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2017YM6";
  override referencePrefix = "U";
}

/**
 * 5.5V, 2.1A, Adjustable Current Limiting Power Distribution Switch, SOT-23-6
 *
 * KiCad symbol: `Power_Management:MIC2018YM6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC20XX-Fixed-and-Adjustable-Current-Limiting-Power-Distribution-Switches-DS20006486B.pdf
 * Keywords: current limiting power switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MIC2018YM6 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN": "3",
  "ILIM": "4",
  "CSLEW": "5",
  "VOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", EN: "input", ILIM: "passive", CSLEW: "passive", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2018YM6";
  override referencePrefix = "U";
}

/**
 * Single-channel, high side, power distribution switch, 2.7V-5.5V, Active High Output, SOIC-8
 *
 * KiCad symbol: `Power_Management:MIC2025-1YM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MIC2025-2075-Single-Channel-Power-Distribution-Switch-DS20006030A.pdf
 * Keywords: mosfet distribution.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MIC2025_1YM extends Component.withPins({
  "EN": "1",
  "FLG": "2",
  "GND": "3",
  "NC_4": "4",
  "NC_5": "5",
  "OUT_6": "6",
  "IN": "7",
  "OUT_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", FLG: "open_collector", GND: "power_in", NC_4: "no_connect", NC_5: "no_connect", OUT_6: "passive", IN: "power_in", OUT_8: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2025-1YM";
  override referencePrefix = "U";
}

/**
 * Single-channel, high side, power distribution switch, 2.7V-5.5V, Active High Output, MSOP-8
 *
 * KiCad symbol: `Power_Management:MIC2025-1YMM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MIC2025-2075-Single-Channel-Power-Distribution-Switch-DS20006030A.pdf
 * Keywords: mosfet distribution.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MIC2025_1YMM extends Component.withPins({
  "EN": "1",
  "FLG": "2",
  "GND": "3",
  "NC_4": "4",
  "NC_5": "5",
  "OUT_6": "6",
  "IN": "7",
  "OUT_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", FLG: "open_collector", GND: "power_in", NC_4: "no_connect", NC_5: "no_connect", OUT_6: "passive", IN: "power_in", OUT_8: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2025-1YMM";
  override referencePrefix = "U";
}

/**
 * Single-channel, high side, power distribution switch, 2.7V-5.5V, Active Low Output, SOIC-8
 *
 * KiCad symbol: `Power_Management:MIC2025-2YM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MIC2025-2075-Single-Channel-Power-Distribution-Switch-DS20006030A.pdf
 * Keywords: mosfet distribution.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MIC2025_2YM extends Component.withPins({
  "EN": "1",
  "FLG": "2",
  "GND": "3",
  "NC_4": "4",
  "NC_5": "5",
  "OUT_6": "6",
  "IN": "7",
  "OUT_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", FLG: "open_collector", GND: "power_in", NC_4: "no_connect", NC_5: "no_connect", OUT_6: "passive", IN: "power_in", OUT_8: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2025-2YM";
  override referencePrefix = "U";
}

/**
 * Single-channel, high side, power distribution switch, 2.7V-5.5V, Active Low Output, MSOP-8
 *
 * KiCad symbol: `Power_Management:MIC2025-2YMM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MIC2025-2075-Single-Channel-Power-Distribution-Switch-DS20006030A.pdf
 * Keywords: mosfet distribution.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MIC2025_2YMM extends Component.withPins({
  "EN": "1",
  "FLG": "2",
  "GND": "3",
  "NC_4": "4",
  "NC_5": "5",
  "OUT_6": "6",
  "IN": "7",
  "OUT_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", FLG: "open_collector", GND: "power_in", NC_4: "no_connect", NC_5: "no_connect", OUT_6: "passive", IN: "power_in", OUT_8: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2025-2YMM";
  override referencePrefix = "U";
}

/**
 * Dual-channel, high side, power distribution switch, 2.7V-5.5V, Active High Output, DIP-8
 *
 * KiCad symbol: `Power_Management:MIC2026-1BN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic2026.pdf
 * Keywords: mosfet distribution.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MIC2026_1BN extends Component.withPins({
  "ENA": "1",
  "FLGA": "2",
  "FLGB": "3",
  "ENB": "4",
  "OUTB": "5",
  "GND": "6",
  "IN": "7",
  "OUTA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENA: "input", FLGA: "output", FLGB: "output", ENB: "input", OUTB: "power_out", GND: "power_in", IN: "power_in", OUTA: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2026-1BN";
  override referencePrefix = "U";
}

/**
 * Dual-channel, high side, power distribution switch, 2.7V-5.5V, Active High Output, SOIC-8
 *
 * KiCad symbol: `Power_Management:MIC2026-1xM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC2026-MIC2076-Dual-Channel-Power-Distribution-Switch-DS20006443A.pdf
 * Keywords: mosfet distribution.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MIC2026_1xM extends Component.withPins({
  "ENA": "1",
  "FLGA": "2",
  "FLGB": "3",
  "ENB": "4",
  "OUTB": "5",
  "GND": "6",
  "IN": "7",
  "OUTA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENA: "input", FLGA: "output", FLGB: "output", ENB: "input", OUTB: "power_out", GND: "power_in", IN: "power_in", OUTA: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2026-1xM";
  override referencePrefix = "U";
}

/**
 * Dual-channel, high side, power distribution switch, 2.7V-5.5V, Active Low Output, DIP-8
 *
 * KiCad symbol: `Power_Management:MIC2026-2BN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic2026.pdf
 * Keywords: mosfet distribution.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MIC2026_2BN extends Component.withPins({
  "ENA": "1",
  "FLGA": "2",
  "FLGB": "3",
  "ENB": "4",
  "OUTB": "5",
  "GND": "6",
  "IN": "7",
  "OUTA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENA: "input", FLGA: "output", FLGB: "output", ENB: "input", OUTB: "power_out", GND: "power_in", IN: "power_in", OUTA: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2026-2BN";
  override referencePrefix = "U";
}

/**
 * Dual-channel, high side, power distribution switch, 2.7V-5.5V, Active Low Output, SOIC-8
 *
 * KiCad symbol: `Power_Management:MIC2026-2xM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC2026-MIC2076-Dual-Channel-Power-Distribution-Switch-DS20006443A.pdf
 * Keywords: mosfet distribution.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MIC2026_2xM extends Component.withPins({
  "ENA": "1",
  "FLGA": "2",
  "FLGB": "3",
  "ENB": "4",
  "OUTB": "5",
  "GND": "6",
  "IN": "7",
  "OUTA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENA: "input", FLGA: "output", FLGB: "output", ENB: "input", OUTB: "power_out", GND: "power_in", IN: "power_in", OUTA: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2026-2xM";
  override referencePrefix = "U";
}

/**
 * Single-channel, high side, power distribution switch, 790mOhm Ron, auto-retry, 1.8V-5.5V, 50 mA, SOT-23-5
 *
 * KiCad symbol: `Power_Management:MIC2090-1YM5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC2090-1-Current-Limiting-Power-Distribution-Switches-DS20006611A.pdf
 * Keywords: mosfet distribution current limit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MIC2090_1YM5 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN": "3",
  "FAULT": "4",
  "VOUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", EN: "input", FAULT: "open_collector", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2090-1YM5";
  override referencePrefix = "U";
}

/**
 * Single-channel, high side, power distribution switch, 790mOhm Ron, latch-off on current limit, 1.8V-5.5V, 50 mA, SOT-23-5
 *
 * KiCad symbol: `Power_Management:MIC2090-2YM5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC2090-1-Current-Limiting-Power-Distribution-Switches-DS20006611A.pdf
 * Keywords: mosfet distribution current limit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MIC2090_2YM5 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN": "3",
  "FAULT": "4",
  "VOUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", EN: "input", FAULT: "open_collector", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2090-2YM5";
  override referencePrefix = "U";
}

/**
 * Single-channel, high side, power distribution switch, 790mOhm Ron, auto-retry feature, 1.8V-5.5V, 100 mA, SOT-23-5
 *
 * KiCad symbol: `Power_Management:MIC2091-1YM5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC2090-1-Current-Limiting-Power-Distribution-Switches-DS20006611A.pdf
 * Keywords: mosfet distribution current limit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MIC2091_1YM5 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN": "3",
  "FAULT": "4",
  "VOUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", EN: "input", FAULT: "open_collector", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2091-1YM5";
  override referencePrefix = "U";
}

/**
 * Single-channel, high side, power distribution switch, 790mOhm Ron, latch-off on current limit, 1.8V-5.5V, 100 mA, SOT-23-5
 *
 * KiCad symbol: `Power_Management:MIC2091-2YM5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC2090-1-Current-Limiting-Power-Distribution-Switches-DS20006611A.pdf
 * Keywords: mosfet distribution current limit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MIC2091_2YM5 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN": "3",
  "FAULT": "4",
  "VOUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", EN: "input", FAULT: "open_collector", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2091-2YM5";
  override referencePrefix = "U";
}

/**
 * Programmable Current Sense High Side Switch, 2.7-5.5V, 1.5A, SOIC-8
 *
 * KiCad symbol: `Power_Management:MIC2544-2YM`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005725B.pdf
 * Keywords: high side switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MIC2544_2YM extends Component.withPins({
  "~{EN}": "1",
  "FLG": "2",
  "GND": "3",
  "ILIM": "4",
  "NC": "5",
  "OUT_6": "6",
  "IN": "7",
  "OUT_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{EN}": "input", FLG: "open_collector", GND: "power_in", ILIM: "input", NC: "no_connect", OUT_6: "output", IN: "passive", OUT_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2544-2YM";
  override referencePrefix = "U";
}

/**
 * Positive high voltage hot swap controller +10V to +80V with latched operation
 *
 * KiCad symbol: `Power_Management:MIC2587-1`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic2587-87r.pdf
 * Keywords: power switch FET driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MIC2587_1 extends Component.withPins({
  "GND": "4",
  "ON": "1",
  "FB": "2",
  "PWRGD": "3",
  "TIMER": "5",
  "GATE": "6",
  "Sense": "7",
  "Vcc": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ON: "input", FB: "input", PWRGD: "open_collector", TIMER: "input", GATE: "output", Sense: "input", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2587-1";
  override referencePrefix = "U";
}

/**
 * Positive high voltage hot swap controller +10V to +80V with auto-retry operation
 *
 * KiCad symbol: `Power_Management:MIC2587R-1`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic2587-87r.pdf
 * Keywords: power switch FET driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MIC2587R_1 extends Component.withPins({
  "GND": "4",
  "ON": "1",
  "FB": "2",
  "PWRGD": "3",
  "TIMER": "5",
  "GATE": "6",
  "Sense": "7",
  "Vcc": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ON: "input", FB: "input", PWRGD: "open_collector", TIMER: "input", GATE: "output", Sense: "input", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC2587R-1";
  override referencePrefix = "U";
}

/**
 * High Side Load Switches for Consumer Applications, 1.7..5.5V, 1.2A, 130mΩ, Fast Turn On, SC-70-6
 *
 * KiCad symbol: `Power_Management:MIC94090YC6`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC94090-1-2-3-4-5-High-Side-Load-Switches-for-Consumer-Applications-DS20006706.pdf
 * Keywords: load-switch Microchip D1D.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MIC94090YC6 extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "NC": "3",
  "IN": "4",
  "GND_5": "5",
  "EN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "passive", GND_2: "power_in", NC: "no_connect", IN: "passive", GND_5: "passive", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC94090YC6";
  override referencePrefix = "U";
}

/**
 * High Side Load Switches for Consumer Applications, 1.7..5.5V, 1.2A, 130mΩ, Fast Turn On, Load Discharge, SC-70-6
 *
 * KiCad symbol: `Power_Management:MIC94091YC6`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC94090-1-2-3-4-5-High-Side-Load-Switches-for-Consumer-Applications-DS20006706.pdf
 * Keywords: load-switch Microchip D2D.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MIC94091YC6 extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "NC": "3",
  "IN": "4",
  "GND_5": "5",
  "EN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "passive", GND_2: "power_in", NC: "no_connect", IN: "passive", GND_5: "passive", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC94091YC6";
  override referencePrefix = "U";
}

/**
 * High Side Load Switches for Consumer Applications, 1.7..5.5V, 1.2A, 130mΩ, 790 µs Soft-Start, SC-70-6
 *
 * KiCad symbol: `Power_Management:MIC94092YC6`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC94090-1-2-3-4-5-High-Side-Load-Switches-for-Consumer-Applications-DS20006706.pdf
 * Keywords: load-switch Microchip D5D.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MIC94092YC6 extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "NC": "3",
  "IN": "4",
  "GND_5": "5",
  "EN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "passive", GND_2: "power_in", NC: "no_connect", IN: "passive", GND_5: "passive", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC94092YC6";
  override referencePrefix = "U";
}

/**
 * High Side Load Switches for Consumer Applications, 1.7..5.5V, 1.2A, 130mΩ, 790 µs Soft-Start, Load Discharge, SC-70-6
 *
 * KiCad symbol: `Power_Management:MIC94093YC6`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC94090-1-2-3-4-5-High-Side-Load-Switches-for-Consumer-Applications-DS20006706.pdf
 * Keywords: load-switch Microchip D7D.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MIC94093YC6 extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "NC": "3",
  "IN": "4",
  "GND_5": "5",
  "EN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "passive", GND_2: "power_in", NC: "no_connect", IN: "passive", GND_5: "passive", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC94093YC6";
  override referencePrefix = "U";
}

/**
 * High Side Load Switches for Consumer Applications, 1.7..5.5V, 1.2A, 130mΩ, 120 µs Soft-Start, SC-70-6
 *
 * KiCad symbol: `Power_Management:MIC94094YC6`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC94090-1-2-3-4-5-High-Side-Load-Switches-for-Consumer-Applications-DS20006706.pdf
 * Keywords: load-switch Microchip 0DD.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MIC94094YC6 extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "NC": "3",
  "IN": "4",
  "GND_5": "5",
  "EN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "passive", GND_2: "power_in", NC: "no_connect", IN: "passive", GND_5: "passive", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC94094YC6";
  override referencePrefix = "U";
}

/**
 * High Side Load Switches for Consumer Applications, 1.7..5.5V, 1.2A, 130mΩ, 120 µs Soft-Start, Load Discharge, SC-70-6
 *
 * KiCad symbol: `Power_Management:MIC94095YC6`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MIC94090-1-2-3-4-5-High-Side-Load-Switches-for-Consumer-Applications-DS20006706.pdf
 * Keywords: load-switch Microchip 1DD.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MIC94095YC6 extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "NC": "3",
  "IN": "4",
  "GND_5": "5",
  "EN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "passive", GND_2: "power_in", NC: "no_connect", IN: "passive", GND_5: "passive", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MIC94095YC6";
  override referencePrefix = "U";
}

/**
 * 5.5V / 7A Low RDSON Load Switch with Programmable Current Limit, VQFN-12
 *
 * KiCad symbol: `Power_Management:MP5087A`. Reference prefix: `U`.
 * Footprint filters: *QFN*2x2mm*P0.4mm*.
 * @see https://www.monolithicpower.com/en/documentview/productdocument/index/version/2/document_type/Datasheet/lang/en/sku/MP5087A/
 * Keywords: MPS.
 * Default footprint: Package_DFN_QFN:MPS_QFN-12_2x2mm_P0.4mm.
 */
export class MP5087A extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "VCC": "3",
  "ILIM": "4",
  "SS": "5",
  "VIN_6": "6",
  "VOUT_7": "7",
  "VOUT_8": "8",
  "VOUT_9": "9",
  "VOUT_10": "10",
  "VIN_11": "11",
  "PG": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", VCC: "power_in", ILIM: "passive", SS: "passive", VIN_6: "power_in", VOUT_7: "power_out", VOUT_8: "passive", VOUT_9: "passive", VOUT_10: "passive", VIN_11: "passive", PG: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:MP5087A";
  override referencePrefix = "U";
}

/**
 * ON Semi, +12V Electronic Fuse, 4.6A, WDFN-10
 *
 * KiCad symbol: `Power_Management:NIS5420MTxTXG`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.onsemi.com/pdf/datasheet/nis5420-d.pdf
 * Keywords: 12V efuse resettable fuse.
 * Default footprint: Package_DFN_QFN:WDFN-10-1EP_3x3mm_P0.5mm_EP1.8x2.5mm.
 */
export class NIS5420MTxTXG extends Component.withPins({
  "GND": "1",
  "dV/dt": "2",
  "Enable/Fault": "3",
  "I_{Limit}": "4",
  "I_{SENSE}": "5",
  "Source_6": "6",
  "Source_7": "7",
  "Source_8": "8",
  "Source_9": "9",
  "Source_10": "10",
  "V_{CC}": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "dV/dt": "passive", "Enable/Fault": "tri_state", "I_{Limit}": "passive", "I_{SENSE}": "passive", Source_6: "power_out", Source_7: "passive", Source_8: "passive", Source_9: "passive", Source_10: "passive", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:NIS5420MTxTXG";
  override referencePrefix = "U";
}

/**
 * Controlled load switch with low Ron, DFN-12
 *
 * KiCad symbol: `Power_Management:NPC45560-H`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP?3x3mm?P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP45560-D.PDF
 * Keywords: load switch.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x3mm_P0.5mm_EP2.05x2.86mm.
 */
export class NPC45560_H extends Component.withPins({
  "VIN_1": "1",
  "EN": "2",
  "VCC": "3",
  "GND": "4",
  "SR": "5",
  "PG": "6",
  "BLEED": "7",
  "VOUT_8": "8",
  "VOUT_9": "9",
  "VOUT_10": "10",
  "VOUT_11": "11",
  "VOUT_12": "12",
  "VIN_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_1: "power_in", EN: "input", VCC: "power_in", GND: "power_in", SR: "input", PG: "open_collector", BLEED: "input", VOUT_8: "passive", VOUT_9: "passive", VOUT_10: "passive", VOUT_11: "passive", VOUT_12: "power_out", VIN_13: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:NPC45560-H";
  override referencePrefix = "U";
}

/**
 * Controlled load switch with low Ron, DFN-12
 *
 * KiCad symbol: `Power_Management:NPC45560-L`. Reference prefix: `U`.
 * Footprint filters: *DFN*12*.
 * @see http://www.onsemi.com/pub/Collateral/NCP45560-D.PDF
 * Keywords: load switch.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x3mm_P0.5mm_EP2.05x2.86mm.
 */
export class NPC45560_L extends Component.withPins({
  "VIN_1": "1",
  "EN": "2",
  "VCC": "3",
  "GND": "4",
  "SR": "5",
  "PG": "6",
  "BLEED": "7",
  "VOUT_8": "8",
  "VOUT_9": "9",
  "VOUT_10": "10",
  "VOUT_11": "11",
  "VOUT_12": "12",
  "VIN_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_1: "power_in", EN: "input", VCC: "power_in", GND: "power_in", SR: "input", PG: "open_collector", BLEED: "input", VOUT_8: "passive", VOUT_9: "passive", VOUT_10: "passive", VOUT_11: "passive", VOUT_12: "power_out", VIN_13: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:NPC45560-L";
  override referencePrefix = "U";
}

/**
 * Ideal Dual Diode Bridge, QFN-40
 *
 * KiCad symbol: `Power_Management:PD70224`. Reference prefix: `U`.
 * Footprint filters: Microsemi*QFN*6x8mm*P0.5mm*.
 * @see https://www.microsemi.com/document-portal/doc_download/131677-pd70224-data-sheet
 * Keywords: dual ideal diode bridge.
 * Default footprint: Package_DFN_QFN:Microsemi_QFN-40-32-2EP_6x8mm_P0.5mm.
 */
export class PD70224 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "IN2B_4": "4",
  "IN2B_5": "5",
  "IN2B_6": "6",
  "IN2B_7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "IN2A_11": "11",
  "IN2A_12": "12",
  "SUPP_SA": "13",
  "SUPP_SB": "14",
  "IN1A_15": "15",
  "IN1A_16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "IN1B_20": "20",
  "IN1B_21": "21",
  "IN1B_22": "22",
  "IN1B_23": "23",
  "P24": "24",
  "P25": "25",
  "P26": "26",
  "IN1A_27": "27",
  "IN1A_28": "28",
  "WA_EN": "29",
  "NC": "30",
  "IN2A_31": "31",
  "IN2A_32": "32",
  "P33": "33",
  "P34": "34",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "power_in", P2: "passive", P3: "passive", IN2B_4: "passive", IN2B_5: "passive", IN2B_6: "passive", IN2B_7: "passive", P8: "power_in", P9: "passive", P10: "passive", IN2A_11: "passive", IN2A_12: "passive", SUPP_SA: "input", SUPP_SB: "input", IN1A_15: "passive", IN1A_16: "passive", P17: "passive", P18: "passive", P19: "passive", IN1B_20: "passive", IN1B_21: "passive", IN1B_22: "passive", IN1B_23: "passive", P24: "passive", P25: "passive", P26: "passive", IN1A_27: "passive", IN1A_28: "passive", WA_EN: "input", NC: "no_connect", IN2A_31: "passive", IN2A_32: "passive", P33: "passive", P34: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:PD70224";
  override referencePrefix = "U";
}

/**
 * 100 milliohm power distribution switch, SOT-25
 *
 * KiCad symbol: `Power_Management:RT9701`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.richtek.com/Products/Power%20Switch/RT9701?sc_lang=en
 * Keywords: power distribution switch.
 */
export class RT9701 extends Component.withPins({
  "VOUT_1": "1",
  "GND": "2",
  "VIN": "3",
  "VIN/EN": "4",
  "VOUT_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT_1: "power_out", GND: "power_in", VIN: "power_in", "VIN/EN": "input", VOUT_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:RT9701";
  override referencePrefix = "U";
}

/**
 * 3A, Discharge, Active High EN, TSOT-23-5
 *
 * KiCad symbol: `Power_Management:RT9742AGJ5F`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.richtek.com/assets/product_file/RT9742/DS9742-10.pdf
 * Keywords: Power Switch.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class RT9742AGJ5F extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "EN": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", EN: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:RT9742AGJ5F";
  override referencePrefix = "U";
}

/**
 * 3A, Active High EN, TSOT-23-5
 *
 * KiCad symbol: `Power_Management:RT9742ANGJ5F`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.richtek.com/assets/product_file/RT9742/DS9742-10.pdf
 * Keywords: Power Switch.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class RT9742ANGJ5F extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "EN": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", EN: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:RT9742ANGJ5F";
  override referencePrefix = "U";
}

/**
 * 3A, Discharge, Active Low EN, TSOT-23-5
 *
 * KiCad symbol: `Power_Management:RT9742BGJ5F`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.richtek.com/assets/product_file/RT9742/DS9742-10.pdf
 * Keywords: Power Switch.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class RT9742BGJ5F extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "~{EN}": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", "~{EN}": "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:RT9742BGJ5F";
  override referencePrefix = "U";
}

/**
 * 3A, Active Low EN, TSOT-23-5
 *
 * KiCad symbol: `Power_Management:RT9742BNGJ5F`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.richtek.com/assets/product_file/RT9742/DS9742-10.pdf
 * Keywords: Power Switch.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class RT9742BNGJ5F extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "~{FLG}": "3",
  "~{EN}": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", "~{FLG}": "open_collector", "~{EN}": "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:RT9742BNGJ5F";
  override referencePrefix = "U";
}

/**
 * High-side power switch, 0.5 A, SOT-23
 *
 * KiCad symbol: `Power_Management:RT9742SNGV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.richtek.com/assets/product_file/RT9742/DS9742-10.pdf
 * Keywords: power switch usb.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-3.
 */
export class RT9742SNGV extends Component.withPins({
  "VIN": "1",
  "VOUT": "2",
  "GND": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", VOUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:RT9742SNGV";
  override referencePrefix = "U";
}

/**
 * Low Noise, 1A, Transformer Drivers for Isolated Power Supplies, 160 kHz, SOT-23-6
 *
 * KiCad symbol: `Power_Management:SN6505ADBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/sn6505b.pdf
 * Keywords: Transformer Drivers.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class SN6505ADBV extends Component.withPins({
  "D1": "1",
  "VCC": "2",
  "D2": "3",
  "GND": "4",
  "EN": "5",
  "CLK": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D1: "open_collector", VCC: "power_in", D2: "open_collector", GND: "power_in", EN: "input", CLK: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:SN6505ADBV";
  override referencePrefix = "U";
}

/**
 * Low Noise, 1A, Transformer Drivers for Isolated Power Supplies, 420 kHz, SOT-23-6
 *
 * KiCad symbol: `Power_Management:SN6505BDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/sn6505b.pdf
 * Keywords: Transformer Drivers.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class SN6505BDBV extends Component.withPins({
  "D1": "1",
  "VCC": "2",
  "D2": "3",
  "GND": "4",
  "EN": "5",
  "CLK": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D1: "open_collector", VCC: "power_in", D2: "open_collector", GND: "power_in", EN: "input", CLK: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:SN6505BDBV";
  override referencePrefix = "U";
}

/**
 * Low Noise, 0.5A, spread spectrum 36V Push-Pull-Transformer Drivers for Isolated Power Supplies, HVSSOP-10
 *
 * KiCad symbol: `Power_Management:SN6507DGQ`. Reference prefix: `U`.
 * Footprint filters: HVSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn6507.pdf
 * Keywords: Transformer Drivers.
 * Default footprint: Package_SO:HVSSOP-10-1EP_3x3mm_P0.5mm_EP1.57x1.88mm.
 */
export class SN6507DGQ extends Component.withPins({
  "EN/UVLO": "4",
  "DC": "5",
  "SR": "6",
  "SS/ILIM": "8",
  "GND_9": "9",
  "GND_11": "11",
  "SW1": "1",
  "GND_2": "2",
  "VCC": "3",
  "CLK": "7",
  "SW2": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "EN/UVLO": "input", DC: "passive", SR: "passive", "SS/ILIM": "passive", GND_9: "passive", GND_11: "passive", SW1: "open_collector", GND_2: "power_in", VCC: "power_in", CLK: "input", SW2: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:SN6507DGQ";
  override referencePrefix = "U";
}

/**
 * Smart push-button on/off controller, power-on lockout, Low Power, 1.6-5.5V, TDFN12
 *
 * KiCad symbol: `Power_Management:STM6600`. Reference prefix: `U`.
 * Footprint filters: TDFN*2x3mm*P0.5mm*.
 * @see http://www.st.com/resource/en/datasheet/stm6600.pdf
 * Keywords: push-button-controller low-power.
 * Default footprint: Package_DFN_QFN:TDFN-12_2x3mm_P0.5mm.
 */
export class STM6600 extends Component.withPins({
  "Vcc": "1",
  "~{SR}": "2",
  "Vref": "3",
  "PS_HOLD": "4",
  "C_SRD": "5",
  "~{PB}": "6",
  "~{VCC}_LO": "7",
  "~{PB}_OUT": "8",
  "~{EN}/EN": "9",
  "~{RST}": "10",
  "~{INT}": "11",
  "GND": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vcc: "power_in", "~{SR}": "input", Vref: "output", PS_HOLD: "input", C_SRD: "input", "~{PB}": "input", "~{VCC}_LO": "open_collector", "~{PB}_OUT": "open_collector", "~{EN}/EN": "output", "~{RST}": "open_collector", "~{INT}": "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:STM6600";
  override referencePrefix = "U";
}

/**
 * Smart push-button on/off controller, power-on lockout, Low Power, 1.6-5.5V, TDFN12
 *
 * KiCad symbol: `Power_Management:STM6601`. Reference prefix: `U`.
 * Footprint filters: TDFN*2x3mm*P0.5mm*.
 * @see http://www.st.com/resource/en/datasheet/stm6600.pdf
 * Keywords: push-button-controller low-power.
 * Default footprint: Package_DFN_QFN:TDFN-12_2x3mm_P0.5mm.
 */
export class STM6601 extends Component.withPins({
  "Vcc": "1",
  "~{SR}": "2",
  "Vref": "3",
  "PS_HOLD": "4",
  "C_SRD": "5",
  "~{PB}": "6",
  "~{VCC}_LO": "7",
  "~{PB}_OUT": "8",
  "~{EN}/EN": "9",
  "~{RST}": "10",
  "~{INT}": "11",
  "GND": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vcc: "power_in", "~{SR}": "input", Vref: "output", PS_HOLD: "input", C_SRD: "input", "~{PB}": "input", "~{VCC}_LO": "open_collector", "~{PB}_OUT": "open_collector", "~{EN}/EN": "output", "~{RST}": "open_collector", "~{INT}": "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:STM6601";
  override referencePrefix = "U";
}

/**
 * 10 pA, Ultra Low Leakage and Quiescent Current, Load Switch with Reverse Blocking, High Enable, SC-70-6
 *
 * KiCad symbol: `Power_Management:SiP32431DR3`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.vishay.com.hk/docs/66597/sip32431.pdf
 * Keywords: Load switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class SiP32431DR3 extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "ON": "3",
  "IN": "4",
  "GND_5": "5",
  "NC": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "passive", GND_2: "power_in", ON: "input", IN: "passive", GND_5: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Management:SiP32431DR3";
  override referencePrefix = "U";
}

/**
 * 10 pA, Ultra Low Leakage and Quiescent Current, Load Switch with Reverse Blocking, Low Enable, SC-70-6
 *
 * KiCad symbol: `Power_Management:SiP32432DR3`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.vishay.com.hk/docs/66597/sip32431.pdf
 * Keywords: Load switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class SiP32432DR3 extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "~{ON}": "3",
  "IN": "4",
  "GND_5": "5",
  "NC": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "passive", GND_2: "power_in", "~{ON}": "input", IN: "passive", GND_5: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Management:SiP32432DR3";
  override referencePrefix = "U";
}

/**
 * 1.2 V to 5.5 V, Slew Rate Controlled Load Switch with Discharge Circuit, TSOT23-6
 *
 * KiCad symbol: `Power_Management:SiP32510DT`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*.
 * @see https://www.vishay.com/docs/63577/sip32510.pdf
 * Keywords: Load switch.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class SiP32510DT extends Component.withPins({
  "OUT_1": "1",
  "OUT_2": "2",
  "EN": "3",
  "GND": "4",
  "IN_5": "5",
  "IN_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", OUT_2: "passive", EN: "input", GND: "power_in", IN_5: "power_in", IN_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:SiP32510DT";
  override referencePrefix = "U";
}

/**
 * 1.1 V to 5.5 V, Slew Rate Controlled Load Switch, TSOT23-6
 *
 * KiCad symbol: `Power_Management:SiP32508DT`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*.
 * @see https://www.vishay.com/docs/62754/sip32508.pdf
 * Keywords: Load switch.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class SiP32508DT extends Component.withPins({
  "OUT_1": "1",
  "OUT_2": "2",
  "EN": "3",
  "GND": "4",
  "IN_5": "5",
  "IN_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", OUT_2: "passive", EN: "input", GND: "power_in", IN_5: "power_in", IN_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:SiP32508DT";
  override referencePrefix = "U";
}

/**
 * 1.1 V to 5.5 V, Slew Rate Controlled Load Switch with Discharge Circuit, TSOT23-6
 *
 * KiCad symbol: `Power_Management:SiP32509DT`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*.
 * @see https://www.vishay.com/docs/62754/sip32508.pdf
 * Keywords: Load switch.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class SiP32509DT extends Component.withPins({
  "OUT_1": "1",
  "OUT_2": "2",
  "EN": "3",
  "GND": "4",
  "IN_5": "5",
  "IN_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", OUT_2: "passive", EN: "input", GND: "power_in", IN_5: "power_in", IN_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:SiP32509DT";
  override referencePrefix = "U";
}

/**
 * GreenChip X capacitor discharge IC, SOIC-8
 *
 * KiCad symbol: `Power_Management:TEA1708T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TEA1708TDS.pdf
 * Keywords: X capacitor discharge.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TEA1708T extends Component.withPins({
  "NC_1": "1",
  "TMR2": "2",
  "NC_3": "3",
  "TMR1": "4",
  "HV2": "5",
  "NC_6": "6",
  "NC_7": "7",
  "HV1": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", TMR2: "passive", NC_3: "no_connect", TMR1: "passive", HV2: "passive", NC_6: "no_connect", NC_7: "no_connect", HV1: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TEA1708T";
  override referencePrefix = "U";
}

/**
 * Smart Dual Channel Powertrain Switch 2x8A (max 360mOhm)
 *
 * KiCad symbol: `Power_Management:TLE8102SG`. Reference prefix: `IC`.
 * Footprint filters: *PG?DSO*.
 * @see http://www.infineon.com/dgdl/Infineon-TLE8102SG-DS-v01_05-en.pdf?fileId=db3a304319c6f18c0119c8384bf90042
 * Keywords: Low_Side_Switch Power.
 * Default footprint: Package_SO:Infineon_PG-DSO-12-11_ThermalVias.
 */
export class TLE8102SG extends Component.withPins({
  "IN2": "1",
  "MOSI": "2",
  "OUT2": "3",
  "ISx/ST1/Fault": "4",
  "SCLK": "5",
  "GND_6": "6",
  "IN1": "7",
  "~{CS}": "8",
  "OUT1": "9",
  "VDD": "10",
  "MISO/ST2": "11",
  "GND_12": "12",
  "GND_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN2: "input", MOSI: "input", OUT2: "open_collector", "ISx/ST1/Fault": "passive", SCLK: "input", GND_6: "passive", IN1: "input", "~{CS}": "input", OUT1: "open_collector", VDD: "power_in", "MISO/ST2": "passive", GND_12: "power_in", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TLE8102SG";
  override referencePrefix = "IC";
}

/**
 * Smart Quad Channel Powertrain Switch 4x3A (In=1A, Ilim=3A, Ron=320mOhm)
 *
 * KiCad symbol: `Power_Management:TLE8104E`. Reference prefix: `IC`.
 * Footprint filters: *PG?DSO*.
 * @see http://www.infineon.com/dgdl/Infineon-TLE8104E-DS-v01_04-en.pdf?fileId=db3a304318f3fe2901190401cfda7f25
 * Keywords: Low_Side_Switch Power.
 * Default footprint: Package_SO:Infineon_PG-DSO-20-30_ThermalVias.
 */
export class TLE8104E extends Component.withPins({
  "GND_1": "1",
  "IN2": "2",
  "OUT1": "3",
  "VS": "4",
  "~{RST}": "5",
  "~{CS}": "6",
  "PRG": "7",
  "OUT2": "8",
  "IN1": "9",
  "GND_10": "10",
  "GND_11": "11",
  "IN4": "12",
  "OUT3": "13",
  "~{FAULT}": "14",
  "MISO": "15",
  "SCLK": "16",
  "MOSI": "17",
  "OUT4": "18",
  "IN3": "19",
  "GND_20": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN2: "input", OUT1: "open_collector", VS: "power_in", "~{RST}": "input", "~{CS}": "input", PRG: "input", OUT2: "open_collector", IN1: "input", GND_10: "passive", GND_11: "passive", IN4: "input", OUT3: "open_collector", "~{FAULT}": "output", MISO: "passive", SCLK: "input", MOSI: "input", OUT4: "open_collector", IN3: "input", GND_20: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TLE8104E";
  override referencePrefix = "IC";
}

/**
 * Single power-distribution switcher
 *
 * KiCad symbol: `Power_Management:TPS2041B`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps2041.pdf
 * Keywords: 1-chanel power-distribution USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS2041B extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{OC}": "3",
  "~{EN}": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{OC}": "open_collector", "~{EN}": "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2041B";
  override referencePrefix = "U";
}

/**
 * Dual power-distribution switcher
 *
 * KiCad symbol: `Power_Management:TPS2042D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2042.pdf
 * Keywords: 2-chanel power-distribution USB.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TPS2042D extends Component.withPins({
  "GND": "1",
  "IN1": "2",
  "~{EN1}": "3",
  "~{EN2}": "4",
  "~{OC2}": "5",
  "OUT2": "6",
  "OUT1": "7",
  "~{OC1}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN1: "power_in", "~{EN1}": "input", "~{EN2}": "input", "~{OC2}": "open_collector", OUT2: "power_out", OUT1: "power_out", "~{OC1}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2042D";
  override referencePrefix = "U";
}

/**
 * Quad power-distribution switcher
 *
 * KiCad symbol: `Power_Management:TPS2044D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2044.pdf
 * Keywords: 4-chanel power-distribution USB.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TPS2044D extends Component.withPins({
  "GND_1": "1",
  "IN1": "2",
  "~{EN1}": "3",
  "~{EN2}": "4",
  "~{OC2}": "13",
  "OUT2": "14",
  "OUT1": "15",
  "~{OC1}": "16",
  "GND_5": "5",
  "IN2": "6",
  "~{EN3}": "7",
  "~{EN4}": "8",
  "~{OC4}": "9",
  "OUT4": "10",
  "OUT3": "11",
  "~{OC3}": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN1: "power_in", "~{EN1}": "input", "~{EN2}": "input", "~{OC2}": "open_collector", OUT2: "power_out", OUT1: "power_out", "~{OC1}": "open_collector", GND_5: "power_in", IN2: "power_in", "~{EN3}": "input", "~{EN4}": "input", "~{OC4}": "open_collector", OUT4: "power_out", OUT3: "power_out", "~{OC3}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2044D";
  override referencePrefix = "U";
}

/**
 * 0.5A Current limited power switch, single channel, output discharge, reverse blocking, SOT-23-5
 *
 * KiCad symbol: `Power_Management:TPS2051CDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps2051c.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS2051CDBV extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLT}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLT}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2051CDBV";
  override referencePrefix = "U";
}

/**
 * Quad power-distribution switcher
 *
 * KiCad symbol: `Power_Management:TPS2054D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2044.pdf
 * Keywords: 4-chanel power-distribution USB.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TPS2054D extends Component.withPins({
  "GND_1": "1",
  "IN1": "2",
  "EN1": "3",
  "EN2": "4",
  "~{OC2}": "13",
  "OUT2": "14",
  "OUT1": "15",
  "~{OC1}": "16",
  "GND_5": "5",
  "IN2": "6",
  "EN3": "7",
  "EN4": "8",
  "~{OC4}": "9",
  "OUT4": "10",
  "OUT3": "11",
  "~{OC3}": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN1: "passive", EN1: "input", EN2: "input", "~{OC2}": "open_collector", OUT2: "passive", OUT1: "passive", "~{OC1}": "open_collector", GND_5: "power_in", IN2: "passive", EN3: "input", EN4: "input", "~{OC4}": "open_collector", OUT4: "passive", OUT3: "passive", "~{OC3}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2054D";
  override referencePrefix = "U";
}

/**
 * 1A Current limited power switch, single channel, output discharge, reverse blocking, SOT-23-5
 *
 * KiCad symbol: `Power_Management:TPS2065CDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps2051c.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS2065CDBV extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLT}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLT}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2065CDBV";
  override referencePrefix = "U";
}

/**
 * 1A Current limited power switch, single channel, reverse blocking, SOT-23-5
 *
 * KiCad symbol: `Power_Management:TPS2065CDBVx-2`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps2051c.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS2065CDBVx_2 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLT}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLT}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2065CDBVx-2";
  override referencePrefix = "U";
}

/**
 * 1.5A Current limited power switch, single channel, output discharge, reverse blocking, SOT-23-5
 *
 * KiCad symbol: `Power_Management:TPS2069CDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps2051c.pdf
 * Keywords: Limit USB Active High.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS2069CDBV extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "~{FLT}": "3",
  "EN": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", GND: "power_in", "~{FLT}": "open_collector", EN: "input", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2069CDBV";
  override referencePrefix = "U";
}

/**
 * 2 Channnels Power Mux with Manual and Priority Switchover, 1.6-5.5V Input Voltage, 2.5A Output Current, Ron 40 mOhm, SOT-583-8
 *
 * KiCad symbol: `Power_Management:TPS2116DRL`. Reference prefix: `U`.
 * Footprint filters: SOT?5?3*.
 * @see https://www.ti.com/lit/ds/symlink/tps2116.pdf
 * Keywords: Texas-Instruments power-mux switchover.
 * Default footprint: Package_TO_SOT_SMD:SOT-583-8.
 */
export class TPS2116DRL extends Component.withPins({
  "VOUT_7": "7",
  "GND": "1",
  "VOUT_2": "2",
  "VIN1": "3",
  "PR1": "4",
  "MODE": "5",
  "VIN2": "6",
  "ST": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT_7: "power_out", GND: "power_in", VOUT_2: "power_out", VIN1: "power_in", PR1: "input", MODE: "input", VIN2: "power_in", ST: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2116DRL";
  override referencePrefix = "U";
}

/**
 * 2.7..18V, 2A, 79mohms On-Resistance Load Switch With Thermal Protection, SOT-23-6
 *
 * KiCad symbol: `Power_Management:TPS22810DBV`. Reference prefix: `U2`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps22810.pdf
 * Keywords: thermal-protection QOD quick-output-discharge.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS22810DBV extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "EN/UVLO": "3",
  "CT": "4",
  "QOD": "5",
  "VOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", "EN/UVLO": "input", CT: "output", QOD: "open_collector", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS22810DBV";
  override referencePrefix = "U2";
}

/**
 * 2.7..18V, 3A, 79mohms On-Resistance Load Switch With Thermal Protection, WSON-6
 *
 * KiCad symbol: `Power_Management:TPS22810DRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*2x2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps22810.pdf
 * Keywords: load switch thermal protection QOD quick-output-discharge.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 */
export class TPS22810DRV extends Component.withPins({
  "VOUT": "1",
  "QOD": "2",
  "CT": "3",
  "GND_4": "4",
  "EN/UVLO": "5",
  "VIN": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", QOD: "open_collector", CT: "output", GND_4: "power_in", "EN/UVLO": "input", VIN: "power_in", GND_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS22810DRV";
  override referencePrefix = "U";
}

/**
 * 1V to 5.5V, 2A, 80mΩ Ultra-Low Leakage Load Switch, SOT23-6
 *
 * KiCad symbol: `Power_Management:TPS22917DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps22917.pdf
 * Keywords: high-side power distribution switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS22917DBV extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "ON": "3",
  "CT": "4",
  "QOD": "5",
  "VOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", ON: "input", CT: "output", QOD: "open_collector", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS22917DBV";
  override referencePrefix = "U";
}

/**
 * 1V to 5.5V, 2A, 80mΩ Ultra-Low Leakage Load Switch, Active Low, SOT23-6
 *
 * KiCad symbol: `Power_Management:TPS22917LDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps22917.pdf
 * Keywords: high-side power distribution switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS22917LDBV extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "~{ON}": "3",
  "CT": "4",
  "QOD": "5",
  "VOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", "~{ON}": "input", CT: "output", QOD: "open_collector", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS22917LDBV";
  override referencePrefix = "U";
}

/**
 * 1.6V to 5.5 V, 1.5 A, 90-mΩ Self-Protected Load Switch with Controlled Rise Time, SC-70-6
 *
 * KiCad symbol: `Power_Management:TPS22919DCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.ti.com/lit/ds/symlink/tps22919.pdf
 * Keywords: high-side power distribution switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class TPS22919DCK extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "ON": "3",
  "NC": "4",
  "QOD": "5",
  "OUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", ON: "input", NC: "no_connect", QOD: "open_collector", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS22919DCK";
  override referencePrefix = "U";
}

/**
 * High side, power distribution switch, 1.4V-5.5V, 1.8A, SOT23-6 package
 *
 * KiCad symbol: `Power_Management:TPS22929D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps22929d.pdf
 * Keywords: high-side power distribution switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS22929D extends Component.withPins({
  "VOUT": "1",
  "GND_2": "2",
  "ON": "3",
  "VIN_4": "4",
  "GND_5": "5",
  "VIN_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND_2: "power_in", ON: "input", VIN_4: "power_in", GND_5: "power_in", VIN_6: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS22929D";
  override referencePrefix = "U";
}

/**
 * Quad Channel Load Switch with GPIO and I2C Control, Bias voltage: 4.5V-17.2V, Input voltage: 1.0V-3.6V, Max 1.2A per channel, WQFN-20
 *
 * KiCad symbol: `Power_Management:TPS22993`. Reference prefix: `U`.
 * Footprint filters: Texas*PWQFN*.
 * @see http://www.ti.com/lit/gpn/tps22993
 * Keywords: quad channel power distribution/load switch.
 * Default footprint: Package_DFN_QFN:Texas_S-PWQFN-N20.
 */
export class TPS22993 extends Component.withPins({
  "VOUT2": "1",
  "VIN2": "2",
  "VBIAS": "3",
  "VIN1": "4",
  "VOUT1": "5",
  "ADD1": "6",
  "ON4": "7",
  "ON3": "8",
  "ON2": "9",
  "ON1": "10",
  "VOUT4": "11",
  "VIN4": "12",
  "GND": "13",
  "VIN3": "14",
  "VOUT3": "15",
  "ADD2": "16",
  "SCL": "17",
  "VDD": "18",
  "SDA": "19",
  "ADD3": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT2: "passive", VIN2: "passive", VBIAS: "power_in", VIN1: "passive", VOUT1: "passive", ADD1: "input", ON4: "input", ON3: "input", ON2: "input", ON1: "input", VOUT4: "passive", VIN4: "passive", GND: "power_in", VIN3: "passive", VOUT3: "passive", ADD2: "input", SCL: "input", VDD: "power_in", SDA: "bidirectional", ADD3: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS22993";
  override referencePrefix = "U";
}

/**
 * N+1 and ORing Power Rail Controller, SOIC-8
 *
 * KiCad symbol: `Power_Management:TPS2412D`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2412.pdf
 * Keywords: ideal-diode or-ing.
 */
export class TPS2412D extends Component.withPins({
  "VDD": "1",
  "RSET": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GATE": "5",
  "C": "6",
  "A": "7",
  "BYP": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", RSET: "passive", GND_3: "passive", GND_4: "power_in", GATE: "output", C: "input", A: "input", BYP: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2412D";
  override referencePrefix = "U";
}

/**
 * N+1 and ORing Power Rail Controller, TSSOP-8
 *
 * KiCad symbol: `Power_Management:TPS2412PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2412.pdf
 * Keywords: ideal-diode or-ing.
 */
export class TPS2412PW extends Component.withPins({
  "VDD": "1",
  "RSET": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GATE": "5",
  "C": "6",
  "A": "7",
  "BYP": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", RSET: "passive", GND_3: "passive", GND_4: "power_in", GATE: "output", C: "input", A: "input", BYP: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2412PW";
  override referencePrefix = "U";
}

/**
 * N+1 and ORing Power Rail Controller with Enable, SOIC-8
 *
 * KiCad symbol: `Power_Management:TPS2419D`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2419.pdf
 * Keywords: ideal-diode or-ing.
 */
export class TPS2419D extends Component.withPins({
  "RSET": "1",
  "EN": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GATE": "5",
  "C": "6",
  "A": "7",
  "BYP": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RSET: "passive", EN: "input", GND_3: "passive", GND_4: "power_in", GATE: "output", C: "input", A: "input", BYP: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2419D";
  override referencePrefix = "U";
}

/**
 * N+1 and ORing Power Rail Controller with Enable, TSSOP-8
 *
 * KiCad symbol: `Power_Management:TPS2419PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2419.pdf
 * Keywords: ideal-diode or-ing.
 */
export class TPS2419PW extends Component.withPins({
  "RSET": "1",
  "EN": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GATE": "5",
  "C": "6",
  "A": "7",
  "BYP": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RSET: "passive", EN: "input", GND_3: "passive", GND_4: "power_in", GATE: "output", C: "input", A: "input", BYP: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2419PW";
  override referencePrefix = "U";
}

/**
 * 5V/12V eFuse Protection Switch (VSON-10)
 *
 * KiCad symbol: `Power_Management:TPS2592xx`. Reference prefix: `U`.
 * Footprint filters: VSON*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps25925.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_SON:VSON-10-1EP_3x3mm_P0.5mm_EP1.65x2.4mm_ThermalVias.
 */
export class TPS2592xx extends Component.withPins({
  "dV/dT": "1",
  "EN/UVLO": "2",
  "VIN_3": "3",
  "VIN_4": "4",
  "VIN_5": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "OUT_8": "8",
  "NC": "9",
  "ILIM": "10",
  "GND": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "dV/dT": "output", "EN/UVLO": "input", VIN_3: "power_in", VIN_4: "passive", VIN_5: "passive", OUT_6: "power_out", OUT_7: "passive", OUT_8: "passive", NC: "no_connect", ILIM: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2592xx";
  override referencePrefix = "U";
}

/**
 * 2V7 - 19V, 0.125A - 2A eFuse Protection Switch, SO-8
 *
 * KiCad symbol: `Power_Management:TPS2596xx`. Reference prefix: `U`.
 * Footprint filters: TI*SO*PowerPAD*.
 * @see https://www.ti.com/lit/ds/symlink/tps2596.pdf
 * Keywords: TPS259620 TPS259621 TPS259630 TPS259631 Texas Instruments.
 * Default footprint: Package_SO:TI_SO-PowerPAD-8_ThermalVias.
 */
export class TPS2596xx extends Component.withPins({
  "GND_1": "1",
  "dV/dT": "2",
  "EN/UVLO": "3",
  "VIN": "4",
  "OUT": "5",
  "~{FLT}": "6",
  "ILM": "7",
  "OVLO/OVCSEL": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "dV/dT": "passive", "EN/UVLO": "input", VIN: "power_in", OUT: "power_out", "~{FLT}": "open_collector", ILM: "output", "OVLO/OVCSEL": "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS2596xx";
  override referencePrefix = "U";
}

/**
 * 60V, 2A Current Limiting, Industrial eFuse, Reverse Current Blocking, Adjustable Overvoltage cut-off, Active Current Limiting, Circuit Breaker with auto-retry, HTSSOP-16
 *
 * KiCad symbol: `Power_Management:TPS26600PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x5mm*P0.65mm*Mask2.66x2.46mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps2660.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask2.66x2.46mm_ThermalVias.
 */
export class TPS26600PWP extends Component.withPins({
  "NC_4": "4",
  "NC_13": "13",
  "IN_1": "1",
  "IN_2": "2",
  "UVLO": "3",
  "OVP": "5",
  "MODE": "6",
  "~{SHDN}": "7",
  "RTN_8": "8",
  "GND": "9",
  "IMON": "10",
  "ILIM": "11",
  "dVdT": "12",
  "~{FLT}": "14",
  "OUT_15": "15",
  "OUT_16": "16",
  "RTN_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_4: "no_connect", NC_13: "no_connect", IN_1: "power_in", IN_2: "passive", UVLO: "input", OVP: "input", MODE: "input", "~{SHDN}": "input", RTN_8: "passive", GND: "power_in", IMON: "output", ILIM: "passive", dVdT: "passive", "~{FLT}": "open_collector", OUT_15: "power_out", OUT_16: "passive", RTN_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26600PWP";
  override referencePrefix = "U";
}

/**
 * 42V, 2A Current Limiting, Industrial eFuse, Reverse Current Blocking, Adjustable Overvoltage cut-off, Active Current Limiting, Circuit Breaker with auto-retry, HTSSOP-16
 *
 * KiCad symbol: `Power_Management:TPS26400PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x5mm*P0.65mm*Mask2.66x2.46mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps2640.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask2.66x2.46mm_ThermalVias.
 */
export class TPS26400PWP extends Component.withPins({
  "NC_4": "4",
  "NC_13": "13",
  "IN_1": "1",
  "IN_2": "2",
  "UVLO": "3",
  "OVP": "5",
  "MODE": "6",
  "~{SHDN}": "7",
  "RTN_8": "8",
  "GND": "9",
  "IMON": "10",
  "ILIM": "11",
  "dVdT": "12",
  "~{FLT}": "14",
  "OUT_15": "15",
  "OUT_16": "16",
  "RTN_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_4: "no_connect", NC_13: "no_connect", IN_1: "power_in", IN_2: "passive", UVLO: "input", OVP: "input", MODE: "input", "~{SHDN}": "input", RTN_8: "passive", GND: "power_in", IMON: "output", ILIM: "passive", dVdT: "passive", "~{FLT}": "open_collector", OUT_15: "power_out", OUT_16: "passive", RTN_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26400PWP";
  override referencePrefix = "U";
}

/**
 * 60V, 2A Current Limiting, Industrial eFuse, Reverse Current Blocking, Adjustable Overvoltage cut-off, Active Current Limiting, Circuit Breaker with auto-retry, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26600RHF`. Reference prefix: `U`.
 * Footprint filters: Texas*RHF0024A*.
 * @see https://www.ti.com/lit/ds/symlink/tps2660.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RHF0024A_VQFN-24-1EP_4x5mm_P0.5mm_EP2.65x3.65mm_ThermalVias.
 */
export class TPS26600RHF extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_11": "11",
  "NC_16": "16",
  "NC_21": "21",
  "IN_8": "8",
  "IN_9": "9",
  "UVLO": "10",
  "OVP": "12",
  "MODE": "13",
  "~{SHDN}": "14",
  "RTN_15": "15",
  "GND": "17",
  "IMON": "18",
  "ILIM": "19",
  "dVdT": "20",
  "~{FLT}": "22",
  "OUT_23": "23",
  "OUT_24": "24",
  "RTN_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_11: "no_connect", NC_16: "no_connect", NC_21: "no_connect", IN_8: "power_in", IN_9: "passive", UVLO: "input", OVP: "input", MODE: "input", "~{SHDN}": "input", RTN_15: "passive", GND: "power_in", IMON: "output", ILIM: "passive", dVdT: "passive", "~{FLT}": "open_collector", OUT_23: "power_out", OUT_24: "passive", RTN_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26600RHF";
  override referencePrefix = "U";
}

/**
 * 42V, 2A Current Limiting, Industrial eFuse, Reverse Current Blocking, Adjustable Overvoltage cut-off, Active Current Limiting, Circuit Breaker with auto-retry, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26400RHF`. Reference prefix: `U`.
 * Footprint filters: Texas*RHF0024A*.
 * @see https://www.ti.com/lit/ds/symlink/tps2640.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RHF0024A_VQFN-24-1EP_4x5mm_P0.5mm_EP2.65x3.65mm_ThermalVias.
 */
export class TPS26400RHF extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_11": "11",
  "NC_16": "16",
  "NC_21": "21",
  "IN_8": "8",
  "IN_9": "9",
  "UVLO": "10",
  "OVP": "12",
  "MODE": "13",
  "~{SHDN}": "14",
  "RTN_15": "15",
  "GND": "17",
  "IMON": "18",
  "ILIM": "19",
  "dVdT": "20",
  "~{FLT}": "22",
  "OUT_23": "23",
  "OUT_24": "24",
  "RTN_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_11: "no_connect", NC_16: "no_connect", NC_21: "no_connect", IN_8: "power_in", IN_9: "passive", UVLO: "input", OVP: "input", MODE: "input", "~{SHDN}": "input", RTN_15: "passive", GND: "power_in", IMON: "output", ILIM: "passive", dVdT: "passive", "~{FLT}": "open_collector", OUT_23: "power_out", OUT_24: "passive", RTN_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26400RHF";
  override referencePrefix = "U";
}

/**
 * 60V, 2A Current Limiting, Industrial eFuse, Reverse Current Blocking, Adjustable Overvoltage cut-off, Active Current Limiting, Circuit Breaker with latch, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26601RHF`. Reference prefix: `U`.
 * Footprint filters: Texas*RHF0024A*.
 * @see https://www.ti.com/lit/ds/symlink/tps2660.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RHF0024A_VQFN-24-1EP_4x5mm_P0.5mm_EP2.65x3.65mm_ThermalVias.
 */
export class TPS26601RHF extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_11": "11",
  "NC_16": "16",
  "NC_21": "21",
  "IN_8": "8",
  "IN_9": "9",
  "UVLO": "10",
  "OVP": "12",
  "MODE": "13",
  "~{SHDN}": "14",
  "RTN_15": "15",
  "GND": "17",
  "IMON": "18",
  "ILIM": "19",
  "dVdT": "20",
  "~{FLT}": "22",
  "OUT_23": "23",
  "OUT_24": "24",
  "RTN_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_11: "no_connect", NC_16: "no_connect", NC_21: "no_connect", IN_8: "power_in", IN_9: "passive", UVLO: "input", OVP: "input", MODE: "input", "~{SHDN}": "input", RTN_15: "passive", GND: "power_in", IMON: "output", ILIM: "passive", dVdT: "passive", "~{FLT}": "open_collector", OUT_23: "power_out", OUT_24: "passive", RTN_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26601RHF";
  override referencePrefix = "U";
}

/**
 * 60V, 2A Current Limiting, Industrial eFuse, Reverse Current Blocking, 38V Overvoltage clamp, Active Current Limiting, Circuit Breaker with auto-retry, HTSSOP-16
 *
 * KiCad symbol: `Power_Management:TPS26602PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x5mm*P0.65mm*Mask2.66x2.46mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps2660.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask2.66x2.46mm_ThermalVias.
 */
export class TPS26602PWP extends Component.withPins({
  "NC_4": "4",
  "NC_13": "13",
  "IN_1": "1",
  "IN_2": "2",
  "UVLO": "3",
  "OVP": "5",
  "MODE": "6",
  "~{SHDN}": "7",
  "RTN_8": "8",
  "GND": "9",
  "IMON": "10",
  "ILIM": "11",
  "dVdT": "12",
  "~{FLT}": "14",
  "OUT_15": "15",
  "OUT_16": "16",
  "RTN_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_4: "no_connect", NC_13: "no_connect", IN_1: "power_in", IN_2: "passive", UVLO: "input", OVP: "input", MODE: "input", "~{SHDN}": "input", RTN_8: "passive", GND: "power_in", IMON: "output", ILIM: "passive", dVdT: "passive", "~{FLT}": "open_collector", OUT_15: "power_out", OUT_16: "passive", RTN_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26602PWP";
  override referencePrefix = "U";
}

/**
 * 60V, 2A Current Limiting, Industrial eFuse, Reverse Current Blocking, 38V Overvoltage clamp, Active Current Limiting, Circuit Breaker with auto-retry, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26602RHF`. Reference prefix: `U`.
 * Footprint filters: Texas*RHF0024A*.
 * @see https://www.ti.com/lit/ds/symlink/tps2660.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RHF0024A_VQFN-24-1EP_4x5mm_P0.5mm_EP2.65x3.65mm_ThermalVias.
 */
export class TPS26602RHF extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_11": "11",
  "NC_16": "16",
  "NC_21": "21",
  "IN_8": "8",
  "IN_9": "9",
  "UVLO": "10",
  "OVP": "12",
  "MODE": "13",
  "~{SHDN}": "14",
  "RTN_15": "15",
  "GND": "17",
  "IMON": "18",
  "ILIM": "19",
  "dVdT": "20",
  "~{FLT}": "22",
  "OUT_23": "23",
  "OUT_24": "24",
  "RTN_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_11: "no_connect", NC_16: "no_connect", NC_21: "no_connect", IN_8: "power_in", IN_9: "passive", UVLO: "input", OVP: "input", MODE: "input", "~{SHDN}": "input", RTN_15: "passive", GND: "power_in", IMON: "output", ILIM: "passive", dVdT: "passive", "~{FLT}": "open_collector", OUT_23: "power_out", OUT_24: "passive", RTN_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26602RHF";
  override referencePrefix = "U";
}

/**
 * 60V, 6A Power Limiting, Surge Protection Industrial eFuse, Adjustable Overvoltage cut-off, Active Current Limiting, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26630RGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024H*.
 * @see https://www.ti.com/lit/ds/symlink/tps2663.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class TPS26630RGE extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "B_GATE": "3",
  "DRV": "4",
  "IN_SYS": "5",
  "UVLO": "6",
  "OVP": "7",
  "GND_8": "8",
  "dVdT": "9",
  "ILIM": "10",
  "MODE": "11",
  "~{SHDN}": "12",
  "IMON": "13",
  "~{FLT}": "14",
  "PGTH": "15",
  "PGOOD": "16",
  "OUT_17": "17",
  "OUT_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "power_in", IN_2: "passive", B_GATE: "output", DRV: "output", IN_SYS: "power_in", UVLO: "input", OVP: "input", GND_8: "power_in", dVdT: "passive", ILIM: "passive", MODE: "input", "~{SHDN}": "input", IMON: "output", "~{FLT}": "open_collector", PGTH: "input", PGOOD: "output", OUT_17: "power_out", OUT_18: "passive", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26630RGE";
  override referencePrefix = "U";
}

/**
 * 60V, 6A Power Limiting, Surge Protection Industrial eFuse, Adjustable Overvoltage cut-off, Active Current Limiting with Pulse current support, HTTSOP-20
 *
 * KiCad symbol: `Power_Management:TPS26631PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps2663.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_Mask2.96x2.96mm_ThermalVias.
 */
export class TPS26631PWP extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "IN_3": "3",
  "B_GATE": "4",
  "DRV": "5",
  "IN_SYS": "6",
  "UVLO": "7",
  "OVP": "8",
  "GND_9": "9",
  "dVdT": "10",
  "ILIM": "11",
  "MODE": "12",
  "~{SHDN}": "13",
  "IMON": "14",
  "~{FLT}": "15",
  "PGTH": "16",
  "PGOOD": "17",
  "OUT_18": "18",
  "OUT_19": "19",
  "OUT_20": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "power_in", IN_2: "passive", IN_3: "passive", B_GATE: "output", DRV: "output", IN_SYS: "power_in", UVLO: "input", OVP: "input", GND_9: "power_in", dVdT: "passive", ILIM: "passive", MODE: "input", "~{SHDN}": "input", IMON: "output", "~{FLT}": "open_collector", PGTH: "input", PGOOD: "output", OUT_18: "power_out", OUT_19: "passive", OUT_20: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26631PWP";
  override referencePrefix = "U";
}

/**
 * 60V, 6A Power Limiting, Surge Protection Industrial eFuse, Adjustable Overvoltage cut-off, Active Current Limiting with Pulse current support, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26631RGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024H*.
 * @see https://www.ti.com/lit/ds/symlink/tps2663.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class TPS26631RGE extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "B_GATE": "3",
  "DRV": "4",
  "IN_SYS": "5",
  "UVLO": "6",
  "OVP": "7",
  "GND_8": "8",
  "dVdT": "9",
  "ILIM": "10",
  "MODE": "11",
  "~{SHDN}": "12",
  "IMON": "13",
  "~{FLT}": "14",
  "PGTH": "15",
  "PGOOD": "16",
  "OUT_17": "17",
  "OUT_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "power_in", IN_2: "passive", B_GATE: "output", DRV: "output", IN_SYS: "power_in", UVLO: "input", OVP: "input", GND_8: "power_in", dVdT: "passive", ILIM: "passive", MODE: "input", "~{SHDN}": "input", IMON: "output", "~{FLT}": "open_collector", PGTH: "input", PGOOD: "output", OUT_17: "power_out", OUT_18: "passive", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26631RGE";
  override referencePrefix = "U";
}

/**
 * 60V, 6A Power Limiting, Surge Protection Industrial eFuse, 35V fixed Overvoltage clamp, Active Current Limiting, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26632RGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024H*.
 * @see https://www.ti.com/lit/ds/symlink/tps2663.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class TPS26632RGE extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "B_GATE": "3",
  "DRV": "4",
  "IN_SYS": "5",
  "UVLO": "6",
  "PLIM": "7",
  "GND_8": "8",
  "dVdT": "9",
  "ILIM": "10",
  "MODE": "11",
  "~{SHDN}": "12",
  "IMON": "13",
  "~{FLT}": "14",
  "PGTH": "15",
  "PGOOD": "16",
  "OUT_17": "17",
  "OUT_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "power_in", IN_2: "passive", B_GATE: "output", DRV: "output", IN_SYS: "power_in", UVLO: "input", PLIM: "passive", GND_8: "power_in", dVdT: "passive", ILIM: "passive", MODE: "input", "~{SHDN}": "input", IMON: "output", "~{FLT}": "open_collector", PGTH: "input", PGOOD: "output", OUT_17: "power_out", OUT_18: "passive", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26632RGE";
  override referencePrefix = "U";
}

/**
 * 60V, 6A Power Limiting, Surge Protection Industrial eFuse, 35V fixed Overvoltage clamp, Active Current Limiting with Pulse current support, HTTSOP-20
 *
 * KiCad symbol: `Power_Management:TPS26633PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps2663.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_Mask2.96x2.96mm_ThermalVias.
 */
export class TPS26633PWP extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "IN_3": "3",
  "B_GATE": "4",
  "DRV": "5",
  "IN_SYS": "6",
  "UVLO": "7",
  "PLIM": "8",
  "GND_9": "9",
  "dVdT": "10",
  "ILIM": "11",
  "MODE": "12",
  "~{SHDN}": "13",
  "IMON": "14",
  "~{FLT}": "15",
  "PGTH": "16",
  "PGOOD": "17",
  "OUT_18": "18",
  "OUT_19": "19",
  "OUT_20": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "power_in", IN_2: "passive", IN_3: "passive", B_GATE: "output", DRV: "output", IN_SYS: "power_in", UVLO: "input", PLIM: "passive", GND_9: "power_in", dVdT: "passive", ILIM: "passive", MODE: "input", "~{SHDN}": "input", IMON: "output", "~{FLT}": "open_collector", PGTH: "input", PGOOD: "output", OUT_18: "power_out", OUT_19: "passive", OUT_20: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26633PWP";
  override referencePrefix = "U";
}

/**
 * 60V, 6A Power Limiting, Surge Protection Industrial eFuse, 35V fixed Overvoltage clamp, Active Current Limiting with Pulse current support, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26633RGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024H*.
 * @see https://www.ti.com/lit/ds/symlink/tps2663.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class TPS26633RGE extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "B_GATE": "3",
  "DRV": "4",
  "IN_SYS": "5",
  "UVLO": "6",
  "PLIM": "7",
  "GND_8": "8",
  "dVdT": "9",
  "ILIM": "10",
  "MODE": "11",
  "~{SHDN}": "12",
  "IMON": "13",
  "~{FLT}": "14",
  "PGTH": "15",
  "PGOOD": "16",
  "OUT_17": "17",
  "OUT_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "power_in", IN_2: "passive", B_GATE: "output", DRV: "output", IN_SYS: "power_in", UVLO: "input", PLIM: "passive", GND_8: "power_in", dVdT: "passive", ILIM: "passive", MODE: "input", "~{SHDN}": "input", IMON: "output", "~{FLT}": "open_collector", PGTH: "input", PGOOD: "output", OUT_17: "power_out", OUT_18: "passive", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26633RGE";
  override referencePrefix = "U";
}

/**
 * 60V, 6A Power Limiting, Surge Protection Industrial eFuse, 39V fixed Overvoltage clamp, Active Current Limiting with Pulse current support, VQFN-24
 *
 * KiCad symbol: `Power_Management:TPS26635RGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024H*.
 * @see https://www.ti.com/lit/ds/symlink/tps2663.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class TPS26635RGE extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "B_GATE": "3",
  "DRV": "4",
  "IN_SYS": "5",
  "UVLO": "6",
  "PLIM": "7",
  "GND_8": "8",
  "dVdT": "9",
  "ILIM": "10",
  "MODE": "11",
  "~{SHDN}": "12",
  "IMON": "13",
  "~{FLT}": "14",
  "PGTH": "15",
  "PGOOD": "16",
  "OUT_17": "17",
  "OUT_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "power_in", IN_2: "passive", B_GATE: "output", DRV: "output", IN_SYS: "power_in", UVLO: "input", PLIM: "passive", GND_8: "power_in", dVdT: "passive", ILIM: "passive", MODE: "input", "~{SHDN}": "input", IMON: "output", "~{FLT}": "open_collector", PGTH: "input", PGOOD: "output", OUT_17: "power_out", OUT_18: "passive", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26635RGE";
  override referencePrefix = "U";
}

/**
 * 60V, 6A Power Limiting, Surge Protection Industrial eFuse, 35V fixed Overvoltage clamp, Active Current Limiting with Pulse current support, HTTSOP-20
 *
 * KiCad symbol: `Power_Management:TPS26636PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps2663.pdf
 * Keywords: efuse protection switch.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_Mask2.96x2.96mm_ThermalVias.
 */
export class TPS26636PWP extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "IN_3": "3",
  "B_GATE": "4",
  "DRV": "5",
  "IN_SYS": "6",
  "UVLO": "7",
  "PLIM": "8",
  "GND_9": "9",
  "dVdT": "10",
  "ILIM": "11",
  "MODE": "12",
  "~{SHDN}": "13",
  "IMON": "14",
  "~{FLT}": "15",
  "PGTH": "16",
  "PGOOD": "17",
  "OUT_18": "18",
  "OUT_19": "19",
  "OUT_20": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "power_in", IN_2: "passive", IN_3: "passive", B_GATE: "output", DRV: "output", IN_SYS: "power_in", UVLO: "input", PLIM: "passive", GND_9: "power_in", dVdT: "passive", ILIM: "passive", MODE: "input", "~{SHDN}": "input", IMON: "output", "~{FLT}": "open_collector", PGTH: "input", PGOOD: "output", OUT_18: "power_out", OUT_19: "passive", OUT_20: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TPS26636PWP";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifier and Dual Comparator and 1% Voltage Reference, SOIC-16
 *
 * KiCad symbol: `Power_Management:TSM102`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/tsm102.pdf
 * Keywords: dual opamp comparator reference.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TSM102 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "P10": "10",
  "-_11": "11",
  "+_12": "12",
  "+_14": "14",
  "-_15": "15",
  "P16": "16",
  "V+": "4",
  "P8": "8",
  "P9": "9",
  "V-": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", P10: "output", "-_11": "input", "+_12": "input", "+_14": "input", "-_15": "input", P16: "output", "V+": "power_in", P8: "passive", P9: "passive", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TSM102";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifier and Dual Comparator and 0.4% Voltage Reference, SOIC-16
 *
 * KiCad symbol: `Power_Management:TSM102A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/tsm102.pdf
 * Keywords: dual opamp comparator reference.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TSM102A extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "P10": "10",
  "-_11": "11",
  "+_12": "12",
  "+_14": "14",
  "-_15": "15",
  "P16": "16",
  "V+": "4",
  "P8": "8",
  "P9": "9",
  "V-": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", P10: "output", "-_11": "input", "+_12": "input", "+_14": "input", "-_15": "input", P16: "output", "V+": "power_in", P8: "passive", P9: "passive", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TSM102A";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifier and 2.5V 1% Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Power_Management:TSM103W`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/tsm103w.pdf
 * Keywords: dual opamp reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TSM103W extends Component.withPins({
  "V-": "4",
  "V+": "8",
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TSM103W";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifier and 2.5V 0.4% Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Power_Management:TSM103WA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/tsm103w.pdf
 * Keywords: dual opamp reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TSM103WA extends Component.withPins({
  "V-": "4",
  "V+": "8",
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:TSM103WA";
  override referencePrefix = "U";
}

/**
 * Advanced 8-Pin Load-Share Controller, SOIC-8
 *
 * KiCad symbol: `Power_Management:UCC39002D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/slus495i/slus495i.pdf
 * Keywords: load share controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UCC39002D extends Component.withPins({
  "CS-": "1",
  "CS+": "2",
  "VDD": "3",
  "GND": "4",
  "ADJ": "5",
  "EAO": "6",
  "LS": "7",
  "CSO": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CS-": "input", "CS+": "input", VDD: "power_in", GND: "power_in", ADJ: "open_collector", EAO: "passive", LS: "passive", CSO: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Management:UCC39002D";
  override referencePrefix = "U";
}
