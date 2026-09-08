// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * SPST DC-4.5GHz absorbative switch, 40dB isolation at 1GHz, LFCSP-8
 *
 * KiCad symbol: `RF_Switch:ADG901BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG901_902.pdf
 * Keywords: RF SPST switch CMOS LVTTL.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADG901BCPZ extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CTRL; input. */
  "CTRL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: RF1; passive. */
  "RF1": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF2; passive. */
  "RF2": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "RF_Switch:ADG901BCPZ";
  override referencePrefix = "U";
}

/**
 * SPST DC-4.5GHz absorbative switch, 40dB isolation at 1GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:ADG901BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG901_902.pdf
 * Keywords: RF SPST switch CMOS LVTTL.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADG901BRMZ extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CTRL; input. */
  "CTRL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: RF1; passive. */
  "RF1": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF2; passive. */
  "RF2": "8",
}) {
  override schema = "RF_Switch:ADG901BRMZ";
  override referencePrefix = "U";
}

/**
 * SPST DC-4.5GHz reflective switch, 40dB isolation at 1GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:ADG902BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG901_902.pdf
 * Keywords: RF SPST switch CMOS LVTTL.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADG902BRMZ extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CTRL; input. */
  "CTRL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: RF1; passive. */
  "RF1": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF2; passive. */
  "RF2": "8",
}) {
  override schema = "RF_Switch:ADG902BRMZ";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4GHz absorbative switch, 43dB isolation at 1GHz, LFCSP-8
 *
 * KiCad symbol: `RF_Switch:ADG918BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG918_919.pdf
 * Keywords: RF Mux SPDT switch CMOS LVTTL.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADG918BCPZ extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CTRL; input. */
  "CTRL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: RFC; passive. */
  "RFC": "4",
  /** Physical pin 5: RF2; passive. */
  "RF2": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF1; passive. */
  "RF1": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "RF_Switch:ADG918BCPZ";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4GHz absorbative switch, 43dB isolation at 1GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:ADG918BRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG918_919.pdf
 * Keywords: RF Mux SPDT switch CMOS LVTTL.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADG918BRM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CTRL; input. */
  "CTRL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: RFC; passive. */
  "RFC": "4",
  /** Physical pin 5: RF2; passive. */
  "RF2": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF1; passive. */
  "RF1": "8",
}) {
  override schema = "RF_Switch:ADG918BRM";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4GHz reflective switch, 43dB isolation at 1GHz, LFCSP-8
 *
 * KiCad symbol: `RF_Switch:ADG919BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG918_919.pdf
 * Keywords: RF Mux SPDT switch CMOS LVTTL.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADG919BCPZ extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CTRL; input. */
  "CTRL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: RFC; passive. */
  "RFC": "4",
  /** Physical pin 5: RF2; passive. */
  "RF2": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF1; passive. */
  "RF1": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "RF_Switch:ADG919BCPZ";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4GHz reflective switch, 43dB isolation at 1GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:ADG919BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG918_919.pdf
 * Keywords: RF Mux SPDT switch CMOS LVTTL.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADG919BRMZ extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CTRL; input. */
  "CTRL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: RFC; passive. */
  "RFC": "4",
  /** Physical pin 5: RF2; passive. */
  "RF2": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF1; passive. */
  "RF1": "8",
}) {
  override schema = "RF_Switch:ADG919BRMZ";
  override referencePrefix = "U";
}

/**
 * 20 MHz to 4.0 GHz GaAs SPDT Switch, SC-70
 *
 * KiCad symbol: `RF_Switch:AS179-92LF`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see http://www.skyworksinc.com/uploads/documents/AS179_92LF_200176H.pdf
 * Keywords: rf spdt switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS179_92LF extends Component.withPins({
  /** Physical pin 1: J3; passive. */
  "J3": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: J2; passive. */
  "J2": "3",
  /** Physical pin 4: V1; input. */
  "V1": "4",
  /** Physical pin 5: J1; passive. */
  "J1": "5",
  /** Physical pin 6: V2; input. */
  "V2": "6",
}) {
  override schema = "RF_Switch:AS179-92LF";
  override referencePrefix = "U";
}

/**
 * SPDT DC-9GHz switch, 45dB isolation at 960MHz, PG-TSNP-6-10
 *
 * KiCad symbol: `RF_Switch:BGS12WN6E6327`. Reference prefix: `U`.
 * Footprint filters: *PG?TSNP*0.7x1.1mm*P0.4mm*.
 * @see https://www.infineon.com/dgdl/Infineon-BGS12WN6-DataSheet-v02_05-EN.pdf?fileId=5546d4626b2d8e69016b89d2b3334727
 * Keywords: RF Mux SPDT switch CMOS.
 * Default footprint: Package_LGA:Infineon_PG-TSNP-6-10_0.7x1.1mm_0.7x1.1mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BGS12WN6E6327 extends Component.withPins({
  /** Physical pin 1: RF2; passive. */
  "RF2": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF1; passive. */
  "RF1": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RFIN; passive. */
  "RFIN": "5",
  /** Physical pin 6: CTRL; input. */
  "CTRL": "6",
}) {
  override schema = "RF_Switch:BGS12WN6E6327";
  override referencePrefix = "U";
}

/**
 * SP4T 100MHz-6GHz absorptive switch, 50 Ohm, LFCSP-16
 *
 * KiCad symbol: `RF_Switch:HMC7992`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/HMC7992.pdf
 * Keywords: rf switch sp4t absorptive.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HMC7992 extends Component.withPins({
  /** Physical pin 1: RF4; passive. */
  "RF4": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: RF3; passive. */
  "RF3": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
  /** Physical pin 9: RF2; passive. */
  "RF2": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: RF1; passive. */
  "RF1": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: RFC; passive. */
  "RFC": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "RF_Switch:HMC7992";
  override referencePrefix = "U";
}

/**
 * High Isolation SPDT Non-Reflective Switch, DC-6GHz, Matched to 50 Ohm, LFCSP-16
 *
 * KiCad symbol: `RF_Switch:HMC849A`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/hmc849a.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_CSP:LFCSP-16-1EP_4x4mm_P0.65mm_EP2.4x2.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HMC849A extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VCTL; input. */
  "VCTL": "2",
  /** Physical pin 3: RFC; passive. */
  "RFC": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: RF1; passive. */
  "RF1": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: RF2; passive. */
  "RF2": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "RF_Switch:HMC849A";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4.6GHz reflective switch, 50 Ohm, XX112
 *
 * KiCad symbol: `RF_Switch:KSW-2-46`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*XX112*, SOP*1EP*4.57x4.57mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/KSW-2-46+.pdf
 * Keywords: RF SPDT switch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSW_2_46 extends Component.withPins({
  /** Physical pin 1: CONTROL2; input. */
  "CONTROL2": "1",
  /** Physical pin 2: RF_IN; passive. */
  "RF_IN": "2",
  /** Physical pin 3: CONTROL1; input. */
  "CONTROL1": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: RF_OUT1; passive. */
  "RF_OUT1": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF_OUT2; passive. */
  "RF_OUT2": "8",
}) {
  override schema = "RF_Switch:KSW-2-46";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4.6GHz absorbative switch, 50 Ohm, XX112
 *
 * KiCad symbol: `RF_Switch:KSWA-2-46`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*XX112*, SOP*1EP*4.57x4.57mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/KSWA-2-46+.pdf
 * Keywords: RF SPDT switch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSWA_2_46 extends Component.withPins({
  /** Physical pin 1: CONTROL2; input. */
  "CONTROL2": "1",
  /** Physical pin 2: RF_IN; passive. */
  "RF_IN": "2",
  /** Physical pin 3: CONTROL1; input. */
  "CONTROL1": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: RF_OUT1; passive. */
  "RF_OUT1": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF_OUT2; passive. */
  "RF_OUT2": "8",
}) {
  override schema = "RF_Switch:KSWA-2-46";
  override referencePrefix = "U";
}

/**
 * SPST DC-2.0GHz absorbative switch, 50 Ohm, XX112
 *
 * KiCad symbol: `RF_Switch:KSWHA-1-20`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*XX112*, SOP*1EP*4.57x4.57mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/KSWHA-1-20+.pdf
 * Keywords: RF SPST switch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSWHA_1_20 extends Component.withPins({
  /** Physical pin 1: RF_IN; passive. */
  "RF_IN": "1",
  /** Physical pin 2: CONTROL1; input. */
  "CONTROL1": "2",
  /** Physical pin 3: CONTROL2; input. */
  "CONTROL2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: RF_OUT; passive. */
  "RF_OUT": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
}) {
  override schema = "RF_Switch:KSWHA-1-20";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.4/27dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0136`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0136.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0136 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASWSS0136";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.56/12dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASW-007221`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see http://cdn.macom.com/datasheets/masw-007221.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASW_007221 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASW-007221";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.3/22dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0115`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see http://cdn.macom.com/datasheets/maswss0115.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0115 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASWSS0115";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.4/16dB loss/isolation, IP 58dB@1GHz, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0143`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0143.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0143 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASWSS0143";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.65/21dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0151`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0151.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0151 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASWSS0151";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.3/12dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0166`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0166.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0166 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASWSS0166";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.35/21dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0176`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0176.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0176 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASWSS0176";
  override referencePrefix = "U";
}

