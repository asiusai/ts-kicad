// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Ultrafast 7 ns Single Supply Comparator, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Comparator:AD8561`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8561.pdf
 * Keywords: cmp complementary push-pull.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8561 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: LATCH; input. */
  "LATCH": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: Q; output. */
  "Q": "7",
  /** Physical pin 8: ~{Q}; output. */
  "~{Q}": "8",
}) {
  override schema = "Comparator:AD8561";
  override referencePrefix = "U";
}

/**
 * Single-input comparator, internal 0.6V reference, Active-Low Open-Drain output, KS-4
 *
 * KiCad symbol: `Comparator:ADCMP350`. Reference prefix: `U`.
 * Footprint filters: Analog*KS?4*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADCMP350_354_356.pdf
 * Keywords: cmp collector.
 * Default footprint: Package_TO_SOT_SMD:Analog_KS-4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADCMP350 extends Component.withPins({
  /** Physical pin 1: VIN; input. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: unnamed; open_collector. */
  "P3": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
  override schema = "Comparator:ADCMP350";
  override referencePrefix = "U";
}

/**
 * Single-input comparator, internal 0.6V reference, Active-High Open-Drain output, KS-4
 *
 * KiCad symbol: `Comparator:ADCMP354`. Reference prefix: `U`.
 * Footprint filters: Analog*KS?4*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADCMP350_354_356.pdf
 * Keywords: cmp collector.
 * Default footprint: Package_TO_SOT_SMD:Analog_KS-4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADCMP354 extends Component.withPins({
  /** Physical pin 1: VIN; input. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: unnamed; open_collector. */
  "P3": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
  override schema = "Comparator:ADCMP354";
  override referencePrefix = "U";
}

/**
 * Single-input comparator, internal 0.6V reference, Active-High Push-Pull output, KS-4
 *
 * KiCad symbol: `Comparator:ADCMP356`. Reference prefix: `U`.
 * Footprint filters: Analog*KS?4*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADCMP350_354_356.pdf
 * Keywords: cmp.
 * Default footprint: Package_TO_SOT_SMD:Analog_KS-4.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADCMP356 extends Component.withPins({
  /** Physical pin 1: VIN; input. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
  override schema = "Comparator:ADCMP356";
  override referencePrefix = "U";
}

/**
 * Quad Differential Comparators, DIP-14/SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Comparator:LM2901`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/lm2901.pdf
 * Keywords: cmp open collector.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2901 extends Component.withPins({
  /** Physical pin 2: unnamed; open_collector. */
  "P2": "2",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 13: unnamed; open_collector. */
  "P13": "13",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 14: unnamed; open_collector. */
  "P14": "14",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 12: V-; power_in. */
  "V-": "12",
}) {
  override schema = "Comparator:LM2901";
  override referencePrefix = "U";
}

/**
 * Low-Power, Low-Offset Voltage, Dual Comparators, DIP-8/SOIC-8/SOP-8/TSSOP-8/VSSOP-8
 *
 * KiCad symbol: `Comparator:LM2903`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, SOP*5.28x5.23mm*P1.27mm*, VSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm393.pdf
 * Keywords: cmp open collector.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2903 extends Component.withPins({
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; open_collector. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Comparator:LM2903";
  override referencePrefix = "U";
}

/**
 * Voltage Comparator, DIP-8/SOIC-8
 *
 * KiCad symbol: `Comparator:LM311`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.st.com/resource/en/datasheet/lm311.pdf
 * Keywords: cmp open collector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM311 extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: BAL; input. */
  "BAL": "5",
  /** Physical pin 6: STRB; input. */
  "STRB": "6",
  /** Physical pin 7: unnamed; open_collector. */
  "P7": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Comparator:LM311";
  override referencePrefix = "U";
}

