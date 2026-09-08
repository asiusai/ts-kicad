// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * PC16450, Universal Asynchronous Receiver/Transmitter, PDIP-40
 *
 * KiCad symbol: `Interface_UART:16450`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * Keywords: 1ch UART.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _16450 extends Component.withPins({
  /** Physical pin 1: D0; bidirectional. */
  "D0": "1",
  /** Physical pin 2: D1; bidirectional. */
  "D1": "2",
  /** Physical pin 3: D2; bidirectional. */
  "D2": "3",
  /** Physical pin 4: D3; bidirectional. */
  "D3": "4",
  /** Physical pin 5: D4; bidirectional. */
  "D4": "5",
  /** Physical pin 6: D5; bidirectional. */
  "D5": "6",
  /** Physical pin 7: D6; bidirectional. */
  "D6": "7",
  /** Physical pin 8: D7; bidirectional. */
  "D7": "8",
  /** Physical pin 9: RCLK; input. */
  "RCLK": "9",
  /** Physical pin 10: SIN; input. */
  "SIN": "10",
  /** Physical pin 11: SOUT; output. */
  "SOUT": "11",
  /** Physical pin 12: CS0; input. */
  "CS0": "12",
  /** Physical pin 13: CS1; input. */
  "CS1": "13",
  /** Physical pin 14: ~{CS2}; input. */
  "~{CS2}": "14",
  /** Physical pin 15: ~{BAUDOUT}; output. */
  "~{BAUDOUT}": "15",
  /** Physical pin 16: XIN; input. */
  "XIN": "16",
  /** Physical pin 17: XOUT; output. */
  "XOUT": "17",
  /** Physical pin 18: ~{WR}; input. */
  "~{WR}": "18",
  /** Physical pin 19: WR; input. */
  "WR": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: ~{RD}; input. */
  "~{RD}": "21",
  /** Physical pin 22: RD; input. */
  "RD": "22",
  /** Physical pin 23: DDIS; output. */
  "DDIS": "23",
  /** Physical pin 24: CSOUT; output. */
  "CSOUT": "24",
  /** Physical pin 25: ~{ADS}; input. */
  "~{ADS}": "25",
  /** Physical pin 26: A2; input. */
  "A2": "26",
  /** Physical pin 27: A1; input. */
  "A1": "27",
  /** Physical pin 28: A0; input. */
  "A0": "28",
  /** Physical pin 30: INTR; output. */
  "INTR": "30",
  /** Physical pin 31: ~{OUT2}; output. */
  "~{OUT2}": "31",
  /** Physical pin 32: ~{RTS}; output. */
  "~{RTS}": "32",
  /** Physical pin 33: ~{DTR}; output. */
  "~{DTR}": "33",
  /** Physical pin 34: ~{OUT1}; output. */
  "~{OUT1}": "34",
  /** Physical pin 35: MR; input. */
  "MR": "35",
  /** Physical pin 36: ~{CTS}; input. */
  "~{CTS}": "36",
  /** Physical pin 37: ~{DSR}; input. */
  "~{DSR}": "37",
  /** Physical pin 38: ~{DCD}; input. */
  "~{DCD}": "38",
  /** Physical pin 39: ~{RI}; input. */
  "~{RI}": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "Interface_UART:16450";
  override referencePrefix = "U";
}

/**
 * PC16550D, Universal Asynchronous Receiver/Transmitter with FIFOs, PDIP-40
 *
 * KiCad symbol: `Interface_UART:16550`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://www.ti.com/lit/ds/symlink/pc16550d.pdf
 * Keywords: 1ch UART FIFO.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _16550 extends Component.withPins({
  /** Physical pin 1: D0; bidirectional. */
  "D0": "1",
  /** Physical pin 2: D1; bidirectional. */
  "D1": "2",
  /** Physical pin 3: D2; bidirectional. */
  "D2": "3",
  /** Physical pin 4: D3; bidirectional. */
  "D3": "4",
  /** Physical pin 5: D4; bidirectional. */
  "D4": "5",
  /** Physical pin 6: D5; bidirectional. */
  "D5": "6",
  /** Physical pin 7: D6; bidirectional. */
  "D6": "7",
  /** Physical pin 8: D7; bidirectional. */
  "D7": "8",
  /** Physical pin 9: RCLK; input. */
  "RCLK": "9",
  /** Physical pin 10: SIN; input. */
  "SIN": "10",
  /** Physical pin 11: SOUT; output. */
  "SOUT": "11",
  /** Physical pin 12: CS0; input. */
  "CS0": "12",
  /** Physical pin 13: CS1; input. */
  "CS1": "13",
  /** Physical pin 14: ~{CS2}; input. */
  "~{CS2}": "14",
  /** Physical pin 15: ~{BAUDOUT}; output. */
  "~{BAUDOUT}": "15",
  /** Physical pin 16: XIN; input. */
  "XIN": "16",
  /** Physical pin 17: XOUT; output. */
  "XOUT": "17",
  /** Physical pin 18: ~{WR}; input. */
  "~{WR}": "18",
  /** Physical pin 19: WR; input. */
  "WR": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: ~{RD}; input. */
  "~{RD}": "21",
  /** Physical pin 22: RD; input. */
  "RD": "22",
  /** Physical pin 23: DDIS; output. */
  "DDIS": "23",
  /** Physical pin 24: ~{TXRDY}; output. */
  "~{TXRDY}": "24",
  /** Physical pin 25: ~{ADS}; input. */
  "~{ADS}": "25",
  /** Physical pin 26: A2; input. */
  "A2": "26",
  /** Physical pin 27: A1; input. */
  "A1": "27",
  /** Physical pin 28: A0; input. */
  "A0": "28",
  /** Physical pin 29: ~{RXRDY}; output. */
  "~{RXRDY}": "29",
  /** Physical pin 30: INTR; output. */
  "INTR": "30",
  /** Physical pin 31: ~{OUT2}; output. */
  "~{OUT2}": "31",
  /** Physical pin 32: ~{RTS}; output. */
  "~{RTS}": "32",
  /** Physical pin 33: ~{DTR}; output. */
  "~{DTR}": "33",
  /** Physical pin 34: ~{OUT1}; output. */
  "~{OUT1}": "34",
  /** Physical pin 35: MR; input. */
  "MR": "35",
  /** Physical pin 36: ~{CTS}; input. */
  "~{CTS}": "36",
  /** Physical pin 37: ~{DSR}; input. */
  "~{DSR}": "37",
  /** Physical pin 38: ~{DCD}; input. */
  "~{DCD}": "38",
  /** Physical pin 39: ~{RI}; input. */
  "~{RI}": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "Interface_UART:16550";
  override referencePrefix = "U";
}

/**
 * CMOS Dual Channel UART
 *
 * KiCad symbol: `Interface_UART:68C681`. Reference prefix: `U`.
 * @see https://www.elektronik.ropla.eu/pdf/stock/exa/xr68c681.pdf
 * Keywords: UART serial.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _68C681 extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: IP3; input. */
  "IP3": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: IP1; input. */
  "IP1": "4",
  /** Physical pin 5: A3; input. */
  "A3": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: IP0; input. */
  "IP0": "7",
  /** Physical pin 8: RWN; input. */
  "RWN": "8",
  /** Physical pin 9: DTACKN; output. */
  "DTACKN": "9",
  /** Physical pin 10: RXDB; input. */
  "RXDB": "10",
  /** Physical pin 11: TXDB; output. */
  "TXDB": "11",
  /** Physical pin 12: OP1; output. */
  "OP1": "12",
  /** Physical pin 13: OP3; output. */
  "OP3": "13",
  /** Physical pin 14: OP5; output. */
  "OP5": "14",
  /** Physical pin 15: OP7; output. */
  "OP7": "15",
  /** Physical pin 16: D1; input. */
  "D1": "16",
  /** Physical pin 17: D3; input. */
  "D3": "17",
  /** Physical pin 18: D5; input. */
  "D5": "18",
  /** Physical pin 19: D7; input. */
  "D7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: INTRN; output. */
  "INTRN": "21",
  /** Physical pin 22: D6; input. */
  "D6": "22",
  /** Physical pin 23: D4; input. */
  "D4": "23",
  /** Physical pin 24: D2; input. */
  "D2": "24",
  /** Physical pin 25: D0; input. */
  "D0": "25",
  /** Physical pin 26: OP6; output. */
  "OP6": "26",
  /** Physical pin 27: OP4; output. */
  "OP4": "27",
  /** Physical pin 28: OP2; output. */
  "OP2": "28",
  /** Physical pin 29: OP0; output. */
  "OP0": "29",
  /** Physical pin 30: TXDA; output. */
  "TXDA": "30",
  /** Physical pin 31: RXDA; input. */
  "RXDA": "31",
  /** Physical pin 32: X1/CLK; input. */
  "X1/CLK": "32",
  /** Physical pin 33: X2; output. */
  "X2": "33",
  /** Physical pin 34: RESETN; input. */
  "RESETN": "34",
  /** Physical pin 35: CSN; input. */
  "CSN": "35",
  /** Physical pin 36: IP2; input. */
  "IP2": "36",
  /** Physical pin 37: IACKN; input. */
  "IACKN": "37",
  /** Physical pin 38: IP5; input. */
  "IP5": "38",
  /** Physical pin 39: IP4; input. */
  "IP4": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "Interface_UART:68C681";
  override referencePrefix = "U";
}

/**
 * PC8250A, Universal Asynchronous Receiver/Transmitter, PDIP-40
 *
 * KiCad symbol: `Interface_UART:8250`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * Keywords: 1ch UART.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8250 extends Component.withPins({
  /** Physical pin 1: D0; bidirectional. */
  "D0": "1",
  /** Physical pin 2: D1; bidirectional. */
  "D1": "2",
  /** Physical pin 3: D2; bidirectional. */
  "D2": "3",
  /** Physical pin 4: D3; bidirectional. */
  "D3": "4",
  /** Physical pin 5: D4; bidirectional. */
  "D4": "5",
  /** Physical pin 6: D5; bidirectional. */
  "D5": "6",
  /** Physical pin 7: D6; bidirectional. */
  "D6": "7",
  /** Physical pin 8: D7; bidirectional. */
  "D7": "8",
  /** Physical pin 9: RCLK; input. */
  "RCLK": "9",
  /** Physical pin 10: SIN; input. */
  "SIN": "10",
  /** Physical pin 11: SOUT; output. */
  "SOUT": "11",
  /** Physical pin 12: CS0; input. */
  "CS0": "12",
  /** Physical pin 13: CS1; input. */
  "CS1": "13",
  /** Physical pin 14: ~{CS2}; input. */
  "~{CS2}": "14",
  /** Physical pin 15: ~{BAUDOUT}; output. */
  "~{BAUDOUT}": "15",
  /** Physical pin 16: XIN; input. */
  "XIN": "16",
  /** Physical pin 17: XOUT; output. */
  "XOUT": "17",
  /** Physical pin 18: ~{WR}; input. */
  "~{WR}": "18",
  /** Physical pin 19: WR; input. */
  "WR": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: ~{RD}; input. */
  "~{RD}": "21",
  /** Physical pin 22: RD; input. */
  "RD": "22",
  /** Physical pin 23: DDIS; output. */
  "DDIS": "23",
  /** Physical pin 24: CSOUT; output. */
  "CSOUT": "24",
  /** Physical pin 25: ~{ADS}; input. */
  "~{ADS}": "25",
  /** Physical pin 26: A2; input. */
  "A2": "26",
  /** Physical pin 27: A1; input. */
  "A1": "27",
  /** Physical pin 28: A0; input. */
  "A0": "28",
  /** Physical pin 30: INTR; output. */
  "INTR": "30",
  /** Physical pin 31: ~{OUT2}; output. */
  "~{OUT2}": "31",
  /** Physical pin 32: ~{RTS}; output. */
  "~{RTS}": "32",
  /** Physical pin 33: ~{DTR}; output. */
  "~{DTR}": "33",
  /** Physical pin 34: ~{OUT1}; output. */
  "~{OUT1}": "34",
  /** Physical pin 35: MR; input. */
  "MR": "35",
  /** Physical pin 36: ~{CTS}; input. */
  "~{CTS}": "36",
  /** Physical pin 37: ~{DSR}; input. */
  "~{DSR}": "37",
  /** Physical pin 38: ~{DCD}; input. */
  "~{DCD}": "38",
  /** Physical pin 39: ~{RI}; input. */
  "~{RI}": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "Interface_UART:8250";
  override referencePrefix = "U";
}

/**
 * Universal Asynchronous Receiver/Transmitter, PDIP-28
 *
 * KiCad symbol: `Interface_UART:8252`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * Keywords: UART Serial Interface.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8252 extends Component.withPins({
  /** Physical pin 1: ~{RD}; input. */
  "~{RD}": "1",
  /** Physical pin 2: ~{WR}; input. */
  "~{WR}": "2",
  /** Physical pin 3: D0; bidirectional. */
  "D0": "3",
  /** Physical pin 4: D1; bidirectional. */
  "D1": "4",
  /** Physical pin 5: D2; bidirectional. */
  "D2": "5",
  /** Physical pin 6: D3; bidirectional. */
  "D3": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D5; bidirectional. */
  "D5": "8",
  /** Physical pin 9: D6; bidirectional. */
  "D6": "9",
  /** Physical pin 10: D7; bidirectional. */
  "D7": "10",
  /** Physical pin 11: A0; input. */
  "A0": "11",
  /** Physical pin 12: A1; input. */
  "A1": "12",
  /** Physical pin 13: IX; input. */
  "IX": "13",
  /** Physical pin 14: OX; output. */
  "OX": "14",
  /** Physical pin 15: (TXD)SDO; output. */
  "(TXD)SDO": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: ~{CTS}; input. */
  "~{CTS}": "17",
  /** Physical pin 18: ~{DSR}; input. */
  "~{DSR}": "18",
  /** Physical pin 19: ~{DTR}; output. */
  "~{DTR}": "19",
  /** Physical pin 20: ~{RTS}; output. */
  "~{RTS}": "20",
  /** Physical pin 21: CO; output. */
  "CO": "21",
  /** Physical pin 22: TBRE; output. */
  "TBRE": "22",
  /** Physical pin 23: RST; input. */
  "RST": "23",
  /** Physical pin 24: INTR; output. */
  "INTR": "24",
  /** Physical pin 25: (RXD)SDI; input. */
  "(RXD)SDI": "25",
  /** Physical pin 26: DR; output. */
  "DR": "26",
  /** Physical pin 27: VCC; power_in. */
  "VCC": "27",
  /** Physical pin 28: CS0; input. */
  "CS0": "28",
}) {
  override schema = "Interface_UART:8252";
  override referencePrefix = "U";
}

/**
 * Single RS232 driver/receiver, 5V supply, 460kb/s
 *
 * KiCad symbol: `Interface_UART:ADM101E`. Reference prefix: `U`.
 * Footprint filters: MSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM101E.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM101E extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: C1-; passive. */
  "C1-": "2",
  /** Physical pin 3: VS-; power_out. */
  "VS-": "3",
  /** Physical pin 4: T1IN; input. */
  "T1IN": "4",
  /** Physical pin 5: R1OUT; output. */
  "R1OUT": "5",
  /** Physical pin 6: R1IN; input. */
  "R1IN": "6",
  /** Physical pin 7: T1OUT; output. */
  "T1OUT": "7",
  /** Physical pin 8: SD; input. */
  "SD": "8",
  /** Physical pin 9: C1+; passive. */
  "C1+": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Interface_UART:ADM101E";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half-duplex 20Mbps transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:LTC2850xS8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2850xS8 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:LTC2850xS8";
  override referencePrefix = "U";
}

/**
 * 5V, Low Power, EIA RS-485 Transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:ADM1485xRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adm1485.pdf
 * Keywords: RS485 transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM1485xRZ extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:ADM1485xRZ";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 full duplex 16Mbps transceiver, SOIC-14
 *
 * KiCad symbol: `Interface_UART:ADM1491EBR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM1490E_1491E.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM1491EBR extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC_13": "13",
  /** Physical pin 14: VCC; passive. */
  "VCC_14": "14",
}) {
  override schema = "Interface_UART:ADM1491EBR";
  override referencePrefix = "U";
}

/**
 * 0.1 μF, 5V powered CMOS RS-232 120kb/s transceiver with 5 drivers and 5 receivers (tx/rx: 5/5), shutdown / enable pins, DIP-24 (600 mil)
 *
 * KiCad symbol: `Interface_UART:ADM205`. Reference prefix: `U`.
 * Footprint filters: *DIP*W15.*.
 * @see https://www.analog.com/media/en/technical-documentation/obsolete-data-sheets/17659925ADM205.PDF
 * Keywords: UART RS232 Obsolete.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM205 extends Component.withPins({
  /** Physical pin 1: T4OUT; output. */
  "T4OUT": "1",
  /** Physical pin 2: T3OUT; output. */
  "T3OUT": "2",
  /** Physical pin 15: T3IN; input. */
  "T3IN": "15",
  /** Physical pin 16: T4IN; input. */
  "T4IN": "16",
  /** Physical pin 19: T5OUT; output. */
  "T5OUT": "19",
  /** Physical pin 22: T5IN; input. */
  "T5IN": "22",
  /** Physical pin 3: T1OUT; output. */
  "T1OUT": "3",
  /** Physical pin 4: T2OUT; output. */
  "T2OUT": "4",
  /** Physical pin 5: R2IN; input. */
  "R2IN": "5",
  /** Physical pin 6: R2OUT; tri_state. */
  "R2OUT": "6",
  /** Physical pin 7: T2IN; input. */
  "T2IN": "7",
  /** Physical pin 8: T1IN; input. */
  "T1IN": "8",
  /** Physical pin 9: R1OUT; tri_state. */
  "R1OUT": "9",
  /** Physical pin 10: R1IN; input. */
  "R1IN": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: R5IN; input. */
  "R5IN": "13",
  /** Physical pin 14: R5OUT; tri_state. */
  "R5OUT": "14",
  /** Physical pin 17: R4OUT; tri_state. */
  "R4OUT": "17",
  /** Physical pin 18: R4IN; input. */
  "R4IN": "18",
  /** Physical pin 20: ~{EN}; input. */
  "~{EN}": "20",
  /** Physical pin 21: SD; input. */
  "SD": "21",
  /** Physical pin 23: R3OUT; tri_state. */
  "R3OUT": "23",
  /** Physical pin 24: R3IN; input. */
  "R3IN": "24",
}) {
  override schema = "Interface_UART:ADM205";
  override referencePrefix = "U";
}

