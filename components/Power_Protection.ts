// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Quad bidirectional transil, Suppressor for ESD protection, 5V Standoff, 4 Channels, SOIC-8
 *
 * KiCad symbol: `Power_Protection:CDNBS08-SLVU2.8-4`. Reference prefix: `D`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.bourns.com/pdfs/CDNBS08-SLVU28-4.pdf
 * Keywords: ESD protection suppression transient.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CDNBS08_SLVU2_8_4 extends Component.withPins({
  /** Physical pin 1: TVS1; passive. */
  "TVS1_1": "1",
  /** Physical pin 2: TVS2; passive. */
  "TVS2_2": "2",
  /** Physical pin 3: TVS1; passive. */
  "TVS1_3": "3",
  /** Physical pin 4: TVS2; passive. */
  "TVS2_4": "4",
  /** Physical pin 5: TVS1; passive. */
  "TVS1_5": "5",
  /** Physical pin 6: TVS2; passive. */
  "TVS2_6": "6",
  /** Physical pin 7: TVS1; passive. */
  "TVS1_7": "7",
  /** Physical pin 8: TVS2; passive. */
  "TVS2_8": "8",
}) {
  override schema = "Power_Protection:CDNBS08-SLVU2.8-4";
  override referencePrefix = "D";
}

/**
 * ESD Protection Diodes with Low Clamping Voltage, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:SRV05-4`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.onsemi.com/pub/Collateral/SRV05-4-D.PDF
 * Keywords: ESD protection diodes.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SRV05_4 extends Component.withPins({
  /** Physical pin 1: IO1; passive. */
  "IO1": "1",
  /** Physical pin 2: VN; passive. */
  "VN": "2",
  /** Physical pin 3: IO2; passive. */
  "IO2": "3",
  /** Physical pin 4: IO3; passive. */
  "IO3": "4",
  /** Physical pin 5: VP; passive. */
  "VP": "5",
  /** Physical pin 6: IO4; passive. */
  "IO4": "6",
}) {
  override schema = "Power_Protection:SRV05-4";
  override referencePrefix = "U";
}

/**
 * Low capacitance ESD diode / steering Diode Array, SOT23-6
 *
 * KiCad symbol: `Power_Protection:CDSOT236-0504C`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.bourns.com/docs/product-datasheets/cdsot236-0504c.pdf
 * Keywords: ESD protection diodes.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CDSOT236_0504C extends Component.withPins({
  /** Physical pin 1: IO1; passive. */
  "IO1": "1",
  /** Physical pin 2: VN; passive. */
  "VN": "2",
  /** Physical pin 3: IO2; passive. */
  "IO2": "3",
  /** Physical pin 4: IO3; passive. */
  "IO3": "4",
  /** Physical pin 5: VP; passive. */
  "VP": "5",
  /** Physical pin 6: IO4; passive. */
  "IO4": "6",
}) {
  override schema = "Power_Protection:CDSOT236-0504C";
  override referencePrefix = "U";
}

/**
 * Single Channel ESD Protection Array
 *
 * KiCad symbol: `Power_Protection:CM1213A-01SO`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see http://www.onsemi.com/pub_link/Collateral/CM1213A-D.PDF
 * Keywords: ESD Protection diodes transient suppressor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CM1213A_01SO extends Component.withPins({
  /** Physical pin 1: CH1; passive. */
  "CH1": "1",
  /** Physical pin 2: VP; passive. */
  "VP": "2",
  /** Physical pin 3: VN; passive. */
  "VN": "3",
}) {
  override schema = "Power_Protection:CM1213A-01SO";
  override referencePrefix = "D";
}

/**
 * MMC interface, EMI filter, TVS, Line termination, UDFN-16
 *
 * KiCad symbol: `Power_Protection:CM1624`. Reference prefix: `U`.
 * Footprint filters: OnSemi*UDFN*1EP*1.35x3.3mm*P0.4mm*.
 * @see https://www.onsemi.com/pdf/datasheet/cm1624-d.pdf
 * Keywords: microsd protection.
 * Default footprint: Package_DFN_QFN:OnSemi_UDFN-16-1EP_1.35x3.3mm_P0.4mm_EP0.4x2.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CM1624 extends Component.withPins({
  /** Physical pin 1: SDData1; passive. */
  "SDData1": "1",
  /** Physical pin 2: SDData0; passive. */
  "SDData0": "2",
  /** Physical pin 3: SDCLK; passive. */
  "SDCLK": "3",
  /** Physical pin 4: ESD1; passive. */
  "ESD1_4": "4",
  /** Physical pin 5: ESD3; passive. */
  "ESD3": "5",
  /** Physical pin 6: SDCMD; passive. */
  "SDCMD": "6",
  /** Physical pin 7: SDData3; passive. */
  "SDData3": "7",
  /** Physical pin 8: SDData2; passive. */
  "SDData2": "8",
  /** Physical pin 9: Data2; passive. */
  "Data2": "9",
  /** Physical pin 10: Data3; passive. */
  "Data3": "10",
  /** Physical pin 11: CMD; passive. */
  "CMD": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: ESD1; passive. */
  "ESD1_13": "13",
  /** Physical pin 14: CLK; passive. */
  "CLK": "14",
  /** Physical pin 15: Data0; passive. */
  "Data0": "15",
  /** Physical pin 16: Data1; passive. */
  "Data1": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
  override schema = "Power_Protection:CM1624";
  override referencePrefix = "U";
}

/**
 * 3V3 Reverse Working, 8 channel low capacitance 0.45pF, TVS diode array, 5.5-7V Breakdown, U-DFN3810-9
 *
 * KiCad symbol: `Power_Protection:D3V3X8U9LP3810`. Reference prefix: `D`.
 * Footprint filters: Diodes?UDFN3810?9?TYPE_B*.
 * @see https://www.diodes.com/assets/Datasheets/D3V3X8U9LP3810.pdf
 * Keywords: ESD protection suppression transient.
 * Default footprint: Package_DFN_QFN:Diodes_UDFN3810-9_TYPE_B.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D3V3X8U9LP3810 extends Component.withPins({
  /** Physical pin 3: GND; passive. */
  "GND": "3",
  /** Physical pin 1: Line-1; passive. */
  "Line-1": "1",
  /** Physical pin 2: Line-3; passive. */
  "Line-3": "2",
  /** Physical pin 4: Line-6; passive. */
  "Line-6": "4",
  /** Physical pin 5: Line-8; passive. */
  "Line-8": "5",
  /** Physical pin 6: Line-7; passive. */
  "Line-7": "6",
  /** Physical pin 7: Line-5; passive. */
  "Line-5": "7",
  /** Physical pin 8: Line-4; passive. */
  "Line-4": "8",
  /** Physical pin 9: Line-2; passive. */
  "Line-2": "9",
}) {
  override schema = "Power_Protection:D3V3X8U9LP3810";
  override referencePrefix = "D";
}

/**
 * 4-Channel Low Capacitance TVS Diode Array, DFN-10 / USON-10
 *
 * KiCad symbol: `Power_Protection:D3V3XA4B10LP`. Reference prefix: `U`.
 * Footprint filters: Diodes*UDFN*1x2.5mm*P0.5mm*.
 * @see https://www.diodes.com/assets/Datasheets/D3V3XA4B10LP.pdf
 * Keywords: ESD protection TVS.
 * Default footprint: Package_DFN_QFN:Diodes_UDFN-10_1x2.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D3V3XA4B10LP extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS_3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
  /** Physical pin 6: NC; free. */
  "NC_6": "6",
  /** Physical pin 7: NC; free. */
  "NC_7": "7",
  /** Physical pin 8: VSS; passive. */
  "VSS_8": "8",
  /** Physical pin 9: NC; free. */
  "NC_9": "9",
  /** Physical pin 10: NC; free. */
  "NC_10": "10",
}) {
  override schema = "Power_Protection:D3V3XA4B10LP";
  override referencePrefix = "U";
}

/**
 * Low Capacitance TVS Diode Array, 3.3V Standoff, 8 Channels, UDFN-9
 *
 * KiCad symbol: `Power_Protection:RCLAMP3328P`. Reference prefix: `D`.
 * Footprint filters: UDFN*1.0x3.8mm*P0.5mm*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Semtech%20PDFs/RCLAMP3328P.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_DFN_QFN:UDFN-9_1.0x3.8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RCLAMP3328P extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: K2; passive. */
  "K2": "2",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
  /** Physical pin 7: K6; passive. */
  "K6": "7",
  /** Physical pin 8: K7; passive. */
  "K7": "8",
  /** Physical pin 9: K8; passive. */
  "K8": "9",
}) {
  override schema = "Power_Protection:RCLAMP3328P";
  override referencePrefix = "D";
}

/**
 * Low Capacitance TVS Diode Array, 3.3V Standoff, 8 Channels, UDFN-9
 *
 * KiCad symbol: `Power_Protection:DT1240A-08LP3810`. Reference prefix: `D`.
 * Footprint filters: UDFN*1.0x3.8mm*P0.5mm*.
 * @see https://www.diodes.com/assets/Datasheets/DT1240A-08LP3810.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_DFN_QFN:UDFN-9_1.0x3.8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DT1240A_08LP3810 extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: K2; passive. */
  "K2": "2",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
  /** Physical pin 7: K6; passive. */
  "K6": "7",
  /** Physical pin 8: K7; passive. */
  "K7": "8",
  /** Physical pin 9: K8; passive. */
  "K8": "9",
}) {
  override schema = "Power_Protection:DT1240A-08LP3810";
  override referencePrefix = "D";
}

/**
 * Single Pair Common Mode Filter with ESD Protection, UQFN-6L
 *
 * KiCad symbol: `Power_Protection:ECMF02-2AMX6`. Reference prefix: `U`.
 * Footprint filters: ST?UQFN*L?1.5x1.7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/ecmf02-2amx6.pdf
 * Keywords: Common Mode ESD.
 * Default footprint: Package_DFN_QFN:ST_UQFN-6L_1.5x1.7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ECMF02_2AMX6 extends Component.withPins({
  /** Physical pin 1: D+_in; passive. */
  "D+_in": "1",
  /** Physical pin 2: D-_in; passive. */
  "D-_in": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: NC; free. */
  "NC": "4",
  /** Physical pin 5: D-_out; passive. */
  "D-_out": "5",
  /** Physical pin 6: D+_out; passive. */
  "D+_out": "6",
}) {
  override schema = "Power_Protection:ECMF02-2AMX6";
  override referencePrefix = "U";
}

/**
 * On Semi, Dual Pair Common Mode Filter with ESD Protection, 3.3V working voltage, XDFN-10
 *
 * KiCad symbol: `Power_Protection:EMI8132`. Reference prefix: `U`.
 * Footprint filters: *XDFN*1.35x2.2mm*P0.4mm*.
 * @see https://www.onsemi.com/pdf/datasheet/emi8132-d.pdf
 * Keywords: Common Mode ESD.
 * Default footprint: Package_DFN_QFN:OnSemi_XDFN-10_1.35x2.2mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EMI8132 extends Component.withPins({
  /** Physical pin 1: In_1+; passive. */
  "In_1+_1": "1",
  /** Physical pin 2: In_1-; passive. */
  "In_1-_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: In_1+; passive. */
  "In_1+_4": "4",
  /** Physical pin 5: In_1-; passive. */
  "In_1-_5": "5",
  /** Physical pin 6: Out_1+; passive. */
  "Out_1+_6": "6",
  /** Physical pin 7: Out_1+; passive. */
  "Out_1+_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: Out_1+; passive. */
  "Out_1+_9": "9",
  /** Physical pin 10: Out_1+; passive. */
  "Out_1+_10": "10",
}) {
  override schema = "Power_Protection:EMI8132";
  override referencePrefix = "U";
}