/**
 * High Speed Dual Comparator, DIP-14/SOIC-14
 *
 * KiCad symbol: `Comparator:LM319`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm319-n.pdf
 * Keywords: cmp open collector.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM319 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 12: unnamed; open_collector. */
  "P12": "12",
  /** Physical pin 7: unnamed; open_collector. */
  "P7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 11: V+; power_in. */
  "V+": "11",
}) {
  override schema = "Comparator:LM319";
  override referencePrefix = "U";
}

/**
 * High Speed Dual Comparator, TO-100-10
 *
 * KiCad symbol: `Comparator:LM319H`. Reference prefix: `U`.
 * Footprint filters: TO?100*.
 * @see http://www.ti.com/lit/ds/symlink/lm319-n.pdf
 * Keywords: cmp open collector.
 * Default footprint: Package_TO_SOT_THT:TO-100-10.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM319H extends Component.withPins({
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 6: unnamed; open_collector. */
  "P6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: +; input. */
  "+_8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 10: V+; power_in. */
  "V+": "10",
}) {
  override schema = "Comparator:LM319H";
  override referencePrefix = "U";
}

/**
 * Quad Differential Comparators, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Comparator:LM339`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/lm139.pdf
 * Keywords: cmp open collector.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM339 extends Component.withPins({
  /** Physical pin 2: unnamed; open_collector. */
  "P2": "2",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 13: unnamed; open_collector. */
  "P13": "13",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 14: unnamed; open_collector. */
  "P14": "14",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 12: V-; power_in. */
  "V-": "12",
}) {
  override schema = "Comparator:LM339";
  override referencePrefix = "U";
}

/**
 * Low-Power, Low-Offset Voltage, Dual Comparators, DIP-8/SOIC-8/TO-99-8
 *
 * KiCad symbol: `Comparator:LM393`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, SOP*5.28x5.23mm*P1.27mm*, VSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm393.pdf
 * Keywords: cmp open collector.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM393 extends Component.withPins({
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; open_collector. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Comparator:LM393";
  override referencePrefix = "U";
}

/**
 * Single General-Purpose Voltage Comparator with Open-Collector Output, SOT-23-5
 *
 * KiCad symbol: `Comparator:LM397`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm397.pdf
 * Keywords: single comparator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM397 extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: unnamed; open_collector. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:LM397";
  override referencePrefix = "U";
}

/**
 * Quad 700 ps High Speed Comparator with RSPECL Outputs, WQFN-32
 *
 * KiCad symbol: `Comparator:LMH7324`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmh7324.pdf
 * Keywords: cmp push-pull complementary.
 * Default footprint: Package_DFN_QFN:WQFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH7324 extends Component.withPins({
  /** Physical pin 1: VCCO; power_in. */
  "VCCO_1": "1",
  /** Physical pin 2: ~{Q}; output. */
  "~{Q}_2": "2",
  /** Physical pin 3: Q; output. */
  "Q_3": "3",
  /** Physical pin 4: VEE; power_in. */
  "VEE_4": "4",
  /** Physical pin 29: VEE; passive. */
  "VEE_29": "29",
  /** Physical pin 30: +; input. */
  "+_30": "30",
  /** Physical pin 31: -; input. */
  "-_31": "31",
  /** Physical pin 32: VCCI; power_in. */
  "VCCI_32": "32",
  /** Physical pin 5: VEE; power_in. */
  "VEE_5": "5",
  /** Physical pin 6: Q; output. */
  "Q_6": "6",
  /** Physical pin 7: ~{Q}; output. */
  "~{Q}_7": "7",
  /** Physical pin 8: VCCO; power_in. */
  "VCCO_8": "8",
  /** Physical pin 9: VCCI; power_in. */
  "VCCI_9": "9",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 12: VEE; passive. */
  "VEE_12": "12",
  /** Physical pin 13: VEE; power_in. */
  "VEE_13": "13",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 16: VCCI; power_in. */
  "VCCI_16": "16",
  /** Physical pin 17: VCCO; power_in. */
  "VCCO_17": "17",
  /** Physical pin 18: ~{Q}; output. */
  "~{Q}_18": "18",
  /** Physical pin 19: Q; output. */
  "Q_19": "19",
  /** Physical pin 20: VEE; passive. */
  "VEE_20": "20",
  /** Physical pin 21: VEE; power_in. */
  "VEE_21": "21",
  /** Physical pin 22: Q; output. */
  "Q_22": "22",
  /** Physical pin 23: ~{Q}; output. */
  "~{Q}_23": "23",
  /** Physical pin 24: VCCO; power_in. */
  "VCCO_24": "24",
  /** Physical pin 25: VCCI; power_in. */
  "VCCI_25": "25",
  /** Physical pin 26: -; input. */
  "-_26": "26",
  /** Physical pin 27: +; input. */
  "+_27": "27",
  /** Physical pin 28: VEE; passive. */
  "VEE_28": "28",
  /** Physical pin 33: VEE/EP; power_in. */
  "VEE/EP": "33",
}) {
  override schema = "Comparator:LMH7324";
  override referencePrefix = "U";
}

