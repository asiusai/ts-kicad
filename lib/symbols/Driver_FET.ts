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
 */
export class _1EDN7550B extends Component.withPins({
  "IN-": "1",
  "GND": "2",
  "IN+": "3",
  "VDD": "4",
  "OUT_SRC": "5",
  "OUT_SNK": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "IN-": "input", GND: "power_in", "IN+": "input", VDD: "power_in", OUT_SRC: "output", OUT_SNK: "output", ...opts.pinTypes } });
  }
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
 */
export class _1EDN8550B extends Component.withPins({
  "IN-": "1",
  "GND": "2",
  "IN+": "3",
  "VDD": "4",
  "OUT_SRC": "5",
  "OUT_SNK": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "IN-": "input", GND: "power_in", "IN+": "input", VDD: "power_in", OUT_SRC: "output", OUT_SNK: "output", ...opts.pinTypes } });
  }
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
 */
export class _2ED1324S12P extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "HIN": "4",
  "LIN": "5",
  "~{RFE}": "6",
  "VSS": "7",
  "ITRIP": "8",
  "COM": "9",
  "LC": "10",
  "LO": "11",
  "VCC": "12",
  "NC_13": "13",
  "VB": "14",
  "HO": "15",
  "HC": "16",
  "VS": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", HIN: "input", LIN: "input", "~{RFE}": "open_collector", VSS: "power_in", ITRIP: "passive", COM: "power_in", LC: "passive", LO: "output", VCC: "power_in", NC_13: "no_connect", VB: "passive", HO: "output", HC: "passive", VS: "passive", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class _2ED1323S12P extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "HIN": "4",
  "LIN": "5",
  "~{RFE}": "6",
  "VSS": "7",
  "ITRIP": "8",
  "COM": "9",
  "LC": "10",
  "LO": "11",
  "VCC": "12",
  "NC_13": "13",
  "VB": "14",
  "HO": "15",
  "HC": "16",
  "VS": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", HIN: "input", LIN: "input", "~{RFE}": "open_collector", VSS: "power_in", ITRIP: "passive", COM: "power_in", LC: "passive", LO: "output", VCC: "power_in", NC_13: "no_connect", VB: "passive", HO: "output", HC: "passive", VS: "passive", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class _2ED21824S06J extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "VSS": "3",
  "DT": "4",
  "COM": "5",
  "LO": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", VSS: "power_in", DT: "passive", COM: "power_in", LO: "output", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class _2EDL23N06PJXUMA1 extends Component.withPins({
  "VDD": "1",
  "HIN": "2",
  "LIN": "3",
  "EN/FLT": "4",
  "GND": "5",
  "PGND": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VS": "10",
  "HO": "11",
  "VB": "12",
  "NC_13": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HIN: "input", LIN: "input", "EN/FLT": "open_collector", GND: "power_in", PGND: "power_in", LO: "output", NC_8: "no_connect", NC_9: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_13: "no_connect", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ACPL_336J extends Component.withPins({
  "VEE1": "1",
  "VIN+": "2",
  "VCC1": "3",
  "VLEDDRV": "4",
  "~{UVLO}": "5",
  "~{FAULT}": "6",
  "ANODE": "7",
  "CATHODE": "8",
  "VEE2_9": "9",
  "VCLAMP": "10",
  "VOUT": "11",
  "VCC2": "12",
  "VE": "13",
  "DESAT": "14",
  "VLED": "15",
  "VEE2_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VEE1: "power_in", "VIN+": "input", VCC1: "power_in", VLEDDRV: "output", "~{UVLO}": "open_collector", "~{FAULT}": "open_collector", ANODE: "passive", CATHODE: "passive", VEE2_9: "passive", VCLAMP: "bidirectional", VOUT: "output", VCC2: "power_in", VE: "power_in", DESAT: "bidirectional", VLED: "output", VEE2_16: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ACPL_P343 extends Component.withPins({
  "A": "1",
  "NC": "2",
  "C": "3",
  "VEE": "4",
  "VO": "5",
  "VCC": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC: "no_connect", C: "passive", VEE: "power_in", VO: "output", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ACPL_W343 extends Component.withPins({
  "A": "1",
  "NC": "2",
  "C": "3",
  "VEE": "4",
  "VO": "5",
  "VCC": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC: "no_connect", C: "passive", VEE: "power_in", VO: "output", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AN34092B extends Component.withPins({
  "OUT1": "1",
  "OUT2": "2",
  "OUT3": "3",
  "VEE": "4",
  "GND_5": "5",
  "VCC": "6",
  "INP": "7",
  "INN": "8",
  "TEST": "9",
  "VREG": "10",
  "IGCNT": "11",
  "VRCNT": "12",
  "VR": "13",
  "~{FAULT}": "14",
  "CP": "15",
  "CN": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT1: "output", OUT2: "output", OUT3: "output", VEE: "power_in", GND_5: "power_in", VCC: "power_in", INP: "input", INN: "input", TEST: "passive", VREG: "passive", IGCNT: "passive", VRCNT: "passive", VR: "passive", "~{FAULT}": "open_collector", CP: "passive", CN: "passive", GND_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class BDR2L00_DFN extends Component.withPins({
  "GND_9": "9",
  "BOOT": "1",
  "PWM": "2",
  "EN": "3",
  "VCC": "4",
  "LGATE": "5",
  "GND_6": "6",
  "PHASE": "7",
  "UGATE": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_9: "passive", BOOT: "passive", PWM: "input", EN: "input", VCC: "power_in", LGATE: "output", GND_6: "power_in", PHASE: "passive", UGATE: "output", ...opts.pinTypes } });
  }
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
 */
export class ICL7667xPA extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "V-": "3",
  "IN_B": "4",
  "~{OUT_B}": "5",
  "V+": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", "V-": "power_in", IN_B: "input", "~{OUT_B}": "output", "V+": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class DS0026 extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "V-": "3",
  "IN_B": "4",
  "~{OUT_B}": "5",
  "V+": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", "V-": "power_in", IN_B: "input", "~{OUT_B}": "output", "V+": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class EL7202CN extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "OUT_B": "5",
  "V+": "6",
  "OUT_A": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", OUT_B: "output", "V+": "power_in", OUT_A: "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class EL7202CS extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "OUT_B": "5",
  "V+": "6",
  "OUT_A": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", OUT_B: "output", "V+": "power_in", OUT_A: "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class EL7212CN extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "~{OUT_B}": "5",
  "V+": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", "~{OUT_B}": "output", "V+": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class EL7212CS extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "~{OUT_B}": "5",
  "V+": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", "~{OUT_B}": "output", "V+": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class EL7222CN extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "OUT_B": "5",
  "V+": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", OUT_B: "output", "V+": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class EL7222CS extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "OUT_B": "5",
  "V+": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", OUT_B: "output", "V+": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class FAN3111C extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "IN+": "3",
  "~{IN-}": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", "IN+": "input", "~{IN-}": "input", OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class FAN3111E extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "IN+": "3",
  "XREF": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", "IN+": "input", XREF: "input", OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class FAN3121xMX extends Component.withPins({
  "V_{DD}_1": "1",
  "IN": "2",
  "EN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "~{OUT}_6": "6",
  "~{OUT}_7": "7",
  "V_{DD}_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}_1": "power_in", IN: "input", EN: "input", GND_4: "power_in", GND_5: "passive", "~{OUT}_6": "output", "~{OUT}_7": "passive", "V_{DD}_8": "passive", ...opts.pinTypes } });
  }
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
 */
export class FAN3122xMX extends Component.withPins({
  "V_{DD}_1": "1",
  "IN": "2",
  "EN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "V_{DD}_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}_1": "power_in", IN: "input", EN: "input", GND_4: "power_in", GND_5: "passive", OUT_6: "output", OUT_7: "passive", "V_{DD}_8": "passive", ...opts.pinTypes } });
  }
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
 */
export class FAN3268 extends Component.withPins({
  "ENA": "1",
  "INA": "2",
  "GND": "3",
  "INB": "4",
  "~{OUTB}": "5",
  "VDD": "6",
  "OUTA": "7",
  "ENB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ENA: "input", INA: "input", GND: "power_in", INB: "input", "~{OUTB}": "output", VDD: "power_in", OUTA: "output", ENB: "input", ...opts.pinTypes } });
  }
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
 */
export class FAN3278 extends Component.withPins({
  "ENA": "1",
  "INA": "2",
  "GND": "3",
  "INB": "4",
  "~{OUTB}": "5",
  "VDD": "6",
  "OUTA": "7",
  "ENB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ENA: "input", INA: "input", GND: "power_in", INB: "input", "~{OUTB}": "output", VDD: "power_in", OUTA: "output", ENB: "input", ...opts.pinTypes } });
  }
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
 */
export class FAN7371 extends Component.withPins({
  "VDD": "1",
  "IN": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", IN: "input", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class FAN7888 extends Component.withPins({
  "HIN1": "1",
  "LIN1": "2",
  "HIN2": "3",
  "LIN2": "4",
  "HIN3": "5",
  "LIN3": "6",
  "LO3": "7",
  "VS3": "8",
  "HO3": "9",
  "VB3": "10",
  "GND": "11",
  "VDD": "12",
  "LO2": "13",
  "VS2": "14",
  "HO2": "15",
  "VB2": "16",
  "LO1": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN1: "input", LIN1: "input", HIN2: "input", LIN2: "input", HIN3: "input", LIN3: "input", LO3: "output", VS3: "passive", HO3: "output", VB3: "passive", GND: "power_in", VDD: "power_in", LO2: "output", VS2: "passive", HO2: "output", VB2: "passive", LO1: "output", VS1: "passive", HO1: "output", VB1: "passive", ...opts.pinTypes } });
  }
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
 */
