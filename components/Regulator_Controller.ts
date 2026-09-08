// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Standalone PFC Controller in CCM, DIP-8/SOIC-8
 *
 * KiCad symbol: `Regulator_Controller:ICE1PCS01`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.infineon.com/dgdl/Infineon-ICE1PCS01-DS-v01_03-en.pdf?fileId=db3a304412b407950112b427c6f13cc7
 * Keywords: SMPS pfc controller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE1PCS01 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ICOMP; passive. */
  "ICOMP": "2",
  /** Physical pin 3: ISENSE; input. */
  "ISENSE": "3",
  /** Physical pin 4: FREQ; passive. */
  "FREQ": "4",
  /** Physical pin 5: VCOMP; passive. */
  "VCOMP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE1PCS02 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ICOMP; passive. */
  "ICOMP": "2",
  /** Physical pin 3: ISENSE; input. */
  "ISENSE": "3",
  /** Physical pin 4: VINS; input. */
  "VINS": "4",
  /** Physical pin 5: VCOMP; passive. */
  "VCOMP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE2PCS01 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ICOMP; passive. */
  "ICOMP": "2",
  /** Physical pin 3: ISENSE; input. */
  "ISENSE": "3",
  /** Physical pin 4: FREQ; passive. */
  "FREQ": "4",
  /** Physical pin 5: VCOMP; passive. */
  "VCOMP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE2PCS02 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ICOMP; passive. */
  "ICOMP": "2",
  /** Physical pin 3: ISENSE; input. */
  "ISENSE": "3",
  /** Physical pin 4: VINS; input. */
  "VINS": "4",
  /** Physical pin 5: VCOMP; passive. */
  "VCOMP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE2PCS03 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ICOMP; passive. */
  "ICOMP": "2",
  /** Physical pin 3: ISENSE; input. */
  "ISENSE": "3",
  /** Physical pin 4: VINS; input. */
  "VINS": "4",
  /** Physical pin 5: VCOMP; passive. */
  "VCOMP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE2PCS04 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ICOMP; passive. */
  "ICOMP": "2",
  /** Physical pin 3: ISENSE; input. */
  "ISENSE": "3",
  /** Physical pin 4: VINS; input. */
  "VINS": "4",
  /** Physical pin 5: VCOMP; passive. */
  "VCOMP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE2PCS05 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ICOMP; passive. */
  "ICOMP": "2",
  /** Physical pin 3: ISENSE; input. */
  "ISENSE": "3",
  /** Physical pin 4: FREQ; passive. */
  "FREQ": "4",
  /** Physical pin 5: VCOMP; passive. */
  "VCOMP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE2PCS06 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ICOMP; passive. */
  "ICOMP": "2",
  /** Physical pin 3: ISENSE; input. */
  "ISENSE": "3",
  /** Physical pin 4: VINS; input. */
  "VINS": "4",
  /** Physical pin 5: VCOMP; passive. */
  "VCOMP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE3PCS01 extends Component.withPins({
  /** Physical pin 1: BOFO; input. */
  "BOFO": "1",
  /** Physical pin 2: ISENSE; input. */
  "ISENSE": "2",
  /** Physical pin 3: SGND; power_in. */
  "SGND": "3",
  /** Physical pin 4: ICOMP; passive. */
  "ICOMP": "4",
  /** Physical pin 5: FREQ; passive. */
  "FREQ": "5",
  /** Physical pin 6: VB_OK; output. */
  "VB_OK": "6",
  /** Physical pin 7: VBTHL_EN; input. */
  "VBTHL_EN": "7",
  /** Physical pin 8: VREF; output. */
  "VREF": "8",
  /** Physical pin 9: BOP; input. */
  "BOP": "9",
  /** Physical pin 10: OVP; input. */
  "OVP": "10",
  /** Physical pin 11: VSENSE; input. */
  "VSENSE": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: GATE; output. */
  "GATE": "13",
  /** Physical pin 14: PGND; power_in. */
  "PGND": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE3PCS02 extends Component.withPins({
  /** Physical pin 1: ISENSE; input. */
  "ISENSE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ICOMP; passive. */
  "ICOMP": "3",
  /** Physical pin 4: FREQ; passive. */
  "FREQ": "4",
  /** Physical pin 5: OVP; input. */
  "OVP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICE3PCS03 extends Component.withPins({
  /** Physical pin 1: ISENSE; input. */
  "ISENSE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ICOMP; passive. */
  "ICOMP": "3",
  /** Physical pin 4: FREQ; passive. */
  "FREQ": "4",
  /** Physical pin 5: BOP; input. */
  "BOP": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR1153S extends Component.withPins({
  /** Physical pin 1: COM; power_in. */
  "COM": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: ISNS; passive. */
  "ISNS": "3",
  /** Physical pin 4: BOP; input. */
  "BOP": "4",
  /** Physical pin 5: OVP/EN; input. */
  "OVP/EN": "5",
  /** Physical pin 6: VFB; input. */
  "VFB": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR1155S extends Component.withPins({
  /** Physical pin 1: COM; power_in. */
  "COM": "1",
  /** Physical pin 2: FREQ; passive. */
  "FREQ": "2",
  /** Physical pin 3: ISNS; passive. */
  "ISNS": "3",
  /** Physical pin 4: OVP; input. */
  "OVP": "4",
  /** Physical pin 5: COMP; output. */
  "COMP": "5",
  /** Physical pin 6: VFB; input. */
  "VFB": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR1161L extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: MOT; passive. */
  "MOT": "3",
  /** Physical pin 4: VD; input. */
  "VD": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR1167S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: OVT; input. */
  "OVT": "2",
  /** Physical pin 3: MOT; passive. */
  "MOT": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: VD; input. */
  "VD": "5",
  /** Physical pin 6: VS; input. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VGATE; output. */
  "VGATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR11662S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: OVT; input. */
  "OVT": "2",
  /** Physical pin 3: MOT; passive. */
  "MOT": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: VD; input. */
  "VD": "5",
  /** Physical pin 6: VS; input. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VGATE; output. */
  "VGATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR11672AS extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: OVT; input. */
  "OVT": "2",
  /** Physical pin 3: MOT; passive. */
  "MOT": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: VD; input. */
  "VD": "5",
  /** Physical pin 6: VS; input. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VGATE; output. */
  "VGATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR1168S extends Component.withPins({
  /** Physical pin 1: GATE1; output. */
  "GATE1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: VS1; input. */
  "VS1": "3",
  /** Physical pin 4: VD1; input. */
  "VD1": "4",
  /** Physical pin 5: VD2; input. */
  "VD2": "5",
  /** Physical pin 6: VS2; input. */
  "VS2": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: GATE2; output. */
  "GATE2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR11682S extends Component.withPins({
  /** Physical pin 1: GATE1; output. */
  "GATE1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: VS1; input. */
  "VS1": "3",
  /** Physical pin 4: VD1; input. */
  "VD1": "4",
  /** Physical pin 5: VD2; input. */
  "VD2": "5",
  /** Physical pin 6: VS2; input. */
  "VS2": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: GATE2; output. */
  "GATE2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR11688S extends Component.withPins({
  /** Physical pin 1: GATE1; output. */
  "GATE1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: MOT; passive. */
  "MOT": "3",
  /** Physical pin 4: VD1; input. */
  "VD1": "4",
  /** Physical pin 5: VD2; input. */
  "VD2": "5",
  /** Physical pin 6: VS; input. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: GATE2; output. */
  "GATE2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR1169S extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: SYNC; input. */
  "SYNC": "2",
  /** Physical pin 3: MOT; passive. */
  "MOT": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: VD; input. */
  "VD": "5",
  /** Physical pin 6: VS; input. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VGATE; output. */
  "VGATE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2505L extends Component.withPins({
  /** Physical pin 1: CMP; passive. */
  "CMP": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: PFC; output. */
  "PFC": "4",
  /** Physical pin 5: VBUS; input. */
  "VBUS": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL6551 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: CT; passive. */
  "CT": "2",
  /** Physical pin 3: RD; passive. */
  "RD": "3",
  /** Physical pin 4: R_RESDLY; passive. */
  "R_RESDLY": "4",
  /** Physical pin 5: R_RA; passive. */
  "R_RA": "5",
  /** Physical pin 6: ISENSE; input. */
  "ISENSE": "6",
  /** Physical pin 7: PKILIM; input. */
  "PKILIM": "7",
  /** Physical pin 8: BGREF; output. */
  "BGREF": "8",
  /** Physical pin 9: R_LEB; passive. */
  "R_LEB": "9",
  /** Physical pin 10: CS_COMP; passive. */
  "CS_COMP": "10",
  /** Physical pin 11: CSS; passive. */
  "CSS": "11",
  /** Physical pin 12: EANI; input. */
  "EANI": "12",
  /** Physical pin 13: EAI; input. */
  "EAI": "13",
  /** Physical pin 14: EAO; output. */
  "EAO": "14",
  /** Physical pin 15: SHARE; input. */
  "SHARE": "15",
  /** Physical pin 16: LATSD; input. */
  "LATSD": "16",
  /** Physical pin 17: DCOK; output. */
  "DCOK": "17",
  /** Physical pin 18: ON/OFF; input. */
  "ON/OFF": "18",
  /** Physical pin 19: SYNC2; output. */
  "SYNC2": "19",
  /** Physical pin 20: SYNC1; output. */
  "SYNC1": "20",
  /** Physical pin 21: LOWER2; output. */
  "LOWER2": "21",
  /** Physical pin 22: LOWER1; output. */
  "LOWER1": "22",
  /** Physical pin 23: UPPER2; output. */
  "UPPER2": "23",
  /** Physical pin 24: UPPER1; output. */
  "UPPER1": "24",
  /** Physical pin 25: PGND; power_in. */
  "PGND": "25",
  /** Physical pin 26: VDDP2; power_in. */
  "VDDP2": "26",
  /** Physical pin 27: VDDP1; power_in. */
  "VDDP1": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L4981A extends Component.withPins({
  /** Physical pin 1: P-GND; power_in. */
  "P-GND": "1",
  /** Physical pin 2: IPK; input. */
  "IPK": "2",
  /** Physical pin 3: OVP; input. */
  "OVP": "3",
  /** Physical pin 4: IAC; input. */
  "IAC": "4",
  /** Physical pin 5: CA-OUT; output. */
  "CA-OUT": "5",
  /** Physical pin 6: LFF; input. */
  "LFF": "6",
  /** Physical pin 7: VRMS; input. */
  "VRMS": "7",
  /** Physical pin 8: MULT-OUT; output. */
  "MULT-OUT": "8",
  /** Physical pin 9: ISENSE; input. */
  "ISENSE": "9",
  /** Physical pin 10: S-GND; power_in. */
  "S-GND": "10",
  /** Physical pin 11: VREF; output. */
  "VREF": "11",
  /** Physical pin 12: SS; passive. */
  "SS": "12",
  /** Physical pin 13: VA-OUT; output. */
  "VA-OUT": "13",
  /** Physical pin 14: VFEED; input. */
  "VFEED": "14",
  /** Physical pin 15: P-UVLO; input. */
  "P-UVLO": "15",
  /** Physical pin 16: SYNC; bidirectional. */
  "SYNC": "16",
  /** Physical pin 17: ROSC; passive. */
  "ROSC": "17",
  /** Physical pin 18: COSC; passive. */
  "COSC": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC": "19",
  /** Physical pin 20: GDRV; output. */
  "GDRV": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L4981B extends Component.withPins({
  /** Physical pin 1: P-GND; power_in. */
  "P-GND": "1",
  /** Physical pin 2: IPK; input. */
  "IPK": "2",
  /** Physical pin 3: OVP; input. */
  "OVP": "3",
  /** Physical pin 4: IAC; input. */
  "IAC": "4",
  /** Physical pin 5: CA-OUT; output. */
  "CA-OUT": "5",
  /** Physical pin 6: LFF; input. */
  "LFF": "6",
  /** Physical pin 7: VRMS; input. */
  "VRMS": "7",
  /** Physical pin 8: MULT-OUT; output. */
  "MULT-OUT": "8",
  /** Physical pin 9: ISENSE; input. */
  "ISENSE": "9",
  /** Physical pin 10: S-GND; power_in. */
  "S-GND": "10",
  /** Physical pin 11: VREF; output. */
  "VREF": "11",
  /** Physical pin 12: SS; passive. */
  "SS": "12",
  /** Physical pin 13: VA-OUT; output. */
  "VA-OUT": "13",
  /** Physical pin 14: VFEED; input. */
  "VFEED": "14",
  /** Physical pin 15: P-UVLO; input. */
  "P-UVLO": "15",
  /** Physical pin 16: FREQ-MOD; input. */
  "FREQ-MOD": "16",
  /** Physical pin 17: ROSC; passive. */
  "ROSC": "17",
  /** Physical pin 18: COSC; passive. */
  "COSC": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC": "19",
  /** Physical pin 20: GDRV; output. */
  "GDRV": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L4984D extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VFF; passive. */
  "VFF": "5",
  /** Physical pin 6: PFC_OK; input. */
  "PFC_OK": "6",
  /** Physical pin 7: TIMER; passive. */
  "TIMER": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: GD; output. */
  "GD": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6561 extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: ZCD; input. */
  "ZCD": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: GD; output. */
  "GD": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6562 extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: ZCD; input. */
  "ZCD": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: GD; output. */
  "GD": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6562A extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: ZCD; input. */
  "ZCD": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: GD; output. */
  "GD": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6562AT extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: ZCD; input. */
  "ZCD": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: GD; output. */
  "GD": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6563 extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VFF; passive. */
  "VFF": "5",
  /** Physical pin 6: TBO; passive. */
  "TBO": "6",
  /** Physical pin 7: PFC_OK; input. */
  "PFC_OK": "7",
  /** Physical pin 8: PWM_LATCH; output. */
  "PWM_LATCH": "8",
  /** Physical pin 9: PWM_STOP; output. */
  "PWM_STOP": "9",
  /** Physical pin 10: RUN; input. */
  "RUN": "10",
  /** Physical pin 11: ZCD; input. */
  "ZCD": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: GD; output. */
  "GD": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6563A extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VFF; passive. */
  "VFF": "5",
  /** Physical pin 6: TBO; passive. */
  "TBO": "6",
  /** Physical pin 7: PFC_OK; input. */
  "PFC_OK": "7",
  /** Physical pin 8: PWM_LATCH; output. */
  "PWM_LATCH": "8",
  /** Physical pin 9: PWM_STOP; output. */
  "PWM_STOP": "9",
  /** Physical pin 10: RUN; input. */
  "RUN": "10",
  /** Physical pin 11: ZCD; input. */
  "ZCD": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: GD; output. */
  "GD": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6563H extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VFF; passive. */
  "VFF": "5",
  /** Physical pin 6: TBO; passive. */
  "TBO": "6",
  /** Physical pin 7: PFC_OK; input. */
  "PFC_OK": "7",
  /** Physical pin 8: PWM_LATCH; output. */
  "PWM_LATCH": "8",
  /** Physical pin 9: HVS; input. */
  "HVS": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC": "10",
  /** Physical pin 11: PWM_STOP; output. */
  "PWM_STOP": "11",
  /** Physical pin 12: RUN; input. */
  "RUN": "12",
  /** Physical pin 13: ZCD; input. */
  "ZCD": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: GD; output. */
  "GD": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6563S extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VFF; passive. */
  "VFF": "5",
  /** Physical pin 6: TBO; passive. */
  "TBO": "6",
  /** Physical pin 7: PFC_OK; input. */
  "PFC_OK": "7",
  /** Physical pin 8: PWM_LATCH; output. */
  "PWM_LATCH": "8",
  /** Physical pin 9: PWM_STOP; output. */
  "PWM_STOP": "9",
  /** Physical pin 10: RUN; input. */
  "RUN": "10",
  /** Physical pin 11: ZCD; input. */
  "ZCD": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: GD; output. */
  "GD": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6564 extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VFF; passive. */
  "VFF": "5",
  /** Physical pin 6: PFC_OK; input. */
  "PFC_OK": "6",
  /** Physical pin 7: ZCD; input. */
  "ZCD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: GD; output. */
  "GD": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6564H extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VFF; passive. */
  "VFF": "5",
  /** Physical pin 6: PFC_OK; input. */
  "PFC_OK": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: HVS; input. */
  "HVS": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: ZCD; input. */
  "ZCD": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: GD; output. */
  "GD": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6564T extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: MULT; input. */
  "MULT": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VFF; passive. */
  "VFF": "5",
  /** Physical pin 6: PFC_OK; input. */
  "PFC_OK": "6",
  /** Physical pin 7: ZCD; input. */
  "ZCD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: GD; output. */
  "GD": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6598 extends Component.withPins({
  /** Physical pin 1: CSS; passive. */
  "CSS": "1",
  /** Physical pin 2: RFSTART; passive. */
  "RFSTART": "2",
  /** Physical pin 3: CF; passive. */
  "CF": "3",
  /** Physical pin 4: RFMIN; passive. */
  "RFMIN": "4",
  /** Physical pin 5: OPOUT; output. */
  "OPOUT": "5",
  /** Physical pin 6: OPIN-; input. */
  "OPIN-": "6",
  /** Physical pin 7: OPIN+; input. */
  "OPIN+": "7",
  /** Physical pin 8: EN1; input. */
  "EN1": "8",
  /** Physical pin 9: EN2; input. */
  "EN2": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: LVG; output. */
  "LVG": "11",
  /** Physical pin 12: VS; power_in. */
  "VS": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: OUT; input. */
  "OUT": "14",
  /** Physical pin 15: HVG; output. */
  "HVG": "15",
  /** Physical pin 16: VBOOT; input. */
  "VBOOT": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6599 extends Component.withPins({
  /** Physical pin 1: CSS; passive. */
  "CSS": "1",
  /** Physical pin 2: DELAY; passive. */
  "DELAY": "2",
  /** Physical pin 3: CF; passive. */
  "CF": "3",
  /** Physical pin 4: RFMIN; passive. */
  "RFMIN": "4",
  /** Physical pin 5: STBY; input. */
  "STBY": "5",
  /** Physical pin 6: ISEN; input. */
  "ISEN": "6",
  /** Physical pin 7: LINE; input. */
  "LINE": "7",
  /** Physical pin 8: DIS; input. */
  "DIS": "8",
  /** Physical pin 9: PFC_STOP; open_collector. */
  "PFC_STOP": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: LVG; output. */
  "LVG": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: OUT; input. */
  "OUT": "14",
  /** Physical pin 15: HVG; output. */
  "HVG": "15",
  /** Physical pin 16: VBOOT; input. */
  "VBOOT": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L6727 extends Component.withPins({
  /** Physical pin 1: BOOT; input. */
  "BOOT": "1",
  /** Physical pin 2: UGATE; output. */
  "UGATE": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: LGATE; output. */
  "LGATE": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: FB; input. */
  "FB": "6",
  /** Physical pin 7: COMP/DIS/OC; input. */
  "COMP/DIS/OC": "7",
  /** Physical pin 8: PHASE; passive. */
  "PHASE": "8",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM25119 extends Component.withPins({
  /** Physical pin 1: VCC1; power_in. */
  "VCC1": "1",
  /** Physical pin 2: LO1; output. */
  "LO1": "2",
  /** Physical pin 3: PGND1; power_in. */
  "PGND1": "3",
  /** Physical pin 4: CSG1; input. */
  "CSG1": "4",
  /** Physical pin 5: CS1; input. */
  "CS1": "5",
  /** Physical pin 6: RAMP1; input. */
  "RAMP1": "6",
  /** Physical pin 7: SS1; input. */
  "SS1": "7",
  /** Physical pin 9: FB1; input. */
  "FB1": "9",
  /** Physical pin 10: COMP1; output. */
  "COMP1": "10",
  /** Physical pin 30: HB1; power_in. */
  "HB1": "30",
  /** Physical pin 31: HO1; output. */
  "HO1": "31",
  /** Physical pin 32: SW1; bidirectional. */
  "SW1": "32",
  /** Physical pin 11: EN2; input. */
  "EN2": "11",
  /** Physical pin 15: COMP2; output. */
  "COMP2": "15",
  /** Physical pin 16: FB2; input. */
  "FB2": "16",
  /** Physical pin 18: SS2; input. */
  "SS2": "18",
  /** Physical pin 19: RAMP2; input. */
  "RAMP2": "19",
  /** Physical pin 20: CS2; input. */
  "CS2": "20",
  /** Physical pin 21: CSG2; input. */
  "CSG2": "21",
  /** Physical pin 22: PGND2; power_in. */
  "PGND2": "22",
  /** Physical pin 23: LO2; output. */
  "LO2": "23",
  /** Physical pin 24: VCC2; power_in. */
  "VCC2": "24",
  /** Physical pin 25: SW2; bidirectional. */
  "SW2": "25",
  /** Physical pin 26: HO2; output. */
  "HO2": "26",
  /** Physical pin 27: HB2; power_in. */
  "HB2": "27",
  /** Physical pin 8: VCCDIS; input. */
  "VCCDIS": "8",
  /** Physical pin 12: AGND; power_in. */
  "AGND": "12",
  /** Physical pin 13: RT; input. */
  "RT": "13",
  /** Physical pin 14: RES; output. */
  "RES": "14",
  /** Physical pin 17: DEMB; input. */
  "DEMB": "17",
  /** Physical pin 28: UVLO; input. */
  "UVLO": "28",
  /** Physical pin 29: VIN; power_in. */
  "VIN": "29",
  /** Physical pin 33: EP; unspecified. */
  "EP": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM3478MA extends Component.withPins({
  /** Physical pin 1: I_{SEN}; input. */
  "I_{SEN}": "1",
  /** Physical pin 2: COMP; input. */
  "COMP": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND": "5",
  /** Physical pin 6: DR; output. */
  "DR": "6",
  /** Physical pin 7: FA/SD; input. */
  "FA/SD": "7",
  /** Physical pin 8: V_{IN}; power_in. */
  "V_{IN}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM3478MM extends Component.withPins({
  /** Physical pin 1: I_{SEN}; input. */
  "I_{SEN}": "1",
  /** Physical pin 2: COMP; input. */
  "COMP": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND": "5",
  /** Physical pin 6: DR; output. */
  "DR": "6",
  /** Physical pin 7: FA/SD; input. */
  "FA/SD": "7",
  /** Physical pin 8: V_{IN}; power_in. */
  "V_{IN}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM3478QMM extends Component.withPins({
  /** Physical pin 1: I_{SEN}; input. */
  "I_{SEN}": "1",
  /** Physical pin 2: COMP; input. */
  "COMP": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND": "5",
  /** Physical pin 6: DR; output. */
  "DR": "6",
  /** Physical pin 7: FA/SD; input. */
  "FA/SD": "7",
  /** Physical pin 8: V_{IN}; power_in. */
  "V_{IN}": "8",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM5023 extends Component.withPins({
  /** Physical pin 1: QR; input. */
  "QR": "1",
  /** Physical pin 2: VSD; output. */
  "VSD": "2",
  /** Physical pin 3: SS; passive. */
  "SS": "3",
  /** Physical pin 4: COMP; input. */
  "COMP": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: OUT; output. */
  "OUT": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1248 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: PKLIM; input. */
  "PKLIM": "2",
  /** Physical pin 3: CAOUT; output. */
  "CAOUT": "3",
  /** Physical pin 4: ISENSE; input. */
  "ISENSE": "4",
  /** Physical pin 5: MOUT; input. */
  "MOUT": "5",
  /** Physical pin 6: IAC; input. */
  "IAC": "6",
  /** Physical pin 7: VAOUT; output. */
  "VAOUT": "7",
  /** Physical pin 8: OVP; input. */
  "OVP": "8",
  /** Physical pin 9: VREF; power_out. */
  "VREF": "9",
  /** Physical pin 10: EN/SYNC; input. */
  "EN/SYNC": "10",
  /** Physical pin 11: VSENSE; input. */
  "VSENSE": "11",
  /** Physical pin 12: RSET; passive. */
  "RSET": "12",
  /** Physical pin 13: SS; passive. */
  "SS": "13",
  /** Physical pin 14: CSET; passive. */
  "CSET": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: GTDR; output. */
  "GTDR": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1249 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: CAOUT; output. */
  "CAOUT": "2",
  /** Physical pin 3: MOUT; input. */
  "MOUT": "3",
  /** Physical pin 4: IAC; input. */
  "IAC": "4",
  /** Physical pin 5: VAOUT; output. */
  "VAOUT": "5",
  /** Physical pin 6: VSENSE; input. */
  "VSENSE": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GTDR; output. */
  "GTDR": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1509 extends Component.withPins({
  /** Physical pin 1: GTDR1; output. */
  "GTDR1": "1",
  /** Physical pin 2: GND2; power_in. */
  "GND2": "2",
  /** Physical pin 3: GND1; power_in. */
  "GND1": "3",
  /** Physical pin 4: CSET; passive. */
  "CSET": "4",
  /** Physical pin 5: PKLIM; input. */
  "PKLIM": "5",
  /** Physical pin 6: CAOUT; output. */
  "CAOUT": "6",
  /** Physical pin 7: ISENSE; input. */
  "ISENSE": "7",
  /** Physical pin 8: MOUT; input. */
  "MOUT": "8",
  /** Physical pin 9: IAC; input. */
  "IAC": "9",
  /** Physical pin 10: VAOUT; output. */
  "VAOUT": "10",
  /** Physical pin 11: OVP; input. */
  "OVP": "11",
  /** Physical pin 12: VREF; power_out. */
  "VREF": "12",
  /** Physical pin 13: SS2; passive. */
  "SS2": "13",
  /** Physical pin 14: VSENSE; input. */
  "VSENSE": "14",
  /** Physical pin 15: RSET; passive. */
  "RSET": "15",
  /** Physical pin 16: SS1; passive. */
  "SS1": "16",
  /** Physical pin 17: VCC; power_in. */
  "VCC": "17",
  /** Physical pin 18: VC; input. */
  "VC": "18",
  /** Physical pin 19: RAMP; input. */
  "RAMP": "19",
  /** Physical pin 20: GTDR2; output. */
  "GTDR2": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT4295xUFD extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: AUX; input. */
  "AUX": "2",
  /** Physical pin 3: RCLASS++; passive. */
  "RCLASS++": "3",
  /** Physical pin 4: RCLASS; passive. */
  "RCLASS": "4",
  /** Physical pin 5: T2P; open_collector. */
  "T2P": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC_6": "6",
  /** Physical pin 7: VCC; passive. */
  "VCC_7": "7",
  /** Physical pin 8: VCC; passive. */
  "VCC_8": "8",
  /** Physical pin 9: VCC; passive. */
  "VCC_9": "9",
  /** Physical pin 10: ROSC; passive. */
  "ROSC": "10",
  /** Physical pin 11: SFST; passive. */
  "SFST": "11",
  /** Physical pin 12: FSSDLY; input. */
  "FSSDLY": "12",
  /** Physical pin 13: ITHB; input. */
  "ITHB": "13",
  /** Physical pin 14: FB31; passive. */
  "FB31": "14",
  /** Physical pin 15: RLDCMP; passive. */
  "RLDCMP": "15",
  /** Physical pin 16: ISEN-; passive. */
  "ISEN-": "16",
  /** Physical pin 17: ISEN+; passive. */
  "ISEN+": "17",
  /** Physical pin 18: SG; output. */
  "SG": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: PG; output. */
  "PG": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC_21": "21",
  /** Physical pin 22: DNC; no_connect. */
  "DNC": "22",
  /** Physical pin 23: SWVCC; output. */
  "SWVCC": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: HSSRC; input. */
  "HSSRC": "25",
  /** Physical pin 26: HSGATE; output. */
  "HSGATE": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC": "27",
  /** Physical pin 28: VPORT; input. */
  "VPORT": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1624CS8 extends Component.withPins({
  /** Physical pin 1: ISENSE; input. */
  "ISENSE": "1",
  /** Physical pin 2: Ith/RUN; input. */
  "Ith/RUN": "2",
  /** Physical pin 3: SET; input. */
  "SET": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SW; input. */
  "SW": "5",
  /** Physical pin 6: TG; open_collector. */
  "TG": "6",
  /** Physical pin 7: BOOST; output. */
  "BOOST": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3805xMSE extends Component.withPins({
  /** Physical pin 1: SSFLT; passive. */
  "SSFLT": "1",
  /** Physical pin 2: Ith; passive. */
  "Ith": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: RUN; input. */
  "RUN": "4",
  /** Physical pin 5: FS; passive. */
  "FS": "5",
  /** Physical pin 6: SYNC; input. */
  "SYNC": "6",
  /** Physical pin 7: Isense; input. */
  "Isense": "7",
  /** Physical pin 8: OC; input. */
  "OC": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3890 extends Component.withPins({
  /** Physical pin 1: SENSE1-; input. */
  "SENSE1-": "1",
  /** Physical pin 2: FREQ; input. */
  "FREQ": "2",
  /** Physical pin 3: PHASMD; input. */
  "PHASMD": "3",
  /** Physical pin 4: CLKOUT; output. */
  "CLKOUT": "4",
  /** Physical pin 5: PLLIN/MODE; input. */
  "PLLIN/MODE": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: RUN1; input. */
  "RUN1": "7",
  /** Physical pin 8: RUN2; input. */
  "RUN2": "8",
  /** Physical pin 9: SENSE2-; input. */
  "SENSE2-": "9",
  /** Physical pin 10: SENSE2+; input. */
  "SENSE2+": "10",
  /** Physical pin 11: VFB2; input. */
  "VFB2": "11",
  /** Physical pin 12: ITH2; passive. */
  "ITH2": "12",
  /** Physical pin 13: TRACK/SS2; input. */
  "TRACK/SS2": "13",
  /** Physical pin 14: PGOOD2; output. */
  "PGOOD2": "14",
  /** Physical pin 15: TG2; output. */
  "TG2": "15",
  /** Physical pin 16: SW2; output. */
  "SW2": "16",
  /** Physical pin 17: BOOST2; output. */
  "BOOST2": "17",
  /** Physical pin 18: BG2; output. */
  "BG2": "18",
  /** Physical pin 19: INTVcc; power_out. */
  "INTVcc": "19",
  /** Physical pin 20: EXTVcc; power_in. */
  "EXTVcc": "20",
  /** Physical pin 21: PGND; power_in. */
  "PGND": "21",
  /** Physical pin 22: Vin; power_in. */
  "Vin": "22",
  /** Physical pin 23: BG1; output. */
  "BG1": "23",
  /** Physical pin 24: BOOST1; output. */
  "BOOST1": "24",
  /** Physical pin 25: SW1; output. */
  "SW1": "25",
  /** Physical pin 26: TG1; output. */
  "TG1": "26",
  /** Physical pin 27: PGOOD1; output. */
  "PGOOD1": "27",
  /** Physical pin 28: ILIM; input. */
  "ILIM": "28",
  /** Physical pin 29: TRACK/SS1; input. */
  "TRACK/SS1": "29",
  /** Physical pin 30: ITH1; passive. */
  "ITH1": "30",
  /** Physical pin 31: VFB1; input. */
  "VFB1": "31",
  /** Physical pin 32: SENSE1+; input. */
  "SENSE1+": "32",
  /** Physical pin 33: GND; power_in. */
  "GND_33": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3890_1 extends Component.withPins({
  /** Physical pin 1: ITH1; passive. */
  "ITH1": "1",
  /** Physical pin 2: VFB1; input. */
  "VFB1": "2",
  /** Physical pin 3: SENSE1+; input. */
  "SENSE1+": "3",
  /** Physical pin 4: SENSE1-; input. */
  "SENSE1-": "4",
  /** Physical pin 5: FREQ; input. */
  "FREQ": "5",
  /** Physical pin 6: PLLIN/MODE; input. */
  "PLLIN/MODE": "6",
  /** Physical pin 7: SGND; power_in. */
  "SGND": "7",
  /** Physical pin 8: RUN1; input. */
  "RUN1": "8",
  /** Physical pin 9: RUN2; input. */
  "RUN2": "9",
  /** Physical pin 10: SENSE2-; input. */
  "SENSE2-": "10",
  /** Physical pin 11: SENSE2+; input. */
  "SENSE2+": "11",
  /** Physical pin 12: VFB2; input. */
  "VFB2": "12",
  /** Physical pin 13: ITH2; passive. */
  "ITH2": "13",
  /** Physical pin 14: TRACK/SS2; input. */
  "TRACK/SS2": "14",
  /** Physical pin 15: TG2; output. */
  "TG2": "15",
  /** Physical pin 16: SW2; output. */
  "SW2": "16",
  /** Physical pin 17: BOOST2; output. */
  "BOOST2": "17",
  /** Physical pin 18: BG2; output. */
  "BG2": "18",
  /** Physical pin 19: INTVcc; power_out. */
  "INTVcc": "19",
  /** Physical pin 20: EXTVcc; power_in. */
  "EXTVcc": "20",
  /** Physical pin 21: PGND; power_in. */
  "PGND": "21",
  /** Physical pin 22: Vin; power_in. */
  "Vin": "22",
  /** Physical pin 23: BG1; output. */
  "BG1": "23",
  /** Physical pin 24: BOOST1; output. */
  "BOOST1": "24",
  /** Physical pin 25: SW1; output. */
  "SW1": "25",
  /** Physical pin 26: TG1; output. */
  "TG1": "26",
  /** Physical pin 27: PGOOD1; output. */
  "PGOOD1": "27",
  /** Physical pin 28: TRACK/SS1; input. */
  "TRACK/SS1": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3892 extends Component.withPins({
  /** Physical pin 1: FREQ; input. */
  "FREQ": "1",
  /** Physical pin 2: PLLIN/MODE; input. */
  "PLLIN/MODE": "2",
  /** Physical pin 3: PGOOD1; output. */
  "PGOOD1": "3",
  /** Physical pin 4: PGOOD2; output. */
  "PGOOD2": "4",
  /** Physical pin 5: INTVcc; power_out. */
  "INTVcc": "5",
  /** Physical pin 6: RUN1; input. */
  "RUN1": "6",
  /** Physical pin 7: RUN2; input. */
  "RUN2": "7",
  /** Physical pin 8: ILIM; input. */
  "ILIM": "8",
  /** Physical pin 9: SENSE2-; input. */
  "SENSE2-": "9",
  /** Physical pin 10: SENSE2+; input. */
  "SENSE2+": "10",
  /** Physical pin 11: VFB2; input. */
  "VFB2": "11",
  /** Physical pin 12: ITH2; passive. */
  "ITH2": "12",
  /** Physical pin 13: DRVUV; input. */
  "DRVUV": "13",
  /** Physical pin 14: DRVSET; input. */
  "DRVSET": "14",
  /** Physical pin 15: TRACK/SS2; input. */
  "TRACK/SS2": "15",
  /** Physical pin 16: TG2; output. */
  "TG2": "16",
  /** Physical pin 17: SW2; output. */
  "SW2": "17",
  /** Physical pin 18: BOOST2; output. */
  "BOOST2": "18",
  /** Physical pin 19: BG2; output. */
  "BG2": "19",
  /** Physical pin 20: DRVcc; power_out. */
  "DRVcc": "20",
  /** Physical pin 21: EXTVcc; power_in. */
  "EXTVcc": "21",
  /** Physical pin 22: Vin; power_in. */
  "Vin": "22",
  /** Physical pin 23: BG1; output. */
  "BG1": "23",
  /** Physical pin 24: BOOST1; output. */
  "BOOST1": "24",
  /** Physical pin 25: SW1; output. */
  "SW1": "25",
  /** Physical pin 26: TG1; output. */
  "TG1": "26",
  /** Physical pin 27: TRACK/SS1; input. */
  "TRACK/SS1": "27",
  /** Physical pin 28: VPRG1; passive. */
  "VPRG1": "28",
  /** Physical pin 29: ITH1; passive. */
  "ITH1": "29",
  /** Physical pin 30: VFB1; input. */
  "VFB1": "30",
  /** Physical pin 31: SENSE1+; input. */
  "SENSE1+": "31",
  /** Physical pin 32: SENSE1-; input. */
  "SENSE1-": "32",
  /** Physical pin 33: GND; power_in. */
  "GND": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3892_1 extends Component.withPins({
  /** Physical pin 1: ITH1; passive. */
  "ITH1": "1",
  /** Physical pin 2: VFB1; input. */
  "VFB1": "2",
  /** Physical pin 3: SENSE1+; input. */
  "SENSE1+": "3",
  /** Physical pin 4: SENSE1-; input. */
  "SENSE1-": "4",
  /** Physical pin 5: FREQ; input. */
  "FREQ": "5",
  /** Physical pin 6: PLLIN/MODE; input. */
  "PLLIN/MODE": "6",
  /** Physical pin 7: INTVcc; power_out. */
  "INTVcc": "7",
  /** Physical pin 8: RUN1; input. */
  "RUN1": "8",
  /** Physical pin 9: RUN2; input. */
  "RUN2": "9",
  /** Physical pin 10: SENSE2-; input. */
  "SENSE2-": "10",
  /** Physical pin 11: SENSE2+; input. */
  "SENSE2+": "11",
  /** Physical pin 12: VFB2; input. */
  "VFB2": "12",
  /** Physical pin 13: ITH2; passive. */
  "ITH2": "13",
  /** Physical pin 14: DRVUV; input. */
  "DRVUV": "14",
  /** Physical pin 15: DRVSET; input. */
  "DRVSET": "15",
  /** Physical pin 16: TRACK/SS2; input. */
  "TRACK/SS2": "16",
  /** Physical pin 17: TG2; output. */
  "TG2": "17",
  /** Physical pin 18: SW2; output. */
  "SW2": "18",
  /** Physical pin 19: BOOST2; output. */
  "BOOST2": "19",
  /** Physical pin 20: BG2; output. */
  "BG2": "20",
  /** Physical pin 21: DRVcc; power_out. */
  "DRVcc": "21",
  /** Physical pin 22: EXTVcc; power_in. */
  "EXTVcc": "22",
  /** Physical pin 23: Vin; power_in. */
  "Vin": "23",
  /** Physical pin 24: BG1; output. */
  "BG1": "24",
  /** Physical pin 25: BOOST1; output. */
  "BOOST1": "25",
  /** Physical pin 26: SW1; output. */
  "SW1": "26",
  /** Physical pin 27: TG1; output. */
  "TG1": "27",
  /** Physical pin 28: TRACK/SS1; input. */
  "TRACK/SS1": "28",
  /** Physical pin 29: GND; power_in. */
  "GND": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3892_2 extends Component.withPins({
  /** Physical pin 1: FREQ; input. */
  "FREQ": "1",
  /** Physical pin 2: PLLIN/MODE; input. */
  "PLLIN/MODE": "2",
  /** Physical pin 3: PGOOD1; output. */
  "PGOOD1": "3",
  /** Physical pin 4: PGOOD2; output. */
  "PGOOD2": "4",
  /** Physical pin 5: INTVcc; power_out. */
  "INTVcc": "5",
  /** Physical pin 6: RUN1; input. */
  "RUN1": "6",
  /** Physical pin 7: RUN2; input. */
  "RUN2": "7",
  /** Physical pin 8: ILIM; input. */
  "ILIM": "8",
  /** Physical pin 9: SENSE2-; input. */
  "SENSE2-": "9",
  /** Physical pin 10: SENSE2+; input. */
  "SENSE2+": "10",
  /** Physical pin 11: VFB2; input. */
  "VFB2": "11",
  /** Physical pin 12: ITH2; passive. */
  "ITH2": "12",
  /** Physical pin 13: DRVUV; input. */
  "DRVUV": "13",
  /** Physical pin 14: DRVSET; input. */
  "DRVSET": "14",
  /** Physical pin 15: TRACK/SS2; input. */
  "TRACK/SS2": "15",
  /** Physical pin 16: TG2; output. */
  "TG2": "16",
  /** Physical pin 17: SW2; output. */
  "SW2": "17",
  /** Physical pin 18: BOOST2; output. */
  "BOOST2": "18",
  /** Physical pin 19: BG2; output. */
  "BG2": "19",
  /** Physical pin 20: DRVcc; power_out. */
  "DRVcc": "20",
  /** Physical pin 21: EXTVcc; power_in. */
  "EXTVcc": "21",
  /** Physical pin 22: Vin; power_in. */
  "Vin": "22",
  /** Physical pin 23: BG1; output. */
  "BG1": "23",
  /** Physical pin 24: BOOST1; output. */
  "BOOST1": "24",
  /** Physical pin 25: SW1; output. */
  "SW1": "25",
  /** Physical pin 26: TG1; output. */
  "TG1": "26",
  /** Physical pin 27: TRACK/SS1; input. */
  "TRACK/SS1": "27",
  /** Physical pin 28: VPRG1; passive. */
  "VPRG1": "28",
  /** Physical pin 29: ITH1; passive. */
  "ITH1": "29",
  /** Physical pin 30: VFB1; input. */
  "VFB1": "30",
  /** Physical pin 31: SENSE1+; input. */
  "SENSE1+": "31",
  /** Physical pin 32: SENSE1-; input. */
  "SENSE1-": "32",
  /** Physical pin 33: GND; power_in. */
  "GND": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC7810 extends Component.withPins({
  /** Physical pin 1: SENSE1-; input. */
  "SENSE1-": "1",
  /** Physical pin 2: DRVSET; input. */
  "DRVSET": "2",
  /** Physical pin 3: INTVcc; power_out. */
  "INTVcc": "3",
  /** Physical pin 4: PLLIN/SPREAD; input. */
  "PLLIN/SPREAD": "4",
  /** Physical pin 5: SGND; power_in. */
  "SGND_5": "5",
  /** Physical pin 6: FREQ; input. */
  "FREQ": "6",
  /** Physical pin 7: REGSD; passive. */
  "REGSD": "7",
  /** Physical pin 8: MODE; input. */
  "MODE": "8",
  /** Physical pin 9: OVLO; input. */
  "OVLO": "9",
  /** Physical pin 10: NDRV; output. */
  "NDRV": "10",
  /** Physical pin 11: EXTVcc; power_in. */
  "EXTVcc": "11",
  /** Physical pin 12: SENSE2-; input. */
  "SENSE2-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: VFB2; input. */
  "VFB2": "14",
  /** Physical pin 15: ITH2; passive. */
  "ITH2": "15",
  /** Physical pin 16: TRACK/SS2; input. */
  "TRACK/SS2": "16",
  /** Physical pin 19: TG2; output. */
  "TG2": "19",
  /** Physical pin 20: SW2; output. */
  "SW2": "20",
  /** Physical pin 21: BOOST2; output. */
  "BOOST2": "21",
  /** Physical pin 24: BG2; output. */
  "BG2": "24",
  /** Physical pin 25: PGND; power_in. */
  "PGND": "25",
  /** Physical pin 26: DRVcc; power_out. */
  "DRVcc": "26",
  /** Physical pin 29: RUN2; input. */
  "RUN2": "29",
  /** Physical pin 32: RUN1; input. */
  "RUN1": "32",
  /** Physical pin 35: Vin; power_in. */
  "Vin": "35",
  /** Physical pin 37: BG1; output. */
  "BG1": "37",
  /** Physical pin 40: BOOST1; output. */
  "BOOST1": "40",
  /** Physical pin 41: SW1; output. */
  "SW1": "41",
  /** Physical pin 42: TG1; output. */
  "TG1": "42",
  /** Physical pin 45: TRACK/SS1; input. */
  "TRACK/SS1": "45",
  /** Physical pin 46: ITH1; passive. */
  "ITH1": "46",
  /** Physical pin 47: VFB1; input. */
  "VFB1": "47",
  /** Physical pin 48: SENSE1+; input. */
  "SENSE1+": "48",
  /** Physical pin 49: SGND; power_in. */
  "SGND_49": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1200D40 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1200D100 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1200D60 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1200P40 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1200P100 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1200P60 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1203D100 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1203D40 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1203D60 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1203P100 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1203P40 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1203P60 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1207A extends Component.withPins({
  /** Physical pin 1: DMG; input. */
  "DMG": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1207B extends Component.withPins({
  /** Physical pin 1: DMG; input. */
  "DMG": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217AD100 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217AD133 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217AD65 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217AP100 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217AP133 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217AP65 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217D100 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217D133 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217D65 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217P100 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217P133 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1217P65 extends Component.withPins({
  /** Physical pin 1: ADJ; input. */
  "ADJ": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: HV; input. */
  "HV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1280 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: UV/OV; input. */
  "UV/OV": "3",
  /** Physical pin 4: FF; passive. */
  "FF": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: CSKIP; passive. */
  "CSKIP": "6",
  /** Physical pin 7: RT; passive. */
  "RT": "7",
  /** Physical pin 8: DCMAX; input. */
  "DCMAX": "8",
  /** Physical pin 9: SS; passive. */
  "SS": "9",
  /** Physical pin 10: VEA; input. */
  "VEA": "10",
  /** Physical pin 11: VREF; output. */
  "VREF": "11",
  /** Physical pin 12: TD; passive. */
  "TD": "12",
  /** Physical pin 13: OUT2; output. */
  "OUT2": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: OUT1; output. */
  "OUT1": "15",
  /** Physical pin 16: VAUX; power_in. */
  "VAUX": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1380A extends Component.withPins({
  /** Physical pin 1: ZCD; input. */
  "ZCD": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: FAULT; input. */
  "FAULT": "7",
  /** Physical pin 8: CT; passive. */
  "CT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1380B extends Component.withPins({
  /** Physical pin 1: ZCD; input. */
  "ZCD": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: FAULT; input. */
  "FAULT": "7",
  /** Physical pin 8: CT; passive. */
  "CT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1380C extends Component.withPins({
  /** Physical pin 1: ZCD; input. */
  "ZCD": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: FAULT; input. */
  "FAULT": "7",
  /** Physical pin 8: CT; passive. */
  "CT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1380D extends Component.withPins({
  /** Physical pin 1: ZCD; input. */
  "ZCD": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DRV; output. */
  "DRV": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: FAULT; input. */
  "FAULT": "7",
  /** Physical pin 8: CT; passive. */
  "CT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1653 extends Component.withPins({
  /** Physical pin 1: FB/SD; input. */
  "FB/SD": "1",
  /** Physical pin 2: VCONTROL; passive. */
  "VCONTROL": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VM; passive. */
  "VM": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: DRV; output. */
  "DRV": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP1653A extends Component.withPins({
  /** Physical pin 1: FB/SD; input. */
  "FB/SD": "1",
  /** Physical pin 2: VCONTROL; passive. */
  "VCONTROL": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: VM; passive. */
  "VM": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: DRV; output. */
  "DRV": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP4308AD extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MIN_TOFF; passive. */
  "MIN_TOFF": "2",
  /** Physical pin 3: MIN_TON; passive. */
  "MIN_TON": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: CS; input. */
  "CS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DRV; output. */
  "DRV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP4308AMT extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MIN_TOFF; passive. */
  "MIN_TOFF": "2",
  /** Physical pin 3: MIN_TON; passive. */
  "MIN_TON": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: CS; input. */
  "CS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DRV; output. */
  "DRV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP4308DD extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MIN_TOFF; passive. */
  "MIN_TOFF": "2",
  /** Physical pin 3: MIN_TON; passive. */
  "MIN_TON": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: CS; input. */
  "CS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DRV; output. */
  "DRV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP4308DMN extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MIN_TOFF; passive. */
  "MIN_TOFF": "2",
  /** Physical pin 3: MIN_TON; passive. */
  "MIN_TON": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: CS; input. */
  "CS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DRV; output. */
  "DRV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP4308DMT extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MIN_TOFF; passive. */
  "MIN_TOFF": "2",
  /** Physical pin 3: MIN_TON; passive. */
  "MIN_TON": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: CS; input. */
  "CS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DRV; output. */
  "DRV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP4308QD extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: MIN_TOFF; passive. */
  "MIN_TOFF": "2",
  /** Physical pin 3: MIN_TON; passive. */
  "MIN_TON": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: MAX_TON; passive. */
  "MAX_TON": "5",
  /** Physical pin 6: CS; input. */
  "CS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DRV; output. */
  "DRV": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG3525 extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: NI; input. */
  "NI": "2",
  /** Physical pin 3: SYNC; passive. */
  "SYNC": "3",
  /** Physical pin 4: OSC; output. */
  "OSC": "4",
  /** Physical pin 5: CT; passive. */
  "CT": "5",
  /** Physical pin 6: RT; passive. */
  "RT": "6",
  /** Physical pin 7: DISCH; open_collector. */
  "DISCH": "7",
  /** Physical pin 8: SS; passive. */
  "SS": "8",
  /** Physical pin 9: COMP; passive. */
  "COMP": "9",
  /** Physical pin 10: SD; passive. */
  "SD": "10",
  /** Physical pin 11: OUTA; output. */
  "OUTA": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: VC; power_in. */
  "VC": "13",
  /** Physical pin 14: OUTB; output. */
  "OUTB": "14",
  /** Physical pin 15: VIN; power_in. */
  "VIN": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG3527 extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: NI; input. */
  "NI": "2",
  /** Physical pin 3: SYNC; passive. */
  "SYNC": "3",
  /** Physical pin 4: OSC; output. */
  "OSC": "4",
  /** Physical pin 5: CT; passive. */
  "CT": "5",
  /** Physical pin 6: RT; passive. */
  "RT": "6",
  /** Physical pin 7: DISCH; open_collector. */
  "DISCH": "7",
  /** Physical pin 8: SS; passive. */
  "SS": "8",
  /** Physical pin 9: COMP; passive. */
  "COMP": "9",
  /** Physical pin 10: SD; passive. */
  "SD": "10",
  /** Physical pin 11: OUTA; output. */
  "OUTA": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: VC; power_in. */
  "VC": "13",
  /** Physical pin 14: OUTB; output. */
  "OUTB": "14",
  /** Physical pin 15: VIN; power_in. */
  "VIN": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA4862 extends Component.withPins({
  /** Physical pin 1: VSENSE; input. */
  "VSENSE": "1",
  /** Physical pin 2: VAOUT; output. */
  "VAOUT": "2",
  /** Physical pin 3: MULTIN; input. */
  "MULTIN": "3",
  /** Physical pin 4: ISENSE; input. */
  "ISENSE": "4",
  /** Physical pin 5: DETIN; passive. */
  "DETIN": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: GTDRV; output. */
  "GTDRV": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA4863 extends Component.withPins({
  /** Physical pin 1: VSENSE; input. */
  "VSENSE": "1",
  /** Physical pin 2: VAOUT; output. */
  "VAOUT": "2",
  /** Physical pin 3: MULTIN; input. */
  "MULTIN": "3",
  /** Physical pin 4: ISENSE; input. */
  "ISENSE": "4",
  /** Physical pin 5: DETIN; passive. */
  "DETIN": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: GTDRV; output. */
  "GTDRV": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA4863_2 extends Component.withPins({
  /** Physical pin 1: VSENSE; input. */
  "VSENSE": "1",
  /** Physical pin 2: VAOUT; output. */
  "VAOUT": "2",
  /** Physical pin 3: MULTIN; input. */
  "MULTIN": "3",
  /** Physical pin 4: ISENSE; input. */
  "ISENSE": "4",
  /** Physical pin 5: DETIN; passive. */
  "DETIN": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: GTDRV; output. */
  "GTDRV": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL494 extends Component.withPins({
  /** Physical pin 1: 1IN+; input. */
  "1IN+": "1",
  /** Physical pin 2: 1IN-; input. */
  "1IN-": "2",
  /** Physical pin 3: FB; output. */
  "FB": "3",
  /** Physical pin 4: DTC; input. */
  "DTC": "4",
  /** Physical pin 5: CT; passive. */
  "CT": "5",
  /** Physical pin 6: RT; passive. */
  "RT": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: C1; passive. */
  "C1": "8",
  /** Physical pin 9: E1; passive. */
  "E1": "9",
  /** Physical pin 10: E2; passive. */
  "E2": "10",
  /** Physical pin 11: C2; passive. */
  "C2": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: OUTCTRL; input. */
  "OUTCTRL": "13",
  /** Physical pin 14: REF; power_out. */
  "REF": "14",
  /** Physical pin 15: 2IN-; input. */
  "2IN-": "15",
  /** Physical pin 16: 2IN+; input. */
  "2IN+": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS2375_1 extends Component.withPins({
  /** Physical pin 1: ILIM; passive. */
  "ILIM": "1",
  /** Physical pin 2: CLASS; passive. */
  "CLASS": "2",
  /** Physical pin 3: DET; passive. */
  "DET": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: RTN; power_out. */
  "RTN": "5",
  /** Physical pin 6: PG; open_collector. */
  "PG": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3525 extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: NI; input. */
  "NI": "2",
  /** Physical pin 3: SYNC; passive. */
  "SYNC": "3",
  /** Physical pin 4: OSC; output. */
  "OSC": "4",
  /** Physical pin 5: CT; passive. */
  "CT": "5",
  /** Physical pin 6: RT; passive. */
  "RT": "6",
  /** Physical pin 7: DISCH; open_collector. */
  "DISCH": "7",
  /** Physical pin 8: SS; passive. */
  "SS": "8",
  /** Physical pin 9: COMP; passive. */
  "COMP": "9",
  /** Physical pin 10: SD; passive. */
  "SD": "10",
  /** Physical pin 11: OUTA; output. */
  "OUTA": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: VC; power_in. */
  "VC": "13",
  /** Physical pin 14: OUTB; output. */
  "OUTB": "14",
  /** Physical pin 15: VIN; power_in. */
  "VIN": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3527 extends Component.withPins({
  /** Physical pin 1: INV; input. */
  "INV": "1",
  /** Physical pin 2: NI; input. */
  "NI": "2",
  /** Physical pin 3: SYNC; passive. */
  "SYNC": "3",
  /** Physical pin 4: OSC; output. */
  "OSC": "4",
  /** Physical pin 5: CT; passive. */
  "CT": "5",
  /** Physical pin 6: RT; passive. */
  "RT": "6",
  /** Physical pin 7: DISCH; open_collector. */
  "DISCH": "7",
  /** Physical pin 8: SS; passive. */
  "SS": "8",
  /** Physical pin 9: COMP; passive. */
  "COMP": "9",
  /** Physical pin 10: SD; passive. */
  "SD": "10",
  /** Physical pin 11: OUTA; output. */
  "OUTA": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: VC; power_in. */
  "VC": "13",
  /** Physical pin 14: OUTB; output. */
  "OUTB": "14",
  /** Physical pin 15: VIN; power_in. */
  "VIN": "15",
  /** Physical pin 16: REF; power_in. */
  "REF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3842_SOIC8 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VREF; power_out. */
  "VREF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3842_DIP8 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VREF; power_out. */
  "VREF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3842_SOIC14 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: RC; passive. */
  "RC": "7",
  /** Physical pin 8: PWRGND; power_in. */
  "PWRGND": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: OUT; output. */
  "OUT": "10",
  /** Physical pin 11: VC; power_in. */
  "VC": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VREF; power_out. */
  "VREF": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3842_SOIC16 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: COMP; passive. */
  "COMP": "3",
  /** Physical pin 4: FB; input. */
  "FB": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: RC; passive. */
  "RC": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: PWRGND; power_in. */
  "PWRGND": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: OUT; output. */
  "OUT": "12",
  /** Physical pin 13: VC; power_in. */
  "VC": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: VREF; power_out. */
  "VREF": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3843_DIP8 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VREF; power_out. */
  "VREF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3843_SOIC14 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: RC; passive. */
  "RC": "7",
  /** Physical pin 8: PWRGND; power_in. */
  "PWRGND": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: OUT; output. */
  "OUT": "10",
  /** Physical pin 11: VC; power_in. */
  "VC": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VREF; power_out. */
  "VREF": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3843_SOIC8 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VREF; power_out. */
  "VREF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3844_DIP8 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VREF; power_out. */
  "VREF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3844_SOIC14 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: RC; passive. */
  "RC": "7",
  /** Physical pin 8: PWRGND; power_in. */
  "PWRGND": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: OUT; output. */
  "OUT": "10",
  /** Physical pin 11: VC; power_in. */
  "VC": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VREF; power_out. */
  "VREF": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3844_SOIC8 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VREF; power_out. */
  "VREF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3845_DIP8 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VREF; power_out. */
  "VREF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3845_SOIC14 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: RC; passive. */
  "RC": "7",
  /** Physical pin 8: PWRGND; power_in. */
  "PWRGND": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: OUT; output. */
  "OUT": "10",
  /** Physical pin 11: VC; power_in. */
  "VC": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VREF; power_out. */
  "VREF": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3845_SOIC8 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VREF; power_out. */
  "VREF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UC3854 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: PKLMT; input. */
  "PKLMT": "2",
  /** Physical pin 3: CAOUT; output. */
  "CAOUT": "3",
  /** Physical pin 4: ISENSE; input. */
  "ISENSE": "4",
  /** Physical pin 5: MULTOUT; passive. */
  "MULTOUT": "5",
  /** Physical pin 6: IAC; input. */
  "IAC": "6",
  /** Physical pin 7: VAOUT; output. */
  "VAOUT": "7",
  /** Physical pin 8: VRMS; input. */
  "VRMS": "8",
  /** Physical pin 9: VREF; output. */
  "VREF": "9",
  /** Physical pin 10: ENA; input. */
  "ENA": "10",
  /** Physical pin 11: VSENSE; input. */
  "VSENSE": "11",
  /** Physical pin 12: RSET; passive. */
  "RSET": "12",
  /** Physical pin 13: SS; passive. */
  "SS": "13",
  /** Physical pin 14: CT; passive. */
  "CT": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: GTDRV; output. */
  "GTDRV": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3895N extends Component.withPins({
  /** Physical pin 1: EAN; input. */
  "EAN": "1",
  /** Physical pin 2: EAOUT; bidirectional. */
  "EAOUT": "2",
  /** Physical pin 3: RAMP; input. */
  "RAMP": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SYNC; bidirectional. */
  "SYNC": "6",
  /** Physical pin 7: CT; passive. */
  "CT": "7",
  /** Physical pin 8: RT; passive. */
  "RT": "8",
  /** Physical pin 9: DELAB; passive. */
  "DELAB": "9",
  /** Physical pin 10: DELCD; passive. */
  "DELCD": "10",
  /** Physical pin 11: ADS; input. */
  "ADS": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: OUTD; output. */
  "OUTD": "13",
  /** Physical pin 14: OUTC; output. */
  "OUTC": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: OUTB; output. */
  "OUTB": "17",
  /** Physical pin 18: OUTA; output. */
  "OUTA": "18",
  /** Physical pin 19: SS/DISB; passive. */
  "SS/DISB": "19",
  /** Physical pin 20: EAP; input. */
  "EAP": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC1895J extends Component.withPins({
  /** Physical pin 1: EAN; input. */
  "EAN": "1",
  /** Physical pin 2: EAOUT; bidirectional. */
  "EAOUT": "2",
  /** Physical pin 3: RAMP; input. */
  "RAMP": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SYNC; bidirectional. */
  "SYNC": "6",
  /** Physical pin 7: CT; passive. */
  "CT": "7",
  /** Physical pin 8: RT; passive. */
  "RT": "8",
  /** Physical pin 9: DELAB; passive. */
  "DELAB": "9",
  /** Physical pin 10: DELCD; passive. */
  "DELCD": "10",
  /** Physical pin 11: ADS; input. */
  "ADS": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: OUTD; output. */
  "OUTD": "13",
  /** Physical pin 14: OUTC; output. */
  "OUTC": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: OUTB; output. */
  "OUTB": "17",
  /** Physical pin 18: OUTA; output. */
  "OUTA": "18",
  /** Physical pin 19: SS/DISB; passive. */
  "SS/DISB": "19",
  /** Physical pin 20: EAP; input. */
  "EAP": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC24610D extends Component.withPins({
  /** Physical pin 1: SYNC; input. */
  "SYNC": "1",
  /** Physical pin 2: EN/TOFF; input. */
  "EN/TOFF": "2",
  /** Physical pin 3: TON; input. */
  "TON": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VS; input. */
  "VS": "7",
  /** Physical pin 8: VD; input. */
  "VD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC24610DRB extends Component.withPins({
  /** Physical pin 1: SYNC; input. */
  "SYNC": "1",
  /** Physical pin 2: EN/TOFF; input. */
  "EN/TOFF": "2",
  /** Physical pin 3: TON; input. */
  "TON": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: GATE; output. */
  "GATE": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VS; input. */
  "VS": "7",
  /** Physical pin 8: VD; input. */
  "VD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC24612_1DBV extends Component.withPins({
  /** Physical pin 1: VG; output. */
  "VG": "1",
  /** Physical pin 2: VS; input. */
  "VS": "2",
  /** Physical pin 3: REG; passive. */
  "REG": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: VD; input. */
  "VD": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC24612_2DBV extends Component.withPins({
  /** Physical pin 1: VG; output. */
  "VG": "1",
  /** Physical pin 2: VS; input. */
  "VS": "2",
  /** Physical pin 3: REG; passive. */
  "REG": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: VD; input. */
  "VD": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC24630DBV extends Component.withPins({
  /** Physical pin 1: VPC; input. */
  "VPC": "1",
  /** Physical pin 2: VSC; input. */
  "VSC": "2",
  /** Physical pin 3: TBLK; passive. */
  "TBLK": "3",
  /** Physical pin 4: DRV; output. */
  "DRV": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC24636DBV extends Component.withPins({
  /** Physical pin 1: VPC; input. */
  "VPC": "1",
  /** Physical pin 2: VSC; input. */
  "VSC": "2",
  /** Physical pin 3: TBLK; passive. */
  "TBLK": "3",
  /** Physical pin 4: DRV; output. */
  "DRV": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC25600 extends Component.withPins({
  /** Physical pin 1: DT; passive. */
  "DT": "1",
  /** Physical pin 2: RT; input. */
  "RT": "2",
  /** Physical pin 3: OC; input. */
  "OC": "3",
  /** Physical pin 4: SS; passive. */
  "SS": "4",
  /** Physical pin 5: GD2; output. */
  "GD2": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: GD1; output. */
  "GD1": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC256301 extends Component.withPins({
  /** Physical pin 1: HV; input. */
  "HV": "1",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: BLK; input. */
  "BLK": "4",
  /** Physical pin 5: FB; input. */
  "FB": "5",
  /** Physical pin 6: ISNS; input. */
  "ISNS": "6",
  /** Physical pin 7: VCR; input. */
  "VCR": "7",
  /** Physical pin 8: BW; input. */
  "BW": "8",
  /** Physical pin 9: LL/SS; input. */
  "LL/SS": "9",
  /** Physical pin 10: LO; output. */
  "LO": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RVCC; power_out. */
  "RVCC": "12",
  /** Physical pin 14: HB; input. */
  "HB": "14",
  /** Physical pin 15: HO; output. */
  "HO": "15",
  /** Physical pin 16: HS; input. */
  "HS": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC25800 extends Component.withPins({
  /** Physical pin 1: SYNC; input. */
  "SYNC": "1",
  /** Physical pin 2: ~{DIS/FLT}; bidirectional. */
  "~{DIS/FLT}": "2",
  /** Physical pin 3: VREG; output. */
  "VREG": "3",
  /** Physical pin 4: OC/DT; input. */
  "OC/DT": "4",
  /** Physical pin 5: RT; passive. */
  "RT": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: SW; output. */
  "SW": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC2891 extends Component.withPins({
  /** Physical pin 1: RTDEL; passive. */
  "RTDEL": "1",
  /** Physical pin 2: RTON; passive. */
  "RTON": "2",
  /** Physical pin 3: RTOFF; passive. */
  "RTOFF": "3",
  /** Physical pin 4: VREF; output. */
  "VREF": "4",
  /** Physical pin 5: SYNC; input. */
  "SYNC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: CS; input. */
  "CS": "7",
  /** Physical pin 8: RSLOPE; passive. */
  "RSLOPE": "8",
  /** Physical pin 9: FB; input. */
  "FB": "9",
  /** Physical pin 10: SS/SD; passive. */
  "SS/SD": "10",
  /** Physical pin 11: PGND; power_in. */
  "PGND": "11",
  /** Physical pin 12: AUX; output. */
  "AUX": "12",
  /** Physical pin 13: OUT; output. */
  "OUT": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: LINEUV; passive. */
  "LINEUV": "15",
  /** Physical pin 16: VIN; input. */
  "VIN": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC2892 extends Component.withPins({
  /** Physical pin 1: RTDEL; passive. */
  "RTDEL": "1",
  /** Physical pin 2: RTON; passive. */
  "RTON": "2",
  /** Physical pin 3: RTOFF; passive. */
  "RTOFF": "3",
  /** Physical pin 4: VREF; output. */
  "VREF": "4",
  /** Physical pin 5: SYNC; input. */
  "SYNC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: CS; input. */
  "CS": "7",
  /** Physical pin 8: RSLOPE; passive. */
  "RSLOPE": "8",
  /** Physical pin 9: FB; input. */
  "FB": "9",
  /** Physical pin 10: SS/SD; passive. */
  "SS/SD": "10",
  /** Physical pin 11: PGND; power_in. */
  "PGND": "11",
  /** Physical pin 12: AUX; output. */
  "AUX": "12",
  /** Physical pin 13: OUT; output. */
  "OUT": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: LINEUV; passive. */
  "LINEUV": "15",
  /** Physical pin 16: LINEOV; passive. */
  "LINEOV": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC2893 extends Component.withPins({
  /** Physical pin 1: RTDEL; passive. */
  "RTDEL": "1",
  /** Physical pin 2: RTON; passive. */
  "RTON": "2",
  /** Physical pin 3: RTOFF; passive. */
  "RTOFF": "3",
  /** Physical pin 4: VREF; output. */
  "VREF": "4",
  /** Physical pin 5: SYNC; input. */
  "SYNC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: CS; input. */
  "CS": "7",
  /** Physical pin 8: RSLOPE; passive. */
  "RSLOPE": "8",
  /** Physical pin 9: FB; input. */
  "FB": "9",
  /** Physical pin 10: SS/SD; passive. */
  "SS/SD": "10",
  /** Physical pin 11: PGND; power_in. */
  "PGND": "11",
  /** Physical pin 12: AUX; output. */
  "AUX": "12",
  /** Physical pin 13: OUT; output. */
  "OUT": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: LINEUV; passive. */
  "LINEUV": "15",
  /** Physical pin 16: VIN; input. */
  "VIN": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC2894 extends Component.withPins({
  /** Physical pin 1: RTDEL; passive. */
  "RTDEL": "1",
  /** Physical pin 2: RTON; passive. */
  "RTON": "2",
  /** Physical pin 3: RTOFF; passive. */
  "RTOFF": "3",
  /** Physical pin 4: VREF; output. */
  "VREF": "4",
  /** Physical pin 5: SYNC; input. */
  "SYNC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: CS; input. */
  "CS": "7",
  /** Physical pin 8: RSLOPE; passive. */
  "RSLOPE": "8",
  /** Physical pin 9: FB; input. */
  "FB": "9",
  /** Physical pin 10: SS/SD; passive. */
  "SS/SD": "10",
  /** Physical pin 11: PGND; power_in. */
  "PGND": "11",
  /** Physical pin 12: AUX; output. */
  "AUX": "12",
  /** Physical pin 13: OUT; output. */
  "OUT": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: LINEUV; passive. */
  "LINEUV": "15",
  /** Physical pin 16: LINEOV; passive. */
  "LINEOV": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3895DW extends Component.withPins({
  /** Physical pin 1: EAN; input. */
  "EAN": "1",
  /** Physical pin 2: EAOUT; bidirectional. */
  "EAOUT": "2",
  /** Physical pin 3: RAMP; input. */
  "RAMP": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SYNC; bidirectional. */
  "SYNC": "6",
  /** Physical pin 7: CT; passive. */
  "CT": "7",
  /** Physical pin 8: RT; passive. */
  "RT": "8",
  /** Physical pin 9: DELAB; passive. */
  "DELAB": "9",
  /** Physical pin 10: DELCD; passive. */
  "DELCD": "10",
  /** Physical pin 11: ADS; input. */
  "ADS": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: OUTD; output. */
  "OUTD": "13",
  /** Physical pin 14: OUTC; output. */
  "OUTC": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: OUTB; output. */
  "OUTB": "17",
  /** Physical pin 18: OUTA; output. */
  "OUTA": "18",
  /** Physical pin 19: SS/DISB; passive. */
  "SS/DISB": "19",
  /** Physical pin 20: EAP; input. */
  "EAP": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC2895DW extends Component.withPins({
  /** Physical pin 1: EAN; input. */
  "EAN": "1",
  /** Physical pin 2: EAOUT; bidirectional. */
  "EAOUT": "2",
  /** Physical pin 3: RAMP; input. */
  "RAMP": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SYNC; bidirectional. */
  "SYNC": "6",
  /** Physical pin 7: CT; passive. */
  "CT": "7",
  /** Physical pin 8: RT; passive. */
  "RT": "8",
  /** Physical pin 9: DELAB; passive. */
  "DELAB": "9",
  /** Physical pin 10: DELCD; passive. */
  "DELCD": "10",
  /** Physical pin 11: ADS; input. */
  "ADS": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: OUTD; output. */
  "OUTD": "13",
  /** Physical pin 14: OUTC; output. */
  "OUTC": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: OUTB; output. */
  "OUTB": "17",
  /** Physical pin 18: OUTA; output. */
  "OUTA": "18",
  /** Physical pin 19: SS/DISB; passive. */
  "SS/DISB": "19",
  /** Physical pin 20: EAP; input. */
  "EAP": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC2895N extends Component.withPins({
  /** Physical pin 1: EAN; input. */
  "EAN": "1",
  /** Physical pin 2: EAOUT; bidirectional. */
  "EAOUT": "2",
  /** Physical pin 3: RAMP; input. */
  "RAMP": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SYNC; bidirectional. */
  "SYNC": "6",
  /** Physical pin 7: CT; passive. */
  "CT": "7",
  /** Physical pin 8: RT; passive. */
  "RT": "8",
  /** Physical pin 9: DELAB; passive. */
  "DELAB": "9",
  /** Physical pin 10: DELCD; passive. */
  "DELCD": "10",
  /** Physical pin 11: ADS; input. */
  "ADS": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: OUTD; output. */
  "OUTD": "13",
  /** Physical pin 14: OUTC; output. */
  "OUTC": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: OUTB; output. */
  "OUTB": "17",
  /** Physical pin 18: OUTA; output. */
  "OUTA": "18",
  /** Physical pin 19: SS/DISB; passive. */
  "SS/DISB": "19",
  /** Physical pin 20: EAP; input. */
  "EAP": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3895PW extends Component.withPins({
  /** Physical pin 1: EAN; input. */
  "EAN": "1",
  /** Physical pin 2: EAOUT; bidirectional. */
  "EAOUT": "2",
  /** Physical pin 3: RAMP; input. */
  "RAMP": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SYNC; bidirectional. */
  "SYNC": "6",
  /** Physical pin 7: CT; passive. */
  "CT": "7",
  /** Physical pin 8: RT; passive. */
  "RT": "8",
  /** Physical pin 9: DELAB; passive. */
  "DELAB": "9",
  /** Physical pin 10: DELCD; passive. */
  "DELCD": "10",
  /** Physical pin 11: ADS; input. */
  "ADS": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: OUTD; output. */
  "OUTD": "13",
  /** Physical pin 14: OUTC; output. */
  "OUTC": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: OUTB; output. */
  "OUTB": "17",
  /** Physical pin 18: OUTA; output. */
  "OUTA": "18",
  /** Physical pin 19: SS/DISB; passive. */
  "SS/DISB": "19",
  /** Physical pin 20: EAP; input. */
  "EAP": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC2895PW extends Component.withPins({
  /** Physical pin 1: EAN; input. */
  "EAN": "1",
  /** Physical pin 2: EAOUT; bidirectional. */
  "EAOUT": "2",
  /** Physical pin 3: RAMP; input. */
  "RAMP": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SYNC; bidirectional. */
  "SYNC": "6",
  /** Physical pin 7: CT; passive. */
  "CT": "7",
  /** Physical pin 8: RT; passive. */
  "RT": "8",
  /** Physical pin 9: DELAB; passive. */
  "DELAB": "9",
  /** Physical pin 10: DELCD; passive. */
  "DELCD": "10",
  /** Physical pin 11: ADS; input. */
  "ADS": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: OUTD; output. */
  "OUTD": "13",
  /** Physical pin 14: OUTC; output. */
  "OUTC": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: PGND; power_in. */
  "PGND": "16",
  /** Physical pin 17: OUTB; output. */
  "OUTB": "17",
  /** Physical pin 18: OUTA; output. */
  "OUTA": "18",
  /** Physical pin 19: SS/DISB; passive. */
  "SS/DISB": "19",
  /** Physical pin 20: EAP; input. */
  "EAP": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC2897 extends Component.withPins({
  /** Physical pin 1: VIN; input. */
  "VIN": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: RTDEL; passive. */
  "RTDEL": "3",
  /** Physical pin 4: RTON; passive. */
  "RTON": "4",
  /** Physical pin 5: RTOFF; passive. */
  "RTOFF": "5",
  /** Physical pin 6: VREF; output. */
  "VREF": "6",
  /** Physical pin 7: SYNC; input. */
  "SYNC": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: CS; input. */
  "CS": "9",
  /** Physical pin 10: RSLOPE; passive. */
  "RSLOPE": "10",
  /** Physical pin 11: FB; input. */
  "FB": "11",
  /** Physical pin 12: SS/SD; passive. */
  "SS/SD": "12",
  /** Physical pin 13: PGND; power_in. */
  "PGND": "13",
  /** Physical pin 14: AUX; output. */
  "AUX": "14",
  /** Physical pin 15: OUT; output. */
  "OUT": "15",
  /** Physical pin 16: PVDD; power_in. */
  "PVDD": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
  /** Physical pin 18: LINEUV; passive. */
  "LINEUV": "18",
  /** Physical pin 19: LINEOV; passive. */
  "LINEOV": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3800 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3801 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3802 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3803 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3804 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3805 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3808D extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUTB; output. */
  "OUTB": "6",
  /** Physical pin 7: OUTA; output. */
  "OUTA": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3808N extends Component.withPins({
  /** Physical pin 1: OUTA; output. */
  "OUTA": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: COMP; passive. */
  "COMP": "3",
  /** Physical pin 4: FB; input. */
  "FB": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: RC; passive. */
  "RC": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3813_0 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3813_1 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3813_2 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3813_3 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3813_4 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UCC3813_5 extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: RC; passive. */
  "RC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: REF; power_in. */
  "REF": "8",
}) {
  override schema = "Regulator_Controller:UCC3813-5";
  override referencePrefix = "U";
}

