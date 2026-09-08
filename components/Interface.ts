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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _5PB1108PGxx extends Component.withPins({
  /** Physical pin 1: CLKIN; input. */
  "CLKIN": "1",
  /** Physical pin 2: 1G; input. */
  "1G": "2",
  /** Physical pin 3: Y0; output. */
  "Y0": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 6: Y4; output. */
  "Y4": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: Y6; output. */
  "Y6": "8",
  /** Physical pin 9: Y7; output. */
  "Y7": "9",
  /** Physical pin 10: VDD; passive. */
  "VDD_10": "10",
  /** Physical pin 11: Y5; output. */
  "Y5": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: Y2; output. */
  "Y2": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: Y3; output. */
  "Y3": "15",
  /** Physical pin 16: Y1; output. */
  "Y1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _6821 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: PA0; bidirectional. */
  "PA0": "2",
  /** Physical pin 3: PA1; bidirectional. */
  "PA1": "3",
  /** Physical pin 4: PA2; bidirectional. */
  "PA2": "4",
  /** Physical pin 5: PA3; bidirectional. */
  "PA3": "5",
  /** Physical pin 6: PA4; bidirectional. */
  "PA4": "6",
  /** Physical pin 7: PA5; bidirectional. */
  "PA5": "7",
  /** Physical pin 8: PA6; bidirectional. */
  "PA6": "8",
  /** Physical pin 9: PA7; bidirectional. */
  "PA7": "9",
  /** Physical pin 10: PB0; bidirectional. */
  "PB0": "10",
  /** Physical pin 11: PB1; bidirectional. */
  "PB1": "11",
  /** Physical pin 12: PB2; bidirectional. */
  "PB2": "12",
  /** Physical pin 13: PB3; bidirectional. */
  "PB3": "13",
  /** Physical pin 14: PB4; bidirectional. */
  "PB4": "14",
  /** Physical pin 15: PB5; bidirectional. */
  "PB5": "15",
  /** Physical pin 16: PB6; bidirectional. */
  "PB6": "16",
  /** Physical pin 17: PB7; bidirectional. */
  "PB7": "17",
  /** Physical pin 18: CB1; input. */
  "CB1": "18",
  /** Physical pin 19: CB2; bidirectional. */
  "CB2": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: R/~{W}; input. */
  "R/~{W}": "21",
  /** Physical pin 22: CS0; input. */
  "CS0": "22",
  /** Physical pin 23: ~{CS2}; input. */
  "~{CS2}": "23",
  /** Physical pin 24: CS1; input. */
  "CS1": "24",
  /** Physical pin 25: ENABLE; input. */
  "ENABLE": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: ~{RESET}; input. */
  "~{RESET}": "34",
  /** Physical pin 35: RS1; input. */
  "RS1": "35",
  /** Physical pin 36: RS0; input. */
  "RS0": "36",
  /** Physical pin 37: ~{IRQB}; open_collector. */
  "~{IRQB}": "37",
  /** Physical pin 38: ~{IRQA}; open_collector. */
  "~{IRQA}": "38",
  /** Physical pin 39: CA2; bidirectional. */
  "CA2": "39",
  /** Physical pin 40: CA1; input. */
  "CA1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _6822 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: PA0; bidirectional. */
  "PA0": "2",
  /** Physical pin 3: PA1; bidirectional. */
  "PA1": "3",
  /** Physical pin 4: PA2; bidirectional. */
  "PA2": "4",
  /** Physical pin 5: PA3; bidirectional. */
  "PA3": "5",
  /** Physical pin 6: PA4; bidirectional. */
  "PA4": "6",
  /** Physical pin 7: PA5; bidirectional. */
  "PA5": "7",
  /** Physical pin 8: PA6; bidirectional. */
  "PA6": "8",
  /** Physical pin 9: PA7; bidirectional. */
  "PA7": "9",
  /** Physical pin 10: PB0; bidirectional. */
  "PB0": "10",
  /** Physical pin 11: PB1; bidirectional. */
  "PB1": "11",
  /** Physical pin 12: PB2; bidirectional. */
  "PB2": "12",
  /** Physical pin 13: PB3; bidirectional. */
  "PB3": "13",
  /** Physical pin 14: PB4; bidirectional. */
  "PB4": "14",
  /** Physical pin 15: PB5; bidirectional. */
  "PB5": "15",
  /** Physical pin 16: PB6; bidirectional. */
  "PB6": "16",
  /** Physical pin 17: PB7; bidirectional. */
  "PB7": "17",
  /** Physical pin 18: CB1; input. */
  "CB1": "18",
  /** Physical pin 19: CB2; bidirectional. */
  "CB2": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: R/~{W}; input. */
  "R/~{W}": "21",
  /** Physical pin 22: CS0; input. */
  "CS0": "22",
  /** Physical pin 23: ~{CS2}; input. */
  "~{CS2}": "23",
  /** Physical pin 24: CS1; input. */
  "CS1": "24",
  /** Physical pin 25: ENABLE; input. */
  "ENABLE": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: ~{RESET}; input. */
  "~{RESET}": "34",
  /** Physical pin 35: RS1; input. */
  "RS1": "35",
  /** Physical pin 36: RS0; input. */
  "RS0": "36",
  /** Physical pin 37: ~{IRQB}; open_collector. */
  "~{IRQB}": "37",
  /** Physical pin 38: ~{IRQA}; open_collector. */
  "~{IRQA}": "38",
  /** Physical pin 39: CA2; bidirectional. */
  "CA2": "39",
  /** Physical pin 40: CA1; input. */
  "CA1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _68230 extends Component.withPins({
  /** Physical pin 1: D5; tri_state. */
  "D5": "1",
  /** Physical pin 2: D6; tri_state. */
  "D6": "2",
  /** Physical pin 3: D7; tri_state. */
  "D7": "3",
  /** Physical pin 4: PA0; bidirectional. */
  "PA0": "4",
  /** Physical pin 5: PA1; bidirectional. */
  "PA1": "5",
  /** Physical pin 6: PA2; bidirectional. */
  "PA2": "6",
  /** Physical pin 7: PA3; bidirectional. */
  "PA3": "7",
  /** Physical pin 8: PA4; bidirectional. */
  "PA4": "8",
  /** Physical pin 9: PA5; bidirectional. */
  "PA5": "9",
  /** Physical pin 10: PA6; bidirectional. */
  "PA6": "10",
  /** Physical pin 11: PA7; bidirectional. */
  "PA7": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: H1; input. */
  "H1": "13",
  /** Physical pin 14: H2; bidirectional. */
  "H2": "14",
  /** Physical pin 15: H3; input. */
  "H3": "15",
  /** Physical pin 16: H4; bidirectional. */
  "H4": "16",
  /** Physical pin 17: PB0; bidirectional. */
  "PB0": "17",
  /** Physical pin 18: PB1; bidirectional. */
  "PB1": "18",
  /** Physical pin 19: PB2; bidirectional. */
  "PB2": "19",
  /** Physical pin 20: PB3; bidirectional. */
  "PB3": "20",
  /** Physical pin 21: PB4; bidirectional. */
  "PB4": "21",
  /** Physical pin 22: PB5; bidirectional. */
  "PB5": "22",
  /** Physical pin 23: PB6; bidirectional. */
  "PB6": "23",
  /** Physical pin 24: PB7; bidirectional. */
  "PB7": "24",
  /** Physical pin 25: RS5; input. */
  "RS5": "25",
  /** Physical pin 26: RS4; input. */
  "RS4": "26",
  /** Physical pin 27: RS3; input. */
  "RS3": "27",
  /** Physical pin 28: RS2; input. */
  "RS2": "28",
  /** Physical pin 29: RS1; input. */
  "RS1": "29",
  /** Physical pin 30: PC0; bidirectional. */
  "PC0": "30",
  /** Physical pin 31: PC1; bidirectional. */
  "PC1": "31",
  /** Physical pin 32: TIN/PC2; bidirectional. */
  "TIN/PC2": "32",
  /** Physical pin 33: PC3/TOUT; bidirectional. */
  "PC3/TOUT": "33",
  /** Physical pin 34: DMAREQ/PC4; bidirectional. */
  "DMAREQ/PC4": "34",
  /** Physical pin 35: PC5/PIRQ; bidirectional. */
  "PC5/PIRQ": "35",
  /** Physical pin 36: PC6/PIACK; bidirectional. */
  "PC6/PIACK": "36",
  /** Physical pin 37: PC7/TIACK; bidirectional. */
  "PC7/TIACK": "37",
  /** Physical pin 38: GND; power_in. */
  "GND": "38",
  /** Physical pin 39: RESET; input. */
  "RESET": "39",
  /** Physical pin 40: CLK; input. */
  "CLK": "40",
  /** Physical pin 41: CS; input. */
  "CS": "41",
  /** Physical pin 42: DTACK; open_collector. */
  "DTACK": "42",
  /** Physical pin 43: R/W; input. */
  "R/W": "43",
  /** Physical pin 44: D0; tri_state. */
  "D0": "44",
  /** Physical pin 45: D1; tri_state. */
  "D1": "45",
  /** Physical pin 46: D2; tri_state. */
  "D2": "46",
  /** Physical pin 47: D3; tri_state. */
  "D3": "47",
  /** Physical pin 48: D4; tri_state. */
  "D4": "48",
}) {
  override schema = "Interface:68230";
  override referencePrefix = "U";
}

/**
 * dual universal asynchronous receiver/transmitter with parallel port
 *
 * KiCad symbol: `Interface:68681`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/user-guide/MC68681UM.pdf
 * Keywords: MPRO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _68681 extends Component.withPins({
  /** Physical pin 1: RS1; input. */
  "RS1": "1",
  /** Physical pin 2: IP3; input. */
  "IP3": "2",
  /** Physical pin 3: RS2; input. */
  "RS2": "3",
  /** Physical pin 4: IP1; input. */
  "IP1": "4",
  /** Physical pin 5: RS3; input. */
  "RS3": "5",
  /** Physical pin 6: RS4; input. */
  "RS4": "6",
  /** Physical pin 7: IP0; input. */
  "IP0": "7",
  /** Physical pin 8: R/W; input. */
  "R/W": "8",
  /** Physical pin 9: DTACK; open_collector. */
  "DTACK": "9",
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
  /** Physical pin 16: D1; tri_state. */
  "D1": "16",
  /** Physical pin 17: D3; tri_state. */
  "D3": "17",
  /** Physical pin 18: D5; tri_state. */
  "D5": "18",
  /** Physical pin 19: D7; tri_state. */
  "D7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: IRQ; output. */
  "IRQ": "21",
  /** Physical pin 22: D6; tri_state. */
  "D6": "22",
  /** Physical pin 23: D4; tri_state. */
  "D4": "23",
  /** Physical pin 24: D2; tri_state. */
  "D2": "24",
  /** Physical pin 25: D0; tri_state. */
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
  /** Physical pin 33: X2; input. */
  "X2": "33",
  /** Physical pin 34: RESET; input. */
  "RESET": "34",
  /** Physical pin 35: CS; input. */
  "CS": "35",
  /** Physical pin 36: IP2; input. */
  "IP2": "36",
  /** Physical pin 37: IACK; input. */
  "IACK": "37",
  /** Physical pin 38: IP5; input. */
  "IP5": "38",
  /** Physical pin 39: IP4; input. */
  "IP4": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "Interface:68681";
  override referencePrefix = "U";
}