/**
 * 0.1 μF, 5V powered CMOS RS-232 120kb/s transceiver with 4 drivers and 3 receivers (tx/rx: 4/3), shutdown / enable pins, DIP-24 (300 mil) / SOIC-24 / SSOP-24
 *
 * KiCad symbol: `Interface_UART:ADM206`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62*, *SOIC*7.*15.*P1.27mm*, *SSOP*5.3*8.*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM206_207_208_211_213.pdf
 * Keywords: UART RS232.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM206 extends Component.withPins({
  /** Physical pin 1: T3OUT; output. */
  "T3OUT": "1",
  /** Physical pin 18: T3IN; input. */
  "T3IN": "18",
  /** Physical pin 19: T4IN; input. */
  "T4IN": "19",
  /** Physical pin 24: T4OUT; output. */
  "T4OUT": "24",
  /** Physical pin 2: T1OUT; output. */
  "T1OUT": "2",
  /** Physical pin 3: T2OUT; output. */
  "T2OUT": "3",
  /** Physical pin 4: R1IN; input. */
  "R1IN": "4",
  /** Physical pin 5: R1OUT; tri_state. */
  "R1OUT": "5",
  /** Physical pin 6: T2IN; input. */
  "T2IN": "6",
  /** Physical pin 7: T1IN; input. */
  "T1IN": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: C1+; passive. */
  "C1+": "10",
  /** Physical pin 11: V+; power_out. */
  "V+": "11",
  /** Physical pin 12: C1-; passive. */
  "C1-": "12",
  /** Physical pin 13: C2+; passive. */
  "C2+": "13",
  /** Physical pin 14: C2-; passive. */
  "C2-": "14",
  /** Physical pin 15: V-; power_out. */
  "V-": "15",
  /** Physical pin 16: R3IN; input. */
  "R3IN": "16",
  /** Physical pin 17: R3OUT; tri_state. */
  "R3OUT": "17",
  /** Physical pin 20: ~{EN}; input. */
  "~{EN}": "20",
  /** Physical pin 21: SD; input. */
  "SD": "21",
  /** Physical pin 22: R2OUT; tri_state. */
  "R2OUT": "22",
  /** Physical pin 23: R2IN; input. */
  "R2IN": "23",
}) {
  override schema = "Interface_UART:ADM206";
  override referencePrefix = "U";
}

/**
 * 0.1 μF, 5V powered CMOS RS-232 120kb/s transceiver with 5 drivers and 3 receivers (tx/rx: 5/3), DIP-24 (300 mil) / SOIC-24 / SSOP-24
 *
 * KiCad symbol: `Interface_UART:ADM207`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62*, *SOIC*7.*15.*P1.27mm*, *SSOP*5.3*8.*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM206_207_208_211_213.pdf
 * Keywords: UART RS232.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM207 extends Component.withPins({
  /** Physical pin 1: T3OUT; output. */
  "T3OUT": "1",
  /** Physical pin 18: T3IN; input. */
  "T3IN": "18",
  /** Physical pin 19: T4IN; input. */
  "T4IN": "19",
  /** Physical pin 20: T5OUT; output. */
  "T5OUT": "20",
  /** Physical pin 21: T5IN; input. */
  "T5IN": "21",
  /** Physical pin 24: T4OUT; output. */
  "T4OUT": "24",
  /** Physical pin 2: T1OUT; output. */
  "T1OUT": "2",
  /** Physical pin 3: T2OUT; output. */
  "T2OUT": "3",
  /** Physical pin 4: R1IN; input. */
  "R1IN": "4",
  /** Physical pin 5: R1OUT; output. */
  "R1OUT": "5",
  /** Physical pin 6: T2IN; input. */
  "T2IN": "6",
  /** Physical pin 7: T1IN; input. */
  "T1IN": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: C1+; passive. */
  "C1+": "10",
  /** Physical pin 11: V+; power_out. */
  "V+": "11",
  /** Physical pin 12: C1-; passive. */
  "C1-": "12",
  /** Physical pin 13: C2+; passive. */
  "C2+": "13",
  /** Physical pin 14: C2-; passive. */
  "C2-": "14",
  /** Physical pin 15: V-; power_out. */
  "V-": "15",
  /** Physical pin 16: R3IN; input. */
  "R3IN": "16",
  /** Physical pin 17: R3OUT; output. */
  "R3OUT": "17",
  /** Physical pin 22: R2OUT; output. */
  "R2OUT": "22",
  /** Physical pin 23: R2IN; input. */
  "R2IN": "23",
}) {
  override schema = "Interface_UART:ADM207";
  override referencePrefix = "U";
}

/**
 * 0.1 μF, 5V powered CMOS RS-232 120kb/s transceiver with 4 drivers and 4 receivers (tx/rx: 4/4), DIP-24 (300 mil) / SOIC-24 / SSOP-24
 *
 * KiCad symbol: `Interface_UART:ADM208`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62*, *SOIC*7.*15.*P1.27mm*, *SSOP*5.3*8.*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM206_207_208_211_213.pdf
 * Keywords: UART RS232.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM208 extends Component.withPins({
  /** Physical pin 19: T3IN; input. */
  "T3IN": "19",
  /** Physical pin 20: T4OUT; output. */
  "T4OUT": "20",
  /** Physical pin 21: T4IN; input. */
  "T4IN": "21",
  /** Physical pin 24: T3OUT; output. */
  "T3OUT": "24",
  /** Physical pin 1: T2OUT; output. */
  "T2OUT": "1",
  /** Physical pin 2: T1OUT; output. */
  "T1OUT": "2",
  /** Physical pin 3: R2IN; input. */
  "R2IN": "3",
  /** Physical pin 4: R2OUT; output. */
  "R2OUT": "4",
  /** Physical pin 5: T1IN; input. */
  "T1IN": "5",
  /** Physical pin 6: R1OUT; output. */
  "R1OUT": "6",
  /** Physical pin 7: R1IN; input. */
  "R1IN": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: C1+; passive. */
  "C1+": "10",
  /** Physical pin 11: V+; power_out. */
  "V+": "11",
  /** Physical pin 12: C1-; passive. */
  "C1-": "12",
  /** Physical pin 13: C2+; passive. */
  "C2+": "13",
  /** Physical pin 14: C2-; passive. */
  "C2-": "14",
  /** Physical pin 15: V-; power_out. */
  "V-": "15",
  /** Physical pin 16: R4IN; input. */
  "R4IN": "16",
  /** Physical pin 17: R4OUT; output. */
  "R4OUT": "17",
  /** Physical pin 18: T2IN; input. */
  "T2IN": "18",
  /** Physical pin 22: R3OUT; output. */
  "R3OUT": "22",
  /** Physical pin 23: R3IN; input. */
  "R3IN": "23",
}) {
  override schema = "Interface_UART:ADM208";
  override referencePrefix = "U";
}

/**
 * 0.1 μF, 5V powered CMOS RS-232 120kb/s transceiver with 3 drivers and 5 receivers (tx/rx: 3/5), enable pin, external 9 V to 13.2 V supply, DIP-24 (300 mil) / SOIC-24 / SSOP-24
 *
 * KiCad symbol: `Interface_UART:ADM209`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62*, *SOIC*7.*15.*P1.27mm*, *SSOP*5.3*8.*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/obsolete-data-sheets/17659925ADM205.PDF
 * Keywords: UART RS232 Obsolete.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM209 extends Component.withPins({
  /** Physical pin 9: R5IN; input. */
  "R5IN": "9",
  /** Physical pin 10: R5OUT; tri_state. */
  "R5OUT": "10",
  /** Physical pin 13: T3OUT; output. */
  "T3OUT": "13",
  /** Physical pin 15: NC; no_connect. */
  "NC": "15",
  /** Physical pin 16: T3IN; input. */
  "T3IN": "16",
  /** Physical pin 1: R1OUT; tri_state. */
  "R1OUT": "1",
  /** Physical pin 2: R1IN; input. */
  "R1IN": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 6: C+; passive. */
  "C+": "6",
  /** Physical pin 7: C-; passive. */
  "C-": "7",
  /** Physical pin 8: V-; power_out. */
  "V-": "8",
  /** Physical pin 11: R4OUT; tri_state. */
  "R4OUT": "11",
  /** Physical pin 12: R4IN; input. */
  "R4IN": "12",
  /** Physical pin 14: ~{EN}; input. */
  "~{EN}": "14",
  /** Physical pin 17: R3OUT; tri_state. */
  "R3OUT": "17",
  /** Physical pin 18: R3IN; input. */
  "R3IN": "18",
  /** Physical pin 19: T1OUT; output. */
  "T1OUT": "19",
  /** Physical pin 20: T2OUT; output. */
  "T2OUT": "20",
  /** Physical pin 21: R2IN; input. */
  "R2IN": "21",
  /** Physical pin 22: R2OUT; tri_state. */
  "R2OUT": "22",
  /** Physical pin 23: T2IN; input. */
  "T2IN": "23",
  /** Physical pin 24: T1IN; input. */
  "T1IN": "24",
}) {
  override schema = "Interface_UART:ADM209";
  override referencePrefix = "U";
}

/**
 * 0.1 μF, 5V powered CMOS RS-232 120kb/s transceiver with 4 drivers and 5 receivers (tx/rx: 4/5), shutdown / enable pins, SOIC-28 / SSOP-28
 *
 * KiCad symbol: `Interface_UART:ADM211`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.*17.*P1.27mm*, *SSOP*5.3*10.*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM206_207_208_211_213.pdf
 * Keywords: UART RS232.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM211 extends Component.withPins({
  /** Physical pin 1: T3OUT; output. */
  "T3OUT": "1",
  /** Physical pin 20: T3IN; input. */
  "T3IN": "20",
  /** Physical pin 21: T4IN; input. */
  "T4IN": "21",
  /** Physical pin 28: T4OUT; output. */
  "T4OUT": "28",
  /** Physical pin 2: T1OUT; output. */
  "T1OUT": "2",
  /** Physical pin 3: T2OUT; output. */
  "T2OUT": "3",
  /** Physical pin 4: R2IN; input. */
  "R2IN": "4",
  /** Physical pin 5: R2OUT; tri_state. */
  "R2OUT": "5",
  /** Physical pin 6: T2IN; input. */
  "T2IN": "6",
  /** Physical pin 7: T1IN; input. */
  "T1IN": "7",
  /** Physical pin 8: R1OUT; tri_state. */
  "R1OUT": "8",
  /** Physical pin 9: R1IN; input. */
  "R1IN": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: C1+; passive. */
  "C1+": "12",
  /** Physical pin 13: V+; power_out. */
  "V+": "13",
  /** Physical pin 14: C1-; passive. */
  "C1-": "14",
  /** Physical pin 15: C2+; passive. */
  "C2+": "15",
  /** Physical pin 16: C2-; passive. */
  "C2-": "16",
  /** Physical pin 17: V-; power_out. */
  "V-": "17",
  /** Physical pin 18: R5IN; input. */
  "R5IN": "18",
  /** Physical pin 19: R5OUT; tri_state. */
  "R5OUT": "19",
  /** Physical pin 22: R4OUT; tri_state. */
  "R4OUT": "22",
  /** Physical pin 23: R4IN; input. */
  "R4IN": "23",
  /** Physical pin 24: ~{EN}; input. */
  "~{EN}": "24",
  /** Physical pin 25: SD; input. */
  "SD": "25",
  /** Physical pin 26: R3OUT; tri_state. */
  "R3OUT": "26",
  /** Physical pin 27: R3IN; input. */
  "R3IN": "27",
}) {
  override schema = "Interface_UART:ADM211";
  override referencePrefix = "U";
}

/**
 * 0.1 μF, 5V powered CMOS RS-232 120kb/s transceiver with 4 drivers and 5 receivers (tx/rx: 4/5; 2 receivers active in shutdown), shutdown / enable pins, SOIC-28 / SSOP-28
 *
 * KiCad symbol: `Interface_UART:ADM213`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.*17.*P1.27mm*, *SSOP*5.3*10.*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM206_207_208_211_213.pdf
 * Keywords: UART RS232.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM213 extends Component.withPins({
  /** Physical pin 1: T3OUT; output. */
  "T3OUT": "1",
  /** Physical pin 20: T3IN; input. */
  "T3IN": "20",
  /** Physical pin 21: T4IN; input. */
  "T4IN": "21",
  /** Physical pin 28: T4OUT; output. */
  "T4OUT": "28",
  /** Physical pin 2: T1OUT; output. */
  "T1OUT": "2",
  /** Physical pin 3: T2OUT; output. */
  "T2OUT": "3",
  /** Physical pin 4: R2IN; input. */
  "R2IN": "4",
  /** Physical pin 5: R2OUT; tri_state. */
  "R2OUT": "5",
  /** Physical pin 6: T2IN; input. */
  "T2IN": "6",
  /** Physical pin 7: T1IN; input. */
  "T1IN": "7",
  /** Physical pin 8: R1OUT; tri_state. */
  "R1OUT": "8",
  /** Physical pin 9: R1IN; input. */
  "R1IN": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: C1+; passive. */
  "C1+": "12",
  /** Physical pin 13: V+; power_out. */
  "V+": "13",
  /** Physical pin 14: C1-; passive. */
  "C1-": "14",
  /** Physical pin 15: C2+; passive. */
  "C2+": "15",
  /** Physical pin 16: C2-; passive. */
  "C2-": "16",
  /** Physical pin 17: V-; power_out. */
  "V-": "17",
  /** Physical pin 18: R5IN; input. */
  "R5IN": "18",
  /** Physical pin 19: R5OUT; tri_state. */
  "R5OUT": "19",
  /** Physical pin 22: R4OUT; tri_state. */
  "R4OUT": "22",
  /** Physical pin 23: R4IN; input. */
  "R4IN": "23",
  /** Physical pin 24: EN; input. */
  "EN": "24",
  /** Physical pin 25: ~{SD}; input. */
  "~{SD}": "25",
  /** Physical pin 26: R3OUT; tri_state. */
  "R3OUT": "26",
  /** Physical pin 27: R3IN; input. */
  "R3IN": "27",
}) {
  override schema = "Interface_UART:ADM213";
  override referencePrefix = "U";
}

/**
 * Dual RS232 driver/receiver, 5V supply, 120kb/s
 *
 * KiCad symbol: `Interface_UART:LT1080`. Reference prefix: `U`.
 * Footprint filters: SO*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/10801fe.pdf
 * Keywords: rs232 uart transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1080 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: C1+; passive. */
  "C1+": "2",
  /** Physical pin 3: V+; power_out. */
  "V+": "3",
  /** Physical pin 4: C1-; passive. */
  "C1-": "4",
  /** Physical pin 5: C2+; passive. */
  "C2+": "5",
  /** Physical pin 6: C2-; passive. */
  "C2-": "6",
  /** Physical pin 7: V-; power_out. */
  "V-": "7",
  /** Physical pin 8: T2OUT; output. */
  "T2OUT": "8",
  /** Physical pin 9: R2IN; input. */
  "R2IN": "9",
  /** Physical pin 10: R2OUT; output. */
  "R2OUT": "10",
  /** Physical pin 11: T2IN; input. */
  "T2IN": "11",
  /** Physical pin 12: T1IN; input. */
  "T1IN": "12",
  /** Physical pin 13: R1OUT; output. */
  "R1OUT": "13",
  /** Physical pin 14: R1IN; input. */
  "R1IN": "14",
  /** Physical pin 15: T1OUT; output. */
  "T1OUT": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: VCC; power_in. */
  "VCC": "17",
  /** Physical pin 18: ON/~{OFF}; input. */
  "ON/~{OFF}": "18",
}) {
  override schema = "Interface_UART:LT1080";
  override referencePrefix = "U";
}

/**
 * Dual RS232 driver/receiver, 5V supply, 200kb/s
 *
 * KiCad symbol: `Interface_UART:ADM222`. Reference prefix: `U`.
 * Footprint filters: SO*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM222_232A_242.pdf
 * Keywords: rs232 uart transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM222 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: C1+; passive. */
  "C1+": "2",
  /** Physical pin 3: V+; power_out. */
  "V+": "3",
  /** Physical pin 4: C1-; passive. */
  "C1-": "4",
  /** Physical pin 5: C2+; passive. */
  "C2+": "5",
  /** Physical pin 6: C2-; passive. */
  "C2-": "6",
  /** Physical pin 7: V-; power_out. */
  "V-": "7",
  /** Physical pin 8: T2OUT; output. */
  "T2OUT": "8",
  /** Physical pin 9: R2IN; input. */
  "R2IN": "9",
  /** Physical pin 10: R2OUT; output. */
  "R2OUT": "10",
  /** Physical pin 11: T2IN; input. */
  "T2IN": "11",
  /** Physical pin 12: T1IN; input. */
  "T1IN": "12",
  /** Physical pin 13: R1OUT; output. */
  "R1OUT": "13",
  /** Physical pin 14: R1IN; input. */
  "R1IN": "14",
  /** Physical pin 15: T1OUT; output. */
  "T1OUT": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: VCC; power_in. */
  "VCC": "17",
  /** Physical pin 18: ON/~{OFF}; input. */
  "ON/~{OFF}": "18",
}) {
  override schema = "Interface_UART:ADM222";
  override referencePrefix = "U";
}