/**
 * Dual Pair Common Mode Filter with 8KV/16KV ESD Protection, 3V working voltage, STMicroelectronics, UDFN-10
 *
 * KiCad symbol: `Power_Protection:ECMF04-4HSWM10`. Reference prefix: `U`.
 * Footprint filters: *UDFN*1.35x2.6mm*P0.5mm*.
 * @see https://www.st.com/content/ccc/resource/technical/document/datasheet/fa/13/38/f2/70/5b/46/46/DM00109760.pdf/files/DM00109760.pdf/jcr:content/translations/en.DM00109760.pdf
 * Keywords: Common Mode ESD.
 * Default footprint: Package_DFN_QFN:UDFN-10_1.35x2.6mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ECMF04_4HSWM10 extends Component.withPins({
  /** Physical pin 1: In_1+; passive. */
  "In_1+_1": "1",
  /** Physical pin 2: In_1-; passive. */
  "In_1-_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: In_1+; passive. */
  "In_1+_4": "4",
  /** Physical pin 5: In_1-; passive. */
  "In_1-_5": "5",
  /** Physical pin 6: Out_1+; passive. */
  "Out_1+_6": "6",
  /** Physical pin 7: Out_1+; passive. */
  "Out_1+_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: Out_1+; passive. */
  "Out_1+_9": "9",
  /** Physical pin 10: Out_1+; passive. */
  "Out_1+_10": "10",
}) {
  override schema = "Power_Protection:ECMF04-4HSWM10";
  override referencePrefix = "U";
}

/**
 * Single Pair Common Mode Filter with ESD Protection, WDFN-8
 *
 * KiCad symbol: `Power_Protection:EMI2121MTTAG`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*2x2.2mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/EMI2121MT-D.PDF
 * Keywords: Common Mode ESD.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_2x2.2mm_P0.5mm_EP0.80x0.54.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EMI2121MTTAG extends Component.withPins({
  /** Physical pin 1: In_1+; passive. */
  "In_1+": "1",
  /** Physical pin 2: In_1-; passive. */
  "In_1-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: Out_1-; passive. */
  "Out_1-": "7",
  /** Physical pin 8: Out_1+; passive. */
  "Out_1+": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Power_Protection:EMI2121MTTAG";
  override referencePrefix = "U";
}

/**
 * 4-Channel Low Capacitance TVS Diode Array, DFN-10 / USON-10
 *
 * KiCad symbol: `Power_Protection:ESD224DQA`. Reference prefix: `U`.
 * Footprint filters: Diodes*UDFN*1x2.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/esd224.pdf
 * Keywords: ESD protection TVS.
 * Default footprint: Package_DFN_QFN:Diodes_UDFN-10_1x2.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESD224DQA extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS_3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: unnamed; passive. */
  "P7": "7",
  /** Physical pin 8: VSS; passive. */
  "VSS_8": "8",
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
}) {
  override schema = "Power_Protection:ESD224DQA";
  override referencePrefix = "U";
}

/**
 * 4-Channel Low Capacitance ESD Diode Array, 3.3Vrwm, 15kV air, 10kV contact, DFN-10
 *
 * KiCad symbol: `Power_Protection:ESD3324P`. Reference prefix: `U`.
 * Footprint filters: Diodes*UDFN*1x2.5mm*P0.5mm*.
 * @see https://www.lcsc.com/datasheet/C4748778.pdf
 * Keywords: protection TVS transient-voltage-suppressor overvoltage-suppressor.
 * Default footprint: Package_DFN_QFN:Diodes_UDFN-10_1x2.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESD3324P extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS_3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
  /** Physical pin 6: NC; free. */
  "NC_6": "6",
  /** Physical pin 7: NC; free. */
  "NC_7": "7",
  /** Physical pin 8: VSS; passive. */
  "VSS_8": "8",
  /** Physical pin 9: NC; free. */
  "NC_9": "9",
  /** Physical pin 10: NC; free. */
  "NC_10": "10",
}) {
  override schema = "Power_Protection:ESD3324P";
  override referencePrefix = "U";
}

/**
 * TVS Diode Array, 5.5V Standoff, 4 Channels, SOT-23-5 package
 *
 * KiCad symbol: `Power_Protection:SP0504BAHT`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see http://www.littelfuse.com/~/media/files/littelfuse/technical%20resources/documents/data%20sheets/sp05xxba.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP0504BAHT extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
  /** Physical pin 5: K; passive. */
  "K_5": "5",
}) {
  override schema = "Power_Protection:SP0504BAHT";
  override referencePrefix = "D";
}

/**
 * Quad TVS Diode Array, 14.2V Standoff, 4 Channels, 400W, ±30kV, SOT-23-5
 *
 * KiCad symbol: `Power_Protection:ESDA14V2SC5`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see https://www.st.com/resource/en/datasheet/esda5v3sc6.pdf
 * Keywords: esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESDA14V2SC5 extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
  /** Physical pin 5: K; passive. */
  "K_5": "5",
}) {
  override schema = "Power_Protection:ESDA14V2SC5";
  override referencePrefix = "D";
}

/**
 * TVS Diode Array, 5.5V Standoff, 2 Channels, SOT-23 package
 *
 * KiCad symbol: `Power_Protection:SP0502BAHT`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see http://www.littelfuse.com/~/media/files/littelfuse/technical%20resources/documents/data%20sheets/sp05xxba.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP0502BAHT extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Power_Protection:SP0502BAHT";
  override referencePrefix = "D";
}

/**
 * TVS Diode Array, 5.5V Standoff, 2 Channels, SOT23
 *
 * KiCad symbol: `Power_Protection:ESDA5V3L`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see https://www.st.com/resource/en/datasheet/esdal.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-3.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESDA5V3L extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Power_Protection:ESDA5V3L";
  override referencePrefix = "D";
}

/**
 * Quad TVS Diode Array, 5.3V Standoff, 4 Channels, 400W, ±30kV, SOT-23-5
 *
 * KiCad symbol: `Power_Protection:ESDA5V3SC5`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see https://www.st.com/resource/en/datasheet/esda5v3sc6.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESDA5V3SC5 extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
  /** Physical pin 5: K; passive. */
  "K_5": "5",
}) {
  override schema = "Power_Protection:ESDA5V3SC5";
  override referencePrefix = "D";
}

/**
 * Quintuple bidirectional transil, Suppressor for ESD protection, 6V1 Breakdown, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:ESDA6V1-5SC6`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see www.st.com/resource/en/datasheet/esda6v1-5sc6.pdf
 * Keywords: ESD protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESDA6V1_5SC6 extends Component.withPins({
  /** Physical pin 2: GND; passive. */
  "GND": "2",
  /** Physical pin 1: IO1; passive. */
  "IO1": "1",
  /** Physical pin 3: IO2; passive. */
  "IO2": "3",
  /** Physical pin 4: IO3; passive. */
  "IO3": "4",
  /** Physical pin 5: IO4; passive. */
  "IO4": "5",
  /** Physical pin 6: IO5; passive. */
  "IO5": "6",
}) {
  override schema = "Power_Protection:ESDA6V1-5SC6";
  override referencePrefix = "D";
}

/**
 * Quad bidirectional transil, Suppressor for ESD protection, 5V Standoff, 4 Channels, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:ESDA6V1BC6`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/21/07/21/e3/a8/df/42/a2/CD00001906.pdf/files/CD00001906.pdf/jcr:content/translations/en.CD00001906.pdf
 * Keywords: ESD protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESDA6V1BC6 extends Component.withPins({
  /** Physical pin 2: COM; passive. */
  "COM_2": "2",
  /** Physical pin 1: TVS1; passive. */
  "TVS1": "1",
  /** Physical pin 3: TVS2; passive. */
  "TVS2": "3",
  /** Physical pin 4: TVS3; passive. */
  "TVS3": "4",
  /** Physical pin 5: COM; passive. */
  "COM_5": "5",
  /** Physical pin 6: TVS4; passive. */
  "TVS4": "6",
}) {
  override schema = "Power_Protection:ESDA6V1BC6";
  override referencePrefix = "D";
}

/**
 * Quad TVS Diode Array, 6.1V Standoff, 4 Channels, 400W, ±30kV, SOT-23-5
 *
 * KiCad symbol: `Power_Protection:ESDA6V1SC5`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see https://www.st.com/resource/en/datasheet/esda5v3sc6.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESDA6V1SC5 extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
  /** Physical pin 5: K; passive. */
  "K_5": "5",
}) {
  override schema = "Power_Protection:ESDA6V1SC5";
  override referencePrefix = "D";
}

/**
 * TVS Diode Array, 5.0V Standoff, 8 Channels, UDFN-9
 *
 * KiCad symbol: `Power_Protection:ESDLC5V0PB8`. Reference prefix: `D`.
 * Footprint filters: UDFN*1.0x3.8mm*P0.5mm*.
 * @see https://www.mccsemi.com/pdf/Products/ESDLC5V0PB8(DFN3810-9)-A.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_DFN_QFN:UDFN-9_1.0x3.8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESDLC5V0PB8 extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: K2; passive. */
  "K2": "2",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
  /** Physical pin 7: K6; passive. */
  "K6": "7",
  /** Physical pin 8: K7; passive. */
  "K7": "8",
  /** Physical pin 9: K8; passive. */
  "K8": "9",
}) {
  override schema = "Power_Protection:ESDLC5V0PB8";
  override referencePrefix = "D";
}

/**
 * 4-channel 1Gbps TVS Diode Array, 2.3pF, 4.5V breakdown, 30kV contact & air gap, SOT-23-5
 *
 * KiCad symbol: `Power_Protection:ESDS304`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/esds304.pdf
 * Keywords: usb ethernet esd protection suppression transient transient-voltage low-capacitance texas.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESDS304 extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
  /** Physical pin 5: K; passive. */
  "K_5": "5",
}) {
  override schema = "Power_Protection:ESDS304";
  override referencePrefix = "D";
}

/**
 * Single channel common mode filter with integrated ESD protection network
 *
 * KiCad symbol: `Power_Protection:IP3319CX6`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.4x1.0mm*P0.4mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP3319CX6.pdf
 * Keywords: common mode filter ESD protection.
 * Default footprint: Package_CSP:WLCSP-6_1.4x1.0mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP3319CX6 extends Component.withPins({
  /** Physical pin A1: D+_OUT; passive. */
  "D+_OUT": "A1",
  /** Physical pin A2: D+_IN; passive. */
  "D+_IN": "A2",
  /** Physical pin B1: D-_OUT; passive. */
  "D-_OUT": "B1",
  /** Physical pin B2: D-_IN; passive. */
  "D-_IN": "B2",
  /** Physical pin C1: GND; power_in. */
  "GND": "C1",
  /** Physical pin C2: ID; passive. */
  "ID": "C2",
}) {
  override schema = "Power_Protection:IP3319CX6";
  override referencePrefix = "U";
}

