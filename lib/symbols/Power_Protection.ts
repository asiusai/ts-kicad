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
 */
export class CDNBS08_SLVU2_8_4 extends Component.withPins({
  "TVS1_1": "1",
  "TVS2_2": "2",
  "TVS1_3": "3",
  "TVS2_4": "4",
  "TVS1_5": "5",
  "TVS2_6": "6",
  "TVS1_7": "7",
  "TVS2_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TVS1_1: "passive", TVS2_2: "passive", TVS1_3: "passive", TVS2_4: "passive", TVS1_5: "passive", TVS2_6: "passive", TVS1_7: "passive", TVS2_8: "passive", ...opts.pinTypes } });
  }
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
 */
export class SRV05_4 extends Component.withPins({
  "IO1": "1",
  "VN": "2",
  "IO2": "3",
  "IO3": "4",
  "VP": "5",
  "IO4": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO1: "passive", VN: "passive", IO2: "passive", IO3: "passive", VP: "passive", IO4: "passive", ...opts.pinTypes } });
  }
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
 */
export class CDSOT236_0504C extends Component.withPins({
  "IO1": "1",
  "VN": "2",
  "IO2": "3",
  "IO3": "4",
  "VP": "5",
  "IO4": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO1: "passive", VN: "passive", IO2: "passive", IO3: "passive", VP: "passive", IO4: "passive", ...opts.pinTypes } });
  }
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
 */
export class CM1213A_01SO extends Component.withPins({
  "CH1": "1",
  "VP": "2",
  "VN": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CH1: "passive", VP: "passive", VN: "passive", ...opts.pinTypes } });
  }
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
 */
export class CM1624 extends Component.withPins({
  "SDData1": "1",
  "SDData0": "2",
  "SDCLK": "3",
  "ESD1_4": "4",
  "ESD3": "5",
  "SDCMD": "6",
  "SDData3": "7",
  "SDData2": "8",
  "Data2": "9",
  "Data3": "10",
  "CMD": "11",
  "VCC": "12",
  "ESD1_13": "13",
  "CLK": "14",
  "Data0": "15",
  "Data1": "16",
  "GND": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDData1: "passive", SDData0: "passive", SDCLK: "passive", ESD1_4: "passive", ESD3: "passive", SDCMD: "passive", SDData3: "passive", SDData2: "passive", Data2: "passive", Data3: "passive", CMD: "passive", VCC: "power_in", ESD1_13: "passive", CLK: "passive", Data0: "passive", Data1: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class D3V3X8U9LP3810 extends Component.withPins({
  "GND": "3",
  "Line-1": "1",
  "Line-3": "2",
  "Line-6": "4",
  "Line-8": "5",
  "Line-7": "6",
  "Line-5": "7",
  "Line-4": "8",
  "Line-2": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "passive", "Line-1": "passive", "Line-3": "passive", "Line-6": "passive", "Line-8": "passive", "Line-7": "passive", "Line-5": "passive", "Line-4": "passive", "Line-2": "passive", ...opts.pinTypes } });
  }
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
 */
export class D3V3XA4B10LP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "VSS_3": "3",
  "P4": "4",
  "P5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VSS_8": "8",
  "NC_9": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", VSS_3: "power_in", P4: "passive", P5: "passive", NC_6: "free", NC_7: "free", VSS_8: "passive", NC_9: "free", NC_10: "free", ...opts.pinTypes } });
  }
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
 */
