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
 */
export class ADUM4160 extends Component.withPins({
  "VBUS1": "1",
  "GND1_2": "2",
  "VDD1": "3",
  "PDEN": "4",
  "SPU": "5",
  "UD-": "6",
  "UD+": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "DD+": "10",
  "DD-": "11",
  "PIN": "12",
  "SPD": "13",
  "VDD2": "14",
  "GND2_15": "15",
  "VBUS2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBUS1: "power_in", GND1_2: "power_in", VDD1: "power_in", PDEN: "input", SPU: "input", "UD-": "bidirectional", "UD+": "bidirectional", GND1_8: "power_in", GND2_9: "power_in", "DD+": "bidirectional", "DD-": "bidirectional", PIN: "input", SPD: "input", VDD2: "power_in", GND2_15: "power_in", VBUS2: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADUM3160 extends Component.withPins({
  "VBUS1": "1",
  "GND1_2": "2",
  "VDD1": "3",
  "PDEN": "4",
  "SPU": "5",
  "UD-": "6",
  "UD+": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "DD+": "10",
  "DD-": "11",
  "PIN": "12",
  "SPD": "13",
  "VDD2": "14",
  "GND2_15": "15",
  "VBUS2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBUS1: "power_in", GND1_2: "power_in", VDD1: "power_in", PDEN: "input", SPU: "input", "UD-": "bidirectional", "UD+": "bidirectional", GND1_8: "power_in", GND2_9: "power_in", "DD+": "bidirectional", "DD-": "bidirectional", PIN: "input", SPD: "input", VDD2: "power_in", GND2_15: "power_in", VBUS2: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AP33771 extends Component.withPins({
  "ISENP": "1",
  "NC_2": "2",
  "GND_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "GPIO4": "6",
  "VSEL1": "7",
  "GPIO1": "8",
  "VSEL0": "9",
  "NC_10": "10",
  "VSEL2": "11",
  "V3VD": "12",
  "PSEL": "13",
  "VFB": "14",
  "IFB": "15",
  "CC2": "16",
  "CC1": "17",
  "NC_18": "18",
  "NC_19": "19",
  "V5V": "20",
  "NC_21": "21",
  "VBUS": "22",
  "PWR_EN": "23",
  "VCC": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ISENP: "bidirectional", NC_2: "no_connect", GND_3: "power_in", NC_4: "no_connect", NC_5: "no_connect", GPIO4: "bidirectional", VSEL1: "bidirectional", GPIO1: "bidirectional", VSEL0: "bidirectional", NC_10: "no_connect", VSEL2: "bidirectional", V3VD: "power_out", PSEL: "bidirectional", VFB: "input", IFB: "input", CC2: "bidirectional", CC1: "bidirectional", NC_18: "no_connect", NC_19: "no_connect", V5V: "power_out", NC_21: "no_connect", VBUS: "power_in", PWR_EN: "power_in", VCC: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class AP33772SDKZ_xx_FA02 extends Component.withPins({
  "ISENP": "1",
  "NC_2": "2",
  "GND_3": "3",
  "SDA": "4",
  "SCL": "5",
  "FLIP": "6",
  "GPIO": "7",
  "LED": "8",
  "INT": "9",
  "NC_10": "10",
  "VSEL": "11",
  "V18": "12",
  "OTP": "13",
  "NC_14": "14",
  "IFB": "15",
  "CC2": "16",
  "CC1": "17",
  "DN": "18",
  "DP": "19",
  "V5V": "20",
  "NC_21": "21",
  "VOUT": "22",
  "PWR_EN": "23",
  "VCC": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ISENP: "input", NC_2: "no_connect", GND_3: "power_in", SDA: "bidirectional", SCL: "input", FLIP: "output", GPIO: "bidirectional", LED: "output", INT: "output", NC_10: "no_connect", VSEL: "input", V18: "output", OTP: "passive", NC_14: "no_connect", IFB: "passive", CC2: "bidirectional", CC1: "bidirectional", DN: "bidirectional", DP: "bidirectional", V5V: "passive", NC_21: "no_connect", VOUT: "input", PWR_EN: "output", VCC: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class BQ24392 extends Component.withPins({
  "SW_OPEN": "1",
  "DM_HOST": "2",
  "DP_HOST": "3",
  "~{CHG_AL}": "4",
  "GOOD_BAT": "5",
  "GND": "6",
  "DP_CON": "7",
  "DM_CON": "8",
  "VBUS": "9",
  "CHG_DET": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SW_OPEN: "open_collector", DM_HOST: "bidirectional", DP_HOST: "bidirectional", "~{CHG_AL}": "open_collector", GOOD_BAT: "input", GND: "power_in", DP_CON: "bidirectional", DM_CON: "bidirectional", VBUS: "power_in", CHG_DET: "output", ...opts.pinTypes } });
  }
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
 */
export class CH221K extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "~{PG}": "3",
  "CC1": "4",
  "CC2": "5",
  "CFG": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", "~{PG}": "open_collector", CC1: "bidirectional", CC2: "bidirectional", CFG: "input", ...opts.pinTypes } });
  }
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
 */
export class CH224K extends Component.withPins({
  "VDD": "1",
  "CFG2": "2",
  "CFG3": "3",
  "DP": "4",
  "DM": "5",
  "CC2": "6",
  "CC1": "7",
  "VBUS": "8",
  "CFG1": "9",
  "PG": "10",
  "GND": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CFG2: "passive", CFG3: "passive", DP: "bidirectional", DM: "bidirectional", CC2: "bidirectional", CC1: "bidirectional", VBUS: "passive", CFG1: "passive", PG: "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CH236D extends Component.withPins({
  "GND": "0",
  "FBOX": "1",
  "VHV": "2",
  "NC_3": "3",
  "GATEP": "4",
  "GATEN": "5",
  "~{NMOS}": "6",
  "VDD": "7",
  "UD+": "8",
  "UD-": "9",
  "CC1": "10",
  "CC2": "11",
  "NC_12": "12",
  "NC_13": "13",
  "IS+": "14",
  "IS-": "15",
  "NC_16": "16",
  "VFB": "17",
  "IFB": "18",
  "VBUS": "19",
  "FBO": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", FBOX: "passive", VHV: "passive", NC_3: "no_connect", GATEP: "output", GATEN: "output", "~{NMOS}": "input", VDD: "power_in", "UD+": "bidirectional", "UD-": "bidirectional", CC1: "bidirectional", CC2: "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "IS+": "passive", "IS-": "passive", NC_16: "no_connect", VFB: "passive", IFB: "passive", VBUS: "power_in", FBO: "power_out", ...opts.pinTypes } });
  }
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
 */
export class CH246D extends Component.withPins({
  "GND": "0",
  "NC_1": "1",
  "VHV": "2",
  "HV1": "3",
  "HV0P": "4",
  "HV0N": "5",
  "NC_6": "6",
  "VDD": "7",
  "UDP": "8",
  "UDM": "9",
  "CC1": "10",
  "CC0": "11",
  "LV0": "12",
  "LV1": "13",
  "IS+": "14",
  "IS-": "15",
  "QII": "16",
  "LED1": "17",
  "NTC": "18",
  "OSC": "19",
  "LED0": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", NC_1: "no_connect", VHV: "power_in", HV1: "output", HV0P: "output", HV0N: "output", NC_6: "no_connect", VDD: "power_in", UDP: "bidirectional", UDM: "bidirectional", CC1: "bidirectional", CC0: "bidirectional", LV0: "output", LV1: "output", "IS+": "passive", "IS-": "passive", QII: "input", LED1: "open_emitter", NTC: "input", OSC: "input", LED0: "output", ...opts.pinTypes } });
  }
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
 */
export class CH330N extends Component.withPins({
  "UD+": "1",
  "UD-": "2",
  "GND": "3",
  "~{RTS}": "4",
  "VCC": "5",
  "TXD": "6",
  "RXD": "7",
  "V3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "UD+": "bidirectional", "UD-": "bidirectional", GND: "power_in", "~{RTS}": "output", VCC: "power_in", TXD: "output", RXD: "input", V3: "passive", ...opts.pinTypes } });
  }
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
 */
export class CH334F extends Component.withPins({
  "~{OVCUR}": "1",
  "NC_2": "2",
  "XO": "3",
  "XI": "4",
  "DM4-": "5",
  "DP4+": "6",
  "DM3-": "7",
  "DP3+": "8",
  "DM2-": "9",
  "DP2+": "10",
  "DM1-": "11",
  "DP1+": "12",
  "LED3/SCL": "13",
  "DMU-": "14",
  "DPU+": "15",
  "~{RESET}/CDP": "16",
  "NC_17": "17",
  "PSELF": "18",
  "V5": "19",
  "VDD33_{LDO}": "20",
  "LED4/SDA": "21",
  "LED1": "22",
  "LED2": "23",
  "~{PWREN}": "24",
  "GND": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{OVCUR}": "input", NC_2: "no_connect", XO: "passive", XI: "passive", "DM4-": "bidirectional", "DP4+": "bidirectional", "DM3-": "bidirectional", "DP3+": "bidirectional", "DM2-": "bidirectional", "DP2+": "bidirectional", "DM1-": "bidirectional", "DP1+": "bidirectional", "LED3/SCL": "bidirectional", "DMU-": "bidirectional", "DPU+": "bidirectional", "~{RESET}/CDP": "input", NC_17: "no_connect", PSELF: "input", V5: "power_in", "VDD33_{LDO}": "power_out", "LED4/SDA": "bidirectional", LED1: "bidirectional", LED2: "bidirectional", "~{PWREN}": "output", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CH334R extends Component.withPins({
  "DM4-": "1",
  "DP4+": "2",
  "DM3-": "3",
  "DP3+": "4",
  "DM2-": "5",
  "DP2+": "6",
  "DM1-": "7",
  "DP1+": "8",
  "~{RESET}/CDP": "9",
  "DMU-": "10",
  "DPU+": "11",
  "V5": "12",
  "VDD33_{LDO}": "13",
  "GND": "14",
  "XO": "15",
  "XI": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "DM4-": "bidirectional", "DP4+": "bidirectional", "DM3-": "bidirectional", "DP3+": "bidirectional", "DM2-": "bidirectional", "DP2+": "bidirectional", "DM1-": "bidirectional", "DP1+": "bidirectional", "~{RESET}/CDP": "input", "DMU-": "bidirectional", "DPU+": "bidirectional", V5: "power_in", "VDD33_{LDO}": "power_out", GND: "power_in", XO: "passive", XI: "passive", ...opts.pinTypes } });
  }
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
 */
export class CH334U extends Component.withPins({
  "GND_1": "1",
  "XO": "2",
  "XI": "3",
  "DM4-": "4",
  "DP4+": "5",
  "DM3-": "6",
  "DP3+": "7",
  "DM2-": "8",
  "DP2+": "9",
  "DM1-": "10",
  "DP1+": "11",
  "LED3/SCL": "14",
  "DMU-": "15",
  "DPU+": "16",
  "PSELF": "19",
  "V5": "20",
  "LED4/SDA": "22",
  "LED1": "23",
  "LED2": "24",
  "GND_12": "12",
  "VDD33": "13",
  "~{RESET}/CDP": "17",
  "NC_18": "18",
  "VDD33_{LDO}": "21",
  "~{PWREN}": "25",
  "~{OVCUR}": "26",
  "NC_27": "27",
  "GND_28": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", XO: "passive", XI: "passive", "DM4-": "bidirectional", "DP4+": "bidirectional", "DM3-": "bidirectional", "DP3+": "bidirectional", "DM2-": "bidirectional", "DP2+": "bidirectional", "DM1-": "bidirectional", "DP1+": "bidirectional", "LED3/SCL": "bidirectional", "DMU-": "bidirectional", "DPU+": "bidirectional", PSELF: "input", V5: "power_in", "LED4/SDA": "bidirectional", LED1: "output", LED2: "output", GND_12: "passive", VDD33: "power_in", "~{RESET}/CDP": "input", NC_18: "no_connect", "VDD33_{LDO}": "power_out", "~{PWREN}": "output", "~{OVCUR}": "input", NC_27: "no_connect", GND_28: "passive", ...opts.pinTypes } });
  }
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
 */
export class CH340C extends Component.withPins({
  "GND": "1",
  "TXD": "2",
  "RXD": "3",
  "V3": "4",
  "UD+": "5",
  "UD-": "6",
  "NC_7": "7",
  "NC_8": "8",
  "~{CTS}": "9",
  "~{DSR}": "10",
  "~{RI}": "11",
  "~{DCD}": "12",
  "~{DTR}": "13",
  "~{RTS}": "14",
  "R232": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", TXD: "output", RXD: "input", V3: "power_out", "UD+": "bidirectional", "UD-": "bidirectional", NC_7: "no_connect", NC_8: "no_connect", "~{CTS}": "input", "~{DSR}": "input", "~{RI}": "input", "~{DCD}": "input", "~{DTR}": "output", "~{RTS}": "output", R232: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CH340E extends Component.withPins({
  "UD+": "1",
  "UD-": "2",
  "GND": "3",
  "~{RTS}": "4",
  "~{CTS}": "5",
  "TNOW": "6",
  "VCC": "7",
  "TXD": "8",
  "RXD": "9",
  "V3": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "UD+": "bidirectional", "UD-": "bidirectional", GND: "power_in", "~{RTS}": "output", "~{CTS}": "input", TNOW: "output", VCC: "power_in", TXD: "output", RXD: "input", V3: "power_out", ...opts.pinTypes } });
  }
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
 */
export class CH340G extends Component.withPins({
  "GND": "1",
  "TXD": "2",
  "RXD": "3",
  "V3": "4",
  "UD+": "5",
  "UD-": "6",
  "XI": "7",
  "XO": "8",
  "~{CTS}": "9",
  "~{DSR}": "10",
  "~{RI}": "11",
  "~{DCD}": "12",
  "~{DTR}": "13",
  "~{RTS}": "14",
  "R232": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", TXD: "output", RXD: "input", V3: "power_out", "UD+": "bidirectional", "UD-": "bidirectional", XI: "input", XO: "output", "~{CTS}": "input", "~{DSR}": "input", "~{RI}": "input", "~{DCD}": "input", "~{DTR}": "output", "~{RTS}": "output", R232: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CH340K extends Component.withPins({
  "GND_11": "11",
  "UD+": "1",
  "UD-": "2",
  "GND_3": "3",
  "~{DTR}": "4",
  "~{CTS}": "5",
  "~{RTS}": "6",
  "VCC": "7",
  "TXD": "8",
  "RXD": "9",
  "V3": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_11: "passive", "UD+": "bidirectional", "UD-": "bidirectional", GND_3: "power_in", "~{DTR}": "output", "~{CTS}": "input", "~{RTS}": "output", VCC: "power_in", TXD: "output", RXD: "input", V3: "passive", ...opts.pinTypes } });
  }
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
 */
export class CH340N extends Component.withPins({
  "UD+": "1",
  "UD-": "2",
  "GND": "3",
  "~{RTS}": "4",
  "VCC": "5",
  "TXD": "6",
  "RXD": "7",
  "V3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "UD+": "bidirectional", "UD-": "bidirectional", GND: "power_in", "~{RTS}": "output", VCC: "power_in", TXD: "output", RXD: "input", V3: "passive", ...opts.pinTypes } });
  }
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
 */
export class CH340T extends Component.withPins({
  "CKOH": "1",
  "CKOL": "2",
  "TXD": "3",
  "RXD": "4",
  "V3": "5",
  "UD+": "6",
  "UD-": "7",
  "GND": "8",
  "XI": "9",
  "XO": "10",
  "~{CTS}": "11",
  "~{DSR}": "12",
  "~{RI}": "13",
  "~{DCD}": "14",
  "~{DTR}": "15",
  "~{RTS}": "16",
  "NC": "17",
  "R232": "18",
  "VCC": "19",
  "~{NOS}": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CKOH: "output", CKOL: "output", TXD: "output", RXD: "input", V3: "power_out", "UD+": "bidirectional", "UD-": "bidirectional", GND: "power_in", XI: "input", XO: "output", "~{CTS}": "input", "~{DSR}": "input", "~{RI}": "input", "~{DCD}": "input", "~{DTR}": "output", "~{RTS}": "output", NC: "no_connect", R232: "input", VCC: "power_in", "~{NOS}": "input", ...opts.pinTypes } });
  }
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
 */
export class CH340X extends Component.withPins({
  "UD+": "1",
  "UD-": "2",
  "GND": "3",
  "~{RTS}": "4",
  "~{CTS}": "5",
  "TNOW/~{DTR}": "6",
  "VCC": "7",
  "TXD": "8",
  "RXD": "9",
  "V3": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "UD+": "bidirectional", "UD-": "bidirectional", GND: "power_in", "~{RTS}": "output", "~{CTS}": "input", "TNOW/~{DTR}": "output", VCC: "power_in", TXD: "output", RXD: "input", V3: "power_out", ...opts.pinTypes } });
  }
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
 */
export class CH341A extends Component.withPins({
  "~{RTS}/D6": "21",
  "~{SLP}/D7": "22",
  "SDA": "23",
  "SCL": "24",
  "~{RDY}/~{STB}/~{WR}": "25",
  "TNOW/~{INI}/~{RST}": "26",
  "~{TEN}/BUSY/~{WT}": "27",
  "VCC": "28",
  "~{ACT}": "1",
  "RSTI": "2",
  "IN7/~{SIN}/~{AS}": "3",
  "~{ROV}/~{AFD}/~{DS}": "4",
  "TXD/~{ERR}": "5",
  "RXD/PEMP": "6",
  "~{INT}/~{ACK}": "7",
  "IN3/SLCT": "8",
  "V3": "9",
  "UD+": "10",
  "UD-": "11",
  "GND": "12",
  "XI": "13",
  "XO": "14",
  "~{CTS}/D0": "15",
  "~{DSR}/D1": "16",
  "~{RI}/D2": "17",
  "~{DCD}/D3": "18",
  "~{OUT}/D4": "19",
  "~{DTR}/D5": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RTS}/D6": "tri_state", "~{SLP}/D7": "tri_state", SDA: "bidirectional", SCL: "open_collector", "~{RDY}/~{STB}/~{WR}": "output", "TNOW/~{INI}/~{RST}": "output", "~{TEN}/BUSY/~{WT}": "passive", VCC: "power_in", "~{ACT}": "output", RSTI: "passive", "IN7/~{SIN}/~{AS}": "tri_state", "~{ROV}/~{AFD}/~{DS}": "tri_state", "TXD/~{ERR}": "bidirectional", "RXD/PEMP": "input", "~{INT}/~{ACK}": "passive", "IN3/SLCT": "passive", V3: "passive", "UD+": "bidirectional", "UD-": "bidirectional", GND: "power_in", XI: "input", XO: "output", "~{CTS}/D0": "tri_state", "~{DSR}/D1": "tri_state", "~{RI}/D2": "tri_state", "~{DCD}/D3": "tri_state", "~{OUT}/D4": "tri_state", "~{DTR}/D5": "tri_state", ...opts.pinTypes } });
  }
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
 */
export class CH343G extends Component.withPins({
  "GND": "1",
  "TXD": "2",
  "RXD": "3",
  "V3": "4",
  "UD+": "5",
  "UD-": "6",
  "VBUS": "7",
  "~{ACT}": "8",
  "~{DCD}": "9",
  "~{DTR}": "10",
  "~{RTS}": "11",
  "~{DSR}": "12",
  "~{CTS}": "13",
  "~{RI}": "14",
  "VIO": "15",
  "VDD5": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", TXD: "output", RXD: "input", V3: "power_out", "UD+": "bidirectional", "UD-": "bidirectional", VBUS: "input", "~{ACT}": "output", "~{DCD}": "input", "~{DTR}": "output", "~{RTS}": "output", "~{DSR}": "input", "~{CTS}": "input", "~{RI}": "input", VIO: "power_in", VDD5: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CH343P extends Component.withPins({
  "GND": "2",
  "GND_EPAD": "17",
  "VIO": "1",
  "VDD5": "3",
  "TXD": "4",
  "RXD": "5",
  "V3_{OUT}": "6",
  "UD+": "7",
  "UD-": "8",
  "VBUS": "9",
  "~{ACT}": "10",
  "~{DCD}": "11",
  "~{DTR}": "12",
  "~{RTS}": "13",
  "~{DSR}": "14",
  "~{CTS}": "15",
  "~{RI}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", GND_EPAD: "power_in", VIO: "power_in", VDD5: "power_in", TXD: "output", RXD: "input", "V3_{OUT}": "power_out", "UD+": "bidirectional", "UD-": "bidirectional", VBUS: "input", "~{ACT}": "output", "~{DCD}": "input", "~{DTR}": "output", "~{RTS}": "output", "~{DSR}": "input", "~{CTS}": "input", "~{RI}": "input", ...opts.pinTypes } });
  }
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
 */