/**
 * ESD Protection, 2 channel, USB 2.0 to IEC 61000-4-2 level 4, 5.5V, SOT457 (SC-74-6)
 *
 * KiCad symbol: `Power_Protection:IP4234CZ6`. Reference prefix: `U`.
 * Footprint filters: SC?74?6*P0.95mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP4234CZ6.pdf
 * Keywords: USB ESD protection .
 * Default footprint: Package_TO_SOT_SMD:SC-74-6_1.55x2.9mm_P0.95mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP4234CZ6 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: VN; passive. */
  "VN": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: VP; passive. */
  "VP": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
}) {
  override schema = "Power_Protection:IP4234CZ6";
  override referencePrefix = "U";
}

/**
 * 4 channel EMI filters with integrated ESD protection, DFN-8
 *
 * KiCad symbol: `Power_Protection:NUF4401MN`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/NUF4401MN-D.PDF
 * Keywords: EMI ESD protection.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP0.6x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUF4401MN extends Component.withPins({
  /** Physical pin 1: IN1; passive. */
  "IN1": "1",
  /** Physical pin 2: IN2; passive. */
  "IN2": "2",
  /** Physical pin 3: IN3; passive. */
  "IN3": "3",
  /** Physical pin 4: IN4; passive. */
  "IN4": "4",
  /** Physical pin 5: OUT4; passive. */
  "OUT4": "5",
  /** Physical pin 6: OUT3; passive. */
  "OUT3": "6",
  /** Physical pin 7: OUT2; passive. */
  "OUT2": "7",
  /** Physical pin 8: OUT1; passive. */
  "OUT1": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
}) {
  override schema = "Power_Protection:NUF4401MN";
  override referencePrefix = "U";
}

/**
 * 4 channel EMI filters with integrated ESD protection, 100ohm series resistance, 5pF on each side, DFN-8
 *
 * KiCad symbol: `Power_Protection:IP4251CZ8-4-TTL`. Reference prefix: `U`.
 * Footprint filters: *HUSON*1EP*1.35x1.7mm*P0.4mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP4251_52_53_54-TTL.pdf
 * Keywords: EMI ESD protection.
 * Default footprint: Package_SON:Nexperia_HUSON-8_USON-8-1EP_1.35x1.7mm_P0.4mm_EP0.4x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP4251CZ8_4_TTL extends Component.withPins({
  /** Physical pin 1: IN1; passive. */
  "IN1": "1",
  /** Physical pin 2: IN2; passive. */
  "IN2": "2",
  /** Physical pin 3: IN3; passive. */
  "IN3": "3",
  /** Physical pin 4: IN4; passive. */
  "IN4": "4",
  /** Physical pin 5: OUT4; passive. */
  "OUT4": "5",
  /** Physical pin 6: OUT3; passive. */
  "OUT3": "6",
  /** Physical pin 7: OUT2; passive. */
  "OUT2": "7",
  /** Physical pin 8: OUT1; passive. */
  "OUT1": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
}) {
  override schema = "Power_Protection:IP4251CZ8-4-TTL";
  override referencePrefix = "U";
}

/**
 * 6 channel EMI filters with integrated ESD protection, 12 pF, 40 Ohm
 *
 * KiCad symbol: `Power_Protection:IP4252CZ12`. Reference prefix: `U`.
 * Footprint filters: *HUSON*1.35x2.5*EP0.4x2*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP4251_52_53_54-TTL.pdf
 * Keywords: EMI ESD protection.
 * Default footprint: Package_SON:Nexperia_HUSON-12_USON-12-1EP_1.35x2.5mm_P0.4mm_EP0.4x2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP4252CZ12 extends Component.withPins({
  /** Physical pin 1: CH1; passive. */
  "CH1_1": "1",
  /** Physical pin 2: CH2; passive. */
  "CH2_2": "2",
  /** Physical pin 3: CH3; passive. */
  "CH3_3": "3",
  /** Physical pin 4: CH4; passive. */
  "CH4_4": "4",
  /** Physical pin 5: CH5; passive. */
  "CH5_5": "5",
  /** Physical pin 6: CH6; passive. */
  "CH6_6": "6",
  /** Physical pin 7: CH6; passive. */
  "CH6_7": "7",
  /** Physical pin 8: CH5; passive. */
  "CH5_8": "8",
  /** Physical pin 9: CH4; passive. */
  "CH4_9": "9",
  /** Physical pin 10: CH3; passive. */
  "CH3_10": "10",
  /** Physical pin 11: CH2; passive. */
  "CH2_11": "11",
  /** Physical pin 12: CH1; passive. */
  "CH1_12": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
}) {
  override schema = "Power_Protection:IP4252CZ12";
  override referencePrefix = "U";
}

/**
 * 8 channel EMI filters with integrated ESD protection,  12 pF, 40 Ohm
 *
 * KiCad symbol: `Power_Protection:IP4252CZ16`. Reference prefix: `U`.
 * Footprint filters: *HUSON*1.35x3.3*EP0.4x2.8*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP4251_52_53_54-TTL.pdf
 * Keywords: EMI ESD protection.
 * Default footprint: Package_SON:Nexperia_HUSON-16_USON-16-1EP_1.35x3.3mm_P0.4mm_EP0.4x2.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP4252CZ16 extends Component.withPins({
  /** Physical pin 1: CH1; passive. */
  "CH1_1": "1",
  /** Physical pin 2: CH2; passive. */
  "CH2_2": "2",
  /** Physical pin 3: CH3; passive. */
  "CH3_3": "3",
  /** Physical pin 4: CH4; passive. */
  "CH4_4": "4",
  /** Physical pin 5: CH5; passive. */
  "CH5_5": "5",
  /** Physical pin 6: CH6; passive. */
  "CH6_6": "6",
  /** Physical pin 7: CH7; passive. */
  "CH7_7": "7",
  /** Physical pin 8: CH8; passive. */
  "CH8_8": "8",
  /** Physical pin 9: CH8; passive. */
  "CH8_9": "9",
  /** Physical pin 10: CH7; passive. */
  "CH7_10": "10",
  /** Physical pin 11: CH6; passive. */
  "CH6_11": "11",
  /** Physical pin 12: CH5; passive. */
  "CH5_12": "12",
  /** Physical pin 13: CH4; passive. */
  "CH4_13": "13",
  /** Physical pin 14: CH3; passive. */
  "CH3_14": "14",
  /** Physical pin 15: CH2; passive. */
  "CH2_15": "15",
  /** Physical pin 16: CH1; passive. */
  "CH1_16": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
  override schema = "Power_Protection:IP4252CZ16";
  override referencePrefix = "U";
}

/**
 * 4 channel EMI filters with integrated ESD protection, 12 pF, 40 Ohm
 *
 * KiCad symbol: `Power_Protection:IP4252CZ8`. Reference prefix: `U`.
 * Footprint filters: *HUSON*1.35x1.7*EP0.4x1.2*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP4251_52_53_54-TTL.pdf
 * Keywords: EMI ESD protection.
 * Default footprint: Package_SON:Nexperia_HUSON-8_USON-8-1EP_1.35x1.7mm_P0.4mm_EP0.4x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP4252CZ8 extends Component.withPins({
  /** Physical pin 1: CH1; passive. */
  "CH1_1": "1",
  /** Physical pin 2: CH2; passive. */
  "CH2_2": "2",
  /** Physical pin 3: CH3; passive. */
  "CH3_3": "3",
  /** Physical pin 4: CH4; passive. */
  "CH4_4": "4",
  /** Physical pin 5: CH4; passive. */
  "CH4_5": "5",
  /** Physical pin 6: CH3; passive. */
  "CH3_6": "6",
  /** Physical pin 7: CH2; passive. */
  "CH2_7": "7",
  /** Physical pin 8: CH1; passive. */
  "CH1_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
}) {
  override schema = "Power_Protection:IP4252CZ8";
  override referencePrefix = "U";
}

/**
 * 4 channel EMI filters with integrated ESD protection, 40ohm series resistance, 6pF on each side, DFN-8
 *
 * KiCad symbol: `Power_Protection:IP4252CZ8-4-TTL`. Reference prefix: `U`.
 * Footprint filters: *HUSON*1EP*1.35x1.7mm*P0.4mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP4251_52_53_54-TTL.pdf
 * Keywords: EMI ESD protection.
 * Default footprint: Package_SON:Nexperia_HUSON-8_USON-8-1EP_1.35x1.7mm_P0.4mm_EP0.4x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP4252CZ8_4_TTL extends Component.withPins({
  /** Physical pin 1: IN1; passive. */
  "IN1": "1",
  /** Physical pin 2: IN2; passive. */
  "IN2": "2",
  /** Physical pin 3: IN3; passive. */
  "IN3": "3",
  /** Physical pin 4: IN4; passive. */
  "IN4": "4",
  /** Physical pin 5: OUT4; passive. */
  "OUT4": "5",
  /** Physical pin 6: OUT3; passive. */
  "OUT3": "6",
  /** Physical pin 7: OUT2; passive. */
  "OUT2": "7",
  /** Physical pin 8: OUT1; passive. */
  "OUT1": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
}) {
  override schema = "Power_Protection:IP4252CZ8-4-TTL";
  override referencePrefix = "U";
}

/**
 * 4 channel EMI filters with integrated ESD protection, 200ohm series resistance, 15pF on each side, DFN-8
 *
 * KiCad symbol: `Power_Protection:IP4253CZ8-4-TTL`. Reference prefix: `U`.
 * Footprint filters: *HUSON*1EP*1.35x1.7mm*P0.4mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP4251_52_53_54-TTL.pdf
 * Keywords: EMI ESD protection.
 * Default footprint: Package_SON:Nexperia_HUSON-8_USON-8-1EP_1.35x1.7mm_P0.4mm_EP0.4x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP4253CZ8_4_TTL extends Component.withPins({
  /** Physical pin 1: IN1; passive. */
  "IN1": "1",
  /** Physical pin 2: IN2; passive. */
  "IN2": "2",
  /** Physical pin 3: IN3; passive. */
  "IN3": "3",
  /** Physical pin 4: IN4; passive. */
  "IN4": "4",
  /** Physical pin 5: OUT4; passive. */
  "OUT4": "5",
  /** Physical pin 6: OUT3; passive. */
  "OUT3": "6",
  /** Physical pin 7: OUT2; passive. */
  "OUT2": "7",
  /** Physical pin 8: OUT1; passive. */
  "OUT1": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
}) {
  override schema = "Power_Protection:IP4253CZ8-4-TTL";
  override referencePrefix = "U";
}

