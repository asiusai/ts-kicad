// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High Common-Mode Voltage, Programmable Gain Difference Amplifier, ±120V, Gain = 0.1 to 100, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Difference:AD628`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD628.pdf
 * Keywords: difference amplifier.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD628 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: CFILT; passive. */
  "CFILT": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: RG; passive. */
  "RG": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: -; input. */
  "-": "8",
}) {
  override schema = "Amplifier_Difference:AD628";
  override referencePrefix = "U";
}

/**
 * 65V (35V) Zero-Drift, High Voltage, Bidirectional, Difference Amplifier, 20V/V gain, bandwidth 150kHz, Vcc=5V (3.3V), SOIC-8
 *
 * KiCad symbol: `Amplifier_Difference:AD8207`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8207.pdf
 * Keywords: highside HS current sense difference amplifier linear buffered.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8207 extends Component.withPins({
  /** Physical pin 1: -IN; input. */
  "-IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vref2; input. */
  "Vref2": "3",
  /** Physical pin 4: RANGE; input. */
  "RANGE": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: Vref1; input. */
  "Vref1": "7",
  /** Physical pin 8: +IN; input. */
  "+IN": "8",
}) {
  override schema = "Amplifier_Difference:AD8207";
  override referencePrefix = "U";
}

/**
 * Quad, 235 MHz, 6-30 dB gain, ±2.5 V to ±5 V supply, DC-Coupled VGA and Differential Output Amplifier, QFN-40
 *
 * KiCad symbol: `Amplifier_Difference:AD8264`. Reference prefix: `U`.
 * Footprint filters: *QFN*6x6mm*P0.5mm*EP4.1x4.1mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8264.pdf
 * Keywords: difference amplifier variable.
 * Default footprint: Package_DFN_QFN:HVQFN-40-1EP_6x6mm_P0.5mm_EP4.1x4.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8264 extends Component.withPins({
  /** Physical pin 1: IPN1; passive. */
  "IPN1": "1",
  /** Physical pin 2: OPP1; output. */
  "OPP1": "2",
  /** Physical pin 3: OPP2; output. */
  "OPP2": "3",
  /** Physical pin 4: IPN2; passive. */
  "IPN2": "4",
  /** Physical pin 5: IPP2; input. */
  "IPP2": "5",
  /** Physical pin 6: IPP3; input. */
  "IPP3": "6",
  /** Physical pin 7: IPN3; passive. */
  "IPN3": "7",
  /** Physical pin 8: OPP3; output. */
  "OPP3": "8",
  /** Physical pin 9: OPP4; output. */
  "OPP4": "9",
  /** Physical pin 10: IPN4; passive. */
  "IPN4": "10",
  /** Physical pin 11: IPP4; input. */
  "IPP4": "11",
  /** Physical pin 12: COMM; power_in. */
  "COMM_12": "12",
  /** Physical pin 13: GNH4; input. */
  "GNH4": "13",
  /** Physical pin 14: GNH3; input. */
  "GNH3": "14",
  /** Physical pin 15: VOCM; input. */
  "VOCM": "15",
  /** Physical pin 16: VPOS; power_in. */
  "VPOS_16": "16",
  /** Physical pin 17: VNEG; power_in. */
  "VNEG_17": "17",
  /** Physical pin 18: OSF4; input. */
  "OSF4": "18",
  /** Physical pin 19: OFS3; input. */
  "OFS3": "19",
  /** Physical pin 20: VGA4; output. */
  "VGA4": "20",
  /** Physical pin 21: VOL4; output. */
  "VOL4": "21",
  /** Physical pin 22: VOH4; output. */
  "VOH4": "22",
  /** Physical pin 23: VOH3; output. */
  "VOH3": "23",
  /** Physical pin 24: VOL3; output. */
  "VOL3": "24",
  /** Physical pin 25: VGA3; output. */
  "VGA3": "25",
  /** Physical pin 26: VGA2; output. */
  "VGA2": "26",
  /** Physical pin 27: VOL2; output. */
  "VOL2": "27",
  /** Physical pin 28: VOH2; output. */
  "VOH2": "28",
  /** Physical pin 29: VOH1; output. */
  "VOH1": "29",
  /** Physical pin 30: VOL1; output. */
  "VOL1": "30",
  /** Physical pin 31: VGA1; output. */
  "VGA1": "31",
  /** Physical pin 32: OFS2; input. */
  "OFS2": "32",
  /** Physical pin 33: OFS1; input. */
  "OFS1": "33",
  /** Physical pin 34: VNEG; passive. */
  "VNEG_34": "34",
  /** Physical pin 35: VPOS; passive. */
  "VPOS_35": "35",
  /** Physical pin 36: GNLO; input. */
  "GNLO": "36",
  /** Physical pin 37: GNH2; input. */
  "GNH2": "37",
  /** Physical pin 38: GNH1; input. */
  "GNH1": "38",
  /** Physical pin 39: COMM; passive. */
  "COMM_39": "39",
  /** Physical pin 40: IPP1; input. */
  "IPP1": "40",
  /** Physical pin 41: COMM; passive. */
  "COMM_41": "41",
}) {
  override schema = "Amplifier_Difference:AD8264";
  override referencePrefix = "U";
}