/**
 * Single General-Purpose Low-Voltage Comparator, SOT-23-5/SC-70-5
 *
 * KiCad symbol: `Comparator:LMV331`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/lmv331.pdf
 * Keywords: single comparator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV331 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; open_collector. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:LMV331";
  override referencePrefix = "U";
}

/**
 * Quad General-Purpose Low-Voltage Comparator, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Comparator:LMV339`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/lmv331.pdf
 * Keywords: cmp open collector.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV339 extends Component.withPins({
  /** Physical pin 2: unnamed; open_collector. */
  "P2": "2",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 13: unnamed; open_collector. */
  "P13": "13",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 14: unnamed; open_collector. */
  "P14": "14",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 12: V-; power_in. */
  "V-": "12",
}) {
  override schema = "Comparator:LMV339";
  override referencePrefix = "U";
}

/**
 * Dual General-Purpose Low-Voltage Comparator, SOIC-8/TSSOP-8/VSSOP-8
 *
 * KiCad symbol: `Comparator:LMV393`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, VSSOP*3x3mm*P0.65mm*, VSSOP*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmv331.pdf
 * Keywords: cmp open collector.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV393 extends Component.withPins({
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; open_collector. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Comparator:LMV393";
  override referencePrefix = "U";
}

/**
 * Single 1.8V Low-Power Push-Pull Output Comparator, SOT-23-5
 *
 * KiCad symbol: `Comparator:MCP6561-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6561-1R-1U-2-4-1.8V-Low-Power-Push-Pull-Output-Comparator-DS20002139E.pdf
 * Keywords: cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6561_OT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:MCP6561-OT";
  override referencePrefix = "U";
}

/**
 * Single Low-Power High-Speed Push-Pull Output Comparator, SOT-23-5
 *
 * KiCad symbol: `Comparator:LMV7219M5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/lmv7219.pdf
 * Keywords: cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV7219M5 extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:LMV7219M5";
  override referencePrefix = "U";
}

/**
 * Single 1.8V Low-Power Push-Pull Output Comparator, SC-70-5
 *
 * KiCad symbol: `Comparator:MCP6561x-LT`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6561-1R-1U-2-4-1.8V-Low-Power-Push-Pull-Output-Comparator-DS20002139E.pdf
 * Keywords: cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6561x_LT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:MCP6561x-LT";
  override referencePrefix = "U";
}

/**
 * Single Low-Power High-Speed Push-Pull Output Comparator, SC-70-5
 *
 * KiCad symbol: `Comparator:LMV7219M7`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/lmv7219.pdf
 * Keywords: cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV7219M7 extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:LMV7219M7";
  override referencePrefix = "U";
}

/**
 * Single, 1.8V Low Power, Rail-to-Rail Input, Push-Pull Output Comparator, SOT-23-5/SC-70-5
 *
 * KiCad symbol: `Comparator:LMV7271`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/lmv7271.pdf
 * Keywords: cmp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV7271 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:LMV7271";
  override referencePrefix = "U";
}

/**
 * Dual, 1.8V Low Power, Rail-to-Rail Input, Push-Pull Output Comparator, DSBGA-8
 *
 * KiCad symbol: `Comparator:LMV7272`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*1.5195x1.5195*Layout3x3*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmv7272.pdf
 * Keywords: cmp.
 * Default footprint: Package_BGA:Texas_DSBGA-8_1.5195x1.5195mm_Layout3x3_P0.5mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV7272 extends Component.withPins({
  /** Physical pin A1: unnamed; output. */
  "PA1": "A1",
  /** Physical pin B1: -; input. */
  "-_B1": "B1",
  /** Physical pin C1: +; input. */
  "+_C1": "C1",
  /** Physical pin A3: unnamed; output. */
  "PA3": "A3",
  /** Physical pin B3: -; input. */
  "-_B3": "B3",
  /** Physical pin C3: +; input. */
  "+_C3": "C3",
  /** Physical pin A2: V+; power_in. */
  "V+": "A2",
  /** Physical pin C2: V-; power_in. */
  "V-": "C2",
}) {
  override schema = "Comparator:LMV7272";
  override referencePrefix = "U";
}