/**
 * Dual RS232 driver/receiver, 5V supply, 120kb/s, 0C-70C
 *
 * KiCad symbol: `Interface_UART:MAX232`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/max232.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX232 extends Component.withPins({
  /** Physical pin 1: C1+; passive. */
  "C1+": "1",
  /** Physical pin 2: VS+; power_out. */
  "VS+": "2",
  /** Physical pin 3: C1-; passive. */
  "C1-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: C2-; passive. */
  "C2-": "5",
  /** Physical pin 6: VS-; power_out. */
  "VS-": "6",
  /** Physical pin 7: T2OUT; output. */
  "T2OUT": "7",
  /** Physical pin 8: R2IN; input. */
  "R2IN": "8",
  /** Physical pin 9: R2OUT; output. */
  "R2OUT": "9",
  /** Physical pin 10: T2IN; input. */
  "T2IN": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: R1OUT; output. */
  "R1OUT": "12",
  /** Physical pin 13: R1IN; input. */
  "R1IN": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:MAX232";
  override referencePrefix = "U";
}

/**
 * Dual RS232 driver/receiver, 5V supply, 200kb/s
 *
 * KiCad symbol: `Interface_UART:ADM232A`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM222_232A_242.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM232A extends Component.withPins({
  /** Physical pin 1: C1+; passive. */
  "C1+": "1",
  /** Physical pin 2: VS+; power_out. */
  "VS+": "2",
  /** Physical pin 3: C1-; passive. */
  "C1-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: C2-; passive. */
  "C2-": "5",
  /** Physical pin 6: VS-; power_out. */
  "VS-": "6",
  /** Physical pin 7: T2OUT; output. */
  "T2OUT": "7",
  /** Physical pin 8: R2IN; input. */
  "R2IN": "8",
  /** Physical pin 9: R2OUT; output. */
  "R2OUT": "9",
  /** Physical pin 10: T2IN; input. */
  "T2IN": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: R1OUT; output. */
  "R1OUT": "12",
  /** Physical pin 13: R1IN; input. */
  "R1IN": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:ADM232A";
  override referencePrefix = "U";
}

/**
 * Dual RS232 driver/receiver, 5V supply, 200kb/s, separate shutdown/enable pins
 *
 * KiCad symbol: `Interface_UART:ADM242`. Reference prefix: `U`.
 * Footprint filters: SO*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM222_232A_242.pdf
 * Keywords: rs232 uart transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM242 extends Component.withPins({
  /** Physical pin 1: ~{EN}; input. */
  "~{EN}": "1",
  /** Physical pin 2: C1+; passive. */
  "C1+": "2",
  /** Physical pin 3: V+; power_out. */
  "V+": "3",
  /** Physical pin 4: C1-; passive. */
  "C1-": "4",
  /** Physical pin 5: C2+; passive. */
  "C2+": "5",
  /** Physical pin 6: C2-; passive. */
  "C2-": "6",
  /** Physical pin 7: V-; power_out. */
  "V-": "7",
  /** Physical pin 8: T2OUT; output. */
  "T2OUT": "8",
  /** Physical pin 9: R2IN; input. */
  "R2IN": "9",
  /** Physical pin 10: R2OUT; output. */
  "R2OUT": "10",
  /** Physical pin 11: T2IN; input. */
  "T2IN": "11",
  /** Physical pin 12: T1IN; input. */
  "T1IN": "12",
  /** Physical pin 13: R1OUT; output. */
  "R1OUT": "13",
  /** Physical pin 14: R1IN; input. */
  "R1IN": "14",
  /** Physical pin 15: T1OUT; output. */
  "T1OUT": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: VCC; power_in. */
  "VCC": "17",
  /** Physical pin 18: ~{SHDN}; input. */
  "~{SHDN}": "18",
}) {
  override schema = "Interface_UART:ADM242";
  override referencePrefix = "U";
}

/**
 * Isolated RS485/RS422 Transceiver, Half-Duplex, 500kbps, SOIC-16W
 *
 * KiCad symbol: `Interface_UART:ADM2481xRW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adm2481.pdf
 * Keywords: rs-485 rs-422 eia485 eia-485 eia422 eia-422 serial differential.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM2481xRW extends Component.withPins({
  /** Physical pin 1: VDD1; power_in. */
  "VDD1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: RxD; output. */
  "RxD": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DE; input. */
  "DE": "5",
  /** Physical pin 6: TxD; input. */
  "TxD": "6",
  /** Physical pin 7: GND1; passive. */
  "GND1_7": "7",
  /** Physical pin 8: GND1; passive. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; passive. */
  "GND2_9": "9",
  /** Physical pin 10: GND2; passive. */
  "GND2_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: A; bidirectional. */
  "A": "12",
  /** Physical pin 13: B; bidirectional. */
  "B": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GND2; power_in. */
  "GND2_15": "15",
  /** Physical pin 16: VDD2; power_in. */
  "VDD2": "16",
}) {
  override schema = "Interface_UART:ADM2481xRW";
  override referencePrefix = "U";
}

/**
 * Isolated RS485/RS422 Transceiver, Half-Duplex, 500kbps, SOIC-16W
 *
 * KiCad symbol: `Interface_UART:ADM2483xRW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adm2483.pdf
 * Keywords: rs-485 rs-422 eia485 eia-485 eia422 eia-422 serial differential.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM2483xRW extends Component.withPins({
  /** Physical pin 1: VDD1; power_in. */
  "VDD1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: RxD; output. */
  "RxD": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DE; input. */
  "DE": "5",
  /** Physical pin 6: TxD; input. */
  "TxD": "6",
  /** Physical pin 7: PV; input. */
  "PV": "7",
  /** Physical pin 8: GND1; passive. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; passive. */
  "GND2_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: A; bidirectional. */
  "A": "12",
  /** Physical pin 13: B; bidirectional. */
  "B": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GND2; power_in. */
  "GND2_15": "15",
  /** Physical pin 16: VDD2; power_in. */
  "VDD2": "16",
}) {
  override schema = "Interface_UART:ADM2483xRW";
  override referencePrefix = "U";
}

/**
 * Isolated RS485/RS422 Transceiver, Half-/Full-Duplex, 500kbps,SOIC-16W
 *
 * KiCad symbol: `Interface_UART:ADM2484E`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM2484E.pdf
 * Keywords: RS485 Transceiver RS422 Transceiver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM2484E extends Component.withPins({
  /** Physical pin 1: VDD1; power_in. */
  "VDD1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: RxD; output. */
  "RxD": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DE; input. */
  "DE": "5",
  /** Physical pin 6: TxD; input. */
  "TxD": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: GND1; power_in. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: Y; output. */
  "Y": "11",
  /** Physical pin 12: Z; output. */
  "Z": "12",
  /** Physical pin 13: B; input. */
  "B": "13",
  /** Physical pin 14: A; input. */
  "A": "14",
  /** Physical pin 15: GND2; power_in. */
  "GND2_15": "15",
  /** Physical pin 16: VDD2; power_in. */
  "VDD2": "16",
}) {
  override schema = "Interface_UART:ADM2484E";
  override referencePrefix = "U";
}

/**
 * Isolated RS485/RS422 Transceiver,Integrated Isolated DC-DC Converter, 500kbps,SO-20
 *
 * KiCad symbol: `Interface_UART:ADM2587E`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see www.analog.com/media/en/technical-documentation/data-sheets/ADM2582E_2587E.pdf
 * Keywords: RS485 Transceiver,RS422 Transceiver.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM2587E extends Component.withPins({
  /** Physical pin 1: GND1; power_in. */
  "GND1_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC_2": "2",
  /** Physical pin 3: GND1; power_in. */
  "GND1_3": "3",
  /** Physical pin 4: RxD; output. */
  "RxD": "4",
  /** Physical pin 5: ~{RE}; input. */
  "~{RE}": "5",
  /** Physical pin 6: DE; input. */
  "DE": "6",
  /** Physical pin 7: TxD; input. */
  "TxD": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC_8": "8",
  /** Physical pin 9: GND1; power_in. */
  "GND1_9": "9",
  /** Physical pin 10: GND1; power_in. */
  "GND1_10": "10",
  /** Physical pin 11: GND2; power_in. */
  "GND2_11": "11",
  /** Physical pin 12: Visoout; power_out. */
  "Visoout": "12",
  /** Physical pin 13: Y; output. */
  "Y": "13",
  /** Physical pin 14: GND2; power_in. */
  "GND2_14": "14",
  /** Physical pin 15: Z; output. */
  "Z": "15",
  /** Physical pin 16: GND2; power_in. */
  "GND2_16": "16",
  /** Physical pin 17: B; input. */
  "B": "17",
  /** Physical pin 18: A; input. */
  "A": "18",
  /** Physical pin 19: Visoin; power_in. */
  "Visoin": "19",
  /** Physical pin 20: GND2; power_in. */
  "GND2_20": "20",
}) {
  override schema = "Interface_UART:ADM2587E";
  override referencePrefix = "U";
}

/**
 * Isolated RS485/RS422 Transceiver,Integrated Isolated DC-DC Converter, 16Mbps,SO-20
 *
 * KiCad symbol: `Interface_UART:ADM2582E`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see www.analog.com/media/en/technical-documentation/data-sheets/ADM2582E_2587E.pdf
 * Keywords: RS485 Transceiver,RS422 Transceiver.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM2582E extends Component.withPins({
  /** Physical pin 1: GND1; power_in. */
  "GND1_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC_2": "2",
  /** Physical pin 3: GND1; power_in. */
  "GND1_3": "3",
  /** Physical pin 4: RxD; output. */
  "RxD": "4",
  /** Physical pin 5: ~{RE}; input. */
  "~{RE}": "5",
  /** Physical pin 6: DE; input. */
  "DE": "6",
  /** Physical pin 7: TxD; input. */
  "TxD": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC_8": "8",
  /** Physical pin 9: GND1; power_in. */
  "GND1_9": "9",
  /** Physical pin 10: GND1; power_in. */
  "GND1_10": "10",
  /** Physical pin 11: GND2; power_in. */
  "GND2_11": "11",
  /** Physical pin 12: Visoout; power_out. */
  "Visoout": "12",
  /** Physical pin 13: Y; output. */
  "Y": "13",
  /** Physical pin 14: GND2; power_in. */
  "GND2_14": "14",
  /** Physical pin 15: Z; output. */
  "Z": "15",
  /** Physical pin 16: GND2; power_in. */
  "GND2_16": "16",
  /** Physical pin 17: B; input. */
  "B": "17",
  /** Physical pin 18: A; input. */
  "A": "18",
  /** Physical pin 19: Visoin; power_in. */
  "Visoin": "19",
  /** Physical pin 20: GND2; power_in. */
  "GND2_20": "20",
}) {
  override schema = "Interface_UART:ADM2582E";
  override referencePrefix = "U";
}

/**
 * Isolated RS485/RS422 Transceiver, Integrated Isolated DC-DC Converter, 16Mbps, SOIC-16W
 *
 * KiCad symbol: `Interface_UART:ADM2682E`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM2682E_2687E.pdf
 * Keywords: RS485 Transceiver, RS422 Transceiver, Isopower.
 * Default footprint: Package_SO:SOIC-16W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM2682E extends Component.withPins({
  /** Physical pin 1: GND1; power_in. */
  "GND1_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC_2": "2",
  /** Physical pin 3: RXD; output. */
  "RXD": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DE; input. */
  "DE": "5",
  /** Physical pin 6: TXD; input. */
  "TXD": "6",
  /** Physical pin 7: VCC; passive. */
  "VCC_7": "7",
  /** Physical pin 8: GND1; passive. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: VISOOUT; power_in. */
  "VISOOUT": "10",
  /** Physical pin 11: Y; output. */
  "Y": "11",
  /** Physical pin 12: Z; output. */
  "Z": "12",
  /** Physical pin 13: B; input. */
  "B": "13",
  /** Physical pin 14: A; input. */
  "A": "14",
  /** Physical pin 15: VISOIN; power_in. */
  "VISOIN": "15",
  /** Physical pin 16: GND2; passive. */
  "GND2_16": "16",
}) {
  override schema = "Interface_UART:ADM2682E";
  override referencePrefix = "U";
}

/**
 * Isolated RS485/RS422 Transceiver, Integrated Isolated DC-DC Converter, 500kbps, SOIC-16W
 *
 * KiCad symbol: `Interface_UART:ADM2687E`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM2682E_2687E.pdf
 * Keywords: RS485 Transceiver, RS422 Transceiver, Isopower.
 * Default footprint: Package_SO:SOIC-16W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM2687E extends Component.withPins({
  /** Physical pin 1: GND1; power_in. */
  "GND1_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC_2": "2",
  /** Physical pin 3: RXD; output. */
  "RXD": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DE; input. */
  "DE": "5",
  /** Physical pin 6: TXD; input. */
  "TXD": "6",
  /** Physical pin 7: VCC; passive. */
  "VCC_7": "7",
  /** Physical pin 8: GND1; passive. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: VISOOUT; power_in. */
  "VISOOUT": "10",
  /** Physical pin 11: Y; output. */
  "Y": "11",
  /** Physical pin 12: Z; output. */
  "Z": "12",
  /** Physical pin 13: B; input. */
  "B": "13",
  /** Physical pin 14: A; input. */
  "A": "14",
  /** Physical pin 15: VISOIN; power_in. */
  "VISOIN": "15",
  /** Physical pin 16: GND2; passive. */
  "GND2_16": "16",
}) {
  override schema = "Interface_UART:ADM2687E";
  override referencePrefix = "U";
}

/**
 * 3.3V, Slew Rate Limited, Half- and Full-Duplex, RS-485/RS-422 Transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:ADM3485xR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adm3483_3485_3488_3490_3491.pdf
 * Keywords: RS485 transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM3485xR extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:ADM3485xR";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 full duplex 12 Mbps transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:ADM3490ExR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM3483E_3486E_3488E_3490E_3491E.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM3490ExR extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:ADM3490ExR";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 full duplex 250 kbps transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:ADM3488ExR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM3483E_3486E_3488E_3490E_3491E.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM3488ExR extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:ADM3488ExR";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 full duplex 12 Mbps transceiver, SOIC-14
 *
 * KiCad symbol: `Interface_UART:ADM3491ExR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM3483E_3486E_3488E_3490E_3491E.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM3491ExR extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC_13": "13",
  /** Physical pin 14: VCC; passive. */
  "VCC_14": "14",
}) {
  override schema = "Interface_UART:ADM3491ExR";
  override referencePrefix = "U";
}

/**
 * RS232 interface IC, 3 drivers, 5 receivers, 3.3V/5V Vcc supply, bipolar Vdd/Vss supply, 120kb/s, SOIC-20
 *
 * KiCad symbol: `Interface_UART:AZ75232M`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.diodes.com/assets/Datasheets/AZ75232.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AZ75232M extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:AZ75232M";
  override referencePrefix = "U";
}

/**
 * RS232 interface IC, 3 drivers, 5 receivers, 3.3V/5V Vcc supply, bipolar Vdd/Vss supply, 120kb/s, TSSOP-20
 *
 * KiCad symbol: `Interface_UART:AZ75232G`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.diodes.com/assets/Datasheets/AZ75232.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AZ75232G extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:AZ75232G";
  override referencePrefix = "U";
}

/**
 * RS232 interface IC, 3 drivers, 5 receivers, 3.3V/5V Vcc supply, bipolar Vdd/Vss supply, 120kb/s, SSOP-20
 *
 * KiCad symbol: `Interface_UART:AZ75232GS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see https://www.diodes.com/assets/Datasheets/AZ75232.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AZ75232GS extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:AZ75232GS";
  override referencePrefix = "U";
}

/**
 * Multiple RS-232 Driver and Receiver, SSOP-20
 *
 * KiCad symbol: `Interface_UART:GD65232DB`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/gd75232.pdf
 * Keywords: RS232 UART Driver Receiver Interface.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD65232DB extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:GD65232DB";
  override referencePrefix = "U";
}

/**
 * Multiple RS-232 Driver and Receiver, SOIC-20
 *
 * KiCad symbol: `Interface_UART:GD65232DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/gd75232.pdf
 * Keywords: RS232 UART Driver Receiver Interface.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD65232DW extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:GD65232DW";
  override referencePrefix = "U";
}

/**
 * Multiple RS-232 Driver and Receiver, TSSOP-20
 *
 * KiCad symbol: `Interface_UART:GD65232PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*.
 * @see http://www.ti.com/lit/ds/symlink/gd75232.pdf
 * Keywords: RS232 UART Driver Receiver Interface.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD65232PW extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:GD65232PW";
  override referencePrefix = "U";
}

/**
 * Multiple RS-232 Driver and Receiver, SSOP-20
 *
 * KiCad symbol: `Interface_UART:GD75232DB`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/gd75232.pdf
 * Keywords: RS232 UART Driver Receiver Interface.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD75232DB extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:GD75232DB";
  override referencePrefix = "U";
}

/**
 * Multiple RS-232 Driver and Receiver, SOIC-20
 *
 * KiCad symbol: `Interface_UART:GD75232DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/gd75232.pdf
 * Keywords: RS232 UART Driver Receiver Interface.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD75232DW extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:GD75232DW";
  override referencePrefix = "U";
}

/**
 * Multiple RS-232 Driver and Receiver, DIP-20
 *
 * KiCad symbol: `Interface_UART:GD75232N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/gd75232.pdf
 * Keywords: RS232 UART Driver Receiver Interface.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD75232N extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:GD75232N";
  override referencePrefix = "U";
}

/**
 * Multiple RS-232 Driver and Receiver, TSSOP-20
 *
 * KiCad symbol: `Interface_UART:GD75232PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*.
 * @see http://www.ti.com/lit/ds/symlink/gd75232.pdf
 * Keywords: RS232 UART Driver Receiver Interface.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD75232PW extends Component.withPins({
  /** Physical pin 17: RY3; output. */
  "RY3": "17",
  /** Physical pin 18: RY2; output. */
  "RY2": "18",
  /** Physical pin 19: RY1; output. */
  "RY1": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: RA1; input. */
  "RA1": "2",
  /** Physical pin 3: RA2; input. */
  "RA2": "3",
  /** Physical pin 4: RA3; input. */
  "RA3": "4",
  /** Physical pin 5: DY1; output. */
  "DY1": "5",
  /** Physical pin 6: DY2; output. */
  "DY2": "6",
  /** Physical pin 7: RA4; input. */
  "RA4": "7",
  /** Physical pin 8: DY3; output. */
  "DY3": "8",
  /** Physical pin 9: RA5; input. */
  "RA5": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: RY5; output. */
  "RY5": "12",
  /** Physical pin 13: DA3; input. */
  "DA3": "13",
  /** Physical pin 14: RY4; output. */
  "RY4": "14",
  /** Physical pin 15: DA2; input. */
  "DA2": "15",
  /** Physical pin 16: DA1; input. */
  "DA1": "16",
}) {
  override schema = "Interface_UART:GD75232PW";
  override referencePrefix = "U";
}

