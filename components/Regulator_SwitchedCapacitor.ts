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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT3200 extends Component.withPins({
  /** Physical pin 1: CPOS; passive. */
  "CPOS": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: CNEG; passive. */
  "CNEG": "3",
  /** Physical pin 4: PGND; power_in. */
  "PGND": "4",
  /** Physical pin 5: SGND; power_in. */
  "SGND": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: FB; input. */
  "FB": "7",
  /** Physical pin 8: VOUT; power_out. */
  "VOUT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT3200_5 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: CNEG; passive. */
  "CNEG": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: CPOS; passive. */
  "CPOS": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1044 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: CAP+; input. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; input. */
  "CAP-": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
  /** Physical pin 6: LV; input. */
  "LV": "6",
  /** Physical pin 7: OSC; input. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICL7660 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: CAP+; input. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; input. */
  "CAP-": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
  /** Physical pin 6: LV; input. */
  "LV": "6",
  /** Physical pin 7: OSC; input. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2665M6 extends Component.withPins({
  /** Physical pin 1: V+; passive. */
  "V+": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: CAP-; passive. */
  "CAP-": "3",
  /** Physical pin 4: SD; input. */
  "SD": "4",
  /** Physical pin 5: OUT; passive. */
  "OUT": "5",
  /** Physical pin 6: CAP+; passive. */
  "CAP+": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2775DSG extends Component.withPins({
  /** Physical pin 1: PFM; input. */
  "PFM": "1",
  /** Physical pin 2: C1-; passive. */
  "C1-": "2",
  /** Physical pin 3: C1+; passive. */
  "C1+": "3",
  /** Physical pin 4: OUTDIS; input. */
  "OUTDIS": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
  /** Physical pin 7: VIN; power_in. */
  "VIN": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2776 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: C1+; passive. */
  "C1+": "5",
  /** Physical pin 6: C1-; passive. */
  "C1-": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM27761 extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: CPOUT; power_out. */
  "CPOUT": "3",
  /** Physical pin 4: VOUT; power_out. */
  "VOUT": "4",
  /** Physical pin 5: VFB; input. */
  "VFB": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
  /** Physical pin 7: C-; passive. */
  "C-": "7",
  /** Physical pin 8: C+; passive. */
  "C+": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM27762 extends Component.withPins({
  /** Physical pin 1: PGOOD; open_collector. */
  "PGOOD": "1",
  /** Physical pin 2: FB+; input. */
  "FB+": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CP; passive. */
  "CP": "5",
  /** Physical pin 6: OUT-; power_out. */
  "OUT-": "6",
  /** Physical pin 7: FB-; input. */
  "FB-": "7",
  /** Physical pin 8: EN-; input. */
  "EN-": "8",
  /** Physical pin 9: C-; passive. */
  "C-": "9",
  /** Physical pin 10: C+; passive. */
  "C+": "10",
  /** Physical pin 11: OUT+; power_out. */
  "OUT+": "11",
  /** Physical pin 12: EN+; input. */
  "EN+": "12",
  /** Physical pin 13: PAD; power_in. */
  "PAD": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM7705 extends Component.withPins({
  /** Physical pin 1: CF+; passive. */
  "CF+": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: SD; input. */
  "SD": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: VOUT; power_out. */
  "VOUT": "6",
  /** Physical pin 7: CRES; passive. */
  "CRES": "7",
  /** Physical pin 8: CF-; passive. */
  "CF-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMC7660 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: CAP+; input. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; input. */
  "CAP-": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
  /** Physical pin 6: LV; input. */
  "LV": "6",
  /** Physical pin 7: OSC; input. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1054 extends Component.withPins({
  /** Physical pin 1: FB/SHDN; input. */
  "FB/SHDN": "1",
  /** Physical pin 2: CAP+; input. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; input. */
  "CAP-": "4",
  /** Physical pin 5: -VOUT; power_out. */
  "-VOUT": "5",
  /** Physical pin 6: VREF; output. */
  "VREF": "6",
  /** Physical pin 7: OSC; input. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1054L extends Component.withPins({
  /** Physical pin 1: FB/SHDN; input. */
  "FB/SHDN": "1",
  /** Physical pin 2: CAP+; input. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; input. */
  "CAP-": "4",
  /** Physical pin 5: -VOUT; power_out. */
  "-VOUT": "5",
  /** Physical pin 6: VREF; output. */
  "VREF": "6",
  /** Physical pin 7: OSC; input. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1054xSW extends Component.withPins({
  /** Physical pin 1: FB/SHDN; input. */
  "FB/SHDN": "1",
  /** Physical pin 2: CAP+; input. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; input. */
  "CAP-": "4",
  /** Physical pin 5: -VOUT; power_out. */
  "-VOUT": "5",
  /** Physical pin 6: VREF; output. */
  "VREF": "6",
  /** Physical pin 7: OSC; input. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1044 extends Component.withPins({
  /** Physical pin 1: BOOST; input. */
  "BOOST": "1",
  /** Physical pin 2: CAP+; input. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; input. */
  "CAP-": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
  /** Physical pin 6: LV; input. */
  "LV": "6",
  /** Physical pin 7: OSC; input. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1502xS8_3_3 extends Component.withPins({
  /** Physical pin 1: C2; passive. */
  "C2": "1",
  /** Physical pin 2: C1^{+}; passive. */
  "C1^{+}": "2",
  /** Physical pin 3: C1^{-}/~{SHDN}; output. */
  "C1^{-}/~{SHDN}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: V_{IN}; power_in. */
  "V_{IN}": "5",
  /** Physical pin 6: C3^{-}; passive. */
  "C3^{-}": "6",
  /** Physical pin 7: C3^{+}; passive. */
  "C3^{+}": "7",
  /** Physical pin 8: V_{OUT}; power_out. */
  "V_{OUT}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1502xMS8_3_3 extends Component.withPins({
  /** Physical pin 1: C2; passive. */
  "C2": "1",
  /** Physical pin 2: C1^{+}; passive. */
  "C1^{+}": "2",
  /** Physical pin 3: C1^{-}/~{SHDN}; output. */
  "C1^{-}/~{SHDN}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: V_{IN}; power_in. */
  "V_{IN}": "5",
  /** Physical pin 6: C3^{-}; passive. */
  "C3^{-}": "6",
  /** Physical pin 7: C3^{+}; passive. */
  "C3^{+}": "7",
  /** Physical pin 8: V_{OUT}; power_out. */
  "V_{OUT}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1503CMS8_2 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: C1-; input. */
  "C1-": "2",
  /** Physical pin 3: C1+; input. */
  "C1+": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: ~{SHDN}/SS; input. */
  "~{SHDN}/SS": "5",
  /** Physical pin 6: C2+; input. */
  "C2+": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: C2-; input. */
  "C2-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1503CMS8_1_8 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: C1-; input. */
  "C1-": "2",
  /** Physical pin 3: C1+; input. */
  "C1+": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: ~{SHDN}/SS; input. */
  "~{SHDN}/SS": "5",
  /** Physical pin 6: C2+; input. */
  "C2+": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: C2-; input. */
  "C2-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1503xS8_1_8 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: C1-; input. */
  "C1-": "2",
  /** Physical pin 3: C1+; input. */
  "C1+": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: ~{SHDN}/SS; input. */
  "~{SHDN}/SS": "5",
  /** Physical pin 6: C2+; input. */
  "C2+": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: C2-; input. */
  "C2-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1503xS8_2 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: C1-; input. */
  "C1-": "2",
  /** Physical pin 3: C1+; input. */
  "C1+": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: ~{SHDN}/SS; input. */
  "~{SHDN}/SS": "5",
  /** Physical pin 6: C2+; input. */
  "C2+": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: C2-; input. */
  "C2-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1751 extends Component.withPins({
  /** Physical pin 1: PGOOD/FB; output. */
  "PGOOD/FB": "1",
  /** Physical pin 2: VOUT; power_out. */
  "VOUT": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: C-; input. */
  "C-": "5",
  /** Physical pin 6: C+; input. */
  "C+": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: SS; input. */
  "SS": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1754 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: CP-; passive. */
  "CP-": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: CP+; passive. */
  "CP+": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3221EDC extends Component.withPins({
  /** Physical pin 1: C^{+}; passive. */
  "C^{+}": "1",
  /** Physical pin 2: C^{-}; passive. */
  "C^{-}": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: V_{IN}; power_in. */
  "V_{IN}": "5",
  /** Physical pin 6: V_{OUT}; power_out. */
  "V_{OUT}": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3221EDC_3_3 extends Component.withPins({
  /** Physical pin 1: C^{+}; passive. */
  "C^{+}": "1",
  /** Physical pin 2: C^{-}; passive. */
  "C^{-}": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: V_{IN}; power_in. */
  "V_{IN}": "5",
  /** Physical pin 6: V_{OUT}; power_out. */
  "V_{OUT}": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3221EDC_5 extends Component.withPins({
  /** Physical pin 1: C^{+}; passive. */
  "C^{+}": "1",
  /** Physical pin 2: C^{-}; passive. */
  "C^{-}": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: V_{IN}; power_in. */
  "V_{IN}": "5",
  /** Physical pin 6: V_{OUT}; power_out. */
  "V_{OUT}": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3260xDE extends Component.withPins({
  /** Physical pin 1: EN^{+}; input. */
  "EN^{+}": "1",
  /** Physical pin 2: RT; input. */
  "RT": "2",
  /** Physical pin 3: BYP^{-}; passive. */
  "BYP^{-}": "3",
  /** Physical pin 4: ADJ^{-}; input. */
  "ADJ^{-}": "4",
  /** Physical pin 5: LDO^{-}; power_out. */
  "LDO^{-}": "5",
  /** Physical pin 6: V_{OUT}; passive. */
  "V_{OUT}": "6",
  /** Physical pin 7: C^{-}; passive. */
  "C^{-}": "7",
  /** Physical pin 8: C^{+}; passive. */
  "C^{+}": "8",
  /** Physical pin 9: V_{IN}; power_in. */
  "V_{IN}": "9",
  /** Physical pin 10: LDO^{+}; power_out. */
  "LDO^{+}": "10",
  /** Physical pin 11: EN^{-}; input. */
  "EN^{-}": "11",
  /** Physical pin 12: MODE; input. */
  "MODE": "12",
  /** Physical pin 13: ADJ^{+}; input. */
  "ADJ^{+}": "13",
  /** Physical pin 14: BYP^{+}; passive. */
  "BYP^{+}": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC3260xMSE extends Component.withPins({
  /** Physical pin 1: EN^{+}; input. */
  "EN^{+}": "1",
  /** Physical pin 2: RT; input. */
  "RT": "2",
  /** Physical pin 3: BYP^{-}; passive. */
  "BYP^{-}": "3",
  /** Physical pin 4: ADJ^{-}; input. */
  "ADJ^{-}": "4",
  /** Physical pin 5: LDO^{-}; power_out. */
  "LDO^{-}": "5",
  /** Physical pin 6: V_{OUT}; passive. */
  "V_{OUT}": "6",
  /** Physical pin 7: C^{-}; passive. */
  "C^{-}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: C^{+}; passive. */
  "C^{+}": "10",
  /** Physical pin 11: V_{IN}; power_in. */
  "V_{IN}": "11",
  /** Physical pin 12: LDO^{+}; power_out. */
  "LDO^{+}": "12",
  /** Physical pin 13: EN^{-}; input. */
  "EN^{-}": "13",
  /** Physical pin 14: MODE; input. */
  "MODE": "14",
  /** Physical pin 15: ADJ^{+}; input. */
  "ADJ^{+}": "15",
  /** Physical pin 16: BYP^{+}; passive. */
  "BYP^{+}": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC660 extends Component.withPins({
  /** Physical pin 1: BOOST; input. */
  "BOOST": "1",
  /** Physical pin 2: CAP+; input. */
  "CAP+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP-; input. */
  "CAP-": "4",
  /** Physical pin 5: VOUT; power_out. */
  "VOUT": "5",
  /** Physical pin 6: LV; input. */
  "LV": "6",
  /** Physical pin 7: OSC; input. */
  "OSC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RT9361AxE extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: CN; passive. */
  "CN": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: CP; passive. */
  "CP": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RT9361BxE extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: CN; passive. */
  "CN": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: CP; passive. */
  "CP": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60151DRV extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: VOUT; power_out. */
  "VOUT": "3",
  /** Physical pin 4: CP+; passive. */
  "CP+": "4",
  /** Physical pin 5: CP-; passive. */
  "CP-": "5",
  /** Physical pin 6: ENA; input. */
  "ENA": "6",
  /** Physical pin 7: EP; passive. */
  "EP": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60400DBV extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: IN; power_in. */
  "IN": "2",
  /** Physical pin 3: C_{FLY-}; passive. */
  "C_{FLY-}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: C_{FLY+}; passive. */
  "C_{FLY+}": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60401DBV extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: IN; power_in. */
  "IN": "2",
  /** Physical pin 3: C_{FLY-}; passive. */
  "C_{FLY-}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: C_{FLY+}; passive. */
  "C_{FLY+}": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60402DBV extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: IN; power_in. */
  "IN": "2",
  /** Physical pin 3: C_{FLY-}; passive. */
  "C_{FLY-}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: C_{FLY+}; passive. */
  "C_{FLY+}": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60403DBV extends Component.withPins({
  /** Physical pin 1: OUT; power_out. */
  "OUT": "1",
  /** Physical pin 2: IN; power_in. */
  "IN": "2",
  /** Physical pin 3: C_{FLY-}; passive. */
  "C_{FLY-}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: C_{FLY+}; passive. */
  "C_{FLY+}": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60500DGS extends Component.withPins({
  /** Physical pin 1: ~{EN}; input. */
  "~{EN}": "1",
  /** Physical pin 2: PG; open_collector. */
  "PG": "2",
  /** Physical pin 3: C2-; passive. */
  "C2-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: C1+; passive. */
  "C1+": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT": "7",
  /** Physical pin 8: C1-; passive. */
  "C1-": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: FB; input. */
  "FB": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60501DGS extends Component.withPins({
  /** Physical pin 1: ~{EN}; input. */
  "~{EN}": "1",
  /** Physical pin 2: PG; open_collector. */
  "PG": "2",
  /** Physical pin 3: C2-; passive. */
  "C2-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: C1+; passive. */
  "C1+": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT": "7",
  /** Physical pin 8: C1-; passive. */
  "C1-": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: FB; input. */
  "FB": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60502DGS extends Component.withPins({
  /** Physical pin 1: ~{EN}; input. */
  "~{EN}": "1",
  /** Physical pin 2: PG; open_collector. */
  "PG": "2",
  /** Physical pin 3: C2-; passive. */
  "C2-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: C1+; passive. */
  "C1+": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT": "7",
  /** Physical pin 8: C1-; passive. */
  "C1-": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: FB; input. */
  "FB": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS60503DGS extends Component.withPins({
  /** Physical pin 1: ~{EN}; input. */
  "~{EN}": "1",
  /** Physical pin 2: PG; open_collector. */
  "PG": "2",
  /** Physical pin 3: C2-; passive. */
  "C2-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: C1+; passive. */
  "C1+": "6",
  /** Physical pin 7: VOUT; power_out. */
  "VOUT": "7",
  /** Physical pin 8: C1-; passive. */
  "C1-": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: FB; input. */
  "FB": "10",
}) {
  override schema = "Regulator_SwitchedCapacitor:TPS60503DGS";
  override referencePrefix = "U";
}