/**
 * 4 channel EMI filters with integrated ESD protection, 100ohm series resistance, 15pF on each side, DFN-8
 *
 * KiCad symbol: `Power_Protection:IP4254CZ8-4-TTL`. Reference prefix: `U`.
 * Footprint filters: *HUSON*1EP*1.35x1.7mm*P0.4mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/IP4251_52_53_54-TTL.pdf
 * Keywords: EMI ESD protection.
 * Default footprint: Package_SON:Nexperia_HUSON-8_USON-8-1EP_1.35x1.7mm_P0.4mm_EP0.4x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP4254CZ8_4_TTL extends Component.withPins({
  /** Physical pin 1: IN1; passive. */
  "IN1": "1",
  /** Physical pin 2: IN2; passive. */
  "IN2": "2",
  /** Physical pin 3: IN3; passive. */
  "IN3": "3",
  /** Physical pin 4: IN4; passive. */
  "IN4": "4",
  /** Physical pin 5: OUT4; passive. */
  "OUT4": "5",
  /** Physical pin 6: OUT3; passive. */
  "OUT3": "6",
  /** Physical pin 7: OUT2; passive. */
  "OUT2": "7",
  /** Physical pin 8: OUT1; passive. */
  "OUT1": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
}) {
  override schema = "Power_Protection:IP4254CZ8-4-TTL";
  override referencePrefix = "U";
}

/**
 * 28V Positive Overvoltage Protection Controller, DFN-6
 *
 * KiCad symbol: `Power_Protection:NCP349MN`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x1.6mm*P0.5mm*.
 * @see https://www.onsemi.com/pdf/datasheet/ncp349-d.pdf
 * Keywords: overvoltage protection.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x1.6mm_P0.5mm_EP1.15x1.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP349MN extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLAG}; open_collector. */
  "~{FLAG}": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
  /** Physical pin 6: ~{EN}; input. */
  "~{EN}": "6",
  /** Physical pin 7: IN; passive. */
  "IN_7": "7",
}) {
  override schema = "Power_Protection:NCP349MN";
  override referencePrefix = "U";
}

/**
 * 28V Positive Overvoltage Protection Controller, DFN-6
 *
 * KiCad symbol: `Power_Protection:NCP349MNAE`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x1.6mm*P0.5mm*.
 * @see https://www.onsemi.com/pdf/datasheet/ncp349-d.pdf
 * Keywords: overvoltage protection.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x1.6mm_P0.5mm_EP1.15x1.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP349MNAE extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLAG}; open_collector. */
  "~{FLAG}": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
  /** Physical pin 6: ~{EN}; input. */
  "~{EN}": "6",
  /** Physical pin 7: IN; passive. */
  "IN_7": "7",
}) {
  override schema = "Power_Protection:NCP349MNAE";
  override referencePrefix = "U";
}

/**
 * 28V Positive Overvoltage Protection Controller, DFN-6
 *
 * KiCad symbol: `Power_Protection:NCP349MNAM`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x1.6mm*P0.5mm*.
 * @see https://www.onsemi.com/pdf/datasheet/ncp349-d.pdf
 * Keywords: overvoltage protection.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x1.6mm_P0.5mm_EP1.15x1.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP349MNAM extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLAG}; open_collector. */
  "~{FLAG}": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
  /** Physical pin 6: ~{EN}; input. */
  "~{EN}": "6",
  /** Physical pin 7: IN; passive. */
  "IN_7": "7",
}) {
  override schema = "Power_Protection:NCP349MNAM";
  override referencePrefix = "U";
}

/**
 * 28V Positive Overvoltage Protection Controller, DFN-6
 *
 * KiCad symbol: `Power_Protection:NCP349MNBG`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x1.6mm*P0.5mm*.
 * @see https://www.onsemi.com/pdf/datasheet/ncp349-d.pdf
 * Keywords: overvoltage protection.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x1.6mm_P0.5mm_EP1.15x1.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP349MNBG extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLAG}; open_collector. */
  "~{FLAG}": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
  /** Physical pin 6: ~{EN}; input. */
  "~{EN}": "6",
  /** Physical pin 7: IN; passive. */
  "IN_7": "7",
}) {
  override schema = "Power_Protection:NCP349MNBG";
  override referencePrefix = "U";
}

/**
 * 28V Positive Overvoltage Protection Controller, DFN-6
 *
 * KiCad symbol: `Power_Protection:NCP349MNBK`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x1.6mm*P0.5mm*.
 * @see https://www.onsemi.com/pdf/datasheet/ncp349-d.pdf
 * Keywords: overvoltage protection.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x1.6mm_P0.5mm_EP1.15x1.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP349MNBK extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{FLAG}; open_collector. */
  "~{FLAG}": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
  /** Physical pin 6: ~{EN}; input. */
  "~{EN}": "6",
  /** Physical pin 7: IN; passive. */
  "IN_7": "7",
}) {
  override schema = "Power_Protection:NCP349MNBK";
  override referencePrefix = "U";
}

/**
 * USB Positive Overvoltage Protection Controller with Internal PMOS FET and Overcurrent Protection, DFN-6
 *
 * KiCad symbol: `Power_Protection:NCP361MU`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.65mm*.
 * @see https://www.onsemi.com/pdf/datasheet/ncp361-d.pdf
 * Keywords: overvoltage protection USB.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP361MU extends Component.withPins({
  /** Physical pin 1: ~{EN}; input. */
  "~{EN}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN; power_in. */
  "IN": "3",
  /** Physical pin 4: OUT; power_out. */
  "OUT_4": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT_5": "5",
  /** Physical pin 6: ~{FLAG}; open_collector. */
  "~{FLAG}": "6",
}) {
  override schema = "Power_Protection:NCP361MU";
  override referencePrefix = "U";
}

/**
 * USB Positive Overvoltage Protection Controller with Internal PMOS FET and Overcurrent Protection, TSOP-5
 *
 * KiCad symbol: `Power_Protection:NCP361SN`. Reference prefix: `U`.
 * Footprint filters: TSOP*1.65x3.05*P0.95*.
 * @see https://www.onsemi.com/pdf/datasheet/ncp361-d.pdf
 * Keywords: overvoltage protection USB.
 * Default footprint: Package_SO:TSOP-5_1.65x3.05mm_P0.95mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP361SN extends Component.withPins({
  /** Physical pin 1: IN; power_in. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{EN}; input. */
  "~{EN}": "3",
  /** Physical pin 4: ~{FLAG}; open_collector. */
  "~{FLAG}": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
  override schema = "Power_Protection:NCP361SN";
  override referencePrefix = "U";
}

/**
 * Dual Line CAN Bus Protector, 24Vrwm
 *
 * KiCad symbol: `Power_Protection:NUP2105L`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub_link/Collateral/NUP2105L-D.PDF
 * Keywords: can esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUP2105L extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Power_Protection:NUP2105L";
  override referencePrefix = "D";
}

/**
 * Transient voltage suppressor designed to protect high speed data lines from ESD, EFT, and lightning
 *
 * KiCad symbol: `Power_Protection:NUP2202`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.onsemi.com/pdf/datasheet/nup2202w1-d.pdf
 * Keywords: ESD Protection diodes  transient suppressor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUP2202 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; no_connect. */
  "P3": "3",
  /** Physical pin 4: unnamed; no_connect. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
}) {
  override schema = "Power_Protection:NUP2202";
  override referencePrefix = "U";
}

/**
 * Transient voltage suppressor designed to protect high speed data lines from ESD, EFT, and lightning
 *
 * KiCad symbol: `Power_Protection:NUP4202`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/NUP4202W1-D.PDF
 * Keywords: ESD Protection diodes  transient suppressor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUP4202 extends Component.withPins({
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
  override schema = "Power_Protection:NUP4202";
  override referencePrefix = "U";
}

/**
 * Common-mode EMI filter for differential channels with integrated ESD protection
 *
 * KiCad symbol: `Power_Protection:PCMF3USB3S`. Reference prefix: `U`.
 * Footprint filters: Nexperia*WLCSP*2.37x1.17mm*Layout6x3*P0.4mmP0.8mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/PCMFXUSB3S_SER.pdf
 * Keywords: Common Mode ESD.
 * Default footprint: Package_CSP:Nexperia_WLCSP-15_2.37x1.17mm_Layout6x3_P0.4mmP0.8mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCMF3USB3S extends Component.withPins({
  /** Physical pin A1: CH1_IN+; passive. */
  "CH1_IN+": "A1",
  /** Physical pin A2: CH1_IN-; passive. */
  "CH1_IN-": "A2",
  /** Physical pin B1: GND_CH1; power_in. */
  "GND_CH1": "B1",
  /** Physical pin C1: CH1_OUT+; passive. */
  "CH1_OUT+": "C1",
  /** Physical pin C2: CH1_OUT-; passive. */
  "CH1_OUT-": "C2",
  /** Physical pin A3: CH2_IN+; passive. */
  "CH2_IN+": "A3",
  /** Physical pin A4: CH2_IN-; passive. */
  "CH2_IN-": "A4",
  /** Physical pin B2: GND_CH2; power_in. */
  "GND_CH2": "B2",
  /** Physical pin C3: CH2_OUT+; passive. */
  "CH2_OUT+": "C3",
  /** Physical pin C4: CH2_OUT-; passive. */
  "CH2_OUT-": "C4",
  /** Physical pin A5: CH3_IN+; passive. */
  "CH3_IN+": "A5",
  /** Physical pin A6: CH3_IN-; passive. */
  "CH3_IN-": "A6",
  /** Physical pin B3: GND_CH3; power_in. */
  "GND_CH3": "B3",
  /** Physical pin C5: CH3_OUT+; passive. */
  "CH3_OUT+": "C5",
  /** Physical pin C6: CH3_OUT-; passive. */
  "CH3_OUT-": "C6",
}) {
  override schema = "Power_Protection:PCMF3USB3S";
  override referencePrefix = "U";
}

