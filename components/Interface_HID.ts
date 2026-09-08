// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * JoyWarrior 10bit, 3 axis, joystick controller, DIP-24/SOIC-24
 *
 * KiCad symbol: `Interface_HID:JoyWarrior24A10L`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, DIP*7.62mm*.
 * @see http://codemercs.com/downloads/joywarrior/JW_Datasheet.pdf
 * Keywords: joystick controller 10bit 3-axis.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class JoyWarrior24A10L extends Component.withPins({
  /** Physical pin 1: X0/B0; input. */
  "X0/B0": "1",
  /** Physical pin 2: X1/B1; input. */
  "X1/B1": "2",
  /** Physical pin 3: X2/B2; input. */
  "X2/B2": "3",
  /** Physical pin 4: X3/B3; input. */
  "X3/B3": "4",
  /** Physical pin 5: ~{CS}; output. */
  "~{CS}": "5",
  /** Physical pin 6: Din; input. */
  "Din": "6",
  /** Physical pin 7: Aux0; output. */
  "Aux0": "7",
  /** Physical pin 8: Aux2; output. */
  "Aux2": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: PullToGnd; input. */
  "PullToGnd": "10",
  /** Physical pin 11: VREG; power_out. */
  "VREG": "11",
  /** Physical pin 12: Direct; input. */
  "Direct": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: D-; bidirectional. */
  "D-": "15",
  /** Physical pin 16: D+; bidirectional. */
  "D+": "16",
  /** Physical pin 17: Aux3; output. */
  "Aux3": "17",
  /** Physical pin 18: Aux1; output. */
  "Aux1": "18",
  /** Physical pin 19: Dout; output. */
  "Dout": "19",
  /** Physical pin 20: SCLK; output. */
  "SCLK": "20",
  /** Physical pin 21: Y3/B7; input. */
  "Y3/B7": "21",
  /** Physical pin 22: Y2/B6; input. */
  "Y2/B6": "22",
  /** Physical pin 23: Y1/B5; input. */
  "Y1/B5": "23",
  /** Physical pin 24: Y0/B4; input. */
  "Y0/B4": "24",
}) {
  override schema = "Interface_HID:JoyWarrior24A10L";
  override referencePrefix = "U";
}

/**
 * JoyWarrior 8bit, 4 axis, joystick controller, DIP-24/SOIC-24
 *
 * KiCad symbol: `Interface_HID:JoyWarrior24A8L`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, DIP*7.62mm*.
 * @see http://codemercs.com/downloads/joywarrior/JW_Datasheet.pdf
 * Keywords: joystick controller, 8 bit, 4 axis.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class JoyWarrior24A8L extends Component.withPins({
  /** Physical pin 1: X0/B0; input. */
  "X0/B0": "1",
  /** Physical pin 2: X1/B1; input. */
  "X1/B1": "2",
  /** Physical pin 3: X2/B2; input. */
  "X2/B2": "3",
  /** Physical pin 4: X3/B3; input. */
  "X3/B3": "4",
  /** Physical pin 5: ~{CS}; output. */
  "~{CS}": "5",
  /** Physical pin 6: Din; input. */
  "Din": "6",
  /** Physical pin 7: Aux0; output. */
  "Aux0": "7",
  /** Physical pin 8: Aux2; output. */
  "Aux2": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: PullToGnd; input. */
  "PullToGnd": "10",
  /** Physical pin 11: VREG; power_out. */
  "VREG": "11",
  /** Physical pin 12: Direct; input. */
  "Direct": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: D-; bidirectional. */
  "D-": "15",
  /** Physical pin 16: D+; bidirectional. */
  "D+": "16",
  /** Physical pin 17: Aux3; output. */
  "Aux3": "17",
  /** Physical pin 18: Aux1; output. */
  "Aux1": "18",
  /** Physical pin 19: Dout; output. */
  "Dout": "19",
  /** Physical pin 20: SCLK; output. */
  "SCLK": "20",
  /** Physical pin 21: Y3/B7; input. */
  "Y3/B7": "21",
  /** Physical pin 22: Y2/B6; input. */
  "Y2/B6": "22",
  /** Physical pin 23: Y1/B5; input. */
  "Y1/B5": "23",
  /** Physical pin 24: Y0/B4; input. */
  "Y0/B4": "24",
}) {
  override schema = "Interface_HID:JoyWarrior24A8L";
  override referencePrefix = "U";
}