/**
 * Low Power, Wide Supply Range, Low Cost Unity-Gain Difference Amplifier, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Difference:AD8276`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8276_8277.pdf
 * Keywords: difference amplifier.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8276 extends Component.withPins({
  /** Physical pin 1: REF; passive. */
  "REF": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
  /** Physical pin 3: +; passive. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: SENSE; passive. */
  "SENSE": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
}) {
  override schema = "Amplifier_Difference:AD8276";
  override referencePrefix = "U";
}

/**
 * Precision, Selectable Gain, Fully Differential Funnel Amplifier, LFCSP-16
 *
 * KiCad symbol: `Amplifier_Difference:AD8475ACPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8475.pdf
 * Keywords: selectable gain ADC driver.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8475ACPZ extends Component.withPins({
  /** Physical pin 1: +IN0.4x; input. */
  "+IN0.4x_1": "1",
  /** Physical pin 2: +IN0.8x; input. */
  "+IN0.8x": "2",
  /** Physical pin 3: -IN0.8x; input. */
  "-IN0.8x": "3",
  /** Physical pin 4: -IN0.4x; input. */
  "-IN0.4x_4": "4",
  /** Physical pin 5: -IN0.4x; input. */
  "-IN0.4x_5": "5",
  /** Physical pin 6: +Vs; power_in. */
  "+Vs_6": "6",
  /** Physical pin 7: +Vs; passive. */
  "+Vs_7": "7",
  /** Physical pin 8: +Vs; passive. */
  "+Vs_8": "8",
  /** Physical pin 9: VOCM; power_in. */
  "VOCM": "9",
  /** Physical pin 10: +; output. */
  "+": "10",
  /** Physical pin 11: -; output. */
  "-": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC": "12",
  /** Physical pin 13: -Vs; power_in. */
  "-Vs_13": "13",
  /** Physical pin 14: -Vs; passive. */
  "-Vs_14": "14",
  /** Physical pin 15: -Vs; passive. */
  "-Vs_15": "15",
  /** Physical pin 16: +IN0.4x; input. */
  "+IN0.4x_16": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Amplifier_Difference:AD8475ACPZ";
  override referencePrefix = "U";
}

/**
 * Precision, Selectable Gain, Fully Differential Funnel Amplifier, MSOP-10
 *
 * KiCad symbol: `Amplifier_Difference:AD8475xRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8475.pdf
 * Keywords: selectable gain ADC driver.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8475xRMZ extends Component.withPins({
  /** Physical pin 1: -IN0.8x; input. */
  "-IN0.8x": "1",
  /** Physical pin 2: -IN0.4x; input. */
  "-IN0.4x": "2",
  /** Physical pin 3: +Vs; power_in. */
  "+Vs": "3",
  /** Physical pin 4: VOCM; power_in. */
  "VOCM": "4",
  /** Physical pin 5: +; output. */
  "+": "5",
  /** Physical pin 6: -; output. */
  "-": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: -Vs; power_in. */
  "-Vs": "8",
  /** Physical pin 9: +IN0.4x; input. */
  "+IN0.4x": "9",
  /** Physical pin 10: +IN0.8x; input. */
  "+IN0.8x": "10",
}) {
  override schema = "Amplifier_Difference:AD8475xRMZ";
  override referencePrefix = "U";
}

