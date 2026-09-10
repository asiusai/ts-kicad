// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Ultrafast 7 ns Single Supply Comparator, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Comparator:AD8561`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8561.pdf
 * Keywords: cmp complementary push-pull.
 */
export class AD8561 extends Component.withPins({
  "V+": "1",
  "+": "2",
  "-": "3",
  "V-": "4",
  "LATCH": "5",
  "GND": "6",
  "Q": "7",
  "~{Q}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "+": "input", "-": "input", "V-": "power_in", LATCH: "input", GND: "power_in", Q: "output", "~{Q}": "output", ...opts.pinTypes } });
  }
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
 */
export class ADCMP350 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "P3": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "input", GND: "power_in", P3: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADCMP354 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "P3": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "input", GND: "power_in", P3: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADCMP356 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "P3": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "input", GND: "power_in", P3: "output", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM2901 extends Component.withPins({
  "P2": "2",
  "-_4": "4",
  "+_5": "5",
  "P1": "1",
  "-_6": "6",
  "+_7": "7",
  "-_10": "10",
  "+_11": "11",
  "P13": "13",
  "-_8": "8",
  "+_9": "9",
  "P14": "14",
  "V+": "3",
  "V-": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "open_collector", "-_4": "input", "+_5": "input", P1: "open_collector", "-_6": "input", "+_7": "input", "-_10": "input", "+_11": "input", P13: "open_collector", "-_8": "input", "+_9": "input", P14: "open_collector", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM2903 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "V-": "4",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "open_collector", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM311 extends Component.withPins({
  "GND": "1",
  "+": "2",
  "-": "3",
  "V-": "4",
  "BAL": "5",
  "STRB": "6",
  "P7": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "passive", "+": "input", "-": "input", "V-": "power_in", BAL: "input", STRB: "input", P7: "open_collector", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM319 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "GND_3": "3",
  "+_4": "4",
  "-_5": "5",
  "P12": "12",
  "P7": "7",
  "GND_8": "8",
  "+_9": "9",
  "-_10": "10",
  "NC_13": "13",
  "NC_14": "14",
  "V-": "6",
  "V+": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", GND_3: "passive", "+_4": "input", "-_5": "input", P12: "open_collector", P7: "open_collector", GND_8: "passive", "+_9": "input", "-_10": "input", NC_13: "no_connect", NC_14: "no_connect", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM319H extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "+_3": "3",
  "-_4": "4",
  "P6": "6",
  "GND_7": "7",
  "+_8": "8",
  "-_9": "9",
  "V-": "5",
  "V+": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", GND_2: "passive", "+_3": "input", "-_4": "input", P6: "open_collector", GND_7: "passive", "+_8": "input", "-_9": "input", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM339 extends Component.withPins({
  "P2": "2",
  "-_4": "4",
  "+_5": "5",
  "P1": "1",
  "-_6": "6",
  "+_7": "7",
  "-_10": "10",
  "+_11": "11",
  "P13": "13",
  "-_8": "8",
  "+_9": "9",
  "P14": "14",
  "V+": "3",
  "V-": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "open_collector", "-_4": "input", "+_5": "input", P1: "open_collector", "-_6": "input", "+_7": "input", "-_10": "input", "+_11": "input", P13: "open_collector", "-_8": "input", "+_9": "input", P14: "open_collector", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM393 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "V-": "4",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "open_collector", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM397 extends Component.withPins({
  "-": "1",
  "V-": "2",
  "+": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "-": "input", "V-": "power_in", "+": "input", P4: "open_collector", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LMH7324 extends Component.withPins({
  "VCCO_1": "1",
  "~{Q}_2": "2",
  "Q_3": "3",
  "VEE_4": "4",
  "VEE_29": "29",
  "+_30": "30",
  "-_31": "31",
  "VCCI_32": "32",
  "VEE_5": "5",
  "Q_6": "6",
  "~{Q}_7": "7",
  "VCCO_8": "8",
  "VCCI_9": "9",
  "-_10": "10",
  "+_11": "11",
  "VEE_12": "12",
  "VEE_13": "13",
  "+_14": "14",
  "-_15": "15",
  "VCCI_16": "16",
  "VCCO_17": "17",
  "~{Q}_18": "18",
  "Q_19": "19",
  "VEE_20": "20",
  "VEE_21": "21",
  "Q_22": "22",
  "~{Q}_23": "23",
  "VCCO_24": "24",
  "VCCI_25": "25",
  "-_26": "26",
  "+_27": "27",
  "VEE_28": "28",
  "VEE/EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCO_1: "power_in", "~{Q}_2": "output", Q_3: "output", VEE_4: "power_in", VEE_29: "passive", "+_30": "input", "-_31": "input", VCCI_32: "power_in", VEE_5: "power_in", Q_6: "output", "~{Q}_7": "output", VCCO_8: "power_in", VCCI_9: "power_in", "-_10": "input", "+_11": "input", VEE_12: "passive", VEE_13: "power_in", "+_14": "input", "-_15": "input", VCCI_16: "power_in", VCCO_17: "power_in", "~{Q}_18": "output", Q_19: "output", VEE_20: "passive", VEE_21: "power_in", Q_22: "output", "~{Q}_23": "output", VCCO_24: "power_in", VCCI_25: "power_in", "-_26": "input", "+_27": "input", VEE_28: "passive", "VEE/EP": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LMV331 extends Component.withPins({
  "+": "1",
  "V-": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "V-": "power_in", "-": "input", P4: "open_collector", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LMV339 extends Component.withPins({
  "P2": "2",
  "-_4": "4",
  "+_5": "5",
  "P1": "1",
  "-_6": "6",
  "+_7": "7",
  "-_10": "10",
  "+_11": "11",
  "P13": "13",
  "-_8": "8",
  "+_9": "9",
  "P14": "14",
  "V+": "3",
  "V-": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "open_collector", "-_4": "input", "+_5": "input", P1: "open_collector", "-_6": "input", "+_7": "input", "-_10": "input", "+_11": "input", P13: "open_collector", "-_8": "input", "+_9": "input", P14: "open_collector", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LMV393 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "V-": "4",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "open_collector", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP6561_OT extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "output", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class LMV7219M5 extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "output", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP6561x_LT extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "output", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class LMV7219M7 extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "output", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class LMV7271 extends Component.withPins({
  "+": "1",
  "V-": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "V-": "power_in", "-": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LMV7272 extends Component.withPins({
  "PA1": "A1",
  "-_B1": "B1",
  "+_C1": "C1",
  "PA3": "A3",
  "-_B3": "B3",
  "+_C3": "C3",
  "V+": "A2",
  "V-": "C2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA1: "output", "-_B1": "input", "+_C1": "input", PA3: "output", "-_B3": "input", "+_C3": "input", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LMV7275 extends Component.withPins({
  "+": "1",
  "V-": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "V-": "power_in", "-": "input", P4: "open_collector", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LP2901D extends Component.withPins({
  "P2": "2",
  "-_4": "4",
  "+_5": "5",
  "P1": "1",
  "-_6": "6",
  "+_7": "7",
  "-_10": "10",
  "+_11": "11",
  "P13": "13",
  "-_8": "8",
  "+_9": "9",
  "P14": "14",
  "V+": "3",
  "V-": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "open_collector", "-_4": "input", "+_5": "input", P1: "open_collector", "-_6": "input", "+_7": "input", "-_10": "input", "+_11": "input", P13: "open_collector", "-_8": "input", "+_9": "input", P14: "open_collector", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1011 extends Component.withPins({
  "GND": "1",
  "+": "2",
  "-": "3",
  "V-": "4",
  "BAL": "5",
  "STRB": "6",
  "P7": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "passive", "+": "input", "-": "input", "V-": "power_in", BAL: "input", STRB: "input", P7: "open_collector", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1016 extends Component.withPins({
  "V+": "1",
  "+": "2",
  "-": "3",
  "V-": "4",
  "LATCH": "5",
  "GND": "6",
  "Q": "7",
  "~{Q}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "+": "input", "-": "input", "V-": "power_in", LATCH: "input", GND: "power_in", Q: "output", "~{Q}": "output", ...opts.pinTypes } });
  }
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
 */
export class LT1116 extends Component.withPins({
  "V+": "1",
  "+": "2",
  "-": "3",
  "V-": "4",
  "LATCH": "5",
  "GND": "6",
  "Q": "7",
  "~{Q}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "+": "input", "-": "input", "V-": "power_in", LATCH: "input", GND: "power_in", Q: "output", "~{Q}": "output", ...opts.pinTypes } });
  }
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
 */
export class LT1711xMS8 extends Component.withPins({
  "V+": "1",
  "+": "2",
  "-": "3",
  "V-": "4",
  "LATCH": "5",
  "GND": "6",
  "Q": "7",
  "~{Q}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "+": "input", "-": "input", "V-": "power_in", LATCH: "input", GND: "power_in", Q: "output", "~{Q}": "output", ...opts.pinTypes } });
  }
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
 */
export class LTC6752xMS8_2 extends Component.withPins({
  "VCC": "1",
  "+": "2",
  "-": "3",
  "~{SHDN}": "4",
  "~{LE}": "5",
  "VEE": "6",
  "P7": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", "+": "input", "-": "input", "~{SHDN}": "input", "~{LE}": "input", VEE: "power_in", P7: "output", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC6752xS5 extends Component.withPins({
  "P1": "1",
  "VEE": "2",
  "+": "3",
  "-": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", VEE: "power_in", "+": "input", "-": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC6752xSC6_1 extends Component.withPins({
  "P1": "1",
  "VEE": "2",
  "+": "3",
  "-": "4",
  "~{LE}": "5",
  "VCC": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", VEE: "power_in", "+": "input", "-": "input", "~{LE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC6752xSC6_4 extends Component.withPins({
  "P1": "1",
  "VEE": "2",
  "+": "3",
  "-": "4",
  "VDD": "5",
  "VCC": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", VEE: "power_in", "+": "input", "-": "input", VDD: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC6752xUD_3 extends Component.withPins({
  "VDD": "1",
  "VCC": "2",
  "VEE_3": "3",
  "+": "4",
  "NC_5": "5",
  "-": "6",
  "~{SHDN}": "7",
  "~{LE}": "8",
  "VEE_9": "9",
  "~{Q}": "10",
  "NC_11": "11",
  "Q": "12",
  "VEE_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", VCC: "power_in", VEE_3: "power_in", "+": "input", NC_5: "no_connect", "-": "input", "~{SHDN}": "input", "~{LE}": "input", VEE_9: "passive", "~{Q}": "output", NC_11: "no_connect", Q: "output", VEE_13: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC6754xSC6 extends Component.withPins({
  "Q": "1",
  "VEE": "2",
  "+": "3",
  "-": "4",
  "VCC": "5",
  "~{Q}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q: "output", VEE: "power_in", "+": "input", "-": "input", VCC: "power_in", "~{Q}": "output", ...opts.pinTypes } });
  }
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
 */
export class LTC6754xUD extends Component.withPins({
  "VCCO": "1",
  "VCCI": "2",
  "VEE_3": "3",
  "+": "4",
  "NC_5": "5",
  "-": "6",
  "~{SHDN}": "7",
  "~{LE}": "8",
  "VEE_9": "9",
  "~{Q}": "10",
  "NC_11": "11",
  "Q": "12",
  "VEE_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCO: "power_in", VCCI: "power_in", VEE_3: "power_in", "+": "input", NC_5: "no_connect", "-": "input", "~{SHDN}": "input", "~{LE}": "input", VEE_9: "passive", "~{Q}": "output", NC_11: "no_connect", Q: "output", VEE_13: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX9031AU extends Component.withPins({
  "+": "1",
  "V-": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "V-": "power_in", "-": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX9031AX extends Component.withPins({
  "+": "1",
  "V-": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "V-": "power_in", "-": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX941xPA extends Component.withPins({
  "V+": "1",
  "+": "2",
  "-": "3",
  "~{SHDN}": "4",
  "~{LATCH}": "5",
  "V-": "6",
  "P7": "7",
  "NC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "+": "input", "-": "input", "~{SHDN}": "input", "~{LATCH}": "input", "V-": "power_in", P7: "output", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MAX941xSA extends Component.withPins({
  "V+": "1",
  "+": "2",
  "-": "3",
  "~{SHDN}": "4",
  "~{LATCH}": "5",
  "V-": "6",
  "P7": "7",
  "NC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "+": "input", "-": "input", "~{SHDN}": "input", "~{LATCH}": "input", "V-": "power_in", P7: "output", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MAX941xUA extends Component.withPins({
  "V+": "1",
  "+": "2",
  "-": "3",
  "~{SHDN}": "4",
  "~{LATCH}": "5",
  "V-": "6",
  "P7": "7",
  "NC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "+": "input", "-": "input", "~{SHDN}": "input", "~{LATCH}": "input", "V-": "power_in", P7: "output", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MCP6561R extends Component.withPins({
  "V+": "2",
  "V-": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "V-": "power_in", P1: "output", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP6561U extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "+": "1",
  "-": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", "+": "input", "-": "input", P4: "output", ...opts.pinTypes } });
  }
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
 */
export class MCP6562 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "V-": "4",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP6566 extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "open_collector", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP6566R extends Component.withPins({
  "V+": "2",
  "V-": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "V-": "power_in", P1: "open_collector", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP6566U extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "+": "1",
  "-": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", "+": "input", "-": "input", P4: "open_collector", ...opts.pinTypes } });
  }
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
 */
export class MCP6567 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "V-": "4",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "open_collector", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP6569 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "P8": "8",
  "-_9": "9",
  "+_10": "10",
  "+_12": "12",
  "-_13": "13",
  "P14": "14",
  "V+": "4",
  "V-": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "open_collector", P8: "open_collector", "-_9": "input", "+_10": "input", "+_12": "input", "-_13": "input", P14: "open_collector", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP65R41 extends Component.withPins({
  "P1": "1",
  "V-": "2",
  "+": "3",
  "-": "4",
  "Vref": "5",
  "V+": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", "V-": "power_in", "+": "input", "-": "input", Vref: "power_out", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP65R46 extends Component.withPins({
  "P1": "1",
  "V-": "2",
  "+": "3",
  "-": "4",
  "Vref": "5",
  "V+": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", "V-": "power_in", "+": "input", "-": "input", Vref: "power_out", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MIC845H extends Component.withPins({
  "NIC": "1",
  "GND": "2",
  "+": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NIC: "no_connect", GND: "power_in", "+": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MIC845L extends Component.withPins({
  "NIC": "1",
  "GND": "2",
  "+": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NIC: "no_connect", GND: "power_in", "+": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MIC845N extends Component.withPins({
  "NIC": "1",
  "GND": "2",
  "+": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NIC: "no_connect", GND: "power_in", "+": "input", P4: "open_collector", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class TL3116 extends Component.withPins({
  "V+": "1",
  "+": "2",
  "-": "3",
  "V-": "4",
  "LATCH": "5",
  "GND": "6",
  "Q": "7",
  "~{Q}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", "+": "input", "-": "input", "V-": "power_in", LATCH: "input", GND: "power_in", Q: "output", "~{Q}": "output", ...opts.pinTypes } });
  }
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
 */
export class TL331 extends Component.withPins({
  "-": "1",
  "V-": "2",
  "+": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "-": "input", "V-": "power_in", "+": "input", P4: "open_collector", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class TLV3501AID extends Component.withPins({
  "NC_1": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "NC_5": "5",
  "P6": "6",
  "V+": "7",
  "SHDN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", "-": "input", "+": "input", "V-": "power_in", NC_5: "no_connect", P6: "output", "V+": "power_in", SHDN: "input", ...opts.pinTypes } });
  }
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
 */
export class TLV3501AIDBV extends Component.withPins({
  "-": "1",
  "V-": "2",
  "+": "3",
  "V+": "4",
  "P5": "5",
  "SHDN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "-": "input", "V-": "power_in", "+": "input", "V+": "power_in", P5: "output", SHDN: "input", ...opts.pinTypes } });
  }
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
 */
export class TLV7031DBV extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "output", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class TLV7041DBV extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "open_collector", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class TLV7041DCK extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "P1": "1",
  "+": "3",
  "-": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", P1: "open_collector", "+": "input", "-": "input", ...opts.pinTypes } });
  }
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
 */
export class TLV7041SDCK extends Component.withPins({
  "V-": "2",
  "V+": "5",
  "+": "1",
  "-": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", "+": "input", "-": "input", P4: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Comparator:TLV7041SDCK";
  override referencePrefix = "U";
}
