// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Full/Low Speed, iCoupler USB Digital Isolator, 5kV protection, SOIC-16
 *
 * KiCad symbol: `Interface_USB:ADUM4160`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADuM4160.pdf
 * Keywords: usb isolation.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADUM4160 extends Component.withPins({
  /** Physical pin 1: VBUS1; power_in. */
  "VBUS1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: VDD1; power_in. */
  "VDD1": "3",
  /** Physical pin 4: PDEN; input. */
  "PDEN": "4",
  /** Physical pin 5: SPU; input. */
  "SPU": "5",
  /** Physical pin 6: UD-; bidirectional. */
  "UD-": "6",
  /** Physical pin 7: UD+; bidirectional. */
  "UD+": "7",
  /** Physical pin 8: GND1; power_in. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: DD+; bidirectional. */
  "DD+": "10",
  /** Physical pin 11: DD-; bidirectional. */
  "DD-": "11",
  /** Physical pin 12: PIN; input. */
  "PIN": "12",
  /** Physical pin 13: SPD; input. */
  "SPD": "13",
  /** Physical pin 14: VDD2; power_in. */
  "VDD2": "14",
  /** Physical pin 15: GND2; power_in. */
  "GND2_15": "15",
  /** Physical pin 16: VBUS2; power_in. */
  "VBUS2": "16",
}) {
  override schema = "Interface_USB:ADUM4160";
  override referencePrefix = "U";
}

/**
 * Full/Low Speed, iCoupler USB Digital Isolator, 2.5kV protection
 *
 * KiCad symbol: `Interface_USB:ADUM3160`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADuM3160.pdf
 * Keywords: usb isolation.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADUM3160 extends Component.withPins({
  /** Physical pin 1: VBUS1; power_in. */
  "VBUS1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: VDD1; power_in. */
  "VDD1": "3",
  /** Physical pin 4: PDEN; input. */
  "PDEN": "4",
  /** Physical pin 5: SPU; input. */
  "SPU": "5",
  /** Physical pin 6: UD-; bidirectional. */
  "UD-": "6",
  /** Physical pin 7: UD+; bidirectional. */
  "UD+": "7",
  /** Physical pin 8: GND1; power_in. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: DD+; bidirectional. */
  "DD+": "10",
  /** Physical pin 11: DD-; bidirectional. */
  "DD-": "11",
  /** Physical pin 12: PIN; input. */
  "PIN": "12",
  /** Physical pin 13: SPD; input. */
  "SPD": "13",
  /** Physical pin 14: VDD2; power_in. */
  "VDD2": "14",
  /** Physical pin 15: GND2; power_in. */
  "GND2_15": "15",
  /** Physical pin 16: VBUS2; power_in. */
  "VBUS2": "16",
}) {
  override schema = "Interface_USB:ADUM3160";
  override referencePrefix = "U";
}

/**
 * USB Type-C PD Sink Controller, QFN-24
 *
 * KiCad symbol: `Interface_USB:AP33771`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.diodes.com/assets/Datasheets/AP33771.pdf
 * Keywords: USB Type C PD Sink.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP33771 extends Component.withPins({
  /** Physical pin 1: ISENP; bidirectional. */
  "ISENP": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: VSEL1; bidirectional. */
  "VSEL1": "7",
  /** Physical pin 8: GPIO1; bidirectional. */
  "GPIO1": "8",
  /** Physical pin 9: VSEL0; bidirectional. */
  "VSEL0": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VSEL2; bidirectional. */
  "VSEL2": "11",
  /** Physical pin 12: V3VD; power_out. */
  "V3VD": "12",
  /** Physical pin 13: PSEL; bidirectional. */
  "PSEL": "13",
  /** Physical pin 14: VFB; input. */
  "VFB": "14",
  /** Physical pin 15: IFB; input. */
  "IFB": "15",
  /** Physical pin 16: CC2; bidirectional. */
  "CC2": "16",
  /** Physical pin 17: CC1; bidirectional. */
  "CC1": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: V5V; power_out. */
  "V5V": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: VBUS; power_in. */
  "VBUS": "22",
  /** Physical pin 23: PWR_EN; power_in. */
  "PWR_EN": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:AP33771";
  override referencePrefix = "U";
}

/**
 * USB Type-C PD3.1 Sink Controller, EPR/AVS up to 28V, SPR/AVS up to 21V, I2C interface, WQFN-24
 *
 * KiCad symbol: `Interface_USB:AP33772SDKZ-xx-FA02`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm?P0.5mm?EP2.7*2.7*mm*.
 * @see https://www.diodes.com/datasheet/download/AP33772S.pdf
 * Keywords: Diodes-Incorporated AP33772SDKZ-13-FA02 USB-PD USB-Power-Delivery.
 * Default footprint: Package_DFN_QFN:Texas_RTW_WQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP33772SDKZ_xx_FA02 extends Component.withPins({
  /** Physical pin 1: ISENP; input. */
  "ISENP": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: FLIP; output. */
  "FLIP": "6",
  /** Physical pin 7: GPIO; bidirectional. */
  "GPIO": "7",
  /** Physical pin 8: LED; output. */
  "LED": "8",
  /** Physical pin 9: INT; output. */
  "INT": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VSEL; input. */
  "VSEL": "11",
  /** Physical pin 12: V18; output. */
  "V18": "12",
  /** Physical pin 13: OTP; passive. */
  "OTP": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: IFB; passive. */
  "IFB": "15",
  /** Physical pin 16: CC2; bidirectional. */
  "CC2": "16",
  /** Physical pin 17: CC1; bidirectional. */
  "CC1": "17",
  /** Physical pin 18: DN; bidirectional. */
  "DN": "18",
  /** Physical pin 19: DP; bidirectional. */
  "DP": "19",
  /** Physical pin 20: V5V; passive. */
  "V5V": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: VOUT; input. */
  "VOUT": "22",
  /** Physical pin 23: PWR_EN; output. */
  "PWR_EN": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:AP33772SDKZ-xx-FA02";
  override referencePrefix = "U";
}

/**
 * Dual SPST USB 2.0 High Speed Switch with USB Battery Charging Specification Revision 1.2 Detection, UQFN-10
 *
 * KiCad symbol: `Interface_USB:BQ24392`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PUQFN*.
 * @see http://www.ti.com/lit/ds/symlink/bq24392.pdf
 * Keywords: USB BC detector charger.
 * Default footprint: Package_DFN_QFN:Texas_R-PUQFN-N10.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ24392 extends Component.withPins({
  /** Physical pin 1: SW_OPEN; open_collector. */
  "SW_OPEN": "1",
  /** Physical pin 2: DM_HOST; bidirectional. */
  "DM_HOST": "2",
  /** Physical pin 3: DP_HOST; bidirectional. */
  "DP_HOST": "3",
  /** Physical pin 4: ~{CHG_AL}; open_collector. */
  "~{CHG_AL}": "4",
  /** Physical pin 5: GOOD_BAT; input. */
  "GOOD_BAT": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: DP_CON; bidirectional. */
  "DP_CON": "7",
  /** Physical pin 8: DM_CON; bidirectional. */
  "DM_CON": "8",
  /** Physical pin 9: VBUS; power_in. */
  "VBUS": "9",
  /** Physical pin 10: CHG_DET; output. */
  "CHG_DET": "10",
}) {
  override schema = "Interface_USB:BQ24392";
  override referencePrefix = "U";
}

/**
 * USB-PD & Type-C & Fast Charge Power Sink Controller, SOT-23-6
 *
 * KiCad symbol: `Interface_USB:CH221K`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.wch-ic.com/downloads/CH224DS1_PDF.html
 * Keywords: USB-PD Power-Delivery.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH221K extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{PG}; open_collector. */
  "~{PG}": "3",
  /** Physical pin 4: CC1; bidirectional. */
  "CC1": "4",
  /** Physical pin 5: CC2; bidirectional. */
  "CC2": "5",
  /** Physical pin 6: CFG; input. */
  "CFG": "6",
}) {
  override schema = "Interface_USB:CH221K";
  override referencePrefix = "U";
}

/**
 * 100W USB Type-C PD3.0/2.0, BC1.2 Sink Controller, SSOP-10
 *
 * KiCad symbol: `Interface_USB:CH224K`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P1mm*EP2.1x3.3mm*.
 * @see https://www.wch.cn/downloads/file/301.html
 * Keywords: USB-C WCH powered-device.
 * Default footprint: Package_SO:SSOP-10-1EP_3.9x4.9mm_P1mm_EP2.1x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH224K extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CFG2; passive. */
  "CFG2": "2",
  /** Physical pin 3: CFG3; passive. */
  "CFG3": "3",
  /** Physical pin 4: DP; bidirectional. */
  "DP": "4",
  /** Physical pin 5: DM; bidirectional. */
  "DM": "5",
  /** Physical pin 6: CC2; bidirectional. */
  "CC2": "6",
  /** Physical pin 7: CC1; bidirectional. */
  "CC1": "7",
  /** Physical pin 8: VBUS; passive. */
  "VBUS": "8",
  /** Physical pin 9: CFG1; passive. */
  "CFG1": "9",
  /** Physical pin 10: PG; open_collector. */
  "PG": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
}) {
  override schema = "Interface_USB:CH224K";
  override referencePrefix = "U";
}

/**
 * USB fast charging interface PD2.0/3.0, PPS, BC1.2 , QFN-20
 *
 * KiCad symbol: `Interface_USB:CH236D`. Reference prefix: `U`.
 * Footprint filters: QFN*3x3mm*P0.4mm*.
 * @see https://wch-ic.com/downloads/file/313.html
 * Keywords: USB PD.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_3x3mm_P0.4mm_EP1.65x1.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH236D extends Component.withPins({
  /** Physical pin 0: GND; power_in. */
  "GND": "0",
  /** Physical pin 1: FBOX; passive. */
  "FBOX": "1",
  /** Physical pin 2: VHV; passive. */
  "VHV": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GATEP; output. */
  "GATEP": "4",
  /** Physical pin 5: GATEN; output. */
  "GATEN": "5",
  /** Physical pin 6: ~{NMOS}; input. */
  "~{NMOS}": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: UD+; bidirectional. */
  "UD+": "8",
  /** Physical pin 9: UD-; bidirectional. */
  "UD-": "9",
  /** Physical pin 10: CC1; bidirectional. */
  "CC1": "10",
  /** Physical pin 11: CC2; bidirectional. */
  "CC2": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: IS+; passive. */
  "IS+": "14",
  /** Physical pin 15: IS-; passive. */
  "IS-": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: VFB; passive. */
  "VFB": "17",
  /** Physical pin 18: IFB; passive. */
  "IFB": "18",
  /** Physical pin 19: VBUS; power_in. */
  "VBUS": "19",
  /** Physical pin 20: FBO; power_out. */
  "FBO": "20",
}) {
  override schema = "Interface_USB:CH236D";
  override referencePrefix = "U";
}

/**
 * USB QII wireless charging interface PD2.0, BC1.2, QII 5W, 7.5W, 10W, 15W, QFN-20
 *
 * KiCad symbol: `Interface_USB:CH246D`. Reference prefix: `U`.
 * Footprint filters: QFN*3x3mm*P0.4mm*.
 * @see https://wch-ic.com/downloads/file/307.html
 * Keywords: USB PD QII.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_3x3mm_P0.4mm_EP1.65x1.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH246D extends Component.withPins({
  /** Physical pin 0: GND; power_in. */
  "GND": "0",
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: VHV; power_in. */
  "VHV": "2",
  /** Physical pin 3: HV1; output. */
  "HV1": "3",
  /** Physical pin 4: HV0P; output. */
  "HV0P": "4",
  /** Physical pin 5: HV0N; output. */
  "HV0N": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: UDP; bidirectional. */
  "UDP": "8",
  /** Physical pin 9: UDM; bidirectional. */
  "UDM": "9",
  /** Physical pin 10: CC1; bidirectional. */
  "CC1": "10",
  /** Physical pin 11: CC0; bidirectional. */
  "CC0": "11",
  /** Physical pin 12: LV0; output. */
  "LV0": "12",
  /** Physical pin 13: LV1; output. */
  "LV1": "13",
  /** Physical pin 14: IS+; passive. */
  "IS+": "14",
  /** Physical pin 15: IS-; passive. */
  "IS-": "15",
  /** Physical pin 16: QII; input. */
  "QII": "16",
  /** Physical pin 17: LED1; open_emitter. */
  "LED1": "17",
  /** Physical pin 18: NTC; input. */
  "NTC": "18",
  /** Physical pin 19: OSC; input. */
  "OSC": "19",
  /** Physical pin 20: LED0; output. */
  "LED0": "20",
}) {
  override schema = "Interface_USB:CH246D";
  override referencePrefix = "U";
}

/**
 * USB serial converter, UART, SOIC-8
 *
 * KiCad symbol: `Interface_USB:CH330N`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.wch.cn/downloads/file/240.html
 * Keywords: usb uart wch serial.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH330N extends Component.withPins({
  /** Physical pin 1: UD+; bidirectional. */
  "UD+": "1",
  /** Physical pin 2: UD-; bidirectional. */
  "UD-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: ~{RTS}; output. */
  "~{RTS}": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: TXD; output. */
  "TXD": "6",
  /** Physical pin 7: RXD; input. */
  "RXD": "7",
  /** Physical pin 8: V3; passive. */
  "V3": "8",
}) {
  override schema = "Interface_USB:CH330N";
  override referencePrefix = "U";
}

/**
 * USB HUB controller, QFN-24
 *
 * KiCad symbol: `Interface_USB:CH334F`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*EP2.7x2.7mm*.
 * @see https://www.wch-ic.com/download/file?id=327
 * Keywords: USB HUB Controller Interface.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH334F extends Component.withPins({
  /** Physical pin 1: ~{OVCUR}; input. */
  "~{OVCUR}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: XO; passive. */
  "XO": "3",
  /** Physical pin 4: XI; passive. */
  "XI": "4",
  /** Physical pin 5: DM4-; bidirectional. */
  "DM4-": "5",
  /** Physical pin 6: DP4+; bidirectional. */
  "DP4+": "6",
  /** Physical pin 7: DM3-; bidirectional. */
  "DM3-": "7",
  /** Physical pin 8: DP3+; bidirectional. */
  "DP3+": "8",
  /** Physical pin 9: DM2-; bidirectional. */
  "DM2-": "9",
  /** Physical pin 10: DP2+; bidirectional. */
  "DP2+": "10",
  /** Physical pin 11: DM1-; bidirectional. */
  "DM1-": "11",
  /** Physical pin 12: DP1+; bidirectional. */
  "DP1+": "12",
  /** Physical pin 13: LED3/SCL; bidirectional. */
  "LED3/SCL": "13",
  /** Physical pin 14: DMU-; bidirectional. */
  "DMU-": "14",
  /** Physical pin 15: DPU+; bidirectional. */
  "DPU+": "15",
  /** Physical pin 16: ~{RESET}/CDP; input. */
  "~{RESET}/CDP": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: PSELF; input. */
  "PSELF": "18",
  /** Physical pin 19: V5; power_in. */
  "V5": "19",
  /** Physical pin 20: VDD33_{LDO}; power_out. */
  "VDD33_{LDO}": "20",
  /** Physical pin 21: LED4/SDA; bidirectional. */
  "LED4/SDA": "21",
  /** Physical pin 22: LED1; bidirectional. */
  "LED1": "22",
  /** Physical pin 23: LED2; bidirectional. */
  "LED2": "23",
  /** Physical pin 24: ~{PWREN}; output. */
  "~{PWREN}": "24",
  /** Physical pin 25: GND; power_in. */
  "GND": "25",
}) {
  override schema = "Interface_USB:CH334F";
  override referencePrefix = "U";
}

/**
 * USB HUB controller, QSOP-16
 *
 * KiCad symbol: `Interface_USB:CH334R`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.wch-ic.com/download/file?id=327
 * Keywords: USB HUB Controller Interface.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH334R extends Component.withPins({
  /** Physical pin 1: DM4-; bidirectional. */
  "DM4-": "1",
  /** Physical pin 2: DP4+; bidirectional. */
  "DP4+": "2",
  /** Physical pin 3: DM3-; bidirectional. */
  "DM3-": "3",
  /** Physical pin 4: DP3+; bidirectional. */
  "DP3+": "4",
  /** Physical pin 5: DM2-; bidirectional. */
  "DM2-": "5",
  /** Physical pin 6: DP2+; bidirectional. */
  "DP2+": "6",
  /** Physical pin 7: DM1-; bidirectional. */
  "DM1-": "7",
  /** Physical pin 8: DP1+; bidirectional. */
  "DP1+": "8",
  /** Physical pin 9: ~{RESET}/CDP; input. */
  "~{RESET}/CDP": "9",
  /** Physical pin 10: DMU-; bidirectional. */
  "DMU-": "10",
  /** Physical pin 11: DPU+; bidirectional. */
  "DPU+": "11",
  /** Physical pin 12: V5; power_in. */
  "V5": "12",
  /** Physical pin 13: VDD33_{LDO}; power_out. */
  "VDD33_{LDO}": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: XO; passive. */
  "XO": "15",
  /** Physical pin 16: XI; passive. */
  "XI": "16",
}) {
  override schema = "Interface_USB:CH334R";
  override referencePrefix = "U";
}

/**
 * USB HUB controller, QSOP-28
 *
 * KiCad symbol: `Interface_USB:CH334U`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x9.9mm*P0.635mm*.
 * @see https://www.wch-ic.com/download/file?id=327
 * Keywords: USB HUB Controller Interface.
 * Default footprint: Package_SO:QSOP-28_3.9x9.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH334U extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: XO; passive. */
  "XO": "2",
  /** Physical pin 3: XI; passive. */
  "XI": "3",
  /** Physical pin 4: DM4-; bidirectional. */
  "DM4-": "4",
  /** Physical pin 5: DP4+; bidirectional. */
  "DP4+": "5",
  /** Physical pin 6: DM3-; bidirectional. */
  "DM3-": "6",
  /** Physical pin 7: DP3+; bidirectional. */
  "DP3+": "7",
  /** Physical pin 8: DM2-; bidirectional. */
  "DM2-": "8",
  /** Physical pin 9: DP2+; bidirectional. */
  "DP2+": "9",
  /** Physical pin 10: DM1-; bidirectional. */
  "DM1-": "10",
  /** Physical pin 11: DP1+; bidirectional. */
  "DP1+": "11",
  /** Physical pin 14: LED3/SCL; bidirectional. */
  "LED3/SCL": "14",
  /** Physical pin 15: DMU-; bidirectional. */
  "DMU-": "15",
  /** Physical pin 16: DPU+; bidirectional. */
  "DPU+": "16",
  /** Physical pin 19: PSELF; input. */
  "PSELF": "19",
  /** Physical pin 20: V5; power_in. */
  "V5": "20",
  /** Physical pin 22: LED4/SDA; bidirectional. */
  "LED4/SDA": "22",
  /** Physical pin 23: LED1; output. */
  "LED1": "23",
  /** Physical pin 24: LED2; output. */
  "LED2": "24",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: VDD33; power_in. */
  "VDD33": "13",
  /** Physical pin 17: ~{RESET}/CDP; input. */
  "~{RESET}/CDP": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 21: VDD33_{LDO}; power_out. */
  "VDD33_{LDO}": "21",
  /** Physical pin 25: ~{PWREN}; output. */
  "~{PWREN}": "25",
  /** Physical pin 26: ~{OVCUR}; input. */
  "~{OVCUR}": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
}) {
  override schema = "Interface_USB:CH334U";
  override referencePrefix = "U";
}

/**
 * USB serial converter, crystal-less, UART, SOIC-16
 *
 * KiCad symbol: `Interface_USB:CH340C`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheet.lcsc.com/szlcsc/Jiangsu-Qin-Heng-CH340C_C84681.pdf
 * Keywords: USB UART Serial Converter Interface.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH340C extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: V3; power_out. */
  "V3": "4",
  /** Physical pin 5: UD+; bidirectional. */
  "UD+": "5",
  /** Physical pin 6: UD-; bidirectional. */
  "UD-": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: ~{CTS}; input. */
  "~{CTS}": "9",
  /** Physical pin 10: ~{DSR}; input. */
  "~{DSR}": "10",
  /** Physical pin 11: ~{RI}; input. */
  "~{RI}": "11",
  /** Physical pin 12: ~{DCD}; input. */
  "~{DCD}": "12",
  /** Physical pin 13: ~{DTR}; output. */
  "~{DTR}": "13",
  /** Physical pin 14: ~{RTS}; output. */
  "~{RTS}": "14",
  /** Physical pin 15: R232; input. */
  "R232": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_USB:CH340C";
  override referencePrefix = "U";
}

/**
 * USB serial converter, UART, MSOP-10
 *
 * KiCad symbol: `Interface_USB:CH340E`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.mpja.com/download/35227cpdata.pdf
 * Keywords: USB UART Serial Converter Interface.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH340E extends Component.withPins({
  /** Physical pin 1: UD+; bidirectional. */
  "UD+": "1",
  /** Physical pin 2: UD-; bidirectional. */
  "UD-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: ~{RTS}; output. */
  "~{RTS}": "4",
  /** Physical pin 5: ~{CTS}; input. */
  "~{CTS}": "5",
  /** Physical pin 6: TNOW; output. */
  "TNOW": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: TXD; output. */
  "TXD": "8",
  /** Physical pin 9: RXD; input. */
  "RXD": "9",
  /** Physical pin 10: V3; power_out. */
  "V3": "10",
}) {
  override schema = "Interface_USB:CH340E";
  override referencePrefix = "U";
}

/**
 * USB serial converter, UART, SOIC-16
 *
 * KiCad symbol: `Interface_USB:CH340G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.datasheet5.com/pdf-local-2195953
 * Keywords: USB UART Serial Converter Interface.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH340G extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: V3; power_out. */
  "V3": "4",
  /** Physical pin 5: UD+; bidirectional. */
  "UD+": "5",
  /** Physical pin 6: UD-; bidirectional. */
  "UD-": "6",
  /** Physical pin 7: XI; input. */
  "XI": "7",
  /** Physical pin 8: XO; output. */
  "XO": "8",
  /** Physical pin 9: ~{CTS}; input. */
  "~{CTS}": "9",
  /** Physical pin 10: ~{DSR}; input. */
  "~{DSR}": "10",
  /** Physical pin 11: ~{RI}; input. */
  "~{RI}": "11",
  /** Physical pin 12: ~{DCD}; input. */
  "~{DCD}": "12",
  /** Physical pin 13: ~{DTR}; output. */
  "~{DTR}": "13",
  /** Physical pin 14: ~{RTS}; output. */
  "~{RTS}": "14",
  /** Physical pin 15: R232; input. */
  "R232": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_USB:CH340G";
  override referencePrefix = "U";
}

/**
 * USB serial converter, UART, SSOP-10
 *
 * KiCad symbol: `Interface_USB:CH340K`. Reference prefix: `U`.
 * Footprint filters: SSOP*1EP*3.9x4.9mm*P1mm*.
 * @see https://cdn.sparkfun.com/assets/5/0/a/8/5/CH340DS1.PDF
 * Keywords: USB UART Serial Converter Interface.
 * Default footprint: Package_SO:SSOP-10-1EP_3.9x4.9mm_P1mm_EP2.1x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH340K extends Component.withPins({
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 1: UD+; bidirectional. */
  "UD+": "1",
  /** Physical pin 2: UD-; bidirectional. */
  "UD-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: ~{DTR}; output. */
  "~{DTR}": "4",
  /** Physical pin 5: ~{CTS}; input. */
  "~{CTS}": "5",
  /** Physical pin 6: ~{RTS}; output. */
  "~{RTS}": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: TXD; output. */
  "TXD": "8",
  /** Physical pin 9: RXD; input. */
  "RXD": "9",
  /** Physical pin 10: V3; passive. */
  "V3": "10",
}) {
  override schema = "Interface_USB:CH340K";
  override referencePrefix = "U";
}

/**
 * USB serial converter, 2Mbps, UART, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Interface_USB:CH340N`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://aitendo3.sakura.ne.jp/aitendo_data/product_img/ic/inteface/CH340N/ch340n.pdf
 * Keywords: USB UART Serial Converter Interface.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH340N extends Component.withPins({
  /** Physical pin 1: UD+; bidirectional. */
  "UD+": "1",
  /** Physical pin 2: UD-; bidirectional. */
  "UD-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: ~{RTS}; output. */
  "~{RTS}": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: TXD; output. */
  "TXD": "6",
  /** Physical pin 7: RXD; input. */
  "RXD": "7",
  /** Physical pin 8: V3; passive. */
  "V3": "8",
}) {
  override schema = "Interface_USB:CH340N";
  override referencePrefix = "U";
}

/**
 * USB serial converter, UART, SSOP-20
 *
 * KiCad symbol: `Interface_USB:CH340T`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see https://cdn.sparkfun.com/datasheets/Dev/Arduino/Other/CH340DS1.PDF
 * Keywords: USB UART Serial Converter Interface.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH340T extends Component.withPins({
  /** Physical pin 1: CKOH; output. */
  "CKOH": "1",
  /** Physical pin 2: CKOL; output. */
  "CKOL": "2",
  /** Physical pin 3: TXD; output. */
  "TXD": "3",
  /** Physical pin 4: RXD; input. */
  "RXD": "4",
  /** Physical pin 5: V3; power_out. */
  "V3": "5",
  /** Physical pin 6: UD+; bidirectional. */
  "UD+": "6",
  /** Physical pin 7: UD-; bidirectional. */
  "UD-": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: XI; input. */
  "XI": "9",
  /** Physical pin 10: XO; output. */
  "XO": "10",
  /** Physical pin 11: ~{CTS}; input. */
  "~{CTS}": "11",
  /** Physical pin 12: ~{DSR}; input. */
  "~{DSR}": "12",
  /** Physical pin 13: ~{RI}; input. */
  "~{RI}": "13",
  /** Physical pin 14: ~{DCD}; input. */
  "~{DCD}": "14",
  /** Physical pin 15: ~{DTR}; output. */
  "~{DTR}": "15",
  /** Physical pin 16: ~{RTS}; output. */
  "~{RTS}": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC": "17",
  /** Physical pin 18: R232; input. */
  "R232": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC": "19",
  /** Physical pin 20: ~{NOS}; input. */
  "~{NOS}": "20",
}) {
  override schema = "Interface_USB:CH340T";
  override referencePrefix = "U";
}

/**
 * USB serial converter, 5V-tolerant IO, UART, MSOP-10
 *
 * KiCad symbol: `Interface_USB:CH340X`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://cdn.sparkfun.com/assets/5/0/a/8/5/CH340DS1.PDF
 * Keywords: USB UART Serial Converter Interface.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH340X extends Component.withPins({
  /** Physical pin 1: UD+; bidirectional. */
  "UD+": "1",
  /** Physical pin 2: UD-; bidirectional. */
  "UD-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: ~{RTS}; output. */
  "~{RTS}": "4",
  /** Physical pin 5: ~{CTS}; input. */
  "~{CTS}": "5",
  /** Physical pin 6: TNOW/~{DTR}; output. */
  "TNOW/~{DTR}": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: TXD; output. */
  "TXD": "8",
  /** Physical pin 9: RXD; input. */
  "RXD": "9",
  /** Physical pin 10: V3; power_out. */
  "V3": "10",
}) {
  override schema = "Interface_USB:CH340X";
  override referencePrefix = "U";
}

/**
 * USB to UART / printer port / parallel port / 2-wire / 4-wire, SOIC-28 (SOP-28)
 *
 * KiCad symbol: `Interface_USB:CH341A`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x17.9mm?P1.27mm*.
 * @see https://www.wch-ic.com/downloads/file/16.html
 * Keywords: serial-interface I2C SPI FlexWire print-port EPP Enhanced-Parallel-Port.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH341A extends Component.withPins({
  /** Physical pin 21: ~{RTS}/D6; tri_state. */
  "~{RTS}/D6": "21",
  /** Physical pin 22: ~{SLP}/D7; tri_state. */
  "~{SLP}/D7": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: SCL; open_collector. */
  "SCL": "24",
  /** Physical pin 25: ~{RDY}/~{STB}/~{WR}; output. */
  "~{RDY}/~{STB}/~{WR}": "25",
  /** Physical pin 26: TNOW/~{INI}/~{RST}; output. */
  "TNOW/~{INI}/~{RST}": "26",
  /** Physical pin 27: ~{TEN}/BUSY/~{WT}; passive. */
  "~{TEN}/BUSY/~{WT}": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 1: ~{ACT}; output. */
  "~{ACT}": "1",
  /** Physical pin 2: RSTI; passive. */
  "RSTI": "2",
  /** Physical pin 3: IN7/~{SIN}/~{AS}; tri_state. */
  "IN7/~{SIN}/~{AS}": "3",
  /** Physical pin 4: ~{ROV}/~{AFD}/~{DS}; tri_state. */
  "~{ROV}/~{AFD}/~{DS}": "4",
  /** Physical pin 5: TXD/~{ERR}; bidirectional. */
  "TXD/~{ERR}": "5",
  /** Physical pin 6: RXD/PEMP; input. */
  "RXD/PEMP": "6",
  /** Physical pin 7: ~{INT}/~{ACK}; passive. */
  "~{INT}/~{ACK}": "7",
  /** Physical pin 8: IN3/SLCT; passive. */
  "IN3/SLCT": "8",
  /** Physical pin 9: V3; passive. */
  "V3": "9",
  /** Physical pin 10: UD+; bidirectional. */
  "UD+": "10",
  /** Physical pin 11: UD-; bidirectional. */
  "UD-": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: XI; input. */
  "XI": "13",
  /** Physical pin 14: XO; output. */
  "XO": "14",
  /** Physical pin 15: ~{CTS}/D0; tri_state. */
  "~{CTS}/D0": "15",
  /** Physical pin 16: ~{DSR}/D1; tri_state. */
  "~{DSR}/D1": "16",
  /** Physical pin 17: ~{RI}/D2; tri_state. */
  "~{RI}/D2": "17",
  /** Physical pin 18: ~{DCD}/D3; tri_state. */
  "~{DCD}/D3": "18",
  /** Physical pin 19: ~{OUT}/D4; tri_state. */
  "~{OUT}/D4": "19",
  /** Physical pin 20: ~{DTR}/D5; tri_state. */
  "~{DTR}/D5": "20",
}) {
  override schema = "Interface_USB:CH341A";
  override referencePrefix = "U";
}

/**
 * High-Speed USB serial converter, up to 6Mbps, 3.3V or 5V supply, UART, SOIC-16
 *
 * KiCad symbol: `Interface_USB:CH343G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.wch-ic.com/downloads/CH343DS1_PDF.html
 * Keywords: UART Interface crystalless.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH343G extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: V3; power_out. */
  "V3": "4",
  /** Physical pin 5: UD+; bidirectional. */
  "UD+": "5",
  /** Physical pin 6: UD-; bidirectional. */
  "UD-": "6",
  /** Physical pin 7: VBUS; input. */
  "VBUS": "7",
  /** Physical pin 8: ~{ACT}; output. */
  "~{ACT}": "8",
  /** Physical pin 9: ~{DCD}; input. */
  "~{DCD}": "9",
  /** Physical pin 10: ~{DTR}; output. */
  "~{DTR}": "10",
  /** Physical pin 11: ~{RTS}; output. */
  "~{RTS}": "11",
  /** Physical pin 12: ~{DSR}; input. */
  "~{DSR}": "12",
  /** Physical pin 13: ~{CTS}; input. */
  "~{CTS}": "13",
  /** Physical pin 14: ~{RI}; input. */
  "~{RI}": "14",
  /** Physical pin 15: VIO; power_in. */
  "VIO": "15",
  /** Physical pin 16: VDD5; power_in. */
  "VDD5": "16",
}) {
  override schema = "Interface_USB:CH343G";
  override referencePrefix = "U";
}

/**
 * High-Speed USB serial converter, up to 6Mbps, 3.3V or 5V supply, UART, QFN-16
 *
 * KiCad symbol: `Interface_USB:CH343P`. Reference prefix: `U`.
 * Footprint filters: *QFN*3x3mm*P0.5mm*EP1.8x1.8mm*.
 * @see https://www.wch-ic.com/downloads/CH343DS1_PDF.html
 * Keywords: UART Interface crystalless Winchip WCH.
 * Default footprint: Package_DFN_QFN:WCH_QFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH343P extends Component.withPins({
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 17: GND_EPAD; power_in. */
  "GND_EPAD": "17",
  /** Physical pin 1: VIO; power_in. */
  "VIO": "1",
  /** Physical pin 3: VDD5; power_in. */
  "VDD5": "3",
  /** Physical pin 4: TXD; output. */
  "TXD": "4",
  /** Physical pin 5: RXD; input. */
  "RXD": "5",
  /** Physical pin 6: V3_{OUT}; power_out. */
  "V3_{OUT}": "6",
  /** Physical pin 7: UD+; bidirectional. */
  "UD+": "7",
  /** Physical pin 8: UD-; bidirectional. */
  "UD-": "8",
  /** Physical pin 9: VBUS; input. */
  "VBUS": "9",
  /** Physical pin 10: ~{ACT}; output. */
  "~{ACT}": "10",
  /** Physical pin 11: ~{DCD}; input. */
  "~{DCD}": "11",
  /** Physical pin 12: ~{DTR}; output. */
  "~{DTR}": "12",
  /** Physical pin 13: ~{RTS}; output. */
  "~{RTS}": "13",
  /** Physical pin 14: ~{DSR}; input. */
  "~{DSR}": "14",
  /** Physical pin 15: ~{CTS}; input. */
  "~{CTS}": "15",
  /** Physical pin 16: ~{RI}; input. */
  "~{RI}": "16",
}) {
  override schema = "Interface_USB:CH343P";
  override referencePrefix = "U";
}

/**
 * USB to Quad Serial Ports Chip, LQFP-48
 *
 * KiCad symbol: `Interface_USB:CH344Q`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see https://www.wch-ic.com/downloads/file/299.html
 * Keywords: USB Quad UART Serial Converter Interface.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH344Q extends Component.withPins({
  /** Physical pin 19: ~{DTR2}/TNOW2/GPIO9; bidirectional. */
  "~{DTR2}/TNOW2/GPIO9": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: ~{DSR2}; input. */
  "~{DSR2}": "2",
  /** Physical pin 3: ~{RI2}; input. */
  "~{RI2}": "3",
  /** Physical pin 4: ~{DCD2}; input. */
  "~{DCD2}": "4",
  /** Physical pin 5: XI; input. */
  "XI": "5",
  /** Physical pin 6: XO; output. */
  "XO": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: ~{CTS1}/GPIO2; bidirectional. */
  "~{CTS1}/GPIO2": "10",
  /** Physical pin 11: ~{RTS1}/GPIO3; bidirectional. */
  "~{RTS1}/GPIO3": "11",
  /** Physical pin 12: TXD1; output. */
  "TXD1": "12",
  /** Physical pin 13: RXD1; input. */
  "RXD1": "13",
  /** Physical pin 14: ~{ACT}/~{CFG}/~{DCD3}; bidirectional. */
  "~{ACT}/~{CFG}/~{DCD3}": "14",
  /** Physical pin 15: TX_S/~{RI3}; bidirectional. */
  "TX_S/~{RI3}": "15",
  /** Physical pin 16: RX_S/~{DSR3}; bidirectional. */
  "RX_S/~{DSR3}": "16",
  /** Physical pin 17: ~{DSR1}; input. */
  "~{DSR1}": "17",
  /** Physical pin 18: ~{DTR1}/TNOW1/GPIO9; bidirectional. */
  "~{DTR1}/TNOW1/GPIO9": "18",
  /** Physical pin 21: TXD2; output. */
  "TXD2": "21",
  /** Physical pin 22: RXD2; input. */
  "RXD2": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC_24": "24",
  /** Physical pin 25: ~{RI1}; input. */
  "~{RI1}": "25",
  /** Physical pin 26: ~{CTS2}/GPIO4; bidirectional. */
  "~{CTS2}/GPIO4": "26",
  /** Physical pin 27: ~{RTS2}/GPIO5; bidirectional. */
  "~{RTS2}/GPIO5": "27",
  /** Physical pin 28: ~{DCD1}/GPIO15; bidirectional. */
  "~{DCD1}/GPIO15": "28",
  /** Physical pin 29: ~{DSR0}/GPIO14; input. */
  "~{DSR0}/GPIO14": "29",
  /** Physical pin 30: TXD0; output. */
  "TXD0": "30",
  /** Physical pin 31: RXD0; input. */
  "RXD0": "31",
  /** Physical pin 32: ~{RI0}/GPIO13; bidirectional. */
  "~{RI0}/GPIO13": "32",
  /** Physical pin 33: ~{DCD0}/GPIO12; bidirectional. */
  "~{DCD0}/GPIO12": "33",
  /** Physical pin 34: ~{DTR3}/TNOW3/GPIO11; bidirectional. */
  "~{DTR3}/TNOW3/GPIO11": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: VCC; power_in. */
  "VCC_36": "36",
  /** Physical pin 37: TXD3; output. */
  "TXD3": "37",
  /** Physical pin 38: RXD3; input. */
  "RXD3": "38",
  /** Physical pin 39: ~{DTR0}/TNOW0/GPIO8; bidirectional. */
  "~{DTR0}/TNOW0/GPIO8": "39",
  /** Physical pin 40: ~{RTS0}/GPIO1; bidirectional. */
  "~{RTS0}/GPIO1": "40",
  /** Physical pin 41: ~{CTS0}/GPIO0; bidirectional. */
  "~{CTS0}/GPIO0": "41",
  /** Physical pin 42: UD-; bidirectional. */
  "UD-": "42",
  /** Physical pin 43: UD+; bidirectional. */
  "UD+": "43",
  /** Physical pin 44: TEST; input. */
  "TEST": "44",
  /** Physical pin 45: ~{RTS3}/GPIO7; bidirectional. */
  "~{RTS3}/GPIO7": "45",
  /** Physical pin 46: ~{CTS3}/GPIO6; bidirectional. */
  "~{CTS3}/GPIO6": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
  /** Physical pin 48: VCC; power_in. */
  "VCC_48": "48",
}) {
  override schema = "Interface_USB:CH344Q";
  override referencePrefix = "U";
}

/**
 * WCH-IC, Single-Chip USB-to-UART Bridge, USB 2.0 Full-Speed, 4Mbps UART, QFN-24
 *
 * KiCad symbol: `Interface_USB:CH9102F`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.wch-ic.com/downloads/CH9102DS1_PDF.html
 * Keywords: uart usb bridge interface transceiver CH9102F.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH9102F extends Component.withPins({
  /** Physical pin 1: ~{RI}; input. */
  "~{RI}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: D-; bidirectional. */
  "D-": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: V3; power_out. */
  "V3": "6",
  /** Physical pin 7: VDD5; power_in. */
  "VDD5": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; input. */
  "~{RST}": "9",
  /** Physical pin 10: ~{ACT}; output. */
  "~{ACT}": "10",
  /** Physical pin 11: ~{WAKEUP}/GPIO3; bidirectional. */
  "~{WAKEUP}/GPIO3": "11",
  /** Physical pin 12: TNOW/GPIO2; bidirectional. */
  "TNOW/GPIO2": "12",
  /** Physical pin 13: RXS/GPIO1; bidirectional. */
  "RXS/GPIO1": "13",
  /** Physical pin 14: TXS/GPIO0; bidirectional. */
  "TXS/GPIO0": "14",
  /** Physical pin 15: ~{SUSPEND}; output. */
  "~{SUSPEND}": "15",
  /** Physical pin 16: GPIO4; bidirectional. */
  "GPIO4": "16",
  /** Physical pin 17: SUSPEND; output. */
  "SUSPEND": "17",
  /** Physical pin 18: ~{CTS}; input. */
  "~{CTS}": "18",
  /** Physical pin 19: ~{RTS}; output. */
  "~{RTS}": "19",
  /** Physical pin 20: RXD; input. */
  "RXD": "20",
  /** Physical pin 21: TXD; output. */
  "TXD": "21",
  /** Physical pin 22: ~{DSR}; input. */
  "~{DSR}": "22",
  /** Physical pin 23: ~{DTR}; output. */
  "~{DTR}": "23",
  /** Physical pin 24: ~{DCD}; input. */
  "~{DCD}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:CH9102F";
  override referencePrefix = "U";
}

/**
 * USB to UART bridge, WQFN-24
 *
 * KiCad symbol: `Interface_USB:CP2102C-Axx-xQFN24`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm?P0.5mm?EP2.45x2.45mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/cp2102c-datasheet.pdf
 * Keywords: Silicon-Labs USB-2.0 CP2102C-A01-GQFN24.
 * Default footprint: Package_DFN_QFN:WQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2102C_Axx_xQFN24 extends Component.withPins({
  /** Physical pin 1: ~{RI}; input. */
  "~{RI}": "1",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: D-; bidirectional. */
  "D-": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: VREGIN; power_in. */
  "VREGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; input. */
  "~{RST}": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: ~{SUSPEND}; output. */
  "~{SUSPEND}": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: SUSPEND; output. */
  "SUSPEND": "17",
  /** Physical pin 18: ~{CTS}; input. */
  "~{CTS}": "18",
  /** Physical pin 19: ~{RTS}; output. */
  "~{RTS}": "19",
  /** Physical pin 20: RXD; input. */
  "RXD": "20",
  /** Physical pin 21: TXD; tri_state. */
  "TXD": "21",
  /** Physical pin 22: ~{DSR}; input. */
  "~{DSR}": "22",
  /** Physical pin 23: ~{DTR}; output. */
  "~{DTR}": "23",
  /** Physical pin 24: ~{DCD}; input. */
  "~{DCD}": "24",
  /** Physical pin [2,25]: GND; power_in. */
  "GND": "[2,25]",
}) {
  override schema = "Interface_USB:CP2102C-Axx-xQFN24";
  override referencePrefix = "U";
}

/**
 * USB to UART master bridge, QFN-20
 *
 * KiCad symbol: `Interface_USB:CP2102N-Axx-xQFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/cp2102n-datasheet.pdf
 * Keywords: USB UART bridge.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2102N_Axx_xQFN20 extends Component.withPins({
  /** Physical pin 1: RS485/GPIO.1; bidirectional. */
  "RS485/GPIO.1": "1",
  /** Physical pin 2: CLK/GPIO.0; bidirectional. */
  "CLK/GPIO.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: VREGIN; power_in. */
  "VREGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; input. */
  "~{RST}": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC": "10",
  /** Physical pin 11: ~{SUSPEND}; output. */
  "~{SUSPEND}": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: ~{WAKEUP}; input. */
  "~{WAKEUP}": "13",
  /** Physical pin 14: SUSPEND; output. */
  "SUSPEND": "14",
  /** Physical pin 15: ~{CTS}; input. */
  "~{CTS}": "15",
  /** Physical pin 16: ~{RTS}; output. */
  "~{RTS}": "16",
  /** Physical pin 17: RXD; input. */
  "RXD": "17",
  /** Physical pin 18: TXD; output. */
  "TXD": "18",
  /** Physical pin 19: ~{RXT}/GPIO.3; bidirectional. */
  "~{RXT}/GPIO.3": "19",
  /** Physical pin 20: ~{TXT}/GPIO.2; bidirectional. */
  "~{TXT}/GPIO.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "Interface_USB:CP2102N-Axx-xQFN20";
  override referencePrefix = "U";
}

/**
 * USB to UART master bridge, QFN-24
 *
 * KiCad symbol: `Interface_USB:CP2102N-Axx-xQFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/cp2102n-datasheet.pdf
 * Keywords: USB UART bridge.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2102N_Axx_xQFN24 extends Component.withPins({
  /** Physical pin 1: ~{RI}/CLK; bidirectional. */
  "~{RI}/CLK": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: D-; bidirectional. */
  "D-": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: VREGIN; power_in. */
  "VREGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; input. */
  "~{RST}": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: ~{WAKEUP}/GPIO.3; bidirectional. */
  "~{WAKEUP}/GPIO.3": "11",
  /** Physical pin 12: RS485/GPIO.2; bidirectional. */
  "RS485/GPIO.2": "12",
  /** Physical pin 13: ~{RXT}/GPIO.1; bidirectional. */
  "~{RXT}/GPIO.1": "13",
  /** Physical pin 14: ~{TXT}/GPIO.0; bidirectional. */
  "~{TXT}/GPIO.0": "14",
  /** Physical pin 15: ~{SUSPEND}; output. */
  "~{SUSPEND}": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: SUSPEND; output. */
  "SUSPEND": "17",
  /** Physical pin 18: ~{CTS}; input. */
  "~{CTS}": "18",
  /** Physical pin 19: ~{RTS}; output. */
  "~{RTS}": "19",
  /** Physical pin 20: RXD; input. */
  "RXD": "20",
  /** Physical pin 21: TXD; output. */
  "TXD": "21",
  /** Physical pin 22: ~{DSR}; input. */
  "~{DSR}": "22",
  /** Physical pin 23: ~{DTR}; output. */
  "~{DTR}": "23",
  /** Physical pin 24: ~{DCD}; input. */
  "~{DCD}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:CP2102N-Axx-xQFN24";
  override referencePrefix = "U";
}

/**
 * USB to UART master bridge, QFN-28
 *
 * KiCad symbol: `Interface_USB:CP2102N-Axx-xQFN28`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/cp2102n-datasheet.pdf
 * Keywords: USB UART bridge.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2102N_Axx_xQFN28 extends Component.withPins({
  /** Physical pin 1: ~{DCD}; input. */
  "~{DCD}": "1",
  /** Physical pin 2: ~{RI}/CLK; bidirectional. */
  "~{RI}/CLK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: VREGIN; power_in. */
  "VREGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; input. */
  "~{RST}": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC": "10",
  /** Physical pin 11: ~{SUSPEND}; output. */
  "~{SUSPEND}": "11",
  /** Physical pin 12: SUSPEND; output. */
  "SUSPEND": "12",
  /** Physical pin 13: CHREN; output. */
  "CHREN": "13",
  /** Physical pin 14: CHR1; output. */
  "CHR1": "14",
  /** Physical pin 15: CHR0; output. */
  "CHR0": "15",
  /** Physical pin 16: ~{WAKEUP}/GPIO.3; bidirectional. */
  "~{WAKEUP}/GPIO.3": "16",
  /** Physical pin 17: RS485/GPIO.2; bidirectional. */
  "RS485/GPIO.2": "17",
  /** Physical pin 18: ~{RXT}/GPIO.1; bidirectional. */
  "~{RXT}/GPIO.1": "18",
  /** Physical pin 19: ~{TXT}/GPIO.0; bidirectional. */
  "~{TXT}/GPIO.0": "19",
  /** Physical pin 20: GPIO.6; bidirectional. */
  "GPIO.6": "20",
  /** Physical pin 21: GPIO.5; bidirectional. */
  "GPIO.5": "21",
  /** Physical pin 22: GPIO.4; bidirectional. */
  "GPIO.4": "22",
  /** Physical pin 23: ~{CTS}; input. */
  "~{CTS}": "23",
  /** Physical pin 24: ~{RTS}; output. */
  "~{RTS}": "24",
  /** Physical pin 25: RXD; input. */
  "RXD": "25",
  /** Physical pin 26: TXD; output. */
  "TXD": "26",
  /** Physical pin 27: ~{DSR}; input. */
  "~{DSR}": "27",
  /** Physical pin 28: ~{DTR}; output. */
  "~{DTR}": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "Interface_USB:CP2102N-Axx-xQFN28";
  override referencePrefix = "U";
}

/**
 * Single-Chip USB-to-UART Bridge, USB 2.0 Full-Speed, 2Mbps UART, QFN-24
 *
 * KiCad symbol: `Interface_USB:CP2104`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/cp2104.pdf
 * Keywords: uart usb bridge interface transceiver.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2104 extends Component.withPins({
  /** Physical pin 1: ~{RI}; input. */
  "~{RI}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: D-; bidirectional. */
  "D-": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; bidirectional. */
  "~{RST}": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC": "10",
  /** Physical pin 11: GPIO.3; bidirectional. */
  "GPIO.3": "11",
  /** Physical pin 12: RS485/GPIO.2; bidirectional. */
  "RS485/GPIO.2": "12",
  /** Physical pin 13: RXT/GPIO.1; bidirectional. */
  "RXT/GPIO.1": "13",
  /** Physical pin 14: TXT/GPIO.0; bidirectional. */
  "TXT/GPIO.0": "14",
  /** Physical pin 15: ~{SUSPEND}; output. */
  "~{SUSPEND}": "15",
  /** Physical pin 16: VPP; passive. */
  "VPP": "16",
  /** Physical pin 17: SUSPEND; output. */
  "SUSPEND": "17",
  /** Physical pin 18: ~{CTS}; input. */
  "~{CTS}": "18",
  /** Physical pin 19: ~{RTS}; output. */
  "~{RTS}": "19",
  /** Physical pin 20: RXD; input. */
  "RXD": "20",
  /** Physical pin 21: TXD; output. */
  "TXD": "21",
  /** Physical pin 22: ~{DSR}; input. */
  "~{DSR}": "22",
  /** Physical pin 23: ~{DTR}; output. */
  "~{DTR}": "23",
  /** Physical pin 24: ~{DCD}; input. */
  "~{DCD}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:CP2104";
  override referencePrefix = "U";
}

/**
 * Single-Chip USB to dual UART bridge, QFN-24
 *
 * KiCad symbol: `Interface_USB:CP2105-F01-GM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*2.7x2.7mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/CP2105.pdf
 * Keywords: USB UART bridge.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2105_F01_GM extends Component.withPins({
  /** Physical pin 1: ~{RI_SCI}; input. */
  "~{RI_SCI}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: D-; bidirectional. */
  "D-": "4",
  /** Physical pin 5: V_{IO}; power_in. */
  "V_{IO}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; bidirectional. */
  "~{RST}": "9",
  /** Physical pin 10: ~{CTS_ECI}; input. */
  "~{CTS_ECI}": "10",
  /** Physical pin 11: ~{RTS_ECI}; output. */
  "~{RTS_ECI}": "11",
  /** Physical pin 12: RXD_ECI; input. */
  "RXD_ECI": "12",
  /** Physical pin 13: TXD_ECI; output. */
  "TXD_ECI": "13",
  /** Physical pin 14: ~{DSR_ECI}; input. */
  "~{DSR_ECI}": "14",
  /** Physical pin 15: ~{DTR_ECI}; output. */
  "~{DTR_ECI}": "15",
  /** Physical pin 16: ~{DCD_ECI}; input. */
  "~{DCD_ECI}": "16",
  /** Physical pin 17: ~{RI_ECI}; input. */
  "~{RI_ECI}": "17",
  /** Physical pin 18: ~{CTS_SCI}; input. */
  "~{CTS_SCI}": "18",
  /** Physical pin 19: ~{RTS_SCI}; output. */
  "~{RTS_SCI}": "19",
  /** Physical pin 20: RXD_SCI; input. */
  "RXD_SCI": "20",
  /** Physical pin 21: TXD_SCI; output. */
  "TXD_SCI": "21",
  /** Physical pin 22: ~{DSR_SCI}; input. */
  "~{DSR_SCI}": "22",
  /** Physical pin 23: ~{DTR_SCI}; output. */
  "~{DTR_SCI}": "23",
  /** Physical pin 24: ~{DCD_SCI}; input. */
  "~{DCD_SCI}": "24",
  /** Physical pin 25: EP; power_in. */
  "EP": "25",
}) {
  override schema = "Interface_USB:CP2105-F01-GM";
  override referencePrefix = "U";
}

/**
 * Full Speed Quad Channel USB UART/FIFO, integrated clock and EEPROM, QFN-64
 *
 * KiCad symbol: `Interface_USB:CP2108-xxx-xM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/cp2108-datasheet.pdf
 * Keywords: USB Quad UART FIFO bridge.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.1x4.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2108_xxx_xM extends Component.withPins({
  /** Physical pin 1: RX3; input. */
  "RX3": "1",
  /** Physical pin 2: VSSHD; power_in. */
  "VSSHD": "2",
  /** Physical pin 3: VIOHD; power_in. */
  "VIOHD": "3",
  /** Physical pin 4: TX3; output. */
  "TX3": "4",
  /** Physical pin 5: ~{CTS3}; input. */
  "~{CTS3}": "5",
  /** Physical pin 6: ~{RTS3}; output. */
  "~{RTS3}": "6",
  /** Physical pin 7: ~{RI3}; input. */
  "~{RI3}": "7",
  /** Physical pin 8: ~{DCD3}; input. */
  "~{DCD3}": "8",
  /** Physical pin 9: ~{DSR3}; input. */
  "~{DSR3}": "9",
  /** Physical pin 10: ~{DTR3}; output. */
  "~{DTR3}": "10",
  /** Physical pin 11: ~{RI2}; input. */
  "~{RI2}": "11",
  /** Physical pin 12: ~{DCD2}; input. */
  "~{DCD2}": "12",
  /** Physical pin 13: ~{CTS2}; input. */
  "~{CTS2}": "13",
  /** Physical pin 14: ~{RTS2}; output. */
  "~{RTS2}": "14",
  /** Physical pin 15: RX2; input. */
  "RX2": "15",
  /** Physical pin 16: TX2; output. */
  "TX2": "16",
  /** Physical pin 17: ~{DSR2}; input. */
  "~{DSR2}": "17",
  /** Physical pin 18: ~{DTR2}; output. */
  "~{DTR2}": "18",
  /** Physical pin 19: ~{SUSPEND}; output. */
  "~{SUSPEND}": "19",
  /** Physical pin 20: SUSPEND; output. */
  "SUSPEND": "20",
  /** Physical pin 21: GPIO15; bidirectional. */
  "GPIO15": "21",
  /** Physical pin 22: GPIO14; bidirectional. */
  "GPIO14": "22",
  /** Physical pin 23: GPIO13; bidirectional. */
  "GPIO13": "23",
  /** Physical pin 24: VIO; power_in. */
  "VIO_24": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS_25": "25",
  /** Physical pin 26: GPIO12; bidirectional. */
  "GPIO12": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO10; bidirectional. */
  "GPIO10": "28",
  /** Physical pin 29: GPIO9; bidirectional. */
  "GPIO9": "29",
  /** Physical pin 30: GPIO8; bidirectional. */
  "GPIO8": "30",
  /** Physical pin 31: GPIO7; bidirectional. */
  "GPIO7": "31",
  /** Physical pin 32: GPIO6; bidirectional. */
  "GPIO6": "32",
  /** Physical pin 33: GPIO5; bidirectional. */
  "GPIO5": "33",
  /** Physical pin 34: GPIO4; bidirectional. */
  "GPIO4": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: GPIO3; bidirectional. */
  "GPIO3": "37",
  /** Physical pin 38: GPIO2; bidirectional. */
  "GPIO2": "38",
  /** Physical pin 39: VIO; passive. */
  "VIO_39": "39",
  /** Physical pin 40: GPIO1; bidirectional. */
  "GPIO1": "40",
  /** Physical pin 41: GPIO0; bidirectional. */
  "GPIO0": "41",
  /** Physical pin 42: ~{RI1}; input. */
  "~{RI1}": "42",
  /** Physical pin 43: ~{DCD1}; input. */
  "~{DCD1}": "43",
  /** Physical pin 44: ~{DSR1}; input. */
  "~{DSR1}": "44",
  /** Physical pin 45: ~{DTR1}; output. */
  "~{DTR1}": "45",
  /** Physical pin 46: ~{CTS1}; input. */
  "~{CTS1}": "46",
  /** Physical pin 47: ~{RTS1}; output. */
  "~{RTS1}": "47",
  /** Physical pin 48: RX1; input. */
  "RX1": "48",
  /** Physical pin 49: TX1; output. */
  "TX1": "49",
  /** Physical pin 50: ~{RI0}; input. */
  "~{RI0}": "50",
  /** Physical pin 51: ~{DCD0}; input. */
  "~{DCD0}": "51",
  /** Physical pin 52: ~{DSR0}; input. */
  "~{DSR0}": "52",
  /** Physical pin 53: ~{DTR0}; output. */
  "~{DTR0}": "53",
  /** Physical pin 54: ~{CTS0}; input. */
  "~{CTS0}": "54",
  /** Physical pin 55: ~{RTS0}; output. */
  "~{RTS0}": "55",
  /** Physical pin 56: RX0; input. */
  "RX0": "56",
  /** Physical pin 57: TX0; output. */
  "TX0": "57",
  /** Physical pin 58: VDD; power_in. */
  "VDD": "58",
  /** Physical pin 59: VSS; passive. */
  "VSS_59": "59",
  /** Physical pin 60: VREGIN; power_in. */
  "VREGIN": "60",
  /** Physical pin 61: VBUS; input. */
  "VBUS": "61",
  /** Physical pin 62: D+; bidirectional. */
  "D+": "62",
  /** Physical pin 63: D-; bidirectional. */
  "D-": "63",
  /** Physical pin 64: ~{RESET}; input. */
  "~{RESET}": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
}) {
  override schema = "Interface_USB:CP2108-xxx-xM";
  override referencePrefix = "U";
}

/**
 * HID USB to SMBUS master bridge
 *
 * KiCad symbol: `Interface_USB:CP2112`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/cp2112-datasheet.pdf
 * Keywords: USB SMBUS bridge.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2112 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: D-; bidirectional. */
  "D-": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; input. */
  "~{RST}": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: SUSPEND; output. */
  "SUSPEND": "11",
  /** Physical pin 12: GPIO.7; bidirectional. */
  "GPIO.7": "12",
  /** Physical pin 13: GPIO.6; bidirectional. */
  "GPIO.6": "13",
  /** Physical pin 14: GPIO.5; bidirectional. */
  "GPIO.5": "14",
  /** Physical pin 15: GPIO.4; bidirectional. */
  "GPIO.4": "15",
  /** Physical pin 16: VPP; power_in. */
  "VPP": "16",
  /** Physical pin 17: ~{SUSPEND}; output. */
  "~{SUSPEND}": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: GPIO.3; bidirectional. */
  "GPIO.3": "20",
  /** Physical pin 21: GPIO.2; bidirectional. */
  "GPIO.2": "21",
  /** Physical pin 22: GPIO.1; bidirectional. */
  "GPIO.1": "22",
  /** Physical pin 23: GPIO.0; bidirectional. */
  "GPIO.0": "23",
  /** Physical pin 24: SCL; output. */
  "SCL": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:CP2112";
  override referencePrefix = "U";
}

/**
 * USB to I2S bridge, USB 1.0 Audio Class, QFN-32
 *
 * KiCad symbol: `Interface_USB:CP2615-xx-xM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/cp2615-datasheet.pdf
 * Keywords: usb i2s i2c uart audio bridge hid gpio.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CP2615_xx_xM extends Component.withPins({
  /** Physical pin 1: I2S_SDIN; input. */
  "I2S_SDIN": "1",
  /** Physical pin 2: I2S_SCLK; output. */
  "I2S_SCLK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}; bidirectional. */
  "~{RST}": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC": "10",
  /** Physical pin 11: GPIO.7; bidirectional. */
  "GPIO.7": "11",
  /** Physical pin 12: GPIO.6; bidirectional. */
  "GPIO.6": "12",
  /** Physical pin 21: ~{CFGMODE}; input. */
  "~{CFGMODE}": "21",
  /** Physical pin 22: GPIO.10/~{RESETOUT}; bidirectional. */
  "GPIO.10/~{RESETOUT}": "22",
  /** Physical pin 23: GPIO.14/RX; bidirectional. */
  "GPIO.14/RX": "23",
  /** Physical pin 24: GPIO.13/TX; bidirectional. */
  "GPIO.13/TX": "24",
  /** Physical pin 25: GPIO.12/CLKOUT; bidirectional. */
  "GPIO.12/CLKOUT": "25",
  /** Physical pin 26: I2S_MCLK; output. */
  "I2S_MCLK": "26",
  /** Physical pin 27: GPIO.11/RTS; bidirectional. */
  "GPIO.11/RTS": "27",
  /** Physical pin 28: I2S_LRCLK; output. */
  "I2S_LRCLK": "28",
  /** Physical pin 29: I2C_SCL; bidirectional. */
  "I2C_SCL": "29",
  /** Physical pin 30: I2C_SDA; bidirectional. */
  "I2C_SDA": "30",
  /** Physical pin 31: GPIO.15/CTS; bidirectional. */
  "GPIO.15/CTS": "31",
  /** Physical pin 32: I2S_SDOUT; output. */
  "I2S_SDOUT": "32",
  /** Physical pin 13: GPIO.5; bidirectional. */
  "GPIO.5": "13",
  /** Physical pin 14: GPIO.4; bidirectional. */
  "GPIO.4": "14",
  /** Physical pin 15: GPIO.3; bidirectional. */
  "GPIO.3": "15",
  /** Physical pin 16: GPIO.2; bidirectional. */
  "GPIO.2": "16",
  /** Physical pin 17: GPIO.1; bidirectional. */
  "GPIO.1": "17",
  /** Physical pin 18: GPIO.0; bidirectional. */
  "GPIO.0": "18",
  /** Physical pin 19: GPIO.9/BUTTONS; bidirectional. */
  "GPIO.9/BUTTONS": "19",
  /** Physical pin 20: GPIO.8/ADC; bidirectional. */
  "GPIO.8/ADC": "20",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "Interface_USB:CP2615-xx-xM";
  override referencePrefix = "U";
}

/**
 * USB-Serial single channel bridge with capsense and BCD, +1.71V to +5.5V VDD, UART/I2C/SPI/RS232/RS422, QFN-24
 *
 * KiCad symbol: `Interface_USB:CY7C65211-24LTXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.cypress.com/file/139886/download
 * Keywords: USB-Serial single channel bridge.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C65211_24LTXI extends Component.withPins({
  /** Physical pin 1: SCB_0/GPIO_6; bidirectional. */
  "SCB_0/GPIO_6": "1",
  /** Physical pin 2: SCB_5/GPIO_7; bidirectional. */
  "SCB_5/GPIO_7": "2",
  /** Physical pin 3: VSSD; power_in. */
  "VSSD_3": "3",
  /** Physical pin 4: GPIO_8; tri_state. */
  "GPIO_8": "4",
  /** Physical pin 5: GPIO_9; tri_state. */
  "GPIO_9": "5",
  /** Physical pin 6: GPIO_10; tri_state. */
  "GPIO_10": "6",
  /** Physical pin 7: GPIO_11; tri_state. */
  "GPIO_11": "7",
  /** Physical pin 8: SUSPEND; output. */
  "SUSPEND": "8",
  /** Physical pin 9: WAKEUP; input. */
  "WAKEUP": "9",
  /** Physical pin 10: USBDP; bidirectional. */
  "USBDP": "10",
  /** Physical pin 11: USBDM; bidirectional. */
  "USBDM": "11",
  /** Physical pin 12: VCCD; power_in. */
  "VCCD": "12",
  /** Physical pin 13: VSSD; power_in. */
  "VSSD_13": "13",
  /** Physical pin 14: ~{XRES}; input. */
  "~{XRES}": "14",
  /** Physical pin 15: VBUS; power_out. */
  "VBUS": "15",
  /** Physical pin 16: VSSD; power_in. */
  "VSSD_16": "16",
  /** Physical pin 17: VSSA; power_in. */
  "VSSA": "17",
  /** Physical pin 18: GPIO_0; tri_state. */
  "GPIO_0": "18",
  /** Physical pin 19: GPIO_1; tri_state. */
  "GPIO_1": "19",
  /** Physical pin 20: SCB_1/GPIO_2; bidirectional. */
  "SCB_1/GPIO_2": "20",
  /** Physical pin 21: SCB_2/GPIO_3; bidirectional. */
  "SCB_2/GPIO_3": "21",
  /** Physical pin 22: SCB_3/GPIO_4; bidirectional. */
  "SCB_3/GPIO_4": "22",
  /** Physical pin 23: SCB_4/GPIO_5; bidirectional. */
  "SCB_4/GPIO_5": "23",
  /** Physical pin 24: VDDD; power_in. */
  "VDDD": "24",
  /** Physical pin 25: 1EP; no_connect. */
  "1EP": "25",
}) {
  override schema = "Interface_USB:CY7C65211-24LTXI";
  override referencePrefix = "U";
}

/**
 * USB-Serial single channel bridge with capsense and BCD, +1.71V to +5.5V VDD, UART/I2C/SPI/RS232/RS422/RS485, QFN-24
 *
 * KiCad symbol: `Interface_USB:CY7C65211A-24LTXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.cypress.com/file/139886/download
 * Keywords: USB-Serial single channel bridge.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C65211A_24LTXI extends Component.withPins({
  /** Physical pin 1: SCB_0/GPIO_6; bidirectional. */
  "SCB_0/GPIO_6": "1",
  /** Physical pin 2: SCB_5/GPIO_7; bidirectional. */
  "SCB_5/GPIO_7": "2",
  /** Physical pin 3: VSSD; power_in. */
  "VSSD_3": "3",
  /** Physical pin 4: GPIO_8; tri_state. */
  "GPIO_8": "4",
  /** Physical pin 5: GPIO_9; tri_state. */
  "GPIO_9": "5",
  /** Physical pin 6: GPIO_10; tri_state. */
  "GPIO_10": "6",
  /** Physical pin 7: GPIO_11; tri_state. */
  "GPIO_11": "7",
  /** Physical pin 8: SUSPEND; output. */
  "SUSPEND": "8",
  /** Physical pin 9: WAKEUP; input. */
  "WAKEUP": "9",
  /** Physical pin 10: USBDP; bidirectional. */
  "USBDP": "10",
  /** Physical pin 11: USBDM; bidirectional. */
  "USBDM": "11",
  /** Physical pin 12: VCCD; power_in. */
  "VCCD": "12",
  /** Physical pin 13: VSSD; power_in. */
  "VSSD_13": "13",
  /** Physical pin 14: ~{XRES}; input. */
  "~{XRES}": "14",
  /** Physical pin 15: VBUS; power_out. */
  "VBUS": "15",
  /** Physical pin 16: VSSD; power_in. */
  "VSSD_16": "16",
  /** Physical pin 17: VSSA; power_in. */
  "VSSA": "17",
  /** Physical pin 18: GPIO_0; tri_state. */
  "GPIO_0": "18",
  /** Physical pin 19: GPIO_1; tri_state. */
  "GPIO_1": "19",
  /** Physical pin 20: SCB_1/GPIO_2; bidirectional. */
  "SCB_1/GPIO_2": "20",
  /** Physical pin 21: SCB_2/GPIO_3; bidirectional. */
  "SCB_2/GPIO_3": "21",
  /** Physical pin 22: SCB_3/GPIO_4; bidirectional. */
  "SCB_3/GPIO_4": "22",
  /** Physical pin 23: SCB_4/GPIO_5; bidirectional. */
  "SCB_4/GPIO_5": "23",
  /** Physical pin 24: VDDD; power_in. */
  "VDDD": "24",
  /** Physical pin 25: 1EP; no_connect. */
  "1EP": "25",
}) {
  override schema = "Interface_USB:CY7C65211A-24LTXI";
  override referencePrefix = "U";
}

/**
 * USB-UART LP Bridge Controller, full speed 12Mbps, +1.71V to 5.5V VDD, UART/RS232/RS422, SSOP-28
 *
 * KiCad symbol: `Interface_USB:CY7C65213-28PVXI`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://www.cypress.com/file/139881/download
 * Keywords: USB-UART LP Bridge Controller, full speed 12Mbps.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C65213_28PVXI extends Component.withPins({
  /** Physical pin 1: TXD; output. */
  "TXD": "1",
  /** Physical pin 2: DTR; output. */
  "DTR": "2",
  /** Physical pin 3: RTS; output. */
  "RTS": "3",
  /** Physical pin 4: VCCIO; power_in. */
  "VCCIO": "4",
  /** Physical pin 5: RXD; input. */
  "RXD": "5",
  /** Physical pin 6: RI; input. */
  "RI": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: GPIO5; tri_state. */
  "GPIO5": "8",
  /** Physical pin 9: DSR; input. */
  "DSR": "9",
  /** Physical pin 10: DCD; input. */
  "DCD": "10",
  /** Physical pin 11: CTS; input. */
  "CTS": "11",
  /** Physical pin 12: GPIO4; bidirectional. */
  "GPIO4": "12",
  /** Physical pin 13: GPIO2; tri_state. */
  "GPIO2": "13",
  /** Physical pin 14: GPIO3; bidirectional. */
  "GPIO3": "14",
  /** Physical pin 15: USBDP; bidirectional. */
  "USBDP": "15",
  /** Physical pin 16: USBDM; bidirectional. */
  "USBDM": "16",
  /** Physical pin 17: VCCD; passive. */
  "VCCD": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: ~{RESET}; bidirectional. */
  "~{RESET}": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: GPIO1; bidirectional. */
  "GPIO1": "22",
  /** Physical pin 23: GPIO0; bidirectional. */
  "GPIO0": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DNU; passive. */
  "DNU": "26",
  /** Physical pin 27: GPIO6; tri_state. */
  "GPIO6": "27",
  /** Physical pin 28: GPIO7; tri_state. */
  "GPIO7": "28",
}) {
  override schema = "Interface_USB:CY7C65213-28PVXI";
  override referencePrefix = "U";
}

/**
 * USB-UART LP Bridge Controller, full speed 12Mbps, +1.71V to 5.5V VDD, UART/RS232/RS422, QFN-32
 *
 * KiCad symbol: `Interface_USB:CY7C65213-32LTXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.cypress.com/file/139881/download
 * Keywords: USB-UART LP Bridge Controller, full speed 12Mbps.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C65213_32LTXI extends Component.withPins({
  /** Physical pin 1: VCCIO; power_in. */
  "VCCIO": "1",
  /** Physical pin 2: RXD; input. */
  "RXD": "2",
  /** Physical pin 3: RI; input. */
  "RI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GPIO5; tri_state. */
  "GPIO5": "5",
  /** Physical pin 6: DSR; input. */
  "DSR": "6",
  /** Physical pin 7: DCD; input. */
  "DCD": "7",
  /** Physical pin 8: CTS; input. */
  "CTS": "8",
  /** Physical pin 9: GPIO4; bidirectional. */
  "GPIO4": "9",
  /** Physical pin 10: GPIO2; tri_state. */
  "GPIO2": "10",
  /** Physical pin 11: GPIO3; bidirectional. */
  "GPIO3": "11",
  /** Physical pin 12: GPIO6; tri_state. */
  "GPIO6": "12",
  /** Physical pin 13: GPIO7; tri_state. */
  "GPIO7": "13",
  /** Physical pin 14: USBDP; bidirectional. */
  "USBDP": "14",
  /** Physical pin 15: USBDM; bidirectional. */
  "USBDM": "15",
  /** Physical pin 16: VCCD; passive. */
  "VCCD": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: ~{RESET}; bidirectional. */
  "~{RESET}": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: GPIO1; bidirectional. */
  "GPIO1": "21",
  /** Physical pin 22: GPIO0; bidirectional. */
  "GPIO0": "22",
  /** Physical pin 23: DNU; passive. */
  "DNU_23": "23",
  /** Physical pin 24: AGND; power_in. */
  "AGND": "24",
  /** Physical pin 25: DNU; passive. */
  "DNU_25": "25",
  /** Physical pin 26: DNU; passive. */
  "DNU_26": "26",
  /** Physical pin 27: DNU; passive. */
  "DNU_27": "27",
  /** Physical pin 28: DNU; passive. */
  "DNU_28": "28",
  /** Physical pin 29: DNU; passive. */
  "DNU_29": "29",
  /** Physical pin 30: TXD; output. */
  "TXD": "30",
  /** Physical pin 31: DTR; output. */
  "DTR": "31",
  /** Physical pin 32: RTS; output. */
  "RTS": "32",
  /** Physical pin 33: 1EP; no_connect. */
  "1EP": "33",
}) {
  override schema = "Interface_USB:CY7C65213-32LTXI";
  override referencePrefix = "U";
}

/**
 * USB-UART LP Bridge Controller, full speed 12Mbps, +1.71V to 5.5V VDD, UART/RS232/RS422/RS485, SSOP-28
 *
 * KiCad symbol: `Interface_USB:CY7C65213A-28PVXI`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://www.cypress.com/file/139881/download
 * Keywords: USB-UART LP Bridge Controller, full speed 12Mbps.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C65213A_28PVXI extends Component.withPins({
  /** Physical pin 1: TXD; output. */
  "TXD": "1",
  /** Physical pin 2: DTR; output. */
  "DTR": "2",
  /** Physical pin 3: RTS; output. */
  "RTS": "3",
  /** Physical pin 4: VCCIO; power_in. */
  "VCCIO": "4",
  /** Physical pin 5: RXD; input. */
  "RXD": "5",
  /** Physical pin 6: RI; input. */
  "RI": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: GPIO5; tri_state. */
  "GPIO5": "8",
  /** Physical pin 9: DSR; input. */
  "DSR": "9",
  /** Physical pin 10: DCD; input. */
  "DCD": "10",
  /** Physical pin 11: CTS; input. */
  "CTS": "11",
  /** Physical pin 12: GPIO4; bidirectional. */
  "GPIO4": "12",
  /** Physical pin 13: GPIO2; tri_state. */
  "GPIO2": "13",
  /** Physical pin 14: GPIO3; bidirectional. */
  "GPIO3": "14",
  /** Physical pin 15: USBDP; bidirectional. */
  "USBDP": "15",
  /** Physical pin 16: USBDM; bidirectional. */
  "USBDM": "16",
  /** Physical pin 17: VCCD; passive. */
  "VCCD": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: ~{RESET}; bidirectional. */
  "~{RESET}": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: GPIO1; bidirectional. */
  "GPIO1": "22",
  /** Physical pin 23: GPIO0; bidirectional. */
  "GPIO0": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DNU; passive. */
  "DNU": "26",
  /** Physical pin 27: GPIO6; tri_state. */
  "GPIO6": "27",
  /** Physical pin 28: GPIO7; tri_state. */
  "GPIO7": "28",
}) {
  override schema = "Interface_USB:CY7C65213A-28PVXI";
  override referencePrefix = "U";
}

/**
 * USB-UART LP Bridge Controller, full speed 12Mbps, +1.71V to 5.5V VDD, UART/RS232/RS422/RS485, QFN-32
 *
 * KiCad symbol: `Interface_USB:CY7C65213A-32LTXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.cypress.com/file/139881/download
 * Keywords: USB-UART LP Bridge Controller, full speed 12Mbps.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C65213A_32LTXI extends Component.withPins({
  /** Physical pin 1: VCCIO; power_in. */
  "VCCIO": "1",
  /** Physical pin 2: RXD; input. */
  "RXD": "2",
  /** Physical pin 3: RI; input. */
  "RI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GPIO5; tri_state. */
  "GPIO5": "5",
  /** Physical pin 6: DSR; input. */
  "DSR": "6",
  /** Physical pin 7: DCD; input. */
  "DCD": "7",
  /** Physical pin 8: CTS; input. */
  "CTS": "8",
  /** Physical pin 9: GPIO4; bidirectional. */
  "GPIO4": "9",
  /** Physical pin 10: GPIO2; tri_state. */
  "GPIO2": "10",
  /** Physical pin 11: GPIO3; bidirectional. */
  "GPIO3": "11",
  /** Physical pin 12: GPIO6; tri_state. */
  "GPIO6": "12",
  /** Physical pin 13: GPIO7; tri_state. */
  "GPIO7": "13",
  /** Physical pin 14: USBDP; bidirectional. */
  "USBDP": "14",
  /** Physical pin 15: USBDM; bidirectional. */
  "USBDM": "15",
  /** Physical pin 16: VCCD; passive. */
  "VCCD": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: ~{RESET}; bidirectional. */
  "~{RESET}": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: GPIO1; bidirectional. */
  "GPIO1": "21",
  /** Physical pin 22: GPIO0; bidirectional. */
  "GPIO0": "22",
  /** Physical pin 23: DNU; passive. */
  "DNU_23": "23",
  /** Physical pin 24: AGND; power_in. */
  "AGND": "24",
  /** Physical pin 25: DNU; passive. */
  "DNU_25": "25",
  /** Physical pin 26: DNU; passive. */
  "DNU_26": "26",
  /** Physical pin 27: DNU; passive. */
  "DNU_27": "27",
  /** Physical pin 28: DNU; passive. */
  "DNU_28": "28",
  /** Physical pin 29: DNU; passive. */
  "DNU_29": "29",
  /** Physical pin 30: TXD; output. */
  "TXD": "30",
  /** Physical pin 31: DTR; output. */
  "DTR": "31",
  /** Physical pin 32: RTS; output. */
  "RTS": "32",
  /** Physical pin 33: 1EP; no_connect. */
  "1EP": "33",
}) {
  override schema = "Interface_USB:CY7C65213A-32LTXI";
  override referencePrefix = "U";
}

/**
 * USB-Serial Dual Channel Bridge with CapSense Full-Speed 12 Mbps, +1.71V to +5.5V VDD, UART/I2C/SPI/RS232/RS422/JTAG, QFN-32
 *
 * KiCad symbol: `Interface_USB:CY7C65215-32LTXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.cypress.com/file/129956/download
 * Keywords: USB-Serial single channel bridge.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C65215_32LTXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: SCB0_0/GPIO_8; bidirectional. */
  "SCB0_0/GPIO_8": "2",
  /** Physical pin 3: SCB0_5/GPIO_9; bidirectional. */
  "SCB0_5/GPIO_9": "3",
  /** Physical pin 4: VSSD; power_in. */
  "VSSD_4": "4",
  /** Physical pin 5: SCB1_0/GPIO_10; bidirectional. */
  "SCB1_0/GPIO_10": "5",
  /** Physical pin 6: SCB1_1/GPIO_11; bidirectional. */
  "SCB1_1/GPIO_11": "6",
  /** Physical pin 7: SCB1_2/GPIO_12; bidirectional. */
  "SCB1_2/GPIO_12": "7",
  /** Physical pin 8: SCB1_3/GPIO_13; bidirectional. */
  "SCB1_3/GPIO_13": "8",
  /** Physical pin 9: SCB1_4/GPIO_14; bidirectional. */
  "SCB1_4/GPIO_14": "9",
  /** Physical pin 10: SCB1_5/GPIO_15; bidirectional. */
  "SCB1_5/GPIO_15": "10",
  /** Physical pin 11: SUSPEND; output. */
  "SUSPEND": "11",
  /** Physical pin 12: WAKEUP; input. */
  "WAKEUP": "12",
  /** Physical pin 13: GPIO_16; tri_state. */
  "GPIO_16": "13",
  /** Physical pin 14: USBDP; bidirectional. */
  "USBDP": "14",
  /** Physical pin 15: USBDM; bidirectional. */
  "USBDM": "15",
  /** Physical pin 16: VCCD; power_in. */
  "VCCD": "16",
  /** Physical pin 17: VSSD; power_in. */
  "VSSD_17": "17",
  /** Physical pin 18: ~{XRES}; input. */
  "~{XRES}": "18",
  /** Physical pin 19: VBUS; power_out. */
  "VBUS": "19",
  /** Physical pin 20: VSSD; power_in. */
  "VSSD_20": "20",
  /** Physical pin 21: GPIO_17; tri_state. */
  "GPIO_17": "21",
  /** Physical pin 22: GPIO_18; tri_state. */
  "GPIO_18": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: VSSA; power_in. */
  "VSSA": "24",
  /** Physical pin 25: GPIO_0; bidirectional. */
  "GPIO_0": "25",
  /** Physical pin 26: GPIO_1; bidirectional. */
  "GPIO_1": "26",
  /** Physical pin 27: SCB0_1/GPIO_2; bidirectional. */
  "SCB0_1/GPIO_2": "27",
  /** Physical pin 28: SCB0_2/GPIO_3; bidirectional. */
  "SCB0_2/GPIO_3": "28",
  /** Physical pin 29: SCB0_3/GPIO_4; bidirectional. */
  "SCB0_3/GPIO_4": "29",
  /** Physical pin 30: SCB0_4/GPIO_5; bidirectional. */
  "SCB0_4/GPIO_5": "30",
  /** Physical pin 31: GPIO_6; bidirectional. */
  "GPIO_6": "31",
  /** Physical pin 32: GPIO_7; bidirectional. */
  "GPIO_7": "32",
  /** Physical pin 33: 1EP; no_connect. */
  "1EP": "33",
}) {
  override schema = "Interface_USB:CY7C65215-32LTXI";
  override referencePrefix = "U";
}

/**
 * USB-Serial Dual Channel Bridge with CapSense, +1.71V to +5.5V VDD, UART/I2C/SPI/RS232/RS422/RS485/JTAG, QFN-32
 *
 * KiCad symbol: `Interface_USB:CY7C65215A-32LTXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.cypress.com/file/129956/download
 * Keywords: USB-Serial single channel bridge.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C65215A_32LTXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: SCB0_0/GPIO_8; bidirectional. */
  "SCB0_0/GPIO_8": "2",
  /** Physical pin 3: SCB0_5/GPIO_9; bidirectional. */
  "SCB0_5/GPIO_9": "3",
  /** Physical pin 4: VSSD; power_in. */
  "VSSD_4": "4",
  /** Physical pin 5: SCB1_0/GPIO_10; bidirectional. */
  "SCB1_0/GPIO_10": "5",
  /** Physical pin 6: SCB1_1/GPIO_11; bidirectional. */
  "SCB1_1/GPIO_11": "6",
  /** Physical pin 7: SCB1_2/GPIO_12; bidirectional. */
  "SCB1_2/GPIO_12": "7",
  /** Physical pin 8: SCB1_3/GPIO_13; bidirectional. */
  "SCB1_3/GPIO_13": "8",
  /** Physical pin 9: SCB1_4/GPIO_14; bidirectional. */
  "SCB1_4/GPIO_14": "9",
  /** Physical pin 10: SCB1_5/GPIO_15; bidirectional. */
  "SCB1_5/GPIO_15": "10",
  /** Physical pin 11: SUSPEND; output. */
  "SUSPEND": "11",
  /** Physical pin 12: WAKEUP; input. */
  "WAKEUP": "12",
  /** Physical pin 13: GPIO_16; tri_state. */
  "GPIO_16": "13",
  /** Physical pin 14: USBDP; bidirectional. */
  "USBDP": "14",
  /** Physical pin 15: USBDM; bidirectional. */
  "USBDM": "15",
  /** Physical pin 16: VCCD; power_in. */
  "VCCD": "16",
  /** Physical pin 17: VSSD; power_in. */
  "VSSD_17": "17",
  /** Physical pin 18: ~{XRES}; input. */
  "~{XRES}": "18",
  /** Physical pin 19: VBUS; power_out. */
  "VBUS": "19",
  /** Physical pin 20: VSSD; power_in. */
  "VSSD_20": "20",
  /** Physical pin 21: GPIO_17; tri_state. */
  "GPIO_17": "21",
  /** Physical pin 22: GPIO_18; tri_state. */
  "GPIO_18": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: VSSA; power_in. */
  "VSSA": "24",
  /** Physical pin 25: GPIO_0; bidirectional. */
  "GPIO_0": "25",
  /** Physical pin 26: GPIO_1; bidirectional. */
  "GPIO_1": "26",
  /** Physical pin 27: SCB0_1/GPIO_2; bidirectional. */
  "SCB0_1/GPIO_2": "27",
  /** Physical pin 28: SCB0_2/GPIO_3; bidirectional. */
  "SCB0_2/GPIO_3": "28",
  /** Physical pin 29: SCB0_3/GPIO_4; bidirectional. */
  "SCB0_3/GPIO_4": "29",
  /** Physical pin 30: SCB0_4/GPIO_5; bidirectional. */
  "SCB0_4/GPIO_5": "30",
  /** Physical pin 31: GPIO_6; bidirectional. */
  "GPIO_6": "31",
  /** Physical pin 32: GPIO_7; bidirectional. */
  "GPIO_7": "32",
  /** Physical pin 33: 1EP; no_connect. */
  "1EP": "33",
}) {
  override schema = "Interface_USB:CY7C65215A-32LTXI";
  override referencePrefix = "U";
}

/**
 * USB Type-C port controller, Cortex®-M0 processor, UFP CC bootloader, QFN-24
 *
 * KiCad symbol: `Interface_USB:CYPD3171-24LQXQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*EP2.75x2.75mm*.
 * @see https://www.infineon.com/dgdl/Infineon-EZ-PD(TM)_CCG3PA_Datasheet_USB_Type-C_Port_Controller-DataSheet-v09_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ee438366ac0
 * Keywords: USBPD Quickcharge.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.75x2.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYPD3171_24LQXQ extends Component.withPins({
  /** Physical pin 1: P1.0; bidirectional. */
  "P1.0": "1",
  /** Physical pin 2: P1.1; bidirectional. */
  "P1.1": "2",
  /** Physical pin 3: VBUS_P_CTRL; output. */
  "VBUS_P_CTRL": "3",
  /** Physical pin 4: VBUS_C_CTRL; output. */
  "VBUS_C_CTRL": "4",
  /** Physical pin 5: DP1/P1.2; bidirectional. */
  "DP1/P1.2": "5",
  /** Physical pin 6: DM1/P1.3; bidirectional. */
  "DM1/P1.3": "6",
  /** Physical pin 7: P0.0/SWD_DAT_0; bidirectional. */
  "P0.0/SWD_DAT_0": "7",
  /** Physical pin 8: P0.1/SWD_CLK_0; bidirectional. */
  "P0.1/SWD_CLK_0": "8",
  /** Physical pin 9: P2.0/AXRES; bidirectional. */
  "P2.0/AXRES": "9",
  /** Physical pin 10: P2.1; bidirectional. */
  "P2.1": "10",
  /** Physical pin 11: VBUS_C_MON_DIS; input. */
  "VBUS_C_MON_DIS": "11",
  /** Physical pin 12: P2.2; bidirectional. */
  "P2.2": "12",
  /** Physical pin 13: P2.3; bidirectional. */
  "P2.3": "13",
  /** Physical pin 14: CC2; bidirectional. */
  "CC2": "14",
  /** Physical pin 15: CC1; bidirectional. */
  "CC1": "15",
  /** Physical pin 16: DM0/P3.1; bidirectional. */
  "DM0/P3.1": "16",
  /** Physical pin 17: DP0/P3.0; bidirectional. */
  "DP0/P3.0": "17",
  /** Physical pin 18: VBUS_IN_DIS; input. */
  "VBUS_IN_DIS": "18",
  /** Physical pin 19: CSP; input. */
  "CSP": "19",
  /** Physical pin 20: FB; output. */
  "FB": "20",
  /** Physical pin 21: COMP; input. */
  "COMP": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD": "23",
  /** Physical pin 24: VCCD; power_out. */
  "VCCD": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:CYPD3171-24LQXQ";
  override referencePrefix = "U";
}

/**
 * USB Type-C port controller, Cortex®-M0 processor, DFP CC with opto coupler feedback bootloader, SOIC-16
 *
 * KiCad symbol: `Interface_USB:CYPD3174-16SXQ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-EZ-PD(TM)_CCG3PA_Datasheet_USB_Type-C_Port_Controller-DataSheet-v09_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ee438366ac0
 * Keywords: USBPD quickcharge.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYPD3174_16SXQ extends Component.withPins({
  /** Physical pin 1: FB; output. */
  "FB": "1",
  /** Physical pin 2: COMP; input. */
  "COMP": "2",
  /** Physical pin 3: VDDD; power_in. */
  "VDDD": "3",
  /** Physical pin 4: VCCD; power_out. */
  "VCCD": "4",
  /** Physical pin 5: VBUS_P_CTRL; output. */
  "VBUS_P_CTRL": "5",
  /** Physical pin 6: P0.0/SWD_DAT_0; bidirectional. */
  "P0.0/SWD_DAT_0": "6",
  /** Physical pin 7: P0.1/SWD_CLK_0; bidirectional. */
  "P0.1/SWD_CLK_0": "7",
  /** Physical pin 8: P2.0/AXRES; bidirectional. */
  "P2.0/AXRES": "8",
  /** Physical pin 9: VBUS_C_MON_DIS; input. */
  "VBUS_C_MON_DIS": "9",
  /** Physical pin 10: CC2; bidirectional. */
  "CC2": "10",
  /** Physical pin 11: CC1; bidirectional. */
  "CC1": "11",
  /** Physical pin 12: DM0/P3.1; bidirectional. */
  "DM0/P3.1": "12",
  /** Physical pin 13: DP0/P3.0; bidirectional. */
  "DP0/P3.0": "13",
  /** Physical pin 14: VBUS_IN_DIS; input. */
  "VBUS_IN_DIS": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: CSP; input. */
  "CSP": "16",
}) {
  override schema = "Interface_USB:CYPD3174-16SXQ";
  override referencePrefix = "U";
}

/**
 * USB Type-C port controller, Cortex®-M0 processor, DFP CC with opto coupler feedback bootloader, QFN-24
 *
 * KiCad symbol: `Interface_USB:CYPD3174-24LQXQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*EP2.75x2.75mm*.
 * @see https://www.infineon.com/dgdl/Infineon-EZ-PD(TM)_CCG3PA_Datasheet_USB_Type-C_Port_Controller-DataSheet-v09_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ee438366ac0
 * Keywords: USBPD Quickcharge.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.75x2.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYPD3174_24LQXQ extends Component.withPins({
  /** Physical pin 1: P1.0; bidirectional. */
  "P1.0": "1",
  /** Physical pin 2: P1.1; bidirectional. */
  "P1.1": "2",
  /** Physical pin 3: VBUS_P_CTRL; output. */
  "VBUS_P_CTRL": "3",
  /** Physical pin 4: VBUS_C_CTRL; output. */
  "VBUS_C_CTRL": "4",
  /** Physical pin 5: DP1/P1.2; bidirectional. */
  "DP1/P1.2": "5",
  /** Physical pin 6: DM1/P1.3; bidirectional. */
  "DM1/P1.3": "6",
  /** Physical pin 7: P0.0/SWD_DAT_0; bidirectional. */
  "P0.0/SWD_DAT_0": "7",
  /** Physical pin 8: P0.1/SWD_CLK_0; bidirectional. */
  "P0.1/SWD_CLK_0": "8",
  /** Physical pin 9: P2.0/AXRES; bidirectional. */
  "P2.0/AXRES": "9",
  /** Physical pin 10: P2.1; bidirectional. */
  "P2.1": "10",
  /** Physical pin 11: VBUS_C_MON_DIS; input. */
  "VBUS_C_MON_DIS": "11",
  /** Physical pin 12: P2.2; bidirectional. */
  "P2.2": "12",
  /** Physical pin 13: P2.3; bidirectional. */
  "P2.3": "13",
  /** Physical pin 14: CC2; bidirectional. */
  "CC2": "14",
  /** Physical pin 15: CC1; bidirectional. */
  "CC1": "15",
  /** Physical pin 16: DM0/P3.1; bidirectional. */
  "DM0/P3.1": "16",
  /** Physical pin 17: DP0/P3.0; bidirectional. */
  "DP0/P3.0": "17",
  /** Physical pin 18: VBUS_IN_DIS; input. */
  "VBUS_IN_DIS": "18",
  /** Physical pin 19: CSP; input. */
  "CSP": "19",
  /** Physical pin 20: FB; output. */
  "FB": "20",
  /** Physical pin 21: COMP; input. */
  "COMP": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD": "23",
  /** Physical pin 24: VCCD; power_out. */
  "VCCD": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:CYPD3174-24LQXQ";
  override referencePrefix = "U";
}

/**
 * USB Type-C port controller, Cortex®-M0 processor, DFP CC with direct feedback bootloader, QFN-24
 *
 * KiCad symbol: `Interface_USB:CYPD3175-24LQXQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*EP2.75x2.75mm*.
 * @see https://www.infineon.com/dgdl/Infineon-EZ-PD(TM)_CCG3PA_Datasheet_USB_Type-C_Port_Controller-DataSheet-v09_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ee438366ac0
 * Keywords: USBPD Quickcharge.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.75x2.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYPD3175_24LQXQ extends Component.withPins({
  /** Physical pin 1: P1.0; bidirectional. */
  "P1.0": "1",
  /** Physical pin 2: P1.1; bidirectional. */
  "P1.1": "2",
  /** Physical pin 3: VBUS_P_CTRL; output. */
  "VBUS_P_CTRL": "3",
  /** Physical pin 4: VBUS_C_CTRL; output. */
  "VBUS_C_CTRL": "4",
  /** Physical pin 5: DP1/P1.2; bidirectional. */
  "DP1/P1.2": "5",
  /** Physical pin 6: DM1/P1.3; bidirectional. */
  "DM1/P1.3": "6",
  /** Physical pin 7: P0.0/SWD_DAT_0; bidirectional. */
  "P0.0/SWD_DAT_0": "7",
  /** Physical pin 8: P0.1/SWD_CLK_0; bidirectional. */
  "P0.1/SWD_CLK_0": "8",
  /** Physical pin 9: P2.0/AXRES; bidirectional. */
  "P2.0/AXRES": "9",
  /** Physical pin 10: P2.1; bidirectional. */
  "P2.1": "10",
  /** Physical pin 11: VBUS_C_MON_DIS; input. */
  "VBUS_C_MON_DIS": "11",
  /** Physical pin 12: P2.2; bidirectional. */
  "P2.2": "12",
  /** Physical pin 13: P2.3; bidirectional. */
  "P2.3": "13",
  /** Physical pin 14: CC2; bidirectional. */
  "CC2": "14",
  /** Physical pin 15: CC1; bidirectional. */
  "CC1": "15",
  /** Physical pin 16: DM0/P3.1; bidirectional. */
  "DM0/P3.1": "16",
  /** Physical pin 17: DP0/P3.0; bidirectional. */
  "DP0/P3.0": "17",
  /** Physical pin 18: VBUS_IN_DIS; input. */
  "VBUS_IN_DIS": "18",
  /** Physical pin 19: CSP; input. */
  "CSP": "19",
  /** Physical pin 20: FB; output. */
  "FB": "20",
  /** Physical pin 21: COMP; input. */
  "COMP": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD": "23",
  /** Physical pin 24: VCCD; power_out. */
  "VCCD": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:CYPD3175-24LQXQ";
  override referencePrefix = "U";
}

/**
 * Stand-alone USB PD controller (with sink Auto-run mode), QFN-24
 *
 * KiCad symbol: `Interface_USB:CYPD3177-24LQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP?4x4mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-EZ-PD_BCR_Datasheet_USB_Type-C_Port_Controller_for_Power_Sinks-DataSheet-v03_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ee7ce9d70ad
 * Keywords: usb pd type csink.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.75x2.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYPD3177_24LQ extends Component.withPins({
  /** Physical pin 1: VBUS_MIN; input. */
  "VBUS_MIN": "1",
  /** Physical pin 2: VBUS_MAX; input. */
  "VBUS_MAX": "2",
  /** Physical pin 3: VBUS_FET_EN; output. */
  "VBUS_FET_EN": "3",
  /** Physical pin 4: SAFE_PWR_EN; output. */
  "SAFE_PWR_EN": "4",
  /** Physical pin 5: ISNK_COARSE; input. */
  "ISNK_COARSE": "5",
  /** Physical pin 6: ISNK_FINE; input. */
  "ISNK_FINE": "6",
  /** Physical pin 7: ~{HPI_INT}; input. */
  "~{HPI_INT}": "7",
  /** Physical pin 8: GPIO_1; bidirectional. */
  "GPIO_1": "8",
  /** Physical pin 9: FAULT; output. */
  "FAULT": "9",
  /** Physical pin 10: FLIP; output. */
  "FLIP": "10",
  /** Physical pin 11: VDC_OUT; output. */
  "VDC_OUT": "11",
  /** Physical pin 12: HPI_SDA; bidirectional. */
  "HPI_SDA": "12",
  /** Physical pin 13: HPI_SCL; bidirectional. */
  "HPI_SCL": "13",
  /** Physical pin 14: CC2; bidirectional. */
  "CC2": "14",
  /** Physical pin 15: CC1; bidirectional. */
  "CC1": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: VBUS_IN; power_in. */
  "VBUS_IN": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: VDDD; power_out. */
  "VDDD": "23",
  /** Physical pin 24: VCCD; power_out. */
  "VCCD": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:CYPD3177-24LQ";
  override referencePrefix = "U";
}

/**
 * USB 2.0 High Speed 4-Port Hub Controller, SSOP-28
 *
 * KiCad symbol: `Interface_USB:FE1.1s`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x9.9mm*P0.635mm*.
 * @see https://cdn-shop.adafruit.com/product-files/2991/FE1.1s+Data+Sheet+(Rev.+1.0).pdf
 * Keywords: 4-Port, EEPROM, High Speed, Hub, USB2.0.
 * Default footprint: Package_SO:SSOP-28_3.9x9.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FE1_1s extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: XOUT; output. */
  "XOUT": "2",
  /** Physical pin 3: XIN; input. */
  "XIN": "3",
  /** Physical pin 4: DM4; bidirectional. */
  "DM4": "4",
  /** Physical pin 5: DP4; bidirectional. */
  "DP4": "5",
  /** Physical pin 6: DM3; bidirectional. */
  "DM3": "6",
  /** Physical pin 7: DP3; bidirectional. */
  "DP3": "7",
  /** Physical pin 8: DM2; bidirectional. */
  "DM2": "8",
  /** Physical pin 9: DP2; bidirectional. */
  "DP2": "9",
  /** Physical pin 10: DM1; bidirectional. */
  "DM1": "10",
  /** Physical pin 11: DP1; bidirectional. */
  "DP1": "11",
  /** Physical pin 12: VD18_O; power_out. */
  "VD18_O": "12",
  /** Physical pin 13: VD33; power_in. */
  "VD33": "13",
  /** Physical pin 14: REXT; passive. */
  "REXT": "14",
  /** Physical pin 15: DMU; bidirectional. */
  "DMU": "15",
  /** Physical pin 16: DPU; bidirectional. */
  "DPU": "16",
  /** Physical pin 17: ~{XRSTJ}; input. */
  "~{XRSTJ}": "17",
  /** Physical pin 18: VBUSM; input. */
  "VBUSM": "18",
  /** Physical pin 19: BUSJ; input. */
  "BUSJ": "19",
  /** Physical pin 20: VDD5; power_in. */
  "VDD5": "20",
  /** Physical pin 21: VD33_O; power_out. */
  "VD33_O": "21",
  /** Physical pin 22: DRV; bidirectional. */
  "DRV": "22",
  /** Physical pin 23: LED1/EESCL; bidirectional. */
  "LED1/EESCL": "23",
  /** Physical pin 24: LED2; bidirectional. */
  "LED2": "24",
  /** Physical pin 25: PWRJ; output. */
  "PWRJ": "25",
  /** Physical pin 26: OVCJ; input. */
  "OVCJ": "26",
  /** Physical pin 27: TESTJ/EESDA; bidirectional. */
  "TESTJ/EESDA": "27",
  /** Physical pin 28: VD18; power_in. */
  "VD18": "28",
}) {
  override schema = "Interface_USB:FE1.1s";
  override referencePrefix = "U";
}

/**
 * Low-Power, Two-Port, High-Speed, USB2.0 (480Mbps) Switch, MSOP-10
 *
 * KiCad symbol: `Interface_USB:FSUSB30MUX`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.onsemi.com/pdf/datasheet/fsusb30-d.pdf
 * Keywords: USB 2.0 High Speed Switch.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FSUSB30MUX extends Component.withPins({
  /** Physical pin 1: S; input. */
  "S": "1",
  /** Physical pin 2: HSD1+; bidirectional. */
  "HSD1+": "2",
  /** Physical pin 3: HSD2+; bidirectional. */
  "HSD2+": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: D-; bidirectional. */
  "D-": "6",
  /** Physical pin 7: HSD2-; bidirectional. */
  "HSD2-": "7",
  /** Physical pin 8: HSD1-; bidirectional. */
  "HSD1-": "8",
  /** Physical pin 9: ~{OE}; input. */
  "~{OE}": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Interface_USB:FSUSB30MUX";
  override referencePrefix = "U";
}

/**
 * Low-Power, Two-Port, High-Speed, USB2.0 (480Mbps) or UART Switch, MSOP-10
 *
 * KiCad symbol: `Interface_USB:FSUSB42MUX`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/FSUSB42-D.PDF
 * Keywords: USB 2.0 UART High Speed Switch.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FSUSB42MUX extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: SEL; input. */
  "SEL": "2",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: D-; bidirectional. */
  "D-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: HSD1-; bidirectional. */
  "HSD1-": "6",
  /** Physical pin 7: HSD1+; bidirectional. */
  "HSD1+": "7",
  /** Physical pin 8: HSD2-; bidirectional. */
  "HSD2-": "8",
  /** Physical pin 9: HSD2+; bidirectional. */
  "HSD2+": "9",
  /** Physical pin 10: ~{OE}; input. */
  "~{OE}": "10",
}) {
  override schema = "Interface_USB:FSUSB42MUX";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to I2C Bridge, DFN-10
 *
 * KiCad symbol: `Interface_USB:FT200XD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT200XD.pdf
 * Keywords: FTDI USB I2C Interface Converter.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.55x2.48mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT200XD extends Component.withPins({
  /** Physical pin 1: USBDM; input. */
  "USBDM": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: 3V3OUT; power_out. */
  "3V3OUT": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: CBUS0; bidirectional. */
  "CBUS0": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: VCCIO; power_in. */
  "VCCIO": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: USBDP; input. */
  "USBDP": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
}) {
  override schema = "Interface_USB:FT200XD";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to I2C Bridge, QFN-10
 *
 * KiCad symbol: `Interface_USB:FT201XQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT201X.pdf
 * Keywords: FTDI USB I2C interface Converter.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT201XQ extends Component.withPins({
  /** Physical pin 1: VCCIO; power_in. */
  "VCCIO": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: CBUS4; bidirectional. */
  "CBUS4": "4",
  /** Physical pin 5: CBUS2; bidirectional. */
  "CBUS2": "5",
  /** Physical pin 6: USBDP; bidirectional. */
  "USBDP": "6",
  /** Physical pin 7: USBDM; bidirectional. */
  "USBDM": "7",
  /** Physical pin 8: 3V3OUT; power_out. */
  "3V3OUT": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: CBUS1; bidirectional. */
  "CBUS1": "11",
  /** Physical pin 12: CBUS0; bidirectional. */
  "CBUS0": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: CBUS3; bidirectional. */
  "CBUS3": "14",
  /** Physical pin 15: CBUS5; bidirectional. */
  "CBUS5": "15",
  /** Physical pin 16: SCL; input. */
  "SCL": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
}) {
  override schema = "Interface_USB:FT201XQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to I2C Bridge, SSOP-16
 *
 * KiCad symbol: `Interface_USB:FT201XS`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT201X.pdf
 * Keywords: FTDI USB I2C Interface Converter.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT201XS extends Component.withPins({
  /** Physical pin 1: CBUS5; bidirectional. */
  "CBUS5": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: VCCIO; power_out. */
  "VCCIO": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: CBUS4; bidirectional. */
  "CBUS4": "6",
  /** Physical pin 7: CBUS2; bidirectional. */
  "CBUS2": "7",
  /** Physical pin 8: USBDP; bidirectional. */
  "USBDP": "8",
  /** Physical pin 9: USBDM; bidirectional. */
  "USBDM": "9",
  /** Physical pin 10: 3V3OUT; power_out. */
  "3V3OUT": "10",
  /** Physical pin 11: ~{RESET}; input. */
  "~{RESET}": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: CBUS1; bidirectional. */
  "CBUS1": "14",
  /** Physical pin 15: CBUS0; bidirectional. */
  "CBUS0": "15",
  /** Physical pin 16: CBUS3; bidirectional. */
  "CBUS3": "16",
}) {
  override schema = "Interface_USB:FT201XS";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to 4-Bit SPI / FT1248 Bridge, QFN-16
 *
 * KiCad symbol: `Interface_USB:FT220XQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT220X.pdf
 * Keywords: FTDI USB SPI FT1248 Interface Converter.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT220XQ extends Component.withPins({
  /** Physical pin 1: VCCIO; power_in. */
  "VCCIO": "1",
  /** Physical pin 2: MIOSI1; input. */
  "MIOSI1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: MIOSI3; input. */
  "MIOSI3": "4",
  /** Physical pin 5: MISO; input. */
  "MISO": "5",
  /** Physical pin 6: USBDP; bidirectional. */
  "USBDP": "6",
  /** Physical pin 7: USBDM; bidirectional. */
  "USBDM": "7",
  /** Physical pin 8: 3V3OUT; power_out. */
  "3V3OUT": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: CLK; input. */
  "CLK": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: CBUS3; bidirectional. */
  "CBUS3": "14",
  /** Physical pin 15: MIOSI0; input. */
  "MIOSI0": "15",
  /** Physical pin 16: MIOSI2; input. */
  "MIOSI2": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
}) {
  override schema = "Interface_USB:FT220XQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to 4-Bit SPI / FT1248 Bridge, SSOP-16
 *
 * KiCad symbol: `Interface_USB:FT220XS`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT220X.pdf
 * Keywords: FTDI USB SPI FT1248 Interface Converter.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT220XS extends Component.withPins({
  /** Physical pin 1: MIOSI0; input. */
  "MIOSI0": "1",
  /** Physical pin 2: MIOSI2; input. */
  "MIOSI2": "2",
  /** Physical pin 3: VCCIO; power_in. */
  "VCCIO": "3",
  /** Physical pin 4: MIOSI1; input. */
  "MIOSI1": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: MIOSI3; input. */
  "MIOSI3": "6",
  /** Physical pin 7: MISO; input. */
  "MISO": "7",
  /** Physical pin 8: USBDP; bidirectional. */
  "USBDP": "8",
  /** Physical pin 9: USBDM; bidirectional. */
  "USBDM": "9",
  /** Physical pin 10: 3V3OUT; power_out. */
  "3V3OUT": "10",
  /** Physical pin 11: ~{RESET}; input. */
  "~{RESET}": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: CLK; input. */
  "CLK": "15",
  /** Physical pin 16: CBUS3; bidirectional. */
  "CBUS3": "16",
}) {
  override schema = "Interface_USB:FT220XS";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to 8-Bit SPI / FT1248 Bridge, QFN-20
 *
 * KiCad symbol: `Interface_USB:FT221XQ`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT221X.pdf
 * Keywords: FTDI USB SPI FT1248 interface converter.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT221XQ extends Component.withPins({
  /** Physical pin 1: MIOSI1; input. */
  "MIOSI1": "1",
  /** Physical pin 2: MIOSI7; input. */
  "MIOSI7": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: MIOSI5; input. */
  "MIOSI5": "4",
  /** Physical pin 5: MIOSI6; input. */
  "MIOSI6": "5",
  /** Physical pin 6: MIOSI3; input. */
  "MIOSI3": "6",
  /** Physical pin 7: MISO; input. */
  "MISO": "7",
  /** Physical pin 8: USBDP; bidirectional. */
  "USBDP": "8",
  /** Physical pin 9: USBDM; bidirectional. */
  "USBDM": "9",
  /** Physical pin 10: 3V3OUT; power_out. */
  "3V3OUT": "10",
  /** Physical pin 11: ~{RESET}; input. */
  "~{RESET}": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: CLK; input. */
  "CLK": "15",
  /** Physical pin 16: CBUS3; bidirectional. */
  "CBUS3": "16",
  /** Physical pin 17: MIOSI0; input. */
  "MIOSI0": "17",
  /** Physical pin 18: MIOSI4; input. */
  "MIOSI4": "18",
  /** Physical pin 19: MIOSI2; input. */
  "MIOSI2": "19",
  /** Physical pin 20: VCCIO; power_in. */
  "VCCIO": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
}) {
  override schema = "Interface_USB:FT221XQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to 8-Bit SPI / FT1248 Bridge, SSOP-20
 *
 * KiCad symbol: `Interface_USB:FT221XS`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT221X.pdf
 * Keywords: FTDI USB SPI FT1248 interface converter.
 * Default footprint: Package_SO:SSOP-20_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT221XS extends Component.withPins({
  /** Physical pin 1: MIOSI4; input. */
  "MIOSI4": "1",
  /** Physical pin 2: MIOSI2; input. */
  "MIOSI2": "2",
  /** Physical pin 3: VCCIO; power_in. */
  "VCCIO": "3",
  /** Physical pin 4: MIOSI1; input. */
  "MIOSI1": "4",
  /** Physical pin 5: MIOSI7; input. */
  "MIOSI7": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: MIOSI5; input. */
  "MIOSI5": "7",
  /** Physical pin 8: MIOSI6; input. */
  "MIOSI6": "8",
  /** Physical pin 9: MIOSI3; input. */
  "MIOSI3": "9",
  /** Physical pin 10: MISO; input. */
  "MISO": "10",
  /** Physical pin 11: USBDP; bidirectional. */
  "USBDP": "11",
  /** Physical pin 12: USBDM; bidirectional. */
  "USBDM": "12",
  /** Physical pin 13: 3V3OUT; power_out. */
  "3V3OUT": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: ~{CS}; input. */
  "~{CS}": "17",
  /** Physical pin 18: CLK; input. */
  "CLK": "18",
  /** Physical pin 19: CBUS3; bidirectional. */
  "CBUS3": "19",
  /** Physical pin 20: MIOSI0; input. */
  "MIOSI0": "20",
}) {
  override schema = "Interface_USB:FT221XS";
  override referencePrefix = "U";
}

/**
 * Full Speed Double Channel USB UART/FIFO, LQFP-48
 *
 * KiCad symbol: `Interface_USB:FT2232D`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT2232D.pdf
 * Keywords: USB Double UART FIFO.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT2232D extends Component.withPins({
  /** Physical pin 1: EECLK; output. */
  "EECLK": "1",
  /** Physical pin 2: EEDATA; bidirectional. */
  "EEDATA": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC_3": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{RSTOUT}; output. */
  "~{RSTOUT}": "5",
  /** Physical pin 6: 3V3OUT; power_out. */
  "3V3OUT": "6",
  /** Physical pin 7: USBDP; bidirectional. */
  "USBDP": "7",
  /** Physical pin 8: USBDM; bidirectional. */
  "USBDM": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: SI/WUA; bidirectional. */
  "SI/WUA": "10",
  /** Physical pin 11: ACBUS3; bidirectional. */
  "ACBUS3": "11",
  /** Physical pin 12: ACBUS2; bidirectional. */
  "ACBUS2": "12",
  /** Physical pin 13: ACBUS1; bidirectional. */
  "ACBUS1": "13",
  /** Physical pin 14: VCCIOA; power_in. */
  "VCCIOA": "14",
  /** Physical pin 15: ACBUS0; bidirectional. */
  "ACBUS0": "15",
  /** Physical pin 16: ADBUS7; bidirectional. */
  "ADBUS7": "16",
  /** Physical pin 17: ADBUS6; bidirectional. */
  "ADBUS6": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: ADBUS5; bidirectional. */
  "ADBUS5": "19",
  /** Physical pin 20: ADBUS4; bidirectional. */
  "ADBUS4": "20",
  /** Physical pin 21: ADBUS3; bidirectional. */
  "ADBUS3": "21",
  /** Physical pin 22: ADBUS2; bidirectional. */
  "ADBUS2": "22",
  /** Physical pin 23: ADBUS1; bidirectional. */
  "ADBUS1": "23",
  /** Physical pin 24: ADBUS0; bidirectional. */
  "ADBUS0": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: SI/WUB; output. */
  "SI/WUB": "26",
  /** Physical pin 27: BCBUS3; output. */
  "BCBUS3": "27",
  /** Physical pin 28: BCBUS2; output. */
  "BCBUS2": "28",
  /** Physical pin 29: BCBUS1; output. */
  "BCBUS1": "29",
  /** Physical pin 30: BCBUS0; output. */
  "BCBUS0": "30",
  /** Physical pin 31: VCCIOB; power_in. */
  "VCCIOB": "31",
  /** Physical pin 32: BDBUS7; output. */
  "BDBUS7": "32",
  /** Physical pin 33: BDBUS6; output. */
  "BDBUS6": "33",
  /** Physical pin 34: GND; power_in. */
  "GND_34": "34",
  /** Physical pin 35: BDBUS5; output. */
  "BDBUS5": "35",
  /** Physical pin 36: BDBUS4; output. */
  "BDBUS4": "36",
  /** Physical pin 37: BDBUS3; output. */
  "BDBUS3": "37",
  /** Physical pin 38: BDBUS2; output. */
  "BDBUS2": "38",
  /** Physical pin 39: BDBUS1; output. */
  "BDBUS1": "39",
  /** Physical pin 40: BDBUS0; output. */
  "BDBUS0": "40",
  /** Physical pin 41: ~{PWREN}; output. */
  "~{PWREN}": "41",
  /** Physical pin 42: VCC; power_in. */
  "VCC_42": "42",
  /** Physical pin 43: XTIN; input. */
  "XTIN": "43",
  /** Physical pin 44: XTOUT; output. */
  "XTOUT": "44",
  /** Physical pin 45: AGND; power_in. */
  "AGND": "45",
  /** Physical pin 46: AVCC; power_in. */
  "AVCC": "46",
  /** Physical pin 47: TEST; input. */
  "TEST": "47",
  /** Physical pin 48: EECS; bidirectional. */
  "EECS": "48",
}) {
  override schema = "Interface_USB:FT2232D";
  override referencePrefix = "U";
}

/**
 * Hi Speed Double Channel USB UART/FIFO, LQFP-64
 *
 * KiCad symbol: `Interface_USB:FT2232HL`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT2232H.pdf
 * Keywords: USB Double UART FIFO.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT2232HL extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: OSCI; input. */
  "OSCI": "2",
  /** Physical pin 3: OSCO; output. */
  "OSCO": "3",
  /** Physical pin 4: VPHY; power_in. */
  "VPHY": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: REF; output. */
  "REF": "6",
  /** Physical pin 7: DM; bidirectional. */
  "DM": "7",
  /** Physical pin 8: DP; bidirectional. */
  "DP": "8",
  /** Physical pin 9: VPLL; input. */
  "VPLL": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: VCORE; power_in. */
  "VCORE_12": "12",
  /** Physical pin 13: TEST; input. */
  "TEST": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: ADBUS0; bidirectional. */
  "ADBUS0": "16",
  /** Physical pin 17: ADBUS1; bidirectional. */
  "ADBUS1": "17",
  /** Physical pin 18: ADBUS2; bidirectional. */
  "ADBUS2": "18",
  /** Physical pin 19: ADBUS3; bidirectional. */
  "ADBUS3": "19",
  /** Physical pin 20: VCCIO; power_in. */
  "VCCIO_20": "20",
  /** Physical pin 21: ADBUS4; bidirectional. */
  "ADBUS4": "21",
  /** Physical pin 22: ADBUS5; bidirectional. */
  "ADBUS5": "22",
  /** Physical pin 23: ADBUS6; bidirectional. */
  "ADBUS6": "23",
  /** Physical pin 24: ADBUS7; bidirectional. */
  "ADBUS7": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: ACBUS0; bidirectional. */
  "ACBUS0": "26",
  /** Physical pin 27: ACBUS1; bidirectional. */
  "ACBUS1": "27",
  /** Physical pin 28: ACBUS2; bidirectional. */
  "ACBUS2": "28",
  /** Physical pin 29: ACBUS3; bidirectional. */
  "ACBUS3": "29",
  /** Physical pin 30: ACBUS4; bidirectional. */
  "ACBUS4": "30",
  /** Physical pin 31: VCCIO; power_in. */
  "VCCIO_31": "31",
  /** Physical pin 32: ACBUS5; bidirectional. */
  "ACBUS5": "32",
  /** Physical pin 33: ACBUS6; bidirectional. */
  "ACBUS6": "33",
  /** Physical pin 34: ACBUS7; bidirectional. */
  "ACBUS7": "34",
  /** Physical pin 35: GND; power_in. */
  "GND_35": "35",
  /** Physical pin 36: ~{SUSPEND}; output. */
  "~{SUSPEND}": "36",
  /** Physical pin 37: VCORE; power_in. */
  "VCORE_37": "37",
  /** Physical pin 38: BDBUS0; bidirectional. */
  "BDBUS0": "38",
  /** Physical pin 39: BDBUS1; bidirectional. */
  "BDBUS1": "39",
  /** Physical pin 40: BDBUS2; bidirectional. */
  "BDBUS2": "40",
  /** Physical pin 41: BDBUS3; bidirectional. */
  "BDBUS3": "41",
  /** Physical pin 42: VCCIO; power_in. */
  "VCCIO_42": "42",
  /** Physical pin 43: BDBUS4; bidirectional. */
  "BDBUS4": "43",
  /** Physical pin 44: BDBUS5; bidirectional. */
  "BDBUS5": "44",
  /** Physical pin 45: BDBUS6; bidirectional. */
  "BDBUS6": "45",
  /** Physical pin 46: BDBUS7; bidirectional. */
  "BDBUS7": "46",
  /** Physical pin 47: GND; power_in. */
  "GND_47": "47",
  /** Physical pin 48: BCBUS0; bidirectional. */
  "BCBUS0": "48",
  /** Physical pin 49: VREGOUT; power_out. */
  "VREGOUT": "49",
  /** Physical pin 50: VREGIN; power_in. */
  "VREGIN": "50",
  /** Physical pin 51: GND; power_in. */
  "GND_51": "51",
  /** Physical pin 52: BCBUS1; bidirectional. */
  "BCBUS1": "52",
  /** Physical pin 53: BCBUS2; bidirectional. */
  "BCBUS2": "53",
  /** Physical pin 54: BCBUS3; bidirectional. */
  "BCBUS3": "54",
  /** Physical pin 55: BCBUS4; bidirectional. */
  "BCBUS4": "55",
  /** Physical pin 56: VCCIO; power_in. */
  "VCCIO_56": "56",
  /** Physical pin 57: BCBUS5; bidirectional. */
  "BCBUS5": "57",
  /** Physical pin 58: BCBUS6; bidirectional. */
  "BCBUS6": "58",
  /** Physical pin 59: BCBUS7; bidirectional. */
  "BCBUS7": "59",
  /** Physical pin 60: ~{PWREN}; output. */
  "~{PWREN}": "60",
  /** Physical pin 61: EEDATA; bidirectional. */
  "EEDATA": "61",
  /** Physical pin 62: EECLK; output. */
  "EECLK": "62",
  /** Physical pin 63: EECS; output. */
  "EECS": "63",
  /** Physical pin 64: VCORE; power_in. */
  "VCORE_64": "64",
}) {
  override schema = "Interface_USB:FT2232HL";
  override referencePrefix = "U";
}

/**
 * High-Speed USB 2.0 Bridge, Type-C / PD3.0 controller, dual interface UART/FIFO/JTAG/SPI/I2C/bit-bang, VQFN-68
 *
 * KiCad symbol: `Interface_USB:FT2232HPQ`. Reference prefix: `U`.
 * Footprint filters: VQFN*8x8mm?P0.4mm?EP4.3x4.3mm*.
 * @see https://ftdichip.com/wp-content/uploads/2025/09/DS_FT2233HP.pdf
 * Keywords: FTDI USB-Power-Delivery USB-PD.
 * Default footprint: Package_DFN_QFN:VQFN-68-1EP_8x8mm_P0.4mm_EP4.3x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT2232HPQ extends Component.withPins({
  /** Physical pin 1: EECLK; output. */
  "EECLK": "1",
  /** Physical pin 2: EEDATA; bidirectional. */
  "EEDATA": "2",
  /** Physical pin 3: TEST; input. */
  "TEST": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 6: ADBUS0; bidirectional. */
  "ADBUS0": "6",
  /** Physical pin 7: ADBUS1; bidirectional. */
  "ADBUS1": "7",
  /** Physical pin 8: VCORE; power_in. */
  "VCORE_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: VCCIO; power_in. */
  "VCCIO_10": "10",
  /** Physical pin 11: ADBUS2; bidirectional. */
  "ADBUS2": "11",
  /** Physical pin 12: ADBUS3; bidirectional. */
  "ADBUS3": "12",
  /** Physical pin 13: ADBUS4; bidirectional. */
  "ADBUS4": "13",
  /** Physical pin 14: ADBUS5; bidirectional. */
  "ADBUS5": "14",
  /** Physical pin 15: ADBUS6; bidirectional. */
  "ADBUS6": "15",
  /** Physical pin 16: ADBUS7; bidirectional. */
  "ADBUS7": "16",
  /** Physical pin 17: ACBUS0; bidirectional. */
  "ACBUS0": "17",
  /** Physical pin 18: ACBUS1; bidirectional. */
  "ACBUS1": "18",
  /** Physical pin 19: ACBUS2; bidirectional. */
  "ACBUS2": "19",
  /** Physical pin 20: ACBUS3; bidirectional. */
  "ACBUS3": "20",
  /** Physical pin 21: ACBUS4; bidirectional. */
  "ACBUS4": "21",
  /** Physical pin 22: ACBUS5; bidirectional. */
  "ACBUS5": "22",
  /** Physical pin 23: ACBUS6; bidirectional. */
  "ACBUS6": "23",
  /** Physical pin 24: ACBUS7; bidirectional. */
  "ACBUS7": "24",
  /** Physical pin 25: VCORE; passive. */
  "VCORE_25": "25",
  /** Physical pin 26: VCCIO; passive. */
  "VCCIO_26": "26",
  /** Physical pin 27: OSCI; input. */
  "OSCI": "27",
  /** Physical pin 28: OSCO; output. */
  "OSCO": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: VREGIN; power_in. */
  "VREGIN": "30",
  /** Physical pin 31: VREGOUT; power_out. */
  "VREGOUT": "31",
  /** Physical pin 32: FSOURCE; power_in. */
  "FSOURCE": "32",
  /** Physical pin 33: VPP; input. */
  "VPP": "33",
  /** Physical pin 34: BDBUS0; bidirectional. */
  "BDBUS0": "34",
  /** Physical pin 35: BDBUS1; bidirectional. */
  "BDBUS1": "35",
  /** Physical pin 36: BDBUS2; bidirectional. */
  "BDBUS2": "36",
  /** Physical pin 37: BDBUS3; bidirectional. */
  "BDBUS3": "37",
  /** Physical pin 38: BDBUS4; bidirectional. */
  "BDBUS4": "38",
  /** Physical pin 39: VCCIO; passive. */
  "VCCIO_39": "39",
  /** Physical pin 40: BDBUS5; bidirectional. */
  "BDBUS5": "40",
  /** Physical pin 41: BDBUS6; bidirectional. */
  "BDBUS6": "41",
  /** Physical pin 42: BDBUS7; bidirectional. */
  "BDBUS7": "42",
  /** Physical pin 43: ~{SUSPEND}; output. */
  "~{SUSPEND}": "43",
  /** Physical pin 44: VCORE; passive. */
  "VCORE_44": "44",
  /** Physical pin 45: BCBUS0; bidirectional. */
  "BCBUS0": "45",
  /** Physical pin 46: BCBUS1; bidirectional. */
  "BCBUS1": "46",
  /** Physical pin 47: BCBUS2; bidirectional. */
  "BCBUS2": "47",
  /** Physical pin 48: BCBUS3; bidirectional. */
  "BCBUS3": "48",
  /** Physical pin 49: BCBUS4; bidirectional. */
  "BCBUS4": "49",
  /** Physical pin 50: BCBUS5; bidirectional. */
  "BCBUS5": "50",
  /** Physical pin 51: VCCIO; passive. */
  "VCCIO_51": "51",
  /** Physical pin 52: BCBUS6; bidirectional. */
  "BCBUS6": "52",
  /** Physical pin 53: BCBUS7; bidirectional. */
  "BCBUS7": "53",
  /** Physical pin 54: GPIO2; bidirectional. */
  "GPIO2": "54",
  /** Physical pin 55: GPIO1; bidirectional. */
  "GPIO1": "55",
  /** Physical pin 56: GPIO0; bidirectional. */
  "GPIO0": "56",
  /** Physical pin 57: VCC_USB; power_in. */
  "VCC_USB": "57",
  /** Physical pin 58: DM; bidirectional. */
  "DM": "58",
  /** Physical pin 59: DP; bidirectional. */
  "DP": "59",
  /** Physical pin 60: REF; output. */
  "REF": "60",
  /** Physical pin 61: VCC_PD; power_in. */
  "VCC_PD": "61",
  /** Physical pin 62: PD1_CC2; bidirectional. */
  "PD1_CC2": "62",
  /** Physical pin 63: PD1_SVBUS; input. */
  "PD1_SVBUS": "63",
  /** Physical pin 64: PD1_VCONN; power_in. */
  "PD1_VCONN": "64",
  /** Physical pin 65: PD1_CC1; bidirectional. */
  "PD1_CC1": "65",
  /** Physical pin 66: VCORE; passive. */
  "VCORE_66": "66",
  /** Physical pin 67: ~{PWREN}; output. */
  "~{PWREN}": "67",
  /** Physical pin 68: EECS; bidirectional. */
  "EECS": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
}) {
  override schema = "Interface_USB:FT2232HPQ";
  override referencePrefix = "U";
}

/**
 * Hi Speed Double Channel USB UART/FIFO, QFN-64
 *
 * KiCad symbol: `Interface_USB:FT2232HQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT2232H.pdf
 * Keywords: USB Double UART FIFO.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.35x4.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT2232HQ extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: OSCI; input. */
  "OSCI": "2",
  /** Physical pin 3: OSCO; output. */
  "OSCO": "3",
  /** Physical pin 4: VPHY; power_in. */
  "VPHY": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: REF; output. */
  "REF": "6",
  /** Physical pin 7: DM; bidirectional. */
  "DM": "7",
  /** Physical pin 8: DP; bidirectional. */
  "DP": "8",
  /** Physical pin 9: VPLL; input. */
  "VPLL": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: VCORE; power_in. */
  "VCORE_12": "12",
  /** Physical pin 13: TEST; input. */
  "TEST": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: ADBUS0; bidirectional. */
  "ADBUS0": "16",
  /** Physical pin 17: ADBUS1; bidirectional. */
  "ADBUS1": "17",
  /** Physical pin 18: ADBUS2; bidirectional. */
  "ADBUS2": "18",
  /** Physical pin 19: ADBUS3; bidirectional. */
  "ADBUS3": "19",
  /** Physical pin 20: VCCIO; power_in. */
  "VCCIO_20": "20",
  /** Physical pin 21: ADBUS4; bidirectional. */
  "ADBUS4": "21",
  /** Physical pin 22: ADBUS5; bidirectional. */
  "ADBUS5": "22",
  /** Physical pin 23: ADBUS6; bidirectional. */
  "ADBUS6": "23",
  /** Physical pin 24: ADBUS7; bidirectional. */
  "ADBUS7": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: ACBUS0; bidirectional. */
  "ACBUS0": "26",
  /** Physical pin 27: ACBUS1; bidirectional. */
  "ACBUS1": "27",
  /** Physical pin 28: ACBUS2; bidirectional. */
  "ACBUS2": "28",
  /** Physical pin 29: ACBUS3; bidirectional. */
  "ACBUS3": "29",
  /** Physical pin 30: ACBUS4; bidirectional. */
  "ACBUS4": "30",
  /** Physical pin 31: VCCIO; power_in. */
  "VCCIO_31": "31",
  /** Physical pin 32: ACBUS5; bidirectional. */
  "ACBUS5": "32",
  /** Physical pin 33: ACBUS6; bidirectional. */
  "ACBUS6": "33",
  /** Physical pin 34: ACBUS7; bidirectional. */
  "ACBUS7": "34",
  /** Physical pin 35: GND; power_in. */
  "GND_35": "35",
  /** Physical pin 36: ~{SUSPEND}; output. */
  "~{SUSPEND}": "36",
  /** Physical pin 37: VCORE; power_in. */
  "VCORE_37": "37",
  /** Physical pin 38: BDBUS0; bidirectional. */
  "BDBUS0": "38",
  /** Physical pin 39: BDBUS1; bidirectional. */
  "BDBUS1": "39",
  /** Physical pin 40: BDBUS2; bidirectional. */
  "BDBUS2": "40",
  /** Physical pin 41: BDBUS3; bidirectional. */
  "BDBUS3": "41",
  /** Physical pin 42: VCCIO; power_in. */
  "VCCIO_42": "42",
  /** Physical pin 43: BDBUS4; bidirectional. */
  "BDBUS4": "43",
  /** Physical pin 44: BDBUS5; bidirectional. */
  "BDBUS5": "44",
  /** Physical pin 45: BDBUS6; bidirectional. */
  "BDBUS6": "45",
  /** Physical pin 46: BDBUS7; bidirectional. */
  "BDBUS7": "46",
  /** Physical pin 47: GND; power_in. */
  "GND_47": "47",
  /** Physical pin 48: BCBUS0; bidirectional. */
  "BCBUS0": "48",
  /** Physical pin 49: VREGOUT; power_out. */
  "VREGOUT": "49",
  /** Physical pin 50: VREGIN; power_in. */
  "VREGIN": "50",
  /** Physical pin 51: GND; power_in. */
  "GND_51": "51",
  /** Physical pin 52: BCBUS1; bidirectional. */
  "BCBUS1": "52",
  /** Physical pin 53: BCBUS2; bidirectional. */
  "BCBUS2": "53",
  /** Physical pin 54: BCBUS3; bidirectional. */
  "BCBUS3": "54",
  /** Physical pin 55: BCBUS4; bidirectional. */
  "BCBUS4": "55",
  /** Physical pin 56: VCCIO; power_in. */
  "VCCIO_56": "56",
  /** Physical pin 57: BCBUS5; bidirectional. */
  "BCBUS5": "57",
  /** Physical pin 58: BCBUS6; bidirectional. */
  "BCBUS6": "58",
  /** Physical pin 59: BCBUS7; bidirectional. */
  "BCBUS7": "59",
  /** Physical pin 60: ~{PWREN}; output. */
  "~{PWREN}": "60",
  /** Physical pin 61: EEDATA; bidirectional. */
  "EEDATA": "61",
  /** Physical pin 62: EECLK; output. */
  "EECLK": "62",
  /** Physical pin 63: EECS; output. */
  "EECS": "63",
  /** Physical pin 64: VCORE; power_in. */
  "VCORE_64": "64",
  /** Physical pin 65: GND; power_in. */
  "GND_65": "65",
}) {
  override schema = "Interface_USB:FT2232HQ";
  override referencePrefix = "U";
}

/**
 * Full-Speed USB to Basic UART, WQFN-16
 *
 * KiCad symbol: `Interface_USB:FT230XQ`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm?P0.65mm?EP2.1x2.1mm*.
 * @see https://ftdichip.com/wp-content/uploads/2025/06/DS_FT230X.pdf
 * Keywords: FTDI USB UART interface converter.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT230XQ extends Component.withPins({
  /** Physical pin 1: VCCIO; power_in. */
  "VCCIO": "1",
  /** Physical pin 2: RXD; input. */
  "RXD": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: ~{CTS}; input. */
  "~{CTS}": "4",
  /** Physical pin 5: CBUS2; bidirectional. */
  "CBUS2": "5",
  /** Physical pin 6: USBDP; bidirectional. */
  "USBDP": "6",
  /** Physical pin 7: USBDM; bidirectional. */
  "USBDM": "7",
  /** Physical pin 8: 3V3OUT; power_out. */
  "3V3OUT": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: CBUS1; bidirectional. */
  "CBUS1": "11",
  /** Physical pin 12: CBUS0; bidirectional. */
  "CBUS0": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: CBUS3; bidirectional. */
  "CBUS3": "14",
  /** Physical pin 15: TXD; output. */
  "TXD": "15",
  /** Physical pin 16: ~{RTS}; output. */
  "~{RTS}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Interface_USB:FT230XQ";
  override referencePrefix = "U";
}

/**
 * Full-Speed USB to Basic UART, SSOP-16
 *
 * KiCad symbol: `Interface_USB:FT230XS`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm?P0.635mm*.
 * @see https://ftdichip.com/wp-content/uploads/2025/06/DS_FT230X.pdf
 * Keywords: FTDI USB UART interface converter.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT230XS extends Component.withPins({
  /** Physical pin 1: TXD; output. */
  "TXD": "1",
  /** Physical pin 2: ~{RTS}; output. */
  "~{RTS}": "2",
  /** Physical pin 3: VCCIO; power_in. */
  "VCCIO": "3",
  /** Physical pin 4: RXD; input. */
  "RXD": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: ~{CTS}; input. */
  "~{CTS}": "6",
  /** Physical pin 7: CBUS2; bidirectional. */
  "CBUS2": "7",
  /** Physical pin 8: USBDP; bidirectional. */
  "USBDP": "8",
  /** Physical pin 9: USBDM; bidirectional. */
  "USBDM": "9",
  /** Physical pin 10: 3V3OUT; power_out. */
  "3V3OUT": "10",
  /** Physical pin 11: ~{RESET}; input. */
  "~{RESET}": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: CBUS1; bidirectional. */
  "CBUS1": "14",
  /** Physical pin 15: CBUS0; bidirectional. */
  "CBUS0": "15",
  /** Physical pin 16: CBUS3; bidirectional. */
  "CBUS3": "16",
}) {
  override schema = "Interface_USB:FT230XS";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to Full Handshake UART, QFN-20
 *
 * KiCad symbol: `Interface_USB:FT231XQ`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT231X.pdf
 * Keywords: FTDI USB UART interface converter.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT231XQ extends Component.withPins({
  /** Physical pin 1: RXD; input. */
  "RXD": "1",
  /** Physical pin 2: ~{RI}; input. */
  "~{RI}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: ~{DSR}; input. */
  "~{DSR}": "4",
  /** Physical pin 5: ~{DCD}; input. */
  "~{DCD}": "5",
  /** Physical pin 6: ~{CTS}; input. */
  "~{CTS}": "6",
  /** Physical pin 7: CBUS2; bidirectional. */
  "CBUS2": "7",
  /** Physical pin 8: USBDP; bidirectional. */
  "USBDP": "8",
  /** Physical pin 9: USBDM; bidirectional. */
  "USBDM": "9",
  /** Physical pin 10: 3V3OUT; power_out. */
  "3V3OUT": "10",
  /** Physical pin 11: ~{RESET}; input. */
  "~{RESET}": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: CBUS1; bidirectional. */
  "CBUS1": "14",
  /** Physical pin 15: CBUS0; bidirectional. */
  "CBUS0": "15",
  /** Physical pin 16: CBUS3; bidirectional. */
  "CBUS3": "16",
  /** Physical pin 17: TXD; output. */
  "TXD": "17",
  /** Physical pin 18: ~{DTR}; output. */
  "~{DTR}": "18",
  /** Physical pin 19: ~{RTS}; output. */
  "~{RTS}": "19",
  /** Physical pin 20: VCCIO; power_in. */
  "VCCIO": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
}) {
  override schema = "Interface_USB:FT231XQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to Full Handshake UART, SSOP-20
 *
 * KiCad symbol: `Interface_USB:FT231XS`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x8.7mm*P0.635mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT231X.pdf
 * Keywords: FTDI USB UART interface converter.
 * Default footprint: Package_SO:SSOP-20_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT231XS extends Component.withPins({
  /** Physical pin 1: ~{DTR}; output. */
  "~{DTR}": "1",
  /** Physical pin 2: ~{RTS}; output. */
  "~{RTS}": "2",
  /** Physical pin 3: VCCIO; power_in. */
  "VCCIO": "3",
  /** Physical pin 4: RXD; input. */
  "RXD": "4",
  /** Physical pin 5: ~{RI}; input. */
  "~{RI}": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: ~{DSR}; input. */
  "~{DSR}": "7",
  /** Physical pin 8: ~{DCD}; input. */
  "~{DCD}": "8",
  /** Physical pin 9: ~{CTS}; input. */
  "~{CTS}": "9",
  /** Physical pin 10: CBUS2; bidirectional. */
  "CBUS2": "10",
  /** Physical pin 11: USBDP; bidirectional. */
  "USBDP": "11",
  /** Physical pin 12: USBDM; bidirectional. */
  "USBDM": "12",
  /** Physical pin 13: 3V3OUT; power_out. */
  "3V3OUT": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: CBUS1; bidirectional. */
  "CBUS1": "17",
  /** Physical pin 18: CBUS0; bidirectional. */
  "CBUS0": "18",
  /** Physical pin 19: CBUS3; bidirectional. */
  "CBUS3": "19",
  /** Physical pin 20: TXD; output. */
  "TXD": "20",
}) {
  override schema = "Interface_USB:FT231XS";
  override referencePrefix = "U";
}

/**
 * Hi Speed Single Channel USB UART/FIFO, LQFP-32
 *
 * KiCad symbol: `Interface_USB:FT232BM`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT232BM.pdf
 * Keywords: FTDI USB Single UART FIFO.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT232BM extends Component.withPins({
  /** Physical pin 1: EESK; output. */
  "EESK": "1",
  /** Physical pin 2: EEDATA; bidirectional. */
  "EEDATA": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC_3": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{RSTOUT}; output. */
  "~{RSTOUT}": "5",
  /** Physical pin 6: 3V3OUT; power_out. */
  "3V3OUT": "6",
  /** Physical pin 7: USBDP; bidirectional. */
  "USBDP": "7",
  /** Physical pin 8: USBDM; bidirectional. */
  "USBDM": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: ~{SLEEP}; output. */
  "~{SLEEP}": "10",
  /** Physical pin 11: ~{RXLED}; open_collector. */
  "~{RXLED}": "11",
  /** Physical pin 12: ~{TXLED}; open_collector. */
  "~{TXLED}": "12",
  /** Physical pin 13: VCCIO; power_in. */
  "VCCIO": "13",
  /** Physical pin 14: PWRCTL; input. */
  "PWRCTL": "14",
  /** Physical pin 15: ~{PWREN}; output. */
  "~{PWREN}": "15",
  /** Physical pin 16: TXDEN; output. */
  "TXDEN": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: D7/~{RI}; bidirectional. */
  "D7/~{RI}": "18",
  /** Physical pin 19: D6/~{DCD}; bidirectional. */
  "D6/~{DCD}": "19",
  /** Physical pin 20: D5/~{DSR}; bidirectional. */
  "D5/~{DSR}": "20",
  /** Physical pin 21: D4/~{DTR}; bidirectional. */
  "D4/~{DTR}": "21",
  /** Physical pin 22: D3/~{CTS}; bidirectional. */
  "D3/~{CTS}": "22",
  /** Physical pin 23: D2/~{RST}; bidirectional. */
  "D2/~{RST}": "23",
  /** Physical pin 24: D1/RXD; bidirectional. */
  "D1/RXD": "24",
  /** Physical pin 25: D0/TXD; bidirectional. */
  "D0/TXD": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC_26": "26",
  /** Physical pin 27: XTIN; input. */
  "XTIN": "27",
  /** Physical pin 28: XTOUT; output. */
  "XTOUT": "28",
  /** Physical pin 29: AGND; power_in. */
  "AGND": "29",
  /** Physical pin 30: AVCC; power_in. */
  "AVCC": "30",
  /** Physical pin 31: TEST; input. */
  "TEST": "31",
  /** Physical pin 32: EECS; bidirectional. */
  "EECS": "32",
}) {
  override schema = "Interface_USB:FT232BM";
  override referencePrefix = "U";
}

/**
 * Hi Speed Single Channel USB UART/FIFO, LQFP/QFN-48
 *
 * KiCad symbol: `Interface_USB:FT232H`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*, LQFP*7x7mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT232H.pdf
 * Keywords: FTDI USB Single UART FIFO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT232H extends Component.withPins({
  /** Physical pin 1: XCSI; input. */
  "XCSI": "1",
  /** Physical pin 2: XCSO; output. */
  "XCSO": "2",
  /** Physical pin 3: VPHY; power_in. */
  "VPHY": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND_4": "4",
  /** Physical pin 5: REF; input. */
  "REF": "5",
  /** Physical pin 6: DM; bidirectional. */
  "DM": "6",
  /** Physical pin 7: DP; bidirectional. */
  "DP": "7",
  /** Physical pin 8: VPLL; power_in. */
  "VPLL": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND_9": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: VCCIO; power_in. */
  "VCCIO_12": "12",
  /** Physical pin 13: ADBUS0; bidirectional. */
  "ADBUS0": "13",
  /** Physical pin 14: ADBUS1; bidirectional. */
  "ADBUS1": "14",
  /** Physical pin 15: ADBUS2; bidirectional. */
  "ADBUS2": "15",
  /** Physical pin 16: ADBUS3; bidirectional. */
  "ADBUS3": "16",
  /** Physical pin 17: ADBUS4; bidirectional. */
  "ADBUS4": "17",
  /** Physical pin 18: ADBUS5; bidirectional. */
  "ADBUS5": "18",
  /** Physical pin 19: ADBUS6; bidirectional. */
  "ADBUS6": "19",
  /** Physical pin 20: ADBUS7; bidirectional. */
  "ADBUS7": "20",
  /** Physical pin 21: ACBUS0; bidirectional. */
  "ACBUS0": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: GND; power_in. */
  "GND_23": "23",
  /** Physical pin 24: VCCIO; power_in. */
  "VCCIO_24": "24",
  /** Physical pin 25: ACBUS1; bidirectional. */
  "ACBUS1": "25",
  /** Physical pin 26: ACBUS2; bidirectional. */
  "ACBUS2": "26",
  /** Physical pin 27: ACBUS3; bidirectional. */
  "ACBUS3": "27",
  /** Physical pin 28: ACBUS4; bidirectional. */
  "ACBUS4": "28",
  /** Physical pin 29: ACBUS5; bidirectional. */
  "ACBUS5": "29",
  /** Physical pin 30: ACBUS6; bidirectional. */
  "ACBUS6": "30",
  /** Physical pin 31: ACBUS7; bidirectional. */
  "ACBUS7": "31",
  /** Physical pin 32: ACBUS8; bidirectional. */
  "ACBUS8": "32",
  /** Physical pin 33: ACBUS9; bidirectional. */
  "ACBUS9": "33",
  /** Physical pin 34: ~{RESET}; input. */
  "~{RESET}": "34",
  /** Physical pin 35: GND; power_in. */
  "GND_35": "35",
  /** Physical pin 36: GND; power_in. */
  "GND_36": "36",
  /** Physical pin 37: VCCA; power_out. */
  "VCCA": "37",
  /** Physical pin 38: VCCCORE; power_out. */
  "VCCCORE": "38",
  /** Physical pin 39: VCCD; power_in. */
  "VCCD": "39",
  /** Physical pin 40: VREGIN; power_in. */
  "VREGIN": "40",
  /** Physical pin 41: AGND; power_in. */
  "AGND_41": "41",
  /** Physical pin 42: TEST; input. */
  "TEST": "42",
  /** Physical pin 43: EEDATA; bidirectional. */
  "EEDATA": "43",
  /** Physical pin 44: EECLK; input. */
  "EECLK": "44",
  /** Physical pin 45: EECS; input. */
  "EECS": "45",
  /** Physical pin 46: VCCIO; power_in. */
  "VCCIO_46": "46",
  /** Physical pin 47: GND; power_in. */
  "GND_47": "47",
  /** Physical pin 48: GND; power_in. */
  "GND_48": "48",
}) {
  override schema = "Interface_USB:FT232H";
  override referencePrefix = "U";
}

/**
 * USB to Serial Interface, SSOP-28
 *
 * KiCad symbol: `Interface_USB:FT232RL`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT232R.pdf
 * Keywords: FTDI USB Serial.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT232RL extends Component.withPins({
  /** Physical pin 1: TXD; output. */
  "TXD": "1",
  /** Physical pin 2: DTR; output. */
  "DTR": "2",
  /** Physical pin 3: RTS; output. */
  "RTS": "3",
  /** Physical pin 4: VCCIO; power_in. */
  "VCCIO": "4",
  /** Physical pin 5: RXD; input. */
  "RXD": "5",
  /** Physical pin 6: RI; input. */
  "RI": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 9: DCR; input. */
  "DCR": "9",
  /** Physical pin 10: DCD; input. */
  "DCD": "10",
  /** Physical pin 11: CTS; input. */
  "CTS": "11",
  /** Physical pin 12: CBUS4; bidirectional. */
  "CBUS4": "12",
  /** Physical pin 13: CBUS2; bidirectional. */
  "CBUS2": "13",
  /** Physical pin 14: CBUS3; bidirectional. */
  "CBUS3": "14",
  /** Physical pin 15: USBD+; bidirectional. */
  "USBD+": "15",
  /** Physical pin 16: USBD-; bidirectional. */
  "USBD-": "16",
  /** Physical pin 17: 3V3OUT; power_out. */
  "3V3OUT": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: ~{RESET}; input. */
  "~{RESET}": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: CBUS1; bidirectional. */
  "CBUS1": "22",
  /** Physical pin 23: CBUS0; bidirectional. */
  "CBUS0": "23",
  /** Physical pin 25: AGND; power_in. */
  "AGND": "25",
  /** Physical pin 26: TEST; input. */
  "TEST": "26",
  /** Physical pin 27: OSCI; input. */
  "OSCI": "27",
  /** Physical pin 28: OSCO; output. */
  "OSCO": "28",
}) {
  override schema = "Interface_USB:FT232RL";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to Basic UART, WDFN-12
 *
 * KiCad symbol: `Interface_USB:FT234XD`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*3x3mm*P0.45mm*.
 * @see https://ftdichip.com/wp-content/uploads/2024/05/DS_FT234XD.pdf
 * Keywords: FTDI Serial.
 * Default footprint: Package_DFN_QFN:WDFN-12-1EP_3x3mm_P0.45mm_EP1.7x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT234XD extends Component.withPins({
  /** Physical pin 1: USBDM; bidirectional. */
  "USBDM": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: 3V3OUT; power_out. */
  "3V3OUT": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: CBUS0; bidirectional. */
  "CBUS0": "6",
  /** Physical pin 7: TXD/D0; bidirectional. */
  "TXD/D0": "7",
  /** Physical pin 8: ~{RTS}/D2; bidirectional. */
  "~{RTS}/D2": "8",
  /** Physical pin 9: VCCIO; power_in. */
  "VCCIO": "9",
  /** Physical pin 10: RXD/D1; bidirectional. */
  "RXD/D1": "10",
  /** Physical pin 11: ~{CTS}/D3; bidirectional. */
  "~{CTS}/D3": "11",
  /** Physical pin 12: USBDP; bidirectional. */
  "USBDP": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
  override schema = "Interface_USB:FT234XD";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to 8-Bit FIFO, QFN-24
 *
 * KiCad symbol: `Interface_USB:FT240XQ`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT240X.pdf
 * Keywords: FTDI USB FIFO interface converter.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT240XQ extends Component.withPins({
  /** Physical pin 1: DATA1; bidirectional. */
  "DATA1": "1",
  /** Physical pin 2: DATA7; bidirectional. */
  "DATA7": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: DATA5; bidirectional. */
  "DATA5": "4",
  /** Physical pin 5: DATA6; bidirectional. */
  "DATA6": "5",
  /** Physical pin 6: DATA3; bidirectional. */
  "DATA3": "6",
  /** Physical pin 7: ~{SI/WU}; input. */
  "~{SI/WU}": "7",
  /** Physical pin 8: ~{RD}; input. */
  "~{RD}": "8",
  /** Physical pin 9: ~{WR}; input. */
  "~{WR}": "9",
  /** Physical pin 10: USBDP; bidirectional. */
  "USBDP": "10",
  /** Physical pin 11: USBDM; bidirectional. */
  "USBDM": "11",
  /** Physical pin 12: 3V3OUT; power_out. */
  "3V3OUT": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: VCORE; power_out. */
  "VCORE": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: ~{TXE}; output. */
  "~{TXE}": "17",
  /** Physical pin 18: ~{RXF}; output. */
  "~{RXF}": "18",
  /** Physical pin 19: CBUS6; bidirectional. */
  "CBUS6": "19",
  /** Physical pin 20: CBUS5; bidirectional. */
  "CBUS5": "20",
  /** Physical pin 21: DATA0; bidirectional. */
  "DATA0": "21",
  /** Physical pin 22: DATA4; bidirectional. */
  "DATA4": "22",
  /** Physical pin 23: DATA2; bidirectional. */
  "DATA2": "23",
  /** Physical pin 24: VCCIO; power_in. */
  "VCCIO": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:FT240XQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to 8-Bit FIFO, SSOP-24
 *
 * KiCad symbol: `Interface_USB:FT240XS`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT240X.pdf
 * Keywords: FTDI USB FIFO interface converter.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT240XS extends Component.withPins({
  /** Physical pin 1: DATA4; bidirectional. */
  "DATA4": "1",
  /** Physical pin 2: DATA2; bidirectional. */
  "DATA2": "2",
  /** Physical pin 3: VCCIO; power_in. */
  "VCCIO": "3",
  /** Physical pin 4: DATA1; bidirectional. */
  "DATA1": "4",
  /** Physical pin 5: DATA7; bidirectional. */
  "DATA7": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: DATA5; bidirectional. */
  "DATA5": "7",
  /** Physical pin 8: DATA6; bidirectional. */
  "DATA6": "8",
  /** Physical pin 9: DATA3; bidirectional. */
  "DATA3": "9",
  /** Physical pin 10: ~{SI/WU}; input. */
  "~{SI/WU}": "10",
  /** Physical pin 11: ~{RD}; input. */
  "~{RD}": "11",
  /** Physical pin 12: ~{WR}; input. */
  "~{WR}": "12",
  /** Physical pin 13: USBDP; bidirectional. */
  "USBDP": "13",
  /** Physical pin 14: USBDM; bidirectional. */
  "USBDM": "14",
  /** Physical pin 15: 3V3OUT; power_out. */
  "3V3OUT": "15",
  /** Physical pin 16: ~{RESET}; input. */
  "~{RESET}": "16",
  /** Physical pin 17: VCORE; power_out. */
  "VCORE": "17",
  /** Physical pin 18: VCC; power_in. */
  "VCC": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: ~{TXE}; output. */
  "~{TXE}": "20",
  /** Physical pin 21: ~{RXF}; output. */
  "~{RXF}": "21",
  /** Physical pin 22: CBUS6; bidirectional. */
  "CBUS6": "22",
  /** Physical pin 23: CBUS5; bidirectional. */
  "CBUS5": "23",
  /** Physical pin 24: DATA0; bidirectional. */
  "DATA0": "24",
}) {
  override schema = "Interface_USB:FT240XS";
  override referencePrefix = "U";
}

/**
 * Full Speed USB to 8-Bit FIFO, LQFP-32
 *
 * KiCad symbol: `Interface_USB:FT245BM`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT245BM.pdf
 * Keywords: FTDI USB FIFO Interface Converter.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT245BM extends Component.withPins({
  /** Physical pin 1: EESK; output. */
  "EESK": "1",
  /** Physical pin 2: EEDATA; bidirectional. */
  "EEDATA": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC_3": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{RSTOUT}; output. */
  "~{RSTOUT}": "5",
  /** Physical pin 6: 3V3OUT; power_out. */
  "3V3OUT": "6",
  /** Physical pin 7: USBDP; bidirectional. */
  "USBDP": "7",
  /** Physical pin 8: USBDM; bidirectional. */
  "USBDM": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: ~{PWREN}; output. */
  "~{PWREN}": "10",
  /** Physical pin 11: SI/WU; input. */
  "SI/WU": "11",
  /** Physical pin 12: ~{RXF}; output. */
  "~{RXF}": "12",
  /** Physical pin 13: VCCIO; power_in. */
  "VCCIO": "13",
  /** Physical pin 14: ~{TXE}; output. */
  "~{TXE}": "14",
  /** Physical pin 15: WR; input. */
  "WR": "15",
  /** Physical pin 16: ~{RD}; input. */
  "~{RD}": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: D7; bidirectional. */
  "D7": "18",
  /** Physical pin 19: D6; bidirectional. */
  "D6": "19",
  /** Physical pin 20: D5; bidirectional. */
  "D5": "20",
  /** Physical pin 21: D4; bidirectional. */
  "D4": "21",
  /** Physical pin 22: D3; bidirectional. */
  "D3": "22",
  /** Physical pin 23: D2; bidirectional. */
  "D2": "23",
  /** Physical pin 24: D1; bidirectional. */
  "D1": "24",
  /** Physical pin 25: D0; bidirectional. */
  "D0": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC_26": "26",
  /** Physical pin 27: XTIN; input. */
  "XTIN": "27",
  /** Physical pin 28: XTOUT; output. */
  "XTOUT": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: AVCC; power_in. */
  "AVCC": "30",
  /** Physical pin 31: TEST; input. */
  "TEST": "31",
  /** Physical pin 32: EECS; bidirectional. */
  "EECS": "32",
}) {
  override schema = "Interface_USB:FT245BM";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to Quad SPI or I2C Bridge, VQFN-32
 *
 * KiCad symbol: `Interface_USB:FT4222HQ`. Reference prefix: `U`.
 * Footprint filters: VQFN*5x5mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT4222H.pdf
 * Keywords: USB SPI I2C FTDI Bridge Converter Interface.
 * Default footprint: Package_DFN_QFN:VQFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT4222HQ extends Component.withPins({
  /** Physical pin 1: DEBUGGER; bidirectional. */
  "DEBUGGER": "1",
  /** Physical pin 2: ~{STEST_RST}; input. */
  "~{STEST_RST}": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: DCNF0; input. */
  "DCNF0": "4",
  /** Physical pin 5: DCNF1; input. */
  "DCNF1": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND_6": "6",
  /** Physical pin 7: VCCIO; power_in. */
  "VCCIO": "7",
  /** Physical pin 8: SCK; bidirectional. */
  "SCK": "8",
  /** Physical pin 9: MISO; bidirectional. */
  "MISO": "9",
  /** Physical pin 10: MOSI; bidirectional. */
  "MOSI": "10",
  /** Physical pin 11: IO2; bidirectional. */
  "IO2": "11",
  /** Physical pin 12: IO3; bidirectional. */
  "IO3": "12",
  /** Physical pin 13: GPIO0; bidirectional. */
  "GPIO0": "13",
  /** Physical pin 14: GPIO1; bidirectional. */
  "GPIO1": "14",
  /** Physical pin 15: GPIO2; bidirectional. */
  "GPIO2": "15",
  /** Physical pin 16: GPIO3; bidirectional. */
  "GPIO3": "16",
  /** Physical pin 17: ~{SS0O}; output. */
  "~{SS0O}": "17",
  /** Physical pin 18: XSCI; input. */
  "XSCI": "18",
  /** Physical pin 19: XSCO; output. */
  "XSCO": "19",
  /** Physical pin 20: UGND; power_in. */
  "UGND_20": "20",
  /** Physical pin 21: RREF; input. */
  "RREF": "21",
  /** Physical pin 22: DM; bidirectional. */
  "DM": "22",
  /** Physical pin 23: DP; bidirectional. */
  "DP": "23",
  /** Physical pin 24: UGND; passive. */
  "UGND_24": "24",
  /** Physical pin 25: VOUT3V3; unspecified. */
  "VOUT3V3": "25",
  /** Physical pin 26: VCCIN; power_in. */
  "VCCIN": "26",
  /** Physical pin 27: AGND; power_in. */
  "AGND": "27",
  /** Physical pin 28: DGND; passive. */
  "DGND_28": "28",
  /** Physical pin 29: VPP; power_in. */
  "VPP": "29",
  /** Physical pin 30: VBUS_DET; input. */
  "VBUS_DET": "30",
  /** Physical pin 31: BCD_DET; output. */
  "BCD_DET": "31",
  /** Physical pin 32: ~{SS}; input. */
  "~{SS}": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
  override schema = "Interface_USB:FT4222HQ";
  override referencePrefix = "U";
}

/**
 * Hi Speed Quad Channel USB UART/FIFO, LQFP/QFN-64
 *
 * KiCad symbol: `Interface_USB:FT4232H`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*, LQFP*10x10mm*P0.5mm*.
 * @see https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT4232H.pdf
 * Keywords: FTDI USB Quad UART FIFO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT4232H extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: OSCI; input. */
  "OSCI": "2",
  /** Physical pin 3: OSCO; output. */
  "OSCO": "3",
  /** Physical pin 4: VPHY; power_in. */
  "VPHY": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: REF; input. */
  "REF": "6",
  /** Physical pin 7: DM; bidirectional. */
  "DM": "7",
  /** Physical pin 8: DP; bidirectional. */
  "DP": "8",
  /** Physical pin 9: VPLL; power_in. */
  "VPLL": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: VCORE; power_in. */
  "VCORE_12": "12",
  /** Physical pin 13: TEST; input. */
  "TEST": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: ADBUS0; bidirectional. */
  "ADBUS0": "16",
  /** Physical pin 17: ADBUS1; bidirectional. */
  "ADBUS1": "17",
  /** Physical pin 18: ADBUS2; bidirectional. */
  "ADBUS2": "18",
  /** Physical pin 19: ADBUS3; bidirectional. */
  "ADBUS3": "19",
  /** Physical pin 20: VCCIO; power_in. */
  "VCCIO_20": "20",
  /** Physical pin 21: ADBUS4; bidirectional. */
  "ADBUS4": "21",
  /** Physical pin 22: ADBUS5; bidirectional. */
  "ADBUS5": "22",
  /** Physical pin 23: ADBUS6; bidirectional. */
  "ADBUS6": "23",
  /** Physical pin 24: ADBUS7; bidirectional. */
  "ADBUS7": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: BDBUS0; bidirectional. */
  "BDBUS0": "26",
  /** Physical pin 27: BDBUS1; bidirectional. */
  "BDBUS1": "27",
  /** Physical pin 28: BDBUS2; bidirectional. */
  "BDBUS2": "28",
  /** Physical pin 29: BDBUS3; bidirectional. */
  "BDBUS3": "29",
  /** Physical pin 30: BDBUS4; bidirectional. */
  "BDBUS4": "30",
  /** Physical pin 31: VCCIO; power_in. */
  "VCCIO_31": "31",
  /** Physical pin 32: BDBUS5; bidirectional. */
  "BDBUS5": "32",
  /** Physical pin 33: BDBUS6; bidirectional. */
  "BDBUS6": "33",
  /** Physical pin 34: BDBUS7; bidirectional. */
  "BDBUS7": "34",
  /** Physical pin 35: GND; power_in. */
  "GND_35": "35",
  /** Physical pin 36: ~{SUSPEND}; output. */
  "~{SUSPEND}": "36",
  /** Physical pin 37: VCORE; power_in. */
  "VCORE_37": "37",
  /** Physical pin 38: CDBUS0; bidirectional. */
  "CDBUS0": "38",
  /** Physical pin 39: CDBUS1; bidirectional. */
  "CDBUS1": "39",
  /** Physical pin 40: CDBUS2; bidirectional. */
  "CDBUS2": "40",
  /** Physical pin 41: CDBUS3; bidirectional. */
  "CDBUS3": "41",
  /** Physical pin 42: VCCIO; power_in. */
  "VCCIO_42": "42",
  /** Physical pin 43: CDBUS4; bidirectional. */
  "CDBUS4": "43",
  /** Physical pin 44: CDBUS5; bidirectional. */
  "CDBUS5": "44",
  /** Physical pin 45: CDBUS6; bidirectional. */
  "CDBUS6": "45",
  /** Physical pin 46: CDBUS7; bidirectional. */
  "CDBUS7": "46",
  /** Physical pin 47: GND; power_in. */
  "GND_47": "47",
  /** Physical pin 48: DDBUS0; bidirectional. */
  "DDBUS0": "48",
  /** Physical pin 49: VREGOUT; power_out. */
  "VREGOUT": "49",
  /** Physical pin 50: VREGIN; power_in. */
  "VREGIN": "50",
  /** Physical pin 51: GND; power_in. */
  "GND_51": "51",
  /** Physical pin 52: DDBUS1; bidirectional. */
  "DDBUS1": "52",
  /** Physical pin 53: DDBUS2; bidirectional. */
  "DDBUS2": "53",
  /** Physical pin 54: DDBUS3; bidirectional. */
  "DDBUS3": "54",
  /** Physical pin 55: DDBUS4; bidirectional. */
  "DDBUS4": "55",
  /** Physical pin 56: VCCIO; power_in. */
  "VCCIO_56": "56",
  /** Physical pin 57: DDBUS5; bidirectional. */
  "DDBUS5": "57",
  /** Physical pin 58: DDBUS6; bidirectional. */
  "DDBUS6": "58",
  /** Physical pin 59: DDBUS7; bidirectional. */
  "DDBUS7": "59",
  /** Physical pin 60: ~{PWREN}; output. */
  "~{PWREN}": "60",
  /** Physical pin 61: EEDATA; bidirectional. */
  "EEDATA": "61",
  /** Physical pin 62: EECLK; output. */
  "EECLK": "62",
  /** Physical pin 63: EECS; output. */
  "EECS": "63",
  /** Physical pin 64: VCORE; power_in. */
  "VCORE_64": "64",
}) {
  override schema = "Interface_USB:FT4232H";
  override referencePrefix = "U";
}

/**
 * USB 3.0 Super-Speed to 32 bits Sync FIFO, QFN-76
 *
 * KiCad symbol: `Interface_USB:FT601Q`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*9x9mm*P0.4mm*.
 * @see https://ftdichip.com/wp-content/uploads/2020/07/DS_FT600Q-FT601Q-IC-Datasheet.pdf
 * Keywords: FTDI USB 3.0 FIFO.
 * Default footprint: Package_DFN_QFN:QFN-76-1EP_9x9mm_P0.4mm_EP5.81x6.31mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT601Q extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: AVDD; power_in. */
  "AVDD": "2",
  /** Physical pin 3: VD10; power_in. */
  "VD10_3": "3",
  /** Physical pin 4: BE_0; bidirectional. */
  "BE_0": "4",
  /** Physical pin 5: BE_1; bidirectional. */
  "BE_1": "5",
  /** Physical pin 6: BE_2; bidirectional. */
  "BE_2": "6",
  /** Physical pin 7: BE_3; bidirectional. */
  "BE_3": "7",
  /** Physical pin 8: ~{TXE}; output. */
  "~{TXE}": "8",
  /** Physical pin 9: ~{RXF}; output. */
  "~{RXF}": "9",
  /** Physical pin 10: ~{SIWU}; input. */
  "~{SIWU}": "10",
  /** Physical pin 11: ~{WR}; input. */
  "~{WR}": "11",
  /** Physical pin 12: ~{RD}; input. */
  "~{RD}": "12",
  /** Physical pin 13: ~{OE}; input. */
  "~{OE}": "13",
  /** Physical pin 14: VCCIO; power_in. */
  "VCCIO_14": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: ~{WAKEUP}; bidirectional. */
  "~{WAKEUP}": "16",
  /** Physical pin 17: GPIO0; bidirectional. */
  "GPIO0": "17",
  /** Physical pin 18: GPIO1; bidirectional. */
  "GPIO1": "18",
  /** Physical pin 19: Reserved; no_connect. */
  "Reserved": "19",
  /** Physical pin 20: VCC33; power_in. */
  "VCC33_20": "20",
  /** Physical pin 21: XI; input. */
  "XI": "21",
  /** Physical pin 22: XO; output. */
  "XO": "22",
  /** Physical pin 23: DP; bidirectional. */
  "DP": "23",
  /** Physical pin 24: VCC33; passive. */
  "VCC33_24": "24",
  /** Physical pin 25: DM; bidirectional. */
  "DM": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: RREF; input. */
  "RREF": "27",
  /** Physical pin 28: VDDA; power_in. */
  "VDDA": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: VD10; passive. */
  "VD10_30": "30",
  /** Physical pin 31: TODN; output. */
  "TODN": "31",
  /** Physical pin 32: TODP; output. */
  "TODP": "32",
  /** Physical pin 33: VD10; passive. */
  "VD10_33": "33",
  /** Physical pin 34: RIDN; input. */
  "RIDN": "34",
  /** Physical pin 35: RIDP; input. */
  "RIDP": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: VBUS; power_in. */
  "VBUS": "37",
  /** Physical pin 38: VCC33; passive. */
  "VCC33_38": "38",
  /** Physical pin 39: DV10; power_out. */
  "DV10": "39",
  /** Physical pin 40: DATA_0; bidirectional. */
  "DATA_0": "40",
  /** Physical pin 41: DATA_1; bidirectional. */
  "DATA_1": "41",
  /** Physical pin 42: DATA_2; bidirectional. */
  "DATA_2": "42",
  /** Physical pin 43: DATA_3; bidirectional. */
  "DATA_3": "43",
  /** Physical pin 44: DATA_4; bidirectional. */
  "DATA_4": "44",
  /** Physical pin 45: DATA_5; bidirectional. */
  "DATA_5": "45",
  /** Physical pin 46: DATA_6; bidirectional. */
  "DATA_6": "46",
  /** Physical pin 47: DATA_7; bidirectional. */
  "DATA_7": "47",
  /** Physical pin 48: VD10; passive. */
  "VD10_48": "48",
  /** Physical pin 49: VCCIO; passive. */
  "VCCIO_49": "49",
  /** Physical pin 50: DATA_8; bidirectional. */
  "DATA_8": "50",
  /** Physical pin 51: DATA_9; bidirectional. */
  "DATA_9": "51",
  /** Physical pin 52: DATA_10; bidirectional. */
  "DATA_10": "52",
  /** Physical pin 53: DATA_11; bidirectional. */
  "DATA_11": "53",
  /** Physical pin 54: DATA_12; bidirectional. */
  "DATA_12": "54",
  /** Physical pin 55: DATA_13; bidirectional. */
  "DATA_13": "55",
  /** Physical pin 56: DATA_14; bidirectional. */
  "DATA_14": "56",
  /** Physical pin 57: DATA_15; bidirectional. */
  "DATA_15": "57",
  /** Physical pin 58: CLK; output. */
  "CLK": "58",
  /** Physical pin 59: VCCIO; passive. */
  "VCCIO_59": "59",
  /** Physical pin 60: DATA_16; bidirectional. */
  "DATA_16": "60",
  /** Physical pin 61: DATA_17; bidirectional. */
  "DATA_17": "61",
  /** Physical pin 62: DATA_18; bidirectional. */
  "DATA_18": "62",
  /** Physical pin 63: DATA_19; bidirectional. */
  "DATA_19": "63",
  /** Physical pin 64: DATA_20; bidirectional. */
  "DATA_20": "64",
  /** Physical pin 65: DATA_21; bidirectional. */
  "DATA_21": "65",
  /** Physical pin 66: DATA_22; bidirectional. */
  "DATA_22": "66",
  /** Physical pin 67: DATA_23; bidirectional. */
  "DATA_23": "67",
  /** Physical pin 68: VCCIO; passive. */
  "VCCIO_68": "68",
  /** Physical pin 69: DATA_24; bidirectional. */
  "DATA_24": "69",
  /** Physical pin 70: DATA_25; bidirectional. */
  "DATA_25": "70",
  /** Physical pin 71: DATA_26; bidirectional. */
  "DATA_26": "71",
  /** Physical pin 72: DATA_27; bidirectional. */
  "DATA_27": "72",
  /** Physical pin 73: DATA_28; bidirectional. */
  "DATA_28": "73",
  /** Physical pin 74: DATA_29; bidirectional. */
  "DATA_29": "74",
  /** Physical pin 75: DATA_30; bidirectional. */
  "DATA_30": "75",
  /** Physical pin 76: DATA_31; bidirectional. */
  "DATA_31": "76",
  /** Physical pin 77: GND; passive. */
  "GND_77": "77",
}) {
  override schema = "Interface_USB:FT601Q";
  override referencePrefix = "U";
}

/**
 * Programmable USB Type-C Controller w/PD, I2C address 0x22, WQFN-14
 *
 * KiCad symbol: `Interface_USB:FUSB302BMPX`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/FUSB302B-D.PDF
 * Keywords: USB USB-C PD Power Delivery PHY.
 * Default footprint: Package_DFN_QFN:WQFN-14-1EP_2.5x2.5mm_P0.5mm_EP1.45x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FUSB302BMPX extends Component.withPins({
  /** Physical pin 1: CC2; bidirectional. */
  "CC2_1": "1",
  /** Physical pin 2: VBUS; input. */
  "VBUS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD_3": "3",
  /** Physical pin 4: VDD; passive. */
  "VDD_4": "4",
  /** Physical pin 5: INT_N; open_collector. */
  "INT_N": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: CC1; bidirectional. */
  "CC1_10": "10",
  /** Physical pin 11: CC1; bidirectional. */
  "CC1_11": "11",
  /** Physical pin 12: VCONN; power_in. */
  "VCONN_12": "12",
  /** Physical pin 13: VCONN; power_in. */
  "VCONN_13": "13",
  /** Physical pin 14: CC2; bidirectional. */
  "CC2_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
  override schema = "Interface_USB:FUSB302BMPX";
  override referencePrefix = "U";
}

/**
 * Programmable USB Type-C Controller w/PD, I2C address 0x23, WQFN-14
 *
 * KiCad symbol: `Interface_USB:FUSB302B01MPX`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/FUSB302B-D.PDF
 * Keywords: USB USB-C PD Power Delivery PHY.
 * Default footprint: Package_DFN_QFN:WQFN-14-1EP_2.5x2.5mm_P0.5mm_EP1.45x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FUSB302B01MPX extends Component.withPins({
  /** Physical pin 1: CC2; bidirectional. */
  "CC2_1": "1",
  /** Physical pin 2: VBUS; input. */
  "VBUS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD_3": "3",
  /** Physical pin 4: VDD; passive. */
  "VDD_4": "4",
  /** Physical pin 5: INT_N; open_collector. */
  "INT_N": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: CC1; bidirectional. */
  "CC1_10": "10",
  /** Physical pin 11: CC1; bidirectional. */
  "CC1_11": "11",
  /** Physical pin 12: VCONN; power_in. */
  "VCONN_12": "12",
  /** Physical pin 13: VCONN; power_in. */
  "VCONN_13": "13",
  /** Physical pin 14: CC2; bidirectional. */
  "CC2_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
  override schema = "Interface_USB:FUSB302B01MPX";
  override referencePrefix = "U";
}

/**
 * Programmable USB Type-C Controller w/PD, I2C address 0x24, WQFN-14
 *
 * KiCad symbol: `Interface_USB:FUSB302B10MPX`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/FUSB302B-D.PDF
 * Keywords: USB USB-C PD Power Delivery PHY.
 * Default footprint: Package_DFN_QFN:WQFN-14-1EP_2.5x2.5mm_P0.5mm_EP1.45x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FUSB302B10MPX extends Component.withPins({
  /** Physical pin 1: CC2; bidirectional. */
  "CC2_1": "1",
  /** Physical pin 2: VBUS; input. */
  "VBUS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD_3": "3",
  /** Physical pin 4: VDD; passive. */
  "VDD_4": "4",
  /** Physical pin 5: INT_N; open_collector. */
  "INT_N": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: CC1; bidirectional. */
  "CC1_10": "10",
  /** Physical pin 11: CC1; bidirectional. */
  "CC1_11": "11",
  /** Physical pin 12: VCONN; power_in. */
  "VCONN_12": "12",
  /** Physical pin 13: VCONN; power_in. */
  "VCONN_13": "13",
  /** Physical pin 14: CC2; bidirectional. */
  "CC2_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
  override schema = "Interface_USB:FUSB302B10MPX";
  override referencePrefix = "U";
}

/**
 * Programmable USB Type-C Controller w/PD, I2C address 0x25, WQFN-14
 *
 * KiCad symbol: `Interface_USB:FUSB302B11MPX`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/FUSB302B-D.PDF
 * Keywords: USB USB-C PD Power Delivery PHY.
 * Default footprint: Package_DFN_QFN:WQFN-14-1EP_2.5x2.5mm_P0.5mm_EP1.45x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FUSB302B11MPX extends Component.withPins({
  /** Physical pin 1: CC2; bidirectional. */
  "CC2_1": "1",
  /** Physical pin 2: VBUS; input. */
  "VBUS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD_3": "3",
  /** Physical pin 4: VDD; passive. */
  "VDD_4": "4",
  /** Physical pin 5: INT_N; open_collector. */
  "INT_N": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: CC1; bidirectional. */
  "CC1_10": "10",
  /** Physical pin 11: CC1; bidirectional. */
  "CC1_11": "11",
  /** Physical pin 12: VCONN; power_in. */
  "VCONN_12": "12",
  /** Physical pin 13: VCONN; power_in. */
  "VCONN_13": "13",
  /** Physical pin 14: CC2; bidirectional. */
  "CC2_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
  override schema = "Interface_USB:FUSB302B11MPX";
  override referencePrefix = "U";
}

/**
 * USB Type-C port controller with I2C and GPIO control, X2QFN-12
 *
 * KiCad symbol: `Interface_USB:FUSB303BTMX`. Reference prefix: `U`.
 * Footprint filters: *X2QFN*1.6x1.6mm*P0.4mm*.
 * @see https://www.onsemi.com/pdf/datasheet/fusb303b-d.pdf
 * Keywords: usb type-c controller i2c gpio source sink drp.
 * Default footprint: Package_DFN_QFN:Texas_X2QFN-12_1.6x1.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FUSB303BTMX extends Component.withPins({
  /** Physical pin 1: CC1; bidirectional. */
  "CC1": "1",
  /** Physical pin 2: CC2; bidirectional. */
  "CC2": "2",
  /** Physical pin 3: PORT/~{DEBUG}; bidirectional. */
  "PORT/~{DEBUG}": "3",
  /** Physical pin 4: VBUS_DET; input. */
  "VBUS_DET": "4",
  /** Physical pin 5: ADDR/ORIENT; bidirectional. */
  "ADDR/ORIENT": "5",
  /** Physical pin 6: INT_N/OUT3; open_collector. */
  "INT_N/OUT3": "6",
  /** Physical pin 7: SDA/OUT1; bidirectional. */
  "SDA/OUT1": "7",
  /** Physical pin 8: SCL/OUT2; bidirectional. */
  "SCL/OUT2": "8",
  /** Physical pin 9: ID; open_collector. */
  "ID": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{EN}; input. */
  "~{EN}": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
}) {
  override schema = "Interface_USB:FUSB303BTMX";
  override referencePrefix = "U";
}

/**
 * USB Type-C Port Controller with USB-PD, WQFN-16
 *
 * KiCad symbol: `Interface_USB:FUSB307BMPX`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/FUSB307B-D.PDF
 * Keywords: USB USB-C PD Power Delivery PHY TCPC.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_3x3mm_P0.5mm_EP1.75x1.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FUSB307BMPX extends Component.withPins({
  /** Physical pin 1: CC1; bidirectional. */
  "CC1": "1",
  /** Physical pin 2: VCONN; power_in. */
  "VCONN": "2",
  /** Physical pin 3: CC2; bidirectional. */
  "CC2": "3",
  /** Physical pin 4: ORIENT/I2C_ADDR; tri_state. */
  "ORIENT/I2C_ADDR": "4",
  /** Physical pin 5: LDO; power_out. */
  "LDO": "5",
  /** Physical pin 6: VBUS; power_in. */
  "VBUS": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: DBG_N; open_collector. */
  "DBG_N": "8",
  /** Physical pin 9: GPIO2; bidirectional. */
  "GPIO2": "9",
  /** Physical pin 10: INT_N; open_collector. */
  "INT_N": "10",
  /** Physical pin 11: SCL1/SDA2; bidirectional. */
  "SCL1/SDA2": "11",
  /** Physical pin 12: SDA1/SCL2; bidirectional. */
  "SDA1/SCL2": "12",
  /** Physical pin 13: SRC; output. */
  "SRC": "13",
  /** Physical pin 14: SNK; output. */
  "SNK": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Interface_USB:FUSB307BMPX";
  override referencePrefix = "U";
}

/**
 * USB 3.0 Dual LUN Memory Card Reader Controller, external firmware support (SPI Flash Memory), WQFN-48
 *
 * KiCad symbol: `Interface_USB:GL3224-ONY`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.5mm*EP5.*x5.*mm*.
 * @see https://lcsc.com/datasheet/lcsc_datasheet_2410121440_Genesys-Logic-GL3224-ONY04_C157358.pdf
 * Keywords: Genesys-Logic Secure-Digital SD-card SDHC SDXC SD3.0-UHS-I microSD eMMC Sony-Memory-Stick-PRO MS-PRO 8051-core GL3224-ONY04.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GL3224_ONY extends Component.withPins({
  /** Physical pin 1: SD1_CDZ; input. */
  "SD1_CDZ": "1",
  /** Physical pin 2: MS1_INS/SD1_WP; input. */
  "MS1_INS/SD1_WP": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: DM; bidirectional. */
  "DM": "4",
  /** Physical pin 5: DP; bidirectional. */
  "DP": "5",
  /** Physical pin 6: AVDD33; power_in. */
  "AVDD33_6": "6",
  /** Physical pin 7: TXN; output. */
  "TXN": "7",
  /** Physical pin 8: TXP; output. */
  "TXP": "8",
  /** Physical pin 9: AVDD12; power_in. */
  "AVDD12": "9",
  /** Physical pin 10: RXN; input. */
  "RXN": "10",
  /** Physical pin 11: RXP; input. */
  "RXP": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: X1; input. */
  "X1": "13",
  /** Physical pin 14: X2; output. */
  "X2": "14",
  /** Physical pin 15: AVDD33; passive. */
  "AVDD33_15": "15",
  /** Physical pin 16: RTERM; passive. */
  "RTERM": "16",
  /** Physical pin 17: SPI_MISO; input. */
  "SPI_MISO": "17",
  /** Physical pin 18: SPI_MOSI; output. */
  "SPI_MOSI": "18",
  /** Physical pin 19: SPI_CK; output. */
  "SPI_CK": "19",
  /** Physical pin 20: SPI_CS; output. */
  "SPI_CS": "20",
  /** Physical pin 21: LED; output. */
  "LED": "21",
  /** Physical pin 22: VBUS; power_in. */
  "VBUS": "22",
  /** Physical pin 23: S1M1_VCC; power_out. */
  "S1M1_VCC": "23",
  /** Physical pin 24: S2M2_VCC; power_out. */
  "S2M2_VCC": "24",
  /** Physical pin 25: DVDD33; passive. */
  "DVDD33_25": "25",
  /** Physical pin 26: DVDD12; passive. */
  "DVDD12": "26",
  /** Physical pin 27: S2D1_M2BS; bidirectional. */
  "S2D1_M2BS": "27",
  /** Physical pin 28: S2D0_M2D1; bidirectional. */
  "S2D0_M2D1": "28",
  /** Physical pin 29: S2CK_M2D0; bidirectional. */
  "S2CK_M2D0": "29",
  /** Physical pin 30: S2CM_M2D2; bidirectional. */
  "S2CM_M2D2": "30",
  /** Physical pin 31: S2D3_M2D3; bidirectional. */
  "S2D3_M2D3": "31",
  /** Physical pin 32: S2D2_M2CK; bidirectional. */
  "S2D2_M2CK": "32",
  /** Physical pin 33: VUHS_2; power_out. */
  "VUHS_2": "33",
  /** Physical pin 34: DVDD33; passive. */
  "DVDD33_34": "34",
  /** Physical pin 35: MS2_INS/SD2_WP; input. */
  "MS2_INS/SD2_WP": "35",
  /** Physical pin 36: SD2_CDZ; input. */
  "SD2_CDZ": "36",
  /** Physical pin 37: S1D1_M1BS; bidirectional. */
  "S1D1_M1BS": "37",
  /** Physical pin 38: S1D0_M1D1; bidirectional. */
  "S1D0_M1D1": "38",
  /** Physical pin 39: S1CK_M1D0; bidirectional. */
  "S1CK_M1D0": "39",
  /** Physical pin 40: S1CM_M1D2; bidirectional. */
  "S1CM_M1D2": "40",
  /** Physical pin 41: S1D3_M1D3; bidirectional. */
  "S1D3_M1D3": "41",
  /** Physical pin 42: S1D2_M1CK; bidirectional. */
  "S1D2_M1CK": "42",
  /** Physical pin 43: VUHS_1; power_out. */
  "VUHS_1": "43",
  /** Physical pin 44: DVDD33; passive. */
  "DVDD33_44": "44",
  /** Physical pin 45: S1D7_M1D4; bidirectional. */
  "S1D7_M1D4": "45",
  /** Physical pin 46: S1D6_M1D5; bidirectional. */
  "S1D6_M1D5": "46",
  /** Physical pin 47: S1D5_M1D6; bidirectional. */
  "S1D5_M1D6": "47",
  /** Physical pin 48: S1D4_M1D7; bidirectional. */
  "S1D4_M1D7": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
}) {
  override schema = "Interface_USB:GL3224-ONY";
  override referencePrefix = "U";
}

/**
 * USB 3.0 + USB 2.0 Differential Switch 2:1/1:2 MUX/DEMUX, WQFN-42
 *
 * KiCad symbol: `Interface_USB:HD3SS6126`. Reference prefix: `U`.
 * Footprint filters: *WQFN*3.5x9mm?P0.5mm?EP2.05x7.55mm*.
 * @see https://www.ti.com/lit/ds/symlink/hd3ss6126.pdf
 * Keywords: Texas-Instruments USB3.0 USB2.0 Multiplexer HD3SS6126RUAR.
 * Default footprint: Package_DFN_QFN:WQFN-42-1EP_3.5x9mm_P0.5mm_EP2.05x7.55mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HD3SS6126 extends Component.withPins({
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
  /** Physical pin 6: HS_~{OE}; input. */
  "HS_~{OE}": "6",
  /** Physical pin 7: HSA(n); passive. */
  "HSA(n)": "7",
  /** Physical pin 8: HSA(p); passive. */
  "HSA(p)": "8",
  /** Physical pin 9: SEL; input. */
  "SEL": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: SSA0(p); passive. */
  "SSA0(p)": "11",
  /** Physical pin 12: SSA0(n); passive. */
  "SSA0(n)": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: SSA1(p); passive. */
  "SSA1(p)": "15",
  /** Physical pin 16: SSA1(n); passive. */
  "SSA1(n)": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: VDD; passive. */
  "VDD_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: SSC1(n); passive. */
  "SSC1(n)": "22",
  /** Physical pin 23: SSC1(p); passive. */
  "SSC1(p)": "23",
  /** Physical pin 24: SSC0(n); passive. */
  "SSC0(n)": "24",
  /** Physical pin 25: SSC0(p); passive. */
  "SSC0(p)": "25",
  /** Physical pin 26: SSB1(n); passive. */
  "SSB1(n)": "26",
  /** Physical pin 27: SSB1(p); passive. */
  "SSB1(p)": "27",
  /** Physical pin 28: SSB0(n); passive. */
  "SSB0(n)": "28",
  /** Physical pin 29: SSB0(p); passive. */
  "SSB0(p)": "29",
  /** Physical pin 30: VDD; passive. */
  "VDD_30": "30",
  /** Physical pin 31: HSB(p); passive. */
  "HSB(p)": "31",
  /** Physical pin 32: HSB(n); passive. */
  "HSB(n)": "32",
  /** Physical pin 33: HSC(p); passive. */
  "HSC(p)": "33",
  /** Physical pin 34: HSC(n); passive. */
  "HSC(n)": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: EPAD; passive. */
  "EPAD": "43",
}) {
  override schema = "Interface_USB:HD3SS6126";
  override referencePrefix = "U";
}

/**
 * USB-PD Sink IC Port Controller, VBUS = 3..48V, USB Type-C rev. 2.1, USB-PD rev. 3.1, BC1.2, QC2.0, WQFN-16
 *
 * KiCad symbol: `Interface_USB:HUSB238A-xxxxx-QN16R`. Reference prefix: `U`.
 * Footprint filters: *WQFN*3x3mm*P0.5mm*EP1.7*x1.7*mm*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_2412301710_Hynetek-HUSB238A-BB001-QN16R_C24833806.pdf
 * Keywords: USB-C I2C USB-Power-Delivery Extended-Power-Range Quick-Charge.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_3x3mm_P0.5mm_EP1.75x1.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HUSB238A_xxxxx_QN16R extends Component.withPins({
  /** Physical pin 1: D+; bidirectional. */
  "D+": "1",
  /** Physical pin 2: D-; bidirectional. */
  "D-": "2",
  /** Physical pin 3: CC1; bidirectional. */
  "CC1": "3",
  /** Physical pin 4: CC2; bidirectional. */
  "CC2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: ~{DEBUG}; output. */
  "~{DEBUG}": "6",
  /** Physical pin 7: EN_HVDCP/OUT1; bidirectional. */
  "EN_HVDCP/OUT1": "7",
  /** Physical pin 8: ADDR/ORIENT; bidirectional. */
  "ADDR/ORIENT": "8",
  /** Physical pin 9: SDA/SNK_VSET; bidirectional. */
  "SDA/SNK_VSET": "9",
  /** Physical pin 10: SCL/SNK_ISET; input. */
  "SCL/SNK_ISET": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: ~{EN}; input. */
  "~{EN}": "12",
  /** Physical pin 13: FAULT/OUT2; output. */
  "FAULT/OUT2": "13",
  /** Physical pin 14: FLGIN; input. */
  "FLGIN": "14",
  /** Physical pin 15: GATE; open_collector. */
  "GATE": "15",
  /** Physical pin 16: VBUS; power_in. */
  "VBUS": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
  override schema = "Interface_USB:HUSB238A-xxxxx-QN16R";
  override referencePrefix = "U";
}

/**
 * USB-PD Sink IC Port Controller, VBUS = 3..25V, USB Type-C rev. 1.4, USB-PD rev. 3.0, BC1.2, WDFN-10 / WSON-10
 *
 * KiCad symbol: `Interface_USB:HUSB238_xxxDD`. Reference prefix: `U`.
 * Footprint filters: *3x3mm?P0.5mm?EP1.8*x2.5*mm*.
 * @see https://cdn-learn.adafruit.com/assets/assets/000/125/150/original/husb238_datasheet_full.pdf
 * Keywords: USB-C I2C USB-Power-Delivery HUSB238_001DD HUSB238_002DD HUSB238_003DD HUSB238_004DD HUSB238_005DD HUSB238_006DD.
 * Default footprint: Package_DFN_QFN:WDFN-10-1EP_3x3mm_P0.5mm_EP1.8x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HUSB238_xxxDD extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: D+; bidirectional. */
  "D+": "2",
  /** Physical pin 3: D-; bidirectional. */
  "D-": "3",
  /** Physical pin 4: CC1; bidirectional. */
  "CC1": "4",
  /** Physical pin 5: CC2; bidirectional. */
  "CC2": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: VSET; input. */
  "VSET": "8",
  /** Physical pin 9: ISET; input. */
  "ISET": "9",
  /** Physical pin 10: GATE; open_collector. */
  "GATE": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
}) {
  override schema = "Interface_USB:HUSB238_xxxDD";
  override referencePrefix = "U";
}

/**
 * USB TYPEC  PD Controller Interface, TSSOP-16
 *
 * KiCad symbol: `Interface_USB:IP2721`. Reference prefix: `U`.
 * Footprint filters: TSSOP*16*4.4x5mm*P0.65mm*.
 * @see https://datasheet.lcsc.com/lcsc/2006111335_INJOINIC-IP2721_C603176.pdf
 * Keywords: USB TYPEC PD.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IP2721 extends Component.withPins({
  /** Physical pin 1: VBUSG; output. */
  "VBUSG": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: SEL; input. */
  "SEL": "11",
  /** Physical pin 12: CC2; bidirectional. */
  "CC2": "12",
  /** Physical pin 13: CC1; bidirectional. */
  "CC1": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: VBUS; input. */
  "VBUS": "16",
}) {
  override schema = "Interface_USB:IP2721";
  override referencePrefix = "U";
}

/**
 * USB 2.0 High Speed 4-Port Hub Controller, SSOP-28
 *
 * KiCad symbol: `Interface_USB:MA8601`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x9.9mm*P0.635mm*.
 * @see https://datasheetspdf.com/pdf-file/1312067/Prolific/MA8601/1
 * Keywords: 4-Port, EEPROM, High Speed, Hub, USB2.0.
 * Default footprint: Package_SO:SSOP-28_3.9x9.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MA8601 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: XO; output. */
  "XO": "2",
  /** Physical pin 3: XI; input. */
  "XI": "3",
  /** Physical pin 4: DM4; bidirectional. */
  "DM4": "4",
  /** Physical pin 5: DP4; bidirectional. */
  "DP4": "5",
  /** Physical pin 6: DM3; bidirectional. */
  "DM3": "6",
  /** Physical pin 7: DP3; bidirectional. */
  "DP3": "7",
  /** Physical pin 8: DM2; bidirectional. */
  "DM2": "8",
  /** Physical pin 9: DP2; bidirectional. */
  "DP2": "9",
  /** Physical pin 10: DM1; bidirectional. */
  "DM1": "10",
  /** Physical pin 11: DP1; bidirectional. */
  "DP1": "11",
  /** Physical pin 12: VDDR12; power_out. */
  "VDDR12": "12",
  /** Physical pin 13: VDD33; power_in. */
  "VDD33": "13",
  /** Physical pin 14: REXT; passive. */
  "REXT": "14",
  /** Physical pin 15: DMU; bidirectional. */
  "DMU": "15",
  /** Physical pin 16: DPU; bidirectional. */
  "DPU": "16",
  /** Physical pin 17: ~{SRST}; input. */
  "~{SRST}": "17",
  /** Physical pin 18: VBUS_IN; input. */
  "VBUS_IN": "18",
  /** Physical pin 19: PSELF; input. */
  "PSELF": "19",
  /** Physical pin 20: VDD5; power_in. */
  "VDD5": "20",
  /** Physical pin 21: VDDR33; power_out. */
  "VDDR33": "21",
  /** Physical pin 22: DRV; bidirectional. */
  "DRV": "22",
  /** Physical pin 23: LED1/EESCL; bidirectional. */
  "LED1/EESCL": "23",
  /** Physical pin 24: LED2/GLEDEN; bidirectional. */
  "LED2/GLEDEN": "24",
  /** Physical pin 25: ~{PWRJ}; output. */
  "~{PWRJ}": "25",
  /** Physical pin 26: OVCJ; input. */
  "OVCJ": "26",
  /** Physical pin 27: TEST/EESDA; bidirectional. */
  "TEST/EESDA": "27",
  /** Physical pin 28: VDD12; power_in. */
  "VDD12": "28",
}) {
  override schema = "Interface_USB:MA8601";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to UART Protocol Converter with GPIO, SSOP-20
 *
 * KiCad symbol: `Interface_USB:MCP2200-I-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*20*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/200022228D.pdf
 * Keywords: USB UART Converter.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2200_I_SS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: OSC1; input. */
  "OSC1": "2",
  /** Physical pin 3: OSC2; output. */
  "OSC2": "3",
  /** Physical pin 4: RST; input. */
  "RST": "4",
  /** Physical pin 5: GP7/TxLED; bidirectional. */
  "GP7/TxLED": "5",
  /** Physical pin 6: GP6/RxLED; bidirectional. */
  "GP6/RxLED": "6",
  /** Physical pin 7: GP5; bidirectional. */
  "GP5": "7",
  /** Physical pin 8: GP4; bidirectional. */
  "GP4": "8",
  /** Physical pin 9: GP3; bidirectional. */
  "GP3": "9",
  /** Physical pin 10: TX; output. */
  "TX": "10",
  /** Physical pin 11: RTS; output. */
  "RTS": "11",
  /** Physical pin 12: RX; input. */
  "RX": "12",
  /** Physical pin 13: CTS; input. */
  "CTS": "13",
  /** Physical pin 14: GP2; bidirectional. */
  "GP2": "14",
  /** Physical pin 15: GP1/USB-CFG; bidirectional. */
  "GP1/USB-CFG": "15",
  /** Physical pin 16: GP0/SSPND; bidirectional. */
  "GP0/SSPND": "16",
  /** Physical pin 17: V_USB; power_in. */
  "V_USB": "17",
  /** Physical pin 18: D-; bidirectional. */
  "D-": "18",
  /** Physical pin 19: D+; bidirectional. */
  "D+": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
}) {
  override schema = "Interface_USB:MCP2200-I-SS";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to UART Protocol Converter with GPIO, Extended Temperature Range, SSOP-20
 *
 * KiCad symbol: `Interface_USB:MCP2200-E-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*20*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/200022228D.pdf
 * Keywords: USB UART Converter.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2200_E_SS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: OSC1; input. */
  "OSC1": "2",
  /** Physical pin 3: OSC2; output. */
  "OSC2": "3",
  /** Physical pin 4: RST; input. */
  "RST": "4",
  /** Physical pin 5: GP7/TxLED; bidirectional. */
  "GP7/TxLED": "5",
  /** Physical pin 6: GP6/RxLED; bidirectional. */
  "GP6/RxLED": "6",
  /** Physical pin 7: GP5; bidirectional. */
  "GP5": "7",
  /** Physical pin 8: GP4; bidirectional. */
  "GP4": "8",
  /** Physical pin 9: GP3; bidirectional. */
  "GP3": "9",
  /** Physical pin 10: TX; output. */
  "TX": "10",
  /** Physical pin 11: RTS; output. */
  "RTS": "11",
  /** Physical pin 12: RX; input. */
  "RX": "12",
  /** Physical pin 13: CTS; input. */
  "CTS": "13",
  /** Physical pin 14: GP2; bidirectional. */
  "GP2": "14",
  /** Physical pin 15: GP1/USB-CFG; bidirectional. */
  "GP1/USB-CFG": "15",
  /** Physical pin 16: GP0/SSPND; bidirectional. */
  "GP0/SSPND": "16",
  /** Physical pin 17: V_USB; power_in. */
  "V_USB": "17",
  /** Physical pin 18: D-; bidirectional. */
  "D-": "18",
  /** Physical pin 19: D+; bidirectional. */
  "D+": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
}) {
  override schema = "Interface_USB:MCP2200-E-SS";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to UART Protocol Converter with GPIO, QFN-20
 *
 * KiCad symbol: `Interface_USB:MCP2200-I-MQ`. Reference prefix: `U`.
 * Footprint filters: QFN*20*1EP*5x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/200022228D.pdf
 * Keywords: USB UART Converter.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2200_I_MQ extends Component.withPins({
  /** Physical pin 1: RST; input. */
  "RST": "1",
  /** Physical pin 2: GP7/TxLED; bidirectional. */
  "GP7/TxLED": "2",
  /** Physical pin 3: GP6/RxLED; bidirectional. */
  "GP6/RxLED": "3",
  /** Physical pin 4: GP5; bidirectional. */
  "GP5": "4",
  /** Physical pin 5: GP4; bidirectional. */
  "GP4": "5",
  /** Physical pin 6: GP3; bidirectional. */
  "GP3": "6",
  /** Physical pin 7: TX; output. */
  "TX": "7",
  /** Physical pin 8: RTS; output. */
  "RTS": "8",
  /** Physical pin 9: RX; input. */
  "RX": "9",
  /** Physical pin 10: CTS; input. */
  "CTS": "10",
  /** Physical pin 11: GP2; bidirectional. */
  "GP2": "11",
  /** Physical pin 12: GP1/USB-CFG; bidirectional. */
  "GP1/USB-CFG": "12",
  /** Physical pin 13: GP0/SSPND; bidirectional. */
  "GP0/SSPND": "13",
  /** Physical pin 14: V_USB; power_in. */
  "V_USB": "14",
  /** Physical pin 15: D-; bidirectional. */
  "D-": "15",
  /** Physical pin 16: D+; bidirectional. */
  "D+": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: OSC1; input. */
  "OSC1": "19",
  /** Physical pin 20: OSC2; output. */
  "OSC2": "20",
  /** Physical pin 21: EP; no_connect. */
  "EP": "21",
}) {
  override schema = "Interface_USB:MCP2200-I-MQ";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to UART Protocol Converter with GPIO, SOIC-20
 *
 * KiCad symbol: `Interface_USB:MCP2200-I-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*20*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/200022228D.pdf
 * Keywords: USB UART Converter.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2200_I_SO extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: OSC1; input. */
  "OSC1": "2",
  /** Physical pin 3: OSC2; output. */
  "OSC2": "3",
  /** Physical pin 4: RST; input. */
  "RST": "4",
  /** Physical pin 5: GP7/TxLED; bidirectional. */
  "GP7/TxLED": "5",
  /** Physical pin 6: GP6/RxLED; bidirectional. */
  "GP6/RxLED": "6",
  /** Physical pin 7: GP5; bidirectional. */
  "GP5": "7",
  /** Physical pin 8: GP4; bidirectional. */
  "GP4": "8",
  /** Physical pin 9: GP3; bidirectional. */
  "GP3": "9",
  /** Physical pin 10: TX; output. */
  "TX": "10",
  /** Physical pin 11: RTS; output. */
  "RTS": "11",
  /** Physical pin 12: RX; input. */
  "RX": "12",
  /** Physical pin 13: CTS; input. */
  "CTS": "13",
  /** Physical pin 14: GP2; bidirectional. */
  "GP2": "14",
  /** Physical pin 15: GP1/USB-CFG; bidirectional. */
  "GP1/USB-CFG": "15",
  /** Physical pin 16: GP0/SSPND; bidirectional. */
  "GP0/SSPND": "16",
  /** Physical pin 17: V_USB; power_in. */
  "V_USB": "17",
  /** Physical pin 18: D-; bidirectional. */
  "D-": "18",
  /** Physical pin 19: D+; bidirectional. */
  "D+": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
}) {
  override schema = "Interface_USB:MCP2200-I-SO";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to UART Protocol Converter with GPIO, Extended Temperature Range, TnR, SSOP-20
 *
 * KiCad symbol: `Interface_USB:MCP2200T-E-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*20*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/200022228D.pdf
 * Keywords: USB UART Converter.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2200T_E_SS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: OSC1; input. */
  "OSC1": "2",
  /** Physical pin 3: OSC2; output. */
  "OSC2": "3",
  /** Physical pin 4: RST; input. */
  "RST": "4",
  /** Physical pin 5: GP7/TxLED; bidirectional. */
  "GP7/TxLED": "5",
  /** Physical pin 6: GP6/RxLED; bidirectional. */
  "GP6/RxLED": "6",
  /** Physical pin 7: GP5; bidirectional. */
  "GP5": "7",
  /** Physical pin 8: GP4; bidirectional. */
  "GP4": "8",
  /** Physical pin 9: GP3; bidirectional. */
  "GP3": "9",
  /** Physical pin 10: TX; output. */
  "TX": "10",
  /** Physical pin 11: RTS; output. */
  "RTS": "11",
  /** Physical pin 12: RX; input. */
  "RX": "12",
  /** Physical pin 13: CTS; input. */
  "CTS": "13",
  /** Physical pin 14: GP2; bidirectional. */
  "GP2": "14",
  /** Physical pin 15: GP1/USB-CFG; bidirectional. */
  "GP1/USB-CFG": "15",
  /** Physical pin 16: GP0/SSPND; bidirectional. */
  "GP0/SSPND": "16",
  /** Physical pin 17: V_USB; power_in. */
  "V_USB": "17",
  /** Physical pin 18: D-; bidirectional. */
  "D-": "18",
  /** Physical pin 19: D+; bidirectional. */
  "D+": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
}) {
  override schema = "Interface_USB:MCP2200T-E-SS";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to UART Protocol Converter with GPIO, TnR, QFN-20
 *
 * KiCad symbol: `Interface_USB:MCP2200T-I-MQ`. Reference prefix: `U`.
 * Footprint filters: QFN*20*1EP*5x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/200022228D.pdf
 * Keywords: USB UART Converter.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2200T_I_MQ extends Component.withPins({
  /** Physical pin 1: RST; input. */
  "RST": "1",
  /** Physical pin 2: GP7/TxLED; bidirectional. */
  "GP7/TxLED": "2",
  /** Physical pin 3: GP6/RxLED; bidirectional. */
  "GP6/RxLED": "3",
  /** Physical pin 4: GP5; bidirectional. */
  "GP5": "4",
  /** Physical pin 5: GP4; bidirectional. */
  "GP4": "5",
  /** Physical pin 6: GP3; bidirectional. */
  "GP3": "6",
  /** Physical pin 7: TX; output. */
  "TX": "7",
  /** Physical pin 8: RTS; output. */
  "RTS": "8",
  /** Physical pin 9: RX; input. */
  "RX": "9",
  /** Physical pin 10: CTS; input. */
  "CTS": "10",
  /** Physical pin 11: GP2; bidirectional. */
  "GP2": "11",
  /** Physical pin 12: GP1/USB-CFG; bidirectional. */
  "GP1/USB-CFG": "12",
  /** Physical pin 13: GP0/SSPND; bidirectional. */
  "GP0/SSPND": "13",
  /** Physical pin 14: V_USB; power_in. */
  "V_USB": "14",
  /** Physical pin 15: D-; bidirectional. */
  "D-": "15",
  /** Physical pin 16: D+; bidirectional. */
  "D+": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: OSC1; input. */
  "OSC1": "19",
  /** Physical pin 20: OSC2; output. */
  "OSC2": "20",
  /** Physical pin 21: EP; no_connect. */
  "EP": "21",
}) {
  override schema = "Interface_USB:MCP2200T-I-MQ";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to UART Protocol Converter with GPIO,TnR,SOIC
 *
 * KiCad symbol: `Interface_USB:MCP2200T-I-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*20*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/200022228D.pdf
 * Keywords: USB UART Converter.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2200T_I_SO extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: OSC1; input. */
  "OSC1": "2",
  /** Physical pin 3: OSC2; output. */
  "OSC2": "3",
  /** Physical pin 4: RST; input. */
  "RST": "4",
  /** Physical pin 5: GP7/TxLED; bidirectional. */
  "GP7/TxLED": "5",
  /** Physical pin 6: GP6/RxLED; bidirectional. */
  "GP6/RxLED": "6",
  /** Physical pin 7: GP5; bidirectional. */
  "GP5": "7",
  /** Physical pin 8: GP4; bidirectional. */
  "GP4": "8",
  /** Physical pin 9: GP3; bidirectional. */
  "GP3": "9",
  /** Physical pin 10: TX; output. */
  "TX": "10",
  /** Physical pin 11: RTS; output. */
  "RTS": "11",
  /** Physical pin 12: RX; input. */
  "RX": "12",
  /** Physical pin 13: CTS; input. */
  "CTS": "13",
  /** Physical pin 14: GP2; bidirectional. */
  "GP2": "14",
  /** Physical pin 15: GP1/USB-CFG; bidirectional. */
  "GP1/USB-CFG": "15",
  /** Physical pin 16: GP0/SSPND; bidirectional. */
  "GP0/SSPND": "16",
  /** Physical pin 17: V_USB; power_in. */
  "V_USB": "17",
  /** Physical pin 18: D-; bidirectional. */
  "D-": "18",
  /** Physical pin 19: D+; bidirectional. */
  "D+": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
}) {
  override schema = "Interface_USB:MCP2200T-I-SO";
  override referencePrefix = "U";
}

/**
 * USB 2.0 to UART Protocol Converter with GPIO, TnR, SSOP-20
 *
 * KiCad symbol: `Interface_USB:MCP2200T-I-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*20*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/200022228D.pdf
 * Keywords: USB UART Converter.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2200T_I_SS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: OSC1; input. */
  "OSC1": "2",
  /** Physical pin 3: OSC2; output. */
  "OSC2": "3",
  /** Physical pin 4: RST; input. */
  "RST": "4",
  /** Physical pin 5: GP7/TxLED; bidirectional. */
  "GP7/TxLED": "5",
  /** Physical pin 6: GP6/RxLED; bidirectional. */
  "GP6/RxLED": "6",
  /** Physical pin 7: GP5; bidirectional. */
  "GP5": "7",
  /** Physical pin 8: GP4; bidirectional. */
  "GP4": "8",
  /** Physical pin 9: GP3; bidirectional. */
  "GP3": "9",
  /** Physical pin 10: TX; output. */
  "TX": "10",
  /** Physical pin 11: RTS; output. */
  "RTS": "11",
  /** Physical pin 12: RX; input. */
  "RX": "12",
  /** Physical pin 13: CTS; input. */
  "CTS": "13",
  /** Physical pin 14: GP2; bidirectional. */
  "GP2": "14",
  /** Physical pin 15: GP1/USB-CFG; bidirectional. */
  "GP1/USB-CFG": "15",
  /** Physical pin 16: GP0/SSPND; bidirectional. */
  "GP0/SSPND": "16",
  /** Physical pin 17: V_USB; power_in. */
  "V_USB": "17",
  /** Physical pin 18: D-; bidirectional. */
  "D-": "18",
  /** Physical pin 19: D+; bidirectional. */
  "D+": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
}) {
  override schema = "Interface_USB:MCP2200T-I-SS";
  override referencePrefix = "U";
}

/**
 * USB to SPI Protocol Converter with GPIO, QFN-20
 *
 * KiCad symbol: `Interface_USB:MCP2210x-MQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22288A.pdf
 * Keywords: USB SPI Master Converter Bridge.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2210x_MQ extends Component.withPins({
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: GP0; bidirectional. */
  "GP0": "2",
  /** Physical pin 3: GP1; bidirectional. */
  "GP1": "3",
  /** Physical pin 4: GP2; bidirectional. */
  "GP2": "4",
  /** Physical pin 5: GP3; bidirectional. */
  "GP3": "5",
  /** Physical pin 6: MOSI; output. */
  "MOSI": "6",
  /** Physical pin 7: GP4; bidirectional. */
  "GP4": "7",
  /** Physical pin 8: SCK; output. */
  "SCK": "8",
  /** Physical pin 9: GP5; bidirectional. */
  "GP5": "9",
  /** Physical pin 10: MISO; input. */
  "MISO": "10",
  /** Physical pin 11: GP6; bidirectional. */
  "GP6": "11",
  /** Physical pin 12: GP7; bidirectional. */
  "GP7": "12",
  /** Physical pin 13: GP8; bidirectional. */
  "GP8": "13",
  /** Physical pin 14: VUSB; passive. */
  "VUSB": "14",
  /** Physical pin 15: D-; bidirectional. */
  "D-": "15",
  /** Physical pin 16: D+; bidirectional. */
  "D+": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: OSC1; input. */
  "OSC1": "19",
  /** Physical pin 20: OSC2; output. */
  "OSC2": "20",
  /** Physical pin 21: EP; passive. */
  "EP": "21",
}) {
  override schema = "Interface_USB:MCP2210x-MQ";
  override referencePrefix = "U";
}

/**
 * USB to SPI Protocol Converter with GPIO, SOIC-20
 *
 * KiCad symbol: `Interface_USB:MCP2210x-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22288A.pdf
 * Keywords: USB SPI Master Converter Bridge.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2210x_SO extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: OSC1; input. */
  "OSC1": "2",
  /** Physical pin 3: OSC2; output. */
  "OSC2": "3",
  /** Physical pin 4: ~{RST}; input. */
  "~{RST}": "4",
  /** Physical pin 5: GP0; bidirectional. */
  "GP0": "5",
  /** Physical pin 6: GP1; bidirectional. */
  "GP1": "6",
  /** Physical pin 7: GP2; bidirectional. */
  "GP2": "7",
  /** Physical pin 8: GP3; bidirectional. */
  "GP3": "8",
  /** Physical pin 9: MOSI; output. */
  "MOSI": "9",
  /** Physical pin 10: GP4; bidirectional. */
  "GP4": "10",
  /** Physical pin 11: SCK; output. */
  "SCK": "11",
  /** Physical pin 12: GP5; bidirectional. */
  "GP5": "12",
  /** Physical pin 13: MISO; input. */
  "MISO": "13",
  /** Physical pin 14: GP6; bidirectional. */
  "GP6": "14",
  /** Physical pin 15: GP7; bidirectional. */
  "GP7": "15",
  /** Physical pin 16: GP8; bidirectional. */
  "GP8": "16",
  /** Physical pin 17: VUSB; passive. */
  "VUSB": "17",
  /** Physical pin 18: D-; bidirectional. */
  "D-": "18",
  /** Physical pin 19: D+; bidirectional. */
  "D+": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
}) {
  override schema = "Interface_USB:MCP2210x-SO";
  override referencePrefix = "U";
}

/**
 * USB to SPI Protocol Converter with GPIO, SSOP-20
 *
 * KiCad symbol: `Interface_USB:MCP2210x-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22288A.pdf
 * Keywords: USB SPI Master Converter Bridge.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2210x_SS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: OSC1; input. */
  "OSC1": "2",
  /** Physical pin 3: OSC2; output. */
  "OSC2": "3",
  /** Physical pin 4: ~{RST}; input. */
  "~{RST}": "4",
  /** Physical pin 5: GP0; bidirectional. */
  "GP0": "5",
  /** Physical pin 6: GP1; bidirectional. */
  "GP1": "6",
  /** Physical pin 7: GP2; bidirectional. */
  "GP2": "7",
  /** Physical pin 8: GP3; bidirectional. */
  "GP3": "8",
  /** Physical pin 9: MOSI; output. */
  "MOSI": "9",
  /** Physical pin 10: GP4; bidirectional. */
  "GP4": "10",
  /** Physical pin 11: SCK; output. */
  "SCK": "11",
  /** Physical pin 12: GP5; bidirectional. */
  "GP5": "12",
  /** Physical pin 13: MISO; input. */
  "MISO": "13",
  /** Physical pin 14: GP6; bidirectional. */
  "GP6": "14",
  /** Physical pin 15: GP7; bidirectional. */
  "GP7": "15",
  /** Physical pin 16: GP8; bidirectional. */
  "GP8": "16",
  /** Physical pin 17: VUSB; passive. */
  "VUSB": "17",
  /** Physical pin 18: D-; bidirectional. */
  "D-": "18",
  /** Physical pin 19: D+; bidirectional. */
  "D+": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
}) {
  override schema = "Interface_USB:MCP2210x-SS";
  override referencePrefix = "U";
}

/**
 * USB to I2C/UART Protocol Converter with GPIO, QFN-16
 *
 * KiCad symbol: `Interface_USB:MCP2221AxML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005565B.pdf
 * Keywords: USB I2C UART Converter Bridge.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2221AxML extends Component.withPins({
  /** Physical pin 1: GP0; bidirectional. */
  "GP0": "1",
  /** Physical pin 2: GP1; bidirectional. */
  "GP1": "2",
  /** Physical pin 3: ~{RST}; input. */
  "~{RST}": "3",
  /** Physical pin 4: URx; input. */
  "URx": "4",
  /** Physical pin 5: UTx; output. */
  "UTx": "5",
  /** Physical pin 6: GP2; bidirectional. */
  "GP2": "6",
  /** Physical pin 7: GP3; bidirectional. */
  "GP3": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: SCL; bidirectional. */
  "SCL": "9",
  /** Physical pin 10: VUSB; passive. */
  "VUSB": "10",
  /** Physical pin 11: D-; bidirectional. */
  "D-": "11",
  /** Physical pin 12: D+; bidirectional. */
  "D+": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
}) {
  override schema = "Interface_USB:MCP2221AxML";
  override referencePrefix = "U";
}

/**
 * USB to I2C/UART Protocol Converter with GPIO, DIP-14
 *
 * KiCad symbol: `Interface_USB:MCP2221AxP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005565B.pdf
 * Keywords: USB I2C UART Converter Bridge.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2221AxP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GP0; bidirectional. */
  "GP0": "2",
  /** Physical pin 3: GP1; bidirectional. */
  "GP1": "3",
  /** Physical pin 4: ~{RST}; input. */
  "~{RST}": "4",
  /** Physical pin 5: URx; input. */
  "URx": "5",
  /** Physical pin 6: UTx; output. */
  "UTx": "6",
  /** Physical pin 7: GP2; bidirectional. */
  "GP2": "7",
  /** Physical pin 8: GP3; bidirectional. */
  "GP3": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; bidirectional. */
  "SCL": "10",
  /** Physical pin 11: VUSB; passive. */
  "VUSB": "11",
  /** Physical pin 12: D-; bidirectional. */
  "D-": "12",
  /** Physical pin 13: D+; bidirectional. */
  "D+": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS": "14",
}) {
  override schema = "Interface_USB:MCP2221AxP";
  override referencePrefix = "U";
}

/**
 * USB to I2C/UART Protocol Converter with GPIO, SOIC-14
 *
 * KiCad symbol: `Interface_USB:MCP2221AxSL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005565B.pdf
 * Keywords: USB I2C UART Converter Bridge.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2221AxSL extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GP0; bidirectional. */
  "GP0": "2",
  /** Physical pin 3: GP1; bidirectional. */
  "GP1": "3",
  /** Physical pin 4: ~{RST}; input. */
  "~{RST}": "4",
  /** Physical pin 5: URx; input. */
  "URx": "5",
  /** Physical pin 6: UTx; output. */
  "UTx": "6",
  /** Physical pin 7: GP2; bidirectional. */
  "GP2": "7",
  /** Physical pin 8: GP3; bidirectional. */
  "GP3": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; bidirectional. */
  "SCL": "10",
  /** Physical pin 11: VUSB; passive. */
  "VUSB": "11",
  /** Physical pin 12: D-; bidirectional. */
  "D-": "12",
  /** Physical pin 13: D+; bidirectional. */
  "D+": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS": "14",
}) {
  override schema = "Interface_USB:MCP2221AxSL";
  override referencePrefix = "U";
}

/**
 * USB to I2C/UART Protocol Converter with GPIO, TSSOP-14
 *
 * KiCad symbol: `Interface_USB:MCP2221AxST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005565B.pdf
 * Keywords: USB I2C UART Converter Bridge.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2221AxST extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GP0; bidirectional. */
  "GP0": "2",
  /** Physical pin 3: GP1; bidirectional. */
  "GP1": "3",
  /** Physical pin 4: ~{RST}; input. */
  "~{RST}": "4",
  /** Physical pin 5: URx; input. */
  "URx": "5",
  /** Physical pin 6: UTx; output. */
  "UTx": "6",
  /** Physical pin 7: GP2; bidirectional. */
  "GP2": "7",
  /** Physical pin 8: GP3; bidirectional. */
  "GP3": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; bidirectional. */
  "SCL": "10",
  /** Physical pin 11: VUSB; passive. */
  "VUSB": "11",
  /** Physical pin 12: D-; bidirectional. */
  "D-": "12",
  /** Physical pin 13: D+; bidirectional. */
  "D+": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS": "14",
}) {
  override schema = "Interface_USB:MCP2221AxST";
  override referencePrefix = "U";
}

/**
 * USB charging port controller integrating QC 2.0/3.0 anc BC1.2 Protocol, TSOT-23-8
 *
 * KiCad symbol: `Interface_USB:MP5034GJ`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.monolithicpower.com/en/documentview/productdocument/index/version/2/document_type/Datasheet/lang/en/sku/MP5034/
 * Keywords: USB Quick Charge.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MP5034GJ extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: IN; power_in. */
  "IN_2": "2",
  /** Physical pin 3: IN; passive. */
  "IN_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ADJ; passive. */
  "ADJ": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: DM; input. */
  "DM": "7",
  /** Physical pin 8: DP; input. */
  "DP": "8",
}) {
  override schema = "Interface_USB:MP5034GJ";
  override referencePrefix = "U";
}

/**
 * USB 3.0 HD Video Capture Chip, 24 MHz external clock, VQFN-64
 *
 * KiCad symbol: `Interface_USB:MS2130`. Reference prefix: `U`.
 * Footprint filters: *QFN*64*9x9mm*P0.5mm*EP5.7*x5.7*mm*.
 * @see https://gitlab.com/-/project/21610360/uploads/2311ee0b871d17f79670064b4b2f55bb/MS2130-MacroSilicon_KL-014-0010911.pdf
 * Keywords: HDMI-1.4b DVI-1.0 HDCP-1.4 I2C SPI UART.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.7x5.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MS2130 extends Component.withPins({
  /** Physical pin 1: DVDD33; power_in. */
  "DVDD33_1": "1",
  /** Physical pin 2: AVDD33_USB; power_in. */
  "AVDD33_USB_2": "2",
  /** Physical pin 3: DM; bidirectional. */
  "DM": "3",
  /** Physical pin 4: DP; bidirectional. */
  "DP": "4",
  /** Physical pin 5: AVDD33_USB; passive. */
  "AVDD33_USB_5": "5",
  /** Physical pin 6: AVDD11_USB; power_in. */
  "AVDD11_USB_6": "6",
  /** Physical pin 7: USB_REXT; output. */
  "USB_REXT": "7",
  /** Physical pin 8: AVDD33_USB; passive. */
  "AVDD33_USB_8": "8",
  /** Physical pin 9: SSTXM; output. */
  "SSTXM": "9",
  /** Physical pin 10: AVDD11_USB; passive. */
  "AVDD11_USB_10": "10",
  /** Physical pin 11: SSTXP; output. */
  "SSTXP": "11",
  /** Physical pin 12: AVDD11_USB; passive. */
  "AVDD11_USB_12": "12",
  /** Physical pin 13: SSRXM; input. */
  "SSRXM": "13",
  /** Physical pin 14: SSRXP; input. */
  "SSRXP": "14",
  /** Physical pin 15: AVSS; power_in. */
  "AVSS_15": "15",
  /** Physical pin 16: DVDD33; passive. */
  "DVDD33_16": "16",
  /** Physical pin 17: DVSS; power_in. */
  "DVSS_17": "17",
  /** Physical pin 18: DVDD11; power_in. */
  "DVDD11_18": "18",
  /** Physical pin 19: AVSS; passive. */
  "AVSS_19": "19",
  /** Physical pin 20: AVDD25; power_in. */
  "AVDD25_20": "20",
  /** Physical pin 21: XTIN; input. */
  "XTIN": "21",
  /** Physical pin 22: XTOUT; output. */
  "XTOUT": "22",
  /** Physical pin 23: AVDD25; passive. */
  "AVDD25_23": "23",
  /** Physical pin 24: AVDD11; power_in. */
  "AVDD11_24": "24",
  /** Physical pin 25: AVSS; passive. */
  "AVSS_25": "25",
  /** Physical pin 26: RXDDCSCL; input. */
  "RXDDCSCL": "26",
  /** Physical pin 27: RXDDCSDA; bidirectional. */
  "RXDDCSDA": "27",
  /** Physical pin 28: HDMIRXDET; input. */
  "HDMIRXDET": "28",
  /** Physical pin 29: HDMIRXHPD; output. */
  "HDMIRXHPD": "29",
  /** Physical pin 30: DVSS; passive. */
  "DVSS_30": "30",
  /** Physical pin 31: DVDD33; passive. */
  "DVDD33_31": "31",
  /** Physical pin 32: DVSS; passive. */
  "DVSS_32": "32",
  /** Physical pin 33: DVDD33; passive. */
  "DVDD33_33": "33",
  /** Physical pin 34: DVSS; passive. */
  "DVSS_34": "34",
  /** Physical pin 35: GPIO4; bidirectional. */
  "GPIO4": "35",
  /** Physical pin 36: GPIO3; bidirectional. */
  "GPIO3": "36",
  /** Physical pin 37: GPIO5; bidirectional. */
  "GPIO5": "37",
  /** Physical pin 38: GPIO2; bidirectional. */
  "GPIO2": "38",
  /** Physical pin 39: DVDD11; passive. */
  "DVDD11_39": "39",
  /** Physical pin 40: DVSS; passive. */
  "DVSS_40": "40",
  /** Physical pin 41: DVDD33; passive. */
  "DVDD33_41": "41",
  /** Physical pin 42: GPIO0; bidirectional. */
  "GPIO0": "42",
  /** Physical pin 43: GPIO1; bidirectional. */
  "GPIO1": "43",
  /** Physical pin 44: MCU_SEL; input. */
  "MCU_SEL": "44",
  /** Physical pin 45: HDMIRX_REXT; output. */
  "HDMIRX_REXT": "45",
  /** Physical pin 46: HDMIRXCN; input. */
  "HDMIRXCN": "46",
  /** Physical pin 47: AVDD25; passive. */
  "AVDD25_47": "47",
  /** Physical pin 48: AVDD33; power_in. */
  "AVDD33_48": "48",
  /** Physical pin 49: HDMIRXCP; input. */
  "HDMIRXCP": "49",
  /** Physical pin 50: AVSS; passive. */
  "AVSS_50": "50",
  /** Physical pin 51: AVDD11; passive. */
  "AVDD11_51": "51",
  /** Physical pin 52: AVDD33; passive. */
  "AVDD33_52": "52",
  /** Physical pin 53: HDMIRX0N; input. */
  "HDMIRX0N": "53",
  /** Physical pin 54: HDMIRX0P; input. */
  "HDMIRX0P": "54",
  /** Physical pin 55: AVDD11; passive. */
  "AVDD11_55": "55",
  /** Physical pin 56: AVDD33; passive. */
  "AVDD33_56": "56",
  /** Physical pin 57: HDMIRX1N; input. */
  "HDMIRX1N": "57",
  /** Physical pin 58: HDMIRX1P; input. */
  "HDMIRX1P": "58",
  /** Physical pin 59: AVDD11; passive. */
  "AVDD11_59": "59",
  /** Physical pin 60: AVDD33; passive. */
  "AVDD33_60": "60",
  /** Physical pin 61: HDMIRX2N; input. */
  "HDMIRX2N": "61",
  /** Physical pin 62: HDMIRX2P; input. */
  "HDMIRX2P": "62",
  /** Physical pin 63: DVO_D7; output. */
  "DVO_D7": "63",
  /** Physical pin 64: DVSS; passive. */
  "DVSS_64": "64",
  /** Physical pin 65: AVSS; passive. */
  "AVSS_65": "65",
}) {
  override schema = "Interface_USB:MS2130";
  override referencePrefix = "U";
}

/**
 * High-speed USB On-The-Go ULPI transceiver
 *
 * KiCad symbol: `Interface_USB:STULPI01A`. Reference prefix: `U`.
 * Footprint filters: ST*uTFBGA*3.6x3.6mm*Layout6x6*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stulpi01a.pdf
 * Keywords: USB OTG HS PHY ULPI Interface.
 * Default footprint: Package_BGA:ST_uTFBGA-36_3.6x3.6mm_Layout6x6_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STULPI01A extends Component.withPins({
  /** Physical pin A1: D1; bidirectional. */
  "D1": "A1",
  /** Physical pin A2: D2; bidirectional. */
  "D2": "A2",
  /** Physical pin A3: D3; bidirectional. */
  "D3": "A3",
  /** Physical pin A4: CLK; output. */
  "CLK": "A4",
  /** Physical pin A5: D4; bidirectional. */
  "D4": "A5",
  /** Physical pin A6: D5; bidirectional. */
  "D5": "A6",
  /** Physical pin B1: D0; bidirectional. */
  "D0": "B1",
  /** Physical pin B2: VDVIO; power_in. */
  "VDVIO_B2": "B2",
  /** Physical pin B3: VDVIO; passive. */
  "VDVIO_B3": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin B5: VDVIO; passive. */
  "VDVIO_B5": "B5",
  /** Physical pin B6: D6; bidirectional. */
  "D6": "B6",
  /** Physical pin C1: DM; bidirectional. */
  "DM": "C1",
  /** Physical pin C2: RREF; passive. */
  "RREF": "C2",
  /** Physical pin C3: ~{CS}/PWRDN; input. */
  "~{CS}/PWRDN": "C3",
  /** Physical pin C4: ~{RESET}; input. */
  "~{RESET}": "C4",
  /** Physical pin C5: GND; passive. */
  "GND_C5": "C5",
  /** Physical pin C6: D7; bidirectional. */
  "D7": "C6",
  /** Physical pin D1: DP; bidirectional. */
  "DP": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: ID; input. */
  "ID": "D3",
  /** Physical pin D4: ~{PSW}; output. */
  "~{PSW}": "D4",
  /** Physical pin D5: NXT; output. */
  "NXT": "D5",
  /** Physical pin D6: STP; input. */
  "STP": "D6",
  /** Physical pin E1: GND; passive. */
  "GND_E1": "E1",
  /** Physical pin E2: VB_REF_FAULT; input. */
  "VB_REF_FAULT": "E2",
  /** Physical pin E3: 3V3V; passive. */
  "3V3V": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: DIR; output. */
  "DIR": "E5",
  /** Physical pin E6: 1V2V; passive. */
  "1V2V": "E6",
  /** Physical pin F1: NC; no_connect. */
  "NC_F1": "F1",
  /** Physical pin F2: NC; no_connect. */
  "NC_F2": "F2",
  /** Physical pin F3: VBAT; power_in. */
  "VBAT": "F3",
  /** Physical pin F4: VBUS; bidirectional. */
  "VBUS": "F4",
  /** Physical pin F5: XI; input. */
  "XI": "F5",
  /** Physical pin F6: XO; output. */
  "XO": "F6",
}) {
  override schema = "Interface_USB:STULPI01A";
  override referencePrefix = "U";
}

/**
 * High-speed USB On-The-Go ULPI transceiver
 *
 * KiCad symbol: `Interface_USB:STULPI01B`. Reference prefix: `U`.
 * Footprint filters: ST*uTFBGA*3.6x3.6mm*Layout6x6*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stulpi01b.pdf
 * Keywords: USB OTG HS PHY ULPI Interface.
 * Default footprint: Package_BGA:ST_uTFBGA-36_3.6x3.6mm_Layout6x6_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STULPI01B extends Component.withPins({
  /** Physical pin A1: D1; bidirectional. */
  "D1": "A1",
  /** Physical pin A2: D2; bidirectional. */
  "D2": "A2",
  /** Physical pin A3: D3; bidirectional. */
  "D3": "A3",
  /** Physical pin A4: CLK; output. */
  "CLK": "A4",
  /** Physical pin A5: D4; bidirectional. */
  "D4": "A5",
  /** Physical pin A6: D5; bidirectional. */
  "D5": "A6",
  /** Physical pin B1: D0; bidirectional. */
  "D0": "B1",
  /** Physical pin B2: VDVIO; power_in. */
  "VDVIO_B2": "B2",
  /** Physical pin B3: VDVIO; passive. */
  "VDVIO_B3": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin B5: VDVIO; passive. */
  "VDVIO_B5": "B5",
  /** Physical pin B6: D6; bidirectional. */
  "D6": "B6",
  /** Physical pin C1: DM; bidirectional. */
  "DM": "C1",
  /** Physical pin C2: RREF; passive. */
  "RREF": "C2",
  /** Physical pin C3: ~{CS}/PWRDN; input. */
  "~{CS}/PWRDN": "C3",
  /** Physical pin C4: ~{RESET}; input. */
  "~{RESET}": "C4",
  /** Physical pin C5: GND; passive. */
  "GND_C5": "C5",
  /** Physical pin C6: D7; bidirectional. */
  "D7": "C6",
  /** Physical pin D1: DP; bidirectional. */
  "DP": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: ID; input. */
  "ID": "D3",
  /** Physical pin D4: ~{PSW}; output. */
  "~{PSW}": "D4",
  /** Physical pin D5: NXT; output. */
  "NXT": "D5",
  /** Physical pin D6: STP; input. */
  "STP": "D6",
  /** Physical pin E1: GND; passive. */
  "GND_E1": "E1",
  /** Physical pin E2: VB_REF_FAULT; input. */
  "VB_REF_FAULT": "E2",
  /** Physical pin E3: 3V3V; passive. */
  "3V3V": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E5: DIR; output. */
  "DIR": "E5",
  /** Physical pin E6: 1V2V; passive. */
  "1V2V": "E6",
  /** Physical pin F1: NC; no_connect. */
  "NC_F1": "F1",
  /** Physical pin F2: NC; no_connect. */
  "NC_F2": "F2",
  /** Physical pin F3: VBAT; power_in. */
  "VBAT": "F3",
  /** Physical pin F4: VBUS; bidirectional. */
  "VBUS": "F4",
  /** Physical pin F5: XI; input. */
  "XI": "F5",
  /** Physical pin F6: XO; output. */
  "XO": "F6",
}) {
  override schema = "Interface_USB:STULPI01B";
  override referencePrefix = "U";
}

/**
 * Stand-alone USB PD controller (with sink Auto-run mode), QFN-24
 *
 * KiCad symbol: `Interface_USB:STUSB4500QTR`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stusb4500.pdf
 * Keywords: USB PD Type C Sink.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STUSB4500QTR extends Component.withPins({
  /** Physical pin 1: CC1DB; bidirectional. */
  "CC1DB": "1",
  /** Physical pin 2: CC1; bidirectional. */
  "CC1": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: CC2; bidirectional. */
  "CC2": "4",
  /** Physical pin 5: CC2DB; bidirectional. */
  "CC2DB": "5",
  /** Physical pin 6: RESET; input. */
  "RESET": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: DISCH; bidirectional. */
  "DISCH": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: ATTACH; open_collector. */
  "ATTACH": "11",
  /** Physical pin 12: ADDR0; input. */
  "ADDR0": "12",
  /** Physical pin 13: ADDR1; input. */
  "ADDR1": "13",
  /** Physical pin 14: POWER_OK3; open_collector. */
  "POWER_OK3": "14",
  /** Physical pin 15: GPIO; open_collector. */
  "GPIO": "15",
  /** Physical pin 16: VBUS_EN_SNK; open_collector. */
  "VBUS_EN_SNK": "16",
  /** Physical pin 17: A_B_SIDE; open_collector. */
  "A_B_SIDE": "17",
  /** Physical pin 18: VBUS_VS_DISCH; input. */
  "VBUS_VS_DISCH": "18",
  /** Physical pin 19: ALERT; open_collector. */
  "ALERT": "19",
  /** Physical pin 20: POWER_OK2; open_collector. */
  "POWER_OK2": "20",
  /** Physical pin 21: VREG_1V2; power_out. */
  "VREG_1V2": "21",
  /** Physical pin 22: VSYS; power_in. */
  "VSYS": "22",
  /** Physical pin 23: VREG_2V7; power_out. */
  "VREG_2V7": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_USB:STUSB4500QTR";
  override referencePrefix = "U";
}

/**
 * USB-PD 3.1 controller with protection, Dual Role Power (DRP), OCP, OVP, WQFN-20
 *
 * KiCad symbol: `Interface_USB:TCPP03-M20`. Reference prefix: `U`.
 * Footprint filters: *4x4mm?P0.5mm?EP2.1*x2.1*mm*.
 * @see https://www.st.com/resource/en/datasheet/tcpp03-m20.pdf
 * Keywords: STMicroelectronics I2C ESD USB-C USB-Power-Delivery PPS.
 * Default footprint: Package_DFN_QFN:TQFN-20-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCPP03_M20 extends Component.withPins({
  /** Physical pin 1: CC1; bidirectional. */
  "CC1": "1",
  /** Physical pin 2: VCC_{VCONN}; power_in. */
  "VCC_{VCONN}": "2",
  /** Physical pin 3: CC2; bidirectional. */
  "CC2": "3",
  /** Physical pin 4: I_{ANA}; output. */
  "I_{ANA}": "4",
  /** Physical pin 5: GDP_{g}; output. */
  "GDP_{g}": "5",
  /** Physical pin 6: GDP_{s}; input. */
  "GDP_{s}": "6",
  /** Physical pin 7: GDC_{g}; output. */
  "GDC_{g}": "7",
  /** Physical pin 8: GDC_{s}; input. */
  "GDC_{s}": "8",
  /** Physical pin 9: VBUS_{c}; input. */
  "VBUS_{c}": "9",
  /** Physical pin 10: I_{sense}; input. */
  "I_{sense}": "10",
  /** Physical pin 11: V_{sense}; input. */
  "V_{sense}": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: CC2_{c}; bidirectional. */
  "CC2_{c}": "13",
  /** Physical pin 14: C_{BIAS}; output. */
  "C_{BIAS}": "14",
  /** Physical pin 15: CC1_{c}; bidirectional. */
  "CC1_{c}": "15",
  /** Physical pin 16: I2C_{ADD}; input. */
  "I2C_{ADD}": "16",
  /** Physical pin 17: SDA; bidirectional. */
  "SDA": "17",
  /** Physical pin 18: SCL; bidirectional. */
  "SCL": "18",
  /** Physical pin 19: ~{FLG}; open_collector. */
  "~{FLG}": "19",
  /** Physical pin 20: EN; input. */
  "EN": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "Interface_USB:TCPP03-M20";
  override referencePrefix = "U";
}

/**
 * Integrated USB power Switch with Boost Converter, High-Efficiency Eco-mode Control Scheme, Texas S-PVSON-10
 *
 * KiCad symbol: `Interface_USB:TPS2500DRC`. Reference prefix: `U`.
 * Footprint filters: Texas*S*PVSON*N10*.
 * @see http://www.ti.com/lit/ds/symlink/tps2500.pdf
 * Keywords: USB switch boost.
 * Default footprint: Package_SON:Texas_S-PVSON-N10.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2500DRC extends Component.withPins({
  /** Physical pin 1: SW; power_in. */
  "SW": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: IN; power_in. */
  "IN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: ILIM; passive. */
  "ILIM": "6",
  /** Physical pin 7: ENUSB; input. */
  "ENUSB": "7",
  /** Physical pin 8: ~{FAULT}; open_collector. */
  "~{FAULT}": "8",
  /** Physical pin 9: USB; power_out. */
  "USB": "9",
  /** Physical pin 10: AUX; power_out. */
  "AUX": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Interface_USB:TPS2500DRC";
  override referencePrefix = "U";
}

/**
 * Integrated USB power Switch with Boost Converter, Constant Frequency, Texas S-PVSON-10
 *
 * KiCad symbol: `Interface_USB:TPS2501DRC`. Reference prefix: `U`.
 * Footprint filters: Texas*S*PVSON*N10*.
 * @see http://www.ti.com/lit/ds/symlink/tps2500.pdf
 * Keywords: USB switch boost.
 * Default footprint: Package_SON:Texas_S-PVSON-N10.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2501DRC extends Component.withPins({
  /** Physical pin 1: SW; power_in. */
  "SW": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: IN; power_in. */
  "IN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: ILIM; passive. */
  "ILIM": "6",
  /** Physical pin 7: ENUSB; input. */
  "ENUSB": "7",
  /** Physical pin 8: ~{FAULT}; open_collector. */
  "~{FAULT}": "8",
  /** Physical pin 9: USB; power_out. */
  "USB": "9",
  /** Physical pin 10: AUX; power_out. */
  "AUX": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Interface_USB:TPS2501DRC";
  override referencePrefix = "U";
}

/**
 * USB Dedicated Charging Port Controller
 *
 * KiCad symbol: `Interface_USB:TPS2513`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps2513.pdf
 * Keywords: USB Charge.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2513 extends Component.withPins({
  /** Physical pin 1: DP1; input. */
  "DP1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: DP2; input. */
  "DP2": "3",
  /** Physical pin 4: DM2; input. */
  "DM2": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
  /** Physical pin 6: DM1; input. */
  "DM1": "6",
}) {
  override schema = "Interface_USB:TPS2513";
  override referencePrefix = "U";
}

/**
 * USB Dedicated Charging Port Controller
 *
 * KiCad symbol: `Interface_USB:TPS2513A`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps2513.pdf
 * Keywords: USB Charge.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2513A extends Component.withPins({
  /** Physical pin 1: DP1; input. */
  "DP1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: DP2; input. */
  "DP2": "3",
  /** Physical pin 4: DM2; input. */
  "DM2": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
  /** Physical pin 6: DM1; input. */
  "DM1": "6",
}) {
  override schema = "Interface_USB:TPS2513A";
  override referencePrefix = "U";
}

/**
 * USB Dedicated Charging Port Controller
 *
 * KiCad symbol: `Interface_USB:TPS2514`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps2513.pdf
 * Keywords: USB Charge.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2514 extends Component.withPins({
  /** Physical pin 1: DP1; input. */
  "DP1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
  /** Physical pin 6: DM1; input. */
  "DM1": "6",
}) {
  override schema = "Interface_USB:TPS2514";
  override referencePrefix = "U";
}

/**
 * USB Dedicated Charging Port Controller
 *
 * KiCad symbol: `Interface_USB:TPS2514A`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps2513.pdf
 * Keywords: USB Charge.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2514A extends Component.withPins({
  /** Physical pin 1: DP1; input. */
  "DP1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: IN; power_in. */
  "IN": "5",
  /** Physical pin 6: DM1; input. */
  "DM1": "6",
}) {
  override schema = "Interface_USB:TPS2514A";
  override referencePrefix = "U";
}

/**
 * Dual channel precision adjustable current-limited power switches
 *
 * KiCad symbol: `Interface_USB:TPS2560`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2560.pdf
 * Keywords: power switche current limited usb port.
 * Default footprint: Package_SON:VSON-10-1EP_3x3mm_P0.5mm_EP1.65x2.4mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2560 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; power_in. */
  "IN_2": "2",
  /** Physical pin 3: IN; power_in. */
  "IN_3": "3",
  /** Physical pin 4: EN1; input. */
  "EN1": "4",
  /** Physical pin 5: EN2; input. */
  "EN2": "5",
  /** Physical pin 6: ~{FAULT2}; output. */
  "~{FAULT2}": "6",
  /** Physical pin 7: ILM; output. */
  "ILM": "7",
  /** Physical pin 8: OUT2; output. */
  "OUT2": "8",
  /** Physical pin 9: OUT1; output. */
  "OUT1": "9",
  /** Physical pin 10: ~{FAULT1}; output. */
  "~{FAULT1}": "10",
  /** Physical pin 11: PAD; power_in. */
  "PAD": "11",
}) {
  override schema = "Interface_USB:TPS2560";
  override referencePrefix = "U";
}

/**
 * Dual channel precision adjustable current-limited power switches
 *
 * KiCad symbol: `Interface_USB:TPS2561`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps2561.pdf
 * Keywords: power switche current limited usb port.
 * Default footprint: Package_SON:VSON-10-1EP_3x3mm_P0.5mm_EP1.65x2.4mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2561 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; power_in. */
  "IN_2": "2",
  /** Physical pin 3: IN; power_in. */
  "IN_3": "3",
  /** Physical pin 4: EN1; input. */
  "EN1": "4",
  /** Physical pin 5: EN2; input. */
  "EN2": "5",
  /** Physical pin 6: ~{FAULT2}; output. */
  "~{FAULT2}": "6",
  /** Physical pin 7: ILM; output. */
  "ILM": "7",
  /** Physical pin 8: OUT2; output. */
  "OUT2": "8",
  /** Physical pin 9: OUT1; output. */
  "OUT1": "9",
  /** Physical pin 10: ~{FAULT1}; output. */
  "~{FAULT1}": "10",
  /** Physical pin 11: PAD; power_in. */
  "PAD": "11",
}) {
  override schema = "Interface_USB:TPS2561";
  override referencePrefix = "U";
}

/**
 * USB Type-C and USB PD Controller, Integrated Power Switches, QFN-38
 *
 * KiCad symbol: `Interface_USB:TPS25730D`. Reference prefix: `U`.
 * Footprint filters: Texas*REF0038A*WQFN*38*.
 * @see https://www.ti.com/lit/ds/symlink/tps25730.pdf
 * Keywords: USB CC PD.
 * Default footprint: Package_DFN_QFN:Texas_REF0038A_WQFN-38-2EP_6x4mm_P0.4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS25730D extends Component.withPins({
  /** Physical pin 1: LDO_3V3; power_out. */
  "LDO_3V3": "1",
  /** Physical pin 2: ADCIN1; input. */
  "ADCIN1": "2",
  /** Physical pin 3: ADCIN2; input. */
  "ADCIN2": "3",
  /** Physical pin 4: LDO_1V5; output. */
  "LDO_1V5": "4",
  /** Physical pin 5: ADCIN3; input. */
  "ADCIN3": "5",
  /** Physical pin 6: CAP_MIS; open_collector. */
  "CAP_MIS": "6",
  /** Physical pin 7: ADCIN4; input. */
  "ADCIN4": "7",
  /** Physical pin 8: I2Ct_SDA; bidirectional. */
  "I2Ct_SDA": "8",
  /** Physical pin 9: I2Ct_SCL; input. */
  "I2Ct_SCL": "9",
  /** Physical pin 10: DBG_ACC; open_collector. */
  "DBG_ACC": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PLUG_FLIP; open_collector. */
  "PLUG_FLIP": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: DRAIN; passive. */
  "DRAIN_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: ~{FAULT_IN}; input. */
  "~{FAULT_IN}": "18",
  /** Physical pin 19: ~{SINK_EN}; open_collector. */
  "~{SINK_EN}": "19",
  /** Physical pin 20: PPHV; bidirectional. */
  "PPHV": "20",
  /** Physical pin 23: VBUS_IN; power_in. */
  "VBUS_IN": "23",
  /** Physical pin 26: RESERVED; input. */
  "RESERVED_26": "26",
  /** Physical pin 27: RESERVED; input. */
  "RESERVED_27": "27",
  /** Physical pin 28: CC1; bidirectional. */
  "CC1": "28",
  /** Physical pin 29: CC2; bidirectional. */
  "CC2": "29",
  /** Physical pin 30: DRAIN; passive. */
  "DRAIN_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBUS; power_in. */
  "VBUS": "32",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 36: RESERVED; input. */
  "RESERVED_36": "36",
  /** Physical pin 37: PLUG_EVENT; open_collector. */
  "PLUG_EVENT": "37",
  /** Physical pin 38: VIN_3V3; power_in. */
  "VIN_3V3": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: DRAIN; passive. */
  "DRAIN_40": "40",
}) {
  override schema = "Interface_USB:TPS25730D";
  override referencePrefix = "U";
}

/**
 * USB-C / USB-PD 3.2 controller, moisture detection, programmable power-supply, WQFN-38
 *
 * KiCad symbol: `Interface_USB:TPS25751D`. Reference prefix: `U`.
 * Footprint filters: Texas?REF0038A?WQFN*2EP?6x4mm?P0.4*.
 * @see https://www.ti.com/lit/gpn/tps25751
 * Keywords: USB-Type-C USB-Power-Delivery Integrated-Power-Switches.
 * Default footprint: Package_DFN_QFN:Texas_REF0038A_WQFN-38-2EP_6x4mm_P0.4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS25751D extends Component.withPins({
  /** Physical pin 1: LDO_3V3; power_out. */
  "LDO_3V3": "1",
  /** Physical pin 2: ADCIN1; input. */
  "ADCIN1": "2",
  /** Physical pin 3: ADCIN2; input. */
  "ADCIN2": "3",
  /** Physical pin 4: LDO_1V5; power_out. */
  "LDO_1V5": "4",
  /** Physical pin 5: GPIO0; bidirectional. */
  "GPIO0": "5",
  /** Physical pin 6: GPIO1; bidirectional. */
  "GPIO1": "6",
  /** Physical pin 7: GPIO2; bidirectional. */
  "GPIO2": "7",
  /** Physical pin 8: I2Ct_SDA; bidirectional. */
  "I2Ct_SDA": "8",
  /** Physical pin 9: I2Ct_SCL; input. */
  "I2Ct_SCL": "9",
  /** Physical pin 10: ~{I2Ct_IRQ}; open_collector. */
  "~{I2Ct_IRQ}": "10",
  /** Physical pin 13: GPIO11; output. */
  "GPIO11": "13",
  /** Physical pin 16: I2Cc_SDA; bidirectional. */
  "I2Cc_SDA": "16",
  /** Physical pin 17: I2Cc_SCL; open_collector. */
  "I2Cc_SCL": "17",
  /** Physical pin 18: ~{I2Cc_IRQ}; input. */
  "~{I2Cc_IRQ}": "18",
  /** Physical pin 19: GPIO3; bidirectional. */
  "GPIO3": "19",
  /** Physical pin 20: PPHV; power_in. */
  "PPHV": "20",
  /** Physical pin 23: VBUS_IN; power_in. */
  "VBUS_IN": "23",
  /** Physical pin 26: GPIO4; bidirectional. */
  "GPIO4": "26",
  /** Physical pin 27: GPIO5; bidirectional. */
  "GPIO5": "27",
  /** Physical pin 28: CC1; bidirectional. */
  "CC1": "28",
  /** Physical pin 29: CC2; bidirectional. */
  "CC2": "29",
  /** Physical pin 32: VBUS; power_out. */
  "VBUS": "32",
  /** Physical pin 34: PP5V; power_in. */
  "PP5V": "34",
  /** Physical pin 36: GPIO7; bidirectional. */
  "GPIO7": "36",
  /** Physical pin 37: GPIO6; bidirectional. */
  "GPIO6": "37",
  /** Physical pin 38: VIN_3V3; power_in. */
  "VIN_3V3": "38",
  /** Physical pin 40: DRAIN_EP; passive. */
  "DRAIN_EP": "40",
  /** Physical pin [11,12,14,31,39]: GND; power_in. */
  "GND": "[11,12,14,31,39]",
  /** Physical pin [15,30]: DRAIN; passive. */
  "DRAIN": "[15,30]",
}) {
  override schema = "Interface_USB:TPS25751D";
  override referencePrefix = "U";
}

/**
 * USB Type-C DFP Controller, integrated Power Switch, Load Detection, WQFN-20 (Texas RVC0020A)
 *
 * KiCad symbol: `Interface_USB:TPS25810RVC`. Reference prefix: `U`.
 * Footprint filters: *QFN*3x4mm?P0.5mm?EP1.6*x2.6*mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps25810.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_DFN_QFN:Texas_RVC0020A_WQFN-20-1EP_3x4mm_P0.5mm_EP1.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS25810RVC extends Component.withPins({
  /** Physical pin 1: ~{FAULT}; open_collector. */
  "~{FAULT}": "1",
  /** Physical pin 2: IN1; power_in. */
  "IN1_2": "2",
  /** Physical pin 3: IN1; passive. */
  "IN1_3": "3",
  /** Physical pin 4: IN2; power_in. */
  "IN2": "4",
  /** Physical pin 5: AUX; power_in. */
  "AUX": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
  /** Physical pin 7: CHG; input. */
  "CHG": "7",
  /** Physical pin 8: CHG_HI; input. */
  "CHG_HI": "8",
  /** Physical pin 9: REF_RTN; passive. */
  "REF_RTN": "9",
  /** Physical pin 10: REF; output. */
  "REF": "10",
  /** Physical pin 11: CC1; bidirectional. */
  "CC1": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: CC2; bidirectional. */
  "CC2": "13",
  /** Physical pin 14: OUT; power_out. */
  "OUT_14": "14",
  /** Physical pin 15: OUT; passive. */
  "OUT_15": "15",
  /** Physical pin 16: ~{DEBUG}; open_collector. */
  "~{DEBUG}": "16",
  /** Physical pin 17: ~{AUDIO}; open_collector. */
  "~{AUDIO}": "17",
  /** Physical pin 18: ~{POL}; open_collector. */
  "~{POL}": "18",
  /** Physical pin 19: ~{UFP}; open_collector. */
  "~{UFP}": "19",
  /** Physical pin 20: ~{LD_DET}; open_collector. */
  "~{LD_DET}": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "Interface_USB:TPS25810RVC";
  override referencePrefix = "U";
}

/**
 * ESD-Protected, High-Speed USB 2.0 (480-Mbps) 1:2 Multiplexer/Demultiplexer Switch With Single Enable, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Interface_USB:TS3USB30EDGSR`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ts3usb30e.pdf
 * Keywords: usb mux.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TS3USB30EDGSR extends Component.withPins({
  /** Physical pin 1: S; input. */
  "S": "1",
  /** Physical pin 2: D1+; bidirectional. */
  "D1+": "2",
  /** Physical pin 3: D2+; bidirectional. */
  "D2+": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: D-; bidirectional. */
  "D-": "6",
  /** Physical pin 7: D2-; bidirectional. */
  "D2-": "7",
  /** Physical pin 8: D1-; bidirectional. */
  "D1-": "8",
  /** Physical pin 9: ~{OE}; input. */
  "~{OE}": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Interface_USB:TS3USB30EDGSR";
  override referencePrefix = "U";
}

/**
 * ESD-Protected, High-Speed USB 2.0 (480-Mbps) 1:2 Multiplexer/Demultiplexer Switch With Single Enable, UQFN-10
 *
 * KiCad symbol: `Interface_USB:TS3USB30ERSWR`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.4x1.8mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/ts3usb30e.pdf
 * Keywords: usb mux.
 * Default footprint: Package_DFN_QFN:UQFN-10_1.4x1.8mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TS3USB30ERSWR extends Component.withPins({
  /** Physical pin 1: D1+; bidirectional. */
  "D1+": "1",
  /** Physical pin 2: D2+; bidirectional. */
  "D2+": "2",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: D2-; bidirectional. */
  "D2-": "6",
  /** Physical pin 7: D1-; bidirectional. */
  "D1-": "7",
  /** Physical pin 8: ~{OE}; input. */
  "~{OE}": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: S; input. */
  "S": "10",
}) {
  override schema = "Interface_USB:TS3USB30ERSWR";
  override referencePrefix = "U";
}

/**
 * USB Type-C, SBU 3:1 multiplexer, 500MHz bandwidth, UQFN-16
 *
 * KiCad symbol: `Interface_USB:TS3USBCA410`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.8x2.6mm*P0.4mm*.
 * @see https://www.ti.com/lit/gpn/ts3usbca4
 * Keywords: Texas usb-c mux i2c aux analog audio microphone uart debug.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TS3USBCA410 extends Component.withPins({
  /** Physical pin 7: LnBp; passive. */
  "LnBp": "7",
  /** Physical pin 8: LnBn; passive. */
  "LnBn": "8",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MIC_GND1/Ln1; passive. */
  "MIC_GND1/Ln1": "2",
  /** Physical pin 3: MIC_GND2/Ln2; passive. */
  "MIC_GND2/Ln2": "3",
  /** Physical pin 4: ~{OE}; input. */
  "~{OE}": "4",
  /** Physical pin 5: SEL1/SCL; input. */
  "SEL1/SCL": "5",
  /** Physical pin 6: SEL0/SDA; bidirectional. */
  "SEL0/SDA": "6",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: SBU2; passive. */
  "SBU2": "10",
  /** Physical pin 11: SBU1; passive. */
  "SBU1": "11",
  /** Physical pin 12: I2C_EN; input. */
  "I2C_EN": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: FLIP; input. */
  "FLIP": "14",
  /** Physical pin 15: LnAn; passive. */
  "LnAn": "15",
  /** Physical pin 16: LnAp; passive. */
  "LnAp": "16",
}) {
  override schema = "Interface_USB:TS3USBCA410";
  override referencePrefix = "U";
}

/**
 * USB Type-C, SBU 4:1 multiplexer, 500MHz bandwidth, UQFN-16
 *
 * KiCad symbol: `Interface_USB:TS3USBCA420`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.8x2.6mm*P0.4mm*.
 * @see https://www.ti.com/lit/gpn/ts3usbca4
 * Keywords: Texas usb-c mux i2c aux analog audio microphone uart debug.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TS3USBCA420 extends Component.withPins({
  /** Physical pin 7: LnBp; passive. */
  "LnBp": "7",
  /** Physical pin 8: LnBn; passive. */
  "LnBn": "8",
  /** Physical pin 13: LnCn; passive. */
  "LnCn": "13",
  /** Physical pin 14: LnCp; passive. */
  "LnCp": "14",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MIC_GND1/Ln1; passive. */
  "MIC_GND1/Ln1": "2",
  /** Physical pin 3: MIC_GND2/Ln2; passive. */
  "MIC_GND2/Ln2": "3",
  /** Physical pin 4: ~{OE}; input. */
  "~{OE}": "4",
  /** Physical pin 5: SEL1/SCL; input. */
  "SEL1/SCL": "5",
  /** Physical pin 6: SEL0/SDA; bidirectional. */
  "SEL0/SDA": "6",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: SBU2; passive. */
  "SBU2": "10",
  /** Physical pin 11: SBU1; passive. */
  "SBU1": "11",
  /** Physical pin 12: I2C_EN; input. */
  "I2C_EN": "12",
  /** Physical pin 15: LnAn; passive. */
  "LnAn": "15",
  /** Physical pin 16: LnAp; passive. */
  "LnAp": "16",
}) {
  override schema = "Interface_USB:TS3USBCA420";
  override referencePrefix = "U";
}

/**
 * 2- or 3-Port USB1.1 HUB with optional serial EEPROM
 *
 * KiCad symbol: `Interface_USB:TUSB2036`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see http://www.ti.com/lit/ds/symlink/tusb2036.pdf
 * Keywords: 2-Port, 3-Port, 3.3V, EEPROM, Full Speed, Hub, Texas Instruments, USB1.1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB2036 extends Component.withPins({
  /** Physical pin 1: DP0; bidirectional. */
  "DP0": "1",
  /** Physical pin 2: DM0; bidirectional. */
  "DM0": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC_3": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: EECLK; tri_state. */
  "EECLK": "5",
  /** Physical pin 6: EEDATA/~{GANGED}; bidirectional. */
  "EEDATA/~{GANGED}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: ~{BUSPWR}; input. */
  "~{BUSPWR}": "8",
  /** Physical pin 9: ~{PWRON1}; output. */
  "~{PWRON1}": "9",
  /** Physical pin 10: ~{OVRCUR1}; input. */
  "~{OVRCUR1}": "10",
  /** Physical pin 11: DM1; bidirectional. */
  "DM1": "11",
  /** Physical pin 12: DP1; bidirectional. */
  "DP1": "12",
  /** Physical pin 13: ~{PWRON2}; output. */
  "~{PWRON2}": "13",
  /** Physical pin 14: ~{OVRCUR2}; input. */
  "~{OVRCUR2}": "14",
  /** Physical pin 15: DM2; bidirectional. */
  "DM2": "15",
  /** Physical pin 16: DP2; bidirectional. */
  "DP2": "16",
  /** Physical pin 17: ~{PWRON3}; output. */
  "~{PWRON3}": "17",
  /** Physical pin 18: ~{OVRCUR3}; input. */
  "~{OVRCUR3}": "18",
  /** Physical pin 19: DM3; bidirectional. */
  "DM3": "19",
  /** Physical pin 20: DP3; bidirectional. */
  "DP3": "20",
  /** Physical pin 21: ~{OCPROT}/~{PWRSW}; input. */
  "~{OCPROT}/~{PWRSW}": "21",
  /** Physical pin 22: NPINT0; input. */
  "NPINT0": "22",
  /** Physical pin 23: NPINT1; input. */
  "NPINT1": "23",
  /** Physical pin 24: ~{NP3}; input. */
  "~{NP3}": "24",
  /** Physical pin 25: VCC; power_in. */
  "VCC_25": "25",
  /** Physical pin 26: ~{EXTMEM}; input. */
  "~{EXTMEM}": "26",
  /** Physical pin 27: DP0PUR; output. */
  "DP0PUR": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: XTAL2; output. */
  "XTAL2": "29",
  /** Physical pin 30: XTAL1/CLK48; input. */
  "XTAL1/CLK48": "30",
  /** Physical pin 31: MODE; input. */
  "MODE": "31",
  /** Physical pin 32: SUSPND; output. */
  "SUSPND": "32",
}) {
  override schema = "Interface_USB:TUSB2036";
  override referencePrefix = "U";
}

/**
 * USB Type-C Configuration Channel Logic and Port Control, X2QFN-12
 *
 * KiCad symbol: `Interface_USB:TUSB320`. Reference prefix: `U`.
 * Footprint filters: Texas?X2QFN*1.6x1.6mm*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/tusb320.pdf
 * Keywords: USB PD CC.
 * Default footprint: Package_DFN_QFN:Texas_X2QFN-12_1.6x1.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB320 extends Component.withPins({
  /** Physical pin 1: CC1; bidirectional. */
  "CC1": "1",
  /** Physical pin 2: CC2; bidirectional. */
  "CC2": "2",
  /** Physical pin 3: PORT; input. */
  "PORT": "3",
  /** Physical pin 4: VBUS_DET; input. */
  "VBUS_DET": "4",
  /** Physical pin 5: ADDR; input. */
  "ADDR": "5",
  /** Physical pin 6: ~{INT}/OUT3; open_collector. */
  "~{INT}/OUT3": "6",
  /** Physical pin 7: SDA/OUT1; bidirectional. */
  "SDA/OUT1": "7",
  /** Physical pin 8: SCL/OUT2; bidirectional. */
  "SCL/OUT2": "8",
  /** Physical pin 9: ID; open_collector. */
  "ID": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{EN}; input. */
  "~{EN}": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
}) {
  override schema = "Interface_USB:TUSB320";
  override referencePrefix = "U";
}

/**
 * USB Type-C Configuration Channel Logic and Port Control, industrial temperature range, X2QFN-12
 *
 * KiCad symbol: `Interface_USB:TUSB320I`. Reference prefix: `U`.
 * Footprint filters: Texas?X2QFN*1.6x1.6mm*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/tusb320.pdf
 * Keywords: USB PD CC.
 * Default footprint: Package_DFN_QFN:Texas_X2QFN-12_1.6x1.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB320I extends Component.withPins({
  /** Physical pin 1: CC1; bidirectional. */
  "CC1": "1",
  /** Physical pin 2: CC2; bidirectional. */
  "CC2": "2",
  /** Physical pin 3: PORT; input. */
  "PORT": "3",
  /** Physical pin 4: VBUS_DET; input. */
  "VBUS_DET": "4",
  /** Physical pin 5: ADDR; input. */
  "ADDR": "5",
  /** Physical pin 6: ~{INT}/OUT3; open_collector. */
  "~{INT}/OUT3": "6",
  /** Physical pin 7: SDA/OUT1; bidirectional. */
  "SDA/OUT1": "7",
  /** Physical pin 8: SCL/OUT2; bidirectional. */
  "SCL/OUT2": "8",
  /** Physical pin 9: ID; open_collector. */
  "ID": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{EN}; input. */
  "~{EN}": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
}) {
  override schema = "Interface_USB:TUSB320I";
  override referencePrefix = "U";
}

/**
 * USB Type-C Configuration Channel Logic and Port Control with VCONN, X2QFN-12
 *
 * KiCad symbol: `Interface_USB:TUSB321`. Reference prefix: `U`.
 * Footprint filters: Texas?X2QFN*1.6x1.6mm*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/tusb321.pdf
 * Keywords: USB CC PD VCONN.
 * Default footprint: Package_DFN_QFN:Texas_X2QFN-12_1.6x1.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB321 extends Component.withPins({
  /** Physical pin 1: CC1; bidirectional. */
  "CC1": "1",
  /** Physical pin 2: CC2; bidirectional. */
  "CC2": "2",
  /** Physical pin 3: CURRENT_MODE; input. */
  "CURRENT_MODE": "3",
  /** Physical pin 4: PORT; input. */
  "PORT": "4",
  /** Physical pin 5: VBUS_DET; input. */
  "VBUS_DET": "5",
  /** Physical pin 6: ~{VCONN_FAULT}; open_collector. */
  "~{VCONN_FAULT}": "6",
  /** Physical pin 7: OUT1; open_collector. */
  "OUT1": "7",
  /** Physical pin 8: OUT2; open_collector. */
  "OUT2": "8",
  /** Physical pin 9: ID; open_collector. */
  "ID": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: DIR; open_collector. */
  "DIR": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
}) {
  override schema = "Interface_USB:TUSB321";
  override referencePrefix = "U";
}

/**
 * USB Type-C Configuration Channel Logic and Port Control with VCONN, X2QFN-12
 *
 * KiCad symbol: `Interface_USB:TUSB322I`. Reference prefix: `U`.
 * Footprint filters: Texas?X2QFN*1.6x1.6mm*P0.4mm*.
 * @see www.ti.com/lit/ds/symlink/tusb322i.pdf
 * Keywords: USB VCONN PD CC.
 * Default footprint: Package_DFN_QFN:Texas_X2QFN-12_1.6x1.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB322I extends Component.withPins({
  /** Physical pin 1: CC1; bidirectional. */
  "CC1": "1",
  /** Physical pin 2: CC2; bidirectional. */
  "CC2": "2",
  /** Physical pin 3: VBUS_DET; input. */
  "VBUS_DET": "3",
  /** Physical pin 4: DIR; open_collector. */
  "DIR": "4",
  /** Physical pin 5: ADDR; input. */
  "ADDR": "5",
  /** Physical pin 6: ~{INT}/OUT3; open_collector. */
  "~{INT}/OUT3": "6",
  /** Physical pin 7: SDA/OUT1; bidirectional. */
  "SDA/OUT1": "7",
  /** Physical pin 8: SCL/OUT2; bidirectional. */
  "SCL/OUT2": "8",
  /** Physical pin 9: ID; open_collector. */
  "ID": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{EN}; input. */
  "~{EN}": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
}) {
  override schema = "Interface_USB:TUSB322I";
  override referencePrefix = "U";
}

/**
 * Four-port USB 2.0 Hub, TQFP-64
 *
 * KiCad symbol: `Interface_USB:TUSB4041I`. Reference prefix: `U`.
 * Footprint filters: *TQFP*1EP?10x10mm?P0.5mm*Mask4.44x4.44mm*.
 * @see http://www.ti.com/lit/ds/symlink/tusb4041i.pdf
 * Keywords: USB2.0 I2C SMBus.
 * Default footprint: Package_QFP:Texas_TQFP-64-1EP_10x10mm_P0.5mm_EP8x8mm_Mask4.44x4.44mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB4041I extends Component.withPins({
  /** Physical pin 1: PWRCTL3/BATEN3; bidirectional. */
  "PWRCTL3/BATEN3": "1",
  /** Physical pin 2: VDD33; power_in. */
  "VDD33_2": "2",
  /** Physical pin 3: PWRCTL2/BATEN2; bidirectional. */
  "PWRCTL2/BATEN2": "3",
  /** Physical pin 4: PWRCTL1/BATEN1; bidirectional. */
  "PWRCTL1/BATEN1": "4",
  /** Physical pin 5: SDA/SMBDAT; bidirectional. */
  "SDA/SMBDAT": "5",
  /** Physical pin 6: SCL/SMBCLK; bidirectional. */
  "SCL/SMBCLK": "6",
  /** Physical pin 7: SMBUSz; bidirectional. */
  "SMBUSz": "7",
  /** Physical pin 8: FULLPWRMGMTz/SMBA1; bidirectional. */
  "FULLPWRMGMTz/SMBA1": "8",
  /** Physical pin 9: PWRCTL_POL; bidirectional. */
  "PWRCTL_POL": "9",
  /** Physical pin 10: GANGED/SMBA2/HS_UP; bidirectional. */
  "GANGED/SMBA2/HS_UP": "10",
  /** Physical pin 11: OVERCUR4z; input. */
  "OVERCUR4z": "11",
  /** Physical pin 12: OVERCUR3z; input. */
  "OVERCUR3z": "12",
  /** Physical pin 13: AUTOENz/HS_SUSPEND; bidirectional. */
  "AUTOENz/HS_SUSPEND": "13",
  /** Physical pin 14: OVERCUR1z; input. */
  "OVERCUR1z": "14",
  /** Physical pin 15: OVERCUR2z; input. */
  "OVERCUR2z": "15",
  /** Physical pin 16: USB_VBUS; input. */
  "USB_VBUS": "16",
  /** Physical pin 17: TEST; input. */
  "TEST": "17",
  /** Physical pin 18: GRSTz; input. */
  "GRSTz": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VDD33; power_in. */
  "VDD33_20": "20",
  /** Physical pin 21: USB_DP_UP; bidirectional. */
  "USB_DP_UP": "21",
  /** Physical pin 22: USB_DM_UP; bidirectional. */
  "USB_DM_UP": "22",
  /** Physical pin 23: RSVD; no_connect. */
  "RSVD_23": "23",
  /** Physical pin 24: RSVD; no_connect. */
  "RSVD_24": "24",
  /** Physical pin 25: VDD; power_in. */
  "VDD_25": "25",
  /** Physical pin 26: RSVD; no_connect. */
  "RSVD_26": "26",
  /** Physical pin 27: RSVD; no_connect. */
  "RSVD_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: XO; output. */
  "XO": "29",
  /** Physical pin 30: XI; input. */
  "XI": "30",
  /** Physical pin 31: VDD33; power_in. */
  "VDD33_31": "31",
  /** Physical pin 32: USB_R1; input. */
  "USB_R1": "32",
  /** Physical pin 33: USB_DP_DN1; bidirectional. */
  "USB_DP_DN1": "33",
  /** Physical pin 34: USB_DM_DN1; bidirectional. */
  "USB_DM_DN1": "34",
  /** Physical pin 35: RSVD; no_connect. */
  "RSVD_35": "35",
  /** Physical pin 36: RSVD; no_connect. */
  "RSVD_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: RSVD; no_connect. */
  "RSVD_38": "38",
  /** Physical pin 39: RSVD; no_connect. */
  "RSVD_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: USB_DP_DN2; bidirectional. */
  "USB_DP_DN2": "41",
  /** Physical pin 42: USB_DM_DN2; bidirectional. */
  "USB_DM_DN2": "42",
  /** Physical pin 43: RSVD; no_connect. */
  "RSVD_43": "43",
  /** Physical pin 44: RSVD; no_connect. */
  "RSVD_44": "44",
  /** Physical pin 45: VDD; power_in. */
  "VDD_45": "45",
  /** Physical pin 46: RSVD; no_connect. */
  "RSVD_46": "46",
  /** Physical pin 47: RSVD; no_connect. */
  "RSVD_47": "47",
  /** Physical pin 48: VDD33; power_in. */
  "VDD33_48": "48",
  /** Physical pin 49: USB_DP_DN3; bidirectional. */
  "USB_DP_DN3": "49",
  /** Physical pin 50: USB_DM_DN3; bidirectional. */
  "USB_DM_DN3": "50",
  /** Physical pin 51: RSVD; no_connect. */
  "RSVD_51": "51",
  /** Physical pin 52: RSVD; no_connect. */
  "RSVD_52": "52",
  /** Physical pin 53: VDD; power_in. */
  "VDD_53": "53",
  /** Physical pin 54: RSVD; no_connect. */
  "RSVD_54": "54",
  /** Physical pin 55: RSVD; no_connect. */
  "RSVD_55": "55",
  /** Physical pin 56: USB_DP_DN4; bidirectional. */
  "USB_DP_DN4": "56",
  /** Physical pin 57: USB_DM_DN4; bidirectional. */
  "USB_DM_DN4": "57",
  /** Physical pin 58: RSVD; no_connect. */
  "RSVD_58": "58",
  /** Physical pin 59: RSVD; no_connect. */
  "RSVD_59": "59",
  /** Physical pin 60: VDD; power_in. */
  "VDD_60": "60",
  /** Physical pin 61: RSVD; no_connect. */
  "RSVD_61": "61",
  /** Physical pin 62: RSVD; no_connect. */
  "RSVD_62": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: PWRCTL4/BATEN4; bidirectional. */
  "PWRCTL4/BATEN4": "64",
  /** Physical pin 65: VSS; power_in. */
  "VSS": "65",
}) {
  override schema = "Interface_USB:TUSB4041I";
  override referencePrefix = "U";
}

/**
 * USB-C / Display Port linear redriver/crosspoint switch
 *
 * KiCad symbol: `Interface_USB:TUSB564`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*6x4mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tusb564.pdf
 * Keywords: display port switch usb-c.
 * Default footprint: Package_DFN_QFN:Texas_RNQ0040A_WQFN-40-1EP_6x4mm_P0.4mm_EP4.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB564 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: DPEQ1; input. */
  "DPEQ1": "2",
  /** Physical pin 3: SSEQ1; input. */
  "SSEQ1": "3",
  /** Physical pin 4: SSRXn; input. */
  "SSRXn": "4",
  /** Physical pin 5: SSRXp; input. */
  "SSRXp": "5",
  /** Physical pin 7: SSTXn; input. */
  "SSTXn": "7",
  /** Physical pin 8: SSTXp; input. */
  "SSTXp": "8",
  /** Physical pin 9: TX1p; bidirectional. */
  "TX1p": "9",
  /** Physical pin 10: TX1n; bidirectional. */
  "TX1n": "10",
  /** Physical pin 11: EQ0; input. */
  "EQ0": "11",
  /** Physical pin 12: RX1p; input. */
  "RX1p": "12",
  /** Physical pin 13: RX1n; input. */
  "RX1n": "13",
  /** Physical pin 14: EQ1; input. */
  "EQ1": "14",
  /** Physical pin 15: RX2n; input. */
  "RX2n": "15",
  /** Physical pin 16: RX2p; input. */
  "RX2p": "16",
  /** Physical pin 17: I2C_EN; input. */
  "I2C_EN": "17",
  /** Physical pin 18: TX2n; bidirectional. */
  "TX2n": "18",
  /** Physical pin 19: TX2p; bidirectional. */
  "TX2p": "19",
  /** Physical pin 21: FLIP/SCL; input. */
  "FLIP/SCL": "21",
  /** Physical pin 22: CTL0/SDA; input. */
  "CTL0/SDA": "22",
  /** Physical pin 23: CTL1; input. */
  "CTL1": "23",
  /** Physical pin 24: SBU1; bidirectional. */
  "SBU1": "24",
  /** Physical pin 25: SBU2; bidirectional. */
  "SBU2": "25",
  /** Physical pin 26: AUXp; bidirectional. */
  "AUXp": "26",
  /** Physical pin 27: AUXn; bidirectional. */
  "AUXn": "27",
  /** Physical pin 29: EN; input. */
  "EN": "29",
  /** Physical pin 30: DP3n; output. */
  "DP3n": "30",
  /** Physical pin 31: DP3p; output. */
  "DP3p": "31",
  /** Physical pin 32: HPDIN; input. */
  "HPDIN": "32",
  /** Physical pin 33: DP2n; output. */
  "DP2n": "33",
  /** Physical pin 34: DP2p; output. */
  "DP2p": "34",
  /** Physical pin 35: DPEQ0/A1; input. */
  "DPEQ0/A1": "35",
  /** Physical pin 36: DP1n; output. */
  "DP1n": "36",
  /** Physical pin 37: DP1p; output. */
  "DP1p": "37",
  /** Physical pin 38: SSEQ0/A0; input. */
  "SSEQ0/A0": "38",
  /** Physical pin 39: DP0n; output. */
  "DP0n": "39",
  /** Physical pin 40: DP0p; output. */
  "DP0p": "40",
  /** Physical pin 41: EP; power_in. */
  "EP": "41",
  /** Physical pin [6,20,28]: VCC; power_in. */
  "VCC": "[6,20,28]",
}) {
  override schema = "Interface_USB:TUSB564";
  override referencePrefix = "U";
}

/**
 * USB 3.0 xHCI Host Controller
 *
 * KiCad symbol: `Interface_USB:TUSB7340`. Reference prefix: `U`.
 * Footprint filters: Texas*S?PWQFN?N100*.
 * @see http://www.ti.com/general/docs/lit/getliterature.tsp?genericPartNumber=tusb7320&fileType=pdf
 * Keywords: USB HUB PCIE.
 * Default footprint: Package_DFN_QFN:Texas_S-PWQFN-N100_EP5.5x5.5mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB7340 extends Component.withPins({
  /** Physical pin A1: VDD11; power_in. */
  "VDD11_A1": "A1",
  /** Physical pin A2: SDA; bidirectional. */
  "SDA": "A2",
  /** Physical pin A3: VDD33; power_in. */
  "VDD33_A3": "A3",
  /** Physical pin A4: VDD11; power_in. */
  "VDD11_A4": "A4",
  /** Physical pin A5: USB_DM_DN4; bidirectional. */
  "USB_DM_DN4": "A5",
  /** Physical pin A6: VDD11; power_in. */
  "VDD11_A6": "A6",
  /** Physical pin A7: USB_SSRXN_DN4; input. */
  "USB_SSRXN_DN4": "A7",
  /** Physical pin A8: USB_SSTXN_DN4; input. */
  "USB_SSTXN_DN4": "A8",
  /** Physical pin A9: VDD11; power_in. */
  "VDD11_A9": "A9",
  /** Physical pin A10: USB_SSRXN_DN2; input. */
  "USB_SSRXN_DN2": "A10",
  /** Physical pin A11: USB_SSTXP_DN2; output. */
  "USB_SSTXP_DN2": "A11",
  /** Physical pin A12: VDD11; power_in. */
  "VDD11_A12": "A12",
  /** Physical pin A13: USB_DM_DN2; bidirectional. */
  "USB_DM_DN2": "A13",
  /** Physical pin A14: NC; no_connect. */
  "NC_A14": "A14",
  /** Physical pin A15: GRST#; input. */
  "GRST#": "A15",
  /** Physical pin A16: VDD11; power_in. */
  "VDD11_A16": "A16",
  /** Physical pin A17: USB_SSTXP_DN1; output. */
  "USB_SSTXP_DN1": "A17",
  /** Physical pin A18: USB_SSRXP_DN1; input. */
  "USB_SSRXP_DN1": "A18",
  /** Physical pin A19: VDDA_3P3; power_in. */
  "VDDA_3P3_A19": "A19",
  /** Physical pin A20: USB_DP_DN1; bidirectional. */
  "USB_DP_DN1": "A20",
  /** Physical pin A21: VDDA_3P3; power_in. */
  "VDDA_3P3_A21": "A21",
  /** Physical pin A22: XO; output. */
  "XO": "A22",
  /** Physical pin A23: XI; input. */
  "XI": "A23",
  /** Physical pin A24: R1EXT; bidirectional. */
  "R1EXT": "A24",
  /** Physical pin A25: VDDA_3P3; power_in. */
  "VDDA_3P3_A25": "A25",
  /** Physical pin A26: NC; no_connect. */
  "NC_A26": "A26",
  /** Physical pin A27: USB_DM_DN3; bidirectional. */
  "USB_DM_DN3": "A27",
  /** Physical pin A28: VDD11; power_in. */
  "VDD11_A28": "A28",
  /** Physical pin A29: USB_SSRXN_DN3; input. */
  "USB_SSRXN_DN3": "A29",
  /** Physical pin A30: USB_SSTXN_DN3; output. */
  "USB_SSTXN_DN3": "A30",
  /** Physical pin A31: VDD11; power_in. */
  "VDD11_A31": "A31",
  /** Physical pin A32: JTAG_TCK; input. */
  "JTAG_TCK": "A32",
  /** Physical pin A33: VDD11; power_in. */
  "VDD11_A33": "A33",
  /** Physical pin A34: VDD33; power_in. */
  "VDD33_A34": "A34",
  /** Physical pin A35: JTAG_TDI; input. */
  "JTAG_TDI": "A35",
  /** Physical pin A36: OVERCUR1#; input. */
  "OVERCUR1#": "A36",
  /** Physical pin A37: OVERCUR2#; input. */
  "OVERCUR2#": "A37",
  /** Physical pin A38: VDD11; power_in. */
  "VDD11_A38": "A38",
  /** Physical pin A39: VDD33; power_in. */
  "VDD33_A39": "A39",
  /** Physical pin A40: PERST#; input. */
  "PERST#": "A40",
  /** Physical pin A41: PCIE_TXN; output. */
  "PCIE_TXN": "A41",
  /** Physical pin A42: PCIE_RXN; input. */
  "PCIE_RXN": "A42",
  /** Physical pin A43: NC; no_connect. */
  "NC_A43": "A43",
  /** Physical pin A44: VDDA_3P3; power_in. */
  "VDDA_3P3_A44": "A44",
  /** Physical pin A45: PCIE_REFCLKP; input. */
  "PCIE_REFCLKP": "A45",
  /** Physical pin A46: PWRON3#; output. */
  "PWRON3#": "A46",
  /** Physical pin A47: VDD33; power_in. */
  "VDD33_A47": "A47",
  /** Physical pin A48: PWRON4#; output. */
  "PWRON4#": "A48",
  /** Physical pin A49: GPIO0; bidirectional. */
  "GPIO0": "A49",
  /** Physical pin A50: VDD11; power_in. */
  "VDD11_A50": "A50",
  /** Physical pin A51: VDD33; power_in. */
  "VDD33_A51": "A51",
  /** Physical pin A52: AUX_DET; input. */
  "AUX_DET": "A52",
  /** Physical pin A53: VSS_EP; power_in. */
  "VSS_EP": "A53",
  /** Physical pin B1: VDD11; power_in. */
  "VDD11_B1": "B1",
  /** Physical pin B2: SCL; bidirectional. */
  "SCL": "B2",
  /** Physical pin B3: SMI; output. */
  "SMI": "B3",
  /** Physical pin B4: VDDA_3P3; power_in. */
  "VDDA_3P3_B4": "B4",
  /** Physical pin B5: USB_DP_DN4; bidirectional. */
  "USB_DP_DN4": "B5",
  /** Physical pin B6: USB_SSRXP_DN4; input. */
  "USB_SSRXP_DN4": "B6",
  /** Physical pin B7: USB_SSTXP_DN4; input. */
  "USB_SSTXP_DN4": "B7",
  /** Physical pin B8: NC; no_connect. */
  "NC_B8": "B8",
  /** Physical pin B9: USB_SSRXP_DN2; input. */
  "USB_SSRXP_DN2": "B9",
  /** Physical pin B10: USB_SSTXN_DN2; output. */
  "USB_SSTXN_DN2": "B10",
  /** Physical pin B11: VDDA_3P3; power_in. */
  "VDDA_3P3_B11": "B11",
  /** Physical pin B12: USB_DP_DN2; bidirectional. */
  "USB_DP_DN2": "B12",
  /** Physical pin B13: NC; no_connect. */
  "NC_B13": "B13",
  /** Physical pin B14: FREQSEL; input. */
  "FREQSEL": "B14",
  /** Physical pin B15: USB_SSTXN_DN1; output. */
  "USB_SSTXN_DN1": "B15",
  /** Physical pin B16: USB_SSRXN_DN1; input. */
  "USB_SSRXN_DN1": "B16",
  /** Physical pin B17: VDD11; power_in. */
  "VDD11_B17": "B17",
  /** Physical pin B18: USB_DM_DN1; bidirectional. */
  "USB_DM_DN1": "B18",
  /** Physical pin B19: VDD11; power_in. */
  "VDD11_B19": "B19",
  /** Physical pin B20: VSS; power_in. */
  "VSS_B20": "B20",
  /** Physical pin B21: VSS_OSC; input. */
  "VSS_OSC": "B21",
  /** Physical pin B22: VDDA_3P3; power_in. */
  "VDDA_3P3_B22": "B22",
  /** Physical pin B23: R1EXTRTN; bidirectional. */
  "R1EXTRTN": "B23",
  /** Physical pin B24: VDD11; power_in. */
  "VDD11_B24": "B24",
  /** Physical pin B25: USB_DP_DN3; bidirectional. */
  "USB_DP_DN3": "B25",
  /** Physical pin B26: VDDA_3P3; power_in. */
  "VDDA_3P3_B26": "B26",
  /** Physical pin B27: USB_SSRXP_DN3; input. */
  "USB_SSRXP_DN3": "B27",
  /** Physical pin B28: USB_SSTXP_DN3; output. */
  "USB_SSTXP_DN3": "B28",
  /** Physical pin B29: NC; no_connect. */
  "NC_B29": "B29",
  /** Physical pin B30: JTAG_TMS; input. */
  "JTAG_TMS": "B30",
  /** Physical pin B31: JTAG_TDO; output. */
  "JTAG_TDO": "B31",
  /** Physical pin B32: JTAG_RST#; input. */
  "JTAG_RST#": "B32",
  /** Physical pin B33: PWRON1#; output. */
  "PWRON1#": "B33",
  /** Physical pin B34: PWRON2#; output. */
  "PWRON2#": "B34",
  /** Physical pin B35: WAKE#; output. */
  "WAKE#": "B35",
  /** Physical pin B36: CLKREQ#; input. */
  "CLKREQ#": "B36",
  /** Physical pin B37: VDD11; power_in. */
  "VDD11_B37": "B37",
  /** Physical pin B38: PCIE_TXP; output. */
  "PCIE_TXP": "B38",
  /** Physical pin B39: PCIE_RXP; input. */
  "PCIE_RXP": "B39",
  /** Physical pin B40: VDD11; power_in. */
  "VDD11_B40": "B40",
  /** Physical pin B41: PCIE_REFCLKN; input. */
  "PCIE_REFCLKN": "B41",
  /** Physical pin B42: VDD11; power_in. */
  "VDD11_B42": "B42",
  /** Physical pin B43: OVERCUR3#; input. */
  "OVERCUR3#": "B43",
  /** Physical pin B44: VDD11; power_in. */
  "VDD11_B44": "B44",
  /** Physical pin B45: OVERCUR4#; input. */
  "OVERCUR4#": "B45",
  /** Physical pin B46: GPIO1; bidirectional. */
  "GPIO1": "B46",
  /** Physical pin B47: GPIO2; bidirectional. */
  "GPIO2": "B47",
  /** Physical pin B48: GPIO3; bidirectional. */
  "GPIO3": "B48",
  /** Physical pin C1: VSS; power_in. */
  "VSS_C1": "C1",
  /** Physical pin C2: VSS; power_in. */
  "VSS_C2": "C2",
  /** Physical pin C3: VSS; power_in. */
  "VSS_C3": "C3",
  /** Physical pin C4: VSS; power_in. */
  "VSS_C4": "C4",
}) {
  override schema = "Interface_USB:TUSB7340";
  override referencePrefix = "U";
}

/**
 * four port USB 3.0 Hub
 *
 * KiCad symbol: `Interface_USB:TUSB8041`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tusb8041.pdf
 * Keywords: USB3.0 hub.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP6x6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB8041 extends Component.withPins({
  /** Physical pin 1: USB_DP_DN1; bidirectional. */
  "USB_DP_DN1": "1",
  /** Physical pin 2: USB_DM_DN1; bidirectional. */
  "USB_DM_DN1": "2",
  /** Physical pin 3: USB_SSTXP_DN1; output. */
  "USB_SSTXP_DN1": "3",
  /** Physical pin 4: USB_SSTXM_DN1; output. */
  "USB_SSTXM_DN1": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 6: USB_SSRXP_DN1; input. */
  "USB_SSRXP_DN1": "6",
  /** Physical pin 7: USB_SSRXM_DN1; input. */
  "USB_SSRXM_DN1": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: USB_DP_DN2; bidirectional. */
  "USB_DP_DN2": "9",
  /** Physical pin 10: USB_DM_DN2; bidirectional. */
  "USB_DM_DN2": "10",
  /** Physical pin 11: USB_SSTXP_DN2; output. */
  "USB_SSTXP_DN2": "11",
  /** Physical pin 12: USB_SSTXM_DN2; output. */
  "USB_SSTXM_DN2": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD_13": "13",
  /** Physical pin 14: USB_SSRXP_DN2; input. */
  "USB_SSRXP_DN2": "14",
  /** Physical pin 15: USB_SSRXM_DN2; input. */
  "USB_SSRXM_DN2": "15",
  /** Physical pin 16: VDD33; power_in. */
  "VDD33_16": "16",
  /** Physical pin 17: USB_DP_DN3; bidirectional. */
  "USB_DP_DN3": "17",
  /** Physical pin 18: USB_DM_DN3; bidirectional. */
  "USB_DM_DN3": "18",
  /** Physical pin 19: USB_SSTXP_DN3; output. */
  "USB_SSTXP_DN3": "19",
  /** Physical pin 20: USB_SSTXM_DN3; output. */
  "USB_SSTXM_DN3": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: USB_SSRXP_DN3; input. */
  "USB_SSRXP_DN3": "22",
  /** Physical pin 23: USB_SSRXM_DN3; input. */
  "USB_SSRXM_DN3": "23",
  /** Physical pin 24: USB_DP_DN4; bidirectional. */
  "USB_DP_DN4": "24",
  /** Physical pin 25: USB_DM_DN4; bidirectional. */
  "USB_DM_DN4": "25",
  /** Physical pin 26: USB_SSTXP_DN4; output. */
  "USB_SSTXP_DN4": "26",
  /** Physical pin 27: USB_SSTXM_DN4; output. */
  "USB_SSTXM_DN4": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: USB_SSRXP_DN4; input. */
  "USB_SSRXP_DN4": "29",
  /** Physical pin 30: USB_SSRXM_DN4; input. */
  "USB_SSRXM_DN4": "30",
  /** Physical pin 31: VDD; power_in. */
  "VDD_31": "31",
  /** Physical pin 32: PWRCTL4/BATEN4; bidirectional. */
  "PWRCTL4/BATEN4": "32",
  /** Physical pin 33: PWRCTL3/BATEN3; bidirectional. */
  "PWRCTL3/BATEN3": "33",
  /** Physical pin 34: VDD33; power_in. */
  "VDD33_34": "34",
  /** Physical pin 35: PWRCTL2/BATEN2; bidirectional. */
  "PWRCTL2/BATEN2": "35",
  /** Physical pin 36: PWRCTL1/BATEN1; bidirectional. */
  "PWRCTL1/BATEN1": "36",
  /** Physical pin 37: SDA/SMBDAT; bidirectional. */
  "SDA/SMBDAT": "37",
  /** Physical pin 38: SCL/SMBCLK; bidirectional. */
  "SCL/SMBCLK": "38",
  /** Physical pin 39: SMBUSz/SS_SUSPEND; bidirectional. */
  "SMBUSz/SS_SUSPEND": "39",
  /** Physical pin 40: FULLPWRMGMTz/SMBA1/SS_UP; bidirectional. */
  "FULLPWRMGMTz/SMBA1/SS_UP": "40",
  /** Physical pin 41: PWRCTL_POL; bidirectional. */
  "PWRCTL_POL": "41",
  /** Physical pin 42: GANGED/SMBA2/HS_UP; bidirectional. */
  "GANGED/SMBA2/HS_UP": "42",
  /** Physical pin 43: OVERCUR4z; input. */
  "OVERCUR4z": "43",
  /** Physical pin 44: OVERCUR3z; input. */
  "OVERCUR3z": "44",
  /** Physical pin 45: AUTOENz/HS_SUSPEND; bidirectional. */
  "AUTOENz/HS_SUSPEND": "45",
  /** Physical pin 46: OVERCUR1z; input. */
  "OVERCUR1z": "46",
  /** Physical pin 47: OVERCUR2z; input. */
  "OVERCUR2z": "47",
  /** Physical pin 48: USB_VBUS; input. */
  "USB_VBUS": "48",
  /** Physical pin 49: TEST; input. */
  "TEST": "49",
  /** Physical pin 50: GRSTz; input. */
  "GRSTz": "50",
  /** Physical pin 51: VDD; power_in. */
  "VDD_51": "51",
  /** Physical pin 52: VDD33; power_in. */
  "VDD33_52": "52",
  /** Physical pin 53: USB_DP_UP; bidirectional. */
  "USB_DP_UP": "53",
  /** Physical pin 54: USB_DM_UP; bidirectional. */
  "USB_DM_UP": "54",
  /** Physical pin 55: USB_SSTXP_UP; output. */
  "USB_SSTXP_UP": "55",
  /** Physical pin 56: USB_SSTXM_UP; output. */
  "USB_SSTXM_UP": "56",
  /** Physical pin 57: VDD; power_in. */
  "VDD_57": "57",
  /** Physical pin 58: USB_SSRXP_UP; input. */
  "USB_SSRXP_UP": "58",
  /** Physical pin 59: USB_SSRXM_UP; input. */
  "USB_SSRXM_UP": "59",
  /** Physical pin 60: NC; no_connect. */
  "NC": "60",
  /** Physical pin 61: XO; output. */
  "XO": "61",
  /** Physical pin 62: XI; input. */
  "XI": "62",
  /** Physical pin 63: VDD33; power_in. */
  "VDD33_63": "63",
  /** Physical pin 64: USB_R1; input. */
  "USB_R1": "64",
  /** Physical pin 65: VSS; power_in. */
  "VSS": "65",
}) {
  override schema = "Interface_USB:TUSB8041";
  override referencePrefix = "U";
}

/**
 * Four port USB 3.2 x1 Gen1 Hub
 *
 * KiCad symbol: `Interface_USB:TUSB8043A`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tusb8043a.pdf
 * Keywords: USB3.2 hub.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP6x6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSB8043A extends Component.withPins({
  /** Physical pin 1: USB_DP_DN1; bidirectional. */
  "USB_DP_DN1": "1",
  /** Physical pin 2: USB_DM_DN1; bidirectional. */
  "USB_DM_DN1": "2",
  /** Physical pin 3: USB_SSTXP_DN1; output. */
  "USB_SSTXP_DN1": "3",
  /** Physical pin 4: USB_SSTXM_DN1; output. */
  "USB_SSTXM_DN1": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 6: USB_SSRXP_DN1; input. */
  "USB_SSRXP_DN1": "6",
  /** Physical pin 7: USB_SSRXM_DN1; input. */
  "USB_SSRXM_DN1": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: USB_DP_DN2; bidirectional. */
  "USB_DP_DN2": "9",
  /** Physical pin 10: USB_DM_DN2; bidirectional. */
  "USB_DM_DN2": "10",
  /** Physical pin 11: USB_SSTXP_DN2; output. */
  "USB_SSTXP_DN2": "11",
  /** Physical pin 12: USB_SSTXM_DN2; output. */
  "USB_SSTXM_DN2": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD_13": "13",
  /** Physical pin 14: USB_SSRXP_DN2; input. */
  "USB_SSRXP_DN2": "14",
  /** Physical pin 15: USB_SSRXM_DN2; input. */
  "USB_SSRXM_DN2": "15",
  /** Physical pin 16: VDD33; power_in. */
  "VDD33_16": "16",
  /** Physical pin 17: USB_DP_DN3; bidirectional. */
  "USB_DP_DN3": "17",
  /** Physical pin 18: USB_DM_DN3; bidirectional. */
  "USB_DM_DN3": "18",
  /** Physical pin 19: USB_SSTXP_DN3; output. */
  "USB_SSTXP_DN3": "19",
  /** Physical pin 20: USB_SSTXM_DN3; output. */
  "USB_SSTXM_DN3": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: USB_SSRXP_DN3; input. */
  "USB_SSRXP_DN3": "22",
  /** Physical pin 23: USB_SSRXM_DN3; input. */
  "USB_SSRXM_DN3": "23",
  /** Physical pin 24: USB_DP_DN4; bidirectional. */
  "USB_DP_DN4": "24",
  /** Physical pin 25: USB_DM_DN4; bidirectional. */
  "USB_DM_DN4": "25",
  /** Physical pin 26: USB_SSTXP_DN4; output. */
  "USB_SSTXP_DN4": "26",
  /** Physical pin 27: USB_SSTXM_DN4; output. */
  "USB_SSTXM_DN4": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: USB_SSRXP_DN4; input. */
  "USB_SSRXP_DN4": "29",
  /** Physical pin 30: USB_SSRXM_DN4; input. */
  "USB_SSRXM_DN4": "30",
  /** Physical pin 31: VDD; power_in. */
  "VDD_31": "31",
  /** Physical pin 32: PWRCTL4/BATEN4; bidirectional. */
  "PWRCTL4/BATEN4": "32",
  /** Physical pin 33: PWRCTL3/BATEN3; bidirectional. */
  "PWRCTL3/BATEN3": "33",
  /** Physical pin 34: VDD33; power_in. */
  "VDD33_34": "34",
  /** Physical pin 35: PWRCTL2/BATEN2; bidirectional. */
  "PWRCTL2/BATEN2": "35",
  /** Physical pin 36: PWRCTL1/BATEN1; bidirectional. */
  "PWRCTL1/BATEN1": "36",
  /** Physical pin 37: SDA/SMBDAT; bidirectional. */
  "SDA/SMBDAT": "37",
  /** Physical pin 38: SCL/SMBCLK; bidirectional. */
  "SCL/SMBCLK": "38",
  /** Physical pin 39: SMBUSz/SS_SUSPEND; bidirectional. */
  "SMBUSz/SS_SUSPEND": "39",
  /** Physical pin 40: FULLPWRMGMTz/SMBA1/SS_UP; bidirectional. */
  "FULLPWRMGMTz/SMBA1/SS_UP": "40",
  /** Physical pin 41: PWRCTL_POL; bidirectional. */
  "PWRCTL_POL": "41",
  /** Physical pin 42: GANGED/SMBA2/HS_UP; bidirectional. */
  "GANGED/SMBA2/HS_UP": "42",
  /** Physical pin 43: OVERCUR4z; input. */
  "OVERCUR4z": "43",
  /** Physical pin 44: OVERCUR3z; input. */
  "OVERCUR3z": "44",
  /** Physical pin 45: AUTOENz/HS_SUSPEND; bidirectional. */
  "AUTOENz/HS_SUSPEND": "45",
  /** Physical pin 46: OVERCUR1z; input. */
  "OVERCUR1z": "46",
  /** Physical pin 47: OVERCUR2z; input. */
  "OVERCUR2z": "47",
  /** Physical pin 48: USB_VBUS; input. */
  "USB_VBUS": "48",
  /** Physical pin 49: TEST; input. */
  "TEST": "49",
  /** Physical pin 50: GRSTz; input. */
  "GRSTz": "50",
  /** Physical pin 51: VDD; power_in. */
  "VDD_51": "51",
  /** Physical pin 52: VDD33; power_in. */
  "VDD33_52": "52",
  /** Physical pin 53: USB_DP_UP; bidirectional. */
  "USB_DP_UP": "53",
  /** Physical pin 54: USB_DM_UP; bidirectional. */
  "USB_DM_UP": "54",
  /** Physical pin 55: USB_SSTXP_UP; output. */
  "USB_SSTXP_UP": "55",
  /** Physical pin 56: USB_SSTXM_UP; output. */
  "USB_SSTXM_UP": "56",
  /** Physical pin 57: VDD; power_in. */
  "VDD_57": "57",
  /** Physical pin 58: USB_SSRXP_UP; input. */
  "USB_SSRXP_UP": "58",
  /** Physical pin 59: USB_SSRXM_UP; input. */
  "USB_SSRXM_UP": "59",
  /** Physical pin 60: NC; no_connect. */
  "NC": "60",
  /** Physical pin 61: XO; output. */
  "XO": "61",
  /** Physical pin 62: XI; input. */
  "XI": "62",
  /** Physical pin 63: VDD33; power_in. */
  "VDD33_63": "63",
  /** Physical pin 64: USB_R1; input. */
  "USB_R1": "64",
  /** Physical pin 65: VSS; power_in. */
  "VSS": "65",
}) {
  override schema = "Interface_USB:TUSB8043A";
  override referencePrefix = "U";
}

/**
 * PCIe to USB 3.0 Host Controller, 2 ports, QFN-48
 *
 * KiCad symbol: `Interface_USB:UPD720202K8-7x1-BAA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*EP5.7x5.7mm*.
 * @see https://www.renesas.com/us/en/document/dst/upd720201upd720202-datasheet
 * Keywords: PCIe USB 3.0.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.7x5.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UPD720202K8_7x1_BAA extends Component.withPins({
  /** Physical pin 1: PECLKP; input. */
  "PECLKP": "1",
  /** Physical pin 2: PECLKN; input. */
  "PECLKN": "2",
  /** Physical pin 3: AVDD33; power_in. */
  "AVDD33_3": "3",
  /** Physical pin 4: PETXP; output. */
  "PETXP": "4",
  /** Physical pin 5: PETXN; output. */
  "PETXN": "5",
  /** Physical pin 6: VDD10; power_in. */
  "VDD10_6": "6",
  /** Physical pin 7: PERXP; input. */
  "PERXP": "7",
  /** Physical pin 8: PERXN; input. */
  "PERXN": "8",
  /** Physical pin 9: VDD10; passive. */
  "VDD10_9": "9",
  /** Physical pin 10: ~{PECREQ}; open_collector. */
  "~{PECREQ}": "10",
  /** Physical pin 11: PONRSTB; input. */
  "PONRSTB": "11",
  /** Physical pin 12: VDD33; power_in. */
  "VDD33_12": "12",
  /** Physical pin 13: SPISO; input. */
  "SPISO": "13",
  /** Physical pin 14: ~{SPICS}; output. */
  "~{SPICS}": "14",
  /** Physical pin 15: SPISCK; output. */
  "SPISCK": "15",
  /** Physical pin 16: SPISI; output. */
  "SPISI": "16",
  /** Physical pin 17: ~{OCI2}; input. */
  "~{OCI2}": "17",
  /** Physical pin 18: PPON2; output. */
  "PPON2": "18",
  /** Physical pin 19: ~{OCI1}; input. */
  "~{OCI1}": "19",
  /** Physical pin 20: PPON1; output. */
  "PPON1": "20",
  /** Physical pin 21: VDD10; passive. */
  "VDD10_21": "21",
  /** Physical pin 22: VDD33; passive. */
  "VDD33_22": "22",
  /** Physical pin 23: XT2; output. */
  "XT2": "23",
  /** Physical pin 24: XT1; input. */
  "XT1": "24",
  /** Physical pin 25: AVDD33; passive. */
  "AVDD33_25": "25",
  /** Physical pin 26: RREF; passive. */
  "RREF": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: U3TXDP1; bidirectional. */
  "U3TXDP1": "28",
  /** Physical pin 29: U3TXDN1; bidirectional. */
  "U3TXDN1": "29",
  /** Physical pin 30: VDD10; passive. */
  "VDD10_30": "30",
  /** Physical pin 31: U3RXDP1; bidirectional. */
  "U3RXDP1": "31",
  /** Physical pin 32: U3RXDN1; bidirectional. */
  "U3RXDN1": "32",
  /** Physical pin 33: VDD10; passive. */
  "VDD10_33": "33",
  /** Physical pin 34: VDD33; passive. */
  "VDD33_34": "34",
  /** Physical pin 35: U2DP1; bidirectional. */
  "U2DP1": "35",
  /** Physical pin 36: U2DM1; bidirectional. */
  "U2DM1": "36",
  /** Physical pin 37: U3TXDP2; bidirectional. */
  "U3TXDP2": "37",
  /** Physical pin 38: U3TXDN2; bidirectional. */
  "U3TXDN2": "38",
  /** Physical pin 39: VDD10; passive. */
  "VDD10_39": "39",
  /** Physical pin 40: U3RXDP2; bidirectional. */
  "U3RXDP2": "40",
  /** Physical pin 41: U3RXDN2; bidirectional. */
  "U3RXDN2": "41",
  /** Physical pin 42: VDD10; passive. */
  "VDD10_42": "42",
  /** Physical pin 43: VDD33; passive. */
  "VDD33_43": "43",
  /** Physical pin 44: U2DP2; bidirectional. */
  "U2DP2": "44",
  /** Physical pin 45: U2DM2; bidirectional. */
  "U2DM2": "45",
  /** Physical pin 46: SMIB; open_collector. */
  "SMIB": "46",
  /** Physical pin 47: ~{PERST}; input. */
  "~{PERST}": "47",
  /** Physical pin 48: ~{PEWAKE}; open_collector. */
  "~{PEWAKE}": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
}) {
  override schema = "Interface_USB:UPD720202K8-7x1-BAA";
  override referencePrefix = "U";
}

/**
 * USB 2.0 4-Port Hub Hi-Speed Hub Controller
 *
 * KiCad symbol: `Interface_USB:USB2504`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/00002250A.pdf
 * Keywords: USB2.0 Hi-Speed-USB-Hub Hub-Controller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB2504 extends Component.withPins({
  /** Physical pin 1: VDDA33; power_in. */
  "VDDA33_1": "1",
  /** Physical pin 2: USBD0_P; bidirectional. */
  "USBD0_P": "2",
  /** Physical pin 3: USBD0_N; bidirectional. */
  "USBD0_N": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS_4": "4",
  /** Physical pin 5: USBD1_N; bidirectional. */
  "USBD1_N": "5",
  /** Physical pin 6: USBD1_P; bidirectional. */
  "USBD1_P": "6",
  /** Physical pin 7: VDDA33; passive. */
  "VDDA33_7": "7",
  /** Physical pin 8: USBD2_P; bidirectional. */
  "USBD2_P": "8",
  /** Physical pin 9: USBD2_N; bidirectional. */
  "USBD2_N": "9",
  /** Physical pin 10: VSS; passive. */
  "VSS_10": "10",
  /** Physical pin 11: USBD3_N; bidirectional. */
  "USBD3_N": "11",
  /** Physical pin 12: USBD3_P; bidirectional. */
  "USBD3_P": "12",
  /** Physical pin 13: VDDA33; passive. */
  "VDDA33_13": "13",
  /** Physical pin 14: USBD4_P; bidirectional. */
  "USBD4_P": "14",
  /** Physical pin 15: USBD4_N; bidirectional. */
  "USBD4_N": "15",
  /** Physical pin 16: VSS; passive. */
  "VSS_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: AM4/LED_EN; bidirectional. */
  "AM4/LED_EN": "19",
  /** Physical pin 20: GR4/PRT_DIS1; bidirectional. */
  "GR4/PRT_DIS1": "20",
  /** Physical pin 21: AM3; bidirectional. */
  "AM3": "21",
  /** Physical pin 22: GR3/PRT_DIS0; bidirectional. */
  "GR3/PRT_DIS0": "22",
  /** Physical pin 23: PRTPWR_POL; bidirectional. */
  "PRTPWR_POL": "23",
  /** Physical pin 24: AM2/MTT_EN; bidirectional. */
  "AM2/MTT_EN": "24",
  /** Physical pin 25: GR2/NON_REM1; bidirectional. */
  "GR2/NON_REM1": "25",
  /** Physical pin 26: AM1/GANG_EN; bidirectional. */
  "AM1/GANG_EN": "26",
  /** Physical pin 27: GR1/NON_REM0; bidirectional. */
  "GR1/NON_REM0": "27",
  /** Physical pin 28: VDD33; power_in. */
  "VDD33": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: VDD18; power_in. */
  "VDD18_30": "30",
  /** Physical pin 31: TEST0; input. */
  "TEST0": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: SDA/SMBDATA; bidirectional. */
  "SDA/SMBDATA": "34",
  /** Physical pin 35: SCL/SMBCLK; bidirectional. */
  "SCL/SMBCLK": "35",
  /** Physical pin 36: CFG_SEL0; input. */
  "CFG_SEL0": "36",
  /** Physical pin 37: PRTPWR4; output. */
  "PRTPWR4": "37",
  /** Physical pin 38: ~{OCS4}; input. */
  "~{OCS4}": "38",
  /** Physical pin 39: PRTPWR3; output. */
  "PRTPWR3": "39",
  /** Physical pin 40: ~{OCS3}; input. */
  "~{OCS3}": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: VDD18; passive. */
  "VDD18_42": "42",
  /** Physical pin 43: PRTPWR2; output. */
  "PRTPWR2": "43",
  /** Physical pin 44: ~{OCS2}; input. */
  "~{OCS2}": "44",
  /** Physical pin 45: PRTPWR1; output. */
  "PRTPWR1": "45",
  /** Physical pin 46: ~{OCS1}; input. */
  "~{OCS1}": "46",
  /** Physical pin 47: CLKIN_EN; input. */
  "CLKIN_EN": "47",
  /** Physical pin 48: TEST1; input. */
  "TEST1": "48",
  /** Physical pin 49: ~{RESET}; input. */
  "~{RESET}": "49",
  /** Physical pin 50: CFG_SEL1; input. */
  "CFG_SEL1": "50",
  /** Physical pin 51: SELF_PWR; input. */
  "SELF_PWR": "51",
  /** Physical pin 52: VBUS_DET; bidirectional. */
  "VBUS_DET": "52",
  /** Physical pin 53: VSS; passive. */
  "VSS_53": "53",
  /** Physical pin 54: VDD18; passive. */
  "VDD18_54": "54",
  /** Physical pin 55: VSS; passive. */
  "VSS_55": "55",
  /** Physical pin 56: NC; no_connect. */
  "NC_56": "56",
  /** Physical pin 57: XTAL2; output. */
  "XTAL2": "57",
  /** Physical pin 58: XTAL1/CLKIN; input. */
  "XTAL1/CLKIN": "58",
  /** Physical pin 59: CFG_SEL2; input. */
  "CFG_SEL2": "59",
  /** Physical pin 60: VDDA18PLL; power_in. */
  "VDDA18PLL": "60",
  /** Physical pin 61: VDDA33PLL; power_in. */
  "VDDA33PLL": "61",
  /** Physical pin 62: ATEST/REG_EN; bidirectional. */
  "ATEST/REG_EN": "62",
  /** Physical pin 63: RBIAS; input. */
  "RBIAS": "63",
  /** Physical pin 64: VSS; passive. */
  "VSS_64": "64",
}) {
  override schema = "Interface_USB:USB2504";
  override referencePrefix = "U";
}

/**
 * USB 2.0 Hi-Speed Hub Controller
 *
 * KiCad symbol: `Interface_USB:USB2514B_Bi`. Reference prefix: `U`.
 * Footprint filters: QFN*6x6mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00001692C.pdf
 * Keywords: USB2.0 Hi-Speed-USB-Hub Hub-Controller.
 * Default footprint: Package_DFN_QFN:QFN-36-1EP_6x6mm_P0.5mm_EP3.7x3.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB2514B_Bi extends Component.withPins({
  /** Physical pin 1: USBDM_DN1/PRT_DIS_M1; bidirectional. */
  "USBDM_DN1/PRT_DIS_M1": "1",
  /** Physical pin 2: USBDP_DN1/PRT_DIS_P1; bidirectional. */
  "USBDP_DN1/PRT_DIS_P1": "2",
  /** Physical pin 3: USBDM_DN2/PRT_DIS_M2; bidirectional. */
  "USBDM_DN2/PRT_DIS_M2": "3",
  /** Physical pin 4: USBDP_DN2/PRT_DIS_P2; bidirectional. */
  "USBDP_DN2/PRT_DIS_P2": "4",
  /** Physical pin 5: VDDA33; power_in. */
  "VDDA33_5": "5",
  /** Physical pin 6: USBDM_DN3/PRT_DIS_M3; bidirectional. */
  "USBDM_DN3/PRT_DIS_M3": "6",
  /** Physical pin 7: USBDP_DN3/PRT_DIS_P3; bidirectional. */
  "USBDP_DN3/PRT_DIS_P3": "7",
  /** Physical pin 8: USBDM_DN4/PRT_DIS_M4; bidirectional. */
  "USBDM_DN4/PRT_DIS_M4": "8",
  /** Physical pin 9: USBDP_DN4/PRT_DIS_P4; bidirectional. */
  "USBDP_DN4/PRT_DIS_P4": "9",
  /** Physical pin 10: VDDA33; power_in. */
  "VDDA33_10": "10",
  /** Physical pin 11: TEST; input. */
  "TEST": "11",
  /** Physical pin 12: PRTPWR1/BC_EN1; bidirectional. */
  "PRTPWR1/BC_EN1": "12",
  /** Physical pin 13: OCS_N1; input. */
  "OCS_N1": "13",
  /** Physical pin 14: CRFILT; input. */
  "CRFILT": "14",
  /** Physical pin 15: VDD33; power_in. */
  "VDD33_15": "15",
  /** Physical pin 16: PRTPWR2/BC_EN2; bidirectional. */
  "PRTPWR2/BC_EN2": "16",
  /** Physical pin 17: OCS_N2; input. */
  "OCS_N2": "17",
  /** Physical pin 18: PRTPWR3/BC_EN3; bidirectional. */
  "PRTPWR3/BC_EN3": "18",
  /** Physical pin 19: OCS_N3; input. */
  "OCS_N3": "19",
  /** Physical pin 20: PRTPWR4/BC_EN4; bidirectional. */
  "PRTPWR4/BC_EN4": "20",
  /** Physical pin 21: OCS_N4; input. */
  "OCS_N4": "21",
  /** Physical pin 22: SDA/SMBDATA/NON_REM1; bidirectional. */
  "SDA/SMBDATA/NON_REM1": "22",
  /** Physical pin 23: VDD33; power_in. */
  "VDD33_23": "23",
  /** Physical pin 24: SCL/SMBCLK/CFG_SEL0; bidirectional. */
  "SCL/SMBCLK/CFG_SEL0": "24",
  /** Physical pin 25: HS_IND/CFG_SEL1; bidirectional. */
  "HS_IND/CFG_SEL1": "25",
  /** Physical pin 26: RESET_N; input. */
  "RESET_N": "26",
  /** Physical pin 27: VBUS_DET; input. */
  "VBUS_DET": "27",
  /** Physical pin 28: SUSP_IND/LOCAL_PWR/NON_REM0; bidirectional. */
  "SUSP_IND/LOCAL_PWR/NON_REM0": "28",
  /** Physical pin 29: VDDA33; power_in. */
  "VDDA33_29": "29",
  /** Physical pin 30: USBDM_UP; bidirectional. */
  "USBDM_UP": "30",
  /** Physical pin 31: USBDP_UP; bidirectional. */
  "USBDP_UP": "31",
  /** Physical pin 32: XTALOUT; output. */
  "XTALOUT": "32",
  /** Physical pin 33: XTALIN/CLKIN; input. */
  "XTALIN/CLKIN": "33",
  /** Physical pin 34: PLLFILT; input. */
  "PLLFILT": "34",
  /** Physical pin 35: RBIAS; input. */
  "RBIAS": "35",
  /** Physical pin 36: VDDA33; power_in. */
  "VDDA33_36": "36",
  /** Physical pin 37: VSS; power_in. */
  "VSS": "37",
}) {
  override schema = "Interface_USB:USB2514B_Bi";
  override referencePrefix = "U";
}

/**
 * Hi-Speed USB Device Transceiver with UTMI Interface, QFN-56
 *
 * KiCad symbol: `Interface_USB:USB3250-ABZJ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002142A.pdf
 * Keywords: HS FS Device USB PHY UTMI.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP4.3x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB3250_ABZJ extends Component.withPins({
  /** Physical pin 1: VSSA; power_in. */
  "VSSA_1": "1",
  /** Physical pin 2: DM; bidirectional. */
  "DM": "2",
  /** Physical pin 3: DP; bidirectional. */
  "DP": "3",
  /** Physical pin 4: VDDA3.3; power_in. */
  "VDDA3.3_4": "4",
  /** Physical pin 5: VSSA; passive. */
  "VSSA_5": "5",
  /** Physical pin 6: RBIAS; passive. */
  "RBIAS": "6",
  /** Physical pin 7: VDDA3.3; passive. */
  "VDDA3.3_7": "7",
  /** Physical pin 8: VSSA; passive. */
  "VSSA_8": "8",
  /** Physical pin 9: VSSA; passive. */
  "VSSA_9": "9",
  /** Physical pin 10: XI; input. */
  "XI": "10",
  /** Physical pin 11: XO; output. */
  "XO": "11",
  /** Physical pin 12: VDDA1.8; power_in. */
  "VDDA1.8": "12",
  /** Physical pin 13: ~{SUSPEND}; input. */
  "~{SUSPEND}": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD3.3; power_in. */
  "VDD3.3_15": "15",
  /** Physical pin 16: VDD1.8; power_in. */
  "VDD1.8_16": "16",
  /** Physical pin 17: XCVRSELECT; input. */
  "XCVRSELECT": "17",
  /** Physical pin 18: TERMSELECT; input. */
  "TERMSELECT": "18",
  /** Physical pin 19: OPMODE1; input. */
  "OPMODE1": "19",
  /** Physical pin 20: OPMODE0; input. */
  "OPMODE0": "20",
  /** Physical pin 21: LINESTATE1; output. */
  "LINESTATE1": "21",
  /** Physical pin 22: LINESTATE0; output. */
  "LINESTATE0": "22",
  /** Physical pin 23: VDD1.8; passive. */
  "VDD1.8_23": "23",
  /** Physical pin 24: RESET; input. */
  "RESET": "24",
  /** Physical pin 25: DATA15; bidirectional. */
  "DATA15": "25",
  /** Physical pin 26: DATA14; bidirectional. */
  "DATA14": "26",
  /** Physical pin 27: DATA13; bidirectional. */
  "DATA13": "27",
  /** Physical pin 28: VDD3.3; passive. */
  "VDD3.3_28": "28",
  /** Physical pin 29: DATA12; bidirectional. */
  "DATA12": "29",
  /** Physical pin 30: DATA11; bidirectional. */
  "DATA11": "30",
  /** Physical pin 31: DATA10; bidirectional. */
  "DATA10": "31",
  /** Physical pin 32: DATA9; bidirectional. */
  "DATA9": "32",
  /** Physical pin 33: VSS; passive. */
  "VSS_33": "33",
  /** Physical pin 34: DATA8; bidirectional. */
  "DATA8": "34",
  /** Physical pin 35: DATA7; bidirectional. */
  "DATA7": "35",
  /** Physical pin 36: DATA6; bidirectional. */
  "DATA6": "36",
  /** Physical pin 37: DATA5; bidirectional. */
  "DATA5": "37",
  /** Physical pin 38: VDD1.8; passive. */
  "VDD1.8_38": "38",
  /** Physical pin 39: DATA4; bidirectional. */
  "DATA4": "39",
  /** Physical pin 40: DATA3; bidirectional. */
  "DATA3": "40",
  /** Physical pin 41: DATA2; bidirectional. */
  "DATA2": "41",
  /** Physical pin 42: DATA1; bidirectional. */
  "DATA1": "42",
  /** Physical pin 43: VDD3.3; passive. */
  "VDD3.3_43": "43",
  /** Physical pin 44: DATA0; bidirectional. */
  "DATA0": "44",
  /** Physical pin 45: TXVALID; input. */
  "TXVALID": "45",
  /** Physical pin 46: RXVALID; output. */
  "RXVALID": "46",
  /** Physical pin 47: VALIDH; bidirectional. */
  "VALIDH": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: CLKOUT; output. */
  "CLKOUT": "49",
  /** Physical pin 50: RXACTIVE; output. */
  "RXACTIVE": "50",
  /** Physical pin 51: TXREADY; output. */
  "TXREADY": "51",
  /** Physical pin 52: RXERROR; output. */
  "RXERROR": "52",
  /** Physical pin 53: VDD1.8; passive. */
  "VDD1.8_53": "53",
  /** Physical pin 54: DATABUS16_8; input. */
  "DATABUS16_8": "54",
  /** Physical pin 55: VSS; passive. */
  "VSS_55": "55",
  /** Physical pin 56: VSS; passive. */
  "VSS_56": "56",
  /** Physical pin 57: EP; power_in. */
  "EP": "57",
}) {
  override schema = "Interface_USB:USB3250-ABZJ";
  override referencePrefix = "U";
}

/**
 * Hi-Speed USB Host, Device or OTG PHY with ULPI Interface
 *
 * KiCad symbol: `Interface_USB:USB3300-EZK`. Reference prefix: `U`.
 * Footprint filters: *QFN*32*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00001783C.pdf
 * Keywords: USB OTG Hi-Speed PHY ULPI Interface.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB3300_EZK extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: CPEN; output. */
  "CPEN": "3",
  /** Physical pin 4: VBUS; power_in. */
  "VBUS": "4",
  /** Physical pin 5: ID; input. */
  "ID": "5",
  /** Physical pin 6: VDD3.3; power_in. */
  "VDD3.3_6": "6",
  /** Physical pin 7: DP; bidirectional. */
  "DP": "7",
  /** Physical pin 8: DM; bidirectional. */
  "DM": "8",
  /** Physical pin 9: RESET; input. */
  "RESET": "9",
  /** Physical pin 10: EXTVBUS; input. */
  "EXTVBUS": "10",
  /** Physical pin 11: NXT; output. */
  "NXT": "11",
  /** Physical pin 12: DIR; output. */
  "DIR": "12",
  /** Physical pin 13: STP; input. */
  "STP": "13",
  /** Physical pin 14: CLKOUT; output. */
  "CLKOUT": "14",
  /** Physical pin 15: VDD1.8; power_out. */
  "VDD1.8_15": "15",
  /** Physical pin 16: VDD3.3; power_in. */
  "VDD3.3_16": "16",
  /** Physical pin 17: DATA7; bidirectional. */
  "DATA7": "17",
  /** Physical pin 18: DATA6; bidirectional. */
  "DATA6": "18",
  /** Physical pin 19: DATA5; bidirectional. */
  "DATA5": "19",
  /** Physical pin 20: DATA4; bidirectional. */
  "DATA4": "20",
  /** Physical pin 21: DATA3; bidirectional. */
  "DATA3": "21",
  /** Physical pin 22: DATA2; bidirectional. */
  "DATA2": "22",
  /** Physical pin 23: DATA1; bidirectional. */
  "DATA1": "23",
  /** Physical pin 24: DATA0; bidirectional. */
  "DATA0": "24",
  /** Physical pin 25: VDD3.3; power_in. */
  "VDD3.3_25": "25",
  /** Physical pin 26: VDD1.8; power_out. */
  "VDD1.8_26": "26",
  /** Physical pin 27: XO; output. */
  "XO": "27",
  /** Physical pin 28: XI; input. */
  "XI": "28",
  /** Physical pin 29: VDDA1.8; power_out. */
  "VDDA1.8": "29",
  /** Physical pin 30: VDD3.3; power_in. */
  "VDD3.3_30": "30",
  /** Physical pin 31: REG_EN; bidirectional. */
  "REG_EN": "31",
  /** Physical pin 32: RBIAS; passive. */
  "RBIAS": "32",
  /** Physical pin 33: GND; power_in. */
  "GND_33": "33",
}) {
  override schema = "Interface_USB:USB3300-EZK";
  override referencePrefix = "U";
}

/**
 * Hi-Speed USB ULPI Transceiver, QFN-24
 *
 * KiCad symbol: `Interface_USB:USB3341`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/334x.pdf
 * Keywords: USB ULPI Transceiver.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB3341 extends Component.withPins({
  /** Physical pin 1: CLKOUT; output. */
  "CLKOUT": "1",
  /** Physical pin 2: NXT; output. */
  "NXT": "2",
  /** Physical pin 3: DATA0; bidirectional. */
  "DATA0": "3",
  /** Physical pin 4: DATA1; bidirectional. */
  "DATA1": "4",
  /** Physical pin 5: DATA2; bidirectional. */
  "DATA2": "5",
  /** Physical pin 6: DATA3; bidirectional. */
  "DATA3": "6",
  /** Physical pin 7: DATA4; bidirectional. */
  "DATA4": "7",
  /** Physical pin 8: DATA5; bidirectional. */
  "DATA5": "8",
  /** Physical pin 9: DATA6; bidirectional. */
  "DATA6": "9",
  /** Physical pin 10: DATA7; bidirectional. */
  "DATA7": "10",
  /** Physical pin 11: SPK_L; bidirectional. */
  "SPK_L": "11",
  /** Physical pin 12: SPK_R; bidirectional. */
  "SPK_R": "12",
  /** Physical pin 13: DP; bidirectional. */
  "DP": "13",
  /** Physical pin 14: DM; bidirectional. */
  "DM": "14",
  /** Physical pin 15: VDD33; power_out. */
  "VDD33": "15",
  /** Physical pin 16: VBAT; power_in. */
  "VBAT": "16",
  /** Physical pin 17: VBUS; input. */
  "VBUS": "17",
  /** Physical pin 18: ID; input. */
  "ID": "18",
  /** Physical pin 19: RBIAS; passive. */
  "RBIAS": "19",
  /** Physical pin 20: REFCLK; input. */
  "REFCLK": "20",
  /** Physical pin 21: ~{RESETB}; input. */
  "~{RESETB}": "21",
  /** Physical pin 22: VDD18; power_out. */
  "VDD18": "22",
  /** Physical pin 23: STP; input. */
  "STP": "23",
  /** Physical pin 24: DIR; output. */
  "DIR": "24",
  /** Physical pin 25: GND; power_in. */
  "GND": "25",
}) {
  override schema = "Interface_USB:USB3341";
  override referencePrefix = "U";
}

/**
 * Hi-Speed USB ULPI Transceiver, QFN-24
 *
 * KiCad symbol: `Interface_USB:USB3343`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/334x.pdf
 * Keywords: USB ULPI Transceiver.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB3343 extends Component.withPins({
  /** Physical pin 1: DIR; output. */
  "DIR": "1",
  /** Physical pin 2: CLKOUT; output. */
  "CLKOUT": "2",
  /** Physical pin 3: NXT; output. */
  "NXT": "3",
  /** Physical pin 4: DATA0; bidirectional. */
  "DATA0": "4",
  /** Physical pin 5: DATA1; bidirectional. */
  "DATA1": "5",
  /** Physical pin 6: DATA2; bidirectional. */
  "DATA2": "6",
  /** Physical pin 7: DATA3; bidirectional. */
  "DATA3": "7",
  /** Physical pin 8: DATA4; bidirectional. */
  "DATA4": "8",
  /** Physical pin 9: VDDIO; power_in. */
  "VDDIO": "9",
  /** Physical pin 10: DATA5; bidirectional. */
  "DATA5": "10",
  /** Physical pin 11: DATA6; bidirectional. */
  "DATA6": "11",
  /** Physical pin 12: DATA7; bidirectional. */
  "DATA7": "12",
  /** Physical pin 13: DP; bidirectional. */
  "DP": "13",
  /** Physical pin 14: DM; bidirectional. */
  "DM": "14",
  /** Physical pin 15: VDD33; power_out. */
  "VDD33": "15",
  /** Physical pin 16: VBAT; power_in. */
  "VBAT": "16",
  /** Physical pin 17: VBUS; input. */
  "VBUS": "17",
  /** Physical pin 18: ID; input. */
  "ID": "18",
  /** Physical pin 19: RBIAS; passive. */
  "RBIAS": "19",
  /** Physical pin 20: XO; output. */
  "XO": "20",
  /** Physical pin 21: REFCLK/XI; input. */
  "REFCLK/XI": "21",
  /** Physical pin 22: ~{RESETB}; input. */
  "~{RESETB}": "22",
  /** Physical pin 23: VDD18; power_out. */
  "VDD18": "23",
  /** Physical pin 24: STP; input. */
  "STP": "24",
  /** Physical pin 25: GND; power_in. */
  "GND": "25",
}) {
  override schema = "Interface_USB:USB3343";
  override referencePrefix = "U";
}

/**
 * Hi-Speed USB ULPI Transceiver, QFN-24
 *
 * KiCad symbol: `Interface_USB:USB3346`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/334x.pdf
 * Keywords: USB ULPI Transceiver.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB3346 extends Component.withPins({
  /** Physical pin 1: CLKOUT; output. */
  "CLKOUT": "1",
  /** Physical pin 2: NXT; output. */
  "NXT": "2",
  /** Physical pin 3: DATA0; bidirectional. */
  "DATA0": "3",
  /** Physical pin 4: DATA1; bidirectional. */
  "DATA1": "4",
  /** Physical pin 5: DATA2; bidirectional. */
  "DATA2": "5",
  /** Physical pin 6: DATA3; bidirectional. */
  "DATA3": "6",
  /** Physical pin 7: DATA4; bidirectional. */
  "DATA4": "7",
  /** Physical pin 8: DATA5; bidirectional. */
  "DATA5": "8",
  /** Physical pin 9: DATA6; bidirectional. */
  "DATA6": "9",
  /** Physical pin 10: DATA7; bidirectional. */
  "DATA7": "10",
  /** Physical pin 11: SPK_L; bidirectional. */
  "SPK_L": "11",
  /** Physical pin 12: SPK_R; bidirectional. */
  "SPK_R": "12",
  /** Physical pin 13: DP; bidirectional. */
  "DP": "13",
  /** Physical pin 14: DM; bidirectional. */
  "DM": "14",
  /** Physical pin 15: VDD33; power_out. */
  "VDD33": "15",
  /** Physical pin 16: VBAT; power_in. */
  "VBAT": "16",
  /** Physical pin 17: VBUS; input. */
  "VBUS": "17",
  /** Physical pin 18: ID; input. */
  "ID": "18",
  /** Physical pin 19: RBIAS; passive. */
  "RBIAS": "19",
  /** Physical pin 20: REFCLK; input. */
  "REFCLK": "20",
  /** Physical pin 21: ~{RESETB}; input. */
  "~{RESETB}": "21",
  /** Physical pin 22: VDD18; power_out. */
  "VDD18": "22",
  /** Physical pin 23: STP; input. */
  "STP": "23",
  /** Physical pin 24: DIR; output. */
  "DIR": "24",
  /** Physical pin 25: GND; power_in. */
  "GND": "25",
}) {
  override schema = "Interface_USB:USB3346";
  override referencePrefix = "U";
}

/**
 * Hi-Speed USB ULPI Transceiver, QFN-24
 *
 * KiCad symbol: `Interface_USB:USB3347`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/334x.pdf
 * Keywords: USB ULPI Transceiver.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB3347 extends Component.withPins({
  /** Physical pin 1: CLKOUT; output. */
  "CLKOUT": "1",
  /** Physical pin 2: NXT; output. */
  "NXT": "2",
  /** Physical pin 3: DATA0; bidirectional. */
  "DATA0": "3",
  /** Physical pin 4: DATA1; bidirectional. */
  "DATA1": "4",
  /** Physical pin 5: DATA2; bidirectional. */
  "DATA2": "5",
  /** Physical pin 6: DATA3; bidirectional. */
  "DATA3": "6",
  /** Physical pin 7: DATA4; bidirectional. */
  "DATA4": "7",
  /** Physical pin 8: DATA5; bidirectional. */
  "DATA5": "8",
  /** Physical pin 9: DATA6; bidirectional. */
  "DATA6": "9",
  /** Physical pin 10: DATA7; bidirectional. */
  "DATA7": "10",
  /** Physical pin 11: SPK_L; bidirectional. */
  "SPK_L": "11",
  /** Physical pin 12: SPK_R; bidirectional. */
  "SPK_R": "12",
  /** Physical pin 13: DP; bidirectional. */
  "DP": "13",
  /** Physical pin 14: DM; bidirectional. */
  "DM": "14",
  /** Physical pin 15: VDD33; power_out. */
  "VDD33": "15",
  /** Physical pin 16: VBAT; power_in. */
  "VBAT": "16",
  /** Physical pin 17: VBUS; input. */
  "VBUS": "17",
  /** Physical pin 18: ID; input. */
  "ID": "18",
  /** Physical pin 19: RBIAS; passive. */
  "RBIAS": "19",
  /** Physical pin 20: REFCLK; input. */
  "REFCLK": "20",
  /** Physical pin 21: ~{RESETB}; input. */
  "~{RESETB}": "21",
  /** Physical pin 22: VDD18; power_out. */
  "VDD18": "22",
  /** Physical pin 23: STP; input. */
  "STP": "23",
  /** Physical pin 24: DIR; output. */
  "DIR": "24",
  /** Physical pin 25: GND; power_in. */
  "GND": "25",
}) {
  override schema = "Interface_USB:USB3347";
  override referencePrefix = "U";
}

/**
 * USB 2.0 Switch with ESD Protection, UQFN-10 Pitch 0.4 mm
 *
 * KiCad symbol: `Interface_USB:USB3740B-AI2`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.3x1.8mm?P0.4mm*, UQFN*1.6x2.1mm?P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00001725D.pdf
 * Keywords: USB 2.0 High Speed Switch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB3740B_AI2 extends Component.withPins({
  /** Physical pin 1: DM_1; bidirectional. */
  "DM_1": "1",
  /** Physical pin 2: DP_1; bidirectional. */
  "DP_1": "2",
  /** Physical pin 3: OE_N; input. */
  "OE_N": "3",
  /** Physical pin 4: S; input. */
  "S": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: DP_2; bidirectional. */
  "DP_2": "6",
  /** Physical pin 7: DM_2; bidirectional. */
  "DM_2": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: DM; bidirectional. */
  "DM": "9",
  /** Physical pin 10: DP; bidirectional. */
  "DP": "10",
}) {
  override schema = "Interface_USB:USB3740B-AI2";
  override referencePrefix = "U";
}

/**
 * USB 2.0 Switch with ESD Protection, UQFN-10 Pitch 0.5mm
 *
 * KiCad symbol: `Interface_USB:USB3740B-AI9`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.3x1.8mm?P0.4mm*, UQFN*1.6x2.1mm?P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00001725D.pdf
 * Keywords: USB 2.0 High Speed Switch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USB3740B_AI9 extends Component.withPins({
  /** Physical pin 1: DM_1; bidirectional. */
  "DM_1": "1",
  /** Physical pin 2: DP_1; bidirectional. */
  "DP_1": "2",
  /** Physical pin 3: OE_N; input. */
  "OE_N": "3",
  /** Physical pin 4: S; input. */
  "S": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: DP_2; bidirectional. */
  "DP_2": "6",
  /** Physical pin 7: DM_2; bidirectional. */
  "DM_2": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: DM; bidirectional. */
  "DM": "9",
  /** Physical pin 10: DP; bidirectional. */
  "DP": "10",
}) {
  override schema = "Interface_USB:USB3740B-AI9";
  override referencePrefix = "U";
}

/**
 * USB 2.0 up to 12Mbps, Quad Channel USB UART/FIFO, RS485 capability, LQFP-64
 *
 * KiCad symbol: `Interface_USB:XR21B1424`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://assets.maxlinear.com/web/documents/xr21b1424.pdf
 * Keywords: USB Quad UART FIFO.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XR21B1424 extends Component.withPins({
  /** Physical pin 1: RXA; input. */
  "RXA": "1",
  /** Physical pin 2: GPIOA5/~{RTSA}/RS485A; bidirectional. */
  "GPIOA5/~{RTSA}/RS485A": "2",
  /** Physical pin 3: GPIOA4/~{CTSA}; bidirectional. */
  "GPIOA4/~{CTSA}": "3",
  /** Physical pin 4: GPIOA3/~{DTRA}; bidirectional. */
  "GPIOA3/~{DTRA}": "4",
  /** Physical pin 5: GPIOA2/~{DSRA}; bidirectional. */
  "GPIOA2/~{DSRA}": "5",
  /** Physical pin 6: GPIOA1/~{CDA}; bidirectional. */
  "GPIOA1/~{CDA}": "6",
  /** Physical pin 7: GPIOA0/~{RIA}/~{RWKA}; bidirectional. */
  "GPIOA0/~{RIA}/~{RWKA}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: USB_D+; bidirectional. */
  "USB_D+": "9",
  /** Physical pin 10: USB_D-; bidirectional. */
  "USB_D-": "10",
  /** Physical pin 11: VIO; power_in. */
  "VIO_11": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: VCC_REG; power_in. */
  "VCC_REG": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: VBUS_SENSE; input. */
  "VBUS_SENSE": "16",
  /** Physical pin 17: ~{RESET}; passive. */
  "~{RESET}": "17",
  /** Physical pin 18: USB_STAT2; output. */
  "USB_STAT2": "18",
  /** Physical pin 19: GPIOC9/RXTC; bidirectional. */
  "GPIOC9/RXTC": "19",
  /** Physical pin 20: GPIOC8/TXTC; bidirectional. */
  "GPIOC8/TXTC": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GPIOC7/RS485C; bidirectional. */
  "GPIOC7/RS485C": "22",
  /** Physical pin 23: GPIOC6/CLKC; bidirectional. */
  "GPIOC6/CLKC": "23",
  /** Physical pin 24: TXC; output. */
  "TXC": "24",
  /** Physical pin 25: USB_STAT1; output. */
  "USB_STAT1": "25",
  /** Physical pin 26: RXC; input. */
  "RXC": "26",
  /** Physical pin 27: GPIOC5/~{RTSC}/RS485C; bidirectional. */
  "GPIOC5/~{RTSC}/RS485C": "27",
  /** Physical pin 28: GPIOC4/~{CTSC}; bidirectional. */
  "GPIOC4/~{CTSC}": "28",
  /** Physical pin 29: GPIOC3/~{DTRC}; bidirectional. */
  "GPIOC3/~{DTRC}": "29",
  /** Physical pin 30: GPIOC2/~{DSRC}; bidirectional. */
  "GPIOC2/~{DSRC}": "30",
  /** Physical pin 31: GPIOC1/~{CDC}; bidirectional. */
  "GPIOC1/~{CDC}": "31",
  /** Physical pin 32: ~{TEST}; passive. */
  "~{TEST}": "32",
  /** Physical pin 33: GPIOC0/~{RIC}/~{RWKC}; bidirectional. */
  "GPIOC0/~{RIC}/~{RWKC}": "33",
  /** Physical pin 34: GPIOB9/RXTB; bidirectional. */
  "GPIOB9/RXTB": "34",
  /** Physical pin 35: GPIOB8/TXTB; bidirectional. */
  "GPIOB8/TXTB": "35",
  /** Physical pin 36: GPIOB7/RS485B; bidirectional. */
  "GPIOB7/RS485B": "36",
  /** Physical pin 37: GPIOB6/CLKB; bidirectional. */
  "GPIOB6/CLKB": "37",
  /** Physical pin 38: VIO; passive. */
  "VIO_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: TXB; output. */
  "TXB": "40",
  /** Physical pin 41: RXB; input. */
  "RXB": "41",
  /** Physical pin 42: GPIOB5/~{RTSB}/RS485B; bidirectional. */
  "GPIOB5/~{RTSB}/RS485B": "42",
  /** Physical pin 43: GPIOB4/~{CTSB}; bidirectional. */
  "GPIOB4/~{CTSB}": "43",
  /** Physical pin 44: GPIOB3/~{DTRB}; bidirectional. */
  "GPIOB3/~{DTRB}": "44",
  /** Physical pin 45: GPIOB2/~{DSRB}; bidirectional. */
  "GPIOB2/~{DSRB}": "45",
  /** Physical pin 46: GPIOB1/~{CDB}; bidirectional. */
  "GPIOB1/~{CDB}": "46",
  /** Physical pin 47: GPIOB0/~{RIB}/~{RWKB}; bidirectional. */
  "GPIOB0/~{RIB}/~{RWKB}": "47",
  /** Physical pin 48: GPIOD9/RXTD; bidirectional. */
  "GPIOD9/RXTD": "48",
  /** Physical pin 49: GPIOD8/TXTD; bidirectional. */
  "GPIOD8/TXTD": "49",
  /** Physical pin 50: GPIOD7/RS485D; bidirectional. */
  "GPIOD7/RS485D": "50",
  /** Physical pin 51: GPIOD6/CLKD; bidirectional. */
  "GPIOD6/CLKD": "51",
  /** Physical pin 52: TXD; output. */
  "TXD": "52",
  /** Physical pin 53: RXD; input. */
  "RXD": "53",
  /** Physical pin 54: GPIOD5/~{RTSD}/RS485D; bidirectional. */
  "GPIOD5/~{RTSD}/RS485D": "54",
  /** Physical pin 55: GPIOD4/~{CTSD}; bidirectional. */
  "GPIOD4/~{CTSD}": "55",
  /** Physical pin 56: GPIOD3/~{DTRD}; bidirectional. */
  "GPIOD3/~{DTRD}": "56",
  /** Physical pin 57: GPIOD2/~{DSRD}; bidirectional. */
  "GPIOD2/~{DSRD}": "57",
  /** Physical pin 58: GPIOD1/~{CDD}; bidirectional. */
  "GPIOD1/~{CDD}": "58",
  /** Physical pin 59: GPIOD0/~{RID}/~{RWKD}; bidirectional. */
  "GPIOD0/~{RID}/~{RWKD}": "59",
  /** Physical pin 60: GPIOA9/RXTA; bidirectional. */
  "GPIOA9/RXTA": "60",
  /** Physical pin 61: GPIOA8/TXTA; bidirectional. */
  "GPIOA8/TXTA": "61",
  /** Physical pin 62: GPIOA7/RS485A; bidirectional. */
  "GPIOA7/RS485A": "62",
  /** Physical pin 63: GPIOA6/CLKA; bidirectional. */
  "GPIOA6/CLKA": "63",
  /** Physical pin 64: TXA; output. */
  "TXA": "64",
}) {
  override schema = "Interface_USB:XR21B1424";
  override referencePrefix = "U";
}