/**
 * SPDT High Isolation Terminated Switch, 0.01-3.0 GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:MASWSS0178`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://cdn.macom.com/datasheets/MASWSS0178.pdf
 * Keywords: RF switch SPDT.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.73x1.85mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0178 extends Component.withPins({
  /** Physical pin 1: CTL1; input. */
  "CTL1": "1",
  /** Physical pin 2: CTL2; input. */
  "CTL2": "2",
  /** Physical pin 3: RFC; passive. */
  "RFC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: RF2; passive. */
  "RF2": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF1; passive. */
  "RF1": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "RF_Switch:MASWSS0178";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-2GHz, 0.6/22dB loss/isolation, SOT-26 (SOT-23-6)
 *
 * KiCad symbol: `RF_Switch:MASWSS0179`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://cdn.macom.com/datasheets/MASWSS0179.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0179 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASWSS0179";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.33/13.5dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0192`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0192.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MASWSS0192 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: RFC; passive. */
  "RFC": "5",
  /** Physical pin 6: V1; input. */
  "V1": "6",
}) {
  override schema = "RF_Switch:MASWSS0192";
  override referencePrefix = "U";
}

/**
 * SPDT DC-2.0GHz reflective switch, 50 Ohm, SOP-8
 *
 * KiCad symbol: `RF_Switch:MSW-2-20`. Reference prefix: `U`.
 * Footprint filters: SOP*3.76x4.96mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/MSW-2-20+.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_SO:SOP-8_3.76x4.96mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MSW_2_20 extends Component.withPins({
  /** Physical pin 1: RF_IN; passive. */
  "RF_IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: RF_OUT2; passive. */
  "RF_OUT2": "3",
  /** Physical pin 4: CONTROL2; input. */
  "CONTROL2": "4",
  /** Physical pin 5: CONTROL1; input. */
  "CONTROL1": "5",
  /** Physical pin 6: RF_OUT1; passive. */
  "RF_OUT1": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
}) {
  override schema = "RF_Switch:MSW-2-20";
  override referencePrefix = "U";
}