/**
 * Ultralow distortion, high speed fully-differential amplifier, ADC Driver, 1GHz GBP, 3x3mm LFCSP-16
 *
 * KiCad symbol: `Amplifier_Difference:ADA4938-1`. Reference prefix: `U`.
 * Footprint filters: LFCSP*EP?3x3mm?P0.5mm?EP1.3x1.3mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4938-1_4938-2.pdf
 * Keywords: Fully-Differential Amplifier ADC Driver.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.3x1.3mm_ThermalVias.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4938_1 extends Component.withPins({
  /** Physical pin 1: FB-; output. */
  "FB-": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: FB+; output. */
  "FB+": "4",
  /** Physical pin 9: V_{OCM}; input. */
  "V_{OCM}": "9",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 5: V+; power_in. */
  "V+_5": "5",
  /** Physical pin 6: V+; passive. */
  "V+_6": "6",
  /** Physical pin 7: V+; passive. */
  "V+_7": "7",
  /** Physical pin 8: V+; passive. */
  "V+_8": "8",
  /** Physical pin 12: ~{PD}; input. */
  "~{PD}": "12",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 14: V-; passive. */
  "V-_14": "14",
  /** Physical pin 15: V-; passive. */
  "V-_15": "15",
  /** Physical pin 16: V-; passive. */
  "V-_16": "16",
  /** Physical pin 17: PAD; passive. */
  "PAD": "17",
}) {
  override schema = "Amplifier_Difference:ADA4938-1";
  override referencePrefix = "U";
}

/**
 * Ultralow Power, Low Distortion, Fully Differential ADC Drivers, LFCSP-16
 *
 * KiCad symbol: `Amplifier_Difference:ADA4940-1xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4940-1_4940-2.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.3x1.3mm_ThermalVias.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4940_1xCP extends Component.withPins({
  /** Physical pin 1: -FB; input. */
  "-FB": "1",
  /** Physical pin 2: +IN; input. */
  "+IN": "2",
  /** Physical pin 3: -IN; input. */
  "-IN": "3",
  /** Physical pin 4: +FB; input. */
  "+FB": "4",
  /** Physical pin 9: VOCM; input. */
  "VOCM": "9",
  /** Physical pin 10: +OUT; output. */
  "+OUT": "10",
  /** Physical pin 11: -OUT; output. */
  "-OUT": "11",
  /** Physical pin 12: ~{DISABLE}; input. */
  "~{DISABLE}": "12",
  /** Physical pin 5: +Vs; power_in. */
  "+Vs_5": "5",
  /** Physical pin 6: +Vs; passive. */
  "+Vs_6": "6",
  /** Physical pin 7: +Vs; passive. */
  "+Vs_7": "7",
  /** Physical pin 8: +Vs; passive. */
  "+Vs_8": "8",
  /** Physical pin 13: -Vs; power_in. */
  "-Vs_13": "13",
  /** Physical pin 14: -Vs; passive. */
  "-Vs_14": "14",
  /** Physical pin 15: -Vs; passive. */
  "-Vs_15": "15",
  /** Physical pin 16: -Vs; passive. */
  "-Vs_16": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Amplifier_Difference:ADA4940-1xCP";
  override referencePrefix = "U";
}