/**
 * Low capacitance unidirectional quadruple ESD protection diode array, 3.3V, Common Anode, SOT-886
 *
 * KiCad symbol: `Power_Protection:PESD3V3L4UF`. Reference prefix: `D`.
 * Footprint filters: SOT?886*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL4UF_G_W.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-886.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD3V3L4UF extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 6: K4; passive. */
  "K4": "6",
}) {
  override schema = "Power_Protection:PESD3V3L4UF";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional quadruple ESD protection diode array, 3.3V, Common Anode, SOT-353
 *
 * KiCad symbol: `Power_Protection:PESD3V3L4UG`. Reference prefix: `D`.
 * Footprint filters: SOT?353*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL4UF_G_W.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD3V3L4UG extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
}) {
  override schema = "Power_Protection:PESD3V3L4UG";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional quadruple ESD protection diode array, 3.3V, Common Anode, SOT-665
 *
 * KiCad symbol: `Power_Protection:PESD3V3L4UW`. Reference prefix: `D`.
 * Footprint filters: SOT?665*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL4UF_G_W.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-665.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD3V3L4UW extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
}) {
  override schema = "Power_Protection:PESD3V3L4UW";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional fivefold ESD protection diode array, 3.3V, Common Anode, SOT-886
 *
 * KiCad symbol: `Power_Protection:PESD3V3L5UF`. Reference prefix: `D`.
 * Footprint filters: SOT?886*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL5UF_V_Y.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-886.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD3V3L5UF extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
}) {
  override schema = "Power_Protection:PESD3V3L5UF";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional fivefold ESD protection diode array, 3.3V, Common Anode, SOT-666
 *
 * KiCad symbol: `Power_Protection:PESD3V3L5UV`. Reference prefix: `D`.
 * Footprint filters: SOT?666*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL5UF_V_Y.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-666.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD3V3L5UV extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
}) {
  override schema = "Power_Protection:PESD3V3L5UV";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional fivefold ESD protection diode array, 3.3V, Common Anode, SOT-363
 *
 * KiCad symbol: `Power_Protection:PESD3V3L5UY`. Reference prefix: `D`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL5UF_V_Y.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD3V3L5UY extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
}) {
  override schema = "Power_Protection:PESD3V3L5UY";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional quadruple ESD protection diode array, 5.0V, Common Anode, SOT-886
 *
 * KiCad symbol: `Power_Protection:PESD5V0L4UF`. Reference prefix: `D`.
 * Footprint filters: SOT?886*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL4UF_G_W.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-886.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD5V0L4UF extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 6: K4; passive. */
  "K4": "6",
}) {
  override schema = "Power_Protection:PESD5V0L4UF";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional quadruple ESD protection diode array, 5.0V, Common Anode, SOT-353
 *
 * KiCad symbol: `Power_Protection:PESD5V0L4UG`. Reference prefix: `D`.
 * Footprint filters: SOT?353*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL4UF_G_W.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD5V0L4UG extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
}) {
  override schema = "Power_Protection:PESD5V0L4UG";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional quadruple ESD protection diode array, 5.0V, Common Anode, SOT-665
 *
 * KiCad symbol: `Power_Protection:PESD5V0L4UW`. Reference prefix: `D`.
 * Footprint filters: SOT?665*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL4UF_G_W.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-665.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD5V0L4UW extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
}) {
  override schema = "Power_Protection:PESD5V0L4UW";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional fivefold ESD protection diode array, 5.0V, Common Anode, SOT-886
 *
 * KiCad symbol: `Power_Protection:PESD5V0L5UF`. Reference prefix: `D`.
 * Footprint filters: SOT?886*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL5UF_V_Y.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-886.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD5V0L5UF extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
}) {
  override schema = "Power_Protection:PESD5V0L5UF";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional fivefold ESD protection diode array, 5.0V, Common Anode, SOT-666
 *
 * KiCad symbol: `Power_Protection:PESD5V0L5UV`. Reference prefix: `D`.
 * Footprint filters: SOT?666*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL5UF_V_Y.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-666.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD5V0L5UV extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
}) {
  override schema = "Power_Protection:PESD5V0L5UV";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional fivefold ESD protection diode array, 5.0V, Common Anode, SOT-363
 *
 * KiCad symbol: `Power_Protection:PESD5V0L5UY`. Reference prefix: `D`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/PESDXL5UF_V_Y.pdf
 * Keywords: diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PESD5V0L5UY extends Component.withPins({
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: K2; passive. */
  "K2": "3",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
}) {
  override schema = "Power_Protection:PESD5V0L5UY";
  override referencePrefix = "D";
}

/**
 * Ultra low capacitance double rail-to-rail ESD protection diode, SOT-143
 *
 * KiCad symbol: `Power_Protection:PRTR5V0U2X`. Reference prefix: `D`.
 * Footprint filters: SOT?143*.
 * @see https://assets.nexperia.com/documents/data-sheet/PRTR5V0U2X.pdf
 * Keywords: ESD protection diode.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PRTR5V0U2X extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND": "1",
  /** Physical pin 2: I/O1; passive. */
  "I/O1": "2",
  /** Physical pin 3: I/O2; passive. */
  "I/O2": "3",
  /** Physical pin 4: VCC; passive. */
  "VCC": "4",
}) {
  override schema = "Power_Protection:PRTR5V0U2X";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional dual ESD protection diode, SC-75
 *
 * KiCad symbol: `Power_Protection:RCLAMP0502B`. Reference prefix: `D`.
 * Footprint filters: SOT?416*.
 * @see https://www.semtech.com/products/circuit-protection/low-capacitance/rclamp0502b
 * Keywords: tvs unidirectional.
 * Default footprint: Package_TO_SOT_SMD:SOT-416.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RCLAMP0502B extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: K2; passive. */
  "K2": "2",
}) {
  override schema = "Power_Protection:RCLAMP0502B";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional dual ESD protection diode, SC-75
 *
 * KiCad symbol: `Power_Protection:RCLAMP0502BA`. Reference prefix: `D`.
 * Footprint filters: SOT?416*.
 * @see https://www.semtech.com/products/circuit-protection/low-capacitance/rclamp0502ba
 * Keywords: tvs unidirectional.
 * Default footprint: Package_TO_SOT_SMD:SOT-416.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RCLAMP0502BA extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: K2; passive. */
  "K2": "2",
}) {
  override schema = "Power_Protection:RCLAMP0502BA";
  override referencePrefix = "D";
}

/**
 * Low capacitance unidirectional dual ESD protection diode, SC-75
 *
 * KiCad symbol: `Power_Protection:RCLAMP0582B`. Reference prefix: `D`.
 * Footprint filters: SOT?416*.
 * @see https://www.semtech.com/products/circuit-protection/low-capacitance/rclamp0582b
 * Keywords: tvs unidirectional.
 * Default footprint: Package_TO_SOT_SMD:SOT-416.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RCLAMP0582B extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: K2; passive. */
  "K2": "2",
}) {
  override schema = "Power_Protection:RCLAMP0582B";
  override referencePrefix = "D";
}

/**
 * USB port transient suppressors
 *
 * KiCad symbol: `Power_Protection:SN65220`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/sn65220.pdf
 * Keywords: USB suppressor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65220 extends Component.withPins({
  /** Physical pin 1: unnamed; no_connect. */
  "P1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: unnamed; no_connect. */
  "P3": "3",
  /** Physical pin 4: B; passive. */
  "B": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: A; passive. */
  "A": "6",
}) {
  override schema = "Power_Protection:SN65220";
  override referencePrefix = "U";
}

/**
 * USB port transient suppressors
 *
 * KiCad symbol: `Power_Protection:SN75240`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*, TSSOP*4.4x3mm*0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65220.pdf
 * Keywords: USB suppressor.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN75240 extends Component.withPins({
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: B; passive. */
  "B": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: A; passive. */
  "A": "8",
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: C; input. */
  "C": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
}) {
  override schema = "Power_Protection:SN75240";
  override referencePrefix = "U";
}

/**
 * USB port transient suppressors
 *
 * KiCad symbol: `Power_Protection:SN65240`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*, TSSOP*4.4x3mm*0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65220.pdf
 * Keywords: USB suppressor.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65240 extends Component.withPins({
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: B; passive. */
  "B": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: A; passive. */
  "A": "8",
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: C; input. */
  "C": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
}) {
  override schema = "Power_Protection:SN65240";
  override referencePrefix = "U";
}

/**
 * TVS Diode Array, 5.5V Standoff, 2 Channels, SC-70 package
 *
 * KiCad symbol: `Power_Protection:SP0502BAJT`. Reference prefix: `D`.
 * Footprint filters: SOT?323*.
 * @see http://www.littelfuse.com/~/media/files/littelfuse/technical%20resources/documents/data%20sheets/sp05xxba.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP0502BAJT extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Power_Protection:SP0502BAJT";
  override referencePrefix = "D";
}

/**
 * TVS Diode Array, 5.5V Standoff, 3 Channels, SOT-143 package
 *
 * KiCad symbol: `Power_Protection:SP0503BAHT`. Reference prefix: `D`.
 * Footprint filters: SOT?143*.
 * @see http://www.littelfuse.com/~/media/files/littelfuse/technical%20resources/documents/data%20sheets/sp05xxba.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP0503BAHT extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
}) {
  override schema = "Power_Protection:SP0503BAHT";
  override referencePrefix = "D";
}

/**
 * TVS Diode Array, 5.5V Standoff, 4 Channels, SC-70-5 package
 *
 * KiCad symbol: `Power_Protection:SP0504BAJT`. Reference prefix: `D`.
 * Footprint filters: SOT?353*.
 * @see http://www.littelfuse.com/~/media/files/littelfuse/technical%20resources/documents/data%20sheets/sp05xxba.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP0504BAJT extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
  /** Physical pin 5: K; passive. */
  "K_5": "5",
}) {
  override schema = "Power_Protection:SP0504BAJT";
  override referencePrefix = "D";
}

/**
 * TVS Diode Array, 5.5V Standoff, 5 Channels, SOT-23-6 package
 *
 * KiCad symbol: `Power_Protection:SP0505BAHT`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see http://www.littelfuse.com/~/media/files/littelfuse/technical%20resources/documents/data%20sheets/sp05xxba.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP0505BAHT extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
  /** Physical pin 5: K; passive. */
  "K_5": "5",
  /** Physical pin 6: K; passive. */
  "K_6": "6",
}) {
  override schema = "Power_Protection:SP0505BAHT";
  override referencePrefix = "D";
}

/**
 * TVS Diode Array, 5.5V Standoff, 5 Channels, SC-70-6 package
 *
 * KiCad symbol: `Power_Protection:SP0505BAJT`. Reference prefix: `D`.
 * Footprint filters: SOT?363*.
 * @see http://www.littelfuse.com/~/media/files/littelfuse/technical%20resources/documents/data%20sheets/sp05xxba.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP0505BAJT extends Component.withPins({
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 3: K; passive. */
  "K_3": "3",
  /** Physical pin 4: K; passive. */
  "K_4": "4",
  /** Physical pin 5: K; passive. */
  "K_5": "5",
  /** Physical pin 6: K; passive. */
  "K_6": "6",
}) {
  override schema = "Power_Protection:SP0505BAJT";
  override referencePrefix = "D";
}

/**
 * Low Capacitance TVS Diode Array, 5.0V Standoff, 8 Channels, UDFN-9
 *
 * KiCad symbol: `Power_Protection:SP7538P`. Reference prefix: `D`.
 * Footprint filters: UDFN*1.0x3.8mm*P0.5mm*.
 * @see https://www.littelfuse.com/~/media/electronics/datasheets/tvs_diode_arrays/littelfuse_tvs_diode_array_sp7538p_datasheet.pdf.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_DFN_QFN:UDFN-9_1.0x3.8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP7538P extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: K2; passive. */
  "K2": "2",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
  /** Physical pin 7: K6; passive. */
  "K6": "7",
  /** Physical pin 8: K7; passive. */
  "K7": "8",
  /** Physical pin 9: K8; passive. */
  "K8": "9",
}) {
  override schema = "Power_Protection:SP7538P";
  override referencePrefix = "D";
}

/**
 * Dual Line CAN Bus Protector, 24Vrwm, Automotive Grade
 *
 * KiCad symbol: `Power_Protection:SZNUP2105L`. Reference prefix: `D`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub_link/Collateral/NUP2105L-D.PDF
 * Keywords: can esd protection suppression transient automotive.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SZNUP2105L extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K; passive. */
  "K_1": "1",
  /** Physical pin 2: K; passive. */
  "K_2": "2",
}) {
  override schema = "Power_Protection:SZNUP2105L";
  override referencePrefix = "D";
}

