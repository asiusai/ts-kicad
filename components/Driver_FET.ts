// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Single-Channel EiceDRIVER With True Differential Inputs, 4V UVLO, +4/-8A, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:1EDN7550B`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/Infineon-1EDN7550B-DS-v02_00-EN.pdf?fileId=5546d46262b31d2e01635d9799ef264f
 * Keywords: Driver, Dual MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _1EDN7550B extends Component.withPins({
  /** Physical pin 1: IN-; input. */
  "IN-": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: OUT_SRC; output. */
  "OUT_SRC": "5",
  /** Physical pin 6: OUT_SNK; output. */
  "OUT_SNK": "6",
}) {
  override schema = "Driver_FET:1EDN7550B";
  override referencePrefix = "U";
}

/**
 * Single-Channel EiceDRIVER With True Differential Inputs, 8V UVLO, +4/-8A, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:1EDN8550B`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/Infineon-1EDN7550B-DS-v02_00-EN.pdf?fileId=5546d46262b31d2e01635d9799ef264f
 * Keywords: Driver, Dual MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _1EDN8550B extends Component.withPins({
  /** Physical pin 1: IN-; input. */
  "IN-": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: OUT_SRC; output. */
  "OUT_SRC": "5",
  /** Physical pin 6: OUT_SNK; output. */
  "OUT_SNK": "6",
}) {
  override schema = "Driver_FET:1EDN8550B";
  override referencePrefix = "U";
}

/**
 * 1200V Half Bridge Gate Driver with active Miller clamp, OCP, SCC , 380ns integrated deadtime, Bootstrap Diode, ±2.3A drive current, PG-DSO-20-U03
 *
 * KiCad symbol: `Driver_FET:2ED1324S12P`. Reference prefix: `U`.
 * Footprint filters: Infineon*PG?DSO?20?U03*7.5x12.8mm*.
 * @see https://www.infineon.com/dgdl/Infineon-2ED1323S12P_2ED1324S12P-DataSheet-v01_01-EN.pdf?fileId=8ac78c8c869190210186e92f0f506d0c
 * Keywords: Gate Driver MOSFET IGBT SiC.
 * Default footprint: Package_SO:Infineon_PG-DSO-20-U03_7.5x12.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _2ED1324S12P extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: HIN; input. */
  "HIN": "4",
  /** Physical pin 5: LIN; input. */
  "LIN": "5",
  /** Physical pin 6: ~{RFE}; open_collector. */
  "~{RFE}": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: ITRIP; passive. */
  "ITRIP": "8",
  /** Physical pin 9: COM; power_in. */
  "COM": "9",
  /** Physical pin 10: LC; passive. */
  "LC": "10",
  /** Physical pin 11: LO; output. */
  "LO": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VB; passive. */
  "VB": "14",
  /** Physical pin 15: HO; output. */
  "HO": "15",
  /** Physical pin 16: HC; passive. */
  "HC": "16",
  /** Physical pin 17: VS; passive. */
  "VS": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
}) {
  override schema = "Driver_FET:2ED1324S12P";
  override referencePrefix = "U";
}

/**
 * 1200V Half Bridge Gate Driver with active Miller clamp, OCP, SCC, Bootstrap Diode, ±2.3A drive current, PG-DSO-20-U03
 *
 * KiCad symbol: `Driver_FET:2ED1323S12P`. Reference prefix: `U`.
 * Footprint filters: Infineon*PG?DSO?20?U03*7.5x12.8mm*.
 * @see https://www.infineon.com/dgdl/Infineon-2ED1323S12P_2ED1324S12P-DataSheet-v01_01-EN.pdf?fileId=8ac78c8c869190210186e92f0f506d0c
 * Keywords: Gate Driver MOSFET IGBT SiC.
 * Default footprint: Package_SO:Infineon_PG-DSO-20-U03_7.5x12.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _2ED1323S12P extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: HIN; input. */
  "HIN": "4",
  /** Physical pin 5: LIN; input. */
  "LIN": "5",
  /** Physical pin 6: ~{RFE}; open_collector. */
  "~{RFE}": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: ITRIP; passive. */
  "ITRIP": "8",
  /** Physical pin 9: COM; power_in. */
  "COM": "9",
  /** Physical pin 10: LC; passive. */
  "LC": "10",
  /** Physical pin 11: LO; output. */
  "LO": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VB; passive. */
  "VB": "14",
  /** Physical pin 15: HO; output. */
  "HO": "15",
  /** Physical pin 16: HC; passive. */
  "HC": "16",
  /** Physical pin 17: VS; passive. */
  "VS": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
}) {
  override schema = "Driver_FET:2ED1323S12P";
  override referencePrefix = "U";
}

/**
 * 650V Half Bridge Gate Driver with Integrated Bootstrap Diode, 2.5A drive current, SOIC-14
 *
 * KiCad symbol: `Driver_FET:2ED21824S06J`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-2ED2182-4-S06F-J-DataSheet-v02_10-EN.pdf?fileId=5546d4626cb27db2016cb8d7368a29e3
 * Keywords: Gate Driver MOSFET IGBT.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _2ED21824S06J extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: DT; passive. */
  "DT": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:2ED21824S06J";
  override referencePrefix = "U";
}

/**
 * 600V Half Bridge Gate Driver with OCP and Integrated Bootstrap Diode, +1.8A/-2.5A drive current, SOIC-14
 *
 * KiCad symbol: `Driver_FET:2EDL23N06PJXUMA1`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-2EDL23x06xx-DS-v02_01-EN.pdf?fileId=5546d46146d18cb4014738a20c5236f0
 * Keywords: Gate Driver MOSFET IGBT.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _2EDL23N06PJXUMA1 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: EN/FLT; open_collector. */
  "EN/FLT": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: PGND; power_in. */
  "PGND": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: VS; passive. */
  "VS": "10",
  /** Physical pin 11: HO; output. */
  "HO": "11",
  /** Physical pin 12: VB; passive. */
  "VB": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:2EDL23N06PJXUMA1";
  override referencePrefix = "U";
}

/**
 * 2.5A Gate Drive Optocoupler with Integrated LED Driver, Active Miller Clamp, DESAT Detection, and Fault & UVLO Status Feedback, SOIC-16
 *
 * KiCad symbol: `Driver_FET:ACPL-336J`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3*P1.27mm*.
 * @see https://docs.broadcom.com/docs/AV02-4391EN
 * Keywords: Gate Driver IGBT.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ACPL_336J extends Component.withPins({
  /** Physical pin 1: VEE1; power_in. */
  "VEE1": "1",
  /** Physical pin 2: VIN+; input. */
  "VIN+": "2",
  /** Physical pin 3: VCC1; power_in. */
  "VCC1": "3",
  /** Physical pin 4: VLEDDRV; output. */
  "VLEDDRV": "4",
  /** Physical pin 5: ~{UVLO}; open_collector. */
  "~{UVLO}": "5",
  /** Physical pin 6: ~{FAULT}; open_collector. */
  "~{FAULT}": "6",
  /** Physical pin 7: ANODE; passive. */
  "ANODE": "7",
  /** Physical pin 8: CATHODE; passive. */
  "CATHODE": "8",
  /** Physical pin 9: VEE2; passive. */
  "VEE2_9": "9",
  /** Physical pin 10: VCLAMP; bidirectional. */
  "VCLAMP": "10",
  /** Physical pin 11: VOUT; output. */
  "VOUT": "11",
  /** Physical pin 12: VCC2; power_in. */
  "VCC2": "12",
  /** Physical pin 13: VE; power_in. */
  "VE": "13",
  /** Physical pin 14: DESAT; bidirectional. */
  "DESAT": "14",
  /** Physical pin 15: VLED; output. */
  "VLED": "15",
  /** Physical pin 16: VEE2; power_in. */
  "VEE2_16": "16",
}) {
  override schema = "Driver_FET:ACPL-336J";
  override referencePrefix = "U";
}

/**
 * Gate Drive Optocoupler, Output Current 4.0/4.0A, Propagation Delay 200ns, SSO-6
 *
 * KiCad symbol: `Driver_FET:ACPL-P343`. Reference prefix: `U`.
 * Footprint filters: SSO*6.8x4.6mm*P1.27mm*Clearance7mm*.
 * @see https://docs.broadcom.com/docs/AV02-2928EN
 * Keywords: MOSFET Driver IGBT Driver Optocoupler.
 * Default footprint: Package_SO:SSO-6_6.8x4.6mm_P1.27mm_Clearance7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ACPL_P343 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
  /** Physical pin 4: VEE; power_in. */
  "VEE": "4",
  /** Physical pin 5: VO; output. */
  "VO": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
}) {
  override schema = "Driver_FET:ACPL-P343";
  override referencePrefix = "U";
}

/**
 * Gate Drive Optocoupler, Output Current 4.0/4.0A, Propagation Delay 200ns, SSO-6
 *
 * KiCad symbol: `Driver_FET:ACPL-W343`. Reference prefix: `U`.
 * Footprint filters: SSO*6.8x4.6mm*P1.27mm*Clearance8mm*.
 * @see http://www.avagotech.com/docs/AV02-2928EN
 * Keywords: MOSFET Driver IGBT Driver Optocoupler.
 * Default footprint: Package_SO:SSO-6_6.8x4.6mm_P1.27mm_Clearance8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ACPL_W343 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
  /** Physical pin 4: VEE; power_in. */
  "VEE": "4",
  /** Physical pin 5: VO; output. */
  "VO": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
}) {
  override schema = "Driver_FET:ACPL-W343";
  override referencePrefix = "U";
}

/**
 * Single-Channel GaN-Tr High-Speed Gate Driver, Output Current 6.0A, 24V, -5V Negative Gate Voltage, HQFN-16
 *
 * KiCad symbol: `Driver_FET:AN34092B`. Reference prefix: `U`.
 * Footprint filters: Panasonic*HQFN*1EP*4x4mm*P0.65mm*EP2.9x2.9mm*.
 * @see https://industrial.panasonic.com/content/data/SC/ds/ds4/AN34092B_E.pdf
 * Keywords: GaN Gate Driver.
 * Default footprint: Package_DFN_QFN:Panasonic_HQFN-16-1EP_4x4mm_P0.65mm_EP2.9x2.9mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AN34092B extends Component.withPins({
  /** Physical pin 1: OUT1; output. */
  "OUT1": "1",
  /** Physical pin 2: OUT2; output. */
  "OUT2": "2",
  /** Physical pin 3: OUT3; output. */
  "OUT3": "3",
  /** Physical pin 4: VEE; power_in. */
  "VEE": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: INP; input. */
  "INP": "7",
  /** Physical pin 8: INN; input. */
  "INN": "8",
  /** Physical pin 9: TEST; passive. */
  "TEST": "9",
  /** Physical pin 10: VREG; passive. */
  "VREG": "10",
  /** Physical pin 11: IGCNT; passive. */
  "IGCNT": "11",
  /** Physical pin 12: VRCNT; passive. */
  "VRCNT": "12",
  /** Physical pin 13: VR; passive. */
  "VR": "13",
  /** Physical pin 14: ~{FAULT}; open_collector. */
  "~{FAULT}": "14",
  /** Physical pin 15: CP; passive. */
  "CP": "15",
  /** Physical pin 16: CN; passive. */
  "CN": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Driver_FET:AN34092B";
  override referencePrefix = "U";
}

/**
 * 24V, Half-Bridge Gate Driver, Integrated Bootstrap Diode, WSON-8 / DFN-8
 *
 * KiCad symbol: `Driver_FET:BDR2L00_DFN`. Reference prefix: `U`.
 * Footprint filters: *DFN*2x2mm?P0.5mm?EP0.6*x1.2*mm*, *DFN*3x3mm?P0.5mm?EP1.7*x2.4*mm*.
 * @see https://www.lcsc.com/datasheet/C5371998.pdf
 * Keywords: MOSFET-Gate-Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BDR2L00_DFN extends Component.withPins({
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 1: BOOT; passive. */
  "BOOT": "1",
  /** Physical pin 2: PWM; input. */
  "PWM": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: LGATE; output. */
  "LGATE": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: PHASE; passive. */
  "PHASE": "7",
  /** Physical pin 8: UGATE; output. */
  "UGATE": "8",
}) {
  override schema = "Driver_FET:BDR2L00_DFN";
  override referencePrefix = "U";
}

/**
 * Dual Power MOSFET Driver, V+ = 4.5..15V, V- = -15..0V, TTL/CMOS compatible inputs, DIP-8
 *
 * KiCad symbol: `Driver_FET:ICL7667xPA`. Reference prefix: `U`.
 * Footprint filters: DIP?8?W7.62mm*.
 * @see https://www.renesas.com/en/document/dst/icl7667-datasheet
 * Keywords: Intersil clock-driver clock-buffer DS0026 driver-array ICL7667CPAZ.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICL7667xPA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: ~{OUT_B}; output. */
  "~{OUT_B}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:ICL7667xPA";
  override referencePrefix = "U";
}

/**
 * Dual High-Speed MOS Driver, 10..20V supply voltage, 1.5A peak output current, TTL compatible inputs, DIP-8 / SOIC-8 / MSOP-8
 *
 * KiCad symbol: `Driver_FET:DS0026`. Reference prefix: `U`.
 * Footprint filters: DIP?8?W7.62mm*, *SOIC*3.9x4.9mm*P1.27mm*, *MSOP*3x3mm*P0.65mm*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/National%20Semiconductor%20PDFs/DS0026.pdf
 * Keywords: clock-driver clock-buffer Obsolete.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS0026 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: ~{OUT_B}; output. */
  "~{OUT_B}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:DS0026";
  override referencePrefix = "U";
}

/**
 * High Speed, Dual Channel Power MOSFET Driver, 4.5..15V supply, I(PK)=2A, non-inverting drivers, DIP-8
 *
 * KiCad symbol: `Driver_FET:EL7202CN`. Reference prefix: `U`.
 * Footprint filters: DIP?8?W7.62mm*.
 * @see https://www.mouser.com/catalog/specsheets/intersil_fn7282.pdf
 * Keywords: Intersil Renesas clock-driver clock-buffer Obsolete.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EL7202CN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: OUT_B; output. */
  "OUT_B": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: OUT_A; output. */
  "OUT_A": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:EL7202CN";
  override referencePrefix = "U";
}

/**
 * High Speed, Dual Channel Power MOSFET Driver, 4.5..15V supply, I(PK)=2A, non-inverting drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:EL7202CS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9*4.*P1.27mm*.
 * @see https://www.mouser.com/catalog/specsheets/intersil_fn7282.pdf
 * Keywords: Intersil Renesas clock-driver clock-buffer.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EL7202CS extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: OUT_B; output. */
  "OUT_B": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: OUT_A; output. */
  "OUT_A": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:EL7202CS";
  override referencePrefix = "U";
}

/**
 * High Speed, Dual Channel Power MOSFET Driver, 4.5..15V supply, I(PK)=2A, inverting drivers, DIP-8
 *
 * KiCad symbol: `Driver_FET:EL7212CN`. Reference prefix: `U`.
 * Footprint filters: DIP?8?W7.62mm*.
 * @see https://www.mouser.com/catalog/specsheets/intersil_fn7282.pdf
 * Keywords: Intersil Renesas DS0026 clock-driver clock-buffer Obsolete.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EL7212CN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: ~{OUT_B}; output. */
  "~{OUT_B}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:EL7212CN";
  override referencePrefix = "U";
}

/**
 * High Speed, Dual Channel Power MOSFET Driver, 4.5..15V supply, I(PK)=2A, inverting drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:EL7212CS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9*4.*P1.27mm*.
 * @see https://www.mouser.com/catalog/specsheets/intersil_fn7282.pdf
 * Keywords: Intersil Renesas DS0026 clock-driver clock-buffer.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EL7212CS extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: ~{OUT_B}; output. */
  "~{OUT_B}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:EL7212CS";
  override referencePrefix = "U";
}

/**
 * High Speed, Dual Channel Power MOSFET Driver, 4.5..15V supply, I(PK)=2A, complementary drivers, DIP-8
 *
 * KiCad symbol: `Driver_FET:EL7222CN`. Reference prefix: `U`.
 * Footprint filters: DIP?8?W7.62mm*.
 * @see https://www.mouser.com/catalog/specsheets/intersil_fn7282.pdf
 * Keywords: Intersil Renesas clock-driver clock-buffer Obsolete.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EL7222CN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: OUT_B; output. */
  "OUT_B": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:EL7222CN";
  override referencePrefix = "U";
}

