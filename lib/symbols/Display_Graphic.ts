// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Graphics Display 128x64px,  8b parallel, 1/64 Duty, 3.3V or 5V VDD
 *
 * KiCad symbol: `Display_Graphic:AG12864E`. Reference prefix: `DS`.
 * Footprint filters: *AG12864E*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/1121/AG-12864E-pdf.php
 * Keywords: display LCD graphic.
 * Default footprint: Display:AG12864E.
 */
export class AG12864E extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "VO": "3",
  "DB0": "4",
  "DB1": "5",
  "DB2": "6",
  "DB3": "7",
  "DB4": "8",
  "DB5": "9",
  "DB6": "10",
  "DB7": "11",
  "~{CS1}": "12",
  "~{CS2}": "13",
  "~{RST}": "14",
  "R/~{W}": "15",
  "D/~{I}": "16",
  "E": "17",
  "VEE": "18",
  "LEDA/EL": "19",
  "LEDK/EL": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", VO: "passive", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", "~{CS1}": "input", "~{CS2}": "input", "~{RST}": "input", "R/~{W}": "input", "D/~{I}": "input", E: "input", VEE: "passive", "LEDA/EL": "passive", "LEDK/EL": "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:AG12864E";
  override referencePrefix = "DS";
}

/**
 * EA DOGL128X-6 Graphical Display 128x64 optional backlight SPI 3.0-3.3V
 *
 * KiCad symbol: `Display_Graphic:EA_DOGL128X-6`. Reference prefix: `U`.
 * Footprint filters: EA*DOGL128*6*.
 * @see https://www.lcd-module.com/eng/pdf/grafik/dogl128-6e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_DOGL128-6.
 */
