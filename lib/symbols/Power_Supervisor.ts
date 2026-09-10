// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Power supply supervisor, Manual reset, Threshold 4.63V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MIC811LUY`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic811.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MIC811LUY extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MIC811LUY";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 4.00V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:CAT811JTBI-GT3`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://www.onsemi.com/pub/Collateral/CAT811-D.PDF
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class CAT811JTBI_GT3 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:CAT811JTBI-GT3";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 4.63V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:CAT811LTBI-GT3`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://www.onsemi.com/pub/Collateral/CAT811-D.PDF
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class CAT811LTBI_GT3 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:CAT811LTBI-GT3";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 4.38V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:CAT811MTBI-GT3`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://www.onsemi.com/pub/Collateral/CAT811-D.PDF
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class CAT811MTBI_GT3 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:CAT811MTBI-GT3";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 2.63V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:CAT811RTBI-GT3`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://www.onsemi.com/pub/Collateral/CAT811-D.PDF
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class CAT811RTBI_GT3 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:CAT811RTBI-GT3";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 2.93V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:CAT811STBI-GT3`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://www.onsemi.com/pub/Collateral/CAT811-D.PDF
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class CAT811STBI_GT3 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:CAT811STBI-GT3";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 3.08V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:CAT811TTBI-GT3`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://www.onsemi.com/pub/Collateral/CAT811-D.PDF
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class CAT811TTBI_GT3 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:CAT811TTBI-GT3";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 2.32V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:CAT811ZTBI-GT3`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://www.onsemi.com/pub/Collateral/CAT811-D.PDF
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class CAT811ZTBI_GT3 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:CAT811ZTBI-GT3";
  override referencePrefix = "U";
}

/**
 * Microprocessor Reset (active-low) circuit with manual reset and watchdog, 4.65Vnom threshold, SO-8
 *
 * KiCad symbol: `Power_Supervisor:DIO705`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://dioo.com/uploads/product/20210528/dae33bc3e6c4b6e07ca730d55ecc4c48.pdf
 * Keywords: supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DIO705 extends Component.withPins({
  "~{MR}": "1",
  "V_{CC}": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "~{WDO}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "passive", "V_{CC}": "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", "~{WDO}": "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:DIO705";
  override referencePrefix = "U";
}

/**
 * Microprocessor Reset (active-low) circuit with manual reset and watchdog, 4.4Vnom threshold, SO-8
 *
 * KiCad symbol: `Power_Supervisor:DIO706`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://dioo.com/uploads/product/20210528/dae33bc3e6c4b6e07ca730d55ecc4c48.pdf
 * Keywords: supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DIO706 extends Component.withPins({
  "~{MR}": "1",
  "V_{CC}": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "~{WDO}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "passive", "V_{CC}": "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", "~{WDO}": "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:DIO706";
  override referencePrefix = "U";
}

/**
 * Microprocessor Reset (active-low) circuit with manual reset and watchdog, 4.0Vnom threshold, SO-8
 *
 * KiCad symbol: `Power_Supervisor:DIO706J`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://dioo.com/uploads/product/20210528/dae33bc3e6c4b6e07ca730d55ecc4c48.pdf
 * Keywords: supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DIO706J extends Component.withPins({
  "~{MR}": "1",
  "V_{CC}": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "~{WDO}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "passive", "V_{CC}": "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", "~{WDO}": "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:DIO706J";
  override referencePrefix = "U";
}

/**
 * Microprocessor Reset (active-low) circuit with manual reset and watchdog, 2.63Vnom threshold, SO-8
 *
 * KiCad symbol: `Power_Supervisor:DIO706R`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://dioo.com/uploads/product/20210528/dae33bc3e6c4b6e07ca730d55ecc4c48.pdf
 * Keywords: supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DIO706R extends Component.withPins({
  "~{MR}": "1",
  "V_{CC}": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "~{WDO}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "passive", "V_{CC}": "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", "~{WDO}": "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:DIO706R";
  override referencePrefix = "U";
}

/**
 * Microprocessor Reset (active-low) circuit with manual reset and watchdog, 2.93Vnom threshold, SO-8
 *
 * KiCad symbol: `Power_Supervisor:DIO706S`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://dioo.com/uploads/product/20210528/dae33bc3e6c4b6e07ca730d55ecc4c48.pdf
 * Keywords: supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DIO706S extends Component.withPins({
  "~{MR}": "1",
  "V_{CC}": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "~{WDO}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "passive", "V_{CC}": "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", "~{WDO}": "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:DIO706S";
  override referencePrefix = "U";
}

/**
 * Microprocessor Reset (active-low) circuit with manual reset and watchdog, 3.08Vnom threshold, SO-8
 *
 * KiCad symbol: `Power_Supervisor:DIO706T`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://dioo.com/uploads/product/20210528/dae33bc3e6c4b6e07ca730d55ecc4c48.pdf
 * Keywords: supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DIO706T extends Component.withPins({
  "~{MR}": "1",
  "V_{CC}": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "~{WDO}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "passive", "V_{CC}": "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", "~{WDO}": "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:DIO706T";
  override referencePrefix = "U";
}

/**
 * Simple Power Sequencer, SOT-23-6
 *
 * KiCad symbol: `Power_Supervisor:LM3880`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm3880.pdf
 * Keywords: Power Sequencer.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class LM3880 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "EN": "3",
  "FLAG3": "4",
  "FLAG2": "5",
  "FLAG1": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", EN: "input", FLAG3: "open_collector", FLAG2: "open_collector", FLAG1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:LM3880";
  override referencePrefix = "U";
}

/**
 * Microprocessor Reset (active-low) Circuit, SOT-23
 *
 * KiCad symbol: `Power_Supervisor:LM809`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm809.pdf
 * Keywords: reset supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM809 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "VCC": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:LM809";
  override referencePrefix = "U";
}

/**
 * Microprocessor Reset (active-high) Circuit, SOT-23
 *
 * KiCad symbol: `Power_Supervisor:LM810`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm809.pdf
 * Keywords: reset supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM810 extends Component.withPins({
  "GND": "1",
  "RESET": "2",
  "VCC": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", RESET: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:LM810";
  override referencePrefix = "U";
}

/**
 * 5 Voltage Monitor/Sequencer with Reverse-Sequencing Capability, WQFN-28
 *
 * KiCad symbol: `Power_Supervisor:MAX16050xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.4mm*EP2.7x2.7*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX16050-MAX16051.pdf
 * Keywords: power sequencing.
 * Default footprint: Package_DFN_QFN:WQFN-28-1EP_4x4mm_P0.4mm_EP2.7x2.7mm.
 */