/**
 * Single, 1.8V Low Power, Rail-to-Rail Input, Open Collector Output Comparator, SOT-23-5/SC-70-5
 *
 * KiCad symbol: `Comparator:LMV7275`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/lmv7275.pdf
 * Keywords: cmp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV7275 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; open_collector. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:LMV7275";
  override referencePrefix = "U";
}

/**
 * Quad Differential Comparators, SOIC-14
 *
 * KiCad symbol: `Comparator:LP2901D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/lp2901.pdf
 * Keywords: cmp open collector.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LP2901D extends Component.withPins({
  /** Physical pin 2: unnamed; open_collector. */
  "P2": "2",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 13: unnamed; open_collector. */
  "P13": "13",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 14: unnamed; open_collector. */
  "P14": "14",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 12: V-; power_in. */
  "V-": "12",
}) {
  override schema = "Comparator:LP2901D";
  override referencePrefix = "U";
}

/**
 * Voltage Comparator, DIP-8/SOIC-8
 *
 * KiCad symbol: `Comparator:LT1011`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1011.pdf
 * Keywords: cmp open collector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1011 extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: BAL; input. */
  "BAL": "5",
  /** Physical pin 6: STRB; input. */
  "STRB": "6",
  /** Physical pin 7: unnamed; open_collector. */
  "P7": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Comparator:LT1011";
  override referencePrefix = "U";
}

/**
 * Single UltraFast Precision 10ns Comparator, DIP-8/SOIC-8
 *
 * KiCad symbol: `Comparator:LT1016`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1016.pdf
 * Keywords: cmp push-pull complementary latch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1016 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: LATCH; input. */
  "LATCH": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: Q; output. */
  "Q": "7",
  /** Physical pin 8: ~{Q}; output. */
  "~{Q}": "8",
}) {
  override schema = "Comparator:LT1016";
  override referencePrefix = "U";
}

/**
 * Single 12ns, Single Supply Ground-Sensing Comparator, DIP-8/SOIC-8
 *
 * KiCad symbol: `Comparator:LT1116`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1116fc.pdf
 * Keywords: cmp push-pull complementary latch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1116 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: LATCH; input. */
  "LATCH": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: Q; output. */
  "Q": "7",
  /** Physical pin 8: ~{Q}; output. */
  "~{Q}": "8",
}) {
  override schema = "Comparator:LT1116";
  override referencePrefix = "U";
}

/**
 * Single ultrafast 4.5 ns rail-to-rail comparator, MSOP-8
 *
 * KiCad symbol: `Comparator:LT1711xMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/171112f.pdf
 * Keywords: cmp latch push-pull complementary.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1711xMS8 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: LATCH; input. */
  "LATCH": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: Q; output. */
  "Q": "7",
  /** Physical pin 8: ~{Q}; output. */
  "~{Q}": "8",
}) {
  override schema = "Comparator:LT1711xMS8";
  override referencePrefix = "U";
}