export class EA_DOGL128X_6 extends Component.withPins({
  "A1+": "1",
  "A2+": "2",
  "A3+": "3",
  "C1-": "18",
  "C2-": "19",
  "C3-": "20",
  "V0": "21",
  "V1": "22",
  "V2": "23",
  "V3": "24",
  "V4": "25",
  "VSS_26": "26",
  "CAP2N": "27",
  "CAP2P": "28",
  "CAP1P": "29",
  "CAP1N": "30",
  "CAP3P": "31",
  "VOUT": "32",
  "VSS_33": "33",
  "VDD2": "34",
  "VDD": "35",
  "SI": "36",
  "SCL": "37",
  "A0": "38",
  "~{RST}": "39",
  "~{CS1B}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "A1+": "power_in", "A2+": "power_in", "A3+": "power_in", "C1-": "power_in", "C2-": "power_in", "C3-": "power_in", V0: "passive", V1: "passive", V2: "passive", V3: "passive", V4: "passive", VSS_26: "power_in", CAP2N: "passive", CAP2P: "passive", CAP1P: "passive", CAP1N: "passive", CAP3P: "passive", VOUT: "output", VSS_33: "passive", VDD2: "power_in", VDD: "power_in", SI: "input", SCL: "input", A0: "input", "~{RST}": "input", "~{CS1B}": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_DOGL128X-6";
  override referencePrefix = "U";
}

/**
 * EA DOGM128X-6 Graphical Display 128x64 optional backlight SPI 3.0-3.3V
 *
 * KiCad symbol: `Display_Graphic:EA_DOGM128X-6`. Reference prefix: `U`.
 * Footprint filters: EA*DOGM128*6*.
 * @see https://www.lcd-module.de/eng/pdf/grafik/dogm128e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_DOGM128-6.
 */
export class EA_DOGM128X_6 extends Component.withPins({
  "A1+": "1",
  "A2+": "2",
  "A3+": "3",
  "C1-": "18",
  "C2-": "19",
  "C3-": "20",
  "V0": "21",
  "V1": "22",
  "V2": "23",
  "V3": "24",
  "V4": "25",
  "VSS_26": "26",
  "CAP2N": "27",
  "CAP2P": "28",
  "CAP1P": "29",
  "CAP1N": "30",
  "CAP3P": "31",
  "VOUT": "32",
  "VSS_33": "33",
  "VDD2": "34",
  "VDD": "35",
  "SI": "36",
  "SCL": "37",
  "A0": "38",
  "~{RST}": "39",
  "~{CS1B}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "A1+": "power_in", "A2+": "power_in", "A3+": "power_in", "C1-": "power_in", "C2-": "power_in", "C3-": "power_in", V0: "passive", V1: "passive", V2: "passive", V3: "passive", V4: "passive", VSS_26: "power_in", CAP2N: "passive", CAP2P: "passive", CAP1P: "passive", CAP1N: "passive", CAP3P: "passive", VOUT: "output", VSS_33: "passive", VDD2: "power_in", VDD: "power_in", SI: "input", SCL: "input", A0: "input", "~{RST}": "input", "~{CS1B}": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_DOGM128X-6";
  override referencePrefix = "U";
}

/**
 * LCD 4x10 character display blue transmissive background, +3.3V VDD, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_DOGS104B-A`. Reference prefix: `U`.
 * Footprint filters: *EA*DOGS104*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/doma/dogs104e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_DOGS104X-A.
 */
export class EA_DOGS104B_A extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_9": "9",
  "NC_10": "10",
  "VOUT": "11",
  "IM1": "12",
  "VDD": "13",
  "VSS": "14",
  "SOD": "15",
  "SID": "16",
  "SCLK": "17",
  "~{CS}": "18",
  "SA0": "19",
  "~{RST}": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VOUT: "output", IM1: "input", VDD: "power_in", VSS: "power_in", SOD: "output", SID: "input", SCLK: "input", "~{CS}": "input", SA0: "input", "~{RST}": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_DOGS104B-A";
  override referencePrefix = "U";
}

/**
 * EA DOGXL160-7 Graphical Display 160x104 no back light I2C SPI 2.7-3.3V
 *
 * KiCad symbol: `Display_Graphic:EA_DOGXL160-7`. Reference prefix: `U`.
 * Footprint filters: EA*DOGXL160*7*.
 * @see http://www.lcd-module.com/eng/pdf/grafik/dogxl160-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_DOGXL160-7.
 */
export class EA_DOGXL160_7 extends Component.withPins({
  "A1+": "1",
  "A2+": "2",
  "A3+": "3",
  "C1-": "14",
  "C2-": "15",
  "C3-": "16",
  "VLCD": "17",
  "VB0+": "18",
  "VB1+": "19",
  "VB1-": "20",
  "VB0-": "21",
  "VDD": "22",
  "VDD2/3": "23",
  "VSS2": "24",
  "VSS": "25",
  "BM0": "26",
  "CD": "27",
  "~{CS0}/A2": "28",
  "~{RST}": "29",
  "D6": "30",
  "D3/SDA": "31",
  "D0/SCK": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "A1+": "power_in", "A2+": "power_in", "A3+": "power_in", "C1-": "power_in", "C2-": "power_in", "C3-": "power_in", VLCD: "passive", "VB0+": "passive", "VB1+": "passive", "VB1-": "passive", "VB0-": "passive", VDD: "power_in", "VDD2/3": "power_in", VSS2: "power_in", VSS: "power_in", BM0: "input", CD: "input", "~{CS0}/A2": "input", "~{RST}": "input", D6: "input", "D3/SDA": "bidirectional", "D0/SCK": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_DOGXL160-7";
  override referencePrefix = "U";
}

/**
 * LCD-graphical display with LED backlight blue negative, 3.3V - 5V VDD, RS-232. I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP128B-6LW`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP128B*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip128-6e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA-eDIP128B-XXX.
 */
export class EA_eDIP128B_6LW extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "PWR": "18",
  "NC_19": "19",
  "GND_21": "21",
  "VDD_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "IN8/OUT1": "25",
  "IN7/OUT2": "26",
  "IN6/OUT3": "27",
  "IN5/OUT4": "28",
  "IN4/OUT5": "29",
  "IN3/OUT6": "30",
  "IN2/OUT7": "31",
  "IN1/OUT8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", PWR: "output", NC_19: "no_connect", GND_21: "power_in", VDD_22: "power_in", NC_23: "no_connect", NC_24: "no_connect", "IN8/OUT1": "bidirectional", "IN7/OUT2": "bidirectional", "IN6/OUT3": "bidirectional", "IN5/OUT4": "bidirectional", "IN4/OUT5": "bidirectional", "IN3/OUT6": "bidirectional", "IN2/OUT7": "bidirectional", "IN1/OUT8": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP128B-6LW";
  override referencePrefix = "U";
}

/**
 * LCD-graphical display with LED backlight and touch panel blue negative, 3.3V - 5V VDD, RS-232. I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP128B-6LWTP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP128B*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip128-6e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA-eDIP128B-XXX.
 */
export class EA_eDIP128B_6LWTP extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "PWR": "18",
  "NC_19": "19",
  "GND_21": "21",
  "VDD_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "IN8/OUT1": "25",
  "IN7/OUT2": "26",
  "IN6/OUT3": "27",
  "IN5/OUT4": "28",
  "IN4/OUT5": "29",
  "IN3/OUT6": "30",
  "IN2/OUT7": "31",
  "IN1/OUT8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", PWR: "output", NC_19: "no_connect", GND_21: "power_in", VDD_22: "power_in", NC_23: "no_connect", NC_24: "no_connect", "IN8/OUT1": "bidirectional", "IN7/OUT2": "bidirectional", "IN6/OUT3": "bidirectional", "IN5/OUT4": "bidirectional", "IN4/OUT5": "bidirectional", "IN3/OUT6": "bidirectional", "IN2/OUT7": "bidirectional", "IN1/OUT8": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP128B-6LWTP";
  override referencePrefix = "U";
}

/**
 * LCD-graphical display with LED backlight positive mode FSTN, 3.3V - 5V VDD, RS-232. I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP128W-6LW`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP128B*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip128-6e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA-eDIP128B-XXX.
 */
export class EA_eDIP128W_6LW extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "PWR": "18",
  "NC_19": "19",
  "GND_21": "21",
  "VDD_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "IN8/OUT1": "25",
  "IN7/OUT2": "26",
  "IN6/OUT3": "27",
  "IN5/OUT4": "28",
  "IN4/OUT5": "29",
  "IN3/OUT6": "30",
  "IN2/OUT7": "31",
  "IN1/OUT8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", PWR: "output", NC_19: "no_connect", GND_21: "power_in", VDD_22: "power_in", NC_23: "no_connect", NC_24: "no_connect", "IN8/OUT1": "bidirectional", "IN7/OUT2": "bidirectional", "IN6/OUT3": "bidirectional", "IN5/OUT4": "bidirectional", "IN4/OUT5": "bidirectional", "IN3/OUT6": "bidirectional", "IN2/OUT7": "bidirectional", "IN1/OUT8": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP128W-6LW";
  override referencePrefix = "U";
}

/**
 * LCD-graphical display with LED backlight and touch panel positive mode FSTN, 3.3V - 5V VDD, RS-232. I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP128W-6LWTP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP128B*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip128-6e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA-eDIP128B-XXX.
 */