export class RCLAMP3328P extends Component.withPins({
  "A": "3",
  "K1": "1",
  "K2": "2",
  "K3": "4",
  "K4": "5",
  "K5": "6",
  "K6": "7",
  "K7": "8",
  "K8": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K1: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", K6: "passive", K7: "passive", K8: "passive", ...opts.pinTypes } });
  }
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
 */
export class DT1240A_08LP3810 extends Component.withPins({
  "A": "3",
  "K1": "1",
  "K2": "2",
  "K3": "4",
  "K4": "5",
  "K5": "6",
  "K6": "7",
  "K7": "8",
  "K8": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K1: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", K6: "passive", K7: "passive", K8: "passive", ...opts.pinTypes } });
  }
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
 */
export class ECMF02_2AMX6 extends Component.withPins({
  "D+_in": "1",
  "D-_in": "2",
  "GND": "3",
  "NC": "4",
  "D-_out": "5",
  "D+_out": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D+_in": "passive", "D-_in": "passive", GND: "power_in", NC: "free", "D-_out": "passive", "D+_out": "passive", ...opts.pinTypes } });
  }
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
 */
export class EMI8132 extends Component.withPins({
  "In_1+_1": "1",
  "In_1-_2": "2",
  "GND_3": "3",
  "In_1+_4": "4",
  "In_1-_5": "5",
  "Out_1+_6": "6",
  "Out_1+_7": "7",
  "GND_8": "8",
  "Out_1+_9": "9",
  "Out_1+_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "In_1+_1": "passive", "In_1-_2": "passive", GND_3: "power_in", "In_1+_4": "passive", "In_1-_5": "passive", "Out_1+_6": "passive", "Out_1+_7": "passive", GND_8: "passive", "Out_1+_9": "passive", "Out_1+_10": "passive", ...opts.pinTypes } });
  }
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
 */
export class ECMF04_4HSWM10 extends Component.withPins({
  "In_1+_1": "1",
  "In_1-_2": "2",
  "GND_3": "3",
  "In_1+_4": "4",
  "In_1-_5": "5",
  "Out_1+_6": "6",
  "Out_1+_7": "7",
  "GND_8": "8",
  "Out_1+_9": "9",
  "Out_1+_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "In_1+_1": "passive", "In_1-_2": "passive", GND_3: "power_in", "In_1+_4": "passive", "In_1-_5": "passive", "Out_1+_6": "passive", "Out_1+_7": "passive", GND_8: "passive", "Out_1+_9": "passive", "Out_1+_10": "passive", ...opts.pinTypes } });
  }
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
 */
export class EMI2121MTTAG extends Component.withPins({
  "In_1+": "1",
  "In_1-": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "VDD": "6",
  "Out_1-": "7",
  "Out_1+": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "In_1+": "passive", "In_1-": "passive", GND_3: "power_in", GND_4: "passive", GND_5: "passive", VDD: "power_in", "Out_1-": "passive", "Out_1+": "passive", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESD224DQA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "VSS_3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "VSS_8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", VSS_3: "power_in", P4: "passive", P5: "passive", P6: "passive", P7: "passive", VSS_8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESD3324P extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "VSS_3": "3",
  "P4": "4",
  "P5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VSS_8": "8",
  "NC_9": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", VSS_3: "power_in", P4: "passive", P5: "passive", NC_6: "free", NC_7: "free", VSS_8: "passive", NC_9: "free", NC_10: "free", ...opts.pinTypes } });
  }
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
 */
export class SP0504BAHT extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
  "K_4": "4",
  "K_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", K_4: "passive", K_5: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESDA14V2SC5 extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
  "K_4": "4",
  "K_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", K_4: "passive", K_5: "passive", ...opts.pinTypes } });
  }
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
 */
export class SP0502BAHT extends Component.withPins({
  "A": "3",
  "K_1": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_2: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESDA5V3L extends Component.withPins({
  "A": "3",
  "K_1": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_2: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESDA5V3SC5 extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
  "K_4": "4",
  "K_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", K_4: "passive", K_5: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESDA6V1_5SC6 extends Component.withPins({
  "GND": "2",
  "IO1": "1",
  "IO2": "3",
  "IO3": "4",
  "IO4": "5",
  "IO5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "passive", IO1: "passive", IO2: "passive", IO3: "passive", IO4: "passive", IO5: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESDA6V1BC6 extends Component.withPins({
  "COM_2": "2",
  "TVS1": "1",
  "TVS2": "3",
  "TVS3": "4",
  "COM_5": "5",
  "TVS4": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM_2: "passive", TVS1: "passive", TVS2: "passive", TVS3: "passive", COM_5: "passive", TVS4: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESDA6V1SC5 extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
  "K_4": "4",
  "K_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", K_4: "passive", K_5: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESDLC5V0PB8 extends Component.withPins({
  "A": "3",
  "K1": "1",
  "K2": "2",
  "K3": "4",
  "K4": "5",
  "K5": "6",
  "K6": "7",
  "K7": "8",
  "K8": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K1: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", K6: "passive", K7: "passive", K8: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESDS304 extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
  "K_4": "4",
  "K_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", K_4: "passive", K_5: "passive", ...opts.pinTypes } });
  }
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
 */
export class IP3319CX6 extends Component.withPins({
  "D+_OUT": "A1",
  "D+_IN": "A2",
  "D-_OUT": "B1",
  "D-_IN": "B2",
  "GND": "C1",
  "ID": "C2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D+_OUT": "passive", "D+_IN": "passive", "D-_OUT": "passive", "D-_IN": "passive", GND: "power_in", ID: "passive", ...opts.pinTypes } });
  }
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
 */
export class IP4234CZ6 extends Component.withPins({
  "P1": "1",
  "VN": "2",
  "P3": "3",
  "P4": "4",
  "VP": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", VN: "passive", P3: "passive", P4: "passive", VP: "passive", P6: "passive", ...opts.pinTypes } });
  }
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
 */
export class NUF4401MN extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "IN4": "4",
  "OUT4": "5",
  "OUT3": "6",
  "OUT2": "7",
  "OUT1": "8",
  "GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "passive", IN2: "passive", IN3: "passive", IN4: "passive", OUT4: "passive", OUT3: "passive", OUT2: "passive", OUT1: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IP4251CZ8_4_TTL extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "IN4": "4",
  "OUT4": "5",
  "OUT3": "6",
  "OUT2": "7",
  "OUT1": "8",
  "GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "passive", IN2: "passive", IN3: "passive", IN4: "passive", OUT4: "passive", OUT3: "passive", OUT2: "passive", OUT1: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IP4252CZ12 extends Component.withPins({
  "CH1_1": "1",
  "CH2_2": "2",
  "CH3_3": "3",
  "CH4_4": "4",
  "CH5_5": "5",
  "CH6_6": "6",
  "CH6_7": "7",
  "CH5_8": "8",
  "CH4_9": "9",
  "CH3_10": "10",
  "CH2_11": "11",
  "CH1_12": "12",
  "GND": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CH1_1: "passive", CH2_2: "passive", CH3_3: "passive", CH4_4: "passive", CH5_5: "passive", CH6_6: "passive", CH6_7: "passive", CH5_8: "passive", CH4_9: "passive", CH3_10: "passive", CH2_11: "passive", CH1_12: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IP4252CZ16 extends Component.withPins({
  "CH1_1": "1",
  "CH2_2": "2",
  "CH3_3": "3",
  "CH4_4": "4",
  "CH5_5": "5",
  "CH6_6": "6",
  "CH7_7": "7",
  "CH8_8": "8",
  "CH8_9": "9",
  "CH7_10": "10",
  "CH6_11": "11",
  "CH5_12": "12",
  "CH4_13": "13",
  "CH3_14": "14",
  "CH2_15": "15",
  "CH1_16": "16",
  "GND": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CH1_1: "passive", CH2_2: "passive", CH3_3: "passive", CH4_4: "passive", CH5_5: "passive", CH6_6: "passive", CH7_7: "passive", CH8_8: "passive", CH8_9: "passive", CH7_10: "passive", CH6_11: "passive", CH5_12: "passive", CH4_13: "passive", CH3_14: "passive", CH2_15: "passive", CH1_16: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IP4252CZ8 extends Component.withPins({
  "CH1_1": "1",
  "CH2_2": "2",
  "CH3_3": "3",
  "CH4_4": "4",
  "CH4_5": "5",
  "CH3_6": "6",
  "CH2_7": "7",
  "CH1_8": "8",
  "GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CH1_1: "passive", CH2_2: "passive", CH3_3: "passive", CH4_4: "passive", CH4_5: "passive", CH3_6: "passive", CH2_7: "passive", CH1_8: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IP4252CZ8_4_TTL extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "IN4": "4",
  "OUT4": "5",
  "OUT3": "6",
  "OUT2": "7",
  "OUT1": "8",
  "GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "passive", IN2: "passive", IN3: "passive", IN4: "passive", OUT4: "passive", OUT3: "passive", OUT2: "passive", OUT1: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IP4253CZ8_4_TTL extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "IN4": "4",
  "OUT4": "5",
  "OUT3": "6",
  "OUT2": "7",
  "OUT1": "8",
  "GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "passive", IN2: "passive", IN3: "passive", IN4: "passive", OUT4: "passive", OUT3: "passive", OUT2: "passive", OUT1: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IP4254CZ8_4_TTL extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "IN4": "4",
  "OUT4": "5",
  "OUT3": "6",
  "OUT2": "7",
  "OUT1": "8",
  "GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "passive", IN2: "passive", IN3: "passive", IN4: "passive", OUT4: "passive", OUT3: "passive", OUT2: "passive", OUT1: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class NCP349MN extends Component.withPins({
  "IN_1": "1",
  "GND": "2",
  "~{FLAG}": "3",
  "OUT_4": "4",
  "OUT_5": "5",
  "~{EN}": "6",
  "IN_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN_1: "power_in", GND: "power_in", "~{FLAG}": "open_collector", OUT_4: "power_out", OUT_5: "passive", "~{EN}": "input", IN_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class NCP349MNAE extends Component.withPins({
  "IN_1": "1",
  "GND": "2",
  "~{FLAG}": "3",
  "OUT_4": "4",
  "OUT_5": "5",
  "~{EN}": "6",
  "IN_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN_1: "power_in", GND: "power_in", "~{FLAG}": "open_collector", OUT_4: "power_out", OUT_5: "passive", "~{EN}": "input", IN_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class NCP349MNAM extends Component.withPins({
  "IN_1": "1",
  "GND": "2",
  "~{FLAG}": "3",
  "OUT_4": "4",
  "OUT_5": "5",
  "~{EN}": "6",
  "IN_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN_1: "power_in", GND: "power_in", "~{FLAG}": "open_collector", OUT_4: "power_out", OUT_5: "passive", "~{EN}": "input", IN_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class NCP349MNBG extends Component.withPins({
  "IN_1": "1",
  "GND": "2",
  "~{FLAG}": "3",
  "OUT_4": "4",
  "OUT_5": "5",
  "~{EN}": "6",
  "IN_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN_1: "power_in", GND: "power_in", "~{FLAG}": "open_collector", OUT_4: "power_out", OUT_5: "passive", "~{EN}": "input", IN_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class NCP349MNBK extends Component.withPins({
  "IN_1": "1",
  "GND": "2",
  "~{FLAG}": "3",
  "OUT_4": "4",
  "OUT_5": "5",
  "~{EN}": "6",
  "IN_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN_1: "power_in", GND: "power_in", "~{FLAG}": "open_collector", OUT_4: "power_out", OUT_5: "passive", "~{EN}": "input", IN_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class NCP361MU extends Component.withPins({
  "~{EN}": "1",
  "GND": "2",
  "IN": "3",
  "OUT_4": "4",
  "OUT_5": "5",
  "~{FLAG}": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{EN}": "input", GND: "power_in", IN: "power_in", OUT_4: "power_out", OUT_5: "passive", "~{FLAG}": "open_collector", ...opts.pinTypes } });
  }
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
 */
export class NCP361SN extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "~{EN}": "3",
  "~{FLAG}": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", GND: "power_in", "~{EN}": "input", "~{FLAG}": "open_collector", OUT: "power_out", ...opts.pinTypes } });
  }
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
 */
export class NUP2105L extends Component.withPins({
  "A": "3",
  "K_1": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_2: "passive", ...opts.pinTypes } });
  }
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
 */
export class NUP2202 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "no_connect", P4: "no_connect", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
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
 */
export class NUP4202 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
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
 */
export class PCMF3USB3S extends Component.withPins({
  "CH1_IN+": "A1",
  "CH1_IN-": "A2",
  "GND_CH1": "B1",
  "CH1_OUT+": "C1",
  "CH1_OUT-": "C2",
  "CH2_IN+": "A3",
  "CH2_IN-": "A4",
  "GND_CH2": "B2",
  "CH2_OUT+": "C3",
  "CH2_OUT-": "C4",
  "CH3_IN+": "A5",
  "CH3_IN-": "A6",
  "GND_CH3": "B3",
  "CH3_OUT+": "C5",
  "CH3_OUT-": "C6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "CH1_IN+": "passive", "CH1_IN-": "passive", GND_CH1: "power_in", "CH1_OUT+": "passive", "CH1_OUT-": "passive", "CH2_IN+": "passive", "CH2_IN-": "passive", GND_CH2: "power_in", "CH2_OUT+": "passive", "CH2_OUT-": "passive", "CH3_IN+": "passive", "CH3_IN-": "passive", GND_CH3: "power_in", "CH3_OUT+": "passive", "CH3_OUT-": "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD3V3L4UF extends Component.withPins({
  "K1": "1",
  "A_2": "2",
  "A_5": "5",
  "K2": "3",
  "K3": "4",
  "K4": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A_2: "passive", A_5: "passive", K2: "passive", K3: "passive", K4: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD3V3L4UG extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD3V3L4UW extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD3V3L5UF extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
  "K5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD3V3L5UV extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
  "K5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD3V3L5UY extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
  "K5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD5V0L4UF extends Component.withPins({
  "K1": "1",
  "A_2": "2",
  "A_5": "5",
  "K2": "3",
  "K3": "4",
  "K4": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A_2: "passive", A_5: "passive", K2: "passive", K3: "passive", K4: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD5V0L4UG extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD5V0L4UW extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD5V0L5UF extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
  "K5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD5V0L5UV extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
  "K5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", ...opts.pinTypes } });
  }
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
 */
export class PESD5V0L5UY extends Component.withPins({
  "K1": "1",
  "A": "2",
  "K2": "3",
  "K3": "4",
  "K4": "5",
  "K5": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K1: "passive", A: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", ...opts.pinTypes } });
  }
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
 */
export class PRTR5V0U2X extends Component.withPins({
  "GND": "1",
  "I/O1": "2",
  "I/O2": "3",
  "VCC": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "passive", "I/O1": "passive", "I/O2": "passive", VCC: "passive", ...opts.pinTypes } });
  }
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
 */
export class RCLAMP0502B extends Component.withPins({
  "A": "3",
  "K1": "1",
  "K2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K1: "passive", K2: "passive", ...opts.pinTypes } });
  }
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
 */
export class RCLAMP0502BA extends Component.withPins({
  "A": "3",
  "K1": "1",
  "K2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K1: "passive", K2: "passive", ...opts.pinTypes } });
  }
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
 */
export class RCLAMP0582B extends Component.withPins({
  "A": "3",
  "K1": "1",
  "K2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K1: "passive", K2: "passive", ...opts.pinTypes } });
  }
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
 */
export class SN65220 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "P3": "3",
  "B": "4",
  "GND_5": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "no_connect", GND_2: "passive", P3: "no_connect", B: "passive", GND_5: "passive", A: "passive", ...opts.pinTypes } });
  }
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
 */
export class SN75240 extends Component.withPins({
  "GND_5": "5",
  "B": "6",
  "GND_7": "7",
  "A": "8",
  "GND_1": "1",
  "C": "2",
  "GND_3": "3",
  "D": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_5: "passive", B: "passive", GND_7: "passive", A: "passive", GND_1: "power_in", C: "input", GND_3: "power_in", D: "input", ...opts.pinTypes } });
  }
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
 */
export class SN65240 extends Component.withPins({
  "GND_5": "5",
  "B": "6",
  "GND_7": "7",
  "A": "8",
  "GND_1": "1",
  "C": "2",
  "GND_3": "3",
  "D": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_5: "passive", B: "passive", GND_7: "passive", A: "passive", GND_1: "power_in", C: "input", GND_3: "power_in", D: "input", ...opts.pinTypes } });
  }
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
 */