/**
 * Ultralow Power, Low Distortion, Fully Differential ADC Drivers, Dual-Channel, LFCSP-24
 *
 * KiCad symbol: `Amplifier_Difference:ADA4940-2`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4940-1_4940-2.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4940_2 extends Component.withPins({
  /** Physical pin 1: -IN1; input. */
  "-IN1": "1",
  /** Physical pin 2: +FB1; input. */
  "+FB1": "2",
  /** Physical pin 17: VOCM1; input. */
  "VOCM1": "17",
  /** Physical pin 18: +1; output. */
  "+1": "18",
  /** Physical pin 19: -1; output. */
  "-1": "19",
  /** Physical pin 20: ~{DISABLE1}; input. */
  "~{DISABLE1}": "20",
  /** Physical pin 23: -FB1; input. */
  "-FB1": "23",
  /** Physical pin 24: +IN1; input. */
  "+IN1": "24",
  /** Physical pin 5: -FB2; input. */
  "-FB2_5": "5",
  /** Physical pin 6: +IN2; input. */
  "+IN2": "6",
  /** Physical pin 7: -IN2; input. */
  "-IN2": "7",
  /** Physical pin 8: +FB2; input. */
  "+FB2_8": "8",
  /** Physical pin 11: VOCM2; input. */
  "VOCM2": "11",
  /** Physical pin 12: +2; output. */
  "+2": "12",
  /** Physical pin 13: -2; output. */
  "-2": "13",
  /** Physical pin 14: ~{DISABLE2}; input. */
  "~{DISABLE2}": "14",
  /** Physical pin 3: +FB2; input. */
  "+FB2_3": "3",
  /** Physical pin 4: +FB2; input. */
  "+FB2_4": "4",
  /** Physical pin 21: -FB2; input. */
  "-FB2_21": "21",
  /** Physical pin 22: -FB2; input. */
  "-FB2_22": "22",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
  /** Physical pin 9: +FB2; input. */
  "+FB2_9": "9",
  /** Physical pin 10: +FB2; input. */
  "+FB2_10": "10",
  /** Physical pin 15: -FB2; input. */
  "-FB2_15": "15",
  /** Physical pin 16: -FB2; input. */
  "-FB2_16": "16",
}) {
  override schema = "Amplifier_Difference:ADA4940-2";
  override referencePrefix = "U";
}

/**
 * Low Power, Wide Supply Range, Low Cost Unity-Gain Difference Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Difference:INA105KP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina105.pdf
 * Keywords: difference amplifier.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA105KP extends Component.withPins({
  /** Physical pin 1: REF; passive. */
  "REF": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
  /** Physical pin 3: +; passive. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: SENSE; passive. */
  "SENSE": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
}) {
  override schema = "Amplifier_Difference:INA105KP";
  override referencePrefix = "U";
}

/**
 * Low Power, Wide Supply Range, Low Cost Unity-Gain Difference Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Difference:INA105KU`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina105.pdf
 * Keywords: difference amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA105KU extends Component.withPins({
  /** Physical pin 1: REF; passive. */
  "REF": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
  /** Physical pin 3: +; passive. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: SENSE; passive. */
  "SENSE": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: unnamed; no_connect. */
  "P8": "8",
}) {
  override schema = "Amplifier_Difference:INA105KU";
  override referencePrefix = "U";
}

/**
 * Single Differential Amplifier, TO-5-10
 *
 * KiCad symbol: `Amplifier_Difference:LM733CH`. Reference prefix: `U`.
 * Footprint filters: TO?5*.
 * @see http://www.soemtron.org/downloads/disposals/lm733cn.pdf
 * Keywords: single differential video opamp.
 * Default footprint: Package_TO_SOT_THT:TO-5-10.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM733CH extends Component.withPins({
  /** Physical pin 1: unnamed; input. */
  "P1": "1",
  /** Physical pin 2: unnamed; input. */
  "P2": "2",
  /** Physical pin 3: 2B; passive. */
  "2B": "3",
  /** Physical pin 4: 1B; passive. */
  "1B": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: 1A; passive. */
  "1A": "9",
  /** Physical pin 10: 2A; passive. */
  "2A": "10",
}) {
  override schema = "Amplifier_Difference:LM733CH";
  override referencePrefix = "U";
}

/**
 * Single Differential Amplifier, DIP-14
 *
 * KiCad symbol: `Amplifier_Difference:LM733CN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.soemtron.org/downloads/disposals/lm733cn.pdf
 * Keywords: single differential video opamp.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM733CN extends Component.withPins({
  /** Physical pin 1: unnamed; input. */
  "P1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: 2B; passive. */
  "2B": "3",
  /** Physical pin 4: 1B; passive. */
  "1B": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: V+; power_in. */
  "V+": "10",
  /** Physical pin 11: 1A; passive. */
  "1A": "11",
  /** Physical pin 12: 2A; passive. */
  "2A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: unnamed; input. */
  "P14": "14",
}) {
  override schema = "Amplifier_Difference:LM733CN";
  override referencePrefix = "U";
}