export class EA_eDIP128W_6LWTP extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "PWR": "18",
  "NC_19": "19",
  "GND_21": "21",
  "VDD_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "IN8/OUT1": "25",
  "IN7/OUT2": "26",
  "IN6/OUT3": "27",
  "IN5/OUT4": "28",
  "IN4/OUT5": "29",
  "IN3/OUT6": "30",
  "IN2/OUT7": "31",
  "IN1/OUT8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", PWR: "output", NC_19: "no_connect", GND_21: "power_in", VDD_22: "power_in", NC_23: "no_connect", NC_24: "no_connect", "IN8/OUT1": "bidirectional", "IN7/OUT2": "bidirectional", "IN6/OUT3": "bidirectional", "IN5/OUT4": "bidirectional", "IN4/OUT5": "bidirectional", "IN3/OUT6": "bidirectional", "IN2/OUT7": "bidirectional", "IN1/OUT8": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP128W-6LWTP";
  override referencePrefix = "U";
}

/**
 * LCD-graphical display 160x104 with LED backlight, blue negative, 3.3V - 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP160B-7LW`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP160*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip160-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP160-XXX.
 */
export class EA_eDIP160B_7LW extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "PWR": "18",
  "NC_19": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "IN8/OUT1": "25",
  "IN7/OUT2": "26",
  "IN6/OUT3": "27",
  "IN5/OUT4": "28",
  "IN4/OUT5": "29",
  "IN3/OUT6": "30",
  "IN2/OUT7": "31",
  "IN1/OUT8": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", PWR: "output", NC_19: "no_connect", TEST_SBUF: "open_collector", GND_21: "power_in", VDD_22: "power_in", NC_23: "no_connect", NC_24: "no_connect", "IN8/OUT1": "bidirectional", "IN7/OUT2": "bidirectional", "IN6/OUT3": "bidirectional", "IN5/OUT4": "bidirectional", "IN4/OUT5": "bidirectional", "IN3/OUT6": "bidirectional", "IN2/OUT7": "bidirectional", "IN1/OUT8": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP160B-7LW";
  override referencePrefix = "U";
}

/**
 * LCD-graphical display 160x104 with LED backlight and touch panel, blue negative, 3.3V - 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP160B-7LWTP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP160*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip160-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP160-XXX.
 */
export class EA_eDIP160B_7LWTP extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "PWR": "18",
  "NC_19": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "IN8/OUT1": "25",
  "IN7/OUT2": "26",
  "IN6/OUT3": "27",
  "IN5/OUT4": "28",
  "IN4/OUT5": "29",
  "IN3/OUT6": "30",
  "IN2/OUT7": "31",
  "IN1/OUT8": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", PWR: "output", NC_19: "no_connect", TEST_SBUF: "open_collector", GND_21: "power_in", VDD_22: "power_in", NC_23: "no_connect", NC_24: "no_connect", "IN8/OUT1": "bidirectional", "IN7/OUT2": "bidirectional", "IN6/OUT3": "bidirectional", "IN5/OUT4": "bidirectional", "IN4/OUT5": "bidirectional", "IN3/OUT6": "bidirectional", "IN2/OUT7": "bidirectional", "IN1/OUT8": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP160B-7LWTP";
  override referencePrefix = "U";
}

/**
 * LCD-graphical display 160x104 with LED backlight, positive mode FSTN, 3.3V - 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP160W-7LW`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP160*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip160-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP160-XXX.
 */
export class EA_eDIP160W_7LW extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "PWR": "18",
  "NC_19": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "IN8/OUT1": "25",
  "IN7/OUT2": "26",
  "IN6/OUT3": "27",
  "IN5/OUT4": "28",
  "IN4/OUT5": "29",
  "IN3/OUT6": "30",
  "IN2/OUT7": "31",
  "IN1/OUT8": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", PWR: "output", NC_19: "no_connect", TEST_SBUF: "open_collector", GND_21: "power_in", VDD_22: "power_in", NC_23: "no_connect", NC_24: "no_connect", "IN8/OUT1": "bidirectional", "IN7/OUT2": "bidirectional", "IN6/OUT3": "bidirectional", "IN5/OUT4": "bidirectional", "IN4/OUT5": "bidirectional", "IN3/OUT6": "bidirectional", "IN2/OUT7": "bidirectional", "IN1/OUT8": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP160W-7LW";
  override referencePrefix = "U";
}

/**
 * LCD-graphical display 160x104 with LED backlight and touch panel, positive mode FSTN, 3.3V - 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP160W-7LWTP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP160*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip160-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP160-XXX.
 */
export class EA_eDIP160W_7LWTP extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "PWR": "18",
  "NC_19": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "IN8/OUT1": "25",
  "IN7/OUT2": "26",
  "IN6/OUT3": "27",
  "IN5/OUT4": "28",
  "IN4/OUT5": "29",
  "IN3/OUT6": "30",
  "IN2/OUT7": "31",
  "IN1/OUT8": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", PWR: "output", NC_19: "no_connect", TEST_SBUF: "open_collector", GND_21: "power_in", VDD_22: "power_in", NC_23: "no_connect", NC_24: "no_connect", "IN8/OUT1": "bidirectional", "IN7/OUT2": "bidirectional", "IN6/OUT3": "bidirectional", "IN5/OUT4": "bidirectional", "IN4/OUT5": "bidirectional", "IN3/OUT6": "bidirectional", "IN2/OUT7": "bidirectional", "IN1/OUT8": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP160W-7LWTP";
  override referencePrefix = "U";
}