/**
 * low capacitance single bidirectional high-speed protection, 250V 50mA 13.3ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA025-050-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA025_050_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA025-050-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 250V 100mA 7.1ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA025-100-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA025_100_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA025-100-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 250V 200mA 4.2ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA025-200-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA025_200_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA025-200-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 250V 300mA 3.2ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA025-300-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA025_300_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA025-300-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 250V 500mA 2.6ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA025-500-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA025_500_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA025-500-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 400V 50mA 14.3ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA040-050-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA040_050_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA040-050-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 400V 100mA 8.1ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA040-100-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA040_100_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA040-100-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 400V 200mA 5.2ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA040-200-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA040_200_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA040-200-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 400V 300mA 4.3ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA040-300-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA040_300_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA040-300-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 400V 500mA 3.6ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA040-500-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA040_500_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA040-500-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 500V 50mA 15.7ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA050-050-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA050_050_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA050-050-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 500V 100mA 9.5ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA050-100-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA050_100_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA050-100-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 500V 200mA 6.6ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA050-200-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA050_200_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA050-200-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 500V 300mA 5.6ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA050-300-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA050_300_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA050-300-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 500V 500mA 5.0ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA050-500-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA050_500_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA050-500-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 650V 50mA 17.7ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA065-050-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA065_050_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA065-050-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 650V 100mA 11.5ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA065-100-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA065_100_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA065-100-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 650V 200mA 8.6ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA065-200-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA065_200_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA065-200-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 650V 300mA 7.6ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA065-300-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA065_300_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA065-300-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 650V 500mA 7.0ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA065-500-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA065_500_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA065-500-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 850V 50mA 21.4ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA085-050-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA085_050_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA085-050-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 850V 100mA 15.2ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA085-100-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA085_100_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA085-100-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 850V 200mA 12.3ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA085-200-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA085_200_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA085-200-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 850V 300mA 11.3ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA085-300-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA085_300_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA085-300-WH";
  override referencePrefix = "F";
}

/**
 * low capacitance single bidirectional high-speed protection, 850V 500mA 10.7ohm, https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 *
 * KiCad symbol: `Power_Protection:TBU-CA085-500-WH`. Reference prefix: `F`.
 * Footprint filters: *Bourns*TBU?CA*.
 * @see https://www.bourns.com/data/global/pdfs/TBU-CA.pdf
 * Keywords: high speed bidirectional protection.
 * Default footprint: Fuse:Fuse_Bourns_TBU-CA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TBU_CA085_500_WH extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: 2; no_connect. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TBU-CA085-500-WH";
  override referencePrefix = "F";
}

/**
 * 1-Channel ESD Protection for Super-Speed USB 3.0 Interface, X1SON-2
 *
 * KiCad symbol: `Power_Protection:TPD1E05U06DPY`. Reference prefix: `U`.
 * Footprint filters: Texas*DPY0002A*.
 * @see https://www.ti.com/lit/ds/symlink/tpd1e05u06.pdf
 * Keywords: ESD protection USB 3.0.
 * Default footprint: Package_SON:Texas_DPY0002A_0.6x1mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD1E05U06DPY extends Component.withPins({
  /** Physical pin 1: I/O; passive. */
  "I/O": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
}) {
  override schema = "Power_Protection:TPD1E05U06DPY";
  override referencePrefix = "U";
}

/**
 * 1-Channel ESD Protection for Super-Speed USB 3.0 Interface, SOD-523
 *
 * KiCad symbol: `Power_Protection:TPD1E05U06DYA`. Reference prefix: `U`.
 * Footprint filters: *SOD*523*.
 * @see https://www.ti.com/lit/ds/symlink/tpd1e05u06.pdf
 * Keywords: ESD protection USB 3.0.
 * Default footprint: Diode_SMD:D_SOD-523.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD1E05U06DYA extends Component.withPins({
  /** Physical pin 1: I/O; passive. */
  "I/O": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
}) {
  override schema = "Power_Protection:TPD1E05U06DYA";
  override referencePrefix = "U";
}

/**
 * Dual-Channel High-Speed ESD Protection, SC-70
 *
 * KiCad symbol: `Power_Protection:TPD2E2U06DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/tpd2e2u06.pdf
 * Keywords: TVS.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD2E2U06DCK extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
}) {
  override schema = "Power_Protection:TPD2E2U06DCK";
  override referencePrefix = "U";
}

/**
 * Dual-Channel High-Speed ESD Protection, SOT-553
 *
 * KiCad symbol: `Power_Protection:TPD2E2U06DRL`. Reference prefix: `U`.
 * Footprint filters: SOT?553*.
 * @see http://www.ti.com/lit/ds/symlink/tpd2e2u06.pdf
 * Keywords: TVS.
 * Default footprint: Package_TO_SOT_SMD:SOT-553.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD2E2U06DRL extends Component.withPins({
  /** Physical pin 1: NC; passive. */
  "NC_1": "1",
  /** Physical pin 2: NC; passive. */
  "NC_2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
}) {
  override schema = "Power_Protection:TPD2E2U06DRL";
  override referencePrefix = "U";
}

/**
 * 2-Channel ESD Protection for Super-Speed USB 3.0 Interface, DRT-3
 *
 * KiCad symbol: `Power_Protection:TPD2EUSB30`. Reference prefix: `U`.
 * Footprint filters: Texas*DRT*.
 * @see http://www.ti.com/lit/ds/symlink/tpd2eusb30a.pdf
 * Keywords: ESD protection USB 3.0.
 * Default footprint: Package_TO_SOT_SMD:Texas_DRT-3.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD2EUSB30 extends Component.withPins({
  /** Physical pin 1: D+; passive. */
  "D+": "1",
  /** Physical pin 2: D-; passive. */
  "D-": "2",
  /** Physical pin 3: GND; passive. */
  "GND": "3",
}) {
  override schema = "Power_Protection:TPD2EUSB30";
  override referencePrefix = "U";
}

/**
 * 2-Channel ESD Protection for Super-Speed USB 3.0 Interface, DRT-3
 *
 * KiCad symbol: `Power_Protection:TPD2EUSB30A`. Reference prefix: `U`.
 * Footprint filters: Texas*DRT*.
 * @see http://www.ti.com/lit/ds/symlink/tpd2eusb30a.pdf
 * Keywords: ESD protection USB 3.0.
 * Default footprint: Package_TO_SOT_SMD:Texas_DRT-3.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD2EUSB30A extends Component.withPins({
  /** Physical pin 1: D+; passive. */
  "D+": "1",
  /** Physical pin 2: D-; passive. */
  "D-": "2",
  /** Physical pin 3: GND; passive. */
  "GND": "3",
}) {
  override schema = "Power_Protection:TPD2EUSB30A";
  override referencePrefix = "U";
}

/**
 * 2-Channel Ultra-Low Clamp Voltage ESD Solution With Series-Resistor Isolation, SOT-23
 *
 * KiCad symbol: `Power_Protection:TPD2S017`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tpd2s017.pdf
 * Keywords: ESD protection.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD2S017 extends Component.withPins({
  /** Physical pin 1: CH1Out; passive. */
  "CH1Out": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: CH1In; passive. */
  "CH1In": "3",
  /** Physical pin 4: CH2Int; passive. */
  "CH2Int": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: CH2Out; passive. */
  "CH2Out": "6",
}) {
  override schema = "Power_Protection:TPD2S017";
  override referencePrefix = "U";
}

/**
 * TPD3E001 Low-Capacitance 3-Channel ESD-Protection for High-Speed Data Interfaces
 *
 * KiCad symbol: `Power_Protection:TPD3E001DRLR`. Reference prefix: `U`.
 * Footprint filters: SOT?553*.
 * @see http://www.ti.com/lit/ds/symlink/tpd3e001.pdf
 * Keywords: ESD-Protection.
 * Default footprint: Package_TO_SOT_SMD:SOT-553.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD3E001DRLR extends Component.withPins({
  /** Physical pin 1: IO1; passive. */
  "IO1": "1",
  /** Physical pin 2: IO2; passive. */
  "IO2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: IO3; passive. */
  "IO3": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
}) {
  override schema = "Power_Protection:TPD3E001DRLR";
  override referencePrefix = "U";
}

/**
 * 3 channel EMI filters with integrated ESD protection for SIM Card Interface, USON-8
 *
 * KiCad symbol: `Power_Protection:TPD3F303DPV`. Reference prefix: `U`.
 * Footprint filters: *USON*1EP*1.6x2.1mm*P0.5mm*.
 * @see https://www.ti.com/lit/gpn/tpd3f303
 * Keywords: EMI ESD protection.
 * Default footprint: Package_SON:Texas_R-PUSON-N8_USON-8-1EP_1.6x2.1mm_P0.5mm_EP0.4x1.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD3F303DPV extends Component.withPins({
  /** Physical pin 1: DATA1_OUT; passive. */
  "DATA1_OUT": "1",
  /** Physical pin 2: CLK_OUT; passive. */
  "CLK_OUT": "2",
  /** Physical pin 3: DATA2_OUT; passive. */
  "DATA2_OUT": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: V_{CC}; power_in. */
  "V_{CC}": "5",
  /** Physical pin 6: DATA2_IN; passive. */
  "DATA2_IN": "6",
  /** Physical pin 7: CLK_IN; passive. */
  "CLK_IN": "7",
  /** Physical pin 8: DATA1_IN; passive. */
  "DATA1_IN": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
}) {
  override schema = "Power_Protection:TPD3F303DPV";
  override referencePrefix = "U";
}

/**
 * Current Limit Switch and D+/D– ESD Protection for USB Host Port, 0.5A, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:TPD3S014`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tpd3s014.pdf
 * Keywords: ESD-Protection.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD3S014 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN; power_in. */
  "IN": "3",
  /** Physical pin 4: OUT; passive. */
  "OUT": "4",
  /** Physical pin 5: D1; passive. */
  "D1": "5",
  /** Physical pin 6: D2; passive. */
  "D2": "6",
}) {
  override schema = "Power_Protection:TPD3S014";
  override referencePrefix = "U";
}

/**
 * Current Limit Switch and D+/D– ESD Protection for USB Host Port, 1.5A, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:TPD3S044`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tpd3s014.pdf
 * Keywords: ESD-Protection.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD3S044 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN; power_in. */
  "IN": "3",
  /** Physical pin 4: OUT; passive. */
  "OUT": "4",
  /** Physical pin 5: D1; passive. */
  "D1": "5",
  /** Physical pin 6: D2; passive. */
  "D2": "6",
}) {
  override schema = "Power_Protection:TPD3S044";
  override referencePrefix = "U";
}

/**
 * 4-Channel ESD Protection Diode for USB Type-C and HDMI 2.0, USON-10
 *
 * KiCad symbol: `Power_Protection:TPD4E02B04DQA`. Reference prefix: `U`.
 * Footprint filters: USON*2.5x1.0mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tpd4e02b04.pdf
 * Keywords: ESD protection USB HDMI.
 * Default footprint: Package_SON:USON-10_2.5x1.0mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD4E02B04DQA extends Component.withPins({
  /** Physical pin 3: G; passive. */
  "G_3": "3",
  /** Physical pin 1: IO1; passive. */
  "IO1": "1",
  /** Physical pin 2: IO2; passive. */
  "IO2": "2",
  /** Physical pin 4: IO3; passive. */
  "IO3": "4",
  /** Physical pin 5: IO4; passive. */
  "IO4": "5",
  /** Physical pin 6: NC; free. */
  "NC_6": "6",
  /** Physical pin 7: NC; free. */
  "NC_7": "7",
  /** Physical pin 8: G; passive. */
  "G_8": "8",
  /** Physical pin 9: NC; free. */
  "NC_9": "9",
  /** Physical pin 10: NC; free. */
  "NC_10": "10",
}) {
  override schema = "Power_Protection:TPD4E02B04DQA";
  override referencePrefix = "U";
}