export class MAX16050xTI extends Component.withPins({
  "VCC": "1",
  "GND_2": "2",
  "ABP": "3",
  "EN": "4",
  "SET4": "5",
  "OUT4": "6",
  "DISC4": "7",
  "SET3": "8",
  "OUT3": "9",
  "DISC3": "10",
  "SET2": "11",
  "OUT2": "12",
  "DISC2": "13",
  "~{EN_HOLD}": "14",
  "REM": "15",
  "DISC1": "16",
  "OUT1": "17",
  "SET1": "18",
  "~{OV_OUT}": "19",
  "~{RESET}": "20",
  "~{FAULT}": "21",
  "~{SHDN}": "22",
  "DELAY": "23",
  "TIMEOUT": "24",
  "SEQ1": "25",
  "SEQ2": "26",
  "SEQ3": "27",
  "CP_OUT": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", GND_2: "power_in", ABP: "passive", EN: "input", SET4: "input", OUT4: "open_collector", DISC4: "input", SET3: "input", OUT3: "open_collector", DISC3: "input", SET2: "input", OUT2: "open_collector", DISC2: "input", "~{EN_HOLD}": "input", REM: "open_collector", DISC1: "input", OUT1: "open_collector", SET1: "input", "~{OV_OUT}": "open_collector", "~{RESET}": "open_collector", "~{FAULT}": "bidirectional", "~{SHDN}": "input", DELAY: "passive", TIMEOUT: "passive", SEQ1: "input", SEQ2: "input", SEQ3: "input", CP_OUT: "power_out", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX16050xTI";
  override referencePrefix = "U";
}

/**
 * 6 Voltage Monitor/Sequencer with Reverse-Sequencing Capability, WQFN-28
 *
 * KiCad symbol: `Power_Supervisor:MAX16051xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.4mm*EP2.7x2.7*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX16050-MAX16051.pdf
 * Keywords: power sequencing.
 * Default footprint: Package_DFN_QFN:WQFN-28-1EP_4x4mm_P0.4mm_EP2.7x2.7mm.
 */
export class MAX16051xTI extends Component.withPins({
  "VCC": "1",
  "GND_2": "2",
  "ABP": "3",
  "EN": "4",
  "SET4": "5",
  "OUT4": "6",
  "DISC4": "7",
  "SET3": "8",
  "OUT3": "9",
  "DISC3": "10",
  "SET2": "11",
  "OUT2": "12",
  "DISC2": "13",
  "~{EN_HOLD}": "14",
  "REM": "15",
  "DISC1": "16",
  "OUT1": "17",
  "SET1": "18",
  "~{OV_OUT}": "19",
  "~{RESET}": "20",
  "~{FAULT}": "21",
  "~{SHDN}": "22",
  "DELAY": "23",
  "TIMEOUT": "24",
  "DISC5": "25",
  "OUT5": "26",
  "SET5": "27",
  "CP_OUT": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", GND_2: "power_in", ABP: "passive", EN: "input", SET4: "input", OUT4: "open_collector", DISC4: "input", SET3: "input", OUT3: "open_collector", DISC3: "input", SET2: "input", OUT2: "open_collector", DISC2: "input", "~{EN_HOLD}": "input", REM: "open_collector", DISC1: "input", OUT1: "open_collector", SET1: "input", "~{OV_OUT}": "open_collector", "~{RESET}": "open_collector", "~{FAULT}": "bidirectional", "~{SHDN}": "input", DELAY: "passive", TIMEOUT: "passive", DISC5: "input", OUT5: "open_collector", SET5: "input", CP_OUT: "power_out", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX16051xTI";
  override referencePrefix = "U";
}

/**
 * Dual Voltage μP Supervisory Circuits, SOT-23-6
 *
 * KiCad symbol: `Power_Supervisor:MAX6355`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6351-MAX6360.pdf
 * Keywords: Power Supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6355 extends Component.withPins({
  "~{RST}": "1",
  "GND": "2",
  "~{MR}": "3",
  "VCC2": "4",
  "RSTIN": "5",
  "VCC1": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "open_collector", GND: "power_in", "~{MR}": "input", VCC2: "power_in", RSTIN: "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX6355";
  override referencePrefix = "U";
}

/**
 * Precision Pin-Selectable Watchdog Timer, 200us to 60s, SOT-23-8
 *
 * KiCad symbol: `Power_Supervisor:MAX6369`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6369-MAX6374.pdf
 * Keywords: watchdog supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class MAX6369 extends Component.withPins({
  "WDI": "1",
  "GND": "2",
  "NC": "3",
  "SET0": "4",
  "SET1": "5",
  "SET2": "6",
  "~{WDO}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { WDI: "input", GND: "power_in", NC: "no_connect", SET0: "input", SET1: "input", SET2: "input", "~{WDO}": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX6369";
  override referencePrefix = "U";
}

/**
 * Precision Pin-Selectable Watchdog Timer, 200us to 60s, SOT-23-8
 *
 * KiCad symbol: `Power_Supervisor:MAX6370`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6369-MAX6374.pdf
 * Keywords: watchdog supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class MAX6370 extends Component.withPins({
  "WDI": "1",
  "GND": "2",
  "NC": "3",
  "SET0": "4",
  "SET1": "5",
  "SET2": "6",
  "~{WDO}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { WDI: "input", GND: "power_in", NC: "no_connect", SET0: "input", SET1: "input", SET2: "input", "~{WDO}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX6370";
  override referencePrefix = "U";
}

/**
 * Precision Pin-Selectable Watchdog Timer, 200us to 60s, SOT-23-8
 *
 * KiCad symbol: `Power_Supervisor:MAX6371`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6369-MAX6374.pdf
 * Keywords: watchdog supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class MAX6371 extends Component.withPins({
  "WDI": "1",
  "GND": "2",
  "NC": "3",
  "SET0": "4",
  "SET1": "5",
  "SET2": "6",
  "~{WDO}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { WDI: "input", GND: "power_in", NC: "no_connect", SET0: "input", SET1: "input", SET2: "input", "~{WDO}": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX6371";
  override referencePrefix = "U";
}

/**
 * Precision Pin-Selectable Watchdog Timer, 200us to 60s, SOT-23-8
 *
 * KiCad symbol: `Power_Supervisor:MAX6372`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6369-MAX6374.pdf
 * Keywords: watchdog supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class MAX6372 extends Component.withPins({
  "WDI": "1",
  "GND": "2",
  "NC": "3",
  "SET0": "4",
  "SET1": "5",
  "SET2": "6",
  "~{WDO}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { WDI: "input", GND: "power_in", NC: "no_connect", SET0: "input", SET1: "input", SET2: "input", "~{WDO}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX6372";
  override referencePrefix = "U";
}

/**
 * Precision Pin-Selectable Watchdog Timer, 200us to 60s, SOT-23-8
 *
 * KiCad symbol: `Power_Supervisor:MAX6373`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6369-MAX6374.pdf
 * Keywords: watchdog supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class MAX6373 extends Component.withPins({
  "WDI": "1",
  "GND": "2",
  "NC": "3",
  "SET0": "4",
  "SET1": "5",
  "SET2": "6",
  "~{WDO}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { WDI: "input", GND: "power_in", NC: "no_connect", SET0: "input", SET1: "input", SET2: "input", "~{WDO}": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX6373";
  override referencePrefix = "U";
}

/**
 * Precision Pin-Selectable Watchdog Timer, 200us to 60s, SOT-23-8
 *
 * KiCad symbol: `Power_Supervisor:MAX6374`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6369-MAX6374.pdf
 * Keywords: watchdog supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class MAX6374 extends Component.withPins({
  "WDI": "1",
  "GND": "2",
  "NC": "3",
  "SET0": "4",
  "SET1": "5",
  "SET2": "6",
  "~{WDO}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { WDI: "input", GND: "power_in", NC: "no_connect", SET0: "input", SET1: "input", SET2: "input", "~{WDO}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX6374";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, Battery-Backup Power Switching, Power-Fail Comparator, VCC 4.75...5.5V, VBATT 2.0...4.25V, Reset Voltage Threshold 4.65V, Reset Timeout Delay 50ms, Watchdog Timeout 1.6s, DIP-8
 *
 * KiCad symbol: `Power_Supervisor:MAX690xPA`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max690-max695.pdf
 * Keywords: Supervisor wdg.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX690xPA extends Component.withPins({
  "VOUT": "1",
  "VCC": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "VBATT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", VCC: "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", VBATT: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX690xPA";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, Battery-Backup Power Switching, Power-Fail Comparator, VCC / VBATT 1.0...5.5V, Reset Threshold 4.65V, Reset Pulse Width 200ms, Watchdog Timeout 1.60s, SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:MAX690ACSA`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*4.*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX690A-MAX805L.pdf
 * Keywords: Supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX690ACSA extends Component.withPins({
  "VOUT": "1",
  "VCC": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "VBATT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", VCC: "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", VBATT: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX690ACSA";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, DIP-16
 *
 * KiCad symbol: `Power_Supervisor:MAX691xPE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX690-MAX695.pdf
 * Keywords: Power Supervisor.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX691xPE extends Component.withPins({
  "VBATT": "1",
  "VOUT": "2",
  "VCC": "3",
  "GND": "4",
  "BATT_ON": "5",
  "~{LOW_LINE}": "6",
  "OSC_IN": "7",
  "OSC_SEL": "8",
  "PFI": "9",
  "~{PFO}": "10",
  "WDI": "11",
  "~{CE_OUT}": "12",
  "~{CE_IN}": "13",
  "~{WDO}": "14",
  "~{RESET}": "15",
  "RESET": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBATT: "power_in", VOUT: "power_out", VCC: "power_in", GND: "power_in", BATT_ON: "output", "~{LOW_LINE}": "output", OSC_IN: "input", OSC_SEL: "input", PFI: "input", "~{PFO}": "output", WDI: "input", "~{CE_OUT}": "output", "~{CE_IN}": "input", "~{WDO}": "output", "~{RESET}": "output", RESET: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX691xPE";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, SOIC-16
 *
 * KiCad symbol: `Power_Supervisor:MAX691xWE`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX690-MAX695.pdf
 * Keywords: Power Supervisor.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class MAX691xWE extends Component.withPins({
  "VBATT": "1",
  "VOUT": "2",
  "VCC": "3",
  "GND": "4",
  "BATT_ON": "5",
  "~{LOW_LINE}": "6",
  "OSC_IN": "7",
  "OSC_SEL": "8",
  "PFI": "9",
  "~{PFO}": "10",
  "WDI": "11",
  "~{CE_OUT}": "12",
  "~{CE_IN}": "13",
  "~{WDO}": "14",
  "~{RESET}": "15",
  "RESET": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBATT: "power_in", VOUT: "power_out", VCC: "power_in", GND: "power_in", BATT_ON: "output", "~{LOW_LINE}": "output", OSC_IN: "input", OSC_SEL: "input", PFI: "input", "~{PFO}": "output", WDI: "input", "~{CE_OUT}": "output", "~{CE_IN}": "input", "~{WDO}": "output", "~{RESET}": "output", RESET: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX691xWE";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, Battery-Backup Power Switching, Power-Fail Comparator, VCC / VBATT 1.0...5.5V, Reset Threshold 4.40V, Reset Pulse Width 200ms, Watchdog Timeout 1.60s, SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:MAX692ACSA`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*4.*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX690A-MAX805L.pdf
 * Keywords: Supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX692ACSA extends Component.withPins({
  "VOUT": "1",
  "VCC": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "VBATT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", VCC: "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", VBATT: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX692ACSA";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, Battery-Backup Power Switching, Power-Fail Comparator, VCC 4.5...5.5V, VBATT 2.0...4.0V, Reset Voltage Threshold 4.4V, Reset Timeout Delay 50ms, Watchdog Timeout 1.6s, DIP-8
 *
 * KiCad symbol: `Power_Supervisor:MAX692xPA`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max690-max695.pdf
 * Keywords: Supervisor wdg.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX692xPA extends Component.withPins({
  "VOUT": "1",
  "VCC": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "VBATT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", VCC: "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", VBATT: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX692xPA";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, Battery-Backup Power Switching, Power-Fail Comparator, VCC 4.75...5.5V, VBATT 2.0...4.25V, Reset Voltage Threshold 4.65V, Reset Timeout Delay 200ms, Watchdog Timeout 1.6s, DIP-8
 *
 * KiCad symbol: `Power_Supervisor:MAX694xPA`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max690-max695.pdf
 * Keywords: Supervisor wdg.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX694xPA extends Component.withPins({
  "VOUT": "1",
  "VCC": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "VBATT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", VCC: "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", VBATT: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX694xPA";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, Battery-Backup Power Switching, Power-Fail Comparator accuracy ±2%, VCC / VBATT 1.0...5.5V, Reset Threshold 4.65V, Reset Pulse Width 200ms, Watchdog Timeout 1.60s, SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:MAX802LCSA`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*4.*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX690A-MAX805L.pdf
 * Keywords: Supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX802LCSA extends Component.withPins({
  "VOUT": "1",
  "VCC": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "~{RESET}": "7",
  "VBATT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", VCC: "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", "~{RESET}": "output", VBATT: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX802LCSA";
  override referencePrefix = "U";
}

/**
 * Microprocessor Supervisory Circuit, Battery-Backup Power Switching, Power-Fail Comparator, VCC / VBATT 1.1...5.5V, Reset Threshold 4.65V, Reset Pulse Width 200ms, Watchdog Timeout 1.60s, Reset active-high, SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:MAX805LCSA`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*4.*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX690A-MAX805L.pdf
 * Keywords: Supervisor wdg.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX805LCSA extends Component.withPins({
  "VOUT": "1",
  "VCC": "2",
  "GND": "3",
  "PFI": "4",
  "~{PFO}": "5",
  "WDI": "6",
  "RESET": "7",
  "VBATT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", VCC: "power_in", GND: "power_in", PFI: "input", "~{PFO}": "output", WDI: "input", RESET: "output", VBATT: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX805LCSA";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 4.63V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MAX811LEUS-T`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX811-MAX812.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MAX811LEUS_T extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX811LEUS-T";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 4.38V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MAX811MEUS-T`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX811-MAX812.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MAX811MEUS_T extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX811MEUS-T";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 2.63V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MAX811REUS-T`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX811-MAX812.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MAX811REUS_T extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX811REUS-T";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 2.93V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MAX811SEUS-T`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX811-MAX812.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MAX811SEUS_T extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX811SEUS-T";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 3.08V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MAX811TEUS-T`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX811-MAX812.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MAX811TEUS_T extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MAX811TEUS-T";
  override referencePrefix = "U";
}

/**
 * Undervoltage Sensing Circuit, SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:MC34064D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC34064-D.PDF
 * Keywords: Power Supervisor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC34064D extends Component.withPins({
  "~{RESET}": "1",
  "IN": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "open_collector", IN: "input", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MC34064D";
  override referencePrefix = "U";
}

/**
 * Undervoltage Sensing Circuit, MSOP-8
 *
 * KiCad symbol: `Power_Supervisor:MC34064DM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC34064-D.PDF
 * Keywords: Power Supervisor.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MC34064DM extends Component.withPins({
  "~{RESET}": "1",
  "IN": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "open_collector", IN: "input", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MC34064DM";
  override referencePrefix = "U";
}

/**
 * Undervoltage Sensing Circuit, TO-92
 *
 * KiCad symbol: `Power_Supervisor:MC34064P`. Reference prefix: `U`.
 * Footprint filters: TO?92L?Inline*.
 * @see https://www.onsemi.com/pub/Collateral/MC34064-D.PDF
 * Keywords: Power Supervisor.
 * Default footprint: Package_TO_SOT_THT:TO-92L_Inline.
 */
export class MC34064P extends Component.withPins({
  "~{RESET}": "1",
  "IN": "2",
  "GND": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "open_collector", IN: "input", GND: "input", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MC34064P";
  override referencePrefix = "U";
}

/**
 * Undervoltage Sensing Circuit, TSOP-5
 *
 * KiCad symbol: `Power_Supervisor:MC34064SN`. Reference prefix: `U`.
 * Footprint filters: TSOP*1.65x3.05mm*P0.95mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC34064-D.PDF
 * Keywords: Power Supervisor.
 * Default footprint: Package_SO:TSOP-5_1.65x3.05mm_P0.95mm.
 */
export class MC34064SN extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "~{RESET}": "3",
  "NC_4": "4",
  "NC_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", "~{RESET}": "open_collector", NC_4: "no_connect", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MC34064SN";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 2.70V threshold, active low output
 *
 * KiCad symbol: `Power_Supervisor:MCP100-270D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP100_270D extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP100-270D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 3.00V threshold, active low output
 *
 * KiCad symbol: `Power_Supervisor:MCP100-300D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP100_300D extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP100-300D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 3.15V threshold, active low output
 *
 * KiCad symbol: `Power_Supervisor:MCP100-315D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP100_315D extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP100-315D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 4.50V threshold, active low output
 *
 * KiCad symbol: `Power_Supervisor:MCP100-450D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP100_450D extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP100-450D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 4.60V threshold, active low output
 *
 * KiCad symbol: `Power_Supervisor:MCP100-460D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP100_460D extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP100-460D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 4.75V threshold, active low output
 *
 * KiCad symbol: `Power_Supervisor:MCP100-475D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP100_475D extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP100-475D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 4.85V threshold, active low output
 *
 * KiCad symbol: `Power_Supervisor:MCP100-485D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP100_485D extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP100-485D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 2.70V threshold, active high output
 *
 * KiCad symbol: `Power_Supervisor:MCP101-270D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP101_270D extends Component.withPins({
  "RST": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RST: "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP101-270D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 3.00V threshold, active high output
 *
 * KiCad symbol: `Power_Supervisor:MCP101-300D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP101_300D extends Component.withPins({
  "RST": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RST: "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP101-300D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 3.15V threshold, active high output
 *
 * KiCad symbol: `Power_Supervisor:MCP101-315D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP101_315D extends Component.withPins({
  "RST": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RST: "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP101-315D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 4.50V threshold, active high output
 *
 * KiCad symbol: `Power_Supervisor:MCP101-450D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP101_450D extends Component.withPins({
  "RST": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RST: "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP101-450D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 4.60V threshold, active high output
 *
 * KiCad symbol: `Power_Supervisor:MCP101-460D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP101_460D extends Component.withPins({
  "RST": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RST: "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP101-460D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 4.75V threshold, active high output
 *
 * KiCad symbol: `Power_Supervisor:MCP101-475D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP101_475D extends Component.withPins({
  "RST": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RST: "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP101-475D";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, 4.85V threshold, active high output
 *
 * KiCad symbol: `Power_Supervisor:MCP101-485D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, TO?92*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11187f.pdf
 * Keywords: supervisor reset push-pull.
 */
export class MCP101_485D extends Component.withPins({
  "RST": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RST: "output", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP101-485D";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit, TO-92
 *
 * KiCad symbol: `Power_Supervisor:MCP120-xxxDxTO`. Reference prefix: `U`.
 * Footprint filters: TO*92*Inline*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MCP120_xxxDxTO extends Component.withPins({
  "VDD": "2",
  "~{RST}": "1",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "~{RST}": "open_collector", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP120-xxxDxTO";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit, TO-92
 *
 * KiCad symbol: `Power_Supervisor:MCP120-xxxGxTO`. Reference prefix: `U`.
 * Footprint filters: TO*92*Inline*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MCP120_xxxGxTO extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "~{RST}": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "~{RST}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP120-xxxGxTO";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit, TO-92
 *
 * KiCad symbol: `Power_Supervisor:MCP120-xxxHxTO`. Reference prefix: `U`.
 * Footprint filters: TO*92*Inline*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MCP120_xxxHxTO extends Component.withPins({
  "VDD": "1",
  "~{RST}": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "~{RST}": "open_collector", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP120-xxxHxTO";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit, SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:MCP120-xxxxSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP120_xxxxSN extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "NC_3": "3",
  "VSS": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "open_collector", VDD: "power_in", NC_3: "no_connect", VSS: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP120-xxxxSN";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit, SOT-23
 *
 * KiCad symbol: `Power_Supervisor:MCP120-xxxxTT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MCP120_xxxxTT extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "open_collector", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP120-xxxxTT";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit with internal 5 kΩ pull-up, TO-92
 *
 * KiCad symbol: `Power_Supervisor:MCP130-xxxDxTO`. Reference prefix: `U`.
 * Footprint filters: TO*92*Inline*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit pull-up.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MCP130_xxxDxTO extends Component.withPins({
  "VDD": "2",
  "~{RST}": "1",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "~{RST}": "open_collector", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP130-xxxDxTO";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit with internal 5 kΩ pull-up, TO-92
 *
 * KiCad symbol: `Power_Supervisor:MCP130-xxxFxTO`. Reference prefix: `U`.
 * Footprint filters: TO*92*Inline*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit pull-up.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MCP130_xxxFxTO extends Component.withPins({
  "VDD": "3",
  "VSS": "1",
  "~{RST}": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "~{RST}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP130-xxxFxTO";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit with internal 5 kΩ pull-up, TO-92
 *
 * KiCad symbol: `Power_Supervisor:MCP130-xxxHxTO`. Reference prefix: `U`.
 * Footprint filters: TO*92*Inline*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit pull-up.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MCP130_xxxHxTO extends Component.withPins({
  "VDD": "1",
  "~{RST}": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "~{RST}": "open_collector", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP130-xxxHxTO";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit with internal 5 kΩ pull-up, SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:MCP130-xxxxSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit pull-up.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP130_xxxxSN extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "NC_3": "3",
  "VSS": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "open_collector", VDD: "power_in", NC_3: "no_connect", VSS: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP130-xxxxSN";
  override referencePrefix = "U";
}

/**
 * Microcontroller supervisory circuit with internal 5 kΩ pull-up, SOT-23
 *
 * KiCad symbol: `Power_Supervisor:MCP130-xxxxTT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11184d.pdf
 * Keywords: supervisory circuit pull-up.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MCP130_xxxxTT extends Component.withPins({
  "~{RST}": "1",
  "VDD": "2",
  "VSS": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RST}": "open_collector", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MCP130-xxxxTT";
  override referencePrefix = "U";
}

/**
 * Voltage Monitor with Adjustable Hysteresis, Active-High, SOT-23-5
 *
 * KiCad symbol: `Power_Supervisor:MIC2779H-xxM5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/MIC2779-Voltage-Monitor-with-Adjustable-Hysteresis-DS20006116A.pdf
 * Keywords: Supervisor Reset MIC2779H-1YM5-TR MIC2779H-2YM5-TR.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MIC2779H_xxM5 extends Component.withPins({
  "HTH": "1",
  "GND": "2",
  "LTH": "3",
  "RST": "4",
  "VDD": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HTH: "input", GND: "power_in", LTH: "input", RST: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MIC2779H-xxM5";
  override referencePrefix = "U";
}

/**
 * Voltage Monitor with Adjustable Hysteresis, Active-Low, SOT-23-5
 *
 * KiCad symbol: `Power_Supervisor:MIC2779L-xxM5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/MIC2779-Voltage-Monitor-with-Adjustable-Hysteresis-DS20006116A.pdf
 * Keywords: Supervisor Reset MIC2779L-2YM5-TR.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MIC2779L_xxM5 extends Component.withPins({
  "HTH": "1",
  "GND": "2",
  "LTH": "3",
  "~{RST}": "4",
  "VDD": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { HTH: "input", GND: "power_in", LTH: "input", "~{RST}": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MIC2779L-xxM5";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 4.00V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MIC811JUY`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic811.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MIC811JUY extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MIC811JUY";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 4.38V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MIC811MUY`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic811.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MIC811MUY extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MIC811MUY";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 2.63V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MIC811RUY`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic811.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MIC811RUY extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MIC811RUY";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 2.93V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MIC811SUY`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic811.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MIC811SUY extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MIC811SUY";
  override referencePrefix = "U";
}

/**
 * Power supply supervisor, Manual reset, Threshold 3.08V, SOT-143
 *
 * KiCad symbol: `Power_Supervisor:MIC811TUY`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/mic811.pdf
 * Keywords: Supervisor Reset.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MIC811TUY extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "~{MR}": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "~{MR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:MIC811TUY";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, active low output
 *
 * KiCad symbol: `Power_Supervisor:TCM809`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21661E.pdf
 * Keywords: supervisor reset push-pull.
 */
export class TCM809 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "V_{DD}": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TCM809";
  override referencePrefix = "U";
}

/**
 * Microcontroller reset monitor, active high output
 *
 * KiCad symbol: `Power_Supervisor:TCM810`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21661E.pdf
 * Keywords: supervisor reset push-pull.
 */
export class TCM810 extends Component.withPins({
  "GND": "1",
  "RESET": "2",
  "V_{DD}": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", RESET: "output", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TCM810";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 2.53V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:TL7702A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705a.pdf
 * Keywords: voltage supervisor.
 */
export class TL7702A extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7702A";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 2.53V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:TL7702B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705b.pdf
 * Keywords: voltage supervisor.
 */
export class TL7702B extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7702B";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 4.55V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:TL7705A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705a.pdf
 * Keywords: voltage supervisor.
 */
export class TL7705A extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7705A";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 4.55V, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Power_Supervisor:TL7705AxPS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705a.pdf
 * Keywords: voltage supervisor.
 * Default footprint: Package_SO:SOIC-8_5.3x6.2mm_P1.27mm.
 */
export class TL7705AxPS extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7705AxPS";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 4.55V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:TL7705B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705b.pdf
 * Keywords: voltage supervisor.
 */
export class TL7705B extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7705B";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 7.6V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:TL7709A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705a.pdf
 * Keywords: voltage supervisor.
 */
export class TL7709A extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7709A";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 10.8V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:TL7712A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705a.pdf
 * Keywords: voltage supervisor.
 */
export class TL7712A extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7712A";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 13.5V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:TL7715A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705a.pdf
 * Keywords: voltage supervisor.
 */
export class TL7715A extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7715A";
  override referencePrefix = "U";
}

/**
 * Supply-Voltage Supervisors, 3.08V, PDIP-8/SOIC-8
 *
 * KiCad symbol: `Power_Supervisor:TL7733B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tl7705b.pdf
 * Keywords: voltage supervisor.
 */
export class TL7733B extends Component.withPins({
  "REF": "1",
  "~{RESIN}": "2",
  "CT": "3",
  "GND": "4",
  "~{RESET}": "5",
  "RESET": "6",
  "SENSE": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "output", "~{RESIN}": "input", CT: "passive", GND: "power_in", "~{RESET}": "open_collector", RESET: "open_collector", SENSE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TL7733B";
  override referencePrefix = "U";
}

/**
 * push-pull, active-high, 200mS reset delay, 2.93V threshold voltage, SOT-23
 *
 * KiCad symbol: `Power_Supervisor:TLV810EA29DBZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv803e.pdf
 * Keywords: voltage supervisor low power small size.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TLV810EA29DBZ extends Component.withPins({
  "GND": "1",
  "RESET": "2",
  "V_{DD}": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", RESET: "output", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TLV810EA29DBZ";
  override referencePrefix = "U";
}

/**
 * Window watchdog timer with programmable reset delay
 *
 * KiCad symbol: `Power_Supervisor:TPS3430WDRC`. Reference prefix: `U`.
 * Footprint filters: *VSON*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/gpn/TPS3430
 * Keywords: watchdog supervisor.
 * Default footprint: Package_SON:VSON-10-1EP_3x3mm_P0.5mm_EP1.65x2.4mm.
 */
export class TPS3430WDRC extends Component.withPins({
  "VDD2": "10",
  "GND_11": "11",
  "VDD1": "1",
  "CWD": "2",
  "SET0": "3",
  "CRST": "4",
  "GND_5": "5",
  "SET1": "6",
  "WDI": "7",
  "~{WDO}": "8",
  "NC": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD2: "power_in", GND_11: "passive", VDD1: "power_in", CWD: "passive", SET0: "input", CRST: "passive", GND_5: "power_in", SET1: "input", WDI: "input", "~{WDO}": "open_collector", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TPS3430WDRC";
  override referencePrefix = "U";
}

/**
 * High-Accuracy, Overvoltage and Undervoltage Monitor, SOT-23-6
 *
 * KiCad symbol: `Power_Supervisor:TPS3702`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps3702.pdf
 * Keywords: protection overvoltage unvervoltage monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS3702 extends Component.withPins({
  "UV": "1",
  "GND": "2",
  "SENSE": "3",
  "SET": "4",
  "VDD": "5",
  "OV": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { UV: "output", GND: "power_in", SENSE: "input", SET: "input", VDD: "power_in", OV: "output", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TPS3702";
  override referencePrefix = "U";
}

/**
 * Low-Quiescent-Current, Programmable-Delay Supervisory Circuit, SOT-23-6
 *
 * KiCad symbol: `Power_Supervisor:TPS3808DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tps3808.pdf
 * Keywords: supply voltage supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS3808DBV extends Component.withPins({
  "~{RESET}": "1",
  "GND": "2",
  "~{MR}": "3",
  "CT": "4",
  "SENSE": "5",
  "VDD": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "output", GND: "power_in", "~{MR}": "input", CT: "input", SENSE: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TPS3808DBV";
  override referencePrefix = "U";
}

/**
 * Supervisory Circuit with watchdog & manual reset, push-pull ~{RESET} output, SOT-23-6
 *
 * KiCad symbol: `Power_Supervisor:TPS3823-xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps3823.pdf
 * Keywords: Texas-Instruments supply-voltage TPS3823-25DBV TPS3823-30DBV TPS3823-33DBV TPS3823-50DBV.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS3823_xxDBV extends Component.withPins({
  "~{RESET}": "1",
  "GND": "2",
  "~{MR}": "3",
  "WDI": "4",
  "V_{DD}": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "output", GND: "power_in", "~{MR}": "input", WDI: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TPS3823-xxDBV";
  override referencePrefix = "U";
}

/**
 * 150-nA, Ultralow Power, Supply Voltage Monitor, X2SON-4
 *
 * KiCad symbol: `Power_Supervisor:TPS3831`. Reference prefix: `U`.
 * Footprint filters: Texas*X2SON*1x1mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/sbvs193d/sbvs193d.pdf
 * Keywords: supply voltage supervisor.
 * Default footprint: Package_SON:Texas_X2SON-4_1x1mm_P0.65mm.
 */
export class TPS3831 extends Component.withPins({
  "~{RESET}": "1",
  "~{MR}": "2",
  "GND": "3",
  "VDD": "4",
  "TP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "output", "~{MR}": "input", GND: "power_in", VDD: "power_in", TP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TPS3831";
  override referencePrefix = "U";
}

/**
 * 150-nA, Ultralow Power, Supply Voltage Monitor, SOT-23
 *
 * KiCad symbol: `Power_Supervisor:TPS3839DBZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/sbvs193d/sbvs193d.pdf
 * Keywords: supply voltage supervisor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TPS3839DBZ extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "VDD": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TPS3839DBZ";
  override referencePrefix = "U";
}

/**
 * 150-nA, Ultralow Power, Supply Voltage Monitor, X2SON-4
 *
 * KiCad symbol: `Power_Supervisor:TPS3839DQN`. Reference prefix: `U`.
 * Footprint filters: Texas*X2SON*1x1mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/sbvs193d/sbvs193d.pdf
 * Keywords: supply voltage supervisor.
 * Default footprint: Package_SON:Texas_X2SON-4_1x1mm_P0.65mm.
 */
export class TPS3839DQN extends Component.withPins({
  "~{RESET}": "1",
  "NC": "2",
  "GND": "3",
  "VDD": "4",
  "TP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "output", NC: "no_connect", GND: "power_in", VDD: "power_in", TP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Power_Supervisor:TPS3839DQN";
  override referencePrefix = "U";
}