/**
 * LCD graphical display with white LED background blue negative, 240x128, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP240B-7LW`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP240*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip240-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP240-XXX.
 */
export class EA_eDIP240B_7LW extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "EEP_SDA": "17",
  "EEP_SCL": "18",
  "EEP_WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", EEP_SDA: "bidirectional", EEP_SCL: "output", EEP_WP: "input", TEST_SBUF: "open_collector", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP240B-7LW";
  override referencePrefix = "U";
}

/**
 * LCD graphical display with white LED background and touch panel blue negative, 240x128, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP240B-7LWTP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP240*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip240-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP240-XXX.
 */
export class EA_eDIP240B_7LWTP extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "EEP_SDA": "17",
  "EEP_SCL": "18",
  "EEP_WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", EEP_SDA: "bidirectional", EEP_SCL: "output", EEP_WP: "input", TEST_SBUF: "open_collector", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP240B-7LWTP";
  override referencePrefix = "U";
}

/**
 * LCD graphical display with amber LED background blue positive mode FSTN 240x128, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP240J-7LA`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP240*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip240-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP240-XXX.
 */
export class EA_eDIP240J_7LA extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "EEP_SDA": "17",
  "EEP_SCL": "18",
  "EEP_WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", EEP_SDA: "bidirectional", EEP_SCL: "output", EEP_WP: "input", TEST_SBUF: "open_collector", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP240J-7LA";
  override referencePrefix = "U";
}

/**
 * LCD graphical display with amber LED background and touch panel blue positive mode FSTN, 240x128, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP240J-7LATP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP240*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip240-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP240-XXX.
 */
export class EA_eDIP240J_7LATP extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "EEP_SDA": "17",
  "EEP_SCL": "18",
  "EEP_WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", EEP_SDA: "bidirectional", EEP_SCL: "output", EEP_WP: "input", TEST_SBUF: "open_collector", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP240J-7LATP";
  override referencePrefix = "U";
}

/**
 * LCD graphical display with white LED background blue positive mode FSTN, 240x128, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP240J-7LW`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP240*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip240-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP240-XXX.
 */
export class EA_eDIP240J_7LW extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "EEP_SDA": "17",
  "EEP_SCL": "18",
  "EEP_WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", EEP_SDA: "bidirectional", EEP_SCL: "output", EEP_WP: "input", TEST_SBUF: "open_collector", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP240J-7LW";
  override referencePrefix = "U";
}

/**
 * LCD graphical display with amber LED background blue positive mode FSTN, 240x128, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP240J-7LWTP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP240*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip240-7e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP240-XXX.
 */
export class EA_eDIP240J_7LWTP extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "EEP_SDA": "17",
  "EEP_SCL": "18",
  "EEP_WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", EEP_SDA: "bidirectional", EEP_SCL: "output", EEP_WP: "input", TEST_SBUF: "open_collector", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP240J-7LWTP";
  override referencePrefix = "U";
}

/**
 * LCD graphical display 320x240 white LED backlight blue negative, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP320B-8LW`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP320*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip320-8e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP320X-XXX.
 */
export class EA_eDIP320B_8LW extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DPWR": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "PDI": "21",
  "PDO": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "NC_43": "43",
  "NC_44": "44",
  "NC_45": "45",
  "NC_46": "46",
  "NC_47": "47",
  "NC_78": "78",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DPWR: "output", WP: "input", TEST_SBUF: "open_collector", PDI: "input", PDO: "output", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", NC_43: "no_connect", NC_44: "no_connect", NC_45: "no_connect", NC_46: "no_connect", NC_47: "no_connect", NC_78: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP320B-8LW";
  override referencePrefix = "U";
}

/**
 * LCD graphical display 320x240 white LED backlight with touch panel blue negative, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP320B-8LWTP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP320*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip320-8e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP320X-XXX.
 */
export class EA_eDIP320B_8LWTP extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DPWR": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "PDI": "21",
  "PDO": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "NC_43": "43",
  "NC_44": "44",
  "NC_45": "45",
  "NC_46": "46",
  "NC_47": "47",
  "NC_78": "78",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DPWR: "output", WP: "input", TEST_SBUF: "open_collector", PDI: "input", PDO: "output", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", NC_43: "no_connect", NC_44: "no_connect", NC_45: "no_connect", NC_46: "no_connect", NC_47: "no_connect", NC_78: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP320B-8LWTP";
  override referencePrefix = "U";
}

/**
 * LCD graphical display 320x240 amber LED backlight blue positive FSTN, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP320J-8LA`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP320*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip320-8e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP320X-XXX.
 */
export class EA_eDIP320J_8LA extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DPWR": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "PDI": "21",
  "PDO": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "NC_43": "43",
  "NC_44": "44",
  "NC_45": "45",
  "NC_46": "46",
  "NC_47": "47",
  "NC_78": "78",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DPWR: "output", WP: "input", TEST_SBUF: "open_collector", PDI: "input", PDO: "output", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", NC_43: "no_connect", NC_44: "no_connect", NC_45: "no_connect", NC_46: "no_connect", NC_47: "no_connect", NC_78: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP320J-8LA";
  override referencePrefix = "U";
}

/**
 * LCD graphical display 320x240 amber LED backlight with touch panel blue positive mode FSTN, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP320J-8LATP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP320*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip320-8e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP320X-XXX.
 */