/**
 * 4-Channel ESD Protection for Super-Speed USB 3.0 Interface, USON-10
 *
 * KiCad symbol: `Power_Protection:TPD4EUSB30`. Reference prefix: `U`.
 * Footprint filters: USON*2.5x1.0mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tpd2eusb30a.pdf
 * Keywords: ESD protection USB 3.0.
 * Default footprint: Package_SON:USON-10_2.5x1.0mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD4EUSB30 extends Component.withPins({
  /** Physical pin 1: D1+; passive. */
  "D1+": "1",
  /** Physical pin 2: D1-; passive. */
  "D1-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D2+; passive. */
  "D2+": "4",
  /** Physical pin 5: D2-; passive. */
  "D2-": "5",
  /** Physical pin 6: NC; free. */
  "NC_6": "6",
  /** Physical pin 7: NC; free. */
  "NC_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: NC; free. */
  "NC_9": "9",
  /** Physical pin 10: NC; free. */
  "NC_10": "10",
}) {
  override schema = "Power_Protection:TPD4EUSB30";
  override referencePrefix = "U";
}

/**
 * 4-Channel ESD Protection for Super-Speed USB 3.0 Interface, USON-10
 *
 * KiCad symbol: `Power_Protection:TPD4E05U06DQA`. Reference prefix: `U`.
 * Footprint filters: USON*2.5x1.0mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tpd4e05u06.pdf
 * Keywords: ESD protection USB 3.0.
 * Default footprint: Package_SON:USON-10_2.5x1.0mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD4E05U06DQA extends Component.withPins({
  /** Physical pin 1: D1+; passive. */
  "D1+": "1",
  /** Physical pin 2: D1-; passive. */
  "D1-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D2+; passive. */
  "D2+": "4",
  /** Physical pin 5: D2-; passive. */
  "D2-": "5",
  /** Physical pin 6: NC; free. */
  "NC_6": "6",
  /** Physical pin 7: NC; free. */
  "NC_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: NC; free. */
  "NC_9": "9",
  /** Physical pin 10: NC; free. */
  "NC_10": "10",
}) {
  override schema = "Power_Protection:TPD4E05U06DQA";
  override referencePrefix = "U";
}

/**
 * USB Charger Port Protection Including ESD Protection for All Lines and Overvoltage Protection on VBUS
 *
 * KiCad symbol: `Power_Protection:TPD4S014`. Reference prefix: `U`.
 * Footprint filters: Package?SON:Texas?S?PWSON?N10*.
 * @see http://www.ti.com/lit/ds/symlink/tpd4s014.pdf
 * Keywords: USB  Port Protection.
 * Default footprint: Package_SON:Texas_S-PWSON-N10.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD4S014 extends Component.withPins({
  /** Physical pin 1: VBUSOUT; power_out. */
  "VBUSOUT_1": "1",
  /** Physical pin 2: VBUSOUT; passive. */
  "VBUSOUT_2": "2",
  /** Physical pin 3: ~{EN}; input. */
  "~{EN}": "3",
  /** Physical pin 4: ~{ACK}; open_collector. */
  "~{ACK}": "4",
  /** Physical pin 5: ID; passive. */
  "ID": "5",
  /** Physical pin 6: D-; passive. */
  "D-": "6",
  /** Physical pin 7: D+; passive. */
  "D+": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VBUS; power_in. */
  "VBUS_9": "9",
  /** Physical pin 10: VBUS; passive. */
  "VBUS_10": "10",
  /** Physical pin 11: PAD; power_in. */
  "PAD": "11",
}) {
  override schema = "Power_Protection:TPD4S014";
  override referencePrefix = "U";
}

/**
 * Firewire ESD Clamp With Live-Insertion Detection Circuit, X2SON-8
 *
 * KiCad symbol: `Power_Protection:TPD4S1394`. Reference prefix: `U`.
 * Footprint filters: X2SON*1.4x1mm*P0.35mm*.
 * @see http://www.ti.com/lit/ds/symlink/tpd4s1394.pdf
 * Keywords: firewire ESD clamp.
 * Default footprint: Package_SON:X2SON-8_1.4x1mm_P0.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD4S1394 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCLMP; passive. */
  "VCLMP": "3",
  /** Physical pin 4: FWPWR_EN; passive. */
  "FWPWR_EN": "4",
  /** Physical pin 5: D2+; passive. */
  "D2+": "5",
  /** Physical pin 6: D2-; passive. */
  "D2-": "6",
  /** Physical pin 7: D1+; passive. */
  "D1+": "7",
  /** Physical pin 8: D1-; passive. */
  "D1-": "8",
}) {
  override schema = "Power_Protection:TPD4S1394";
  override referencePrefix = "U";
}

/**
 * 6-Channel ESD Protection for Super-Speed USB 3.0 Interface, USON-14
 *
 * KiCad symbol: `Power_Protection:TPD6E05U06RVZ`. Reference prefix: `U`.
 * Footprint filters: Texas*PUSON*14*.
 * @see https://www.ti.com/lit/ds/symlink/tpd1e05u06.pdf
 * Keywords: ESD protection USB 3.0.
 * Default footprint: Package_SON:Texas_R-PUSON-N14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD6E05U06RVZ extends Component.withPins({
  /** Physical pin 1: NC; free. */
  "NC_1": "1",
  /** Physical pin 2: NC; free. */
  "NC_2": "2",
  /** Physical pin 3: NC; free. */
  "NC_3": "3",
  /** Physical pin 4: NC; free. */
  "NC_4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: NC; free. */
  "NC_6": "6",
  /** Physical pin 7: NC; free. */
  "NC_7": "7",
  /** Physical pin 8: D3-; passive. */
  "D3-": "8",
  /** Physical pin 9: D3+; passive. */
  "D3+": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: D2-; passive. */
  "D2-": "11",
  /** Physical pin 12: D2+; passive. */
  "D2+": "12",
  /** Physical pin 13: D1-; passive. */
  "D1-": "13",
  /** Physical pin 14: D1+; passive. */
  "D1+": "14",
}) {
  override schema = "Power_Protection:TPD6E05U06RVZ";
  override referencePrefix = "U";
}

/**
 * 6 channel EMI filters with integrated ESD protection
 *
 * KiCad symbol: `Power_Protection:TPD6F003`. Reference prefix: `U`.
 * Footprint filters: *WSON*EP0.4x2mm*.
 * @see http://www.ti.com/lit/ds/symlink/tpd6f003.pdf
 * Keywords: EMI, ESD protection.
 * Default footprint: Package_SON:Texas_R-PWSON-N12_EP0.4x2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD6F003 extends Component.withPins({
  /** Physical pin 1: Ch1_In; passive. */
  "Ch1_In": "1",
  /** Physical pin 2: Ch2_In; passive. */
  "Ch2_In": "2",
  /** Physical pin 3: Ch3_In; passive. */
  "Ch3_In": "3",
  /** Physical pin 4: Ch4_In; passive. */
  "Ch4_In": "4",
  /** Physical pin 5: Ch5_In; passive. */
  "Ch5_In": "5",
  /** Physical pin 6: Ch6_In; passive. */
  "Ch6_In": "6",
  /** Physical pin 7: Ch6_Out; passive. */
  "Ch6_Out": "7",
  /** Physical pin 8: Ch5_Out; passive. */
  "Ch5_Out": "8",
  /** Physical pin 9: Ch4_Out; passive. */
  "Ch4_Out": "9",
  /** Physical pin 10: Ch3_Out; passive. */
  "Ch3_Out": "10",
  /** Physical pin 11: Ch2_Out; passive. */
  "Ch2_Out": "11",
  /** Physical pin 12: Ch1_Out; passive. */
  "Ch1_Out": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
}) {
  override schema = "Power_Protection:TPD6F003";
  override referencePrefix = "U";
}

/**
 * USB Type-C Port Protector: Short-to-VBUS Overvoltage and IEC ESD Protection, WQFN-20
 *
 * KiCad symbol: `Power_Protection:TPD6S300A`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*3x3mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tpd6s300a.pdf
 * Keywords: USB-C ESD.
 * Default footprint: Package_DFN_QFN:WQFN-20-1EP_3x3mm_P0.4mm_EP1.7x1.7mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD6S300A extends Component.withPins({
  /** Physical pin 1: C_SBU1; bidirectional. */
  "C_SBU1": "1",
  /** Physical pin 2: C_SBU2; bidirectional. */
  "C_SBU2": "2",
  /** Physical pin 3: VBIAS; passive. */
  "VBIAS": "3",
  /** Physical pin 4: C_CC1; bidirectional. */
  "C_CC1": "4",
  /** Physical pin 5: C_CC2; bidirectional. */
  "C_CC2": "5",
  /** Physical pin 6: RPD_G2; bidirectional. */
  "RPD_G2": "6",
  /** Physical pin 7: RPD_G1; bidirectional. */
  "RPD_G1": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ~{FLT}; open_collector. */
  "~{FLT}": "9",
  /** Physical pin 10: VPWR; power_in. */
  "VPWR": "10",
  /** Physical pin 11: CC2; bidirectional. */
  "CC2": "11",
  /** Physical pin 12: CC1; bidirectional. */
  "CC1": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: SBU2; bidirectional. */
  "SBU2": "14",
  /** Physical pin 15: SBU1; bidirectional. */
  "SBU1": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: D2; passive. */
  "D2": "19",
  /** Physical pin 20: D1; passive. */
  "D1": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "Power_Protection:TPD6S300A";
  override referencePrefix = "U";
}

/**
 * 8 channel EMI filters with integrated ESD protection
 *
 * KiCad symbol: `Power_Protection:TPD8F003`. Reference prefix: `U`.
 * Footprint filters: WSON*3.3x1.35*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/tpd6f003.pdf
 * Keywords: EMI, ESD protection.
 * Default footprint: Package_SON:WSON-16_3.3x1.35_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD8F003 extends Component.withPins({
  /** Physical pin 1: Ch1_In; passive. */
  "Ch1_In": "1",
  /** Physical pin 2: Ch2_In; passive. */
  "Ch2_In": "2",
  /** Physical pin 3: Ch3_In; passive. */
  "Ch3_In": "3",
  /** Physical pin 4: Ch4_In; passive. */
  "Ch4_In": "4",
  /** Physical pin 5: Ch5_In; passive. */
  "Ch5_In": "5",
  /** Physical pin 6: Ch6_In; passive. */
  "Ch6_In": "6",
  /** Physical pin 7: Ch7_In; passive. */
  "Ch7_In": "7",
  /** Physical pin 8: Ch8_In; passive. */
  "Ch8_In": "8",
  /** Physical pin 9: Ch8_Out; passive. */
  "Ch8_Out": "9",
  /** Physical pin 10: Ch7_Out; passive. */
  "Ch7_Out": "10",
  /** Physical pin 11: Ch6_Out; passive. */
  "Ch6_Out": "11",
  /** Physical pin 12: Ch5_Out; passive. */
  "Ch5_Out": "12",
  /** Physical pin 13: Ch4_Out; passive. */
  "Ch4_Out": "13",
  /** Physical pin 14: Ch3_Out; passive. */
  "Ch3_Out": "14",
  /** Physical pin 15: Ch2_Out; passive. */
  "Ch2_Out": "15",
  /** Physical pin 16: Ch1_Out; passive. */
  "Ch1_Out": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
  override schema = "Power_Protection:TPD8F003";
  override referencePrefix = "U";
}