/**
 * High Speed, Dual Channel Power MOSFET Driver, 4.5..15V supply, I(PK)=2A, complementary drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:EL7222CS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9*4.*P1.27mm*.
 * @see https://www.mouser.com/catalog/specsheets/intersil_fn7282.pdf
 * Keywords: Intersil Renesas clock-driver clock-buffer.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EL7222CS extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: OUT_B; output. */
  "OUT_B": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:EL7222CS";
  override referencePrefix = "U";
}

/**
 * High Speed Low Side MOSFET Gate Driver with CMOS inverting and non-inverting inputs, 4.5-18 V, 1.0 A, SOT-23-5
 *
 * KiCad symbol: `Driver_FET:FAN3111C`. Reference prefix: `U`.
 * Footprint filters: SOT?23?5*.
 * @see https://www.onsemi.com/pdf/datasheet/fan3111c-d.pdf
 * Keywords: MOSFET gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN3111C extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: ~{IN-}; input. */
  "~{IN-}": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
  override schema = "Driver_FET:FAN3111C";
  override referencePrefix = "U";
}

/**
 * High Speed Low Side MOSFET Gate Driver with logic voltage reference input, 4.5-18 V, 1.0 A, SOT-23-5
 *
 * KiCad symbol: `Driver_FET:FAN3111E`. Reference prefix: `U`.
 * Footprint filters: SOT?23?5*.
 * @see https://www.onsemi.com/pdf/datasheet/fan3111c-d.pdf
 * Keywords: MOSFET gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN3111E extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: XREF; input. */
  "XREF": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
  override schema = "Driver_FET:FAN3111E";
  override referencePrefix = "U";
}

/**
 * High-speed low-side gate driver, single inverting output, 4.5..18V supply, 9.7A sink, 7.1A source, SOIC-8
 *
 * KiCad symbol: `Driver_FET:FAN3121xMX`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/fan3121-d.pdf
 * Keywords: onsemi.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN3121xMX extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: ~{OUT}; output. */
  "~{OUT}_6": "6",
  /** Physical pin 7: ~{OUT}; passive. */
  "~{OUT}_7": "7",
  /** Physical pin 8: V_{DD}; passive. */
  "V_{DD}_8": "8",
}) {
  override schema = "Driver_FET:FAN3121xMX";
  override referencePrefix = "U";
}

/**
 * High-speed low-side gate driver, single non-inverting output, 4.5..18V supply, 9.7A sink, 7.1A source, SOIC-8
 *
 * KiCad symbol: `Driver_FET:FAN3122xMX`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/fan3121-d.pdf
 * Keywords: onsemi.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN3122xMX extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: OUT; output. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: V_{DD}; passive. */
  "V_{DD}_8": "8",
}) {
  override schema = "Driver_FET:FAN3122xMX";
  override referencePrefix = "U";
}

/**
 * Low-Voltage 18V PMOS-NMOS Bridge Driver, SOIC-8
 *
 * KiCad symbol: `Driver_FET:FAN3268`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/FAN3268T_F085-D.PDF
 * Keywords: Driver MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN3268 extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: ~{OUTB}; output. */
  "~{OUTB}": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: OUTA; output. */
  "OUTA": "7",
  /** Physical pin 8: ENB; input. */
  "ENB": "8",
}) {
  override schema = "Driver_FET:FAN3268";
  override referencePrefix = "U";
}

/**
 * 8-27V PMOS-NMOS Bridge Driver, SOIC-8
 *
 * KiCad symbol: `Driver_FET:FAN3278`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FAN3278-D.pdf
 * Keywords: Driver MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN3278 extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: ~{OUTB}; output. */
  "~{OUTB}": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: OUTA; output. */
  "OUTA": "7",
  /** Physical pin 8: ENB; input. */
  "ENB": "8",
}) {
  override schema = "Driver_FET:FAN3278";
  override referencePrefix = "U";
}

/**
 * High-Current High-Side Gate Driver, 600V Vs, 4A Io, SOIC-8
 *
 * KiCad symbol: `Driver_FET:FAN7371`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FAN7371-D.pdf
 * Keywords: high-side gate driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN7371 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:FAN7371";
  override referencePrefix = "U";
}

/**
 * 3 Half-Bridge Gate-Drive IC, 200V operation, Output Current 350/650mA, SOIC-20
 *
 * KiCad symbol: `Driver_FET:FAN7888`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/FAN7888-D.pdf
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN7888 extends Component.withPins({
  /** Physical pin 1: HIN1; input. */
  "HIN1": "1",
  /** Physical pin 2: LIN1; input. */
  "LIN1": "2",
  /** Physical pin 3: HIN2; input. */
  "HIN2": "3",
  /** Physical pin 4: LIN2; input. */
  "LIN2": "4",
  /** Physical pin 5: HIN3; input. */
  "HIN3": "5",
  /** Physical pin 6: LIN3; input. */
  "LIN3": "6",
  /** Physical pin 7: LO3; output. */
  "LO3": "7",
  /** Physical pin 8: VS3; passive. */
  "VS3": "8",
  /** Physical pin 9: HO3; output. */
  "HO3": "9",
  /** Physical pin 10: VB3; passive. */
  "VB3": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
  /** Physical pin 13: LO2; output. */
  "LO2": "13",
  /** Physical pin 14: VS2; passive. */
  "VS2": "14",
  /** Physical pin 15: HO2; output. */
  "HO2": "15",
  /** Physical pin 16: VB2; passive. */
  "VB2": "16",
  /** Physical pin 17: LO1; output. */
  "LO1": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
}) {
  override schema = "Driver_FET:FAN7888";
  override referencePrefix = "U";
}

/**
 * 3 Half-Bridge Gate-Drive IC, 600V operation, Output Current 350/650mA, SOIC-20
 *
 * KiCad symbol: `Driver_FET:FAN7388`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FAN7388-D.pdf
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN7388 extends Component.withPins({
  /** Physical pin 1: HIN1; input. */
  "HIN1": "1",
  /** Physical pin 2: LIN1; input. */
  "LIN1": "2",
  /** Physical pin 3: HIN2; input. */
  "HIN2": "3",
  /** Physical pin 4: LIN2; input. */
  "LIN2": "4",
  /** Physical pin 5: HIN3; input. */
  "HIN3": "5",
  /** Physical pin 6: LIN3; input. */
  "LIN3": "6",
  /** Physical pin 7: LO3; output. */
  "LO3": "7",
  /** Physical pin 8: VS3; passive. */
  "VS3": "8",
  /** Physical pin 9: HO3; output. */
  "HO3": "9",
  /** Physical pin 10: VB3; passive. */
  "VB3": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
  /** Physical pin 13: LO2; output. */
  "LO2": "13",
  /** Physical pin 14: VS2; passive. */
  "VS2": "14",
  /** Physical pin 15: HO2; output. */
  "HO2": "15",
  /** Physical pin 16: VB2; passive. */
  "VB2": "16",
  /** Physical pin 17: LO1; output. */
  "LO1": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
}) {
  override schema = "Driver_FET:FAN7388";
  override referencePrefix = "U";
}

/**
 * High and Low Side Gate Driver, 200V operation, Output Current 350/650mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:FAN7842`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/FAN7842-D.pdf
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FAN7842 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:FAN7842";
  override referencePrefix = "U";
}

/**
 * IGBT and MOSFET, AC Phase Cut, Dimmer Controller, SSOP-10
 *
 * KiCad symbol: `Driver_FET:FL5150MX`. Reference prefix: `U`.
 * Footprint filters: SSOP?10?3.9x4.9mm*1.00mm*.
 * @see https://www.onsemi.com/pub/Collateral/FL5150-D.pdf
 * Keywords: dimmer.
 * Default footprint: Package_SO:SSOP-10_3.9x4.9mm_P1.00mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FL5150MX extends Component.withPins({
  /** Physical pin 1: ZC_Monitor; input. */
  "ZC_Monitor": "1",
  /** Physical pin 2: DIM_Control; input. */
  "DIM_Control": "2",
  /** Physical pin 3: VDD; power_out. */
  "VDD": "3",
  /** Physical pin 4: DIM_Mode; input. */
  "DIM_Mode": "4",
  /** Physical pin 5: GND; power_out. */
  "GND": "5",
  /** Physical pin 6: VS; power_in. */
  "VS": "6",
  /** Physical pin 7: Low_Power; input. */
  "Low_Power": "7",
  /** Physical pin 8: OC_Sense2; input. */
  "OC_Sense2": "8",
  /** Physical pin 9: DRV_Gate; output. */
  "DRV_Gate": "9",
  /** Physical pin 10: OC_Sense1; input. */
  "OC_Sense1": "10",
}) {
  override schema = "Driver_FET:FL5150MX";
  override referencePrefix = "U";
}

/**
 * IGBT and MOSFET, AC Phase Cut, Dimmer Controller, SSOP-10
 *
 * KiCad symbol: `Driver_FET:FL5160MX`. Reference prefix: `U`.
 * Footprint filters: SSOP?10?3.9x4.9mm*1.00mm*.
 * @see https://www.onsemi.com/pub/Collateral/FL5150-D.pdf
 * Keywords: dimmer.
 * Default footprint: Package_SO:SSOP-10_3.9x4.9mm_P1.00mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FL5160MX extends Component.withPins({
  /** Physical pin 1: ZC_Monitor; input. */
  "ZC_Monitor": "1",
  /** Physical pin 2: DIM_Control; input. */
  "DIM_Control": "2",
  /** Physical pin 3: VDD; power_out. */
  "VDD": "3",
  /** Physical pin 4: DIM_Mode; input. */
  "DIM_Mode": "4",
  /** Physical pin 5: GND; power_out. */
  "GND": "5",
  /** Physical pin 6: VS; power_in. */
  "VS": "6",
  /** Physical pin 7: Low_Power; input. */
  "Low_Power": "7",
  /** Physical pin 8: OC_Sense2; input. */
  "OC_Sense2": "8",
  /** Physical pin 9: DRV_Gate; output. */
  "DRV_Gate": "9",
  /** Physical pin 10: OC_Sense1; input. */
  "OC_Sense1": "10",
}) {
  override schema = "Driver_FET:FL5160MX";
  override referencePrefix = "U";
}

/**
 * Gate Drive Optocoupler, Output Current 2.5/2.5A, PDIP-8
 *
 * KiCad symbol: `Driver_FET:HCPL-3120`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://docs.broadcom.com/docs/AV02-0161EN
 * Keywords: MOSFET Driver IGBT Driver Optocoupler.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HCPL_3120 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VEE; power_out. */
  "VEE": "5",
  /** Physical pin 6: VO; output. */
  "VO_6": "6",
  /** Physical pin 7: VO; output. */
  "VO_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Driver_FET:HCPL-3120";
  override referencePrefix = "U";
}

/**
 * Gate Drive Optocoupler, Output Current 0.4/0.4A, SOIC-16(12)
 *
 * KiCad symbol: `Driver_FET:HCPL-314J`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*12*7.5x10.3mm*P1.27mm*.
 * @see https://docs.broadcom.com/docs/AV02-0169EN
 * Keywords: MOSFET Driver IGBT Driver Optocoupler.
 * Default footprint: Package_SO:SOIC-16W-12_7.5x10.3mm_P1.27mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HCPL_314J extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: C; passive. */
  "C_3": "3",
  /** Physical pin 14: VEE; power_in. */
  "VEE_14": "14",
  /** Physical pin 15: VO; output. */
  "VO_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC_16": "16",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 7: C; passive. */
  "C_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VEE; power_in. */
  "VEE_9": "9",
  /** Physical pin 10: VO; output. */
  "VO_10": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC_11": "11",
}) {
  override schema = "Driver_FET:HCPL-314J";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 100V, DFN-8
 *
 * KiCad symbol: `Driver_FET:HIP2100_DFN`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip2/hip2100.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_4x4mm_P0.5mm_EP2.66x3.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP2100_DFN extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: HB; passive. */
  "HB": "4",
  /** Physical pin 5: HO; output. */
  "HO": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HI; input. */
  "HI": "7",
  /** Physical pin 8: LI; input. */
  "LI": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS": "11",
  /** Physical pin 12: LO; output. */
  "LO": "12",
  /** Physical pin 13: EP; output. */
  "EP": "13",
}) {
  override schema = "Driver_FET:HIP2100_DFN";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 100V, EPSOIC-8
 *
 * KiCad symbol: `Driver_FET:HIP2100_EPSOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip2/hip2100.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.514x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP2100_EPSOIC extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: HI; input. */
  "HI": "5",
  /** Physical pin 6: LI; input. */
  "LI": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: LO; output. */
  "LO": "8",
  /** Physical pin 9: EP; output. */
  "EP": "9",
}) {
  override schema = "Driver_FET:HIP2100_EPSOIC";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 100V, QFN-16
 *
 * KiCad symbol: `Driver_FET:HIP2100_QFN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.8mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip2/hip2100.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_5x5mm_P0.8mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP2100_QFN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HI; input. */
  "HI": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: LI; input. */
  "LI": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: LO; output. */
  "LO": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
  /** Physical pin 17: EP; output. */
  "EP": "17",
}) {
  override schema = "Driver_FET:HIP2100_QFN";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 100V, SOIC-8
 *
 * KiCad symbol: `Driver_FET:HIP2100_SOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip2/hip2100.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP2100_SOIC extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: HI; input. */
  "HI": "5",
  /** Physical pin 6: LI; input. */
  "LI": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: LO; output. */
  "LO": "8",
}) {
  override schema = "Driver_FET:HIP2100_SOIC";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, TTL/CMOS inputs, Output Current 2.0A, 100V, DFN-8
 *
 * KiCad symbol: `Driver_FET:HIP2101_DFN`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip2/hip2101.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_4x4mm_P0.5mm_EP2.66x3.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP2101_DFN extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: HB; passive. */
  "HB": "4",
  /** Physical pin 5: HO; output. */
  "HO": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HI; input. */
  "HI": "7",
  /** Physical pin 8: LI; input. */
  "LI": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS": "11",
  /** Physical pin 12: LO; output. */
  "LO": "12",
  /** Physical pin 13: EP; output. */
  "EP": "13",
}) {
  override schema = "Driver_FET:HIP2101_DFN";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, TTL/CMOS inputs, Output Current 2.0A, 100V, EPSOIC-8
 *
 * KiCad symbol: `Driver_FET:HIP2101_EPSOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip2/hip2101.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.514x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP2101_EPSOIC extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: HI; input. */
  "HI": "5",
  /** Physical pin 6: LI; input. */
  "LI": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: LO; output. */
  "LO": "8",
  /** Physical pin 9: EP; output. */
  "EP": "9",
}) {
  override schema = "Driver_FET:HIP2101_EPSOIC";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, TTL/CMOS inputs, Output Current 2.0A, 100V, QFN-16
 *
 * KiCad symbol: `Driver_FET:HIP2101_QFN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.8mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip2/hip2101.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_5x5mm_P0.8mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP2101_QFN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HI; input. */
  "HI": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: LI; input. */
  "LI": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: LO; output. */
  "LO": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
  /** Physical pin 17: EP; output. */
  "EP": "17",
}) {
  override schema = "Driver_FET:HIP2101_QFN";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, TTL/CMOS inputs, Output Current 2.0A, 100V, SOIC-8
 *
 * KiCad symbol: `Driver_FET:HIP2101_SOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip2/hip2101.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP2101_SOIC extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: HI; input. */
  "HI": "5",
  /** Physical pin 6: LI; input. */
  "LI": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: LO; output. */
  "LO": "8",
}) {
  override schema = "Driver_FET:HIP2101_SOIC";
  override referencePrefix = "U";
}