export class EA_eDIP320J_8LATP extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DPWR": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "PDI": "21",
  "PDO": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "NC_43": "43",
  "NC_44": "44",
  "NC_45": "45",
  "NC_46": "46",
  "NC_47": "47",
  "NC_78": "78",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DPWR: "output", WP: "input", TEST_SBUF: "open_collector", PDI: "input", PDO: "output", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", NC_43: "no_connect", NC_44: "no_connect", NC_45: "no_connect", NC_46: "no_connect", NC_47: "no_connect", NC_78: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP320J-8LATP";
  override referencePrefix = "U";
}

/**
 * LCD graphical display 320x240 white LED backlight blue positive mode FSTN, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP320J-8LW`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP320*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip320-8e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP320X-XXX.
 */
export class EA_eDIP320J_8LW extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DPWR": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "PDI": "21",
  "PDO": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "NC_43": "43",
  "NC_44": "44",
  "NC_45": "45",
  "NC_46": "46",
  "NC_47": "47",
  "NC_78": "78",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DPWR: "output", WP: "input", TEST_SBUF: "open_collector", PDI: "input", PDO: "output", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", NC_43: "no_connect", NC_44: "no_connect", NC_45: "no_connect", NC_46: "no_connect", NC_47: "no_connect", NC_78: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP320J-8LW";
  override referencePrefix = "U";
}

/**
 * LCD graphical display 320x240 white LED backlight with touch panel blue positive mode FSTN, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIP320J-8LWTP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIP320*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/edip320-8e.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:EA_eDIP320X-XXX.
 */
export class EA_eDIP320J_8LWTP extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "VADJ": "3",
  "VOUT": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "WUP": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DPWR": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "PDI": "21",
  "PDO": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "NC_43": "43",
  "NC_44": "44",
  "NC_45": "45",
  "NC_46": "46",
  "NC_47": "47",
  "NC_78": "78",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", VADJ: "input", VOUT: "output", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", WUP: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DPWR: "output", WP: "input", TEST_SBUF: "open_collector", PDI: "input", PDO: "output", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", NC_43: "no_connect", NC_44: "no_connect", NC_45: "no_connect", NC_46: "no_connect", NC_47: "no_connect", NC_78: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIP320J-8LWTP";
  override referencePrefix = "U";
}

/**
 * TFT graphical display, 320x240, 16 bit colour, LED backlight, 3.3V - 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT32-A`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIPTFT32*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft43-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT32-XXX.
 */
export class EA_eDIPTFT32_A extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BA0": "6",
  "BA1": "7",
  "SA0": "8",
  "SA1": "9",
  "SA2": "10",
  "BA2": "11",
  "I2CMO": "12",
  "DPOM": "13",
  "SDA": "14",
  "SCL": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "AIN1": "23",
  "AIN2": "24",
  "OUT1/MO8": "25",
  "OUT2/MO7": "26",
  "OUT3/MO6": "27",
  "OUT4/MO5": "28",
  "OUT5/MO4": "29",
  "OUT6/MO3": "30",
  "OUT7/MO2": "31",
  "OUT8/MO1": "32",
  "IN1/MI8": "33",
  "IN2/MI7": "34",
  "IN3/MI6": "35",
  "IN4/MI5": "36",
  "IN5/MI4": "37",
  "IN6/MI3": "38",
  "IN7/MI2": "39",
  "IN8/MI1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BA0: "input", BA1: "input", SA0: "input", SA1: "input", SA2: "input", BA2: "input", I2CMO: "input", DPOM: "input", SDA: "bidirectional", SCL: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", GND_21: "power_in", VDD_22: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT32-A";
  override referencePrefix = "U";
}

/**
 * TFT graphical display with touch panel, 320x240, 16 bit colour, LED backlight, 3.3V - 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT32-ATP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIPTFT32*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft43-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT32-XXX.
 */
export class EA_eDIPTFT32_ATP extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BA0": "6",
  "BA1": "7",
  "SA0": "8",
  "SA1": "9",
  "SA2": "10",
  "BA2": "11",
  "I2CMO": "12",
  "DPOM": "13",
  "SDA": "14",
  "SCL": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "AIN1": "23",
  "AIN2": "24",
  "OUT1/MO8": "25",
  "OUT2/MO7": "26",
  "OUT3/MO6": "27",
  "OUT4/MO5": "28",
  "OUT5/MO4": "29",
  "OUT6/MO3": "30",
  "OUT7/MO2": "31",
  "OUT8/MO1": "32",
  "IN1/MI8": "33",
  "IN2/MI7": "34",
  "IN3/MI6": "35",
  "IN4/MI5": "36",
  "IN5/MI4": "37",
  "IN6/MI3": "38",
  "IN7/MI2": "39",
  "IN8/MI1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BA0: "input", BA1: "input", SA0: "input", SA1: "input", SA2: "input", BA2: "input", I2CMO: "input", DPOM: "input", SDA: "bidirectional", SCL: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", GND_21: "power_in", VDD_22: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT32-ATP";
  override referencePrefix = "U";
}

/**
 * TFT graphical display, 480x272, 16 bit colour, LED backlight, 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT43-A`. Reference prefix: `U`.
 * Footprint filters: EA*eDIPTFT43*XXX*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft43-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT43-XXX.
 */