export class FAN7388 extends Component.withPins({
  "HIN1": "1",
  "LIN1": "2",
  "HIN2": "3",
  "LIN2": "4",
  "HIN3": "5",
  "LIN3": "6",
  "LO3": "7",
  "VS3": "8",
  "HO3": "9",
  "VB3": "10",
  "GND": "11",
  "VDD": "12",
  "LO2": "13",
  "VS2": "14",
  "HO2": "15",
  "VB2": "16",
  "LO1": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN1: "input", LIN1: "input", HIN2: "input", LIN2: "input", HIN3: "input", LIN3: "input", LO3: "output", VS3: "passive", HO3: "output", VB3: "passive", GND: "power_in", VDD: "power_in", LO2: "output", VS2: "passive", HO2: "output", VB2: "passive", LO1: "output", VS1: "passive", HO1: "output", VB1: "passive", ...opts.pinTypes } });
  }
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
 */
export class FAN7842 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class FL5150MX extends Component.withPins({
  "ZC_Monitor": "1",
  "DIM_Control": "2",
  "VDD": "3",
  "DIM_Mode": "4",
  "GND": "5",
  "VS": "6",
  "Low_Power": "7",
  "OC_Sense2": "8",
  "DRV_Gate": "9",
  "OC_Sense1": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ZC_Monitor: "input", DIM_Control: "input", VDD: "power_out", DIM_Mode: "input", GND: "power_out", VS: "power_in", Low_Power: "input", OC_Sense2: "input", DRV_Gate: "output", OC_Sense1: "input", ...opts.pinTypes } });
  }
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
 */
export class FL5160MX extends Component.withPins({
  "ZC_Monitor": "1",
  "DIM_Control": "2",
  "VDD": "3",
  "DIM_Mode": "4",
  "GND": "5",
  "VS": "6",
  "Low_Power": "7",
  "OC_Sense2": "8",
  "DRV_Gate": "9",
  "OC_Sense1": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ZC_Monitor: "input", DIM_Control: "input", VDD: "power_out", DIM_Mode: "input", GND: "power_out", VS: "power_in", Low_Power: "input", OC_Sense2: "input", DRV_Gate: "output", OC_Sense1: "input", ...opts.pinTypes } });
  }
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
 */
export class HCPL_3120 extends Component.withPins({
  "NC_1": "1",
  "A": "2",
  "C": "3",
  "NC_4": "4",
  "VEE": "5",
  "VO_6": "6",
  "VO_7": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", A: "passive", C: "passive", NC_4: "no_connect", VEE: "power_out", VO_6: "output", VO_7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class HCPL_314J extends Component.withPins({
  "NC_1": "1",
  "A_2": "2",
  "C_3": "3",
  "VEE_14": "14",
  "VO_15": "15",
  "VCC_16": "16",
  "A_6": "6",
  "C_7": "7",
  "NC_8": "8",
  "VEE_9": "9",
  "VO_10": "10",
  "VCC_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", A_2: "passive", C_3: "passive", VEE_14: "power_in", VO_15: "output", VCC_16: "power_in", A_6: "passive", C_7: "passive", NC_8: "no_connect", VEE_9: "power_in", VO_10: "output", VCC_11: "power_in", ...opts.pinTypes } });
  }
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
 */