/**
 * High Frequency Full Bridge FET Driver, Input Comparator, 2.5A, 80V, DIP-20/SOIC-20
 *
 * KiCad symbol: `Driver_FET:HIP4080A`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip4/hip4080a.pdf
 * Keywords: Half Bridge Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP4080A extends Component.withPins({
  /** Physical pin 1: BHB; input. */
  "BHB": "1",
  /** Physical pin 2: HEN; output. */
  "HEN": "2",
  /** Physical pin 3: DIS; output. */
  "DIS": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
  /** Physical pin 6: IN+; input. */
  "IN+": "6",
  /** Physical pin 7: IN-; input. */
  "IN-": "7",
  /** Physical pin 8: HDEL; passive. */
  "HDEL": "8",
  /** Physical pin 9: LDEL; passive. */
  "LDEL": "9",
  /** Physical pin 10: AHB; input. */
  "AHB": "10",
  /** Physical pin 11: AHO; output. */
  "AHO": "11",
  /** Physical pin 12: AHS; passive. */
  "AHS": "12",
  /** Physical pin 13: ALO; output. */
  "ALO": "13",
  /** Physical pin 14: ALS; passive. */
  "ALS": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
  /** Physical pin 17: BLS; passive. */
  "BLS": "17",
  /** Physical pin 18: BLO; output. */
  "BLO": "18",
  /** Physical pin 19: BHS; passive. */
  "BHS": "19",
  /** Physical pin 20: BHO; output. */
  "BHO": "20",
}) {
  override schema = "Driver_FET:HIP4080A";
  override referencePrefix = "U";
}

/**
 * High Frequency Full Bridge FET Driver, 2.5A, 80V, DIP-20/SOIC-20
 *
 * KiCad symbol: `Driver_FET:HIP4081A`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/hip4/hip4080a.pdf
 * Keywords: Half Bridge Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP4081A extends Component.withPins({
  /** Physical pin 1: BHB; input. */
  "BHB": "1",
  /** Physical pin 2: BHI; input. */
  "BHI": "2",
  /** Physical pin 3: DIS; output. */
  "DIS": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: BLI; input. */
  "BLI": "5",
  /** Physical pin 6: ALI; input. */
  "ALI": "6",
  /** Physical pin 7: AHI; input. */
  "AHI": "7",
  /** Physical pin 8: HDEL; passive. */
  "HDEL": "8",
  /** Physical pin 9: LDEL; passive. */
  "LDEL": "9",
  /** Physical pin 10: AHB; input. */
  "AHB": "10",
  /** Physical pin 11: AHO; output. */
  "AHO": "11",
  /** Physical pin 12: AHS; passive. */
  "AHS": "12",
  /** Physical pin 13: ALO; output. */
  "ALO": "13",
  /** Physical pin 14: ALS; passive. */
  "ALS": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
  /** Physical pin 17: BLS; passive. */
  "BLS": "17",
  /** Physical pin 18: BLO; output. */
  "BLO": "18",
  /** Physical pin 19: BHS; passive. */
  "BHS": "19",
  /** Physical pin 20: BHO; output. */
  "BHO": "20",
}) {
  override schema = "Driver_FET:HIP4081A";
  override referencePrefix = "U";
}

/**
 * 80V, 1.25A Peak Current H-Bridge FET Driver, SOIC-16
 *
 * KiCad symbol: `Driver_FET:HIP4082xB`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.renesas.com/www/doc/datasheet/hip4082.pdf
 * Keywords: Driver H-bridge.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP4082xB extends Component.withPins({
  /** Physical pin 5: DEL; passive. */
  "DEL": "5",
  /** Physical pin 1: BHB; input. */
  "BHB": "1",
  /** Physical pin 2: BHI; input. */
  "BHI": "2",
  /** Physical pin 3: BLI; input. */
  "BLI": "3",
  /** Physical pin 4: ALI; input. */
  "ALI": "4",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: AHI; input. */
  "AHI": "7",
  /** Physical pin 8: DIS; input. */
  "DIS": "8",
  /** Physical pin 9: AHB; input. */
  "AHB": "9",
  /** Physical pin 10: AHO; output. */
  "AHO": "10",
  /** Physical pin 11: AHS; passive. */
  "AHS": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
  /** Physical pin 13: ALO; output. */
  "ALO": "13",
  /** Physical pin 14: BLO; output. */
  "BLO": "14",
  /** Physical pin 15: BHS; passive. */
  "BHS": "15",
  /** Physical pin 16: BHO; output. */
  "BHO": "16",
}) {
  override schema = "Driver_FET:HIP4082xB";
  override referencePrefix = "U";
}

/**
 * 80V, 1.25A Peak Current H-Bridge FET Driver, DIP-16
 *
 * KiCad symbol: `Driver_FET:HIP4082xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.renesas.com/www/doc/datasheet/hip4082.pdf
 * Keywords: Driver H-bridge.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HIP4082xP extends Component.withPins({
  /** Physical pin 5: DEL; passive. */
  "DEL": "5",
  /** Physical pin 1: BHB; input. */
  "BHB": "1",
  /** Physical pin 2: BHI; input. */
  "BHI": "2",
  /** Physical pin 3: BLI; input. */
  "BLI": "3",
  /** Physical pin 4: ALI; input. */
  "ALI": "4",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: AHI; input. */
  "AHI": "7",
  /** Physical pin 8: DIS; input. */
  "DIS": "8",
  /** Physical pin 9: AHB; input. */
  "AHB": "9",
  /** Physical pin 10: AHO; output. */
  "AHO": "10",
  /** Physical pin 11: AHS; passive. */
  "AHS": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
  /** Physical pin 13: ALO; output. */
  "ALO": "13",
  /** Physical pin 14: BLO; output. */
  "BLO": "14",
  /** Physical pin 15: BHS; passive. */
  "BHS": "15",
  /** Physical pin 16: BHO; output. */
  "BHO": "16",
}) {
  override schema = "Driver_FET:HIP4082xP";
  override referencePrefix = "U";
}

/**
 * Dual Power MOSFET Driver, V+ = 4.5..15V, V- = -15..0V, TTL/CMOS compatible inputs, SOIC-8
 *
 * KiCad symbol: `Driver_FET:ICL7667xBA`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.renesas.com/en/document/dst/icl7667-datasheet
 * Keywords: Intersil clock-driver clock-buffer DS0026 driver-array ICL7667CBAZA-T.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICL7667xBA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: ~{OUT_B}; output. */
  "~{OUT_B}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:ICL7667xBA";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 200V, 3.0/3.0A, PDIP-14
 *
 * KiCad symbol: `Driver_FET:IR2010`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2010.pdf?fileId=5546d462533600a4015355c48f901660
 * Keywords: Gate Driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2010 extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VS; passive. */
  "VS": "5",
  /** Physical pin 6: VB; passive. */
  "VB": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: HIN; input. */
  "HIN": "10",
  /** Physical pin 11: SD; input. */
  "SD": "11",
  /** Physical pin 12: LIN; input. */
  "LIN": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR2010";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 200V, 3.0/3.0A, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IR2010S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir2010.pdf?fileId=5546d462533600a4015355c48f901660
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2010S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IR2010S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 200V, 1.0/1.0A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2011`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2011.pdf?fileId=5546d462533600a4015355c49b831663
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2011 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: VB; passive. */
  "VB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: VS; passive. */
  "VS": "4",
  /** Physical pin 5: HIN; input. */
  "HIN": "5",
  /** Physical pin 6: LIN; input. */
  "LIN": "6",
  /** Physical pin 7: COM; power_in. */
  "COM": "7",
  /** Physical pin 8: LO; output. */
  "LO": "8",
}) {
  override schema = "Driver_FET:IR2011";
  override referencePrefix = "U";
}

/**
 * High Speed, 100V, Self Oscillating 50% Duty Cycle, Half-Bridge Driver, 1.0/1.0A, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2085S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2085S-DS-v01_02-EN.pdf?fileId=5546d4625b62cd8a015bb0f752184828
 * Keywords: Oscillating Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2085S extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: OSC; passive. */
  "OSC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2085S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 210/360mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2101`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2101.pdf?fileId=5546d462533600a4015355c7a755166c
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2101 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2101";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 210/360mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2102`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2101.pdf?fileId=5546d462533600a4015355c7a755166c
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2102 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: ~{HIN}; input. */
  "~{HIN}": "2",
  /** Physical pin 3: ~{LIN}; input. */
  "~{LIN}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2102";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 210/360mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2103`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2103.pdf?fileId=5546d462533600a4015355c7b54b166f
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2103 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: ~{LIN}; input. */
  "~{LIN}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2103";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 210/360mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2104`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2104.pdf?fileId=5546d462533600a4015355c7c1c31671
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2104 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2104";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 200/350mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2106`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2106.pdf?fileId=5546d462533600a4015355c7cfc51673
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2106 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2106";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 200/350mA, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IR21064`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2106.pdf?fileId=5546d462533600a4015355c7cfc51673
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR21064 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR21064";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 210/350mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2108`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2108.pdf?fileId=5546d462533600a4015355c7dc321676
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2108 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: ~{LIN}; input. */
  "~{LIN}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2108";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 210/350mA, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IR21084`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2108.pdf?fileId=5546d462533600a4015355c7dc321676
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR21084 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: ~{LIN}; input. */
  "~{LIN}": "3",
  /** Physical pin 4: DT; input. */
  "DT": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR21084";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 200/350mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2109`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2109.pdf?fileId=5546d462533600a4015355c7e85b1679
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2109 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2109";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 200/350mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR21091`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir21091.pdf?fileId=5546d462533600a4015355c7f66f167c
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR21091 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DT/SD; input. */
  "DT/SD": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR21091";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 200/350mA, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IR21094`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2109.pdf?fileId=5546d462533600a4015355c7e85b1679
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR21094 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: DT; input. */
  "DT": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR21094";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 500V, 2.0/2.0A, PDIP-14
 *
 * KiCad symbol: `Driver_FET:IR2110`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2110.pdf?fileId=5546d462533600a4015355c80333167e
 * Keywords: Gate Driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2110 extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VS; passive. */
  "VS": "5",
  /** Physical pin 6: VB; passive. */
  "VB": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: HIN; input. */
  "HIN": "10",
  /** Physical pin 11: SD; input. */
  "SD": "11",
  /** Physical pin 12: LIN; input. */
  "LIN": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR2110";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 500V, 2.0/2.0A, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IR2110S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir2110.pdf?fileId=5546d462533600a4015355c80333167e
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2110S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IR2110S";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 250/500mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2111`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2111.pdf?fileId=5546d462533600a4015355c810e51682
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2111 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2111";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 250/500mA, PDIP-14
 *
 * KiCad symbol: `Driver_FET:IR2112`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2112.pdf?fileId=5546d462533600a4015355c81cb71685
 * Keywords: Gate Driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2112 extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VS; passive. */
  "VS": "5",
  /** Physical pin 6: VB; passive. */
  "VB": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: HIN; input. */
  "HIN": "10",
  /** Physical pin 11: SD; input. */
  "SD": "11",
  /** Physical pin 12: LIN; input. */
  "LIN": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR2112";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 500V, 250/500mA, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IR2112S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir2112.pdf?fileId=5546d462533600a4015355c81cb71685
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2112S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IR2112S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 2.0/2.0A, PDIP-14
 *
 * KiCad symbol: `Driver_FET:IR2113`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2110.pdf?fileId=5546d462533600a4015355c80333167e
 * Keywords: Gate Driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2113 extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VS; passive. */
  "VS": "5",
  /** Physical pin 6: VB; passive. */
  "VB": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: HIN; input. */
  "HIN": "10",
  /** Physical pin 11: SD; input. */
  "SD": "11",
  /** Physical pin 12: LIN; input. */
  "LIN": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR2113";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 500V, 2.0/2.0A, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IR2113S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir2110.pdf?fileId=5546d462533600a4015355c80333167e
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2113S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IR2113S";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Gate Driver IC, 600V, 1.0/1.5A, SSOP-24
 *
 * KiCad symbol: `Driver_FET:IR2114S`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see https://www.infineon.com/dgdl/ir2114ss.pdf?fileId=5546d462533600a4015355c836cd168a
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2114S extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: FLT_CLR; input. */
  "FLT_CLR": "3",
  /** Physical pin 4: ~{SY_FLT}; bidirectional. */
  "~{SY_FLT}": "4",
  /** Physical pin 5: ~{FAULT/SD}; bidirectional. */
  "~{FAULT/SD}": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: SSDL; input. */
  "SSDL": "7",
  /** Physical pin 8: COM; power_in. */
  "COM": "8",
  /** Physical pin 9: LON; output. */
  "LON": "9",
  /** Physical pin 10: LOP; output. */
  "LOP": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: DSL; input. */
  "DSL": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: SSDH; input. */
  "SSDH": "18",
  /** Physical pin 19: VS; passive. */
  "VS": "19",
  /** Physical pin 20: HON; output. */
  "HON": "20",
  /** Physical pin 21: HOP; output. */
  "HOP": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: VB; passive. */
  "VB": "23",
  /** Physical pin 24: DSH; input. */
  "DSH": "24",
}) {
  override schema = "Driver_FET:IR2114S";
  override referencePrefix = "U";
}

/**
 * 600V, Vout 10-20V, PDIP-28
 *
 * KiCad symbol: `Driver_FET:IR2133`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2x33-IR2x35-DataSheet-v01_00-EN.pdf?fileId=5546d462533600a4015355c890ba169f
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2133 extends Component.withPins({
  /** Physical pin 1: ITRIP; input. */
  "ITRIP": "1",
  /** Physical pin 2: ~{FLT-CLR}; input. */
  "~{FLT-CLR}": "2",
  /** Physical pin 3: CAO; output. */
  "CAO": "3",
  /** Physical pin 4: CA-; input. */
  "CA-": "4",
  /** Physical pin 5: CA+; input. */
  "CA+": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: COM; passive. */
  "COM": "8",
  /** Physical pin 9: LO3; output. */
  "LO3": "9",
  /** Physical pin 10: LO2; output. */
  "LO2": "10",
  /** Physical pin 11: LO1; output. */
  "LO1": "11",
  /** Physical pin 12: VS3; passive. */
  "VS3": "12",
  /** Physical pin 13: HO3; output. */
  "HO3": "13",
  /** Physical pin 14: VB3; passive. */
  "VB3": "14",
  /** Physical pin 15: VS2; passive. */
  "VS2": "15",
  /** Physical pin 16: HO2; output. */
  "HO2": "16",
  /** Physical pin 17: VB2; passive. */
  "VB2": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{HIN1}; input. */
  "~{HIN1}": "22",
  /** Physical pin 23: ~{HIN2}; input. */
  "~{HIN2}": "23",
  /** Physical pin 24: ~{HIN3}; input. */
  "~{HIN3}": "24",
  /** Physical pin 25: ~{LIN1}; input. */
  "~{LIN1}": "25",
  /** Physical pin 26: ~{LIN2}; input. */
  "~{LIN2}": "26",
  /** Physical pin 27: ~{LIN3}; input. */
  "~{LIN3}": "27",
  /** Physical pin 28: ~{FAULT}; output. */
  "~{FAULT}": "28",
}) {
  override schema = "Driver_FET:IR2133";
  override referencePrefix = "U";
}

/**
 * 600V, Vout 10-20V, SOIC-28
 *
 * KiCad symbol: `Driver_FET:IR2133S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2x33-IR2x35-DataSheet-v01_00-EN.pdf?fileId=5546d462533600a4015355c890ba169f
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2133S extends Component.withPins({
  /** Physical pin 1: ITRIP; input. */
  "ITRIP": "1",
  /** Physical pin 2: ~{FLT-CLR}; input. */
  "~{FLT-CLR}": "2",
  /** Physical pin 3: CAO; output. */
  "CAO": "3",
  /** Physical pin 4: CA-; input. */
  "CA-": "4",
  /** Physical pin 5: CA+; input. */
  "CA+": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: COM; passive. */
  "COM": "8",
  /** Physical pin 9: LO3; output. */
  "LO3": "9",
  /** Physical pin 10: LO2; output. */
  "LO2": "10",
  /** Physical pin 11: LO1; output. */
  "LO1": "11",
  /** Physical pin 12: VS3; passive. */
  "VS3": "12",
  /** Physical pin 13: HO3; output. */
  "HO3": "13",
  /** Physical pin 14: VB3; passive. */
  "VB3": "14",
  /** Physical pin 15: VS2; passive. */
  "VS2": "15",
  /** Physical pin 16: HO2; output. */
  "HO2": "16",
  /** Physical pin 17: VB2; passive. */
  "VB2": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{HIN1}; input. */
  "~{HIN1}": "22",
  /** Physical pin 23: ~{HIN2}; input. */
  "~{HIN2}": "23",
  /** Physical pin 24: ~{HIN3}; input. */
  "~{HIN3}": "24",
  /** Physical pin 25: ~{LIN1}; input. */
  "~{LIN1}": "25",
  /** Physical pin 26: ~{LIN2}; input. */
  "~{LIN2}": "26",
  /** Physical pin 27: ~{LIN3}; input. */
  "~{LIN3}": "27",
  /** Physical pin 28: ~{FAULT}; output. */
  "~{FAULT}": "28",
}) {
  override schema = "Driver_FET:IR2133S";
  override referencePrefix = "U";
}