/**
 * Single 280Mhz 2.9ns Comparator, Rail-to-Rail Inputs, CMOS Output, MSOP-8
 *
 * KiCad symbol: `Comparator:LTC6752xMS8-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6752fc.pdf
 * Keywords: single comparator high speed cmos.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6752xMS8_2 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: ~{SHDN}; input. */
  "~{SHDN}": "4",
  /** Physical pin 5: ~{LE}; input. */
  "~{LE}": "5",
  /** Physical pin 6: VEE; power_in. */
  "VEE": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Comparator:LTC6752xMS8-2";
  override referencePrefix = "U";
}

/**
 * Single 280Mhz 2.9ns Comparator, Rail-to-Rail Inputs, CMOS Output, TSOT-23-5
 *
 * KiCad symbol: `Comparator:LTC6752xS5`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6752fc.pdf
 * Keywords: single comparator high speed cmos.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6752xS5 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: VEE; power_in. */
  "VEE": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
}) {
  override schema = "Comparator:LTC6752xS5";
  override referencePrefix = "U";
}

/**
 * Single 280Mhz 2.9ns Comparator, Rail-to-Rail Inputs, CMOS Output, SC-70
 *
 * KiCad symbol: `Comparator:LTC6752xSC6-1`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6752fc.pdf
 * Keywords: single comparator high speed cmos.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6752xSC6_1 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: VEE; power_in. */
  "VEE": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{LE}; input. */
  "~{LE}": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
}) {
  override schema = "Comparator:LTC6752xSC6-1";
  override referencePrefix = "U";
}

/**
 * Single 280Mhz 2.9ns Comparator, Rail-to-Rail Inputs, CMOS Output, SC-70
 *
 * KiCad symbol: `Comparator:LTC6752xSC6-4`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6752fc.pdf
 * Keywords: single comparator high speed cmos.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6752xSC6_4 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: VEE; power_in. */
  "VEE": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
}) {
  override schema = "Comparator:LTC6752xSC6-4";
  override referencePrefix = "U";
}

/**
 * Single 280Mhz 2.9ns Comparator, Rail-to-Rail Inputs, CMOS Output, QFN-12
 *
 * KiCad symbol: `Comparator:LTC6752xUD-3`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6752fc.pdf
 * Keywords: single comparator high speed cmos.
 * Default footprint: Package_DFN_QFN:QFN-12-1EP_3x3mm_P0.5mm_EP1.65x1.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6752xUD_3 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: VEE; power_in. */
  "VEE_3": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: -; input. */
  "-": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: ~{LE}; input. */
  "~{LE}": "8",
  /** Physical pin 9: VEE; passive. */
  "VEE_9": "9",
  /** Physical pin 10: ~{Q}; output. */
  "~{Q}": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: Q; output. */
  "Q": "12",
  /** Physical pin 13: VEE; passive. */
  "VEE_13": "13",
}) {
  override schema = "Comparator:LTC6752xUD-3";
  override referencePrefix = "U";
}

/**
 * Single High Speed Rail-to-Rail Input Comparator with LVDS Compatible Outputs, SC-70-6
 *
 * KiCad symbol: `Comparator:LTC6754xSC6`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6754f.pdf
 * Keywords: cmp r2r rtr push-pull complementary.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6754xSC6 extends Component.withPins({
  /** Physical pin 1: Q; output. */
  "Q": "1",
  /** Physical pin 2: VEE; power_in. */
  "VEE": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: ~{Q}; output. */
  "~{Q}": "6",
}) {
  override schema = "Comparator:LTC6754xSC6";
  override referencePrefix = "U";
}

