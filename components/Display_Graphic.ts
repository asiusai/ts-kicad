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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AG12864E extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VO; passive. */
  "VO": "3",
  /** Physical pin 4: DB0; bidirectional. */
  "DB0": "4",
  /** Physical pin 5: DB1; bidirectional. */
  "DB1": "5",
  /** Physical pin 6: DB2; bidirectional. */
  "DB2": "6",
  /** Physical pin 7: DB3; bidirectional. */
  "DB3": "7",
  /** Physical pin 8: DB4; bidirectional. */
  "DB4": "8",
  /** Physical pin 9: DB5; bidirectional. */
  "DB5": "9",
  /** Physical pin 10: DB6; bidirectional. */
  "DB6": "10",
  /** Physical pin 11: DB7; bidirectional. */
  "DB7": "11",
  /** Physical pin 12: ~{CS1}; input. */
  "~{CS1}": "12",
  /** Physical pin 13: ~{CS2}; input. */
  "~{CS2}": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: R/~{W}; input. */
  "R/~{W}": "15",
  /** Physical pin 16: D/~{I}; input. */
  "D/~{I}": "16",
  /** Physical pin 17: E; input. */
  "E": "17",
  /** Physical pin 18: VEE; passive. */
  "VEE": "18",
  /** Physical pin 19: LEDA/EL; passive. */
  "LEDA/EL": "19",
  /** Physical pin 20: LEDK/EL; passive. */
  "LEDK/EL": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_DOGL128X_6 extends Component.withPins({
  /** Physical pin 1: A1+; power_in. */
  "A1+": "1",
  /** Physical pin 2: A2+; power_in. */
  "A2+": "2",
  /** Physical pin 3: A3+; power_in. */
  "A3+": "3",
  /** Physical pin 18: C1-; power_in. */
  "C1-": "18",
  /** Physical pin 19: C2-; power_in. */
  "C2-": "19",
  /** Physical pin 20: C3-; power_in. */
  "C3-": "20",
  /** Physical pin 21: V0; passive. */
  "V0": "21",
  /** Physical pin 22: V1; passive. */
  "V1": "22",
  /** Physical pin 23: V2; passive. */
  "V2": "23",
  /** Physical pin 24: V3; passive. */
  "V3": "24",
  /** Physical pin 25: V4; passive. */
  "V4": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: CAP2N; passive. */
  "CAP2N": "27",
  /** Physical pin 28: CAP2P; passive. */
  "CAP2P": "28",
  /** Physical pin 29: CAP1P; passive. */
  "CAP1P": "29",
  /** Physical pin 30: CAP1N; passive. */
  "CAP1N": "30",
  /** Physical pin 31: CAP3P; passive. */
  "CAP3P": "31",
  /** Physical pin 32: VOUT; output. */
  "VOUT": "32",
  /** Physical pin 33: VSS; passive. */
  "VSS_33": "33",
  /** Physical pin 34: VDD2; power_in. */
  "VDD2": "34",
  /** Physical pin 35: VDD; power_in. */
  "VDD": "35",
  /** Physical pin 36: SI; input. */
  "SI": "36",
  /** Physical pin 37: SCL; input. */
  "SCL": "37",
  /** Physical pin 38: A0; input. */
  "A0": "38",
  /** Physical pin 39: ~{RST}; input. */
  "~{RST}": "39",
  /** Physical pin 40: ~{CS1B}; input. */
  "~{CS1B}": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_DOGM128X_6 extends Component.withPins({
  /** Physical pin 1: A1+; power_in. */
  "A1+": "1",
  /** Physical pin 2: A2+; power_in. */
  "A2+": "2",
  /** Physical pin 3: A3+; power_in. */
  "A3+": "3",
  /** Physical pin 18: C1-; power_in. */
  "C1-": "18",
  /** Physical pin 19: C2-; power_in. */
  "C2-": "19",
  /** Physical pin 20: C3-; power_in. */
  "C3-": "20",
  /** Physical pin 21: V0; passive. */
  "V0": "21",
  /** Physical pin 22: V1; passive. */
  "V1": "22",
  /** Physical pin 23: V2; passive. */
  "V2": "23",
  /** Physical pin 24: V3; passive. */
  "V3": "24",
  /** Physical pin 25: V4; passive. */
  "V4": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: CAP2N; passive. */
  "CAP2N": "27",
  /** Physical pin 28: CAP2P; passive. */
  "CAP2P": "28",
  /** Physical pin 29: CAP1P; passive. */
  "CAP1P": "29",
  /** Physical pin 30: CAP1N; passive. */
  "CAP1N": "30",
  /** Physical pin 31: CAP3P; passive. */
  "CAP3P": "31",
  /** Physical pin 32: VOUT; output. */
  "VOUT": "32",
  /** Physical pin 33: VSS; passive. */
  "VSS_33": "33",
  /** Physical pin 34: VDD2; power_in. */
  "VDD2": "34",
  /** Physical pin 35: VDD; power_in. */
  "VDD": "35",
  /** Physical pin 36: SI; input. */
  "SI": "36",
  /** Physical pin 37: SCL; input. */
  "SCL": "37",
  /** Physical pin 38: A0; input. */
  "A0": "38",
  /** Physical pin 39: ~{RST}; input. */
  "~{RST}": "39",
  /** Physical pin 40: ~{CS1B}; input. */
  "~{CS1B}": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_DOGS104B_A extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VOUT; output. */
  "VOUT": "11",
  /** Physical pin 12: IM1; input. */
  "IM1": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS": "14",
  /** Physical pin 15: SOD; output. */
  "SOD": "15",
  /** Physical pin 16: SID; input. */
  "SID": "16",
  /** Physical pin 17: SCLK; input. */
  "SCLK": "17",
  /** Physical pin 18: ~{CS}; input. */
  "~{CS}": "18",
  /** Physical pin 19: SA0; input. */
  "SA0": "19",
  /** Physical pin 20: ~{RST}; input. */
  "~{RST}": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_DOGXL160_7 extends Component.withPins({
  /** Physical pin 1: A1+; power_in. */
  "A1+": "1",
  /** Physical pin 2: A2+; power_in. */
  "A2+": "2",
  /** Physical pin 3: A3+; power_in. */
  "A3+": "3",
  /** Physical pin 14: C1-; power_in. */
  "C1-": "14",
  /** Physical pin 15: C2-; power_in. */
  "C2-": "15",
  /** Physical pin 16: C3-; power_in. */
  "C3-": "16",
  /** Physical pin 17: VLCD; passive. */
  "VLCD": "17",
  /** Physical pin 18: VB0+; passive. */
  "VB0+": "18",
  /** Physical pin 19: VB1+; passive. */
  "VB1+": "19",
  /** Physical pin 20: VB1-; passive. */
  "VB1-": "20",
  /** Physical pin 21: VB0-; passive. */
  "VB0-": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD": "22",
  /** Physical pin 23: VDD2/3; power_in. */
  "VDD2/3": "23",
  /** Physical pin 24: VSS2; power_in. */
  "VSS2": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
  /** Physical pin 26: BM0; input. */
  "BM0": "26",
  /** Physical pin 27: CD; input. */
  "CD": "27",
  /** Physical pin 28: ~{CS0}/A2; input. */
  "~{CS0}/A2": "28",
  /** Physical pin 29: ~{RST}; input. */
  "~{RST}": "29",
  /** Physical pin 30: D6; input. */
  "D6": "30",
  /** Physical pin 31: D3/SDA; bidirectional. */
  "D3/SDA": "31",
  /** Physical pin 32: D0/SCK; input. */
  "D0/SCK": "32",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP128B_6LW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: PWR; output. */
  "PWR": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: IN8/OUT1; bidirectional. */
  "IN8/OUT1": "25",
  /** Physical pin 26: IN7/OUT2; bidirectional. */
  "IN7/OUT2": "26",
  /** Physical pin 27: IN6/OUT3; bidirectional. */
  "IN6/OUT3": "27",
  /** Physical pin 28: IN5/OUT4; bidirectional. */
  "IN5/OUT4": "28",
  /** Physical pin 29: IN4/OUT5; bidirectional. */
  "IN4/OUT5": "29",
  /** Physical pin 30: IN3/OUT6; bidirectional. */
  "IN3/OUT6": "30",
  /** Physical pin 31: IN2/OUT7; bidirectional. */
  "IN2/OUT7": "31",
  /** Physical pin 32: IN1/OUT8; bidirectional. */
  "IN1/OUT8": "32",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP128B_6LWTP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: PWR; output. */
  "PWR": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: IN8/OUT1; bidirectional. */
  "IN8/OUT1": "25",
  /** Physical pin 26: IN7/OUT2; bidirectional. */
  "IN7/OUT2": "26",
  /** Physical pin 27: IN6/OUT3; bidirectional. */
  "IN6/OUT3": "27",
  /** Physical pin 28: IN5/OUT4; bidirectional. */
  "IN5/OUT4": "28",
  /** Physical pin 29: IN4/OUT5; bidirectional. */
  "IN4/OUT5": "29",
  /** Physical pin 30: IN3/OUT6; bidirectional. */
  "IN3/OUT6": "30",
  /** Physical pin 31: IN2/OUT7; bidirectional. */
  "IN2/OUT7": "31",
  /** Physical pin 32: IN1/OUT8; bidirectional. */
  "IN1/OUT8": "32",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP128W_6LW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: PWR; output. */
  "PWR": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: IN8/OUT1; bidirectional. */
  "IN8/OUT1": "25",
  /** Physical pin 26: IN7/OUT2; bidirectional. */
  "IN7/OUT2": "26",
  /** Physical pin 27: IN6/OUT3; bidirectional. */
  "IN6/OUT3": "27",
  /** Physical pin 28: IN5/OUT4; bidirectional. */
  "IN5/OUT4": "28",
  /** Physical pin 29: IN4/OUT5; bidirectional. */
  "IN4/OUT5": "29",
  /** Physical pin 30: IN3/OUT6; bidirectional. */
  "IN3/OUT6": "30",
  /** Physical pin 31: IN2/OUT7; bidirectional. */
  "IN2/OUT7": "31",
  /** Physical pin 32: IN1/OUT8; bidirectional. */
  "IN1/OUT8": "32",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP128W_6LWTP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: PWR; output. */
  "PWR": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: IN8/OUT1; bidirectional. */
  "IN8/OUT1": "25",
  /** Physical pin 26: IN7/OUT2; bidirectional. */
  "IN7/OUT2": "26",
  /** Physical pin 27: IN6/OUT3; bidirectional. */
  "IN6/OUT3": "27",
  /** Physical pin 28: IN5/OUT4; bidirectional. */
  "IN5/OUT4": "28",
  /** Physical pin 29: IN4/OUT5; bidirectional. */
  "IN4/OUT5": "29",
  /** Physical pin 30: IN3/OUT6; bidirectional. */
  "IN3/OUT6": "30",
  /** Physical pin 31: IN2/OUT7; bidirectional. */
  "IN2/OUT7": "31",
  /** Physical pin 32: IN1/OUT8; bidirectional. */
  "IN1/OUT8": "32",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP160B_7LW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: PWR; output. */
  "PWR": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: IN8/OUT1; bidirectional. */
  "IN8/OUT1": "25",
  /** Physical pin 26: IN7/OUT2; bidirectional. */
  "IN7/OUT2": "26",
  /** Physical pin 27: IN6/OUT3; bidirectional. */
  "IN6/OUT3": "27",
  /** Physical pin 28: IN5/OUT4; bidirectional. */
  "IN5/OUT4": "28",
  /** Physical pin 29: IN4/OUT5; bidirectional. */
  "IN4/OUT5": "29",
  /** Physical pin 30: IN3/OUT6; bidirectional. */
  "IN3/OUT6": "30",
  /** Physical pin 31: IN2/OUT7; bidirectional. */
  "IN2/OUT7": "31",
  /** Physical pin 32: IN1/OUT8; bidirectional. */
  "IN1/OUT8": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP160B_7LWTP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: PWR; output. */
  "PWR": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: IN8/OUT1; bidirectional. */
  "IN8/OUT1": "25",
  /** Physical pin 26: IN7/OUT2; bidirectional. */
  "IN7/OUT2": "26",
  /** Physical pin 27: IN6/OUT3; bidirectional. */
  "IN6/OUT3": "27",
  /** Physical pin 28: IN5/OUT4; bidirectional. */
  "IN5/OUT4": "28",
  /** Physical pin 29: IN4/OUT5; bidirectional. */
  "IN4/OUT5": "29",
  /** Physical pin 30: IN3/OUT6; bidirectional. */
  "IN3/OUT6": "30",
  /** Physical pin 31: IN2/OUT7; bidirectional. */
  "IN2/OUT7": "31",
  /** Physical pin 32: IN1/OUT8; bidirectional. */
  "IN1/OUT8": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP160W_7LW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: PWR; output. */
  "PWR": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: IN8/OUT1; bidirectional. */
  "IN8/OUT1": "25",
  /** Physical pin 26: IN7/OUT2; bidirectional. */
  "IN7/OUT2": "26",
  /** Physical pin 27: IN6/OUT3; bidirectional. */
  "IN6/OUT3": "27",
  /** Physical pin 28: IN5/OUT4; bidirectional. */
  "IN5/OUT4": "28",
  /** Physical pin 29: IN4/OUT5; bidirectional. */
  "IN4/OUT5": "29",
  /** Physical pin 30: IN3/OUT6; bidirectional. */
  "IN3/OUT6": "30",
  /** Physical pin 31: IN2/OUT7; bidirectional. */
  "IN2/OUT7": "31",
  /** Physical pin 32: IN1/OUT8; bidirectional. */
  "IN1/OUT8": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP160W_7LWTP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: PWR; output. */
  "PWR": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: IN8/OUT1; bidirectional. */
  "IN8/OUT1": "25",
  /** Physical pin 26: IN7/OUT2; bidirectional. */
  "IN7/OUT2": "26",
  /** Physical pin 27: IN6/OUT3; bidirectional. */
  "IN6/OUT3": "27",
  /** Physical pin 28: IN5/OUT4; bidirectional. */
  "IN5/OUT4": "28",
  /** Physical pin 29: IN4/OUT5; bidirectional. */
  "IN4/OUT5": "29",
  /** Physical pin 30: IN3/OUT6; bidirectional. */
  "IN3/OUT6": "30",
  /** Physical pin 31: IN2/OUT7; bidirectional. */
  "IN2/OUT7": "31",
  /** Physical pin 32: IN1/OUT8; bidirectional. */
  "IN1/OUT8": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP240B_7LW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: EEP_SDA; bidirectional. */
  "EEP_SDA": "17",
  /** Physical pin 18: EEP_SCL; output. */
  "EEP_SCL": "18",
  /** Physical pin 19: EEP_WP; input. */
  "EEP_WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP240B_7LWTP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: EEP_SDA; bidirectional. */
  "EEP_SDA": "17",
  /** Physical pin 18: EEP_SCL; output. */
  "EEP_SCL": "18",
  /** Physical pin 19: EEP_WP; input. */
  "EEP_WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP240J_7LA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: EEP_SDA; bidirectional. */
  "EEP_SDA": "17",
  /** Physical pin 18: EEP_SCL; output. */
  "EEP_SCL": "18",
  /** Physical pin 19: EEP_WP; input. */
  "EEP_WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP240J_7LATP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: EEP_SDA; bidirectional. */
  "EEP_SDA": "17",
  /** Physical pin 18: EEP_SCL; output. */
  "EEP_SCL": "18",
  /** Physical pin 19: EEP_WP; input. */
  "EEP_WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP240J_7LW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: EEP_SDA; bidirectional. */
  "EEP_SDA": "17",
  /** Physical pin 18: EEP_SCL; output. */
  "EEP_SCL": "18",
  /** Physical pin 19: EEP_WP; input. */
  "EEP_WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP240J_7LWTP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: EEP_SDA; bidirectional. */
  "EEP_SDA": "17",
  /** Physical pin 18: EEP_SCL; output. */
  "EEP_SCL": "18",
  /** Physical pin 19: EEP_WP; input. */
  "EEP_WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP320B_8LW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DPWR; output. */
  "DPWR": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: PDI; input. */
  "PDI": "21",
  /** Physical pin 22: PDO; output. */
  "PDO": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: NC; no_connect. */
  "NC_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 78: NC; no_connect. */
  "NC_78": "78",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP320B_8LWTP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DPWR; output. */
  "DPWR": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: PDI; input. */
  "PDI": "21",
  /** Physical pin 22: PDO; output. */
  "PDO": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: NC; no_connect. */
  "NC_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 78: NC; no_connect. */
  "NC_78": "78",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP320J_8LA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DPWR; output. */
  "DPWR": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: PDI; input. */
  "PDI": "21",
  /** Physical pin 22: PDO; output. */
  "PDO": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: NC; no_connect. */
  "NC_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 78: NC; no_connect. */
  "NC_78": "78",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP320J_8LATP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DPWR; output. */
  "DPWR": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: PDI; input. */
  "PDI": "21",
  /** Physical pin 22: PDO; output. */
  "PDO": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: NC; no_connect. */
  "NC_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 78: NC; no_connect. */
  "NC_78": "78",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP320J_8LW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DPWR; output. */
  "DPWR": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: PDI; input. */
  "PDI": "21",
  /** Physical pin 22: PDO; output. */
  "PDO": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: NC; no_connect. */
  "NC_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 78: NC; no_connect. */
  "NC_78": "78",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIP320J_8LWTP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VADJ; input. */
  "VADJ": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: WUP; input. */
  "WUP": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DPWR; output. */
  "DPWR": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; open_collector. */
  "TEST_SBUF": "20",
  /** Physical pin 21: PDI; input. */
  "PDI": "21",
  /** Physical pin 22: PDO; output. */
  "PDO": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: NC; no_connect. */
  "NC_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 78: NC; no_connect. */
  "NC_78": "78",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT32_A extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BA0; input. */
  "BA0": "6",
  /** Physical pin 7: BA1; input. */
  "BA1": "7",
  /** Physical pin 8: SA0; input. */
  "SA0": "8",
  /** Physical pin 9: SA1; input. */
  "SA1": "9",
  /** Physical pin 10: SA2; input. */
  "SA2": "10",
  /** Physical pin 11: BA2; input. */
  "BA2": "11",
  /** Physical pin 12: I2CMO; input. */
  "I2CMO": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
  /** Physical pin 15: SCL; input. */
  "SCL": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: AIN1; input. */
  "AIN1": "23",
  /** Physical pin 24: AIN2; input. */
  "AIN2": "24",
  /** Physical pin 25: OUT1/MO8; output. */
  "OUT1/MO8": "25",
  /** Physical pin 26: OUT2/MO7; output. */
  "OUT2/MO7": "26",
  /** Physical pin 27: OUT3/MO6; output. */
  "OUT3/MO6": "27",
  /** Physical pin 28: OUT4/MO5; output. */
  "OUT4/MO5": "28",
  /** Physical pin 29: OUT5/MO4; output. */
  "OUT5/MO4": "29",
  /** Physical pin 30: OUT6/MO3; output. */
  "OUT6/MO3": "30",
  /** Physical pin 31: OUT7/MO2; output. */
  "OUT7/MO2": "31",
  /** Physical pin 32: OUT8/MO1; output. */
  "OUT8/MO1": "32",
  /** Physical pin 33: IN1/MI8; input. */
  "IN1/MI8": "33",
  /** Physical pin 34: IN2/MI7; input. */
  "IN2/MI7": "34",
  /** Physical pin 35: IN3/MI6; input. */
  "IN3/MI6": "35",
  /** Physical pin 36: IN4/MI5; input. */
  "IN4/MI5": "36",
  /** Physical pin 37: IN5/MI4; input. */
  "IN5/MI4": "37",
  /** Physical pin 38: IN6/MI3; input. */
  "IN6/MI3": "38",
  /** Physical pin 39: IN7/MI2; input. */
  "IN7/MI2": "39",
  /** Physical pin 40: IN8/MI1; input. */
  "IN8/MI1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT32_ATP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BA0; input. */
  "BA0": "6",
  /** Physical pin 7: BA1; input. */
  "BA1": "7",
  /** Physical pin 8: SA0; input. */
  "SA0": "8",
  /** Physical pin 9: SA1; input. */
  "SA1": "9",
  /** Physical pin 10: SA2; input. */
  "SA2": "10",
  /** Physical pin 11: BA2; input. */
  "BA2": "11",
  /** Physical pin 12: I2CMO; input. */
  "I2CMO": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
  /** Physical pin 15: SCL; input. */
  "SCL": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: AIN1; input. */
  "AIN1": "23",
  /** Physical pin 24: AIN2; input. */
  "AIN2": "24",
  /** Physical pin 25: OUT1/MO8; output. */
  "OUT1/MO8": "25",
  /** Physical pin 26: OUT2/MO7; output. */
  "OUT2/MO7": "26",
  /** Physical pin 27: OUT3/MO6; output. */
  "OUT3/MO6": "27",
  /** Physical pin 28: OUT4/MO5; output. */
  "OUT4/MO5": "28",
  /** Physical pin 29: OUT5/MO4; output. */
  "OUT5/MO4": "29",
  /** Physical pin 30: OUT6/MO3; output. */
  "OUT6/MO3": "30",
  /** Physical pin 31: OUT7/MO2; output. */
  "OUT7/MO2": "31",
  /** Physical pin 32: OUT8/MO1; output. */
  "OUT8/MO1": "32",
  /** Physical pin 33: IN1/MI8; input. */
  "IN1/MI8": "33",
  /** Physical pin 34: IN2/MI7; input. */
  "IN2/MI7": "34",
  /** Physical pin 35: IN3/MI6; input. */
  "IN3/MI6": "35",
  /** Physical pin 36: IN4/MI5; input. */
  "IN4/MI5": "36",
  /** Physical pin 37: IN5/MI4; input. */
  "IN5/MI4": "37",
  /** Physical pin 38: IN6/MI3; input. */
  "IN6/MI3": "38",
  /** Physical pin 39: IN7/MI2; input. */
  "IN7/MI2": "39",
  /** Physical pin 40: IN8/MI1; input. */
  "IN8/MI1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT43_A extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: AIN1; input. */
  "AIN1": "23",
  /** Physical pin 24: AIN2; input. */
  "AIN2": "24",
  /** Physical pin 25: OUT1/MO8; output. */
  "OUT1/MO8": "25",
  /** Physical pin 26: OUT2/MO7; output. */
  "OUT2/MO7": "26",
  /** Physical pin 27: OUT3/MO6; output. */
  "OUT3/MO6": "27",
  /** Physical pin 28: OUT4/MO5; output. */
  "OUT4/MO5": "28",
  /** Physical pin 29: OUT5/MO4; output. */
  "OUT5/MO4": "29",
  /** Physical pin 30: OUT6/MO3; output. */
  "OUT6/MO3": "30",
  /** Physical pin 31: OUT7/MO2; output. */
  "OUT7/MO2": "31",
  /** Physical pin 32: OUT8/MO1; output. */
  "OUT8/MO1": "32",
  /** Physical pin 33: IN1/MI8; input. */
  "IN1/MI8": "33",
  /** Physical pin 34: IN2/MI7; input. */
  "IN2/MI7": "34",
  /** Physical pin 35: IN3/MI6; input. */
  "IN3/MI6": "35",
  /** Physical pin 36: IN4/MI5; input. */
  "IN4/MI5": "36",
  /** Physical pin 37: IN5/MI4; input. */
  "IN5/MI4": "37",
  /** Physical pin 38: IN6/MI3; input. */
  "IN6/MI3": "38",
  /** Physical pin 39: IN7/MI2; input. */
  "IN7/MI2": "39",
  /** Physical pin 40: IN8/MI1; input. */
  "IN8/MI1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT43_ATC extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: AIN1; input. */
  "AIN1": "23",
  /** Physical pin 24: AIN2; input. */
  "AIN2": "24",
  /** Physical pin 25: OUT1/MO8; output. */
  "OUT1/MO8": "25",
  /** Physical pin 26: OUT2/MO7; output. */
  "OUT2/MO7": "26",
  /** Physical pin 27: OUT3/MO6; output. */
  "OUT3/MO6": "27",
  /** Physical pin 28: OUT4/MO5; output. */
  "OUT4/MO5": "28",
  /** Physical pin 29: OUT5/MO4; output. */
  "OUT5/MO4": "29",
  /** Physical pin 30: OUT6/MO3; output. */
  "OUT6/MO3": "30",
  /** Physical pin 31: OUT7/MO2; output. */
  "OUT7/MO2": "31",
  /** Physical pin 32: OUT8/MO1; output. */
  "OUT8/MO1": "32",
  /** Physical pin 33: IN1/MI8; input. */
  "IN1/MI8": "33",
  /** Physical pin 34: IN2/MI7; input. */
  "IN2/MI7": "34",
  /** Physical pin 35: IN3/MI6; input. */
  "IN3/MI6": "35",
  /** Physical pin 36: IN4/MI5; input. */
  "IN4/MI5": "36",
  /** Physical pin 37: IN5/MI4; input. */
  "IN5/MI4": "37",
  /** Physical pin 38: IN6/MI3; input. */
  "IN6/MI3": "38",
  /** Physical pin 39: IN7/MI2; input. */
  "IN7/MI2": "39",
  /** Physical pin 40: IN8/MI1; input. */
  "IN8/MI1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT43_ATP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: AIN1; input. */
  "AIN1": "23",
  /** Physical pin 24: AIN2; input. */
  "AIN2": "24",
  /** Physical pin 25: OUT1/MO8; output. */
  "OUT1/MO8": "25",
  /** Physical pin 26: OUT2/MO7; output. */
  "OUT2/MO7": "26",
  /** Physical pin 27: OUT3/MO6; output. */
  "OUT3/MO6": "27",
  /** Physical pin 28: OUT4/MO5; output. */
  "OUT4/MO5": "28",
  /** Physical pin 29: OUT5/MO4; output. */
  "OUT5/MO4": "29",
  /** Physical pin 30: OUT6/MO3; output. */
  "OUT6/MO3": "30",
  /** Physical pin 31: OUT7/MO2; output. */
  "OUT7/MO2": "31",
  /** Physical pin 32: OUT8/MO1; output. */
  "OUT8/MO1": "32",
  /** Physical pin 33: IN1/MI8; input. */
  "IN1/MI8": "33",
  /** Physical pin 34: IN2/MI7; input. */
  "IN2/MI7": "34",
  /** Physical pin 35: IN3/MI6; input. */
  "IN3/MI6": "35",
  /** Physical pin 36: IN4/MI5; input. */
  "IN4/MI5": "36",
  /** Physical pin 37: IN5/MI4; input. */
  "IN5/MI4": "37",
  /** Physical pin 38: IN6/MI3; input. */
  "IN6/MI3": "38",
  /** Physical pin 39: IN7/MI2; input. */
  "IN7/MI2": "39",
  /** Physical pin 40: IN8/MI1; input. */
  "IN8/MI1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT43_ATS extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: AIN1; input. */
  "AIN1": "23",
  /** Physical pin 24: AIN2; input. */
  "AIN2": "24",
  /** Physical pin 25: OUT1/MO8; output. */
  "OUT1/MO8": "25",
  /** Physical pin 26: OUT2/MO7; output. */
  "OUT2/MO7": "26",
  /** Physical pin 27: OUT3/MO6; output. */
  "OUT3/MO6": "27",
  /** Physical pin 28: OUT4/MO5; output. */
  "OUT4/MO5": "28",
  /** Physical pin 29: OUT5/MO4; output. */
  "OUT5/MO4": "29",
  /** Physical pin 30: OUT6/MO3; output. */
  "OUT6/MO3": "30",
  /** Physical pin 31: OUT7/MO2; output. */
  "OUT7/MO2": "31",
  /** Physical pin 32: OUT8/MO1; output. */
  "OUT8/MO1": "32",
  /** Physical pin 33: IN1/MI8; input. */
  "IN1/MI8": "33",
  /** Physical pin 34: IN2/MI7; input. */
  "IN2/MI7": "34",
  /** Physical pin 35: IN3/MI6; input. */
  "IN3/MI6": "35",
  /** Physical pin 36: IN4/MI5; input. */
  "IN4/MI5": "36",
  /** Physical pin 37: IN5/MI4; input. */
  "IN5/MI4": "37",
  /** Physical pin 38: IN6/MI3; input. */
  "IN6/MI3": "38",
  /** Physical pin 39: IN7/MI2; input. */
  "IN7/MI2": "39",
  /** Physical pin 40: IN8/MI1; input. */
  "IN8/MI1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT57_A extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: SND+; output. */
  "SND+": "3",
  /** Physical pin 4: SND-; input. */
  "SND-": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: AIN1; input. */
  "AIN1": "31",
  /** Physical pin 32: AIN2; input. */
  "AIN2": "32",
  /** Physical pin 33: OUT1/MO8; output. */
  "OUT1/MO8": "33",
  /** Physical pin 34: OUT2/MO7; output. */
  "OUT2/MO7": "34",
  /** Physical pin 35: OUT3/MO6; output. */
  "OUT3/MO6": "35",
  /** Physical pin 36: OUT4/MO5; output. */
  "OUT4/MO5": "36",
  /** Physical pin 37: OUT5/MO4; output. */
  "OUT5/MO4": "37",
  /** Physical pin 38: OUT6/MO3; output. */
  "OUT6/MO3": "38",
  /** Physical pin 39: OUT7/MO2; output. */
  "OUT7/MO2": "39",
  /** Physical pin 40: OUT8/MO1; output. */
  "OUT8/MO1": "40",
  /** Physical pin 41: IN1/MI8; input. */
  "IN1/MI8": "41",
  /** Physical pin 42: IN2/MI7; input. */
  "IN2/MI7": "42",
  /** Physical pin 43: IN3/MI6; input. */
  "IN3/MI6": "43",
  /** Physical pin 44: IN4/MI5; input. */
  "IN4/MI5": "44",
  /** Physical pin 45: IN5/MI4; input. */
  "IN5/MI4": "45",
  /** Physical pin 46: IN6/MI3; input. */
  "IN6/MI3": "46",
  /** Physical pin 47: IN7/MI2; input. */
  "IN7/MI2": "47",
  /** Physical pin 48: IN8/MI1; input. */
  "IN8/MI1": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT57_ATP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: SND+; output. */
  "SND+": "3",
  /** Physical pin 4: SND-; input. */
  "SND-": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: AIN1; input. */
  "AIN1": "31",
  /** Physical pin 32: AIN2; input. */
  "AIN2": "32",
  /** Physical pin 33: OUT1/MO8; output. */
  "OUT1/MO8": "33",
  /** Physical pin 34: OUT2/MO7; output. */
  "OUT2/MO7": "34",
  /** Physical pin 35: OUT3/MO6; output. */
  "OUT3/MO6": "35",
  /** Physical pin 36: OUT4/MO5; output. */
  "OUT4/MO5": "36",
  /** Physical pin 37: OUT5/MO4; output. */
  "OUT5/MO4": "37",
  /** Physical pin 38: OUT6/MO3; output. */
  "OUT6/MO3": "38",
  /** Physical pin 39: OUT7/MO2; output. */
  "OUT7/MO2": "39",
  /** Physical pin 40: OUT8/MO1; output. */
  "OUT8/MO1": "40",
  /** Physical pin 41: IN1/MI8; input. */
  "IN1/MI8": "41",
  /** Physical pin 42: IN2/MI7; input. */
  "IN2/MI7": "42",
  /** Physical pin 43: IN3/MI6; input. */
  "IN3/MI6": "43",
  /** Physical pin 44: IN4/MI5; input. */
  "IN4/MI5": "44",
  /** Physical pin 45: IN5/MI4; input. */
  "IN5/MI4": "45",
  /** Physical pin 46: IN6/MI3; input. */
  "IN6/MI3": "46",
  /** Physical pin 47: IN7/MI2; input. */
  "IN7/MI2": "47",
  /** Physical pin 48: IN8/MI1; input. */
  "IN8/MI1": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT70_A extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: SND+; output. */
  "SND+": "3",
  /** Physical pin 4: SND-; input. */
  "SND-": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: AIN1; input. */
  "AIN1": "31",
  /** Physical pin 32: AIN2; input. */
  "AIN2": "32",
  /** Physical pin 33: OUT1/MO8; output. */
  "OUT1/MO8": "33",
  /** Physical pin 34: OUT2/MO7; output. */
  "OUT2/MO7": "34",
  /** Physical pin 35: OUT3/MO6; output. */
  "OUT3/MO6": "35",
  /** Physical pin 36: OUT4/MO5; output. */
  "OUT4/MO5": "36",
  /** Physical pin 37: OUT5/MO4; output. */
  "OUT5/MO4": "37",
  /** Physical pin 38: OUT6/MO3; output. */
  "OUT6/MO3": "38",
  /** Physical pin 39: OUT7/MO2; output. */
  "OUT7/MO2": "39",
  /** Physical pin 40: OUT8/MO1; output. */
  "OUT8/MO1": "40",
  /** Physical pin 41: IN1/MI8; input. */
  "IN1/MI8": "41",
  /** Physical pin 42: IN2/MI7; input. */
  "IN2/MI7": "42",
  /** Physical pin 43: IN3/MI6; input. */
  "IN3/MI6": "43",
  /** Physical pin 44: IN4/MI5; input. */
  "IN4/MI5": "44",
  /** Physical pin 45: IN5/MI4; input. */
  "IN5/MI4": "45",
  /** Physical pin 46: IN6/MI3; input. */
  "IN6/MI3": "46",
  /** Physical pin 47: IN7/MI2; input. */
  "IN7/MI2": "47",
  /** Physical pin 48: IN8/MI1; input. */
  "IN8/MI1": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT70_ATC extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: SND+; output. */
  "SND+": "3",
  /** Physical pin 4: SND-; input. */
  "SND-": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: AIN1; input. */
  "AIN1": "31",
  /** Physical pin 32: AIN2; input. */
  "AIN2": "32",
  /** Physical pin 33: OUT1/MO8; output. */
  "OUT1/MO8": "33",
  /** Physical pin 34: OUT2/MO7; output. */
  "OUT2/MO7": "34",
  /** Physical pin 35: OUT3/MO6; output. */
  "OUT3/MO6": "35",
  /** Physical pin 36: OUT4/MO5; output. */
  "OUT4/MO5": "36",
  /** Physical pin 37: OUT5/MO4; output. */
  "OUT5/MO4": "37",
  /** Physical pin 38: OUT6/MO3; output. */
  "OUT6/MO3": "38",
  /** Physical pin 39: OUT7/MO2; output. */
  "OUT7/MO2": "39",
  /** Physical pin 40: OUT8/MO1; output. */
  "OUT8/MO1": "40",
  /** Physical pin 41: IN1/MI8; input. */
  "IN1/MI8": "41",
  /** Physical pin 42: IN2/MI7; input. */
  "IN2/MI7": "42",
  /** Physical pin 43: IN3/MI6; input. */
  "IN3/MI6": "43",
  /** Physical pin 44: IN4/MI5; input. */
  "IN4/MI5": "44",
  /** Physical pin 45: IN5/MI4; input. */
  "IN5/MI4": "45",
  /** Physical pin 46: IN6/MI3; input. */
  "IN6/MI3": "46",
  /** Physical pin 47: IN7/MI2; input. */
  "IN7/MI2": "47",
  /** Physical pin 48: IN8/MI1; input. */
  "IN8/MI1": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EA_eDIPTFT70_ATP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: SND+; output. */
  "SND+": "3",
  /** Physical pin 4: SND-; input. */
  "SND-": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: BAUD0; input. */
  "BAUD0": "6",
  /** Physical pin 7: BAUD1; input. */
  "BAUD1": "7",
  /** Physical pin 8: BAUD2; input. */
  "BAUD2": "8",
  /** Physical pin 9: ADR0; input. */
  "ADR0": "9",
  /** Physical pin 10: RxD; input. */
  "RxD": "10",
  /** Physical pin 11: TxD; output. */
  "TxD": "11",
  /** Physical pin 12: EN485; output. */
  "EN485": "12",
  /** Physical pin 13: DPOM; input. */
  "DPOM": "13",
  /** Physical pin 14: ADR1; input. */
  "ADR1": "14",
  /** Physical pin 15: ADR2; input. */
  "ADR2": "15",
  /** Physical pin 16: BUZZ; output. */
  "BUZZ": "16",
  /** Physical pin 17: DPROT; input. */
  "DPROT": "17",
  /** Physical pin 18: DNC; output. */
  "DNC": "18",
  /** Physical pin 19: WP; input. */
  "WP": "19",
  /** Physical pin 20: TEST_SBUF; bidirectional. */
  "TEST_SBUF": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: AIN1; input. */
  "AIN1": "31",
  /** Physical pin 32: AIN2; input. */
  "AIN2": "32",
  /** Physical pin 33: OUT1/MO8; output. */
  "OUT1/MO8": "33",
  /** Physical pin 34: OUT2/MO7; output. */
  "OUT2/MO7": "34",
  /** Physical pin 35: OUT3/MO6; output. */
  "OUT3/MO6": "35",
  /** Physical pin 36: OUT4/MO5; output. */
  "OUT4/MO5": "36",
  /** Physical pin 37: OUT5/MO4; output. */
  "OUT5/MO4": "37",
  /** Physical pin 38: OUT6/MO3; output. */
  "OUT6/MO3": "38",
  /** Physical pin 39: OUT7/MO2; output. */
  "OUT7/MO2": "39",
  /** Physical pin 40: OUT8/MO1; output. */
  "OUT8/MO1": "40",
  /** Physical pin 41: IN1/MI8; input. */
  "IN1/MI8": "41",
  /** Physical pin 42: IN2/MI7; input. */
  "IN2/MI7": "42",
  /** Physical pin 43: IN3/MI6; input. */
  "IN3/MI6": "43",
  /** Physical pin 44: IN4/MI5; input. */
  "IN4/MI5": "44",
  /** Physical pin 45: IN5/MI4; input. */
  "IN5/MI4": "45",
  /** Physical pin 46: IN6/MI3; input. */
  "IN6/MI3": "46",
  /** Physical pin 47: IN7/MI2; input. */
  "IN7/MI2": "47",
  /** Physical pin 48: IN8/MI1; input. */
  "IN8/MI1": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ERM19264 extends Component.withPins({
  /** Physical pin 18: ~{CS3}; input. */
  "~{CS3}": "18",
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VO; passive. */
  "VO": "3",
  /** Physical pin 4: RS; input. */
  "RS": "4",
  /** Physical pin 5: R/~{W}; input. */
  "R/~{W}": "5",
  /** Physical pin 6: E; input. */
  "E": "6",
  /** Physical pin 7: DB0; bidirectional. */
  "DB0": "7",
  /** Physical pin 8: DB1; bidirectional. */
  "DB1": "8",
  /** Physical pin 9: DB2; bidirectional. */
  "DB2": "9",
  /** Physical pin 10: DB3; bidirectional. */
  "DB3": "10",
  /** Physical pin 11: DB4; bidirectional. */
  "DB4": "11",
  /** Physical pin 12: DB5; bidirectional. */
  "DB5": "12",
  /** Physical pin 13: DB6; bidirectional. */
  "DB6": "13",
  /** Physical pin 14: DB7; bidirectional. */
  "DB7": "14",
  /** Physical pin 15: ~{CS1}; input. */
  "~{CS1}": "15",
  /** Physical pin 16: ~{RST}; input. */
  "~{RST}": "16",
  /** Physical pin 17: ~{CS2}; input. */
  "~{CS2}": "17",
  /** Physical pin 19: VOUT; passive. */
  "VOUT": "19",
  /** Physical pin 20: BLA; passive. */
  "BLA": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ER_OLEDM0_91_1x_I2C extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NHD_C12832A1Z_FSRGB extends Component.withPins({
  /** Physical pin 1: V0; passive. */
  "V0": "1",
  /** Physical pin 2: V1; passive. */
  "V1": "2",
  /** Physical pin 3: V2; passive. */
  "V2": "3",
  /** Physical pin 4: V3; passive. */
  "V3": "4",
  /** Physical pin 5: V4; passive. */
  "V4": "5",
  /** Physical pin 6: C2-; passive. */
  "C2-": "6",
  /** Physical pin 7: C2+; passive. */
  "C2+": "7",
  /** Physical pin 8: C1+; passive. */
  "C1+": "8",
  /** Physical pin 9: C1-; passive. */
  "C1-": "9",
  /** Physical pin 10: V_{out}; passive. */
  "V_{out}": "10",
  /** Physical pin 11: V_{ss}; power_in. */
  "V_{ss}": "11",
  /** Physical pin 12: V_{dd}; power_in. */
  "V_{dd}": "12",
  /** Physical pin 13: SDA(SI); input. */
  "SDA(SI)": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: A0; input. */
  "A0": "15",
  /** Physical pin 16: ~{RST}; input. */
  "~{RST}": "16",
  /** Physical pin 17: ~{CS1B}; input. */
  "~{CS1B}": "17",
  /** Physical pin 18: LED+; passive. */
  "LED+": "18",
  /** Physical pin 19: (R)LED-; passive. */
  "(R)LED-": "19",
  /** Physical pin 20: (G)LED-; passive. */
  "(G)LED-": "20",
  /** Physical pin 21: (B)LED-; passive. */
  "(B)LED-": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OLED_128O064D extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: C2N; passive. */
  "C2N": "2",
  /** Physical pin 3: C2P; passive. */
  "C2P": "3",
  /** Physical pin 4: C1P; passive. */
  "C1P": "4",
  /** Physical pin 5: C1N; passive. */
  "C1N": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: BS0; input. */
  "BS0": "10",
  /** Physical pin 11: BS1; input. */
  "BS1": "11",
  /** Physical pin 12: BS2; input. */
  "BS2": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: ~{RES}; input. */
  "~{RES}": "14",
  /** Physical pin 15: D/~{C}; input. */
  "D/~{C}": "15",
  /** Physical pin 16: R/~{W}; input. */
  "R/~{W}": "16",
  /** Physical pin 17: E/~{RD}; input. */
  "E/~{RD}": "17",
  /** Physical pin 18: D0; bidirectional. */
  "D0": "18",
  /** Physical pin 19: D1; bidirectional. */
  "D1": "19",
  /** Physical pin 20: D2; bidirectional. */
  "D2": "20",
  /** Physical pin 21: D3; bidirectional. */
  "D3": "21",
  /** Physical pin 22: D4; bidirectional. */
  "D4": "22",
  /** Physical pin 23: D5; bidirectional. */
  "D5": "23",
  /** Physical pin 24: D6; bidirectional. */
  "D6": "24",
  /** Physical pin 25: D7; bidirectional. */
  "D7": "25",
  /** Physical pin 26: IREF; passive. */
  "IREF": "26",
  /** Physical pin 27: VCOMH; passive. */
  "VCOMH": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 29: VLSS; power_in. */
  "VLSS": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
}) {
  override schema = "Display_Graphic:OLED-128O064D";
  override referencePrefix = "DS";
}