/**
 * 600V, Vout 12-20V, PDIP-28
 *
 * KiCad symbol: `Driver_FET:IR2135`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2x33-IR2x35-DataSheet-v01_00-EN.pdf?fileId=5546d462533600a4015355c890ba169f
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2135 extends Component.withPins({
  /** Physical pin 1: ITRIP; input. */
  "ITRIP": "1",
  /** Physical pin 2: ~{FLT-CLR}; input. */
  "~{FLT-CLR}": "2",
  /** Physical pin 3: CAO; output. */
  "CAO": "3",
  /** Physical pin 4: CA-; input. */
  "CA-": "4",
  /** Physical pin 5: CA+; input. */
  "CA+": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: COM; passive. */
  "COM": "8",
  /** Physical pin 9: LO3; output. */
  "LO3": "9",
  /** Physical pin 10: LO2; output. */
  "LO2": "10",
  /** Physical pin 11: LO1; output. */
  "LO1": "11",
  /** Physical pin 12: VS3; passive. */
  "VS3": "12",
  /** Physical pin 13: HO3; output. */
  "HO3": "13",
  /** Physical pin 14: VB3; passive. */
  "VB3": "14",
  /** Physical pin 15: VS2; passive. */
  "VS2": "15",
  /** Physical pin 16: HO2; output. */
  "HO2": "16",
  /** Physical pin 17: VB2; passive. */
  "VB2": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{HIN1}; input. */
  "~{HIN1}": "22",
  /** Physical pin 23: ~{HIN2}; input. */
  "~{HIN2}": "23",
  /** Physical pin 24: ~{HIN3}; input. */
  "~{HIN3}": "24",
  /** Physical pin 25: ~{LIN1}; input. */
  "~{LIN1}": "25",
  /** Physical pin 26: ~{LIN2}; input. */
  "~{LIN2}": "26",
  /** Physical pin 27: ~{LIN3}; input. */
  "~{LIN3}": "27",
  /** Physical pin 28: ~{FAULT}; output. */
  "~{FAULT}": "28",
}) {
  override schema = "Driver_FET:IR2135";
  override referencePrefix = "U";
}

/**
 * 600V, Vout 12-20V, SOIC-28
 *
 * KiCad symbol: `Driver_FET:IR2135S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2x33-IR2x35-DataSheet-v01_00-EN.pdf?fileId=5546d462533600a4015355c890ba169f
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2135S extends Component.withPins({
  /** Physical pin 1: ITRIP; input. */
  "ITRIP": "1",
  /** Physical pin 2: ~{FLT-CLR}; input. */
  "~{FLT-CLR}": "2",
  /** Physical pin 3: CAO; output. */
  "CAO": "3",
  /** Physical pin 4: CA-; input. */
  "CA-": "4",
  /** Physical pin 5: CA+; input. */
  "CA+": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: COM; passive. */
  "COM": "8",
  /** Physical pin 9: LO3; output. */
  "LO3": "9",
  /** Physical pin 10: LO2; output. */
  "LO2": "10",
  /** Physical pin 11: LO1; output. */
  "LO1": "11",
  /** Physical pin 12: VS3; passive. */
  "VS3": "12",
  /** Physical pin 13: HO3; output. */
  "HO3": "13",
  /** Physical pin 14: VB3; passive. */
  "VB3": "14",
  /** Physical pin 15: VS2; passive. */
  "VS2": "15",
  /** Physical pin 16: HO2; output. */
  "HO2": "16",
  /** Physical pin 17: VB2; passive. */
  "VB2": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{HIN1}; input. */
  "~{HIN1}": "22",
  /** Physical pin 23: ~{HIN2}; input. */
  "~{HIN2}": "23",
  /** Physical pin 24: ~{HIN3}; input. */
  "~{HIN3}": "24",
  /** Physical pin 25: ~{LIN1}; input. */
  "~{LIN1}": "25",
  /** Physical pin 26: ~{LIN2}; input. */
  "~{LIN2}": "26",
  /** Physical pin 27: ~{LIN3}; input. */
  "~{LIN3}": "27",
  /** Physical pin 28: ~{FAULT}; output. */
  "~{FAULT}": "28",
}) {
  override schema = "Driver_FET:IR2135S";
  override referencePrefix = "U";
}

/**
 * Self-Oscillating Half-Bridge Driver, 600V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2153`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2153.pdf?fileId=5546d462533600a4015355c8c5fc16af
 * Keywords: Oscillating Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2153 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RT; passive. */
  "RT": "2",
  /** Physical pin 3: CT; passive. */
  "CT": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2153";
  override referencePrefix = "U";
}

/**
 * Self-Oscillating Half-Bridge Driver, 600V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR21531`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir21531.pdf?fileId=5546d462533600a4015355c8d26316b3
 * Keywords: Oscillating Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR21531 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RT; passive. */
  "RT": "2",
  /** Physical pin 3: CT; passive. */
  "CT": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR21531";
  override referencePrefix = "U";
}

/**
 * Self-Oscillating Half-Bridge Driver, 600V, 250/500mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2155`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2155.pdf?fileId=5546d462533600a4015355c8dec316b6
 * Keywords: Oscillating Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2155 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RT; passive. */
  "RT": "2",
  /** Physical pin 3: CT; passive. */
  "CT": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2155";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 1.4/1.8A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2181`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2181.pdf?fileId=5546d462533600a4015355c93cdd16ce
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2181 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2181";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 1.4/1.8A, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IR21814`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2181.pdf?fileId=5546d462533600a4015355c93cdd16ce
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR21814 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR21814";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.4/1.8A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2183`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2183.pdf?fileId=5546d462533600a4015355c9490e16d1
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2183 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: ~{LIN}; input. */
  "~{LIN}": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2183";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.4/1.8A, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IR21834`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2183.pdf?fileId=5546d462533600a4015355c9490e16d1
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR21834 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: ~{LIN}; input. */
  "~{LIN}": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: DT; input. */
  "DT": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR21834";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.4/1.8A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2184`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2184.pdf?fileId=5546d462533600a4015355c955e616d4
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2184 extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: ~{SD}; input. */
  "~{SD}": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2184";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.4/1.8A, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IR21844`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2184.pdf?fileId=5546d462533600a4015355c955e616d4
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR21844 extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: ~{SD}; input. */
  "~{SD}": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: DT; input. */
  "DT": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR21844";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 1200V, 1.7/2.0A, PDIP-14
 *
 * KiCad symbol: `Driver_FET:IR2213`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2213-DS-v00_02-EN.pdf?fileId=5546d462533600a4015355c9621716d8
 * Keywords: Gate Driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2213 extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VS; passive. */
  "VS": "5",
  /** Physical pin 6: VB; passive. */
  "VB": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: HIN; input. */
  "HIN": "10",
  /** Physical pin 11: SD; input. */
  "SD": "11",
  /** Physical pin 12: LIN; input. */
  "LIN": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IR2213";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 1200V, 1.7/2.0A, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IR2213S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2213-DS-v00_02-EN.pdf?fileId=5546d462533600a4015355c9621716d8
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2213S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IR2213S";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Gate Driver IC, 1200V, 1.0/1.5A, SSOP-24
 *
 * KiCad symbol: `Driver_FET:IR2214S`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see https://www.infineon.com/dgdl/ir2114ss.pdf?fileId=5546d462533600a4015355c836cd168a
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2214S extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: FLT_CLR; input. */
  "FLT_CLR": "3",
  /** Physical pin 4: ~{SY_FLT}; bidirectional. */
  "~{SY_FLT}": "4",
  /** Physical pin 5: ~{FAULT/SD}; bidirectional. */
  "~{FAULT/SD}": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: SSDL; input. */
  "SSDL": "7",
  /** Physical pin 8: COM; power_in. */
  "COM": "8",
  /** Physical pin 9: LON; output. */
  "LON": "9",
  /** Physical pin 10: LOP; output. */
  "LOP": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: DSL; input. */
  "DSL": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: SSDH; input. */
  "SSDH": "18",
  /** Physical pin 19: VS; passive. */
  "VS": "19",
  /** Physical pin 20: HON; output. */
  "HON": "20",
  /** Physical pin 21: HOP; output. */
  "HOP": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: VB; passive. */
  "VB": "23",
  /** Physical pin 24: DSH; input. */
  "DSH": "24",
}) {
  override schema = "Driver_FET:IR2214S";
  override referencePrefix = "U";
}

/**
 * 1200V, Vout 10-20V, PDIP-28
 *
 * KiCad symbol: `Driver_FET:IR2233`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2x33-IR2x35-DataSheet-v01_00-EN.pdf?fileId=5546d462533600a4015355c890ba169f
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2233 extends Component.withPins({
  /** Physical pin 1: ITRIP; input. */
  "ITRIP": "1",
  /** Physical pin 2: ~{FLT-CLR}; input. */
  "~{FLT-CLR}": "2",
  /** Physical pin 3: CAO; output. */
  "CAO": "3",
  /** Physical pin 4: CA-; input. */
  "CA-": "4",
  /** Physical pin 5: CA+; input. */
  "CA+": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: COM; passive. */
  "COM": "8",
  /** Physical pin 9: LO3; output. */
  "LO3": "9",
  /** Physical pin 10: LO2; output. */
  "LO2": "10",
  /** Physical pin 11: LO1; output. */
  "LO1": "11",
  /** Physical pin 12: VS3; passive. */
  "VS3": "12",
  /** Physical pin 13: HO3; output. */
  "HO3": "13",
  /** Physical pin 14: VB3; passive. */
  "VB3": "14",
  /** Physical pin 15: VS2; passive. */
  "VS2": "15",
  /** Physical pin 16: HO2; output. */
  "HO2": "16",
  /** Physical pin 17: VB2; passive. */
  "VB2": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{HIN1}; input. */
  "~{HIN1}": "22",
  /** Physical pin 23: ~{HIN2}; input. */
  "~{HIN2}": "23",
  /** Physical pin 24: ~{HIN3}; input. */
  "~{HIN3}": "24",
  /** Physical pin 25: ~{LIN1}; input. */
  "~{LIN1}": "25",
  /** Physical pin 26: ~{LIN2}; input. */
  "~{LIN2}": "26",
  /** Physical pin 27: ~{LIN3}; input. */
  "~{LIN3}": "27",
  /** Physical pin 28: ~{FAULT}; output. */
  "~{FAULT}": "28",
}) {
  override schema = "Driver_FET:IR2233";
  override referencePrefix = "U";
}

/**
 * 1200V, Vout 10-20V, SOIC-28
 *
 * KiCad symbol: `Driver_FET:IR2233S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2x33-IR2x35-DataSheet-v01_00-EN.pdf?fileId=5546d462533600a4015355c890ba169f
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2233S extends Component.withPins({
  /** Physical pin 1: ITRIP; input. */
  "ITRIP": "1",
  /** Physical pin 2: ~{FLT-CLR}; input. */
  "~{FLT-CLR}": "2",
  /** Physical pin 3: CAO; output. */
  "CAO": "3",
  /** Physical pin 4: CA-; input. */
  "CA-": "4",
  /** Physical pin 5: CA+; input. */
  "CA+": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: COM; passive. */
  "COM": "8",
  /** Physical pin 9: LO3; output. */
  "LO3": "9",
  /** Physical pin 10: LO2; output. */
  "LO2": "10",
  /** Physical pin 11: LO1; output. */
  "LO1": "11",
  /** Physical pin 12: VS3; passive. */
  "VS3": "12",
  /** Physical pin 13: HO3; output. */
  "HO3": "13",
  /** Physical pin 14: VB3; passive. */
  "VB3": "14",
  /** Physical pin 15: VS2; passive. */
  "VS2": "15",
  /** Physical pin 16: HO2; output. */
  "HO2": "16",
  /** Physical pin 17: VB2; passive. */
  "VB2": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{HIN1}; input. */
  "~{HIN1}": "22",
  /** Physical pin 23: ~{HIN2}; input. */
  "~{HIN2}": "23",
  /** Physical pin 24: ~{HIN3}; input. */
  "~{HIN3}": "24",
  /** Physical pin 25: ~{LIN1}; input. */
  "~{LIN1}": "25",
  /** Physical pin 26: ~{LIN2}; input. */
  "~{LIN2}": "26",
  /** Physical pin 27: ~{LIN3}; input. */
  "~{LIN3}": "27",
  /** Physical pin 28: ~{FAULT}; output. */
  "~{FAULT}": "28",
}) {
  override schema = "Driver_FET:IR2233S";
  override referencePrefix = "U";
}

/**
 * 1200V, Vout 12-20V, PDIP-28
 *
 * KiCad symbol: `Driver_FET:IR2235`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2x33-IR2x35-DataSheet-v01_00-EN.pdf?fileId=5546d462533600a4015355c890ba169f
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2235 extends Component.withPins({
  /** Physical pin 1: ITRIP; input. */
  "ITRIP": "1",
  /** Physical pin 2: ~{FLT-CLR}; input. */
  "~{FLT-CLR}": "2",
  /** Physical pin 3: CAO; output. */
  "CAO": "3",
  /** Physical pin 4: CA-; input. */
  "CA-": "4",
  /** Physical pin 5: CA+; input. */
  "CA+": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: COM; passive. */
  "COM": "8",
  /** Physical pin 9: LO3; output. */
  "LO3": "9",
  /** Physical pin 10: LO2; output. */
  "LO2": "10",
  /** Physical pin 11: LO1; output. */
  "LO1": "11",
  /** Physical pin 12: VS3; passive. */
  "VS3": "12",
  /** Physical pin 13: HO3; output. */
  "HO3": "13",
  /** Physical pin 14: VB3; passive. */
  "VB3": "14",
  /** Physical pin 15: VS2; passive. */
  "VS2": "15",
  /** Physical pin 16: HO2; output. */
  "HO2": "16",
  /** Physical pin 17: VB2; passive. */
  "VB2": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{HIN1}; input. */
  "~{HIN1}": "22",
  /** Physical pin 23: ~{HIN2}; input. */
  "~{HIN2}": "23",
  /** Physical pin 24: ~{HIN3}; input. */
  "~{HIN3}": "24",
  /** Physical pin 25: ~{LIN1}; input. */
  "~{LIN1}": "25",
  /** Physical pin 26: ~{LIN2}; input. */
  "~{LIN2}": "26",
  /** Physical pin 27: ~{LIN3}; input. */
  "~{LIN3}": "27",
  /** Physical pin 28: ~{FAULT}; output. */
  "~{FAULT}": "28",
}) {
  override schema = "Driver_FET:IR2235";
  override referencePrefix = "U";
}