export class CH344Q extends Component.withPins({
  "~{DTR2}/TNOW2/GPIO9": "19",
  "GND_20": "20",
  "NC": "1",
  "~{DSR2}": "2",
  "~{RI2}": "3",
  "~{DCD2}": "4",
  "XI": "5",
  "XO": "6",
  "~{RESET}": "7",
  "GND_8": "8",
  "VCC_9": "9",
  "~{CTS1}/GPIO2": "10",
  "~{RTS1}/GPIO3": "11",
  "TXD1": "12",
  "RXD1": "13",
  "~{ACT}/~{CFG}/~{DCD3}": "14",
  "TX_S/~{RI3}": "15",
  "RX_S/~{DSR3}": "16",
  "~{DSR1}": "17",
  "~{DTR1}/TNOW1/GPIO9": "18",
  "TXD2": "21",
  "RXD2": "22",
  "GND_23": "23",
  "VCC_24": "24",
  "~{RI1}": "25",
  "~{CTS2}/GPIO4": "26",
  "~{RTS2}/GPIO5": "27",
  "~{DCD1}/GPIO15": "28",
  "~{DSR0}/GPIO14": "29",
  "TXD0": "30",
  "RXD0": "31",
  "~{RI0}/GPIO13": "32",
  "~{DCD0}/GPIO12": "33",
  "~{DTR3}/TNOW3/GPIO11": "34",
  "GND_35": "35",
  "VCC_36": "36",
  "TXD3": "37",
  "RXD3": "38",
  "~{DTR0}/TNOW0/GPIO8": "39",
  "~{RTS0}/GPIO1": "40",
  "~{CTS0}/GPIO0": "41",
  "UD-": "42",
  "UD+": "43",
  "TEST": "44",
  "~{RTS3}/GPIO7": "45",
  "~{CTS3}/GPIO6": "46",
  "GND_47": "47",
  "VCC_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{DTR2}/TNOW2/GPIO9": "bidirectional", GND_20: "passive", NC: "no_connect", "~{DSR2}": "input", "~{RI2}": "input", "~{DCD2}": "input", XI: "input", XO: "output", "~{RESET}": "input", GND_8: "power_in", VCC_9: "power_in", "~{CTS1}/GPIO2": "bidirectional", "~{RTS1}/GPIO3": "bidirectional", TXD1: "output", RXD1: "input", "~{ACT}/~{CFG}/~{DCD3}": "bidirectional", "TX_S/~{RI3}": "bidirectional", "RX_S/~{DSR3}": "bidirectional", "~{DSR1}": "input", "~{DTR1}/TNOW1/GPIO9": "bidirectional", TXD2: "output", RXD2: "input", GND_23: "passive", VCC_24: "power_in", "~{RI1}": "input", "~{CTS2}/GPIO4": "bidirectional", "~{RTS2}/GPIO5": "bidirectional", "~{DCD1}/GPIO15": "bidirectional", "~{DSR0}/GPIO14": "input", TXD0: "output", RXD0: "input", "~{RI0}/GPIO13": "bidirectional", "~{DCD0}/GPIO12": "bidirectional", "~{DTR3}/TNOW3/GPIO11": "bidirectional", GND_35: "passive", VCC_36: "power_in", TXD3: "output", RXD3: "input", "~{DTR0}/TNOW0/GPIO8": "bidirectional", "~{RTS0}/GPIO1": "bidirectional", "~{CTS0}/GPIO0": "bidirectional", "UD-": "bidirectional", "UD+": "bidirectional", TEST: "input", "~{RTS3}/GPIO7": "bidirectional", "~{CTS3}/GPIO6": "bidirectional", GND_47: "passive", VCC_48: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CH9102F extends Component.withPins({
  "~{RI}": "1",
  "GND_2": "2",
  "D+": "3",
  "D-": "4",
  "VIO": "5",
  "V3": "6",
  "VDD5": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "~{ACT}": "10",
  "~{WAKEUP}/GPIO3": "11",
  "TNOW/GPIO2": "12",
  "RXS/GPIO1": "13",
  "TXS/GPIO0": "14",
  "~{SUSPEND}": "15",
  "GPIO4": "16",
  "SUSPEND": "17",
  "~{CTS}": "18",
  "~{RTS}": "19",
  "RXD": "20",
  "TXD": "21",
  "~{DSR}": "22",
  "~{DTR}": "23",
  "~{DCD}": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RI}": "input", GND_2: "power_in", "D+": "bidirectional", "D-": "bidirectional", VIO: "power_in", V3: "power_out", VDD5: "power_in", VBUS: "input", "~{RST}": "input", "~{ACT}": "output", "~{WAKEUP}/GPIO3": "bidirectional", "TNOW/GPIO2": "bidirectional", "RXS/GPIO1": "bidirectional", "TXS/GPIO0": "bidirectional", "~{SUSPEND}": "output", GPIO4: "bidirectional", SUSPEND: "output", "~{CTS}": "input", "~{RTS}": "output", RXD: "input", TXD: "output", "~{DSR}": "input", "~{DTR}": "output", "~{DCD}": "input", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class CP2102C_Axx_xQFN24 extends Component.withPins({
  "~{RI}": "1",
  "D+": "3",
  "D-": "4",
  "VIO": "5",
  "VDD": "6",
  "VREGIN": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "NC_10": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "~{SUSPEND}": "15",
  "NC_16": "16",
  "SUSPEND": "17",
  "~{CTS}": "18",
  "~{RTS}": "19",
  "RXD": "20",
  "TXD": "21",
  "~{DSR}": "22",
  "~{DTR}": "23",
  "~{DCD}": "24",
  "GND": "[2,25]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RI}": "input", "D+": "bidirectional", "D-": "bidirectional", VIO: "power_in", VDD: "power_in", VREGIN: "power_in", VBUS: "input", "~{RST}": "input", NC_10: "no_connect", NC_11: "no_connect", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", "~{SUSPEND}": "output", NC_16: "no_connect", SUSPEND: "output", "~{CTS}": "input", "~{RTS}": "output", RXD: "input", TXD: "tri_state", "~{DSR}": "input", "~{DTR}": "output", "~{DCD}": "input", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CP2102N_Axx_xQFN20 extends Component.withPins({
  "RS485/GPIO.1": "1",
  "CLK/GPIO.0": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "VREGIN": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "NC": "10",
  "~{SUSPEND}": "11",
  "GND_12": "12",
  "~{WAKEUP}": "13",
  "SUSPEND": "14",
  "~{CTS}": "15",
  "~{RTS}": "16",
  "RXD": "17",
  "TXD": "18",
  "~{RXT}/GPIO.3": "19",
  "~{TXT}/GPIO.2": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RS485/GPIO.1": "bidirectional", "CLK/GPIO.0": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", VREGIN: "power_in", VBUS: "input", "~{RST}": "input", NC: "no_connect", "~{SUSPEND}": "output", GND_12: "passive", "~{WAKEUP}": "input", SUSPEND: "output", "~{CTS}": "input", "~{RTS}": "output", RXD: "input", TXD: "output", "~{RXT}/GPIO.3": "bidirectional", "~{TXT}/GPIO.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class CP2102N_Axx_xQFN24 extends Component.withPins({
  "~{RI}/CLK": "1",
  "GND_2": "2",
  "D+": "3",
  "D-": "4",
  "VIO": "5",
  "VDD": "6",
  "VREGIN": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "NC_10": "10",
  "~{WAKEUP}/GPIO.3": "11",
  "RS485/GPIO.2": "12",
  "~{RXT}/GPIO.1": "13",
  "~{TXT}/GPIO.0": "14",
  "~{SUSPEND}": "15",
  "NC_16": "16",
  "SUSPEND": "17",
  "~{CTS}": "18",
  "~{RTS}": "19",
  "RXD": "20",
  "TXD": "21",
  "~{DSR}": "22",
  "~{DTR}": "23",
  "~{DCD}": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RI}/CLK": "bidirectional", GND_2: "power_in", "D+": "bidirectional", "D-": "bidirectional", VIO: "power_in", VDD: "power_in", VREGIN: "power_in", VBUS: "input", "~{RST}": "input", NC_10: "no_connect", "~{WAKEUP}/GPIO.3": "bidirectional", "RS485/GPIO.2": "bidirectional", "~{RXT}/GPIO.1": "bidirectional", "~{TXT}/GPIO.0": "bidirectional", "~{SUSPEND}": "output", NC_16: "no_connect", SUSPEND: "output", "~{CTS}": "input", "~{RTS}": "output", RXD: "input", TXD: "output", "~{DSR}": "input", "~{DTR}": "output", "~{DCD}": "input", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class CP2102N_Axx_xQFN28 extends Component.withPins({
  "~{DCD}": "1",
  "~{RI}/CLK": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "VREGIN": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "NC": "10",
  "~{SUSPEND}": "11",
  "SUSPEND": "12",
  "CHREN": "13",
  "CHR1": "14",
  "CHR0": "15",
  "~{WAKEUP}/GPIO.3": "16",
  "RS485/GPIO.2": "17",
  "~{RXT}/GPIO.1": "18",
  "~{TXT}/GPIO.0": "19",
  "GPIO.6": "20",
  "GPIO.5": "21",
  "GPIO.4": "22",
  "~{CTS}": "23",
  "~{RTS}": "24",
  "RXD": "25",
  "TXD": "26",
  "~{DSR}": "27",
  "~{DTR}": "28",
  "GND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{DCD}": "input", "~{RI}/CLK": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", VREGIN: "power_in", VBUS: "input", "~{RST}": "input", NC: "no_connect", "~{SUSPEND}": "output", SUSPEND: "output", CHREN: "output", CHR1: "output", CHR0: "output", "~{WAKEUP}/GPIO.3": "bidirectional", "RS485/GPIO.2": "bidirectional", "~{RXT}/GPIO.1": "bidirectional", "~{TXT}/GPIO.0": "bidirectional", "GPIO.6": "bidirectional", "GPIO.5": "bidirectional", "GPIO.4": "bidirectional", "~{CTS}": "input", "~{RTS}": "output", RXD: "input", TXD: "output", "~{DSR}": "input", "~{DTR}": "output", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class CP2104 extends Component.withPins({
  "~{RI}": "1",
  "GND_2": "2",
  "D+": "3",
  "D-": "4",
  "VIO": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "NC": "10",
  "GPIO.3": "11",
  "RS485/GPIO.2": "12",
  "RXT/GPIO.1": "13",
  "TXT/GPIO.0": "14",
  "~{SUSPEND}": "15",
  "VPP": "16",
  "SUSPEND": "17",
  "~{CTS}": "18",
  "~{RTS}": "19",
  "RXD": "20",
  "TXD": "21",
  "~{DSR}": "22",
  "~{DTR}": "23",
  "~{DCD}": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RI}": "input", GND_2: "power_in", "D+": "bidirectional", "D-": "bidirectional", VIO: "power_in", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}": "bidirectional", NC: "no_connect", "GPIO.3": "bidirectional", "RS485/GPIO.2": "bidirectional", "RXT/GPIO.1": "bidirectional", "TXT/GPIO.0": "bidirectional", "~{SUSPEND}": "output", VPP: "passive", SUSPEND: "output", "~{CTS}": "input", "~{RTS}": "output", RXD: "input", TXD: "output", "~{DSR}": "input", "~{DTR}": "output", "~{DCD}": "input", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class CP2105_F01_GM extends Component.withPins({
  "~{RI_SCI}": "1",
  "GND": "2",
  "D+": "3",
  "D-": "4",
  "V_{IO}": "5",
  "V_{DD}": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "~{CTS_ECI}": "10",
  "~{RTS_ECI}": "11",
  "RXD_ECI": "12",
  "TXD_ECI": "13",
  "~{DSR_ECI}": "14",
  "~{DTR_ECI}": "15",
  "~{DCD_ECI}": "16",
  "~{RI_ECI}": "17",
  "~{CTS_SCI}": "18",
  "~{RTS_SCI}": "19",
  "RXD_SCI": "20",
  "TXD_SCI": "21",
  "~{DSR_SCI}": "22",
  "~{DTR_SCI}": "23",
  "~{DCD_SCI}": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RI_SCI}": "input", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", "V_{IO}": "power_in", "V_{DD}": "power_in", REGIN: "power_in", VBUS: "input", "~{RST}": "bidirectional", "~{CTS_ECI}": "input", "~{RTS_ECI}": "output", RXD_ECI: "input", TXD_ECI: "output", "~{DSR_ECI}": "input", "~{DTR_ECI}": "output", "~{DCD_ECI}": "input", "~{RI_ECI}": "input", "~{CTS_SCI}": "input", "~{RTS_SCI}": "output", RXD_SCI: "input", TXD_SCI: "output", "~{DSR_SCI}": "input", "~{DTR_SCI}": "output", "~{DCD_SCI}": "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CP2108_xxx_xM extends Component.withPins({
  "RX3": "1",
  "VSSHD": "2",
  "VIOHD": "3",
  "TX3": "4",
  "~{CTS3}": "5",
  "~{RTS3}": "6",
  "~{RI3}": "7",
  "~{DCD3}": "8",
  "~{DSR3}": "9",
  "~{DTR3}": "10",
  "~{RI2}": "11",
  "~{DCD2}": "12",
  "~{CTS2}": "13",
  "~{RTS2}": "14",
  "RX2": "15",
  "TX2": "16",
  "~{DSR2}": "17",
  "~{DTR2}": "18",
  "~{SUSPEND}": "19",
  "SUSPEND": "20",
  "GPIO15": "21",
  "GPIO14": "22",
  "GPIO13": "23",
  "VIO_24": "24",
  "VSS_25": "25",
  "GPIO12": "26",
  "GPIO11": "27",
  "GPIO10": "28",
  "GPIO9": "29",
  "GPIO8": "30",
  "GPIO7": "31",
  "GPIO6": "32",
  "GPIO5": "33",
  "GPIO4": "34",
  "NC_35": "35",
  "NC_36": "36",
  "GPIO3": "37",
  "GPIO2": "38",
  "VIO_39": "39",
  "GPIO1": "40",
  "GPIO0": "41",
  "~{RI1}": "42",
  "~{DCD1}": "43",
  "~{DSR1}": "44",
  "~{DTR1}": "45",
  "~{CTS1}": "46",
  "~{RTS1}": "47",
  "RX1": "48",
  "TX1": "49",
  "~{RI0}": "50",
  "~{DCD0}": "51",
  "~{DSR0}": "52",
  "~{DTR0}": "53",
  "~{CTS0}": "54",
  "~{RTS0}": "55",
  "RX0": "56",
  "TX0": "57",
  "VDD": "58",
  "VSS_59": "59",
  "VREGIN": "60",
  "VBUS": "61",
  "D+": "62",
  "D-": "63",
  "~{RESET}": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RX3: "input", VSSHD: "power_in", VIOHD: "power_in", TX3: "output", "~{CTS3}": "input", "~{RTS3}": "output", "~{RI3}": "input", "~{DCD3}": "input", "~{DSR3}": "input", "~{DTR3}": "output", "~{RI2}": "input", "~{DCD2}": "input", "~{CTS2}": "input", "~{RTS2}": "output", RX2: "input", TX2: "output", "~{DSR2}": "input", "~{DTR2}": "output", "~{SUSPEND}": "output", SUSPEND: "output", GPIO15: "bidirectional", GPIO14: "bidirectional", GPIO13: "bidirectional", VIO_24: "power_in", VSS_25: "power_in", GPIO12: "bidirectional", GPIO11: "bidirectional", GPIO10: "bidirectional", GPIO9: "bidirectional", GPIO8: "bidirectional", GPIO7: "bidirectional", GPIO6: "bidirectional", GPIO5: "bidirectional", GPIO4: "bidirectional", NC_35: "no_connect", NC_36: "no_connect", GPIO3: "bidirectional", GPIO2: "bidirectional", VIO_39: "passive", GPIO1: "bidirectional", GPIO0: "bidirectional", "~{RI1}": "input", "~{DCD1}": "input", "~{DSR1}": "input", "~{DTR1}": "output", "~{CTS1}": "input", "~{RTS1}": "output", RX1: "input", TX1: "output", "~{RI0}": "input", "~{DCD0}": "input", "~{DSR0}": "input", "~{DTR0}": "output", "~{CTS0}": "input", "~{RTS0}": "output", RX0: "input", TX0: "output", VDD: "power_in", VSS_59: "passive", VREGIN: "power_in", VBUS: "input", "D+": "bidirectional", "D-": "bidirectional", "~{RESET}": "input", VSS_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class CP2112 extends Component.withPins({
  "SDA": "1",
  "GND_2": "2",
  "D+": "3",
  "D-": "4",
  "VIO": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "NC_10": "10",
  "SUSPEND": "11",
  "GPIO.7": "12",
  "GPIO.6": "13",
  "GPIO.5": "14",
  "GPIO.4": "15",
  "VPP": "16",
  "~{SUSPEND}": "17",
  "NC_18": "18",
  "NC_19": "19",
  "GPIO.3": "20",
  "GPIO.2": "21",
  "GPIO.1": "22",
  "GPIO.0": "23",
  "SCL": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND_2: "power_in", "D+": "bidirectional", "D-": "bidirectional", VIO: "power_in", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}": "input", NC_10: "no_connect", SUSPEND: "output", "GPIO.7": "bidirectional", "GPIO.6": "bidirectional", "GPIO.5": "bidirectional", "GPIO.4": "bidirectional", VPP: "power_in", "~{SUSPEND}": "output", NC_18: "no_connect", NC_19: "no_connect", "GPIO.3": "bidirectional", "GPIO.2": "bidirectional", "GPIO.1": "bidirectional", "GPIO.0": "bidirectional", SCL: "output", GND_25: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CP2615_xx_xM extends Component.withPins({
  "I2S_SDIN": "1",
  "I2S_SCLK": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}": "9",
  "NC": "10",
  "GPIO.7": "11",
  "GPIO.6": "12",
  "~{CFGMODE}": "21",
  "GPIO.10/~{RESETOUT}": "22",
  "GPIO.14/RX": "23",
  "GPIO.13/TX": "24",
  "GPIO.12/CLKOUT": "25",
  "I2S_MCLK": "26",
  "GPIO.11/RTS": "27",
  "I2S_LRCLK": "28",
  "I2C_SCL": "29",
  "I2C_SDA": "30",
  "GPIO.15/CTS": "31",
  "I2S_SDOUT": "32",
  "GPIO.5": "13",
  "GPIO.4": "14",
  "GPIO.3": "15",
  "GPIO.2": "16",
  "GPIO.1": "17",
  "GPIO.0": "18",
  "GPIO.9/BUTTONS": "19",
  "GPIO.8/ADC": "20",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I2S_SDIN: "input", I2S_SCLK: "output", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}": "bidirectional", NC: "no_connect", "GPIO.7": "bidirectional", "GPIO.6": "bidirectional", "~{CFGMODE}": "input", "GPIO.10/~{RESETOUT}": "bidirectional", "GPIO.14/RX": "bidirectional", "GPIO.13/TX": "bidirectional", "GPIO.12/CLKOUT": "bidirectional", I2S_MCLK: "output", "GPIO.11/RTS": "bidirectional", I2S_LRCLK: "output", I2C_SCL: "bidirectional", I2C_SDA: "bidirectional", "GPIO.15/CTS": "bidirectional", I2S_SDOUT: "output", "GPIO.5": "bidirectional", "GPIO.4": "bidirectional", "GPIO.3": "bidirectional", "GPIO.2": "bidirectional", "GPIO.1": "bidirectional", "GPIO.0": "bidirectional", "GPIO.9/BUTTONS": "bidirectional", "GPIO.8/ADC": "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class CY7C65211_24LTXI extends Component.withPins({
  "SCB_0/GPIO_6": "1",
  "SCB_5/GPIO_7": "2",
  "VSSD_3": "3",
  "GPIO_8": "4",
  "GPIO_9": "5",
  "GPIO_10": "6",
  "GPIO_11": "7",
  "SUSPEND": "8",
  "WAKEUP": "9",
  "USBDP": "10",
  "USBDM": "11",
  "VCCD": "12",
  "VSSD_13": "13",
  "~{XRES}": "14",
  "VBUS": "15",
  "VSSD_16": "16",
  "VSSA": "17",
  "GPIO_0": "18",
  "GPIO_1": "19",
  "SCB_1/GPIO_2": "20",
  "SCB_2/GPIO_3": "21",
  "SCB_3/GPIO_4": "22",
  "SCB_4/GPIO_5": "23",
  "VDDD": "24",
  "1EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCB_0/GPIO_6": "bidirectional", "SCB_5/GPIO_7": "bidirectional", VSSD_3: "power_in", GPIO_8: "tri_state", GPIO_9: "tri_state", GPIO_10: "tri_state", GPIO_11: "tri_state", SUSPEND: "output", WAKEUP: "input", USBDP: "bidirectional", USBDM: "bidirectional", VCCD: "power_in", VSSD_13: "power_in", "~{XRES}": "input", VBUS: "power_out", VSSD_16: "power_in", VSSA: "power_in", GPIO_0: "tri_state", GPIO_1: "tri_state", "SCB_1/GPIO_2": "bidirectional", "SCB_2/GPIO_3": "bidirectional", "SCB_3/GPIO_4": "bidirectional", "SCB_4/GPIO_5": "bidirectional", VDDD: "power_in", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class CY7C65211A_24LTXI extends Component.withPins({
  "SCB_0/GPIO_6": "1",
  "SCB_5/GPIO_7": "2",
  "VSSD_3": "3",
  "GPIO_8": "4",
  "GPIO_9": "5",
  "GPIO_10": "6",
  "GPIO_11": "7",
  "SUSPEND": "8",
  "WAKEUP": "9",
  "USBDP": "10",
  "USBDM": "11",
  "VCCD": "12",
  "VSSD_13": "13",
  "~{XRES}": "14",
  "VBUS": "15",
  "VSSD_16": "16",
  "VSSA": "17",
  "GPIO_0": "18",
  "GPIO_1": "19",
  "SCB_1/GPIO_2": "20",
  "SCB_2/GPIO_3": "21",
  "SCB_3/GPIO_4": "22",
  "SCB_4/GPIO_5": "23",
  "VDDD": "24",
  "1EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCB_0/GPIO_6": "bidirectional", "SCB_5/GPIO_7": "bidirectional", VSSD_3: "power_in", GPIO_8: "tri_state", GPIO_9: "tri_state", GPIO_10: "tri_state", GPIO_11: "tri_state", SUSPEND: "output", WAKEUP: "input", USBDP: "bidirectional", USBDM: "bidirectional", VCCD: "power_in", VSSD_13: "power_in", "~{XRES}": "input", VBUS: "power_out", VSSD_16: "power_in", VSSA: "power_in", GPIO_0: "tri_state", GPIO_1: "tri_state", "SCB_1/GPIO_2": "bidirectional", "SCB_2/GPIO_3": "bidirectional", "SCB_3/GPIO_4": "bidirectional", "SCB_4/GPIO_5": "bidirectional", VDDD: "power_in", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class CY7C65213_28PVXI extends Component.withPins({
  "TXD": "1",
  "DTR": "2",
  "RTS": "3",
  "VCCIO": "4",
  "RXD": "5",
  "RI": "6",
  "GND_7": "7",
  "GPIO5": "8",
  "DSR": "9",
  "DCD": "10",
  "CTS": "11",
  "GPIO4": "12",
  "GPIO2": "13",
  "GPIO3": "14",
  "USBDP": "15",
  "USBDM": "16",
  "VCCD": "17",
  "GND_18": "18",
  "~{RESET}": "19",
  "VCC": "20",
  "GND_21": "21",
  "GPIO1": "22",
  "GPIO0": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DNU": "26",
  "GPIO6": "27",
  "GPIO7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "output", DTR: "output", RTS: "output", VCCIO: "power_in", RXD: "input", RI: "input", GND_7: "power_in", GPIO5: "tri_state", DSR: "input", DCD: "input", CTS: "input", GPIO4: "bidirectional", GPIO2: "tri_state", GPIO3: "bidirectional", USBDP: "bidirectional", USBDM: "bidirectional", VCCD: "passive", GND_18: "power_in", "~{RESET}": "bidirectional", VCC: "power_in", GND_21: "power_in", GPIO1: "bidirectional", GPIO0: "bidirectional", NC_24: "no_connect", NC_25: "no_connect", DNU: "passive", GPIO6: "tri_state", GPIO7: "tri_state", ...opts.pinTypes } });
  }
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
 */
export class CY7C65213_32LTXI extends Component.withPins({
  "VCCIO": "1",
  "RXD": "2",
  "RI": "3",
  "GND_4": "4",
  "GPIO5": "5",
  "DSR": "6",
  "DCD": "7",
  "CTS": "8",
  "GPIO4": "9",
  "GPIO2": "10",
  "GPIO3": "11",
  "GPIO6": "12",
  "GPIO7": "13",
  "USBDP": "14",
  "USBDM": "15",
  "VCCD": "16",
  "GND_17": "17",
  "~{RESET}": "18",
  "VCC": "19",
  "GND_20": "20",
  "GPIO1": "21",
  "GPIO0": "22",
  "DNU_23": "23",
  "AGND": "24",
  "DNU_25": "25",
  "DNU_26": "26",
  "DNU_27": "27",
  "DNU_28": "28",
  "DNU_29": "29",
  "TXD": "30",
  "DTR": "31",
  "RTS": "32",
  "1EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCCIO: "power_in", RXD: "input", RI: "input", GND_4: "power_in", GPIO5: "tri_state", DSR: "input", DCD: "input", CTS: "input", GPIO4: "bidirectional", GPIO2: "tri_state", GPIO3: "bidirectional", GPIO6: "tri_state", GPIO7: "tri_state", USBDP: "bidirectional", USBDM: "bidirectional", VCCD: "passive", GND_17: "power_in", "~{RESET}": "bidirectional", VCC: "power_in", GND_20: "power_in", GPIO1: "bidirectional", GPIO0: "bidirectional", DNU_23: "passive", AGND: "power_in", DNU_25: "passive", DNU_26: "passive", DNU_27: "passive", DNU_28: "passive", DNU_29: "passive", TXD: "output", DTR: "output", RTS: "output", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class CY7C65213A_28PVXI extends Component.withPins({
  "TXD": "1",
  "DTR": "2",
  "RTS": "3",
  "VCCIO": "4",
  "RXD": "5",
  "RI": "6",
  "GND_7": "7",
  "GPIO5": "8",
  "DSR": "9",
  "DCD": "10",
  "CTS": "11",
  "GPIO4": "12",
  "GPIO2": "13",
  "GPIO3": "14",
  "USBDP": "15",
  "USBDM": "16",
  "VCCD": "17",
  "GND_18": "18",
  "~{RESET}": "19",
  "VCC": "20",
  "GND_21": "21",
  "GPIO1": "22",
  "GPIO0": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DNU": "26",
  "GPIO6": "27",
  "GPIO7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "output", DTR: "output", RTS: "output", VCCIO: "power_in", RXD: "input", RI: "input", GND_7: "power_in", GPIO5: "tri_state", DSR: "input", DCD: "input", CTS: "input", GPIO4: "bidirectional", GPIO2: "tri_state", GPIO3: "bidirectional", USBDP: "bidirectional", USBDM: "bidirectional", VCCD: "passive", GND_18: "power_in", "~{RESET}": "bidirectional", VCC: "power_in", GND_21: "power_in", GPIO1: "bidirectional", GPIO0: "bidirectional", NC_24: "no_connect", NC_25: "no_connect", DNU: "passive", GPIO6: "tri_state", GPIO7: "tri_state", ...opts.pinTypes } });
  }
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
 */
export class CY7C65213A_32LTXI extends Component.withPins({
  "VCCIO": "1",
  "RXD": "2",
  "RI": "3",
  "GND_4": "4",
  "GPIO5": "5",
  "DSR": "6",
  "DCD": "7",
  "CTS": "8",
  "GPIO4": "9",
  "GPIO2": "10",
  "GPIO3": "11",
  "GPIO6": "12",
  "GPIO7": "13",
  "USBDP": "14",
  "USBDM": "15",
  "VCCD": "16",
  "GND_17": "17",
  "~{RESET}": "18",
  "VCC": "19",
  "GND_20": "20",
  "GPIO1": "21",
  "GPIO0": "22",
  "DNU_23": "23",
  "AGND": "24",
  "DNU_25": "25",
  "DNU_26": "26",
  "DNU_27": "27",
  "DNU_28": "28",
  "DNU_29": "29",
  "TXD": "30",
  "DTR": "31",
  "RTS": "32",
  "1EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCCIO: "power_in", RXD: "input", RI: "input", GND_4: "power_in", GPIO5: "tri_state", DSR: "input", DCD: "input", CTS: "input", GPIO4: "bidirectional", GPIO2: "tri_state", GPIO3: "bidirectional", GPIO6: "tri_state", GPIO7: "tri_state", USBDP: "bidirectional", USBDM: "bidirectional", VCCD: "passive", GND_17: "power_in", "~{RESET}": "bidirectional", VCC: "power_in", GND_20: "power_in", GPIO1: "bidirectional", GPIO0: "bidirectional", DNU_23: "passive", AGND: "power_in", DNU_25: "passive", DNU_26: "passive", DNU_27: "passive", DNU_28: "passive", DNU_29: "passive", TXD: "output", DTR: "output", RTS: "output", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class CY7C65215_32LTXI extends Component.withPins({
  "VDDD_1": "1",
  "SCB0_0/GPIO_8": "2",
  "SCB0_5/GPIO_9": "3",
  "VSSD_4": "4",
  "SCB1_0/GPIO_10": "5",
  "SCB1_1/GPIO_11": "6",
  "SCB1_2/GPIO_12": "7",
  "SCB1_3/GPIO_13": "8",
  "SCB1_4/GPIO_14": "9",
  "SCB1_5/GPIO_15": "10",
  "SUSPEND": "11",
  "WAKEUP": "12",
  "GPIO_16": "13",
  "USBDP": "14",
  "USBDM": "15",
  "VCCD": "16",
  "VSSD_17": "17",
  "~{XRES}": "18",
  "VBUS": "19",
  "VSSD_20": "20",
  "GPIO_17": "21",
  "GPIO_18": "22",
  "VDDD_23": "23",
  "VSSA": "24",
  "GPIO_0": "25",
  "GPIO_1": "26",
  "SCB0_1/GPIO_2": "27",
  "SCB0_2/GPIO_3": "28",
  "SCB0_3/GPIO_4": "29",
  "SCB0_4/GPIO_5": "30",
  "GPIO_6": "31",
  "GPIO_7": "32",
  "1EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "SCB0_0/GPIO_8": "bidirectional", "SCB0_5/GPIO_9": "bidirectional", VSSD_4: "power_in", "SCB1_0/GPIO_10": "bidirectional", "SCB1_1/GPIO_11": "bidirectional", "SCB1_2/GPIO_12": "bidirectional", "SCB1_3/GPIO_13": "bidirectional", "SCB1_4/GPIO_14": "bidirectional", "SCB1_5/GPIO_15": "bidirectional", SUSPEND: "output", WAKEUP: "input", GPIO_16: "tri_state", USBDP: "bidirectional", USBDM: "bidirectional", VCCD: "power_in", VSSD_17: "power_in", "~{XRES}": "input", VBUS: "power_out", VSSD_20: "power_in", GPIO_17: "tri_state", GPIO_18: "tri_state", VDDD_23: "power_in", VSSA: "power_in", GPIO_0: "bidirectional", GPIO_1: "bidirectional", "SCB0_1/GPIO_2": "bidirectional", "SCB0_2/GPIO_3": "bidirectional", "SCB0_3/GPIO_4": "bidirectional", "SCB0_4/GPIO_5": "bidirectional", GPIO_6: "bidirectional", GPIO_7: "bidirectional", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class CY7C65215A_32LTXI extends Component.withPins({
  "VDDD_1": "1",
  "SCB0_0/GPIO_8": "2",
  "SCB0_5/GPIO_9": "3",
  "VSSD_4": "4",
  "SCB1_0/GPIO_10": "5",
  "SCB1_1/GPIO_11": "6",
  "SCB1_2/GPIO_12": "7",
  "SCB1_3/GPIO_13": "8",
  "SCB1_4/GPIO_14": "9",
  "SCB1_5/GPIO_15": "10",
  "SUSPEND": "11",
  "WAKEUP": "12",
  "GPIO_16": "13",
  "USBDP": "14",
  "USBDM": "15",
  "VCCD": "16",
  "VSSD_17": "17",
  "~{XRES}": "18",
  "VBUS": "19",
  "VSSD_20": "20",
  "GPIO_17": "21",
  "GPIO_18": "22",
  "VDDD_23": "23",
  "VSSA": "24",
  "GPIO_0": "25",
  "GPIO_1": "26",
  "SCB0_1/GPIO_2": "27",
  "SCB0_2/GPIO_3": "28",
  "SCB0_3/GPIO_4": "29",
  "SCB0_4/GPIO_5": "30",
  "GPIO_6": "31",
  "GPIO_7": "32",
  "1EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "SCB0_0/GPIO_8": "bidirectional", "SCB0_5/GPIO_9": "bidirectional", VSSD_4: "power_in", "SCB1_0/GPIO_10": "bidirectional", "SCB1_1/GPIO_11": "bidirectional", "SCB1_2/GPIO_12": "bidirectional", "SCB1_3/GPIO_13": "bidirectional", "SCB1_4/GPIO_14": "bidirectional", "SCB1_5/GPIO_15": "bidirectional", SUSPEND: "output", WAKEUP: "input", GPIO_16: "tri_state", USBDP: "bidirectional", USBDM: "bidirectional", VCCD: "power_in", VSSD_17: "power_in", "~{XRES}": "input", VBUS: "power_out", VSSD_20: "power_in", GPIO_17: "tri_state", GPIO_18: "tri_state", VDDD_23: "power_in", VSSA: "power_in", GPIO_0: "bidirectional", GPIO_1: "bidirectional", "SCB0_1/GPIO_2": "bidirectional", "SCB0_2/GPIO_3": "bidirectional", "SCB0_3/GPIO_4": "bidirectional", "SCB0_4/GPIO_5": "bidirectional", GPIO_6: "bidirectional", GPIO_7: "bidirectional", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class CYPD3171_24LQXQ extends Component.withPins({
  "P1.0": "1",
  "P1.1": "2",
  "VBUS_P_CTRL": "3",
  "VBUS_C_CTRL": "4",
  "DP1/P1.2": "5",
  "DM1/P1.3": "6",
  "P0.0/SWD_DAT_0": "7",
  "P0.1/SWD_CLK_0": "8",
  "P2.0/AXRES": "9",
  "P2.1": "10",
  "VBUS_C_MON_DIS": "11",
  "P2.2": "12",
  "P2.3": "13",
  "CC2": "14",
  "CC1": "15",
  "DM0/P3.1": "16",
  "DP0/P3.0": "17",
  "VBUS_IN_DIS": "18",
  "CSP": "19",
  "FB": "20",
  "COMP": "21",
  "GND_22": "22",
  "VDDD": "23",
  "VCCD": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.0": "bidirectional", "P1.1": "bidirectional", VBUS_P_CTRL: "output", VBUS_C_CTRL: "output", "DP1/P1.2": "bidirectional", "DM1/P1.3": "bidirectional", "P0.0/SWD_DAT_0": "bidirectional", "P0.1/SWD_CLK_0": "bidirectional", "P2.0/AXRES": "bidirectional", "P2.1": "bidirectional", VBUS_C_MON_DIS: "input", "P2.2": "bidirectional", "P2.3": "bidirectional", CC2: "bidirectional", CC1: "bidirectional", "DM0/P3.1": "bidirectional", "DP0/P3.0": "bidirectional", VBUS_IN_DIS: "input", CSP: "input", FB: "output", COMP: "input", GND_22: "power_in", VDDD: "power_in", VCCD: "power_out", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class CYPD3174_16SXQ extends Component.withPins({
  "FB": "1",
  "COMP": "2",
  "VDDD": "3",
  "VCCD": "4",
  "VBUS_P_CTRL": "5",
  "P0.0/SWD_DAT_0": "6",
  "P0.1/SWD_CLK_0": "7",
  "P2.0/AXRES": "8",
  "VBUS_C_MON_DIS": "9",
  "CC2": "10",
  "CC1": "11",
  "DM0/P3.1": "12",
  "DP0/P3.0": "13",
  "VBUS_IN_DIS": "14",
  "GND": "15",
  "CSP": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FB: "output", COMP: "input", VDDD: "power_in", VCCD: "power_out", VBUS_P_CTRL: "output", "P0.0/SWD_DAT_0": "bidirectional", "P0.1/SWD_CLK_0": "bidirectional", "P2.0/AXRES": "bidirectional", VBUS_C_MON_DIS: "input", CC2: "bidirectional", CC1: "bidirectional", "DM0/P3.1": "bidirectional", "DP0/P3.0": "bidirectional", VBUS_IN_DIS: "input", GND: "power_in", CSP: "input", ...opts.pinTypes } });
  }
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
 */
export class CYPD3174_24LQXQ extends Component.withPins({
  "P1.0": "1",
  "P1.1": "2",
  "VBUS_P_CTRL": "3",
  "VBUS_C_CTRL": "4",
  "DP1/P1.2": "5",
  "DM1/P1.3": "6",
  "P0.0/SWD_DAT_0": "7",
  "P0.1/SWD_CLK_0": "8",
  "P2.0/AXRES": "9",
  "P2.1": "10",
  "VBUS_C_MON_DIS": "11",
  "P2.2": "12",
  "P2.3": "13",
  "CC2": "14",
  "CC1": "15",
  "DM0/P3.1": "16",
  "DP0/P3.0": "17",
  "VBUS_IN_DIS": "18",
  "CSP": "19",
  "FB": "20",
  "COMP": "21",
  "GND_22": "22",
  "VDDD": "23",
  "VCCD": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.0": "bidirectional", "P1.1": "bidirectional", VBUS_P_CTRL: "output", VBUS_C_CTRL: "output", "DP1/P1.2": "bidirectional", "DM1/P1.3": "bidirectional", "P0.0/SWD_DAT_0": "bidirectional", "P0.1/SWD_CLK_0": "bidirectional", "P2.0/AXRES": "bidirectional", "P2.1": "bidirectional", VBUS_C_MON_DIS: "input", "P2.2": "bidirectional", "P2.3": "bidirectional", CC2: "bidirectional", CC1: "bidirectional", "DM0/P3.1": "bidirectional", "DP0/P3.0": "bidirectional", VBUS_IN_DIS: "input", CSP: "input", FB: "output", COMP: "input", GND_22: "power_in", VDDD: "power_in", VCCD: "power_out", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class CYPD3175_24LQXQ extends Component.withPins({
  "P1.0": "1",
  "P1.1": "2",
  "VBUS_P_CTRL": "3",
  "VBUS_C_CTRL": "4",
  "DP1/P1.2": "5",
  "DM1/P1.3": "6",
  "P0.0/SWD_DAT_0": "7",
  "P0.1/SWD_CLK_0": "8",
  "P2.0/AXRES": "9",
  "P2.1": "10",
  "VBUS_C_MON_DIS": "11",
  "P2.2": "12",
  "P2.3": "13",
  "CC2": "14",
  "CC1": "15",
  "DM0/P3.1": "16",
  "DP0/P3.0": "17",
  "VBUS_IN_DIS": "18",
  "CSP": "19",
  "FB": "20",
  "COMP": "21",
  "GND_22": "22",
  "VDDD": "23",
  "VCCD": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.0": "bidirectional", "P1.1": "bidirectional", VBUS_P_CTRL: "output", VBUS_C_CTRL: "output", "DP1/P1.2": "bidirectional", "DM1/P1.3": "bidirectional", "P0.0/SWD_DAT_0": "bidirectional", "P0.1/SWD_CLK_0": "bidirectional", "P2.0/AXRES": "bidirectional", "P2.1": "bidirectional", VBUS_C_MON_DIS: "input", "P2.2": "bidirectional", "P2.3": "bidirectional", CC2: "bidirectional", CC1: "bidirectional", "DM0/P3.1": "bidirectional", "DP0/P3.0": "bidirectional", VBUS_IN_DIS: "input", CSP: "input", FB: "output", COMP: "input", GND_22: "power_in", VDDD: "power_in", VCCD: "power_out", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class CYPD3177_24LQ extends Component.withPins({
  "VBUS_MIN": "1",
  "VBUS_MAX": "2",
  "VBUS_FET_EN": "3",
  "SAFE_PWR_EN": "4",
  "ISNK_COARSE": "5",
  "ISNK_FINE": "6",
  "~{HPI_INT}": "7",
  "GPIO_1": "8",
  "FAULT": "9",
  "FLIP": "10",
  "VDC_OUT": "11",
  "HPI_SDA": "12",
  "HPI_SCL": "13",
  "CC2": "14",
  "CC1": "15",
  "NC_16": "16",
  "NC_17": "17",
  "VBUS_IN": "18",
  "GND_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "GND_22": "22",
  "VDDD": "23",
  "VCCD": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBUS_MIN: "input", VBUS_MAX: "input", VBUS_FET_EN: "output", SAFE_PWR_EN: "output", ISNK_COARSE: "input", ISNK_FINE: "input", "~{HPI_INT}": "input", GPIO_1: "bidirectional", FAULT: "output", FLIP: "output", VDC_OUT: "output", HPI_SDA: "bidirectional", HPI_SCL: "bidirectional", CC2: "bidirectional", CC1: "bidirectional", NC_16: "no_connect", NC_17: "no_connect", VBUS_IN: "power_in", GND_19: "power_in", NC_20: "no_connect", NC_21: "no_connect", GND_22: "passive", VDDD: "power_out", VCCD: "power_out", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class FE1_1s extends Component.withPins({
  "VSS": "1",
  "XOUT": "2",
  "XIN": "3",
  "DM4": "4",
  "DP4": "5",
  "DM3": "6",
  "DP3": "7",
  "DM2": "8",
  "DP2": "9",
  "DM1": "10",
  "DP1": "11",
  "VD18_O": "12",
  "VD33": "13",
  "REXT": "14",
  "DMU": "15",
  "DPU": "16",
  "~{XRSTJ}": "17",
  "VBUSM": "18",
  "BUSJ": "19",
  "VDD5": "20",
  "VD33_O": "21",
  "DRV": "22",
  "LED1/EESCL": "23",
  "LED2": "24",
  "PWRJ": "25",
  "OVCJ": "26",
  "TESTJ/EESDA": "27",
  "VD18": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", DM4: "bidirectional", DP4: "bidirectional", DM3: "bidirectional", DP3: "bidirectional", DM2: "bidirectional", DP2: "bidirectional", DM1: "bidirectional", DP1: "bidirectional", VD18_O: "power_out", VD33: "power_in", REXT: "passive", DMU: "bidirectional", DPU: "bidirectional", "~{XRSTJ}": "input", VBUSM: "input", BUSJ: "input", VDD5: "power_in", VD33_O: "power_out", DRV: "bidirectional", "LED1/EESCL": "bidirectional", LED2: "bidirectional", PWRJ: "output", OVCJ: "input", "TESTJ/EESDA": "bidirectional", VD18: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FSUSB30MUX extends Component.withPins({
  "S": "1",
  "HSD1+": "2",
  "HSD2+": "3",
  "D+": "4",
  "GND": "5",
  "D-": "6",
  "HSD2-": "7",
  "HSD1-": "8",
  "~{OE}": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "input", "HSD1+": "bidirectional", "HSD2+": "bidirectional", "D+": "bidirectional", GND: "power_in", "D-": "bidirectional", "HSD2-": "bidirectional", "HSD1-": "bidirectional", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FSUSB42MUX extends Component.withPins({
  "VCC": "1",
  "SEL": "2",
  "D+": "3",
  "D-": "4",
  "GND": "5",
  "HSD1-": "6",
  "HSD1+": "7",
  "HSD2-": "8",
  "HSD2+": "9",
  "~{OE}": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", SEL: "input", "D+": "bidirectional", "D-": "bidirectional", GND: "power_in", "HSD1-": "bidirectional", "HSD1+": "bidirectional", "HSD2-": "bidirectional", "HSD2+": "bidirectional", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class FT200XD extends Component.withPins({
  "USBDM": "1",
  "~{RESET}": "2",
  "3V3OUT": "3",
  "VCC": "4",
  "CBUS0": "5",
  "SCL": "6",
  "VCCIO": "7",
  "SDA": "8",
  "GND_9": "9",
  "USBDP": "10",
  "GND_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { USBDM: "input", "~{RESET}": "input", "3V3OUT": "power_out", VCC: "power_in", CBUS0: "bidirectional", SCL: "input", VCCIO: "power_in", SDA: "bidirectional", GND_9: "power_in", USBDP: "input", GND_11: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT201XQ extends Component.withPins({
  "VCCIO": "1",
  "SDA": "2",
  "GND_3": "3",
  "CBUS4": "4",
  "CBUS2": "5",
  "USBDP": "6",
  "USBDM": "7",
  "3V3OUT": "8",
  "~{RESET}": "9",
  "VCC": "10",
  "CBUS1": "11",
  "CBUS0": "12",
  "GND_13": "13",
  "CBUS3": "14",
  "CBUS5": "15",
  "SCL": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCCIO: "power_in", SDA: "bidirectional", GND_3: "power_in", CBUS4: "bidirectional", CBUS2: "bidirectional", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", CBUS1: "bidirectional", CBUS0: "bidirectional", GND_13: "power_in", CBUS3: "bidirectional", CBUS5: "bidirectional", SCL: "input", GND_17: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT201XS extends Component.withPins({
  "CBUS5": "1",
  "SCL": "2",
  "VCCIO": "3",
  "SDA": "4",
  "GND_5": "5",
  "CBUS4": "6",
  "CBUS2": "7",
  "USBDP": "8",
  "USBDM": "9",
  "3V3OUT": "10",
  "~{RESET}": "11",
  "VCC": "12",
  "GND_13": "13",
  "CBUS1": "14",
  "CBUS0": "15",
  "CBUS3": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CBUS5: "bidirectional", SCL: "input", VCCIO: "power_out", SDA: "bidirectional", GND_5: "power_in", CBUS4: "bidirectional", CBUS2: "bidirectional", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", GND_13: "power_in", CBUS1: "bidirectional", CBUS0: "bidirectional", CBUS3: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class FT220XQ extends Component.withPins({
  "VCCIO": "1",
  "MIOSI1": "2",
  "GND_3": "3",
  "MIOSI3": "4",
  "MISO": "5",
  "USBDP": "6",
  "USBDM": "7",
  "3V3OUT": "8",
  "~{RESET}": "9",
  "VCC": "10",
  "~{CS}": "11",
  "CLK": "12",
  "GND_13": "13",
  "CBUS3": "14",
  "MIOSI0": "15",
  "MIOSI2": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCCIO: "power_in", MIOSI1: "input", GND_3: "power_in", MIOSI3: "input", MISO: "input", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", "~{CS}": "input", CLK: "input", GND_13: "power_in", CBUS3: "bidirectional", MIOSI0: "input", MIOSI2: "input", GND_17: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT220XS extends Component.withPins({
  "MIOSI0": "1",
  "MIOSI2": "2",
  "VCCIO": "3",
  "MIOSI1": "4",
  "GND_5": "5",
  "MIOSI3": "6",
  "MISO": "7",
  "USBDP": "8",
  "USBDM": "9",
  "3V3OUT": "10",
  "~{RESET}": "11",
  "VCC": "12",
  "GND_13": "13",
  "~{CS}": "14",
  "CLK": "15",
  "CBUS3": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MIOSI0: "input", MIOSI2: "input", VCCIO: "power_in", MIOSI1: "input", GND_5: "power_in", MIOSI3: "input", MISO: "input", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", GND_13: "power_in", "~{CS}": "input", CLK: "input", CBUS3: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class FT221XQ extends Component.withPins({
  "MIOSI1": "1",
  "MIOSI7": "2",
  "GND_3": "3",
  "MIOSI5": "4",
  "MIOSI6": "5",
  "MIOSI3": "6",
  "MISO": "7",
  "USBDP": "8",
  "USBDM": "9",
  "3V3OUT": "10",
  "~{RESET}": "11",
  "VCC": "12",
  "GND_13": "13",
  "~{CS}": "14",
  "CLK": "15",
  "CBUS3": "16",
  "MIOSI0": "17",
  "MIOSI4": "18",
  "MIOSI2": "19",
  "VCCIO": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MIOSI1: "input", MIOSI7: "input", GND_3: "power_in", MIOSI5: "input", MIOSI6: "input", MIOSI3: "input", MISO: "input", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", GND_13: "power_in", "~{CS}": "input", CLK: "input", CBUS3: "bidirectional", MIOSI0: "input", MIOSI4: "input", MIOSI2: "input", VCCIO: "power_in", GND_21: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT221XS extends Component.withPins({
  "MIOSI4": "1",
  "MIOSI2": "2",
  "VCCIO": "3",
  "MIOSI1": "4",
  "MIOSI7": "5",
  "GND_6": "6",
  "MIOSI5": "7",
  "MIOSI6": "8",
  "MIOSI3": "9",
  "MISO": "10",
  "USBDP": "11",
  "USBDM": "12",
  "3V3OUT": "13",
  "~{RESET}": "14",
  "VCC": "15",
  "GND_16": "16",
  "~{CS}": "17",
  "CLK": "18",
  "CBUS3": "19",
  "MIOSI0": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MIOSI4: "input", MIOSI2: "input", VCCIO: "power_in", MIOSI1: "input", MIOSI7: "input", GND_6: "power_in", MIOSI5: "input", MIOSI6: "input", MIOSI3: "input", MISO: "input", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", GND_16: "power_in", "~{CS}": "input", CLK: "input", CBUS3: "bidirectional", MIOSI0: "input", ...opts.pinTypes } });
  }
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
 */
export class FT2232D extends Component.withPins({
  "EECLK": "1",
  "EEDATA": "2",
  "VCC_3": "3",
  "~{RESET}": "4",
  "~{RSTOUT}": "5",
  "3V3OUT": "6",
  "USBDP": "7",
  "USBDM": "8",
  "GND_9": "9",
  "SI/WUA": "10",
  "ACBUS3": "11",
  "ACBUS2": "12",
  "ACBUS1": "13",
  "VCCIOA": "14",
  "ACBUS0": "15",
  "ADBUS7": "16",
  "ADBUS6": "17",
  "GND_18": "18",
  "ADBUS5": "19",
  "ADBUS4": "20",
  "ADBUS3": "21",
  "ADBUS2": "22",
  "ADBUS1": "23",
  "ADBUS0": "24",
  "GND_25": "25",
  "SI/WUB": "26",
  "BCBUS3": "27",
  "BCBUS2": "28",
  "BCBUS1": "29",
  "BCBUS0": "30",
  "VCCIOB": "31",
  "BDBUS7": "32",
  "BDBUS6": "33",
  "GND_34": "34",
  "BDBUS5": "35",
  "BDBUS4": "36",
  "BDBUS3": "37",
  "BDBUS2": "38",
  "BDBUS1": "39",
  "BDBUS0": "40",
  "~{PWREN}": "41",
  "VCC_42": "42",
  "XTIN": "43",
  "XTOUT": "44",
  "AGND": "45",
  "AVCC": "46",
  "TEST": "47",
  "EECS": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EECLK: "output", EEDATA: "bidirectional", VCC_3: "power_in", "~{RESET}": "input", "~{RSTOUT}": "output", "3V3OUT": "power_out", USBDP: "bidirectional", USBDM: "bidirectional", GND_9: "power_in", "SI/WUA": "bidirectional", ACBUS3: "bidirectional", ACBUS2: "bidirectional", ACBUS1: "bidirectional", VCCIOA: "power_in", ACBUS0: "bidirectional", ADBUS7: "bidirectional", ADBUS6: "bidirectional", GND_18: "power_in", ADBUS5: "bidirectional", ADBUS4: "bidirectional", ADBUS3: "bidirectional", ADBUS2: "bidirectional", ADBUS1: "bidirectional", ADBUS0: "bidirectional", GND_25: "power_in", "SI/WUB": "output", BCBUS3: "output", BCBUS2: "output", BCBUS1: "output", BCBUS0: "output", VCCIOB: "power_in", BDBUS7: "output", BDBUS6: "output", GND_34: "power_in", BDBUS5: "output", BDBUS4: "output", BDBUS3: "output", BDBUS2: "output", BDBUS1: "output", BDBUS0: "output", "~{PWREN}": "output", VCC_42: "power_in", XTIN: "input", XTOUT: "output", AGND: "power_in", AVCC: "power_in", TEST: "input", EECS: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class FT2232HL extends Component.withPins({
  "GND_1": "1",
  "OSCI": "2",
  "OSCO": "3",
  "VPHY": "4",
  "GND_5": "5",
  "REF": "6",
  "DM": "7",
  "DP": "8",
  "VPLL": "9",
  "AGND": "10",
  "GND_11": "11",
  "VCORE_12": "12",
  "TEST": "13",
  "~{RESET}": "14",
  "GND_15": "15",
  "ADBUS0": "16",
  "ADBUS1": "17",
  "ADBUS2": "18",
  "ADBUS3": "19",
  "VCCIO_20": "20",
  "ADBUS4": "21",
  "ADBUS5": "22",
  "ADBUS6": "23",
  "ADBUS7": "24",
  "GND_25": "25",
  "ACBUS0": "26",
  "ACBUS1": "27",
  "ACBUS2": "28",
  "ACBUS3": "29",
  "ACBUS4": "30",
  "VCCIO_31": "31",
  "ACBUS5": "32",
  "ACBUS6": "33",
  "ACBUS7": "34",
  "GND_35": "35",
  "~{SUSPEND}": "36",
  "VCORE_37": "37",
  "BDBUS0": "38",
  "BDBUS1": "39",
  "BDBUS2": "40",
  "BDBUS3": "41",
  "VCCIO_42": "42",
  "BDBUS4": "43",
  "BDBUS5": "44",
  "BDBUS6": "45",
  "BDBUS7": "46",
  "GND_47": "47",
  "BCBUS0": "48",
  "VREGOUT": "49",
  "VREGIN": "50",
  "GND_51": "51",
  "BCBUS1": "52",
  "BCBUS2": "53",
  "BCBUS3": "54",
  "BCBUS4": "55",
  "VCCIO_56": "56",
  "BCBUS5": "57",
  "BCBUS6": "58",
  "BCBUS7": "59",
  "~{PWREN}": "60",
  "EEDATA": "61",
  "EECLK": "62",
  "EECS": "63",
  "VCORE_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", OSCI: "input", OSCO: "output", VPHY: "power_in", GND_5: "power_in", REF: "output", DM: "bidirectional", DP: "bidirectional", VPLL: "input", AGND: "power_in", GND_11: "power_in", VCORE_12: "power_in", TEST: "input", "~{RESET}": "input", GND_15: "power_in", ADBUS0: "bidirectional", ADBUS1: "bidirectional", ADBUS2: "bidirectional", ADBUS3: "bidirectional", VCCIO_20: "power_in", ADBUS4: "bidirectional", ADBUS5: "bidirectional", ADBUS6: "bidirectional", ADBUS7: "bidirectional", GND_25: "power_in", ACBUS0: "bidirectional", ACBUS1: "bidirectional", ACBUS2: "bidirectional", ACBUS3: "bidirectional", ACBUS4: "bidirectional", VCCIO_31: "power_in", ACBUS5: "bidirectional", ACBUS6: "bidirectional", ACBUS7: "bidirectional", GND_35: "power_in", "~{SUSPEND}": "output", VCORE_37: "power_in", BDBUS0: "bidirectional", BDBUS1: "bidirectional", BDBUS2: "bidirectional", BDBUS3: "bidirectional", VCCIO_42: "power_in", BDBUS4: "bidirectional", BDBUS5: "bidirectional", BDBUS6: "bidirectional", BDBUS7: "bidirectional", GND_47: "power_in", BCBUS0: "bidirectional", VREGOUT: "power_out", VREGIN: "power_in", GND_51: "power_in", BCBUS1: "bidirectional", BCBUS2: "bidirectional", BCBUS3: "bidirectional", BCBUS4: "bidirectional", VCCIO_56: "power_in", BCBUS5: "bidirectional", BCBUS6: "bidirectional", BCBUS7: "bidirectional", "~{PWREN}": "output", EEDATA: "bidirectional", EECLK: "output", EECS: "output", VCORE_64: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT2232HPQ extends Component.withPins({
  "EECLK": "1",
  "EEDATA": "2",
  "TEST": "3",
  "~{RESET}": "4",
  "GPIO3": "5",
  "ADBUS0": "6",
  "ADBUS1": "7",
  "VCORE_8": "8",
  "GND_9": "9",
  "VCCIO_10": "10",
  "ADBUS2": "11",
  "ADBUS3": "12",
  "ADBUS4": "13",
  "ADBUS5": "14",
  "ADBUS6": "15",
  "ADBUS7": "16",
  "ACBUS0": "17",
  "ACBUS1": "18",
  "ACBUS2": "19",
  "ACBUS3": "20",
  "ACBUS4": "21",
  "ACBUS5": "22",
  "ACBUS6": "23",
  "ACBUS7": "24",
  "VCORE_25": "25",
  "VCCIO_26": "26",
  "OSCI": "27",
  "OSCO": "28",
  "GND_29": "29",
  "VREGIN": "30",
  "VREGOUT": "31",
  "FSOURCE": "32",
  "VPP": "33",
  "BDBUS0": "34",
  "BDBUS1": "35",
  "BDBUS2": "36",
  "BDBUS3": "37",
  "BDBUS4": "38",
  "VCCIO_39": "39",
  "BDBUS5": "40",
  "BDBUS6": "41",
  "BDBUS7": "42",
  "~{SUSPEND}": "43",
  "VCORE_44": "44",
  "BCBUS0": "45",
  "BCBUS1": "46",
  "BCBUS2": "47",
  "BCBUS3": "48",
  "BCBUS4": "49",
  "BCBUS5": "50",
  "VCCIO_51": "51",
  "BCBUS6": "52",
  "BCBUS7": "53",
  "GPIO2": "54",
  "GPIO1": "55",
  "GPIO0": "56",
  "VCC_USB": "57",
  "DM": "58",
  "DP": "59",
  "REF": "60",
  "VCC_PD": "61",
  "PD1_CC2": "62",
  "PD1_SVBUS": "63",
  "PD1_VCONN": "64",
  "PD1_CC1": "65",
  "VCORE_66": "66",
  "~{PWREN}": "67",
  "EECS": "68",
  "GND_69": "69",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EECLK: "output", EEDATA: "bidirectional", TEST: "input", "~{RESET}": "input", GPIO3: "bidirectional", ADBUS0: "bidirectional", ADBUS1: "bidirectional", VCORE_8: "power_in", GND_9: "power_in", VCCIO_10: "power_in", ADBUS2: "bidirectional", ADBUS3: "bidirectional", ADBUS4: "bidirectional", ADBUS5: "bidirectional", ADBUS6: "bidirectional", ADBUS7: "bidirectional", ACBUS0: "bidirectional", ACBUS1: "bidirectional", ACBUS2: "bidirectional", ACBUS3: "bidirectional", ACBUS4: "bidirectional", ACBUS5: "bidirectional", ACBUS6: "bidirectional", ACBUS7: "bidirectional", VCORE_25: "passive", VCCIO_26: "passive", OSCI: "input", OSCO: "output", GND_29: "passive", VREGIN: "power_in", VREGOUT: "power_out", FSOURCE: "power_in", VPP: "input", BDBUS0: "bidirectional", BDBUS1: "bidirectional", BDBUS2: "bidirectional", BDBUS3: "bidirectional", BDBUS4: "bidirectional", VCCIO_39: "passive", BDBUS5: "bidirectional", BDBUS6: "bidirectional", BDBUS7: "bidirectional", "~{SUSPEND}": "output", VCORE_44: "passive", BCBUS0: "bidirectional", BCBUS1: "bidirectional", BCBUS2: "bidirectional", BCBUS3: "bidirectional", BCBUS4: "bidirectional", BCBUS5: "bidirectional", VCCIO_51: "passive", BCBUS6: "bidirectional", BCBUS7: "bidirectional", GPIO2: "bidirectional", GPIO1: "bidirectional", GPIO0: "bidirectional", VCC_USB: "power_in", DM: "bidirectional", DP: "bidirectional", REF: "output", VCC_PD: "power_in", PD1_CC2: "bidirectional", PD1_SVBUS: "input", PD1_VCONN: "power_in", PD1_CC1: "bidirectional", VCORE_66: "passive", "~{PWREN}": "output", EECS: "bidirectional", GND_69: "passive", ...opts.pinTypes } });
  }
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
 */
export class FT2232HQ extends Component.withPins({
  "GND_1": "1",
  "OSCI": "2",
  "OSCO": "3",
  "VPHY": "4",
  "GND_5": "5",
  "REF": "6",
  "DM": "7",
  "DP": "8",
  "VPLL": "9",
  "AGND": "10",
  "GND_11": "11",
  "VCORE_12": "12",
  "TEST": "13",
  "~{RESET}": "14",
  "GND_15": "15",
  "ADBUS0": "16",
  "ADBUS1": "17",
  "ADBUS2": "18",
  "ADBUS3": "19",
  "VCCIO_20": "20",
  "ADBUS4": "21",
  "ADBUS5": "22",
  "ADBUS6": "23",
  "ADBUS7": "24",
  "GND_25": "25",
  "ACBUS0": "26",
  "ACBUS1": "27",
  "ACBUS2": "28",
  "ACBUS3": "29",
  "ACBUS4": "30",
  "VCCIO_31": "31",
  "ACBUS5": "32",
  "ACBUS6": "33",
  "ACBUS7": "34",
  "GND_35": "35",
  "~{SUSPEND}": "36",
  "VCORE_37": "37",
  "BDBUS0": "38",
  "BDBUS1": "39",
  "BDBUS2": "40",
  "BDBUS3": "41",
  "VCCIO_42": "42",
  "BDBUS4": "43",
  "BDBUS5": "44",
  "BDBUS6": "45",
  "BDBUS7": "46",
  "GND_47": "47",
  "BCBUS0": "48",
  "VREGOUT": "49",
  "VREGIN": "50",
  "GND_51": "51",
  "BCBUS1": "52",
  "BCBUS2": "53",
  "BCBUS3": "54",
  "BCBUS4": "55",
  "VCCIO_56": "56",
  "BCBUS5": "57",
  "BCBUS6": "58",
  "BCBUS7": "59",
  "~{PWREN}": "60",
  "EEDATA": "61",
  "EECLK": "62",
  "EECS": "63",
  "VCORE_64": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", OSCI: "input", OSCO: "output", VPHY: "power_in", GND_5: "power_in", REF: "output", DM: "bidirectional", DP: "bidirectional", VPLL: "input", AGND: "power_in", GND_11: "power_in", VCORE_12: "power_in", TEST: "input", "~{RESET}": "input", GND_15: "power_in", ADBUS0: "bidirectional", ADBUS1: "bidirectional", ADBUS2: "bidirectional", ADBUS3: "bidirectional", VCCIO_20: "power_in", ADBUS4: "bidirectional", ADBUS5: "bidirectional", ADBUS6: "bidirectional", ADBUS7: "bidirectional", GND_25: "power_in", ACBUS0: "bidirectional", ACBUS1: "bidirectional", ACBUS2: "bidirectional", ACBUS3: "bidirectional", ACBUS4: "bidirectional", VCCIO_31: "power_in", ACBUS5: "bidirectional", ACBUS6: "bidirectional", ACBUS7: "bidirectional", GND_35: "power_in", "~{SUSPEND}": "output", VCORE_37: "power_in", BDBUS0: "bidirectional", BDBUS1: "bidirectional", BDBUS2: "bidirectional", BDBUS3: "bidirectional", VCCIO_42: "power_in", BDBUS4: "bidirectional", BDBUS5: "bidirectional", BDBUS6: "bidirectional", BDBUS7: "bidirectional", GND_47: "power_in", BCBUS0: "bidirectional", VREGOUT: "power_out", VREGIN: "power_in", GND_51: "power_in", BCBUS1: "bidirectional", BCBUS2: "bidirectional", BCBUS3: "bidirectional", BCBUS4: "bidirectional", VCCIO_56: "power_in", BCBUS5: "bidirectional", BCBUS6: "bidirectional", BCBUS7: "bidirectional", "~{PWREN}": "output", EEDATA: "bidirectional", EECLK: "output", EECS: "output", VCORE_64: "power_in", GND_65: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT230XQ extends Component.withPins({
  "VCCIO": "1",
  "RXD": "2",
  "GND_3": "3",
  "~{CTS}": "4",
  "CBUS2": "5",
  "USBDP": "6",
  "USBDM": "7",
  "3V3OUT": "8",
  "~{RESET}": "9",
  "VCC": "10",
  "CBUS1": "11",
  "CBUS0": "12",
  "GND_13": "13",
  "CBUS3": "14",
  "TXD": "15",
  "~{RTS}": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCCIO: "power_in", RXD: "input", GND_3: "power_in", "~{CTS}": "input", CBUS2: "bidirectional", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", CBUS1: "bidirectional", CBUS0: "bidirectional", GND_13: "passive", CBUS3: "bidirectional", TXD: "output", "~{RTS}": "output", GND_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class FT230XS extends Component.withPins({
  "TXD": "1",
  "~{RTS}": "2",
  "VCCIO": "3",
  "RXD": "4",
  "GND_5": "5",
  "~{CTS}": "6",
  "CBUS2": "7",
  "USBDP": "8",
  "USBDM": "9",
  "3V3OUT": "10",
  "~{RESET}": "11",
  "VCC": "12",
  "GND_13": "13",
  "CBUS1": "14",
  "CBUS0": "15",
  "CBUS3": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "output", "~{RTS}": "output", VCCIO: "power_in", RXD: "input", GND_5: "power_in", "~{CTS}": "input", CBUS2: "bidirectional", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", GND_13: "passive", CBUS1: "bidirectional", CBUS0: "bidirectional", CBUS3: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class FT231XQ extends Component.withPins({
  "RXD": "1",
  "~{RI}": "2",
  "GND_3": "3",
  "~{DSR}": "4",
  "~{DCD}": "5",
  "~{CTS}": "6",
  "CBUS2": "7",
  "USBDP": "8",
  "USBDM": "9",
  "3V3OUT": "10",
  "~{RESET}": "11",
  "VCC": "12",
  "GND_13": "13",
  "CBUS1": "14",
  "CBUS0": "15",
  "CBUS3": "16",
  "TXD": "17",
  "~{DTR}": "18",
  "~{RTS}": "19",
  "VCCIO": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "input", "~{RI}": "input", GND_3: "power_in", "~{DSR}": "input", "~{DCD}": "input", "~{CTS}": "input", CBUS2: "bidirectional", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", GND_13: "power_in", CBUS1: "bidirectional", CBUS0: "bidirectional", CBUS3: "bidirectional", TXD: "output", "~{DTR}": "output", "~{RTS}": "output", VCCIO: "power_in", GND_21: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT231XS extends Component.withPins({
  "~{DTR}": "1",
  "~{RTS}": "2",
  "VCCIO": "3",
  "RXD": "4",
  "~{RI}": "5",
  "GND_6": "6",
  "~{DSR}": "7",
  "~{DCD}": "8",
  "~{CTS}": "9",
  "CBUS2": "10",
  "USBDP": "11",
  "USBDM": "12",
  "3V3OUT": "13",
  "~{RESET}": "14",
  "VCC": "15",
  "GND_16": "16",
  "CBUS1": "17",
  "CBUS0": "18",
  "CBUS3": "19",
  "TXD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{DTR}": "output", "~{RTS}": "output", VCCIO: "power_in", RXD: "input", "~{RI}": "input", GND_6: "power_in", "~{DSR}": "input", "~{DCD}": "input", "~{CTS}": "input", CBUS2: "bidirectional", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCC: "power_in", GND_16: "power_in", CBUS1: "bidirectional", CBUS0: "bidirectional", CBUS3: "bidirectional", TXD: "output", ...opts.pinTypes } });
  }
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
 */
export class FT232BM extends Component.withPins({
  "EESK": "1",
  "EEDATA": "2",
  "VCC_3": "3",
  "~{RESET}": "4",
  "~{RSTOUT}": "5",
  "3V3OUT": "6",
  "USBDP": "7",
  "USBDM": "8",
  "GND_9": "9",
  "~{SLEEP}": "10",
  "~{RXLED}": "11",
  "~{TXLED}": "12",
  "VCCIO": "13",
  "PWRCTL": "14",
  "~{PWREN}": "15",
  "TXDEN": "16",
  "GND_17": "17",
  "D7/~{RI}": "18",
  "D6/~{DCD}": "19",
  "D5/~{DSR}": "20",
  "D4/~{DTR}": "21",
  "D3/~{CTS}": "22",
  "D2/~{RST}": "23",
  "D1/RXD": "24",
  "D0/TXD": "25",
  "VCC_26": "26",
  "XTIN": "27",
  "XTOUT": "28",
  "AGND": "29",
  "AVCC": "30",
  "TEST": "31",
  "EECS": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EESK: "output", EEDATA: "bidirectional", VCC_3: "power_in", "~{RESET}": "input", "~{RSTOUT}": "output", "3V3OUT": "power_out", USBDP: "bidirectional", USBDM: "bidirectional", GND_9: "power_in", "~{SLEEP}": "output", "~{RXLED}": "open_collector", "~{TXLED}": "open_collector", VCCIO: "power_in", PWRCTL: "input", "~{PWREN}": "output", TXDEN: "output", GND_17: "power_in", "D7/~{RI}": "bidirectional", "D6/~{DCD}": "bidirectional", "D5/~{DSR}": "bidirectional", "D4/~{DTR}": "bidirectional", "D3/~{CTS}": "bidirectional", "D2/~{RST}": "bidirectional", "D1/RXD": "bidirectional", "D0/TXD": "bidirectional", VCC_26: "power_in", XTIN: "input", XTOUT: "output", AGND: "power_in", AVCC: "power_in", TEST: "input", EECS: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class FT232H extends Component.withPins({
  "XCSI": "1",
  "XCSO": "2",
  "VPHY": "3",
  "AGND_4": "4",
  "REF": "5",
  "DM": "6",
  "DP": "7",
  "VPLL": "8",
  "AGND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "VCCIO_12": "12",
  "ADBUS0": "13",
  "ADBUS1": "14",
  "ADBUS2": "15",
  "ADBUS3": "16",
  "ADBUS4": "17",
  "ADBUS5": "18",
  "ADBUS6": "19",
  "ADBUS7": "20",
  "ACBUS0": "21",
  "GND_22": "22",
  "GND_23": "23",
  "VCCIO_24": "24",
  "ACBUS1": "25",
  "ACBUS2": "26",
  "ACBUS3": "27",
  "ACBUS4": "28",
  "ACBUS5": "29",
  "ACBUS6": "30",
  "ACBUS7": "31",
  "ACBUS8": "32",
  "ACBUS9": "33",
  "~{RESET}": "34",
  "GND_35": "35",
  "GND_36": "36",
  "VCCA": "37",
  "VCCCORE": "38",
  "VCCD": "39",
  "VREGIN": "40",
  "AGND_41": "41",
  "TEST": "42",
  "EEDATA": "43",
  "EECLK": "44",
  "EECS": "45",
  "VCCIO_46": "46",
  "GND_47": "47",
  "GND_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XCSI: "input", XCSO: "output", VPHY: "power_in", AGND_4: "power_in", REF: "input", DM: "bidirectional", DP: "bidirectional", VPLL: "power_in", AGND_9: "power_in", GND_10: "power_in", GND_11: "power_in", VCCIO_12: "power_in", ADBUS0: "bidirectional", ADBUS1: "bidirectional", ADBUS2: "bidirectional", ADBUS3: "bidirectional", ADBUS4: "bidirectional", ADBUS5: "bidirectional", ADBUS6: "bidirectional", ADBUS7: "bidirectional", ACBUS0: "bidirectional", GND_22: "power_in", GND_23: "power_in", VCCIO_24: "power_in", ACBUS1: "bidirectional", ACBUS2: "bidirectional", ACBUS3: "bidirectional", ACBUS4: "bidirectional", ACBUS5: "bidirectional", ACBUS6: "bidirectional", ACBUS7: "bidirectional", ACBUS8: "bidirectional", ACBUS9: "bidirectional", "~{RESET}": "input", GND_35: "power_in", GND_36: "power_in", VCCA: "power_out", VCCCORE: "power_out", VCCD: "power_in", VREGIN: "power_in", AGND_41: "power_in", TEST: "input", EEDATA: "bidirectional", EECLK: "input", EECS: "input", VCCIO_46: "power_in", GND_47: "power_in", GND_48: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT232RL extends Component.withPins({
  "TXD": "1",
  "DTR": "2",
  "RTS": "3",
  "VCCIO": "4",
  "RXD": "5",
  "RI": "6",
  "GND_7": "7",
  "DCR": "9",
  "DCD": "10",
  "CTS": "11",
  "CBUS4": "12",
  "CBUS2": "13",
  "CBUS3": "14",
  "USBD+": "15",
  "USBD-": "16",
  "3V3OUT": "17",
  "GND_18": "18",
  "~{RESET}": "19",
  "VCC": "20",
  "GND_21": "21",
  "CBUS1": "22",
  "CBUS0": "23",
  "AGND": "25",
  "TEST": "26",
  "OSCI": "27",
  "OSCO": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "output", DTR: "output", RTS: "output", VCCIO: "power_in", RXD: "input", RI: "input", GND_7: "power_in", DCR: "input", DCD: "input", CTS: "input", CBUS4: "bidirectional", CBUS2: "bidirectional", CBUS3: "bidirectional", "USBD+": "bidirectional", "USBD-": "bidirectional", "3V3OUT": "power_out", GND_18: "power_in", "~{RESET}": "input", VCC: "power_in", GND_21: "power_in", CBUS1: "bidirectional", CBUS0: "bidirectional", AGND: "power_in", TEST: "input", OSCI: "input", OSCO: "output", ...opts.pinTypes } });
  }
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
 */
export class FT234XD extends Component.withPins({
  "USBDM": "1",
  "~{RESET}": "2",
  "3V3OUT": "3",
  "VCC": "4",
  "GND_5": "5",
  "CBUS0": "6",
  "TXD/D0": "7",
  "~{RTS}/D2": "8",
  "VCCIO": "9",
  "RXD/D1": "10",
  "~{CTS}/D3": "11",
  "USBDP": "12",
  "GND_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { USBDM: "bidirectional", "~{RESET}": "input", "3V3OUT": "power_out", VCC: "power_in", GND_5: "power_in", CBUS0: "bidirectional", "TXD/D0": "bidirectional", "~{RTS}/D2": "bidirectional", VCCIO: "power_in", "RXD/D1": "bidirectional", "~{CTS}/D3": "bidirectional", USBDP: "bidirectional", GND_13: "passive", ...opts.pinTypes } });
  }
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
 */
export class FT240XQ extends Component.withPins({
  "DATA1": "1",
  "DATA7": "2",
  "GND_3": "3",
  "DATA5": "4",
  "DATA6": "5",
  "DATA3": "6",
  "~{SI/WU}": "7",
  "~{RD}": "8",
  "~{WR}": "9",
  "USBDP": "10",
  "USBDM": "11",
  "3V3OUT": "12",
  "~{RESET}": "13",
  "VCORE": "14",
  "VCC": "15",
  "GND_16": "16",
  "~{TXE}": "17",
  "~{RXF}": "18",
  "CBUS6": "19",
  "CBUS5": "20",
  "DATA0": "21",
  "DATA4": "22",
  "DATA2": "23",
  "VCCIO": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DATA1: "bidirectional", DATA7: "bidirectional", GND_3: "power_in", DATA5: "bidirectional", DATA6: "bidirectional", DATA3: "bidirectional", "~{SI/WU}": "input", "~{RD}": "input", "~{WR}": "input", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCORE: "power_out", VCC: "power_in", GND_16: "passive", "~{TXE}": "output", "~{RXF}": "output", CBUS6: "bidirectional", CBUS5: "bidirectional", DATA0: "bidirectional", DATA4: "bidirectional", DATA2: "bidirectional", VCCIO: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class FT240XS extends Component.withPins({
  "DATA4": "1",
  "DATA2": "2",
  "VCCIO": "3",
  "DATA1": "4",
  "DATA7": "5",
  "GND_6": "6",
  "DATA5": "7",
  "DATA6": "8",
  "DATA3": "9",
  "~{SI/WU}": "10",
  "~{RD}": "11",
  "~{WR}": "12",
  "USBDP": "13",
  "USBDM": "14",
  "3V3OUT": "15",
  "~{RESET}": "16",
  "VCORE": "17",
  "VCC": "18",
  "GND_19": "19",
  "~{TXE}": "20",
  "~{RXF}": "21",
  "CBUS6": "22",
  "CBUS5": "23",
  "DATA0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DATA4: "bidirectional", DATA2: "bidirectional", VCCIO: "power_in", DATA1: "bidirectional", DATA7: "bidirectional", GND_6: "power_in", DATA5: "bidirectional", DATA6: "bidirectional", DATA3: "bidirectional", "~{SI/WU}": "input", "~{RD}": "input", "~{WR}": "input", USBDP: "bidirectional", USBDM: "bidirectional", "3V3OUT": "power_out", "~{RESET}": "input", VCORE: "power_out", VCC: "power_in", GND_19: "passive", "~{TXE}": "output", "~{RXF}": "output", CBUS6: "bidirectional", CBUS5: "bidirectional", DATA0: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class FT245BM extends Component.withPins({
  "EESK": "1",
  "EEDATA": "2",
  "VCC_3": "3",
  "~{RESET}": "4",
  "~{RSTOUT}": "5",
  "3V3OUT": "6",
  "USBDP": "7",
  "USBDM": "8",
  "GND_9": "9",
  "~{PWREN}": "10",
  "SI/WU": "11",
  "~{RXF}": "12",
  "VCCIO": "13",
  "~{TXE}": "14",
  "WR": "15",
  "~{RD}": "16",
  "GND_17": "17",
  "D7": "18",
  "D6": "19",
  "D5": "20",
  "D4": "21",
  "D3": "22",
  "D2": "23",
  "D1": "24",
  "D0": "25",
  "VCC_26": "26",
  "XTIN": "27",
  "XTOUT": "28",
  "GND_29": "29",
  "AVCC": "30",
  "TEST": "31",
  "EECS": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EESK: "output", EEDATA: "bidirectional", VCC_3: "power_in", "~{RESET}": "input", "~{RSTOUT}": "output", "3V3OUT": "power_out", USBDP: "bidirectional", USBDM: "bidirectional", GND_9: "power_in", "~{PWREN}": "output", "SI/WU": "input", "~{RXF}": "output", VCCIO: "power_in", "~{TXE}": "output", WR: "input", "~{RD}": "input", GND_17: "power_in", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", VCC_26: "power_in", XTIN: "input", XTOUT: "output", GND_29: "power_in", AVCC: "power_in", TEST: "input", EECS: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class FT4222HQ extends Component.withPins({
  "DEBUGGER": "1",
  "~{STEST_RST}": "2",
  "~{RESET}": "3",
  "DCNF0": "4",
  "DCNF1": "5",
  "DGND_6": "6",
  "VCCIO": "7",
  "SCK": "8",
  "MISO": "9",
  "MOSI": "10",
  "IO2": "11",
  "IO3": "12",
  "GPIO0": "13",
  "GPIO1": "14",
  "GPIO2": "15",
  "GPIO3": "16",
  "~{SS0O}": "17",
  "XSCI": "18",
  "XSCO": "19",
  "UGND_20": "20",
  "RREF": "21",
  "DM": "22",
  "DP": "23",
  "UGND_24": "24",
  "VOUT3V3": "25",
  "VCCIN": "26",
  "AGND": "27",
  "DGND_28": "28",
  "VPP": "29",
  "VBUS_DET": "30",
  "BCD_DET": "31",
  "~{SS}": "32",
  "EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEBUGGER: "bidirectional", "~{STEST_RST}": "input", "~{RESET}": "input", DCNF0: "input", DCNF1: "input", DGND_6: "power_in", VCCIO: "power_in", SCK: "bidirectional", MISO: "bidirectional", MOSI: "bidirectional", IO2: "bidirectional", IO3: "bidirectional", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", "~{SS0O}": "output", XSCI: "input", XSCO: "output", UGND_20: "power_in", RREF: "input", DM: "bidirectional", DP: "bidirectional", UGND_24: "passive", VOUT3V3: "unspecified", VCCIN: "power_in", AGND: "power_in", DGND_28: "passive", VPP: "power_in", VBUS_DET: "input", BCD_DET: "output", "~{SS}": "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT4232H extends Component.withPins({
  "GND_1": "1",
  "OSCI": "2",
  "OSCO": "3",
  "VPHY": "4",
  "GND_5": "5",
  "REF": "6",
  "DM": "7",
  "DP": "8",
  "VPLL": "9",
  "AGND": "10",
  "GND_11": "11",
  "VCORE_12": "12",
  "TEST": "13",
  "~{RESET}": "14",
  "GND_15": "15",
  "ADBUS0": "16",
  "ADBUS1": "17",
  "ADBUS2": "18",
  "ADBUS3": "19",
  "VCCIO_20": "20",
  "ADBUS4": "21",
  "ADBUS5": "22",
  "ADBUS6": "23",
  "ADBUS7": "24",
  "GND_25": "25",
  "BDBUS0": "26",
  "BDBUS1": "27",
  "BDBUS2": "28",
  "BDBUS3": "29",
  "BDBUS4": "30",
  "VCCIO_31": "31",
  "BDBUS5": "32",
  "BDBUS6": "33",
  "BDBUS7": "34",
  "GND_35": "35",
  "~{SUSPEND}": "36",
  "VCORE_37": "37",
  "CDBUS0": "38",
  "CDBUS1": "39",
  "CDBUS2": "40",
  "CDBUS3": "41",
  "VCCIO_42": "42",
  "CDBUS4": "43",
  "CDBUS5": "44",
  "CDBUS6": "45",
  "CDBUS7": "46",
  "GND_47": "47",
  "DDBUS0": "48",
  "VREGOUT": "49",
  "VREGIN": "50",
  "GND_51": "51",
  "DDBUS1": "52",
  "DDBUS2": "53",
  "DDBUS3": "54",
  "DDBUS4": "55",
  "VCCIO_56": "56",
  "DDBUS5": "57",
  "DDBUS6": "58",
  "DDBUS7": "59",
  "~{PWREN}": "60",
  "EEDATA": "61",
  "EECLK": "62",
  "EECS": "63",
  "VCORE_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", OSCI: "input", OSCO: "output", VPHY: "power_in", GND_5: "power_in", REF: "input", DM: "bidirectional", DP: "bidirectional", VPLL: "power_in", AGND: "power_in", GND_11: "power_in", VCORE_12: "power_in", TEST: "input", "~{RESET}": "input", GND_15: "power_in", ADBUS0: "bidirectional", ADBUS1: "bidirectional", ADBUS2: "bidirectional", ADBUS3: "bidirectional", VCCIO_20: "power_in", ADBUS4: "bidirectional", ADBUS5: "bidirectional", ADBUS6: "bidirectional", ADBUS7: "bidirectional", GND_25: "power_in", BDBUS0: "bidirectional", BDBUS1: "bidirectional", BDBUS2: "bidirectional", BDBUS3: "bidirectional", BDBUS4: "bidirectional", VCCIO_31: "power_in", BDBUS5: "bidirectional", BDBUS6: "bidirectional", BDBUS7: "bidirectional", GND_35: "power_in", "~{SUSPEND}": "output", VCORE_37: "power_in", CDBUS0: "bidirectional", CDBUS1: "bidirectional", CDBUS2: "bidirectional", CDBUS3: "bidirectional", VCCIO_42: "power_in", CDBUS4: "bidirectional", CDBUS5: "bidirectional", CDBUS6: "bidirectional", CDBUS7: "bidirectional", GND_47: "power_in", DDBUS0: "bidirectional", VREGOUT: "power_out", VREGIN: "power_in", GND_51: "power_in", DDBUS1: "bidirectional", DDBUS2: "bidirectional", DDBUS3: "bidirectional", DDBUS4: "bidirectional", VCCIO_56: "power_in", DDBUS5: "bidirectional", DDBUS6: "bidirectional", DDBUS7: "bidirectional", "~{PWREN}": "output", EEDATA: "bidirectional", EECLK: "output", EECS: "output", VCORE_64: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FT601Q extends Component.withPins({
  "GND_1": "1",
  "AVDD": "2",
  "VD10_3": "3",
  "BE_0": "4",
  "BE_1": "5",
  "BE_2": "6",
  "BE_3": "7",
  "~{TXE}": "8",
  "~{RXF}": "9",
  "~{SIWU}": "10",
  "~{WR}": "11",
  "~{RD}": "12",
  "~{OE}": "13",
  "VCCIO_14": "14",
  "~{RESET}": "15",
  "~{WAKEUP}": "16",
  "GPIO0": "17",
  "GPIO1": "18",
  "Reserved": "19",
  "VCC33_20": "20",
  "XI": "21",
  "XO": "22",
  "DP": "23",
  "VCC33_24": "24",
  "DM": "25",
  "GND_26": "26",
  "RREF": "27",
  "VDDA": "28",
  "GND_29": "29",
  "VD10_30": "30",
  "TODN": "31",
  "TODP": "32",
  "VD10_33": "33",
  "RIDN": "34",
  "RIDP": "35",
  "GND_36": "36",
  "VBUS": "37",
  "VCC33_38": "38",
  "DV10": "39",
  "DATA_0": "40",
  "DATA_1": "41",
  "DATA_2": "42",
  "DATA_3": "43",
  "DATA_4": "44",
  "DATA_5": "45",
  "DATA_6": "46",
  "DATA_7": "47",
  "VD10_48": "48",
  "VCCIO_49": "49",
  "DATA_8": "50",
  "DATA_9": "51",
  "DATA_10": "52",
  "DATA_11": "53",
  "DATA_12": "54",
  "DATA_13": "55",
  "DATA_14": "56",
  "DATA_15": "57",
  "CLK": "58",
  "VCCIO_59": "59",
  "DATA_16": "60",
  "DATA_17": "61",
  "DATA_18": "62",
  "DATA_19": "63",
  "DATA_20": "64",
  "DATA_21": "65",
  "DATA_22": "66",
  "DATA_23": "67",
  "VCCIO_68": "68",
  "DATA_24": "69",
  "DATA_25": "70",
  "DATA_26": "71",
  "DATA_27": "72",
  "DATA_28": "73",
  "DATA_29": "74",
  "DATA_30": "75",
  "DATA_31": "76",
  "GND_77": "77",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", AVDD: "power_in", VD10_3: "power_in", BE_0: "bidirectional", BE_1: "bidirectional", BE_2: "bidirectional", BE_3: "bidirectional", "~{TXE}": "output", "~{RXF}": "output", "~{SIWU}": "input", "~{WR}": "input", "~{RD}": "input", "~{OE}": "input", VCCIO_14: "power_in", "~{RESET}": "input", "~{WAKEUP}": "bidirectional", GPIO0: "bidirectional", GPIO1: "bidirectional", Reserved: "no_connect", VCC33_20: "power_in", XI: "input", XO: "output", DP: "bidirectional", VCC33_24: "passive", DM: "bidirectional", GND_26: "passive", RREF: "input", VDDA: "power_in", GND_29: "passive", VD10_30: "passive", TODN: "output", TODP: "output", VD10_33: "passive", RIDN: "input", RIDP: "input", GND_36: "passive", VBUS: "power_in", VCC33_38: "passive", DV10: "power_out", DATA_0: "bidirectional", DATA_1: "bidirectional", DATA_2: "bidirectional", DATA_3: "bidirectional", DATA_4: "bidirectional", DATA_5: "bidirectional", DATA_6: "bidirectional", DATA_7: "bidirectional", VD10_48: "passive", VCCIO_49: "passive", DATA_8: "bidirectional", DATA_9: "bidirectional", DATA_10: "bidirectional", DATA_11: "bidirectional", DATA_12: "bidirectional", DATA_13: "bidirectional", DATA_14: "bidirectional", DATA_15: "bidirectional", CLK: "output", VCCIO_59: "passive", DATA_16: "bidirectional", DATA_17: "bidirectional", DATA_18: "bidirectional", DATA_19: "bidirectional", DATA_20: "bidirectional", DATA_21: "bidirectional", DATA_22: "bidirectional", DATA_23: "bidirectional", VCCIO_68: "passive", DATA_24: "bidirectional", DATA_25: "bidirectional", DATA_26: "bidirectional", DATA_27: "bidirectional", DATA_28: "bidirectional", DATA_29: "bidirectional", DATA_30: "bidirectional", DATA_31: "bidirectional", GND_77: "passive", ...opts.pinTypes } });
  }
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
 */
export class FUSB302BMPX extends Component.withPins({
  "CC2_1": "1",
  "VBUS": "2",
  "VDD_3": "3",
  "VDD_4": "4",
  "INT_N": "5",
  "SCL": "6",
  "SDA": "7",
  "GND_8": "8",
  "GND_9": "9",
  "CC1_10": "10",
  "CC1_11": "11",
  "VCONN_12": "12",
  "VCONN_13": "13",
  "CC2_14": "14",
  "GND_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC2_1: "bidirectional", VBUS: "input", VDD_3: "power_in", VDD_4: "passive", INT_N: "open_collector", SCL: "input", SDA: "bidirectional", GND_8: "power_in", GND_9: "passive", CC1_10: "bidirectional", CC1_11: "bidirectional", VCONN_12: "power_in", VCONN_13: "power_in", CC2_14: "bidirectional", GND_15: "passive", ...opts.pinTypes } });
  }
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
 */
export class FUSB302B01MPX extends Component.withPins({
  "CC2_1": "1",
  "VBUS": "2",
  "VDD_3": "3",
  "VDD_4": "4",
  "INT_N": "5",
  "SCL": "6",
  "SDA": "7",
  "GND_8": "8",
  "GND_9": "9",
  "CC1_10": "10",
  "CC1_11": "11",
  "VCONN_12": "12",
  "VCONN_13": "13",
  "CC2_14": "14",
  "GND_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC2_1: "bidirectional", VBUS: "input", VDD_3: "power_in", VDD_4: "passive", INT_N: "open_collector", SCL: "input", SDA: "bidirectional", GND_8: "power_in", GND_9: "passive", CC1_10: "bidirectional", CC1_11: "bidirectional", VCONN_12: "power_in", VCONN_13: "power_in", CC2_14: "bidirectional", GND_15: "passive", ...opts.pinTypes } });
  }
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
 */
export class FUSB302B10MPX extends Component.withPins({
  "CC2_1": "1",
  "VBUS": "2",
  "VDD_3": "3",
  "VDD_4": "4",
  "INT_N": "5",
  "SCL": "6",
  "SDA": "7",
  "GND_8": "8",
  "GND_9": "9",
  "CC1_10": "10",
  "CC1_11": "11",
  "VCONN_12": "12",
  "VCONN_13": "13",
  "CC2_14": "14",
  "GND_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC2_1: "bidirectional", VBUS: "input", VDD_3: "power_in", VDD_4: "passive", INT_N: "open_collector", SCL: "input", SDA: "bidirectional", GND_8: "power_in", GND_9: "passive", CC1_10: "bidirectional", CC1_11: "bidirectional", VCONN_12: "power_in", VCONN_13: "power_in", CC2_14: "bidirectional", GND_15: "passive", ...opts.pinTypes } });
  }
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
 */
export class FUSB302B11MPX extends Component.withPins({
  "CC2_1": "1",
  "VBUS": "2",
  "VDD_3": "3",
  "VDD_4": "4",
  "INT_N": "5",
  "SCL": "6",
  "SDA": "7",
  "GND_8": "8",
  "GND_9": "9",
  "CC1_10": "10",
  "CC1_11": "11",
  "VCONN_12": "12",
  "VCONN_13": "13",
  "CC2_14": "14",
  "GND_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC2_1: "bidirectional", VBUS: "input", VDD_3: "power_in", VDD_4: "passive", INT_N: "open_collector", SCL: "input", SDA: "bidirectional", GND_8: "power_in", GND_9: "passive", CC1_10: "bidirectional", CC1_11: "bidirectional", VCONN_12: "power_in", VCONN_13: "power_in", CC2_14: "bidirectional", GND_15: "passive", ...opts.pinTypes } });
  }
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
 */
export class FUSB303BTMX extends Component.withPins({
  "CC1": "1",
  "CC2": "2",
  "PORT/~{DEBUG}": "3",
  "VBUS_DET": "4",
  "ADDR/ORIENT": "5",
  "INT_N/OUT3": "6",
  "SDA/OUT1": "7",
  "SCL/OUT2": "8",
  "ID": "9",
  "GND": "10",
  "~{EN}": "11",
  "VDD": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC1: "bidirectional", CC2: "bidirectional", "PORT/~{DEBUG}": "bidirectional", VBUS_DET: "input", "ADDR/ORIENT": "bidirectional", "INT_N/OUT3": "open_collector", "SDA/OUT1": "bidirectional", "SCL/OUT2": "bidirectional", ID: "open_collector", GND: "power_in", "~{EN}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class FUSB307BMPX extends Component.withPins({
  "CC1": "1",
  "VCONN": "2",
  "CC2": "3",
  "ORIENT/I2C_ADDR": "4",
  "LDO": "5",
  "VBUS": "6",
  "VDD": "7",
  "DBG_N": "8",
  "GPIO2": "9",
  "INT_N": "10",
  "SCL1/SDA2": "11",
  "SDA1/SCL2": "12",
  "SRC": "13",
  "SNK": "14",
  "GND_15": "15",
  "GPIO1": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC1: "bidirectional", VCONN: "power_in", CC2: "bidirectional", "ORIENT/I2C_ADDR": "tri_state", LDO: "power_out", VBUS: "power_in", VDD: "power_in", DBG_N: "open_collector", GPIO2: "bidirectional", INT_N: "open_collector", "SCL1/SDA2": "bidirectional", "SDA1/SCL2": "bidirectional", SRC: "output", SNK: "output", GND_15: "power_in", GPIO1: "bidirectional", GND_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class GL3224_ONY extends Component.withPins({
  "SD1_CDZ": "1",
  "MS1_INS/SD1_WP": "2",
  "GND_3": "3",
  "DM": "4",
  "DP": "5",
  "AVDD33_6": "6",
  "TXN": "7",
  "TXP": "8",
  "AVDD12": "9",
  "RXN": "10",
  "RXP": "11",
  "GND_12": "12",
  "X1": "13",
  "X2": "14",
  "AVDD33_15": "15",
  "RTERM": "16",
  "SPI_MISO": "17",
  "SPI_MOSI": "18",
  "SPI_CK": "19",
  "SPI_CS": "20",
  "LED": "21",
  "VBUS": "22",
  "S1M1_VCC": "23",
  "S2M2_VCC": "24",
  "DVDD33_25": "25",
  "DVDD12": "26",
  "S2D1_M2BS": "27",
  "S2D0_M2D1": "28",
  "S2CK_M2D0": "29",
  "S2CM_M2D2": "30",
  "S2D3_M2D3": "31",
  "S2D2_M2CK": "32",
  "VUHS_2": "33",
  "DVDD33_34": "34",
  "MS2_INS/SD2_WP": "35",
  "SD2_CDZ": "36",
  "S1D1_M1BS": "37",
  "S1D0_M1D1": "38",
  "S1CK_M1D0": "39",
  "S1CM_M1D2": "40",
  "S1D3_M1D3": "41",
  "S1D2_M1CK": "42",
  "VUHS_1": "43",
  "DVDD33_44": "44",
  "S1D7_M1D4": "45",
  "S1D6_M1D5": "46",
  "S1D5_M1D6": "47",
  "S1D4_M1D7": "48",
  "GND_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD1_CDZ: "input", "MS1_INS/SD1_WP": "input", GND_3: "power_in", DM: "bidirectional", DP: "bidirectional", AVDD33_6: "power_in", TXN: "output", TXP: "output", AVDD12: "power_in", RXN: "input", RXP: "input", GND_12: "passive", X1: "input", X2: "output", AVDD33_15: "passive", RTERM: "passive", SPI_MISO: "input", SPI_MOSI: "output", SPI_CK: "output", SPI_CS: "output", LED: "output", VBUS: "power_in", S1M1_VCC: "power_out", S2M2_VCC: "power_out", DVDD33_25: "passive", DVDD12: "passive", S2D1_M2BS: "bidirectional", S2D0_M2D1: "bidirectional", S2CK_M2D0: "bidirectional", S2CM_M2D2: "bidirectional", S2D3_M2D3: "bidirectional", S2D2_M2CK: "bidirectional", VUHS_2: "power_out", DVDD33_34: "passive", "MS2_INS/SD2_WP": "input", SD2_CDZ: "input", S1D1_M1BS: "bidirectional", S1D0_M1D1: "bidirectional", S1CK_M1D0: "bidirectional", S1CM_M1D2: "bidirectional", S1D3_M1D3: "bidirectional", S1D2_M1CK: "bidirectional", VUHS_1: "power_out", DVDD33_44: "passive", S1D7_M1D4: "bidirectional", S1D6_M1D5: "bidirectional", S1D5_M1D6: "bidirectional", S1D4_M1D7: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
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
 */
export class HD3SS6126 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "HS_~{OE}": "6",
  "HSA(n)": "7",
  "HSA(p)": "8",
  "SEL": "9",
  "GND_10": "10",
  "SSA0(p)": "11",
  "SSA0(n)": "12",
  "VDD_13": "13",
  "GND_14": "14",
  "SSA1(p)": "15",
  "SSA1(n)": "16",
  "GND_17": "17",
  "NC_18": "18",
  "GND_19": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "SSC1(n)": "22",
  "SSC1(p)": "23",
  "SSC0(n)": "24",
  "SSC0(p)": "25",
  "SSB1(n)": "26",
  "SSB1(p)": "27",
  "SSB0(n)": "28",
  "SSB0(p)": "29",
  "VDD_30": "30",
  "HSB(p)": "31",
  "HSB(n)": "32",
  "HSC(p)": "33",
  "HSC(n)": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "EPAD": "43",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", "HS_~{OE}": "input", "HSA(n)": "passive", "HSA(p)": "passive", SEL: "input", GND_10: "power_in", "SSA0(p)": "passive", "SSA0(n)": "passive", VDD_13: "power_in", GND_14: "passive", "SSA1(p)": "passive", "SSA1(n)": "passive", GND_17: "passive", NC_18: "no_connect", GND_19: "passive", VDD_20: "passive", GND_21: "passive", "SSC1(n)": "passive", "SSC1(p)": "passive", "SSC0(n)": "passive", "SSC0(p)": "passive", "SSB1(n)": "passive", "SSB1(p)": "passive", "SSB0(n)": "passive", "SSB0(p)": "passive", VDD_30: "passive", "HSB(p)": "passive", "HSB(n)": "passive", "HSC(p)": "passive", "HSC(n)": "passive", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class HUSB238A_xxxxx_QN16R extends Component.withPins({
  "D+": "1",
  "D-": "2",
  "CC1": "3",
  "CC2": "4",
  "VDD": "5",
  "~{DEBUG}": "6",
  "EN_HVDCP/OUT1": "7",
  "ADDR/ORIENT": "8",
  "SDA/SNK_VSET": "9",
  "SCL/SNK_ISET": "10",
  "~{INT}": "11",
  "~{EN}": "12",
  "FAULT/OUT2": "13",
  "FLGIN": "14",
  "GATE": "15",
  "VBUS": "16",
  "GND": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D+": "bidirectional", "D-": "bidirectional", CC1: "bidirectional", CC2: "bidirectional", VDD: "power_in", "~{DEBUG}": "output", "EN_HVDCP/OUT1": "bidirectional", "ADDR/ORIENT": "bidirectional", "SDA/SNK_VSET": "bidirectional", "SCL/SNK_ISET": "input", "~{INT}": "open_collector", "~{EN}": "input", "FAULT/OUT2": "output", FLGIN: "input", GATE: "open_collector", VBUS: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class HUSB238_xxxDD extends Component.withPins({
  "VIN": "1",
  "D+": "2",
  "D-": "3",
  "CC1": "4",
  "CC2": "5",
  "SDA": "6",
  "SCL": "7",
  "VSET": "8",
  "ISET": "9",
  "GATE": "10",
  "GND": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "power_in", "D+": "bidirectional", "D-": "bidirectional", CC1: "bidirectional", CC2: "bidirectional", SDA: "bidirectional", SCL: "input", VSET: "input", ISET: "input", GATE: "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IP2721 extends Component.withPins({
  "VBUSG": "1",
  "VIN": "2",
  "NC_3": "3",
  "NC_4": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "SEL": "11",
  "CC2": "12",
  "CC1": "13",
  "NC_14": "14",
  "NC_15": "15",
  "VBUS": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBUSG: "output", VIN: "power_in", NC_3: "no_connect", NC_4: "no_connect", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", SEL: "input", CC2: "bidirectional", CC1: "bidirectional", NC_14: "no_connect", NC_15: "no_connect", VBUS: "input", ...opts.pinTypes } });
  }
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
 */
export class MA8601 extends Component.withPins({
  "VSS": "1",
  "XO": "2",
  "XI": "3",
  "DM4": "4",
  "DP4": "5",
  "DM3": "6",
  "DP3": "7",
  "DM2": "8",
  "DP2": "9",
  "DM1": "10",
  "DP1": "11",
  "VDDR12": "12",
  "VDD33": "13",
  "REXT": "14",
  "DMU": "15",
  "DPU": "16",
  "~{SRST}": "17",
  "VBUS_IN": "18",
  "PSELF": "19",
  "VDD5": "20",
  "VDDR33": "21",
  "DRV": "22",
  "LED1/EESCL": "23",
  "LED2/GLEDEN": "24",
  "~{PWRJ}": "25",
  "OVCJ": "26",
  "TEST/EESDA": "27",
  "VDD12": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XO: "output", XI: "input", DM4: "bidirectional", DP4: "bidirectional", DM3: "bidirectional", DP3: "bidirectional", DM2: "bidirectional", DP2: "bidirectional", DM1: "bidirectional", DP1: "bidirectional", VDDR12: "power_out", VDD33: "power_in", REXT: "passive", DMU: "bidirectional", DPU: "bidirectional", "~{SRST}": "input", VBUS_IN: "input", PSELF: "input", VDD5: "power_in", VDDR33: "power_out", DRV: "bidirectional", "LED1/EESCL": "bidirectional", "LED2/GLEDEN": "bidirectional", "~{PWRJ}": "output", OVCJ: "input", "TEST/EESDA": "bidirectional", VDD12: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2200_I_SS extends Component.withPins({
  "VDD": "1",
  "OSC1": "2",
  "OSC2": "3",
  "RST": "4",
  "GP7/TxLED": "5",
  "GP6/RxLED": "6",
  "GP5": "7",
  "GP4": "8",
  "GP3": "9",
  "TX": "10",
  "RTS": "11",
  "RX": "12",
  "CTS": "13",
  "GP2": "14",
  "GP1/USB-CFG": "15",
  "GP0/SSPND": "16",
  "V_USB": "17",
  "D-": "18",
  "D+": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OSC1: "input", OSC2: "output", RST: "input", "GP7/TxLED": "bidirectional", "GP6/RxLED": "bidirectional", GP5: "bidirectional", GP4: "bidirectional", GP3: "bidirectional", TX: "output", RTS: "output", RX: "input", CTS: "input", GP2: "bidirectional", "GP1/USB-CFG": "bidirectional", "GP0/SSPND": "bidirectional", V_USB: "power_in", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2200_E_SS extends Component.withPins({
  "VDD": "1",
  "OSC1": "2",
  "OSC2": "3",
  "RST": "4",
  "GP7/TxLED": "5",
  "GP6/RxLED": "6",
  "GP5": "7",
  "GP4": "8",
  "GP3": "9",
  "TX": "10",
  "RTS": "11",
  "RX": "12",
  "CTS": "13",
  "GP2": "14",
  "GP1/USB-CFG": "15",
  "GP0/SSPND": "16",
  "V_USB": "17",
  "D-": "18",
  "D+": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OSC1: "input", OSC2: "output", RST: "input", "GP7/TxLED": "bidirectional", "GP6/RxLED": "bidirectional", GP5: "bidirectional", GP4: "bidirectional", GP3: "bidirectional", TX: "output", RTS: "output", RX: "input", CTS: "input", GP2: "bidirectional", "GP1/USB-CFG": "bidirectional", "GP0/SSPND": "bidirectional", V_USB: "power_in", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2200_I_MQ extends Component.withPins({
  "RST": "1",
  "GP7/TxLED": "2",
  "GP6/RxLED": "3",
  "GP5": "4",
  "GP4": "5",
  "GP3": "6",
  "TX": "7",
  "RTS": "8",
  "RX": "9",
  "CTS": "10",
  "GP2": "11",
  "GP1/USB-CFG": "12",
  "GP0/SSPND": "13",
  "V_USB": "14",
  "D-": "15",
  "D+": "16",
  "VSS": "17",
  "VDD": "18",
  "OSC1": "19",
  "OSC2": "20",
  "EP": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RST: "input", "GP7/TxLED": "bidirectional", "GP6/RxLED": "bidirectional", GP5: "bidirectional", GP4: "bidirectional", GP3: "bidirectional", TX: "output", RTS: "output", RX: "input", CTS: "input", GP2: "bidirectional", "GP1/USB-CFG": "bidirectional", "GP0/SSPND": "bidirectional", V_USB: "power_in", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", VDD: "power_in", OSC1: "input", OSC2: "output", EP: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MCP2200_I_SO extends Component.withPins({
  "VDD": "1",
  "OSC1": "2",
  "OSC2": "3",
  "RST": "4",
  "GP7/TxLED": "5",
  "GP6/RxLED": "6",
  "GP5": "7",
  "GP4": "8",
  "GP3": "9",
  "TX": "10",
  "RTS": "11",
  "RX": "12",
  "CTS": "13",
  "GP2": "14",
  "GP1/USB-CFG": "15",
  "GP0/SSPND": "16",
  "V_USB": "17",
  "D-": "18",
  "D+": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OSC1: "input", OSC2: "output", RST: "input", "GP7/TxLED": "bidirectional", "GP6/RxLED": "bidirectional", GP5: "bidirectional", GP4: "bidirectional", GP3: "bidirectional", TX: "output", RTS: "output", RX: "input", CTS: "input", GP2: "bidirectional", "GP1/USB-CFG": "bidirectional", "GP0/SSPND": "bidirectional", V_USB: "power_in", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2200T_E_SS extends Component.withPins({
  "VDD": "1",
  "OSC1": "2",
  "OSC2": "3",
  "RST": "4",
  "GP7/TxLED": "5",
  "GP6/RxLED": "6",
  "GP5": "7",
  "GP4": "8",
  "GP3": "9",
  "TX": "10",
  "RTS": "11",
  "RX": "12",
  "CTS": "13",
  "GP2": "14",
  "GP1/USB-CFG": "15",
  "GP0/SSPND": "16",
  "V_USB": "17",
  "D-": "18",
  "D+": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OSC1: "input", OSC2: "output", RST: "input", "GP7/TxLED": "bidirectional", "GP6/RxLED": "bidirectional", GP5: "bidirectional", GP4: "bidirectional", GP3: "bidirectional", TX: "output", RTS: "output", RX: "input", CTS: "input", GP2: "bidirectional", "GP1/USB-CFG": "bidirectional", "GP0/SSPND": "bidirectional", V_USB: "power_in", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2200T_I_MQ extends Component.withPins({
  "RST": "1",
  "GP7/TxLED": "2",
  "GP6/RxLED": "3",
  "GP5": "4",
  "GP4": "5",
  "GP3": "6",
  "TX": "7",
  "RTS": "8",
  "RX": "9",
  "CTS": "10",
  "GP2": "11",
  "GP1/USB-CFG": "12",
  "GP0/SSPND": "13",
  "V_USB": "14",
  "D-": "15",
  "D+": "16",
  "VSS": "17",
  "VDD": "18",
  "OSC1": "19",
  "OSC2": "20",
  "EP": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RST: "input", "GP7/TxLED": "bidirectional", "GP6/RxLED": "bidirectional", GP5: "bidirectional", GP4: "bidirectional", GP3: "bidirectional", TX: "output", RTS: "output", RX: "input", CTS: "input", GP2: "bidirectional", "GP1/USB-CFG": "bidirectional", "GP0/SSPND": "bidirectional", V_USB: "power_in", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", VDD: "power_in", OSC1: "input", OSC2: "output", EP: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MCP2200T_I_SO extends Component.withPins({
  "VDD": "1",
  "OSC1": "2",
  "OSC2": "3",
  "RST": "4",
  "GP7/TxLED": "5",
  "GP6/RxLED": "6",
  "GP5": "7",
  "GP4": "8",
  "GP3": "9",
  "TX": "10",
  "RTS": "11",
  "RX": "12",
  "CTS": "13",
  "GP2": "14",
  "GP1/USB-CFG": "15",
  "GP0/SSPND": "16",
  "V_USB": "17",
  "D-": "18",
  "D+": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OSC1: "input", OSC2: "output", RST: "input", "GP7/TxLED": "bidirectional", "GP6/RxLED": "bidirectional", GP5: "bidirectional", GP4: "bidirectional", GP3: "bidirectional", TX: "output", RTS: "output", RX: "input", CTS: "input", GP2: "bidirectional", "GP1/USB-CFG": "bidirectional", "GP0/SSPND": "bidirectional", V_USB: "power_in", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2200T_I_SS extends Component.withPins({
  "VDD": "1",
  "OSC1": "2",
  "OSC2": "3",
  "RST": "4",
  "GP7/TxLED": "5",
  "GP6/RxLED": "6",
  "GP5": "7",
  "GP4": "8",
  "GP3": "9",
  "TX": "10",
  "RTS": "11",
  "RX": "12",
  "CTS": "13",
  "GP2": "14",
  "GP1/USB-CFG": "15",
  "GP0/SSPND": "16",
  "V_USB": "17",
  "D-": "18",
  "D+": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OSC1: "input", OSC2: "output", RST: "input", "GP7/TxLED": "bidirectional", "GP6/RxLED": "bidirectional", GP5: "bidirectional", GP4: "bidirectional", GP3: "bidirectional", TX: "output", RTS: "output", RX: "input", CTS: "input", GP2: "bidirectional", "GP1/USB-CFG": "bidirectional", "GP0/SSPND": "bidirectional", V_USB: "power_in", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2210x_MQ extends Component.withPins({
  "~{RST}": "1",
  "GP0": "2",
  "GP1": "3",
  "GP2": "4",
  "GP3": "5",
  "MOSI": "6",
  "GP4": "7",
  "SCK": "8",
  "GP5": "9",
  "MISO": "10",
  "GP6": "11",
  "GP7": "12",
  "GP8": "13",
  "VUSB": "14",
  "D-": "15",
  "D+": "16",
  "VSS": "17",
  "VDD": "18",
  "OSC1": "19",
  "OSC2": "20",
  "EP": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", GP0: "bidirectional", GP1: "bidirectional", GP2: "bidirectional", GP3: "bidirectional", MOSI: "output", GP4: "bidirectional", SCK: "output", GP5: "bidirectional", MISO: "input", GP6: "bidirectional", GP7: "bidirectional", GP8: "bidirectional", VUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", VDD: "power_in", OSC1: "input", OSC2: "output", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP2210x_SO extends Component.withPins({
  "VDD": "1",
  "OSC1": "2",
  "OSC2": "3",
  "~{RST}": "4",
  "GP0": "5",
  "GP1": "6",
  "GP2": "7",
  "GP3": "8",
  "MOSI": "9",
  "GP4": "10",
  "SCK": "11",
  "GP5": "12",
  "MISO": "13",
  "GP6": "14",
  "GP7": "15",
  "GP8": "16",
  "VUSB": "17",
  "D-": "18",
  "D+": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OSC1: "input", OSC2: "output", "~{RST}": "input", GP0: "bidirectional", GP1: "bidirectional", GP2: "bidirectional", GP3: "bidirectional", MOSI: "output", GP4: "bidirectional", SCK: "output", GP5: "bidirectional", MISO: "input", GP6: "bidirectional", GP7: "bidirectional", GP8: "bidirectional", VUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2210x_SS extends Component.withPins({
  "VDD": "1",
  "OSC1": "2",
  "OSC2": "3",
  "~{RST}": "4",
  "GP0": "5",
  "GP1": "6",
  "GP2": "7",
  "GP3": "8",
  "MOSI": "9",
  "GP4": "10",
  "SCK": "11",
  "GP5": "12",
  "MISO": "13",
  "GP6": "14",
  "GP7": "15",
  "GP8": "16",
  "VUSB": "17",
  "D-": "18",
  "D+": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OSC1: "input", OSC2: "output", "~{RST}": "input", GP0: "bidirectional", GP1: "bidirectional", GP2: "bidirectional", GP3: "bidirectional", MOSI: "output", GP4: "bidirectional", SCK: "output", GP5: "bidirectional", MISO: "input", GP6: "bidirectional", GP7: "bidirectional", GP8: "bidirectional", VUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2221AxML extends Component.withPins({
  "GP0": "1",
  "GP1": "2",
  "~{RST}": "3",
  "URx": "4",
  "UTx": "5",
  "GP2": "6",
  "GP3": "7",
  "SDA": "8",
  "SCL": "9",
  "VUSB": "10",
  "D-": "11",
  "D+": "12",
  "VSS": "13",
  "NC_14": "14",
  "NC_15": "15",
  "VDD": "16",
  "NC_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GP0: "bidirectional", GP1: "bidirectional", "~{RST}": "input", URx: "input", UTx: "output", GP2: "bidirectional", GP3: "bidirectional", SDA: "bidirectional", SCL: "bidirectional", VUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", NC_14: "no_connect", NC_15: "no_connect", VDD: "power_in", NC_17: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MCP2221AxP extends Component.withPins({
  "VDD": "1",
  "GP0": "2",
  "GP1": "3",
  "~{RST}": "4",
  "URx": "5",
  "UTx": "6",
  "GP2": "7",
  "GP3": "8",
  "SDA": "9",
  "SCL": "10",
  "VUSB": "11",
  "D-": "12",
  "D+": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP0: "bidirectional", GP1: "bidirectional", "~{RST}": "input", URx: "input", UTx: "output", GP2: "bidirectional", GP3: "bidirectional", SDA: "bidirectional", SCL: "bidirectional", VUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2221AxSL extends Component.withPins({
  "VDD": "1",
  "GP0": "2",
  "GP1": "3",
  "~{RST}": "4",
  "URx": "5",
  "UTx": "6",
  "GP2": "7",
  "GP3": "8",
  "SDA": "9",
  "SCL": "10",
  "VUSB": "11",
  "D-": "12",
  "D+": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP0: "bidirectional", GP1: "bidirectional", "~{RST}": "input", URx: "input", UTx: "output", GP2: "bidirectional", GP3: "bidirectional", SDA: "bidirectional", SCL: "bidirectional", VUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP2221AxST extends Component.withPins({
  "VDD": "1",
  "GP0": "2",
  "GP1": "3",
  "~{RST}": "4",
  "URx": "5",
  "UTx": "6",
  "GP2": "7",
  "GP3": "8",
  "SDA": "9",
  "SCL": "10",
  "VUSB": "11",
  "D-": "12",
  "D+": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP0: "bidirectional", GP1: "bidirectional", "~{RST}": "input", URx: "input", UTx: "output", GP2: "bidirectional", GP3: "bidirectional", SDA: "bidirectional", SCL: "bidirectional", VUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MP5034GJ extends Component.withPins({
  "EN": "1",
  "IN_2": "2",
  "IN_3": "3",
  "GND": "4",
  "ADJ": "5",
  "NC": "6",
  "DM": "7",
  "DP": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", IN_2: "power_in", IN_3: "passive", GND: "power_in", ADJ: "passive", NC: "no_connect", DM: "input", DP: "input", ...opts.pinTypes } });
  }
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
 */
export class MS2130 extends Component.withPins({
  "DVDD33_1": "1",
  "AVDD33_USB_2": "2",
  "DM": "3",
  "DP": "4",
  "AVDD33_USB_5": "5",
  "AVDD11_USB_6": "6",
  "USB_REXT": "7",
  "AVDD33_USB_8": "8",
  "SSTXM": "9",
  "AVDD11_USB_10": "10",
  "SSTXP": "11",
  "AVDD11_USB_12": "12",
  "SSRXM": "13",
  "SSRXP": "14",
  "AVSS_15": "15",
  "DVDD33_16": "16",
  "DVSS_17": "17",
  "DVDD11_18": "18",
  "AVSS_19": "19",
  "AVDD25_20": "20",
  "XTIN": "21",
  "XTOUT": "22",
  "AVDD25_23": "23",
  "AVDD11_24": "24",
  "AVSS_25": "25",
  "RXDDCSCL": "26",
  "RXDDCSDA": "27",
  "HDMIRXDET": "28",
  "HDMIRXHPD": "29",
  "DVSS_30": "30",
  "DVDD33_31": "31",
  "DVSS_32": "32",
  "DVDD33_33": "33",
  "DVSS_34": "34",
  "GPIO4": "35",
  "GPIO3": "36",
  "GPIO5": "37",
  "GPIO2": "38",
  "DVDD11_39": "39",
  "DVSS_40": "40",
  "DVDD33_41": "41",
  "GPIO0": "42",
  "GPIO1": "43",
  "MCU_SEL": "44",
  "HDMIRX_REXT": "45",
  "HDMIRXCN": "46",
  "AVDD25_47": "47",
  "AVDD33_48": "48",
  "HDMIRXCP": "49",
  "AVSS_50": "50",
  "AVDD11_51": "51",
  "AVDD33_52": "52",
  "HDMIRX0N": "53",
  "HDMIRX0P": "54",
  "AVDD11_55": "55",
  "AVDD33_56": "56",
  "HDMIRX1N": "57",
  "HDMIRX1P": "58",
  "AVDD11_59": "59",
  "AVDD33_60": "60",
  "HDMIRX2N": "61",
  "HDMIRX2P": "62",
  "DVO_D7": "63",
  "DVSS_64": "64",
  "AVSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVDD33_1: "power_in", AVDD33_USB_2: "power_in", DM: "bidirectional", DP: "bidirectional", AVDD33_USB_5: "passive", AVDD11_USB_6: "power_in", USB_REXT: "output", AVDD33_USB_8: "passive", SSTXM: "output", AVDD11_USB_10: "passive", SSTXP: "output", AVDD11_USB_12: "passive", SSRXM: "input", SSRXP: "input", AVSS_15: "power_in", DVDD33_16: "passive", DVSS_17: "power_in", DVDD11_18: "power_in", AVSS_19: "passive", AVDD25_20: "power_in", XTIN: "input", XTOUT: "output", AVDD25_23: "passive", AVDD11_24: "power_in", AVSS_25: "passive", RXDDCSCL: "input", RXDDCSDA: "bidirectional", HDMIRXDET: "input", HDMIRXHPD: "output", DVSS_30: "passive", DVDD33_31: "passive", DVSS_32: "passive", DVDD33_33: "passive", DVSS_34: "passive", GPIO4: "bidirectional", GPIO3: "bidirectional", GPIO5: "bidirectional", GPIO2: "bidirectional", DVDD11_39: "passive", DVSS_40: "passive", DVDD33_41: "passive", GPIO0: "bidirectional", GPIO1: "bidirectional", MCU_SEL: "input", HDMIRX_REXT: "output", HDMIRXCN: "input", AVDD25_47: "passive", AVDD33_48: "power_in", HDMIRXCP: "input", AVSS_50: "passive", AVDD11_51: "passive", AVDD33_52: "passive", HDMIRX0N: "input", HDMIRX0P: "input", AVDD11_55: "passive", AVDD33_56: "passive", HDMIRX1N: "input", HDMIRX1P: "input", AVDD11_59: "passive", AVDD33_60: "passive", HDMIRX2N: "input", HDMIRX2P: "input", DVO_D7: "output", DVSS_64: "passive", AVSS_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class STULPI01A extends Component.withPins({
  "D1": "A1",
  "D2": "A2",
  "D3": "A3",
  "CLK": "A4",
  "D4": "A5",
  "D5": "A6",
  "D0": "B1",
  "VDVIO_B2": "B2",
  "VDVIO_B3": "B3",
  "GND_B4": "B4",
  "VDVIO_B5": "B5",
  "D6": "B6",
  "DM": "C1",
  "RREF": "C2",
  "~{CS}/PWRDN": "C3",
  "~{RESET}": "C4",
  "GND_C5": "C5",
  "D7": "C6",
  "DP": "D1",
  "GND_D2": "D2",
  "ID": "D3",
  "~{PSW}": "D4",
  "NXT": "D5",
  "STP": "D6",
  "GND_E1": "E1",
  "VB_REF_FAULT": "E2",
  "3V3V": "E3",
  "GND_E4": "E4",
  "DIR": "E5",
  "1V2V": "E6",
  "NC_F1": "F1",
  "NC_F2": "F2",
  "VBAT": "F3",
  "VBUS": "F4",
  "XI": "F5",
  "XO": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", CLK: "output", D4: "bidirectional", D5: "bidirectional", D0: "bidirectional", VDVIO_B2: "power_in", VDVIO_B3: "passive", GND_B4: "power_in", VDVIO_B5: "passive", D6: "bidirectional", DM: "bidirectional", RREF: "passive", "~{CS}/PWRDN": "input", "~{RESET}": "input", GND_C5: "passive", D7: "bidirectional", DP: "bidirectional", GND_D2: "passive", ID: "input", "~{PSW}": "output", NXT: "output", STP: "input", GND_E1: "passive", VB_REF_FAULT: "input", "3V3V": "passive", GND_E4: "passive", DIR: "output", "1V2V": "passive", NC_F1: "no_connect", NC_F2: "no_connect", VBAT: "power_in", VBUS: "bidirectional", XI: "input", XO: "output", ...opts.pinTypes } });
  }
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
 */
export class STULPI01B extends Component.withPins({
  "D1": "A1",
  "D2": "A2",
  "D3": "A3",
  "CLK": "A4",
  "D4": "A5",
  "D5": "A6",
  "D0": "B1",
  "VDVIO_B2": "B2",
  "VDVIO_B3": "B3",
  "GND_B4": "B4",
  "VDVIO_B5": "B5",
  "D6": "B6",
  "DM": "C1",
  "RREF": "C2",
  "~{CS}/PWRDN": "C3",
  "~{RESET}": "C4",
  "GND_C5": "C5",
  "D7": "C6",
  "DP": "D1",
  "GND_D2": "D2",
  "ID": "D3",
  "~{PSW}": "D4",
  "NXT": "D5",
  "STP": "D6",
  "GND_E1": "E1",
  "VB_REF_FAULT": "E2",
  "3V3V": "E3",
  "GND_E4": "E4",
  "DIR": "E5",
  "1V2V": "E6",
  "NC_F1": "F1",
  "NC_F2": "F2",
  "VBAT": "F3",
  "VBUS": "F4",
  "XI": "F5",
  "XO": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", CLK: "output", D4: "bidirectional", D5: "bidirectional", D0: "bidirectional", VDVIO_B2: "power_in", VDVIO_B3: "passive", GND_B4: "power_in", VDVIO_B5: "passive", D6: "bidirectional", DM: "bidirectional", RREF: "passive", "~{CS}/PWRDN": "input", "~{RESET}": "input", GND_C5: "passive", D7: "bidirectional", DP: "bidirectional", GND_D2: "passive", ID: "input", "~{PSW}": "output", NXT: "output", STP: "input", GND_E1: "passive", VB_REF_FAULT: "input", "3V3V": "passive", GND_E4: "passive", DIR: "output", "1V2V": "passive", NC_F1: "no_connect", NC_F2: "no_connect", VBAT: "power_in", VBUS: "bidirectional", XI: "input", XO: "output", ...opts.pinTypes } });
  }
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
 */
export class STUSB4500QTR extends Component.withPins({
  "CC1DB": "1",
  "CC1": "2",
  "NC": "3",
  "CC2": "4",
  "CC2DB": "5",
  "RESET": "6",
  "SCL": "7",
  "SDA": "8",
  "DISCH": "9",
  "GND_10": "10",
  "ATTACH": "11",
  "ADDR0": "12",
  "ADDR1": "13",
  "POWER_OK3": "14",
  "GPIO": "15",
  "VBUS_EN_SNK": "16",
  "A_B_SIDE": "17",
  "VBUS_VS_DISCH": "18",
  "ALERT": "19",
  "POWER_OK2": "20",
  "VREG_1V2": "21",
  "VSYS": "22",
  "VREG_2V7": "23",
  "VDD": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC1DB: "bidirectional", CC1: "bidirectional", NC: "no_connect", CC2: "bidirectional", CC2DB: "bidirectional", RESET: "input", SCL: "input", SDA: "bidirectional", DISCH: "bidirectional", GND_10: "power_in", ATTACH: "open_collector", ADDR0: "input", ADDR1: "input", POWER_OK3: "open_collector", GPIO: "open_collector", VBUS_EN_SNK: "open_collector", A_B_SIDE: "open_collector", VBUS_VS_DISCH: "input", ALERT: "open_collector", POWER_OK2: "open_collector", VREG_1V2: "power_out", VSYS: "power_in", VREG_2V7: "power_out", VDD: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class TCPP03_M20 extends Component.withPins({
  "CC1": "1",
  "VCC_{VCONN}": "2",
  "CC2": "3",
  "I_{ANA}": "4",
  "GDP_{g}": "5",
  "GDP_{s}": "6",
  "GDC_{g}": "7",
  "GDC_{s}": "8",
  "VBUS_{c}": "9",
  "I_{sense}": "10",
  "V_{sense}": "11",
  "GND_12": "12",
  "CC2_{c}": "13",
  "C_{BIAS}": "14",
  "CC1_{c}": "15",
  "I2C_{ADD}": "16",
  "SDA": "17",
  "SCL": "18",
  "~{FLG}": "19",
  "EN": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC1: "bidirectional", "VCC_{VCONN}": "power_in", CC2: "bidirectional", "I_{ANA}": "output", "GDP_{g}": "output", "GDP_{s}": "input", "GDC_{g}": "output", "GDC_{s}": "input", "VBUS_{c}": "input", "I_{sense}": "input", "V_{sense}": "input", GND_12: "power_in", "CC2_{c}": "bidirectional", "C_{BIAS}": "output", "CC1_{c}": "bidirectional", "I2C_{ADD}": "input", SDA: "bidirectional", SCL: "bidirectional", "~{FLG}": "open_collector", EN: "input", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS2500DRC extends Component.withPins({
  "SW": "1",
  "GND_2": "2",
  "IN": "3",
  "EN": "4",
  "GND_5": "5",
  "ILIM": "6",
  "ENUSB": "7",
  "~{FAULT}": "8",
  "USB": "9",
  "AUX": "10",
  "GND_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SW: "power_in", GND_2: "passive", IN: "power_in", EN: "input", GND_5: "power_in", ILIM: "passive", ENUSB: "input", "~{FAULT}": "open_collector", USB: "power_out", AUX: "power_out", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS2501DRC extends Component.withPins({
  "SW": "1",
  "GND_2": "2",
  "IN": "3",
  "EN": "4",
  "GND_5": "5",
  "ILIM": "6",
  "ENUSB": "7",
  "~{FAULT}": "8",
  "USB": "9",
  "AUX": "10",
  "GND_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SW: "power_in", GND_2: "passive", IN: "power_in", EN: "input", GND_5: "power_in", ILIM: "passive", ENUSB: "input", "~{FAULT}": "open_collector", USB: "power_out", AUX: "power_out", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS2513 extends Component.withPins({
  "DP1": "1",
  "GND": "2",
  "DP2": "3",
  "DM2": "4",
  "IN": "5",
  "DM1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DP1: "input", GND: "power_in", DP2: "input", DM2: "input", IN: "power_in", DM1: "input", ...opts.pinTypes } });
  }
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
 */
export class TPS2513A extends Component.withPins({
  "DP1": "1",
  "GND": "2",
  "DP2": "3",
  "DM2": "4",
  "IN": "5",
  "DM1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DP1: "input", GND: "power_in", DP2: "input", DM2: "input", IN: "power_in", DM1: "input", ...opts.pinTypes } });
  }
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
 */
export class TPS2514 extends Component.withPins({
  "DP1": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "IN": "5",
  "DM1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DP1: "input", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", IN: "power_in", DM1: "input", ...opts.pinTypes } });
  }
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
 */
export class TPS2514A extends Component.withPins({
  "DP1": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "IN": "5",
  "DM1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DP1: "input", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", IN: "power_in", DM1: "input", ...opts.pinTypes } });
  }
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
 */
export class TPS2560 extends Component.withPins({
  "GND": "1",
  "IN_2": "2",
  "IN_3": "3",
  "EN1": "4",
  "EN2": "5",
  "~{FAULT2}": "6",
  "ILM": "7",
  "OUT2": "8",
  "OUT1": "9",
  "~{FAULT1}": "10",
  "PAD": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", IN_2: "power_in", IN_3: "power_in", EN1: "input", EN2: "input", "~{FAULT2}": "output", ILM: "output", OUT2: "output", OUT1: "output", "~{FAULT1}": "output", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPS2561 extends Component.withPins({
  "GND": "1",
  "IN_2": "2",
  "IN_3": "3",
  "EN1": "4",
  "EN2": "5",
  "~{FAULT2}": "6",
  "ILM": "7",
  "OUT2": "8",
  "OUT1": "9",
  "~{FAULT1}": "10",
  "PAD": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", IN_2: "power_in", IN_3: "power_in", EN1: "input", EN2: "input", "~{FAULT2}": "output", ILM: "output", OUT2: "output", OUT1: "output", "~{FAULT1}": "output", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPS25730D extends Component.withPins({
  "LDO_3V3": "1",
  "ADCIN1": "2",
  "ADCIN2": "3",
  "LDO_1V5": "4",
  "ADCIN3": "5",
  "CAP_MIS": "6",
  "ADCIN4": "7",
  "I2Ct_SDA": "8",
  "I2Ct_SCL": "9",
  "DBG_ACC": "10",
  "GND_11": "11",
  "GND_12": "12",
  "PLUG_FLIP": "13",
  "GND_14": "14",
  "DRAIN_15": "15",
  "GND_16": "16",
  "GND_17": "17",
  "~{FAULT_IN}": "18",
  "~{SINK_EN}": "19",
  "PPHV": "20",
  "VBUS_IN": "23",
  "RESERVED_26": "26",
  "RESERVED_27": "27",
  "CC1": "28",
  "CC2": "29",
  "DRAIN_30": "30",
  "GND_31": "31",
  "VBUS": "32",
  "GND_34": "34",
  "RESERVED_36": "36",
  "PLUG_EVENT": "37",
  "VIN_3V3": "38",
  "GND_39": "39",
  "DRAIN_40": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LDO_3V3: "power_out", ADCIN1: "input", ADCIN2: "input", LDO_1V5: "output", ADCIN3: "input", CAP_MIS: "open_collector", ADCIN4: "input", I2Ct_SDA: "bidirectional", I2Ct_SCL: "input", DBG_ACC: "open_collector", GND_11: "power_in", GND_12: "passive", PLUG_FLIP: "open_collector", GND_14: "passive", DRAIN_15: "passive", GND_16: "passive", GND_17: "passive", "~{FAULT_IN}": "input", "~{SINK_EN}": "open_collector", PPHV: "bidirectional", VBUS_IN: "power_in", RESERVED_26: "input", RESERVED_27: "input", CC1: "bidirectional", CC2: "bidirectional", DRAIN_30: "passive", GND_31: "passive", VBUS: "power_in", GND_34: "passive", RESERVED_36: "input", PLUG_EVENT: "open_collector", VIN_3V3: "power_in", GND_39: "passive", DRAIN_40: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS25751D extends Component.withPins({
  "LDO_3V3": "1",
  "ADCIN1": "2",
  "ADCIN2": "3",
  "LDO_1V5": "4",
  "GPIO0": "5",
  "GPIO1": "6",
  "GPIO2": "7",
  "I2Ct_SDA": "8",
  "I2Ct_SCL": "9",
  "~{I2Ct_IRQ}": "10",
  "GPIO11": "13",
  "I2Cc_SDA": "16",
  "I2Cc_SCL": "17",
  "~{I2Cc_IRQ}": "18",
  "GPIO3": "19",
  "PPHV": "20",
  "VBUS_IN": "23",
  "GPIO4": "26",
  "GPIO5": "27",
  "CC1": "28",
  "CC2": "29",
  "VBUS": "32",
  "PP5V": "34",
  "GPIO7": "36",
  "GPIO6": "37",
  "VIN_3V3": "38",
  "DRAIN_EP": "40",
  "GND": "[11,12,14,31,39]",
  "DRAIN": "[15,30]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LDO_3V3: "power_out", ADCIN1: "input", ADCIN2: "input", LDO_1V5: "power_out", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", I2Ct_SDA: "bidirectional", I2Ct_SCL: "input", "~{I2Ct_IRQ}": "open_collector", GPIO11: "output", I2Cc_SDA: "bidirectional", I2Cc_SCL: "open_collector", "~{I2Cc_IRQ}": "input", GPIO3: "bidirectional", PPHV: "power_in", VBUS_IN: "power_in", GPIO4: "bidirectional", GPIO5: "bidirectional", CC1: "bidirectional", CC2: "bidirectional", VBUS: "power_out", PP5V: "power_in", GPIO7: "bidirectional", GPIO6: "bidirectional", VIN_3V3: "power_in", DRAIN_EP: "passive", GND: "power_in", DRAIN: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPS25810RVC extends Component.withPins({
  "~{FAULT}": "1",
  "IN1_2": "2",
  "IN1_3": "3",
  "IN2": "4",
  "AUX": "5",
  "EN": "6",
  "CHG": "7",
  "CHG_HI": "8",
  "REF_RTN": "9",
  "REF": "10",
  "CC1": "11",
  "GND_12": "12",
  "CC2": "13",
  "OUT_14": "14",
  "OUT_15": "15",
  "~{DEBUG}": "16",
  "~{AUDIO}": "17",
  "~{POL}": "18",
  "~{UFP}": "19",
  "~{LD_DET}": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{FAULT}": "open_collector", IN1_2: "power_in", IN1_3: "passive", IN2: "power_in", AUX: "power_in", EN: "input", CHG: "input", CHG_HI: "input", REF_RTN: "passive", REF: "output", CC1: "bidirectional", GND_12: "power_in", CC2: "bidirectional", OUT_14: "power_out", OUT_15: "passive", "~{DEBUG}": "open_collector", "~{AUDIO}": "open_collector", "~{POL}": "open_collector", "~{UFP}": "open_collector", "~{LD_DET}": "open_collector", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class TS3USB30EDGSR extends Component.withPins({
  "S": "1",
  "D1+": "2",
  "D2+": "3",
  "D+": "4",
  "GND": "5",
  "D-": "6",
  "D2-": "7",
  "D1-": "8",
  "~{OE}": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "input", "D1+": "bidirectional", "D2+": "bidirectional", "D+": "bidirectional", GND: "power_in", "D-": "bidirectional", "D2-": "bidirectional", "D1-": "bidirectional", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TS3USB30ERSWR extends Component.withPins({
  "D1+": "1",
  "D2+": "2",
  "D+": "3",
  "GND": "4",
  "D-": "5",
  "D2-": "6",
  "D1-": "7",
  "~{OE}": "8",
  "VCC": "9",
  "S": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D1+": "bidirectional", "D2+": "bidirectional", "D+": "bidirectional", GND: "power_in", "D-": "bidirectional", "D2-": "bidirectional", "D1-": "bidirectional", "~{OE}": "input", VCC: "power_in", S: "input", ...opts.pinTypes } });
  }
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
 */
export class TS3USBCA410 extends Component.withPins({
  "LnBp": "7",
  "LnBn": "8",
  "VCC": "1",
  "MIC_GND1/Ln1": "2",
  "MIC_GND2/Ln2": "3",
  "~{OE}": "4",
  "SEL1/SCL": "5",
  "SEL0/SDA": "6",
  "GND": "9",
  "SBU2": "10",
  "SBU1": "11",
  "I2C_EN": "12",
  "NC": "13",
  "FLIP": "14",
  "LnAn": "15",
  "LnAp": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LnBp: "passive", LnBn: "passive", VCC: "power_in", "MIC_GND1/Ln1": "passive", "MIC_GND2/Ln2": "passive", "~{OE}": "input", "SEL1/SCL": "input", "SEL0/SDA": "bidirectional", GND: "power_in", SBU2: "passive", SBU1: "passive", I2C_EN: "input", NC: "no_connect", FLIP: "input", LnAn: "passive", LnAp: "passive", ...opts.pinTypes } });
  }
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
 */
export class TS3USBCA420 extends Component.withPins({
  "LnBp": "7",
  "LnBn": "8",
  "LnCn": "13",
  "LnCp": "14",
  "VCC": "1",
  "MIC_GND1/Ln1": "2",
  "MIC_GND2/Ln2": "3",
  "~{OE}": "4",
  "SEL1/SCL": "5",
  "SEL0/SDA": "6",
  "GND": "9",
  "SBU2": "10",
  "SBU1": "11",
  "I2C_EN": "12",
  "LnAn": "15",
  "LnAp": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LnBp: "passive", LnBn: "passive", LnCn: "passive", LnCp: "passive", VCC: "power_in", "MIC_GND1/Ln1": "passive", "MIC_GND2/Ln2": "passive", "~{OE}": "input", "SEL1/SCL": "input", "SEL0/SDA": "bidirectional", GND: "power_in", SBU2: "passive", SBU1: "passive", I2C_EN: "input", LnAn: "passive", LnAp: "passive", ...opts.pinTypes } });
  }
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
 */
export class TUSB2036 extends Component.withPins({
  "DP0": "1",
  "DM0": "2",
  "VCC_3": "3",
  "~{RESET}": "4",
  "EECLK": "5",
  "EEDATA/~{GANGED}": "6",
  "GND_7": "7",
  "~{BUSPWR}": "8",
  "~{PWRON1}": "9",
  "~{OVRCUR1}": "10",
  "DM1": "11",
  "DP1": "12",
  "~{PWRON2}": "13",
  "~{OVRCUR2}": "14",
  "DM2": "15",
  "DP2": "16",
  "~{PWRON3}": "17",
  "~{OVRCUR3}": "18",
  "DM3": "19",
  "DP3": "20",
  "~{OCPROT}/~{PWRSW}": "21",
  "NPINT0": "22",
  "NPINT1": "23",
  "~{NP3}": "24",
  "VCC_25": "25",
  "~{EXTMEM}": "26",
  "DP0PUR": "27",
  "GND_28": "28",
  "XTAL2": "29",
  "XTAL1/CLK48": "30",
  "MODE": "31",
  "SUSPND": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DP0: "bidirectional", DM0: "bidirectional", VCC_3: "power_in", "~{RESET}": "input", EECLK: "tri_state", "EEDATA/~{GANGED}": "bidirectional", GND_7: "power_in", "~{BUSPWR}": "input", "~{PWRON1}": "output", "~{OVRCUR1}": "input", DM1: "bidirectional", DP1: "bidirectional", "~{PWRON2}": "output", "~{OVRCUR2}": "input", DM2: "bidirectional", DP2: "bidirectional", "~{PWRON3}": "output", "~{OVRCUR3}": "input", DM3: "bidirectional", DP3: "bidirectional", "~{OCPROT}/~{PWRSW}": "input", NPINT0: "input", NPINT1: "input", "~{NP3}": "input", VCC_25: "power_in", "~{EXTMEM}": "input", DP0PUR: "output", GND_28: "power_in", XTAL2: "output", "XTAL1/CLK48": "input", MODE: "input", SUSPND: "output", ...opts.pinTypes } });
  }
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
 */
export class TUSB320 extends Component.withPins({
  "CC1": "1",
  "CC2": "2",
  "PORT": "3",
  "VBUS_DET": "4",
  "ADDR": "5",
  "~{INT}/OUT3": "6",
  "SDA/OUT1": "7",
  "SCL/OUT2": "8",
  "ID": "9",
  "GND": "10",
  "~{EN}": "11",
  "VDD": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC1: "bidirectional", CC2: "bidirectional", PORT: "input", VBUS_DET: "input", ADDR: "input", "~{INT}/OUT3": "open_collector", "SDA/OUT1": "bidirectional", "SCL/OUT2": "bidirectional", ID: "open_collector", GND: "power_in", "~{EN}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TUSB320I extends Component.withPins({
  "CC1": "1",
  "CC2": "2",
  "PORT": "3",
  "VBUS_DET": "4",
  "ADDR": "5",
  "~{INT}/OUT3": "6",
  "SDA/OUT1": "7",
  "SCL/OUT2": "8",
  "ID": "9",
  "GND": "10",
  "~{EN}": "11",
  "VDD": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC1: "bidirectional", CC2: "bidirectional", PORT: "input", VBUS_DET: "input", ADDR: "input", "~{INT}/OUT3": "open_collector", "SDA/OUT1": "bidirectional", "SCL/OUT2": "bidirectional", ID: "open_collector", GND: "power_in", "~{EN}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TUSB321 extends Component.withPins({
  "CC1": "1",
  "CC2": "2",
  "CURRENT_MODE": "3",
  "PORT": "4",
  "VBUS_DET": "5",
  "~{VCONN_FAULT}": "6",
  "OUT1": "7",
  "OUT2": "8",
  "ID": "9",
  "GND": "10",
  "DIR": "11",
  "VDD": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC1: "bidirectional", CC2: "bidirectional", CURRENT_MODE: "input", PORT: "input", VBUS_DET: "input", "~{VCONN_FAULT}": "open_collector", OUT1: "open_collector", OUT2: "open_collector", ID: "open_collector", GND: "power_in", DIR: "open_collector", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TUSB322I extends Component.withPins({
  "CC1": "1",
  "CC2": "2",
  "VBUS_DET": "3",
  "DIR": "4",
  "ADDR": "5",
  "~{INT}/OUT3": "6",
  "SDA/OUT1": "7",
  "SCL/OUT2": "8",
  "ID": "9",
  "GND": "10",
  "~{EN}": "11",
  "VDD": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC1: "bidirectional", CC2: "bidirectional", VBUS_DET: "input", DIR: "open_collector", ADDR: "input", "~{INT}/OUT3": "open_collector", "SDA/OUT1": "bidirectional", "SCL/OUT2": "bidirectional", ID: "open_collector", GND: "power_in", "~{EN}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TUSB4041I extends Component.withPins({
  "PWRCTL3/BATEN3": "1",
  "VDD33_2": "2",
  "PWRCTL2/BATEN2": "3",
  "PWRCTL1/BATEN1": "4",
  "SDA/SMBDAT": "5",
  "SCL/SMBCLK": "6",
  "SMBUSz": "7",
  "FULLPWRMGMTz/SMBA1": "8",
  "PWRCTL_POL": "9",
  "GANGED/SMBA2/HS_UP": "10",
  "OVERCUR4z": "11",
  "OVERCUR3z": "12",
  "AUTOENz/HS_SUSPEND": "13",
  "OVERCUR1z": "14",
  "OVERCUR2z": "15",
  "USB_VBUS": "16",
  "TEST": "17",
  "GRSTz": "18",
  "VDD_19": "19",
  "VDD33_20": "20",
  "USB_DP_UP": "21",
  "USB_DM_UP": "22",
  "RSVD_23": "23",
  "RSVD_24": "24",
  "VDD_25": "25",
  "RSVD_26": "26",
  "RSVD_27": "27",
  "NC_28": "28",
  "XO": "29",
  "XI": "30",
  "VDD33_31": "31",
  "USB_R1": "32",
  "USB_DP_DN1": "33",
  "USB_DM_DN1": "34",
  "RSVD_35": "35",
  "RSVD_36": "36",
  "VDD_37": "37",
  "RSVD_38": "38",
  "RSVD_39": "39",
  "NC_40": "40",
  "USB_DP_DN2": "41",
  "USB_DM_DN2": "42",
  "RSVD_43": "43",
  "RSVD_44": "44",
  "VDD_45": "45",
  "RSVD_46": "46",
  "RSVD_47": "47",
  "VDD33_48": "48",
  "USB_DP_DN3": "49",
  "USB_DM_DN3": "50",
  "RSVD_51": "51",
  "RSVD_52": "52",
  "VDD_53": "53",
  "RSVD_54": "54",
  "RSVD_55": "55",
  "USB_DP_DN4": "56",
  "USB_DM_DN4": "57",
  "RSVD_58": "58",
  "RSVD_59": "59",
  "VDD_60": "60",
  "RSVD_61": "61",
  "RSVD_62": "62",
  "VDD_63": "63",
  "PWRCTL4/BATEN4": "64",
  "VSS": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PWRCTL3/BATEN3": "bidirectional", VDD33_2: "power_in", "PWRCTL2/BATEN2": "bidirectional", "PWRCTL1/BATEN1": "bidirectional", "SDA/SMBDAT": "bidirectional", "SCL/SMBCLK": "bidirectional", SMBUSz: "bidirectional", "FULLPWRMGMTz/SMBA1": "bidirectional", PWRCTL_POL: "bidirectional", "GANGED/SMBA2/HS_UP": "bidirectional", OVERCUR4z: "input", OVERCUR3z: "input", "AUTOENz/HS_SUSPEND": "bidirectional", OVERCUR1z: "input", OVERCUR2z: "input", USB_VBUS: "input", TEST: "input", GRSTz: "input", VDD_19: "power_in", VDD33_20: "power_in", USB_DP_UP: "bidirectional", USB_DM_UP: "bidirectional", RSVD_23: "no_connect", RSVD_24: "no_connect", VDD_25: "power_in", RSVD_26: "no_connect", RSVD_27: "no_connect", NC_28: "no_connect", XO: "output", XI: "input", VDD33_31: "power_in", USB_R1: "input", USB_DP_DN1: "bidirectional", USB_DM_DN1: "bidirectional", RSVD_35: "no_connect", RSVD_36: "no_connect", VDD_37: "power_in", RSVD_38: "no_connect", RSVD_39: "no_connect", NC_40: "no_connect", USB_DP_DN2: "bidirectional", USB_DM_DN2: "bidirectional", RSVD_43: "no_connect", RSVD_44: "no_connect", VDD_45: "power_in", RSVD_46: "no_connect", RSVD_47: "no_connect", VDD33_48: "power_in", USB_DP_DN3: "bidirectional", USB_DM_DN3: "bidirectional", RSVD_51: "no_connect", RSVD_52: "no_connect", VDD_53: "power_in", RSVD_54: "no_connect", RSVD_55: "no_connect", USB_DP_DN4: "bidirectional", USB_DM_DN4: "bidirectional", RSVD_58: "no_connect", RSVD_59: "no_connect", VDD_60: "power_in", RSVD_61: "no_connect", RSVD_62: "no_connect", VDD_63: "power_in", "PWRCTL4/BATEN4": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TUSB564 extends Component.withPins({
  "NC": "1",
  "DPEQ1": "2",
  "SSEQ1": "3",
  "SSRXn": "4",
  "SSRXp": "5",
  "SSTXn": "7",
  "SSTXp": "8",
  "TX1p": "9",
  "TX1n": "10",
  "EQ0": "11",
  "RX1p": "12",
  "RX1n": "13",
  "EQ1": "14",
  "RX2n": "15",
  "RX2p": "16",
  "I2C_EN": "17",
  "TX2n": "18",
  "TX2p": "19",
  "FLIP/SCL": "21",
  "CTL0/SDA": "22",
  "CTL1": "23",
  "SBU1": "24",
  "SBU2": "25",
  "AUXp": "26",
  "AUXn": "27",
  "EN": "29",
  "DP3n": "30",
  "DP3p": "31",
  "HPDIN": "32",
  "DP2n": "33",
  "DP2p": "34",
  "DPEQ0/A1": "35",
  "DP1n": "36",
  "DP1p": "37",
  "SSEQ0/A0": "38",
  "DP0n": "39",
  "DP0p": "40",
  "EP": "41",
  "VCC": "[6,20,28]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", DPEQ1: "input", SSEQ1: "input", SSRXn: "input", SSRXp: "input", SSTXn: "input", SSTXp: "input", TX1p: "bidirectional", TX1n: "bidirectional", EQ0: "input", RX1p: "input", RX1n: "input", EQ1: "input", RX2n: "input", RX2p: "input", I2C_EN: "input", TX2n: "bidirectional", TX2p: "bidirectional", "FLIP/SCL": "input", "CTL0/SDA": "input", CTL1: "input", SBU1: "bidirectional", SBU2: "bidirectional", AUXp: "bidirectional", AUXn: "bidirectional", EN: "input", DP3n: "output", DP3p: "output", HPDIN: "input", DP2n: "output", DP2p: "output", "DPEQ0/A1": "input", DP1n: "output", DP1p: "output", "SSEQ0/A0": "input", DP0n: "output", DP0p: "output", EP: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TUSB7340 extends Component.withPins({
  "VDD11_A1": "A1",
  "SDA": "A2",
  "VDD33_A3": "A3",
  "VDD11_A4": "A4",
  "USB_DM_DN4": "A5",
  "VDD11_A6": "A6",
  "USB_SSRXN_DN4": "A7",
  "USB_SSTXN_DN4": "A8",
  "VDD11_A9": "A9",
  "USB_SSRXN_DN2": "A10",
  "USB_SSTXP_DN2": "A11",
  "VDD11_A12": "A12",
  "USB_DM_DN2": "A13",
  "NC_A14": "A14",
  "GRST#": "A15",
  "VDD11_A16": "A16",
  "USB_SSTXP_DN1": "A17",
  "USB_SSRXP_DN1": "A18",
  "VDDA_3P3_A19": "A19",
  "USB_DP_DN1": "A20",
  "VDDA_3P3_A21": "A21",
  "XO": "A22",
  "XI": "A23",
  "R1EXT": "A24",
  "VDDA_3P3_A25": "A25",
  "NC_A26": "A26",
  "USB_DM_DN3": "A27",
  "VDD11_A28": "A28",
  "USB_SSRXN_DN3": "A29",
  "USB_SSTXN_DN3": "A30",
  "VDD11_A31": "A31",
  "JTAG_TCK": "A32",
  "VDD11_A33": "A33",
  "VDD33_A34": "A34",
  "JTAG_TDI": "A35",
  "OVERCUR1#": "A36",
  "OVERCUR2#": "A37",
  "VDD11_A38": "A38",
  "VDD33_A39": "A39",
  "PERST#": "A40",
  "PCIE_TXN": "A41",
  "PCIE_RXN": "A42",
  "NC_A43": "A43",
  "VDDA_3P3_A44": "A44",
  "PCIE_REFCLKP": "A45",
  "PWRON3#": "A46",
  "VDD33_A47": "A47",
  "PWRON4#": "A48",
  "GPIO0": "A49",
  "VDD11_A50": "A50",
  "VDD33_A51": "A51",
  "AUX_DET": "A52",
  "VSS_EP": "A53",
  "VDD11_B1": "B1",
  "SCL": "B2",
  "SMI": "B3",
  "VDDA_3P3_B4": "B4",
  "USB_DP_DN4": "B5",
  "USB_SSRXP_DN4": "B6",
  "USB_SSTXP_DN4": "B7",
  "NC_B8": "B8",
  "USB_SSRXP_DN2": "B9",
  "USB_SSTXN_DN2": "B10",
  "VDDA_3P3_B11": "B11",
  "USB_DP_DN2": "B12",
  "NC_B13": "B13",
  "FREQSEL": "B14",
  "USB_SSTXN_DN1": "B15",
  "USB_SSRXN_DN1": "B16",
  "VDD11_B17": "B17",
  "USB_DM_DN1": "B18",
  "VDD11_B19": "B19",
  "VSS_B20": "B20",
  "VSS_OSC": "B21",
  "VDDA_3P3_B22": "B22",
  "R1EXTRTN": "B23",
  "VDD11_B24": "B24",
  "USB_DP_DN3": "B25",
  "VDDA_3P3_B26": "B26",
  "USB_SSRXP_DN3": "B27",
  "USB_SSTXP_DN3": "B28",
  "NC_B29": "B29",
  "JTAG_TMS": "B30",
  "JTAG_TDO": "B31",
  "JTAG_RST#": "B32",
  "PWRON1#": "B33",
  "PWRON2#": "B34",
  "WAKE#": "B35",
  "CLKREQ#": "B36",
  "VDD11_B37": "B37",
  "PCIE_TXP": "B38",
  "PCIE_RXP": "B39",
  "VDD11_B40": "B40",
  "PCIE_REFCLKN": "B41",
  "VDD11_B42": "B42",
  "OVERCUR3#": "B43",
  "VDD11_B44": "B44",
  "OVERCUR4#": "B45",
  "GPIO1": "B46",
  "GPIO2": "B47",
  "GPIO3": "B48",
  "VSS_C1": "C1",
  "VSS_C2": "C2",
  "VSS_C3": "C3",
  "VSS_C4": "C4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD11_A1: "power_in", SDA: "bidirectional", VDD33_A3: "power_in", VDD11_A4: "power_in", USB_DM_DN4: "bidirectional", VDD11_A6: "power_in", USB_SSRXN_DN4: "input", USB_SSTXN_DN4: "input", VDD11_A9: "power_in", USB_SSRXN_DN2: "input", USB_SSTXP_DN2: "output", VDD11_A12: "power_in", USB_DM_DN2: "bidirectional", NC_A14: "no_connect", "GRST#": "input", VDD11_A16: "power_in", USB_SSTXP_DN1: "output", USB_SSRXP_DN1: "input", VDDA_3P3_A19: "power_in", USB_DP_DN1: "bidirectional", VDDA_3P3_A21: "power_in", XO: "output", XI: "input", R1EXT: "bidirectional", VDDA_3P3_A25: "power_in", NC_A26: "no_connect", USB_DM_DN3: "bidirectional", VDD11_A28: "power_in", USB_SSRXN_DN3: "input", USB_SSTXN_DN3: "output", VDD11_A31: "power_in", JTAG_TCK: "input", VDD11_A33: "power_in", VDD33_A34: "power_in", JTAG_TDI: "input", "OVERCUR1#": "input", "OVERCUR2#": "input", VDD11_A38: "power_in", VDD33_A39: "power_in", "PERST#": "input", PCIE_TXN: "output", PCIE_RXN: "input", NC_A43: "no_connect", VDDA_3P3_A44: "power_in", PCIE_REFCLKP: "input", "PWRON3#": "output", VDD33_A47: "power_in", "PWRON4#": "output", GPIO0: "bidirectional", VDD11_A50: "power_in", VDD33_A51: "power_in", AUX_DET: "input", VSS_EP: "power_in", VDD11_B1: "power_in", SCL: "bidirectional", SMI: "output", VDDA_3P3_B4: "power_in", USB_DP_DN4: "bidirectional", USB_SSRXP_DN4: "input", USB_SSTXP_DN4: "input", NC_B8: "no_connect", USB_SSRXP_DN2: "input", USB_SSTXN_DN2: "output", VDDA_3P3_B11: "power_in", USB_DP_DN2: "bidirectional", NC_B13: "no_connect", FREQSEL: "input", USB_SSTXN_DN1: "output", USB_SSRXN_DN1: "input", VDD11_B17: "power_in", USB_DM_DN1: "bidirectional", VDD11_B19: "power_in", VSS_B20: "power_in", VSS_OSC: "input", VDDA_3P3_B22: "power_in", R1EXTRTN: "bidirectional", VDD11_B24: "power_in", USB_DP_DN3: "bidirectional", VDDA_3P3_B26: "power_in", USB_SSRXP_DN3: "input", USB_SSTXP_DN3: "output", NC_B29: "no_connect", JTAG_TMS: "input", JTAG_TDO: "output", "JTAG_RST#": "input", "PWRON1#": "output", "PWRON2#": "output", "WAKE#": "output", "CLKREQ#": "input", VDD11_B37: "power_in", PCIE_TXP: "output", PCIE_RXP: "input", VDD11_B40: "power_in", PCIE_REFCLKN: "input", VDD11_B42: "power_in", "OVERCUR3#": "input", VDD11_B44: "power_in", "OVERCUR4#": "input", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", VSS_C1: "power_in", VSS_C2: "power_in", VSS_C3: "power_in", VSS_C4: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TUSB8041 extends Component.withPins({
  "USB_DP_DN1": "1",
  "USB_DM_DN1": "2",
  "USB_SSTXP_DN1": "3",
  "USB_SSTXM_DN1": "4",
  "VDD_5": "5",
  "USB_SSRXP_DN1": "6",
  "USB_SSRXM_DN1": "7",
  "VDD_8": "8",
  "USB_DP_DN2": "9",
  "USB_DM_DN2": "10",
  "USB_SSTXP_DN2": "11",
  "USB_SSTXM_DN2": "12",
  "VDD_13": "13",
  "USB_SSRXP_DN2": "14",
  "USB_SSRXM_DN2": "15",
  "VDD33_16": "16",
  "USB_DP_DN3": "17",
  "USB_DM_DN3": "18",
  "USB_SSTXP_DN3": "19",
  "USB_SSTXM_DN3": "20",
  "VDD_21": "21",
  "USB_SSRXP_DN3": "22",
  "USB_SSRXM_DN3": "23",
  "USB_DP_DN4": "24",
  "USB_DM_DN4": "25",
  "USB_SSTXP_DN4": "26",
  "USB_SSTXM_DN4": "27",
  "VDD_28": "28",
  "USB_SSRXP_DN4": "29",
  "USB_SSRXM_DN4": "30",
  "VDD_31": "31",
  "PWRCTL4/BATEN4": "32",
  "PWRCTL3/BATEN3": "33",
  "VDD33_34": "34",
  "PWRCTL2/BATEN2": "35",
  "PWRCTL1/BATEN1": "36",
  "SDA/SMBDAT": "37",
  "SCL/SMBCLK": "38",
  "SMBUSz/SS_SUSPEND": "39",
  "FULLPWRMGMTz/SMBA1/SS_UP": "40",
  "PWRCTL_POL": "41",
  "GANGED/SMBA2/HS_UP": "42",
  "OVERCUR4z": "43",
  "OVERCUR3z": "44",
  "AUTOENz/HS_SUSPEND": "45",
  "OVERCUR1z": "46",
  "OVERCUR2z": "47",
  "USB_VBUS": "48",
  "TEST": "49",
  "GRSTz": "50",
  "VDD_51": "51",
  "VDD33_52": "52",
  "USB_DP_UP": "53",
  "USB_DM_UP": "54",
  "USB_SSTXP_UP": "55",
  "USB_SSTXM_UP": "56",
  "VDD_57": "57",
  "USB_SSRXP_UP": "58",
  "USB_SSRXM_UP": "59",
  "NC": "60",
  "XO": "61",
  "XI": "62",
  "VDD33_63": "63",
  "USB_R1": "64",
  "VSS": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { USB_DP_DN1: "bidirectional", USB_DM_DN1: "bidirectional", USB_SSTXP_DN1: "output", USB_SSTXM_DN1: "output", VDD_5: "power_in", USB_SSRXP_DN1: "input", USB_SSRXM_DN1: "input", VDD_8: "power_in", USB_DP_DN2: "bidirectional", USB_DM_DN2: "bidirectional", USB_SSTXP_DN2: "output", USB_SSTXM_DN2: "output", VDD_13: "power_in", USB_SSRXP_DN2: "input", USB_SSRXM_DN2: "input", VDD33_16: "power_in", USB_DP_DN3: "bidirectional", USB_DM_DN3: "bidirectional", USB_SSTXP_DN3: "output", USB_SSTXM_DN3: "output", VDD_21: "power_in", USB_SSRXP_DN3: "input", USB_SSRXM_DN3: "input", USB_DP_DN4: "bidirectional", USB_DM_DN4: "bidirectional", USB_SSTXP_DN4: "output", USB_SSTXM_DN4: "output", VDD_28: "power_in", USB_SSRXP_DN4: "input", USB_SSRXM_DN4: "input", VDD_31: "power_in", "PWRCTL4/BATEN4": "bidirectional", "PWRCTL3/BATEN3": "bidirectional", VDD33_34: "power_in", "PWRCTL2/BATEN2": "bidirectional", "PWRCTL1/BATEN1": "bidirectional", "SDA/SMBDAT": "bidirectional", "SCL/SMBCLK": "bidirectional", "SMBUSz/SS_SUSPEND": "bidirectional", "FULLPWRMGMTz/SMBA1/SS_UP": "bidirectional", PWRCTL_POL: "bidirectional", "GANGED/SMBA2/HS_UP": "bidirectional", OVERCUR4z: "input", OVERCUR3z: "input", "AUTOENz/HS_SUSPEND": "bidirectional", OVERCUR1z: "input", OVERCUR2z: "input", USB_VBUS: "input", TEST: "input", GRSTz: "input", VDD_51: "power_in", VDD33_52: "power_in", USB_DP_UP: "bidirectional", USB_DM_UP: "bidirectional", USB_SSTXP_UP: "output", USB_SSTXM_UP: "output", VDD_57: "power_in", USB_SSRXP_UP: "input", USB_SSRXM_UP: "input", NC: "no_connect", XO: "output", XI: "input", VDD33_63: "power_in", USB_R1: "input", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TUSB8043A extends Component.withPins({
  "USB_DP_DN1": "1",
  "USB_DM_DN1": "2",
  "USB_SSTXP_DN1": "3",
  "USB_SSTXM_DN1": "4",
  "VDD_5": "5",
  "USB_SSRXP_DN1": "6",
  "USB_SSRXM_DN1": "7",
  "VDD_8": "8",
  "USB_DP_DN2": "9",
  "USB_DM_DN2": "10",
  "USB_SSTXP_DN2": "11",
  "USB_SSTXM_DN2": "12",
  "VDD_13": "13",
  "USB_SSRXP_DN2": "14",
  "USB_SSRXM_DN2": "15",
  "VDD33_16": "16",
  "USB_DP_DN3": "17",
  "USB_DM_DN3": "18",
  "USB_SSTXP_DN3": "19",
  "USB_SSTXM_DN3": "20",
  "VDD_21": "21",
  "USB_SSRXP_DN3": "22",
  "USB_SSRXM_DN3": "23",
  "USB_DP_DN4": "24",
  "USB_DM_DN4": "25",
  "USB_SSTXP_DN4": "26",
  "USB_SSTXM_DN4": "27",
  "VDD_28": "28",
  "USB_SSRXP_DN4": "29",
  "USB_SSRXM_DN4": "30",
  "VDD_31": "31",
  "PWRCTL4/BATEN4": "32",
  "PWRCTL3/BATEN3": "33",
  "VDD33_34": "34",
  "PWRCTL2/BATEN2": "35",
  "PWRCTL1/BATEN1": "36",
  "SDA/SMBDAT": "37",
  "SCL/SMBCLK": "38",
  "SMBUSz/SS_SUSPEND": "39",
  "FULLPWRMGMTz/SMBA1/SS_UP": "40",
  "PWRCTL_POL": "41",
  "GANGED/SMBA2/HS_UP": "42",
  "OVERCUR4z": "43",
  "OVERCUR3z": "44",
  "AUTOENz/HS_SUSPEND": "45",
  "OVERCUR1z": "46",
  "OVERCUR2z": "47",
  "USB_VBUS": "48",
  "TEST": "49",
  "GRSTz": "50",
  "VDD_51": "51",
  "VDD33_52": "52",
  "USB_DP_UP": "53",
  "USB_DM_UP": "54",
  "USB_SSTXP_UP": "55",
  "USB_SSTXM_UP": "56",
  "VDD_57": "57",
  "USB_SSRXP_UP": "58",
  "USB_SSRXM_UP": "59",
  "NC": "60",
  "XO": "61",
  "XI": "62",
  "VDD33_63": "63",
  "USB_R1": "64",
  "VSS": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { USB_DP_DN1: "bidirectional", USB_DM_DN1: "bidirectional", USB_SSTXP_DN1: "output", USB_SSTXM_DN1: "output", VDD_5: "power_in", USB_SSRXP_DN1: "input", USB_SSRXM_DN1: "input", VDD_8: "power_in", USB_DP_DN2: "bidirectional", USB_DM_DN2: "bidirectional", USB_SSTXP_DN2: "output", USB_SSTXM_DN2: "output", VDD_13: "power_in", USB_SSRXP_DN2: "input", USB_SSRXM_DN2: "input", VDD33_16: "power_in", USB_DP_DN3: "bidirectional", USB_DM_DN3: "bidirectional", USB_SSTXP_DN3: "output", USB_SSTXM_DN3: "output", VDD_21: "power_in", USB_SSRXP_DN3: "input", USB_SSRXM_DN3: "input", USB_DP_DN4: "bidirectional", USB_DM_DN4: "bidirectional", USB_SSTXP_DN4: "output", USB_SSTXM_DN4: "output", VDD_28: "power_in", USB_SSRXP_DN4: "input", USB_SSRXM_DN4: "input", VDD_31: "power_in", "PWRCTL4/BATEN4": "bidirectional", "PWRCTL3/BATEN3": "bidirectional", VDD33_34: "power_in", "PWRCTL2/BATEN2": "bidirectional", "PWRCTL1/BATEN1": "bidirectional", "SDA/SMBDAT": "bidirectional", "SCL/SMBCLK": "bidirectional", "SMBUSz/SS_SUSPEND": "bidirectional", "FULLPWRMGMTz/SMBA1/SS_UP": "bidirectional", PWRCTL_POL: "bidirectional", "GANGED/SMBA2/HS_UP": "bidirectional", OVERCUR4z: "input", OVERCUR3z: "input", "AUTOENz/HS_SUSPEND": "bidirectional", OVERCUR1z: "input", OVERCUR2z: "input", USB_VBUS: "input", TEST: "input", GRSTz: "input", VDD_51: "power_in", VDD33_52: "power_in", USB_DP_UP: "bidirectional", USB_DM_UP: "bidirectional", USB_SSTXP_UP: "output", USB_SSTXM_UP: "output", VDD_57: "power_in", USB_SSRXP_UP: "input", USB_SSRXM_UP: "input", NC: "no_connect", XO: "output", XI: "input", VDD33_63: "power_in", USB_R1: "input", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class UPD720202K8_7x1_BAA extends Component.withPins({
  "PECLKP": "1",
  "PECLKN": "2",
  "AVDD33_3": "3",
  "PETXP": "4",
  "PETXN": "5",
  "VDD10_6": "6",
  "PERXP": "7",
  "PERXN": "8",
  "VDD10_9": "9",
  "~{PECREQ}": "10",
  "PONRSTB": "11",
  "VDD33_12": "12",
  "SPISO": "13",
  "~{SPICS}": "14",
  "SPISCK": "15",
  "SPISI": "16",
  "~{OCI2}": "17",
  "PPON2": "18",
  "~{OCI1}": "19",
  "PPON1": "20",
  "VDD10_21": "21",
  "VDD33_22": "22",
  "XT2": "23",
  "XT1": "24",
  "AVDD33_25": "25",
  "RREF": "26",
  "GND_27": "27",
  "U3TXDP1": "28",
  "U3TXDN1": "29",
  "VDD10_30": "30",
  "U3RXDP1": "31",
  "U3RXDN1": "32",
  "VDD10_33": "33",
  "VDD33_34": "34",
  "U2DP1": "35",
  "U2DM1": "36",
  "U3TXDP2": "37",
  "U3TXDN2": "38",
  "VDD10_39": "39",
  "U3RXDP2": "40",
  "U3RXDN2": "41",
  "VDD10_42": "42",
  "VDD33_43": "43",
  "U2DP2": "44",
  "U2DM2": "45",
  "SMIB": "46",
  "~{PERST}": "47",
  "~{PEWAKE}": "48",
  "GND_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PECLKP: "input", PECLKN: "input", AVDD33_3: "power_in", PETXP: "output", PETXN: "output", VDD10_6: "power_in", PERXP: "input", PERXN: "input", VDD10_9: "passive", "~{PECREQ}": "open_collector", PONRSTB: "input", VDD33_12: "power_in", SPISO: "input", "~{SPICS}": "output", SPISCK: "output", SPISI: "output", "~{OCI2}": "input", PPON2: "output", "~{OCI1}": "input", PPON1: "output", VDD10_21: "passive", VDD33_22: "passive", XT2: "output", XT1: "input", AVDD33_25: "passive", RREF: "passive", GND_27: "power_in", U3TXDP1: "bidirectional", U3TXDN1: "bidirectional", VDD10_30: "passive", U3RXDP1: "bidirectional", U3RXDN1: "bidirectional", VDD10_33: "passive", VDD33_34: "passive", U2DP1: "bidirectional", U2DM1: "bidirectional", U3TXDP2: "bidirectional", U3TXDN2: "bidirectional", VDD10_39: "passive", U3RXDP2: "bidirectional", U3RXDN2: "bidirectional", VDD10_42: "passive", VDD33_43: "passive", U2DP2: "bidirectional", U2DM2: "bidirectional", SMIB: "open_collector", "~{PERST}": "input", "~{PEWAKE}": "open_collector", GND_49: "passive", ...opts.pinTypes } });
  }
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
 */
export class USB2504 extends Component.withPins({
  "VDDA33_1": "1",
  "USBD0_P": "2",
  "USBD0_N": "3",
  "VSS_4": "4",
  "USBD1_N": "5",
  "USBD1_P": "6",
  "VDDA33_7": "7",
  "USBD2_P": "8",
  "USBD2_N": "9",
  "VSS_10": "10",
  "USBD3_N": "11",
  "USBD3_P": "12",
  "VDDA33_13": "13",
  "USBD4_P": "14",
  "USBD4_N": "15",
  "VSS_16": "16",
  "NC_17": "17",
  "NC_18": "18",
  "AM4/LED_EN": "19",
  "GR4/PRT_DIS1": "20",
  "AM3": "21",
  "GR3/PRT_DIS0": "22",
  "PRTPWR_POL": "23",
  "AM2/MTT_EN": "24",
  "GR2/NON_REM1": "25",
  "AM1/GANG_EN": "26",
  "GR1/NON_REM0": "27",
  "VDD33": "28",
  "VSS_29": "29",
  "VDD18_30": "30",
  "TEST0": "31",
  "NC_32": "32",
  "NC_33": "33",
  "SDA/SMBDATA": "34",
  "SCL/SMBCLK": "35",
  "CFG_SEL0": "36",
  "PRTPWR4": "37",
  "~{OCS4}": "38",
  "PRTPWR3": "39",
  "~{OCS3}": "40",
  "VSS_41": "41",
  "VDD18_42": "42",
  "PRTPWR2": "43",
  "~{OCS2}": "44",
  "PRTPWR1": "45",
  "~{OCS1}": "46",
  "CLKIN_EN": "47",
  "TEST1": "48",
  "~{RESET}": "49",
  "CFG_SEL1": "50",
  "SELF_PWR": "51",
  "VBUS_DET": "52",
  "VSS_53": "53",
  "VDD18_54": "54",
  "VSS_55": "55",
  "NC_56": "56",
  "XTAL2": "57",
  "XTAL1/CLKIN": "58",
  "CFG_SEL2": "59",
  "VDDA18PLL": "60",
  "VDDA33PLL": "61",
  "ATEST/REG_EN": "62",
  "RBIAS": "63",
  "VSS_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDA33_1: "power_in", USBD0_P: "bidirectional", USBD0_N: "bidirectional", VSS_4: "power_in", USBD1_N: "bidirectional", USBD1_P: "bidirectional", VDDA33_7: "passive", USBD2_P: "bidirectional", USBD2_N: "bidirectional", VSS_10: "passive", USBD3_N: "bidirectional", USBD3_P: "bidirectional", VDDA33_13: "passive", USBD4_P: "bidirectional", USBD4_N: "bidirectional", VSS_16: "passive", NC_17: "no_connect", NC_18: "no_connect", "AM4/LED_EN": "bidirectional", "GR4/PRT_DIS1": "bidirectional", AM3: "bidirectional", "GR3/PRT_DIS0": "bidirectional", PRTPWR_POL: "bidirectional", "AM2/MTT_EN": "bidirectional", "GR2/NON_REM1": "bidirectional", "AM1/GANG_EN": "bidirectional", "GR1/NON_REM0": "bidirectional", VDD33: "power_in", VSS_29: "passive", VDD18_30: "power_in", TEST0: "input", NC_32: "no_connect", NC_33: "no_connect", "SDA/SMBDATA": "bidirectional", "SCL/SMBCLK": "bidirectional", CFG_SEL0: "input", PRTPWR4: "output", "~{OCS4}": "input", PRTPWR3: "output", "~{OCS3}": "input", VSS_41: "passive", VDD18_42: "passive", PRTPWR2: "output", "~{OCS2}": "input", PRTPWR1: "output", "~{OCS1}": "input", CLKIN_EN: "input", TEST1: "input", "~{RESET}": "input", CFG_SEL1: "input", SELF_PWR: "input", VBUS_DET: "bidirectional", VSS_53: "passive", VDD18_54: "passive", VSS_55: "passive", NC_56: "no_connect", XTAL2: "output", "XTAL1/CLKIN": "input", CFG_SEL2: "input", VDDA18PLL: "power_in", VDDA33PLL: "power_in", "ATEST/REG_EN": "bidirectional", RBIAS: "input", VSS_64: "passive", ...opts.pinTypes } });
  }
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
 */
export class USB2514B_Bi extends Component.withPins({
  "USBDM_DN1/PRT_DIS_M1": "1",
  "USBDP_DN1/PRT_DIS_P1": "2",
  "USBDM_DN2/PRT_DIS_M2": "3",
  "USBDP_DN2/PRT_DIS_P2": "4",
  "VDDA33_5": "5",
  "USBDM_DN3/PRT_DIS_M3": "6",
  "USBDP_DN3/PRT_DIS_P3": "7",
  "USBDM_DN4/PRT_DIS_M4": "8",
  "USBDP_DN4/PRT_DIS_P4": "9",
  "VDDA33_10": "10",
  "TEST": "11",
  "PRTPWR1/BC_EN1": "12",
  "OCS_N1": "13",
  "CRFILT": "14",
  "VDD33_15": "15",
  "PRTPWR2/BC_EN2": "16",
  "OCS_N2": "17",
  "PRTPWR3/BC_EN3": "18",
  "OCS_N3": "19",
  "PRTPWR4/BC_EN4": "20",
  "OCS_N4": "21",
  "SDA/SMBDATA/NON_REM1": "22",
  "VDD33_23": "23",
  "SCL/SMBCLK/CFG_SEL0": "24",
  "HS_IND/CFG_SEL1": "25",
  "RESET_N": "26",
  "VBUS_DET": "27",
  "SUSP_IND/LOCAL_PWR/NON_REM0": "28",
  "VDDA33_29": "29",
  "USBDM_UP": "30",
  "USBDP_UP": "31",
  "XTALOUT": "32",
  "XTALIN/CLKIN": "33",
  "PLLFILT": "34",
  "RBIAS": "35",
  "VDDA33_36": "36",
  "VSS": "37",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "USBDM_DN1/PRT_DIS_M1": "bidirectional", "USBDP_DN1/PRT_DIS_P1": "bidirectional", "USBDM_DN2/PRT_DIS_M2": "bidirectional", "USBDP_DN2/PRT_DIS_P2": "bidirectional", VDDA33_5: "power_in", "USBDM_DN3/PRT_DIS_M3": "bidirectional", "USBDP_DN3/PRT_DIS_P3": "bidirectional", "USBDM_DN4/PRT_DIS_M4": "bidirectional", "USBDP_DN4/PRT_DIS_P4": "bidirectional", VDDA33_10: "power_in", TEST: "input", "PRTPWR1/BC_EN1": "bidirectional", OCS_N1: "input", CRFILT: "input", VDD33_15: "power_in", "PRTPWR2/BC_EN2": "bidirectional", OCS_N2: "input", "PRTPWR3/BC_EN3": "bidirectional", OCS_N3: "input", "PRTPWR4/BC_EN4": "bidirectional", OCS_N4: "input", "SDA/SMBDATA/NON_REM1": "bidirectional", VDD33_23: "power_in", "SCL/SMBCLK/CFG_SEL0": "bidirectional", "HS_IND/CFG_SEL1": "bidirectional", RESET_N: "input", VBUS_DET: "input", "SUSP_IND/LOCAL_PWR/NON_REM0": "bidirectional", VDDA33_29: "power_in", USBDM_UP: "bidirectional", USBDP_UP: "bidirectional", XTALOUT: "output", "XTALIN/CLKIN": "input", PLLFILT: "input", RBIAS: "input", VDDA33_36: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class USB3250_ABZJ extends Component.withPins({
  "VSSA_1": "1",
  "DM": "2",
  "DP": "3",
  "VDDA3.3_4": "4",
  "VSSA_5": "5",
  "RBIAS": "6",
  "VDDA3.3_7": "7",
  "VSSA_8": "8",
  "VSSA_9": "9",
  "XI": "10",
  "XO": "11",
  "VDDA1.8": "12",
  "~{SUSPEND}": "13",
  "VSS_14": "14",
  "VDD3.3_15": "15",
  "VDD1.8_16": "16",
  "XCVRSELECT": "17",
  "TERMSELECT": "18",
  "OPMODE1": "19",
  "OPMODE0": "20",
  "LINESTATE1": "21",
  "LINESTATE0": "22",
  "VDD1.8_23": "23",
  "RESET": "24",
  "DATA15": "25",
  "DATA14": "26",
  "DATA13": "27",
  "VDD3.3_28": "28",
  "DATA12": "29",
  "DATA11": "30",
  "DATA10": "31",
  "DATA9": "32",
  "VSS_33": "33",
  "DATA8": "34",
  "DATA7": "35",
  "DATA6": "36",
  "DATA5": "37",
  "VDD1.8_38": "38",
  "DATA4": "39",
  "DATA3": "40",
  "DATA2": "41",
  "DATA1": "42",
  "VDD3.3_43": "43",
  "DATA0": "44",
  "TXVALID": "45",
  "RXVALID": "46",
  "VALIDH": "47",
  "VSS_48": "48",
  "CLKOUT": "49",
  "RXACTIVE": "50",
  "TXREADY": "51",
  "RXERROR": "52",
  "VDD1.8_53": "53",
  "DATABUS16_8": "54",
  "VSS_55": "55",
  "VSS_56": "56",
  "EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSA_1: "power_in", DM: "bidirectional", DP: "bidirectional", "VDDA3.3_4": "power_in", VSSA_5: "passive", RBIAS: "passive", "VDDA3.3_7": "passive", VSSA_8: "passive", VSSA_9: "passive", XI: "input", XO: "output", "VDDA1.8": "power_in", "~{SUSPEND}": "input", VSS_14: "power_in", "VDD3.3_15": "power_in", "VDD1.8_16": "power_in", XCVRSELECT: "input", TERMSELECT: "input", OPMODE1: "input", OPMODE0: "input", LINESTATE1: "output", LINESTATE0: "output", "VDD1.8_23": "passive", RESET: "input", DATA15: "bidirectional", DATA14: "bidirectional", DATA13: "bidirectional", "VDD3.3_28": "passive", DATA12: "bidirectional", DATA11: "bidirectional", DATA10: "bidirectional", DATA9: "bidirectional", VSS_33: "passive", DATA8: "bidirectional", DATA7: "bidirectional", DATA6: "bidirectional", DATA5: "bidirectional", "VDD1.8_38": "passive", DATA4: "bidirectional", DATA3: "bidirectional", DATA2: "bidirectional", DATA1: "bidirectional", "VDD3.3_43": "passive", DATA0: "bidirectional", TXVALID: "input", RXVALID: "output", VALIDH: "bidirectional", VSS_48: "passive", CLKOUT: "output", RXACTIVE: "output", TXREADY: "output", RXERROR: "output", "VDD1.8_53": "passive", DATABUS16_8: "input", VSS_55: "passive", VSS_56: "passive", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class USB3300_EZK extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "CPEN": "3",
  "VBUS": "4",
  "ID": "5",
  "VDD3.3_6": "6",
  "DP": "7",
  "DM": "8",
  "RESET": "9",
  "EXTVBUS": "10",
  "NXT": "11",
  "DIR": "12",
  "STP": "13",
  "CLKOUT": "14",
  "VDD1.8_15": "15",
  "VDD3.3_16": "16",
  "DATA7": "17",
  "DATA6": "18",
  "DATA5": "19",
  "DATA4": "20",
  "DATA3": "21",
  "DATA2": "22",
  "DATA1": "23",
  "DATA0": "24",
  "VDD3.3_25": "25",
  "VDD1.8_26": "26",
  "XO": "27",
  "XI": "28",
  "VDDA1.8": "29",
  "VDD3.3_30": "30",
  "REG_EN": "31",
  "RBIAS": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", CPEN: "output", VBUS: "power_in", ID: "input", "VDD3.3_6": "power_in", DP: "bidirectional", DM: "bidirectional", RESET: "input", EXTVBUS: "input", NXT: "output", DIR: "output", STP: "input", CLKOUT: "output", "VDD1.8_15": "power_out", "VDD3.3_16": "power_in", DATA7: "bidirectional", DATA6: "bidirectional", DATA5: "bidirectional", DATA4: "bidirectional", DATA3: "bidirectional", DATA2: "bidirectional", DATA1: "bidirectional", DATA0: "bidirectional", "VDD3.3_25": "power_in", "VDD1.8_26": "power_out", XO: "output", XI: "input", "VDDA1.8": "power_out", "VDD3.3_30": "power_in", REG_EN: "bidirectional", RBIAS: "passive", GND_33: "power_in", ...opts.pinTypes } });
  }
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
 */
export class USB3341 extends Component.withPins({
  "CLKOUT": "1",
  "NXT": "2",
  "DATA0": "3",
  "DATA1": "4",
  "DATA2": "5",
  "DATA3": "6",
  "DATA4": "7",
  "DATA5": "8",
  "DATA6": "9",
  "DATA7": "10",
  "SPK_L": "11",
  "SPK_R": "12",
  "DP": "13",
  "DM": "14",
  "VDD33": "15",
  "VBAT": "16",
  "VBUS": "17",
  "ID": "18",
  "RBIAS": "19",
  "REFCLK": "20",
  "~{RESETB}": "21",
  "VDD18": "22",
  "STP": "23",
  "DIR": "24",
  "GND": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKOUT: "output", NXT: "output", DATA0: "bidirectional", DATA1: "bidirectional", DATA2: "bidirectional", DATA3: "bidirectional", DATA4: "bidirectional", DATA5: "bidirectional", DATA6: "bidirectional", DATA7: "bidirectional", SPK_L: "bidirectional", SPK_R: "bidirectional", DP: "bidirectional", DM: "bidirectional", VDD33: "power_out", VBAT: "power_in", VBUS: "input", ID: "input", RBIAS: "passive", REFCLK: "input", "~{RESETB}": "input", VDD18: "power_out", STP: "input", DIR: "output", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class USB3343 extends Component.withPins({
  "DIR": "1",
  "CLKOUT": "2",
  "NXT": "3",
  "DATA0": "4",
  "DATA1": "5",
  "DATA2": "6",
  "DATA3": "7",
  "DATA4": "8",
  "VDDIO": "9",
  "DATA5": "10",
  "DATA6": "11",
  "DATA7": "12",
  "DP": "13",
  "DM": "14",
  "VDD33": "15",
  "VBAT": "16",
  "VBUS": "17",
  "ID": "18",
  "RBIAS": "19",
  "XO": "20",
  "REFCLK/XI": "21",
  "~{RESETB}": "22",
  "VDD18": "23",
  "STP": "24",
  "GND": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIR: "output", CLKOUT: "output", NXT: "output", DATA0: "bidirectional", DATA1: "bidirectional", DATA2: "bidirectional", DATA3: "bidirectional", DATA4: "bidirectional", VDDIO: "power_in", DATA5: "bidirectional", DATA6: "bidirectional", DATA7: "bidirectional", DP: "bidirectional", DM: "bidirectional", VDD33: "power_out", VBAT: "power_in", VBUS: "input", ID: "input", RBIAS: "passive", XO: "output", "REFCLK/XI": "input", "~{RESETB}": "input", VDD18: "power_out", STP: "input", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class USB3346 extends Component.withPins({
  "CLKOUT": "1",
  "NXT": "2",
  "DATA0": "3",
  "DATA1": "4",
  "DATA2": "5",
  "DATA3": "6",
  "DATA4": "7",
  "DATA5": "8",
  "DATA6": "9",
  "DATA7": "10",
  "SPK_L": "11",
  "SPK_R": "12",
  "DP": "13",
  "DM": "14",
  "VDD33": "15",
  "VBAT": "16",
  "VBUS": "17",
  "ID": "18",
  "RBIAS": "19",
  "REFCLK": "20",
  "~{RESETB}": "21",
  "VDD18": "22",
  "STP": "23",
  "DIR": "24",
  "GND": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKOUT: "output", NXT: "output", DATA0: "bidirectional", DATA1: "bidirectional", DATA2: "bidirectional", DATA3: "bidirectional", DATA4: "bidirectional", DATA5: "bidirectional", DATA6: "bidirectional", DATA7: "bidirectional", SPK_L: "bidirectional", SPK_R: "bidirectional", DP: "bidirectional", DM: "bidirectional", VDD33: "power_out", VBAT: "power_in", VBUS: "input", ID: "input", RBIAS: "passive", REFCLK: "input", "~{RESETB}": "input", VDD18: "power_out", STP: "input", DIR: "output", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class USB3347 extends Component.withPins({
  "CLKOUT": "1",
  "NXT": "2",
  "DATA0": "3",
  "DATA1": "4",
  "DATA2": "5",
  "DATA3": "6",
  "DATA4": "7",
  "DATA5": "8",
  "DATA6": "9",
  "DATA7": "10",
  "SPK_L": "11",
  "SPK_R": "12",
  "DP": "13",
  "DM": "14",
  "VDD33": "15",
  "VBAT": "16",
  "VBUS": "17",
  "ID": "18",
  "RBIAS": "19",
  "REFCLK": "20",
  "~{RESETB}": "21",
  "VDD18": "22",
  "STP": "23",
  "DIR": "24",
  "GND": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKOUT: "output", NXT: "output", DATA0: "bidirectional", DATA1: "bidirectional", DATA2: "bidirectional", DATA3: "bidirectional", DATA4: "bidirectional", DATA5: "bidirectional", DATA6: "bidirectional", DATA7: "bidirectional", SPK_L: "bidirectional", SPK_R: "bidirectional", DP: "bidirectional", DM: "bidirectional", VDD33: "power_out", VBAT: "power_in", VBUS: "input", ID: "input", RBIAS: "passive", REFCLK: "input", "~{RESETB}": "input", VDD18: "power_out", STP: "input", DIR: "output", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class USB3740B_AI2 extends Component.withPins({
  "DM_1": "1",
  "DP_1": "2",
  "OE_N": "3",
  "S": "4",
  "VDD": "5",
  "DP_2": "6",
  "DM_2": "7",
  "GND": "8",
  "DM": "9",
  "DP": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DM_1: "bidirectional", DP_1: "bidirectional", OE_N: "input", S: "input", VDD: "power_in", DP_2: "bidirectional", DM_2: "bidirectional", GND: "power_in", DM: "bidirectional", DP: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class USB3740B_AI9 extends Component.withPins({
  "DM_1": "1",
  "DP_1": "2",
  "OE_N": "3",
  "S": "4",
  "VDD": "5",
  "DP_2": "6",
  "DM_2": "7",
  "GND": "8",
  "DM": "9",
  "DP": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DM_1: "bidirectional", DP_1: "bidirectional", OE_N: "input", S: "input", VDD: "power_in", DP_2: "bidirectional", DM_2: "bidirectional", GND: "power_in", DM: "bidirectional", DP: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class XR21B1424 extends Component.withPins({
  "RXA": "1",
  "GPIOA5/~{RTSA}/RS485A": "2",
  "GPIOA4/~{CTSA}": "3",
  "GPIOA3/~{DTRA}": "4",
  "GPIOA2/~{DSRA}": "5",
  "GPIOA1/~{CDA}": "6",
  "GPIOA0/~{RIA}/~{RWKA}": "7",
  "GND_8": "8",
  "USB_D+": "9",
  "USB_D-": "10",
  "VIO_11": "11",
  "VCC": "12",
  "VCC_REG": "13",
  "GND_14": "14",
  "GND_15": "15",
  "VBUS_SENSE": "16",
  "~{RESET}": "17",
  "USB_STAT2": "18",
  "GPIOC9/RXTC": "19",
  "GPIOC8/TXTC": "20",
  "GND_21": "21",
  "GPIOC7/RS485C": "22",
  "GPIOC6/CLKC": "23",
  "TXC": "24",
  "USB_STAT1": "25",
  "RXC": "26",
  "GPIOC5/~{RTSC}/RS485C": "27",
  "GPIOC4/~{CTSC}": "28",
  "GPIOC3/~{DTRC}": "29",
  "GPIOC2/~{DSRC}": "30",
  "GPIOC1/~{CDC}": "31",
  "~{TEST}": "32",
  "GPIOC0/~{RIC}/~{RWKC}": "33",
  "GPIOB9/RXTB": "34",
  "GPIOB8/TXTB": "35",
  "GPIOB7/RS485B": "36",
  "GPIOB6/CLKB": "37",
  "VIO_38": "38",
  "GND_39": "39",
  "TXB": "40",
  "RXB": "41",
  "GPIOB5/~{RTSB}/RS485B": "42",
  "GPIOB4/~{CTSB}": "43",
  "GPIOB3/~{DTRB}": "44",
  "GPIOB2/~{DSRB}": "45",
  "GPIOB1/~{CDB}": "46",
  "GPIOB0/~{RIB}/~{RWKB}": "47",
  "GPIOD9/RXTD": "48",
  "GPIOD8/TXTD": "49",
  "GPIOD7/RS485D": "50",
  "GPIOD6/CLKD": "51",
  "TXD": "52",
  "RXD": "53",
  "GPIOD5/~{RTSD}/RS485D": "54",
  "GPIOD4/~{CTSD}": "55",
  "GPIOD3/~{DTRD}": "56",
  "GPIOD2/~{DSRD}": "57",
  "GPIOD1/~{CDD}": "58",
  "GPIOD0/~{RID}/~{RWKD}": "59",
  "GPIOA9/RXTA": "60",
  "GPIOA8/TXTA": "61",
  "GPIOA7/RS485A": "62",
  "GPIOA6/CLKA": "63",
  "TXA": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXA: "input", "GPIOA5/~{RTSA}/RS485A": "bidirectional", "GPIOA4/~{CTSA}": "bidirectional", "GPIOA3/~{DTRA}": "bidirectional", "GPIOA2/~{DSRA}": "bidirectional", "GPIOA1/~{CDA}": "bidirectional", "GPIOA0/~{RIA}/~{RWKA}": "bidirectional", GND_8: "power_in", "USB_D+": "bidirectional", "USB_D-": "bidirectional", VIO_11: "power_in", VCC: "power_in", VCC_REG: "power_in", GND_14: "passive", GND_15: "passive", VBUS_SENSE: "input", "~{RESET}": "passive", USB_STAT2: "output", "GPIOC9/RXTC": "bidirectional", "GPIOC8/TXTC": "bidirectional", GND_21: "passive", "GPIOC7/RS485C": "bidirectional", "GPIOC6/CLKC": "bidirectional", TXC: "output", USB_STAT1: "output", RXC: "input", "GPIOC5/~{RTSC}/RS485C": "bidirectional", "GPIOC4/~{CTSC}": "bidirectional", "GPIOC3/~{DTRC}": "bidirectional", "GPIOC2/~{DSRC}": "bidirectional", "GPIOC1/~{CDC}": "bidirectional", "~{TEST}": "passive", "GPIOC0/~{RIC}/~{RWKC}": "bidirectional", "GPIOB9/RXTB": "bidirectional", "GPIOB8/TXTB": "bidirectional", "GPIOB7/RS485B": "bidirectional", "GPIOB6/CLKB": "bidirectional", VIO_38: "passive", GND_39: "passive", TXB: "output", RXB: "input", "GPIOB5/~{RTSB}/RS485B": "bidirectional", "GPIOB4/~{CTSB}": "bidirectional", "GPIOB3/~{DTRB}": "bidirectional", "GPIOB2/~{DSRB}": "bidirectional", "GPIOB1/~{CDB}": "bidirectional", "GPIOB0/~{RIB}/~{RWKB}": "bidirectional", "GPIOD9/RXTD": "bidirectional", "GPIOD8/TXTD": "bidirectional", "GPIOD7/RS485D": "bidirectional", "GPIOD6/CLKD": "bidirectional", TXD: "output", RXD: "input", "GPIOD5/~{RTSD}/RS485D": "bidirectional", "GPIOD4/~{CTSD}": "bidirectional", "GPIOD3/~{DTRD}": "bidirectional", "GPIOD2/~{DSRD}": "bidirectional", "GPIOD1/~{CDD}": "bidirectional", "GPIOD0/~{RID}/~{RWKD}": "bidirectional", "GPIOA9/RXTA": "bidirectional", "GPIOA8/TXTA": "bidirectional", "GPIOA7/RS485A": "bidirectional", "GPIOA6/CLKA": "bidirectional", TXA: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_USB:XR21B1424";
  override referencePrefix = "U";
}
