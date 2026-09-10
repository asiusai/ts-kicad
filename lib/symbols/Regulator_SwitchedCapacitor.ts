// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Low Noise Regulated Charge Pump DC-DC Converter, 100 mA, MSOP-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:CAT3200`. Reference prefix: `U`.
 * Footprint filters: MSOP*.
 * @see https://www.onsemi.com/pdf/datasheet/cat3200-d.pdf
 * Keywords: switched capacitor charge pump.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class CAT3200 extends Component.withPins({
  "CPOS": "1",
  "VIN": "2",
  "CNEG": "3",
  "PGND": "4",
  "SGND": "5",
  "~{SHDN}": "6",
  "FB": "7",
  "VOUT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CPOS: "passive", VIN: "power_in", CNEG: "passive", PGND: "power_in", SGND: "power_in", "~{SHDN}": "input", FB: "input", VOUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:CAT3200";
  override referencePrefix = "U";
}

/**
 * Low Noise Regulated Charge Pump DC-DC Converter, 5 V, 100 mA, SOT-23-6
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:CAT3200-5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pdf/datasheet/cat3200-d.pdf
 * Keywords: switched capacitor charge pump.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class CAT3200_5 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "~{SHDN}": "3",
  "CNEG": "4",
  "VIN": "5",
  "CPOS": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", "~{SHDN}": "input", CNEG: "passive", VIN: "power_in", CPOS: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:CAT3200-5";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Converter, 1.5V to 10.0V operating supply voltage, 10mA with a 0.5V output drop, SO-8/DIP-8/µMAX-8/TO-99
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:MAX1044`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, MSOP*3x3mm*P0.65mm*, TO?99*.
 * @see http://datasheets.maximintegrated.com/en/ds/ICL7660-MAX1044.pdf
 * Keywords: monolithic CMOS switched capacitor voltage converter invert double divide multiply boost.
 */
export class MAX1044 extends Component.withPins({
  "NC": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "VOUT": "5",
  "LV": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", "CAP+": "input", GND: "power_in", "CAP-": "input", VOUT: "power_out", LV: "input", OSC: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:MAX1044";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Converter, 1.5V to 10.0V operating supply voltage, 10mA with a 0.5V output drop, SO-8/DIP-8/µMAX-8/TO-99
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:ICL7660`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, MSOP*3x3mm*P0.65mm*, TO?99*.
 * @see http://datasheets.maximintegrated.com/en/ds/ICL7660-MAX1044.pdf
 * Keywords: monolithic CMOS switched capacitor voltage converter invert double divide multiply.
 */
export class ICL7660 extends Component.withPins({
  "NC": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "VOUT": "5",
  "LV": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", "CAP+": "input", GND: "power_in", "CAP-": "input", VOUT: "power_out", LV: "input", OSC: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:ICL7660";
  override referencePrefix = "U";
}

/**
 * Switched Capacitor Voltage Converter, Doubles or Splits Input Supply Voltage (2.5 V to 5.5 V or 1.8 V to 11 V), 40 mA, SOT-23-6
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LM2665M6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/lm2665.pdf
 * Keywords: switched capacitor voltage converter doubler splitter.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class LM2665M6 extends Component.withPins({
  "V+": "1",
  "GND": "2",
  "CAP-": "3",
  "SD": "4",
  "OUT": "5",
  "CAP+": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "passive", GND: "power_in", "CAP-": "passive", SD: "input", OUT: "passive", "CAP+": "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LM2665M6";
  override referencePrefix = "U";
}

/**
 * 5V charge pump, 200mA, WSON-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LM2775DSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/gpn/lm2775
 * Keywords: Charge pump inductorless.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm_ThermalVias.
 */
export class LM2775DSG extends Component.withPins({
  "PFM": "1",
  "C1-": "2",
  "C1+": "3",
  "OUTDIS": "4",
  "EN": "5",
  "VOUT": "6",
  "VIN": "7",
  "GND_8": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PFM: "input", "C1-": "passive", "C1+": "passive", OUTDIS: "input", EN: "input", VOUT: "power_out", VIN: "power_in", GND_8: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LM2775DSG";
  override referencePrefix = "U";
}

/**
 * Switched capacitor inverter, inverts positive voltage +2.7 to +5.5V to negative, 200mA, SOT-23-6
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LM2776`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm2776.pdf
 * Keywords: Switched capacitor inverter.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class LM2776 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "VIN": "3",
  "EN": "4",
  "C1+": "5",
  "C1-": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", VIN: "power_in", EN: "input", "C1+": "passive", "C1-": "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LM2776";
  override referencePrefix = "U";
}

/**
 * low-noise regulated switched-capacitor voltage inverter with 2.7V-5.5V input to -1.5 to -5V Output Voltage, WSON-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LM27761`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP?2x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm27761.pdf
 * Keywords: low-noise switched capacitor voltage converter invert.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 */
export class LM27761 extends Component.withPins({
  "VIN": "1",
  "GND": "2",
  "CPOUT": "3",
  "VOUT": "4",
  "VFB": "5",
  "EN": "6",
  "C-": "7",
  "C+": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", GND: "power_in", CPOUT: "power_out", VOUT: "power_out", VFB: "input", EN: "input", "C-": "passive", "C+": "passive", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LM27761";
  override referencePrefix = "U";
}

/**
 * Low-noise inverting charge pump with both positive and negative LDO's, with 2.7V-5.5V input to +1.5 to +5V and -1.5 to -5V Output Voltage, WSON-12
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LM27762`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP?3x2mm*P0.5mm*ThermalVias*.
 * @see http://www.ti.com/lit/ds/symlink/lm27762.pdf
 * Keywords: Low-noise inverting charge pump with both positive and negative LDO's.
 * Default footprint: Package_SON:WSON-12-1EP_3x2mm_P0.5mm_EP1x2.65_ThermalVias.
 */
export class LM27762 extends Component.withPins({
  "PGOOD": "1",
  "FB+": "2",
  "VIN": "3",
  "GND": "4",
  "CP": "5",
  "OUT-": "6",
  "FB-": "7",
  "EN-": "8",
  "C-": "9",
  "C+": "10",
  "OUT+": "11",
  "EN+": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGOOD: "open_collector", "FB+": "input", VIN: "power_in", GND: "power_in", CP: "passive", "OUT-": "power_out", "FB-": "input", "EN-": "input", "C-": "passive", "C+": "passive", "OUT+": "power_out", "EN+": "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LM27762";
  override referencePrefix = "U";
}

/**
 * Negative bias generator, low-noise, 3-5.25V input, -0.232V fixed output, VSSOP-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LM7705`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm7705.pdf
 * Keywords: switched capacitor voltage converter inverter negative bias regulator.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class LM7705 extends Component.withPins({
  "CF+": "1",
  "GND_2": "2",
  "SD": "3",
  "VDD": "4",
  "GND_5": "5",
  "VOUT": "6",
  "CRES": "7",
  "CF-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CF+": "passive", GND_2: "power_in", SD: "input", VDD: "power_in", GND_5: "passive", VOUT: "power_out", CRES: "passive", "CF-": "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LM7705";
  override referencePrefix = "U";
}

/**
 * Voltage converter from +1.5V to +10V to +1.5V to +10V, SO-8/DIP-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LMC7660`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc7660.pdf
 * Keywords: Voltage converter.
 */
export class LMC7660 extends Component.withPins({
  "NC": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "VOUT": "5",
  "LV": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", "CAP+": "input", GND: "power_in", "CAP-": "input", VOUT: "power_out", LV: "input", OSC: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LMC7660";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Converter with Regulator, output current 100mA, operating range 3.5V to 15V, low loss 1.1V at 100mA, DIP-8/SO-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LT1054`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1054lfh.pdf
 * Keywords: monolithic bipolar switched capacitor voltage converter regulator inverter doubler shutdown.
 */
export class LT1054 extends Component.withPins({
  "FB/SHDN": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "-VOUT": "5",
  "VREF": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "FB/SHDN": "input", "CAP+": "input", GND: "power_in", "CAP-": "input", "-VOUT": "power_out", VREF: "output", OSC: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LT1054";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Converter with Regulator, output current 125mA, operating range 3.5V to 15V, low loss 1.1V at 100mA, DIP-8/SO-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LT1054L`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1054lfh.pdf
 * Keywords: monolithic bipolar switched capacitor voltage converter regulator inverter doubler shutdown.
 */
export class LT1054L extends Component.withPins({
  "FB/SHDN": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "-VOUT": "5",
  "VREF": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "FB/SHDN": "input", "CAP+": "input", GND: "power_in", "CAP-": "input", "-VOUT": "power_out", VREF: "output", OSC: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LT1054L";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Converter with Regulator, output current 100mA, operating range 3.5V to 15V, low loss 1.1V at 100mA, SO-16
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LT1054xSW`. Reference prefix: `U`.
 * Footprint filters: SOIC?16W*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1054lfh.pdf
 * Keywords: monolithic bipolar switched capacitor voltage converter regulator inverter doubler shutdown.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class LT1054xSW extends Component.withPins({
  "FB/SHDN": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "-VOUT": "5",
  "VREF": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "FB/SHDN": "input", "CAP+": "input", GND: "power_in", "CAP-": "input", "-VOUT": "power_out", VREF: "output", OSC: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LT1054xSW";
  override referencePrefix = "U";
}

/**
 * Switched Capacitor Voltage Converter, 1.5V to 9V supply operation, 200uA Max No Load Supply Current at 5V, DIP-8/TO-99
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1044`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, TO?99*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1044.pdf
 * Keywords: monolithic CMOS switched capacitor voltage converter invert double divide multiply boost.
 */
export class LTC1044 extends Component.withPins({
  "BOOST": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "VOUT": "5",
  "LV": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOST: "input", "CAP+": "input", GND: "power_in", "CAP-": "input", VOUT: "power_out", LV: "input", OSC: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1044";
  override referencePrefix = "U";
}

/**
 * Single Alkaline / NiCd Cell to 3.3V Regulated Charge Pump DC/DC Converter, 0.9..1.8V input, 10mA output, SOIC-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1502xS8-3.3`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.*4.*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/15023f.pdf
 * Keywords: Linear-Technology.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LTC1502xS8_3_3 extends Component.withPins({
  "C2": "1",
  "C1^{+}": "2",
  "C1^{-}/~{SHDN}": "3",
  "GND": "4",
  "V_{IN}": "5",
  "C3^{-}": "6",
  "C3^{+}": "7",
  "V_{OUT}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C2: "passive", "C1^{+}": "passive", "C1^{-}/~{SHDN}": "output", GND: "power_in", "V_{IN}": "power_in", "C3^{-}": "passive", "C3^{+}": "passive", "V_{OUT}": "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1502xS8-3.3";
  override referencePrefix = "U";
}

/**
 * Single Alkaline / NiCd Cell to 3.3V Regulated Charge Pump DC/DC Converter, 0.9..1.8V input, 10mA output, MSOP-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1502xMS8-3.3`. Reference prefix: `U`.
 * Footprint filters: *MSOP*3*3*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/15023f.pdf
 * Keywords: Linear-Technology.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC1502xMS8_3_3 extends Component.withPins({
  "C2": "1",
  "C1^{+}": "2",
  "C1^{-}/~{SHDN}": "3",
  "GND": "4",
  "V_{IN}": "5",
  "C3^{-}": "6",
  "C3^{+}": "7",
  "V_{OUT}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C2: "passive", "C1^{+}": "passive", "C1^{-}/~{SHDN}": "output", GND: "power_in", "V_{IN}": "power_in", "C3^{-}": "passive", "C3^{+}": "passive", "V_{OUT}": "power_out", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1502xMS8-3.3";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Step-Down Converter, 2V output, max output current 100mA, operating range 2.4V to 6V, MSOP-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1503CMS8-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1503f.pdf
 * Keywords: regulator inductorless.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC1503CMS8_2 extends Component.withPins({
  "VOUT": "1",
  "C1-": "2",
  "C1+": "3",
  "VIN": "4",
  "~{SHDN}/SS": "5",
  "C2+": "6",
  "GND": "7",
  "C2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", "C1-": "input", "C1+": "input", VIN: "power_in", "~{SHDN}/SS": "input", "C2+": "input", GND: "power_in", "C2-": "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1503CMS8-2";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Step-Down Converter, 1.8V output, max output current 100mA, operating range 2.4V to 6V, MSOP-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1503CMS8-1.8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1503f.pdf
 * Keywords: regulator inductorless.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC1503CMS8_1_8 extends Component.withPins({
  "VOUT": "1",
  "C1-": "2",
  "C1+": "3",
  "VIN": "4",
  "~{SHDN}/SS": "5",
  "C2+": "6",
  "GND": "7",
  "C2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", "C1-": "input", "C1+": "input", VIN: "power_in", "~{SHDN}/SS": "input", "C2+": "input", GND: "power_in", "C2-": "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1503CMS8-1.8";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Step-Down Converter, 1.8V output, max output current 100mA, operating range 2.4V to 6V, SOIC-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1503xS8-1.8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1503f.pdf
 * Keywords: regulator inductorless.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LTC1503xS8_1_8 extends Component.withPins({
  "VOUT": "1",
  "C1-": "2",
  "C1+": "3",
  "VIN": "4",
  "~{SHDN}/SS": "5",
  "C2+": "6",
  "GND": "7",
  "C2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", "C1-": "input", "C1+": "input", VIN: "power_in", "~{SHDN}/SS": "input", "C2+": "input", GND: "power_in", "C2-": "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1503xS8-1.8";
  override referencePrefix = "U";
}

/**
 * Switched-Capacitor Voltage Step-Down Converter, 2V output, max output current 100mA, operating range 2.4V to 6V, SOIC-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1503xS8-2`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1503f.pdf
 * Keywords: regulator inductorless.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LTC1503xS8_2 extends Component.withPins({
  "VOUT": "1",
  "C1-": "2",
  "C1+": "3",
  "VIN": "4",
  "~{SHDN}/SS": "5",
  "C2+": "6",
  "GND": "7",
  "C2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", "C1-": "input", "C1+": "input", VIN: "power_in", "~{SHDN}/SS": "input", "C2+": "input", GND: "power_in", "C2-": "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1503xS8-2";
  override referencePrefix = "U";
}

/**
 * 100mA charge-pump, MSOP-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1751`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1751f.pdf
 * Keywords: charge pump.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC1751 extends Component.withPins({
  "PGOOD/FB": "1",
  "VOUT": "2",
  "VIN": "3",
  "GND": "4",
  "C-": "5",
  "C+": "6",
  "~{SHDN}": "7",
  "SS": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PGOOD/FB": "output", VOUT: "power_out", VIN: "power_in", GND: "power_in", "C-": "input", "C+": "input", "~{SHDN}": "input", SS: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1751";
  override referencePrefix = "U";
}

/**
 * 40mA charge-pump, SOT-23-6
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC1754`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/175435f.pdf
 * Keywords: charge pump.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class LTC1754 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "~{SHDN}": "3",
  "CP-": "4",
  "VIN": "5",
  "CP+": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", "~{SHDN}": "input", "CP-": "passive", VIN: "power_in", "CP+": "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC1754";
  override referencePrefix = "U";
}

/**
 * Micropower, Regulated Charge Pump, 1.8..5.5V input supply, adjustable Vout (FB pin), output current up to 60mA, DFN-6 (WSON-6)
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC3221EDC`. Reference prefix: `U`.
 * Footprint filters: *DFN*2x2mm*P0.5mm*EP0.61x1.42mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3221f.pdf
 * Keywords: Linear-Technology Analog-Devices DC-DC-converter.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.5mm_EP0.61x1.42mm.
 */
export class LTC3221EDC extends Component.withPins({
  "C^{+}": "1",
  "C^{-}": "2",
  "FB": "3",
  "GND_4": "4",
  "V_{IN}": "5",
  "V_{OUT}": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "C^{+}": "passive", "C^{-}": "passive", FB: "input", GND_4: "power_in", "V_{IN}": "power_in", "V_{OUT}": "power_out", GND_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC3221EDC";
  override referencePrefix = "U";
}

/**
 * Micropower, Regulated Charge Pump, 1.8..4.4V input supply, fixed 3.3V, output current up to 60mA, DFN-6 (WSON-6)
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC3221EDC-3.3`. Reference prefix: `U`.
 * Footprint filters: *DFN*2x2mm*P0.5mm*EP0.61x1.42mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3221f.pdf
 * Keywords: Linear-Technology Analog-Devices DC-DC-converter.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.5mm_EP0.61x1.42mm.
 */
export class LTC3221EDC_3_3 extends Component.withPins({
  "C^{+}": "1",
  "C^{-}": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "V_{IN}": "5",
  "V_{OUT}": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "C^{+}": "passive", "C^{-}": "passive", "~{SHDN}": "input", GND_4: "power_in", "V_{IN}": "power_in", "V_{OUT}": "power_out", GND_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC3221EDC-3.3";
  override referencePrefix = "U";
}

/**
 * Micropower, Regulated Charge Pump, 2.7..5.5V input supply, fixed 5V, output current up to 60mA, DFN-6 (WSON-6)
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC3221EDC-5`. Reference prefix: `U`.
 * Footprint filters: *DFN*2x2mm*P0.5mm*EP0.61x1.42mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3221f.pdf
 * Keywords: Linear-Technology Analog-Devices DC-DC-converter.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.5mm_EP0.61x1.42mm.
 */
export class LTC3221EDC_5 extends Component.withPins({
  "C^{+}": "1",
  "C^{-}": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "V_{IN}": "5",
  "V_{OUT}": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "C^{+}": "passive", "C^{-}": "passive", "~{SHDN}": "input", GND_4: "power_in", "V_{IN}": "power_in", "V_{OUT}": "power_out", GND_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC3221EDC-5";
  override referencePrefix = "U";
}

/**
 * Low Noise Dual Supply Inverting Charge Pump with both positive and negative LDO regulators, V_{IN} range 4.5V to 32V, 50 mA LDO output current, DFN-14-1EP
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC3260xDE`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x4mm*P0.5mm*EP1.7x3.3mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltc3260.pdf
 * Keywords: switched capacitor inverting bipolar supply charge pump positive negativ ldo.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4mm_P0.5mm_EP1.7x3.3mm.
 */
export class LTC3260xDE extends Component.withPins({
  "EN^{+}": "1",
  "RT": "2",
  "BYP^{-}": "3",
  "ADJ^{-}": "4",
  "LDO^{-}": "5",
  "V_{OUT}": "6",
  "C^{-}": "7",
  "C^{+}": "8",
  "V_{IN}": "9",
  "LDO^{+}": "10",
  "EN^{-}": "11",
  "MODE": "12",
  "ADJ^{+}": "13",
  "BYP^{+}": "14",
  "GND": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "EN^{+}": "input", RT: "input", "BYP^{-}": "passive", "ADJ^{-}": "input", "LDO^{-}": "power_out", "V_{OUT}": "passive", "C^{-}": "passive", "C^{+}": "passive", "V_{IN}": "power_in", "LDO^{+}": "power_out", "EN^{-}": "input", MODE: "input", "ADJ^{+}": "input", "BYP^{+}": "passive", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC3260xDE";
  override referencePrefix = "U";
}

/**
 * Low Noise Dual Supply Inverting Charge Pump with both positive and negative LDO regulators, V_{IN} range 4.5V to 32V, 50 mA LDO output current, MSOP-16
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC3260xMSE`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x4.039mm*P0.5mm*EP1.651x2.845mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltc3260.pdf
 * Keywords: switched capacitor inverting bipolar supply charge pump positive negativ ldo.
 * Default footprint: Package_SO:MSOP-16-1EP_3x4.039mm_P0.5mm_EP1.651x2.845mm.
 */
export class LTC3260xMSE extends Component.withPins({
  "EN^{+}": "1",
  "RT": "2",
  "BYP^{-}": "3",
  "ADJ^{-}": "4",
  "LDO^{-}": "5",
  "V_{OUT}": "6",
  "C^{-}": "7",
  "NC_8": "8",
  "NC_9": "9",
  "C^{+}": "10",
  "V_{IN}": "11",
  "LDO^{+}": "12",
  "EN^{-}": "13",
  "MODE": "14",
  "ADJ^{+}": "15",
  "BYP^{+}": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "EN^{+}": "input", RT: "input", "BYP^{-}": "passive", "ADJ^{-}": "input", "LDO^{-}": "power_out", "V_{OUT}": "passive", "C^{-}": "passive", NC_8: "no_connect", NC_9: "no_connect", "C^{+}": "passive", "V_{IN}": "power_in", "LDO^{+}": "power_out", "EN^{-}": "input", MODE: "input", "ADJ^{+}": "input", "BYP^{+}": "passive", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC3260xMSE";
  override referencePrefix = "U";
}

/**
 * Monolithic CMOS switched-capacitor from 1.5V to 5.5V up to 100mA, SO-8/DIP-8
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:LTC660`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/660fa.pdf
 * Keywords: monolithic CMOS switched capacitor voltage converter invert double divide multiply boost.
 */
export class LTC660 extends Component.withPins({
  "BOOST": "1",
  "CAP+": "2",
  "GND": "3",
  "CAP-": "4",
  "VOUT": "5",
  "LV": "6",
  "OSC": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOST: "input", "CAP+": "input", GND: "power_in", "CAP-": "input", VOUT: "power_out", LV: "input", OSC: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:LTC660";
  override referencePrefix = "U";
}

/**
 * Switched capacitor boost, Fixed 5V output, 110mA, SOT-23-6
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:RT9361AxE`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.richtek.com/assets/product_file/RT9361A=RT9361B/DS9361AB-14.pdf
 * Keywords: Switched capacitor boost.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class RT9361AxE extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "EN": "3",
  "CN": "4",
  "VIN": "5",
  "CP": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", EN: "input", CN: "passive", VIN: "power_in", CP: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:RT9361AxE";
  override referencePrefix = "U";
}

/**
 * Switched capacitor boost, Fixed 4.5V output, 150mA, SOT-23-6
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:RT9361BxE`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.richtek.com/assets/product_file/RT9361A=RT9361B/DS9361AB-14.pdf
 * Keywords: Switched capacitor boost.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class RT9361BxE extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "EN": "3",
  "CN": "4",
  "VIN": "5",
  "CP": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", EN: "input", CN: "passive", VIN: "power_in", CP: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:RT9361BxE";
  override referencePrefix = "U";
}

/**
 * 5V, 140mA charge-pump, WSON-6
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60151DRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*2x2mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps60151.pdf
 * Keywords: charge pump.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm_ThermalVias.
 */
export class TPS60151DRV extends Component.withPins({
  "GND": "1",
  "VIN": "2",
  "VOUT": "3",
  "CP+": "4",
  "CP-": "5",
  "ENA": "6",
  "EP": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VIN: "power_in", VOUT: "power_out", "CP+": "passive", "CP-": "passive", ENA: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60151DRV";
  override referencePrefix = "U";
}

/**
 * Unregulated 60-mA Charge Pump Voltage Inverter with Variable Switching Frequency 50 kHz - 250 kHz, SOT-23-5
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60400DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps60400.pdf
 * Keywords: unregulated charge pump inverter variable switching frequency.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS60400DBV extends Component.withPins({
  "OUT": "1",
  "IN": "2",
  "C_{FLY-}": "3",
  "GND": "4",
  "C_{FLY+}": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", IN: "power_in", "C_{FLY-}": "passive", GND: "power_in", "C_{FLY+}": "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60400DBV";
  override referencePrefix = "U";
}

/**
 * Unregulated 60-mA Charge Pump Voltage Inverter with Fixed Switching Frequency 20 kHz, SOT-23-5
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60401DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps60401.pdf
 * Keywords: unregulated charge pump inverter fixed switching frequency.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS60401DBV extends Component.withPins({
  "OUT": "1",
  "IN": "2",
  "C_{FLY-}": "3",
  "GND": "4",
  "C_{FLY+}": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", IN: "power_in", "C_{FLY-}": "passive", GND: "power_in", "C_{FLY+}": "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60401DBV";
  override referencePrefix = "U";
}

/**
 * Unregulated 60-mA Charge Pump Voltage Inverter with Fixed Switching Frequency 50 kHz, SOT-23-5
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60402DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps60401.pdf
 * Keywords: unregulated charge pump inverter fixed switching frequency.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS60402DBV extends Component.withPins({
  "OUT": "1",
  "IN": "2",
  "C_{FLY-}": "3",
  "GND": "4",
  "C_{FLY+}": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", IN: "power_in", "C_{FLY-}": "passive", GND: "power_in", "C_{FLY+}": "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60402DBV";
  override referencePrefix = "U";
}

/**
 * Unregulated 60-mA Charge Pump Voltage Inverter with Fixed Switching Frequency 250 kHz, SOT-23-5
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60403DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps60401.pdf
 * Keywords: unregulated charge pump inverter fixed switching frequency.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS60403DBV extends Component.withPins({
  "OUT": "1",
  "IN": "2",
  "C_{FLY-}": "3",
  "GND": "4",
  "C_{FLY+}": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT: "power_out", IN: "power_in", "C_{FLY-}": "passive", GND: "power_in", "C_{FLY+}": "passive", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60403DBV";
  override referencePrefix = "U";
}

/**
 * 250mA High-Efficiency Step-Down Charge Pump Regulator, Adjustable Output Voltage, MSOP-10
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60500DGS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps60503.pdf
 * Keywords: Regulator Step-Down Charge Pump TPS Texas Instruments Ti.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class TPS60500DGS extends Component.withPins({
  "~{EN}": "1",
  "PG": "2",
  "C2-": "3",
  "C2+": "4",
  "VIN": "5",
  "C1+": "6",
  "VOUT": "7",
  "C1-": "8",
  "GND": "9",
  "FB": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{EN}": "input", PG: "open_collector", "C2-": "passive", "C2+": "passive", VIN: "power_in", "C1+": "passive", VOUT: "power_out", "C1-": "passive", GND: "power_in", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60500DGS";
  override referencePrefix = "U";
}

/**
 * 250mA High-Efficiency Step-Down Charge Pump Regulator, 3.3V Output Voltage, MSOP-10
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60501DGS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps60503.pdf
 * Keywords: Regulator Step-Down Charge Pump TPS Texas Instruments Ti.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class TPS60501DGS extends Component.withPins({
  "~{EN}": "1",
  "PG": "2",
  "C2-": "3",
  "C2+": "4",
  "VIN": "5",
  "C1+": "6",
  "VOUT": "7",
  "C1-": "8",
  "GND": "9",
  "FB": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{EN}": "input", PG: "open_collector", "C2-": "passive", "C2+": "passive", VIN: "power_in", "C1+": "passive", VOUT: "power_out", "C1-": "passive", GND: "power_in", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60501DGS";
  override referencePrefix = "U";
}

/**
 * 250mA High-Efficiency Step-Down Charge Pump Regulator, 1.8V Output Voltage, MSOP-10
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60502DGS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps60503.pdf
 * Keywords: Regulator Step-Down Charge Pump TPS Texas Instruments Ti.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class TPS60502DGS extends Component.withPins({
  "~{EN}": "1",
  "PG": "2",
  "C2-": "3",
  "C2+": "4",
  "VIN": "5",
  "C1+": "6",
  "VOUT": "7",
  "C1-": "8",
  "GND": "9",
  "FB": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{EN}": "input", PG: "open_collector", "C2-": "passive", "C2+": "passive", VIN: "power_in", "C1+": "passive", VOUT: "power_out", "C1-": "passive", GND: "power_in", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60502DGS";
  override referencePrefix = "U";
}

/**
 * 250mA High-Efficiency Step-Down Charge Pump Regulator, 1.5V Output Voltage, MSOP-10
 *
 * KiCad symbol: `Regulator_SwitchedCapacitor:TPS60503DGS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tps60503.pdf
 * Keywords: Regulator Step-Down Charge Pump TPS Texas Instruments Ti.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class TPS60503DGS extends Component.withPins({
  "~{EN}": "1",
  "PG": "2",
  "C2-": "3",
  "C2+": "4",
  "VIN": "5",
  "C1+": "6",
  "VOUT": "7",
  "C1-": "8",
  "GND": "9",
  "FB": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{EN}": "input", PG: "open_collector", "C2-": "passive", "C2+": "passive", VIN: "power_in", "C1+": "passive", VOUT: "power_out", "C1-": "passive", GND: "power_in", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Regulator_SwitchedCapacitor:TPS60503DGS";
  override referencePrefix = "U";
}