export class EA_eDIPTFT43_A extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "AIN1": "23",
  "AIN2": "24",
  "OUT1/MO8": "25",
  "OUT2/MO7": "26",
  "OUT3/MO6": "27",
  "OUT4/MO5": "28",
  "OUT5/MO4": "29",
  "OUT6/MO3": "30",
  "OUT7/MO2": "31",
  "OUT8/MO1": "32",
  "IN1/MI8": "33",
  "IN2/MI7": "34",
  "IN3/MI6": "35",
  "IN4/MI5": "36",
  "IN5/MI4": "37",
  "IN6/MI3": "38",
  "IN7/MI2": "39",
  "IN8/MI1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", GND_21: "power_in", VDD_22: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT43-A";
  override referencePrefix = "U";
}

/**
 * TFT graphical display, 480x272, 16 bit colour, LED backlight, 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT43-ATC`. Reference prefix: `U`.
 * Footprint filters: EA*eDIPTFT43*ATC*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft43-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT43-ATC.
 */
export class EA_eDIPTFT43_ATC extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "AIN1": "23",
  "AIN2": "24",
  "OUT1/MO8": "25",
  "OUT2/MO7": "26",
  "OUT3/MO6": "27",
  "OUT4/MO5": "28",
  "OUT5/MO4": "29",
  "OUT6/MO3": "30",
  "OUT7/MO2": "31",
  "OUT8/MO1": "32",
  "IN1/MI8": "33",
  "IN2/MI7": "34",
  "IN3/MI6": "35",
  "IN4/MI5": "36",
  "IN5/MI4": "37",
  "IN6/MI3": "38",
  "IN7/MI2": "39",
  "IN8/MI1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", GND_21: "power_in", VDD_22: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT43-ATC";
  override referencePrefix = "U";
}

/**
 * TFT graphical display with resistive touch panel, 480x272, 16 bit colour, LED backlight, 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT43-ATP`. Reference prefix: `U`.
 * Footprint filters: EA*eDIPTFT43*XXX*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft43-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT43-XXX.
 */
export class EA_eDIPTFT43_ATP extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "AIN1": "23",
  "AIN2": "24",
  "OUT1/MO8": "25",
  "OUT2/MO7": "26",
  "OUT3/MO6": "27",
  "OUT4/MO5": "28",
  "OUT5/MO4": "29",
  "OUT6/MO3": "30",
  "OUT7/MO2": "31",
  "OUT8/MO1": "32",
  "IN1/MI8": "33",
  "IN2/MI7": "34",
  "IN3/MI6": "35",
  "IN4/MI5": "36",
  "IN5/MI4": "37",
  "IN6/MI3": "38",
  "IN7/MI2": "39",
  "IN8/MI1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", GND_21: "power_in", VDD_22: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT43-ATP";
  override referencePrefix = "U";
}

/**
 * TFT graphical display with capacitive touch panel, 480x272, 16 bit colour, LED backlight, 5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT43-ATS`. Reference prefix: `U`.
 * Footprint filters: EA*eDIPTFT43*XXX*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft43-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT43-XXX.
 */
export class EA_eDIPTFT43_ATS extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "GND_21": "21",
  "VDD_22": "22",
  "AIN1": "23",
  "AIN2": "24",
  "OUT1/MO8": "25",
  "OUT2/MO7": "26",
  "OUT3/MO6": "27",
  "OUT4/MO5": "28",
  "OUT5/MO4": "29",
  "OUT6/MO3": "30",
  "OUT7/MO2": "31",
  "OUT8/MO1": "32",
  "IN1/MI8": "33",
  "IN2/MI7": "34",
  "IN3/MI6": "35",
  "IN4/MI5": "36",
  "IN5/MI4": "37",
  "IN6/MI3": "38",
  "IN7/MI2": "39",
  "IN8/MI1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", NC_3: "no_connect", NC_4: "no_connect", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", GND_21: "power_in", VDD_22: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT43-ATS";
  override referencePrefix = "U";
}

/**
 * TFT-graphical display. 640x480, LED backlight, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT57-A`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIPTFT57*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft57-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT57-XXX.
 */
export class EA_eDIPTFT57_A extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "SND+": "3",
  "SND-": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "GND_29": "29",
  "VDD_30": "30",
  "AIN1": "31",
  "AIN2": "32",
  "OUT1/MO8": "33",
  "OUT2/MO7": "34",
  "OUT3/MO6": "35",
  "OUT4/MO5": "36",
  "OUT5/MO4": "37",
  "OUT6/MO3": "38",
  "OUT7/MO2": "39",
  "OUT8/MO1": "40",
  "IN1/MI8": "41",
  "IN2/MI7": "42",
  "IN3/MI6": "43",
  "IN4/MI5": "44",
  "IN5/MI4": "45",
  "IN6/MI3": "46",
  "IN7/MI2": "47",
  "IN8/MI1": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", "SND+": "output", "SND-": "input", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", GND_29: "power_in", VDD_30: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT57-A";
  override referencePrefix = "U";
}

/**
 * TFT-graphical display with touch panel. 640x480, LED backlight, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT57-ATP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIPTFT57*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft57-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT57-XXX.
 */
export class EA_eDIPTFT57_ATP extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "SND+": "3",
  "SND-": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "GND_29": "29",
  "VDD_30": "30",
  "AIN1": "31",
  "AIN2": "32",
  "OUT1/MO8": "33",
  "OUT2/MO7": "34",
  "OUT3/MO6": "35",
  "OUT4/MO5": "36",
  "OUT5/MO4": "37",
  "OUT6/MO3": "38",
  "OUT7/MO2": "39",
  "OUT8/MO1": "40",
  "IN1/MI8": "41",
  "IN2/MI7": "42",
  "IN3/MI6": "43",
  "IN4/MI5": "44",
  "IN5/MI4": "45",
  "IN6/MI3": "46",
  "IN7/MI2": "47",
  "IN8/MI1": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", "SND+": "output", "SND-": "input", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", GND_29: "power_in", VDD_30: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT57-ATP";
  override referencePrefix = "U";
}