export class SP0502BAJT extends Component.withPins({
  "A": "3",
  "K_1": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_2: "passive", ...opts.pinTypes } });
  }
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
 */
export class SP0503BAHT extends Component.withPins({
  "A": "1",
  "K_2": "2",
  "K_3": "3",
  "K_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_2: "passive", K_3: "passive", K_4: "passive", ...opts.pinTypes } });
  }
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
 */
export class SP0504BAJT extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
  "K_4": "4",
  "K_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", K_4: "passive", K_5: "passive", ...opts.pinTypes } });
  }
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
 */
export class SP0505BAHT extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
  "K_4": "4",
  "K_5": "5",
  "K_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", K_4: "passive", K_5: "passive", K_6: "passive", ...opts.pinTypes } });
  }
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
 */
export class SP0505BAJT extends Component.withPins({
  "A": "2",
  "K_1": "1",
  "K_3": "3",
  "K_4": "4",
  "K_5": "5",
  "K_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_3: "passive", K_4: "passive", K_5: "passive", K_6: "passive", ...opts.pinTypes } });
  }
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
 */
export class SP7538P extends Component.withPins({
  "A": "3",
  "K1": "1",
  "K2": "2",
  "K3": "4",
  "K4": "5",
  "K5": "6",
  "K6": "7",
  "K7": "8",
  "K8": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K1: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", K6: "passive", K7: "passive", K8: "passive", ...opts.pinTypes } });
  }
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
 */
export class SZNUP2105L extends Component.withPins({
  "A": "3",
  "K_1": "1",
  "K_2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_1: "passive", K_2: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA025_050_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA025_100_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA025_200_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA025_300_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA025_500_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA040_050_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA040_100_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA040_200_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA040_300_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA040_500_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA050_050_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA050_100_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA050_200_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA050_300_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA050_500_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA065_050_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA065_100_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA065_200_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA065_300_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA065_500_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA085_050_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA085_100_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA085_200_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA085_300_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TBU_CA085_500_WH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "no_connect", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD1E05U06DPY extends Component.withPins({
  "I/O": "1",
  "GND": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O": "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPD1E05U06DYA extends Component.withPins({
  "I/O": "1",
  "GND": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O": "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPD2E2U06DCK extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD2E2U06DRL extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "passive", NC_2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD2EUSB30 extends Component.withPins({
  "D+": "1",
  "D-": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D+": "passive", "D-": "passive", GND: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD2EUSB30A extends Component.withPins({
  "D+": "1",
  "D-": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D+": "passive", "D-": "passive", GND: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD2S017 extends Component.withPins({
  "CH1Out": "1",
  "GND": "2",
  "CH1In": "3",
  "CH2Int": "4",
  "VCC": "5",
  "CH2Out": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CH1Out: "passive", GND: "power_in", CH1In: "passive", CH2Int: "passive", VCC: "power_in", CH2Out: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD3E001DRLR extends Component.withPins({
  "IO1": "1",
  "IO2": "2",
  "P3": "3",
  "IO3": "4",
  "P5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO1: "passive", IO2: "passive", P3: "passive", IO3: "passive", P5: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD3F303DPV extends Component.withPins({
  "DATA1_OUT": "1",
  "CLK_OUT": "2",
  "DATA2_OUT": "3",
  "NC": "4",
  "V_{CC}": "5",
  "DATA2_IN": "6",
  "CLK_IN": "7",
  "DATA1_IN": "8",
  "GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DATA1_OUT: "passive", CLK_OUT: "passive", DATA2_OUT: "passive", NC: "no_connect", "V_{CC}": "power_in", DATA2_IN: "passive", CLK_IN: "passive", DATA1_IN: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPD3S014 extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "IN": "3",
  "OUT": "4",
  "D1": "5",
  "D2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", IN: "power_in", OUT: "passive", D1: "passive", D2: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD3S044 extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "IN": "3",
  "OUT": "4",
  "D1": "5",
  "D2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", IN: "power_in", OUT: "passive", D1: "passive", D2: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD4E02B04DQA extends Component.withPins({
  "G_3": "3",
  "IO1": "1",
  "IO2": "2",
  "IO3": "4",
  "IO4": "5",
  "NC_6": "6",
  "NC_7": "7",
  "G_8": "8",
  "NC_9": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G_3: "passive", IO1: "passive", IO2: "passive", IO3: "passive", IO4: "passive", NC_6: "free", NC_7: "free", G_8: "passive", NC_9: "free", NC_10: "free", ...opts.pinTypes } });
  }
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
 */
export class TPD4EUSB30 extends Component.withPins({
  "D1+": "1",
  "D1-": "2",
  "GND_3": "3",
  "D2+": "4",
  "D2-": "5",
  "NC_6": "6",
  "NC_7": "7",
  "GND_8": "8",
  "NC_9": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D1+": "passive", "D1-": "passive", GND_3: "power_in", "D2+": "passive", "D2-": "passive", NC_6: "free", NC_7: "free", GND_8: "passive", NC_9: "free", NC_10: "free", ...opts.pinTypes } });
  }
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
 */
export class TPD4E05U06DQA extends Component.withPins({
  "D1+": "1",
  "D1-": "2",
  "GND_3": "3",
  "D2+": "4",
  "D2-": "5",
  "NC_6": "6",
  "NC_7": "7",
  "GND_8": "8",
  "NC_9": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D1+": "passive", "D1-": "passive", GND_3: "power_in", "D2+": "passive", "D2-": "passive", NC_6: "free", NC_7: "free", GND_8: "passive", NC_9: "free", NC_10: "free", ...opts.pinTypes } });
  }
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
 */
export class TPD4S014 extends Component.withPins({
  "VBUSOUT_1": "1",
  "VBUSOUT_2": "2",
  "~{EN}": "3",
  "~{ACK}": "4",
  "ID": "5",
  "D-": "6",
  "D+": "7",
  "GND": "8",
  "VBUS_9": "9",
  "VBUS_10": "10",
  "PAD": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBUSOUT_1: "power_out", VBUSOUT_2: "passive", "~{EN}": "input", "~{ACK}": "open_collector", ID: "passive", "D-": "passive", "D+": "passive", GND: "power_in", VBUS_9: "power_in", VBUS_10: "passive", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPD4S1394 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "VCLMP": "3",
  "FWPWR_EN": "4",
  "D2+": "5",
  "D2-": "6",
  "D1+": "7",
  "D1-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", VCLMP: "passive", FWPWR_EN: "passive", "D2+": "passive", "D2-": "passive", "D1+": "passive", "D1-": "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD6E05U06RVZ extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "GND_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "D3-": "8",
  "D3+": "9",
  "GND_10": "10",
  "D2-": "11",
  "D2+": "12",
  "D1-": "13",
  "D1+": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "free", NC_2: "free", NC_3: "free", NC_4: "free", GND_5: "power_in", NC_6: "free", NC_7: "free", "D3-": "passive", "D3+": "passive", GND_10: "passive", "D2-": "passive", "D2+": "passive", "D1-": "passive", "D1+": "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD6F003 extends Component.withPins({
  "Ch1_In": "1",
  "Ch2_In": "2",
  "Ch3_In": "3",
  "Ch4_In": "4",
  "Ch5_In": "5",
  "Ch6_In": "6",
  "Ch6_Out": "7",
  "Ch5_Out": "8",
  "Ch4_Out": "9",
  "Ch3_Out": "10",
  "Ch2_Out": "11",
  "Ch1_Out": "12",
  "GND": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Ch1_In: "passive", Ch2_In: "passive", Ch3_In: "passive", Ch4_In: "passive", Ch5_In: "passive", Ch6_In: "passive", Ch6_Out: "passive", Ch5_Out: "passive", Ch4_Out: "passive", Ch3_Out: "passive", Ch2_Out: "passive", Ch1_Out: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPD6S300A extends Component.withPins({
  "C_SBU1": "1",
  "C_SBU2": "2",
  "VBIAS": "3",
  "C_CC1": "4",
  "C_CC2": "5",
  "RPD_G2": "6",
  "RPD_G1": "7",
  "GND_8": "8",
  "~{FLT}": "9",
  "VPWR": "10",
  "CC2": "11",
  "CC1": "12",
  "GND_13": "13",
  "SBU2": "14",
  "SBU1": "15",
  "GND_16": "16",
  "GND_17": "17",
  "GND_18": "18",
  "D2": "19",
  "D1": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C_SBU1: "bidirectional", C_SBU2: "bidirectional", VBIAS: "passive", C_CC1: "bidirectional", C_CC2: "bidirectional", RPD_G2: "bidirectional", RPD_G1: "bidirectional", GND_8: "power_in", "~{FLT}": "open_collector", VPWR: "power_in", CC2: "bidirectional", CC1: "bidirectional", GND_13: "passive", SBU2: "bidirectional", SBU1: "bidirectional", GND_16: "passive", GND_17: "passive", GND_18: "passive", D2: "passive", D1: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class TPD8F003 extends Component.withPins({
  "Ch1_In": "1",
  "Ch2_In": "2",
  "Ch3_In": "3",
  "Ch4_In": "4",
  "Ch5_In": "5",
  "Ch6_In": "6",
  "Ch7_In": "7",
  "Ch8_In": "8",
  "Ch8_Out": "9",
  "Ch7_Out": "10",
  "Ch6_Out": "11",
  "Ch5_Out": "12",
  "Ch4_Out": "13",
  "Ch3_Out": "14",
  "Ch2_Out": "15",
  "Ch1_Out": "16",
  "GND": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Ch1_In: "passive", Ch2_In: "passive", Ch3_In: "passive", Ch4_In: "passive", Ch5_In: "passive", Ch6_In: "passive", Ch7_In: "passive", Ch8_In: "passive", Ch8_Out: "passive", Ch7_Out: "passive", Ch6_Out: "passive", Ch5_Out: "passive", Ch4_Out: "passive", Ch3_Out: "passive", Ch2_Out: "passive", Ch1_Out: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TVS0500DRV extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "IN_4": "4",
  "IN_5": "5",
  "IN_6": "6",
  "GND_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", IN_4: "passive", IN_5: "passive", IN_6: "passive", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class TVS1400DRV extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "IN_4": "4",
  "IN_5": "5",
  "IN_6": "6",
  "GND_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", IN_4: "passive", IN_5: "passive", IN_6: "passive", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class TVS1800DRV extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "IN_4": "4",
  "IN_5": "5",
  "IN_6": "6",
  "GND_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", IN_4: "passive", IN_5: "passive", IN_6: "passive", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class TVS2200DRV extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "IN_4": "4",
  "IN_5": "5",
  "IN_6": "6",
  "GND_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", IN_4: "passive", IN_5: "passive", IN_6: "passive", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class TVS2700DRV extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "IN_4": "4",
  "IN_5": "5",
  "IN_6": "6",
  "GND_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", IN_4: "passive", IN_5: "passive", IN_6: "passive", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class TVS3300DRV extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "IN_4": "4",
  "IN_5": "5",
  "IN_6": "6",
  "GND_7": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", IN_4: "passive", IN_5: "passive", IN_6: "passive", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class USB6B1 extends Component.withPins({
  "VBUS_1": "1",
  "I/O1_2": "2",
  "I/O2_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "I/O2_6": "6",
  "I/O1_7": "7",
  "VBUS_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBUS_1: "passive", "I/O1_2": "passive", "I/O2_3": "passive", GND_4: "passive", GND_5: "passive", "I/O2_6": "passive", "I/O1_7": "passive", VBUS_8: "passive", ...opts.pinTypes } });
  }
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
 */
export class USBLC6_2P6 extends Component.withPins({
  "I/O1_1": "1",
  "GND": "2",
  "I/O2_3": "3",
  "I/O2_4": "4",
  "VBUS": "5",
  "I/O1_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O1_1": "passive", GND: "passive", "I/O2_3": "passive", "I/O2_4": "passive", VBUS: "passive", "I/O1_6": "passive", ...opts.pinTypes } });
  }
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
 */
export class USBLC6_2SC6 extends Component.withPins({
  "I/O1_1": "1",
  "GND": "2",
  "I/O2_3": "3",
  "I/O2_4": "4",
  "VBUS": "5",
  "I/O1_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O1_1": "passive", GND: "passive", "I/O2_3": "passive", "I/O2_4": "passive", VBUS: "passive", "I/O1_6": "passive", ...opts.pinTypes } });
  }
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
 */
export class USBLC6_4SC6 extends Component.withPins({
  "I/O1": "1",
  "GND": "2",
  "I/O2": "3",
  "I/O3": "4",
  "VBUS": "5",
  "I/O4": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O1": "passive", GND: "passive", "I/O2": "passive", "I/O3": "passive", VBUS: "passive", "I/O4": "passive", ...opts.pinTypes } });
  }
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
 */
export class WE_TVS_82400102 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
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
 */
export class WE_TVS_824014881 extends Component.withPins({
  "A": "3",
  "K1": "1",
  "K2": "2",
  "K3": "4",
  "K4": "5",
  "K5": "6",
  "K6": "7",
  "K7": "8",
  "K8": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K1: "passive", K2: "passive", K3: "passive", K4: "passive", K5: "passive", K6: "passive", K7: "passive", K8: "passive", ...opts.pinTypes } });
  }
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
 */
export class WE_TVS_824015043 extends Component.withPins({
  "I/O1": "1",
  "GND": "2",
  "I/O2": "3",
  "I/O3": "4",
  "VBUS": "5",
  "I/O4": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O1": "passive", GND: "passive", "I/O2": "passive", "I/O3": "passive", VBUS: "passive", "I/O4": "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN056V130A24LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN056V075A48LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN056V115A24LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN056V230A16LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN059V130A24LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN065V130A24LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN065V230A16LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN098V130A24LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN098V230A16LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN132V075A48LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN132V130A24LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN132V230A16LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZEN164V130A24LS extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "VOUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "passive", GND: "power_in", VOUT: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Protection:ZEN164V130A24LS";
  override referencePrefix = "D";
}
