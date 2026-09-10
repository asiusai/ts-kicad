// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * RJ connector, 4P2C (4 positions 2 connected)
 *
 * KiCad symbol: `Connector:4P2C`. Reference prefix: `J`.
 * Footprint filters: 4P2C*.
 * Keywords: 4P2C RJ socket connector.
 */
export class _4P2C extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:4P2C";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P2C (4 positions 2 connected), Shielded
 *
 * KiCad symbol: `Connector:4P2C_Shielded`. Reference prefix: `J`.
 * Footprint filters: 4P2C*.
 * Keywords: 4P2C RJ socket connector.
 */
export class _4P2C_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:4P2C_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P4C (4 positions 4 connected), RJ9/RJ10/RJ22
 *
 * KiCad symbol: `Connector:4P4C`. Reference prefix: `J`.
 * Footprint filters: 4P4C*, RJ9*, RJ10*, RJ22*.
 * Keywords: 4P4C RJ socket connector.
 */
export class _4P4C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:4P4C";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P4C (4 positions 4 connected), RJ9/RJ10/RJ22, Shielded
 *
 * KiCad symbol: `Connector:4P4C_Shielded`. Reference prefix: `J`.
 * Footprint filters: 4P4C*, RJ9*, RJ10*, RJ22*.
 * Keywords: 4P4C RJ socket connector.
 */
export class _4P4C_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:4P4C_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P2C (6 positions 2 connected), RJ11
 *
 * KiCad symbol: `Connector:6P2C`. Reference prefix: `J`.
 * Footprint filters: 6P2C*, RJ11*.
 * Keywords: 6P2C RJ socket connector.
 */
export class _6P2C extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:6P2C";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P2C (6 positions 2 connected), RJ11, Shielded
 *
 * KiCad symbol: `Connector:6P2C_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P2C*, RJ11*.
 * Keywords: 6P2C RJ socket connector.
 */
export class _6P2C_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:6P2C_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P4C (6 positions 4 connected), RJ13/RJ14
 *
 * KiCad symbol: `Connector:6P4C`. Reference prefix: `J`.
 * Footprint filters: 6P4C*, RJ13*, RJ14*.
 * Keywords: 6P4C RJ socket connector.
 */
export class _6P4C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:6P4C";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P4C (6 positions 4 connected), RJ13/RJ14, Shielded
 *
 * KiCad symbol: `Connector:6P4C_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P4C*, RJ13*, RJ14*.
 * Keywords: 6P4C RJ socket connector.
 */
export class _6P4C_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:6P4C_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P6C (6 positions 6 connected), RJ12/RJ18/RJ25
 *
 * KiCad symbol: `Connector:6P6C`. Reference prefix: `J`.
 * Footprint filters: 6P6C*, RJ12*, RJ18*, RJ25*.
 * Keywords: 6P6C RJ socket connector.
 */
export class _6P6C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:6P6C";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P6C (6 positions 6 connected), RJ12/RJ18/RJ25, Shielded
 *
 * KiCad symbol: `Connector:6P6C_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P6C*, RJ12*, RJ18*, RJ25*.
 * Keywords: 6P6C RJ socket connector.
 */
export class _6P6C_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:6P6C_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P4C (8 positions 4 connected), RJ38/RJ48
 *
 * KiCad symbol: `Connector:8P4C`. Reference prefix: `J`.
 * Footprint filters: 8P4C*, RJ38*, RJ48*.
 * Keywords: 8P4C RJ socket connector.
 */
export class _8P4C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:8P4C";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P4C (8 positions 4 connected), RJ38/RJ48, Shielded
 *
 * KiCad symbol: `Connector:8P4C_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P4C*, RJ38*, RJ48*.
 * Keywords: 8P4C RJ socket connector.
 */
export class _8P4C_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:8P4C_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), RJ31/RJ32/RJ33/RJ34/RJ35/RJ41/RJ45/RJ49/RJ61
 *
 * KiCad symbol: `Connector:8P8C`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class _8P8C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:8P8C";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), two LEDs, RJ45
 *
 * KiCad symbol: `Connector:8P8C_LED`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ45*.
 * Keywords: 8P8C RJ socket connector led.
 */
export class _8P8C_LED extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:8P8C_LED";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), two LEDs, RJ45, Shielded
 *
 * KiCad symbol: `Connector:8P8C_LED_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ45*.
 * Keywords: 8P8C RJ socket connector led.
 */
export class _8P8C_LED_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:8P8C_LED_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), two LEDs, RJ45, Shielded, two ports
 *
 * KiCad symbol: `Connector:8P8C_LED_Shielded_x2`. Reference prefix: `J`.
 * Footprint filters: 8P8C*02*, RJ45*02*.
 * Keywords: 8P8C RJ socket connector led dual.
 */
export class _8P8C_LED_Shielded_x2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", PSH: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:8P8C_LED_Shielded_x2";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), RJ31/RJ32/RJ33/RJ34/RJ35/RJ41/RJ45/RJ49/RJ61, Shielded
 *
 * KiCad symbol: `Connector:8P8C_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class _8P8C_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:8P8C_Shielded";
  override referencePrefix = "J";
}

/**
 * ATX Power supply 20pins
 *
 * KiCad symbol: `Connector:ATX-20`. Reference prefix: `J`.
 * Footprint filters: *Mini?Fit*2x10*Vertical*, *Mini?Fit*2x10*Horizontal*.
 * @see https://web.aub.edu.lb/pub/docs/atx_201.pdf#page=20
 * Keywords: ATX PSU.
 */
export class ATX_20 extends Component.withPins({
  "+3.3V_1": "1",
  "+3.3V_2": "2",
  "GND_3": "3",
  "+5V_4": "4",
  "GND_5": "5",
  "+5V_6": "6",
  "GND_7": "7",
  "PWR_OK": "8",
  "+5VSB": "9",
  "+12V": "10",
  "+3.3V_11": "11",
  "-12V": "12",
  "GND_13": "13",
  "PS_ON#": "14",
  "GND_15": "15",
  "GND_16": "16",
  "GND_17": "17",
  "-5V/NC": "18",
  "+5V_19": "19",
  "+5V_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+3.3V_1": "power_out", "+3.3V_2": "passive", GND_3: "power_out", "+5V_4": "power_out", GND_5: "passive", "+5V_6": "passive", GND_7: "passive", PWR_OK: "output", "+5VSB": "power_out", "+12V": "power_out", "+3.3V_11": "passive", "-12V": "power_out", GND_13: "passive", "PS_ON#": "open_collector", GND_15: "passive", GND_16: "passive", GND_17: "passive", "-5V/NC": "power_out", "+5V_19": "passive", "+5V_20": "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:ATX-20";
  override referencePrefix = "J";
}

/**
 * ATX Power supply 24pins
 *
 * KiCad symbol: `Connector:ATX-24`. Reference prefix: `J`.
 * Footprint filters: *Mini?Fit*2x12*Vertical*, *Mini?Fit*2x12*Horizontal*.
 * @see https://www.intel.com/content/dam/www/public/us/en/documents/guides/power-supply-design-guide-june.pdf#page=33
 * Keywords: ATX PSU.
 */
export class ATX_24 extends Component.withPins({
  "+3.3V_1": "1",
  "+3.3V_2": "2",
  "GND_3": "3",
  "+5V_4": "4",
  "GND_5": "5",
  "+5V_6": "6",
  "GND_7": "7",
  "PWR_OK": "8",
  "+5VSB": "9",
  "+12V_10": "10",
  "+12V_11": "11",
  "+3.3V_12": "12",
  "+3.3V_13": "13",
  "-12V": "14",
  "GND_15": "15",
  "PS_ON#": "16",
  "GND_17": "17",
  "GND_18": "18",
  "GND_19": "19",
  "NC": "20",
  "+5V_21": "21",
  "+5V_22": "22",
  "+5V_23": "23",
  "GND_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+3.3V_1": "power_out", "+3.3V_2": "passive", GND_3: "power_out", "+5V_4": "power_out", GND_5: "passive", "+5V_6": "passive", GND_7: "passive", PWR_OK: "output", "+5VSB": "power_out", "+12V_10": "power_out", "+12V_11": "passive", "+3.3V_12": "passive", "+3.3V_13": "passive", "-12V": "power_out", GND_15: "passive", "PS_ON#": "open_collector", GND_17: "passive", GND_18: "passive", GND_19: "passive", NC: "no_connect", "+5V_21": "passive", "+5V_22": "passive", "+5V_23": "passive", GND_24: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:ATX-24";
  override referencePrefix = "J";
}

/**
 * Atmel 10-pin ISP connector
 *
 * KiCad symbol: `Connector:AVR-ISP-10`. Reference prefix: `J`.
 * Footprint filters: IDC?Header*2x05*, Pin?Header*2x05*.
 * Keywords: AVR ISP Connector.
 */
export class AVR_ISP_10 extends Component.withPins({
  "MOSI": "1",
  "VCC": "2",
  "NC": "3",
  "GND_4": "4",
  "~{RST}": "5",
  "GND_6": "6",
  "SCK": "7",
  "GND_8": "8",
  "MISO": "9",
  "GND_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { MOSI: "passive", VCC: "passive", NC: "no_connect", GND_4: "passive", "~{RST}": "passive", GND_6: "passive", SCK: "passive", GND_8: "passive", MISO: "passive", GND_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:AVR-ISP-10";
  override referencePrefix = "J";
}

/**
 * Atmel 6-pin ISP connector
 *
 * KiCad symbol: `Connector:AVR-ISP-6`. Reference prefix: `J`.
 * Footprint filters: IDC?Header*2x03*, Pin?Header*2x03*.
 * Keywords: AVR ISP Connector.
 */
export class AVR_ISP_6 extends Component.withPins({
  "MISO": "1",
  "VCC": "2",
  "SCK": "3",
  "MOSI": "4",
  "~{RST}": "5",
  "GND": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { MISO: "passive", VCC: "passive", SCK: "passive", MOSI: "passive", "~{RST}": "passive", GND: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:AVR-ISP-6";
  override referencePrefix = "J";
}

/**
 * Atmel 10-pin JTAG connector
 *
 * KiCad symbol: `Connector:AVR-JTAG-10`. Reference prefix: `J`.
 * Footprint filters: IDC?Header*2x05*, Pin?Header*2x05*.
 * Keywords: AVR JTAG Connector.
 */
export class AVR_JTAG_10 extends Component.withPins({
  "TCK": "1",
  "GND_2": "2",
  "TDO": "3",
  "VREF": "4",
  "TMS": "5",
  "~{SRST}": "6",
  "VCC": "7",
  "~{TRST}": "8",
  "TDI": "9",
  "GND_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TCK: "passive", GND_2: "passive", TDO: "passive", VREF: "passive", TMS: "passive", "~{SRST}": "passive", VCC: "passive", "~{TRST}": "passive", TDI: "passive", GND_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:AVR-JTAG-10";
  override referencePrefix = "J";
}

/**
 * Atmel 6-pin PDI connector
 *
 * KiCad symbol: `Connector:AVR-PDI-6`. Reference prefix: `J`.
 * Footprint filters: IDC?Header*2x03*, Pin?Header*2x03*.
 * Keywords: AVR PDI Connector.
 */
export class AVR_PDI_6 extends Component.withPins({
  "DATA": "1",
  "VCC": "2",
  "NC_3": "3",
  "NC_4": "4",
  "CLOCK": "5",
  "GND": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DATA: "passive", VCC: "passive", NC_3: "no_connect", NC_4: "no_connect", CLOCK: "passive", GND: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:AVR-PDI-6";
  override referencePrefix = "J";
}

/**
 * Atmel 6-pin TPI connector
 *
 * KiCad symbol: `Connector:AVR-TPI-6`. Reference prefix: `J`.
 * Footprint filters: IDC?Header*2x03*, Pin?Header*2x03*.
 * Keywords: AVR TPI Connector.
 */
export class AVR_TPI_6 extends Component.withPins({
  "DATA": "1",
  "VCC": "2",
  "CLOCK": "3",
  "NC": "4",
  "~{RST}": "5",
  "GND": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DATA: "passive", VCC: "passive", CLOCK: "passive", NC: "no_connect", "~{RST}": "passive", GND: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:AVR-TPI-6";
  override referencePrefix = "J";
}

/**
 * Atmel 6-pin UPDI connector
 *
 * KiCad symbol: `Connector:AVR-UPDI-6`. Reference prefix: `J`.
 * Footprint filters: IDC?Header*2x03*, Pin?Header*2x03*.
 * @see https://www.microchip.com/webdoc/GUID-9D10622A-5C16-4405-B092-1BDD437B4976/index.html?GUID-9B349315-2842-4189-B88C-49F4E1055D7F
 * Keywords: AVR UPDI Connector.
 */
export class AVR_UPDI_6 extends Component.withPins({
  "DATA": "1",
  "VCC": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "GND": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DATA: "passive", VCC: "passive", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", GND: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:AVR-UPDI-6";
  override referencePrefix = "J";
}

/**
 * DC Barrel Jack
 *
 * KiCad symbol: `Connector:Barrel_Jack`. Reference prefix: `J`.
 * Footprint filters: BarrelJack*.
 * Keywords: DC power barrel jack connector.
 */
export class Barrel_Jack extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Barrel_Jack";
  override referencePrefix = "J";
}

/**
 * DC Barrel Jack with a mounting pin
 *
 * KiCad symbol: `Connector:Barrel_Jack_MountingPin`. Reference prefix: `J`.
 * Footprint filters: BarrelJack*.
 * Keywords: DC power barrel jack connector.
 */
export class Barrel_Jack_MountingPin extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "MountPin": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", MountPin: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Barrel_Jack_MountingPin";
  override referencePrefix = "J";
}

/**
 * DC Barrel Jack with an internal switch
 *
 * KiCad symbol: `Connector:Barrel_Jack_Switch`. Reference prefix: `J`.
 * Footprint filters: BarrelJack*.
 * Keywords: DC power barrel jack connector.
 */
export class Barrel_Jack_Switch extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Barrel_Jack_Switch";
  override referencePrefix = "J";
}

/**
 * DC Barrel Jack with an internal switch and a mounting pin
 *
 * KiCad symbol: `Connector:Barrel_Jack_Switch_MountingPin`. Reference prefix: `J`.
 * Footprint filters: BarrelJack*.
 * Keywords: DC power barrel jack connector.
 */
export class Barrel_Jack_Switch_MountingPin extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "MountPin": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", MountPin: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Barrel_Jack_Switch_MountingPin";
  override referencePrefix = "J";
}

/**
 * DC Barrel Jack with an internal switch
 *
 * KiCad symbol: `Connector:Barrel_Jack_Switch_Pin3Ring`. Reference prefix: `J`.
 * Footprint filters: BarrelJack*.
 * Keywords: DC power barrel jack connector.
 */
export class Barrel_Jack_Switch_Pin3Ring extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Barrel_Jack_Switch_Pin3Ring";
  override referencePrefix = "J";
}

/**
 * 16-bit ISA-AT bus connector
 *
 * KiCad symbol: `Connector:Bus_ISA_16bit`. Reference prefix: `J`.
 * @see https://en.wikipedia.org/wiki/Industry_Standard_Architecture
 * Keywords: ISA.
 */
export class Bus_ISA_16bit extends Component.withPins({
  "GND_1": "1",
  "RESET": "2",
  "+5V_3": "3",
  "IRQ2": "4",
  "-5V": "5",
  "DRQ2": "6",
  "-12V": "7",
  "UNUSED": "8",
  "+12V": "9",
  "GND_10": "10",
  "~{SMEMW}": "11",
  "~{SMEMR}": "12",
  "~{IOW}": "13",
  "~{IOR}": "14",
  "~{DACK3}": "15",
  "DRQ3": "16",
  "~{DACK1}": "17",
  "DRQ1": "18",
  "~{REFRESH}": "19",
  "CLK": "20",
  "IRQ7": "21",
  "IRQ6": "22",
  "IRQ5": "23",
  "IRQ4": "24",
  "IRQ3": "25",
  "~{DACK2}": "26",
  "TC": "27",
  "ALE": "28",
  "VCC": "29",
  "OSC": "30",
  "GND_31": "31",
  "IO": "32",
  "DB7": "33",
  "DB6": "34",
  "DB5": "35",
  "DB4": "36",
  "DB3": "37",
  "DB2": "38",
  "DB1": "39",
  "DB0": "40",
  "IO_READY": "41",
  "AEN": "42",
  "BA19": "43",
  "BA18": "44",
  "BA17": "45",
  "BA16": "46",
  "BA15": "47",
  "BA14": "48",
  "BA13": "49",
  "BA12": "50",
  "BA11": "51",
  "BA10": "52",
  "BA09": "53",
  "BA08": "54",
  "BA07": "55",
  "BA06": "56",
  "BA05": "57",
  "BA04": "58",
  "BA03": "59",
  "BA02": "60",
  "BA01": "61",
  "BA00": "62",
  "~{MEMCS16}": "63",
  "~{IOCS16}": "64",
  "IRQ10": "65",
  "IRQ11": "66",
  "IRQ12": "67",
  "IRQ15": "68",
  "IRQ14": "69",
  "~{DACK0}": "70",
  "DRQ0": "71",
  "~{DACK5}": "72",
  "DRQ5": "73",
  "~{DACK6}": "74",
  "DRQ6": "75",
  "~{DACK7}": "76",
  "DRQ7": "77",
  "+5V_78": "78",
  "MASTER": "79",
  "GND_80": "80",
  "SBHE": "81",
  "LA23": "82",
  "LA22": "83",
  "LA21": "84",
  "LA20": "85",
  "LA19": "86",
  "LA18": "87",
  "LA17": "88",
  "~{MEMR}": "89",
  "~{MEMW}": "90",
  "D8": "91",
  "D9": "92",
  "D10": "93",
  "D11": "94",
  "D12": "95",
  "D13": "96",
  "D14": "97",
  "D15": "98",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", RESET: "output", "+5V_3": "power_in", IRQ2: "passive", "-5V": "power_in", DRQ2: "passive", "-12V": "power_in", UNUSED: "passive", "+12V": "power_in", GND_10: "power_in", "~{SMEMW}": "output", "~{SMEMR}": "output", "~{IOW}": "output", "~{IOR}": "output", "~{DACK3}": "passive", DRQ3: "passive", "~{DACK1}": "passive", DRQ1: "passive", "~{REFRESH}": "passive", CLK: "output", IRQ7: "passive", IRQ6: "passive", IRQ5: "passive", IRQ4: "passive", IRQ3: "passive", "~{DACK2}": "passive", TC: "passive", ALE: "output", VCC: "power_in", OSC: "output", GND_31: "power_in", IO: "passive", DB7: "tri_state", DB6: "tri_state", DB5: "tri_state", DB4: "tri_state", DB3: "tri_state", DB2: "tri_state", DB1: "tri_state", DB0: "tri_state", IO_READY: "passive", AEN: "output", BA19: "tri_state", BA18: "tri_state", BA17: "tri_state", BA16: "tri_state", BA15: "tri_state", BA14: "tri_state", BA13: "tri_state", BA12: "tri_state", BA11: "tri_state", BA10: "tri_state", BA09: "tri_state", BA08: "tri_state", BA07: "tri_state", BA06: "tri_state", BA05: "tri_state", BA04: "tri_state", BA03: "tri_state", BA02: "tri_state", BA01: "tri_state", BA00: "tri_state", "~{MEMCS16}": "passive", "~{IOCS16}": "passive", IRQ10: "passive", IRQ11: "passive", IRQ12: "passive", IRQ15: "passive", IRQ14: "passive", "~{DACK0}": "output", DRQ0: "passive", "~{DACK5}": "output", DRQ5: "passive", "~{DACK6}": "output", DRQ6: "passive", "~{DACK7}": "output", DRQ7: "passive", "+5V_78": "power_in", MASTER: "passive", GND_80: "power_in", SBHE: "passive", LA23: "passive", LA22: "passive", LA21: "passive", LA20: "passive", LA19: "passive", LA18: "passive", LA17: "passive", "~{MEMR}": "output", "~{MEMW}": "output", D8: "tri_state", D9: "tri_state", D10: "tri_state", D11: "tri_state", D12: "tri_state", D13: "tri_state", D14: "tri_state", D15: "tri_state", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_ISA_16bit";
  override referencePrefix = "J";
}

/**
 * 8-bit ISA-PC bus connector
 *
 * KiCad symbol: `Connector:Bus_ISA_8bit`. Reference prefix: `J`.
 * @see https://en.wikipedia.org/wiki/Industry_Standard_Architecture
 * Keywords: ISA.
 */
export class Bus_ISA_8bit extends Component.withPins({
  "GND_1": "1",
  "RESET": "2",
  "VCC_3": "3",
  "IRQ2": "4",
  "-5V": "5",
  "DRQ2": "6",
  "-12V": "7",
  "UNUSED": "8",
  "+12V": "9",
  "GND_10": "10",
  "~{SMEMW}": "11",
  "~{SMEMR}": "12",
  "~{IOW}": "13",
  "~{IOR}": "14",
  "~{DACK3}": "15",
  "DRQ3": "16",
  "~{DACK1}": "17",
  "DRQ1": "18",
  "~{DACK0}": "19",
  "CLK": "20",
  "IRQ7": "21",
  "IRQ6": "22",
  "IRQ5": "23",
  "IRQ4": "24",
  "IRQ3": "25",
  "~{DACK2}": "26",
  "TC": "27",
  "ALE": "28",
  "VCC_29": "29",
  "OSC": "30",
  "GND_31": "31",
  "IO": "32",
  "DB7": "33",
  "DB6": "34",
  "DB5": "35",
  "DB4": "36",
  "DB3": "37",
  "DB2": "38",
  "DB1": "39",
  "DB0": "40",
  "IO_READY": "41",
  "AEN": "42",
  "BA19": "43",
  "BA18": "44",
  "BA17": "45",
  "BA16": "46",
  "BA15": "47",
  "BA14": "48",
  "BA13": "49",
  "BA12": "50",
  "BA11": "51",
  "BA10": "52",
  "BA09": "53",
  "BA08": "54",
  "BA07": "55",
  "BA06": "56",
  "BA05": "57",
  "BA04": "58",
  "BA03": "59",
  "BA02": "60",
  "BA01": "61",
  "BA00": "62",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", RESET: "output", VCC_3: "power_in", IRQ2: "passive", "-5V": "power_in", DRQ2: "passive", "-12V": "power_in", UNUSED: "passive", "+12V": "power_in", GND_10: "power_in", "~{SMEMW}": "output", "~{SMEMR}": "output", "~{IOW}": "output", "~{IOR}": "output", "~{DACK3}": "passive", DRQ3: "passive", "~{DACK1}": "passive", DRQ1: "passive", "~{DACK0}": "passive", CLK: "output", IRQ7: "passive", IRQ6: "passive", IRQ5: "passive", IRQ4: "passive", IRQ3: "passive", "~{DACK2}": "passive", TC: "passive", ALE: "output", VCC_29: "power_in", OSC: "output", GND_31: "power_in", IO: "passive", DB7: "tri_state", DB6: "tri_state", DB5: "tri_state", DB4: "tri_state", DB3: "tri_state", DB2: "tri_state", DB1: "tri_state", DB0: "tri_state", IO_READY: "passive", AEN: "output", BA19: "tri_state", BA18: "tri_state", BA17: "tri_state", BA16: "tri_state", BA15: "tri_state", BA14: "tri_state", BA13: "tri_state", BA12: "tri_state", BA11: "tri_state", BA10: "tri_state", BA09: "tri_state", BA08: "tri_state", BA07: "tri_state", BA06: "tri_state", BA05: "tri_state", BA04: "tri_state", BA03: "tri_state", BA02: "tri_state", BA01: "tri_state", BA00: "tri_state", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_ISA_8bit";
  override referencePrefix = "J";
}

/**
 * M.2 Socket 1-DP Mechanical Key A
 *
 * KiCad symbol: `Connector:Bus_M.2_Socket_A`. Reference prefix: `J`.
 * Footprint filters: *M*2*A*.
 * @see https://web.archive.org/web/20200613074028/http://read.pudn.com/downloads794/doc/project/3133918/PCIe_M.2_Electromechanical_Spec_Rev1.0_Final_11012013_RS_Clean.pdf#page=148
 * Keywords: M2 NGNF PCI-E.
 */
export class Bus_M_2_Socket_A extends Component.withPins({
  "GND_1": "1",
  "3.3V_2": "2",
  "USB_D+": "3",
  "3.3V_4": "4",
  "USB_D-": "5",
  "~{LED_1}": "6",
  "GND_7": "7",
  "~{LED_2}": "16",
  "MLDIR_Sense": "17",
  "GND_18": "18",
  "DP_ML3n": "19",
  "DP_AUXn": "20",
  "DP_ML3p": "21",
  "DP_AUXp": "22",
  "GND_23": "23",
  "GND_24": "24",
  "DP_ML2n": "25",
  "DP_ML1n": "26",
  "DP_ML2p": "27",
  "DP_ML1p": "28",
  "GND_29": "29",
  "GND_30": "30",
  "DP_HPD": "31",
  "DP_ML0n": "32",
  "GND_33": "33",
  "DP_ML0p": "34",
  "PETp0": "35",
  "GND_36": "36",
  "PETn0": "37",
  "VENDOR_DEFINED_38": "38",
  "GND_39": "39",
  "VENDOR_DEFINED_40": "40",
  "PERp0": "41",
  "VENDOR_DEFINED_42": "42",
  "PERn0": "43",
  "COEX3": "44",
  "GND_45": "45",
  "COEX2": "46",
  "REFCLKp0": "47",
  "COEX1": "48",
  "REFCLKn0": "49",
  "SUSCLK": "50",
  "GND_51": "51",
  "~{PERST0}": "52",
  "~{CLKREQ0}": "53",
  "~{W_DISABLE2}": "54",
  "~{PEWAKE0}": "55",
  "~{W_DISABLE1}": "56",
  "GND_57": "57",
  "I2C_DATA": "58",
  "PETp1": "59",
  "I2C_CLK": "60",
  "PETn1": "61",
  "~{ALERT}": "62",
  "GND_63": "63",
  "RESERVED": "64",
  "PERp1": "65",
  "~{PERST1}": "66",
  "PERn1": "67",
  "~{CLKREQ1}": "68",
  "GND_69": "69",
  "~{PEWAKE1}": "70",
  "REFCLKp1": "71",
  "3.3V_72": "72",
  "REFCLKn1": "73",
  "3.3V_74": "74",
  "GND_75": "75",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "3.3V_2": "power_in", "USB_D+": "bidirectional", "3.3V_4": "passive", "USB_D-": "bidirectional", "~{LED_1}": "open_collector", GND_7: "passive", "~{LED_2}": "open_collector", MLDIR_Sense: "input", GND_18: "passive", DP_ML3n: "bidirectional", DP_AUXn: "bidirectional", DP_ML3p: "bidirectional", DP_AUXp: "bidirectional", GND_23: "passive", GND_24: "passive", DP_ML2n: "bidirectional", DP_ML1n: "bidirectional", DP_ML2p: "bidirectional", DP_ML1p: "bidirectional", GND_29: "passive", GND_30: "passive", DP_HPD: "bidirectional", DP_ML0n: "bidirectional", GND_33: "passive", DP_ML0p: "bidirectional", PETp0: "output", GND_36: "passive", PETn0: "output", VENDOR_DEFINED_38: "passive", GND_39: "passive", VENDOR_DEFINED_40: "passive", PERp0: "input", VENDOR_DEFINED_42: "passive", PERn0: "input", COEX3: "bidirectional", GND_45: "passive", COEX2: "bidirectional", REFCLKp0: "output", COEX1: "bidirectional", REFCLKn0: "output", SUSCLK: "output", GND_51: "passive", "~{PERST0}": "output", "~{CLKREQ0}": "bidirectional", "~{W_DISABLE2}": "output", "~{PEWAKE0}": "bidirectional", "~{W_DISABLE1}": "output", GND_57: "passive", I2C_DATA: "bidirectional", PETp1: "output", I2C_CLK: "output", PETn1: "output", "~{ALERT}": "input", GND_63: "passive", RESERVED: "passive", PERp1: "input", "~{PERST1}": "output", PERn1: "input", "~{CLKREQ1}": "bidirectional", GND_69: "passive", "~{PEWAKE1}": "bidirectional", REFCLKp1: "output", "3.3V_72": "passive", REFCLKn1: "output", "3.3V_74": "passive", GND_75: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_M.2_Socket_A";
  override referencePrefix = "J";
}

/**
 * M.2 Socket 2 Mechanical Key B
 *
 * KiCad symbol: `Connector:Bus_M.2_Socket_B`. Reference prefix: `J`.
 * Footprint filters: *M*2*B*.
 * @see https://web.archive.org/web/20200613074028/http://read.pudn.com/downloads794/doc/project/3133918/PCIe_M.2_Electromechanical_Spec_Rev1.0_Final_11012013_RS_Clean.pdf#page=154
 * Keywords: M2 NGNF PCI-E.
 */
export class Bus_M_2_Socket_B extends Component.withPins({
  "CONFIG_3": "1",
  "3.3V_2": "2",
  "GND_3": "3",
  "3.3V_4": "4",
  "GND_5": "5",
  "~{FULL_CARD_POWER_OFF}": "6",
  "USB_D+": "7",
  "~{W_DISABLE1}": "8",
  "USB_D-": "9",
  "GPIO_9/DAS/~{DSS}/~{LED1}": "10",
  "GND_11": "11",
  "GPIO_5": "20",
  "CONFIG_0": "21",
  "GPIO_6": "22",
  "GPIO_11": "23",
  "GPIO_7": "24",
  "DPR": "25",
  "GPIO_10": "26",
  "GND_27": "27",
  "GPIO_8": "28",
  "PERn1/USB3.0-Rx-/SSIC-RxN": "29",
  "UIM-RESET": "30",
  "PERp1/USB3.0-Rx+/SSIC-RxP": "31",
  "UIM-CLK": "32",
  "GND_33": "33",
  "UIM-DATA": "34",
  "PETn1/USB3.0-Tx-/SSIC-TxN": "35",
  "UIM-PWR": "36",
  "PETp1/USB3.0-Tx+/SSIC-TxP": "37",
  "DEVSLP": "38",
  "GND_39": "39",
  "GPIO_0": "40",
  "PERn0/SATA-B+": "41",
  "GPIO_1": "42",
  "PERp0/SATA-B-": "43",
  "GPIO_2": "44",
  "GND_45": "45",
  "GPIO_3": "46",
  "PETn0/SATA-A-": "47",
  "GPIO_4": "48",
  "PETp0/SATA-A+": "49",
  "~{PERST}": "50",
  "GND_51": "51",
  "~{CLKREQ}": "52",
  "REFCLKn": "53",
  "~{PEWAKE}": "54",
  "REFCLKp": "55",
  "NC_56": "56",
  "GND_57": "57",
  "NC_58": "58",
  "ANTCTL0": "59",
  "COEX3": "60",
  "ANTCTL1": "61",
  "COEX2": "62",
  "ANTCTL2": "63",
  "COEX1": "64",
  "ANTCTL3": "65",
  "SIM_DETECT": "66",
  "~{RESET}": "67",
  "SUSCLK": "68",
  "CONFIG_1": "69",
  "3.3V_70": "70",
  "GND_71": "71",
  "3.3V_72": "72",
  "GND_73": "73",
  "3.3V_74": "74",
  "CONFIG_2": "75",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CONFIG_3: "input", "3.3V_2": "power_in", GND_3: "power_in", "3.3V_4": "passive", GND_5: "passive", "~{FULL_CARD_POWER_OFF}": "output", "USB_D+": "bidirectional", "~{W_DISABLE1}": "output", "USB_D-": "bidirectional", "GPIO_9/DAS/~{DSS}/~{LED1}": "bidirectional", GND_11: "passive", GPIO_5: "bidirectional", CONFIG_0: "input", GPIO_6: "bidirectional", GPIO_11: "bidirectional", GPIO_7: "bidirectional", DPR: "output", GPIO_10: "bidirectional", GND_27: "passive", GPIO_8: "bidirectional", "PERn1/USB3.0-Rx-/SSIC-RxN": "input", "UIM-RESET": "input", "PERp1/USB3.0-Rx+/SSIC-RxP": "input", "UIM-CLK": "input", GND_33: "passive", "UIM-DATA": "bidirectional", "PETn1/USB3.0-Tx-/SSIC-TxN": "output", "UIM-PWR": "input", "PETp1/USB3.0-Tx+/SSIC-TxP": "output", DEVSLP: "output", GND_39: "passive", GPIO_0: "bidirectional", "PERn0/SATA-B+": "input", GPIO_1: "bidirectional", "PERp0/SATA-B-": "input", GPIO_2: "bidirectional", GND_45: "passive", GPIO_3: "bidirectional", "PETn0/SATA-A-": "output", GPIO_4: "bidirectional", "PETp0/SATA-A+": "output", "~{PERST}": "output", GND_51: "passive", "~{CLKREQ}": "bidirectional", REFCLKn: "output", "~{PEWAKE}": "bidirectional", REFCLKp: "output", NC_56: "no_connect", GND_57: "passive", NC_58: "no_connect", ANTCTL0: "input", COEX3: "bidirectional", ANTCTL1: "input", COEX2: "bidirectional", ANTCTL2: "input", COEX1: "bidirectional", ANTCTL3: "input", SIM_DETECT: "output", "~{RESET}": "output", SUSCLK: "output", CONFIG_1: "input", "3.3V_70": "passive", GND_71: "passive", "3.3V_72": "passive", GND_73: "passive", "3.3V_74": "passive", CONFIG_2: "input", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_M.2_Socket_B";
  override referencePrefix = "J";
}

/**
 * M.2 Socket 1-SD Mechanical Key E
 *
 * KiCad symbol: `Connector:Bus_M.2_Socket_E`. Reference prefix: `J`.
 * Footprint filters: *M*2*E*.
 * @see https://web.archive.org/web/20200613074028/http://read.pudn.com/downloads794/doc/project/3133918/PCIe_M.2_Electromechanical_Spec_Rev1.0_Final_11012013_RS_Clean.pdf#page=150
 * Keywords: M2 NGNF PCI-E.
 */
export class Bus_M_2_Socket_E extends Component.withPins({
  "GND_1": "1",
  "3.3V_2": "2",
  "USB_D+": "3",
  "3.3V_4": "4",
  "USB_D-": "5",
  "~{LED_1}": "6",
  "GND_7": "7",
  "PCM_CLK/I2S_SCK": "8",
  "SDIO_CLK": "9",
  "PCM_SYNC/I2S_WS": "10",
  "SDIO_CMD": "11",
  "PCM_IN/I2S_SD_IN": "12",
  "SDIO_DATA0": "13",
  "PCM_OUT/I2S_SD_OUT": "14",
  "SDIO_DATA1": "15",
  "~{LED_2}": "16",
  "SDIO_DATA2": "17",
  "GND_18": "18",
  "SDIO_DATA3": "19",
  "~{UART_WAKE}": "20",
  "~{SDIO_WAKE}": "21",
  "UART_RXD": "22",
  "~{SDIO_RESET}": "23",
  "UART_TXD": "32",
  "GND_33": "33",
  "UART_CTS": "34",
  "PETp0": "35",
  "UART_RTS": "36",
  "PETn0": "37",
  "VENDOR_DEFINED_38": "38",
  "GND_39": "39",
  "VENDOR_DEFINED_40": "40",
  "PERp0": "41",
  "VENDOR_DEFINED_42": "42",
  "PERn0": "43",
  "COEX3": "44",
  "GND_45": "45",
  "COEX2": "46",
  "REFCLKp0": "47",
  "COEX1": "48",
  "REFCLKn0": "49",
  "SUSCLK": "50",
  "GND_51": "51",
  "~{PERST0}": "52",
  "~{CLKREQ0}": "53",
  "~{W_DISABLE2}": "54",
  "~{PEWAKE0}": "55",
  "~{W_DISABLE1}": "56",
  "GND_57": "57",
  "I2C_DATA": "58",
  "RESERVED/PETp1": "59",
  "I2C_CLK": "60",
  "RESERVED/PETn1": "61",
  "~{ALERT}": "62",
  "GND_63": "63",
  "RESERVED": "64",
  "RESERVED/PERp1": "65",
  "UIM_SWP/~{PERST1}": "66",
  "RESERVED/PERn1": "67",
  "UIM_POWER_SNK/~{CLKREQ1}": "68",
  "GND_69": "69",
  "UIM_POWER_SRC/GPIO1/~{PEWAKE1}": "70",
  "RESERVED/REFCLKp1": "71",
  "3.3V_72": "72",
  "RESERVED/REFCLKn1": "73",
  "3.3V_74": "74",
  "GND_75": "75",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "3.3V_2": "power_in", "USB_D+": "bidirectional", "3.3V_4": "passive", "USB_D-": "bidirectional", "~{LED_1}": "open_collector", GND_7: "passive", "PCM_CLK/I2S_SCK": "bidirectional", SDIO_CLK: "output", "PCM_SYNC/I2S_WS": "bidirectional", SDIO_CMD: "bidirectional", "PCM_IN/I2S_SD_IN": "input", SDIO_DATA0: "bidirectional", "PCM_OUT/I2S_SD_OUT": "output", SDIO_DATA1: "bidirectional", "~{LED_2}": "open_collector", SDIO_DATA2: "bidirectional", GND_18: "passive", SDIO_DATA3: "bidirectional", "~{UART_WAKE}": "input", "~{SDIO_WAKE}": "input", UART_RXD: "input", "~{SDIO_RESET}": "output", UART_TXD: "output", GND_33: "passive", UART_CTS: "input", PETp0: "output", UART_RTS: "output", PETn0: "output", VENDOR_DEFINED_38: "passive", GND_39: "passive", VENDOR_DEFINED_40: "passive", PERp0: "input", VENDOR_DEFINED_42: "passive", PERn0: "input", COEX3: "bidirectional", GND_45: "passive", COEX2: "bidirectional", REFCLKp0: "output", COEX1: "bidirectional", REFCLKn0: "output", SUSCLK: "output", GND_51: "passive", "~{PERST0}": "output", "~{CLKREQ0}": "bidirectional", "~{W_DISABLE2}": "output", "~{PEWAKE0}": "bidirectional", "~{W_DISABLE1}": "output", GND_57: "passive", I2C_DATA: "bidirectional", "RESERVED/PETp1": "output", I2C_CLK: "output", "RESERVED/PETn1": "output", "~{ALERT}": "input", GND_63: "passive", RESERVED: "passive", "RESERVED/PERp1": "input", "UIM_SWP/~{PERST1}": "output", "RESERVED/PERn1": "input", "UIM_POWER_SNK/~{CLKREQ1}": "bidirectional", GND_69: "passive", "UIM_POWER_SRC/GPIO1/~{PEWAKE1}": "bidirectional", "RESERVED/REFCLKp1": "output", "3.3V_72": "passive", "RESERVED/REFCLKn1": "output", "3.3V_74": "passive", GND_75: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_M.2_Socket_E";
  override referencePrefix = "J";
}

/**
 * M.2 Socket 3 Mechanical Key M
 *
 * KiCad symbol: `Connector:Bus_M.2_Socket_M`. Reference prefix: `J`.
 * Footprint filters: *M*2*M*.
 * @see https://web.archive.org/web/20200613074028/http://read.pudn.com/downloads794/doc/project/3133918/PCIe_M.2_Electromechanical_Spec_Rev1.0_Final_11012013_RS_Clean.pdf#page=155
 * Keywords: M2 NGNF PCI-E.
 */
export class Bus_M_2_Socket_M extends Component.withPins({
  "GND_1": "1",
  "3.3V_2": "2",
  "GND_3": "3",
  "3.3V_4": "4",
  "PERn3": "5",
  "NC_6": "6",
  "PERp3": "7",
  "NC_8": "8",
  "GND_9": "9",
  "DAS/~{DSS}/~{LED1}": "10",
  "PETn3": "11",
  "3.3V_12": "12",
  "PETp3": "13",
  "3.3V_14": "14",
  "GND_15": "15",
  "3.3V_16": "16",
  "PERn2": "17",
  "3.3V_18": "18",
  "PERp2": "19",
  "NC_20": "20",
  "GND_21": "21",
  "NC_22": "22",
  "PETn2": "23",
  "NC_24": "24",
  "PETp2": "25",
  "NC_26": "26",
  "GND_27": "27",
  "NC_28": "28",
  "PERn1": "29",
  "NC_30": "30",
  "PERp1": "31",
  "NC_32": "32",
  "GND_33": "33",
  "NC_34": "34",
  "PETn1": "35",
  "NC_36": "36",
  "PETp1": "37",
  "DEVSLP": "38",
  "GND_39": "39",
  "NC_40": "40",
  "PERn0/SATA-B+": "41",
  "NC_42": "42",
  "PERp0/SATA-B-": "43",
  "NC_44": "44",
  "GND_45": "45",
  "NC_46": "46",
  "PETn0/SATA-A-": "47",
  "NC_48": "48",
  "PETp0/SATA-A+": "49",
  "~{PERST}": "50",
  "GND_51": "51",
  "~{CLKREQ}": "52",
  "REFCLKn": "53",
  "~{PEWAKE}": "54",
  "REFCLKp": "55",
  "NC_56": "56",
  "GND_57": "57",
  "NC_58": "58",
  "NC_67": "67",
  "SUSCLK": "68",
  "PEDET": "69",
  "3.3V_70": "70",
  "GND_71": "71",
  "3.3V_72": "72",
  "GND_73": "73",
  "3.3V_74": "74",
  "GND_75": "75",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "3.3V_2": "power_in", GND_3: "passive", "3.3V_4": "passive", PERn3: "input", NC_6: "no_connect", PERp3: "input", NC_8: "no_connect", GND_9: "passive", "DAS/~{DSS}/~{LED1}": "bidirectional", PETn3: "output", "3.3V_12": "passive", PETp3: "output", "3.3V_14": "passive", GND_15: "passive", "3.3V_16": "passive", PERn2: "input", "3.3V_18": "passive", PERp2: "input", NC_20: "no_connect", GND_21: "passive", NC_22: "no_connect", PETn2: "output", NC_24: "no_connect", PETp2: "output", NC_26: "no_connect", GND_27: "passive", NC_28: "no_connect", PERn1: "input", NC_30: "no_connect", PERp1: "input", NC_32: "no_connect", GND_33: "passive", NC_34: "no_connect", PETn1: "output", NC_36: "no_connect", PETp1: "output", DEVSLP: "output", GND_39: "passive", NC_40: "no_connect", "PERn0/SATA-B+": "input", NC_42: "no_connect", "PERp0/SATA-B-": "input", NC_44: "no_connect", GND_45: "passive", NC_46: "no_connect", "PETn0/SATA-A-": "output", NC_48: "no_connect", "PETp0/SATA-A+": "output", "~{PERST}": "output", GND_51: "passive", "~{CLKREQ}": "bidirectional", REFCLKn: "output", "~{PEWAKE}": "bidirectional", REFCLKp: "output", NC_56: "no_connect", GND_57: "passive", NC_58: "no_connect", NC_67: "no_connect", SUSCLK: "output", PEDET: "passive", "3.3V_70": "passive", GND_71: "passive", "3.3V_72": "passive", GND_73: "passive", "3.3V_74": "passive", GND_75: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_M.2_Socket_M";
  override referencePrefix = "J";
}

/**
 * PCI bus connector for 5V cards
 *
 * KiCad symbol: `Connector:Bus_PCI_32bit_5V`. Reference prefix: `J`.
 * @see http://pinouts.ru/Slots/PCI_pinout.shtml
 * Keywords: PCI 5V.
 */
export class Bus_PCI_32bit_5V extends Component.withPins({
  "TRST#": "A1",
  "+12V": "A2",
  "TMS": "A3",
  "TDI": "A4",
  "+5V_A5": "A5",
  "INTA#": "A6",
  "INTC#": "A7",
  "+5V_A8": "A8",
  "RESERVED_A9": "A9",
  "+5V_A10": "A10",
  "RESERVED_A11": "A11",
  "GND_A12": "A12",
  "GND_A13": "A13",
  "RESERVED_A14": "A14",
  "RST#": "A15",
  "+5V_A16": "A16",
  "GNT#": "A17",
  "GND_A18": "A18",
  "RESERVED_A19": "A19",
  "AD[30]": "A20",
  "+3.3V_A21": "A21",
  "AD[28]": "A22",
  "AD[26]": "A23",
  "GND_A24": "A24",
  "AD[24]": "A25",
  "IDSEL": "A26",
  "+3.3V_A27": "A27",
  "AD[22]": "A28",
  "AD[20]": "A29",
  "GND_A30": "A30",
  "AD[18]": "A31",
  "AD[16]": "A32",
  "+3.3V_A33": "A33",
  "FRAME#": "A34",
  "GND_A35": "A35",
  "TRDY#": "A36",
  "GND_A37": "A37",
  "STOP#": "A38",
  "+3.3V_A39": "A39",
  "SDONE": "A40",
  "SBO#": "A41",
  "GND_A42": "A42",
  "PAR": "A43",
  "AD[15]": "A44",
  "+3.3V_A45": "A45",
  "AD[13]": "A46",
  "AD[11]": "A47",
  "GND_A48": "A48",
  "AD[09]": "A49",
  "C/BE#[0]": "A52",
  "+3.3V_A53": "A53",
  "AD[06]": "A54",
  "AD[04]": "A55",
  "GND_A56": "A56",
  "AD[02]": "A57",
  "AD[00]": "A58",
  "+5V_A59": "A59",
  "REQ64#": "A60",
  "+5V_A61": "A61",
  "+5V_A62": "A62",
  "-12V": "B1",
  "TCK": "B2",
  "GND_B3": "B3",
  "TDO": "B4",
  "+5V_B5": "B5",
  "+5V_B6": "B6",
  "INTB#": "B7",
  "INTD#": "B8",
  "PRSNT1#": "B9",
  "RESERVED_B10": "B10",
  "PRSNT2#": "B11",
  "GND_B12": "B12",
  "GND_B13": "B13",
  "RESERVED_B14": "B14",
  "GND_B15": "B15",
  "CLK": "B16",
  "GND_B17": "B17",
  "REQ#": "B18",
  "+5V_B19": "B19",
  "AD[31]": "B20",
  "AD[29]": "B21",
  "GND_B22": "B22",
  "AD[27]": "B23",
  "AD[25]": "B24",
  "+3.3V_B25": "B25",
  "C/BE#[3]": "B26",
  "AD[23]": "B27",
  "GND_B28": "B28",
  "AD[21]": "B29",
  "AD[19]": "B30",
  "+3.3V_B31": "B31",
  "AD[17]": "B32",
  "C/BE#[2]": "B33",
  "GND_B34": "B34",
  "IRDY#": "B35",
  "+3.3V_B36": "B36",
  "DEVSEL#": "B37",
  "GND_B38": "B38",
  "LOCK#": "B39",
  "PERR#": "B40",
  "+3.3V_B41": "B41",
  "SERR#": "B42",
  "+3.3V_B43": "B43",
  "C/BE#[1]": "B44",
  "AD[14]": "B45",
  "GND_B46": "B46",
  "AD[12]": "B47",
  "AD[10]": "B48",
  "GND_B49": "B49",
  "AD[08]": "B52",
  "AD[07]": "B53",
  "+3.3V_B54": "B54",
  "AD[05]": "B55",
  "AD[03]": "B56",
  "GND_B57": "B57",
  "AD[01]": "B58",
  "+5V_B59": "B59",
  "ACK64#": "B60",
  "+5V_B61": "B61",
  "+5V_B62": "B62",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TRST#": "output", "+12V": "power_in", TMS: "output", TDI: "output", "+5V_A5": "power_in", "INTA#": "input", "INTC#": "input", "+5V_A8": "power_in", RESERVED_A9: "passive", "+5V_A10": "power_in", RESERVED_A11: "passive", GND_A12: "power_in", GND_A13: "power_in", RESERVED_A14: "passive", "RST#": "output", "+5V_A16": "power_in", "GNT#": "bidirectional", GND_A18: "power_in", RESERVED_A19: "passive", "AD[30]": "bidirectional", "+3.3V_A21": "power_in", "AD[28]": "bidirectional", "AD[26]": "bidirectional", GND_A24: "power_in", "AD[24]": "bidirectional", IDSEL: "output", "+3.3V_A27": "power_in", "AD[22]": "bidirectional", "AD[20]": "bidirectional", GND_A30: "power_in", "AD[18]": "bidirectional", "AD[16]": "bidirectional", "+3.3V_A33": "power_in", "FRAME#": "bidirectional", GND_A35: "power_in", "TRDY#": "bidirectional", GND_A37: "power_in", "STOP#": "bidirectional", "+3.3V_A39": "power_in", SDONE: "bidirectional", "SBO#": "bidirectional", GND_A42: "power_in", PAR: "bidirectional", "AD[15]": "bidirectional", "+3.3V_A45": "power_in", "AD[13]": "bidirectional", "AD[11]": "bidirectional", GND_A48: "power_in", "AD[09]": "bidirectional", "C/BE#[0]": "bidirectional", "+3.3V_A53": "power_in", "AD[06]": "bidirectional", "AD[04]": "bidirectional", GND_A56: "power_in", "AD[02]": "bidirectional", "AD[00]": "bidirectional", "+5V_A59": "power_in", "REQ64#": "bidirectional", "+5V_A61": "power_in", "+5V_A62": "power_in", "-12V": "power_in", TCK: "output", GND_B3: "power_in", TDO: "input", "+5V_B5": "power_in", "+5V_B6": "power_in", "INTB#": "input", "INTD#": "input", "PRSNT1#": "input", RESERVED_B10: "passive", "PRSNT2#": "input", GND_B12: "power_in", GND_B13: "power_in", RESERVED_B14: "passive", GND_B15: "power_in", CLK: "output", GND_B17: "power_in", "REQ#": "bidirectional", "+5V_B19": "power_in", "AD[31]": "bidirectional", "AD[29]": "bidirectional", GND_B22: "power_in", "AD[27]": "bidirectional", "AD[25]": "bidirectional", "+3.3V_B25": "power_in", "C/BE#[3]": "bidirectional", "AD[23]": "bidirectional", GND_B28: "power_in", "AD[21]": "bidirectional", "AD[19]": "bidirectional", "+3.3V_B31": "power_in", "AD[17]": "bidirectional", "C/BE#[2]": "bidirectional", GND_B34: "power_in", "IRDY#": "bidirectional", "+3.3V_B36": "power_in", "DEVSEL#": "bidirectional", GND_B38: "power_in", "LOCK#": "bidirectional", "PERR#": "bidirectional", "+3.3V_B41": "power_in", "SERR#": "input", "+3.3V_B43": "power_in", "C/BE#[1]": "bidirectional", "AD[14]": "bidirectional", GND_B46: "power_in", "AD[12]": "bidirectional", "AD[10]": "bidirectional", GND_B49: "power_in", "AD[08]": "bidirectional", "AD[07]": "bidirectional", "+3.3V_B54": "input", "AD[05]": "bidirectional", "AD[03]": "bidirectional", GND_B57: "power_in", "AD[01]": "bidirectional", "+5V_B59": "power_in", "ACK64#": "bidirectional", "+5V_B61": "power_in", "+5V_B62": "power_in", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_PCI_32bit_5V";
  override referencePrefix = "J";
}

/**
 * PCI bus connector for universal 5V/3.3V cards
 *
 * KiCad symbol: `Connector:Bus_PCI_32bit_Universal`. Reference prefix: `J`.
 * @see http://pinouts.ru/Slots/PCI_pinout.shtml
 * Keywords: PCI 5V 3.3V 3V3.
 */
export class Bus_PCI_32bit_Universal extends Component.withPins({
  "~{TRST#}": "A1",
  "+12V": "A2",
  "TMS": "A3",
  "TDI": "A4",
  "+5V_A5": "A5",
  "~{INTA#}": "A6",
  "~{INTC#}": "A7",
  "+5V_A8": "A8",
  "RESERVED_A9": "A9",
  "VIO_A10": "A10",
  "RESERVED_A11": "A11",
  "3.3VAUX": "A14",
  "~{RST#}": "A15",
  "VIO_A16": "A16",
  "~{GNT#}": "A17",
  "GND_A18": "A18",
  "PME#": "A19",
  "AD[30]": "A20",
  "+3.3V_A21": "A21",
  "AD[28]": "A22",
  "AD[26]": "A23",
  "GND_A24": "A24",
  "AD[24]": "A25",
  "IDSEL": "A26",
  "+3.3V_A27": "A27",
  "AD[22]": "A28",
  "AD[20]": "A29",
  "GND_A30": "A30",
  "AD[18]": "A31",
  "AD[16]": "A32",
  "+3.3V_A33": "A33",
  "~{FRAME#}": "A34",
  "GND_A35": "A35",
  "~{TRDY#}": "A36",
  "GND_A37": "A37",
  "~{STOP#}": "A38",
  "+3.3V_A39": "A39",
  "RESERVED_A40": "A40",
  "RESERVED_A41": "A41",
  "GND_A42": "A42",
  "PAR": "A43",
  "AD[15]": "A44",
  "+3.3V_A45": "A45",
  "AD[13]": "A46",
  "AD[11]": "A47",
  "GND_A48": "A48",
  "AD[09]": "A49",
  "~{C/BE#[0]}": "A52",
  "+3.3V_A53": "A53",
  "AD[06]": "A54",
  "AD[04]": "A55",
  "GND_A56": "A56",
  "AD[02]": "A57",
  "AD[00]": "A58",
  "VIO_A59": "A59",
  "~{REQ64#}": "A60",
  "+5V_A61": "A61",
  "+5V_A62": "A62",
  "-12V": "B1",
  "TCK": "B2",
  "GND_B3": "B3",
  "TDO": "B4",
  "+5V_B5": "B5",
  "+5V_B6": "B6",
  "~{INTB#}": "B7",
  "~{INTD#}": "B8",
  "~{PRSNT1#}": "B9",
  "RESERVED_B10": "B10",
  "~{PRSNT2#}": "B11",
  "RESERVED_B14": "B14",
  "GND_B15": "B15",
  "CLK": "B16",
  "GND_B17": "B17",
  "~{REQ#}": "B18",
  "VIO_B19": "B19",
  "AD[31]": "B20",
  "AD[29]": "B21",
  "GND_B22": "B22",
  "AD[27]": "B23",
  "AD[25]": "B24",
  "+3.3V_B25": "B25",
  "C/BE#[3]": "B26",
  "AD[23]": "B27",
  "GND_B28": "B28",
  "AD[21]": "B29",
  "AD[19]": "B30",
  "+3.3V_B31": "B31",
  "AD[17]": "B32",
  "~{C/BE#[2]}": "B33",
  "GND_B34": "B34",
  "~{IRDY#}": "B35",
  "+3.3V_B36": "B36",
  "~{DEVSEL#}": "B37",
  "GND_B38": "B38",
  "~{LOCK#}": "B39",
  "~{PERR#}": "B40",
  "+3.3V_B41": "B41",
  "~{SERR#}": "B42",
  "+3.3V_B43": "B43",
  "~{C/BE#[1]}": "B44",
  "AD[14]": "B45",
  "GND_B46": "B46",
  "AD[12]": "B47",
  "AD[10]": "B48",
  "M66EN": "B49",
  "AD[08]": "B52",
  "AD[07]": "B53",
  "+3.3V_B54": "B54",
  "AD[05]": "B55",
  "AD[03]": "B56",
  "GND_B57": "B57",
  "AD[01]": "B58",
  "VIO_B59": "B59",
  "~{ACK64#}": "B60",
  "+5V_B61": "B61",
  "+5V_B62": "B62",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{TRST#}": "output", "+12V": "power_in", TMS: "output", TDI: "output", "+5V_A5": "power_in", "~{INTA#}": "input", "~{INTC#}": "input", "+5V_A8": "power_in", RESERVED_A9: "passive", VIO_A10: "power_in", RESERVED_A11: "passive", "3.3VAUX": "passive", "~{RST#}": "output", VIO_A16: "power_in", "~{GNT#}": "bidirectional", GND_A18: "power_in", "PME#": "passive", "AD[30]": "bidirectional", "+3.3V_A21": "power_in", "AD[28]": "bidirectional", "AD[26]": "bidirectional", GND_A24: "power_in", "AD[24]": "bidirectional", IDSEL: "output", "+3.3V_A27": "power_in", "AD[22]": "bidirectional", "AD[20]": "bidirectional", GND_A30: "power_in", "AD[18]": "bidirectional", "AD[16]": "bidirectional", "+3.3V_A33": "power_in", "~{FRAME#}": "bidirectional", GND_A35: "power_in", "~{TRDY#}": "bidirectional", GND_A37: "power_in", "~{STOP#}": "bidirectional", "+3.3V_A39": "power_in", RESERVED_A40: "bidirectional", RESERVED_A41: "bidirectional", GND_A42: "power_in", PAR: "bidirectional", "AD[15]": "bidirectional", "+3.3V_A45": "power_in", "AD[13]": "bidirectional", "AD[11]": "bidirectional", GND_A48: "power_in", "AD[09]": "bidirectional", "~{C/BE#[0]}": "bidirectional", "+3.3V_A53": "power_in", "AD[06]": "bidirectional", "AD[04]": "bidirectional", GND_A56: "power_in", "AD[02]": "bidirectional", "AD[00]": "bidirectional", VIO_A59: "power_in", "~{REQ64#}": "bidirectional", "+5V_A61": "power_in", "+5V_A62": "power_in", "-12V": "power_in", TCK: "output", GND_B3: "power_in", TDO: "input", "+5V_B5": "power_in", "+5V_B6": "power_in", "~{INTB#}": "input", "~{INTD#}": "input", "~{PRSNT1#}": "input", RESERVED_B10: "passive", "~{PRSNT2#}": "input", RESERVED_B14: "passive", GND_B15: "power_in", CLK: "output", GND_B17: "power_in", "~{REQ#}": "bidirectional", VIO_B19: "power_in", "AD[31]": "bidirectional", "AD[29]": "bidirectional", GND_B22: "power_in", "AD[27]": "bidirectional", "AD[25]": "bidirectional", "+3.3V_B25": "power_in", "C/BE#[3]": "bidirectional", "AD[23]": "bidirectional", GND_B28: "power_in", "AD[21]": "bidirectional", "AD[19]": "bidirectional", "+3.3V_B31": "power_in", "AD[17]": "bidirectional", "~{C/BE#[2]}": "bidirectional", GND_B34: "power_in", "~{IRDY#}": "bidirectional", "+3.3V_B36": "power_in", "~{DEVSEL#}": "bidirectional", GND_B38: "power_in", "~{LOCK#}": "bidirectional", "~{PERR#}": "bidirectional", "+3.3V_B41": "power_in", "~{SERR#}": "input", "+3.3V_B43": "power_in", "~{C/BE#[1]}": "bidirectional", "AD[14]": "bidirectional", GND_B46: "power_in", "AD[12]": "bidirectional", "AD[10]": "bidirectional", M66EN: "power_in", "AD[08]": "bidirectional", "AD[07]": "bidirectional", "+3.3V_B54": "input", "AD[05]": "bidirectional", "AD[03]": "bidirectional", GND_B57: "power_in", "AD[01]": "bidirectional", VIO_B59: "power_in", "~{ACK64#}": "bidirectional", "+5V_B61": "power_in", "+5V_B62": "power_in", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_PCI_32bit_Universal";
  override referencePrefix = "J";
}

/**
 * Mini-PCI Express bus connector
 *
 * KiCad symbol: `Connector:Bus_PCI_Express_Mini`. Reference prefix: `J`.
 * Footprint filters: *PCI*Express*Mini*.
 * Keywords: mini pcie.
 */
export class Bus_PCI_Express_Mini extends Component.withPins({
  "~{WAKE}": "1",
  "+3V3AUX_2": "2",
  "COEX1": "3",
  "GND_4": "4",
  "COEX2": "5",
  "+1V5_6": "6",
  "~{CLKREQ}": "7",
  "UIM_PWR": "8",
  "GND_9": "9",
  "UIM_DATA": "10",
  "REFCLK-": "11",
  "UIM_CLK": "12",
  "REFCLK+": "13",
  "~{UIM_RESET}": "14",
  "GND_15": "15",
  "UIM_VPP": "16",
  "UIM_C8": "17",
  "GND_18": "18",
  "UIM_C4": "19",
  "~{W_DISABLE}": "20",
  "GND_21": "21",
  "~{PERST}": "22",
  "PERn0": "23",
  "+3V3AUX_24": "24",
  "PERp0": "25",
  "GND_26": "26",
  "GND_27": "27",
  "+1V5_28": "28",
  "GND_29": "29",
  "SMB_CLK": "30",
  "PETn0": "31",
  "SMB_DATA": "32",
  "PETp0": "33",
  "GND_34": "34",
  "GND_35": "35",
  "USB_D-": "36",
  "GND_37": "37",
  "USB_D+": "38",
  "+3V3AUX_39": "39",
  "GND_40": "40",
  "+3V3AUX_41": "41",
  "~{LED_WWAN}": "42",
  "GND_43": "43",
  "~{LED_WLAN}": "44",
  "Reserved_45": "45",
  "~{LED_WPAN}": "46",
  "Reserved_47": "47",
  "+1V5_48": "48",
  "Reserved_49": "49",
  "GND_50": "50",
  "Reserved_51": "51",
  "+3V3AUX_52": "52",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{WAKE}": "open_collector", "+3V3AUX_2": "power_in", COEX1: "passive", GND_4: "power_in", COEX2: "passive", "+1V5_6": "power_in", "~{CLKREQ}": "open_collector", UIM_PWR: "power_out", GND_9: "passive", UIM_DATA: "bidirectional", "REFCLK-": "input", UIM_CLK: "output", "REFCLK+": "input", "~{UIM_RESET}": "output", GND_15: "passive", UIM_VPP: "power_out", UIM_C8: "passive", GND_18: "passive", UIM_C4: "passive", "~{W_DISABLE}": "input", GND_21: "passive", "~{PERST}": "input", PERn0: "output", "+3V3AUX_24": "power_in", PERp0: "output", GND_26: "passive", GND_27: "passive", "+1V5_28": "power_in", GND_29: "passive", SMB_CLK: "input", PETn0: "input", SMB_DATA: "bidirectional", PETp0: "input", GND_34: "passive", GND_35: "passive", "USB_D-": "bidirectional", GND_37: "passive", "USB_D+": "bidirectional", "+3V3AUX_39": "power_in", GND_40: "passive", "+3V3AUX_41": "power_in", "~{LED_WWAN}": "open_collector", GND_43: "passive", "~{LED_WLAN}": "open_collector", Reserved_45: "passive", "~{LED_WPAN}": "open_collector", Reserved_47: "passive", "+1V5_48": "power_in", Reserved_49: "passive", GND_50: "passive", Reserved_51: "passive", "+3V3AUX_52": "power_in", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_PCI_Express_Mini";
  override referencePrefix = "J";
}

/**
 * PCI Express bus connector x1
 *
 * KiCad symbol: `Connector:Bus_PCI_Express_x1`. Reference prefix: `J`.
 * Footprint filters: *PCIexpress*.
 * @see http://www.ritrontek.com/uploadfile/2016/1026/20161026105231124.pdf#page=63
 * Keywords: pcie.
 * Default footprint: Connector_PCBEdge:BUS_PCIexpress_x1.
 */
export class Bus_PCI_Express_x1 extends Component.withPins({
  "~{PRSNT1}": "A1",
  "+12V_A2": "A2",
  "+12V_A3": "A3",
  "GND_A4": "A4",
  "JTAG2": "A5",
  "JTAG3": "A6",
  "JTAG4": "A7",
  "JTAG5": "A8",
  "+3.3V_A9": "A9",
  "+3.3V_A10": "A10",
  "~{PERST}": "A11",
  "GND_A12": "A12",
  "REFCLK+": "A13",
  "REFCLK-": "A14",
  "GND_A15": "A15",
  "PERp0": "A16",
  "PERn0": "A17",
  "GND_A18": "A18",
  "+12V_B1": "B1",
  "+12V_B2": "B2",
  "+12V_B3": "B3",
  "GND_B4": "B4",
  "SMCLK": "B5",
  "SMDAT": "B6",
  "GND_B7": "B7",
  "+3.3V_B8": "B8",
  "JTAG1": "B9",
  "3.3Vaux": "B10",
  "~{WAKE}": "B11",
  "RSVD": "B12",
  "GND_B13": "B13",
  "PETp0": "B14",
  "PETn0": "B15",
  "GND_B16": "B16",
  "~{PRSNT2}": "B17",
  "GND_B18": "B18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{PRSNT1}": "passive", "+12V_A2": "passive", "+12V_A3": "passive", GND_A4: "passive", JTAG2: "input", JTAG3: "input", JTAG4: "output", JTAG5: "input", "+3.3V_A9": "passive", "+3.3V_A10": "passive", "~{PERST}": "input", GND_A12: "passive", "REFCLK+": "input", "REFCLK-": "input", GND_A15: "passive", PERp0: "output", PERn0: "output", GND_A18: "passive", "+12V_B1": "power_in", "+12V_B2": "passive", "+12V_B3": "passive", GND_B4: "power_in", SMCLK: "input", SMDAT: "bidirectional", GND_B7: "passive", "+3.3V_B8": "power_in", JTAG1: "input", "3.3Vaux": "power_in", "~{WAKE}": "open_collector", RSVD: "passive", GND_B13: "passive", PETp0: "input", PETn0: "input", GND_B16: "passive", "~{PRSNT2}": "passive", GND_B18: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_PCI_Express_x1";
  override referencePrefix = "J";
}

/**
 * PCI Express bus connector x16
 *
 * KiCad symbol: `Connector:Bus_PCI_Express_x16`. Reference prefix: `J`.
 * Footprint filters: *PCIexpress*.
 * @see http://www.ritrontek.com/uploadfile/2016/1026/20161026105231124.pdf#page=63
 * Keywords: pcie.
 * Default footprint: Connector_PCBEdge:BUS_PCIexpress_x16.
 */
export class Bus_PCI_Express_x16 extends Component.withPins({
  "~{PRSNT1}": "A1",
  "+12V_A2": "A2",
  "+12V_A3": "A3",
  "GND_A4": "A4",
  "JTAG2": "A5",
  "JTAG3": "A6",
  "JTAG4": "A7",
  "JTAG5": "A8",
  "+3.3V_A9": "A9",
  "+3.3V_A10": "A10",
  "~{PERST}": "A11",
  "GND_A12": "A12",
  "REFCLK+": "A13",
  "REFCLK-": "A14",
  "GND_A15": "A15",
  "PERp0": "A16",
  "PERn0": "A17",
  "GND_A18": "A18",
  "RSVD_A19": "A19",
  "GND_A20": "A20",
  "PERp1": "A21",
  "PERn1": "A22",
  "GND_A23": "A23",
  "GND_A24": "A24",
  "PERp2": "A25",
  "PERn2": "A26",
  "GND_A27": "A27",
  "GND_A28": "A28",
  "PERp3": "A29",
  "PERn3": "A30",
  "GND_A31": "A31",
  "RSVD_A32": "A32",
  "RSVD_A33": "A33",
  "GND_A34": "A34",
  "PERp4": "A35",
  "PERn4": "A36",
  "GND_A37": "A37",
  "GND_A38": "A38",
  "PERp5": "A39",
  "PERn5": "A40",
  "GND_A41": "A41",
  "GND_A42": "A42",
  "PERp6": "A43",
  "PERn6": "A44",
  "GND_A45": "A45",
  "GND_A46": "A46",
  "PERp7": "A47",
  "PERn7": "A48",
  "GND_A49": "A49",
  "RSVD_A50": "A50",
  "GND_A51": "A51",
  "PERp8": "A52",
  "PERn8": "A53",
  "GND_A54": "A54",
  "GND_A55": "A55",
  "PERp9": "A56",
  "PERn9": "A57",
  "GND_A58": "A58",
  "GND_A59": "A59",
  "PERp10": "A60",
  "PERn10": "A61",
  "GND_A62": "A62",
  "GND_A63": "A63",
  "PERp11": "A64",
  "PERn11": "A65",
  "GND_A66": "A66",
  "GND_A67": "A67",
  "PERp12": "A68",
  "PERn12": "A69",
  "GND_A70": "A70",
  "GND_A71": "A71",
  "PERp13": "A72",
  "PERn13": "A73",
  "GND_A74": "A74",
  "GND_A75": "A75",
  "PERp14": "A76",
  "PERn14": "A77",
  "GND_A78": "A78",
  "GND_A79": "A79",
  "PERp15": "A80",
  "PERn15": "A81",
  "GND_A82": "A82",
  "+12V_B1": "B1",
  "+12V_B2": "B2",
  "+12V_B3": "B3",
  "GND_B4": "B4",
  "SMCLK": "B5",
  "SMDAT": "B6",
  "GND_B7": "B7",
  "+3.3V_B8": "B8",
  "JTAG1": "B9",
  "3.3Vaux": "B10",
  "~{WAKE}": "B11",
  "RSVD_B12": "B12",
  "GND_B13": "B13",
  "PETp0": "B14",
  "PETn0": "B15",
  "GND_B16": "B16",
  "~{PRSNT2}_B17": "B17",
  "GND_B18": "B18",
  "PETp1": "B19",
  "PETn1": "B20",
  "GND_B21": "B21",
  "GND_B22": "B22",
  "PETp2": "B23",
  "PETn2": "B24",
  "GND_B25": "B25",
  "GND_B26": "B26",
  "PETp3": "B27",
  "PETn3": "B28",
  "GND_B29": "B29",
  "RSVD_B30": "B30",
  "~{PRSNT2}_B31": "B31",
  "GND_B32": "B32",
  "PETp4": "B33",
  "PETn4": "B34",
  "GND_B35": "B35",
  "GND_B36": "B36",
  "PETp5": "B37",
  "PETn5": "B38",
  "GND_B39": "B39",
  "GND_B40": "B40",
  "PETp6": "B41",
  "PETn6": "B42",
  "GND_B43": "B43",
  "GND_B44": "B44",
  "PETp7": "B45",
  "PETn7": "B46",
  "GND_B47": "B47",
  "~{PRSNT2}_B48": "B48",
  "GND_B49": "B49",
  "PETp8": "B50",
  "PETn8": "B51",
  "GND_B52": "B52",
  "GND_B53": "B53",
  "PETp9": "B54",
  "PETn9": "B55",
  "GND_B56": "B56",
  "GND_B57": "B57",
  "PETp10": "B58",
  "PETn10": "B59",
  "GND_B60": "B60",
  "GND_B61": "B61",
  "PETp11": "B62",
  "PETn11": "B63",
  "GND_B64": "B64",
  "GND_B65": "B65",
  "PETp12": "B66",
  "PETn12": "B67",
  "GND_B68": "B68",
  "GND_B69": "B69",
  "PETp13": "B70",
  "PETn13": "B71",
  "GND_B72": "B72",
  "GND_B73": "B73",
  "PETp14": "B74",
  "PETn14": "B75",
  "GND_B76": "B76",
  "GND_B77": "B77",
  "PETp15": "B78",
  "PETn15": "B79",
  "GND_B80": "B80",
  "~{PRSNT2}_B81": "B81",
  "RSVD_B82": "B82",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{PRSNT1}": "passive", "+12V_A2": "passive", "+12V_A3": "passive", GND_A4: "passive", JTAG2: "input", JTAG3: "input", JTAG4: "output", JTAG5: "input", "+3.3V_A9": "passive", "+3.3V_A10": "passive", "~{PERST}": "input", GND_A12: "passive", "REFCLK+": "input", "REFCLK-": "input", GND_A15: "passive", PERp0: "output", PERn0: "output", GND_A18: "passive", RSVD_A19: "passive", GND_A20: "passive", PERp1: "output", PERn1: "output", GND_A23: "passive", GND_A24: "passive", PERp2: "output", PERn2: "output", GND_A27: "passive", GND_A28: "passive", PERp3: "output", PERn3: "output", GND_A31: "passive", RSVD_A32: "passive", RSVD_A33: "passive", GND_A34: "passive", PERp4: "output", PERn4: "output", GND_A37: "passive", GND_A38: "passive", PERp5: "output", PERn5: "output", GND_A41: "passive", GND_A42: "passive", PERp6: "output", PERn6: "output", GND_A45: "passive", GND_A46: "passive", PERp7: "output", PERn7: "output", GND_A49: "passive", RSVD_A50: "passive", GND_A51: "passive", PERp8: "output", PERn8: "output", GND_A54: "passive", GND_A55: "passive", PERp9: "output", PERn9: "output", GND_A58: "passive", GND_A59: "passive", PERp10: "output", PERn10: "output", GND_A62: "passive", GND_A63: "passive", PERp11: "output", PERn11: "output", GND_A66: "passive", GND_A67: "passive", PERp12: "output", PERn12: "output", GND_A70: "passive", GND_A71: "passive", PERp13: "output", PERn13: "output", GND_A74: "passive", GND_A75: "passive", PERp14: "output", PERn14: "output", GND_A78: "passive", GND_A79: "passive", PERp15: "output", PERn15: "output", GND_A82: "passive", "+12V_B1": "power_in", "+12V_B2": "passive", "+12V_B3": "passive", GND_B4: "power_in", SMCLK: "input", SMDAT: "bidirectional", GND_B7: "passive", "+3.3V_B8": "power_in", JTAG1: "input", "3.3Vaux": "power_in", "~{WAKE}": "open_collector", RSVD_B12: "passive", GND_B13: "passive", PETp0: "input", PETn0: "input", GND_B16: "passive", "~{PRSNT2}_B17": "passive", GND_B18: "passive", PETp1: "input", PETn1: "input", GND_B21: "passive", GND_B22: "passive", PETp2: "input", PETn2: "input", GND_B25: "passive", GND_B26: "passive", PETp3: "input", PETn3: "input", GND_B29: "passive", RSVD_B30: "passive", "~{PRSNT2}_B31": "passive", GND_B32: "passive", PETp4: "input", PETn4: "input", GND_B35: "passive", GND_B36: "passive", PETp5: "input", PETn5: "input", GND_B39: "passive", GND_B40: "passive", PETp6: "input", PETn6: "input", GND_B43: "passive", GND_B44: "passive", PETp7: "input", PETn7: "input", GND_B47: "passive", "~{PRSNT2}_B48": "passive", GND_B49: "passive", PETp8: "input", PETn8: "input", GND_B52: "passive", GND_B53: "passive", PETp9: "input", PETn9: "input", GND_B56: "passive", GND_B57: "passive", PETp10: "input", PETn10: "input", GND_B60: "passive", GND_B61: "passive", PETp11: "input", PETn11: "input", GND_B64: "passive", GND_B65: "passive", PETp12: "input", PETn12: "input", GND_B68: "passive", GND_B69: "passive", PETp13: "input", PETn13: "input", GND_B72: "passive", GND_B73: "passive", PETp14: "input", PETn14: "input", GND_B76: "passive", GND_B77: "passive", PETp15: "input", PETn15: "input", GND_B80: "passive", "~{PRSNT2}_B81": "passive", RSVD_B82: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_PCI_Express_x16";
  override referencePrefix = "J";
}

/**
 * PCI Express bus connector x4
 *
 * KiCad symbol: `Connector:Bus_PCI_Express_x4`. Reference prefix: `J`.
 * Footprint filters: *PCIexpress*.
 * @see http://www.ritrontek.com/uploadfile/2016/1026/20161026105231124.pdf#page=63
 * Keywords: pcie.
 * Default footprint: Connector_PCBEdge:BUS_PCIexpress_x4.
 */
export class Bus_PCI_Express_x4 extends Component.withPins({
  "~{PRSNT1}": "A1",
  "+12V_A2": "A2",
  "+12V_A3": "A3",
  "GND_A4": "A4",
  "JTAG2": "A5",
  "JTAG3": "A6",
  "JTAG4": "A7",
  "JTAG5": "A8",
  "+3.3V_A9": "A9",
  "+3.3V_A10": "A10",
  "~{PERST}": "A11",
  "GND_A12": "A12",
  "REFCLK+": "A13",
  "REFCLK-": "A14",
  "GND_A15": "A15",
  "PERp0": "A16",
  "PERn0": "A17",
  "GND_A18": "A18",
  "RSVD_A19": "A19",
  "GND_A20": "A20",
  "PERp1": "A21",
  "PERn1": "A22",
  "GND_A23": "A23",
  "GND_A24": "A24",
  "PERp2": "A25",
  "PERn2": "A26",
  "GND_A27": "A27",
  "GND_A28": "A28",
  "PERp3": "A29",
  "PERn3": "A30",
  "GND_A31": "A31",
  "RSVD_A32": "A32",
  "+12V_B1": "B1",
  "+12V_B2": "B2",
  "+12V_B3": "B3",
  "GND_B4": "B4",
  "SMCLK": "B5",
  "SMDAT": "B6",
  "GND_B7": "B7",
  "+3.3V_B8": "B8",
  "JTAG1": "B9",
  "3.3Vaux": "B10",
  "~{WAKE}": "B11",
  "RSVD_B12": "B12",
  "GND_B13": "B13",
  "PETp0": "B14",
  "PETn0": "B15",
  "GND_B16": "B16",
  "~{PRSNT2}_B17": "B17",
  "GND_B18": "B18",
  "PETp1": "B19",
  "PETn1": "B20",
  "GND_B21": "B21",
  "GND_B22": "B22",
  "PETp2": "B23",
  "PETn2": "B24",
  "GND_B25": "B25",
  "GND_B26": "B26",
  "PETp3": "B27",
  "PETn3": "B28",
  "GND_B29": "B29",
  "RSVD_B30": "B30",
  "~{PRSNT2}_B31": "B31",
  "GND_B32": "B32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{PRSNT1}": "passive", "+12V_A2": "passive", "+12V_A3": "passive", GND_A4: "passive", JTAG2: "input", JTAG3: "input", JTAG4: "output", JTAG5: "input", "+3.3V_A9": "passive", "+3.3V_A10": "passive", "~{PERST}": "input", GND_A12: "passive", "REFCLK+": "input", "REFCLK-": "input", GND_A15: "passive", PERp0: "output", PERn0: "output", GND_A18: "passive", RSVD_A19: "passive", GND_A20: "passive", PERp1: "output", PERn1: "output", GND_A23: "passive", GND_A24: "passive", PERp2: "output", PERn2: "output", GND_A27: "passive", GND_A28: "passive", PERp3: "output", PERn3: "output", GND_A31: "passive", RSVD_A32: "passive", "+12V_B1": "power_in", "+12V_B2": "passive", "+12V_B3": "passive", GND_B4: "power_in", SMCLK: "input", SMDAT: "bidirectional", GND_B7: "passive", "+3.3V_B8": "power_in", JTAG1: "input", "3.3Vaux": "power_in", "~{WAKE}": "open_collector", RSVD_B12: "passive", GND_B13: "passive", PETp0: "input", PETn0: "input", GND_B16: "passive", "~{PRSNT2}_B17": "passive", GND_B18: "passive", PETp1: "input", PETn1: "input", GND_B21: "passive", GND_B22: "passive", PETp2: "input", PETn2: "input", GND_B25: "passive", GND_B26: "passive", PETp3: "input", PETn3: "input", GND_B29: "passive", RSVD_B30: "passive", "~{PRSNT2}_B31": "passive", GND_B32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_PCI_Express_x4";
  override referencePrefix = "J";
}

/**
 * PCI Express bus connector x8
 *
 * KiCad symbol: `Connector:Bus_PCI_Express_x8`. Reference prefix: `J`.
 * Footprint filters: *PCIexpress*.
 * @see http://www.ritrontek.com/uploadfile/2016/1026/20161026105231124.pdf#page=63
 * Keywords: pcie.
 * Default footprint: Connector_PCBEdge:BUS_PCIexpress_x8.
 */
export class Bus_PCI_Express_x8 extends Component.withPins({
  "~{PRSNT1}": "A1",
  "+12V_A2": "A2",
  "+12V_A3": "A3",
  "GND_A4": "A4",
  "JTAG2": "A5",
  "JTAG3": "A6",
  "JTAG4": "A7",
  "JTAG5": "A8",
  "+3.3V_A9": "A9",
  "+3.3V_A10": "A10",
  "~{PERST}": "A11",
  "GND_A12": "A12",
  "REFCLK+": "A13",
  "REFCLK-": "A14",
  "GND_A15": "A15",
  "PERp0": "A16",
  "PERn0": "A17",
  "GND_A18": "A18",
  "RSVD_A19": "A19",
  "GND_A20": "A20",
  "PERp1": "A21",
  "PERn1": "A22",
  "GND_A23": "A23",
  "GND_A24": "A24",
  "PERp2": "A25",
  "PERn2": "A26",
  "GND_A27": "A27",
  "GND_A28": "A28",
  "PERp3": "A29",
  "PERn3": "A30",
  "GND_A31": "A31",
  "RSVD_A32": "A32",
  "RSVD_A33": "A33",
  "GND_A34": "A34",
  "PERp4": "A35",
  "PERn4": "A36",
  "GND_A37": "A37",
  "GND_A38": "A38",
  "PERp5": "A39",
  "PERn5": "A40",
  "GND_A41": "A41",
  "GND_A42": "A42",
  "PERp6": "A43",
  "PERn6": "A44",
  "GND_A45": "A45",
  "GND_A46": "A46",
  "PERp7": "A47",
  "PERn7": "A48",
  "GND_A49": "A49",
  "+12V_B1": "B1",
  "+12V_B2": "B2",
  "+12V_B3": "B3",
  "GND_B4": "B4",
  "SMCLK": "B5",
  "SMDAT": "B6",
  "GND_B7": "B7",
  "+3.3V_B8": "B8",
  "JTAG1": "B9",
  "3.3Vaux": "B10",
  "~{WAKE}": "B11",
  "RSVD_B12": "B12",
  "GND_B13": "B13",
  "PETp0": "B14",
  "PETn0": "B15",
  "GND_B16": "B16",
  "~{PRSNT2}_B17": "B17",
  "GND_B18": "B18",
  "PETp1": "B19",
  "PETn1": "B20",
  "GND_B21": "B21",
  "GND_B22": "B22",
  "PETp2": "B23",
  "PETn2": "B24",
  "GND_B25": "B25",
  "GND_B26": "B26",
  "PETp3": "B27",
  "PETn3": "B28",
  "GND_B29": "B29",
  "RSVD_B30": "B30",
  "~{PRSNT2}_B31": "B31",
  "GND_B32": "B32",
  "PETp4": "B33",
  "PETn4": "B34",
  "GND_B35": "B35",
  "GND_B36": "B36",
  "PETp5": "B37",
  "PETn5": "B38",
  "GND_B39": "B39",
  "GND_B40": "B40",
  "PETp6": "B41",
  "PETn6": "B42",
  "GND_B43": "B43",
  "GND_B44": "B44",
  "PETp7": "B45",
  "PETn7": "B46",
  "GND_B47": "B47",
  "~{PRSNT2}_B48": "B48",
  "GND_B49": "B49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{PRSNT1}": "passive", "+12V_A2": "passive", "+12V_A3": "passive", GND_A4: "passive", JTAG2: "input", JTAG3: "input", JTAG4: "output", JTAG5: "input", "+3.3V_A9": "passive", "+3.3V_A10": "passive", "~{PERST}": "input", GND_A12: "passive", "REFCLK+": "input", "REFCLK-": "input", GND_A15: "passive", PERp0: "output", PERn0: "output", GND_A18: "passive", RSVD_A19: "passive", GND_A20: "passive", PERp1: "output", PERn1: "output", GND_A23: "passive", GND_A24: "passive", PERp2: "output", PERn2: "output", GND_A27: "passive", GND_A28: "passive", PERp3: "output", PERn3: "output", GND_A31: "passive", RSVD_A32: "passive", RSVD_A33: "passive", GND_A34: "passive", PERp4: "output", PERn4: "output", GND_A37: "passive", GND_A38: "passive", PERp5: "output", PERn5: "output", GND_A41: "passive", GND_A42: "passive", PERp6: "output", PERn6: "output", GND_A45: "passive", GND_A46: "passive", PERp7: "output", PERn7: "output", GND_A49: "passive", "+12V_B1": "power_in", "+12V_B2": "passive", "+12V_B3": "passive", GND_B4: "power_in", SMCLK: "input", SMDAT: "bidirectional", GND_B7: "passive", "+3.3V_B8": "power_in", JTAG1: "input", "3.3Vaux": "power_in", "~{WAKE}": "open_collector", RSVD_B12: "passive", GND_B13: "passive", PETp0: "input", PETn0: "input", GND_B16: "passive", "~{PRSNT2}_B17": "passive", GND_B18: "passive", PETp1: "input", PETn1: "input", GND_B21: "passive", GND_B22: "passive", PETp2: "input", PETn2: "input", GND_B25: "passive", GND_B26: "passive", PETp3: "input", PETn3: "input", GND_B29: "passive", RSVD_B30: "passive", "~{PRSNT2}_B31": "passive", GND_B32: "passive", PETp4: "input", PETn4: "input", GND_B35: "passive", GND_B36: "passive", PETp5: "input", PETn5: "input", GND_B39: "passive", GND_B40: "passive", PETp6: "input", PETn6: "input", GND_B43: "passive", GND_B44: "passive", PETp7: "input", PETn7: "input", GND_B47: "passive", "~{PRSNT2}_B48": "passive", GND_B49: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Bus_PCI_Express_x8";
  override referencePrefix = "J";
}

/**
 * 3 pin connector, PD-30
 *
 * KiCad symbol: `Connector:CUI_PD-30`. Reference prefix: `J`.
 * Footprint filters: CUI*PD*30*.
 * @see http://www.cui.com/product/resource/pd-30.pdf
 * Keywords: connector 3-pin PD-30 power DIN.
 * Default footprint: Connector:CUI_PD-30.
 */
export class CUI_PD_30 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "Shield": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:CUI_PD-30";
  override referencePrefix = "J";
}

/**
 * 3 pin connector, PD-30S
 *
 * KiCad symbol: `Connector:CUI_PD-30S`. Reference prefix: `J`.
 * Footprint filters: CUI*PD*30S*.
 * @see http://www.cui.com/product/resource/pd-30.pdf
 * Keywords: connector 3-pin PD-30S power DIN.
 * Default footprint: Connector:CUI_PD-30S.
 */
export class CUI_PD_30S extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "Shield_4": "4",
  "Shield_SH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", Shield_4: "passive", Shield_SH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:CUI_PD-30S";
  override referencePrefix = "J";
}

/**
 * Subminiature Coaxial Switch testpoint
 *
 * KiCad symbol: `Connector:CoaxialSwitch_Testpoint`. Reference prefix: `TP`.
 * Footprint filters: CoaxialSwitch*.
 * Keywords: Coaxial Switch RF testpoint.
 */
export class CoaxialSwitch_Testpoint extends Component.withPins({
  "PA": "A",
  "PC": "C",
  "PG": "G",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA: "passive", PC: "passive", PG: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:CoaxialSwitch_Testpoint";
  override referencePrefix = "TP";
}

/**
 * Generic connector, single row, 01x01, script generated
 *
 * KiCad symbol: `Connector:Conn_01x01_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x01_Pin extends Component.withPins({
  "Pin_1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x01_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x01, script generated
 *
 * KiCad symbol: `Connector:Conn_01x01_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x01_Socket extends Component.withPins({
  "Pin_1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x01_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x02, script generated
 *
 * KiCad symbol: `Connector:Conn_01x02_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x02_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x02_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x02, script generated
 *
 * KiCad symbol: `Connector:Conn_01x02_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x02_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x02_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x03, script generated
 *
 * KiCad symbol: `Connector:Conn_01x03_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x03_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x03_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x03, script generated
 *
 * KiCad symbol: `Connector:Conn_01x03_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x03_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x03_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x04, script generated
 *
 * KiCad symbol: `Connector:Conn_01x04_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x04_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x04_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x04, script generated
 *
 * KiCad symbol: `Connector:Conn_01x04_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x04_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x04_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x05, script generated
 *
 * KiCad symbol: `Connector:Conn_01x05_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x05_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x05_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x05, script generated
 *
 * KiCad symbol: `Connector:Conn_01x05_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x05_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x05_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x06, script generated
 *
 * KiCad symbol: `Connector:Conn_01x06_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x06_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x06_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x06, script generated
 *
 * KiCad symbol: `Connector:Conn_01x06_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x06_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x06_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x07, script generated
 *
 * KiCad symbol: `Connector:Conn_01x07_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x07_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x07_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x07, script generated
 *
 * KiCad symbol: `Connector:Conn_01x07_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x07_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x07_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x08, script generated
 *
 * KiCad symbol: `Connector:Conn_01x08_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x08_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x08_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x08, script generated
 *
 * KiCad symbol: `Connector:Conn_01x08_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x08_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x08_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x09, script generated
 *
 * KiCad symbol: `Connector:Conn_01x09_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x09_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x09_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x09, script generated
 *
 * KiCad symbol: `Connector:Conn_01x09_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x09_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x09_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x10, script generated
 *
 * KiCad symbol: `Connector:Conn_01x10_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x10_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x10_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x10, script generated
 *
 * KiCad symbol: `Connector:Conn_01x10_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x10_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x10_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x11, script generated
 *
 * KiCad symbol: `Connector:Conn_01x11_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x11_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x11_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x11, script generated
 *
 * KiCad symbol: `Connector:Conn_01x11_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x11_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x11_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x12, script generated
 *
 * KiCad symbol: `Connector:Conn_01x12_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x12_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x12_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x12, script generated
 *
 * KiCad symbol: `Connector:Conn_01x12_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x12_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x12_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x13, script generated
 *
 * KiCad symbol: `Connector:Conn_01x13_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x13_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x13_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x13, script generated
 *
 * KiCad symbol: `Connector:Conn_01x13_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x13_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x13_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x14, script generated
 *
 * KiCad symbol: `Connector:Conn_01x14_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x14_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x14_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x14, script generated
 *
 * KiCad symbol: `Connector:Conn_01x14_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x14_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x14_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x15, script generated
 *
 * KiCad symbol: `Connector:Conn_01x15_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x15_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x15_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x15, script generated
 *
 * KiCad symbol: `Connector:Conn_01x15_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x15_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x15_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x16, script generated
 *
 * KiCad symbol: `Connector:Conn_01x16_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x16_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x16_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x16, script generated
 *
 * KiCad symbol: `Connector:Conn_01x16_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x16_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x16_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x17, script generated
 *
 * KiCad symbol: `Connector:Conn_01x17_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x17_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x17_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x17, script generated
 *
 * KiCad symbol: `Connector:Conn_01x17_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x17_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x17_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x18, script generated
 *
 * KiCad symbol: `Connector:Conn_01x18_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x18_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x18_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x18, script generated
 *
 * KiCad symbol: `Connector:Conn_01x18_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x18_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x18_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x19, script generated
 *
 * KiCad symbol: `Connector:Conn_01x19_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x19_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x19_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x19, script generated
 *
 * KiCad symbol: `Connector:Conn_01x19_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x19_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x19_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x20, script generated
 *
 * KiCad symbol: `Connector:Conn_01x20_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x20_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x20_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x20, script generated
 *
 * KiCad symbol: `Connector:Conn_01x20_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x20_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x20_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x21, script generated
 *
 * KiCad symbol: `Connector:Conn_01x21_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x21_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x21_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x21, script generated
 *
 * KiCad symbol: `Connector:Conn_01x21_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x21_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x21_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x22, script generated
 *
 * KiCad symbol: `Connector:Conn_01x22_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x22_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x22_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x22, script generated
 *
 * KiCad symbol: `Connector:Conn_01x22_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x22_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x22_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x23, script generated
 *
 * KiCad symbol: `Connector:Conn_01x23_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x23_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x23_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x23, script generated
 *
 * KiCad symbol: `Connector:Conn_01x23_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x23_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x23_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x24, script generated
 *
 * KiCad symbol: `Connector:Conn_01x24_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x24_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x24_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x24, script generated
 *
 * KiCad symbol: `Connector:Conn_01x24_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x24_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x24_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x25, script generated
 *
 * KiCad symbol: `Connector:Conn_01x25_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x25_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x25_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x25, script generated
 *
 * KiCad symbol: `Connector:Conn_01x25_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x25_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x25_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x26, script generated
 *
 * KiCad symbol: `Connector:Conn_01x26_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x26_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x26_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x26, script generated
 *
 * KiCad symbol: `Connector:Conn_01x26_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x26_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x26_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x27, script generated
 *
 * KiCad symbol: `Connector:Conn_01x27_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x27_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x27_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x27, script generated
 *
 * KiCad symbol: `Connector:Conn_01x27_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x27_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x27_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x28, script generated
 *
 * KiCad symbol: `Connector:Conn_01x28_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x28_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x28_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x28, script generated
 *
 * KiCad symbol: `Connector:Conn_01x28_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x28_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x28_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x29, script generated
 *
 * KiCad symbol: `Connector:Conn_01x29_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x29_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x29_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x29, script generated
 *
 * KiCad symbol: `Connector:Conn_01x29_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x29_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x29_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x30, script generated
 *
 * KiCad symbol: `Connector:Conn_01x30_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x30_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x30_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x30, script generated
 *
 * KiCad symbol: `Connector:Conn_01x30_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x30_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x30_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x31, script generated
 *
 * KiCad symbol: `Connector:Conn_01x31_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x31_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x31_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x31, script generated
 *
 * KiCad symbol: `Connector:Conn_01x31_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x31_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x31_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x32, script generated
 *
 * KiCad symbol: `Connector:Conn_01x32_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x32_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x32_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x32, script generated
 *
 * KiCad symbol: `Connector:Conn_01x32_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x32_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x32_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x33, script generated
 *
 * KiCad symbol: `Connector:Conn_01x33_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x33_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x33_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x33, script generated
 *
 * KiCad symbol: `Connector:Conn_01x33_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x33_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x33_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x34, script generated
 *
 * KiCad symbol: `Connector:Conn_01x34_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x34_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x34_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x34, script generated
 *
 * KiCad symbol: `Connector:Conn_01x34_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x34_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x34_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x35, script generated
 *
 * KiCad symbol: `Connector:Conn_01x35_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x35_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x35_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x35, script generated
 *
 * KiCad symbol: `Connector:Conn_01x35_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x35_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x35_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x36, script generated
 *
 * KiCad symbol: `Connector:Conn_01x36_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x36_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x36_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x36, script generated
 *
 * KiCad symbol: `Connector:Conn_01x36_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x36_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x36_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x37, script generated
 *
 * KiCad symbol: `Connector:Conn_01x37_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x37_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x37_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x37, script generated
 *
 * KiCad symbol: `Connector:Conn_01x37_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x37_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x37_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x38, script generated
 *
 * KiCad symbol: `Connector:Conn_01x38_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x38_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x38_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x38, script generated
 *
 * KiCad symbol: `Connector:Conn_01x38_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x38_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x38_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x39, script generated
 *
 * KiCad symbol: `Connector:Conn_01x39_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x39_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x39_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x39, script generated
 *
 * KiCad symbol: `Connector:Conn_01x39_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x39_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x39_Socket";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x40, script generated
 *
 * KiCad symbol: `Connector:Conn_01x40_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x40_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x40_Pin";
  override referencePrefix = "J";
}

/**
 * Generic connector, single row, 01x40, script generated
 *
 * KiCad symbol: `Connector:Conn_01x40_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x40_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x40_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x41, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x41_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x41_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x41_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x41, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x41_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x41_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x41_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x42, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x42_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x42_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x42_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x42, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x42_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x42_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x42_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x43, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x43_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x43_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x43_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x43, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x43_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x43_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x43_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x44, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x44_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x44_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x44_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x44, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x44_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x44_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x44_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x45, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x45_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x45_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x45_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x45, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x45_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x45_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x45_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x46, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x46_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x46_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x46_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x46, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x46_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x46_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x46_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x47, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x47_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x47_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x47_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x47, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x47_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x47_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x47_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x48, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x48_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x48_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x48_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x48, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x48_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x48_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x48_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x49, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x49_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x49_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x49_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x49, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x49_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x49_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x49_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x50, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x50_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x50_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x50_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x50, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x50_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x50_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x50_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x51, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x51_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x51_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x51_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x51, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x51_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x51_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x51_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x52, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x52_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x52_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x52_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x52, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x52_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x52_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x52_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x53, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x53_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x53_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x53_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x53, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x53_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x53_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x53_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x54, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x54_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x54_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x54_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x54, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x54_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x54_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x54_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x55, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x55_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x55_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x55_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x55, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x55_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x55_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x55_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x56, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x56_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x56_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x56_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x56, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x56_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x56_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x56_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x57, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x57_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x57_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
  "Pin_57": "57",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", Pin_57: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x57_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x57, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x57_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x57_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
  "Pin_57": "57",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", Pin_57: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x57_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x58, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x58_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x58_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
  "Pin_57": "57",
  "Pin_58": "58",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", Pin_57: "passive", Pin_58: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x58_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x58, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x58_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x58_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
  "Pin_57": "57",
  "Pin_58": "58",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", Pin_57: "passive", Pin_58: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x58_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x59, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x59_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x59_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
  "Pin_57": "57",
  "Pin_58": "58",
  "Pin_59": "59",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", Pin_57: "passive", Pin_58: "passive", Pin_59: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x59_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x59, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x59_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x59_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
  "Pin_57": "57",
  "Pin_58": "58",
  "Pin_59": "59",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", Pin_57: "passive", Pin_58: "passive", Pin_59: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x59_Socket";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x60, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x60_Pin`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x60_Pin extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
  "Pin_57": "57",
  "Pin_58": "58",
  "Pin_59": "59",
  "Pin_60": "60",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", Pin_57: "passive", Pin_58: "passive", Pin_59: "passive", Pin_60: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x60_Pin";
  override referencePrefix = "J";
}

/**
 * "Generic connector, single row, 01x60, script generated"
 *
 * KiCad symbol: `Connector:Conn_01x60_Socket`. Reference prefix: `J`.
 * Footprint filters: Connector*:*_1x??_*.
 * Keywords: connector.
 */
export class Conn_01x60_Socket extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
  "Pin_21": "21",
  "Pin_22": "22",
  "Pin_23": "23",
  "Pin_24": "24",
  "Pin_25": "25",
  "Pin_26": "26",
  "Pin_27": "27",
  "Pin_28": "28",
  "Pin_29": "29",
  "Pin_30": "30",
  "Pin_31": "31",
  "Pin_32": "32",
  "Pin_33": "33",
  "Pin_34": "34",
  "Pin_35": "35",
  "Pin_36": "36",
  "Pin_37": "37",
  "Pin_38": "38",
  "Pin_39": "39",
  "Pin_40": "40",
  "Pin_41": "41",
  "Pin_42": "42",
  "Pin_43": "43",
  "Pin_44": "44",
  "Pin_45": "45",
  "Pin_46": "46",
  "Pin_47": "47",
  "Pin_48": "48",
  "Pin_49": "49",
  "Pin_50": "50",
  "Pin_51": "51",
  "Pin_52": "52",
  "Pin_53": "53",
  "Pin_54": "54",
  "Pin_55": "55",
  "Pin_56": "56",
  "Pin_57": "57",
  "Pin_58": "58",
  "Pin_59": "59",
  "Pin_60": "60",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", Pin_21: "passive", Pin_22: "passive", Pin_23: "passive", Pin_24: "passive", Pin_25: "passive", Pin_26: "passive", Pin_27: "passive", Pin_28: "passive", Pin_29: "passive", Pin_30: "passive", Pin_31: "passive", Pin_32: "passive", Pin_33: "passive", Pin_34: "passive", Pin_35: "passive", Pin_36: "passive", Pin_37: "passive", Pin_38: "passive", Pin_39: "passive", Pin_40: "passive", Pin_41: "passive", Pin_42: "passive", Pin_43: "passive", Pin_44: "passive", Pin_45: "passive", Pin_46: "passive", Pin_47: "passive", Pin_48: "passive", Pin_49: "passive", Pin_50: "passive", Pin_51: "passive", Pin_52: "passive", Pin_53: "passive", Pin_54: "passive", Pin_55: "passive", Pin_56: "passive", Pin_57: "passive", Pin_58: "passive", Pin_59: "passive", Pin_60: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_01x60_Socket";
  override referencePrefix = "J";
}

/**
 * Connector Europe, 60 contacts, ranges A,B,C,D
 *
 * KiCad symbol: `Connector:Conn_15X4`. Reference prefix: `J`.
 * Keywords: connector.
 */
export class Conn_15X4 extends Component.withPins({
  "1A": "A1",
  "2A": "A2",
  "3A": "A3",
  "4A": "A4",
  "5A": "A5",
  "6A": "A6",
  "7A": "A7",
  "8A": "A8",
  "9A": "A9",
  "10A": "A10",
  "11A": "A11",
  "12A": "A12",
  "13A": "A13",
  "14A": "A14",
  "15A": "A15",
  "1B": "B1",
  "2B": "B2",
  "3B": "B3",
  "4B": "B4",
  "5B": "B5",
  "6B": "B6",
  "7B": "B7",
  "8B": "B8",
  "9B": "B9",
  "10B": "B10",
  "11B": "B11",
  "12B": "B12",
  "13B": "B13",
  "14B": "B14",
  "15B": "B15",
  "1C": "C1",
  "2C": "C2",
  "3C": "C3",
  "4C": "C4",
  "5C": "C5",
  "6C": "C6",
  "7C": "C7",
  "8C": "C8",
  "9C": "C9",
  "10C": "C10",
  "11C": "C11",
  "12C": "C12",
  "13C": "C13",
  "14C": "C14",
  "15C": "C15",
  "1D": "D1",
  "2D": "D2",
  "3D": "D3",
  "4D": "D4",
  "5D": "D5",
  "6D": "D6",
  "7D": "D7",
  "8D": "D8",
  "9D": "D9",
  "10D": "D10",
  "11D": "D11",
  "12D": "D12",
  "13D": "D13",
  "14D": "D14",
  "15D": "D15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "passive", "2A": "passive", "3A": "passive", "4A": "passive", "5A": "passive", "6A": "passive", "7A": "passive", "8A": "passive", "9A": "passive", "10A": "passive", "11A": "passive", "12A": "passive", "13A": "passive", "14A": "passive", "15A": "passive", "1B": "passive", "2B": "passive", "3B": "passive", "4B": "passive", "5B": "passive", "6B": "passive", "7B": "passive", "8B": "passive", "9B": "passive", "10B": "passive", "11B": "passive", "12B": "passive", "13B": "passive", "14B": "passive", "15B": "passive", "1C": "passive", "2C": "passive", "3C": "passive", "4C": "passive", "5C": "passive", "6C": "passive", "7C": "passive", "8C": "passive", "9C": "passive", "10C": "passive", "11C": "passive", "12C": "passive", "13C": "passive", "14C": "passive", "15C": "passive", "1D": "passive", "2D": "passive", "3D": "passive", "4D": "passive", "5D": "passive", "6D": "passive", "7D": "passive", "8D": "passive", "9D": "passive", "10D": "passive", "11D": "passive", "12D": "passive", "13D": "passive", "14D": "passive", "15D": "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_15X4";
  override referencePrefix = "J";
}

/**
 * Arm Cortex Debug+ETM Connector
 *
 * KiCad symbol: `Connector:Conn_ARM_Cortex_Debug_ETM_20`. Reference prefix: `J`.
 * Footprint filters: PinHeader?2x10?P1.27mm*.
 * @see http://infocenter.arm.com/help/topic/com.arm.doc.ddi0314h/DDI0314H_coresight_components_trm.pdf
 * Keywords: Trace.
 */
export class Conn_ARM_Cortex_Debug_ETM_20 extends Component.withPins({
  "SWDIO/TMS": "2",
  "GND_3": "3",
  "SWDCLK/TCK": "4",
  "SWO/TDO": "6",
  "NC/TDI": "8",
  "GNDDetect": "9",
  "~{RESET}": "10",
  "TRACECLK": "12",
  "TRACEDATA0": "14",
  "TRACEDATA1": "16",
  "TRACEDATA2": "18",
  "TRACEDATA3": "20",
  "VTref": "1",
  "GND_5": "5",
  "KEY": "7",
  "GND_11": "11",
  "GND_13": "13",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SWDIO/TMS": "bidirectional", GND_3: "power_in", "SWDCLK/TCK": "output", "SWO/TDO": "input", "NC/TDI": "output", GNDDetect: "passive", "~{RESET}": "open_collector", TRACECLK: "input", TRACEDATA0: "input", TRACEDATA1: "input", TRACEDATA2: "input", TRACEDATA3: "input", VTref: "power_in", GND_5: "passive", KEY: "no_connect", GND_11: "passive", GND_13: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_ARM_Cortex_Debug_ETM_20";
  override referencePrefix = "J";
}

/**
 * Cortex Debug Connector, standard ARM Cortex-M SWD and JTAG interface
 *
 * KiCad symbol: `Connector:Conn_ARM_JTAG_SWD_10`. Reference prefix: `J`.
 * Footprint filters: PinHeader?2x05?P1.27mm*.
 * @see http://infocenter.arm.com/help/topic/com.arm.doc.ddi0314h/DDI0314H_coresight_components_trm.pdf
 * Keywords: Cortex Debug Connector ARM SWD JTAG.
 */
export class Conn_ARM_JTAG_SWD_10 extends Component.withPins({
  "VTref": "1",
  "SWDIO/TMS": "2",
  "GND_3": "3",
  "SWCLK/TCK": "4",
  "GND_5": "5",
  "SWO/TDO": "6",
  "KEY": "7",
  "NC/TDI": "8",
  "GNDDetect": "9",
  "~{RESET}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VTref: "power_in", "SWDIO/TMS": "bidirectional", GND_3: "power_in", "SWCLK/TCK": "output", GND_5: "passive", "SWO/TDO": "input", KEY: "no_connect", "NC/TDI": "output", GNDDetect: "passive", "~{RESET}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_ARM_JTAG_SWD_10";
  override referencePrefix = "J";
}

/**
 * Standard IDC20 Pinheader Connector, ARM legacy JTAG and SWD interface
 *
 * KiCad symbol: `Connector:Conn_ARM_JTAG_SWD_20`. Reference prefix: `J`.
 * Footprint filters: IDC*Header*P2.54mm*, PinHeader*2x10*P2.54mm*.
 * @see http://infocenter.arm.com/help/topic/com.arm.doc.dui0499b/DUI0499B_system_design_reference.pdf
 * Keywords: IDC20 Pinheader Pins Connector ARM JTAG SWD.
 */
export class Conn_ARM_JTAG_SWD_20 extends Component.withPins({
  "VTREF": "1",
  "VCC/NC": "2",
  "~{TRST}": "3",
  "GND_4": "4",
  "TDI": "5",
  "GND_6": "6",
  "TMS/SWDIO": "7",
  "GND_8": "8",
  "TCK/SWCLK": "9",
  "GND_10": "10",
  "RTCK": "11",
  "GND_12": "12",
  "TDO/SWO": "13",
  "GND_14": "14",
  "~{SRST}": "15",
  "GND_16": "16",
  "DBGRQ/NC": "17",
  "GND_18": "18",
  "DBGACK/NC": "19",
  "GND_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VTREF: "power_in", "VCC/NC": "power_in", "~{TRST}": "output", GND_4: "power_in", TDI: "output", GND_6: "passive", "TMS/SWDIO": "output", GND_8: "passive", "TCK/SWCLK": "output", GND_10: "passive", RTCK: "input", GND_12: "passive", "TDO/SWO": "input", GND_14: "passive", "~{SRST}": "bidirectional", GND_16: "passive", "DBGRQ/NC": "output", GND_18: "passive", "DBGACK/NC": "input", GND_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_ARM_JTAG_SWD_20";
  override referencePrefix = "J";
}

/**
 * Tag-Connect ARM Cortex SWD JTAG connector, 6 pin
 *
 * KiCad symbol: `Connector:Conn_ARM_SWD_TagConnect_TC2030`. Reference prefix: `J`.
 * Footprint filters: *TC2030*.
 * @see https://www.tag-connect.com/wp-content/uploads/bsk-pdf-manager/TC2030-CTX_1.pdf
 * Keywords: Cortex Debug Connector ARM SWD JTAG.
 * Default footprint: Connector:Tag-Connect_TC2030-IDC-FP_2x03_P1.27mm_Vertical.
 */
export class Conn_ARM_SWD_TagConnect_TC2030 extends Component.withPins({
  "VCC": "1",
  "SWDIO": "2",
  "~{RESET}": "3",
  "SWCLK": "4",
  "GND": "5",
  "SWO": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", SWDIO: "bidirectional", "~{RESET}": "open_collector", SWCLK: "output", GND: "power_in", SWO: "input", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Connector:Conn_ARM_SWD_TagConnect_TC2030";
  override referencePrefix = "J";
}

/**
 * Tag-Connect ARM Cortex SWD JTAG connector, 6 pin, no legs
 *
 * KiCad symbol: `Connector:Conn_ARM_SWD_TagConnect_TC2030-NL`. Reference prefix: `J`.
 * Footprint filters: *TC2030*.
 * @see https://www.tag-connect.com/wp-content/uploads/bsk-pdf-manager/TC2030-CTX_1.pdf
 * Keywords: Cortex Debug Connector ARM SWD JTAG.
 * Default footprint: Connector:Tag-Connect_TC2030-IDC-NL_2x03_P1.27mm_Vertical.
 */
export class Conn_ARM_SWD_TagConnect_TC2030_NL extends Component.withPins({
  "VCC": "1",
  "SWDIO": "2",
  "~{RESET}": "3",
  "SWCLK": "4",
  "GND": "5",
  "SWO": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", SWDIO: "bidirectional", "~{RESET}": "open_collector", SWCLK: "output", GND: "power_in", SWO: "input", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Connector:Conn_ARM_SWD_TagConnect_TC2030-NL";
  override referencePrefix = "J";
}

/**
 * coaxial connector (BNC, SMA, SMB, SMC, Cinch/RCA, LEMO, ...)
 *
 * KiCad symbol: `Connector:Conn_Coaxial`. Reference prefix: `J`.
 * Footprint filters: *BNC*, *SMA*, *SMB*, *SMC*, *Cinch*, *LEMO*, *UMRF*, *MCX*, *U.FL*.
 * Keywords: BNC SMA SMB SMC LEMO coaxial connector CINCH RCA MCX MMCX U.FL UMRF.
 */
export class Conn_Coaxial extends Component.withPins({
  "In": "1",
  "Ext": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { In: "passive", Ext: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Coaxial";
  override referencePrefix = "J";
}

/**
 * coaxial connector (BNC, SMA, SMB, SMC, Cinch/RCA, LEMO, ...)
 *
 * KiCad symbol: `Connector:Conn_Coaxial_Power`. Reference prefix: `J`.
 * Footprint filters: *BNC*, *SMA*, *SMB*, *SMC*, *Cinch*, *LEMO*.
 * Keywords: BNC SMA SMB SMC LEMO coaxial connector CINCH RCA.
 */
export class Conn_Coaxial_Power extends Component.withPins({
  "In": "1",
  "Ext": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { In: "passive", Ext: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Coaxial_Power";
  override referencePrefix = "J";
}

/**
 * small coaxial connector (BNC, SMA, SMB, SMC, Cinch/RCA, LEMO, ...)
 *
 * KiCad symbol: `Connector:Conn_Coaxial_Small`. Reference prefix: `J`.
 * Footprint filters: *BNC*, *SMA*, *SMB*, *SMC*, *Cinch*, *LEMO*, *UMRF*, *MCX*, *U.FL*.
 * Keywords: BNC SMA SMB SMC LEMO coaxial connector CINCH RCA MCX MMCX U.FL UMRF.
 */
export class Conn_Coaxial_Small extends Component.withPins({
  "In": "1",
  "Ext": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { In: "passive", Ext: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Coaxial_Small";
  override referencePrefix = "J";
}

/**
 * double coaxial connector (BNC, SMA, SMB, SMC, Cinch/RCA, LEMO, ...)
 *
 * KiCad symbol: `Connector:Conn_Coaxial_x2`. Reference prefix: `J`.
 * Footprint filters: *BNC*, *SMA*, *SMB*, *SMC*, *Cinch*, *LEMO*.
 * Keywords: BNC SMA SMB SMC LEMO coaxial connector CINCH RCA.
 */
export class Conn_Coaxial_x2 extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "EXT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "passive", IN2: "passive", EXT: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Coaxial_x2";
  override referencePrefix = "J";
}

/**
 * coaxial connector (BNC, SMA, SMB, SMC, Cinch/RCA, LEMO, ...)
 *
 * KiCad symbol: `Connector:Conn_Coaxial_x2_Isolated`. Reference prefix: `J`.
 * Footprint filters: *BNC*, *SMA*, *SMB*, *SMC*, *Cinch*, *LEMO*.
 * Keywords: BNC SMA SMB SMC LEMO coaxial connector CINCH RCA.
 */
export class Conn_Coaxial_x2_Isolated extends Component.withPins({
  "In1": "1",
  "Ext1": "2",
  "In2": "3",
  "Ext2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { In1: "passive", Ext1: "passive", In2: "passive", Ext2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Coaxial_x2_Isolated";
  override referencePrefix = "J";
}

/**
 * Microchip PIC In-Circuit Serial Programming/Debugging (ICSP/ICD) connector
 *
 * KiCad symbol: `Connector:Conn_PIC_ICSP_ICD`. Reference prefix: `J`.
 * Footprint filters: PinHeader*1x06*P2.54mm*, PinSocket*1x06*P2.54mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30277d.pdf
 * Keywords: icsp icd pic microchip.
 */
export class Conn_PIC_ICSP_ICD extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "VDD": "2",
  "VSS": "3",
  "PGD/ICSPDAT": "4",
  "PGC/ICSPCLK": "5",
  "PGM/LVP": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "passive", VDD: "passive", VSS: "power_in", "PGD/ICSPDAT": "bidirectional", "PGC/ICSPCLK": "output", "PGM/LVP": "output", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_PIC_ICSP_ICD";
  override referencePrefix = "J";
}

/**
 * 2 Pins non-protected generic plug
 *
 * KiCad symbol: `Connector:Conn_Plug_2P`. Reference prefix: `P`.
 * Footprint filters: CEE*7/2*, CEE*7/16*, CEE*7/17*, NEMA*1?15*, SN?441011*Type?11*.
 * Keywords: 2P mains plug wall.
 */
export class Conn_Plug_2P extends Component.withPins({
  "L": "1",
  "N": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { L: "power_in", N: "power_out", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Plug_2P";
  override referencePrefix = "P";
}

/**
 * 3 Pins protected generic plug
 *
 * KiCad symbol: `Connector:Conn_Plug_3P_Protected`. Reference prefix: `P`.
 * Footprint filters: CEE*7/2*, CEE*7/16*, CEE*7/17*, NEMA*1?15*, SN?441011?Type*11*.
 * Keywords: 3P mains plug protected wall.
 */
export class Conn_Plug_3P_Protected extends Component.withPins({
  "L": "1",
  "N": "2",
  "PE": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { L: "power_in", N: "power_out", PE: "power_out", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Plug_3P_Protected";
  override referencePrefix = "P";
}

/**
 * 2 Pins non-protected generic plug
 *
 * KiCad symbol: `Connector:Conn_Receptacle_2P`. Reference prefix: `J`.
 * Footprint filters: CEE*7/2*, CEE*7/16*, CEE*7/17*, NEMA*1?15*, SN?441011*Type?11*.
 * Keywords: 2P mains receptacle wall.
 */
export class Conn_Receptacle_2P extends Component.withPins({
  "L": "1",
  "N": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { L: "power_in", N: "power_out", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Receptacle_2P";
  override referencePrefix = "J";
}

/**
 * 3 Pins protected generic receptacle
 *
 * KiCad symbol: `Connector:Conn_Receptacle_3P_Protected`. Reference prefix: `J`.
 * Footprint filters: CEE*7/2*, CEE*7/16*, CEE*7/17*, NEMA*1?15*, SN?441011?Type*11*.
 * Keywords: 3P mains receptacle protected wall.
 */
export class Conn_Receptacle_3P_Protected extends Component.withPins({
  "N": "1",
  "L": "2",
  "PE": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { N: "power_out", L: "power_in", PE: "power_out", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Receptacle_3P_Protected";
  override referencePrefix = "J";
}

/**
 * ST Debug Connector, standard ARM Cortex-M SWD and JTAG interface plus UART
 *
 * KiCad symbol: `Connector:Conn_ST_STDC14`. Reference prefix: `J`.
 * Footprint filters: PinHeader?2x07?P1.27mm*.
 * @see https://www.st.com/content/ccc/resource/technical/document/user_manual/group1/99/49/91/b6/b2/3a/46/e5/DM00526767/files/DM00526767.pdf/jcr:content/translations/en.DM00526767.pdf
 * Keywords: ST STM32 Cortex Debug Connector ARM SWD JTAG.
 */
export class Conn_ST_STDC14 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "VCC": "3",
  "JTMS/SWDIO": "4",
  "GND_5": "5",
  "JCLK/SWCLK": "6",
  "GND_7": "7",
  "JTDO/SWO": "8",
  "JRCLK/NC": "9",
  "JTDI/NC": "10",
  "GNDDetect": "11",
  "~{RST}": "12",
  "VCP_RX": "13",
  "VCP_TX": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", VCC: "power_in", "JTMS/SWDIO": "bidirectional", GND_5: "power_in", "JCLK/SWCLK": "output", GND_7: "passive", "JTDO/SWO": "input", "JRCLK/NC": "input", "JTDI/NC": "output", GNDDetect: "passive", "~{RST}": "open_collector", VCP_RX: "output", VCP_TX: "input", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_ST_STDC14";
  override referencePrefix = "J";
}

/**
 * triaxial connector (LEMO 00.302, ...)
 *
 * KiCad symbol: `Connector:Conn_Shielded_Pair`. Reference prefix: `J`.
 * Footprint filters: *LEMO*.
 * Keywords: LEMO triaxial connector differential LVDS Conn_Triaxial.
 */
export class Conn_Shielded_Pair extends Component.withPins({
  "In1": "1",
  "In2": "2",
  "Ext": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { In1: "passive", In2: "passive", Ext: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Shielded_Pair";
  override referencePrefix = "J";
}

/**
 * triaxial connector (LEMO 00.302, ...)
 *
 * KiCad symbol: `Connector:Conn_Triaxial`. Reference prefix: `J`.
 * Footprint filters: *LEMO*.
 * Keywords: LEMO triaxial connector differential LVDS.
 */
export class Conn_Triaxial extends Component.withPins({
  "In1": "1",
  "In2": "2",
  "Ext": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { In1: "passive", In2: "passive", Ext: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Triaxial";
  override referencePrefix = "J";
}

/**
 * triaxial connector (LEMO 00.302, ...)
 *
 * KiCad symbol: `Connector:Conn_Triaxial_Same_Side`. Reference prefix: `J`.
 * Footprint filters: *LEMO*.
 * Keywords: LEMO triaxial connector differential LVDS.
 */
export class Conn_Triaxial_Same_Side extends Component.withPins({
  "In1": "1",
  "In2": "2",
  "Ext": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { In1: "passive", In2: "passive", Ext: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Conn_Triaxial_Same_Side";
  override referencePrefix = "J";
}

/**
 * 15-pin D-SUB connector, pins (male) (low-density/2 columns)
 *
 * KiCad symbol: `Connector:DA15_Pins`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB.
 */
export class DA15_Pins extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P111": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P111: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DA15_Pins";
  override referencePrefix = "J";
}

/**
 * 15-pin D-SUB connector, pins (male) (low-density/2 columns), Mounting Hole
 *
 * KiCad symbol: `Connector:DA15_Pins_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB.
 */
export class DA15_Pins_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P111": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "PAD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P111: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DA15_Pins_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 15-pin D-SUB connector, socket (female) (low-density/2 columns)
 *
 * KiCad symbol: `Connector:DA15_Socket`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB.
 */
export class DA15_Socket extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P111": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P111: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DA15_Socket";
  override referencePrefix = "J";
}

/**
 * 15-pin D-SUB connector, socket (female) (low-density/2 columns), Mounting Hole
 *
 * KiCad symbol: `Connector:DA15_Socket_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB.
 */
export class DA15_Socket_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P111": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "PAD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P111: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DA15_Socket_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 25-pin D-SUB connector, pins (male)
 *
 * KiCad symbol: `Connector:DB25_Pins`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB.
 */
export class DB25_Pins extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DB25_Pins";
  override referencePrefix = "J";
}

/**
 * 25-pin D-SUB connector, pins (male), Mounting Hole
 *
 * KiCad symbol: `Connector:DB25_Pins_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB.
 */
export class DB25_Pins_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
  "PAD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DB25_Pins_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 25-pin D-SUB connector, socket (female)
 *
 * KiCad symbol: `Connector:DB25_Socket`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB.
 */
export class DB25_Socket extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DB25_Socket";
  override referencePrefix = "J";
}

/**
 * 25-pin D-SUB connector, socket (female), Mounting Hole
 *
 * KiCad symbol: `Connector:DB25_Socket_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB.
 */
export class DB25_Socket_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
  "PAD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DB25_Socket_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 37-pin D-SUB connector, pins (male)
 *
 * KiCad symbol: `Connector:DC37_Pins`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB.
 */
export class DC37_Pins extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
  "P26": "26",
  "P27": "27",
  "P28": "28",
  "P29": "29",
  "P30": "30",
  "P31": "31",
  "P32": "32",
  "P33": "33",
  "P34": "34",
  "P35": "35",
  "P36": "36",
  "P37": "37",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", P26: "passive", P27: "passive", P28: "passive", P29: "passive", P30: "passive", P31: "passive", P32: "passive", P33: "passive", P34: "passive", P35: "passive", P36: "passive", P37: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DC37_Pins";
  override referencePrefix = "J";
}

/**
 * 37-pin D-SUB connector, pins (male), Mounting Hole
 *
 * KiCad symbol: `Connector:DC37_Pins_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB.
 */
export class DC37_Pins_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
  "P26": "26",
  "P27": "27",
  "P28": "28",
  "P29": "29",
  "P30": "30",
  "P31": "31",
  "P32": "32",
  "P33": "33",
  "P34": "34",
  "P35": "35",
  "P36": "36",
  "P37": "37",
  "PAD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", P26: "passive", P27: "passive", P28: "passive", P29: "passive", P30: "passive", P31: "passive", P32: "passive", P33: "passive", P34: "passive", P35: "passive", P36: "passive", P37: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DC37_Pins_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 37-pin D-SUB connector, socket (female)
 *
 * KiCad symbol: `Connector:DC37_Socket`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB.
 */
export class DC37_Socket extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
  "P26": "26",
  "P27": "27",
  "P28": "28",
  "P29": "29",
  "P30": "30",
  "P31": "31",
  "P32": "32",
  "P33": "33",
  "P34": "34",
  "P35": "35",
  "P36": "36",
  "P37": "37",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", P26: "passive", P27: "passive", P28: "passive", P29: "passive", P30: "passive", P31: "passive", P32: "passive", P33: "passive", P34: "passive", P35: "passive", P36: "passive", P37: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DC37_Socket";
  override referencePrefix = "J";
}

/**
 * 37-pin D-SUB connector, socket (female), Mounting Hole
 *
 * KiCad symbol: `Connector:DC37_Socket_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB.
 */
export class DC37_Socket_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
  "P26": "26",
  "P27": "27",
  "P28": "28",
  "P29": "29",
  "P30": "30",
  "P31": "31",
  "P32": "32",
  "P33": "33",
  "P34": "34",
  "P35": "35",
  "P36": "36",
  "P37": "37",
  "PAD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", P26: "passive", P27: "passive", P28: "passive", P29: "passive", P30: "passive", P31: "passive", P32: "passive", P33: "passive", P34: "passive", P35: "passive", P36: "passive", P37: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DC37_Socket_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 15-pin male plug socket D-SUB connector, High density (3 columns), Triple Row, Generic, VGA-connector
 *
 * KiCad symbol: `Connector:DE15_Pins_HighDensity`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB VGA.
 */
export class DE15_Pins_HighDensity extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DE15_Pins_HighDensity";
  override referencePrefix = "J";
}

/**
 * 15-pin male plug socket D-SUB connector, High density (3 columns), Triple Row, Generic, VGA-connector, Mounting Hole
 *
 * KiCad symbol: `Connector:DE15_Pins_HighDensity_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB VGA.
 */
export class DE15_Pins_HighDensity_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DE15_Pins_HighDensity_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 15-pin D-SUB connector, socket (female), High density (3 columns), Triple Row, Generic, VGA-connector
 *
 * KiCad symbol: `Connector:DE15_Socket_HighDensity`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB VGA.
 */
export class DE15_Socket_HighDensity extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DE15_Socket_HighDensity";
  override referencePrefix = "J";
}

/**
 * 15-pin D-SUB connector, socket (female), High density (3 columns), Triple Row, Generic, VGA-connector, Mounting Hole
 *
 * KiCad symbol: `Connector:DE15_Socket_HighDensity_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB VGA.
 */
export class DE15_Socket_HighDensity_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DE15_Socket_HighDensity_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 9-pin D-SUB connector, pins (male)
 *
 * KiCad symbol: `Connector:DE9_Pins`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB DB9.
 */
export class DE9_Pins extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DE9_Pins";
  override referencePrefix = "J";
}

/**
 * 9-pin D-SUB connector, pins (male), Mounting Hole
 *
 * KiCad symbol: `Connector:DE9_Pins_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Pins*.
 * Keywords: DSUB DB9.
 */
export class DE9_Pins_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "PAD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DE9_Pins_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 9-pin D-SUB connector, socket (female)
 *
 * KiCad symbol: `Connector:DE9_Socket`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB DB9.
 */
export class DE9_Socket extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DE9_Socket";
  override referencePrefix = "J";
}

/**
 * 9-pin D-SUB connector, socket (female), Mounting Hole
 *
 * KiCad symbol: `Connector:DE9_Socket_MountingHoles`. Reference prefix: `J`.
 * Footprint filters: DSUB*Socket*.
 * Keywords: DSUB DB9.
 */
export class DE9_Socket_MountingHoles extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "PAD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DE9_Socket_MountingHoles";
  override referencePrefix = "J";
}

/**
 * 3-pin DIN connector
 *
 * KiCad symbol: `Connector:DIN-3`. Reference prefix: `J`.
 * Footprint filters: DIN*.
 * @see http://www.mouser.com/ds/2/18/40_c091_abd_e-75918.pdf
 * Keywords: circular DIN connector.
 */
export class DIN_3 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN-3";
  override referencePrefix = "J";
}

/**
 * 4-pin DIN connector
 *
 * KiCad symbol: `Connector:DIN-4`. Reference prefix: `J`.
 * Footprint filters: DIN*.
 * @see http://www.mouser.com/ds/2/18/40_c091_abd_e-75918.pdf
 * Keywords: circular DIN connector.
 */
export class DIN_4 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN-4";
  override referencePrefix = "J";
}

/**
 * 5-pin DIN connector
 *
 * KiCad symbol: `Connector:DIN-5`. Reference prefix: `J`.
 * Footprint filters: DIN*.
 * @see http://www.mouser.com/ds/2/18/40_c091_abd_e-75918.pdf
 * Keywords: circular DIN connector.
 */
export class DIN_5 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN-5";
  override referencePrefix = "J";
}

/**
 * 5-pin DIN connector (5-pin DIN-5 stereo)
 *
 * KiCad symbol: `Connector:DIN-5_180degree`. Reference prefix: `J`.
 * Footprint filters: DIN*.
 * @see http://www.mouser.com/ds/2/18/40_c091_abd_e-75918.pdf
 * Keywords: circular DIN connector stereo audio.
 */
export class DIN_5_180degree extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN-5_180degree";
  override referencePrefix = "J";
}

/**
 * 6-pin DIN connector
 *
 * KiCad symbol: `Connector:DIN-6`. Reference prefix: `J`.
 * Footprint filters: DIN*.
 * @see http://www.mouser.com/ds/2/18/40_c091_abd_e-75918.pdf
 * Keywords: circular DIN connector.
 */
export class DIN_6 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN-6";
  override referencePrefix = "J";
}

/**
 * 7-pin DIN connector
 *
 * KiCad symbol: `Connector:DIN-7`. Reference prefix: `J`.
 * Footprint filters: DIN*.
 * @see http://www.mouser.com/ds/2/18/40_c091_abd_e-75918.pdf
 * Keywords: circular DIN connector.
 */
export class DIN_7 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN-7";
  override referencePrefix = "J";
}

/**
 * 7-pin DIN connector with pin 7 in center
 *
 * KiCad symbol: `Connector:DIN-7_CenterPin7`. Reference prefix: `J`.
 * Footprint filters: DIN*.
 * @see http://www.mouser.com/ds/2/18/40_c091_abd_e-75918.pdf
 * Keywords: circular DIN connector.
 */
export class DIN_7_CenterPin7 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN-7_CenterPin7";
  override referencePrefix = "J";
}

/**
 * 8-pin DIN connector
 *
 * KiCad symbol: `Connector:DIN-8`. Reference prefix: `J`.
 * Footprint filters: DIN*.
 * @see http://www.mouser.com/ds/2/18/40_c091_abd_e-75918.pdf
 * Keywords: circular DIN connector.
 */
export class DIN_8 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN-8";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, single row (A), 01x32, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_01x32_A`. Reference prefix: `J`.
 * Footprint filters: DIN41612*1x*.
 * Keywords: connector.
 */
export class DIN41612_01x32_A extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_a11": "a11",
  "Pin_a12": "a12",
  "Pin_a13": "a13",
  "Pin_a14": "a14",
  "Pin_a15": "a15",
  "Pin_a16": "a16",
  "Pin_a17": "a17",
  "Pin_a18": "a18",
  "Pin_a19": "a19",
  "Pin_a20": "a20",
  "Pin_a21": "a21",
  "Pin_a22": "a22",
  "Pin_a23": "a23",
  "Pin_a24": "a24",
  "Pin_a25": "a25",
  "Pin_a26": "a26",
  "Pin_a27": "a27",
  "Pin_a28": "a28",
  "Pin_a29": "a29",
  "Pin_a30": "a30",
  "Pin_a31": "a31",
  "Pin_a32": "a32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_a11: "passive", Pin_a12: "passive", Pin_a13: "passive", Pin_a14: "passive", Pin_a15: "passive", Pin_a16: "passive", Pin_a17: "passive", Pin_a18: "passive", Pin_a19: "passive", Pin_a20: "passive", Pin_a21: "passive", Pin_a22: "passive", Pin_a23: "passive", Pin_a24: "passive", Pin_a25: "passive", Pin_a26: "passive", Pin_a27: "passive", Pin_a28: "passive", Pin_a29: "passive", Pin_a30: "passive", Pin_a31: "passive", Pin_a32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_01x32_A";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AB) even pins only, 02x05, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x05_AB_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x05_AB_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_b2": "b2",
  "Pin_b4": "b4",
  "Pin_b6": "b6",
  "Pin_b8": "b8",
  "Pin_b10": "b10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_b2: "passive", Pin_b4: "passive", Pin_b6: "passive", Pin_b8: "passive", Pin_b10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x05_AB_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AC) even pins only, 02x05, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x05_AC_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x05_AC_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_c2": "c2",
  "Pin_c4": "c4",
  "Pin_c6": "c6",
  "Pin_c8": "c8",
  "Pin_c10": "c10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_c2: "passive", Pin_c4: "passive", Pin_c6: "passive", Pin_c8: "passive", Pin_c10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x05_AC_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AE) even pins only, 02x05, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x05_AE_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x05_AE_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_e2": "e2",
  "Pin_e4": "e4",
  "Pin_e6": "e6",
  "Pin_e8": "e8",
  "Pin_e10": "e10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_e2: "passive", Pin_e4: "passive", Pin_e6: "passive", Pin_e8: "passive", Pin_e10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x05_AE_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (ZB) even pins only, 02x05, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x05_ZB_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x05_ZB_EvenPins extends Component.withPins({
  "Pin_b2": "b2",
  "Pin_b4": "b4",
  "Pin_b6": "b6",
  "Pin_b8": "b8",
  "Pin_b10": "b10",
  "Pin_z2": "z2",
  "Pin_z4": "z4",
  "Pin_z6": "z6",
  "Pin_z8": "z8",
  "Pin_z10": "z10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_b2: "passive", Pin_b4: "passive", Pin_b6: "passive", Pin_b8: "passive", Pin_b10: "passive", Pin_z2: "passive", Pin_z4: "passive", Pin_z6: "passive", Pin_z8: "passive", Pin_z10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x05_ZB_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AB) even pins only, 02x08, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x08_AB_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x08_AB_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_a12": "a12",
  "Pin_a14": "a14",
  "Pin_a16": "a16",
  "Pin_b2": "b2",
  "Pin_b4": "b4",
  "Pin_b6": "b6",
  "Pin_b8": "b8",
  "Pin_b10": "b10",
  "Pin_b12": "b12",
  "Pin_b14": "b14",
  "Pin_b16": "b16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_a12: "passive", Pin_a14: "passive", Pin_a16: "passive", Pin_b2: "passive", Pin_b4: "passive", Pin_b6: "passive", Pin_b8: "passive", Pin_b10: "passive", Pin_b12: "passive", Pin_b14: "passive", Pin_b16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x08_AB_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AC) even pins only, 02x08, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x08_AC_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x08_AC_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_a12": "a12",
  "Pin_a14": "a14",
  "Pin_a16": "a16",
  "Pin_c2": "c2",
  "Pin_c4": "c4",
  "Pin_c6": "c6",
  "Pin_c8": "c8",
  "Pin_c10": "c10",
  "Pin_c12": "c12",
  "Pin_c14": "c14",
  "Pin_c16": "c16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_a12: "passive", Pin_a14: "passive", Pin_a16: "passive", Pin_c2: "passive", Pin_c4: "passive", Pin_c6: "passive", Pin_c8: "passive", Pin_c10: "passive", Pin_c12: "passive", Pin_c14: "passive", Pin_c16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x08_AC_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AE) even pins only, 02x08, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x08_AE_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x08_AE_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_a12": "a12",
  "Pin_a14": "a14",
  "Pin_a16": "a16",
  "Pin_e2": "e2",
  "Pin_e4": "e4",
  "Pin_e6": "e6",
  "Pin_e8": "e8",
  "Pin_e10": "e10",
  "Pin_e12": "e12",
  "Pin_e14": "e14",
  "Pin_e16": "e16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_a12: "passive", Pin_a14: "passive", Pin_a16: "passive", Pin_e2: "passive", Pin_e4: "passive", Pin_e6: "passive", Pin_e8: "passive", Pin_e10: "passive", Pin_e12: "passive", Pin_e14: "passive", Pin_e16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x08_AE_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (ZB) even pins only, 02x08, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x08_ZB_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x08_ZB_EvenPins extends Component.withPins({
  "Pin_b2": "b2",
  "Pin_b4": "b4",
  "Pin_b6": "b6",
  "Pin_b8": "b8",
  "Pin_b10": "b10",
  "Pin_b12": "b12",
  "Pin_b14": "b14",
  "Pin_b16": "b16",
  "Pin_z2": "z2",
  "Pin_z4": "z4",
  "Pin_z6": "z6",
  "Pin_z8": "z8",
  "Pin_z10": "z10",
  "Pin_z12": "z12",
  "Pin_z14": "z14",
  "Pin_z16": "z16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_b2: "passive", Pin_b4: "passive", Pin_b6: "passive", Pin_b8: "passive", Pin_b10: "passive", Pin_b12: "passive", Pin_b14: "passive", Pin_b16: "passive", Pin_z2: "passive", Pin_z4: "passive", Pin_z6: "passive", Pin_z8: "passive", Pin_z10: "passive", Pin_z12: "passive", Pin_z14: "passive", Pin_z16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x08_ZB_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AB), 02x10, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x10_AB`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x10_AB extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_b1": "b1",
  "Pin_b2": "b2",
  "Pin_b3": "b3",
  "Pin_b4": "b4",
  "Pin_b5": "b5",
  "Pin_b6": "b6",
  "Pin_b7": "b7",
  "Pin_b8": "b8",
  "Pin_b9": "b9",
  "Pin_b10": "b10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_b1: "passive", Pin_b2: "passive", Pin_b3: "passive", Pin_b4: "passive", Pin_b5: "passive", Pin_b6: "passive", Pin_b7: "passive", Pin_b8: "passive", Pin_b9: "passive", Pin_b10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x10_AB";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AC), 02x10, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x10_AC`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x10_AC extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_c1": "c1",
  "Pin_c2": "c2",
  "Pin_c3": "c3",
  "Pin_c4": "c4",
  "Pin_c5": "c5",
  "Pin_c6": "c6",
  "Pin_c7": "c7",
  "Pin_c8": "c8",
  "Pin_c9": "c9",
  "Pin_c10": "c10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_c1: "passive", Pin_c2: "passive", Pin_c3: "passive", Pin_c4: "passive", Pin_c5: "passive", Pin_c6: "passive", Pin_c7: "passive", Pin_c8: "passive", Pin_c9: "passive", Pin_c10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x10_AC";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AE), 02x10, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x10_AE`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x10_AE extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_e1": "e1",
  "Pin_e2": "e2",
  "Pin_e3": "e3",
  "Pin_e4": "e4",
  "Pin_e5": "e5",
  "Pin_e6": "e6",
  "Pin_e7": "e7",
  "Pin_e8": "e8",
  "Pin_e9": "e9",
  "Pin_e10": "e10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_e1: "passive", Pin_e2: "passive", Pin_e3: "passive", Pin_e4: "passive", Pin_e5: "passive", Pin_e6: "passive", Pin_e7: "passive", Pin_e8: "passive", Pin_e9: "passive", Pin_e10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x10_AE";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (ZB), 02x10, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x10_ZB`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x10_ZB extends Component.withPins({
  "Pin_b1": "b1",
  "Pin_b2": "b2",
  "Pin_b3": "b3",
  "Pin_b4": "b4",
  "Pin_b5": "b5",
  "Pin_b6": "b6",
  "Pin_b7": "b7",
  "Pin_b8": "b8",
  "Pin_b9": "b9",
  "Pin_b10": "b10",
  "Pin_z1": "z1",
  "Pin_z2": "z2",
  "Pin_z3": "z3",
  "Pin_z4": "z4",
  "Pin_z5": "z5",
  "Pin_z6": "z6",
  "Pin_z7": "z7",
  "Pin_z8": "z8",
  "Pin_z9": "z9",
  "Pin_z10": "z10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_b1: "passive", Pin_b2: "passive", Pin_b3: "passive", Pin_b4: "passive", Pin_b5: "passive", Pin_b6: "passive", Pin_b7: "passive", Pin_b8: "passive", Pin_b9: "passive", Pin_b10: "passive", Pin_z1: "passive", Pin_z2: "passive", Pin_z3: "passive", Pin_z4: "passive", Pin_z5: "passive", Pin_z6: "passive", Pin_z7: "passive", Pin_z8: "passive", Pin_z9: "passive", Pin_z10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x10_ZB";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AB), 02x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x16_AB`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x16_AB extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_a11": "a11",
  "Pin_a12": "a12",
  "Pin_a13": "a13",
  "Pin_a14": "a14",
  "Pin_a15": "a15",
  "Pin_a16": "a16",
  "Pin_b1": "b1",
  "Pin_b2": "b2",
  "Pin_b3": "b3",
  "Pin_b4": "b4",
  "Pin_b5": "b5",
  "Pin_b6": "b6",
  "Pin_b7": "b7",
  "Pin_b8": "b8",
  "Pin_b9": "b9",
  "Pin_b10": "b10",
  "Pin_b11": "b11",
  "Pin_b12": "b12",
  "Pin_b13": "b13",
  "Pin_b14": "b14",
  "Pin_b15": "b15",
  "Pin_b16": "b16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_a11: "passive", Pin_a12: "passive", Pin_a13: "passive", Pin_a14: "passive", Pin_a15: "passive", Pin_a16: "passive", Pin_b1: "passive", Pin_b2: "passive", Pin_b3: "passive", Pin_b4: "passive", Pin_b5: "passive", Pin_b6: "passive", Pin_b7: "passive", Pin_b8: "passive", Pin_b9: "passive", Pin_b10: "passive", Pin_b11: "passive", Pin_b12: "passive", Pin_b13: "passive", Pin_b14: "passive", Pin_b15: "passive", Pin_b16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x16_AB";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AB) even pins only, 02x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x16_AB_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x16_AB_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_a12": "a12",
  "Pin_a14": "a14",
  "Pin_a16": "a16",
  "Pin_a18": "a18",
  "Pin_a20": "a20",
  "Pin_a22": "a22",
  "Pin_a24": "a24",
  "Pin_a26": "a26",
  "Pin_a28": "a28",
  "Pin_a30": "a30",
  "Pin_a32": "a32",
  "Pin_b2": "b2",
  "Pin_b4": "b4",
  "Pin_b6": "b6",
  "Pin_b8": "b8",
  "Pin_b10": "b10",
  "Pin_b12": "b12",
  "Pin_b14": "b14",
  "Pin_b16": "b16",
  "Pin_b18": "b18",
  "Pin_b20": "b20",
  "Pin_b22": "b22",
  "Pin_b24": "b24",
  "Pin_b26": "b26",
  "Pin_b28": "b28",
  "Pin_b30": "b30",
  "Pin_b32": "b32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_a12: "passive", Pin_a14: "passive", Pin_a16: "passive", Pin_a18: "passive", Pin_a20: "passive", Pin_a22: "passive", Pin_a24: "passive", Pin_a26: "passive", Pin_a28: "passive", Pin_a30: "passive", Pin_a32: "passive", Pin_b2: "passive", Pin_b4: "passive", Pin_b6: "passive", Pin_b8: "passive", Pin_b10: "passive", Pin_b12: "passive", Pin_b14: "passive", Pin_b16: "passive", Pin_b18: "passive", Pin_b20: "passive", Pin_b22: "passive", Pin_b24: "passive", Pin_b26: "passive", Pin_b28: "passive", Pin_b30: "passive", Pin_b32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x16_AB_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AC), 02x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x16_AC`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x16_AC extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_a11": "a11",
  "Pin_a12": "a12",
  "Pin_a13": "a13",
  "Pin_a14": "a14",
  "Pin_a15": "a15",
  "Pin_a16": "a16",
  "Pin_c1": "c1",
  "Pin_c2": "c2",
  "Pin_c3": "c3",
  "Pin_c4": "c4",
  "Pin_c5": "c5",
  "Pin_c6": "c6",
  "Pin_c7": "c7",
  "Pin_c8": "c8",
  "Pin_c9": "c9",
  "Pin_c10": "c10",
  "Pin_c11": "c11",
  "Pin_c12": "c12",
  "Pin_c13": "c13",
  "Pin_c14": "c14",
  "Pin_c15": "c15",
  "Pin_c16": "c16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_a11: "passive", Pin_a12: "passive", Pin_a13: "passive", Pin_a14: "passive", Pin_a15: "passive", Pin_a16: "passive", Pin_c1: "passive", Pin_c2: "passive", Pin_c3: "passive", Pin_c4: "passive", Pin_c5: "passive", Pin_c6: "passive", Pin_c7: "passive", Pin_c8: "passive", Pin_c9: "passive", Pin_c10: "passive", Pin_c11: "passive", Pin_c12: "passive", Pin_c13: "passive", Pin_c14: "passive", Pin_c15: "passive", Pin_c16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x16_AC";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AC) even pins only, 02x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x16_AC_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x16_AC_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_a12": "a12",
  "Pin_a14": "a14",
  "Pin_a16": "a16",
  "Pin_a18": "a18",
  "Pin_a20": "a20",
  "Pin_a22": "a22",
  "Pin_a24": "a24",
  "Pin_a26": "a26",
  "Pin_a28": "a28",
  "Pin_a30": "a30",
  "Pin_a32": "a32",
  "Pin_c2": "c2",
  "Pin_c4": "c4",
  "Pin_c6": "c6",
  "Pin_c8": "c8",
  "Pin_c10": "c10",
  "Pin_c12": "c12",
  "Pin_c14": "c14",
  "Pin_c16": "c16",
  "Pin_c18": "c18",
  "Pin_c20": "c20",
  "Pin_c22": "c22",
  "Pin_c24": "c24",
  "Pin_c26": "c26",
  "Pin_c28": "c28",
  "Pin_c30": "c30",
  "Pin_c32": "c32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_a12: "passive", Pin_a14: "passive", Pin_a16: "passive", Pin_a18: "passive", Pin_a20: "passive", Pin_a22: "passive", Pin_a24: "passive", Pin_a26: "passive", Pin_a28: "passive", Pin_a30: "passive", Pin_a32: "passive", Pin_c2: "passive", Pin_c4: "passive", Pin_c6: "passive", Pin_c8: "passive", Pin_c10: "passive", Pin_c12: "passive", Pin_c14: "passive", Pin_c16: "passive", Pin_c18: "passive", Pin_c20: "passive", Pin_c22: "passive", Pin_c24: "passive", Pin_c26: "passive", Pin_c28: "passive", Pin_c30: "passive", Pin_c32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x16_AC_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AE), 02x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x16_AE`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x16_AE extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_a11": "a11",
  "Pin_a12": "a12",
  "Pin_a13": "a13",
  "Pin_a14": "a14",
  "Pin_a15": "a15",
  "Pin_a16": "a16",
  "Pin_e1": "e1",
  "Pin_e2": "e2",
  "Pin_e3": "e3",
  "Pin_e4": "e4",
  "Pin_e5": "e5",
  "Pin_e6": "e6",
  "Pin_e7": "e7",
  "Pin_e8": "e8",
  "Pin_e9": "e9",
  "Pin_e10": "e10",
  "Pin_e11": "e11",
  "Pin_e12": "e12",
  "Pin_e13": "e13",
  "Pin_e14": "e14",
  "Pin_e15": "e15",
  "Pin_e16": "e16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_a11: "passive", Pin_a12: "passive", Pin_a13: "passive", Pin_a14: "passive", Pin_a15: "passive", Pin_a16: "passive", Pin_e1: "passive", Pin_e2: "passive", Pin_e3: "passive", Pin_e4: "passive", Pin_e5: "passive", Pin_e6: "passive", Pin_e7: "passive", Pin_e8: "passive", Pin_e9: "passive", Pin_e10: "passive", Pin_e11: "passive", Pin_e12: "passive", Pin_e13: "passive", Pin_e14: "passive", Pin_e15: "passive", Pin_e16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x16_AE";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AE) even pins only, 02x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x16_AE_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x16_AE_EvenPins extends Component.withPins({
  "Pin_a2": "a2",
  "Pin_a4": "a4",
  "Pin_a6": "a6",
  "Pin_a8": "a8",
  "Pin_a10": "a10",
  "Pin_a12": "a12",
  "Pin_a14": "a14",
  "Pin_a16": "a16",
  "Pin_a18": "a18",
  "Pin_a20": "a20",
  "Pin_a22": "a22",
  "Pin_a24": "a24",
  "Pin_a26": "a26",
  "Pin_a28": "a28",
  "Pin_a30": "a30",
  "Pin_a32": "a32",
  "Pin_e2": "e2",
  "Pin_e4": "e4",
  "Pin_e6": "e6",
  "Pin_e8": "e8",
  "Pin_e10": "e10",
  "Pin_e12": "e12",
  "Pin_e14": "e14",
  "Pin_e16": "e16",
  "Pin_e18": "e18",
  "Pin_e20": "e20",
  "Pin_e22": "e22",
  "Pin_e24": "e24",
  "Pin_e26": "e26",
  "Pin_e28": "e28",
  "Pin_e30": "e30",
  "Pin_e32": "e32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a2: "passive", Pin_a4: "passive", Pin_a6: "passive", Pin_a8: "passive", Pin_a10: "passive", Pin_a12: "passive", Pin_a14: "passive", Pin_a16: "passive", Pin_a18: "passive", Pin_a20: "passive", Pin_a22: "passive", Pin_a24: "passive", Pin_a26: "passive", Pin_a28: "passive", Pin_a30: "passive", Pin_a32: "passive", Pin_e2: "passive", Pin_e4: "passive", Pin_e6: "passive", Pin_e8: "passive", Pin_e10: "passive", Pin_e12: "passive", Pin_e14: "passive", Pin_e16: "passive", Pin_e18: "passive", Pin_e20: "passive", Pin_e22: "passive", Pin_e24: "passive", Pin_e26: "passive", Pin_e28: "passive", Pin_e30: "passive", Pin_e32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x16_AE_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (ZB), 02x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x16_ZB`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x16_ZB extends Component.withPins({
  "Pin_b1": "b1",
  "Pin_b2": "b2",
  "Pin_b3": "b3",
  "Pin_b4": "b4",
  "Pin_b5": "b5",
  "Pin_b6": "b6",
  "Pin_b7": "b7",
  "Pin_b8": "b8",
  "Pin_b9": "b9",
  "Pin_b10": "b10",
  "Pin_b11": "b11",
  "Pin_b12": "b12",
  "Pin_b13": "b13",
  "Pin_b14": "b14",
  "Pin_b15": "b15",
  "Pin_b16": "b16",
  "Pin_z1": "z1",
  "Pin_z2": "z2",
  "Pin_z3": "z3",
  "Pin_z4": "z4",
  "Pin_z5": "z5",
  "Pin_z6": "z6",
  "Pin_z7": "z7",
  "Pin_z8": "z8",
  "Pin_z9": "z9",
  "Pin_z10": "z10",
  "Pin_z11": "z11",
  "Pin_z12": "z12",
  "Pin_z13": "z13",
  "Pin_z14": "z14",
  "Pin_z15": "z15",
  "Pin_z16": "z16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_b1: "passive", Pin_b2: "passive", Pin_b3: "passive", Pin_b4: "passive", Pin_b5: "passive", Pin_b6: "passive", Pin_b7: "passive", Pin_b8: "passive", Pin_b9: "passive", Pin_b10: "passive", Pin_b11: "passive", Pin_b12: "passive", Pin_b13: "passive", Pin_b14: "passive", Pin_b15: "passive", Pin_b16: "passive", Pin_z1: "passive", Pin_z2: "passive", Pin_z3: "passive", Pin_z4: "passive", Pin_z5: "passive", Pin_z6: "passive", Pin_z7: "passive", Pin_z8: "passive", Pin_z9: "passive", Pin_z10: "passive", Pin_z11: "passive", Pin_z12: "passive", Pin_z13: "passive", Pin_z14: "passive", Pin_z15: "passive", Pin_z16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x16_ZB";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (ZB) even pins only, 02x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x16_ZB_EvenPins`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x16_ZB_EvenPins extends Component.withPins({
  "Pin_b2": "b2",
  "Pin_b4": "b4",
  "Pin_b6": "b6",
  "Pin_b8": "b8",
  "Pin_b10": "b10",
  "Pin_b12": "b12",
  "Pin_b14": "b14",
  "Pin_b16": "b16",
  "Pin_b18": "b18",
  "Pin_b20": "b20",
  "Pin_b22": "b22",
  "Pin_b24": "b24",
  "Pin_b26": "b26",
  "Pin_b28": "b28",
  "Pin_b30": "b30",
  "Pin_b32": "b32",
  "Pin_z2": "z2",
  "Pin_z4": "z4",
  "Pin_z6": "z6",
  "Pin_z8": "z8",
  "Pin_z10": "z10",
  "Pin_z12": "z12",
  "Pin_z14": "z14",
  "Pin_z16": "z16",
  "Pin_z18": "z18",
  "Pin_z20": "z20",
  "Pin_z22": "z22",
  "Pin_z24": "z24",
  "Pin_z26": "z26",
  "Pin_z28": "z28",
  "Pin_z30": "z30",
  "Pin_z32": "z32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_b2: "passive", Pin_b4: "passive", Pin_b6: "passive", Pin_b8: "passive", Pin_b10: "passive", Pin_b12: "passive", Pin_b14: "passive", Pin_b16: "passive", Pin_b18: "passive", Pin_b20: "passive", Pin_b22: "passive", Pin_b24: "passive", Pin_b26: "passive", Pin_b28: "passive", Pin_b30: "passive", Pin_b32: "passive", Pin_z2: "passive", Pin_z4: "passive", Pin_z6: "passive", Pin_z8: "passive", Pin_z10: "passive", Pin_z12: "passive", Pin_z14: "passive", Pin_z16: "passive", Pin_z18: "passive", Pin_z20: "passive", Pin_z22: "passive", Pin_z24: "passive", Pin_z26: "passive", Pin_z28: "passive", Pin_z30: "passive", Pin_z32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x16_ZB_EvenPins";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AB), 02x32, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x32_AB`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x32_AB extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_a11": "a11",
  "Pin_a12": "a12",
  "Pin_a13": "a13",
  "Pin_a14": "a14",
  "Pin_a15": "a15",
  "Pin_a16": "a16",
  "Pin_a17": "a17",
  "Pin_a18": "a18",
  "Pin_a19": "a19",
  "Pin_a20": "a20",
  "Pin_a21": "a21",
  "Pin_a22": "a22",
  "Pin_a23": "a23",
  "Pin_a24": "a24",
  "Pin_a25": "a25",
  "Pin_a26": "a26",
  "Pin_a27": "a27",
  "Pin_a28": "a28",
  "Pin_a29": "a29",
  "Pin_a30": "a30",
  "Pin_a31": "a31",
  "Pin_a32": "a32",
  "Pin_b1": "b1",
  "Pin_b2": "b2",
  "Pin_b3": "b3",
  "Pin_b4": "b4",
  "Pin_b5": "b5",
  "Pin_b6": "b6",
  "Pin_b7": "b7",
  "Pin_b8": "b8",
  "Pin_b9": "b9",
  "Pin_b10": "b10",
  "Pin_b11": "b11",
  "Pin_b12": "b12",
  "Pin_b13": "b13",
  "Pin_b14": "b14",
  "Pin_b15": "b15",
  "Pin_b16": "b16",
  "Pin_b17": "b17",
  "Pin_b18": "b18",
  "Pin_b19": "b19",
  "Pin_b20": "b20",
  "Pin_b21": "b21",
  "Pin_b22": "b22",
  "Pin_b23": "b23",
  "Pin_b24": "b24",
  "Pin_b25": "b25",
  "Pin_b26": "b26",
  "Pin_b27": "b27",
  "Pin_b28": "b28",
  "Pin_b29": "b29",
  "Pin_b30": "b30",
  "Pin_b31": "b31",
  "Pin_b32": "b32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_a11: "passive", Pin_a12: "passive", Pin_a13: "passive", Pin_a14: "passive", Pin_a15: "passive", Pin_a16: "passive", Pin_a17: "passive", Pin_a18: "passive", Pin_a19: "passive", Pin_a20: "passive", Pin_a21: "passive", Pin_a22: "passive", Pin_a23: "passive", Pin_a24: "passive", Pin_a25: "passive", Pin_a26: "passive", Pin_a27: "passive", Pin_a28: "passive", Pin_a29: "passive", Pin_a30: "passive", Pin_a31: "passive", Pin_a32: "passive", Pin_b1: "passive", Pin_b2: "passive", Pin_b3: "passive", Pin_b4: "passive", Pin_b5: "passive", Pin_b6: "passive", Pin_b7: "passive", Pin_b8: "passive", Pin_b9: "passive", Pin_b10: "passive", Pin_b11: "passive", Pin_b12: "passive", Pin_b13: "passive", Pin_b14: "passive", Pin_b15: "passive", Pin_b16: "passive", Pin_b17: "passive", Pin_b18: "passive", Pin_b19: "passive", Pin_b20: "passive", Pin_b21: "passive", Pin_b22: "passive", Pin_b23: "passive", Pin_b24: "passive", Pin_b25: "passive", Pin_b26: "passive", Pin_b27: "passive", Pin_b28: "passive", Pin_b29: "passive", Pin_b30: "passive", Pin_b31: "passive", Pin_b32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x32_AB";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AC), 02x32, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x32_AC`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x32_AC extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_a11": "a11",
  "Pin_a12": "a12",
  "Pin_a13": "a13",
  "Pin_a14": "a14",
  "Pin_a15": "a15",
  "Pin_a16": "a16",
  "Pin_a17": "a17",
  "Pin_a18": "a18",
  "Pin_a19": "a19",
  "Pin_a20": "a20",
  "Pin_a21": "a21",
  "Pin_a22": "a22",
  "Pin_a23": "a23",
  "Pin_a24": "a24",
  "Pin_a25": "a25",
  "Pin_a26": "a26",
  "Pin_a27": "a27",
  "Pin_a28": "a28",
  "Pin_a29": "a29",
  "Pin_a30": "a30",
  "Pin_a31": "a31",
  "Pin_a32": "a32",
  "Pin_c1": "c1",
  "Pin_c2": "c2",
  "Pin_c3": "c3",
  "Pin_c4": "c4",
  "Pin_c5": "c5",
  "Pin_c6": "c6",
  "Pin_c7": "c7",
  "Pin_c8": "c8",
  "Pin_c9": "c9",
  "Pin_c10": "c10",
  "Pin_c11": "c11",
  "Pin_c12": "c12",
  "Pin_c13": "c13",
  "Pin_c14": "c14",
  "Pin_c15": "c15",
  "Pin_c16": "c16",
  "Pin_c17": "c17",
  "Pin_c18": "c18",
  "Pin_c19": "c19",
  "Pin_c20": "c20",
  "Pin_c21": "c21",
  "Pin_c22": "c22",
  "Pin_c23": "c23",
  "Pin_c24": "c24",
  "Pin_c25": "c25",
  "Pin_c26": "c26",
  "Pin_c27": "c27",
  "Pin_c28": "c28",
  "Pin_c29": "c29",
  "Pin_c30": "c30",
  "Pin_c31": "c31",
  "Pin_c32": "c32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_a11: "passive", Pin_a12: "passive", Pin_a13: "passive", Pin_a14: "passive", Pin_a15: "passive", Pin_a16: "passive", Pin_a17: "passive", Pin_a18: "passive", Pin_a19: "passive", Pin_a20: "passive", Pin_a21: "passive", Pin_a22: "passive", Pin_a23: "passive", Pin_a24: "passive", Pin_a25: "passive", Pin_a26: "passive", Pin_a27: "passive", Pin_a28: "passive", Pin_a29: "passive", Pin_a30: "passive", Pin_a31: "passive", Pin_a32: "passive", Pin_c1: "passive", Pin_c2: "passive", Pin_c3: "passive", Pin_c4: "passive", Pin_c5: "passive", Pin_c6: "passive", Pin_c7: "passive", Pin_c8: "passive", Pin_c9: "passive", Pin_c10: "passive", Pin_c11: "passive", Pin_c12: "passive", Pin_c13: "passive", Pin_c14: "passive", Pin_c15: "passive", Pin_c16: "passive", Pin_c17: "passive", Pin_c18: "passive", Pin_c19: "passive", Pin_c20: "passive", Pin_c21: "passive", Pin_c22: "passive", Pin_c23: "passive", Pin_c24: "passive", Pin_c25: "passive", Pin_c26: "passive", Pin_c27: "passive", Pin_c28: "passive", Pin_c29: "passive", Pin_c30: "passive", Pin_c31: "passive", Pin_c32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x32_AC";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (AE), 02x32, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x32_AE`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x32_AE extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_a11": "a11",
  "Pin_a12": "a12",
  "Pin_a13": "a13",
  "Pin_a14": "a14",
  "Pin_a15": "a15",
  "Pin_a16": "a16",
  "Pin_a17": "a17",
  "Pin_a18": "a18",
  "Pin_a19": "a19",
  "Pin_a20": "a20",
  "Pin_a21": "a21",
  "Pin_a22": "a22",
  "Pin_a23": "a23",
  "Pin_a24": "a24",
  "Pin_a25": "a25",
  "Pin_a26": "a26",
  "Pin_a27": "a27",
  "Pin_a28": "a28",
  "Pin_a29": "a29",
  "Pin_a30": "a30",
  "Pin_a31": "a31",
  "Pin_a32": "a32",
  "Pin_e1": "e1",
  "Pin_e2": "e2",
  "Pin_e3": "e3",
  "Pin_e4": "e4",
  "Pin_e5": "e5",
  "Pin_e6": "e6",
  "Pin_e7": "e7",
  "Pin_e8": "e8",
  "Pin_e9": "e9",
  "Pin_e10": "e10",
  "Pin_e11": "e11",
  "Pin_e12": "e12",
  "Pin_e13": "e13",
  "Pin_e14": "e14",
  "Pin_e15": "e15",
  "Pin_e16": "e16",
  "Pin_e17": "e17",
  "Pin_e18": "e18",
  "Pin_e19": "e19",
  "Pin_e20": "e20",
  "Pin_e21": "e21",
  "Pin_e22": "e22",
  "Pin_e23": "e23",
  "Pin_e24": "e24",
  "Pin_e25": "e25",
  "Pin_e26": "e26",
  "Pin_e27": "e27",
  "Pin_e28": "e28",
  "Pin_e29": "e29",
  "Pin_e30": "e30",
  "Pin_e31": "e31",
  "Pin_e32": "e32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_a11: "passive", Pin_a12: "passive", Pin_a13: "passive", Pin_a14: "passive", Pin_a15: "passive", Pin_a16: "passive", Pin_a17: "passive", Pin_a18: "passive", Pin_a19: "passive", Pin_a20: "passive", Pin_a21: "passive", Pin_a22: "passive", Pin_a23: "passive", Pin_a24: "passive", Pin_a25: "passive", Pin_a26: "passive", Pin_a27: "passive", Pin_a28: "passive", Pin_a29: "passive", Pin_a30: "passive", Pin_a31: "passive", Pin_a32: "passive", Pin_e1: "passive", Pin_e2: "passive", Pin_e3: "passive", Pin_e4: "passive", Pin_e5: "passive", Pin_e6: "passive", Pin_e7: "passive", Pin_e8: "passive", Pin_e9: "passive", Pin_e10: "passive", Pin_e11: "passive", Pin_e12: "passive", Pin_e13: "passive", Pin_e14: "passive", Pin_e15: "passive", Pin_e16: "passive", Pin_e17: "passive", Pin_e18: "passive", Pin_e19: "passive", Pin_e20: "passive", Pin_e21: "passive", Pin_e22: "passive", Pin_e23: "passive", Pin_e24: "passive", Pin_e25: "passive", Pin_e26: "passive", Pin_e27: "passive", Pin_e28: "passive", Pin_e29: "passive", Pin_e30: "passive", Pin_e31: "passive", Pin_e32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x32_AE";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, double row (ZB), 02x32, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:DIN41612_02x32_ZB`. Reference prefix: `J`.
 * Footprint filters: DIN41612*2x*.
 * Keywords: connector.
 */
export class DIN41612_02x32_ZB extends Component.withPins({
  "Pin_b1": "b1",
  "Pin_b2": "b2",
  "Pin_b3": "b3",
  "Pin_b4": "b4",
  "Pin_b5": "b5",
  "Pin_b6": "b6",
  "Pin_b7": "b7",
  "Pin_b8": "b8",
  "Pin_b9": "b9",
  "Pin_b10": "b10",
  "Pin_b11": "b11",
  "Pin_b12": "b12",
  "Pin_b13": "b13",
  "Pin_b14": "b14",
  "Pin_b15": "b15",
  "Pin_b16": "b16",
  "Pin_b17": "b17",
  "Pin_b18": "b18",
  "Pin_b19": "b19",
  "Pin_b20": "b20",
  "Pin_b21": "b21",
  "Pin_b22": "b22",
  "Pin_b23": "b23",
  "Pin_b24": "b24",
  "Pin_b25": "b25",
  "Pin_b26": "b26",
  "Pin_b27": "b27",
  "Pin_b28": "b28",
  "Pin_b29": "b29",
  "Pin_b30": "b30",
  "Pin_b31": "b31",
  "Pin_b32": "b32",
  "Pin_z1": "z1",
  "Pin_z2": "z2",
  "Pin_z3": "z3",
  "Pin_z4": "z4",
  "Pin_z5": "z5",
  "Pin_z6": "z6",
  "Pin_z7": "z7",
  "Pin_z8": "z8",
  "Pin_z9": "z9",
  "Pin_z10": "z10",
  "Pin_z11": "z11",
  "Pin_z12": "z12",
  "Pin_z13": "z13",
  "Pin_z14": "z14",
  "Pin_z15": "z15",
  "Pin_z16": "z16",
  "Pin_z17": "z17",
  "Pin_z18": "z18",
  "Pin_z19": "z19",
  "Pin_z20": "z20",
  "Pin_z21": "z21",
  "Pin_z22": "z22",
  "Pin_z23": "z23",
  "Pin_z24": "z24",
  "Pin_z25": "z25",
  "Pin_z26": "z26",
  "Pin_z27": "z27",
  "Pin_z28": "z28",
  "Pin_z29": "z29",
  "Pin_z30": "z30",
  "Pin_z31": "z31",
  "Pin_z32": "z32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_b1: "passive", Pin_b2: "passive", Pin_b3: "passive", Pin_b4: "passive", Pin_b5: "passive", Pin_b6: "passive", Pin_b7: "passive", Pin_b8: "passive", Pin_b9: "passive", Pin_b10: "passive", Pin_b11: "passive", Pin_b12: "passive", Pin_b13: "passive", Pin_b14: "passive", Pin_b15: "passive", Pin_b16: "passive", Pin_b17: "passive", Pin_b18: "passive", Pin_b19: "passive", Pin_b20: "passive", Pin_b21: "passive", Pin_b22: "passive", Pin_b23: "passive", Pin_b24: "passive", Pin_b25: "passive", Pin_b26: "passive", Pin_b27: "passive", Pin_b28: "passive", Pin_b29: "passive", Pin_b30: "passive", Pin_b31: "passive", Pin_b32: "passive", Pin_z1: "passive", Pin_z2: "passive", Pin_z3: "passive", Pin_z4: "passive", Pin_z5: "passive", Pin_z6: "passive", Pin_z7: "passive", Pin_z8: "passive", Pin_z9: "passive", Pin_z10: "passive", Pin_z11: "passive", Pin_z12: "passive", Pin_z13: "passive", Pin_z14: "passive", Pin_z15: "passive", Pin_z16: "passive", Pin_z17: "passive", Pin_z18: "passive", Pin_z19: "passive", Pin_z20: "passive", Pin_z21: "passive", Pin_z22: "passive", Pin_z23: "passive", Pin_z24: "passive", Pin_z25: "passive", Pin_z26: "passive", Pin_z27: "passive", Pin_z28: "passive", Pin_z29: "passive", Pin_z30: "passive", Pin_z31: "passive", Pin_z32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_02x32_ZB";
  override referencePrefix = "J";
}

/**
 * DIN41612 connector, triple row (C), 03x32, split symbol
 *
 * KiCad symbol: `Connector:DIN41612_03x32_C_Split`. Reference prefix: `J`.
 * Footprint filters: DIN41612*3x*.
 * Keywords: connector.
 */
export class DIN41612_03x32_C_Split extends Component.withPins({
  "Pin_a1": "a1",
  "Pin_a2": "a2",
  "Pin_a3": "a3",
  "Pin_a4": "a4",
  "Pin_a5": "a5",
  "Pin_a6": "a6",
  "Pin_a7": "a7",
  "Pin_a8": "a8",
  "Pin_a9": "a9",
  "Pin_a10": "a10",
  "Pin_a11": "a11",
  "Pin_a12": "a12",
  "Pin_a13": "a13",
  "Pin_a14": "a14",
  "Pin_a15": "a15",
  "Pin_a16": "a16",
  "Pin_a17": "a17",
  "Pin_a18": "a18",
  "Pin_a19": "a19",
  "Pin_a20": "a20",
  "Pin_a21": "a21",
  "Pin_a22": "a22",
  "Pin_a23": "a23",
  "Pin_a24": "a24",
  "Pin_a25": "a25",
  "Pin_a26": "a26",
  "Pin_a27": "a27",
  "Pin_a28": "a28",
  "Pin_a29": "a29",
  "Pin_a30": "a30",
  "Pin_a31": "a31",
  "Pin_a32": "a32",
  "Pin_b1": "b1",
  "Pin_b2": "b2",
  "Pin_b3": "b3",
  "Pin_b4": "b4",
  "Pin_b5": "b5",
  "Pin_b6": "b6",
  "Pin_b7": "b7",
  "Pin_b8": "b8",
  "Pin_b9": "b9",
  "Pin_b10": "b10",
  "Pin_b11": "b11",
  "Pin_b12": "b12",
  "Pin_b13": "b13",
  "Pin_b14": "b14",
  "Pin_b15": "b15",
  "Pin_b16": "b16",
  "Pin_b17": "b17",
  "Pin_b18": "b18",
  "Pin_b19": "b19",
  "Pin_b20": "b20",
  "Pin_b21": "b21",
  "Pin_b22": "b22",
  "Pin_b23": "b23",
  "Pin_b24": "b24",
  "Pin_b25": "b25",
  "Pin_b26": "b26",
  "Pin_b27": "b27",
  "Pin_b28": "b28",
  "Pin_b29": "b29",
  "Pin_b30": "b30",
  "Pin_b31": "b31",
  "Pin_b32": "b32",
  "Pin_c1": "c1",
  "Pin_c2": "c2",
  "Pin_c3": "c3",
  "Pin_c4": "c4",
  "Pin_c5": "c5",
  "Pin_c6": "c6",
  "Pin_c7": "c7",
  "Pin_c8": "c8",
  "Pin_c9": "c9",
  "Pin_c10": "c10",
  "Pin_c11": "c11",
  "Pin_c12": "c12",
  "Pin_c13": "c13",
  "Pin_c14": "c14",
  "Pin_c15": "c15",
  "Pin_c16": "c16",
  "Pin_c17": "c17",
  "Pin_c18": "c18",
  "Pin_c19": "c19",
  "Pin_c20": "c20",
  "Pin_c21": "c21",
  "Pin_c22": "c22",
  "Pin_c23": "c23",
  "Pin_c24": "c24",
  "Pin_c25": "c25",
  "Pin_c26": "c26",
  "Pin_c27": "c27",
  "Pin_c28": "c28",
  "Pin_c29": "c29",
  "Pin_c30": "c30",
  "Pin_c31": "c31",
  "Pin_c32": "c32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_a1: "passive", Pin_a2: "passive", Pin_a3: "passive", Pin_a4: "passive", Pin_a5: "passive", Pin_a6: "passive", Pin_a7: "passive", Pin_a8: "passive", Pin_a9: "passive", Pin_a10: "passive", Pin_a11: "passive", Pin_a12: "passive", Pin_a13: "passive", Pin_a14: "passive", Pin_a15: "passive", Pin_a16: "passive", Pin_a17: "passive", Pin_a18: "passive", Pin_a19: "passive", Pin_a20: "passive", Pin_a21: "passive", Pin_a22: "passive", Pin_a23: "passive", Pin_a24: "passive", Pin_a25: "passive", Pin_a26: "passive", Pin_a27: "passive", Pin_a28: "passive", Pin_a29: "passive", Pin_a30: "passive", Pin_a31: "passive", Pin_a32: "passive", Pin_b1: "passive", Pin_b2: "passive", Pin_b3: "passive", Pin_b4: "passive", Pin_b5: "passive", Pin_b6: "passive", Pin_b7: "passive", Pin_b8: "passive", Pin_b9: "passive", Pin_b10: "passive", Pin_b11: "passive", Pin_b12: "passive", Pin_b13: "passive", Pin_b14: "passive", Pin_b15: "passive", Pin_b16: "passive", Pin_b17: "passive", Pin_b18: "passive", Pin_b19: "passive", Pin_b20: "passive", Pin_b21: "passive", Pin_b22: "passive", Pin_b23: "passive", Pin_b24: "passive", Pin_b25: "passive", Pin_b26: "passive", Pin_b27: "passive", Pin_b28: "passive", Pin_b29: "passive", Pin_b30: "passive", Pin_b31: "passive", Pin_b32: "passive", Pin_c1: "passive", Pin_c2: "passive", Pin_c3: "passive", Pin_c4: "passive", Pin_c5: "passive", Pin_c6: "passive", Pin_c7: "passive", Pin_c8: "passive", Pin_c9: "passive", Pin_c10: "passive", Pin_c11: "passive", Pin_c12: "passive", Pin_c13: "passive", Pin_c14: "passive", Pin_c15: "passive", Pin_c16: "passive", Pin_c17: "passive", Pin_c18: "passive", Pin_c19: "passive", Pin_c20: "passive", Pin_c21: "passive", Pin_c22: "passive", Pin_c23: "passive", Pin_c24: "passive", Pin_c25: "passive", Pin_c26: "passive", Pin_c27: "passive", Pin_c28: "passive", Pin_c29: "passive", Pin_c30: "passive", Pin_c31: "passive", Pin_c32: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DIN41612_03x32_C_Split";
  override referencePrefix = "J";
}

/**
 * Display port sink connector
 *
 * KiCad symbol: `Connector:DP_Sink`. Reference prefix: `J`.
 * Footprint filters: *Displayport*.
 * @see https://en.wikipedia.org/wiki/DisplayPort
 * Keywords: display port conn sink.
 */
export class DP_Sink extends Component.withPins({
  "ML3_N": "1",
  "ML3_P": "3",
  "ML2_N": "4",
  "ML2_P": "6",
  "ML1_N": "7",
  "ML1_P": "9",
  "ML0_N": "10",
  "ML0_P": "12",
  "CFG1": "13",
  "CFG2": "14",
  "AUX_P": "15",
  "AUX_N": "17",
  "HPD": "18",
  "RTN": "19",
  "PWR": "20",
  "GND": "[2,5,8,11,16]",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ML3_N: "output", ML3_P: "output", ML2_N: "output", ML2_P: "output", ML1_N: "output", ML1_P: "output", ML0_N: "output", ML0_P: "output", CFG1: "bidirectional", CFG2: "bidirectional", AUX_P: "bidirectional", AUX_N: "bidirectional", HPD: "input", RTN: "power_in", PWR: "power_in", GND: "power_in", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DP_Sink";
  override referencePrefix = "J";
}

/**
 * Display port source connector
 *
 * KiCad symbol: `Connector:DP_Source`. Reference prefix: `J`.
 * Footprint filters: *Displayport*.
 * @see https://en.wikipedia.org/wiki/DisplayPort
 * Keywords: display port source connector.
 */
export class DP_Source extends Component.withPins({
  "ML0_P": "1",
  "ML0_N": "3",
  "ML1_P": "4",
  "ML1_N": "6",
  "ML2_P": "7",
  "ML2_N": "9",
  "ML3_P": "10",
  "ML3_N": "12",
  "CFG1": "13",
  "CFG2": "14",
  "AUX_P": "15",
  "AUX_N": "17",
  "HPD": "18",
  "RTN": "19",
  "PWR": "20",
  "GND": "[2,5,8,11,16]",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ML0_P: "input", ML0_N: "input", ML1_P: "input", ML1_N: "input", ML2_P: "input", ML2_N: "input", ML3_P: "input", ML3_N: "input", CFG1: "bidirectional", CFG2: "bidirectional", AUX_P: "bidirectional", AUX_N: "bidirectional", HPD: "output", RTN: "power_in", PWR: "power_in", GND: "power_in", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DP_Source";
  override referencePrefix = "J";
}

/**
 * DVI-D dual link connector
 *
 * KiCad symbol: `Connector:DVI-D_Dual_Link`. Reference prefix: `J`.
 * Footprint filters: DVI-D*.
 * @see https://www.molex.com/content/dam/molex/molex-dot-com/products/automated/en-us/salesdrawingpdf/743/74320/743204004_sd.pdf?inline
 * Keywords: dvi digital visual interface.
 */
export class DVI_D_Dual_Link extends Component.withPins({
  "D2-": "1",
  "D2+": "2",
  "D2/4S": "3",
  "D4-": "4",
  "D4+": "5",
  "DDCCL": "6",
  "DDCIO": "7",
  "NC": "8",
  "D1-": "9",
  "D1+": "10",
  "D1/3S": "11",
  "D3-": "12",
  "D3+": "13",
  "+5V": "14",
  "GND": "15",
  "HPD": "16",
  "D0-": "17",
  "D0+": "18",
  "D0/5S": "19",
  "D5-": "20",
  "D5+": "21",
  "CKS": "22",
  "CK+": "23",
  "CK-": "24",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "D2-": "passive", "D2+": "passive", "D2/4S": "passive", "D4-": "passive", "D4+": "passive", DDCCL: "passive", DDCIO: "bidirectional", NC: "no_connect", "D1-": "passive", "D1+": "passive", "D1/3S": "passive", "D3-": "passive", "D3+": "passive", "+5V": "power_in", GND: "power_in", HPD: "passive", "D0-": "passive", "D0+": "passive", "D0/5S": "passive", "D5-": "passive", "D5+": "passive", CKS: "passive", "CK+": "passive", "CK-": "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DVI-D_Dual_Link";
  override referencePrefix = "J";
}

/**
 * DVI-I dual link connector
 *
 * KiCad symbol: `Connector:DVI-I_Dual_Link`. Reference prefix: `J`.
 * Footprint filters: DVI-I*.
 * @see https://www.molex.com/content/dam/molex/molex-dot-com/products/automated/en-us/salesdrawingpdf/743/74320/743201004_sd.pdf?inline
 * Keywords: dvi digital visual interface.
 */
export class DVI_I_Dual_Link extends Component.withPins({
  "D2-": "1",
  "D2+": "2",
  "D2/4S": "3",
  "D4-": "4",
  "D4+": "5",
  "DDCCL": "6",
  "DDCIO": "7",
  "VSYNC": "8",
  "D1-": "9",
  "D1+": "10",
  "D1/3S": "11",
  "D3-": "12",
  "D3+": "13",
  "+5V": "14",
  "GND": "15",
  "HPD": "16",
  "D0-": "17",
  "D0+": "18",
  "D0/5S": "19",
  "D5-": "20",
  "D5+": "21",
  "CKS": "22",
  "CK+": "23",
  "CK-": "24",
  "Red": "C1",
  "Green": "C2",
  "Blue": "C3",
  "HSYNC": "C4",
  "GNDA": "C5",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "D2-": "passive", "D2+": "passive", "D2/4S": "passive", "D4-": "passive", "D4+": "passive", DDCCL: "passive", DDCIO: "bidirectional", VSYNC: "passive", "D1-": "passive", "D1+": "passive", "D1/3S": "passive", "D3-": "passive", "D3+": "passive", "+5V": "power_in", GND: "power_in", HPD: "passive", "D0-": "passive", "D0+": "passive", "D0/5S": "passive", "D5-": "passive", "D5+": "passive", CKS: "passive", "CK+": "passive", "CK-": "passive", Red: "passive", Green: "passive", Blue: "passive", HSYNC: "passive", GNDA: "power_in", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:DVI-I_Dual_Link";
  override referencePrefix = "J";
}

/**
 * ExpressCard connector
 *
 * KiCad symbol: `Connector:ExpressCard`. Reference prefix: `J`.
 * Footprint filters: ExpressCard*.
 * @see https://web.archive.org/web/20180809060653/http://www.usb.org/developers/expresscard/EC_specifications/ExpressCard_2_0_FINAL.pdf
 * Keywords: expresscard pci express.
 */
export class ExpressCard extends Component.withPins({
  "GND_1": "1",
  "USBD-": "2",
  "USBD+": "3",
  "~{CPUSB}": "4",
  "~{USB3}": "5",
  "RESERVED": "6",
  "SMBCLK": "7",
  "SMDDATA": "8",
  "1V5_9": "9",
  "1V5_10": "10",
  "~{WAKE}": "11",
  "3V3_AUX": "12",
  "~{PERST}": "13",
  "3V3_14": "14",
  "3V3_15": "15",
  "~{CLKREQ}": "16",
  "~{CPPE}": "17",
  "REFCLK-": "18",
  "REFCLK+": "19",
  "GND_20": "20",
  "PERn0/SSRX-": "21",
  "PERp0/SSRX+": "22",
  "GND_23": "23",
  "PETn0/SSTX-": "24",
  "PETp0/SSTX+": "25",
  "GND_26": "26",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_out", "USBD-": "bidirectional", "USBD+": "bidirectional", "~{CPUSB}": "input", "~{USB3}": "bidirectional", RESERVED: "passive", SMBCLK: "output", SMDDATA: "bidirectional", "1V5_9": "power_out", "1V5_10": "power_out", "~{WAKE}": "input", "3V3_AUX": "power_out", "~{PERST}": "output", "3V3_14": "power_out", "3V3_15": "power_out", "~{CLKREQ}": "input", "~{CPPE}": "input", "REFCLK-": "output", "REFCLK+": "output", GND_20: "passive", "PERn0/SSRX-": "input", "PERp0/SSRX+": "input", GND_23: "passive", "PETn0/SSTX-": "output", "PETp0/SSTX+": "output", GND_26: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:ExpressCard";
  override referencePrefix = "J";
}

/**
 * HDMI type A connector
 *
 * KiCad symbol: `Connector:HDMI_A`. Reference prefix: `J`.
 * Footprint filters: HDMI*A*.
 * @see https://en.wikipedia.org/wiki/HDMI
 * Keywords: hdmi conn.
 */
export class HDMI_A extends Component.withPins({
  "D2+": "1",
  "D2S": "2",
  "D2-": "3",
  "D1+": "4",
  "D1S": "5",
  "D1-": "6",
  "D0+": "7",
  "D0S": "8",
  "D0-": "9",
  "CK+": "10",
  "CKS": "11",
  "CK-": "12",
  "CEC": "13",
  "UTILITY": "14",
  "SCL": "15",
  "SDA": "16",
  "GND": "17",
  "+5V": "18",
  "HPD": "19",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "D2+": "passive", D2S: "power_in", "D2-": "passive", "D1+": "passive", D1S: "power_in", "D1-": "passive", "D0+": "passive", D0S: "power_in", "D0-": "passive", "CK+": "passive", CKS: "power_in", "CK-": "passive", CEC: "bidirectional", UTILITY: "passive", SCL: "passive", SDA: "bidirectional", GND: "power_in", "+5V": "power_in", HPD: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:HDMI_A";
  override referencePrefix = "J";
}

/**
 * HDMI 1.4+ type A connector
 *
 * KiCad symbol: `Connector:HDMI_A_1.4`. Reference prefix: `J`.
 * Footprint filters: HDMI*A*.
 * @see https://en.wikipedia.org/wiki/HDMI
 * Keywords: hdmi conn.
 */
export class HDMI_A_1_4 extends Component.withPins({
  "D2+": "1",
  "D2S": "2",
  "D2-": "3",
  "D1+": "4",
  "D1S": "5",
  "D1-": "6",
  "D0+": "7",
  "D0S": "8",
  "D0-": "9",
  "CK+": "10",
  "CKS": "11",
  "CK-": "12",
  "CEC": "13",
  "UTILITY/HEAC+": "14",
  "SCL": "15",
  "SDA": "16",
  "GND": "17",
  "+5V": "18",
  "HPD/HEAC-": "19",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "D2+": "passive", D2S: "power_in", "D2-": "passive", "D1+": "passive", D1S: "power_in", "D1-": "passive", "D0+": "passive", D0S: "power_in", "D0-": "passive", "CK+": "passive", CKS: "power_in", "CK-": "passive", CEC: "bidirectional", "UTILITY/HEAC+": "passive", SCL: "passive", SDA: "bidirectional", GND: "power_in", "+5V": "power_in", "HPD/HEAC-": "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:HDMI_A_1.4";
  override referencePrefix = "J";
}

/**
 * HDMI type B connector
 *
 * KiCad symbol: `Connector:HDMI_B`. Reference prefix: `J`.
 * Footprint filters: HDMI*B*.
 * @see http://pinouts.ru/Video/hdmi_pinout.shtml
 * Keywords: hdmi conn.
 */
export class HDMI_B extends Component.withPins({
  "D2+": "1",
  "D2S": "2",
  "D2-": "3",
  "D1+": "4",
  "D1S": "5",
  "D1-": "6",
  "D0+": "7",
  "D0S": "8",
  "D0-": "9",
  "CK+": "10",
  "CKS": "11",
  "CK-": "12",
  "D5+": "13",
  "D5S": "14",
  "D5-": "15",
  "D4+": "16",
  "D4S": "17",
  "D4-": "18",
  "D3+": "19",
  "D3S": "20",
  "D3-": "21",
  "CEC": "22",
  "NC_23": "23",
  "NC_24": "24",
  "SCL": "25",
  "SDA": "26",
  "GND": "27",
  "+5V": "28",
  "HPD": "29",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "D2+": "passive", D2S: "power_in", "D2-": "passive", "D1+": "passive", D1S: "power_in", "D1-": "passive", "D0+": "passive", D0S: "power_in", "D0-": "passive", "CK+": "passive", CKS: "power_in", "CK-": "passive", "D5+": "passive", D5S: "power_in", "D5-": "passive", "D4+": "passive", D4S: "power_in", "D4-": "passive", "D3+": "passive", D3S: "power_in", "D3-": "passive", CEC: "bidirectional", NC_23: "no_connect", NC_24: "no_connect", SCL: "passive", SDA: "bidirectional", GND: "power_in", "+5V": "power_in", HPD: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:HDMI_B";
  override referencePrefix = "J";
}

/**
 * HDMI 1.3+ type C connector
 *
 * KiCad symbol: `Connector:HDMI_C_1.3`. Reference prefix: `J`.
 * Footprint filters: HDMI*C*.
 * @see http://pinoutguide.com/PortableDevices/mini_hdmi_pinout.shtml
 * Keywords: hdmi conn.
 */
export class HDMI_C_1_3 extends Component.withPins({
  "D2S": "1",
  "D2+": "2",
  "D2-": "3",
  "D1S": "4",
  "D1+": "5",
  "D1-": "6",
  "D0S": "7",
  "D0+": "8",
  "D0-": "9",
  "CKS": "10",
  "CK+": "11",
  "CK-": "12",
  "GND": "13",
  "CEC": "14",
  "SCL": "15",
  "SDA": "16",
  "UTILITY": "17",
  "+5V": "18",
  "HPD": "19",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D2S: "power_in", "D2+": "passive", "D2-": "passive", D1S: "power_in", "D1+": "passive", "D1-": "passive", D0S: "power_in", "D0+": "passive", "D0-": "passive", CKS: "power_in", "CK+": "passive", "CK-": "passive", GND: "power_in", CEC: "bidirectional", SCL: "passive", SDA: "bidirectional", UTILITY: "passive", "+5V": "power_in", HPD: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:HDMI_C_1.3";
  override referencePrefix = "J";
}

/**
 * HDMI 1.4+ type C connector
 *
 * KiCad symbol: `Connector:HDMI_C_1.4`. Reference prefix: `J`.
 * Footprint filters: HDMI*C*.
 * @see http://pinoutguide.com/PortableDevices/mini_hdmi_pinout.shtml
 * Keywords: hdmi conn.
 */
export class HDMI_C_1_4 extends Component.withPins({
  "D2S": "1",
  "D2+": "2",
  "D2-": "3",
  "D1S": "4",
  "D1+": "5",
  "D1-": "6",
  "D0S": "7",
  "D0+": "8",
  "D0-": "9",
  "CKS": "10",
  "CK+": "11",
  "CK-": "12",
  "GND": "13",
  "CEC": "14",
  "SCL": "15",
  "SDA": "16",
  "UTILITY/HEAC+": "17",
  "+5V": "18",
  "HPD/HEAC-": "19",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D2S: "power_in", "D2+": "passive", "D2-": "passive", D1S: "power_in", "D1+": "passive", "D1-": "passive", D0S: "power_in", "D0+": "passive", "D0-": "passive", CKS: "power_in", "CK+": "passive", "CK-": "passive", GND: "power_in", CEC: "bidirectional", SCL: "passive", SDA: "bidirectional", "UTILITY/HEAC+": "passive", "+5V": "power_in", "HPD/HEAC-": "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:HDMI_C_1.4";
  override referencePrefix = "J";
}

/**
 * HDMI 1.4+ type D connector
 *
 * KiCad symbol: `Connector:HDMI_D_1.4`. Reference prefix: `J`.
 * Footprint filters: HDMI*D*.
 * @see http://pinoutguide.com/PortableDevices/micro_hdmi_type_d_pinout.shtml
 * Keywords: hdmi conn.
 */
export class HDMI_D_1_4 extends Component.withPins({
  "HPD/HEAC-": "1",
  "UTILITY/HEAC+": "2",
  "D2+": "3",
  "D2S": "4",
  "D2-": "5",
  "D1+": "6",
  "D1S": "7",
  "D1-": "8",
  "D0+": "9",
  "D0S": "10",
  "D0-": "11",
  "CK+": "12",
  "CKS": "13",
  "CK-": "14",
  "CEC": "15",
  "GND": "16",
  "SCL": "17",
  "SDA": "18",
  "+5V": "19",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "HPD/HEAC-": "passive", "UTILITY/HEAC+": "passive", "D2+": "passive", D2S: "power_in", "D2-": "passive", "D1+": "passive", D1S: "power_in", "D1-": "passive", "D0+": "passive", D0S: "power_in", "D0-": "passive", "CK+": "passive", CKS: "power_in", "CK-": "passive", CEC: "bidirectional", GND: "power_in", SCL: "passive", SDA: "bidirectional", "+5V": "power_in", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:HDMI_D_1.4";
  override referencePrefix = "J";
}

/**
 * HDMI type E connector
 *
 * KiCad symbol: `Connector:HDMI_E`. Reference prefix: `J`.
 * Footprint filters: HDMI*E*.
 * @see https://www.hdmi.org/manufacturer/specification.aspx
 * Keywords: hdmi conn.
 */
export class HDMI_E extends Component.withPins({
  "D2+": "1",
  "D2S": "2",
  "D2-": "3",
  "D1+": "4",
  "D1S": "5",
  "D1-": "6",
  "D0+": "7",
  "D0S": "8",
  "D0-": "9",
  "CK+": "10",
  "CKS": "11",
  "CK-": "12",
  "CEC": "13",
  "UTILITY": "14",
  "SCL": "15",
  "SDA": "16",
  "GND": "17",
  "+5V": "18",
  "HPD": "19",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "D2+": "passive", D2S: "power_in", "D2-": "passive", "D1+": "passive", D1S: "power_in", "D1-": "passive", "D0+": "passive", D0S: "power_in", "D0-": "passive", "CK+": "passive", CKS: "power_in", "CK-": "passive", CEC: "bidirectional", UTILITY: "passive", SCL: "passive", SDA: "bidirectional", GND: "power_in", "+5V": "power_in", HPD: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:HDMI_E";
  override referencePrefix = "J";
}

/**
 * IEC 61076-2 3 ways shielded M8 A-coding plug connector
 *
 * KiCad symbol: `Connector:IEC61076-2_M8_A-coding_01x03_Plug_Shielded`. Reference prefix: `J`.
 * Footprint filters: *M8*03*.
 * Keywords: M8.
 */
export class IEC61076_2_M8_A_coding_01x03_Plug_Shielded extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC61076-2_M8_A-coding_01x03_Plug_Shielded";
  override referencePrefix = "J";
}

/**
 * IEC 61076-2 3 ways shielded M8 A-coding receptacle connector
 *
 * KiCad symbol: `Connector:IEC61076-2_M8_A-coding_01x03_Receptacle_Shielded`. Reference prefix: `J`.
 * Footprint filters: *M8*03*.
 * Keywords: M8.
 */
export class IEC61076_2_M8_A_coding_01x03_Receptacle_Shielded extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC61076-2_M8_A-coding_01x03_Receptacle_Shielded";
  override referencePrefix = "J";
}

/**
 * IEC 61076-2 4 ways shielded M8 A-coding plug connector
 *
 * KiCad symbol: `Connector:IEC61076-2_M8_A-coding_01x04_Plug_Shielded`. Reference prefix: `J`.
 * Footprint filters: *M8*04*.
 * Keywords: M8 connector.
 */
export class IEC61076_2_M8_A_coding_01x04_Plug_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC61076-2_M8_A-coding_01x04_Plug_Shielded";
  override referencePrefix = "J";
}

/**
 * IEC 61076-2 4 ways shielded M8 A-coding receptacle connector
 *
 * KiCad symbol: `Connector:IEC61076-2_M8_A-coding_01x04_Receptacle_Shielded`. Reference prefix: `J`.
 * Footprint filters: *M8*04*.
 * Keywords: M8 connector.
 */
export class IEC61076_2_M8_A_coding_01x04_Receptacle_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC61076-2_M8_A-coding_01x04_Receptacle_Shielded";
  override referencePrefix = "J";
}

/**
 * C13 Plug, 10A max
 *
 * KiCad symbol: `Connector:IEC_60320_C13_Plug`. Reference prefix: `P`.
 * Footprint filters: C*13*Plug*.
 * Keywords: Receptacle C13 IEC320.
 */
export class IEC_60320_C13_Plug extends Component.withPins({
  "N": "1",
  "L": "2",
  "PE": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { N: "power_in", L: "power_in", PE: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC_60320_C13_Plug";
  override referencePrefix = "P";
}

/**
 * C14 Plug, 10A max
 *
 * KiCad symbol: `Connector:IEC_60320_C14_Receptacle`. Reference prefix: `J`.
 * Footprint filters: C*14*Receptacle*.
 * Keywords: Plug C14 IEC320.
 */
export class IEC_60320_C14_Receptacle extends Component.withPins({
  "L": "1",
  "N": "2",
  "PE": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", PE: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC_60320_C14_Receptacle";
  override referencePrefix = "J";
}

/**
 * C5 Receptacle, 2,5 A max
 *
 * KiCad symbol: `Connector:IEC_60320_C5_Plug`. Reference prefix: `P`.
 * Footprint filters: C*5*Plug*.
 * Keywords: C5 IEC 60320.
 */
export class IEC_60320_C5_Plug extends Component.withPins({
  "N": "1",
  "L": "2",
  "PE": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { N: "power_in", L: "power_in", PE: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC_60320_C5_Plug";
  override referencePrefix = "P";
}

/**
 * C6 plug, 2,5A max
 *
 * KiCad symbol: `Connector:IEC_60320_C6_Receptacle`. Reference prefix: `J`.
 * Footprint filters: C*6*Receptacle*.
 * Keywords: IEC 60320 C6.
 */
export class IEC_60320_C6_Receptacle extends Component.withPins({
  "L": "1",
  "N": "2",
  "PE": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", PE: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC_60320_C6_Receptacle";
  override referencePrefix = "J";
}

/**
 * C7 coupler, 2,5 A max
 *
 * KiCad symbol: `Connector:IEC_60320_C7_Plug`. Reference prefix: `P`.
 * Footprint filters: C*7*Plug*.
 * Keywords: C7 Plug  IEC 60320.
 */
export class IEC_60320_C7_Plug extends Component.withPins({
  "N": "1",
  "L": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { N: "power_in", L: "power_in", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC_60320_C7_Plug";
  override referencePrefix = "P";
}

/**
 * C8 coupler, 2,5 A max
 *
 * KiCad symbol: `Connector:IEC_60320_C8_Receptacle`. Reference prefix: `J`.
 * Footprint filters: C*8*Receptacle*.
 * Keywords: C8 Receptacle  IEC 60320.
 */
export class IEC_60320_C8_Receptacle extends Component.withPins({
  "L": "1",
  "N": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", ...opts.pinTypes } });
  }
  override schema = "Connector:IEC_60320_C8_Receptacle";
  override referencePrefix = "J";
}

/**
 * FireWire/IEEE1394a 6-pin connector
 *
 * KiCad symbol: `Connector:IEEE1394a`. Reference prefix: `J`.
 * Keywords: connector IEEE1394a FireWire.
 */
export class IEEE1394a extends Component.withPins({
  "PWR": "1",
  "GND": "2",
  "TPB-": "3",
  "TPB+": "4",
  "TPA-": "5",
  "TPA+": "6",
  "SH_7": "7",
  "SH_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWR: "power_in", GND: "power_in", "TPB-": "bidirectional", "TPB+": "bidirectional", "TPA-": "bidirectional", "TPA+": "bidirectional", SH_7: "passive", SH_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:IEEE1394a";
  override referencePrefix = "J";
}

/**
 * Nano-SIM Card (4FF) connector with Detect Switch
 *
 * KiCad symbol: `Connector:JAE_SIM_Card_SF72S006`. Reference prefix: `J`.
 * Footprint filters: JAE*SIM*Card*SF72S006*.
 * @see https://www.jae.com/direct/topics/topics_file_download/topics_id=68892&ext_no=06&index=0&_lang=en&v=202003111511468456809
 * Keywords: SIM card UICC 4FF.
 * Default footprint: Connector_JAE:JAE_SIM_Card_SF72S006.
 */
export class JAE_SIM_Card_SF72S006 extends Component.withPins({
  "VCC": "C1",
  "RST": "C2",
  "CLK": "C3",
  "GND": "C5",
  "VPP/SWP": "C6",
  "I/O": "C7",
  "PCSW": "CSW",
  "PDSW": "DSW",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", RST: "input", CLK: "input", GND: "power_in", "VPP/SWP": "bidirectional", "I/O": "bidirectional", PCSW: "passive", PDSW: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:JAE_SIM_Card_SF72S006";
  override referencePrefix = "J";
}

/**
 * DC Barrel Jack
 *
 * KiCad symbol: `Connector:Jack-DC`. Reference prefix: `J`.
 * Footprint filters: BarrelJack*.
 * Keywords: DC power barrel jack connector.
 */
export class Jack_DC extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Jack-DC";
  override referencePrefix = "J";
}

/**
 * 2-pin LEMO connector
 *
 * KiCad symbol: `Connector:LEMO2`. Reference prefix: `J`.
 * Keywords: LEMO connector.
 */
export class LEMO2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:LEMO2";
  override referencePrefix = "J";
}

/**
 * 4-pin LEMO connector
 *
 * KiCad symbol: `Connector:LEMO4`. Reference prefix: `J`.
 * Keywords: LEMO connector.
 */
export class LEMO4 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:LEMO4";
  override referencePrefix = "J";
}

/**
 * 5-pin LEMO connector
 *
 * KiCad symbol: `Connector:LEMO5`. Reference prefix: `J`.
 * Keywords: LEMO connector.
 */
export class LEMO5 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:LEMO5";
  override referencePrefix = "J";
}

/**
 * 6-pin LEMO connector
 *
 * KiCad symbol: `Connector:LEMO6`. Reference prefix: `J`.
 * Keywords: LEMO connector.
 */
export class LEMO6 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:LEMO6";
  override referencePrefix = "J";
}

/**
 * MXM3.0 connector
 *
 * KiCad symbol: `Connector:MXM3.0`. Reference prefix: `J`.
 * Footprint filters: *MM70*.
 * Keywords: MXM connector.
 */
export class MXM3_0 extends Component.withPins({
  "5V_1": "1",
  "PRSNT_R#": "2",
  "5V_3": "3",
  "WAKE#": "4",
  "5V_5": "5",
  "PWR_GOOD": "6",
  "5V_7": "7",
  "PWR_EN": "8",
  "5V_9": "9",
  "RSVD_10": "10",
  "GND_11": "11",
  "RSVD_12": "12",
  "GND_13": "13",
  "RSVD_14": "14",
  "GND_15": "15",
  "RSVD_16": "16",
  "GND_17": "17",
  "PWR_LEVEL": "18",
  "PEX_STD_SW#": "19",
  "TH_OVERT#": "20",
  "VGA_DISABLE#": "21",
  "TH_ALERT#": "22",
  "PNL_PWR_EN": "23",
  "TH_PWM": "24",
  "PNL_BL_EN": "25",
  "GPIO0": "26",
  "PNL_BL_PWM": "27",
  "GPIO1": "28",
  "HDMI_CEC": "29",
  "GPIO2": "30",
  "DVI_HPD": "31",
  "SMB_DAT": "32",
  "LVDS_DDC_DAT": "33",
  "SMB_CLK": "34",
  "LVDS_DDC_CLK": "35",
  "GND_36": "36",
  "GND_37": "37",
  "OEM_38": "38",
  "OEM_39": "39",
  "OEM_40": "40",
  "OEM_41": "41",
  "OEM_42": "42",
  "OEM_43": "43",
  "OEM_44": "44",
  "OEM_45": "45",
  "GND_46": "46",
  "GND_47": "47",
  "PEX_TX15#": "48",
  "PEX_RX15#": "49",
  "PEX_TX15": "50",
  "PEX_RX15": "51",
  "GND_52": "52",
  "GND_53": "53",
  "PEX_TX14#": "54",
  "PEX_RX14#": "55",
  "PEX_TX14": "56",
  "PEX_RX14": "57",
  "GND_58": "58",
  "GND_59": "59",
  "PEX_TX13#": "60",
  "PEX_RX13#": "61",
  "PEX_TX13": "62",
  "PEX_RX13": "63",
  "GND_64": "64",
  "GND_65": "65",
  "PEX_TX12#": "66",
  "PEX_RX12#": "67",
  "PEX_TX12": "68",
  "PEX_RX12": "69",
  "GND_70": "70",
  "GND_71": "71",
  "PEX_TX11#": "72",
  "PEX_RX11#": "73",
  "PEX_TX11": "74",
  "PEX_RX11": "75",
  "GND_76": "76",
  "GND_77": "77",
  "PEX_TX10#": "78",
  "PEX_RX10#": "79",
  "PEX_TX10": "80",
  "PEX_RX10": "81",
  "GND_82": "82",
  "GND_83": "83",
  "PEX_TX9#": "84",
  "PEX_RX9#": "85",
  "PEX_TX9": "86",
  "PEX_RX9": "87",
  "GND_88": "88",
  "GND_89": "89",
  "PEX_TX8#": "90",
  "PEX_RX8#": "91",
  "PEX_TX8": "92",
  "PEX_RX8": "93",
  "GND_94": "94",
  "GND_95": "95",
  "PEX_TX7#": "96",
  "PEX_RX7#": "97",
  "PEX_TX7": "98",
  "PEX_RX7": "99",
  "GND_100": "100",
  "GND_101": "101",
  "PEX_TX6#": "102",
  "PEX_RX6#": "103",
  "PEX_TX6": "104",
  "PEX_RX6": "105",
  "GND_106": "106",
  "GND_107": "107",
  "PEX_TX5#": "108",
  "PEX_RX5#": "109",
  "PEX_TX5": "110",
  "PEX_RX5": "111",
  "GND_112": "112",
  "GND_113": "113",
  "PEX_TX4#": "114",
  "PEX_RX4#": "115",
  "PEX_TX4": "116",
  "PEX_RX4": "117",
  "GND_118": "118",
  "GND_119": "119",
  "PEX_TX3#": "120",
  "PEX_RX3#": "121",
  "PEX_TX3": "122",
  "PEX_RX3": "123",
  "GND_124": "124",
  "GND_125": "125",
  "GND_133": "133",
  "GND_134": "134",
  "PEX_RX2#": "135",
  "PEX_TX2#": "136",
  "PEX_RX2": "137",
  "PEX_TX2": "138",
  "GND_139": "139",
  "GND_140": "140",
  "PEX_RX1#": "141",
  "PEX_TX1#": "142",
  "PEX_RX1": "143",
  "PEX_TX1": "144",
  "GND_145": "145",
  "GND_146": "146",
  "PEX_RX0#": "147",
  "PEX_TX0#": "148",
  "PEX_RX0": "149",
  "PEX_TX0": "150",
  "GND_151": "151",
  "GND_152": "152",
  "PEX_REFCLK#": "153",
  "PEX_CLK_REQ#": "154",
  "PEX_REFCLK": "155",
  "PEX_RST#": "156",
  "GND_157": "157",
  "VGA_DDC_DAT": "158",
  "RSVD_159": "159",
  "VGA_DDC_CLK": "160",
  "RSVD_161": "161",
  "VGA_VSYNC": "162",
  "RSVD_163": "163",
  "VGA_HSYNC": "164",
  "RSVD_165": "165",
  "GND_166": "166",
  "RSVD_167": "167",
  "VGA_RED": "168",
  "LVDS_UCLK#": "169",
  "VGA_GREEN": "170",
  "LVDS_UCLK": "171",
  "VGA_BLUE": "172",
  "GND_173": "173",
  "GND_174": "174",
  "LVDS_UTX3#": "175",
  "LVDS_LCLK#": "176",
  "LVDS_UTX3": "177",
  "LVDS_LCLK": "178",
  "GND_179": "179",
  "GND_180": "180",
  "LVDS_UTX2#": "181",
  "LVDS_LTX3#": "182",
  "LVDS_UTX2": "183",
  "LVDS_LTX3": "184",
  "GND_185": "185",
  "GND_186": "186",
  "LVDS_UTX1#": "187",
  "LVDS_LTX2#": "188",
  "LVDS_UTX1": "189",
  "LVDS_LTX2": "190",
  "GND_191": "191",
  "GND_192": "192",
  "LVDS_UTX0#": "193",
  "LVDS_LTX1#": "194",
  "LVDS_UTX0": "195",
  "LVDS_LTX1": "196",
  "GND_197": "197",
  "GND_198": "198",
  "DP_C_L0#": "199",
  "LVDS_LTX0#": "200",
  "DP_C_L0": "201",
  "LVDS_LTX0": "202",
  "GND_203": "203",
  "GND_204": "204",
  "DP_C_L1#": "205",
  "DP_D_L0#": "206",
  "DP_C_L1": "207",
  "DP_D_L0": "208",
  "GND_209": "209",
  "GND_210": "210",
  "DP_C_L2#": "211",
  "DP_D_L1#": "212",
  "DP_C_L2": "213",
  "DP_D_L1": "214",
  "GND_215": "215",
  "GND_216": "216",
  "DP_C_L3#": "217",
  "DP_D_L2#": "218",
  "DP_C_L3": "219",
  "DP_D_L2": "220",
  "GND_221": "221",
  "GND_222": "222",
  "DP_C_AUX#": "223",
  "DP_D_L3#": "224",
  "DP_C_AUX": "225",
  "DP_D_L3": "226",
  "RSVD_227": "227",
  "GND_228": "228",
  "RSVD_229": "229",
  "DP_D_AUX#": "230",
  "RSVD_231": "231",
  "DP_D_AUX": "232",
  "RSVD_233": "233",
  "DP_C_HPD": "234",
  "RSVD_235": "235",
  "DP_D_HPD": "236",
  "RSVD_237": "237",
  "RSVD_238": "238",
  "RSVD_239": "239",
  "RSVD_240": "240",
  "RSVD_241": "241",
  "RSVD_242": "242",
  "RSVD_243": "243",
  "GND_244": "244",
  "RSVD_245": "245",
  "DP_B_L0#": "246",
  "RSVD_247": "247",
  "DP_B_L0": "248",
  "RSVD_249": "249",
  "GND_250": "250",
  "GND_251": "251",
  "DP_B_L1#": "252",
  "DP_A_L0#": "253",
  "DP_B_L1": "254",
  "DP_A_L0": "255",
  "GND_256": "256",
  "GND_257": "257",
  "DP_B_L2#": "258",
  "DP_A_L1#": "259",
  "DP_B_L2": "260",
  "DP_A_L1": "261",
  "GND_262": "262",
  "GND_263": "263",
  "DP_B_L3#": "264",
  "DP_A_L2#": "265",
  "DP_B_L3": "266",
  "DP_A_L2": "267",
  "GND_268": "268",
  "GND_269": "269",
  "DP_B_AUX#": "270",
  "DP_A_L3#": "271",
  "DP_B_AUX": "272",
  "DP_A_L3": "273",
  "DP_B_HPD": "274",
  "GND_275": "275",
  "DP_A_HPD": "276",
  "DP_A_AUX#": "277",
  "3V3_278": "278",
  "DP_A_AUX": "279",
  "3V3_280": "280",
  "PRSNT_L#": "281",
  "PWR_SRC_E1": "E1",
  "PWR_SRC_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "5V_1": "power_in", "PRSNT_R#": "output", "5V_3": "passive", "WAKE#": "output", "5V_5": "passive", PWR_GOOD: "output", "5V_7": "passive", PWR_EN: "input", "5V_9": "passive", RSVD_10: "bidirectional", GND_11: "passive", RSVD_12: "bidirectional", GND_13: "passive", RSVD_14: "bidirectional", GND_15: "passive", RSVD_16: "bidirectional", GND_17: "passive", PWR_LEVEL: "input", "PEX_STD_SW#": "input", "TH_OVERT#": "output", "VGA_DISABLE#": "input", "TH_ALERT#": "bidirectional", PNL_PWR_EN: "output", TH_PWM: "output", PNL_BL_EN: "output", GPIO0: "bidirectional", PNL_BL_PWM: "output", GPIO1: "bidirectional", HDMI_CEC: "bidirectional", GPIO2: "bidirectional", DVI_HPD: "input", SMB_DAT: "bidirectional", LVDS_DDC_DAT: "bidirectional", SMB_CLK: "input", LVDS_DDC_CLK: "output", GND_36: "passive", GND_37: "passive", OEM_38: "bidirectional", OEM_39: "bidirectional", OEM_40: "bidirectional", OEM_41: "bidirectional", OEM_42: "bidirectional", OEM_43: "bidirectional", OEM_44: "bidirectional", OEM_45: "bidirectional", GND_46: "passive", GND_47: "passive", "PEX_TX15#": "input", "PEX_RX15#": "output", PEX_TX15: "input", PEX_RX15: "output", GND_52: "passive", GND_53: "passive", "PEX_TX14#": "input", "PEX_RX14#": "output", PEX_TX14: "input", PEX_RX14: "output", GND_58: "passive", GND_59: "passive", "PEX_TX13#": "input", "PEX_RX13#": "output", PEX_TX13: "input", PEX_RX13: "output", GND_64: "passive", GND_65: "passive", "PEX_TX12#": "input", "PEX_RX12#": "output", PEX_TX12: "input", PEX_RX12: "output", GND_70: "passive", GND_71: "passive", "PEX_TX11#": "input", "PEX_RX11#": "output", PEX_TX11: "input", PEX_RX11: "output", GND_76: "passive", GND_77: "passive", "PEX_TX10#": "input", "PEX_RX10#": "output", PEX_TX10: "input", PEX_RX10: "output", GND_82: "passive", GND_83: "passive", "PEX_TX9#": "input", "PEX_RX9#": "output", PEX_TX9: "input", PEX_RX9: "output", GND_88: "passive", GND_89: "passive", "PEX_TX8#": "input", "PEX_RX8#": "output", PEX_TX8: "input", PEX_RX8: "output", GND_94: "passive", GND_95: "passive", "PEX_TX7#": "input", "PEX_RX7#": "output", PEX_TX7: "input", PEX_RX7: "output", GND_100: "passive", GND_101: "passive", "PEX_TX6#": "input", "PEX_RX6#": "output", PEX_TX6: "input", PEX_RX6: "output", GND_106: "passive", GND_107: "passive", "PEX_TX5#": "input", "PEX_RX5#": "output", PEX_TX5: "input", PEX_RX5: "output", GND_112: "passive", GND_113: "passive", "PEX_TX4#": "input", "PEX_RX4#": "output", PEX_TX4: "input", PEX_RX4: "output", GND_118: "passive", GND_119: "passive", "PEX_TX3#": "input", "PEX_RX3#": "output", PEX_TX3: "input", PEX_RX3: "output", GND_124: "passive", GND_125: "passive", GND_133: "passive", GND_134: "passive", "PEX_RX2#": "output", "PEX_TX2#": "input", PEX_RX2: "output", PEX_TX2: "input", GND_139: "passive", GND_140: "passive", "PEX_RX1#": "output", "PEX_TX1#": "input", PEX_RX1: "output", PEX_TX1: "input", GND_145: "passive", GND_146: "passive", "PEX_RX0#": "output", "PEX_TX0#": "input", PEX_RX0: "output", PEX_TX0: "input", GND_151: "passive", GND_152: "passive", "PEX_REFCLK#": "input", "PEX_CLK_REQ#": "output", PEX_REFCLK: "input", "PEX_RST#": "input", GND_157: "passive", VGA_DDC_DAT: "bidirectional", RSVD_159: "bidirectional", VGA_DDC_CLK: "output", RSVD_161: "bidirectional", VGA_VSYNC: "output", RSVD_163: "bidirectional", VGA_HSYNC: "output", RSVD_165: "bidirectional", GND_166: "passive", RSVD_167: "bidirectional", VGA_RED: "output", "LVDS_UCLK#": "output", VGA_GREEN: "output", LVDS_UCLK: "output", VGA_BLUE: "output", GND_173: "passive", GND_174: "passive", "LVDS_UTX3#": "output", "LVDS_LCLK#": "output", LVDS_UTX3: "output", LVDS_LCLK: "output", GND_179: "passive", GND_180: "passive", "LVDS_UTX2#": "output", "LVDS_LTX3#": "output", LVDS_UTX2: "output", LVDS_LTX3: "output", GND_185: "passive", GND_186: "passive", "LVDS_UTX1#": "output", "LVDS_LTX2#": "output", LVDS_UTX1: "output", LVDS_LTX2: "output", GND_191: "passive", GND_192: "passive", "LVDS_UTX0#": "output", "LVDS_LTX1#": "output", LVDS_UTX0: "output", LVDS_LTX1: "output", GND_197: "passive", GND_198: "passive", "DP_C_L0#": "output", "LVDS_LTX0#": "output", DP_C_L0: "output", LVDS_LTX0: "output", GND_203: "passive", GND_204: "passive", "DP_C_L1#": "output", "DP_D_L0#": "output", DP_C_L1: "output", DP_D_L0: "output", GND_209: "passive", GND_210: "passive", "DP_C_L2#": "output", "DP_D_L1#": "output", DP_C_L2: "output", DP_D_L1: "output", GND_215: "passive", GND_216: "passive", "DP_C_L3#": "output", "DP_D_L2#": "output", DP_C_L3: "output", DP_D_L2: "output", GND_221: "passive", GND_222: "passive", "DP_C_AUX#": "bidirectional", "DP_D_L3#": "output", DP_C_AUX: "bidirectional", DP_D_L3: "output", RSVD_227: "bidirectional", GND_228: "passive", RSVD_229: "bidirectional", "DP_D_AUX#": "bidirectional", RSVD_231: "bidirectional", DP_D_AUX: "bidirectional", RSVD_233: "bidirectional", DP_C_HPD: "input", RSVD_235: "bidirectional", DP_D_HPD: "input", RSVD_237: "bidirectional", RSVD_238: "bidirectional", RSVD_239: "bidirectional", RSVD_240: "bidirectional", RSVD_241: "bidirectional", RSVD_242: "bidirectional", RSVD_243: "bidirectional", GND_244: "passive", RSVD_245: "bidirectional", "DP_B_L0#": "output", RSVD_247: "bidirectional", DP_B_L0: "output", RSVD_249: "bidirectional", GND_250: "passive", GND_251: "passive", "DP_B_L1#": "output", "DP_A_L0#": "output", DP_B_L1: "output", DP_A_L0: "output", GND_256: "passive", GND_257: "passive", "DP_B_L2#": "output", "DP_A_L1#": "output", DP_B_L2: "output", DP_A_L1: "output", GND_262: "passive", GND_263: "passive", "DP_B_L3#": "output", "DP_A_L2#": "output", DP_B_L3: "output", DP_A_L2: "output", GND_268: "passive", GND_269: "passive", "DP_B_AUX#": "bidirectional", "DP_A_L3#": "output", DP_B_AUX: "bidirectional", DP_A_L3: "output", DP_B_HPD: "input", GND_275: "passive", DP_A_HPD: "input", "DP_A_AUX#": "bidirectional", "3V3_278": "power_in", DP_A_AUX: "bidirectional", "3V3_280": "passive", "PRSNT_L#": "output", PWR_SRC_E1: "power_in", PWR_SRC_E2: "passive", GND_E3: "power_in", GND_E4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:MXM3.0";
  override referencePrefix = "J";
}

/**
 * Micro SD Card Socket
 *
 * KiCad symbol: `Connector:Micro_SD_Card`. Reference prefix: `J`.
 * Footprint filters: microSD*.
 * @see https://www.we-online.com/components/products/datasheet/693072010801.pdf
 * Keywords: connector SD microsd.
 */
export class Micro_SD_Card extends Component.withPins({
  "DAT2": "1",
  "DAT3/CD": "2",
  "CMD": "3",
  "VDD": "4",
  "CLK": "5",
  "VSS": "6",
  "DAT0": "7",
  "DAT1": "8",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DAT2: "bidirectional", "DAT3/CD": "bidirectional", CMD: "input", VDD: "power_in", CLK: "input", VSS: "power_in", DAT0: "bidirectional", DAT1: "bidirectional", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Micro_SD_Card";
  override referencePrefix = "J";
}

/**
 * Micro SD Card Socket with one card detection pin
 *
 * KiCad symbol: `Connector:Micro_SD_Card_Det1`. Reference prefix: `J`.
 * Footprint filters: microSD*.
 * @see https://datasheet.lcsc.com/lcsc/2110151630_XKB-Connectivity-XKTF-015-N_C381082.pdf
 * Keywords: connector SD microsd.
 */
export class Micro_SD_Card_Det1 extends Component.withPins({
  "DAT2": "1",
  "DAT3/CD": "2",
  "CMD": "3",
  "VDD": "4",
  "CLK": "5",
  "VSS": "6",
  "DAT0": "7",
  "DAT1": "8",
  "DET": "9",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DAT2: "bidirectional", "DAT3/CD": "bidirectional", CMD: "input", VDD: "power_in", CLK: "input", VSS: "power_in", DAT0: "bidirectional", DAT1: "bidirectional", DET: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Micro_SD_Card_Det1";
  override referencePrefix = "J";
}

/**
 * Micro SD Card Socket with two card detection pins
 *
 * KiCad symbol: `Connector:Micro_SD_Card_Det2`. Reference prefix: `J`.
 * Footprint filters: microSD*.
 * @see https://www.hirose.com/en/product/document?clcode=&productname=&series=DM3&documenttype=Catalog&lang=en&documentid=D49662_en
 * Keywords: connector SD microsd.
 */
export class Micro_SD_Card_Det2 extends Component.withPins({
  "DAT2": "1",
  "DAT3/CD": "2",
  "CMD": "3",
  "VDD": "4",
  "CLK": "5",
  "VSS": "6",
  "DAT0": "7",
  "DAT1": "8",
  "DET_B": "9",
  "DET_A": "10",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DAT2: "bidirectional", "DAT3/CD": "bidirectional", CMD: "input", VDD: "power_in", CLK: "input", VSS: "power_in", DAT0: "bidirectional", DAT1: "bidirectional", DET_B: "passive", DET_A: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Micro_SD_Card_Det2";
  override referencePrefix = "J";
}

/**
 * Micro SD Card Socket with card detection pins
 *
 * KiCad symbol: `Connector:Micro_SD_Card_Det_Hirose_DM3AT`. Reference prefix: `J`.
 * Footprint filters: microSD*.
 * @see https://www.hirose.com/product/en/download_file/key_name/DM3/category/Catalog/doc_file_id/49662/?file_category_id=4&item_id=195&is_series=1
 * Keywords: connector SD microsd.
 */
export class Micro_SD_Card_Det_Hirose_DM3AT extends Component.withPins({
  "DAT2": "1",
  "DAT3/CD": "2",
  "CMD": "3",
  "VDD": "4",
  "CLK": "5",
  "VSS": "6",
  "DAT0": "7",
  "DAT1": "8",
  "DET_B": "9",
  "DET_A": "10",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DAT2: "bidirectional", "DAT3/CD": "bidirectional", CMD: "input", VDD: "power_in", CLK: "input", VSS: "power_in", DAT0: "bidirectional", DAT1: "bidirectional", DET_B: "passive", DET_A: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Micro_SD_Card_Det_Hirose_DM3AT";
  override referencePrefix = "J";
}

/**
 * ACTEL FLASH PRO 3/4, JTAG, IDC10 Pinheader Connector
 *
 * KiCad symbol: `Connector:Microsemi_FlashPro-JTAG-10`. Reference prefix: `J`.
 * Footprint filters: IDC?Header*2x05*, Pin?Header*2x05*.
 * @see https://www.microsemi.com/document-portal/doc_view/129973-lpf-ac386-an
 * Keywords: JTAG IDC10 Pinheader Pins Connector.
 */
export class Microsemi_FlashPro_JTAG_10 extends Component.withPins({
  "TCK": "1",
  "GND_2": "2",
  "TDO": "3",
  "PGM/NC": "4",
  "TMS": "5",
  "VJTAG": "6",
  "VPUMP": "7",
  "~{TRST}": "8",
  "TDI": "9",
  "GND_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TCK: "passive", GND_2: "passive", TDO: "passive", "PGM/NC": "passive", TMS: "passive", VJTAG: "power_in", VPUMP: "power_out", "~{TRST}": "passive", TDI: "passive", GND_10: "power_in", ...opts.pinTypes } });
  }
  override schema = "Connector:Microsemi_FlashPro-JTAG-10";
  override referencePrefix = "J";
}

/**
 * 3-pin Mini-DIN connector
 *
 * KiCad symbol: `Connector:Mini-DIN-3`. Reference prefix: `J`.
 * Footprint filters: MINI?DIN*.
 * @see http://www.assmann-wsw.com/fileadmin/catalogue/10_MiniDIN_rev4-0.pdf
 * Keywords: Mini-DIN.
 */
export class Mini_DIN_3 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Mini-DIN-3";
  override referencePrefix = "J";
}

/**
 * 4-pin Mini-DIN connector
 *
 * KiCad symbol: `Connector:Mini-DIN-4`. Reference prefix: `J`.
 * Footprint filters: MINI?DIN*.
 * @see http://service.powerdynamics.com/ec/Catalog17/Section%2011.pdf
 * Keywords: Mini-DIN.
 */
export class Mini_DIN_4 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Mini-DIN-4";
  override referencePrefix = "J";
}

/**
 * 5-pin Mini-DIN connector
 *
 * KiCad symbol: `Connector:Mini-DIN-5`. Reference prefix: `J`.
 * Footprint filters: MINI?DIN*.
 * @see http://service.powerdynamics.com/ec/Catalog17/Section%2011.pdf
 * Keywords: Mini-DIN.
 */
export class Mini_DIN_5 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Mini-DIN-5";
  override referencePrefix = "J";
}

/**
 * 6-pin Mini-DIN connector
 *
 * KiCad symbol: `Connector:Mini-DIN-6`. Reference prefix: `J`.
 * Footprint filters: MINI?DIN*.
 * @see http://service.powerdynamics.com/ec/Catalog17/Section%2011.pdf
 * Keywords: Mini-DIN.
 */
export class Mini_DIN_6 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Mini-DIN-6";
  override referencePrefix = "J";
}

/**
 * 7-pin Mini-DIN connector
 *
 * KiCad symbol: `Connector:Mini-DIN-7`. Reference prefix: `J`.
 * Footprint filters: MINI?DIN*.
 * @see http://service.powerdynamics.com/ec/Catalog17/Section%2011.pdf
 * Keywords: Mini-DIN.
 */
export class Mini_DIN_7 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Mini-DIN-7";
  override referencePrefix = "J";
}

/**
 * 8-pin Mini-DIN connector
 *
 * KiCad symbol: `Connector:Mini-DIN-8`. Reference prefix: `J`.
 * Footprint filters: MINI?DIN*.
 * @see http://service.powerdynamics.com/ec/Catalog17/Section%2011.pdf
 * Keywords: Mini-DIN.
 */
export class Mini_DIN_8 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Mini-DIN-8";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P4C (4 positions 4 connected)
 *
 * KiCad symbol: `Connector:RJ10`. Reference prefix: `J`.
 * Footprint filters: 4P4C*, RJ9*, RJ10*, RJ22*.
 * Keywords: 4P4C RJ socket connector.
 */
export class RJ10 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ10";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P4C (4 positions 4 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ10_Shielded`. Reference prefix: `J`.
 * Footprint filters: 4P4C*, RJ9*, RJ10*, RJ22*.
 * Keywords: 4P4C RJ socket connector.
 */
export class RJ10_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ10_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P2C (6 positions 2 connected)
 *
 * KiCad symbol: `Connector:RJ11`. Reference prefix: `J`.
 * Footprint filters: 6P2C*, RJ11*.
 * Keywords: 6P2C RJ socket connector.
 */
export class RJ11 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ11";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P2C (6 positions 2 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ11_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P2C*, RJ11*.
 * Keywords: 6P2C RJ socket connector.
 */
export class RJ11_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ11_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P6C (6 positions 6 connected)
 *
 * KiCad symbol: `Connector:RJ12`. Reference prefix: `J`.
 * Footprint filters: 6P6C*, RJ12*, RJ18*, RJ25*.
 * Keywords: 6P6C RJ socket connector.
 */
export class RJ12 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ12";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P6C (6 positions 6 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ12_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P6C*, RJ12*, RJ18*, RJ25*.
 * Keywords: 6P6C RJ socket connector.
 */
export class RJ12_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ12_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P4C (6 positions 4 connected)
 *
 * KiCad symbol: `Connector:RJ13`. Reference prefix: `J`.
 * Footprint filters: 6P4C*, RJ13*, RJ14*.
 * Keywords: 6P4C RJ socket connector.
 */
export class RJ13 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ13";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P4C (6 positions 4 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ13_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P4C*, RJ13*, RJ14*.
 * Keywords: 6P4C RJ socket connector.
 */
export class RJ13_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ13_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P4C (6 positions 4 connected)
 *
 * KiCad symbol: `Connector:RJ14`. Reference prefix: `J`.
 * Footprint filters: 6P4C*, RJ13*, RJ14*.
 * Keywords: 6P4C RJ socket connector.
 */
export class RJ14 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ14";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P4C (6 positions 4 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ14_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P4C*, RJ13*, RJ14*.
 * Keywords: 6P4C RJ socket connector.
 */
export class RJ14_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ14_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P6C (6 positions 6 connected)
 *
 * KiCad symbol: `Connector:RJ18`. Reference prefix: `J`.
 * Footprint filters: 6P6C*, RJ12*, RJ18*, RJ25*.
 * Keywords: 6P6C RJ socket connector.
 */
export class RJ18 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ18";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P6C (6 positions 6 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ18_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P6C*, RJ12*, RJ18*, RJ25*.
 * Keywords: 6P6C RJ socket connector.
 */
export class RJ18_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ18_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P4C (4 positions 4 connected)
 *
 * KiCad symbol: `Connector:RJ22`. Reference prefix: `J`.
 * Footprint filters: 4P4C*, RJ9*, RJ10*, RJ22*.
 * Keywords: 4P4C RJ socket connector.
 */
export class RJ22 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ22";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P4C (4 positions 4 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ22_Shielded`. Reference prefix: `J`.
 * Footprint filters: 4P4C*, RJ9*, RJ10*, RJ22*.
 * Keywords: 4P4C RJ socket connector.
 */
export class RJ22_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ22_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P6C (6 positions 6 connected)
 *
 * KiCad symbol: `Connector:RJ25`. Reference prefix: `J`.
 * Footprint filters: 6P6C*, RJ12*, RJ18*, RJ25*.
 * Keywords: 6P6C RJ socket connector.
 */
export class RJ25 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ25";
  override referencePrefix = "J";
}

/**
 * RJ connector, 6P6C (6 positions 6 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ25_Shielded`. Reference prefix: `J`.
 * Footprint filters: 6P6C*, RJ12*, RJ18*, RJ25*.
 * Keywords: 6P6C RJ socket connector.
 */
export class RJ25_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ25_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ31`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ31 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ31";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ31_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ31_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ31_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ32`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ32";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ32_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ32_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ32_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ33`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ33 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ33";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ33_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ33_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ33_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ34`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ34 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ34";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ34_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ34_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ34_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ35`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ35 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ35";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ35_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ35_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ35_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P4C (8 positions 4 connected)
 *
 * KiCad symbol: `Connector:RJ38`. Reference prefix: `J`.
 * Footprint filters: 8P4C*, RJ38*, RJ48*.
 * Keywords: 8P4C RJ socket connector.
 */
export class RJ38 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ38";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P4C (8 positions 4 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ38_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P4C*, RJ38*, RJ48*.
 * Keywords: 8P4C RJ socket connector.
 */
export class RJ38_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ38_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ41`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ41 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ41";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ41_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ41_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ41_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ45`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ45 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45";
  override referencePrefix = "J";
}

/**
 * RJ45 PoE 10/100 Base-TX Jack with Magnetic Module
 *
 * KiCad symbol: `Connector:RJ45_Abracon_ARJP11A-MASA-B-A-EMU2`. Reference prefix: `J`.
 * Footprint filters: RJ45*Abracon*ARJP11A?MA*.
 * @see https://abracon.com/Magnetics/lan/ARJP11A.PDF
 * Keywords: single port ethernet transformer socket poe center-tap.
 * Default footprint: Connector_RJ:RJ45_Abracon_ARJP11A-MA_Horizontal.
 */
export class RJ45_Abracon_ARJP11A_MASA_B_A_EMU2 extends Component.withPins({
  "TD+": "1",
  "TD-": "2",
  "RD+": "3",
  "TCT": "4",
  "RCT": "5",
  "RD-": "6",
  "P7": "7",
  "NC": "8",
  "V+": "9",
  "V-": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", "TD-": "passive", "RD+": "passive", TCT: "passive", RCT: "passive", "RD-": "passive", P7: "power_in", NC: "no_connect", "V+": "power_out", "V-": "power_out", P11: "passive", P12: "passive", P13: "passive", P14: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Abracon_ARJP11A-MASA-B-A-EMU2";
  override referencePrefix = "J";
}

/**
 * 1 Port RJ45 Magjack Connector Through Hole 10/100 Base-T, AutoMDIX
 *
 * KiCad symbol: `Connector:RJ45_Amphenol_RJMG1BD3B8K1ANR`. Reference prefix: `J`.
 * Footprint filters: RJ45*Amphenol*RJMG1BD3B8K1ANR*.
 * @see https://www.amphenol-cs.com/media/wysiwyg/files/drawing/rjmg1bd3b8k1anr.pdf
 * Keywords: RJ45 Magjack Socket.
 * Default footprint: Connector_RJ:RJ45_Amphenol_RJMG1BD3B8K1ANR.
 */
export class RJ45_Amphenol_RJMG1BD3B8K1ANR extends Component.withPins({
  "PL1": "L1",
  "PL2": "L2",
  "PL3": "L3",
  "PL4": "L4",
  "TD+": "R1",
  "TD-": "R2",
  "RD+": "R3",
  "TCT": "R4",
  "RCT": "R5",
  "RD-": "R6",
  "NC": "R7",
  "PR8": "R8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PL1: "passive", PL2: "passive", PL3: "passive", PL4: "passive", "TD+": "passive", "TD-": "passive", "RD+": "passive", TCT: "passive", RCT: "passive", "RD-": "passive", NC: "no_connect", PR8: "power_in", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Amphenol_RJMG1BD3B8K1ANR";
  override referencePrefix = "J";
}

/**
 * 1 Port RJ45 Magjack Connector Through Hole 10/100 Base-T, AutoMDIX
 *
 * KiCad symbol: `Connector:RJ45_Bel_SI-60062-F`. Reference prefix: `J`.
 * Footprint filters: RJ45*Bel*SI*60062*F*.
 * @see https://belfuse.com/resources/drawings/magneticsolutions/dr-mag-si-60062-f.pdf
 * Keywords: RJ45 Magjack Socket.
 * Default footprint: Connector_RJ:RJ45_Bel_SI-60062-F.
 */
export class RJ45_Bel_SI_60062_F extends Component.withPins({
  "TD+": "1",
  "TCT": "2",
  "TD-": "3",
  "RD+": "4",
  "RCT": "5",
  "RD-": "6",
  "NC": "7",
  "P8": "8",
  "PL1": "L1",
  "PL2": "L2",
  "PL3": "L3",
  "PL4": "L4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", TCT: "passive", "TD-": "passive", "RD+": "passive", RCT: "passive", "RD-": "passive", NC: "no_connect", P8: "power_in", PL1: "passive", PL2: "passive", PL3: "passive", PL4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Bel_SI-60062-F";
  override referencePrefix = "J";
}

/**
 * RJ45 PoE 10/100 Base-TX Jack with Magnetic Module
 *
 * KiCad symbol: `Connector:RJ45_Bel_V895-1001-AW`. Reference prefix: `J`.
 * Footprint filters: RJ45*Bel*V895*1001*AW*.
 * @see https://www.belfuse.com/resources/drawings/magneticsolutions/dr-mag-v895-1001-aw.pdf
 * Keywords: single port ethernet transformer socket poe center-tap.
 * Default footprint: Connector_RJ:RJ45_Bel_V895-1001-AW_Vertical.
 */
export class RJ45_Bel_V895_1001_AW extends Component.withPins({
  "TD+": "1",
  "TD-": "2",
  "RD+": "3",
  "RD-": "4",
  "CT": "5",
  "P6": "6",
  "Vc1": "7",
  "Vc2": "8",
  "Vc3": "9",
  "Vc4": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", "TD-": "passive", "RD+": "passive", "RD-": "passive", CT: "passive", P6: "passive", Vc1: "passive", Vc2: "passive", Vc3: "passive", Vc4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Bel_V895-1001-AW";
  override referencePrefix = "J";
}

/**
 * Halo HFJ11, 10/100 Base-TX, two LEDs, RJ45, Shielded
 *
 * KiCad symbol: `Connector:RJ45_Halo_HFJ11-x2450E-LxxRL`. Reference prefix: `J`.
 * Footprint filters: RJ45*HALO*HFJ11*x2450E*LxxRL*.
 * @see https://www.haloelectronics.com/pdf/fastjack-100baset.pdf
 * Keywords: FastJack socket.
 * Default footprint: Connector_RJ:RJ45_HALO_HFJ11-x2450E-LxxRL_Horizontal.
 */
export class RJ45_Halo_HFJ11_x2450E_LxxRL extends Component.withPins({
  "TD+": "1",
  "TD-": "2",
  "RD+": "3",
  "TCT": "4",
  "RCT": "5",
  "RD-": "6",
  "NC": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", "TD-": "passive", "RD+": "passive", TCT: "passive", RCT: "passive", "RD-": "passive", NC: "no_connect", P8: "power_in", P9: "passive", P10: "passive", P11: "passive", P12: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Halo_HFJ11-x2450E-LxxRL";
  override referencePrefix = "J";
}

/**
 * Halo HFJ11, 10/100 Base-TX, no LED, RJ45, Shielded
 *
 * KiCad symbol: `Connector:RJ45_Halo_HFJ11-x2450ERL`. Reference prefix: `J`.
 * Footprint filters: RJ45*HALO*HFJ11*x2450ERL*.
 * @see https://www.haloelectronics.com/pdf/fastjack-100baset.pdf
 * Keywords: FastJack socket.
 * Default footprint: Connector_RJ:RJ45_HALO_HFJ11-x2450ERL_Horizontal.
 */
export class RJ45_Halo_HFJ11_x2450ERL extends Component.withPins({
  "TD+": "1",
  "TD-": "2",
  "RD+": "3",
  "TCT": "4",
  "RCT": "5",
  "RD-": "6",
  "NC": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", "TD-": "passive", "RD+": "passive", TCT: "passive", RCT: "passive", "RD-": "passive", NC: "no_connect", P8: "power_in", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Halo_HFJ11-x2450ERL";
  override referencePrefix = "J";
}

/**
 * Halo HFJ11, 10/100 Base-TX, no LED, RJ45, Shielded
 *
 * KiCad symbol: `Connector:RJ45_Halo_HFJ11-x2450HRL`. Reference prefix: `J`.
 * Footprint filters: RJ45*HALO*HFJ11*x2450HRL*.
 * @see https://www.haloelectronics.com/pdf/fastjack-100baset.pdf
 * Keywords: FastJack socket.
 * Default footprint: Connector_RJ:RJ45_HALO_HFJ11-x2450HRL_Horizontal.
 */
export class RJ45_Halo_HFJ11_x2450HRL extends Component.withPins({
  "TD+": "1",
  "TD-": "2",
  "RD+": "3",
  "TCT": "4",
  "RCT": "5",
  "RD-": "6",
  "NC": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", "TD-": "passive", "RD+": "passive", TCT: "passive", RCT: "passive", "RD-": "passive", NC: "no_connect", P8: "power_in", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Halo_HFJ11-x2450HRL";
  override referencePrefix = "J";
}

/**
 * 1 Port RJ45 Magjack Connector Through Hole 10/100 Base-T, AutoMDIX
 *
 * KiCad symbol: `Connector:RJ45_Hanrun_HR911105A_Horizontal`. Reference prefix: `J`.
 * Footprint filters: RJ45*Hanrun*HR911105A*.
 * @see https://datasheet.lcsc.com/lcsc/1811141815_HANRUN-Zhongshan-HanRun-Elec-HR911105A_C12074.pdf
 * Keywords: RJ45 Magjack Socket.
 * Default footprint: Connector_RJ:RJ45_Hanrun_HR911105A_Horizontal.
 */
export class RJ45_Hanrun_HR911105A_Horizontal extends Component.withPins({
  "TD+": "1",
  "TD-": "2",
  "RD+": "3",
  "TCT": "4",
  "RCT": "5",
  "RD-": "6",
  "NC": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", "TD-": "passive", "RD+": "passive", TCT: "passive", RCT: "passive", "RD-": "passive", NC: "no_connect", P8: "power_in", P9: "passive", P10: "passive", P11: "passive", P12: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Hanrun_HR911105A_Horizontal";
  override referencePrefix = "J";
}

/**
 * 1 Port RJ45 Magjack Connector Through Hole 10/100/1000 Base-T, AutoMDIX, 75W POE
 *
 * KiCad symbol: `Connector:RJ45_JK00177`. Reference prefix: `J`.
 * Footprint filters: RJ45*Pulse*JK00177NL*.
 * @see https://productfinder.pulseeng.com/doc_type/WEB301/doc_num/J432/doc_part/J432.pdf
 * Keywords: 8P8C RJ socket jack connector POE.
 * Default footprint: Connector_RJ:RJ45_Pulse_JK00177NL_Horizontal.
 */
export class RJ45_JK00177 extends Component.withPins({
  "MXCT3": "1",
  "MX3-": "2",
  "MX3+": "3",
  "MX2+": "4",
  "MX2-": "5",
  "MXCT2": "6",
  "MXCT4": "7",
  "MX4+": "8",
  "MX4-": "9",
  "MX1-": "10",
  "MX1+": "11",
  "MXCT1": "12",
  "LED2+": "13",
  "LED2-": "14",
  "LED1-": "15",
  "LED1+": "16",
  "VDC1+": "17",
  "VDC1-": "18",
  "VDC2+": "19",
  "VDC2-": "20",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { MXCT3: "passive", "MX3-": "passive", "MX3+": "passive", "MX2+": "passive", "MX2-": "passive", MXCT2: "passive", MXCT4: "passive", "MX4+": "passive", "MX4-": "passive", "MX1-": "passive", "MX1+": "passive", MXCT1: "passive", "LED2+": "passive", "LED2-": "passive", "LED1-": "passive", "LED1+": "passive", "VDC1+": "passive", "VDC1-": "passive", "VDC2+": "passive", "VDC2-": "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_JK00177";
  override referencePrefix = "J";
}

/**
 * 1 Port RJ45 Magjack Connector Through Hole 10/100/1000 Base-T, AutoMDIX
 *
 * KiCad symbol: `Connector:RJ45_JK0654219`. Reference prefix: `J`.
 * Footprint filters: RJ45*Pulse*JK0654219NL*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Pulse%20PDFs/JK%20Series.pdf
 * Keywords: 8P8C RJ socket jack connector.
 * Default footprint: Connector_RJ:RJ45_Pulse_JK0654219NL_Horizontal.
 */
export class RJ45_JK0654219 extends Component.withPins({
  "MXCT3": "1",
  "MX3-": "2",
  "MX3+": "3",
  "MX2+": "4",
  "MX2-": "5",
  "MXCT2": "6",
  "MXCT4": "7",
  "MX4+": "8",
  "MX4-": "9",
  "MX1-": "10",
  "MX1+": "11",
  "MXCT1": "12",
  "LED2-": "13",
  "LED2+": "14",
  "LED1-": "15",
  "LED1+": "16",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { MXCT3: "passive", "MX3-": "passive", "MX3+": "passive", "MX2+": "passive", "MX2-": "passive", MXCT2: "passive", MXCT4: "passive", "MX4+": "passive", "MX4-": "passive", "MX1-": "passive", "MX1+": "passive", MXCT1: "passive", "LED2-": "passive", "LED2+": "passive", "LED1-": "passive", "LED1+": "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_JK0654219";
  override referencePrefix = "J";
}

/**
 * 1 Port RJ45 Magjack Connector Through Hole 10/100 Base-T, AutoMDIX
 *
 * KiCad symbol: `Connector:RJ45_Kycon_G7LX-A88S7-BP-GY`. Reference prefix: `J`.
 * Footprint filters: RJ45*Kycon*G7LX*A88S7*BP*Horizontal*.
 * @see http://www.kycon.com/Pub_Eng_Draw/G7LX-A88S7-BP-GY.pdf
 * Keywords: RJ45 Magjack.
 * Default footprint: Connector_RJ:RJ45_Kycon_G7LX-A88S7-BP-xx_Horizontal.
 */
export class RJ45_Kycon_G7LX_A88S7_BP_GY extends Component.withPins({
  "TD+": "1",
  "TD-": "2",
  "RD+": "3",
  "TCT": "4",
  "R1": "5",
  "RD-": "6",
  "RCT": "7",
  "R2": "8",
  "R4": "9",
  "R3": "10",
  "LEDY_K": "11",
  "LEDY_A": "12",
  "LEDG_K": "13",
  "LEDG_A": "14",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", "TD-": "passive", "RD+": "passive", TCT: "passive", R1: "passive", "RD-": "passive", RCT: "passive", R2: "passive", R4: "passive", R3: "passive", LEDY_K: "passive", LEDY_A: "passive", LEDG_K: "passive", LEDG_A: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Kycon_G7LX-A88S7-BP-GY";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), two LEDs
 *
 * KiCad symbol: `Connector:RJ45_LED`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ45*.
 * Keywords: 8P8C RJ socket jack connector led.
 */
export class RJ45_LED extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_LED";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), two LEDs, Shielded
 *
 * KiCad symbol: `Connector:RJ45_LED_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ45*.
 * Keywords: 8P8C RJ socket jack connector led.
 */
export class RJ45_LED_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_LED_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), two LEDs, Shielded, two ports
 *
 * KiCad symbol: `Connector:RJ45_LED_Shielded_x2`. Reference prefix: `J`.
 * Footprint filters: 8P8C*02*, RJ45*02*.
 * Keywords: 8P8C RJ socket jack connector led.
 */
export class RJ45_LED_Shielded_x2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", PSH: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_LED_Shielded_x2";
  override referencePrefix = "J";
}

/**
 * LAN Transformer Jack, RJ45, 10/100 BaseT
 *
 * KiCad symbol: `Connector:RJ45_Pulse_JXD6-0001NL`. Reference prefix: `J`.
 * Footprint filters: RJ45*Pulse*JXD6?0001NL*.
 * @see https://productfinder.pulseeng.com/doc_type/WEB301/doc_num/JXD6-0001NL/doc_part/JXD6-0001NL.pdf
 * Keywords: lan jack socket transformer.
 * Default footprint: Connector_RJ:RJ45_Pulse_JXD6-0001NL_Horizontal.
 */
export class RJ45_Pulse_JXD6_0001NL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "TCT": "3",
  "TD+": "4",
  "TD-": "5",
  "RD+": "6",
  "RD-": "7",
  "RCT": "8",
  "P9": "9",
  "P10": "10",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", TCT: "passive", "TD+": "passive", "TD-": "passive", "RD+": "passive", "RD-": "passive", RCT: "passive", P9: "passive", P10: "passive", PSH: "power_in", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Pulse_JXD6-0001NL";
  override referencePrefix = "J";
}

/**
 * LAN Transformer Jack, RJ45, 10/100/1000 BaseT
 *
 * KiCad symbol: `Connector:RJ45_RB1-125B8G1A`. Reference prefix: `J`.
 * Footprint filters: RJ45*UDE*RB1*125B8G1A*.
 * @see https://datasheet.lcsc.com/szlcsc/1901091107_UDE-Corp-RB1-125B8G1A_C363353.pdf
 * Keywords: lan jack socket transformer ethernet gigabit 10 100 1000 baset.
 * Default footprint: Connector_RJ:RJ45_UDE_RB1-125B8G1A.
 */
export class RJ45_RB1_125B8G1A extends Component.withPins({
  "GND": "R10",
  "PL1": "L1",
  "PL2": "L2",
  "PL3": "L3",
  "PL4": "L4",
  "CT": "R1",
  "TD1+": "R2",
  "TD1-": "R3",
  "TD2+": "R4",
  "TD2-": "R5",
  "TD3+": "R6",
  "TD3-": "R7",
  "TD4+": "R8",
  "TD4-": "R9",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", PL1: "passive", PL2: "passive", PL3: "passive", PL4: "passive", CT: "passive", "TD1+": "passive", "TD1-": "passive", "TD2+": "passive", "TD2-": "passive", "TD3+": "passive", "TD3-": "passive", "TD4+": "passive", "TD4-": "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_RB1-125B8G1A";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ45_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ jack socket connector.
 */
export class RJ45_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Shielded";
  override referencePrefix = "J";
}

/**
 * LAN Transformer Jack, RJ45, 10/100 BaseT
 *
 * KiCad symbol: `Connector:RJ45_Wuerth_74980111211`. Reference prefix: `J`.
 * Footprint filters: RJ45*Wuerth*74980111211*.
 * @see https://www.we-online.de/katalog/datasheet/74980111211.pdf
 * Keywords: lan jack socket transformer smt.
 * Default footprint: Connector_RJ:RJ45_Wuerth_74980111211_Horizontal.
 */
export class RJ45_Wuerth_74980111211 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "TD+": "3",
  "TCT": "4",
  "TD-": "5",
  "RD+": "6",
  "RCT": "7",
  "RD-": "8",
  "NC": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", "TD+": "passive", TCT: "passive", "TD-": "passive", "RD+": "passive", RCT: "passive", "RD-": "passive", NC: "no_connect", P10: "power_in", P11: "passive", P12: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Wuerth_74980111211";
  override referencePrefix = "J";
}

/**
 * LAN Transformer Jack, RJ45, 10/100 BaseT
 *
 * KiCad symbol: `Connector:RJ45_Wuerth_7499010121A`. Reference prefix: `J`.
 * Footprint filters: RJ45*Wuerth*7499010121A*.
 * @see http://katalog.we-online.de/pbs/datasheet/7499010121A.pdf
 * Keywords: lan jack socket transformer.
 * Default footprint: Connector_RJ:RJ45_Wuerth_7499010121A_Horizontal.
 */
export class RJ45_Wuerth_7499010121A extends Component.withPins({
  "TD+": "1",
  "TCT": "2",
  "TD-": "3",
  "RD+": "4",
  "RCT": "5",
  "RD-": "6",
  "NC": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", TCT: "passive", "TD-": "passive", "RD+": "passive", RCT: "passive", "RD-": "passive", NC: "no_connect", P8: "power_in", P9: "passive", P10: "passive", P11: "passive", P12: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Wuerth_7499010121A";
  override referencePrefix = "J";
}

/**
 * LAN Transformer Jack, RJ45, 10/100 BaseT, tab down
 *
 * KiCad symbol: `Connector:RJ45_Wuerth_7499010211A`. Reference prefix: `J`.
 * Footprint filters: RJ45*Wuerth*7499010211A*.
 * @see https://www.we-online.com/components/products/datasheet/7499010211A.pdf
 * Keywords: magjack socket ethernet.
 * Default footprint: Connector_RJ:RJ45_Wuerth_7499010211A_Horizontal.
 */
export class RJ45_Wuerth_7499010211A extends Component.withPins({
  "TD+": "1",
  "TD-": "2",
  "RD+": "3",
  "CTD": "4",
  "CRD": "5",
  "RD-": "6",
  "NC": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TD+": "passive", "TD-": "passive", "RD+": "passive", CTD: "passive", CRD: "passive", "RD-": "passive", NC: "no_connect", P8: "power_in", P9: "passive", P10: "passive", P11: "passive", P12: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Wuerth_7499010211A";
  override referencePrefix = "J";
}

/**
 * Dual LAN Transformer Jack, RJ45, 10/100/1000 BaseT
 *
 * KiCad symbol: `Connector:RJ45_Wuerth_7499151120`. Reference prefix: `J`.
 * Footprint filters: RJ45*Wuerth*7499151120*.
 * @see http://katalog.we-online.de/pbs/datasheet/7499151120.pdf
 * Keywords: dual lan jack socket transformer.
 * Default footprint: Connector_RJ:RJ45_Wuerth_7499151120_Horizontal.
 */
export class RJ45_Wuerth_7499151120 extends Component.withPins({
  "PSH": "SH",
  "P1U": "1U",
  "P2U": "2U",
  "P3U": "3U",
  "P4U": "4U",
  "P5U": "5U",
  "P6U": "6U",
  "P7U": "7U",
  "P8U": "8U",
  "P9U": "9U",
  "P10U": "10U",
  "P11U": "11U",
  "P12U": "12U",
  "P13U": "13U",
  "P14U": "14U",
  "P1D": "1D",
  "P2D": "2D",
  "P3D": "3D",
  "P4D": "4D",
  "P5D": "5D",
  "P6D": "6D",
  "P7D": "7D",
  "P8D": "8D",
  "P9D": "9D",
  "P10D": "10D",
  "P11D": "11D",
  "P12D": "12D",
  "P13D": "13D",
  "P14D": "14D",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PSH: "power_in", P1U: "passive", P2U: "passive", P3U: "passive", P4U: "passive", P5U: "passive", P6U: "passive", P7U: "passive", P8U: "passive", P9U: "passive", P10U: "no_connect", P11U: "passive", P12U: "passive", P13U: "passive", P14U: "passive", P1D: "passive", P2D: "passive", P3D: "passive", P4D: "passive", P5D: "passive", P6D: "passive", P7D: "passive", P8D: "passive", P9D: "passive", P10D: "no_connect", P11D: "passive", P12D: "passive", P13D: "passive", P14D: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ45_Wuerth_7499151120";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P4C (8 positions 4 connected)
 *
 * KiCad symbol: `Connector:RJ48`. Reference prefix: `J`.
 * Footprint filters: 8P4C*, RJ38*, RJ48*.
 * Keywords: 8P4C RJ socket connector.
 */
export class RJ48 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ48";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P4C (8 positions 4 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ48_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P4C*, RJ38*, RJ48*.
 * Keywords: 8P4C RJ socket connector.
 */
export class RJ48_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ48_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ49`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ49 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ49";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ49_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ49_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ49_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected)
 *
 * KiCad symbol: `Connector:RJ61`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ61 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ61";
  override referencePrefix = "J";
}

/**
 * RJ connector, 8P8C (8 positions 8 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ61_Shielded`. Reference prefix: `J`.
 * Footprint filters: 8P8C*, RJ31*, RJ32*, RJ33*, RJ34*, RJ35*, RJ41*, RJ45*, RJ49*, RJ61*.
 * Keywords: 8P8C RJ socket connector.
 */
export class RJ61_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ61_Shielded";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P4C (4 positions 4 connected)
 *
 * KiCad symbol: `Connector:RJ9`. Reference prefix: `J`.
 * Footprint filters: 4P4C*, RJ9*, RJ10*, RJ22*.
 * Keywords: 4P4C RJ socket connector.
 */
export class RJ9 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ9";
  override referencePrefix = "J";
}

/**
 * RJ connector, 4P4C (4 positions 4 connected), Shielded
 *
 * KiCad symbol: `Connector:RJ9_Shielded`. Reference prefix: `J`.
 * Footprint filters: 4P4C*, RJ9*, RJ10*, RJ22*.
 * Keywords: 4P4C RJ socket connector.
 */
export class RJ9_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:RJ9_Shielded";
  override referencePrefix = "J";
}

/**
 * expansion header for Raspberry Pi 2 & 3
 *
 * KiCad symbol: `Connector:Raspberry_Pi_2_3`. Reference prefix: `J`.
 * Footprint filters: PinHeader*2x20*P2.54mm*Vertical*, PinSocket*2x20*P2.54mm*Vertical*.
 * @see https://www.raspberrypi.org/documentation/hardware/raspberrypi/schematics/rpi_SCH_3bplus_1p0_reduced.pdf
 * Keywords: raspberrypi gpio.
 */
export class Raspberry_Pi_2_3 extends Component.withPins({
  "3V3_1": "1",
  "5V_2": "2",
  "SDA/GPIO2": "3",
  "5V_4": "4",
  "SCL/GPIO3": "5",
  "GND_6": "6",
  "GCLK0/GPIO4": "7",
  "GPIO14/TXD": "8",
  "GND_9": "9",
  "GPIO15/RXD": "10",
  "GPIO17": "11",
  "GPIO18/PWM0": "12",
  "GPIO27": "13",
  "GND_14": "14",
  "GPIO22": "15",
  "GPIO23": "16",
  "3V3_17": "17",
  "GPIO24": "18",
  "MOSI0/GPIO10": "19",
  "GND_20": "20",
  "MISO0/GPIO9": "21",
  "GPIO25": "22",
  "SCLK0/GPIO11": "23",
  "~{CE0}/GPIO8": "24",
  "GND_25": "25",
  "~{CE1}/GPIO7": "26",
  "ID_SD/GPIO0": "27",
  "ID_SC/GPIO1": "28",
  "GCLK1/GPIO5": "29",
  "GND_30": "30",
  "GCLK2/GPIO6": "31",
  "PWM0/GPIO12": "32",
  "PWM1/GPIO13": "33",
  "GND_34": "34",
  "GPIO19/MISO1": "35",
  "GPIO16": "36",
  "GPIO26": "37",
  "GPIO20/MOSI1": "38",
  "GND_39": "39",
  "GPIO21/SCLK1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "3V3_1": "power_in", "5V_2": "power_in", "SDA/GPIO2": "bidirectional", "5V_4": "passive", "SCL/GPIO3": "bidirectional", GND_6: "power_in", "GCLK0/GPIO4": "bidirectional", "GPIO14/TXD": "bidirectional", GND_9: "passive", "GPIO15/RXD": "bidirectional", GPIO17: "bidirectional", "GPIO18/PWM0": "bidirectional", GPIO27: "bidirectional", GND_14: "passive", GPIO22: "bidirectional", GPIO23: "bidirectional", "3V3_17": "passive", GPIO24: "bidirectional", "MOSI0/GPIO10": "bidirectional", GND_20: "passive", "MISO0/GPIO9": "bidirectional", GPIO25: "bidirectional", "SCLK0/GPIO11": "bidirectional", "~{CE0}/GPIO8": "bidirectional", GND_25: "passive", "~{CE1}/GPIO7": "bidirectional", "ID_SD/GPIO0": "bidirectional", "ID_SC/GPIO1": "bidirectional", "GCLK1/GPIO5": "bidirectional", GND_30: "passive", "GCLK2/GPIO6": "bidirectional", "PWM0/GPIO12": "bidirectional", "PWM1/GPIO13": "bidirectional", GND_34: "passive", "GPIO19/MISO1": "bidirectional", GPIO16: "bidirectional", GPIO26: "bidirectional", "GPIO20/MOSI1": "bidirectional", GND_39: "passive", "GPIO21/SCLK1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Connector:Raspberry_Pi_2_3";
  override referencePrefix = "J";
}

/**
 * Raspberry Pi 4 Model B
 *
 * KiCad symbol: `Connector:Raspberry_Pi_4`. Reference prefix: `J`.
 * Footprint filters: PinHeader*2x20*P2.54mm*Vertical*, PinSocket*2x20*P2.54mm*Vertical*.
 * @see https://datasheets.raspberrypi.com/rpi4/raspberry-pi-4-datasheet.pdf
 * Keywords: SBC RPi.
 */
export class Raspberry_Pi_4 extends Component.withPins({
  "3V3_1": "1",
  "5V_2": "2",
  "SDA_I2C1/GPIO02": "3",
  "5V_4": "4",
  "SCL_I2C1/GPIO03": "5",
  "GND_6": "6",
  "GPCLK0/GPIO04": "7",
  "GPIO14/UART_TXD": "8",
  "GND_9": "9",
  "GPIO15/UART_RXD": "10",
  "GPIO17/SPI1_~{CE1}": "11",
  "GPIO18/SPI1_~{CE0}/PCM_CLK/PWM0": "12",
  "GPIO27/SDIO_DAT3": "13",
  "GND_14": "14",
  "GPIO22/SDIO_CLK": "15",
  "GPIO23/SDIO_CMD": "16",
  "3V3_17": "17",
  "GPIO24/SDIO_DAT0": "18",
  "MOSI_SPI0/GPIO10": "19",
  "GND_20": "20",
  "MISO_SPI0/GPIO09": "21",
  "GPIO25/SDIO_DAT1": "22",
  "SCLK_SPI0/GPIO11": "23",
  "~{CE0}_SPI0/GPIO08": "24",
  "GND_25": "25",
  "~{CE1}_SPI0/GPIO07": "26",
  "ID_SD_I2C0/GPIO00": "27",
  "ID_SC_I2C0/GPIO01": "28",
  "GPCLK1/GPIO05": "29",
  "GND_30": "30",
  "GPCLK2/GPIO06": "31",
  "GPIO12/PWM0": "32",
  "GPIO13/PWM1": "33",
  "GND_34": "34",
  "GPIO19/SPI1_MISO/PCM_FS": "35",
  "GPIO16/SPI1_~{CE2}": "36",
  "GPIO26/SDIO_DAT2": "37",
  "GPIO20/SPI1_MOSI/PCM_DIN/PWM1": "38",
  "GND_39": "39",
  "GPIO21/SPI1_SCLK/PCM_DOUT": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "3V3_1": "power_out", "5V_2": "power_out", "SDA_I2C1/GPIO02": "bidirectional", "5V_4": "passive", "SCL_I2C1/GPIO03": "bidirectional", GND_6: "power_out", "GPCLK0/GPIO04": "bidirectional", "GPIO14/UART_TXD": "bidirectional", GND_9: "passive", "GPIO15/UART_RXD": "bidirectional", "GPIO17/SPI1_~{CE1}": "bidirectional", "GPIO18/SPI1_~{CE0}/PCM_CLK/PWM0": "bidirectional", "GPIO27/SDIO_DAT3": "bidirectional", GND_14: "passive", "GPIO22/SDIO_CLK": "bidirectional", "GPIO23/SDIO_CMD": "bidirectional", "3V3_17": "passive", "GPIO24/SDIO_DAT0": "bidirectional", "MOSI_SPI0/GPIO10": "bidirectional", GND_20: "passive", "MISO_SPI0/GPIO09": "bidirectional", "GPIO25/SDIO_DAT1": "bidirectional", "SCLK_SPI0/GPIO11": "bidirectional", "~{CE0}_SPI0/GPIO08": "bidirectional", GND_25: "passive", "~{CE1}_SPI0/GPIO07": "bidirectional", "ID_SD_I2C0/GPIO00": "bidirectional", "ID_SC_I2C0/GPIO01": "bidirectional", "GPCLK1/GPIO05": "bidirectional", GND_30: "passive", "GPCLK2/GPIO06": "bidirectional", "GPIO12/PWM0": "bidirectional", "GPIO13/PWM1": "bidirectional", GND_34: "passive", "GPIO19/SPI1_MISO/PCM_FS": "bidirectional", "GPIO16/SPI1_~{CE2}": "bidirectional", "GPIO26/SDIO_DAT2": "bidirectional", "GPIO20/SPI1_MOSI/PCM_DIN/PWM1": "bidirectional", GND_39: "passive", "GPIO21/SPI1_SCLK/PCM_DOUT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Connector:Raspberry_Pi_4";
  override referencePrefix = "J";
}

/**
 * Prise Peritel
 *
 * KiCad symbol: `Connector:SCART-F`. Reference prefix: `J`.
 * Keywords: connector.
 */
export class SCART_F extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:SCART-F";
  override referencePrefix = "J";
}

/**
 * SD card device/card
 *
 * KiCad symbol: `Connector:SD_Card_Device`. Reference prefix: `J`.
 * Footprint filters: SD*Device*.
 * @see http://www.convict.lu/pdf/ProdManualSDCardv1.9.pdf
 * Keywords: connector SD.
 */
export class SD_Card_Device extends Component.withPins({
  "CD/DAT3": "1",
  "CMD": "2",
  "VSS_3": "3",
  "VDD": "4",
  "CLK": "5",
  "VSS_6": "6",
  "DAT0": "7",
  "DAT1": "8",
  "DAT2": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CD/DAT3": "bidirectional", CMD: "bidirectional", VSS_3: "power_in", VDD: "power_in", CLK: "input", VSS_6: "passive", DAT0: "bidirectional", DAT1: "bidirectional", DAT2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Connector:SD_Card_Device";
  override referencePrefix = "J";
}

/**
 * SD card receptacle
 *
 * KiCad symbol: `Connector:SD_Card_Receptacle`. Reference prefix: `J`.
 * Footprint filters: SD*.
 * @see http://portal.fciconnect.com/Comergent//fci/drawing/10067847.pdf
 * Keywords: connector SD.
 */
export class SD_Card_Receptacle extends Component.withPins({
  "CD/DAT3": "1",
  "CMD": "2",
  "VSS_3": "3",
  "VDD": "4",
  "CLK": "5",
  "VSS_6": "6",
  "DAT0": "7",
  "DAT1": "8",
  "DAT2": "9",
  "CARD_DETECT": "10",
  "WRITE_PROTECT": "11",
  "SHELL": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CD/DAT3": "bidirectional", CMD: "bidirectional", VSS_3: "power_in", VDD: "power_in", CLK: "input", VSS_6: "passive", DAT0: "bidirectional", DAT1: "bidirectional", DAT2: "bidirectional", CARD_DETECT: "output", WRITE_PROTECT: "output", SHELL: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:SD_Card_Receptacle";
  override referencePrefix = "J";
}

/**
 * SIM Card
 *
 * KiCad symbol: `Connector:SIM_Card`. Reference prefix: `J`.
 * Footprint filters: *SIM*Card*Holder*.
 * Keywords: SIM card UICC.
 */
export class SIM_Card extends Component.withPins({
  "VCC": "1",
  "RST": "2",
  "CLK": "3",
  "GND": "5",
  "VPP": "6",
  "I/O": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", RST: "input", CLK: "input", GND: "power_in", VPP: "input", "I/O": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Connector:SIM_Card";
  override referencePrefix = "J";
}

/**
 * SIM Card
 *
 * KiCad symbol: `Connector:SIM_Card_Shielded`. Reference prefix: `J`.
 * Footprint filters: *SIM*Card*Holder*.
 * Keywords: SIM card UICC.
 */
export class SIM_Card_Shielded extends Component.withPins({
  "VCC": "1",
  "RST": "2",
  "CLK": "3",
  "GND": "5",
  "VPP": "6",
  "I/O": "7",
  "PSH": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", RST: "input", CLK: "input", GND: "power_in", VPP: "input", "I/O": "bidirectional", PSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:SIM_Card_Shielded";
  override referencePrefix = "J";
}

/**
 * SODIMM 200 Pin socket
 *
 * KiCad symbol: `Connector:SODIMM-200`. Reference prefix: `J`.
 * Footprint filters: *SODIMM*.
 * Keywords: SODIMM SO-DIMM DDR1 DDR2.
 */
export class SODIMM_200 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
  "P26": "26",
  "P27": "27",
  "P28": "28",
  "P29": "29",
  "P30": "30",
  "P31": "31",
  "P32": "32",
  "P33": "33",
  "P34": "34",
  "P35": "35",
  "P36": "36",
  "P37": "37",
  "P38": "38",
  "P39": "39",
  "P40": "40",
  "P41": "41",
  "P42": "42",
  "P43": "43",
  "P44": "44",
  "P45": "45",
  "P46": "46",
  "P47": "47",
  "P48": "48",
  "P49": "49",
  "P50": "50",
  "P51": "51",
  "P52": "52",
  "P53": "53",
  "P54": "54",
  "P55": "55",
  "P56": "56",
  "P57": "57",
  "P58": "58",
  "P59": "59",
  "P60": "60",
  "P61": "61",
  "P62": "62",
  "P63": "63",
  "P64": "64",
  "P65": "65",
  "P66": "66",
  "P67": "67",
  "P68": "68",
  "P69": "69",
  "P70": "70",
  "P71": "71",
  "P72": "72",
  "P73": "73",
  "P74": "74",
  "P75": "75",
  "P76": "76",
  "P77": "77",
  "P78": "78",
  "P79": "79",
  "P80": "80",
  "P81": "81",
  "P82": "82",
  "P83": "83",
  "P84": "84",
  "P85": "85",
  "P86": "86",
  "P87": "87",
  "P88": "88",
  "P89": "89",
  "P90": "90",
  "P91": "91",
  "P92": "92",
  "P93": "93",
  "P94": "94",
  "P95": "95",
  "P96": "96",
  "P97": "97",
  "P98": "98",
  "P99": "99",
  "P100": "100",
  "P101": "101",
  "P102": "102",
  "P103": "103",
  "P104": "104",
  "P105": "105",
  "P106": "106",
  "P107": "107",
  "P108": "108",
  "P109": "109",
  "P110": "110",
  "P111": "111",
  "P112": "112",
  "P113": "113",
  "P114": "114",
  "P115": "115",
  "P116": "116",
  "P117": "117",
  "P118": "118",
  "P119": "119",
  "P120": "120",
  "P121": "121",
  "P122": "122",
  "P123": "123",
  "P124": "124",
  "P125": "125",
  "P126": "126",
  "P127": "127",
  "P128": "128",
  "P129": "129",
  "P130": "130",
  "P131": "131",
  "P132": "132",
  "P133": "133",
  "P134": "134",
  "P135": "135",
  "P136": "136",
  "P137": "137",
  "P138": "138",
  "P139": "139",
  "P140": "140",
  "P141": "141",
  "P142": "142",
  "P143": "143",
  "P144": "144",
  "P145": "145",
  "P146": "146",
  "P147": "147",
  "P148": "148",
  "P149": "149",
  "P150": "150",
  "P151": "151",
  "P152": "152",
  "P153": "153",
  "P154": "154",
  "P155": "155",
  "P156": "156",
  "P157": "157",
  "P158": "158",
  "P159": "159",
  "P160": "160",
  "P161": "161",
  "P162": "162",
  "P163": "163",
  "P164": "164",
  "P165": "165",
  "P166": "166",
  "P167": "167",
  "P168": "168",
  "P169": "169",
  "P170": "170",
  "P171": "171",
  "P172": "172",
  "P173": "173",
  "P174": "174",
  "P175": "175",
  "P176": "176",
  "P177": "177",
  "P178": "178",
  "P179": "179",
  "P180": "180",
  "P181": "181",
  "P182": "182",
  "P183": "183",
  "P184": "184",
  "P185": "185",
  "P186": "186",
  "P187": "187",
  "P188": "188",
  "P189": "189",
  "P190": "190",
  "P191": "191",
  "P192": "192",
  "P193": "193",
  "P194": "194",
  "P195": "195",
  "P196": "196",
  "P197": "197",
  "P198": "198",
  "P199": "199",
  "P200": "200",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", P26: "passive", P27: "passive", P28: "passive", P29: "passive", P30: "passive", P31: "passive", P32: "passive", P33: "passive", P34: "passive", P35: "passive", P36: "passive", P37: "passive", P38: "passive", P39: "passive", P40: "passive", P41: "passive", P42: "passive", P43: "passive", P44: "passive", P45: "passive", P46: "passive", P47: "passive", P48: "passive", P49: "passive", P50: "passive", P51: "passive", P52: "passive", P53: "passive", P54: "passive", P55: "passive", P56: "passive", P57: "passive", P58: "passive", P59: "passive", P60: "passive", P61: "passive", P62: "passive", P63: "passive", P64: "passive", P65: "passive", P66: "passive", P67: "passive", P68: "passive", P69: "passive", P70: "passive", P71: "passive", P72: "passive", P73: "passive", P74: "passive", P75: "passive", P76: "passive", P77: "passive", P78: "passive", P79: "passive", P80: "passive", P81: "passive", P82: "passive", P83: "passive", P84: "passive", P85: "passive", P86: "passive", P87: "passive", P88: "passive", P89: "passive", P90: "passive", P91: "passive", P92: "passive", P93: "passive", P94: "passive", P95: "passive", P96: "passive", P97: "passive", P98: "passive", P99: "passive", P100: "passive", P101: "passive", P102: "passive", P103: "passive", P104: "passive", P105: "passive", P106: "passive", P107: "passive", P108: "passive", P109: "passive", P110: "passive", P111: "passive", P112: "passive", P113: "passive", P114: "passive", P115: "passive", P116: "passive", P117: "passive", P118: "passive", P119: "passive", P120: "passive", P121: "passive", P122: "passive", P123: "passive", P124: "passive", P125: "passive", P126: "passive", P127: "passive", P128: "passive", P129: "passive", P130: "passive", P131: "passive", P132: "passive", P133: "passive", P134: "passive", P135: "passive", P136: "passive", P137: "passive", P138: "passive", P139: "passive", P140: "passive", P141: "passive", P142: "passive", P143: "passive", P144: "passive", P145: "passive", P146: "passive", P147: "passive", P148: "passive", P149: "passive", P150: "passive", P151: "passive", P152: "passive", P153: "passive", P154: "passive", P155: "passive", P156: "passive", P157: "passive", P158: "passive", P159: "passive", P160: "passive", P161: "passive", P162: "passive", P163: "passive", P164: "passive", P165: "passive", P166: "passive", P167: "passive", P168: "passive", P169: "passive", P170: "passive", P171: "passive", P172: "passive", P173: "passive", P174: "passive", P175: "passive", P176: "passive", P177: "passive", P178: "passive", P179: "passive", P180: "passive", P181: "passive", P182: "passive", P183: "passive", P184: "passive", P185: "passive", P186: "passive", P187: "passive", P188: "passive", P189: "passive", P190: "passive", P191: "passive", P192: "passive", P193: "passive", P194: "passive", P195: "passive", P196: "passive", P197: "passive", P198: "passive", P199: "passive", P200: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:SODIMM-200";
  override referencePrefix = "J";
}

/**
 * SODIMM 200 Pin socket
 *
 * KiCad symbol: `Connector:SODIMM-200_Split`. Reference prefix: `J`.
 * Footprint filters: *SODIMM*.
 * Keywords: SODIMM SO-DIMM DDR1 DDR2.
 */
export class SODIMM_200_Split extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
  "P25": "25",
  "P26": "26",
  "P27": "27",
  "P28": "28",
  "P29": "29",
  "P30": "30",
  "P31": "31",
  "P32": "32",
  "P33": "33",
  "P34": "34",
  "P35": "35",
  "P36": "36",
  "P37": "37",
  "P38": "38",
  "P39": "39",
  "P40": "40",
  "P41": "41",
  "P42": "42",
  "P43": "43",
  "P44": "44",
  "P45": "45",
  "P46": "46",
  "P47": "47",
  "P48": "48",
  "P49": "49",
  "P50": "50",
  "P51": "51",
  "P52": "52",
  "P53": "53",
  "P54": "54",
  "P55": "55",
  "P56": "56",
  "P57": "57",
  "P58": "58",
  "P59": "59",
  "P60": "60",
  "P61": "61",
  "P62": "62",
  "P63": "63",
  "P64": "64",
  "P65": "65",
  "P66": "66",
  "P67": "67",
  "P68": "68",
  "P69": "69",
  "P70": "70",
  "P71": "71",
  "P72": "72",
  "P73": "73",
  "P74": "74",
  "P75": "75",
  "P76": "76",
  "P77": "77",
  "P78": "78",
  "P79": "79",
  "P80": "80",
  "P81": "81",
  "P82": "82",
  "P83": "83",
  "P84": "84",
  "P85": "85",
  "P86": "86",
  "P87": "87",
  "P88": "88",
  "P89": "89",
  "P90": "90",
  "P91": "91",
  "P92": "92",
  "P93": "93",
  "P94": "94",
  "P95": "95",
  "P96": "96",
  "P97": "97",
  "P98": "98",
  "P99": "99",
  "P100": "100",
  "P101": "101",
  "P102": "102",
  "P103": "103",
  "P104": "104",
  "P105": "105",
  "P106": "106",
  "P107": "107",
  "P108": "108",
  "P109": "109",
  "P110": "110",
  "P111": "111",
  "P112": "112",
  "P113": "113",
  "P114": "114",
  "P115": "115",
  "P116": "116",
  "P117": "117",
  "P118": "118",
  "P119": "119",
  "P120": "120",
  "P121": "121",
  "P122": "122",
  "P123": "123",
  "P124": "124",
  "P125": "125",
  "P126": "126",
  "P127": "127",
  "P128": "128",
  "P129": "129",
  "P130": "130",
  "P131": "131",
  "P132": "132",
  "P133": "133",
  "P134": "134",
  "P135": "135",
  "P136": "136",
  "P137": "137",
  "P138": "138",
  "P139": "139",
  "P140": "140",
  "P141": "141",
  "P142": "142",
  "P143": "143",
  "P144": "144",
  "P145": "145",
  "P146": "146",
  "P147": "147",
  "P148": "148",
  "P149": "149",
  "P150": "150",
  "P151": "151",
  "P152": "152",
  "P153": "153",
  "P154": "154",
  "P155": "155",
  "P156": "156",
  "P157": "157",
  "P158": "158",
  "P159": "159",
  "P160": "160",
  "P161": "161",
  "P162": "162",
  "P163": "163",
  "P164": "164",
  "P165": "165",
  "P166": "166",
  "P167": "167",
  "P168": "168",
  "P169": "169",
  "P170": "170",
  "P171": "171",
  "P172": "172",
  "P173": "173",
  "P174": "174",
  "P175": "175",
  "P176": "176",
  "P177": "177",
  "P178": "178",
  "P179": "179",
  "P180": "180",
  "P181": "181",
  "P182": "182",
  "P183": "183",
  "P184": "184",
  "P185": "185",
  "P186": "186",
  "P187": "187",
  "P188": "188",
  "P189": "189",
  "P190": "190",
  "P191": "191",
  "P192": "192",
  "P193": "193",
  "P194": "194",
  "P195": "195",
  "P196": "196",
  "P197": "197",
  "P198": "198",
  "P199": "199",
  "P200": "200",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", P25: "passive", P26: "passive", P27: "passive", P28: "passive", P29: "passive", P30: "passive", P31: "passive", P32: "passive", P33: "passive", P34: "passive", P35: "passive", P36: "passive", P37: "passive", P38: "passive", P39: "passive", P40: "passive", P41: "passive", P42: "passive", P43: "passive", P44: "passive", P45: "passive", P46: "passive", P47: "passive", P48: "passive", P49: "passive", P50: "passive", P51: "passive", P52: "passive", P53: "passive", P54: "passive", P55: "passive", P56: "passive", P57: "passive", P58: "passive", P59: "passive", P60: "passive", P61: "passive", P62: "passive", P63: "passive", P64: "passive", P65: "passive", P66: "passive", P67: "passive", P68: "passive", P69: "passive", P70: "passive", P71: "passive", P72: "passive", P73: "passive", P74: "passive", P75: "passive", P76: "passive", P77: "passive", P78: "passive", P79: "passive", P80: "passive", P81: "passive", P82: "passive", P83: "passive", P84: "passive", P85: "passive", P86: "passive", P87: "passive", P88: "passive", P89: "passive", P90: "passive", P91: "passive", P92: "passive", P93: "passive", P94: "passive", P95: "passive", P96: "passive", P97: "passive", P98: "passive", P99: "passive", P100: "passive", P101: "passive", P102: "passive", P103: "passive", P104: "passive", P105: "passive", P106: "passive", P107: "passive", P108: "passive", P109: "passive", P110: "passive", P111: "passive", P112: "passive", P113: "passive", P114: "passive", P115: "passive", P116: "passive", P117: "passive", P118: "passive", P119: "passive", P120: "passive", P121: "passive", P122: "passive", P123: "passive", P124: "passive", P125: "passive", P126: "passive", P127: "passive", P128: "passive", P129: "passive", P130: "passive", P131: "passive", P132: "passive", P133: "passive", P134: "passive", P135: "passive", P136: "passive", P137: "passive", P138: "passive", P139: "passive", P140: "passive", P141: "passive", P142: "passive", P143: "passive", P144: "passive", P145: "passive", P146: "passive", P147: "passive", P148: "passive", P149: "passive", P150: "passive", P151: "passive", P152: "passive", P153: "passive", P154: "passive", P155: "passive", P156: "passive", P157: "passive", P158: "passive", P159: "passive", P160: "passive", P161: "passive", P162: "passive", P163: "passive", P164: "passive", P165: "passive", P166: "passive", P167: "passive", P168: "passive", P169: "passive", P170: "passive", P171: "passive", P172: "passive", P173: "passive", P174: "passive", P175: "passive", P176: "passive", P177: "passive", P178: "passive", P179: "passive", P180: "passive", P181: "passive", P182: "passive", P183: "passive", P184: "passive", P185: "passive", P186: "passive", P187: "passive", P188: "passive", P189: "passive", P190: "passive", P191: "passive", P192: "passive", P193: "passive", P194: "passive", P195: "passive", P196: "passive", P197: "passive", P198: "passive", P199: "passive", P200: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:SODIMM-200_Split";
  override referencePrefix = "J";
}

/**
 * Connector array, 10x40, 1.27mm pitch, mezzanine-card, plug, gold finish, VITA 57.1 FMC, SMD
 *
 * KiCad symbol: `Connector:Samtec_ASP-134602-01`. Reference prefix: `J`.
 * Footprint filters: *FMC*ASP*134602?01*10x40*P1.27mm*, *FMC*ASP*134486?01*10x40*P1.27mm*.
 * @see http://suddendocs.samtec.com/prints/asp-134602-01-mkt.pdf
 * Keywords: FPGA Mezzanine Card FMC Terminal Connector Header.
 */
export class Samtec_ASP_134602_01 extends Component.withPins({
  "Pin_1_A1": "A1",
  "Pin_2_A2": "A2",
  "Pin_3_A3": "A3",
  "Pin_4_A4": "A4",
  "Pin_5_A5": "A5",
  "Pin_6_A6": "A6",
  "Pin_7_A7": "A7",
  "Pin_8_A8": "A8",
  "Pin_9_A9": "A9",
  "Pin_10_A10": "A10",
  "Pin_11_A11": "A11",
  "Pin_12_A12": "A12",
  "Pin_13_A13": "A13",
  "Pin_14_A14": "A14",
  "Pin_15_A15": "A15",
  "Pin_16_A16": "A16",
  "Pin_17_A17": "A17",
  "Pin_18_A18": "A18",
  "Pin_19_A19": "A19",
  "Pin_20_A20": "A20",
  "Pin_21_A21": "A21",
  "Pin_22_A22": "A22",
  "Pin_23_A23": "A23",
  "Pin_24_A24": "A24",
  "Pin_25_A25": "A25",
  "Pin_26_A26": "A26",
  "Pin_27_A27": "A27",
  "Pin_28_A28": "A28",
  "Pin_29_A29": "A29",
  "Pin_30_A30": "A30",
  "Pin_31_A31": "A31",
  "Pin_32_A32": "A32",
  "Pin_33_A33": "A33",
  "Pin_34_A34": "A34",
  "Pin_35_A35": "A35",
  "Pin_36_A36": "A36",
  "Pin_37_A37": "A37",
  "Pin_38_A38": "A38",
  "Pin_39_A39": "A39",
  "Pin_40_A40": "A40",
  "Pin_1_B1": "B1",
  "Pin_2_B2": "B2",
  "Pin_3_B3": "B3",
  "Pin_4_B4": "B4",
  "Pin_5_B5": "B5",
  "Pin_6_B6": "B6",
  "Pin_7_B7": "B7",
  "Pin_8_B8": "B8",
  "Pin_9_B9": "B9",
  "Pin_10_B10": "B10",
  "Pin_11_B11": "B11",
  "Pin_12_B12": "B12",
  "Pin_13_B13": "B13",
  "Pin_14_B14": "B14",
  "Pin_15_B15": "B15",
  "Pin_16_B16": "B16",
  "Pin_17_B17": "B17",
  "Pin_18_B18": "B18",
  "Pin_19_B19": "B19",
  "Pin_20_B20": "B20",
  "Pin_21_B21": "B21",
  "Pin_22_B22": "B22",
  "Pin_23_B23": "B23",
  "Pin_24_B24": "B24",
  "Pin_25_B25": "B25",
  "Pin_26_B26": "B26",
  "Pin_27_B27": "B27",
  "Pin_28_B28": "B28",
  "Pin_29_B29": "B29",
  "Pin_30_B30": "B30",
  "Pin_31_B31": "B31",
  "Pin_32_B32": "B32",
  "Pin_33_B33": "B33",
  "Pin_34_B34": "B34",
  "Pin_35_B35": "B35",
  "Pin_36_B36": "B36",
  "Pin_37_B37": "B37",
  "Pin_38_B38": "B38",
  "Pin_39_B39": "B39",
  "Pin_40_B40": "B40",
  "Pin_1_C1": "C1",
  "Pin_2_C2": "C2",
  "Pin_3_C3": "C3",
  "Pin_4_C4": "C4",
  "Pin_5_C5": "C5",
  "Pin_6_C6": "C6",
  "Pin_7_C7": "C7",
  "Pin_8_C8": "C8",
  "Pin_9_C9": "C9",
  "Pin_10_C10": "C10",
  "Pin_11_C11": "C11",
  "Pin_12_C12": "C12",
  "Pin_13_C13": "C13",
  "Pin_14_C14": "C14",
  "Pin_15_C15": "C15",
  "Pin_16_C16": "C16",
  "Pin_17_C17": "C17",
  "Pin_18_C18": "C18",
  "Pin_19_C19": "C19",
  "Pin_20_C20": "C20",
  "Pin_21_C21": "C21",
  "Pin_22_C22": "C22",
  "Pin_23_C23": "C23",
  "Pin_24_C24": "C24",
  "Pin_25_C25": "C25",
  "Pin_26_C26": "C26",
  "Pin_27_C27": "C27",
  "Pin_28_C28": "C28",
  "Pin_29_C29": "C29",
  "Pin_30_C30": "C30",
  "Pin_31_C31": "C31",
  "Pin_32_C32": "C32",
  "Pin_33_C33": "C33",
  "Pin_34_C34": "C34",
  "Pin_35_C35": "C35",
  "Pin_36_C36": "C36",
  "Pin_37_C37": "C37",
  "Pin_38_C38": "C38",
  "Pin_39_C39": "C39",
  "Pin_40_C40": "C40",
  "Pin_1_D1": "D1",
  "Pin_2_D2": "D2",
  "Pin_3_D3": "D3",
  "Pin_4_D4": "D4",
  "Pin_5_D5": "D5",
  "Pin_6_D6": "D6",
  "Pin_7_D7": "D7",
  "Pin_8_D8": "D8",
  "Pin_9_D9": "D9",
  "Pin_10_D10": "D10",
  "Pin_11_D11": "D11",
  "Pin_12_D12": "D12",
  "Pin_13_D13": "D13",
  "Pin_14_D14": "D14",
  "Pin_15_D15": "D15",
  "Pin_16_D16": "D16",
  "Pin_17_D17": "D17",
  "Pin_18_D18": "D18",
  "Pin_19_D19": "D19",
  "Pin_20_D20": "D20",
  "Pin_21_D21": "D21",
  "Pin_22_D22": "D22",
  "Pin_23_D23": "D23",
  "Pin_24_D24": "D24",
  "Pin_25_D25": "D25",
  "Pin_26_D26": "D26",
  "Pin_27_D27": "D27",
  "Pin_28_D28": "D28",
  "Pin_29_D29": "D29",
  "Pin_30_D30": "D30",
  "Pin_31_D31": "D31",
  "Pin_32_D32": "D32",
  "Pin_33_D33": "D33",
  "Pin_34_D34": "D34",
  "Pin_35_D35": "D35",
  "Pin_36_D36": "D36",
  "Pin_37_D37": "D37",
  "Pin_38_D38": "D38",
  "Pin_39_D39": "D39",
  "Pin_40_D40": "D40",
  "Pin_1_E1": "E1",
  "Pin_2_E2": "E2",
  "Pin_3_E3": "E3",
  "Pin_4_E4": "E4",
  "Pin_5_E5": "E5",
  "Pin_6_E6": "E6",
  "Pin_7_E7": "E7",
  "Pin_8_E8": "E8",
  "Pin_9_E9": "E9",
  "Pin_10_E10": "E10",
  "Pin_11_E11": "E11",
  "Pin_12_E12": "E12",
  "Pin_13_E13": "E13",
  "Pin_14_E14": "E14",
  "Pin_15_E15": "E15",
  "Pin_16_E16": "E16",
  "Pin_17_E17": "E17",
  "Pin_18_E18": "E18",
  "Pin_19_E19": "E19",
  "Pin_20_E20": "E20",
  "Pin_21_E21": "E21",
  "Pin_22_E22": "E22",
  "Pin_23_E23": "E23",
  "Pin_24_E24": "E24",
  "Pin_25_E25": "E25",
  "Pin_26_E26": "E26",
  "Pin_27_E27": "E27",
  "Pin_28_E28": "E28",
  "Pin_29_E29": "E29",
  "Pin_30_E30": "E30",
  "Pin_31_E31": "E31",
  "Pin_32_E32": "E32",
  "Pin_33_E33": "E33",
  "Pin_34_E34": "E34",
  "Pin_35_E35": "E35",
  "Pin_36_E36": "E36",
  "Pin_37_E37": "E37",
  "Pin_38_E38": "E38",
  "Pin_39_E39": "E39",
  "Pin_40_E40": "E40",
  "Pin_1_F1": "F1",
  "Pin_2_F2": "F2",
  "Pin_3_F3": "F3",
  "Pin_4_F4": "F4",
  "Pin_5_F5": "F5",
  "Pin_6_F6": "F6",
  "Pin_7_F7": "F7",
  "Pin_8_F8": "F8",
  "Pin_9_F9": "F9",
  "Pin_10_F10": "F10",
  "Pin_11_F11": "F11",
  "Pin_12_F12": "F12",
  "Pin_13_F13": "F13",
  "Pin_14_F14": "F14",
  "Pin_15_F15": "F15",
  "Pin_16_F16": "F16",
  "Pin_17_F17": "F17",
  "Pin_18_F18": "F18",
  "Pin_19_F19": "F19",
  "Pin_20_F20": "F20",
  "Pin_21_F21": "F21",
  "Pin_22_F22": "F22",
  "Pin_23_F23": "F23",
  "Pin_24_F24": "F24",
  "Pin_25_F25": "F25",
  "Pin_26_F26": "F26",
  "Pin_27_F27": "F27",
  "Pin_28_F28": "F28",
  "Pin_29_F29": "F29",
  "Pin_30_F30": "F30",
  "Pin_31_F31": "F31",
  "Pin_32_F32": "F32",
  "Pin_33_F33": "F33",
  "Pin_34_F34": "F34",
  "Pin_35_F35": "F35",
  "Pin_36_F36": "F36",
  "Pin_37_F37": "F37",
  "Pin_38_F38": "F38",
  "Pin_39_F39": "F39",
  "Pin_40_F40": "F40",
  "Pin_1_G1": "G1",
  "Pin_2_G2": "G2",
  "Pin_3_G3": "G3",
  "Pin_4_G4": "G4",
  "Pin_5_G5": "G5",
  "Pin_6_G6": "G6",
  "Pin_7_G7": "G7",
  "Pin_8_G8": "G8",
  "Pin_9_G9": "G9",
  "Pin_10_G10": "G10",
  "Pin_11_G11": "G11",
  "Pin_12_G12": "G12",
  "Pin_13_G13": "G13",
  "Pin_14_G14": "G14",
  "Pin_15_G15": "G15",
  "Pin_16_G16": "G16",
  "Pin_17_G17": "G17",
  "Pin_18_G18": "G18",
  "Pin_19_G19": "G19",
  "Pin_20_G20": "G20",
  "Pin_21_G21": "G21",
  "Pin_22_G22": "G22",
  "Pin_23_G23": "G23",
  "Pin_24_G24": "G24",
  "Pin_25_G25": "G25",
  "Pin_26_G26": "G26",
  "Pin_27_G27": "G27",
  "Pin_28_G28": "G28",
  "Pin_29_G29": "G29",
  "Pin_30_G30": "G30",
  "Pin_31_G31": "G31",
  "Pin_32_G32": "G32",
  "Pin_33_G33": "G33",
  "Pin_34_G34": "G34",
  "Pin_35_G35": "G35",
  "Pin_36_G36": "G36",
  "Pin_37_G37": "G37",
  "Pin_38_G38": "G38",
  "Pin_39_G39": "G39",
  "Pin_40_G40": "G40",
  "Pin_1_H1": "H1",
  "Pin_2_H2": "H2",
  "Pin_3_H3": "H3",
  "Pin_4_H4": "H4",
  "Pin_5_H5": "H5",
  "Pin_6_H6": "H6",
  "Pin_7_H7": "H7",
  "Pin_8_H8": "H8",
  "Pin_9_H9": "H9",
  "Pin_10_H10": "H10",
  "Pin_11_H11": "H11",
  "Pin_12_H12": "H12",
  "Pin_13_H13": "H13",
  "Pin_14_H14": "H14",
  "Pin_15_H15": "H15",
  "Pin_16_H16": "H16",
  "Pin_17_H17": "H17",
  "Pin_18_H18": "H18",
  "Pin_19_H19": "H19",
  "Pin_20_H20": "H20",
  "Pin_21_H21": "H21",
  "Pin_22_H22": "H22",
  "Pin_23_H23": "H23",
  "Pin_24_H24": "H24",
  "Pin_25_H25": "H25",
  "Pin_26_H26": "H26",
  "Pin_27_H27": "H27",
  "Pin_28_H28": "H28",
  "Pin_29_H29": "H29",
  "Pin_30_H30": "H30",
  "Pin_31_H31": "H31",
  "Pin_32_H32": "H32",
  "Pin_33_H33": "H33",
  "Pin_34_H34": "H34",
  "Pin_35_H35": "H35",
  "Pin_36_H36": "H36",
  "Pin_37_H37": "H37",
  "Pin_38_H38": "H38",
  "Pin_39_H39": "H39",
  "Pin_40_H40": "H40",
  "Pin_1_J1": "J1",
  "Pin_2_J2": "J2",
  "Pin_3_J3": "J3",
  "Pin_4_J4": "J4",
  "Pin_5_J5": "J5",
  "Pin_6_J6": "J6",
  "Pin_7_J7": "J7",
  "Pin_8_J8": "J8",
  "Pin_9_J9": "J9",
  "Pin_10_J10": "J10",
  "Pin_11_J11": "J11",
  "Pin_12_J12": "J12",
  "Pin_13_J13": "J13",
  "Pin_14_J14": "J14",
  "Pin_15_J15": "J15",
  "Pin_16_J16": "J16",
  "Pin_17_J17": "J17",
  "Pin_18_J18": "J18",
  "Pin_19_J19": "J19",
  "Pin_20_J20": "J20",
  "Pin_21_J21": "J21",
  "Pin_22_J22": "J22",
  "Pin_23_J23": "J23",
  "Pin_24_J24": "J24",
  "Pin_25_J25": "J25",
  "Pin_26_J26": "J26",
  "Pin_27_J27": "J27",
  "Pin_28_J28": "J28",
  "Pin_29_J29": "J29",
  "Pin_30_J30": "J30",
  "Pin_31_J31": "J31",
  "Pin_32_J32": "J32",
  "Pin_33_J33": "J33",
  "Pin_34_J34": "J34",
  "Pin_35_J35": "J35",
  "Pin_36_J36": "J36",
  "Pin_37_J37": "J37",
  "Pin_38_J38": "J38",
  "Pin_39_J39": "J39",
  "Pin_40_J40": "J40",
  "Pin_1_K1": "K1",
  "Pin_2_K2": "K2",
  "Pin_3_K3": "K3",
  "Pin_4_K4": "K4",
  "Pin_5_K5": "K5",
  "Pin_6_K6": "K6",
  "Pin_7_K7": "K7",
  "Pin_8_K8": "K8",
  "Pin_9_K9": "K9",
  "Pin_10_K10": "K10",
  "Pin_11_K11": "K11",
  "Pin_12_K12": "K12",
  "Pin_13_K13": "K13",
  "Pin_14_K14": "K14",
  "Pin_15_K15": "K15",
  "Pin_16_K16": "K16",
  "Pin_17_K17": "K17",
  "Pin_18_K18": "K18",
  "Pin_19_K19": "K19",
  "Pin_20_K20": "K20",
  "Pin_21_K21": "K21",
  "Pin_22_K22": "K22",
  "Pin_23_K23": "K23",
  "Pin_24_K24": "K24",
  "Pin_25_K25": "K25",
  "Pin_26_K26": "K26",
  "Pin_27_K27": "K27",
  "Pin_28_K28": "K28",
  "Pin_29_K29": "K29",
  "Pin_30_K30": "K30",
  "Pin_31_K31": "K31",
  "Pin_32_K32": "K32",
  "Pin_33_K33": "K33",
  "Pin_34_K34": "K34",
  "Pin_35_K35": "K35",
  "Pin_36_K36": "K36",
  "Pin_37_K37": "K37",
  "Pin_38_K38": "K38",
  "Pin_39_K39": "K39",
  "Pin_40_K40": "K40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1_A1: "passive", Pin_2_A2: "passive", Pin_3_A3: "passive", Pin_4_A4: "passive", Pin_5_A5: "passive", Pin_6_A6: "passive", Pin_7_A7: "passive", Pin_8_A8: "passive", Pin_9_A9: "passive", Pin_10_A10: "passive", Pin_11_A11: "passive", Pin_12_A12: "passive", Pin_13_A13: "passive", Pin_14_A14: "passive", Pin_15_A15: "passive", Pin_16_A16: "passive", Pin_17_A17: "passive", Pin_18_A18: "passive", Pin_19_A19: "passive", Pin_20_A20: "passive", Pin_21_A21: "passive", Pin_22_A22: "passive", Pin_23_A23: "passive", Pin_24_A24: "passive", Pin_25_A25: "passive", Pin_26_A26: "passive", Pin_27_A27: "passive", Pin_28_A28: "passive", Pin_29_A29: "passive", Pin_30_A30: "passive", Pin_31_A31: "passive", Pin_32_A32: "passive", Pin_33_A33: "passive", Pin_34_A34: "passive", Pin_35_A35: "passive", Pin_36_A36: "passive", Pin_37_A37: "passive", Pin_38_A38: "passive", Pin_39_A39: "passive", Pin_40_A40: "passive", Pin_1_B1: "passive", Pin_2_B2: "passive", Pin_3_B3: "passive", Pin_4_B4: "passive", Pin_5_B5: "passive", Pin_6_B6: "passive", Pin_7_B7: "passive", Pin_8_B8: "passive", Pin_9_B9: "passive", Pin_10_B10: "passive", Pin_11_B11: "passive", Pin_12_B12: "passive", Pin_13_B13: "passive", Pin_14_B14: "passive", Pin_15_B15: "passive", Pin_16_B16: "passive", Pin_17_B17: "passive", Pin_18_B18: "passive", Pin_19_B19: "passive", Pin_20_B20: "passive", Pin_21_B21: "passive", Pin_22_B22: "passive", Pin_23_B23: "passive", Pin_24_B24: "passive", Pin_25_B25: "passive", Pin_26_B26: "passive", Pin_27_B27: "passive", Pin_28_B28: "passive", Pin_29_B29: "passive", Pin_30_B30: "passive", Pin_31_B31: "passive", Pin_32_B32: "passive", Pin_33_B33: "passive", Pin_34_B34: "passive", Pin_35_B35: "passive", Pin_36_B36: "passive", Pin_37_B37: "passive", Pin_38_B38: "passive", Pin_39_B39: "passive", Pin_40_B40: "passive", Pin_1_C1: "passive", Pin_2_C2: "passive", Pin_3_C3: "passive", Pin_4_C4: "passive", Pin_5_C5: "passive", Pin_6_C6: "passive", Pin_7_C7: "passive", Pin_8_C8: "passive", Pin_9_C9: "passive", Pin_10_C10: "passive", Pin_11_C11: "passive", Pin_12_C12: "passive", Pin_13_C13: "passive", Pin_14_C14: "passive", Pin_15_C15: "passive", Pin_16_C16: "passive", Pin_17_C17: "passive", Pin_18_C18: "passive", Pin_19_C19: "passive", Pin_20_C20: "passive", Pin_21_C21: "passive", Pin_22_C22: "passive", Pin_23_C23: "passive", Pin_24_C24: "passive", Pin_25_C25: "passive", Pin_26_C26: "passive", Pin_27_C27: "passive", Pin_28_C28: "passive", Pin_29_C29: "passive", Pin_30_C30: "passive", Pin_31_C31: "passive", Pin_32_C32: "passive", Pin_33_C33: "passive", Pin_34_C34: "passive", Pin_35_C35: "passive", Pin_36_C36: "passive", Pin_37_C37: "passive", Pin_38_C38: "passive", Pin_39_C39: "passive", Pin_40_C40: "passive", Pin_1_D1: "passive", Pin_2_D2: "passive", Pin_3_D3: "passive", Pin_4_D4: "passive", Pin_5_D5: "passive", Pin_6_D6: "passive", Pin_7_D7: "passive", Pin_8_D8: "passive", Pin_9_D9: "passive", Pin_10_D10: "passive", Pin_11_D11: "passive", Pin_12_D12: "passive", Pin_13_D13: "passive", Pin_14_D14: "passive", Pin_15_D15: "passive", Pin_16_D16: "passive", Pin_17_D17: "passive", Pin_18_D18: "passive", Pin_19_D19: "passive", Pin_20_D20: "passive", Pin_21_D21: "passive", Pin_22_D22: "passive", Pin_23_D23: "passive", Pin_24_D24: "passive", Pin_25_D25: "passive", Pin_26_D26: "passive", Pin_27_D27: "passive", Pin_28_D28: "passive", Pin_29_D29: "passive", Pin_30_D30: "passive", Pin_31_D31: "passive", Pin_32_D32: "passive", Pin_33_D33: "passive", Pin_34_D34: "passive", Pin_35_D35: "passive", Pin_36_D36: "passive", Pin_37_D37: "passive", Pin_38_D38: "passive", Pin_39_D39: "passive", Pin_40_D40: "passive", Pin_1_E1: "passive", Pin_2_E2: "passive", Pin_3_E3: "passive", Pin_4_E4: "passive", Pin_5_E5: "passive", Pin_6_E6: "passive", Pin_7_E7: "passive", Pin_8_E8: "passive", Pin_9_E9: "passive", Pin_10_E10: "passive", Pin_11_E11: "passive", Pin_12_E12: "passive", Pin_13_E13: "passive", Pin_14_E14: "passive", Pin_15_E15: "passive", Pin_16_E16: "passive", Pin_17_E17: "passive", Pin_18_E18: "passive", Pin_19_E19: "passive", Pin_20_E20: "passive", Pin_21_E21: "passive", Pin_22_E22: "passive", Pin_23_E23: "passive", Pin_24_E24: "passive", Pin_25_E25: "passive", Pin_26_E26: "passive", Pin_27_E27: "passive", Pin_28_E28: "passive", Pin_29_E29: "passive", Pin_30_E30: "passive", Pin_31_E31: "passive", Pin_32_E32: "passive", Pin_33_E33: "passive", Pin_34_E34: "passive", Pin_35_E35: "passive", Pin_36_E36: "passive", Pin_37_E37: "passive", Pin_38_E38: "passive", Pin_39_E39: "passive", Pin_40_E40: "passive", Pin_1_F1: "passive", Pin_2_F2: "passive", Pin_3_F3: "passive", Pin_4_F4: "passive", Pin_5_F5: "passive", Pin_6_F6: "passive", Pin_7_F7: "passive", Pin_8_F8: "passive", Pin_9_F9: "passive", Pin_10_F10: "passive", Pin_11_F11: "passive", Pin_12_F12: "passive", Pin_13_F13: "passive", Pin_14_F14: "passive", Pin_15_F15: "passive", Pin_16_F16: "passive", Pin_17_F17: "passive", Pin_18_F18: "passive", Pin_19_F19: "passive", Pin_20_F20: "passive", Pin_21_F21: "passive", Pin_22_F22: "passive", Pin_23_F23: "passive", Pin_24_F24: "passive", Pin_25_F25: "passive", Pin_26_F26: "passive", Pin_27_F27: "passive", Pin_28_F28: "passive", Pin_29_F29: "passive", Pin_30_F30: "passive", Pin_31_F31: "passive", Pin_32_F32: "passive", Pin_33_F33: "passive", Pin_34_F34: "passive", Pin_35_F35: "passive", Pin_36_F36: "passive", Pin_37_F37: "passive", Pin_38_F38: "passive", Pin_39_F39: "passive", Pin_40_F40: "passive", Pin_1_G1: "passive", Pin_2_G2: "passive", Pin_3_G3: "passive", Pin_4_G4: "passive", Pin_5_G5: "passive", Pin_6_G6: "passive", Pin_7_G7: "passive", Pin_8_G8: "passive", Pin_9_G9: "passive", Pin_10_G10: "passive", Pin_11_G11: "passive", Pin_12_G12: "passive", Pin_13_G13: "passive", Pin_14_G14: "passive", Pin_15_G15: "passive", Pin_16_G16: "passive", Pin_17_G17: "passive", Pin_18_G18: "passive", Pin_19_G19: "passive", Pin_20_G20: "passive", Pin_21_G21: "passive", Pin_22_G22: "passive", Pin_23_G23: "passive", Pin_24_G24: "passive", Pin_25_G25: "passive", Pin_26_G26: "passive", Pin_27_G27: "passive", Pin_28_G28: "passive", Pin_29_G29: "passive", Pin_30_G30: "passive", Pin_31_G31: "passive", Pin_32_G32: "passive", Pin_33_G33: "passive", Pin_34_G34: "passive", Pin_35_G35: "passive", Pin_36_G36: "passive", Pin_37_G37: "passive", Pin_38_G38: "passive", Pin_39_G39: "passive", Pin_40_G40: "passive", Pin_1_H1: "passive", Pin_2_H2: "passive", Pin_3_H3: "passive", Pin_4_H4: "passive", Pin_5_H5: "passive", Pin_6_H6: "passive", Pin_7_H7: "passive", Pin_8_H8: "passive", Pin_9_H9: "passive", Pin_10_H10: "passive", Pin_11_H11: "passive", Pin_12_H12: "passive", Pin_13_H13: "passive", Pin_14_H14: "passive", Pin_15_H15: "passive", Pin_16_H16: "passive", Pin_17_H17: "passive", Pin_18_H18: "passive", Pin_19_H19: "passive", Pin_20_H20: "passive", Pin_21_H21: "passive", Pin_22_H22: "passive", Pin_23_H23: "passive", Pin_24_H24: "passive", Pin_25_H25: "passive", Pin_26_H26: "passive", Pin_27_H27: "passive", Pin_28_H28: "passive", Pin_29_H29: "passive", Pin_30_H30: "passive", Pin_31_H31: "passive", Pin_32_H32: "passive", Pin_33_H33: "passive", Pin_34_H34: "passive", Pin_35_H35: "passive", Pin_36_H36: "passive", Pin_37_H37: "passive", Pin_38_H38: "passive", Pin_39_H39: "passive", Pin_40_H40: "passive", Pin_1_J1: "passive", Pin_2_J2: "passive", Pin_3_J3: "passive", Pin_4_J4: "passive", Pin_5_J5: "passive", Pin_6_J6: "passive", Pin_7_J7: "passive", Pin_8_J8: "passive", Pin_9_J9: "passive", Pin_10_J10: "passive", Pin_11_J11: "passive", Pin_12_J12: "passive", Pin_13_J13: "passive", Pin_14_J14: "passive", Pin_15_J15: "passive", Pin_16_J16: "passive", Pin_17_J17: "passive", Pin_18_J18: "passive", Pin_19_J19: "passive", Pin_20_J20: "passive", Pin_21_J21: "passive", Pin_22_J22: "passive", Pin_23_J23: "passive", Pin_24_J24: "passive", Pin_25_J25: "passive", Pin_26_J26: "passive", Pin_27_J27: "passive", Pin_28_J28: "passive", Pin_29_J29: "passive", Pin_30_J30: "passive", Pin_31_J31: "passive", Pin_32_J32: "passive", Pin_33_J33: "passive", Pin_34_J34: "passive", Pin_35_J35: "passive", Pin_36_J36: "passive", Pin_37_J37: "passive", Pin_38_J38: "passive", Pin_39_J39: "passive", Pin_40_J40: "passive", Pin_1_K1: "passive", Pin_2_K2: "passive", Pin_3_K3: "passive", Pin_4_K4: "passive", Pin_5_K5: "passive", Pin_6_K6: "passive", Pin_7_K7: "passive", Pin_8_K8: "passive", Pin_9_K9: "passive", Pin_10_K10: "passive", Pin_11_K11: "passive", Pin_12_K12: "passive", Pin_13_K13: "passive", Pin_14_K14: "passive", Pin_15_K15: "passive", Pin_16_K16: "passive", Pin_17_K17: "passive", Pin_18_K18: "passive", Pin_19_K19: "passive", Pin_20_K20: "passive", Pin_21_K21: "passive", Pin_22_K22: "passive", Pin_23_K23: "passive", Pin_24_K24: "passive", Pin_25_K25: "passive", Pin_26_K26: "passive", Pin_27_K27: "passive", Pin_28_K28: "passive", Pin_29_K29: "passive", Pin_30_K30: "passive", Pin_31_K31: "passive", Pin_32_K32: "passive", Pin_33_K33: "passive", Pin_34_K34: "passive", Pin_35_K35: "passive", Pin_36_K36: "passive", Pin_37_K37: "passive", Pin_38_K38: "passive", Pin_39_K39: "passive", Pin_40_K40: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Samtec_ASP-134602-01";
  override referencePrefix = "J";
}

/**
 * Connector array, 10x40, 1.27mm pitch, carrier-card, receptacle, gold finish, VITA 57.1 FMC, SMD
 *
 * KiCad symbol: `Connector:Samtec_ASP-134486-01`. Reference prefix: `J`.
 * Footprint filters: *FMC*ASP*134602?01*10x40*P1.27mm*, *FMC*ASP*134486?01*10x40*P1.27mm*.
 * @see http://suddendocs.samtec.com/prints/asp-134486-01-mkt.pdf
 * Keywords: FPGA Mezzanine Card FMC Terminal Connector Header.
 */
export class Samtec_ASP_134486_01 extends Component.withPins({
  "Pin_1_A1": "A1",
  "Pin_2_A2": "A2",
  "Pin_3_A3": "A3",
  "Pin_4_A4": "A4",
  "Pin_5_A5": "A5",
  "Pin_6_A6": "A6",
  "Pin_7_A7": "A7",
  "Pin_8_A8": "A8",
  "Pin_9_A9": "A9",
  "Pin_10_A10": "A10",
  "Pin_11_A11": "A11",
  "Pin_12_A12": "A12",
  "Pin_13_A13": "A13",
  "Pin_14_A14": "A14",
  "Pin_15_A15": "A15",
  "Pin_16_A16": "A16",
  "Pin_17_A17": "A17",
  "Pin_18_A18": "A18",
  "Pin_19_A19": "A19",
  "Pin_20_A20": "A20",
  "Pin_21_A21": "A21",
  "Pin_22_A22": "A22",
  "Pin_23_A23": "A23",
  "Pin_24_A24": "A24",
  "Pin_25_A25": "A25",
  "Pin_26_A26": "A26",
  "Pin_27_A27": "A27",
  "Pin_28_A28": "A28",
  "Pin_29_A29": "A29",
  "Pin_30_A30": "A30",
  "Pin_31_A31": "A31",
  "Pin_32_A32": "A32",
  "Pin_33_A33": "A33",
  "Pin_34_A34": "A34",
  "Pin_35_A35": "A35",
  "Pin_36_A36": "A36",
  "Pin_37_A37": "A37",
  "Pin_38_A38": "A38",
  "Pin_39_A39": "A39",
  "Pin_40_A40": "A40",
  "Pin_1_B1": "B1",
  "Pin_2_B2": "B2",
  "Pin_3_B3": "B3",
  "Pin_4_B4": "B4",
  "Pin_5_B5": "B5",
  "Pin_6_B6": "B6",
  "Pin_7_B7": "B7",
  "Pin_8_B8": "B8",
  "Pin_9_B9": "B9",
  "Pin_10_B10": "B10",
  "Pin_11_B11": "B11",
  "Pin_12_B12": "B12",
  "Pin_13_B13": "B13",
  "Pin_14_B14": "B14",
  "Pin_15_B15": "B15",
  "Pin_16_B16": "B16",
  "Pin_17_B17": "B17",
  "Pin_18_B18": "B18",
  "Pin_19_B19": "B19",
  "Pin_20_B20": "B20",
  "Pin_21_B21": "B21",
  "Pin_22_B22": "B22",
  "Pin_23_B23": "B23",
  "Pin_24_B24": "B24",
  "Pin_25_B25": "B25",
  "Pin_26_B26": "B26",
  "Pin_27_B27": "B27",
  "Pin_28_B28": "B28",
  "Pin_29_B29": "B29",
  "Pin_30_B30": "B30",
  "Pin_31_B31": "B31",
  "Pin_32_B32": "B32",
  "Pin_33_B33": "B33",
  "Pin_34_B34": "B34",
  "Pin_35_B35": "B35",
  "Pin_36_B36": "B36",
  "Pin_37_B37": "B37",
  "Pin_38_B38": "B38",
  "Pin_39_B39": "B39",
  "Pin_40_B40": "B40",
  "Pin_1_C1": "C1",
  "Pin_2_C2": "C2",
  "Pin_3_C3": "C3",
  "Pin_4_C4": "C4",
  "Pin_5_C5": "C5",
  "Pin_6_C6": "C6",
  "Pin_7_C7": "C7",
  "Pin_8_C8": "C8",
  "Pin_9_C9": "C9",
  "Pin_10_C10": "C10",
  "Pin_11_C11": "C11",
  "Pin_12_C12": "C12",
  "Pin_13_C13": "C13",
  "Pin_14_C14": "C14",
  "Pin_15_C15": "C15",
  "Pin_16_C16": "C16",
  "Pin_17_C17": "C17",
  "Pin_18_C18": "C18",
  "Pin_19_C19": "C19",
  "Pin_20_C20": "C20",
  "Pin_21_C21": "C21",
  "Pin_22_C22": "C22",
  "Pin_23_C23": "C23",
  "Pin_24_C24": "C24",
  "Pin_25_C25": "C25",
  "Pin_26_C26": "C26",
  "Pin_27_C27": "C27",
  "Pin_28_C28": "C28",
  "Pin_29_C29": "C29",
  "Pin_30_C30": "C30",
  "Pin_31_C31": "C31",
  "Pin_32_C32": "C32",
  "Pin_33_C33": "C33",
  "Pin_34_C34": "C34",
  "Pin_35_C35": "C35",
  "Pin_36_C36": "C36",
  "Pin_37_C37": "C37",
  "Pin_38_C38": "C38",
  "Pin_39_C39": "C39",
  "Pin_40_C40": "C40",
  "Pin_1_D1": "D1",
  "Pin_2_D2": "D2",
  "Pin_3_D3": "D3",
  "Pin_4_D4": "D4",
  "Pin_5_D5": "D5",
  "Pin_6_D6": "D6",
  "Pin_7_D7": "D7",
  "Pin_8_D8": "D8",
  "Pin_9_D9": "D9",
  "Pin_10_D10": "D10",
  "Pin_11_D11": "D11",
  "Pin_12_D12": "D12",
  "Pin_13_D13": "D13",
  "Pin_14_D14": "D14",
  "Pin_15_D15": "D15",
  "Pin_16_D16": "D16",
  "Pin_17_D17": "D17",
  "Pin_18_D18": "D18",
  "Pin_19_D19": "D19",
  "Pin_20_D20": "D20",
  "Pin_21_D21": "D21",
  "Pin_22_D22": "D22",
  "Pin_23_D23": "D23",
  "Pin_24_D24": "D24",
  "Pin_25_D25": "D25",
  "Pin_26_D26": "D26",
  "Pin_27_D27": "D27",
  "Pin_28_D28": "D28",
  "Pin_29_D29": "D29",
  "Pin_30_D30": "D30",
  "Pin_31_D31": "D31",
  "Pin_32_D32": "D32",
  "Pin_33_D33": "D33",
  "Pin_34_D34": "D34",
  "Pin_35_D35": "D35",
  "Pin_36_D36": "D36",
  "Pin_37_D37": "D37",
  "Pin_38_D38": "D38",
  "Pin_39_D39": "D39",
  "Pin_40_D40": "D40",
  "Pin_1_E1": "E1",
  "Pin_2_E2": "E2",
  "Pin_3_E3": "E3",
  "Pin_4_E4": "E4",
  "Pin_5_E5": "E5",
  "Pin_6_E6": "E6",
  "Pin_7_E7": "E7",
  "Pin_8_E8": "E8",
  "Pin_9_E9": "E9",
  "Pin_10_E10": "E10",
  "Pin_11_E11": "E11",
  "Pin_12_E12": "E12",
  "Pin_13_E13": "E13",
  "Pin_14_E14": "E14",
  "Pin_15_E15": "E15",
  "Pin_16_E16": "E16",
  "Pin_17_E17": "E17",
  "Pin_18_E18": "E18",
  "Pin_19_E19": "E19",
  "Pin_20_E20": "E20",
  "Pin_21_E21": "E21",
  "Pin_22_E22": "E22",
  "Pin_23_E23": "E23",
  "Pin_24_E24": "E24",
  "Pin_25_E25": "E25",
  "Pin_26_E26": "E26",
  "Pin_27_E27": "E27",
  "Pin_28_E28": "E28",
  "Pin_29_E29": "E29",
  "Pin_30_E30": "E30",
  "Pin_31_E31": "E31",
  "Pin_32_E32": "E32",
  "Pin_33_E33": "E33",
  "Pin_34_E34": "E34",
  "Pin_35_E35": "E35",
  "Pin_36_E36": "E36",
  "Pin_37_E37": "E37",
  "Pin_38_E38": "E38",
  "Pin_39_E39": "E39",
  "Pin_40_E40": "E40",
  "Pin_1_F1": "F1",
  "Pin_2_F2": "F2",
  "Pin_3_F3": "F3",
  "Pin_4_F4": "F4",
  "Pin_5_F5": "F5",
  "Pin_6_F6": "F6",
  "Pin_7_F7": "F7",
  "Pin_8_F8": "F8",
  "Pin_9_F9": "F9",
  "Pin_10_F10": "F10",
  "Pin_11_F11": "F11",
  "Pin_12_F12": "F12",
  "Pin_13_F13": "F13",
  "Pin_14_F14": "F14",
  "Pin_15_F15": "F15",
  "Pin_16_F16": "F16",
  "Pin_17_F17": "F17",
  "Pin_18_F18": "F18",
  "Pin_19_F19": "F19",
  "Pin_20_F20": "F20",
  "Pin_21_F21": "F21",
  "Pin_22_F22": "F22",
  "Pin_23_F23": "F23",
  "Pin_24_F24": "F24",
  "Pin_25_F25": "F25",
  "Pin_26_F26": "F26",
  "Pin_27_F27": "F27",
  "Pin_28_F28": "F28",
  "Pin_29_F29": "F29",
  "Pin_30_F30": "F30",
  "Pin_31_F31": "F31",
  "Pin_32_F32": "F32",
  "Pin_33_F33": "F33",
  "Pin_34_F34": "F34",
  "Pin_35_F35": "F35",
  "Pin_36_F36": "F36",
  "Pin_37_F37": "F37",
  "Pin_38_F38": "F38",
  "Pin_39_F39": "F39",
  "Pin_40_F40": "F40",
  "Pin_1_G1": "G1",
  "Pin_2_G2": "G2",
  "Pin_3_G3": "G3",
  "Pin_4_G4": "G4",
  "Pin_5_G5": "G5",
  "Pin_6_G6": "G6",
  "Pin_7_G7": "G7",
  "Pin_8_G8": "G8",
  "Pin_9_G9": "G9",
  "Pin_10_G10": "G10",
  "Pin_11_G11": "G11",
  "Pin_12_G12": "G12",
  "Pin_13_G13": "G13",
  "Pin_14_G14": "G14",
  "Pin_15_G15": "G15",
  "Pin_16_G16": "G16",
  "Pin_17_G17": "G17",
  "Pin_18_G18": "G18",
  "Pin_19_G19": "G19",
  "Pin_20_G20": "G20",
  "Pin_21_G21": "G21",
  "Pin_22_G22": "G22",
  "Pin_23_G23": "G23",
  "Pin_24_G24": "G24",
  "Pin_25_G25": "G25",
  "Pin_26_G26": "G26",
  "Pin_27_G27": "G27",
  "Pin_28_G28": "G28",
  "Pin_29_G29": "G29",
  "Pin_30_G30": "G30",
  "Pin_31_G31": "G31",
  "Pin_32_G32": "G32",
  "Pin_33_G33": "G33",
  "Pin_34_G34": "G34",
  "Pin_35_G35": "G35",
  "Pin_36_G36": "G36",
  "Pin_37_G37": "G37",
  "Pin_38_G38": "G38",
  "Pin_39_G39": "G39",
  "Pin_40_G40": "G40",
  "Pin_1_H1": "H1",
  "Pin_2_H2": "H2",
  "Pin_3_H3": "H3",
  "Pin_4_H4": "H4",
  "Pin_5_H5": "H5",
  "Pin_6_H6": "H6",
  "Pin_7_H7": "H7",
  "Pin_8_H8": "H8",
  "Pin_9_H9": "H9",
  "Pin_10_H10": "H10",
  "Pin_11_H11": "H11",
  "Pin_12_H12": "H12",
  "Pin_13_H13": "H13",
  "Pin_14_H14": "H14",
  "Pin_15_H15": "H15",
  "Pin_16_H16": "H16",
  "Pin_17_H17": "H17",
  "Pin_18_H18": "H18",
  "Pin_19_H19": "H19",
  "Pin_20_H20": "H20",
  "Pin_21_H21": "H21",
  "Pin_22_H22": "H22",
  "Pin_23_H23": "H23",
  "Pin_24_H24": "H24",
  "Pin_25_H25": "H25",
  "Pin_26_H26": "H26",
  "Pin_27_H27": "H27",
  "Pin_28_H28": "H28",
  "Pin_29_H29": "H29",
  "Pin_30_H30": "H30",
  "Pin_31_H31": "H31",
  "Pin_32_H32": "H32",
  "Pin_33_H33": "H33",
  "Pin_34_H34": "H34",
  "Pin_35_H35": "H35",
  "Pin_36_H36": "H36",
  "Pin_37_H37": "H37",
  "Pin_38_H38": "H38",
  "Pin_39_H39": "H39",
  "Pin_40_H40": "H40",
  "Pin_1_J1": "J1",
  "Pin_2_J2": "J2",
  "Pin_3_J3": "J3",
  "Pin_4_J4": "J4",
  "Pin_5_J5": "J5",
  "Pin_6_J6": "J6",
  "Pin_7_J7": "J7",
  "Pin_8_J8": "J8",
  "Pin_9_J9": "J9",
  "Pin_10_J10": "J10",
  "Pin_11_J11": "J11",
  "Pin_12_J12": "J12",
  "Pin_13_J13": "J13",
  "Pin_14_J14": "J14",
  "Pin_15_J15": "J15",
  "Pin_16_J16": "J16",
  "Pin_17_J17": "J17",
  "Pin_18_J18": "J18",
  "Pin_19_J19": "J19",
  "Pin_20_J20": "J20",
  "Pin_21_J21": "J21",
  "Pin_22_J22": "J22",
  "Pin_23_J23": "J23",
  "Pin_24_J24": "J24",
  "Pin_25_J25": "J25",
  "Pin_26_J26": "J26",
  "Pin_27_J27": "J27",
  "Pin_28_J28": "J28",
  "Pin_29_J29": "J29",
  "Pin_30_J30": "J30",
  "Pin_31_J31": "J31",
  "Pin_32_J32": "J32",
  "Pin_33_J33": "J33",
  "Pin_34_J34": "J34",
  "Pin_35_J35": "J35",
  "Pin_36_J36": "J36",
  "Pin_37_J37": "J37",
  "Pin_38_J38": "J38",
  "Pin_39_J39": "J39",
  "Pin_40_J40": "J40",
  "Pin_1_K1": "K1",
  "Pin_2_K2": "K2",
  "Pin_3_K3": "K3",
  "Pin_4_K4": "K4",
  "Pin_5_K5": "K5",
  "Pin_6_K6": "K6",
  "Pin_7_K7": "K7",
  "Pin_8_K8": "K8",
  "Pin_9_K9": "K9",
  "Pin_10_K10": "K10",
  "Pin_11_K11": "K11",
  "Pin_12_K12": "K12",
  "Pin_13_K13": "K13",
  "Pin_14_K14": "K14",
  "Pin_15_K15": "K15",
  "Pin_16_K16": "K16",
  "Pin_17_K17": "K17",
  "Pin_18_K18": "K18",
  "Pin_19_K19": "K19",
  "Pin_20_K20": "K20",
  "Pin_21_K21": "K21",
  "Pin_22_K22": "K22",
  "Pin_23_K23": "K23",
  "Pin_24_K24": "K24",
  "Pin_25_K25": "K25",
  "Pin_26_K26": "K26",
  "Pin_27_K27": "K27",
  "Pin_28_K28": "K28",
  "Pin_29_K29": "K29",
  "Pin_30_K30": "K30",
  "Pin_31_K31": "K31",
  "Pin_32_K32": "K32",
  "Pin_33_K33": "K33",
  "Pin_34_K34": "K34",
  "Pin_35_K35": "K35",
  "Pin_36_K36": "K36",
  "Pin_37_K37": "K37",
  "Pin_38_K38": "K38",
  "Pin_39_K39": "K39",
  "Pin_40_K40": "K40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1_A1: "passive", Pin_2_A2: "passive", Pin_3_A3: "passive", Pin_4_A4: "passive", Pin_5_A5: "passive", Pin_6_A6: "passive", Pin_7_A7: "passive", Pin_8_A8: "passive", Pin_9_A9: "passive", Pin_10_A10: "passive", Pin_11_A11: "passive", Pin_12_A12: "passive", Pin_13_A13: "passive", Pin_14_A14: "passive", Pin_15_A15: "passive", Pin_16_A16: "passive", Pin_17_A17: "passive", Pin_18_A18: "passive", Pin_19_A19: "passive", Pin_20_A20: "passive", Pin_21_A21: "passive", Pin_22_A22: "passive", Pin_23_A23: "passive", Pin_24_A24: "passive", Pin_25_A25: "passive", Pin_26_A26: "passive", Pin_27_A27: "passive", Pin_28_A28: "passive", Pin_29_A29: "passive", Pin_30_A30: "passive", Pin_31_A31: "passive", Pin_32_A32: "passive", Pin_33_A33: "passive", Pin_34_A34: "passive", Pin_35_A35: "passive", Pin_36_A36: "passive", Pin_37_A37: "passive", Pin_38_A38: "passive", Pin_39_A39: "passive", Pin_40_A40: "passive", Pin_1_B1: "passive", Pin_2_B2: "passive", Pin_3_B3: "passive", Pin_4_B4: "passive", Pin_5_B5: "passive", Pin_6_B6: "passive", Pin_7_B7: "passive", Pin_8_B8: "passive", Pin_9_B9: "passive", Pin_10_B10: "passive", Pin_11_B11: "passive", Pin_12_B12: "passive", Pin_13_B13: "passive", Pin_14_B14: "passive", Pin_15_B15: "passive", Pin_16_B16: "passive", Pin_17_B17: "passive", Pin_18_B18: "passive", Pin_19_B19: "passive", Pin_20_B20: "passive", Pin_21_B21: "passive", Pin_22_B22: "passive", Pin_23_B23: "passive", Pin_24_B24: "passive", Pin_25_B25: "passive", Pin_26_B26: "passive", Pin_27_B27: "passive", Pin_28_B28: "passive", Pin_29_B29: "passive", Pin_30_B30: "passive", Pin_31_B31: "passive", Pin_32_B32: "passive", Pin_33_B33: "passive", Pin_34_B34: "passive", Pin_35_B35: "passive", Pin_36_B36: "passive", Pin_37_B37: "passive", Pin_38_B38: "passive", Pin_39_B39: "passive", Pin_40_B40: "passive", Pin_1_C1: "passive", Pin_2_C2: "passive", Pin_3_C3: "passive", Pin_4_C4: "passive", Pin_5_C5: "passive", Pin_6_C6: "passive", Pin_7_C7: "passive", Pin_8_C8: "passive", Pin_9_C9: "passive", Pin_10_C10: "passive", Pin_11_C11: "passive", Pin_12_C12: "passive", Pin_13_C13: "passive", Pin_14_C14: "passive", Pin_15_C15: "passive", Pin_16_C16: "passive", Pin_17_C17: "passive", Pin_18_C18: "passive", Pin_19_C19: "passive", Pin_20_C20: "passive", Pin_21_C21: "passive", Pin_22_C22: "passive", Pin_23_C23: "passive", Pin_24_C24: "passive", Pin_25_C25: "passive", Pin_26_C26: "passive", Pin_27_C27: "passive", Pin_28_C28: "passive", Pin_29_C29: "passive", Pin_30_C30: "passive", Pin_31_C31: "passive", Pin_32_C32: "passive", Pin_33_C33: "passive", Pin_34_C34: "passive", Pin_35_C35: "passive", Pin_36_C36: "passive", Pin_37_C37: "passive", Pin_38_C38: "passive", Pin_39_C39: "passive", Pin_40_C40: "passive", Pin_1_D1: "passive", Pin_2_D2: "passive", Pin_3_D3: "passive", Pin_4_D4: "passive", Pin_5_D5: "passive", Pin_6_D6: "passive", Pin_7_D7: "passive", Pin_8_D8: "passive", Pin_9_D9: "passive", Pin_10_D10: "passive", Pin_11_D11: "passive", Pin_12_D12: "passive", Pin_13_D13: "passive", Pin_14_D14: "passive", Pin_15_D15: "passive", Pin_16_D16: "passive", Pin_17_D17: "passive", Pin_18_D18: "passive", Pin_19_D19: "passive", Pin_20_D20: "passive", Pin_21_D21: "passive", Pin_22_D22: "passive", Pin_23_D23: "passive", Pin_24_D24: "passive", Pin_25_D25: "passive", Pin_26_D26: "passive", Pin_27_D27: "passive", Pin_28_D28: "passive", Pin_29_D29: "passive", Pin_30_D30: "passive", Pin_31_D31: "passive", Pin_32_D32: "passive", Pin_33_D33: "passive", Pin_34_D34: "passive", Pin_35_D35: "passive", Pin_36_D36: "passive", Pin_37_D37: "passive", Pin_38_D38: "passive", Pin_39_D39: "passive", Pin_40_D40: "passive", Pin_1_E1: "passive", Pin_2_E2: "passive", Pin_3_E3: "passive", Pin_4_E4: "passive", Pin_5_E5: "passive", Pin_6_E6: "passive", Pin_7_E7: "passive", Pin_8_E8: "passive", Pin_9_E9: "passive", Pin_10_E10: "passive", Pin_11_E11: "passive", Pin_12_E12: "passive", Pin_13_E13: "passive", Pin_14_E14: "passive", Pin_15_E15: "passive", Pin_16_E16: "passive", Pin_17_E17: "passive", Pin_18_E18: "passive", Pin_19_E19: "passive", Pin_20_E20: "passive", Pin_21_E21: "passive", Pin_22_E22: "passive", Pin_23_E23: "passive", Pin_24_E24: "passive", Pin_25_E25: "passive", Pin_26_E26: "passive", Pin_27_E27: "passive", Pin_28_E28: "passive", Pin_29_E29: "passive", Pin_30_E30: "passive", Pin_31_E31: "passive", Pin_32_E32: "passive", Pin_33_E33: "passive", Pin_34_E34: "passive", Pin_35_E35: "passive", Pin_36_E36: "passive", Pin_37_E37: "passive", Pin_38_E38: "passive", Pin_39_E39: "passive", Pin_40_E40: "passive", Pin_1_F1: "passive", Pin_2_F2: "passive", Pin_3_F3: "passive", Pin_4_F4: "passive", Pin_5_F5: "passive", Pin_6_F6: "passive", Pin_7_F7: "passive", Pin_8_F8: "passive", Pin_9_F9: "passive", Pin_10_F10: "passive", Pin_11_F11: "passive", Pin_12_F12: "passive", Pin_13_F13: "passive", Pin_14_F14: "passive", Pin_15_F15: "passive", Pin_16_F16: "passive", Pin_17_F17: "passive", Pin_18_F18: "passive", Pin_19_F19: "passive", Pin_20_F20: "passive", Pin_21_F21: "passive", Pin_22_F22: "passive", Pin_23_F23: "passive", Pin_24_F24: "passive", Pin_25_F25: "passive", Pin_26_F26: "passive", Pin_27_F27: "passive", Pin_28_F28: "passive", Pin_29_F29: "passive", Pin_30_F30: "passive", Pin_31_F31: "passive", Pin_32_F32: "passive", Pin_33_F33: "passive", Pin_34_F34: "passive", Pin_35_F35: "passive", Pin_36_F36: "passive", Pin_37_F37: "passive", Pin_38_F38: "passive", Pin_39_F39: "passive", Pin_40_F40: "passive", Pin_1_G1: "passive", Pin_2_G2: "passive", Pin_3_G3: "passive", Pin_4_G4: "passive", Pin_5_G5: "passive", Pin_6_G6: "passive", Pin_7_G7: "passive", Pin_8_G8: "passive", Pin_9_G9: "passive", Pin_10_G10: "passive", Pin_11_G11: "passive", Pin_12_G12: "passive", Pin_13_G13: "passive", Pin_14_G14: "passive", Pin_15_G15: "passive", Pin_16_G16: "passive", Pin_17_G17: "passive", Pin_18_G18: "passive", Pin_19_G19: "passive", Pin_20_G20: "passive", Pin_21_G21: "passive", Pin_22_G22: "passive", Pin_23_G23: "passive", Pin_24_G24: "passive", Pin_25_G25: "passive", Pin_26_G26: "passive", Pin_27_G27: "passive", Pin_28_G28: "passive", Pin_29_G29: "passive", Pin_30_G30: "passive", Pin_31_G31: "passive", Pin_32_G32: "passive", Pin_33_G33: "passive", Pin_34_G34: "passive", Pin_35_G35: "passive", Pin_36_G36: "passive", Pin_37_G37: "passive", Pin_38_G38: "passive", Pin_39_G39: "passive", Pin_40_G40: "passive", Pin_1_H1: "passive", Pin_2_H2: "passive", Pin_3_H3: "passive", Pin_4_H4: "passive", Pin_5_H5: "passive", Pin_6_H6: "passive", Pin_7_H7: "passive", Pin_8_H8: "passive", Pin_9_H9: "passive", Pin_10_H10: "passive", Pin_11_H11: "passive", Pin_12_H12: "passive", Pin_13_H13: "passive", Pin_14_H14: "passive", Pin_15_H15: "passive", Pin_16_H16: "passive", Pin_17_H17: "passive", Pin_18_H18: "passive", Pin_19_H19: "passive", Pin_20_H20: "passive", Pin_21_H21: "passive", Pin_22_H22: "passive", Pin_23_H23: "passive", Pin_24_H24: "passive", Pin_25_H25: "passive", Pin_26_H26: "passive", Pin_27_H27: "passive", Pin_28_H28: "passive", Pin_29_H29: "passive", Pin_30_H30: "passive", Pin_31_H31: "passive", Pin_32_H32: "passive", Pin_33_H33: "passive", Pin_34_H34: "passive", Pin_35_H35: "passive", Pin_36_H36: "passive", Pin_37_H37: "passive", Pin_38_H38: "passive", Pin_39_H39: "passive", Pin_40_H40: "passive", Pin_1_J1: "passive", Pin_2_J2: "passive", Pin_3_J3: "passive", Pin_4_J4: "passive", Pin_5_J5: "passive", Pin_6_J6: "passive", Pin_7_J7: "passive", Pin_8_J8: "passive", Pin_9_J9: "passive", Pin_10_J10: "passive", Pin_11_J11: "passive", Pin_12_J12: "passive", Pin_13_J13: "passive", Pin_14_J14: "passive", Pin_15_J15: "passive", Pin_16_J16: "passive", Pin_17_J17: "passive", Pin_18_J18: "passive", Pin_19_J19: "passive", Pin_20_J20: "passive", Pin_21_J21: "passive", Pin_22_J22: "passive", Pin_23_J23: "passive", Pin_24_J24: "passive", Pin_25_J25: "passive", Pin_26_J26: "passive", Pin_27_J27: "passive", Pin_28_J28: "passive", Pin_29_J29: "passive", Pin_30_J30: "passive", Pin_31_J31: "passive", Pin_32_J32: "passive", Pin_33_J33: "passive", Pin_34_J34: "passive", Pin_35_J35: "passive", Pin_36_J36: "passive", Pin_37_J37: "passive", Pin_38_J38: "passive", Pin_39_J39: "passive", Pin_40_J40: "passive", Pin_1_K1: "passive", Pin_2_K2: "passive", Pin_3_K3: "passive", Pin_4_K4: "passive", Pin_5_K5: "passive", Pin_6_K6: "passive", Pin_7_K7: "passive", Pin_8_K8: "passive", Pin_9_K9: "passive", Pin_10_K10: "passive", Pin_11_K11: "passive", Pin_12_K12: "passive", Pin_13_K13: "passive", Pin_14_K14: "passive", Pin_15_K15: "passive", Pin_16_K16: "passive", Pin_17_K17: "passive", Pin_18_K18: "passive", Pin_19_K19: "passive", Pin_20_K20: "passive", Pin_21_K21: "passive", Pin_22_K22: "passive", Pin_23_K23: "passive", Pin_24_K24: "passive", Pin_25_K25: "passive", Pin_26_K26: "passive", Pin_27_K27: "passive", Pin_28_K28: "passive", Pin_29_K29: "passive", Pin_30_K30: "passive", Pin_31_K31: "passive", Pin_32_K32: "passive", Pin_33_K33: "passive", Pin_34_K34: "passive", Pin_35_K35: "passive", Pin_36_K36: "passive", Pin_37_K37: "passive", Pin_38_K38: "passive", Pin_39_K39: "passive", Pin_40_K40: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Samtec_ASP-134486-01";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x01, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x01`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x01 extends Component.withPins({
  "Pin_1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x01";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x02, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x02`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x02 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x02";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x03, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x03`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x03 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x03";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x04, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x04`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x04 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x04";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x05, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x05`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x05 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x05";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x06, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x06`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x06 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x06";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x07, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x07`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x07 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x07";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x08, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x08`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x08 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x08";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x09, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x09`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x09 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x09";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x10, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x10`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x10 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x10";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x11, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x11`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x11 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x11";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x12, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x12`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x12 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x12";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x13, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x13`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x13 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x13";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x14, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x14`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x14 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x14";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x15, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x15`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x15 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x15";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x16, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x16`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x16 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x16";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x17, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x17`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x17 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x17";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x18, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x18`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x18 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x18";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x19, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x19`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x19 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x19";
  override referencePrefix = "J";
}

/**
 * Generic screw terminal, single row, 01x20, script generated (kicad-library-utils/schlib/autogen/connector/)
 *
 * KiCad symbol: `Connector:Screw_Terminal_01x20`. Reference prefix: `J`.
 * Footprint filters: TerminalBlock*:*.
 * Keywords: screw terminal.
 */
export class Screw_Terminal_01x20 extends Component.withPins({
  "Pin_1": "1",
  "Pin_2": "2",
  "Pin_3": "3",
  "Pin_4": "4",
  "Pin_5": "5",
  "Pin_6": "6",
  "Pin_7": "7",
  "Pin_8": "8",
  "Pin_9": "9",
  "Pin_10": "10",
  "Pin_11": "11",
  "Pin_12": "12",
  "Pin_13": "13",
  "Pin_14": "14",
  "Pin_15": "15",
  "Pin_16": "16",
  "Pin_17": "17",
  "Pin_18": "18",
  "Pin_19": "19",
  "Pin_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pin_1: "passive", Pin_2: "passive", Pin_3: "passive", Pin_4: "passive", Pin_5: "passive", Pin_6: "passive", Pin_7: "passive", Pin_8: "passive", Pin_9: "passive", Pin_10: "passive", Pin_11: "passive", Pin_12: "passive", Pin_13: "passive", Pin_14: "passive", Pin_15: "passive", Pin_16: "passive", Pin_17: "passive", Pin_18: "passive", Pin_19: "passive", Pin_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:Screw_Terminal_01x20";
  override referencePrefix = "J";
}

/**
 * Tag-Connect’s 6-pins connector
 *
 * KiCad symbol: `Connector:TC2030`. Reference prefix: `J`.
 * Footprint filters: *TC2030*.
 * @see https://www.tag-connect.com/wp-content/uploads/bsk-pdf-manager/2019/12/TC2030-IDC-NL-Datasheet-Rev-B.pdf
 * Keywords: Debug plug-of-nails.
 * Default footprint: Connector:Tag-Connect_TC2030-IDC-NL_2x03_P1.27mm_Vertical.
 */
export class TC2030 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Connector:TC2030";
  override referencePrefix = "J";
}

/**
 * Tag-Connect’s 10-pins connector
 *
 * KiCad symbol: `Connector:TC2050`. Reference prefix: `J`.
 * Footprint filters: *TC2050*.
 * @see https://www.tag-connect.com/wp-content/uploads/bsk-pdf-manager/TC2050-IDC-NL_Datasheet_8.pdf
 * Keywords: Debug plug-of-nails.
 * Default footprint: Connector:Tag-Connect_TC2050-IDC-NL_2x05_P1.27mm_Vertical.
 */
export class TC2050 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Connector:TC2050";
  override referencePrefix = "J";
}

/**
 * Tag-Connect’s 14-pins connector
 *
 * KiCad symbol: `Connector:TC2070`. Reference prefix: `J`.
 * Footprint filters: *TC2070*.
 * @see https://www.tag-connect.com/wp-content/uploads/bsk-pdf-manager/TC2070-IDC-NL_Datasheet_12.pdf
 * Keywords: Debug plug-of-nails.
 * Default footprint: Connector:Tag-Connect_TC2070-IDC-FP_2x07_P1.27mm_Vertical.
 */
export class TC2070 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", ...opts.pinTypes }, properties: { ...{"exclude_from_bom":null}, ...opts.properties } });
  }
  override schema = "Connector:TC2070";
  override referencePrefix = "J";
}

/**
 * test point
 *
 * KiCad symbol: `Connector:TestPoint`. Reference prefix: `TP`.
 * Footprint filters: Pin*, Test*.
 * Keywords: test point tp.
 */
export class TestPoint extends Component.withPins({
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:TestPoint";
  override referencePrefix = "TP";
}

/**
 * 2-polar test point
 *
 * KiCad symbol: `Connector:TestPoint_2Pole`. Reference prefix: `TP`.
 * Footprint filters: Pin*, Test*.
 * Keywords: point tp.
 */
export class TestPoint_2Pole extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:TestPoint_2Pole";
  override referencePrefix = "TP";
}

/**
 * test point (alternative shape)
 *
 * KiCad symbol: `Connector:TestPoint_Alt`. Reference prefix: `TP`.
 * Footprint filters: Pin*, Test*.
 * Keywords: test point tp.
 */
export class TestPoint_Alt extends Component.withPins({
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:TestPoint_Alt";
  override referencePrefix = "TP";
}

/**
 * test point (alternative flag-style design)
 *
 * KiCad symbol: `Connector:TestPoint_Flag`. Reference prefix: `TP`.
 * Footprint filters: Pin*, Test*.
 * Keywords: test point tp.
 */
export class TestPoint_Flag extends Component.withPins({
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:TestPoint_Flag";
  override referencePrefix = "TP";
}

/**
 * test point (alternative probe-style design)
 *
 * KiCad symbol: `Connector:TestPoint_Probe`. Reference prefix: `TP`.
 * Footprint filters: Pin*, Test*.
 * Keywords: test point tp.
 */
export class TestPoint_Probe extends Component.withPins({
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:TestPoint_Probe";
  override referencePrefix = "TP";
}

/**
 * test point
 *
 * KiCad symbol: `Connector:TestPoint_Small`. Reference prefix: `TP`.
 * Footprint filters: Pin*, Test*.
 * Keywords: test point tp.
 */
export class TestPoint_Small extends Component.withPins({
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:TestPoint_Small";
  override referencePrefix = "TP";
}

/**
 * test point
 *
 * KiCad symbol: `Connector:TestPoint_Square`. Reference prefix: `TP`.
 * Footprint filters: Pin*, Test*.
 * @see ~
 * Keywords: test point tp.
 */
export class TestPoint_Square extends Component.withPins({
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:TestPoint_Square";
  override referencePrefix = "TP";
}

/**
 * Universal EXTension (UEXT) is a connector layout which includes power and three serial buses: Asynchronous, I2C, and SPI
 *
 * KiCad symbol: `Connector:UEXT_Host`. Reference prefix: `J`.
 * Footprint filters: *Connector*:2x05*.
 * @see https://www.olimex.com/Products/Modules/UEXT/resources/UEXT_rev_B.pdf
 * Keywords: UEXT, SPI, UART, I2C.
 */
export class UEXT_Host extends Component.withPins({
  "3V3": "1",
  "GND": "2",
  "TXD": "3",
  "RXD": "4",
  "SCL": "5",
  "SDA": "6",
  "MISO": "7",
  "MOSI": "8",
  "SCK": "9",
  "~{SSEL}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "3V3": "power_in", GND: "power_in", TXD: "output", RXD: "input", SCL: "output", SDA: "bidirectional", MISO: "output", MOSI: "input", SCK: "output", "~{SSEL}": "output", ...opts.pinTypes } });
  }
  override schema = "Connector:UEXT_Host";
  override referencePrefix = "J";
}

/**
 * Universal EXTension (UEXT) is a connector layout which includes power and three serial buses: Asynchronous, I2C, and SPI
 *
 * KiCad symbol: `Connector:UEXT_Slave`. Reference prefix: `J`.
 * Footprint filters: *Connector*:2x05*.
 * @see https://www.olimex.com/Products/Modules/UEXT/resources/UEXT_rev_B.pdf
 * Keywords: UEXT, SPI, UART, I2C.
 */
export class UEXT_Slave extends Component.withPins({
  "3V3": "1",
  "GND": "2",
  "TXD": "3",
  "RXD": "4",
  "SCL": "5",
  "SDA": "6",
  "MISO": "7",
  "MOSI": "8",
  "SCK": "9",
  "~{SSEL}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "3V3": "power_out", GND: "power_in", TXD: "input", RXD: "output", SCL: "input", SDA: "bidirectional", MISO: "input", MOSI: "output", SCK: "input", "~{SSEL}": "input", ...opts.pinTypes } });
  }
  override schema = "Connector:UEXT_Slave";
  override referencePrefix = "J";
}

/**
 * USB 3.0 A connector
 *
 * KiCad symbol: `Connector:USB3_A`. Reference prefix: `J`.
 * Footprint filters: USB3*.
 * Keywords: usb universal serial bus.
 */
export class USB3_A extends Component.withPins({
  "VBUS": "1",
  "D-": "2",
  "D+": "3",
  "GND": "4",
  "SSRX-": "5",
  "SSRX+": "6",
  "DRAIN": "7",
  "SSTX-": "8",
  "SSTX+": "9",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "power_in", "D-": "bidirectional", "D+": "bidirectional", GND: "power_in", "SSRX-": "output", "SSRX+": "output", DRAIN: "passive", "SSTX-": "input", "SSTX+": "input", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB3_A";
  override referencePrefix = "J";
}

/**
 * USB 3.0 A connector, stacked
 *
 * KiCad symbol: `Connector:USB3_A_Stacked`. Reference prefix: `J`.
 * Footprint filters: USB3?A*Stacked*.
 * Keywords: usb universal serial bus.
 */
export class USB3_A_Stacked extends Component.withPins({
  "SHIELD": "SH",
  "VBUS1": "1",
  "D1-": "2",
  "D1+": "3",
  "GND1": "4",
  "SSRX1-": "5",
  "SSRX1+": "6",
  "DRAIN1": "7",
  "SSTX1-": "8",
  "SSTX1+": "9",
  "VBUS2": "10",
  "D2-": "11",
  "D2+": "12",
  "GND2": "13",
  "SSRX2-": "14",
  "SSRX2+": "15",
  "DRAIN2": "16",
  "SSTX2-": "17",
  "SSTX2+": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SHIELD: "passive", VBUS1: "power_in", "D1-": "bidirectional", "D1+": "bidirectional", GND1: "power_in", "SSRX1-": "output", "SSRX1+": "output", DRAIN1: "passive", "SSTX1-": "input", "SSTX1+": "input", VBUS2: "power_in", "D2-": "bidirectional", "D2+": "bidirectional", GND2: "power_in", "SSRX2-": "output", "SSRX2+": "output", DRAIN2: "passive", "SSTX2-": "input", "SSTX2+": "input", ...opts.pinTypes } });
  }
  override schema = "Connector:USB3_A_Stacked";
  override referencePrefix = "J";
}

/**
 * USB 3.0 B connector
 *
 * KiCad symbol: `Connector:USB3_B`. Reference prefix: `J`.
 * Keywords: usb universal serial bus.
 */
export class USB3_B extends Component.withPins({
  "VBUS": "1",
  "D-": "2",
  "D+": "3",
  "GND": "4",
  "SSTX-": "5",
  "SSTX+": "6",
  "DRAIN": "7",
  "SSRX-": "8",
  "SSRX+": "9",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "power_out", "D-": "bidirectional", "D+": "bidirectional", GND: "power_out", "SSTX-": "output", "SSTX+": "output", DRAIN: "passive", "SSRX-": "input", "SSRX+": "input", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB3_B";
  override referencePrefix = "J";
}

/**
 * USB 3.0 Micro-B connector
 *
 * KiCad symbol: `Connector:USB3_B_Micro`. Reference prefix: `J`.
 * Keywords: usb universal serial bus.
 */
export class USB3_B_Micro extends Component.withPins({
  "VBUS": "1",
  "D-": "2",
  "D+": "3",
  "ID": "4",
  "GND": "5",
  "SSTX-": "6",
  "SSTX+": "7",
  "DRAIN": "8",
  "SSRX-": "9",
  "SSRX+": "10",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "power_out", "D-": "bidirectional", "D+": "bidirectional", ID: "passive", GND: "power_out", "SSTX-": "output", "SSTX+": "output", DRAIN: "passive", "SSRX-": "input", "SSRX+": "input", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB3_B_Micro";
  override referencePrefix = "J";
}

/**
 * USB Type A connector
 *
 * KiCad symbol: `Connector:USB_A`. Reference prefix: `J`.
 * Footprint filters: USB*.
 * Keywords: connector USB.
 */
export class USB_A extends Component.withPins({
  "VBUS": "1",
  "D-": "2",
  "D+": "3",
  "GND": "4",
  "Shield": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "power_in", "D-": "bidirectional", "D+": "bidirectional", GND: "power_in", Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_A";
  override referencePrefix = "J";
}

/**
 * USB Type A connector, stacked
 *
 * KiCad symbol: `Connector:USB_A_Stacked`. Reference prefix: `J`.
 * Footprint filters: USB*.
 * Keywords: connector USB.
 */
export class USB_A_Stacked extends Component.withPins({
  "VBUS1": "1",
  "D1-": "2",
  "D1+": "3",
  "GND1": "4",
  "VBUS2": "5",
  "D2-": "6",
  "D2+": "7",
  "GND2": "8",
  "Shield": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS1: "power_in", "D1-": "bidirectional", "D1+": "bidirectional", GND1: "power_in", VBUS2: "power_in", "D2-": "bidirectional", "D2+": "bidirectional", GND2: "power_in", Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_A_Stacked";
  override referencePrefix = "J";
}

/**
 * USB Type B connector
 *
 * KiCad symbol: `Connector:USB_B`. Reference prefix: `J`.
 * Footprint filters: USB*.
 * Keywords: connector USB.
 */
export class USB_B extends Component.withPins({
  "VBUS": "1",
  "D-": "2",
  "D+": "3",
  "GND": "4",
  "Shield": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "power_out", "D-": "bidirectional", "D+": "bidirectional", GND: "power_out", Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_B";
  override referencePrefix = "J";
}

/**
 * USB Micro Type B connector
 *
 * KiCad symbol: `Connector:USB_B_Micro`. Reference prefix: `J`.
 * Footprint filters: USB*Micro*B*.
 * Keywords: connector USB micro.
 */
export class USB_B_Micro extends Component.withPins({
  "VBUS": "1",
  "D-": "2",
  "D+": "3",
  "ID": "4",
  "GND": "5",
  "Shield": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "power_out", "D-": "bidirectional", "D+": "bidirectional", ID: "passive", GND: "power_out", Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_B_Micro";
  override referencePrefix = "J";
}

/**
 * USB Mini Type B connector
 *
 * KiCad symbol: `Connector:USB_B_Mini`. Reference prefix: `J`.
 * Footprint filters: USB*Mini*B*.
 * Keywords: connector USB mini.
 */
export class USB_B_Mini extends Component.withPins({
  "VBUS": "1",
  "D-": "2",
  "D+": "3",
  "ID": "4",
  "GND": "5",
  "Shield": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "power_out", "D-": "bidirectional", "D+": "bidirectional", ID: "passive", GND: "power_out", Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_B_Mini";
  override referencePrefix = "J";
}

/**
 * USB Type-C Plug connector
 *
 * KiCad symbol: `Connector:USB_C_Plug`. Reference prefix: `P`.
 * Footprint filters: USB*C*Plug*.
 * @see https://www.usb.org/sites/default/files/documents/usb_type-c.zip
 * Keywords: usb universal serial bus.
 */
export class USB_C_Plug extends Component.withPins({
  "GND_A1": "A1",
  "TX1+": "A2",
  "TX1-": "A3",
  "VBUS_A4": "A4",
  "CC": "A5",
  "D+": "A6",
  "D-": "A7",
  "SBU1": "A8",
  "VBUS_A9": "A9",
  "RX2-": "A10",
  "RX2+": "A11",
  "GND_A12": "A12",
  "GND_B1": "B1",
  "TX2+": "B2",
  "TX2-": "B3",
  "VBUS_B4": "B4",
  "VCONN": "B5",
  "SBU2": "B8",
  "VBUS_B9": "B9",
  "RX1-": "B10",
  "RX1+": "B11",
  "GND_B12": "B12",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", "TX1+": "bidirectional", "TX1-": "bidirectional", VBUS_A4: "passive", CC: "bidirectional", "D+": "bidirectional", "D-": "bidirectional", SBU1: "bidirectional", VBUS_A9: "passive", "RX2-": "bidirectional", "RX2+": "bidirectional", GND_A12: "passive", GND_B1: "passive", "TX2+": "bidirectional", "TX2-": "bidirectional", VBUS_B4: "passive", VCONN: "bidirectional", SBU2: "bidirectional", VBUS_B9: "passive", "RX1-": "bidirectional", "RX1+": "bidirectional", GND_B12: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_C_Plug";
  override referencePrefix = "P";
}

/**
 * USB 2.0-only Type-C Plug connector
 *
 * KiCad symbol: `Connector:USB_C_Plug_USB2.0`. Reference prefix: `P`.
 * Footprint filters: USB*C*Plug*.
 * @see https://www.usb.org/sites/default/files/documents/usb_type-c.zip
 * Keywords: usb universal serial bus type-C USB2.0.
 */
export class USB_C_Plug_USB2_0 extends Component.withPins({
  "GND_A1": "A1",
  "VBUS_A4": "A4",
  "CC": "A5",
  "D+": "A6",
  "D-": "A7",
  "VBUS_A9": "A9",
  "GND_A12": "A12",
  "GND_B1": "B1",
  "VBUS_B4": "B4",
  "VCONN": "B5",
  "VBUS_B9": "B9",
  "GND_B12": "B12",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", VBUS_A4: "passive", CC: "bidirectional", "D+": "bidirectional", "D-": "bidirectional", VBUS_A9: "passive", GND_A12: "passive", GND_B1: "passive", VBUS_B4: "passive", VCONN: "bidirectional", VBUS_B9: "passive", GND_B12: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_C_Plug_USB2.0";
  override referencePrefix = "P";
}

/**
 * USB Full-Featured Type-C Receptacle connector
 *
 * KiCad symbol: `Connector:USB_C_Receptacle`. Reference prefix: `J`.
 * Footprint filters: USB*C*Receptacle*.
 * @see https://www.usb.org/sites/default/files/documents/usb_type-c.zip
 * Keywords: usb universal serial bus type-C full-featured.
 */
export class USB_C_Receptacle extends Component.withPins({
  "GND_A1": "A1",
  "TX1+": "A2",
  "TX1-": "A3",
  "VBUS_A4": "A4",
  "CC1": "A5",
  "D+_A6": "A6",
  "D-_A7": "A7",
  "SBU1": "A8",
  "VBUS_A9": "A9",
  "RX2-": "A10",
  "RX2+": "A11",
  "GND_A12": "A12",
  "GND_B1": "B1",
  "TX2+": "B2",
  "TX2-": "B3",
  "VBUS_B4": "B4",
  "CC2": "B5",
  "D+_B6": "B6",
  "D-_B7": "B7",
  "SBU2": "B8",
  "VBUS_B9": "B9",
  "RX1-": "B10",
  "RX1+": "B11",
  "GND_B12": "B12",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", "TX1+": "bidirectional", "TX1-": "bidirectional", VBUS_A4: "passive", CC1: "bidirectional", "D+_A6": "bidirectional", "D-_A7": "bidirectional", SBU1: "bidirectional", VBUS_A9: "passive", "RX2-": "bidirectional", "RX2+": "bidirectional", GND_A12: "passive", GND_B1: "passive", "TX2+": "bidirectional", "TX2-": "bidirectional", VBUS_B4: "passive", CC2: "bidirectional", "D+_B6": "bidirectional", "D-_B7": "bidirectional", SBU2: "bidirectional", VBUS_B9: "passive", "RX1-": "bidirectional", "RX1+": "bidirectional", GND_B12: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_C_Receptacle";
  override referencePrefix = "J";
}

/**
 * USB Power-Only 24P Type-C Receptacle connector
 *
 * KiCad symbol: `Connector:USB_C_Receptacle_PowerOnly_24P`. Reference prefix: `J`.
 * Footprint filters: USB*C*Receptacle*.
 * @see https://www.usb.org/sites/default/files/documents/usb_type-c.zip
 * Keywords: usb universal serial bus type-C power-only charging-only 24P 24C.
 */
export class USB_C_Receptacle_PowerOnly_24P extends Component.withPins({
  "GND_A1": "A1",
  "VBUS_A4": "A4",
  "CC1": "A5",
  "VBUS_A9": "A9",
  "GND_A12": "A12",
  "GND_B1": "B1",
  "VBUS_B4": "B4",
  "CC2": "B5",
  "VBUS_B9": "B9",
  "GND_B12": "B12",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", VBUS_A4: "passive", CC1: "bidirectional", VBUS_A9: "power_in", GND_A12: "power_in", GND_B1: "passive", VBUS_B4: "passive", CC2: "bidirectional", VBUS_B9: "passive", GND_B12: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_C_Receptacle_PowerOnly_24P";
  override referencePrefix = "J";
}

/**
 * USB Power-Only 6P Type-C Receptacle connector
 *
 * KiCad symbol: `Connector:USB_C_Receptacle_PowerOnly_6P`. Reference prefix: `J`.
 * Footprint filters: USB*C*Receptacle*.
 * @see https://www.usb.org/sites/default/files/documents/usb_type-c.zip
 * Keywords: usb universal serial bus type-C power-only charging-only 6P 6C.
 */
export class USB_C_Receptacle_PowerOnly_6P extends Component.withPins({
  "CC1": "A5",
  "VBUS_A9": "A9",
  "GND_A12": "A12",
  "CC2": "B5",
  "VBUS_B9": "B9",
  "GND_B12": "B12",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CC1: "bidirectional", VBUS_A9: "passive", GND_A12: "passive", CC2: "bidirectional", VBUS_B9: "passive", GND_B12: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_C_Receptacle_PowerOnly_6P";
  override referencePrefix = "J";
}

/**
 * USB 2.0-only 14P Type-C Receptacle connector
 *
 * KiCad symbol: `Connector:USB_C_Receptacle_USB2.0_14P`. Reference prefix: `J`.
 * Footprint filters: USB*C*Receptacle*.
 * @see https://www.usb.org/sites/default/files/documents/usb_type-c.zip
 * Keywords: usb universal serial bus type-C USB2.0.
 */
export class USB_C_Receptacle_USB2_0_14P extends Component.withPins({
  "GND_A1": "A1",
  "VBUS_A4": "A4",
  "CC1": "A5",
  "D+_A6": "A6",
  "D-_A7": "A7",
  "VBUS_A9": "A9",
  "GND_A12": "A12",
  "GND_B1": "B1",
  "VBUS_B4": "B4",
  "CC2": "B5",
  "D+_B6": "B6",
  "D-_B7": "B7",
  "VBUS_B9": "B9",
  "GND_B12": "B12",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", VBUS_A4: "passive", CC1: "bidirectional", "D+_A6": "bidirectional", "D-_A7": "bidirectional", VBUS_A9: "passive", GND_A12: "passive", GND_B1: "passive", VBUS_B4: "passive", CC2: "bidirectional", "D+_B6": "bidirectional", "D-_B7": "bidirectional", VBUS_B9: "passive", GND_B12: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_C_Receptacle_USB2.0_14P";
  override referencePrefix = "J";
}

/**
 * USB 2.0-only 16P Type-C Receptacle connector
 *
 * KiCad symbol: `Connector:USB_C_Receptacle_USB2.0_16P`. Reference prefix: `J`.
 * Footprint filters: USB*C*Receptacle*.
 * @see https://www.usb.org/sites/default/files/documents/usb_type-c.zip
 * Keywords: usb universal serial bus type-C USB2.0.
 */
export class USB_C_Receptacle_USB2_0_16P extends Component.withPins({
  "GND_A1": "A1",
  "VBUS_A4": "A4",
  "CC1": "A5",
  "D+_A6": "A6",
  "D-_A7": "A7",
  "SBU1": "A8",
  "VBUS_A9": "A9",
  "GND_A12": "A12",
  "GND_B1": "B1",
  "VBUS_B4": "B4",
  "CC2": "B5",
  "D+_B6": "B6",
  "D-_B7": "B7",
  "SBU2": "B8",
  "VBUS_B9": "B9",
  "GND_B12": "B12",
  "SHIELD": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", VBUS_A4: "passive", CC1: "bidirectional", "D+_A6": "bidirectional", "D-_A7": "bidirectional", SBU1: "bidirectional", VBUS_A9: "passive", GND_A12: "passive", GND_B1: "passive", VBUS_B4: "passive", CC2: "bidirectional", "D+_B6": "bidirectional", "D-_B7": "bidirectional", SBU2: "bidirectional", VBUS_B9: "passive", GND_B12: "passive", SHIELD: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_C_Receptacle_USB2.0_16P";
  override referencePrefix = "J";
}

/**
 * USB mini/micro connector
 *
 * KiCad symbol: `Connector:USB_OTG`. Reference prefix: `J`.
 * Footprint filters: USB*.
 * Keywords: connector USB.
 */
export class USB_OTG extends Component.withPins({
  "VBUS": "1",
  "D-": "2",
  "D+": "3",
  "ID": "4",
  "GND": "5",
  "Shield": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBUS: "passive", "D-": "bidirectional", "D+": "bidirectional", ID: "passive", GND: "passive", Shield: "passive", ...opts.pinTypes } });
  }
  override schema = "Connector:USB_OTG";
  override referencePrefix = "J";
}
