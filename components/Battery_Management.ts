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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADP5063 extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: D_IO3; bidirectional. */
  "D_IO3": "2",
  /** Physical pin 3: D_IO2; bidirectional. */
  "D_IO2": "3",
  /** Physical pin 4: BAT_SNS; passive. */
  "BAT_SNS": "4",
  /** Physical pin 5: D_IO1; bidirectional. */
  "D_IO1": "5",
  /** Physical pin 6: VINx; input. */
  "VINx_6": "6",
  /** Physical pin 7: VINx; input. */
  "VINx_7": "7",
  /** Physical pin 8: VINx; input. */
  "VINx_8": "8",
  /** Physical pin 9: ISO_Sx; passive. */
  "ISO_Sx_9": "9",
  /** Physical pin 10: ISO_Sx; power_out. */
  "ISO_Sx_10": "10",
  /** Physical pin 11: ISO_Sx; passive. */
  "ISO_Sx_11": "11",
  /** Physical pin 12: ISO_Bx; passive. */
  "ISO_Bx_12": "12",
  /** Physical pin 13: ISO_Bx; passive. */
  "ISO_Bx_13": "13",
  /** Physical pin 14: ISO_Bx; passive. */
  "ISO_Bx_14": "14",
  /** Physical pin 15: ILED; open_collector. */
  "ILED": "15",
  /** Physical pin 16: SYS_EN; open_collector. */
  "SYS_EN": "16",
  /** Physical pin 17: SDA; bidirectional. */
  "SDA": "17",
  /** Physical pin 18: THR; passive. */
  "THR": "18",
  /** Physical pin 19: CBP; passive. */
  "CBP": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: EP; passive. */
  "EP": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADP5090ACP extends Component.withPins({
  /** Physical pin 1: SETSD; input. */
  "SETSD": "1",
  /** Physical pin 2: TERM; input. */
  "TERM": "2",
  /** Physical pin 3: AGND; power_in. */
  "AGND_3": "3",
  /** Physical pin 4: MINOP; passive. */
  "MINOP": "4",
  /** Physical pin 5: MPPT; input. */
  "MPPT": "5",
  /** Physical pin 6: CBP; passive. */
  "CBP": "6",
  /** Physical pin 7: VIN; power_in. */
  "VIN": "7",
  /** Physical pin 8: PGND; power_in. */
  "PGND": "8",
  /** Physical pin 9: SW; input. */
  "SW": "9",
  /** Physical pin 10: BAT; power_out. */
  "BAT": "10",
  /** Physical pin 11: SYS; power_out. */
  "SYS": "11",
  /** Physical pin 12: BACKUP; passive. */
  "BACKUP": "12",
  /** Physical pin 13: PGOOD; output. */
  "PGOOD": "13",
  /** Physical pin 14: DIS_SW; input. */
  "DIS_SW": "14",
  /** Physical pin 15: REF; output. */
  "REF": "15",
  /** Physical pin 16: SETPG; input. */
  "SETPG": "16",
  /** Physical pin 17: AGND; passive. */
  "AGND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADP5091 extends Component.withPins({
  /** Physical pin 1: REF; passive. */
  "REF": "1",
  /** Physical pin 2: SETSD; passive. */
  "SETSD": "2",
  /** Physical pin 3: SETBK; passive. */
  "SETBK": "3",
  /** Physical pin 4: TERM; passive. */
  "TERM": "4",
  /** Physical pin 5: SETPG; passive. */
  "SETPG": "5",
  /** Physical pin 6: SETHYST; passive. */
  "SETHYST": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND_7": "7",
  /** Physical pin 8: CBP; passive. */
  "CBP": "8",
  /** Physical pin 9: MPPT; input. */
  "MPPT": "9",
  /** Physical pin 10: VIN; power_in. */
  "VIN": "10",
  /** Physical pin 11: LLD; output. */
  "LLD": "11",
  /** Physical pin 12: PGND; power_in. */
  "PGND": "12",
  /** Physical pin 13: SW; power_in. */
  "SW": "13",
  /** Physical pin 14: REG_OUT; power_out. */
  "REG_OUT": "14",
  /** Physical pin 15: REG_FB; power_out. */
  "REG_FB": "15",
  /** Physical pin 16: SYS; power_out. */
  "SYS": "16",
  /** Physical pin 17: BAT; power_out. */
  "BAT": "17",
  /** Physical pin 18: BACK_UP; power_in. */
  "BACK_UP": "18",
  /** Physical pin 19: PGOOD; output. */
  "PGOOD": "19",
  /** Physical pin 20: VID; input. */
  "VID": "20",
  /** Physical pin 21: MINOP; passive. */
  "MINOP": "21",
  /** Physical pin 22: DIS_SW; input. */
  "DIS_SW": "22",
  /** Physical pin 23: REG_D1; input. */
  "REG_D1": "23",
  /** Physical pin 24: REG_D0; input. */
  "REG_D0": "24",
  /** Physical pin 25: AGND; passive. */
  "AGND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADP5092 extends Component.withPins({
  /** Physical pin 1: REF; passive. */
  "REF": "1",
  /** Physical pin 2: SETSD; passive. */
  "SETSD": "2",
  /** Physical pin 3: SETBK; passive. */
  "SETBK": "3",
  /** Physical pin 4: TERM; passive. */
  "TERM": "4",
  /** Physical pin 5: SETPG; passive. */
  "SETPG": "5",
  /** Physical pin 6: SETHYST; passive. */
  "SETHYST": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND_7": "7",
  /** Physical pin 8: CBP; passive. */
  "CBP": "8",
  /** Physical pin 9: MPPT; input. */
  "MPPT": "9",
  /** Physical pin 10: VIN; power_in. */
  "VIN": "10",
  /** Physical pin 11: REG_GOOD; output. */
  "REG_GOOD": "11",
  /** Physical pin 12: PGND; power_in. */
  "PGND": "12",
  /** Physical pin 13: SW; power_in. */
  "SW": "13",
  /** Physical pin 14: REG_OUT; power_out. */
  "REG_OUT": "14",
  /** Physical pin 15: REG_FB; power_out. */
  "REG_FB": "15",
  /** Physical pin 16: SYS; power_out. */
  "SYS": "16",
  /** Physical pin 17: BAT; power_out. */
  "BAT": "17",
  /** Physical pin 18: BACK_UP; power_in. */
  "BACK_UP": "18",
  /** Physical pin 19: PGOOD; output. */
  "PGOOD": "19",
  /** Physical pin 20: VID; input. */
  "VID": "20",
  /** Physical pin 21: MINOP; passive. */
  "MINOP": "21",
  /** Physical pin 22: DIS_SW; input. */
  "DIS_SW": "22",
  /** Physical pin 23: REG_D1; input. */
  "REG_D1": "23",
  /** Physical pin 24: REG_D0; input. */
  "REG_D0": "24",
  /** Physical pin 25: AGND; passive. */
  "AGND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP9101CK extends Component.withPins({
  /** Physical pin 1: VM; passive. */
  "VM": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: DO; output. */
  "DO": "4",
  /** Physical pin 5: CO; output. */
  "CO": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP9101CK6 extends Component.withPins({
  /** Physical pin 1: DO; output. */
  "DO": "1",
  /** Physical pin 2: VM; passive. */
  "VM": "2",
  /** Physical pin 3: CO; output. */
  "CO": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APW7261 extends Component.withPins({
  /** Physical pin A1: VBUS; power_in. */
  "VBUS_A1": "A1",
  /** Physical pin A2: VBUS; passive. */
  "VBUS_A2": "A2",
  /** Physical pin A3: BOOT; input. */
  "BOOT": "A3",
  /** Physical pin A4: SCL; input. */
  "SCL": "A4",
  /** Physical pin B1: PMID; input. */
  "PMID_B1": "B1",
  /** Physical pin B2: PMID; input. */
  "PMID_B2": "B2",
  /** Physical pin B3: PMID; input. */
  "PMID_B3": "B3",
  /** Physical pin B4: SDA; bidirectional. */
  "SDA": "B4",
  /** Physical pin C1: SW; power_out. */
  "SW_C1": "C1",
  /** Physical pin C2: SW; passive. */
  "SW_C2": "C2",
  /** Physical pin C3: SW; passive. */
  "SW_C3": "C3",
  /** Physical pin C4: STAT; open_collector. */
  "STAT": "C4",
  /** Physical pin D1: PGND; power_in. */
  "PGND_D1": "D1",
  /** Physical pin D2: PGND; passive. */
  "PGND_D2": "D2",
  /** Physical pin D3: PGND; passive. */
  "PGND_D3": "D3",
  /** Physical pin D4: OTG; input. */
  "OTG": "D4",
  /** Physical pin E1: CSIN; input. */
  "CSIN": "E1",
  /** Physical pin E2: CD; input. */
  "CD": "E2",
  /** Physical pin E3: REGN; power_out. */
  "REGN": "E3",
  /** Physical pin E4: CSOUT; input. */
  "CSOUT": "E4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS8506C extends Component.withPins({
  /** Physical pin 1: TSECH; input. */
  "TSECH": "1",
  /** Physical pin 2: TSECL; input. */
  "TSECL": "2",
  /** Physical pin 3: VC7; input. */
  "VC7": "3",
  /** Physical pin 4: VC6; input. */
  "VC6": "4",
  /** Physical pin 5: VS5; input. */
  "VS5": "5",
  /** Physical pin 6: VC4; input. */
  "VC4": "6",
  /** Physical pin 7: VC3; input. */
  "VC3": "7",
  /** Physical pin 8: VC2; input. */
  "VC2": "8",
  /** Physical pin 9: VC1; input. */
  "VC1": "9",
  /** Physical pin 10: CGND; input. */
  "CGND": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC": "11",
  /** Physical pin 12: VREF_IN; input. */
  "VREF_IN": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: TRIG_IN; input. */
  "TRIG_IN": "14",
  /** Physical pin 15: CLK_IN; input. */
  "CLK_IN": "15",
  /** Physical pin 16: CVT_NOK_OUT; input. */
  "CVT_NOK_OUT": "16",
  /** Physical pin 17: BD_OUT; input. */
  "BD_OUT": "17",
  /** Physical pin 18: FD_OUT; input. */
  "FD_OUT": "18",
  /** Physical pin 19: WAKE_IN; input. */
  "WAKE_IN": "19",
  /** Physical pin 20: NC_T; no_connect. */
  "NC_T": "20",
  /** Physical pin 21: SDO; output. */
  "SDO": "21",
  /** Physical pin 22: SDI; input. */
  "SDI": "22",
  /** Physical pin 23: SCKL; input. */
  "SCKL": "23",
  /** Physical pin 24: ~{CS}; input. */
  "~{CS}": "24",
  /** Physical pin 25: CELL_THU; input. */
  "CELL_THU": "25",
  /** Physical pin 26: CELL_THL; input. */
  "CELL_THL": "26",
  /** Physical pin 27: TEMP_IN2; input. */
  "TEMP_IN2": "27",
  /** Physical pin 28: TEMP_IN1; input. */
  "TEMP_IN1": "28",
  /** Physical pin 29: REF_T; input. */
  "REF_T": "29",
  /** Physical pin 30: V5V; input. */
  "V5V": "30",
  /** Physical pin 31: V5V_IN; input. */
  "V5V_IN": "31",
  /** Physical pin 32: WAKE_OUT; input. */
  "WAKE_OUT": "32",
  /** Physical pin 33: FD_IN; input. */
  "FD_IN": "33",
  /** Physical pin 34: BD_IN; input. */
  "BD_IN": "34",
  /** Physical pin 35: CVT_NOK_IN; input. */
  "CVT_NOK_IN": "35",
  /** Physical pin 36: CLK_OUT; input. */
  "CLK_OUT": "36",
  /** Physical pin 37: TRIG_OUT; input. */
  "TRIG_OUT": "37",
  /** Physical pin 38: VSUP; power_in. */
  "VSUP": "38",
  /** Physical pin 39: MS_SL; input. */
  "MS_SL": "39",
  /** Physical pin 40: VREF_H; input. */
  "VREF_H": "40",
  /** Physical pin 41: PAD; power_in. */
  "PAD": "41",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ2003 extends Component.withPins({
  /** Physical pin 1: CCMD; input. */
  "CCMD": "1",
  /** Physical pin 2: DCMD; input. */
  "DCMD": "2",
  /** Physical pin 3: DVEN; input. */
  "DVEN": "3",
  /** Physical pin 4: TM_{1}; input. */
  "TM_{1}": "4",
  /** Physical pin 5: TM_{2}; input. */
  "TM_{2}": "5",
  /** Physical pin 6: TS; input. */
  "TS": "6",
  /** Physical pin 7: BAT; input. */
  "BAT": "7",
  /** Physical pin 8: V_{SS}; power_in. */
  "V_{SS}": "8",
  /** Physical pin 9: SNS; input. */
  "SNS": "9",
  /** Physical pin 10: TCO; input. */
  "TCO": "10",
  /** Physical pin 11: MCV; input. */
  "MCV": "11",
  /** Physical pin 12: TEMP; output. */
  "TEMP": "12",
  /** Physical pin 13: CHG; output. */
  "CHG": "13",
  /** Physical pin 14: MOD; output. */
  "MOD": "14",
  /** Physical pin 15: DIS; output. */
  "DIS": "15",
  /** Physical pin 16: V_{CC}; power_in. */
  "V_{CC}": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ21040DBV extends Component.withPins({
  /** Physical pin 1: TS; input. */
  "TS": "1",
  /** Physical pin 2: OUT; power_out. */
  "OUT": "2",
  /** Physical pin 3: ~{CHG}; open_collector. */
  "~{CHG}": "3",
  /** Physical pin 4: ISET; input. */
  "ISET": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24004 extends Component.withPins({
  /** Physical pin 1: N/C; no_connect. */
  "N/C_1": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: ISNS; input. */
  "ISNS": "5",
  /** Physical pin 6: N/C; no_connect. */
  "N/C_6": "6",
  /** Physical pin 7: APG/THERM; input. */
  "APG/THERM": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
  /** Physical pin 9: VSEL; input. */
  "VSEL": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: N/C; no_connect. */
  "N/C_11": "11",
  /** Physical pin 12: CR; input. */
  "CR": "12",
  /** Physical pin 13: TMR_SEL; input. */
  "TMR_SEL": "13",
  /** Physical pin 14: STAT1; output. */
  "STAT1": "14",
  /** Physical pin 15: N/C; no_connect. */
  "N/C_15": "15",
  /** Physical pin 16: AGND; power_in. */
  "AGND": "16",
  /** Physical pin 17: VSENSE; input. */
  "VSENSE": "17",
  /** Physical pin 18: OUT; output. */
  "OUT_18": "18",
  /** Physical pin 19: OUT; passive. */
  "OUT_19": "19",
  /** Physical pin 20: N/C; no_connect. */
  "N/C_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24005 extends Component.withPins({
  /** Physical pin 1: N/C; no_connect. */
  "N/C_1": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: ISNS; input. */
  "ISNS": "5",
  /** Physical pin 6: N/C; no_connect. */
  "N/C_6": "6",
  /** Physical pin 7: APG/THERM; input. */
  "APG/THERM": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
  /** Physical pin 9: VSEL; input. */
  "VSEL": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: N/C; no_connect. */
  "N/C_11": "11",
  /** Physical pin 12: CR; input. */
  "CR": "12",
  /** Physical pin 13: TMR_SEL; input. */
  "TMR_SEL": "13",
  /** Physical pin 14: STAT1; open_collector. */
  "STAT1": "14",
  /** Physical pin 15: STAT2; open_collector. */
  "STAT2": "15",
  /** Physical pin 16: AGND; power_in. */
  "AGND": "16",
  /** Physical pin 17: VSENSE; input. */
  "VSENSE": "17",
  /** Physical pin 18: OUT; output. */
  "OUT_18": "18",
  /** Physical pin 19: OUT; passive. */
  "OUT_19": "19",
  /** Physical pin 20: N/C; no_connect. */
  "N/C_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24006 extends Component.withPins({
  /** Physical pin 1: N/C; no_connect. */
  "N/C_1": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: ISNS; input. */
  "ISNS": "5",
  /** Physical pin 6: N/C; no_connect. */
  "N/C_6": "6",
  /** Physical pin 7: APG/THERM; input. */
  "APG/THERM": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
  /** Physical pin 9: VSEL; input. */
  "VSEL": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: N/C; no_connect. */
  "N/C_11": "11",
  /** Physical pin 12: CR; input. */
  "CR": "12",
  /** Physical pin 13: TMR_SEL; input. */
  "TMR_SEL": "13",
  /** Physical pin 14: STAT1; output. */
  "STAT1": "14",
  /** Physical pin 15: STAT2; output. */
  "STAT2": "15",
  /** Physical pin 16: AGND; power_in. */
  "AGND": "16",
  /** Physical pin 17: VSENSE; input. */
  "VSENSE": "17",
  /** Physical pin 18: OUT; output. */
  "OUT_18": "18",
  /** Physical pin 19: OUT; passive. */
  "OUT_19": "19",
  /** Physical pin 20: N/C; no_connect. */
  "N/C_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24012 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: STAT1; open_collector. */
  "STAT1": "3",
  /** Physical pin 4: STAT2; open_collector. */
  "STAT2": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: ISET; output. */
  "ISET": "6",
  /** Physical pin 7: ~{PG}; open_collector. */
  "~{PG}": "7",
  /** Physical pin 8: ~{CE}; input. */
  "~{CE}": "8",
  /** Physical pin 9: BAT; input. */
  "BAT": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT": "10",
  /** Physical pin 11: 1EP; passive. */
  "1EP": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24013 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: STAT1; open_collector. */
  "STAT1": "3",
  /** Physical pin 4: STAT2; open_collector. */
  "STAT2": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS_5": "5",
  /** Physical pin 6: ISET; output. */
  "ISET": "6",
  /** Physical pin 7: ~{CE}; input. */
  "~{CE}": "7",
  /** Physical pin 8: ~{TTE}; input. */
  "~{TTE}": "8",
  /** Physical pin 9: BAT; input. */
  "BAT": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT": "10",
  /** Physical pin 11: VSS; passive. */
  "VSS_11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24072RGT extends Component.withPins({
  /** Physical pin 1: TS; passive. */
  "TS": "1",
  /** Physical pin 2: BAT; power_out. */
  "BAT_2": "2",
  /** Physical pin 3: BAT; passive. */
  "BAT_3": "3",
  /** Physical pin 4: ~{CE}; input. */
  "~{CE}": "4",
  /** Physical pin 5: EN2; input. */
  "EN2": "5",
  /** Physical pin 6: EN1; input. */
  "EN1": "6",
  /** Physical pin 7: ~{PGOOD}; open_collector. */
  "~{PGOOD}": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: ~{CHG}; open_collector. */
  "~{CHG}": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT_10": "10",
  /** Physical pin 11: OUT; passive. */
  "OUT_11": "11",
  /** Physical pin 12: ILIM; passive. */
  "ILIM": "12",
  /** Physical pin 13: IN; power_in. */
  "IN": "13",
  /** Physical pin 14: TMR; input. */
  "TMR": "14",
  /** Physical pin 15: TD; input. */
  "TD": "15",
  /** Physical pin 16: ISET; passive. */
  "ISET": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24073RGT extends Component.withPins({
  /** Physical pin 1: TS; passive. */
  "TS": "1",
  /** Physical pin 2: BAT; power_out. */
  "BAT_2": "2",
  /** Physical pin 3: BAT; passive. */
  "BAT_3": "3",
  /** Physical pin 4: ~{CE}; input. */
  "~{CE}": "4",
  /** Physical pin 5: EN2; input. */
  "EN2": "5",
  /** Physical pin 6: EN1; input. */
  "EN1": "6",
  /** Physical pin 7: ~{PGOOD}; open_collector. */
  "~{PGOOD}": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: ~{CHG}; open_collector. */
  "~{CHG}": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT_10": "10",
  /** Physical pin 11: OUT; passive. */
  "OUT_11": "11",
  /** Physical pin 12: ILIM; passive. */
  "ILIM": "12",
  /** Physical pin 13: IN; power_in. */
  "IN": "13",
  /** Physical pin 14: TMR; input. */
  "TMR": "14",
  /** Physical pin 15: TD; input. */
  "TD": "15",
  /** Physical pin 16: ISET; passive. */
  "ISET": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24074RGT extends Component.withPins({
  /** Physical pin 1: TS; passive. */
  "TS": "1",
  /** Physical pin 2: BAT; power_out. */
  "BAT_2": "2",
  /** Physical pin 3: BAT; passive. */
  "BAT_3": "3",
  /** Physical pin 4: ~{CE}; input. */
  "~{CE}": "4",
  /** Physical pin 5: EN2; input. */
  "EN2": "5",
  /** Physical pin 6: EN1; input. */
  "EN1": "6",
  /** Physical pin 7: ~{PGOOD}; open_collector. */
  "~{PGOOD}": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: ~{CHG}; open_collector. */
  "~{CHG}": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT_10": "10",
  /** Physical pin 11: OUT; passive. */
  "OUT_11": "11",
  /** Physical pin 12: ILIM; passive. */
  "ILIM": "12",
  /** Physical pin 13: IN; power_in. */
  "IN": "13",
  /** Physical pin 14: TMR; input. */
  "TMR": "14",
  /** Physical pin 15: ITERM; input. */
  "ITERM": "15",
  /** Physical pin 16: ISET; passive. */
  "ISET": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24075RGT extends Component.withPins({
  /** Physical pin 1: TS; passive. */
  "TS": "1",
  /** Physical pin 2: BAT; power_out. */
  "BAT_2": "2",
  /** Physical pin 3: BAT; passive. */
  "BAT_3": "3",
  /** Physical pin 4: ~{CE}; input. */
  "~{CE}": "4",
  /** Physical pin 5: EN2; input. */
  "EN2": "5",
  /** Physical pin 6: EN1; input. */
  "EN1": "6",
  /** Physical pin 7: ~{PGOOD}; open_collector. */
  "~{PGOOD}": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: ~{CHG}; open_collector. */
  "~{CHG}": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT_10": "10",
  /** Physical pin 11: OUT; passive. */
  "OUT_11": "11",
  /** Physical pin 12: ILIM; passive. */
  "ILIM": "12",
  /** Physical pin 13: IN; power_in. */
  "IN": "13",
  /** Physical pin 14: TMR; input. */
  "TMR": "14",
  /** Physical pin 15: SYSOFF; input. */
  "SYSOFF": "15",
  /** Physical pin 16: ISET; passive. */
  "ISET": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24079RGT extends Component.withPins({
  /** Physical pin 1: TS; passive. */
  "TS": "1",
  /** Physical pin 2: BAT; power_out. */
  "BAT_2": "2",
  /** Physical pin 3: BAT; passive. */
  "BAT_3": "3",
  /** Physical pin 4: ~{CE}; input. */
  "~{CE}": "4",
  /** Physical pin 5: EN2; input. */
  "EN2": "5",
  /** Physical pin 6: EN1; input. */
  "EN1": "6",
  /** Physical pin 7: ~{PGOOD}; open_collector. */
  "~{PGOOD}": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: ~{CHG}; open_collector. */
  "~{CHG}": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT_10": "10",
  /** Physical pin 11: OUT; passive. */
  "OUT_11": "11",
  /** Physical pin 12: ILIM; passive. */
  "ILIM": "12",
  /** Physical pin 13: IN; power_in. */
  "IN": "13",
  /** Physical pin 14: TMR; input. */
  "TMR": "14",
  /** Physical pin 15: SYSOFF; input. */
  "SYSOFF": "15",
  /** Physical pin 16: ISET; passive. */
  "ISET": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24090DGQ extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: ISET; passive. */
  "ISET": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS_3": "3",
  /** Physical pin 4: PRETERM; passive. */
  "PRETERM": "4",
  /** Physical pin 5: ~{PG}; open_collector. */
  "~{PG}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: ISET2; passive. */
  "ISET2": "7",
  /** Physical pin 8: ~{CHG}; open_collector. */
  "~{CHG}": "8",
  /** Physical pin 9: TS; passive. */
  "TS": "9",
  /** Physical pin 10: OUT; power_out. */
  "OUT": "10",
  /** Physical pin 11: VSS; passive. */
  "VSS_11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24133RGY extends Component.withPins({
  /** Physical pin 1: SW; power_out. */
  "SW_1": "1",
  /** Physical pin 2: PVCC; power_in. */
  "PVCC_2": "2",
  /** Physical pin 3: PVCC; passive. */
  "PVCC_3": "3",
  /** Physical pin 4: AVCC; power_in. */
  "AVCC": "4",
  /** Physical pin 5: ACN; input. */
  "ACN": "5",
  /** Physical pin 6: ACP; input. */
  "ACP": "6",
  /** Physical pin 7: CMSRC; output. */
  "CMSRC": "7",
  /** Physical pin 8: ACDRV; output. */
  "ACDRV": "8",
  /** Physical pin 9: STAT; open_collector. */
  "STAT": "9",
  /** Physical pin 10: TS; input. */
  "TS": "10",
  /** Physical pin 11: TTC; passive. */
  "TTC": "11",
  /** Physical pin 12: VREF; power_out. */
  "VREF": "12",
  /** Physical pin 13: ISET; input. */
  "ISET": "13",
  /** Physical pin 14: CELL; passive. */
  "CELL": "14",
  /** Physical pin 15: SRN; input. */
  "SRN": "15",
  /** Physical pin 16: SRP; input. */
  "SRP": "16",
  /** Physical pin 17: ACSET; input. */
  "ACSET": "17",
  /** Physical pin 18: OVPSET; input. */
  "OVPSET": "18",
  /** Physical pin 19: ~{BATDRV}; output. */
  "~{BATDRV}": "19",
  /** Physical pin 20: REGN; passive. */
  "REGN": "20",
  /** Physical pin 21: BTST; passive. */
  "BTST": "21",
  /** Physical pin 22: PGND; power_in. */
  "PGND_22": "22",
  /** Physical pin 23: PGND; passive. */
  "PGND_23": "23",
  /** Physical pin 24: SW; passive. */
  "SW_24": "24",
  /** Physical pin 25: AGND; power_in. */
  "AGND": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24166RGE extends Component.withPins({
  /** Physical pin 1: VDPM; input. */
  "VDPM": "1",
  /** Physical pin 2: IUSB3; passive. */
  "IUSB3": "2",
  /** Physical pin 3: IUSB2; passive. */
  "IUSB2": "3",
  /** Physical pin 4: IUSB1; passive. */
  "IUSB1": "4",
  /** Physical pin 5: ISET; passive. */
  "ISET": "5",
  /** Physical pin 6: DRV; output. */
  "DRV": "6",
  /** Physical pin 7: ~{PG}; open_collector. */
  "~{PG}": "7",
  /** Physical pin 8: ~{CHG}; open_collector. */
  "~{CHG}": "8",
  /** Physical pin 9: TS; passive. */
  "TS": "9",
  /** Physical pin 10: BGATE; output. */
  "BGATE": "10",
  /** Physical pin 11: BAT; passive. */
  "BAT_11": "11",
  /** Physical pin 12: BAT; passive. */
  "BAT_12": "12",
  /** Physical pin 13: SYS; power_out. */
  "SYS_13": "13",
  /** Physical pin 14: SYS; passive. */
  "SYS_14": "14",
  /** Physical pin 15: ILIM; passive. */
  "ILIM": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND_16": "16",
  /** Physical pin 17: PGND; passive. */
  "PGND_17": "17",
  /** Physical pin 18: SW; passive. */
  "SW": "18",
  /** Physical pin 19: BOOT; passive. */
  "BOOT": "19",
  /** Physical pin 20: PMIDI; passive. */
  "PMIDI": "20",
  /** Physical pin 21: IN; input. */
  "IN": "21",
  /** Physical pin 22: USB; power_in. */
  "USB": "22",
  /** Physical pin 23: PMIDU; passive. */
  "PMIDU": "23",
  /** Physical pin 24: ~{CE}; input. */
  "~{CE}": "24",
  /** Physical pin 25: PGND; passive. */
  "PGND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24167RGE extends Component.withPins({
  /** Physical pin 1: VDPM; input. */
  "VDPM": "1",
  /** Physical pin 2: IUSB3; passive. */
  "IUSB3": "2",
  /** Physical pin 3: IUSB2; passive. */
  "IUSB2": "3",
  /** Physical pin 4: IUSB1; passive. */
  "IUSB1": "4",
  /** Physical pin 5: ISET; passive. */
  "ISET": "5",
  /** Physical pin 6: DRV; output. */
  "DRV": "6",
  /** Physical pin 7: ~{PG}; open_collector. */
  "~{PG}": "7",
  /** Physical pin 8: ~{CHG}; open_collector. */
  "~{CHG}": "8",
  /** Physical pin 9: TS; passive. */
  "TS": "9",
  /** Physical pin 10: BGATE; output. */
  "BGATE": "10",
  /** Physical pin 11: BAT; passive. */
  "BAT_11": "11",
  /** Physical pin 12: BAT; passive. */
  "BAT_12": "12",
  /** Physical pin 13: SYS; power_out. */
  "SYS_13": "13",
  /** Physical pin 14: SYS; passive. */
  "SYS_14": "14",
  /** Physical pin 15: ILIM; passive. */
  "ILIM": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND_16": "16",
  /** Physical pin 17: PGND; passive. */
  "PGND_17": "17",
  /** Physical pin 18: SW; passive. */
  "SW": "18",
  /** Physical pin 19: BOOT; passive. */
  "BOOT": "19",
  /** Physical pin 20: PMIDI; passive. */
  "PMIDI": "20",
  /** Physical pin 21: IN; input. */
  "IN": "21",
  /** Physical pin 22: USB; power_in. */
  "USB": "22",
  /** Physical pin 23: PMIDU; passive. */
  "PMIDU": "23",
  /** Physical pin 24: ~{CE}; input. */
  "~{CE}": "24",
  /** Physical pin 25: PGND; passive. */
  "PGND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24610 extends Component.withPins({
  /** Physical pin 1: ACN; input. */
  "ACN": "1",
  /** Physical pin 2: ACP; input. */
  "ACP": "2",
  /** Physical pin 3: ~{ACDRV}; output. */
  "~{ACDRV}": "3",
  /** Physical pin 4: CE; input. */
  "CE": "4",
  /** Physical pin 5: STAT1; open_collector. */
  "STAT1": "5",
  /** Physical pin 6: TS; input. */
  "TS": "6",
  /** Physical pin 7: TTC; input. */
  "TTC": "7",
  /** Physical pin 8: ~{PG}; open_collector. */
  "~{PG}": "8",
  /** Physical pin 9: STAT2; open_collector. */
  "STAT2": "9",
  /** Physical pin 10: VREF; power_out. */
  "VREF": "10",
  /** Physical pin 11: ISET1; input. */
  "ISET1": "11",
  /** Physical pin 12: VFB; output. */
  "VFB": "12",
  /** Physical pin 13: SRN; input. */
  "SRN": "13",
  /** Physical pin 14: SRP; input. */
  "SRP": "14",
  /** Physical pin 15: ISET2; input. */
  "ISET2": "15",
  /** Physical pin 16: ACSET; input. */
  "ACSET": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: REGN; output. */
  "REGN": "18",
  /** Physical pin 19: LODRV; output. */
  "LODRV": "19",
  /** Physical pin 20: PH; power_in. */
  "PH": "20",
  /** Physical pin 21: HIDRV; output. */
  "HIDRV": "21",
  /** Physical pin 22: BTST; power_in. */
  "BTST": "22",
  /** Physical pin 23: ~{BATDRV}; output. */
  "~{BATDRV}": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24617 extends Component.withPins({
  /** Physical pin 1: ACN; input. */
  "ACN": "1",
  /** Physical pin 2: ACP; input. */
  "ACP": "2",
  /** Physical pin 3: ~{ACDRV}; output. */
  "~{ACDRV}": "3",
  /** Physical pin 4: CE; input. */
  "CE": "4",
  /** Physical pin 5: STAT1; open_collector. */
  "STAT1": "5",
  /** Physical pin 6: TS; input. */
  "TS": "6",
  /** Physical pin 7: TTC; input. */
  "TTC": "7",
  /** Physical pin 8: ~{PG}; open_collector. */
  "~{PG}": "8",
  /** Physical pin 9: STAT2; open_collector. */
  "STAT2": "9",
  /** Physical pin 10: VREF; power_out. */
  "VREF": "10",
  /** Physical pin 11: ISET1; input. */
  "ISET1": "11",
  /** Physical pin 12: VFB; output. */
  "VFB": "12",
  /** Physical pin 13: SRN; input. */
  "SRN": "13",
  /** Physical pin 14: SRP; input. */
  "SRP": "14",
  /** Physical pin 15: ISET2; input. */
  "ISET2": "15",
  /** Physical pin 16: ACSET; input. */
  "ACSET": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: REGN; output. */
  "REGN": "18",
  /** Physical pin 19: LODRV; output. */
  "LODRV": "19",
  /** Physical pin 20: PH; power_in. */
  "PH": "20",
  /** Physical pin 21: HIDRV; output. */
  "HIDRV": "21",
  /** Physical pin 22: BTST; power_in. */
  "BTST": "22",
  /** Physical pin 23: ~{BATDRV}; output. */
  "~{BATDRV}": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24650 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MPPSET; input. */
  "MPPSET": "2",
  /** Physical pin 3: STAT1; open_collector. */
  "STAT1": "3",
  /** Physical pin 4: TS; input. */
  "TS": "4",
  /** Physical pin 5: STAT2; open_collector. */
  "STAT2": "5",
  /** Physical pin 6: VREF; input. */
  "VREF": "6",
  /** Physical pin 7: TERM_EN; input. */
  "TERM_EN": "7",
  /** Physical pin 8: VFB; input. */
  "VFB": "8",
  /** Physical pin 9: SRN; input. */
  "SRN": "9",
  /** Physical pin 10: SRP; input. */
  "SRP": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: REGN; output. */
  "REGN": "12",
  /** Physical pin 13: LODRV; output. */
  "LODRV": "13",
  /** Physical pin 14: PH; input. */
  "PH": "14",
  /** Physical pin 15: HIDRV; output. */
  "HIDRV": "15",
  /** Physical pin 16: BTST; output. */
  "BTST": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ2501x extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: AC; power_in. */
  "AC": "5",
  /** Physical pin 6: USB; power_in. */
  "USB": "6",
  /** Physical pin 7: STAT1; open_collector. */
  "STAT1": "7",
  /** Physical pin 8: STAT2; open_collector. */
  "STAT2": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: ISET1; input. */
  "ISET1": "12",
  /** Physical pin 13: ISET2; input. */
  "ISET2": "13",
  /** Physical pin 14: ~{PG}; output. */
  "~{PG}": "14",
  /** Physical pin 15: ~{CE}; input. */
  "~{CE}": "15",
  /** Physical pin 16: BAT/OUT; power_out. */
  "BAT/OUT_16": "16",
  /** Physical pin 17: BAT/OUT; power_in. */
  "BAT/OUT_17": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: SW; power_out. */
  "SW": "19",
  /** Physical pin 20: FPWM; input. */
  "FPWM": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25040 extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: ISET; input. */
  "ISET": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS_3": "3",
  /** Physical pin 4: LDO; power_out. */
  "LDO": "4",
  /** Physical pin 5: IFULL; input. */
  "IFULL": "5",
  /** Physical pin 6: EN/SET; input. */
  "EN/SET": "6",
  /** Physical pin 7: VSS; passive. */
  "VSS_7": "7",
  /** Physical pin 8: ~{CHG}; open_collector. */
  "~{CHG}": "8",
  /** Physical pin 9: ~{PG}; open_collector. */
  "~{PG}": "9",
  /** Physical pin 10: BAT; power_out. */
  "BAT": "10",
  /** Physical pin 11: VSS; passive. */
  "VSS_11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25173DSG extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: ISET; input. */
  "ISET": "2",
  /** Physical pin 3: ~{CE}; input. */
  "~{CE}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: STAT; open_collector. */
  "STAT": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: ~{FB}; input. */
  "~{FB}": "7",
  /** Physical pin 8: OUT; power_out. */
  "OUT": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25504 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS_1": "1",
  /** Physical pin 2: VIN_DC; power_in. */
  "VIN_DC": "2",
  /** Physical pin 3: VOC_SAMP; input. */
  "VOC_SAMP": "3",
  /** Physical pin 4: VREF_SAMP; bidirectional. */
  "VREF_SAMP": "4",
  /** Physical pin 5: OT_PROG; input. */
  "OT_PROG": "5",
  /** Physical pin 6: VBAT_OV; input. */
  "VBAT_OV": "6",
  /** Physical pin 7: VRDIV; output. */
  "VRDIV": "7",
  /** Physical pin 8: VBAT_UV; input. */
  "VBAT_UV": "8",
  /** Physical pin 9: OK_HYST; input. */
  "OK_HYST": "9",
  /** Physical pin 10: OK_PROG; input. */
  "OK_PROG": "10",
  /** Physical pin 11: VBAT_OK; output. */
  "VBAT_OK": "11",
  /** Physical pin 12: AVSS; power_in. */
  "AVSS": "12",
  /** Physical pin 13: VSS; passive. */
  "VSS_13": "13",
  /** Physical pin 14: VBAT; power_out. */
  "VBAT": "14",
  /** Physical pin 15: VSTOR; bidirectional. */
  "VSTOR": "15",
  /** Physical pin 16: LBST; bidirectional. */
  "LBST": "16",
  /** Physical pin 17: PAD; passive. */
  "PAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25570 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS_1": "1",
  /** Physical pin 2: VIN_DC; power_in. */
  "VIN_DC": "2",
  /** Physical pin 3: VOC_SAMP; input. */
  "VOC_SAMP": "3",
  /** Physical pin 4: VREF_SAMP; passive. */
  "VREF_SAMP": "4",
  /** Physical pin 5: ~{EN}; input. */
  "~{EN}": "5",
  /** Physical pin 6: VOUT_EN; input. */
  "VOUT_EN": "6",
  /** Physical pin 7: VBAT_OV; input. */
  "VBAT_OV": "7",
  /** Physical pin 8: VRDIV; output. */
  "VRDIV": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
  /** Physical pin 10: OK_HYST; input. */
  "OK_HYST": "10",
  /** Physical pin 11: OK_PROG; input. */
  "OK_PROG": "11",
  /** Physical pin 12: VOUT_SET; input. */
  "VOUT_SET": "12",
  /** Physical pin 13: VBAT_OK; output. */
  "VBAT_OK": "13",
  /** Physical pin 14: VOUT; input. */
  "VOUT": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
  /** Physical pin 16: LBUCK; passive. */
  "LBUCK": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
  /** Physical pin 18: VBAT; power_in. */
  "VBAT": "18",
  /** Physical pin 19: VSTOR; power_out. */
  "VSTOR": "19",
  /** Physical pin 20: LBOOST; passive. */
  "LBOOST": "20",
  /** Physical pin 21: VSS; passive. */
  "VSS_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25601 extends Component.withPins({
  /** Physical pin 1: VAC; input. */
  "VAC": "1",
  /** Physical pin 2: PSEL; input. */
  "PSEL": "2",
  /** Physical pin 3: ~{PG}; open_collector. */
  "~{PG}": "3",
  /** Physical pin 4: STAT; open_collector. */
  "STAT": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: ~{INT}; open_collector. */
  "~{INT}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: ~{CE}; input. */
  "~{CE}": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: TS; passive. */
  "TS": "11",
  /** Physical pin 12: ~{QON}; input. */
  "~{QON}": "12",
  /** Physical pin 13: BAT; power_in. */
  "BAT_13": "13",
  /** Physical pin 14: BAT; passive. */
  "BAT_14": "14",
  /** Physical pin 15: SYS; passive. */
  "SYS_15": "15",
  /** Physical pin 16: SYS; passive. */
  "SYS_16": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: SW; passive. */
  "SW_19": "19",
  /** Physical pin 20: SW; passive. */
  "SW_20": "20",
  /** Physical pin 21: BTST; input. */
  "BTST": "21",
  /** Physical pin 22: REGN; passive. */
  "REGN": "22",
  /** Physical pin 23: PMID; passive. */
  "PMID": "23",
  /** Physical pin 24: VBUS; power_in. */
  "VBUS": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25798 extends Component.withPins({
  /** Physical pin 1: STAT; open_collector. */
  "STAT": "1",
  /** Physical pin 2: VBUS; power_in. */
  "VBUS_2": "2",
  /** Physical pin 3: VBUS; passive. */
  "VBUS_3": "3",
  /** Physical pin 4: BTST1; passive. */
  "BTST1": "4",
  /** Physical pin 5: REGN; power_out. */
  "REGN": "5",
  /** Physical pin 6: D+; bidirectional. */
  "D+": "6",
  /** Physical pin 7: D-; bidirectional. */
  "D-": "7",
  /** Physical pin 8: VAC2; input. */
  "VAC2": "8",
  /** Physical pin 9: VAC1; input. */
  "VAC1": "9",
  /** Physical pin 10: ACDRV2; passive. */
  "ACDRV2": "10",
  /** Physical pin 11: ACDRV1; passive. */
  "ACDRV1": "11",
  /** Physical pin 12: ~{QON}; input. */
  "~{QON}": "12",
  /** Physical pin 13: ~{CE}; input. */
  "~{CE}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: TS; input. */
  "TS": "16",
  /** Physical pin 17: ILIM_HIZ; input. */
  "ILIM_HIZ": "17",
  /** Physical pin 18: BATP; input. */
  "BATP": "18",
  /** Physical pin 19: BTST2; passive. */
  "BTST2": "19",
  /** Physical pin 20: PROG; input. */
  "PROG": "20",
  /** Physical pin 21: ~{INT}; open_collector. */
  "~{INT}": "21",
  /** Physical pin 22: BAT; power_out. */
  "BAT_22": "22",
  /** Physical pin 23: BAT; passive. */
  "BAT_23": "23",
  /** Physical pin 24: SDRV; output. */
  "SDRV": "24",
  /** Physical pin 25: SYS; power_out. */
  "SYS": "25",
  /** Physical pin 26: SW2; power_out. */
  "SW2": "26",
  /** Physical pin 27: GND; power_in. */
  "GND": "27",
  /** Physical pin 28: SW1; power_out. */
  "SW1": "28",
  /** Physical pin 29: PMID; power_out. */
  "PMID": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25886RGE extends Component.withPins({
  /** Physical pin 1: D-; bidirectional. */
  "D-": "1",
  /** Physical pin 2: STAT; open_collector. */
  "STAT": "2",
  /** Physical pin 3: ~{CE}; input. */
  "~{CE}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: OTG; input. */
  "OTG": "5",
  /** Physical pin 6: VSET; passive. */
  "VSET": "6",
  /** Physical pin 7: TS; input. */
  "TS": "7",
  /** Physical pin 8: ILIM; passive. */
  "ILIM": "8",
  /** Physical pin 9: ~{PG}; open_collector. */
  "~{PG}": "9",
  /** Physical pin 10: ICHGSET; passive. */
  "ICHGSET": "10",
  /** Physical pin 11: REGN; power_out. */
  "REGN": "11",
  /** Physical pin 12: BTST; passive. */
  "BTST": "12",
  /** Physical pin 13: BAT; passive. */
  "BAT_13": "13",
  /** Physical pin 14: BAT; passive. */
  "BAT_14": "14",
  /** Physical pin 15: SYS; power_out. */
  "SYS_15": "15",
  /** Physical pin 16: SYS; passive. */
  "SYS_16": "16",
  /** Physical pin 17: SW; power_in. */
  "SW_17": "17",
  /** Physical pin 18: SW; passive. */
  "SW_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: PMID; power_out. */
  "PMID_21": "21",
  /** Physical pin 22: PMID; passive. */
  "PMID_22": "22",
  /** Physical pin 23: VBUS; power_in. */
  "VBUS": "23",
  /** Physical pin 24: D+; bidirectional. */
  "D+": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25887RGE extends Component.withPins({
  /** Physical pin 1: ~{PG}; open_collector. */
  "~{PG}": "1",
  /** Physical pin 2: STAT; open_collector. */
  "STAT": "2",
  /** Physical pin 3: CD; input. */
  "CD": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: ~{INT}; open_collector. */
  "~{INT}": "6",
  /** Physical pin 7: TS; input. */
  "TS": "7",
  /** Physical pin 8: ILIM; passive. */
  "ILIM": "8",
  /** Physical pin 9: MID; input. */
  "MID": "9",
  /** Physical pin 10: CBSET; power_out. */
  "CBSET": "10",
  /** Physical pin 11: REGN; power_out. */
  "REGN": "11",
  /** Physical pin 12: BTST; passive. */
  "BTST": "12",
  /** Physical pin 13: BAT; power_out. */
  "BAT_13": "13",
  /** Physical pin 14: BAT; passive. */
  "BAT_14": "14",
  /** Physical pin 15: SNS; output. */
  "SNS_15": "15",
  /** Physical pin 16: SNS; passive. */
  "SNS_16": "16",
  /** Physical pin 17: SW; power_out. */
  "SW_17": "17",
  /** Physical pin 18: SW; passive. */
  "SW_18": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: PMID; power_out. */
  "PMID_21": "21",
  /** Physical pin 22: PMID; passive. */
  "PMID_22": "22",
  /** Physical pin 23: VBUS; power_in. */
  "VBUS": "23",
  /** Physical pin 24: PSEL; input. */
  "PSEL": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ25895RTW extends Component.withPins({
  /** Physical pin 1: VBUS; power_in. */
  "VBUS": "1",
  /** Physical pin 2: D+; bidirectional. */
  "D+": "2",
  /** Physical pin 3: D-; bidirectional. */
  "D-": "3",
  /** Physical pin 4: STAT; open_collector. */
  "STAT": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: ~{INT}; open_collector. */
  "~{INT}": "7",
  /** Physical pin 8: OTG; input. */
  "OTG": "8",
  /** Physical pin 9: ~{CE}; input. */
  "~{CE}": "9",
  /** Physical pin 10: ILIM; passive. */
  "ILIM": "10",
  /** Physical pin 11: TS; passive. */
  "TS": "11",
  /** Physical pin 12: ~{QON}; input. */
  "~{QON}": "12",
  /** Physical pin 13: BAT; passive. */
  "BAT_13": "13",
  /** Physical pin 14: BAT; passive. */
  "BAT_14": "14",
  /** Physical pin 15: SYS; passive. */
  "SYS_15": "15",
  /** Physical pin 16: SYS; passive. */
  "SYS_16": "16",
  /** Physical pin 17: PGND; power_in. */
  "PGND_17": "17",
  /** Physical pin 18: PGND; passive. */
  "PGND_18": "18",
  /** Physical pin 19: SW; power_out. */
  "SW_19": "19",
  /** Physical pin 20: SW; passive. */
  "SW_20": "20",
  /** Physical pin 21: BTST; passive. */
  "BTST": "21",
  /** Physical pin 22: REGN; power_out. */
  "REGN": "22",
  /** Physical pin 23: PMID; power_out. */
  "PMID": "23",
  /** Physical pin 24: DSEL; open_collector. */
  "DSEL": "24",
  /** Physical pin 25: PGND; passive. */
  "PGND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ27441_G1 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: V_{DD}; power_out. */
  "V_{DD}": "5",
  /** Physical pin 6: BAT; power_in. */
  "BAT": "6",
  /** Physical pin 7: SRN; input. */
  "SRN": "7",
  /** Physical pin 8: SRP; input. */
  "SRP": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: BIN; input. */
  "BIN": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GPOUT; output. */
  "GPOUT": "12",
  /** Physical pin 13: PAD; power_in. */
  "PAD": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ27441DRZR_G1A extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: V_{DD}; power_out. */
  "V_{DD}": "5",
  /** Physical pin 6: BAT; power_in. */
  "BAT": "6",
  /** Physical pin 7: SRN; input. */
  "SRN": "7",
  /** Physical pin 8: SRP; input. */
  "SRP": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: BIN; input. */
  "BIN": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GPOUT; output. */
  "GPOUT": "12",
  /** Physical pin 13: PAD; power_in. */
  "PAD": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ27441DRZR_G1B extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: V_{DD}; power_out. */
  "V_{DD}": "5",
  /** Physical pin 6: BAT; power_in. */
  "BAT": "6",
  /** Physical pin 7: SRN; input. */
  "SRN": "7",
  /** Physical pin 8: SRP; input. */
  "SRP": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: BIN; input. */
  "BIN": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GPOUT; output. */
  "GPOUT": "12",
  /** Physical pin 13: PAD; power_in. */
  "PAD": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ27441DRZT_G1A extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: V_{DD}; power_out. */
  "V_{DD}": "5",
  /** Physical pin 6: BAT; power_in. */
  "BAT": "6",
  /** Physical pin 7: SRN; input. */
  "SRN": "7",
  /** Physical pin 8: SRP; input. */
  "SRP": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: BIN; input. */
  "BIN": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GPOUT; output. */
  "GPOUT": "12",
  /** Physical pin 13: PAD; power_in. */
  "PAD": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ27441DRZT_G1B extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: V_{DD}; power_out. */
  "V_{DD}": "5",
  /** Physical pin 6: BAT; power_in. */
  "BAT": "6",
  /** Physical pin 7: SRN; input. */
  "SRN": "7",
  /** Physical pin 8: SRP; input. */
  "SRP": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: BIN; input. */
  "BIN": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GPOUT; output. */
  "GPOUT": "12",
  /** Physical pin 13: PAD; power_in. */
  "PAD": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ27750 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS_1": "1",
  /** Physical pin 2: SRN; input. */
  "SRN": "2",
  /** Physical pin 3: SRP; input. */
  "SRP": "3",
  /** Physical pin 4: TS1; input. */
  "TS1": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: DSG; output. */
  "DSG": "7",
  /** Physical pin 8: PACK; input. */
  "PACK": "8",
  /** Physical pin 9: CHG; output. */
  "CHG": "9",
  /** Physical pin 10: PBI; passive. */
  "PBI": "10",
  /** Physical pin 11: BAT; input. */
  "BAT": "11",
  /** Physical pin 12: VCELL/INT; bidirectional. */
  "VCELL/INT": "12",
  /** Physical pin 13: VSS; passive. */
  "VSS_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ29330DBT extends Component.withPins({
  /** Physical pin 1: CELL-; output. */
  "CELL-": "1",
  /** Physical pin 2: CELL+; output. */
  "CELL+": "2",
  /** Physical pin 3: REG; output. */
  "REG": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS_4": "4",
  /** Physical pin 6: SRN; input. */
  "SRN": "6",
  /** Physical pin 7: SRP; input. */
  "SRP": "7",
  /** Physical pin 8: VC5; input. */
  "VC5": "8",
  /** Physical pin 9: VC4; input. */
  "VC4": "9",
  /** Physical pin 10: VC3; input. */
  "VC3": "10",
  /** Physical pin 11: VC2; input. */
  "VC2": "11",
  /** Physical pin 12: VC1; input. */
  "VC1": "12",
  /** Physical pin 13: BAT; power_in. */
  "BAT": "13",
  /** Physical pin 14: CHG; output. */
  "CHG": "14",
  /** Physical pin 16: DSG; output. */
  "DSG": "16",
  /** Physical pin 17: PACK; power_in. */
  "PACK": "17",
  /** Physical pin 19: VCC; power_in. */
  "VCC": "19",
  /** Physical pin 20: ZVCHG; output. */
  "ZVCHG": "20",
  /** Physical pin 22: PMS; input. */
  "PMS": "22",
  /** Physical pin 24: LEDOUT; output. */
  "LEDOUT": "24",
  /** Physical pin 25: TOUT; output. */
  "TOUT": "25",
  /** Physical pin 26: WDI; input. */
  "WDI": "26",
  /** Physical pin 28: SCLK; input. */
  "SCLK": "28",
  /** Physical pin 29: SDATA; bidirectional. */
  "SDATA": "29",
  /** Physical pin 5: ~{XRST}; output. */
  "~{XRST}": "5",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 21: GPOD; open_collector. */
  "GPOD": "21",
  /** Physical pin 23: VSS; passive. */
  "VSS_23": "23",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 30: ~{XALERT}; open_collector. */
  "~{XALERT}": "30",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ297xy extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: Cout; output. */
  "Cout": "2",
  /** Physical pin 3: Dout; output. */
  "Dout": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: BAT; input. */
  "BAT": "5",
  /** Physical pin 6: V-; input. */
  "V-": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ51050BRHL extends Component.withPins({
  /** Physical pin 1: PGND; power_in. */
  "PGND_1": "1",
  /** Physical pin 2: AC1; input. */
  "AC1": "2",
  /** Physical pin 3: BOOT1; passive. */
  "BOOT1": "3",
  /** Physical pin 4: BAT; power_out. */
  "BAT": "4",
  /** Physical pin 5: CLAMP1; open_collector. */
  "CLAMP1": "5",
  /** Physical pin 6: COMM1; open_collector. */
  "COMM1": "6",
  /** Physical pin 7: ~{CHG}; open_collector. */
  "~{CHG}": "7",
  /** Physical pin 8: ~{AD-EN}; output. */
  "~{AD-EN}": "8",
  /** Physical pin 9: AD; input. */
  "AD": "9",
  /** Physical pin 10: TERM; input. */
  "TERM": "10",
  /** Physical pin 11: EN2; input. */
  "EN2": "11",
  /** Physical pin 12: ILIM; passive. */
  "ILIM": "12",
  /** Physical pin 13: TS/CTRL; input. */
  "TS/CTRL": "13",
  /** Physical pin 14: FOD; input. */
  "FOD": "14",
  /** Physical pin 15: COMM2; open_collector. */
  "COMM2": "15",
  /** Physical pin 16: CLAMP2; open_collector. */
  "CLAMP2": "16",
  /** Physical pin 17: BOOT2; passive. */
  "BOOT2": "17",
  /** Physical pin 18: RECT; passive. */
  "RECT": "18",
  /** Physical pin 19: AC2; input. */
  "AC2": "19",
  /** Physical pin 20: PGND; passive. */
  "PGND_20": "20",
  /** Physical pin 21: PGND; passive. */
  "PGND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ51050BYFP extends Component.withPins({
  /** Physical pin A1: PGND; power_in. */
  "PGND_A1": "A1",
  /** Physical pin A2: PGND; passive. */
  "PGND_A2": "A2",
  /** Physical pin A3: PGND; passive. */
  "PGND_A3": "A3",
  /** Physical pin A4: PGND; passive. */
  "PGND_A4": "A4",
  /** Physical pin B1: AC2; input. */
  "AC2_B1": "B1",
  /** Physical pin B2: AC2; input. */
  "AC2_B2": "B2",
  /** Physical pin B3: AC1; input. */
  "AC1_B3": "B3",
  /** Physical pin B4: AC1; input. */
  "AC1_B4": "B4",
  /** Physical pin C1: BOOT2; passive. */
  "BOOT2": "C1",
  /** Physical pin C2: RECT; passive. */
  "RECT_C2": "C2",
  /** Physical pin C3: RECT; passive. */
  "RECT_C3": "C3",
  /** Physical pin C4: BOOT1; passive. */
  "BOOT1": "C4",
  /** Physical pin D1: BAT; power_out. */
  "BAT_D1": "D1",
  /** Physical pin D2: BAT; passive. */
  "BAT_D2": "D2",
  /** Physical pin D3: BAT; passive. */
  "BAT_D3": "D3",
  /** Physical pin D4: BAT; passive. */
  "BAT_D4": "D4",
  /** Physical pin E1: COMM2; open_collector. */
  "COMM2": "E1",
  /** Physical pin E2: CLAMP2; open_collector. */
  "CLAMP2": "E2",
  /** Physical pin E3: CLAMP1; open_collector. */
  "CLAMP1": "E3",
  /** Physical pin E4: COMM1; open_collector. */
  "COMM1": "E4",
  /** Physical pin F1: TS/CTRL; input. */
  "TS/CTRL": "F1",
  /** Physical pin F2: FOD; input. */
  "FOD": "F2",
  /** Physical pin F3: ~{AD-EN}; output. */
  "~{AD-EN}": "F3",
  /** Physical pin F4: ~{CHG}; open_collector. */
  "~{CHG}": "F4",
  /** Physical pin G1: ILIM; passive. */
  "ILIM": "G1",
  /** Physical pin G2: EN2; input. */
  "EN2": "G2",
  /** Physical pin G3: TERM; input. */
  "TERM": "G3",
  /** Physical pin G4: AD; input. */
  "AD": "G4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ51051BRHL extends Component.withPins({
  /** Physical pin 1: PGND; power_in. */
  "PGND_1": "1",
  /** Physical pin 2: AC1; input. */
  "AC1": "2",
  /** Physical pin 3: BOOT1; passive. */
  "BOOT1": "3",
  /** Physical pin 4: BAT; power_out. */
  "BAT": "4",
  /** Physical pin 5: CLAMP1; open_collector. */
  "CLAMP1": "5",
  /** Physical pin 6: COMM1; open_collector. */
  "COMM1": "6",
  /** Physical pin 7: ~{CHG}; open_collector. */
  "~{CHG}": "7",
  /** Physical pin 8: ~{AD-EN}; output. */
  "~{AD-EN}": "8",
  /** Physical pin 9: AD; input. */
  "AD": "9",
  /** Physical pin 10: TERM; input. */
  "TERM": "10",
  /** Physical pin 11: EN2; input. */
  "EN2": "11",
  /** Physical pin 12: ILIM; passive. */
  "ILIM": "12",
  /** Physical pin 13: TS/CTRL; input. */
  "TS/CTRL": "13",
  /** Physical pin 14: FOD; input. */
  "FOD": "14",
  /** Physical pin 15: COMM2; open_collector. */
  "COMM2": "15",
  /** Physical pin 16: CLAMP2; open_collector. */
  "CLAMP2": "16",
  /** Physical pin 17: BOOT2; passive. */
  "BOOT2": "17",
  /** Physical pin 18: RECT; passive. */
  "RECT": "18",
  /** Physical pin 19: AC2; input. */
  "AC2": "19",
  /** Physical pin 20: PGND; passive. */
  "PGND_20": "20",
  /** Physical pin 21: PGND; passive. */
  "PGND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ51051BYFP extends Component.withPins({
  /** Physical pin A1: PGND; power_in. */
  "PGND_A1": "A1",
  /** Physical pin A2: PGND; passive. */
  "PGND_A2": "A2",
  /** Physical pin A3: PGND; passive. */
  "PGND_A3": "A3",
  /** Physical pin A4: PGND; passive. */
  "PGND_A4": "A4",
  /** Physical pin B1: AC2; input. */
  "AC2_B1": "B1",
  /** Physical pin B2: AC2; input. */
  "AC2_B2": "B2",
  /** Physical pin B3: AC1; input. */
  "AC1_B3": "B3",
  /** Physical pin B4: AC1; input. */
  "AC1_B4": "B4",
  /** Physical pin C1: BOOT2; passive. */
  "BOOT2": "C1",
  /** Physical pin C2: RECT; passive. */
  "RECT_C2": "C2",
  /** Physical pin C3: RECT; passive. */
  "RECT_C3": "C3",
  /** Physical pin C4: BOOT1; passive. */
  "BOOT1": "C4",
  /** Physical pin D1: BAT; power_out. */
  "BAT_D1": "D1",
  /** Physical pin D2: BAT; passive. */
  "BAT_D2": "D2",
  /** Physical pin D3: BAT; passive. */
  "BAT_D3": "D3",
  /** Physical pin D4: BAT; passive. */
  "BAT_D4": "D4",
  /** Physical pin E1: COMM2; open_collector. */
  "COMM2": "E1",
  /** Physical pin E2: CLAMP2; open_collector. */
  "CLAMP2": "E2",
  /** Physical pin E3: CLAMP1; open_collector. */
  "CLAMP1": "E3",
  /** Physical pin E4: COMM1; open_collector. */
  "COMM1": "E4",
  /** Physical pin F1: TS/CTRL; input. */
  "TS/CTRL": "F1",
  /** Physical pin F2: FOD; input. */
  "FOD": "F2",
  /** Physical pin F3: ~{AD-EN}; output. */
  "~{AD-EN}": "F3",
  /** Physical pin F4: ~{CHG}; open_collector. */
  "~{CHG}": "F4",
  /** Physical pin G1: ILIM; passive. */
  "ILIM": "G1",
  /** Physical pin G2: EN2; input. */
  "EN2": "G2",
  /** Physical pin G3: TERM; input. */
  "TERM": "G3",
  /** Physical pin G4: AD; input. */
  "AD": "G4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ51052BYFP extends Component.withPins({
  /** Physical pin A1: PGND; power_in. */
  "PGND_A1": "A1",
  /** Physical pin A2: PGND; passive. */
  "PGND_A2": "A2",
  /** Physical pin A3: PGND; passive. */
  "PGND_A3": "A3",
  /** Physical pin A4: PGND; passive. */
  "PGND_A4": "A4",
  /** Physical pin B1: AC2; input. */
  "AC2_B1": "B1",
  /** Physical pin B2: AC2; input. */
  "AC2_B2": "B2",
  /** Physical pin B3: AC1; input. */
  "AC1_B3": "B3",
  /** Physical pin B4: AC1; input. */
  "AC1_B4": "B4",
  /** Physical pin C1: BOOT2; passive. */
  "BOOT2": "C1",
  /** Physical pin C2: RECT; passive. */
  "RECT_C2": "C2",
  /** Physical pin C3: RECT; passive. */
  "RECT_C3": "C3",
  /** Physical pin C4: BOOT1; passive. */
  "BOOT1": "C4",
  /** Physical pin D1: BAT; power_out. */
  "BAT_D1": "D1",
  /** Physical pin D2: BAT; passive. */
  "BAT_D2": "D2",
  /** Physical pin D3: BAT; passive. */
  "BAT_D3": "D3",
  /** Physical pin D4: BAT; passive. */
  "BAT_D4": "D4",
  /** Physical pin E1: COMM2; open_collector. */
  "COMM2": "E1",
  /** Physical pin E2: CLAMP2; open_collector. */
  "CLAMP2": "E2",
  /** Physical pin E3: CLAMP1; open_collector. */
  "CLAMP1": "E3",
  /** Physical pin E4: COMM1; open_collector. */
  "COMM1": "E4",
  /** Physical pin F1: TS/CTRL; input. */
  "TS/CTRL": "F1",
  /** Physical pin F2: FOD; input. */
  "FOD": "F2",
  /** Physical pin F3: ~{AD-EN}; output. */
  "~{AD-EN}": "F3",
  /** Physical pin F4: ~{CHG}; open_collector. */
  "~{CHG}": "F4",
  /** Physical pin G1: ILIM; passive. */
  "ILIM": "G1",
  /** Physical pin G2: EN2; input. */
  "EN2": "G2",
  /** Physical pin G3: TERM; input. */
  "TERM": "G3",
  /** Physical pin G4: AD; input. */
  "AD": "G4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ76200PW extends Component.withPins({
  /** Physical pin 1: VDDCP; output. */
  "VDDCP": "1",
  /** Physical pin 2: BAT; power_in. */
  "BAT": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: CHG_EN; input. */
  "CHG_EN": "4",
  /** Physical pin 5: CP_EN; input. */
  "CP_EN": "5",
  /** Physical pin 6: DSG_EN; input. */
  "DSG_EN": "6",
  /** Physical pin 7: PMON_EN; input. */
  "PMON_EN": "7",
  /** Physical pin 8: PCHG_EN; input. */
  "PCHG_EN": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS": "9",
  /** Physical pin 10: PACKDIV; output. */
  "PACKDIV": "10",
  /** Physical pin 11: PACK; power_in. */
  "PACK": "11",
  /** Physical pin 12: DSG; output. */
  "DSG": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: PCHG; output. */
  "PCHG": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: CHG; output. */
  "CHG": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ76920PW extends Component.withPins({
  /** Physical pin 6: TS1; passive. */
  "TS1": "6",
  /** Physical pin 7: CAP1; passive. */
  "CAP1": "7",
  /** Physical pin 8: REGOUT; power_out. */
  "REGOUT": "8",
  /** Physical pin 9: REGSRC; power_in. */
  "REGSRC": "9",
  /** Physical pin 10: BAT; input. */
  "BAT": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC": "11",
  /** Physical pin 12: VC5; input. */
  "VC5": "12",
  /** Physical pin 13: VC4; input. */
  "VC4": "13",
  /** Physical pin 14: VC3; input. */
  "VC3": "14",
  /** Physical pin 15: VC2; input. */
  "VC2": "15",
  /** Physical pin 16: VC1; input. */
  "VC1": "16",
  /** Physical pin 17: VC0; input. */
  "VC0": "17",
  /** Physical pin 18: SRP; input. */
  "SRP": "18",
  /** Physical pin 19: SRN; input. */
  "SRN": "19",
  /** Physical pin 20: ALERT; bidirectional. */
  "ALERT": "20",
  /** Physical pin 1: DSG; output. */
  "DSG": "1",
  /** Physical pin 2: CHG; output. */
  "CHG": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ76930DBT extends Component.withPins({
  /** Physical pin 6: TS1; passive. */
  "TS1": "6",
  /** Physical pin 7: CAP1; passive. */
  "CAP1": "7",
  /** Physical pin 8: REGOUT; power_out. */
  "REGOUT": "8",
  /** Physical pin 9: REGSRC; power_in. */
  "REGSRC": "9",
  /** Physical pin 10: VC5X; passive. */
  "VC5X": "10",
  /** Physical pin 11: NC(CAP2); passive. */
  "NC(CAP2)_11": "11",
  /** Physical pin 12: NC(CAP2); passive. */
  "NC(CAP2)_12": "12",
  /** Physical pin 13: TS2; passive. */
  "TS2": "13",
  /** Physical pin 14: CAP2; passive. */
  "CAP2": "14",
  /** Physical pin 15: BAT; input. */
  "BAT": "15",
  /** Physical pin 16: VC10; input. */
  "VC10": "16",
  /** Physical pin 17: VC9; input. */
  "VC9": "17",
  /** Physical pin 18: VC8; input. */
  "VC8": "18",
  /** Physical pin 19: VC7; input. */
  "VC7": "19",
  /** Physical pin 20: VC6; input. */
  "VC6": "20",
  /** Physical pin 21: VC5B; input. */
  "VC5B": "21",
  /** Physical pin 22: VC5; input. */
  "VC5": "22",
  /** Physical pin 23: VC4; input. */
  "VC4": "23",
  /** Physical pin 24: VC3; input. */
  "VC3": "24",
  /** Physical pin 25: VC2; input. */
  "VC2": "25",
  /** Physical pin 26: VC1; input. */
  "VC1": "26",
  /** Physical pin 27: VC0; input. */
  "VC0": "27",
  /** Physical pin 28: SRP; input. */
  "SRP": "28",
  /** Physical pin 29: SRN; input. */
  "SRN": "29",
  /** Physical pin 30: ALERT; bidirectional. */
  "ALERT": "30",
  /** Physical pin 1: DSG; output. */
  "DSG": "1",
  /** Physical pin 2: CHG; output. */
  "CHG": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ76940DBT extends Component.withPins({
  /** Physical pin 6: TS1; passive. */
  "TS1": "6",
  /** Physical pin 7: CAP1; passive. */
  "CAP1": "7",
  /** Physical pin 8: REGOUT; power_out. */
  "REGOUT": "8",
  /** Physical pin 9: REGSRC; power_in. */
  "REGSRC": "9",
  /** Physical pin 10: VC5X; passive. */
  "VC5X": "10",
  /** Physical pin 11: NC(CAP2); passive. */
  "NC(CAP2)_11": "11",
  /** Physical pin 12: NC(CAP2); passive. */
  "NC(CAP2)_12": "12",
  /** Physical pin 13: TS2; passive. */
  "TS2": "13",
  /** Physical pin 14: CAP2; passive. */
  "CAP2": "14",
  /** Physical pin 15: VC10X; passive. */
  "VC10X": "15",
  /** Physical pin 16: NC(CAP3); passive. */
  "NC(CAP3)_16": "16",
  /** Physical pin 17: NC(CAP3); passive. */
  "NC(CAP3)_17": "17",
  /** Physical pin 18: TS3; passive. */
  "TS3": "18",
  /** Physical pin 19: CAP3; passive. */
  "CAP3": "19",
  /** Physical pin 20: BAT; input. */
  "BAT": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: VC15; input. */
  "VC15": "24",
  /** Physical pin 25: VC14; input. */
  "VC14": "25",
  /** Physical pin 26: VC13; input. */
  "VC13": "26",
  /** Physical pin 27: VC12; input. */
  "VC12": "27",
  /** Physical pin 28: VC11; input. */
  "VC11": "28",
  /** Physical pin 29: VC10B; input. */
  "VC10B": "29",
  /** Physical pin 30: VC10; input. */
  "VC10": "30",
  /** Physical pin 31: VC9; input. */
  "VC9": "31",
  /** Physical pin 32: VC8; input. */
  "VC8": "32",
  /** Physical pin 33: VC7; input. */
  "VC7": "33",
  /** Physical pin 34: VC6; input. */
  "VC6": "34",
  /** Physical pin 35: VC5B; input. */
  "VC5B": "35",
  /** Physical pin 36: VC5; input. */
  "VC5": "36",
  /** Physical pin 37: VC4; input. */
  "VC4": "37",
  /** Physical pin 38: VC3; input. */
  "VC3": "38",
  /** Physical pin 39: VC2; input. */
  "VC2": "39",
  /** Physical pin 40: VC1; input. */
  "VC1": "40",
  /** Physical pin 41: VC0; input. */
  "VC0": "41",
  /** Physical pin 42: SRP; input. */
  "SRP": "42",
  /** Physical pin 43: SRN; input. */
  "SRN": "43",
  /** Physical pin 44: ALERT; bidirectional. */
  "ALERT": "44",
  /** Physical pin 1: DSG; output. */
  "DSG": "1",
  /** Physical pin 2: CHG; output. */
  "CHG": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ76952PFB extends Component.withPins({
  /** Physical pin 1: VC15; input. */
  "VC15": "1",
  /** Physical pin 2: VC14; input. */
  "VC14": "2",
  /** Physical pin 3: VC13; input. */
  "VC13": "3",
  /** Physical pin 4: VC12; input. */
  "VC12": "4",
  /** Physical pin 5: VC11; input. */
  "VC11": "5",
  /** Physical pin 6: VC10; input. */
  "VC10": "6",
  /** Physical pin 7: VC9; input. */
  "VC9": "7",
  /** Physical pin 8: VC8; input. */
  "VC8": "8",
  /** Physical pin 9: VC7; input. */
  "VC7": "9",
  /** Physical pin 10: VC6; input. */
  "VC6": "10",
  /** Physical pin 11: VC5; input. */
  "VC5": "11",
  /** Physical pin 12: VC4; input. */
  "VC4": "12",
  /** Physical pin 13: VC3; input. */
  "VC3": "13",
  /** Physical pin 14: VC2; input. */
  "VC2": "14",
  /** Physical pin 15: VC1; input. */
  "VC1": "15",
  /** Physical pin 16: VC0; input. */
  "VC0": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: SRP; input. */
  "SRP": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: SRN; input. */
  "SRN": "20",
  /** Physical pin 21: TS1; input. */
  "TS1": "21",
  /** Physical pin 22: TS2/WAKE; input. */
  "TS2/WAKE": "22",
  /** Physical pin 23: TS3; input. */
  "TS3": "23",
  /** Physical pin 24: REG18; power_out. */
  "REG18": "24",
  /** Physical pin 25: HDQ_IO/ALERT; bidirectional. */
  "HDQ_IO/ALERT": "25",
  /** Physical pin 26: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "26",
  /** Physical pin 27: SDA/SPI_MISO; bidirectional. */
  "SDA/SPI_MISO": "27",
  /** Physical pin 28: HDQ_IO/SPI_MOSI; bidirectional. */
  "HDQ_IO/SPI_MOSI": "28",
  /** Physical pin 29: CFETOFF/SPI_CS; bidirectional. */
  "CFETOFF/SPI_CS": "29",
  /** Physical pin 30: DFETOFF/BOTHOFF; bidirectional. */
  "DFETOFF/BOTHOFF": "30",
  /** Physical pin 31: DCHG; bidirectional. */
  "DCHG": "31",
  /** Physical pin 32: DDSG; bidirectional. */
  "DDSG": "32",
  /** Physical pin 33: RST_SHUT; input. */
  "RST_SHUT": "33",
  /** Physical pin 34: REG2; power_out. */
  "REG2": "34",
  /** Physical pin 35: REG1; power_out. */
  "REG1": "35",
  /** Physical pin 36: REGIN; input. */
  "REGIN": "36",
  /** Physical pin 37: BREG; output. */
  "BREG": "37",
  /** Physical pin 38: FUSE; bidirectional. */
  "FUSE": "38",
  /** Physical pin 39: PDSG; output. */
  "PDSG": "39",
  /** Physical pin 40: PCHG; output. */
  "PCHG": "40",
  /** Physical pin 41: LD; passive. */
  "LD": "41",
  /** Physical pin 42: PACK; input. */
  "PACK": "42",
  /** Physical pin 43: DSG; output. */
  "DSG": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: CHG; output. */
  "CHG": "45",
  /** Physical pin 46: CP1; power_out. */
  "CP1": "46",
  /** Physical pin 47: BAT; power_in. */
  "BAT": "47",
  /** Physical pin 48: VC16; input. */
  "VC16": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ7695201PFB extends Component.withPins({
  /** Physical pin 1: VC15; input. */
  "VC15": "1",
  /** Physical pin 2: VC14; input. */
  "VC14": "2",
  /** Physical pin 3: VC13; input. */
  "VC13": "3",
  /** Physical pin 4: VC12; input. */
  "VC12": "4",
  /** Physical pin 5: VC11; input. */
  "VC11": "5",
  /** Physical pin 6: VC10; input. */
  "VC10": "6",
  /** Physical pin 7: VC9; input. */
  "VC9": "7",
  /** Physical pin 8: VC8; input. */
  "VC8": "8",
  /** Physical pin 9: VC7; input. */
  "VC7": "9",
  /** Physical pin 10: VC6; input. */
  "VC6": "10",
  /** Physical pin 11: VC5; input. */
  "VC5": "11",
  /** Physical pin 12: VC4; input. */
  "VC4": "12",
  /** Physical pin 13: VC3; input. */
  "VC3": "13",
  /** Physical pin 14: VC2; input. */
  "VC2": "14",
  /** Physical pin 15: VC1; input. */
  "VC1": "15",
  /** Physical pin 16: VC0; input. */
  "VC0": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: SRP; input. */
  "SRP": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: SRN; input. */
  "SRN": "20",
  /** Physical pin 21: TS1; input. */
  "TS1": "21",
  /** Physical pin 22: TS2/WAKE; input. */
  "TS2/WAKE": "22",
  /** Physical pin 23: TS3; input. */
  "TS3": "23",
  /** Physical pin 24: REG18; power_out. */
  "REG18": "24",
  /** Physical pin 25: HDQ_IO/ALERT; bidirectional. */
  "HDQ_IO/ALERT": "25",
  /** Physical pin 26: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "26",
  /** Physical pin 27: SDA/SPI_MISO; bidirectional. */
  "SDA/SPI_MISO": "27",
  /** Physical pin 28: HDQ_IO/SPI_MOSI; bidirectional. */
  "HDQ_IO/SPI_MOSI": "28",
  /** Physical pin 29: CFETOFF/SPI_CS; bidirectional. */
  "CFETOFF/SPI_CS": "29",
  /** Physical pin 30: DFETOFF/BOTHOFF; bidirectional. */
  "DFETOFF/BOTHOFF": "30",
  /** Physical pin 31: DCHG; bidirectional. */
  "DCHG": "31",
  /** Physical pin 32: DDSG; bidirectional. */
  "DDSG": "32",
  /** Physical pin 33: RST_SHUT; input. */
  "RST_SHUT": "33",
  /** Physical pin 34: REG2; power_out. */
  "REG2": "34",
  /** Physical pin 35: REG1; power_out. */
  "REG1": "35",
  /** Physical pin 36: REGIN; input. */
  "REGIN": "36",
  /** Physical pin 37: BREG; output. */
  "BREG": "37",
  /** Physical pin 38: FUSE; bidirectional. */
  "FUSE": "38",
  /** Physical pin 39: PDSG; output. */
  "PDSG": "39",
  /** Physical pin 40: PCHG; output. */
  "PCHG": "40",
  /** Physical pin 41: LD; passive. */
  "LD": "41",
  /** Physical pin 42: PACK; input. */
  "PACK": "42",
  /** Physical pin 43: DSG; output. */
  "DSG": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: CHG; output. */
  "CHG": "45",
  /** Physical pin 46: CP1; power_out. */
  "CP1": "46",
  /** Physical pin 47: BAT; power_in. */
  "BAT": "47",
  /** Physical pin 48: VC16; input. */
  "VC16": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ7695202PFB extends Component.withPins({
  /** Physical pin 1: VC15; input. */
  "VC15": "1",
  /** Physical pin 2: VC14; input. */
  "VC14": "2",
  /** Physical pin 3: VC13; input. */
  "VC13": "3",
  /** Physical pin 4: VC12; input. */
  "VC12": "4",
  /** Physical pin 5: VC11; input. */
  "VC11": "5",
  /** Physical pin 6: VC10; input. */
  "VC10": "6",
  /** Physical pin 7: VC9; input. */
  "VC9": "7",
  /** Physical pin 8: VC8; input. */
  "VC8": "8",
  /** Physical pin 9: VC7; input. */
  "VC7": "9",
  /** Physical pin 10: VC6; input. */
  "VC6": "10",
  /** Physical pin 11: VC5; input. */
  "VC5": "11",
  /** Physical pin 12: VC4; input. */
  "VC4": "12",
  /** Physical pin 13: VC3; input. */
  "VC3": "13",
  /** Physical pin 14: VC2; input. */
  "VC2": "14",
  /** Physical pin 15: VC1; input. */
  "VC1": "15",
  /** Physical pin 16: VC0; input. */
  "VC0": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: SRP; input. */
  "SRP": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: SRN; input. */
  "SRN": "20",
  /** Physical pin 21: TS1; input. */
  "TS1": "21",
  /** Physical pin 22: TS2/WAKE; input. */
  "TS2/WAKE": "22",
  /** Physical pin 23: TS3; input. */
  "TS3": "23",
  /** Physical pin 24: REG18; power_out. */
  "REG18": "24",
  /** Physical pin 25: HDQ_IO/ALERT; bidirectional. */
  "HDQ_IO/ALERT": "25",
  /** Physical pin 26: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "26",
  /** Physical pin 27: SDA/SPI_MISO; bidirectional. */
  "SDA/SPI_MISO": "27",
  /** Physical pin 28: HDQ_IO/SPI_MOSI; bidirectional. */
  "HDQ_IO/SPI_MOSI": "28",
  /** Physical pin 29: CFETOFF/SPI_CS; bidirectional. */
  "CFETOFF/SPI_CS": "29",
  /** Physical pin 30: DFETOFF/BOTHOFF; bidirectional. */
  "DFETOFF/BOTHOFF": "30",
  /** Physical pin 31: DCHG; bidirectional. */
  "DCHG": "31",
  /** Physical pin 32: DDSG; bidirectional. */
  "DDSG": "32",
  /** Physical pin 33: RST_SHUT; input. */
  "RST_SHUT": "33",
  /** Physical pin 34: REG2; power_out. */
  "REG2": "34",
  /** Physical pin 35: REG1; power_out. */
  "REG1": "35",
  /** Physical pin 36: REGIN; input. */
  "REGIN": "36",
  /** Physical pin 37: BREG; output. */
  "BREG": "37",
  /** Physical pin 38: FUSE; bidirectional. */
  "FUSE": "38",
  /** Physical pin 39: PDSG; output. */
  "PDSG": "39",
  /** Physical pin 40: PCHG; output. */
  "PCHG": "40",
  /** Physical pin 41: LD; passive. */
  "LD": "41",
  /** Physical pin 42: PACK; input. */
  "PACK": "42",
  /** Physical pin 43: DSG; output. */
  "DSG": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: CHG; output. */
  "CHG": "45",
  /** Physical pin 46: CP1; power_out. */
  "CP1": "46",
  /** Physical pin 47: BAT; power_in. */
  "BAT": "47",
  /** Physical pin 48: VC16; input. */
  "VC16": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ7695203PFB extends Component.withPins({
  /** Physical pin 1: VC15; input. */
  "VC15": "1",
  /** Physical pin 2: VC14; input. */
  "VC14": "2",
  /** Physical pin 3: VC13; input. */
  "VC13": "3",
  /** Physical pin 4: VC12; input. */
  "VC12": "4",
  /** Physical pin 5: VC11; input. */
  "VC11": "5",
  /** Physical pin 6: VC10; input. */
  "VC10": "6",
  /** Physical pin 7: VC9; input. */
  "VC9": "7",
  /** Physical pin 8: VC8; input. */
  "VC8": "8",
  /** Physical pin 9: VC7; input. */
  "VC7": "9",
  /** Physical pin 10: VC6; input. */
  "VC6": "10",
  /** Physical pin 11: VC5; input. */
  "VC5": "11",
  /** Physical pin 12: VC4; input. */
  "VC4": "12",
  /** Physical pin 13: VC3; input. */
  "VC3": "13",
  /** Physical pin 14: VC2; input. */
  "VC2": "14",
  /** Physical pin 15: VC1; input. */
  "VC1": "15",
  /** Physical pin 16: VC0; input. */
  "VC0": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: SRP; input. */
  "SRP": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: SRN; input. */
  "SRN": "20",
  /** Physical pin 21: TS1; input. */
  "TS1": "21",
  /** Physical pin 22: TS2/WAKE; input. */
  "TS2/WAKE": "22",
  /** Physical pin 23: TS3; input. */
  "TS3": "23",
  /** Physical pin 24: REG18; power_out. */
  "REG18": "24",
  /** Physical pin 25: HDQ_IO/ALERT; bidirectional. */
  "HDQ_IO/ALERT": "25",
  /** Physical pin 26: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "26",
  /** Physical pin 27: SDA/SPI_MISO; bidirectional. */
  "SDA/SPI_MISO": "27",
  /** Physical pin 28: HDQ_IO/SPI_MOSI; bidirectional. */
  "HDQ_IO/SPI_MOSI": "28",
  /** Physical pin 29: CFETOFF/SPI_CS; bidirectional. */
  "CFETOFF/SPI_CS": "29",
  /** Physical pin 30: DFETOFF/BOTHOFF; bidirectional. */
  "DFETOFF/BOTHOFF": "30",
  /** Physical pin 31: DCHG; bidirectional. */
  "DCHG": "31",
  /** Physical pin 32: DDSG; bidirectional. */
  "DDSG": "32",
  /** Physical pin 33: RST_SHUT; input. */
  "RST_SHUT": "33",
  /** Physical pin 34: REG2; power_out. */
  "REG2": "34",
  /** Physical pin 35: REG1; power_out. */
  "REG1": "35",
  /** Physical pin 36: REGIN; input. */
  "REGIN": "36",
  /** Physical pin 37: BREG; output. */
  "BREG": "37",
  /** Physical pin 38: FUSE; bidirectional. */
  "FUSE": "38",
  /** Physical pin 39: PDSG; output. */
  "PDSG": "39",
  /** Physical pin 40: PCHG; output. */
  "PCHG": "40",
  /** Physical pin 41: LD; passive. */
  "LD": "41",
  /** Physical pin 42: PACK; input. */
  "PACK": "42",
  /** Physical pin 43: DSG; output. */
  "DSG": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: CHG; output. */
  "CHG": "45",
  /** Physical pin 46: CP1; power_out. */
  "CP1": "46",
  /** Physical pin 47: BAT; power_in. */
  "BAT": "47",
  /** Physical pin 48: VC16; input. */
  "VC16": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ7695204PFB extends Component.withPins({
  /** Physical pin 1: VC15; input. */
  "VC15": "1",
  /** Physical pin 2: VC14; input. */
  "VC14": "2",
  /** Physical pin 3: VC13; input. */
  "VC13": "3",
  /** Physical pin 4: VC12; input. */
  "VC12": "4",
  /** Physical pin 5: VC11; input. */
  "VC11": "5",
  /** Physical pin 6: VC10; input. */
  "VC10": "6",
  /** Physical pin 7: VC9; input. */
  "VC9": "7",
  /** Physical pin 8: VC8; input. */
  "VC8": "8",
  /** Physical pin 9: VC7; input. */
  "VC7": "9",
  /** Physical pin 10: VC6; input. */
  "VC6": "10",
  /** Physical pin 11: VC5; input. */
  "VC5": "11",
  /** Physical pin 12: VC4; input. */
  "VC4": "12",
  /** Physical pin 13: VC3; input. */
  "VC3": "13",
  /** Physical pin 14: VC2; input. */
  "VC2": "14",
  /** Physical pin 15: VC1; input. */
  "VC1": "15",
  /** Physical pin 16: VC0; input. */
  "VC0": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: SRP; input. */
  "SRP": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: SRN; input. */
  "SRN": "20",
  /** Physical pin 21: TS1; input. */
  "TS1": "21",
  /** Physical pin 22: TS2/WAKE; input. */
  "TS2/WAKE": "22",
  /** Physical pin 23: TS3; input. */
  "TS3": "23",
  /** Physical pin 24: REG18; power_out. */
  "REG18": "24",
  /** Physical pin 25: HDQ_IO/ALERT; bidirectional. */
  "HDQ_IO/ALERT": "25",
  /** Physical pin 26: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "26",
  /** Physical pin 27: SDA/SPI_MISO; bidirectional. */
  "SDA/SPI_MISO": "27",
  /** Physical pin 28: HDQ_IO/SPI_MOSI; bidirectional. */
  "HDQ_IO/SPI_MOSI": "28",
  /** Physical pin 29: CFETOFF/SPI_CS; bidirectional. */
  "CFETOFF/SPI_CS": "29",
  /** Physical pin 30: DFETOFF/BOTHOFF; bidirectional. */
  "DFETOFF/BOTHOFF": "30",
  /** Physical pin 31: DCHG; bidirectional. */
  "DCHG": "31",
  /** Physical pin 32: DDSG; bidirectional. */
  "DDSG": "32",
  /** Physical pin 33: RST_SHUT; input. */
  "RST_SHUT": "33",
  /** Physical pin 34: REG2; power_out. */
  "REG2": "34",
  /** Physical pin 35: REG1; power_out. */
  "REG1": "35",
  /** Physical pin 36: REGIN; input. */
  "REGIN": "36",
  /** Physical pin 37: BREG; output. */
  "BREG": "37",
  /** Physical pin 38: FUSE; bidirectional. */
  "FUSE": "38",
  /** Physical pin 39: PDSG; output. */
  "PDSG": "39",
  /** Physical pin 40: PCHG; output. */
  "PCHG": "40",
  /** Physical pin 41: LD; passive. */
  "LD": "41",
  /** Physical pin 42: PACK; input. */
  "PACK": "42",
  /** Physical pin 43: DSG; output. */
  "DSG": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: CHG; output. */
  "CHG": "45",
  /** Physical pin 46: CP1; power_out. */
  "CP1": "46",
  /** Physical pin 47: BAT; power_in. */
  "BAT": "47",
  /** Physical pin 48: VC16; input. */
  "VC16": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ78350DBT extends Component.withPins({
  /** Physical pin 1: COM; open_collector. */
  "COM": "1",
  /** Physical pin 2: ALERT; bidirectional. */
  "ALERT": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: SCL; output. */
  "SCL": "4",
  /** Physical pin 5: ~{PRECHG}; output. */
  "~{PRECHG}": "5",
  /** Physical pin 6: VAUX; input. */
  "VAUX": "6",
  /** Physical pin 7: BAT; input. */
  "BAT": "7",
  /** Physical pin 8: ~{PRES}; input. */
  "~{PRES}": "8",
  /** Physical pin 9: ~{KEYIN}; input. */
  "~{KEYIN}": "9",
  /** Physical pin 10: SAFE; output. */
  "SAFE": "10",
  /** Physical pin 11: SMBD; bidirectional. */
  "SMBD": "11",
  /** Physical pin 12: VEN; open_collector. */
  "VEN": "12",
  /** Physical pin 13: SMBC; bidirectional. */
  "SMBC": "13",
  /** Physical pin 14: ~{DISP}; input. */
  "~{DISP}": "14",
  /** Physical pin 15: PWRM; open_collector. */
  "PWRM": "15",
  /** Physical pin 16: LED1; output. */
  "LED1": "16",
  /** Physical pin 17: LED2; output. */
  "LED2": "17",
  /** Physical pin 18: LED3; output. */
  "LED3": "18",
  /** Physical pin 19: LED4; output. */
  "LED4": "19",
  /** Physical pin 20: LED5; output. */
  "LED5": "20",
  /** Physical pin 21: GPIO_A; bidirectional. */
  "GPIO_A": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VSS; power_in. */
  "VSS_23": "23",
  /** Physical pin 24: ~{MRST}; input. */
  "~{MRST}": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: RBI; passive. */
  "RBI": "27",
  /** Physical pin 28: GPIO_B; bidirectional. */
  "GPIO_B": "28",
  /** Physical pin 29: ADREN; output. */
  "ADREN": "29",
  /** Physical pin 30: SMBA; input. */
  "SMBA": "30",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ78350DBT_R1 extends Component.withPins({
  /** Physical pin 1: COM; open_collector. */
  "COM": "1",
  /** Physical pin 2: ALERT; bidirectional. */
  "ALERT": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: SCL; output. */
  "SCL": "4",
  /** Physical pin 5: ~{PRECHG}; output. */
  "~{PRECHG}": "5",
  /** Physical pin 6: VAUX; input. */
  "VAUX": "6",
  /** Physical pin 7: BAT; input. */
  "BAT": "7",
  /** Physical pin 8: ~{PRES}; input. */
  "~{PRES}": "8",
  /** Physical pin 9: ~{KEYIN}; input. */
  "~{KEYIN}": "9",
  /** Physical pin 10: SAFE; output. */
  "SAFE": "10",
  /** Physical pin 11: SMBD; bidirectional. */
  "SMBD": "11",
  /** Physical pin 12: VEN; open_collector. */
  "VEN": "12",
  /** Physical pin 13: SMBC; bidirectional. */
  "SMBC": "13",
  /** Physical pin 14: ~{DISP}; input. */
  "~{DISP}": "14",
  /** Physical pin 15: PWRM; open_collector. */
  "PWRM": "15",
  /** Physical pin 16: LED1; output. */
  "LED1": "16",
  /** Physical pin 17: LED2; output. */
  "LED2": "17",
  /** Physical pin 18: LED3; output. */
  "LED3": "18",
  /** Physical pin 19: LED4; output. */
  "LED4": "19",
  /** Physical pin 20: LED5; output. */
  "LED5": "20",
  /** Physical pin 21: GPIO_A; bidirectional. */
  "GPIO_A": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VSS; power_in. */
  "VSS_23": "23",
  /** Physical pin 24: ~{MRST}; input. */
  "~{MRST}": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: RBI; passive. */
  "RBI": "27",
  /** Physical pin 28: GPIO_B; bidirectional. */
  "GPIO_B": "28",
  /** Physical pin 29: ADREN; output. */
  "ADREN": "29",
  /** Physical pin 30: SMBA; input. */
  "SMBA": "30",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CN3163 extends Component.withPins({
  /** Physical pin 1: TEMP; input. */
  "TEMP": "1",
  /** Physical pin 2: ISET; input. */
  "ISET": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: BAT; power_out. */
  "BAT": "5",
  /** Physical pin 6: ~{DONE}; open_collector. */
  "~{DONE}": "6",
  /** Physical pin 7: ~{CHRG}; open_collector. */
  "~{CHRG}": "7",
  /** Physical pin 8: FB; input. */
  "FB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CN3063 extends Component.withPins({
  /** Physical pin 1: TEMP; input. */
  "TEMP": "1",
  /** Physical pin 2: ISET; input. */
  "ISET": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: BAT; power_out. */
  "BAT": "5",
  /** Physical pin 6: ~{DONE}; open_collector. */
  "~{DONE}": "6",
  /** Physical pin 7: ~{CHRG}; open_collector. */
  "~{CHRG}": "7",
  /** Physical pin 8: FB; input. */
  "FB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CN3158 extends Component.withPins({
  /** Physical pin 1: TEMP; input. */
  "TEMP": "1",
  /** Physical pin 2: ISET; input. */
  "ISET": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: BAT; power_out. */
  "BAT": "5",
  /** Physical pin 6: ~{DONE}; open_collector. */
  "~{DONE}": "6",
  /** Physical pin 7: ~{CHRG}; open_collector. */
  "~{CHRG}": "7",
  /** Physical pin 8: FB; input. */
  "FB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CN3170 extends Component.withPins({
  /** Physical pin 1: TEMP; input. */
  "TEMP": "1",
  /** Physical pin 2: ISET; input. */
  "ISET": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: BAT; power_out. */
  "BAT": "5",
  /** Physical pin 6: ~{DONE}; open_collector. */
  "~{DONE}": "6",
  /** Physical pin 7: ~{CHRG}; open_collector. */
  "~{CHRG}": "7",
  /** Physical pin 8: FB; input. */
  "FB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS2745U extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: PIO; open_collector. */
  "PIO": "3",
  /** Physical pin 4: SNS; input. */
  "SNS": "4",
  /** Physical pin 5: V_{SS}; power_in. */
  "V_{SS}": "5",
  /** Physical pin 6: CTG; input. */
  "CTG": "6",
  /** Physical pin 7: VIN; input. */
  "VIN": "7",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DW01A extends Component.withPins({
  /** Physical pin 1: OD; output. */
  "OD": "1",
  /** Physical pin 2: CS; input. */
  "CS": "2",
  /** Physical pin 3: OC; output. */
  "OC": "3",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 4: TD; no_connect. */
  "TD": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LC709203FQH_01TWG extends Component.withPins({
  /** Physical pin 1: TEST; input. */
  "TEST": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: ~{ALARMB}; open_collector. */
  "~{ALARMB}": "4",
  /** Physical pin 5: T_{SW}; output. */
  "T_{SW}": "5",
  /** Physical pin 6: T_{SENSE}; input. */
  "T_{SENSE}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LC709203FQH_02TWG extends Component.withPins({
  /** Physical pin 1: TEST; input. */
  "TEST": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: ~{ALARMB}; open_collector. */
  "~{ALARMB}": "4",
  /** Physical pin 5: T_{SW}; output. */
  "T_{SW}": "5",
  /** Physical pin 6: T_{SENSE}; input. */
  "T_{SENSE}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LC709203FQH_03TWG extends Component.withPins({
  /** Physical pin 1: TEST; input. */
  "TEST": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: ~{ALARMB}; open_collector. */
  "~{ALARMB}": "4",
  /** Physical pin 5: T_{SW}; output. */
  "T_{SW}": "5",
  /** Physical pin 6: T_{SENSE}; input. */
  "T_{SENSE}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LC709203FQH_04TWG extends Component.withPins({
  /** Physical pin 1: TEST; input. */
  "TEST": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: ~{ALARMB}; open_collector. */
  "~{ALARMB}": "4",
  /** Physical pin 5: T_{SW}; output. */
  "T_{SW}": "5",
  /** Physical pin 6: T_{SENSE}; input. */
  "T_{SENSE}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LGS5500EP extends Component.withPins({
  /** Physical pin 1: ISET; passive. */
  "ISET": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: VL; input. */
  "VL": "3",
  /** Physical pin 4: LX; input. */
  "LX": "4",
  /** Physical pin 5: VH; power_out. */
  "VH": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: VSET/LED; output. */
  "VSET/LED": "7",
  /** Physical pin 8: NTC; input. */
  "NTC": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LP3947 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: BATT; power_out. */
  "BATT": "4",
  /** Physical pin 5: V_{T}; power_out. */
  "V_{T}": "5",
  /** Physical pin 6: VB_{SENSE}; input. */
  "VB_{SENSE}": "6",
  /** Physical pin 7: MODE; input. */
  "MODE": "7",
  /** Physical pin 8: DIFF_AMP; output. */
  "DIFF_AMP": "8",
  /** Physical pin 9: Ts; input. */
  "Ts": "9",
  /** Physical pin 10: EOC; open_collector. */
  "EOC": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: CHG; open_collector. */
  "CHG": "12",
  /** Physical pin 13: ISEL; input. */
  "ISEL": "13",
  /** Physical pin 14: CHG_IN; power_in. */
  "CHG_IN": "14",
  /** Physical pin 15: EP; power_in. */
  "EP": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3652EDD extends Component.withPins({
  /** Physical pin 1: V_{IN}; power_in. */
  "V_{IN}": "1",
  /** Physical pin 2: V_{IN_REG}; input. */
  "V_{IN_REG}": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: ~{CHRG}; open_collector. */
  "~{CHRG}": "4",
  /** Physical pin 5: ~{FAULT}; open_collector. */
  "~{FAULT}": "5",
  /** Physical pin 6: TIMER; output. */
  "TIMER": "6",
  /** Physical pin 7: V_{FB}; input. */
  "V_{FB}": "7",
  /** Physical pin 8: NTC; input. */
  "NTC": "8",
  /** Physical pin 9: BAT; output. */
  "BAT": "9",
  /** Physical pin 10: SENSE; input. */
  "SENSE": "10",
  /** Physical pin 11: BOOST; input. */
  "BOOST": "11",
  /** Physical pin 12: SW; output. */
  "SW": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3652EMSE extends Component.withPins({
  /** Physical pin 1: V_{IN}; power_in. */
  "V_{IN}": "1",
  /** Physical pin 2: V_{IN_REG}; input. */
  "V_{IN_REG}": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: ~{CHRG}; open_collector. */
  "~{CHRG}": "4",
  /** Physical pin 5: ~{FAULT}; open_collector. */
  "~{FAULT}": "5",
  /** Physical pin 6: TIMER; output. */
  "TIMER": "6",
  /** Physical pin 7: V_{FB}; input. */
  "V_{FB}": "7",
  /** Physical pin 8: NTC; input. */
  "NTC": "8",
  /** Physical pin 9: BAT; output. */
  "BAT": "9",
  /** Physical pin 10: SENSE; input. */
  "SENSE": "10",
  /** Physical pin 11: BOOST; input. */
  "BOOST": "11",
  /** Physical pin 12: SW; output. */
  "SW": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3652IDD extends Component.withPins({
  /** Physical pin 1: V_{IN}; power_in. */
  "V_{IN}": "1",
  /** Physical pin 2: V_{IN_REG}; input. */
  "V_{IN_REG}": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: ~{CHRG}; open_collector. */
  "~{CHRG}": "4",
  /** Physical pin 5: ~{FAULT}; open_collector. */
  "~{FAULT}": "5",
  /** Physical pin 6: TIMER; output. */
  "TIMER": "6",
  /** Physical pin 7: V_{FB}; input. */
  "V_{FB}": "7",
  /** Physical pin 8: NTC; input. */
  "NTC": "8",
  /** Physical pin 9: BAT; output. */
  "BAT": "9",
  /** Physical pin 10: SENSE; input. */
  "SENSE": "10",
  /** Physical pin 11: BOOST; input. */
  "BOOST": "11",
  /** Physical pin 12: SW; output. */
  "SW": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3652IMSE extends Component.withPins({
  /** Physical pin 1: V_{IN}; power_in. */
  "V_{IN}": "1",
  /** Physical pin 2: V_{IN_REG}; input. */
  "V_{IN_REG}": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: ~{CHRG}; open_collector. */
  "~{CHRG}": "4",
  /** Physical pin 5: ~{FAULT}; open_collector. */
  "~{FAULT}": "5",
  /** Physical pin 6: TIMER; output. */
  "TIMER": "6",
  /** Physical pin 7: V_{FB}; input. */
  "V_{FB}": "7",
  /** Physical pin 8: NTC; input. */
  "NTC": "8",
  /** Physical pin 9: BAT; output. */
  "BAT": "9",
  /** Physical pin 10: SENSE; input. */
  "SENSE": "10",
  /** Physical pin 11: BOOST; input. */
  "BOOST": "11",
  /** Physical pin 12: SW; output. */
  "SW": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2942 extends Component.withPins({
  /** Physical pin 1: SENSE+; passive. */
  "SENSE+": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: ~{AL}/CC; bidirectional. */
  "~{AL}/CC": "5",
  /** Physical pin 6: SENSE-; passive. */
  "SENSE-": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2942_1 extends Component.withPins({
  /** Physical pin 1: SENSE+; passive. */
  "SENSE+": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: ~{AL}/CC; bidirectional. */
  "~{AL}/CC": "5",
  /** Physical pin 6: SENSE-; passive. */
  "SENSE-": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2959 extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: SENSEP; passive. */
  "SENSEP": "2",
  /** Physical pin 3: CFP; passive. */
  "CFP": "3",
  /** Physical pin 4: CFN; passive. */
  "CFN": "4",
  /** Physical pin 5: SENSEN; passive. */
  "SENSEN": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GPIO; bidirectional. */
  "GPIO": "8",
  /** Physical pin 9: V_{REG}; power_out. */
  "V_{REG}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: EP; no_connect. */
  "EP": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3553 extends Component.withPins({
  /** Physical pin 1: HPWR; input. */
  "HPWR": "1",
  /** Physical pin 2: SEQ; input. */
  "SEQ": "2",
  /** Physical pin 3: PBSTAT; output. */
  "PBSTAT": "3",
  /** Physical pin 4: ~{ON}; input. */
  "~{ON}": "4",
  /** Physical pin 5: LDO_ON; input. */
  "LDO_ON": "5",
  /** Physical pin 6: STBY; input. */
  "STBY": "6",
  /** Physical pin 7: BUCK_ON; input. */
  "BUCK_ON": "7",
  /** Physical pin 8: BUCK_FB; input. */
  "BUCK_FB": "8",
  /** Physical pin 9: LDO_FB; input. */
  "LDO_FB": "9",
  /** Physical pin 10: LDO; power_out. */
  "LDO": "10",
  /** Physical pin 11: VINLDO; power_in. */
  "VINLDO": "11",
  /** Physical pin 12: BVIN; power_in. */
  "BVIN": "12",
  /** Physical pin 13: SW; power_out. */
  "SW": "13",
  /** Physical pin 14: ~{CHRG}; open_collector. */
  "~{CHRG}": "14",
  /** Physical pin 15: NTC; passive. */
  "NTC": "15",
  /** Physical pin 16: PROG; passive. */
  "PROG": "16",
  /** Physical pin 17: BAT; power_out. */
  "BAT": "17",
  /** Physical pin 18: VOUT; power_out. */
  "VOUT": "18",
  /** Physical pin 19: SUSP; input. */
  "SUSP": "19",
  /** Physical pin 20: VBUS; power_in. */
  "VBUS": "20",
  /** Physical pin 21: GND; power_in. */
  "GND": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3555 extends Component.withPins({
  /** Physical pin 1: LDO3V3; power_out. */
  "LDO3V3": "1",
  /** Physical pin 2: CLPROG; passive. */
  "CLPROG": "2",
  /** Physical pin 3: NTC; passive. */
  "NTC": "3",
  /** Physical pin 4: FB2; input. */
  "FB2": "4",
  /** Physical pin 5: V_{IN2}; power_in. */
  "V_{IN2}": "5",
  /** Physical pin 6: SW2; power_out. */
  "SW2": "6",
  /** Physical pin 7: EN2; input. */
  "EN2": "7",
  /** Physical pin 8: DV_{CC}; power_in. */
  "DV_{CC}": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 11: V_{IN3}; power_in. */
  "V_{IN3}": "11",
  /** Physical pin 12: SW3; power_out. */
  "SW3": "12",
  /** Physical pin 13: EN3; input. */
  "EN3": "13",
  /** Physical pin 14: FB3; input. */
  "FB3": "14",
  /** Physical pin 15: ~{RST3}; open_collector. */
  "~{RST3}": "15",
  /** Physical pin 16: EN1; input. */
  "EN1": "16",
  /** Physical pin 17: SW1; power_out. */
  "SW1": "17",
  /** Physical pin 18: V_{IN1}; power_in. */
  "V_{IN1}": "18",
  /** Physical pin 19: FB1; input. */
  "FB1": "19",
  /** Physical pin 20: PROG; passive. */
  "PROG": "20",
  /** Physical pin 21: ~{CHRG}; open_collector. */
  "~{CHRG}": "21",
  /** Physical pin 22: GATE; output. */
  "GATE": "22",
  /** Physical pin 23: BAT; power_out. */
  "BAT": "23",
  /** Physical pin 24: V_{OUT}; power_out. */
  "V_{OUT}": "24",
  /** Physical pin 25: VBUS; power_in. */
  "VBUS": "25",
  /** Physical pin 26: SW; power_out. */
  "SW": "26",
  /** Physical pin 27: I_{LIM0}; input. */
  "I_{LIM0}": "27",
  /** Physical pin 28: I_{LIM1}; input. */
  "I_{LIM1}": "28",
  /** Physical pin 29: GND; power_in. */
  "GND": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3555_1 extends Component.withPins({
  /** Physical pin 1: LDO3V3; power_out. */
  "LDO3V3": "1",
  /** Physical pin 2: CLPROG; passive. */
  "CLPROG": "2",
  /** Physical pin 3: NTC; passive. */
  "NTC": "3",
  /** Physical pin 4: FB2; input. */
  "FB2": "4",
  /** Physical pin 5: V_{IN2}; power_in. */
  "V_{IN2}": "5",
  /** Physical pin 6: SW2; power_out. */
  "SW2": "6",
  /** Physical pin 7: EN2; input. */
  "EN2": "7",
  /** Physical pin 8: DV_{CC}; power_in. */
  "DV_{CC}": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 11: V_{IN3}; power_in. */
  "V_{IN3}": "11",
  /** Physical pin 12: SW3; power_out. */
  "SW3": "12",
  /** Physical pin 13: EN3; input. */
  "EN3": "13",
  /** Physical pin 14: FB3; input. */
  "FB3": "14",
  /** Physical pin 15: ~{RST3}; open_collector. */
  "~{RST3}": "15",
  /** Physical pin 16: EN1; input. */
  "EN1": "16",
  /** Physical pin 17: SW1; power_out. */
  "SW1": "17",
  /** Physical pin 18: V_{IN1}; power_in. */
  "V_{IN1}": "18",
  /** Physical pin 19: FB1; input. */
  "FB1": "19",
  /** Physical pin 20: PROG; passive. */
  "PROG": "20",
  /** Physical pin 21: ~{CHRG}; open_collector. */
  "~{CHRG}": "21",
  /** Physical pin 22: GATE; output. */
  "GATE": "22",
  /** Physical pin 23: BAT; power_out. */
  "BAT": "23",
  /** Physical pin 24: V_{OUT}; power_out. */
  "V_{OUT}": "24",
  /** Physical pin 25: VBUS; power_in. */
  "VBUS": "25",
  /** Physical pin 26: SW; power_out. */
  "SW": "26",
  /** Physical pin 27: I_{LIM0}; input. */
  "I_{LIM0}": "27",
  /** Physical pin 28: I_{LIM1}; input. */
  "I_{LIM1}": "28",
  /** Physical pin 29: GND; power_in. */
  "GND": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3555_3 extends Component.withPins({
  /** Physical pin 1: LDO3V3; power_out. */
  "LDO3V3": "1",
  /** Physical pin 2: CLPROG; passive. */
  "CLPROG": "2",
  /** Physical pin 3: NTC; passive. */
  "NTC": "3",
  /** Physical pin 4: FB2; input. */
  "FB2": "4",
  /** Physical pin 5: V_{IN2}; power_in. */
  "V_{IN2}": "5",
  /** Physical pin 6: SW2; power_out. */
  "SW2": "6",
  /** Physical pin 7: EN2; input. */
  "EN2": "7",
  /** Physical pin 8: DV_{CC}; power_in. */
  "DV_{CC}": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 11: V_{IN3}; power_in. */
  "V_{IN3}": "11",
  /** Physical pin 12: SW3; power_out. */
  "SW3": "12",
  /** Physical pin 13: EN3; input. */
  "EN3": "13",
  /** Physical pin 14: FB3; input. */
  "FB3": "14",
  /** Physical pin 15: ~{RST3}; open_collector. */
  "~{RST3}": "15",
  /** Physical pin 16: EN1; input. */
  "EN1": "16",
  /** Physical pin 17: SW1; power_out. */
  "SW1": "17",
  /** Physical pin 18: V_{IN1}; power_in. */
  "V_{IN1}": "18",
  /** Physical pin 19: FB1; input. */
  "FB1": "19",
  /** Physical pin 20: PROG; passive. */
  "PROG": "20",
  /** Physical pin 21: ~{CHRG}; open_collector. */
  "~{CHRG}": "21",
  /** Physical pin 22: GATE; output. */
  "GATE": "22",
  /** Physical pin 23: BAT; power_out. */
  "BAT": "23",
  /** Physical pin 24: V_{OUT}; power_out. */
  "V_{OUT}": "24",
  /** Physical pin 25: VBUS; power_in. */
  "VBUS": "25",
  /** Physical pin 26: SW; power_out. */
  "SW": "26",
  /** Physical pin 27: I_{LIM0}; input. */
  "I_{LIM0}": "27",
  /** Physical pin 28: I_{LIM1}; input. */
  "I_{LIM1}": "28",
  /** Physical pin 29: GND; power_in. */
  "GND": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4001 extends Component.withPins({
  /** Physical pin 1: BAT; output. */
  "BAT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: PGND; power_in. */
  "PGND": "3",
  /** Physical pin 4: GNDSENS; power_in. */
  "GNDSENS": "4",
  /** Physical pin 5: SW; output. */
  "SW": "5",
  /** Physical pin 6: ~{EN}; input. */
  "~{EN}": "6",
  /** Physical pin 7: ~{CHRG}; open_collector. */
  "~{CHRG}": "7",
  /** Physical pin 8: P_{VIN}; power_in. */
  "P_{VIN}": "8",
  /** Physical pin 9: V_{INSENSE}; power_in. */
  "V_{INSENSE}": "9",
  /** Physical pin 10: FAULT; output. */
  "FAULT": "10",
  /** Physical pin 11: NTC; input. */
  "NTC": "11",
  /** Physical pin 12: PROG; input. */
  "PROG": "12",
  /** Physical pin 13: IDET; input. */
  "IDET": "13",
  /** Physical pin 14: SS; input. */
  "SS": "14",
  /** Physical pin 15: TIMER; input. */
  "TIMER": "15",
  /** Physical pin 16: BATSENS; input. */
  "BATSENS": "16",
  /** Physical pin 17: PAD; power_in. */
  "PAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4001_1 extends Component.withPins({
  /** Physical pin 1: BAT; output. */
  "BAT": "1",
  /** Physical pin 2: SENSE; input. */
  "SENSE": "2",
  /** Physical pin 3: PGND; power_in. */
  "PGND": "3",
  /** Physical pin 4: GNDSENS; power_in. */
  "GNDSENS": "4",
  /** Physical pin 5: SW; output. */
  "SW": "5",
  /** Physical pin 6: ~{EN}; input. */
  "~{EN}": "6",
  /** Physical pin 7: ~{CHRG}; open_collector. */
  "~{CHRG}": "7",
  /** Physical pin 8: P_{VIN}; power_in. */
  "P_{VIN}": "8",
  /** Physical pin 9: V_{INSENSE}; power_in. */
  "V_{INSENSE}": "9",
  /** Physical pin 10: FAULT; output. */
  "FAULT": "10",
  /** Physical pin 11: NTC; input. */
  "NTC": "11",
  /** Physical pin 12: PROG; input. */
  "PROG": "12",
  /** Physical pin 13: IDET; input. */
  "IDET": "13",
  /** Physical pin 14: SS; input. */
  "SS": "14",
  /** Physical pin 15: TIMER; input. */
  "TIMER": "15",
  /** Physical pin 16: BATSENS; input. */
  "BATSENS": "16",
  /** Physical pin 17: PAD; power_in. */
  "PAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4002EDD_4_2 extends Component.withPins({
  /** Physical pin 1: COMP; input. */
  "COMP": "1",
  /** Physical pin 2: V_{CC}; power_in. */
  "V_{CC}": "2",
  /** Physical pin 3: GATE; output. */
  "GATE": "3",
  /** Physical pin 4: PGND; power_in. */
  "PGND": "4",
  /** Physical pin 5: SGND; power_in. */
  "SGND": "5",
  /** Physical pin 6: ~{CHRG}; open_collector. */
  "~{CHRG}": "6",
  /** Physical pin 7: BAT; input. */
  "BAT": "7",
  /** Physical pin 8: SENSE; input. */
  "SENSE": "8",
  /** Physical pin 9: NTC; input. */
  "NTC": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4002EDD_8_4 extends Component.withPins({
  /** Physical pin 1: COMP; input. */
  "COMP": "1",
  /** Physical pin 2: V_{CC}; power_in. */
  "V_{CC}": "2",
  /** Physical pin 3: GATE; output. */
  "GATE": "3",
  /** Physical pin 4: PGND; power_in. */
  "PGND": "4",
  /** Physical pin 5: SGND; power_in. */
  "SGND": "5",
  /** Physical pin 6: ~{CHRG}; open_collector. */
  "~{CHRG}": "6",
  /** Physical pin 7: BAT; input. */
  "BAT": "7",
  /** Physical pin 8: SENSE; input. */
  "SENSE": "8",
  /** Physical pin 9: NTC; input. */
  "NTC": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4002ES8_4_2 extends Component.withPins({
  /** Physical pin 1: COMP; input. */
  "COMP": "1",
  /** Physical pin 2: V_{CC}; power_in. */
  "V_{CC}": "2",
  /** Physical pin 3: GATE; output. */
  "GATE": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{CHRG}; open_collector. */
  "~{CHRG}": "5",
  /** Physical pin 6: BAT; input. */
  "BAT": "6",
  /** Physical pin 7: SENSE; input. */
  "SENSE": "7",
  /** Physical pin 8: NTC; input. */
  "NTC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4002ES8_8_4 extends Component.withPins({
  /** Physical pin 1: COMP; input. */
  "COMP": "1",
  /** Physical pin 2: V_{CC}; power_in. */
  "V_{CC}": "2",
  /** Physical pin 3: GATE; output. */
  "GATE": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{CHRG}; open_collector. */
  "~{CHRG}": "5",
  /** Physical pin 6: BAT; input. */
  "BAT": "6",
  /** Physical pin 7: SENSE; input. */
  "SENSE": "7",
  /** Physical pin 8: NTC; input. */
  "NTC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4007 extends Component.withPins({
  /** Physical pin 1: DCIN; input. */
  "DCIN": "1",
  /** Physical pin 2: ~{CHG}; output. */
  "~{CHG}": "2",
  /** Physical pin 3: ACP; open_collector. */
  "ACP": "3",
  /** Physical pin 4: R_{T}; passive. */
  "R_{T}": "4",
  /** Physical pin 5: ~{FAULT}; open_collector. */
  "~{FAULT}": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: 3C4C; input. */
  "3C4C": "7",
  /** Physical pin 8: ~{LOBAT}; output. */
  "~{LOBAT}": "8",
  /** Physical pin 9: NTC; input. */
  "NTC": "9",
  /** Physical pin 10: ITH; passive. */
  "ITH": "10",
  /** Physical pin 11: PROG; bidirectional. */
  "PROG": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC": "12",
  /** Physical pin 13: ~{ICL}; output. */
  "~{ICL}": "13",
  /** Physical pin 14: CSP; input. */
  "CSP": "14",
  /** Physical pin 15: BAT; input. */
  "BAT": "15",
  /** Physical pin 16: CHEM; input. */
  "CHEM": "16",
  /** Physical pin 17: ~{FLAG}; open_collector. */
  "~{FLAG}": "17",
  /** Physical pin 18: CLP; input. */
  "CLP": "18",
  /** Physical pin 19: CLN; input. */
  "CLN": "19",
  /** Physical pin 20: TGATE; output. */
  "TGATE": "20",
  /** Physical pin 21: PGND; power_in. */
  "PGND": "21",
  /** Physical pin 22: BGATE; output. */
  "BGATE": "22",
  /** Physical pin 23: INFET; output. */
  "INFET": "23",
  /** Physical pin 24: SHDN; input. */
  "SHDN": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4011CFE extends Component.withPins({
  /** Physical pin 1: DCIN; input. */
  "DCIN": "1",
  /** Physical pin 2: ~{FAULT}; open_collector. */
  "~{FAULT}": "2",
  /** Physical pin 3: ~{CHRG}; open_collector. */
  "~{CHRG}": "3",
  /** Physical pin 4: CHEM; passive. */
  "CHEM": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: V_{RT}; output. */
  "V_{RT}": "6",
  /** Physical pin 7: V_{TEMP}; input. */
  "V_{TEMP}": "7",
  /** Physical pin 8: V_{CELL}; input. */
  "V_{CELL}": "8",
  /** Physical pin 9: V_{CDIV}; output. */
  "V_{CDIV}": "9",
  /** Physical pin 10: TIMER; passive. */
  "TIMER": "10",
  /** Physical pin 11: SENSE; input. */
  "SENSE": "11",
  /** Physical pin 12: BAT; power_out. */
  "BAT": "12",
  /** Physical pin 13: ~{TOC}; open_collector. */
  "~{TOC}": "13",
  /** Physical pin 14: INTVDD; power_out. */
  "INTVDD": "14",
  /** Physical pin 15: BGATE; output. */
  "BGATE": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: TGATE; output. */
  "TGATE": "17",
  /** Physical pin 18: V_{CC}; power_in. */
  "V_{CC}": "18",
  /** Physical pin 19: ~{READY}; open_collector. */
  "~{READY}": "19",
  /** Physical pin 20: INFET; output. */
  "INFET": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4054ES5_4_2 extends Component.withPins({
  /** Physical pin 1: ~{CHRG}; open_collector. */
  "~{CHRG}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: BAT; power_out. */
  "BAT": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: PROG; bidirectional. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4054XES5_4_2 extends Component.withPins({
  /** Physical pin 1: ~{CHRG}; open_collector. */
  "~{CHRG}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: BAT; power_out. */
  "BAT": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: PROG; bidirectional. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4055 extends Component.withPins({
  /** Physical pin 1: IN; passive. */
  "IN_1": "1",
  /** Physical pin 2: BAT; passive. */
  "BAT": "2",
  /** Physical pin 3: OUT; passive. */
  "OUT": "3",
  /** Physical pin 4: IN; power_in. */
  "IN_4": "4",
  /** Physical pin 5: WALL; input. */
  "WALL": "5",
  /** Physical pin 6: SHDN; input. */
  "SHDN": "6",
  /** Physical pin 7: SUSP; input. */
  "SUSP": "7",
  /** Physical pin 8: HPWR; input. */
  "HPWR": "8",
  /** Physical pin 9: CLPROG; passive. */
  "CLPROG": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: PROG; passive. */
  "PROG": "11",
  /** Physical pin 12: TIMER; passive. */
  "TIMER": "12",
  /** Physical pin 13: ~{ACPR}; open_collector. */
  "~{ACPR}": "13",
  /** Physical pin 14: ~{CHRG}; open_collector. */
  "~{CHRG}": "14",
  /** Physical pin 15: VNTC; output. */
  "VNTC": "15",
  /** Physical pin 16: NTC; input. */
  "NTC": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4055_1 extends Component.withPins({
  /** Physical pin 1: IN; passive. */
  "IN_1": "1",
  /** Physical pin 2: BAT; passive. */
  "BAT": "2",
  /** Physical pin 3: OUT; passive. */
  "OUT": "3",
  /** Physical pin 4: IN; power_in. */
  "IN_4": "4",
  /** Physical pin 5: WALL; input. */
  "WALL": "5",
  /** Physical pin 6: SHDN; input. */
  "SHDN": "6",
  /** Physical pin 7: SUSP; input. */
  "SUSP": "7",
  /** Physical pin 8: HPWR; input. */
  "HPWR": "8",
  /** Physical pin 9: CLPROG; passive. */
  "CLPROG": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: PROG; passive. */
  "PROG": "11",
  /** Physical pin 12: TIMER; passive. */
  "TIMER": "12",
  /** Physical pin 13: ~{ACPR}; open_collector. */
  "~{ACPR}": "13",
  /** Physical pin 14: ~{CHRG}; open_collector. */
  "~{CHRG}": "14",
  /** Physical pin 15: VNTC; output. */
  "VNTC": "15",
  /** Physical pin 16: NTC; input. */
  "NTC": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4060EDHC extends Component.withPins({
  /** Physical pin 1: DRIVE; output. */
  "DRIVE": "1",
  /** Physical pin 2: BAT; input. */
  "BAT": "2",
  /** Physical pin 3: SENSE; input. */
  "SENSE": "3",
  /** Physical pin 4: TIMER; input. */
  "TIMER": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: PAUSE; input. */
  "PAUSE": "6",
  /** Physical pin 7: PROG; input. */
  "PROG": "7",
  /** Physical pin 8: ARCT; input. */
  "ARCT": "8",
  /** Physical pin 9: SEL0; input. */
  "SEL0": "9",
  /** Physical pin 10: SEL1; input. */
  "SEL1": "10",
  /** Physical pin 11: NTC; input. */
  "NTC": "11",
  /** Physical pin 12: CHEM; input. */
  "CHEM": "12",
  /** Physical pin 13: ~{ACP}; open_collector. */
  "~{ACP}": "13",
  /** Physical pin 14: V_{CC}; power_in. */
  "V_{CC}": "14",
  /** Physical pin 15: ~{CHRG}; open_collector. */
  "~{CHRG}": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: GNDPAD; power_in. */
  "GNDPAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4060EFE extends Component.withPins({
  /** Physical pin 1: DRIVE; output. */
  "DRIVE": "1",
  /** Physical pin 2: BAT; input. */
  "BAT": "2",
  /** Physical pin 3: SENSE; input. */
  "SENSE": "3",
  /** Physical pin 4: TIMER; input. */
  "TIMER": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: PAUSE; input. */
  "PAUSE": "6",
  /** Physical pin 7: PROG; input. */
  "PROG": "7",
  /** Physical pin 8: ARCT; input. */
  "ARCT": "8",
  /** Physical pin 9: SEL0; input. */
  "SEL0": "9",
  /** Physical pin 10: SEL1; input. */
  "SEL1": "10",
  /** Physical pin 11: NTC; input. */
  "NTC": "11",
  /** Physical pin 12: CHEM; input. */
  "CHEM": "12",
  /** Physical pin 13: ~{ACP}; open_collector. */
  "~{ACP}": "13",
  /** Physical pin 14: V_{CC}; power_in. */
  "V_{CC}": "14",
  /** Physical pin 15: ~{CHRG}; open_collector. */
  "~{CHRG}": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: GNDPAD; power_in. */
  "GNDPAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4067EDE extends Component.withPins({
  /** Physical pin 1: CLPROG; input. */
  "CLPROG": "1",
  /** Physical pin 2: ~{CHRG}; open_collector. */
  "~{CHRG}": "2",
  /** Physical pin 3: NTC; input. */
  "NTC": "3",
  /** Physical pin 4: ILIM0; input. */
  "ILIM0": "4",
  /** Physical pin 5: ILIM1; input. */
  "ILIM1": "5",
  /** Physical pin 6: OVI; input. */
  "OVI": "6",
  /** Physical pin 7: OVP; output. */
  "OVP": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
  /** Physical pin 9: GATE; output. */
  "GATE": "9",
  /** Physical pin 10: BAT; input. */
  "BAT": "10",
  /** Physical pin 11: OUT; power_out. */
  "OUT": "11",
  /** Physical pin 12: IN; power_in. */
  "IN": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4156 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: DVCC; power_in. */
  "DVCC": "2",
  /** Physical pin 3: ~{IRQ}; open_collector. */
  "~{IRQ}": "3",
  /** Physical pin 4: ID; input. */
  "ID": "4",
  /** Physical pin 5: CLPROG1; passive. */
  "CLPROG1": "5",
  /** Physical pin 6: CLPROG2; passive. */
  "CLPROG2": "6",
  /** Physical pin 7: WALLSNS; input. */
  "WALLSNS": "7",
  /** Physical pin 8: USBSNS; input. */
  "USBSNS": "8",
  /** Physical pin 9: USBGT; output. */
  "USBGT": "9",
  /** Physical pin 10: OVGCAP; passive. */
  "OVGCAP": "10",
  /** Physical pin 11: WALLGT; output. */
  "WALLGT": "11",
  /** Physical pin 12: V_{C}; passive. */
  "V_{C}": "12",
  /** Physical pin 13: V_{OUTSNS}; input. */
  "V_{OUTSNS}": "13",
  /** Physical pin 14: NTCBIAS; output. */
  "NTCBIAS": "14",
  /** Physical pin 15: NTC; input. */
  "NTC": "15",
  /** Physical pin 16: BATSNS; input. */
  "BATSNS": "16",
  /** Physical pin 17: BATGATE; output. */
  "BATGATE": "17",
  /** Physical pin 18: PROG; passive. */
  "PROG": "18",
  /** Physical pin 19: CHGSNS; passive. */
  "CHGSNS_19": "19",
  /** Physical pin 20: CHGSNS; passive. */
  "CHGSNS_20": "20",
  /** Physical pin 21: V_{OUT}; passive. */
  "V_{OUT}_21": "21",
  /** Physical pin 22: V_{OUT}; passive. */
  "V_{OUT}_22": "22",
  /** Physical pin 23: V_{BUS}; passive. */
  "V_{BUS}_23": "23",
  /** Physical pin 24: V_{BUS}; passive. */
  "V_{BUS}_24": "24",
  /** Physical pin 25: V_{BUS}; passive. */
  "V_{BUS}_25": "25",
  /** Physical pin 26: SW; passive. */
  "SW_26": "26",
  /** Physical pin 27: SW; passive. */
  "SW_27": "27",
  /** Physical pin 28: SCL; input. */
  "SCL": "28",
  /** Physical pin 29: GND; power_in. */
  "GND": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6803_2 extends Component.withPins({
  /** Physical pin 1: V^{+}; input. */
  "V^{+}": "1",
  /** Physical pin 2: C12; input. */
  "C12": "2",
  /** Physical pin 3: S12; input. */
  "S12": "3",
  /** Physical pin 4: C11; input. */
  "C11": "4",
  /** Physical pin 5: S11; input. */
  "S11": "5",
  /** Physical pin 6: C10; input. */
  "C10": "6",
  /** Physical pin 7: S10; input. */
  "S10": "7",
  /** Physical pin 8: C9; input. */
  "C9": "8",
  /** Physical pin 9: S9; input. */
  "S9": "9",
  /** Physical pin 10: C8; input. */
  "C8": "10",
  /** Physical pin 11: S8; input. */
  "S8": "11",
  /** Physical pin 12: C7; input. */
  "C7": "12",
  /** Physical pin 13: S7; input. */
  "S7": "13",
  /** Physical pin 14: C6; input. */
  "C6": "14",
  /** Physical pin 15: S6; input. */
  "S6": "15",
  /** Physical pin 16: C5; input. */
  "C5": "16",
  /** Physical pin 17: S5; input. */
  "S5": "17",
  /** Physical pin 18: C4; input. */
  "C4": "18",
  /** Physical pin 19: S4; input. */
  "S4": "19",
  /** Physical pin 20: C3; input. */
  "C3": "20",
  /** Physical pin 21: S3; input. */
  "S3": "21",
  /** Physical pin 22: C2; input. */
  "C2": "22",
  /** Physical pin 23: S2; input. */
  "S2": "23",
  /** Physical pin 24: C1; input. */
  "C1": "24",
  /** Physical pin 25: S1; input. */
  "S1": "25",
  /** Physical pin 26: V^{-}; input. */
  "V^{-}": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: V_{TEMP1}; input. */
  "V_{TEMP1}": "28",
  /** Physical pin 29: V_{TEMP2}; input. */
  "V_{TEMP2}": "29",
  /** Physical pin 30: V_{REF}; input. */
  "V_{REF}": "30",
  /** Physical pin 31: V_{REG}; input. */
  "V_{REG}": "31",
  /** Physical pin 32: TOS; input. */
  "TOS": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: ~{WDTB}; open_collector. */
  "~{WDTB}": "34",
  /** Physical pin 35: GPIO1; input. */
  "GPIO1": "35",
  /** Physical pin 36: GPIO2; input. */
  "GPIO2": "36",
  /** Physical pin 37: A0; input. */
  "A0": "37",
  /** Physical pin 38: A1; input. */
  "A1": "38",
  /** Physical pin 39: A2; input. */
  "A2": "39",
  /** Physical pin 40: A3; input. */
  "A3": "40",
  /** Physical pin 41: SCKI; input. */
  "SCKI": "41",
  /** Physical pin 42: SDI; input. */
  "SDI": "42",
  /** Physical pin 43: SDO; open_collector. */
  "SDO": "43",
  /** Physical pin 44: ~{CSBI}; input. */
  "~{CSBI}": "44",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6803_4 extends Component.withPins({
  /** Physical pin 1: V^{+}; input. */
  "V^{+}": "1",
  /** Physical pin 2: C12; input. */
  "C12": "2",
  /** Physical pin 3: S12; input. */
  "S12": "3",
  /** Physical pin 4: C11; input. */
  "C11": "4",
  /** Physical pin 5: S11; input. */
  "S11": "5",
  /** Physical pin 6: C10; input. */
  "C10": "6",
  /** Physical pin 7: S10; input. */
  "S10": "7",
  /** Physical pin 8: C9; input. */
  "C9": "8",
  /** Physical pin 9: S9; input. */
  "S9": "9",
  /** Physical pin 10: C8; input. */
  "C8": "10",
  /** Physical pin 11: S8; input. */
  "S8": "11",
  /** Physical pin 12: C7; input. */
  "C7": "12",
  /** Physical pin 13: S7; input. */
  "S7": "13",
  /** Physical pin 14: C6; input. */
  "C6": "14",
  /** Physical pin 15: S6; input. */
  "S6": "15",
  /** Physical pin 16: C5; input. */
  "C5": "16",
  /** Physical pin 17: S5; input. */
  "S5": "17",
  /** Physical pin 18: C4; input. */
  "C4": "18",
  /** Physical pin 19: S4; input. */
  "S4": "19",
  /** Physical pin 20: C3; input. */
  "C3": "20",
  /** Physical pin 21: S3; input. */
  "S3": "21",
  /** Physical pin 22: C2; input. */
  "C2": "22",
  /** Physical pin 23: S2; input. */
  "S2": "23",
  /** Physical pin 24: C1; input. */
  "C1": "24",
  /** Physical pin 25: S1; input. */
  "S1": "25",
  /** Physical pin 26: C0; input. */
  "C0": "26",
  /** Physical pin 27: V^{-}; input. */
  "V^{-}": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC": "28",
  /** Physical pin 29: V_{TEMP1}; input. */
  "V_{TEMP1}": "29",
  /** Physical pin 30: V_{TEMP2}; input. */
  "V_{TEMP2}": "30",
  /** Physical pin 31: V_{REF}; input. */
  "V_{REF}": "31",
  /** Physical pin 32: V_{REG}; input. */
  "V_{REG}": "32",
  /** Physical pin 33: TOS; input. */
  "TOS": "33",
  /** Physical pin 34: ~{WDTB}; open_collector. */
  "~{WDTB}": "34",
  /** Physical pin 35: GPIO1; input. */
  "GPIO1": "35",
  /** Physical pin 36: GPIO2; input. */
  "GPIO2": "36",
  /** Physical pin 37: A0; input. */
  "A0": "37",
  /** Physical pin 38: A1; input. */
  "A1": "38",
  /** Physical pin 39: A2; input. */
  "A2": "39",
  /** Physical pin 40: A3; input. */
  "A3": "40",
  /** Physical pin 41: SCKI; input. */
  "SCKI": "41",
  /** Physical pin 42: SDI; input. */
  "SDI": "42",
  /** Physical pin 43: SDO; open_collector. */
  "SDO": "43",
  /** Physical pin 44: ~{CSBI}; input. */
  "~{CSBI}": "44",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6804_1 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: C12; input. */
  "C12": "2",
  /** Physical pin 3: S12; bidirectional. */
  "S12": "3",
  /** Physical pin 4: C11; input. */
  "C11": "4",
  /** Physical pin 5: S11; bidirectional. */
  "S11": "5",
  /** Physical pin 6: C10; input. */
  "C10": "6",
  /** Physical pin 7: S10; bidirectional. */
  "S10": "7",
  /** Physical pin 8: C9; input. */
  "C9": "8",
  /** Physical pin 9: S9; bidirectional. */
  "S9": "9",
  /** Physical pin 10: C8; input. */
  "C8": "10",
  /** Physical pin 11: S8; bidirectional. */
  "S8": "11",
  /** Physical pin 12: C7; input. */
  "C7": "12",
  /** Physical pin 13: S7; bidirectional. */
  "S7": "13",
  /** Physical pin 14: C6; input. */
  "C6": "14",
  /** Physical pin 15: S6; bidirectional. */
  "S6": "15",
  /** Physical pin 16: C5; input. */
  "C5": "16",
  /** Physical pin 17: S5; bidirectional. */
  "S5": "17",
  /** Physical pin 18: C4; input. */
  "C4": "18",
  /** Physical pin 19: S4; bidirectional. */
  "S4": "19",
  /** Physical pin 20: C3; input. */
  "C3": "20",
  /** Physical pin 21: S3; bidirectional. */
  "S3": "21",
  /** Physical pin 22: C2; input. */
  "C2": "22",
  /** Physical pin 23: S2; bidirectional. */
  "S2": "23",
  /** Physical pin 24: C1; input. */
  "C1": "24",
  /** Physical pin 25: S1; bidirectional. */
  "S1": "25",
  /** Physical pin 26: C0; input. */
  "C0": "26",
  /** Physical pin 27: GPIO1; bidirectional. */
  "GPIO1": "27",
  /** Physical pin 28: GPIO2; bidirectional. */
  "GPIO2": "28",
  /** Physical pin 29: GPIO3; bidirectional. */
  "GPIO3": "29",
  /** Physical pin 30: V-; passive. */
  "V-_30": "30",
  /** Physical pin 31: V-; passive. */
  "V-_31": "31",
  /** Physical pin 32: GPIO4; bidirectional. */
  "GPIO4": "32",
  /** Physical pin 33: GPIO5; bidirectional. */
  "GPIO5": "33",
  /** Physical pin 34: VREF2; output. */
  "VREF2": "34",
  /** Physical pin 35: VREF1; output. */
  "VREF1": "35",
  /** Physical pin 36: SWTEN; input. */
  "SWTEN": "36",
  /** Physical pin 37: VREG; input. */
  "VREG": "37",
  /** Physical pin 38: DRIVE; output. */
  "DRIVE": "38",
  /** Physical pin 39: WDT; output. */
  "WDT": "39",
  /** Physical pin 40: ISOMD; input. */
  "ISOMD": "40",
  /** Physical pin 41: CSB(IMA); bidirectional. */
  "CSB(IMA)": "41",
  /** Physical pin 42: SCK(IPA); bidirectional. */
  "SCK(IPA)": "42",
  /** Physical pin 43: SDI(NC); input. */
  "SDI(NC)": "43",
  /** Physical pin 44: SDO(NC); open_collector. */
  "SDO(NC)": "44",
  /** Physical pin 45: IBIAS; passive. */
  "IBIAS": "45",
  /** Physical pin 46: ICMP; passive. */
  "ICMP": "46",
  /** Physical pin 47: IMB; bidirectional. */
  "IMB": "47",
  /** Physical pin 48: IPB; bidirectional. */
  "IPB": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1647 extends Component.withPins({
  /** Physical pin 1: IOUT; output. */
  "IOUT": "1",
  /** Physical pin 2: DCIN; power_in. */
  "DCIN": "2",
  /** Physical pin 3: VL; power_out. */
  "VL": "3",
  /** Physical pin 4: CCV; passive. */
  "CCV": "4",
  /** Physical pin 5: CCI; passive. */
  "CCI": "5",
  /** Physical pin 6: SEL; input. */
  "SEL": "6",
  /** Physical pin 7: CS; input. */
  "CS": "7",
  /** Physical pin 8: BATT; input. */
  "BATT": "8",
  /** Physical pin 9: REF; bidirectional. */
  "REF": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: THM; input. */
  "THM": "12",
  /** Physical pin 13: SCLK; input. */
  "SCLK": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
  /** Physical pin 15: DACV; output. */
  "DACV": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: DLO; output. */
  "DLO": "17",
  /** Physical pin 18: DHI; output. */
  "DHI": "18",
  /** Physical pin 19: LX; input. */
  "LX": "19",
  /** Physical pin 20: BST; power_in. */
  "BST": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1648 extends Component.withPins({
  /** Physical pin 1: DCIN; power_in. */
  "DCIN": "1",
  /** Physical pin 2: VL; power_out. */
  "VL": "2",
  /** Physical pin 3: CCV; passive. */
  "CCV": "3",
  /** Physical pin 4: CCI; passive. */
  "CCI": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: BATT; input. */
  "BATT": "6",
  /** Physical pin 7: REF; bidirectional. */
  "REF": "7",
  /** Physical pin 8: AGND; power_in. */
  "AGND": "8",
  /** Physical pin 9: THM; input. */
  "THM": "9",
  /** Physical pin 10: SETI; input. */
  "SETI": "10",
  /** Physical pin 11: SETV; input. */
  "SETV": "11",
  /** Physical pin 12: PGND; power_in. */
  "PGND": "12",
  /** Physical pin 13: DLO; output. */
  "DLO": "13",
  /** Physical pin 14: DHI; output. */
  "DHI": "14",
  /** Physical pin 15: LX; input. */
  "LX": "15",
  /** Physical pin 16: BST; power_in. */
  "BST": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX17261xxTD extends Component.withPins({
  /** Physical pin 1: TH; passive. */
  "TH": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: SW; output. */
  "SW": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: BATT; power_in. */
  "BATT": "6",
  /** Physical pin 7: CSN; passive. */
  "CSN": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: CSPL; passive. */
  "CSPL": "9",
  /** Physical pin 10: CELLX; input. */
  "CELLX": "10",
  /** Physical pin 11: REG; power_out. */
  "REG": "11",
  /** Physical pin 12: ALRT; open_collector. */
  "ALRT": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX17261xxWL extends Component.withPins({
  /** Physical pin A1: TH; passive. */
  "TH": "A1",
  /** Physical pin A2: SCL; input. */
  "SCL": "A2",
  /** Physical pin A3: CSN; passive. */
  "CSN": "A3",
  /** Physical pin B1: BATT; power_in. */
  "BATT": "B1",
  /** Physical pin B2: ALRT; open_collector. */
  "ALRT": "B2",
  /** Physical pin B3: REG; power_out. */
  "REG": "B3",
  /** Physical pin C1: SDA; bidirectional. */
  "SDA": "C1",
  /** Physical pin C2: CELLX; input. */
  "CELLX": "C2",
  /** Physical pin C3: GND/CSPL; power_in. */
  "GND/CSPL": "C3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX17263xxTE extends Component.withPins({
  /** Physical pin 1: TH; passive. */
  "TH": "1",
  /** Physical pin 2: L1; bidirectional. */
  "L1": "2",
  /** Physical pin 3: L2; output. */
  "L2": "3",
  /** Physical pin 4: L3; output. */
  "L3": "4",
  /** Physical pin 5: L4; output. */
  "L4": "5",
  /** Physical pin 6: BATT; power_in. */
  "BATT": "6",
  /** Physical pin 7: CSN; input. */
  "CSN": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: CSPL; input. */
  "CSPL": "9",
  /** Physical pin 10: CELLX/CSPH; input. */
  "CELLX/CSPH": "10",
  /** Physical pin 11: REG; power_out. */
  "REG": "11",
  /** Physical pin 12: ALRT; open_collector. */
  "ALRT": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: EP; passive. */
  "EP": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1811 extends Component.withPins({
  /** Physical pin 1: SELV; input. */
  "SELV": "1",
  /** Physical pin 2: SELI; input. */
  "SELI": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: IN; power_in. */
  "IN": "4",
  /** Physical pin 5: BATT; power_out. */
  "BATT": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: EN; input. */
  "EN": "7",
  /** Physical pin 8: ~{CHG}; open_collector. */
  "~{CHG}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1873REEE extends Component.withPins({
  /** Physical pin 1: CSSN; input. */
  "CSSN": "1",
  /** Physical pin 2: CSSP; input. */
  "CSSP": "2",
  /** Physical pin 3: CCS; input. */
  "CCS": "3",
  /** Physical pin 4: CCV; input. */
  "CCV": "4",
  /** Physical pin 5: CCI; input. */
  "CCI": "5",
  /** Physical pin 6: ICHG/EN; input. */
  "ICHG/EN": "6",
  /** Physical pin 7: IOUT; output. */
  "IOUT": "7",
  /** Physical pin 8: VADJ; input. */
  "VADJ": "8",
  /** Physical pin 9: REF; output. */
  "REF": "9",
  /** Physical pin 10: BATT; input. */
  "BATT": "10",
  /** Physical pin 11: CSB; input. */
  "CSB": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: VH; input. */
  "VH": "13",
  /** Physical pin 14: EXT; output. */
  "EXT": "14",
  /** Physical pin 15: DCIN; power_in. */
  "DCIN": "15",
  /** Physical pin 16: VL; input. */
  "VL": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1873SEEE extends Component.withPins({
  /** Physical pin 1: CSSN; input. */
  "CSSN": "1",
  /** Physical pin 2: CSSP; input. */
  "CSSP": "2",
  /** Physical pin 3: CCS; input. */
  "CCS": "3",
  /** Physical pin 4: CCV; input. */
  "CCV": "4",
  /** Physical pin 5: CCI; input. */
  "CCI": "5",
  /** Physical pin 6: ICHG/EN; input. */
  "ICHG/EN": "6",
  /** Physical pin 7: IOUT; output. */
  "IOUT": "7",
  /** Physical pin 8: VADJ; input. */
  "VADJ": "8",
  /** Physical pin 9: REF; output. */
  "REF": "9",
  /** Physical pin 10: BATT; input. */
  "BATT": "10",
  /** Physical pin 11: CSB; input. */
  "CSB": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: VH; input. */
  "VH": "13",
  /** Physical pin 14: EXT; output. */
  "EXT": "14",
  /** Physical pin 15: DCIN; power_in. */
  "DCIN": "15",
  /** Physical pin 16: VL; input. */
  "VL": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1873TEEE extends Component.withPins({
  /** Physical pin 1: CSSN; input. */
  "CSSN": "1",
  /** Physical pin 2: CSSP; input. */
  "CSSP": "2",
  /** Physical pin 3: CCS; input. */
  "CCS": "3",
  /** Physical pin 4: CCV; input. */
  "CCV": "4",
  /** Physical pin 5: CCI; input. */
  "CCI": "5",
  /** Physical pin 6: ICHG/EN; input. */
  "ICHG/EN": "6",
  /** Physical pin 7: IOUT; output. */
  "IOUT": "7",
  /** Physical pin 8: VADJ; input. */
  "VADJ": "8",
  /** Physical pin 9: REF; output. */
  "REF": "9",
  /** Physical pin 10: BATT; input. */
  "BATT": "10",
  /** Physical pin 11: CSB; input. */
  "CSB": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: VH; input. */
  "VH": "13",
  /** Physical pin 14: EXT; output. */
  "EXT": "14",
  /** Physical pin 15: DCIN; power_in. */
  "DCIN": "15",
  /** Physical pin 16: VL; input. */
  "VL": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX712CPE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; input. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; input. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; input. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX712CSE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; power_out. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; power_out. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; power_out. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX712EPE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; input. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; input. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; input. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX712ESE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; power_out. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; power_out. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; power_out. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX712MJE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; input. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; input. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; input. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX713CPE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; input. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; input. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; input. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX713CSE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; power_out. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; power_out. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; power_out. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX713EPE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; input. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; input. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; input. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX713ESE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; power_out. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; power_out. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; power_out. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX713MJE extends Component.withPins({
  /** Physical pin 1: VLIMIT; input. */
  "VLIMIT": "1",
  /** Physical pin 2: BATT+; input. */
  "BATT+": "2",
  /** Physical pin 3: PGM0; input. */
  "PGM0": "3",
  /** Physical pin 4: PGM1; input. */
  "PGM1": "4",
  /** Physical pin 5: THI; input. */
  "THI": "5",
  /** Physical pin 6: TLO; input. */
  "TLO": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: ~{FASTCHG}; open_collector. */
  "~{FASTCHG}": "8",
  /** Physical pin 9: PGM2; input. */
  "PGM2": "9",
  /** Physical pin 10: PGM3; input. */
  "PGM3": "10",
  /** Physical pin 11: CC; input. */
  "CC": "11",
  /** Physical pin 12: BATT-; input. */
  "BATT-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: DRV; output. */
  "DRV": "14",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC34673 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: ~{PPR}; open_collector. */
  "~{PPR}": "2",
  /** Physical pin 3: ~{CHG}; open_collector. */
  "~{CHG}": "3",
  /** Physical pin 4: ~{EN}; input. */
  "~{EN}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: ~{FAST}; open_collector. */
  "~{FAST}": "6",
  /** Physical pin 7: ISET; output. */
  "ISET": "7",
  /** Physical pin 8: BAT; power_out. */
  "BAT": "8",
  /** Physical pin 9: EPAD; power_in. */
  "EPAD": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73812T_420I_OT extends Component.withPins({
  /** Physical pin 1: CE; input. */
  "CE": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73811T_420I_OT extends Component.withPins({
  /** Physical pin 1: CE; input. */
  "CE": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73811T_435I_OT extends Component.withPins({
  /** Physical pin 1: CE; input. */
  "CE": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73812T_435I_OT extends Component.withPins({
  /** Physical pin 1: CE; input. */
  "CE": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73831_2_MC extends Component.withPins({
  /** Physical pin 1: V_{DD}; passive. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}_2": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}_3": "3",
  /** Physical pin 4: V_{BAT}; passive. */
  "V_{BAT}_4": "4",
  /** Physical pin 5: STAT; tri_state. */
  "STAT": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73831_2_OT extends Component.withPins({
  /** Physical pin 1: STAT; tri_state. */
  "STAT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73831_3_MC extends Component.withPins({
  /** Physical pin 1: V_{DD}; passive. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}_2": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}_3": "3",
  /** Physical pin 4: V_{BAT}; passive. */
  "V_{BAT}_4": "4",
  /** Physical pin 5: STAT; tri_state. */
  "STAT": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73831_3_OT extends Component.withPins({
  /** Physical pin 1: STAT; tri_state. */
  "STAT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73831_4_MC extends Component.withPins({
  /** Physical pin 1: V_{DD}; passive. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}_2": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}_3": "3",
  /** Physical pin 4: V_{BAT}; passive. */
  "V_{BAT}_4": "4",
  /** Physical pin 5: STAT; tri_state. */
  "STAT": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73831_4_OT extends Component.withPins({
  /** Physical pin 1: STAT; tri_state. */
  "STAT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73831_5_MC extends Component.withPins({
  /** Physical pin 1: V_{DD}; passive. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}_2": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}_3": "3",
  /** Physical pin 4: V_{BAT}; passive. */
  "V_{BAT}_4": "4",
  /** Physical pin 5: STAT; tri_state. */
  "STAT": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73831_5_OT extends Component.withPins({
  /** Physical pin 1: STAT; tri_state. */
  "STAT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73832_2_MC extends Component.withPins({
  /** Physical pin 1: V_{DD}; passive. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}_2": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}_3": "3",
  /** Physical pin 4: V_{BAT}; passive. */
  "V_{BAT}_4": "4",
  /** Physical pin 5: STAT; open_collector. */
  "STAT": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73832_2_OT extends Component.withPins({
  /** Physical pin 1: STAT; open_collector. */
  "STAT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73832_3_MC extends Component.withPins({
  /** Physical pin 1: V_{DD}; passive. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}_2": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}_3": "3",
  /** Physical pin 4: V_{BAT}; passive. */
  "V_{BAT}_4": "4",
  /** Physical pin 5: STAT; open_collector. */
  "STAT": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73832_3_OT extends Component.withPins({
  /** Physical pin 1: STAT; open_collector. */
  "STAT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73832_4_MC extends Component.withPins({
  /** Physical pin 1: V_{DD}; passive. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}_2": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}_3": "3",
  /** Physical pin 4: V_{BAT}; passive. */
  "V_{BAT}_4": "4",
  /** Physical pin 5: STAT; open_collector. */
  "STAT": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73832_4_OT extends Component.withPins({
  /** Physical pin 1: STAT; open_collector. */
  "STAT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73832_5_MC extends Component.withPins({
  /** Physical pin 1: V_{DD}; passive. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}_2": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}_3": "3",
  /** Physical pin 4: V_{BAT}; passive. */
  "V_{BAT}_4": "4",
  /** Physical pin 5: STAT; open_collector. */
  "STAT": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: PROG; input. */
  "PROG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73832_5_OT extends Component.withPins({
  /** Physical pin 1: STAT; open_collector. */
  "STAT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: V_{BAT}; power_out. */
  "V_{BAT}": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: PROG; input. */
  "PROG": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73833_xxx_MF extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; passive. */
  "V_{DD}_2": "2",
  /** Physical pin 3: STAT1; open_collector. */
  "STAT1": "3",
  /** Physical pin 4: STAT2; open_collector. */
  "STAT2": "4",
  /** Physical pin 5: V_{SS}; power_in. */
  "V_{SS}": "5",
  /** Physical pin 6: PROG; input. */
  "PROG": "6",
  /** Physical pin 7: ~{PG}; open_collector. */
  "~{PG}": "7",
  /** Physical pin 8: THERM; passive. */
  "THERM": "8",
  /** Physical pin 9: V_{BAT}; power_out. */
  "V_{BAT}_9": "9",
  /** Physical pin 10: V_{BAT}; passive. */
  "V_{BAT}_10": "10",
  /** Physical pin 11: EP; power_in. */
  "EP": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73833_xxx_UN extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}_1": "1",
  /** Physical pin 2: V_{DD}; passive. */
  "V_{DD}_2": "2",
  /** Physical pin 3: STAT1; open_collector. */
  "STAT1": "3",
  /** Physical pin 4: STAT2; open_collector. */
  "STAT2": "4",
  /** Physical pin 5: V_{SS}; power_in. */
  "V_{SS}": "5",
  /** Physical pin 6: PROG; input. */
  "PROG": "6",
  /** Physical pin 7: ~{PG}; open_collector. */
  "~{PG}": "7",
  /** Physical pin 8: THERM; passive. */
  "THERM": "8",
  /** Physical pin 9: V_{BAT}; power_out. */
  "V_{BAT}_9": "9",
  /** Physical pin 10: V_{BAT}; passive. */
  "V_{BAT}_10": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871 extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_1AA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_1CA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_1CC extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_2AA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_2CA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_2CC extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_3CA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_3CC extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_4CA extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP73871_4CC extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT_1": "1",
  /** Physical pin 2: VPCC; input. */
  "VPCC": "2",
  /** Physical pin 3: SEL; input. */
  "SEL": "3",
  /** Physical pin 4: PROG2; input. */
  "PROG2": "4",
  /** Physical pin 5: THERM; bidirectional. */
  "THERM": "5",
  /** Physical pin 6: ~{PG}; open_collector. */
  "~{PG}": "6",
  /** Physical pin 7: STAT2; open_collector. */
  "STAT2": "7",
  /** Physical pin 8: STAT1/~{LBO}; open_collector. */
  "STAT1/~{LBO}": "8",
  /** Physical pin 9: ~{TE}; input. */
  "~{TE}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}_10": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
  /** Physical pin 12: PROG3; bidirectional. */
  "PROG3": "12",
  /** Physical pin 13: PROG1; bidirectional. */
  "PROG1": "13",
  /** Physical pin 14: V_{BAT}; power_out. */
  "V_{BAT}_14": "14",
  /** Physical pin 15: V_{BAT}; passive. */
  "V_{BAT}_15": "15",
  /** Physical pin 16: V_{BAT_SENSE}; input. */
  "V_{BAT_SENSE}": "16",
  /** Physical pin 17: CE; input. */
  "CE": "17",
  /** Physical pin 18: IN; power_in. */
  "IN_18": "18",
  /** Physical pin 19: IN; passive. */
  "IN_19": "19",
  /** Physical pin 20: OUT; passive. */
  "OUT_20": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SLM6800 extends Component.withPins({
  /** Physical pin 13: ~{CHRG}; open_collector. */
  "~{CHRG}": "13",
  /** Physical pin 14: ~{STBY}; open_collector. */
  "~{STBY}": "14",
  /** Physical pin 1: NTC; input. */
  "NTC": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: BST; input. */
  "BST": "3",
  /** Physical pin 4: PGND; power_in. */
  "PGND_4": "4",
  /** Physical pin 5: LX; output. */
  "LX_5": "5",
  /** Physical pin 6: LX; passive. */
  "LX_6": "6",
  /** Physical pin 7: VSYS; output. */
  "VSYS_7": "7",
  /** Physical pin 8: VSYS; passive. */
  "VSYS_8": "8",
  /** Physical pin 9: BAT; power_out. */
  "BAT": "9",
  /** Physical pin 10: ILIM; input. */
  "ILIM": "10",
  /** Physical pin 11: ISET; input. */
  "ISET": "11",
  /** Physical pin 12: TM; input. */
  "TM": "12",
  /** Physical pin 15: SGND; power_in. */
  "SGND": "15",
  /** Physical pin 16: EN; input. */
  "EN": "16",
  /** Physical pin 17: PGND; passive. */
  "PGND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TP4056_42_ESOP8 extends Component.withPins({
  /** Physical pin 1: TEMP; input. */
  "TEMP": "1",
  /** Physical pin 2: PROG; passive. */
  "PROG": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: BAT; power_out. */
  "BAT": "5",
  /** Physical pin 6: ~{STDBY}; open_collector. */
  "~{STDBY}": "6",
  /** Physical pin 7: ~{CHRG}; open_collector. */
  "~{CHRG}": "7",
  /** Physical pin 8: CE; input. */
  "CE": "8",
  /** Physical pin 9: EPAD; passive. */
  "EPAD": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TP4057 extends Component.withPins({
  /** Physical pin 1: ~{CHRG}; open_collector. */
  "~{CHRG}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: BAT; power_out. */
  "BAT": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: STDBY; open_collector. */
  "STDBY": "5",
  /** Physical pin 6: PROG; passive. */
  "PROG": "6",
}) {
  override schema = "Battery_Management:TP4057";
  override referencePrefix = "U";
}