/**
 * Single High Speed Rail-to-Rail Input Comparator with LVDS Compatible Outputs, QFN-12
 *
 * KiCad symbol: `Comparator:LTC6754xUD`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6754f.pdf
 * Keywords: cmp r2r rtr push-pull complementary.
 * Default footprint: Package_DFN_QFN:QFN-12-1EP_3x3mm_P0.5mm_EP1.65x1.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6754xUD extends Component.withPins({
  /** Physical pin 1: VCCO; power_in. */
  "VCCO": "1",
  /** Physical pin 2: VCCI; power_in. */
  "VCCI": "2",
  /** Physical pin 3: VEE; power_in. */
  "VEE_3": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: -; input. */
  "-": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: ~{LE}; input. */
  "~{LE}": "8",
  /** Physical pin 9: VEE; passive. */
  "VEE_9": "9",
  /** Physical pin 10: ~{Q}; output. */
  "~{Q}": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: Q; output. */
  "Q": "12",
  /** Physical pin 13: VEE; passive. */
  "VEE_13": "13",
}) {
  override schema = "Comparator:LTC6754xUD";
  override referencePrefix = "U";
}

/**
 * Single, Rail to Rail, 2.5V - 5.5V Supply, 571mW, SOT-23-5
 *
 * KiCad symbol: `Comparator:MAX9031AU`. Reference prefix: `U`.
 * Footprint filters: *SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX9030-MAX9034.pdf
 * Keywords: rail-rail.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9031AU extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:MAX9031AU";
  override referencePrefix = "U";
}

/**
 * Single, Rail to Rail, 2.5V - 5.5V Supply, 247mW, SC70
 *
 * KiCad symbol: `Comparator:MAX9031AX`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX9030-MAX9034.pdf
 * Keywords: rail-rail.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9031AX extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:MAX9031AX";
  override referencePrefix = "U";
}

/**
 * High-Speed, Low-Power, 3V/5V, Rail-to-Rail, Single-Supply Comparator, PDIP-8
 *
 * KiCad symbol: `Comparator:MAX941xPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX941-MAX944.pdf
 * Keywords: single comparator.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX941xPA extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: ~{SHDN}; input. */
  "~{SHDN}": "4",
  /** Physical pin 5: ~{LATCH}; input. */
  "~{LATCH}": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Comparator:MAX941xPA";
  override referencePrefix = "U";
}

/**
 * High-Speed, Low-Power, 3V/5V, Rail-to-Rail, Single-Supply Comparator, SOIC-8
 *
 * KiCad symbol: `Comparator:MAX941xSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX941-MAX944.pdf
 * Keywords: single comparator.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX941xSA extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: ~{SHDN}; input. */
  "~{SHDN}": "4",
  /** Physical pin 5: ~{LATCH}; input. */
  "~{LATCH}": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Comparator:MAX941xSA";
  override referencePrefix = "U";
}

/**
 * High-Speed, Low-Power, 3V/5V, Rail-to-Rail, Single-Supply Comparator, MSOP-8
 *
 * KiCad symbol: `Comparator:MAX941xUA`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX941-MAX944.pdf
 * Keywords: single comparator.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX941xUA extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: ~{SHDN}; input. */
  "~{SHDN}": "4",
  /** Physical pin 5: ~{LATCH}; input. */
  "~{LATCH}": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Comparator:MAX941xUA";
  override referencePrefix = "U";
}