/**
 * 1200V, Vout 12-20V, SOIC-28
 *
 * KiCad symbol: `Driver_FET:IR2235S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IR2x33-IR2x35-DataSheet-v01_00-EN.pdf?fileId=5546d462533600a4015355c890ba169f
 * Keywords: 3 Phase Gate Driver.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2235S extends Component.withPins({
  /** Physical pin 1: ITRIP; input. */
  "ITRIP": "1",
  /** Physical pin 2: ~{FLT-CLR}; input. */
  "~{FLT-CLR}": "2",
  /** Physical pin 3: CAO; output. */
  "CAO": "3",
  /** Physical pin 4: CA-; input. */
  "CA-": "4",
  /** Physical pin 5: CA+; input. */
  "CA+": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: COM; passive. */
  "COM": "8",
  /** Physical pin 9: LO3; output. */
  "LO3": "9",
  /** Physical pin 10: LO2; output. */
  "LO2": "10",
  /** Physical pin 11: LO1; output. */
  "LO1": "11",
  /** Physical pin 12: VS3; passive. */
  "VS3": "12",
  /** Physical pin 13: HO3; output. */
  "HO3": "13",
  /** Physical pin 14: VB3; passive. */
  "VB3": "14",
  /** Physical pin 15: VS2; passive. */
  "VS2": "15",
  /** Physical pin 16: HO2; output. */
  "HO2": "16",
  /** Physical pin 17: VB2; passive. */
  "VB2": "17",
  /** Physical pin 18: VS1; passive. */
  "VS1": "18",
  /** Physical pin 19: HO1; output. */
  "HO1": "19",
  /** Physical pin 20: VB1; passive. */
  "VB1": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{HIN1}; input. */
  "~{HIN1}": "22",
  /** Physical pin 23: ~{HIN2}; input. */
  "~{HIN2}": "23",
  /** Physical pin 24: ~{HIN3}; input. */
  "~{HIN3}": "24",
  /** Physical pin 25: ~{LIN1}; input. */
  "~{LIN1}": "25",
  /** Physical pin 26: ~{LIN2}; input. */
  "~{LIN2}": "26",
  /** Physical pin 27: ~{LIN3}; input. */
  "~{LIN3}": "27",
  /** Physical pin 28: ~{FAULT}; output. */
  "~{FAULT}": "28",
}) {
  override schema = "Driver_FET:IR2235S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 200/350mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2301`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2301.pdf?fileId=5546d462533600a4015355c97bb216dc
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2301 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2301";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 200/350mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2302`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2302.pdf?fileId=5546d462533600a4015355c988b216de
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2302 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2302";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 60/130mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2304`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2304.pdf?fileId=5546d462533600a4015355c9954a16e0
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2304 extends Component.withPins({
  /** Physical pin 1: LIN; input. */
  "LIN": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2304";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 200/350mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR2308`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2308.pdf?fileId=5546d462533600a4015355c9a2b816e2
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR2308 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR2308";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 210/360mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR25602S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir25602.pdf?fileId=5546d462533600a4015355c9d6c216eb
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR25602S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR25602S";
  override referencePrefix = "U";
}

/**
 * Self-Oscillating Half-Bridge Driver, 600V, 180/260mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR25603`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir25603.pdf?fileId=5546d462533600a4015355c9e46716ef
 * Keywords: Oscillating Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR25603 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RT; passive. */
  "RT": "2",
  /** Physical pin 3: CT; passive. */
  "CT": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR25603";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 200/350mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR25604S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir25604.pdf?fileId=5546d462533600a4015355c9f1ca16f1
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR25604S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR25604S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 2.0/2.0A, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IR25607S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir25607.pdf?fileId=5546d462533600a4015355ca0e7916f5
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR25607S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IR25607S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 700V, 200/350mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR7106S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir7106s.pdf?fileId=5546d462533600a4015355d61a06182a
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR7106S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR7106S";
  override referencePrefix = "U";
}

/**
 * 700V Half-Bridge Driver, 1.9/2.3A, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR7184S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir7184s.pdf?fileId=5546d462533600a4015355d62230182c
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR7184S extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: ~{SD}; input. */
  "~{SD}": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR7184S";
  override referencePrefix = "U";
}

/**
 * 700V Half-Bridge Driver, 60/130mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IR7304S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir7304s.pdf?fileId=5546d462533600a4015355d62a63182e
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR7304S extends Component.withPins({
  /** Physical pin 1: LIN; input. */
  "LIN": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IR7304S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 200V, 200/420mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2001`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2001pbf.pdf?fileId=5546d462533600a401535675a760277e
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2001 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2001";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 200V, 290/600mA, MLPQ-14
 *
 * KiCad symbol: `Driver_FET:IRS2001M`. Reference prefix: `U`.
 * Footprint filters: Infineon*MLPQ*EP*4x4mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/irs2001mpbf.pdf?fileId=5546d462533600a4015356759e20277c
 * Keywords: Gate Driver.
 * Default footprint: Package_DFN_QFN:Infineon_MLPQ-16-14-1EP_4x4mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2001M extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: COM; passive. */
  "COM_17": "17",
}) {
  override schema = "Driver_FET:IRS2001M";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 200V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2003`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2003pbf.pdf?fileId=5546d462533600a401535675afec2780
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2003 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: ~{LIN}; input. */
  "~{LIN}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2003";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 200V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2004`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2004pbf.pdf?fileId=5546d462533600a401535675b86b2782
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2004 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2004";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 200V, 290/600mA, MLPQ-14
 *
 * KiCad symbol: `Driver_FET:IRS2005M`. Reference prefix: `U`.
 * Footprint filters: Infineon*MLPQ*EP*4x4mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IRS2005S-DS-v02_00-EN.pdf?fileId=5546d462533600a4015364c4246229e1
 * Keywords: Gate Driver.
 * Default footprint: Package_DFN_QFN:Infineon_MLPQ-16-14-1EP_4x4mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2005M extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: COM; passive. */
  "COM_17": "17",
}) {
  override schema = "Driver_FET:IRS2005M";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 200V, 290/600mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2005S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IRS2005S-DS-v02_00-EN.pdf?fileId=5546d462533600a4015364c4246229e1
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2005S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2005S";
  override referencePrefix = "U";
}

/**
 * 200-V Half-Bridge Driver With Shutdown Input, 200V, 290/600mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2008S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IRS2008S-DS-v01_00-EN.pdf?fileId=5546d46259d9a4bf015a3e76b6361c1a
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2008S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2008S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 200V, 1.0/1.0A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2011`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2011pbf.pdf?fileId=5546d462533600a401535675c19f2784
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2011 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: VB; passive. */
  "VB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: VS; passive. */
  "VS": "4",
  /** Physical pin 5: HIN; input. */
  "HIN": "5",
  /** Physical pin 6: LIN; input. */
  "LIN": "6",
  /** Physical pin 7: COM; power_in. */
  "COM": "7",
  /** Physical pin 8: LO; output. */
  "LO": "8",
}) {
  override schema = "Driver_FET:IRS2011";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2101`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/ir2101.pdf?fileId=5546d462533600a4015355c7a755166c
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2101 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2101";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2103`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2103.pdf?fileId=5546d462533600a4015356762b71279f
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2103 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: ~{LIN}; input. */
  "~{LIN}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2103";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2104`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2104.pdf?fileId=5546d462533600a40153567633f727a1
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2104 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2104";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2106`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2106.pdf?fileId=5546d462533600a4015356763aa527a3
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2106 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2106";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 290/600mA, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IRS21064`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2106.pdf?fileId=5546d462533600a4015356763aa527a3
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21064 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS21064";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2108`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2108.pdf?fileId=5546d462533600a40153567649d627a8
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2108 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: ~{LIN}; input. */
  "~{LIN}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2108";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IRS21084`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2108.pdf?fileId=5546d462533600a40153567649d627a8
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21084 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: ~{LIN}; input. */
  "~{LIN}": "3",
  /** Physical pin 4: DT; input. */
  "DT": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS21084";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2109`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2109.pdf?fileId=5546d462533600a401535676508f27ab
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2109 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2109";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS21091`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs21091.pdf?fileId=5546d462533600a401535676573d27ae
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21091 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: DT/SD; input. */
  "DT/SD": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS21091";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS21094`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2109.pdf?fileId=5546d462533600a401535676508f27ab
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21094 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: DT; input. */
  "DT": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: LO; output. */
  "LO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS21094";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 500V, 2.0/2.0A, PDIP-14
 *
 * KiCad symbol: `Driver_FET:IRS2110`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2110.pdf?fileId=5546d462533600a40153567660ff27b0
 * Keywords: Gate Driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2110 extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VS; passive. */
  "VS": "5",
  /** Physical pin 6: VB; passive. */
  "VB": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: HIN; input. */
  "HIN": "10",
  /** Physical pin 11: SD; input. */
  "SD": "11",
  /** Physical pin 12: LIN; input. */
  "LIN": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS2110";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 500V, 2.0/2.0A, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IRS2110S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irs2110.pdf?fileId=5546d462533600a40153567660ff27b0
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2110S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IRS2110S";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2111`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2111pbf.pdf?fileId=5546d462533600a401535676679b27b3
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2111 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2111";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 290/600mA, PDIP-14
 *
 * KiCad symbol: `Driver_FET:IRS2112`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2112pbf.pdf?fileId=5546d462533600a401535676702827b5
 * Keywords: Gate Driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2112 extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VS; passive. */
  "VS": "5",
  /** Physical pin 6: VB; passive. */
  "VB": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: HIN; input. */
  "HIN": "10",
  /** Physical pin 11: SD; input. */
  "SD": "11",
  /** Physical pin 12: LIN; input. */
  "LIN": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS2112";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 500V, 290/600mA, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IRS2112S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irs2112pbf.pdf?fileId=5546d462533600a401535676702827b5
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2112S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IRS2112S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 2.0/2.0A, PDIP-14
 *
 * KiCad symbol: `Driver_FET:IRS2113`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2110.pdf?fileId=5546d462533600a40153567660ff27b0
 * Keywords: Gate Driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2113 extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VS; passive. */
  "VS": "5",
  /** Physical pin 6: VB; passive. */
  "VB": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: HIN; input. */
  "HIN": "10",
  /** Physical pin 11: SD; input. */
  "SD": "11",
  /** Physical pin 12: LIN; input. */
  "LIN": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS2113";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side Driver, 600V, 2.5/2.5A, MLPQ-14
 *
 * KiCad symbol: `Driver_FET:IRS2113M`. Reference prefix: `U`.
 * Footprint filters: Infineon*MLPQ*EP*4x4mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/irs2113mpbf.pdf?fileId=5546d462533600a40153567676a227b7
 * Keywords: Gate Driver.
 * Default footprint: Package_DFN_QFN:Infineon_MLPQ-16-14-1EP_4x4mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2113M extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: SD; input. */
  "SD": "3",
  /** Physical pin 4: LIN; input. */
  "LIN": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: COM; power_in. */
  "COM_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: VS; passive. */
  "VS": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: HO; output. */
  "HO": "14",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: COM; passive. */
  "COM_17": "17",
}) {
  override schema = "Driver_FET:IRS2113M";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 500V, 2.0/2.0A, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:IRS2113S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irs2110.pdf?fileId=5546d462533600a40153567660ff27b0
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2113S extends Component.withPins({
  /** Physical pin 1: LO; output. */
  "LO": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: VB; passive. */
  "VB": "7",
  /** Physical pin 8: HO; output. */
  "HO": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: HIN; input. */
  "HIN": "12",
  /** Physical pin 13: SD; input. */
  "SD": "13",
  /** Physical pin 14: LIN; input. */
  "LIN": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
  override schema = "Driver_FET:IRS2113S";
  override referencePrefix = "U";
}

/**
 * Self-Oscillating Half-Bridge Driver IC, 600V, 180/260mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS21531D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2153d.pdf?fileId=5546d462533600a401535676951e27c3
 * Keywords: Oscillating Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21531D extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RT; passive. */
  "RT": "2",
  /** Physical pin 3: CT; passive. */
  "CT": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS21531D";
  override referencePrefix = "U";
}

/**
 * Self-Oscillating Half-Bridge Driver IC, 600V, 180/260mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2153D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2153d.pdf?fileId=5546d462533600a401535676951e27c3
 * Keywords: Oscillating Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2153D extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RT; passive. */
  "RT": "2",
  /** Physical pin 3: CT; passive. */
  "CT": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2153D";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 1.4/1.8A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2181`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2181.pdf?fileId=5546d462533600a401535676c12b27d3
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2181 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2181";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 1.4/1.8A, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IRS21814`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2181.pdf?fileId=5546d462533600a401535676c12b27d3
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21814 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS21814";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side Driver, 600V, 1.9/2.3A, MLPQ-14
 *
 * KiCad symbol: `Driver_FET:IRS21814M`. Reference prefix: `U`.
 * Footprint filters: Infineon*MLPQ*EP*4x4mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/irs21814mpbf.pdf?fileId=5546d462533600a401535676c8a827d6
 * Keywords: Gate Driver.
 * Default footprint: Package_DFN_QFN:Infineon_MLPQ-16-14-1EP_4x4mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21814M extends Component.withPins({
  /** Physical pin 1: LIN; input. */
  "LIN": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: COM; power_in. */
  "COM_4": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 16: HIN; input. */
  "HIN": "16",
  /** Physical pin 17: COM; passive. */
  "COM_17": "17",
}) {
  override schema = "Driver_FET:IRS21814M";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.4/1.8A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2183`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2183.pdf?fileId=5546d462533600a401535676d20c27d8
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2183 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: ~{LIN}; input. */
  "~{LIN}": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2183";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.4/1.8A, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IRS21834`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2183.pdf?fileId=5546d462533600a401535676d20c27d8
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21834 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: ~{LIN}; input. */
  "~{LIN}": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: DT; input. */
  "DT": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS21834";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.4/1.8A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2184`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2184.pdf?fileId=5546d462533600a401535676d8da27db
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2184 extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: ~{SD}; input. */
  "~{SD}": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2184";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.4/1.8A, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IRS21844`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2184.pdf?fileId=5546d462533600a401535676d8da27db
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21844 extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: ~{SD}; input. */
  "~{SD}": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: DT; input. */
  "DT": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS21844";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 1.9/2.3A, MLPQ-14
 *
 * KiCad symbol: `Driver_FET:IRS21844M`. Reference prefix: `U`.
 * Footprint filters: Infineon*MLPQ*EP*4x4mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/irs21844mpbf.pdf?fileId=5546d462533600a401535676dfb027de
 * Keywords: Gate Driver.
 * Default footprint: Package_DFN_QFN:Infineon_MLPQ-16-14-1EP_4x4mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21844M extends Component.withPins({
  /** Physical pin 1: ~{SD}; input. */
  "~{SD}": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: DT; input. */
  "DT": "3",
  /** Physical pin 4: COM; power_in. */
  "COM_4": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 16: IN; input. */
  "IN": "16",
  /** Physical pin 17: COM; passive. */
  "COM_17": "17",
}) {
  override schema = "Driver_FET:IRS21844M";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 4A, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2186`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2186pbf.pdf?fileId=5546d462533600a40153567716c427ed
 * Keywords: gate driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2186 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2186";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 4A, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Driver_FET:IRS21864`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2186pbf.pdf?fileId=5546d462533600a40153567716c427ed
 * Keywords: gate driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21864 extends Component.withPins({
  /** Physical pin 1: HIN; input. */
  "HIN": "1",
  /** Physical pin 2: LIN; input. */
  "LIN": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS; passive. */
  "VS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: VB; passive. */
  "VB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:IRS21864";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 4.0/4.0A, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS21867S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.infineon.com/dgdl/irs21867spbf.pdf?fileId=5546d462533600a4015356770e8327eb
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS21867S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS21867S";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 200/350mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2301S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irs2301pbf.pdf?fileId=5546d462533600a40153567a7ec527fe
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2301S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2301S";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 200/350mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2302S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IRS2302-DS-v02_01-EN.pdf?fileId=5546d462533600a40153567a87382800
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2302S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2302S";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2304`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2304spbf.pdf?fileId=5546d462533600a40153567a8fe72802
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2304 extends Component.withPins({
  /** Physical pin 1: LIN; input. */
  "LIN": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2304";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 290/600mA, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS2308`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/irs2308.pdf?fileId=5546d462533600a40153567a98ac2804
 * Keywords: Gate Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2308 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS2308";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver, 600V, 200/350mA, SOIC-8
 *
 * KiCad symbol: `Driver_FET:IRS25606S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir25606.pdf?fileId=5546d462533600a4015355ca002316f3
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS25606S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: COM; power_in. */
  "COM": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: VS; passive. */
  "VS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: VB; passive. */
  "VB": "8",
}) {
  override schema = "Driver_FET:IRS25606S";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Driver with Overcurrent Protection, 600V, 220/480mA, SOIC-14
 *
 * KiCad symbol: `Driver_FET:IRS2890DS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IRS2890DS-DS-v01_00-EN.pdf?fileId=5546d4625a888733015aad6fbc8a4bf4
 * Keywords: Gate Driver.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2890DS extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: HIN; input. */
  "HIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: ITRIP; passive. */
  "ITRIP": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: RFE; open_collector. */
  "RFE": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: LO; output. */
  "LO": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: VS; passive. */
  "VS": "12",
  /** Physical pin 13: HO; output. */
  "HO": "13",
  /** Physical pin 14: VB; passive. */
  "VB": "14",
}) {
  override schema = "Driver_FET:IRS2890DS";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch for Industrial Applications, Four Channels, Rds 90mΩ, SOIC-20W
 *
 * KiCad symbol: `Driver_FET:ITS724G`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ITS724G-DS-v01_01-en.pdf?fileId=db3a304412b407950112b428d6083e90
 * Keywords: driver fet quad.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITS724G extends Component.withPins({
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
  override schema = "Driver_FET:ITS724G";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch for Industrial Applications, Four Channels, Rds 200mΩ, SOIC-20W
 *
 * KiCad symbol: `Driver_FET:ITS711L1`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ITS711L1-DS-v01_03-en.pdf?fileId=db3a30432239cccd0122e560bae03c62
 * Keywords: driver fet quad.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITS711L1 extends Component.withPins({
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
  override schema = "Driver_FET:ITS711L1";
  override referencePrefix = "U";
}

/**
 * Smart High-Side Power Switch for Industrial Applications, Four Channels, Rds 140mΩ, SOIC-20W
 *
 * KiCad symbol: `Driver_FET:ITS716G`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ITS716G-DS-v01_01-en.pdf?fileId=db3a304412b407950112b428c2cf3e6d
 * Keywords: driver fet quad.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITS716G extends Component.withPins({
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
  override schema = "Driver_FET:ITS716G";
  override referencePrefix = "U";
}

/**
 * High voltage high and low-side 4 A gate driver, SO-14
 *
 * KiCad symbol: `Driver_FET:L6491`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x8.65mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/l6491.pdf
 * Keywords: fet driver.
 * Default footprint: Package_SO:SO-14_3.9x8.65mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6491 extends Component.withPins({
  /** Physical pin 1: ~{LIN}; input. */
  "~{LIN}": "1",
  /** Physical pin 2: ~{SD}/OD; input. */
  "~{SD}/OD": "2",
  /** Physical pin 3: HIN; input. */
  "HIN": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: DT; input. */
  "DT": "5",
  /** Physical pin 6: SGND; power_in. */
  "SGND": "6",
  /** Physical pin 7: PGND; power_in. */
  "PGND": "7",
  /** Physical pin 8: LVG; output. */
  "LVG": "8",
  /** Physical pin 9: CP-; input. */
  "CP-": "9",
  /** Physical pin 10: CP+; input. */
  "CP+": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC": "11",
  /** Physical pin 12: OUT; input. */
  "OUT": "12",
  /** Physical pin 13: HVG; output. */
  "HVG": "13",
  /** Physical pin 14: BOOT; passive. */
  "BOOT": "14",
}) {
  override schema = "Driver_FET:L6491";
  override referencePrefix = "U";
}

/**
 * High and Low Side Driver, 600V, 4.5/4.5A, SO-8
 *
 * KiCad symbol: `Driver_FET:LF2190N`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.littelfuse.com/media?resourcetype=datasheets&itemid=4c945cfe-ef54-4349-b2fb-9c1330d8240c&filename=littelfuse-gate-drivers-lf2190ntr-datasheet
 * Keywords: ixys littelfuse boosted bootstrapped dual.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF2190N extends Component.withPins({
  /** Physical pin 1: HIN; passive. */
  "HIN": "1",
  /** Physical pin 2: LIN; passive. */
  "LIN": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: LO; output. */
  "LO": "4",
  /** Physical pin 5: V_{CC}; power_in. */
  "V_{CC}": "5",
  /** Physical pin 6: V_{S}; passive. */
  "V_{S}": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: V_{B}; passive. */
  "V_{B}": "8",
}) {
  override schema = "Driver_FET:LF2190N";
  override referencePrefix = "U";
}

/**
 * 107-V, 0.5-A, 0.8-A Half-Bridge Driver with 5-V UVLO and Integrated Bootstrap Diode, SOIC-8
 *
 * KiCad symbol: `Driver_FET:LM2105D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27*.
 * @see https://www.ti.com/lit/ds/symlink/lm2105.pdf
 * Keywords: gate driver bootstrap half bridge.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2105D extends Component.withPins({
  /** Physical pin 1: GVDD; power_in. */
  "GVDD": "1",
  /** Physical pin 2: INH; input. */
  "INH": "2",
  /** Physical pin 3: INL; input. */
  "INL": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: GL; output. */
  "GL": "5",
  /** Physical pin 6: SH; passive. */
  "SH": "6",
  /** Physical pin 7: GH; output. */
  "GH": "7",
  /** Physical pin 8: BST; passive. */
  "BST": "8",
}) {
  override schema = "Driver_FET:LM2105D";
  override referencePrefix = "U";
}

/**
 * 107-V, 0.5-A, 0.8-A Half-Bridge Driver with 5-V UVLO and Integrated Bootstrap Diode, WSON-8-1EP
 *
 * KiCad symbol: `Driver_FET:LM2105DSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm2105.pdf
 * Keywords: gate driver bootstrap half bridge.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2105DSG extends Component.withPins({
  /** Physical pin 1: GVDD; power_in. */
  "GVDD": "1",
  /** Physical pin 2: INH; input. */
  "INH": "2",
  /** Physical pin 3: INL; input. */
  "INL": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GL; output. */
  "GL": "5",
  /** Physical pin 6: SH; passive. */
  "SH": "6",
  /** Physical pin 7: GH; output. */
  "GH": "7",
  /** Physical pin 8: BST; passive. */
  "BST": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:LM2105DSG";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Gate Driver, Output Current 1.8A, 100V, WSON-10
 *
 * KiCad symbol: `Driver_FET:LM5106SD`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*4x4mm*P0.8mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm5106.pdf
 * Keywords: High-Voltage Texas.
 * Default footprint: Package_SON:WSON-10-1EP_4x4mm_P0.8mm_EP2.6x3mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5106SD extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: RDT; passive. */
  "RDT": "6",
  /** Physical pin 7: EN; input. */
  "EN": "7",
  /** Physical pin 8: IN; input. */
  "IN": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS": "9",
  /** Physical pin 10: LO; output. */
  "LO": "10",
  /** Physical pin 11: EP; passive. */
  "EP": "11",
}) {
  override schema = "Driver_FET:LM5106SD";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Gate Driver, Output Current 1.0A, 100V, SOIC-8
 *
 * KiCad symbol: `Driver_FET:LM5109MA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5109.pdf
 * Keywords: Half-Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5109MA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HI; input. */
  "HI": "2",
  /** Physical pin 3: LI; input. */
  "LI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: HB; passive. */
  "HB": "8",
}) {
  override schema = "Driver_FET:LM5109MA";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Gate Driver, Output Current 1.0A, 100V, SOIC-8
 *
 * KiCad symbol: `Driver_FET:LM5109AMA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5109a.pdf
 * Keywords: Half-Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5109AMA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HI; input. */
  "HI": "2",
  /** Physical pin 3: LI; input. */
  "LI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: HB; passive. */
  "HB": "8",
}) {
  override schema = "Driver_FET:LM5109AMA";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Gate Driver, Output Current 1.0A, 100V, WSON-8
 *
 * KiCad symbol: `Driver_FET:LM5109ASD`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*4x4mm*P0.8mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5109a.pdf
 * Keywords: Half-Bridge Gate Driver.
 * Default footprint: Package_SON:WSON-8-1EP_4x4mm_P0.8mm_EP2.6x3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5109ASD extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HI; input. */
  "HI": "2",
  /** Physical pin 3: LI; input. */
  "LI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS_4": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: HB; passive. */
  "HB": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
  override schema = "Driver_FET:LM5109ASD";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Gate Driver, Output Current 1.0A, 100V, SOIC-8
 *
 * KiCad symbol: `Driver_FET:LM5109BMA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5109b.pdf
 * Keywords: Half-Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5109BMA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HI; input. */
  "HI": "2",
  /** Physical pin 3: LI; input. */
  "LI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: HB; passive. */
  "HB": "8",
}) {
  override schema = "Driver_FET:LM5109BMA";
  override referencePrefix = "U";
}

/**
 * Half-Bridge Gate Driver, Output Current 1.0A, 100V, WSON-8
 *
 * KiCad symbol: `Driver_FET:LM5109BSD`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*4x4mm*P0.8mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm5109b.pdf
 * Keywords: Half-Bridge Gate Driver.
 * Default footprint: Package_SON:WSON-8-1EP_4x4mm_P0.8mm_EP2.6x3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5109BSD extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HI; input. */
  "HI": "2",
  /** Physical pin 3: LI; input. */
  "LI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS_4": "4",
  /** Physical pin 5: LO; output. */
  "LO": "5",
  /** Physical pin 6: HS; passive. */
  "HS": "6",
  /** Physical pin 7: HO; output. */
  "HO": "7",
  /** Physical pin 8: HB; passive. */
  "HB": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
  override schema = "Driver_FET:LM5109BSD";
  override referencePrefix = "U";
}

/**
 * 5-V, 7-A, 5-A Low-Side GaN and MOSFET Driver For 1-ns Pulse Width, DSBGA-6
 *
 * KiCad symbol: `Driver_FET:LMG1020YFF`. Reference prefix: `U`.
 * Footprint filters: Texas?DSBGA?6?0.855x1.255mm?Layout2x3?P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/lmg1020.pdf
 * Keywords: gan hemt gate driver low side fast rise time.
 * Default footprint: Package_BGA:Texas_DSBGA-6_0.855x1.255mm_Layout2x3_P0.4mm_LevelB.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMG1020YFF extends Component.withPins({
  /** Physical pin A1: V_{DD}; power_in. */
  "V_{DD}": "A1",
  /** Physical pin A2: OUTH; output. */
  "OUTH": "A2",
  /** Physical pin B1: GND; power_in. */
  "GND": "B1",
  /** Physical pin B2: OUTL; output. */
  "OUTL": "B2",
  /** Physical pin C1: IN+; input. */
  "IN+": "C1",
  /** Physical pin C2: IN-; input. */
  "IN-": "C2",
}) {
  override schema = "Driver_FET:LMG1020YFF";
  override referencePrefix = "U";
}

/**
 * High-side, N-Channel, Mosfet driver, 80V input, -40°C to +85°C, MSOP-8
 *
 * KiCad symbol: `Driver_FET:LTC4440EMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4440fb.pdf
 * Keywords: high-side mosfet-driver.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.68x1.88mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4440EMS8 extends Component.withPins({
  /** Physical pin 1: INP; input. */
  "INP": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: BOOST; input. */
  "BOOST": "6",
  /** Physical pin 7: TG; output. */
  "TG": "7",
  /** Physical pin 8: TS; input. */
  "TS": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
  override schema = "Driver_FET:LTC4440EMS8";
  override referencePrefix = "U";
}

/**
 * High-side, N-Channel, Mosfet driver, 80V input, -40°C to +85°C, SOT23-6
 *
 * KiCad symbol: `Driver_FET:LTC4440ES6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4440fb.pdf
 * Keywords: high-side mosfet-driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4440ES6 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: INP; input. */
  "INP": "3",
  /** Physical pin 4: TS; input. */
  "TS": "4",
  /** Physical pin 5: TG; output. */
  "TG": "5",
  /** Physical pin 6: BOOST; input. */
  "BOOST": "6",
}) {
  override schema = "Driver_FET:LTC4440ES6";
  override referencePrefix = "U";
}