/**
 * Flat-Clamp Surge Protection Device. 5Vrwm, WSON-6
 *
 * KiCad symbol: `Power_Protection:TVS0500DRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*2x2mm*P0.65mm*EP1x1.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/tvs0500.pdf
 * Keywords: EMI, ESD, TVS protection transient.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TVS0500DRV extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: IN; passive. */
  "IN_4": "4",
  /** Physical pin 5: IN; passive. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Power_Protection:TVS0500DRV";
  override referencePrefix = "U";
}

/**
 * Flat-Clamp Surge Protection Device. 14Vrwm, WSON-6
 *
 * KiCad symbol: `Power_Protection:TVS1400DRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*2x2mm*P0.65mm*EP1x1.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/tvs1400.pdf
 * Keywords: EMI, ESD, TVS protection transient.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TVS1400DRV extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: IN; passive. */
  "IN_4": "4",
  /** Physical pin 5: IN; passive. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Power_Protection:TVS1400DRV";
  override referencePrefix = "U";
}

/**
 * Flat-Clamp Surge Protection Device. 18Vrwm, WSON-6
 *
 * KiCad symbol: `Power_Protection:TVS1800DRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*2x2mm*P0.65mm*EP1x1.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/tvs1800.pdf
 * Keywords: EMI, ESD, TVS protection transient.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TVS1800DRV extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: IN; passive. */
  "IN_4": "4",
  /** Physical pin 5: IN; passive. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Power_Protection:TVS1800DRV";
  override referencePrefix = "U";
}

/**
 * Flat-Clamp Surge Protection Device. 22Vrwm, WSON-6
 *
 * KiCad symbol: `Power_Protection:TVS2200DRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*2x2mm*P0.65mm*EP1x1.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/tvs2200.pdf
 * Keywords: EMI, ESD, TVS protection transient.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TVS2200DRV extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: IN; passive. */
  "IN_4": "4",
  /** Physical pin 5: IN; passive. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Power_Protection:TVS2200DRV";
  override referencePrefix = "U";
}

/**
 * Flat-Clamp Surge Protection Device. 27Vrwm, WSON-6
 *
 * KiCad symbol: `Power_Protection:TVS2700DRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*2x2mm*P0.65mm*EP1x1.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/tvs2700.pdf
 * Keywords: EMI, ESD, TVS protection transient.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TVS2700DRV extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: IN; passive. */
  "IN_4": "4",
  /** Physical pin 5: IN; passive. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Power_Protection:TVS2700DRV";
  override referencePrefix = "U";
}

/**
 * Flat-Clamp Surge Protection Device. 33Vrwm, WSON-6
 *
 * KiCad symbol: `Power_Protection:TVS3300DRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*2x2mm*P0.65mm*EP1x1.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/tvs3300.pdf
 * Keywords: EMI, ESD, TVS protection transient.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TVS3300DRV extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: IN; passive. */
  "IN_4": "4",
  /** Physical pin 5: IN; passive. */
  "IN_5": "5",
  /** Physical pin 6: IN; passive. */
  "IN_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Power_Protection:TVS3300DRV";
  override referencePrefix = "U";
}

/**
 * 5V Data line protection
 *
 * KiCad symbol: `Power_Protection:USB6B1`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/3e/ec/b2/54/b2/76/47/90/CD00001361.pdf/files/CD00001361.pdf/jcr:content/translations/en.CD00001361.pdf
 * Keywords: ESD USB.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB6B1 extends Component.withPins({
  /** Physical pin 1: VBUS; passive. */
  "VBUS_1": "1",
  /** Physical pin 2: I/O1; passive. */
  "I/O1_2": "2",
  /** Physical pin 3: I/O2; passive. */
  "I/O2_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: I/O2; passive. */
  "I/O2_6": "6",
  /** Physical pin 7: I/O1; passive. */
  "I/O1_7": "7",
  /** Physical pin 8: VBUS; passive. */
  "VBUS_8": "8",
}) {
  override schema = "Power_Protection:USB6B1";
  override referencePrefix = "U";
}

/**
 * Very low capacitance ESD protection diode, 2 data-line, SOT-666
 *
 * KiCad symbol: `Power_Protection:USBLC6-2P6`. Reference prefix: `U`.
 * Footprint filters: SOT?666*.
 * @see https://www.st.com/resource/en/datasheet/usblc6-2.pdf
 * Keywords: usb ethernet video.
 * Default footprint: Package_TO_SOT_SMD:SOT-666.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USBLC6_2P6 extends Component.withPins({
  /** Physical pin 1: I/O1; passive. */
  "I/O1_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND": "2",
  /** Physical pin 3: I/O2; passive. */
  "I/O2_3": "3",
  /** Physical pin 4: I/O2; passive. */
  "I/O2_4": "4",
  /** Physical pin 5: VBUS; passive. */
  "VBUS": "5",
  /** Physical pin 6: I/O1; passive. */
  "I/O1_6": "6",
}) {
  override schema = "Power_Protection:USBLC6-2P6";
  override referencePrefix = "U";
}

/**
 * Very low capacitance ESD protection diode, 2 data-line, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:USBLC6-2SC6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.st.com/resource/en/datasheet/usblc6-2.pdf
 * Keywords: usb ethernet video.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USBLC6_2SC6 extends Component.withPins({
  /** Physical pin 1: I/O1; passive. */
  "I/O1_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND": "2",
  /** Physical pin 3: I/O2; passive. */
  "I/O2_3": "3",
  /** Physical pin 4: I/O2; passive. */
  "I/O2_4": "4",
  /** Physical pin 5: VBUS; passive. */
  "VBUS": "5",
  /** Physical pin 6: I/O1; passive. */
  "I/O1_6": "6",
}) {
  override schema = "Power_Protection:USBLC6-2SC6";
  override referencePrefix = "U";
}

/**
 * Very low capacitance ESD protection diode, 4 data-line, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:USBLC6-4SC6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.st.com/resource/en/datasheet/usblc6-4.pdf
 * Keywords: usb ethernet sim card video.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USBLC6_4SC6 extends Component.withPins({
  /** Physical pin 1: I/O1; passive. */
  "I/O1": "1",
  /** Physical pin 2: GND; passive. */
  "GND": "2",
  /** Physical pin 3: I/O2; passive. */
  "I/O2": "3",
  /** Physical pin 4: I/O3; passive. */
  "I/O3": "4",
  /** Physical pin 5: VBUS; passive. */
  "VBUS": "5",
  /** Physical pin 6: I/O4; passive. */
  "I/O4": "6",
}) {
  override schema = "Power_Protection:USBLC6-4SC6";
  override referencePrefix = "U";
}

/**
 * Low Capacitance TVS Diode Array, 2 Channels, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:WE-TVS-82400102`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.we-online.com/components/products/datasheet/82400102.pdf
 * Keywords: ESD Protection TVS High-speed USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WE_TVS_82400102 extends Component.withPins({
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
  override schema = "Power_Protection:WE-TVS-82400102";
  override referencePrefix = "U";
}

/**
 * Obsolete, EOL, TVS Diode Array, 1.2V Standoff, 8 Channels, UDFN-9
 *
 * KiCad symbol: `Power_Protection:WE-TVS-824014881`. Reference prefix: `D`.
 * Footprint filters: UDFN*1.0x3.8mm*P0.5mm*.
 * @see https://eu.mouser.com/datasheet/2/445/824014881-1724976.pdf
 * Keywords: usb esd protection suppression transient.
 * Default footprint: Package_DFN_QFN:UDFN-9_1.0x3.8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WE_TVS_824014881 extends Component.withPins({
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 1: K1; passive. */
  "K1": "1",
  /** Physical pin 2: K2; passive. */
  "K2": "2",
  /** Physical pin 4: K3; passive. */
  "K3": "4",
  /** Physical pin 5: K4; passive. */
  "K4": "5",
  /** Physical pin 6: K5; passive. */
  "K5": "6",
  /** Physical pin 7: K6; passive. */
  "K6": "7",
  /** Physical pin 8: K7; passive. */
  "K7": "8",
  /** Physical pin 9: K8; passive. */
  "K8": "9",
}) {
  override schema = "Power_Protection:WE-TVS-824014881";
  override referencePrefix = "D";
}

/**
 * Low Capacitance TVS Diode Array, 2 Channels, SOT-23-6
 *
 * KiCad symbol: `Power_Protection:WE-TVS-824015043`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.we-online.com/components/products/datasheet/824015043.pdf
 * Keywords: ESD Protection TVS High-speed USB.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WE_TVS_824015043 extends Component.withPins({
  /** Physical pin 1: I/O1; passive. */
  "I/O1": "1",
  /** Physical pin 2: GND; passive. */
  "GND": "2",
  /** Physical pin 3: I/O2; passive. */
  "I/O2": "3",
  /** Physical pin 4: I/O3; passive. */
  "I/O3": "4",
  /** Physical pin 5: VBUS; passive. */
  "VBUS": "5",
  /** Physical pin 6: I/O4; passive. */
  "I/O4": "6",
}) {
  override schema = "Power_Protection:WE-TVS-824015043";
  override referencePrefix = "U";
}

/**
 * Polymer Protected Zener Diode, 5.6V, 1.30A, 24V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN056V130A24LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN056V130A24LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN056V130A24LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 5.6V, 0.75A, 48V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN056V075A48LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN056V075A48LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN056V075A48LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 5.6V, 1.15A, 24V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN056V115A24LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN056V115A24LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN056V115A24LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 5.6V, 2.30A, 16V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN056V230A16LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN056V230A16LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN056V230A16LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 5.9V, 1.30A, 24V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN059V130A24LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN059V130A24LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN059V130A24LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 6.5V, 1.30A, 24V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN065V130A24LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN065V130A24LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN065V130A24LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 6.5V, 2.30A, 16V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN065V230A16LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN065V230A16LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN065V230A16LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 9.8V, 1.30A, 24V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN098V130A24LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN098V130A24LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN098V130A24LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 9.8V, 2.30A, 16V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN098V230A16LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN098V230A16LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN098V230A16LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 13.2V, 0.75A, 48V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN132V075A48LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN132V075A48LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN132V075A48LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 13.2V, 1.30A, 24V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN132V130A24LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN132V130A24LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN132V130A24LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 13.2V, 2.30A, 16V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN132V230A16LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN132V230A16LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN132V230A16LS";
  override referencePrefix = "D";
}

/**
 * Polymer Protected Zener Diode, 16.4V, 1.30A, 24V, LS
 *
 * KiCad symbol: `Power_Protection:ZEN164V130A24LS`. Reference prefix: `D`.
 * Footprint filters: Littelfuse*PolyZen*LS*.
 * @see http://m.littelfuse.com/~/media/electronics/datasheets/polyzen_devices/littelfuse_polyzen_standard_polyzen_catalog_datasheet.pdf.pdf
 * Keywords: Polymer zener.
 * Default footprint: Diode_SMD:Littelfuse_PolyZen-LS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZEN164V130A24LS extends Component.withPins({
  /** Physical pin 1: VIN; passive. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VOUT; passive. */
  "VOUT": "3",
}) {
  override schema = "Power_Protection:ZEN164V130A24LS";
  override referencePrefix = "D";
}

