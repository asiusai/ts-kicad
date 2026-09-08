// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 32-bit General Purpose Floating-point DSP, Dual Port, PGA-223
 *
 * KiCad symbol: `DSP_Freescale:DSP96002`. Reference prefix: `U`.
 * Footprint filters: PGA-223*.
 * @see http://cache.freescale.com/files/dsp/doc/inactive/DSP96002.pdf
 * Keywords: DSP 32bit Dual Port Processor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSP96002 extends Component.withPins({
  /** Physical pin A1: B.A23; tri_state. */
  "B.A23": "A1",
  /** Physical pin A2: B.A27; tri_state. */
  "B.A27": "A2",
  /** Physical pin A3: B.A29; tri_state. */
  "B.A29": "A3",
  /** Physical pin A4: B.A31; tri_state. */
  "B.A31": "A4",
  /** Physical pin A5: MODA/IRQA; input. */
  "MODA/IRQA": "A5",
  /** Physical pin A6: A.BB; input. */
  "A.BB": "A6",
  /** Physical pin A7: A.BR; output. */
  "A.BR": "A7",
  /** Physical pin A9: A.R/W; tri_state. */
  "A.R/W": "A9",
  /** Physical pin A10: A.S0; tri_state. */
  "A.S0": "A10",
  /** Physical pin A11: A.T_STROBE; tri_state. */
  "A.T_STROBE": "A11",
  /** Physical pin A12: A.AENB; input. */
  "A.AENB": "A12",
  /** Physical pin A13: A.A2; tri_state. */
  "A.A2": "A13",
  /** Physical pin A14: A.A4; tri_state. */
  "A.A4": "A14",
  /** Physical pin A15: A.A7; tri_state. */
  "A.A7": "A15",
  /** Physical pin A16: A.A10; tri_state. */
  "A.A10": "A16",
  /** Physical pin A17: A.A13; tri_state. */
  "A.A13": "A17",
  /** Physical pin A18: A.A16; tri_state. */
  "A.A16": "A18",
  /** Physical pin B1: B.A20; tri_state. */
  "B.A20": "B1",
  /** Physical pin B2: B.A25; tri_state. */
  "B.A25": "B2",
  /** Physical pin B3: B.A28; tri_state. */
  "B.A28": "B3",
  /** Physical pin B4: B.A30; tri_state. */
  "B.A30": "B4",
  /** Physical pin B5: MODB/IRQB; input. */
  "MODB/IRQB": "B5",
  /** Physical pin B6: A.BG; input. */
  "A.BG": "B6",
  /** Physical pin B7: A.BA; open_collector. */
  "A.BA": "B7",
  /** Physical pin B8: B.T_TYPE; output. */
  "B.T_TYPE": "B8",
  /** Physical pin B9: A.S1; tri_state. */
  "A.S1": "B9",
  /** Physical pin B10: A.BUS_STR; output. */
  "A.BUS_STR": "B10",
  /** Physical pin B11: A.A0; tri_state. */
  "A.A0": "B11",
  /** Physical pin B12: A.A3; tri_state. */
  "A.A3": "B12",
  /** Physical pin B13: A.A6; tri_state. */
  "A.A6": "B13",
  /** Physical pin B14: A.A9; tri_state. */
  "A.A9": "B14",
  /** Physical pin B15: A.A11; tri_state. */
  "A.A11": "B15",
  /** Physical pin B16: A.A14; tri_state. */
  "A.A14": "B16",
  /** Physical pin B17: A.A18; tri_state. */
  "A.A18": "B17",
  /** Physical pin B18: A.A20; tri_state. */
  "A.A20": "B18",
  /** Physical pin C1: B.A17; tri_state. */
  "B.A17": "C1",
  /** Physical pin C2: B.A21; tri_state. */
  "B.A21": "C2",
  /** Physical pin C3: B.A26; tri_state. */
  "B.A26": "C3",
  /** Physical pin C4: GND; power_in. */
  "GND_C4": "C4",
  /** Physical pin C5: MODC/IRQC; input. */
  "MODC/IRQC": "C5",
  /** Physical pin C6: RESET; input. */
  "RESET": "C6",
  /** Physical pin C7: A.BUS_LOCK; output. */
  "A.BUS_LOCK": "C7",
  /** Physical pin C8: A.T_TYPE; output. */
  "A.T_TYPE": "C8",
  /** Physical pin C10: A.A1; tri_state. */
  "A.A1": "C10",
  /** Physical pin C11: A.A5; tri_state. */
  "A.A5": "C11",
  /** Physical pin C12: A.A8; tri_state. */
  "A.A8": "C12",
  /** Physical pin C13: A.A12; tri_state. */
  "A.A12": "C13",
  /** Physical pin C14: A.A15; tri_state. */
  "A.A15": "C14",
  /** Physical pin C15: A.A17; tri_state. */
  "A.A17": "C15",
  /** Physical pin C16: A.A19; tri_state. */
  "A.A19": "C16",
  /** Physical pin C17: A.A21; tri_state. */
  "A.A21": "C17",
  /** Physical pin C18: A.A23; tri_state. */
  "A.A23": "C18",
  /** Physical pin D1: B.A15; tri_state. */
  "B.A15": "D1",
  /** Physical pin D2: B.A18; tri_state. */
  "B.A18": "D2",
  /** Physical pin D3: B.A24; tri_state. */
  "B.A24": "D3",
  /** Physical pin D5: GND; power_in. */
  "GND_D5": "D5",
  /** Physical pin D6: GND; power_in. */
  "GND_D6": "D6",
  /** Physical pin D7: GND; power_in. */
  "GND_D7": "D7",
  /** Physical pin D8: VCC; power_in. */
  "VCC_D8": "D8",
  /** Physical pin D9: VCC; power_in. */
  "VCC_D9": "D9",
  /** Physical pin D10: VCC; power_in. */
  "VCC_D10": "D10",
  /** Physical pin D11: GND; power_in. */
  "GND_D11": "D11",
  /** Physical pin D12: VCC; power_in. */
  "VCC_D12": "D12",
  /** Physical pin D13: GND; power_in. */
  "GND_D13": "D13",
  /** Physical pin D14: GND; power_in. */
  "GND_D14": "D14",
  /** Physical pin D15: GND; power_in. */
  "GND_D15": "D15",
  /** Physical pin D16: A.A22; tri_state. */
  "A.A22": "D16",
  /** Physical pin D17: A.A25; tri_state. */
  "A.A25": "D17",
  /** Physical pin D18: A.A26; tri_state. */
  "A.A26": "D18",
  /** Physical pin E1: B.A13; tri_state. */
  "B.A13": "E1",
  /** Physical pin E2: B.A16; tri_state. */
  "B.A16": "E2",
  /** Physical pin E3: B.A22; tri_state. */
  "B.A22": "E3",
  /** Physical pin E4: GND; power_in. */
  "GND_E4": "E4",
  /** Physical pin E15: GND; power_in. */
  "GND_E15": "E15",
  /** Physical pin E16: A.A24; tri_state. */
  "A.A24": "E16",
  /** Physical pin E17: A.A28; tri_state. */
  "A.A28": "E17",
  /** Physical pin E18: A.A29; tri_state. */
  "A.A29": "E18",
  /** Physical pin F1: B.A12; tri_state. */
  "B.A12": "F1",
  /** Physical pin F2: B.A14; tri_state. */
  "B.A14": "F2",
  /** Physical pin F3: B.A19; tri_state. */
  "B.A19": "F3",
  /** Physical pin F4: GND; power_in. */
  "GND_F4": "F4",
  /** Physical pin F15: GND; power_in. */
  "GND_F15": "F15",
  /** Physical pin F16: A.A27; tri_state. */
  "A.A27": "F16",
  /** Physical pin F17: A.A30; tri_state. */
  "A.A30": "F17",
  /** Physical pin F18: A.D31; tri_state. */
  "A.D31": "F18",
  /** Physical pin G1: B.A9; tri_state. */
  "B.A9": "G1",
  /** Physical pin G2: B.A10; tri_state. */
  "B.A10": "G2",
  /** Physical pin G3: VCC; power_in. */
  "VCC_G3": "G3",
  /** Physical pin G4: VCC; power_in. */
  "VCC_G4": "G4",
  /** Physical pin G15: GND; power_in. */
  "GND_G15": "G15",
  /** Physical pin G16: A.A31; tri_state. */
  "A.A31": "G16",
  /** Physical pin G17: A.D30; tri_state. */
  "A.D30": "G17",
  /** Physical pin G18: A.D29; tri_state. */
  "A.D29": "G18",
  /** Physical pin H1: B.A8; tri_state. */
  "B.A8": "H1",
  /** Physical pin H2: CLK; input. */
  "CLK": "H2",
  /** Physical pin H3: B.A11; tri_state. */
  "B.A11": "H3",
  /** Physical pin H4: VCC; power_in. */
  "VCC_H4": "H4",
  /** Physical pin H15: VCC; power_in. */
  "VCC_H15": "H15",
  /** Physical pin H16: A.D28; tri_state. */
  "A.D28": "H16",
  /** Physical pin H17: A.D27; tri_state. */
  "A.D27": "H17",
  /** Physical pin H18: A.D26; tri_state. */
  "A.D26": "H18",
  /** Physical pin J1: A.TACK; input. */
  "A.TACK": "J1",
  /** Physical pin J2: B.TACK; input. */
  "B.TACK": "J2",
  /** Physical pin J3: B.A7; tri_state. */
  "B.A7": "J3",
  /** Physical pin J4: GND; power_in. */
  "GND_J4": "J4",
  /** Physical pin J15: GND; power_in. */
  "GND_J15": "J15",
  /** Physical pin J16: A.D24; tri_state. */
  "A.D24": "J16",
  /** Physical pin J17: A.D25; tri_state. */
  "A.D25": "J17",
  /** Physical pin J18: A.D23; tri_state. */
  "A.D23": "J18",
  /** Physical pin K1: B.A4; tri_state. */
  "B.A4": "K1",
  /** Physical pin K2: B.A5; tri_state. */
  "B.A5": "K2",
  /** Physical pin K3: B.A6; tri_state. */
  "B.A6": "K3",
  /** Physical pin K4: VCC; power_in. */
  "VCC_K4": "K4",
  /** Physical pin K15: GND; power_in. */
  "GND_K15": "K15",
  /** Physical pin K16: A.D20; tri_state. */
  "A.D20": "K16",
  /** Physical pin K17: A.D21; tri_state. */
  "A.D21": "K17",
  /** Physical pin K18: A.D22; tri_state. */
  "A.D22": "K18",
  /** Physical pin L1: B.A3; tri_state. */
  "B.A3": "L1",
  /** Physical pin L2: B.A1; tri_state. */
  "B.A1": "L2",
  /** Physical pin L3: B.A2; tri_state. */
  "B.A2": "L3",
  /** Physical pin L4: VCC; power_in. */
  "VCC_L4": "L4",
  /** Physical pin L15: VCC; power_in. */
  "VCC_L15": "L15",
  /** Physical pin L16: A.D16; tri_state. */
  "A.D16": "L16",
  /** Physical pin L17: A.D18; tri_state. */
  "A.D18": "L17",
  /** Physical pin L18: A.D19; tri_state. */
  "A.D19": "L18",
  /** Physical pin M1: B.A0; tri_state. */
  "B.A0": "M1",
  /** Physical pin M2: B.S1; tri_state. */
  "B.S1": "M2",
  /** Physical pin M3: B.S0; tri_state. */
  "B.S0": "M3",
  /** Physical pin M4: GND; power_in. */
  "GND_M4": "M4",
  /** Physical pin M15: VCC; power_in. */
  "VCC_M15": "M15",
  /** Physical pin M16: VCC; power_in. */
  "VCC_M16": "M16",
  /** Physical pin M17: A.DENB; input. */
  "A.DENB": "M17",
  /** Physical pin M18: A.D17; tri_state. */
  "A.D17": "M18",
  /** Physical pin N1: B.AENB; input. */
  "B.AENB": "N1",
  /** Physical pin N4: GND; power_in. */
  "GND_N4": "N4",
  /** Physical pin N15: GND; power_in. */
  "GND_N15": "N15",
  /** Physical pin N16: A.D11; tri_state. */
  "A.D11": "N16",
  /** Physical pin N17: A.D14; tri_state. */
  "A.D14": "N17",
  /** Physical pin N18: A.D15; tri_state. */
  "A.D15": "N18",
  /** Physical pin P1: B.R/W; tri_state. */
  "B.R/W": "P1",
  /** Physical pin P2: B.T_STROBE; tri_state. */
  "B.T_STROBE": "P2",
  /** Physical pin P3: B.BUS_LOCK; output. */
  "B.BUS_LOCK": "P3",
  /** Physical pin P4: GND; power_in. */
  "GND_P4": "P4",
  /** Physical pin P15: GND; power_in. */
  "GND_P15": "P15",
  /** Physical pin P16: A.D7; tri_state. */
  "A.D7": "P16",
  /** Physical pin P17: A.D12; tri_state. */
  "A.D12": "P17",
  /** Physical pin P18: A.D13; tri_state. */
  "A.D13": "P18",
  /** Physical pin R1: B.BUS_STR; output. */
  "B.BUS_STR": "R1",
  /** Physical pin R2: B.BR; output. */
  "B.BR": "R2",
  /** Physical pin R3: B.BB; input. */
  "B.BB": "R3",
  /** Physical pin R4: GND; power_in. */
  "GND_R4": "R4",
  /** Physical pin R5: GND; power_in. */
  "GND_R5": "R5",
  /** Physical pin R6: GND; power_in. */
  "GND_R6": "R6",
  /** Physical pin R7: VCC; power_in. */
  "VCC_R7": "R7",
  /** Physical pin R8: GND; power_in. */
  "GND_R8": "R8",
  /** Physical pin R9: VCC; power_in. */
  "VCC_R9": "R9",
  /** Physical pin R10: VCC; power_in. */
  "VCC_R10": "R10",
  /** Physical pin R11: VCC; power_in. */
  "VCC_R11": "R11",
  /** Physical pin R12: GND; power_in. */
  "GND_R12": "R12",
  /** Physical pin R13: GND; power_in. */
  "GND_R13": "R13",
  /** Physical pin R14: GND; power_in. */
  "GND_R14": "R14",
  /** Physical pin R15: GND; power_in. */
  "GND_R15": "R15",
  /** Physical pin R16: A.D5; tri_state. */
  "A.D5": "R16",
  /** Physical pin R17: A.D9; tri_state. */
  "A.D9": "R17",
  /** Physical pin R18: A.D10; tri_state. */
  "A.D10": "R18",
  /** Physical pin T1: B.BG; input. */
  "B.BG": "T1",
  /** Physical pin T2: B.BA; open_collector. */
  "B.BA": "T2",
  /** Physical pin T3: A.HOSTREQ; output. */
  "A.HOSTREQ": "T3",
  /** Physical pin T4: DEBUGREQ; input. */
  "DEBUGREQ": "T4",
  /** Physical pin T5: A.HOSTSEL; input. */
  "A.HOSTSEL": "T5",
  /** Physical pin T6: B.D31; tri_state. */
  "B.D31": "T6",
  /** Physical pin T7: GND; power_in. */
  "GND_T7": "T7",
  /** Physical pin T8: B.D26; tri_state. */
  "B.D26": "T8",
  /** Physical pin T9: B.D22; tri_state. */
  "B.D22": "T9",
  /** Physical pin T10: B.D17; tri_state. */
  "B.D17": "T10",
  /** Physical pin T11: B.D14; tri_state. */
  "B.D14": "T11",
  /** Physical pin T12: B.D11; tri_state. */
  "B.D11": "T12",
  /** Physical pin T13: B.D7; tri_state. */
  "B.D7": "T13",
  /** Physical pin T14: B.D4; tri_state. */
  "B.D4": "T14",
  /** Physical pin T15: B.D1; tri_state. */
  "B.D1": "T15",
  /** Physical pin T16: A.D2; tri_state. */
  "A.D2": "T16",
  /** Physical pin T17: A.D6; tri_state. */
  "A.D6": "T17",
  /** Physical pin T18: A.D8; tri_state. */
  "A.D8": "T18",
  /** Physical pin U1: B.HOSTREQ; output. */
  "B.HOSTREQ": "U1",
  /** Physical pin U2: DSCK/OS1; bidirectional. */
  "DSCK/OS1": "U2",
  /** Physical pin U4: A.HOSTACK; input. */
  "A.HOSTACK": "U4",
  /** Physical pin U5: B.DENB; input. */
  "B.DENB": "U5",
  /** Physical pin U6: B.D29; tri_state. */
  "B.D29": "U6",
  /** Physical pin U7: B.D27; tri_state. */
  "B.D27": "U7",
  /** Physical pin U8: B.D24; tri_state. */
  "B.D24": "U8",
  /** Physical pin U9: B.D21; tri_state. */
  "B.D21": "U9",
  /** Physical pin U10: B.D18; tri_state. */
  "B.D18": "U10",
  /** Physical pin U11: B.D15; tri_state. */
  "B.D15": "U11",
  /** Physical pin U12: B.D12; tri_state. */
  "B.D12": "U12",
  /** Physical pin U13: B.D9; tri_state. */
  "B.D9": "U13",
  /** Physical pin U14: B.D6; tri_state. */
  "B.D6": "U14",
  /** Physical pin U15: B.D3; tri_state. */
  "B.D3": "U15",
  /** Physical pin U16: B.D0; tri_state. */
  "B.D0": "U16",
  /** Physical pin U17: A.D3; tri_state. */
  "A.D3": "U17",
  /** Physical pin U18: A.D4; tri_state. */
  "A.D4": "U18",
  /** Physical pin V1: DSO; output. */
  "DSO": "V1",
  /** Physical pin V2: DSI/OS0; bidirectional. */
  "DSI/OS0": "V2",
  /** Physical pin V3: B.HOSTACK; input. */
  "B.HOSTACK": "V3",
  /** Physical pin V4: B.HOSTSEL; input. */
  "B.HOSTSEL": "V4",
  /** Physical pin V5: B.D30; tri_state. */
  "B.D30": "V5",
  /** Physical pin V6: B.D28; tri_state. */
  "B.D28": "V6",
  /** Physical pin V7: B.D25; tri_state. */
  "B.D25": "V7",
  /** Physical pin V8: B.D23; tri_state. */
  "B.D23": "V8",
  /** Physical pin V9: B.D20; tri_state. */
  "B.D20": "V9",
  /** Physical pin V10: B.D19; tri_state. */
  "B.D19": "V10",
  /** Physical pin V11: B.D16; tri_state. */
  "B.D16": "V11",
  /** Physical pin V12: B.D13; tri_state. */
  "B.D13": "V12",
  /** Physical pin V13: B.D10; tri_state. */
  "B.D10": "V13",
  /** Physical pin V14: B.D8; tri_state. */
  "B.D8": "V14",
  /** Physical pin V15: B.D5; tri_state. */
  "B.D5": "V15",
  /** Physical pin V16: B.D2; tri_state. */
  "B.D2": "V16",
  /** Physical pin V17: A.D0; tri_state. */
  "A.D0": "V17",
  /** Physical pin V18: A.D1; tri_state. */
  "A.D1": "V18",
}) {
  override schema = "DSP_Freescale:DSP96002";
  override referencePrefix = "U";
}