/**
 * Single 1.8V Low-Power Push-Pull Output Comparator, SOT-23-5
 *
 * KiCad symbol: `Comparator:MCP6561R`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6561-1R-1U-2-4-1.8V-Low-Power-Push-Pull-Output-Comparator-DS20002139E.pdf
 * Keywords: cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6561R extends Component.withPins({
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:MCP6561R";
  override referencePrefix = "U";
}

/**
 * Single 1.8V Low-Power Push-Pull Output Comparator, SOT-23-5
 *
 * KiCad symbol: `Comparator:MCP6561U`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6561-1R-1U-2-4-1.8V-Low-Power-Push-Pull-Output-Comparator-DS20002139E.pdf
 * Keywords: cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6561U extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
}) {
  override schema = "Comparator:MCP6561U";
  override referencePrefix = "U";
}

/**
 * Dual 1.8V Low-Power Push-Pull Output Comparator, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Comparator:MCP6562`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6561-1R-1U-2-4-1.8V-Low-Power-Push-Pull-Output-Comparator-DS20002139E.pdf
 * Keywords: cmp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6562 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Comparator:MCP6562";
  override referencePrefix = "U";
}

/**
 * Single 1.8V Low-Power Open-Drain Output Comparator, SOT-23-5/SC-70
 *
 * KiCad symbol: `Comparator:MCP6566`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC*70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6566-6R-6U-7-9-1.8V-Low-Power-Open-Drain-Output-Comparator-DS20002143G.pdf
 * Keywords: cmp collector.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6566 extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:MCP6566";
  override referencePrefix = "U";
}

/**
 * Single 1.8V Low-Power Open-Drain Output Comparator, SOT-23-5
 *
 * KiCad symbol: `Comparator:MCP6566R`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6566-6R-6U-7-9-1.8V-Low-Power-Open-Drain-Output-Comparator-DS20002143G.pdf
 * Keywords: cmp collector.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6566R extends Component.withPins({
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:MCP6566R";
  override referencePrefix = "U";
}

/**
 * Single 1.8V Low-Power Open-Drain Output Comparator, SOT-23-5
 *
 * KiCad symbol: `Comparator:MCP6566U`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6566-6R-6U-7-9-1.8V-Low-Power-Open-Drain-Output-Comparator-DS20002143G.pdf
 * Keywords: cmp collector.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6566U extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; open_collector. */
  "P4": "4",
}) {
  override schema = "Comparator:MCP6566U";
  override referencePrefix = "U";
}

/**
 * Dual 1.8V Low-Power Open-Drain Output Comparator, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Comparator:MCP6567`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6566-6R-6U-7-9-1.8V-Low-Power-Open-Drain-Output-Comparator-DS20002143G.pdf
 * Keywords: cmp collector.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6567 extends Component.withPins({
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; open_collector. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Comparator:MCP6567";
  override referencePrefix = "U";
}

/**
 * Quad 1.8V Low-Power Open-Drain Output Comparator, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Comparator:MCP6569`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6566-6R-6U-7-9-1.8V-Low-Power-Open-Drain-Output-Comparator-DS20002143G.pdf
 * Keywords: cmp collector.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6569 extends Component.withPins({
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; open_collector. */
  "P7": "7",
  /** Physical pin 8: unnamed; open_collector. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; open_collector. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Comparator:MCP6569";
  override referencePrefix = "U";
}

/**
 * 3 μA Comparator with Integrated Reference Voltage, SOT-23-6
 *
 * KiCad symbol: `Comparator:MCP65R41`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22269B.pdf
 * Keywords: cmp reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP65R41 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: Vref; power_out. */
  "Vref": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Comparator:MCP65R41";
  override referencePrefix = "U";
}

/**
 * 3 μA Comparator with Integrated Reference Voltage, SOT-23-6
 *
 * KiCad symbol: `Comparator:MCP65R46`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22269B.pdf
 * Keywords: cmp reference open collector drain.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP65R46 extends Component.withPins({
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: Vref; power_out. */
  "Vref": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Comparator:MCP65R46";
  override referencePrefix = "U";
}

/**
 * Micro-Power Comparator / Battery Monitor, Active-High Push-Pull Output, SC-70-5
 *
 * KiCad symbol: `Comparator:MIC845H`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic845.pdf
 * Keywords: single cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC845H extends Component.withPins({
  /** Physical pin 1: NIC; no_connect. */
  "NIC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:MIC845H";
  override referencePrefix = "U";
}

/**
 * Micro-Power Comparator / Battery Monitor, Active-Low Push-Pull Output, SC-70-5
 *
 * KiCad symbol: `Comparator:MIC845L`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic845.pdf
 * Keywords: single cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC845L extends Component.withPins({
  /** Physical pin 1: NIC; no_connect. */
  "NIC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:MIC845L";
  override referencePrefix = "U";
}