/**
 * SpinWarrior, 3 16bit absolute position rotary encoders, 6 digital inputs, DIP-24/SOIC-24
 *
 * KiCad symbol: `Interface_HID:SpinWarrior24A3`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*, SOIC*7.5x15.4mm*P1.27mm*.
 * @see http://www.codemercs.com/downloads/spinwarrior/SW_Datasheet.pdf
 * Keywords: 16bit absolute position USB rotary encoder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SpinWarrior24A3 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: B0; input. */
  "B0": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: B1; input. */
  "B1": "4",
  /** Physical pin 5: In0; input. */
  "In0": "5",
  /** Physical pin 6: In2; input. */
  "In2": "6",
  /** Physical pin 7: In4; input. */
  "In4": "7",
  /** Physical pin 8: N2; input. */
  "N2": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: PullToGND; input. */
  "PullToGND": "10",
  /** Physical pin 11: Vreg; power_out. */
  "Vreg": "11",
  /** Physical pin 12: Power; input. */
  "Power": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
  /** Physical pin 15: D-; bidirectional. */
  "D-": "15",
  /** Physical pin 16: D+; bidirectional. */
  "D+": "16",
  /** Physical pin 17: ~{EN}; open_collector. */
  "~{EN}": "17",
  /** Physical pin 18: In5; input. */
  "In5": "18",
  /** Physical pin 19: In3; input. */
  "In3": "19",
  /** Physical pin 20: In1; input. */
  "In1": "20",
  /** Physical pin 21: N1; input. */
  "N1": "21",
  /** Physical pin 22: N0; input. */
  "N0": "22",
  /** Physical pin 23: B2; input. */
  "B2": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
}) {
  override schema = "Interface_HID:SpinWarrior24A3";
  override referencePrefix = "U";
}

/**
 * SpinWarrior, 4 8bit relative position rotary encoders, 7 switches, DIP-24/SOIC-24
 *
 * KiCad symbol: `Interface_HID:SpinWarrior24R4`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*, SOIC*7.5x15.4mm*P1.27mm*.
 * @see http://www.codemercs.com/downloads/spinwarrior/SW_Datasheet.pdf
 * Keywords: 8bit relative position USB rotary encoder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SpinWarrior24R4 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: B0; input. */
  "B0": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: B1; input. */
  "B1": "4",
  /** Physical pin 5: Sw0; input. */
  "Sw0": "5",
  /** Physical pin 6: Sw2; input. */
  "Sw2": "6",
  /** Physical pin 7: Sw4; input. */
  "Sw4": "7",
  /** Physical pin 8: Sw6; input. */
  "Sw6": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: PullToGND; input. */
  "PullToGND": "10",
  /** Physical pin 11: Vreg; power_out. */
  "Vreg": "11",
  /** Physical pin 12: Power; input. */
  "Power": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
  /** Physical pin 15: D-; bidirectional. */
  "D-": "15",
  /** Physical pin 16: D+; bidirectional. */
  "D+": "16",
  /** Physical pin 17: ~{EN}; open_collector. */
  "~{EN}": "17",
  /** Physical pin 18: Sw5; input. */
  "Sw5": "18",
  /** Physical pin 19: Sw3; input. */
  "Sw3": "19",
  /** Physical pin 20: Sw1; input. */
  "Sw1": "20",
  /** Physical pin 21: B3; input. */
  "B3": "21",
  /** Physical pin 22: A3; input. */
  "A3": "22",
  /** Physical pin 23: B2; input. */
  "B2": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
}) {
  override schema = "Interface_HID:SpinWarrior24R4";
  override referencePrefix = "U";
}

/**
 * SpinWarrior, 6 8bit relative position rotary encoders, 3 switches, DIP-24/SOIC-24
 *
 * KiCad symbol: `Interface_HID:SpinWarrior24R6`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*, SOIC*7.5x15.4mm*P1.27mm*.
 * @see http://www.codemercs.com/downloads/spinwarrior/SW_Datasheet.pdf
 * Keywords: 8bit relative position USB rotary encoder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SpinWarrior24R6 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: B0; input. */
  "B0": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: B1; input. */
  "B1": "4",
  /** Physical pin 5: Sw0; input. */
  "Sw0": "5",
  /** Physical pin 6: Sw2; input. */
  "Sw2": "6",
  /** Physical pin 7: B4; input. */
  "B4": "7",
  /** Physical pin 8: B5; input. */
  "B5": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: PullToGND; input. */
  "PullToGND": "10",
  /** Physical pin 11: Vreg; power_out. */
  "Vreg": "11",
  /** Physical pin 12: Power; input. */
  "Power": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
  /** Physical pin 15: D-; bidirectional. */
  "D-": "15",
  /** Physical pin 16: D+; bidirectional. */
  "D+": "16",
  /** Physical pin 17: ~{EN}; open_collector. */
  "~{EN}": "17",
  /** Physical pin 18: A5; input. */
  "A5": "18",
  /** Physical pin 19: A4; input. */
  "A4": "19",
  /** Physical pin 20: Sw1; input. */
  "Sw1": "20",
  /** Physical pin 21: B3; input. */
  "B3": "21",
  /** Physical pin 22: A3; input. */
  "A3": "22",
  /** Physical pin 23: B2; input. */
  "B2": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
}) {
  override schema = "Interface_HID:SpinWarrior24R6";
  override referencePrefix = "U";
}

