// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Standalone PFC Controller in CCM, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE1PCS01`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE1PCS01-DS-v01_03-en.pdf?fileId=db3a304412b407950112b427c6f13cc7
 * Keywords: SMPS pfc controller.
 */
export class ICE1PCS01 extends Component.withPins({
  "GND": "1",
  "ICOMP": "2",
  "ISENSE": "3",
  "FREQ": "4",
  "VCOMP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ICOMP: "passive", ISENSE: "input", FREQ: "passive", VCOMP: "passive", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE1PCS01";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM With Input Brown-Out Protection, 65kHz, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE1PCS02`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE1PCS02-DS-v01_02-en.pdf?fileId=db3a304412b407950112b427c9283ccb
 * Keywords: SMPS pfc controller.
 */
export class ICE1PCS02 extends Component.withPins({
  "GND": "1",
  "ICOMP": "2",
  "ISENSE": "3",
  "VINS": "4",
  "VCOMP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ICOMP: "passive", ISENSE: "input", VINS: "input", VCOMP: "passive", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE1PCS02";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE2PCS01`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE2PCS01-DS-v02_03-en.pdf?fileId=db3a304412b407950112b427caa43ccf
 * Keywords: SMPS pfc controller.
 */
export class ICE2PCS01 extends Component.withPins({
  "GND": "1",
  "ICOMP": "2",
  "ISENSE": "3",
  "FREQ": "4",
  "VCOMP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ICOMP: "passive", ISENSE: "input", FREQ: "passive", VCOMP: "passive", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE2PCS01";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM With Input Brown-Out Protection, 65kHz, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE2PCS02`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE2PCS02-DS-v02_04-en.pdf?fileId=db3a304412b407950112b427cc3c3cdc
 * Keywords: SMPS pfc controller.
 */
export class ICE2PCS02 extends Component.withPins({
  "GND": "1",
  "ICOMP": "2",
  "ISENSE": "3",
  "VINS": "4",
  "VCOMP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ICOMP: "passive", ISENSE: "input", VINS: "input", VCOMP: "passive", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE2PCS02";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM With Input Brown-Out Protection, 100kHz, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE2PCS03`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE2PCS03-DS-v02_01-en.pdf?fileId=db3a30431936bc4b01193b45457e52a1
 * Keywords: SMPS pfc controller.
 */
export class ICE2PCS03 extends Component.withPins({
  "GND": "1",
  "ICOMP": "2",
  "ISENSE": "3",
  "VINS": "4",
  "VCOMP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ICOMP: "passive", ISENSE: "input", VINS: "input", VCOMP: "passive", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE2PCS03";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM With Input Brown-Out Protection, 133kHz, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE2PCS04`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE2PCS04-DS-v02_01-en.pdf?fileId=db3a30431936bc4b01193b4e467952a9
 * Keywords: SMPS pfc controller.
 */
export class ICE2PCS04 extends Component.withPins({
  "GND": "1",
  "ICOMP": "2",
  "ISENSE": "3",
  "VINS": "4",
  "VCOMP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ICOMP: "passive", ISENSE: "input", VINS: "input", VCOMP: "passive", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE2PCS04";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE2PCS05`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE2PCS05-DS-v01_02-en.pdf?fileId=db3a30431c69a49d011cdfb46a834373
 * Keywords: SMPS pfc controller.
 */
export class ICE2PCS05 extends Component.withPins({
  "GND": "1",
  "ICOMP": "2",
  "ISENSE": "3",
  "FREQ": "4",
  "VCOMP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ICOMP: "passive", ISENSE: "input", FREQ: "passive", VCOMP: "passive", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE2PCS05";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM With Input Brown-Out Protection, 65kHz, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE2PCS06`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE2PCS06-DS-v01_01-en.pdf?fileId=db3a3043327f13e3013285ff4ecb2e77
 * Keywords: SMPS pfc controller.
 */
export class ICE2PCS06 extends Component.withPins({
  "GND": "1",
  "ICOMP": "2",
  "ISENSE": "3",
  "VINS": "4",
  "VCOMP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", ICOMP: "passive", ISENSE: "input", VINS: "input", VCOMP: "passive", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE2PCS06";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:ICE3PCS01`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE3PCS01-DS-v03_00-EN.pdf?fileId=db3a304329a0f6ee0129a67ae8c02b46
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class ICE3PCS01 extends Component.withPins({
  "BOFO": "1",
  "ISENSE": "2",
  "SGND": "3",
  "ICOMP": "4",
  "FREQ": "5",
  "VB_OK": "6",
  "VBTHL_EN": "7",
  "VREF": "8",
  "BOP": "9",
  "OVP": "10",
  "VSENSE": "11",
  "VCC": "12",
  "GATE": "13",
  "PGND": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOFO: "input", ISENSE: "input", SGND: "power_in", ICOMP: "passive", FREQ: "passive", VB_OK: "output", VBTHL_EN: "input", VREF: "output", BOP: "input", OVP: "input", VSENSE: "input", VCC: "power_in", GATE: "output", PGND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE3PCS01";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE3PCS02`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE3PCS02G-DS-v03_00-EN.pdf?fileId=db3a304329a0f6ee0129a67fab472b4b
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ICE3PCS02 extends Component.withPins({
  "ISENSE": "1",
  "GND": "2",
  "ICOMP": "3",
  "FREQ": "4",
  "OVP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ISENSE: "input", GND: "power_in", ICOMP: "passive", FREQ: "passive", OVP: "input", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE3PCS02";
  override referencePrefix = "U";
}

/**
 * Standalone PFC Controller in CCM, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE3PCS03`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE3PCS03G-DS-v03_00-EN.pdf?fileId=db3a304329a0f6ee0129a683c9c92b50
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ICE3PCS03 extends Component.withPins({
  "ISENSE": "1",
  "GND": "2",
  "ICOMP": "3",
  "FREQ": "4",
  "BOP": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ISENSE: "input", GND: "power_in", ICOMP: "passive", FREQ: "passive", BOP: "input", VSENSE: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ICE3PCS03";
  override referencePrefix = "U";
}

/**
 * Fixed 22.2kHz Frequency, uPFC One Cycle Control IC With Brown-Out Protection, Continuous Conduction Mode, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR1153S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir1153.pdf?fileId=5546d462533600a4015355c42a5b1649
 * Keywords: pfc controller ccm.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR1153S extends Component.withPins({
  "COM": "1",
  "COMP": "2",
  "ISNS": "3",
  "BOP": "4",
  "OVP/EN": "5",
  "VFB": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COM: "power_in", COMP: "output", ISNS: "passive", BOP: "input", "OVP/EN": "input", VFB: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR1153S";
  override referencePrefix = "U";
}

/**
 * Programmable Frequency, One Cycle Control PFC IC, Continuous Conduction Mode, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR1155S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir1155spbf.pdf?fileId=5546d462533600a4015355c431f9164b
 * Keywords: pfc controller ccm.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR1155S extends Component.withPins({
  "COM": "1",
  "FREQ": "2",
  "ISNS": "3",
  "OVP": "4",
  "COMP": "5",
  "VFB": "6",
  "VCC": "7",
  "GATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COM: "power_in", FREQ: "passive", ISNS: "passive", OVP: "input", COMP: "output", VFB: "input", VCC: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR1155S";
  override referencePrefix = "U";
}

/**
 * SmartRectifier Control IC, 500kHz, 200V, 1.0/2.5A, SOT-23-5
 *
 * KiCad symbol: `Regulator_Controller:IR1161L`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/ir1161lpbf.pdf?fileId=5546d462533600a4015355c439a5164d
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class IR1161L extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "MOT": "3",
  "VD": "4",
  "GATE": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", MOT: "passive", VD: "input", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR1161L";
  override referencePrefix = "U";
}

/**
 * SmartRectifier Control IC, 500kHz, 200V, 2.0/7.0A, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR1167S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir1167aspbf.pdf?fileId=5546d462533600a4015355c45d9c1655
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR1167S extends Component.withPins({
  "VCC": "1",
  "OVT": "2",
  "MOT": "3",
  "EN": "4",
  "VD": "5",
  "VS": "6",
  "GND": "7",
  "VGATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", OVT: "input", MOT: "passive", EN: "input", VD: "input", VS: "input", GND: "power_in", VGATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR1167S";
  override referencePrefix = "U";
}

/**
 * Advanced SmartRectifier Control IC, 500kHz, 200V, 1.0/4.0A, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR11662S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir11662spbf.pdf?fileId=5546d462533600a4015355c44195164f
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR11662S extends Component.withPins({
  "VCC": "1",
  "OVT": "2",
  "MOT": "3",
  "EN": "4",
  "VD": "5",
  "VS": "6",
  "GND": "7",
  "VGATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", OVT: "input", MOT: "passive", EN: "input", VD: "input", VS: "input", GND: "power_in", VGATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR11662S";
  override referencePrefix = "U";
}

/**
 * Advanced SmartRectifier Control IC, 500kHz, 200V, 2.0/7.0A, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR11672AS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir11672aspbf.pdf?fileId=5546d462533600a4015355c455561653
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR11672AS extends Component.withPins({
  "VCC": "1",
  "OVT": "2",
  "MOT": "3",
  "EN": "4",
  "VD": "5",
  "VS": "6",
  "GND": "7",
  "VGATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", OVT: "input", MOT: "passive", EN: "input", VD: "input", VS: "input", GND: "power_in", VGATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR11672AS";
  override referencePrefix = "U";
}

/**
 * Dual Smart Rectifier Driver IC, 500kHz, 200V, 1.0/4.0A, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR1168S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir1168.pdf?fileId=5546d462533600a4015355c467fa1658
 * Keywords: dual synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR1168S extends Component.withPins({
  "GATE1": "1",
  "VCC": "2",
  "VS1": "3",
  "VD1": "4",
  "VD2": "5",
  "VS2": "6",
  "GND": "7",
  "GATE2": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GATE1: "output", VCC: "power_in", VS1: "input", VD1: "input", VD2: "input", VS2: "input", GND: "power_in", GATE2: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR1168S";
  override referencePrefix = "U";
}

/**
 * Dual SmartRectifier Driver IC, 400kHz, 200V, 1.0/4.0A, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR11682S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir11682spbf.pdf?fileId=5546d462533600a4015355c47188165a
 * Keywords: dual synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR11682S extends Component.withPins({
  "GATE1": "1",
  "VCC": "2",
  "VS1": "3",
  "VD1": "4",
  "VD2": "5",
  "VS2": "6",
  "GND": "7",
  "GATE2": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GATE1: "output", VCC: "power_in", VS1: "input", VD1: "input", VD2: "input", VS2: "input", GND: "power_in", GATE2: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR11682S";
  override referencePrefix = "U";
}

/**
 * Dual Synchronous Rectification Control IC, 400kHz, 200V, 1.0/4.0A, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR11688S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir11688spbf.pdf?fileId=5546d462533600a4015355c47c70165c
 * Keywords: dual synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR11688S extends Component.withPins({
  "GATE1": "1",
  "VCC": "2",
  "MOT": "3",
  "VD1": "4",
  "VD2": "5",
  "VS": "6",
  "GND": "7",
  "GATE2": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GATE1: "output", VCC: "power_in", MOT: "passive", VD1: "input", VD2: "input", VS: "input", GND: "power_in", GATE2: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR11688S";
  override referencePrefix = "U";
}

/**
 * Advanced SmartRectifier Control IC, 500kHz, 200V, 1.0/4.0A, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:IR1169S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/ir1169.pdf?fileId=5546d462533600a4015355c485c4165e
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IR1169S extends Component.withPins({
  "VCC": "1",
  "SYNC": "2",
  "MOT": "3",
  "EN": "4",
  "VD": "5",
  "VS": "6",
  "GND": "7",
  "VGATE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", SYNC: "input", MOT: "passive", EN: "input", VD: "input", VS: "input", GND: "power_in", VGATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IR1169S";
  override referencePrefix = "U";
}

/**
 * Boost PFC and SMPS Control IC, Critical Conduction Mode, SOT-23-5
 *
 * KiCad symbol: `Regulator_Controller:IRS2505L`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/irs2505lpbf.pdf?fileId=5546d462533600a40153567ad42c2819
 * Keywords: pfc controller crcm dcm.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class IRS2505L extends Component.withPins({
  "CMP": "1",
  "COM": "2",
  "VCC": "3",
  "PFC": "4",
  "VBUS": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CMP: "passive", COM: "power_in", VCC: "power_in", PFC: "output", VBUS: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:IRS2505L";
  override referencePrefix = "U";
}

/**
 * ZVS Full Bridge PWM Controller, SOIC-28
 *
 * KiCad symbol: `Regulator_Controller:ISL6551`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.intersil.com/content/dam/Intersil/documents/isl6/isl6551.pdf
 * Keywords: SMPS controller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class ISL6551 extends Component.withPins({
  "VSS": "1",
  "CT": "2",
  "RD": "3",
  "R_RESDLY": "4",
  "R_RA": "5",
  "ISENSE": "6",
  "PKILIM": "7",
  "BGREF": "8",
  "R_LEB": "9",
  "CS_COMP": "10",
  "CSS": "11",
  "EANI": "12",
  "EAI": "13",
  "EAO": "14",
  "SHARE": "15",
  "LATSD": "16",
  "DCOK": "17",
  "ON/OFF": "18",
  "SYNC2": "19",
  "SYNC1": "20",
  "LOWER2": "21",
  "LOWER1": "22",
  "UPPER2": "23",
  "UPPER1": "24",
  "PGND": "25",
  "VDDP2": "26",
  "VDDP1": "27",
  "VDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", CT: "passive", RD: "passive", R_RESDLY: "passive", R_RA: "passive", ISENSE: "input", PKILIM: "input", BGREF: "output", R_LEB: "passive", CS_COMP: "passive", CSS: "passive", EANI: "input", EAI: "input", EAO: "output", SHARE: "input", LATSD: "input", DCOK: "output", "ON/OFF": "input", SYNC2: "output", SYNC1: "output", LOWER2: "output", LOWER1: "output", UPPER2: "output", UPPER1: "output", PGND: "power_in", VDDP2: "power_in", VDDP1: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:ISL6551";
  override referencePrefix = "U";
}

/**
 * Power Factor Corrector, Fixed Frequency Average Current Mode, DIP-20/SOIC-20
 *
 * KiCad symbol: `Regulator_Controller:L4981A`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.st.com/resource/en/datasheet/l4981.pdf
 * Keywords: SMPS pfc controller.
 */
export class L4981A extends Component.withPins({
  "P-GND": "1",
  "IPK": "2",
  "OVP": "3",
  "IAC": "4",
  "CA-OUT": "5",
  "LFF": "6",
  "VRMS": "7",
  "MULT-OUT": "8",
  "ISENSE": "9",
  "S-GND": "10",
  "VREF": "11",
  "SS": "12",
  "VA-OUT": "13",
  "VFEED": "14",
  "P-UVLO": "15",
  "SYNC": "16",
  "ROSC": "17",
  "COSC": "18",
  "VCC": "19",
  "GDRV": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P-GND": "power_in", IPK: "input", OVP: "input", IAC: "input", "CA-OUT": "output", LFF: "input", VRMS: "input", "MULT-OUT": "output", ISENSE: "input", "S-GND": "power_in", VREF: "output", SS: "passive", "VA-OUT": "output", VFEED: "input", "P-UVLO": "input", SYNC: "bidirectional", ROSC: "passive", COSC: "passive", VCC: "power_in", GDRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L4981A";
  override referencePrefix = "U";
}

/**
 * Power Factor Corrector, Line Modulated Frequency Average Current Mode, DIP-20/SOIC-20
 *
 * KiCad symbol: `Regulator_Controller:L4981B`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.st.com/resource/en/datasheet/l4981.pdf
 * Keywords: SMPS pfc controller.
 */
export class L4981B extends Component.withPins({
  "P-GND": "1",
  "IPK": "2",
  "OVP": "3",
  "IAC": "4",
  "CA-OUT": "5",
  "LFF": "6",
  "VRMS": "7",
  "MULT-OUT": "8",
  "ISENSE": "9",
  "S-GND": "10",
  "VREF": "11",
  "SS": "12",
  "VA-OUT": "13",
  "VFEED": "14",
  "P-UVLO": "15",
  "FREQ-MOD": "16",
  "ROSC": "17",
  "COSC": "18",
  "VCC": "19",
  "GDRV": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P-GND": "power_in", IPK: "input", OVP: "input", IAC: "input", "CA-OUT": "output", LFF: "input", VRMS: "input", "MULT-OUT": "output", ISENSE: "input", "S-GND": "power_in", VREF: "output", SS: "passive", "VA-OUT": "output", VFEED: "input", "P-UVLO": "input", "FREQ-MOD": "input", ROSC: "passive", COSC: "passive", VCC: "power_in", GDRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L4981B";
  override referencePrefix = "U";
}

/**
 * CCM PFC Controller, SSOP-10
 *
 * KiCad symbol: `Regulator_Controller:L4984D`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P1.00mm*.
 * @see http://www.st.com/resource/en/datasheet/l4984d.pdf
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SSOP-10_3.9x4.9mm_P1.00mm.
 */
export class L4984D extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "VFF": "5",
  "PFC_OK": "6",
  "TIMER": "7",
  "GND": "8",
  "GD": "9",
  "VCC": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", VFF: "passive", PFC_OK: "input", TIMER: "passive", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L4984D";
  override referencePrefix = "U";
}

/**
 * Transition Mode Power Factor Corrector, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:L6561`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.st.com/resource/en/datasheet/l6561.pdf
 * Keywords: SMPS pfc controller.
 */
export class L6561 extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "ZCD": "5",
  "GND": "6",
  "GD": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6561";
  override referencePrefix = "U";
}

/**
 * Transition-Mode PFC Controller, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:L6562`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.st.com/resource/en/datasheet/l6562.pdf
 * Keywords: SMPS pfc controller.
 */
export class L6562 extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "ZCD": "5",
  "GND": "6",
  "GD": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6562";
  override referencePrefix = "U";
}

/**
 * Transition-Mode PFC Controller, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:L6562A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.st.com/resource/en/datasheet/l6562a.pdf
 * Keywords: SMPS pfc controller.
 */
export class L6562A extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "ZCD": "5",
  "GND": "6",
  "GD": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6562A";
  override referencePrefix = "U";
}

/**
 * Transition-Mode PFC Controller, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:L6562AT`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.st.com/resource/en/datasheet/l6562at.pdf
 * Keywords: SMPS pfc controller.
 */
export class L6562AT extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "ZCD": "5",
  "GND": "6",
  "GD": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6562AT";
  override referencePrefix = "U";
}

/**
 * Advanced Transition-Mode PFC Controller, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:L6563`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/l6563.pdf
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class L6563 extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "VFF": "5",
  "TBO": "6",
  "PFC_OK": "7",
  "PWM_LATCH": "8",
  "PWM_STOP": "9",
  "RUN": "10",
  "ZCD": "11",
  "GND": "12",
  "GD": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", VFF: "passive", TBO: "passive", PFC_OK: "input", PWM_LATCH: "output", PWM_STOP: "output", RUN: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6563";
  override referencePrefix = "U";
}

/**
 * Advanced Transition-Mode PFC Controller, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:L6563A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/l6563.pdf
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class L6563A extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "VFF": "5",
  "TBO": "6",
  "PFC_OK": "7",
  "PWM_LATCH": "8",
  "PWM_STOP": "9",
  "RUN": "10",
  "ZCD": "11",
  "GND": "12",
  "GD": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", VFF: "passive", TBO: "passive", PFC_OK: "input", PWM_LATCH: "output", PWM_STOP: "output", RUN: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6563A";
  override referencePrefix = "U";
}

/**
 * High Voltage Start-Up Transition-Mode PFC, SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:L6563H`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/l6563h.pdf
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class L6563H extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "VFF": "5",
  "TBO": "6",
  "PFC_OK": "7",
  "PWM_LATCH": "8",
  "HVS": "9",
  "NC": "10",
  "PWM_STOP": "11",
  "RUN": "12",
  "ZCD": "13",
  "GND": "14",
  "GD": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", VFF: "passive", TBO: "passive", PFC_OK: "input", PWM_LATCH: "output", HVS: "input", NC: "no_connect", PWM_STOP: "output", RUN: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6563H";
  override referencePrefix = "U";
}

/**
 * Enhanced Transition-Mode PFC Controller, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:L6563S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/l6563s.pdf
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class L6563S extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "VFF": "5",
  "TBO": "6",
  "PFC_OK": "7",
  "PWM_LATCH": "8",
  "PWM_STOP": "9",
  "RUN": "10",
  "ZCD": "11",
  "GND": "12",
  "GD": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", VFF: "passive", TBO: "passive", PFC_OK: "input", PWM_LATCH: "output", PWM_STOP: "output", RUN: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6563S";
  override referencePrefix = "U";
}

/**
 * 10-Pin Transition-Mode PFC Controller, SSOP-10
 *
 * KiCad symbol: `Regulator_Controller:L6564`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P1.00mm*.
 * @see http://www.st.com/resource/en/datasheet/l6564.pdf
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SSOP-10_3.9x4.9mm_P1.00mm.
 */
export class L6564 extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "VFF": "5",
  "PFC_OK": "6",
  "ZCD": "7",
  "GND": "8",
  "GD": "9",
  "VCC": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", VFF: "passive", PFC_OK: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6564";
  override referencePrefix = "U";
}

/**
 * High Voltage Start-Up Transition-Mode PFC, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:L6564H`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/l6564h.pdf
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class L6564H extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "VFF": "5",
  "PFC_OK": "6",
  "NC_7": "7",
  "HVS": "8",
  "NC_9": "9",
  "NC_10": "10",
  "ZCD": "11",
  "GND": "12",
  "GD": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", VFF: "passive", PFC_OK: "input", NC_7: "no_connect", HVS: "input", NC_9: "no_connect", NC_10: "no_connect", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6564H";
  override referencePrefix = "U";
}

/**
 * 10-Pin Transition-Mode PFC Controller for Outdoor Applications, SSOP-10
 *
 * KiCad symbol: `Regulator_Controller:L6564T`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P1.00mm*.
 * @see http://www.st.com/resource/en/datasheet/l6564t.pdf
 * Keywords: SMPS pfc controller.
 * Default footprint: Package_SO:SSOP-10_3.9x4.9mm_P1.00mm.
 */
export class L6564T extends Component.withPins({
  "INV": "1",
  "COMP": "2",
  "MULT": "3",
  "CS": "4",
  "VFF": "5",
  "PFC_OK": "6",
  "ZCD": "7",
  "GND": "8",
  "GD": "9",
  "VCC": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", COMP: "output", MULT: "input", CS: "input", VFF: "passive", PFC_OK: "input", ZCD: "input", GND: "power_in", GD: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6564T";
  override referencePrefix = "U";
}

/**
 * High Voltage Resonant Controller, DIP-16/SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:L6598`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see www.st.com/resource/en/datasheet/l6598.pdf
 * Keywords: SMPS controller.
 */
export class L6598 extends Component.withPins({
  "CSS": "1",
  "RFSTART": "2",
  "CF": "3",
  "RFMIN": "4",
  "OPOUT": "5",
  "OPIN-": "6",
  "OPIN+": "7",
  "EN1": "8",
  "EN2": "9",
  "GND": "10",
  "LVG": "11",
  "VS": "12",
  "NC": "13",
  "OUT": "14",
  "HVG": "15",
  "VBOOT": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CSS: "passive", RFSTART: "passive", CF: "passive", RFMIN: "passive", OPOUT: "output", "OPIN-": "input", "OPIN+": "input", EN1: "input", EN2: "input", GND: "power_in", LVG: "output", VS: "power_in", NC: "no_connect", OUT: "input", HVG: "output", VBOOT: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6598";
  override referencePrefix = "U";
}

/**
 * High Voltage Resonant Controller, DIP-16/SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:L6599`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see www.st.com/resource/en/datasheet/l6599.pdf
 * Keywords: SMPS controller.
 */
export class L6599 extends Component.withPins({
  "CSS": "1",
  "DELAY": "2",
  "CF": "3",
  "RFMIN": "4",
  "STBY": "5",
  "ISEN": "6",
  "LINE": "7",
  "DIS": "8",
  "PFC_STOP": "9",
  "GND": "10",
  "LVG": "11",
  "VCC": "12",
  "NC": "13",
  "OUT": "14",
  "HVG": "15",
  "VBOOT": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CSS: "passive", DELAY: "passive", CF: "passive", RFMIN: "passive", STBY: "input", ISEN: "input", LINE: "input", DIS: "input", PFC_STOP: "open_collector", GND: "power_in", LVG: "output", VCC: "power_in", NC: "no_connect", OUT: "input", HVG: "output", VBOOT: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6599";
  override referencePrefix = "U";
}

/**
 * Single Phase PWM Controller, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:L6727`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/l6727.pdf
 * Keywords: SMPS controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class L6727 extends Component.withPins({
  "BOOT": "1",
  "UGATE": "2",
  "GND": "3",
  "LGATE": "4",
  "VCC": "5",
  "FB": "6",
  "COMP/DIS/OC": "7",
  "PHASE": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT: "input", UGATE: "output", GND: "power_in", LGATE: "output", VCC: "power_in", FB: "input", "COMP/DIS/OC": "input", PHASE: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:L6727";
  override referencePrefix = "U";
}

/**
 * Wide Input Range, Dual Synchronous Buck Controller, WQFN-32
 *
 * KiCad symbol: `Regulator_Controller:LM25119`. Reference prefix: `U`.
 * Footprint filters: WQFN*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm25119.pdf
 * Keywords: Dual Synchronous Buck.
 * Default footprint: Package_DFN_QFN:WQFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class LM25119 extends Component.withPins({
  "VCC1": "1",
  "LO1": "2",
  "PGND1": "3",
  "CSG1": "4",
  "CS1": "5",
  "RAMP1": "6",
  "SS1": "7",
  "FB1": "9",
  "COMP1": "10",
  "HB1": "30",
  "HO1": "31",
  "SW1": "32",
  "EN2": "11",
  "COMP2": "15",
  "FB2": "16",
  "SS2": "18",
  "RAMP2": "19",
  "CS2": "20",
  "CSG2": "21",
  "PGND2": "22",
  "LO2": "23",
  "VCC2": "24",
  "SW2": "25",
  "HO2": "26",
  "HB2": "27",
  "VCCDIS": "8",
  "AGND": "12",
  "RT": "13",
  "RES": "14",
  "DEMB": "17",
  "UVLO": "28",
  "VIN": "29",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC1: "power_in", LO1: "output", PGND1: "power_in", CSG1: "input", CS1: "input", RAMP1: "input", SS1: "input", FB1: "input", COMP1: "output", HB1: "power_in", HO1: "output", SW1: "bidirectional", EN2: "input", COMP2: "output", FB2: "input", SS2: "input", RAMP2: "input", CS2: "input", CSG2: "input", PGND2: "power_in", LO2: "output", VCC2: "power_in", SW2: "bidirectional", HO2: "output", HB2: "power_in", VCCDIS: "input", AGND: "power_in", RT: "input", RES: "output", DEMB: "input", UVLO: "input", VIN: "power_in", EP: "unspecified", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LM25119";
  override referencePrefix = "U";
}

/**
 * 2.97~40V Wide Input Range Boost/SEPIC/Flyback DC-DC Controller, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:LM3478MA`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*3.9x4.9mm_P1.27mm*.
 * @see https://www.ti.com/lit/gpn/lm3478
 * Keywords: Boost flyback SEPIC DC-DC controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM3478MA extends Component.withPins({
  "I_{SEN}": "1",
  "COMP": "2",
  "FB": "3",
  "AGND": "4",
  "PGND": "5",
  "DR": "6",
  "FA/SD": "7",
  "V_{IN}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "I_{SEN}": "input", COMP: "input", FB: "input", AGND: "power_in", PGND: "power_in", DR: "output", "FA/SD": "input", "V_{IN}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LM3478MA";
  override referencePrefix = "U";
}

/**
 * 2.97~40V Wide Input Range Boost/SEPIC/Flyback DC-DC Controller, VSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:LM3478MM`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/gpn/lm3478
 * Keywords: Boost flyback SEPIC DC-DC controller.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class LM3478MM extends Component.withPins({
  "I_{SEN}": "1",
  "COMP": "2",
  "FB": "3",
  "AGND": "4",
  "PGND": "5",
  "DR": "6",
  "FA/SD": "7",
  "V_{IN}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "I_{SEN}": "input", COMP: "input", FB: "input", AGND: "power_in", PGND: "power_in", DR: "output", "FA/SD": "input", "V_{IN}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LM3478MM";
  override referencePrefix = "U";
}

/**
 * 2.97~40V Wide Input Range Boost/SEPIC/Flyback DC-DC Controller, AEC-Q100 Qualified, VSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:LM3478QMM`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/gpn/lm3478q-q1
 * Keywords: Boost flyback SEPIC DC-DC controller Automotive.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class LM3478QMM extends Component.withPins({
  "I_{SEN}": "1",
  "COMP": "2",
  "FB": "3",
  "AGND": "4",
  "PGND": "5",
  "DR": "6",
  "FA/SD": "7",
  "V_{IN}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "I_{SEN}": "input", COMP: "input", FB: "input", AGND: "power_in", PGND: "power_in", DR: "output", "FA/SD": "input", "V_{IN}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LM3478QMM";
  override referencePrefix = "U";
}

/**
 * Quasi-Resonant Current-Mode PWM Controller for Off-Line Supplies, OVP/OTP, Latched OVP, VSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:LM5023`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm5023.pdf
 * Keywords: smps pwm controller ac-dc ac dc offline off-line quasi resonant quasi-resonant flyback.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class LM5023 extends Component.withPins({
  "QR": "1",
  "VSD": "2",
  "SS": "3",
  "COMP": "4",
  "CS": "5",
  "GND": "6",
  "OUT": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QR: "input", VSD: "output", SS: "passive", COMP: "input", CS: "input", GND: "power_in", OUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LM5023";
  override referencePrefix = "U";
}

/**
 * Power Factor Controller, DIP-16/SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:LT1248`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*3.9x9.9mm*P1.27mm*, DIP*16*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1248fd.pdf
 * Keywords: pfc controller.
 */
export class LT1248 extends Component.withPins({
  "GND": "1",
  "PKLIM": "2",
  "CAOUT": "3",
  "ISENSE": "4",
  "MOUT": "5",
  "IAC": "6",
  "VAOUT": "7",
  "OVP": "8",
  "VREF": "9",
  "EN/SYNC": "10",
  "VSENSE": "11",
  "RSET": "12",
  "SS": "13",
  "CSET": "14",
  "VCC": "15",
  "GTDR": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", PKLIM: "input", CAOUT: "output", ISENSE: "input", MOUT: "input", IAC: "input", VAOUT: "output", OVP: "input", VREF: "power_out", "EN/SYNC": "input", VSENSE: "input", RSET: "passive", SS: "passive", CSET: "passive", VCC: "power_in", GTDR: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LT1248";
  override referencePrefix = "U";
}

/**
 * Power Factor Controller, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:LT1249`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1249fbs.pdf
 * Keywords: pfc controller.
 */
export class LT1249 extends Component.withPins({
  "GND": "1",
  "CAOUT": "2",
  "MOUT": "3",
  "IAC": "4",
  "VAOUT": "5",
  "VSENSE": "6",
  "VCC": "7",
  "GTDR": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", CAOUT: "output", MOUT: "input", IAC: "input", VAOUT: "output", VSENSE: "input", VCC: "power_in", GTDR: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LT1249";
  override referencePrefix = "U";
}

/**
 * Power Factor and PWM Controller, DIP-20/SOIC-20
 *
 * KiCad symbol: `Regulator_Controller:LT1509`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1509.pdf
 * Keywords: pfc pwm controller.
 */
export class LT1509 extends Component.withPins({
  "GTDR1": "1",
  "GND2": "2",
  "GND1": "3",
  "CSET": "4",
  "PKLIM": "5",
  "CAOUT": "6",
  "ISENSE": "7",
  "MOUT": "8",
  "IAC": "9",
  "VAOUT": "10",
  "OVP": "11",
  "VREF": "12",
  "SS2": "13",
  "VSENSE": "14",
  "RSET": "15",
  "SS1": "16",
  "VCC": "17",
  "VC": "18",
  "RAMP": "19",
  "GTDR2": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GTDR1: "output", GND2: "power_in", GND1: "power_in", CSET: "passive", PKLIM: "input", CAOUT: "output", ISENSE: "input", MOUT: "input", IAC: "input", VAOUT: "output", OVP: "input", VREF: "power_out", SS2: "passive", VSENSE: "input", RSET: "passive", SS1: "passive", VCC: "power_in", VC: "input", RAMP: "input", GTDR2: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LT1509";
  override referencePrefix = "U";
}

/**
 * IEEE 802.3bt PD Interface with Forward/Flyback Controller, QFN-28
 *
 * KiCad symbol: `Regulator_Controller:LT4295xUFD`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT4295.pdf
 * Keywords: LTPoE++ IEEE 802.3af IEEE 802.3at IEEE 802.3bt.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x5mm_P0.5mm_EP2.65x3.65mm.
 */
export class LT4295xUFD extends Component.withPins({
  "GND_1": "1",
  "AUX": "2",
  "RCLASS++": "3",
  "RCLASS": "4",
  "T2P": "5",
  "VCC_6": "6",
  "VCC_7": "7",
  "VCC_8": "8",
  "VCC_9": "9",
  "ROSC": "10",
  "SFST": "11",
  "FSSDLY": "12",
  "ITHB": "13",
  "FB31": "14",
  "RLDCMP": "15",
  "ISEN-": "16",
  "ISEN+": "17",
  "SG": "18",
  "GND_19": "19",
  "PG": "20",
  "VCC_21": "21",
  "DNC": "22",
  "SWVCC": "23",
  "VIN": "24",
  "HSSRC": "25",
  "HSGATE": "26",
  "NC": "27",
  "VPORT": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", AUX: "input", "RCLASS++": "passive", RCLASS: "passive", T2P: "open_collector", VCC_6: "power_in", VCC_7: "passive", VCC_8: "passive", VCC_9: "passive", ROSC: "passive", SFST: "passive", FSSDLY: "input", ITHB: "input", FB31: "passive", RLDCMP: "passive", "ISEN-": "passive", "ISEN+": "passive", SG: "output", GND_19: "passive", PG: "output", VCC_21: "power_in", DNC: "no_connect", SWVCC: "output", VIN: "power_in", HSSRC: "input", HSGATE: "output", NC: "no_connect", VPORT: "input", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LT4295xUFD";
  override referencePrefix = "U";
}

/**
 * High Efficiency N-Channel Switching Regulator Controller, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:LTC1624CS8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1624f.pdf
 * Keywords: Switching Regulator Controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LTC1624CS8 extends Component.withPins({
  "ISENSE": "1",
  "Ith/RUN": "2",
  "SET": "3",
  "GND": "4",
  "SW": "5",
  "TG": "6",
  "BOOST": "7",
  "VIN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ISENSE: "input", "Ith/RUN": "input", SET: "input", GND: "power_in", SW: "input", TG: "open_collector", BOOST: "output", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LTC1624CS8";
  override referencePrefix = "U";
}

/**
 * Adjustable Frequency current Mode Flyback DC/DC controller, MSOP-10
 *
 * KiCad symbol: `Regulator_Controller:LTC3805xMSE`. Reference prefix: `U`.
 * Footprint filters: MSOP*10*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3805fg.pdf
 * Keywords: flyback dc-dc switcher switching.
 * Default footprint: Package_SO:MSOP-10-1EP_3x3mm_P0.5mm_EP1.68x1.88mm.
 */
export class LTC3805xMSE extends Component.withPins({
  "SSFLT": "1",
  "Ith": "2",
  "FB": "3",
  "RUN": "4",
  "FS": "5",
  "SYNC": "6",
  "Isense": "7",
  "OC": "8",
  "VCC": "9",
  "GATE": "10",
  "GND": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SSFLT: "passive", Ith: "passive", FB: "input", RUN: "input", FS: "passive", SYNC: "input", Isense: "input", OC: "input", VCC: "power_in", GATE: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LTC3805xMSE";
  override referencePrefix = "U";
}

/**
 * 60V dual 2-phase synchronous step-down DC/DC controller, QFN-32
 *
 * KiCad symbol: `Regulator_Controller:LTC3890`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3890fc.pdf
 * Keywords: switching buck converter regulator dual-output.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LTC3890 extends Component.withPins({
  "SENSE1-": "1",
  "FREQ": "2",
  "PHASMD": "3",
  "CLKOUT": "4",
  "PLLIN/MODE": "5",
  "GND_6": "6",
  "RUN1": "7",
  "RUN2": "8",
  "SENSE2-": "9",
  "SENSE2+": "10",
  "VFB2": "11",
  "ITH2": "12",
  "TRACK/SS2": "13",
  "PGOOD2": "14",
  "TG2": "15",
  "SW2": "16",
  "BOOST2": "17",
  "BG2": "18",
  "INTVcc": "19",
  "EXTVcc": "20",
  "PGND": "21",
  "Vin": "22",
  "BG1": "23",
  "BOOST1": "24",
  "SW1": "25",
  "TG1": "26",
  "PGOOD1": "27",
  "ILIM": "28",
  "TRACK/SS1": "29",
  "ITH1": "30",
  "VFB1": "31",
  "SENSE1+": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE1-": "input", FREQ: "input", PHASMD: "input", CLKOUT: "output", "PLLIN/MODE": "input", GND_6: "power_in", RUN1: "input", RUN2: "input", "SENSE2-": "input", "SENSE2+": "input", VFB2: "input", ITH2: "passive", "TRACK/SS2": "input", PGOOD2: "output", TG2: "output", SW2: "output", BOOST2: "output", BG2: "output", INTVcc: "power_out", EXTVcc: "power_in", PGND: "power_in", Vin: "power_in", BG1: "output", BOOST1: "output", SW1: "output", TG1: "output", PGOOD1: "output", ILIM: "input", "TRACK/SS1": "input", ITH1: "passive", VFB1: "input", "SENSE1+": "input", GND_33: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LTC3890";
  override referencePrefix = "U";
}

/**
 * 60V dual 2-phase synchronous step-down DC/DC controller, SSOP-28
 *
 * KiCad symbol: `Regulator_Controller:LTC3890-1`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x9.9mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/38901fb.pdf
 * Keywords: switching buck converter regulator dual-output.
 * Default footprint: Package_SO:SSOP-28_3.9x9.9mm_P0.635mm.
 */
export class LTC3890_1 extends Component.withPins({
  "ITH1": "1",
  "VFB1": "2",
  "SENSE1+": "3",
  "SENSE1-": "4",
  "FREQ": "5",
  "PLLIN/MODE": "6",
  "SGND": "7",
  "RUN1": "8",
  "RUN2": "9",
  "SENSE2-": "10",
  "SENSE2+": "11",
  "VFB2": "12",
  "ITH2": "13",
  "TRACK/SS2": "14",
  "TG2": "15",
  "SW2": "16",
  "BOOST2": "17",
  "BG2": "18",
  "INTVcc": "19",
  "EXTVcc": "20",
  "PGND": "21",
  "Vin": "22",
  "BG1": "23",
  "BOOST1": "24",
  "SW1": "25",
  "TG1": "26",
  "PGOOD1": "27",
  "TRACK/SS1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ITH1: "passive", VFB1: "input", "SENSE1+": "input", "SENSE1-": "input", FREQ: "input", "PLLIN/MODE": "input", SGND: "power_in", RUN1: "input", RUN2: "input", "SENSE2-": "input", "SENSE2+": "input", VFB2: "input", ITH2: "passive", "TRACK/SS2": "input", TG2: "output", SW2: "output", BOOST2: "output", BG2: "output", INTVcc: "power_out", EXTVcc: "power_in", PGND: "power_in", Vin: "power_in", BG1: "output", BOOST1: "output", SW1: "output", TG1: "output", PGOOD1: "output", "TRACK/SS1": "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LTC3890-1";
  override referencePrefix = "U";
}

/**
 * 60V dual 2-phase synchronous step-down DC/DC controller, continuous conduction, QFN-32
 *
 * KiCad symbol: `Regulator_Controller:LTC3892`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/38921fc.pdf
 * Keywords: switching buck converter regulator dual-output.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LTC3892 extends Component.withPins({
  "FREQ": "1",
  "PLLIN/MODE": "2",
  "PGOOD1": "3",
  "PGOOD2": "4",
  "INTVcc": "5",
  "RUN1": "6",
  "RUN2": "7",
  "ILIM": "8",
  "SENSE2-": "9",
  "SENSE2+": "10",
  "VFB2": "11",
  "ITH2": "12",
  "DRVUV": "13",
  "DRVSET": "14",
  "TRACK/SS2": "15",
  "TG2": "16",
  "SW2": "17",
  "BOOST2": "18",
  "BG2": "19",
  "DRVcc": "20",
  "EXTVcc": "21",
  "Vin": "22",
  "BG1": "23",
  "BOOST1": "24",
  "SW1": "25",
  "TG1": "26",
  "TRACK/SS1": "27",
  "VPRG1": "28",
  "ITH1": "29",
  "VFB1": "30",
  "SENSE1+": "31",
  "SENSE1-": "32",
  "GND": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FREQ: "input", "PLLIN/MODE": "input", PGOOD1: "output", PGOOD2: "output", INTVcc: "power_out", RUN1: "input", RUN2: "input", ILIM: "input", "SENSE2-": "input", "SENSE2+": "input", VFB2: "input", ITH2: "passive", DRVUV: "input", DRVSET: "input", "TRACK/SS2": "input", TG2: "output", SW2: "output", BOOST2: "output", BG2: "output", DRVcc: "power_out", EXTVcc: "power_in", Vin: "power_in", BG1: "output", BOOST1: "output", SW1: "output", TG1: "output", "TRACK/SS1": "input", VPRG1: "passive", ITH1: "passive", VFB1: "input", "SENSE1+": "input", "SENSE1-": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LTC3892";
  override referencePrefix = "U";
}

/**
 * 60V dual 2-phase synchronous step-down DC/DC controller, forced continuous conduction mode, TSSOP-28
 *
 * KiCad symbol: `Regulator_Controller:LTC3892-1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*1EP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/38921fc.pdf
 * Keywords: switching buck converter regulator dual-output.
 * Default footprint: Package_SO:TSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP3.05x7.56mm_ThermalVias.
 */
export class LTC3892_1 extends Component.withPins({
  "ITH1": "1",
  "VFB1": "2",
  "SENSE1+": "3",
  "SENSE1-": "4",
  "FREQ": "5",
  "PLLIN/MODE": "6",
  "INTVcc": "7",
  "RUN1": "8",
  "RUN2": "9",
  "SENSE2-": "10",
  "SENSE2+": "11",
  "VFB2": "12",
  "ITH2": "13",
  "DRVUV": "14",
  "DRVSET": "15",
  "TRACK/SS2": "16",
  "TG2": "17",
  "SW2": "18",
  "BOOST2": "19",
  "BG2": "20",
  "DRVcc": "21",
  "EXTVcc": "22",
  "Vin": "23",
  "BG1": "24",
  "BOOST1": "25",
  "SW1": "26",
  "TG1": "27",
  "TRACK/SS1": "28",
  "GND": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ITH1: "passive", VFB1: "input", "SENSE1+": "input", "SENSE1-": "input", FREQ: "input", "PLLIN/MODE": "input", INTVcc: "power_out", RUN1: "input", RUN2: "input", "SENSE2-": "input", "SENSE2+": "input", VFB2: "input", ITH2: "passive", DRVUV: "input", DRVSET: "input", "TRACK/SS2": "input", TG2: "output", SW2: "output", BOOST2: "output", BG2: "output", DRVcc: "power_out", EXTVcc: "power_in", Vin: "power_in", BG1: "output", BOOST1: "output", SW1: "output", TG1: "output", "TRACK/SS1": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LTC3892-1";
  override referencePrefix = "U";
}

/**
 * 60V dual 2-phase synchronous step-down DC/DC controller, pulse-skipping, QFN-32
 *
 * KiCad symbol: `Regulator_Controller:LTC3892-2`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/38921fc.pdf
 * Keywords: switching buck converter regulator dual-output.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LTC3892_2 extends Component.withPins({
  "FREQ": "1",
  "PLLIN/MODE": "2",
  "PGOOD1": "3",
  "PGOOD2": "4",
  "INTVcc": "5",
  "RUN1": "6",
  "RUN2": "7",
  "ILIM": "8",
  "SENSE2-": "9",
  "SENSE2+": "10",
  "VFB2": "11",
  "ITH2": "12",
  "DRVUV": "13",
  "DRVSET": "14",
  "TRACK/SS2": "15",
  "TG2": "16",
  "SW2": "17",
  "BOOST2": "18",
  "BG2": "19",
  "DRVcc": "20",
  "EXTVcc": "21",
  "Vin": "22",
  "BG1": "23",
  "BOOST1": "24",
  "SW1": "25",
  "TG1": "26",
  "TRACK/SS1": "27",
  "VPRG1": "28",
  "ITH1": "29",
  "VFB1": "30",
  "SENSE1+": "31",
  "SENSE1-": "32",
  "GND": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FREQ: "input", "PLLIN/MODE": "input", PGOOD1: "output", PGOOD2: "output", INTVcc: "power_out", RUN1: "input", RUN2: "input", ILIM: "input", "SENSE2-": "input", "SENSE2+": "input", VFB2: "input", ITH2: "passive", DRVUV: "input", DRVSET: "input", "TRACK/SS2": "input", TG2: "output", SW2: "output", BOOST2: "output", BG2: "output", DRVcc: "power_out", EXTVcc: "power_in", Vin: "power_in", BG1: "output", BOOST1: "output", SW1: "output", TG1: "output", "TRACK/SS1": "input", VPRG1: "passive", ITH1: "passive", VFB1: "input", "SENSE1+": "input", "SENSE1-": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LTC3892-2";
  override referencePrefix = "U";
}

/**
 * 150V dual 2-phase synchronous step-down DC/DC controller, LQPF-48
 *
 * KiCad symbol: `Regulator_Controller:LTC7810`. Reference prefix: `U`.
 * Footprint filters: LQFP?48?1EP*7x7mm*P0.5mm*EP3.6x3.6mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LTC7810.pdf
 * Keywords: switching buck converter regulator dual-output.
 * Default footprint: Package_QFP:LQFP-48-1EP_7x7mm_P0.5mm_EP3.6x3.6mm.
 */
export class LTC7810 extends Component.withPins({
  "SENSE1-": "1",
  "DRVSET": "2",
  "INTVcc": "3",
  "PLLIN/SPREAD": "4",
  "SGND_5": "5",
  "FREQ": "6",
  "REGSD": "7",
  "MODE": "8",
  "OVLO": "9",
  "NDRV": "10",
  "EXTVcc": "11",
  "SENSE2-": "12",
  "SENSE2+": "13",
  "VFB2": "14",
  "ITH2": "15",
  "TRACK/SS2": "16",
  "TG2": "19",
  "SW2": "20",
  "BOOST2": "21",
  "BG2": "24",
  "PGND": "25",
  "DRVcc": "26",
  "RUN2": "29",
  "RUN1": "32",
  "Vin": "35",
  "BG1": "37",
  "BOOST1": "40",
  "SW1": "41",
  "TG1": "42",
  "TRACK/SS1": "45",
  "ITH1": "46",
  "VFB1": "47",
  "SENSE1+": "48",
  "SGND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE1-": "input", DRVSET: "input", INTVcc: "power_out", "PLLIN/SPREAD": "input", SGND_5: "power_in", FREQ: "input", REGSD: "passive", MODE: "input", OVLO: "input", NDRV: "output", EXTVcc: "power_in", "SENSE2-": "input", "SENSE2+": "input", VFB2: "input", ITH2: "passive", "TRACK/SS2": "input", TG2: "output", SW2: "output", BOOST2: "output", BG2: "output", PGND: "power_in", DRVcc: "power_out", RUN2: "input", RUN1: "input", Vin: "power_in", BG1: "output", BOOST1: "output", SW1: "output", TG1: "output", "TRACK/SS1": "input", ITH1: "passive", VFB1: "input", "SENSE1+": "input", SGND_49: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:LTC7810";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Off-Line Supplies, AC-DC, 40kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1200D40`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1200-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1200D40 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1200D40";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Off-Line Supplies, AC-DC, 100kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1200D100`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1200-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1200D100 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1200D100";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Off-Line Supplies, AC-DC, 60kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1200D60`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1200-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1200D60 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1200D60";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Off-Line Supplies, AC-DC, 40kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1200P40`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1200-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1200P40 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1200P40";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Off-Line Supplies, AC-DC, 100kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1200P100`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1200-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1200P100 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1200P100";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Off-Line Supplies, AC-DC, 60kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1200P60`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1200-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1200P60 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1200P60";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Universal Off-Line Supplies Featuring Standby and Short Circuit Protection, AC-DC, 100kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1203D100`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1203-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1203D100 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1203D100";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Universal Off-Line Supplies Featuring Standby and Short Circuit Protection, AC-DC, 40kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1203D40`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1203-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1203D40 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1203D40";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Universal Off-Line Supplies Featuring Standby and Short Circuit Protection, AC-DC, 60kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1203D60`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1203-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1203D60 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1203D60";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Universal Off-Line Supplies Featuring Standby and Short Circuit Protection, AC-DC, 100kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1203P100`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1203-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1203P100 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1203P100";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Universal Off-Line Supplies Featuring Standby and Short Circuit Protection, AC-DC, 40kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1203P40`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1203-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1203P40 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1203P40";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Universal Off-Line Supplies Featuring Standby and Short Circuit Protection, AC-DC, 60kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1203P60`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1203-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1203P60 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1203P60";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Free Running Quasi-Resonant Operation, AC-DC, 8us min Toff, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1207A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP1207B.PDF
 * Keywords: SMPS Controller AC-DC.
 */
export class NCP1207A extends Component.withPins({
  "DMG": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DMG: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1207A";
  override referencePrefix = "U";
}

/**
 * PWM Current-Mode Controller for Free Running Quasi-Resonant Operation, AC-DC, 4.5us min Toff, SOIC-7
 *
 * KiCad symbol: `Regulator_Controller:NCP1207B`. Reference prefix: `U`.
 * Footprint filters: SOIC*N7*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP1207B.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8-N7_3.9x4.9mm_P1.27mm.
 */
export class NCP1207B extends Component.withPins({
  "DMG": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DMG: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1207B";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 100kHz, 1ms Soft Start, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217AD100`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1217AD100 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217AD100";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 133kHz, 1ms Soft Start, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217AD133`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1217AD133 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217AD133";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 65kHz, 1ms Soft Start, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217AD65`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1217AD65 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217AD65";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 100kHz, 1ms Soft Start, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217AP100`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1217AP100 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217AP100";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 133kHz, 1ms Soft Start, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217AP133`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1217AP133 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217AP133";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 65kHz, 1ms Soft Start, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217AP65`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1217AP65 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217AP65";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 100kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217D100`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1217D100 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217D100";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 133kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217D133`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1217D133 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217D133";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 65kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217D65`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1217D65 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217D65";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 100kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217P100`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1217P100 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217P100";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 133kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217P133`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1217P133 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217P133";
  override referencePrefix = "U";
}

/**
 * Enhanced PWM Current-Mode Controller for High-Power Universal Off-Line Supplies, AC-DC, 65kHz, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1217P65`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/NCP1217-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NCP1217P65 extends Component.withPins({
  "ADJ": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "NC": "7",
  "HV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADJ: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", NC: "no_connect", HV: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1217P65";
  override referencePrefix = "U";
}

/**
 * Active Clamp Voltage Mode PWM Controller for Off-Line Applications, SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:NCP1280`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCP1280-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class NCP1280 extends Component.withPins({
  "VIN": "1",
  "NC": "2",
  "UV/OV": "3",
  "FF": "4",
  "CS": "5",
  "CSKIP": "6",
  "RT": "7",
  "DCMAX": "8",
  "SS": "9",
  "VEA": "10",
  "VREF": "11",
  "TD": "12",
  "OUT2": "13",
  "GND": "14",
  "OUT1": "15",
  "VAUX": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", NC: "no_connect", "UV/OV": "input", FF: "passive", CS: "input", CSKIP: "passive", RT: "passive", DCMAX: "input", SS: "passive", VEA: "input", VREF: "output", TD: "passive", OUT2: "output", GND: "power_in", OUT1: "output", VAUX: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1280";
  override referencePrefix = "U";
}

/**
 * Quasi-Resonant Current-Mode Controller for Off-Line Supplies, OVP/OTP, Latched OCP, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1380A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCP1380-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1380A extends Component.withPins({
  "ZCD": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "FAULT": "7",
  "CT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ZCD: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", FAULT: "input", CT: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1380A";
  override referencePrefix = "U";
}

/**
 * Quasi-Resonant Current-Mode Controller for Off-Line Supplies, OVP/OTP, Auto-Recovery OCP, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1380B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCP1380-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1380B extends Component.withPins({
  "ZCD": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "FAULT": "7",
  "CT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ZCD: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", FAULT: "input", CT: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1380B";
  override referencePrefix = "U";
}

/**
 * Quasi-Resonant Current-Mode Controller for Off-Line Supplies, UVP/OVP, Latched OCP, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1380C`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCP1380-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1380C extends Component.withPins({
  "ZCD": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "FAULT": "7",
  "CT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ZCD: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", FAULT: "input", CT: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1380C";
  override referencePrefix = "U";
}

/**
 * Quasi-Resonant Current-Mode Controller for Off-Line Supplies, UVP/OVP, Auto-Recovery OCP, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1380D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCP1380-D.PDF
 * Keywords: SMPS Controller AC-DC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP1380D extends Component.withPins({
  "ZCD": "1",
  "FB": "2",
  "CS": "3",
  "GND": "4",
  "DRV": "5",
  "VCC": "6",
  "FAULT": "7",
  "CT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ZCD: "input", FB: "input", CS: "input", GND: "power_in", DRV: "output", VCC: "power_in", FAULT: "input", CT: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1380D";
  override referencePrefix = "U";
}

/**
 * Compact, Fixed-Frequency, Continuous Conduction Mode PFC Controller, 100kHz, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1653`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCP1653-D.PDF
 * Keywords: PFC SMPS Controller.
 */
export class NCP1653 extends Component.withPins({
  "FB/SD": "1",
  "VCONTROL": "2",
  "IN": "3",
  "CS": "4",
  "VM": "5",
  "GND": "6",
  "DRV": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "FB/SD": "input", VCONTROL: "passive", IN: "input", CS: "input", VM: "passive", GND: "power_in", DRV: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1653";
  override referencePrefix = "U";
}

/**
 * Compact, Fixed-Frequency, Continuous Conduction Mode PFC Controller, 67kHz, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP1653A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCP1653-D.PDF
 * Keywords: PFC SMPS Controller.
 */
export class NCP1653A extends Component.withPins({
  "FB/SD": "1",
  "VCONTROL": "2",
  "IN": "3",
  "CS": "4",
  "VM": "5",
  "GND": "6",
  "DRV": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "FB/SD": "input", VCONTROL: "passive", IN: "input", CS: "input", VM: "passive", GND: "power_in", DRV: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP1653A";
  override referencePrefix = "U";
}

/**
 * Synchronous Rectifier Controller, 4A/8A, 4V UVLO, GaN Capable, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP4308AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP4308-D.PDF
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP4308AD extends Component.withPins({
  "VCC": "1",
  "MIN_TOFF": "2",
  "MIN_TON": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CS": "6",
  "GND": "7",
  "DRV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", MIN_TOFF: "passive", MIN_TON: "passive", NC_4: "no_connect", NC_5: "no_connect", CS: "input", GND: "power_in", DRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP4308AD";
  override referencePrefix = "U";
}

/**
 * Synchronous Rectifier Controller, 4A/8A, 4V UVLO, GaN Capable, WDFN-8
 *
 * KiCad symbol: `Regulator_Controller:NCP4308AMT`. Reference prefix: `U`.
 * Footprint filters: OnSemi*DFN*2x2mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP4308-D.PDF
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_DFN_QFN:OnSemi_DFN-8_2x2mm_P0.5mm.
 */
export class NCP4308AMT extends Component.withPins({
  "VCC": "1",
  "MIN_TOFF": "2",
  "MIN_TON": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CS": "6",
  "GND": "7",
  "DRV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", MIN_TOFF: "passive", MIN_TON: "passive", NC_4: "no_connect", NC_5: "no_connect", CS: "input", GND: "power_in", DRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP4308AMT";
  override referencePrefix = "U";
}

/**
 * Synchronous Rectifier Controller, 4A/8A, 4V UVLO, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP4308DD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP4308-D.PDF
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP4308DD extends Component.withPins({
  "VCC": "1",
  "MIN_TOFF": "2",
  "MIN_TON": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CS": "6",
  "GND": "7",
  "DRV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", MIN_TOFF: "passive", MIN_TON: "passive", NC_4: "no_connect", NC_5: "no_connect", CS: "input", GND: "power_in", DRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP4308DD";
  override referencePrefix = "U";
}

/**
 * Synchronous Rectifier Controller, 4A/8A, 4V UVLO, DFN-8
 *
 * KiCad symbol: `Regulator_Controller:NCP4308DMN`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*4x4mm*P0.8mm*EP2.39x2.21mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP4308-D.PDF
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_4x4mm_P0.8mm_EP2.39x2.21mm.
 */
export class NCP4308DMN extends Component.withPins({
  "VCC": "1",
  "MIN_TOFF": "2",
  "MIN_TON": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CS": "6",
  "GND": "7",
  "DRV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", MIN_TOFF: "passive", MIN_TON: "passive", NC_4: "no_connect", NC_5: "no_connect", CS: "input", GND: "power_in", DRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP4308DMN";
  override referencePrefix = "U";
}

/**
 * Synchronous Rectifier Controller, 4A/8A, 4V UVLO, WDFN-8
 *
 * KiCad symbol: `Regulator_Controller:NCP4308DMT`. Reference prefix: `U`.
 * Footprint filters: OnSemi*DFN*2x2mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP4308-D.PDF
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_DFN_QFN:OnSemi_DFN-8_2x2mm_P0.5mm.
 */
export class NCP4308DMT extends Component.withPins({
  "VCC": "1",
  "MIN_TOFF": "2",
  "MIN_TON": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CS": "6",
  "GND": "7",
  "DRV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", MIN_TOFF: "passive", MIN_TON: "passive", NC_4: "no_connect", NC_5: "no_connect", CS: "input", GND: "power_in", DRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP4308DMT";
  override referencePrefix = "U";
}

/**
 * Synchronous Rectifier Controller, 4A/8A, 4V UVLO, Max TON, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:NCP4308QD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCP4308-D.PDF
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NCP4308QD extends Component.withPins({
  "VCC": "1",
  "MIN_TOFF": "2",
  "MIN_TON": "3",
  "NC": "4",
  "MAX_TON": "5",
  "CS": "6",
  "GND": "7",
  "DRV": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", MIN_TOFF: "passive", MIN_TON: "passive", NC: "no_connect", MAX_TON: "passive", CS: "input", GND: "power_in", DRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:NCP4308QD";
  override referencePrefix = "U";
}

/**
 * Regulating Pulse Width Modulators, NOR Logic, PDIP-16/SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:SG3525`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*3.9x9.9mm*P1.27mm*, SOIC*16*7.5x10.3mm*P1.27mm*, DIP*16*W7.62mm*.
 * @see www.st.com/resource/en/datasheet/sg3525.pdf
 * Keywords: SMPS PWM Controller.
 */
export class SG3525 extends Component.withPins({
  "INV": "1",
  "NI": "2",
  "SYNC": "3",
  "OSC": "4",
  "CT": "5",
  "RT": "6",
  "DISCH": "7",
  "SS": "8",
  "COMP": "9",
  "SD": "10",
  "OUTA": "11",
  "GND": "12",
  "VC": "13",
  "OUTB": "14",
  "VIN": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", NI: "input", SYNC: "passive", OSC: "output", CT: "passive", RT: "passive", DISCH: "open_collector", SS: "passive", COMP: "passive", SD: "passive", OUTA: "output", GND: "power_in", VC: "power_in", OUTB: "output", VIN: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:SG3525";
  override referencePrefix = "U";
}

/**
 * Regulating Pulse Width Modulators, OR Logic, PDIP-16/SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:SG3527`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*3.9x9.9mm*P1.27mm*, SOIC*16*7.5x10.3mm*P1.27mm*, DIP*16*W7.62mm*.
 * @see https://www.microsemi.com/document-portal/doc_view/11120-sg1525a-sg1527a-datasheet
 * Keywords: SMPS PWM Controller.
 */
export class SG3527 extends Component.withPins({
  "INV": "1",
  "NI": "2",
  "SYNC": "3",
  "OSC": "4",
  "CT": "5",
  "RT": "6",
  "DISCH": "7",
  "SS": "8",
  "COMP": "9",
  "SD": "10",
  "OUTA": "11",
  "GND": "12",
  "VC": "13",
  "OUTB": "14",
  "VIN": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", NI: "input", SYNC: "passive", OSC: "output", CT: "passive", RT: "passive", DISCH: "open_collector", SS: "passive", COMP: "passive", SD: "passive", OUTA: "output", GND: "power_in", VC: "power_in", OUTB: "output", VIN: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:SG3527";
  override referencePrefix = "U";
}

/**
 * Power Factor Controller IC for High Power Factor and Active Harmonic Filter, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:TDA4862`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-PFC_DCMICTDA4862G-DS-v02_00-en.pdf?fileId=db3a304412b407950112b417ffae24a3
 * Keywords: PFC SMPS Controller.
 */
export class TDA4862 extends Component.withPins({
  "VSENSE": "1",
  "VAOUT": "2",
  "MULTIN": "3",
  "ISENSE": "4",
  "DETIN": "5",
  "GND": "6",
  "GTDRV": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSENSE: "input", VAOUT: "output", MULTIN: "input", ISENSE: "input", DETIN: "passive", GND: "power_in", GTDRV: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:TDA4862";
  override referencePrefix = "U";
}

/**
 * Power Factor Controller IC for High Power Factor and Low THD, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:TDA4863`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-TDA4863-DS-v02_00-en.pdf?fileId=db3a304412b407950112b427d2d23ce8
 * Keywords: PFC SMPS Controller.
 */
export class TDA4863 extends Component.withPins({
  "VSENSE": "1",
  "VAOUT": "2",
  "MULTIN": "3",
  "ISENSE": "4",
  "DETIN": "5",
  "GND": "6",
  "GTDRV": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSENSE: "input", VAOUT: "output", MULTIN: "input", ISENSE: "input", DETIN: "passive", GND: "power_in", GTDRV: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:TDA4863";
  override referencePrefix = "U";
}

/**
 * Power Factor Controller IC for High Power Factor and Low THD, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:TDA4863-2`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-TDA4863_2-DS-v02_01-en.pdf?fileId=db3a304412b407950112b41802de24ab
 * Keywords: PFC SMPS Controller.
 */
export class TDA4863_2 extends Component.withPins({
  "VSENSE": "1",
  "VAOUT": "2",
  "MULTIN": "3",
  "ISENSE": "4",
  "DETIN": "5",
  "GND": "6",
  "GTDRV": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSENSE: "input", VAOUT: "output", MULTIN: "input", ISENSE: "input", DETIN: "passive", GND: "power_in", GTDRV: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:TDA4863-2";
  override referencePrefix = "U";
}

/**
 * Pulse-Width-Modulation Control Circuits, PDIP-16/SOIC-16/TSSOP-16
 *
 * KiCad symbol: `Regulator_Controller:TL494`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*, SOIC*3.9x9.9mm*P1.27mm*, SOIC*5.3x10.2mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl494.pdf
 * Keywords: SMPS PWM Controller.
 */
export class TL494 extends Component.withPins({
  "1IN+": "1",
  "1IN-": "2",
  "FB": "3",
  "DTC": "4",
  "CT": "5",
  "RT": "6",
  "GND": "7",
  "C1": "8",
  "E1": "9",
  "E2": "10",
  "C2": "11",
  "VCC": "12",
  "OUTCTRL": "13",
  "REF": "14",
  "2IN-": "15",
  "2IN+": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1IN+": "input", "1IN-": "input", FB: "output", DTC: "input", CT: "passive", RT: "passive", GND: "power_in", C1: "passive", E1: "passive", E2: "passive", C2: "passive", VCC: "power_in", OUTCTRL: "input", REF: "power_out", "2IN-": "input", "2IN+": "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:TL494";
  override referencePrefix = "U";
}

/**
 * IEEE802.3af PoE Controller, Auto-Retry
 *
 * KiCad symbol: `Regulator_Controller:TPS2375-1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/gpn/tps2375-1
 * Keywords: IEEE802.3af PoE.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 */
export class TPS2375_1 extends Component.withPins({
  "ILIM": "1",
  "CLASS": "2",
  "DET": "3",
  "VSS": "4",
  "RTN": "5",
  "PG": "6",
  "NC": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ILIM: "passive", CLASS: "passive", DET: "passive", VSS: "power_in", RTN: "power_out", PG: "open_collector", NC: "no_connect", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:TPS2375-1";
  override referencePrefix = "U";
}

/**
 * Regulating Pulse Width Modulators, NOR Logic, PDIP-16/SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:UC3525`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*7.5x10.3mm*P1.27mm*, DIP*16*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc2525b.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UC3525 extends Component.withPins({
  "INV": "1",
  "NI": "2",
  "SYNC": "3",
  "OSC": "4",
  "CT": "5",
  "RT": "6",
  "DISCH": "7",
  "SS": "8",
  "COMP": "9",
  "SD": "10",
  "OUTA": "11",
  "GND": "12",
  "VC": "13",
  "OUTB": "14",
  "VIN": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", NI: "input", SYNC: "passive", OSC: "output", CT: "passive", RT: "passive", DISCH: "open_collector", SS: "passive", COMP: "passive", SD: "passive", OUTA: "output", GND: "power_in", VC: "power_in", OUTB: "output", VIN: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3525";
  override referencePrefix = "U";
}

/**
 * Regulating Pulse Width Modulators, OR Logic, PDIP-16/SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:UC3527`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*7.5x10.3mm*P1.27mm*, DIP*16*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc2525b.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UC3527 extends Component.withPins({
  "INV": "1",
  "NI": "2",
  "SYNC": "3",
  "OSC": "4",
  "CT": "5",
  "RT": "6",
  "DISCH": "7",
  "SS": "8",
  "COMP": "9",
  "SD": "10",
  "OUTA": "11",
  "GND": "12",
  "VC": "13",
  "OUTB": "14",
  "VIN": "15",
  "REF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INV: "input", NI: "input", SYNC: "passive", OSC: "output", CT: "passive", RT: "passive", DISCH: "open_collector", SS: "passive", COMP: "passive", SD: "passive", OUTA: "output", GND: "power_in", VC: "power_in", OUTB: "output", VIN: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3527";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 100% Duty Cycle, 16V/10V UVLO, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:UC3842_SOIC8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UC3842_SOIC8 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3842_SOIC8";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 100% Duty Cycle, 16V/10V UVLO, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:UC3842_DIP8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class UC3842_DIP8 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3842_DIP8";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 100% Duty Cycle, 16V/10V UVLO, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:UC3842_SOIC14`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class UC3842_SOIC14 extends Component.withPins({
  "COMP": "1",
  "NC_2": "2",
  "FB": "3",
  "NC_4": "4",
  "CS": "5",
  "NC_6": "6",
  "RC": "7",
  "PWRGND": "8",
  "GND": "9",
  "OUT": "10",
  "VC": "11",
  "VCC": "12",
  "NC_13": "13",
  "VREF": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", NC_2: "no_connect", FB: "input", NC_4: "no_connect", CS: "input", NC_6: "no_connect", RC: "passive", PWRGND: "power_in", GND: "power_in", OUT: "output", VC: "power_in", VCC: "power_in", NC_13: "no_connect", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3842_SOIC14";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 100% Duty Cycle, 16V/10V UVLO, SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:UC3842_SOIC16`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc2843a.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class UC3842_SOIC16 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "COMP": "3",
  "FB": "4",
  "CS": "5",
  "RC": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "PWRGND": "10",
  "GND": "11",
  "OUT": "12",
  "VC": "13",
  "VCC": "14",
  "VREF": "15",
  "NC_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", COMP: "passive", FB: "input", CS: "input", RC: "passive", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", PWRGND: "power_in", GND: "power_in", OUT: "output", VC: "power_in", VCC: "power_in", VREF: "power_out", NC_16: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3842_SOIC16";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 100% Duty Cycle, 8.4V/7.6V UVLO, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:UC3843_DIP8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class UC3843_DIP8 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3843_DIP8";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 100% Duty Cycle, 8.4V/7.6V UVLO, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:UC3843_SOIC14`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class UC3843_SOIC14 extends Component.withPins({
  "COMP": "1",
  "NC_2": "2",
  "FB": "3",
  "NC_4": "4",
  "CS": "5",
  "NC_6": "6",
  "RC": "7",
  "PWRGND": "8",
  "GND": "9",
  "OUT": "10",
  "VC": "11",
  "VCC": "12",
  "NC_13": "13",
  "VREF": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", NC_2: "no_connect", FB: "input", NC_4: "no_connect", CS: "input", NC_6: "no_connect", RC: "passive", PWRGND: "power_in", GND: "power_in", OUT: "output", VC: "power_in", VCC: "power_in", NC_13: "no_connect", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3843_SOIC14";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 100% Duty Cycle, 8.4V/7.6V UVLO, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:UC3843_SOIC8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UC3843_SOIC8 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3843_SOIC8";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 50% Duty Cycle, 16V/10V UVLO, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:UC3844_DIP8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class UC3844_DIP8 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3844_DIP8";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 50% Duty Cycle, 16V/10V UVLO, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:UC3844_SOIC14`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class UC3844_SOIC14 extends Component.withPins({
  "COMP": "1",
  "NC_2": "2",
  "FB": "3",
  "NC_4": "4",
  "CS": "5",
  "NC_6": "6",
  "RC": "7",
  "PWRGND": "8",
  "GND": "9",
  "OUT": "10",
  "VC": "11",
  "VCC": "12",
  "NC_13": "13",
  "VREF": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", NC_2: "no_connect", FB: "input", NC_4: "no_connect", CS: "input", NC_6: "no_connect", RC: "passive", PWRGND: "power_in", GND: "power_in", OUT: "output", VC: "power_in", VCC: "power_in", NC_13: "no_connect", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3844_SOIC14";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 50% Duty Cycle, 16V/10V UVLO, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:UC3844_SOIC8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UC3844_SOIC8 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3844_SOIC8";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 50% Duty Cycle, 8.4V/7.6V UVLO, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:UC3845_DIP8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class UC3845_DIP8 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3845_DIP8";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 50% Duty Cycle, 8.4V/7.6V UVLO, SOIC-14
 *
 * KiCad symbol: `Regulator_Controller:UC3845_SOIC14`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class UC3845_SOIC14 extends Component.withPins({
  "COMP": "1",
  "NC_2": "2",
  "FB": "3",
  "NC_4": "4",
  "CS": "5",
  "NC_6": "6",
  "RC": "7",
  "PWRGND": "8",
  "GND": "9",
  "OUT": "10",
  "VC": "11",
  "VCC": "12",
  "NC_13": "13",
  "VREF": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", NC_2: "no_connect", FB: "input", NC_4: "no_connect", CS: "input", NC_6: "no_connect", RC: "passive", PWRGND: "power_in", GND: "power_in", OUT: "output", VC: "power_in", VCC: "power_in", NC_13: "no_connect", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3845_SOIC14";
  override referencePrefix = "U";
}

/**
 * Current-Mode PWM Controllers, 50% Duty Cycle, 8.4V/7.6V UVLO, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:UC3845_SOIC8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3842.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UC3845_SOIC8 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3845_SOIC8";
  override referencePrefix = "U";
}

/**
 * High-Power Factor Preregulator, DIP-16/SOIC-16W
 *
 * KiCad symbol: `Regulator_Controller:UC3854`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/uc3854.pdf
 * Keywords: PFC SMPS Controller.
 */
export class UC3854 extends Component.withPins({
  "GND": "1",
  "PKLMT": "2",
  "CAOUT": "3",
  "ISENSE": "4",
  "MULTOUT": "5",
  "IAC": "6",
  "VAOUT": "7",
  "VRMS": "8",
  "VREF": "9",
  "ENA": "10",
  "VSENSE": "11",
  "RSET": "12",
  "SS": "13",
  "CT": "14",
  "VCC": "15",
  "GTDRV": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", PKLMT: "input", CAOUT: "output", ISENSE: "input", MULTOUT: "passive", IAC: "input", VAOUT: "output", VRMS: "input", VREF: "output", ENA: "input", VSENSE: "input", RSET: "passive", SS: "passive", CT: "passive", VCC: "power_in", GTDRV: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UC3854";
  override referencePrefix = "U";
}

/**
 * BiCMOS, Advanced Phase-ShiftPWM Controller, DIP-20
 *
 * KiCad symbol: `Regulator_Controller:UCC3895N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3895.pdf
 * Keywords: Phase-shift full-bridge converter.
 * Default footprint: Package_DIP:DIP-20_W7.62mm_LongPads.
 */
export class UCC3895N extends Component.withPins({
  "EAN": "1",
  "EAOUT": "2",
  "RAMP": "3",
  "REF": "4",
  "GND": "5",
  "SYNC": "6",
  "CT": "7",
  "RT": "8",
  "DELAB": "9",
  "DELCD": "10",
  "ADS": "11",
  "CS": "12",
  "OUTD": "13",
  "OUTC": "14",
  "VDD": "15",
  "PGND": "16",
  "OUTB": "17",
  "OUTA": "18",
  "SS/DISB": "19",
  "EAP": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EAN: "input", EAOUT: "bidirectional", RAMP: "input", REF: "output", GND: "power_in", SYNC: "bidirectional", CT: "passive", RT: "passive", DELAB: "passive", DELCD: "passive", ADS: "input", CS: "input", OUTD: "output", OUTC: "output", VDD: "power_in", PGND: "power_in", OUTB: "output", OUTA: "output", "SS/DISB": "passive", EAP: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3895N";
  override referencePrefix = "U";
}

/**
 * BiCMOS, Advanced Phase-ShiftPWM Controller, CDIP-20
 *
 * KiCad symbol: `Regulator_Controller:UCC1895J`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3895.pdf
 * Keywords: Phase-shift full-bridge converter.
 * Default footprint: Package_DIP:DIP-20_W7.62mm_LongPads.
 */
export class UCC1895J extends Component.withPins({
  "EAN": "1",
  "EAOUT": "2",
  "RAMP": "3",
  "REF": "4",
  "GND": "5",
  "SYNC": "6",
  "CT": "7",
  "RT": "8",
  "DELAB": "9",
  "DELCD": "10",
  "ADS": "11",
  "CS": "12",
  "OUTD": "13",
  "OUTC": "14",
  "VDD": "15",
  "PGND": "16",
  "OUTB": "17",
  "OUTA": "18",
  "SS/DISB": "19",
  "EAP": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EAN: "input", EAOUT: "bidirectional", RAMP: "input", REF: "output", GND: "power_in", SYNC: "bidirectional", CT: "passive", RT: "passive", DELAB: "passive", DELCD: "passive", ADS: "input", CS: "input", OUTD: "output", OUTC: "output", VDD: "power_in", PGND: "power_in", OUTB: "output", OUTA: "output", "SS/DISB": "passive", EAP: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC1895J";
  override referencePrefix = "U";
}

/**
 * GREEN Rectifier Controller Device, 600kHz, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:UCC24610D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc24610.pdf
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UCC24610D extends Component.withPins({
  "SYNC": "1",
  "EN/TOFF": "2",
  "TON": "3",
  "VCC": "4",
  "GATE": "5",
  "GND": "6",
  "VS": "7",
  "VD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SYNC: "input", "EN/TOFF": "input", TON: "input", VCC: "power_in", GATE: "output", GND: "power_in", VS: "input", VD: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC24610D";
  override referencePrefix = "U";
}

/**
 * GREEN Rectifier Controller Device, 600kHz, DFN-8
 *
 * KiCad symbol: `Regulator_Controller:UCC24610DRB`. Reference prefix: `U`.
 * Footprint filters: Texas*DRB*.
 * @see http://www.ti.com/lit/ds/symlink/ucc24610.pdf
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_DFN_QFN:Texas_DRB0008A.
 */
export class UCC24610DRB extends Component.withPins({
  "SYNC": "1",
  "EN/TOFF": "2",
  "TON": "3",
  "VCC": "4",
  "GATE": "5",
  "GND": "6",
  "VS": "7",
  "VD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SYNC: "input", "EN/TOFF": "input", TON: "input", VCC: "power_in", GATE: "output", GND: "power_in", VS: "input", VD: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC24610DRB";
  override referencePrefix = "U";
}

/**
 * High Frequency Synchronous Rectifier Controller, 1MHz, Min On Time = 375ns, SOT-23-5
 *
 * KiCad symbol: `Regulator_Controller:UCC24612-1DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ucc24612.pdf
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class UCC24612_1DBV extends Component.withPins({
  "VG": "1",
  "VS": "2",
  "REG": "3",
  "VDD": "4",
  "VD": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VG: "output", VS: "input", REG: "passive", VDD: "power_in", VD: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC24612-1DBV";
  override referencePrefix = "U";
}

/**
 * High Frequency Synchronous Rectifier Controller, 800kHz, Min On Time = 540ns, SOT-23-5
 *
 * KiCad symbol: `Regulator_Controller:UCC24612-2DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ucc24612.pdf
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class UCC24612_2DBV extends Component.withPins({
  "VG": "1",
  "VS": "2",
  "REG": "3",
  "VDD": "4",
  "VD": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VG: "output", VS: "input", REG: "passive", VDD: "power_in", VD: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC24612-2DBV";
  override referencePrefix = "U";
}

/**
 * Synchronous Rectifier Controller, 200kHz, CCM, SOT-23-6
 *
 * KiCad symbol: `Regulator_Controller:UCC24630DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ucc24630.pdf
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class UCC24630DBV extends Component.withPins({
  "VPC": "1",
  "VSC": "2",
  "TBLK": "3",
  "DRV": "4",
  "GND": "5",
  "VDD": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPC: "input", VSC: "input", TBLK: "passive", DRV: "output", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC24630DBV";
  override referencePrefix = "U";
}

/**
 * Synchronous Rectifier Controller, 130kHz, DCM/TM, SOT-23-6
 *
 * KiCad symbol: `Regulator_Controller:UCC24636DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ucc24636.pdf
 * Keywords: synchronous rectifier controller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class UCC24636DBV extends Component.withPins({
  "VPC": "1",
  "VSC": "2",
  "TBLK": "3",
  "DRV": "4",
  "GND": "5",
  "VDD": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPC: "input", VSC: "input", TBLK: "passive", DRV: "output", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC24636DBV";
  override referencePrefix = "U";
}

/**
 * High-Performance Resonant Mode Controller, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:UCC25600`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc25600.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UCC25600 extends Component.withPins({
  "DT": "1",
  "RT": "2",
  "OC": "3",
  "SS": "4",
  "GD2": "5",
  "GND": "6",
  "VCC": "7",
  "GD1": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DT: "passive", RT: "input", OC: "input", SS: "passive", GD2: "output", GND: "power_in", VCC: "power_in", GD1: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC25600";
  override referencePrefix = "U";
}

/**
 * Hybrid Hysteretic LLC Resonant Controller, SOIC-16
 *
 * KiCad symbol: `Regulator_Controller:UCC256301`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ucc256301.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-14-16_3.9x9.9mm_P1.27mm.
 */
export class UCC256301 extends Component.withPins({
  "HV": "1",
  "VCC": "3",
  "BLK": "4",
  "FB": "5",
  "ISNS": "6",
  "VCR": "7",
  "BW": "8",
  "LL/SS": "9",
  "LO": "10",
  "GND": "11",
  "RVCC": "12",
  "HB": "14",
  "HO": "15",
  "HS": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HV: "input", VCC: "power_in", BLK: "input", FB: "input", ISNS: "input", VCR: "input", BW: "input", "LL/SS": "input", LO: "output", GND: "power_in", RVCC: "power_out", HB: "input", HO: "output", HS: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC256301";
  override referencePrefix = "U";
}

/**
 * Ultra-low EMI Transformer Driver for Isolated Bias Supplies, HVSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC25800`. Reference prefix: `U`.
 * Footprint filters: HVSSOP*1EP*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ucc25800-q1.pdf
 * Keywords: transformer driver isolated bias supply llc converter.
 * Default footprint: Package_SO:HVSSOP-8-1EP_3x3mm_P0.65mm_EP1.57x1.89mm.
 */
export class UCC25800 extends Component.withPins({
  "SYNC": "1",
  "~{DIS/FLT}": "2",
  "VREG": "3",
  "OC/DT": "4",
  "RT": "5",
  "GND_6": "6",
  "SW": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SYNC: "input", "~{DIS/FLT}": "bidirectional", VREG: "output", "OC/DT": "input", RT: "passive", GND_6: "power_in", SW: "output", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC25800";
  override referencePrefix = "U";
}

/**
 * SMPS Current-Mode Active Clamp PWM Controller, SOIC-16/TSSOP-16
 *
 * KiCad symbol: `Regulator_Controller:UCC2891`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc2891.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC2891 extends Component.withPins({
  "RTDEL": "1",
  "RTON": "2",
  "RTOFF": "3",
  "VREF": "4",
  "SYNC": "5",
  "GND": "6",
  "CS": "7",
  "RSLOPE": "8",
  "FB": "9",
  "SS/SD": "10",
  "PGND": "11",
  "AUX": "12",
  "OUT": "13",
  "VDD": "14",
  "LINEUV": "15",
  "VIN": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RTDEL: "passive", RTON: "passive", RTOFF: "passive", VREF: "output", SYNC: "input", GND: "power_in", CS: "input", RSLOPE: "passive", FB: "input", "SS/SD": "passive", PGND: "power_in", AUX: "output", OUT: "output", VDD: "power_in", LINEUV: "passive", VIN: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC2891";
  override referencePrefix = "U";
}

/**
 * SMPS Current-Mode Active Clamp PWM Controller, SOIC-16/TSSOP-16
 *
 * KiCad symbol: `Regulator_Controller:UCC2892`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc2892.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC2892 extends Component.withPins({
  "RTDEL": "1",
  "RTON": "2",
  "RTOFF": "3",
  "VREF": "4",
  "SYNC": "5",
  "GND": "6",
  "CS": "7",
  "RSLOPE": "8",
  "FB": "9",
  "SS/SD": "10",
  "PGND": "11",
  "AUX": "12",
  "OUT": "13",
  "VDD": "14",
  "LINEUV": "15",
  "LINEOV": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RTDEL: "passive", RTON: "passive", RTOFF: "passive", VREF: "output", SYNC: "input", GND: "power_in", CS: "input", RSLOPE: "passive", FB: "input", "SS/SD": "passive", PGND: "power_in", AUX: "output", OUT: "output", VDD: "power_in", LINEUV: "passive", LINEOV: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC2892";
  override referencePrefix = "U";
}

/**
 * SMPS Current-Mode Active Clamp PWM Controller, SOIC-16/TSSOP-16
 *
 * KiCad symbol: `Regulator_Controller:UCC2893`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc2893.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC2893 extends Component.withPins({
  "RTDEL": "1",
  "RTON": "2",
  "RTOFF": "3",
  "VREF": "4",
  "SYNC": "5",
  "GND": "6",
  "CS": "7",
  "RSLOPE": "8",
  "FB": "9",
  "SS/SD": "10",
  "PGND": "11",
  "AUX": "12",
  "OUT": "13",
  "VDD": "14",
  "LINEUV": "15",
  "VIN": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RTDEL: "passive", RTON: "passive", RTOFF: "passive", VREF: "output", SYNC: "input", GND: "power_in", CS: "input", RSLOPE: "passive", FB: "input", "SS/SD": "passive", PGND: "power_in", AUX: "output", OUT: "output", VDD: "power_in", LINEUV: "passive", VIN: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC2893";
  override referencePrefix = "U";
}

/**
 * SMPS Current-Mode Active Clamp PWM Controller, SOIC-16/TSSOP-16
 *
 * KiCad symbol: `Regulator_Controller:UCC2894`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc2894.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC2894 extends Component.withPins({
  "RTDEL": "1",
  "RTON": "2",
  "RTOFF": "3",
  "VREF": "4",
  "SYNC": "5",
  "GND": "6",
  "CS": "7",
  "RSLOPE": "8",
  "FB": "9",
  "SS/SD": "10",
  "PGND": "11",
  "AUX": "12",
  "OUT": "13",
  "VDD": "14",
  "LINEUV": "15",
  "LINEOV": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RTDEL: "passive", RTON: "passive", RTOFF: "passive", VREF: "output", SYNC: "input", GND: "power_in", CS: "input", RSLOPE: "passive", FB: "input", "SS/SD": "passive", PGND: "power_in", AUX: "output", OUT: "output", VDD: "power_in", LINEUV: "passive", LINEOV: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC2894";
  override referencePrefix = "U";
}

/**
 * BiCMOS, Advanced Phase-ShiftPWM Controller, SOIC-20
 *
 * KiCad symbol: `Regulator_Controller:UCC3895DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3895.pdf
 * Keywords: Phase-shift full-bridge converter.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class UCC3895DW extends Component.withPins({
  "EAN": "1",
  "EAOUT": "2",
  "RAMP": "3",
  "REF": "4",
  "GND": "5",
  "SYNC": "6",
  "CT": "7",
  "RT": "8",
  "DELAB": "9",
  "DELCD": "10",
  "ADS": "11",
  "CS": "12",
  "OUTD": "13",
  "OUTC": "14",
  "VDD": "15",
  "PGND": "16",
  "OUTB": "17",
  "OUTA": "18",
  "SS/DISB": "19",
  "EAP": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EAN: "input", EAOUT: "bidirectional", RAMP: "input", REF: "output", GND: "power_in", SYNC: "bidirectional", CT: "passive", RT: "passive", DELAB: "passive", DELCD: "passive", ADS: "input", CS: "input", OUTD: "output", OUTC: "output", VDD: "power_in", PGND: "power_in", OUTB: "output", OUTA: "output", "SS/DISB": "passive", EAP: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3895DW";
  override referencePrefix = "U";
}

/**
 * BiCMOS, Advanced Phase-ShiftPWM Controller, SOIC-20
 *
 * KiCad symbol: `Regulator_Controller:UCC2895DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3895.pdf
 * Keywords: Phase-shift full-bridge converter.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class UCC2895DW extends Component.withPins({
  "EAN": "1",
  "EAOUT": "2",
  "RAMP": "3",
  "REF": "4",
  "GND": "5",
  "SYNC": "6",
  "CT": "7",
  "RT": "8",
  "DELAB": "9",
  "DELCD": "10",
  "ADS": "11",
  "CS": "12",
  "OUTD": "13",
  "OUTC": "14",
  "VDD": "15",
  "PGND": "16",
  "OUTB": "17",
  "OUTA": "18",
  "SS/DISB": "19",
  "EAP": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EAN: "input", EAOUT: "bidirectional", RAMP: "input", REF: "output", GND: "power_in", SYNC: "bidirectional", CT: "passive", RT: "passive", DELAB: "passive", DELCD: "passive", ADS: "input", CS: "input", OUTD: "output", OUTC: "output", VDD: "power_in", PGND: "power_in", OUTB: "output", OUTA: "output", "SS/DISB": "passive", EAP: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC2895DW";
  override referencePrefix = "U";
}

/**
 * BiCMOS, Advanced Phase-ShiftPWM Controller, DIP-20
 *
 * KiCad symbol: `Regulator_Controller:UCC2895N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3895.pdf
 * Keywords: Phase-shift full-bridge converter.
 * Default footprint: Package_DIP:DIP-20_W7.62mm_LongPads.
 */
export class UCC2895N extends Component.withPins({
  "EAN": "1",
  "EAOUT": "2",
  "RAMP": "3",
  "REF": "4",
  "GND": "5",
  "SYNC": "6",
  "CT": "7",
  "RT": "8",
  "DELAB": "9",
  "DELCD": "10",
  "ADS": "11",
  "CS": "12",
  "OUTD": "13",
  "OUTC": "14",
  "VDD": "15",
  "PGND": "16",
  "OUTB": "17",
  "OUTA": "18",
  "SS/DISB": "19",
  "EAP": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EAN: "input", EAOUT: "bidirectional", RAMP: "input", REF: "output", GND: "power_in", SYNC: "bidirectional", CT: "passive", RT: "passive", DELAB: "passive", DELCD: "passive", ADS: "input", CS: "input", OUTD: "output", OUTC: "output", VDD: "power_in", PGND: "power_in", OUTB: "output", OUTA: "output", "SS/DISB": "passive", EAP: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC2895N";
  override referencePrefix = "U";
}

/**
 * BiCMOS, Advanced Phase-ShiftPWM Controller, TSSOP-20
 *
 * KiCad symbol: `Regulator_Controller:UCC3895PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3895.pdf
 * Keywords: Phase-shift full-bridge converter.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class UCC3895PW extends Component.withPins({
  "EAN": "1",
  "EAOUT": "2",
  "RAMP": "3",
  "REF": "4",
  "GND": "5",
  "SYNC": "6",
  "CT": "7",
  "RT": "8",
  "DELAB": "9",
  "DELCD": "10",
  "ADS": "11",
  "CS": "12",
  "OUTD": "13",
  "OUTC": "14",
  "VDD": "15",
  "PGND": "16",
  "OUTB": "17",
  "OUTA": "18",
  "SS/DISB": "19",
  "EAP": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EAN: "input", EAOUT: "bidirectional", RAMP: "input", REF: "output", GND: "power_in", SYNC: "bidirectional", CT: "passive", RT: "passive", DELAB: "passive", DELCD: "passive", ADS: "input", CS: "input", OUTD: "output", OUTC: "output", VDD: "power_in", PGND: "power_in", OUTB: "output", OUTA: "output", "SS/DISB": "passive", EAP: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3895PW";
  override referencePrefix = "U";
}

/**
 * BiCMOS, Advanced Phase-ShiftPWM Controller, TSSOP-20
 *
 * KiCad symbol: `Regulator_Controller:UCC2895PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3895.pdf
 * Keywords: Phase-shift full-bridge converter.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class UCC2895PW extends Component.withPins({
  "EAN": "1",
  "EAOUT": "2",
  "RAMP": "3",
  "REF": "4",
  "GND": "5",
  "SYNC": "6",
  "CT": "7",
  "RT": "8",
  "DELAB": "9",
  "DELCD": "10",
  "ADS": "11",
  "CS": "12",
  "OUTD": "13",
  "OUTC": "14",
  "VDD": "15",
  "PGND": "16",
  "OUTB": "17",
  "OUTA": "18",
  "SS/DISB": "19",
  "EAP": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EAN: "input", EAOUT: "bidirectional", RAMP: "input", REF: "output", GND: "power_in", SYNC: "bidirectional", CT: "passive", RT: "passive", DELAB: "passive", DELCD: "passive", ADS: "input", CS: "input", OUTD: "output", OUTC: "output", VDD: "power_in", PGND: "power_in", OUTB: "output", OUTA: "output", "SS/DISB": "passive", EAP: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC2895PW";
  override referencePrefix = "U";
}

/**
 * SMPS Advanced Current-Mode Active Clamp PWM Controller, TSSOP-20/QFN-20
 *
 * KiCad symbol: `Regulator_Controller:UCC2897`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*, QFN*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc2897.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC2897 extends Component.withPins({
  "VIN": "1",
  "NC_2": "2",
  "RTDEL": "3",
  "RTON": "4",
  "RTOFF": "5",
  "VREF": "6",
  "SYNC": "7",
  "GND": "8",
  "CS": "9",
  "RSLOPE": "10",
  "FB": "11",
  "SS/SD": "12",
  "PGND": "13",
  "AUX": "14",
  "OUT": "15",
  "PVDD": "16",
  "VDD": "17",
  "LINEUV": "18",
  "LINEOV": "19",
  "NC_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "input", NC_2: "no_connect", RTDEL: "passive", RTON: "passive", RTOFF: "passive", VREF: "output", SYNC: "input", GND: "power_in", CS: "input", RSLOPE: "passive", FB: "input", "SS/SD": "passive", PGND: "power_in", AUX: "output", OUT: "output", PVDD: "power_in", VDD: "power_in", LINEUV: "passive", LINEOV: "passive", NC_20: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC2897";
  override referencePrefix = "U";
}

/**
 * Low-Power BiCMOS Current-Mode PWM Controllers, 100% Duty Cycle, 7.2V/6.9V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3800`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3800.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3800 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3800";
  override referencePrefix = "U";
}

/**
 * Low-Power BiCMOS Current-Mode PWM Controllers, 50% Duty Cycle, 9.4V/7.4V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3801`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3800.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3801 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3801";
  override referencePrefix = "U";
}

/**
 * Low-Power BiCMOS Current-Mode PWM Controllers, 100% Duty Cycle, 12.5V/8.3V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3802`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3800.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3802 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3802";
  override referencePrefix = "U";
}

/**
 * Low-Power BiCMOS Current-Mode PWM Controllers, 100% Duty Cycle, 4.1V/3.6V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3803`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3800.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3803 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3803";
  override referencePrefix = "U";
}

/**
 * Low-Power BiCMOS Current-Mode PWM Controllers, 50% Duty Cycle, 12.5V/8.3V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3804`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3800.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3804 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3804";
  override referencePrefix = "U";
}

/**
 * Low-Power BiCMOS Current-Mode PWM Controllers, 50% Duty Cycle, 4.1V/3.6V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3805`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3800.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3805 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3805";
  override referencePrefix = "U";
}

/**
 * Low Power Current Mode Push-Pull PWM, SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3808D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3808-2.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UCC3808D extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUTB": "6",
  "OUTA": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUTB: "output", OUTA: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3808D";
  override referencePrefix = "U";
}

/**
 * Low Power Current Mode Push-Pull PWM, PDIP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3808N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3808-2.pdf
 * Keywords: SMPS PWM Controller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class UCC3808N extends Component.withPins({
  "OUTA": "1",
  "VDD": "2",
  "COMP": "3",
  "FB": "4",
  "CS": "5",
  "RC": "6",
  "GND": "7",
  "OUTB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTA: "output", VDD: "power_in", COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUTB: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3808N";
  override referencePrefix = "U";
}

/**
 * Low-Power Economy BiCMOS Current-Mode PWM, 100% Duty Cycle, 7.2V/6.9V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3813-0`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3813-1.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3813_0 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3813-0";
  override referencePrefix = "U";
}

/**
 * Low-Power Economy BiCMOS Current-Mode PWM, 50% Duty Cycle, 9.4V/7.4V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3813-1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3813-1.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3813_1 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3813-1";
  override referencePrefix = "U";
}

/**
 * Low-Power Economy BiCMOS Current-Mode PWM, 100% Duty Cycle, 12.5V/8.3V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3813-2`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3813-1.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3813_2 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3813-2";
  override referencePrefix = "U";
}

/**
 * Low-Power Economy BiCMOS Current-Mode PWM, 100% Duty Cycle, 4.1V/3.6V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3813-3`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3813-1.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3813_3 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3813-3";
  override referencePrefix = "U";
}

/**
 * Low-Power Economy BiCMOS Current-Mode PWM, 50% Duty Cycle, 12.5V/8.3V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3813-4`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3813-1.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3813_4 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3813-4";
  override referencePrefix = "U";
}

/**
 * Low-Power Economy BiCMOS Current-Mode PWM, 50% Duty Cycle, 4.1V/3.6V UVLO, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Regulator_Controller:UCC3813-5`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ucc3813-1.pdf
 * Keywords: SMPS PWM Controller.
 */
export class UCC3813_5 extends Component.withPins({
  "COMP": "1",
  "FB": "2",
  "CS": "3",
  "RC": "4",
  "GND": "5",
  "OUT": "6",
  "VCC": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", FB: "input", CS: "input", RC: "passive", GND: "power_in", OUT: "output", VCC: "power_in", REF: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_Controller:UCC3813-5";
  override referencePrefix = "U";
}