/**
 * 3.0V to 5.5V, Low-Power, up to 250kbps, True RS-232 Transceivers Using Four 0.1μF External Capacitors
 *
 * KiCad symbol: `Interface_UART:ICL3232`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/icl3/icl3221-22-23-32-41-43.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICL3232 extends Component.withPins({
  /** Physical pin 1: C1+; passive. */
  "C1+": "1",
  /** Physical pin 2: VS+; power_out. */
  "VS+": "2",
  /** Physical pin 3: C1-; passive. */
  "C1-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: C2-; passive. */
  "C2-": "5",
  /** Physical pin 6: VS-; power_out. */
  "VS-": "6",
  /** Physical pin 7: T2OUT; output. */
  "T2OUT": "7",
  /** Physical pin 8: R2IN; input. */
  "R2IN": "8",
  /** Physical pin 9: R2OUT; output. */
  "R2OUT": "9",
  /** Physical pin 10: T2IN; input. */
  "T2IN": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: R1OUT; output. */
  "R1OUT": "12",
  /** Physical pin 13: R1IN; input. */
  "R1IN": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:ICL3232";
  override referencePrefix = "U";
}

/**
 * 250kbps, 3.3V RS-485 transceiver, ±15-kV IEC ESD protection, -7V..+12V common mode voltage, slew-rate limit, SO-8
 *
 * KiCad symbol: `Interface_UART:ISL3172E`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.renesas.com/en/document/dst/isl3170e-isl3171e-isl3172e-isl3173e-isl3174e-isl3175e-isl3176e-isl3177e-isl3178e-datasheet
 * Keywords: RS485 RS422 transceiver half-duplex renesas.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3172E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:ISL3172E";
  override referencePrefix = "U";
}

/**
 * 500kbps, 3.3V RS-485 transceiver, ±15-kV IEC ESD protection, -7V..+12V common mode voltage, slew-rate limit, SO-8
 *
 * KiCad symbol: `Interface_UART:ISL3175E`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.renesas.com/en/document/dst/isl3170e-isl3171e-isl3172e-isl3173e-isl3174e-isl3175e-isl3176e-isl3177e-isl3178e-datasheet
 * Keywords: RS485 RS422 transceiver half-duplex renesas.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3175E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:ISL3175E";
  override referencePrefix = "U";
}

/**
 * 20Mbps, 3.3V RS-485 transceiver, ±15-kV IEC ESD protection, -7V..+12V common mode voltage, SO-8
 *
 * KiCad symbol: `Interface_UART:ISL3178E`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.renesas.com/en/document/dst/isl3170e-isl3171e-isl3172e-isl3173e-isl3174e-isl3175e-isl3176e-isl3177e-isl3178e-datasheet
 * Keywords: RS485 RS422 transceiver half-duplex renesas.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3178E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:ISL3178E";
  override referencePrefix = "U";
}

/**
 * RS485, RS422, 20Mbps Transceiver, 3.0V to 5.5V, SOT-23-5
 *
 * KiCad symbol: `Interface_UART:ISL3280ExHZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.renesas.com/us/en/www/doc/datasheet/isl3280e-81e-82e-83e-84e-85e.pdf
 * Keywords: Interface Driver Receiver Transceiver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3280ExHZ extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RO; output. */
  "RO": "3",
  /** Physical pin 4: B; input. */
  "B": "4",
  /** Physical pin 5: A; input. */
  "A": "5",
}) {
  override schema = "Interface_UART:ISL3280ExHZ";
  override referencePrefix = "U";
}

/**
 * RS485, RS422, 20Mbps Transceiver, 3.0V to 5.5V, SOT-23-6
 *
 * KiCad symbol: `Interface_UART:ISL3281ExHZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.renesas.com/us/en/www/doc/datasheet/isl3280e-81e-82e-83e-84e-85e.pdf
 * Keywords: Interface - Driver Receiver Transceiver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3281ExHZ extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RO; output. */
  "RO": "3",
  /** Physical pin 4: B; input. */
  "B": "4",
  /** Physical pin 5: RE; input. */
  "RE": "5",
  /** Physical pin 6: A; input. */
  "A": "6",
}) {
  override schema = "Interface_UART:ISL3281ExHZ";
  override referencePrefix = "U";
}

/**
 * RS485, RS422, 20Mbps Transceiver, 3.0V to 5.5V, TDFN-8
 *
 * KiCad symbol: `Interface_UART:ISL3282ExRHZ`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see https://www.renesas.com/us/en/www/doc/datasheet/isl3280e-81e-82e-83e-84e-85e.pdf
 * Keywords: Interface Driver Receiver Transceiver.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.80x1.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3282ExRHZ extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: A; input. */
  "A": "5",
  /** Physical pin 6: VL; power_in. */
  "VL": "6",
  /** Physical pin 7: ~{RE}; input. */
  "~{RE}": "7",
  /** Physical pin 8: B; input. */
  "B": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Interface_UART:ISL3282ExRHZ";
  override referencePrefix = "U";
}

/**
 * RS485, RS422, 20Mbps Transceiver, 3.0V to 5.5V, SOT-23-6
 *
 * KiCad symbol: `Interface_UART:ISL3283ExHZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.renesas.com/us/en/www/doc/datasheet/isl3280e-81e-82e-83e-84e-85e.pdf
 * Keywords: Interface Driver Receiver Transceiver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3283ExHZ extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RO; output. */
  "RO": "3",
  /** Physical pin 4: B; input. */
  "B": "4",
  /** Physical pin 5: ~{RE}; input. */
  "~{RE}": "5",
  /** Physical pin 6: A; input. */
  "A": "6",
}) {
  override schema = "Interface_UART:ISL3283ExHZ";
  override referencePrefix = "U";
}

/**
 * RS485, RS422, 20Mbps Transceiver, 3.0V to 5.5V, SOT-23-6
 *
 * KiCad symbol: `Interface_UART:ISL3284ExHZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.renesas.com/us/en/www/doc/datasheet/isl3280e-81e-82e-83e-84e-85e.pdf
 * Keywords: Interface Driver Receiver Transceiver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3284ExHZ extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RO; output. */
  "RO": "3",
  /** Physical pin 4: B; input. */
  "B": "4",
  /** Physical pin 5: VL; power_in. */
  "VL": "5",
  /** Physical pin 6: A; input. */
  "A": "6",
}) {
  override schema = "Interface_UART:ISL3284ExHZ";
  override referencePrefix = "U";
}

/**
 * RS485, RS422, 20Mbps Transceiver, 3.0V to 7V, Low-Power, SOT-23
 *
 * KiCad symbol: `Interface_UART:ISL3295xxH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.renesas.com/sg/en/www/doc/datasheet/isl3295e-98e.pdf
 * Keywords: RS485 RS422 transceiver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3295xxH extends Component.withPins({
  /** Physical pin 1: DI; input. */
  "DI": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: Z; output. */
  "Z": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: Y; output. */
  "Y": "6",
}) {
  override schema = "Interface_UART:ISL3295xxH";
  override referencePrefix = "U";
}

/**
 * RS485, RS422, 20Mbps Transceiver, 3.0V to 7V, Low-Power, TDFN-8
 *
 * KiCad symbol: `Interface_UART:ISL3298xxRT`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see https://www.renesas.com/sg/en/www/doc/datasheet/isl3295e-98e.pdf
 * Keywords: RS485 RS422 transceiver.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.80x1.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL3298xxRT extends Component.withPins({
  /** Physical pin 1: VL; power_in. */
  "VL": "1",
  /** Physical pin 2: DE; input. */
  "DE": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: Y; output. */
  "Y": "6",
  /** Physical pin 7: Z; output. */
  "Z": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Interface_UART:ISL3298xxRT";
  override referencePrefix = "U";
}

/**
 * 10Mbps RS485/RS422 transceiver, full duplex, receiver/driver enable, low power shutdown
 *
 * KiCad symbol: `Interface_UART:ISL83491`. Reference prefix: `U`.
 * Footprint filters: SOIC*, DIP*W7.62mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/isl8/isl83483-85-88-90-91.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL83491 extends Component.withPins({
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: ~{Z}; output. */
  "~{Z}": "10",
  /** Physical pin 11: ~{B}; input. */
  "~{B}": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC_14": "14",
}) {
  override schema = "Interface_UART:ISL83491";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422 transceiver, 3-kVRMS Isolated, SSOP-16
 *
 * KiCad symbol: `Interface_UART:ISO1500`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/iso1500.pdf
 * Keywords: RS-485 RS422 transceiver isolated.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISO1500 extends Component.withPins({
  /** Physical pin 1: VCC1; power_in. */
  "VCC1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: R; output. */
  "R": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DE; input. */
  "DE": "5",
  /** Physical pin 6: D; input. */
  "D": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: GND1; passive. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: VCC2; power_in. */
  "VCC2_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: A; bidirectional. */
  "A": "12",
  /** Physical pin 13: B; bidirectional. */
  "B": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GND2; passive. */
  "GND2_15": "15",
  /** Physical pin 16: VCC2; passive. */
  "VCC2_16": "16",
}) {
  override schema = "Interface_UART:ISO1500";
  override referencePrefix = "U";
}

/**
 * 200 kbps, Isolated 5-V Half-Duplex RS-485 transceiver, SOIC-16
 *
 * KiCad symbol: `Interface_UART:ISO3082DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/iso3082.pdf
 * Keywords: RS-485.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISO3082DW extends Component.withPins({
  /** Physical pin 1: Vcc1; power_in. */
  "Vcc1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: R; output. */
  "R": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DE; input. */
  "DE": "5",
  /** Physical pin 6: D; input. */
  "D": "6",
  /** Physical pin 7: GND1; power_in. */
  "GND1_7": "7",
  /** Physical pin 8: GND1; power_in. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: GND2; power_in. */
  "GND2_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: A; bidirectional. */
  "A": "12",
  /** Physical pin 13: B; bidirectional. */
  "B": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GND2; power_in. */
  "GND2_15": "15",
  /** Physical pin 16: Vcc2; power_in. */
  "Vcc2": "16",
}) {
  override schema = "Interface_UART:ISO3082DW";
  override referencePrefix = "U";
}

/**
 * 20 Mbps, Isolated 5-V Half-Duplex RS-485 transceiver, SOIC-16
 *
 * KiCad symbol: `Interface_UART:ISO3088DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/iso3082.pdf
 * Keywords: RS-485.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISO3088DW extends Component.withPins({
  /** Physical pin 1: Vcc1; power_in. */
  "Vcc1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: R; output. */
  "R": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DE; input. */
  "DE": "5",
  /** Physical pin 6: D; input. */
  "D": "6",
  /** Physical pin 7: GND1; power_in. */
  "GND1_7": "7",
  /** Physical pin 8: GND1; power_in. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: GND2; power_in. */
  "GND2_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: A; bidirectional. */
  "A": "12",
  /** Physical pin 13: B; bidirectional. */
  "B": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GND2; power_in. */
  "GND2_15": "15",
  /** Physical pin 16: Vcc2; power_in. */
  "Vcc2": "16",
}) {
  override schema = "Interface_UART:ISO3088DW";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 250kbps transceiver, DIP-8
 *
 * KiCad symbol: `Interface_UART:LT1785xN8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1785-1785A-1791-1791A.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1785xN8 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:LT1785xN8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 250kbps transceiver, fail-safe receiver, DIP-8
 *
 * KiCad symbol: `Interface_UART:LT1785AxN8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1785-1785A-1791-1791A.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1785AxN8 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:LT1785AxN8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 250kbps transceiver, fail-safe receiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:LT1785AxS8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1785-1785A-1791-1791A.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1785AxS8 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:LT1785AxS8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 250kbps transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:LT1785xS8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1785-1785A-1791-1791A.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1785xS8 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:LT1785xS8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, DIP-14
 *
 * KiCad symbol: `Interface_UART:LT1791xN8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1791xN8 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:LT1791xN8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, fail-safe receiver, DIP-14
 *
 * KiCad symbol: `Interface_UART:LT1791AxN8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1785-1785A-1791-1791A.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1791AxN8 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:LT1791AxN8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, SOIC-14
 *
 * KiCad symbol: `Interface_UART:LTC2852xS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2852xS extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:LTC2852xS";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, fail-safe receiver, SOIC-14
 *
 * KiCad symbol: `Interface_UART:LT1791AxS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1785-1785A-1791-1791A.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1791AxS extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:LT1791AxS";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, SOIC-14
 *
 * KiCad symbol: `Interface_UART:LT1791xS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1785-1785A-1791-1791A.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1791xS extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:LT1791xS";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 20Mbps transceiver, DFN-8
 *
 * KiCad symbol: `Interface_UART:LTC2850xDD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2850xDD extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Interface_UART:LTC2850xDD";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 20Mbps transceiver, MSOP-8
 *
 * KiCad symbol: `Interface_UART:LTC2850xMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2850xMS8 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:LTC2850xMS8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, DFN-8
 *
 * KiCad symbol: `Interface_UART:LTC2851xDD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2851xDD extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Interface_UART:LTC2851xDD";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, MSOP-8
 *
 * KiCad symbol: `Interface_UART:LTC2851xMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2851xMS8 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:LTC2851xMS8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:LTC2851xS8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2851xS8 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:LTC2851xS8";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, DFN-10
 *
 * KiCad symbol: `Interface_UART:LTC2852xDD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.65x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2852xDD extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: Y; output. */
  "Y": "6",
  /** Physical pin 7: Z; output. */
  "Z": "7",
  /** Physical pin 8: B; input. */
  "B": "8",
  /** Physical pin 9: A; input. */
  "A": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Interface_UART:LTC2852xDD";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, MSOP-10
 *
 * KiCad symbol: `Interface_UART:LTC2852xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2852xMS extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: Y; output. */
  "Y": "6",
  /** Physical pin 7: Z; output. */
  "Z": "7",
  /** Physical pin 8: B; input. */
  "B": "8",
  /** Physical pin 9: A; input. */
  "A": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Interface_UART:LTC2852xMS";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 20Mbps transceiver, DFN-8
 *
 * KiCad symbol: `Interface_UART:LTC2856xDD-1`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2856xDD_1 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Interface_UART:LTC2856xDD-1";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 250kbps transceiver, DFN-8
 *
 * KiCad symbol: `Interface_UART:LTC2856xDD-2`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2856xDD_2 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Interface_UART:LTC2856xDD-2";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 20Mbps transceiver, MSOP-8
 *
 * KiCad symbol: `Interface_UART:LTC2856xMS8-1`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2856xMS8_1 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:LTC2856xMS8-1";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 250kbps transceiver, MSOP-8
 *
 * KiCad symbol: `Interface_UART:LTC2856xMS8-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2856xMS8_2 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:LTC2856xMS8-2";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, DFN-8
 *
 * KiCad symbol: `Interface_UART:LTC2857xDD-1`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2857xDD_1 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Interface_UART:LTC2857xDD-1";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, DFN-8
 *
 * KiCad symbol: `Interface_UART:LTC2857xDD-2`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285012fe.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2857xDD_2 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Interface_UART:LTC2857xDD-2";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, MSOP-8
 *
 * KiCad symbol: `Interface_UART:LTC2857xMS8-1`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2857xMS8_1 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:LTC2857xMS8-1";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, MSOP-8
 *
 * KiCad symbol: `Interface_UART:LTC2857xMS8-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2857xMS8_2 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:LTC2857xMS8-2";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, DFN-10
 *
 * KiCad symbol: `Interface_UART:LTC2858xDD-1`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.65x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2858xDD_1 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: Y; output. */
  "Y": "6",
  /** Physical pin 7: Z; output. */
  "Z": "7",
  /** Physical pin 8: B; input. */
  "B": "8",
  /** Physical pin 9: A; input. */
  "A": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Interface_UART:LTC2858xDD-1";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, DFN-10
 *
 * KiCad symbol: `Interface_UART:LTC2858xDD-2`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.65x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2858xDD_2 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: Y; output. */
  "Y": "6",
  /** Physical pin 7: Z; output. */
  "Z": "7",
  /** Physical pin 8: B; input. */
  "B": "8",
  /** Physical pin 9: A; input. */
  "A": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Interface_UART:LTC2858xDD-2";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 20Mbps transceiver, MSOP-10
 *
 * KiCad symbol: `Interface_UART:LTC2858xMS-1`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2858xMS_1 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: Y; output. */
  "Y": "6",
  /** Physical pin 7: Z; output. */
  "Z": "7",
  /** Physical pin 8: B; input. */
  "B": "8",
  /** Physical pin 9: A; input. */
  "A": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Interface_UART:LTC2858xMS-1";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Full duplex 250kbps transceiver, MSOP-10
 *
 * KiCad symbol: `Interface_UART:LTC2858xMS-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285678fg.pdf
 * Keywords: RS485 RS422 transceiver full duplex.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2858xMS_2 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: Y; output. */
  "Y": "6",
  /** Physical pin 7: Z; output. */
  "Z": "7",
  /** Physical pin 8: B; input. */
  "B": "8",
  /** Physical pin 9: A; input. */
  "A": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Interface_UART:LTC2858xMS-2";
  override referencePrefix = "U";
}

/**
 * 20Mbps RS485 transceiver with tntegrated switchable termination
 *
 * KiCad symbol: `Interface_UART:LTC2861`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/285961fc.pdf
 * Keywords: RS485.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2861 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: RE; input. */
  "RE": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: TE; input. */
  "TE": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 11: SLO; input. */
  "SLO": "11",
  /** Physical pin 12: Y; output. */
  "Y": "12",
  /** Physical pin 13: ~{Z}; output. */
  "~{Z}": "13",
  /** Physical pin 14: ~{B}; input. */
  "~{B}": "14",
  /** Physical pin 15: A; input. */
  "A": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:LTC2861";
  override referencePrefix = "U";
}

