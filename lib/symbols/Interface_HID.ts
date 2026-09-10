// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * JoyWarrior 10bit, 3 axis, joystick controller, DIP-24/SOIC-24
 *
 * KiCad symbol: `Interface_HID:JoyWarrior24A10L`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, DIP*7.62mm*.
 * @see http://codemercs.com/downloads/joywarrior/JW_Datasheet.pdf
 * Keywords: joystick controller 10bit 3-axis.
 */
export class JoyWarrior24A10L extends Component.withPins({
  "X0/B0": "1",
  "X1/B1": "2",
  "X2/B2": "3",
  "X3/B3": "4",
  "~{CS}": "5",
  "Din": "6",
  "Aux0": "7",
  "Aux2": "8",
  "GND": "9",
  "PullToGnd": "10",
  "VREG": "11",
  "Direct": "12",
  "NC": "13",
  "VCC": "14",
  "D-": "15",
  "D+": "16",
  "Aux3": "17",
  "Aux1": "18",
  "Dout": "19",
  "SCLK": "20",
  "Y3/B7": "21",
  "Y2/B6": "22",
  "Y1/B5": "23",
  "Y0/B4": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "X0/B0": "input", "X1/B1": "input", "X2/B2": "input", "X3/B3": "input", "~{CS}": "output", Din: "input", Aux0: "output", Aux2: "output", GND: "power_in", PullToGnd: "input", VREG: "power_out", Direct: "input", NC: "no_connect", VCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", Aux3: "output", Aux1: "output", Dout: "output", SCLK: "output", "Y3/B7": "input", "Y2/B6": "input", "Y1/B5": "input", "Y0/B4": "input", ...opts.pinTypes } });
  }
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
 */
export class JoyWarrior24A8L extends Component.withPins({
  "X0/B0": "1",
  "X1/B1": "2",
  "X2/B2": "3",
  "X3/B3": "4",
  "~{CS}": "5",
  "Din": "6",
  "Aux0": "7",
  "Aux2": "8",
  "GND": "9",
  "PullToGnd": "10",
  "VREG": "11",
  "Direct": "12",
  "NC": "13",
  "VCC": "14",
  "D-": "15",
  "D+": "16",
  "Aux3": "17",
  "Aux1": "18",
  "Dout": "19",
  "SCLK": "20",
  "Y3/B7": "21",
  "Y2/B6": "22",
  "Y1/B5": "23",
  "Y0/B4": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "X0/B0": "input", "X1/B1": "input", "X2/B2": "input", "X3/B3": "input", "~{CS}": "output", Din: "input", Aux0: "output", Aux2: "output", GND: "power_in", PullToGnd: "input", VREG: "power_out", Direct: "input", NC: "no_connect", VCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", Aux3: "output", Aux1: "output", Dout: "output", SCLK: "output", "Y3/B7": "input", "Y2/B6": "input", "Y1/B5": "input", "Y0/B4": "input", ...opts.pinTypes } });
  }
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
 */
export class SpinWarrior24A3 extends Component.withPins({
  "A0": "1",
  "B0": "2",
  "A1": "3",
  "B1": "4",
  "In0": "5",
  "In2": "6",
  "In4": "7",
  "N2": "8",
  "GND": "9",
  "PullToGND": "10",
  "Vreg": "11",
  "Power": "12",
  "NC": "13",
  "Vcc": "14",
  "D-": "15",
  "D+": "16",
  "~{EN}": "17",
  "In5": "18",
  "In3": "19",
  "In1": "20",
  "N1": "21",
  "N0": "22",
  "B2": "23",
  "A2": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", B0: "input", A1: "input", B1: "input", In0: "input", In2: "input", In4: "input", N2: "input", GND: "power_in", PullToGND: "input", Vreg: "power_out", Power: "input", NC: "no_connect", Vcc: "power_in", "D-": "bidirectional", "D+": "bidirectional", "~{EN}": "open_collector", In5: "input", In3: "input", In1: "input", N1: "input", N0: "input", B2: "input", A2: "input", ...opts.pinTypes } });
  }
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
 */
export class SpinWarrior24R4 extends Component.withPins({
  "A0": "1",
  "B0": "2",
  "A1": "3",
  "B1": "4",
  "Sw0": "5",
  "Sw2": "6",
  "Sw4": "7",
  "Sw6": "8",
  "GND": "9",
  "PullToGND": "10",
  "Vreg": "11",
  "Power": "12",
  "NC": "13",
  "Vcc": "14",
  "D-": "15",
  "D+": "16",
  "~{EN}": "17",
  "Sw5": "18",
  "Sw3": "19",
  "Sw1": "20",
  "B3": "21",
  "A3": "22",
  "B2": "23",
  "A2": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", B0: "input", A1: "input", B1: "input", Sw0: "input", Sw2: "input", Sw4: "input", Sw6: "input", GND: "power_in", PullToGND: "input", Vreg: "power_out", Power: "input", NC: "no_connect", Vcc: "power_in", "D-": "bidirectional", "D+": "bidirectional", "~{EN}": "open_collector", Sw5: "input", Sw3: "input", Sw1: "input", B3: "input", A3: "input", B2: "input", A2: "input", ...opts.pinTypes } });
  }
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
 */
export class SpinWarrior24R6 extends Component.withPins({
  "A0": "1",
  "B0": "2",
  "A1": "3",
  "B1": "4",
  "Sw0": "5",
  "Sw2": "6",
  "B4": "7",
  "B5": "8",
  "GND": "9",
  "PullToGND": "10",
  "Vreg": "11",
  "Power": "12",
  "NC": "13",
  "Vcc": "14",
  "D-": "15",
  "D+": "16",
  "~{EN}": "17",
  "A5": "18",
  "A4": "19",
  "Sw1": "20",
  "B3": "21",
  "A3": "22",
  "B2": "23",
  "A2": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", B0: "input", A1: "input", B1: "input", Sw0: "input", Sw2: "input", B4: "input", B5: "input", GND: "power_in", PullToGND: "input", Vreg: "power_out", Power: "input", NC: "no_connect", Vcc: "power_in", "D-": "bidirectional", "D+": "bidirectional", "~{EN}": "open_collector", A5: "input", A4: "input", Sw1: "input", B3: "input", A3: "input", B2: "input", A2: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_HID:SpinWarrior24R6";
  override referencePrefix = "U";
}
