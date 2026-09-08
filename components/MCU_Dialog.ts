// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Multi-core BLE 5.1 SoC series, 96-MHz/32-bit ARM Cortex-M33, 128 kB ROM, 384 kB SRAM, 4 kB OTP Memory, 16 kB cache SRAM, VFBGA-86
 *
 * KiCad symbol: `MCU_Dialog:DA14691`. Reference prefix: `U`.
 * Footprint filters: VFBGA*6x6mm*Layout10x10*P0.55mm*.
 * @see https://www.dialog-semiconductor.com/sites/default/files/da1469x_datasheet_3v1.pdf
 * Keywords: BLE MCU.
 * Default footprint: Package_BGA:VFBGA-86_6x6mm_Layout10x10_P0.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DA14691 extends Component.withPins({
  /** Physical pin A1: QSPIF_CLK; output. */
  "QSPIF_CLK": "A1",
  /** Physical pin A2: QSPIF_D0; bidirectional. */
  "QSPIF_D0": "A2",
  /** Physical pin A3: P0_10/M33_SWDIO; bidirectional. */
  "P0_10/M33_SWDIO": "A3",
  /** Physical pin A4: P0_12/CMAC_SWDIO; bidirectional. */
  "P0_12/CMAC_SWDIO": "A4",
  /** Physical pin A5: VSUP_RF; power_in. */
  "VSUP_RF": "A5",
  /** Physical pin A6: RF_GND; passive. */
  "RF_GND_A6": "A6",
  /** Physical pin A7: RF_GND; power_in. */
  "RF_GND_A7": "A7",
  /** Physical pin A8: RFIOP; bidirectional. */
  "RFIOP": "A8",
  /** Physical pin A9: RF_GND; passive. */
  "RF_GND_A9": "A9",
  /** Physical pin A10: RF_GND; passive. */
  "RF_GND_A10": "A10",
  /** Physical pin B1: QSPIF_CS; output. */
  "QSPIF_CS": "B1",
  /** Physical pin B2: QSPIF_D3; bidirectional. */
  "QSPIF_D3": "B2",
  /** Physical pin B3: P0_11/M33_SWCLK; bidirectional. */
  "P0_11/M33_SWCLK": "B3",
  /** Physical pin B4: P0_13/CMAC_SWCLK; bidirectional. */
  "P0_13/CMAC_SWCLK": "B4",
  /** Physical pin B5: P0_09; bidirectional. */
  "P0_09": "B5",
  /** Physical pin B7: RF_GND; passive. */
  "RF_GND_B7": "B7",
  /** Physical pin B8: ~{RESET}; input. */
  "~{RESET}": "B8",
  /** Physical pin B9: P0_07; bidirectional. */
  "P0_07": "B9",
  /** Physical pin B10: P0_06; bidirectional. */
  "P0_06": "B10",
  /** Physical pin C1: QSPIF_D2; bidirectional. */
  "QSPIF_D2": "C1",
  /** Physical pin C2: QSPIF_D1; bidirectional. */
  "QSPIF_D1": "C2",
  /** Physical pin C3: P0_30; bidirectional. */
  "P0_30": "C3",
  /** Physical pin C4: P0_21; bidirectional. */
  "P0_21": "C4",
  /** Physical pin C6: P0_19; bidirectional. */
  "P0_19": "C6",
  /** Physical pin C8: P0_17; bidirectional. */
  "P0_17": "C8",
  /** Physical pin C9: P0_16; bidirectional. */
  "P0_16": "C9",
  /** Physical pin C10: P0_27; bidirectional. */
  "P0_27": "C10",
  /** Physical pin D1: P0_05; bidirectional. */
  "P0_05": "D1",
  /** Physical pin D2: P0_00; bidirectional. */
  "P0_00": "D2",
  /** Physical pin D3: P0_31; bidirectional. */
  "P0_31": "D3",
  /** Physical pin D5: P0_29; bidirectional. */
  "P0_29": "D5",
  /** Physical pin D6: P0_08; bidirectional. */
  "P0_08": "D6",
  /** Physical pin D9: RF_GND; passive. */
  "RF_GND_D9": "D9",
  /** Physical pin D10: RF_GND; passive. */
  "RF_GND_D10": "D10",
  /** Physical pin E1: P0_04; bidirectional. */
  "P0_04": "E1",
  /** Physical pin E2: P0_03; bidirectional. */
  "P0_03": "E2",
  /** Physical pin E4: P1_05; bidirectional. */
  "P1_05": "E4",
  /** Physical pin E6: P1_03; bidirectional. */
  "P1_03": "E6",
  /** Physical pin E8: P1_01; bidirectional. */
  "P1_01": "E8",
  /** Physical pin E9: P1_00; bidirectional. */
  "P1_00": "E9",
  /** Physical pin E10: XTAL32M_GND; passive. */
  "XTAL32M_GND": "E10",
  /** Physical pin F1: P0_02; bidirectional. */
  "P0_02": "F1",
  /** Physical pin F2: P0_01; bidirectional. */
  "P0_01": "F2",
  /** Physical pin F3: VSSIOQ; power_in. */
  "VSSIOQ": "F3",
  /** Physical pin F4: DGND; passive. */
  "DGND_F4": "F4",
  /** Physical pin F5: AGND; power_in. */
  "AGND_F5": "F5",
  /** Physical pin F7: P1_07; bidirectional. */
  "P1_07": "F7",
  /** Physical pin F9: XTAL32M_P; input. */
  "XTAL32M_P": "F9",
  /** Physical pin F10: XTAL32M_M; output. */
  "XTAL32M_M": "F10",
  /** Physical pin G1: V18F; power_out. */
  "V18F": "G1",
  /** Physical pin G2: V18P; power_out. */
  "V18P": "G2",
  /** Physical pin G3: DGND; power_in. */
  "DGND_G3": "G3",
  /** Physical pin G4: DGND; passive. */
  "DGND_G4": "G4",
  /** Physical pin G5: AGND; passive. */
  "AGND_G5": "G5",
  /** Physical pin G6: P1_11; bidirectional. */
  "P1_11": "G6",
  /** Physical pin G8: P0_20; bidirectional. */
  "P0_20": "G8",
  /** Physical pin G9: P1_09; bidirectional. */
  "P1_09": "G9",
  /** Physical pin G10: P0_18; bidirectional. */
  "P0_18": "G10",
  /** Physical pin H1: V14; power_out. */
  "V14": "H1",
  /** Physical pin H2: V18; power_out. */
  "V18": "H2",
  /** Physical pin H3: P1_04; bidirectional. */
  "P1_04": "H3",
  /** Physical pin H5: P0_28; bidirectional. */
  "P0_28": "H5",
  /** Physical pin H7: P0_26; bidirectional. */
  "P0_26": "H7",
  /** Physical pin H8: P0_25; bidirectional. */
  "P0_25": "H8",
  /** Physical pin H9: P0_22/XTAL_32K_M; bidirectional. */
  "P0_22/XTAL_32K_M": "H9",
  /** Physical pin H10: P0_23/XTAL_32K_P; bidirectional. */
  "P0_23/XTAL_32K_P": "H10",
  /** Physical pin J1: LY; passive. */
  "LY": "J1",
  /** Physical pin J2: V12; power_out. */
  "V12": "J2",
  /** Physical pin J3: GND; passive. */
  "GND_J3": "J3",
  /** Physical pin J4: NC; no_connect. */
  "NC_J4": "J4",
  /** Physical pin J5: VBUS; power_in. */
  "VBUS": "J5",
  /** Physical pin J6: V30; power_out. */
  "V30": "J6",
  /** Physical pin J7: P1_08; bidirectional. */
  "P1_08": "J7",
  /** Physical pin J8: P1_06; bidirectional. */
  "P1_06": "J8",
  /** Physical pin J9: P0_24; bidirectional. */
  "P0_24": "J9",
  /** Physical pin J10: P1_02; bidirectional. */
  "P1_02": "J10",
  /** Physical pin K1: LX; passive. */
  "LX": "K1",
  /** Physical pin K2: VBAT2; power_out. */
  "VBAT2": "K2",
  /** Physical pin K3: BUCK_GND; power_in. */
  "BUCK_GND": "K3",
  /** Physical pin K4: NC; no_connect. */
  "NC_K4": "K4",
  /** Physical pin K5: VBAT1; power_out. */
  "VBAT1": "K5",
  /** Physical pin K6: P0_14/USB_P; bidirectional. */
  "P0_14/USB_P": "K6",
  /** Physical pin K7: P0_15/USB_M; bidirectional. */
  "P0_15/USB_M": "K7",
  /** Physical pin K8: P1_10; bidirectional. */
  "P1_10": "K8",
  /** Physical pin K9: GND; passive. */
  "GND_K9": "K9",
  /** Physical pin K10: GND; power_in. */
  "GND_K10": "K10",
}) {
  override schema = "MCU_Dialog:DA14691";
  override referencePrefix = "U";
}