/**
 * RS485 transceiver, full duplex, dual supply, receiver/driver enable, 500kbps, SOIC-14 package
 *
 * KiCad symbol: `Interface_UART:MAX13432EESD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX13430E-MAX13433E.pdf
 * Keywords: rs485 transceiver.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX13432EESD extends Component.withPins({
  /** Physical pin 1: Vlogic; power_in. */
  "Vlogic": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: ~{Z}; output. */
  "~{Z}": "10",
  /** Physical pin 11: ~{B}; input. */
  "~{B}": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:MAX13432EESD";
  override referencePrefix = "U";
}

/**
 * RS485 transceiver, full duplex, dual supply, receiver/driver enable, 500kbps, DFN-14 package
 *
 * KiCad symbol: `Interface_UART:MAX13432EETD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX13430E-MAX13433E.pdf
 * Keywords: rs485 transceiver.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x3mm_P0.4mm_EP1.78x2.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX13432EETD extends Component.withPins({
  /** Physical pin 1: Vlogic; power_in. */
  "Vlogic": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: ~{Z}; output. */
  "~{Z}": "10",
  /** Physical pin 11: ~{B}; input. */
  "~{B}": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: EP; power_in. */
  "EP": "15",
}) {
  override schema = "Interface_UART:MAX13432EETD";
  override referencePrefix = "U";
}

/**
 * RS485 transceiver, full duplex, dual supply, receiver/driver enable, 16Mbps, SOIC-14 package
 *
 * KiCad symbol: `Interface_UART:MAX13433EESD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX13430E-MAX13433E.pdf
 * Keywords: rs485 transceiver.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX13433EESD extends Component.withPins({
  /** Physical pin 1: Vlogic; power_in. */
  "Vlogic": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: ~{Z}; output. */
  "~{Z}": "10",
  /** Physical pin 11: ~{B}; input. */
  "~{B}": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:MAX13433EESD";
  override referencePrefix = "U";
}

/**
 * RS485 transceiver, full duplex, dual supply, receiver/driver enable, 16Mbps, DFN-14 package
 *
 * KiCad symbol: `Interface_UART:MAX13433EETD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX13430E-MAX13433E.pdf
 * Keywords: rs485 transceiver.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x3mm_P0.4mm_EP1.78x2.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX13433EETD extends Component.withPins({
  /** Physical pin 1: Vlogic; power_in. */
  "Vlogic": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: ~{Z}; output. */
  "~{Z}": "10",
  /** Physical pin 11: ~{B}; input. */
  "~{B}": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: EP; power_in. */
  "EP": "15",
}) {
  override schema = "Interface_UART:MAX13433EETD";
  override referencePrefix = "U";
}

/**
 * High-Speed 3.3V/5V RS-485/RS-422 Transceiver with ±35kV HBM ESD Protection, SOIC8
 *
 * KiCad symbol: `Interface_UART:MAX14783ExS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX14783E.pdf
 * Keywords: High-Speed 3.3V/5V RS-485/RS-422 Transceiver ESD 42Mbps.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX14783ExS extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX14783ExS";
  override referencePrefix = "U";
}

/**
 * Quad UART with I2C/SPI interface, 128 Word FIFOs, IrDA SIR built-in support, TQFN-48
 *
 * KiCad symbol: `Interface_UART:MAX14830`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*7x7mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX14830.pdf
 * Keywords: UART I2C/SPI 128W FIFO IrDA SIR.
 * Default footprint: Package_DFN_QFN:TQFN-48-1EP_7x7mm_P0.5mm_EP5.1x5.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX14830 extends Component.withPins({
  /** Physical pin 1: SPI/~{I2C}; input. */
  "SPI/~{I2C}": "1",
  /** Physical pin 2: LDOEN; input. */
  "LDOEN": "2",
  /** Physical pin 3: MISO/SDA; bidirectional. */
  "MISO/SDA": "3",
  /** Physical pin 4: SCLK/SCL; input. */
  "SCLK/SCL": "4",
  /** Physical pin 5: ~{CS}/A0; input. */
  "~{CS}/A0": "5",
  /** Physical pin 6: MOSI/A1; input. */
  "MOSI/A1": "6",
  /** Physical pin 7: ~{IRQ}; input. */
  "~{IRQ}": "7",
  /** Physical pin 8: ~{RST}; input. */
  "~{RST}": "8",
  /** Physical pin 9: VL; power_in. */
  "VL": "9",
  /** Physical pin 10: DGND; power_in. */
  "DGND": "10",
  /** Physical pin 11: GPIO0; bidirectional. */
  "GPIO0": "11",
  /** Physical pin 12: GPIO1; bidirectional. */
  "GPIO1": "12",
  /** Physical pin 13: GPIO2; bidirectional. */
  "GPIO2": "13",
  /** Physical pin 14: GPIO3; bidirectional. */
  "GPIO3": "14",
  /** Physical pin 15: ~{RTS0}; output. */
  "~{RTS0}": "15",
  /** Physical pin 16: ~{CTS0}; input. */
  "~{CTS0}": "16",
  /** Physical pin 17: RX0; input. */
  "RX0": "17",
  /** Physical pin 18: TX0; output. */
  "TX0": "18",
  /** Physical pin 19: GPIO4; bidirectional. */
  "GPIO4": "19",
  /** Physical pin 20: GPIO5; bidirectional. */
  "GPIO5": "20",
  /** Physical pin 21: GPIO6; bidirectional. */
  "GPIO6": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: ~{RTS1}; output. */
  "~{RTS1}": "23",
  /** Physical pin 24: ~{CTS1}; input. */
  "~{CTS1}": "24",
  /** Physical pin 25: RX1; input. */
  "RX1": "25",
  /** Physical pin 26: TX1; output. */
  "TX1": "26",
  /** Physical pin 27: GPIO8; bidirectional. */
  "GPIO8": "27",
  /** Physical pin 28: GPIO9; bidirectional. */
  "GPIO9": "28",
  /** Physical pin 29: GPIO10; bidirectional. */
  "GPIO10": "29",
  /** Physical pin 30: GPIO11; bidirectional. */
  "GPIO11": "30",
  /** Physical pin 31: ~{RTS2}; output. */
  "~{RTS2}": "31",
  /** Physical pin 32: ~{CTS2}; input. */
  "~{CTS2}": "32",
  /** Physical pin 33: RX2; input. */
  "RX2": "33",
  /** Physical pin 34: TX2; output. */
  "TX2": "34",
  /** Physical pin 35: GPIO12; bidirectional. */
  "GPIO12": "35",
  /** Physical pin 36: GPIO13; bidirectional. */
  "GPIO13": "36",
  /** Physical pin 37: GPIO14; bidirectional. */
  "GPIO14": "37",
  /** Physical pin 38: GPIO15; bidirectional. */
  "GPIO15": "38",
  /** Physical pin 39: ~{RTS3}; output. */
  "~{RTS3}": "39",
  /** Physical pin 40: ~{CTS3}; input. */
  "~{CTS3}": "40",
  /** Physical pin 41: RX3; input. */
  "RX3": "41",
  /** Physical pin 42: TX3; output. */
  "TX3": "42",
  /** Physical pin 43: VEXT; power_in. */
  "VEXT": "43",
  /** Physical pin 44: XOUT; output. */
  "XOUT": "44",
  /** Physical pin 45: XIN; input. */
  "XIN": "45",
  /** Physical pin 46: AGND; power_in. */
  "AGND_46": "46",
  /** Physical pin 47: VA; power_in. */
  "VA": "47",
  /** Physical pin 48: V18; power_out. */
  "V18": "48",
  /** Physical pin 49: AGND; passive. */
  "AGND_49": "49",
}) {
  override schema = "Interface_UART:MAX14830";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422, 2.5 Mbps, ±15kV electro-static discharge (ESD) protection, no slew-rate, with low-power shutdown, with receiver/driver enable, 32 receiver drive capability, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX481E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX481E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX481E";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422, 2.5 Mbps, ±15kV electro-static discharge (ESD) protection, no slew-rate, no low-power shutdown, with receiver/driver enable, 128 receiver drive capability, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX1487E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1487E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX1487E";
  override referencePrefix = "U";
}

/**
 * Dual RS232 driver/receiver, 5V supply, 120kb/s, 0C-70C
 *
 * KiCad symbol: `Interface_UART:MAX202`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/max202.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX202 extends Component.withPins({
  /** Physical pin 1: C1+; passive. */
  "C1+": "1",
  /** Physical pin 2: VS+; power_out. */
  "VS+": "2",
  /** Physical pin 3: C1-; passive. */
  "C1-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: C2-; passive. */
  "C2-": "5",
  /** Physical pin 6: VS-; power_out. */
  "VS-": "6",
  /** Physical pin 7: T2OUT; output. */
  "T2OUT": "7",
  /** Physical pin 8: R2IN; input. */
  "R2IN": "8",
  /** Physical pin 9: R2OUT; output. */
  "R2OUT": "9",
  /** Physical pin 10: T2IN; input. */
  "T2IN": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: R1OUT; output. */
  "R1OUT": "12",
  /** Physical pin 13: R1IN; input. */
  "R1IN": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:MAX202";
  override referencePrefix = "U";
}

/**
 * Dual RS232 driver/receiver, 5V supply, 120kb/s, -40C-80C
 *
 * KiCad symbol: `Interface_UART:MAX232I`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/max232.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX232I extends Component.withPins({
  /** Physical pin 1: C1+; passive. */
  "C1+": "1",
  /** Physical pin 2: VS+; power_out. */
  "VS+": "2",
  /** Physical pin 3: C1-; passive. */
  "C1-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: C2-; passive. */
  "C2-": "5",
  /** Physical pin 6: VS-; power_out. */
  "VS-": "6",
  /** Physical pin 7: T2OUT; output. */
  "T2OUT": "7",
  /** Physical pin 8: R2IN; input. */
  "R2IN": "8",
  /** Physical pin 9: R2OUT; output. */
  "R2OUT": "9",
  /** Physical pin 10: T2IN; input. */
  "T2IN": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: R1OUT; output. */
  "R1OUT": "12",
  /** Physical pin 13: R1IN; input. */
  "R1IN": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:MAX232I";
  override referencePrefix = "U";
}

/**
 * Quad RS232 driver/receiver, 5V supply, 120kb/s, SOIC-24W
 *
 * KiCad symbol: `Interface_UART:MAX238xWG+`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*.
 * @see https://eu.mouser.com/datasheet/2/609/MAX220_MAX249-3127785.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX238xWG_ extends Component.withPins({
  /** Physical pin 1: T2OUT; output. */
  "T2OUT_1": "1",
  /** Physical pin 2: T1OUT; output. */
  "T1OUT_2": "2",
  /** Physical pin 3: R2IN; input. */
  "R2IN_3": "3",
  /** Physical pin 4: R2OUT; output. */
  "R2OUT_4": "4",
  /** Physical pin 5: T1IN; input. */
  "T1IN_5": "5",
  /** Physical pin 6: R1OUT; output. */
  "R1OUT_6": "6",
  /** Physical pin 7: R1IN; input. */
  "R1IN_7": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: C1+; passive. */
  "C1+": "10",
  /** Physical pin 11: VS+; power_out. */
  "VS+": "11",
  /** Physical pin 12: C1-; passive. */
  "C1-": "12",
  /** Physical pin 13: C2+; passive. */
  "C2+": "13",
  /** Physical pin 14: C2-; passive. */
  "C2-": "14",
  /** Physical pin 15: VS-; power_out. */
  "VS-": "15",
  /** Physical pin 16: R2IN; input. */
  "R2IN_16": "16",
  /** Physical pin 17: R2OUT; output. */
  "R2OUT_17": "17",
  /** Physical pin 18: T2IN; input. */
  "T2IN_18": "18",
  /** Physical pin 19: T1IN; input. */
  "T1IN_19": "19",
  /** Physical pin 20: T2OUT; output. */
  "T2OUT_20": "20",
  /** Physical pin 21: T2IN; input. */
  "T2IN_21": "21",
  /** Physical pin 22: R1OUT; output. */
  "R1OUT_22": "22",
  /** Physical pin 23: R1IN; input. */
  "R1IN_23": "23",
  /** Physical pin 24: T1OUT; output. */
  "T1OUT_24": "24",
}) {
  override schema = "Interface_UART:MAX238xWG+";
  override referencePrefix = "U";
}

/**
 * Quad RS232 driver/receiver, 5V supply, 120kb/s, DIP-24
 *
 * KiCad symbol: `Interface_UART:MAX238xNG+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://eu.mouser.com/datasheet/2/609/MAX220_MAX249-3127785.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX238xNG_ extends Component.withPins({
  /** Physical pin 1: T2OUT; output. */
  "T2OUT_1": "1",
  /** Physical pin 2: T1OUT; output. */
  "T1OUT_2": "2",
  /** Physical pin 3: R2IN; input. */
  "R2IN_3": "3",
  /** Physical pin 4: R2OUT; output. */
  "R2OUT_4": "4",
  /** Physical pin 5: T1IN; input. */
  "T1IN_5": "5",
  /** Physical pin 6: R1OUT; output. */
  "R1OUT_6": "6",
  /** Physical pin 7: R1IN; input. */
  "R1IN_7": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: C1+; passive. */
  "C1+": "10",
  /** Physical pin 11: VS+; power_out. */
  "VS+": "11",
  /** Physical pin 12: C1-; passive. */
  "C1-": "12",
  /** Physical pin 13: C2+; passive. */
  "C2+": "13",
  /** Physical pin 14: C2-; passive. */
  "C2-": "14",
  /** Physical pin 15: VS-; power_out. */
  "VS-": "15",
  /** Physical pin 16: R2IN; input. */
  "R2IN_16": "16",
  /** Physical pin 17: R2OUT; output. */
  "R2OUT_17": "17",
  /** Physical pin 18: T2IN; input. */
  "T2IN_18": "18",
  /** Physical pin 19: T1IN; input. */
  "T1IN_19": "19",
  /** Physical pin 20: T2OUT; output. */
  "T2OUT_20": "20",
  /** Physical pin 21: T2IN; input. */
  "T2IN_21": "21",
  /** Physical pin 22: R1OUT; output. */
  "R1OUT_22": "22",
  /** Physical pin 23: R1IN; input. */
  "R1IN_23": "23",
  /** Physical pin 24: T1OUT; output. */
  "T1OUT_24": "24",
}) {
  override schema = "Interface_UART:MAX238xNG+";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 3.3V supply
 *
 * KiCad symbol: `Interface_UART:MAX3051`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOIC*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX3051.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3051 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SHDN; input. */
  "SHDN": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: RS; input. */
  "RS": "8",
}) {
  override schema = "Interface_UART:MAX3051";
  override referencePrefix = "U";
}

/**
 * +3.3V, ±15kV ESD-Protected, Fail-Safe, Hot-Swap, RS-485/RS-422 Transceivers, SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX3072E`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3070E-MAX3079E.pdf
 * Keywords: Low Power Half-Duplex RS-485 RS-422 Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3072E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX3072E";
  override referencePrefix = "U";
}

/**
 * 3.3V Low Power Half-Duplex RS-485 Transceiver 10Mbps, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SP3481CN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.icbase.com/pdf/SPX/SPX00480106.pdf
 * Keywords: Low Power Half-Duplex RS-485 Transceiver 10Mbps.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP3481CN extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SP3481CN";
  override referencePrefix = "U";
}

/**
 * +3.3V, ±15kV ESD-Protected, Fail-Safe, Hot-Swap, RS-485/RS-422 Transceivers, SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX3075E`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3070E-MAX3079E.pdf
 * Keywords: Low Power Half-Duplex RS-485 RS-422 Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3075E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX3075E";
  override referencePrefix = "U";
}

/**
 * +3.3V, ±15kV ESD-Protected, Fail-Safe, Hot-Swap, RS-485/RS-422 Transceivers, SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX3078E`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3070E-MAX3079E.pdf
 * Keywords: Low Power Half-Duplex RS-485 RS-422 Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3078E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX3078E";
  override referencePrefix = "U";
}

/**
 * Dual RS-232 Transceiver, 1.8V to 4.25V, AutoShutdown, DIP-20/SSOP-20
 *
 * KiCad symbol: `Interface_UART:MAX3218`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SSOP*5.3x7.2mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3218.pdf
 * Keywords: 1μA Supply Current.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3218 extends Component.withPins({
  /** Physical pin 1: LX; passive. */
  "LX": "1",
  /** Physical pin 2: ~{INVALID}; output. */
  "~{INVALID}": "2",
  /** Physical pin 3: FORCEON; input. */
  "FORCEON": "3",
  /** Physical pin 4: ~{FORCEOFF}; input. */
  "~{FORCEOFF}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: T1IN; input. */
  "T1IN": "7",
  /** Physical pin 8: T2IN; input. */
  "T2IN": "8",
  /** Physical pin 9: R1OUT; output. */
  "R1OUT": "9",
  /** Physical pin 10: R2OUT; output. */
  "R2OUT": "10",
  /** Physical pin 11: R2IN; input. */
  "R2IN": "11",
  /** Physical pin 12: R1IN; input. */
  "R1IN": "12",
  /** Physical pin 13: T2OUT; output. */
  "T2OUT": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: V-; power_out. */
  "V-": "15",
  /** Physical pin 16: C1-; passive. */
  "C1-": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: C1+; passive. */
  "C1+": "18",
  /** Physical pin 19: V+; power_out. */
  "V+": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
}) {
  override schema = "Interface_UART:MAX3218";
  override referencePrefix = "U";
}

