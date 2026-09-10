// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 1:8 LVCMOS High-Performance Clock Buffer, 1.8V to 3.3V, TSSOP-16
 *
 * KiCad symbol: `Interface:5PB1108PGxx`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.renesas.com/us/en/document/dst/5pb11xx-family-datasheet
 * Keywords: clock buffer lvcmos.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class _5PB1108PGxx extends Component.withPins({
  "CLKIN": "1",
  "1G": "2",
  "Y0": "3",
  "GND_4": "4",
  "VDD_5": "5",
  "Y4": "6",
  "GND_7": "7",
  "Y6": "8",
  "Y7": "9",
  "VDD_10": "10",
  "Y5": "11",
  "GND_12": "12",
  "Y2": "13",
  "VDD_14": "14",
  "Y3": "15",
  "Y1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLKIN: "input", "1G": "input", Y0: "output", GND_4: "power_in", VDD_5: "power_in", Y4: "output", GND_7: "passive", Y6: "output", Y7: "output", VDD_10: "passive", Y5: "output", GND_12: "passive", Y2: "output", VDD_14: "passive", Y3: "output", Y1: "output", ...opts.pinTypes } });
  }
  override schema = "Interface:5PB1108PGxx";
  override referencePrefix = "U";
}

/**
 * Peripheral Interface Adapter 1MHz, DIP-40
 *
 * KiCad symbol: `Interface:6821`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/6821.pdf
 * Keywords: PIA.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _6821 extends Component.withPins({
  "VSS": "1",
  "PA0": "2",
  "PA1": "3",
  "PA2": "4",
  "PA3": "5",
  "PA4": "6",
  "PA5": "7",
  "PA6": "8",
  "PA7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "CB1": "18",
  "CB2": "19",
  "VCC": "20",
  "R/~{W}": "21",
  "CS0": "22",
  "~{CS2}": "23",
  "CS1": "24",
  "ENABLE": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "~{RESET}": "34",
  "RS1": "35",
  "RS0": "36",
  "~{IRQB}": "37",
  "~{IRQA}": "38",
  "CA2": "39",
  "CA1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", CB1: "input", CB2: "bidirectional", VCC: "power_in", "R/~{W}": "input", CS0: "input", "~{CS2}": "input", CS1: "input", ENABLE: "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{RESET}": "input", RS1: "input", RS0: "input", "~{IRQB}": "open_collector", "~{IRQA}": "open_collector", CA2: "bidirectional", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:6821";
  override referencePrefix = "U";
}

/**
 * Peripheral Interface Adapter 1MHz, DIP-40
 *
 * KiCad symbol: `Interface:6822`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf1.alldatasheet.com/datasheet-pdf/view/135452/MOTOROLA/MC6822.html
 * Keywords: PIA.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _6822 extends Component.withPins({
  "VSS": "1",
  "PA0": "2",
  "PA1": "3",
  "PA2": "4",
  "PA3": "5",
  "PA4": "6",
  "PA5": "7",
  "PA6": "8",
  "PA7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "CB1": "18",
  "CB2": "19",
  "VCC": "20",
  "R/~{W}": "21",
  "CS0": "22",
  "~{CS2}": "23",
  "CS1": "24",
  "ENABLE": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "~{RESET}": "34",
  "RS1": "35",
  "RS0": "36",
  "~{IRQB}": "37",
  "~{IRQA}": "38",
  "CA2": "39",
  "CA1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", CB1: "input", CB2: "bidirectional", VCC: "power_in", "R/~{W}": "input", CS0: "input", "~{CS2}": "input", CS1: "input", ENABLE: "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{RESET}": "input", RS1: "input", RS0: "input", "~{IRQB}": "open_collector", "~{IRQA}": "open_collector", CA2: "bidirectional", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:6822";
  override referencePrefix = "U";
}

/**
 * PIT Parallel Interface and Timer
 *
 * KiCad symbol: `Interface:68230`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC68230.pdf
 * Keywords: MPRO.
 * Default footprint: Package_DIP:DIP-48_W15.24mm.
 */
export class _68230 extends Component.withPins({
  "D5": "1",
  "D6": "2",
  "D7": "3",
  "PA0": "4",
  "PA1": "5",
  "PA2": "6",
  "PA3": "7",
  "PA4": "8",
  "PA5": "9",
  "PA6": "10",
  "PA7": "11",
  "VCC": "12",
  "H1": "13",
  "H2": "14",
  "H3": "15",
  "H4": "16",
  "PB0": "17",
  "PB1": "18",
  "PB2": "19",
  "PB3": "20",
  "PB4": "21",
  "PB5": "22",
  "PB6": "23",
  "PB7": "24",
  "RS5": "25",
  "RS4": "26",
  "RS3": "27",
  "RS2": "28",
  "RS1": "29",
  "PC0": "30",
  "PC1": "31",
  "TIN/PC2": "32",
  "PC3/TOUT": "33",
  "DMAREQ/PC4": "34",
  "PC5/PIRQ": "35",
  "PC6/PIACK": "36",
  "PC7/TIACK": "37",
  "GND": "38",
  "RESET": "39",
  "CLK": "40",
  "CS": "41",
  "DTACK": "42",
  "R/W": "43",
  "D0": "44",
  "D1": "45",
  "D2": "46",
  "D3": "47",
  "D4": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D5: "tri_state", D6: "tri_state", D7: "tri_state", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VCC: "power_in", H1: "input", H2: "bidirectional", H3: "input", H4: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", RS5: "input", RS4: "input", RS3: "input", RS2: "input", RS1: "input", PC0: "bidirectional", PC1: "bidirectional", "TIN/PC2": "bidirectional", "PC3/TOUT": "bidirectional", "DMAREQ/PC4": "bidirectional", "PC5/PIRQ": "bidirectional", "PC6/PIACK": "bidirectional", "PC7/TIACK": "bidirectional", GND: "power_in", RESET: "input", CLK: "input", CS: "input", DTACK: "open_collector", "R/W": "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", D4: "tri_state", ...opts.pinTypes } });
  }
  override schema = "Interface:68230";
  override referencePrefix = "U";
}

/**
 * dual universal asynchronous receiver/transmitter with parallel port
 *
 * KiCad symbol: `Interface:68681`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/user-guide/MC68681UM.pdf
 * Keywords: MPRO.
 */