/**
 * Multi-core BLE 5.1 Soc series, 96-MHz/32-bit ARM Cortex-M33, 128 kB ROM, 512 kB SRAM, 4 kB OTP Memory, 16 kB cache SRAM, VFBGA-86
 *
 * KiCad symbol: `MCU_Dialog:DA14695`. Reference prefix: `U`.
 * Footprint filters: VFBGA*6x6mm*Layout10x10*P0.55mm*.
 * @see https://www.dialog-semiconductor.com/sites/default/files/da1469x_datasheet_3v1.pdf
 * Keywords: BLE MCU.
 * Default footprint: Package_BGA:VFBGA-86_6x6mm_Layout10x10_P0.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DA14695 extends Component.withPins({
  /** Physical pin A1: QSPIF_CLK; output. */
  "QSPIF_CLK": "A1",
  /** Physical pin A2: QSPIF_D0; bidirectional. */
  "QSPIF_D0": "A2",
  /** Physical pin A3: P0_10/M33_SWDIO; bidirectional. */
  "P0_10/M33_SWDIO": "A3",
  /** Physical pin A4: P0_12/CMAC_SWDIO; bidirectional. */
  "P0_12/CMAC_SWDIO": "A4",
  /** Physical pin A5: VSUP_RF; power_in. */
  "VSUP_RF": "A5",
  /** Physical pin A6: RF_GND; passive. */
  "RF_GND_A6": "A6",
  /** Physical pin A7: RF_GND; power_in. */
  "RF_GND_A7": "A7",
  /** Physical pin A8: RFIOP; bidirectional. */
  "RFIOP": "A8",
  /** Physical pin A9: RF_GND; passive. */
  "RF_GND_A9": "A9",
  /** Physical pin A10: RF_GND; passive. */
  "RF_GND_A10": "A10",
  /** Physical pin B1: QSPIF_CS; output. */
  "QSPIF_CS": "B1",
  /** Physical pin B2: QSPIF_D3; bidirectional. */
  "QSPIF_D3": "B2",
  /** Physical pin B3: P0_11/M33_SWCLK; bidirectional. */
  "P0_11/M33_SWCLK": "B3",
  /** Physical pin B4: P0_13/CMAC_SWCLK; bidirectional. */
  "P0_13/CMAC_SWCLK": "B4",
  /** Physical pin B5: P0_09; bidirectional. */
  "P0_09": "B5",
  /** Physical pin B7: RF_GND; passive. */
  "RF_GND_B7": "B7",
  /** Physical pin B8: ~{RESET}; input. */
  "~{RESET}": "B8",
  /** Physical pin B9: P0_07; bidirectional. */
  "P0_07": "B9",
  /** Physical pin B10: P0_06; bidirectional. */
  "P0_06": "B10",
  /** Physical pin C1: QSPIF_D2; bidirectional. */
  "QSPIF_D2": "C1",
  /** Physical pin C2: QSPIF_D1; bidirectional. */
  "QSPIF_D1": "C2",
  /** Physical pin C3: P0_30; bidirectional. */
  "P0_30": "C3",
  /** Physical pin C4: P0_21; bidirectional. */
  "P0_21": "C4",
  /** Physical pin C6: P0_19; bidirectional. */
  "P0_19": "C6",
  /** Physical pin C8: P0_17; bidirectional. */
  "P0_17": "C8",
  /** Physical pin C9: P0_16; bidirectional. */
  "P0_16": "C9",
  /** Physical pin C10: P0_27; bidirectional. */
  "P0_27": "C10",
  /** Physical pin D1: P0_05; bidirectional. */
  "P0_05": "D1",
  /** Physical pin D2: P0_00; bidirectional. */
  "P0_00": "D2",
  /** Physical pin D3: P0_31; bidirectional. */
  "P0_31": "D3",
  /** Physical pin D5: P0_29; bidirectional. */
  "P0_29": "D5",
  /** Physical pin D6: P0_08; bidirectional. */
  "P0_08": "D6",
  /** Physical pin D9: RF_GND; passive. */
  "RF_GND_D9": "D9",
  /** Physical pin D10: RF_GND; passive. */
  "RF_GND_D10": "D10",
  /** Physical pin E1: P0_04; bidirectional. */
  "P0_04": "E1",
  /** Physical pin E2: P0_03; bidirectional. */
  "P0_03": "E2",
  /** Physical pin E4: P1_05; bidirectional. */
  "P1_05": "E4",
  /** Physical pin E6: P1_03; bidirectional. */
  "P1_03": "E6",
  /** Physical pin E8: P1_01; bidirectional. */
  "P1_01": "E8",
  /** Physical pin E9: P1_00; bidirectional. */
  "P1_00": "E9",
  /** Physical pin E10: XTAL32M_GND; passive. */
  "XTAL32M_GND": "E10",
  /** Physical pin F1: P0_02; bidirectional. */
  "P0_02": "F1",
  /** Physical pin F2: P0_01; bidirectional. */
  "P0_01": "F2",
  /** Physical pin F3: VSSIOQ; power_in. */
  "VSSIOQ": "F3",
  /** Physical pin F4: DGND; passive. */
  "DGND_F4": "F4",
  /** Physical pin F5: AGND; power_in. */
  "AGND_F5": "F5",
  /** Physical pin F7: P1_07; bidirectional. */
  "P1_07": "F7",
  /** Physical pin F9: XTAL32M_P; input. */
  "XTAL32M_P": "F9",
  /** Physical pin F10: XTAL32M_M; output. */
  "XTAL32M_M": "F10",
  /** Physical pin G1: V18F; power_out. */
  "V18F": "G1",
  /** Physical pin G2: V18P; power_out. */
  "V18P": "G2",
  /** Physical pin G3: DGND; power_in. */
  "DGND_G3": "G3",
  /** Physical pin G4: DGND; passive. */
  "DGND_G4": "G4",
  /** Physical pin G5: AGND; passive. */
  "AGND_G5": "G5",
  /** Physical pin G6: P1_11; bidirectional. */
  "P1_11": "G6",
  /** Physical pin G8: P0_20; bidirectional. */
  "P0_20": "G8",
  /** Physical pin G9: P1_09; bidirectional. */
  "P1_09": "G9",
  /** Physical pin G10: P0_18; bidirectional. */
  "P0_18": "G10",
  /** Physical pin H1: V14; power_out. */
  "V14": "H1",
  /** Physical pin H2: V18; power_out. */
  "V18": "H2",
  /** Physical pin H3: P1_04; bidirectional. */
  "P1_04": "H3",
  /** Physical pin H5: P0_28; bidirectional. */
  "P0_28": "H5",
  /** Physical pin H7: P0_26; bidirectional. */
  "P0_26": "H7",
  /** Physical pin H8: P0_25; bidirectional. */
  "P0_25": "H8",
  /** Physical pin H9: P0_22/XTAL_32K_M; bidirectional. */
  "P0_22/XTAL_32K_M": "H9",
  /** Physical pin H10: P0_23/XTAL_32K_P; bidirectional. */
  "P0_23/XTAL_32K_P": "H10",
  /** Physical pin J1: LY; passive. */
  "LY": "J1",
  /** Physical pin J2: V12; power_out. */
  "V12": "J2",
  /** Physical pin J3: GND; passive. */
  "GND_J3": "J3",
  /** Physical pin J4: NC; no_connect. */
  "NC_J4": "J4",
  /** Physical pin J5: VBUS; power_in. */
  "VBUS": "J5",
  /** Physical pin J6: V30; power_out. */
  "V30": "J6",
  /** Physical pin J7: P1_08; bidirectional. */
  "P1_08": "J7",
  /** Physical pin J8: P1_06; bidirectional. */
  "P1_06": "J8",
  /** Physical pin J9: P0_24; bidirectional. */
  "P0_24": "J9",
  /** Physical pin J10: P1_02; bidirectional. */
  "P1_02": "J10",
  /** Physical pin K1: LX; passive. */
  "LX": "K1",
  /** Physical pin K2: VBAT2; power_out. */
  "VBAT2": "K2",
  /** Physical pin K3: BUCK_GND; power_in. */
  "BUCK_GND": "K3",
  /** Physical pin K4: NC; no_connect. */
  "NC_K4": "K4",
  /** Physical pin K5: VBAT1; power_out. */
  "VBAT1": "K5",
  /** Physical pin K6: P0_14/USB_P; bidirectional. */
  "P0_14/USB_P": "K6",
  /** Physical pin K7: P0_15/USB_M; bidirectional. */
  "P0_15/USB_M": "K7",
  /** Physical pin K8: P1_10; bidirectional. */
  "P1_10": "K8",
  /** Physical pin K9: GND; passive. */
  "GND_K9": "K9",
  /** Physical pin K10: GND; power_in. */
  "GND_K10": "K10",
}) {
  override schema = "MCU_Dialog:DA14695";
  override referencePrefix = "U";
}