/**
 * RS232 transceiver with 15kV ESD protection
 *
 * KiCad symbol: `Interface_UART:MAX3221`. Reference prefix: `U`.
 * Footprint filters: SSOP*, TSSOP*.
 * @see http://www.ti.com/lit/ds/symlink/max3221.pdf
 * Keywords: serial UART RS232.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3221 extends Component.withPins({
  /** Physical pin 1: ~{EN}; input. */
  "~{EN}": "1",
  /** Physical pin 2: C1+; passive. */
  "C1+": "2",
  /** Physical pin 3: V+; power_out. */
  "V+": "3",
  /** Physical pin 4: C1-; passive. */
  "C1-": "4",
  /** Physical pin 5: C2+; passive. */
  "C2+": "5",
  /** Physical pin 6: C2-; passive. */
  "C2-": "6",
  /** Physical pin 7: V-; power_out. */
  "V-": "7",
  /** Physical pin 8: RIN; input. */
  "RIN": "8",
  /** Physical pin 9: ROUT; output. */
  "ROUT": "9",
  /** Physical pin 10: ~{INVALID}; output. */
  "~{INVALID}": "10",
  /** Physical pin 11: DIN; input. */
  "DIN": "11",
  /** Physical pin 12: FORCEON; input. */
  "FORCEON": "12",
  /** Physical pin 13: DOUT; output. */
  "DOUT": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: ~{FORCEOFF}; input. */
  "~{FORCEOFF}": "16",
}) {
  override schema = "Interface_UART:MAX3221";
  override referencePrefix = "U";
}

/**
 * Single RS232 driver/receiver, 3.0V to 5V supply, 250kb/s, AutoShutdown Plus, SSOP-16 package
 *
 * KiCad symbol: `Interface_UART:MAX3226`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x6.2mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3224-MAX3245.pdf
 * Keywords: rs232 uart transceiver.
 * Default footprint: Package_SO:SSOP-16_5.3x6.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3226 extends Component.withPins({
  /** Physical pin 1: READY; output. */
  "READY": "1",
  /** Physical pin 2: C1+; passive. */
  "C1+": "2",
  /** Physical pin 3: V+; power_out. */
  "V+": "3",
  /** Physical pin 4: C1-; passive. */
  "C1-": "4",
  /** Physical pin 5: C2+; passive. */
  "C2+": "5",
  /** Physical pin 6: C2-; passive. */
  "C2-": "6",
  /** Physical pin 7: V-; power_out. */
  "V-": "7",
  /** Physical pin 8: R1IN; input. */
  "R1IN": "8",
  /** Physical pin 9: R1OUT; output. */
  "R1OUT": "9",
  /** Physical pin 10: ~{INVALID}; output. */
  "~{INVALID}": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: FORCEON; input. */
  "FORCEON": "12",
  /** Physical pin 13: T1OUT; output. */
  "T1OUT": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: ~{FORCEOFF}; input. */
  "~{FORCEOFF}": "16",
}) {
  override schema = "Interface_UART:MAX3226";
  override referencePrefix = "U";
}

/**
 * Single RS232 driver/receiver, 3.0V to 5V supply, 1Mb/s, AutoShutdown Plus, SSOP-16 package
 *
 * KiCad symbol: `Interface_UART:MAX3227`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x6.2mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3224-MAX3245.pdf
 * Keywords: rs232 uart transceiver.
 * Default footprint: Package_SO:SSOP-16_5.3x6.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3227 extends Component.withPins({
  /** Physical pin 1: READY; output. */
  "READY": "1",
  /** Physical pin 2: C1+; passive. */
  "C1+": "2",
  /** Physical pin 3: V+; power_out. */
  "V+": "3",
  /** Physical pin 4: C1-; passive. */
  "C1-": "4",
  /** Physical pin 5: C2+; passive. */
  "C2+": "5",
  /** Physical pin 6: C2-; passive. */
  "C2-": "6",
  /** Physical pin 7: V-; power_out. */
  "V-": "7",
  /** Physical pin 8: R1IN; input. */
  "R1IN": "8",
  /** Physical pin 9: R1OUT; output. */
  "R1OUT": "9",
  /** Physical pin 10: ~{INVALID}; output. */
  "~{INVALID}": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: FORCEON; input. */
  "FORCEON": "12",
  /** Physical pin 13: T1OUT; output. */
  "T1OUT": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: ~{FORCEOFF}; input. */
  "~{FORCEOFF}": "16",
}) {
  override schema = "Interface_UART:MAX3227";
  override referencePrefix = "U";
}

/**
 * 3.0V to 5.5V, Low-Power, up to 1Mbps, True RS-232 Transceivers Using Four 0.1μF External Capacitors
 *
 * KiCad symbol: `Interface_UART:MAX3232`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3222-MAX3241.pdf
 * Keywords: rs232 uart transceiver line-driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3232 extends Component.withPins({
  /** Physical pin 1: C1+; passive. */
  "C1+": "1",
  /** Physical pin 2: VS+; power_out. */
  "VS+": "2",
  /** Physical pin 3: C1-; passive. */
  "C1-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: C2-; passive. */
  "C2-": "5",
  /** Physical pin 6: VS-; power_out. */
  "VS-": "6",
  /** Physical pin 7: T2OUT; output. */
  "T2OUT": "7",
  /** Physical pin 8: R2IN; input. */
  "R2IN": "8",
  /** Physical pin 9: R2OUT; output. */
  "R2OUT": "9",
  /** Physical pin 10: T2IN; input. */
  "T2IN": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: R1OUT; output. */
  "R1OUT": "12",
  /** Physical pin 13: R1IN; input. */
  "R1IN": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:MAX3232";
  override referencePrefix = "U";
}

/**
 * ±15kV ESD-Protected 52Mbps, 3V to 5.5V RS-485/RS-422 True Fail-Safe Receivers, SOT23
 *
 * KiCad symbol: `Interface_UART:MAX3284E`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3280E-MAX3284E.pdf
 * Keywords: RS-485 RS-422 True Fail-Safe Receivers 1/4 unit load receiver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3284E extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RO; output. */
  "RO": "3",
  /** Physical pin 4: B; input. */
  "B": "4",
  /** Physical pin 5: VL; power_in. */
  "VL": "5",
  /** Physical pin 6: A; input. */
  "A": "6",
}) {
  override schema = "Interface_UART:MAX3284E";
  override referencePrefix = "U";
}

/**
 * True RS-485/RS-422, 0.25Mbps, Slew-Rate Limited, with low-power shutdown, with receiver/driver enable, 32 receiver drive capacitity, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX3483`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3483-MAX3491.pdf
 * Keywords: RS-485 RS-422 UART line-driver transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3483 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX3483";
  override referencePrefix = "U";
}

/**
 * True RS-485/RS-422, 10Mbps, Slew-Rate Limited, with low-power shutdown, with receiver/driver enable, 32 receiver drive capacitity, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX3485`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3483-MAX3491.pdf
 * Keywords: RS-485 RS-422 UART line-driver transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3485 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX3485";
  override referencePrefix = "U";
}

/**
 * True RS-485/RS-422, 2.5Mbps, Slew-Rate Limited, with low-power shutdown, with receiver/driver enable, 32 receiver drive capacitity, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX3486`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX3483-MAX3491.pdf
 * Keywords: RS-485 RS-422 UART line-driver transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3486 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX3486";
  override referencePrefix = "U";
}

/**
 * Full duplex RS-485/RS-422, 0.25 Mbps, slew-rate limited, no low-power shutdown, no with receiver/driver enable, 32 receiver drive capability, DIP-8
 *
 * KiCad symbol: `Interface_UART:MAX3488xPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX3483-MAX3491.pdf
 * Keywords: transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3488xPA extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:MAX3488xPA";
  override referencePrefix = "U";
}

/**
 * Full duplex RS-485/RS-422, 0.25 Mbps, slew-rate limited, no low-power shutdown, no with receiver/driver enable, 32 receiver drive capability, SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX3488xSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX3483-MAX3491.pdf
 * Keywords: transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3488xSA extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:MAX3488xSA";
  override referencePrefix = "U";
}

/**
 * Full duplex RS-485/RS-422, 10 Mbps, slew-rate limited, no low-power shutdown, no with receiver/driver enable, 32 receiver drive capability, DIP-8
 *
 * KiCad symbol: `Interface_UART:MAX3490xPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX3483-MAX3491.pdf
 * Keywords: transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3490xPA extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:MAX3490xPA";
  override referencePrefix = "U";
}

/**
 * Full duplex RS-485/RS-422, 10Mbps, slew-rate limited, no low-power shutdown, no with receiver/driver enable, 32 receiver drive capability, SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX3490xSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX3483-MAX3491.pdf
 * Keywords: transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX3490xSA extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:MAX3490xSA";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422, 0.25 Mbps, ±15kV electro-static discharge (ESD) protection, with slew-rate, with low-power shutdown, with receiver/driver enable, 32 receiver drive capability, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX483E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX483E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX483E";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422, 2.5 Mbps, ±15kV electro-static discharge (ESD) protection, no slew-rate, no low-power shutdown, with receiver/driver enable, 32 receiver drive capability, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX485E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX485E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX485E";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422, 0.25 Mbps, ±15kV electro-static discharge (ESD) protection, with slew-rate, with low-power shutdown, with receiver/driver enable, 128 receiver drive capability, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX487E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX487E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:MAX487E";
  override referencePrefix = "U";
}

/**
 * Full duplex RS-485/RS-422, 0.25 Mbps, ±15kV electro-static discharge (ESD) protection, slew-rate limited, no low-power shutdown, no with receiver/driver enable, 32 receiver drive capability, 0 to +70 degree Celsius, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX488E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX488E extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:MAX488E";
  override referencePrefix = "U";
}

/**
 * Full duplex RS-485/RS-422, 0.25 Mbps, ±15kV electro-static discharge (ESD) protection, slew-rate limited, no low-power shutdown, with with receiver/driver enable, 32 receiver drive capability, 0 to +70 degree Celsius, DIP-14 and SOIC-14
 *
 * KiCad symbol: `Interface_UART:MAX489E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX489E extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:MAX489E";
  override referencePrefix = "U";
}

/**
 * Full duplex RS-485/RS-422, 2.5 Mbps, ±15kV electro-static discharge (ESD) protection, no slew-rate limited, no low-power shutdown, no with receiver/driver enable, 32 receiver drive capability, -40 to +85 degree Celsius, DIP-8 and SOIC-8
 *
 * KiCad symbol: `Interface_UART:MAX490E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX490E extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:MAX490E";
  override referencePrefix = "U";
}

/**
 * Full duplex RS-485/RS-422, 2.5 Mbps, ±15kV electro-static discharge (ESD) protection, no slew-rate limited, no low-power shutdown, with receiver/driver enable, 32 receiver drive capability, 0 to +70 degree Celsius, DIP-14 and SOIC-14
 *
 * KiCad symbol: `Interface_UART:MAX491E`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1487E-MAX491E.pdf
 * Keywords: transceiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX491E extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: ~{RE}; input. */
  "~{RE}": "3",
  /** Physical pin 4: DE; input. */
  "DE": "4",
  /** Physical pin 5: DI; input. */
  "DI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: Y; output. */
  "Y": "9",
  /** Physical pin 10: Z; output. */
  "Z": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: A; input. */
  "A": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Interface_UART:MAX491E";
  override referencePrefix = "U";
}

/**
 * Asynchronous Communications Interface Adapter 1MHz, DIP-40
 *
 * KiCad symbol: `Interface_UART:MC6850`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC6850.pdf
 * Keywords: ACIA.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6850 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: Rx_Data; input. */
  "Rx_Data": "2",
  /** Physical pin 3: Rx_CLK; input. */
  "Rx_CLK": "3",
  /** Physical pin 4: Tx_CLK; input. */
  "Tx_CLK": "4",
  /** Physical pin 5: ~{RTS}; output. */
  "~{RTS}": "5",
  /** Physical pin 6: Tx_Data; output. */
  "Tx_Data": "6",
  /** Physical pin 7: ~{IRQ}; output. */
  "~{IRQ}": "7",
  /** Physical pin 8: CS0; input. */
  "CS0": "8",
  /** Physical pin 9: CS2; input. */
  "CS2": "9",
  /** Physical pin 10: CS1; input. */
  "CS1": "10",
  /** Physical pin 11: RS; input. */
  "RS": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: R/~{W}; input. */
  "R/~{W}": "13",
  /** Physical pin 14: E; input. */
  "E": "14",
  /** Physical pin 15: D7; bidirectional. */
  "D7": "15",
  /** Physical pin 16: D6; bidirectional. */
  "D6": "16",
  /** Physical pin 17: D5; bidirectional. */
  "D5": "17",
  /** Physical pin 18: D4; bidirectional. */
  "D4": "18",
  /** Physical pin 19: D3; bidirectional. */
  "D3": "19",
  /** Physical pin 20: D2; bidirectional. */
  "D2": "20",
  /** Physical pin 21: D1; bidirectional. */
  "D1": "21",
  /** Physical pin 22: D0; bidirectional. */
  "D0": "22",
  /** Physical pin 23: ~{DCD}; input. */
  "~{DCD}": "23",
  /** Physical pin 24: ~{CTS}; input. */
  "~{CTS}": "24",
}) {
  override schema = "Interface_UART:MC6850";
  override referencePrefix = "U";
}

/**
 * Asynchronous Communications Interface Adapter 1.5MHz, DIP-40
 *
 * KiCad symbol: `Interface_UART:MC68A50`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC6850.pdf
 * Keywords: ACIA.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A50 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: Rx_Data; input. */
  "Rx_Data": "2",
  /** Physical pin 3: Rx_CLK; input. */
  "Rx_CLK": "3",
  /** Physical pin 4: Tx_CLK; input. */
  "Tx_CLK": "4",
  /** Physical pin 5: ~{RTS}; output. */
  "~{RTS}": "5",
  /** Physical pin 6: Tx_Data; output. */
  "Tx_Data": "6",
  /** Physical pin 7: ~{IRQ}; output. */
  "~{IRQ}": "7",
  /** Physical pin 8: CS0; input. */
  "CS0": "8",
  /** Physical pin 9: CS2; input. */
  "CS2": "9",
  /** Physical pin 10: CS1; input. */
  "CS1": "10",
  /** Physical pin 11: RS; input. */
  "RS": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: R/~{W}; input. */
  "R/~{W}": "13",
  /** Physical pin 14: E; input. */
  "E": "14",
  /** Physical pin 15: D7; bidirectional. */
  "D7": "15",
  /** Physical pin 16: D6; bidirectional. */
  "D6": "16",
  /** Physical pin 17: D5; bidirectional. */
  "D5": "17",
  /** Physical pin 18: D4; bidirectional. */
  "D4": "18",
  /** Physical pin 19: D3; bidirectional. */
  "D3": "19",
  /** Physical pin 20: D2; bidirectional. */
  "D2": "20",
  /** Physical pin 21: D1; bidirectional. */
  "D1": "21",
  /** Physical pin 22: D0; bidirectional. */
  "D0": "22",
  /** Physical pin 23: ~{DCD}; input. */
  "~{DCD}": "23",
  /** Physical pin 24: ~{CTS}; input. */
  "~{CTS}": "24",
}) {
  override schema = "Interface_UART:MC68A50";
  override referencePrefix = "U";
}

/**
 * Asynchronous Communications Interface Adapter 2MHz, DIP-40
 *
 * KiCad symbol: `Interface_UART:MC68B50`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC6850.pdf
 * Keywords: ACIA.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B50 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: Rx_Data; input. */
  "Rx_Data": "2",
  /** Physical pin 3: Rx_CLK; input. */
  "Rx_CLK": "3",
  /** Physical pin 4: Tx_CLK; input. */
  "Tx_CLK": "4",
  /** Physical pin 5: ~{RTS}; output. */
  "~{RTS}": "5",
  /** Physical pin 6: Tx_Data; output. */
  "Tx_Data": "6",
  /** Physical pin 7: ~{IRQ}; output. */
  "~{IRQ}": "7",
  /** Physical pin 8: CS0; input. */
  "CS0": "8",
  /** Physical pin 9: CS2; input. */
  "CS2": "9",
  /** Physical pin 10: CS1; input. */
  "CS1": "10",
  /** Physical pin 11: RS; input. */
  "RS": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: R/~{W}; input. */
  "R/~{W}": "13",
  /** Physical pin 14: E; input. */
  "E": "14",
  /** Physical pin 15: D7; bidirectional. */
  "D7": "15",
  /** Physical pin 16: D6; bidirectional. */
  "D6": "16",
  /** Physical pin 17: D5; bidirectional. */
  "D5": "17",
  /** Physical pin 18: D4; bidirectional. */
  "D4": "18",
  /** Physical pin 19: D3; bidirectional. */
  "D3": "19",
  /** Physical pin 20: D2; bidirectional. */
  "D2": "20",
  /** Physical pin 21: D1; bidirectional. */
  "D1": "21",
  /** Physical pin 22: D0; bidirectional. */
  "D0": "22",
  /** Physical pin 23: ~{DCD}; input. */
  "~{DCD}": "23",
  /** Physical pin 24: ~{CTS}; input. */
  "~{CTS}": "24",
}) {
  override schema = "Interface_UART:MC68B50";
  override referencePrefix = "U";
}

/**
 * Single UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, TSSOP-16
 *
 * KiCad symbol: `Interface_UART:SC16IS740`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS740_750_760.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS740 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: A0/~{CS}; input. */
  "A0/~{CS}": "2",
  /** Physical pin 3: A1/SI; input. */
  "A1/SI": "3",
  /** Physical pin 4: SO; output. */
  "SO": "4",
  /** Physical pin 5: SCL/SCLK; input. */
  "SCL/SCLK": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: ~{IRQ}; open_collector. */
  "~{IRQ}": "7",
  /** Physical pin 8: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS": "9",
  /** Physical pin 10: ~{RTS}; output. */
  "~{RTS}": "10",
  /** Physical pin 11: ~{CTS}; input. */
  "~{CTS}": "11",
  /** Physical pin 12: TX; output. */
  "TX": "12",
  /** Physical pin 13: RX; input. */
  "RX": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: XTAL1; input. */
  "XTAL1": "15",
  /** Physical pin 16: XTAL2; output. */
  "XTAL2": "16",
}) {
  override schema = "Interface_UART:SC16IS740";
  override referencePrefix = "U";
}