export class _68681 extends Component.withPins({
  "RS1": "1",
  "IP3": "2",
  "RS2": "3",
  "IP1": "4",
  "RS3": "5",
  "RS4": "6",
  "IP0": "7",
  "R/W": "8",
  "DTACK": "9",
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
  "IRQ": "21",
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
  "RESET": "34",
  "CS": "35",
  "IP2": "36",
  "IACK": "37",
  "IP5": "38",
  "IP4": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RS1: "input", IP3: "input", RS2: "input", IP1: "input", RS3: "input", RS4: "input", IP0: "input", "R/W": "input", DTACK: "open_collector", RXDB: "input", TXDB: "output", OP1: "output", OP3: "output", OP5: "output", OP7: "output", D1: "tri_state", D3: "tri_state", D5: "tri_state", D7: "tri_state", GND: "power_in", IRQ: "output", D6: "tri_state", D4: "tri_state", D2: "tri_state", D0: "tri_state", OP6: "output", OP4: "output", OP2: "output", OP0: "output", TXDA: "output", RXDA: "input", "X1/CLK": "input", X2: "input", RESET: "input", CS: "input", IP2: "input", IACK: "input", IP5: "input", IP4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:68681";
  override referencePrefix = "U";
}

/**
 * Multi-Function Peripheral, USART, Four timers, 8 DIO, 16-source interrupt controller
 *
 * KiCad symbol: `Interface:68901_PLCC`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/reference-manual/MC68901UM.pdf
 * Keywords: MPRO.
 */
export class _68901_PLCC extends Component.withPins({
  "R/W": "2",
  "RS1": "3",
  "RS2": "4",
  "RS3": "5",
  "RS4": "6",
  "RS5": "7",
  "TC": "8",
  "SO": "9",
  "SI": "10",
  "RC": "11",
  "VCC": "12",
  "MPX": "13",
  "TAO": "15",
  "TBO": "16",
  "TCO": "17",
  "TDO": "18",
  "X1": "19",
  "X2": "20",
  "TAI": "22",
  "TBI": "23",
  "RESET": "24",
  "I0": "25",
  "I1": "26",
  "I2": "27",
  "I3": "28",
  "I4": "29",
  "I5": "30",
  "I6": "31",
  "I7": "32",
  "TR": "34",
  "RR": "35",
  "IRQ": "36",
  "IEO": "37",
  "IEI": "38",
  "CLK": "39",
  "GND": "40",
  "D0": "41",
  "D1": "42",
  "D2": "43",
  "D3": "44",
  "D4": "45",
  "D5": "46",
  "D6": "47",
  "D7": "48",
  "IACK": "49",
  "DTACK": "50",
  "DS": "51",
  "CS": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "R/W": "input", RS1: "input", RS2: "input", RS3: "input", RS4: "input", RS5: "input", TC: "input", SO: "output", SI: "input", RC: "input", VCC: "power_in", MPX: "input", TAO: "output", TBO: "output", TCO: "output", TDO: "output", X1: "input", X2: "input", TAI: "input", TBI: "input", RESET: "input", I0: "input", I1: "input", I2: "input", I3: "input", I4: "input", I5: "input", I6: "input", I7: "input", TR: "output", RR: "output", IRQ: "output", IEO: "output", IEI: "input", CLK: "input", GND: "power_in", D0: "input", D1: "input", D2: "input", D3: "input", D4: "input", D5: "input", D6: "input", D7: "input", IACK: "input", DTACK: "output", DS: "input", CS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:68901_PLCC";
  override referencePrefix = "U";
}

/**
 * Programmable DMA Controller, PDIP-40
 *
 * KiCad symbol: `Interface:8237`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://pdos.csail.mit.edu/6.828/2012/readings/hardware/8237A.pdf
 * Keywords: 8237 DMA.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8237 extends Component.withPins({
  "~{IOR}": "1",
  "~{IOW}": "2",
  "~{MEMR}": "3",
  "~{MEMW}": "4",
  "PIN5": "5",
  "READY": "6",
  "HLDA": "7",
  "ADSTB": "8",
  "AEN": "9",
  "HRQ": "10",
  "~{CS}": "11",
  "CLK": "12",
  "RESET": "13",
  "DACK2": "14",
  "DACK3": "15",
  "DREQ3": "16",
  "DREQ2": "17",
  "DREQ1": "18",
  "DREQ0": "19",
  "Vss": "20",
  "DB7": "21",
  "DB6": "22",
  "DB5": "23",
  "DACK1": "24",
  "DACK0": "25",
  "DB4": "26",
  "DB3": "27",
  "DB2": "28",
  "DB1": "29",
  "DB0": "30",
  "Vcc": "31",
  "A0": "32",
  "A1": "33",
  "A2": "34",
  "A3": "35",
  "~{EOP}": "36",
  "A4": "37",
  "A5": "38",
  "A6": "39",
  "A7": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{IOR}": "bidirectional", "~{IOW}": "bidirectional", "~{MEMR}": "tri_state", "~{MEMW}": "tri_state", PIN5: "input", READY: "input", HLDA: "input", ADSTB: "output", AEN: "output", HRQ: "output", "~{CS}": "input", CLK: "input", RESET: "input", DACK2: "output", DACK3: "output", DREQ3: "input", DREQ2: "input", DREQ1: "input", DREQ0: "input", Vss: "power_in", DB7: "bidirectional", DB6: "bidirectional", DB5: "bidirectional", DACK1: "output", DACK0: "output", DB4: "bidirectional", DB3: "bidirectional", DB2: "bidirectional", DB1: "bidirectional", DB0: "bidirectional", Vcc: "power_in", A0: "bidirectional", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", "~{EOP}": "bidirectional", A4: "tri_state", A5: "tri_state", A6: "tri_state", A7: "tri_state", ...opts.pinTypes } });
  }
  override schema = "Interface:8237";
  override referencePrefix = "U";
}

/**
 * Programmable Peripheral Interface, PDIP-40
 *
 * KiCad symbol: `Interface:8255`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://aturing.umcs.maine.edu/~meadow/courses/cos335/Intel8255A.pdf
 * Keywords: 8255 PPI.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8255 extends Component.withPins({
  "PA3": "1",
  "PA2": "2",
  "PA1": "3",
  "PA0": "4",
  "~{RD}": "5",
  "~{CS}": "6",
  "GND": "7",
  "A1": "8",
  "A0": "9",
  "PC7": "10",
  "PC6": "11",
  "PC5": "12",
  "PC4": "13",
  "PC0": "14",
  "PC1": "15",
  "PC2": "16",
  "PC3": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB3": "21",
  "PB4": "22",
  "PB5": "23",
  "PB6": "24",
  "PB7": "25",
  "VCC": "26",
  "D7": "27",
  "D6": "28",
  "D5": "29",
  "D4": "30",
  "D3": "31",
  "D2": "32",
  "D1": "33",
  "D0": "34",
  "RESET": "35",
  "~{WR}": "36",
  "PA7": "37",
  "PA6": "38",
  "PA5": "39",
  "PA4": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "~{RD}": "input", "~{CS}": "input", GND: "power_in", A1: "input", A0: "input", PC7: "bidirectional", PC6: "bidirectional", PC5: "bidirectional", PC4: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VCC: "power_in", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", RESET: "input", "~{WR}": "input", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:8255";
  override referencePrefix = "U";
}

/**
 * Programmable Peripheral Interface, PDIP-40
 *
 * KiCad symbol: `Interface:8255A`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://aturing.umcs.maine.edu/~meadow/courses/cos335/Intel8255A.pdf
 * Keywords: 8255 PPI.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8255A extends Component.withPins({
  "PA3": "1",
  "PA2": "2",
  "PA1": "3",
  "PA0": "4",
  "~{RD}": "5",
  "~{CS}": "6",
  "GND": "7",
  "A1": "8",
  "A0": "9",
  "PC7": "10",
  "PC6": "11",
  "PC5": "12",
  "PC4": "13",
  "PC0": "14",
  "PC1": "15",
  "PC2": "16",
  "PC3": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB3": "21",
  "PB4": "22",
  "PB5": "23",
  "PB6": "24",
  "PB7": "25",
  "VCC": "26",
  "D7": "27",
  "D6": "28",
  "D5": "29",
  "D4": "30",
  "D3": "31",
  "D2": "32",
  "D1": "33",
  "D0": "34",
  "RESET": "35",
  "~{WR}": "36",
  "PA7": "37",
  "PA6": "38",
  "PA5": "39",
  "PA4": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "~{RD}": "input", "~{CS}": "input", GND: "power_in", A1: "input", A0: "input", PC7: "bidirectional", PC6: "bidirectional", PC5: "bidirectional", PC4: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VCC: "power_in", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", RESET: "input", "~{WR}": "input", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:8255A";
  override referencePrefix = "U";
}

/**
 * 8259, Programmable Interrupt Controller, PDIP-28
 *
 * KiCad symbol: `Interface:8259`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdos.csail.mit.edu/6.828/2005/readings/hardware/8259A.pdf
 * Keywords: PIC.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _8259 extends Component.withPins({
  "~{CS}": "1",
  "~{WR}": "2",
  "~{RD}": "3",
  "D7": "4",
  "D6": "5",
  "D5": "6",
  "D4": "7",
  "D3": "8",
  "D2": "9",
  "D1": "10",
  "D0": "11",
  "CAS0": "12",
  "CAS1": "13",
  "GND": "14",
  "CAS2": "15",
  "~{SP}/~{EN}": "16",
  "INT": "17",
  "IR0": "18",
  "IR1": "19",
  "IR2": "20",
  "IR3": "21",
  "IR4": "22",
  "IR5": "23",
  "IR6": "24",
  "IR7": "25",
  "~{INTA}": "26",
  "A0": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "~{WR}": "input", "~{RD}": "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", CAS0: "input", CAS1: "output", GND: "power_in", CAS2: "output", "~{SP}/~{EN}": "bidirectional", INT: "output", IR0: "input", IR1: "input", IR2: "input", IR3: "input", IR4: "input", IR5: "input", IR6: "input", IR7: "input", "~{INTA}": "input", A0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:8259";
  override referencePrefix = "U";
}

/**
 * 8259, Programmable Interrupt Controller, PDIP-28
 *
 * KiCad symbol: `Interface:8259A`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdos.csail.mit.edu/6.828/2005/readings/hardware/8259A.pdf
 * Keywords: PIC.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _8259A extends Component.withPins({
  "~{CS}": "1",
  "~{WR}": "2",
  "~{RD}": "3",
  "D7": "4",
  "D6": "5",
  "D5": "6",
  "D4": "7",
  "D3": "8",
  "D2": "9",
  "D1": "10",
  "D0": "11",
  "CAS0": "12",
  "CAS1": "13",
  "GND": "14",
  "CAS2": "15",
  "~{SP}/~{EN}": "16",
  "INT": "17",
  "IR0": "18",
  "IR1": "19",
  "IR2": "20",
  "IR3": "21",
  "IR4": "22",
  "IR5": "23",
  "IR6": "24",
  "IR7": "25",
  "~{INTA}": "26",
  "A0": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "~{WR}": "input", "~{RD}": "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", CAS0: "input", CAS1: "output", GND: "power_in", CAS2: "output", "~{SP}/~{EN}": "bidirectional", INT: "output", IR0: "input", IR1: "input", IR2: "input", IR3: "input", IR4: "input", IR5: "input", IR6: "input", IR7: "input", "~{INTA}": "input", A0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:8259A";
  override referencePrefix = "U";
}

/**
 * 8259, Programmable Interrupt Controller, PDIP-28
 *
 * KiCad symbol: `Interface:8259A-2`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdos.csail.mit.edu/6.828/2005/readings/hardware/8259A.pdf
 * Keywords: PIC.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _8259A_2 extends Component.withPins({
  "~{CS}": "1",
  "~{WR}": "2",
  "~{RD}": "3",
  "D7": "4",
  "D6": "5",
  "D5": "6",
  "D4": "7",
  "D3": "8",
  "D2": "9",
  "D1": "10",
  "D0": "11",
  "CAS0": "12",
  "CAS1": "13",
  "GND": "14",
  "CAS2": "15",
  "~{SP}/~{EN}": "16",
  "INT": "17",
  "IR0": "18",
  "IR1": "19",
  "IR2": "20",
  "IR3": "21",
  "IR4": "22",
  "IR5": "23",
  "IR6": "24",
  "IR7": "25",
  "~{INTA}": "26",
  "A0": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "~{WR}": "input", "~{RD}": "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", CAS0: "input", CAS1: "output", GND: "power_in", CAS2: "output", "~{SP}/~{EN}": "bidirectional", INT: "output", IR0: "input", IR1: "input", IR2: "input", IR3: "input", IR4: "input", IR5: "input", IR6: "input", IR7: "input", "~{INTA}": "input", A0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:8259A-2";
  override referencePrefix = "U";
}

/**
 * Bus Controller for Intel 8086/8088/80186/80188 microprocessors, DIP-20
 *
 * KiCad symbol: `Interface:8288`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.datasheets360.com/pdf/7208679415653955300
 * Keywords: Bus Controller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class _8288 extends Component.withPins({
  "IOB": "1",
  "CLK": "2",
  "~{S1}": "3",
  "DT/~{R}": "4",
  "ALE": "5",
  "~{AEN}": "6",
  "~{MRDC}": "7",
  "~{AMWC}": "8",
  "~{MWTC}": "9",
  "GND": "10",
  "~{IOWC}": "11",
  "~{AIOWC}": "12",
  "~{IORC}": "13",
  "~{INTA}": "14",
  "CEN": "15",
  "DEN": "16",
  "MCE/~{PDEN}": "17",
  "~{S2}": "18",
  "~{S0}": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IOB: "input", CLK: "input", "~{S1}": "input", "DT/~{R}": "output", ALE: "output", "~{AEN}": "input", "~{MRDC}": "tri_state", "~{AMWC}": "tri_state", "~{MWTC}": "tri_state", GND: "power_in", "~{IOWC}": "tri_state", "~{AIOWC}": "tri_state", "~{IORC}": "tri_state", "~{INTA}": "tri_state", CEN: "input", DEN: "output", "MCE/~{PDEN}": "output", "~{S2}": "input", "~{S0}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:8288";
  override referencePrefix = "U";
}

/**
 * CHMOS Programmable Peripheral Interface, PDIP-40
 *
 * KiCad symbol: `Interface:82C55A`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://jap.hu/electronic/8255.pdf
 * Keywords: 8255 PPI.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _82C55A extends Component.withPins({
  "PA3": "1",
  "PA2": "2",
  "PA1": "3",
  "PA0": "4",
  "~{RD}": "5",
  "~{CS}": "6",
  "GND": "7",
  "A1": "8",
  "A0": "9",
  "PC7": "10",
  "PC6": "11",
  "PC5": "12",
  "PC4": "13",
  "PC0": "14",
  "PC1": "15",
  "PC2": "16",
  "PC3": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB3": "21",
  "PB4": "22",
  "PB5": "23",
  "PB6": "24",
  "PB7": "25",
  "VCC": "26",
  "D7": "27",
  "D6": "28",
  "D5": "29",
  "D4": "30",
  "D3": "31",
  "D2": "32",
  "D1": "33",
  "D0": "34",
  "RESET": "35",
  "~{WR}": "36",
  "PA7": "37",
  "PA6": "38",
  "PA5": "39",
  "PA4": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "~{RD}": "input", "~{CS}": "input", GND: "power_in", A1: "input", A0: "input", PC7: "bidirectional", PC6: "bidirectional", PC5: "bidirectional", PC4: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VCC: "power_in", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", RESET: "input", "~{WR}": "input", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:82C55A";
  override referencePrefix = "U";
}

/**
 * CHMOS Programmable Peripheral Interface, PLCC-44
 *
 * KiCad symbol: `Interface:82C55A_PLCC`. Reference prefix: `U`.
 * Footprint filters: *PLCC?44*.
 * @see http://jap.hu/electronic/8255.pdf
 * Keywords: 8255 PPI.
 * Default footprint: Package_LCC:PLCC-44.
 */
export class _82C55A_PLCC extends Component.withPins({
  "NC_1": "1",
  "PA3": "2",
  "PA2": "3",
  "PA1": "4",
  "PA0": "5",
  "~{RD}": "6",
  "~{CS}": "7",
  "GND": "8",
  "A1": "9",
  "A0": "10",
  "PC7": "11",
  "NC_12": "12",
  "PC6": "13",
  "PC5": "14",
  "PC4": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "PB0": "20",
  "PB1": "21",
  "PB2": "22",
  "NC_23": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
  "VCC": "29",
  "D7": "30",
  "D6": "31",
  "D5": "32",
  "D4": "33",
  "NC_34": "34",
  "D3": "35",
  "D2": "36",
  "D1": "37",
  "D0": "38",
  "RESET": "39",
  "~{WR}": "40",
  "PA7": "41",
  "PA6": "42",
  "PA5": "43",
  "PA4": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "~{RD}": "input", "~{CS}": "input", GND: "power_in", A1: "input", A0: "input", PC7: "bidirectional", NC_12: "no_connect", PC6: "bidirectional", PC5: "bidirectional", PC4: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", NC_23: "no_connect", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VCC: "power_in", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", NC_34: "no_connect", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", RESET: "input", "~{WR}": "input", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:82C55A_PLCC";
  override referencePrefix = "U";
}

/**
 * One-Lane PCIe SATA Two-Ports Controller, QFN-76
 *
 * KiCad symbol: `Interface:88SE9125C0-NAA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.4mm*.
 * @see https://www.marvell.com/documents/bqcwxsoiqfjkcjdjhkvc/
 * Keywords: PCIe2.0 SATA3.0.
 * Default footprint: Package_DFN_QFN:QFN-76-1EP_9x9mm_P0.4mm_EP3.8x3.8mm.
 */
export class _88SE9125C0_NAA extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VDD_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "VDDIO_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "NC_12": "12",
  "VDD_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "NC_16": "16",
  "GPIO3": "17",
  "GPIO4": "18",
  "GPIO5": "19",
  "TESTMODE": "20",
  "VDD_21": "21",
  "TP": "22",
  "RXP_1": "23",
  "RXN_1": "24",
  "VAA2_1": "25",
  "TXN_1": "26",
  "TXP_1": "27",
  "VSS_28": "28",
  "RXP_0": "29",
  "RXN_0": "30",
  "VAA2_0": "31",
  "TXN_0": "32",
  "TXP_0": "33",
  "VAA1": "34",
  "XTLIN_OSC": "35",
  "XTLOUT": "36",
  "ISET": "37",
  "VCONT_10": "38",
  "PTXN": "39",
  "PTXP": "40",
  "AVDDT": "41",
  "AVDD": "42",
  "PRXN": "43",
  "PRXP": "44",
  "CLKP": "45",
  "CLKN": "46",
  "SPI_DO": "47",
  "SPI_CS": "48",
  "SPI_DI": "49",
  "SPI_CLK": "50",
  "VDD_51": "51",
  "~{WAKE}": "52",
  "~{PERST}": "53",
  "GPIO0": "54",
  "NC_55": "55",
  "NC_56": "56",
  "VDDIO_57": "57",
  "NC_58": "58",
  "NC_59": "59",
  "NC_60": "60",
  "NC_61": "61",
  "NC_62": "62",
  "NC_63": "63",
  "VDD_64": "64",
  "NC_65": "65",
  "NC_66": "66",
  "NC_67": "67",
  "NC_68": "68",
  "NC_69": "69",
  "NC_70": "70",
  "VDD_71": "71",
  "NC_72": "72",
  "VDDIO_73": "73",
  "GPIO1": "74",
  "GPIO2": "75",
  "NC_76": "76",
  "VSS_77": "77",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", VDD_5: "power_in", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", VDDIO_9: "power_in", NC_10: "no_connect", NC_11: "no_connect", NC_12: "no_connect", VDD_13: "passive", NC_14: "no_connect", NC_15: "no_connect", NC_16: "no_connect", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", TESTMODE: "input", VDD_21: "power_in", TP: "bidirectional", RXP_1: "input", RXN_1: "input", VAA2_1: "power_in", TXN_1: "output", TXP_1: "output", VSS_28: "power_in", RXP_0: "input", RXN_0: "input", VAA2_0: "power_in", TXN_0: "output", TXP_0: "output", VAA1: "power_in", XTLIN_OSC: "input", XTLOUT: "output", ISET: "bidirectional", VCONT_10: "output", PTXN: "output", PTXP: "output", AVDDT: "power_in", AVDD: "power_in", PRXN: "input", PRXP: "input", CLKP: "input", CLKN: "input", SPI_DO: "output", SPI_CS: "output", SPI_DI: "input", SPI_CLK: "output", VDD_51: "power_in", "~{WAKE}": "open_collector", "~{PERST}": "input", GPIO0: "bidirectional", NC_55: "no_connect", NC_56: "no_connect", VDDIO_57: "power_in", NC_58: "no_connect", NC_59: "no_connect", NC_60: "no_connect", NC_61: "no_connect", NC_62: "no_connect", NC_63: "no_connect", VDD_64: "power_in", NC_65: "no_connect", NC_66: "no_connect", NC_67: "no_connect", NC_68: "no_connect", NC_69: "no_connect", NC_70: "no_connect", VDD_71: "passive", NC_72: "no_connect", VDDIO_73: "power_in", GPIO1: "bidirectional", GPIO2: "bidirectional", NC_76: "no_connect", VSS_77: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:88SE9125C0-NAA";
  override referencePrefix = "U";
}

/**
 * 10 bit 25 MHz Programmable Waveform Generator, 2.3V to 5.5V, 12.65mW, MSOP-10
 *
 * KiCad symbol: `Interface:AD9833xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad9833.pdf
 * Keywords: Direct Digital Synthesizer DDS.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD9833xRM extends Component.withPins({
  "COMP": "1",
  "VDD": "2",
  "CAP/2.5V": "3",
  "DGND": "4",
  "MCLK": "5",
  "SDATA": "6",
  "SCLK": "7",
  "~{FSYNC}": "8",
  "AGND": "9",
  "VOUT": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP: "passive", VDD: "power_in", "CAP/2.5V": "power_in", DGND: "power_in", MCLK: "input", SDATA: "input", SCLK: "input", "~{FSYNC}": "input", AGND: "power_in", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Interface:AD9833xRM";
  override referencePrefix = "U";
}

/**
 * 10 bit 75 MHz Complete Direct Digital Synthesizer, 2.3V to 5.5V, 20mW, TSSOP-20
 *
 * KiCad symbol: `Interface:AD9834`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD9834.pdf
 * Keywords: Direct Digital Synthesizer DDS.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class AD9834 extends Component.withPins({
  "FS_ADJUST": "1",
  "REFOUT": "2",
  "COMP": "3",
  "AVDD": "4",
  "DVDD": "5",
  "CAP/2.5V": "6",
  "DGND": "7",
  "MCLK": "8",
  "FSELECT": "9",
  "PSELECT": "10",
  "RESET": "11",
  "SLEEP": "12",
  "SDATA": "13",
  "SCLK": "14",
  "~{FSYNC}": "15",
  "SIGNBITOUT": "16",
  "VIN": "17",
  "AGND": "18",
  "IOUT": "19",
  "IOUTB": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FS_ADJUST: "passive", REFOUT: "output", COMP: "passive", AVDD: "power_in", DVDD: "power_in", "CAP/2.5V": "passive", DGND: "power_in", MCLK: "input", FSELECT: "input", PSELECT: "input", RESET: "input", SLEEP: "input", SDATA: "input", SCLK: "input", "~{FSYNC}": "input", SIGNBITOUT: "output", VIN: "power_in", AGND: "power_in", IOUT: "output", IOUTB: "output", ...opts.pinTypes } });
  }
  override schema = "Interface:AD9834";
  override referencePrefix = "U";
}

/**
 * CMOS, 125 MHz, Complete DDS Synthesizer, SSOP-28
 *
 * KiCad symbol: `Interface:AD9850`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9850.pdf
 * Keywords: DDS direct digital synthesizer.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class AD9850 extends Component.withPins({
  "D3": "1",
  "D2": "2",
  "D1": "3",
  "D0": "4",
  "DGND_5": "5",
  "DVDD_6": "6",
  "W_CLK": "7",
  "FQ_UD": "8",
  "CLKIN": "9",
  "AGND_10": "10",
  "AVDD_11": "11",
  "RSET": "12",
  "QOUTB": "13",
  "QOUT": "14",
  "VINN": "15",
  "VINP": "16",
  "DACBL": "17",
  "AVDD_18": "18",
  "AGND_19": "19",
  "IOUTB": "20",
  "IOUT": "21",
  "RESET": "22",
  "DVDD_23": "23",
  "DGND_24": "24",
  "D7": "25",
  "D6": "26",
  "D5": "27",
  "D4": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D3: "input", D2: "input", D1: "input", D0: "input", DGND_5: "power_in", DVDD_6: "power_in", W_CLK: "input", FQ_UD: "input", CLKIN: "input", AGND_10: "power_in", AVDD_11: "power_in", RSET: "passive", QOUTB: "output", QOUT: "output", VINN: "input", VINP: "input", DACBL: "passive", AVDD_18: "passive", AGND_19: "passive", IOUTB: "output", IOUT: "output", RESET: "input", DVDD_23: "power_in", DGND_24: "power_in", D7: "input", D6: "input", D5: "input", D4: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:AD9850";
  override referencePrefix = "U";
}

/**
 * CMOS, 180 MHz, DDS/DAC Synthesizer, SSOP-28
 *
 * KiCad symbol: `Interface:AD9851`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9851.pdf
 * Keywords: DDS direct digital synthesizer.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class AD9851 extends Component.withPins({
  "D3": "1",
  "D2": "2",
  "D1": "3",
  "D0": "4",
  "PGND": "5",
  "PVCC": "6",
  "W_CLK": "7",
  "FQ_UD": "8",
  "REFCLK": "9",
  "AGND_10": "10",
  "AVDD_11": "11",
  "RSET": "12",
  "VOUTN": "13",
  "VOUTP": "14",
  "VINN": "15",
  "VINP": "16",
  "DACBP": "17",
  "AVDD_18": "18",
  "AGND_19": "19",
  "IOUTB": "20",
  "IOUT": "21",
  "RESET": "22",
  "DVDD": "23",
  "DGND": "24",
  "D7": "25",
  "D6": "26",
  "D5": "27",
  "D4": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D3: "input", D2: "input", D1: "input", D0: "input", PGND: "power_in", PVCC: "power_in", W_CLK: "input", FQ_UD: "input", REFCLK: "input", AGND_10: "power_in", AVDD_11: "power_in", RSET: "passive", VOUTN: "output", VOUTP: "output", VINN: "input", VINP: "input", DACBP: "passive", AVDD_18: "passive", AGND_19: "passive", IOUTB: "output", IOUT: "output", RESET: "input", DVDD: "power_in", DGND: "power_in", D7: "input", D6: "input", D5: "input", D4: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:AD9851";
  override referencePrefix = "U";
}

/**
 * 1 GSPS, 14-Bit, 3.3V CMOS, Direct Digital Synthesizer, QFP-100
 *
 * KiCad symbol: `Interface:AD9910`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*14x14mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9910.pdf
 * Keywords: dds direct digital synthesizer.
 * Default footprint: Package_QFP:TQFP-100-1EP_14x14mm_P0.5mm_EP5x5mm.
 */
export class AD9910 extends Component.withPins({
  "NC_1": "1",
  "PLL_LOOP_FILTER": "2",
  "AVDD_1V8_3": "3",
  "AGND_4": "4",
  "AGND_5": "5",
  "AVDD_1V8_6": "6",
  "SYNC_IN+": "7",
  "SYNC_IN-": "8",
  "SYNC_OUT+": "9",
  "SYNC_OUT-": "10",
  "DVDD_IO_3V3_11": "11",
  "SYNC_SMP_ERR": "12",
  "DGND_13": "13",
  "MASTER_RESET": "14",
  "DVDD_IO_3V3_15": "15",
  "DGND_16": "16",
  "DVDD_1V8_17": "17",
  "EXT_PWR_DWN": "18",
  "PLL_LOCK": "19",
  "NC_20": "20",
  "DVDD_IO_3V3_21": "21",
  "DGND_22": "22",
  "DVDD_1V8_23": "23",
  "RAM_SWP_OVR": "24",
  "D15": "25",
  "D14": "26",
  "D13": "27",
  "DVDD_IO_3V3_28": "28",
  "DGND_29": "29",
  "DVDD_1V8_30": "30",
  "D12": "31",
  "D11": "32",
  "D10": "33",
  "D9": "34",
  "D8": "35",
  "D7": "36",
  "D6": "37",
  "D5": "38",
  "D4": "39",
  "PDCLK": "40",
  "TxENABLE": "41",
  "D3": "42",
  "D2": "43",
  "D1": "44",
  "DVDD_IO_3V3_45": "45",
  "DGND_46": "46",
  "DVDD_1V8_47": "47",
  "D0": "48",
  "F1": "49",
  "F0": "50",
  "DGND_51": "51",
  "PROFILE2": "52",
  "PROFILE1": "53",
  "PROFILE0": "54",
  "SYNC_CLK": "55",
  "DVDD_IO_3V3_56": "56",
  "DVDD_1V8_57": "57",
  "DGND_58": "58",
  "I/O_UPDATE": "59",
  "OSK": "60",
  "DROVER": "61",
  "DRCTL": "62",
  "DRHOLD": "63",
  "DVDD_1V8_64": "64",
  "DGND_65": "65",
  "DVDD_IO_3V3_66": "66",
  "SDIO": "67",
  "SDO": "68",
  "SCLK": "69",
  "~{CS}": "70",
  "I/O_RESET": "71",
  "NC_72": "72",
  "AGND_73": "73",
  "AVDD_3V3_74": "74",
  "AVDD_3V3_75": "75",
  "AVDD_3V3_76": "76",
  "AVDD_3V3_77": "77",
  "AGND_78": "78",
  "AGND_79": "79",
  "~{IOUT}": "80",
  "IOUT": "81",
  "AGND_82": "82",
  "AVDD_3V3_83": "83",
  "DAC_RSET": "84",
  "AGND_85": "85",
  "NC_86": "86",
  "NC_87": "87",
  "AGND_88": "88",
  "AVDD_1V8_89": "89",
  "REF_CLK": "90",
  "~{REF_CLK}": "91",
  "AVDD_1V8_92": "92",
  "NC_93": "93",
  "REFCLK_OUT": "94",
  "XTAL_SEL": "95",
  "AGND_96": "96",
  "NC_97": "97",
  "NC_98": "98",
  "NC_99": "99",
  "NC_100": "100",
  "EP": "101",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", PLL_LOOP_FILTER: "input", AVDD_1V8_3: "power_in", AGND_4: "power_in", AGND_5: "passive", AVDD_1V8_6: "power_in", "SYNC_IN+": "input", "SYNC_IN-": "input", "SYNC_OUT+": "output", "SYNC_OUT-": "output", DVDD_IO_3V3_11: "power_in", SYNC_SMP_ERR: "output", DGND_13: "power_in", MASTER_RESET: "input", DVDD_IO_3V3_15: "passive", DGND_16: "passive", DVDD_1V8_17: "power_in", EXT_PWR_DWN: "input", PLL_LOCK: "output", NC_20: "no_connect", DVDD_IO_3V3_21: "passive", DGND_22: "passive", DVDD_1V8_23: "passive", RAM_SWP_OVR: "output", D15: "input", D14: "input", D13: "input", DVDD_IO_3V3_28: "passive", DGND_29: "passive", DVDD_1V8_30: "passive", D12: "input", D11: "input", D10: "input", D9: "input", D8: "input", D7: "input", D6: "input", D5: "input", D4: "input", PDCLK: "output", TxENABLE: "input", D3: "input", D2: "input", D1: "input", DVDD_IO_3V3_45: "passive", DGND_46: "passive", DVDD_1V8_47: "passive", D0: "input", F1: "input", F0: "input", DGND_51: "passive", PROFILE2: "input", PROFILE1: "input", PROFILE0: "input", SYNC_CLK: "output", DVDD_IO_3V3_56: "passive", DVDD_1V8_57: "passive", DGND_58: "passive", "I/O_UPDATE": "bidirectional", OSK: "input", DROVER: "output", DRCTL: "input", DRHOLD: "input", DVDD_1V8_64: "passive", DGND_65: "passive", DVDD_IO_3V3_66: "passive", SDIO: "bidirectional", SDO: "output", SCLK: "input", "~{CS}": "input", "I/O_RESET": "input", NC_72: "no_connect", AGND_73: "passive", AVDD_3V3_74: "power_in", AVDD_3V3_75: "passive", AVDD_3V3_76: "passive", AVDD_3V3_77: "passive", AGND_78: "passive", AGND_79: "passive", "~{IOUT}": "output", IOUT: "output", AGND_82: "passive", AVDD_3V3_83: "passive", DAC_RSET: "output", AGND_85: "passive", NC_86: "no_connect", NC_87: "no_connect", AGND_88: "passive", AVDD_1V8_89: "power_in", REF_CLK: "input", "~{REF_CLK}": "input", AVDD_1V8_92: "passive", NC_93: "no_connect", REFCLK_OUT: "output", XTAL_SEL: "input", AGND_96: "passive", NC_97: "no_connect", NC_98: "no_connect", NC_99: "no_connect", NC_100: "no_connect", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:AD9910";
  override referencePrefix = "U";
}

/**
 * 1 GSPS, 14-bit DAC, Direct Digital Synthesizer, LFCSP-64
 *
 * KiCad symbol: `Interface:AD9912`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad9912.pdf
 * Keywords: Direct Digital Synthesizer DDS.
 * Default footprint: Package_CSP:LFCSP-64-1EP_9x9mm_P0.5mm_EP5.21x5.21mm.
 */
export class AD9912 extends Component.withPins({
  "DVDD_I/O": "1",
  "DVSS_2": "2",
  "DVDD_3": "3",
  "DVSS_4": "4",
  "DVDD_5": "5",
  "DVSS_6": "6",
  "DVDD_7": "7",
  "DVSS_8": "8",
  "S1": "9",
  "S2": "10",
  "AVDD_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "AVDD3_14": "14",
  "NC_15": "15",
  "NC_16": "16",
  "NC_17": "17",
  "NC_18": "18",
  "AVDD_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "AVDD_23": "23",
  "AVDD_24": "24",
  "AVDD_25": "25",
  "AVDD_26": "26",
  "SYSCLK": "27",
  "SYSCLK_B": "28",
  "AVDD_29": "29",
  "AVDD_30": "30",
  "LOOP_FILTER": "31",
  "CLKMODESEL": "32",
  "AVSS_33": "33",
  "OUTB": "34",
  "OUT": "35",
  "AVDD_36": "36",
  "AVDD3_37": "37",
  "OUT_CMOS": "38",
  "AVSS_39": "39",
  "FDBK_INB": "40",
  "FDBK_IN": "41",
  "AVDD_42": "42",
  "AVSS_43": "43",
  "AVDD_44": "44",
  "AVDD_45": "45",
  "AVDD3_46": "46",
  "AVDD3_47": "47",
  "DAC_RSET": "48",
  "AVDD3_49": "49",
  "DAC_OUT": "50",
  "DAC_OUTB": "51",
  "AVSS_52": "52",
  "AVDD_53": "53",
  "S3": "54",
  "S4": "55",
  "DVSS_56": "56",
  "DVSS_57": "57",
  "PWRDOWN": "58",
  "RESET": "59",
  "IO_UPDATE": "60",
  "~{CSB}": "61",
  "SDO": "62",
  "SDIO": "63",
  "SCLK": "64",
  "AVSS_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "DVDD_I/O": "power_in", DVSS_2: "power_in", DVDD_3: "power_in", DVSS_4: "passive", DVDD_5: "passive", DVSS_6: "passive", DVDD_7: "passive", DVSS_8: "passive", S1: "tri_state", S2: "tri_state", AVDD_11: "power_in", NC_12: "no_connect", NC_13: "no_connect", AVDD3_14: "power_in", NC_15: "no_connect", NC_16: "no_connect", NC_17: "no_connect", NC_18: "no_connect", AVDD_19: "passive", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", AVDD_23: "passive", AVDD_24: "passive", AVDD_25: "power_in", AVDD_26: "passive", SYSCLK: "input", SYSCLK_B: "input", AVDD_29: "passive", AVDD_30: "passive", LOOP_FILTER: "passive", CLKMODESEL: "input", AVSS_33: "power_in", OUTB: "output", OUT: "output", AVDD_36: "passive", AVDD3_37: "power_in", OUT_CMOS: "output", AVSS_39: "passive", FDBK_INB: "input", FDBK_IN: "input", AVDD_42: "passive", AVSS_43: "passive", AVDD_44: "passive", AVDD_45: "passive", AVDD3_46: "power_in", AVDD3_47: "passive", DAC_RSET: "passive", AVDD3_49: "passive", DAC_OUT: "output", DAC_OUTB: "output", AVSS_52: "passive", AVDD_53: "power_in", S3: "tri_state", S4: "tri_state", DVSS_56: "passive", DVSS_57: "passive", PWRDOWN: "input", RESET: "input", IO_UPDATE: "input", "~{CSB}": "input", SDO: "output", SDIO: "bidirectional", SCLK: "input", AVSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:AD9912";
  override referencePrefix = "U";
}

/**
 * 14-Bit Direct Digital Synthesizer with 400MSPS DAC, 1.8V, TQFP48
 *
 * KiCad symbol: `Interface:AD9951`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD9951.pdf
 * Keywords: Direct Digital Synthesizer DDS.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP3.5x3.5mm.
 */
export class AD9951 extends Component.withPins({
  "I/OUPDATE": "1",
  "DVDD_2": "2",
  "DGND_3": "3",
  "AVDD_4": "4",
  "AGND_5": "5",
  "AVDD_6": "6",
  "AGND_7": "7",
  "~{OSC/REFCLK}": "8",
  "OSC/REFCLK": "9",
  "CRYSTALOUT": "10",
  "CLKMODESELECT": "11",
  "LOOP_FILTER": "12",
  "AVDD_13": "13",
  "AGND_14": "14",
  "AGND_15": "15",
  "AVDD_16": "16",
  "AGND_17": "17",
  "AVDD_18": "18",
  "AVDD_19": "19",
  "~{IOUT}": "20",
  "IOUT": "21",
  "AGND_22": "22",
  "DACBP": "23",
  "DAC_R_{SET}": "24",
  "AVDD_25": "25",
  "AGND_26": "26",
  "AVDD_27": "27",
  "AGND_28": "28",
  "AVDD_29": "29",
  "AGND_30": "30",
  "AGND_31": "31",
  "AGND_32": "32",
  "DGND_33": "33",
  "DVDD_34": "34",
  "PWRDWNCTL": "35",
  "RESET": "36",
  "IOSYNC": "37",
  "SDO": "38",
  "~{CS}": "39",
  "SCLK": "40",
  "SDIO": "41",
  "DGND_42": "42",
  "DVDD_I/O": "43",
  "SYNC_IN": "44",
  "SYNC_CLK": "45",
  "OSK": "46",
  "DGND_47": "47",
  "DGND_48": "48",
  "AGND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "I/OUPDATE": "bidirectional", DVDD_2: "power_in", DGND_3: "power_in", AVDD_4: "power_in", AGND_5: "power_in", AVDD_6: "passive", AGND_7: "passive", "~{OSC/REFCLK}": "input", "OSC/REFCLK": "input", CRYSTALOUT: "output", CLKMODESELECT: "input", LOOP_FILTER: "input", AVDD_13: "passive", AGND_14: "passive", AGND_15: "passive", AVDD_16: "passive", AGND_17: "passive", AVDD_18: "passive", AVDD_19: "passive", "~{IOUT}": "output", IOUT: "output", AGND_22: "passive", DACBP: "input", "DAC_R_{SET}": "input", AVDD_25: "passive", AGND_26: "passive", AVDD_27: "passive", AGND_28: "passive", AVDD_29: "passive", AGND_30: "passive", AGND_31: "passive", AGND_32: "passive", DGND_33: "passive", DVDD_34: "passive", PWRDWNCTL: "input", RESET: "input", IOSYNC: "output", SDO: "output", "~{CS}": "input", SCLK: "input", SDIO: "bidirectional", DGND_42: "passive", "DVDD_I/O": "power_in", SYNC_IN: "power_in", SYNC_CLK: "output", OSK: "output", DGND_47: "passive", DGND_48: "passive", AGND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:AD9951";
  override referencePrefix = "U";
}

/**
 * 14-Bit Direct Digital Synthesizer with 400MSPS DAC, 1.8V, TQFP48
 *
 * KiCad symbol: `Interface:AD9954`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD9954.pdf
 * Keywords: Direct Digital Synthesizer DDS.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP3.5x3.5mm.
 */
export class AD9954 extends Component.withPins({
  "I/OUPDATE": "1",
  "DVDD_2": "2",
  "DGND_3": "3",
  "AVDD_4": "4",
  "AGND_5": "5",
  "AVDD_6": "6",
  "AGND_7": "7",
  "~{OSC/REFCLK}": "8",
  "OSC/REFCLK": "9",
  "CRYSTALOUT": "10",
  "CLKMODESELECT": "11",
  "LOOP_FILTER": "12",
  "AVDD_13": "13",
  "AGND_14": "14",
  "AGND_15": "15",
  "AVDD_16": "16",
  "AGND_17": "17",
  "AVDD_18": "18",
  "AVDD_19": "19",
  "~{IOUT}": "20",
  "IOUT": "21",
  "AGND_22": "22",
  "DACBP": "23",
  "DAC_R_{SET}": "24",
  "AVDD_25": "25",
  "AGND_26": "26",
  "AVDD_27": "27",
  "COMP_OUT": "28",
  "AVDD_29": "29",
  "COMP_IN": "30",
  "~{COMP_IN}": "31",
  "AGND_32": "32",
  "DGND_33": "33",
  "DVDD_34": "34",
  "PWRDWNCTL": "35",
  "RESET": "36",
  "IOSYNC": "37",
  "SDO": "38",
  "~{CS}": "39",
  "SCLK": "40",
  "SDIO": "41",
  "DGND_42": "42",
  "DVDD_I/O": "43",
  "SYNC_IN": "44",
  "SYNC_CLK": "45",
  "OSK": "46",
  "PS0": "47",
  "PS1": "48",
  "AGND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "I/OUPDATE": "bidirectional", DVDD_2: "power_in", DGND_3: "power_in", AVDD_4: "power_in", AGND_5: "power_in", AVDD_6: "passive", AGND_7: "passive", "~{OSC/REFCLK}": "input", "OSC/REFCLK": "input", CRYSTALOUT: "output", CLKMODESELECT: "input", LOOP_FILTER: "input", AVDD_13: "passive", AGND_14: "passive", AGND_15: "passive", AVDD_16: "passive", AGND_17: "passive", AVDD_18: "passive", AVDD_19: "passive", "~{IOUT}": "output", IOUT: "output", AGND_22: "passive", DACBP: "input", "DAC_R_{SET}": "input", AVDD_25: "passive", AGND_26: "passive", AVDD_27: "passive", COMP_OUT: "output", AVDD_29: "passive", COMP_IN: "input", "~{COMP_IN}": "input", AGND_32: "passive", DGND_33: "passive", DVDD_34: "passive", PWRDWNCTL: "input", RESET: "input", IOSYNC: "input", SDO: "output", "~{CS}": "input", SCLK: "input", SDIO: "bidirectional", DGND_42: "passive", "DVDD_I/O": "power_in", SYNC_IN: "power_in", SYNC_CLK: "output", OSK: "input", PS0: "input", PS1: "input", AGND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:AD9954";
  override referencePrefix = "U";
}

/**
 * 32Mbps 3.3V RS485 Quad Line Drivers, SOIC-16
 *
 * KiCad symbol: `Interface:AM26LS31CD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/am26ls31.pdf
 * Keywords: driver rs485 rs422 differential.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class AM26LS31CD extends Component.withPins({
  "1A": "1",
  "1Y": "2",
  "1Z": "3",
  "G": "4",
  "2Z": "5",
  "2Y": "6",
  "2A": "7",
  "GND": "8",
  "3A": "9",
  "3Y": "10",
  "3Z": "11",
  "~{G}": "12",
  "4Z": "13",
  "4Y": "14",
  "4A": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "input", "1Y": "tri_state", "1Z": "tri_state", G: "input", "2Z": "tri_state", "2Y": "tri_state", "2A": "input", GND: "power_in", "3A": "input", "3Y": "tri_state", "3Z": "tri_state", "~{G}": "input", "4Z": "tri_state", "4Y": "tri_state", "4A": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:AM26LS31CD";
  override referencePrefix = "U";
}

/**
 * 32Mbps 3.3V RS485 Quad Line Drivers, SSOP-16
 *
 * KiCad symbol: `Interface:AM26LS31CDB`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x6.2mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/am26ls31.pdf
 * Keywords: driver rs485 rs422 differential.
 * Default footprint: Package_SO:SSOP-16_5.3x6.2mm_P0.65mm.
 */
export class AM26LS31CDB extends Component.withPins({
  "1A": "1",
  "1Y": "2",
  "1Z": "3",
  "G": "4",
  "2Z": "5",
  "2Y": "6",
  "2A": "7",
  "GND": "8",
  "3A": "9",
  "3Y": "10",
  "3Z": "11",
  "~{G}": "12",
  "4Z": "13",
  "4Y": "14",
  "4A": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "input", "1Y": "tri_state", "1Z": "tri_state", G: "input", "2Z": "tri_state", "2Y": "tri_state", "2A": "input", GND: "power_in", "3A": "input", "3Y": "tri_state", "3Z": "tri_state", "~{G}": "input", "4Z": "tri_state", "4Y": "tri_state", "4A": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:AM26LS31CDB";
  override referencePrefix = "U";
}

/**
 * 32Mbps 3.3V RS485 Quad Line Drivers, DIP-16
 *
 * KiCad symbol: `Interface:AM26LS31CN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/am26ls31.pdf
 * Keywords: driver rs485 rs422 differential.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class AM26LS31CN extends Component.withPins({
  "1A": "1",
  "1Y": "2",
  "1Z": "3",
  "G": "4",
  "2Z": "5",
  "2Y": "6",
  "2A": "7",
  "GND": "8",
  "3A": "9",
  "3Y": "10",
  "3Z": "11",
  "~{G}": "12",
  "4Z": "13",
  "4Y": "14",
  "4A": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "input", "1Y": "tri_state", "1Z": "tri_state", G: "input", "2Z": "tri_state", "2Y": "tri_state", "2A": "input", GND: "power_in", "3A": "input", "3Y": "tri_state", "3Z": "tri_state", "~{G}": "input", "4Z": "tri_state", "4Y": "tri_state", "4A": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:AM26LS31CN";
  override referencePrefix = "U";
}

/**
 * 32Mbps 3.3V RS485 Quad Line Drivers, DIP-16
 *
 * KiCad symbol: `Interface:AM26LS31MJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/am26ls31.pdf
 * Keywords: driver rs485 rs422 differential.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class AM26LS31MJ extends Component.withPins({
  "1A": "1",
  "1Y": "2",
  "1Z": "3",
  "G": "4",
  "2Z": "5",
  "2Y": "6",
  "2A": "7",
  "GND": "8",
  "3A": "9",
  "3Y": "10",
  "3Z": "11",
  "~{G}": "12",
  "4Z": "13",
  "4Y": "14",
  "4A": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "input", "1Y": "tri_state", "1Z": "tri_state", G: "input", "2Z": "tri_state", "2Y": "tri_state", "2A": "input", GND: "power_in", "3A": "input", "3Y": "tri_state", "3Z": "tri_state", "~{G}": "input", "4Z": "tri_state", "4Y": "tri_state", "4A": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:AM26LS31MJ";
  override referencePrefix = "U";
}

/**
 * 32Mbps 3.3V RS485 Quad Line Drivers, SO-16
 *
 * KiCad symbol: `Interface:AM26LS31xNS`. Reference prefix: `U`.
 * Footprint filters: SO*5.3x10.2mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/am26ls31.pdf
 * Keywords: driver rs485 rs422 differential.
 * Default footprint: Package_SO:SO-16_5.3x10.2mm_P1.27mm.
 */
export class AM26LS31xNS extends Component.withPins({
  "1A": "1",
  "1Y": "2",
  "1Z": "3",
  "G": "4",
  "2Z": "5",
  "2Y": "6",
  "2A": "7",
  "GND": "8",
  "3A": "9",
  "3Y": "10",
  "3Z": "11",
  "~{G}": "12",
  "4Z": "13",
  "4Y": "14",
  "4A": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "input", "1Y": "tri_state", "1Z": "tri_state", G: "input", "2Z": "tri_state", "2Y": "tri_state", "2A": "input", GND: "power_in", "3A": "input", "3Y": "tri_state", "3Z": "tri_state", "~{G}": "input", "4Z": "tri_state", "4Y": "tri_state", "4A": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:AM26LS31xNS";
  override referencePrefix = "U";
}

/**
 * 32Mbps 3.3V RS485 Quad Line Receivers, SOIC-16
 *
 * KiCad symbol: `Interface:AM26LV32xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/am26lv32.pdf
 * Keywords: receiver rs485 rs422 differential.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class AM26LV32xD extends Component.withPins({
  "1B": "1",
  "1A": "2",
  "1Y": "3",
  "G": "4",
  "2Y": "5",
  "2A": "6",
  "2B": "7",
  "GND": "8",
  "3B": "9",
  "3A": "10",
  "3Y": "11",
  "~{G}": "12",
  "4Y": "13",
  "4A": "14",
  "4B": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1B": "input", "1A": "input", "1Y": "tri_state", G: "input", "2Y": "tri_state", "2A": "input", "2B": "input", GND: "power_in", "3B": "input", "3A": "input", "3Y": "tri_state", "~{G}": "input", "4Y": "tri_state", "4A": "input", "4B": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:AM26LV32xD";
  override referencePrefix = "U";
}

/**
 * 32Mbps 3.3V RS485 Quad Line Receivers, SO-16
 *
 * KiCad symbol: `Interface:AM26LV32xNS`. Reference prefix: `U`.
 * Footprint filters: SOIC*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/am26lv32.pdf
 * Keywords: receiver rs485 rs422 differential.
 * Default footprint: Package_SO:SOIC-16W_5.3x10.2mm_P1.27mm.
 */
export class AM26LV32xNS extends Component.withPins({
  "1B": "1",
  "1A": "2",
  "1Y": "3",
  "G": "4",
  "2Y": "5",
  "2A": "6",
  "2B": "7",
  "GND": "8",
  "3B": "9",
  "3A": "10",
  "3Y": "11",
  "~{G}": "12",
  "4Y": "13",
  "4A": "14",
  "4B": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1B": "input", "1A": "input", "1Y": "tri_state", G: "input", "2Y": "tri_state", "2A": "input", "2B": "input", GND: "power_in", "3B": "input", "3A": "input", "3Y": "tri_state", "~{G}": "input", "4Y": "tri_state", "4A": "input", "4B": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:AM26LV32xNS";
  override referencePrefix = "U";
}

/**
 * Two-LVPECL Output, High-Performance Clock Buffer, VQFN-16
 *
 * KiCad symbol: `Interface:CDCLVP1102RGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/cdclvp1102.pdf
 * Keywords: Clock Buffer LVDS.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm_ThermalVias.
 */
export class CDCLVP1102RGT extends Component.withPins({
  "GND_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VCC": "5",
  "INP": "6",
  "INN": "7",
  "VAC_REF": "8",
  "OUTP0": "9",
  "OUTN0": "10",
  "OUTP1": "11",
  "OUTN1": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "GND_16": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", VCC: "power_in", INP: "input", INN: "input", VAC_REF: "output", OUTP0: "output", OUTN0: "output", OUTP1: "output", OUTN1: "output", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", GND_16: "passive", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:CDCLVP1102RGT";
  override referencePrefix = "U";
}

/**
 * File Management USB Flash Card SD Interface, SSOP-20
 *
 * KiCad symbol: `Interface:CH376T`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see https://www.mpja.com/download/ch376ds1.pdf
 * Keywords: USB Mass-Storage SD Card Interface.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class CH376T extends Component.withPins({
  "~{INT}": "1",
  "RSTI": "2",
  "~{SPI}": "3",
  "TXD": "4",
  "RXD": "5",
  "SD_DI": "6",
  "V3": "7",
  "UD+": "8",
  "UD-": "9",
  "GND": "10",
  "XI": "11",
  "XO": "12",
  "~{SCS}": "13",
  "SCK": "14",
  "SDI": "15",
  "SDO": "16",
  "SD_CS": "17",
  "SD_DO": "18",
  "SD_CK": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{INT}": "output", RSTI: "input", "~{SPI}": "input", TXD: "bidirectional", RXD: "input", SD_DI: "input", V3: "passive", "UD+": "bidirectional", "UD-": "bidirectional", GND: "power_in", XI: "input", XO: "output", "~{SCS}": "input", SCK: "input", SDI: "input", SDO: "tri_state", SD_CS: "open_collector", SD_DO: "output", SD_CK: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:CH376T";
  override referencePrefix = "U";
}

/**
 * DC-Balanced 24-Bit FPD-Link II Deserializer, TQFP-48
 *
 * KiCad symbol: `Interface:DS90C124`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ds90c241.pdf
 * Keywords: DC-Balanced 24-Bit FPD-Link II Deserializer.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class DS90C124 extends Component.withPins({
  "RPWDNB": "1",
  "RESRVD": "2",
  "ROUT23": "3",
  "ROUT22": "4",
  "ROUT21": "5",
  "ROUT20": "6",
  "VDDOR3": "7",
  "VSSOR3": "8",
  "ROUT19": "9",
  "ROUT18": "10",
  "ROUT17": "11",
  "ROUT16": "12",
  "ROUT15": "13",
  "ROUT14": "14",
  "ROUT13": "15",
  "ROUT12": "16",
  "LOCK": "17",
  "RCLK": "18",
  "VSSOR2": "19",
  "VDDOR2": "20",
  "ROUT11": "21",
  "ROUT10": "22",
  "ROUT9": "23",
  "ROUT8": "24",
  "ROUT7": "25",
  "ROUT6": "26",
  "ROUT5": "27",
  "ROUT4": "28",
  "VSSOR1": "29",
  "VDDOR1": "30",
  "ROUT3": "31",
  "ROUT2": "32",
  "ROUT1": "33",
  "ROUT0": "34",
  "VSSR0": "35",
  "VDDR0": "36",
  "VDDR1": "37",
  "VSSR1": "38",
  "VDDIR": "39",
  "VSSIR": "40",
  "RIN+": "41",
  "RIN-": "42",
  "RRFB": "43",
  "VSSPR1": "44",
  "VDDPR1": "45",
  "VSSPR0": "46",
  "VDDPR0": "47",
  "REN": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RPWDNB: "input", RESRVD: "input", ROUT23: "output", ROUT22: "output", ROUT21: "output", ROUT20: "output", VDDOR3: "power_in", VSSOR3: "power_in", ROUT19: "output", ROUT18: "output", ROUT17: "output", ROUT16: "output", ROUT15: "output", ROUT14: "output", ROUT13: "output", ROUT12: "output", LOCK: "output", RCLK: "output", VSSOR2: "power_in", VDDOR2: "power_in", ROUT11: "output", ROUT10: "output", ROUT9: "output", ROUT8: "output", ROUT7: "output", ROUT6: "output", ROUT5: "output", ROUT4: "output", VSSOR1: "power_in", VDDOR1: "power_in", ROUT3: "output", ROUT2: "output", ROUT1: "output", ROUT0: "output", VSSR0: "power_in", VDDR0: "power_in", VDDR1: "power_in", VSSR1: "power_in", VDDIR: "power_in", VSSIR: "power_in", "RIN+": "input", "RIN-": "input", RRFB: "input", VSSPR1: "power_in", VDDPR1: "power_in", VSSPR0: "power_in", VDDPR0: "power_in", REN: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:DS90C124";
  override referencePrefix = "U";
}

/**
 * DC-Balanced 24-Bit FPD-Link II Serializer, TQFP-48
 *
 * KiCad symbol: `Interface:DS90C241`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ds90c241.pdf
 * Keywords: DC-Balanced 24-Bit FPD-Link II Serializer.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class DS90C241 extends Component.withPins({
  "DIN20": "1",
  "DIN21": "2",
  "DIN22": "3",
  "DIN23": "4",
  "DCAOFF": "5",
  "VSSL": "6",
  "VDDL": "7",
  "DCBOFF": "8",
  "TPWDNB": "9",
  "TCLK": "10",
  "TRFB": "11",
  "VODSEL": "12",
  "RESRVD": "13",
  "VDDPT1": "14",
  "VSSPT1": "15",
  "VDDPT0": "16",
  "VSSPT0": "17",
  "DEN": "18",
  "DOUT-": "19",
  "DOUT+": "20",
  "VSSDR": "21",
  "VDDDR": "22",
  "PRE": "23",
  "VSS": "24",
  "DIN0": "25",
  "DIN1": "26",
  "DIN2": "27",
  "DIN3": "28",
  "DIN4": "29",
  "VDDT": "30",
  "VSST": "31",
  "DIN5": "32",
  "DIN6": "33",
  "DIN7": "34",
  "DIN8": "35",
  "DIN9": "36",
  "DIN10": "37",
  "DIN11": "38",
  "DIN12": "39",
  "DIN13": "40",
  "DIN14": "41",
  "VDDIT": "42",
  "VSSIT": "43",
  "DIN15": "44",
  "DIN16": "45",
  "DIN17": "46",
  "DIN18": "47",
  "DIN19": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIN20: "input", DIN21: "input", DIN22: "input", DIN23: "input", DCAOFF: "input", VSSL: "power_in", VDDL: "power_in", DCBOFF: "input", TPWDNB: "input", TCLK: "input", TRFB: "input", VODSEL: "input", RESRVD: "input", VDDPT1: "power_in", VSSPT1: "power_in", VDDPT0: "power_in", VSSPT0: "power_in", DEN: "input", "DOUT-": "output", "DOUT+": "output", VSSDR: "power_in", VDDDR: "power_in", PRE: "input", VSS: "power_in", DIN0: "input", DIN1: "input", DIN2: "input", DIN3: "input", DIN4: "input", VDDT: "power_in", VSST: "power_in", DIN5: "input", DIN6: "input", DIN7: "input", DIN8: "input", DIN9: "input", DIN10: "input", DIN11: "input", DIN12: "input", DIN13: "input", DIN14: "input", VDDIT: "power_in", VSSIT: "power_in", DIN15: "input", DIN16: "input", DIN17: "input", DIN18: "input", DIN19: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:DS90C241";
  override referencePrefix = "U";
}

/**
 * Dual LVDS Receiver, >155Mbps, 5V, SOIC-8
 *
 * KiCad symbol: `Interface:DS90C402`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ds90c402.pdf
 * Keywords: Dual LVDS Receiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS90C402 extends Component.withPins({
  "VCC": "1",
  "RO1": "2",
  "RI1+": "3",
  "RI1-": "4",
  "GND": "5",
  "RO2": "6",
  "RI2+": "7",
  "RI2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", RO1: "output", "RI1+": "input", "RI1-": "input", GND: "power_in", RO2: "output", "RI2+": "input", "RI2-": "input", ...opts.pinTypes } });
  }
  override schema = "Interface:DS90C402";
  override referencePrefix = "U";
}

/**
 * LVDS Single High Speed Differential Driver, 400Mbps, SOT-23-5
 *
 * KiCad symbol: `Interface:DS90LV011A`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ds90lv011a.pdf
 * Keywords: LVDS Driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class DS90LV011A extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "OUT-": "3",
  "OUT+": "4",
  "IN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", "OUT-": "output", "OUT+": "output", IN: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:DS90LV011A";
  override referencePrefix = "U";
}

/**
 * LVDS Dual High Speed Differential Driver, >600MBps, SOIC-8
 *
 * KiCad symbol: `Interface:DS90LV027A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ds90lv027a.pdf
 * Keywords: Dual LVDS Driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS90LV027A extends Component.withPins({
  "VCC": "1",
  "DI1": "2",
  "DI2": "3",
  "GND": "4",
  "DO-2": "5",
  "DO+2": "6",
  "DO+1": "7",
  "DO-1": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", DI1: "input", DI2: "input", GND: "power_in", "DO-2": "output", "DO+2": "output", "DO+1": "output", "DO-1": "output", ...opts.pinTypes } });
  }
  override schema = "Interface:DS90LV027A";
  override referencePrefix = "U";
}

/**
 * Floppy disk controller, DIP-40
 *
 * KiCad symbol: `Interface:FD1771`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://amaus.net/static/S100/western%20digital/datasheet/Western%20Digital%20FD1771%20Specification%20197710.pdf
 * Keywords: Floppy disk controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class FD1771 extends Component.withPins({
  "VBB": "1",
  "~{WE}": "2",
  "~{CS}": "3",
  "~{RE}": "4",
  "A0": "5",
  "A1": "6",
  "DI0": "7",
  "DI1": "8",
  "DI2": "9",
  "DI3": "10",
  "DI4": "11",
  "DI5": "12",
  "DI6": "13",
  "DI7": "14",
  "~{PH1}/STEP": "15",
  "~{PH2}/DIRC": "16",
  "PH3": "17",
  "~{3PM}": "18",
  "~{MR}": "19",
  "GND": "20",
  "VCC": "21",
  "~{TEST}": "22",
  "HLT": "23",
  "CLK": "24",
  "~{XTDS}": "25",
  "FDCLK": "26",
  "FDDATA": "27",
  "TG43": "29",
  "WG": "30",
  "WD": "31",
  "READY": "32",
  "~{WF}": "33",
  "~{TR00}": "34",
  "~{IP}": "35",
  "~{WPRT}": "36",
  "~{DINT}": "37",
  "DRQ": "38",
  "INTRQ": "39",
  "VDD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBB: "power_in", "~{WE}": "input", "~{CS}": "input", "~{RE}": "input", A0: "input", A1: "input", DI0: "tri_state", DI1: "tri_state", DI2: "tri_state", DI3: "tri_state", DI4: "tri_state", DI5: "tri_state", DI6: "tri_state", DI7: "tri_state", "~{PH1}/STEP": "output", "~{PH2}/DIRC": "output", PH3: "output", "~{3PM}": "input", "~{MR}": "input", GND: "power_in", VCC: "power_in", "~{TEST}": "input", HLT: "input", CLK: "input", "~{XTDS}": "input", FDCLK: "input", FDDATA: "input", TG43: "output", WG: "output", WD: "output", READY: "input", "~{WF}": "input", "~{TR00}": "input", "~{IP}": "input", "~{WPRT}": "input", "~{DINT}": "input", DRQ: "output", INTRQ: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:FD1771";
  override referencePrefix = "U";
}

/**
 * 3.3V LVDS High Speed Differential Driver/Receiver, 400Mbps, SOIC-14
 *
 * KiCad symbol: `Interface:FIN1019M`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/FIN1019-D.pdf
 * Keywords: lvds driver receiver.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class FIN1019M extends Component.withPins({
  "DE": "1",
  "DI": "2",
  "NC_3": "3",
  "RO": "4",
  "NC_5": "5",
  "NC_6": "6",
  "GND": "7",
  "~{RE}": "8",
  "RI-": "9",
  "RI+": "10",
  "DO-": "11",
  "DO+": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DE: "input", DI: "input", NC_3: "no_connect", RO: "tri_state", NC_5: "no_connect", NC_6: "no_connect", GND: "power_in", "~{RE}": "input", "RI-": "input", "RI+": "input", "DO-": "tri_state", "DO+": "tri_state", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:FIN1019M";
  override referencePrefix = "U";
}

/**
 * 3.3V LVDS High Speed Differential Driver/Receiver, 400Mbps, TSSOP-14
 *
 * KiCad symbol: `Interface:FIN1019MTC`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.onsemi.com/pub/Collateral/FIN1019-D.pdf
 * Keywords: lvds driver receiver.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class FIN1019MTC extends Component.withPins({
  "DE": "1",
  "DI": "2",
  "NC_3": "3",
  "RO": "4",
  "NC_5": "5",
  "NC_6": "6",
  "GND": "7",
  "~{RE}": "8",
  "RI-": "9",
  "RI+": "10",
  "DO-": "11",
  "DO+": "12",
  "NC_13": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DE: "input", DI: "input", NC_3: "no_connect", RO: "tri_state", NC_5: "no_connect", NC_6: "no_connect", GND: "power_in", "~{RE}": "input", "RI-": "input", "RI+": "input", "DO-": "tri_state", "DO+": "tri_state", NC_13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:FIN1019MTC";
  override referencePrefix = "U";
}

/**
 * 2^12 serial decoder, SOP-20
 *
 * KiCad symbol: `Interface:HT12D`. Reference prefix: `U`.
 * Footprint filters: SOP*7.5x12.8mm*P1.27mm*.
 * @see https://www.holtek.com/documents/10179/116711/2_12dv120.pdf
 * Keywords: Serial Decoder.
 * Default footprint: Package_SO:SOP-20_7.5x12.8mm_P1.27mm.
 */
export class HT12D extends Component.withPins({
  "NC_1": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "VSS": "10",
  "D8": "11",
  "D9": "12",
  "D10": "13",
  "D11": "14",
  "DIN": "15",
  "OSC2": "16",
  "OSC1": "17",
  "VT": "18",
  "VDD": "19",
  "NC_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", VSS: "power_in", D8: "output", D9: "output", D10: "output", D11: "output", DIN: "input", OSC2: "output", OSC1: "input", VT: "output", VDD: "power_in", NC_20: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface:HT12D";
  override referencePrefix = "U";
}

/**
 * 2^12 serial encoder, SOP-20
 *
 * KiCad symbol: `Interface:HT12E`. Reference prefix: `U`.
 * Footprint filters: SOP*7.5x12.8mm*P1.27mm*.
 * @see https://www.holtek.com/documents/10179/116711/2_12ev120.pdf
 * Keywords: Serial Encoder.
 * Default footprint: Package_SO:SOP-20_7.5x12.8mm_P1.27mm.
 */
export class HT12E extends Component.withPins({
  "NC_1": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "VSS": "10",
  "AD8": "11",
  "AD9": "12",
  "AD10": "13",
  "AD11": "14",
  "~{TE}": "15",
  "OSC2": "16",
  "OSC1": "17",
  "DOUT": "18",
  "VDD": "19",
  "NC_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", VSS: "power_in", AD8: "output", AD9: "output", AD10: "output", AD11: "output", "~{TE}": "input", OSC2: "output", OSC1: "input", DOUT: "output", VDD: "power_in", NC_20: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface:HT12E";
  override referencePrefix = "U";
}

/**
 * 52Mbps Precision Delay RS485 Quad Line Receivers
 *
 * KiCad symbol: `Interface:LTC1518`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*3.9x9.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/15189fa.pdf
 * Keywords: receiver rs485 rs422 differential.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class LTC1518 extends Component.withPins({
  "B1": "1",
  "A1": "2",
  "Out1": "3",
  "EN": "4",
  "Out2": "5",
  "A2": "6",
  "B2": "7",
  "GND": "8",
  "B3": "9",
  "A3": "10",
  "Out3": "11",
  "~{EN}": "12",
  "Out4": "13",
  "A4": "14",
  "B4": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B1: "input", A1: "input", Out1: "tri_state", EN: "input", Out2: "tri_state", A2: "input", B2: "input", GND: "power_in", B3: "input", A3: "input", Out3: "tri_state", "~{EN}": "input", Out4: "tri_state", A4: "input", B4: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC1518";
  override referencePrefix = "U";
}

/**
 * 52Mbps Precision Delay RS485 Quad Line Receivers
 *
 * KiCad symbol: `Interface:LTC1519`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*3.9x9.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/15189fa.pdf
 * Keywords: receiver rs485 rs422 differential.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class LTC1519 extends Component.withPins({
  "B1": "1",
  "A1": "2",
  "Out1": "3",
  "EN12": "4",
  "Out2": "5",
  "A2": "6",
  "B2": "7",
  "B3": "9",
  "A3": "10",
  "Out3": "11",
  "EN34": "12",
  "Out4": "13",
  "A4": "14",
  "B4": "15",
  "GND": "8",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B1: "input", A1: "input", Out1: "tri_state", EN12: "input", Out2: "tri_state", A2: "input", B2: "input", B3: "input", A3: "input", Out3: "tri_state", EN34: "input", Out4: "tri_state", A4: "input", B4: "input", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC1519";
  override referencePrefix = "U";
}

/**
 * 100Mbps RS485 Hot Swapable Quad Drivers
 *
 * KiCad symbol: `Interface:LTC1688`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*3.9x9.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/16889fa.pdf
 * Keywords: driver rs485 rs422 differential.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class LTC1688 extends Component.withPins({
  "DI1": "1",
  "DO1A": "2",
  "DO1B": "3",
  "EN": "4",
  "DO2B": "5",
  "DO2A": "6",
  "DI2": "7",
  "GND": "8",
  "DI3": "9",
  "DO3A": "10",
  "DO3B": "11",
  "~{EN}": "12",
  "DO4B": "13",
  "DO4A": "14",
  "DI4": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DI1: "input", DO1A: "output", DO1B: "output", EN: "input", DO2B: "output", DO2A: "output", DI2: "input", GND: "power_in", DI3: "input", DO3A: "output", DO3B: "output", "~{EN}": "input", DO4B: "output", DO4A: "output", DI4: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC1688";
  override referencePrefix = "U";
}

/**
 * 100Mbps RS485 Hot Swapable Quad Drivers
 *
 * KiCad symbol: `Interface:LTC1689`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*3.9x9.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/16889fa.pdf
 * Keywords: driver rs485 rs422 differential.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class LTC1689 extends Component.withPins({
  "DI1": "1",
  "DO1A": "2",
  "DO1B": "3",
  "EN12": "4",
  "DO2B": "5",
  "DO2A": "6",
  "DI2": "7",
  "DI3": "9",
  "DO3A": "10",
  "DO3B": "11",
  "EN34": "12",
  "DO4B": "13",
  "DO4A": "14",
  "DI4": "15",
  "GND": "8",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DI1: "input", DO1A: "output", DO1B: "output", EN12: "input", DO2B: "output", DO2A: "output", DI2: "input", DI3: "input", DO3A: "output", DO3B: "output", EN34: "input", DO4B: "output", DO4A: "output", DI4: "input", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC1689";
  override referencePrefix = "U";
}

/**
 * Low Phase Noise, Dual Output Buffer/Driver/Logic Converter, LVPECL, DFN-12
 *
 * KiCad symbol: `Interface:LTC6957xDD-1`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.45mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6957fb.pdf
 * Keywords: LTC clock converter.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x3mm_P0.45mm_EP1.65x2.38mm.
 */
export class LTC6957xDD_1 extends Component.withPins({
  "FILTA": "1",
  "V+": "2",
  "IN+": "3",
  "IN-": "4",
  "GND_5": "5",
  "FILTB": "6",
  "SD2": "7",
  "OUT2+": "8",
  "OUT2-": "9",
  "OUT1-": "10",
  "OUT1+": "11",
  "SD1": "12",
  "GND_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FILTA: "input", "V+": "power_in", "IN+": "input", "IN-": "input", GND_5: "power_in", FILTB: "input", SD2: "input", "OUT2+": "open_emitter", "OUT2-": "open_emitter", "OUT1-": "open_emitter", "OUT1+": "open_emitter", SD1: "input", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC6957xDD-1";
  override referencePrefix = "U";
}

/**
 * Low Phase Noise, Dual Output Buffer/Driver/Logic Converter, LVDS, DFN-12
 *
 * KiCad symbol: `Interface:LTC6957xDD-2`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.45mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6957fb.pdf
 * Keywords: LTC clock converter.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x3mm_P0.45mm_EP1.65x2.38mm.
 */
export class LTC6957xDD_2 extends Component.withPins({
  "FILTA": "1",
  "V+": "2",
  "IN+": "3",
  "IN-": "4",
  "GND_5": "5",
  "FILTB": "6",
  "SD2": "7",
  "OUT2+": "8",
  "OUT2-": "9",
  "OUT1-": "10",
  "OUT1+": "11",
  "SD1": "12",
  "GND_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FILTA: "input", "V+": "power_in", "IN+": "input", "IN-": "input", GND_5: "power_in", FILTB: "input", SD2: "input", "OUT2+": "output", "OUT2-": "output", "OUT1-": "output", "OUT1+": "output", SD1: "input", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC6957xDD-2";
  override referencePrefix = "U";
}

/**
 * Low Phase Noise, Dual Output Buffer/Driver/Logic Converter, CMOS In-Phase Outputs, DFN-12
 *
 * KiCad symbol: `Interface:LTC6957xDD-3`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.45mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6957fb.pdf
 * Keywords: LTC clock converter.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x3mm_P0.45mm_EP1.65x2.38mm.
 */
export class LTC6957xDD_3 extends Component.withPins({
  "FILTA": "1",
  "V+": "2",
  "IN+": "3",
  "IN-": "4",
  "GND_5": "5",
  "FILTB": "6",
  "SD2": "7",
  "GNDOUT": "8",
  "OUT2": "9",
  "OUT1": "10",
  "VDD": "11",
  "SD1": "12",
  "GND_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FILTA: "input", "V+": "power_in", "IN+": "input", "IN-": "input", GND_5: "power_in", FILTB: "input", SD2: "input", GNDOUT: "output", OUT2: "output", OUT1: "output", VDD: "power_in", SD1: "input", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC6957xDD-3";
  override referencePrefix = "U";
}

/**
 * Low Phase Noise, Dual Output Buffer/Driver/Logic Converter, CMOS Complementary Outputs, DFN-12
 *
 * KiCad symbol: `Interface:LTC6957xDD-4`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.45mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6957fb.pdf
 * Keywords: LTC clock converter.
 * Default footprint: Package_DFN_QFN:DFN-12-1EP_3x3mm_P0.45mm_EP1.65x2.38mm.
 */
export class LTC6957xDD_4 extends Component.withPins({
  "FILTA": "1",
  "V+": "2",
  "IN+": "3",
  "IN-": "4",
  "GND_5": "5",
  "FILTB": "6",
  "SD2": "7",
  "GNDOUT": "8",
  "OUT2": "9",
  "OUT1": "10",
  "VDD": "11",
  "SD1": "12",
  "GND_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FILTA: "input", "V+": "power_in", "IN+": "input", "IN-": "input", GND_5: "power_in", FILTB: "input", SD2: "input", GNDOUT: "output", OUT2: "output", OUT1: "output", VDD: "power_in", SD1: "input", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC6957xDD-4";
  override referencePrefix = "U";
}

/**
 * Low Phase Noise, Dual Output Buffer/Driver/Logic Converter, LVPECL, MSOP-12
 *
 * KiCad symbol: `Interface:LTC6957xMS-1`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6957fb.pdf
 * Keywords: LTC clock converter.
 * Default footprint: Package_SO:MSOP-12_3x4.039mm_P0.65mm.
 */
export class LTC6957xMS_1 extends Component.withPins({
  "FILTA": "1",
  "V+": "2",
  "IN+": "3",
  "IN-": "4",
  "GND": "5",
  "FILTB": "6",
  "SD2": "7",
  "OUT2+": "8",
  "OUT2-": "9",
  "OUT1-": "10",
  "OUT1+": "11",
  "SD1": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FILTA: "input", "V+": "power_in", "IN+": "input", "IN-": "input", GND: "power_in", FILTB: "input", SD2: "input", "OUT2+": "open_emitter", "OUT2-": "open_emitter", "OUT1-": "open_emitter", "OUT1+": "open_emitter", SD1: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC6957xMS-1";
  override referencePrefix = "U";
}

/**
 * Low Phase Noise, Dual Output Buffer/Driver/Logic Converter, LVDS, MSOP-12
 *
 * KiCad symbol: `Interface:LTC6957xMS-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6957fb.pdf
 * Keywords: LTC clock converter.
 * Default footprint: Package_SO:MSOP-12_3x4.039mm_P0.65mm.
 */
export class LTC6957xMS_2 extends Component.withPins({
  "FILTA": "1",
  "V+": "2",
  "IN+": "3",
  "IN-": "4",
  "GND": "5",
  "FILTB": "6",
  "SD2": "7",
  "OUT2+": "8",
  "OUT2-": "9",
  "OUT1-": "10",
  "OUT1+": "11",
  "SD1": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FILTA: "input", "V+": "power_in", "IN+": "input", "IN-": "input", GND: "power_in", FILTB: "input", SD2: "input", "OUT2+": "output", "OUT2-": "output", "OUT1-": "output", "OUT1+": "output", SD1: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC6957xMS-2";
  override referencePrefix = "U";
}

/**
 * Low Phase Noise, Dual Output Buffer/Driver/Logic Converter, CMOS In-Phase Outputs, MSOP-12
 *
 * KiCad symbol: `Interface:LTC6957xMS-3`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6957fb.pdf
 * Keywords: LTC clock converter.
 * Default footprint: Package_SO:MSOP-12_3x4.039mm_P0.65mm.
 */
export class LTC6957xMS_3 extends Component.withPins({
  "FILTA": "1",
  "V+": "2",
  "IN+": "3",
  "IN-": "4",
  "GND": "5",
  "FILTB": "6",
  "SD2": "7",
  "GNDOUT": "8",
  "OUT2": "9",
  "OUT1": "10",
  "VDD": "11",
  "SD1": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FILTA: "input", "V+": "power_in", "IN+": "input", "IN-": "input", GND: "power_in", FILTB: "input", SD2: "input", GNDOUT: "output", OUT2: "output", OUT1: "output", VDD: "power_in", SD1: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC6957xMS-3";
  override referencePrefix = "U";
}

/**
 * Low Phase Noise, Dual Output Buffer/Driver/Logic Converter, CMOS Complementary Outputs, MSOP-12
 *
 * KiCad symbol: `Interface:LTC6957xMS-4`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6957fb.pdf
 * Keywords: LTC clock converter.
 * Default footprint: Package_SO:MSOP-12_3x4.039mm_P0.65mm.
 */
export class LTC6957xMS_4 extends Component.withPins({
  "FILTA": "1",
  "V+": "2",
  "IN+": "3",
  "IN-": "4",
  "GND": "5",
  "FILTB": "6",
  "SD2": "7",
  "GNDOUT": "8",
  "OUT2": "9",
  "OUT1": "10",
  "VDD": "11",
  "SD1": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FILTA: "input", "V+": "power_in", "IN+": "input", "IN-": "input", GND: "power_in", FILTB: "input", SD2: "input", GNDOUT: "output", OUT2: "output", OUT1: "output", VDD: "power_in", SD1: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:LTC6957xMS-4";
  override referencePrefix = "U";
}

/**
 * Single Switch  Debouncer, SOT-143
 *
 * KiCad symbol: `Interface:MAX6816`. Reference prefix: `U`.
 * Footprint filters: SOT*143*.
 * @see https://datasheets.maximintegrated.com/en/ds/1896.pdf
 * Keywords: Switch Debouncer.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class MAX6816 extends Component.withPins({
  "GND": "1",
  "IN": "2",
  "OUT": "3",
  "VCC": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN: "input", OUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:MAX6816";
  override referencePrefix = "U";
}

/**
 * 3.3 V Dual LVTTL/LVCMOS to Differential LVPECL Translator, SOIC-8
 *
 * KiCad symbol: `Interface:MC100EPT22D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC100EPT22-D.PDF
 * Keywords: PECL buffer interface.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC100EPT22D extends Component.withPins({
  "Q0": "1",
  "~{Q0}": "2",
  "Q1": "3",
  "~{Q1}": "4",
  "GND": "5",
  "D1": "6",
  "D0": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q0: "output", "~{Q0}": "output", Q1: "output", "~{Q1}": "output", GND: "power_in", D1: "input", D0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:MC100EPT22D";
  override referencePrefix = "U";
}

/**
 * 3.3 V Dual LVTTL/LVCMOS to Differential LVPECL Translator, TSSOP-8
 *
 * KiCad symbol: `Interface:MC100EPT22DT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC100EPT22-D.PDF
 * Keywords: PECL buffer interface.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class MC100EPT22DT extends Component.withPins({
  "Q0": "1",
  "~{Q0}": "2",
  "Q1": "3",
  "~{Q1}": "4",
  "GND": "5",
  "D1": "6",
  "D0": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q0: "output", "~{Q0}": "output", Q1: "output", "~{Q1}": "output", GND: "power_in", D1: "input", D0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:MC100EPT22DT";
  override referencePrefix = "U";
}

/**
 * 3.3 V Dual LVTTL/LVCMOS to Differential LVPECL Translator, SOIC-8
 *
 * KiCad symbol: `Interface:MC100LVELT22D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC100LVELT22-D.PDF
 * Keywords: PECL buffer interface.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC100LVELT22D extends Component.withPins({
  "Q0": "1",
  "~{Q0}": "2",
  "Q1": "3",
  "~{Q1}": "4",
  "GND": "5",
  "D1": "6",
  "D0": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q0: "output", "~{Q0}": "output", Q1: "output", "~{Q1}": "output", GND: "power_in", D1: "input", D0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:MC100LVELT22D";
  override referencePrefix = "U";
}

/**
 * 3.3 V Dual LVTTL/LVCMOS to Differential LVPECL Translator, TSSOP-8
 *
 * KiCad symbol: `Interface:MC100LVELT22DT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC100LVELT22-D.PDF
 * Keywords: PECL buffer interface.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class MC100LVELT22DT extends Component.withPins({
  "Q0": "1",
  "~{Q0}": "2",
  "Q1": "3",
  "~{Q1}": "4",
  "GND": "5",
  "D1": "6",
  "D0": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q0: "output", "~{Q0}": "output", Q1: "output", "~{Q1}": "output", GND: "power_in", D1: "input", D0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:MC100LVELT22DT";
  override referencePrefix = "U";
}

/**
 * Motorola Programmable Timer Module, 1.0MHz, DIP-28
 *
 * KiCad symbol: `Interface:MC6840`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC6840.pdf
 * Keywords: PTM MC6800.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class MC6840 extends Component.withPins({
  "VSS": "1",
  "~{G2}": "2",
  "O2": "3",
  "~{C2}": "4",
  "~{G3}": "5",
  "O3": "6",
  "~{C3}": "7",
  "~{RESET}": "8",
  "~{IRQ}": "9",
  "RS0": "10",
  "RS1": "11",
  "RS2": "12",
  "R/~{W}": "13",
  "VCC": "14",
  "~{CS0}": "15",
  "CS1": "16",
  "E": "17",
  "D7": "18",
  "D6": "19",
  "D5": "20",
  "D4": "21",
  "D3": "22",
  "D2": "23",
  "D1": "24",
  "D0": "25",
  "~{G1}": "26",
  "O1": "27",
  "~{C1}": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{G2}": "input", O2: "output", "~{C2}": "input", "~{G3}": "input", O3: "output", "~{C3}": "input", "~{RESET}": "input", "~{IRQ}": "output", RS0: "input", RS1: "input", RS2: "input", "R/~{W}": "input", VCC: "power_in", "~{CS0}": "input", CS1: "input", E: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{G1}": "input", O1: "output", "~{C1}": "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC6840";
  override referencePrefix = "U";
}

/**
 * Floppy Disc Controller, DIP-40
 *
 * KiCad symbol: `Interface:MC6843`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://www.datasheetarchive.com/pdf/download.php?id=355f4f5379c550317997643252fd5cac1bb08e&type=M&query=MC6843P
 * Keywords: FDC.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class MC6843 extends Component.withPins({
  "VSS_1": "1",
  "VSS_2": "2",
  "FIR": "3",
  "FI": "4",
  "WPT": "5",
  "WGT": "6",
  "~{RESET}": "7",
  "HDR": "8",
  "DCK": "9",
  "LCT": "10",
  "IDX": "11",
  "CLK": "12",
  "RDY": "13",
  "VFOC": "14",
  "STP": "15",
  "HLD": "16",
  "RS2": "17",
  "RS1": "18",
  "RS0": "19",
  "VCC": "20",
  "TxAck": "21",
  "R/~{W}": "22",
  "E": "23",
  "~{CS}": "24",
  "BD": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "NC_34": "34",
  "NC_35": "35",
  "TxRQ": "36",
  "~{IRQ}": "37",
  "RDT": "38",
  "WDT": "39",
  "TRZ": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", VSS_2: "power_in", FIR: "output", FI: "input", WPT: "input", WGT: "output", "~{RESET}": "input", HDR: "output", DCK: "input", LCT: "output", IDX: "input", CLK: "input", RDY: "input", VFOC: "output", STP: "output", HLD: "output", RS2: "input", RS1: "input", RS0: "input", VCC: "power_in", TxAck: "input", "R/~{W}": "input", E: "input", "~{CS}": "input", BD: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", NC_34: "no_connect", NC_35: "no_connect", TxRQ: "output", "~{IRQ}": "open_collector", RDT: "input", WDT: "output", TRZ: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC6843";
  override referencePrefix = "U";
}

/**
 * Direct Memory Access Controller 1MHz, DIP-40
 *
 * KiCad symbol: `Interface:MC6844`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/560/501527_DS.pdf
 * Keywords: Direct Memory Access Controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class MC6844 extends Component.withPins({
  "VSS": "1",
  "~{CS}/Tx_AKB": "2",
  "R/~{W}": "3",
  "A0": "4",
  "A1": "5",
  "A2": "6",
  "A3": "7",
  "A4": "8",
  "A5": "9",
  "A6": "10",
  "A7": "11",
  "A8": "12",
  "A9": "13",
  "A10": "14",
  "A11": "15",
  "A12": "16",
  "A13": "17",
  "A14": "18",
  "A15": "19",
  "VCC": "20",
  "D7": "21",
  "D6": "22",
  "D5": "23",
  "D4": "24",
  "D3": "25",
  "D2": "26",
  "D1": "27",
  "D0": "28",
  "Tx_RQ3": "29",
  "Tx_RQ2": "30",
  "Tx_RQ1": "31",
  "Tx_RQ0": "32",
  "~{IRQ}/~{DEND}": "33",
  "~{Tx_STB}": "34",
  "Tx_AKA": "35",
  "~{DRQ2}": "36",
  "~{DRQ1}": "37",
  "DGRNT": "38",
  "~{RESET}": "39",
  "E": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{CS}/Tx_AKB": "bidirectional", "R/~{W}": "bidirectional", A0: "bidirectional", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", VCC: "power_in", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", Tx_RQ3: "input", Tx_RQ2: "input", Tx_RQ1: "input", Tx_RQ0: "input", "~{IRQ}/~{DEND}": "output", "~{Tx_STB}": "output", Tx_AKA: "output", "~{DRQ2}": "output", "~{DRQ1}": "output", DGRNT: "input", "~{RESET}": "input", E: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC6844";
  override referencePrefix = "U";
}

/**
 * Peripheral Interface Adapter 1.5MHz, DIP-40
 *
 * KiCad symbol: `Interface:MC68A21`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/6821.pdf
 * Keywords: PIA.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class MC68A21 extends Component.withPins({
  "VSS": "1",
  "PA0": "2",
  "PA1": "3",
  "PA2": "4",
  "PA3": "5",
  "PA4": "6",
  "PA5": "7",
  "PA6": "8",
  "PA7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "CB1": "18",
  "CB2": "19",
  "VCC": "20",
  "R/~{W}": "21",
  "CS0": "22",
  "~{CS2}": "23",
  "CS1": "24",
  "ENABLE": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "~{RESET}": "34",
  "RS1": "35",
  "RS0": "36",
  "~{IRQB}": "37",
  "~{IRQA}": "38",
  "CA2": "39",
  "CA1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", CB1: "input", CB2: "bidirectional", VCC: "power_in", "R/~{W}": "input", CS0: "input", "~{CS2}": "input", CS1: "input", ENABLE: "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{RESET}": "input", RS1: "input", RS0: "input", "~{IRQB}": "open_collector", "~{IRQA}": "open_collector", CA2: "bidirectional", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC68A21";
  override referencePrefix = "U";
}

/**
 * Motorola Programmable Timer Module, 1.5MHz, DIP-28
 *
 * KiCad symbol: `Interface:MC68A40`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC6840.pdf
 * Keywords: PTM MC6800.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class MC68A40 extends Component.withPins({
  "VSS": "1",
  "~{G2}": "2",
  "O2": "3",
  "~{C2}": "4",
  "~{G3}": "5",
  "O3": "6",
  "~{C3}": "7",
  "~{RESET}": "8",
  "~{IRQ}": "9",
  "RS0": "10",
  "RS1": "11",
  "RS2": "12",
  "R/~{W}": "13",
  "VCC": "14",
  "~{CS0}": "15",
  "CS1": "16",
  "E": "17",
  "D7": "18",
  "D6": "19",
  "D5": "20",
  "D4": "21",
  "D3": "22",
  "D2": "23",
  "D1": "24",
  "D0": "25",
  "~{G1}": "26",
  "O1": "27",
  "~{C1}": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{G2}": "input", O2: "output", "~{C2}": "input", "~{G3}": "input", O3: "output", "~{C3}": "input", "~{RESET}": "input", "~{IRQ}": "output", RS0: "input", RS1: "input", RS2: "input", "R/~{W}": "input", VCC: "power_in", "~{CS0}": "input", CS1: "input", E: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{G1}": "input", O1: "output", "~{C1}": "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC68A40";
  override referencePrefix = "U";
}

/**
 * Direct Memory Access Controller 1.5MHz, DIP-40
 *
 * KiCad symbol: `Interface:MC68A44`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/560/501527_DS.pdf
 * Keywords: Direct Memory Access Controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class MC68A44 extends Component.withPins({
  "VSS": "1",
  "~{CS}/Tx_AKB": "2",
  "R/~{W}": "3",
  "A0": "4",
  "A1": "5",
  "A2": "6",
  "A3": "7",
  "A4": "8",
  "A5": "9",
  "A6": "10",
  "A7": "11",
  "A8": "12",
  "A9": "13",
  "A10": "14",
  "A11": "15",
  "A12": "16",
  "A13": "17",
  "A14": "18",
  "A15": "19",
  "VCC": "20",
  "D7": "21",
  "D6": "22",
  "D5": "23",
  "D4": "24",
  "D3": "25",
  "D2": "26",
  "D1": "27",
  "D0": "28",
  "Tx_RQ3": "29",
  "Tx_RQ2": "30",
  "Tx_RQ1": "31",
  "Tx_RQ0": "32",
  "~{IRQ}/~{DEND}": "33",
  "~{Tx_STB}": "34",
  "Tx_AKA": "35",
  "~{DRQ2}": "36",
  "~{DRQ1}": "37",
  "DGRNT": "38",
  "~{RESET}": "39",
  "E": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{CS}/Tx_AKB": "bidirectional", "R/~{W}": "bidirectional", A0: "bidirectional", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", VCC: "power_in", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", Tx_RQ3: "input", Tx_RQ2: "input", Tx_RQ1: "input", Tx_RQ0: "input", "~{IRQ}/~{DEND}": "output", "~{Tx_STB}": "output", Tx_AKA: "output", "~{DRQ2}": "output", "~{DRQ1}": "output", DGRNT: "input", "~{RESET}": "input", E: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC68A44";
  override referencePrefix = "U";
}

/**
 * Peripheral Interface Adapter 2MHz, DIP-40
 *
 * KiCad symbol: `Interface:MC68B21`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/6821.pdf
 * Keywords: PIA.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class MC68B21 extends Component.withPins({
  "VSS": "1",
  "PA0": "2",
  "PA1": "3",
  "PA2": "4",
  "PA3": "5",
  "PA4": "6",
  "PA5": "7",
  "PA6": "8",
  "PA7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "CB1": "18",
  "CB2": "19",
  "VCC": "20",
  "R/~{W}": "21",
  "CS0": "22",
  "~{CS2}": "23",
  "CS1": "24",
  "ENABLE": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "~{RESET}": "34",
  "RS1": "35",
  "RS0": "36",
  "~{IRQB}": "37",
  "~{IRQA}": "38",
  "CA2": "39",
  "CA1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", CB1: "input", CB2: "bidirectional", VCC: "power_in", "R/~{W}": "input", CS0: "input", "~{CS2}": "input", CS1: "input", ENABLE: "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{RESET}": "input", RS1: "input", RS0: "input", "~{IRQB}": "open_collector", "~{IRQA}": "open_collector", CA2: "bidirectional", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC68B21";
  override referencePrefix = "U";
}

/**
 * Motorola Programmable Timer Module, 2.0MHz, DIP-28
 *
 * KiCad symbol: `Interface:MC68B40`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC6840.pdf
 * Keywords: PTM MC6800.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class MC68B40 extends Component.withPins({
  "VSS": "1",
  "~{G2}": "2",
  "O2": "3",
  "~{C2}": "4",
  "~{G3}": "5",
  "O3": "6",
  "~{C3}": "7",
  "~{RESET}": "8",
  "~{IRQ}": "9",
  "RS0": "10",
  "RS1": "11",
  "RS2": "12",
  "R/~{W}": "13",
  "VCC": "14",
  "~{CS0}": "15",
  "CS1": "16",
  "E": "17",
  "D7": "18",
  "D6": "19",
  "D5": "20",
  "D4": "21",
  "D3": "22",
  "D2": "23",
  "D1": "24",
  "D0": "25",
  "~{G1}": "26",
  "O1": "27",
  "~{C1}": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{G2}": "input", O2: "output", "~{C2}": "input", "~{G3}": "input", O3: "output", "~{C3}": "input", "~{RESET}": "input", "~{IRQ}": "output", RS0: "input", RS1: "input", RS2: "input", "R/~{W}": "input", VCC: "power_in", "~{CS0}": "input", CS1: "input", E: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{G1}": "input", O1: "output", "~{C1}": "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC68B40";
  override referencePrefix = "U";
}

/**
 * Direct Memory Access Controller 2MHz, DIP-40
 *
 * KiCad symbol: `Interface:MC68B44`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/560/501527_DS.pdf
 * Keywords: Direct Memory Access Controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class MC68B44 extends Component.withPins({
  "VSS": "1",
  "~{CS}/Tx_AKB": "2",
  "R/~{W}": "3",
  "A0": "4",
  "A1": "5",
  "A2": "6",
  "A3": "7",
  "A4": "8",
  "A5": "9",
  "A6": "10",
  "A7": "11",
  "A8": "12",
  "A9": "13",
  "A10": "14",
  "A11": "15",
  "A12": "16",
  "A13": "17",
  "A14": "18",
  "A15": "19",
  "VCC": "20",
  "D7": "21",
  "D6": "22",
  "D5": "23",
  "D4": "24",
  "D3": "25",
  "D2": "26",
  "D1": "27",
  "D0": "28",
  "Tx_RQ3": "29",
  "Tx_RQ2": "30",
  "Tx_RQ1": "31",
  "Tx_RQ0": "32",
  "~{IRQ}/~{DEND}": "33",
  "~{Tx_STB}": "34",
  "Tx_AKA": "35",
  "~{DRQ2}": "36",
  "~{DRQ1}": "37",
  "DGRNT": "38",
  "~{RESET}": "39",
  "E": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{CS}/Tx_AKB": "bidirectional", "R/~{W}": "bidirectional", A0: "bidirectional", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", VCC: "power_in", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", Tx_RQ3: "input", Tx_RQ2: "input", Tx_RQ1: "input", Tx_RQ0: "input", "~{IRQ}/~{DEND}": "output", "~{Tx_STB}": "output", Tx_AKA: "output", "~{DRQ2}": "output", "~{DRQ1}": "output", DGRNT: "input", "~{RESET}": "input", E: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:MC68B44";
  override referencePrefix = "U";
}

/**
 * 1:4 Low Skew Clock Buffer, DFN-8
 *
 * KiCad symbol: `Interface:NB3N551MN`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/NB3N551-D.PDF
 * Keywords: clock buffer.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP0.9x1.3mm.
 */
export class NB3N551MN extends Component.withPins({
  "ICLK": "1",
  "Q1": "2",
  "Q2": "3",
  "Q3": "4",
  "Q4": "5",
  "GND": "6",
  "VDD": "7",
  "OE": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ICLK: "input", Q1: "output", Q2: "output", Q3: "output", Q4: "output", GND: "power_in", VDD: "power_in", OE: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:NB3N551MN";
  override referencePrefix = "U";
}

/**
 * 11.3-Gbps Limiting Amplifier, VQFN-16
 *
 * KiCad symbol: `Interface:ONET1191PRGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/onet1191p.pdf
 * Keywords: limiting amplifier gigabit ethernet sfp sfp+.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm.
 */
export class ONET1191PRGT extends Component.withPins({
  "VCC_1": "1",
  "VCC_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "COC-": "5",
  "COC+": "6",
  "DIN+": "7",
  "DIN-": "8",
  "TH": "9",
  "LOS": "10",
  "DISABLE": "11",
  "VAR": "12",
  "GND_13": "13",
  "DOUT-": "14",
  "DOUT+": "15",
  "GND_16": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC_1: "power_in", VCC_2: "passive", GND_3: "power_in", GND_4: "passive", "COC-": "passive", "COC+": "passive", "DIN+": "input", "DIN-": "input", TH: "input", LOS: "open_collector", DISABLE: "input", VAR: "input", GND_13: "passive", "DOUT-": "output", "DOUT+": "output", GND_16: "passive", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface:ONET1191PRGT";
  override referencePrefix = "U";
}

/**
 * Dual bidirectional I2C Bus and SMBus voltage level translator
 *
 * KiCad symbol: `Interface:PCA9306`. Reference prefix: `U`.
 * Footprint filters: SSOP*2.95x2.8mm*P0.65mm*, VSSOP*2.3x2mm*P0.5mm*, X2SON*1.4x1mm*P0.35mm*.
 * @see http://www.ti.com/lit/ds/symlink/pca9306.pdf
 * Keywords: Dual bidirectional I2C Bus and SMBus voltage level translator.
 */
export class PCA9306 extends Component.withPins({
  "GND": "1",
  "VREF1": "2",
  "SCL1": "3",
  "SDA1": "4",
  "SDA2": "5",
  "SCL2": "6",
  "VREF2": "7",
  "EN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VREF1: "power_in", SCL1: "bidirectional", SDA1: "bidirectional", SDA2: "bidirectional", SCL2: "bidirectional", VREF2: "power_in", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:PCA9306";
  override referencePrefix = "U";
}

/**
 * Dual bidirectional I2C Bus and SMBus voltage level translator, SO-8
 *
 * KiCad symbol: `Interface:PCA9306D`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9306.pdf
 * Keywords: I2C SMBus.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class PCA9306D extends Component.withPins({
  "GND": "1",
  "VREF1": "2",
  "SCL1": "3",
  "SDA1": "4",
  "SDA2": "5",
  "SCL2": "6",
  "VREF2": "7",
  "EN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VREF1: "power_in", SCL1: "bidirectional", SDA1: "bidirectional", SDA2: "bidirectional", SCL2: "bidirectional", VREF2: "power_in", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:PCA9306D";
  override referencePrefix = "U";
}

/**
 * Dual bidirectional I2C Bus and SMBus voltage level translator, VSSOP-8, Discontinued
 *
 * KiCad symbol: `Interface:PCA9306DC`. Reference prefix: `U`.
 * Footprint filters: VSSOP*2.3x2mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9306.pdf
 * Keywords: I2C SMBus.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 */
export class PCA9306DC extends Component.withPins({
  "GND": "1",
  "VREF1": "2",
  "SCL1": "3",
  "SDA1": "4",
  "SDA2": "5",
  "SCL2": "6",
  "VREF2": "7",
  "EN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VREF1: "power_in", SCL1: "bidirectional", SDA1: "bidirectional", SDA2: "bidirectional", SCL2: "bidirectional", VREF2: "power_in", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:PCA9306DC";
  override referencePrefix = "U";
}

/**
 * Dual bidirectional I2C Bus and SMBus voltage level translator, VSSOP-8
 *
 * KiCad symbol: `Interface:PCA9306DC1`. Reference prefix: `U`.
 * Footprint filters: VSSOP*2.3x2mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9306.pdf
 * Keywords: I2C SMBus.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 */
export class PCA9306DC1 extends Component.withPins({
  "GND": "1",
  "VREF1": "2",
  "SCL1": "3",
  "SDA1": "4",
  "SDA2": "5",
  "SCL2": "6",
  "VREF2": "7",
  "EN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VREF1: "power_in", SCL1: "bidirectional", SDA1: "bidirectional", SDA2: "bidirectional", SCL2: "bidirectional", VREF2: "power_in", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:PCA9306DC1";
  override referencePrefix = "U";
}

/**
 * Dual bidirectional I2C Bus and SMBus voltage level translator, TSSOP-8
 *
 * KiCad symbol: `Interface:PCA9306DP`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9306.pdf
 * Keywords: I2C SMBus.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class PCA9306DP extends Component.withPins({
  "GND": "1",
  "VREF1": "2",
  "SCL1": "3",
  "SDA1": "4",
  "SDA2": "5",
  "SCL2": "6",
  "VREF2": "7",
  "EN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VREF1: "power_in", SCL1: "bidirectional", SDA1: "bidirectional", SDA2: "bidirectional", SCL2: "bidirectional", VREF2: "power_in", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:PCA9306DP";
  override referencePrefix = "U";
}

/**
 * Dual bidirectional bus buffer, SO-8
 *
 * KiCad symbol: `Interface:PCA9600D`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9600.pdf
 * Keywords: I2C buffer.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class PCA9600D extends Component.withPins({
  "SX": "1",
  "RX": "2",
  "TX": "3",
  "GND": "4",
  "TY": "5",
  "RY": "6",
  "SY": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SX: "bidirectional", RX: "input", TX: "open_collector", GND: "power_in", TY: "open_collector", RY: "input", SY: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:PCA9600D";
  override referencePrefix = "U";
}

/**
 * Dual bidirectional bus buffer, TSSOP-8
 *
 * KiCad symbol: `Interface:PCA9600DP`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9600.pdf
 * Keywords: I2C buffer.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class PCA9600DP extends Component.withPins({
  "SX": "1",
  "RX": "2",
  "TX": "3",
  "GND": "4",
  "TY": "5",
  "RY": "6",
  "SY": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SX: "bidirectional", RX: "input", TX: "open_collector", GND: "power_in", TY: "open_collector", RY: "input", SY: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:PCA9600DP";
  override referencePrefix = "U";
}

/**
 * Dual bidirectional hot-swap multipoint bus buffer, SO-8
 *
 * KiCad symbol: `Interface:PCA9615DP`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9615.pdf
 * Keywords: Differential SMBus/I2C buffer.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class PCA9615DP extends Component.withPins({
  "V_{DD(A)}": "1",
  "SDA": "2",
  "EN": "3",
  "SCL": "4",
  "V_{SS}": "5",
  "DSCLM": "6",
  "DSCLP": "7",
  "DSDAP": "8",
  "DSDAM": "9",
  "V_{DD(B)}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD(A)}": "power_in", SDA: "bidirectional", EN: "input", SCL: "bidirectional", "V_{SS}": "power_in", DSCLM: "bidirectional", DSCLP: "bidirectional", DSDAP: "bidirectional", DSDAM: "bidirectional", "V_{DD(B)}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:PCA9615DP";
  override referencePrefix = "U";
}

/**
 * PCI SMARTarget I/O Accelerator
 *
 * KiCad symbol: `Interface:PCI9030-PQFP176`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see http://lhcb-online.web.cern.ch/lhcb-online/ecs/ccpc/docs/plc-9030-databook.pdf
 * Keywords: PCI.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 */
export class PCI9030_PQFP176 extends Component.withPins({
  "VDD_1": "1",
  "AD28": "2",
  "AD27": "3",
  "AD26": "4",
  "AD25": "5",
  "AD24": "6",
  "C/BE3#": "7",
  "IDSEL": "8",
  "AD23": "9",
  "AD22": "10",
  "AD21": "11",
  "AD20": "12",
  "VSS_13": "13",
  "VDD_14": "14",
  "AD19": "15",
  "AD18": "16",
  "AD17": "17",
  "AD16": "18",
  "C/BE2#": "19",
  "FRAME#": "20",
  "IRDY#": "21",
  "TRDY#": "22",
  "DEVSEL#": "23",
  "STOP#": "24",
  "LOCK#": "25",
  "PERR#": "26",
  "SERR#": "27",
  "PAR": "28",
  "C/BE1#": "29",
  "AD15": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "AD14": "33",
  "AD13": "34",
  "AD12": "35",
  "AD11": "36",
  "AD10": "37",
  "AD9": "38",
  "AD8": "39",
  "C/BE0#": "40",
  "AD7": "41",
  "AD6": "42",
  "AD5": "43",
  "VSS_44": "44",
  "VDD_45": "45",
  "AD4": "46",
  "AD3": "47",
  "AD2": "48",
  "AD1": "49",
  "AD0": "50",
  "ENUM#": "51",
  "LEDON#": "52",
  "VI/O": "53",
  "CPCISW": "54",
  "LBE3#": "55",
  "VDD_56": "56",
  "VSS_57": "57",
  "LBE2#": "58",
  "LBE1#": "59",
  "LBE0#": "60",
  "LD31": "61",
  "LD30": "62",
  "LD29": "63",
  "LD28": "64",
  "LD27": "65",
  "VSS_66": "66",
  "LD26": "67",
  "LD25": "68",
  "LD24": "69",
  "VDD_70": "70",
  "BCLKo": "71",
  "LD23": "72",
  "LD22": "73",
  "LD21": "74",
  "ALE": "75",
  "MODE": "76",
  "LD20": "77",
  "VSS_78": "78",
  "LD19": "79",
  "LD18": "80",
  "LD17": "81",
  "LD16": "82",
  "LD15": "83",
  "LD14": "84",
  "VDD_85": "85",
  "LD13": "86",
  "LD12": "87",
  "VSS_88": "88",
  "LD11": "89",
  "LD10": "90",
  "LD9": "91",
  "LD8": "92",
  "LD7": "93",
  "GPIO8": "94",
  "LD6": "95",
  "LD5": "96",
  "LD4": "97",
  "LD3": "98",
  "LD2": "99",
  "VDD_100": "100",
  "VSS_101": "101",
  "LD1": "102",
  "LPMESET": "103",
  "LD0": "104",
  "LA2": "105",
  "LA3": "106",
  "LA4": "107",
  "LA5": "108",
  "LA6": "109",
  "LA7": "110",
  "LA8": "111",
  "BD-SEL#/TST": "112",
  "VSS_113": "113",
  "LA9": "114",
  "LA10": "115",
  "LA11": "116",
  "VDD_117": "117",
  "LA12": "118",
  "LA13": "119",
  "LA14": "120",
  "LA15": "121",
  "VSS_122": "122",
  "LA16": "123",
  "LA17": "124",
  "LA18": "125",
  "LPMINT#": "126",
  "LA19": "127",
  "LA20": "128",
  "LA21": "129",
  "LA22": "130",
  "LA23": "131",
  "VSS_132": "132",
  "VDD_133": "133",
  "GPIO7/LA24": "134",
  "GPIO6/LA25": "135",
  "GPIO5/LA26": "136",
  "GPIO4/LA27": "137",
  "ADS#": "138",
  "BLAST#": "139",
  "WR#": "140",
  "RD#": "141",
  "LW/R#": "142",
  "READY#": "143",
  "BTERM#": "144",
  "LCLK": "145",
  "VSS_146": "146",
  "CS0#": "147",
  "CS1#": "148",
  "LRESETo#": "149",
  "LGNT": "150",
  "LREQ": "151",
  "LINTi1": "152",
  "LINTi2": "153",
  "GPIO0/WAITo#": "154",
  "GPIO1/LLOCKo#": "155",
  "GPIO2/CS2#": "156",
  "GPIO3/CS3#": "157",
  "EECS": "158",
  "EEDO": "159",
  "EESK": "160",
  "EEDI": "161",
  "VDD_162": "162",
  "VSS_163": "163",
  "TRST#": "164",
  "TCK": "165",
  "TMS": "166",
  "TDO": "167",
  "TDI": "168",
  "PME#": "169",
  "INTA#": "170",
  "RST#": "171",
  "PCLK": "172",
  "AD31": "173",
  "AD30": "174",
  "AD29": "175",
  "VSS_176": "176",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", AD28: "bidirectional", AD27: "bidirectional", AD26: "bidirectional", AD25: "bidirectional", AD24: "bidirectional", "C/BE3#": "bidirectional", IDSEL: "input", AD23: "bidirectional", AD22: "bidirectional", AD21: "bidirectional", AD20: "bidirectional", VSS_13: "power_in", VDD_14: "power_in", AD19: "bidirectional", AD18: "bidirectional", AD17: "bidirectional", AD16: "bidirectional", "C/BE2#": "bidirectional", "FRAME#": "bidirectional", "IRDY#": "bidirectional", "TRDY#": "bidirectional", "DEVSEL#": "bidirectional", "STOP#": "bidirectional", "LOCK#": "input", "PERR#": "output", "SERR#": "output", PAR: "bidirectional", "C/BE1#": "bidirectional", AD15: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", AD14: "bidirectional", AD13: "bidirectional", AD12: "bidirectional", AD11: "bidirectional", AD10: "bidirectional", AD9: "bidirectional", AD8: "bidirectional", "C/BE0#": "bidirectional", AD7: "bidirectional", AD6: "bidirectional", AD5: "bidirectional", VSS_44: "power_in", VDD_45: "power_in", AD4: "bidirectional", AD3: "bidirectional", AD2: "bidirectional", AD1: "bidirectional", AD0: "bidirectional", "ENUM#": "output", "LEDON#": "output", "VI/O": "power_in", CPCISW: "input", "LBE3#": "output", VDD_56: "power_in", VSS_57: "power_in", "LBE2#": "output", "LBE1#": "output", "LBE0#": "output", LD31: "bidirectional", LD30: "bidirectional", LD29: "bidirectional", LD28: "bidirectional", LD27: "bidirectional", VSS_66: "power_in", LD26: "bidirectional", LD25: "bidirectional", LD24: "bidirectional", VDD_70: "power_in", BCLKo: "output", LD23: "bidirectional", LD22: "bidirectional", LD21: "bidirectional", ALE: "output", MODE: "input", LD20: "bidirectional", VSS_78: "power_in", LD19: "bidirectional", LD18: "bidirectional", LD17: "bidirectional", LD16: "bidirectional", LD15: "bidirectional", LD14: "bidirectional", VDD_85: "power_in", LD13: "bidirectional", LD12: "bidirectional", VSS_88: "power_in", LD11: "bidirectional", LD10: "bidirectional", LD9: "bidirectional", LD8: "bidirectional", LD7: "bidirectional", GPIO8: "bidirectional", LD6: "bidirectional", LD5: "bidirectional", LD4: "bidirectional", LD3: "bidirectional", LD2: "bidirectional", VDD_100: "power_in", VSS_101: "power_in", LD1: "bidirectional", LPMESET: "input", LD0: "bidirectional", LA2: "output", LA3: "output", LA4: "output", LA5: "output", LA6: "output", LA7: "output", LA8: "output", "BD-SEL#/TST": "input", VSS_113: "power_in", LA9: "output", LA10: "input", LA11: "output", VDD_117: "power_in", LA12: "output", LA13: "output", LA14: "output", LA15: "output", VSS_122: "power_in", LA16: "output", LA17: "output", LA18: "output", "LPMINT#": "output", LA19: "output", LA20: "output", LA21: "output", LA22: "output", LA23: "output", VSS_132: "power_in", VDD_133: "power_in", "GPIO7/LA24": "bidirectional", "GPIO6/LA25": "bidirectional", "GPIO5/LA26": "bidirectional", "GPIO4/LA27": "bidirectional", "ADS#": "output", "BLAST#": "output", "WR#": "output", "RD#": "output", "LW/R#": "output", "READY#": "input", "BTERM#": "input", LCLK: "input", VSS_146: "power_in", "CS0#": "output", "CS1#": "output", "LRESETo#": "output", LGNT: "output", LREQ: "input", LINTi1: "input", LINTi2: "input", "GPIO0/WAITo#": "bidirectional", "GPIO1/LLOCKo#": "bidirectional", "GPIO2/CS2#": "bidirectional", "GPIO3/CS3#": "bidirectional", EECS: "output", EEDO: "input", EESK: "output", EEDI: "output", VDD_162: "power_in", VSS_163: "power_in", "TRST#": "input", TCK: "input", TMS: "input", TDO: "output", TDI: "input", "PME#": "output", "INTA#": "output", "RST#": "input", PCLK: "input", AD31: "bidirectional", AD30: "bidirectional", AD29: "bidirectional", VSS_176: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:PCI9030-PQFP176";
  override referencePrefix = "U";
}

/**
 * PCI 2.1 Compliant Master/Slave Device, PQFP-160
 *
 * KiCad symbol: `Interface:S5933_PQ160`. Reference prefix: `U`.
 * Footprint filters: PQFP*28x28mm*P0.65mm*.
 * @see http://datasheet.datasheetarchive.com/originals/distributors/Datasheets-35/DSA-684194.pdf
 * Keywords: PCI 2.1 Compliant Master/Slave Device.
 * Default footprint: Package_QFP:PQFP-160_28x28mm_P0.65mm.
 */
export class S5933_PQ160 extends Component.withPins({
  "VSS_10": "10",
  "VSS_30": "30",
  "VCC_31": "31",
  "VSS_50": "50",
  "VCC_51": "51",
  "VSS_70": "70",
  "VCC_71": "71",
  "VSS_90": "90",
  "VCC_91": "91",
  "VSS_110": "110",
  "VCC_111": "111",
  "VSS_130": "130",
  "VCC_131": "131",
  "VSS_150": "150",
  "VCC_151": "151",
  "VCC_11": "11",
  "EQ0": "1",
  "AD23": "2",
  "AD22": "3",
  "AD21": "4",
  "DQ31": "5",
  "AD20": "6",
  "AD19": "7",
  "AD18": "8",
  "EQ1": "9",
  "AD17": "12",
  "DQ30": "13",
  "AD16": "14",
  "C/BE2#": "15",
  "FRAME#": "16",
  "EQ2": "17",
  "IRDY#": "18",
  "TRDY#": "19",
  "DEVSEL#": "20",
  "EQ3": "21",
  "STOP#": "22",
  "LOCK#": "23",
  "PERR#": "24",
  "DQ29": "25",
  "SERR#": "26",
  "PAR": "27",
  "C/BE1#": "28",
  "EQ4/FWC#": "29",
  "AD15": "32",
  "EQ5/FRC#": "33",
  "AD14": "34",
  "AD13": "35",
  "AD12": "36",
  "DQ28": "37",
  "AD11": "38",
  "AD10": "39",
  "AD9": "40",
  "EQ6/AMREN": "41",
  "AD8": "42",
  "C/BE0#": "43",
  "AD7": "44",
  "DQ27": "45",
  "AD6": "46",
  "AD5": "47",
  "AD4": "48",
  "EQ7/AMWEN": "49",
  "AD3": "52",
  "DQ26": "53",
  "AD2": "54",
  "AD1": "55",
  "AD0": "56",
  "EA0": "57",
  "INTA#": "58",
  "MODE_16/32": "59",
  "BE3#": "60",
  "EA1": "61",
  "BE2#": "62",
  "BE1#": "63",
  "ADR5": "64",
  "DQ25": "65",
  "ADR4": "66",
  "ADR3": "67",
  "ADR2": "68",
  "EA2": "69",
  "RD#": "72",
  "EA3": "73",
  "WR#": "74",
  "SELECT#": "75",
  "DQ15": "76",
  "DQ24": "77",
  "DQ14": "78",
  "DQ13": "79",
  "DQ12": "80",
  "EA4": "81",
  "DQ11": "82",
  "DQ10": "83",
  "DQ9": "84",
  "DQ23": "85",
  "DQ8": "86",
  "BE0#": "87",
  "DQ7": "88",
  "EA5": "89",
  "DQ6": "92",
  "DQ22": "93",
  "DQ5": "94",
  "DQ4": "95",
  "DQ3": "96",
  "EA6": "97",
  "DQ2": "98",
  "DQ1": "99",
  "DQ0": "100",
  "EA7": "101",
  "WRFIFO#": "102",
  "WRFULL": "103",
  "RDFIFO#": "104",
  "DQ21": "105",
  "RDEMPTY": "106",
  "PTADR#": "107",
  "PTWR": "108",
  "EA8": "109",
  "PTBURST#": "112",
  "EA9": "113",
  "PTATN#": "114",
  "PTRDY#": "115",
  "PTBE0#": "116",
  "DQ20": "117",
  "PTBE1#": "118",
  "PTBE2#": "119",
  "PTBE3#": "120",
  "EA10": "121",
  "PTNUM1": "122",
  "PTNUM0": "123",
  "IRQ#": "124",
  "DQ19": "125",
  "SYSRST#": "126",
  "EWR#/SDA": "127",
  "ERD#/SCL": "128",
  "EA11": "129",
  "ADR6": "132",
  "DQ18": "133",
  "SNV": "135",
  "EA12": "137",
  "FLT#": "138",
  "RST#": "139",
  "BPCLK": "140",
  "EA13": "141",
  "CLK": "142",
  "GNT#": "143",
  "REQ#": "144",
  "DQ17": "145",
  "AD31": "146",
  "AD30": "147",
  "AD29": "148",
  "EA14/FWE": "149",
  "AD28": "152",
  "EA15/FRF": "153",
  "AD27": "154",
  "AD26": "155",
  "AD25": "156",
  "DQ16": "157",
  "AD24": "158",
  "C/BE3#": "159",
  "IDSEL": "160",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_10: "power_in", VSS_30: "power_in", VCC_31: "power_in", VSS_50: "power_in", VCC_51: "power_in", VSS_70: "power_in", VCC_71: "power_in", VSS_90: "power_in", VCC_91: "power_in", VSS_110: "power_in", VCC_111: "power_in", VSS_130: "power_in", VCC_131: "power_in", VSS_150: "power_in", VCC_151: "power_in", VCC_11: "power_in", EQ0: "bidirectional", AD23: "bidirectional", AD22: "bidirectional", AD21: "bidirectional", DQ31: "bidirectional", AD20: "bidirectional", AD19: "bidirectional", AD18: "bidirectional", EQ1: "bidirectional", AD17: "bidirectional", DQ30: "bidirectional", AD16: "bidirectional", "C/BE2#": "bidirectional", "FRAME#": "bidirectional", EQ2: "bidirectional", "IRDY#": "bidirectional", "TRDY#": "bidirectional", "DEVSEL#": "bidirectional", EQ3: "bidirectional", "STOP#": "bidirectional", "LOCK#": "input", "PERR#": "bidirectional", DQ29: "bidirectional", "SERR#": "output", PAR: "bidirectional", "C/BE1#": "bidirectional", "EQ4/FWC#": "bidirectional", AD15: "bidirectional", "EQ5/FRC#": "bidirectional", AD14: "bidirectional", AD13: "bidirectional", AD12: "bidirectional", DQ28: "bidirectional", AD11: "bidirectional", AD10: "bidirectional", AD9: "bidirectional", "EQ6/AMREN": "bidirectional", AD8: "bidirectional", "C/BE0#": "bidirectional", AD7: "bidirectional", DQ27: "bidirectional", AD6: "bidirectional", AD5: "bidirectional", AD4: "bidirectional", "EQ7/AMWEN": "bidirectional", AD3: "bidirectional", DQ26: "bidirectional", AD2: "bidirectional", AD1: "bidirectional", AD0: "bidirectional", EA0: "bidirectional", "INTA#": "output", "MODE_16/32": "input", "BE3#": "input", EA1: "bidirectional", "BE2#": "input", "BE1#": "input", ADR5: "input", DQ25: "bidirectional", ADR4: "input", ADR3: "input", ADR2: "input", EA2: "bidirectional", "RD#": "input", EA3: "bidirectional", "WR#": "input", "SELECT#": "input", DQ15: "bidirectional", DQ24: "bidirectional", DQ14: "bidirectional", DQ13: "bidirectional", DQ12: "bidirectional", EA4: "bidirectional", DQ11: "bidirectional", DQ10: "bidirectional", DQ9: "bidirectional", DQ23: "bidirectional", DQ8: "bidirectional", "BE0#": "input", DQ7: "bidirectional", EA5: "bidirectional", DQ6: "bidirectional", DQ22: "bidirectional", DQ5: "bidirectional", DQ4: "bidirectional", DQ3: "bidirectional", EA6: "bidirectional", DQ2: "bidirectional", DQ1: "bidirectional", DQ0: "bidirectional", EA7: "bidirectional", "WRFIFO#": "input", WRFULL: "output", "RDFIFO#": "input", DQ21: "bidirectional", RDEMPTY: "output", "PTADR#": "input", PTWR: "output", EA8: "bidirectional", "PTBURST#": "output", EA9: "output", "PTATN#": "output", "PTRDY#": "input", "PTBE0#": "output", DQ20: "bidirectional", "PTBE1#": "output", "PTBE2#": "output", "PTBE3#": "output", EA10: "output", PTNUM1: "output", PTNUM0: "output", "IRQ#": "output", DQ19: "bidirectional", "SYSRST#": "output", "EWR#/SDA": "bidirectional", "ERD#/SCL": "output", EA11: "output", ADR6: "input", DQ18: "bidirectional", SNV: "input", EA12: "output", "FLT#": "input", "RST#": "input", BPCLK: "output", EA13: "output", CLK: "input", "GNT#": "input", "REQ#": "output", DQ17: "bidirectional", AD31: "bidirectional", AD30: "bidirectional", AD29: "bidirectional", "EA14/FWE": "bidirectional", AD28: "bidirectional", "EA15/FRF": "bidirectional", AD27: "bidirectional", AD26: "bidirectional", AD25: "bidirectional", DQ16: "bidirectional", AD24: "bidirectional", "C/BE3#": "bidirectional", IDSEL: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:S5933_PQ160";
  override referencePrefix = "U";
}

/**
 * Integrated, buffered H-bridge with TTL compatible inputs, 1A, 12V, SOIC-8
 *
 * KiCad symbol: `Interface:SI9986`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.vishay.com/docs/70007/si9986.pdf
 * Keywords: integrated, buffered H-bridge.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SI9986 extends Component.withPins({
  "SA": "1",
  "GND": "2",
  "PWR": "3",
  "SB": "4",
  "OUTB": "5",
  "INB": "6",
  "INA": "7",
  "OUTA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SA: "power_in", GND: "power_in", PWR: "power_in", SB: "power_in", OUTB: "input", INB: "input", INA: "input", OUTA: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:SI9986";
  override referencePrefix = "U";
}

/**
 * Trusted Platform Module 1.2 with Low Pin Count interface, TSSOP-28
 *
 * KiCad symbol: `Interface:SLB9660xT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.infineon.com/dgdl/Infineon-data-sheet-SLB9660_1.2_Rev1.2-DS-v01_02-EN.pdf?fileId=5546d462689a790c016929d1cb874fe5
 * Keywords: TPM LPC.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class SLB9660xT extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND_4": "4",
  "VDD_5": "5",
  "PP": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VDD_10": "10",
  "GND_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "~{LRESET}": "16",
  "LAD3": "17",
  "GND_18": "18",
  "VDD_19": "19",
  "LAD2": "20",
  "LCLK": "21",
  "~{LFRAME}": "22",
  "LAD1": "23",
  "VDD_24": "24",
  "GND_25": "25",
  "LAD0": "26",
  "SERIRQ": "27",
  "NC_28": "28",
  "GPIO": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND_4: "power_in", VDD_5: "power_in", PP: "input", NC_8: "no_connect", NC_9: "no_connect", VDD_10: "power_in", GND_11: "passive", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", "~{LRESET}": "input", LAD3: "tri_state", GND_18: "passive", VDD_19: "power_in", LAD2: "tri_state", LCLK: "input", "~{LFRAME}": "input", LAD1: "tri_state", VDD_24: "power_in", GND_25: "passive", LAD0: "tri_state", SERIRQ: "tri_state", NC_28: "no_connect", GPIO: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:SLB9660xT";
  override referencePrefix = "U";
}

/**
 * Trusted Platform Module 2.0 with Low Pin Count interface, TSSOP-28
 *
 * KiCad symbol: `Interface:SLB9665xT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.infineon.com/dgdl/Infineon-data-sheet-SLB9665_2.0_Rev1.2-DS-v01_02-EN.pdf?fileId=5546d462689a790c016929d1d3054feb
 * Keywords: TPM LPC.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class SLB9665xT extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND_4": "4",
  "VDD_5": "5",
  "PP": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VDD_10": "10",
  "GND_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "~{LRESET}": "16",
  "LAD3": "17",
  "GND_18": "18",
  "VDD_19": "19",
  "LAD2": "20",
  "LCLK": "21",
  "~{LFRAME}": "22",
  "LAD1": "23",
  "VDD_24": "24",
  "GND_25": "25",
  "LAD0": "26",
  "SERIRQ": "27",
  "NC_28": "28",
  "GPIO": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND_4: "power_in", VDD_5: "power_in", PP: "input", NC_8: "no_connect", NC_9: "no_connect", VDD_10: "power_in", GND_11: "passive", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", "~{LRESET}": "input", LAD3: "tri_state", GND_18: "passive", VDD_19: "power_in", LAD2: "tri_state", LCLK: "input", "~{LFRAME}": "input", LAD1: "tri_state", VDD_24: "power_in", GND_25: "passive", LAD0: "tri_state", SERIRQ: "tri_state", NC_28: "no_connect", GPIO: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:SLB9665xT";
  override referencePrefix = "U";
}

/**
 * Quad LVDS Differential Line Driver, 400Mbps, SOIC-16
 *
 * KiCad symbol: `Interface:SN65LVDS047D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65lvds047.pdf
 * Keywords: Quad LVDS Driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class SN65LVDS047D extends Component.withPins({
  "EN": "1",
  "DIN1": "2",
  "DIN2": "3",
  "VCC": "4",
  "GND": "5",
  "DIN3": "6",
  "DIN4": "7",
  "~{EN}": "8",
  "DOUT4-": "9",
  "DOUT4+": "10",
  "DOUT3+": "11",
  "DOUT3-": "12",
  "DOUT2-": "13",
  "DOUT2+": "14",
  "DOUT1+": "15",
  "DOUT1-": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", DIN1: "input", DIN2: "input", VCC: "power_in", GND: "power_in", DIN3: "input", DIN4: "input", "~{EN}": "input", "DOUT4-": "output", "DOUT4+": "output", "DOUT3+": "output", "DOUT3-": "output", "DOUT2-": "output", "DOUT2+": "output", "DOUT1+": "output", "DOUT1-": "output", ...opts.pinTypes } });
  }
  override schema = "Interface:SN65LVDS047D";
  override referencePrefix = "U";
}

/**
 * Quad LVDS Differential Line Driver, 400Mbps, TSSOP-16
 *
 * KiCad symbol: `Interface:SN65LVDS047PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65lvds047.pdf
 * Keywords: Quad LVDS Driver.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class SN65LVDS047PW extends Component.withPins({
  "EN": "1",
  "DIN1": "2",
  "DIN2": "3",
  "VCC": "4",
  "GND": "5",
  "DIN3": "6",
  "DIN4": "7",
  "~{EN}": "8",
  "DOUT4-": "9",
  "DOUT4+": "10",
  "DOUT3+": "11",
  "DOUT3-": "12",
  "DOUT2-": "13",
  "DOUT2+": "14",
  "DOUT1+": "15",
  "DOUT1-": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", DIN1: "input", DIN2: "input", VCC: "power_in", GND: "power_in", DIN3: "input", DIN4: "input", "~{EN}": "input", "DOUT4-": "output", "DOUT4+": "output", "DOUT3+": "output", "DOUT3-": "output", "DOUT2-": "output", "DOUT2+": "output", "DOUT1+": "output", "DOUT1-": "output", ...opts.pinTypes } });
  }
  override schema = "Interface:SN65LVDS047PW";
  override referencePrefix = "U";
}

/**
 * High-Speed Differential Line Driver, 630Mbps, SOIC-8
 *
 * KiCad symbol: `Interface:SN65LVDS1D`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65lvds1.pdf
 * Keywords: LVDS Driver TI.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65LVDS1D extends Component.withPins({
  "V_{CC}": "1",
  "D": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "Y": "7",
  "Z": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", D: "input", NC_3: "passive", GND: "power_in", NC_5: "passive", NC_6: "passive", Y: "output", Z: "output", ...opts.pinTypes } });
  }
  override schema = "Interface:SN65LVDS1D";
  override referencePrefix = "U";
}

/**
 * High-Speed Differential Line Driver, 630Mbps, SOT-23-5
 *
 * KiCad symbol: `Interface:SN65LVDS1DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/sn65lvds1.pdf
 * Keywords: LVDS Driver TI.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class SN65LVDS1DBV extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "Z": "3",
  "Y": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", Z: "output", Y: "output", D: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:SN65LVDS1DBV";
  override referencePrefix = "U";
}

/**
 * High-Speed Differential Line Receiver, 630Mbps, SOIC-8
 *
 * KiCad symbol: `Interface:SN65LVDS2D`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn65lvds2.pdf
 * Keywords: LVDS Receiver TI.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65LVDS2D extends Component.withPins({
  "B": "1",
  "A": "2",
  "NC_3": "3",
  "NC_4": "4",
  "GND": "5",
  "NC_6": "6",
  "R": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", A: "input", NC_3: "passive", NC_4: "passive", GND: "power_in", NC_6: "passive", R: "output", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:SN65LVDS2D";
  override referencePrefix = "U";
}

/**
 * High-Speed Differential Line Receiver, 630Mbps, SOT-23-5
 *
 * KiCad symbol: `Interface:SN65LVDS2DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/sn65lvds2.pdf
 * Keywords: LVDS Receiver TI.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class SN65LVDS2DBV extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "R": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", A: "input", B: "input", R: "output", ...opts.pinTypes } });
  }
  override schema = "Interface:SN65LVDS2DBV";
  override referencePrefix = "U";
}

/**
 * High-Speed Differential Line Receiver, 110 Ω Terminated, 630Mbps, SOIC-8
 *
 * KiCad symbol: `Interface:SN65LVDT2D`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn65lvdt2.pdf
 * Keywords: LVDS Receiver TI.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65LVDT2D extends Component.withPins({
  "B": "1",
  "A": "2",
  "NC_3": "3",
  "NC_4": "4",
  "GND": "5",
  "NC_6": "6",
  "R": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", A: "input", NC_3: "passive", NC_4: "passive", GND: "power_in", NC_6: "passive", R: "output", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:SN65LVDT2D";
  override referencePrefix = "U";
}

/**
 * High-Speed Differential Line Receiver, 110 Ω Terminated, 630Mbps, SOT-23-5
 *
 * KiCad symbol: `Interface:SN65LVDT2DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/sn65lvdt2.pdf
 * Keywords: LVDS Receiver TI.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class SN65LVDT2DBV extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "R": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", A: "input", B: "input", R: "output", ...opts.pinTypes } });
  }
  override schema = "Interface:SN65LVDT2DBV";
  override referencePrefix = "U";
}

/**
 * UART, Single wire input, Output 40mA, Open Collector or Push Pull, PDIP-20
 *
 * KiCad symbol: `Interface:SN74LV8153N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lv8153.pdf
 * Keywords: serial to parallel.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class SN74LV8153N extends Component.withPins({
  "V_{CC1}": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "D": "5",
  "OUTSEL": "6",
  "~{RESET}": "7",
  "~{OE}": "8",
  "SOUT": "9",
  "GND_10": "10",
  "GND_11": "11",
  "Y7": "12",
  "Y6": "13",
  "Y5": "14",
  "Y4": "15",
  "Y3": "16",
  "Y2": "17",
  "Y1": "18",
  "Y0": "19",
  "V_{CC2}": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC1}": "power_in", A0: "input", A1: "input", A2: "input", D: "input", OUTSEL: "input", "~{RESET}": "input", "~{OE}": "input", SOUT: "output", GND_10: "power_in", GND_11: "passive", Y7: "open_collector", Y6: "open_collector", Y5: "open_collector", Y4: "open_collector", Y3: "open_collector", Y2: "open_collector", Y1: "open_collector", Y0: "open_collector", "V_{CC2}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:SN74LV8153N";
  override referencePrefix = "U";
}

/**
 * UART, Single wire input, Output 40mA, Open Collector or Push Pull, TSSOP-20
 *
 * KiCad symbol: `Interface:SN74LV8153PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lv8153.pdf
 * Keywords: serial to parallel.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class SN74LV8153PW extends Component.withPins({
  "V_{CC1}": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "D": "5",
  "OUTSEL": "6",
  "~{RESET}": "7",
  "~{OE}": "8",
  "SOUT": "9",
  "GND_10": "10",
  "GND_11": "11",
  "Y7": "12",
  "Y6": "13",
  "Y5": "14",
  "Y4": "15",
  "Y3": "16",
  "Y2": "17",
  "Y1": "18",
  "Y0": "19",
  "V_{CC2}": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC1}": "power_in", A0: "input", A1: "input", A2: "input", D: "input", OUTSEL: "input", "~{RESET}": "input", "~{OE}": "input", SOUT: "output", GND_10: "power_in", GND_11: "passive", Y7: "open_collector", Y6: "open_collector", Y5: "open_collector", Y4: "open_collector", Y3: "open_collector", Y2: "open_collector", Y1: "open_collector", Y0: "open_collector", "V_{CC2}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:SN74LV8153PW";
  override referencePrefix = "U";
}

/**
 * Octal general-purpose interface bus transceiver, SOIC-20
 *
 * KiCad symbol: `Interface:SN75160BDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75160b.pdf
 * Keywords: gpib bidirectional bus transceiver.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class SN75160BDW extends Component.withPins({
  "TE": "1",
  "B1": "2",
  "B2": "3",
  "B3": "4",
  "B4": "5",
  "B5": "6",
  "B6": "7",
  "B7": "8",
  "B8": "9",
  "GND": "10",
  "~{PE}": "11",
  "D8": "12",
  "D7": "13",
  "D6": "14",
  "D5": "15",
  "D4": "16",
  "D3": "17",
  "D2": "18",
  "D1": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TE: "input", B1: "bidirectional", B2: "bidirectional", B3: "bidirectional", B4: "bidirectional", B5: "bidirectional", B6: "bidirectional", B7: "bidirectional", B8: "bidirectional", GND: "power_in", "~{PE}": "input", D8: "bidirectional", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:SN75160BDW";
  override referencePrefix = "U";
}

/**
 * Octal general-purpose interface bus transceiver, DIP-20
 *
 * KiCad symbol: `Interface:SN75160BN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn75160b.pdf
 * Keywords: gpib bidirectional bus transceiver.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class SN75160BN extends Component.withPins({
  "TE": "1",
  "B1": "2",
  "B2": "3",
  "B3": "4",
  "B4": "5",
  "B5": "6",
  "B6": "7",
  "B7": "8",
  "B8": "9",
  "GND": "10",
  "~{PE}": "11",
  "D8": "12",
  "D7": "13",
  "D6": "14",
  "D5": "15",
  "D4": "16",
  "D3": "17",
  "D2": "18",
  "D1": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { TE: "input", B1: "bidirectional", B2: "bidirectional", B3: "bidirectional", B4: "bidirectional", B5: "bidirectional", B6: "bidirectional", B7: "bidirectional", B8: "bidirectional", GND: "power_in", "~{PE}": "input", D8: "bidirectional", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:SN75160BN";
  override referencePrefix = "U";
}

/**
 * Quad differential PECL driver
 *
 * KiCad symbol: `Interface:TB5D1MD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27*.
 * @see http://www.ti.com/lit/ds/symlink/tb5d2h.pdf
 * Keywords: differential PECL driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TB5D1MD extends Component.withPins({
  "AI": "1",
  "AO": "2",
  "~{AO}": "3",
  "E1": "4",
  "~{BO}": "5",
  "BO": "6",
  "BI": "7",
  "GND": "8",
  "CI": "9",
  "CO": "10",
  "~{CO}": "11",
  "E2": "12",
  "~{DO}": "13",
  "DO": "14",
  "DI": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AI: "input", AO: "output", "~{AO}": "output", E1: "input", "~{BO}": "output", BO: "output", BI: "input", GND: "power_in", CI: "input", CO: "output", "~{CO}": "output", E2: "input", "~{DO}": "output", DO: "output", DI: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TB5D1MD";
  override referencePrefix = "U";
}

/**
 * Quad differential PECL driver
 *
 * KiCad symbol: `Interface:TB5D1MDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27*.
 * @see http://www.ti.com/lit/ds/symlink/tb5d2h.pdf
 * Keywords: differential PECL driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class TB5D1MDW extends Component.withPins({
  "AI": "1",
  "AO": "2",
  "~{AO}": "3",
  "E1": "4",
  "~{BO}": "5",
  "BO": "6",
  "BI": "7",
  "GND": "8",
  "CI": "9",
  "CO": "10",
  "~{CO}": "11",
  "E2": "12",
  "~{DO}": "13",
  "DO": "14",
  "DI": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AI: "input", AO: "output", "~{AO}": "output", E1: "input", "~{BO}": "output", BO: "output", BI: "input", GND: "power_in", CI: "input", CO: "output", "~{CO}": "output", E2: "input", "~{DO}": "output", DO: "output", DI: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TB5D1MDW";
  override referencePrefix = "U";
}

/**
 * Quad differential PECL driver
 *
 * KiCad symbol: `Interface:TB5D2H`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27*.
 * @see http://www.ti.com/lit/ds/symlink/tb5d2h.pdf
 * Keywords: differential PECL driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TB5D2H extends Component.withPins({
  "AI": "1",
  "AO": "2",
  "~{AO}": "3",
  "E1": "4",
  "~{BO}": "5",
  "BO": "6",
  "BI": "7",
  "GND": "8",
  "CI": "9",
  "CO": "10",
  "~{CO}": "11",
  "E2": "12",
  "~{DO}": "13",
  "DO": "14",
  "DI": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AI: "input", AO: "output", "~{AO}": "output", E1: "input", "~{BO}": "output", BO: "output", BI: "input", GND: "power_in", CI: "input", CO: "output", "~{CO}": "output", E2: "input", "~{DO}": "output", DO: "output", DI: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TB5D2H";
  override referencePrefix = "U";
}

/**
 * Quad differential PECL driver
 *
 * KiCad symbol: `Interface:TB5D2HDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27*.
 * @see http://www.ti.com/lit/ds/symlink/tb5d2h.pdf
 * Keywords: differential PECL driver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class TB5D2HDW extends Component.withPins({
  "AI": "1",
  "AO": "2",
  "~{AO}": "3",
  "E1": "4",
  "~{BO}": "5",
  "BO": "6",
  "BI": "7",
  "GND": "8",
  "CI": "9",
  "CO": "10",
  "~{CO}": "11",
  "E2": "12",
  "~{DO}": "13",
  "DO": "14",
  "DI": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AI: "input", AO: "output", "~{AO}": "output", E1: "input", "~{BO}": "output", BO: "output", BI: "input", GND: "power_in", CI: "input", CO: "output", "~{CO}": "output", E2: "input", "~{DO}": "output", DO: "output", DI: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TB5D2HDW";
  override referencePrefix = "U";
}

/**
 * Quad differential PECL reciver
 *
 * KiCad symbol: `Interface:TB5R1D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27*.
 * @see http://www.ti.com/lit/ds/symlink/tb5r1.pdf
 * Keywords: differential PECL reciver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TB5R1D extends Component.withPins({
  "~{AI}": "1",
  "AI": "2",
  "AO": "3",
  "E1": "4",
  "BO": "5",
  "BI": "6",
  "~{BI}": "7",
  "GND": "8",
  "~{CI}": "9",
  "CI": "10",
  "CO": "11",
  "~{E2}": "12",
  "DO": "13",
  "DI": "14",
  "~{DI}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{AI}": "input", AI: "input", AO: "output", E1: "input", BO: "output", BI: "input", "~{BI}": "input", GND: "power_in", "~{CI}": "input", CI: "input", CO: "output", "~{E2}": "input", DO: "output", DI: "input", "~{DI}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TB5R1D";
  override referencePrefix = "U";
}

/**
 * Quad differential PECL reciver
 *
 * KiCad symbol: `Interface:TB5R1DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27*.
 * @see http://www.ti.com/lit/ds/symlink/tb5r1.pdf
 * Keywords: differential PECL reciver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class TB5R1DW extends Component.withPins({
  "~{AI}": "1",
  "AI": "2",
  "AO": "3",
  "E1": "4",
  "BO": "5",
  "BI": "6",
  "~{BI}": "7",
  "GND": "8",
  "~{CI}": "9",
  "CI": "10",
  "CO": "11",
  "~{E2}": "12",
  "DO": "13",
  "DI": "14",
  "~{DI}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{AI}": "input", AI: "input", AO: "output", E1: "input", BO: "output", BI: "input", "~{BI}": "input", GND: "power_in", "~{CI}": "input", CI: "input", CO: "output", "~{E2}": "input", DO: "output", DI: "input", "~{DI}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TB5R1DW";
  override referencePrefix = "U";
}

/**
 * Quad differential PECL reciver
 *
 * KiCad symbol: `Interface:TB5R2D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27*.
 * @see http://www.ti.com/lit/ds/symlink/tb5r1.pdf
 * Keywords: differential PECL reciver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class TB5R2D extends Component.withPins({
  "~{AI}": "1",
  "AI": "2",
  "AO": "3",
  "E1": "4",
  "BO": "5",
  "BI": "6",
  "~{BI}": "7",
  "GND": "8",
  "~{CI}": "9",
  "CI": "10",
  "CO": "11",
  "~{E2}": "12",
  "DO": "13",
  "DI": "14",
  "~{DI}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{AI}": "input", AI: "input", AO: "output", E1: "input", BO: "output", BI: "input", "~{BI}": "input", GND: "power_in", "~{CI}": "input", CI: "input", CO: "output", "~{E2}": "input", DO: "output", DI: "input", "~{DI}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TB5R2D";
  override referencePrefix = "U";
}

/**
 * Quad differential PECL reciver
 *
 * KiCad symbol: `Interface:TB5R2DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27*.
 * @see http://www.ti.com/lit/ds/symlink/tb5r1.pdf
 * Keywords: differential PECL reciver.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class TB5R2DW extends Component.withPins({
  "~{AI}": "1",
  "AI": "2",
  "AO": "3",
  "E1": "4",
  "BO": "5",
  "BI": "6",
  "~{BI}": "7",
  "GND": "8",
  "~{CI}": "9",
  "CI": "10",
  "CO": "11",
  "~{E2}": "12",
  "DO": "13",
  "DI": "14",
  "~{DI}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{AI}": "input", AI: "input", AO: "output", E1: "input", BO: "output", BI: "input", "~{BI}": "input", GND: "power_in", "~{CI}": "input", CI: "input", CO: "output", "~{E2}": "input", DO: "output", DI: "input", "~{DI}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TB5R2DW";
  override referencePrefix = "U";
}

/**
 * 2-Bit Bidirectional 1-MHz, I2C Bus and SMBus Voltage-Level Translator With 8-kV HBM ESD
 *
 * KiCad symbol: `Interface:TCA9406DC`. Reference prefix: `U`.
 * Footprint filters: SSOP*2.95x2.8mm*P0.65mm*, VSSOP*2.3x2mm*P0.5mm*.
 * @see www.ti.com/lit/ds/symlink/tca9406.pdf
 * Keywords: Bidirectional 1-MHz I2C SMBus Voltage-Level Translator 8kV HBM ESD.
 */
export class TCA9406DC extends Component.withPins({
  "SDA_B": "1",
  "GND": "2",
  "VCCA": "3",
  "SDA_A": "4",
  "SCL_A": "5",
  "OE": "6",
  "VCCB": "7",
  "SCL_B": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDA_B: "bidirectional", GND: "power_in", VCCA: "power_in", SDA_A: "bidirectional", SCL_A: "bidirectional", OE: "input", VCCB: "power_in", SCL_B: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:TCA9406DC";
  override referencePrefix = "U";
}

/**
 * Level-Translating I2C Bus Buffer/Repeater 0.54mA Current Source, VSSOP-8
 *
 * KiCad symbol: `Interface:TCA9800`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9800.pdf
 * Keywords: I2C buffer repeater.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TCA9800 extends Component.withPins({
  "VCCA": "1",
  "SCLA": "2",
  "SDAA": "3",
  "GND": "4",
  "EN": "5",
  "SDAB": "6",
  "SCLB": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", SCLA: "bidirectional", SDAA: "bidirectional", GND: "power_in", EN: "input", SDAB: "bidirectional", SCLB: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TCA9800";
  override referencePrefix = "U";
}

/**
 * Level-Translating I2C Bus Buffer/Repeater 1.1mA Current Source, VSSOP-8
 *
 * KiCad symbol: `Interface:TCA9801`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9801.pdf
 * Keywords: I2C buffer repeater.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TCA9801 extends Component.withPins({
  "VCCA": "1",
  "SCLA": "2",
  "SDAA": "3",
  "GND": "4",
  "EN": "5",
  "SDAB": "6",
  "SCLB": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", SCLA: "bidirectional", SDAA: "bidirectional", GND: "power_in", EN: "input", SDAB: "bidirectional", SCLB: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TCA9801";
  override referencePrefix = "U";
}

/**
 * Level-Translating I2C Bus Buffer/Repeater 2.2mA Current Source, VSSOP-8
 *
 * KiCad symbol: `Interface:TCA9802`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9802.pdf
 * Keywords: I2C buffer repeater.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TCA9802 extends Component.withPins({
  "VCCA": "1",
  "SCLA": "2",
  "SDAA": "3",
  "GND": "4",
  "EN": "5",
  "SDAB": "6",
  "SCLB": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", SCLA: "bidirectional", SDAA: "bidirectional", GND: "power_in", EN: "input", SDAB: "bidirectional", SCLB: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TCA9802";
  override referencePrefix = "U";
}

/**
 * Level-Translating I2C Bus Buffer/Repeater 3.3mA Current Source, VSSOP-8
 *
 * KiCad symbol: `Interface:TCA9803`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9803.pdf
 * Keywords: I2C buffer repeater.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TCA9803 extends Component.withPins({
  "VCCA": "1",
  "SCLA": "2",
  "SDAA": "3",
  "GND": "4",
  "EN": "5",
  "SDAB": "6",
  "SCLB": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", SCLA: "bidirectional", SDAA: "bidirectional", GND: "power_in", EN: "input", SDAB: "bidirectional", SCLB: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface:TCA9803";
  override referencePrefix = "U";
}

/**
 * IDIC read/write base stations in contactless identification and immobilizer systems, SO-16
 *
 * KiCad symbol: `Interface:U2270B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.farnell.com/datasheets/94393.pdf
 * Keywords: IDIC read/write base stations in contactless identification and immobilizer systems.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class U2270B extends Component.withPins({
  "GND": "1",
  "OUTPUT": "2",
  "~{OE}": "3",
  "INPUT": "4",
  "MS": "5",
  "CFE": "6",
  "DGND": "7",
  "COIL2": "8",
  "COIL1": "9",
  "VEXT": "10",
  "DVS": "11",
  "VBATT": "12",
  "STANDBY": "13",
  "VS": "14",
  "RF": "15",
  "HIPASS": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", OUTPUT: "open_collector", "~{OE}": "input", INPUT: "input", MS: "input", CFE: "input", DGND: "power_in", COIL2: "output", COIL1: "output", VEXT: "power_in", DVS: "power_in", VBATT: "power_in", STANDBY: "input", VS: "power_in", RF: "input", HIPASS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:U2270B";
  override referencePrefix = "U";
}

/**
 * Floppy disk controller, DIP-40
 *
 * KiCad symbol: `Interface:WD2791`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets2/12/1229802_1.pdf
 * Keywords: Floppy disk controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class WD2791 extends Component.withPins({
  "ENP": "1",
  "~{WE}": "2",
  "~{CS}": "3",
  "~{RE}": "4",
  "A0": "5",
  "A1": "6",
  "~{DAL0}": "7",
  "~{DAL1}": "8",
  "~{DAL2}": "9",
  "~{DAL3}": "10",
  "~{DAL4}": "11",
  "~{DAL5}": "12",
  "~{DAL6}": "13",
  "~{DAL7}": "14",
  "STEP": "15",
  "DIRC": "16",
  "~{5}/8": "17",
  "RPW": "18",
  "~{MR}": "19",
  "VSS": "20",
  "VCC": "21",
  "~{TEST}": "22",
  "PUMP": "23",
  "CLK": "24",
  "~{ENMF}": "25",
  "VCO": "26",
  "~{RAW_READ}": "27",
  "HLD": "28",
  "TG43": "29",
  "WG": "30",
  "WD": "31",
  "READY": "32",
  "WPW": "33",
  "~{TR00}": "34",
  "~{IP}": "35",
  "~{WPRT}": "36",
  "~{DDEN}": "37",
  "DRQ": "38",
  "INTRQ": "39",
  "HLT": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENP: "input", "~{WE}": "input", "~{CS}": "input", "~{RE}": "input", A0: "input", A1: "input", "~{DAL0}": "tri_state", "~{DAL1}": "tri_state", "~{DAL2}": "tri_state", "~{DAL3}": "tri_state", "~{DAL4}": "tri_state", "~{DAL5}": "tri_state", "~{DAL6}": "tri_state", "~{DAL7}": "tri_state", STEP: "output", DIRC: "output", "~{5}/8": "input", RPW: "input", "~{MR}": "input", VSS: "power_in", VCC: "power_in", "~{TEST}": "input", PUMP: "output", CLK: "input", "~{ENMF}": "input", VCO: "input", "~{RAW_READ}": "input", HLD: "output", TG43: "output", WG: "output", WD: "output", READY: "input", WPW: "input", "~{TR00}": "input", "~{IP}": "input", "~{WPRT}": "input", "~{DDEN}": "input", DRQ: "output", INTRQ: "output", HLT: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:WD2791";
  override referencePrefix = "U";
}

/**
 * Floppy disk controller, DIP-40
 *
 * KiCad symbol: `Interface:WD2793`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets2/12/1229802_1.pdf
 * Keywords: Floppy disk controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class WD2793 extends Component.withPins({
  "ENP": "1",
  "~{WE}": "2",
  "~{CS}": "3",
  "~{RE}": "4",
  "A0": "5",
  "A1": "6",
  "DAL0": "7",
  "DAL1": "8",
  "DAL2": "9",
  "DAL3": "10",
  "DAL4": "11",
  "DAL5": "12",
  "DAL6": "13",
  "DAL7": "14",
  "STEP": "15",
  "DIRC": "16",
  "~{5}/8": "17",
  "RPW": "18",
  "~{MR}": "19",
  "VSS": "20",
  "VCC": "21",
  "~{TEST}": "22",
  "PUMP": "23",
  "CLK": "24",
  "~{ENMF}": "25",
  "VCO": "26",
  "~{RAW_READ}": "27",
  "HLD": "28",
  "TG43": "29",
  "WG": "30",
  "WD": "31",
  "READY": "32",
  "WPW": "33",
  "~{TR00}": "34",
  "~{IP}": "35",
  "~{WPRT}": "36",
  "~{DDEN}": "37",
  "DRQ": "38",
  "INTRQ": "39",
  "HLT": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENP: "input", "~{WE}": "input", "~{CS}": "input", "~{RE}": "input", A0: "input", A1: "input", DAL0: "tri_state", DAL1: "tri_state", DAL2: "tri_state", DAL3: "tri_state", DAL4: "tri_state", DAL5: "tri_state", DAL6: "tri_state", DAL7: "tri_state", STEP: "output", DIRC: "output", "~{5}/8": "input", RPW: "input", "~{MR}": "input", VSS: "power_in", VCC: "power_in", "~{TEST}": "input", PUMP: "output", CLK: "input", "~{ENMF}": "input", VCO: "input", "~{RAW_READ}": "input", HLD: "output", TG43: "output", WG: "output", WD: "output", READY: "input", WPW: "input", "~{TR00}": "input", "~{IP}": "input", "~{WPRT}": "input", "~{DDEN}": "input", DRQ: "output", INTRQ: "output", HLT: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:WD2793";
  override referencePrefix = "U";
}

/**
 * Floppy disk controller, DIP-40
 *
 * KiCad symbol: `Interface:WD2795`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets2/12/1229802_1.pdf
 * Keywords: Floppy disk controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class WD2795 extends Component.withPins({
  "ENP": "1",
  "~{WE}": "2",
  "~{CS}": "3",
  "~{RE}": "4",
  "A0": "5",
  "A1": "6",
  "~{DAL0}": "7",
  "~{DAL1}": "8",
  "~{DAL2}": "9",
  "~{DAL3}": "10",
  "~{DAL4}": "11",
  "~{DAL5}": "12",
  "~{DAL6}": "13",
  "~{DAL7}": "14",
  "STEP": "15",
  "DIRC": "16",
  "~{5}/8": "17",
  "RPW": "18",
  "~{MR}": "19",
  "VSS": "20",
  "VCC": "21",
  "~{TEST}": "22",
  "PUMP": "23",
  "CLK": "24",
  "SSO": "25",
  "VCO": "26",
  "~{RAW_READ}": "27",
  "HLD": "28",
  "TG43": "29",
  "WG": "30",
  "WD": "31",
  "READY": "32",
  "WPW": "33",
  "~{TR00}": "34",
  "~{IP}": "35",
  "~{WPRT}": "36",
  "~{DDEN}": "37",
  "DRQ": "38",
  "INTRQ": "39",
  "HLT": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENP: "input", "~{WE}": "input", "~{CS}": "input", "~{RE}": "input", A0: "input", A1: "input", "~{DAL0}": "tri_state", "~{DAL1}": "tri_state", "~{DAL2}": "tri_state", "~{DAL3}": "tri_state", "~{DAL4}": "tri_state", "~{DAL5}": "tri_state", "~{DAL6}": "tri_state", "~{DAL7}": "tri_state", STEP: "output", DIRC: "output", "~{5}/8": "input", RPW: "input", "~{MR}": "input", VSS: "power_in", VCC: "power_in", "~{TEST}": "input", PUMP: "output", CLK: "input", SSO: "output", VCO: "input", "~{RAW_READ}": "input", HLD: "output", TG43: "output", WG: "output", WD: "output", READY: "input", WPW: "input", "~{TR00}": "input", "~{IP}": "input", "~{WPRT}": "input", "~{DDEN}": "input", DRQ: "output", INTRQ: "output", HLT: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:WD2795";
  override referencePrefix = "U";
}

/**
 * Floppy disk controller, DIP-40
 *
 * KiCad symbol: `Interface:WD2797`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets2/12/1229802_1.pdf
 * Keywords: Floppy disk controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class WD2797 extends Component.withPins({
  "ENP": "1",
  "~{WE}": "2",
  "~{CS}": "3",
  "~{RE}": "4",
  "A0": "5",
  "A1": "6",
  "DAL0": "7",
  "DAL1": "8",
  "DAL2": "9",
  "DAL3": "10",
  "DAL4": "11",
  "DAL5": "12",
  "DAL6": "13",
  "DAL7": "14",
  "STEP": "15",
  "DIRC": "16",
  "~{5}/8": "17",
  "RPW": "18",
  "~{MR}": "19",
  "VSS": "20",
  "VCC": "21",
  "~{TEST}": "22",
  "PUMP": "23",
  "CLK": "24",
  "SSO": "25",
  "VCO": "26",
  "~{RAW_READ}": "27",
  "HLD": "28",
  "TG43": "29",
  "WG": "30",
  "WD": "31",
  "READY": "32",
  "WPW": "33",
  "~{TR00}": "34",
  "~{IP}": "35",
  "~{WPRT}": "36",
  "~{DDEN}": "37",
  "DRQ": "38",
  "INTRQ": "39",
  "HLT": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENP: "input", "~{WE}": "input", "~{CS}": "input", "~{RE}": "input", A0: "input", A1: "input", DAL0: "tri_state", DAL1: "tri_state", DAL2: "tri_state", DAL3: "tri_state", DAL4: "tri_state", DAL5: "tri_state", DAL6: "tri_state", DAL7: "tri_state", STEP: "output", DIRC: "output", "~{5}/8": "input", RPW: "input", "~{MR}": "input", VSS: "power_in", VCC: "power_in", "~{TEST}": "input", PUMP: "output", CLK: "input", SSO: "output", VCO: "input", "~{RAW_READ}": "input", HLD: "output", TG43: "output", WG: "output", WD: "output", READY: "input", WPW: "input", "~{TR00}": "input", "~{IP}": "input", "~{WPRT}": "input", "~{DDEN}": "input", DRQ: "output", INTRQ: "output", HLT: "input", ...opts.pinTypes } });
  }
  override schema = "Interface:WD2797";
  override referencePrefix = "U";
}

/**
 * Parallel I/O, DIP-40
 *
 * KiCad symbol: `Interface:Z8420`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.zilog.com/appnotes_download.php?FromPage=DirectLink&dn=PS0180&ft=Product%20Specification%20(Data%20Sheet)%20%20&f=YUhSMGNEb3ZMM2QzZHk1NmFXeHZaeTVqYjIwdlpHOWpjeTk2T0RBdmNITXdNVGd3TG5Ca1pnPT0=
 * Keywords: Z80 PIO parallel.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class Z8420 extends Component.withPins({
  "D2": "1",
  "D7": "2",
  "D6": "3",
  "~{CE}": "4",
  "C/~{D}": "5",
  "B/~{A}": "6",
  "PA7": "7",
  "PA6": "8",
  "PA5": "9",
  "PA4": "10",
  "GND": "11",
  "PA3": "12",
  "PA2": "13",
  "PA1": "14",
  "PA0": "15",
  "~{ASTB}": "16",
  "~{BSTB}": "17",
  "ARDY": "18",
  "D0": "19",
  "D1": "20",
  "BRDY": "21",
  "IEO": "22",
  "~{INT}": "23",
  "IEI": "24",
  "CLK": "25",
  "VCC": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB3": "30",
  "PB4": "31",
  "PB5": "32",
  "PB6": "33",
  "PB7": "34",
  "~{RD}": "35",
  "~{IORQ}": "36",
  "~{M1}": "37",
  "D5": "38",
  "D4": "39",
  "D3": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D2: "bidirectional", D7: "bidirectional", D6: "bidirectional", "~{CE}": "input", "C/~{D}": "input", "B/~{A}": "input", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", GND: "power_in", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "~{ASTB}": "input", "~{BSTB}": "input", ARDY: "output", D0: "bidirectional", D1: "bidirectional", BRDY: "output", IEO: "output", "~{INT}": "open_collector", IEI: "input", CLK: "input", VCC: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", "~{RD}": "input", "~{IORQ}": "input", "~{M1}": "input", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:Z8420";
  override referencePrefix = "U";
}

/**
 * Parallel I/O, CMOS, DIP-40
 *
 * KiCad symbol: `Interface:Z84C20`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.zilog.com/appnotes_download.php?FromPage=DirectLink&dn=PS0180&ft=Product%20Specification%20(Data%20Sheet)%20%20&f=YUhSMGNEb3ZMM2QzZHk1NmFXeHZaeTVqYjIwdlpHOWpjeTk2T0RBdmNITXdNVGd3TG5Ca1pnPT0=
 * Keywords: Z80 PIO parallel.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class Z84C20 extends Component.withPins({
  "D2": "1",
  "D7": "2",
  "D6": "3",
  "~{CE}": "4",
  "C/~{D}": "5",
  "B/~{A}": "6",
  "PA7": "7",
  "PA6": "8",
  "PA5": "9",
  "PA4": "10",
  "GND": "11",
  "PA3": "12",
  "PA2": "13",
  "PA1": "14",
  "PA0": "15",
  "~{ASTB}": "16",
  "~{BSTB}": "17",
  "ARDY": "18",
  "D0": "19",
  "D1": "20",
  "BRDY": "21",
  "IEO": "22",
  "~{INT}": "23",
  "IEI": "24",
  "CLK": "25",
  "VCC": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB3": "30",
  "PB4": "31",
  "PB5": "32",
  "PB6": "33",
  "PB7": "34",
  "~{RD}": "35",
  "~{IORQ}": "36",
  "~{M1}": "37",
  "D5": "38",
  "D4": "39",
  "D3": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D2: "bidirectional", D7: "bidirectional", D6: "bidirectional", "~{CE}": "input", "C/~{D}": "input", "B/~{A}": "input", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", GND: "power_in", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "~{ASTB}": "input", "~{BSTB}": "input", ARDY: "output", D0: "bidirectional", D1: "bidirectional", BRDY: "output", IEO: "output", "~{INT}": "open_collector", IEI: "input", CLK: "input", VCC: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", "~{RD}": "input", "~{IORQ}": "input", "~{M1}": "input", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface:Z84C20";
  override referencePrefix = "U";
}
