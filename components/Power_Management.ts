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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AAT4610BIGV_1_T1 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SET; passive. */
  "SET": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AAT4610BIGV_T1 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SET; passive. */
  "SET": "3",
  /** Physical pin 4: ~{ON}; input. */
  "~{ON}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AAT4616IGV_1_T1 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SET; passive. */
  "SET": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AAT4616IGV_T1 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SET; passive. */
  "SET": "3",
  /** Physical pin 4: ~{ON}; input. */
  "~{ON}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM1270ACPZ extends Component.withPins({
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
  /** Physical pin 1: VCAP; power_out. */
  "VCAP": "1",
  /** Physical pin 2: ISET; input. */
  "ISET": "2",
  /** Physical pin 3: UV; input. */
  "UV": "3",
  /** Physical pin 4: OV; input. */
  "OV": "4",
  /** Physical pin 5: ENABLE; input. */
  "ENABLE": "5",
  /** Physical pin 6: ~{FAULT}; open_collector. */
  "~{FAULT}": "6",
  /** Physical pin 8: TIMER; input. */
  "TIMER": "8",
  /** Physical pin 9: TIMER_OFF; input. */
  "TIMER_OFF": "9",
  /** Physical pin 10: FB_PG; input. */
  "FB_PG": "10",
  /** Physical pin 11: FLB; input. */
  "FLB": "11",
  /** Physical pin 12: PWRGD; open_collector. */
  "PWRGD": "12",
  /** Physical pin 13: GATE; output. */
  "GATE": "13",
  /** Physical pin 14: SENSE-; input. */
  "SENSE-": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: RPFG; output. */
  "RPFG": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM1270ARQZ extends Component.withPins({
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RPFG; input. */
  "RPFG": "2",
  /** Physical pin 3: VCAP; power_out. */
  "VCAP": "3",
  /** Physical pin 4: ISET; input. */
  "ISET": "4",
  /** Physical pin 5: UV; input. */
  "UV": "5",
  /** Physical pin 6: OV; input. */
  "OV": "6",
  /** Physical pin 7: ENABLE; input. */
  "ENABLE": "7",
  /** Physical pin 8: ~{FAULT}; open_collector. */
  "~{FAULT}": "8",
  /** Physical pin 10: TIMER; input. */
  "TIMER": "10",
  /** Physical pin 11: TIMER_OFF; input. */
  "TIMER_OFF": "11",
  /** Physical pin 12: FB_PG; input. */
  "FB_PG": "12",
  /** Physical pin 13: FLB; input. */
  "FLB": "13",
  /** Physical pin 14: PWRGD; open_collector. */
  "PWRGD": "14",
  /** Physical pin 15: GATE; output. */
  "GATE": "15",
  /** Physical pin 16: SENSE-; input. */
  "SENSE-": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP2161W extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP2171W extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22804AW5 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22804BW5 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22814AW5 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22814BW5 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22816AKEWT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22816BKEWT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22817AKEWT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22817BKEWT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22818AKEWT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22818BKEWT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP22913CN4 extends Component.withPins({
  /** Physical pin A1: OUT; power_out. */
  "OUT": "A1",
  /** Physical pin A2: IN; power_in. */
  "IN": "A2",
  /** Physical pin B1: GND; power_in. */
  "GND": "B1",
  /** Physical pin B2: ON; input. */
  "ON": "B2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS1041R extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: S; power_in. */
  "S": "3",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS1042G extends Component.withPins({
  /** Physical pin 1: S1; power_in. */
  "S1": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 7: D1; passive. */
  "D1_7": "7",
  /** Physical pin 8: D1; passive. */
  "D1_8": "8",
  /** Physical pin 3: S2; power_in. */
  "S2": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: D2; passive. */
  "D2_5": "5",
  /** Physical pin 6: D2; passive. */
  "D2_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS1051L extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: S; power_in. */
  "S": "3",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS1052G extends Component.withPins({
  /** Physical pin 1: S1; power_in. */
  "S1": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 7: D1; passive. */
  "D1_7": "7",
  /** Physical pin 8: D1; passive. */
  "D1_8": "8",
  /** Physical pin 3: S2; power_in. */
  "S2": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: D2; passive. */
  "D2_5": "5",
  /** Physical pin 6: D2; passive. */
  "D2_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS2031R extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: S; power_in. */
  "S": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS2041L extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: S; power_in. */
  "S": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS2051L extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: D; passive. */
  "D": "2",
  /** Physical pin 3: S; power_in. */
  "S": "3",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS2052G extends Component.withPins({
  /** Physical pin 1: S1; power_in. */
  "S1": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 7: D1; passive. */
  "D1_7": "7",
  /** Physical pin 8: D1; passive. */
  "D1_8": "8",
  /** Physical pin 3: S2; power_in. */
  "S2": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: D2; passive. */
  "D2_5": "5",
  /** Physical pin 6: D2; passive. */
  "D2_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS6011R extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; open_collector. */
  "DG": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS6031R extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; open_collector. */
  "DG": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS6041G extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DG; open_collector. */
  "DG": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC_5": "5",
  /** Physical pin 6: VCC; passive. */
  "VCC_6": "6",
  /** Physical pin 7: VCC; passive. */
  "VCC_7": "7",
  /** Physical pin 8: VCC; passive. */
  "VCC_8": "8",
}) {
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
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS6044G extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC_1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: DG1; open_collector. */
  "DG1": "4",
  /** Physical pin 14: VCC; passive. */
  "VCC_14": "14",
  /** Physical pin 15: VCC; passive. */
  "VCC_15": "15",
  /** Physical pin 25: OUT1; power_out. */
  "OUT1_25": "25",
  /** Physical pin 26: OUT1; passive. */
  "OUT1_26": "26",
  /** Physical pin 27: OUT1; passive. */
  "OUT1_27": "27",
  /** Physical pin 28: VCC; passive. */
  "VCC_28": "28",
  /** Physical pin 5: DG2; open_collector. */
  "DG2": "5",
  /** Physical pin 6: IN2; input. */
  "IN2": "6",
  /** Physical pin 7: GND2; power_in. */
  "GND2": "7",
  /** Physical pin 22: OUT2; power_out. */
  "OUT2_22": "22",
  /** Physical pin 23: OUT2; passive. */
  "OUT2_23": "23",
  /** Physical pin 24: OUT2; passive. */
  "OUT2_24": "24",
  /** Physical pin 8: GND3; power_in. */
  "GND3": "8",
  /** Physical pin 9: IN3; input. */
  "IN3": "9",
  /** Physical pin 10: DG3; open_collector. */
  "DG3": "10",
  /** Physical pin 19: OUT3; power_out. */
  "OUT3_19": "19",
  /** Physical pin 20: OUT3; passive. */
  "OUT3_20": "20",
  /** Physical pin 21: OUT3; passive. */
  "OUT3_21": "21",
  /** Physical pin 11: DG4; open_collector. */
  "DG4": "11",
  /** Physical pin 12: IN4; input. */
  "IN4": "12",
  /** Physical pin 13: GND4; power_in. */
  "GND4": "13",
  /** Physical pin 16: OUT4; power_out. */
  "OUT4_16": "16",
  /** Physical pin 17: OUT4; passive. */
  "OUT4_17": "17",
  /** Physical pin 18: OUT4; passive. */
  "OUT4_18": "18",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7081R extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; open_collector. */
  "DG": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7081S extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; open_collector. */
  "DG": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7091G extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DG; open_collector. */
  "DG": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC_5": "5",
  /** Physical pin 6: VCC; passive. */
  "VCC_6": "6",
  /** Physical pin 7: VCC; passive. */
  "VCC_7": "7",
  /** Physical pin 8: VCC; passive. */
  "VCC_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7111S extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: IFB; output. */
  "IFB": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7121R extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: IFB; output. */
  "IFB": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7125R extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: IFB; output. */
  "IFB": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7141R extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: IFB; output. */
  "IFB": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7142G extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC_1": "1",
  /** Physical pin 2: VCC; passive. */
  "VCC_2": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: IFB1; output. */
  "IFB1": "4",
  /** Physical pin 7: VCC; passive. */
  "VCC_7": "7",
  /** Physical pin 8: VCC; passive. */
  "VCC_8": "8",
  /** Physical pin 9: VCC; passive. */
  "VCC_9": "9",
  /** Physical pin 13: OUT1; power_out. */
  "OUT1_13": "13",
  /** Physical pin 14: OUT1; passive. */
  "OUT1_14": "14",
  /** Physical pin 15: OUT1; passive. */
  "OUT1_15": "15",
  /** Physical pin 16: VCC; passive. */
  "VCC_16": "16",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: IFB2; output. */
  "IFB2": "6",
  /** Physical pin 10: OUT2; power_out. */
  "OUT2_10": "10",
  /** Physical pin 11: OUT2; passive. */
  "OUT2_11": "11",
  /** Physical pin 12: OUT2; passive. */
  "OUT2_12": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS71451G extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: IFB; output. */
  "IFB": "2",
  /** Physical pin 3: OUT; power_out. */
  "OUT_3": "3",
  /** Physical pin 4: OUT; passive. */
  "OUT_4": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC_5": "5",
  /** Physical pin 6: VCC; passive. */
  "VCC_6": "6",
  /** Physical pin 7: VCC; passive. */
  "VCC_7": "7",
  /** Physical pin 8: VCC; passive. */
  "VCC_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7145R extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: IFB; output. */
  "IFB": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS7221R extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: Cb; passive. */
  "Cb": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIPS72211R extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: Cb; passive. */
  "Cb": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIR3313S extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: IFB; output. */
  "IFB": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIR3314S extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: IFB; output. */
  "IFB": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIR3315S extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: IFB; output. */
  "IFB": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIR3316S extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: IFB; output. */
  "IFB": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIR3320S extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: IFB; output. */
  "IFB": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AUIR33402S extends Component.withPins({
  /** Physical pin 1: IFB; output. */
  "IFB": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: Cb; passive. */
  "Cb": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD2222G extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 6: OUT; power_out. */
  "OUT": "6",
  /** Physical pin 4: ~{OC}; open_collector. */
  "~{OC}": "4",
  /** Physical pin 5: ILIM; input. */
  "ILIM": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD2242G extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 6: OUT; power_out. */
  "OUT": "6",
  /** Physical pin 4: ~{OC}; open_collector. */
  "~{OC}": "4",
  /** Physical pin 5: ILIM; input. */
  "ILIM": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD2243G extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 6: OUT; power_out. */
  "OUT": "6",
  /** Physical pin 3: ~{EN}; input. */
  "~{EN}": "3",
  /** Physical pin 4: ~{OC}; open_collector. */
  "~{OC}": "4",
  /** Physical pin 5: ILIM; input. */
  "ILIM": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD48ExxG extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD48KxxG extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VOUT; output. */
  "VOUT": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD48LxxG extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD48xxFVE extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD49ExxG extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD49KxxG extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VOUT; output. */
  "VOUT": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD49LxxG extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BD49xxFVE extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24230RGT extends Component.withPins({
  /** Physical pin 1: TS; passive. */
  "TS": "1",
  /** Physical pin 2: BAT; bidirectional. */
  "BAT_2": "2",
  /** Physical pin 3: BAT; bidirectional. */
  "BAT_3": "3",
  /** Physical pin 4: CE; input. */
  "CE": "4",
  /** Physical pin 5: EN2; input. */
  "EN2": "5",
  /** Physical pin 6: EN1; input. */
  "EN1": "6",
  /** Physical pin 7: PGOOD; open_collector. */
  "PGOOD": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: CHG; open_collector. */
  "CHG": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT_10": "10",
  /** Physical pin 11: OUT; passive. */
  "OUT_11": "11",
  /** Physical pin 12: ILIM; passive. */
  "ILIM": "12",
  /** Physical pin 13: IN; power_in. */
  "IN": "13",
  /** Physical pin 14: TMR; passive. */
  "TMR": "14",
  /** Physical pin 15: TD; input. */
  "TD": "15",
  /** Physical pin 16: ISET; passive. */
  "ISET": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTN8982TA extends Component.withPins({
  /** Physical pin 1: unnamed; power_in. */
  "P1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: INH; input. */
  "INH": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: SR; input. */
  "SR": "5",
  /** Physical pin 6: IS; output. */
  "IS": "6",
  /** Physical pin 7: unnamed; power_in. */
  "P7": "7",
  /** Physical pin 8: unnamed; passive. */
  "P8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS40K2_1EJC extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DEN; input. */
  "DEN": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: OUT; passive. */
  "OUT_8": "8",
  /** Physical pin 9: VS; power_in. */
  "VS": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS50080_1TEA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS443P extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS462TATMA1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS50010_1TAD extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: IS; output. */
  "IS": "3",
  /** Physical pin 4: Vbb; power_in. */
  "Vbb": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS50055_1TMA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: OUT; passive. */
  "OUT_2": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: Vbb; power_in. */
  "Vbb": "4",
  /** Physical pin 5: IS; output. */
  "IS": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS50055_1TMC extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: OUT; passive. */
  "OUT_2": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: Vbb; power_in. */
  "Vbb": "4",
  /** Physical pin 5: IS; output. */
  "IS": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS50080_1TEB extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS50080_1TMA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: OUT; passive. */
  "OUT_2": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: Vbb; power_in. */
  "Vbb": "4",
  /** Physical pin 5: IS; output. */
  "IS": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS50080_1TMC extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: OUT; passive. */
  "OUT_2": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: Vbb; power_in. */
  "Vbb": "4",
  /** Physical pin 5: IS; output. */
  "IS": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS50085_1TMA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: OUT; passive. */
  "OUT_2": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: Vbb; power_in. */
  "Vbb": "4",
  /** Physical pin 5: IS; output. */
  "IS": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS5012SDA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS5014SDA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS5016SDA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS5030_1EJA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DEN; input. */
  "DEN": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: OUT; passive. */
  "OUT_8": "8",
  /** Physical pin 9: VS; power_in. */
  "VS": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS5045_1EJA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DEN; input. */
  "DEN": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: OUT; passive. */
  "OUT_8": "8",
  /** Physical pin 9: VS; power_in. */
  "VS": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS5090_1EJA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DEN; input. */
  "DEN": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: OUT; passive. */
  "OUT_8": "8",
  /** Physical pin 9: VS; power_in. */
  "VS": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS5200_1EJA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DEN; input. */
  "DEN": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: OUT; passive. */
  "OUT_8": "8",
  /** Physical pin 9: VS; power_in. */
  "VS": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS6133D extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS6142D extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS6143D extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS6163D extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: Vbb; power_in. */
  "Vbb": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS6200_1EJA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DEN; input. */
  "DEN": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: OUT; passive. */
  "OUT_8": "8",
  /** Physical pin 9: VS; power_in. */
  "VS": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS7004_1EPP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DEN; input. */
  "DEN": "3",
  /** Physical pin 4: IS; output. */
  "IS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: OUT; power_out. */
  "OUT_8": "8",
  /** Physical pin 9: OUT; passive. */
  "OUT_9": "9",
  /** Physical pin 10: OUT; passive. */
  "OUT_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: OUT; passive. */
  "OUT_12": "12",
  /** Physical pin 13: OUT; passive. */
  "OUT_13": "13",
  /** Physical pin 14: OUT; passive. */
  "OUT_14": "14",
  /** Physical pin 15: VS; power_in. */
  "VS": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS724G extends Component.withPins({
  /** Physical pin 1: VBB; power_in. */
  "VBB_1": "1",
  /** Physical pin 2: GND1/2; power_in. */
  "GND1/2": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: ST1/2; open_collector. */
  "ST1/2": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: GND3/4; power_in. */
  "GND3/4": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: ST3/4; open_collector. */
  "ST3/4": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: VBB; passive. */
  "VBB_10": "10",
  /** Physical pin 11: VBB; passive. */
  "VBB_11": "11",
  /** Physical pin 12: VBB; passive. */
  "VBB_12": "12",
  /** Physical pin 13: OUT4; open_emitter. */
  "OUT4": "13",
  /** Physical pin 14: OUT3; open_emitter. */
  "OUT3": "14",
  /** Physical pin 15: VBB; passive. */
  "VBB_15": "15",
  /** Physical pin 16: VBB; passive. */
  "VBB_16": "16",
  /** Physical pin 17: OUT2; open_emitter. */
  "OUT2": "17",
  /** Physical pin 18: OUT1; open_emitter. */
  "OUT1": "18",
  /** Physical pin 19: VBB; passive. */
  "VBB_19": "19",
  /** Physical pin 20: VBB; passive. */
  "VBB_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS711L1 extends Component.withPins({
  /** Physical pin 1: VBB; power_in. */
  "VBB_1": "1",
  /** Physical pin 2: GND1/2; power_in. */
  "GND1/2": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: ST1/2; open_collector. */
  "ST1/2": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: GND3/4; power_in. */
  "GND3/4": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: ST3/4; open_collector. */
  "ST3/4": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: VBB; passive. */
  "VBB_10": "10",
  /** Physical pin 11: VBB; passive. */
  "VBB_11": "11",
  /** Physical pin 12: VBB; passive. */
  "VBB_12": "12",
  /** Physical pin 13: OUT4; open_emitter. */
  "OUT4": "13",
  /** Physical pin 14: OUT3; open_emitter. */
  "OUT3": "14",
  /** Physical pin 15: VBB; passive. */
  "VBB_15": "15",
  /** Physical pin 16: VBB; passive. */
  "VBB_16": "16",
  /** Physical pin 17: OUT2; open_emitter. */
  "OUT2": "17",
  /** Physical pin 18: OUT1; open_emitter. */
  "OUT1": "18",
  /** Physical pin 19: VBB; passive. */
  "VBB_19": "19",
  /** Physical pin 20: VBB; passive. */
  "VBB_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS712N1 extends Component.withPins({
  /** Physical pin 1: VBB; power_in. */
  "VBB_1": "1",
  /** Physical pin 2: GND1/2; power_in. */
  "GND1/2": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: ST1/2; open_collector. */
  "ST1/2": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: GND3/4; power_in. */
  "GND3/4": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: ST3/4; open_collector. */
  "ST3/4": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: VBB; passive. */
  "VBB_10": "10",
  /** Physical pin 11: VBB; passive. */
  "VBB_11": "11",
  /** Physical pin 12: VBB; passive. */
  "VBB_12": "12",
  /** Physical pin 13: OUT4; open_emitter. */
  "OUT4": "13",
  /** Physical pin 14: OUT3; open_emitter. */
  "OUT3": "14",
  /** Physical pin 15: VBB; passive. */
  "VBB_15": "15",
  /** Physical pin 16: VBB; passive. */
  "VBB_16": "16",
  /** Physical pin 17: OUT2; open_emitter. */
  "OUT2": "17",
  /** Physical pin 18: OUT1; open_emitter. */
  "OUT1": "18",
  /** Physical pin 19: VBB; passive. */
  "VBB_19": "19",
  /** Physical pin 20: VBB; passive. */
  "VBB_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS716G extends Component.withPins({
  /** Physical pin 1: VBB; power_in. */
  "VBB_1": "1",
  /** Physical pin 2: GND1/2; power_in. */
  "GND1/2": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: ST1/2; open_collector. */
  "ST1/2": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: GND3/4; power_in. */
  "GND3/4": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: ST3/4; open_collector. */
  "ST3/4": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: VBB; passive. */
  "VBB_10": "10",
  /** Physical pin 11: VBB; passive. */
  "VBB_11": "11",
  /** Physical pin 12: VBB; passive. */
  "VBB_12": "12",
  /** Physical pin 13: OUT4; open_emitter. */
  "OUT4": "13",
  /** Physical pin 14: OUT3; open_emitter. */
  "OUT3": "14",
  /** Physical pin 15: VBB; passive. */
  "VBB_15": "15",
  /** Physical pin 16: VBB; passive. */
  "VBB_16": "16",
  /** Physical pin 17: OUT2; open_emitter. */
  "OUT2": "17",
  /** Physical pin 18: OUT1; open_emitter. */
  "OUT1": "18",
  /** Physical pin 19: VBB; passive. */
  "VBB_19": "19",
  /** Physical pin 20: VBB; passive. */
  "VBB_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS716GB extends Component.withPins({
  /** Physical pin 1: VBB; power_in. */
  "VBB_1": "1",
  /** Physical pin 2: GND1/2; power_in. */
  "GND1/2": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: ST1/2; open_collector. */
  "ST1/2": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: GND3/4; power_in. */
  "GND3/4": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: ST3/4; open_collector. */
  "ST3/4": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: VBB; passive. */
  "VBB_10": "10",
  /** Physical pin 11: VBB; passive. */
  "VBB_11": "11",
  /** Physical pin 12: VBB; passive. */
  "VBB_12": "12",
  /** Physical pin 13: OUT4; open_emitter. */
  "OUT4": "13",
  /** Physical pin 14: OUT3; open_emitter. */
  "OUT3": "14",
  /** Physical pin 15: VBB; passive. */
  "VBB_15": "15",
  /** Physical pin 16: VBB; passive. */
  "VBB_16": "16",
  /** Physical pin 17: OUT2; open_emitter. */
  "OUT2": "17",
  /** Physical pin 18: OUT1; open_emitter. */
  "OUT1": "18",
  /** Physical pin 19: VBB; passive. */
  "VBB_19": "19",
  /** Physical pin 20: VBB; passive. */
  "VBB_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTS721L1 extends Component.withPins({
  /** Physical pin 1: VBB; power_in. */
  "VBB_1": "1",
  /** Physical pin 2: GND1/2; power_in. */
  "GND1/2": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: ST1/2; open_collector. */
  "ST1/2": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: GND3/4; power_in. */
  "GND3/4": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: ST3/4; open_collector. */
  "ST3/4": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: VBB; passive. */
  "VBB_10": "10",
  /** Physical pin 11: VBB; passive. */
  "VBB_11": "11",
  /** Physical pin 12: VBB; passive. */
  "VBB_12": "12",
  /** Physical pin 13: OUT4; open_emitter. */
  "OUT4": "13",
  /** Physical pin 14: OUT3; open_emitter. */
  "OUT3": "14",
  /** Physical pin 15: VBB; passive. */
  "VBB_15": "15",
  /** Physical pin 16: VBB; passive. */
  "VBB_16": "16",
  /** Physical pin 17: OUT2; open_emitter. */
  "OUT2": "17",
  /** Physical pin 18: OUT1; open_emitter. */
  "OUT1": "18",
  /** Physical pin 19: VBB; passive. */
  "VBB_19": "19",
  /** Physical pin 20: VBB; passive. */
  "VBB_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP002DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP003DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP004DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP005DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP006DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP007DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP008DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP009DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP012DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP013DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP014DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP015DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP016DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP017DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP018DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP019DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP200DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAP300DG extends Component.withPins({
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1210 extends Component.withPins({
  /** Physical pin 1: VCCO; power_out. */
  "VCCO": "1",
  /** Physical pin 2: VBAT1; power_in. */
  "VBAT1": "2",
  /** Physical pin 3: TOL; input. */
  "TOL": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{CE}; input. */
  "~{CE}": "5",
  /** Physical pin 6: ~{CEO}; output. */
  "~{CEO}": "6",
  /** Physical pin 7: VBAT2; power_in. */
  "VBAT2": "7",
  /** Physical pin 8: VCCI; power_in. */
  "VCCI": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EPC23102 extends Component.withPins({
  /** Physical pin 1: HSIN; input. */
  "HSIN": "1",
  /** Physical pin 2: LSIN; input. */
  "LSIN": "2",
  /** Physical pin 3: SD; input. */
  "SD": "3",
  /** Physical pin 4: VDD; passive. */
  "VDD": "4",
  /** Physical pin 5: VDRV; power_in. */
  "VDRV": "5",
  /** Physical pin 6: RDRV; passive. */
  "RDRV": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: PGND; power_in. */
  "PGND": "8",
  /** Physical pin 9: SW; power_out. */
  "SW": "9",
  /** Physical pin 10: VIN; power_in. */
  "VIN": "10",
  /** Physical pin 11: VPHASE; input. */
  "VPHASE": "11",
  /** Physical pin 12: RBOOT; passive. */
  "RBOOT": "12",
  /** Physical pin 13: VBOOT; input. */
  "VBOOT": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EPC23103 extends Component.withPins({
  /** Physical pin 1: HSIN; input. */
  "HSIN": "1",
  /** Physical pin 2: LSIN; input. */
  "LSIN": "2",
  /** Physical pin 3: SD; input. */
  "SD": "3",
  /** Physical pin 4: VDD; passive. */
  "VDD": "4",
  /** Physical pin 5: VDRV; power_in. */
  "VDRV": "5",
  /** Physical pin 6: RDRV; passive. */
  "RDRV": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: PGND; power_in. */
  "PGND": "8",
  /** Physical pin 9: SW; power_out. */
  "SW": "9",
  /** Physical pin 10: VIN; power_in. */
  "VIN": "10",
  /** Physical pin 11: VPHASE; input. */
  "VPHASE": "11",
  /** Physical pin 12: RBOOT; passive. */
  "RBOOT": "12",
  /** Physical pin 13: VBOOT; input. */
  "VBOOT": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EPC23104 extends Component.withPins({
  /** Physical pin 1: HSIN; input. */
  "HSIN": "1",
  /** Physical pin 2: LSIN; input. */
  "LSIN": "2",
  /** Physical pin 3: SD; input. */
  "SD": "3",
  /** Physical pin 4: VDD; passive. */
  "VDD": "4",
  /** Physical pin 5: VDRV; power_in. */
  "VDRV": "5",
  /** Physical pin 6: RDRV; passive. */
  "RDRV": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: PGND; power_in. */
  "PGND": "8",
  /** Physical pin 9: SW; power_out. */
  "SW": "9",
  /** Physical pin 10: VIN; power_in. */
  "VIN": "10",
  /** Physical pin 11: VPHASE; input. */
  "VPHASE": "11",
  /** Physical pin 12: RBOOT; passive. */
  "RBOOT": "12",
  /** Physical pin 13: VBOOT; input. */
  "VBOOT": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FPF2000 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FLAGB; open_collector. */
  "FLAGB": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FPF2001 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FLAGB; open_collector. */
  "FLAGB": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FPF2002 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FLAGB; open_collector. */
  "FLAGB": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FPF2003 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FLAGB; open_collector. */
  "FLAGB": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FPF2004 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FLAGB; open_collector. */
  "FLAGB": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FPF2005 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FLAGB; open_collector. */
  "FLAGB": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FPF2006 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FLAGB; open_collector. */
  "FLAGB": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FPF2007 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FLAGB; open_collector. */
  "FLAGB": "3",
  /** Physical pin 4: ON; input. */
  "ON": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HF81 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: L1; passive. */
  "L1_2": "2",
  /** Physical pin 3: L1; passive. */
  "L1_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: L2; passive. */
  "L2_6": "6",
  /** Physical pin 7: L2; passive. */
  "L2_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA3221 extends Component.withPins({
  /** Physical pin 1: IN-3; input. */
  "IN-3": "1",
  /** Physical pin 2: IN+3; input. */
  "IN+3": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VS; power_in. */
  "VS": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: WARNING; open_collector. */
  "WARNING": "8",
  /** Physical pin 9: CRITICAL; open_collector. */
  "CRITICAL": "9",
  /** Physical pin 10: PV; open_collector. */
  "PV": "10",
  /** Physical pin 11: IN-1; input. */
  "IN-1": "11",
  /** Physical pin 12: IN+1; input. */
  "IN+1": "12",
  /** Physical pin 13: TC; open_collector. */
  "TC": "13",
  /** Physical pin 14: IN-2; input. */
  "IN-2": "14",
  /** Physical pin 15: IN+2; input. */
  "IN+2": "15",
  /** Physical pin 16: VPU; power_in. */
  "VPU": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6011PBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6011RPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6011SPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6021PBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6021RPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6021SPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6031PBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6031RPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6031SPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6041GPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DG; bidirectional. */
  "DG": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: unnamed; power_in. */
  "P6": "6",
  /** Physical pin 7: unnamed; power_in. */
  "P7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6041PBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6041RPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS6041SPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS7091GPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DG; bidirectional. */
  "DG": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: unnamed; power_in. */
  "P6": "6",
  /** Physical pin 7: unnamed; power_in. */
  "P7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS7091PBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS7091SPBF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: DG; bidirectional. */
  "DG": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS25751L extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VTH; input. */
  "VTH": "3",
  /** Physical pin 4: ENN; input. */
  "ENN": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITS5215 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 3: ST1; open_collector. */
  "ST1": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: ST2; open_collector. */
  "ST2": "5",
  /** Physical pin 6: VBB; power_in. */
  "VBB_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: OUT2; open_emitter. */
  "OUT2": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: OUT1; open_emitter. */
  "OUT1": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: VBB; passive. */
  "VBB_12": "12",
  /** Physical pin 13: VBB; passive. */
  "VBB_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5050_1 extends Component.withPins({
  /** Physical pin 1: VS; passive. */
  "VS": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OFF; input. */
  "OFF": "3",
  /** Physical pin 4: IN; input. */
  "IN": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: OUT; input. */
  "OUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5050_2 extends Component.withPins({
  /** Physical pin 1: ~{FGD}; open_collector. */
  "~{FGD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OFF; input. */
  "OFF": "3",
  /** Physical pin 4: IN; input. */
  "IN": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: OUT; input. */
  "OUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5051 extends Component.withPins({
  /** Physical pin 1: Line; power_in. */
  "Line": "1",
  /** Physical pin 2: VCC; passive. */
  "VCC": "2",
  /** Physical pin 3: OFF; input. */
  "OFF": "3",
  /** Physical pin 4: ~{FGD}; open_collector. */
  "~{FGD}": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: INN; input. */
  "INN": "6",
  /** Physical pin 7: INP; power_in. */
  "INP": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5060 extends Component.withPins({
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 1: SENSE; input. */
  "SENSE": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: OVP; input. */
  "OVP": "3",
  /** Physical pin 4: UVLO; input. */
  "UVLO": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 7: TIMER; input. */
  "TIMER": "7",
  /** Physical pin 8: ~{PGD}; open_collector. */
  "~{PGD}": "8",
  /** Physical pin 9: OUT; input. */
  "OUT": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM50672NPAR extends Component.withPins({
  /** Physical pin 6: VEE; power_in. */
  "VEE": "6",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 3: UVLO; input. */
  "UVLO": "3",
  /** Physical pin 4: OVLO; input. */
  "OVLO": "4",
  /** Physical pin 5: PWR; input. */
  "PWR": "5",
  /** Physical pin 8: TIMER; input. */
  "TIMER": "8",
  /** Physical pin 9: SENSE; input. */
  "SENSE": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 12: OUT; input. */
  "OUT": "12",
  /** Physical pin 14: PGD; open_collector. */
  "PGD": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5067MM_1 extends Component.withPins({
  /** Physical pin 5: VEE; power_in. */
  "VEE": "5",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: UVLO; input. */
  "UVLO": "2",
  /** Physical pin 3: OVLO; input. */
  "OVLO": "3",
  /** Physical pin 4: PWR; input. */
  "PWR": "4",
  /** Physical pin 6: TIMER; input. */
  "TIMER": "6",
  /** Physical pin 7: SENSE; input. */
  "SENSE": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
  /** Physical pin 9: OUT; input. */
  "OUT": "9",
  /** Physical pin 10: PGD; open_collector. */
  "PGD": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5067MM_2 extends Component.withPins({
  /** Physical pin 5: VEE; power_in. */
  "VEE": "5",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: UVLO; input. */
  "UVLO": "2",
  /** Physical pin 3: OVLO; input. */
  "OVLO": "3",
  /** Physical pin 4: PWR; input. */
  "PWR": "4",
  /** Physical pin 6: TIMER; input. */
  "TIMER": "6",
  /** Physical pin 7: SENSE; input. */
  "SENSE": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
  /** Physical pin 9: OUT; input. */
  "OUT": "9",
  /** Physical pin 10: PGD; open_collector. */
  "PGD": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5067MMX_2 extends Component.withPins({
  /** Physical pin 5: VEE; power_in. */
  "VEE": "5",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: UVLO; input. */
  "UVLO": "2",
  /** Physical pin 3: OVLO; input. */
  "OVLO": "3",
  /** Physical pin 4: PWR; input. */
  "PWR": "4",
  /** Physical pin 6: TIMER; input. */
  "TIMER": "6",
  /** Physical pin 7: SENSE; input. */
  "SENSE": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
  /** Physical pin 9: OUT; input. */
  "OUT": "9",
  /** Physical pin 10: PGD; open_collector. */
  "PGD": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5067MWX_1 extends Component.withPins({
  /** Physical pin 6: VEE; power_in. */
  "VEE": "6",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 3: UVLO; input. */
  "UVLO": "3",
  /** Physical pin 4: OVLO; input. */
  "OVLO": "4",
  /** Physical pin 5: PWR; input. */
  "PWR": "5",
  /** Physical pin 8: TIMER; input. */
  "TIMER": "8",
  /** Physical pin 9: SENSE; input. */
  "SENSE": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 12: OUT; input. */
  "OUT": "12",
  /** Physical pin 14: PGD; open_collector. */
  "PGD": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5069MM_1 extends Component.withPins({
  /** Physical pin 6: TIMER; input. */
  "TIMER": "6",
  /** Physical pin 1: SENSE; input. */
  "SENSE": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: UVLO; input. */
  "UVLO": "3",
  /** Physical pin 4: OVLO; input. */
  "OVLO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 7: PWR; input. */
  "PWR": "7",
  /** Physical pin 8: PGD; open_collector. */
  "PGD": "8",
  /** Physical pin 9: OUT; input. */
  "OUT": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5069MM_2 extends Component.withPins({
  /** Physical pin 6: TIMER; input. */
  "TIMER": "6",
  /** Physical pin 1: SENSE; input. */
  "SENSE": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: UVLO; input. */
  "UVLO": "3",
  /** Physical pin 4: OVLO; input. */
  "OVLO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 7: PWR; input. */
  "PWR": "7",
  /** Physical pin 8: PGD; open_collector. */
  "PGD": "8",
  /** Physical pin 9: OUT; input. */
  "OUT": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM66100DCK extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{CE}; input. */
  "~{CE}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: ST; open_collector. */
  "ST": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM74700 extends Component.withPins({
  /** Physical pin 1: VCAP; passive. */
  "VCAP": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: CATHODE; input. */
  "CATHODE": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: ANODE; power_in. */
  "ANODE": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM74701_Q1 extends Component.withPins({
  /** Physical pin 1: GATE; output. */
  "GATE": "1",
  /** Physical pin 2: ANODE; power_in. */
  "ANODE": "2",
  /** Physical pin 3: VCAP; passive. */
  "VCAP": "3",
  /** Physical pin 4: SW; output. */
  "SW": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
  /** Physical pin 7: N.C.; no_connect. */
  "N.C.": "7",
  /** Physical pin 8: CATHODE; power_out. */
  "CATHODE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMG3410 extends Component.withPins({
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
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: unnamed; passive. */
  "P11": "11",
  /** Physical pin 12: unnamed; passive. */
  "P12": "12",
  /** Physical pin 13: unnamed; passive. */
  "P13": "13",
  /** Physical pin 14: unnamed; passive. */
  "P14": "14",
  /** Physical pin 15: unnamed; passive. */
  "P15": "15",
  /** Physical pin 16: unnamed; passive. */
  "P16": "16",
  /** Physical pin 17: unnamed; passive. */
  "P17": "17",
  /** Physical pin 18: unnamed; passive. */
  "P18": "18",
  /** Physical pin 19: unnamed; passive. */
  "P19": "19",
  /** Physical pin 20: unnamed; passive. */
  "P20": "20",
  /** Physical pin 21: unnamed; passive. */
  "P21": "21",
  /** Physical pin 22: unnamed; passive. */
  "P22": "22",
  /** Physical pin 23: unnamed; passive. */
  "P23": "23",
  /** Physical pin 24: unnamed; passive. */
  "P24": "24",
  /** Physical pin 25: LDO5V; power_out. */
  "LDO5V": "25",
  /** Physical pin 26: VNEG; power_in. */
  "VNEG": "26",
  /** Physical pin 27: VDD; power_in. */
  "VDD": "27",
  /** Physical pin 28: BBSW; passive. */
  "BBSW": "28",
  /** Physical pin 29: ~{LPM}; input. */
  "~{LPM}": "29",
  /** Physical pin 30: RDRV; passive. */
  "RDRV": "30",
  /** Physical pin 31: IN; input. */
  "IN": "31",
  /** Physical pin 32: ~{FAULT}; output. */
  "~{FAULT}": "32",
  /** Physical pin 33: unnamed; passive. */
  "P33": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMG5200 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HS; passive. */
  "HS": "3",
  /** Physical pin 4: HI; input. */
  "HI": "4",
  /** Physical pin 5: LI; input. */
  "LI": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: unnamed; passive. */
  "P8": "8",
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1641_1 extends Component.withPins({
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 1: ON; input. */
  "ON": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: PWRGD; open_collector. */
  "PWRGD": "3",
  /** Physical pin 5: TIMER; input. */
  "TIMER": "5",
  /** Physical pin 6: GATE; output. */
  "GATE": "6",
  /** Physical pin 7: Sense; input. */
  "Sense": "7",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1641_2 extends Component.withPins({
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 1: ON; input. */
  "ON": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: PWRGD; open_collector. */
  "PWRGD": "3",
  /** Physical pin 5: TIMER; input. */
  "TIMER": "5",
  /** Physical pin 6: GATE; output. */
  "GATE": "6",
  /** Physical pin 7: Sense; input. */
  "Sense": "7",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT4230xDD extends Component.withPins({
  /** Physical pin 1: IN2; power_in. */
  "IN2": "1",
  /** Physical pin 2: TG2; output. */
  "TG2": "2",
  /** Physical pin 3: BG2; output. */
  "BG2": "3",
  /** Physical pin 4: BG1; output. */
  "BG1": "4",
  /** Physical pin 5: OUTN; power_in. */
  "OUTN_5": "5",
  /** Physical pin 6: OUTP; power_in. */
  "OUTP": "6",
  /** Physical pin 7: TG1; output. */
  "TG1": "7",
  /** Physical pin 8: IN1; power_in. */
  "IN1": "8",
  /** Physical pin 9: OUTN; passive. */
  "OUTN_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT4320xDD_1 extends Component.withPins({
  /** Physical pin 1: IN2; power_in. */
  "IN2": "1",
  /** Physical pin 2: TG2; output. */
  "TG2": "2",
  /** Physical pin 3: BG2; output. */
  "BG2": "3",
  /** Physical pin 4: BG1; output. */
  "BG1": "4",
  /** Physical pin 5: OUTN; power_in. */
  "OUTN_5": "5",
  /** Physical pin 6: OUTP; power_in. */
  "OUTP": "6",
  /** Physical pin 7: TG1; output. */
  "TG1": "7",
  /** Physical pin 8: IN1; power_in. */
  "IN1": "8",
  /** Physical pin 9: OUTN; passive. */
  "OUTN_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT4321xUF extends Component.withPins({
  /** Physical pin 1: TG36; output. */
  "TG36": "1",
  /** Physical pin 2: IN36; power_in. */
  "IN36": "2",
  /** Physical pin 3: IN45; power_in. */
  "IN45": "3",
  /** Physical pin 4: TG45; output. */
  "TG45": "4",
  /** Physical pin 5: TG78; output. */
  "TG78": "5",
  /** Physical pin 6: IN78; power_in. */
  "IN78": "6",
  /** Physical pin 7: BG78; output. */
  "BG78": "7",
  /** Physical pin 8: BG45; output. */
  "BG45": "8",
  /** Physical pin 10: ~{EN}; output. */
  "~{EN}": "10",
  /** Physical pin 11: EN; output. */
  "EN": "11",
  /** Physical pin 12: OUTP; power_in. */
  "OUTP": "12",
  /** Physical pin 13: BG36; output. */
  "BG36": "13",
  /** Physical pin 14: BG12; output. */
  "BG12": "14",
  /** Physical pin 15: IN12; power_in. */
  "IN12": "15",
  /** Physical pin 16: TG12; output. */
  "TG12": "16",
  /** Physical pin [9,17]: OUTN; power_in. */
  "OUTN": "[9,17]",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4242xUHF extends Component.withPins({
  /** Physical pin 1: AUXON1; input. */
  "AUXON1": "1",
  /** Physical pin 2: 3V_OUT1; open_collector. */
  "3V_OUT1": "2",
  /** Physical pin 3: 3V_GATE1; output. */
  "3V_GATE1": "3",
  /** Physical pin 4: 3V_SENSE1; input. */
  "3V_SENSE1": "4",
  /** Physical pin 5: 3V_IN1; power_in. */
  "3V_IN1": "5",
  /** Physical pin 6: AUXIN1; input. */
  "AUXIN1": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: AUXIN2; input. */
  "AUXIN2": "8",
  /** Physical pin 9: 3V_IN2; power_in. */
  "3V_IN2": "9",
  /** Physical pin 10: 3V_SENSE2; input. */
  "3V_SENSE2": "10",
  /** Physical pin 11: 3V_GATE2; output. */
  "3V_GATE2": "11",
  /** Physical pin 12: 3V_OUT2; open_collector. */
  "3V_OUT2": "12",
  /** Physical pin 13: AUXON2; input. */
  "AUXON2": "13",
  /** Physical pin 14: ON2; input. */
  "ON2": "14",
  /** Physical pin 15: FON2; input. */
  "FON2": "15",
  /** Physical pin 16: ~{EN2}; input. */
  "~{EN2}": "16",
  /** Physical pin 17: ~{FAULT2}; open_collector. */
  "~{FAULT2}": "17",
  /** Physical pin 18: ~{AUXFAULT2}; open_collector. */
  "~{AUXFAULT2}": "18",
  /** Physical pin 19: ~{PGOOD2}; open_collector. */
  "~{PGOOD2}": "19",
  /** Physical pin 20: ~{AUXPGOOD2}; open_collector. */
  "~{AUXPGOOD2}": "20",
  /** Physical pin 21: 12V_IN2; power_in. */
  "12V_IN2": "21",
  /** Physical pin 22: 12V_SENSE2; input. */
  "12V_SENSE2": "22",
  /** Physical pin 23: 12V_GATE2; output. */
  "12V_GATE2": "23",
  /** Physical pin 24: 12V_OUT2; open_collector. */
  "12V_OUT2": "24",
  /** Physical pin 25: AUXOUT2; output. */
  "AUXOUT2": "25",
  /** Physical pin 26: GND; power_in. */
  "GND": "26",
  /** Physical pin 27: AUXOUT1; output. */
  "AUXOUT1": "27",
  /** Physical pin 28: 12V_OUT1; open_collector. */
  "12V_OUT1": "28",
  /** Physical pin 29: 12V_GATE1; output. */
  "12V_GATE1": "29",
  /** Physical pin 30: 12V_SENSE1; input. */
  "12V_SENSE1": "30",
  /** Physical pin 31: 12V_IN1; power_in. */
  "12V_IN1": "31",
  /** Physical pin 32: ~{AUXPGOOD1}; open_collector. */
  "~{AUXPGOOD1}": "32",
  /** Physical pin 33: ~{PGOOD1}; open_collector. */
  "~{PGOOD1}": "33",
  /** Physical pin 34: ~{AUXFAULT1}; open_collector. */
  "~{AUXFAULT1}": "34",
  /** Physical pin 35: ~{FAULT1}; open_collector. */
  "~{FAULT1}": "35",
  /** Physical pin 36: ~{EN1}; input. */
  "~{EN1}": "36",
  /** Physical pin 37: FON1; input. */
  "FON1": "37",
  /** Physical pin 38: ON1; input. */
  "ON1": "38",
  /** Physical pin 39: EPAD; power_in. */
  "EPAD": "39",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4357DCB extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: GATE; output. */
  "GATE": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: Vdd; power_in. */
  "Vdd": "6",
  /** Physical pin 7: PAD; power_in. */
  "PAD": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4357MS8 extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GATE; output. */
  "GATE": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: Vdd; power_in. */
  "Vdd": "7",
  /** Physical pin 8: OUT; input. */
  "OUT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4359_DCB extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: GATE; output. */
  "GATE": "2",
  /** Physical pin 3: SRC; input. */
  "SRC": "3",
  /** Physical pin 4: IN; power_in. */
  "IN": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: Vss; power_in. */
  "Vss": "6",
  /** Physical pin 7: Pad; power_in. */
  "Pad": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4359_MS8 extends Component.withPins({
  /** Physical pin 1: GATE; output. */
  "GATE": "1",
  /** Physical pin 2: SRC; input. */
  "SRC": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: IN; power_in. */
  "IN": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: Vss; power_in. */
  "Vss": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: OUT; input. */
  "OUT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364CDE extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: DGATE; output. */
  "DGATE": "3",
  /** Physical pin 4: SOURCE; input. */
  "SOURCE": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: UV; input. */
  "UV": "8",
  /** Physical pin 9: OV; input. */
  "OV": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: ~{FLT}; open_collector. */
  "~{FLT}": "11",
  /** Physical pin 12: ENOUT; open_collector. */
  "ENOUT": "12",
  /** Physical pin 13: TMR; input. */
  "TMR": "13",
  /** Physical pin 14: FB; input. */
  "FB": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364CMS extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: DGATE; output. */
  "DGATE": "4",
  /** Physical pin 5: SOURCE; input. */
  "SOURCE": "5",
  /** Physical pin 6: HGATE; output. */
  "HGATE": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: UV; input. */
  "UV": "10",
  /** Physical pin 11: OV; input. */
  "OV": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: ~{FLT}; open_collector. */
  "~{FLT}": "13",
  /** Physical pin 14: ENOUT; open_collector. */
  "ENOUT": "14",
  /** Physical pin 15: TMR; input. */
  "TMR": "15",
  /** Physical pin 16: FB; input. */
  "FB": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364CS extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: DGATE; output. */
  "DGATE": "4",
  /** Physical pin 5: SOURCE; input. */
  "SOURCE": "5",
  /** Physical pin 6: HGATE; output. */
  "HGATE": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: UV; input. */
  "UV": "10",
  /** Physical pin 11: OV; input. */
  "OV": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: ~{FLT}; open_collector. */
  "~{FLT}": "13",
  /** Physical pin 14: ENOUT; open_collector. */
  "ENOUT": "14",
  /** Physical pin 15: TMR; input. */
  "TMR": "15",
  /** Physical pin 16: FB; input. */
  "FB": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364HDE extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: DGATE; output. */
  "DGATE": "3",
  /** Physical pin 4: SOURCE; input. */
  "SOURCE": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: UV; input. */
  "UV": "8",
  /** Physical pin 9: OV; input. */
  "OV": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: ~{FLT}; open_collector. */
  "~{FLT}": "11",
  /** Physical pin 12: ENOUT; open_collector. */
  "ENOUT": "12",
  /** Physical pin 13: TMR; input. */
  "TMR": "13",
  /** Physical pin 14: FB; input. */
  "FB": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364HMS extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: DGATE; output. */
  "DGATE": "4",
  /** Physical pin 5: SOURCE; input. */
  "SOURCE": "5",
  /** Physical pin 6: HGATE; output. */
  "HGATE": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: UV; input. */
  "UV": "10",
  /** Physical pin 11: OV; input. */
  "OV": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: ~{FLT}; open_collector. */
  "~{FLT}": "13",
  /** Physical pin 14: ENOUT; open_collector. */
  "ENOUT": "14",
  /** Physical pin 15: TMR; input. */
  "TMR": "15",
  /** Physical pin 16: FB; input. */
  "FB": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364HS extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: DGATE; output. */
  "DGATE": "4",
  /** Physical pin 5: SOURCE; input. */
  "SOURCE": "5",
  /** Physical pin 6: HGATE; output. */
  "HGATE": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: UV; input. */
  "UV": "10",
  /** Physical pin 11: OV; input. */
  "OV": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: ~{FLT}; open_collector. */
  "~{FLT}": "13",
  /** Physical pin 14: ENOUT; open_collector. */
  "ENOUT": "14",
  /** Physical pin 15: TMR; input. */
  "TMR": "15",
  /** Physical pin 16: FB; input. */
  "FB": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364IDE extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: DGATE; output. */
  "DGATE": "3",
  /** Physical pin 4: SOURCE; input. */
  "SOURCE": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: UV; input. */
  "UV": "8",
  /** Physical pin 9: OV; input. */
  "OV": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: ~{FLT}; open_collector. */
  "~{FLT}": "11",
  /** Physical pin 12: ENOUT; open_collector. */
  "ENOUT": "12",
  /** Physical pin 13: TMR; input. */
  "TMR": "13",
  /** Physical pin 14: FB; input. */
  "FB": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364IMS extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: DGATE; output. */
  "DGATE": "4",
  /** Physical pin 5: SOURCE; input. */
  "SOURCE": "5",
  /** Physical pin 6: HGATE; output. */
  "HGATE": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: UV; input. */
  "UV": "10",
  /** Physical pin 11: OV; input. */
  "OV": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: ~{FLT}; open_collector. */
  "~{FLT}": "13",
  /** Physical pin 14: ENOUT; open_collector. */
  "ENOUT": "14",
  /** Physical pin 15: TMR; input. */
  "TMR": "15",
  /** Physical pin 16: FB; input. */
  "FB": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4364IS extends Component.withPins({
  /** Physical pin 1: OUT; input. */
  "OUT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: DGATE; output. */
  "DGATE": "4",
  /** Physical pin 5: SOURCE; input. */
  "SOURCE": "5",
  /** Physical pin 6: HGATE; output. */
  "HGATE": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: UV; input. */
  "UV": "10",
  /** Physical pin 11: OV; input. */
  "OV": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: ~{FLT}; open_collector. */
  "~{FLT}": "13",
  /** Physical pin 14: ENOUT; open_collector. */
  "ENOUT": "14",
  /** Physical pin 15: TMR; input. */
  "TMR": "15",
  /** Physical pin 16: FB; input. */
  "FB": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4365DDB extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: OV; input. */
  "OV": "2",
  /** Physical pin 3: UV; input. */
  "UV": "3",
  /** Physical pin 4: Vin; power_in. */
  "Vin": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: Vout; input. */
  "Vout": "6",
  /** Physical pin 7: ~{FAULT}; open_collector. */
  "~{FAULT}": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4365DDB_1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: OV; input. */
  "OV": "2",
  /** Physical pin 3: UV; input. */
  "UV": "3",
  /** Physical pin 4: Vin; power_in. */
  "Vin": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: Vout; input. */
  "Vout": "6",
  /** Physical pin 7: ~{FAULT}; open_collector. */
  "~{FAULT}": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4365TS8 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: UV; input. */
  "UV": "2",
  /** Physical pin 3: OV; input. */
  "OV": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: ~{FAULT}; open_collector. */
  "~{FAULT}": "6",
  /** Physical pin 7: Vout; input. */
  "Vout": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4365TS8_1 extends Component.withPins({
  /** Physical pin 1: Vin; power_in. */
  "Vin": "1",
  /** Physical pin 2: UV; input. */
  "UV": "2",
  /** Physical pin 3: OV; input. */
  "OV": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: ~{FAULT}; open_collector. */
  "~{FAULT}": "6",
  /** Physical pin 7: Vout; input. */
  "Vout": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4365xTS8 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: UV; input. */
  "UV": "2",
  /** Physical pin 3: OV; input. */
  "OV": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: ~{FAULT}; open_collector. */
  "~{FAULT}": "6",
  /** Physical pin 7: VOUT; input. */
  "VOUT": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4370xDE extends Component.withPins({
  /** Physical pin 1: ~{EN2}; input. */
  "~{EN2}": "1",
  /** Physical pin 2: RANGE; passive. */
  "RANGE": "2",
  /** Physical pin 3: COMP; passive. */
  "COMP": "3",
  /** Physical pin 4: VIN2; power_in. */
  "VIN2": "4",
  /** Physical pin 5: GATE2; output. */
  "GATE2": "5",
  /** Physical pin 6: CPO2; passive. */
  "CPO2": "6",
  /** Physical pin 7: OUT2; input. */
  "OUT2": "7",
  /** Physical pin 8: FETON2; open_collector. */
  "FETON2": "8",
  /** Physical pin 9: FETON1; open_collector. */
  "FETON1": "9",
  /** Physical pin 10: OUT1; input. */
  "OUT1": "10",
  /** Physical pin 11: CPO1; passive. */
  "CPO1": "11",
  /** Physical pin 12: GATE1; output. */
  "GATE1": "12",
  /** Physical pin 13: VIN1; power_in. */
  "VIN1": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: ~{EN1}; input. */
  "~{EN1}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4370xMS extends Component.withPins({
  /** Physical pin 1: ~{EN2}; input. */
  "~{EN2}": "1",
  /** Physical pin 2: RANGE; passive. */
  "RANGE": "2",
  /** Physical pin 3: COMP; passive. */
  "COMP": "3",
  /** Physical pin 4: VIN2; power_in. */
  "VIN2": "4",
  /** Physical pin 5: GATE2; output. */
  "GATE2": "5",
  /** Physical pin 6: CPO2; passive. */
  "CPO2": "6",
  /** Physical pin 7: OUT2; input. */
  "OUT2": "7",
  /** Physical pin 8: FETON2; open_collector. */
  "FETON2": "8",
  /** Physical pin 9: FETON1; open_collector. */
  "FETON1": "9",
  /** Physical pin 10: OUT1; input. */
  "OUT1": "10",
  /** Physical pin 11: CPO1; passive. */
  "CPO1": "11",
  /** Physical pin 12: GATE1; output. */
  "GATE1": "12",
  /** Physical pin 13: VIN1; power_in. */
  "VIN1": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: ~{EN1}; input. */
  "~{EN1}": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4412xS6 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: CTL; input. */
  "CTL": "3",
  /** Physical pin 4: STAT; open_collector. */
  "STAT": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: SENSE; input. */
  "SENSE": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4417CGN extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: ~{SHDN}; input. */
  "~{SHDN}": "2",
  /** Physical pin 3: HYS; input. */
  "HYS": "3",
  /** Physical pin 4: UV1; input. */
  "UV1": "4",
  /** Physical pin 5: OV1; input. */
  "OV1": "5",
  /** Physical pin 6: UV2; input. */
  "UV2": "6",
  /** Physical pin 7: OV2; input. */
  "OV2": "7",
  /** Physical pin 8: UV3; input. */
  "UV3": "8",
  /** Physical pin 9: OV3; input. */
  "OV3": "9",
  /** Physical pin 10: ~{VALID1}; open_collector. */
  "~{VALID1}": "10",
  /** Physical pin 11: ~{VALID2}; open_collector. */
  "~{VALID2}": "11",
  /** Physical pin 12: ~{VALID3}; open_collector. */
  "~{VALID3}": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: CAS; output. */
  "CAS": "14",
  /** Physical pin 15: VOUT; output. */
  "VOUT": "15",
  /** Physical pin 16: G3; output. */
  "G3": "16",
  /** Physical pin 17: VS3; output. */
  "VS3": "17",
  /** Physical pin 18: G2; output. */
  "G2": "18",
  /** Physical pin 19: VS2; output. */
  "VS2": "19",
  /** Physical pin 20: G1; output. */
  "G1": "20",
  /** Physical pin 21: VS1; output. */
  "VS1": "21",
  /** Physical pin 22: V3; input. */
  "V3": "22",
  /** Physical pin 23: V2; input. */
  "V2": "23",
  /** Physical pin 24: V1; input. */
  "V1": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4417CUF extends Component.withPins({
  /** Physical pin 1: UV1; input. */
  "UV1": "1",
  /** Physical pin 2: OV1; input. */
  "OV1": "2",
  /** Physical pin 3: UV2; input. */
  "UV2": "3",
  /** Physical pin 4: OV2; input. */
  "OV2": "4",
  /** Physical pin 5: UV3; input. */
  "UV3": "5",
  /** Physical pin 6: OV3; input. */
  "OV3": "6",
  /** Physical pin 7: ~{VALID1}; open_collector. */
  "~{VALID1}": "7",
  /** Physical pin 8: ~{VALID2}; open_collector. */
  "~{VALID2}": "8",
  /** Physical pin 9: ~{VALID3}; open_collector. */
  "~{VALID3}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: CAS; output. */
  "CAS": "11",
  /** Physical pin 12: VOUT; output. */
  "VOUT": "12",
  /** Physical pin 13: G3; output. */
  "G3": "13",
  /** Physical pin 14: VS3; output. */
  "VS3": "14",
  /** Physical pin 15: G2; output. */
  "G2": "15",
  /** Physical pin 16: VS2; output. */
  "VS2": "16",
  /** Physical pin 17: G1; output. */
  "G1": "17",
  /** Physical pin 18: VS1; output. */
  "VS1": "18",
  /** Physical pin 19: V3; input. */
  "V3": "19",
  /** Physical pin 20: V2; input. */
  "V2": "20",
  /** Physical pin 21: V1; input. */
  "V1": "21",
  /** Physical pin 22: EN; input. */
  "EN": "22",
  /** Physical pin 23: ~{SHDN}; input. */
  "~{SHDN}": "23",
  /** Physical pin 24: HYS; input. */
  "HYS": "24",
  /** Physical pin 25: PAD; power_in. */
  "PAD": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4417HGN extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: ~{SHDN}; input. */
  "~{SHDN}": "2",
  /** Physical pin 3: HYS; input. */
  "HYS": "3",
  /** Physical pin 4: UV1; input. */
  "UV1": "4",
  /** Physical pin 5: OV1; input. */
  "OV1": "5",
  /** Physical pin 6: UV2; input. */
  "UV2": "6",
  /** Physical pin 7: OV2; input. */
  "OV2": "7",
  /** Physical pin 8: UV3; input. */
  "UV3": "8",
  /** Physical pin 9: OV3; input. */
  "OV3": "9",
  /** Physical pin 10: ~{VALID1}; open_collector. */
  "~{VALID1}": "10",
  /** Physical pin 11: ~{VALID2}; open_collector. */
  "~{VALID2}": "11",
  /** Physical pin 12: ~{VALID3}; open_collector. */
  "~{VALID3}": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: CAS; output. */
  "CAS": "14",
  /** Physical pin 15: VOUT; output. */
  "VOUT": "15",
  /** Physical pin 16: G3; output. */
  "G3": "16",
  /** Physical pin 17: VS3; output. */
  "VS3": "17",
  /** Physical pin 18: G2; output. */
  "G2": "18",
  /** Physical pin 19: VS2; output. */
  "VS2": "19",
  /** Physical pin 20: G1; output. */
  "G1": "20",
  /** Physical pin 21: VS1; output. */
  "VS1": "21",
  /** Physical pin 22: V3; input. */
  "V3": "22",
  /** Physical pin 23: V2; input. */
  "V2": "23",
  /** Physical pin 24: V1; input. */
  "V1": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4417HUF extends Component.withPins({
  /** Physical pin 1: UV1; input. */
  "UV1": "1",
  /** Physical pin 2: OV1; input. */
  "OV1": "2",
  /** Physical pin 3: UV2; input. */
  "UV2": "3",
  /** Physical pin 4: OV2; input. */
  "OV2": "4",
  /** Physical pin 5: UV3; input. */
  "UV3": "5",
  /** Physical pin 6: OV3; input. */
  "OV3": "6",
  /** Physical pin 7: ~{VALID1}; open_collector. */
  "~{VALID1}": "7",
  /** Physical pin 8: ~{VALID2}; open_collector. */
  "~{VALID2}": "8",
  /** Physical pin 9: ~{VALID3}; open_collector. */
  "~{VALID3}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: CAS; output. */
  "CAS": "11",
  /** Physical pin 12: VOUT; output. */
  "VOUT": "12",
  /** Physical pin 13: G3; output. */
  "G3": "13",
  /** Physical pin 14: VS3; output. */
  "VS3": "14",
  /** Physical pin 15: G2; output. */
  "G2": "15",
  /** Physical pin 16: VS2; output. */
  "VS2": "16",
  /** Physical pin 17: G1; output. */
  "G1": "17",
  /** Physical pin 18: VS1; output. */
  "VS1": "18",
  /** Physical pin 19: V3; input. */
  "V3": "19",
  /** Physical pin 20: V2; input. */
  "V2": "20",
  /** Physical pin 21: V1; input. */
  "V1": "21",
  /** Physical pin 22: EN; input. */
  "EN": "22",
  /** Physical pin 23: ~{SHDN}; input. */
  "~{SHDN}": "23",
  /** Physical pin 24: HYS; input. */
  "HYS": "24",
  /** Physical pin 25: PAD; power_in. */
  "PAD": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4417IGN extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: ~{SHDN}; input. */
  "~{SHDN}": "2",
  /** Physical pin 3: HYS; input. */
  "HYS": "3",
  /** Physical pin 4: UV1; input. */
  "UV1": "4",
  /** Physical pin 5: OV1; input. */
  "OV1": "5",
  /** Physical pin 6: UV2; input. */
  "UV2": "6",
  /** Physical pin 7: OV2; input. */
  "OV2": "7",
  /** Physical pin 8: UV3; input. */
  "UV3": "8",
  /** Physical pin 9: OV3; input. */
  "OV3": "9",
  /** Physical pin 10: ~{VALID1}; open_collector. */
  "~{VALID1}": "10",
  /** Physical pin 11: ~{VALID2}; open_collector. */
  "~{VALID2}": "11",
  /** Physical pin 12: ~{VALID3}; open_collector. */
  "~{VALID3}": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: CAS; output. */
  "CAS": "14",
  /** Physical pin 15: VOUT; output. */
  "VOUT": "15",
  /** Physical pin 16: G3; output. */
  "G3": "16",
  /** Physical pin 17: VS3; output. */
  "VS3": "17",
  /** Physical pin 18: G2; output. */
  "G2": "18",
  /** Physical pin 19: VS2; output. */
  "VS2": "19",
  /** Physical pin 20: G1; output. */
  "G1": "20",
  /** Physical pin 21: VS1; output. */
  "VS1": "21",
  /** Physical pin 22: V3; input. */
  "V3": "22",
  /** Physical pin 23: V2; input. */
  "V2": "23",
  /** Physical pin 24: V1; input. */
  "V1": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4417IUF extends Component.withPins({
  /** Physical pin 1: UV1; input. */
  "UV1": "1",
  /** Physical pin 2: OV1; input. */
  "OV1": "2",
  /** Physical pin 3: UV2; input. */
  "UV2": "3",
  /** Physical pin 4: OV2; input. */
  "OV2": "4",
  /** Physical pin 5: UV3; input. */
  "UV3": "5",
  /** Physical pin 6: OV3; input. */
  "OV3": "6",
  /** Physical pin 7: ~{VALID1}; open_collector. */
  "~{VALID1}": "7",
  /** Physical pin 8: ~{VALID2}; open_collector. */
  "~{VALID2}": "8",
  /** Physical pin 9: ~{VALID3}; open_collector. */
  "~{VALID3}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: CAS; output. */
  "CAS": "11",
  /** Physical pin 12: VOUT; output. */
  "VOUT": "12",
  /** Physical pin 13: G3; output. */
  "G3": "13",
  /** Physical pin 14: VS3; output. */
  "VS3": "14",
  /** Physical pin 15: G2; output. */
  "G2": "15",
  /** Physical pin 16: VS2; output. */
  "VS2": "16",
  /** Physical pin 17: G1; output. */
  "G1": "17",
  /** Physical pin 18: VS1; output. */
  "VS1": "18",
  /** Physical pin 19: V3; input. */
  "V3": "19",
  /** Physical pin 20: V2; input. */
  "V2": "20",
  /** Physical pin 21: V1; input. */
  "V1": "21",
  /** Physical pin 22: EN; input. */
  "EN": "22",
  /** Physical pin 23: ~{SHDN}; input. */
  "~{SHDN}": "23",
  /** Physical pin 24: HYS; input. */
  "HYS": "24",
  /** Physical pin 25: PAD; power_in. */
  "PAD": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX14919xUP extends Component.withPins({
  /** Physical pin 1: INRUSH; input. */
  "INRUSH": "1",
  /** Physical pin 2: OUT1; open_collector. */
  "OUT1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: OUT2; open_collector. */
  "OUT2": "5",
  /** Physical pin 6: OUT3; open_collector. */
  "OUT3": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: OUT4; open_collector. */
  "OUT4": "9",
  /** Physical pin 10: VL; power_in. */
  "VL": "10",
  /** Physical pin 11: RCLIM; passive. */
  "RCLIM": "11",
  /** Physical pin 12: REV; open_collector. */
  "REV": "12",
  /** Physical pin 13: ~{FAULT}; open_collector. */
  "~{FAULT}": "13",
  /** Physical pin 14: IN4; input. */
  "IN4": "14",
  /** Physical pin 15: IN3; input. */
  "IN3": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: IN2; input. */
  "IN2": "17",
  /** Physical pin 18: IN1; input. */
  "IN1": "18",
  /** Physical pin 19: V5; power_out. */
  "V5": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX8586 extends Component.withPins({
  /** Physical pin 1: SEL; input. */
  "SEL": "1",
  /** Physical pin 2: ISET; input. */
  "ISET": "2",
  /** Physical pin 3: ON; input. */
  "ON": "3",
  /** Physical pin 4: IN; power_in. */
  "IN": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
  /** Physical pin 6: ~{FAULT}; open_collector. */
  "~{FAULT}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: ENRESET; input. */
  "ENRESET": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9611 extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: RS+; input. */
  "RS+": "2",
  /** Physical pin 3: RS-; input. */
  "RS-": "3",
  /** Physical pin 4: SET; input. */
  "SET": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: A1; input. */
  "A1": "8",
  /** Physical pin 9: A0; input. */
  "A0": "9",
  /** Physical pin 10: V_{CC}; power_in. */
  "V_{CC}": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9612 extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: RS+; input. */
  "RS+": "2",
  /** Physical pin 3: RS-; input. */
  "RS-": "3",
  /** Physical pin 4: SET; input. */
  "SET": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: A1; input. */
  "A1": "8",
  /** Physical pin 9: A0; input. */
  "A0": "9",
  /** Physical pin 10: V_{CC}; power_in. */
  "V_{CC}": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2007YM6 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: ILIM; passive. */
  "ILIM": "4",
  /** Physical pin 5: CSLEW; passive. */
  "CSLEW": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2008YM6 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: ILIM; passive. */
  "ILIM": "4",
  /** Physical pin 5: CSLEW; passive. */
  "CSLEW": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2017YM6 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: ILIM; passive. */
  "ILIM": "4",
  /** Physical pin 5: CSLEW; passive. */
  "CSLEW": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2018YM6 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: ILIM; passive. */
  "ILIM": "4",
  /** Physical pin 5: CSLEW; passive. */
  "CSLEW": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2025_1YM extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: FLG; open_collector. */
  "FLG": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: IN; power_in. */
  "IN": "7",
  /** Physical pin 8: OUT; power_out. */
  "OUT_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2025_1YMM extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: FLG; open_collector. */
  "FLG": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: IN; power_in. */
  "IN": "7",
  /** Physical pin 8: OUT; power_out. */
  "OUT_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2025_2YM extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: FLG; open_collector. */
  "FLG": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: IN; power_in. */
  "IN": "7",
  /** Physical pin 8: OUT; power_out. */
  "OUT_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2025_2YMM extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: FLG; open_collector. */
  "FLG": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: OUT; passive. */
  "OUT_6": "6",
  /** Physical pin 7: IN; power_in. */
  "IN": "7",
  /** Physical pin 8: OUT; power_out. */
  "OUT_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2026_1BN extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: FLGA; output. */
  "FLGA": "2",
  /** Physical pin 3: FLGB; output. */
  "FLGB": "3",
  /** Physical pin 4: ENB; input. */
  "ENB": "4",
  /** Physical pin 5: OUTB; power_out. */
  "OUTB": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN; power_in. */
  "IN": "7",
  /** Physical pin 8: OUTA; power_out. */
  "OUTA": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2026_1xM extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: FLGA; output. */
  "FLGA": "2",
  /** Physical pin 3: FLGB; output. */
  "FLGB": "3",
  /** Physical pin 4: ENB; input. */
  "ENB": "4",
  /** Physical pin 5: OUTB; power_out. */
  "OUTB": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN; power_in. */
  "IN": "7",
  /** Physical pin 8: OUTA; power_out. */
  "OUTA": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2026_2BN extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: FLGA; output. */
  "FLGA": "2",
  /** Physical pin 3: FLGB; output. */
  "FLGB": "3",
  /** Physical pin 4: ENB; input. */
  "ENB": "4",
  /** Physical pin 5: OUTB; power_out. */
  "OUTB": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN; power_in. */
  "IN": "7",
  /** Physical pin 8: OUTA; power_out. */
  "OUTA": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2026_2xM extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: FLGA; output. */
  "FLGA": "2",
  /** Physical pin 3: FLGB; output. */
  "FLGB": "3",
  /** Physical pin 4: ENB; input. */
  "ENB": "4",
  /** Physical pin 5: OUTB; power_out. */
  "OUTB": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN; power_in. */
  "IN": "7",
  /** Physical pin 8: OUTA; power_out. */
  "OUTA": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2090_1YM5 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: FAULT; open_collector. */
  "FAULT": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2090_2YM5 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: FAULT; open_collector. */
  "FAULT": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2091_1YM5 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: FAULT; open_collector. */
  "FAULT": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2091_2YM5 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: FAULT; open_collector. */
  "FAULT": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2544_2YM extends Component.withPins({
  /** Physical pin 1: ~{EN}; input. */
  "~{EN}": "1",
  /** Physical pin 2: FLG; open_collector. */
  "FLG": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: ILIM; input. */
  "ILIM": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: OUT; output. */
  "OUT_6": "6",
  /** Physical pin 7: IN; passive. */
  "IN": "7",
  /** Physical pin 8: OUT; passive. */
  "OUT_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2587_1 extends Component.withPins({
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 1: ON; input. */
  "ON": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: PWRGD; open_collector. */
  "PWRGD": "3",
  /** Physical pin 5: TIMER; input. */
  "TIMER": "5",
  /** Physical pin 6: GATE; output. */
  "GATE": "6",
  /** Physical pin 7: Sense; input. */
  "Sense": "7",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC2587R_1 extends Component.withPins({
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 1: ON; input. */
  "ON": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: PWRGD; open_collector. */
  "PWRGD": "3",
  /** Physical pin 5: TIMER; input. */
  "TIMER": "5",
  /** Physical pin 6: GATE; output. */
  "GATE": "6",
  /** Physical pin 7: Sense; input. */
  "Sense": "7",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC94090YC6 extends Component.withPins({
  /** Physical pin 1: OUT; passive. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: IN; passive. */
  "IN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC94091YC6 extends Component.withPins({
  /** Physical pin 1: OUT; passive. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: IN; passive. */
  "IN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC94092YC6 extends Component.withPins({
  /** Physical pin 1: OUT; passive. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: IN; passive. */
  "IN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC94093YC6 extends Component.withPins({
  /** Physical pin 1: OUT; passive. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: IN; passive. */
  "IN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC94094YC6 extends Component.withPins({
  /** Physical pin 1: OUT; passive. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: IN; passive. */
  "IN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC94095YC6 extends Component.withPins({
  /** Physical pin 1: OUT; passive. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: IN; passive. */
  "IN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MP5087A extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: ILIM; passive. */
  "ILIM": "4",
  /** Physical pin 5: SS; passive. */
  "SS": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN_6": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT_7": "7",
  /** Physical pin 8: VOUT; passive. */
  "VOUT_8": "8",
  /** Physical pin 9: VOUT; passive. */
  "VOUT_9": "9",
  /** Physical pin 10: VOUT; passive. */
  "VOUT_10": "10",
  /** Physical pin 11: VIN; passive. */
  "VIN_11": "11",
  /** Physical pin 12: PG; output. */
  "PG": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NIS5420MTxTXG extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: dV/dt; passive. */
  "dV/dt": "2",
  /** Physical pin 3: Enable/Fault; tri_state. */
  "Enable/Fault": "3",
  /** Physical pin 4: I_{Limit}; passive. */
  "I_{Limit}": "4",
  /** Physical pin 5: I_{SENSE}; passive. */
  "I_{SENSE}": "5",
  /** Physical pin 6: Source; power_out. */
  "Source_6": "6",
  /** Physical pin 7: Source; passive. */
  "Source_7": "7",
  /** Physical pin 8: Source; passive. */
  "Source_8": "8",
  /** Physical pin 9: Source; passive. */
  "Source_9": "9",
  /** Physical pin 10: Source; passive. */
  "Source_10": "10",
  /** Physical pin 11: V_{CC}; power_in. */
  "V_{CC}": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NPC45560_H extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN_1": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SR; input. */
  "SR": "5",
  /** Physical pin 6: PG; open_collector. */
  "PG": "6",
  /** Physical pin 7: BLEED; input. */
  "BLEED": "7",
  /** Physical pin 8: VOUT; passive. */
  "VOUT_8": "8",
  /** Physical pin 9: VOUT; passive. */
  "VOUT_9": "9",
  /** Physical pin 10: VOUT; passive. */
  "VOUT_10": "10",
  /** Physical pin 11: VOUT; passive. */
  "VOUT_11": "11",
  /** Physical pin 12: VOUT; power_out. */
  "VOUT_12": "12",
  /** Physical pin 13: VIN; power_in. */
  "VIN_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NPC45560_L extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN_1": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SR; input. */
  "SR": "5",
  /** Physical pin 6: PG; open_collector. */
  "PG": "6",
  /** Physical pin 7: BLEED; input. */
  "BLEED": "7",
  /** Physical pin 8: VOUT; passive. */
  "VOUT_8": "8",
  /** Physical pin 9: VOUT; passive. */
  "VOUT_9": "9",
  /** Physical pin 10: VOUT; passive. */
  "VOUT_10": "10",
  /** Physical pin 11: VOUT; passive. */
  "VOUT_11": "11",
  /** Physical pin 12: VOUT; power_out. */
  "VOUT_12": "12",
  /** Physical pin 13: VIN; power_in. */
  "VIN_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PD70224 extends Component.withPins({
  /** Physical pin 1: unnamed; power_in. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: IN2B; passive. */
  "IN2B_4": "4",
  /** Physical pin 5: IN2B; passive. */
  "IN2B_5": "5",
  /** Physical pin 6: IN2B; passive. */
  "IN2B_6": "6",
  /** Physical pin 7: IN2B; passive. */
  "IN2B_7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: IN2A; passive. */
  "IN2A_11": "11",
  /** Physical pin 12: IN2A; passive. */
  "IN2A_12": "12",
  /** Physical pin 13: SUPP_SA; input. */
  "SUPP_SA": "13",
  /** Physical pin 14: SUPP_SB; input. */
  "SUPP_SB": "14",
  /** Physical pin 15: IN1A; passive. */
  "IN1A_15": "15",
  /** Physical pin 16: IN1A; passive. */
  "IN1A_16": "16",
  /** Physical pin 17: unnamed; passive. */
  "P17": "17",
  /** Physical pin 18: unnamed; passive. */
  "P18": "18",
  /** Physical pin 19: unnamed; passive. */
  "P19": "19",
  /** Physical pin 20: IN1B; passive. */
  "IN1B_20": "20",
  /** Physical pin 21: IN1B; passive. */
  "IN1B_21": "21",
  /** Physical pin 22: IN1B; passive. */
  "IN1B_22": "22",
  /** Physical pin 23: IN1B; passive. */
  "IN1B_23": "23",
  /** Physical pin 24: unnamed; passive. */
  "P24": "24",
  /** Physical pin 25: unnamed; passive. */
  "P25": "25",
  /** Physical pin 26: unnamed; passive. */
  "P26": "26",
  /** Physical pin 27: IN1A; passive. */
  "IN1A_27": "27",
  /** Physical pin 28: IN1A; passive. */
  "IN1A_28": "28",
  /** Physical pin 29: WA_EN; input. */
  "WA_EN": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC": "30",
  /** Physical pin 31: IN2A; passive. */
  "IN2A_31": "31",
  /** Physical pin 32: IN2A; passive. */
  "IN2A_32": "32",
  /** Physical pin 33: unnamed; passive. */
  "P33": "33",
  /** Physical pin 34: unnamed; passive. */
  "P34": "34",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RT9701 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: VIN/EN; input. */
  "VIN/EN": "4",
  /** Physical pin 5: VOUT; passive. */
  "VOUT_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RT9742AGJ5F extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RT9742ANGJ5F extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RT9742BGJ5F extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RT9742BNGJ5F extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLG}; open_collector. */
  "~{FLG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RT9742SNGV extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: VOUT; power_out. */
  "VOUT": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN6505ADBV extends Component.withPins({
  /** Physical pin 1: D1; open_collector. */
  "D1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: D2; open_collector. */
  "D2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN6505BDBV extends Component.withPins({
  /** Physical pin 1: D1; open_collector. */
  "D1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: D2; open_collector. */
  "D2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN6507DGQ extends Component.withPins({
  /** Physical pin 4: EN/UVLO; input. */
  "EN/UVLO": "4",
  /** Physical pin 5: DC; passive. */
  "DC": "5",
  /** Physical pin 6: SR; passive. */
  "SR": "6",
  /** Physical pin 8: SS/ILIM; passive. */
  "SS/ILIM": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 1: SW1; open_collector. */
  "SW1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 10: SW2; open_collector. */
  "SW2": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM6600 extends Component.withPins({
  /** Physical pin 1: Vcc; power_in. */
  "Vcc": "1",
  /** Physical pin 2: ~{SR}; input. */
  "~{SR}": "2",
  /** Physical pin 3: Vref; output. */
  "Vref": "3",
  /** Physical pin 4: PS_HOLD; input. */
  "PS_HOLD": "4",
  /** Physical pin 5: C_SRD; input. */
  "C_SRD": "5",
  /** Physical pin 6: ~{PB}; input. */
  "~{PB}": "6",
  /** Physical pin 7: ~{VCC}_LO; open_collector. */
  "~{VCC}_LO": "7",
  /** Physical pin 8: ~{PB}_OUT; open_collector. */
  "~{PB}_OUT": "8",
  /** Physical pin 9: ~{EN}/EN; output. */
  "~{EN}/EN": "9",
  /** Physical pin 10: ~{RST}; open_collector. */
  "~{RST}": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM6601 extends Component.withPins({
  /** Physical pin 1: Vcc; power_in. */
  "Vcc": "1",
  /** Physical pin 2: ~{SR}; input. */
  "~{SR}": "2",
  /** Physical pin 3: Vref; output. */
  "Vref": "3",
  /** Physical pin 4: PS_HOLD; input. */
  "PS_HOLD": "4",
  /** Physical pin 5: C_SRD; input. */
  "C_SRD": "5",
  /** Physical pin 6: ~{PB}; input. */
  "~{PB}": "6",
  /** Physical pin 7: ~{VCC}_LO; open_collector. */
  "~{VCC}_LO": "7",
  /** Physical pin 8: ~{PB}_OUT; open_collector. */
  "~{PB}_OUT": "8",
  /** Physical pin 9: ~{EN}/EN; output. */
  "~{EN}/EN": "9",
  /** Physical pin 10: ~{RST}; open_collector. */
  "~{RST}": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiP32431DR3 extends Component.withPins({
  /** Physical pin 1: OUT; passive. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: ON; input. */
  "ON": "3",
  /** Physical pin 4: IN; passive. */
  "IN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiP32432DR3 extends Component.withPins({
  /** Physical pin 1: OUT; passive. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: ~{ON}; input. */
  "~{ON}": "3",
  /** Physical pin 4: IN; passive. */
  "IN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiP32510DT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: OUT; passive. */
  "OUT_2": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: IN; power_in. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiP32508DT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: OUT; passive. */
  "OUT_2": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: IN; power_in. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiP32509DT extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: OUT; passive. */
  "OUT_2": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: IN; power_in. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TEA1708T extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: TMR2; passive. */
  "TMR2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: TMR1; passive. */
  "TMR1": "4",
  /** Physical pin 5: HV2; passive. */
  "HV2": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: HV1; passive. */
  "HV1": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE8102SG extends Component.withPins({
  /** Physical pin 1: IN2; input. */
  "IN2": "1",
  /** Physical pin 2: MOSI; input. */
  "MOSI": "2",
  /** Physical pin 3: OUT2; open_collector. */
  "OUT2": "3",
  /** Physical pin 4: ISx/ST1/Fault; passive. */
  "ISx/ST1/Fault": "4",
  /** Physical pin 5: SCLK; input. */
  "SCLK": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: IN1; input. */
  "IN1": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
  /** Physical pin 9: OUT1; open_collector. */
  "OUT1": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: MISO/ST2; passive. */
  "MISO/ST2": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE8104E extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: IN2; input. */
  "IN2": "2",
  /** Physical pin 3: OUT1; open_collector. */
  "OUT1": "3",
  /** Physical pin 4: VS; power_in. */
  "VS": "4",
  /** Physical pin 5: ~{RST}; input. */
  "~{RST}": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: PRG; input. */
  "PRG": "7",
  /** Physical pin 8: OUT2; open_collector. */
  "OUT2": "8",
  /** Physical pin 9: IN1; input. */
  "IN1": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: IN4; input. */
  "IN4": "12",
  /** Physical pin 13: OUT3; open_collector. */
  "OUT3": "13",
  /** Physical pin 14: ~{FAULT}; output. */
  "~{FAULT}": "14",
  /** Physical pin 15: MISO; passive. */
  "MISO": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
  /** Physical pin 17: MOSI; input. */
  "MOSI": "17",
  /** Physical pin 18: OUT4; open_collector. */
  "OUT4": "18",
  /** Physical pin 19: IN3; input. */
  "IN3": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2041B extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{OC}; open_collector. */
  "~{OC}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2042D extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN1; power_in. */
  "IN1": "2",
  /** Physical pin 3: ~{EN1}; input. */
  "~{EN1}": "3",
  /** Physical pin 4: ~{EN2}; input. */
  "~{EN2}": "4",
  /** Physical pin 5: ~{OC2}; open_collector. */
  "~{OC2}": "5",
  /** Physical pin 6: OUT2; power_out. */
  "OUT2": "6",
  /** Physical pin 7: OUT1; power_out. */
  "OUT1": "7",
  /** Physical pin 8: ~{OC1}; open_collector. */
  "~{OC1}": "8",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2044D extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: IN1; power_in. */
  "IN1": "2",
  /** Physical pin 3: ~{EN1}; input. */
  "~{EN1}": "3",
  /** Physical pin 4: ~{EN2}; input. */
  "~{EN2}": "4",
  /** Physical pin 13: ~{OC2}; open_collector. */
  "~{OC2}": "13",
  /** Physical pin 14: OUT2; power_out. */
  "OUT2": "14",
  /** Physical pin 15: OUT1; power_out. */
  "OUT1": "15",
  /** Physical pin 16: ~{OC1}; open_collector. */
  "~{OC1}": "16",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: IN2; power_in. */
  "IN2": "6",
  /** Physical pin 7: ~{EN3}; input. */
  "~{EN3}": "7",
  /** Physical pin 8: ~{EN4}; input. */
  "~{EN4}": "8",
  /** Physical pin 9: ~{OC4}; open_collector. */
  "~{OC4}": "9",
  /** Physical pin 10: OUT4; power_out. */
  "OUT4": "10",
  /** Physical pin 11: OUT3; power_out. */
  "OUT3": "11",
  /** Physical pin 12: ~{OC3}; open_collector. */
  "~{OC3}": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2051CDBV extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLT}; open_collector. */
  "~{FLT}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2054D extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: IN1; passive. */
  "IN1": "2",
  /** Physical pin 3: EN1; input. */
  "EN1": "3",
  /** Physical pin 4: EN2; input. */
  "EN2": "4",
  /** Physical pin 13: ~{OC2}; open_collector. */
  "~{OC2}": "13",
  /** Physical pin 14: OUT2; passive. */
  "OUT2": "14",
  /** Physical pin 15: OUT1; passive. */
  "OUT1": "15",
  /** Physical pin 16: ~{OC1}; open_collector. */
  "~{OC1}": "16",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: IN2; passive. */
  "IN2": "6",
  /** Physical pin 7: EN3; input. */
  "EN3": "7",
  /** Physical pin 8: EN4; input. */
  "EN4": "8",
  /** Physical pin 9: ~{OC4}; open_collector. */
  "~{OC4}": "9",
  /** Physical pin 10: OUT4; passive. */
  "OUT4": "10",
  /** Physical pin 11: OUT3; passive. */
  "OUT3": "11",
  /** Physical pin 12: ~{OC3}; open_collector. */
  "~{OC3}": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2065CDBV extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLT}; open_collector. */
  "~{FLT}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2065CDBVx_2 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLT}; open_collector. */
  "~{FLT}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2069CDBV extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLT}; open_collector. */
  "~{FLT}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2116DRL extends Component.withPins({
  /** Physical pin 7: VOUT; power_out. */
  "VOUT_7": "7",
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VOUT; power_out. */
  "VOUT_2": "2",
  /** Physical pin 3: VIN1; power_in. */
  "VIN1": "3",
  /** Physical pin 4: PR1; input. */
  "PR1": "4",
  /** Physical pin 5: MODE; input. */
  "MODE": "5",
  /** Physical pin 6: VIN2; power_in. */
  "VIN2": "6",
  /** Physical pin 8: ST; open_collector. */
  "ST": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS22810DBV extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN/UVLO; input. */
  "EN/UVLO": "3",
  /** Physical pin 4: CT; output. */
  "CT": "4",
  /** Physical pin 5: QOD; open_collector. */
  "QOD": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS22810DRV extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: QOD; open_collector. */
  "QOD": "2",
  /** Physical pin 3: CT; output. */
  "CT": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: EN/UVLO; input. */
  "EN/UVLO": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS22917DBV extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ON; input. */
  "ON": "3",
  /** Physical pin 4: CT; output. */
  "CT": "4",
  /** Physical pin 5: QOD; open_collector. */
  "QOD": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS22917LDBV extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{ON}; input. */
  "~{ON}": "3",
  /** Physical pin 4: CT; output. */
  "CT": "4",
  /** Physical pin 5: QOD; open_collector. */
  "QOD": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS22919DCK extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ON; input. */
  "ON": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: QOD; open_collector. */
  "QOD": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS22929D extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: ON; input. */
  "ON": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN_4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS22993 extends Component.withPins({
  /** Physical pin 1: VOUT2; passive. */
  "VOUT2": "1",
  /** Physical pin 2: VIN2; passive. */
  "VIN2": "2",
  /** Physical pin 3: VBIAS; power_in. */
  "VBIAS": "3",
  /** Physical pin 4: VIN1; passive. */
  "VIN1": "4",
  /** Physical pin 5: VOUT1; passive. */
  "VOUT1": "5",
  /** Physical pin 6: ADD1; input. */
  "ADD1": "6",
  /** Physical pin 7: ON4; input. */
  "ON4": "7",
  /** Physical pin 8: ON3; input. */
  "ON3": "8",
  /** Physical pin 9: ON2; input. */
  "ON2": "9",
  /** Physical pin 10: ON1; input. */
  "ON1": "10",
  /** Physical pin 11: VOUT4; passive. */
  "VOUT4": "11",
  /** Physical pin 12: VIN4; passive. */
  "VIN4": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: VIN3; passive. */
  "VIN3": "14",
  /** Physical pin 15: VOUT3; passive. */
  "VOUT3": "15",
  /** Physical pin 16: ADD2; input. */
  "ADD2": "16",
  /** Physical pin 17: SCL; input. */
  "SCL": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: ADD3; input. */
  "ADD3": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2412D extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: RSET; passive. */
  "RSET": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: A; input. */
  "A": "7",
  /** Physical pin 8: BYP; passive. */
  "BYP": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2412PW extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: RSET; passive. */
  "RSET": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: A; input. */
  "A": "7",
  /** Physical pin 8: BYP; passive. */
  "BYP": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2419D extends Component.withPins({
  /** Physical pin 1: RSET; passive. */
  "RSET": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: A; input. */
  "A": "7",
  /** Physical pin 8: BYP; passive. */
  "BYP": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2419PW extends Component.withPins({
  /** Physical pin 1: RSET; passive. */
  "RSET": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: A; input. */
  "A": "7",
  /** Physical pin 8: BYP; passive. */
  "BYP": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2592xx extends Component.withPins({
  /** Physical pin 1: dV/dT; output. */
  "dV/dT": "1",
  /** Physical pin 2: EN/UVLO; input. */
  "EN/UVLO": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN_3": "3",
  /** Physical pin 4: VIN; passive. */
  "VIN_4": "4",
  /** Physical pin 5: VIN; passive. */
  "VIN_5": "5",
  /** Physical pin 6: OUT; power_out. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: OUT; passive. */
  "OUT_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: ILIM; output. */
  "ILIM": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2596xx extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: dV/dT; passive. */
  "dV/dT": "2",
  /** Physical pin 3: EN/UVLO; input. */
  "EN/UVLO": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
  /** Physical pin 6: ~{FLT}; open_collector. */
  "~{FLT}": "6",
  /** Physical pin 7: ILM; output. */
  "ILM": "7",
  /** Physical pin 8: OVLO/OVCSEL; input. */
  "OVLO/OVCSEL": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26600PWP extends Component.withPins({
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: UVLO; input. */
  "UVLO": "3",
  /** Physical pin 5: OVP; input. */
  "OVP": "5",
  /** Physical pin 6: MODE; input. */
  "MODE": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: RTN; passive. */
  "RTN_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: IMON; output. */
  "IMON": "10",
  /** Physical pin 11: ILIM; passive. */
  "ILIM": "11",
  /** Physical pin 12: dVdT; passive. */
  "dVdT": "12",
  /** Physical pin 14: ~{FLT}; open_collector. */
  "~{FLT}": "14",
  /** Physical pin 15: OUT; power_out. */
  "OUT_15": "15",
  /** Physical pin 16: OUT; passive. */
  "OUT_16": "16",
  /** Physical pin 17: RTN; passive. */
  "RTN_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26400PWP extends Component.withPins({
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: UVLO; input. */
  "UVLO": "3",
  /** Physical pin 5: OVP; input. */
  "OVP": "5",
  /** Physical pin 6: MODE; input. */
  "MODE": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: RTN; passive. */
  "RTN_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: IMON; output. */
  "IMON": "10",
  /** Physical pin 11: ILIM; passive. */
  "ILIM": "11",
  /** Physical pin 12: dVdT; passive. */
  "dVdT": "12",
  /** Physical pin 14: ~{FLT}; open_collector. */
  "~{FLT}": "14",
  /** Physical pin 15: OUT; power_out. */
  "OUT_15": "15",
  /** Physical pin 16: OUT; passive. */
  "OUT_16": "16",
  /** Physical pin 17: RTN; passive. */
  "RTN_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26600RHF extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 8: IN; power_in. */
  "IN_8": "8",
  /** Physical pin 9: IN; passive. */
  "IN_9": "9",
  /** Physical pin 10: UVLO; input. */
  "UVLO": "10",
  /** Physical pin 12: OVP; input. */
  "OVP": "12",
  /** Physical pin 13: MODE; input. */
  "MODE": "13",
  /** Physical pin 14: ~{SHDN}; input. */
  "~{SHDN}": "14",
  /** Physical pin 15: RTN; passive. */
  "RTN_15": "15",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
  /** Physical pin 18: IMON; output. */
  "IMON": "18",
  /** Physical pin 19: ILIM; passive. */
  "ILIM": "19",
  /** Physical pin 20: dVdT; passive. */
  "dVdT": "20",
  /** Physical pin 22: ~{FLT}; open_collector. */
  "~{FLT}": "22",
  /** Physical pin 23: OUT; power_out. */
  "OUT_23": "23",
  /** Physical pin 24: OUT; passive. */
  "OUT_24": "24",
  /** Physical pin 25: RTN; passive. */
  "RTN_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26400RHF extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 8: IN; power_in. */
  "IN_8": "8",
  /** Physical pin 9: IN; passive. */
  "IN_9": "9",
  /** Physical pin 10: UVLO; input. */
  "UVLO": "10",
  /** Physical pin 12: OVP; input. */
  "OVP": "12",
  /** Physical pin 13: MODE; input. */
  "MODE": "13",
  /** Physical pin 14: ~{SHDN}; input. */
  "~{SHDN}": "14",
  /** Physical pin 15: RTN; passive. */
  "RTN_15": "15",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
  /** Physical pin 18: IMON; output. */
  "IMON": "18",
  /** Physical pin 19: ILIM; passive. */
  "ILIM": "19",
  /** Physical pin 20: dVdT; passive. */
  "dVdT": "20",
  /** Physical pin 22: ~{FLT}; open_collector. */
  "~{FLT}": "22",
  /** Physical pin 23: OUT; power_out. */
  "OUT_23": "23",
  /** Physical pin 24: OUT; passive. */
  "OUT_24": "24",
  /** Physical pin 25: RTN; passive. */
  "RTN_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26601RHF extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 8: IN; power_in. */
  "IN_8": "8",
  /** Physical pin 9: IN; passive. */
  "IN_9": "9",
  /** Physical pin 10: UVLO; input. */
  "UVLO": "10",
  /** Physical pin 12: OVP; input. */
  "OVP": "12",
  /** Physical pin 13: MODE; input. */
  "MODE": "13",
  /** Physical pin 14: ~{SHDN}; input. */
  "~{SHDN}": "14",
  /** Physical pin 15: RTN; passive. */
  "RTN_15": "15",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
  /** Physical pin 18: IMON; output. */
  "IMON": "18",
  /** Physical pin 19: ILIM; passive. */
  "ILIM": "19",
  /** Physical pin 20: dVdT; passive. */
  "dVdT": "20",
  /** Physical pin 22: ~{FLT}; open_collector. */
  "~{FLT}": "22",
  /** Physical pin 23: OUT; power_out. */
  "OUT_23": "23",
  /** Physical pin 24: OUT; passive. */
  "OUT_24": "24",
  /** Physical pin 25: RTN; passive. */
  "RTN_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26602PWP extends Component.withPins({
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: UVLO; input. */
  "UVLO": "3",
  /** Physical pin 5: OVP; input. */
  "OVP": "5",
  /** Physical pin 6: MODE; input. */
  "MODE": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: RTN; passive. */
  "RTN_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: IMON; output. */
  "IMON": "10",
  /** Physical pin 11: ILIM; passive. */
  "ILIM": "11",
  /** Physical pin 12: dVdT; passive. */
  "dVdT": "12",
  /** Physical pin 14: ~{FLT}; open_collector. */
  "~{FLT}": "14",
  /** Physical pin 15: OUT; power_out. */
  "OUT_15": "15",
  /** Physical pin 16: OUT; passive. */
  "OUT_16": "16",
  /** Physical pin 17: RTN; passive. */
  "RTN_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26602RHF extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 8: IN; power_in. */
  "IN_8": "8",
  /** Physical pin 9: IN; passive. */
  "IN_9": "9",
  /** Physical pin 10: UVLO; input. */
  "UVLO": "10",
  /** Physical pin 12: OVP; input. */
  "OVP": "12",
  /** Physical pin 13: MODE; input. */
  "MODE": "13",
  /** Physical pin 14: ~{SHDN}; input. */
  "~{SHDN}": "14",
  /** Physical pin 15: RTN; passive. */
  "RTN_15": "15",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
  /** Physical pin 18: IMON; output. */
  "IMON": "18",
  /** Physical pin 19: ILIM; passive. */
  "ILIM": "19",
  /** Physical pin 20: dVdT; passive. */
  "dVdT": "20",
  /** Physical pin 22: ~{FLT}; open_collector. */
  "~{FLT}": "22",
  /** Physical pin 23: OUT; power_out. */
  "OUT_23": "23",
  /** Physical pin 24: OUT; passive. */
  "OUT_24": "24",
  /** Physical pin 25: RTN; passive. */
  "RTN_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26630RGE extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: B_GATE; output. */
  "B_GATE": "3",
  /** Physical pin 4: DRV; output. */
  "DRV": "4",
  /** Physical pin 5: IN_SYS; power_in. */
  "IN_SYS": "5",
  /** Physical pin 6: UVLO; input. */
  "UVLO": "6",
  /** Physical pin 7: OVP; input. */
  "OVP": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: dVdT; passive. */
  "dVdT": "9",
  /** Physical pin 10: ILIM; passive. */
  "ILIM": "10",
  /** Physical pin 11: MODE; input. */
  "MODE": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: IMON; output. */
  "IMON": "13",
  /** Physical pin 14: ~{FLT}; open_collector. */
  "~{FLT}": "14",
  /** Physical pin 15: PGTH; input. */
  "PGTH": "15",
  /** Physical pin 16: PGOOD; output. */
  "PGOOD": "16",
  /** Physical pin 17: OUT; power_out. */
  "OUT_17": "17",
  /** Physical pin 18: OUT; passive. */
  "OUT_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26631PWP extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: IN; passive. */
  "IN_3": "3",
  /** Physical pin 4: B_GATE; output. */
  "B_GATE": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: IN_SYS; power_in. */
  "IN_SYS": "6",
  /** Physical pin 7: UVLO; input. */
  "UVLO": "7",
  /** Physical pin 8: OVP; input. */
  "OVP": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: dVdT; passive. */
  "dVdT": "10",
  /** Physical pin 11: ILIM; passive. */
  "ILIM": "11",
  /** Physical pin 12: MODE; input. */
  "MODE": "12",
  /** Physical pin 13: ~{SHDN}; input. */
  "~{SHDN}": "13",
  /** Physical pin 14: IMON; output. */
  "IMON": "14",
  /** Physical pin 15: ~{FLT}; open_collector. */
  "~{FLT}": "15",
  /** Physical pin 16: PGTH; input. */
  "PGTH": "16",
  /** Physical pin 17: PGOOD; output. */
  "PGOOD": "17",
  /** Physical pin 18: OUT; power_out. */
  "OUT_18": "18",
  /** Physical pin 19: OUT; passive. */
  "OUT_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26631RGE extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: B_GATE; output. */
  "B_GATE": "3",
  /** Physical pin 4: DRV; output. */
  "DRV": "4",
  /** Physical pin 5: IN_SYS; power_in. */
  "IN_SYS": "5",
  /** Physical pin 6: UVLO; input. */
  "UVLO": "6",
  /** Physical pin 7: OVP; input. */
  "OVP": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: dVdT; passive. */
  "dVdT": "9",
  /** Physical pin 10: ILIM; passive. */
  "ILIM": "10",
  /** Physical pin 11: MODE; input. */
  "MODE": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: IMON; output. */
  "IMON": "13",
  /** Physical pin 14: ~{FLT}; open_collector. */
  "~{FLT}": "14",
  /** Physical pin 15: PGTH; input. */
  "PGTH": "15",
  /** Physical pin 16: PGOOD; output. */
  "PGOOD": "16",
  /** Physical pin 17: OUT; power_out. */
  "OUT_17": "17",
  /** Physical pin 18: OUT; passive. */
  "OUT_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26632RGE extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: B_GATE; output. */
  "B_GATE": "3",
  /** Physical pin 4: DRV; output. */
  "DRV": "4",
  /** Physical pin 5: IN_SYS; power_in. */
  "IN_SYS": "5",
  /** Physical pin 6: UVLO; input. */
  "UVLO": "6",
  /** Physical pin 7: PLIM; passive. */
  "PLIM": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: dVdT; passive. */
  "dVdT": "9",
  /** Physical pin 10: ILIM; passive. */
  "ILIM": "10",
  /** Physical pin 11: MODE; input. */
  "MODE": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: IMON; output. */
  "IMON": "13",
  /** Physical pin 14: ~{FLT}; open_collector. */
  "~{FLT}": "14",
  /** Physical pin 15: PGTH; input. */
  "PGTH": "15",
  /** Physical pin 16: PGOOD; output. */
  "PGOOD": "16",
  /** Physical pin 17: OUT; power_out. */
  "OUT_17": "17",
  /** Physical pin 18: OUT; passive. */
  "OUT_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26633PWP extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: IN; passive. */
  "IN_3": "3",
  /** Physical pin 4: B_GATE; output. */
  "B_GATE": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: IN_SYS; power_in. */
  "IN_SYS": "6",
  /** Physical pin 7: UVLO; input. */
  "UVLO": "7",
  /** Physical pin 8: PLIM; passive. */
  "PLIM": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: dVdT; passive. */
  "dVdT": "10",
  /** Physical pin 11: ILIM; passive. */
  "ILIM": "11",
  /** Physical pin 12: MODE; input. */
  "MODE": "12",
  /** Physical pin 13: ~{SHDN}; input. */
  "~{SHDN}": "13",
  /** Physical pin 14: IMON; output. */
  "IMON": "14",
  /** Physical pin 15: ~{FLT}; open_collector. */
  "~{FLT}": "15",
  /** Physical pin 16: PGTH; input. */
  "PGTH": "16",
  /** Physical pin 17: PGOOD; output. */
  "PGOOD": "17",
  /** Physical pin 18: OUT; power_out. */
  "OUT_18": "18",
  /** Physical pin 19: OUT; passive. */
  "OUT_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26633RGE extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: B_GATE; output. */
  "B_GATE": "3",
  /** Physical pin 4: DRV; output. */
  "DRV": "4",
  /** Physical pin 5: IN_SYS; power_in. */
  "IN_SYS": "5",
  /** Physical pin 6: UVLO; input. */
  "UVLO": "6",
  /** Physical pin 7: PLIM; passive. */
  "PLIM": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: dVdT; passive. */
  "dVdT": "9",
  /** Physical pin 10: ILIM; passive. */
  "ILIM": "10",
  /** Physical pin 11: MODE; input. */
  "MODE": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: IMON; output. */
  "IMON": "13",
  /** Physical pin 14: ~{FLT}; open_collector. */
  "~{FLT}": "14",
  /** Physical pin 15: PGTH; input. */
  "PGTH": "15",
  /** Physical pin 16: PGOOD; output. */
  "PGOOD": "16",
  /** Physical pin 17: OUT; power_out. */
  "OUT_17": "17",
  /** Physical pin 18: OUT; passive. */
  "OUT_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26635RGE extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: B_GATE; output. */
  "B_GATE": "3",
  /** Physical pin 4: DRV; output. */
  "DRV": "4",
  /** Physical pin 5: IN_SYS; power_in. */
  "IN_SYS": "5",
  /** Physical pin 6: UVLO; input. */
  "UVLO": "6",
  /** Physical pin 7: PLIM; passive. */
  "PLIM": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: dVdT; passive. */
  "dVdT": "9",
  /** Physical pin 10: ILIM; passive. */
  "ILIM": "10",
  /** Physical pin 11: MODE; input. */
  "MODE": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: IMON; output. */
  "IMON": "13",
  /** Physical pin 14: ~{FLT}; open_collector. */
  "~{FLT}": "14",
  /** Physical pin 15: PGTH; input. */
  "PGTH": "15",
  /** Physical pin 16: PGOOD; output. */
  "PGOOD": "16",
  /** Physical pin 17: OUT; power_out. */
  "OUT_17": "17",
  /** Physical pin 18: OUT; passive. */
  "OUT_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS26636PWP extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: IN; passive. */
  "IN_2": "2",
  /** Physical pin 3: IN; passive. */
  "IN_3": "3",
  /** Physical pin 4: B_GATE; output. */
  "B_GATE": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: IN_SYS; power_in. */
  "IN_SYS": "6",
  /** Physical pin 7: UVLO; input. */
  "UVLO": "7",
  /** Physical pin 8: PLIM; passive. */
  "PLIM": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: dVdT; passive. */
  "dVdT": "10",
  /** Physical pin 11: ILIM; passive. */
  "ILIM": "11",
  /** Physical pin 12: MODE; input. */
  "MODE": "12",
  /** Physical pin 13: ~{SHDN}; input. */
  "~{SHDN}": "13",
  /** Physical pin 14: IMON; output. */
  "IMON": "14",
  /** Physical pin 15: ~{FLT}; open_collector. */
  "~{FLT}": "15",
  /** Physical pin 16: PGTH; input. */
  "PGTH": "16",
  /** Physical pin 17: PGOOD; output. */
  "PGOOD": "17",
  /** Physical pin 18: OUT; power_out. */
  "OUT_18": "18",
  /** Physical pin 19: OUT; passive. */
  "OUT_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSM102 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 16: unnamed; output. */
  "P16": "16",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 8: unnamed; passive. */
  "P8": "8",
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
  /** Physical pin 13: V-; power_in. */
  "V-": "13",
}) {
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
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSM102A extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 16: unnamed; output. */
  "P16": "16",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 8: unnamed; passive. */
  "P8": "8",
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
  /** Physical pin 13: V-; power_in. */
  "V-": "13",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSM103W extends Component.withPins({
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSM103WA extends Component.withPins({
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC39002D extends Component.withPins({
  /** Physical pin 1: CS-; input. */
  "CS-": "1",
  /** Physical pin 2: CS+; input. */
  "CS+": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ADJ; open_collector. */
  "ADJ": "5",
  /** Physical pin 6: EAO; passive. */
  "EAO": "6",
  /** Physical pin 7: LS; passive. */
  "LS": "7",
  /** Physical pin 8: CSO; output. */
  "CSO": "8",
}) {
  override schema = "Power_Management:UCC39002D";
  override referencePrefix = "U";
}