/**
 * TFT-graphical display with LED background, 800x480, 16-bit colours, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT70-A`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIPTFT70*XXX*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft70-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT70-XXX.
 */
export class EA_eDIPTFT70_A extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "SND+": "3",
  "SND-": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "GND_29": "29",
  "VDD_30": "30",
  "AIN1": "31",
  "AIN2": "32",
  "OUT1/MO8": "33",
  "OUT2/MO7": "34",
  "OUT3/MO6": "35",
  "OUT4/MO5": "36",
  "OUT5/MO4": "37",
  "OUT6/MO3": "38",
  "OUT7/MO2": "39",
  "OUT8/MO1": "40",
  "IN1/MI8": "41",
  "IN2/MI7": "42",
  "IN3/MI6": "43",
  "IN4/MI5": "44",
  "IN5/MI4": "45",
  "IN6/MI3": "46",
  "IN7/MI2": "47",
  "IN8/MI1": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", "SND+": "output", "SND-": "input", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", GND_29: "power_in", VDD_30: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT70-A";
  override referencePrefix = "U";
}

/**
 * TFT-graphical display with LED background and capacitive touch panel, 800x480, 16-bit colours, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT70-ATC`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIPTFT70*ATC*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft70-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT70-ATC.
 */
export class EA_eDIPTFT70_ATC extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "SND+": "3",
  "SND-": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "GND_29": "29",
  "VDD_30": "30",
  "AIN1": "31",
  "AIN2": "32",
  "OUT1/MO8": "33",
  "OUT2/MO7": "34",
  "OUT3/MO6": "35",
  "OUT4/MO5": "36",
  "OUT5/MO4": "37",
  "OUT6/MO3": "38",
  "OUT7/MO2": "39",
  "OUT8/MO1": "40",
  "IN1/MI8": "41",
  "IN2/MI7": "42",
  "IN3/MI6": "43",
  "IN4/MI5": "44",
  "IN5/MI4": "45",
  "IN6/MI3": "46",
  "IN7/MI2": "47",
  "IN8/MI1": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", "SND+": "output", "SND-": "input", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", GND_29: "power_in", VDD_30: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT70-ATC";
  override referencePrefix = "U";
}

/**
 * TFT-graphical display with LED background, 800x480, 16-bit colours, +5V VDD, RS-232, I2C or SPI
 *
 * KiCad symbol: `Display_Graphic:EA_eDIPTFT70-ATP`. Reference prefix: `U`.
 * Footprint filters: *EA*eDIPTFT70*XXX*.
 * @see http://www.lcd-module.com/fileadmin/eng/pdf/grafik/ediptft70-ae.pdf
 * Keywords: display TFT LCD graphic.
 * Default footprint: Display:EA_eDIPTFT70-XXX.
 */