/**
 * High-side, N-Channel, Mosfet driver, 80V input, -40°C to +125°C, MSOP-8
 *
 * KiCad symbol: `Driver_FET:LTC4440IMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4440fb.pdf
 * Keywords: high-side mosfet-driver.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.68x1.88mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4440IMS8 extends Component.withPins({
  /** Physical pin 1: INP; input. */
  "INP": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: BOOST; input. */
  "BOOST": "6",
  /** Physical pin 7: TG; output. */
  "TG": "7",
  /** Physical pin 8: TS; input. */
  "TS": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
  override schema = "Driver_FET:LTC4440IMS8";
  override referencePrefix = "U";
}

/**
 * High-side, N-Channel, Mosfet driver, 80V input, -40°C to +85°C, SOT23-6
 *
 * KiCad symbol: `Driver_FET:LTC4440IS6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4440fb.pdf
 * Keywords: high-side mosfet-driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4440IS6 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: INP; input. */
  "INP": "3",
  /** Physical pin 4: TS; input. */
  "TS": "4",
  /** Physical pin 5: TG; output. */
  "TG": "5",
  /** Physical pin 6: BOOST; input. */
  "BOOST": "6",
}) {
  override schema = "Driver_FET:LTC4440IS6";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 175V, CMOS Input, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX15012AxSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX15012-MAX15013B.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX15012AxSA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: BST; power_in. */
  "BST": "2",
  /** Physical pin 3: DH; output. */
  "DH": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: IN_H; input. */
  "IN_H": "5",
  /** Physical pin 6: IN_L; input. */
  "IN_L": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DL; output. */
  "DL": "8",
}) {
  override schema = "Driver_FET:MAX15012AxSA";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 175V, CMOS Input, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX15012BxSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX15012-MAX15013B.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX15012BxSA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: BST; power_in. */
  "BST": "2",
  /** Physical pin 3: DH; output. */
  "DH": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: IN_H; input. */
  "IN_H": "5",
  /** Physical pin 6: ~{IN_L}; input. */
  "~{IN_L}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DL; output. */
  "DL": "8",
}) {
  override schema = "Driver_FET:MAX15012BxSA";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 175V, CMOS Input, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX15012CxSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX15012-MAX15013B.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.514x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX15012CxSA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: BST; power_in. */
  "BST": "2",
  /** Physical pin 3: DH; output. */
  "DH": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: IN_H; input. */
  "IN_H": "5",
  /** Physical pin 6: IN_L; input. */
  "IN_L": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DL; output. */
  "DL": "8",
  /** Physical pin 9: EP; output. */
  "EP": "9",
}) {
  override schema = "Driver_FET:MAX15012CxSA";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 175V, CMOS Input, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX15012DxSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX15012-MAX15013B.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.514x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX15012DxSA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: BST; power_in. */
  "BST": "2",
  /** Physical pin 3: DH; output. */
  "DH": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: IN_H; input. */
  "IN_H": "5",
  /** Physical pin 6: ~{IN_L}; input. */
  "~{IN_L}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DL; output. */
  "DL": "8",
  /** Physical pin 9: EP; output. */
  "EP": "9",
}) {
  override schema = "Driver_FET:MAX15012DxSA";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 175V, TTL Input, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX15013AxSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX15012-MAX15013B.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX15013AxSA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: BST; power_in. */
  "BST": "2",
  /** Physical pin 3: DH; output. */
  "DH": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: IN_H; input. */
  "IN_H": "5",
  /** Physical pin 6: IN_L; input. */
  "IN_L": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DL; output. */
  "DL": "8",
}) {
  override schema = "Driver_FET:MAX15013AxSA";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 175V, TTL Input, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX15013BxSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX15012-MAX15013B.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX15013BxSA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: BST; power_in. */
  "BST": "2",
  /** Physical pin 3: DH; output. */
  "DH": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: IN_H; input. */
  "IN_H": "5",
  /** Physical pin 6: ~{IN_L}; input. */
  "~{IN_L}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DL; output. */
  "DL": "8",
}) {
  override schema = "Driver_FET:MAX15013BxSA";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 175V, TTL Input, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX15013CxSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX15012-MAX15013B.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.514x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX15013CxSA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: BST; power_in. */
  "BST": "2",
  /** Physical pin 3: DH; output. */
  "DH": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: IN_H; input. */
  "IN_H": "5",
  /** Physical pin 6: IN_L; input. */
  "IN_L": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DL; output. */
  "DL": "8",
  /** Physical pin 9: EP; output. */
  "EP": "9",
}) {
  override schema = "Driver_FET:MAX15013CxSA";
  override referencePrefix = "U";
}

/**
 * High Frequency Half Bridge Driver, Output Current 2.0A, 175V, TTL Input, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX15013DxSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX15012-MAX15013B.pdf
 * Keywords: Half Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.514x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX15013DxSA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: BST; power_in. */
  "BST": "2",
  /** Physical pin 3: DH; output. */
  "DH": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: IN_H; input. */
  "IN_H": "5",
  /** Physical pin 6: ~{IN_L}; input. */
  "~{IN_L}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DL; output. */
  "DL": "8",
  /** Physical pin 9: EP; output. */
  "EP": "9",
}) {
  override schema = "Driver_FET:MAX15013DxSA";
  override referencePrefix = "U";
}

/**
 * Dual Power MOSFET Driver, 4.5..18V supply, IPK = 2A, 20ns rise / fall times (1 nF load), TTL/CMOS compatible inputs, inverting drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX626xSA`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX626-TSC428.pdf
 * Keywords: Maxim-Integrated Analog-Devices TSC426 DS0026 MAX626CSA MAX626ESA.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX626xSA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_{A}; input. */
  "IN_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_{B}; input. */
  "IN_{B}": "4",
  /** Physical pin 5: ~{OUT_{B}}; output. */
  "~{OUT_{B}}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: ~{OUT_{A}}; output. */
  "~{OUT_{A}}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:MAX626xSA";
  override referencePrefix = "U";
}

