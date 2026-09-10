// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Full-Bridge, DMOS PWM, Motor Driver, 40V, 3.5A, -40 to +85C
 *
 * KiCad symbol: `Driver_Motor:A4950E`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*EP2.41x3.3mm*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A4950-Datasheet.ashx
 * Keywords: full-bridge h-bridge.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm.
 */
export class A4950E extends Component.withPins({
  "GND": "1",
  "IN2": "2",
  "IN1": "3",
  "VREF": "4",
  "VBB": "5",
  "OUT1": "6",
  "LSS": "7",
  "OUT2": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN2: "input", IN1: "input", VREF: "passive", VBB: "power_in", OUT1: "power_out", LSS: "power_in", OUT2: "power_out", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:A4950E";
  override referencePrefix = "U";
}

/**
 * Full-Bridge, DMOS PWM, Motor Driver, 40V, 3.5A, -40 to +125C
 *
 * KiCad symbol: `Driver_Motor:A4950K`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*EP2.41x3.3mm*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A4950-Datasheet.ashx
 * Keywords: full-bridge h-bridge.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm.
 */
export class A4950K extends Component.withPins({
  "GND": "1",
  "IN2": "2",
  "IN1": "3",
  "VREF": "4",
  "VBB": "5",
  "OUT1": "6",
  "LSS": "7",
  "OUT2": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN2: "input", IN1: "input", VREF: "passive", VBB: "power_in", OUT1: "power_out", LSS: "power_in", OUT2: "power_out", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:A4950K";
  override referencePrefix = "U";
}

/**
 * Full-Bridge, DMOS PWM, Motor Driver, 40V, 2A, MSOP-10
 *
 * KiCad symbol: `Driver_Motor:A4952_LY`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.5mm*.
 * @see www.allegromicro.com/~/media/Files/Datasheets/A4952-3-Datasheet.ashx?la=en
 * Keywords: Full-bridge h-bridge.
 * Default footprint: Package_SO:MSOP-10-1EP_3x3mm_P0.5mm_EP1.73x1.98mm.
 */
export class A4952_LY extends Component.withPins({
  "~{FLTn}": "1",
  "RTRY": "2",
  "IN2": "3",
  "IN1": "4",
  "VREF": "5",
  "VBB": "6",
  "OUT1": "7",
  "LSS": "8",
  "OUT2": "9",
  "GND": "10",
  "PAD": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{FLTn}": "output", RTRY: "input", IN2: "input", IN1: "input", VREF: "passive", VBB: "power_in", OUT1: "power_out", LSS: "power_in", OUT2: "power_out", GND: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:A4952_LY";
  override referencePrefix = "U";
}

/**
 * Full-Bridge, DMOS PWM, Motor Driver, 40V, 2A, SOIC-8
 *
 * KiCad symbol: `Driver_Motor:A4953_LJ`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*EP2.41x3.3mm*.
 * @see www.allegromicro.com/~/media/Files/Datasheets/A4952-3-Datasheet.ashx?la=en
 * Keywords: Full-bridge h-bridge.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.3mm.
 */
export class A4953_LJ extends Component.withPins({
  "GND": "1",
  "IN2": "2",
  "IN1": "3",
  "VREF": "4",
  "VBB": "5",
  "OUT1": "6",
  "LSS": "7",
  "OUT2": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN2: "input", IN1: "input", VREF: "passive", VBB: "power_in", OUT1: "power_out", LSS: "power_in", OUT2: "power_out", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:A4953_LJ";
  override referencePrefix = "U";
}

/**
 * Fullbridge PWM Motor Driver, UVLO, OCP, Current Limit, Short Circuit Protection, TSSOP-16
 *
 * KiCad symbol: `Driver_Motor:A4954`. Reference prefix: `U`.
 * Footprint filters: TSSOP*1EP*4.4x5mm*P0.65mm*.
 * @see https://www.allegromicro.com/-/media/Files/Datasheets/A4954-Datasheet.ashx
 * Keywords: Fullbridge, Stepper Driver.
 * Default footprint: Package_SO:TSSOP-16-1EP_4.4x5mm_P0.65mm_EP3x3mm.
 */
export class A4954 extends Component.withPins({
  "GND_1": "1",
  "VREF34": "2",
  "IN3": "3",
  "IN4": "4",
  "IN2": "5",
  "IN1": "6",
  "VREF12": "7",
  "GND_8": "8",
  "VBB_9": "9",
  "OUT1": "10",
  "LSS12": "11",
  "OUT2": "12",
  "OUT3": "13",
  "LSS34": "14",
  "OUT4": "15",
  "VBB_16": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VREF34: "input", IN3: "input", IN4: "input", IN2: "input", IN1: "input", VREF12: "input", GND_8: "passive", VBB_9: "power_in", OUT1: "power_out", LSS12: "power_in", OUT2: "power_out", OUT3: "power_out", LSS34: "power_in", OUT4: "power_out", VBB_16: "passive", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:A4954";
  override referencePrefix = "U";
}

/**
 * 3-Phase BLDC Controller and MOSFET Driver, QFN-48
 *
 * KiCad symbol: `Driver_Motor:AMT49413`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.allegromicro.com/-/media/Files/Datasheets/AMT49413-Datasheet.ashx
 * Keywords: BLDC 3-Phase.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm_ThermalVias.
 */
export class AMT49413 extends Component.withPins({
  "N.C._1": "1",
  "~{RESET}": "2",
  "V5DB": "3",
  "V5": "4",
  "FF2": "5",
  "FF1": "6",
  "TACHO": "7",
  "BRAKE": "8",
  "DIR": "9",
  "H1": "10",
  "H2": "11",
  "H3": "12",
  "N.C._13": "13",
  "PWM": "14",
  "MODE": "15",
  "RC": "16",
  "TEST": "17",
  "RDEAD": "18",
  "CSOUT": "19",
  "REF": "20",
  "CSN": "21",
  "CSP": "22",
  "VDSTH": "23",
  "VDRAIN": "24",
  "SC": "25",
  "GHC": "26",
  "CC": "27",
  "SB": "28",
  "GHB": "29",
  "CB": "30",
  "SA": "31",
  "GHA": "32",
  "CA": "33",
  "GLC": "34",
  "GLB": "35",
  "GLA": "36",
  "N.C._37": "37",
  "LSS": "38",
  "ESF": "39",
  "VREG": "40",
  "GND_41": "41",
  "CP1": "42",
  "CP2": "43",
  "DIRO": "44",
  "VBB": "45",
  "COAST": "46",
  "N.C._47": "47",
  "N.C._48": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "N.C._1": "no_connect", "~{RESET}": "input", V5DB: "power_out", V5: "power_out", FF2: "open_collector", FF1: "open_collector", TACHO: "output", BRAKE: "input", DIR: "input", H1: "input", H2: "input", H3: "input", "N.C._13": "no_connect", PWM: "input", MODE: "input", RC: "passive", TEST: "input", RDEAD: "passive", CSOUT: "input", REF: "input", CSN: "input", CSP: "input", VDSTH: "input", VDRAIN: "power_in", SC: "input", GHC: "output", CC: "passive", SB: "input", GHB: "output", CB: "passive", SA: "input", GHA: "output", CA: "passive", GLC: "output", GLB: "output", GLA: "output", "N.C._37": "no_connect", LSS: "input", ESF: "input", VREG: "power_out", GND_41: "power_in", CP1: "passive", CP2: "passive", DIRO: "output", VBB: "power_in", COAST: "input", "N.C._47": "no_connect", "N.C._48": "no_connect", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:AMT49413";
  override referencePrefix = "U";
}

/**
 * H-Bridge brushed DC motor driver driver with current limit, 6A, 3..30Vm, 110mOhm RDSon, 30kHz PWM, SO-8
 *
 * KiCad symbol: `Driver_Motor:CP3119M`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://lcsc.com/datasheet/lcsc_datasheet_2504101957_XBLW-CP3119MDTR-XBLW_C42395499.pdf
 * Keywords: full-bridge driver XLBW Xinbole.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class CP3119M extends Component.withPins({
  "FO_6": "6",
  "BO_8": "8",
  "BI": "1",
  "FI": "2",
  "GND": "3",
  "VCC": "4",
  "FO_5": "5",
  "BO_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FO_6: "passive", BO_8: "passive", BI: "input", FI: "input", GND: "power_in", VCC: "power_in", FO_5: "power_out", BO_7: "power_out", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:CP3119M";
  override referencePrefix = "U";
}

/**
 * H-Bridge brushed DC motor driver driver with current limit, 5A, 3..18Vm, 71mOhm RDSon, 30kHz PWM input, SO-8
 *
 * KiCad symbol: `Driver_Motor:CP2119L`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://lcsc.com/datasheet/lcsc_datasheet_2504101957_XBLW-CP2119LDTR-XBLW_C42395498.pdf
 * Keywords: full-bridge driver XLBW Xinbole.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class CP2119L extends Component.withPins({
  "FO_6": "6",
  "BO_8": "8",
  "BI": "1",
  "FI": "2",
  "GND": "3",
  "VCC": "4",
  "FO_5": "5",
  "BO_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FO_6: "passive", BO_8: "passive", BI: "input", FI: "input", GND: "power_in", VCC: "power_in", FO_5: "power_out", BO_7: "power_out", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:CP2119L";
  override referencePrefix = "U";
}

/**
 * H-Bridge driver, 1A, Low Voltage, PWM input, WSON-8
 *
 * KiCad symbol: `Driver_Motor:DRV8837C`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8837c.pdf
 * Keywords: half bridge driver.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 */
export class DRV8837C extends Component.withPins({
  "VM": "1",
  "OUT1": "2",
  "OUT2": "3",
  "GND_4": "4",
  "IN2": "5",
  "IN1": "6",
  "~{SLEEP}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VM: "power_in", OUT1: "output", OUT2: "output", GND_4: "power_in", IN2: "input", IN1: "input", "~{SLEEP}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8837C";
  override referencePrefix = "U";
}

/**
 * H-Bridge driver, 4A, Low Voltage, PWM input, WSON-8
 *
 * KiCad symbol: `Driver_Motor:DRV8212P`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8212p.pdf
 * Keywords: half bridge driver.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm_ThermalVias.
 */
export class DRV8212P extends Component.withPins({
  "VM": "1",
  "OUT1": "2",
  "OUT2": "3",
  "GND_4": "4",
  "IN2": "5",
  "IN1": "6",
  "~{SLEEP}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VM: "power_in", OUT1: "output", OUT2: "output", GND_4: "power_in", IN2: "input", IN1: "input", "~{SLEEP}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8212P";
  override referencePrefix = "U";
}

/**
 * H-Bridge motor driver, 4.5..18V, 1.76A, SOT-563
 *
 * KiCad symbol: `Driver_Motor:DRV8220DRL`. Reference prefix: `U`.
 * Footprint filters: SOT*563*.
 * @see https://www.ti.com/lit/ds/symlink/drv8220.pdf
 * Keywords: PWM low-power-sleep.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class DRV8220DRL extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "GND": "3",
  "OUT2": "4",
  "VM": "5",
  "OUT1": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", IN2: "input", GND: "power_in", OUT2: "output", VM: "power_in", OUT1: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8220DRL";
  override referencePrefix = "U";
}

/**
 * H-Bridge motor driver, 4.5..18V, 1.76A, selectable control interface, WSON-8
 *
 * KiCad symbol: `Driver_Motor:DRV8220DSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*EP*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8220.pdf
 * Keywords: PWM PH/EN half-bridge low-power-sleep.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 */
export class DRV8220DSG extends Component.withPins({
  "VM": "1",
  "OUT1": "2",
  "OUT2": "3",
  "GND_4": "4",
  "IN2/EN": "5",
  "IN1/PH": "6",
  "MODE": "7",
  "~{SLEEP}": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VM: "power_in", OUT1: "output", OUT2: "output", GND_4: "power_in", "IN2/EN": "input", "IN1/PH": "input", MODE: "input", "~{SLEEP}": "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8220DSG";
  override referencePrefix = "U";
}

/**
 * H-Bridge brushed DC motor driver driver, 3.7Apk,  4.5..33Vm, 600mOhm shunt, integrated current mirror, PWM input, WSON-8
 *
 * KiCad symbol: `Driver_Motor:DRV8231ADSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8231a.pdf
 * Keywords: half bridge driver.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 */
export class DRV8231ADSG extends Component.withPins({
  "IPROPI": "1",
  "IN2": "2",
  "IN1": "3",
  "VREF": "4",
  "VM": "5",
  "OUT1": "6",
  "GND_7": "7",
  "OUT2": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IPROPI: "output", IN2: "input", IN1: "input", VREF: "input", VM: "power_in", OUT1: "output", GND_7: "power_in", OUT2: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8231ADSG";
  override referencePrefix = "U";
}

/**
 * Brushless DC motor controller, closed loop, hall sensor inputs, current limiting, SPI interface
 *
 * KiCad symbol: `Driver_Motor:DRV8308`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040E*.
 * @see http://www.ti.com/lit/ds/symlink/drv8308.pdf
 * Keywords: bldc mosfet-driver hall-sensor.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040E_VQFN-40-1EP_6x6mm_P0.5mm_EP3.52x2.62mm.
 */
export class DRV8308 extends Component.withPins({
  "UHP": "1",
  "UHN": "2",
  "VHP": "3",
  "VHN": "4",
  "WHP": "5",
  "WHN": "6",
  "VSW": "7",
  "FGFB": "8",
  "FGINN_TACH": "9",
  "FGINP": "10",
  "SCLK": "11",
  "SCS": "12",
  "SMODE": "13",
  "SDATAI": "14",
  "SDATAO": "15",
  "FGOUT": "16",
  "~{FAULTn}": "17",
  "~{LOCKn}": "18",
  "CLKIN": "19",
  "BRAKE": "20",
  "DIR": "21",
  "ENABLE": "22",
  "RESET": "23",
  "VREG": "24",
  "VINT": "25",
  "GND_26": "26",
  "VM": "27",
  "VCP": "28",
  "CP2": "29",
  "CP1": "30",
  "ISEN": "31",
  "UHSG": "32",
  "U": "33",
  "ULSG": "34",
  "VHSG": "35",
  "V": "36",
  "VLSG": "37",
  "WHSG": "38",
  "W": "39",
  "WLSG": "40",
  "GND_41": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { UHP: "input", UHN: "input", VHP: "input", VHN: "input", WHP: "input", WHN: "input", VSW: "power_out", FGFB: "output", FGINN_TACH: "input", FGINP: "bidirectional", SCLK: "input", SCS: "input", SMODE: "input", SDATAI: "input", SDATAO: "output", FGOUT: "output", "~{FAULTn}": "output", "~{LOCKn}": "output", CLKIN: "input", BRAKE: "input", DIR: "input", ENABLE: "input", RESET: "input", VREG: "power_out", VINT: "passive", GND_26: "power_in", VM: "power_in", VCP: "passive", CP2: "passive", CP1: "passive", ISEN: "input", UHSG: "output", U: "input", ULSG: "output", VHSG: "output", V: "input", VLSG: "output", WHSG: "output", W: "input", WLSG: "output", GND_41: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8308";
  override referencePrefix = "U";
}

/**
 * Three-Phase PWM Motor Driver, 3-20V supply, 5A peak current, hardware interface, WQFN-24
 *
 * KiCad symbol: `Driver_Motor:DRV8311H`. Reference prefix: `U`.
 * Footprint filters: *WQFN*3x3mm?P0.4mm?EP1.9*x1.9*mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8311.pdf
 * Keywords: Texas-Instruments brushless-DC-motor-driver BLDC.
 * Default footprint: Package_DFN_QFN:Texas_RRW0024A_WQFN-24-1EP_3x3mm_P0.4mm_EP1.9x1.9mm.
 */
export class DRV8311H extends Component.withPins({
  "~{FAULT}": "1",
  "CSAREF": "2",
  "SOC": "3",
  "SOB": "4",
  "SOA": "5",
  "CP": "6",
  "VIN_AVDD": "7",
  "VM": "8",
  "PGND_9": "9",
  "OUTA": "10",
  "OUTB": "11",
  "OUTC": "12",
  "INHC": "13",
  "INHB": "14",
  "INHA": "15",
  "AGND": "16",
  "AVDD": "17",
  "INLA": "18",
  "INLB": "19",
  "INLC": "20",
  "GAIN": "21",
  "SLEW": "22",
  "MODE": "23",
  "~{SLEEP}": "24",
  "PGND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{FAULT}": "open_collector", CSAREF: "input", SOC: "output", SOB: "output", SOA: "output", CP: "input", VIN_AVDD: "power_in", VM: "power_in", PGND_9: "power_in", OUTA: "tri_state", OUTB: "tri_state", OUTC: "tri_state", INHC: "input", INHB: "input", INHA: "input", AGND: "power_in", AVDD: "power_out", INLA: "input", INLB: "input", INLC: "input", GAIN: "input", SLEW: "input", MODE: "input", "~{SLEEP}": "input", PGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8311H";
  override referencePrefix = "U";
}

/**
 * Three-Phase PWM Motor Driver, 3-20V supply, 5A peak current, SPI / tSPI interface, WQFN-24
 *
 * KiCad symbol: `Driver_Motor:DRV8311P`. Reference prefix: `U`.
 * Footprint filters: *WQFN*3x3mm?P0.4mm?EP1.9*x1.9*mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8311.pdf
 * Keywords: Texas-Instruments brushless-DC-motor-driver BLDC.
 * Default footprint: Package_DFN_QFN:Texas_RRW0024A_WQFN-24-1EP_3x3mm_P0.4mm_EP1.9x1.9mm.
 */
export class DRV8311P extends Component.withPins({
  "~{FAULT}": "1",
  "CSAREF": "2",
  "SOC": "3",
  "SOB": "4",
  "SOA": "5",
  "CP": "6",
  "VIN_AVDD": "7",
  "VM": "8",
  "PGND_9": "9",
  "OUTA": "10",
  "OUTB": "11",
  "OUTC": "12",
  "NC_13": "13",
  "AD1": "14",
  "AD0": "15",
  "AGND": "16",
  "AVDD": "17",
  "NC_18": "18",
  "PWM_SYNC": "19",
  "~{SCS}": "20",
  "SDO": "21",
  "SDI": "22",
  "SCLK": "23",
  "~{SLEEP}": "24",
  "PGND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{FAULT}": "open_collector", CSAREF: "input", SOC: "output", SOB: "output", SOA: "output", CP: "input", VIN_AVDD: "power_in", VM: "power_in", PGND_9: "power_in", OUTA: "tri_state", OUTB: "tri_state", OUTC: "tri_state", NC_13: "no_connect", AD1: "input", AD0: "input", AGND: "power_in", AVDD: "power_out", NC_18: "no_connect", PWM_SYNC: "input", "~{SCS}": "input", SDO: "tri_state", SDI: "input", SCLK: "input", "~{SLEEP}": "input", PGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8311P";
  override referencePrefix = "U";
}

/**
 * Three-Phase PWM Motor Driver, 3-20V supply, 5A peak current, SPI interface, WQFN-24
 *
 * KiCad symbol: `Driver_Motor:DRV8311S`. Reference prefix: `U`.
 * Footprint filters: *WQFN*3x3mm?P0.4mm?EP1.9*x1.9*mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8311.pdf
 * Keywords: Texas-Instruments brushless-DC-motor-driver BLDC.
 * Default footprint: Package_DFN_QFN:Texas_RRW0024A_WQFN-24-1EP_3x3mm_P0.4mm_EP1.9x1.9mm.
 */
export class DRV8311S extends Component.withPins({
  "~{FAULT}": "1",
  "CSAREF": "2",
  "SOC": "3",
  "SOB": "4",
  "SOA": "5",
  "CP": "6",
  "VIN_AVDD": "7",
  "VM": "8",
  "PGND_9": "9",
  "OUTA": "10",
  "OUTB": "11",
  "OUTC": "12",
  "INHC": "13",
  "INHB": "14",
  "INHA": "15",
  "AGND": "16",
  "AVDD": "17",
  "INLA": "18",
  "INLB": "19",
  "INLC": "20",
  "SDO": "21",
  "SDI": "22",
  "SCLK": "23",
  "~{SCS}": "24",
  "PGND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{FAULT}": "open_collector", CSAREF: "input", SOC: "output", SOB: "output", SOA: "output", CP: "input", VIN_AVDD: "power_in", VM: "power_in", PGND_9: "power_in", OUTA: "tri_state", OUTB: "tri_state", OUTC: "tri_state", INHC: "input", INHB: "input", INHA: "input", AGND: "power_in", AVDD: "power_out", INLA: "input", INLB: "input", INLC: "input", SDO: "tri_state", SDI: "input", SCLK: "input", "~{SCS}": "input", PGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8311S";
  override referencePrefix = "U";
}

/**
 * Dual Full-Bridge PWM Motor Driver 50V 2x6A Peak, HTSSOP-44 EP ThermalVias
 *
 * KiCad symbol: `Driver_Motor:DRV8412`. Reference prefix: `U`.
 * Footprint filters: *HTSSOP*44*6.1x14mm*P0.635mm*EP*ThermalVias*.
 * @see https://www.ti.com/lit/gpn/DRV8412
 * Keywords: Dual Full-Bridge PWM Motor Driver.
 * Default footprint: Package_SO:HTSSOP-44-1EP_6.1x14mm_P0.635mm_EP5.2x14mm_Mask4.31x8.26mm_ThermalVias.
 */
export class DRV8412 extends Component.withPins({
  "GVDD_C": "1",
  "VDD": "2",
  "NC/GND_3": "3",
  "NC/GND_4": "4",
  "PWM_D": "5",
  "~{RESET_CD}": "6",
  "PWM_C": "7",
  "M1": "8",
  "M2": "9",
  "M3": "10",
  "VREG": "11",
  "AGND": "12",
  "GND": "13",
  "OC_ADJ": "14",
  "PWM_B": "15",
  "~{RESET_AB}": "16",
  "PWM_A": "17",
  "~{FAULT}": "18",
  "NC/GND_19": "19",
  "NC/GND_20": "20",
  "~{OTW}": "21",
  "GVDD_B": "22",
  "GVDD_A": "23",
  "BST_A": "24",
  "NC/GND_25": "25",
  "PVDD_A_26": "26",
  "PVDD_A_27": "27",
  "OUT_A": "28",
  "GND_A": "29",
  "GND_B": "30",
  "OUT_B": "31",
  "PVDD_B": "32",
  "BST_B": "33",
  "BST_C": "34",
  "PVDD_C": "35",
  "OUT_C": "36",
  "GND_C": "37",
  "GND_D": "38",
  "OUT_D": "39",
  "PVDD_D_40": "40",
  "PVDD_D_41": "41",
  "NC/GND_42": "42",
  "BST_D": "43",
  "GVDD_D": "44",
  "EP": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GVDD_C: "power_in", VDD: "power_in", "NC/GND_3": "passive", "NC/GND_4": "passive", PWM_D: "input", "~{RESET_CD}": "input", PWM_C: "input", M1: "input", M2: "input", M3: "input", VREG: "output", AGND: "power_in", GND: "power_in", OC_ADJ: "input", PWM_B: "input", "~{RESET_AB}": "input", PWM_A: "input", "~{FAULT}": "open_collector", "NC/GND_19": "passive", "NC/GND_20": "passive", "~{OTW}": "open_collector", GVDD_B: "power_in", GVDD_A: "power_in", BST_A: "input", "NC/GND_25": "passive", PVDD_A_26: "power_in", PVDD_A_27: "power_in", OUT_A: "output", GND_A: "power_in", GND_B: "power_in", OUT_B: "output", PVDD_B: "power_in", BST_B: "input", BST_C: "input", PVDD_C: "power_in", OUT_C: "output", GND_C: "power_in", GND_D: "power_in", OUT_D: "output", PVDD_D_40: "power_in", PVDD_D_41: "power_in", "NC/GND_42": "passive", BST_D: "input", GVDD_D: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8412";
  override referencePrefix = "U";
}

/**
 * Dual Full-Bridge PWM Motor Driver 50V 2x12A Peak, HSOP-36, Slug-up
 *
 * KiCad symbol: `Driver_Motor:DRV8432`. Reference prefix: `U`.
 * Footprint filters: *HSOP*11.0x15.9mm*P0.65mm*SlugUp*.
 * @see https://www.ti.com/lit/gpn/DRV8412
 * Keywords: Dual Full-Bridge PWM Motor Driver.
 * Default footprint: Package_SO:HSOP-36-1EP_11.0x15.9mm_P0.65mm_SlugUp.
 */
export class DRV8432 extends Component.withPins({
  "GVDD_B": "1",
  "~{OTW}": "2",
  "~{FAULT}": "3",
  "PWM_A": "4",
  "~{RESET_AB}": "5",
  "PWM_B": "6",
  "OC_ADJ": "7",
  "GND": "8",
  "AGND": "9",
  "VREG": "10",
  "M3": "11",
  "M2": "12",
  "M1": "13",
  "PWM_C": "14",
  "~{RESET_CD}": "15",
  "PWM_D": "16",
  "VDD": "17",
  "GVDD_C": "18",
  "GVDD_D": "19",
  "BST_D": "20",
  "PVDD_D": "21",
  "OUT_D": "22",
  "GND_D": "23",
  "GND_C": "24",
  "OUT_C": "25",
  "PVDD_C": "26",
  "BST_C": "27",
  "BST_B": "28",
  "PVDD_B": "29",
  "OUT_B": "30",
  "GND_B": "31",
  "GND_A": "32",
  "OUT_A": "33",
  "PVDD_A": "34",
  "BST_A": "35",
  "GVDD_A": "36",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GVDD_B: "power_in", "~{OTW}": "open_collector", "~{FAULT}": "open_collector", PWM_A: "input", "~{RESET_AB}": "input", PWM_B: "input", OC_ADJ: "input", GND: "power_in", AGND: "power_in", VREG: "output", M3: "input", M2: "input", M1: "input", PWM_C: "input", "~{RESET_CD}": "input", PWM_D: "input", VDD: "power_in", GVDD_C: "power_in", GVDD_D: "power_in", BST_D: "input", PVDD_D: "power_in", OUT_D: "output", GND_D: "power_in", GND_C: "power_in", OUT_C: "output", PVDD_C: "power_in", BST_C: "input", BST_B: "input", PVDD_B: "power_in", OUT_B: "output", GND_B: "power_in", GND_A: "power_in", OUT_A: "output", PVDD_A: "power_in", BST_A: "input", GVDD_A: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8432";
  override referencePrefix = "U";
}

/**
 * 48V, 2.5A, bipolar stepper motor driver, 1/256 microstepping, integrated current sensing, STEP/DIR interface, HTSSOP-28 (Texas PWP0028M)
 *
 * KiCad symbol: `Driver_Motor:DRV8434PWP`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x9.7mm?P0.65mm*3.1x4.05mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8434.pdf
 * Keywords: Texas-Instruments PWM.
 * Default footprint: Package_SO:TSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP3.4x9.7mm_Mask3.1x4.05mm_ThermalVias.
 */
export class DRV8434PWP extends Component.withPins({
  "VCP": "1",
  "GND": "14",
  "DVDD": "15",
  "~{FAULT}": "16",
  "VREF": "17",
  "M0": "18",
  "TOFF": "19",
  "DECAY1": "20",
  "DECAY0": "21",
  "M1": "22",
  "STEP": "23",
  "DIR": "24",
  "ENABLE": "25",
  "~{SLEEP}": "26",
  "CPL": "27",
  "CPH": "28",
  "PAD": "29",
  "VM": "[2,13]",
  "PGND": "[3,12]",
  "AOUT1": "[4,5]",
  "AOUT2": "[6,7]",
  "BOUT2": "[8,9]",
  "BOUT1": "[10,11]",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCP: "power_out", GND: "power_in", DVDD: "power_out", "~{FAULT}": "open_collector", VREF: "input", M0: "input", TOFF: "input", DECAY1: "input", DECAY0: "input", M1: "input", STEP: "input", DIR: "input", ENABLE: "input", "~{SLEEP}": "input", CPL: "passive", CPH: "passive", PAD: "power_in", VM: "power_in", PGND: "power_in", AOUT1: "tri_state", AOUT2: "tri_state", BOUT2: "tri_state", BOUT1: "tri_state", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8434PWP";
  override referencePrefix = "U";
}

/**
 * 65V, 3A SPI Stepper motor controller with integrated MOSFETs, automatic torque, automatic microstep, HTSSOP-28
 *
 * KiCad symbol: `Driver_Motor:DRV8461SPWP`. Reference prefix: `U`.
 * Footprint filters: Texas*PWP*.
 * @see https://www.ti.com/lit/ds/symlink/drv8461.pdf
 * Keywords: texas ti microstep driver silent STEP DIR.
 * Default footprint: Package_SO:Texas_PWP0020A.
 */
export class DRV8461SPWP extends Component.withPins({
  "VCP": "1",
  "GND_3": "3",
  "AOUT1_4": "4",
  "AOUT2_6": "6",
  "BOUT2_8": "8",
  "BOUT1_10": "10",
  "~{FAULT}": "16",
  "VREF": "17",
  "~{SCS}": "18",
  "VCC": "19",
  "SDO": "20",
  "SDI": "21",
  "SCLK": "22",
  "STEP": "23",
  "DIR": "24",
  "ENABLE": "25",
  "~{SLEEP}": "26",
  "CPL": "27",
  "CPH": "28",
  "VM_2": "2",
  "AOUT1_5": "5",
  "AOUT2_7": "7",
  "BOUT2_9": "9",
  "BOUT1_11": "11",
  "GND_12": "12",
  "VM_13": "13",
  "GND_14": "14",
  "DVDD": "15",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCP: "input", GND_3: "power_in", AOUT1_4: "output", AOUT2_6: "output", BOUT2_8: "output", BOUT1_10: "output", "~{FAULT}": "open_collector", VREF: "input", "~{SCS}": "input", VCC: "power_in", SDO: "output", SDI: "input", SCLK: "input", STEP: "input", DIR: "input", ENABLE: "input", "~{SLEEP}": "input", CPL: "input", CPH: "input", VM_2: "power_in", AOUT1_5: "passive", AOUT2_7: "passive", BOUT2_9: "passive", BOUT1_11: "passive", GND_12: "passive", VM_13: "passive", GND_14: "passive", DVDD: "power_out", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8461SPWP";
  override referencePrefix = "U";
}

/**
 * Piezo Haptic Driver with Integrated Boost Converter
 *
 * KiCad symbol: `Driver_Motor:DRV8662`. Reference prefix: `U`.
 * Footprint filters: Texas*RGP0020D*.
 * @see http://www.ti.com/lit/ds/symlink/drv8662.pdf
 * Keywords: piezo driver boost.
 * Default footprint: Package_DFN_QFN:Texas_RGP0020D_VQFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class DRV8662 extends Component.withPins({
  "VPUMP": "1",
  "VDD": "2",
  "FB": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "SW_7": "7",
  "SW_8": "8",
  "NC": "9",
  "VBST_10": "10",
  "VBST_11": "11",
  "PVDD": "12",
  "OUT+": "13",
  "OUT-": "14",
  "REXT": "15",
  "IN-": "16",
  "IN+": "17",
  "GAIN0": "18",
  "GAIN1": "19",
  "EN": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPUMP: "output", VDD: "power_in", FB: "input", GND_4: "power_in", GND_5: "passive", GND_6: "passive", SW_7: "input", SW_8: "input", NC: "no_connect", VBST_10: "power_out", VBST_11: "passive", PVDD: "power_in", "OUT+": "output", "OUT-": "output", REXT: "input", "IN-": "input", "IN+": "input", GAIN0: "input", GAIN1: "input", EN: "input", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8662";
  override referencePrefix = "U";
}

/**
 * H-Bridge Motor Driver, TSSOP-16
 *
 * KiCad symbol: `Driver_Motor:DRV8800PWP`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8801.pdf
 * Keywords: H-Bridge Motor Driver.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask3x3mm_ThermalVias.
 */
export class DRV8800PWP extends Component.withPins({
  "~{FAULT}": "1",
  "MODE": "2",
  "PHASE": "3",
  "GND_4": "4",
  "~{SLEEP}": "5",
  "ENABLE": "6",
  "OUT+": "7",
  "SENSE": "8",
  "VBB": "9",
  "OUT-": "10",
  "CP1": "11",
  "CP2": "12",
  "GND_13": "13",
  "VCP": "14",
  "VREG": "15",
  "NC": "16",
  "GND(PPAD)": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{FAULT}": "open_collector", MODE: "input", PHASE: "input", GND_4: "power_in", "~{SLEEP}": "input", ENABLE: "input", "OUT+": "power_out", SENSE: "power_out", VBB: "power_in", "OUT-": "power_out", CP1: "power_in", CP2: "power_in", GND_13: "passive", VCP: "power_in", VREG: "output", NC: "no_connect", "GND(PPAD)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8800PWP";
  override referencePrefix = "U";
}

/**
 * H-Bridge Motor Driver, WQFN-16
 *
 * KiCad symbol: `Driver_Motor:DRV8800RTY`. Reference prefix: `U`.
 * Footprint filters: Texas*RTY*EP2.1x2.1mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8801.pdf
 * Keywords: H-Bridge Motor Driver.
 * Default footprint: Package_DFN_QFN:Texas_RTY_WQFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm_ThermalVias.
 */
export class DRV8800RTY extends Component.withPins({
  "PHASE": "1",
  "GND_2": "2",
  "~{SLEEP}": "3",
  "ENABLE": "4",
  "NC": "5",
  "OUT+": "6",
  "SENSE": "7",
  "VBB": "8",
  "OUT-": "9",
  "CP1": "10",
  "CP2": "11",
  "GND_12": "12",
  "VCP": "13",
  "VREG": "14",
  "~{FAULT}": "15",
  "MODE": "16",
  "GND(PPAD)": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PHASE: "input", GND_2: "power_in", "~{SLEEP}": "input", ENABLE: "input", NC: "no_connect", "OUT+": "power_out", SENSE: "power_out", VBB: "power_in", "OUT-": "power_out", CP1: "power_in", CP2: "power_in", GND_12: "passive", VCP: "power_in", VREG: "output", "~{FAULT}": "open_collector", MODE: "input", "GND(PPAD)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8800RTY";
  override referencePrefix = "U";
}

/**
 * H-Bridge Motor Driver, TSSOP-16
 *
 * KiCad symbol: `Driver_Motor:DRV8801PWP`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8801.pdf
 * Keywords: H-Bridge Motor Driver.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask3x3mm_ThermalVias.
 */
export class DRV8801PWP extends Component.withPins({
  "~{FAULT}": "1",
  "MODE1": "2",
  "PHASE": "3",
  "GND_4": "4",
  "~{SLEEP}": "5",
  "ENABLE": "6",
  "OUT+": "7",
  "SENSE": "8",
  "VBB": "9",
  "OUT-": "10",
  "CP1": "11",
  "CP2": "12",
  "GND_13": "13",
  "VCP": "14",
  "VPROPI": "15",
  "MODE2": "16",
  "GND(PPAD)": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{FAULT}": "open_collector", MODE1: "input", PHASE: "input", GND_4: "power_in", "~{SLEEP}": "input", ENABLE: "input", "OUT+": "power_out", SENSE: "power_out", VBB: "power_in", "OUT-": "power_out", CP1: "power_in", CP2: "power_in", GND_13: "passive", VCP: "power_in", VPROPI: "output", MODE2: "input", "GND(PPAD)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8801PWP";
  override referencePrefix = "U";
}

/**
 * H-Bridge Motor Driver, WQFN-16
 *
 * KiCad symbol: `Driver_Motor:DRV8801RTY`. Reference prefix: `U`.
 * Footprint filters: Texas*RTY*EP2.1x2.1mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8801.pdf
 * Keywords: H-Bridge Motor Driver.
 * Default footprint: Package_DFN_QFN:Texas_RTY_WQFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm_ThermalVias.
 */
export class DRV8801RTY extends Component.withPins({
  "PHASE": "1",
  "GND_2": "2",
  "~{SLEEP}": "3",
  "ENABLE": "4",
  "MODE2": "5",
  "OUT+": "6",
  "SENSE": "7",
  "VBB": "8",
  "OUT-": "9",
  "CP1": "10",
  "CP2": "11",
  "GND_12": "12",
  "VCP": "13",
  "VPROPI": "14",
  "~{FAULT}": "15",
  "MODE1": "16",
  "GND(PPAD)": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PHASE: "input", GND_2: "power_in", "~{SLEEP}": "input", ENABLE: "input", MODE2: "input", "OUT+": "power_out", SENSE: "power_out", VBB: "power_in", "OUT-": "power_out", CP1: "power_in", CP2: "power_in", GND_12: "passive", VCP: "power_in", VPROPI: "output", "~{FAULT}": "open_collector", MODE1: "input", "GND(PPAD)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8801RTY";
  override referencePrefix = "U";
}

/**
 * Dual H-Bridge Motor Driver, TSSOP-16
 *
 * KiCad symbol: `Driver_Motor:DRV8833PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8833.pdf
 * Keywords: H-bridge motor driver.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DRV8833PW extends Component.withPins({
  "~{SLEEP}": "1",
  "AOUT1": "2",
  "AISEN": "3",
  "AOUT2": "4",
  "BOUT2": "5",
  "BISEN": "6",
  "BOUT1": "7",
  "~{FAULT}": "8",
  "BIN1": "9",
  "BIN2": "10",
  "VCP": "11",
  "VM": "12",
  "GND": "13",
  "VINT": "14",
  "AIN2": "15",
  "AIN1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SLEEP}": "input", AOUT1: "power_out", AISEN: "bidirectional", AOUT2: "power_out", BOUT2: "power_out", BISEN: "bidirectional", BOUT1: "power_out", "~{FAULT}": "open_collector", BIN1: "input", BIN2: "input", VCP: "bidirectional", VM: "power_in", GND: "power_in", VINT: "power_in", AIN2: "input", AIN1: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8833PW";
  override referencePrefix = "U";
}

/**
 * Dual H-Bridge Motor Driver, HTSSOP-16
 *
 * KiCad symbol: `Driver_Motor:DRV8833PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x5mm*P0.65mm*EP3.4x5mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8833.pdf
 * Keywords: H-bridge motor driver.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask2.46x2.31mm_ThermalVias.
 */
export class DRV8833PWP extends Component.withPins({
  "~{SLEEP}": "1",
  "AOUT1": "2",
  "AISEN": "3",
  "AOUT2": "4",
  "BOUT2": "5",
  "BISEN": "6",
  "BOUT1": "7",
  "~{FAULT}": "8",
  "BIN1": "9",
  "BIN2": "10",
  "VCP": "11",
  "VM": "12",
  "GND_13": "13",
  "VINT": "14",
  "AIN2": "15",
  "AIN1": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SLEEP}": "input", AOUT1: "power_out", AISEN: "bidirectional", AOUT2: "power_out", BOUT2: "power_out", BISEN: "bidirectional", BOUT1: "power_out", "~{FAULT}": "open_collector", BIN1: "input", BIN2: "input", VCP: "bidirectional", VM: "power_in", GND_13: "power_in", VINT: "power_in", AIN2: "input", AIN1: "input", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8833PWP";
  override referencePrefix = "U";
}

/**
 * Dual H-Bridge Motor Driver, WQFN-16
 *
 * KiCad symbol: `Driver_Motor:DRV8833RTY`. Reference prefix: `U`.
 * Footprint filters: Texas*RTY*EP2.1x2.1mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8833.pdf
 * Keywords: H-bridge motor driver.
 * Default footprint: Package_DFN_QFN:Texas_RTY_WQFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm_ThermalVias.
 */
export class DRV8833RTY extends Component.withPins({
  "AISEN": "1",
  "AOUT2": "2",
  "BOUT2": "3",
  "BISEN": "4",
  "BOUT1": "5",
  "~{FAULT}": "6",
  "BIN1": "7",
  "BIN2": "8",
  "VCP": "9",
  "VM": "10",
  "GND_11": "11",
  "VINT": "12",
  "AIN2": "13",
  "AIN1": "14",
  "~{SLEEP}": "15",
  "AOUT1": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AISEN: "bidirectional", AOUT2: "power_out", BOUT2: "power_out", BISEN: "bidirectional", BOUT1: "power_out", "~{FAULT}": "open_collector", BIN1: "input", BIN2: "input", VCP: "bidirectional", VM: "power_in", GND_11: "power_in", VINT: "power_in", AIN2: "input", AIN1: "input", "~{SLEEP}": "input", AOUT1: "power_out", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8833RTY";
  override referencePrefix = "U";
}

/**
 * H-Bridge driver, 1.8A, Low Voltage, PWM input, WSON-8
 *
 * KiCad symbol: `Driver_Motor:DRV8837`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8837.pdf
 * Keywords: half bridge driver.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 */
export class DRV8837 extends Component.withPins({
  "VM": "1",
  "OUT1": "2",
  "OUT2": "3",
  "GND_4": "4",
  "IN2": "5",
  "IN1": "6",
  "~{SLEEP}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VM: "power_in", OUT1: "output", OUT2: "output", GND_4: "power_in", IN2: "input", IN1: "input", "~{SLEEP}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8837";
  override referencePrefix = "U";
}

/**
 * H-Bridge driver, 1.8A, Low Voltage, PH/EN input, WSON-8
 *
 * KiCad symbol: `Driver_Motor:DRV8838`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8837.pdf
 * Keywords: half bridge driver.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 */
export class DRV8838 extends Component.withPins({
  "VM": "1",
  "OUT1": "2",
  "OUT2": "3",
  "GND_4": "4",
  "EN": "5",
  "PH": "6",
  "~{SLEEP}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VM: "power_in", OUT1: "output", OUT2: "output", GND_4: "power_in", EN: "input", PH: "input", "~{SLEEP}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8838";
  override referencePrefix = "U";
}

/**
 * Dual H-Bridge Motor Driver, 1A, HTSSOP-16
 *
 * KiCad symbol: `Driver_Motor:DRV8847PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8847.pdf
 * Keywords: Dual H-Bridge motor driver.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask2.46x2.31mm_ThermalVias.
 */
export class DRV8847PWP extends Component.withPins({
  "~{SLEEP}": "1",
  "OUT1": "2",
  "ISEN12": "3",
  "OUT2": "4",
  "OUT4": "5",
  "ISEN34": "6",
  "OUT3": "7",
  "~{FAULT}": "8",
  "IN3": "9",
  "IN4": "10",
  "TRQ": "11",
  "VM": "12",
  "GND": "13",
  "MODE": "14",
  "IN2": "15",
  "IN1": "16",
  "PPAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SLEEP}": "input", OUT1: "output", ISEN12: "passive", OUT2: "output", OUT4: "output", ISEN34: "passive", OUT3: "output", "~{FAULT}": "open_collector", IN3: "input", IN4: "input", TRQ: "input", VM: "power_in", GND: "power_in", MODE: "input", IN2: "input", IN1: "input", PPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8847PWP";
  override referencePrefix = "U";
}

/**
 * Dual H-Bridge Motor Driver, 1A, TSSOP-16
 *
 * KiCad symbol: `Driver_Motor:DRV8847PWR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8847.pdf
 * Keywords: Dual H-Bridge motor driver.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DRV8847PWR extends Component.withPins({
  "~{SLEEP}": "1",
  "OUT1": "2",
  "ISEN12": "3",
  "OUT2": "4",
  "OUT4": "5",
  "ISEN34": "6",
  "OUT3": "7",
  "~{FAULT}": "8",
  "IN3": "9",
  "IN4": "10",
  "TRQ": "11",
  "VM": "12",
  "GND": "13",
  "MODE": "14",
  "IN2": "15",
  "IN1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SLEEP}": "input", OUT1: "output", ISEN12: "passive", OUT2: "output", OUT4: "output", ISEN34: "passive", OUT3: "output", "~{FAULT}": "open_collector", IN3: "input", IN4: "input", TRQ: "input", VM: "power_in", GND: "power_in", MODE: "input", IN2: "input", IN1: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8847PWR";
  override referencePrefix = "U";
}

/**
 * Dual H-Bridge Motor Driver, 1A, WQFN-16
 *
 * KiCad symbol: `Driver_Motor:DRV8847RTE`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8847.pdf
 * Keywords: Dual H-Bridge motor driver.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm_ThermalVias.
 */
export class DRV8847RTE extends Component.withPins({
  "ISEN12": "1",
  "OUT2": "2",
  "OUT4": "3",
  "ISEN34": "4",
  "OUT3": "5",
  "~{FAULT}": "6",
  "IN3": "7",
  "IN4": "8",
  "TRQ": "9",
  "VM": "10",
  "GND": "11",
  "MODE": "12",
  "IN2": "13",
  "IN1": "14",
  "~{SLEEP}": "15",
  "OUT1": "16",
  "PPAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ISEN12: "passive", OUT2: "output", OUT4: "output", ISEN34: "passive", OUT3: "output", "~{FAULT}": "open_collector", IN3: "input", IN4: "input", TRQ: "input", VM: "power_in", GND: "power_in", MODE: "input", IN2: "input", IN1: "input", "~{SLEEP}": "input", OUT1: "output", PPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8847RTE";
  override referencePrefix = "U";
}

/**
 * Dual H-Bridge Motor Driver, 1A, I2C Interface, TSSOP-16
 *
 * KiCad symbol: `Driver_Motor:DRV8847SPWR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/drv8847.pdf
 * Keywords: Dual H-Bridge motor driver.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DRV8847SPWR extends Component.withPins({
  "~{SLEEP}": "1",
  "OUT1": "2",
  "ISEN12": "3",
  "OUT2": "4",
  "OUT4": "5",
  "ISEN34": "6",
  "OUT3": "7",
  "~{FAULT}": "8",
  "IN3": "9",
  "IN4": "10",
  "SCL": "11",
  "VM": "12",
  "GND": "13",
  "SDA": "14",
  "IN2": "15",
  "IN1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SLEEP}": "input", OUT1: "output", ISEN12: "passive", OUT2: "output", OUT4: "output", ISEN34: "passive", OUT3: "output", "~{FAULT}": "open_collector", IN3: "input", IN4: "input", SCL: "input", VM: "power_in", GND: "power_in", SDA: "bidirectional", IN2: "input", IN1: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8847SPWR";
  override referencePrefix = "U";
}

/**
 * Dual H-Bridge motor driver, PWM controlled, single/dual brushed DC stepper, +2 to +18 VDD, TSSOP-16
 *
 * KiCad symbol: `Driver_Motor:DRV8848`. Reference prefix: `U`.
 * Footprint filters: TSSOP*1EP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8848.pdf
 * Keywords: Dual H-Bridge motor driver.
 * Default footprint: Package_SO:TSSOP-16-1EP_4.4x5mm_P0.65mm.
 */
export class DRV8848 extends Component.withPins({
  "~{SLEEP}": "1",
  "AOUT1": "2",
  "AISEN": "3",
  "AOUT2": "4",
  "BOUT2": "5",
  "BISEN": "6",
  "BOUT1": "7",
  "~{FAULT}": "8",
  "BIN1": "9",
  "BIN2": "10",
  "VREF": "11",
  "VM": "12",
  "GND_13": "13",
  "VINT": "14",
  "AIN2": "15",
  "AIN1": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SLEEP}": "input", AOUT1: "output", AISEN: "passive", AOUT2: "output", BOUT2: "output", BISEN: "passive", BOUT1: "output", "~{FAULT}": "open_collector", BIN1: "input", BIN2: "input", VREF: "input", VM: "power_in", GND_13: "power_in", VINT: "passive", AIN2: "input", AIN1: "input", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8848";
  override referencePrefix = "U";
}

/**
 * Brushed DC Motor Driver, PWM Control, 45V, 3.6A, Dynamic current limiting, HTSOP-8
 *
 * KiCad symbol: `Driver_Motor:DRV8870DDA`. Reference prefix: `U`.
 * Footprint filters: Texas*HTSOP*1EP*3.9x4.9mm*P1.27mm*EP2.95x4.9mm*Mask2.4x3.1mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8870.pdf
 * Keywords: H-bridge driver motor current limit.
 * Default footprint: Package_SO:Texas_HTSOP-8-1EP_3.9x4.9mm_P1.27mm_EP2.95x4.9mm_Mask2.4x3.1mm_ThermalVias.
 */
export class DRV8870DDA extends Component.withPins({
  "GND_1": "1",
  "IN2": "2",
  "IN1": "3",
  "VREF": "4",
  "VM": "5",
  "OUT1": "6",
  "ISEN": "7",
  "OUT2": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN2: "input", IN1: "input", VREF: "input", VM: "power_in", OUT1: "output", ISEN: "passive", OUT2: "output", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8870DDA";
  override referencePrefix = "U";
}

/**
 * Brushed DC Motor Driver, PWM Control, 45V, 3.6A, Current limiting, HTSOP-8
 *
 * KiCad symbol: `Driver_Motor:DRV8871DDA`. Reference prefix: `U`.
 * Footprint filters: Texas*HTSOP*1EP*3.9x4.9mm*P1.27mm*EP2.95x4.9mm*Mask2.4x3.1mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8871.pdf
 * Keywords: H-bridge driver motor current limit.
 * Default footprint: Package_SO:Texas_HTSOP-8-1EP_3.9x4.9mm_P1.27mm_EP2.95x4.9mm_Mask2.4x3.1mm_ThermalVias.
 */
export class DRV8871DDA extends Component.withPins({
  "GND_1": "1",
  "IN2": "2",
  "IN1": "3",
  "ILIM": "4",
  "VM": "5",
  "OUT1": "6",
  "GND_7": "7",
  "OUT2": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN2: "input", IN1: "input", ILIM: "passive", VM: "power_in", OUT1: "output", GND_7: "passive", OUT2: "output", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8871DDA";
  override referencePrefix = "U";
}

/**
 * Brushed DC Motor Driver, PWM Control, 45V, 3.6A, Current limiting, Fault Reporting, HTSOP-8
 *
 * KiCad symbol: `Driver_Motor:DRV8872DDA`. Reference prefix: `U`.
 * Footprint filters: Texas*HTSOP*1EP*3.9x4.9mm*P1.27mm*EP2.95x4.9mm*Mask2.4x3.1mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8872.pdf
 * Keywords: H-bridge driver motor current limit.
 * Default footprint: Package_SO:Texas_HTSOP-8-1EP_3.9x4.9mm_P1.27mm_EP2.95x4.9mm_Mask2.4x3.1mm_ThermalVias.
 */
export class DRV8872DDA extends Component.withPins({
  "GND_1": "1",
  "IN2": "2",
  "IN1": "3",
  "~{FAULT}": "4",
  "VM": "5",
  "OUT1": "6",
  "ISEN": "7",
  "OUT2": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN2: "input", IN1: "input", "~{FAULT}": "open_collector", VM: "power_in", OUT1: "output", ISEN: "passive", OUT2: "output", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:DRV8872DDA";
  override referencePrefix = "U";
}

/**
 * Single RPM-Based PWM Fan Controller, up to 26 kHz, 3.3V power supply, MSOP-8
 *
 * KiCad symbol: `Driver_Motor:EMC2301-x-ACZL`. Reference prefix: `U`.
 * Footprint filters: *MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/EMC2301-2-3-5-Data-Sheet-DS20006532A.pdf
 * Keywords: DRIVER MOTOR SMBus I2C 4-wire.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class EMC2301_x_ACZL extends Component.withPins({
  "SMDATA": "1",
  "SMCLK": "2",
  "VDD": "3",
  "GND": "4",
  "PWM": "5",
  "TACH": "6",
  "CLK": "7",
  "~{ALERT}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SMDATA: "bidirectional", SMCLK: "input", VDD: "power_in", GND: "power_in", PWM: "output", TACH: "input", CLK: "bidirectional", "~{ALERT}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:EMC2301-x-ACZL";
  override referencePrefix = "U";
}

/**
 * Dual RPM-Based PWM Fan Controller, up to 26 kHz, 3.3V power supply, MSOP-10
 *
 * KiCad symbol: `Driver_Motor:EMC2302-x-AIZL`. Reference prefix: `U`.
 * Footprint filters: *MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/EMC2301-2-3-5-Data-Sheet-DS20006532A.pdf
 * Keywords: DRIVER MOTOR SMBus I2C 4-wire.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class EMC2302_x_AIZL extends Component.withPins({
  "SMDATA": "1",
  "SMCLK": "2",
  "VDD": "3",
  "GND": "4",
  "PWM1": "5",
  "TACH1": "6",
  "PWM2": "7",
  "TACH2": "8",
  "CLK": "9",
  "~{ALERT}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SMDATA: "bidirectional", SMCLK: "input", VDD: "power_in", GND: "power_in", PWM1: "output", TACH1: "input", PWM2: "output", TACH2: "input", CLK: "bidirectional", "~{ALERT}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:EMC2302-x-AIZL";
  override referencePrefix = "U";
}

/**
 * Multiple RPM-Based PWM Fan Controller for 3 Fans, up to 26 kHz, 3.3V power supply, VQFN-12
 *
 * KiCad symbol: `Driver_Motor:EMC2303-x-KP`. Reference prefix: `U`.
 * Footprint filters: *VQFN*1EP*4x4mm*P0.8mm*EP2.1x2.1mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/EMC2301-2-3-5-Data-Sheet-DS20006532A.pdf
 * Keywords: DRIVER MOTOR SMBus I2C 4-wire.
 * Default footprint: Package_DFN_QFN:VQFN-12-1EP_4x4mm_P0.8mm_EP2.1x2.1mm_ThermalVias.
 */
export class EMC2303_x_KP extends Component.withPins({
  "SMDATA": "1",
  "SMCLK": "2",
  "VDD": "3",
  "ADDR_SEL": "4",
  "PWM1": "5",
  "TACH1": "6",
  "PWM2": "7",
  "TACH2": "8",
  "CLK": "9",
  "~{ALERT}": "10",
  "PWM3": "11",
  "TACH3": "12",
  "GND": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SMDATA: "bidirectional", SMCLK: "input", VDD: "power_in", ADDR_SEL: "input", PWM1: "output", TACH1: "input", PWM2: "output", TACH2: "input", CLK: "bidirectional", "~{ALERT}": "open_collector", PWM3: "output", TACH3: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:EMC2303-x-KP";
  override referencePrefix = "U";
}

/**
 * Multiple RPM-Based PWM Fan Controller for 5 Fans, up to 26 kHz, 3.3V power supply, VQFN-16
 *
 * KiCad symbol: `Driver_Motor:EMC2305-x-AP`. Reference prefix: `U`.
 * Footprint filters: *VQFN*1EP*4x4mm*P0.65mm*EP2.1x2.1mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/EMC2301-2-3-5-Data-Sheet-DS20006532A.pdf
 * Keywords: DRIVER MOTOR SMBus I2C 4-wire.
 * Default footprint: Package_DFN_QFN:Texas_RGV0016A_VQFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm_ThermalVias.
 */
export class EMC2305_x_AP extends Component.withPins({
  "SMDATA": "1",
  "SMCLK": "2",
  "VDD": "3",
  "ADDR_SEL": "4",
  "PWM1": "5",
  "TACH1": "6",
  "PWM2": "7",
  "TACH2": "8",
  "PWM3": "9",
  "TACH3": "10",
  "CLK": "11",
  "~{ALERT}": "12",
  "PWM4": "13",
  "TACH4": "14",
  "PWM5": "15",
  "TACH5": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SMDATA: "bidirectional", SMCLK: "input", VDD: "power_in", ADDR_SEL: "input", PWM1: "output", TACH1: "input", PWM2: "output", TACH2: "input", PWM3: "output", TACH3: "input", CLK: "bidirectional", "~{ALERT}": "open_collector", PWM4: "output", TACH4: "input", PWM5: "output", TACH5: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:EMC2305-x-AP";
  override referencePrefix = "U";
}

/**
 * Quadruple Half-H Drivers
 *
 * KiCad symbol: `Driver_Motor:L293`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/l293.pdf
 * Keywords: Half-H Driver Motor.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class L293 extends Component.withPins({
  "EN1,2": "1",
  "1A": "2",
  "1Y": "3",
  "GND_4": "4",
  "GND_5": "5",
  "2Y": "6",
  "2A": "7",
  "VCC2": "8",
  "EN3,4": "9",
  "3A": "10",
  "3Y": "11",
  "GND_12": "12",
  "GND_13": "13",
  "4Y": "14",
  "4A": "15",
  "VCC1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "EN1,2": "input", "1A": "input", "1Y": "output", GND_4: "power_in", GND_5: "power_in", "2Y": "output", "2A": "input", VCC2: "power_in", "EN3,4": "input", "3A": "input", "3Y": "output", GND_12: "power_in", GND_13: "power_in", "4Y": "output", "4A": "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:L293";
  override referencePrefix = "U";
}

/**
 * Quadruple Half-H Drivers
 *
 * KiCad symbol: `Driver_Motor:L293D`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/l293.pdf
 * Keywords: Half-H Driver Motor.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class L293D extends Component.withPins({
  "EN1,2": "1",
  "1A": "2",
  "1Y": "3",
  "GND_4": "4",
  "GND_5": "5",
  "2Y": "6",
  "2A": "7",
  "VCC2": "8",
  "EN3,4": "9",
  "3A": "10",
  "3Y": "11",
  "GND_12": "12",
  "GND_13": "13",
  "4Y": "14",
  "4A": "15",
  "VCC1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "EN1,2": "input", "1A": "input", "1Y": "output", GND_4: "power_in", GND_5: "power_in", "2Y": "output", "2A": "input", VCC2: "power_in", "EN3,4": "input", "3A": "input", "3Y": "output", GND_12: "power_in", GND_13: "power_in", "4Y": "output", "4A": "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:L293D";
  override referencePrefix = "U";
}

/**
 * Push-pull four-channel driver, DIP-20
 *
 * KiCad symbol: `Driver_Motor:L293E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.st.com/resource/en/datasheet/l293e.pdf
 * Keywords: Half-H Driver Motor Sense.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class L293E extends Component.withPins({
  "EN12": "1",
  "IN1": "2",
  "OUT1": "3",
  "SENSE1": "4",
  "GND_5": "5",
  "GND_6": "6",
  "SENSE2": "7",
  "OUT2": "8",
  "IN2": "9",
  "VS": "10",
  "EN34": "11",
  "IN3": "12",
  "OUT3": "13",
  "SENSE3": "14",
  "GND_15": "15",
  "GND_16": "16",
  "SENSE4": "17",
  "OUT4": "18",
  "IN4": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN12: "input", IN1: "input", OUT1: "output", SENSE1: "passive", GND_5: "power_in", GND_6: "passive", SENSE2: "passive", OUT2: "output", IN2: "input", VS: "power_in", EN34: "input", IN3: "input", OUT3: "output", SENSE3: "passive", GND_15: "passive", GND_16: "passive", SENSE4: "passive", OUT4: "output", IN4: "input", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:L293E";
  override referencePrefix = "U";
}

/**
 * Stepper Motor Controller, DIP-20/SO-20
 *
 * KiCad symbol: `Driver_Motor:L297`. Reference prefix: `U`.
 * Footprint filters: DIP*, SO*.
 * @see www.st.com/resource/en/datasheet/cd00000063.pdf
 * Keywords: Stepper Motor Controller.
 */
export class L297 extends Component.withPins({
  "CONTROL": "11",
  "Vs": "12",
  "SENS2": "13",
  "SENS1": "14",
  "Vref": "15",
  "OSC": "16",
  "CW": "17",
  "CLOCK": "18",
  "HALF": "19",
  "RESET": "20",
  "SYNC": "1",
  "GND": "2",
  "HOME": "3",
  "A": "4",
  "INH1": "5",
  "B": "6",
  "C": "7",
  "INH2": "8",
  "D": "9",
  "ENABLE": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CONTROL: "input", Vs: "power_in", SENS2: "input", SENS1: "input", Vref: "input", OSC: "input", CW: "input", CLOCK: "input", HALF: "input", RESET: "input", SYNC: "bidirectional", GND: "power_in", HOME: "open_collector", A: "output", INH1: "output", B: "output", C: "output", INH2: "output", D: "output", ENABLE: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:L297";
  override referencePrefix = "U";
}

/**
 * Dual full bridge motor driver, up to 46V, 4A, Multiwatt15-H
 *
 * KiCad symbol: `Driver_Motor:L298HN`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*TabDown*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/CD00000240.pdf
 * Keywords: H-bridge motor driver.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x2.54mm_StaggerOdd_Lead5.84mm_TabDown.
 */
export class L298HN extends Component.withPins({
  "SENSE_A": "1",
  "OUT1": "2",
  "OUT2": "3",
  "Vs": "4",
  "IN1": "5",
  "EnA": "6",
  "IN2": "7",
  "GND": "8",
  "Vss": "9",
  "IN3": "10",
  "EnB": "11",
  "IN4": "12",
  "OUT3": "13",
  "OUT4": "14",
  "SENSE_B": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SENSE_A: "input", OUT1: "output", OUT2: "output", Vs: "power_in", IN1: "input", EnA: "input", IN2: "input", GND: "power_in", Vss: "power_in", IN3: "input", EnB: "input", IN4: "input", OUT3: "output", OUT4: "output", SENSE_B: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:L298HN";
  override referencePrefix = "U";
}

/**
 * Dual full bridge motor driver, up to 46V, 4A, Multiwatt15-V
 *
 * KiCad symbol: `Driver_Motor:L298N`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*Vertical*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/CD00000240.pdf
 * Keywords: H-bridge motor driver.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class L298N extends Component.withPins({
  "SENSE_A": "1",
  "OUT1": "2",
  "OUT2": "3",
  "Vs": "4",
  "IN1": "5",
  "EnA": "6",
  "IN2": "7",
  "GND": "8",
  "Vss": "9",
  "IN3": "10",
  "EnB": "11",
  "IN4": "12",
  "OUT3": "13",
  "OUT4": "14",
  "SENSE_B": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SENSE_A: "input", OUT1: "output", OUT2: "output", Vs: "power_in", IN1: "input", EnA: "input", IN2: "input", GND: "power_in", Vss: "power_in", IN3: "input", EnB: "input", IN4: "input", OUT3: "output", OUT4: "output", SENSE_B: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:L298N";
  override referencePrefix = "U";
}

/**
 * Dual full bridge motor driver, up to 46V, 4A
 *
 * KiCad symbol: `Driver_Motor:L298P`. Reference prefix: `U`.
 * Footprint filters: Package*SO:HSOP*1EP*11.0x15.9mm*P1.27mm*SlugDown*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/CD00000240.pdf
 * Keywords: H-bridge motor driver.
 * Default footprint: Package_SO:HSOP-20-1EP_11.0x15.9mm_P1.27mm_SlugDown.
 */
export class L298P extends Component.withPins({
  "GND_1": "1",
  "SENSE_A": "2",
  "NC_3": "3",
  "OUT1": "4",
  "OUT2": "5",
  "Vs": "6",
  "IN1": "7",
  "EnA": "8",
  "IN2": "9",
  "GND_10": "10",
  "GND_11": "11",
  "Vss": "12",
  "IN3": "13",
  "EnB": "14",
  "IN4": "15",
  "OUT3": "16",
  "OUT4": "17",
  "NC_18": "18",
  "SENSE_B": "19",
  "GND_20": "20",
  "PAD": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", SENSE_A: "input", NC_3: "no_connect", OUT1: "output", OUT2: "output", Vs: "power_in", IN1: "input", EnA: "input", IN2: "input", GND_10: "power_in", GND_11: "power_in", Vss: "power_in", IN3: "input", EnB: "input", IN4: "input", OUT3: "output", OUT4: "output", NC_18: "no_connect", SENSE_B: "input", GND_20: "power_in", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:L298P";
  override referencePrefix = "U";
}

/**
 * 3A, 55V H-Bridge, Motion Control Applications, TO-220-11
 *
 * KiCad symbol: `Driver_Motor:LMD18200`. Reference prefix: `U`.
 * Footprint filters: TO?220*.
 * @see http://www.ti.com/lit/ds/symlink/lmd18200.pdf
 * Keywords: H-Bridge DC stepper servo motor driver Motion Control Applications.
 * Default footprint: Package_TO_SOT_THT:TO-220-11_P3.4x5.08mm_StaggerOdd_Lead4.85mm_Vertical.
 */
export class LMD18200 extends Component.withPins({
  "BOOTSTRAP1": "1",
  "OUTPUT1": "2",
  "DIRECTION": "3",
  "BRAKE": "4",
  "PWM": "5",
  "VS": "6",
  "GND": "7",
  "CURRENT_SENSE_OUTPUT": "8",
  "~{THERMAL_FLAG_OUTPUT}": "9",
  "OUTPUT2": "10",
  "BOOTSTRAP2": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOTSTRAP1: "passive", OUTPUT1: "output", DIRECTION: "input", BRAKE: "input", PWM: "input", VS: "power_in", GND: "power_in", CURRENT_SENSE_OUTPUT: "output", "~{THERMAL_FLAG_OUTPUT}": "open_collector", OUTPUT2: "output", BOOTSTRAP2: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:LMD18200";
  override referencePrefix = "U";
}

/**
 * 36V, 3.5A Brushed Motor Driver with Integrated Current Sense and Configurable Off Time, 12-TDFN
 *
 * KiCad symbol: `Driver_Motor:MAX22201`. Reference prefix: `U`.
 * Footprint filters: Maxim*TDFN*12*1EP*3x3mm*P0.5mm*EP1.7x2.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max22201-max22207.pdf
 * Keywords: Brushed Motor Driver.
 * Default footprint: Package_DFN_QFN:Maxim_TDFN-12-1EP_3x3mm_P0.5mm_EP1.7x2.5mm_ThermalVias.
 */
export class MAX22201 extends Component.withPins({
  "ILIM": "1",
  "ROFF": "2",
  "GNDP": "3",
  "IN1": "4",
  "IN2": "5",
  "ISEN": "6",
  "V_{18}": "7",
  "GNDA": "8",
  "OUT2": "9",
  "V_{M}": "10",
  "OUT1": "11",
  "~{FAULT}": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ILIM: "input", ROFF: "input", GNDP: "power_in", IN1: "input", IN2: "input", ISEN: "output", "V_{18}": "power_out", GNDA: "power_in", OUT2: "output", "V_{M}": "power_in", OUT1: "output", "~{FAULT}": "open_collector", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:MAX22201";
  override referencePrefix = "U";
}

/**
 * 36V, 3.5A Brushed Motor Driver with Integrated Current Sense and Enable/Phase Inputs, 12-TDFN
 *
 * KiCad symbol: `Driver_Motor:MAX22202`. Reference prefix: `U`.
 * Footprint filters: Maxim*TDFN*12*1EP*3x3mm*P0.5mm*EP1.7x2.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max22201-max22207.pdf
 * Keywords: Brushed Motor Driver.
 * Default footprint: Package_DFN_QFN:Maxim_TDFN-12-1EP_3x3mm_P0.5mm_EP1.7x2.5mm_ThermalVias.
 */
export class MAX22202 extends Component.withPins({
  "ILIM": "1",
  "MODE": "2",
  "GNDP": "3",
  "PHASE": "4",
  "ENBL": "5",
  "ISEN": "6",
  "V_{18}": "7",
  "GNDA": "8",
  "OUT2": "9",
  "V_{M}": "10",
  "OUT1": "11",
  "~{FAULT}": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ILIM: "input", MODE: "input", GNDP: "power_in", PHASE: "input", ENBL: "input", ISEN: "output", "V_{18}": "power_out", GNDA: "power_in", OUT2: "output", "V_{M}": "power_in", OUT1: "output", "~{FAULT}": "open_collector", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:MAX22202";
  override referencePrefix = "U";
}

/**
 * 36V, 3.5A Brushed Motor Driver with Integrated Current Sense and Current Driver Regulation output, 12-TDFN
 *
 * KiCad symbol: `Driver_Motor:MAX22207`. Reference prefix: `U`.
 * Footprint filters: Maxim*TDFN*12*1EP*3x3mm*P0.5mm*EP1.7x2.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max22201-max22207.pdf
 * Keywords: Brushed Motor Driver.
 * Default footprint: Package_DFN_QFN:Maxim_TDFN-12-1EP_3x3mm_P0.5mm_EP1.7x2.5mm_ThermalVias.
 */
export class MAX22207 extends Component.withPins({
  "ILIM": "1",
  "~{CDROUT}": "2",
  "GNDP": "3",
  "IN1": "4",
  "IN2": "5",
  "ISEN": "6",
  "V_{18}": "7",
  "GNDA": "8",
  "OUT2": "9",
  "V_{M}": "10",
  "OUT1": "11",
  "~{FAULT}": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ILIM: "input", "~{CDROUT}": "open_collector", GNDP: "power_in", IN1: "input", IN2: "input", ISEN: "output", "V_{18}": "power_out", GNDA: "power_in", OUT2: "output", "V_{M}": "power_in", OUT1: "output", "~{FAULT}": "open_collector", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:MAX22207";
  override referencePrefix = "U";
}

/**
 * 65V / 3.8A Quad Half H-Bridge Drivers with Integrated Current Sense, WQFN-38
 *
 * KiCad symbol: `Driver_Motor:MAX22208xTU`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x7mm*P0.5mm*EP3.6*x5.6*mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max22208.pdf
 * Keywords: Analog-Devices Maxim-Integrated.
 * Default footprint: Package_DFN_QFN:WQFN-38-1EP_5x7mm_P0.5mm_EP3.65x5.65mm_ThermalVias.
 */
export class MAX22208xTU extends Component.withPins({
  "V_{DD}": "1",
  "EN1": "2",
  "DIN1": "3",
  "EN2": "4",
  "DIN2": "5",
  "EN3": "6",
  "DIN3": "7",
  "EN4": "8",
  "DIN4": "9",
  "GND_10": "10",
  "GND_11": "11",
  "~{FAULT}": "12",
  "C_{P1}": "13",
  "C_{P2}": "14",
  "V_{CP}": "15",
  "V_{M}_16": "16",
  "~{SLEEP}": "17",
  "GND_18": "18",
  "PGND_19": "19",
  "PGND_20": "20",
  "OUT1": "21",
  "V_{M}_22": "22",
  "V_{M}_23": "23",
  "OUT2": "24",
  "PGND_25": "25",
  "PGND_26": "26",
  "OUT3": "27",
  "V_{M}_28": "28",
  "V_{M}_29": "29",
  "OUT4": "30",
  "PGND_31": "31",
  "PGND_32": "32",
  "ISEN1": "33",
  "ISEN2": "34",
  "ISEN3": "35",
  "ISEN4": "36",
  "GND_37": "37",
  "GND_38": "38",
  "GND_39": "39",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_out", EN1: "input", DIN1: "input", EN2: "input", DIN2: "input", EN3: "input", DIN3: "input", EN4: "input", DIN4: "input", GND_10: "power_in", GND_11: "passive", "~{FAULT}": "open_collector", "C_{P1}": "input", "C_{P2}": "input", "V_{CP}": "passive", "V_{M}_16": "power_in", "~{SLEEP}": "input", GND_18: "passive", PGND_19: "power_in", PGND_20: "passive", OUT1: "output", "V_{M}_22": "passive", "V_{M}_23": "passive", OUT2: "output", PGND_25: "passive", PGND_26: "passive", OUT3: "output", "V_{M}_28": "passive", "V_{M}_29": "passive", OUT4: "output", PGND_31: "passive", PGND_32: "passive", ISEN1: "output", ISEN2: "output", ISEN3: "output", ISEN4: "output", GND_37: "passive", GND_38: "passive", GND_39: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:MAX22208xTU";
  override referencePrefix = "U";
}

/**
 * 65V / 3.8A Quad Half H-Bridge Drivers with Integrated Current Sense, HTSSOP-38
 *
 * KiCad symbol: `Driver_Motor:MAX22208xUU`. Reference prefix: `U`.
 * Footprint filters: *HTSSOP*4.4x9.7mm*P0.5mm*EP3.05x6.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max22208.pdf
 * Keywords: Analog-Devices Maxim-Integrated.
 * Default footprint: Package_SO:HTSSOP-38-1EP_4.4x9.7mm_P0.5mm_EP3.05x6.65mm_ThermalVias.
 */
export class MAX22208xUU extends Component.withPins({
  "ISEN4": "1",
  "GND_2": "2",
  "GND_3": "3",
  "V_{DD}": "4",
  "EN1": "5",
  "DIN1": "6",
  "EN2": "7",
  "DIN2": "8",
  "EN3": "9",
  "DIN3": "10",
  "EN4": "11",
  "DIN4": "12",
  "GND_13": "13",
  "GND_14": "14",
  "~{FAULT}": "15",
  "C_{P1}": "16",
  "C_{P2}": "17",
  "V_{CP}": "18",
  "V_{M}_19": "19",
  "~{SLEEP}": "20",
  "GND_21": "21",
  "N.C._22": "22",
  "PGND_23": "23",
  "OUT1": "24",
  "V_{M}_25": "25",
  "V_{M}_26": "26",
  "OUT2": "27",
  "PGND_28": "28",
  "PGND_29": "29",
  "OUT3": "30",
  "V_{M}_31": "31",
  "V_{M}_32": "32",
  "OUT4": "33",
  "PGND_34": "34",
  "N.C._35": "35",
  "ISEN1": "36",
  "ISEN2": "37",
  "ISEN3": "38",
  "GND_39": "39",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ISEN4: "output", GND_2: "power_in", GND_3: "passive", "V_{DD}": "power_out", EN1: "input", DIN1: "input", EN2: "input", DIN2: "input", EN3: "input", DIN3: "input", EN4: "input", DIN4: "input", GND_13: "passive", GND_14: "passive", "~{FAULT}": "open_collector", "C_{P1}": "input", "C_{P2}": "input", "V_{CP}": "passive", "V_{M}_19": "power_in", "~{SLEEP}": "input", GND_21: "passive", "N.C._22": "no_connect", PGND_23: "power_in", OUT1: "output", "V_{M}_25": "passive", "V_{M}_26": "passive", OUT2: "output", PGND_28: "passive", PGND_29: "passive", OUT3: "output", "V_{M}_31": "passive", "V_{M}_32": "passive", OUT4: "output", PGND_34: "passive", "N.C._35": "no_connect", ISEN1: "output", ISEN2: "output", ISEN3: "output", GND_39: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:MAX22208xUU";
  override referencePrefix = "U";
}

/**
 * 3-Channel Half-Bridge Driver, 5..26V power supply, 5.5A peak current output, up to 1MHz PWM frequency, QFN-40
 *
 * KiCad symbol: `Driver_Motor:MP6536DU`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.4mm*EP3.5x3.5mm*.
 * @see https://www.monolithicpower.com/en/documentview/productdocument/index/version/2/document_type/Datasheet/lang/en/sku/MP6536/document_id/3761/
 * Keywords: BLDC 3-Phase Brushless DC Motor Controller.
 * Default footprint: Package_DFN_QFN:VQFN-40-1EP_5x5mm_P0.4mm_EP3.5x3.5mm_ThermalVias.
 */
export class MP6536DU extends Component.withPins({
  "SW2_1": "1",
  "SW2_2": "2",
  "SW1_6": "6",
  "SW1_7": "7",
  "LS1_8": "8",
  "LS1_9": "9",
  "PWM1": "12",
  "PWM2": "13",
  "~{FAULTB}": "14",
  "~{SHDNB}": "15",
  "PWM3": "16",
  "~{STBYB}": "17",
  "~{FLT3B}": "19",
  "~{FLT2B}": "20",
  "SW3_29": "29",
  "SW3_30": "30",
  "LS3_31": "31",
  "LS3_32": "32",
  "LS2_39": "39",
  "LS2_40": "40",
  "VSP_3": "3",
  "VSP_4": "4",
  "VSP_5": "5",
  "BST1": "10",
  "NC_11": "11",
  "AGND_18": "18",
  "NC_21": "21",
  "PGND_22": "22",
  "PGND_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "VSP_26": "26",
  "VSP_27": "27",
  "VSP_28": "28",
  "BST3": "33",
  "VDR2": "34",
  "AGND_35": "35",
  "AGND_36": "36",
  "VDR1": "37",
  "BST2": "38",
  "PGND_41": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW2_1: "tri_state", SW2_2: "tri_state", SW1_6: "tri_state", SW1_7: "tri_state", LS1_8: "open_emitter", LS1_9: "open_emitter", PWM1: "input", PWM2: "input", "~{FAULTB}": "open_collector", "~{SHDNB}": "input", PWM3: "input", "~{STBYB}": "input", "~{FLT3B}": "open_collector", "~{FLT2B}": "open_collector", SW3_29: "tri_state", SW3_30: "tri_state", LS3_31: "open_emitter", LS3_32: "open_emitter", LS2_39: "open_emitter", LS2_40: "open_emitter", VSP_3: "power_in", VSP_4: "passive", VSP_5: "passive", BST1: "power_in", NC_11: "no_connect", AGND_18: "power_in", NC_21: "no_connect", PGND_22: "power_in", PGND_23: "passive", NC_24: "no_connect", NC_25: "no_connect", VSP_26: "passive", VSP_27: "passive", VSP_28: "passive", BST3: "power_in", VDR2: "power_out", AGND_35: "passive", AGND_36: "passive", VDR1: "power_out", BST2: "power_in", PGND_41: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:MP6536DU";
  override referencePrefix = "U";
}

/**
 * 48V Charge Pump Motor Controller and Driver for BLDC Motors, QFN-48
 *
 * KiCad symbol: `Driver_Motor:PAC5527QM`. Reference prefix: `U`.
 * Footprint filters: Qorvo*TQFN66*1EP*6x6mm*P0.4mm*EP4.2x4.2mm*.
 * @see https://www.qorvo.com/products/d/da006847
 * Keywords: mcu motor driver.
 * Default footprint: Package_DFN_QFN:Qorvo_TQFN66-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 */
export class PAC5527QM extends Component.withPins({
  "PF2": "1",
  "PF1": "2",
  "PF0": "3",
  "VCC33": "4",
  "VSS_5": "5",
  "AIO0": "6",
  "AIO1": "7",
  "AIO2": "8",
  "AIO3": "9",
  "AIO4": "10",
  "AIO5": "11",
  "AIO6": "12",
  "AIO7": "13",
  "AIO8": "14",
  "AIO9": "15",
  "VSYS": "16",
  "VM": "17",
  "SW1": "18",
  "SW2": "19",
  "VP": "20",
  "CPL": "21",
  "CPH": "22",
  "DRL0": "23",
  "DRL1": "24",
  "DRL2": "25",
  "DRS0": "26",
  "DRH0": "27",
  "DRS1": "28",
  "DRH1": "29",
  "DRS2": "30",
  "DRH2": "31",
  "VCP": "32",
  "PD7": "33",
  "PD6": "34",
  "PD5": "35",
  "PD4": "36",
  "PE0": "37",
  "PE1": "38",
  "PE2": "39",
  "PE3": "40",
  "VCC18": "41",
  "VCORE": "42",
  "VCCIO": "43",
  "PF7": "44",
  "PF6": "45",
  "PF5": "46",
  "PF4": "47",
  "PF3": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", VCC33: "power_out", VSS_5: "power_in", AIO0: "bidirectional", AIO1: "bidirectional", AIO2: "bidirectional", AIO3: "bidirectional", AIO4: "bidirectional", AIO5: "bidirectional", AIO6: "bidirectional", AIO7: "bidirectional", AIO8: "bidirectional", AIO9: "bidirectional", VSYS: "power_out", VM: "power_in", SW1: "input", SW2: "input", VP: "power_out", CPL: "input", CPH: "input", DRL0: "output", DRL1: "output", DRL2: "output", DRS0: "output", DRH0: "output", DRS1: "output", DRH1: "output", DRS2: "output", DRH2: "output", VCP: "passive", PD7: "bidirectional", PD6: "bidirectional", PD5: "bidirectional", PD4: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", VCC18: "power_out", VCORE: "power_out", VCCIO: "power_out", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:PAC5527QM";
  override referencePrefix = "U";
}

/**
 * Parallel to serial data converter for SLA7042M/SLA7044M
 *
 * KiCad symbol: `Driver_Motor:PG001M`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://www.allegromicro.com/~/media/Files/Sanken/Datasheets/PG001M-Datasheet.ashx
 * Keywords: Support IC for SLA7042M/SLA7044M.
 */
export class PG001M extends Component.withPins({
  "~{RESET}": "1",
  "CLK_IN": "2",
  "~{CW}": "3",
  "MSEL_1": "6",
  "MSEL_2": "7",
  "GND": "8",
  "~{MONITOR}": "9",
  "DATA_B": "10",
  "DATA_A": "11",
  "~{STROBE}": "13",
  "CLK_OUT": "14",
  "VECTOR": "15",
  "Vdd": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", CLK_IN: "input", "~{CW}": "input", MSEL_1: "input", MSEL_2: "input", GND: "power_in", "~{MONITOR}": "input", DATA_B: "output", DATA_A: "output", "~{STROBE}": "output", CLK_OUT: "output", VECTOR: "input", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:PG001M";
  override referencePrefix = "U";
}

/**
 * Pololu Breakout Board, Stepper Driver A4988
 *
 * KiCad symbol: `Driver_Motor:Pololu_Breakout_A4988`. Reference prefix: `A`.
 * Footprint filters: Pololu*Breakout*15.2x20.3mm*.
 * @see https://www.pololu.com/product/2980/pictures
 * Keywords: Pololu Breakout Board Stepper Driver A4988.
 * Default footprint: Module:Pololu_Breakout-16_15.2x20.3mm.
 */
export class Pololu_Breakout_A4988 extends Component.withPins({
  "GND_1": "1",
  "VDD": "2",
  "1B": "3",
  "1A": "4",
  "2A": "5",
  "2B": "6",
  "GND_7": "7",
  "VMOT": "8",
  "~{ENABLE}": "9",
  "MS1": "10",
  "MS2": "11",
  "MS3": "12",
  "~{RESET}": "13",
  "~{SLEEP}": "14",
  "STEP": "15",
  "DIR": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD: "power_in", "1B": "output", "1A": "output", "2A": "output", "2B": "output", GND_7: "power_in", VMOT: "power_in", "~{ENABLE}": "input", MS1: "input", MS2: "input", MS3: "input", "~{RESET}": "input", "~{SLEEP}": "input", STEP: "input", DIR: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:Pololu_Breakout_A4988";
  override referencePrefix = "A";
}

/**
 * Pololu Breakout Board, Stepper Driver DRV8825
 *
 * KiCad symbol: `Driver_Motor:Pololu_Breakout_DRV8825`. Reference prefix: `A`.
 * Footprint filters: Pololu*Breakout*15.2x20.3mm*.
 * @see https://www.pololu.com/product/2982
 * Keywords: Pololu Breakout Board Stepper Driver DRV8825.
 * Default footprint: Module:Pololu_Breakout-16_15.2x20.3mm.
 */
export class Pololu_Breakout_DRV8825 extends Component.withPins({
  "GND_1": "1",
  "~{FLT}": "2",
  "A2": "3",
  "A1": "4",
  "B1": "5",
  "B2": "6",
  "GND_7": "7",
  "VMOT": "8",
  "~{EN}": "9",
  "M0": "10",
  "M1": "11",
  "M2": "12",
  "~{RST}": "13",
  "~{SLP}": "14",
  "STEP": "15",
  "DIR": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "~{FLT}": "output", A2: "output", A1: "output", B1: "output", B2: "output", GND_7: "power_in", VMOT: "power_in", "~{EN}": "input", M0: "input", M1: "input", M2: "input", "~{RST}": "input", "~{SLP}": "input", STEP: "input", DIR: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:Pololu_Breakout_DRV8825";
  override referencePrefix = "A";
}

/**
 * Unipolar PWM high-current motor driver
 *
 * KiCad symbol: `Driver_Motor:SLA7044M`. Reference prefix: `U`.
 * Footprint filters: SLA704XM*.
 * @see http://www.sumzi.com/upload/files/2007/07/2007073114282034189.PDF
 * Keywords: Stepper driver.
 * Default footprint: Package_SIP:SLA704XM.
 */
export class SLA7044M extends Component.withPins({
  "OUT_1": "1",
  "~{STROBE}_2": "2",
  "REF_3": "3",
  "Vdd_4": "4",
  "~{CLOCK}_5": "5",
  "DATA_6": "6",
  "GND_7": "7",
  "~{OUT}_8": "8",
  "RS_9": "9",
  "RS_10": "10",
  "OUT_11": "11",
  "GND_12": "12",
  "~{STROBE}_13": "13",
  "REF_14": "14",
  "Vdd_15": "15",
  "~{CLOCK}_16": "16",
  "DATA_17": "17",
  "~{OUT}_18": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "output", "~{STROBE}_2": "input", REF_3: "input", Vdd_4: "power_in", "~{CLOCK}_5": "input", DATA_6: "input", GND_7: "power_in", "~{OUT}_8": "output", RS_9: "input", RS_10: "input", OUT_11: "output", GND_12: "power_in", "~{STROBE}_13": "input", REF_14: "input", Vdd_15: "power_in", "~{CLOCK}_16": "input", DATA_17: "input", "~{OUT}_18": "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7044M";
  override referencePrefix = "U";
}

/**
 * Unipolar PWM high-current motor driver
 *
 * KiCad symbol: `Driver_Motor:SLA7042M`. Reference prefix: `U`.
 * Footprint filters: SLA704XM*.
 * @see www.sumzi.com/upload/files/2007/07/2007073114282034189.PDF
 * Keywords: Stepper driver.
 * Default footprint: Package_SIP:SLA704XM.
 */
export class SLA7042M extends Component.withPins({
  "OUT_1": "1",
  "~{STROBE}_2": "2",
  "REF_3": "3",
  "Vdd_4": "4",
  "~{CLOCK}_5": "5",
  "DATA_6": "6",
  "GND_7": "7",
  "~{OUT}_8": "8",
  "RS_9": "9",
  "RS_10": "10",
  "OUT_11": "11",
  "GND_12": "12",
  "~{STROBE}_13": "13",
  "REF_14": "14",
  "Vdd_15": "15",
  "~{CLOCK}_16": "16",
  "DATA_17": "17",
  "~{OUT}_18": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT_1: "output", "~{STROBE}_2": "input", REF_3: "input", Vdd_4: "power_in", "~{CLOCK}_5": "input", DATA_6: "input", GND_7: "power_in", "~{OUT}_8": "output", RS_9: "input", RS_10: "input", OUT_11: "output", GND_12: "power_in", "~{STROBE}_13": "input", REF_14: "input", Vdd_15: "power_in", "~{CLOCK}_16": "input", DATA_17: "input", "~{OUT}_18": "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7042M";
  override referencePrefix = "U";
}

/**
 * Unipolar 2-phase stepper motor driver, Full and Half step, 1A
 *
 * KiCad symbol: `Driver_Motor:SLA7070MPRT`. Reference prefix: `U`.
 * @see http://www.semicon.sanken-ele.co.jp/sk_content/sla7070mprt_ds_en.pdf
 * Keywords: Stepper driver.
 */
export class SLA7070MPRT extends Component.withPins({
  "OUTA_1": "1",
  "OUTA_2": "2",
  "~{OUTA}_3": "3",
  "~{OUTA}_4": "4",
  "SENSE_A": "5",
  "N.C.": "6",
  "M1": "7",
  "M2": "8",
  "M3": "9",
  "CLOCK": "10",
  "VBB": "11",
  "GND": "12",
  "REF/SLEEP1": "13",
  "VDD": "14",
  "RESET": "15",
  "CW/CCW": "16",
  "SYNC": "17",
  "FLAG": "18",
  "SENSE_B": "19",
  "~{OUTB}_20": "20",
  "~{OUTB}_21": "21",
  "OUTB_22": "22",
  "OUTB_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", OUTA_2: "output", "~{OUTA}_3": "output", "~{OUTA}_4": "output", SENSE_A: "output", "N.C.": "no_connect", M1: "input", M2: "input", M3: "input", CLOCK: "input", VBB: "power_in", GND: "power_in", "REF/SLEEP1": "input", VDD: "power_in", RESET: "input", "CW/CCW": "input", SYNC: "input", FLAG: "output", SENSE_B: "output", "~{OUTB}_20": "output", "~{OUTB}_21": "output", OUTB_22: "output", OUTB_23: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7070MPRT";
  override referencePrefix = "U";
}

/**
 * Unipolar 2-phase stepper motor driver, Full and Half step, 1.5A
 *
 * KiCad symbol: `Driver_Motor:SLA7071MPRT`. Reference prefix: `U`.
 * @see http://www.semicon.sanken-ele.co.jp/sk_content/sla7071mprt_ds_en.pdf
 * Keywords: Stepper driver.
 */
export class SLA7071MPRT extends Component.withPins({
  "OUTA_1": "1",
  "OUTA_2": "2",
  "~{OUTA}_3": "3",
  "~{OUTA}_4": "4",
  "SENSE_A": "5",
  "N.C.": "6",
  "M1": "7",
  "M2": "8",
  "M3": "9",
  "CLOCK": "10",
  "VBB": "11",
  "GND": "12",
  "REF/SLEEP1": "13",
  "VDD": "14",
  "RESET": "15",
  "CW/CCW": "16",
  "SYNC": "17",
  "FLAG": "18",
  "SENSE_B": "19",
  "~{OUTB}_20": "20",
  "~{OUTB}_21": "21",
  "OUTB_22": "22",
  "OUTB_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", OUTA_2: "output", "~{OUTA}_3": "output", "~{OUTA}_4": "output", SENSE_A: "output", "N.C.": "no_connect", M1: "input", M2: "input", M3: "input", CLOCK: "input", VBB: "power_in", GND: "power_in", "REF/SLEEP1": "input", VDD: "power_in", RESET: "input", "CW/CCW": "input", SYNC: "input", FLAG: "output", SENSE_B: "output", "~{OUTB}_20": "output", "~{OUTB}_21": "output", OUTB_22: "output", OUTB_23: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7071MPRT";
  override referencePrefix = "U";
}

/**
 * Unipolar 2-phase stepper motor driver, Full and Half step, 2A
 *
 * KiCad symbol: `Driver_Motor:SLA7072MPRT`. Reference prefix: `U`.
 * @see http://www.semicon.sanken-ele.co.jp/sk_content/sla7072mprt_ds_en.pdf
 * Keywords: Stepper driver.
 */
export class SLA7072MPRT extends Component.withPins({
  "OUTA_1": "1",
  "OUTA_2": "2",
  "~{OUTA}_3": "3",
  "~{OUTA}_4": "4",
  "SENSE_A": "5",
  "N.C.": "6",
  "M1": "7",
  "M2": "8",
  "M3": "9",
  "CLOCK": "10",
  "VBB": "11",
  "GND": "12",
  "REF/SLEEP1": "13",
  "VDD": "14",
  "RESET": "15",
  "CW/CCW": "16",
  "SYNC": "17",
  "FLAG": "18",
  "SENSE_B": "19",
  "~{OUTB}_20": "20",
  "~{OUTB}_21": "21",
  "OUTB_22": "22",
  "OUTB_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", OUTA_2: "output", "~{OUTA}_3": "output", "~{OUTA}_4": "output", SENSE_A: "output", "N.C.": "no_connect", M1: "input", M2: "input", M3: "input", CLOCK: "input", VBB: "power_in", GND: "power_in", "REF/SLEEP1": "input", VDD: "power_in", RESET: "input", "CW/CCW": "input", SYNC: "input", FLAG: "output", SENSE_B: "output", "~{OUTB}_20": "output", "~{OUTB}_21": "output", OUTB_22: "output", OUTB_23: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7072MPRT";
  override referencePrefix = "U";
}

/**
 * Unipolar 2-phase stepper motor driver, Full and Half step, 3A
 *
 * KiCad symbol: `Driver_Motor:SLA7073MPRT`. Reference prefix: `U`.
 * @see http://www.semicon.sanken-ele.co.jp/sk_content/sla7073mprt_ds_en.pdf
 * Keywords: Stepper driver.
 */
export class SLA7073MPRT extends Component.withPins({
  "OUTA_1": "1",
  "OUTA_2": "2",
  "~{OUTA}_3": "3",
  "~{OUTA}_4": "4",
  "SENSE_A": "5",
  "N.C.": "6",
  "M1": "7",
  "M2": "8",
  "M3": "9",
  "CLOCK": "10",
  "VBB": "11",
  "GND": "12",
  "REF/SLEEP1": "13",
  "VDD": "14",
  "RESET": "15",
  "CW/CCW": "16",
  "SYNC": "17",
  "FLAG": "18",
  "SENSE_B": "19",
  "~{OUTB}_20": "20",
  "~{OUTB}_21": "21",
  "OUTB_22": "22",
  "OUTB_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", OUTA_2: "output", "~{OUTA}_3": "output", "~{OUTA}_4": "output", SENSE_A: "output", "N.C.": "no_connect", M1: "input", M2: "input", M3: "input", CLOCK: "input", VBB: "power_in", GND: "power_in", "REF/SLEEP1": "input", VDD: "power_in", RESET: "input", "CW/CCW": "input", SYNC: "input", FLAG: "output", SENSE_B: "output", "~{OUTB}_20": "output", "~{OUTB}_21": "output", OUTB_22: "output", OUTB_23: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7073MPRT";
  override referencePrefix = "U";
}

/**
 * Unipolar 2-phase stepper motor driver, Microstep, 1A
 *
 * KiCad symbol: `Driver_Motor:SLA7075MPRT`. Reference prefix: `U`.
 * @see http://www.semicon.sanken-ele.co.jp/sk_content/sla7075mprt_ds_en.pdf
 * Keywords: Stepper driver.
 */
export class SLA7075MPRT extends Component.withPins({
  "OUTA_1": "1",
  "OUTA_2": "2",
  "~{OUTA}_3": "3",
  "~{OUTA}_4": "4",
  "SENSE_A": "5",
  "MO": "6",
  "M1": "7",
  "M2": "8",
  "M3": "9",
  "CLOCK": "10",
  "VBB": "11",
  "GND": "12",
  "REF/SLEEP1": "13",
  "VDD": "14",
  "RESET": "15",
  "CW/CCW": "16",
  "SYNC": "17",
  "FLAG": "18",
  "SENSE_B": "19",
  "~{OUTB}_20": "20",
  "~{OUTB}_21": "21",
  "OUTB_22": "22",
  "OUTB_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", OUTA_2: "output", "~{OUTA}_3": "output", "~{OUTA}_4": "output", SENSE_A: "output", MO: "output", M1: "input", M2: "input", M3: "input", CLOCK: "input", VBB: "power_in", GND: "power_in", "REF/SLEEP1": "input", VDD: "power_in", RESET: "input", "CW/CCW": "input", SYNC: "input", FLAG: "output", SENSE_B: "output", "~{OUTB}_20": "output", "~{OUTB}_21": "output", OUTB_22: "output", OUTB_23: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7075MPRT";
  override referencePrefix = "U";
}

/**
 * Unipolar 2-phase stepper motor driver, Microstep, 1.5A
 *
 * KiCad symbol: `Driver_Motor:SLA7076MPRT`. Reference prefix: `U`.
 * @see http://www.semicon.sanken-ele.co.jp/sk_content/sla7076mprt_ds_en.pdf
 * Keywords: Stepper driver.
 */
export class SLA7076MPRT extends Component.withPins({
  "OUTA_1": "1",
  "OUTA_2": "2",
  "~{OUTA}_3": "3",
  "~{OUTA}_4": "4",
  "SENSE_A": "5",
  "MO": "6",
  "M1": "7",
  "M2": "8",
  "M3": "9",
  "CLOCK": "10",
  "VBB": "11",
  "GND": "12",
  "REF/SLEEP1": "13",
  "VDD": "14",
  "RESET": "15",
  "CW/CCW": "16",
  "SYNC": "17",
  "FLAG": "18",
  "SENSE_B": "19",
  "~{OUTB}_20": "20",
  "~{OUTB}_21": "21",
  "OUTB_22": "22",
  "OUTB_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", OUTA_2: "output", "~{OUTA}_3": "output", "~{OUTA}_4": "output", SENSE_A: "output", MO: "output", M1: "input", M2: "input", M3: "input", CLOCK: "input", VBB: "power_in", GND: "power_in", "REF/SLEEP1": "input", VDD: "power_in", RESET: "input", "CW/CCW": "input", SYNC: "input", FLAG: "output", SENSE_B: "output", "~{OUTB}_20": "output", "~{OUTB}_21": "output", OUTB_22: "output", OUTB_23: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7076MPRT";
  override referencePrefix = "U";
}

/**
 * Unipolar 2-phase stepper motor driver, Microstep, 2A
 *
 * KiCad symbol: `Driver_Motor:SLA7077MPRT`. Reference prefix: `U`.
 * @see http://www.semicon.sanken-ele.co.jp/sk_content/sla7077mprt_ds_en.pdf
 * Keywords: Stepper driver.
 */
export class SLA7077MPRT extends Component.withPins({
  "OUTA_1": "1",
  "OUTA_2": "2",
  "~{OUTA}_3": "3",
  "~{OUTA}_4": "4",
  "SENSE_A": "5",
  "MO": "6",
  "M1": "7",
  "M2": "8",
  "M3": "9",
  "CLOCK": "10",
  "VBB": "11",
  "GND": "12",
  "REF/SLEEP1": "13",
  "VDD": "14",
  "RESET": "15",
  "CW/CCW": "16",
  "SYNC": "17",
  "FLAG": "18",
  "SENSE_B": "19",
  "~{OUTB}_20": "20",
  "~{OUTB}_21": "21",
  "OUTB_22": "22",
  "OUTB_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", OUTA_2: "output", "~{OUTA}_3": "output", "~{OUTA}_4": "output", SENSE_A: "output", MO: "output", M1: "input", M2: "input", M3: "input", CLOCK: "input", VBB: "power_in", GND: "power_in", "REF/SLEEP1": "input", VDD: "power_in", RESET: "input", "CW/CCW": "input", SYNC: "input", FLAG: "output", SENSE_B: "output", "~{OUTB}_20": "output", "~{OUTB}_21": "output", OUTB_22: "output", OUTB_23: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7077MPRT";
  override referencePrefix = "U";
}

/**
 * Unipolar 2-phase stepper motor driver, Microstep, 3A
 *
 * KiCad symbol: `Driver_Motor:SLA7078MPRT`. Reference prefix: `U`.
 * @see http://www.semicon.sanken-ele.co.jp/sk_content/sla7078mprt_ds_en.pdf
 * Keywords: Stepper driver.
 */
export class SLA7078MPRT extends Component.withPins({
  "OUTA_1": "1",
  "OUTA_2": "2",
  "~{OUTA}_3": "3",
  "~{OUTA}_4": "4",
  "SENSE_A": "5",
  "MO": "6",
  "M1": "7",
  "M2": "8",
  "M3": "9",
  "CLOCK": "10",
  "VBB": "11",
  "GND": "12",
  "REF/SLEEP1": "13",
  "VDD": "14",
  "RESET": "15",
  "CW/CCW": "16",
  "SYNC": "17",
  "FLAG": "18",
  "SENSE_B": "19",
  "~{OUTB}_20": "20",
  "~{OUTB}_21": "21",
  "OUTB_22": "22",
  "OUTB_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", OUTA_2: "output", "~{OUTA}_3": "output", "~{OUTA}_4": "output", SENSE_A: "output", MO: "output", M1: "input", M2: "input", M3: "input", CLOCK: "input", VBB: "power_in", GND: "power_in", "REF/SLEEP1": "input", VDD: "power_in", RESET: "input", "CW/CCW": "input", SYNC: "input", FLAG: "output", SENSE_B: "output", "~{OUTB}_20": "output", "~{OUTB}_21": "output", OUTB_22: "output", OUTB_23: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SLA7078MPRT";
  override referencePrefix = "U";
}

/**
 * Quadruple Half-H Driver, DIP-16
 *
 * KiCad symbol: `Driver_Motor:SN754410NE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn754410.pdf
 * Keywords: h-bridge motor driver.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class SN754410NE extends Component.withPins({
  "1,2EN": "1",
  "1A": "2",
  "1Y": "3",
  "GND_4": "4",
  "GND_5": "5",
  "2Y": "6",
  "2A": "7",
  "VCC2": "8",
  "3,4EN": "9",
  "3A": "10",
  "3Y": "11",
  "GND_12": "12",
  "GND_13": "13",
  "4Y": "14",
  "4A": "15",
  "VCC1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1,2EN": "input", "1A": "input", "1Y": "output", GND_4: "power_in", GND_5: "passive", "2Y": "output", "2A": "input", VCC2: "power_in", "3,4EN": "input", "3A": "input", "3Y": "output", GND_12: "passive", GND_13: "passive", "4Y": "output", "4A": "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:SN754410NE";
  override referencePrefix = "U";
}

/**
 * Stepper motor driver with microstepping controller, 1.5A
 *
 * KiCad symbol: `Driver_Motor:STK672-040-E`. Reference prefix: `U`.
 * Footprint filters: STK672?040?E*.
 * @see http://www.onsemi.com/pub_link/Collateral/EN5227-D.PDF
 * Keywords: Stepper driver.
 * Default footprint: Package_SIP:STK672-040-E.
 */
export class STK672_040_E extends Component.withPins({
  "~{B}": "1",
  "B": "2",
  "PG_3": "3",
  "PG_4": "4",
  "~{A}": "5",
  "A": "6",
  "VCC": "7",
  "Vref": "8",
  "M1": "9",
  "M2": "10",
  "M3": "11",
  "M4": "12",
  "M5": "13",
  "CLK": "14",
  "CWB": "15",
  "~{RESET}": "16",
  "RETURN": "17",
  "ENABLE": "18",
  "MOI": "19",
  "MO1": "20",
  "MO2": "21",
  "SG": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{B}": "output", B: "output", PG_3: "power_in", PG_4: "power_in", "~{A}": "output", A: "output", VCC: "power_in", Vref: "input", M1: "input", M2: "input", M3: "input", M4: "input", M5: "input", CLK: "input", CWB: "input", "~{RESET}": "input", RETURN: "input", ENABLE: "input", MOI: "output", MO1: "output", MO2: "output", SG: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:STK672-040-E";
  override referencePrefix = "U";
}

/**
 * Stepper motor driver with microstepping controller, 2.8A
 *
 * KiCad symbol: `Driver_Motor:STK672-080-E`. Reference prefix: `U`.
 * Footprint filters: STK672?080?E*.
 * @see http://www.onsemi.com/pub_link/Collateral/EN6507-D.PDF
 * Keywords: Stepper driver.
 * Default footprint: Package_SIP:STK672-080-E.
 */
export class STK672_080_E extends Component.withPins({
  "PG": "1",
  "BB": "2",
  "B": "3",
  "AB": "4",
  "A": "5",
  "VCC": "6",
  "Vref": "7",
  "M1": "8",
  "M2": "9",
  "CWB": "10",
  "CLOCK": "11",
  "M3": "12",
  "~{RESET}": "13",
  "MOI": "14",
  "ENABLE": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PG: "power_in", BB: "output", B: "output", AB: "output", A: "output", VCC: "power_in", Vref: "input", M1: "input", M2: "input", CWB: "input", CLOCK: "input", M3: "input", "~{RESET}": "input", MOI: "output", ENABLE: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:STK672-080-E";
  override referencePrefix = "U";
}

/**
 * Low voltage stepper motor driver, 1.8V to 10V input, 1.3Arms output, 0.4Ω Rdson per phase (typical), QFN-16 package
 *
 * KiCad symbol: `Driver_Motor:STSPIN220`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/stspin220.pdf
 * Keywords: motor driver stepper.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class STSPIN220 extends Component.withPins({
  "DIR": "1",
  "STCK": "2",
  "OUTA1": "3",
  "SENSEA": "4",
  "OUTA2": "5",
  "VS": "6",
  "GND": "7",
  "OUTB2": "8",
  "SENSEB": "9",
  "OUTB1": "10",
  "REF": "11",
  "TOFF": "12",
  "EN/FLT": "13",
  "STBY/RESET": "14",
  "MODE2": "15",
  "MODE1": "16",
  "EPAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIR: "input", STCK: "input", OUTA1: "power_out", SENSEA: "power_out", OUTA2: "power_out", VS: "power_in", GND: "power_in", OUTB2: "power_out", SENSEB: "power_out", OUTB1: "power_out", REF: "input", TOFF: "input", "EN/FLT": "bidirectional", "STBY/RESET": "input", MODE2: "input", MODE1: "input", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:STSPIN220";
  override referencePrefix = "U";
}

/**
 * Low voltage triple half-bridge motor driver, 1.8V to 10V input, 1.3Arms output, 0.4Ω Rdson per phase (typical), QFN-16 package
 *
 * KiCad symbol: `Driver_Motor:STSPIN230`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/stspin230.pdf
 * Keywords: motor driver half-bridge.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class STSPIN230 extends Component.withPins({
  "INUL": "1",
  "INUH": "2",
  "OUTU": "3",
  "SENSEU": "4",
  "NC": "5",
  "VS": "6",
  "GND_7": "7",
  "OUTV": "8",
  "SENSEVW": "9",
  "OUTW": "10",
  "INWL": "11",
  "INWH": "12",
  "EN/FLT": "13",
  "STBY": "14",
  "INVL": "15",
  "INVH": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INUL: "input", INUH: "input", OUTU: "power_out", SENSEU: "input", NC: "no_connect", VS: "power_in", GND_7: "power_in", OUTV: "power_out", SENSEVW: "input", OUTW: "power_out", INWL: "input", INWH: "input", "EN/FLT": "bidirectional", STBY: "input", INVL: "input", INVH: "input", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:STSPIN230";
  override referencePrefix = "U";
}

/**
 * Low voltage three phase and three sense motor driver, 1.8V to 10V input, 1.3Arms output, 0.4Ω Rdson per phase (typical), QFN-16 package
 *
 * KiCad symbol: `Driver_Motor:STSPIN233`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/stspin233.pdf
 * Keywords: motor driver half-bridge.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class STSPIN233 extends Component.withPins({
  "INU": "1",
  "ENU": "2",
  "OUTU": "3",
  "SENSEU": "4",
  "VS": "5",
  "GND_6": "6",
  "OUTV": "7",
  "SENSEV": "8",
  "SENSEW": "9",
  "OUTW": "10",
  "INW": "11",
  "ENW": "12",
  "EN/FAULT": "13",
  "STBY/RESET": "14",
  "INV": "15",
  "ENV": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INU: "input", ENU: "input", OUTU: "power_out", SENSEU: "input", VS: "power_in", GND_6: "power_in", OUTV: "power_out", SENSEV: "input", SENSEW: "input", OUTW: "power_out", INW: "input", ENW: "input", "EN/FAULT": "bidirectional", "STBY/RESET": "input", INV: "input", ENV: "input", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:STSPIN233";
  override referencePrefix = "U";
}

/**
 * Low voltage dual brush DC motor driver, 1.8V to 10V input, 1.3Arms output, 0.4Ω Rdson per phase (typical), QFN-16 package
 *
 * KiCad symbol: `Driver_Motor:STSPIN240`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/stspin240.pdf
 * Keywords: motor driver dc brushed.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class STSPIN240 extends Component.withPins({
  "PHA": "1",
  "PWMA": "2",
  "OUTA1": "3",
  "SENSEA": "4",
  "OUTA2": "5",
  "VS": "6",
  "GND": "7",
  "OUTB2": "8",
  "SENSEB": "9",
  "OUTB1": "10",
  "REF": "11",
  "TOFF": "12",
  "EN/FLT": "13",
  "STBY/RESET": "14",
  "PHB": "15",
  "PWMB": "16",
  "EPAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PHA: "input", PWMA: "input", OUTA1: "power_out", SENSEA: "power_out", OUTA2: "power_out", VS: "power_in", GND: "power_in", OUTB2: "power_out", SENSEB: "power_out", OUTB1: "power_out", REF: "input", TOFF: "input", "EN/FLT": "bidirectional", "STBY/RESET": "input", PHB: "input", PWMB: "input", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:STSPIN240";
  override referencePrefix = "U";
}

/**
 * Advanced BLDC controller with embedded STM32 MCU, VQFN-48
 *
 * KiCad symbol: `Driver_Motor:STSPIN32F0A`. Reference prefix: `U`.
 * Footprint filters: *VQFN*7x7mm?P0.5mm?EP2.6*x2.6*mm*.
 * @see https://www.st.com/resource/en/datasheet/stspin32f0a.pdf
 * Keywords: three-phase-brushless-DC-motor-controller STM32F031C6 SWD I2C SPI USART GPIO.
 * Default footprint: Package_DFN_QFN:VQFN-48-1EP_7x7mm_P0.5mm_EP2.6x2.6mm.
 */
export class STSPIN32F0A extends Component.withPins({
  "PF0": "4",
  "PF1": "5",
  "VREG12": "6",
  "~{RST}": "7",
  "VM": "8",
  "SW": "9",
  "VDDA": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB1": "19",
  "TESTMODE": "20",
  "OC_COMP": "24",
  "HSW": "25",
  "OUTW": "26",
  "VBOOTW": "27",
  "LSW": "28",
  "HSV": "29",
  "OUTV": "30",
  "VBOOTV": "31",
  "LSV": "32",
  "HSU": "33",
  "OUTU": "34",
  "VBOOTU": "35",
  "LSU": "36",
  "PA13_SWD_IO": "37",
  "PA14_SWD_CLK": "38",
  "PA15": "39",
  "PB6": "40",
  "PB7": "41",
  "BOOT0": "42",
  "RESERVED": "43",
  "GND_44": "44",
  "VDD": "48",
  "GND_49": "49",
  "OP1O": "21",
  "OP1N": "22",
  "OP1P": "23",
  "OP2P": "1",
  "OP2N": "2",
  "OP2O": "3",
  "OP3P": "45",
  "OP3N": "46",
  "OP3O": "47",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PF0: "bidirectional", PF1: "bidirectional", VREG12: "passive", "~{RST}": "bidirectional", VM: "power_in", SW: "passive", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", TESTMODE: "input", OC_COMP: "input", HSW: "output", OUTW: "power_in", VBOOTW: "passive", LSW: "output", HSV: "output", OUTV: "power_in", VBOOTV: "passive", LSV: "output", HSU: "output", OUTU: "power_in", VBOOTU: "passive", LSU: "output", PA13_SWD_IO: "bidirectional", PA14_SWD_CLK: "bidirectional", PA15: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", RESERVED: "passive", GND_44: "power_in", VDD: "power_in", GND_49: "passive", OP1O: "output", OP1N: "input", OP1P: "input", OP2P: "input", OP2N: "input", OP2O: "output", OP3P: "input", OP3N: "input", OP3O: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:STSPIN32F0A";
  override referencePrefix = "U";
}

/**
 * Driver IC for Dual DC motor, SSOP-24
 *
 * KiCad symbol: `Driver_Motor:TB6612FNG`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see https://toshiba.semicon-storage.com/us/product/linear/motordriver/detail.TB6612FNG.html
 * Keywords: H-bridge motor driver.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 */
export class TB6612FNG extends Component.withPins({
  "AO1_1": "1",
  "AO1_2": "2",
  "PGND1_3": "3",
  "PGND1_4": "4",
  "AO2_5": "5",
  "AO2_6": "6",
  "BO2_7": "7",
  "BO2_8": "8",
  "PGND2_9": "9",
  "PGND2_10": "10",
  "BO1_11": "11",
  "BO1_12": "12",
  "VM2": "13",
  "VM3": "14",
  "PWMB": "15",
  "BIN2": "16",
  "BIN1": "17",
  "GND": "18",
  "STBY": "19",
  "VCC": "20",
  "AIN1": "21",
  "AIN2": "22",
  "PWMA": "23",
  "VM1": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AO1_1: "output", AO1_2: "passive", PGND1_3: "power_in", PGND1_4: "passive", AO2_5: "output", AO2_6: "passive", BO2_7: "output", BO2_8: "passive", PGND2_9: "power_in", PGND2_10: "passive", BO1_11: "output", BO1_12: "passive", VM2: "power_in", VM3: "power_in", PWMB: "input", BIN2: "input", BIN1: "input", GND: "power_in", STBY: "input", VCC: "power_in", AIN1: "input", AIN2: "input", PWMA: "input", VM1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TB6612FNG";
  override referencePrefix = "U";
}

/**
 * Bipolar stepping motor driver IC, QFN-16
 *
 * KiCad symbol: `Driver_Motor:TC78H670FTG`. Reference prefix: `U`.
 * Footprint filters: *VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://toshiba.semicon-storage.com/info/TC78H670FTG_datasheet_en_20210209.pdf?did=68606&prodName=TC78H670FTG
 * Keywords: stepping motor driver.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class TC78H670FTG extends Component.withPins({
  "AGND": "2",
  "VM": "3",
  "PGND_A": "4",
  "OUT_A+": "5",
  "OUT_A-": "6",
  "OUT_B-": "7",
  "OUT_B+": "8",
  "MODE3": "1",
  "PGND_B": "9",
  "VREF": "10",
  "OSCM": "11",
  "~{STBY}": "12",
  "EN/~{ERR}": "13",
  "MODE0": "14",
  "MODE1": "15",
  "MODE2": "16",
  "GND_PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AGND: "power_in", VM: "power_in", PGND_A: "power_in", "OUT_A+": "output", "OUT_A-": "output", "OUT_B-": "output", "OUT_B+": "output", MODE3: "input", PGND_B: "power_in", VREF: "input", OSCM: "input", "~{STBY}": "input", "EN/~{ERR}": "bidirectional", MODE0: "input", MODE1: "input", MODE2: "input", GND_PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TC78H670FTG";
  override referencePrefix = "U";
}

/**
 * Standalone Dual driver for two-phase bipolar stepper motor, 2.2A, 4.75-26V, SPI, UART, QFN-48
 *
 * KiCad symbol: `Driver_Motor:TMC2041-LA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2041_datasheet.pdf
 * Keywords: Dual driver stepper motor.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.3x5.3mm_ThermalVias.
 */
export class TMC2041_LA extends Component.withPins({
  "GNDD_1": "1",
  "GNDD_2": "2",
  "CSN/IO0": "3",
  "SCK/IO1": "4",
  "SDI/IO2": "5",
  "GNDD_6": "6",
  "VCC_IO": "7",
  "SDO": "8",
  "SWIOP": "9",
  "SWION": "10",
  "CLK": "11",
  "SWSEL": "12",
  "GNDD_13": "13",
  "O2A1": "14",
  "BR2A": "15",
  "O2A2": "16",
  "VS_17": "17",
  "GNDP_18": "18",
  "VS_19": "19",
  "O2B1": "20",
  "BR2B": "21",
  "O2B2": "22",
  "GNDD_23": "23",
  "NEXTADDR": "24",
  "DIR2": "25",
  "STEP2": "26",
  "DIR1": "27",
  "STEP1": "28",
  "~{DRV_ENN}": "29",
  "VSA": "30",
  "GNDA": "31",
  "5VOUT": "32",
  "VCC": "33",
  "GNDD_34": "34",
  "CPO": "35",
  "CPI": "36",
  "VCP": "37",
  "GNDD_38": "38",
  "O1B2": "39",
  "BR1B": "40",
  "O1B1": "41",
  "VS_42": "42",
  "GNDP_43": "43",
  "VS_44": "44",
  "O1A2": "45",
  "BR1A": "46",
  "O1A1": "47",
  "TST_MODE": "48",
  "GNDD_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GNDD_1: "passive", GNDD_2: "passive", "CSN/IO0": "bidirectional", "SCK/IO1": "bidirectional", "SDI/IO2": "bidirectional", GNDD_6: "power_in", VCC_IO: "power_in", SDO: "bidirectional", SWIOP: "bidirectional", SWION: "bidirectional", CLK: "input", SWSEL: "input", GNDD_13: "passive", O2A1: "output", BR2A: "passive", O2A2: "output", VS_17: "power_in", GNDP_18: "power_in", VS_19: "passive", O2B1: "output", BR2B: "passive", O2B2: "output", GNDD_23: "passive", NEXTADDR: "input", DIR2: "input", STEP2: "input", DIR1: "input", STEP1: "input", "~{DRV_ENN}": "input", VSA: "power_in", GNDA: "power_in", "5VOUT": "power_out", VCC: "power_in", GNDD_34: "passive", CPO: "passive", CPI: "passive", VCP: "passive", GNDD_38: "passive", O1B2: "output", BR1B: "passive", O1B1: "output", VS_42: "power_in", GNDP_43: "passive", VS_44: "passive", O1A2: "output", BR1A: "passive", O1A1: "output", TST_MODE: "input", GNDD_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2041-LA";
  override referencePrefix = "U";
}

/**
 * Standalone driver for two-phase bipolar stepper motor, 2.0A, 4.75-46V, QFN-36
 *
 * KiCad symbol: `Driver_Motor:TMC2100-LA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x6mm*P0.5mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2100_datasheet_Rev1.08.pdf
 * Keywords: Driver stepper motor.
 * Default footprint: Package_DFN_QFN:QFN-36-1EP_5x6mm_P0.5mm_EP3.6x4.1mm_ThermalVias.
 */
export class TMC2100_LA extends Component.withPins({
  "CLK": "1",
  "CFG3": "2",
  "CFG2": "3",
  "CFG1": "4",
  "CFG0": "5",
  "STEP": "6",
  "DIR": "7",
  "VCC_IO": "8",
  "DNC_9": "9",
  "GNDD_10": "10",
  "GNDD_11": "11",
  "GNDP_12": "12",
  "OB1": "13",
  "BRB": "14",
  "OB2": "15",
  "VS_16": "16",
  "DNC_17": "17",
  "CFG4": "18",
  "CFG5": "19",
  "ERROR": "20",
  "INDEX": "21",
  "~{CFG6_ENN}": "22",
  "AIN_REF": "23",
  "GNDA": "24",
  "5VOUT": "25",
  "VCC": "26",
  "CP0": "27",
  "CPI": "28",
  "VCP": "29",
  "VSA": "30",
  "VS_31": "31",
  "OA2": "32",
  "BRA": "33",
  "OA1": "34",
  "GNDP_35": "35",
  "TST_MODE": "36",
  "GNDD_37": "37",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLK: "input", CFG3: "input", CFG2: "input", CFG1: "input", CFG0: "input", STEP: "input", DIR: "input", VCC_IO: "power_in", DNC_9: "no_connect", GNDD_10: "power_in", GNDD_11: "passive", GNDP_12: "power_in", OB1: "output", BRB: "passive", OB2: "output", VS_16: "power_in", DNC_17: "no_connect", CFG4: "input", CFG5: "input", ERROR: "open_collector", INDEX: "open_collector", "~{CFG6_ENN}": "input", AIN_REF: "input", GNDA: "power_in", "5VOUT": "power_out", VCC: "power_in", CP0: "passive", CPI: "passive", VCP: "passive", VSA: "power_in", VS_31: "power_in", OA2: "output", BRA: "passive", OA1: "output", GNDP_35: "passive", TST_MODE: "input", GNDD_37: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2100-LA";
  override referencePrefix = "U";
}

/**
 * Standalone driver for two-phase bipolar stepper motor, 2.0A, 4.75-46V, TQFP-48
 *
 * KiCad symbol: `Driver_Motor:TMC2100-TA`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2100_datasheet_Rev1.08.pdf
 * Keywords: Standalone driver stepper motor.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP5x5mm_ThermalVias.
 */
export class TMC2100_TA extends Component.withPins({
  "TST_MODE": "1",
  "CLK": "2",
  "CFG3": "3",
  "CFG2": "4",
  "CFG1": "5",
  "GNDD_6": "6",
  "CFG0": "7",
  "STEP": "8",
  "DIR": "9",
  "VCC_IO": "10",
  "DNC_11": "11",
  "GNDD_12": "12",
  "GNDP_13": "13",
  "DNC_14": "14",
  "OB1": "15",
  "DNC_16": "16",
  "BRB": "17",
  "DNC_18": "18",
  "OB2": "19",
  "DNC_20": "20",
  "VS_21": "21",
  "DNC_22": "22",
  "DNC_23": "23",
  "CFG4": "24",
  "CFG5": "25",
  "ERROR": "26",
  "INDEX": "27",
  "DNC_28": "28",
  "~{CFG6_ENN}": "29",
  "AIN_REF": "30",
  "GNDD_31": "31",
  "GNDA": "32",
  "5VOUT": "33",
  "VCC": "34",
  "CP0": "35",
  "GNDD_36": "36",
  "CPI": "37",
  "VCP": "38",
  "VSA": "39",
  "VS_40": "40",
  "DNC_41": "41",
  "OA2": "42",
  "DNC_43": "43",
  "BRA": "44",
  "DNC_45": "45",
  "OA1": "46",
  "DNC_47": "47",
  "GNDP_48": "48",
  "GNDD_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TST_MODE: "input", CLK: "input", CFG3: "input", CFG2: "input", CFG1: "input", GNDD_6: "passive", CFG0: "input", STEP: "input", DIR: "input", VCC_IO: "power_in", DNC_11: "no_connect", GNDD_12: "power_in", GNDP_13: "passive", DNC_14: "no_connect", OB1: "output", DNC_16: "no_connect", BRB: "passive", DNC_18: "no_connect", OB2: "output", DNC_20: "no_connect", VS_21: "power_in", DNC_22: "no_connect", DNC_23: "no_connect", CFG4: "input", CFG5: "input", ERROR: "open_collector", INDEX: "open_collector", DNC_28: "no_connect", "~{CFG6_ENN}": "input", AIN_REF: "input", GNDD_31: "passive", GNDA: "power_in", "5VOUT": "power_out", VCC: "power_in", CP0: "passive", GNDD_36: "passive", CPI: "passive", VCP: "passive", VSA: "power_in", VS_40: "power_in", DNC_41: "no_connect", OA2: "output", DNC_43: "no_connect", BRA: "passive", DNC_45: "no_connect", OA1: "output", DNC_47: "no_connect", GNDP_48: "power_in", GNDD_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2100-TA";
  override referencePrefix = "U";
}

/**
 * Driver for two-phase bipolar stepper motor, 2.0A, SPI, 4.75-46V, QFN-36
 *
 * KiCad symbol: `Driver_Motor:TMC2130-LA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x6mm*P0.5mm*.
 * @see http://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2130_datasheet.pdf
 * Keywords: stepper motor driver.
 * Default footprint: Package_DFN_QFN:QFN-36-1EP_5x6mm_P0.5mm_EP3.6x4.1mm.
 */
export class TMC2130_LA extends Component.withPins({
  "CLK": "1",
  "~{CS}_CFG3": "2",
  "SCK_CFG2": "3",
  "SDI_CFG1": "4",
  "SDO_CFG0": "5",
  "STEP": "6",
  "DIR": "7",
  "VCC_IO": "8",
  "DNC": "9",
  "SPI_MODE": "10",
  "NC": "11",
  "GNDP_12": "12",
  "OB1": "13",
  "BRB": "14",
  "OB2": "15",
  "VS_16": "16",
  "DCO": "17",
  "DCEN_CFG4": "18",
  "DCIN_CFG5": "19",
  "DIAG0": "20",
  "DIAG1": "21",
  "~{DRV_EN}_CFG6": "22",
  "AIN_IREF": "23",
  "GNDA": "24",
  "5VOUT": "25",
  "VCC": "26",
  "CPO": "27",
  "CPI": "28",
  "VCP": "29",
  "VSA": "30",
  "VS_31": "31",
  "OA2": "32",
  "BRA": "33",
  "OA1": "34",
  "GNDP_35": "35",
  "TST_MODE": "36",
  "EP": "37",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLK: "input", "~{CS}_CFG3": "input", SCK_CFG2: "input", SDI_CFG1: "input", SDO_CFG0: "bidirectional", STEP: "input", DIR: "input", VCC_IO: "power_in", DNC: "no_connect", SPI_MODE: "input", NC: "passive", GNDP_12: "power_in", OB1: "output", BRB: "passive", OB2: "output", VS_16: "power_in", DCO: "output", DCEN_CFG4: "input", DCIN_CFG5: "input", DIAG0: "output", DIAG1: "output", "~{DRV_EN}_CFG6": "input", AIN_IREF: "input", GNDA: "power_in", "5VOUT": "power_out", VCC: "power_in", CPO: "passive", CPI: "passive", VCP: "passive", VSA: "power_in", VS_31: "power_in", OA2: "output", BRA: "passive", OA1: "output", GNDP_35: "passive", TST_MODE: "input", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2130-LA";
  override referencePrefix = "U";
}

/**
 * Driver for two-phase bipolar stepper motor, 2.0A, SPI, 4.75-46V, TQFP-48
 *
 * KiCad symbol: `Driver_Motor:TMC2130-TA`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see http://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2130_datasheet.pdf
 * Keywords: stepper motor driver.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP5x5mm.
 */
export class TMC2130_TA extends Component.withPins({
  "TST_MODE": "1",
  "CLK": "2",
  "~{CS}_CFG3": "3",
  "SCK_CFG2": "4",
  "SDI_CFG1": "5",
  "NC_6": "6",
  "SDO_CFG0": "7",
  "STEP": "8",
  "DIR": "9",
  "VCC_IO": "10",
  "DNC_11": "11",
  "SPI_MODE": "12",
  "GNDP_13": "13",
  "DNC_14": "14",
  "OB1": "15",
  "DNC_16": "16",
  "BRB": "17",
  "DNC_18": "18",
  "OB2": "19",
  "DNC_20": "20",
  "VS_21": "21",
  "DNC_22": "22",
  "DCO": "23",
  "DCEN_CFG4": "24",
  "DCIN_CFG5": "25",
  "DIAG0": "26",
  "DIAG1": "27",
  "DNC_28": "28",
  "~{DRV_EN}_CFG6": "29",
  "AIN_IREF": "30",
  "NC_31": "31",
  "GNDA": "32",
  "5VOUT": "33",
  "VCC": "34",
  "CPO": "35",
  "NC_36": "36",
  "CPI": "37",
  "VCP": "38",
  "VSA": "39",
  "VS_40": "40",
  "DNC_41": "41",
  "OA2": "42",
  "DNC_43": "43",
  "BRA": "44",
  "DNC_45": "45",
  "OA1": "46",
  "DNC_47": "47",
  "GNDP_48": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TST_MODE: "input", CLK: "input", "~{CS}_CFG3": "input", SCK_CFG2: "input", SDI_CFG1: "input", NC_6: "passive", SDO_CFG0: "bidirectional", STEP: "input", DIR: "input", VCC_IO: "power_in", DNC_11: "no_connect", SPI_MODE: "input", GNDP_13: "power_in", DNC_14: "no_connect", OB1: "output", DNC_16: "no_connect", BRB: "passive", DNC_18: "no_connect", OB2: "output", DNC_20: "no_connect", VS_21: "power_in", DNC_22: "no_connect", DCO: "output", DCEN_CFG4: "input", DCIN_CFG5: "input", DIAG0: "output", DIAG1: "output", DNC_28: "no_connect", "~{DRV_EN}_CFG6": "input", AIN_IREF: "input", NC_31: "passive", GNDA: "power_in", "5VOUT": "power_out", VCC: "power_in", CPO: "passive", NC_36: "passive", CPI: "passive", VCP: "passive", VSA: "power_in", VS_40: "power_in", DNC_41: "no_connect", OA2: "output", DNC_43: "no_connect", BRA: "passive", DNC_45: "no_connect", OA1: "output", DNC_47: "no_connect", GNDP_48: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2130-TA";
  override referencePrefix = "U";
}

/**
 * Standalone driver for two-phase bipolar stepper motor, 8-60V, external FETs, TQFP48
 *
 * KiCad symbol: `Driver_Motor:TMC2160`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP?7x7mm*P0.5mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2160A-datasheet_Rev1.06.pdf
 * Keywords: Standalone driver stepper motor.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP5x5mm.
 */
export class TMC2160 extends Component.withPins({
  "HB1": "1",
  "CB1": "2",
  "12VOUT": "3",
  "VSA": "4",
  "5VOUT": "5",
  "GNDA": "6",
  "SRAL": "7",
  "SRAH": "8",
  "SRBH": "9",
  "SRBL": "10",
  "TST_MODE": "11",
  "CLK": "12",
  "~{CS}_CFG3": "13",
  "SCK_CFG2": "14",
  "SDI_CFG1": "15",
  "SDO_CFG0": "16",
  "STEP": "17",
  "DIR": "18",
  "GNDD_19": "19",
  "VCC_IO_20": "20",
  "VCC_IO_21": "21",
  "SPI_MODE": "22",
  "DCEN_CFG4": "23",
  "DCIN_CFG5": "24",
  "DCO_CFG6": "25",
  "DIAG0": "26",
  "DIAG1": "27",
  "~{DRV_EN}": "28",
  "VCC": "29",
  "GNDD_30": "30",
  "CPO": "31",
  "CPI": "32",
  "VS": "33",
  "VCP": "34",
  "CA2": "35",
  "HA2": "36",
  "BMA2": "37",
  "LA2": "38",
  "LA1": "39",
  "BMA1": "40",
  "HA1": "41",
  "CA1": "42",
  "CB2": "43",
  "HB2": "44",
  "BMB2": "45",
  "LB2": "46",
  "LB1": "47",
  "BMB1": "48",
  "GND": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HB1: "output", CB1: "output", "12VOUT": "power_in", VSA: "power_in", "5VOUT": "power_out", GNDA: "power_in", SRAL: "input", SRAH: "input", SRBH: "input", SRBL: "input", TST_MODE: "input", CLK: "input", "~{CS}_CFG3": "input", SCK_CFG2: "input", SDI_CFG1: "input", SDO_CFG0: "passive", STEP: "input", DIR: "input", GNDD_19: "power_in", VCC_IO_20: "power_in", VCC_IO_21: "passive", SPI_MODE: "input", DCEN_CFG4: "input", DCIN_CFG5: "input", DCO_CFG6: "output", DIAG0: "output", DIAG1: "output", "~{DRV_EN}": "input", VCC: "power_in", GNDD_30: "passive", CPO: "passive", CPI: "passive", VS: "power_in", VCP: "passive", CA2: "passive", HA2: "output", BMA2: "passive", LA2: "output", LA1: "output", BMA1: "passive", HA1: "output", CA1: "output", CB2: "passive", HB2: "output", BMB2: "passive", LB2: "output", LB1: "output", BMB1: "passive", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2160";
  override referencePrefix = "U";
}

/**
 * Standalone driver for two-phase bipolar stepper motor, 2A, 4.75… 36V, UART, internal FETs, QFN32
 *
 * KiCad symbol: `Driver_Motor:TMC2202-WA`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP?5x5mm?P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/TMC2202_TMC2208_TMC2224_datasheet_rev1.13.pdf
 * Keywords: Standalone driver stepper motor.
 * Default footprint: Package_DFN_QFN:TQFN-32-1EP_5x5mm_P0.5mm_EP3.4x3.4mm_ThermalVias.
 */
export class TMC2202_WA extends Component.withPins({
  "OB2": "1",
  "NC_2": "2",
  "VS_3": "3",
  "NC_4": "4",
  "ENN": "5",
  "GND_6": "6",
  "CPO": "7",
  "CPI": "8",
  "VCP": "9",
  "5VOUT": "10",
  "MS1": "11",
  "MS2": "12",
  "DIAG": "13",
  "CLK": "14",
  "PDN_UART": "15",
  "VCC_IO": "16",
  "STEP": "17",
  "VREF": "18",
  "GND_19": "19",
  "DIR": "20",
  "NC_21": "21",
  "VS_22": "22",
  "NC_23": "23",
  "OA2": "24",
  "BRA": "25",
  "NC_26": "26",
  "OA1": "27",
  "NC_28": "28",
  "NC_29": "29",
  "OB1": "30",
  "NC_31": "31",
  "BRB": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OB2: "output", NC_2: "no_connect", VS_3: "power_in", NC_4: "no_connect", ENN: "input", GND_6: "power_in", CPO: "passive", CPI: "passive", VCP: "passive", "5VOUT": "power_out", MS1: "input", MS2: "input", DIAG: "output", CLK: "input", PDN_UART: "bidirectional", VCC_IO: "power_in", STEP: "input", VREF: "input", GND_19: "passive", DIR: "input", NC_21: "no_connect", VS_22: "passive", NC_23: "no_connect", OA2: "output", BRA: "passive", NC_26: "no_connect", OA1: "output", NC_28: "no_connect", NC_29: "no_connect", OB1: "output", NC_31: "no_connect", BRB: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2202-WA";
  override referencePrefix = "U";
}

/**
 * Standalone driver for two-phase bipolar stepper motor, 2A, 4.75..36V, UART, internal FETs, VQFN-28
 *
 * KiCad symbol: `Driver_Motor:TMC2208-LA`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm?P0.5mm?EP3.1*x3.1*mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/TMC2202_TMC2208_TMC2224_datasheet_rev1.13.pdf
 * Keywords: Standalone driver stepper motor.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.1x3.1mm_ThermalVias.
 */
export class TMC2208_LA extends Component.withPins({
  "OB2": "1",
  "~{EN}": "2",
  "GND_3": "3",
  "CPO": "4",
  "CPI": "5",
  "VCP": "6",
  "NC_7": "7",
  "5VOUT": "8",
  "MS1": "9",
  "MS2": "10",
  "DIAG": "11",
  "INDEX": "12",
  "CLK": "13",
  "~{PD}/UART": "14",
  "VCC_IO": "15",
  "STEP": "16",
  "VREF": "17",
  "GND_18": "18",
  "DIR": "19",
  "NC_20": "20",
  "OA2": "21",
  "VS_22": "22",
  "BRA": "23",
  "OA1": "24",
  "NC_25": "25",
  "OB1": "26",
  "BRB": "27",
  "VS_28": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OB2: "output", "~{EN}": "input", GND_3: "power_in", CPO: "passive", CPI: "passive", VCP: "passive", NC_7: "no_connect", "5VOUT": "power_out", MS1: "input", MS2: "input", DIAG: "output", INDEX: "output", CLK: "input", "~{PD}/UART": "bidirectional", VCC_IO: "power_in", STEP: "input", VREF: "input", GND_18: "passive", DIR: "input", NC_20: "no_connect", OA2: "output", VS_22: "power_in", BRA: "passive", OA1: "output", NC_25: "no_connect", OB1: "output", BRB: "passive", VS_28: "passive", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2208-LA";
  override referencePrefix = "U";
}

/**
 * 2-phase stepper motor driver, 256 µSteps, 2.8A peak, 2.0A RMS, VS = 4.75..29V, STEP/DIR and UART interface, VQFN-28
 *
 * KiCad symbol: `Driver_Motor:TMC2209-LA`. Reference prefix: `U`.
 * Footprint filters: *VQFN*5x5mm*P0.5mm*EP3.7*3.7*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/TMC2209_datasheet_rev1.09.pdf
 * Keywords: ADI-Trinamic Analog-Devices.
 * Default footprint: Package_DFN_QFN:VQFN-28-1EP_5x5mm_P0.5mm_EP3.7x3.7mm_ThermalVias.
 */
export class TMC2209_LA extends Component.withPins({
  "OB2": "1",
  "~{EN}": "2",
  "GND_3": "3",
  "CPO": "4",
  "CPI": "5",
  "VCP": "6",
  "SPREAD": "7",
  "5VOUT": "8",
  "MS1/AD0": "9",
  "MS2/AD1": "10",
  "DIAG": "11",
  "INDEX": "12",
  "CLK": "13",
  "~{PD}/UART": "14",
  "VCC_IO": "15",
  "STEP": "16",
  "VREF": "17",
  "GND_18": "18",
  "DIR": "19",
  "STDBY": "20",
  "OA2": "21",
  "VS_22": "22",
  "BRA": "23",
  "OA1": "24",
  "NC": "25",
  "OB1": "26",
  "BRB": "27",
  "VS_28": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OB2: "output", "~{EN}": "input", GND_3: "power_in", CPO: "input", CPI: "input", VCP: "output", SPREAD: "input", "5VOUT": "power_out", "MS1/AD0": "input", "MS2/AD1": "input", DIAG: "output", INDEX: "output", CLK: "input", "~{PD}/UART": "bidirectional", VCC_IO: "power_in", STEP: "input", VREF: "passive", GND_18: "passive", DIR: "input", STDBY: "input", OA2: "output", VS_22: "power_in", BRA: "input", OA1: "output", NC: "passive", OB1: "output", BRB: "input", VS_28: "passive", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2209-LA";
  override referencePrefix = "U";
}

/**
 * Standalone driver for two-phase bipolar stepper motor, 2A, 4.75… 36V, UART, internal FETs, QFN28
 *
 * KiCad symbol: `Driver_Motor:TMC2224-LA`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP?5x5mm?P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/TMC2202_TMC2208_TMC2224_datasheet_rev1.13.pdf
 * Keywords: Standalone driver stepper motor.
 * Default footprint: Package_DFN_QFN:TQFN-32-1EP_5x5mm_P0.5mm_EP3.4x3.4mm_ThermalVias.
 */
export class TMC2224_LA extends Component.withPins({
  "MS2": "1",
  "INDEX": "2",
  "GND_3": "3",
  "CPO": "4",
  "CPI": "5",
  "VCP": "6",
  "VS_7": "7",
  "OA2": "8",
  "BRA": "9",
  "OA1": "10",
  "OB1": "11",
  "BRB": "12",
  "OB2": "13",
  "VS_14": "14",
  "VREF": "15",
  "TEST": "16",
  "GND_17": "17",
  "5VOUT": "18",
  "VCC_IO": "19",
  "PDN_UART": "20",
  "DIAG": "21",
  "SPREAD": "22",
  "DIR": "23",
  "ENN": "24",
  "STEP": "25",
  "NC": "26",
  "CLK": "27",
  "MS1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { MS2: "input", INDEX: "output", GND_3: "power_in", CPO: "passive", CPI: "passive", VCP: "passive", VS_7: "power_in", OA2: "output", BRA: "passive", OA1: "output", OB1: "output", BRB: "passive", OB2: "output", VS_14: "passive", VREF: "input", TEST: "input", GND_17: "passive", "5VOUT": "power_out", VCC_IO: "power_in", PDN_UART: "bidirectional", DIAG: "output", SPREAD: "input", DIR: "input", ENN: "input", STEP: "input", NC: "no_connect", CLK: "input", MS1: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2224-LA";
  override referencePrefix = "U";
}

/**
 * Power Driver For Stepper Motors, 2.0A, 4.75-29V, HTSSOP-28
 *
 * KiCad symbol: `Driver_Motor:TMC2226-SA`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x9.7mm*P0.65mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2226_datasheet_rev1.10.pdf
 * Keywords: Standalone driver stepper motor.
 * Default footprint: Package_SO:HTSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.75x6.2mm_ThermalVias.
 */
export class TMC2226_SA extends Component.withPins({
  "OB1": "1",
  "BRB": "2",
  "VS_3": "3",
  "OB2": "4",
  "~{EN}": "5",
  "GND_6": "6",
  "CPO": "7",
  "CPI": "8",
  "VCP": "9",
  "SPREAD": "10",
  "5VOUT": "11",
  "MS1_AD0": "12",
  "NC": "13",
  "MS2_AD1": "14",
  "DIAG": "15",
  "INDEX": "16",
  "CLK": "17",
  "PDN_UART": "18",
  "VCC_IO": "19",
  "STEP": "20",
  "VREF": "21",
  "GND_22": "22",
  "DIR": "23",
  "STDBY": "24",
  "OA2": "25",
  "VS_26": "26",
  "BRA": "27",
  "OA1": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OB1: "output", BRB: "passive", VS_3: "power_in", OB2: "output", "~{EN}": "input", GND_6: "power_in", CPO: "input", CPI: "input", VCP: "passive", SPREAD: "input", "5VOUT": "power_out", MS1_AD0: "input", NC: "passive", MS2_AD1: "input", DIAG: "output", INDEX: "output", CLK: "input", PDN_UART: "bidirectional", VCC_IO: "power_in", STEP: "input", VREF: "passive", GND_22: "passive", DIR: "input", STDBY: "input", OA2: "output", VS_26: "power_in", BRA: "passive", OA1: "output", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2226-SA";
  override referencePrefix = "U";
}

/**
 * Driver for two-phase stepper motors with external mosfet
 *
 * KiCad symbol: `Driver_Motor:TMC262`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC262_Datasheet.pdf
 * Keywords: trinamic tlc262 stepper.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class TMC262 extends Component.withPins({
  "GND_1": "1",
  "HA1": "2",
  "HA2": "3",
  "BMA2": "4",
  "BMA1": "5",
  "LA1": "6",
  "LA2": "7",
  "SRA": "8",
  "5VOUT": "9",
  "SD0": "10",
  "SDI": "11",
  "SCK": "12",
  "GND_13": "13",
  "CSN": "14",
  "~{ENN}": "15",
  "CLK": "16",
  "SRB": "17",
  "LB2": "18",
  "LB1": "19",
  "BMB1": "20",
  "BMB2": "21",
  "HB2": "22",
  "HB1": "23",
  "VHS": "24",
  "VS": "25",
  "TST_ANA": "26",
  "SG_TST": "27",
  "GNDP": "28",
  "VCC_IO": "29",
  "DIR": "30",
  "STEP": "31",
  "TST_MODE": "32",
  "DIE_PAD": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", HA1: "output", HA2: "output", BMA2: "input", BMA1: "input", LA1: "output", LA2: "output", SRA: "input", "5VOUT": "power_out", SD0: "tri_state", SDI: "input", SCK: "input", GND_13: "power_in", CSN: "input", "~{ENN}": "input", CLK: "input", SRB: "input", LB2: "output", LB1: "output", BMB1: "input", BMB2: "input", HB2: "output", HB1: "output", VHS: "power_in", VS: "power_in", TST_ANA: "output", SG_TST: "output", GNDP: "power_in", VCC_IO: "power_in", DIR: "input", STEP: "input", TST_MODE: "input", DIE_PAD: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC262";
  override referencePrefix = "U";
}

/**
 * Standalone driver for two-phase bipolar stepper motor, 0-30V, 2.4A, LQFP-44
 *
 * KiCad symbol: `Driver_Motor:TMC2660`. Reference prefix: `U`.
 * Footprint filters: *LQFP*10x10mm*P0.8mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC2660_datasheet_Rev1.07.pdf
 * Keywords: Standalone driver stepper motor.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class TMC2660 extends Component.withPins({
  "n.c._1": "1",
  "OA1_2": "2",
  "OA1_3": "3",
  "VSA": "4",
  "OA2_5": "5",
  "OA2_6": "6",
  "OA1_7": "7",
  "OA1_8": "8",
  "BRA": "9",
  "OA2_10": "10",
  "OA2_11": "11",
  "SRA": "12",
  "5VOUT": "13",
  "SDO": "14",
  "SDI": "15",
  "SCK": "16",
  "GND_17": "17",
  "~{CS}": "18",
  "~{EN}": "19",
  "n.c._20": "20",
  "CLK": "21",
  "SRB": "22",
  "OB2_23": "23",
  "OB2_24": "24",
  "BRB": "25",
  "OB1_26": "26",
  "OB1_27": "27",
  "OB2_28": "28",
  "OB2_29": "29",
  "VSB": "30",
  "OB1_31": "31",
  "OB1_32": "32",
  "n.c._33": "33",
  "n.c._34": "34",
  "VHS": "35",
  "VS": "36",
  "ST_ALONE/TST_ANA": "37",
  "SG_TST": "38",
  "GND_39": "39",
  "VCC_IO": "40",
  "DIR": "41",
  "STEP": "42",
  "TST_MODE": "43",
  "GND_44": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "n.c._1": "free", OA1_2: "power_out", OA1_3: "passive", VSA: "power_in", OA2_5: "power_out", OA2_6: "passive", OA1_7: "passive", OA1_8: "passive", BRA: "input", OA2_10: "passive", OA2_11: "passive", SRA: "input", "5VOUT": "power_out", SDO: "passive", SDI: "input", SCK: "input", GND_17: "power_in", "~{CS}": "input", "~{EN}": "input", "n.c._20": "no_connect", CLK: "input", SRB: "input", OB2_23: "power_out", OB2_24: "passive", BRB: "input", OB1_26: "power_out", OB1_27: "passive", OB2_28: "passive", OB2_29: "passive", VSB: "power_in", OB1_31: "passive", OB1_32: "passive", "n.c._33": "free", "n.c._34": "no_connect", VHS: "power_in", VS: "power_in", "ST_ALONE/TST_ANA": "input", SG_TST: "output", GND_39: "passive", VCC_IO: "power_in", DIR: "input", STEP: "input", TST_MODE: "input", GND_44: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC2660";
  override referencePrefix = "U";
}

/**
 * Power Driver For Stepper Motors, 2.0A, 4.75-46V, TQFP-48
 *
 * KiCad symbol: `Driver_Motor:TMC5130A-TA`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC5130_datasheet_Rev1.17.pdf
 * Keywords: Standalone driver stepper motor.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP5x5mm_ThermalVias.
 */
export class TMC5130A_TA extends Component.withPins({
  "TST_MODE": "1",
  "CLK": "2",
  "~{CS}_CFG3": "3",
  "SCK_CFG2": "4",
  "SDI_NAI_CFG1": "5",
  "NC_6": "6",
  "SDO_NAO_CFG0": "7",
  "REFL_STEP": "8",
  "REFR_DIR": "9",
  "VCC_IO": "10",
  "SD_MODE": "11",
  "SPI_MODE": "12",
  "GNDP_13": "13",
  "DNC_14": "14",
  "OB1": "15",
  "DNC_16": "16",
  "BRB": "17",
  "DNC_18": "18",
  "OB2": "19",
  "DNC_20": "20",
  "VS_21": "21",
  "DNC_22": "22",
  "ENCN_DCO": "23",
  "ENCB_DCEN_CFG4": "24",
  "ENCA_DCIN_CFG5": "25",
  "SWN_DIAG0": "26",
  "SWP_DIAG1": "27",
  "SWSEL": "28",
  "~{DRV_EN}_CFG6": "29",
  "AIN_IREF": "30",
  "NC_31": "31",
  "GNDA": "32",
  "5VOUT": "33",
  "VCC": "34",
  "CP0": "35",
  "NC_36": "36",
  "CPI": "37",
  "VCP": "38",
  "VSA": "39",
  "VS_40": "40",
  "DNC_41": "41",
  "OA2": "42",
  "DNC_43": "43",
  "BRA": "44",
  "DNC_45": "45",
  "OA1": "46",
  "DNC_47": "47",
  "GNDP_48": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TST_MODE: "input", CLK: "input", "~{CS}_CFG3": "input", SCK_CFG2: "input", SDI_NAI_CFG1: "input", NC_6: "passive", SDO_NAO_CFG0: "bidirectional", REFL_STEP: "input", REFR_DIR: "input", VCC_IO: "power_in", SD_MODE: "input", SPI_MODE: "input", GNDP_13: "power_in", DNC_14: "no_connect", OB1: "output", DNC_16: "no_connect", BRB: "passive", DNC_18: "no_connect", OB2: "output", DNC_20: "no_connect", VS_21: "power_in", DNC_22: "no_connect", ENCN_DCO: "bidirectional", ENCB_DCEN_CFG4: "input", ENCA_DCIN_CFG5: "input", SWN_DIAG0: "bidirectional", SWP_DIAG1: "bidirectional", SWSEL: "input", "~{DRV_EN}_CFG6": "input", AIN_IREF: "input", NC_31: "passive", GNDA: "power_in", "5VOUT": "power_out", VCC: "power_in", CP0: "passive", NC_36: "passive", CPI: "passive", VCP: "passive", VSA: "power_in", VS_40: "power_in", DNC_41: "no_connect", OA2: "output", DNC_43: "no_connect", BRA: "passive", DNC_45: "no_connect", OA1: "output", DNC_47: "no_connect", GNDP_48: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC5130A-TA";
  override referencePrefix = "U";
}

/**
 * 20A Driver for two-phase bipolar stepper motor, SPI, UART, TQFP-48
 *
 * KiCad symbol: `Driver_Motor:TMC5160A-TA`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see https://www.trinamic.com/fileadmin/assets/Products/ICs_Documents/TMC5160A_Datasheet_Rev1.14.pdf
 * Keywords: stepper motor driver trinamic.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP5x5mm_ThermalVias.
 */
export class TMC5160A_TA extends Component.withPins({
  "HB1": "1",
  "CB1": "2",
  "12VOUT": "3",
  "VSA": "4",
  "5VOUT": "5",
  "GNDA": "6",
  "SRAL": "7",
  "SRAH": "8",
  "SRBH": "9",
  "SRBL": "10",
  "TST_MODE": "11",
  "CLK": "12",
  "~{CS}/CFG3": "13",
  "SCK/CFG2": "14",
  "SDI/CFG1": "15",
  "SDO/CFG0": "16",
  "REFL/STEP": "17",
  "REFR/DIR": "18",
  "GNDD_19": "19",
  "VCC_IO": "20",
  "SD_MODE": "21",
  "SPI_MODE": "22",
  "ENCB/DCEN/CFG4": "23",
  "ENCA/DCIN/CFG5": "24",
  "ENCN/DCO/CFG6": "25",
  "SWN/DIAG0": "26",
  "SWP/DIAG1": "27",
  "~{DRV_EN}": "28",
  "VCC": "29",
  "GNDD_30": "30",
  "CPO": "31",
  "CPI": "32",
  "VS": "33",
  "VCP": "34",
  "CA2": "35",
  "HA2": "36",
  "BMA2": "37",
  "LA2": "38",
  "LA1": "39",
  "BMA1": "40",
  "HA1": "41",
  "CA1": "42",
  "CB2": "43",
  "HB2": "44",
  "BMB2": "45",
  "LB2": "46",
  "LB1": "47",
  "BMB1": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HB1: "output", CB1: "passive", "12VOUT": "power_out", VSA: "power_in", "5VOUT": "power_out", GNDA: "power_in", SRAL: "passive", SRAH: "passive", SRBH: "passive", SRBL: "passive", TST_MODE: "input", CLK: "input", "~{CS}/CFG3": "input", "SCK/CFG2": "input", "SDI/CFG1": "input", "SDO/CFG0": "bidirectional", "REFL/STEP": "input", "REFR/DIR": "input", GNDD_19: "power_in", VCC_IO: "power_in", SD_MODE: "input", SPI_MODE: "input", "ENCB/DCEN/CFG4": "input", "ENCA/DCIN/CFG5": "input", "ENCN/DCO/CFG6": "bidirectional", "SWN/DIAG0": "bidirectional", "SWP/DIAG1": "bidirectional", "~{DRV_EN}": "input", VCC: "power_in", GNDD_30: "passive", CPO: "passive", CPI: "passive", VS: "power_in", VCP: "passive", CA2: "passive", HA2: "output", BMA2: "passive", LA2: "output", LA1: "output", BMA1: "passive", HA1: "output", CA1: "passive", CB2: "passive", HB2: "output", BMB2: "passive", LB2: "output", LB1: "output", BMB1: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:TMC5160A-TA";
  override referencePrefix = "U";
}

/**
 * Full Bridge Motor Driver, 41V, 30A, -40 to 150C
 *
 * KiCad symbol: `Driver_Motor:VNH2SP30`. Reference prefix: `U`.
 * Footprint filters: ST*MultiPowerSO*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/group2/66/b8/f5/2c/9a/66/41/c7/CD00043711/files/CD00043711.pdf/jcr:content/translations/en.CD00043711.pdf
 * Keywords: full-bridge h-bridge.
 * Default footprint: Package_SO:ST_MultiPowerSO-30.
 */
export class VNH2SP30 extends Component.withPins({
  "OUTA_1": "1",
  "NC_2": "2",
  "VCC_3": "3",
  "NC_4": "4",
  "INA": "5",
  "EN/DIAA": "6",
  "NC_7": "7",
  "PWM": "8",
  "CS": "9",
  "EN/DIAB": "10",
  "INB": "11",
  "NC_12": "12",
  "VCC_13": "13",
  "NC_14": "14",
  "OUTB_15": "15",
  "OUTB_16": "16",
  "NC_17": "17",
  "GNDB_18": "18",
  "GNDB_19": "19",
  "GNDB_20": "20",
  "OUTB_21": "21",
  "NC_22": "22",
  "VCC_23": "23",
  "NC_24": "24",
  "OUTA_25": "25",
  "GNDA_26": "26",
  "GNDA_27": "27",
  "GNDA_28": "28",
  "NC_29": "29",
  "OUTA_30": "30",
  "VCC_31": "31",
  "OUTB_32": "32",
  "OUTA_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", NC_2: "no_connect", VCC_3: "power_in", NC_4: "no_connect", INA: "input", "EN/DIAA": "output", NC_7: "no_connect", PWM: "input", CS: "output", "EN/DIAB": "output", INB: "input", NC_12: "no_connect", VCC_13: "passive", NC_14: "no_connect", OUTB_15: "output", OUTB_16: "passive", NC_17: "no_connect", GNDB_18: "power_in", GNDB_19: "passive", GNDB_20: "passive", OUTB_21: "passive", NC_22: "no_connect", VCC_23: "passive", NC_24: "no_connect", OUTA_25: "passive", GNDA_26: "power_in", GNDA_27: "passive", GNDA_28: "passive", NC_29: "no_connect", OUTA_30: "passive", VCC_31: "passive", OUTB_32: "passive", OUTA_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:VNH2SP30";
  override referencePrefix = "U";
}

/**
 * Full Bridge Motor Driver, 41V, 30A, -40 to 150C, MultiPowerSO-30
 *
 * KiCad symbol: `Driver_Motor:VNH5019A-E`. Reference prefix: `U`.
 * Footprint filters: ST*MultiPowerSO*.
 * @see https://www.st.com/resource/en/datasheet/vnh5019a-e.pdf
 * Keywords: full-bridge h-bridge.
 * Default footprint: Package_SO:ST_MultiPowerSO-30.
 */
export class VNH5019A_E extends Component.withPins({
  "OUTA_1": "1",
  "NC_2": "2",
  "VCC_3": "3",
  "INA": "4",
  "EN/DIAGA": "5",
  "CS_DIS": "6",
  "PWM": "7",
  "CS": "8",
  "EN/DIAGB": "9",
  "INB": "10",
  "CP": "11",
  "VBAT": "12",
  "VCC_13": "13",
  "NC_14": "14",
  "OUTB_15": "15",
  "OUTB_16": "16",
  "NC_17": "17",
  "GNDB_18": "18",
  "GNDB_19": "19",
  "GNDB_20": "20",
  "OUTB_21": "21",
  "NC_22": "22",
  "VCC_23": "23",
  "NC_24": "24",
  "OUTA_25": "25",
  "GNDA_26": "26",
  "GNDA_27": "27",
  "GNDA_28": "28",
  "NC_29": "29",
  "OUTA_30": "30",
  "VCC_31": "31",
  "OUTB_32": "32",
  "OUTA_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA_1: "output", NC_2: "no_connect", VCC_3: "power_in", INA: "input", "EN/DIAGA": "open_collector", CS_DIS: "input", PWM: "input", CS: "output", "EN/DIAGB": "open_collector", INB: "input", CP: "output", VBAT: "power_in", VCC_13: "passive", NC_14: "no_connect", OUTB_15: "output", OUTB_16: "passive", NC_17: "no_connect", GNDB_18: "power_in", GNDB_19: "passive", GNDB_20: "passive", OUTB_21: "passive", NC_22: "no_connect", VCC_23: "passive", NC_24: "no_connect", OUTA_25: "passive", GNDA_26: "power_in", GNDA_27: "passive", GNDA_28: "passive", NC_29: "no_connect", OUTA_30: "passive", VCC_31: "passive", OUTB_32: "passive", OUTA_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:VNH5019A-E";
  override referencePrefix = "U";
}

/**
 * Reversible DC motor drive with speed control, 3-18V, 0.85A, SOIC-8
 *
 * KiCad symbol: `Driver_Motor:ZXBM5210-S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.diodes.com/assets/Datasheets/ZXBM5210.pdf
 * Keywords: H-bridge motor driver PWM single coil.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ZXBM5210_S extends Component.withPins({
  "OUT1": "1",
  "VM": "2",
  "VDD": "3",
  "FWD": "4",
  "REV": "5",
  "VREF": "6",
  "OUT2": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT1: "output", VM: "power_in", VDD: "power_in", FWD: "input", REV: "input", VREF: "input", OUT2: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:ZXBM5210-S";
  override referencePrefix = "U";
}

/**
 * Reversible DC motor drive with speed control, 3-18V, 0.85A, SOIC-8EP
 *
 * KiCad symbol: `Driver_Motor:ZXBM5210-SP`. Reference prefix: `U`.
 * Footprint filters: Diodes*SO*EP*.
 * @see https://www.diodes.com/assets/Datasheets/ZXBM5210.pdf
 * Keywords: H-bridge motor driver PWM single coil.
 * Default footprint: Package_SO:Diodes_SO-8EP.
 */
export class ZXBM5210_SP extends Component.withPins({
  "OUT1": "1",
  "VM": "2",
  "VDD": "3",
  "FWD": "4",
  "REV": "5",
  "VREF": "6",
  "OUT2": "7",
  "GND_8": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT1: "output", VM: "power_in", VDD: "power_in", FWD: "input", REV: "input", VREF: "input", OUT2: "output", GND_8: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_Motor:ZXBM5210-SP";
  override referencePrefix = "U";
}
