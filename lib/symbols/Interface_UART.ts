// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * PC16450, Universal Asynchronous Receiver/Transmitter, PDIP-40
 *
 * KiCad symbol: `Interface_UART:16450`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * Keywords: 1ch UART.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _16450 extends Component.withPins({
  "D0": "1",
  "D1": "2",
  "D2": "3",
  "D3": "4",
  "D4": "5",
  "D5": "6",
  "D6": "7",
  "D7": "8",
  "RCLK": "9",
  "SIN": "10",
  "SOUT": "11",
  "CS0": "12",
  "CS1": "13",
  "~{CS2}": "14",
  "~{BAUDOUT}": "15",
  "XIN": "16",
  "XOUT": "17",
  "~{WR}": "18",
  "WR": "19",
  "GND": "20",
  "~{RD}": "21",
  "RD": "22",
  "DDIS": "23",
  "CSOUT": "24",
  "~{ADS}": "25",
  "A2": "26",
  "A1": "27",
  "A0": "28",
  "INTR": "30",
  "~{OUT2}": "31",
  "~{RTS}": "32",
  "~{DTR}": "33",
  "~{OUT1}": "34",
  "MR": "35",
  "~{CTS}": "36",
  "~{DSR}": "37",
  "~{DCD}": "38",
  "~{RI}": "39",
  "VCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D0: "bidirectional", D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", RCLK: "input", SIN: "input", SOUT: "output", CS0: "input", CS1: "input", "~{CS2}": "input", "~{BAUDOUT}": "output", XIN: "input", XOUT: "output", "~{WR}": "input", WR: "input", GND: "power_in", "~{RD}": "input", RD: "input", DDIS: "output", CSOUT: "output", "~{ADS}": "input", A2: "input", A1: "input", A0: "input", INTR: "output", "~{OUT2}": "output", "~{RTS}": "output", "~{DTR}": "output", "~{OUT1}": "output", MR: "input", "~{CTS}": "input", "~{DSR}": "input", "~{DCD}": "input", "~{RI}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _16550 extends Component.withPins({
  "D0": "1",
  "D1": "2",
  "D2": "3",
  "D3": "4",
  "D4": "5",
  "D5": "6",
  "D6": "7",
  "D7": "8",
  "RCLK": "9",
  "SIN": "10",
  "SOUT": "11",
  "CS0": "12",
  "CS1": "13",
  "~{CS2}": "14",
  "~{BAUDOUT}": "15",
  "XIN": "16",
  "XOUT": "17",
  "~{WR}": "18",
  "WR": "19",
  "GND": "20",
  "~{RD}": "21",
  "RD": "22",
  "DDIS": "23",
  "~{TXRDY}": "24",
  "~{ADS}": "25",
  "A2": "26",
  "A1": "27",
  "A0": "28",
  "~{RXRDY}": "29",
  "INTR": "30",
  "~{OUT2}": "31",
  "~{RTS}": "32",
  "~{DTR}": "33",
  "~{OUT1}": "34",
  "MR": "35",
  "~{CTS}": "36",
  "~{DSR}": "37",
  "~{DCD}": "38",
  "~{RI}": "39",
  "VCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D0: "bidirectional", D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", RCLK: "input", SIN: "input", SOUT: "output", CS0: "input", CS1: "input", "~{CS2}": "input", "~{BAUDOUT}": "output", XIN: "input", XOUT: "output", "~{WR}": "input", WR: "input", GND: "power_in", "~{RD}": "input", RD: "input", DDIS: "output", "~{TXRDY}": "output", "~{ADS}": "input", A2: "input", A1: "input", A0: "input", "~{RXRDY}": "output", INTR: "output", "~{OUT2}": "output", "~{RTS}": "output", "~{DTR}": "output", "~{OUT1}": "output", MR: "input", "~{CTS}": "input", "~{DSR}": "input", "~{DCD}": "input", "~{RI}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_UART:16550";
  override referencePrefix = "U";
}

/**
 * CMOS Dual Channel UART
 *
 * KiCad symbol: `Interface_UART:68C681`. Reference prefix: `U`.
 * @see https://www.elektronik.ropla.eu/pdf/stock/exa/xr68c681.pdf
 * Keywords: UART serial.
 */
export class _68C681 extends Component.withPins({
  "A1": "1",
  "IP3": "2",
  "A2": "3",
  "IP1": "4",
  "A3": "5",
  "A4": "6",
  "IP0": "7",
  "RWN": "8",
  "DTACKN": "9",
  "RXDB": "10",
  "TXDB": "11",
  "OP1": "12",
  "OP3": "13",
  "OP5": "14",
  "OP7": "15",
  "D1": "16",
  "D3": "17",
  "D5": "18",
  "D7": "19",
  "GND": "20",
  "INTRN": "21",
  "D6": "22",
  "D4": "23",
  "D2": "24",
  "D0": "25",
  "OP6": "26",
  "OP4": "27",
  "OP2": "28",
  "OP0": "29",
  "TXDA": "30",
  "RXDA": "31",
  "X1/CLK": "32",
  "X2": "33",
  "RESETN": "34",
  "CSN": "35",
  "IP2": "36",
  "IACKN": "37",
  "IP5": "38",
  "IP4": "39",
  "VCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "input", IP3: "input", A2: "input", IP1: "input", A3: "input", A4: "input", IP0: "input", RWN: "input", DTACKN: "output", RXDB: "input", TXDB: "output", OP1: "output", OP3: "output", OP5: "output", OP7: "output", D1: "input", D3: "input", D5: "input", D7: "input", GND: "power_in", INTRN: "output", D6: "input", D4: "input", D2: "input", D0: "input", OP6: "output", OP4: "output", OP2: "output", OP0: "output", TXDA: "output", RXDA: "input", "X1/CLK": "input", X2: "output", RESETN: "input", CSN: "input", IP2: "input", IACKN: "input", IP5: "input", IP4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _8250 extends Component.withPins({
  "D0": "1",
  "D1": "2",
  "D2": "3",
  "D3": "4",
  "D4": "5",
  "D5": "6",
  "D6": "7",
  "D7": "8",
  "RCLK": "9",
  "SIN": "10",
  "SOUT": "11",
  "CS0": "12",
  "CS1": "13",
  "~{CS2}": "14",
  "~{BAUDOUT}": "15",
  "XIN": "16",
  "XOUT": "17",
  "~{WR}": "18",
  "WR": "19",
  "GND": "20",
  "~{RD}": "21",
  "RD": "22",
  "DDIS": "23",
  "CSOUT": "24",
  "~{ADS}": "25",
  "A2": "26",
  "A1": "27",
  "A0": "28",
  "INTR": "30",
  "~{OUT2}": "31",
  "~{RTS}": "32",
  "~{DTR}": "33",
  "~{OUT1}": "34",
  "MR": "35",
  "~{CTS}": "36",
  "~{DSR}": "37",
  "~{DCD}": "38",
  "~{RI}": "39",
  "VCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D0: "bidirectional", D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", RCLK: "input", SIN: "input", SOUT: "output", CS0: "input", CS1: "input", "~{CS2}": "input", "~{BAUDOUT}": "output", XIN: "input", XOUT: "output", "~{WR}": "input", WR: "input", GND: "power_in", "~{RD}": "input", RD: "input", DDIS: "output", CSOUT: "output", "~{ADS}": "input", A2: "input", A1: "input", A0: "input", INTR: "output", "~{OUT2}": "output", "~{RTS}": "output", "~{DTR}": "output", "~{OUT1}": "output", MR: "input", "~{CTS}": "input", "~{DSR}": "input", "~{DCD}": "input", "~{RI}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _8252 extends Component.withPins({
  "~{RD}": "1",
  "~{WR}": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "D4": "7",
  "D5": "8",
  "D6": "9",
  "D7": "10",
  "A0": "11",
  "A1": "12",
  "IX": "13",
  "OX": "14",
  "(TXD)SDO": "15",
  "GND": "16",
  "~{CTS}": "17",
  "~{DSR}": "18",
  "~{DTR}": "19",
  "~{RTS}": "20",
  "CO": "21",
  "TBRE": "22",
  "RST": "23",
  "INTR": "24",
  "(RXD)SDI": "25",
  "DR": "26",
  "VCC": "27",
  "CS0": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RD}": "input", "~{WR}": "input", D0: "bidirectional", D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", A0: "input", A1: "input", IX: "input", OX: "output", "(TXD)SDO": "output", GND: "power_in", "~{CTS}": "input", "~{DSR}": "input", "~{DTR}": "output", "~{RTS}": "output", CO: "output", TBRE: "output", RST: "input", INTR: "output", "(RXD)SDI": "input", DR: "output", VCC: "power_in", CS0: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM101E extends Component.withPins({
  "GND": "1",
  "C1-": "2",
  "VS-": "3",
  "T1IN": "4",
  "R1OUT": "5",
  "R1IN": "6",
  "T1OUT": "7",
  "SD": "8",
  "C1+": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "C1-": "passive", "VS-": "power_out", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", SD: "input", "C1+": "passive", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2850xS8 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM1485xRZ extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM1491EBR extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "VCC_13": "13",
  "VCC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", VCC_13: "power_in", VCC_14: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADM205 extends Component.withPins({
  "T4OUT": "1",
  "T3OUT": "2",
  "T3IN": "15",
  "T4IN": "16",
  "T5OUT": "19",
  "T5IN": "22",
  "T1OUT": "3",
  "T2OUT": "4",
  "R2IN": "5",
  "R2OUT": "6",
  "T2IN": "7",
  "T1IN": "8",
  "R1OUT": "9",
  "R1IN": "10",
  "GND": "11",
  "VCC": "12",
  "R5IN": "13",
  "R5OUT": "14",
  "R4OUT": "17",
  "R4IN": "18",
  "~{EN}": "20",
  "SD": "21",
  "R3OUT": "23",
  "R3IN": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { T4OUT: "output", T3OUT: "output", T3IN: "input", T4IN: "input", T5OUT: "output", T5IN: "input", T1OUT: "output", T2OUT: "output", R2IN: "input", R2OUT: "tri_state", T2IN: "input", T1IN: "input", R1OUT: "tri_state", R1IN: "input", GND: "power_in", VCC: "power_in", R5IN: "input", R5OUT: "tri_state", R4OUT: "tri_state", R4IN: "input", "~{EN}": "input", SD: "input", R3OUT: "tri_state", R3IN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM206 extends Component.withPins({
  "T3OUT": "1",
  "T3IN": "18",
  "T4IN": "19",
  "T4OUT": "24",
  "T1OUT": "2",
  "T2OUT": "3",
  "R1IN": "4",
  "R1OUT": "5",
  "T2IN": "6",
  "T1IN": "7",
  "GND": "8",
  "VCC": "9",
  "C1+": "10",
  "V+": "11",
  "C1-": "12",
  "C2+": "13",
  "C2-": "14",
  "V-": "15",
  "R3IN": "16",
  "R3OUT": "17",
  "~{EN}": "20",
  "SD": "21",
  "R2OUT": "22",
  "R2IN": "23",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { T3OUT: "output", T3IN: "input", T4IN: "input", T4OUT: "output", T1OUT: "output", T2OUT: "output", R1IN: "input", R1OUT: "tri_state", T2IN: "input", T1IN: "input", GND: "power_in", VCC: "power_in", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", R3IN: "input", R3OUT: "tri_state", "~{EN}": "input", SD: "input", R2OUT: "tri_state", R2IN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM207 extends Component.withPins({
  "T3OUT": "1",
  "T3IN": "18",
  "T4IN": "19",
  "T5OUT": "20",
  "T5IN": "21",
  "T4OUT": "24",
  "T1OUT": "2",
  "T2OUT": "3",
  "R1IN": "4",
  "R1OUT": "5",
  "T2IN": "6",
  "T1IN": "7",
  "GND": "8",
  "VCC": "9",
  "C1+": "10",
  "V+": "11",
  "C1-": "12",
  "C2+": "13",
  "C2-": "14",
  "V-": "15",
  "R3IN": "16",
  "R3OUT": "17",
  "R2OUT": "22",
  "R2IN": "23",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { T3OUT: "output", T3IN: "input", T4IN: "input", T5OUT: "output", T5IN: "input", T4OUT: "output", T1OUT: "output", T2OUT: "output", R1IN: "input", R1OUT: "output", T2IN: "input", T1IN: "input", GND: "power_in", VCC: "power_in", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", R3IN: "input", R3OUT: "output", R2OUT: "output", R2IN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM208 extends Component.withPins({
  "T3IN": "19",
  "T4OUT": "20",
  "T4IN": "21",
  "T3OUT": "24",
  "T2OUT": "1",
  "T1OUT": "2",
  "R2IN": "3",
  "R2OUT": "4",
  "T1IN": "5",
  "R1OUT": "6",
  "R1IN": "7",
  "GND": "8",
  "VCC": "9",
  "C1+": "10",
  "V+": "11",
  "C1-": "12",
  "C2+": "13",
  "C2-": "14",
  "V-": "15",
  "R4IN": "16",
  "R4OUT": "17",
  "T2IN": "18",
  "R3OUT": "22",
  "R3IN": "23",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { T3IN: "input", T4OUT: "output", T4IN: "input", T3OUT: "output", T2OUT: "output", T1OUT: "output", R2IN: "input", R2OUT: "output", T1IN: "input", R1OUT: "output", R1IN: "input", GND: "power_in", VCC: "power_in", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", R4IN: "input", R4OUT: "output", T2IN: "input", R3OUT: "output", R3IN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM209 extends Component.withPins({
  "R5IN": "9",
  "R5OUT": "10",
  "T3OUT": "13",
  "NC": "15",
  "T3IN": "16",
  "R1OUT": "1",
  "R1IN": "2",
  "GND": "3",
  "VCC": "4",
  "V+": "5",
  "C+": "6",
  "C-": "7",
  "V-": "8",
  "R4OUT": "11",
  "R4IN": "12",
  "~{EN}": "14",
  "R3OUT": "17",
  "R3IN": "18",
  "T1OUT": "19",
  "T2OUT": "20",
  "R2IN": "21",
  "R2OUT": "22",
  "T2IN": "23",
  "T1IN": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R5IN: "input", R5OUT: "tri_state", T3OUT: "output", NC: "no_connect", T3IN: "input", R1OUT: "tri_state", R1IN: "input", GND: "power_in", VCC: "power_in", "V+": "power_in", "C+": "passive", "C-": "passive", "V-": "power_out", R4OUT: "tri_state", R4IN: "input", "~{EN}": "input", R3OUT: "tri_state", R3IN: "input", T1OUT: "output", T2OUT: "output", R2IN: "input", R2OUT: "tri_state", T2IN: "input", T1IN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM211 extends Component.withPins({
  "T3OUT": "1",
  "T3IN": "20",
  "T4IN": "21",
  "T4OUT": "28",
  "T1OUT": "2",
  "T2OUT": "3",
  "R2IN": "4",
  "R2OUT": "5",
  "T2IN": "6",
  "T1IN": "7",
  "R1OUT": "8",
  "R1IN": "9",
  "GND": "10",
  "VCC": "11",
  "C1+": "12",
  "V+": "13",
  "C1-": "14",
  "C2+": "15",
  "C2-": "16",
  "V-": "17",
  "R5IN": "18",
  "R5OUT": "19",
  "R4OUT": "22",
  "R4IN": "23",
  "~{EN}": "24",
  "SD": "25",
  "R3OUT": "26",
  "R3IN": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { T3OUT: "output", T3IN: "input", T4IN: "input", T4OUT: "output", T1OUT: "output", T2OUT: "output", R2IN: "input", R2OUT: "tri_state", T2IN: "input", T1IN: "input", R1OUT: "tri_state", R1IN: "input", GND: "power_in", VCC: "power_in", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", R5IN: "input", R5OUT: "tri_state", R4OUT: "tri_state", R4IN: "input", "~{EN}": "input", SD: "input", R3OUT: "tri_state", R3IN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM213 extends Component.withPins({
  "T3OUT": "1",
  "T3IN": "20",
  "T4IN": "21",
  "T4OUT": "28",
  "T1OUT": "2",
  "T2OUT": "3",
  "R2IN": "4",
  "R2OUT": "5",
  "T2IN": "6",
  "T1IN": "7",
  "R1OUT": "8",
  "R1IN": "9",
  "GND": "10",
  "VCC": "11",
  "C1+": "12",
  "V+": "13",
  "C1-": "14",
  "C2+": "15",
  "C2-": "16",
  "V-": "17",
  "R5IN": "18",
  "R5OUT": "19",
  "R4OUT": "22",
  "R4IN": "23",
  "EN": "24",
  "~{SD}": "25",
  "R3OUT": "26",
  "R3IN": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { T3OUT: "output", T3IN: "input", T4IN: "input", T4OUT: "output", T1OUT: "output", T2OUT: "output", R2IN: "input", R2OUT: "tri_state", T2IN: "input", T1IN: "input", R1OUT: "tri_state", R1IN: "input", GND: "power_in", VCC: "power_in", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", R5IN: "input", R5OUT: "tri_state", R4OUT: "tri_state", R4IN: "input", EN: "input", "~{SD}": "input", R3OUT: "tri_state", R3IN: "input", ...opts.pinTypes } });
  }
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
 */
export class LT1080 extends Component.withPins({
  "NC": "1",
  "C1+": "2",
  "V+": "3",
  "C1-": "4",
  "C2+": "5",
  "C2-": "6",
  "V-": "7",
  "T2OUT": "8",
  "R2IN": "9",
  "R2OUT": "10",
  "T2IN": "11",
  "T1IN": "12",
  "R1OUT": "13",
  "R1IN": "14",
  "T1OUT": "15",
  "GND": "16",
  "VCC": "17",
  "ON/~{OFF}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", "ON/~{OFF}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADM222 extends Component.withPins({
  "NC": "1",
  "C1+": "2",
  "V+": "3",
  "C1-": "4",
  "C2+": "5",
  "C2-": "6",
  "V-": "7",
  "T2OUT": "8",
  "R2IN": "9",
  "R2OUT": "10",
  "T2IN": "11",
  "T1IN": "12",
  "R1OUT": "13",
  "R1IN": "14",
  "T1OUT": "15",
  "GND": "16",
  "VCC": "17",
  "ON/~{OFF}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", "ON/~{OFF}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX232 extends Component.withPins({
  "C1+": "1",
  "VS+": "2",
  "C1-": "3",
  "C2+": "4",
  "C2-": "5",
  "VS-": "6",
  "T2OUT": "7",
  "R2IN": "8",
  "R2OUT": "9",
  "T2IN": "10",
  "T1IN": "11",
  "R1OUT": "12",
  "R1IN": "13",
  "T1OUT": "14",
  "GND": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM232A extends Component.withPins({
  "C1+": "1",
  "VS+": "2",
  "C1-": "3",
  "C2+": "4",
  "C2-": "5",
  "VS-": "6",
  "T2OUT": "7",
  "R2IN": "8",
  "R2OUT": "9",
  "T2IN": "10",
  "T1IN": "11",
  "R1OUT": "12",
  "R1IN": "13",
  "T1OUT": "14",
  "GND": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM242 extends Component.withPins({
  "~{EN}": "1",
  "C1+": "2",
  "V+": "3",
  "C1-": "4",
  "C2+": "5",
  "C2-": "6",
  "V-": "7",
  "T2OUT": "8",
  "R2IN": "9",
  "R2OUT": "10",
  "T2IN": "11",
  "T1IN": "12",
  "R1OUT": "13",
  "R1IN": "14",
  "T1OUT": "15",
  "GND": "16",
  "VCC": "17",
  "~{SHDN}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{EN}": "input", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", "~{SHDN}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADM2481xRW extends Component.withPins({
  "VDD1": "1",
  "GND1_2": "2",
  "RxD": "3",
  "~{RE}": "4",
  "DE": "5",
  "TxD": "6",
  "GND1_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "GND2_10": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "NC_14": "14",
  "GND2_15": "15",
  "VDD2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", GND1_2: "power_in", RxD: "output", "~{RE}": "input", DE: "input", TxD: "input", GND1_7: "passive", GND1_8: "passive", GND2_9: "passive", GND2_10: "passive", NC_11: "no_connect", A: "bidirectional", B: "bidirectional", NC_14: "no_connect", GND2_15: "power_in", VDD2: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM2483xRW extends Component.withPins({
  "VDD1": "1",
  "GND1_2": "2",
  "RxD": "3",
  "~{RE}": "4",
  "DE": "5",
  "TxD": "6",
  "PV": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "NC_14": "14",
  "GND2_15": "15",
  "VDD2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", GND1_2: "power_in", RxD: "output", "~{RE}": "input", DE: "input", TxD: "input", PV: "input", GND1_8: "passive", GND2_9: "passive", NC_10: "no_connect", NC_11: "no_connect", A: "bidirectional", B: "bidirectional", NC_14: "no_connect", GND2_15: "power_in", VDD2: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM2484E extends Component.withPins({
  "VDD1": "1",
  "GND1_2": "2",
  "RxD": "3",
  "~{RE}": "4",
  "DE": "5",
  "TxD": "6",
  "NC_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "NC_10": "10",
  "Y": "11",
  "Z": "12",
  "B": "13",
  "A": "14",
  "GND2_15": "15",
  "VDD2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", GND1_2: "power_in", RxD: "output", "~{RE}": "input", DE: "input", TxD: "input", NC_7: "no_connect", GND1_8: "power_in", GND2_9: "power_in", NC_10: "no_connect", Y: "output", Z: "output", B: "input", A: "input", GND2_15: "power_in", VDD2: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM2587E extends Component.withPins({
  "GND1_1": "1",
  "VCC_2": "2",
  "GND1_3": "3",
  "RxD": "4",
  "~{RE}": "5",
  "DE": "6",
  "TxD": "7",
  "VCC_8": "8",
  "GND1_9": "9",
  "GND1_10": "10",
  "GND2_11": "11",
  "Visoout": "12",
  "Y": "13",
  "GND2_14": "14",
  "Z": "15",
  "GND2_16": "16",
  "B": "17",
  "A": "18",
  "Visoin": "19",
  "GND2_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND1_1: "power_in", VCC_2: "power_in", GND1_3: "power_in", RxD: "output", "~{RE}": "input", DE: "input", TxD: "input", VCC_8: "power_in", GND1_9: "power_in", GND1_10: "power_in", GND2_11: "power_in", Visoout: "power_out", Y: "output", GND2_14: "power_in", Z: "output", GND2_16: "power_in", B: "input", A: "input", Visoin: "power_in", GND2_20: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM2582E extends Component.withPins({
  "GND1_1": "1",
  "VCC_2": "2",
  "GND1_3": "3",
  "RxD": "4",
  "~{RE}": "5",
  "DE": "6",
  "TxD": "7",
  "VCC_8": "8",
  "GND1_9": "9",
  "GND1_10": "10",
  "GND2_11": "11",
  "Visoout": "12",
  "Y": "13",
  "GND2_14": "14",
  "Z": "15",
  "GND2_16": "16",
  "B": "17",
  "A": "18",
  "Visoin": "19",
  "GND2_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND1_1: "power_in", VCC_2: "power_in", GND1_3: "power_in", RxD: "output", "~{RE}": "input", DE: "input", TxD: "input", VCC_8: "power_in", GND1_9: "power_in", GND1_10: "power_in", GND2_11: "power_in", Visoout: "power_out", Y: "output", GND2_14: "power_in", Z: "output", GND2_16: "power_in", B: "input", A: "input", Visoin: "power_in", GND2_20: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM2682E extends Component.withPins({
  "GND1_1": "1",
  "VCC_2": "2",
  "RXD": "3",
  "~{RE}": "4",
  "DE": "5",
  "TXD": "6",
  "VCC_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "VISOOUT": "10",
  "Y": "11",
  "Z": "12",
  "B": "13",
  "A": "14",
  "VISOIN": "15",
  "GND2_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND1_1: "power_in", VCC_2: "power_in", RXD: "output", "~{RE}": "input", DE: "input", TXD: "input", VCC_7: "passive", GND1_8: "passive", GND2_9: "power_in", VISOOUT: "power_in", Y: "output", Z: "output", B: "input", A: "input", VISOIN: "power_in", GND2_16: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADM2687E extends Component.withPins({
  "GND1_1": "1",
  "VCC_2": "2",
  "RXD": "3",
  "~{RE}": "4",
  "DE": "5",
  "TXD": "6",
  "VCC_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "VISOOUT": "10",
  "Y": "11",
  "Z": "12",
  "B": "13",
  "A": "14",
  "VISOIN": "15",
  "GND2_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND1_1: "power_in", VCC_2: "power_in", RXD: "output", "~{RE}": "input", DE: "input", TXD: "input", VCC_7: "passive", GND1_8: "passive", GND2_9: "power_in", VISOOUT: "power_in", Y: "output", Z: "output", B: "input", A: "input", VISOIN: "power_in", GND2_16: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADM3485xR extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADM3490ExR extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM3488ExR extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class ADM3491ExR extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "VCC_13": "13",
  "VCC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", VCC_13: "power_in", VCC_14: "passive", ...opts.pinTypes } });
  }
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
 */
export class AZ75232M extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class AZ75232G extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class AZ75232GS extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class GD65232DB extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class GD65232DW extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class GD65232PW extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class GD75232DB extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class GD75232DW extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class GD75232N extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class GD75232PW extends Component.withPins({
  "RY3": "17",
  "RY2": "18",
  "RY1": "19",
  "V_{CC}": "20",
  "V_{DD}": "1",
  "RA1": "2",
  "RA2": "3",
  "RA3": "4",
  "DY1": "5",
  "DY2": "6",
  "RA4": "7",
  "DY3": "8",
  "RA5": "9",
  "V_{SS}": "10",
  "GND": "11",
  "RY5": "12",
  "DA3": "13",
  "RY4": "14",
  "DA2": "15",
  "DA1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RY3: "output", RY2: "output", RY1: "output", "V_{CC}": "power_in", "V_{DD}": "power_in", RA1: "input", RA2: "input", RA3: "input", DY1: "output", DY2: "output", RA4: "input", DY3: "output", RA5: "input", "V_{SS}": "power_in", GND: "power_in", RY5: "output", DA3: "input", RY4: "output", DA2: "input", DA1: "input", ...opts.pinTypes } });
  }
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
 */
export class ICL3232 extends Component.withPins({
  "C1+": "1",
  "VS+": "2",
  "C1-": "3",
  "C2+": "4",
  "C2-": "5",
  "VS-": "6",
  "T2OUT": "7",
  "R2IN": "8",
  "R2OUT": "9",
  "T2IN": "10",
  "T1IN": "11",
  "R1OUT": "12",
  "R1IN": "13",
  "T1OUT": "14",
  "GND": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISL3172E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISL3175E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISL3178E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISL3280ExHZ extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "RO": "3",
  "B": "4",
  "A": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", RO: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class ISL3281ExHZ extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "RO": "3",
  "B": "4",
  "RE": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", RO: "output", B: "input", RE: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class ISL3282ExRHZ extends Component.withPins({
  "RO": "1",
  "GND_2": "2",
  "NC": "3",
  "VCC": "4",
  "A": "5",
  "VL": "6",
  "~{RE}": "7",
  "B": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", GND_2: "power_in", NC: "no_connect", VCC: "power_in", A: "input", VL: "power_in", "~{RE}": "input", B: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class ISL3283ExHZ extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "RO": "3",
  "B": "4",
  "~{RE}": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", RO: "output", B: "input", "~{RE}": "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class ISL3284ExHZ extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "RO": "3",
  "B": "4",
  "VL": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", RO: "output", B: "input", VL: "power_in", A: "input", ...opts.pinTypes } });
  }
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
 */
export class ISL3295xxH extends Component.withPins({
  "DI": "1",
  "VCC": "2",
  "DE": "3",
  "Z": "4",
  "GND": "5",
  "Y": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DI: "input", VCC: "power_in", DE: "input", Z: "output", GND: "power_in", Y: "output", ...opts.pinTypes } });
  }
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
 */
export class ISL3298xxRT extends Component.withPins({
  "VL": "1",
  "DE": "2",
  "DI": "3",
  "GND_4": "4",
  "GND_5": "5",
  "Y": "6",
  "Z": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VL: "power_in", DE: "input", DI: "input", GND_4: "passive", GND_5: "power_in", Y: "output", Z: "output", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class ISL83491 extends Component.withPins({
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "Y": "9",
  "~{Z}": "10",
  "~{B}": "11",
  "A": "12",
  "VCC_13": "13",
  "VCC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "power_in", Y: "output", "~{Z}": "output", "~{B}": "input", A: "input", VCC_13: "power_in", VCC_14: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISO1500 extends Component.withPins({
  "VCC1": "1",
  "GND1_2": "2",
  "R": "3",
  "~{RE}": "4",
  "DE": "5",
  "D": "6",
  "NC_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "VCC2_10": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "NC_14": "14",
  "GND2_15": "15",
  "VCC2_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC1: "power_in", GND1_2: "power_in", R: "output", "~{RE}": "input", DE: "input", D: "input", NC_7: "no_connect", GND1_8: "passive", GND2_9: "power_in", VCC2_10: "power_in", NC_11: "no_connect", A: "bidirectional", B: "bidirectional", NC_14: "no_connect", GND2_15: "passive", VCC2_16: "passive", ...opts.pinTypes } });
  }
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
 */
export class ISO3082DW extends Component.withPins({
  "Vcc1": "1",
  "GND1_2": "2",
  "R": "3",
  "~{RE}": "4",
  "DE": "5",
  "D": "6",
  "GND1_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "GND2_10": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "NC_14": "14",
  "GND2_15": "15",
  "Vcc2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc1: "power_in", GND1_2: "power_in", R: "output", "~{RE}": "input", DE: "input", D: "input", GND1_7: "power_in", GND1_8: "power_in", GND2_9: "power_in", GND2_10: "power_in", NC_11: "no_connect", A: "bidirectional", B: "bidirectional", NC_14: "no_connect", GND2_15: "power_in", Vcc2: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISO3088DW extends Component.withPins({
  "Vcc1": "1",
  "GND1_2": "2",
  "R": "3",
  "~{RE}": "4",
  "DE": "5",
  "D": "6",
  "GND1_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "GND2_10": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "NC_14": "14",
  "GND2_15": "15",
  "Vcc2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc1: "power_in", GND1_2: "power_in", R: "output", "~{RE}": "input", DE: "input", D: "input", GND1_7: "power_in", GND1_8: "power_in", GND2_9: "power_in", GND2_10: "power_in", NC_11: "no_connect", A: "bidirectional", B: "bidirectional", NC_14: "no_connect", GND2_15: "power_in", Vcc2: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1785xN8 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1785AxN8 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1785AxS8 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1785xS8 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1791xN8 extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1791AxN8 extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2852xS extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1791AxS extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LT1791xS extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2850xDD extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND_5": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_5: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2850xMS8 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2851xDD extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND_4": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND_4: "power_in", Y: "output", Z: "output", B: "input", A: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2851xMS8 extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC2851xS8 extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC2852xDD extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND_5": "5",
  "Y": "6",
  "Z": "7",
  "B": "8",
  "A": "9",
  "VCC": "10",
  "GND_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_5: "power_in", Y: "output", Z: "output", B: "input", A: "input", VCC: "power_in", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2852xMS extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "Y": "6",
  "Z": "7",
  "B": "8",
  "A": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2856xDD_1 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND_5": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_5: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2856xDD_2 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND_5": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_5: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2856xMS8_1 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2856xMS8_2 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2857xDD_1 extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND_4": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND_4: "power_in", Y: "output", Z: "output", B: "input", A: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2857xDD_2 extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND_4": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND_4: "power_in", Y: "output", Z: "output", B: "input", A: "input", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2857xMS8_1 extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC2857xMS8_2 extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC2858xDD_1 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND_5": "5",
  "Y": "6",
  "Z": "7",
  "B": "8",
  "A": "9",
  "VCC": "10",
  "GND_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_5: "power_in", Y: "output", Z: "output", B: "input", A: "input", VCC: "power_in", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2858xDD_2 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND_5": "5",
  "Y": "6",
  "Z": "7",
  "B": "8",
  "A": "9",
  "VCC": "10",
  "GND_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_5: "power_in", Y: "output", Z: "output", B: "input", A: "input", VCC: "power_in", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2858xMS_1 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "Y": "6",
  "Z": "7",
  "B": "8",
  "A": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2858xMS_2 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "Y": "6",
  "Z": "7",
  "B": "8",
  "A": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2861 extends Component.withPins({
  "RO": "1",
  "RE": "2",
  "DE": "3",
  "DI": "4",
  "TE": "5",
  "GND": "6",
  "SLO": "11",
  "Y": "12",
  "~{Z}": "13",
  "~{B}": "14",
  "A": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", RE: "input", DE: "input", DI: "input", TE: "input", GND: "power_in", SLO: "input", Y: "output", "~{Z}": "output", "~{B}": "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX13432EESD extends Component.withPins({
  "Vlogic": "1",
  "RO": "2",
  "DE": "3",
  "~{RE}": "4",
  "DI": "5",
  "GND_6": "6",
  "NC_7": "7",
  "GND_8": "8",
  "Y": "9",
  "~{Z}": "10",
  "~{B}": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vlogic: "power_in", RO: "output", DE: "input", "~{RE}": "input", DI: "input", GND_6: "power_in", NC_7: "no_connect", GND_8: "power_in", Y: "output", "~{Z}": "output", "~{B}": "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX13432EETD extends Component.withPins({
  "Vlogic": "1",
  "RO": "2",
  "DE": "3",
  "~{RE}": "4",
  "DI": "5",
  "GND_6": "6",
  "NC_7": "7",
  "GND_8": "8",
  "Y": "9",
  "~{Z}": "10",
  "~{B}": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
  "EP": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vlogic: "power_in", RO: "output", DE: "input", "~{RE}": "input", DI: "input", GND_6: "power_in", NC_7: "no_connect", GND_8: "power_in", Y: "output", "~{Z}": "output", "~{B}": "input", A: "input", NC_13: "no_connect", VCC: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX13433EESD extends Component.withPins({
  "Vlogic": "1",
  "RO": "2",
  "DE": "3",
  "~{RE}": "4",
  "DI": "5",
  "GND_6": "6",
  "NC_7": "7",
  "GND_8": "8",
  "Y": "9",
  "~{Z}": "10",
  "~{B}": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vlogic: "power_in", RO: "output", DE: "input", "~{RE}": "input", DI: "input", GND_6: "power_in", NC_7: "no_connect", GND_8: "power_in", Y: "output", "~{Z}": "output", "~{B}": "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX13433EETD extends Component.withPins({
  "Vlogic": "1",
  "RO": "2",
  "DE": "3",
  "~{RE}": "4",
  "DI": "5",
  "GND_6": "6",
  "NC_7": "7",
  "GND_8": "8",
  "Y": "9",
  "~{Z}": "10",
  "~{B}": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
  "EP": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vlogic: "power_in", RO: "output", DE: "input", "~{RE}": "input", DI: "input", GND_6: "power_in", NC_7: "no_connect", GND_8: "power_in", Y: "output", "~{Z}": "output", "~{B}": "input", A: "input", NC_13: "no_connect", VCC: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX14783ExS extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX14830 extends Component.withPins({
  "SPI/~{I2C}": "1",
  "LDOEN": "2",
  "MISO/SDA": "3",
  "SCLK/SCL": "4",
  "~{CS}/A0": "5",
  "MOSI/A1": "6",
  "~{IRQ}": "7",
  "~{RST}": "8",
  "VL": "9",
  "DGND": "10",
  "GPIO0": "11",
  "GPIO1": "12",
  "GPIO2": "13",
  "GPIO3": "14",
  "~{RTS0}": "15",
  "~{CTS0}": "16",
  "RX0": "17",
  "TX0": "18",
  "GPIO4": "19",
  "GPIO5": "20",
  "GPIO6": "21",
  "GPIO7": "22",
  "~{RTS1}": "23",
  "~{CTS1}": "24",
  "RX1": "25",
  "TX1": "26",
  "GPIO8": "27",
  "GPIO9": "28",
  "GPIO10": "29",
  "GPIO11": "30",
  "~{RTS2}": "31",
  "~{CTS2}": "32",
  "RX2": "33",
  "TX2": "34",
  "GPIO12": "35",
  "GPIO13": "36",
  "GPIO14": "37",
  "GPIO15": "38",
  "~{RTS3}": "39",
  "~{CTS3}": "40",
  "RX3": "41",
  "TX3": "42",
  "VEXT": "43",
  "XOUT": "44",
  "XIN": "45",
  "AGND_46": "46",
  "VA": "47",
  "V18": "48",
  "AGND_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SPI/~{I2C}": "input", LDOEN: "input", "MISO/SDA": "bidirectional", "SCLK/SCL": "input", "~{CS}/A0": "input", "MOSI/A1": "input", "~{IRQ}": "input", "~{RST}": "input", VL: "power_in", DGND: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", "~{RTS0}": "output", "~{CTS0}": "input", RX0: "input", TX0: "output", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", "~{RTS1}": "output", "~{CTS1}": "input", RX1: "input", TX1: "output", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", "~{RTS2}": "output", "~{CTS2}": "input", RX2: "input", TX2: "output", GPIO12: "bidirectional", GPIO13: "bidirectional", GPIO14: "bidirectional", GPIO15: "bidirectional", "~{RTS3}": "output", "~{CTS3}": "input", RX3: "input", TX3: "output", VEXT: "power_in", XOUT: "output", XIN: "input", AGND_46: "power_in", VA: "power_in", V18: "power_out", AGND_49: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX481E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX1487E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX202 extends Component.withPins({
  "C1+": "1",
  "VS+": "2",
  "C1-": "3",
  "C2+": "4",
  "C2-": "5",
  "VS-": "6",
  "T2OUT": "7",
  "R2IN": "8",
  "R2OUT": "9",
  "T2IN": "10",
  "T1IN": "11",
  "R1OUT": "12",
  "R1IN": "13",
  "T1OUT": "14",
  "GND": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX232I extends Component.withPins({
  "C1+": "1",
  "VS+": "2",
  "C1-": "3",
  "C2+": "4",
  "C2-": "5",
  "VS-": "6",
  "T2OUT": "7",
  "R2IN": "8",
  "R2OUT": "9",
  "T2IN": "10",
  "T1IN": "11",
  "R1OUT": "12",
  "R1IN": "13",
  "T1OUT": "14",
  "GND": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX238xWG_ extends Component.withPins({
  "T2OUT_1": "1",
  "T1OUT_2": "2",
  "R2IN_3": "3",
  "R2OUT_4": "4",
  "T1IN_5": "5",
  "R1OUT_6": "6",
  "R1IN_7": "7",
  "GND": "8",
  "VCC": "9",
  "C1+": "10",
  "VS+": "11",
  "C1-": "12",
  "C2+": "13",
  "C2-": "14",
  "VS-": "15",
  "R2IN_16": "16",
  "R2OUT_17": "17",
  "T2IN_18": "18",
  "T1IN_19": "19",
  "T2OUT_20": "20",
  "T2IN_21": "21",
  "R1OUT_22": "22",
  "R1IN_23": "23",
  "T1OUT_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { T2OUT_1: "output", T1OUT_2: "output", R2IN_3: "input", R2OUT_4: "output", T1IN_5: "input", R1OUT_6: "output", R1IN_7: "input", GND: "power_in", VCC: "power_in", "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", R2IN_16: "input", R2OUT_17: "output", T2IN_18: "input", T1IN_19: "input", T2OUT_20: "output", T2IN_21: "input", R1OUT_22: "output", R1IN_23: "input", T1OUT_24: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX238xNG_ extends Component.withPins({
  "T2OUT_1": "1",
  "T1OUT_2": "2",
  "R2IN_3": "3",
  "R2OUT_4": "4",
  "T1IN_5": "5",
  "R1OUT_6": "6",
  "R1IN_7": "7",
  "GND": "8",
  "VCC": "9",
  "C1+": "10",
  "VS+": "11",
  "C1-": "12",
  "C2+": "13",
  "C2-": "14",
  "VS-": "15",
  "R2IN_16": "16",
  "R2OUT_17": "17",
  "T2IN_18": "18",
  "T1IN_19": "19",
  "T2OUT_20": "20",
  "T2IN_21": "21",
  "R1OUT_22": "22",
  "R1IN_23": "23",
  "T1OUT_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { T2OUT_1: "output", T1OUT_2: "output", R2IN_3: "input", R2OUT_4: "output", T1IN_5: "input", R1OUT_6: "output", R1IN_7: "input", GND: "power_in", VCC: "power_in", "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", R2IN_16: "input", R2OUT_17: "output", T2IN_18: "input", T1IN_19: "input", T2OUT_20: "output", T2IN_21: "input", R1OUT_22: "output", R1IN_23: "input", T1OUT_24: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX3051 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VDD": "3",
  "RXD": "4",
  "SHDN": "5",
  "CANL": "6",
  "CANH": "7",
  "RS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VDD: "power_in", RXD: "output", SHDN: "input", CANL: "bidirectional", CANH: "bidirectional", RS: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX3072E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SP3481CN extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX3075E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX3078E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX3218 extends Component.withPins({
  "LX": "1",
  "~{INVALID}": "2",
  "FORCEON": "3",
  "~{FORCEOFF}": "4",
  "GND_5": "5",
  "VCC": "6",
  "T1IN": "7",
  "T2IN": "8",
  "R1OUT": "9",
  "R2OUT": "10",
  "R2IN": "11",
  "R1IN": "12",
  "T2OUT": "13",
  "T1OUT": "14",
  "V-": "15",
  "C1-": "16",
  "GND_17": "17",
  "C1+": "18",
  "V+": "19",
  "GND_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LX: "passive", "~{INVALID}": "output", FORCEON: "input", "~{FORCEOFF}": "input", GND_5: "power_in", VCC: "power_in", T1IN: "input", T2IN: "input", R1OUT: "output", R2OUT: "output", R2IN: "input", R1IN: "input", T2OUT: "output", T1OUT: "output", "V-": "power_out", "C1-": "passive", GND_17: "passive", "C1+": "passive", "V+": "power_out", GND_20: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX3221 extends Component.withPins({
  "~{EN}": "1",
  "C1+": "2",
  "V+": "3",
  "C1-": "4",
  "C2+": "5",
  "C2-": "6",
  "V-": "7",
  "RIN": "8",
  "ROUT": "9",
  "~{INVALID}": "10",
  "DIN": "11",
  "FORCEON": "12",
  "DOUT": "13",
  "GND": "14",
  "VCC": "15",
  "~{FORCEOFF}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{EN}": "input", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", RIN: "input", ROUT: "output", "~{INVALID}": "output", DIN: "input", FORCEON: "input", DOUT: "output", GND: "power_in", VCC: "power_in", "~{FORCEOFF}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX3226 extends Component.withPins({
  "READY": "1",
  "C1+": "2",
  "V+": "3",
  "C1-": "4",
  "C2+": "5",
  "C2-": "6",
  "V-": "7",
  "R1IN": "8",
  "R1OUT": "9",
  "~{INVALID}": "10",
  "T1IN": "11",
  "FORCEON": "12",
  "T1OUT": "13",
  "GND": "14",
  "VCC": "15",
  "~{FORCEOFF}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { READY: "output", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", R1IN: "input", R1OUT: "output", "~{INVALID}": "output", T1IN: "input", FORCEON: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", "~{FORCEOFF}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX3227 extends Component.withPins({
  "READY": "1",
  "C1+": "2",
  "V+": "3",
  "C1-": "4",
  "C2+": "5",
  "C2-": "6",
  "V-": "7",
  "R1IN": "8",
  "R1OUT": "9",
  "~{INVALID}": "10",
  "T1IN": "11",
  "FORCEON": "12",
  "T1OUT": "13",
  "GND": "14",
  "VCC": "15",
  "~{FORCEOFF}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { READY: "output", "C1+": "passive", "V+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "V-": "power_out", R1IN: "input", R1OUT: "output", "~{INVALID}": "output", T1IN: "input", FORCEON: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", "~{FORCEOFF}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX3232 extends Component.withPins({
  "C1+": "1",
  "VS+": "2",
  "C1-": "3",
  "C2+": "4",
  "C2-": "5",
  "VS-": "6",
  "T2OUT": "7",
  "R2IN": "8",
  "R2OUT": "9",
  "T2IN": "10",
  "T1IN": "11",
  "R1OUT": "12",
  "R1IN": "13",
  "T1OUT": "14",
  "GND": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX3284E extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "RO": "3",
  "B": "4",
  "VL": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", RO: "output", B: "input", VL: "power_in", A: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX3483 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX3485 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX3486 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX3488xPA extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX3488xSA extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX3490xPA extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX3490xSA extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX483E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX485E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX487E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX488E extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX489E extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX490E extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX491E extends Component.withPins({
  "NC_1": "1",
  "RO": "2",
  "~{RE}": "3",
  "DE": "4",
  "DI": "5",
  "GND_6": "6",
  "GND_7": "7",
  "NC_8": "8",
  "Y": "9",
  "Z": "10",
  "B": "11",
  "A": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND_6: "power_in", GND_7: "passive", NC_8: "no_connect", Y: "output", Z: "output", B: "input", A: "input", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MC6850 extends Component.withPins({
  "VSS": "1",
  "Rx_Data": "2",
  "Rx_CLK": "3",
  "Tx_CLK": "4",
  "~{RTS}": "5",
  "Tx_Data": "6",
  "~{IRQ}": "7",
  "CS0": "8",
  "CS2": "9",
  "CS1": "10",
  "RS": "11",
  "VCC": "12",
  "R/~{W}": "13",
  "E": "14",
  "D7": "15",
  "D6": "16",
  "D5": "17",
  "D4": "18",
  "D3": "19",
  "D2": "20",
  "D1": "21",
  "D0": "22",
  "~{DCD}": "23",
  "~{CTS}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", Rx_Data: "input", Rx_CLK: "input", Tx_CLK: "input", "~{RTS}": "output", Tx_Data: "output", "~{IRQ}": "output", CS0: "input", CS2: "input", CS1: "input", RS: "input", VCC: "power_in", "R/~{W}": "input", E: "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{DCD}": "input", "~{CTS}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68A50 extends Component.withPins({
  "VSS": "1",
  "Rx_Data": "2",
  "Rx_CLK": "3",
  "Tx_CLK": "4",
  "~{RTS}": "5",
  "Tx_Data": "6",
  "~{IRQ}": "7",
  "CS0": "8",
  "CS2": "9",
  "CS1": "10",
  "RS": "11",
  "VCC": "12",
  "R/~{W}": "13",
  "E": "14",
  "D7": "15",
  "D6": "16",
  "D5": "17",
  "D4": "18",
  "D3": "19",
  "D2": "20",
  "D1": "21",
  "D0": "22",
  "~{DCD}": "23",
  "~{CTS}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", Rx_Data: "input", Rx_CLK: "input", Tx_CLK: "input", "~{RTS}": "output", Tx_Data: "output", "~{IRQ}": "output", CS0: "input", CS2: "input", CS1: "input", RS: "input", VCC: "power_in", "R/~{W}": "input", E: "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{DCD}": "input", "~{CTS}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68B50 extends Component.withPins({
  "VSS": "1",
  "Rx_Data": "2",
  "Rx_CLK": "3",
  "Tx_CLK": "4",
  "~{RTS}": "5",
  "Tx_Data": "6",
  "~{IRQ}": "7",
  "CS0": "8",
  "CS2": "9",
  "CS1": "10",
  "RS": "11",
  "VCC": "12",
  "R/~{W}": "13",
  "E": "14",
  "D7": "15",
  "D6": "16",
  "D5": "17",
  "D4": "18",
  "D3": "19",
  "D2": "20",
  "D1": "21",
  "D0": "22",
  "~{DCD}": "23",
  "~{CTS}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", Rx_Data: "input", Rx_CLK: "input", Tx_CLK: "input", "~{RTS}": "output", Tx_Data: "output", "~{IRQ}": "output", CS0: "input", CS2: "input", CS1: "input", RS: "input", VCC: "power_in", "R/~{W}": "input", E: "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{DCD}": "input", "~{CTS}": "input", ...opts.pinTypes } });
  }
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
 */
export class SC16IS740 extends Component.withPins({
  "VDD": "1",
  "A0/~{CS}": "2",
  "A1/SI": "3",
  "SO": "4",
  "SCL/SCLK": "5",
  "SDA": "6",
  "~{IRQ}": "7",
  "I2C/~{SPI}": "8",
  "VSS": "9",
  "~{RTS}": "10",
  "~{CTS}": "11",
  "TX": "12",
  "RX": "13",
  "~{RESET}": "14",
  "XTAL1": "15",
  "XTAL2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "A0/~{CS}": "input", "A1/SI": "input", SO: "output", "SCL/SCLK": "input", SDA: "bidirectional", "~{IRQ}": "open_collector", "I2C/~{SPI}": "input", VSS: "power_in", "~{RTS}": "output", "~{CTS}": "input", TX: "output", RX: "input", "~{RESET}": "input", XTAL1: "input", XTAL2: "output", ...opts.pinTypes } });
  }
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
 */
export class SC16IS750xBS extends Component.withPins({
  "~{RESET}": "1",
  "XTAL1": "2",
  "XTAL2": "3",
  "VDD": "4",
  "I2C/~{SPI}": "5",
  "A0/~{CS}": "6",
  "A1/SI": "7",
  "SO": "8",
  "SCL/SCLK": "9",
  "SDA": "10",
  "~{IRQ}": "11",
  "GPIO0": "12",
  "GPIO1": "13",
  "GPIO2": "14",
  "GPIO3": "15",
  "VSS_16": "16",
  "GPIO4/~{DSR}": "17",
  "GPIO5/~{DTR}": "18",
  "GPIO6/~{CD}": "19",
  "GPIO7/~{RI}": "20",
  "~{RTS}": "21",
  "~{CTS}": "22",
  "TX": "23",
  "RX": "24",
  "VSS_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", XTAL1: "input", XTAL2: "output", VDD: "power_in", "I2C/~{SPI}": "input", "A0/~{CS}": "input", "A1/SI": "input", SO: "output", "SCL/SCLK": "input", SDA: "bidirectional", "~{IRQ}": "open_collector", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", VSS_16: "power_in", "GPIO4/~{DSR}": "bidirectional", "GPIO5/~{DTR}": "bidirectional", "GPIO6/~{CD}": "bidirectional", "GPIO7/~{RI}": "bidirectional", "~{RTS}": "output", "~{CTS}": "input", TX: "output", RX: "input", VSS_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class SC16IS750xPW extends Component.withPins({
  "~{CTS}": "1",
  "TX": "2",
  "RX": "3",
  "~{RESET}": "4",
  "XTAL1": "5",
  "XTAL2": "6",
  "VDD": "7",
  "I2C/~{SPI}": "8",
  "A0/~{CS}": "9",
  "A1/SI": "10",
  "SO": "11",
  "SCL/SCLK": "12",
  "SDA": "13",
  "~{IRQ}": "14",
  "GPIO0": "15",
  "GPIO1": "16",
  "GPIO2": "17",
  "GPIO3": "18",
  "VSS": "19",
  "GPIO4/~{DSR}": "20",
  "GPIO5/~{DTR}": "21",
  "GPIO6/~{CD}": "22",
  "GPIO7/~{RI}": "23",
  "~{RTS}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CTS}": "input", TX: "output", RX: "input", "~{RESET}": "input", XTAL1: "input", XTAL2: "output", VDD: "power_in", "I2C/~{SPI}": "input", "A0/~{CS}": "input", "A1/SI": "input", SO: "output", "SCL/SCLK": "input", SDA: "bidirectional", "~{IRQ}": "open_collector", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", VSS: "power_in", "GPIO4/~{DSR}": "bidirectional", "GPIO5/~{DTR}": "bidirectional", "GPIO6/~{CD}": "bidirectional", "GPIO7/~{RI}": "bidirectional", "~{RTS}": "output", ...opts.pinTypes } });
  }
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
 */
export class SC16IS752IBS extends Component.withPins({
  "RXA": "1",
  "~{RESET}": "2",
  "XTAL1": "3",
  "XTAL2": "4",
  "VDD_5": "5",
  "I2C/~{SPI}": "6",
  "A0/~{CS}": "7",
  "A1/SI": "8",
  "n.c./SO": "9",
  "SCL/SCLK": "10",
  "SDA/VSS": "11",
  "VSS_12": "12",
  "VDD_13": "13",
  "~{IRQ}": "14",
  "~{CTSB}": "15",
  "~{RTSB}": "16",
  "GPIO0/~{DSRB}": "17",
  "GPIO1/~{DTRB}": "18",
  "GPIO2/~{CDB}": "19",
  "GPIO3/~{RIB}": "20",
  "VSS_21": "21",
  "TXB": "22",
  "RXB": "23",
  "GPIO4/~{DSRA}": "24",
  "GPIO5/~{DTRA}": "25",
  "GPIO6/~{CDA}": "26",
  "GPIO7/~{RIA}": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "~{RTSA}": "30",
  "~{CTSA}": "31",
  "TXA": "32",
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXA: "input", "~{RESET}": "input", XTAL1: "input", XTAL2: "output", VDD_5: "power_in", "I2C/~{SPI}": "input", "A0/~{CS}": "input", "A1/SI": "input", "n.c./SO": "output", "SCL/SCLK": "input", "SDA/VSS": "bidirectional", VSS_12: "power_in", VDD_13: "passive", "~{IRQ}": "open_collector", "~{CTSB}": "input", "~{RTSB}": "output", "GPIO0/~{DSRB}": "bidirectional", "GPIO1/~{DTRB}": "bidirectional", "GPIO2/~{CDB}": "bidirectional", "GPIO3/~{RIB}": "bidirectional", VSS_21: "passive", TXB: "output", RXB: "input", "GPIO4/~{DSRA}": "bidirectional", "GPIO5/~{DTRA}": "bidirectional", "GPIO6/~{CDA}": "bidirectional", "GPIO7/~{RIA}": "bidirectional", VDD_28: "passive", VSS_29: "passive", "~{RTSA}": "output", "~{CTSA}": "input", TXA: "output", VSS_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class SC16IS752IPW extends Component.withPins({
  "~{RTSA}": "1",
  "~{CTSA}": "2",
  "TXA": "3",
  "RXA": "4",
  "~{RESET}": "5",
  "XTAL1": "6",
  "XTAL2": "7",
  "VDD": "8",
  "I2C/~{SPI}": "9",
  "A0/~{CS}": "10",
  "A1/SI": "11",
  "n.c./SO": "12",
  "SCL/SCLK": "13",
  "SDA/VSS": "14",
  "~{IRQ}": "15",
  "~{CTSB}": "16",
  "~{RTSB}": "17",
  "GPIO0/~{DSRB}": "18",
  "GPIO1/~{DTRB}": "19",
  "GPIO2/~{CDB}": "20",
  "GPIO3/~{RIB}": "21",
  "VSS": "22",
  "TXB": "23",
  "RXB": "24",
  "GPIO4/~{DSRA}": "25",
  "GPIO5/~{DTRA}": "26",
  "GPIO6/~{CDA}": "27",
  "GPIO7/~{RIA}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RTSA}": "output", "~{CTSA}": "input", TXA: "output", RXA: "input", "~{RESET}": "input", XTAL1: "input", XTAL2: "output", VDD: "power_in", "I2C/~{SPI}": "input", "A0/~{CS}": "input", "A1/SI": "input", "n.c./SO": "output", "SCL/SCLK": "input", "SDA/VSS": "bidirectional", "~{IRQ}": "open_collector", "~{CTSB}": "input", "~{RTSB}": "output", "GPIO0/~{DSRB}": "bidirectional", "GPIO1/~{DTRB}": "bidirectional", "GPIO2/~{CDB}": "bidirectional", "GPIO3/~{RIB}": "bidirectional", VSS: "power_in", TXB: "output", RXB: "input", "GPIO4/~{DSRA}": "bidirectional", "GPIO5/~{DTRA}": "bidirectional", "GPIO6/~{CDA}": "bidirectional", "GPIO7/~{RIA}": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class SC16IS760xBS extends Component.withPins({
  "~{RESET}": "1",
  "XTAL1": "2",
  "XTAL2": "3",
  "VDD": "4",
  "I2C/~{SPI}": "5",
  "A0/~{CS}": "6",
  "A1/SI": "7",
  "SO": "8",
  "SCL/SCLK": "9",
  "SDA": "10",
  "~{IRQ}": "11",
  "GPIO0": "12",
  "GPIO1": "13",
  "GPIO2": "14",
  "GPIO3": "15",
  "VSS_16": "16",
  "GPIO4/~{DSR}": "17",
  "GPIO5/~{DTR}": "18",
  "GPIO6/~{CD}": "19",
  "GPIO7/~{RI}": "20",
  "~{RTS}": "21",
  "~{CTS}": "22",
  "TX": "23",
  "RX": "24",
  "VSS_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", XTAL1: "input", XTAL2: "output", VDD: "power_in", "I2C/~{SPI}": "input", "A0/~{CS}": "input", "A1/SI": "input", SO: "output", "SCL/SCLK": "input", SDA: "bidirectional", "~{IRQ}": "open_collector", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", VSS_16: "power_in", "GPIO4/~{DSR}": "bidirectional", "GPIO5/~{DTR}": "bidirectional", "GPIO6/~{CD}": "bidirectional", "GPIO7/~{RI}": "bidirectional", "~{RTS}": "output", "~{CTS}": "input", TX: "output", RX: "input", VSS_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class SC16IS760xPW extends Component.withPins({
  "~{CTS}": "1",
  "TX": "2",
  "RX": "3",
  "~{RESET}": "4",
  "XTAL1": "5",
  "XTAL2": "6",
  "VDD": "7",
  "I2C/~{SPI}": "8",
  "A0/~{CS}": "9",
  "A1/SI": "10",
  "SO": "11",
  "SCL/SCLK": "12",
  "SDA": "13",
  "~{IRQ}": "14",
  "GPIO0": "15",
  "GPIO1": "16",
  "GPIO2": "17",
  "GPIO3": "18",
  "VSS": "19",
  "GPIO4/~{DSR}": "20",
  "GPIO5/~{DTR}": "21",
  "GPIO6/~{CD}": "22",
  "GPIO7/~{RI}": "23",
  "~{RTS}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CTS}": "input", TX: "output", RX: "input", "~{RESET}": "input", XTAL1: "input", XTAL2: "output", VDD: "power_in", "I2C/~{SPI}": "input", "A0/~{CS}": "input", "A1/SI": "input", SO: "output", "SCL/SCLK": "input", SDA: "bidirectional", "~{IRQ}": "open_collector", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", VSS: "power_in", "GPIO4/~{DSR}": "bidirectional", "GPIO5/~{DTR}": "bidirectional", "GPIO6/~{CD}": "bidirectional", "GPIO7/~{RI}": "bidirectional", "~{RTS}": "output", ...opts.pinTypes } });
  }
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
 */
export class SC16IS762IBS extends Component.withPins({
  "RXA": "1",
  "~{RESET}": "2",
  "XTAL1": "3",
  "XTAL2": "4",
  "VDD_5": "5",
  "I2C/~{SPI}": "6",
  "A0/~{CS}": "7",
  "A1/SI": "8",
  "n.c./SO": "9",
  "SCL/SCLK": "10",
  "SDA/VSS": "11",
  "VSS_12": "12",
  "VDD_13": "13",
  "~{IRQ}": "14",
  "~{CTSB}": "15",
  "~{RTSB}": "16",
  "GPIO0/~{DSRB}": "17",
  "GPIO1/~{DTRB}": "18",
  "GPIO2/~{CDB}": "19",
  "GPIO3/~{RIB}": "20",
  "VSS_21": "21",
  "TXB": "22",
  "RXB": "23",
  "GPIO4/~{DSRA}": "24",
  "GPIO5/~{DTRA}": "25",
  "GPIO6/~{CDA}": "26",
  "GPIO7/~{RIA}": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "~{RTSA}": "30",
  "~{CTSA}": "31",
  "TXA": "32",
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXA: "input", "~{RESET}": "input", XTAL1: "input", XTAL2: "output", VDD_5: "power_in", "I2C/~{SPI}": "input", "A0/~{CS}": "input", "A1/SI": "input", "n.c./SO": "output", "SCL/SCLK": "input", "SDA/VSS": "bidirectional", VSS_12: "power_in", VDD_13: "passive", "~{IRQ}": "open_collector", "~{CTSB}": "input", "~{RTSB}": "output", "GPIO0/~{DSRB}": "bidirectional", "GPIO1/~{DTRB}": "bidirectional", "GPIO2/~{CDB}": "bidirectional", "GPIO3/~{RIB}": "bidirectional", VSS_21: "passive", TXB: "output", RXB: "input", "GPIO4/~{DSRA}": "bidirectional", "GPIO5/~{DTRA}": "bidirectional", "GPIO6/~{CDA}": "bidirectional", "GPIO7/~{RIA}": "bidirectional", VDD_28: "passive", VSS_29: "passive", "~{RTSA}": "output", "~{CTSA}": "input", TXA: "output", VSS_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class SC16IS762IPW extends Component.withPins({
  "~{RTSA}": "1",
  "~{CTSA}": "2",
  "TXA": "3",
  "RXA": "4",
  "~{RESET}": "5",
  "XTAL1": "6",
  "XTAL2": "7",
  "VDD": "8",
  "I2C/~{SPI}": "9",
  "A0/~{CS}": "10",
  "A1/SI": "11",
  "n.c./SO": "12",
  "SCL/SCLK": "13",
  "SDA/VSS": "14",
  "~{IRQ}": "15",
  "~{CTSB}": "16",
  "~{RTSB}": "17",
  "GPIO0/~{DSRB}": "18",
  "GPIO1/~{DTRB}": "19",
  "GPIO2/~{CDB}": "20",
  "GPIO3/~{RIB}": "21",
  "VSS": "22",
  "TXB": "23",
  "RXB": "24",
  "GPIO4/~{DSRA}": "25",
  "GPIO5/~{DTRA}": "26",
  "GPIO6/~{CDA}": "27",
  "GPIO7/~{RIA}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RTSA}": "output", "~{CTSA}": "input", TXA: "output", RXA: "input", "~{RESET}": "input", XTAL1: "input", XTAL2: "output", VDD: "power_in", "I2C/~{SPI}": "input", "A0/~{CS}": "input", "A1/SI": "input", "n.c./SO": "output", "SCL/SCLK": "input", "SDA/VSS": "bidirectional", "~{IRQ}": "open_collector", "~{CTSB}": "input", "~{RTSB}": "output", "GPIO0/~{DSRB}": "bidirectional", "GPIO1/~{DTRB}": "bidirectional", "GPIO2/~{CDB}": "bidirectional", "GPIO3/~{RIB}": "bidirectional", VSS: "power_in", TXB: "output", RXB: "input", "GPIO4/~{DSRA}": "bidirectional", "GPIO5/~{DTRA}": "bidirectional", "GPIO6/~{CDA}": "bidirectional", "GPIO7/~{RIA}": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class SN65HVD11HD extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN65HVD1780 extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN65HVD1781 extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN65HVD1782 extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN75LBC176D extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN65LBC176D extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN75LBC176P extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN65LBC176P extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN65LBC176QD extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN65LBC176QDR extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN75176AD extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN75176AP extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SNJ55LBC176JG extends Component.withPins({
  "R": "1",
  "~{RE}": "2",
  "DE": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", "~{RE}": "input", DE: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SP3481CP extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SP3481EN extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SP3481EP extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SP3485CN extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SP3485CP extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SP3485EN extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SP3485EP extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SSP3085 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ST202ExD extends Component.withPins({
  "C1+": "1",
  "VS+": "2",
  "C1-": "3",
  "C2+": "4",
  "C2-": "5",
  "VS-": "6",
  "T2OUT": "7",
  "R2IN": "8",
  "R2OUT": "9",
  "T2IN": "10",
  "T1IN": "11",
  "R1OUT": "12",
  "R1IN": "13",
  "T1OUT": "14",
  "GND": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ST232ExD extends Component.withPins({
  "C1+": "1",
  "VS+": "2",
  "C1-": "3",
  "C2+": "4",
  "C2-": "5",
  "VS-": "6",
  "T2OUT": "7",
  "R2IN": "8",
  "R2OUT": "9",
  "T2IN": "10",
  "T1IN": "11",
  "R1OUT": "12",
  "R1IN": "13",
  "T1OUT": "14",
  "GND": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "C1+": "passive", "VS+": "power_out", "C1-": "passive", "C2+": "passive", "C2-": "passive", "VS-": "power_out", T2OUT: "output", R2IN: "input", R2OUT: "output", T2IN: "input", T1IN: "input", R1OUT: "output", R1IN: "input", T1OUT: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ST485E extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class STR485 extends Component.withPins({
  "VL": "1",
  "R": "2",
  "DE": "3",
  "~{RE}": "4",
  "D": "5",
  "GND_6": "6",
  "SLR": "7",
  "A": "8",
  "B": "9",
  "VCC": "10",
  "GND_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VL: "power_in", R: "output", DE: "input", "~{RE}": "input", D: "input", GND_6: "power_in", SLR: "input", A: "bidirectional", B: "bidirectional", VCC: "power_in", GND_11: "passive", ...opts.pinTypes } });
  }
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
 */
export class THVD1400D extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class THVD1420D extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class THVD1450D extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class THVD1450DR extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class THVD1451D extends Component.withPins({
  "VCC": "1",
  "R": "2",
  "D": "3",
  "GND": "4",
  "Y": "5",
  "Z": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", R: "output", D: "input", GND: "power_in", Y: "output", Z: "output", B: "input", A: "input", ...opts.pinTypes } });
  }
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
 */
export class THVD1500 extends Component.withPins({
  "RO": "1",
  "~{RE}": "2",
  "DE": "3",
  "DI": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RO: "output", "~{RE}": "input", DE: "input", DI: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class THVD8000 extends Component.withPins({
  "R": "1",
  "MODE": "2",
  "F_SET": "3",
  "D": "4",
  "GND": "5",
  "A": "6",
  "B": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "output", MODE: "input", F_SET: "input", D: "input", GND: "power_in", A: "bidirectional", B: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_UART:THVD8000";
  override referencePrefix = "U";
}

/**
 * SCC Serial Communication Controller, DIP-40
 *
 * KiCad symbol: `Interface_UART:Z8530`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: SCC Serial Communication.
 */
export class Z8530 extends Component.withPins({
  "D1": "1",
  "D3": "2",
  "D5": "3",
  "D7": "4",
  "~{INT}": "5",
  "IEO": "6",
  "IEI": "7",
  "~{INTACK}": "8",
  "VCC": "9",
  "~{W/REQA}": "10",
  "~{SYNCA}": "11",
  "~{RTXCA}": "12",
  "RXDA": "13",
  "~{TRXCA}": "14",
  "TXDA": "15",
  "~{DTR/REQA}": "16",
  "~{RTSA}": "17",
  "~{CTSA}": "18",
  "~{DCDA}": "19",
  "PCLK": "20",
  "~{DCDB}": "21",
  "~{CTSB}": "22",
  "~{RTSB}": "23",
  "~{DTR/REQB}": "24",
  "TXDB": "25",
  "~{TRXCB}": "26",
  "RXDB": "27",
  "~{RTXCB}": "28",
  "~{SYNCB}": "29",
  "~{W/REQB}": "30",
  "GND": "31",
  "D/~{C}": "32",
  "~{CE}": "33",
  "A/~{B}": "34",
  "~{WR}": "35",
  "~{RD}": "36",
  "D6": "37",
  "D4": "38",
  "D2": "39",
  "D0": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D1: "input", D3: "input", D5: "input", D7: "input", "~{INT}": "open_collector", IEO: "output", IEI: "input", "~{INTACK}": "input", VCC: "power_in", "~{W/REQA}": "output", "~{SYNCA}": "bidirectional", "~{RTXCA}": "input", RXDA: "input", "~{TRXCA}": "bidirectional", TXDA: "output", "~{DTR/REQA}": "output", "~{RTSA}": "output", "~{CTSA}": "input", "~{DCDA}": "input", PCLK: "input", "~{DCDB}": "input", "~{CTSB}": "input", "~{RTSB}": "output", "~{DTR/REQB}": "output", TXDB: "output", "~{TRXCB}": "bidirectional", RXDB: "input", "~{RTXCB}": "input", "~{SYNCB}": "bidirectional", "~{W/REQB}": "output", GND: "power_in", "D/~{C}": "input", "~{CE}": "input", "A/~{B}": "input", "~{WR}": "input", "~{RD}": "input", D6: "input", D4: "input", D2: "input", D0: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_UART:Z8530";
  override referencePrefix = "U";
}