/**
 * Dual Power MOSFET Driver, 4.5..18V supply, IPK = 2A, 20ns rise / fall times (1 nF load), TTL/CMOS compatible inputs, non-inverting drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX627xSA`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX626-TSC428.pdf
 * Keywords: Maxim-Integrated Analog-Devices TSC427 MAX627CSA MAX627ESA.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX627xSA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_{A}; input. */
  "IN_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_{B}; input. */
  "IN_{B}": "4",
  /** Physical pin 5: OUT_{B}; output. */
  "OUT_{B}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: OUT_{A}; output. */
  "OUT_{A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:MAX627xSA";
  override referencePrefix = "U";
}

/**
 * Dual Power MOSFET Driver, 4.5..18V supply, IPK = 2A, 20ns rise / fall times (1 nF load), TTL/CMOS compatible inputs, complementary drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MAX628xSA`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX626-TSC428.pdf
 * Keywords: Maxim-Integrated Analog-Devices TSC428 MAX628CSA MAX628ESA.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX628xSA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_{A}; input. */
  "IN_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_{B}; input. */
  "IN_{B}": "4",
  /** Physical pin 5: OUT_{B}; output. */
  "OUT_{B}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: ~{OUT_{A}}; output. */
  "~{OUT_{A}}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:MAX628xSA";
  override referencePrefix = "U";
}

/**
 * 1.5A Dual High-Speed Power MOSFET Drivers, 4.5..18V supply, TTL/CMOS compatible inputs, non-inverting drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:TC4427xOA`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*4.*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20001422G.pdf
 * Keywords: TelCom-Semiconductor Microchip ESD push-pull TC427 TC4427EOA TC4427COA TC4427VOA.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC4427xOA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: OUT_B; output. */
  "OUT_B": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: OUT_A; output. */
  "OUT_A": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:TC4427xOA";
  override referencePrefix = "U";
}

/**
 * Dual High Speed MOSFET Driver, 6.1..18V supply voltage, 1.5A peak output current, 15ns rise / fall times (1 nF load), DIP-8 / SOIC-8
 *
 * KiCad symbol: `Driver_FET:MC3x152`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC34152-D.PDF
 * Keywords: MC33152 MC34152.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC3x152 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: OUT_B; output. */
  "OUT_B": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: OUT_A; output. */
  "OUT_A": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:MC3x152";
  override referencePrefix = "U";
}

/**
 * 1.5A High speed power MOSFET driver with inverting output, SOT-23-5
 *
 * KiCad symbol: `Driver_FET:MCP1415`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002092F.pdf
 * Keywords: mosfet gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP1415 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: Vdd; power_in. */
  "Vdd": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{OUT}; output. */
  "~{OUT}": "5",
}) {
  override schema = "Driver_FET:MCP1415";
  override referencePrefix = "U";
}

/**
 * 1.5A High speed power MOSFET driver with inverting output, SOT-23-5
 *
 * KiCad symbol: `Driver_FET:MCP1415R`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002092F.pdf
 * Keywords: mosfet gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP1415R extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: ~{OUT}; output. */
  "~{OUT}": "4",
  /** Physical pin 5: Vdd; power_in. */
  "Vdd": "5",
}) {
  override schema = "Driver_FET:MCP1415R";
  override referencePrefix = "U";
}

/**
 * 1.5A High speed power MOSFET driver with non-inverting output, SOT-23-5
 *
 * KiCad symbol: `Driver_FET:MCP1416`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002092F.pdf
 * Keywords: mosfet gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP1416 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: Vdd; power_in. */
  "Vdd": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
  override schema = "Driver_FET:MCP1416";
  override referencePrefix = "U";
}

/**
 * 1.5A High speed power MOSFET driver with non-inverting output, SOT-23-5
 *
 * KiCad symbol: `Driver_FET:MCP1416R`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002092F.pdf
 * Keywords: mosfet gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP1416R extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: Vdd; power_in. */
  "Vdd": "5",
}) {
  override schema = "Driver_FET:MCP1416R";
  override referencePrefix = "U";
}

/**
 * Dual 3A-Peak MOSFET Driver, inverting outputs, DFN-8
 *
 * KiCad symbol: `Driver_FET:MCP14A0303xMNY`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*3x2mm*P0.5mm*EP1.3x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP14A0303_4_5-Data-Sheet-20006046A.pdf
 * Keywords: high-speed.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP14A0303xMNY extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: ~{OUTB}; output. */
  "~{OUTB}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: ~{OUTA}; output. */
  "~{OUTA}": "7",
  /** Physical pin 8: ENB; input. */
  "ENB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:MCP14A0303xMNY";
  override referencePrefix = "U";
}

/**
 * Dual 3A-Peak MOSFET Driver, non-inverting outputs, DFN-8
 *
 * KiCad symbol: `Driver_FET:MCP14A0304xMNY`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*3x2mm*P0.5mm*EP1.3x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP14A0303_4_5-Data-Sheet-20006046A.pdf
 * Keywords: high-speed.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP14A0304xMNY extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: OUTB; output. */
  "OUTB": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: OUTA; output. */
  "OUTA": "7",
  /** Physical pin 8: ENB; input. */
  "ENB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:MCP14A0304xMNY";
  override referencePrefix = "U";
}

/**
 * Dual 3A-Peak MOSFET Driver, inverting/non-inverting outputs, DFN-8
 *
 * KiCad symbol: `Driver_FET:MCP14A0305xMNY`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*3x2mm*P0.5mm*EP1.3x1.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP14A0303_4_5-Data-Sheet-20006046A.pdf
 * Keywords: high-speed.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP14A0305xMNY extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: OUTB; output. */
  "OUTB": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: ~{OUTA}; output. */
  "~{OUTA}": "7",
  /** Physical pin 8: ENB; input. */
  "ENB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:MCP14A0305xMNY";
  override referencePrefix = "U";
}

/**
 * Dual 9A-Peak MOSFET Driver, inverting outputs, DFN-8
 *
 * KiCad symbol: `Driver_FET:MCP14A0901xMNY`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP14A0901_2-Data-Sheet-20006183A.pdf
 * Keywords: Driver, Dual MOSFET.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP14A0901xMNY extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: ~{OUT}; output. */
  "~{OUT}_6": "6",
  /** Physical pin 7: ~{OUT}; passive. */
  "~{OUT}_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:MCP14A0901xMNY";
  override referencePrefix = "U";
}

/**
 * Dual 9A-Peak MOSFET Driver, non-inverting outputs, DFN-8
 *
 * KiCad symbol: `Driver_FET:MCP14A0902xMNY`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP14A0901_2-Data-Sheet-20006183A.pdf
 * Keywords: Driver, Dual MOSFET.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP14A0902xMNY extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: OUT; output. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:MCP14A0902xMNY";
  override referencePrefix = "U";
}

/**
 * Dual 12A-Peak MOSFET Driver, inverting outputs, DFN-8
 *
 * KiCad symbol: `Driver_FET:MCP14A1201xMNY`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP14A1201-Family-Data-Sheet-DS20006228A.pdf
 * Keywords: Driver, Dual MOSFET.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP14A1201xMNY extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: ~{OUT}; output. */
  "~{OUT}_6": "6",
  /** Physical pin 7: ~{OUT}; passive. */
  "~{OUT}_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:MCP14A1201xMNY";
  override referencePrefix = "U";
}

/**
 * Dual 12A-Peak MOSFET Driver, non-inverting outputs, DFN-8
 *
 * KiCad symbol: `Driver_FET:MCP14A1202xMNY`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP14A1201-Family-Data-Sheet-DS20006228A.pdf
 * Keywords: Driver, Dual MOSFET.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP14A1202xMNY extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: OUT; output. */
  "OUT_6": "6",
  /** Physical pin 7: OUT; passive. */
  "OUT_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:MCP14A1202xMNY";
  override referencePrefix = "U";
}

/**
 * Dual 1.5A-Peak Low-Side MOSFET Driver, 4.5..18V supply voltage, TTL/CMOS compatible inputs, inverting drivers, DIP-8 / SOIC-8 / MSOP-8
 *
 * KiCad symbol: `Driver_FET:MIC4426`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MIC4426-7-8-Dual-1-5A-Peak-Low-Side-MOSFET-DRivers-DS20006202A.pdf
 * Keywords: Microchip Micrel BiCMOS DMOS clock-driver clock-buffer MIC426 MIC1426 DS0026.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC4426 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: ~{OUTB}; output. */
  "~{OUTB}": "5",
  /** Physical pin 6: V_{S}; power_in. */
  "V_{S}": "6",
  /** Physical pin 7: ~{OUTA}; output. */
  "~{OUTA}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:MIC4426";
  override referencePrefix = "U";
}

/**
 * Dual 1.5A-Peak Low-Side MOSFET Driver, 4.5..18V supply voltage, TTL/CMOS compatible inputs, non-inverting drivers, DIP-8 / SOIC-8 / MSOP-8
 *
 * KiCad symbol: `Driver_FET:MIC4427`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MIC4426-7-8-Dual-1-5A-Peak-Low-Side-MOSFET-DRivers-DS20006202A.pdf
 * Keywords: Microchip Micrel BiCMOS DMOS clock-driver clock-buffer MIC427 MIC1427.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC4427 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: OUTB; output. */
  "OUTB": "5",
  /** Physical pin 6: V_{S}; power_in. */
  "V_{S}": "6",
  /** Physical pin 7: OUTA; output. */
  "OUTA": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:MIC4427";
  override referencePrefix = "U";
}

/**
 * Dual 1.5A-Peak Low-Side MOSFET Driver, 4.5..18V supply voltage, TTL/CMOS compatible inputs, complementary drivers, DIP-8 / SOIC-8 / MSOP-8
 *
 * KiCad symbol: `Driver_FET:MIC4428`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MIC4426-7-8-Dual-1-5A-Peak-Low-Side-MOSFET-DRivers-DS20006202A.pdf
 * Keywords: Microchip Micrel BiCMOS DMOS clock-driver clock-buffer MIC428 MIC1428.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC4428 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: OUTB; output. */
  "OUTB": "5",
  /** Physical pin 6: V_{S}; power_in. */
  "V_{S}": "6",
  /** Physical pin 7: ~{OUTA}; output. */
  "~{OUTA}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:MIC4428";
  override referencePrefix = "U";
}

/**
 * 85V Half-Bridge MOSFET Driver with up to 16V Programmable Gate Drive, SOIC-8
 *
 * KiCad symbol: `Driver_FET:MIC4604YM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005852A.pdf
 * Keywords: Half-Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC4604YM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: HB; passive. */
  "HB": "2",
  /** Physical pin 3: HO; output. */
  "HO": "3",
  /** Physical pin 4: HS; passive. */
  "HS": "4",
  /** Physical pin 5: HI; input. */
  "HI": "5",
  /** Physical pin 6: LI; input. */
  "LI": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: LO; output. */
  "LO": "8",
}) {
  override schema = "Driver_FET:MIC4604YM";
  override referencePrefix = "U";
}

/**
 * High Current IGBT Gate, +4/-6A, SOIC-16
 *
 * KiCad symbol: `Driver_FET:NCD5702`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCD5702-D.PDF
 * Keywords: igbt gate driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCD5702 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: VIN; input. */
  "VIN": "2",
  /** Physical pin 3: VREF; power_out. */
  "VREF": "3",
  /** Physical pin 4: ~{FLT}; open_collector. */
  "~{FLT}": "4",
  /** Physical pin 5: GNDA; power_in. */
  "GNDA": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: RSVD; passive. */
  "RSVD": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: DESAT; input. */
  "DESAT": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: VOH; open_emitter. */
  "VOH": "11",
  /** Physical pin 12: VOL; open_collector. */
  "VOL": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: VEE; power_in. */
  "VEE": "14",
  /** Physical pin 15: VEEA; power_in. */
  "VEEA": "15",
  /** Physical pin 16: CLAMP; open_collector. */
  "CLAMP": "16",
}) {
  override schema = "Driver_FET:NCD5702";
  override referencePrefix = "U";
}

/**
 * UltraCMOS High-Speed FET Driver, 40 MHz, Output Current 2.0A/4.0A, 80V, Half Bridge, Low Side Output, CSP-16
 *
 * KiCad symbol: `Driver_FET:PE29101`. Reference prefix: `U`.
 * Footprint filters: pSemi*CSP*1.64x2.04mm*P0.4mm*.
 * @see http://www.psemi.com/pdf/datasheets/pe29101ds.pdf
 * Keywords: GaN Gate Driver.
 * Default footprint: Package_CSP:pSemi_CSP-16_1.64x2.04mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PE29101 extends Component.withPins({
  /** Physical pin 1: HSGpd; output. */
  "HSGpd": "1",
  /** Physical pin 2: HSS; passive. */
  "HSS": "2",
  /** Physical pin 3: HSB; input. */
  "HSB": "3",
  /** Physical pin 4: VDDSYNC; passive. */
  "VDDSYNC": "4",
  /** Physical pin 5: RDLH; passive. */
  "RDLH": "5",
  /** Physical pin 6: HSGpu; output. */
  "HSGpu": "6",
  /** Physical pin 7: ~{EN}; input. */
  "~{EN}": "7",
  /** Physical pin 8: IN; input. */
  "IN": "8",
  /** Physical pin 9: LSGpu; output. */
  "LSGpu": "9",
  /** Physical pin 10: LSO; output. */
  "LSO": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: LSGpd; output. */
  "LSGpd": "12",
  /** Physical pin 13: LSS; passive. */
  "LSS": "13",
  /** Physical pin 14: LSB; input. */
  "LSB": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: RDHL; passive. */
  "RDHL": "16",
}) {
  override schema = "Driver_FET:PE29101";
  override referencePrefix = "U";
}

/**
 * UltraCMOS High-Speed FET Driver, 40 MHz, Output Current 2.0A/4.0A, 80V, Half Bridge, Phase Control, CSP-16
 *
 * KiCad symbol: `Driver_FET:PE29102`. Reference prefix: `U`.
 * Footprint filters: pSemi*CSP*1.64x2.04mm*P0.4mm*.
 * @see http://www.psemi.com/pdf/datasheets/pe29102ds.pdf
 * Keywords: GaN Gate Driver.
 * Default footprint: Package_CSP:pSemi_CSP-16_1.64x2.04mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PE29102 extends Component.withPins({
  /** Physical pin 1: HSGpd; output. */
  "HSGpd": "1",
  /** Physical pin 2: HSS; passive. */
  "HSS": "2",
  /** Physical pin 3: HSB; input. */
  "HSB": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: RDLH; passive. */
  "RDLH": "5",
  /** Physical pin 6: HSGpu; output. */
  "HSGpu": "6",
  /** Physical pin 7: ~{EN}; input. */
  "~{EN}": "7",
  /** Physical pin 8: IN; input. */
  "IN": "8",
  /** Physical pin 9: LSGpu; output. */
  "LSGpu": "9",
  /** Physical pin 10: PHCTL; input. */
  "PHCTL": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: LSGpd; output. */
  "LSGpd": "12",
  /** Physical pin 13: LSS; passive. */
  "LSS": "13",
  /** Physical pin 14: LSB; input. */
  "LSB": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: RDHL; passive. */
  "RDHL": "16",
}) {
  override schema = "Driver_FET:PE29102";
  override referencePrefix = "U";
}

/**
 * 4A dual low-side MOSFET driver, SOIC-8
 *
 * KiCad symbol: `Driver_FET:PM8834`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/pm8834.pdf
 * Keywords: mosfet driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PM8834 extends Component.withPins({
  /** Physical pin 1: EN1; input. */
  "EN1": "1",
  /** Physical pin 2: PWM1; input. */
  "PWM1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: PWM2; input. */
  "PWM2": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: OUT1; output. */
  "OUT1": "7",
  /** Physical pin 8: EN2; input. */
  "EN2": "8",
}) {
  override schema = "Driver_FET:PM8834";
  override referencePrefix = "U";
}

/**
 * 4A dual low-side MOSFET driver, MSOP-8
 *
 * KiCad symbol: `Driver_FET:PM8834M`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.65mm*.
 * @see http://www.st.com/resource/en/datasheet/pm8834.pdf
 * Keywords: mosfet driver.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.95x2.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PM8834M extends Component.withPins({
  /** Physical pin 1: EN1; input. */
  "EN1": "1",
  /** Physical pin 2: PWM1; input. */
  "PWM1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: PWM2; input. */
  "PWM2": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: OUT1; output. */
  "OUT1": "7",
  /** Physical pin 8: EN2; input. */
  "EN2": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:PM8834M";
  override referencePrefix = "U";
}

