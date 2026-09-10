// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Linear LiFePO4 Battery Charger with Power Path and USB Compatibility, LFCSP
 *
 * KiCad symbol: `Battery_Management:ADP5063`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADP5063.pdf
 * Keywords: LiFePo4 Battery USB PMIC.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class ADP5063 extends Component.withPins({
  "SCL": "1",
  "D_IO3": "2",
  "D_IO2": "3",
  "BAT_SNS": "4",
  "D_IO1": "5",
  "VINx_6": "6",
  "VINx_7": "7",
  "VINx_8": "8",
  "ISO_Sx_9": "9",
  "ISO_Sx_10": "10",
  "ISO_Sx_11": "11",
  "ISO_Bx_12": "12",
  "ISO_Bx_13": "13",
  "ISO_Bx_14": "14",
  "ILED": "15",
  "SYS_EN": "16",
  "SDA": "17",
  "THR": "18",
  "CBP": "19",
  "GND": "20",
  "EP": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", D_IO3: "bidirectional", D_IO2: "bidirectional", BAT_SNS: "passive", D_IO1: "bidirectional", VINx_6: "input", VINx_7: "input", VINx_8: "input", ISO_Sx_9: "passive", ISO_Sx_10: "power_out", ISO_Sx_11: "passive", ISO_Bx_12: "passive", ISO_Bx_13: "passive", ISO_Bx_14: "passive", ILED: "open_collector", SYS_EN: "open_collector", SDA: "bidirectional", THR: "passive", CBP: "passive", GND: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:ADP5063";
  override referencePrefix = "U";
}

/**
 * Ultralow Power Boost Regulator with MPPT and Charge Management, LFCSP-16
 *
 * KiCad symbol: `Battery_Management:ADP5090ACP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADP5090.pdf
 * Keywords: boost regulator MPPT charge.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 */
export class ADP5090ACP extends Component.withPins({
  "SETSD": "1",
  "TERM": "2",
  "AGND_3": "3",
  "MINOP": "4",
  "MPPT": "5",
  "CBP": "6",
  "VIN": "7",
  "PGND": "8",
  "SW": "9",
  "BAT": "10",
  "SYS": "11",
  "BACKUP": "12",
  "PGOOD": "13",
  "DIS_SW": "14",
  "REF": "15",
  "SETPG": "16",
  "AGND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SETSD: "input", TERM: "input", AGND_3: "power_in", MINOP: "passive", MPPT: "input", CBP: "passive", VIN: "power_in", PGND: "power_in", SW: "input", BAT: "power_out", SYS: "power_out", BACKUP: "passive", PGOOD: "output", DIS_SW: "input", REF: "output", SETPG: "input", AGND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:ADP5090ACP";
  override referencePrefix = "U";
}

/**
 * Ultralow Power Energy Harvester PMUs with MPPT and Charge Management, LFCSP-24
 *
 * KiCad symbol: `Battery_Management:ADP5091`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADP5091-5092.pdf
 * Keywords: energy harvester.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP2.3x2.3mm.
 */
export class ADP5091 extends Component.withPins({
  "REF": "1",
  "SETSD": "2",
  "SETBK": "3",
  "TERM": "4",
  "SETPG": "5",
  "SETHYST": "6",
  "AGND_7": "7",
  "CBP": "8",
  "MPPT": "9",
  "VIN": "10",
  "LLD": "11",
  "PGND": "12",
  "SW": "13",
  "REG_OUT": "14",
  "REG_FB": "15",
  "SYS": "16",
  "BAT": "17",
  "BACK_UP": "18",
  "PGOOD": "19",
  "VID": "20",
  "MINOP": "21",
  "DIS_SW": "22",
  "REG_D1": "23",
  "REG_D0": "24",
  "AGND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "passive", SETSD: "passive", SETBK: "passive", TERM: "passive", SETPG: "passive", SETHYST: "passive", AGND_7: "power_in", CBP: "passive", MPPT: "input", VIN: "power_in", LLD: "output", PGND: "power_in", SW: "power_in", REG_OUT: "power_out", REG_FB: "power_out", SYS: "power_out", BAT: "power_out", BACK_UP: "power_in", PGOOD: "output", VID: "input", MINOP: "passive", DIS_SW: "input", REG_D1: "input", REG_D0: "input", AGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:ADP5091";
  override referencePrefix = "U";
}

/**
 * Ultralow Power Energy Harvester PMUs with MPPT and Charge Management, LFCSP-24
 *
 * KiCad symbol: `Battery_Management:ADP5092`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADP5091-5092.pdf
 * Keywords: energy harvester.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP2.3x2.3mm.
 */
export class ADP5092 extends Component.withPins({
  "REF": "1",
  "SETSD": "2",
  "SETBK": "3",
  "TERM": "4",
  "SETPG": "5",
  "SETHYST": "6",
  "AGND_7": "7",
  "CBP": "8",
  "MPPT": "9",
  "VIN": "10",
  "REG_GOOD": "11",
  "PGND": "12",
  "SW": "13",
  "REG_OUT": "14",
  "REG_FB": "15",
  "SYS": "16",
  "BAT": "17",
  "BACK_UP": "18",
  "PGOOD": "19",
  "VID": "20",
  "MINOP": "21",
  "DIS_SW": "22",
  "REG_D1": "23",
  "REG_D0": "24",
  "AGND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "passive", SETSD: "passive", SETBK: "passive", TERM: "passive", SETPG: "passive", SETHYST: "passive", AGND_7: "power_in", CBP: "passive", MPPT: "input", VIN: "power_in", REG_GOOD: "output", PGND: "power_in", SW: "power_in", REG_OUT: "power_out", REG_FB: "power_out", SYS: "power_out", BAT: "power_out", BACK_UP: "power_in", PGOOD: "output", VID: "input", MINOP: "passive", DIS_SW: "input", REG_D1: "input", REG_D0: "input", AGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:ADP5092";
  override referencePrefix = "U";
}

/**
 * Li+ Battery Protection IC for Single Cell Pack, SOT-23-5
 *
 * KiCad symbol: `Battery_Management:AP9101CK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP9101C.pdf
 * Keywords: battery protection li-ion li-po.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AP9101CK extends Component.withPins({
  "VM": "1",
  "VDD": "2",
  "VSS": "3",
  "DO": "4",
  "CO": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VM: "passive", VDD: "power_in", VSS: "power_in", DO: "output", CO: "output", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:AP9101CK";
  override referencePrefix = "U";
}

/**
 * Li+ Battery Protection IC for Single Cell Pack, SOT-23-6
 *
 * KiCad symbol: `Battery_Management:AP9101CK6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP9101C.pdf
 * Keywords: battery protection li-ion li-po.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class AP9101CK6 extends Component.withPins({
  "DO": "1",
  "VM": "2",
  "CO": "3",
  "NC": "4",
  "VDD": "5",
  "VSS": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DO: "output", VM: "passive", CO: "output", NC: "no_connect", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:AP9101CK6";
  override referencePrefix = "U";
}

/**
 * USB-OTG switch-mode lithium battery charger, WLCSP-20
 *
 * KiCad symbol: `Battery_Management:APW7261`. Reference prefix: `U`.
 * Footprint filters: Anpec*WLCSP*1.76x2.03mm*Layout4x5*P0.4mm*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_2007032014_Anpec-Elec-APW7261HAI-TRG_C691404.pdf
 * Keywords: lipo.
 * Default footprint: Package_CSP:Anpec_WLCSP-20_1.76x2.03mm_Layout4x5_P0.4mm.
 */
export class APW7261 extends Component.withPins({
  "VBUS_A1": "A1",
  "VBUS_A2": "A2",
  "BOOT": "A3",
  "SCL": "A4",
  "PMID_B1": "B1",
  "PMID_B2": "B2",
  "PMID_B3": "B3",
  "SDA": "B4",
  "SW_C1": "C1",
  "SW_C2": "C2",
  "SW_C3": "C3",
  "STAT": "C4",
  "PGND_D1": "D1",
  "PGND_D2": "D2",
  "PGND_D3": "D3",
  "OTG": "D4",
  "CSIN": "E1",
  "CD": "E2",
  "REGN": "E3",
  "CSOUT": "E4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS_A1: "power_in", VBUS_A2: "passive", BOOT: "input", SCL: "input", PMID_B1: "input", PMID_B2: "input", PMID_B3: "input", SDA: "bidirectional", SW_C1: "power_out", SW_C2: "passive", SW_C3: "passive", STAT: "open_collector", PGND_D1: "power_in", PGND_D2: "passive", PGND_D3: "passive", OTG: "input", CSIN: "input", CD: "input", REGN: "power_out", CSOUT: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:APW7261";
  override referencePrefix = "U";
}

/**
 * Stackable cell monitor, cell balancer, 3-7 Cells, SPI Interface
 *
 * KiCad symbol: `Battery_Management:AS8506C`. Reference prefix: `U`.
 * Footprint filters: QFN*6x6mm*P0.5mm*.
 * @see http://ams.com/eng/content/download/476603/1402377/252935
 * Keywords: battery balance lithium charge afe.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_6x6mm_P0.5mm_EP4.6x4.6mm.
 */
export class AS8506C extends Component.withPins({
  "TSECH": "1",
  "TSECL": "2",
  "VC7": "3",
  "VC6": "4",
  "VS5": "5",
  "VC4": "6",
  "VC3": "7",
  "VC2": "8",
  "VC1": "9",
  "CGND": "10",
  "NC": "11",
  "VREF_IN": "12",
  "GND": "13",
  "TRIG_IN": "14",
  "CLK_IN": "15",
  "CVT_NOK_OUT": "16",
  "BD_OUT": "17",
  "FD_OUT": "18",
  "WAKE_IN": "19",
  "NC_T": "20",
  "SDO": "21",
  "SDI": "22",
  "SCKL": "23",
  "~{CS}": "24",
  "CELL_THU": "25",
  "CELL_THL": "26",
  "TEMP_IN2": "27",
  "TEMP_IN1": "28",
  "REF_T": "29",
  "V5V": "30",
  "V5V_IN": "31",
  "WAKE_OUT": "32",
  "FD_IN": "33",
  "BD_IN": "34",
  "CVT_NOK_IN": "35",
  "CLK_OUT": "36",
  "TRIG_OUT": "37",
  "VSUP": "38",
  "MS_SL": "39",
  "VREF_H": "40",
  "PAD": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TSECH: "input", TSECL: "input", VC7: "input", VC6: "input", VS5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", CGND: "input", NC: "no_connect", VREF_IN: "input", GND: "power_in", TRIG_IN: "input", CLK_IN: "input", CVT_NOK_OUT: "input", BD_OUT: "input", FD_OUT: "input", WAKE_IN: "input", NC_T: "no_connect", SDO: "output", SDI: "input", SCKL: "input", "~{CS}": "input", CELL_THU: "input", CELL_THL: "input", TEMP_IN2: "input", TEMP_IN1: "input", REF_T: "input", V5V: "input", V5V_IN: "input", WAKE_OUT: "input", FD_IN: "input", BD_IN: "input", CVT_NOK_IN: "input", CLK_OUT: "input", TRIG_OUT: "input", VSUP: "power_in", MS_SL: "input", VREF_H: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:AS8506C";
  override referencePrefix = "U";
}

/**
 * Standalone switchmode NiCd/NiMH battery charger, 2-4 cells, negative dV and dT/dt termination
 *
 * KiCad symbol: `Battery_Management:BQ2003`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq2003.pdf
 * Keywords: battery nickel cadmium metal hydride.
 */
export class BQ2003 extends Component.withPins({
  "CCMD": "1",
  "DCMD": "2",
  "DVEN": "3",
  "TM_{1}": "4",
  "TM_{2}": "5",
  "TS": "6",
  "BAT": "7",
  "V_{SS}": "8",
  "SNS": "9",
  "TCO": "10",
  "MCV": "11",
  "TEMP": "12",
  "CHG": "13",
  "MOD": "14",
  "DIS": "15",
  "V_{CC}": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CCMD: "input", DCMD: "input", DVEN: "input", "TM_{1}": "input", "TM_{2}": "input", TS: "input", BAT: "input", "V_{SS}": "power_in", SNS: "input", TCO: "input", MCV: "input", TEMP: "output", CHG: "output", MOD: "output", DIS: "output", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ2003";
  override referencePrefix = "U";
}

/**
 * Single cell, 0.8A Li-Ion/Li-Po linear charge management controller, up to 30V input, 4.2V charge voltage, Open-Drain Status Output, Temperature sense input, SOT-23-6
 *
 * KiCad symbol: `Battery_Management:BQ21040DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/bq21040.pdf
 * Keywords: 1-cell battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class BQ21040DBV extends Component.withPins({
  "TS": "1",
  "OUT": "2",
  "~{CHG}": "3",
  "ISET": "4",
  "GND": "5",
  "VIN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TS: "input", OUT: "power_out", "~{CHG}": "open_collector", ISET: "input", GND: "power_in", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ21040DBV";
  override referencePrefix = "U";
}

/**
 * 2-Cell Li-Ion Charge Management IC, HTSSOP-20
 *
 * KiCad symbol: `Battery_Management:BQ24004`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24006.pdf
 * Keywords: 2-Cell Li-Ion Charge.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_Mask2.4x3.7mm.
 */
export class BQ24004 extends Component.withPins({
  "N/C_1": "1",
  "IN_2": "2",
  "IN_3": "3",
  "VCC": "4",
  "ISNS": "5",
  "N/C_6": "6",
  "APG/THERM": "7",
  "EN": "8",
  "VSEL": "9",
  "GND_10": "10",
  "N/C_11": "11",
  "CR": "12",
  "TMR_SEL": "13",
  "STAT1": "14",
  "N/C_15": "15",
  "AGND": "16",
  "VSENSE": "17",
  "OUT_18": "18",
  "OUT_19": "19",
  "N/C_20": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "N/C_1": "no_connect", IN_2: "input", IN_3: "input", VCC: "power_in", ISNS: "input", "N/C_6": "no_connect", "APG/THERM": "input", EN: "input", VSEL: "input", GND_10: "power_in", "N/C_11": "no_connect", CR: "input", TMR_SEL: "input", STAT1: "output", "N/C_15": "no_connect", AGND: "power_in", VSENSE: "input", OUT_18: "output", OUT_19: "passive", "N/C_20": "no_connect", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24004";
  override referencePrefix = "U";
}

/**
 * 2-Cell Li-Ion Charge Management IC, HTSSOP-20
 *
 * KiCad symbol: `Battery_Management:BQ24005`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24006.pdf
 * Keywords: 2-Cell Li-Ion Charge.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_Mask2.4x3.7mm.
 */
export class BQ24005 extends Component.withPins({
  "N/C_1": "1",
  "IN_2": "2",
  "IN_3": "3",
  "VCC": "4",
  "ISNS": "5",
  "N/C_6": "6",
  "APG/THERM": "7",
  "EN": "8",
  "VSEL": "9",
  "GND_10": "10",
  "N/C_11": "11",
  "CR": "12",
  "TMR_SEL": "13",
  "STAT1": "14",
  "STAT2": "15",
  "AGND": "16",
  "VSENSE": "17",
  "OUT_18": "18",
  "OUT_19": "19",
  "N/C_20": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "N/C_1": "no_connect", IN_2: "input", IN_3: "input", VCC: "power_in", ISNS: "input", "N/C_6": "no_connect", "APG/THERM": "input", EN: "input", VSEL: "input", GND_10: "power_in", "N/C_11": "no_connect", CR: "input", TMR_SEL: "input", STAT1: "open_collector", STAT2: "open_collector", AGND: "power_in", VSENSE: "input", OUT_18: "output", OUT_19: "passive", "N/C_20": "no_connect", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24005";
  override referencePrefix = "U";
}

/**
 * 2-Cell Li-Ion Charge Management IC, HTSSOP-20
 *
 * KiCad symbol: `Battery_Management:BQ24006`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24006.pdf
 * Keywords: 2-Cell Li-Ion Charge.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_Mask2.4x3.7mm.
 */
export class BQ24006 extends Component.withPins({
  "N/C_1": "1",
  "IN_2": "2",
  "IN_3": "3",
  "VCC": "4",
  "ISNS": "5",
  "N/C_6": "6",
  "APG/THERM": "7",
  "EN": "8",
  "VSEL": "9",
  "GND_10": "10",
  "N/C_11": "11",
  "CR": "12",
  "TMR_SEL": "13",
  "STAT1": "14",
  "STAT2": "15",
  "AGND": "16",
  "VSENSE": "17",
  "OUT_18": "18",
  "OUT_19": "19",
  "N/C_20": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "N/C_1": "no_connect", IN_2: "input", IN_3: "input", VCC: "power_in", ISNS: "input", "N/C_6": "no_connect", "APG/THERM": "input", EN: "input", VSEL: "input", GND_10: "power_in", "N/C_11": "no_connect", CR: "input", TMR_SEL: "input", STAT1: "output", STAT2: "output", AGND: "power_in", VSENSE: "input", OUT_18: "output", OUT_19: "passive", "N/C_20": "no_connect", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24006";
  override referencePrefix = "U";
}

/**
 * Single-Chip Li-Ion Charge Management IC, DFN-10
 *
 * KiCad symbol: `Battery_Management:BQ24012`. Reference prefix: `U`.
 * Footprint filters: VSON*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24012.pdf
 * Keywords: Battery Charger Li-Ion.
 * Default footprint: Package_SON:VSON-10-1EP_3x3mm_P0.5mm_EP1.65x2.4mm_ThermalVias.
 */
export class BQ24012 extends Component.withPins({
  "IN": "1",
  "VCC": "2",
  "STAT1": "3",
  "STAT2": "4",
  "VSS": "5",
  "ISET": "6",
  "~{PG}": "7",
  "~{CE}": "8",
  "BAT": "9",
  "OUT": "10",
  "1EP": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", VCC: "power_in", STAT1: "open_collector", STAT2: "open_collector", VSS: "power_in", ISET: "output", "~{PG}": "open_collector", "~{CE}": "input", BAT: "input", OUT: "power_out", "1EP": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24012";
  override referencePrefix = "U";
}

/**
 * Single-Chip Li-Ion Charge Management IC, VSON-10
 *
 * KiCad symbol: `Battery_Management:BQ24013`. Reference prefix: `U`.
 * Footprint filters: Texas*DRC0010J*.
 * @see http://www.ti.com/lit/ds/symlink/bq24012.pdf
 * Keywords: Batter Charger Li-Ion.
 * Default footprint: Package_SON:Texas_DRC0010J_ThermalVias.
 */
export class BQ24013 extends Component.withPins({
  "IN": "1",
  "VCC": "2",
  "STAT1": "3",
  "STAT2": "4",
  "VSS_5": "5",
  "ISET": "6",
  "~{CE}": "7",
  "~{TTE}": "8",
  "BAT": "9",
  "OUT": "10",
  "VSS_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", VCC: "power_in", STAT1: "open_collector", STAT2: "open_collector", VSS_5: "power_in", ISET: "output", "~{CE}": "input", "~{TTE}": "input", BAT: "input", OUT: "power_out", VSS_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24013";
  override referencePrefix = "U";
}

/**
 * USB-Friendly Li-Ion Battery Charger and Power-Path Management, VQFN-16
 *
 * KiCad symbol: `Battery_Management:BQ24072RGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24072.pdf
 * Keywords: USB Charger.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 */
export class BQ24072RGT extends Component.withPins({
  "TS": "1",
  "BAT_2": "2",
  "BAT_3": "3",
  "~{CE}": "4",
  "EN2": "5",
  "EN1": "6",
  "~{PGOOD}": "7",
  "VSS_8": "8",
  "~{CHG}": "9",
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
    super({ ...opts, pinTypes: { TS: "passive", BAT_2: "power_out", BAT_3: "passive", "~{CE}": "input", EN2: "input", EN1: "input", "~{PGOOD}": "open_collector", VSS_8: "power_in", "~{CHG}": "open_collector", OUT_10: "power_out", OUT_11: "passive", ILIM: "passive", IN: "power_in", TMR: "input", TD: "input", ISET: "passive", VSS_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24072RGT";
  override referencePrefix = "U";
}

/**
 * USB-Friendly Li-Ion Battery Charger and Power-Path Management, VQFN-16
 *
 * KiCad symbol: `Battery_Management:BQ24073RGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24073.pdf
 * Keywords: USB Charger.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 */
export class BQ24073RGT extends Component.withPins({
  "TS": "1",
  "BAT_2": "2",
  "BAT_3": "3",
  "~{CE}": "4",
  "EN2": "5",
  "EN1": "6",
  "~{PGOOD}": "7",
  "VSS_8": "8",
  "~{CHG}": "9",
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
    super({ ...opts, pinTypes: { TS: "passive", BAT_2: "power_out", BAT_3: "passive", "~{CE}": "input", EN2: "input", EN1: "input", "~{PGOOD}": "open_collector", VSS_8: "power_in", "~{CHG}": "open_collector", OUT_10: "power_out", OUT_11: "passive", ILIM: "passive", IN: "power_in", TMR: "input", TD: "input", ISET: "passive", VSS_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24073RGT";
  override referencePrefix = "U";
}

/**
 * USB-Friendly Li-Ion Battery Charger and Power-Path Management, VQFN-16
 *
 * KiCad symbol: `Battery_Management:BQ24074RGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24074.pdf
 * Keywords: USB Charger.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 */
export class BQ24074RGT extends Component.withPins({
  "TS": "1",
  "BAT_2": "2",
  "BAT_3": "3",
  "~{CE}": "4",
  "EN2": "5",
  "EN1": "6",
  "~{PGOOD}": "7",
  "VSS_8": "8",
  "~{CHG}": "9",
  "OUT_10": "10",
  "OUT_11": "11",
  "ILIM": "12",
  "IN": "13",
  "TMR": "14",
  "ITERM": "15",
  "ISET": "16",
  "VSS_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TS: "passive", BAT_2: "power_out", BAT_3: "passive", "~{CE}": "input", EN2: "input", EN1: "input", "~{PGOOD}": "open_collector", VSS_8: "power_in", "~{CHG}": "open_collector", OUT_10: "power_out", OUT_11: "passive", ILIM: "passive", IN: "power_in", TMR: "input", ITERM: "input", ISET: "passive", VSS_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24074RGT";
  override referencePrefix = "U";
}

/**
 * USB-Friendly Li-Ion Battery Charger and Power-Path Management, VQFN-16
 *
 * KiCad symbol: `Battery_Management:BQ24075RGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24075.pdf
 * Keywords: USB Charger.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 */
export class BQ24075RGT extends Component.withPins({
  "TS": "1",
  "BAT_2": "2",
  "BAT_3": "3",
  "~{CE}": "4",
  "EN2": "5",
  "EN1": "6",
  "~{PGOOD}": "7",
  "VSS_8": "8",
  "~{CHG}": "9",
  "OUT_10": "10",
  "OUT_11": "11",
  "ILIM": "12",
  "IN": "13",
  "TMR": "14",
  "SYSOFF": "15",
  "ISET": "16",
  "VSS_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TS: "passive", BAT_2: "power_out", BAT_3: "passive", "~{CE}": "input", EN2: "input", EN1: "input", "~{PGOOD}": "open_collector", VSS_8: "power_in", "~{CHG}": "open_collector", OUT_10: "power_out", OUT_11: "passive", ILIM: "passive", IN: "power_in", TMR: "input", SYSOFF: "input", ISET: "passive", VSS_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24075RGT";
  override referencePrefix = "U";
}

/**
 * USB-Friendly Li-Ion Battery Charger and Power-Path Management, VQFN-16
 *
 * KiCad symbol: `Battery_Management:BQ24079RGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24079.pdf
 * Keywords: USB Charger.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 */
export class BQ24079RGT extends Component.withPins({
  "TS": "1",
  "BAT_2": "2",
  "BAT_3": "3",
  "~{CE}": "4",
  "EN2": "5",
  "EN1": "6",
  "~{PGOOD}": "7",
  "VSS_8": "8",
  "~{CHG}": "9",
  "OUT_10": "10",
  "OUT_11": "11",
  "ILIM": "12",
  "IN": "13",
  "TMR": "14",
  "SYSOFF": "15",
  "ISET": "16",
  "VSS_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TS: "passive", BAT_2: "power_out", BAT_3: "passive", "~{CE}": "input", EN2: "input", EN1: "input", "~{PGOOD}": "open_collector", VSS_8: "power_in", "~{CHG}": "open_collector", OUT_10: "power_out", OUT_11: "passive", ILIM: "passive", IN: "power_in", TMR: "input", SYSOFF: "input", ISET: "passive", VSS_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24079RGT";
  override referencePrefix = "U";
}

/**
 * 1A, Single-Input, SingleCell Li-Ion and Li-Pol BatteryCharger, HVSSOP-10
 *
 * KiCad symbol: `Battery_Management:BQ24090DGQ`. Reference prefix: `U`.
 * Footprint filters: HVSSOP*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq24090.pdf
 * Keywords: battery charger singlecell li-ion li-poly.
 * Default footprint: Package_SO:HVSSOP-10-1EP_3x3mm_P0.5mm_EP1.57x1.88mm_ThermalVias.
 */
export class BQ24090DGQ extends Component.withPins({
  "IN": "1",
  "ISET": "2",
  "VSS_3": "3",
  "PRETERM": "4",
  "~{PG}": "5",
  "NC": "6",
  "ISET2": "7",
  "~{CHG}": "8",
  "TS": "9",
  "OUT": "10",
  "VSS_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", ISET: "passive", VSS_3: "power_in", PRETERM: "passive", "~{PG}": "open_collector", NC: "no_connect", ISET2: "passive", "~{CHG}": "open_collector", TS: "passive", OUT: "power_out", VSS_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24090DGQ";
  override referencePrefix = "U";
}

/**
 * Synchronous switched mode Li-Ion and Li-Polymer battery charger, integrated MOSFETs and power path selector, Texas R-PVQFN-N24
 *
 * KiCad symbol: `Battery_Management:BQ24133RGY`. Reference prefix: `U`.
 * Footprint filters: Texas*RGY*R*PVQFN*N*.
 * @see http://www.ti.com/lit/ds/symlink/bq24133.pdf
 * Keywords: Battery Charger Li-Ion Li-Poly.
 * Default footprint: Package_DFN_QFN:Texas_RGY_R-PVQFN-N24_EP2.05x3.1mm.
 */
export class BQ24133RGY extends Component.withPins({
  "SW_1": "1",
  "PVCC_2": "2",
  "PVCC_3": "3",
  "AVCC": "4",
  "ACN": "5",
  "ACP": "6",
  "CMSRC": "7",
  "ACDRV": "8",
  "STAT": "9",
  "TS": "10",
  "TTC": "11",
  "VREF": "12",
  "ISET": "13",
  "CELL": "14",
  "SRN": "15",
  "SRP": "16",
  "ACSET": "17",
  "OVPSET": "18",
  "~{BATDRV}": "19",
  "REGN": "20",
  "BTST": "21",
  "PGND_22": "22",
  "PGND_23": "23",
  "SW_24": "24",
  "AGND": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW_1: "power_out", PVCC_2: "power_in", PVCC_3: "passive", AVCC: "power_in", ACN: "input", ACP: "input", CMSRC: "output", ACDRV: "output", STAT: "open_collector", TS: "input", TTC: "passive", VREF: "power_out", ISET: "input", CELL: "passive", SRN: "input", SRP: "input", ACSET: "input", OVPSET: "input", "~{BATDRV}": "output", REGN: "passive", BTST: "passive", PGND_22: "power_in", PGND_23: "passive", SW_24: "passive", AGND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24133RGY";
  override referencePrefix = "U";
}

/**
 * High efficiency switched mode Li-Ion and Li-Polymer battery charger, integrated MOSFETs, power path selector and standard temperature sensing, Texas R-RGE0024H
 *
 * KiCad symbol: `Battery_Management:BQ24166RGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024H*.
 * @see https://www.ti.com/lit/ds/symlink/bq24166.pdf
 * Keywords: Battery Charger Li-Ion Li-Poly.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class BQ24166RGE extends Component.withPins({
  "VDPM": "1",
  "IUSB3": "2",
  "IUSB2": "3",
  "IUSB1": "4",
  "ISET": "5",
  "DRV": "6",
  "~{PG}": "7",
  "~{CHG}": "8",
  "TS": "9",
  "BGATE": "10",
  "BAT_11": "11",
  "BAT_12": "12",
  "SYS_13": "13",
  "SYS_14": "14",
  "ILIM": "15",
  "PGND_16": "16",
  "PGND_17": "17",
  "SW": "18",
  "BOOT": "19",
  "PMIDI": "20",
  "IN": "21",
  "USB": "22",
  "PMIDU": "23",
  "~{CE}": "24",
  "PGND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDPM: "input", IUSB3: "passive", IUSB2: "passive", IUSB1: "passive", ISET: "passive", DRV: "output", "~{PG}": "open_collector", "~{CHG}": "open_collector", TS: "passive", BGATE: "output", BAT_11: "passive", BAT_12: "passive", SYS_13: "power_out", SYS_14: "passive", ILIM: "passive", PGND_16: "power_in", PGND_17: "passive", SW: "passive", BOOT: "passive", PMIDI: "passive", IN: "input", USB: "power_in", PMIDU: "passive", "~{CE}": "input", PGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24166RGE";
  override referencePrefix = "U";
}

/**
 * High efficiency switched mode Li-Ion and Li-Polymer battery charger, integrated MOSFETs, power path selector and JEITA compatible temperature sensing, Texas R-RGE0024H
 *
 * KiCad symbol: `Battery_Management:BQ24167RGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024H*.
 * @see https://www.ti.com/lit/ds/symlink/bq24166.pdf
 * Keywords: Battery Charger Li-Ion Li-Poly.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class BQ24167RGE extends Component.withPins({
  "VDPM": "1",
  "IUSB3": "2",
  "IUSB2": "3",
  "IUSB1": "4",
  "ISET": "5",
  "DRV": "6",
  "~{PG}": "7",
  "~{CHG}": "8",
  "TS": "9",
  "BGATE": "10",
  "BAT_11": "11",
  "BAT_12": "12",
  "SYS_13": "13",
  "SYS_14": "14",
  "ILIM": "15",
  "PGND_16": "16",
  "PGND_17": "17",
  "SW": "18",
  "BOOT": "19",
  "PMIDI": "20",
  "IN": "21",
  "USB": "22",
  "PMIDU": "23",
  "~{CE}": "24",
  "PGND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDPM: "input", IUSB3: "passive", IUSB2: "passive", IUSB1: "passive", ISET: "passive", DRV: "output", "~{PG}": "open_collector", "~{CHG}": "open_collector", TS: "passive", BGATE: "output", BAT_11: "passive", BAT_12: "passive", SYS_13: "power_out", SYS_14: "passive", ILIM: "passive", PGND_16: "power_in", PGND_17: "passive", SW: "passive", BOOT: "passive", PMIDI: "passive", IN: "input", USB: "power_in", PMIDU: "passive", "~{CE}": "input", PGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24167RGE";
  override referencePrefix = "U";
}

/**
 * 10A, 28V max voltage, Li-Ion Charger w/600kHz NMOS-NMOS Synchronous Buck Converter, VQFN-24
 *
 * KiCad symbol: `Battery_Management:BQ24610`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq24610.pdf
 * Keywords: Li-ion buck.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class BQ24610 extends Component.withPins({
  "ACN": "1",
  "ACP": "2",
  "~{ACDRV}": "3",
  "CE": "4",
  "STAT1": "5",
  "TS": "6",
  "TTC": "7",
  "~{PG}": "8",
  "STAT2": "9",
  "VREF": "10",
  "ISET1": "11",
  "VFB": "12",
  "SRN": "13",
  "SRP": "14",
  "ISET2": "15",
  "ACSET": "16",
  "GND_17": "17",
  "REGN": "18",
  "LODRV": "19",
  "PH": "20",
  "HIDRV": "21",
  "BTST": "22",
  "~{BATDRV}": "23",
  "VCC": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ACN: "input", ACP: "input", "~{ACDRV}": "output", CE: "input", STAT1: "open_collector", TS: "input", TTC: "input", "~{PG}": "open_collector", STAT2: "open_collector", VREF: "power_out", ISET1: "input", VFB: "output", SRN: "input", SRP: "input", ISET2: "input", ACSET: "input", GND_17: "power_in", REGN: "output", LODRV: "output", PH: "power_in", HIDRV: "output", BTST: "power_in", "~{BATDRV}": "output", VCC: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24610";
  override referencePrefix = "U";
}

/**
 * 10A, 24V max voltage, Li-Ion Charger w/600kHz NMOS-NMOS Synchronous Buck Converter, VQFN-24
 *
 * KiCad symbol: `Battery_Management:BQ24617`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq24610.pdf
 * Keywords: Li-ion buck.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class BQ24617 extends Component.withPins({
  "ACN": "1",
  "ACP": "2",
  "~{ACDRV}": "3",
  "CE": "4",
  "STAT1": "5",
  "TS": "6",
  "TTC": "7",
  "~{PG}": "8",
  "STAT2": "9",
  "VREF": "10",
  "ISET1": "11",
  "VFB": "12",
  "SRN": "13",
  "SRP": "14",
  "ISET2": "15",
  "ACSET": "16",
  "GND_17": "17",
  "REGN": "18",
  "LODRV": "19",
  "PH": "20",
  "HIDRV": "21",
  "BTST": "22",
  "~{BATDRV}": "23",
  "VCC": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ACN: "input", ACP: "input", "~{ACDRV}": "output", CE: "input", STAT1: "open_collector", TS: "input", TTC: "input", "~{PG}": "open_collector", STAT2: "open_collector", VREF: "power_out", ISET1: "input", VFB: "output", SRN: "input", SRP: "input", ISET2: "input", ACSET: "input", GND_17: "power_in", REGN: "output", LODRV: "output", PH: "power_in", HIDRV: "output", BTST: "power_in", "~{BATDRV}": "output", VCC: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24617";
  override referencePrefix = "U";
}

/**
 * 10A, 28V max voltage, Battery Charger w/600kHz NMOS-NMOS Synchronous Buck Converter for Solar, VQFN-16
 *
 * KiCad symbol: `Battery_Management:BQ24650`. Reference prefix: `U`.
 * Footprint filters: Texas*RVA*1EP*3.5x3.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq24650.pdf
 * Keywords: li-ion lion lipo lithium polymer iron phosphate lead acid buck solar power point battery charger.
 * Default footprint: Package_DFN_QFN:Texas_RVA_VQFN-16-1EP_3.5x3.5mm_P0.5mm_EP2.14x2.14mm_ThermalVias.
 */
export class BQ24650 extends Component.withPins({
  "VCC": "1",
  "MPPSET": "2",
  "STAT1": "3",
  "TS": "4",
  "STAT2": "5",
  "VREF": "6",
  "TERM_EN": "7",
  "VFB": "8",
  "SRN": "9",
  "SRP": "10",
  "GND_11": "11",
  "REGN": "12",
  "LODRV": "13",
  "PH": "14",
  "HIDRV": "15",
  "BTST": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", MPPSET: "input", STAT1: "open_collector", TS: "input", STAT2: "open_collector", VREF: "input", TERM_EN: "input", VFB: "input", SRN: "input", SRP: "input", GND_11: "power_in", REGN: "output", LODRV: "output", PH: "input", HIDRV: "output", BTST: "output", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ24650";
  override referencePrefix = "U";
}

/**
 * 500mA Li-Ion Charger w/Integrated 150mA Synchronous Buck Converter, QFN-14
 *
 * KiCad symbol: `Battery_Management:BQ2501x`. Reference prefix: `U`.
 * Footprint filters: Texas?VQFN?RHL*.
 * @see http://www.ti.com/lit/ds/symlink/bq25010.pdf
 * Keywords: Li-ion buck.
 * Default footprint: Package_DFN_QFN:Texas_VQFN-RHL-20_ThermalVias.
 */
export class BQ2501x extends Component.withPins({
  "NC_1": "1",
  "FB": "2",
  "GND_3": "3",
  "EN": "4",
  "AC": "5",
  "USB": "6",
  "STAT1": "7",
  "STAT2": "8",
  "GND_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "ISET1": "12",
  "ISET2": "13",
  "~{PG}": "14",
  "~{CE}": "15",
  "BAT/OUT_16": "16",
  "BAT/OUT_17": "17",
  "GND_18": "18",
  "SW": "19",
  "FPWM": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", FB: "input", GND_3: "passive", EN: "input", AC: "power_in", USB: "power_in", STAT1: "open_collector", STAT2: "open_collector", GND_9: "passive", NC_10: "no_connect", NC_11: "no_connect", ISET1: "input", ISET2: "input", "~{PG}": "output", "~{CE}": "input", "BAT/OUT_16": "power_out", "BAT/OUT_17": "power_in", GND_18: "power_in", SW: "power_out", FPWM: "input", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ2501x";
  override referencePrefix = "U";
}

/**
 * 1.1A, single cell Li-ion battery charger with 50mA LDO, up to 30V input, WSON-10
 *
 * KiCad symbol: `Battery_Management:BQ25040`. Reference prefix: `U`.
 * Footprint filters: WSON*10*1EP*2x3mm*P0.5mm*EP0.84x2.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq25040.pdf
 * Keywords: lithium.
 * Default footprint: Package_SON:WSON-10-1EP_2x3mm_P0.5mm_EP0.84x2.4mm_ThermalVias.
 */
export class BQ25040 extends Component.withPins({
  "IN": "1",
  "ISET": "2",
  "VSS_3": "3",
  "LDO": "4",
  "IFULL": "5",
  "EN/SET": "6",
  "VSS_7": "7",
  "~{CHG}": "8",
  "~{PG}": "9",
  "BAT": "10",
  "VSS_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", ISET: "input", VSS_3: "power_in", LDO: "power_out", IFULL: "input", "EN/SET": "input", VSS_7: "passive", "~{CHG}": "open_collector", "~{PG}": "open_collector", BAT: "power_out", VSS_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25040";
  override referencePrefix = "U";
}

/**
 * 800-mA Linear Charger for 1- to 4-Cell Supercapacitor, input 3 to 18v, WSON-8
 *
 * KiCad symbol: `Battery_Management:BQ25173DSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq25173.pdf
 * Keywords: linear charger supercapacitor.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 */
export class BQ25173DSG extends Component.withPins({
  "IN": "1",
  "ISET": "2",
  "~{CE}": "3",
  "GND_4": "4",
  "STAT": "5",
  "~{PG}": "6",
  "~{FB}": "7",
  "OUT": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "power_in", ISET: "input", "~{CE}": "input", GND_4: "power_in", STAT: "open_collector", "~{PG}": "open_collector", "~{FB}": "input", OUT: "power_out", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25173DSG";
  override referencePrefix = "U";
}

/**
 * Energy Harvesting Boost Converter with Battery Management, VQFN-16
 *
 * KiCad symbol: `Battery_Management:BQ25504`. Reference prefix: `U`.
 * Footprint filters: *QFN*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq25504.pdf
 * Keywords: energy harvesting li-ion battery solar TEG.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm.
 */
export class BQ25504 extends Component.withPins({
  "VSS_1": "1",
  "VIN_DC": "2",
  "VOC_SAMP": "3",
  "VREF_SAMP": "4",
  "OT_PROG": "5",
  "VBAT_OV": "6",
  "VRDIV": "7",
  "VBAT_UV": "8",
  "OK_HYST": "9",
  "OK_PROG": "10",
  "VBAT_OK": "11",
  "AVSS": "12",
  "VSS_13": "13",
  "VBAT": "14",
  "VSTOR": "15",
  "LBST": "16",
  "PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", VIN_DC: "power_in", VOC_SAMP: "input", VREF_SAMP: "bidirectional", OT_PROG: "input", VBAT_OV: "input", VRDIV: "output", VBAT_UV: "input", OK_HYST: "input", OK_PROG: "input", VBAT_OK: "output", AVSS: "power_in", VSS_13: "passive", VBAT: "power_out", VSTOR: "bidirectional", LBST: "bidirectional", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25504";
  override referencePrefix = "U";
}

/**
 * Nano Power Boost Charger and Buck Converter for Energy Harvester Powered Applications, QFN-20
 *
 * KiCad symbol: `Battery_Management:BQ25570`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3.5x3.5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq25570.pdf
 * Keywords: harvester solar TEG charger li-on buck.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_3.5x3.5mm_P0.5mm_EP2x2mm.
 */
export class BQ25570 extends Component.withPins({
  "VSS_1": "1",
  "VIN_DC": "2",
  "VOC_SAMP": "3",
  "VREF_SAMP": "4",
  "~{EN}": "5",
  "VOUT_EN": "6",
  "VBAT_OV": "7",
  "VRDIV": "8",
  "VSS_9": "9",
  "OK_HYST": "10",
  "OK_PROG": "11",
  "VOUT_SET": "12",
  "VBAT_OK": "13",
  "VOUT": "14",
  "VSS_15": "15",
  "LBUCK": "16",
  "VSS_17": "17",
  "VBAT": "18",
  "VSTOR": "19",
  "LBOOST": "20",
  "VSS_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", VIN_DC: "power_in", VOC_SAMP: "input", VREF_SAMP: "passive", "~{EN}": "input", VOUT_EN: "input", VBAT_OV: "input", VRDIV: "output", VSS_9: "passive", OK_HYST: "input", OK_PROG: "input", VOUT_SET: "input", VBAT_OK: "output", VOUT: "input", VSS_15: "passive", LBUCK: "passive", VSS_17: "passive", VBAT: "power_in", VSTOR: "power_out", LBOOST: "passive", VSS_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25570";
  override referencePrefix = "U";
}

/**
 * I2C Controlled 3A Single-Cell Battery Charger for High Input Voltage and Narrow Voltage DC Power Path Management, WQFN-32
 *
 * KiCad symbol: `Battery_Management:BQ25601`. Reference prefix: `U`.
 * Footprint filters: Texas*RTW*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq25601.pdf
 * Keywords: LiPO charger.
 * Default footprint: Package_DFN_QFN:Texas_RTW_WQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class BQ25601 extends Component.withPins({
  "VAC": "1",
  "PSEL": "2",
  "~{PG}": "3",
  "STAT": "4",
  "SCL": "5",
  "SDA": "6",
  "~{INT}": "7",
  "NC_8": "8",
  "~{CE}": "9",
  "NC_10": "10",
  "TS": "11",
  "~{QON}": "12",
  "BAT_13": "13",
  "BAT_14": "14",
  "SYS_15": "15",
  "SYS_16": "16",
  "GND_17": "17",
  "GND_18": "18",
  "SW_19": "19",
  "SW_20": "20",
  "BTST": "21",
  "REGN": "22",
  "PMID": "23",
  "VBUS": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VAC: "input", PSEL: "input", "~{PG}": "open_collector", STAT: "open_collector", SCL: "input", SDA: "bidirectional", "~{INT}": "open_collector", NC_8: "no_connect", "~{CE}": "input", NC_10: "no_connect", TS: "passive", "~{QON}": "input", BAT_13: "power_in", BAT_14: "passive", SYS_15: "passive", SYS_16: "passive", GND_17: "power_in", GND_18: "passive", SW_19: "passive", SW_20: "passive", BTST: "input", REGN: "passive", PMID: "passive", VBUS: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25601";
  override referencePrefix = "U";
}

/**
 * I2C controlled, 5A Buck-Boost battery charger (1-4 cell, Li-Ion / Li-Polymer), USB BC1.2 / HVDCP detection, 3.6..24V VBUS, 3..18.8V charge voltage regulation, 0.75..1.5 MHz, VQFN-29 (Texas RQM0029A)
 *
 * KiCad symbol: `Battery_Management:BQ25798`. Reference prefix: `U`.
 * Footprint filters: *VQFN*4x4mm?P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq25798.pdf
 * Keywords: Texas-Instruments fast-charger Power-Path-Management USB-OTG BQ25798RQMR.
 * Default footprint: Package_DFN_QFN:Texas_RQM0029A_VQFN-29_4x4mm_P0.4mm.
 */
export class BQ25798 extends Component.withPins({
  "STAT": "1",
  "VBUS_2": "2",
  "VBUS_3": "3",
  "BTST1": "4",
  "REGN": "5",
  "D+": "6",
  "D-": "7",
  "VAC2": "8",
  "VAC1": "9",
  "ACDRV2": "10",
  "ACDRV1": "11",
  "~{QON}": "12",
  "~{CE}": "13",
  "SCL": "14",
  "SDA": "15",
  "TS": "16",
  "ILIM_HIZ": "17",
  "BATP": "18",
  "BTST2": "19",
  "PROG": "20",
  "~{INT}": "21",
  "BAT_22": "22",
  "BAT_23": "23",
  "SDRV": "24",
  "SYS": "25",
  "SW2": "26",
  "GND": "27",
  "SW1": "28",
  "PMID": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "open_collector", VBUS_2: "power_in", VBUS_3: "passive", BTST1: "passive", REGN: "power_out", "D+": "bidirectional", "D-": "bidirectional", VAC2: "input", VAC1: "input", ACDRV2: "passive", ACDRV1: "passive", "~{QON}": "input", "~{CE}": "input", SCL: "input", SDA: "bidirectional", TS: "input", ILIM_HIZ: "input", BATP: "input", BTST2: "passive", PROG: "input", "~{INT}": "open_collector", BAT_22: "power_out", BAT_23: "passive", SDRV: "output", SYS: "power_out", SW2: "power_out", GND: "power_in", SW1: "power_out", PMID: "power_out", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25798";
  override referencePrefix = "U";
}

/**
 * Standalone 2-Cell (Li-Ion / Li-Polymer), 2A Boost-Mode Battery Charger With PowerPath, USB BC1.2 Detection, USB On-The-Go Boost (OTG), 4.3..6.2V VBUS, 8.2/8.4/8.7/8.8V charge voltage, 9.2V BATOVP, 1.5MHz, VQFN-24
 *
 * KiCad symbol: `Battery_Management:BQ25886RGE`. Reference prefix: `U`.
 * Footprint filters: *VQFN*4x4mm*P0.5mm*EP2.7x2.7*.
 * @see http://www.ti.com/lit/ds/symlink/bq25886.pdf
 * Keywords: Power-Path-Management.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class BQ25886RGE extends Component.withPins({
  "D-": "1",
  "STAT": "2",
  "~{CE}": "3",
  "GND_4": "4",
  "OTG": "5",
  "VSET": "6",
  "TS": "7",
  "ILIM": "8",
  "~{PG}": "9",
  "ICHGSET": "10",
  "REGN": "11",
  "BTST": "12",
  "BAT_13": "13",
  "BAT_14": "14",
  "SYS_15": "15",
  "SYS_16": "16",
  "SW_17": "17",
  "SW_18": "18",
  "GND_19": "19",
  "GND_20": "20",
  "PMID_21": "21",
  "PMID_22": "22",
  "VBUS": "23",
  "D+": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "D-": "bidirectional", STAT: "open_collector", "~{CE}": "input", GND_4: "power_in", OTG: "input", VSET: "passive", TS: "input", ILIM: "passive", "~{PG}": "open_collector", ICHGSET: "passive", REGN: "power_out", BTST: "passive", BAT_13: "passive", BAT_14: "passive", SYS_15: "power_out", SYS_16: "passive", SW_17: "power_in", SW_18: "passive", GND_19: "passive", GND_20: "passive", PMID_21: "power_out", PMID_22: "passive", VBUS: "power_in", "D+": "bidirectional", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25886RGE";
  override referencePrefix = "U";
}

/**
 * I2C Controlled 2-Cell (Li-Ion / Li-Polymer), 2A boost-mode battery charger with cell balancing for USB input, 3.9..6.2V VBUS, 3.4..4.6V charge voltage regulation range (per cell), 1.5 MHz, VQFN-24
 *
 * KiCad symbol: `Battery_Management:BQ25887RGE`. Reference prefix: `U`.
 * Footprint filters: *VQFN*4x4mm*P0.5mm*EP2.7*x2.7*mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq25887.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class BQ25887RGE extends Component.withPins({
  "~{PG}": "1",
  "STAT": "2",
  "CD": "3",
  "SDA": "4",
  "SCL": "5",
  "~{INT}": "6",
  "TS": "7",
  "ILIM": "8",
  "MID": "9",
  "CBSET": "10",
  "REGN": "11",
  "BTST": "12",
  "BAT_13": "13",
  "BAT_14": "14",
  "SNS_15": "15",
  "SNS_16": "16",
  "SW_17": "17",
  "SW_18": "18",
  "GND_19": "19",
  "GND_20": "20",
  "PMID_21": "21",
  "PMID_22": "22",
  "VBUS": "23",
  "PSEL": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{PG}": "open_collector", STAT: "open_collector", CD: "input", SDA: "bidirectional", SCL: "input", "~{INT}": "open_collector", TS: "input", ILIM: "passive", MID: "input", CBSET: "power_out", REGN: "power_out", BTST: "passive", BAT_13: "power_out", BAT_14: "passive", SNS_15: "output", SNS_16: "passive", SW_17: "power_out", SW_18: "passive", GND_19: "power_in", GND_20: "passive", PMID_21: "power_out", PMID_22: "passive", VBUS: "power_in", PSEL: "input", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25887RGE";
  override referencePrefix = "U";
}

/**
 * I2C Controlled Single Cell (Li-Ion / Li-Polymer) 5A Fast Charger with MaxCharge, USB BC1.2 Detection, 3.9..14V VBUS, 3.840..4.608V charge voltage range, 1.5 MHz (buck mode) and 500 kHz /1.5 MHz (boost mode), WQFN-24
 *
 * KiCad symbol: `Battery_Management:BQ25895RTW`. Reference prefix: `U`.
 * Footprint filters: *WQFN*4x4mm*P0.5mm*EP2.7*x2.7*mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq25895.pdf
 * Keywords: 1-cell Battery-Charger Power-Path-Management OTG.
 * Default footprint: Package_DFN_QFN:Texas_RTW_WQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class BQ25895RTW extends Component.withPins({
  "VBUS": "1",
  "D+": "2",
  "D-": "3",
  "STAT": "4",
  "SCL": "5",
  "SDA": "6",
  "~{INT}": "7",
  "OTG": "8",
  "~{CE}": "9",
  "ILIM": "10",
  "TS": "11",
  "~{QON}": "12",
  "BAT_13": "13",
  "BAT_14": "14",
  "SYS_15": "15",
  "SYS_16": "16",
  "PGND_17": "17",
  "PGND_18": "18",
  "SW_19": "19",
  "SW_20": "20",
  "BTST": "21",
  "REGN": "22",
  "PMID": "23",
  "DSEL": "24",
  "PGND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "power_in", "D+": "bidirectional", "D-": "bidirectional", STAT: "open_collector", SCL: "input", SDA: "bidirectional", "~{INT}": "open_collector", OTG: "input", "~{CE}": "input", ILIM: "passive", TS: "passive", "~{QON}": "input", BAT_13: "passive", BAT_14: "passive", SYS_15: "passive", SYS_16: "passive", PGND_17: "power_in", PGND_18: "passive", SW_19: "power_out", SW_20: "passive", BTST: "passive", REGN: "power_out", PMID: "power_out", DSEL: "open_collector", PGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ25895RTW";
  override referencePrefix = "U";
}

/**
 * System Side Li Ion/Polymer Fuel Gauge, PDSON-12
 *
 * KiCad symbol: `Battery_Management:BQ27441-G1`. Reference prefix: `U`.
 * Footprint filters: *PDSO*N12*.
 * @see http://www.ti.com/lit/ds/symlink/bq27441-g1.pdf
 * Keywords: Fuel Gauge.
 * Default footprint: Package_SON:Texas_S-PDSO-N12.
 */
export class BQ27441_G1 extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "V_{SS}": "3",
  "NC_4": "4",
  "V_{DD}": "5",
  "BAT": "6",
  "SRN": "7",
  "SRP": "8",
  "NC_9": "9",
  "BIN": "10",
  "NC_11": "11",
  "GPOUT": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", NC_4: "no_connect", "V_{DD}": "power_out", BAT: "power_in", SRN: "input", SRP: "input", NC_9: "no_connect", BIN: "input", NC_11: "no_connect", GPOUT: "output", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ27441-G1";
  override referencePrefix = "U";
}

/**
 * System Side Li Ion/Polymer Fuel Gauge, 4.2V, PDSON-12
 *
 * KiCad symbol: `Battery_Management:BQ27441DRZR-G1A`. Reference prefix: `U`.
 * Footprint filters: *PDSO*N12*.
 * @see http://www.ti.com/lit/ds/symlink/bq27441-g1.pdf
 * Keywords: Fuel Gauge.
 * Default footprint: Package_SON:Texas_S-PDSO-N12.
 */
export class BQ27441DRZR_G1A extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "V_{SS}": "3",
  "NC_4": "4",
  "V_{DD}": "5",
  "BAT": "6",
  "SRN": "7",
  "SRP": "8",
  "NC_9": "9",
  "BIN": "10",
  "NC_11": "11",
  "GPOUT": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", NC_4: "no_connect", "V_{DD}": "power_out", BAT: "power_in", SRN: "input", SRP: "input", NC_9: "no_connect", BIN: "input", NC_11: "no_connect", GPOUT: "output", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ27441DRZR-G1A";
  override referencePrefix = "U";
}

/**
 * System Side Li Ion/Polymer Fuel Gauge, 4.30-4.35V, PDSON-12
 *
 * KiCad symbol: `Battery_Management:BQ27441DRZR-G1B`. Reference prefix: `U`.
 * Footprint filters: *PDSO*N12*.
 * @see http://www.ti.com/lit/ds/symlink/bq27441-g1.pdf
 * Keywords: Fuel Gauge.
 * Default footprint: Package_SON:Texas_S-PDSO-N12.
 */
export class BQ27441DRZR_G1B extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "V_{SS}": "3",
  "NC_4": "4",
  "V_{DD}": "5",
  "BAT": "6",
  "SRN": "7",
  "SRP": "8",
  "NC_9": "9",
  "BIN": "10",
  "NC_11": "11",
  "GPOUT": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", NC_4: "no_connect", "V_{DD}": "power_out", BAT: "power_in", SRN: "input", SRP: "input", NC_9: "no_connect", BIN: "input", NC_11: "no_connect", GPOUT: "output", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ27441DRZR-G1B";
  override referencePrefix = "U";
}

/**
 * System Side Li Ion/Polymer Fuel Gauge, 4.2V, PDSON-12
 *
 * KiCad symbol: `Battery_Management:BQ27441DRZT-G1A`. Reference prefix: `U`.
 * Footprint filters: *PDSO*N12*.
 * @see http://www.ti.com/lit/ds/symlink/bq27441-g1.pdf
 * Keywords: Fuel Gauge.
 * Default footprint: Package_SON:Texas_S-PDSO-N12.
 */
export class BQ27441DRZT_G1A extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "V_{SS}": "3",
  "NC_4": "4",
  "V_{DD}": "5",
  "BAT": "6",
  "SRN": "7",
  "SRP": "8",
  "NC_9": "9",
  "BIN": "10",
  "NC_11": "11",
  "GPOUT": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", NC_4: "no_connect", "V_{DD}": "power_out", BAT: "power_in", SRN: "input", SRP: "input", NC_9: "no_connect", BIN: "input", NC_11: "no_connect", GPOUT: "output", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ27441DRZT-G1A";
  override referencePrefix = "U";
}

/**
 * System Side Li Ion/Polymer Fuel Gauge, 4.30-4.35V, PDSON-12
 *
 * KiCad symbol: `Battery_Management:BQ27441DRZT-G1B`. Reference prefix: `U`.
 * Footprint filters: *PDSO*N12*.
 * @see http://www.ti.com/lit/ds/symlink/bq27441-g1.pdf
 * Keywords: Fuel Gauge.
 * Default footprint: Package_SON:Texas_S-PDSO-N12.
 */
export class BQ27441DRZT_G1B extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "V_{SS}": "3",
  "NC_4": "4",
  "V_{DD}": "5",
  "BAT": "6",
  "SRN": "7",
  "SRP": "8",
  "NC_9": "9",
  "BIN": "10",
  "NC_11": "11",
  "GPOUT": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", NC_4: "no_connect", "V_{DD}": "power_out", BAT: "power_in", SRN: "input", SRP: "input", NC_9: "no_connect", BIN: "input", NC_11: "no_connect", GPOUT: "output", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ27441DRZT-G1B";
  override referencePrefix = "U";
}

/**
 * System Side Li Ion/Polymer Fuel Gauge, VSON-12
 *
 * KiCad symbol: `Battery_Management:BQ27750`. Reference prefix: `U`.
 * Footprint filters: Texas*PDSO*N12*.
 * @see http://www.ti.com/lit/ds/symlink/bq27750.pdf
 * Keywords: Fuel Gauge.
 * Default footprint: Package_SON:Texas_S-PDSO-N12.
 */
export class BQ27750 extends Component.withPins({
  "VSS_1": "1",
  "SRN": "2",
  "SRP": "3",
  "TS1": "4",
  "SCL": "5",
  "SDA": "6",
  "DSG": "7",
  "PACK": "8",
  "CHG": "9",
  "PBI": "10",
  "BAT": "11",
  "VCELL/INT": "12",
  "VSS_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", SRN: "input", SRP: "input", TS1: "input", SCL: "input", SDA: "bidirectional", DSG: "output", PACK: "input", CHG: "output", PBI: "passive", BAT: "input", "VCELL/INT": "bidirectional", VSS_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ27750";
  override referencePrefix = "U";
}

/**
 * 2/3/4 Cell Lithium-Ion or Lithium-Polymer Battery Protection AFE, TSSOP-30
 *
 * KiCad symbol: `Battery_Management:BQ29330DBT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm?P0.5mm*.
 * @see https://www.ti.com/lit/gpn/bq29330
 * Keywords: Li-ion Li-poly LiPo Texas-Instruments cell-balancing I2C.
 * Default footprint: Package_SO:TSSOP-30_4.4x7.8mm_P0.5mm.
 */
export class BQ29330DBT extends Component.withPins({
  "CELL-": "1",
  "CELL+": "2",
  "REG": "3",
  "VSS_4": "4",
  "SRN": "6",
  "SRP": "7",
  "VC5": "8",
  "VC4": "9",
  "VC3": "10",
  "VC2": "11",
  "VC1": "12",
  "BAT": "13",
  "CHG": "14",
  "DSG": "16",
  "PACK": "17",
  "VCC": "19",
  "ZVCHG": "20",
  "PMS": "22",
  "LEDOUT": "24",
  "TOUT": "25",
  "WDI": "26",
  "SCLK": "28",
  "SDATA": "29",
  "~{XRST}": "5",
  "NC_15": "15",
  "NC_18": "18",
  "GPOD": "21",
  "VSS_23": "23",
  "NC_27": "27",
  "~{XALERT}": "30",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CELL-": "output", "CELL+": "output", REG: "output", VSS_4: "power_in", SRN: "input", SRP: "input", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", BAT: "power_in", CHG: "output", DSG: "output", PACK: "power_in", VCC: "power_in", ZVCHG: "output", PMS: "input", LEDOUT: "output", TOUT: "output", WDI: "input", SCLK: "input", SDATA: "bidirectional", "~{XRST}": "output", NC_15: "no_connect", NC_18: "no_connect", GPOD: "open_collector", VSS_23: "passive", NC_27: "no_connect", "~{XALERT}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ29330DBT";
  override referencePrefix = "U";
}

/**
 * Voltage and Current Protection for Single-Cell Li-Ion and Li-Polymer Batteries
 *
 * KiCad symbol: `Battery_Management:BQ297xy`. Reference prefix: `U`.
 * Footprint filters: WSON*1.5x1.5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq2970.pdf
 * Keywords: protection Li-Ion Li-Pol.
 * Default footprint: Package_SON:WSON-6_1.5x1.5mm_P0.5mm.
 */
export class BQ297xy extends Component.withPins({
  "NC": "1",
  "Cout": "2",
  "Dout": "3",
  "VSS": "4",
  "BAT": "5",
  "V-": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", Cout: "output", Dout: "output", VSS: "power_in", BAT: "input", "V-": "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ297xy";
  override referencePrefix = "U";
}

/**
 * Qi v1.2, Wireless Power Receiver and Battery Charger, Vout 4.2V, VQFN-20
 *
 * KiCad symbol: `Battery_Management:BQ51050BRHL`. Reference prefix: `U`.
 * Footprint filters: Texas?VQFN?RHL*.
 * @see http://www.ti.com/lit/ds/symlink/bq51050b.pdf
 * Keywords: Qi Wireless Power Receiver Battery Charger 4.2V.
 * Default footprint: Package_DFN_QFN:Texas_VQFN-RHL-20.
 */
export class BQ51050BRHL extends Component.withPins({
  "PGND_1": "1",
  "AC1": "2",
  "BOOT1": "3",
  "BAT": "4",
  "CLAMP1": "5",
  "COMM1": "6",
  "~{CHG}": "7",
  "~{AD-EN}": "8",
  "AD": "9",
  "TERM": "10",
  "EN2": "11",
  "ILIM": "12",
  "TS/CTRL": "13",
  "FOD": "14",
  "COMM2": "15",
  "CLAMP2": "16",
  "BOOT2": "17",
  "RECT": "18",
  "AC2": "19",
  "PGND_20": "20",
  "PGND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND_1: "power_in", AC1: "input", BOOT1: "passive", BAT: "power_out", CLAMP1: "open_collector", COMM1: "open_collector", "~{CHG}": "open_collector", "~{AD-EN}": "output", AD: "input", TERM: "input", EN2: "input", ILIM: "passive", "TS/CTRL": "input", FOD: "input", COMM2: "open_collector", CLAMP2: "open_collector", BOOT2: "passive", RECT: "passive", AC2: "input", PGND_20: "passive", PGND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ51050BRHL";
  override referencePrefix = "U";
}

/**
 * Qi v1.2, Wireless Power Receiver and Battery Charger, Vout 4.2V, DSBGA-28
 *
 * KiCad symbol: `Battery_Management:BQ51050BYFP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*1.9x3mm*Layout4x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq51050b.pdf
 * Keywords: Qi Wireless Power Receiver Battery Charger 4.2V.
 * Default footprint: Package_BGA:Texas_DSBGA-28_1.9x3mm_Layout4x7_P0.4mm.
 */
export class BQ51050BYFP extends Component.withPins({
  "PGND_A1": "A1",
  "PGND_A2": "A2",
  "PGND_A3": "A3",
  "PGND_A4": "A4",
  "AC2_B1": "B1",
  "AC2_B2": "B2",
  "AC1_B3": "B3",
  "AC1_B4": "B4",
  "BOOT2": "C1",
  "RECT_C2": "C2",
  "RECT_C3": "C3",
  "BOOT1": "C4",
  "BAT_D1": "D1",
  "BAT_D2": "D2",
  "BAT_D3": "D3",
  "BAT_D4": "D4",
  "COMM2": "E1",
  "CLAMP2": "E2",
  "CLAMP1": "E3",
  "COMM1": "E4",
  "TS/CTRL": "F1",
  "FOD": "F2",
  "~{AD-EN}": "F3",
  "~{CHG}": "F4",
  "ILIM": "G1",
  "EN2": "G2",
  "TERM": "G3",
  "AD": "G4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND_A1: "power_in", PGND_A2: "passive", PGND_A3: "passive", PGND_A4: "passive", AC2_B1: "input", AC2_B2: "input", AC1_B3: "input", AC1_B4: "input", BOOT2: "passive", RECT_C2: "passive", RECT_C3: "passive", BOOT1: "passive", BAT_D1: "power_out", BAT_D2: "passive", BAT_D3: "passive", BAT_D4: "passive", COMM2: "open_collector", CLAMP2: "open_collector", CLAMP1: "open_collector", COMM1: "open_collector", "TS/CTRL": "input", FOD: "input", "~{AD-EN}": "output", "~{CHG}": "open_collector", ILIM: "passive", EN2: "input", TERM: "input", AD: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ51050BYFP";
  override referencePrefix = "U";
}

/**
 * Qi v1.2, Wireless Power Receiver and Battery Charger, Vout 4.35V, VQFN-20
 *
 * KiCad symbol: `Battery_Management:BQ51051BRHL`. Reference prefix: `U`.
 * Footprint filters: Texas?VQFN?RHL*.
 * @see http://www.ti.com/lit/ds/symlink/bq51051b.pdf
 * Keywords: Qi Wireless Power Receiver Battery Charger 4.35V.
 * Default footprint: Package_DFN_QFN:Texas_VQFN-RHL-20.
 */
export class BQ51051BRHL extends Component.withPins({
  "PGND_1": "1",
  "AC1": "2",
  "BOOT1": "3",
  "BAT": "4",
  "CLAMP1": "5",
  "COMM1": "6",
  "~{CHG}": "7",
  "~{AD-EN}": "8",
  "AD": "9",
  "TERM": "10",
  "EN2": "11",
  "ILIM": "12",
  "TS/CTRL": "13",
  "FOD": "14",
  "COMM2": "15",
  "CLAMP2": "16",
  "BOOT2": "17",
  "RECT": "18",
  "AC2": "19",
  "PGND_20": "20",
  "PGND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND_1: "power_in", AC1: "input", BOOT1: "passive", BAT: "power_out", CLAMP1: "open_collector", COMM1: "open_collector", "~{CHG}": "open_collector", "~{AD-EN}": "output", AD: "input", TERM: "input", EN2: "input", ILIM: "passive", "TS/CTRL": "input", FOD: "input", COMM2: "open_collector", CLAMP2: "open_collector", BOOT2: "passive", RECT: "passive", AC2: "input", PGND_20: "passive", PGND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ51051BRHL";
  override referencePrefix = "U";
}

/**
 * Qi v1.2, Wireless Power Receiver and Battery Charger, Vout 4.35V, DSBGA-28
 *
 * KiCad symbol: `Battery_Management:BQ51051BYFP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*1.9x3mm*Layout4x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq51051b.pdf
 * Keywords: Qi Wireless Power Receiver Battery Charger 4.35V.
 * Default footprint: Package_BGA:Texas_DSBGA-28_1.9x3mm_Layout4x7_P0.4mm.
 */
export class BQ51051BYFP extends Component.withPins({
  "PGND_A1": "A1",
  "PGND_A2": "A2",
  "PGND_A3": "A3",
  "PGND_A4": "A4",
  "AC2_B1": "B1",
  "AC2_B2": "B2",
  "AC1_B3": "B3",
  "AC1_B4": "B4",
  "BOOT2": "C1",
  "RECT_C2": "C2",
  "RECT_C3": "C3",
  "BOOT1": "C4",
  "BAT_D1": "D1",
  "BAT_D2": "D2",
  "BAT_D3": "D3",
  "BAT_D4": "D4",
  "COMM2": "E1",
  "CLAMP2": "E2",
  "CLAMP1": "E3",
  "COMM1": "E4",
  "TS/CTRL": "F1",
  "FOD": "F2",
  "~{AD-EN}": "F3",
  "~{CHG}": "F4",
  "ILIM": "G1",
  "EN2": "G2",
  "TERM": "G3",
  "AD": "G4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND_A1: "power_in", PGND_A2: "passive", PGND_A3: "passive", PGND_A4: "passive", AC2_B1: "input", AC2_B2: "input", AC1_B3: "input", AC1_B4: "input", BOOT2: "passive", RECT_C2: "passive", RECT_C3: "passive", BOOT1: "passive", BAT_D1: "power_out", BAT_D2: "passive", BAT_D3: "passive", BAT_D4: "passive", COMM2: "open_collector", CLAMP2: "open_collector", CLAMP1: "open_collector", COMM1: "open_collector", "TS/CTRL": "input", FOD: "input", "~{AD-EN}": "output", "~{CHG}": "open_collector", ILIM: "passive", EN2: "input", TERM: "input", AD: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ51051BYFP";
  override referencePrefix = "U";
}

/**
 * Qi v1.2, Wireless Power Receiver and Battery Charger, Vout 4.40V, DSBGA-28
 *
 * KiCad symbol: `Battery_Management:BQ51052BYFP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*1.9x3mm*Layout4x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq51052b.pdf
 * Keywords: Qi Wireless Power Receiver Battery Charger 4.40V.
 * Default footprint: Package_BGA:Texas_DSBGA-28_1.9x3mm_Layout4x7_P0.4mm.
 */
export class BQ51052BYFP extends Component.withPins({
  "PGND_A1": "A1",
  "PGND_A2": "A2",
  "PGND_A3": "A3",
  "PGND_A4": "A4",
  "AC2_B1": "B1",
  "AC2_B2": "B2",
  "AC1_B3": "B3",
  "AC1_B4": "B4",
  "BOOT2": "C1",
  "RECT_C2": "C2",
  "RECT_C3": "C3",
  "BOOT1": "C4",
  "BAT_D1": "D1",
  "BAT_D2": "D2",
  "BAT_D3": "D3",
  "BAT_D4": "D4",
  "COMM2": "E1",
  "CLAMP2": "E2",
  "CLAMP1": "E3",
  "COMM1": "E4",
  "TS/CTRL": "F1",
  "FOD": "F2",
  "~{AD-EN}": "F3",
  "~{CHG}": "F4",
  "ILIM": "G1",
  "EN2": "G2",
  "TERM": "G3",
  "AD": "G4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND_A1: "power_in", PGND_A2: "passive", PGND_A3: "passive", PGND_A4: "passive", AC2_B1: "input", AC2_B2: "input", AC1_B3: "input", AC1_B4: "input", BOOT2: "passive", RECT_C2: "passive", RECT_C3: "passive", BOOT1: "passive", BAT_D1: "power_out", BAT_D2: "passive", BAT_D3: "passive", BAT_D4: "passive", COMM2: "open_collector", CLAMP2: "open_collector", CLAMP1: "open_collector", COMM1: "open_collector", "TS/CTRL": "input", FOD: "input", "~{AD-EN}": "output", "~{CHG}": "open_collector", ILIM: "passive", EN2: "input", TERM: "input", AD: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ51052BYFP";
  override referencePrefix = "U";
}

/**
 * High Voltage Battery Pack Front-End Charge/Discharge High-Side NFET Driver, TSSOP-16
 *
 * KiCad symbol: `Battery_Management:BQ76200PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq76200.pdf
 * Keywords: Battery Pack Charge/Discharge High-Side.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class BQ76200PW extends Component.withPins({
  "VDDCP": "1",
  "BAT": "2",
  "NC_3": "3",
  "CHG_EN": "4",
  "CP_EN": "5",
  "DSG_EN": "6",
  "PMON_EN": "7",
  "PCHG_EN": "8",
  "VSS": "9",
  "PACKDIV": "10",
  "PACK": "11",
  "DSG": "12",
  "NC_13": "13",
  "PCHG": "14",
  "NC_15": "15",
  "CHG": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDCP: "output", BAT: "power_in", NC_3: "no_connect", CHG_EN: "input", CP_EN: "input", DSG_EN: "input", PMON_EN: "input", PCHG_EN: "input", VSS: "power_in", PACKDIV: "output", PACK: "power_in", DSG: "output", NC_13: "no_connect", PCHG: "output", NC_15: "no_connect", CHG: "output", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ76200PW";
  override referencePrefix = "U";
}

/**
 * Lithium battery monitor, 3-5 cells, integrated balancing, I2C interface, TSSOP-20
 *
 * KiCad symbol: `Battery_Management:BQ76920PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq76920.pdf
 * Keywords: lithium battery balance charge afe.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class BQ76920PW extends Component.withPins({
  "TS1": "6",
  "CAP1": "7",
  "REGOUT": "8",
  "REGSRC": "9",
  "BAT": "10",
  "NC": "11",
  "VC5": "12",
  "VC4": "13",
  "VC3": "14",
  "VC2": "15",
  "VC1": "16",
  "VC0": "17",
  "SRP": "18",
  "SRN": "19",
  "ALERT": "20",
  "DSG": "1",
  "CHG": "2",
  "VSS": "3",
  "SDA": "4",
  "SCL": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TS1: "passive", CAP1: "passive", REGOUT: "power_out", REGSRC: "power_in", BAT: "input", NC: "no_connect", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", VC0: "input", SRP: "input", SRN: "input", ALERT: "bidirectional", DSG: "output", CHG: "output", VSS: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ76920PW";
  override referencePrefix = "U";
}

/**
 * Lithium battery monitor, 6-10 cells, integrated balancing, I2C interface, TSSOP-30
 *
 * KiCad symbol: `Battery_Management:BQ76930DBT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq76930.pdf
 * Keywords: lithium battery balance charge afe.
 * Default footprint: Package_SO:TSSOP-30_4.4x7.8mm_P0.5mm.
 */
export class BQ76930DBT extends Component.withPins({
  "TS1": "6",
  "CAP1": "7",
  "REGOUT": "8",
  "REGSRC": "9",
  "VC5X": "10",
  "NC(CAP2)_11": "11",
  "NC(CAP2)_12": "12",
  "TS2": "13",
  "CAP2": "14",
  "BAT": "15",
  "VC10": "16",
  "VC9": "17",
  "VC8": "18",
  "VC7": "19",
  "VC6": "20",
  "VC5B": "21",
  "VC5": "22",
  "VC4": "23",
  "VC3": "24",
  "VC2": "25",
  "VC1": "26",
  "VC0": "27",
  "SRP": "28",
  "SRN": "29",
  "ALERT": "30",
  "DSG": "1",
  "CHG": "2",
  "VSS": "3",
  "SDA": "4",
  "SCL": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TS1: "passive", CAP1: "passive", REGOUT: "power_out", REGSRC: "power_in", VC5X: "passive", "NC(CAP2)_11": "passive", "NC(CAP2)_12": "passive", TS2: "passive", CAP2: "passive", BAT: "input", VC10: "input", VC9: "input", VC8: "input", VC7: "input", VC6: "input", VC5B: "input", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", VC0: "input", SRP: "input", SRN: "input", ALERT: "bidirectional", DSG: "output", CHG: "output", VSS: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ76930DBT";
  override referencePrefix = "U";
}

/**
 * Lithium battery monitor, 9-15 cells, integrated balancing, I2C interface, TSSOP-44
 *
 * KiCad symbol: `Battery_Management:BQ76940DBT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x11.2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq76940.pdf
 * Keywords: lithium battery balance charge afe.
 * Default footprint: Package_SO:TSSOP-44_4.4x11.2mm_P0.5mm.
 */
export class BQ76940DBT extends Component.withPins({
  "TS1": "6",
  "CAP1": "7",
  "REGOUT": "8",
  "REGSRC": "9",
  "VC5X": "10",
  "NC(CAP2)_11": "11",
  "NC(CAP2)_12": "12",
  "TS2": "13",
  "CAP2": "14",
  "VC10X": "15",
  "NC(CAP3)_16": "16",
  "NC(CAP3)_17": "17",
  "TS3": "18",
  "CAP3": "19",
  "BAT": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "VC15": "24",
  "VC14": "25",
  "VC13": "26",
  "VC12": "27",
  "VC11": "28",
  "VC10B": "29",
  "VC10": "30",
  "VC9": "31",
  "VC8": "32",
  "VC7": "33",
  "VC6": "34",
  "VC5B": "35",
  "VC5": "36",
  "VC4": "37",
  "VC3": "38",
  "VC2": "39",
  "VC1": "40",
  "VC0": "41",
  "SRP": "42",
  "SRN": "43",
  "ALERT": "44",
  "DSG": "1",
  "CHG": "2",
  "VSS": "3",
  "SDA": "4",
  "SCL": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TS1: "passive", CAP1: "passive", REGOUT: "power_out", REGSRC: "power_in", VC5X: "passive", "NC(CAP2)_11": "passive", "NC(CAP2)_12": "passive", TS2: "passive", CAP2: "passive", VC10X: "passive", "NC(CAP3)_16": "passive", "NC(CAP3)_17": "passive", TS3: "passive", CAP3: "passive", BAT: "input", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", VC15: "input", VC14: "input", VC13: "input", VC12: "input", VC11: "input", VC10B: "input", VC10: "input", VC9: "input", VC8: "input", VC7: "input", VC6: "input", VC5B: "input", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", VC0: "input", SRP: "input", SRN: "input", ALERT: "bidirectional", DSG: "output", CHG: "output", VSS: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ76940DBT";
  override referencePrefix = "U";
}

/**
 * Lithium battery monitor, 3-16 cells, integrated balancing, I2C interface without CRC, REG1 LDO disabled, TQFP-48
 *
 * KiCad symbol: `Battery_Management:BQ76952PFB`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq76952.pdf
 * Keywords: Texas-Instruments BMS Battery-Management-System lithium Li-ion Li-Polymer LiPo LiFePO4 I2C HDQ.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class BQ76952PFB extends Component.withPins({
  "VC15": "1",
  "VC14": "2",
  "VC13": "3",
  "VC12": "4",
  "VC11": "5",
  "VC10": "6",
  "VC9": "7",
  "VC8": "8",
  "VC7": "9",
  "VC6": "10",
  "VC5": "11",
  "VC4": "12",
  "VC3": "13",
  "VC2": "14",
  "VC1": "15",
  "VC0": "16",
  "VSS": "17",
  "SRP": "18",
  "NC_19": "19",
  "SRN": "20",
  "TS1": "21",
  "TS2/WAKE": "22",
  "TS3": "23",
  "REG18": "24",
  "HDQ_IO/ALERT": "25",
  "SCL/SPI_CLK": "26",
  "SDA/SPI_MISO": "27",
  "HDQ_IO/SPI_MOSI": "28",
  "CFETOFF/SPI_CS": "29",
  "DFETOFF/BOTHOFF": "30",
  "DCHG": "31",
  "DDSG": "32",
  "RST_SHUT": "33",
  "REG2": "34",
  "REG1": "35",
  "REGIN": "36",
  "BREG": "37",
  "FUSE": "38",
  "PDSG": "39",
  "PCHG": "40",
  "LD": "41",
  "PACK": "42",
  "DSG": "43",
  "NC_44": "44",
  "CHG": "45",
  "CP1": "46",
  "BAT": "47",
  "VC16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VC15: "input", VC14: "input", VC13: "input", VC12: "input", VC11: "input", VC10: "input", VC9: "input", VC8: "input", VC7: "input", VC6: "input", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", VC0: "input", VSS: "power_in", SRP: "input", NC_19: "no_connect", SRN: "input", TS1: "input", "TS2/WAKE": "input", TS3: "input", REG18: "power_out", "HDQ_IO/ALERT": "bidirectional", "SCL/SPI_CLK": "input", "SDA/SPI_MISO": "bidirectional", "HDQ_IO/SPI_MOSI": "bidirectional", "CFETOFF/SPI_CS": "bidirectional", "DFETOFF/BOTHOFF": "bidirectional", DCHG: "bidirectional", DDSG: "bidirectional", RST_SHUT: "input", REG2: "power_out", REG1: "power_out", REGIN: "input", BREG: "output", FUSE: "bidirectional", PDSG: "output", PCHG: "output", LD: "passive", PACK: "input", DSG: "output", NC_44: "no_connect", CHG: "output", CP1: "power_out", BAT: "power_in", VC16: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ76952PFB";
  override referencePrefix = "U";
}

/**
 * Lithium battery monitor, 3-16 cells, integrated balancing, SPI interface with CRC, REG1 LDO disabled, TQFP-48
 *
 * KiCad symbol: `Battery_Management:BQ7695201PFB`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq76952.pdf
 * Keywords: Texas-Instruments BMS Battery-Management-System lithium Li-ion Li-Polymer LiPo LiFePO4 SPI HDQ.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class BQ7695201PFB extends Component.withPins({
  "VC15": "1",
  "VC14": "2",
  "VC13": "3",
  "VC12": "4",
  "VC11": "5",
  "VC10": "6",
  "VC9": "7",
  "VC8": "8",
  "VC7": "9",
  "VC6": "10",
  "VC5": "11",
  "VC4": "12",
  "VC3": "13",
  "VC2": "14",
  "VC1": "15",
  "VC0": "16",
  "VSS": "17",
  "SRP": "18",
  "NC_19": "19",
  "SRN": "20",
  "TS1": "21",
  "TS2/WAKE": "22",
  "TS3": "23",
  "REG18": "24",
  "HDQ_IO/ALERT": "25",
  "SCL/SPI_CLK": "26",
  "SDA/SPI_MISO": "27",
  "HDQ_IO/SPI_MOSI": "28",
  "CFETOFF/SPI_CS": "29",
  "DFETOFF/BOTHOFF": "30",
  "DCHG": "31",
  "DDSG": "32",
  "RST_SHUT": "33",
  "REG2": "34",
  "REG1": "35",
  "REGIN": "36",
  "BREG": "37",
  "FUSE": "38",
  "PDSG": "39",
  "PCHG": "40",
  "LD": "41",
  "PACK": "42",
  "DSG": "43",
  "NC_44": "44",
  "CHG": "45",
  "CP1": "46",
  "BAT": "47",
  "VC16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VC15: "input", VC14: "input", VC13: "input", VC12: "input", VC11: "input", VC10: "input", VC9: "input", VC8: "input", VC7: "input", VC6: "input", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", VC0: "input", VSS: "power_in", SRP: "input", NC_19: "no_connect", SRN: "input", TS1: "input", "TS2/WAKE": "input", TS3: "input", REG18: "power_out", "HDQ_IO/ALERT": "bidirectional", "SCL/SPI_CLK": "input", "SDA/SPI_MISO": "bidirectional", "HDQ_IO/SPI_MOSI": "bidirectional", "CFETOFF/SPI_CS": "bidirectional", "DFETOFF/BOTHOFF": "bidirectional", DCHG: "bidirectional", DDSG: "bidirectional", RST_SHUT: "input", REG2: "power_out", REG1: "power_out", REGIN: "input", BREG: "output", FUSE: "bidirectional", PDSG: "output", PCHG: "output", LD: "passive", PACK: "input", DSG: "output", NC_44: "no_connect", CHG: "output", CP1: "power_out", BAT: "power_in", VC16: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ7695201PFB";
  override referencePrefix = "U";
}

/**
 * Lithium battery monitor, 3-16 cells, integrated balancing, I2C interface with CRC, REG1 LDO 3V3, TQFP-48
 *
 * KiCad symbol: `Battery_Management:BQ7695202PFB`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq76952.pdf
 * Keywords: Texas-Instruments BMS Battery-Management-System lithium Li-ion Li-Polymer LiPo LiFePO4 I2C HDQ.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class BQ7695202PFB extends Component.withPins({
  "VC15": "1",
  "VC14": "2",
  "VC13": "3",
  "VC12": "4",
  "VC11": "5",
  "VC10": "6",
  "VC9": "7",
  "VC8": "8",
  "VC7": "9",
  "VC6": "10",
  "VC5": "11",
  "VC4": "12",
  "VC3": "13",
  "VC2": "14",
  "VC1": "15",
  "VC0": "16",
  "VSS": "17",
  "SRP": "18",
  "NC_19": "19",
  "SRN": "20",
  "TS1": "21",
  "TS2/WAKE": "22",
  "TS3": "23",
  "REG18": "24",
  "HDQ_IO/ALERT": "25",
  "SCL/SPI_CLK": "26",
  "SDA/SPI_MISO": "27",
  "HDQ_IO/SPI_MOSI": "28",
  "CFETOFF/SPI_CS": "29",
  "DFETOFF/BOTHOFF": "30",
  "DCHG": "31",
  "DDSG": "32",
  "RST_SHUT": "33",
  "REG2": "34",
  "REG1": "35",
  "REGIN": "36",
  "BREG": "37",
  "FUSE": "38",
  "PDSG": "39",
  "PCHG": "40",
  "LD": "41",
  "PACK": "42",
  "DSG": "43",
  "NC_44": "44",
  "CHG": "45",
  "CP1": "46",
  "BAT": "47",
  "VC16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VC15: "input", VC14: "input", VC13: "input", VC12: "input", VC11: "input", VC10: "input", VC9: "input", VC8: "input", VC7: "input", VC6: "input", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", VC0: "input", VSS: "power_in", SRP: "input", NC_19: "no_connect", SRN: "input", TS1: "input", "TS2/WAKE": "input", TS3: "input", REG18: "power_out", "HDQ_IO/ALERT": "bidirectional", "SCL/SPI_CLK": "input", "SDA/SPI_MISO": "bidirectional", "HDQ_IO/SPI_MOSI": "bidirectional", "CFETOFF/SPI_CS": "bidirectional", "DFETOFF/BOTHOFF": "bidirectional", DCHG: "bidirectional", DDSG: "bidirectional", RST_SHUT: "input", REG2: "power_out", REG1: "power_out", REGIN: "input", BREG: "output", FUSE: "bidirectional", PDSG: "output", PCHG: "output", LD: "passive", PACK: "input", DSG: "output", NC_44: "no_connect", CHG: "output", CP1: "power_out", BAT: "power_in", VC16: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ7695202PFB";
  override referencePrefix = "U";
}

/**
 * Lithium battery monitor, 3-16 cells, integrated balancing, SPI interface with CRC, REG1 LDO 5V, TQFP-48
 *
 * KiCad symbol: `Battery_Management:BQ7695203PFB`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq76952.pdf
 * Keywords: Texas-Instruments BMS Battery-Management-System lithium Li-ion Li-Polymer LiPo LiFePO4 SPI HDQ.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class BQ7695203PFB extends Component.withPins({
  "VC15": "1",
  "VC14": "2",
  "VC13": "3",
  "VC12": "4",
  "VC11": "5",
  "VC10": "6",
  "VC9": "7",
  "VC8": "8",
  "VC7": "9",
  "VC6": "10",
  "VC5": "11",
  "VC4": "12",
  "VC3": "13",
  "VC2": "14",
  "VC1": "15",
  "VC0": "16",
  "VSS": "17",
  "SRP": "18",
  "NC_19": "19",
  "SRN": "20",
  "TS1": "21",
  "TS2/WAKE": "22",
  "TS3": "23",
  "REG18": "24",
  "HDQ_IO/ALERT": "25",
  "SCL/SPI_CLK": "26",
  "SDA/SPI_MISO": "27",
  "HDQ_IO/SPI_MOSI": "28",
  "CFETOFF/SPI_CS": "29",
  "DFETOFF/BOTHOFF": "30",
  "DCHG": "31",
  "DDSG": "32",
  "RST_SHUT": "33",
  "REG2": "34",
  "REG1": "35",
  "REGIN": "36",
  "BREG": "37",
  "FUSE": "38",
  "PDSG": "39",
  "PCHG": "40",
  "LD": "41",
  "PACK": "42",
  "DSG": "43",
  "NC_44": "44",
  "CHG": "45",
  "CP1": "46",
  "BAT": "47",
  "VC16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VC15: "input", VC14: "input", VC13: "input", VC12: "input", VC11: "input", VC10: "input", VC9: "input", VC8: "input", VC7: "input", VC6: "input", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", VC0: "input", VSS: "power_in", SRP: "input", NC_19: "no_connect", SRN: "input", TS1: "input", "TS2/WAKE": "input", TS3: "input", REG18: "power_out", "HDQ_IO/ALERT": "bidirectional", "SCL/SPI_CLK": "input", "SDA/SPI_MISO": "bidirectional", "HDQ_IO/SPI_MOSI": "bidirectional", "CFETOFF/SPI_CS": "bidirectional", "DFETOFF/BOTHOFF": "bidirectional", DCHG: "bidirectional", DDSG: "bidirectional", RST_SHUT: "input", REG2: "power_out", REG1: "power_out", REGIN: "input", BREG: "output", FUSE: "bidirectional", PDSG: "output", PCHG: "output", LD: "passive", PACK: "input", DSG: "output", NC_44: "no_connect", CHG: "output", CP1: "power_out", BAT: "power_in", VC16: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ7695203PFB";
  override referencePrefix = "U";
}

/**
 * Lithium battery monitor, 3-16 cells, integrated balancing, SPI interface with CRC, REG1 LDO 3V3, TQFP-48
 *
 * KiCad symbol: `Battery_Management:BQ7695204PFB`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/bq76952.pdf
 * Keywords: Texas-Instruments BMS Battery-Management-System lithium Li-ion Li-Polymer LiPo LiFePO4 SPI HDQ.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class BQ7695204PFB extends Component.withPins({
  "VC15": "1",
  "VC14": "2",
  "VC13": "3",
  "VC12": "4",
  "VC11": "5",
  "VC10": "6",
  "VC9": "7",
  "VC8": "8",
  "VC7": "9",
  "VC6": "10",
  "VC5": "11",
  "VC4": "12",
  "VC3": "13",
  "VC2": "14",
  "VC1": "15",
  "VC0": "16",
  "VSS": "17",
  "SRP": "18",
  "NC_19": "19",
  "SRN": "20",
  "TS1": "21",
  "TS2/WAKE": "22",
  "TS3": "23",
  "REG18": "24",
  "HDQ_IO/ALERT": "25",
  "SCL/SPI_CLK": "26",
  "SDA/SPI_MISO": "27",
  "HDQ_IO/SPI_MOSI": "28",
  "CFETOFF/SPI_CS": "29",
  "DFETOFF/BOTHOFF": "30",
  "DCHG": "31",
  "DDSG": "32",
  "RST_SHUT": "33",
  "REG2": "34",
  "REG1": "35",
  "REGIN": "36",
  "BREG": "37",
  "FUSE": "38",
  "PDSG": "39",
  "PCHG": "40",
  "LD": "41",
  "PACK": "42",
  "DSG": "43",
  "NC_44": "44",
  "CHG": "45",
  "CP1": "46",
  "BAT": "47",
  "VC16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VC15: "input", VC14: "input", VC13: "input", VC12: "input", VC11: "input", VC10: "input", VC9: "input", VC8: "input", VC7: "input", VC6: "input", VC5: "input", VC4: "input", VC3: "input", VC2: "input", VC1: "input", VC0: "input", VSS: "power_in", SRP: "input", NC_19: "no_connect", SRN: "input", TS1: "input", "TS2/WAKE": "input", TS3: "input", REG18: "power_out", "HDQ_IO/ALERT": "bidirectional", "SCL/SPI_CLK": "input", "SDA/SPI_MISO": "bidirectional", "HDQ_IO/SPI_MOSI": "bidirectional", "CFETOFF/SPI_CS": "bidirectional", "DFETOFF/BOTHOFF": "bidirectional", DCHG: "bidirectional", DDSG: "bidirectional", RST_SHUT: "input", REG2: "power_out", REG1: "power_out", REGIN: "input", BREG: "output", FUSE: "bidirectional", PDSG: "output", PCHG: "output", LD: "passive", PACK: "input", DSG: "output", NC_44: "no_connect", CHG: "output", CP1: "power_out", BAT: "power_in", VC16: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ7695204PFB";
  override referencePrefix = "U";
}

/**
 * Lithium battery fuel gauge, battery management controller for BQ769x0, TSSOP-30
 *
 * KiCad symbol: `Battery_Management:BQ78350DBT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq78350.pdf
 * Keywords: battery management Li-Ion Gauge controller.
 * Default footprint: Package_SO:TSSOP-30_4.4x7.8mm_P0.5mm.
 */
export class BQ78350DBT extends Component.withPins({
  "COM": "1",
  "ALERT": "2",
  "SDA": "3",
  "SCL": "4",
  "~{PRECHG}": "5",
  "VAUX": "6",
  "BAT": "7",
  "~{PRES}": "8",
  "~{KEYIN}": "9",
  "SAFE": "10",
  "SMBD": "11",
  "VEN": "12",
  "SMBC": "13",
  "~{DISP}": "14",
  "PWRM": "15",
  "LED1": "16",
  "LED2": "17",
  "LED3": "18",
  "LED4": "19",
  "LED5": "20",
  "GPIO_A": "21",
  "VSS_22": "22",
  "VSS_23": "23",
  "~{MRST}": "24",
  "VSS_25": "25",
  "VCC": "26",
  "RBI": "27",
  "GPIO_B": "28",
  "ADREN": "29",
  "SMBA": "30",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COM: "open_collector", ALERT: "bidirectional", SDA: "bidirectional", SCL: "output", "~{PRECHG}": "output", VAUX: "input", BAT: "input", "~{PRES}": "input", "~{KEYIN}": "input", SAFE: "output", SMBD: "bidirectional", VEN: "open_collector", SMBC: "bidirectional", "~{DISP}": "input", PWRM: "open_collector", LED1: "output", LED2: "output", LED3: "output", LED4: "output", LED5: "output", GPIO_A: "bidirectional", VSS_22: "passive", VSS_23: "power_in", "~{MRST}": "input", VSS_25: "passive", VCC: "power_in", RBI: "passive", GPIO_B: "bidirectional", ADREN: "output", SMBA: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ78350DBT";
  override referencePrefix = "U";
}

/**
 * Lithium battery fuel gauge, battery management controller for BQ769x0, TSSOP-30
 *
 * KiCad symbol: `Battery_Management:BQ78350DBT-R1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq78350-r1.pdf
 * Keywords: battery management Li-Ion gauge controller.
 * Default footprint: Package_SO:TSSOP-30_4.4x7.8mm_P0.5mm.
 */
export class BQ78350DBT_R1 extends Component.withPins({
  "COM": "1",
  "ALERT": "2",
  "SDA": "3",
  "SCL": "4",
  "~{PRECHG}": "5",
  "VAUX": "6",
  "BAT": "7",
  "~{PRES}": "8",
  "~{KEYIN}": "9",
  "SAFE": "10",
  "SMBD": "11",
  "VEN": "12",
  "SMBC": "13",
  "~{DISP}": "14",
  "PWRM": "15",
  "LED1": "16",
  "LED2": "17",
  "LED3": "18",
  "LED4": "19",
  "LED5": "20",
  "GPIO_A": "21",
  "VSS_22": "22",
  "VSS_23": "23",
  "~{MRST}": "24",
  "VSS_25": "25",
  "VCC": "26",
  "RBI": "27",
  "GPIO_B": "28",
  "ADREN": "29",
  "SMBA": "30",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COM: "open_collector", ALERT: "bidirectional", SDA: "bidirectional", SCL: "output", "~{PRECHG}": "output", VAUX: "input", BAT: "input", "~{PRES}": "input", "~{KEYIN}": "input", SAFE: "output", SMBD: "bidirectional", VEN: "open_collector", SMBC: "bidirectional", "~{DISP}": "input", PWRM: "open_collector", LED1: "output", LED2: "output", LED3: "output", LED4: "output", LED5: "output", GPIO_A: "bidirectional", VSS_22: "passive", VSS_23: "power_in", "~{MRST}": "input", VSS_25: "passive", VCC: "power_in", RBI: "passive", GPIO_B: "bidirectional", ADREN: "output", SMBA: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:BQ78350DBT-R1";
  override referencePrefix = "U";
}

/**
 * Constant-current/constant voltage linear charger for single cell Li-ion and Li Polymer batteries ideally suited for solar powered systems, 1A, SOIC-8-1EP
 *
 * KiCad symbol: `Battery_Management:CN3163`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.*P1.27mm*EP2.41x3.3mm*.
 * @see http://www.consonance-elec.com/en/static/upload/file/20220425/1650867248788667.pdf
 * Keywords: lithium-ion li-ion charger solar.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm_ThermalVias.
 */
export class CN3163 extends Component.withPins({
  "TEMP": "1",
  "ISET": "2",
  "GND_3": "3",
  "VIN": "4",
  "BAT": "5",
  "~{DONE}": "6",
  "~{CHRG}": "7",
  "FB": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEMP: "input", ISET: "input", GND_3: "power_in", VIN: "power_in", BAT: "power_out", "~{DONE}": "open_collector", "~{CHRG}": "open_collector", FB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:CN3163";
  override referencePrefix = "U";
}

/**
 * Constant-current/constant voltage linear charger for single cell Li-ion and Li Polymer batteries ideally suited for solar powered systems, 0.6A, SOIC-8-1EP
 *
 * KiCad symbol: `Battery_Management:CN3063`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.*P1.27mm*EP2.41x3.3mm*.
 * @see https://www.lcsc.com/datasheet/C28078.pdf
 * Keywords: lithium-ion li-ion charger solar.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm_ThermalVias.
 */
export class CN3063 extends Component.withPins({
  "TEMP": "1",
  "ISET": "2",
  "GND_3": "3",
  "VIN": "4",
  "BAT": "5",
  "~{DONE}": "6",
  "~{CHRG}": "7",
  "FB": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEMP: "input", ISET: "input", GND_3: "power_in", VIN: "power_in", BAT: "power_out", "~{DONE}": "open_collector", "~{CHRG}": "open_collector", FB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:CN3063";
  override referencePrefix = "U";
}

/**
 * LiFePO4 Battery Charger for Solar-Powered System, 1A, SOIC-8-1EP
 *
 * KiCad symbol: `Battery_Management:CN3158`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.*P1.27mm*EP2.41x3.3mm*.
 * @see http://www.consonance-elec.com/en/static/upload/file/20220425/1650867483177475.pdf
 * Keywords: LiFePO4 charger solar.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm_ThermalVias.
 */
export class CN3158 extends Component.withPins({
  "TEMP": "1",
  "ISET": "2",
  "GND_3": "3",
  "VIN": "4",
  "BAT": "5",
  "~{DONE}": "6",
  "~{CHRG}": "7",
  "FB": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEMP: "input", ISET: "input", GND_3: "power_in", VIN: "power_in", BAT: "power_out", "~{DONE}": "open_collector", "~{CHRG}": "open_collector", FB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:CN3158";
  override referencePrefix = "U";
}

/**
 * JEITA-Compliant 1-Cell Lithium Battery Charger IC for Solar-Powered Systems, 0.95A, SOIC-8-1EP
 *
 * KiCad symbol: `Battery_Management:CN3170`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.*P1.27mm*EP2.41x3.3mm*.
 * @see http://www.consonance-elec.com/en/static/upload/file/20221107/1667805770192920.pdf
 * Keywords: lithium-ion li-ion charger solar.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm_ThermalVias.
 */
export class CN3170 extends Component.withPins({
  "TEMP": "1",
  "ISET": "2",
  "GND_3": "3",
  "VIN": "4",
  "BAT": "5",
  "~{DONE}": "6",
  "~{CHRG}": "7",
  "FB": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEMP: "input", ISET: "input", GND_3: "power_in", VIN: "power_in", BAT: "power_out", "~{DONE}": "open_collector", "~{CHRG}": "open_collector", FB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:CN3170";
  override referencePrefix = "U";
}

/**
 * Current-flow, voltage and temperature measurement to support battery capacity monitoring, 2.5V to 4.5V VDD, -40 to +85 degree Celsius, TSSOP-8
 *
 * KiCad symbol: `Battery_Management:DS2745U`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS2745.pdf
 * Keywords: battery capacity monitor I2C.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class DS2745U extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "PIO": "3",
  "SNS": "4",
  "V_{SS}": "5",
  "CTG": "6",
  "VIN": "7",
  "V_{DD}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", PIO: "open_collector", SNS: "input", "V_{SS}": "power_in", CTG: "input", VIN: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:DS2745U";
  override referencePrefix = "U";
}

/**
 * Overcharge, overcurrent and overdischarge protection IC for single cell lithium-ion/polymer battery
 *
 * KiCad symbol: `Battery_Management:DW01A`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://hmsemi.com/downfile/DW01A.PDF
 * Keywords: battery protection li-ion lipo overcurrent overdischarge overcharge.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class DW01A extends Component.withPins({
  "OD": "1",
  "CS": "2",
  "OC": "3",
  "VCC": "5",
  "GND": "6",
  "TD": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OD: "output", CS: "input", OC: "output", VCC: "power_in", GND: "power_in", TD: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:DW01A";
  override referencePrefix = "U";
}

/**
 * Single LiPo battery fuel gauge, I2C, type 01, WDFN-8
 *
 * KiCad symbol: `Battery_Management:LC709203FQH-01TWG`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*4x3mm*P0.65mm*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/lc709203f-d.pdf
 * Keywords: Battery gauge I2C.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_4x3mm_P0.65mm_EP2.4x1.8mm.
 */
export class LC709203FQH_01TWG extends Component.withPins({
  "TEST": "1",
  "V_{SS}": "2",
  "V_{DD}": "3",
  "~{ALARMB}": "4",
  "T_{SW}": "5",
  "T_{SENSE}": "6",
  "SDA": "7",
  "SCL": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEST: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", "~{ALARMB}": "open_collector", "T_{SW}": "output", "T_{SENSE}": "input", SDA: "bidirectional", SCL: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LC709203FQH-01TWG";
  override referencePrefix = "U";
}

/**
 * Single LiPo battery fuel gauge, I2C, type 02, WDFN-8
 *
 * KiCad symbol: `Battery_Management:LC709203FQH-02TWG`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*4x3mm*P0.65mm*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/lc709203f-d.pdf
 * Keywords: Battery gauge I2C.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_4x3mm_P0.65mm_EP2.4x1.8mm.
 */
export class LC709203FQH_02TWG extends Component.withPins({
  "TEST": "1",
  "V_{SS}": "2",
  "V_{DD}": "3",
  "~{ALARMB}": "4",
  "T_{SW}": "5",
  "T_{SENSE}": "6",
  "SDA": "7",
  "SCL": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEST: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", "~{ALARMB}": "open_collector", "T_{SW}": "output", "T_{SENSE}": "input", SDA: "bidirectional", SCL: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LC709203FQH-02TWG";
  override referencePrefix = "U";
}

/**
 * Single LiPo battery fuel gauge, I2C, type 03, WDFN-8
 *
 * KiCad symbol: `Battery_Management:LC709203FQH-03TWG`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*4x3mm*P0.65mm*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/lc709203f-d.pdf
 * Keywords: Battery gauge I2C.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_4x3mm_P0.65mm_EP2.4x1.8mm.
 */
export class LC709203FQH_03TWG extends Component.withPins({
  "TEST": "1",
  "V_{SS}": "2",
  "V_{DD}": "3",
  "~{ALARMB}": "4",
  "T_{SW}": "5",
  "T_{SENSE}": "6",
  "SDA": "7",
  "SCL": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEST: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", "~{ALARMB}": "open_collector", "T_{SW}": "output", "T_{SENSE}": "input", SDA: "bidirectional", SCL: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LC709203FQH-03TWG";
  override referencePrefix = "U";
}

/**
 * Single LiPo battery fuel gauge, I2C, type 04, WDFN-8
 *
 * KiCad symbol: `Battery_Management:LC709203FQH-04TWG`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*4x3mm*P0.65mm*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/lc709203f-d.pdf
 * Keywords: Battery gauge I2C.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_4x3mm_P0.65mm_EP2.4x1.8mm.
 */
export class LC709203FQH_04TWG extends Component.withPins({
  "TEST": "1",
  "V_{SS}": "2",
  "V_{DD}": "3",
  "~{ALARMB}": "4",
  "T_{SW}": "5",
  "T_{SENSE}": "6",
  "SDA": "7",
  "SCL": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEST: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", "~{ALARMB}": "open_collector", "T_{SW}": "output", "T_{SENSE}": "input", SDA: "bidirectional", SCL: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LC709203FQH-04TWG";
  override referencePrefix = "U";
}

/**
 * LiPo charger and 5V boost converter, 4.5-5.5V input, 4.2-4.4V battery, 400-1000mA charge current, 800mA boost output, SOIC-8-1EP
 *
 * KiCad symbol: `Battery_Management:LGS5500EP`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*P1.27mm*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_2304071430_Legend-Si-LGS5500EP_C5280699.pdf
 * Keywords: lipo lithium battery charger boost.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm.
 */
export class LGS5500EP extends Component.withPins({
  "ISET": "1",
  "VIN": "2",
  "VL": "3",
  "LX": "4",
  "VH": "5",
  "NC": "6",
  "VSET/LED": "7",
  "NTC": "8",
  "GND": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ISET: "passive", VIN: "power_in", VL: "input", LX: "input", VH: "power_out", NC: "no_connect", "VSET/LED": "output", NTC: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LGS5500EP";
  override referencePrefix = "U";
}

/**
 * Single Cell Li-Ion LDO Battery Charger IC, Up to 1A, Support USB charging scheme
 *
 * KiCad symbol: `Battery_Management:LP3947`. Reference prefix: `U`.
 * Footprint filters: WSON*4.0x4.0mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lp3947.pdf
 * Keywords: li-ion battery charger usb.
 * Default footprint: Package_SON:WSON-14-1EP_4.0x4.0mm_P0.5mm_EP2.6x2.6mm.
 */
export class LP3947 extends Component.withPins({
  "EN": "1",
  "SCL": "2",
  "SDA": "3",
  "BATT": "4",
  "V_{T}": "5",
  "VB_{SENSE}": "6",
  "MODE": "7",
  "DIFF_AMP": "8",
  "Ts": "9",
  "EOC": "10",
  "GND": "11",
  "CHG": "12",
  "ISEL": "13",
  "CHG_IN": "14",
  "EP": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", SCL: "input", SDA: "bidirectional", BATT: "power_out", "V_{T}": "power_out", "VB_{SENSE}": "input", MODE: "input", DIFF_AMP: "output", Ts: "input", EOC: "open_collector", GND: "power_in", CHG: "open_collector", ISEL: "input", CHG_IN: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LP3947";
  override referencePrefix = "U";
}

/**
 * Step-down battery charger for solar power, Lithium Phosphate (LiFePO4), Lead (Pb), Lithium+ (Li+) , 4.95V to 32V VDD, 2A, -40 to +125 degree Celsius, DFN-12
 *
 * KiCad symbol: `Battery_Management:LT3652EDD`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.45mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3652fe.pdf
 * Keywords: battery charger solar.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x3mm_P0.45mm_EP1.65x2.38mm.
 */
export class LT3652EDD extends Component.withPins({
  "V_{IN}": "1",
  "V_{IN_REG}": "2",
  "~{SHDN}": "3",
  "~{CHRG}": "4",
  "~{FAULT}": "5",
  "TIMER": "6",
  "V_{FB}": "7",
  "NTC": "8",
  "BAT": "9",
  "SENSE": "10",
  "BOOST": "11",
  "SW": "12",
  "GND": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", "V_{IN_REG}": "input", "~{SHDN}": "input", "~{CHRG}": "open_collector", "~{FAULT}": "open_collector", TIMER: "output", "V_{FB}": "input", NTC: "input", BAT: "output", SENSE: "input", BOOST: "input", SW: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LT3652EDD";
  override referencePrefix = "U";
}

/**
 * Step-down battery charger for solar power, Lithium Phosphate (LiFePO4), Lead (Pb), Lithium+ (Li+) , 4.95V to 32V VDD, 2A, -40 to +125 degree Celsius, MSOP-12
 *
 * KiCad symbol: `Battery_Management:LT3652EMSE`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x4.039mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3652fe.pdf
 * Keywords: battery charger solar.
 * Default footprint: Package_SO:MSOP-12-1EP_3x4.039mm_P0.65mm_EP1.651x2.845mm.
 */
export class LT3652EMSE extends Component.withPins({
  "V_{IN}": "1",
  "V_{IN_REG}": "2",
  "~{SHDN}": "3",
  "~{CHRG}": "4",
  "~{FAULT}": "5",
  "TIMER": "6",
  "V_{FB}": "7",
  "NTC": "8",
  "BAT": "9",
  "SENSE": "10",
  "BOOST": "11",
  "SW": "12",
  "GND": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", "V_{IN_REG}": "input", "~{SHDN}": "input", "~{CHRG}": "open_collector", "~{FAULT}": "open_collector", TIMER: "output", "V_{FB}": "input", NTC: "input", BAT: "output", SENSE: "input", BOOST: "input", SW: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LT3652EMSE";
  override referencePrefix = "U";
}

/**
 * Step-down battery charger for solar power, Lithium Phosphate (LiFePO4), Lead (Pb), Lithium+ (Li+) , 4.95V to 32V VDD, 2A, -40 to +125 degree Celsius, DFN-12
 *
 * KiCad symbol: `Battery_Management:LT3652IDD`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.45mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3652fe.pdf
 * Keywords: battery charger solar.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x3mm_P0.45mm_EP1.65x2.38mm.
 */
export class LT3652IDD extends Component.withPins({
  "V_{IN}": "1",
  "V_{IN_REG}": "2",
  "~{SHDN}": "3",
  "~{CHRG}": "4",
  "~{FAULT}": "5",
  "TIMER": "6",
  "V_{FB}": "7",
  "NTC": "8",
  "BAT": "9",
  "SENSE": "10",
  "BOOST": "11",
  "SW": "12",
  "GND": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", "V_{IN_REG}": "input", "~{SHDN}": "input", "~{CHRG}": "open_collector", "~{FAULT}": "open_collector", TIMER: "output", "V_{FB}": "input", NTC: "input", BAT: "output", SENSE: "input", BOOST: "input", SW: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LT3652IDD";
  override referencePrefix = "U";
}

/**
 * Step-down battery charger for solar power, Lithium Phosphate (LiFePO4), Lead (Pb), Lithium+ (Li+) , 4.95V to 32V VDD, 2A, -40 to +125 degree Celsius, MSOP-12
 *
 * KiCad symbol: `Battery_Management:LT3652IMSE`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x4.039mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3652fe.pdf
 * Keywords: battery charger solar.
 * Default footprint: Package_SO:MSOP-12-1EP_3x4.039mm_P0.65mm_EP1.651x2.845mm.
 */
export class LT3652IMSE extends Component.withPins({
  "V_{IN}": "1",
  "V_{IN_REG}": "2",
  "~{SHDN}": "3",
  "~{CHRG}": "4",
  "~{FAULT}": "5",
  "TIMER": "6",
  "V_{FB}": "7",
  "NTC": "8",
  "BAT": "9",
  "SENSE": "10",
  "BOOST": "11",
  "SW": "12",
  "GND": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", "V_{IN_REG}": "input", "~{SHDN}": "input", "~{CHRG}": "open_collector", "~{FAULT}": "open_collector", TIMER: "output", "V_{FB}": "input", NTC: "input", BAT: "output", SENSE: "input", BOOST: "input", SW: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LT3652IMSE";
  override referencePrefix = "U";
}

/**
 * Battery Gas Gauge with Temperature, Voltage Measurement, DFN-6
 *
 * KiCad symbol: `Battery_Management:LTC2942`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2942fa.pdf
 * Keywords: Fuel gauge coulomb counter I2C.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x2mm_P0.5mm_EP1.65x1.35mm.
 */
export class LTC2942 extends Component.withPins({
  "SENSE+": "1",
  "GND": "2",
  "SCL": "3",
  "SDA": "4",
  "~{AL}/CC": "5",
  "SENSE-": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE+": "passive", GND: "power_in", SCL: "input", SDA: "bidirectional", "~{AL}/CC": "bidirectional", "SENSE-": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC2942";
  override referencePrefix = "U";
}

/**
 * 1A Battery Gas Gauge with Internal Sense Resistor and Temperature/Voltage Measurement, DFN-6
 *
 * KiCad symbol: `Battery_Management:LTC2942-1`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/29421f.pdf
 * Keywords: Fuel gauge coulomb counter I2C.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x2mm_P0.5mm_EP1.65x1.35mm.
 */
export class LTC2942_1 extends Component.withPins({
  "SENSE+": "1",
  "GND": "2",
  "SCL": "3",
  "SDA": "4",
  "~{AL}/CC": "5",
  "SENSE-": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE+": "passive", GND: "power_in", SCL: "input", SDA: "bidirectional", "~{AL}/CC": "bidirectional", "SENSE-": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC2942-1";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Power Battery Gas Gauge with Temperature, Voltage Measurement, DFN-10
 *
 * KiCad symbol: `Battery_Management:LTC2959`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltc2959.pdf
 * Keywords: Ultra-low power fuel gauge coulomb counter I2C.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_2x3mm_P0.5mm_EP0.64x2.4mm.
 */
export class LTC2959 extends Component.withPins({
  "V_{DD}": "1",
  "SENSEP": "2",
  "CFP": "3",
  "CFN": "4",
  "SENSEN": "5",
  "SCL": "6",
  "SDA": "7",
  "GPIO": "8",
  "V_{REG}": "9",
  "GND": "10",
  "EP": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", SENSEP: "passive", CFP: "passive", CFN: "passive", SENSEN: "passive", SCL: "input", SDA: "bidirectional", GPIO: "bidirectional", "V_{REG}": "power_out", GND: "power_in", EP: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC2959";
  override referencePrefix = "U";
}

/**
 * Micropower USB Power Manager With Li-Ion Charger, LDO and Buck Regulator, 4.2V float, QFN-20
 *
 * KiCad symbol: `Battery_Management:LTC3553`. Reference prefix: `U`.
 * Footprint filters: *QFN*3x3mm*P0.4mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3553fc.pdf
 * Keywords: USB PMIC.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_3x3mm_P0.4mm_EP1.65x1.65mm.
 */
export class LTC3553 extends Component.withPins({
  "HPWR": "1",
  "SEQ": "2",
  "PBSTAT": "3",
  "~{ON}": "4",
  "LDO_ON": "5",
  "STBY": "6",
  "BUCK_ON": "7",
  "BUCK_FB": "8",
  "LDO_FB": "9",
  "LDO": "10",
  "VINLDO": "11",
  "BVIN": "12",
  "SW": "13",
  "~{CHRG}": "14",
  "NTC": "15",
  "PROG": "16",
  "BAT": "17",
  "VOUT": "18",
  "SUSP": "19",
  "VBUS": "20",
  "GND": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HPWR: "input", SEQ: "input", PBSTAT: "output", "~{ON}": "input", LDO_ON: "input", STBY: "input", BUCK_ON: "input", BUCK_FB: "input", LDO_FB: "input", LDO: "power_out", VINLDO: "power_in", BVIN: "power_in", SW: "power_out", "~{CHRG}": "open_collector", NTC: "passive", PROG: "passive", BAT: "power_out", VOUT: "power_out", SUSP: "input", VBUS: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC3553";
  override referencePrefix = "U";
}

/**
 * High Efficiency USB Power Manager + Triple Step-Down DC/DC, 4.2V float, QFN-28
 *
 * KiCad symbol: `Battery_Management:LTC3555`. Reference prefix: `U`.
 * Footprint filters: QFN*4x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3555fe.pdf
 * Keywords: USB PMIC.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x5mm_P0.5mm_EP2.65x3.65mm.
 */
export class LTC3555 extends Component.withPins({
  "LDO3V3": "1",
  "CLPROG": "2",
  "NTC": "3",
  "FB2": "4",
  "V_{IN2}": "5",
  "SW2": "6",
  "EN2": "7",
  "DV_{CC}": "8",
  "SCL": "9",
  "SDA": "10",
  "V_{IN3}": "11",
  "SW3": "12",
  "EN3": "13",
  "FB3": "14",
  "~{RST3}": "15",
  "EN1": "16",
  "SW1": "17",
  "V_{IN1}": "18",
  "FB1": "19",
  "PROG": "20",
  "~{CHRG}": "21",
  "GATE": "22",
  "BAT": "23",
  "V_{OUT}": "24",
  "VBUS": "25",
  "SW": "26",
  "I_{LIM0}": "27",
  "I_{LIM1}": "28",
  "GND": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LDO3V3: "power_out", CLPROG: "passive", NTC: "passive", FB2: "input", "V_{IN2}": "power_in", SW2: "power_out", EN2: "input", "DV_{CC}": "power_in", SCL: "input", SDA: "bidirectional", "V_{IN3}": "power_in", SW3: "power_out", EN3: "input", FB3: "input", "~{RST3}": "open_collector", EN1: "input", SW1: "power_out", "V_{IN1}": "power_in", FB1: "input", PROG: "passive", "~{CHRG}": "open_collector", GATE: "output", BAT: "power_out", "V_{OUT}": "power_out", VBUS: "power_in", SW: "power_out", "I_{LIM0}": "input", "I_{LIM1}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC3555";
  override referencePrefix = "U";
}

/**
 * High Efficiency USB Power Manager + Triple Step-Down DC/DC, instant-on power, 4.2V float, QFN-28
 *
 * KiCad symbol: `Battery_Management:LTC3555-1`. Reference prefix: `U`.
 * Footprint filters: QFN*4x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3555fe.pdf
 * Keywords: USB PMIC.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x5mm_P0.5mm_EP2.65x3.65mm.
 */
export class LTC3555_1 extends Component.withPins({
  "LDO3V3": "1",
  "CLPROG": "2",
  "NTC": "3",
  "FB2": "4",
  "V_{IN2}": "5",
  "SW2": "6",
  "EN2": "7",
  "DV_{CC}": "8",
  "SCL": "9",
  "SDA": "10",
  "V_{IN3}": "11",
  "SW3": "12",
  "EN3": "13",
  "FB3": "14",
  "~{RST3}": "15",
  "EN1": "16",
  "SW1": "17",
  "V_{IN1}": "18",
  "FB1": "19",
  "PROG": "20",
  "~{CHRG}": "21",
  "GATE": "22",
  "BAT": "23",
  "V_{OUT}": "24",
  "VBUS": "25",
  "SW": "26",
  "I_{LIM0}": "27",
  "I_{LIM1}": "28",
  "GND": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LDO3V3: "power_out", CLPROG: "passive", NTC: "passive", FB2: "input", "V_{IN2}": "power_in", SW2: "power_out", EN2: "input", "DV_{CC}": "power_in", SCL: "input", SDA: "bidirectional", "V_{IN3}": "power_in", SW3: "power_out", EN3: "input", FB3: "input", "~{RST3}": "open_collector", EN1: "input", SW1: "power_out", "V_{IN1}": "power_in", FB1: "input", PROG: "passive", "~{CHRG}": "open_collector", GATE: "output", BAT: "power_out", "V_{OUT}": "power_out", VBUS: "power_in", SW: "power_out", "I_{LIM0}": "input", "I_{LIM1}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC3555-1";
  override referencePrefix = "U";
}

/**
 * High Efficiency USB Power Manager + Triple Step-Down DC/DC, instant-on power, 4.1V float, QFN-28
 *
 * KiCad symbol: `Battery_Management:LTC3555-3`. Reference prefix: `U`.
 * Footprint filters: QFN*4x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3555fe.pdf
 * Keywords: USB PMIC.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x5mm_P0.5mm_EP2.65x3.65mm.
 */
export class LTC3555_3 extends Component.withPins({
  "LDO3V3": "1",
  "CLPROG": "2",
  "NTC": "3",
  "FB2": "4",
  "V_{IN2}": "5",
  "SW2": "6",
  "EN2": "7",
  "DV_{CC}": "8",
  "SCL": "9",
  "SDA": "10",
  "V_{IN3}": "11",
  "SW3": "12",
  "EN3": "13",
  "FB3": "14",
  "~{RST3}": "15",
  "EN1": "16",
  "SW1": "17",
  "V_{IN1}": "18",
  "FB1": "19",
  "PROG": "20",
  "~{CHRG}": "21",
  "GATE": "22",
  "BAT": "23",
  "V_{OUT}": "24",
  "VBUS": "25",
  "SW": "26",
  "I_{LIM0}": "27",
  "I_{LIM1}": "28",
  "GND": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LDO3V3: "power_out", CLPROG: "passive", NTC: "passive", FB2: "input", "V_{IN2}": "power_in", SW2: "power_out", EN2: "input", "DV_{CC}": "power_in", SCL: "input", SDA: "bidirectional", "V_{IN3}": "power_in", SW3: "power_out", EN3: "input", FB3: "input", "~{RST3}": "open_collector", EN1: "input", SW1: "power_out", "V_{IN1}": "power_in", FB1: "input", PROG: "passive", "~{CHRG}": "open_collector", GATE: "output", BAT: "power_out", "V_{OUT}": "power_out", VBUS: "power_in", SW: "power_out", "I_{LIM0}": "input", "I_{LIM1}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC3555-3";
  override referencePrefix = "U";
}

/**
 * Single cell (4.2V) programmable synchronous buck Li-Ion charger, 2A, 5.5V input, QFN-16
 *
 * KiCad symbol: `Battery_Management:LTC4001`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4001f.pdf
 * Keywords: Li-Ion charger.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.15x2.15mm.
 */
export class LTC4001 extends Component.withPins({
  "BAT": "1",
  "SENSE": "2",
  "PGND": "3",
  "GNDSENS": "4",
  "SW": "5",
  "~{EN}": "6",
  "~{CHRG}": "7",
  "P_{VIN}": "8",
  "V_{INSENSE}": "9",
  "FAULT": "10",
  "NTC": "11",
  "PROG": "12",
  "IDET": "13",
  "SS": "14",
  "TIMER": "15",
  "BATSENS": "16",
  "PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BAT: "output", SENSE: "input", PGND: "power_in", GNDSENS: "power_in", SW: "output", "~{EN}": "input", "~{CHRG}": "open_collector", "P_{VIN}": "power_in", "V_{INSENSE}": "power_in", FAULT: "output", NTC: "input", PROG: "input", IDET: "input", SS: "input", TIMER: "input", BATSENS: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4001";
  override referencePrefix = "U";
}

/**
 * Single cell (4.1V) programmable synchronous buck Li-Ion charger, 2A, 5.5V input, QFN-16
 *
 * KiCad symbol: `Battery_Management:LTC4001-1`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/40011fa.pdf
 * Keywords: Li-Ion Charger.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.15x2.15mm.
 */
export class LTC4001_1 extends Component.withPins({
  "BAT": "1",
  "SENSE": "2",
  "PGND": "3",
  "GNDSENS": "4",
  "SW": "5",
  "~{EN}": "6",
  "~{CHRG}": "7",
  "P_{VIN}": "8",
  "V_{INSENSE}": "9",
  "FAULT": "10",
  "NTC": "11",
  "PROG": "12",
  "IDET": "13",
  "SS": "14",
  "TIMER": "15",
  "BATSENS": "16",
  "PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BAT: "output", SENSE: "input", PGND: "power_in", GNDSENS: "power_in", SW: "output", "~{EN}": "input", "~{CHRG}": "open_collector", "P_{VIN}": "power_in", "V_{INSENSE}": "power_in", FAULT: "output", NTC: "input", PROG: "input", IDET: "input", SS: "input", TIMER: "input", BATSENS: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4001-1";
  override referencePrefix = "U";
}

/**
 * Standalone Li-Ion Switch Mode Battery Charger, 4.7-22V input, single cell, DFN-10
 *
 * KiCad symbol: `Battery_Management:LTC4002EDD-4.2`. Reference prefix: `U`.
 * Footprint filters: DFN*10*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4002f.pdf
 * Keywords: lithium li-ion battery charger.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.55x2.48mm.
 */
export class LTC4002EDD_4_2 extends Component.withPins({
  "COMP": "1",
  "V_{CC}": "2",
  "GATE": "3",
  "PGND": "4",
  "SGND": "5",
  "~{CHRG}": "6",
  "BAT": "7",
  "SENSE": "8",
  "NTC": "9",
  "NC": "10",
  "GND": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "input", "V_{CC}": "power_in", GATE: "output", PGND: "power_in", SGND: "power_in", "~{CHRG}": "open_collector", BAT: "input", SENSE: "input", NTC: "input", NC: "no_connect", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4002EDD-4.2";
  override referencePrefix = "U";
}

/**
 * Standalone Li-Ion Switch Mode Battery Charger, 8.9-22V input, double cell, DFN-10
 *
 * KiCad symbol: `Battery_Management:LTC4002EDD-8.4`. Reference prefix: `U`.
 * Footprint filters: DFN*10*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4002f.pdf
 * Keywords: lithium li-ion battery charger.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.55x2.48mm.
 */
export class LTC4002EDD_8_4 extends Component.withPins({
  "COMP": "1",
  "V_{CC}": "2",
  "GATE": "3",
  "PGND": "4",
  "SGND": "5",
  "~{CHRG}": "6",
  "BAT": "7",
  "SENSE": "8",
  "NTC": "9",
  "NC": "10",
  "GND": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "input", "V_{CC}": "power_in", GATE: "output", PGND: "power_in", SGND: "power_in", "~{CHRG}": "open_collector", BAT: "input", SENSE: "input", NTC: "input", NC: "no_connect", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4002EDD-8.4";
  override referencePrefix = "U";
}

/**
 * Standalone Li-Ion Switch Mode Battery Charger, 4.7-22V input, single cell, SOIC-8
 *
 * KiCad symbol: `Battery_Management:LTC4002ES8-4.2`. Reference prefix: `U`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4002f.pdf
 * Keywords: lithium li-ion battery charger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LTC4002ES8_4_2 extends Component.withPins({
  "COMP": "1",
  "V_{CC}": "2",
  "GATE": "3",
  "GND": "4",
  "~{CHRG}": "5",
  "BAT": "6",
  "SENSE": "7",
  "NTC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "input", "V_{CC}": "power_in", GATE: "output", GND: "power_in", "~{CHRG}": "open_collector", BAT: "input", SENSE: "input", NTC: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4002ES8-4.2";
  override referencePrefix = "U";
}

/**
 * Standalone Li-Ion Switch Mode Battery Charger, 8.9-22V input, double cell, SOIC-8
 *
 * KiCad symbol: `Battery_Management:LTC4002ES8-8.4`. Reference prefix: `U`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4002f.pdf
 * Keywords: lithium li-ion battery charger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LTC4002ES8_8_4 extends Component.withPins({
  "COMP": "1",
  "V_{CC}": "2",
  "GATE": "3",
  "GND": "4",
  "~{CHRG}": "5",
  "BAT": "6",
  "SENSE": "7",
  "NTC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "input", "V_{CC}": "power_in", GATE: "output", GND: "power_in", "~{CHRG}": "open_collector", BAT: "input", SENSE: "input", NTC: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4002ES8-8.4";
  override referencePrefix = "U";
}

/**
 * 4A high efficiency standalone Li-ion battery charger, SSOP-24
 *
 * KiCad symbol: `Battery_Management:LTC4007`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4007fc.pdf
 * Keywords: lithium ion polymer li-po battery.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 */
export class LTC4007 extends Component.withPins({
  "DCIN": "1",
  "~{CHG}": "2",
  "ACP": "3",
  "R_{T}": "4",
  "~{FAULT}": "5",
  "GND": "6",
  "3C4C": "7",
  "~{LOBAT}": "8",
  "NTC": "9",
  "ITH": "10",
  "PROG": "11",
  "NC": "12",
  "~{ICL}": "13",
  "CSP": "14",
  "BAT": "15",
  "CHEM": "16",
  "~{FLAG}": "17",
  "CLP": "18",
  "CLN": "19",
  "TGATE": "20",
  "PGND": "21",
  "BGATE": "22",
  "INFET": "23",
  "SHDN": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DCIN: "input", "~{CHG}": "output", ACP: "open_collector", "R_{T}": "passive", "~{FAULT}": "open_collector", GND: "power_in", "3C4C": "input", "~{LOBAT}": "output", NTC: "input", ITH: "passive", PROG: "bidirectional", NC: "no_connect", "~{ICL}": "output", CSP: "input", BAT: "input", CHEM: "input", "~{FLAG}": "open_collector", CLP: "input", CLN: "input", TGATE: "output", PGND: "power_in", BGATE: "output", INFET: "output", SHDN: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4007";
  override referencePrefix = "U";
}

/**
 * High efficiency standalone NiMH battery charger, HTSSOP-20
 *
 * KiCad symbol: `Battery_Management:LTC4011CFE`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4011fb.pdf
 * Keywords: NiMH nickel battery charger.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP2.74x3.86mm.
 */
export class LTC4011CFE extends Component.withPins({
  "DCIN": "1",
  "~{FAULT}": "2",
  "~{CHRG}": "3",
  "CHEM": "4",
  "GND_5": "5",
  "V_{RT}": "6",
  "V_{TEMP}": "7",
  "V_{CELL}": "8",
  "V_{CDIV}": "9",
  "TIMER": "10",
  "SENSE": "11",
  "BAT": "12",
  "~{TOC}": "13",
  "INTVDD": "14",
  "BGATE": "15",
  "PGND": "16",
  "TGATE": "17",
  "V_{CC}": "18",
  "~{READY}": "19",
  "INFET": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DCIN: "input", "~{FAULT}": "open_collector", "~{CHRG}": "open_collector", CHEM: "passive", GND_5: "power_in", "V_{RT}": "output", "V_{TEMP}": "input", "V_{CELL}": "input", "V_{CDIV}": "output", TIMER: "passive", SENSE: "input", BAT: "power_out", "~{TOC}": "open_collector", INTVDD: "power_out", BGATE: "output", PGND: "power_in", TGATE: "output", "V_{CC}": "power_in", "~{READY}": "open_collector", INFET: "output", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4011CFE";
  override referencePrefix = "U";
}

/**
 * Constant-current/constant-voltage linear charger for single cell lithium-ion batteries with 2.9V Trickle Charge, 4.5V to 6.5V VDD, -40 to +85 degree Celsius, TSOT-23-5
 *
 * KiCad symbol: `Battery_Management:LTC4054ES5-4.2`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/405442xf.pdf
 * Keywords: Constant-current constant-voltage linear charger single cell lithium-ion battery.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class LTC4054ES5_4_2 extends Component.withPins({
  "~{CHRG}": "1",
  "GND": "2",
  "BAT": "3",
  "V_{CC}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CHRG}": "open_collector", GND: "power_in", BAT: "power_out", "V_{CC}": "power_in", PROG: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4054ES5-4.2";
  override referencePrefix = "U";
}

/**
 * Constant-current/constant-voltage linear charger for single cell lithium-ion batteries no Trickle Charge, 4.5V to 6.5V VDD, -40 to +85 degree Celsius, TSOT-23-5
 *
 * KiCad symbol: `Battery_Management:LTC4054XES5-4.2`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/405442xf.pdf
 * Keywords: Constant-current constant-voltage linear charger single cell lithium-ion battery.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class LTC4054XES5_4_2 extends Component.withPins({
  "~{CHRG}": "1",
  "GND": "2",
  "BAT": "3",
  "V_{CC}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CHRG}": "open_collector", GND: "power_in", BAT: "power_out", "V_{CC}": "power_in", PROG: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4054XES5-4.2";
  override referencePrefix = "U";
}

/**
 * USB Power Controller and Li-Ion Charger (4.2V Float Voltage)
 *
 * KiCad symbol: `Battery_Management:LTC4055`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4055fb.pdf
 * Keywords: charger PMIC Liion USB.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.15x2.15mm.
 */
export class LTC4055 extends Component.withPins({
  "IN_1": "1",
  "BAT": "2",
  "OUT": "3",
  "IN_4": "4",
  "WALL": "5",
  "SHDN": "6",
  "SUSP": "7",
  "HPWR": "8",
  "CLPROG": "9",
  "GND_10": "10",
  "PROG": "11",
  "TIMER": "12",
  "~{ACPR}": "13",
  "~{CHRG}": "14",
  "VNTC": "15",
  "NTC": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "passive", BAT: "passive", OUT: "passive", IN_4: "power_in", WALL: "input", SHDN: "input", SUSP: "input", HPWR: "input", CLPROG: "passive", GND_10: "power_in", PROG: "passive", TIMER: "passive", "~{ACPR}": "open_collector", "~{CHRG}": "open_collector", VNTC: "output", NTC: "input", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4055";
  override referencePrefix = "U";
}

/**
 * USB Power Controller and Li-Ion Charger (4.1V Float Voltage)
 *
 * KiCad symbol: `Battery_Management:LTC4055-1`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4055fb.pdf
 * Keywords: charger PMIC Liion USB.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.15x2.15mm.
 */
export class LTC4055_1 extends Component.withPins({
  "IN_1": "1",
  "BAT": "2",
  "OUT": "3",
  "IN_4": "4",
  "WALL": "5",
  "SHDN": "6",
  "SUSP": "7",
  "HPWR": "8",
  "CLPROG": "9",
  "GND_10": "10",
  "PROG": "11",
  "TIMER": "12",
  "~{ACPR}": "13",
  "~{CHRG}": "14",
  "VNTC": "15",
  "NTC": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "passive", BAT: "passive", OUT: "passive", IN_4: "power_in", WALL: "input", SHDN: "input", SUSP: "input", HPWR: "input", CLPROG: "passive", GND_10: "power_in", PROG: "passive", TIMER: "passive", "~{ACPR}": "open_collector", "~{CHRG}": "open_collector", VNTC: "output", NTC: "input", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4055-1";
  override referencePrefix = "U";
}

/**
 * Complete fast charging system for 2, 3 or 4 series NiMH or NiCd batteries, 0.4 to 2A, 4.5 to 10V VDD, -40 to +85 degree Celcisus, DFN-16
 *
 * KiCad symbol: `Battery_Management:LTC4060EDHC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/405442xf.pdf
 * Keywords: battery charger.
 * Default footprint: Package_DFN_QFN:DFN-16-1EP_3x5mm_P0.5mm_EP1.66x4.4mm.
 */
export class LTC4060EDHC extends Component.withPins({
  "DRIVE": "1",
  "BAT": "2",
  "SENSE": "3",
  "TIMER": "4",
  "~{SHDN}": "5",
  "PAUSE": "6",
  "PROG": "7",
  "ARCT": "8",
  "SEL0": "9",
  "SEL1": "10",
  "NTC": "11",
  "CHEM": "12",
  "~{ACP}": "13",
  "V_{CC}": "14",
  "~{CHRG}": "15",
  "GND": "16",
  "GNDPAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DRIVE: "output", BAT: "input", SENSE: "input", TIMER: "input", "~{SHDN}": "input", PAUSE: "input", PROG: "input", ARCT: "input", SEL0: "input", SEL1: "input", NTC: "input", CHEM: "input", "~{ACP}": "open_collector", "V_{CC}": "power_in", "~{CHRG}": "open_collector", GND: "power_in", GNDPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4060EDHC";
  override referencePrefix = "U";
}

/**
 * Complete fast charging system for 2, 3 or 4 series NiMH or NiCd batteries, 0.4 to 2A, 4.5 to 10V VDD, -40 to +85 degree Celcisus, TSSOP-16
 *
 * KiCad symbol: `Battery_Management:LTC4060EFE`. Reference prefix: `U`.
 * Footprint filters: TSSOP*EP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/405442xf.pdf
 * Keywords: battery charger.
 * Default footprint: Package_SO:TSSOP-16-1EP_4.4x5mm_P0.65mm.
 */
export class LTC4060EFE extends Component.withPins({
  "DRIVE": "1",
  "BAT": "2",
  "SENSE": "3",
  "TIMER": "4",
  "~{SHDN}": "5",
  "PAUSE": "6",
  "PROG": "7",
  "ARCT": "8",
  "SEL0": "9",
  "SEL1": "10",
  "NTC": "11",
  "CHEM": "12",
  "~{ACP}": "13",
  "V_{CC}": "14",
  "~{CHRG}": "15",
  "GND": "16",
  "GNDPAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DRIVE: "output", BAT: "input", SENSE: "input", TIMER: "input", "~{SHDN}": "input", PAUSE: "input", PROG: "input", ARCT: "input", SEL0: "input", SEL1: "input", NTC: "input", CHEM: "input", "~{ACP}": "open_collector", "V_{CC}": "power_in", "~{CHRG}": "open_collector", GND: "power_in", GNDPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4060EFE";
  override referencePrefix = "U";
}

/**
 * Li-Ion Battery Manager and Charger, Power Switcher, 1.25A max charge current, DFN-12
 *
 * KiCad symbol: `Battery_Management:LTC4067EDE`. Reference prefix: `U`.
 * Footprint filters: DFN*3x4mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4067f.pdf
 * Keywords: Polymer NTC constant-current.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x4mm_P0.5mm_EP1.7x3.3mm.
 */
export class LTC4067EDE extends Component.withPins({
  "CLPROG": "1",
  "~{CHRG}": "2",
  "NTC": "3",
  "ILIM0": "4",
  "ILIM1": "5",
  "OVI": "6",
  "OVP": "7",
  "PROG": "8",
  "GATE": "9",
  "BAT": "10",
  "OUT": "11",
  "IN": "12",
  "GND": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLPROG: "input", "~{CHRG}": "open_collector", NTC: "input", ILIM0: "input", ILIM1: "input", OVI: "input", OVP: "output", PROG: "input", GATE: "output", BAT: "input", OUT: "power_out", IN: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4067EDE";
  override referencePrefix = "U";
}

/**
 * Dual-Input Power Manager / 3.5A LiFePO4 Battery Charger with I2C Control and USB OTG, QFN-28
 *
 * KiCad symbol: `Battery_Management:LTC4156`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4156fa.pdf
 * Keywords: lifepo charger PMIC USB.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x5mm_P0.5mm_EP2.65x3.65mm.
 */
export class LTC4156 extends Component.withPins({
  "SDA": "1",
  "DVCC": "2",
  "~{IRQ}": "3",
  "ID": "4",
  "CLPROG1": "5",
  "CLPROG2": "6",
  "WALLSNS": "7",
  "USBSNS": "8",
  "USBGT": "9",
  "OVGCAP": "10",
  "WALLGT": "11",
  "V_{C}": "12",
  "V_{OUTSNS}": "13",
  "NTCBIAS": "14",
  "NTC": "15",
  "BATSNS": "16",
  "BATGATE": "17",
  "PROG": "18",
  "CHGSNS_19": "19",
  "CHGSNS_20": "20",
  "V_{OUT}_21": "21",
  "V_{OUT}_22": "22",
  "V_{BUS}_23": "23",
  "V_{BUS}_24": "24",
  "V_{BUS}_25": "25",
  "SW_26": "26",
  "SW_27": "27",
  "SCL": "28",
  "GND": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDA: "bidirectional", DVCC: "power_in", "~{IRQ}": "open_collector", ID: "input", CLPROG1: "passive", CLPROG2: "passive", WALLSNS: "input", USBSNS: "input", USBGT: "output", OVGCAP: "passive", WALLGT: "output", "V_{C}": "passive", "V_{OUTSNS}": "input", NTCBIAS: "output", NTC: "input", BATSNS: "input", BATGATE: "output", PROG: "passive", CHGSNS_19: "passive", CHGSNS_20: "passive", "V_{OUT}_21": "passive", "V_{OUT}_22": "passive", "V_{BUS}_23": "passive", "V_{BUS}_24": "passive", "V_{BUS}_25": "passive", SW_26: "passive", SW_27: "passive", SCL: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC4156";
  override referencePrefix = "U";
}

/**
 * Multicell Battery Stack Monitor, 12-cell max, multi-chemistry, integrated balancing, stackable, serial interface
 *
 * KiCad symbol: `Battery_Management:LTC6803-2`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x12.8mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/680324fa.pdf
 * Keywords: battery balance afe.
 * Default footprint: Package_SO:SSOP-44_5.3x12.8mm_P0.5mm.
 */
export class LTC6803_2 extends Component.withPins({
  "V^{+}": "1",
  "C12": "2",
  "S12": "3",
  "C11": "4",
  "S11": "5",
  "C10": "6",
  "S10": "7",
  "C9": "8",
  "S9": "9",
  "C8": "10",
  "S8": "11",
  "C7": "12",
  "S7": "13",
  "C6": "14",
  "S6": "15",
  "C5": "16",
  "S5": "17",
  "C4": "18",
  "S4": "19",
  "C3": "20",
  "S3": "21",
  "C2": "22",
  "S2": "23",
  "C1": "24",
  "S1": "25",
  "V^{-}": "26",
  "NC_27": "27",
  "V_{TEMP1}": "28",
  "V_{TEMP2}": "29",
  "V_{REF}": "30",
  "V_{REG}": "31",
  "TOS": "32",
  "NC_33": "33",
  "~{WDTB}": "34",
  "GPIO1": "35",
  "GPIO2": "36",
  "A0": "37",
  "A1": "38",
  "A2": "39",
  "A3": "40",
  "SCKI": "41",
  "SDI": "42",
  "SDO": "43",
  "~{CSBI}": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V^{+}": "input", C12: "input", S12: "input", C11: "input", S11: "input", C10: "input", S10: "input", C9: "input", S9: "input", C8: "input", S8: "input", C7: "input", S7: "input", C6: "input", S6: "input", C5: "input", S5: "input", C4: "input", S4: "input", C3: "input", S3: "input", C2: "input", S2: "input", C1: "input", S1: "input", "V^{-}": "input", NC_27: "no_connect", "V_{TEMP1}": "input", "V_{TEMP2}": "input", "V_{REF}": "input", "V_{REG}": "input", TOS: "input", NC_33: "no_connect", "~{WDTB}": "open_collector", GPIO1: "input", GPIO2: "input", A0: "input", A1: "input", A2: "input", A3: "input", SCKI: "input", SDI: "input", SDO: "open_collector", "~{CSBI}": "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC6803-2";
  override referencePrefix = "U";
}

/**
 * Multicell Battery Stack Monitor, 12-cell max, multi-chemistry, integrated balancing, stackable, serial interface
 *
 * KiCad symbol: `Battery_Management:LTC6803-4`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x12.8mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/680324fa.pdf
 * Keywords: battery balance afe.
 * Default footprint: Package_SO:SSOP-44_5.3x12.8mm_P0.5mm.
 */
export class LTC6803_4 extends Component.withPins({
  "V^{+}": "1",
  "C12": "2",
  "S12": "3",
  "C11": "4",
  "S11": "5",
  "C10": "6",
  "S10": "7",
  "C9": "8",
  "S9": "9",
  "C8": "10",
  "S8": "11",
  "C7": "12",
  "S7": "13",
  "C6": "14",
  "S6": "15",
  "C5": "16",
  "S5": "17",
  "C4": "18",
  "S4": "19",
  "C3": "20",
  "S3": "21",
  "C2": "22",
  "S2": "23",
  "C1": "24",
  "S1": "25",
  "C0": "26",
  "V^{-}": "27",
  "NC": "28",
  "V_{TEMP1}": "29",
  "V_{TEMP2}": "30",
  "V_{REF}": "31",
  "V_{REG}": "32",
  "TOS": "33",
  "~{WDTB}": "34",
  "GPIO1": "35",
  "GPIO2": "36",
  "A0": "37",
  "A1": "38",
  "A2": "39",
  "A3": "40",
  "SCKI": "41",
  "SDI": "42",
  "SDO": "43",
  "~{CSBI}": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V^{+}": "input", C12: "input", S12: "input", C11: "input", S11: "input", C10: "input", S10: "input", C9: "input", S9: "input", C8: "input", S8: "input", C7: "input", S7: "input", C6: "input", S6: "input", C5: "input", S5: "input", C4: "input", S4: "input", C3: "input", S3: "input", C2: "input", S2: "input", C1: "input", S1: "input", C0: "input", "V^{-}": "input", NC: "no_connect", "V_{TEMP1}": "input", "V_{TEMP2}": "input", "V_{REF}": "input", "V_{REG}": "input", TOS: "input", "~{WDTB}": "open_collector", GPIO1: "input", GPIO2: "input", A0: "input", A1: "input", A2: "input", A3: "input", SCKI: "input", SDI: "input", SDO: "open_collector", "~{CSBI}": "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC6803-4";
  override referencePrefix = "U";
}

/**
 * Multicell Battery Stack Monitor, 12-cell max, multi-chemistry, integrated balancing, stackable, serial interface, SSOP-48
 *
 * KiCad symbol: `Battery_Management:LTC6804-1`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x12.8mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/680412fc.pdf
 * Keywords: battery balance afe.
 * Default footprint: Package_SO:SSOP-48_5.3x12.8mm_P0.5mm.
 */
export class LTC6804_1 extends Component.withPins({
  "V+": "1",
  "C12": "2",
  "S12": "3",
  "C11": "4",
  "S11": "5",
  "C10": "6",
  "S10": "7",
  "C9": "8",
  "S9": "9",
  "C8": "10",
  "S8": "11",
  "C7": "12",
  "S7": "13",
  "C6": "14",
  "S6": "15",
  "C5": "16",
  "S5": "17",
  "C4": "18",
  "S4": "19",
  "C3": "20",
  "S3": "21",
  "C2": "22",
  "S2": "23",
  "C1": "24",
  "S1": "25",
  "C0": "26",
  "GPIO1": "27",
  "GPIO2": "28",
  "GPIO3": "29",
  "V-_30": "30",
  "V-_31": "31",
  "GPIO4": "32",
  "GPIO5": "33",
  "VREF2": "34",
  "VREF1": "35",
  "SWTEN": "36",
  "VREG": "37",
  "DRIVE": "38",
  "WDT": "39",
  "ISOMD": "40",
  "CSB(IMA)": "41",
  "SCK(IPA)": "42",
  "SDI(NC)": "43",
  "SDO(NC)": "44",
  "IBIAS": "45",
  "ICMP": "46",
  "IMB": "47",
  "IPB": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", C12: "input", S12: "bidirectional", C11: "input", S11: "bidirectional", C10: "input", S10: "bidirectional", C9: "input", S9: "bidirectional", C8: "input", S8: "bidirectional", C7: "input", S7: "bidirectional", C6: "input", S6: "bidirectional", C5: "input", S5: "bidirectional", C4: "input", S4: "bidirectional", C3: "input", S3: "bidirectional", C2: "input", S2: "bidirectional", C1: "input", S1: "bidirectional", C0: "input", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", "V-_30": "passive", "V-_31": "passive", GPIO4: "bidirectional", GPIO5: "bidirectional", VREF2: "output", VREF1: "output", SWTEN: "input", VREG: "input", DRIVE: "output", WDT: "output", ISOMD: "input", "CSB(IMA)": "bidirectional", "SCK(IPA)": "bidirectional", "SDI(NC)": "input", "SDO(NC)": "open_collector", IBIAS: "passive", ICMP: "passive", IMB: "bidirectional", IPB: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:LTC6804-1";
  override referencePrefix = "U";
}

/**
 * Smart Battery Charger, 18V battery, 28V input, SMBus serial interface
 *
 * KiCad symbol: `Battery_Management:MAX1647`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1647-MAX1648.pdf
 * Keywords: battery charger.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class MAX1647 extends Component.withPins({
  "IOUT": "1",
  "DCIN": "2",
  "VL": "3",
  "CCV": "4",
  "CCI": "5",
  "SEL": "6",
  "CS": "7",
  "BATT": "8",
  "REF": "9",
  "AGND": "10",
  "~{INT}": "11",
  "THM": "12",
  "SCLK": "13",
  "SDA": "14",
  "DACV": "15",
  "PGND": "16",
  "DLO": "17",
  "DHI": "18",
  "LX": "19",
  "BST": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IOUT: "output", DCIN: "power_in", VL: "power_out", CCV: "passive", CCI: "passive", SEL: "input", CS: "input", BATT: "input", REF: "bidirectional", AGND: "power_in", "~{INT}": "open_collector", THM: "input", SCLK: "input", SDA: "bidirectional", DACV: "output", PGND: "power_in", DLO: "output", DHI: "output", LX: "input", BST: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX1647";
  override referencePrefix = "U";
}

/**
 * Smart Battery Charger, 18V battery, 28V input, standalone
 *
 * KiCad symbol: `Battery_Management:MAX1648`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1647-MAX1648.pdf
 * Keywords: battery charger.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MAX1648 extends Component.withPins({
  "DCIN": "1",
  "VL": "2",
  "CCV": "3",
  "CCI": "4",
  "CS": "5",
  "BATT": "6",
  "REF": "7",
  "AGND": "8",
  "THM": "9",
  "SETI": "10",
  "SETV": "11",
  "PGND": "12",
  "DLO": "13",
  "DHI": "14",
  "LX": "15",
  "BST": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DCIN: "power_in", VL: "power_out", CCV: "passive", CCI: "passive", CS: "input", BATT: "input", REF: "bidirectional", AGND: "power_in", THM: "input", SETI: "input", SETV: "input", PGND: "power_in", DLO: "output", DHI: "output", LX: "input", BST: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX1648";
  override referencePrefix = "U";
}

/**
 * 5.1μA Multi-Cell Fuel Gauge with ModelGauge m5 EZ, TDFN-14
 *
 * KiCad symbol: `Battery_Management:MAX17261xxTD`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x3mm*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX17261.pdf
 * Keywords: Charge pump battery.
 * Default footprint: Package_DFN_QFN:TDFN-14-1EP_3x3mm_P0.4mm_EP1.78x2.35mm.
 */
export class MAX17261xxTD extends Component.withPins({
  "TH": "1",
  "NC_2": "2",
  "SW": "3",
  "NC_4": "4",
  "NC_5": "5",
  "BATT": "6",
  "CSN": "7",
  "GND_8": "8",
  "CSPL": "9",
  "CELLX": "10",
  "REG": "11",
  "ALRT": "12",
  "SDA": "13",
  "SCL": "14",
  "GND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TH: "passive", NC_2: "no_connect", SW: "output", NC_4: "no_connect", NC_5: "no_connect", BATT: "power_in", CSN: "passive", GND_8: "power_in", CSPL: "passive", CELLX: "input", REG: "power_out", ALRT: "open_collector", SDA: "bidirectional", SCL: "input", GND_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX17261xxTD";
  override referencePrefix = "U";
}

/**
 * 5.1μA Multi-Cell Fuel Gauge with ModelGauge m5 EZ, WLP-9
 *
 * KiCad symbol: `Battery_Management:MAX17261xxWL`. Reference prefix: `U`.
 * Footprint filters: Maxim*WLP*1.595x1.415*Layout3x3*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX17261.pdf
 * Keywords: Charge pump battery.
 * Default footprint: Package_BGA:Maxim_WLP-9_1.595x1.415_Layout3x3_P0.4mm_Ball0.27mm_Pad0.25mm_NSMD.
 */
export class MAX17261xxWL extends Component.withPins({
  "TH": "A1",
  "SCL": "A2",
  "CSN": "A3",
  "BATT": "B1",
  "ALRT": "B2",
  "REG": "B3",
  "SDA": "C1",
  "CELLX": "C2",
  "GND/CSPL": "C3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TH: "passive", SCL: "input", CSN: "passive", BATT: "power_in", ALRT: "open_collector", REG: "power_out", SDA: "bidirectional", CELLX: "input", "GND/CSPL": "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX17261xxWL";
  override referencePrefix = "U";
}

/**
 * Single/Multi-Cell Fuel Gauge, ModelGauge m5 EZ, Integrated LED Control, TDFN-14
 *
 * KiCad symbol: `Battery_Management:MAX17263xxTE`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX17263.pdf
 * Keywords: fuel-gauge.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x3mm_P0.4mm_EP1.78x2.35mm.
 */
export class MAX17263xxTE extends Component.withPins({
  "TH": "1",
  "L1": "2",
  "L2": "3",
  "L3": "4",
  "L4": "5",
  "BATT": "6",
  "CSN": "7",
  "GND": "8",
  "CSPL": "9",
  "CELLX/CSPH": "10",
  "REG": "11",
  "ALRT": "12",
  "SDA": "13",
  "SCL": "14",
  "EP": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TH: "passive", L1: "bidirectional", L2: "output", L3: "output", L4: "output", BATT: "power_in", CSN: "input", GND: "power_in", CSPL: "input", "CELLX/CSPH": "input", REG: "power_out", ALRT: "open_collector", SDA: "bidirectional", SCL: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX17263xxTE";
  override referencePrefix = "U";
}

/**
 * USB Powered Li+ Charger, 4.1V/4.2V battery, 5V input, 0.1/0.5A charging current
 *
 * KiCad symbol: `Battery_Management:MAX1811`. Reference prefix: `U`.
 * Footprint filters: SOIC*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1811.pdf
 * Keywords: USB Battery Charger.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX1811 extends Component.withPins({
  "SELV": "1",
  "SELI": "2",
  "GND_3": "3",
  "IN": "4",
  "BATT": "5",
  "GND_6": "6",
  "EN": "7",
  "~{CHG}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SELV: "input", SELI: "input", GND_3: "power_in", IN: "power_in", BATT: "power_out", GND_6: "passive", EN: "input", "~{CHG}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX1811";
  override referencePrefix = "U";
}

/**
 * Charger for 2 lithium-ion (Li+), 5/6 NickelCadium (NiCD) cells or 5/6 NickelMetalHydride (NiMH), 9 to 28V VDD, -40 to +85 degree Celsius, QSOP-16
 *
 * KiCad symbol: `Battery_Management:MAX1873REEE`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1873.pdf
 * Keywords: li-ion battery charger.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 */
export class MAX1873REEE extends Component.withPins({
  "CSSN": "1",
  "CSSP": "2",
  "CCS": "3",
  "CCV": "4",
  "CCI": "5",
  "ICHG/EN": "6",
  "IOUT": "7",
  "VADJ": "8",
  "REF": "9",
  "BATT": "10",
  "CSB": "11",
  "GND": "12",
  "VH": "13",
  "EXT": "14",
  "DCIN": "15",
  "VL": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CSSN: "input", CSSP: "input", CCS: "input", CCV: "input", CCI: "input", "ICHG/EN": "input", IOUT: "output", VADJ: "input", REF: "output", BATT: "input", CSB: "input", GND: "power_in", VH: "input", EXT: "output", DCIN: "power_in", VL: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX1873REEE";
  override referencePrefix = "U";
}

/**
 * Charger for 3 lithium-ion (Li+), 7/9 NickelCadium (NiCD) cells or 7/9 NickelMetalHydride (NiMH), 9 to 28V VDD, -40 to +85 degree Celsius, QSOP-16
 *
 * KiCad symbol: `Battery_Management:MAX1873SEEE`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1873.pdf
 * Keywords: li-ion battery charger.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 */
export class MAX1873SEEE extends Component.withPins({
  "CSSN": "1",
  "CSSP": "2",
  "CCS": "3",
  "CCV": "4",
  "CCI": "5",
  "ICHG/EN": "6",
  "IOUT": "7",
  "VADJ": "8",
  "REF": "9",
  "BATT": "10",
  "CSB": "11",
  "GND": "12",
  "VH": "13",
  "EXT": "14",
  "DCIN": "15",
  "VL": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CSSN: "input", CSSP: "input", CCS: "input", CCV: "input", CCI: "input", "ICHG/EN": "input", IOUT: "output", VADJ: "input", REF: "output", BATT: "input", CSB: "input", GND: "power_in", VH: "input", EXT: "output", DCIN: "power_in", VL: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX1873SEEE";
  override referencePrefix = "U";
}

/**
 * Charger for 4 lithium-ion (Li+), 10 NickelCadium (NiCD) cells or 10 NickelMetalHydride (NiMH), 9 to 28V VDD, -40 to +85 degree Celsius, QSOP-16
 *
 * KiCad symbol: `Battery_Management:MAX1873TEEE`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1873.pdf
 * Keywords: li-ion battery charger.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 */
export class MAX1873TEEE extends Component.withPins({
  "CSSN": "1",
  "CSSP": "2",
  "CCS": "3",
  "CCV": "4",
  "CCI": "5",
  "ICHG/EN": "6",
  "IOUT": "7",
  "VADJ": "8",
  "REF": "9",
  "BATT": "10",
  "CSB": "11",
  "GND": "12",
  "VH": "13",
  "EXT": "14",
  "DCIN": "15",
  "VL": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CSSN: "input", CSSP: "input", CCS: "input", CCV: "input", CCI: "input", "ICHG/EN": "input", IOUT: "output", VADJ: "input", REF: "output", BATT: "input", CSB: "input", GND: "power_in", VH: "input", EXT: "output", DCIN: "power_in", VL: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX1873TEEE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Metal Hydride (NiMH) from a DC source, 0 to +70 Degree Celsius, PDIP-16
 *
 * KiCad symbol: `Battery_Management:MAX712CPE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX712CPE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "input", PGM0: "input", PGM1: "input", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX712CPE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Metal Hydride (NiMH) from a DC source, 0 to +70 Degree Celsius, SOIC-16
 *
 * KiCad symbol: `Battery_Management:MAX712CSE`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MAX712CSE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "power_out", PGM0: "power_out", PGM1: "power_out", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX712CSE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Metal Hydride (NiMH) from a DC source, -40 to +85 Degree Celsius, PDIP-16
 *
 * KiCad symbol: `Battery_Management:MAX712EPE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX712EPE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "input", PGM0: "input", PGM1: "input", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX712EPE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Metal Hydride (NiMH) from a DC source, -40 to +85 Degree Celsius, SOIC-16
 *
 * KiCad symbol: `Battery_Management:MAX712ESE`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MAX712ESE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "power_out", PGM0: "power_out", PGM1: "power_out", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX712ESE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Metal Hydride (NiMH) from a DC source, ceramic, -55 to +125 Degree Celsius, PDIP-16
 *
 * KiCad symbol: `Battery_Management:MAX712MJE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX712MJE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "input", PGM0: "input", PGM1: "input", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX712MJE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Cadmium (NiCd) from a DC source, 0 to +70 Degree Celsius, PDIP-16
 *
 * KiCad symbol: `Battery_Management:MAX713CPE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX713CPE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "input", PGM0: "input", PGM1: "input", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX713CPE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Cadmium (NiCd) from a DC source, 0 to +70 Degree Celsius, SOIC-16
 *
 * KiCad symbol: `Battery_Management:MAX713CSE`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MAX713CSE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "power_out", PGM0: "power_out", PGM1: "power_out", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX713CSE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Cadmium (NiCd) from a DC source, -40 to +85 Degree Celsius, PDIP-16
 *
 * KiCad symbol: `Battery_Management:MAX713EPE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX713EPE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "input", PGM0: "input", PGM1: "input", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX713EPE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Cadmium (NiCd) from a DC source, -40 to +85 Degree Celsius, SOIC-16
 *
 * KiCad symbol: `Battery_Management:MAX713ESE`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MAX713ESE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "power_out", PGM0: "power_out", PGM1: "power_out", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX713ESE";
  override referencePrefix = "U";
}

/**
 * Fast-charge Nickel Cadmium (NiCd) from a DC source, ceramic, -55 to +125 Degree Celsius, PDIP-16
 *
 * KiCad symbol: `Battery_Management:MAX713MJE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX712-MAX713.pdf
 * Keywords: battery charger controller.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX713MJE extends Component.withPins({
  "VLIMIT": "1",
  "BATT+": "2",
  "PGM0": "3",
  "PGM1": "4",
  "THI": "5",
  "TLO": "6",
  "TEMP": "7",
  "~{FASTCHG}": "8",
  "PGM2": "9",
  "PGM3": "10",
  "CC": "11",
  "BATT-": "12",
  "GND": "13",
  "DRV": "14",
  "V+": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLIMIT: "input", "BATT+": "input", PGM0: "input", PGM1: "input", THI: "input", TLO: "input", TEMP: "input", "~{FASTCHG}": "open_collector", PGM2: "input", PGM3: "input", CC: "input", "BATT-": "input", GND: "power_in", DRV: "output", "V+": "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MAX713MJE";
  override referencePrefix = "U";
}

/**
 * High Input Voltage 1.2A Charger for Single-cell Li-Ion Batteries, UDFN-8
 *
 * KiCad symbol: `Battery_Management:MC34673`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/MC34673.pdf
 * Keywords: Lithium-Ion Battery Charger.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 */
export class MC34673 extends Component.withPins({
  "VIN": "1",
  "~{PPR}": "2",
  "~{CHG}": "3",
  "~{EN}": "4",
  "GND": "5",
  "~{FAST}": "6",
  "ISET": "7",
  "BAT": "8",
  "EPAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", "~{PPR}": "open_collector", "~{CHG}": "open_collector", "~{EN}": "input", GND: "power_in", "~{FAST}": "open_collector", ISET: "output", BAT: "power_out", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MC34673";
  override referencePrefix = "U";
}

/**
 * Simple, Miniature Single-Cell, Fully Integrated Li-Ion / Li-Polymer Charge Management Controllers, 50mA-500mA, 4.2V, SOT23-5
 *
 * KiCad symbol: `Battery_Management:MCP73812T-420I-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22036b.pdf
 * Keywords: Lithium-Ion Battery Charger.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73812T_420I_OT extends Component.withPins({
  "CE": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CE: "input", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73812T-420I-OT";
  override referencePrefix = "U";
}

/**
 * Simple, Miniature Single-Cell, Fully Integrated Li-Ion / Li-Polymer Charge Management Controllers, 85mA/450mA, 4.2V, SOT23-5
 *
 * KiCad symbol: `Battery_Management:MCP73811T-420I-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22036b.pdf
 * Keywords: Lithium-Ion Battery Charger.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73811T_420I_OT extends Component.withPins({
  "CE": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CE: "input", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73811T-420I-OT";
  override referencePrefix = "U";
}

/**
 * Simple, Miniature Single-Cell, Fully Integrated Li-Ion / Li-Polymer Charge Management Controllers, 85mA/450mA, 4.35V, SOT23-5
 *
 * KiCad symbol: `Battery_Management:MCP73811T-435I-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22036b.pdf
 * Keywords: Lithium-Ion Battery Charger.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73811T_435I_OT extends Component.withPins({
  "CE": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CE: "input", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73811T-435I-OT";
  override referencePrefix = "U";
}

/**
 * Simple, Miniature Single-Cell, Fully Integrated Li-Ion / Li-Polymer Charge Management Controllers, 50mA-500mA, 4.35V, SOT23-5
 *
 * KiCad symbol: `Battery_Management:MCP73812T-435I-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22036b.pdf
 * Keywords: Lithium-Ion Battery Charger.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73812T_435I_OT extends Component.withPins({
  "CE": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CE: "input", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73812T-435I-OT";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.20V, Tri-State Status Output, in DFN-8 package
 *
 * KiCad symbol: `Battery_Management:MCP73831-2-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*EP1.7x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP73831_2_MC extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "V_{BAT}_3": "3",
  "V_{BAT}_4": "4",
  "STAT": "5",
  "V_{SS}": "6",
  "NC": "7",
  "PROG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "passive", "V_{DD}_2": "power_in", "V_{BAT}_3": "power_out", "V_{BAT}_4": "passive", STAT: "tri_state", "V_{SS}": "power_in", NC: "no_connect", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73831-2-MC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.20V, Tri-State Status Output, in SOT23-5 package
 *
 * KiCad symbol: `Battery_Management:MCP73831-2-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73831_2_OT extends Component.withPins({
  "STAT": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "tri_state", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73831-2-OT";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.35V, Tri-State Status Output, in DFN-8 package
 *
 * KiCad symbol: `Battery_Management:MCP73831-3-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*EP1.7x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP73831_3_MC extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "V_{BAT}_3": "3",
  "V_{BAT}_4": "4",
  "STAT": "5",
  "V_{SS}": "6",
  "NC": "7",
  "PROG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "passive", "V_{DD}_2": "power_in", "V_{BAT}_3": "power_out", "V_{BAT}_4": "passive", STAT: "tri_state", "V_{SS}": "power_in", NC: "no_connect", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73831-3-MC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.35V, Tri-State Status Output, in SOT23-5 package
 *
 * KiCad symbol: `Battery_Management:MCP73831-3-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73831_3_OT extends Component.withPins({
  "STAT": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "tri_state", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73831-3-OT";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.40V, Tri-State Status Output, in DFN-8 package
 *
 * KiCad symbol: `Battery_Management:MCP73831-4-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*EP1.7x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP73831_4_MC extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "V_{BAT}_3": "3",
  "V_{BAT}_4": "4",
  "STAT": "5",
  "V_{SS}": "6",
  "NC": "7",
  "PROG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "passive", "V_{DD}_2": "power_in", "V_{BAT}_3": "power_out", "V_{BAT}_4": "passive", STAT: "tri_state", "V_{SS}": "power_in", NC: "no_connect", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73831-4-MC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.40V, Tri-State Status Output, in SOT23-5 package
 *
 * KiCad symbol: `Battery_Management:MCP73831-4-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73831_4_OT extends Component.withPins({
  "STAT": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "tri_state", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73831-4-OT";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.50V, Tri-State Status Output, in DFN-8 package
 *
 * KiCad symbol: `Battery_Management:MCP73831-5-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*EP1.7x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP73831_5_MC extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "V_{BAT}_3": "3",
  "V_{BAT}_4": "4",
  "STAT": "5",
  "V_{SS}": "6",
  "NC": "7",
  "PROG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "passive", "V_{DD}_2": "power_in", "V_{BAT}_3": "power_out", "V_{BAT}_4": "passive", STAT: "tri_state", "V_{SS}": "power_in", NC: "no_connect", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73831-5-MC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.50V, Tri-State Status Output, in SOT23-5 package
 *
 * KiCad symbol: `Battery_Management:MCP73831-5-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73831_5_OT extends Component.withPins({
  "STAT": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "tri_state", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73831-5-OT";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.20V, Open-Drain Status Output, in DFN-8 package
 *
 * KiCad symbol: `Battery_Management:MCP73832-2-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*EP1.7x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP73832_2_MC extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "V_{BAT}_3": "3",
  "V_{BAT}_4": "4",
  "STAT": "5",
  "V_{SS}": "6",
  "NC": "7",
  "PROG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "passive", "V_{DD}_2": "power_in", "V_{BAT}_3": "power_out", "V_{BAT}_4": "passive", STAT: "open_collector", "V_{SS}": "power_in", NC: "no_connect", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73832-2-MC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.20V, Open-Drain Status Output, in SOT23-5 package
 *
 * KiCad symbol: `Battery_Management:MCP73832-2-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73832_2_OT extends Component.withPins({
  "STAT": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "open_collector", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73832-2-OT";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.35V, Open-Drain Status Output, in DFN-8 package
 *
 * KiCad symbol: `Battery_Management:MCP73832-3-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*EP1.7x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP73832_3_MC extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "V_{BAT}_3": "3",
  "V_{BAT}_4": "4",
  "STAT": "5",
  "V_{SS}": "6",
  "NC": "7",
  "PROG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "passive", "V_{DD}_2": "power_in", "V_{BAT}_3": "power_out", "V_{BAT}_4": "passive", STAT: "open_collector", "V_{SS}": "power_in", NC: "no_connect", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73832-3-MC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.35V, Open-Drain Status Output, in SOT23-5 package
 *
 * KiCad symbol: `Battery_Management:MCP73832-3-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73832_3_OT extends Component.withPins({
  "STAT": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "open_collector", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73832-3-OT";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.40V, Open-Drain Status Output, in DFN-8 package
 *
 * KiCad symbol: `Battery_Management:MCP73832-4-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*EP1.7x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP73832_4_MC extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "V_{BAT}_3": "3",
  "V_{BAT}_4": "4",
  "STAT": "5",
  "V_{SS}": "6",
  "NC": "7",
  "PROG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "passive", "V_{DD}_2": "power_in", "V_{BAT}_3": "power_out", "V_{BAT}_4": "passive", STAT: "open_collector", "V_{SS}": "power_in", NC: "no_connect", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73832-4-MC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.40V, Open-Drain Status Output, in SOT23-5 package
 *
 * KiCad symbol: `Battery_Management:MCP73832-4-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73832_4_OT extends Component.withPins({
  "STAT": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "open_collector", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73832-4-OT";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.50V, Open-Drain Status Output, in DFN-8 package
 *
 * KiCad symbol: `Battery_Management:MCP73832-5-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*EP1.7x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP73832_5_MC extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "V_{BAT}_3": "3",
  "V_{BAT}_4": "4",
  "STAT": "5",
  "V_{SS}": "6",
  "NC": "7",
  "PROG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "passive", "V_{DD}_2": "power_in", "V_{BAT}_3": "power_out", "V_{BAT}_4": "passive", STAT: "open_collector", "V_{SS}": "power_in", NC: "no_connect", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73832-5-MC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.50V, Open-Drain Status Output, in SOT23-5 package
 *
 * KiCad symbol: `Battery_Management:MCP73832-5-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP73832_5_OT extends Component.withPins({
  "STAT": "1",
  "V_{SS}": "2",
  "V_{BAT}": "3",
  "V_{DD}": "4",
  "PROG": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { STAT: "open_collector", "V_{SS}": "power_in", "V_{BAT}": "power_out", "V_{DD}": "power_in", PROG: "input", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73832-5-OT";
  override referencePrefix = "U";
}

/**
 * Stand-Alone Linear Li-Ion / Li-Polymer Charge Management Controller, DFN-10
 *
 * KiCad symbol: `Battery_Management:MCP73833-xxx-MF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*EP1.58x2.35mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22005b.pdf
 * Keywords: lithium-ion battery charger.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.58x2.35mm.
 */
export class MCP73833_xxx_MF extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "STAT1": "3",
  "STAT2": "4",
  "V_{SS}": "5",
  "PROG": "6",
  "~{PG}": "7",
  "THERM": "8",
  "V_{BAT}_9": "9",
  "V_{BAT}_10": "10",
  "EP": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "power_in", "V_{DD}_2": "passive", STAT1: "open_collector", STAT2: "open_collector", "V_{SS}": "power_in", PROG: "input", "~{PG}": "open_collector", THERM: "passive", "V_{BAT}_9": "power_out", "V_{BAT}_10": "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73833-xxx-MF";
  override referencePrefix = "U";
}

/**
 * Stand-Alone Linear Li-Ion / Li-Polymer Charge Management Controller, MSOP-10
 *
 * KiCad symbol: `Battery_Management:MCP73833-xxx-UN`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22005b.pdf
 * Keywords: lithium-ion battery charger.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MCP73833_xxx_UN extends Component.withPins({
  "V_{DD}_1": "1",
  "V_{DD}_2": "2",
  "STAT1": "3",
  "STAT2": "4",
  "V_{SS}": "5",
  "PROG": "6",
  "~{PG}": "7",
  "THERM": "8",
  "V_{BAT}_9": "9",
  "V_{BAT}_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}_1": "power_in", "V_{DD}_2": "passive", STAT1: "open_collector", STAT2: "open_collector", "V_{SS}": "power_in", PROG: "input", "~{PG}": "open_collector", THERM: "passive", "V_{BAT}_9": "power_out", "V_{BAT}_10": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73833-xxx-UN";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller
 *
 * KiCad symbol: `Battery_Management:MCP73871`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871 extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.10V
 *
 * KiCad symbol: `Battery_Management:MCP73871-1AA`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_1AA extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-1AA";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.10V, 6h safety timer
 *
 * KiCad symbol: `Battery_Management:MCP73871-1CA`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_1CA extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-1CA";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.10V, 6h safety timer, 3.1V LBO threshold
 *
 * KiCad symbol: `Battery_Management:MCP73871-1CC`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_1CC extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-1CC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.20V
 *
 * KiCad symbol: `Battery_Management:MCP73871-2AA`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_2AA extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-2AA";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.20V, 6h safety timer
 *
 * KiCad symbol: `Battery_Management:MCP73871-2CA`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_2CA extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-2CA";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.20V, 6h safety timer, 3.1V LBO threshold
 *
 * KiCad symbol: `Battery_Management:MCP73871-2CC`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_2CC extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-2CC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.35V, 6h safety timer
 *
 * KiCad symbol: `Battery_Management:MCP73871-3CA`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_3CA extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-3CA";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.35V, 6h safety timer, 3.1V LBO threshold
 *
 * KiCad symbol: `Battery_Management:MCP73871-3CC`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_3CC extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-3CC";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.40V, 6h safety timer
 *
 * KiCad symbol: `Battery_Management:MCP73871-4CA`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_4CA extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-4CA";
  override referencePrefix = "U";
}

/**
 * Single cell, Li-Ion/Li-Po charge management controller, 4.40V, 6h safety timer, 3.1V LBO threshold
 *
 * KiCad symbol: `Battery_Management:MCP73871-4CC`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.mouser.com/ds/2/268/22090a-52174.pdf
 * Keywords: battery charger lithium.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MCP73871_4CC extends Component.withPins({
  "OUT_1": "1",
  "VPCC": "2",
  "SEL": "3",
  "PROG2": "4",
  "THERM": "5",
  "~{PG}": "6",
  "STAT2": "7",
  "STAT1/~{LBO}": "8",
  "~{TE}": "9",
  "V_{SS}_10": "10",
  "V_{SS}_11": "11",
  "PROG3": "12",
  "PROG1": "13",
  "V_{BAT}_14": "14",
  "V_{BAT}_15": "15",
  "V_{BAT_SENSE}": "16",
  "CE": "17",
  "IN_18": "18",
  "IN_19": "19",
  "OUT_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "power_out", VPCC: "input", SEL: "input", PROG2: "input", THERM: "bidirectional", "~{PG}": "open_collector", STAT2: "open_collector", "STAT1/~{LBO}": "open_collector", "~{TE}": "input", "V_{SS}_10": "power_in", "V_{SS}_11": "passive", PROG3: "bidirectional", PROG1: "bidirectional", "V_{BAT}_14": "power_out", "V_{BAT}_15": "passive", "V_{BAT_SENSE}": "input", CE: "input", IN_18: "power_in", IN_19: "passive", OUT_20: "passive", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:MCP73871-4CC";
  override referencePrefix = "U";
}

/**
 * 1.5A, 2-Cell 8.4V, standalone switch-mode Li-Ion Charger, 5Vin, 750kHz, QFN-16
 *
 * KiCad symbol: `Battery_Management:SLM6800`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see https://datasheet.lcsc.com/lcsc/1912111437_SOLA-IC-SLM6800_C388594.pdf
 * Keywords: battery charger dual-cell two-cell li-ion li-poly.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.15x2.15mm.
 */
export class SLM6800 extends Component.withPins({
  "~{CHRG}": "13",
  "~{STBY}": "14",
  "NTC": "1",
  "VIN": "2",
  "BST": "3",
  "PGND_4": "4",
  "LX_5": "5",
  "LX_6": "6",
  "VSYS_7": "7",
  "VSYS_8": "8",
  "BAT": "9",
  "ILIM": "10",
  "ISET": "11",
  "TM": "12",
  "SGND": "15",
  "EN": "16",
  "PGND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CHRG}": "open_collector", "~{STBY}": "open_collector", NTC: "input", VIN: "power_in", BST: "input", PGND_4: "power_in", LX_5: "output", LX_6: "passive", VSYS_7: "output", VSYS_8: "passive", BAT: "power_out", ILIM: "input", ISET: "input", TM: "input", SGND: "power_in", EN: "input", PGND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:SLM6800";
  override referencePrefix = "U";
}

/**
 * 1A Standalone Linear Li-ion/LiPo single-cell battery charger, 4.2V ±1% charge voltage, VCC = 4.0..8.0V, SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Battery_Management:TP4056-42-ESOP8`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.*P1.27mm*EP2.4*x3.3*mm*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_2410121619_TOPPOWER-Nanjing-Extension-Microelectronics-TP4056-42-ESOP8_C16581.pdf
 * Keywords: lithium-ion lithium-polymer Li-Poly.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm_ThermalVias.
 */
export class TP4056_42_ESOP8 extends Component.withPins({
  "TEMP": "1",
  "PROG": "2",
  "GND": "3",
  "V_{CC}": "4",
  "BAT": "5",
  "~{STDBY}": "6",
  "~{CHRG}": "7",
  "CE": "8",
  "EPAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TEMP: "input", PROG: "passive", GND: "power_in", "V_{CC}": "power_in", BAT: "power_out", "~{STDBY}": "open_collector", "~{CHRG}": "open_collector", CE: "input", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:TP4056-42-ESOP8";
  override referencePrefix = "U";
}

/**
 * Constant-current/constant-voltage linear charger for single cell lithium-ion batteries with 2.9V Trickle Charge, 4.5V to 6.5V VDD, -40 to +85 degree Celsius, TSOT-23-6
 *
 * KiCad symbol: `Battery_Management:TP4057`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see http://toppwr.com/uploadfile/file/20230304/640302a47b738.pdf
 * Keywords: Constant-current constant-voltage linear charger single-cell lithium-ion battery.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class TP4057 extends Component.withPins({
  "~{CHRG}": "1",
  "GND": "2",
  "BAT": "3",
  "V_{CC}": "4",
  "STDBY": "5",
  "PROG": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CHRG}": "open_collector", GND: "power_in", BAT: "power_out", "V_{CC}": "power_in", STDBY: "open_collector", PROG: "passive", ...opts.pinTypes } });
  }
  override schema = "Battery_Management:TP4057";
  override referencePrefix = "U";
}