/**
 * SPDT DC-5.0GHz reflective switch, 50 Ohm, QFN-12
 *
 * KiCad symbol: `RF_Switch:MSW2-50`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.51mm*.
 * @see https://www.minicircuits.com/pdfs/MSW2-50+.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_DFN_QFN:QFN-12-1EP_3x3mm_P0.51mm_EP1.45x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MSW2_50 extends Component.withPins({
  /** Physical pin 1: CONTROL1; input. */
  "CONTROL1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: CONTROL2; input. */
  "CONTROL2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: RF_OUT2; passive. */
  "RF_OUT2": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF_IN; passive. */
  "RF_IN": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_OUT1; passive. */
  "RF_OUT1": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
  override schema = "RF_Switch:MSW2-50";
  override referencePrefix = "U";
}

/**
 * SPDT DC-2.0GHz absorbative switch, 50 Ohm, SOP-8
 *
 * KiCad symbol: `RF_Switch:MSWA-2-20`. Reference prefix: `U`.
 * Footprint filters: SOP*3.76x4.96mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/MSWA-2-20+.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_SO:SOP-8_3.76x4.96mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MSWA_2_20 extends Component.withPins({
  /** Physical pin 1: CONTROL2; input. */
  "CONTROL2": "1",
  /** Physical pin 2: RF_IN; passive. */
  "RF_IN": "2",
  /** Physical pin 3: CONTROL1; input. */
  "CONTROL1": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: RF_OUT2; passive. */
  "RF_OUT2": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF_OUT1; passive. */
  "RF_OUT1": "8",
}) {
  override schema = "RF_Switch:MSWA-2-20";
  override referencePrefix = "U";
}