/**
 * Full Bridge Gate Driver with integrated Current Sense Amplifier, 3A, 115V, SOIC-28
 *
 * KiCad symbol: `Driver_FET:SM72295MA`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/gpn/sm72295
 * Keywords: Full Bridge Gate Driver.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SM72295MA extends Component.withPins({
  /** Physical pin 1: SIA; input. */
  "SIA": "1",
  /** Physical pin 2: SOA; input. */
  "SOA": "2",
  /** Physical pin 3: IIN; passive. */
  "IIN": "3",
  /** Physical pin 4: BIN; output. */
  "BIN": "4",
  /** Physical pin 5: AGND; power_in. */
  "AGND": "5",
  /** Physical pin 6: LIA; input. */
  "LIA": "6",
  /** Physical pin 7: HIA; input. */
  "HIA": "7",
  /** Physical pin 8: HIB; input. */
  "HIB": "8",
  /** Physical pin 9: LIB; input. */
  "LIB": "9",
  /** Physical pin 10: PGOOD; open_collector. */
  "PGOOD": "10",
  /** Physical pin 11: BOUT; output. */
  "BOUT": "11",
  /** Physical pin 12: IOUT; passive. */
  "IOUT": "12",
  /** Physical pin 13: SOB; input. */
  "SOB": "13",
  /** Physical pin 14: SIB; input. */
  "SIB": "14",
  /** Physical pin 15: OVP; open_collector. */
  "OVP": "15",
  /** Physical pin 16: OVS; input. */
  "OVS": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
  /** Physical pin 18: HSA; passive. */
  "HSA": "18",
  /** Physical pin 19: HOA; output. */
  "HOA": "19",
  /** Physical pin 20: HBA; passive. */
  "HBA": "20",
  /** Physical pin 21: VCCA; power_in. */
  "VCCA": "21",
  /** Physical pin 22: LOA; output. */
  "LOA": "22",
  /** Physical pin 23: PGND; power_in. */
  "PGND": "23",
  /** Physical pin 24: LOB; output. */
  "LOB": "24",
  /** Physical pin 25: VCCB; power_in. */
  "VCCB": "25",
  /** Physical pin 26: HBB; passive. */
  "HBB": "26",
  /** Physical pin 27: HOB; output. */
  "HOB": "27",
  /** Physical pin 28: HSB; passive. */
  "HSB": "28",
}) {
  override schema = "Driver_FET:SM72295MA";
  override referencePrefix = "U";
}

/**
 * Galvanically isolated 5 A advanced single gate driver, Dual Output, Miller Clamp, Sense, Desaturation, UVLO, OVLO, SPI, AEC-Q100, SOIC-24
 *
 * KiCad symbol: `Driver_FET:STGAP1AS`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stgap1as.pdf
 * Keywords: isolated fet driver.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STGAP1AS extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: SDO; output. */
  "SDO": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: CK; input. */
  "CK": "5",
  /** Physical pin 6: VREG; power_out. */
  "VREG": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: IN-/DIAG2; bidirectional. */
  "IN-/DIAG2": "8",
  /** Physical pin 9: IN+; input. */
  "IN+": "9",
  /** Physical pin 10: DIAG1; open_collector. */
  "DIAG1": "10",
  /** Physical pin 11: ~{SD}; input. */
  "~{SD}": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GNDISO; power_in. */
  "GNDISO": "13",
  /** Physical pin 14: VL; power_in. */
  "VL_14": "14",
  /** Physical pin 15: VREGISO; power_out. */
  "VREGISO": "15",
  /** Physical pin 16: SENSE; input. */
  "SENSE": "16",
  /** Physical pin 17: VH; power_in. */
  "VH": "17",
  /** Physical pin 18: DESAT; passive. */
  "DESAT": "18",
  /** Physical pin 19: VCECLAMP; input. */
  "VCECLAMP": "19",
  /** Physical pin 20: GON; output. */
  "GON": "20",
  /** Physical pin 21: GOFF; output. */
  "GOFF": "21",
  /** Physical pin 22: CLAMP; output. */
  "CLAMP": "22",
  /** Physical pin 23: VL; passive. */
  "VL_23": "23",
  /** Physical pin 24: ASC; input. */
  "ASC": "24",
}) {
  override schema = "Driver_FET:STGAP1AS";
  override referencePrefix = "U";
}

/**
 * Galvanically isolated 4 A single gate driver, Single Output, Miller Clamp, SOIC-8
 *
 * KiCad symbol: `Driver_FET:STGAP2SCM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stgap2s.pdf
 * Keywords: isolated fet driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STGAP2SCM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: IN+; input. */
  "IN+": "2",
  /** Physical pin 3: IN-; input. */
  "IN-": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VH; power_in. */
  "VH": "5",
  /** Physical pin 6: GOUT; output. */
  "GOUT": "6",
  /** Physical pin 7: CLAMP; output. */
  "CLAMP": "7",
  /** Physical pin 8: GNDISO; power_in. */
  "GNDISO": "8",
}) {
  override schema = "Driver_FET:STGAP2SCM";
  override referencePrefix = "U";
}

/**
 * Galvanically isolated 4 A single gate driver, Dual Output, SOIC-8
 *
 * KiCad symbol: `Driver_FET:STGAP2SM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stgap2s.pdf
 * Keywords: isolated fet driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STGAP2SM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: IN+; input. */
  "IN+": "2",
  /** Physical pin 3: IN-; input. */
  "IN-": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VH; power_in. */
  "VH": "5",
  /** Physical pin 6: GON; output. */
  "GON": "6",
  /** Physical pin 7: GOFF; output. */
  "GOFF": "7",
  /** Physical pin 8: GNDISO; power_in. */
  "GNDISO": "8",
}) {
  override schema = "Driver_FET:STGAP2SM";
  override referencePrefix = "U";
}

/**
 * 9A High-Speed inverting MOSFET Driver
 *
 * KiCad symbol: `Driver_FET:TC4421`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001420F.pdf
 * Keywords: MOSFET IGBT driver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC4421 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: INPUT; input. */
  "INPUT": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: ~{OUTPUT}; output. */
  "~{OUTPUT}_6": "6",
  /** Physical pin 7: ~{OUTPUT}; passive. */
  "~{OUTPUT}_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
}) {
  override schema = "Driver_FET:TC4421";
  override referencePrefix = "U";
}

/**
 * 9A High-Speed non-inverting MOSFET Driver
 *
 * KiCad symbol: `Driver_FET:TC4422`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001420F.pdf
 * Keywords: MOSFET IGBT driver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC4422 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: INPUT; input. */
  "INPUT": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: OUTPUT; output. */
  "OUTPUT_6": "6",
  /** Physical pin 7: OUTPUT; passive. */
  "OUTPUT_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
}) {
  override schema = "Driver_FET:TC4422";
  override referencePrefix = "U";
}

/**
 * 1.5A Dual High-Speed Power MOSFET Drivers, 4.5..18V supply, TTL/CMOS compatible inputs, inverting drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:TC4426xOA`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*4.*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20001422G.pdf
 * Keywords: TelCom-Semiconductor Microchip ESD push-pull TC426 DS0026 TC4426EOA TC4426COA TC4426VOA.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC4426xOA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: ~{OUT_B}; output. */
  "~{OUT_B}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:TC4426xOA";
  override referencePrefix = "U";
}

/**
 * 1.5A Dual High-Speed Power MOSFET Drivers, 4.5..18V supply, TTL/CMOS compatible inputs, complementary drivers, SOIC-8
 *
 * KiCad symbol: `Driver_FET:TC4428xOA`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*4.*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20001422G.pdf
 * Keywords: TelCom-Semiconductor Microchip ESD push-pull TC428 TC4428EOA TC4428COA TC4428VOA.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC4428xOA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN_B; input. */
  "IN_B": "4",
  /** Physical pin 5: OUT_B; output. */
  "OUT_B": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: ~{OUT_A}; output. */
  "~{OUT_A}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Driver_FET:TC4428xOA";
  override referencePrefix = "U";
}

/**
 * Gate Drive Optocoupler, Output Current 1.5/1.5A, DIP-8
 *
 * KiCad symbol: `Driver_FET:TLP250`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://toshiba.semicon-storage.com/info/docget.jsp?did=16821&prodName=TLP250
 * Keywords: MOSFET Driver IGBT Driver Optocoupler.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLP250 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VEE; power_in. */
  "VEE": "5",
  /** Physical pin 6: VO; output. */
  "VO_6": "6",
  /** Physical pin 7: VO; output. */
  "VO_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Driver_FET:TLP250";
  override referencePrefix = "U";
}

/**
 * Isolated Dual-Channel Gate Driver, Output Current 4.0/6.0A, 5.7kV Isolation, 8V UVLO, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:UCC21520DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc21520.pdf
 * Keywords: Dual Isolated Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC21520DW extends Component.withPins({
  /** Physical pin 1: INA; input. */
  "INA": "1",
  /** Physical pin 2: INB; input. */
  "INB": "2",
  /** Physical pin 3: VCCI; power_in. */
  "VCCI_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DIS; input. */
  "DIS": "5",
  /** Physical pin 6: DT; passive. */
  "DT": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCCI; passive. */
  "VCCI_8": "8",
  /** Physical pin 9: VSSB; power_in. */
  "VSSB": "9",
  /** Physical pin 10: OUTB; output. */
  "OUTB": "10",
  /** Physical pin 11: VDDB; power_in. */
  "VDDB": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VSSA; power_in. */
  "VSSA": "14",
  /** Physical pin 15: OUTA; output. */
  "OUTA": "15",
  /** Physical pin 16: VDDA; power_in. */
  "VDDA": "16",
}) {
  override schema = "Driver_FET:UCC21520DW";
  override referencePrefix = "U";
}

/**
 * Isolated Dual-Channel Gate Driver, Output Current 4.0/6.0A, 5.7kV Isolation, 5V UVLO, SOIC-16W
 *
 * KiCad symbol: `Driver_FET:UCC21520ADW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc21520.pdf
 * Keywords: Dual Isolated Gate Driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC21520ADW extends Component.withPins({
  /** Physical pin 1: INA; input. */
  "INA": "1",
  /** Physical pin 2: INB; input. */
  "INB": "2",
  /** Physical pin 3: VCCI; power_in. */
  "VCCI_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DIS; input. */
  "DIS": "5",
  /** Physical pin 6: DT; passive. */
  "DT": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCCI; passive. */
  "VCCI_8": "8",
  /** Physical pin 9: VSSB; power_in. */
  "VSSB": "9",
  /** Physical pin 10: OUTB; output. */
  "OUTB": "10",
  /** Physical pin 11: VDDB; power_in. */
  "VDDB": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VSSA; power_in. */
  "VSSA": "14",
  /** Physical pin 15: OUTA; output. */
  "OUTA": "15",
  /** Physical pin 16: VDDA; power_in. */
  "VDDA": "16",
}) {
  override schema = "Driver_FET:UCC21520ADW";
  override referencePrefix = "U";
}

/**
 * Single-Channel High-Speed Low-Side Gate Driver With 4-A Peak Source and 8-A Peak Sink, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:UCC27511ADBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ucc27511a.pdf
 * Keywords: single channel low side gate drive dual input split output.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC27511ADBV extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: OUTH; output. */
  "OUTH": "2",
  /** Physical pin 3: OUTL; output. */
  "OUTL": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: IN-; input. */
  "IN-": "5",
  /** Physical pin 6: IN+; input. */
  "IN+": "6",
}) {
  override schema = "Driver_FET:UCC27511ADBV";
  override referencePrefix = "U";
}

/**
 * Dual 5A MOSFET driver, 4.5V..18V supply, non-inverting, SOIC-8
 *
 * KiCad symbol: `Driver_FET:UCC27524D`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ucc27524.pdf
 * Keywords: high-speed low-side negative-input-voltage-capability.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC27524D extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: OUTB; output. */
  "OUTB": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: OUTA; output. */
  "OUTA": "7",
  /** Physical pin 8: ENB; input. */
  "ENB": "8",
}) {
  override schema = "Driver_FET:UCC27524D";
  override referencePrefix = "U";
}

/**
 * Dual 5A MOSFET driver, 4.5V..18V supply, non-inverting, HTSSOP-8 (MSOP-8)
 *
 * KiCad symbol: `Driver_FET:UCC27524DGN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*EP2x*Mask1.846x2.15mm*.
 * @see https://www.ti.com/lit/ds/symlink/ucc27524.pdf
 * Keywords: high-speed low-side negative-input-voltage-capability.
 * Default footprint: Package_SO:Texas_DGN0008G_VSSOP-8-1EP_3x3mm_P0.65mm_EP2x2.94mm_Mask1.846x2.15mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC27524DGN extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: INA; input. */
  "INA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: INB; input. */
  "INB": "4",
  /** Physical pin 5: OUTB; output. */
  "OUTB": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: OUTA; output. */
  "OUTA": "7",
  /** Physical pin 8: ENB; input. */
  "ENB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Driver_FET:UCC27524DGN";
  override referencePrefix = "U";
}

/**
 * High-Speed, 600-V High-Side Low-Side Gate Driver, SOIC-14
 *
 * KiCad symbol: `Driver_FET:UCC27714D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc27714.pdf
 * Keywords: gate driver bootstrap.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC27714D extends Component.withPins({
  /** Physical pin 1: HI; input. */
  "HI": "1",
  /** Physical pin 2: LI; input. */
  "LI": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: EN/NC; input. */
  "EN/NC": "4",
  /** Physical pin 5: COM; passive. */
  "COM": "5",
  /** Physical pin 6: LO; output. */
  "LO": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: HS; passive. */
  "HS": "11",
  /** Physical pin 12: HO; output. */
  "HO": "12",
  /** Physical pin 13: HB; input. */
  "HB": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Driver_FET:UCC27714D";
  override referencePrefix = "U";
}

/**
 * 9A (peak) Gate driver, 12V, 3ns delay, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:ZXGD3001E6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/_files/datasheets/ZXGD3001E6.pdf
 * Keywords: gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXGD3001E6 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SINK; open_collector. */
  "SINK": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: SOURCE; open_emitter. */
  "SOURCE": "6",
}) {
  override schema = "Driver_FET:ZXGD3001E6";
  override referencePrefix = "U";
}

/**
 * 9A (peak) Gate driver, 20V, 2ns delay, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:ZXGD3002E6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/_files/datasheets/ZXGD3002E6.pdf
 * Keywords: gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXGD3002E6 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SINK; open_collector. */
  "SINK": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: SOURCE; open_emitter. */
  "SOURCE": "6",
}) {
  override schema = "Driver_FET:ZXGD3002E6";
  override referencePrefix = "U";
}

/**
 * 5A (peak) Gate driver, 40V, 2ns delay, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:ZXGD3003E6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/_files/datasheets/ZXGD3003E6.pdf
 * Keywords: gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXGD3003E6 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SINK; open_collector. */
  "SINK": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: SOURCE; open_emitter. */
  "SOURCE": "6",
}) {
  override schema = "Driver_FET:ZXGD3003E6";
  override referencePrefix = "U";
}

/**
 * 8A (peak) Gate driver, 40V, 1ns delay, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:ZXGD3004E6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/_files/datasheets/ZXGD3004E6.pdf
 * Keywords: gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXGD3004E6 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SINK; open_collector. */
  "SINK": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: SOURCE; open_emitter. */
  "SOURCE": "6",
}) {
  override schema = "Driver_FET:ZXGD3004E6";
  override referencePrefix = "U";
}

/**
 * 40V 10A gate driver, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:ZXGD3006E6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ZXGD3006E6.pdf
 * Keywords: mosfet igbt driver buffer.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXGD3006E6 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VEE; power_in. */
  "VEE": "3",
  /** Physical pin 4: SINK; open_collector. */
  "SINK": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: SRC; open_emitter. */
  "SRC": "6",
}) {
  override schema = "Driver_FET:ZXGD3006E6";
  override referencePrefix = "U";
}

/**
 * 2A (peak) Gate driver, 40V, SOT-23-6
 *
 * KiCad symbol: `Driver_FET:ZXGD3009E6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ZXGD3009E6.pdf
 * Keywords: gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXGD3009E6 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: VEE; power_in. */
  "VEE": "3",
  /** Physical pin 4: SINK; open_collector. */
  "SINK": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: SOURCE; open_emitter. */
  "SOURCE": "6",
}) {
  override schema = "Driver_FET:ZXGD3009E6";
  override referencePrefix = "U";
}