/**
 * Single Differential Amplifier, TO-5-10
 *
 * KiCad symbol: `Amplifier_Difference:LM733H`. Reference prefix: `U`.
 * Footprint filters: TO?5*.
 * @see http://www.soemtron.org/downloads/disposals/lm733cn.pdf
 * Keywords: single differential video opamp.
 * Default footprint: Package_TO_SOT_THT:TO-5-10.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM733H extends Component.withPins({
  /** Physical pin 1: unnamed; input. */
  "P1": "1",
  /** Physical pin 2: unnamed; input. */
  "P2": "2",
  /** Physical pin 3: 2B; passive. */
  "2B": "3",
  /** Physical pin 4: 1B; passive. */
  "1B": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: 1A; passive. */
  "1A": "9",
  /** Physical pin 10: 2A; passive. */
  "2A": "10",
}) {
  override schema = "Amplifier_Difference:LM733H";
  override referencePrefix = "U";
}

/**
 * Low-Noise Precision Fully Differential Amplifier, fixed or variable gain, MSOP-8
 *
 * KiCad symbol: `Amplifier_Difference:LTC1992-x-xMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1992fb.pdf
 * Keywords: fully differential amplifier.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1992_x_xMS8 extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: V_{OCM}; input. */
  "V_{OCM}": "2",
  /** Physical pin 3: +V_{S}; power_in. */
  "+V_{S}": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: -V_{S}; power_in. */
  "-V_{S}": "6",
  /** Physical pin 7: V_{Mid}; input. */
  "V_{Mid}": "7",
  /** Physical pin 8: +; input. */
  "+": "8",
}) {
  override schema = "Amplifier_Difference:LTC1992-x-xMS8";
  override referencePrefix = "U";
}

/**
 * Very Low Power, Negative Rail Input, Rail to Rail Output, Fully Differential Amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Difference:THS4521IDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ths4521.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS4521IDGK extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: V_{OCM}; input. */
  "V_{OCM}": "2",
  /** Physical pin 3: V_{S+}; power_in. */
  "V_{S+}": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: V_{S-}; power_in. */
  "V_{S-}": "6",
  /** Physical pin 7: ~{PD}; input. */
  "~{PD}": "7",
  /** Physical pin 8: +; input. */
  "+": "8",
}) {
  override schema = "Amplifier_Difference:THS4521IDGK";
  override referencePrefix = "U";
}

/**
 * Very Low Power, Negative Rail Input, Rail to Rail Output, Fully Differential Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Difference:THS4521ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ths4521.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS4521ID extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: V_{OCM}; input. */
  "V_{OCM}": "2",
  /** Physical pin 3: V_{S+}; power_in. */
  "V_{S+}": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: V_{S-}; power_in. */
  "V_{S-}": "6",
  /** Physical pin 7: ~{PD}; input. */
  "~{PD}": "7",
  /** Physical pin 8: +; input. */
  "+": "8",
}) {
  override schema = "Amplifier_Difference:THS4521ID";
  override referencePrefix = "U";
}

/**
 * Low-Noise Precision Fully Differential Amplifier, VQFN-16
 *
 * KiCad symbol: `Amplifier_Difference:THS4551xRGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ths4551.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS4551xRGT extends Component.withPins({
  /** Physical pin 1: FB-; output. */
  "FB-": "1",
  /** Physical pin 2: IN+; input. */
  "IN+": "2",
  /** Physical pin 3: IN-; input. */
  "IN-": "3",
  /** Physical pin 4: FB+; output. */
  "FB+": "4",
  /** Physical pin 9: VOCM; input. */
  "VOCM": "9",
  /** Physical pin 10: OUT+; output. */
  "OUT+": "10",
  /** Physical pin 11: OUT-; output. */
  "OUT-": "11",
  /** Physical pin 12: ~{PD}; input. */
  "~{PD}": "12",
  /** Physical pin 5: VS+; power_in. */
  "VS+_5": "5",
  /** Physical pin 6: VS+; passive. */
  "VS+_6": "6",
  /** Physical pin 7: VS+; passive. */
  "VS+_7": "7",
  /** Physical pin 8: VS+; passive. */
  "VS+_8": "8",
  /** Physical pin 13: VS-; power_in. */
  "VS-_13": "13",
  /** Physical pin 14: VS-; passive. */
  "VS-_14": "14",
  /** Physical pin 15: VS-; passive. */
  "VS-_15": "15",
  /** Physical pin 16: VS-; passive. */
  "VS-_16": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Amplifier_Difference:THS4551xRGT";
  override referencePrefix = "U";
}

