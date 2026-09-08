// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Cologne Chip GateMate FPGA, BGA-324
 *
 * KiCad symbol: `FPGA_CologneChip_GateMate:CCGM1A1`. Reference prefix: `U`.
 * Footprint filters: BGA*15x15mm*Layout18x18*P0.8mm*.
 * @see https://colognechip.com/docs/ds1001-gatemate1-datasheet-2022-05.pdf
 * Keywords: GateMate FPGA.
 * Default footprint: Package_BGA:BGA-324_15x15mm_Layout18x18_P0.8mm.
 * Units: 8.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CCGM1A1 extends Component.withPins({
  /** Physical pin U11: SER_RX_P; input. */
  "SER_RX_P": "U11",
  /** Physical pin U13: SER_TX_P; output. */
  "SER_TX_P": "U13",
  /** Physical pin V11: SER_RX_N; input. */
  "SER_RX_N": "V11",
  /** Physical pin V12: SER_RTERM; passive. */
  "SER_RTERM": "V12",
  /** Physical pin V13: SER_TX_N; output. */
  "SER_TX_N": "V13",
  /** Physical pin N3: IO_WA_A8/~{SPI_CS}; bidirectional. */
  "IO_WA_A8/~{SPI_CS}": "N3",
  /** Physical pin N4: IO_WA_B8/SPI_CLK; bidirectional. */
  "IO_WA_B8/SPI_CLK": "N4",
  /** Physical pin N5: VDD_WA; power_in. */
  "VDD_WA_N5": "N5",
  /** Physical pin P1: IO_WA_A7/SPI_D1; bidirectional. */
  "IO_WA_A7/SPI_D1": "P1",
  /** Physical pin P2: IO_WA_B7/SPI_D0; bidirectional. */
  "IO_WA_B7/SPI_D0": "P2",
  /** Physical pin P3: VDD_WA; passive. */
  "VDD_WA_P3": "P3",
  /** Physical pin P5: VDD_WA; passive. */
  "VDD_WA_P5": "P5",
  /** Physical pin R1: IO_WA_A6/SPI_D3; bidirectional. */
  "IO_WA_A6/SPI_D3": "R1",
  /** Physical pin R2: IO_WA_B6/SPI_D2; bidirectional. */
  "IO_WA_B6/SPI_D2": "R2",
  /** Physical pin R3: JTAG_TCK/IO_WA_A5; bidirectional. */
  "JTAG_TCK/IO_WA_A5": "R3",
  /** Physical pin R4: IO_WA_B5/SPI_FWD; bidirectional. */
  "IO_WA_B5/SPI_FWD": "R4",
  /** Physical pin R5: CFG_MD0/IO_WA_A0; bidirectional. */
  "CFG_MD0/IO_WA_A0": "R5",
  /** Physical pin T1: VDD_WA; passive. */
  "VDD_WA_T1": "T1",
  /** Physical pin T2: JTAG_TDI/IO_WA_A4; bidirectional. */
  "JTAG_TDI/IO_WA_A4": "T2",
  /** Physical pin T3: JTAG_TMS/IO_WA_B4; bidirectional. */
  "JTAG_TMS/IO_WA_B4": "T3",
  /** Physical pin T5: CFG_MD1/IO_WA_B0; bidirectional. */
  "CFG_MD1/IO_WA_B0": "T5",
  /** Physical pin U1: POR_EN/IO_WA_A3; bidirectional. */
  "POR_EN/IO_WA_A3": "U1",
  /** Physical pin U2: JTAG_TDO/IO_WA_B3; bidirectional. */
  "JTAG_TDO/IO_WA_B3": "U2",
  /** Physical pin U3: VDD_WA; passive. */
  "VDD_WA_U3": "U3",
  /** Physical pin U4: CFG_MD2/IO_WA_A1; bidirectional. */
  "CFG_MD2/IO_WA_A1": "U4",
  /** Physical pin V2: IO_WA_A2/~{CFG_FAILED}; bidirectional. */
  "IO_WA_A2/~{CFG_FAILED}": "V2",
  /** Physical pin V3: IO_WA_B2/CFG_DONE; bidirectional. */
  "IO_WA_B2/CFG_DONE": "V3",
  /** Physical pin V4: CFG_MD3/IO_WA_B1; bidirectional. */
  "CFG_MD3/IO_WA_B1": "V4",
  /** Physical pin A3: IO_NA_A0; bidirectional. */
  "IO_NA_A0": "A3",
  /** Physical pin A4: IO_NA_A1; bidirectional. */
  "IO_NA_A1": "A4",
  /** Physical pin A5: VDD_NA; power_in. */
  "VDD_NA_A5": "A5",
  /** Physical pin A6: IO_NA_A4; bidirectional. */
  "IO_NA_A4": "A6",
  /** Physical pin A8: IO_NA_A7; bidirectional. */
  "IO_NA_A7": "A8",
  /** Physical pin A9: IO_NB_B0; bidirectional. */
  "IO_NB_B0": "A9",
  /** Physical pin A11: IO_NB_B2; bidirectional. */
  "IO_NB_B2": "A11",
  /** Physical pin A12: IO_NB_B4; bidirectional. */
  "IO_NB_B4": "A12",
  /** Physical pin A14: IO_NB_B7; bidirectional. */
  "IO_NB_B7": "A14",
  /** Physical pin B3: IO_NA_B0; bidirectional. */
  "IO_NA_B0": "B3",
  /** Physical pin B4: IO_NA_B1; bidirectional. */
  "IO_NA_B1": "B4",
  /** Physical pin B5: IO_NA_A2; bidirectional. */
  "IO_NA_A2": "B5",
  /** Physical pin B6: IO_NA_B4; bidirectional. */
  "IO_NA_B4": "B6",
  /** Physical pin B7: VDD_NA; passive. */
  "VDD_NA_B7": "B7",
  /** Physical pin B8: IO_NA_B7; bidirectional. */
  "IO_NA_B7": "B8",
  /** Physical pin B9: IO_NB_A0; bidirectional. */
  "IO_NB_A0": "B9",
  /** Physical pin B10: VDD_NB; power_in. */
  "VDD_NB_B10": "B10",
  /** Physical pin B11: IO_NB_A2; bidirectional. */
  "IO_NB_A2": "B11",
  /** Physical pin B12: IO_NB_A4; bidirectional. */
  "IO_NB_A4": "B12",
  /** Physical pin B13: VDD_NB; passive. */
  "VDD_NB_B13": "B13",
  /** Physical pin B14: IO_NB_A7; bidirectional. */
  "IO_NB_A7": "B14",
  /** Physical pin C5: IO_NA_B2; bidirectional. */
  "IO_NA_B2": "C5",
  /** Physical pin C6: IO_NA_A3; bidirectional. */
  "IO_NA_A3": "C6",
  /** Physical pin C7: IO_NA_A5; bidirectional. */
  "IO_NA_A5": "C7",
  /** Physical pin C8: IO_NA_A6; bidirectional. */
  "IO_NA_A6": "C8",
  /** Physical pin C9: IO_NA_A8; bidirectional. */
  "IO_NA_A8": "C9",
  /** Physical pin C10: IO_NB_B1; bidirectional. */
  "IO_NB_B1": "C10",
  /** Physical pin C11: IO_NB_B3; bidirectional. */
  "IO_NB_B3": "C11",
  /** Physical pin C12: IO_NB_B5; bidirectional. */
  "IO_NB_B5": "C12",
  /** Physical pin C13: IO_NB_B6; bidirectional. */
  "IO_NB_B6": "C13",
  /** Physical pin C14: IO_NB_B8; bidirectional. */
  "IO_NB_B8": "C14",
  /** Physical pin D6: IO_NA_B3; bidirectional. */
  "IO_NA_B3": "D6",
  /** Physical pin D7: IO_NA_B5; bidirectional. */
  "IO_NA_B5": "D7",
  /** Physical pin D8: IO_NA_B6; bidirectional. */
  "IO_NA_B6": "D8",
  /** Physical pin D9: IO_NA_B8; bidirectional. */
  "IO_NA_B8": "D9",
  /** Physical pin D10: IO_NB_A1; bidirectional. */
  "IO_NB_A1": "D10",
  /** Physical pin D11: IO_NB_A3; bidirectional. */
  "IO_NB_A3": "D11",
  /** Physical pin D12: IO_NB_A5; bidirectional. */
  "IO_NB_A5": "D12",
  /** Physical pin D13: IO_NB_A6; bidirectional. */
  "IO_NB_A6": "D13",
  /** Physical pin D14: IO_NB_A8; bidirectional. */
  "IO_NB_A8": "D14",
  /** Physical pin E6: VDD_NA; passive. */
  "VDD_NA_E6": "E6",
  /** Physical pin E8: VDD_NA; passive. */
  "VDD_NA_E8": "E8",
  /** Physical pin E10: VDD_NB; passive. */
  "VDD_NB_E10": "E10",
  /** Physical pin E12: VDD_NB; passive. */
  "VDD_NB_E12": "E12",
  /** Physical pin F7: VDD_NA; passive. */
  "VDD_NA_F7": "F7",
  /** Physical pin F11: VDD_NB; passive. */
  "VDD_NB_F11": "F11",
  /** Physical pin A15: IO_EB_B8; bidirectional. */
  "IO_EB_B8": "A15",
  /** Physical pin A16: VDD_EB; power_in. */
  "VDD_EB_A16": "A16",
  /** Physical pin A17: IO_EB_B5; bidirectional. */
  "IO_EB_B5": "A17",
  /** Physical pin B15: IO_EB_A8; bidirectional. */
  "IO_EB_A8": "B15",
  /** Physical pin B17: IO_EB_A5; bidirectional. */
  "IO_EB_A5": "B17",
  /** Physical pin B18: VDD_EB; passive. */
  "VDD_EB_B18": "B18",
  /** Physical pin C15: IO_EB_B7; bidirectional. */
  "IO_EB_B7": "C15",
  /** Physical pin C16: IO_EB_B6; bidirectional. */
  "IO_EB_B6": "C16",
  /** Physical pin C17: IO_EB_B4; bidirectional. */
  "IO_EB_B4": "C17",
  /** Physical pin C18: IO_EB_A4; bidirectional. */
  "IO_EB_A4": "C18",
  /** Physical pin D15: IO_EB_A7; bidirectional. */
  "IO_EB_A7": "D15",
  /** Physical pin D16: IO_EB_A6; bidirectional. */
  "IO_EB_A6": "D16",
  /** Physical pin D17: IO_EB_B2; bidirectional. */
  "IO_EB_B2": "D17",
  /** Physical pin D18: IO_EB_A2; bidirectional. */
  "IO_EB_A2": "D18",
  /** Physical pin E14: VDD_EB; passive. */
  "VDD_EB_E14": "E14",
  /** Physical pin E15: IO_EB_B3; bidirectional. */
  "IO_EB_B3": "E15",
  /** Physical pin E16: IO_EB_A3; bidirectional. */
  "IO_EB_A3": "E16",
  /** Physical pin E17: VDD_EB; passive. */
  "VDD_EB_E17": "E17",
  /** Physical pin F13: VDD_EB; passive. */
  "VDD_EB_F13": "F13",
  /** Physical pin F15: IO_EB_B1; bidirectional. */
  "IO_EB_B1": "F15",
  /** Physical pin F16: IO_EB_A1; bidirectional. */
  "IO_EB_A1": "F16",
  /** Physical pin F17: IO_EB_B0; bidirectional. */
  "IO_EB_B0": "F17",
  /** Physical pin F18: IO_EB_A0; bidirectional. */
  "IO_EB_A0": "F18",
  /** Physical pin G14: VDD_EA; power_in. */
  "VDD_EA_G14": "G14",
  /** Physical pin G15: IO_EA_B8; bidirectional. */
  "IO_EA_B8": "G15",
  /** Physical pin G16: IO_EA_A8; bidirectional. */
  "IO_EA_A8": "G16",
  /** Physical pin G17: IO_EA_B7; bidirectional. */
  "IO_EA_B7": "G17",
  /** Physical pin G18: IO_EA_A7; bidirectional. */
  "IO_EA_A7": "G18",
  /** Physical pin H15: IO_EA_B6; bidirectional. */
  "IO_EA_B6": "H15",
  /** Physical pin H16: IO_EA_A6; bidirectional. */
  "IO_EA_A6": "H16",
  /** Physical pin H17: VDD_EA; passive. */
  "VDD_EA_H17": "H17",
  /** Physical pin J14: VDD_EA; passive. */
  "VDD_EA_J14": "J14",
  /** Physical pin J15: IO_EA_B5; bidirectional. */
  "IO_EA_B5": "J15",
  /** Physical pin J16: IO_EA_A5; bidirectional. */
  "IO_EA_A5": "J16",
  /** Physical pin J17: IO_EA_B4; bidirectional. */
  "IO_EA_B4": "J17",
  /** Physical pin J18: IO_EA_A4; bidirectional. */
  "IO_EA_A4": "J18",
  /** Physical pin K15: IO_EA_B3; bidirectional. */
  "IO_EA_B3": "K15",
  /** Physical pin K16: IO_EA_A3; bidirectional. */
  "IO_EA_A3": "K16",
  /** Physical pin K17: IO_EA_B2; bidirectional. */
  "IO_EA_B2": "K17",
  /** Physical pin K18: IO_EA_A2; bidirectional. */
  "IO_EA_A2": "K18",
  /** Physical pin L14: VDD_EA; passive. */
  "VDD_EA_L14": "L14",
  /** Physical pin L15: IO_EA_B1; bidirectional. */
  "IO_EA_B1": "L15",
  /** Physical pin L16: IO_EA_A1; bidirectional. */
  "IO_EA_A1": "L16",
  /** Physical pin L17: VDD_EA; passive. */
  "VDD_EA_L17": "L17",
  /** Physical pin M14: IO_EA_B0; bidirectional. */
  "IO_EA_B0": "M14",
  /** Physical pin M15: IO_EA_A0; bidirectional. */
  "IO_EA_A0": "M15",
  /** Physical pin M17: IO_SB_A3; bidirectional. */
  "IO_SB_A3": "M17",
  /** Physical pin M18: IO_SB_B3; bidirectional. */
  "IO_SB_B3": "M18",
  /** Physical pin N11: VDD_SB; power_in. */
  "VDD_SB_N11": "N11",
  /** Physical pin N13: VDD_SB; passive. */
  "VDD_SB_N13": "N13",
  /** Physical pin N14: CLK0/IO_SB_A8; bidirectional. */
  "CLK0/IO_SB_A8": "N14",
  /** Physical pin N15: IO_SB_B8; bidirectional. */
  "IO_SB_B8": "N15",
  /** Physical pin N18: VDD_SB; passive. */
  "VDD_SB_N18": "N18",
  /** Physical pin P6: VDD_SA; power_in. */
  "VDD_SA_P6": "P6",
  /** Physical pin P8: VDD_SA; passive. */
  "VDD_SA_P8": "P8",
  /** Physical pin P10: VDD_SA; passive. */
  "VDD_SA_P10": "P10",
  /** Physical pin P11: IO_SB_A4; bidirectional. */
  "IO_SB_A4": "P11",
  /** Physical pin P12: CLK1/IO_SB_A7; bidirectional. */
  "CLK1/IO_SB_A7": "P12",
  /** Physical pin P13: IO_SB_B7; bidirectional. */
  "IO_SB_B7": "P13",
  /** Physical pin P14: CLK2/IO_SB_A6; bidirectional. */
  "CLK2/IO_SB_A6": "P14",
  /** Physical pin P15: IO_SB_B6; bidirectional. */
  "IO_SB_B6": "P15",
  /** Physical pin P17: IO_SB_A2; bidirectional. */
  "IO_SB_A2": "P17",
  /** Physical pin P18: IO_SB_B2; bidirectional. */
  "IO_SB_B2": "P18",
  /** Physical pin R6: IO_SA_A1; bidirectional. */
  "IO_SA_A1": "R6",
  /** Physical pin R7: IO_SA_A2; bidirectional. */
  "IO_SA_A2": "R7",
  /** Physical pin R8: IO_SA_A4; bidirectional. */
  "IO_SA_A4": "R8",
  /** Physical pin R9: IO_SA_A6; bidirectional. */
  "IO_SA_A6": "R9",
  /** Physical pin R10: IO_SA_A7; bidirectional. */
  "IO_SA_A7": "R10",
  /** Physical pin R11: IO_SB_B4; bidirectional. */
  "IO_SB_B4": "R11",
  /** Physical pin R13: CLK3/IO_SB_A5; bidirectional. */
  "CLK3/IO_SB_A5": "R13",
  /** Physical pin R14: IO_SB_B5; bidirectional. */
  "IO_SB_B5": "R14",
  /** Physical pin R15: VDD_SB; passive. */
  "VDD_SB_R15": "R15",
  /** Physical pin R17: IO_SB_A1; bidirectional. */
  "IO_SB_A1": "R17",
  /** Physical pin R18: IO_SB_B1; bidirectional. */
  "IO_SB_B1": "R18",
  /** Physical pin T6: IO_SA_B1; bidirectional. */
  "IO_SA_B1": "T6",
  /** Physical pin T7: IO_SA_B2; bidirectional. */
  "IO_SA_B2": "T7",
  /** Physical pin T8: IO_SA_B4; bidirectional. */
  "IO_SA_B4": "T8",
  /** Physical pin T9: IO_SA_B6; bidirectional. */
  "IO_SA_B6": "T9",
  /** Physical pin T10: IO_SA_B7; bidirectional. */
  "IO_SA_B7": "T10",
  /** Physical pin T18: VDD_SB; passive. */
  "VDD_SB_T18": "T18",
  /** Physical pin U5: IO_SA_A0; bidirectional. */
  "IO_SA_A0": "U5",
  /** Physical pin U6: VDD_SA; passive. */
  "VDD_SA_U6": "U6",
  /** Physical pin U7: IO_SA_A3; bidirectional. */
  "IO_SA_A3": "U7",
  /** Physical pin U8: IO_SA_A5; bidirectional. */
  "IO_SA_A5": "U8",
  /** Physical pin U9: VDD_SA; passive. */
  "VDD_SA_U9": "U9",
  /** Physical pin U10: IO_SA_A8; bidirectional. */
  "IO_SA_A8": "U10",
  /** Physical pin U17: IO_SB_A0; bidirectional. */
  "IO_SB_A0": "U17",
  /** Physical pin U18: IO_SB_B0; bidirectional. */
  "IO_SB_B0": "U18",
  /** Physical pin V5: IO_SA_B0; bidirectional. */
  "IO_SA_B0": "V5",
  /** Physical pin V7: IO_SA_B3; bidirectional. */
  "IO_SA_B3": "V7",
  /** Physical pin V8: IO_SA_B5; bidirectional. */
  "IO_SA_B5": "V8",
  /** Physical pin V10: IO_SA_B8; bidirectional. */
  "IO_SA_B8": "V10",
  /** Physical pin A2: VDD_WC; power_in. */
  "VDD_WC_A2": "A2",
  /** Physical pin B1: IO_WC_A8; bidirectional. */
  "IO_WC_A8": "B1",
  /** Physical pin B2: IO_WC_B8; bidirectional. */
  "IO_WC_B8": "B2",
  /** Physical pin C2: VDD_WC; passive. */
  "VDD_WC_C2": "C2",
  /** Physical pin C3: IO_WC_A7; bidirectional. */
  "IO_WC_A7": "C3",
  /** Physical pin C4: IO_WC_B7; bidirectional. */
  "IO_WC_B7": "C4",
  /** Physical pin D1: IO_WC_A5; bidirectional. */
  "IO_WC_A5": "D1",
  /** Physical pin D2: IO_WC_B5; bidirectional. */
  "IO_WC_B5": "D2",
  /** Physical pin D3: IO_WC_A6; bidirectional. */
  "IO_WC_A6": "D3",
  /** Physical pin D4: IO_WC_B6; bidirectional. */
  "IO_WC_B6": "D4",
  /** Physical pin D5: VDD_WC; passive. */
  "VDD_WC_D5": "D5",
  /** Physical pin E1: IO_WC_A3; bidirectional. */
  "IO_WC_A3": "E1",
  /** Physical pin E2: IO_WC_B3; bidirectional. */
  "IO_WC_B3": "E2",
  /** Physical pin E3: IO_WC_A4; bidirectional. */
  "IO_WC_A4": "E3",
  /** Physical pin E4: IO_WC_B4; bidirectional. */
  "IO_WC_B4": "E4",
  /** Physical pin F2: VDD_WC; passive. */
  "VDD_WC_F2": "F2",
  /** Physical pin F3: IO_WC_A2; bidirectional. */
  "IO_WC_A2": "F3",
  /** Physical pin F4: IO_WC_B2; bidirectional. */
  "IO_WC_B2": "F4",
  /** Physical pin F5: VDD_WC; passive. */
  "VDD_WC_F5": "F5",
  /** Physical pin G1: IO_WC_A0; bidirectional. */
  "IO_WC_A0": "G1",
  /** Physical pin G2: IO_WC_B0; bidirectional. */
  "IO_WC_B0": "G2",
  /** Physical pin G3: IO_WC_A1; bidirectional. */
  "IO_WC_A1": "G3",
  /** Physical pin G4: IO_WC_B1; bidirectional. */
  "IO_WC_B1": "G4",
  /** Physical pin H1: IO_WB_A7; bidirectional. */
  "IO_WB_A7": "H1",
  /** Physical pin H2: IO_WB_B7; bidirectional. */
  "IO_WB_B7": "H2",
  /** Physical pin H3: IO_WB_A8; bidirectional. */
  "IO_WB_A8": "H3",
  /** Physical pin H4: IO_WB_B8; bidirectional. */
  "IO_WB_B8": "H4",
  /** Physical pin H5: VDD_WB; power_in. */
  "VDD_WB_H5": "H5",
  /** Physical pin J2: VDD_WB; passive. */
  "VDD_WB_J2": "J2",
  /** Physical pin J3: IO_WB_A6; bidirectional. */
  "IO_WB_A6": "J3",
  /** Physical pin J4: IO_WB_B6; bidirectional. */
  "IO_WB_B6": "J4",
  /** Physical pin K1: IO_WB_A5; bidirectional. */
  "IO_WB_A5": "K1",
  /** Physical pin K2: IO_WB_B5; bidirectional. */
  "IO_WB_B5": "K2",
  /** Physical pin K3: IO_WB_A4; bidirectional. */
  "IO_WB_A4": "K3",
  /** Physical pin K4: IO_WB_B4; bidirectional. */
  "IO_WB_B4": "K4",
  /** Physical pin K5: VDD_WB; passive. */
  "VDD_WB_K5": "K5",
  /** Physical pin L1: IO_WB_A3; bidirectional. */
  "IO_WB_A3": "L1",
  /** Physical pin L2: IO_WB_B3; bidirectional. */
  "IO_WB_B3": "L2",
  /** Physical pin L3: IO_WB_A2; bidirectional. */
  "IO_WB_A2": "L3",
  /** Physical pin L4: IO_WB_B2; bidirectional. */
  "IO_WB_B2": "L4",
  /** Physical pin M2: VDD_WB; passive. */
  "VDD_WB_M2": "M2",
  /** Physical pin M3: IO_WB_A1; bidirectional. */
  "IO_WB_A1": "M3",
  /** Physical pin M4: IO_WB_B1; bidirectional. */
  "IO_WB_B1": "M4",
  /** Physical pin M5: VDD_WB; passive. */
  "VDD_WB_M5": "M5",
  /** Physical pin N1: IO_WB_A0; bidirectional. */
  "IO_WB_A0": "N1",
  /** Physical pin N2: IO_WB_B0; bidirectional. */
  "IO_WB_B0": "N2",
  /** Physical pin A1: GND; power_in. */
  "GND_A1": "A1",
  /** Physical pin A7: GND; passive. */
  "GND_A7": "A7",
  /** Physical pin A10: GND; passive. */
  "GND_A10": "A10",
  /** Physical pin A13: GND; passive. */
  "GND_A13": "A13",
  /** Physical pin A18: GND; passive. */
  "GND_A18": "A18",
  /** Physical pin B16: GND; passive. */
  "GND_B16": "B16",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin E5: GND; passive. */
  "GND_E5": "E5",
  /** Physical pin E7: GND; passive. */
  "GND_E7": "E7",
  /** Physical pin E9: GND; passive. */
  "GND_E9": "E9",
  /** Physical pin E11: GND; passive. */
  "GND_E11": "E11",
  /** Physical pin E13: GND; passive. */
  "GND_E13": "E13",
  /** Physical pin E18: GND; passive. */
  "GND_E18": "E18",
  /** Physical pin F1: GND; passive. */
  "GND_F1": "F1",
  /** Physical pin F6: GND; passive. */
  "GND_F6": "F6",
  /** Physical pin F8: GND; passive. */
  "GND_F8": "F8",
  /** Physical pin F9: VDD; power_in. */
  "VDD_F9": "F9",
  /** Physical pin F10: GND; passive. */
  "GND_F10": "F10",
  /** Physical pin F12: GND; passive. */
  "GND_F12": "F12",
  /** Physical pin F14: GND; passive. */
  "GND_F14": "F14",
  /** Physical pin G5: GND; passive. */
  "GND_G5": "G5",
  /** Physical pin G6: VDD; passive. */
  "VDD_G6": "G6",
  /** Physical pin G7: GND; passive. */
  "GND_G7": "G7",
  /** Physical pin G8: VDD; passive. */
  "VDD_G8": "G8",
  /** Physical pin G9: GND; passive. */
  "GND_G9": "G9",
  /** Physical pin G10: VDD; passive. */
  "VDD_G10": "G10",
  /** Physical pin G11: GND; passive. */
  "GND_G11": "G11",
  /** Physical pin G12: VDD; passive. */
  "VDD_G12": "G12",
  /** Physical pin G13: GND; passive. */
  "GND_G13": "G13",
  /** Physical pin H6: GND; passive. */
  "GND_H6": "H6",
  /** Physical pin H7: VDD; passive. */
  "VDD_H7": "H7",
  /** Physical pin H8: GND; passive. */
  "GND_H8": "H8",
  /** Physical pin H9: VDD; passive. */
  "VDD_H9": "H9",
  /** Physical pin H10: GND; passive. */
  "GND_H10": "H10",
  /** Physical pin H11: VDD; passive. */
  "VDD_H11": "H11",
  /** Physical pin H12: GND; passive. */
  "GND_H12": "H12",
  /** Physical pin H13: VDD; passive. */
  "VDD_H13": "H13",
  /** Physical pin H14: GND; passive. */
  "GND_H14": "H14",
  /** Physical pin H18: GND; passive. */
  "GND_H18": "H18",
  /** Physical pin J1: GND; passive. */
  "GND_J1": "J1",
  /** Physical pin J5: GND; passive. */
  "GND_J5": "J5",
  /** Physical pin J6: VDD; passive. */
  "VDD_J6": "J6",
  /** Physical pin J7: GND; passive. */
  "GND_J7": "J7",
  /** Physical pin J8: VDD; passive. */
  "VDD_J8": "J8",
  /** Physical pin J9: GND; passive. */
  "GND_J9": "J9",
  /** Physical pin J10: VDD; passive. */
  "VDD_J10": "J10",
  /** Physical pin J11: GND; passive. */
  "GND_J11": "J11",
  /** Physical pin J12: VDD; passive. */
  "VDD_J12": "J12",
  /** Physical pin J13: GND; passive. */
  "GND_J13": "J13",
  /** Physical pin K6: GND; passive. */
  "GND_K6": "K6",
  /** Physical pin K7: VDD; passive. */
  "VDD_K7": "K7",
  /** Physical pin K8: GND; passive. */
  "GND_K8": "K8",
  /** Physical pin K9: VDD; passive. */
  "VDD_K9": "K9",
  /** Physical pin K10: GND; passive. */
  "GND_K10": "K10",
  /** Physical pin K11: VDD; passive. */
  "VDD_K11": "K11",
  /** Physical pin K12: GND; passive. */
  "GND_K12": "K12",
  /** Physical pin K13: VDD; passive. */
  "VDD_K13": "K13",
  /** Physical pin K14: GND; passive. */
  "GND_K14": "K14",
  /** Physical pin L5: GND; passive. */
  "GND_L5": "L5",
  /** Physical pin L6: VDD; passive. */
  "VDD_L6": "L6",
  /** Physical pin L7: GND; passive. */
  "GND_L7": "L7",
  /** Physical pin L8: VDD; passive. */
  "VDD_L8": "L8",
  /** Physical pin L9: GND; passive. */
  "GND_L9": "L9",
  /** Physical pin L10: VDD; passive. */
  "VDD_L10": "L10",
  /** Physical pin L11: GND; passive. */
  "GND_L11": "L11",
  /** Physical pin L12: VDD; passive. */
  "VDD_L12": "L12",
  /** Physical pin L13: GND; passive. */
  "GND_L13": "L13",
  /** Physical pin L18: GND; passive. */
  "GND_L18": "L18",
  /** Physical pin M1: GND; passive. */
  "GND_M1": "M1",
  /** Physical pin M6: GND; passive. */
  "GND_M6": "M6",
  /** Physical pin M7: VDD; passive. */
  "VDD_M7": "M7",
  /** Physical pin M8: GND; passive. */
  "GND_M8": "M8",
  /** Physical pin M9: VDD; passive. */
  "VDD_M9": "M9",
  /** Physical pin M10: GND; passive. */
  "GND_M10": "M10",
  /** Physical pin M11: VDD; passive. */
  "VDD_M11": "M11",
  /** Physical pin M12: GND; passive. */
  "GND_M12": "M12",
  /** Physical pin M13: VDD; passive. */
  "VDD_M13": "M13",
  /** Physical pin M16: GND; passive. */
  "GND_M16": "M16",
  /** Physical pin N6: VDD; passive. */
  "VDD_N6": "N6",
  /** Physical pin N7: GND; passive. */
  "GND_N7": "N7",
  /** Physical pin N8: VDD; passive. */
  "VDD_N8": "N8",
  /** Physical pin N9: GND; passive. */
  "GND_N9": "N9",
  /** Physical pin N10: VDD; passive. */
  "VDD_N10": "N10",
  /** Physical pin N12: GND; passive. */
  "GND_N12": "N12",
  /** Physical pin N16: NC; no_connect. */
  "NC": "N16",
  /** Physical pin N17: GND; passive. */
  "GND_N17": "N17",
  /** Physical pin P4: GND; passive. */
  "GND_P4": "P4",
  /** Physical pin P7: GND; passive. */
  "GND_P7": "P7",
  /** Physical pin P9: GND; passive. */
  "GND_P9": "P9",
  /** Physical pin P16: VDD_PLL; power_in. */
  "VDD_PLL": "P16",
  /** Physical pin R12: GND; passive. */
  "GND_R12": "R12",
  /** Physical pin R16: GND; passive. */
  "GND_R16": "R16",
  /** Physical pin T4: GND; passive. */
  "GND_T4": "T4",
  /** Physical pin T11: GND; passive. */
  "GND_T11": "T11",
  /** Physical pin T16: VDD_SER_PLL; power_in. */
  "VDD_SER_PLL": "T16",
  /** Physical pin T17: GND; passive. */
  "GND_T17": "T17",
  /** Physical pin U12: VDD_SER; power_in. */
  "VDD_SER_U12": "U12",
  /** Physical pin U14: GND; passive. */
  "GND_U14": "U14",
  /** Physical pin U15: GND; passive. */
  "GND_U15": "U15",
  /** Physical pin U16: GND; passive. */
  "GND_U16": "U16",
  /** Physical pin V1: GND; passive. */
  "GND_V1": "V1",
  /** Physical pin V6: GND; passive. */
  "GND_V6": "V6",
  /** Physical pin V9: GND; passive. */
  "GND_V9": "V9",
  /** Physical pin V14: GND; passive. */
  "GND_V14": "V14",
  /** Physical pin V16: GND; passive. */
  "GND_V16": "V16",
  /** Physical pin V17: VDD_SER; passive. */
  "VDD_SER_V17": "V17",
  /** Physical pin V18: GND; passive. */
  "GND_V18": "V18",
  /** Physical pin T12: SER_CLK; input. */
  "SER_CLK": "T12",
  /** Physical pin T13: SER_CLK_N; input. */
  "SER_CLK_N": "T13",
  /** Physical pin T14: VDD_CLK; power_in. */
  "VDD_CLK": "T14",
  /** Physical pin T15: ~{RESET}; input. */
  "~{RESET}": "T15",
  /** Physical pin V15: POR_ADJ; passive. */
  "POR_ADJ": "V15",
}) {
  override schema = "FPGA_CologneChip_GateMate:CCGM1A1";
  override referencePrefix = "U";
}