/**
 * Micro-Power Comparator / Battery Monitor, Active-High Open-Drain Output, SC-70-5
 *
 * KiCad symbol: `Comparator:MIC845N`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic845.pdf
 * Keywords: single cmp collector.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIC845N extends Component.withPins({
  /** Physical pin 1: NIC; no_connect. */
  "NIC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: unnamed; open_collector. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:MIC845N";
  override referencePrefix = "U";
}

/**
 * Single Ultra-Fast Low-Power Precision Comparators, SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Comparator:TL3116`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl3116.pdf
 * Keywords: cmp push-pull complementary.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL3116 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: LATCH; input. */
  "LATCH": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: Q; output. */
  "Q": "7",
  /** Physical pin 8: ~{Q}; output. */
  "~{Q}": "8",
}) {
  override schema = "Comparator:TL3116";
  override referencePrefix = "U";
}

/**
 * Single Differential Comparator with Open-Collector Output, SOT-23-5
 *
 * KiCad symbol: `Comparator:TL331`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tl331.pdf
 * Keywords: single comparator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL331 extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: unnamed; open_collector. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Comparator:TL331";
  override referencePrefix = "U";
}

/**
 * High-Speed Comparator, 4.5-ns, Rail-to-Rail, Push-Pull CMOS Output, SOIC-8
 *
 * KiCad symbol: `Comparator:TLV3501AID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv3501.pdf
 * Keywords: single comparator high speed cmos.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV3501AID extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: SHDN; input. */
  "SHDN": "8",
}) {
  override schema = "Comparator:TLV3501AID";
  override referencePrefix = "U";
}

/**
 * High-Speed Comparator, 4.5-ns, Rail-to-Rail, Push-Pull CMOS Output, SOT-23-6
 *
 * KiCad symbol: `Comparator:TLV3501AIDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv3501.pdf
 * Keywords: single comparator high speed cmos.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV3501AIDBV extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: SHDN; input. */
  "SHDN": "6",
}) {
  override schema = "Comparator:TLV3501AIDBV";
  override referencePrefix = "U";
}

/**
 * Single, 1.6V-6.5V, 315nA Quiescent, Push-Pull Output, Comparator, SOT-23-5/SC-70
 *
 * KiCad symbol: `Comparator:TLV7031DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv7031.pdf
 * Keywords: cmp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV7031DBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:TLV7031DBV";
  override referencePrefix = "U";
}

/**
 * Single, 1.6V-6.5V, 315nA Quiescent, Open-Drain Output, Comparator, North-west pinout, SOT-23-5
 *
 * KiCad symbol: `Comparator:TLV7041DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv7041.pdf
 * Keywords: cmp collector.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV7041DBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:TLV7041DBV";
  override referencePrefix = "U";
}

/**
 * Single, 1.6V-6.5V, 315nA Quiescent, Open-Drain Output, Comparator, North-west pinout, SC-70
 *
 * KiCad symbol: `Comparator:TLV7041DCK`. Reference prefix: `U`.
 * Footprint filters: *SC*70*.
 * @see https://www.ti.com/lit/ds/symlink/tlv7041.pdf
 * Keywords: cmp collector.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV7041DCK extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; open_collector. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Comparator:TLV7041DCK";
  override referencePrefix = "U";
}

/**
 * Single, 1.6V-6.5V, 315nA Quiescent, Open-Drain Output, Comparator, South-east pinout, SC-70
 *
 * KiCad symbol: `Comparator:TLV7041SDCK`. Reference prefix: `U`.
 * Footprint filters: *SC*70*.
 * @see https://www.ti.com/lit/ds/symlink/tlv7041.pdf
 * Keywords: cmp collector.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV7041SDCK extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; open_collector. */
  "P4": "4",
}) {
  override schema = "Comparator:TLV7041SDCK";
  override referencePrefix = "U";
}