/**
 * SPDT DC-5.0GHz absorbative switch, 50 Ohm, QFN-12
 *
 * KiCad symbol: `RF_Switch:MSWA2-50`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.51mm*.
 * @see https://www.minicircuits.com/pdfs/MSWA2-50+.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_DFN_QFN:QFN-12-1EP_3x3mm_P0.51mm_EP1.45x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MSWA2_50 extends Component.withPins({
  /** Physical pin 1: CONTROL1; input. */
  "CONTROL1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: CONTROL2; input. */
  "CONTROL2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: RF_OUT2; passive. */
  "RF_OUT2": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF_IN; passive. */
  "RF_IN": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_OUT1; passive. */
  "RF_OUT1": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
  override schema = "RF_Switch:MSWA2-50";
  override referencePrefix = "U";
}

/**
 * SP4T 20MHz-3GHz high power switch, 50 Ohm, QFN-16
 *
 * KiCad symbol: `RF_Switch:SKY13380-350LF`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*3x3mm*.
 * @see https://www.skyworksinc.com/-/media/SkyWorks/Documents/Products/601-700/201486C.pdf
 * Keywords: rf switch sp4t.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SKY13380_350LF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: CTRL2; input. */
  "CTRL2": "3",
  /** Physical pin 4: CTRL1; input. */
  "CTRL1": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: RF4; passive. */
  "RF4": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: RF3; passive. */
  "RF3": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: ANT; passive. */
  "ANT": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: RF1; passive. */
  "RF1": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: RF2; passive. */
  "RF2": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC": "16",
}) {
  override schema = "RF_Switch:SKY13380-350LF";
  override referencePrefix = "U";
}

/**
 * SP4T 100MHz-6GHz absorptive switch, 50 Ohm, QFN-14
 *
 * KiCad symbol: `RF_Switch:SKY13575-639LF`. Reference prefix: `U`.
 * Footprint filters: *SKY13575?639LF*.
 * @see https://www.skyworksinc.com/-/media/SkyWorks/Documents/Products/2201-2300/SKY13575_639LF_203270D.pdf
 * Keywords: rf switch sp4t absorptive.
 * Default footprint: RF:Skyworks_SKY13575_639LF.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SKY13575_639LF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: RFC; passive. */
  "RFC": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: RF4; passive. */
  "RF4": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: RF3; passive. */
  "RF3": "7",
  /** Physical pin 8: VC1; input. */
  "VC1": "8",
  /** Physical pin 9: VC2; input. */
  "VC2": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: RF2; passive. */
  "RF2": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: RF1; passive. */
  "RF1": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
  override schema = "RF_Switch:SKY13575-639LF";
  override referencePrefix = "U";
}