/**
 * Multi-Function Peripheral, USART, Four timers, 8 DIO, 16-source interrupt controller
 *
 * KiCad symbol: `Interface:68901_PLCC`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/reference-manual/MC68901UM.pdf
 * Keywords: MPRO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _68901_PLCC extends Component.withPins({
  /** Physical pin 2: R/W; input. */
  "R/W": "2",
  /** Physical pin 3: RS1; input. */
  "RS1": "3",
  /** Physical pin 4: RS2; input. */
  "RS2": "4",
  /** Physical pin 5: RS3; input. */
  "RS3": "5",
  /** Physical pin 6: RS4; input. */
  "RS4": "6",
  /** Physical pin 7: RS5; input. */
  "RS5": "7",
  /** Physical pin 8: TC; input. */
  "TC": "8",
  /** Physical pin 9: SO; output. */
  "SO": "9",
  /** Physical pin 10: SI; input. */
  "SI": "10",
  /** Physical pin 11: RC; input. */
  "RC": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: MPX; input. */
  "MPX": "13",
  /** Physical pin 15: TAO; output. */
  "TAO": "15",
  /** Physical pin 16: TBO; output. */
  "TBO": "16",
  /** Physical pin 17: TCO; output. */
  "TCO": "17",
  /** Physical pin 18: TDO; output. */
  "TDO": "18",
  /** Physical pin 19: X1; input. */
  "X1": "19",
  /** Physical pin 20: X2; input. */
  "X2": "20",
  /** Physical pin 22: TAI; input. */
  "TAI": "22",
  /** Physical pin 23: TBI; input. */
  "TBI": "23",
  /** Physical pin 24: RESET; input. */
  "RESET": "24",
  /** Physical pin 25: I0; input. */
  "I0": "25",
  /** Physical pin 26: I1; input. */
  "I1": "26",
  /** Physical pin 27: I2; input. */
  "I2": "27",
  /** Physical pin 28: I3; input. */
  "I3": "28",
  /** Physical pin 29: I4; input. */
  "I4": "29",
  /** Physical pin 30: I5; input. */
  "I5": "30",
  /** Physical pin 31: I6; input. */
  "I6": "31",
  /** Physical pin 32: I7; input. */
  "I7": "32",
  /** Physical pin 34: TR; output. */
  "TR": "34",
  /** Physical pin 35: RR; output. */
  "RR": "35",
  /** Physical pin 36: IRQ; output. */
  "IRQ": "36",
  /** Physical pin 37: IEO; output. */
  "IEO": "37",
  /** Physical pin 38: IEI; input. */
  "IEI": "38",
  /** Physical pin 39: CLK; input. */
  "CLK": "39",
  /** Physical pin 40: GND; power_in. */
  "GND": "40",
  /** Physical pin 41: D0; input. */
  "D0": "41",
  /** Physical pin 42: D1; input. */
  "D1": "42",
  /** Physical pin 43: D2; input. */
  "D2": "43",
  /** Physical pin 44: D3; input. */
  "D3": "44",
  /** Physical pin 45: D4; input. */
  "D4": "45",
  /** Physical pin 46: D5; input. */
  "D5": "46",
  /** Physical pin 47: D6; input. */
  "D6": "47",
  /** Physical pin 48: D7; input. */
  "D7": "48",
  /** Physical pin 49: IACK; input. */
  "IACK": "49",
  /** Physical pin 50: DTACK; output. */
  "DTACK": "50",
  /** Physical pin 51: DS; input. */
  "DS": "51",
  /** Physical pin 52: CS; input. */
  "CS": "52",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8237 extends Component.withPins({
  /** Physical pin 1: ~{IOR}; bidirectional. */
  "~{IOR}": "1",
  /** Physical pin 2: ~{IOW}; bidirectional. */
  "~{IOW}": "2",
  /** Physical pin 3: ~{MEMR}; tri_state. */
  "~{MEMR}": "3",
  /** Physical pin 4: ~{MEMW}; tri_state. */
  "~{MEMW}": "4",
  /** Physical pin 5: PIN5; input. */
  "PIN5": "5",
  /** Physical pin 6: READY; input. */
  "READY": "6",
  /** Physical pin 7: HLDA; input. */
  "HLDA": "7",
  /** Physical pin 8: ADSTB; output. */
  "ADSTB": "8",
  /** Physical pin 9: AEN; output. */
  "AEN": "9",
  /** Physical pin 10: HRQ; output. */
  "HRQ": "10",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: CLK; input. */
  "CLK": "12",
  /** Physical pin 13: RESET; input. */
  "RESET": "13",
  /** Physical pin 14: DACK2; output. */
  "DACK2": "14",
  /** Physical pin 15: DACK3; output. */
  "DACK3": "15",
  /** Physical pin 16: DREQ3; input. */
  "DREQ3": "16",
  /** Physical pin 17: DREQ2; input. */
  "DREQ2": "17",
  /** Physical pin 18: DREQ1; input. */
  "DREQ1": "18",
  /** Physical pin 19: DREQ0; input. */
  "DREQ0": "19",
  /** Physical pin 20: Vss; power_in. */
  "Vss": "20",
  /** Physical pin 21: DB7; bidirectional. */
  "DB7": "21",
  /** Physical pin 22: DB6; bidirectional. */
  "DB6": "22",
  /** Physical pin 23: DB5; bidirectional. */
  "DB5": "23",
  /** Physical pin 24: DACK1; output. */
  "DACK1": "24",
  /** Physical pin 25: DACK0; output. */
  "DACK0": "25",
  /** Physical pin 26: DB4; bidirectional. */
  "DB4": "26",
  /** Physical pin 27: DB3; bidirectional. */
  "DB3": "27",
  /** Physical pin 28: DB2; bidirectional. */
  "DB2": "28",
  /** Physical pin 29: DB1; bidirectional. */
  "DB1": "29",
  /** Physical pin 30: DB0; bidirectional. */
  "DB0": "30",
  /** Physical pin 31: Vcc; power_in. */
  "Vcc": "31",
  /** Physical pin 32: A0; bidirectional. */
  "A0": "32",
  /** Physical pin 33: A1; bidirectional. */
  "A1": "33",
  /** Physical pin 34: A2; bidirectional. */
  "A2": "34",
  /** Physical pin 35: A3; bidirectional. */
  "A3": "35",
  /** Physical pin 36: ~{EOP}; bidirectional. */
  "~{EOP}": "36",
  /** Physical pin 37: A4; tri_state. */
  "A4": "37",
  /** Physical pin 38: A5; tri_state. */
  "A5": "38",
  /** Physical pin 39: A6; tri_state. */
  "A6": "39",
  /** Physical pin 40: A7; tri_state. */
  "A7": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8255 extends Component.withPins({
  /** Physical pin 1: PA3; bidirectional. */
  "PA3": "1",
  /** Physical pin 2: PA2; bidirectional. */
  "PA2": "2",
  /** Physical pin 3: PA1; bidirectional. */
  "PA1": "3",
  /** Physical pin 4: PA0; bidirectional. */
  "PA0": "4",
  /** Physical pin 5: ~{RD}; input. */
  "~{RD}": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: A1; input. */
  "A1": "8",
  /** Physical pin 9: A0; input. */
  "A0": "9",
  /** Physical pin 10: PC7; bidirectional. */
  "PC7": "10",
  /** Physical pin 11: PC6; bidirectional. */
  "PC6": "11",
  /** Physical pin 12: PC5; bidirectional. */
  "PC5": "12",
  /** Physical pin 13: PC4; bidirectional. */
  "PC4": "13",
  /** Physical pin 14: PC0; bidirectional. */
  "PC0": "14",
  /** Physical pin 15: PC1; bidirectional. */
  "PC1": "15",
  /** Physical pin 16: PC2; bidirectional. */
  "PC2": "16",
  /** Physical pin 17: PC3; bidirectional. */
  "PC3": "17",
  /** Physical pin 18: PB0; bidirectional. */
  "PB0": "18",
  /** Physical pin 19: PB1; bidirectional. */
  "PB1": "19",
  /** Physical pin 20: PB2; bidirectional. */
  "PB2": "20",
  /** Physical pin 21: PB3; bidirectional. */
  "PB3": "21",
  /** Physical pin 22: PB4; bidirectional. */
  "PB4": "22",
  /** Physical pin 23: PB5; bidirectional. */
  "PB5": "23",
  /** Physical pin 24: PB6; bidirectional. */
  "PB6": "24",
  /** Physical pin 25: PB7; bidirectional. */
  "PB7": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: D7; bidirectional. */
  "D7": "27",
  /** Physical pin 28: D6; bidirectional. */
  "D6": "28",
  /** Physical pin 29: D5; bidirectional. */
  "D5": "29",
  /** Physical pin 30: D4; bidirectional. */
  "D4": "30",
  /** Physical pin 31: D3; bidirectional. */
  "D3": "31",
  /** Physical pin 32: D2; bidirectional. */
  "D2": "32",
  /** Physical pin 33: D1; bidirectional. */
  "D1": "33",
  /** Physical pin 34: D0; bidirectional. */
  "D0": "34",
  /** Physical pin 35: RESET; input. */
  "RESET": "35",
  /** Physical pin 36: ~{WR}; input. */
  "~{WR}": "36",
  /** Physical pin 37: PA7; bidirectional. */
  "PA7": "37",
  /** Physical pin 38: PA6; bidirectional. */
  "PA6": "38",
  /** Physical pin 39: PA5; bidirectional. */
  "PA5": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8255A extends Component.withPins({
  /** Physical pin 1: PA3; bidirectional. */
  "PA3": "1",
  /** Physical pin 2: PA2; bidirectional. */
  "PA2": "2",
  /** Physical pin 3: PA1; bidirectional. */
  "PA1": "3",
  /** Physical pin 4: PA0; bidirectional. */
  "PA0": "4",
  /** Physical pin 5: ~{RD}; input. */
  "~{RD}": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: A1; input. */
  "A1": "8",
  /** Physical pin 9: A0; input. */
  "A0": "9",
  /** Physical pin 10: PC7; bidirectional. */
  "PC7": "10",
  /** Physical pin 11: PC6; bidirectional. */
  "PC6": "11",
  /** Physical pin 12: PC5; bidirectional. */
  "PC5": "12",
  /** Physical pin 13: PC4; bidirectional. */
  "PC4": "13",
  /** Physical pin 14: PC0; bidirectional. */
  "PC0": "14",
  /** Physical pin 15: PC1; bidirectional. */
  "PC1": "15",
  /** Physical pin 16: PC2; bidirectional. */
  "PC2": "16",
  /** Physical pin 17: PC3; bidirectional. */
  "PC3": "17",
  /** Physical pin 18: PB0; bidirectional. */
  "PB0": "18",
  /** Physical pin 19: PB1; bidirectional. */
  "PB1": "19",
  /** Physical pin 20: PB2; bidirectional. */
  "PB2": "20",
  /** Physical pin 21: PB3; bidirectional. */
  "PB3": "21",
  /** Physical pin 22: PB4; bidirectional. */
  "PB4": "22",
  /** Physical pin 23: PB5; bidirectional. */
  "PB5": "23",
  /** Physical pin 24: PB6; bidirectional. */
  "PB6": "24",
  /** Physical pin 25: PB7; bidirectional. */
  "PB7": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: D7; bidirectional. */
  "D7": "27",
  /** Physical pin 28: D6; bidirectional. */
  "D6": "28",
  /** Physical pin 29: D5; bidirectional. */
  "D5": "29",
  /** Physical pin 30: D4; bidirectional. */
  "D4": "30",
  /** Physical pin 31: D3; bidirectional. */
  "D3": "31",
  /** Physical pin 32: D2; bidirectional. */
  "D2": "32",
  /** Physical pin 33: D1; bidirectional. */
  "D1": "33",
  /** Physical pin 34: D0; bidirectional. */
  "D0": "34",
  /** Physical pin 35: RESET; input. */
  "RESET": "35",
  /** Physical pin 36: ~{WR}; input. */
  "~{WR}": "36",
  /** Physical pin 37: PA7; bidirectional. */
  "PA7": "37",
  /** Physical pin 38: PA6; bidirectional. */
  "PA6": "38",
  /** Physical pin 39: PA5; bidirectional. */
  "PA5": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8259 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{WR}; input. */
  "~{WR}": "2",
  /** Physical pin 3: ~{RD}; input. */
  "~{RD}": "3",
  /** Physical pin 4: D7; bidirectional. */
  "D7": "4",
  /** Physical pin 5: D6; bidirectional. */
  "D6": "5",
  /** Physical pin 6: D5; bidirectional. */
  "D5": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D3; bidirectional. */
  "D3": "8",
  /** Physical pin 9: D2; bidirectional. */
  "D2": "9",
  /** Physical pin 10: D1; bidirectional. */
  "D1": "10",
  /** Physical pin 11: D0; bidirectional. */
  "D0": "11",
  /** Physical pin 12: CAS0; input. */
  "CAS0": "12",
  /** Physical pin 13: CAS1; output. */
  "CAS1": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: CAS2; output. */
  "CAS2": "15",
  /** Physical pin 16: ~{SP}/~{EN}; bidirectional. */
  "~{SP}/~{EN}": "16",
  /** Physical pin 17: INT; output. */
  "INT": "17",
  /** Physical pin 18: IR0; input. */
  "IR0": "18",
  /** Physical pin 19: IR1; input. */
  "IR1": "19",
  /** Physical pin 20: IR2; input. */
  "IR2": "20",
  /** Physical pin 21: IR3; input. */
  "IR3": "21",
  /** Physical pin 22: IR4; input. */
  "IR4": "22",
  /** Physical pin 23: IR5; input. */
  "IR5": "23",
  /** Physical pin 24: IR6; input. */
  "IR6": "24",
  /** Physical pin 25: IR7; input. */
  "IR7": "25",
  /** Physical pin 26: ~{INTA}; input. */
  "~{INTA}": "26",
  /** Physical pin 27: A0; input. */
  "A0": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8259A extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{WR}; input. */
  "~{WR}": "2",
  /** Physical pin 3: ~{RD}; input. */
  "~{RD}": "3",
  /** Physical pin 4: D7; bidirectional. */
  "D7": "4",
  /** Physical pin 5: D6; bidirectional. */
  "D6": "5",
  /** Physical pin 6: D5; bidirectional. */
  "D5": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D3; bidirectional. */
  "D3": "8",
  /** Physical pin 9: D2; bidirectional. */
  "D2": "9",
  /** Physical pin 10: D1; bidirectional. */
  "D1": "10",
  /** Physical pin 11: D0; bidirectional. */
  "D0": "11",
  /** Physical pin 12: CAS0; input. */
  "CAS0": "12",
  /** Physical pin 13: CAS1; output. */
  "CAS1": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: CAS2; output. */
  "CAS2": "15",
  /** Physical pin 16: ~{SP}/~{EN}; bidirectional. */
  "~{SP}/~{EN}": "16",
  /** Physical pin 17: INT; output. */
  "INT": "17",
  /** Physical pin 18: IR0; input. */
  "IR0": "18",
  /** Physical pin 19: IR1; input. */
  "IR1": "19",
  /** Physical pin 20: IR2; input. */
  "IR2": "20",
  /** Physical pin 21: IR3; input. */
  "IR3": "21",
  /** Physical pin 22: IR4; input. */
  "IR4": "22",
  /** Physical pin 23: IR5; input. */
  "IR5": "23",
  /** Physical pin 24: IR6; input. */
  "IR6": "24",
  /** Physical pin 25: IR7; input. */
  "IR7": "25",
  /** Physical pin 26: ~{INTA}; input. */
  "~{INTA}": "26",
  /** Physical pin 27: A0; input. */
  "A0": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8259A_2 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{WR}; input. */
  "~{WR}": "2",
  /** Physical pin 3: ~{RD}; input. */
  "~{RD}": "3",
  /** Physical pin 4: D7; bidirectional. */
  "D7": "4",
  /** Physical pin 5: D6; bidirectional. */
  "D6": "5",
  /** Physical pin 6: D5; bidirectional. */
  "D5": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D3; bidirectional. */
  "D3": "8",
  /** Physical pin 9: D2; bidirectional. */
  "D2": "9",
  /** Physical pin 10: D1; bidirectional. */
  "D1": "10",
  /** Physical pin 11: D0; bidirectional. */
  "D0": "11",
  /** Physical pin 12: CAS0; input. */
  "CAS0": "12",
  /** Physical pin 13: CAS1; output. */
  "CAS1": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: CAS2; output. */
  "CAS2": "15",
  /** Physical pin 16: ~{SP}/~{EN}; bidirectional. */
  "~{SP}/~{EN}": "16",
  /** Physical pin 17: INT; output. */
  "INT": "17",
  /** Physical pin 18: IR0; input. */
  "IR0": "18",
  /** Physical pin 19: IR1; input. */
  "IR1": "19",
  /** Physical pin 20: IR2; input. */
  "IR2": "20",
  /** Physical pin 21: IR3; input. */
  "IR3": "21",
  /** Physical pin 22: IR4; input. */
  "IR4": "22",
  /** Physical pin 23: IR5; input. */
  "IR5": "23",
  /** Physical pin 24: IR6; input. */
  "IR6": "24",
  /** Physical pin 25: IR7; input. */
  "IR7": "25",
  /** Physical pin 26: ~{INTA}; input. */
  "~{INTA}": "26",
  /** Physical pin 27: A0; input. */
  "A0": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8288 extends Component.withPins({
  /** Physical pin 1: IOB; input. */
  "IOB": "1",
  /** Physical pin 2: CLK; input. */
  "CLK": "2",
  /** Physical pin 3: ~{S1}; input. */
  "~{S1}": "3",
  /** Physical pin 4: DT/~{R}; output. */
  "DT/~{R}": "4",
  /** Physical pin 5: ALE; output. */
  "ALE": "5",
  /** Physical pin 6: ~{AEN}; input. */
  "~{AEN}": "6",
  /** Physical pin 7: ~{MRDC}; tri_state. */
  "~{MRDC}": "7",
  /** Physical pin 8: ~{AMWC}; tri_state. */
  "~{AMWC}": "8",
  /** Physical pin 9: ~{MWTC}; tri_state. */
  "~{MWTC}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{IOWC}; tri_state. */
  "~{IOWC}": "11",
  /** Physical pin 12: ~{AIOWC}; tri_state. */
  "~{AIOWC}": "12",
  /** Physical pin 13: ~{IORC}; tri_state. */
  "~{IORC}": "13",
  /** Physical pin 14: ~{INTA}; tri_state. */
  "~{INTA}": "14",
  /** Physical pin 15: CEN; input. */
  "CEN": "15",
  /** Physical pin 16: DEN; output. */
  "DEN": "16",
  /** Physical pin 17: MCE/~{PDEN}; output. */
  "MCE/~{PDEN}": "17",
  /** Physical pin 18: ~{S2}; input. */
  "~{S2}": "18",
  /** Physical pin 19: ~{S0}; input. */
  "~{S0}": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _82C55A extends Component.withPins({
  /** Physical pin 1: PA3; bidirectional. */
  "PA3": "1",
  /** Physical pin 2: PA2; bidirectional. */
  "PA2": "2",
  /** Physical pin 3: PA1; bidirectional. */
  "PA1": "3",
  /** Physical pin 4: PA0; bidirectional. */
  "PA0": "4",
  /** Physical pin 5: ~{RD}; input. */
  "~{RD}": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: A1; input. */
  "A1": "8",
  /** Physical pin 9: A0; input. */
  "A0": "9",
  /** Physical pin 10: PC7; bidirectional. */
  "PC7": "10",
  /** Physical pin 11: PC6; bidirectional. */
  "PC6": "11",
  /** Physical pin 12: PC5; bidirectional. */
  "PC5": "12",
  /** Physical pin 13: PC4; bidirectional. */
  "PC4": "13",
  /** Physical pin 14: PC0; bidirectional. */
  "PC0": "14",
  /** Physical pin 15: PC1; bidirectional. */
  "PC1": "15",
  /** Physical pin 16: PC2; bidirectional. */
  "PC2": "16",
  /** Physical pin 17: PC3; bidirectional. */
  "PC3": "17",
  /** Physical pin 18: PB0; bidirectional. */
  "PB0": "18",
  /** Physical pin 19: PB1; bidirectional. */
  "PB1": "19",
  /** Physical pin 20: PB2; bidirectional. */
  "PB2": "20",
  /** Physical pin 21: PB3; bidirectional. */
  "PB3": "21",
  /** Physical pin 22: PB4; bidirectional. */
  "PB4": "22",
  /** Physical pin 23: PB5; bidirectional. */
  "PB5": "23",
  /** Physical pin 24: PB6; bidirectional. */
  "PB6": "24",
  /** Physical pin 25: PB7; bidirectional. */
  "PB7": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: D7; bidirectional. */
  "D7": "27",
  /** Physical pin 28: D6; bidirectional. */
  "D6": "28",
  /** Physical pin 29: D5; bidirectional. */
  "D5": "29",
  /** Physical pin 30: D4; bidirectional. */
  "D4": "30",
  /** Physical pin 31: D3; bidirectional. */
  "D3": "31",
  /** Physical pin 32: D2; bidirectional. */
  "D2": "32",
  /** Physical pin 33: D1; bidirectional. */
  "D1": "33",
  /** Physical pin 34: D0; bidirectional. */
  "D0": "34",
  /** Physical pin 35: RESET; input. */
  "RESET": "35",
  /** Physical pin 36: ~{WR}; input. */
  "~{WR}": "36",
  /** Physical pin 37: PA7; bidirectional. */
  "PA7": "37",
  /** Physical pin 38: PA6; bidirectional. */
  "PA6": "38",
  /** Physical pin 39: PA5; bidirectional. */
  "PA5": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _82C55A_PLCC extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: PA3; bidirectional. */
  "PA3": "2",
  /** Physical pin 3: PA2; bidirectional. */
  "PA2": "3",
  /** Physical pin 4: PA1; bidirectional. */
  "PA1": "4",
  /** Physical pin 5: PA0; bidirectional. */
  "PA0": "5",
  /** Physical pin 6: ~{RD}; input. */
  "~{RD}": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: PC7; bidirectional. */
  "PC7": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: PC6; bidirectional. */
  "PC6": "13",
  /** Physical pin 14: PC5; bidirectional. */
  "PC5": "14",
  /** Physical pin 15: PC4; bidirectional. */
  "PC4": "15",
  /** Physical pin 16: PC0; bidirectional. */
  "PC0": "16",
  /** Physical pin 17: PC1; bidirectional. */
  "PC1": "17",
  /** Physical pin 18: PC2; bidirectional. */
  "PC2": "18",
  /** Physical pin 19: PC3; bidirectional. */
  "PC3": "19",
  /** Physical pin 20: PB0; bidirectional. */
  "PB0": "20",
  /** Physical pin 21: PB1; bidirectional. */
  "PB1": "21",
  /** Physical pin 22: PB2; bidirectional. */
  "PB2": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: PB3; bidirectional. */
  "PB3": "24",
  /** Physical pin 25: PB4; bidirectional. */
  "PB4": "25",
  /** Physical pin 26: PB5; bidirectional. */
  "PB5": "26",
  /** Physical pin 27: PB6; bidirectional. */
  "PB6": "27",
  /** Physical pin 28: PB7; bidirectional. */
  "PB7": "28",
  /** Physical pin 29: VCC; power_in. */
  "VCC": "29",
  /** Physical pin 30: D7; bidirectional. */
  "D7": "30",
  /** Physical pin 31: D6; bidirectional. */
  "D6": "31",
  /** Physical pin 32: D5; bidirectional. */
  "D5": "32",
  /** Physical pin 33: D4; bidirectional. */
  "D4": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: D3; bidirectional. */
  "D3": "35",
  /** Physical pin 36: D2; bidirectional. */
  "D2": "36",
  /** Physical pin 37: D1; bidirectional. */
  "D1": "37",
  /** Physical pin 38: D0; bidirectional. */
  "D0": "38",
  /** Physical pin 39: RESET; input. */
  "RESET": "39",
  /** Physical pin 40: ~{WR}; input. */
  "~{WR}": "40",
  /** Physical pin 41: PA7; bidirectional. */
  "PA7": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA5; bidirectional. */
  "PA5": "43",
  /** Physical pin 44: PA4; bidirectional. */
  "PA4": "44",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _88SE9125C0_NAA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDDIO; power_in. */
  "VDDIO_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: VDD; passive. */
  "VDD_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GPIO3; bidirectional. */
  "GPIO3": "17",
  /** Physical pin 18: GPIO4; bidirectional. */
  "GPIO4": "18",
  /** Physical pin 19: GPIO5; bidirectional. */
  "GPIO5": "19",
  /** Physical pin 20: TESTMODE; input. */
  "TESTMODE": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: TP; bidirectional. */
  "TP": "22",
  /** Physical pin 23: RXP_1; input. */
  "RXP_1": "23",
  /** Physical pin 24: RXN_1; input. */
  "RXN_1": "24",
  /** Physical pin 25: VAA2_1; power_in. */
  "VAA2_1": "25",
  /** Physical pin 26: TXN_1; output. */
  "TXN_1": "26",
  /** Physical pin 27: TXP_1; output. */
  "TXP_1": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: RXP_0; input. */
  "RXP_0": "29",
  /** Physical pin 30: RXN_0; input. */
  "RXN_0": "30",
  /** Physical pin 31: VAA2_0; power_in. */
  "VAA2_0": "31",
  /** Physical pin 32: TXN_0; output. */
  "TXN_0": "32",
  /** Physical pin 33: TXP_0; output. */
  "TXP_0": "33",
  /** Physical pin 34: VAA1; power_in. */
  "VAA1": "34",
  /** Physical pin 35: XTLIN_OSC; input. */
  "XTLIN_OSC": "35",
  /** Physical pin 36: XTLOUT; output. */
  "XTLOUT": "36",
  /** Physical pin 37: ISET; bidirectional. */
  "ISET": "37",
  /** Physical pin 38: VCONT_10; output. */
  "VCONT_10": "38",
  /** Physical pin 39: PTXN; output. */
  "PTXN": "39",
  /** Physical pin 40: PTXP; output. */
  "PTXP": "40",
  /** Physical pin 41: AVDDT; power_in. */
  "AVDDT": "41",
  /** Physical pin 42: AVDD; power_in. */
  "AVDD": "42",
  /** Physical pin 43: PRXN; input. */
  "PRXN": "43",
  /** Physical pin 44: PRXP; input. */
  "PRXP": "44",
  /** Physical pin 45: CLKP; input. */
  "CLKP": "45",
  /** Physical pin 46: CLKN; input. */
  "CLKN": "46",
  /** Physical pin 47: SPI_DO; output. */
  "SPI_DO": "47",
  /** Physical pin 48: SPI_CS; output. */
  "SPI_CS": "48",
  /** Physical pin 49: SPI_DI; input. */
  "SPI_DI": "49",
  /** Physical pin 50: SPI_CLK; output. */
  "SPI_CLK": "50",
  /** Physical pin 51: VDD; power_in. */
  "VDD_51": "51",
  /** Physical pin 52: ~{WAKE}; open_collector. */
  "~{WAKE}": "52",
  /** Physical pin 53: ~{PERST}; input. */
  "~{PERST}": "53",
  /** Physical pin 54: GPIO0; bidirectional. */
  "GPIO0": "54",
  /** Physical pin 55: NC; no_connect. */
  "NC_55": "55",
  /** Physical pin 56: NC; no_connect. */
  "NC_56": "56",
  /** Physical pin 57: VDDIO; power_in. */
  "VDDIO_57": "57",
  /** Physical pin 58: NC; no_connect. */
  "NC_58": "58",
  /** Physical pin 59: NC; no_connect. */
  "NC_59": "59",
  /** Physical pin 60: NC; no_connect. */
  "NC_60": "60",
  /** Physical pin 61: NC; no_connect. */
  "NC_61": "61",
  /** Physical pin 62: NC; no_connect. */
  "NC_62": "62",
  /** Physical pin 63: NC; no_connect. */
  "NC_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
  /** Physical pin 65: NC; no_connect. */
  "NC_65": "65",
  /** Physical pin 66: NC; no_connect. */
  "NC_66": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: NC; no_connect. */
  "NC_68": "68",
  /** Physical pin 69: NC; no_connect. */
  "NC_69": "69",
  /** Physical pin 70: NC; no_connect. */
  "NC_70": "70",
  /** Physical pin 71: VDD; passive. */
  "VDD_71": "71",
  /** Physical pin 72: NC; no_connect. */
  "NC_72": "72",
  /** Physical pin 73: VDDIO; power_in. */
  "VDDIO_73": "73",
  /** Physical pin 74: GPIO1; bidirectional. */
  "GPIO1": "74",
  /** Physical pin 75: GPIO2; bidirectional. */
  "GPIO2": "75",
  /** Physical pin 76: NC; no_connect. */
  "NC_76": "76",
  /** Physical pin 77: VSS; passive. */
  "VSS_77": "77",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9833xRM extends Component.withPins({
  /** Physical pin 1: COMP; passive. */
  "COMP": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: CAP/2.5V; power_in. */
  "CAP/2.5V": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: MCLK; input. */
  "MCLK": "5",
  /** Physical pin 6: SDATA; input. */
  "SDATA": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: ~{FSYNC}; input. */
  "~{FSYNC}": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: VOUT; output. */
  "VOUT": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9834 extends Component.withPins({
  /** Physical pin 1: FS_ADJUST; passive. */
  "FS_ADJUST": "1",
  /** Physical pin 2: REFOUT; output. */
  "REFOUT": "2",
  /** Physical pin 3: COMP; passive. */
  "COMP": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD": "4",
  /** Physical pin 5: DVDD; power_in. */
  "DVDD": "5",
  /** Physical pin 6: CAP/2.5V; passive. */
  "CAP/2.5V": "6",
  /** Physical pin 7: DGND; power_in. */
  "DGND": "7",
  /** Physical pin 8: MCLK; input. */
  "MCLK": "8",
  /** Physical pin 9: FSELECT; input. */
  "FSELECT": "9",
  /** Physical pin 10: PSELECT; input. */
  "PSELECT": "10",
  /** Physical pin 11: RESET; input. */
  "RESET": "11",
  /** Physical pin 12: SLEEP; input. */
  "SLEEP": "12",
  /** Physical pin 13: SDATA; input. */
  "SDATA": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: ~{FSYNC}; input. */
  "~{FSYNC}": "15",
  /** Physical pin 16: SIGNBITOUT; output. */
  "SIGNBITOUT": "16",
  /** Physical pin 17: VIN; power_in. */
  "VIN": "17",
  /** Physical pin 18: AGND; power_in. */
  "AGND": "18",
  /** Physical pin 19: IOUT; output. */
  "IOUT": "19",
  /** Physical pin 20: IOUTB; output. */
  "IOUTB": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9850 extends Component.withPins({
  /** Physical pin 1: D3; input. */
  "D3": "1",
  /** Physical pin 2: D2; input. */
  "D2": "2",
  /** Physical pin 3: D1; input. */
  "D1": "3",
  /** Physical pin 4: D0; input. */
  "D0": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND_5": "5",
  /** Physical pin 6: DVDD; power_in. */
  "DVDD_6": "6",
  /** Physical pin 7: W_CLK; input. */
  "W_CLK": "7",
  /** Physical pin 8: FQ_UD; input. */
  "FQ_UD": "8",
  /** Physical pin 9: CLKIN; input. */
  "CLKIN": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND_10": "10",
  /** Physical pin 11: AVDD; power_in. */
  "AVDD_11": "11",
  /** Physical pin 12: RSET; passive. */
  "RSET": "12",
  /** Physical pin 13: QOUTB; output. */
  "QOUTB": "13",
  /** Physical pin 14: QOUT; output. */
  "QOUT": "14",
  /** Physical pin 15: VINN; input. */
  "VINN": "15",
  /** Physical pin 16: VINP; input. */
  "VINP": "16",
  /** Physical pin 17: DACBL; passive. */
  "DACBL": "17",
  /** Physical pin 18: AVDD; passive. */
  "AVDD_18": "18",
  /** Physical pin 19: AGND; passive. */
  "AGND_19": "19",
  /** Physical pin 20: IOUTB; output. */
  "IOUTB": "20",
  /** Physical pin 21: IOUT; output. */
  "IOUT": "21",
  /** Physical pin 22: RESET; input. */
  "RESET": "22",
  /** Physical pin 23: DVDD; power_in. */
  "DVDD_23": "23",
  /** Physical pin 24: DGND; power_in. */
  "DGND_24": "24",
  /** Physical pin 25: D7; input. */
  "D7": "25",
  /** Physical pin 26: D6; input. */
  "D6": "26",
  /** Physical pin 27: D5; input. */
  "D5": "27",
  /** Physical pin 28: D4; input. */
  "D4": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9851 extends Component.withPins({
  /** Physical pin 1: D3; input. */
  "D3": "1",
  /** Physical pin 2: D2; input. */
  "D2": "2",
  /** Physical pin 3: D1; input. */
  "D1": "3",
  /** Physical pin 4: D0; input. */
  "D0": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND": "5",
  /** Physical pin 6: PVCC; power_in. */
  "PVCC": "6",
  /** Physical pin 7: W_CLK; input. */
  "W_CLK": "7",
  /** Physical pin 8: FQ_UD; input. */
  "FQ_UD": "8",
  /** Physical pin 9: REFCLK; input. */
  "REFCLK": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND_10": "10",
  /** Physical pin 11: AVDD; power_in. */
  "AVDD_11": "11",
  /** Physical pin 12: RSET; passive. */
  "RSET": "12",
  /** Physical pin 13: VOUTN; output. */
  "VOUTN": "13",
  /** Physical pin 14: VOUTP; output. */
  "VOUTP": "14",
  /** Physical pin 15: VINN; input. */
  "VINN": "15",
  /** Physical pin 16: VINP; input. */
  "VINP": "16",
  /** Physical pin 17: DACBP; passive. */
  "DACBP": "17",
  /** Physical pin 18: AVDD; passive. */
  "AVDD_18": "18",
  /** Physical pin 19: AGND; passive. */
  "AGND_19": "19",
  /** Physical pin 20: IOUTB; output. */
  "IOUTB": "20",
  /** Physical pin 21: IOUT; output. */
  "IOUT": "21",
  /** Physical pin 22: RESET; input. */
  "RESET": "22",
  /** Physical pin 23: DVDD; power_in. */
  "DVDD": "23",
  /** Physical pin 24: DGND; power_in. */
  "DGND": "24",
  /** Physical pin 25: D7; input. */
  "D7": "25",
  /** Physical pin 26: D6; input. */
  "D6": "26",
  /** Physical pin 27: D5; input. */
  "D5": "27",
  /** Physical pin 28: D4; input. */
  "D4": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9910 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: PLL_LOOP_FILTER; input. */
  "PLL_LOOP_FILTER": "2",
  /** Physical pin 3: AVDD_1V8; power_in. */
  "AVDD_1V8_3": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND_4": "4",
  /** Physical pin 5: AGND; passive. */
  "AGND_5": "5",
  /** Physical pin 6: AVDD_1V8; power_in. */
  "AVDD_1V8_6": "6",
  /** Physical pin 7: SYNC_IN+; input. */
  "SYNC_IN+": "7",
  /** Physical pin 8: SYNC_IN-; input. */
  "SYNC_IN-": "8",
  /** Physical pin 9: SYNC_OUT+; output. */
  "SYNC_OUT+": "9",
  /** Physical pin 10: SYNC_OUT-; output. */
  "SYNC_OUT-": "10",
  /** Physical pin 11: DVDD_IO_3V3; power_in. */
  "DVDD_IO_3V3_11": "11",
  /** Physical pin 12: SYNC_SMP_ERR; output. */
  "SYNC_SMP_ERR": "12",
  /** Physical pin 13: DGND; power_in. */
  "DGND_13": "13",
  /** Physical pin 14: MASTER_RESET; input. */
  "MASTER_RESET": "14",
  /** Physical pin 15: DVDD_IO_3V3; passive. */
  "DVDD_IO_3V3_15": "15",
  /** Physical pin 16: DGND; passive. */
  "DGND_16": "16",
  /** Physical pin 17: DVDD_1V8; power_in. */
  "DVDD_1V8_17": "17",
  /** Physical pin 18: EXT_PWR_DWN; input. */
  "EXT_PWR_DWN": "18",
  /** Physical pin 19: PLL_LOCK; output. */
  "PLL_LOCK": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: DVDD_IO_3V3; passive. */
  "DVDD_IO_3V3_21": "21",
  /** Physical pin 22: DGND; passive. */
  "DGND_22": "22",
  /** Physical pin 23: DVDD_1V8; passive. */
  "DVDD_1V8_23": "23",
  /** Physical pin 24: RAM_SWP_OVR; output. */
  "RAM_SWP_OVR": "24",
  /** Physical pin 25: D15; input. */
  "D15": "25",
  /** Physical pin 26: D14; input. */
  "D14": "26",
  /** Physical pin 27: D13; input. */
  "D13": "27",
  /** Physical pin 28: DVDD_IO_3V3; passive. */
  "DVDD_IO_3V3_28": "28",
  /** Physical pin 29: DGND; passive. */
  "DGND_29": "29",
  /** Physical pin 30: DVDD_1V8; passive. */
  "DVDD_1V8_30": "30",
  /** Physical pin 31: D12; input. */
  "D12": "31",
  /** Physical pin 32: D11; input. */
  "D11": "32",
  /** Physical pin 33: D10; input. */
  "D10": "33",
  /** Physical pin 34: D9; input. */
  "D9": "34",
  /** Physical pin 35: D8; input. */
  "D8": "35",
  /** Physical pin 36: D7; input. */
  "D7": "36",
  /** Physical pin 37: D6; input. */
  "D6": "37",
  /** Physical pin 38: D5; input. */
  "D5": "38",
  /** Physical pin 39: D4; input. */
  "D4": "39",
  /** Physical pin 40: PDCLK; output. */
  "PDCLK": "40",
  /** Physical pin 41: TxENABLE; input. */
  "TxENABLE": "41",
  /** Physical pin 42: D3; input. */
  "D3": "42",
  /** Physical pin 43: D2; input. */
  "D2": "43",
  /** Physical pin 44: D1; input. */
  "D1": "44",
  /** Physical pin 45: DVDD_IO_3V3; passive. */
  "DVDD_IO_3V3_45": "45",
  /** Physical pin 46: DGND; passive. */
  "DGND_46": "46",
  /** Physical pin 47: DVDD_1V8; passive. */
  "DVDD_1V8_47": "47",
  /** Physical pin 48: D0; input. */
  "D0": "48",
  /** Physical pin 49: F1; input. */
  "F1": "49",
  /** Physical pin 50: F0; input. */
  "F0": "50",
  /** Physical pin 51: DGND; passive. */
  "DGND_51": "51",
  /** Physical pin 52: PROFILE2; input. */
  "PROFILE2": "52",
  /** Physical pin 53: PROFILE1; input. */
  "PROFILE1": "53",
  /** Physical pin 54: PROFILE0; input. */
  "PROFILE0": "54",
  /** Physical pin 55: SYNC_CLK; output. */
  "SYNC_CLK": "55",
  /** Physical pin 56: DVDD_IO_3V3; passive. */
  "DVDD_IO_3V3_56": "56",
  /** Physical pin 57: DVDD_1V8; passive. */
  "DVDD_1V8_57": "57",
  /** Physical pin 58: DGND; passive. */
  "DGND_58": "58",
  /** Physical pin 59: I/O_UPDATE; bidirectional. */
  "I/O_UPDATE": "59",
  /** Physical pin 60: OSK; input. */
  "OSK": "60",
  /** Physical pin 61: DROVER; output. */
  "DROVER": "61",
  /** Physical pin 62: DRCTL; input. */
  "DRCTL": "62",
  /** Physical pin 63: DRHOLD; input. */
  "DRHOLD": "63",
  /** Physical pin 64: DVDD_1V8; passive. */
  "DVDD_1V8_64": "64",
  /** Physical pin 65: DGND; passive. */
  "DGND_65": "65",
  /** Physical pin 66: DVDD_IO_3V3; passive. */
  "DVDD_IO_3V3_66": "66",
  /** Physical pin 67: SDIO; bidirectional. */
  "SDIO": "67",
  /** Physical pin 68: SDO; output. */
  "SDO": "68",
  /** Physical pin 69: SCLK; input. */
  "SCLK": "69",
  /** Physical pin 70: ~{CS}; input. */
  "~{CS}": "70",
  /** Physical pin 71: I/O_RESET; input. */
  "I/O_RESET": "71",
  /** Physical pin 72: NC; no_connect. */
  "NC_72": "72",
  /** Physical pin 73: AGND; passive. */
  "AGND_73": "73",
  /** Physical pin 74: AVDD_3V3; power_in. */
  "AVDD_3V3_74": "74",
  /** Physical pin 75: AVDD_3V3; passive. */
  "AVDD_3V3_75": "75",
  /** Physical pin 76: AVDD_3V3; passive. */
  "AVDD_3V3_76": "76",
  /** Physical pin 77: AVDD_3V3; passive. */
  "AVDD_3V3_77": "77",
  /** Physical pin 78: AGND; passive. */
  "AGND_78": "78",
  /** Physical pin 79: AGND; passive. */
  "AGND_79": "79",
  /** Physical pin 80: ~{IOUT}; output. */
  "~{IOUT}": "80",
  /** Physical pin 81: IOUT; output. */
  "IOUT": "81",
  /** Physical pin 82: AGND; passive. */
  "AGND_82": "82",
  /** Physical pin 83: AVDD_3V3; passive. */
  "AVDD_3V3_83": "83",
  /** Physical pin 84: DAC_RSET; output. */
  "DAC_RSET": "84",
  /** Physical pin 85: AGND; passive. */
  "AGND_85": "85",
  /** Physical pin 86: NC; no_connect. */
  "NC_86": "86",
  /** Physical pin 87: NC; no_connect. */
  "NC_87": "87",
  /** Physical pin 88: AGND; passive. */
  "AGND_88": "88",
  /** Physical pin 89: AVDD_1V8; power_in. */
  "AVDD_1V8_89": "89",
  /** Physical pin 90: REF_CLK; input. */
  "REF_CLK": "90",
  /** Physical pin 91: ~{REF_CLK}; input. */
  "~{REF_CLK}": "91",
  /** Physical pin 92: AVDD_1V8; passive. */
  "AVDD_1V8_92": "92",
  /** Physical pin 93: NC; no_connect. */
  "NC_93": "93",
  /** Physical pin 94: REFCLK_OUT; output. */
  "REFCLK_OUT": "94",
  /** Physical pin 95: XTAL_SEL; input. */
  "XTAL_SEL": "95",
  /** Physical pin 96: AGND; passive. */
  "AGND_96": "96",
  /** Physical pin 97: NC; no_connect. */
  "NC_97": "97",
  /** Physical pin 98: NC; no_connect. */
  "NC_98": "98",
  /** Physical pin 99: NC; no_connect. */
  "NC_99": "99",
  /** Physical pin 100: NC; no_connect. */
  "NC_100": "100",
  /** Physical pin 101: EP; power_in. */
  "EP": "101",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9912 extends Component.withPins({
  /** Physical pin 1: DVDD_I/O; power_in. */
  "DVDD_I/O": "1",
  /** Physical pin 2: DVSS; power_in. */
  "DVSS_2": "2",
  /** Physical pin 3: DVDD; power_in. */
  "DVDD_3": "3",
  /** Physical pin 4: DVSS; passive. */
  "DVSS_4": "4",
  /** Physical pin 5: DVDD; passive. */
  "DVDD_5": "5",
  /** Physical pin 6: DVSS; passive. */
  "DVSS_6": "6",
  /** Physical pin 7: DVDD; passive. */
  "DVDD_7": "7",
  /** Physical pin 8: DVSS; passive. */
  "DVSS_8": "8",
  /** Physical pin 9: S1; tri_state. */
  "S1": "9",
  /** Physical pin 10: S2; tri_state. */
  "S2": "10",
  /** Physical pin 11: AVDD; power_in. */
  "AVDD_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: AVDD3; power_in. */
  "AVDD3_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: AVDD; passive. */
  "AVDD_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: AVDD; passive. */
  "AVDD_23": "23",
  /** Physical pin 24: AVDD; passive. */
  "AVDD_24": "24",
  /** Physical pin 25: AVDD; power_in. */
  "AVDD_25": "25",
  /** Physical pin 26: AVDD; passive. */
  "AVDD_26": "26",
  /** Physical pin 27: SYSCLK; input. */
  "SYSCLK": "27",
  /** Physical pin 28: SYSCLK_B; input. */
  "SYSCLK_B": "28",
  /** Physical pin 29: AVDD; passive. */
  "AVDD_29": "29",
  /** Physical pin 30: AVDD; passive. */
  "AVDD_30": "30",
  /** Physical pin 31: LOOP_FILTER; passive. */
  "LOOP_FILTER": "31",
  /** Physical pin 32: CLKMODESEL; input. */
  "CLKMODESEL": "32",
  /** Physical pin 33: AVSS; power_in. */
  "AVSS_33": "33",
  /** Physical pin 34: OUTB; output. */
  "OUTB": "34",
  /** Physical pin 35: OUT; output. */
  "OUT": "35",
  /** Physical pin 36: AVDD; passive. */
  "AVDD_36": "36",
  /** Physical pin 37: AVDD3; power_in. */
  "AVDD3_37": "37",
  /** Physical pin 38: OUT_CMOS; output. */
  "OUT_CMOS": "38",
  /** Physical pin 39: AVSS; passive. */
  "AVSS_39": "39",
  /** Physical pin 40: FDBK_INB; input. */
  "FDBK_INB": "40",
  /** Physical pin 41: FDBK_IN; input. */
  "FDBK_IN": "41",
  /** Physical pin 42: AVDD; passive. */
  "AVDD_42": "42",
  /** Physical pin 43: AVSS; passive. */
  "AVSS_43": "43",
  /** Physical pin 44: AVDD; passive. */
  "AVDD_44": "44",
  /** Physical pin 45: AVDD; passive. */
  "AVDD_45": "45",
  /** Physical pin 46: AVDD3; power_in. */
  "AVDD3_46": "46",
  /** Physical pin 47: AVDD3; passive. */
  "AVDD3_47": "47",
  /** Physical pin 48: DAC_RSET; passive. */
  "DAC_RSET": "48",
  /** Physical pin 49: AVDD3; passive. */
  "AVDD3_49": "49",
  /** Physical pin 50: DAC_OUT; output. */
  "DAC_OUT": "50",
  /** Physical pin 51: DAC_OUTB; output. */
  "DAC_OUTB": "51",
  /** Physical pin 52: AVSS; passive. */
  "AVSS_52": "52",
  /** Physical pin 53: AVDD; power_in. */
  "AVDD_53": "53",
  /** Physical pin 54: S3; tri_state. */
  "S3": "54",
  /** Physical pin 55: S4; tri_state. */
  "S4": "55",
  /** Physical pin 56: DVSS; passive. */
  "DVSS_56": "56",
  /** Physical pin 57: DVSS; passive. */
  "DVSS_57": "57",
  /** Physical pin 58: PWRDOWN; input. */
  "PWRDOWN": "58",
  /** Physical pin 59: RESET; input. */
  "RESET": "59",
  /** Physical pin 60: IO_UPDATE; input. */
  "IO_UPDATE": "60",
  /** Physical pin 61: ~{CSB}; input. */
  "~{CSB}": "61",
  /** Physical pin 62: SDO; output. */
  "SDO": "62",
  /** Physical pin 63: SDIO; bidirectional. */
  "SDIO": "63",
  /** Physical pin 64: SCLK; input. */
  "SCLK": "64",
  /** Physical pin 65: AVSS; passive. */
  "AVSS_65": "65",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9951 extends Component.withPins({
  /** Physical pin 1: I/OUPDATE; bidirectional. */
  "I/OUPDATE": "1",
  /** Physical pin 2: DVDD; power_in. */
  "DVDD_2": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD_4": "4",
  /** Physical pin 5: AGND; power_in. */
  "AGND_5": "5",
  /** Physical pin 6: AVDD; passive. */
  "AVDD_6": "6",
  /** Physical pin 7: AGND; passive. */
  "AGND_7": "7",
  /** Physical pin 8: ~{OSC/REFCLK}; input. */
  "~{OSC/REFCLK}": "8",
  /** Physical pin 9: OSC/REFCLK; input. */
  "OSC/REFCLK": "9",
  /** Physical pin 10: CRYSTALOUT; output. */
  "CRYSTALOUT": "10",
  /** Physical pin 11: CLKMODESELECT; input. */
  "CLKMODESELECT": "11",
  /** Physical pin 12: LOOP_FILTER; input. */
  "LOOP_FILTER": "12",
  /** Physical pin 13: AVDD; passive. */
  "AVDD_13": "13",
  /** Physical pin 14: AGND; passive. */
  "AGND_14": "14",
  /** Physical pin 15: AGND; passive. */
  "AGND_15": "15",
  /** Physical pin 16: AVDD; passive. */
  "AVDD_16": "16",
  /** Physical pin 17: AGND; passive. */
  "AGND_17": "17",
  /** Physical pin 18: AVDD; passive. */
  "AVDD_18": "18",
  /** Physical pin 19: AVDD; passive. */
  "AVDD_19": "19",
  /** Physical pin 20: ~{IOUT}; output. */
  "~{IOUT}": "20",
  /** Physical pin 21: IOUT; output. */
  "IOUT": "21",
  /** Physical pin 22: AGND; passive. */
  "AGND_22": "22",
  /** Physical pin 23: DACBP; input. */
  "DACBP": "23",
  /** Physical pin 24: DAC_R_{SET}; input. */
  "DAC_R_{SET}": "24",
  /** Physical pin 25: AVDD; passive. */
  "AVDD_25": "25",
  /** Physical pin 26: AGND; passive. */
  "AGND_26": "26",
  /** Physical pin 27: AVDD; passive. */
  "AVDD_27": "27",
  /** Physical pin 28: AGND; passive. */
  "AGND_28": "28",
  /** Physical pin 29: AVDD; passive. */
  "AVDD_29": "29",
  /** Physical pin 30: AGND; passive. */
  "AGND_30": "30",
  /** Physical pin 31: AGND; passive. */
  "AGND_31": "31",
  /** Physical pin 32: AGND; passive. */
  "AGND_32": "32",
  /** Physical pin 33: DGND; passive. */
  "DGND_33": "33",
  /** Physical pin 34: DVDD; passive. */
  "DVDD_34": "34",
  /** Physical pin 35: PWRDWNCTL; input. */
  "PWRDWNCTL": "35",
  /** Physical pin 36: RESET; input. */
  "RESET": "36",
  /** Physical pin 37: IOSYNC; output. */
  "IOSYNC": "37",
  /** Physical pin 38: SDO; output. */
  "SDO": "38",
  /** Physical pin 39: ~{CS}; input. */
  "~{CS}": "39",
  /** Physical pin 40: SCLK; input. */
  "SCLK": "40",
  /** Physical pin 41: SDIO; bidirectional. */
  "SDIO": "41",
  /** Physical pin 42: DGND; passive. */
  "DGND_42": "42",
  /** Physical pin 43: DVDD_I/O; power_in. */
  "DVDD_I/O": "43",
  /** Physical pin 44: SYNC_IN; power_in. */
  "SYNC_IN": "44",
  /** Physical pin 45: SYNC_CLK; output. */
  "SYNC_CLK": "45",
  /** Physical pin 46: OSK; output. */
  "OSK": "46",
  /** Physical pin 47: DGND; passive. */
  "DGND_47": "47",
  /** Physical pin 48: DGND; passive. */
  "DGND_48": "48",
  /** Physical pin 49: AGND; passive. */
  "AGND_49": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9954 extends Component.withPins({
  /** Physical pin 1: I/OUPDATE; bidirectional. */
  "I/OUPDATE": "1",
  /** Physical pin 2: DVDD; power_in. */
  "DVDD_2": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD_4": "4",
  /** Physical pin 5: AGND; power_in. */
  "AGND_5": "5",
  /** Physical pin 6: AVDD; passive. */
  "AVDD_6": "6",
  /** Physical pin 7: AGND; passive. */
  "AGND_7": "7",
  /** Physical pin 8: ~{OSC/REFCLK}; input. */
  "~{OSC/REFCLK}": "8",
  /** Physical pin 9: OSC/REFCLK; input. */
  "OSC/REFCLK": "9",
  /** Physical pin 10: CRYSTALOUT; output. */
  "CRYSTALOUT": "10",
  /** Physical pin 11: CLKMODESELECT; input. */
  "CLKMODESELECT": "11",
  /** Physical pin 12: LOOP_FILTER; input. */
  "LOOP_FILTER": "12",
  /** Physical pin 13: AVDD; passive. */
  "AVDD_13": "13",
  /** Physical pin 14: AGND; passive. */
  "AGND_14": "14",
  /** Physical pin 15: AGND; passive. */
  "AGND_15": "15",
  /** Physical pin 16: AVDD; passive. */
  "AVDD_16": "16",
  /** Physical pin 17: AGND; passive. */
  "AGND_17": "17",
  /** Physical pin 18: AVDD; passive. */
  "AVDD_18": "18",
  /** Physical pin 19: AVDD; passive. */
  "AVDD_19": "19",
  /** Physical pin 20: ~{IOUT}; output. */
  "~{IOUT}": "20",
  /** Physical pin 21: IOUT; output. */
  "IOUT": "21",
  /** Physical pin 22: AGND; passive. */
  "AGND_22": "22",
  /** Physical pin 23: DACBP; input. */
  "DACBP": "23",
  /** Physical pin 24: DAC_R_{SET}; input. */
  "DAC_R_{SET}": "24",
  /** Physical pin 25: AVDD; passive. */
  "AVDD_25": "25",
  /** Physical pin 26: AGND; passive. */
  "AGND_26": "26",
  /** Physical pin 27: AVDD; passive. */
  "AVDD_27": "27",
  /** Physical pin 28: COMP_OUT; output. */
  "COMP_OUT": "28",
  /** Physical pin 29: AVDD; passive. */
  "AVDD_29": "29",
  /** Physical pin 30: COMP_IN; input. */
  "COMP_IN": "30",
  /** Physical pin 31: ~{COMP_IN}; input. */
  "~{COMP_IN}": "31",
  /** Physical pin 32: AGND; passive. */
  "AGND_32": "32",
  /** Physical pin 33: DGND; passive. */
  "DGND_33": "33",
  /** Physical pin 34: DVDD; passive. */
  "DVDD_34": "34",
  /** Physical pin 35: PWRDWNCTL; input. */
  "PWRDWNCTL": "35",
  /** Physical pin 36: RESET; input. */
  "RESET": "36",
  /** Physical pin 37: IOSYNC; input. */
  "IOSYNC": "37",
  /** Physical pin 38: SDO; output. */
  "SDO": "38",
  /** Physical pin 39: ~{CS}; input. */
  "~{CS}": "39",
  /** Physical pin 40: SCLK; input. */
  "SCLK": "40",
  /** Physical pin 41: SDIO; bidirectional. */
  "SDIO": "41",
  /** Physical pin 42: DGND; passive. */
  "DGND_42": "42",
  /** Physical pin 43: DVDD_I/O; power_in. */
  "DVDD_I/O": "43",
  /** Physical pin 44: SYNC_IN; power_in. */
  "SYNC_IN": "44",
  /** Physical pin 45: SYNC_CLK; output. */
  "SYNC_CLK": "45",
  /** Physical pin 46: OSK; input. */
  "OSK": "46",
  /** Physical pin 47: PS0; input. */
  "PS0": "47",
  /** Physical pin 48: PS1; input. */
  "PS1": "48",
  /** Physical pin 49: AGND; passive. */
  "AGND_49": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM26LS31CD extends Component.withPins({
  /** Physical pin 1: 1A; input. */
  "1A": "1",
  /** Physical pin 2: 1Y; tri_state. */
  "1Y": "2",
  /** Physical pin 3: 1Z; tri_state. */
  "1Z": "3",
  /** Physical pin 4: G; input. */
  "G": "4",
  /** Physical pin 5: 2Z; tri_state. */
  "2Z": "5",
  /** Physical pin 6: 2Y; tri_state. */
  "2Y": "6",
  /** Physical pin 7: 2A; input. */
  "2A": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: 3A; input. */
  "3A": "9",
  /** Physical pin 10: 3Y; tri_state. */
  "3Y": "10",
  /** Physical pin 11: 3Z; tri_state. */
  "3Z": "11",
  /** Physical pin 12: ~{G}; input. */
  "~{G}": "12",
  /** Physical pin 13: 4Z; tri_state. */
  "4Z": "13",
  /** Physical pin 14: 4Y; tri_state. */
  "4Y": "14",
  /** Physical pin 15: 4A; input. */
  "4A": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM26LS31CDB extends Component.withPins({
  /** Physical pin 1: 1A; input. */
  "1A": "1",
  /** Physical pin 2: 1Y; tri_state. */
  "1Y": "2",
  /** Physical pin 3: 1Z; tri_state. */
  "1Z": "3",
  /** Physical pin 4: G; input. */
  "G": "4",
  /** Physical pin 5: 2Z; tri_state. */
  "2Z": "5",
  /** Physical pin 6: 2Y; tri_state. */
  "2Y": "6",
  /** Physical pin 7: 2A; input. */
  "2A": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: 3A; input. */
  "3A": "9",
  /** Physical pin 10: 3Y; tri_state. */
  "3Y": "10",
  /** Physical pin 11: 3Z; tri_state. */
  "3Z": "11",
  /** Physical pin 12: ~{G}; input. */
  "~{G}": "12",
  /** Physical pin 13: 4Z; tri_state. */
  "4Z": "13",
  /** Physical pin 14: 4Y; tri_state. */
  "4Y": "14",
  /** Physical pin 15: 4A; input. */
  "4A": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM26LS31CN extends Component.withPins({
  /** Physical pin 1: 1A; input. */
  "1A": "1",
  /** Physical pin 2: 1Y; tri_state. */
  "1Y": "2",
  /** Physical pin 3: 1Z; tri_state. */
  "1Z": "3",
  /** Physical pin 4: G; input. */
  "G": "4",
  /** Physical pin 5: 2Z; tri_state. */
  "2Z": "5",
  /** Physical pin 6: 2Y; tri_state. */
  "2Y": "6",
  /** Physical pin 7: 2A; input. */
  "2A": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: 3A; input. */
  "3A": "9",
  /** Physical pin 10: 3Y; tri_state. */
  "3Y": "10",
  /** Physical pin 11: 3Z; tri_state. */
  "3Z": "11",
  /** Physical pin 12: ~{G}; input. */
  "~{G}": "12",
  /** Physical pin 13: 4Z; tri_state. */
  "4Z": "13",
  /** Physical pin 14: 4Y; tri_state. */
  "4Y": "14",
  /** Physical pin 15: 4A; input. */
  "4A": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM26LS31MJ extends Component.withPins({
  /** Physical pin 1: 1A; input. */
  "1A": "1",
  /** Physical pin 2: 1Y; tri_state. */
  "1Y": "2",
  /** Physical pin 3: 1Z; tri_state. */
  "1Z": "3",
  /** Physical pin 4: G; input. */
  "G": "4",
  /** Physical pin 5: 2Z; tri_state. */
  "2Z": "5",
  /** Physical pin 6: 2Y; tri_state. */
  "2Y": "6",
  /** Physical pin 7: 2A; input. */
  "2A": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: 3A; input. */
  "3A": "9",
  /** Physical pin 10: 3Y; tri_state. */
  "3Y": "10",
  /** Physical pin 11: 3Z; tri_state. */
  "3Z": "11",
  /** Physical pin 12: ~{G}; input. */
  "~{G}": "12",
  /** Physical pin 13: 4Z; tri_state. */
  "4Z": "13",
  /** Physical pin 14: 4Y; tri_state. */
  "4Y": "14",
  /** Physical pin 15: 4A; input. */
  "4A": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM26LS31xNS extends Component.withPins({
  /** Physical pin 1: 1A; input. */
  "1A": "1",
  /** Physical pin 2: 1Y; tri_state. */
  "1Y": "2",
  /** Physical pin 3: 1Z; tri_state. */
  "1Z": "3",
  /** Physical pin 4: G; input. */
  "G": "4",
  /** Physical pin 5: 2Z; tri_state. */
  "2Z": "5",
  /** Physical pin 6: 2Y; tri_state. */
  "2Y": "6",
  /** Physical pin 7: 2A; input. */
  "2A": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: 3A; input. */
  "3A": "9",
  /** Physical pin 10: 3Y; tri_state. */
  "3Y": "10",
  /** Physical pin 11: 3Z; tri_state. */
  "3Z": "11",
  /** Physical pin 12: ~{G}; input. */
  "~{G}": "12",
  /** Physical pin 13: 4Z; tri_state. */
  "4Z": "13",
  /** Physical pin 14: 4Y; tri_state. */
  "4Y": "14",
  /** Physical pin 15: 4A; input. */
  "4A": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM26LV32xD extends Component.withPins({
  /** Physical pin 1: 1B; input. */
  "1B": "1",
  /** Physical pin 2: 1A; input. */
  "1A": "2",
  /** Physical pin 3: 1Y; tri_state. */
  "1Y": "3",
  /** Physical pin 4: G; input. */
  "G": "4",
  /** Physical pin 5: 2Y; tri_state. */
  "2Y": "5",
  /** Physical pin 6: 2A; input. */
  "2A": "6",
  /** Physical pin 7: 2B; input. */
  "2B": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: 3B; input. */
  "3B": "9",
  /** Physical pin 10: 3A; input. */
  "3A": "10",
  /** Physical pin 11: 3Y; tri_state. */
  "3Y": "11",
  /** Physical pin 12: ~{G}; input. */
  "~{G}": "12",
  /** Physical pin 13: 4Y; tri_state. */
  "4Y": "13",
  /** Physical pin 14: 4A; input. */
  "4A": "14",
  /** Physical pin 15: 4B; input. */
  "4B": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM26LV32xNS extends Component.withPins({
  /** Physical pin 1: 1B; input. */
  "1B": "1",
  /** Physical pin 2: 1A; input. */
  "1A": "2",
  /** Physical pin 3: 1Y; tri_state. */
  "1Y": "3",
  /** Physical pin 4: G; input. */
  "G": "4",
  /** Physical pin 5: 2Y; tri_state. */
  "2Y": "5",
  /** Physical pin 6: 2A; input. */
  "2A": "6",
  /** Physical pin 7: 2B; input. */
  "2B": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: 3B; input. */
  "3B": "9",
  /** Physical pin 10: 3A; input. */
  "3A": "10",
  /** Physical pin 11: 3Y; tri_state. */
  "3Y": "11",
  /** Physical pin 12: ~{G}; input. */
  "~{G}": "12",
  /** Physical pin 13: 4Y; tri_state. */
  "4Y": "13",
  /** Physical pin 14: 4A; input. */
  "4A": "14",
  /** Physical pin 15: 4B; input. */
  "4B": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CDCLVP1102RGT extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: INP; input. */
  "INP": "6",
  /** Physical pin 7: INN; input. */
  "INN": "7",
  /** Physical pin 8: VAC_REF; output. */
  "VAC_REF": "8",
  /** Physical pin 9: OUTP0; output. */
  "OUTP0": "9",
  /** Physical pin 10: OUTN0; output. */
  "OUTN0": "10",
  /** Physical pin 11: OUTP1; output. */
  "OUTP1": "11",
  /** Physical pin 12: OUTN1; output. */
  "OUTN1": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH376T extends Component.withPins({
  /** Physical pin 1: ~{INT}; output. */
  "~{INT}": "1",
  /** Physical pin 2: RSTI; input. */
  "RSTI": "2",
  /** Physical pin 3: ~{SPI}; input. */
  "~{SPI}": "3",
  /** Physical pin 4: TXD; bidirectional. */
  "TXD": "4",
  /** Physical pin 5: RXD; input. */
  "RXD": "5",
  /** Physical pin 6: SD_DI; input. */
  "SD_DI": "6",
  /** Physical pin 7: V3; passive. */
  "V3": "7",
  /** Physical pin 8: UD+; bidirectional. */
  "UD+": "8",
  /** Physical pin 9: UD-; bidirectional. */
  "UD-": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: XI; input. */
  "XI": "11",
  /** Physical pin 12: XO; output. */
  "XO": "12",
  /** Physical pin 13: ~{SCS}; input. */
  "~{SCS}": "13",
  /** Physical pin 14: SCK; input. */
  "SCK": "14",
  /** Physical pin 15: SDI; input. */
  "SDI": "15",
  /** Physical pin 16: SDO; tri_state. */
  "SDO": "16",
  /** Physical pin 17: SD_CS; open_collector. */
  "SD_CS": "17",
  /** Physical pin 18: SD_DO; output. */
  "SD_DO": "18",
  /** Physical pin 19: SD_CK; output. */
  "SD_CK": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS90C124 extends Component.withPins({
  /** Physical pin 1: RPWDNB; input. */
  "RPWDNB": "1",
  /** Physical pin 2: RESRVD; input. */
  "RESRVD": "2",
  /** Physical pin 3: ROUT23; output. */
  "ROUT23": "3",
  /** Physical pin 4: ROUT22; output. */
  "ROUT22": "4",
  /** Physical pin 5: ROUT21; output. */
  "ROUT21": "5",
  /** Physical pin 6: ROUT20; output. */
  "ROUT20": "6",
  /** Physical pin 7: VDDOR3; power_in. */
  "VDDOR3": "7",
  /** Physical pin 8: VSSOR3; power_in. */
  "VSSOR3": "8",
  /** Physical pin 9: ROUT19; output. */
  "ROUT19": "9",
  /** Physical pin 10: ROUT18; output. */
  "ROUT18": "10",
  /** Physical pin 11: ROUT17; output. */
  "ROUT17": "11",
  /** Physical pin 12: ROUT16; output. */
  "ROUT16": "12",
  /** Physical pin 13: ROUT15; output. */
  "ROUT15": "13",
  /** Physical pin 14: ROUT14; output. */
  "ROUT14": "14",
  /** Physical pin 15: ROUT13; output. */
  "ROUT13": "15",
  /** Physical pin 16: ROUT12; output. */
  "ROUT12": "16",
  /** Physical pin 17: LOCK; output. */
  "LOCK": "17",
  /** Physical pin 18: RCLK; output. */
  "RCLK": "18",
  /** Physical pin 19: VSSOR2; power_in. */
  "VSSOR2": "19",
  /** Physical pin 20: VDDOR2; power_in. */
  "VDDOR2": "20",
  /** Physical pin 21: ROUT11; output. */
  "ROUT11": "21",
  /** Physical pin 22: ROUT10; output. */
  "ROUT10": "22",
  /** Physical pin 23: ROUT9; output. */
  "ROUT9": "23",
  /** Physical pin 24: ROUT8; output. */
  "ROUT8": "24",
  /** Physical pin 25: ROUT7; output. */
  "ROUT7": "25",
  /** Physical pin 26: ROUT6; output. */
  "ROUT6": "26",
  /** Physical pin 27: ROUT5; output. */
  "ROUT5": "27",
  /** Physical pin 28: ROUT4; output. */
  "ROUT4": "28",
  /** Physical pin 29: VSSOR1; power_in. */
  "VSSOR1": "29",
  /** Physical pin 30: VDDOR1; power_in. */
  "VDDOR1": "30",
  /** Physical pin 31: ROUT3; output. */
  "ROUT3": "31",
  /** Physical pin 32: ROUT2; output. */
  "ROUT2": "32",
  /** Physical pin 33: ROUT1; output. */
  "ROUT1": "33",
  /** Physical pin 34: ROUT0; output. */
  "ROUT0": "34",
  /** Physical pin 35: VSSR0; power_in. */
  "VSSR0": "35",
  /** Physical pin 36: VDDR0; power_in. */
  "VDDR0": "36",
  /** Physical pin 37: VDDR1; power_in. */
  "VDDR1": "37",
  /** Physical pin 38: VSSR1; power_in. */
  "VSSR1": "38",
  /** Physical pin 39: VDDIR; power_in. */
  "VDDIR": "39",
  /** Physical pin 40: VSSIR; power_in. */
  "VSSIR": "40",
  /** Physical pin 41: RIN+; input. */
  "RIN+": "41",
  /** Physical pin 42: RIN-; input. */
  "RIN-": "42",
  /** Physical pin 43: RRFB; input. */
  "RRFB": "43",
  /** Physical pin 44: VSSPR1; power_in. */
  "VSSPR1": "44",
  /** Physical pin 45: VDDPR1; power_in. */
  "VDDPR1": "45",
  /** Physical pin 46: VSSPR0; power_in. */
  "VSSPR0": "46",
  /** Physical pin 47: VDDPR0; power_in. */
  "VDDPR0": "47",
  /** Physical pin 48: REN; input. */
  "REN": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS90C241 extends Component.withPins({
  /** Physical pin 1: DIN20; input. */
  "DIN20": "1",
  /** Physical pin 2: DIN21; input. */
  "DIN21": "2",
  /** Physical pin 3: DIN22; input. */
  "DIN22": "3",
  /** Physical pin 4: DIN23; input. */
  "DIN23": "4",
  /** Physical pin 5: DCAOFF; input. */
  "DCAOFF": "5",
  /** Physical pin 6: VSSL; power_in. */
  "VSSL": "6",
  /** Physical pin 7: VDDL; power_in. */
  "VDDL": "7",
  /** Physical pin 8: DCBOFF; input. */
  "DCBOFF": "8",
  /** Physical pin 9: TPWDNB; input. */
  "TPWDNB": "9",
  /** Physical pin 10: TCLK; input. */
  "TCLK": "10",
  /** Physical pin 11: TRFB; input. */
  "TRFB": "11",
  /** Physical pin 12: VODSEL; input. */
  "VODSEL": "12",
  /** Physical pin 13: RESRVD; input. */
  "RESRVD": "13",
  /** Physical pin 14: VDDPT1; power_in. */
  "VDDPT1": "14",
  /** Physical pin 15: VSSPT1; power_in. */
  "VSSPT1": "15",
  /** Physical pin 16: VDDPT0; power_in. */
  "VDDPT0": "16",
  /** Physical pin 17: VSSPT0; power_in. */
  "VSSPT0": "17",
  /** Physical pin 18: DEN; input. */
  "DEN": "18",
  /** Physical pin 19: DOUT-; output. */
  "DOUT-": "19",
  /** Physical pin 20: DOUT+; output. */
  "DOUT+": "20",
  /** Physical pin 21: VSSDR; power_in. */
  "VSSDR": "21",
  /** Physical pin 22: VDDDR; power_in. */
  "VDDDR": "22",
  /** Physical pin 23: PRE; input. */
  "PRE": "23",
  /** Physical pin 24: VSS; power_in. */
  "VSS": "24",
  /** Physical pin 25: DIN0; input. */
  "DIN0": "25",
  /** Physical pin 26: DIN1; input. */
  "DIN1": "26",
  /** Physical pin 27: DIN2; input. */
  "DIN2": "27",
  /** Physical pin 28: DIN3; input. */
  "DIN3": "28",
  /** Physical pin 29: DIN4; input. */
  "DIN4": "29",
  /** Physical pin 30: VDDT; power_in. */
  "VDDT": "30",
  /** Physical pin 31: VSST; power_in. */
  "VSST": "31",
  /** Physical pin 32: DIN5; input. */
  "DIN5": "32",
  /** Physical pin 33: DIN6; input. */
  "DIN6": "33",
  /** Physical pin 34: DIN7; input. */
  "DIN7": "34",
  /** Physical pin 35: DIN8; input. */
  "DIN8": "35",
  /** Physical pin 36: DIN9; input. */
  "DIN9": "36",
  /** Physical pin 37: DIN10; input. */
  "DIN10": "37",
  /** Physical pin 38: DIN11; input. */
  "DIN11": "38",
  /** Physical pin 39: DIN12; input. */
  "DIN12": "39",
  /** Physical pin 40: DIN13; input. */
  "DIN13": "40",
  /** Physical pin 41: DIN14; input. */
  "DIN14": "41",
  /** Physical pin 42: VDDIT; power_in. */
  "VDDIT": "42",
  /** Physical pin 43: VSSIT; power_in. */
  "VSSIT": "43",
  /** Physical pin 44: DIN15; input. */
  "DIN15": "44",
  /** Physical pin 45: DIN16; input. */
  "DIN16": "45",
  /** Physical pin 46: DIN17; input. */
  "DIN17": "46",
  /** Physical pin 47: DIN18; input. */
  "DIN18": "47",
  /** Physical pin 48: DIN19; input. */
  "DIN19": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS90C402 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO1; output. */
  "RO1": "2",
  /** Physical pin 3: RI1+; input. */
  "RI1+": "3",
  /** Physical pin 4: RI1-; input. */
  "RI1-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: RO2; output. */
  "RO2": "6",
  /** Physical pin 7: RI2+; input. */
  "RI2+": "7",
  /** Physical pin 8: RI2-; input. */
  "RI2-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS90LV011A extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT-; output. */
  "OUT-": "3",
  /** Physical pin 4: OUT+; output. */
  "OUT+": "4",
  /** Physical pin 5: IN; input. */
  "IN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS90LV027A extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: DI1; input. */
  "DI1": "2",
  /** Physical pin 3: DI2; input. */
  "DI2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DO-2; output. */
  "DO-2": "5",
  /** Physical pin 6: DO+2; output. */
  "DO+2": "6",
  /** Physical pin 7: DO+1; output. */
  "DO+1": "7",
  /** Physical pin 8: DO-1; output. */
  "DO-1": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FD1771 extends Component.withPins({
  /** Physical pin 1: VBB; power_in. */
  "VBB": "1",
  /** Physical pin 2: ~{WE}; input. */
  "~{WE}": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A1; input. */
  "A1": "6",
  /** Physical pin 7: DI0; tri_state. */
  "DI0": "7",
  /** Physical pin 8: DI1; tri_state. */
  "DI1": "8",
  /** Physical pin 9: DI2; tri_state. */
  "DI2": "9",
  /** Physical pin 10: DI3; tri_state. */
  "DI3": "10",
  /** Physical pin 11: DI4; tri_state. */
  "DI4": "11",
  /** Physical pin 12: DI5; tri_state. */
  "DI5": "12",
  /** Physical pin 13: DI6; tri_state. */
  "DI6": "13",
  /** Physical pin 14: DI7; tri_state. */
  "DI7": "14",
  /** Physical pin 15: ~{PH1}/STEP; output. */
  "~{PH1}/STEP": "15",
  /** Physical pin 16: ~{PH2}/DIRC; output. */
  "~{PH2}/DIRC": "16",
  /** Physical pin 17: PH3; output. */
  "PH3": "17",
  /** Physical pin 18: ~{3PM}; input. */
  "~{3PM}": "18",
  /** Physical pin 19: ~{MR}; input. */
  "~{MR}": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{TEST}; input. */
  "~{TEST}": "22",
  /** Physical pin 23: HLT; input. */
  "HLT": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
  /** Physical pin 25: ~{XTDS}; input. */
  "~{XTDS}": "25",
  /** Physical pin 26: FDCLK; input. */
  "FDCLK": "26",
  /** Physical pin 27: FDDATA; input. */
  "FDDATA": "27",
  /** Physical pin 29: TG43; output. */
  "TG43": "29",
  /** Physical pin 30: WG; output. */
  "WG": "30",
  /** Physical pin 31: WD; output. */
  "WD": "31",
  /** Physical pin 32: READY; input. */
  "READY": "32",
  /** Physical pin 33: ~{WF}; input. */
  "~{WF}": "33",
  /** Physical pin 34: ~{TR00}; input. */
  "~{TR00}": "34",
  /** Physical pin 35: ~{IP}; input. */
  "~{IP}": "35",
  /** Physical pin 36: ~{WPRT}; input. */
  "~{WPRT}": "36",
  /** Physical pin 37: ~{DINT}; input. */
  "~{DINT}": "37",
  /** Physical pin 38: DRQ; output. */
  "DRQ": "38",
  /** Physical pin 39: INTRQ; input. */
  "INTRQ": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FIN1019M extends Component.withPins({
  /** Physical pin 1: DE; input. */
  "DE": "1",
  /** Physical pin 2: DI; input. */
  "DI": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: RO; tri_state. */
  "RO": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{RE}; input. */
  "~{RE}": "8",
  /** Physical pin 9: RI-; input. */
  "RI-": "9",
  /** Physical pin 10: RI+; input. */
  "RI+": "10",
  /** Physical pin 11: DO-; tri_state. */
  "DO-": "11",
  /** Physical pin 12: DO+; tri_state. */
  "DO+": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FIN1019MTC extends Component.withPins({
  /** Physical pin 1: DE; input. */
  "DE": "1",
  /** Physical pin 2: DI; input. */
  "DI": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: RO; tri_state. */
  "RO": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{RE}; input. */
  "~{RE}": "8",
  /** Physical pin 9: RI-; input. */
  "RI-": "9",
  /** Physical pin 10: RI+; input. */
  "RI+": "10",
  /** Physical pin 11: DO-; tri_state. */
  "DO-": "11",
  /** Physical pin 12: DO+; tri_state. */
  "DO+": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HT12D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: A2; input. */
  "A2": "4",
  /** Physical pin 5: A3; input. */
  "A3": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A6; input. */
  "A6": "8",
  /** Physical pin 9: A7; input. */
  "A7": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: D8; output. */
  "D8": "11",
  /** Physical pin 12: D9; output. */
  "D9": "12",
  /** Physical pin 13: D10; output. */
  "D10": "13",
  /** Physical pin 14: D11; output. */
  "D11": "14",
  /** Physical pin 15: DIN; input. */
  "DIN": "15",
  /** Physical pin 16: OSC2; output. */
  "OSC2": "16",
  /** Physical pin 17: OSC1; input. */
  "OSC1": "17",
  /** Physical pin 18: VT; output. */
  "VT": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HT12E extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: A2; input. */
  "A2": "4",
  /** Physical pin 5: A3; input. */
  "A3": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A6; input. */
  "A6": "8",
  /** Physical pin 9: A7; input. */
  "A7": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: AD8; output. */
  "AD8": "11",
  /** Physical pin 12: AD9; output. */
  "AD9": "12",
  /** Physical pin 13: AD10; output. */
  "AD10": "13",
  /** Physical pin 14: AD11; output. */
  "AD11": "14",
  /** Physical pin 15: ~{TE}; input. */
  "~{TE}": "15",
  /** Physical pin 16: OSC2; output. */
  "OSC2": "16",
  /** Physical pin 17: OSC1; input. */
  "OSC1": "17",
  /** Physical pin 18: DOUT; output. */
  "DOUT": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1518 extends Component.withPins({
  /** Physical pin 1: B1; input. */
  "B1": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: Out1; tri_state. */
  "Out1": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: Out2; tri_state. */
  "Out2": "5",
  /** Physical pin 6: A2; input. */
  "A2": "6",
  /** Physical pin 7: B2; input. */
  "B2": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: B3; input. */
  "B3": "9",
  /** Physical pin 10: A3; input. */
  "A3": "10",
  /** Physical pin 11: Out3; tri_state. */
  "Out3": "11",
  /** Physical pin 12: ~{EN}; input. */
  "~{EN}": "12",
  /** Physical pin 13: Out4; tri_state. */
  "Out4": "13",
  /** Physical pin 14: A4; input. */
  "A4": "14",
  /** Physical pin 15: B4; input. */
  "B4": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1519 extends Component.withPins({
  /** Physical pin 1: B1; input. */
  "B1": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: Out1; tri_state. */
  "Out1": "3",
  /** Physical pin 4: EN12; input. */
  "EN12": "4",
  /** Physical pin 5: Out2; tri_state. */
  "Out2": "5",
  /** Physical pin 6: A2; input. */
  "A2": "6",
  /** Physical pin 7: B2; input. */
  "B2": "7",
  /** Physical pin 9: B3; input. */
  "B3": "9",
  /** Physical pin 10: A3; input. */
  "A3": "10",
  /** Physical pin 11: Out3; tri_state. */
  "Out3": "11",
  /** Physical pin 12: EN34; input. */
  "EN34": "12",
  /** Physical pin 13: Out4; tri_state. */
  "Out4": "13",
  /** Physical pin 14: A4; input. */
  "A4": "14",
  /** Physical pin 15: B4; input. */
  "B4": "15",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1688 extends Component.withPins({
  /** Physical pin 1: DI1; input. */
  "DI1": "1",
  /** Physical pin 2: DO1A; output. */
  "DO1A": "2",
  /** Physical pin 3: DO1B; output. */
  "DO1B": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: DO2B; output. */
  "DO2B": "5",
  /** Physical pin 6: DO2A; output. */
  "DO2A": "6",
  /** Physical pin 7: DI2; input. */
  "DI2": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: DI3; input. */
  "DI3": "9",
  /** Physical pin 10: DO3A; output. */
  "DO3A": "10",
  /** Physical pin 11: DO3B; output. */
  "DO3B": "11",
  /** Physical pin 12: ~{EN}; input. */
  "~{EN}": "12",
  /** Physical pin 13: DO4B; output. */
  "DO4B": "13",
  /** Physical pin 14: DO4A; output. */
  "DO4A": "14",
  /** Physical pin 15: DI4; input. */
  "DI4": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1689 extends Component.withPins({
  /** Physical pin 1: DI1; input. */
  "DI1": "1",
  /** Physical pin 2: DO1A; output. */
  "DO1A": "2",
  /** Physical pin 3: DO1B; output. */
  "DO1B": "3",
  /** Physical pin 4: EN12; input. */
  "EN12": "4",
  /** Physical pin 5: DO2B; output. */
  "DO2B": "5",
  /** Physical pin 6: DO2A; output. */
  "DO2A": "6",
  /** Physical pin 7: DI2; input. */
  "DI2": "7",
  /** Physical pin 9: DI3; input. */
  "DI3": "9",
  /** Physical pin 10: DO3A; output. */
  "DO3A": "10",
  /** Physical pin 11: DO3B; output. */
  "DO3B": "11",
  /** Physical pin 12: EN34; input. */
  "EN34": "12",
  /** Physical pin 13: DO4B; output. */
  "DO4B": "13",
  /** Physical pin 14: DO4A; output. */
  "DO4A": "14",
  /** Physical pin 15: DI4; input. */
  "DI4": "15",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6957xDD_1 extends Component.withPins({
  /** Physical pin 1: FILTA; input. */
  "FILTA": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: FILTB; input. */
  "FILTB": "6",
  /** Physical pin 7: SD2; input. */
  "SD2": "7",
  /** Physical pin 8: OUT2+; open_emitter. */
  "OUT2+": "8",
  /** Physical pin 9: OUT2-; open_emitter. */
  "OUT2-": "9",
  /** Physical pin 10: OUT1-; open_emitter. */
  "OUT1-": "10",
  /** Physical pin 11: OUT1+; open_emitter. */
  "OUT1+": "11",
  /** Physical pin 12: SD1; input. */
  "SD1": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6957xDD_2 extends Component.withPins({
  /** Physical pin 1: FILTA; input. */
  "FILTA": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: FILTB; input. */
  "FILTB": "6",
  /** Physical pin 7: SD2; input. */
  "SD2": "7",
  /** Physical pin 8: OUT2+; output. */
  "OUT2+": "8",
  /** Physical pin 9: OUT2-; output. */
  "OUT2-": "9",
  /** Physical pin 10: OUT1-; output. */
  "OUT1-": "10",
  /** Physical pin 11: OUT1+; output. */
  "OUT1+": "11",
  /** Physical pin 12: SD1; input. */
  "SD1": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6957xDD_3 extends Component.withPins({
  /** Physical pin 1: FILTA; input. */
  "FILTA": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: FILTB; input. */
  "FILTB": "6",
  /** Physical pin 7: SD2; input. */
  "SD2": "7",
  /** Physical pin 8: GNDOUT; output. */
  "GNDOUT": "8",
  /** Physical pin 9: OUT2; output. */
  "OUT2": "9",
  /** Physical pin 10: OUT1; output. */
  "OUT1": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: SD1; input. */
  "SD1": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6957xDD_4 extends Component.withPins({
  /** Physical pin 1: FILTA; input. */
  "FILTA": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: FILTB; input. */
  "FILTB": "6",
  /** Physical pin 7: SD2; input. */
  "SD2": "7",
  /** Physical pin 8: GNDOUT; output. */
  "GNDOUT": "8",
  /** Physical pin 9: OUT2; output. */
  "OUT2": "9",
  /** Physical pin 10: OUT1; output. */
  "OUT1": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: SD1; input. */
  "SD1": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6957xMS_1 extends Component.withPins({
  /** Physical pin 1: FILTA; input. */
  "FILTA": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: FILTB; input. */
  "FILTB": "6",
  /** Physical pin 7: SD2; input. */
  "SD2": "7",
  /** Physical pin 8: OUT2+; open_emitter. */
  "OUT2+": "8",
  /** Physical pin 9: OUT2-; open_emitter. */
  "OUT2-": "9",
  /** Physical pin 10: OUT1-; open_emitter. */
  "OUT1-": "10",
  /** Physical pin 11: OUT1+; open_emitter. */
  "OUT1+": "11",
  /** Physical pin 12: SD1; input. */
  "SD1": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6957xMS_2 extends Component.withPins({
  /** Physical pin 1: FILTA; input. */
  "FILTA": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: FILTB; input. */
  "FILTB": "6",
  /** Physical pin 7: SD2; input. */
  "SD2": "7",
  /** Physical pin 8: OUT2+; output. */
  "OUT2+": "8",
  /** Physical pin 9: OUT2-; output. */
  "OUT2-": "9",
  /** Physical pin 10: OUT1-; output. */
  "OUT1-": "10",
  /** Physical pin 11: OUT1+; output. */
  "OUT1+": "11",
  /** Physical pin 12: SD1; input. */
  "SD1": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6957xMS_3 extends Component.withPins({
  /** Physical pin 1: FILTA; input. */
  "FILTA": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: FILTB; input. */
  "FILTB": "6",
  /** Physical pin 7: SD2; input. */
  "SD2": "7",
  /** Physical pin 8: GNDOUT; output. */
  "GNDOUT": "8",
  /** Physical pin 9: OUT2; output. */
  "OUT2": "9",
  /** Physical pin 10: OUT1; output. */
  "OUT1": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: SD1; input. */
  "SD1": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6957xMS_4 extends Component.withPins({
  /** Physical pin 1: FILTA; input. */
  "FILTA": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: FILTB; input. */
  "FILTB": "6",
  /** Physical pin 7: SD2; input. */
  "SD2": "7",
  /** Physical pin 8: GNDOUT; output. */
  "GNDOUT": "8",
  /** Physical pin 9: OUT2; output. */
  "OUT2": "9",
  /** Physical pin 10: OUT1; output. */
  "OUT1": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: SD1; input. */
  "SD1": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX6816 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC100EPT22D extends Component.withPins({
  /** Physical pin 1: Q0; output. */
  "Q0": "1",
  /** Physical pin 2: ~{Q0}; output. */
  "~{Q0}": "2",
  /** Physical pin 3: Q1; output. */
  "Q1": "3",
  /** Physical pin 4: ~{Q1}; output. */
  "~{Q1}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: D1; input. */
  "D1": "6",
  /** Physical pin 7: D0; input. */
  "D0": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC100EPT22DT extends Component.withPins({
  /** Physical pin 1: Q0; output. */
  "Q0": "1",
  /** Physical pin 2: ~{Q0}; output. */
  "~{Q0}": "2",
  /** Physical pin 3: Q1; output. */
  "Q1": "3",
  /** Physical pin 4: ~{Q1}; output. */
  "~{Q1}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: D1; input. */
  "D1": "6",
  /** Physical pin 7: D0; input. */
  "D0": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC100LVELT22D extends Component.withPins({
  /** Physical pin 1: Q0; output. */
  "Q0": "1",
  /** Physical pin 2: ~{Q0}; output. */
  "~{Q0}": "2",
  /** Physical pin 3: Q1; output. */
  "Q1": "3",
  /** Physical pin 4: ~{Q1}; output. */
  "~{Q1}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: D1; input. */
  "D1": "6",
  /** Physical pin 7: D0; input. */
  "D0": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC100LVELT22DT extends Component.withPins({
  /** Physical pin 1: Q0; output. */
  "Q0": "1",
  /** Physical pin 2: ~{Q0}; output. */
  "~{Q0}": "2",
  /** Physical pin 3: Q1; output. */
  "Q1": "3",
  /** Physical pin 4: ~{Q1}; output. */
  "~{Q1}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: D1; input. */
  "D1": "6",
  /** Physical pin 7: D0; input. */
  "D0": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6840 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{G2}; input. */
  "~{G2}": "2",
  /** Physical pin 3: O2; output. */
  "O2": "3",
  /** Physical pin 4: ~{C2}; input. */
  "~{C2}": "4",
  /** Physical pin 5: ~{G3}; input. */
  "~{G3}": "5",
  /** Physical pin 6: O3; output. */
  "O3": "6",
  /** Physical pin 7: ~{C3}; input. */
  "~{C3}": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: ~{IRQ}; output. */
  "~{IRQ}": "9",
  /** Physical pin 10: RS0; input. */
  "RS0": "10",
  /** Physical pin 11: RS1; input. */
  "RS1": "11",
  /** Physical pin 12: RS2; input. */
  "RS2": "12",
  /** Physical pin 13: R/~{W}; input. */
  "R/~{W}": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: ~{CS0}; input. */
  "~{CS0}": "15",
  /** Physical pin 16: CS1; input. */
  "CS1": "16",
  /** Physical pin 17: E; input. */
  "E": "17",
  /** Physical pin 18: D7; input. */
  "D7": "18",
  /** Physical pin 19: D6; input. */
  "D6": "19",
  /** Physical pin 20: D5; input. */
  "D5": "20",
  /** Physical pin 21: D4; input. */
  "D4": "21",
  /** Physical pin 22: D3; input. */
  "D3": "22",
  /** Physical pin 23: D2; input. */
  "D2": "23",
  /** Physical pin 24: D1; input. */
  "D1": "24",
  /** Physical pin 25: D0; input. */
  "D0": "25",
  /** Physical pin 26: ~{G1}; input. */
  "~{G1}": "26",
  /** Physical pin 27: O1; output. */
  "O1": "27",
  /** Physical pin 28: ~{C1}; input. */
  "~{C1}": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6843 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS_1": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: FIR; output. */
  "FIR": "3",
  /** Physical pin 4: FI; input. */
  "FI": "4",
  /** Physical pin 5: WPT; input. */
  "WPT": "5",
  /** Physical pin 6: WGT; output. */
  "WGT": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: HDR; output. */
  "HDR": "8",
  /** Physical pin 9: DCK; input. */
  "DCK": "9",
  /** Physical pin 10: LCT; output. */
  "LCT": "10",
  /** Physical pin 11: IDX; input. */
  "IDX": "11",
  /** Physical pin 12: CLK; input. */
  "CLK": "12",
  /** Physical pin 13: RDY; input. */
  "RDY": "13",
  /** Physical pin 14: VFOC; output. */
  "VFOC": "14",
  /** Physical pin 15: STP; output. */
  "STP": "15",
  /** Physical pin 16: HLD; output. */
  "HLD": "16",
  /** Physical pin 17: RS2; input. */
  "RS2": "17",
  /** Physical pin 18: RS1; input. */
  "RS1": "18",
  /** Physical pin 19: RS0; input. */
  "RS0": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: TxAck; input. */
  "TxAck": "21",
  /** Physical pin 22: R/~{W}; input. */
  "R/~{W}": "22",
  /** Physical pin 23: E; input. */
  "E": "23",
  /** Physical pin 24: ~{CS}; input. */
  "~{CS}": "24",
  /** Physical pin 25: BD; output. */
  "BD": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: TxRQ; output. */
  "TxRQ": "36",
  /** Physical pin 37: ~{IRQ}; open_collector. */
  "~{IRQ}": "37",
  /** Physical pin 38: RDT; input. */
  "RDT": "38",
  /** Physical pin 39: WDT; output. */
  "WDT": "39",
  /** Physical pin 40: TRZ; input. */
  "TRZ": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6844 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{CS}/Tx_AKB; bidirectional. */
  "~{CS}/Tx_AKB": "2",
  /** Physical pin 3: R/~{W}; bidirectional. */
  "R/~{W}": "3",
  /** Physical pin 4: A0; bidirectional. */
  "A0": "4",
  /** Physical pin 5: A1; bidirectional. */
  "A1": "5",
  /** Physical pin 6: A2; bidirectional. */
  "A2": "6",
  /** Physical pin 7: A3; bidirectional. */
  "A3": "7",
  /** Physical pin 8: A4; bidirectional. */
  "A4": "8",
  /** Physical pin 9: A5; output. */
  "A5": "9",
  /** Physical pin 10: A6; output. */
  "A6": "10",
  /** Physical pin 11: A7; output. */
  "A7": "11",
  /** Physical pin 12: A8; output. */
  "A8": "12",
  /** Physical pin 13: A9; output. */
  "A9": "13",
  /** Physical pin 14: A10; output. */
  "A10": "14",
  /** Physical pin 15: A11; output. */
  "A11": "15",
  /** Physical pin 16: A12; output. */
  "A12": "16",
  /** Physical pin 17: A13; output. */
  "A13": "17",
  /** Physical pin 18: A14; output. */
  "A14": "18",
  /** Physical pin 19: A15; output. */
  "A15": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: D7; bidirectional. */
  "D7": "21",
  /** Physical pin 22: D6; bidirectional. */
  "D6": "22",
  /** Physical pin 23: D5; bidirectional. */
  "D5": "23",
  /** Physical pin 24: D4; bidirectional. */
  "D4": "24",
  /** Physical pin 25: D3; bidirectional. */
  "D3": "25",
  /** Physical pin 26: D2; bidirectional. */
  "D2": "26",
  /** Physical pin 27: D1; bidirectional. */
  "D1": "27",
  /** Physical pin 28: D0; bidirectional. */
  "D0": "28",
  /** Physical pin 29: Tx_RQ3; input. */
  "Tx_RQ3": "29",
  /** Physical pin 30: Tx_RQ2; input. */
  "Tx_RQ2": "30",
  /** Physical pin 31: Tx_RQ1; input. */
  "Tx_RQ1": "31",
  /** Physical pin 32: Tx_RQ0; input. */
  "Tx_RQ0": "32",
  /** Physical pin 33: ~{IRQ}/~{DEND}; output. */
  "~{IRQ}/~{DEND}": "33",
  /** Physical pin 34: ~{Tx_STB}; output. */
  "~{Tx_STB}": "34",
  /** Physical pin 35: Tx_AKA; output. */
  "Tx_AKA": "35",
  /** Physical pin 36: ~{DRQ2}; output. */
  "~{DRQ2}": "36",
  /** Physical pin 37: ~{DRQ1}; output. */
  "~{DRQ1}": "37",
  /** Physical pin 38: DGRNT; input. */
  "DGRNT": "38",
  /** Physical pin 39: ~{RESET}; input. */
  "~{RESET}": "39",
  /** Physical pin 40: E; input. */
  "E": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A21 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: PA0; bidirectional. */
  "PA0": "2",
  /** Physical pin 3: PA1; bidirectional. */
  "PA1": "3",
  /** Physical pin 4: PA2; bidirectional. */
  "PA2": "4",
  /** Physical pin 5: PA3; bidirectional. */
  "PA3": "5",
  /** Physical pin 6: PA4; bidirectional. */
  "PA4": "6",
  /** Physical pin 7: PA5; bidirectional. */
  "PA5": "7",
  /** Physical pin 8: PA6; bidirectional. */
  "PA6": "8",
  /** Physical pin 9: PA7; bidirectional. */
  "PA7": "9",
  /** Physical pin 10: PB0; bidirectional. */
  "PB0": "10",
  /** Physical pin 11: PB1; bidirectional. */
  "PB1": "11",
  /** Physical pin 12: PB2; bidirectional. */
  "PB2": "12",
  /** Physical pin 13: PB3; bidirectional. */
  "PB3": "13",
  /** Physical pin 14: PB4; bidirectional. */
  "PB4": "14",
  /** Physical pin 15: PB5; bidirectional. */
  "PB5": "15",
  /** Physical pin 16: PB6; bidirectional. */
  "PB6": "16",
  /** Physical pin 17: PB7; bidirectional. */
  "PB7": "17",
  /** Physical pin 18: CB1; input. */
  "CB1": "18",
  /** Physical pin 19: CB2; bidirectional. */
  "CB2": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: R/~{W}; input. */
  "R/~{W}": "21",
  /** Physical pin 22: CS0; input. */
  "CS0": "22",
  /** Physical pin 23: ~{CS2}; input. */
  "~{CS2}": "23",
  /** Physical pin 24: CS1; input. */
  "CS1": "24",
  /** Physical pin 25: ENABLE; input. */
  "ENABLE": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: ~{RESET}; input. */
  "~{RESET}": "34",
  /** Physical pin 35: RS1; input. */
  "RS1": "35",
  /** Physical pin 36: RS0; input. */
  "RS0": "36",
  /** Physical pin 37: ~{IRQB}; open_collector. */
  "~{IRQB}": "37",
  /** Physical pin 38: ~{IRQA}; open_collector. */
  "~{IRQA}": "38",
  /** Physical pin 39: CA2; bidirectional. */
  "CA2": "39",
  /** Physical pin 40: CA1; input. */
  "CA1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A40 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{G2}; input. */
  "~{G2}": "2",
  /** Physical pin 3: O2; output. */
  "O2": "3",
  /** Physical pin 4: ~{C2}; input. */
  "~{C2}": "4",
  /** Physical pin 5: ~{G3}; input. */
  "~{G3}": "5",
  /** Physical pin 6: O3; output. */
  "O3": "6",
  /** Physical pin 7: ~{C3}; input. */
  "~{C3}": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: ~{IRQ}; output. */
  "~{IRQ}": "9",
  /** Physical pin 10: RS0; input. */
  "RS0": "10",
  /** Physical pin 11: RS1; input. */
  "RS1": "11",
  /** Physical pin 12: RS2; input. */
  "RS2": "12",
  /** Physical pin 13: R/~{W}; input. */
  "R/~{W}": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: ~{CS0}; input. */
  "~{CS0}": "15",
  /** Physical pin 16: CS1; input. */
  "CS1": "16",
  /** Physical pin 17: E; input. */
  "E": "17",
  /** Physical pin 18: D7; input. */
  "D7": "18",
  /** Physical pin 19: D6; input. */
  "D6": "19",
  /** Physical pin 20: D5; input. */
  "D5": "20",
  /** Physical pin 21: D4; input. */
  "D4": "21",
  /** Physical pin 22: D3; input. */
  "D3": "22",
  /** Physical pin 23: D2; input. */
  "D2": "23",
  /** Physical pin 24: D1; input. */
  "D1": "24",
  /** Physical pin 25: D0; input. */
  "D0": "25",
  /** Physical pin 26: ~{G1}; input. */
  "~{G1}": "26",
  /** Physical pin 27: O1; output. */
  "O1": "27",
  /** Physical pin 28: ~{C1}; input. */
  "~{C1}": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A44 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{CS}/Tx_AKB; bidirectional. */
  "~{CS}/Tx_AKB": "2",
  /** Physical pin 3: R/~{W}; bidirectional. */
  "R/~{W}": "3",
  /** Physical pin 4: A0; bidirectional. */
  "A0": "4",
  /** Physical pin 5: A1; bidirectional. */
  "A1": "5",
  /** Physical pin 6: A2; bidirectional. */
  "A2": "6",
  /** Physical pin 7: A3; bidirectional. */
  "A3": "7",
  /** Physical pin 8: A4; bidirectional. */
  "A4": "8",
  /** Physical pin 9: A5; output. */
  "A5": "9",
  /** Physical pin 10: A6; output. */
  "A6": "10",
  /** Physical pin 11: A7; output. */
  "A7": "11",
  /** Physical pin 12: A8; output. */
  "A8": "12",
  /** Physical pin 13: A9; output. */
  "A9": "13",
  /** Physical pin 14: A10; output. */
  "A10": "14",
  /** Physical pin 15: A11; output. */
  "A11": "15",
  /** Physical pin 16: A12; output. */
  "A12": "16",
  /** Physical pin 17: A13; output. */
  "A13": "17",
  /** Physical pin 18: A14; output. */
  "A14": "18",
  /** Physical pin 19: A15; output. */
  "A15": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: D7; bidirectional. */
  "D7": "21",
  /** Physical pin 22: D6; bidirectional. */
  "D6": "22",
  /** Physical pin 23: D5; bidirectional. */
  "D5": "23",
  /** Physical pin 24: D4; bidirectional. */
  "D4": "24",
  /** Physical pin 25: D3; bidirectional. */
  "D3": "25",
  /** Physical pin 26: D2; bidirectional. */
  "D2": "26",
  /** Physical pin 27: D1; bidirectional. */
  "D1": "27",
  /** Physical pin 28: D0; bidirectional. */
  "D0": "28",
  /** Physical pin 29: Tx_RQ3; input. */
  "Tx_RQ3": "29",
  /** Physical pin 30: Tx_RQ2; input. */
  "Tx_RQ2": "30",
  /** Physical pin 31: Tx_RQ1; input. */
  "Tx_RQ1": "31",
  /** Physical pin 32: Tx_RQ0; input. */
  "Tx_RQ0": "32",
  /** Physical pin 33: ~{IRQ}/~{DEND}; output. */
  "~{IRQ}/~{DEND}": "33",
  /** Physical pin 34: ~{Tx_STB}; output. */
  "~{Tx_STB}": "34",
  /** Physical pin 35: Tx_AKA; output. */
  "Tx_AKA": "35",
  /** Physical pin 36: ~{DRQ2}; output. */
  "~{DRQ2}": "36",
  /** Physical pin 37: ~{DRQ1}; output. */
  "~{DRQ1}": "37",
  /** Physical pin 38: DGRNT; input. */
  "DGRNT": "38",
  /** Physical pin 39: ~{RESET}; input. */
  "~{RESET}": "39",
  /** Physical pin 40: E; input. */
  "E": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B21 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: PA0; bidirectional. */
  "PA0": "2",
  /** Physical pin 3: PA1; bidirectional. */
  "PA1": "3",
  /** Physical pin 4: PA2; bidirectional. */
  "PA2": "4",
  /** Physical pin 5: PA3; bidirectional. */
  "PA3": "5",
  /** Physical pin 6: PA4; bidirectional. */
  "PA4": "6",
  /** Physical pin 7: PA5; bidirectional. */
  "PA5": "7",
  /** Physical pin 8: PA6; bidirectional. */
  "PA6": "8",
  /** Physical pin 9: PA7; bidirectional. */
  "PA7": "9",
  /** Physical pin 10: PB0; bidirectional. */
  "PB0": "10",
  /** Physical pin 11: PB1; bidirectional. */
  "PB1": "11",
  /** Physical pin 12: PB2; bidirectional. */
  "PB2": "12",
  /** Physical pin 13: PB3; bidirectional. */
  "PB3": "13",
  /** Physical pin 14: PB4; bidirectional. */
  "PB4": "14",
  /** Physical pin 15: PB5; bidirectional. */
  "PB5": "15",
  /** Physical pin 16: PB6; bidirectional. */
  "PB6": "16",
  /** Physical pin 17: PB7; bidirectional. */
  "PB7": "17",
  /** Physical pin 18: CB1; input. */
  "CB1": "18",
  /** Physical pin 19: CB2; bidirectional. */
  "CB2": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: R/~{W}; input. */
  "R/~{W}": "21",
  /** Physical pin 22: CS0; input. */
  "CS0": "22",
  /** Physical pin 23: ~{CS2}; input. */
  "~{CS2}": "23",
  /** Physical pin 24: CS1; input. */
  "CS1": "24",
  /** Physical pin 25: ENABLE; input. */
  "ENABLE": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: ~{RESET}; input. */
  "~{RESET}": "34",
  /** Physical pin 35: RS1; input. */
  "RS1": "35",
  /** Physical pin 36: RS0; input. */
  "RS0": "36",
  /** Physical pin 37: ~{IRQB}; open_collector. */
  "~{IRQB}": "37",
  /** Physical pin 38: ~{IRQA}; open_collector. */
  "~{IRQA}": "38",
  /** Physical pin 39: CA2; bidirectional. */
  "CA2": "39",
  /** Physical pin 40: CA1; input. */
  "CA1": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B40 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{G2}; input. */
  "~{G2}": "2",
  /** Physical pin 3: O2; output. */
  "O2": "3",
  /** Physical pin 4: ~{C2}; input. */
  "~{C2}": "4",
  /** Physical pin 5: ~{G3}; input. */
  "~{G3}": "5",
  /** Physical pin 6: O3; output. */
  "O3": "6",
  /** Physical pin 7: ~{C3}; input. */
  "~{C3}": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: ~{IRQ}; output. */
  "~{IRQ}": "9",
  /** Physical pin 10: RS0; input. */
  "RS0": "10",
  /** Physical pin 11: RS1; input. */
  "RS1": "11",
  /** Physical pin 12: RS2; input. */
  "RS2": "12",
  /** Physical pin 13: R/~{W}; input. */
  "R/~{W}": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: ~{CS0}; input. */
  "~{CS0}": "15",
  /** Physical pin 16: CS1; input. */
  "CS1": "16",
  /** Physical pin 17: E; input. */
  "E": "17",
  /** Physical pin 18: D7; input. */
  "D7": "18",
  /** Physical pin 19: D6; input. */
  "D6": "19",
  /** Physical pin 20: D5; input. */
  "D5": "20",
  /** Physical pin 21: D4; input. */
  "D4": "21",
  /** Physical pin 22: D3; input. */
  "D3": "22",
  /** Physical pin 23: D2; input. */
  "D2": "23",
  /** Physical pin 24: D1; input. */
  "D1": "24",
  /** Physical pin 25: D0; input. */
  "D0": "25",
  /** Physical pin 26: ~{G1}; input. */
  "~{G1}": "26",
  /** Physical pin 27: O1; output. */
  "O1": "27",
  /** Physical pin 28: ~{C1}; input. */
  "~{C1}": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B44 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{CS}/Tx_AKB; bidirectional. */
  "~{CS}/Tx_AKB": "2",
  /** Physical pin 3: R/~{W}; bidirectional. */
  "R/~{W}": "3",
  /** Physical pin 4: A0; bidirectional. */
  "A0": "4",
  /** Physical pin 5: A1; bidirectional. */
  "A1": "5",
  /** Physical pin 6: A2; bidirectional. */
  "A2": "6",
  /** Physical pin 7: A3; bidirectional. */
  "A3": "7",
  /** Physical pin 8: A4; bidirectional. */
  "A4": "8",
  /** Physical pin 9: A5; output. */
  "A5": "9",
  /** Physical pin 10: A6; output. */
  "A6": "10",
  /** Physical pin 11: A7; output. */
  "A7": "11",
  /** Physical pin 12: A8; output. */
  "A8": "12",
  /** Physical pin 13: A9; output. */
  "A9": "13",
  /** Physical pin 14: A10; output. */
  "A10": "14",
  /** Physical pin 15: A11; output. */
  "A11": "15",
  /** Physical pin 16: A12; output. */
  "A12": "16",
  /** Physical pin 17: A13; output. */
  "A13": "17",
  /** Physical pin 18: A14; output. */
  "A14": "18",
  /** Physical pin 19: A15; output. */
  "A15": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: D7; bidirectional. */
  "D7": "21",
  /** Physical pin 22: D6; bidirectional. */
  "D6": "22",
  /** Physical pin 23: D5; bidirectional. */
  "D5": "23",
  /** Physical pin 24: D4; bidirectional. */
  "D4": "24",
  /** Physical pin 25: D3; bidirectional. */
  "D3": "25",
  /** Physical pin 26: D2; bidirectional. */
  "D2": "26",
  /** Physical pin 27: D1; bidirectional. */
  "D1": "27",
  /** Physical pin 28: D0; bidirectional. */
  "D0": "28",
  /** Physical pin 29: Tx_RQ3; input. */
  "Tx_RQ3": "29",
  /** Physical pin 30: Tx_RQ2; input. */
  "Tx_RQ2": "30",
  /** Physical pin 31: Tx_RQ1; input. */
  "Tx_RQ1": "31",
  /** Physical pin 32: Tx_RQ0; input. */
  "Tx_RQ0": "32",
  /** Physical pin 33: ~{IRQ}/~{DEND}; output. */
  "~{IRQ}/~{DEND}": "33",
  /** Physical pin 34: ~{Tx_STB}; output. */
  "~{Tx_STB}": "34",
  /** Physical pin 35: Tx_AKA; output. */
  "Tx_AKA": "35",
  /** Physical pin 36: ~{DRQ2}; output. */
  "~{DRQ2}": "36",
  /** Physical pin 37: ~{DRQ1}; output. */
  "~{DRQ1}": "37",
  /** Physical pin 38: DGRNT; input. */
  "DGRNT": "38",
  /** Physical pin 39: ~{RESET}; input. */
  "~{RESET}": "39",
  /** Physical pin 40: E; input. */
  "E": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NB3N551MN extends Component.withPins({
  /** Physical pin 1: ICLK; input. */
  "ICLK": "1",
  /** Physical pin 2: Q1; output. */
  "Q1": "2",
  /** Physical pin 3: Q2; output. */
  "Q2": "3",
  /** Physical pin 4: Q3; output. */
  "Q3": "4",
  /** Physical pin 5: Q4; output. */
  "Q4": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ONET1191PRGT extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC_1": "1",
  /** Physical pin 2: VCC; passive. */
  "VCC_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: COC-; passive. */
  "COC-": "5",
  /** Physical pin 6: COC+; passive. */
  "COC+": "6",
  /** Physical pin 7: DIN+; input. */
  "DIN+": "7",
  /** Physical pin 8: DIN-; input. */
  "DIN-": "8",
  /** Physical pin 9: TH; input. */
  "TH": "9",
  /** Physical pin 10: LOS; open_collector. */
  "LOS": "10",
  /** Physical pin 11: DISABLE; input. */
  "DISABLE": "11",
  /** Physical pin 12: VAR; input. */
  "VAR": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: DOUT-; output. */
  "DOUT-": "14",
  /** Physical pin 15: DOUT+; output. */
  "DOUT+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9306 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VREF1; power_in. */
  "VREF1": "2",
  /** Physical pin 3: SCL1; bidirectional. */
  "SCL1": "3",
  /** Physical pin 4: SDA1; bidirectional. */
  "SDA1": "4",
  /** Physical pin 5: SDA2; bidirectional. */
  "SDA2": "5",
  /** Physical pin 6: SCL2; bidirectional. */
  "SCL2": "6",
  /** Physical pin 7: VREF2; power_in. */
  "VREF2": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9306D extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VREF1; power_in. */
  "VREF1": "2",
  /** Physical pin 3: SCL1; bidirectional. */
  "SCL1": "3",
  /** Physical pin 4: SDA1; bidirectional. */
  "SDA1": "4",
  /** Physical pin 5: SDA2; bidirectional. */
  "SDA2": "5",
  /** Physical pin 6: SCL2; bidirectional. */
  "SCL2": "6",
  /** Physical pin 7: VREF2; power_in. */
  "VREF2": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9306DC extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VREF1; power_in. */
  "VREF1": "2",
  /** Physical pin 3: SCL1; bidirectional. */
  "SCL1": "3",
  /** Physical pin 4: SDA1; bidirectional. */
  "SDA1": "4",
  /** Physical pin 5: SDA2; bidirectional. */
  "SDA2": "5",
  /** Physical pin 6: SCL2; bidirectional. */
  "SCL2": "6",
  /** Physical pin 7: VREF2; power_in. */
  "VREF2": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9306DC1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VREF1; power_in. */
  "VREF1": "2",
  /** Physical pin 3: SCL1; bidirectional. */
  "SCL1": "3",
  /** Physical pin 4: SDA1; bidirectional. */
  "SDA1": "4",
  /** Physical pin 5: SDA2; bidirectional. */
  "SDA2": "5",
  /** Physical pin 6: SCL2; bidirectional. */
  "SCL2": "6",
  /** Physical pin 7: VREF2; power_in. */
  "VREF2": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9306DP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VREF1; power_in. */
  "VREF1": "2",
  /** Physical pin 3: SCL1; bidirectional. */
  "SCL1": "3",
  /** Physical pin 4: SDA1; bidirectional. */
  "SDA1": "4",
  /** Physical pin 5: SDA2; bidirectional. */
  "SDA2": "5",
  /** Physical pin 6: SCL2; bidirectional. */
  "SCL2": "6",
  /** Physical pin 7: VREF2; power_in. */
  "VREF2": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9600D extends Component.withPins({
  /** Physical pin 1: SX; bidirectional. */
  "SX": "1",
  /** Physical pin 2: RX; input. */
  "RX": "2",
  /** Physical pin 3: TX; open_collector. */
  "TX": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: TY; open_collector. */
  "TY": "5",
  /** Physical pin 6: RY; input. */
  "RY": "6",
  /** Physical pin 7: SY; bidirectional. */
  "SY": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9600DP extends Component.withPins({
  /** Physical pin 1: SX; bidirectional. */
  "SX": "1",
  /** Physical pin 2: RX; input. */
  "RX": "2",
  /** Physical pin 3: TX; open_collector. */
  "TX": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: TY; open_collector. */
  "TY": "5",
  /** Physical pin 6: RY; input. */
  "RY": "6",
  /** Physical pin 7: SY; bidirectional. */
  "SY": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9615DP extends Component.withPins({
  /** Physical pin 1: V_{DD(A)}; power_in. */
  "V_{DD(A)}": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SCL; bidirectional. */
  "SCL": "4",
  /** Physical pin 5: V_{SS}; power_in. */
  "V_{SS}": "5",
  /** Physical pin 6: DSCLM; bidirectional. */
  "DSCLM": "6",
  /** Physical pin 7: DSCLP; bidirectional. */
  "DSCLP": "7",
  /** Physical pin 8: DSDAP; bidirectional. */
  "DSDAP": "8",
  /** Physical pin 9: DSDAM; bidirectional. */
  "DSDAM": "9",
  /** Physical pin 10: V_{DD(B)}; power_in. */
  "V_{DD(B)}": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCI9030_PQFP176 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: AD28; bidirectional. */
  "AD28": "2",
  /** Physical pin 3: AD27; bidirectional. */
  "AD27": "3",
  /** Physical pin 4: AD26; bidirectional. */
  "AD26": "4",
  /** Physical pin 5: AD25; bidirectional. */
  "AD25": "5",
  /** Physical pin 6: AD24; bidirectional. */
  "AD24": "6",
  /** Physical pin 7: C/BE3#; bidirectional. */
  "C/BE3#": "7",
  /** Physical pin 8: IDSEL; input. */
  "IDSEL": "8",
  /** Physical pin 9: AD23; bidirectional. */
  "AD23": "9",
  /** Physical pin 10: AD22; bidirectional. */
  "AD22": "10",
  /** Physical pin 11: AD21; bidirectional. */
  "AD21": "11",
  /** Physical pin 12: AD20; bidirectional. */
  "AD20": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS_13": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD_14": "14",
  /** Physical pin 15: AD19; bidirectional. */
  "AD19": "15",
  /** Physical pin 16: AD18; bidirectional. */
  "AD18": "16",
  /** Physical pin 17: AD17; bidirectional. */
  "AD17": "17",
  /** Physical pin 18: AD16; bidirectional. */
  "AD16": "18",
  /** Physical pin 19: C/BE2#; bidirectional. */
  "C/BE2#": "19",
  /** Physical pin 20: FRAME#; bidirectional. */
  "FRAME#": "20",
  /** Physical pin 21: IRDY#; bidirectional. */
  "IRDY#": "21",
  /** Physical pin 22: TRDY#; bidirectional. */
  "TRDY#": "22",
  /** Physical pin 23: DEVSEL#; bidirectional. */
  "DEVSEL#": "23",
  /** Physical pin 24: STOP#; bidirectional. */
  "STOP#": "24",
  /** Physical pin 25: LOCK#; input. */
  "LOCK#": "25",
  /** Physical pin 26: PERR#; output. */
  "PERR#": "26",
  /** Physical pin 27: SERR#; output. */
  "SERR#": "27",
  /** Physical pin 28: PAR; bidirectional. */
  "PAR": "28",
  /** Physical pin 29: C/BE1#; bidirectional. */
  "C/BE1#": "29",
  /** Physical pin 30: AD15; bidirectional. */
  "AD15": "30",
  /** Physical pin 31: VSS; power_in. */
  "VSS_31": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: AD14; bidirectional. */
  "AD14": "33",
  /** Physical pin 34: AD13; bidirectional. */
  "AD13": "34",
  /** Physical pin 35: AD12; bidirectional. */
  "AD12": "35",
  /** Physical pin 36: AD11; bidirectional. */
  "AD11": "36",
  /** Physical pin 37: AD10; bidirectional. */
  "AD10": "37",
  /** Physical pin 38: AD9; bidirectional. */
  "AD9": "38",
  /** Physical pin 39: AD8; bidirectional. */
  "AD8": "39",
  /** Physical pin 40: C/BE0#; bidirectional. */
  "C/BE0#": "40",
  /** Physical pin 41: AD7; bidirectional. */
  "AD7": "41",
  /** Physical pin 42: AD6; bidirectional. */
  "AD6": "42",
  /** Physical pin 43: AD5; bidirectional. */
  "AD5": "43",
  /** Physical pin 44: VSS; power_in. */
  "VSS_44": "44",
  /** Physical pin 45: VDD; power_in. */
  "VDD_45": "45",
  /** Physical pin 46: AD4; bidirectional. */
  "AD4": "46",
  /** Physical pin 47: AD3; bidirectional. */
  "AD3": "47",
  /** Physical pin 48: AD2; bidirectional. */
  "AD2": "48",
  /** Physical pin 49: AD1; bidirectional. */
  "AD1": "49",
  /** Physical pin 50: AD0; bidirectional. */
  "AD0": "50",
  /** Physical pin 51: ENUM#; output. */
  "ENUM#": "51",
  /** Physical pin 52: LEDON#; output. */
  "LEDON#": "52",
  /** Physical pin 53: VI/O; power_in. */
  "VI/O": "53",
  /** Physical pin 54: CPCISW; input. */
  "CPCISW": "54",
  /** Physical pin 55: LBE3#; output. */
  "LBE3#": "55",
  /** Physical pin 56: VDD; power_in. */
  "VDD_56": "56",
  /** Physical pin 57: VSS; power_in. */
  "VSS_57": "57",
  /** Physical pin 58: LBE2#; output. */
  "LBE2#": "58",
  /** Physical pin 59: LBE1#; output. */
  "LBE1#": "59",
  /** Physical pin 60: LBE0#; output. */
  "LBE0#": "60",
  /** Physical pin 61: LD31; bidirectional. */
  "LD31": "61",
  /** Physical pin 62: LD30; bidirectional. */
  "LD30": "62",
  /** Physical pin 63: LD29; bidirectional. */
  "LD29": "63",
  /** Physical pin 64: LD28; bidirectional. */
  "LD28": "64",
  /** Physical pin 65: LD27; bidirectional. */
  "LD27": "65",
  /** Physical pin 66: VSS; power_in. */
  "VSS_66": "66",
  /** Physical pin 67: LD26; bidirectional. */
  "LD26": "67",
  /** Physical pin 68: LD25; bidirectional. */
  "LD25": "68",
  /** Physical pin 69: LD24; bidirectional. */
  "LD24": "69",
  /** Physical pin 70: VDD; power_in. */
  "VDD_70": "70",
  /** Physical pin 71: BCLKo; output. */
  "BCLKo": "71",
  /** Physical pin 72: LD23; bidirectional. */
  "LD23": "72",
  /** Physical pin 73: LD22; bidirectional. */
  "LD22": "73",
  /** Physical pin 74: LD21; bidirectional. */
  "LD21": "74",
  /** Physical pin 75: ALE; output. */
  "ALE": "75",
  /** Physical pin 76: MODE; input. */
  "MODE": "76",
  /** Physical pin 77: LD20; bidirectional. */
  "LD20": "77",
  /** Physical pin 78: VSS; power_in. */
  "VSS_78": "78",
  /** Physical pin 79: LD19; bidirectional. */
  "LD19": "79",
  /** Physical pin 80: LD18; bidirectional. */
  "LD18": "80",
  /** Physical pin 81: LD17; bidirectional. */
  "LD17": "81",
  /** Physical pin 82: LD16; bidirectional. */
  "LD16": "82",
  /** Physical pin 83: LD15; bidirectional. */
  "LD15": "83",
  /** Physical pin 84: LD14; bidirectional. */
  "LD14": "84",
  /** Physical pin 85: VDD; power_in. */
  "VDD_85": "85",
  /** Physical pin 86: LD13; bidirectional. */
  "LD13": "86",
  /** Physical pin 87: LD12; bidirectional. */
  "LD12": "87",
  /** Physical pin 88: VSS; power_in. */
  "VSS_88": "88",
  /** Physical pin 89: LD11; bidirectional. */
  "LD11": "89",
  /** Physical pin 90: LD10; bidirectional. */
  "LD10": "90",
  /** Physical pin 91: LD9; bidirectional. */
  "LD9": "91",
  /** Physical pin 92: LD8; bidirectional. */
  "LD8": "92",
  /** Physical pin 93: LD7; bidirectional. */
  "LD7": "93",
  /** Physical pin 94: GPIO8; bidirectional. */
  "GPIO8": "94",
  /** Physical pin 95: LD6; bidirectional. */
  "LD6": "95",
  /** Physical pin 96: LD5; bidirectional. */
  "LD5": "96",
  /** Physical pin 97: LD4; bidirectional. */
  "LD4": "97",
  /** Physical pin 98: LD3; bidirectional. */
  "LD3": "98",
  /** Physical pin 99: LD2; bidirectional. */
  "LD2": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
  /** Physical pin 101: VSS; power_in. */
  "VSS_101": "101",
  /** Physical pin 102: LD1; bidirectional. */
  "LD1": "102",
  /** Physical pin 103: LPMESET; input. */
  "LPMESET": "103",
  /** Physical pin 104: LD0; bidirectional. */
  "LD0": "104",
  /** Physical pin 105: LA2; output. */
  "LA2": "105",
  /** Physical pin 106: LA3; output. */
  "LA3": "106",
  /** Physical pin 107: LA4; output. */
  "LA4": "107",
  /** Physical pin 108: LA5; output. */
  "LA5": "108",
  /** Physical pin 109: LA6; output. */
  "LA6": "109",
  /** Physical pin 110: LA7; output. */
  "LA7": "110",
  /** Physical pin 111: LA8; output. */
  "LA8": "111",
  /** Physical pin 112: BD-SEL#/TST; input. */
  "BD-SEL#/TST": "112",
  /** Physical pin 113: VSS; power_in. */
  "VSS_113": "113",
  /** Physical pin 114: LA9; output. */
  "LA9": "114",
  /** Physical pin 115: LA10; input. */
  "LA10": "115",
  /** Physical pin 116: LA11; output. */
  "LA11": "116",
  /** Physical pin 117: VDD; power_in. */
  "VDD_117": "117",
  /** Physical pin 118: LA12; output. */
  "LA12": "118",
  /** Physical pin 119: LA13; output. */
  "LA13": "119",
  /** Physical pin 120: LA14; output. */
  "LA14": "120",
  /** Physical pin 121: LA15; output. */
  "LA15": "121",
  /** Physical pin 122: VSS; power_in. */
  "VSS_122": "122",
  /** Physical pin 123: LA16; output. */
  "LA16": "123",
  /** Physical pin 124: LA17; output. */
  "LA17": "124",
  /** Physical pin 125: LA18; output. */
  "LA18": "125",
  /** Physical pin 126: LPMINT#; output. */
  "LPMINT#": "126",
  /** Physical pin 127: LA19; output. */
  "LA19": "127",
  /** Physical pin 128: LA20; output. */
  "LA20": "128",
  /** Physical pin 129: LA21; output. */
  "LA21": "129",
  /** Physical pin 130: LA22; output. */
  "LA22": "130",
  /** Physical pin 131: LA23; output. */
  "LA23": "131",
  /** Physical pin 132: VSS; power_in. */
  "VSS_132": "132",
  /** Physical pin 133: VDD; power_in. */
  "VDD_133": "133",
  /** Physical pin 134: GPIO7/LA24; bidirectional. */
  "GPIO7/LA24": "134",
  /** Physical pin 135: GPIO6/LA25; bidirectional. */
  "GPIO6/LA25": "135",
  /** Physical pin 136: GPIO5/LA26; bidirectional. */
  "GPIO5/LA26": "136",
  /** Physical pin 137: GPIO4/LA27; bidirectional. */
  "GPIO4/LA27": "137",
  /** Physical pin 138: ADS#; output. */
  "ADS#": "138",
  /** Physical pin 139: BLAST#; output. */
  "BLAST#": "139",
  /** Physical pin 140: WR#; output. */
  "WR#": "140",
  /** Physical pin 141: RD#; output. */
  "RD#": "141",
  /** Physical pin 142: LW/R#; output. */
  "LW/R#": "142",
  /** Physical pin 143: READY#; input. */
  "READY#": "143",
  /** Physical pin 144: BTERM#; input. */
  "BTERM#": "144",
  /** Physical pin 145: LCLK; input. */
  "LCLK": "145",
  /** Physical pin 146: VSS; power_in. */
  "VSS_146": "146",
  /** Physical pin 147: CS0#; output. */
  "CS0#": "147",
  /** Physical pin 148: CS1#; output. */
  "CS1#": "148",
  /** Physical pin 149: LRESETo#; output. */
  "LRESETo#": "149",
  /** Physical pin 150: LGNT; output. */
  "LGNT": "150",
  /** Physical pin 151: LREQ; input. */
  "LREQ": "151",
  /** Physical pin 152: LINTi1; input. */
  "LINTi1": "152",
  /** Physical pin 153: LINTi2; input. */
  "LINTi2": "153",
  /** Physical pin 154: GPIO0/WAITo#; bidirectional. */
  "GPIO0/WAITo#": "154",
  /** Physical pin 155: GPIO1/LLOCKo#; bidirectional. */
  "GPIO1/LLOCKo#": "155",
  /** Physical pin 156: GPIO2/CS2#; bidirectional. */
  "GPIO2/CS2#": "156",
  /** Physical pin 157: GPIO3/CS3#; bidirectional. */
  "GPIO3/CS3#": "157",
  /** Physical pin 158: EECS; output. */
  "EECS": "158",
  /** Physical pin 159: EEDO; input. */
  "EEDO": "159",
  /** Physical pin 160: EESK; output. */
  "EESK": "160",
  /** Physical pin 161: EEDI; output. */
  "EEDI": "161",
  /** Physical pin 162: VDD; power_in. */
  "VDD_162": "162",
  /** Physical pin 163: VSS; power_in. */
  "VSS_163": "163",
  /** Physical pin 164: TRST#; input. */
  "TRST#": "164",
  /** Physical pin 165: TCK; input. */
  "TCK": "165",
  /** Physical pin 166: TMS; input. */
  "TMS": "166",
  /** Physical pin 167: TDO; output. */
  "TDO": "167",
  /** Physical pin 168: TDI; input. */
  "TDI": "168",
  /** Physical pin 169: PME#; output. */
  "PME#": "169",
  /** Physical pin 170: INTA#; output. */
  "INTA#": "170",
  /** Physical pin 171: RST#; input. */
  "RST#": "171",
  /** Physical pin 172: PCLK; input. */
  "PCLK": "172",
  /** Physical pin 173: AD31; bidirectional. */
  "AD31": "173",
  /** Physical pin 174: AD30; bidirectional. */
  "AD30": "174",
  /** Physical pin 175: AD29; bidirectional. */
  "AD29": "175",
  /** Physical pin 176: VSS; power_in. */
  "VSS_176": "176",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class S5933_PQ160 extends Component.withPins({
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 30: VSS; power_in. */
  "VSS_30": "30",
  /** Physical pin 31: VCC; power_in. */
  "VCC_31": "31",
  /** Physical pin 50: VSS; power_in. */
  "VSS_50": "50",
  /** Physical pin 51: VCC; power_in. */
  "VCC_51": "51",
  /** Physical pin 70: VSS; power_in. */
  "VSS_70": "70",
  /** Physical pin 71: VCC; power_in. */
  "VCC_71": "71",
  /** Physical pin 90: VSS; power_in. */
  "VSS_90": "90",
  /** Physical pin 91: VCC; power_in. */
  "VCC_91": "91",
  /** Physical pin 110: VSS; power_in. */
  "VSS_110": "110",
  /** Physical pin 111: VCC; power_in. */
  "VCC_111": "111",
  /** Physical pin 130: VSS; power_in. */
  "VSS_130": "130",
  /** Physical pin 131: VCC; power_in. */
  "VCC_131": "131",
  /** Physical pin 150: VSS; power_in. */
  "VSS_150": "150",
  /** Physical pin 151: VCC; power_in. */
  "VCC_151": "151",
  /** Physical pin 11: VCC; power_in. */
  "VCC_11": "11",
  /** Physical pin 1: EQ0; bidirectional. */
  "EQ0": "1",
  /** Physical pin 2: AD23; bidirectional. */
  "AD23": "2",
  /** Physical pin 3: AD22; bidirectional. */
  "AD22": "3",
  /** Physical pin 4: AD21; bidirectional. */
  "AD21": "4",
  /** Physical pin 5: DQ31; bidirectional. */
  "DQ31": "5",
  /** Physical pin 6: AD20; bidirectional. */
  "AD20": "6",
  /** Physical pin 7: AD19; bidirectional. */
  "AD19": "7",
  /** Physical pin 8: AD18; bidirectional. */
  "AD18": "8",
  /** Physical pin 9: EQ1; bidirectional. */
  "EQ1": "9",
  /** Physical pin 12: AD17; bidirectional. */
  "AD17": "12",
  /** Physical pin 13: DQ30; bidirectional. */
  "DQ30": "13",
  /** Physical pin 14: AD16; bidirectional. */
  "AD16": "14",
  /** Physical pin 15: C/BE2#; bidirectional. */
  "C/BE2#": "15",
  /** Physical pin 16: FRAME#; bidirectional. */
  "FRAME#": "16",
  /** Physical pin 17: EQ2; bidirectional. */
  "EQ2": "17",
  /** Physical pin 18: IRDY#; bidirectional. */
  "IRDY#": "18",
  /** Physical pin 19: TRDY#; bidirectional. */
  "TRDY#": "19",
  /** Physical pin 20: DEVSEL#; bidirectional. */
  "DEVSEL#": "20",
  /** Physical pin 21: EQ3; bidirectional. */
  "EQ3": "21",
  /** Physical pin 22: STOP#; bidirectional. */
  "STOP#": "22",
  /** Physical pin 23: LOCK#; input. */
  "LOCK#": "23",
  /** Physical pin 24: PERR#; bidirectional. */
  "PERR#": "24",
  /** Physical pin 25: DQ29; bidirectional. */
  "DQ29": "25",
  /** Physical pin 26: SERR#; output. */
  "SERR#": "26",
  /** Physical pin 27: PAR; bidirectional. */
  "PAR": "27",
  /** Physical pin 28: C/BE1#; bidirectional. */
  "C/BE1#": "28",
  /** Physical pin 29: EQ4/FWC#; bidirectional. */
  "EQ4/FWC#": "29",
  /** Physical pin 32: AD15; bidirectional. */
  "AD15": "32",
  /** Physical pin 33: EQ5/FRC#; bidirectional. */
  "EQ5/FRC#": "33",
  /** Physical pin 34: AD14; bidirectional. */
  "AD14": "34",
  /** Physical pin 35: AD13; bidirectional. */
  "AD13": "35",
  /** Physical pin 36: AD12; bidirectional. */
  "AD12": "36",
  /** Physical pin 37: DQ28; bidirectional. */
  "DQ28": "37",
  /** Physical pin 38: AD11; bidirectional. */
  "AD11": "38",
  /** Physical pin 39: AD10; bidirectional. */
  "AD10": "39",
  /** Physical pin 40: AD9; bidirectional. */
  "AD9": "40",
  /** Physical pin 41: EQ6/AMREN; bidirectional. */
  "EQ6/AMREN": "41",
  /** Physical pin 42: AD8; bidirectional. */
  "AD8": "42",
  /** Physical pin 43: C/BE0#; bidirectional. */
  "C/BE0#": "43",
  /** Physical pin 44: AD7; bidirectional. */
  "AD7": "44",
  /** Physical pin 45: DQ27; bidirectional. */
  "DQ27": "45",
  /** Physical pin 46: AD6; bidirectional. */
  "AD6": "46",
  /** Physical pin 47: AD5; bidirectional. */
  "AD5": "47",
  /** Physical pin 48: AD4; bidirectional. */
  "AD4": "48",
  /** Physical pin 49: EQ7/AMWEN; bidirectional. */
  "EQ7/AMWEN": "49",
  /** Physical pin 52: AD3; bidirectional. */
  "AD3": "52",
  /** Physical pin 53: DQ26; bidirectional. */
  "DQ26": "53",
  /** Physical pin 54: AD2; bidirectional. */
  "AD2": "54",
  /** Physical pin 55: AD1; bidirectional. */
  "AD1": "55",
  /** Physical pin 56: AD0; bidirectional. */
  "AD0": "56",
  /** Physical pin 57: EA0; bidirectional. */
  "EA0": "57",
  /** Physical pin 58: INTA#; output. */
  "INTA#": "58",
  /** Physical pin 59: MODE_16/32; input. */
  "MODE_16/32": "59",
  /** Physical pin 60: BE3#; input. */
  "BE3#": "60",
  /** Physical pin 61: EA1; bidirectional. */
  "EA1": "61",
  /** Physical pin 62: BE2#; input. */
  "BE2#": "62",
  /** Physical pin 63: BE1#; input. */
  "BE1#": "63",
  /** Physical pin 64: ADR5; input. */
  "ADR5": "64",
  /** Physical pin 65: DQ25; bidirectional. */
  "DQ25": "65",
  /** Physical pin 66: ADR4; input. */
  "ADR4": "66",
  /** Physical pin 67: ADR3; input. */
  "ADR3": "67",
  /** Physical pin 68: ADR2; input. */
  "ADR2": "68",
  /** Physical pin 69: EA2; bidirectional. */
  "EA2": "69",
  /** Physical pin 72: RD#; input. */
  "RD#": "72",
  /** Physical pin 73: EA3; bidirectional. */
  "EA3": "73",
  /** Physical pin 74: WR#; input. */
  "WR#": "74",
  /** Physical pin 75: SELECT#; input. */
  "SELECT#": "75",
  /** Physical pin 76: DQ15; bidirectional. */
  "DQ15": "76",
  /** Physical pin 77: DQ24; bidirectional. */
  "DQ24": "77",
  /** Physical pin 78: DQ14; bidirectional. */
  "DQ14": "78",
  /** Physical pin 79: DQ13; bidirectional. */
  "DQ13": "79",
  /** Physical pin 80: DQ12; bidirectional. */
  "DQ12": "80",
  /** Physical pin 81: EA4; bidirectional. */
  "EA4": "81",
  /** Physical pin 82: DQ11; bidirectional. */
  "DQ11": "82",
  /** Physical pin 83: DQ10; bidirectional. */
  "DQ10": "83",
  /** Physical pin 84: DQ9; bidirectional. */
  "DQ9": "84",
  /** Physical pin 85: DQ23; bidirectional. */
  "DQ23": "85",
  /** Physical pin 86: DQ8; bidirectional. */
  "DQ8": "86",
  /** Physical pin 87: BE0#; input. */
  "BE0#": "87",
  /** Physical pin 88: DQ7; bidirectional. */
  "DQ7": "88",
  /** Physical pin 89: EA5; bidirectional. */
  "EA5": "89",
  /** Physical pin 92: DQ6; bidirectional. */
  "DQ6": "92",
  /** Physical pin 93: DQ22; bidirectional. */
  "DQ22": "93",
  /** Physical pin 94: DQ5; bidirectional. */
  "DQ5": "94",
  /** Physical pin 95: DQ4; bidirectional. */
  "DQ4": "95",
  /** Physical pin 96: DQ3; bidirectional. */
  "DQ3": "96",
  /** Physical pin 97: EA6; bidirectional. */
  "EA6": "97",
  /** Physical pin 98: DQ2; bidirectional. */
  "DQ2": "98",
  /** Physical pin 99: DQ1; bidirectional. */
  "DQ1": "99",
  /** Physical pin 100: DQ0; bidirectional. */
  "DQ0": "100",
  /** Physical pin 101: EA7; bidirectional. */
  "EA7": "101",
  /** Physical pin 102: WRFIFO#; input. */
  "WRFIFO#": "102",
  /** Physical pin 103: WRFULL; output. */
  "WRFULL": "103",
  /** Physical pin 104: RDFIFO#; input. */
  "RDFIFO#": "104",
  /** Physical pin 105: DQ21; bidirectional. */
  "DQ21": "105",
  /** Physical pin 106: RDEMPTY; output. */
  "RDEMPTY": "106",
  /** Physical pin 107: PTADR#; input. */
  "PTADR#": "107",
  /** Physical pin 108: PTWR; output. */
  "PTWR": "108",
  /** Physical pin 109: EA8; bidirectional. */
  "EA8": "109",
  /** Physical pin 112: PTBURST#; output. */
  "PTBURST#": "112",
  /** Physical pin 113: EA9; output. */
  "EA9": "113",
  /** Physical pin 114: PTATN#; output. */
  "PTATN#": "114",
  /** Physical pin 115: PTRDY#; input. */
  "PTRDY#": "115",
  /** Physical pin 116: PTBE0#; output. */
  "PTBE0#": "116",
  /** Physical pin 117: DQ20; bidirectional. */
  "DQ20": "117",
  /** Physical pin 118: PTBE1#; output. */
  "PTBE1#": "118",
  /** Physical pin 119: PTBE2#; output. */
  "PTBE2#": "119",
  /** Physical pin 120: PTBE3#; output. */
  "PTBE3#": "120",
  /** Physical pin 121: EA10; output. */
  "EA10": "121",
  /** Physical pin 122: PTNUM1; output. */
  "PTNUM1": "122",
  /** Physical pin 123: PTNUM0; output. */
  "PTNUM0": "123",
  /** Physical pin 124: IRQ#; output. */
  "IRQ#": "124",
  /** Physical pin 125: DQ19; bidirectional. */
  "DQ19": "125",
  /** Physical pin 126: SYSRST#; output. */
  "SYSRST#": "126",
  /** Physical pin 127: EWR#/SDA; bidirectional. */
  "EWR#/SDA": "127",
  /** Physical pin 128: ERD#/SCL; output. */
  "ERD#/SCL": "128",
  /** Physical pin 129: EA11; output. */
  "EA11": "129",
  /** Physical pin 132: ADR6; input. */
  "ADR6": "132",
  /** Physical pin 133: DQ18; bidirectional. */
  "DQ18": "133",
  /** Physical pin 135: SNV; input. */
  "SNV": "135",
  /** Physical pin 137: EA12; output. */
  "EA12": "137",
  /** Physical pin 138: FLT#; input. */
  "FLT#": "138",
  /** Physical pin 139: RST#; input. */
  "RST#": "139",
  /** Physical pin 140: BPCLK; output. */
  "BPCLK": "140",
  /** Physical pin 141: EA13; output. */
  "EA13": "141",
  /** Physical pin 142: CLK; input. */
  "CLK": "142",
  /** Physical pin 143: GNT#; input. */
  "GNT#": "143",
  /** Physical pin 144: REQ#; output. */
  "REQ#": "144",
  /** Physical pin 145: DQ17; bidirectional. */
  "DQ17": "145",
  /** Physical pin 146: AD31; bidirectional. */
  "AD31": "146",
  /** Physical pin 147: AD30; bidirectional. */
  "AD30": "147",
  /** Physical pin 148: AD29; bidirectional. */
  "AD29": "148",
  /** Physical pin 149: EA14/FWE; bidirectional. */
  "EA14/FWE": "149",
  /** Physical pin 152: AD28; bidirectional. */
  "AD28": "152",
  /** Physical pin 153: EA15/FRF; bidirectional. */
  "EA15/FRF": "153",
  /** Physical pin 154: AD27; bidirectional. */
  "AD27": "154",
  /** Physical pin 155: AD26; bidirectional. */
  "AD26": "155",
  /** Physical pin 156: AD25; bidirectional. */
  "AD25": "156",
  /** Physical pin 157: DQ16; bidirectional. */
  "DQ16": "157",
  /** Physical pin 158: AD24; bidirectional. */
  "AD24": "158",
  /** Physical pin 159: C/BE3#; bidirectional. */
  "C/BE3#": "159",
  /** Physical pin 160: IDSEL; input. */
  "IDSEL": "160",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SI9986 extends Component.withPins({
  /** Physical pin 1: SA; power_in. */
  "SA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: PWR; power_in. */
  "PWR": "3",
  /** Physical pin 4: SB; power_in. */
  "SB": "4",
  /** Physical pin 5: OUTB; input. */
  "OUTB": "5",
  /** Physical pin 6: INB; input. */
  "INB": "6",
  /** Physical pin 7: INA; input. */
  "INA": "7",
  /** Physical pin 8: OUTA; input. */
  "OUTA": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SLB9660xT extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 7: PP; input. */
  "PP": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: ~{LRESET}; input. */
  "~{LRESET}": "16",
  /** Physical pin 17: LAD3; tri_state. */
  "LAD3": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: LAD2; tri_state. */
  "LAD2": "20",
  /** Physical pin 21: LCLK; input. */
  "LCLK": "21",
  /** Physical pin 22: ~{LFRAME}; input. */
  "~{LFRAME}": "22",
  /** Physical pin 23: LAD1; tri_state. */
  "LAD1": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: LAD0; tri_state. */
  "LAD0": "26",
  /** Physical pin 27: SERIRQ; tri_state. */
  "SERIRQ": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 6: GPIO; bidirectional. */
  "GPIO": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SLB9665xT extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 7: PP; input. */
  "PP": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: ~{LRESET}; input. */
  "~{LRESET}": "16",
  /** Physical pin 17: LAD3; tri_state. */
  "LAD3": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: LAD2; tri_state. */
  "LAD2": "20",
  /** Physical pin 21: LCLK; input. */
  "LCLK": "21",
  /** Physical pin 22: ~{LFRAME}; input. */
  "~{LFRAME}": "22",
  /** Physical pin 23: LAD1; tri_state. */
  "LAD1": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: LAD0; tri_state. */
  "LAD0": "26",
  /** Physical pin 27: SERIRQ; tri_state. */
  "SERIRQ": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 6: GPIO; bidirectional. */
  "GPIO": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LVDS047D extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: DIN1; input. */
  "DIN1": "2",
  /** Physical pin 3: DIN2; input. */
  "DIN2": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: DIN3; input. */
  "DIN3": "6",
  /** Physical pin 7: DIN4; input. */
  "DIN4": "7",
  /** Physical pin 8: ~{EN}; input. */
  "~{EN}": "8",
  /** Physical pin 9: DOUT4-; output. */
  "DOUT4-": "9",
  /** Physical pin 10: DOUT4+; output. */
  "DOUT4+": "10",
  /** Physical pin 11: DOUT3+; output. */
  "DOUT3+": "11",
  /** Physical pin 12: DOUT3-; output. */
  "DOUT3-": "12",
  /** Physical pin 13: DOUT2-; output. */
  "DOUT2-": "13",
  /** Physical pin 14: DOUT2+; output. */
  "DOUT2+": "14",
  /** Physical pin 15: DOUT1+; output. */
  "DOUT1+": "15",
  /** Physical pin 16: DOUT1-; output. */
  "DOUT1-": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LVDS047PW extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: DIN1; input. */
  "DIN1": "2",
  /** Physical pin 3: DIN2; input. */
  "DIN2": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: DIN3; input. */
  "DIN3": "6",
  /** Physical pin 7: DIN4; input. */
  "DIN4": "7",
  /** Physical pin 8: ~{EN}; input. */
  "~{EN}": "8",
  /** Physical pin 9: DOUT4-; output. */
  "DOUT4-": "9",
  /** Physical pin 10: DOUT4+; output. */
  "DOUT4+": "10",
  /** Physical pin 11: DOUT3+; output. */
  "DOUT3+": "11",
  /** Physical pin 12: DOUT3-; output. */
  "DOUT3-": "12",
  /** Physical pin 13: DOUT2-; output. */
  "DOUT2-": "13",
  /** Physical pin 14: DOUT2+; output. */
  "DOUT2+": "14",
  /** Physical pin 15: DOUT1+; output. */
  "DOUT1+": "15",
  /** Physical pin 16: DOUT1-; output. */
  "DOUT1-": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LVDS1D extends Component.withPins({
  /** Physical pin 1: V_{CC}; power_in. */
  "V_{CC}": "1",
  /** Physical pin 2: D; input. */
  "D": "2",
  /** Physical pin 3: NC; passive. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: NC; passive. */
  "NC_5": "5",
  /** Physical pin 6: NC; passive. */
  "NC_6": "6",
  /** Physical pin 7: Y; output. */
  "Y": "7",
  /** Physical pin 8: Z; output. */
  "Z": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LVDS1DBV extends Component.withPins({
  /** Physical pin 1: V_{CC}; power_in. */
  "V_{CC}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Z; output. */
  "Z": "3",
  /** Physical pin 4: Y; output. */
  "Y": "4",
  /** Physical pin 5: D; input. */
  "D": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LVDS2D extends Component.withPins({
  /** Physical pin 1: B; input. */
  "B": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: NC; passive. */
  "NC_3": "3",
  /** Physical pin 4: NC; passive. */
  "NC_4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; passive. */
  "NC_6": "6",
  /** Physical pin 7: R; output. */
  "R": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LVDS2DBV extends Component.withPins({
  /** Physical pin 1: V_{CC}; power_in. */
  "V_{CC}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; input. */
  "A": "3",
  /** Physical pin 4: B; input. */
  "B": "4",
  /** Physical pin 5: R; output. */
  "R": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LVDT2D extends Component.withPins({
  /** Physical pin 1: B; input. */
  "B": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: NC; passive. */
  "NC_3": "3",
  /** Physical pin 4: NC; passive. */
  "NC_4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; passive. */
  "NC_6": "6",
  /** Physical pin 7: R; output. */
  "R": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65LVDT2DBV extends Component.withPins({
  /** Physical pin 1: V_{CC}; power_in. */
  "V_{CC}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; input. */
  "A": "3",
  /** Physical pin 4: B; input. */
  "B": "4",
  /** Physical pin 5: R; output. */
  "R": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LV8153N extends Component.withPins({
  /** Physical pin 1: V_{CC1}; power_in. */
  "V_{CC1}": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: A2; input. */
  "A2": "4",
  /** Physical pin 5: D; input. */
  "D": "5",
  /** Physical pin 6: OUTSEL; input. */
  "OUTSEL": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: ~{OE}; input. */
  "~{OE}": "8",
  /** Physical pin 9: SOUT; output. */
  "SOUT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: Y7; open_collector. */
  "Y7": "12",
  /** Physical pin 13: Y6; open_collector. */
  "Y6": "13",
  /** Physical pin 14: Y5; open_collector. */
  "Y5": "14",
  /** Physical pin 15: Y4; open_collector. */
  "Y4": "15",
  /** Physical pin 16: Y3; open_collector. */
  "Y3": "16",
  /** Physical pin 17: Y2; open_collector. */
  "Y2": "17",
  /** Physical pin 18: Y1; open_collector. */
  "Y1": "18",
  /** Physical pin 19: Y0; open_collector. */
  "Y0": "19",
  /** Physical pin 20: V_{CC2}; power_in. */
  "V_{CC2}": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LV8153PW extends Component.withPins({
  /** Physical pin 1: V_{CC1}; power_in. */
  "V_{CC1}": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: A2; input. */
  "A2": "4",
  /** Physical pin 5: D; input. */
  "D": "5",
  /** Physical pin 6: OUTSEL; input. */
  "OUTSEL": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: ~{OE}; input. */
  "~{OE}": "8",
  /** Physical pin 9: SOUT; output. */
  "SOUT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: Y7; open_collector. */
  "Y7": "12",
  /** Physical pin 13: Y6; open_collector. */
  "Y6": "13",
  /** Physical pin 14: Y5; open_collector. */
  "Y5": "14",
  /** Physical pin 15: Y4; open_collector. */
  "Y4": "15",
  /** Physical pin 16: Y3; open_collector. */
  "Y3": "16",
  /** Physical pin 17: Y2; open_collector. */
  "Y2": "17",
  /** Physical pin 18: Y1; open_collector. */
  "Y1": "18",
  /** Physical pin 19: Y0; open_collector. */
  "Y0": "19",
  /** Physical pin 20: V_{CC2}; power_in. */
  "V_{CC2}": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN75160BDW extends Component.withPins({
  /** Physical pin 1: TE; input. */
  "TE": "1",
  /** Physical pin 2: B1; bidirectional. */
  "B1": "2",
  /** Physical pin 3: B2; bidirectional. */
  "B2": "3",
  /** Physical pin 4: B3; bidirectional. */
  "B3": "4",
  /** Physical pin 5: B4; bidirectional. */
  "B4": "5",
  /** Physical pin 6: B5; bidirectional. */
  "B5": "6",
  /** Physical pin 7: B6; bidirectional. */
  "B6": "7",
  /** Physical pin 8: B7; bidirectional. */
  "B7": "8",
  /** Physical pin 9: B8; bidirectional. */
  "B8": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{PE}; input. */
  "~{PE}": "11",
  /** Physical pin 12: D8; bidirectional. */
  "D8": "12",
  /** Physical pin 13: D7; bidirectional. */
  "D7": "13",
  /** Physical pin 14: D6; bidirectional. */
  "D6": "14",
  /** Physical pin 15: D5; bidirectional. */
  "D5": "15",
  /** Physical pin 16: D4; bidirectional. */
  "D4": "16",
  /** Physical pin 17: D3; bidirectional. */
  "D3": "17",
  /** Physical pin 18: D2; bidirectional. */
  "D2": "18",
  /** Physical pin 19: D1; bidirectional. */
  "D1": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN75160BN extends Component.withPins({
  /** Physical pin 1: TE; input. */
  "TE": "1",
  /** Physical pin 2: B1; bidirectional. */
  "B1": "2",
  /** Physical pin 3: B2; bidirectional. */
  "B2": "3",
  /** Physical pin 4: B3; bidirectional. */
  "B3": "4",
  /** Physical pin 5: B4; bidirectional. */
  "B4": "5",
  /** Physical pin 6: B5; bidirectional. */
  "B5": "6",
  /** Physical pin 7: B6; bidirectional. */
  "B6": "7",
  /** Physical pin 8: B7; bidirectional. */
  "B7": "8",
  /** Physical pin 9: B8; bidirectional. */
  "B8": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{PE}; input. */
  "~{PE}": "11",
  /** Physical pin 12: D8; bidirectional. */
  "D8": "12",
  /** Physical pin 13: D7; bidirectional. */
  "D7": "13",
  /** Physical pin 14: D6; bidirectional. */
  "D6": "14",
  /** Physical pin 15: D5; bidirectional. */
  "D5": "15",
  /** Physical pin 16: D4; bidirectional. */
  "D4": "16",
  /** Physical pin 17: D3; bidirectional. */
  "D3": "17",
  /** Physical pin 18: D2; bidirectional. */
  "D2": "18",
  /** Physical pin 19: D1; bidirectional. */
  "D1": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TB5D1MD extends Component.withPins({
  /** Physical pin 1: AI; input. */
  "AI": "1",
  /** Physical pin 2: AO; output. */
  "AO": "2",
  /** Physical pin 3: ~{AO}; output. */
  "~{AO}": "3",
  /** Physical pin 4: E1; input. */
  "E1": "4",
  /** Physical pin 5: ~{BO}; output. */
  "~{BO}": "5",
  /** Physical pin 6: BO; output. */
  "BO": "6",
  /** Physical pin 7: BI; input. */
  "BI": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: CI; input. */
  "CI": "9",
  /** Physical pin 10: CO; output. */
  "CO": "10",
  /** Physical pin 11: ~{CO}; output. */
  "~{CO}": "11",
  /** Physical pin 12: E2; input. */
  "E2": "12",
  /** Physical pin 13: ~{DO}; output. */
  "~{DO}": "13",
  /** Physical pin 14: DO; output. */
  "DO": "14",
  /** Physical pin 15: DI; input. */
  "DI": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TB5D1MDW extends Component.withPins({
  /** Physical pin 1: AI; input. */
  "AI": "1",
  /** Physical pin 2: AO; output. */
  "AO": "2",
  /** Physical pin 3: ~{AO}; output. */
  "~{AO}": "3",
  /** Physical pin 4: E1; input. */
  "E1": "4",
  /** Physical pin 5: ~{BO}; output. */
  "~{BO}": "5",
  /** Physical pin 6: BO; output. */
  "BO": "6",
  /** Physical pin 7: BI; input. */
  "BI": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: CI; input. */
  "CI": "9",
  /** Physical pin 10: CO; output. */
  "CO": "10",
  /** Physical pin 11: ~{CO}; output. */
  "~{CO}": "11",
  /** Physical pin 12: E2; input. */
  "E2": "12",
  /** Physical pin 13: ~{DO}; output. */
  "~{DO}": "13",
  /** Physical pin 14: DO; output. */
  "DO": "14",
  /** Physical pin 15: DI; input. */
  "DI": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TB5D2H extends Component.withPins({
  /** Physical pin 1: AI; input. */
  "AI": "1",
  /** Physical pin 2: AO; output. */
  "AO": "2",
  /** Physical pin 3: ~{AO}; output. */
  "~{AO}": "3",
  /** Physical pin 4: E1; input. */
  "E1": "4",
  /** Physical pin 5: ~{BO}; output. */
  "~{BO}": "5",
  /** Physical pin 6: BO; output. */
  "BO": "6",
  /** Physical pin 7: BI; input. */
  "BI": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: CI; input. */
  "CI": "9",
  /** Physical pin 10: CO; output. */
  "CO": "10",
  /** Physical pin 11: ~{CO}; output. */
  "~{CO}": "11",
  /** Physical pin 12: E2; input. */
  "E2": "12",
  /** Physical pin 13: ~{DO}; output. */
  "~{DO}": "13",
  /** Physical pin 14: DO; output. */
  "DO": "14",
  /** Physical pin 15: DI; input. */
  "DI": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TB5D2HDW extends Component.withPins({
  /** Physical pin 1: AI; input. */
  "AI": "1",
  /** Physical pin 2: AO; output. */
  "AO": "2",
  /** Physical pin 3: ~{AO}; output. */
  "~{AO}": "3",
  /** Physical pin 4: E1; input. */
  "E1": "4",
  /** Physical pin 5: ~{BO}; output. */
  "~{BO}": "5",
  /** Physical pin 6: BO; output. */
  "BO": "6",
  /** Physical pin 7: BI; input. */
  "BI": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: CI; input. */
  "CI": "9",
  /** Physical pin 10: CO; output. */
  "CO": "10",
  /** Physical pin 11: ~{CO}; output. */
  "~{CO}": "11",
  /** Physical pin 12: E2; input. */
  "E2": "12",
  /** Physical pin 13: ~{DO}; output. */
  "~{DO}": "13",
  /** Physical pin 14: DO; output. */
  "DO": "14",
  /** Physical pin 15: DI; input. */
  "DI": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TB5R1D extends Component.withPins({
  /** Physical pin 1: ~{AI}; input. */
  "~{AI}": "1",
  /** Physical pin 2: AI; input. */
  "AI": "2",
  /** Physical pin 3: AO; output. */
  "AO": "3",
  /** Physical pin 4: E1; input. */
  "E1": "4",
  /** Physical pin 5: BO; output. */
  "BO": "5",
  /** Physical pin 6: BI; input. */
  "BI": "6",
  /** Physical pin 7: ~{BI}; input. */
  "~{BI}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: ~{CI}; input. */
  "~{CI}": "9",
  /** Physical pin 10: CI; input. */
  "CI": "10",
  /** Physical pin 11: CO; output. */
  "CO": "11",
  /** Physical pin 12: ~{E2}; input. */
  "~{E2}": "12",
  /** Physical pin 13: DO; output. */
  "DO": "13",
  /** Physical pin 14: DI; input. */
  "DI": "14",
  /** Physical pin 15: ~{DI}; input. */
  "~{DI}": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TB5R1DW extends Component.withPins({
  /** Physical pin 1: ~{AI}; input. */
  "~{AI}": "1",
  /** Physical pin 2: AI; input. */
  "AI": "2",
  /** Physical pin 3: AO; output. */
  "AO": "3",
  /** Physical pin 4: E1; input. */
  "E1": "4",
  /** Physical pin 5: BO; output. */
  "BO": "5",
  /** Physical pin 6: BI; input. */
  "BI": "6",
  /** Physical pin 7: ~{BI}; input. */
  "~{BI}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: ~{CI}; input. */
  "~{CI}": "9",
  /** Physical pin 10: CI; input. */
  "CI": "10",
  /** Physical pin 11: CO; output. */
  "CO": "11",
  /** Physical pin 12: ~{E2}; input. */
  "~{E2}": "12",
  /** Physical pin 13: DO; output. */
  "DO": "13",
  /** Physical pin 14: DI; input. */
  "DI": "14",
  /** Physical pin 15: ~{DI}; input. */
  "~{DI}": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TB5R2D extends Component.withPins({
  /** Physical pin 1: ~{AI}; input. */
  "~{AI}": "1",
  /** Physical pin 2: AI; input. */
  "AI": "2",
  /** Physical pin 3: AO; output. */
  "AO": "3",
  /** Physical pin 4: E1; input. */
  "E1": "4",
  /** Physical pin 5: BO; output. */
  "BO": "5",
  /** Physical pin 6: BI; input. */
  "BI": "6",
  /** Physical pin 7: ~{BI}; input. */
  "~{BI}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: ~{CI}; input. */
  "~{CI}": "9",
  /** Physical pin 10: CI; input. */
  "CI": "10",
  /** Physical pin 11: CO; output. */
  "CO": "11",
  /** Physical pin 12: ~{E2}; input. */
  "~{E2}": "12",
  /** Physical pin 13: DO; output. */
  "DO": "13",
  /** Physical pin 14: DI; input. */
  "DI": "14",
  /** Physical pin 15: ~{DI}; input. */
  "~{DI}": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TB5R2DW extends Component.withPins({
  /** Physical pin 1: ~{AI}; input. */
  "~{AI}": "1",
  /** Physical pin 2: AI; input. */
  "AI": "2",
  /** Physical pin 3: AO; output. */
  "AO": "3",
  /** Physical pin 4: E1; input. */
  "E1": "4",
  /** Physical pin 5: BO; output. */
  "BO": "5",
  /** Physical pin 6: BI; input. */
  "BI": "6",
  /** Physical pin 7: ~{BI}; input. */
  "~{BI}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: ~{CI}; input. */
  "~{CI}": "9",
  /** Physical pin 10: CI; input. */
  "CI": "10",
  /** Physical pin 11: CO; output. */
  "CO": "11",
  /** Physical pin 12: ~{E2}; input. */
  "~{E2}": "12",
  /** Physical pin 13: DO; output. */
  "DO": "13",
  /** Physical pin 14: DI; input. */
  "DI": "14",
  /** Physical pin 15: ~{DI}; input. */
  "~{DI}": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9406DC extends Component.withPins({
  /** Physical pin 1: SDA_B; bidirectional. */
  "SDA_B": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCCA; power_in. */
  "VCCA": "3",
  /** Physical pin 4: SDA_A; bidirectional. */
  "SDA_A": "4",
  /** Physical pin 5: SCL_A; bidirectional. */
  "SCL_A": "5",
  /** Physical pin 6: OE; input. */
  "OE": "6",
  /** Physical pin 7: VCCB; power_in. */
  "VCCB": "7",
  /** Physical pin 8: SCL_B; bidirectional. */
  "SCL_B": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9800 extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: SCLA; bidirectional. */
  "SCLA": "2",
  /** Physical pin 3: SDAA; bidirectional. */
  "SDAA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: SDAB; bidirectional. */
  "SDAB": "6",
  /** Physical pin 7: SCLB; bidirectional. */
  "SCLB": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9801 extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: SCLA; bidirectional. */
  "SCLA": "2",
  /** Physical pin 3: SDAA; bidirectional. */
  "SDAA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: SDAB; bidirectional. */
  "SDAB": "6",
  /** Physical pin 7: SCLB; bidirectional. */
  "SCLB": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9802 extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: SCLA; bidirectional. */
  "SCLA": "2",
  /** Physical pin 3: SDAA; bidirectional. */
  "SDAA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: SDAB; bidirectional. */
  "SDAB": "6",
  /** Physical pin 7: SCLB; bidirectional. */
  "SCLB": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9803 extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: SCLA; bidirectional. */
  "SCLA": "2",
  /** Physical pin 3: SDAA; bidirectional. */
  "SDAA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: SDAB; bidirectional. */
  "SDAB": "6",
  /** Physical pin 7: SCLB; bidirectional. */
  "SCLB": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class U2270B extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: OUTPUT; open_collector. */
  "OUTPUT": "2",
  /** Physical pin 3: ~{OE}; input. */
  "~{OE}": "3",
  /** Physical pin 4: INPUT; input. */
  "INPUT": "4",
  /** Physical pin 5: MS; input. */
  "MS": "5",
  /** Physical pin 6: CFE; input. */
  "CFE": "6",
  /** Physical pin 7: DGND; power_in. */
  "DGND": "7",
  /** Physical pin 8: COIL2; output. */
  "COIL2": "8",
  /** Physical pin 9: COIL1; output. */
  "COIL1": "9",
  /** Physical pin 10: VEXT; power_in. */
  "VEXT": "10",
  /** Physical pin 11: DVS; power_in. */
  "DVS": "11",
  /** Physical pin 12: VBATT; power_in. */
  "VBATT": "12",
  /** Physical pin 13: STANDBY; input. */
  "STANDBY": "13",
  /** Physical pin 14: VS; power_in. */
  "VS": "14",
  /** Physical pin 15: RF; input. */
  "RF": "15",
  /** Physical pin 16: HIPASS; input. */
  "HIPASS": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WD2791 extends Component.withPins({
  /** Physical pin 1: ENP; input. */
  "ENP": "1",
  /** Physical pin 2: ~{WE}; input. */
  "~{WE}": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A1; input. */
  "A1": "6",
  /** Physical pin 7: ~{DAL0}; tri_state. */
  "~{DAL0}": "7",
  /** Physical pin 8: ~{DAL1}; tri_state. */
  "~{DAL1}": "8",
  /** Physical pin 9: ~{DAL2}; tri_state. */
  "~{DAL2}": "9",
  /** Physical pin 10: ~{DAL3}; tri_state. */
  "~{DAL3}": "10",
  /** Physical pin 11: ~{DAL4}; tri_state. */
  "~{DAL4}": "11",
  /** Physical pin 12: ~{DAL5}; tri_state. */
  "~{DAL5}": "12",
  /** Physical pin 13: ~{DAL6}; tri_state. */
  "~{DAL6}": "13",
  /** Physical pin 14: ~{DAL7}; tri_state. */
  "~{DAL7}": "14",
  /** Physical pin 15: STEP; output. */
  "STEP": "15",
  /** Physical pin 16: DIRC; output. */
  "DIRC": "16",
  /** Physical pin 17: ~{5}/8; input. */
  "~{5}/8": "17",
  /** Physical pin 18: RPW; input. */
  "RPW": "18",
  /** Physical pin 19: ~{MR}; input. */
  "~{MR}": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{TEST}; input. */
  "~{TEST}": "22",
  /** Physical pin 23: PUMP; output. */
  "PUMP": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
  /** Physical pin 25: ~{ENMF}; input. */
  "~{ENMF}": "25",
  /** Physical pin 26: VCO; input. */
  "VCO": "26",
  /** Physical pin 27: ~{RAW_READ}; input. */
  "~{RAW_READ}": "27",
  /** Physical pin 28: HLD; output. */
  "HLD": "28",
  /** Physical pin 29: TG43; output. */
  "TG43": "29",
  /** Physical pin 30: WG; output. */
  "WG": "30",
  /** Physical pin 31: WD; output. */
  "WD": "31",
  /** Physical pin 32: READY; input. */
  "READY": "32",
  /** Physical pin 33: WPW; input. */
  "WPW": "33",
  /** Physical pin 34: ~{TR00}; input. */
  "~{TR00}": "34",
  /** Physical pin 35: ~{IP}; input. */
  "~{IP}": "35",
  /** Physical pin 36: ~{WPRT}; input. */
  "~{WPRT}": "36",
  /** Physical pin 37: ~{DDEN}; input. */
  "~{DDEN}": "37",
  /** Physical pin 38: DRQ; output. */
  "DRQ": "38",
  /** Physical pin 39: INTRQ; output. */
  "INTRQ": "39",
  /** Physical pin 40: HLT; input. */
  "HLT": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WD2793 extends Component.withPins({
  /** Physical pin 1: ENP; input. */
  "ENP": "1",
  /** Physical pin 2: ~{WE}; input. */
  "~{WE}": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A1; input. */
  "A1": "6",
  /** Physical pin 7: DAL0; tri_state. */
  "DAL0": "7",
  /** Physical pin 8: DAL1; tri_state. */
  "DAL1": "8",
  /** Physical pin 9: DAL2; tri_state. */
  "DAL2": "9",
  /** Physical pin 10: DAL3; tri_state. */
  "DAL3": "10",
  /** Physical pin 11: DAL4; tri_state. */
  "DAL4": "11",
  /** Physical pin 12: DAL5; tri_state. */
  "DAL5": "12",
  /** Physical pin 13: DAL6; tri_state. */
  "DAL6": "13",
  /** Physical pin 14: DAL7; tri_state. */
  "DAL7": "14",
  /** Physical pin 15: STEP; output. */
  "STEP": "15",
  /** Physical pin 16: DIRC; output. */
  "DIRC": "16",
  /** Physical pin 17: ~{5}/8; input. */
  "~{5}/8": "17",
  /** Physical pin 18: RPW; input. */
  "RPW": "18",
  /** Physical pin 19: ~{MR}; input. */
  "~{MR}": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{TEST}; input. */
  "~{TEST}": "22",
  /** Physical pin 23: PUMP; output. */
  "PUMP": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
  /** Physical pin 25: ~{ENMF}; input. */
  "~{ENMF}": "25",
  /** Physical pin 26: VCO; input. */
  "VCO": "26",
  /** Physical pin 27: ~{RAW_READ}; input. */
  "~{RAW_READ}": "27",
  /** Physical pin 28: HLD; output. */
  "HLD": "28",
  /** Physical pin 29: TG43; output. */
  "TG43": "29",
  /** Physical pin 30: WG; output. */
  "WG": "30",
  /** Physical pin 31: WD; output. */
  "WD": "31",
  /** Physical pin 32: READY; input. */
  "READY": "32",
  /** Physical pin 33: WPW; input. */
  "WPW": "33",
  /** Physical pin 34: ~{TR00}; input. */
  "~{TR00}": "34",
  /** Physical pin 35: ~{IP}; input. */
  "~{IP}": "35",
  /** Physical pin 36: ~{WPRT}; input. */
  "~{WPRT}": "36",
  /** Physical pin 37: ~{DDEN}; input. */
  "~{DDEN}": "37",
  /** Physical pin 38: DRQ; output. */
  "DRQ": "38",
  /** Physical pin 39: INTRQ; output. */
  "INTRQ": "39",
  /** Physical pin 40: HLT; input. */
  "HLT": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WD2795 extends Component.withPins({
  /** Physical pin 1: ENP; input. */
  "ENP": "1",
  /** Physical pin 2: ~{WE}; input. */
  "~{WE}": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A1; input. */
  "A1": "6",
  /** Physical pin 7: ~{DAL0}; tri_state. */
  "~{DAL0}": "7",
  /** Physical pin 8: ~{DAL1}; tri_state. */
  "~{DAL1}": "8",
  /** Physical pin 9: ~{DAL2}; tri_state. */
  "~{DAL2}": "9",
  /** Physical pin 10: ~{DAL3}; tri_state. */
  "~{DAL3}": "10",
  /** Physical pin 11: ~{DAL4}; tri_state. */
  "~{DAL4}": "11",
  /** Physical pin 12: ~{DAL5}; tri_state. */
  "~{DAL5}": "12",
  /** Physical pin 13: ~{DAL6}; tri_state. */
  "~{DAL6}": "13",
  /** Physical pin 14: ~{DAL7}; tri_state. */
  "~{DAL7}": "14",
  /** Physical pin 15: STEP; output. */
  "STEP": "15",
  /** Physical pin 16: DIRC; output. */
  "DIRC": "16",
  /** Physical pin 17: ~{5}/8; input. */
  "~{5}/8": "17",
  /** Physical pin 18: RPW; input. */
  "RPW": "18",
  /** Physical pin 19: ~{MR}; input. */
  "~{MR}": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{TEST}; input. */
  "~{TEST}": "22",
  /** Physical pin 23: PUMP; output. */
  "PUMP": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
  /** Physical pin 25: SSO; output. */
  "SSO": "25",
  /** Physical pin 26: VCO; input. */
  "VCO": "26",
  /** Physical pin 27: ~{RAW_READ}; input. */
  "~{RAW_READ}": "27",
  /** Physical pin 28: HLD; output. */
  "HLD": "28",
  /** Physical pin 29: TG43; output. */
  "TG43": "29",
  /** Physical pin 30: WG; output. */
  "WG": "30",
  /** Physical pin 31: WD; output. */
  "WD": "31",
  /** Physical pin 32: READY; input. */
  "READY": "32",
  /** Physical pin 33: WPW; input. */
  "WPW": "33",
  /** Physical pin 34: ~{TR00}; input. */
  "~{TR00}": "34",
  /** Physical pin 35: ~{IP}; input. */
  "~{IP}": "35",
  /** Physical pin 36: ~{WPRT}; input. */
  "~{WPRT}": "36",
  /** Physical pin 37: ~{DDEN}; input. */
  "~{DDEN}": "37",
  /** Physical pin 38: DRQ; output. */
  "DRQ": "38",
  /** Physical pin 39: INTRQ; output. */
  "INTRQ": "39",
  /** Physical pin 40: HLT; input. */
  "HLT": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WD2797 extends Component.withPins({
  /** Physical pin 1: ENP; input. */
  "ENP": "1",
  /** Physical pin 2: ~{WE}; input. */
  "~{WE}": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: ~{RE}; input. */
  "~{RE}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A1; input. */
  "A1": "6",
  /** Physical pin 7: DAL0; tri_state. */
  "DAL0": "7",
  /** Physical pin 8: DAL1; tri_state. */
  "DAL1": "8",
  /** Physical pin 9: DAL2; tri_state. */
  "DAL2": "9",
  /** Physical pin 10: DAL3; tri_state. */
  "DAL3": "10",
  /** Physical pin 11: DAL4; tri_state. */
  "DAL4": "11",
  /** Physical pin 12: DAL5; tri_state. */
  "DAL5": "12",
  /** Physical pin 13: DAL6; tri_state. */
  "DAL6": "13",
  /** Physical pin 14: DAL7; tri_state. */
  "DAL7": "14",
  /** Physical pin 15: STEP; output. */
  "STEP": "15",
  /** Physical pin 16: DIRC; output. */
  "DIRC": "16",
  /** Physical pin 17: ~{5}/8; input. */
  "~{5}/8": "17",
  /** Physical pin 18: RPW; input. */
  "RPW": "18",
  /** Physical pin 19: ~{MR}; input. */
  "~{MR}": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{TEST}; input. */
  "~{TEST}": "22",
  /** Physical pin 23: PUMP; output. */
  "PUMP": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
  /** Physical pin 25: SSO; output. */
  "SSO": "25",
  /** Physical pin 26: VCO; input. */
  "VCO": "26",
  /** Physical pin 27: ~{RAW_READ}; input. */
  "~{RAW_READ}": "27",
  /** Physical pin 28: HLD; output. */
  "HLD": "28",
  /** Physical pin 29: TG43; output. */
  "TG43": "29",
  /** Physical pin 30: WG; output. */
  "WG": "30",
  /** Physical pin 31: WD; output. */
  "WD": "31",
  /** Physical pin 32: READY; input. */
  "READY": "32",
  /** Physical pin 33: WPW; input. */
  "WPW": "33",
  /** Physical pin 34: ~{TR00}; input. */
  "~{TR00}": "34",
  /** Physical pin 35: ~{IP}; input. */
  "~{IP}": "35",
  /** Physical pin 36: ~{WPRT}; input. */
  "~{WPRT}": "36",
  /** Physical pin 37: ~{DDEN}; input. */
  "~{DDEN}": "37",
  /** Physical pin 38: DRQ; output. */
  "DRQ": "38",
  /** Physical pin 39: INTRQ; output. */
  "INTRQ": "39",
  /** Physical pin 40: HLT; input. */
  "HLT": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Z8420 extends Component.withPins({
  /** Physical pin 1: D2; bidirectional. */
  "D2": "1",
  /** Physical pin 2: D7; bidirectional. */
  "D7": "2",
  /** Physical pin 3: D6; bidirectional. */
  "D6": "3",
  /** Physical pin 4: ~{CE}; input. */
  "~{CE}": "4",
  /** Physical pin 5: C/~{D}; input. */
  "C/~{D}": "5",
  /** Physical pin 6: B/~{A}; input. */
  "B/~{A}": "6",
  /** Physical pin 7: PA7; bidirectional. */
  "PA7": "7",
  /** Physical pin 8: PA6; bidirectional. */
  "PA6": "8",
  /** Physical pin 9: PA5; bidirectional. */
  "PA5": "9",
  /** Physical pin 10: PA4; bidirectional. */
  "PA4": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: PA3; bidirectional. */
  "PA3": "12",
  /** Physical pin 13: PA2; bidirectional. */
  "PA2": "13",
  /** Physical pin 14: PA1; bidirectional. */
  "PA1": "14",
  /** Physical pin 15: PA0; bidirectional. */
  "PA0": "15",
  /** Physical pin 16: ~{ASTB}; input. */
  "~{ASTB}": "16",
  /** Physical pin 17: ~{BSTB}; input. */
  "~{BSTB}": "17",
  /** Physical pin 18: ARDY; output. */
  "ARDY": "18",
  /** Physical pin 19: D0; bidirectional. */
  "D0": "19",
  /** Physical pin 20: D1; bidirectional. */
  "D1": "20",
  /** Physical pin 21: BRDY; output. */
  "BRDY": "21",
  /** Physical pin 22: IEO; output. */
  "IEO": "22",
  /** Physical pin 23: ~{INT}; open_collector. */
  "~{INT}": "23",
  /** Physical pin 24: IEI; input. */
  "IEI": "24",
  /** Physical pin 25: CLK; input. */
  "CLK": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: PB0; bidirectional. */
  "PB0": "27",
  /** Physical pin 28: PB1; bidirectional. */
  "PB1": "28",
  /** Physical pin 29: PB2; bidirectional. */
  "PB2": "29",
  /** Physical pin 30: PB3; bidirectional. */
  "PB3": "30",
  /** Physical pin 31: PB4; bidirectional. */
  "PB4": "31",
  /** Physical pin 32: PB5; bidirectional. */
  "PB5": "32",
  /** Physical pin 33: PB6; bidirectional. */
  "PB6": "33",
  /** Physical pin 34: PB7; bidirectional. */
  "PB7": "34",
  /** Physical pin 35: ~{RD}; input. */
  "~{RD}": "35",
  /** Physical pin 36: ~{IORQ}; input. */
  "~{IORQ}": "36",
  /** Physical pin 37: ~{M1}; input. */
  "~{M1}": "37",
  /** Physical pin 38: D5; bidirectional. */
  "D5": "38",
  /** Physical pin 39: D4; bidirectional. */
  "D4": "39",
  /** Physical pin 40: D3; bidirectional. */
  "D3": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Z84C20 extends Component.withPins({
  /** Physical pin 1: D2; bidirectional. */
  "D2": "1",
  /** Physical pin 2: D7; bidirectional. */
  "D7": "2",
  /** Physical pin 3: D6; bidirectional. */
  "D6": "3",
  /** Physical pin 4: ~{CE}; input. */
  "~{CE}": "4",
  /** Physical pin 5: C/~{D}; input. */
  "C/~{D}": "5",
  /** Physical pin 6: B/~{A}; input. */
  "B/~{A}": "6",
  /** Physical pin 7: PA7; bidirectional. */
  "PA7": "7",
  /** Physical pin 8: PA6; bidirectional. */
  "PA6": "8",
  /** Physical pin 9: PA5; bidirectional. */
  "PA5": "9",
  /** Physical pin 10: PA4; bidirectional. */
  "PA4": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: PA3; bidirectional. */
  "PA3": "12",
  /** Physical pin 13: PA2; bidirectional. */
  "PA2": "13",
  /** Physical pin 14: PA1; bidirectional. */
  "PA1": "14",
  /** Physical pin 15: PA0; bidirectional. */
  "PA0": "15",
  /** Physical pin 16: ~{ASTB}; input. */
  "~{ASTB}": "16",
  /** Physical pin 17: ~{BSTB}; input. */
  "~{BSTB}": "17",
  /** Physical pin 18: ARDY; output. */
  "ARDY": "18",
  /** Physical pin 19: D0; bidirectional. */
  "D0": "19",
  /** Physical pin 20: D1; bidirectional. */
  "D1": "20",
  /** Physical pin 21: BRDY; output. */
  "BRDY": "21",
  /** Physical pin 22: IEO; output. */
  "IEO": "22",
  /** Physical pin 23: ~{INT}; open_collector. */
  "~{INT}": "23",
  /** Physical pin 24: IEI; input. */
  "IEI": "24",
  /** Physical pin 25: CLK; input. */
  "CLK": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: PB0; bidirectional. */
  "PB0": "27",
  /** Physical pin 28: PB1; bidirectional. */
  "PB1": "28",
  /** Physical pin 29: PB2; bidirectional. */
  "PB2": "29",
  /** Physical pin 30: PB3; bidirectional. */
  "PB3": "30",
  /** Physical pin 31: PB4; bidirectional. */
  "PB4": "31",
  /** Physical pin 32: PB5; bidirectional. */
  "PB5": "32",
  /** Physical pin 33: PB6; bidirectional. */
  "PB6": "33",
  /** Physical pin 34: PB7; bidirectional. */
  "PB7": "34",
  /** Physical pin 35: ~{RD}; input. */
  "~{RD}": "35",
  /** Physical pin 36: ~{IORQ}; input. */
  "~{IORQ}": "36",
  /** Physical pin 37: ~{M1}; input. */
  "~{M1}": "37",
  /** Physical pin 38: D5; bidirectional. */
  "D5": "38",
  /** Physical pin 39: D4; bidirectional. */
  "D4": "39",
  /** Physical pin 40: D3; bidirectional. */
  "D3": "40",
}) {
  override schema = "Interface:Z84C20";
  override referencePrefix = "U";
}