export class HIP2100_DFN extends Component.withPins({
  "VDD": "1",
  "NC_2": "2",
  "NC_3": "3",
  "HB": "4",
  "HO": "5",
  "HS": "6",
  "HI": "7",
  "LI": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VSS": "11",
  "LO": "12",
  "EP": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", NC_2: "no_connect", NC_3: "no_connect", HB: "passive", HO: "output", HS: "passive", HI: "input", LI: "input", NC_9: "no_connect", NC_10: "no_connect", VSS: "power_in", LO: "output", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP2100_EPSOIC extends Component.withPins({
  "VDD": "1",
  "HB": "2",
  "HO": "3",
  "HS": "4",
  "HI": "5",
  "LI": "6",
  "VSS": "7",
  "LO": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HB: "passive", HO: "output", HS: "passive", HI: "input", LI: "input", VSS: "power_in", LO: "output", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP2100_QFN extends Component.withPins({
  "NC_1": "1",
  "HB": "2",
  "HO": "3",
  "NC_4": "4",
  "NC_5": "5",
  "HS": "6",
  "HI": "7",
  "NC_8": "8",
  "NC_9": "9",
  "LI": "10",
  "VSS": "11",
  "NC_12": "12",
  "NC_13": "13",
  "LO": "14",
  "NC_15": "15",
  "VDD": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", HB: "passive", HO: "output", NC_4: "no_connect", NC_5: "no_connect", HS: "passive", HI: "input", NC_8: "no_connect", NC_9: "no_connect", LI: "input", VSS: "power_in", NC_12: "no_connect", NC_13: "no_connect", LO: "output", NC_15: "no_connect", VDD: "power_in", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP2100_SOIC extends Component.withPins({
  "VDD": "1",
  "HB": "2",
  "HO": "3",
  "HS": "4",
  "HI": "5",
  "LI": "6",
  "VSS": "7",
  "LO": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HB: "passive", HO: "output", HS: "passive", HI: "input", LI: "input", VSS: "power_in", LO: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP2101_DFN extends Component.withPins({
  "VDD": "1",
  "NC_2": "2",
  "NC_3": "3",
  "HB": "4",
  "HO": "5",
  "HS": "6",
  "HI": "7",
  "LI": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VSS": "11",
  "LO": "12",
  "EP": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", NC_2: "no_connect", NC_3: "no_connect", HB: "passive", HO: "output", HS: "passive", HI: "input", LI: "input", NC_9: "no_connect", NC_10: "no_connect", VSS: "power_in", LO: "output", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP2101_EPSOIC extends Component.withPins({
  "VDD": "1",
  "HB": "2",
  "HO": "3",
  "HS": "4",
  "HI": "5",
  "LI": "6",
  "VSS": "7",
  "LO": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HB: "passive", HO: "output", HS: "passive", HI: "input", LI: "input", VSS: "power_in", LO: "output", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP2101_QFN extends Component.withPins({
  "NC_1": "1",
  "HB": "2",
  "HO": "3",
  "NC_4": "4",
  "NC_5": "5",
  "HS": "6",
  "HI": "7",
  "NC_8": "8",
  "NC_9": "9",
  "LI": "10",
  "VSS": "11",
  "NC_12": "12",
  "NC_13": "13",
  "LO": "14",
  "NC_15": "15",
  "VDD": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", HB: "passive", HO: "output", NC_4: "no_connect", NC_5: "no_connect", HS: "passive", HI: "input", NC_8: "no_connect", NC_9: "no_connect", LI: "input", VSS: "power_in", NC_12: "no_connect", NC_13: "no_connect", LO: "output", NC_15: "no_connect", VDD: "power_in", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP2101_SOIC extends Component.withPins({
  "VDD": "1",
  "HB": "2",
  "HO": "3",
  "HS": "4",
  "HI": "5",
  "LI": "6",
  "VSS": "7",
  "LO": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HB: "passive", HO: "output", HS: "passive", HI: "input", LI: "input", VSS: "power_in", LO: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP4080A extends Component.withPins({
  "BHB": "1",
  "HEN": "2",
  "DIS": "3",
  "VSS": "4",
  "OUT": "5",
  "IN+": "6",
  "IN-": "7",
  "HDEL": "8",
  "LDEL": "9",
  "AHB": "10",
  "AHO": "11",
  "AHS": "12",
  "ALO": "13",
  "ALS": "14",
  "VCC": "15",
  "VDD": "16",
  "BLS": "17",
  "BLO": "18",
  "BHS": "19",
  "BHO": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BHB: "input", HEN: "output", DIS: "output", VSS: "power_in", OUT: "output", "IN+": "input", "IN-": "input", HDEL: "passive", LDEL: "passive", AHB: "input", AHO: "output", AHS: "passive", ALO: "output", ALS: "passive", VCC: "power_in", VDD: "power_in", BLS: "passive", BLO: "output", BHS: "passive", BHO: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP4081A extends Component.withPins({
  "BHB": "1",
  "BHI": "2",
  "DIS": "3",
  "VSS": "4",
  "BLI": "5",
  "ALI": "6",
  "AHI": "7",
  "HDEL": "8",
  "LDEL": "9",
  "AHB": "10",
  "AHO": "11",
  "AHS": "12",
  "ALO": "13",
  "ALS": "14",
  "VCC": "15",
  "VDD": "16",
  "BLS": "17",
  "BLO": "18",
  "BHS": "19",
  "BHO": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BHB: "input", BHI: "input", DIS: "output", VSS: "power_in", BLI: "input", ALI: "input", AHI: "input", HDEL: "passive", LDEL: "passive", AHB: "input", AHO: "output", AHS: "passive", ALO: "output", ALS: "passive", VCC: "power_in", VDD: "power_in", BLS: "passive", BLO: "output", BHS: "passive", BHO: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP4082xB extends Component.withPins({
  "DEL": "5",
  "BHB": "1",
  "BHI": "2",
  "BLI": "3",
  "ALI": "4",
  "VSS": "6",
  "AHI": "7",
  "DIS": "8",
  "AHB": "9",
  "AHO": "10",
  "AHS": "11",
  "VDD": "12",
  "ALO": "13",
  "BLO": "14",
  "BHS": "15",
  "BHO": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEL: "passive", BHB: "input", BHI: "input", BLI: "input", ALI: "input", VSS: "power_in", AHI: "input", DIS: "input", AHB: "input", AHO: "output", AHS: "passive", VDD: "power_in", ALO: "output", BLO: "output", BHS: "passive", BHO: "output", ...opts.pinTypes } });
  }
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
 */
export class HIP4082xP extends Component.withPins({
  "DEL": "5",
  "BHB": "1",
  "BHI": "2",
  "BLI": "3",
  "ALI": "4",
  "VSS": "6",
  "AHI": "7",
  "DIS": "8",
  "AHB": "9",
  "AHO": "10",
  "AHS": "11",
  "VDD": "12",
  "ALO": "13",
  "BLO": "14",
  "BHS": "15",
  "BHO": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEL: "passive", BHB: "input", BHI: "input", BLI: "input", ALI: "input", VSS: "power_in", AHI: "input", DIS: "input", AHB: "input", AHO: "output", AHS: "passive", VDD: "power_in", ALO: "output", BLO: "output", BHS: "passive", BHO: "output", ...opts.pinTypes } });
  }
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
 */
export class ICL7667xBA extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "V-": "3",
  "IN_B": "4",
  "~{OUT_B}": "5",
  "V+": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", "V-": "power_in", IN_B: "input", "~{OUT_B}": "output", "V+": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2010 extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "VS": "5",
  "VB": "6",
  "HO": "7",
  "NC_8": "8",
  "VDD": "9",
  "HIN": "10",
  "SD": "11",
  "LIN": "12",
  "VSS": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_8: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2010S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2011 extends Component.withPins({
  "VCC": "1",
  "VB": "2",
  "HO": "3",
  "VS": "4",
  "HIN": "5",
  "LIN": "6",
  "COM": "7",
  "LO": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", VB: "passive", HO: "output", VS: "passive", HIN: "input", LIN: "input", COM: "power_in", LO: "output", ...opts.pinTypes } });
  }
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
 */
export class IR2085S extends Component.withPins({
  "CS": "1",
  "OSC": "2",
  "GND": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CS: "input", OSC: "passive", GND: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2101 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2102 extends Component.withPins({
  "VCC": "1",
  "~{HIN}": "2",
  "~{LIN}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "~{HIN}": "input", "~{LIN}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2103 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "~{LIN}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", "~{LIN}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2104 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2106 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR21064 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "NC_4": "4",
  "VSS": "5",
  "COM": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", NC_4: "no_connect", VSS: "power_in", COM: "power_in", LO: "output", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2108 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "~{LIN}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", "~{LIN}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR21084 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "~{LIN}": "3",
  "DT": "4",
  "VSS": "5",
  "COM": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", "~{LIN}": "input", DT: "input", VSS: "power_in", COM: "power_in", LO: "output", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2109 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR21091 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "DT/SD": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "DT/SD": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR21094 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "DT": "4",
  "VSS": "5",
  "COM": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", DT: "input", VSS: "power_in", COM: "power_in", LO: "output", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2110 extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "VS": "5",
  "VB": "6",
  "HO": "7",
  "NC_8": "8",
  "VDD": "9",
  "HIN": "10",
  "SD": "11",
  "LIN": "12",
  "VSS": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_8: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2110S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2111 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "COM": "3",
  "LO": "4",
  "NC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", COM: "power_in", LO: "output", NC: "no_connect", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2112 extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "VS": "5",
  "VB": "6",
  "HO": "7",
  "NC_8": "8",
  "VDD": "9",
  "HIN": "10",
  "SD": "11",
  "LIN": "12",
  "VSS": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_8: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2112S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2113 extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "VS": "5",
  "VB": "6",
  "HO": "7",
  "NC_8": "8",
  "VDD": "9",
  "HIN": "10",
  "SD": "11",
  "LIN": "12",
  "VSS": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_8: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2113S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2114S extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "FLT_CLR": "3",
  "~{SY_FLT}": "4",
  "~{FAULT/SD}": "5",
  "VSS": "6",
  "SSDL": "7",
  "COM": "8",
  "LON": "9",
  "LOP": "10",
  "VCC": "11",
  "DSL": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "NC_16": "16",
  "NC_17": "17",
  "SSDH": "18",
  "VS": "19",
  "HON": "20",
  "HOP": "21",
  "NC_22": "22",
  "VB": "23",
  "DSH": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", FLT_CLR: "input", "~{SY_FLT}": "bidirectional", "~{FAULT/SD}": "bidirectional", VSS: "power_in", SSDL: "input", COM: "power_in", LON: "output", LOP: "output", VCC: "power_in", DSL: "input", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", NC_16: "no_connect", NC_17: "no_connect", SSDH: "input", VS: "passive", HON: "output", HOP: "output", NC_22: "no_connect", VB: "passive", DSH: "input", ...opts.pinTypes } });
  }
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
 */
export class IR2133 extends Component.withPins({
  "ITRIP": "1",
  "~{FLT-CLR}": "2",
  "CAO": "3",
  "CA-": "4",
  "CA+": "5",
  "SD": "6",
  "VSS": "7",
  "COM": "8",
  "LO3": "9",
  "LO2": "10",
  "LO1": "11",
  "VS3": "12",
  "HO3": "13",
  "VB3": "14",
  "VS2": "15",
  "HO2": "16",
  "VB2": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
  "VCC": "21",
  "~{HIN1}": "22",
  "~{HIN2}": "23",
  "~{HIN3}": "24",
  "~{LIN1}": "25",
  "~{LIN2}": "26",
  "~{LIN3}": "27",
  "~{FAULT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ITRIP: "input", "~{FLT-CLR}": "input", CAO: "output", "CA-": "input", "CA+": "input", SD: "input", VSS: "power_in", COM: "passive", LO3: "output", LO2: "output", LO1: "output", VS3: "passive", HO3: "output", VB3: "passive", VS2: "passive", HO2: "output", VB2: "passive", VS1: "passive", HO1: "output", VB1: "passive", VCC: "power_in", "~{HIN1}": "input", "~{HIN2}": "input", "~{HIN3}": "input", "~{LIN1}": "input", "~{LIN2}": "input", "~{LIN3}": "input", "~{FAULT}": "output", ...opts.pinTypes } });
  }
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
 */
export class IR2133S extends Component.withPins({
  "ITRIP": "1",
  "~{FLT-CLR}": "2",
  "CAO": "3",
  "CA-": "4",
  "CA+": "5",
  "SD": "6",
  "VSS": "7",
  "COM": "8",
  "LO3": "9",
  "LO2": "10",
  "LO1": "11",
  "VS3": "12",
  "HO3": "13",
  "VB3": "14",
  "VS2": "15",
  "HO2": "16",
  "VB2": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
  "VCC": "21",
  "~{HIN1}": "22",
  "~{HIN2}": "23",
  "~{HIN3}": "24",
  "~{LIN1}": "25",
  "~{LIN2}": "26",
  "~{LIN3}": "27",
  "~{FAULT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ITRIP: "input", "~{FLT-CLR}": "input", CAO: "output", "CA-": "input", "CA+": "input", SD: "input", VSS: "power_in", COM: "passive", LO3: "output", LO2: "output", LO1: "output", VS3: "passive", HO3: "output", VB3: "passive", VS2: "passive", HO2: "output", VB2: "passive", VS1: "passive", HO1: "output", VB1: "passive", VCC: "power_in", "~{HIN1}": "input", "~{HIN2}": "input", "~{HIN3}": "input", "~{LIN1}": "input", "~{LIN2}": "input", "~{LIN3}": "input", "~{FAULT}": "output", ...opts.pinTypes } });
  }
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
 */
export class IR2135 extends Component.withPins({
  "ITRIP": "1",
  "~{FLT-CLR}": "2",
  "CAO": "3",
  "CA-": "4",
  "CA+": "5",
  "SD": "6",
  "VSS": "7",
  "COM": "8",
  "LO3": "9",
  "LO2": "10",
  "LO1": "11",
  "VS3": "12",
  "HO3": "13",
  "VB3": "14",
  "VS2": "15",
  "HO2": "16",
  "VB2": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
  "VCC": "21",
  "~{HIN1}": "22",
  "~{HIN2}": "23",
  "~{HIN3}": "24",
  "~{LIN1}": "25",
  "~{LIN2}": "26",
  "~{LIN3}": "27",
  "~{FAULT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ITRIP: "input", "~{FLT-CLR}": "input", CAO: "output", "CA-": "input", "CA+": "input", SD: "input", VSS: "power_in", COM: "passive", LO3: "output", LO2: "output", LO1: "output", VS3: "passive", HO3: "output", VB3: "passive", VS2: "passive", HO2: "output", VB2: "passive", VS1: "passive", HO1: "output", VB1: "passive", VCC: "power_in", "~{HIN1}": "input", "~{HIN2}": "input", "~{HIN3}": "input", "~{LIN1}": "input", "~{LIN2}": "input", "~{LIN3}": "input", "~{FAULT}": "output", ...opts.pinTypes } });
  }
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
 */
export class IR2135S extends Component.withPins({
  "ITRIP": "1",
  "~{FLT-CLR}": "2",
  "CAO": "3",
  "CA-": "4",
  "CA+": "5",
  "SD": "6",
  "VSS": "7",
  "COM": "8",
  "LO3": "9",
  "LO2": "10",
  "LO1": "11",
  "VS3": "12",
  "HO3": "13",
  "VB3": "14",
  "VS2": "15",
  "HO2": "16",
  "VB2": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
  "VCC": "21",
  "~{HIN1}": "22",
  "~{HIN2}": "23",
  "~{HIN3}": "24",
  "~{LIN1}": "25",
  "~{LIN2}": "26",
  "~{LIN3}": "27",
  "~{FAULT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ITRIP: "input", "~{FLT-CLR}": "input", CAO: "output", "CA-": "input", "CA+": "input", SD: "input", VSS: "power_in", COM: "passive", LO3: "output", LO2: "output", LO1: "output", VS3: "passive", HO3: "output", VB3: "passive", VS2: "passive", HO2: "output", VB2: "passive", VS1: "passive", HO1: "output", VB1: "passive", VCC: "power_in", "~{HIN1}": "input", "~{HIN2}": "input", "~{HIN3}": "input", "~{LIN1}": "input", "~{LIN2}": "input", "~{LIN3}": "input", "~{FAULT}": "output", ...opts.pinTypes } });
  }
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
 */
export class IR2153 extends Component.withPins({
  "VCC": "1",
  "RT": "2",
  "CT": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RT: "passive", CT: "passive", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR21531 extends Component.withPins({
  "VCC": "1",
  "RT": "2",
  "CT": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RT: "passive", CT: "passive", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2155 extends Component.withPins({
  "VCC": "1",
  "RT": "2",
  "CT": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RT: "passive", CT: "passive", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2181 extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "COM": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR21814 extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "VSS": "3",
  "NC_4": "4",
  "COM": "5",
  "LO": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", VSS: "power_in", NC_4: "no_connect", COM: "power_in", LO: "output", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2183 extends Component.withPins({
  "HIN": "1",
  "~{LIN}": "2",
  "COM": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", "~{LIN}": "input", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR21834 extends Component.withPins({
  "HIN": "1",
  "~{LIN}": "2",
  "VSS": "3",
  "DT": "4",
  "COM": "5",
  "LO": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", "~{LIN}": "input", VSS: "power_in", DT: "input", COM: "power_in", LO: "output", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2184 extends Component.withPins({
  "IN": "1",
  "~{SD}": "2",
  "COM": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR21844 extends Component.withPins({
  "IN": "1",
  "~{SD}": "2",
  "VSS": "3",
  "DT": "4",
  "COM": "5",
  "LO": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", "~{SD}": "input", VSS: "power_in", DT: "input", COM: "power_in", LO: "output", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2213 extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "VS": "5",
  "VB": "6",
  "HO": "7",
  "NC_8": "8",
  "VDD": "9",
  "HIN": "10",
  "SD": "11",
  "LIN": "12",
  "VSS": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_8: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2213S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR2214S extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "FLT_CLR": "3",
  "~{SY_FLT}": "4",
  "~{FAULT/SD}": "5",
  "VSS": "6",
  "SSDL": "7",
  "COM": "8",
  "LON": "9",
  "LOP": "10",
  "VCC": "11",
  "DSL": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "NC_16": "16",
  "NC_17": "17",
  "SSDH": "18",
  "VS": "19",
  "HON": "20",
  "HOP": "21",
  "NC_22": "22",
  "VB": "23",
  "DSH": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", FLT_CLR: "input", "~{SY_FLT}": "bidirectional", "~{FAULT/SD}": "bidirectional", VSS: "power_in", SSDL: "input", COM: "power_in", LON: "output", LOP: "output", VCC: "power_in", DSL: "input", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", NC_16: "no_connect", NC_17: "no_connect", SSDH: "input", VS: "passive", HON: "output", HOP: "output", NC_22: "no_connect", VB: "passive", DSH: "input", ...opts.pinTypes } });
  }
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
 */
export class IR2233 extends Component.withPins({
  "ITRIP": "1",
  "~{FLT-CLR}": "2",
  "CAO": "3",
  "CA-": "4",
  "CA+": "5",
  "SD": "6",
  "VSS": "7",
  "COM": "8",
  "LO3": "9",
  "LO2": "10",
  "LO1": "11",
  "VS3": "12",
  "HO3": "13",
  "VB3": "14",
  "VS2": "15",
  "HO2": "16",
  "VB2": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
  "VCC": "21",
  "~{HIN1}": "22",
  "~{HIN2}": "23",
  "~{HIN3}": "24",
  "~{LIN1}": "25",
  "~{LIN2}": "26",
  "~{LIN3}": "27",
  "~{FAULT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ITRIP: "input", "~{FLT-CLR}": "input", CAO: "output", "CA-": "input", "CA+": "input", SD: "input", VSS: "power_in", COM: "passive", LO3: "output", LO2: "output", LO1: "output", VS3: "passive", HO3: "output", VB3: "passive", VS2: "passive", HO2: "output", VB2: "passive", VS1: "passive", HO1: "output", VB1: "passive", VCC: "power_in", "~{HIN1}": "input", "~{HIN2}": "input", "~{HIN3}": "input", "~{LIN1}": "input", "~{LIN2}": "input", "~{LIN3}": "input", "~{FAULT}": "output", ...opts.pinTypes } });
  }
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
 */
export class IR2233S extends Component.withPins({
  "ITRIP": "1",
  "~{FLT-CLR}": "2",
  "CAO": "3",
  "CA-": "4",
  "CA+": "5",
  "SD": "6",
  "VSS": "7",
  "COM": "8",
  "LO3": "9",
  "LO2": "10",
  "LO1": "11",
  "VS3": "12",
  "HO3": "13",
  "VB3": "14",
  "VS2": "15",
  "HO2": "16",
  "VB2": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
  "VCC": "21",
  "~{HIN1}": "22",
  "~{HIN2}": "23",
  "~{HIN3}": "24",
  "~{LIN1}": "25",
  "~{LIN2}": "26",
  "~{LIN3}": "27",
  "~{FAULT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ITRIP: "input", "~{FLT-CLR}": "input", CAO: "output", "CA-": "input", "CA+": "input", SD: "input", VSS: "power_in", COM: "passive", LO3: "output", LO2: "output", LO1: "output", VS3: "passive", HO3: "output", VB3: "passive", VS2: "passive", HO2: "output", VB2: "passive", VS1: "passive", HO1: "output", VB1: "passive", VCC: "power_in", "~{HIN1}": "input", "~{HIN2}": "input", "~{HIN3}": "input", "~{LIN1}": "input", "~{LIN2}": "input", "~{LIN3}": "input", "~{FAULT}": "output", ...opts.pinTypes } });
  }
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
 */
export class IR2235 extends Component.withPins({
  "ITRIP": "1",
  "~{FLT-CLR}": "2",
  "CAO": "3",
  "CA-": "4",
  "CA+": "5",
  "SD": "6",
  "VSS": "7",
  "COM": "8",
  "LO3": "9",
  "LO2": "10",
  "LO1": "11",
  "VS3": "12",
  "HO3": "13",
  "VB3": "14",
  "VS2": "15",
  "HO2": "16",
  "VB2": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
  "VCC": "21",
  "~{HIN1}": "22",
  "~{HIN2}": "23",
  "~{HIN3}": "24",
  "~{LIN1}": "25",
  "~{LIN2}": "26",
  "~{LIN3}": "27",
  "~{FAULT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ITRIP: "input", "~{FLT-CLR}": "input", CAO: "output", "CA-": "input", "CA+": "input", SD: "input", VSS: "power_in", COM: "passive", LO3: "output", LO2: "output", LO1: "output", VS3: "passive", HO3: "output", VB3: "passive", VS2: "passive", HO2: "output", VB2: "passive", VS1: "passive", HO1: "output", VB1: "passive", VCC: "power_in", "~{HIN1}": "input", "~{HIN2}": "input", "~{HIN3}": "input", "~{LIN1}": "input", "~{LIN2}": "input", "~{LIN3}": "input", "~{FAULT}": "output", ...opts.pinTypes } });
  }
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
 */
export class IR2235S extends Component.withPins({
  "ITRIP": "1",
  "~{FLT-CLR}": "2",
  "CAO": "3",
  "CA-": "4",
  "CA+": "5",
  "SD": "6",
  "VSS": "7",
  "COM": "8",
  "LO3": "9",
  "LO2": "10",
  "LO1": "11",
  "VS3": "12",
  "HO3": "13",
  "VB3": "14",
  "VS2": "15",
  "HO2": "16",
  "VB2": "17",
  "VS1": "18",
  "HO1": "19",
  "VB1": "20",
  "VCC": "21",
  "~{HIN1}": "22",
  "~{HIN2}": "23",
  "~{HIN3}": "24",
  "~{LIN1}": "25",
  "~{LIN2}": "26",
  "~{LIN3}": "27",
  "~{FAULT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ITRIP: "input", "~{FLT-CLR}": "input", CAO: "output", "CA-": "input", "CA+": "input", SD: "input", VSS: "power_in", COM: "passive", LO3: "output", LO2: "output", LO1: "output", VS3: "passive", HO3: "output", VB3: "passive", VS2: "passive", HO2: "output", VB2: "passive", VS1: "passive", HO1: "output", VB1: "passive", VCC: "power_in", "~{HIN1}": "input", "~{HIN2}": "input", "~{HIN3}": "input", "~{LIN1}": "input", "~{LIN2}": "input", "~{LIN3}": "input", "~{FAULT}": "output", ...opts.pinTypes } });
  }
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
 */
export class IR2301 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2302 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2304 extends Component.withPins({
  "LIN": "1",
  "HIN": "2",
  "VCC": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LIN: "input", HIN: "input", VCC: "power_in", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR2308 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR25602S extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR25603 extends Component.withPins({
  "VCC": "1",
  "RT": "2",
  "CT": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RT: "passive", CT: "passive", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR25604S extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR25607S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IR7106S extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR7184S extends Component.withPins({
  "IN": "1",
  "~{SD}": "2",
  "COM": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IR7304S extends Component.withPins({
  "LIN": "1",
  "HIN": "2",
  "VCC": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LIN: "input", HIN: "input", VCC: "power_in", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2001 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2001M extends Component.withPins({
  "NC_1": "1",
  "HIN": "2",
  "LIN": "3",
  "COM_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
  "VCC": "16",
  "COM_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", HIN: "input", LIN: "input", COM_4: "power_in", NC_5: "no_connect", NC_6: "no_connect", LO: "output", NC_8: "no_connect", NC_9: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", VCC: "power_in", COM_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2003 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "~{LIN}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", "~{LIN}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2004 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2005M extends Component.withPins({
  "NC_1": "1",
  "HIN": "2",
  "LIN": "3",
  "COM_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
  "VCC": "16",
  "COM_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", HIN: "input", LIN: "input", COM_4: "power_in", NC_5: "no_connect", NC_6: "no_connect", LO: "output", NC_8: "no_connect", NC_9: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", VCC: "power_in", COM_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2005S extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2008S extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2011 extends Component.withPins({
  "VCC": "1",
  "VB": "2",
  "HO": "3",
  "VS": "4",
  "HIN": "5",
  "LIN": "6",
  "COM": "7",
  "LO": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", VB: "passive", HO: "output", VS: "passive", HIN: "input", LIN: "input", COM: "power_in", LO: "output", ...opts.pinTypes } });
  }
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
 */
export class IRS2101 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2103 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "~{LIN}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", "~{LIN}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2104 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2106 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS21064 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "NC_4": "4",
  "VSS": "5",
  "COM": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", NC_4: "no_connect", VSS: "power_in", COM: "power_in", LO: "output", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2108 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "~{LIN}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", "~{LIN}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS21084 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "~{LIN}": "3",
  "DT": "4",
  "VSS": "5",
  "COM": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", "~{LIN}": "input", DT: "input", VSS: "power_in", COM: "power_in", LO: "output", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2109 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS21091 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "DT/SD": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "DT/SD": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS21094 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "DT": "4",
  "VSS": "5",
  "COM": "6",
  "LO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", DT: "input", VSS: "power_in", COM: "power_in", LO: "output", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2110 extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "VS": "5",
  "VB": "6",
  "HO": "7",
  "NC_8": "8",
  "VDD": "9",
  "HIN": "10",
  "SD": "11",
  "LIN": "12",
  "VSS": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_8: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2110S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2111 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "COM": "3",
  "LO": "4",
  "NC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", COM: "power_in", LO: "output", NC: "no_connect", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2112 extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "VS": "5",
  "VB": "6",
  "HO": "7",
  "NC_8": "8",
  "VDD": "9",
  "HIN": "10",
  "SD": "11",
  "LIN": "12",
  "VSS": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_8: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2112S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2113 extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "VS": "5",
  "VB": "6",
  "HO": "7",
  "NC_8": "8",
  "VDD": "9",
  "HIN": "10",
  "SD": "11",
  "LIN": "12",
  "VSS": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_8: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2113M extends Component.withPins({
  "VDD": "1",
  "HIN": "2",
  "SD": "3",
  "LIN": "4",
  "VSS": "5",
  "LO": "6",
  "COM_7": "7",
  "NC_8": "8",
  "VCC": "9",
  "NC_11": "11",
  "VS": "12",
  "VB": "13",
  "HO": "14",
  "NC_16": "16",
  "COM_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", LO: "output", COM_7: "power_in", NC_8: "no_connect", VCC: "power_in", NC_11: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_16: "no_connect", COM_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2113S extends Component.withPins({
  "LO": "1",
  "COM": "2",
  "VCC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VS": "6",
  "VB": "7",
  "HO": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VDD": "11",
  "HIN": "12",
  "SD": "13",
  "LIN": "14",
  "VSS": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LO: "output", COM: "power_in", VCC: "power_in", NC_4: "no_connect", NC_5: "no_connect", VS: "passive", VB: "passive", HO: "output", NC_9: "no_connect", NC_10: "no_connect", VDD: "power_in", HIN: "input", SD: "input", LIN: "input", VSS: "power_in", NC_16: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS21531D extends Component.withPins({
  "VCC": "1",
  "RT": "2",
  "CT": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RT: "passive", CT: "passive", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2153D extends Component.withPins({
  "VCC": "1",
  "RT": "2",
  "CT": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RT: "passive", CT: "passive", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2181 extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "COM": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS21814 extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "VSS": "3",
  "NC_4": "4",
  "COM": "5",
  "LO": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", VSS: "power_in", NC_4: "no_connect", COM: "power_in", LO: "output", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS21814M extends Component.withPins({
  "LIN": "1",
  "VSS": "2",
  "NC_3": "3",
  "COM_4": "4",
  "LO": "5",
  "NC_6": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
  "HIN": "16",
  "COM_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LIN: "input", VSS: "power_in", NC_3: "no_connect", COM_4: "power_in", LO: "output", NC_6: "no_connect", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", HIN: "input", COM_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2183 extends Component.withPins({
  "HIN": "1",
  "~{LIN}": "2",
  "COM": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", "~{LIN}": "input", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS21834 extends Component.withPins({
  "HIN": "1",
  "~{LIN}": "2",
  "VSS": "3",
  "DT": "4",
  "COM": "5",
  "LO": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", "~{LIN}": "input", VSS: "power_in", DT: "input", COM: "power_in", LO: "output", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS2184 extends Component.withPins({
  "IN": "1",
  "~{SD}": "2",
  "COM": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS21844 extends Component.withPins({
  "IN": "1",
  "~{SD}": "2",
  "VSS": "3",
  "DT": "4",
  "COM": "5",
  "LO": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", "~{SD}": "input", VSS: "power_in", DT: "input", COM: "power_in", LO: "output", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS21844M extends Component.withPins({
  "~{SD}": "1",
  "VSS": "2",
  "DT": "3",
  "COM_4": "4",
  "LO": "5",
  "NC_6": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
  "IN": "16",
  "COM_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SD}": "input", VSS: "power_in", DT: "input", COM_4: "power_in", LO: "output", NC_6: "no_connect", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", IN: "input", COM_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2186 extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "COM": "3",
  "LO": "4",
  "VCC": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS21864 extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "VSS": "3",
  "NC_4": "4",
  "COM": "5",
  "LO": "6",
  "VCC": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VS": "11",
  "HO": "12",
  "VB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "input", LIN: "input", VSS: "power_in", NC_4: "no_connect", COM: "power_in", LO: "output", VCC: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VS: "passive", HO: "output", VB: "passive", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IRS21867S extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2301S extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2302S extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "~{SD}": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", "~{SD}": "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2304 extends Component.withPins({
  "LIN": "1",
  "HIN": "2",
  "VCC": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LIN: "input", HIN: "input", VCC: "power_in", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2308 extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS25606S extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "COM": "4",
  "LO": "5",
  "VS": "6",
  "HO": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", COM: "power_in", LO: "output", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class IRS2890DS extends Component.withPins({
  "VCC": "1",
  "HIN": "2",
  "LIN": "3",
  "ITRIP": "4",
  "NC_5": "5",
  "COM": "6",
  "RFE": "7",
  "NC_8": "8",
  "LO": "9",
  "NC_10": "10",
  "NC_11": "11",
  "VS": "12",
  "HO": "13",
  "VB": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", HIN: "input", LIN: "input", ITRIP: "passive", NC_5: "no_connect", COM: "power_in", RFE: "open_collector", NC_8: "no_connect", LO: "output", NC_10: "no_connect", NC_11: "no_connect", VS: "passive", HO: "output", VB: "passive", ...opts.pinTypes } });
  }
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
 */
export class ITS724G extends Component.withPins({
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
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
 */
export class ITS711L1 extends Component.withPins({
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
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
 */
export class ITS716G extends Component.withPins({
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBB_1: "power_in", "GND1/2": "power_in", IN1: "input", "ST1/2": "open_collector", IN2: "input", "GND3/4": "power_in", IN3: "input", "ST3/4": "open_collector", IN4: "input", VBB_10: "passive", VBB_11: "passive", VBB_12: "passive", OUT4: "open_emitter", OUT3: "open_emitter", VBB_15: "passive", VBB_16: "passive", OUT2: "open_emitter", OUT1: "open_emitter", VBB_19: "passive", VBB_20: "passive", ...opts.pinTypes } });
  }
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
 */
export class L6491 extends Component.withPins({
  "~{LIN}": "1",
  "~{SD}/OD": "2",
  "HIN": "3",
  "VCC": "4",
  "DT": "5",
  "SGND": "6",
  "PGND": "7",
  "LVG": "8",
  "CP-": "9",
  "CP+": "10",
  "NC": "11",
  "OUT": "12",
  "HVG": "13",
  "BOOT": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{LIN}": "input", "~{SD}/OD": "input", HIN: "input", VCC: "power_in", DT: "input", SGND: "power_in", PGND: "power_in", LVG: "output", "CP-": "input", "CP+": "input", NC: "no_connect", OUT: "input", HVG: "output", BOOT: "passive", ...opts.pinTypes } });
  }
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
 */
export class LF2190N extends Component.withPins({
  "HIN": "1",
  "LIN": "2",
  "COM": "3",
  "LO": "4",
  "V_{CC}": "5",
  "V_{S}": "6",
  "HO": "7",
  "V_{B}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HIN: "passive", LIN: "passive", COM: "power_in", LO: "output", "V_{CC}": "power_in", "V_{S}": "passive", HO: "output", "V_{B}": "passive", ...opts.pinTypes } });
  }
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
 */
export class LM2105D extends Component.withPins({
  "GVDD": "1",
  "INH": "2",
  "INL": "3",
  "GND": "4",
  "GL": "5",
  "SH": "6",
  "GH": "7",
  "BST": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GVDD: "power_in", INH: "input", INL: "input", GND: "power_in", GL: "output", SH: "passive", GH: "output", BST: "passive", ...opts.pinTypes } });
  }
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
 */
export class LM2105DSG extends Component.withPins({
  "GVDD": "1",
  "INH": "2",
  "INL": "3",
  "GND_4": "4",
  "GL": "5",
  "SH": "6",
  "GH": "7",
  "BST": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GVDD: "power_in", INH: "input", INL: "input", GND_4: "power_in", GL: "output", SH: "passive", GH: "output", BST: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LM5106SD extends Component.withPins({
  "VDD": "1",
  "HB": "2",
  "HO": "3",
  "HS": "4",
  "NC": "5",
  "RDT": "6",
  "EN": "7",
  "IN": "8",
  "VSS": "9",
  "LO": "10",
  "EP": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HB: "passive", HO: "output", HS: "passive", NC: "no_connect", RDT: "passive", EN: "input", IN: "input", VSS: "power_in", LO: "output", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class LM5109MA extends Component.withPins({
  "VDD": "1",
  "HI": "2",
  "LI": "3",
  "VSS": "4",
  "LO": "5",
  "HS": "6",
  "HO": "7",
  "HB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HI: "input", LI: "input", VSS: "power_in", LO: "output", HS: "passive", HO: "output", HB: "passive", ...opts.pinTypes } });
  }
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
 */
export class LM5109AMA extends Component.withPins({
  "VDD": "1",
  "HI": "2",
  "LI": "3",
  "VSS": "4",
  "LO": "5",
  "HS": "6",
  "HO": "7",
  "HB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HI: "input", LI: "input", VSS: "power_in", LO: "output", HS: "passive", HO: "output", HB: "passive", ...opts.pinTypes } });
  }
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
 */
export class LM5109ASD extends Component.withPins({
  "VDD": "1",
  "HI": "2",
  "LI": "3",
  "VSS_4": "4",
  "LO": "5",
  "HS": "6",
  "HO": "7",
  "HB": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HI: "input", LI: "input", VSS_4: "power_in", LO: "output", HS: "passive", HO: "output", HB: "passive", VSS_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LM5109BMA extends Component.withPins({
  "VDD": "1",
  "HI": "2",
  "LI": "3",
  "VSS": "4",
  "LO": "5",
  "HS": "6",
  "HO": "7",
  "HB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HI: "input", LI: "input", VSS: "power_in", LO: "output", HS: "passive", HO: "output", HB: "passive", ...opts.pinTypes } });
  }
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
 */
export class LM5109BSD extends Component.withPins({
  "VDD": "1",
  "HI": "2",
  "LI": "3",
  "VSS_4": "4",
  "LO": "5",
  "HS": "6",
  "HO": "7",
  "HB": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HI: "input", LI: "input", VSS_4: "power_in", LO: "output", HS: "passive", HO: "output", HB: "passive", VSS_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LMG1020YFF extends Component.withPins({
  "V_{DD}": "A1",
  "OUTH": "A2",
  "GND": "B1",
  "OUTL": "B2",
  "IN+": "C1",
  "IN-": "C2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", OUTH: "output", GND: "power_in", OUTL: "output", "IN+": "input", "IN-": "input", ...opts.pinTypes } });
  }
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
 */
export class LTC4440EMS8 extends Component.withPins({
  "INP": "1",
  "GND_2": "2",
  "VCC": "3",
  "GND_4": "4",
  "NC": "5",
  "BOOST": "6",
  "TG": "7",
  "TS": "8",
  "PAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INP: "input", GND_2: "power_in", VCC: "power_in", GND_4: "power_in", NC: "no_connect", BOOST: "input", TG: "output", TS: "input", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC4440ES6 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "INP": "3",
  "TS": "4",
  "TG": "5",
  "BOOST": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", INP: "input", TS: "input", TG: "output", BOOST: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC4440IMS8 extends Component.withPins({
  "INP": "1",
  "GND_2": "2",
  "VCC": "3",
  "GND_4": "4",
  "NC": "5",
  "BOOST": "6",
  "TG": "7",
  "TS": "8",
  "PAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INP: "input", GND_2: "power_in", VCC: "power_in", GND_4: "power_in", NC: "no_connect", BOOST: "input", TG: "output", TS: "input", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC4440IS6 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "INP": "3",
  "TS": "4",
  "TG": "5",
  "BOOST": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", INP: "input", TS: "input", TG: "output", BOOST: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX15012AxSA extends Component.withPins({
  "VDD": "1",
  "BST": "2",
  "DH": "3",
  "HS": "4",
  "IN_H": "5",
  "IN_L": "6",
  "GND": "7",
  "DL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", BST: "power_in", DH: "output", HS: "passive", IN_H: "input", IN_L: "input", GND: "power_in", DL: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX15012BxSA extends Component.withPins({
  "VDD": "1",
  "BST": "2",
  "DH": "3",
  "HS": "4",
  "IN_H": "5",
  "~{IN_L}": "6",
  "GND": "7",
  "DL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", BST: "power_in", DH: "output", HS: "passive", IN_H: "input", "~{IN_L}": "input", GND: "power_in", DL: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX15012CxSA extends Component.withPins({
  "VDD": "1",
  "BST": "2",
  "DH": "3",
  "HS": "4",
  "IN_H": "5",
  "IN_L": "6",
  "GND": "7",
  "DL": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", BST: "power_in", DH: "output", HS: "passive", IN_H: "input", IN_L: "input", GND: "power_in", DL: "output", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX15012DxSA extends Component.withPins({
  "VDD": "1",
  "BST": "2",
  "DH": "3",
  "HS": "4",
  "IN_H": "5",
  "~{IN_L}": "6",
  "GND": "7",
  "DL": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", BST: "power_in", DH: "output", HS: "passive", IN_H: "input", "~{IN_L}": "input", GND: "power_in", DL: "output", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX15013AxSA extends Component.withPins({
  "VDD": "1",
  "BST": "2",
  "DH": "3",
  "HS": "4",
  "IN_H": "5",
  "IN_L": "6",
  "GND": "7",
  "DL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", BST: "power_in", DH: "output", HS: "passive", IN_H: "input", IN_L: "input", GND: "power_in", DL: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX15013BxSA extends Component.withPins({
  "VDD": "1",
  "BST": "2",
  "DH": "3",
  "HS": "4",
  "IN_H": "5",
  "~{IN_L}": "6",
  "GND": "7",
  "DL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", BST: "power_in", DH: "output", HS: "passive", IN_H: "input", "~{IN_L}": "input", GND: "power_in", DL: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX15013CxSA extends Component.withPins({
  "VDD": "1",
  "BST": "2",
  "DH": "3",
  "HS": "4",
  "IN_H": "5",
  "IN_L": "6",
  "GND": "7",
  "DL": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", BST: "power_in", DH: "output", HS: "passive", IN_H: "input", IN_L: "input", GND: "power_in", DL: "output", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX15013DxSA extends Component.withPins({
  "VDD": "1",
  "BST": "2",
  "DH": "3",
  "HS": "4",
  "IN_H": "5",
  "~{IN_L}": "6",
  "GND": "7",
  "DL": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", BST: "power_in", DH: "output", HS: "passive", IN_H: "input", "~{IN_L}": "input", GND: "power_in", DL: "output", EP: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX626xSA extends Component.withPins({
  "NC_1": "1",
  "IN_{A}": "2",
  "GND": "3",
  "IN_{B}": "4",
  "~{OUT_{B}}": "5",
  "V_{DD}": "6",
  "~{OUT_{A}}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "IN_{A}": "input", GND: "power_in", "IN_{B}": "input", "~{OUT_{B}}": "output", "V_{DD}": "power_in", "~{OUT_{A}}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MAX627xSA extends Component.withPins({
  "NC_1": "1",
  "IN_{A}": "2",
  "GND": "3",
  "IN_{B}": "4",
  "OUT_{B}": "5",
  "V_{DD}": "6",
  "OUT_{A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "IN_{A}": "input", GND: "power_in", "IN_{B}": "input", "OUT_{B}": "output", "V_{DD}": "power_in", "OUT_{A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MAX628xSA extends Component.withPins({
  "NC_1": "1",
  "IN_{A}": "2",
  "GND": "3",
  "IN_{B}": "4",
  "OUT_{B}": "5",
  "V_{DD}": "6",
  "~{OUT_{A}}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "IN_{A}": "input", GND: "power_in", "IN_{B}": "input", "OUT_{B}": "output", "V_{DD}": "power_in", "~{OUT_{A}}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class TC4427xOA extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "OUT_B": "5",
  "V_{DD}": "6",
  "OUT_A": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", OUT_B: "output", "V_{DD}": "power_in", OUT_A: "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MC3x152 extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "OUT_B": "5",
  "V_{DD}": "6",
  "OUT_A": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", OUT_B: "output", "V_{DD}": "power_in", OUT_A: "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MCP1415 extends Component.withPins({
  "NC": "1",
  "Vdd": "2",
  "IN": "3",
  "GND": "4",
  "~{OUT}": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", Vdd: "power_in", IN: "input", GND: "power_in", "~{OUT}": "output", ...opts.pinTypes } });
  }
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
 */
export class MCP1415R extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "IN": "3",
  "~{OUT}": "4",
  "Vdd": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", IN: "input", "~{OUT}": "output", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP1416 extends Component.withPins({
  "NC": "1",
  "Vdd": "2",
  "IN": "3",
  "GND": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", Vdd: "power_in", IN: "input", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class MCP1416R extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "IN": "3",
  "OUT": "4",
  "Vdd": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", IN: "input", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP14A0303xMNY extends Component.withPins({
  "ENA": "1",
  "INA": "2",
  "GND_3": "3",
  "INB": "4",
  "~{OUTB}": "5",
  "V_{DD}": "6",
  "~{OUTA}": "7",
  "ENB": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ENA: "input", INA: "input", GND_3: "power_in", INB: "input", "~{OUTB}": "output", "V_{DD}": "power_in", "~{OUTA}": "output", ENB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP14A0304xMNY extends Component.withPins({
  "ENA": "1",
  "INA": "2",
  "GND_3": "3",
  "INB": "4",
  "OUTB": "5",
  "V_{DD}": "6",
  "OUTA": "7",
  "ENB": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ENA: "input", INA: "input", GND_3: "power_in", INB: "input", OUTB: "output", "V_{DD}": "power_in", OUTA: "output", ENB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP14A0305xMNY extends Component.withPins({
  "ENA": "1",
  "INA": "2",
  "GND_3": "3",
  "INB": "4",
  "OUTB": "5",
  "V_{DD}": "6",
  "~{OUTA}": "7",
  "ENB": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ENA: "input", INA: "input", GND_3: "power_in", INB: "input", OUTB: "output", "V_{DD}": "power_in", "~{OUTA}": "output", ENB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP14A0901xMNY extends Component.withPins({
  "VDD_1": "1",
  "IN": "2",
  "EN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "~{OUT}_6": "6",
  "~{OUT}_7": "7",
  "VDD_8": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", IN: "input", EN: "input", GND_4: "power_in", GND_5: "passive", "~{OUT}_6": "output", "~{OUT}_7": "passive", VDD_8: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP14A0902xMNY extends Component.withPins({
  "VDD_1": "1",
  "IN": "2",
  "EN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "VDD_8": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", IN: "input", EN: "input", GND_4: "power_in", GND_5: "passive", OUT_6: "output", OUT_7: "passive", VDD_8: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP14A1201xMNY extends Component.withPins({
  "VDD_1": "1",
  "IN": "2",
  "EN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "~{OUT}_6": "6",
  "~{OUT}_7": "7",
  "VDD_8": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", IN: "input", EN: "input", GND_4: "power_in", GND_5: "passive", "~{OUT}_6": "output", "~{OUT}_7": "passive", VDD_8: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP14A1202xMNY extends Component.withPins({
  "VDD_1": "1",
  "IN": "2",
  "EN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "OUT_6": "6",
  "OUT_7": "7",
  "VDD_8": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", IN: "input", EN: "input", GND_4: "power_in", GND_5: "passive", OUT_6: "output", OUT_7: "passive", VDD_8: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MIC4426 extends Component.withPins({
  "NC_1": "1",
  "INA": "2",
  "GND": "3",
  "INB": "4",
  "~{OUTB}": "5",
  "V_{S}": "6",
  "~{OUTA}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", INA: "input", GND: "power_in", INB: "input", "~{OUTB}": "output", "V_{S}": "power_in", "~{OUTA}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MIC4427 extends Component.withPins({
  "NC_1": "1",
  "INA": "2",
  "GND": "3",
  "INB": "4",
  "OUTB": "5",
  "V_{S}": "6",
  "OUTA": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", INA: "input", GND: "power_in", INB: "input", OUTB: "output", "V_{S}": "power_in", OUTA: "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MIC4428 extends Component.withPins({
  "NC_1": "1",
  "INA": "2",
  "GND": "3",
  "INB": "4",
  "OUTB": "5",
  "V_{S}": "6",
  "~{OUTA}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", INA: "input", GND: "power_in", INB: "input", OUTB: "output", "V_{S}": "power_in", "~{OUTA}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MIC4604YM extends Component.withPins({
  "VDD": "1",
  "HB": "2",
  "HO": "3",
  "HS": "4",
  "HI": "5",
  "LI": "6",
  "VSS": "7",
  "LO": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", HB: "passive", HO: "output", HS: "passive", HI: "input", LI: "input", VSS: "power_in", LO: "output", ...opts.pinTypes } });
  }
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
 */
export class NCD5702 extends Component.withPins({
  "EN": "1",
  "VIN": "2",
  "VREF": "3",
  "~{FLT}": "4",
  "GNDA": "5",
  "NC_6": "6",
  "RSVD": "7",
  "NC_8": "8",
  "DESAT": "9",
  "VCC": "10",
  "VOH": "11",
  "VOL": "12",
  "GND": "13",
  "VEE": "14",
  "VEEA": "15",
  "CLAMP": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", VIN: "input", VREF: "power_out", "~{FLT}": "open_collector", GNDA: "power_in", NC_6: "no_connect", RSVD: "passive", NC_8: "no_connect", DESAT: "input", VCC: "power_in", VOH: "open_emitter", VOL: "open_collector", GND: "power_in", VEE: "power_in", VEEA: "power_in", CLAMP: "open_collector", ...opts.pinTypes } });
  }
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
 */
export class PE29101 extends Component.withPins({
  "HSGpd": "1",
  "HSS": "2",
  "HSB": "3",
  "VDDSYNC": "4",
  "RDLH": "5",
  "HSGpu": "6",
  "~{EN}": "7",
  "IN": "8",
  "LSGpu": "9",
  "LSO": "10",
  "GND": "11",
  "LSGpd": "12",
  "LSS": "13",
  "LSB": "14",
  "VDD": "15",
  "RDHL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HSGpd: "output", HSS: "passive", HSB: "input", VDDSYNC: "passive", RDLH: "passive", HSGpu: "output", "~{EN}": "input", IN: "input", LSGpu: "output", LSO: "output", GND: "power_in", LSGpd: "output", LSS: "passive", LSB: "input", VDD: "power_in", RDHL: "passive", ...opts.pinTypes } });
  }
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
 */
export class PE29102 extends Component.withPins({
  "HSGpd": "1",
  "HSS": "2",
  "HSB": "3",
  "NC": "4",
  "RDLH": "5",
  "HSGpu": "6",
  "~{EN}": "7",
  "IN": "8",
  "LSGpu": "9",
  "PHCTL": "10",
  "GND": "11",
  "LSGpd": "12",
  "LSS": "13",
  "LSB": "14",
  "VDD": "15",
  "RDHL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HSGpd: "output", HSS: "passive", HSB: "input", NC: "no_connect", RDLH: "passive", HSGpu: "output", "~{EN}": "input", IN: "input", LSGpu: "output", PHCTL: "input", GND: "power_in", LSGpd: "output", LSS: "passive", LSB: "input", VDD: "power_in", RDHL: "passive", ...opts.pinTypes } });
  }
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
 */
export class PM8834 extends Component.withPins({
  "EN1": "1",
  "PWM1": "2",
  "GND": "3",
  "PWM2": "4",
  "OUT2": "5",
  "VCC": "6",
  "OUT1": "7",
  "EN2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN1: "input", PWM1: "input", GND: "power_in", PWM2: "input", OUT2: "output", VCC: "power_in", OUT1: "output", EN2: "input", ...opts.pinTypes } });
  }
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
 */
export class PM8834M extends Component.withPins({
  "EN1": "1",
  "PWM1": "2",
  "GND_3": "3",
  "PWM2": "4",
  "OUT2": "5",
  "VCC": "6",
  "OUT1": "7",
  "EN2": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN1: "input", PWM1: "input", GND_3: "power_in", PWM2: "input", OUT2: "output", VCC: "power_in", OUT1: "output", EN2: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class SM72295MA extends Component.withPins({
  "SIA": "1",
  "SOA": "2",
  "IIN": "3",
  "BIN": "4",
  "AGND": "5",
  "LIA": "6",
  "HIA": "7",
  "HIB": "8",
  "LIB": "9",
  "PGOOD": "10",
  "BOUT": "11",
  "IOUT": "12",
  "SOB": "13",
  "SIB": "14",
  "OVP": "15",
  "OVS": "16",
  "VDD": "17",
  "HSA": "18",
  "HOA": "19",
  "HBA": "20",
  "VCCA": "21",
  "LOA": "22",
  "PGND": "23",
  "LOB": "24",
  "VCCB": "25",
  "HBB": "26",
  "HOB": "27",
  "HSB": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SIA: "input", SOA: "input", IIN: "passive", BIN: "output", AGND: "power_in", LIA: "input", HIA: "input", HIB: "input", LIB: "input", PGOOD: "open_collector", BOUT: "output", IOUT: "passive", SOB: "input", SIB: "input", OVP: "open_collector", OVS: "input", VDD: "power_in", HSA: "passive", HOA: "output", HBA: "passive", VCCA: "power_in", LOA: "output", PGND: "power_in", LOB: "output", VCCB: "power_in", HBB: "passive", HOB: "output", HSB: "passive", ...opts.pinTypes } });
  }
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
 */
export class STGAP1AS extends Component.withPins({
  "GND_1": "1",
  "SDO": "2",
  "SDI": "3",
  "~{CS}": "4",
  "CK": "5",
  "VREG": "6",
  "VDD": "7",
  "IN-/DIAG2": "8",
  "IN+": "9",
  "DIAG1": "10",
  "~{SD}": "11",
  "GND_12": "12",
  "GNDISO": "13",
  "VL_14": "14",
  "VREGISO": "15",
  "SENSE": "16",
  "VH": "17",
  "DESAT": "18",
  "VCECLAMP": "19",
  "GON": "20",
  "GOFF": "21",
  "CLAMP": "22",
  "VL_23": "23",
  "ASC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", SDO: "output", SDI: "input", "~{CS}": "input", CK: "input", VREG: "power_out", VDD: "power_in", "IN-/DIAG2": "bidirectional", "IN+": "input", DIAG1: "open_collector", "~{SD}": "input", GND_12: "passive", GNDISO: "power_in", VL_14: "power_in", VREGISO: "power_out", SENSE: "input", VH: "power_in", DESAT: "passive", VCECLAMP: "input", GON: "output", GOFF: "output", CLAMP: "output", VL_23: "passive", ASC: "input", ...opts.pinTypes } });
  }
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
 */
export class STGAP2SCM extends Component.withPins({
  "VDD": "1",
  "IN+": "2",
  "IN-": "3",
  "GND": "4",
  "VH": "5",
  "GOUT": "6",
  "CLAMP": "7",
  "GNDISO": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "IN+": "input", "IN-": "input", GND: "power_in", VH: "power_in", GOUT: "output", CLAMP: "output", GNDISO: "power_in", ...opts.pinTypes } });
  }
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
 */
export class STGAP2SM extends Component.withPins({
  "VDD": "1",
  "IN+": "2",
  "IN-": "3",
  "GND": "4",
  "VH": "5",
  "GON": "6",
  "GOFF": "7",
  "GNDISO": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "IN+": "input", "IN-": "input", GND: "power_in", VH: "power_in", GON: "output", GOFF: "output", GNDISO: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TC4421 extends Component.withPins({
  "VDD_1": "1",
  "INPUT": "2",
  "NC": "3",
  "GND_4": "4",
  "GND_5": "5",
  "~{OUTPUT}_6": "6",
  "~{OUTPUT}_7": "7",
  "VDD_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", INPUT: "input", NC: "no_connect", GND_4: "power_in", GND_5: "passive", "~{OUTPUT}_6": "output", "~{OUTPUT}_7": "passive", VDD_8: "passive", ...opts.pinTypes } });
  }
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
 */
export class TC4422 extends Component.withPins({
  "VDD_1": "1",
  "INPUT": "2",
  "NC": "3",
  "GND_4": "4",
  "GND_5": "5",
  "OUTPUT_6": "6",
  "OUTPUT_7": "7",
  "VDD_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", INPUT: "input", NC: "no_connect", GND_4: "power_in", GND_5: "passive", OUTPUT_6: "output", OUTPUT_7: "passive", VDD_8: "passive", ...opts.pinTypes } });
  }
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
 */
export class TC4426xOA extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "~{OUT_B}": "5",
  "V_{DD}": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", "~{OUT_B}": "output", "V_{DD}": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class TC4428xOA extends Component.withPins({
  "NC_1": "1",
  "IN_A": "2",
  "GND": "3",
  "IN_B": "4",
  "OUT_B": "5",
  "V_{DD}": "6",
  "~{OUT_A}": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN_A: "input", GND: "power_in", IN_B: "input", OUT_B: "output", "V_{DD}": "power_in", "~{OUT_A}": "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class TLP250 extends Component.withPins({
  "NC_1": "1",
  "A": "2",
  "C": "3",
  "NC_4": "4",
  "VEE": "5",
  "VO_6": "6",
  "VO_7": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", A: "passive", C: "passive", NC_4: "no_connect", VEE: "power_in", VO_6: "output", VO_7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class UCC21520DW extends Component.withPins({
  "INA": "1",
  "INB": "2",
  "VCCI_3": "3",
  "GND": "4",
  "DIS": "5",
  "DT": "6",
  "NC_7": "7",
  "VCCI_8": "8",
  "VSSB": "9",
  "OUTB": "10",
  "VDDB": "11",
  "NC_12": "12",
  "NC_13": "13",
  "VSSA": "14",
  "OUTA": "15",
  "VDDA": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INA: "input", INB: "input", VCCI_3: "power_in", GND: "power_in", DIS: "input", DT: "passive", NC_7: "no_connect", VCCI_8: "passive", VSSB: "power_in", OUTB: "output", VDDB: "power_in", NC_12: "no_connect", NC_13: "no_connect", VSSA: "power_in", OUTA: "output", VDDA: "power_in", ...opts.pinTypes } });
  }
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
 */
export class UCC21520ADW extends Component.withPins({
  "INA": "1",
  "INB": "2",
  "VCCI_3": "3",
  "GND": "4",
  "DIS": "5",
  "DT": "6",
  "NC_7": "7",
  "VCCI_8": "8",
  "VSSB": "9",
  "OUTB": "10",
  "VDDB": "11",
  "NC_12": "12",
  "NC_13": "13",
  "VSSA": "14",
  "OUTA": "15",
  "VDDA": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INA: "input", INB: "input", VCCI_3: "power_in", GND: "power_in", DIS: "input", DT: "passive", NC_7: "no_connect", VCCI_8: "passive", VSSB: "power_in", OUTB: "output", VDDB: "power_in", NC_12: "no_connect", NC_13: "no_connect", VSSA: "power_in", OUTA: "output", VDDA: "power_in", ...opts.pinTypes } });
  }
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
 */
export class UCC27511ADBV extends Component.withPins({
  "V_{DD}": "1",
  "OUTH": "2",
  "OUTL": "3",
  "GND": "4",
  "IN-": "5",
  "IN+": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", OUTH: "output", OUTL: "output", GND: "power_in", "IN-": "input", "IN+": "input", ...opts.pinTypes } });
  }
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
 */
export class UCC27524D extends Component.withPins({
  "ENA": "1",
  "INA": "2",
  "GND": "3",
  "INB": "4",
  "OUTB": "5",
  "V_{DD}": "6",
  "OUTA": "7",
  "ENB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ENA: "input", INA: "input", GND: "power_in", INB: "input", OUTB: "output", "V_{DD}": "power_in", OUTA: "output", ENB: "input", ...opts.pinTypes } });
  }
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
 */
export class UCC27524DGN extends Component.withPins({
  "ENA": "1",
  "INA": "2",
  "GND_3": "3",
  "INB": "4",
  "OUTB": "5",
  "V_{DD}": "6",
  "OUTA": "7",
  "ENB": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ENA: "input", INA: "input", GND_3: "power_in", INB: "input", OUTB: "output", "V_{DD}": "power_in", OUTA: "output", ENB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class UCC27714D extends Component.withPins({
  "HI": "1",
  "LI": "2",
  "VSS": "3",
  "EN/NC": "4",
  "COM": "5",
  "LO": "6",
  "VDD": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "HS": "11",
  "HO": "12",
  "HB": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HI: "input", LI: "input", VSS: "power_in", "EN/NC": "input", COM: "passive", LO: "output", VDD: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", HS: "passive", HO: "output", HB: "input", NC_14: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ZXGD3001E6 extends Component.withPins({
  "VCC": "1",
  "IN1": "2",
  "GND": "3",
  "SINK": "4",
  "IN2": "5",
  "SOURCE": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN1: "input", GND: "power_in", SINK: "open_collector", IN2: "input", SOURCE: "open_emitter", ...opts.pinTypes } });
  }
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
 */
export class ZXGD3002E6 extends Component.withPins({
  "VCC": "1",
  "IN1": "2",
  "GND": "3",
  "SINK": "4",
  "IN2": "5",
  "SOURCE": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN1: "input", GND: "power_in", SINK: "open_collector", IN2: "input", SOURCE: "open_emitter", ...opts.pinTypes } });
  }
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
 */
export class ZXGD3003E6 extends Component.withPins({
  "VCC": "1",
  "IN1": "2",
  "GND": "3",
  "SINK": "4",
  "IN2": "5",
  "SOURCE": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN1: "input", GND: "power_in", SINK: "open_collector", IN2: "input", SOURCE: "open_emitter", ...opts.pinTypes } });
  }
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
 */
export class ZXGD3004E6 extends Component.withPins({
  "VCC": "1",
  "IN1": "2",
  "GND": "3",
  "SINK": "4",
  "IN2": "5",
  "SOURCE": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN1: "input", GND: "power_in", SINK: "open_collector", IN2: "input", SOURCE: "open_emitter", ...opts.pinTypes } });
  }
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
 */
export class ZXGD3006E6 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "VEE": "3",
  "SINK": "4",
  "NC": "5",
  "SRC": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", VEE: "power_in", SINK: "open_collector", NC: "no_connect", SRC: "open_emitter", ...opts.pinTypes } });
  }
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
 */
export class ZXGD3009E6 extends Component.withPins({
  "VCC": "1",
  "IN": "2",
  "VEE": "3",
  "SINK": "4",
  "NC": "5",
  "SOURCE": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", IN: "input", VEE: "power_in", SINK: "open_collector", NC: "no_connect", SOURCE: "open_emitter", ...opts.pinTypes } });
  }
  override schema = "Driver_FET:ZXGD3009E6";
  override referencePrefix = "U";
}