export class EA_eDIPTFT70_ATP extends Component.withPins({
  "GND_1": "1",
  "VDD_2": "2",
  "SND+": "3",
  "SND-": "4",
  "~{RESET}": "5",
  "BAUD0": "6",
  "BAUD1": "7",
  "BAUD2": "8",
  "ADR0": "9",
  "RxD": "10",
  "TxD": "11",
  "EN485": "12",
  "DPOM": "13",
  "ADR1": "14",
  "ADR2": "15",
  "BUZZ": "16",
  "DPROT": "17",
  "DNC": "18",
  "WP": "19",
  "TEST_SBUF": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "GND_29": "29",
  "VDD_30": "30",
  "AIN1": "31",
  "AIN2": "32",
  "OUT1/MO8": "33",
  "OUT2/MO7": "34",
  "OUT3/MO6": "35",
  "OUT4/MO5": "36",
  "OUT5/MO4": "37",
  "OUT6/MO3": "38",
  "OUT7/MO2": "39",
  "OUT8/MO1": "40",
  "IN1/MI8": "41",
  "IN2/MI7": "42",
  "IN3/MI6": "43",
  "IN4/MI5": "44",
  "IN5/MI4": "45",
  "IN6/MI3": "46",
  "IN7/MI2": "47",
  "IN8/MI1": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD_2: "power_in", "SND+": "output", "SND-": "input", "~{RESET}": "input", BAUD0: "input", BAUD1: "input", BAUD2: "input", ADR0: "input", RxD: "input", TxD: "output", EN485: "output", DPOM: "input", ADR1: "input", ADR2: "input", BUZZ: "output", DPROT: "input", DNC: "output", WP: "input", TEST_SBUF: "bidirectional", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", NC_28: "no_connect", GND_29: "power_in", VDD_30: "power_in", AIN1: "input", AIN2: "input", "OUT1/MO8": "output", "OUT2/MO7": "output", "OUT3/MO6": "output", "OUT4/MO5": "output", "OUT5/MO4": "output", "OUT6/MO3": "output", "OUT7/MO2": "output", "OUT8/MO1": "output", "IN1/MI8": "input", "IN2/MI7": "input", "IN3/MI6": "input", "IN4/MI5": "input", "IN5/MI4": "input", "IN6/MI3": "input", "IN7/MI2": "input", "IN8/MI1": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:EA_eDIPTFT70-ATP";
  override referencePrefix = "U";
}

/**
 * Graphics Display 192x64px,  8b parallel, 1/64 Duty, 3.3V or 5V VDD
 *
 * KiCad symbol: `Display_Graphic:ERM19264`. Reference prefix: `DS`.
 * Footprint filters: ERM19264*.
 * @see https://www.buydisplay.com/download/manual/ERM19264-1_Series_Datasheet.pdf
 * Keywords: display LCD graphic.
 * Default footprint: Display:ERM19264.
 */
export class ERM19264 extends Component.withPins({
  "~{CS3}": "18",
  "VSS": "1",
  "VDD": "2",
  "VO": "3",
  "RS": "4",
  "R/~{W}": "5",
  "E": "6",
  "DB0": "7",
  "DB1": "8",
  "DB2": "9",
  "DB3": "10",
  "DB4": "11",
  "DB5": "12",
  "DB6": "13",
  "DB7": "14",
  "~{CS1}": "15",
  "~{RST}": "16",
  "~{CS2}": "17",
  "VOUT": "19",
  "BLA": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS3}": "input", VSS: "power_in", VDD: "power_in", VO: "passive", RS: "input", "R/~{W}": "input", E: "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", "~{CS1}": "input", "~{RST}": "input", "~{CS2}": "input", VOUT: "passive", BLA: "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:ERM19264";
  override referencePrefix = "DS";
}

/**
 * SSD1306 OLED module, 0.91 inch, 128x32, I2C
 *
 * KiCad symbol: `Display_Graphic:ER_OLEDM0.91_1x-I2C`. Reference prefix: `U`.
 * Footprint filters: ER?OLEDM0.91?1x?I2C*.
 * @see https://www.buydisplay.com/download/manual/ER-OLEDM0.91-1_Datasheet.pdf
 * Keywords: EastRising.
 * Default footprint: Display:ER_OLEDM0.91_1x-I2C.
 */
export class ER_OLEDM0_91_1x_I2C extends Component.withPins({
  "GND": "1",
  "VCC": "2",
  "SCL": "3",
  "SDA": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:ER_OLEDM0.91_1x-I2C";
  override referencePrefix = "U";
}

/**
 * 128x32 graphical LCD module with common anode RGB backlight, 1/33 duty, 3.3V
 *
 * KiCad symbol: `Display_Graphic:NHD-C12832A1Z-FSRGB`. Reference prefix: `U`.
 * Footprint filters: NHD?C12832A1Z?FSRGB*.
 * @see https://www.newhavendisplay.com/specs/NHD-C12832A1Z-FSRGB-FBW-3V.pdf
 * Keywords: lcd rgb st7565r spi 4-wire.
 * Default footprint: Display:NHD-C12832A1Z-FSRGB.
 */
export class NHD_C12832A1Z_FSRGB extends Component.withPins({
  "V0": "1",
  "V1": "2",
  "V2": "3",
  "V3": "4",
  "V4": "5",
  "C2-": "6",
  "C2+": "7",
  "C1+": "8",
  "C1-": "9",
  "V_{out}": "10",
  "V_{ss}": "11",
  "V_{dd}": "12",
  "SDA(SI)": "13",
  "SCL": "14",
  "A0": "15",
  "~{RST}": "16",
  "~{CS1B}": "17",
  "LED+": "18",
  "(R)LED-": "19",
  "(G)LED-": "20",
  "(B)LED-": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { V0: "passive", V1: "passive", V2: "passive", V3: "passive", V4: "passive", "C2-": "passive", "C2+": "passive", "C1+": "passive", "C1-": "passive", "V_{out}": "passive", "V_{ss}": "power_in", "V_{dd}": "power_in", "SDA(SI)": "input", SCL: "input", A0: "input", "~{RST}": "input", "~{CS1B}": "input", "LED+": "passive", "(R)LED-": "passive", "(G)LED-": "passive", "(B)LED-": "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:NHD-C12832A1Z-FSRGB";
  override referencePrefix = "U";
}

/**
 * OLED display 128x64
 *
 * KiCad symbol: `Display_Graphic:OLED-128O064D`. Reference prefix: `DS`.
 * Footprint filters: OLED?128O064D*.
 * @see https://www.vishay.com/docs/37902/oled128o064dbpp3n00000.pdf
 * Keywords: display oled.
 * Default footprint: Display:OLED-128O064D.
 */
export class OLED_128O064D extends Component.withPins({
  "GND_1": "1",
  "C2N": "2",
  "C2P": "3",
  "C1P": "4",
  "C1N": "5",
  "VBAT": "6",
  "NC": "7",
  "VSS": "8",
  "VDD": "9",
  "BS0": "10",
  "BS1": "11",
  "BS2": "12",
  "~{CS}": "13",
  "~{RES}": "14",
  "D/~{C}": "15",
  "R/~{W}": "16",
  "E/~{RD}": "17",
  "D0": "18",
  "D1": "19",
  "D2": "20",
  "D3": "21",
  "D4": "22",
  "D5": "23",
  "D6": "24",
  "D7": "25",
  "IREF": "26",
  "VCOMH": "27",
  "VCC": "28",
  "VLSS": "29",
  "GND_30": "30",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", C2N: "passive", C2P: "passive", C1P: "passive", C1N: "passive", VBAT: "power_in", NC: "no_connect", VSS: "power_in", VDD: "power_in", BS0: "input", BS1: "input", BS2: "input", "~{CS}": "input", "~{RES}": "input", "D/~{C}": "input", "R/~{W}": "input", "E/~{RD}": "input", D0: "bidirectional", D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", IREF: "passive", VCOMH: "passive", VCC: "power_in", VLSS: "power_in", GND_30: "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Graphic:OLED-128O064D";
  override referencePrefix = "DS";
}