/**
 * Single UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, HVQFN-24
 *
 * KiCad symbol: `Interface_UART:SC16IS750xBS`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS740_750_760.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS750xBS extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: XTAL1; input. */
  "XTAL1": "2",
  /** Physical pin 3: XTAL2; output. */
  "XTAL2": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "5",
  /** Physical pin 6: A0/~{CS}; input. */
  "A0/~{CS}": "6",
  /** Physical pin 7: A1/SI; input. */
  "A1/SI": "7",
  /** Physical pin 8: SO; output. */
  "SO": "8",
  /** Physical pin 9: SCL/SCLK; input. */
  "SCL/SCLK": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 11: ~{IRQ}; open_collector. */
  "~{IRQ}": "11",
  /** Physical pin 12: GPIO0; bidirectional. */
  "GPIO0": "12",
  /** Physical pin 13: GPIO1; bidirectional. */
  "GPIO1": "13",
  /** Physical pin 14: GPIO2; bidirectional. */
  "GPIO2": "14",
  /** Physical pin 15: GPIO3; bidirectional. */
  "GPIO3": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: GPIO4/~{DSR}; bidirectional. */
  "GPIO4/~{DSR}": "17",
  /** Physical pin 18: GPIO5/~{DTR}; bidirectional. */
  "GPIO5/~{DTR}": "18",
  /** Physical pin 19: GPIO6/~{CD}; bidirectional. */
  "GPIO6/~{CD}": "19",
  /** Physical pin 20: GPIO7/~{RI}; bidirectional. */
  "GPIO7/~{RI}": "20",
  /** Physical pin 21: ~{RTS}; output. */
  "~{RTS}": "21",
  /** Physical pin 22: ~{CTS}; input. */
  "~{CTS}": "22",
  /** Physical pin 23: TX; output. */
  "TX": "23",
  /** Physical pin 24: RX; input. */
  "RX": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
}) {
  override schema = "Interface_UART:SC16IS750xBS";
  override referencePrefix = "U";
}

/**
 * Single UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, TSSOP-24
 *
 * KiCad symbol: `Interface_UART:SC16IS750xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS740_750_760.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS750xPW extends Component.withPins({
  /** Physical pin 1: ~{CTS}; input. */
  "~{CTS}": "1",
  /** Physical pin 2: TX; output. */
  "TX": "2",
  /** Physical pin 3: RX; input. */
  "RX": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: XTAL1; input. */
  "XTAL1": "5",
  /** Physical pin 6: XTAL2; output. */
  "XTAL2": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "8",
  /** Physical pin 9: A0/~{CS}; input. */
  "A0/~{CS}": "9",
  /** Physical pin 10: A1/SI; input. */
  "A1/SI": "10",
  /** Physical pin 11: SO; output. */
  "SO": "11",
  /** Physical pin 12: SCL/SCLK; input. */
  "SCL/SCLK": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: ~{IRQ}; open_collector. */
  "~{IRQ}": "14",
  /** Physical pin 15: GPIO0; bidirectional. */
  "GPIO0": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
  /** Physical pin 17: GPIO2; bidirectional. */
  "GPIO2": "17",
  /** Physical pin 18: GPIO3; bidirectional. */
  "GPIO3": "18",
  /** Physical pin 19: VSS; power_in. */
  "VSS": "19",
  /** Physical pin 20: GPIO4/~{DSR}; bidirectional. */
  "GPIO4/~{DSR}": "20",
  /** Physical pin 21: GPIO5/~{DTR}; bidirectional. */
  "GPIO5/~{DTR}": "21",
  /** Physical pin 22: GPIO6/~{CD}; bidirectional. */
  "GPIO6/~{CD}": "22",
  /** Physical pin 23: GPIO7/~{RI}; bidirectional. */
  "GPIO7/~{RI}": "23",
  /** Physical pin 24: ~{RTS}; output. */
  "~{RTS}": "24",
}) {
  override schema = "Interface_UART:SC16IS750xPW";
  override referencePrefix = "U";
}

/**
 * Dual UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, HVQFN-32
 *
 * KiCad symbol: `Interface_UART:SC16IS752IBS`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS752_SC16IS762.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_DFN_QFN:VQFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS752IBS extends Component.withPins({
  /** Physical pin 1: RXA; input. */
  "RXA": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: XTAL1; input. */
  "XTAL1": "3",
  /** Physical pin 4: XTAL2; output. */
  "XTAL2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 6: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "6",
  /** Physical pin 7: A0/~{CS}; input. */
  "A0/~{CS}": "7",
  /** Physical pin 8: A1/SI; input. */
  "A1/SI": "8",
  /** Physical pin 9: n.c./SO; output. */
  "n.c./SO": "9",
  /** Physical pin 10: SCL/SCLK; input. */
  "SCL/SCLK": "10",
  /** Physical pin 11: SDA/VSS; bidirectional. */
  "SDA/VSS": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS_12": "12",
  /** Physical pin 13: VDD; passive. */
  "VDD_13": "13",
  /** Physical pin 14: ~{IRQ}; open_collector. */
  "~{IRQ}": "14",
  /** Physical pin 15: ~{CTSB}; input. */
  "~{CTSB}": "15",
  /** Physical pin 16: ~{RTSB}; output. */
  "~{RTSB}": "16",
  /** Physical pin 17: GPIO0/~{DSRB}; bidirectional. */
  "GPIO0/~{DSRB}": "17",
  /** Physical pin 18: GPIO1/~{DTRB}; bidirectional. */
  "GPIO1/~{DTRB}": "18",
  /** Physical pin 19: GPIO2/~{CDB}; bidirectional. */
  "GPIO2/~{CDB}": "19",
  /** Physical pin 20: GPIO3/~{RIB}; bidirectional. */
  "GPIO3/~{RIB}": "20",
  /** Physical pin 21: VSS; passive. */
  "VSS_21": "21",
  /** Physical pin 22: TXB; output. */
  "TXB": "22",
  /** Physical pin 23: RXB; input. */
  "RXB": "23",
  /** Physical pin 24: GPIO4/~{DSRA}; bidirectional. */
  "GPIO4/~{DSRA}": "24",
  /** Physical pin 25: GPIO5/~{DTRA}; bidirectional. */
  "GPIO5/~{DTRA}": "25",
  /** Physical pin 26: GPIO6/~{CDA}; bidirectional. */
  "GPIO6/~{CDA}": "26",
  /** Physical pin 27: GPIO7/~{RIA}; bidirectional. */
  "GPIO7/~{RIA}": "27",
  /** Physical pin 28: VDD; passive. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: ~{RTSA}; output. */
  "~{RTSA}": "30",
  /** Physical pin 31: ~{CTSA}; input. */
  "~{CTSA}": "31",
  /** Physical pin 32: TXA; output. */
  "TXA": "32",
  /** Physical pin 33: VSS; passive. */
  "VSS_33": "33",
}) {
  override schema = "Interface_UART:SC16IS752IBS";
  override referencePrefix = "U";
}

/**
 * Dual UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, TSSOP-28
 *
 * KiCad symbol: `Interface_UART:SC16IS752IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS752_SC16IS762.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS752IPW extends Component.withPins({
  /** Physical pin 1: ~{RTSA}; output. */
  "~{RTSA}": "1",
  /** Physical pin 2: ~{CTSA}; input. */
  "~{CTSA}": "2",
  /** Physical pin 3: TXA; output. */
  "TXA": "3",
  /** Physical pin 4: RXA; input. */
  "RXA": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: XTAL1; input. */
  "XTAL1": "6",
  /** Physical pin 7: XTAL2; output. */
  "XTAL2": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "9",
  /** Physical pin 10: A0/~{CS}; input. */
  "A0/~{CS}": "10",
  /** Physical pin 11: A1/SI; input. */
  "A1/SI": "11",
  /** Physical pin 12: n.c./SO; output. */
  "n.c./SO": "12",
  /** Physical pin 13: SCL/SCLK; input. */
  "SCL/SCLK": "13",
  /** Physical pin 14: SDA/VSS; bidirectional. */
  "SDA/VSS": "14",
  /** Physical pin 15: ~{IRQ}; open_collector. */
  "~{IRQ}": "15",
  /** Physical pin 16: ~{CTSB}; input. */
  "~{CTSB}": "16",
  /** Physical pin 17: ~{RTSB}; output. */
  "~{RTSB}": "17",
  /** Physical pin 18: GPIO0/~{DSRB}; bidirectional. */
  "GPIO0/~{DSRB}": "18",
  /** Physical pin 19: GPIO1/~{DTRB}; bidirectional. */
  "GPIO1/~{DTRB}": "19",
  /** Physical pin 20: GPIO2/~{CDB}; bidirectional. */
  "GPIO2/~{CDB}": "20",
  /** Physical pin 21: GPIO3/~{RIB}; bidirectional. */
  "GPIO3/~{RIB}": "21",
  /** Physical pin 22: VSS; power_in. */
  "VSS": "22",
  /** Physical pin 23: TXB; output. */
  "TXB": "23",
  /** Physical pin 24: RXB; input. */
  "RXB": "24",
  /** Physical pin 25: GPIO4/~{DSRA}; bidirectional. */
  "GPIO4/~{DSRA}": "25",
  /** Physical pin 26: GPIO5/~{DTRA}; bidirectional. */
  "GPIO5/~{DTRA}": "26",
  /** Physical pin 27: GPIO6/~{CDA}; bidirectional. */
  "GPIO6/~{CDA}": "27",
  /** Physical pin 28: GPIO7/~{RIA}; bidirectional. */
  "GPIO7/~{RIA}": "28",
}) {
  override schema = "Interface_UART:SC16IS752IPW";
  override referencePrefix = "U";
}

/**
 * Single UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, HVQFN-24
 *
 * KiCad symbol: `Interface_UART:SC16IS760xBS`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS740_750_760.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS760xBS extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: XTAL1; input. */
  "XTAL1": "2",
  /** Physical pin 3: XTAL2; output. */
  "XTAL2": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "5",
  /** Physical pin 6: A0/~{CS}; input. */
  "A0/~{CS}": "6",
  /** Physical pin 7: A1/SI; input. */
  "A1/SI": "7",
  /** Physical pin 8: SO; output. */
  "SO": "8",
  /** Physical pin 9: SCL/SCLK; input. */
  "SCL/SCLK": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 11: ~{IRQ}; open_collector. */
  "~{IRQ}": "11",
  /** Physical pin 12: GPIO0; bidirectional. */
  "GPIO0": "12",
  /** Physical pin 13: GPIO1; bidirectional. */
  "GPIO1": "13",
  /** Physical pin 14: GPIO2; bidirectional. */
  "GPIO2": "14",
  /** Physical pin 15: GPIO3; bidirectional. */
  "GPIO3": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: GPIO4/~{DSR}; bidirectional. */
  "GPIO4/~{DSR}": "17",
  /** Physical pin 18: GPIO5/~{DTR}; bidirectional. */
  "GPIO5/~{DTR}": "18",
  /** Physical pin 19: GPIO6/~{CD}; bidirectional. */
  "GPIO6/~{CD}": "19",
  /** Physical pin 20: GPIO7/~{RI}; bidirectional. */
  "GPIO7/~{RI}": "20",
  /** Physical pin 21: ~{RTS}; output. */
  "~{RTS}": "21",
  /** Physical pin 22: ~{CTS}; input. */
  "~{CTS}": "22",
  /** Physical pin 23: TX; output. */
  "TX": "23",
  /** Physical pin 24: RX; input. */
  "RX": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
}) {
  override schema = "Interface_UART:SC16IS760xBS";
  override referencePrefix = "U";
}

/**
 * Single UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, TSSOP-24
 *
 * KiCad symbol: `Interface_UART:SC16IS760xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS740_750_760.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS760xPW extends Component.withPins({
  /** Physical pin 1: ~{CTS}; input. */
  "~{CTS}": "1",
  /** Physical pin 2: TX; output. */
  "TX": "2",
  /** Physical pin 3: RX; input. */
  "RX": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: XTAL1; input. */
  "XTAL1": "5",
  /** Physical pin 6: XTAL2; output. */
  "XTAL2": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "8",
  /** Physical pin 9: A0/~{CS}; input. */
  "A0/~{CS}": "9",
  /** Physical pin 10: A1/SI; input. */
  "A1/SI": "10",
  /** Physical pin 11: SO; output. */
  "SO": "11",
  /** Physical pin 12: SCL/SCLK; input. */
  "SCL/SCLK": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: ~{IRQ}; open_collector. */
  "~{IRQ}": "14",
  /** Physical pin 15: GPIO0; bidirectional. */
  "GPIO0": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
  /** Physical pin 17: GPIO2; bidirectional. */
  "GPIO2": "17",
  /** Physical pin 18: GPIO3; bidirectional. */
  "GPIO3": "18",
  /** Physical pin 19: VSS; power_in. */
  "VSS": "19",
  /** Physical pin 20: GPIO4/~{DSR}; bidirectional. */
  "GPIO4/~{DSR}": "20",
  /** Physical pin 21: GPIO5/~{DTR}; bidirectional. */
  "GPIO5/~{DTR}": "21",
  /** Physical pin 22: GPIO6/~{CD}; bidirectional. */
  "GPIO6/~{CD}": "22",
  /** Physical pin 23: GPIO7/~{RI}; bidirectional. */
  "GPIO7/~{RI}": "23",
  /** Physical pin 24: ~{RTS}; output. */
  "~{RTS}": "24",
}) {
  override schema = "Interface_UART:SC16IS760xPW";
  override referencePrefix = "U";
}

/**
 * Dual UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, HVQFN-32
 *
 * KiCad symbol: `Interface_UART:SC16IS762IBS`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS752_SC16IS762.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_DFN_QFN:VQFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS762IBS extends Component.withPins({
  /** Physical pin 1: RXA; input. */
  "RXA": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: XTAL1; input. */
  "XTAL1": "3",
  /** Physical pin 4: XTAL2; output. */
  "XTAL2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 6: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "6",
  /** Physical pin 7: A0/~{CS}; input. */
  "A0/~{CS}": "7",
  /** Physical pin 8: A1/SI; input. */
  "A1/SI": "8",
  /** Physical pin 9: n.c./SO; output. */
  "n.c./SO": "9",
  /** Physical pin 10: SCL/SCLK; input. */
  "SCL/SCLK": "10",
  /** Physical pin 11: SDA/VSS; bidirectional. */
  "SDA/VSS": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS_12": "12",
  /** Physical pin 13: VDD; passive. */
  "VDD_13": "13",
  /** Physical pin 14: ~{IRQ}; open_collector. */
  "~{IRQ}": "14",
  /** Physical pin 15: ~{CTSB}; input. */
  "~{CTSB}": "15",
  /** Physical pin 16: ~{RTSB}; output. */
  "~{RTSB}": "16",
  /** Physical pin 17: GPIO0/~{DSRB}; bidirectional. */
  "GPIO0/~{DSRB}": "17",
  /** Physical pin 18: GPIO1/~{DTRB}; bidirectional. */
  "GPIO1/~{DTRB}": "18",
  /** Physical pin 19: GPIO2/~{CDB}; bidirectional. */
  "GPIO2/~{CDB}": "19",
  /** Physical pin 20: GPIO3/~{RIB}; bidirectional. */
  "GPIO3/~{RIB}": "20",
  /** Physical pin 21: VSS; passive. */
  "VSS_21": "21",
  /** Physical pin 22: TXB; output. */
  "TXB": "22",
  /** Physical pin 23: RXB; input. */
  "RXB": "23",
  /** Physical pin 24: GPIO4/~{DSRA}; bidirectional. */
  "GPIO4/~{DSRA}": "24",
  /** Physical pin 25: GPIO5/~{DTRA}; bidirectional. */
  "GPIO5/~{DTRA}": "25",
  /** Physical pin 26: GPIO6/~{CDA}; bidirectional. */
  "GPIO6/~{CDA}": "26",
  /** Physical pin 27: GPIO7/~{RIA}; bidirectional. */
  "GPIO7/~{RIA}": "27",
  /** Physical pin 28: VDD; passive. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: ~{RTSA}; output. */
  "~{RTSA}": "30",
  /** Physical pin 31: ~{CTSA}; input. */
  "~{CTSA}": "31",
  /** Physical pin 32: TXA; output. */
  "TXA": "32",
  /** Physical pin 33: VSS; passive. */
  "VSS_33": "33",
}) {
  override schema = "Interface_UART:SC16IS762IBS";
  override referencePrefix = "U";
}

/**
 * Dual UART with I2C/SPI interface, 64 bytes of transmit and receive FIFOs, IrDA SIR built-in support, TSSOP-28
 *
 * KiCad symbol: `Interface_UART:SC16IS762IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC16IS752_SC16IS762.pdf
 * Keywords: UART I2C/SPI 64B FIFO IrDA SIR.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC16IS762IPW extends Component.withPins({
  /** Physical pin 1: ~{RTSA}; output. */
  "~{RTSA}": "1",
  /** Physical pin 2: ~{CTSA}; input. */
  "~{CTSA}": "2",
  /** Physical pin 3: TXA; output. */
  "TXA": "3",
  /** Physical pin 4: RXA; input. */
  "RXA": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: XTAL1; input. */
  "XTAL1": "6",
  /** Physical pin 7: XTAL2; output. */
  "XTAL2": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: I2C/~{SPI}; input. */
  "I2C/~{SPI}": "9",
  /** Physical pin 10: A0/~{CS}; input. */
  "A0/~{CS}": "10",
  /** Physical pin 11: A1/SI; input. */
  "A1/SI": "11",
  /** Physical pin 12: n.c./SO; output. */
  "n.c./SO": "12",
  /** Physical pin 13: SCL/SCLK; input. */
  "SCL/SCLK": "13",
  /** Physical pin 14: SDA/VSS; bidirectional. */
  "SDA/VSS": "14",
  /** Physical pin 15: ~{IRQ}; open_collector. */
  "~{IRQ}": "15",
  /** Physical pin 16: ~{CTSB}; input. */
  "~{CTSB}": "16",
  /** Physical pin 17: ~{RTSB}; output. */
  "~{RTSB}": "17",
  /** Physical pin 18: GPIO0/~{DSRB}; bidirectional. */
  "GPIO0/~{DSRB}": "18",
  /** Physical pin 19: GPIO1/~{DTRB}; bidirectional. */
  "GPIO1/~{DTRB}": "19",
  /** Physical pin 20: GPIO2/~{CDB}; bidirectional. */
  "GPIO2/~{CDB}": "20",
  /** Physical pin 21: GPIO3/~{RIB}; bidirectional. */
  "GPIO3/~{RIB}": "21",
  /** Physical pin 22: VSS; power_in. */
  "VSS": "22",
  /** Physical pin 23: TXB; output. */
  "TXB": "23",
  /** Physical pin 24: RXB; input. */
  "RXB": "24",
  /** Physical pin 25: GPIO4/~{DSRA}; bidirectional. */
  "GPIO4/~{DSRA}": "25",
  /** Physical pin 26: GPIO5/~{DTRA}; bidirectional. */
  "GPIO5/~{DTRA}": "26",
  /** Physical pin 27: GPIO6/~{CDA}; bidirectional. */
  "GPIO6/~{CDA}": "27",
  /** Physical pin 28: GPIO7/~{RIA}; bidirectional. */
  "GPIO7/~{RIA}": "28",
}) {
  override schema = "Interface_UART:SC16IS762IPW";
  override referencePrefix = "U";
}

/**
 * 3.3V, RS-485 Transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN65HVD11HD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65hvd11-ht.pdf
 * Keywords: rs485 transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD11HD extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN65HVD11HD";
  override referencePrefix = "U";
}

/**
 * Fault-Protected RS-485 Transceivers With 3.3-V to 5-V Operation, up to 115 kbps, up to 320, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN65HVD1780`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn65hvd1780.pdf
 * Keywords: rs485 transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD1780 extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN65HVD1780";
  override referencePrefix = "U";
}

/**
 * Fault-Protected RS-485 Transceivers With 3.3-V to 5-V Operation, up to 1 Mbps, up to 320, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN65HVD1781`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn65hvd1781.pdf
 * Keywords: rs485 transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD1781 extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN65HVD1781";
  override referencePrefix = "U";
}

/**
 * Fault-Protected RS-485 Transceivers With 3.3-V to 5-V Operation, up to 10 Mbps, up to 320, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN65HVD1782`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn65hvd1782.pdf
 * Keywords: rs485 transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD1782 extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN65HVD1782";
  override referencePrefix = "U";
}

/**
 * Differential bus transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN75LBC176D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75lbc176.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN75LBC176D extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN75LBC176D";
  override referencePrefix = "U";
}

/**
 * Differential bus transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN65LBC176D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75lbc176.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LBC176D extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN65LBC176D";
  override referencePrefix = "U";
}

/**
 * Differential bus transceiver, DIP-8
 *
 * KiCad symbol: `Interface_UART:SN75LBC176P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75lbc176.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN75LBC176P extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN75LBC176P";
  override referencePrefix = "U";
}

/**
 * Differential bus transceiver, DIP-8
 *
 * KiCad symbol: `Interface_UART:SN65LBC176P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75lbc176.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LBC176P extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN65LBC176P";
  override referencePrefix = "U";
}

/**
 * Differential bus transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN65LBC176QD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75lbc176.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LBC176QD extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN65LBC176QD";
  override referencePrefix = "U";
}

/**
 * Differential bus transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN65LBC176QDR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75lbc176.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LBC176QDR extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN65LBC176QDR";
  override referencePrefix = "U";
}

/**
 * Differential RS-422/RS-485 bus transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SN75176AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75176a.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN75176AD extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN75176AD";
  override referencePrefix = "U";
}

/**
 * Differential RS-422/RS-485 bus transceiver, DIP-8
 *
 * KiCad symbol: `Interface_UART:SN75176AP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75176a.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN75176AP extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SN75176AP";
  override referencePrefix = "U";
}

/**
 * Differential bus transceiver, ceramic DIP-8
 *
 * KiCad symbol: `Interface_UART:SNJ55LBC176JG`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75lbc176.pdf
 * Keywords: Differential bus transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SNJ55LBC176JG extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SNJ55LBC176JG";
  override referencePrefix = "U";
}

/**
 * 3.3V Low Power Half-Duplex RS-485 Transceiver 10Mbps, DIP8
 *
 * KiCad symbol: `Interface_UART:SP3481CP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.icbase.com/pdf/SPX/SPX00480106.pdf
 * Keywords: Low Power Half-Duplex RS-485 Transceiver 10Mbps.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP3481CP extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SP3481CP";
  override referencePrefix = "U";
}

/**
 * Industrial 3.3V Low Power Half-Duplex RS-485 Transceiver 10Mbps, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SP3481EN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.icbase.com/pdf/SPX/SPX00480106.pdf
 * Keywords: Low Power Half-Duplex RS-485 Transceiver 10Mbps.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP3481EN extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SP3481EN";
  override referencePrefix = "U";
}

/**
 * Industrial 3.3V Low Power Half-Duplex RS-485 Transceiver 10Mbps, DIP8
 *
 * KiCad symbol: `Interface_UART:SP3481EP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.icbase.com/pdf/SPX/SPX00480106.pdf
 * Keywords: Low Power Half-Duplex RS-485 Transceiver 10Mbps.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP3481EP extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SP3481EP";
  override referencePrefix = "U";
}

/**
 * 3.3V Low Power Half-Duplex RS-485 Transceiver 10Mbps, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SP3485CN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.icbase.com/pdf/SPX/SPX00480106.pdf
 * Keywords: Low Power Half-Duplex RS-485 Transceiver 10Mbps.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP3485CN extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SP3485CN";
  override referencePrefix = "U";
}

/**
 * 3.3V Low Power Half-Duplex RS-485 Transceiver 10Mbps, DIP8
 *
 * KiCad symbol: `Interface_UART:SP3485CP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.icbase.com/pdf/SPX/SPX00480106.pdf
 * Keywords: Low Power Half-Duplex RS-485 Transceiver 10Mbps.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP3485CP extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SP3485CP";
  override referencePrefix = "U";
}

/**
 * Industrial 3.3V Low Power Half-Duplex RS-485 Transceiver 10Mbps, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SP3485EN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.icbase.com/pdf/SPX/SPX00480106.pdf
 * Keywords: Low Power Half-Duplex RS-485 Transceiver 10Mbps.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP3485EN extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SP3485EN";
  override referencePrefix = "U";
}

/**
 * Industrial 3.3V Low Power Half-Duplex RS-485 Transceiver 10Mbps, DIP8
 *
 * KiCad symbol: `Interface_UART:SP3485EP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.icbase.com/pdf/SPX/SPX00480106.pdf
 * Keywords: Low Power Half-Duplex RS-485 Transceiver 10Mbps.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SP3485EP extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SP3485EP";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422 Half duplex 500kbps transceiver, 15kV ESD protected, 5V operating voltage, SOIC-8
 *
 * KiCad symbol: `Interface_UART:SSP3085`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_2404071515_Shanghai-Siproin-Microelectronics-SSP3085_C410986.pdf
 * Keywords: RS485 RS422 transceiver half duplex Siproin.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSP3085 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:SSP3085";
  override referencePrefix = "U";
}

/**
 * +/-15 kV ESD-protected 5V powered RS-232 dual transceiver (tx/rx: 2/2), 230kbps, 0.1uF capacitors operation, SOIC-16
 *
 * KiCad symbol: `Interface_UART:ST202ExD`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*9.*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/st202eb.pdf
 * Keywords: UART RS232.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST202ExD extends Component.withPins({
  /** Physical pin 1: C1+; passive. */
  "C1+": "1",
  /** Physical pin 2: VS+; power_out. */
  "VS+": "2",
  /** Physical pin 3: C1-; passive. */
  "C1-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: C2-; passive. */
  "C2-": "5",
  /** Physical pin 6: VS-; power_out. */
  "VS-": "6",
  /** Physical pin 7: T2OUT; output. */
  "T2OUT": "7",
  /** Physical pin 8: R2IN; input. */
  "R2IN": "8",
  /** Physical pin 9: R2OUT; output. */
  "R2OUT": "9",
  /** Physical pin 10: T2IN; input. */
  "T2IN": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: R1OUT; output. */
  "R1OUT": "12",
  /** Physical pin 13: R1IN; input. */
  "R1IN": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:ST202ExD";
  override referencePrefix = "U";
}

/**
 * +/-15 kV ESD-protected 5V powered RS-232 dual transceiver (tx/rx: 2/2), 230kbps, 1uF capacitors operation, SOIC-16
 *
 * KiCad symbol: `Interface_UART:ST232ExD`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*9.*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/st202eb.pdf
 * Keywords: UART RS232.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST232ExD extends Component.withPins({
  /** Physical pin 1: C1+; passive. */
  "C1+": "1",
  /** Physical pin 2: VS+; power_out. */
  "VS+": "2",
  /** Physical pin 3: C1-; passive. */
  "C1-": "3",
  /** Physical pin 4: C2+; passive. */
  "C2+": "4",
  /** Physical pin 5: C2-; passive. */
  "C2-": "5",
  /** Physical pin 6: VS-; power_out. */
  "VS-": "6",
  /** Physical pin 7: T2OUT; output. */
  "T2OUT": "7",
  /** Physical pin 8: R2IN; input. */
  "R2IN": "8",
  /** Physical pin 9: R2OUT; output. */
  "R2OUT": "9",
  /** Physical pin 10: T2IN; input. */
  "T2IN": "10",
  /** Physical pin 11: T1IN; input. */
  "T1IN": "11",
  /** Physical pin 12: R1OUT; output. */
  "R1OUT": "12",
  /** Physical pin 13: R1IN; input. */
  "R1IN": "13",
  /** Physical pin 14: T1OUT; output. */
  "T1OUT": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_UART:ST232ExD";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422, 5 Mbps, ±15kV ESD, 5V supply, 256 bus load, SOIC-8
 *
 * KiCad symbol: `Interface_UART:ST485E`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/resource/en/datasheet/st485eb.pdf
 * Keywords: ST-Microelectronics half-duplex.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST485E extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:ST485E";
  override referencePrefix = "U";
}

/**
 * RS-485, RS-422, half duplex transceiver, selectable speed 250 kbps or up to 20 Mbps, DFN-10 (VSON-10)
 *
 * KiCad symbol: `Interface_UART:STR485`. Reference prefix: `U`.
 * Footprint filters: *DFN*3x3mm?P0.5mm?EP1.646x3.1mm*.
 * @see https://www.st.com/resource/en/datasheet/str485.pdf
 * Keywords: RS485 RS422 transceiver half duplex.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.646x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STR485 extends Component.withPins({
  /** Physical pin 1: VL; power_in. */
  "VL": "1",
  /** Physical pin 2: R; output. */
  "R": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: D; input. */
  "D": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: SLR; input. */
  "SLR": "7",
  /** Physical pin 8: A; bidirectional. */
  "A": "8",
  /** Physical pin 9: B; bidirectional. */
  "B": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
  override schema = "Interface_UART:STR485";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422, 500 Kbps, 3V - 5.5V supply, ±12kV electro-static discharge (ESD) protection, with receiver/driver enable, 32 receiver drive capacity, SOIC-8
 *
 * KiCad symbol: `Interface_UART:THVD1400D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/thvd1420.pdf
 * Keywords: Half duplex 3.3V 5V RS-485 RS-422.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THVD1400D extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:THVD1400D";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485/RS-422, 12 Mbps, 3V - 5.5V supply, ±12kV electro-static discharge (ESD) protection, with receiver/driver enable, 32 receiver drive capacity, SOIC-8
 *
 * KiCad symbol: `Interface_UART:THVD1420D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/thvd1420.pdf
 * Keywords: Half duplex 3.3V 5V RS-485 RS-422.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THVD1420D extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:THVD1420D";
  override referencePrefix = "U";
}

/**
 * 3.3-V to 5-V RS-485 transceiver with ±18-kV IEC ESD protection, SOIC-8
 *
 * KiCad symbol: `Interface_UART:THVD1450D`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/thvd1450.pdf
 * Keywords: tranceiver rs485 esd.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THVD1450D extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:THVD1450D";
  override referencePrefix = "U";
}

/**
 * 3.3-V to 5-V RS-485 transceiver with ±18-kV IEC ESD protection, VSON-8
 *
 * KiCad symbol: `Interface_UART:THVD1450DR`. Reference prefix: `U`.
 * Footprint filters: *VSON*3x3mm*P0.65mm*EP1.6x2.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/thvd1450.pdf
 * Keywords: tranceiver rs485 esd.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.6x2.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THVD1450DR extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:THVD1450DR";
  override referencePrefix = "U";
}

/**
 * RS485 transceiver, 3.3-V to 5-V, 18-kV IEC ESD Protection, SOIC-8
 *
 * KiCad symbol: `Interface_UART:THVD1451D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/thvd1451.pdf
 * Keywords: rs485 transceiver line driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THVD1451D extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: R; output. */
  "R": "2",
  /** Physical pin 3: D; input. */
  "D": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Y; output. */
  "Y": "5",
  /** Physical pin 6: Z; output. */
  "Z": "6",
  /** Physical pin 7: B; input. */
  "B": "7",
  /** Physical pin 8: A; input. */
  "A": "8",
}) {
  override schema = "Interface_UART:THVD1451D";
  override referencePrefix = "U";
}

/**
 * Half duplex RS-485, 500 Kbps, 4.5V - 5.5V supply, ±8kV electro-static discharge (ESD) protection, with receiver/driver enable, SOIC-8
 *
 * KiCad symbol: `Interface_UART:THVD1500`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/thvd1500.pdf
 * Keywords: Half duplex 4.5V 5.5V RS-485.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THVD1500 extends Component.withPins({
  /** Physical pin 1: RO; output. */
  "RO": "1",
  /** Physical pin 2: ~{RE}; input. */
  "~{RE}": "2",
  /** Physical pin 3: DE; input. */
  "DE": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:THVD1500";
  override referencePrefix = "U";
}

/**
 * RS-485 500 kbps Transceiver with OOK Modulation for Power Line Communication, 3V-5.5V supply, -7 to +12V common mode range, SOT-23-8
 *
 * KiCad symbol: `Interface_UART:THVD8000`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/thvd8000.pdf
 * Keywords: RS485 half-duplex power-line-communication PLC powerline.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THVD8000 extends Component.withPins({
  /** Physical pin 1: R; output. */
  "R": "1",
  /** Physical pin 2: MODE; input. */
  "MODE": "2",
  /** Physical pin 3: F_SET; input. */
  "F_SET": "3",
  /** Physical pin 4: D; input. */
  "D": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A; bidirectional. */
  "A": "6",
  /** Physical pin 7: B; bidirectional. */
  "B": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_UART:THVD8000";
  override referencePrefix = "U";
}

/**
 * SCC Serial Communication Controller, DIP-40
 *
 * KiCad symbol: `Interface_UART:Z8530`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: SCC Serial Communication.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Z8530 extends Component.withPins({
  /** Physical pin 1: D1; input. */
  "D1": "1",
  /** Physical pin 2: D3; input. */
  "D3": "2",
  /** Physical pin 3: D5; input. */
  "D5": "3",
  /** Physical pin 4: D7; input. */
  "D7": "4",
  /** Physical pin 5: ~{INT}; open_collector. */
  "~{INT}": "5",
  /** Physical pin 6: IEO; output. */
  "IEO": "6",
  /** Physical pin 7: IEI; input. */
  "IEI": "7",
  /** Physical pin 8: ~{INTACK}; input. */
  "~{INTACK}": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: ~{W/REQA}; output. */
  "~{W/REQA}": "10",
  /** Physical pin 11: ~{SYNCA}; bidirectional. */
  "~{SYNCA}": "11",
  /** Physical pin 12: ~{RTXCA}; input. */
  "~{RTXCA}": "12",
  /** Physical pin 13: RXDA; input. */
  "RXDA": "13",
  /** Physical pin 14: ~{TRXCA}; bidirectional. */
  "~{TRXCA}": "14",
  /** Physical pin 15: TXDA; output. */
  "TXDA": "15",
  /** Physical pin 16: ~{DTR/REQA}; output. */
  "~{DTR/REQA}": "16",
  /** Physical pin 17: ~{RTSA}; output. */
  "~{RTSA}": "17",
  /** Physical pin 18: ~{CTSA}; input. */
  "~{CTSA}": "18",
  /** Physical pin 19: ~{DCDA}; input. */
  "~{DCDA}": "19",
  /** Physical pin 20: PCLK; input. */
  "PCLK": "20",
  /** Physical pin 21: ~{DCDB}; input. */
  "~{DCDB}": "21",
  /** Physical pin 22: ~{CTSB}; input. */
  "~{CTSB}": "22",
  /** Physical pin 23: ~{RTSB}; output. */
  "~{RTSB}": "23",
  /** Physical pin 24: ~{DTR/REQB}; output. */
  "~{DTR/REQB}": "24",
  /** Physical pin 25: TXDB; output. */
  "TXDB": "25",
  /** Physical pin 26: ~{TRXCB}; bidirectional. */
  "~{TRXCB}": "26",
  /** Physical pin 27: RXDB; input. */
  "RXDB": "27",
  /** Physical pin 28: ~{RTXCB}; input. */
  "~{RTXCB}": "28",
  /** Physical pin 29: ~{SYNCB}; bidirectional. */
  "~{SYNCB}": "29",
  /** Physical pin 30: ~{W/REQB}; output. */
  "~{W/REQB}": "30",
  /** Physical pin 31: GND; power_in. */
  "GND": "31",
  /** Physical pin 32: D/~{C}; input. */
  "D/~{C}": "32",
  /** Physical pin 33: ~{CE}; input. */
  "~{CE}": "33",
  /** Physical pin 34: A/~{B}; input. */
  "A/~{B}": "34",
  /** Physical pin 35: ~{WR}; input. */
  "~{WR}": "35",
  /** Physical pin 36: ~{RD}; input. */
  "~{RD}": "36",
  /** Physical pin 37: D6; input. */
  "D6": "37",
  /** Physical pin 38: D4; input. */
  "D4": "38",
  /** Physical pin 39: D2; input. */
  "D2": "39",
  /** Physical pin 40: D0; input. */
  "D0": "40",
}) {
  override schema = "Interface_UART:Z8530";
  override referencePrefix = "U";
}

