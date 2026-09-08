// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Microchip 2 Mbit SRAM Memory, up to 143MHz, 1.7-3.6V supply, SOIC-8
 *
 * KiCad symbol: `Memory_RAM:23AA02M-ISN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/23AA02M-23LCV02M-2-Mbit-SPI-SDI-SQI-143-Mhz-Serial-RAM-DS20006861.pdf
 * Keywords: SRAM SPI SQI.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _23AA02M_ISN extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Memory_RAM:23AA02M-ISN";
  override referencePrefix = "U";
}

/**
 * Microchip 2 Mbit SRAM Memory, up to 143MHz, 1.7-3.6V supply, DIP-8
 *
 * KiCad symbol: `Memory_RAM:23AA02M-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/23AA02M-23LCV02M-2-Mbit-SPI-SDI-SQI-143-Mhz-Serial-RAM-DS20006861.pdf
 * Keywords: SRAM SPI SQI.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _23AA02M_IP extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Memory_RAM:23AA02M-IP";
  override referencePrefix = "U";
}

/**
 * Microchip 2 Mbit SRAM Memory, up to 143MHz, 1.7-3.6V supply, TSSOP-8
 *
 * KiCad symbol: `Memory_RAM:23AA02M-IST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/23AA02M-23LCV02M-2-Mbit-SPI-SDI-SQI-143-Mhz-Serial-RAM-DS20006861.pdf
 * Keywords: SRAM SPI SQI.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _23AA02M_IST extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Memory_RAM:23AA02M-IST";
  override referencePrefix = "U";
}

/**
 * 16 Mbit / 2M x 8-bits serial pseudo SRAM MEMORY, up to 144MHz, 1.62-1.98V supply, SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_RAM:APS1604M-SQRx-SN`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/1127/APM_PSRAM_QSPI_APS1604M_SQR_v2_5_PKG-1954861.pdf
 * Keywords: qspi qpi spi psram.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APS1604M_SQRx_SN extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_RAM:APS1604M-SQRx-SN";
  override referencePrefix = "U";
}

/**
 * 16 Mbit / 2M x 8-bits serial pseudo SRAM MEMORY, up to 133MHz, 2.7-3.6V supply, SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_RAM:APS1604M-3SQRx-SN`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/1127/APM_PSRAM_QSPI_APS1604M_3SQR_v2_7_PKG-1954896.pdf
 * Keywords: qspi qpi spi psram.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APS1604M_3SQRx_SN extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_RAM:APS1604M-3SQRx-SN";
  override referencePrefix = "U";
}

/**
 * 16 Mbit / 2M x 8-bits serial pseudo SRAM MEMORY, up to 144MHz, 1.62-1.98V supply, USON-8 (XSON-8)
 *
 * KiCad symbol: `Memory_RAM:APS1604M-SQRx-ZR`. Reference prefix: `U`.
 * Footprint filters: *SON*3x2mm*P0.5mm*EP0.2x1.6mm*.
 * @see https://www.mouser.com/datasheet/2/1127/APM_PSRAM_QSPI_APS1604M_SQR_v2_5_PKG-1954861.pdf
 * Keywords: qspi qpi spi psram.
 * Default footprint: Package_SON:Winbond_USON-8-1EP_3x2mm_P0.5mm_EP0.2x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APS1604M_SQRx_ZR extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: EPAD; passive. */
  "EPAD": "9",
}) {
  override schema = "Memory_RAM:APS1604M-SQRx-ZR";
  override referencePrefix = "U";
}

/**
 * 16 Mbit / 2M x 8-bits serial pseudo SRAM MEMORY, up to 133MHz, 2.7-3.6V supply, USON-8 (XSON-8)
 *
 * KiCad symbol: `Memory_RAM:APS1604M-3SQRx-ZR`. Reference prefix: `U`.
 * Footprint filters: *SON*3x2mm*P0.5mm*EP0.2x1.6mm*.
 * @see https://www.mouser.com/datasheet/2/1127/APM_PSRAM_QSPI_APS1604M_3SQR_v2_7_PKG-1954896.pdf
 * Keywords: qspi qpi spi psram.
 * Default footprint: Package_SON:Winbond_USON-8-1EP_3x2mm_P0.5mm_EP0.2x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APS1604M_3SQRx_ZR extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: EPAD; passive. */
  "EPAD": "9",
}) {
  override schema = "Memory_RAM:APS1604M-3SQRx-ZR";
  override referencePrefix = "U";
}

/**
 * 64 Mbit / 8M x 8-bits serial pseudo SRAM MEMORY, up to 144MHz, 1.62-1.98V supply, SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_RAM:APS6404L-SQRx-SN`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.apmemory.com/en/downloadFiles/0324112120mm608993
 * Keywords: qspi qpi spi psram.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APS6404L_SQRx_SN extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_RAM:APS6404L-SQRx-SN";
  override referencePrefix = "U";
}

/**
 * 64 Mbit / 8M x 8-bits serial pseudo SRAM MEMORY, up to 133MHz, 2.7-3.6V supply, SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_RAM:APS6404L-3SQRx-SN`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/1127/APM_PSRAM_QSPI_APS6404L_3SQR_v2_3_PKG-1954826.pdf
 * Keywords: qspi qpi spi psram.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APS6404L_3SQRx_SN extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_RAM:APS6404L-3SQRx-SN";
  override referencePrefix = "U";
}

/**
 * 64 Mbit / 8M x 8-bits serial pseudo SRAM MEMORY, up to 144MHz, 1.62-1.98V supply, USON-8 (XSON-8)
 *
 * KiCad symbol: `Memory_RAM:APS6404L-SQRx-ZR`. Reference prefix: `U`.
 * Footprint filters: *SON*3x2mm*P0.5mm*EP0.2x1.6mm*.
 * @see https://www.apmemory.com/en/downloadFiles/0324112120mm608993
 * Keywords: qspi qpi spi psram.
 * Default footprint: Package_SON:Winbond_USON-8-1EP_3x2mm_P0.5mm_EP0.2x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APS6404L_SQRx_ZR extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: EPAD; passive. */
  "EPAD": "9",
}) {
  override schema = "Memory_RAM:APS6404L-SQRx-ZR";
  override referencePrefix = "U";
}

/**
 * 64 Mbit / 8M x 8-bits serial pseudo SRAM MEMORY, up to 133MHz, 2.7-3.6V supply, USON-8 (XSON-8)
 *
 * KiCad symbol: `Memory_RAM:APS6404L-3SQRx-ZR`. Reference prefix: `U`.
 * Footprint filters: *SON*3x2mm*P0.5mm*EP0.2x1.6mm*.
 * @see https://www.mouser.com/datasheet/2/1127/APM_PSRAM_QSPI_APS6404L_3SQR_v2_3_PKG-1954826.pdf
 * Keywords: qspi qpi spi psram.
 * Default footprint: Package_SON:Winbond_USON-8-1EP_3x2mm_P0.5mm_EP0.2x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APS6404L_3SQRx_ZR extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: EPAD; passive. */
  "EPAD": "9",
}) {
  override schema = "Memory_RAM:APS6404L-3SQRx-ZR";
  override referencePrefix = "U";
}

/**
 * 4Gb (256Mx16 bit) Double Data Rate 3 Synchronous DRAM
 *
 * KiCad symbol: `Memory_RAM:AS4C256M16D3`. Reference prefix: `U`.
 * Footprint filters: BGA*9.0x13.0mm*P0.8mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/ddr3/4GB-AS4C256M16D3.pdf
 * Keywords: DDR3 DRAM MEMORY.
 * Default footprint: Package_BGA:BGA-96_9.0x13.0mm_Layout2x3x16_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS4C256M16D3 extends Component.withPins({
  /** Physical pin A1: VDDQ; power_in. */
  "VDDQ_A1": "A1",
  /** Physical pin A8: VDDQ; passive. */
  "VDDQ_A8": "A8",
  /** Physical pin A9: VSS; power_in. */
  "VSS_A9": "A9",
  /** Physical pin B1: VSSQ; power_in. */
  "VSSQ_B1": "B1",
  /** Physical pin B2: VDD; power_in. */
  "VDD_B2": "B2",
  /** Physical pin B3: VSS; passive. */
  "VSS_B3": "B3",
  /** Physical pin B9: VSSQ; passive. */
  "VSSQ_B9": "B9",
  /** Physical pin C1: VDDQ; passive. */
  "VDDQ_C1": "C1",
  /** Physical pin C9: VDDQ; passive. */
  "VDDQ_C9": "C9",
  /** Physical pin D1: VSSQ; passive. */
  "VSSQ_D1": "D1",
  /** Physical pin D2: VDDQ; passive. */
  "VDDQ_D2": "D2",
  /** Physical pin D8: VSSQ; passive. */
  "VSSQ_D8": "D8",
  /** Physical pin D9: VDD; passive. */
  "VDD_D9": "D9",
  /** Physical pin E1: VSS; passive. */
  "VSS_E1": "E1",
  /** Physical pin E2: VSSQ; passive. */
  "VSSQ_E2": "E2",
  /** Physical pin E3: DQ0; bidirectional. */
  "DQ0": "E3",
  /** Physical pin E8: VSSQ; passive. */
  "VSSQ_E8": "E8",
  /** Physical pin E9: VDDQ; passive. */
  "VDDQ_E9": "E9",
  /** Physical pin F1: VDDQ; passive. */
  "VDDQ_F1": "F1",
  /** Physical pin F2: DQ2; bidirectional. */
  "DQ2": "F2",
  /** Physical pin F7: DQ1; bidirectional. */
  "DQ1": "F7",
  /** Physical pin F8: DQ3; bidirectional. */
  "DQ3": "F8",
  /** Physical pin F9: VSSQ; passive. */
  "VSSQ_F9": "F9",
  /** Physical pin G1: VSSQ; passive. */
  "VSSQ_G1": "G1",
  /** Physical pin G2: DQ6; bidirectional. */
  "DQ6": "G2",
  /** Physical pin G7: VDD; passive. */
  "VDD_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSSQ; passive. */
  "VSSQ_G9": "G9",
  /** Physical pin H1: VREFDQ; power_in. */
  "VREFDQ": "H1",
  /** Physical pin H2: VDDQ; passive. */
  "VDDQ_H2": "H2",
  /** Physical pin H3: DQ4; bidirectional. */
  "DQ4": "H3",
  /** Physical pin H7: DQ7; bidirectional. */
  "DQ7": "H7",
  /** Physical pin H8: DQ5; bidirectional. */
  "DQ5": "H8",
  /** Physical pin H9: VDDQ; passive. */
  "VDDQ_H9": "H9",
  /** Physical pin J2: VSS; passive. */
  "VSS_J2": "J2",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin K2: VDD; passive. */
  "VDD_K2": "K2",
  /** Physical pin K8: VDD; passive. */
  "VDD_K8": "K8",
  /** Physical pin L2: ~{CS}; input. */
  "~{CS}": "L2",
  /** Physical pin L7: A10/AP; input. */
  "A10/AP": "L7",
  /** Physical pin M1: VSS; passive. */
  "VSS_M1": "M1",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin N1: VDD; passive. */
  "VDD_N1": "N1",
  /** Physical pin N2: A3; input. */
  "A3": "N2",
  /** Physical pin N3: A0; input. */
  "A0": "N3",
  /** Physical pin N7: A12/~{BC}; input. */
  "A12/~{BC}": "N7",
  /** Physical pin N9: VDD; passive. */
  "VDD_N9": "N9",
  /** Physical pin P1: VSS; passive. */
  "VSS_P1": "P1",
  /** Physical pin P2: A5; input. */
  "A5": "P2",
  /** Physical pin P3: A2; input. */
  "A2": "P3",
  /** Physical pin P7: A1; input. */
  "A1": "P7",
  /** Physical pin P8: A4; input. */
  "A4": "P8",
  /** Physical pin P9: VSS; passive. */
  "VSS_P9": "P9",
  /** Physical pin R1: VDD; passive. */
  "VDD_R1": "R1",
  /** Physical pin R2: A7; input. */
  "A7": "R2",
  /** Physical pin R3: A9; input. */
  "A9": "R3",
  /** Physical pin R7: A11; input. */
  "A11": "R7",
  /** Physical pin R8: A6; input. */
  "A6": "R8",
  /** Physical pin R9: VDD; passive. */
  "VDD_R9": "R9",
  /** Physical pin T1: VSS; passive. */
  "VSS_T1": "T1",
  /** Physical pin T2: ~{RESET}; input. */
  "~{RESET}": "T2",
  /** Physical pin T3: A13; input. */
  "A13": "T3",
  /** Physical pin T7: A14; input. */
  "A14": "T7",
  /** Physical pin T8: A8; input. */
  "A8": "T8",
  /** Physical pin T9: VSS; passive. */
  "VSS_T9": "T9",
  /** Physical pin A2: DQ13; bidirectional. */
  "DQ13": "A2",
  /** Physical pin A3: DQ15; bidirectional. */
  "DQ15": "A3",
  /** Physical pin A7: DQ12; bidirectional. */
  "DQ12": "A7",
  /** Physical pin B7: ~{UDQS}; bidirectional. */
  "~{UDQS}": "B7",
  /** Physical pin B8: DQ14; bidirectional. */
  "DQ14": "B8",
  /** Physical pin C2: DQ11; bidirectional. */
  "DQ11": "C2",
  /** Physical pin C3: DQ9; bidirectional. */
  "DQ9": "C3",
  /** Physical pin C7: UDQS; bidirectional. */
  "UDQS": "C7",
  /** Physical pin C8: DQ10; bidirectional. */
  "DQ10": "C8",
  /** Physical pin D3: UDM; input. */
  "UDM": "D3",
  /** Physical pin D7: DQ8; bidirectional. */
  "DQ8": "D7",
  /** Physical pin E7: LDM; input. */
  "LDM": "E7",
  /** Physical pin F3: LDQS; bidirectional. */
  "LDQS": "F3",
  /** Physical pin G3: ~{LDQS}; bidirectional. */
  "~{LDQS}": "G3",
  /** Physical pin J1: NC; no_connect. */
  "NC_J1": "J1",
  /** Physical pin J3: ~{RAS}; input. */
  "~{RAS}": "J3",
  /** Physical pin J7: CK; input. */
  "CK": "J7",
  /** Physical pin J9: NC; no_connect. */
  "NC_J9": "J9",
  /** Physical pin K1: ODT; input. */
  "ODT": "K1",
  /** Physical pin K3: ~{CAS}; input. */
  "~{CAS}": "K3",
  /** Physical pin K7: ~{CK}; input. */
  "~{CK}": "K7",
  /** Physical pin K9: CKE; input. */
  "CKE": "K9",
  /** Physical pin L1: NC; no_connect. */
  "NC_L1": "L1",
  /** Physical pin L3: ~{WE}; input. */
  "~{WE}": "L3",
  /** Physical pin L8: ZQ; input. */
  "ZQ": "L8",
  /** Physical pin L9: NC; no_connect. */
  "NC_L9": "L9",
  /** Physical pin M2: BA0; input. */
  "BA0": "M2",
  /** Physical pin M3: BA2; input. */
  "BA2": "M3",
  /** Physical pin M7: NC; no_connect. */
  "NC_M7": "M7",
  /** Physical pin M8: VREFCA; power_in. */
  "VREFCA": "M8",
  /** Physical pin N8: BA1; input. */
  "BA1": "N8",
}) {
  override schema = "Memory_RAM:AS4C256M16D3";
  override referencePrefix = "U";
}

/**
 * 64M – (4M x 16 bit) Synchronous DRAM (SDRAM), TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:AS4C4M16SA`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/dram/64M-AS4C4M16SA-CI_v3.0_March%202015.pdf
 * Keywords: SDRAM Synchronous DRAM PC166 PC143 64Mb 16Mbx4 MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS4C4M16SA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: LDQM; input. */
  "LDQM": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10/AP; input. */
  "A10/AP": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: UDQM; input. */
  "UDQM": "39",
  /** Physical pin 40: NC/RFU; no_connect. */
  "NC/RFU": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:AS4C4M16SA";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K X 8-bit) Low Power CMOS SRAM, single 2.7V ~ 5.5V power supply, 55ns, TFBGA-36
 *
 * KiCad symbol: `Memory_RAM:AS6C1008-xxB`. Reference prefix: `U`.
 * Footprint filters: *TFBGA*6*8mm*Layout6x8*P0.75mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/AS6C1008_Mar_2023V1.2.pdf
 * Keywords: Static MEMORY 1Mbit.
 * Default footprint: Package_BGA:Alliance_TFBGA-36_6x8mm_Layout6x8_P0.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS6C1008_xxB extends Component.withPins({
  /** Physical pin D1: GND; power_in. */
  "GND_D1": "D1",
  /** Physical pin D6: VCC; power_in. */
  "VCC_D6": "D6",
  /** Physical pin E1: VCC; passive. */
  "VCC_E1": "E1",
  /** Physical pin E6: GND; passive. */
  "GND_E6": "E6",
  /** Physical pin F3: NC; no_connect. */
  "NC_F3": "F3",
  /** Physical pin F4: NC; no_connect. */
  "NC_F4": "F4",
  /** Physical pin A1: A0; input. */
  "A0": "A1",
  /** Physical pin A2: A1; input. */
  "A1": "A2",
  /** Physical pin A3: CS2/CE2; input. */
  "CS2/CE2": "A3",
  /** Physical pin A4: A3; input. */
  "A3": "A4",
  /** Physical pin A5: A6; input. */
  "A6": "A5",
  /** Physical pin A6: A8; input. */
  "A8": "A6",
  /** Physical pin B1: DQ4; tri_state. */
  "DQ4": "B1",
  /** Physical pin B2: A2; input. */
  "A2": "B2",
  /** Physical pin B3: ~{WE}; input. */
  "~{WE}": "B3",
  /** Physical pin B4: A4; input. */
  "A4": "B4",
  /** Physical pin B5: A7; input. */
  "A7": "B5",
  /** Physical pin B6: DQ0; tri_state. */
  "DQ0": "B6",
  /** Physical pin C1: DQ5; tri_state. */
  "DQ5": "C1",
  /** Physical pin C3: NC; no_connect. */
  "NC_C3": "C3",
  /** Physical pin C4: A5; input. */
  "A5": "C4",
  /** Physical pin C6: DQ1; tri_state. */
  "DQ1": "C6",
  /** Physical pin F1: DQ6; tri_state. */
  "DQ6": "F1",
  /** Physical pin F6: DQ2; tri_state. */
  "DQ2": "F6",
  /** Physical pin G1: DQ7; tri_state. */
  "DQ7": "G1",
  /** Physical pin G2: ~{OE}; input. */
  "~{OE}": "G2",
  /** Physical pin G3: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "G3",
  /** Physical pin G4: A16; input. */
  "A16": "G4",
  /** Physical pin G5: A15; input. */
  "A15": "G5",
  /** Physical pin G6: DQ3; tri_state. */
  "DQ3": "G6",
  /** Physical pin H1: A9; input. */
  "A9": "H1",
  /** Physical pin H2: A10; input. */
  "A10": "H2",
  /** Physical pin H3: A11; input. */
  "A11": "H3",
  /** Physical pin H4: A12; input. */
  "A12": "H4",
  /** Physical pin H5: A13; input. */
  "A13": "H5",
  /** Physical pin H6: A14; input. */
  "A14": "H6",
}) {
  override schema = "Memory_RAM:AS6C1008-xxB";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K X 8-bit) Low Power CMOS SRAM, single 2.7V ~ 5.5V power supply, 55ns, DIP-32
 *
 * KiCad symbol: `Memory_RAM:AS6C1008-xxP`. Reference prefix: `U`.
 * Footprint filters: *DIP*W15.24mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/AS6C1008_Mar_2023V1.2.pdf
 * Keywords: Static MEMORY 1Mbit.
 * Default footprint: Package_DIP:DIP-32_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS6C1008_xxP extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: DQ0; tri_state. */
  "DQ0": "13",
  /** Physical pin 14: DQ1; tri_state. */
  "DQ1": "14",
  /** Physical pin 15: DQ2; tri_state. */
  "DQ2": "15",
  /** Physical pin 17: DQ3; tri_state. */
  "DQ3": "17",
  /** Physical pin 18: DQ4; tri_state. */
  "DQ4": "18",
  /** Physical pin 19: DQ5; tri_state. */
  "DQ5": "19",
  /** Physical pin 20: DQ6; tri_state. */
  "DQ6": "20",
  /** Physical pin 21: DQ7; tri_state. */
  "DQ7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:AS6C1008-xxP";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K X 8-bit) Low Power CMOS SRAM, single 2.7V ~ 5.5V power supply, 55ns, SOP-32
 *
 * KiCad symbol: `Memory_RAM:AS6C1008-xxS`. Reference prefix: `U`.
 * Footprint filters: *SOP*11.3*20.*P1.27mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/AS6C1008_Mar_2023V1.2.pdf
 * Keywords: Static MEMORY 1Mbit.
 * Default footprint: Package_SO:SOP-32_11.305x20.495mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS6C1008_xxS extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: DQ0; tri_state. */
  "DQ0": "13",
  /** Physical pin 14: DQ1; tri_state. */
  "DQ1": "14",
  /** Physical pin 15: DQ2; tri_state. */
  "DQ2": "15",
  /** Physical pin 17: DQ3; tri_state. */
  "DQ3": "17",
  /** Physical pin 18: DQ4; tri_state. */
  "DQ4": "18",
  /** Physical pin 19: DQ5; tri_state. */
  "DQ5": "19",
  /** Physical pin 20: DQ6; tri_state. */
  "DQ6": "20",
  /** Physical pin 21: DQ7; tri_state. */
  "DQ7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:AS6C1008-xxS";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K X 8-bit) Low Power CMOS SRAM, single 2.7V ~ 5.5V power supply, 55ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:AS6C1008-xxT`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*18.4*8*P0.5mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/AS6C1008_Mar_2023V1.2.pdf
 * Keywords: Static MEMORY 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_18.4x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS6C1008_xxT extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: DQ0; tri_state. */
  "DQ0": "21",
  /** Physical pin 22: DQ1; tri_state. */
  "DQ1": "22",
  /** Physical pin 23: DQ2; tri_state. */
  "DQ2": "23",
  /** Physical pin 25: DQ3; tri_state. */
  "DQ3": "25",
  /** Physical pin 26: DQ4; tri_state. */
  "DQ4": "26",
  /** Physical pin 27: DQ5; tri_state. */
  "DQ5": "27",
  /** Physical pin 28: DQ6; tri_state. */
  "DQ6": "28",
  /** Physical pin 29: DQ7; tri_state. */
  "DQ7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:AS6C1008-xxT";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K X 8-bit) Low Power CMOS SRAM, single 2.7V ~ 5.5V power supply, 55ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:AS6C1008-xxST`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*11.8*8*P0.5mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/AS6C1008_Mar_2023V1.2.pdf
 * Keywords: Static MEMORY 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_11.8x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS6C1008_xxST extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: DQ0; tri_state. */
  "DQ0": "21",
  /** Physical pin 22: DQ1; tri_state. */
  "DQ1": "22",
  /** Physical pin 23: DQ2; tri_state. */
  "DQ2": "23",
  /** Physical pin 25: DQ3; tri_state. */
  "DQ3": "25",
  /** Physical pin 26: DQ4; tri_state. */
  "DQ4": "26",
  /** Physical pin 27: DQ5; tri_state. */
  "DQ5": "27",
  /** Physical pin 28: DQ6; tri_state. */
  "DQ6": "28",
  /** Physical pin 29: DQ7; tri_state. */
  "DQ7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:AS6C1008-xxST";
  override referencePrefix = "U";
}

/**
 * 1024k x 16 bit low power CMOS SRAM
 *
 * KiCad symbol: `Memory_RAM:AS6C1616`. Reference prefix: `U`.
 * Footprint filters: TSOP?I*18.4x12mm*P0.5mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/AS6C1616-TSOPI.pdf
 * Keywords: memory SRAM.
 * Default footprint: Package_SO:TSOP-I-48_18.4x12mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS6C1616 extends Component.withPins({
  /** Physical pin 1: A15; input. */
  "A15": "1",
  /** Physical pin 2: A14; input. */
  "A14": "2",
  /** Physical pin 3: A13; input. */
  "A13": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A11; input. */
  "A11": "5",
  /** Physical pin 6: A10; input. */
  "A10": "6",
  /** Physical pin 7: A9; input. */
  "A9": "7",
  /** Physical pin 8: A8; input. */
  "A8": "8",
  /** Physical pin 9: A19; input. */
  "A19": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: WE#; input. */
  "WE#": "11",
  /** Physical pin 12: CE2; input. */
  "CE2": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: UB#; input. */
  "UB#": "14",
  /** Physical pin 15: LB#; input. */
  "LB#": "15",
  /** Physical pin 16: A18; input. */
  "A18": "16",
  /** Physical pin 17: A17; input. */
  "A17": "17",
  /** Physical pin 18: A7; input. */
  "A7": "18",
  /** Physical pin 19: A6; input. */
  "A6": "19",
  /** Physical pin 20: A5; input. */
  "A5": "20",
  /** Physical pin 21: A4; input. */
  "A4": "21",
  /** Physical pin 22: A3; input. */
  "A3": "22",
  /** Physical pin 23: A2; input. */
  "A2": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A0; input. */
  "A0": "25",
  /** Physical pin 26: CE#; input. */
  "CE#": "26",
  /** Physical pin 27: VSS; power_in. */
  "VSS_27": "27",
  /** Physical pin 28: OE#; input. */
  "OE#": "28",
  /** Physical pin 29: DQ0; bidirectional. */
  "DQ0": "29",
  /** Physical pin 30: DQ8; bidirectional. */
  "DQ8": "30",
  /** Physical pin 31: DQ1; bidirectional. */
  "DQ1": "31",
  /** Physical pin 32: DQ9; bidirectional. */
  "DQ9": "32",
  /** Physical pin 33: DQ2; bidirectional. */
  "DQ2": "33",
  /** Physical pin 34: DQ10; bidirectional. */
  "DQ10": "34",
  /** Physical pin 35: DQ3; bidirectional. */
  "DQ3": "35",
  /** Physical pin 36: DQ11; bidirectional. */
  "DQ11": "36",
  /** Physical pin 37: VCC; power_in. */
  "VCC": "37",
  /** Physical pin 38: DQ4; bidirectional. */
  "DQ4": "38",
  /** Physical pin 39: DQ12; bidirectional. */
  "DQ12": "39",
  /** Physical pin 40: DQ5; bidirectional. */
  "DQ5": "40",
  /** Physical pin 41: DQ13; bidirectional. */
  "DQ13": "41",
  /** Physical pin 42: DQ6; bidirectional. */
  "DQ6": "42",
  /** Physical pin 43: DQ14; bidirectional. */
  "DQ14": "43",
  /** Physical pin 44: DQ7; bidirectional. */
  "DQ7": "44",
  /** Physical pin 45: DQ15; input. */
  "DQ15": "45",
  /** Physical pin 46: VSS; power_in. */
  "VSS_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 48: A16; input. */
  "A16": "48",
}) {
  override schema = "Memory_RAM:AS6C1616";
  override referencePrefix = "U";
}

/**
 * 512K x 8 Low Power CMOS RAM, DIP-32
 *
 * KiCad symbol: `Memory_RAM:AS6C4008-55PCN`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/AS6C4008.pdf
 * Keywords: RAM SRAM CMOS MEMORY.
 * Default footprint: Package_DIP:DIP-32_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS6C4008_55PCN extends Component.withPins({
  /** Physical pin 16: VSS; power_in. */
  "VSS": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: A18; input. */
  "A18": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: DQ0; tri_state. */
  "DQ0": "13",
  /** Physical pin 14: DQ1; tri_state. */
  "DQ1": "14",
  /** Physical pin 15: DQ2; tri_state. */
  "DQ2": "15",
  /** Physical pin 17: DQ3; tri_state. */
  "DQ3": "17",
  /** Physical pin 18: DQ4; tri_state. */
  "DQ4": "18",
  /** Physical pin 19: DQ5; tri_state. */
  "DQ5": "19",
  /** Physical pin 20: DQ6; tri_state. */
  "DQ6": "20",
  /** Physical pin 21: DQ7; tri_state. */
  "DQ7": "21",
  /** Physical pin 22: CE#; input. */
  "CE#": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: OE#; input. */
  "OE#": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: WE#; input. */
  "WE#": "29",
  /** Physical pin 30: A17; input. */
  "A17": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:AS6C4008-55PCN";
  override referencePrefix = "U";
}

/**
 * 128K-word x 8-bit High-Speed CMOS Static RAM, 70/85/100/120ns, 5V supply, DIP-32/SOP-32
 *
 * KiCad symbol: `Memory_RAM:HM628128_DIP32_SOP32`. Reference prefix: `U`.
 * Footprint filters: *DIP*W15.24mm*, *SOP*11.*20.*P1.27mm*.
 * @see https://www.silicon-ark.co.uk/datasheets/hm628128-datasheet-hitachi.pdf
 * Keywords: SRAM MEMORY 1Mbit Obsolete.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HM628128_DIP32_SOP32 extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:HM628128_DIP32_SOP32";
  override referencePrefix = "U";
}

/**
 * 5V 1-Mbit (128K x 8-bit) FAST Asynchronous SRAM, 10/12/15/20ns, SOJ-32 (400 mil)
 *
 * KiCad symbol: `Memory_RAM:AS7C1024B-xxJ`. Reference prefix: `U`.
 * Footprint filters: *SOJ*10.1*20.*P1.27mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/sram/fa/AS7C1024B_March2022_v3.0.pdf
 * Keywords: CMOS MEMORY Static 1Mbit.
 * Default footprint: Package_SO:SOJ-32_10.16x20.955mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7C1024B_xxJ extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:AS7C1024B-xxJ";
  override referencePrefix = "U";
}

/**
 * 128K-word x 8-bit High-Speed CMOS Static RAM, 70/85/100/120ns, 5V supply, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:HM628128_TSOP32`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*11.8*8*P0.5mm*, *TSOP?I*18.4*8*P0.5mm*.
 * @see https://www.silicon-ark.co.uk/datasheets/hm628128-datasheet-hitachi.pdf
 * Keywords: SRAM MEMORY 1Mbit Obsolete.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HM628128_TSOP32 extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:HM628128_TSOP32";
  override referencePrefix = "U";
}

/**
 * 5V 1-Mbit (128K x 8-bit) FAST Asynchronous SRAM, 10/12/15/20ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:AS7C1024B-xxT`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*18.4*8*P0.5mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/sram/fa/AS7C1024B_March2022_v3.0.pdf
 * Keywords: CMOS MEMORY Static 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_18.4x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7C1024B_xxT extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:AS7C1024B-xxT";
  override referencePrefix = "U";
}

/**
 * 5V 1-Mbit (128K x 8-bit) FAST Asynchronous SRAM, 10/12/15/20ns, SOJ-32 (300 mil)
 *
 * KiCad symbol: `Memory_RAM:AS7C1024B-xxTJ`. Reference prefix: `U`.
 * Footprint filters: *SOJ*7.6*20.*P1.27mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/sram/fa/AS7C1024B_March2022_v3.0.pdf
 * Keywords: CMOS MEMORY Static 1Mbit.
 * Default footprint: Package_SO:SOJ-32_7.62x20.955mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7C1024B_xxTJ extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:AS7C1024B-xxTJ";
  override referencePrefix = "U";
}

/**
 * 3.3V 1-Mbit (128K X 8-bit) CMOS SRAM, 10/12/15/20ns, SOJ-32 (400 mil)
 *
 * KiCad symbol: `Memory_RAM:AS7C31024B-xxJ`. Reference prefix: `U`.
 * Footprint filters: *SOJ*10.1*20.*P1.27mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/sram/fa/AS7C31024B.V1.2.pdf
 * Keywords: Static MEMORY 1Mbit.
 * Default footprint: Package_SO:SOJ-32_10.16x20.955mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7C31024B_xxJ extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:AS7C31024B-xxJ";
  override referencePrefix = "U";
}

/**
 * 3.3V 1-Mbit (128K X 8-bit) CMOS SRAM, 10/12/15/20ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:AS7C31024B-xxT`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*18.4*8*P0.5mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/sram/fa/AS7C31024B.V1.2.pdf
 * Keywords: MEMORY Static 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_18.4x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7C31024B_xxT extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:AS7C31024B-xxT";
  override referencePrefix = "U";
}

/**
 * 3.3V 1-Mbit (128K X 8-bit) CMOS SRAM, 10/12/15/20ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:AS7C31024B-xxST`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*11.8*8*P0.5mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/sram/fa/AS7C31024B.V1.2.pdf
 * Keywords: MEMORY Static 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_11.8x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7C31024B_xxST extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:AS7C31024B-xxST";
  override referencePrefix = "U";
}

/**
 * 3.3V 1-Mbit (128K X 8-bit) CMOS SRAM, 10/12/15/20ns, SOJ-32 (300 mil)
 *
 * KiCad symbol: `Memory_RAM:AS7C31024B-xxTJ`. Reference prefix: `U`.
 * Footprint filters: *SOJ*7.6*20.*P1.27mm*.
 * @see https://www.alliancememory.com/wp-content/uploads/pdf/sram/fa/AS7C31024B.V1.2.pdf
 * Keywords: Static MEMORY 1Mbit.
 * Default footprint: Package_SO:SOJ-32_7.62x20.955mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7C31024B_xxTJ extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:AS7C31024B-xxTJ";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K x 8-bit) Static RAM, VCC = 2.2..3.6V, 45ns, SOIC-32 (SOP-32)
 *
 * KiCad symbol: `Memory_RAM:CY62128EV30xx-xxS`. Reference prefix: `U`.
 * Footprint filters: *SOP*11.*20.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY62128EV30_MoBL_1_Mbit_(128K_X_8)_Static_RAM-DataSheet-v17_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebe867f322f
 * Keywords: CMOS MEMORY SRAM 1Mbit.
 * Default footprint: Package_SO:SOP-32_11.305x20.495mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY62128EV30xx_xxS extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:CY62128EV30xx-xxS";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K x 8-bit) Static RAM, VCC = 2.2..3.6V, 45ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:CY62128EV30xx-xxZ`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*18.4*8*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY62128EV30_MoBL_1_Mbit_(128K_X_8)_Static_RAM-DataSheet-v17_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebe867f322f
 * Keywords: CMOS MEMORY SRAM 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_18.4x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY62128EV30xx_xxZ extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:CY62128EV30xx-xxZ";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K x 8-bit) Static RAM, VCC = 4.5..5.5V, 45/55ns, SOIC-32 (SOP-32)
 *
 * KiCad symbol: `Memory_RAM:CY62128Exx-xxS`. Reference prefix: `U`.
 * Footprint filters: *SOP*11.*20.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY62128E_MoBL_1-Mbit_(128_K_8)_Static_RAM-DataSheet-v17_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebe7dc7321d
 * Keywords: CMOS MEMORY SRAM 1Mbit.
 * Default footprint: Package_SO:SOP-32_11.305x20.495mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY62128Exx_xxS extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:CY62128Exx-xxS";
  override referencePrefix = "U";
}

/**
 * 1-Mbit (128K x 8-bit) Static RAM, VCC = 4.5..5.5V, 45/55ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:CY62128Exx-xxZ`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*18.4*8*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY62128E_MoBL_1-Mbit_(128_K_8)_Static_RAM-DataSheet-v17_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebe7dc7321d
 * Keywords: CMOS MEMORY SRAM 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_18.4x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY62128Exx_xxZ extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:CY62128Exx-xxZ";
  override referencePrefix = "U";
}

/**
 * 32Kx8 bit Low Power CMOS Static RAM, 55/70ns, DIP-28
 *
 * KiCad symbol: `Memory_RAM:KM62256CLP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.futurlec.com/Datasheet/Memory/62256.pdf
 * Keywords: RAM SRAM CMOS MEMORY.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KM62256CLP extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 1: A14; input. */
  "A14": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: Q0; tri_state. */
  "Q0": "11",
  /** Physical pin 12: Q1; tri_state. */
  "Q1": "12",
  /** Physical pin 13: Q2; tri_state. */
  "Q2": "13",
  /** Physical pin 15: Q3; tri_state. */
  "Q3": "15",
  /** Physical pin 16: Q4; tri_state. */
  "Q4": "16",
  /** Physical pin 17: Q5; tri_state. */
  "Q5": "17",
  /** Physical pin 18: Q6; tri_state. */
  "Q6": "18",
  /** Physical pin 19: Q7; tri_state. */
  "Q7": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: A13; input. */
  "A13": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:KM62256CLP";
  override referencePrefix = "U";
}

/**
 * 256K (32K x 8) Static RAM, 70ns, DIP-28
 *
 * KiCad symbol: `Memory_RAM:CY62256-70PC`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://ecee.colorado.edu/~mcclurel/Cypress_SRAM_CY62256.pdf
 * Keywords: RAM SRAM CMOS MEMORY.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY62256_70PC extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 1: A14; input. */
  "A14": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: Q0; tri_state. */
  "Q0": "11",
  /** Physical pin 12: Q1; tri_state. */
  "Q1": "12",
  /** Physical pin 13: Q2; tri_state. */
  "Q2": "13",
  /** Physical pin 15: Q3; tri_state. */
  "Q3": "15",
  /** Physical pin 16: Q4; tri_state. */
  "Q4": "16",
  /** Physical pin 17: Q5; tri_state. */
  "Q5": "17",
  /** Physical pin 18: Q6; tri_state. */
  "Q6": "18",
  /** Physical pin 19: Q7; tri_state. */
  "Q7": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: A13; input. */
  "A13": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:CY62256-70PC";
  override referencePrefix = "U";
}

/**
 * CY7C199
 *
 * KiCad symbol: `Memory_RAM:CY7C199`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C199 extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 1: A5; input. */
  "A5": "1",
  /** Physical pin 2: A6; input. */
  "A6": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A8; input. */
  "A8": "4",
  /** Physical pin 5: A9; input. */
  "A9": "5",
  /** Physical pin 6: A10; input. */
  "A10": "6",
  /** Physical pin 7: A11; input. */
  "A11": "7",
  /** Physical pin 8: A12; input. */
  "A12": "8",
  /** Physical pin 9: A13; input. */
  "A13": "9",
  /** Physical pin 10: A14; input. */
  "A14": "10",
  /** Physical pin 11: D0; tri_state. */
  "D0": "11",
  /** Physical pin 12: D1; tri_state. */
  "D1": "12",
  /** Physical pin 13: D2; tri_state. */
  "D2": "13",
  /** Physical pin 15: D3; tri_state. */
  "D3": "15",
  /** Physical pin 16: D4; tri_state. */
  "D4": "16",
  /** Physical pin 17: D5; tri_state. */
  "D5": "17",
  /** Physical pin 18: D6; tri_state. */
  "D6": "18",
  /** Physical pin 19: D7; tri_state. */
  "D7": "19",
  /** Physical pin 20: ~{CE}; input. */
  "~{CE}": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
  /** Physical pin 25: A3; input. */
  "A3": "25",
  /** Physical pin 26: A4; input. */
  "A4": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:CY7C199";
  override referencePrefix = "U";
}

/**
 * 32 Mbit serial pseudo SRAM device organized as 4Mx8 bits, 1.8 VCC, SOIC8 (SOP8)
 *
 * KiCad symbol: `Memory_RAM:ESP-PSRAM32`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp-psram32_datasheet_en.pdf
 * Keywords: 32 Mbit serial pseudo SRAM MEMORY.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP_PSRAM32 extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO/SIO; output. */
  "SO/SIO": "2",
  /** Physical pin 3: SIO2; bidirectional. */
  "SIO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/SIO; input. */
  "SI/SIO": "5",
  /** Physical pin 6: SCLK; output. */
  "SCLK": "6",
  /** Physical pin 7: SIO3; bidirectional. */
  "SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_RAM:ESP-PSRAM32";
  override referencePrefix = "U";
}

/**
 * 512M x 16-bit (8 Gbit) CMOS Double Data Rate IV Synchronous RAM, Rev. B, FBGA-96
 *
 * KiCad symbol: `Memory_RAM:MT40A512M16JY`. Reference prefix: `U`.
 * Footprint filters: *FBGA*8x14mm*Layout9x16*P0.8mm*.
 * @see https://eu.mouser.com/datasheet/2/671/8gb_ddr4_sdram-3178955.pdf
 * Keywords: DDR4 DRAM SDRAM x16 MEMORY.
 * Default footprint: Package_BGA:Micron_FBGA-96_8x14mm_Layout9x16_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT40A512M16JY extends Component.withPins({
  /** Physical pin A1: V_{DDQ}; power_in. */
  "V_{DDQ}_A1": "A1",
  /** Physical pin A2: V_{SSQ}; power_in. */
  "V_{SSQ}_A2": "A2",
  /** Physical pin A3: DQ8; bidirectional. */
  "DQ8": "A3",
  /** Physical pin A7: UDQS_c; bidirectional. */
  "UDQS_c": "A7",
  /** Physical pin A8: V_{SSQ}; passive. */
  "V_{SSQ}_A8": "A8",
  /** Physical pin A9: V_{DDQ}; passive. */
  "V_{DDQ}_A9": "A9",
  /** Physical pin B1: V_{PP}; power_in. */
  "V_{PP}_B1": "B1",
  /** Physical pin B2: V_{SS}; power_in. */
  "V_{SS}_B2": "B2",
  /** Physical pin B3: V_{DD}; passive. */
  "V_{DD}_B3": "B3",
  /** Physical pin B7: UDQS_t; bidirectional. */
  "UDQS_t": "B7",
  /** Physical pin B8: DQ9; bidirectional. */
  "DQ9": "B8",
  /** Physical pin B9: V_{DD}; power_in. */
  "V_{DD}_B9": "B9",
  /** Physical pin C1: V_{DDQ}; passive. */
  "V_{DDQ}_C1": "C1",
  /** Physical pin C2: DQ12; bidirectional. */
  "DQ12": "C2",
  /** Physical pin C3: DQ10; bidirectional. */
  "DQ10": "C3",
  /** Physical pin C7: DQ11; bidirectional. */
  "DQ11": "C7",
  /** Physical pin C8: DQ13; bidirectional. */
  "DQ13": "C8",
  /** Physical pin C9: V_{SSQ}; passive. */
  "V_{SSQ}_C9": "C9",
  /** Physical pin D1: V_{DD}; passive. */
  "V_{DD}_D1": "D1",
  /** Physical pin D2: V_{SSQ}; passive. */
  "V_{SSQ}_D2": "D2",
  /** Physical pin D3: DQ14; bidirectional. */
  "DQ14": "D3",
  /** Physical pin D7: DQ15; bidirectional. */
  "DQ15": "D7",
  /** Physical pin D8: V_{SSQ}; passive. */
  "V_{SSQ}_D8": "D8",
  /** Physical pin D9: V_{DDQ}; passive. */
  "V_{DDQ}_D9": "D9",
  /** Physical pin E1: V_{SS}; passive. */
  "V_{SS}_E1": "E1",
  /** Physical pin E2: NF/~{UDM}/~{UDBI}; bidirectional. */
  "NF/~{UDM}/~{UDBI}": "E2",
  /** Physical pin E3: V_{SSQ}; passive. */
  "V_{SSQ}_E3": "E3",
  /** Physical pin E7: NF/~{LDM}/~{LDBI}; bidirectional. */
  "NF/~{LDM}/~{LDBI}": "E7",
  /** Physical pin E8: V_{SSQ}; passive. */
  "V_{SSQ}_E8": "E8",
  /** Physical pin E9: V_{SS}; passive. */
  "V_{SS}_E9": "E9",
  /** Physical pin F1: V_{SSQ}; passive. */
  "V_{SSQ}_F1": "F1",
  /** Physical pin F2: V_{DDQ}; passive. */
  "V_{DDQ}_F2": "F2",
  /** Physical pin F3: LDQS_c; bidirectional. */
  "LDQS_c": "F3",
  /** Physical pin F7: DQ1; bidirectional. */
  "DQ1": "F7",
  /** Physical pin F8: V_{DDQ}; passive. */
  "V_{DDQ}_F8": "F8",
  /** Physical pin F9: ZQ; passive. */
  "ZQ": "F9",
  /** Physical pin G1: V_{DDQ}; passive. */
  "V_{DDQ}_G1": "G1",
  /** Physical pin G2: DQ0; bidirectional. */
  "DQ0": "G2",
  /** Physical pin G3: LDQS_t; bidirectional. */
  "LDQS_t": "G3",
  /** Physical pin G7: V_{DD}; passive. */
  "V_{DD}_G7": "G7",
  /** Physical pin G8: V_{SS}; passive. */
  "V_{SS}_G8": "G8",
  /** Physical pin G9: V_{DDQ}; passive. */
  "V_{DDQ}_G9": "G9",
  /** Physical pin H1: V_{SSQ}; passive. */
  "V_{SSQ}_H1": "H1",
  /** Physical pin H2: DQ4; bidirectional. */
  "DQ4": "H2",
  /** Physical pin H3: DQ2; bidirectional. */
  "DQ2": "H3",
  /** Physical pin H7: DQ3; bidirectional. */
  "DQ3": "H7",
  /** Physical pin H8: DQ5; bidirectional. */
  "DQ5": "H8",
  /** Physical pin H9: V_{SSQ}; passive. */
  "V_{SSQ}_H9": "H9",
  /** Physical pin J1: V_{DD}; passive. */
  "V_{DD}_J1": "J1",
  /** Physical pin J2: V_{DDQ}; passive. */
  "V_{DDQ}_J2": "J2",
  /** Physical pin J3: DQ6; bidirectional. */
  "DQ6": "J3",
  /** Physical pin J7: DQ7; bidirectional. */
  "DQ7": "J7",
  /** Physical pin J8: V_{DDQ}; passive. */
  "V_{DDQ}_J8": "J8",
  /** Physical pin J9: V_{DD}; passive. */
  "V_{DD}_J9": "J9",
  /** Physical pin K1: V_{SS}; passive. */
  "V_{SS}_K1": "K1",
  /** Physical pin K2: CKE; input. */
  "CKE": "K2",
  /** Physical pin K3: ODT; input. */
  "ODT": "K3",
  /** Physical pin K7: CK_t; input. */
  "CK_t": "K7",
  /** Physical pin K8: CK_c; input. */
  "CK_c": "K8",
  /** Physical pin K9: V_{SS}; passive. */
  "V_{SS}_K9": "K9",
  /** Physical pin L1: V_{DD}; passive. */
  "V_{DD}_L1": "L1",
  /** Physical pin L2: A14/~{WE}; input. */
  "A14/~{WE}": "L2",
  /** Physical pin L3: ~{ACT}; input. */
  "~{ACT}": "L3",
  /** Physical pin L7: ~{CS}; input. */
  "~{CS}": "L7",
  /** Physical pin L8: A16/~{RAS}; input. */
  "A16/~{RAS}": "L8",
  /** Physical pin L9: V_{DD}; passive. */
  "V_{DD}_L9": "L9",
  /** Physical pin M1: V_{REFCA}; passive. */
  "V_{REFCA}": "M1",
  /** Physical pin M2: BG0; input. */
  "BG0": "M2",
  /** Physical pin M3: A10/AP; input. */
  "A10/AP": "M3",
  /** Physical pin M7: A12/~{BC}; input. */
  "A12/~{BC}": "M7",
  /** Physical pin M8: A15/~{CAS}; input. */
  "A15/~{CAS}": "M8",
  /** Physical pin M9: V_{SS}; passive. */
  "V_{SS}_M9": "M9",
  /** Physical pin N1: V_{SS}; passive. */
  "V_{SS}_N1": "N1",
  /** Physical pin N2: BA0; input. */
  "BA0": "N2",
  /** Physical pin N3: A4; input. */
  "A4": "N3",
  /** Physical pin N7: A3; input. */
  "A3": "N7",
  /** Physical pin N8: BA1; input. */
  "BA1": "N8",
  /** Physical pin N9: TEN; input. */
  "TEN": "N9",
  /** Physical pin P1: ~{RESET}; input. */
  "~{RESET}": "P1",
  /** Physical pin P2: A6; input. */
  "A6": "P2",
  /** Physical pin P3: A0; input. */
  "A0": "P3",
  /** Physical pin P7: A1; input. */
  "A1": "P7",
  /** Physical pin P8: A5; input. */
  "A5": "P8",
  /** Physical pin P9: ~{ALERT}; open_collector. */
  "~{ALERT}": "P9",
  /** Physical pin R1: V_{DD}; passive. */
  "V_{DD}_R1": "R1",
  /** Physical pin R2: A8; input. */
  "A8": "R2",
  /** Physical pin R3: A2; input. */
  "A2": "R3",
  /** Physical pin R7: A9; input. */
  "A9": "R7",
  /** Physical pin R8: A7; input. */
  "A7": "R8",
  /** Physical pin R9: V_{PP}; passive. */
  "V_{PP}_R9": "R9",
  /** Physical pin T1: V_{SS}; passive. */
  "V_{SS}_T1": "T1",
  /** Physical pin T2: A11; input. */
  "A11": "T2",
  /** Physical pin T3: PAR; input. */
  "PAR": "T3",
  /** Physical pin T7: NF/NC; no_connect. */
  "NF/NC": "T7",
  /** Physical pin T8: A13; input. */
  "A13": "T8",
  /** Physical pin T9: V_{DD}; passive. */
  "V_{DD}_T9": "T9",
}) {
  override schema = "Memory_RAM:MT40A512M16JY";
  override referencePrefix = "U";
}

/**
 * 512M x 16-bit (8 Gbit) CMOS Double Data Rate IV Synchronous RAM, FBGA-96
 *
 * KiCad symbol: `Memory_RAM:H5AN8G6NAFR-xxC`. Reference prefix: `U`.
 * Footprint filters: *FBGA*7.5x13mm*Layout9x16*P0.8mm*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_2003241832_SK-HYNIX-H5AN8G6NAFR-UHC_C499916.pdf
 * Keywords: DDR4 DRAM SDRAM x16 MEMORY.
 * Default footprint: Package_BGA:FBGA-96_7.5x13mm_Layout9x16_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class H5AN8G6NAFR_xxC extends Component.withPins({
  /** Physical pin A1: V_{DDQ}; power_in. */
  "V_{DDQ}_A1": "A1",
  /** Physical pin A2: V_{SSQ}; power_in. */
  "V_{SSQ}_A2": "A2",
  /** Physical pin A3: DQ8; bidirectional. */
  "DQ8": "A3",
  /** Physical pin A7: UDQS_c; bidirectional. */
  "UDQS_c": "A7",
  /** Physical pin A8: V_{SSQ}; passive. */
  "V_{SSQ}_A8": "A8",
  /** Physical pin A9: V_{DDQ}; passive. */
  "V_{DDQ}_A9": "A9",
  /** Physical pin B1: V_{PP}; power_in. */
  "V_{PP}_B1": "B1",
  /** Physical pin B2: V_{SS}; power_in. */
  "V_{SS}_B2": "B2",
  /** Physical pin B3: V_{DD}; passive. */
  "V_{DD}_B3": "B3",
  /** Physical pin B7: UDQS_t; bidirectional. */
  "UDQS_t": "B7",
  /** Physical pin B8: DQ9; bidirectional. */
  "DQ9": "B8",
  /** Physical pin B9: V_{DD}; power_in. */
  "V_{DD}_B9": "B9",
  /** Physical pin C1: V_{DDQ}; passive. */
  "V_{DDQ}_C1": "C1",
  /** Physical pin C2: DQ12; bidirectional. */
  "DQ12": "C2",
  /** Physical pin C3: DQ10; bidirectional. */
  "DQ10": "C3",
  /** Physical pin C7: DQ11; bidirectional. */
  "DQ11": "C7",
  /** Physical pin C8: DQ13; bidirectional. */
  "DQ13": "C8",
  /** Physical pin C9: V_{SSQ}; passive. */
  "V_{SSQ}_C9": "C9",
  /** Physical pin D1: V_{DD}; passive. */
  "V_{DD}_D1": "D1",
  /** Physical pin D2: V_{SSQ}; passive. */
  "V_{SSQ}_D2": "D2",
  /** Physical pin D3: DQ14; bidirectional. */
  "DQ14": "D3",
  /** Physical pin D7: DQ15; bidirectional. */
  "DQ15": "D7",
  /** Physical pin D8: V_{SSQ}; passive. */
  "V_{SSQ}_D8": "D8",
  /** Physical pin D9: V_{DDQ}; passive. */
  "V_{DDQ}_D9": "D9",
  /** Physical pin E1: V_{SS}; passive. */
  "V_{SS}_E1": "E1",
  /** Physical pin E2: NF/~{UDM}/~{UDBI}; bidirectional. */
  "NF/~{UDM}/~{UDBI}": "E2",
  /** Physical pin E3: V_{SSQ}; passive. */
  "V_{SSQ}_E3": "E3",
  /** Physical pin E7: NF/~{LDM}/~{LDBI}; bidirectional. */
  "NF/~{LDM}/~{LDBI}": "E7",
  /** Physical pin E8: V_{SSQ}; passive. */
  "V_{SSQ}_E8": "E8",
  /** Physical pin E9: V_{SS}; passive. */
  "V_{SS}_E9": "E9",
  /** Physical pin F1: V_{SSQ}; passive. */
  "V_{SSQ}_F1": "F1",
  /** Physical pin F2: V_{DDQ}; passive. */
  "V_{DDQ}_F2": "F2",
  /** Physical pin F3: LDQS_c; bidirectional. */
  "LDQS_c": "F3",
  /** Physical pin F7: DQ1; bidirectional. */
  "DQ1": "F7",
  /** Physical pin F8: V_{DDQ}; passive. */
  "V_{DDQ}_F8": "F8",
  /** Physical pin F9: ZQ; passive. */
  "ZQ": "F9",
  /** Physical pin G1: V_{DDQ}; passive. */
  "V_{DDQ}_G1": "G1",
  /** Physical pin G2: DQ0; bidirectional. */
  "DQ0": "G2",
  /** Physical pin G3: LDQS_t; bidirectional. */
  "LDQS_t": "G3",
  /** Physical pin G7: V_{DD}; passive. */
  "V_{DD}_G7": "G7",
  /** Physical pin G8: V_{SS}; passive. */
  "V_{SS}_G8": "G8",
  /** Physical pin G9: V_{DDQ}; passive. */
  "V_{DDQ}_G9": "G9",
  /** Physical pin H1: V_{SSQ}; passive. */
  "V_{SSQ}_H1": "H1",
  /** Physical pin H2: DQ4; bidirectional. */
  "DQ4": "H2",
  /** Physical pin H3: DQ2; bidirectional. */
  "DQ2": "H3",
  /** Physical pin H7: DQ3; bidirectional. */
  "DQ3": "H7",
  /** Physical pin H8: DQ5; bidirectional. */
  "DQ5": "H8",
  /** Physical pin H9: V_{SSQ}; passive. */
  "V_{SSQ}_H9": "H9",
  /** Physical pin J1: V_{DD}; passive. */
  "V_{DD}_J1": "J1",
  /** Physical pin J2: V_{DDQ}; passive. */
  "V_{DDQ}_J2": "J2",
  /** Physical pin J3: DQ6; bidirectional. */
  "DQ6": "J3",
  /** Physical pin J7: DQ7; bidirectional. */
  "DQ7": "J7",
  /** Physical pin J8: V_{DDQ}; passive. */
  "V_{DDQ}_J8": "J8",
  /** Physical pin J9: V_{DD}; passive. */
  "V_{DD}_J9": "J9",
  /** Physical pin K1: V_{SS}; passive. */
  "V_{SS}_K1": "K1",
  /** Physical pin K2: CKE; input. */
  "CKE": "K2",
  /** Physical pin K3: ODT; input. */
  "ODT": "K3",
  /** Physical pin K7: CK_t; input. */
  "CK_t": "K7",
  /** Physical pin K8: CK_c; input. */
  "CK_c": "K8",
  /** Physical pin K9: V_{SS}; passive. */
  "V_{SS}_K9": "K9",
  /** Physical pin L1: V_{DD}; passive. */
  "V_{DD}_L1": "L1",
  /** Physical pin L2: A14/~{WE}; input. */
  "A14/~{WE}": "L2",
  /** Physical pin L3: ~{ACT}; input. */
  "~{ACT}": "L3",
  /** Physical pin L7: ~{CS}; input. */
  "~{CS}": "L7",
  /** Physical pin L8: A16/~{RAS}; input. */
  "A16/~{RAS}": "L8",
  /** Physical pin L9: V_{DD}; passive. */
  "V_{DD}_L9": "L9",
  /** Physical pin M1: V_{REFCA}; passive. */
  "V_{REFCA}": "M1",
  /** Physical pin M2: BG0; input. */
  "BG0": "M2",
  /** Physical pin M3: A10/AP; input. */
  "A10/AP": "M3",
  /** Physical pin M7: A12/~{BC}; input. */
  "A12/~{BC}": "M7",
  /** Physical pin M8: A15/~{CAS}; input. */
  "A15/~{CAS}": "M8",
  /** Physical pin M9: V_{SS}; passive. */
  "V_{SS}_M9": "M9",
  /** Physical pin N1: V_{SS}; passive. */
  "V_{SS}_N1": "N1",
  /** Physical pin N2: BA0; input. */
  "BA0": "N2",
  /** Physical pin N3: A4; input. */
  "A4": "N3",
  /** Physical pin N7: A3; input. */
  "A3": "N7",
  /** Physical pin N8: BA1; input. */
  "BA1": "N8",
  /** Physical pin N9: TEN; input. */
  "TEN": "N9",
  /** Physical pin P1: ~{RESET}; input. */
  "~{RESET}": "P1",
  /** Physical pin P2: A6; input. */
  "A6": "P2",
  /** Physical pin P3: A0; input. */
  "A0": "P3",
  /** Physical pin P7: A1; input. */
  "A1": "P7",
  /** Physical pin P8: A5; input. */
  "A5": "P8",
  /** Physical pin P9: ~{ALERT}; open_collector. */
  "~{ALERT}": "P9",
  /** Physical pin R1: V_{DD}; passive. */
  "V_{DD}_R1": "R1",
  /** Physical pin R2: A8; input. */
  "A8": "R2",
  /** Physical pin R3: A2; input. */
  "A2": "R3",
  /** Physical pin R7: A9; input. */
  "A9": "R7",
  /** Physical pin R8: A7; input. */
  "A7": "R8",
  /** Physical pin R9: V_{PP}; passive. */
  "V_{PP}_R9": "R9",
  /** Physical pin T1: V_{SS}; passive. */
  "V_{SS}_T1": "T1",
  /** Physical pin T2: A11; input. */
  "A11": "T2",
  /** Physical pin T3: PAR; input. */
  "PAR": "T3",
  /** Physical pin T7: NF/NC; no_connect. */
  "NF/NC": "T7",
  /** Physical pin T8: A13; input. */
  "A13": "T8",
  /** Physical pin T9: V_{DD}; passive. */
  "V_{DD}_T9": "T9",
}) {
  override schema = "Memory_RAM:H5AN8G6NAFR-xxC";
  override referencePrefix = "U";
}

/**
 * 8Gb CMOS Double Data Rate IV Synchronous RAM
 *
 * KiCad symbol: `Memory_RAM:H5AN8G8NAFR-UHC`. Reference prefix: `U`.
 * Footprint filters: FBGA*7.5x11mm*P0.8mm*.
 * @see https://www.skhynix.com/product/filedata/fileDownload.do?seq=7687
 * Keywords: DDR4 DRAM MEMORY.
 * Default footprint: Package_BGA:FBGA-78_7.5x11mm_Layout2x3x13_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class H5AN8G8NAFR_UHC extends Component.withPins({
  /** Physical pin A1: VDD; power_in. */
  "VDD_A1": "A1",
  /** Physical pin A2: VSSQ; power_in. */
  "VSSQ_A2": "A2",
  /** Physical pin A3: TDQS_c; output. */
  "TDQS_c": "A3",
  /** Physical pin A7: TDQS_t/~{DM/DBI}; bidirectional. */
  "TDQS_t/~{DM/DBI}": "A7",
  /** Physical pin A8: VSSQ; passive. */
  "VSSQ_A8": "A8",
  /** Physical pin A9: VSS; power_in. */
  "VSS_A9": "A9",
  /** Physical pin B1: VPP; power_in. */
  "VPP_B1": "B1",
  /** Physical pin B2: VDDQ; power_in. */
  "VDDQ_B2": "B2",
  /** Physical pin B3: DQS_c; bidirectional. */
  "DQS_c": "B3",
  /** Physical pin B7: DQ1; bidirectional. */
  "DQ1": "B7",
  /** Physical pin B8: VDDQ; passive. */
  "VDDQ_B8": "B8",
  /** Physical pin B9: ZQ; passive. */
  "ZQ": "B9",
  /** Physical pin C1: VDDQ; passive. */
  "VDDQ_C1": "C1",
  /** Physical pin C2: DQ0; bidirectional. */
  "DQ0": "C2",
  /** Physical pin C3: DQS_t; bidirectional. */
  "DQS_t": "C3",
  /** Physical pin C7: VDD; passive. */
  "VDD_C7": "C7",
  /** Physical pin C8: VSS; passive. */
  "VSS_C8": "C8",
  /** Physical pin C9: VDDQ; passive. */
  "VDDQ_C9": "C9",
  /** Physical pin D1: VSSQ; passive. */
  "VSSQ_D1": "D1",
  /** Physical pin D2: DQ4; bidirectional. */
  "DQ4": "D2",
  /** Physical pin D3: DQ2; bidirectional. */
  "DQ2": "D3",
  /** Physical pin D7: DQ3; bidirectional. */
  "DQ3": "D7",
  /** Physical pin D8: DQ5; bidirectional. */
  "DQ5": "D8",
  /** Physical pin D9: VSSQ; passive. */
  "VSSQ_D9": "D9",
  /** Physical pin E1: VSS; passive. */
  "VSS_E1": "E1",
  /** Physical pin E2: VDDQ; passive. */
  "VDDQ_E2": "E2",
  /** Physical pin E3: DQ6; bidirectional. */
  "DQ6": "E3",
  /** Physical pin E7: DQ7; bidirectional. */
  "DQ7": "E7",
  /** Physical pin E8: VDDQ; passive. */
  "VDDQ_E8": "E8",
  /** Physical pin E9: VSS; passive. */
  "VSS_E9": "E9",
  /** Physical pin F1: VDD; passive. */
  "VDD_F1": "F1",
  /** Physical pin F2: NC/C2/ODT1; passive. */
  "NC/C2/ODT1": "F2",
  /** Physical pin F3: ODT; input. */
  "ODT": "F3",
  /** Physical pin F7: CK_t; input. */
  "CK_t": "F7",
  /** Physical pin F8: CK_c; input. */
  "CK_c": "F8",
  /** Physical pin F9: VDD; passive. */
  "VDD_F9": "F9",
  /** Physical pin G1: VSS; passive. */
  "VSS_G1": "G1",
  /** Physical pin G2: NC/C0/CKE1; passive. */
  "NC/C0/CKE1": "G2",
  /** Physical pin G3: CKE; input. */
  "CKE": "G3",
  /** Physical pin G7: ~{CS}; input. */
  "~{CS}": "G7",
  /** Physical pin G8: NC/C1/~{CS1}; passive. */
  "NC/C1/~{CS1}": "G8",
  /** Physical pin G9: TEN; input. */
  "TEN": "G9",
  /** Physical pin H1: VDD; passive. */
  "VDD_H1": "H1",
  /** Physical pin H2: A14/~{WE}; input. */
  "A14/~{WE}": "H2",
  /** Physical pin H3: ~{ACT}; input. */
  "~{ACT}": "H3",
  /** Physical pin H7: A15/~{CAS}; input. */
  "A15/~{CAS}": "H7",
  /** Physical pin H8: A16/~{RAS}; input. */
  "A16/~{RAS}": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin J1: VREFCA; passive. */
  "VREFCA": "J1",
  /** Physical pin J2: BG0; input. */
  "BG0": "J2",
  /** Physical pin J3: A10/AP; input. */
  "A10/AP": "J3",
  /** Physical pin J7: A12/~{BC}; input. */
  "A12/~{BC}": "J7",
  /** Physical pin J8: BG1; input. */
  "BG1": "J8",
  /** Physical pin J9: VDD; passive. */
  "VDD_J9": "J9",
  /** Physical pin K1: VSS; passive. */
  "VSS_K1": "K1",
  /** Physical pin K2: BA0; input. */
  "BA0": "K2",
  /** Physical pin K3: A4; input. */
  "A4": "K3",
  /** Physical pin K7: A3; input. */
  "A3": "K7",
  /** Physical pin K8: BA1; input. */
  "BA1": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin L1: ~{RESET}; input. */
  "~{RESET}": "L1",
  /** Physical pin L2: A6; input. */
  "A6": "L2",
  /** Physical pin L3: A0; input. */
  "A0": "L3",
  /** Physical pin L7: A1; input. */
  "A1": "L7",
  /** Physical pin L8: A5; input. */
  "A5": "L8",
  /** Physical pin L9: ~{ALERT}; open_collector. */
  "~{ALERT}": "L9",
  /** Physical pin M1: VDD; passive. */
  "VDD_M1": "M1",
  /** Physical pin M2: A8; input. */
  "A8": "M2",
  /** Physical pin M3: A2; input. */
  "A2": "M3",
  /** Physical pin M7: A9; input. */
  "A9": "M7",
  /** Physical pin M8: A7; input. */
  "A7": "M8",
  /** Physical pin M9: VPP; passive. */
  "VPP_M9": "M9",
  /** Physical pin N1: VSS; passive. */
  "VSS_N1": "N1",
  /** Physical pin N2: A11; input. */
  "A11": "N2",
  /** Physical pin N3: PAR; input. */
  "PAR": "N3",
  /** Physical pin N7: A17/NC; passive. */
  "A17/NC": "N7",
  /** Physical pin N8: A13; input. */
  "A13": "N8",
  /** Physical pin N9: VDD; passive. */
  "VDD_N9": "N9",
}) {
  override schema = "Memory_RAM:H5AN8G8NAFR-UHC";
  override referencePrefix = "U";
}

/**
 * 262144 x 1 bit Dynamic RAM, 120/150/200ns access time, single 5V ±10% power supply, TTL compatible inputs, DIP-16 (DP-16A package)
 *
 * KiCad symbol: `Memory_RAM:HM50256P`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://minuszerodegrees.net/memory/41256/datasheet_HM50256.pdf
 * Keywords: Hitachi DRAM NMOS 256Kbit 41256 MEMORY Obsolete.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HM50256P extends Component.withPins({
  /** Physical pin 1: A_{8}; input. */
  "A_{8}": "1",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
  /** Physical pin 9: A_{7}; input. */
  "A_{7}": "9",
  /** Physical pin 16: V_{SS}; power_in. */
  "V_{SS}": "16",
  /** Physical pin 2: Din; input. */
  "Din": "2",
  /** Physical pin 3: ~{WE}; input. */
  "~{WE}": "3",
  /** Physical pin 4: ~{RAS}; input. */
  "~{RAS}": "4",
  /** Physical pin 5: A_{0}; input. */
  "A_{0}": "5",
  /** Physical pin 6: A_{2}; input. */
  "A_{2}": "6",
  /** Physical pin 7: A_{1}; input. */
  "A_{1}": "7",
  /** Physical pin 10: A_{5}; input. */
  "A_{5}": "10",
  /** Physical pin 11: A_{4}; input. */
  "A_{4}": "11",
  /** Physical pin 12: A_{3}; input. */
  "A_{3}": "12",
  /** Physical pin 13: A_{6}; input. */
  "A_{6}": "13",
  /** Physical pin 14: Dout; tri_state. */
  "Dout": "14",
  /** Physical pin 15: ~{CAS}; input. */
  "~{CAS}": "15",
}) {
  override schema = "Memory_RAM:HM50256P";
  override referencePrefix = "U";
}

/**
 * 32,768-word × 8-bit High Speed CMOS Static RAM, 70ns, DIP-28
 *
 * KiCad symbol: `Memory_RAM:HM62256BLP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://web.mit.edu/6.115/www/document/62256.pdf
 * Keywords: RAM SRAM CMOS MEMORY.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HM62256BLP extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 1: A14; input. */
  "A14": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: Q0; tri_state. */
  "Q0": "11",
  /** Physical pin 12: Q1; tri_state. */
  "Q1": "12",
  /** Physical pin 13: Q2; tri_state. */
  "Q2": "13",
  /** Physical pin 15: Q3; tri_state. */
  "Q3": "15",
  /** Physical pin 16: Q4; tri_state. */
  "Q4": "16",
  /** Physical pin 17: Q5; tri_state. */
  "Q5": "17",
  /** Physical pin 18: Q6; tri_state. */
  "Q6": "18",
  /** Physical pin 19: Q7; tri_state. */
  "Q7": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: A13; input. */
  "A13": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:HM62256BLP";
  override referencePrefix = "U";
}

/**
 * 128K-word x 8-bit High-Speed CMOS Static RAM, 55/70ns, 5V supply, DIP-32/SOP-32
 *
 * KiCad symbol: `Memory_RAM:HM628128D_DIP32_SOP32`. Reference prefix: `U`.
 * Footprint filters: *DIP*W15.24mm*, *SOP*11.*20.*P1.27mm*.
 * @see http://www.futurlec.com/Datasheet/Memory/628128.pdf
 * Keywords: SRAM MEMORY 1Mbit Obsolete.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HM628128D_DIP32_SOP32 extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:HM628128D_DIP32_SOP32";
  override referencePrefix = "U";
}

/**
 * 128K-word x 8-bit High-Speed CMOS Static RAM, 55/70ns, 5V supply, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:HM628128D_TSOP32`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*11.8*8*P0.5mm*, *TSOP?I*18.4*8*P0.5mm*.
 * @see http://www.futurlec.com/Datasheet/Memory/628128.pdf
 * Keywords: SRAM MEMORY 1Mbit Obsolete.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HM628128D_TSOP32 extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:HM628128D_TSOP32";
  override referencePrefix = "U";
}

/**
 * Not in Production, 8Kx8 bit Static RAM, 70/85/100/120/150ns, DIP-28
 *
 * KiCad symbol: `Memory_RAM:HY6264AxP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.farnell.com/datasheets/2159.pdf
 * Keywords: HYUNDAI SRAM CMOS MEMORY.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HY6264AxP extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: I/O0; tri_state. */
  "I/O0": "11",
  /** Physical pin 12: I/O1; tri_state. */
  "I/O1": "12",
  /** Physical pin 13: I/O2; tri_state. */
  "I/O2": "13",
  /** Physical pin 15: I/O3; tri_state. */
  "I/O3": "15",
  /** Physical pin 16: I/O4; tri_state. */
  "I/O4": "16",
  /** Physical pin 17: I/O5; tri_state. */
  "I/O5": "17",
  /** Physical pin 18: I/O6; tri_state. */
  "I/O6": "18",
  /** Physical pin 19: I/O7; tri_state. */
  "I/O7": "19",
  /** Physical pin 20: ~{CS1}; input. */
  "~{CS1}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: CS2; input. */
  "CS2": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:HY6264AxP";
  override referencePrefix = "U";
}

/**
 * Not in Production, 8Kx8 bit Static RAM, 70/85/100/120/150ns, DIP-28
 *
 * KiCad symbol: `Memory_RAM:HY6264AxJ`. Reference prefix: `U`.
 * Footprint filters: *SOP*8.4x18.16mm*P1.27*.
 * @see https://www.farnell.com/datasheets/2159.pdf
 * Keywords: HYUNDAI SRAM CMOS MEMORY.
 * Default footprint: Package_SO:SOP-28_8.4x18.16mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HY6264AxJ extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: I/O0; tri_state. */
  "I/O0": "11",
  /** Physical pin 12: I/O1; tri_state. */
  "I/O1": "12",
  /** Physical pin 13: I/O2; tri_state. */
  "I/O2": "13",
  /** Physical pin 15: I/O3; tri_state. */
  "I/O3": "15",
  /** Physical pin 16: I/O4; tri_state. */
  "I/O4": "16",
  /** Physical pin 17: I/O5; tri_state. */
  "I/O5": "17",
  /** Physical pin 18: I/O6; tri_state. */
  "I/O6": "18",
  /** Physical pin 19: I/O7; tri_state. */
  "I/O7": "19",
  /** Physical pin 20: ~{CS1}; input. */
  "~{CS1}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: CS2; input. */
  "CS2": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:HY6264AxJ";
  override referencePrefix = "U";
}

/**
 * 16K x 8 Dual-Port SRAM, TQFP-64
 *
 * KiCad symbol: `Memory_RAM:IDT7006PF`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.idt.com/document/dst/7006-data-sheet
 * Keywords: dual-port ram.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7006PF extends Component.withPins({
  /** Physical pin 1: I/O2L; bidirectional. */
  "I/O2L": "1",
  /** Physical pin 2: I/O3L; bidirectional. */
  "I/O3L": "2",
  /** Physical pin 3: I/O4L; bidirectional. */
  "I/O4L": "3",
  /** Physical pin 4: I/O5L; bidirectional. */
  "I/O5L": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: I/O6L; bidirectional. */
  "I/O6L": "6",
  /** Physical pin 7: I/O7L; bidirectional. */
  "I/O7L": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: I/O0R; bidirectional. */
  "I/O0R": "10",
  /** Physical pin 11: I/O1R; bidirectional. */
  "I/O1R": "11",
  /** Physical pin 12: I/O2R; bidirectional. */
  "I/O2R": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC_13": "13",
  /** Physical pin 14: I/O3R; bidirectional. */
  "I/O3R": "14",
  /** Physical pin 15: I/O4R; bidirectional. */
  "I/O4R": "15",
  /** Physical pin 16: I/O5R; bidirectional. */
  "I/O5R": "16",
  /** Physical pin 17: I/O6R; bidirectional. */
  "I/O6R": "17",
  /** Physical pin 18: I/O7R; bidirectional. */
  "I/O7R": "18",
  /** Physical pin 19: ~{OE}R; input. */
  "~{OE}R": "19",
  /** Physical pin 20: R/~{W}R; input. */
  "R/~{W}R": "20",
  /** Physical pin 21: ~{SEM}R; input. */
  "~{SEM}R": "21",
  /** Physical pin 22: ~{CE}R; input. */
  "~{CE}R": "22",
  /** Physical pin 23: A13R; input. */
  "A13R": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: A12R; input. */
  "A12R": "25",
  /** Physical pin 26: A11R; input. */
  "A11R": "26",
  /** Physical pin 27: A10R; input. */
  "A10R": "27",
  /** Physical pin 28: A9R; input. */
  "A9R": "28",
  /** Physical pin 29: A8R; input. */
  "A8R": "29",
  /** Physical pin 30: A7R; input. */
  "A7R": "30",
  /** Physical pin 31: A6R; input. */
  "A6R": "31",
  /** Physical pin 32: A5R; input. */
  "A5R": "32",
  /** Physical pin 33: A4R; input. */
  "A4R": "33",
  /** Physical pin 34: A3R; input. */
  "A3R": "34",
  /** Physical pin 35: A2R; input. */
  "A2R": "35",
  /** Physical pin 36: A1R; input. */
  "A1R": "36",
  /** Physical pin 37: A0R; input. */
  "A0R": "37",
  /** Physical pin 38: ~{INT}R; output. */
  "~{INT}R": "38",
  /** Physical pin 39: ~{BUSY}R; output. */
  "~{BUSY}R": "39",
  /** Physical pin 40: M/~{S}; input. */
  "M/~{S}": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: ~{BUSY}L; output. */
  "~{BUSY}L": "42",
  /** Physical pin 43: ~{INT}L; output. */
  "~{INT}L": "43",
  /** Physical pin 44: A0L; input. */
  "A0L": "44",
  /** Physical pin 45: A1L; input. */
  "A1L": "45",
  /** Physical pin 46: A2L; input. */
  "A2L": "46",
  /** Physical pin 47: A3L; input. */
  "A3L": "47",
  /** Physical pin 48: A4L; input. */
  "A4L": "48",
  /** Physical pin 49: A5L; input. */
  "A5L": "49",
  /** Physical pin 50: A6L; input. */
  "A6L": "50",
  /** Physical pin 51: A7L; input. */
  "A7L": "51",
  /** Physical pin 52: A8L; input. */
  "A8L": "52",
  /** Physical pin 53: A9L; input. */
  "A9L": "53",
  /** Physical pin 54: A10L; input. */
  "A10L": "54",
  /** Physical pin 55: A11L; input. */
  "A11L": "55",
  /** Physical pin 56: A12L; input. */
  "A12L": "56",
  /** Physical pin 57: VCC; power_in. */
  "VCC_57": "57",
  /** Physical pin 58: A13L; input. */
  "A13L": "58",
  /** Physical pin 59: ~{CE}L; input. */
  "~{CE}L": "59",
  /** Physical pin 60: ~{SEM}L; input. */
  "~{SEM}L": "60",
  /** Physical pin 61: R/~{W}L; input. */
  "R/~{W}L": "61",
  /** Physical pin 62: ~{OE}L; input. */
  "~{OE}L": "62",
  /** Physical pin 63: I/O0L; bidirectional. */
  "I/O0L": "63",
  /** Physical pin 64: I/O1L; bidirectional. */
  "I/O1L": "64",
}) {
  override schema = "Memory_RAM:IDT7006PF";
  override referencePrefix = "U";
}

/**
 * IDT7027_TQ100
 *
 * KiCad symbol: `Memory_RAM:IDT7027_TQ100`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7027_TQ100 extends Component.withPins({
  /** Physical pin 1: A9L; input. */
  "A9L": "1",
  /** Physical pin 2: A10L; input. */
  "A10L": "2",
  /** Physical pin 3: A11L; input. */
  "A11L": "3",
  /** Physical pin 4: A12L; input. */
  "A12L": "4",
  /** Physical pin 5: A13L; input. */
  "A13L": "5",
  /** Physical pin 6: A14L; input. */
  "A14L": "6",
  /** Physical pin 10: LBL; input. */
  "LBL": "10",
  /** Physical pin 11: UBL; input. */
  "UBL": "11",
  /** Physical pin 12: CE0L; input. */
  "CE0L": "12",
  /** Physical pin 13: CE1L; input. */
  "CE1L": "13",
  /** Physical pin 14: SEML; input. */
  "SEML": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC_15": "15",
  /** Physical pin 16: R/WL; input. */
  "R/WL": "16",
  /** Physical pin 17: OEL; input. */
  "OEL": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: I/O15L; bidirectional. */
  "I/O15L": "20",
  /** Physical pin 21: I/O14L; bidirectional. */
  "I/O14L": "21",
  /** Physical pin 22: I/O13L; bidirectional. */
  "I/O13L": "22",
  /** Physical pin 23: I/O12L; bidirectional. */
  "I/O12L": "23",
  /** Physical pin 24: I/O11L; bidirectional. */
  "I/O11L": "24",
  /** Physical pin 25: I/O10L; bidirectional. */
  "I/O10L": "25",
  /** Physical pin 26: I/O9L; bidirectional. */
  "I/O9L": "26",
  /** Physical pin 27: I/O8L; bidirectional. */
  "I/O8L": "27",
  /** Physical pin 28: VCC; passive. */
  "VCC_28": "28",
  /** Physical pin 29: I/O7L; bidirectional. */
  "I/O7L": "29",
  /** Physical pin 30: I/O6L; bidirectional. */
  "I/O6L": "30",
  /** Physical pin 31: I/O5L; bidirectional. */
  "I/O5L": "31",
  /** Physical pin 32: I/O4L; bidirectional. */
  "I/O4L": "32",
  /** Physical pin 33: I/O3L; bidirectional. */
  "I/O3L": "33",
  /** Physical pin 34: I/O2L; bidirectional. */
  "I/O2L": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: I/O1L; bidirectional. */
  "I/O1L": "36",
  /** Physical pin 37: I/O0L; bidirectional. */
  "I/O0L": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: I/O0R; bidirectional. */
  "I/O0R": "39",
  /** Physical pin 40: I/O1R; bidirectional. */
  "I/O1R": "40",
  /** Physical pin 41: I/O2R; bidirectional. */
  "I/O2R": "41",
  /** Physical pin 42: I/O3R; bidirectional. */
  "I/O3R": "42",
  /** Physical pin 43: I/O4R; bidirectional. */
  "I/O4R": "43",
  /** Physical pin 44: I/O5R; bidirectional. */
  "I/O5R": "44",
  /** Physical pin 45: I/O6R; bidirectional. */
  "I/O6R": "45",
  /** Physical pin 46: VCC; passive. */
  "VCC_46": "46",
  /** Physical pin 47: I/O7R; bidirectional. */
  "I/O7R": "47",
  /** Physical pin 48: I/O8R; bidirectional. */
  "I/O8R": "48",
  /** Physical pin 49: I/O9R; bidirectional. */
  "I/O9R": "49",
  /** Physical pin 51: I/O10R; bidirectional. */
  "I/O10R": "51",
  /** Physical pin 52: I/O11R; bidirectional. */
  "I/O11R": "52",
  /** Physical pin 53: I/O12R; bidirectional. */
  "I/O12R": "53",
  /** Physical pin 54: I/O13R; bidirectional. */
  "I/O13R": "54",
  /** Physical pin 55: I/O14R; bidirectional. */
  "I/O14R": "55",
  /** Physical pin 56: I/O15R; bidirectional. */
  "I/O15R": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: OER; input. */
  "OER": "59",
  /** Physical pin 60: R/WR; input. */
  "R/WR": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: SEMR; input. */
  "SEMR": "62",
  /** Physical pin 63: CE1R; input. */
  "CE1R": "63",
  /** Physical pin 64: CE0R; input. */
  "CE0R": "64",
  /** Physical pin 65: UBR; input. */
  "UBR": "65",
  /** Physical pin 66: LBR; input. */
  "LBR": "66",
  /** Physical pin 70: A14R; input. */
  "A14R": "70",
  /** Physical pin 71: A13R; input. */
  "A13R": "71",
  /** Physical pin 72: A12R; input. */
  "A12R": "72",
  /** Physical pin 73: A11R; input. */
  "A11R": "73",
  /** Physical pin 74: A10R; input. */
  "A10R": "74",
  /** Physical pin 75: A9R; input. */
  "A9R": "75",
  /** Physical pin 76: A8R; input. */
  "A8R": "76",
  /** Physical pin 77: A7R; input. */
  "A7R": "77",
  /** Physical pin 78: A6R; input. */
  "A6R": "78",
  /** Physical pin 79: A5R; input. */
  "A5R": "79",
  /** Physical pin 80: A4R; input. */
  "A4R": "80",
  /** Physical pin 81: A3R; input. */
  "A3R": "81",
  /** Physical pin 82: A2R; input. */
  "A2R": "82",
  /** Physical pin 83: A1R; input. */
  "A1R": "83",
  /** Physical pin 84: A0R; input. */
  "A0R": "84",
  /** Physical pin 85: INTR; output. */
  "INTR": "85",
  /** Physical pin 86: BUSYR; bidirectional. */
  "BUSYR": "86",
  /** Physical pin 87: M/S; input. */
  "M/S": "87",
  /** Physical pin 88: GND; passive. */
  "GND_88": "88",
  /** Physical pin 89: BUSYL; bidirectional. */
  "BUSYL": "89",
  /** Physical pin 90: INTL; output. */
  "INTL": "90",
  /** Physical pin 92: A0L; input. */
  "A0L": "92",
  /** Physical pin 93: A1L; input. */
  "A1L": "93",
  /** Physical pin 94: A2L; input. */
  "A2L": "94",
  /** Physical pin 95: A3L; input. */
  "A3L": "95",
  /** Physical pin 96: A4L; input. */
  "A4L": "96",
  /** Physical pin 97: A5L; input. */
  "A5L": "97",
  /** Physical pin 98: A6L; input. */
  "A6L": "98",
  /** Physical pin 99: A7L; input. */
  "A7L": "99",
  /** Physical pin 100: A8L; input. */
  "A8L": "100",
}) {
  override schema = "Memory_RAM:IDT7027_TQ100";
  override referencePrefix = "U";
}

/**
 * IDT7132
 *
 * KiCad symbol: `Memory_RAM:IDT7132`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7132 extends Component.withPins({
  /** Physical pin 1: /CEL; input. */
  "/CEL": "1",
  /** Physical pin 2: R/WL; input. */
  "R/WL": "2",
  /** Physical pin 3: /BSYL; output. */
  "/BSYL": "3",
  /** Physical pin 4: A10L; input. */
  "A10L": "4",
  /** Physical pin 5: /OEL; input. */
  "/OEL": "5",
  /** Physical pin 6: A0L; input. */
  "A0L": "6",
  /** Physical pin 7: A1L; input. */
  "A1L": "7",
  /** Physical pin 8: A2L; input. */
  "A2L": "8",
  /** Physical pin 9: A3L; input. */
  "A3L": "9",
  /** Physical pin 10: A4L; input. */
  "A4L": "10",
  /** Physical pin 11: A5L; input. */
  "A5L": "11",
  /** Physical pin 12: A6L; input. */
  "A6L": "12",
  /** Physical pin 13: A7L; input. */
  "A7L": "13",
  /** Physical pin 14: A8L; input. */
  "A8L": "14",
  /** Physical pin 15: A9L; input. */
  "A9L": "15",
  /** Physical pin 16: I/O0L; input. */
  "I/O0L": "16",
  /** Physical pin 17: I/O1L; input. */
  "I/O1L": "17",
  /** Physical pin 18: I/O2L; input. */
  "I/O2L": "18",
  /** Physical pin 19: I/O3L; input. */
  "I/O3L": "19",
  /** Physical pin 20: I/O4L; input. */
  "I/O4L": "20",
  /** Physical pin 21: I/O5L; input. */
  "I/O5L": "21",
  /** Physical pin 22: I/O6L; input. */
  "I/O6L": "22",
  /** Physical pin 23: I/O7L; input. */
  "I/O7L": "23",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 25: I/O0R; input. */
  "I/O0R": "25",
  /** Physical pin 26: I/O1R; input. */
  "I/O1R": "26",
  /** Physical pin 27: I/O2R; input. */
  "I/O2R": "27",
  /** Physical pin 28: I/O3R; input. */
  "I/O3R": "28",
  /** Physical pin 29: I/O4R; input. */
  "I/O4R": "29",
  /** Physical pin 30: I/O5R; input. */
  "I/O5R": "30",
  /** Physical pin 31: I/O6R; input. */
  "I/O6R": "31",
  /** Physical pin 32: I/O7R; input. */
  "I/O7R": "32",
  /** Physical pin 33: A9R; input. */
  "A9R": "33",
  /** Physical pin 34: A8R; input. */
  "A8R": "34",
  /** Physical pin 35: A7R; input. */
  "A7R": "35",
  /** Physical pin 36: A6R; input. */
  "A6R": "36",
  /** Physical pin 37: A5R; input. */
  "A5R": "37",
  /** Physical pin 38: A4R; input. */
  "A4R": "38",
  /** Physical pin 39: A3R; input. */
  "A3R": "39",
  /** Physical pin 40: A2R; input. */
  "A2R": "40",
  /** Physical pin 41: A1R; input. */
  "A1R": "41",
  /** Physical pin 42: A0R; input. */
  "A0R": "42",
  /** Physical pin 43: /OER; input. */
  "/OER": "43",
  /** Physical pin 44: A10R; input. */
  "A10R": "44",
  /** Physical pin 45: /BSYR; output. */
  "/BSYR": "45",
  /** Physical pin 46: R/WR; input. */
  "R/WR": "46",
  /** Physical pin 47: /CER; input. */
  "/CER": "47",
  /** Physical pin 48: VCC; power_in. */
  "VCC": "48",
}) {
  override schema = "Memory_RAM:IDT7132";
  override referencePrefix = "U";
}

/**
 * 165 pins BGA 3.3V high-speed 9 Megabit synchronous SRAMs 512K x 18 (or  256K x 36)
 *
 * KiCad symbol: `Memory_RAM:IDT71V65903S`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT71V65903S extends Component.withPins({
  /** Physical pin A2: A7; input. */
  "A7": "A2",
  /** Physical pin A3: /CE1; input. */
  "/CE1": "A3",
  /** Physical pin A4: /BW2; input. */
  "/BW2": "A4",
  /** Physical pin A6: /CE2; input. */
  "/CE2": "A6",
  /** Physical pin A7: /CEN; input. */
  "/CEN": "A7",
  /** Physical pin A8: ADV/LD; input. */
  "ADV/LD": "A8",
  /** Physical pin A9: A18; input. */
  "A18": "A9",
  /** Physical pin A10: A8; input. */
  "A8": "A10",
  /** Physical pin A11: A10; input. */
  "A10": "A11",
  /** Physical pin B2: A6; input. */
  "A6": "B2",
  /** Physical pin B3: CE2; input. */
  "CE2": "B3",
  /** Physical pin B5: /BW1; input. */
  "/BW1": "B5",
  /** Physical pin B6: CLK; input. */
  "CLK": "B6",
  /** Physical pin B7: R/W; input. */
  "R/W": "B7",
  /** Physical pin B8: /OE; input. */
  "/OE": "B8",
  /** Physical pin B10: A9; input. */
  "A9": "B10",
  /** Physical pin C3: VDDQ; power_in. */
  "VDDQ_C3": "C3",
  /** Physical pin C4: VSS; passive. */
  "VSS_C4": "C4",
  /** Physical pin C5: VSS; passive. */
  "VSS_C5": "C5",
  /** Physical pin C6: VSS; passive. */
  "VSS_C6": "C6",
  /** Physical pin C7: VSS; passive. */
  "VSS_C7": "C7",
  /** Physical pin C8: VSS; passive. */
  "VSS_C8": "C8",
  /** Physical pin C9: VDDQ; passive. */
  "VDDQ_C9": "C9",
  /** Physical pin C11: IOP1; bidirectional. */
  "IOP1": "C11",
  /** Physical pin D2: IO8; bidirectional. */
  "IO8": "D2",
  /** Physical pin D3: VDDQ; passive. */
  "VDDQ_D3": "D3",
  /** Physical pin D4: VDD; passive. */
  "VDD_D4": "D4",
  /** Physical pin D5: VSS; passive. */
  "VSS_D5": "D5",
  /** Physical pin D6: VSS; passive. */
  "VSS_D6": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VDD; passive. */
  "VDD_D8": "D8",
  /** Physical pin D9: VDDQ; passive. */
  "VDDQ_D9": "D9",
  /** Physical pin D11: IO7; bidirectional. */
  "IO7": "D11",
  /** Physical pin E2: IO9; bidirectional. */
  "IO9": "E2",
  /** Physical pin E3: VDDQ; passive. */
  "VDDQ_E3": "E3",
  /** Physical pin E4: VDD; passive. */
  "VDD_E4": "E4",
  /** Physical pin E5: VSS; passive. */
  "VSS_E5": "E5",
  /** Physical pin E6: VSS; passive. */
  "VSS_E6": "E6",
  /** Physical pin E7: VSS; passive. */
  "VSS_E7": "E7",
  /** Physical pin E8: VDD; passive. */
  "VDD_E8": "E8",
  /** Physical pin E9: VDDQ; passive. */
  "VDDQ_E9": "E9",
  /** Physical pin E11: IO6; bidirectional. */
  "IO6": "E11",
  /** Physical pin F2: IO10; bidirectional. */
  "IO10": "F2",
  /** Physical pin F3: VDDQ; passive. */
  "VDDQ_F3": "F3",
  /** Physical pin F4: VDD; passive. */
  "VDD_F4": "F4",
  /** Physical pin F5: VSS; passive. */
  "VSS_F5": "F5",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VDD; passive. */
  "VDD_F8": "F8",
  /** Physical pin F9: VDDQ; passive. */
  "VDDQ_F9": "F9",
  /** Physical pin F11: IO5; bidirectional. */
  "IO5": "F11",
  /** Physical pin G2: IO11; bidirectional. */
  "IO11": "G2",
  /** Physical pin G3: VDDQ; passive. */
  "VDDQ_G3": "G3",
  /** Physical pin G4: VDD; passive. */
  "VDD_G4": "G4",
  /** Physical pin G5: VSS; passive. */
  "VSS_G5": "G5",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VDD; passive. */
  "VDD_G8": "G8",
  /** Physical pin G9: VDDQ; passive. */
  "VDDQ_G9": "G9",
  /** Physical pin G11: IO4; bidirectional. */
  "IO4": "G11",
  /** Physical pin H1: VSSx; passive. */
  "VSSx_H1": "H1",
  /** Physical pin H2: VDDx; passive. */
  "VDDx": "H2",
  /** Physical pin H4: VDD; passive. */
  "VDD_H4": "H4",
  /** Physical pin H5: VSS; passive. */
  "VSS_H5": "H5",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VDD; passive. */
  "VDD_H8": "H8",
  /** Physical pin H11: ZZ; input. */
  "ZZ": "H11",
  /** Physical pin J1: IO12; bidirectional. */
  "IO12": "J1",
  /** Physical pin J3: VDDQ; passive. */
  "VDDQ_J3": "J3",
  /** Physical pin J4: VDD; passive. */
  "VDD_J4": "J4",
  /** Physical pin J5: VSS; passive. */
  "VSS_J5": "J5",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VDD; passive. */
  "VDD_J8": "J8",
  /** Physical pin J9: VDDQ; passive. */
  "VDDQ_J9": "J9",
  /** Physical pin J10: IO3; bidirectional. */
  "IO3": "J10",
  /** Physical pin K1: IO13; bidirectional. */
  "IO13": "K1",
  /** Physical pin K3: VDDQ; passive. */
  "VDDQ_K3": "K3",
  /** Physical pin K4: VDD; passive. */
  "VDD_K4": "K4",
  /** Physical pin K5: VSS; passive. */
  "VSS_K5": "K5",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VDD; passive. */
  "VDD_K8": "K8",
  /** Physical pin K9: VDDQ; passive. */
  "VDDQ_K9": "K9",
  /** Physical pin K10: IO2; bidirectional. */
  "IO2": "K10",
  /** Physical pin L1: IO14; bidirectional. */
  "IO14": "L1",
  /** Physical pin L3: VDDQ; passive. */
  "VDDQ_L3": "L3",
  /** Physical pin L4: VDD; passive. */
  "VDD_L4": "L4",
  /** Physical pin L5: VSS; passive. */
  "VSS_L5": "L5",
  /** Physical pin L6: VSS; passive. */
  "VSS_L6": "L6",
  /** Physical pin L7: VSS; passive. */
  "VSS_L7": "L7",
  /** Physical pin L8: VDD; passive. */
  "VDD_L8": "L8",
  /** Physical pin L9: VDDQ; passive. */
  "VDDQ_L9": "L9",
  /** Physical pin L10: IO1; bidirectional. */
  "IO1": "L10",
  /** Physical pin M1: IO15; bidirectional. */
  "IO15": "M1",
  /** Physical pin M3: VDDQ; passive. */
  "VDDQ_M3": "M3",
  /** Physical pin M4: VDD; passive. */
  "VDD_M4": "M4",
  /** Physical pin M5: VSS; passive. */
  "VSS_M5": "M5",
  /** Physical pin M6: VSS; passive. */
  "VSS_M6": "M6",
  /** Physical pin M7: VSS; passive. */
  "VSS_M7": "M7",
  /** Physical pin M8: VDD; passive. */
  "VDD_M8": "M8",
  /** Physical pin M9: VDDQ; passive. */
  "VDDQ_M9": "M9",
  /** Physical pin M10: IO0; bidirectional. */
  "IO0": "M10",
  /** Physical pin N1: IOP2; bidirectional. */
  "IOP2": "N1",
  /** Physical pin N3: VDDQ; passive. */
  "VDDQ_N3": "N3",
  /** Physical pin N4: VSS; passive. */
  "VSS_N4": "N4",
  /** Physical pin N7: VSSx; passive. */
  "VSSx_N7": "N7",
  /** Physical pin N8: VSS; passive. */
  "VSS_N8": "N8",
  /** Physical pin N9: VDDQ; power_in. */
  "VDDQ_N9": "N9",
  /** Physical pin P3: A5; input. */
  "A5": "P3",
  /** Physical pin P4: A2; input. */
  "A2": "P4",
  /** Physical pin P6: A1; input. */
  "A1": "P6",
  /** Physical pin P8: A11; input. */
  "A11": "P8",
  /** Physical pin P9: A14; input. */
  "A14": "P9",
  /** Physical pin P10: A15; input. */
  "A15": "P10",
  /** Physical pin R1: /LBO; input. */
  "/LBO": "R1",
  /** Physical pin R3: A4; input. */
  "A4": "R3",
  /** Physical pin R4: A3; input. */
  "A3": "R4",
  /** Physical pin R6: A0; input. */
  "A0": "R6",
  /** Physical pin R8: A12; input. */
  "A12": "R8",
  /** Physical pin R9: A13; input. */
  "A13": "R9",
  /** Physical pin R10: A16; input. */
  "A16": "R10",
  /** Physical pin R11: A17; input. */
  "A17": "R11",
}) {
  override schema = "Memory_RAM:IDT71V65903S";
  override referencePrefix = "U";
}

/**
 * IDT7201
 *
 * KiCad symbol: `Memory_RAM:IDT7201`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7201 extends Component.withPins({
  /** Physical pin 1: WR; input. */
  "WR": "1",
  /** Physical pin 2: D8; input. */
  "D8": "2",
  /** Physical pin 3: D3; input. */
  "D3": "3",
  /** Physical pin 4: D2; input. */
  "D2": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D0; input. */
  "D0": "6",
  /** Physical pin 7: XI; input. */
  "XI": "7",
  /** Physical pin 8: FF; output. */
  "FF": "8",
  /** Physical pin 9: Q0; tri_state. */
  "Q0": "9",
  /** Physical pin 10: Q1; tri_state. */
  "Q1": "10",
  /** Physical pin 11: Q2; tri_state. */
  "Q2": "11",
  /** Physical pin 12: Q3; tri_state. */
  "Q3": "12",
  /** Physical pin 13: Q8; tri_state. */
  "Q8": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS": "14",
  /** Physical pin 15: RD; input. */
  "RD": "15",
  /** Physical pin 16: Q4; tri_state. */
  "Q4": "16",
  /** Physical pin 17: Q5; tri_state. */
  "Q5": "17",
  /** Physical pin 18: Q6; tri_state. */
  "Q6": "18",
  /** Physical pin 19: Q7; tri_state. */
  "Q7": "19",
  /** Physical pin 20: XO; input. */
  "XO": "20",
  /** Physical pin 21: EF; output. */
  "EF": "21",
  /** Physical pin 22: CLR; input. */
  "CLR": "22",
  /** Physical pin 23: FL; input. */
  "FL": "23",
  /** Physical pin 24: D7; input. */
  "D7": "24",
  /** Physical pin 25: D6; input. */
  "D6": "25",
  /** Physical pin 26: D5; input. */
  "D5": "26",
  /** Physical pin 27: D4; input. */
  "D4": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_RAM:IDT7201";
  override referencePrefix = "U";
}

/**
 * IDT7202
 *
 * KiCad symbol: `Memory_RAM:IDT7202`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7202 extends Component.withPins({
  /** Physical pin 1: WR; input. */
  "WR": "1",
  /** Physical pin 2: D8; input. */
  "D8": "2",
  /** Physical pin 3: D3; input. */
  "D3": "3",
  /** Physical pin 4: D2; input. */
  "D2": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D0; input. */
  "D0": "6",
  /** Physical pin 7: XI; input. */
  "XI": "7",
  /** Physical pin 8: FF; output. */
  "FF": "8",
  /** Physical pin 9: Q0; tri_state. */
  "Q0": "9",
  /** Physical pin 10: Q1; tri_state. */
  "Q1": "10",
  /** Physical pin 11: Q2; tri_state. */
  "Q2": "11",
  /** Physical pin 12: Q3; tri_state. */
  "Q3": "12",
  /** Physical pin 13: Q8; tri_state. */
  "Q8": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS": "14",
  /** Physical pin 15: RD; input. */
  "RD": "15",
  /** Physical pin 16: Q4; tri_state. */
  "Q4": "16",
  /** Physical pin 17: Q5; tri_state. */
  "Q5": "17",
  /** Physical pin 18: Q6; tri_state. */
  "Q6": "18",
  /** Physical pin 19: Q7; tri_state. */
  "Q7": "19",
  /** Physical pin 20: XO; input. */
  "XO": "20",
  /** Physical pin 21: EF; output. */
  "EF": "21",
  /** Physical pin 22: CLR; input. */
  "CLR": "22",
  /** Physical pin 23: FL; input. */
  "FL": "23",
  /** Physical pin 24: D7; input. */
  "D7": "24",
  /** Physical pin 25: D6; input. */
  "D6": "25",
  /** Physical pin 26: D5; input. */
  "D5": "26",
  /** Physical pin 27: D4; input. */
  "D4": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_RAM:IDT7202";
  override referencePrefix = "U";
}

/**
 * 4096x9 CMOS Asynchronous FIFO, DIP-28
 *
 * KiCad symbol: `Memory_RAM:IDT7204`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see http://www.idt.com/document/7203-7208-datasheet
 * Keywords: asynchronous fifo memory.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7204 extends Component.withPins({
  /** Physical pin 1: ~{W}; input. */
  "~{W}": "1",
  /** Physical pin 2: D8; input. */
  "D8": "2",
  /** Physical pin 3: D3; input. */
  "D3": "3",
  /** Physical pin 4: D2; input. */
  "D2": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D0; input. */
  "D0": "6",
  /** Physical pin 7: ~{XI}; input. */
  "~{XI}": "7",
  /** Physical pin 8: ~{FF}; output. */
  "~{FF}": "8",
  /** Physical pin 9: Q0; output. */
  "Q0": "9",
  /** Physical pin 10: Q1; output. */
  "Q1": "10",
  /** Physical pin 11: Q2; output. */
  "Q2": "11",
  /** Physical pin 12: Q3; output. */
  "Q3": "12",
  /** Physical pin 13: Q8; output. */
  "Q8": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: ~{R}; input. */
  "~{R}": "15",
  /** Physical pin 16: Q4; output. */
  "Q4": "16",
  /** Physical pin 17: Q5; output. */
  "Q5": "17",
  /** Physical pin 18: Q6; output. */
  "Q6": "18",
  /** Physical pin 19: Q7; output. */
  "Q7": "19",
  /** Physical pin 20: ~{HF}/~{XO}; output. */
  "~{HF}/~{XO}": "20",
  /** Physical pin 21: ~{EF}; output. */
  "~{EF}": "21",
  /** Physical pin 22: ~{RS}; input. */
  "~{RS}": "22",
  /** Physical pin 23: ~{FL}/~{RT}; input. */
  "~{FL}/~{RT}": "23",
  /** Physical pin 24: D7; input. */
  "D7": "24",
  /** Physical pin 25: D6; input. */
  "D6": "25",
  /** Physical pin 26: D5; input. */
  "D5": "26",
  /** Physical pin 27: D4; input. */
  "D4": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_RAM:IDT7204";
  override referencePrefix = "U";
}

/**
 * 2048x9 CMOS Asynchronous FIFO, DIP-28
 *
 * KiCad symbol: `Memory_RAM:IDT7203`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see http://www.idt.com/document/7203-7208-datasheet
 * Keywords: asynchronous fifo memory.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7203 extends Component.withPins({
  /** Physical pin 1: ~{W}; input. */
  "~{W}": "1",
  /** Physical pin 2: D8; input. */
  "D8": "2",
  /** Physical pin 3: D3; input. */
  "D3": "3",
  /** Physical pin 4: D2; input. */
  "D2": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D0; input. */
  "D0": "6",
  /** Physical pin 7: ~{XI}; input. */
  "~{XI}": "7",
  /** Physical pin 8: ~{FF}; output. */
  "~{FF}": "8",
  /** Physical pin 9: Q0; output. */
  "Q0": "9",
  /** Physical pin 10: Q1; output. */
  "Q1": "10",
  /** Physical pin 11: Q2; output. */
  "Q2": "11",
  /** Physical pin 12: Q3; output. */
  "Q3": "12",
  /** Physical pin 13: Q8; output. */
  "Q8": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: ~{R}; input. */
  "~{R}": "15",
  /** Physical pin 16: Q4; output. */
  "Q4": "16",
  /** Physical pin 17: Q5; output. */
  "Q5": "17",
  /** Physical pin 18: Q6; output. */
  "Q6": "18",
  /** Physical pin 19: Q7; output. */
  "Q7": "19",
  /** Physical pin 20: ~{HF}/~{XO}; output. */
  "~{HF}/~{XO}": "20",
  /** Physical pin 21: ~{EF}; output. */
  "~{EF}": "21",
  /** Physical pin 22: ~{RS}; input. */
  "~{RS}": "22",
  /** Physical pin 23: ~{FL}/~{RT}; input. */
  "~{FL}/~{RT}": "23",
  /** Physical pin 24: D7; input. */
  "D7": "24",
  /** Physical pin 25: D6; input. */
  "D6": "25",
  /** Physical pin 26: D5; input. */
  "D5": "26",
  /** Physical pin 27: D4; input. */
  "D4": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_RAM:IDT7203";
  override referencePrefix = "U";
}

/**
 * 8192x9 CMOS Asynchronous FIFO, DIP-28
 *
 * KiCad symbol: `Memory_RAM:IDT7205`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see http://www.idt.com/document/7203-7208-datasheet
 * Keywords: asynchronous fifo memory.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7205 extends Component.withPins({
  /** Physical pin 1: ~{W}; input. */
  "~{W}": "1",
  /** Physical pin 2: D8; input. */
  "D8": "2",
  /** Physical pin 3: D3; input. */
  "D3": "3",
  /** Physical pin 4: D2; input. */
  "D2": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D0; input. */
  "D0": "6",
  /** Physical pin 7: ~{XI}; input. */
  "~{XI}": "7",
  /** Physical pin 8: ~{FF}; output. */
  "~{FF}": "8",
  /** Physical pin 9: Q0; output. */
  "Q0": "9",
  /** Physical pin 10: Q1; output. */
  "Q1": "10",
  /** Physical pin 11: Q2; output. */
  "Q2": "11",
  /** Physical pin 12: Q3; output. */
  "Q3": "12",
  /** Physical pin 13: Q8; output. */
  "Q8": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: ~{R}; input. */
  "~{R}": "15",
  /** Physical pin 16: Q4; output. */
  "Q4": "16",
  /** Physical pin 17: Q5; output. */
  "Q5": "17",
  /** Physical pin 18: Q6; output. */
  "Q6": "18",
  /** Physical pin 19: Q7; output. */
  "Q7": "19",
  /** Physical pin 20: ~{HF}/~{XO}; output. */
  "~{HF}/~{XO}": "20",
  /** Physical pin 21: ~{EF}; output. */
  "~{EF}": "21",
  /** Physical pin 22: ~{RS}; input. */
  "~{RS}": "22",
  /** Physical pin 23: ~{FL}/~{RT}; input. */
  "~{FL}/~{RT}": "23",
  /** Physical pin 24: D7; input. */
  "D7": "24",
  /** Physical pin 25: D6; input. */
  "D6": "25",
  /** Physical pin 26: D5; input. */
  "D5": "26",
  /** Physical pin 27: D4; input. */
  "D4": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_RAM:IDT7205";
  override referencePrefix = "U";
}

/**
 * 16384x9 CMOS Asynchronous FIFO, DIP-28
 *
 * KiCad symbol: `Memory_RAM:IDT7206`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see http://www.idt.com/document/7203-7208-datasheet
 * Keywords: asynchronous fifo memory.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7206 extends Component.withPins({
  /** Physical pin 1: ~{W}; input. */
  "~{W}": "1",
  /** Physical pin 2: D8; input. */
  "D8": "2",
  /** Physical pin 3: D3; input. */
  "D3": "3",
  /** Physical pin 4: D2; input. */
  "D2": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D0; input. */
  "D0": "6",
  /** Physical pin 7: ~{XI}; input. */
  "~{XI}": "7",
  /** Physical pin 8: ~{FF}; output. */
  "~{FF}": "8",
  /** Physical pin 9: Q0; output. */
  "Q0": "9",
  /** Physical pin 10: Q1; output. */
  "Q1": "10",
  /** Physical pin 11: Q2; output. */
  "Q2": "11",
  /** Physical pin 12: Q3; output. */
  "Q3": "12",
  /** Physical pin 13: Q8; output. */
  "Q8": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: ~{R}; input. */
  "~{R}": "15",
  /** Physical pin 16: Q4; output. */
  "Q4": "16",
  /** Physical pin 17: Q5; output. */
  "Q5": "17",
  /** Physical pin 18: Q6; output. */
  "Q6": "18",
  /** Physical pin 19: Q7; output. */
  "Q7": "19",
  /** Physical pin 20: ~{HF}/~{XO}; output. */
  "~{HF}/~{XO}": "20",
  /** Physical pin 21: ~{EF}; output. */
  "~{EF}": "21",
  /** Physical pin 22: ~{RS}; input. */
  "~{RS}": "22",
  /** Physical pin 23: ~{FL}/~{RT}; input. */
  "~{FL}/~{RT}": "23",
  /** Physical pin 24: D7; input. */
  "D7": "24",
  /** Physical pin 25: D6; input. */
  "D6": "25",
  /** Physical pin 26: D5; input. */
  "D5": "26",
  /** Physical pin 27: D4; input. */
  "D4": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_RAM:IDT7206";
  override referencePrefix = "U";
}

/**
 * 32768x9 CMOS Asynchronous FIFO, DIP-28
 *
 * KiCad symbol: `Memory_RAM:IDT7207`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see http://www.idt.com/document/7203-7208-datasheet
 * Keywords: asynchronous fifo memory.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7207 extends Component.withPins({
  /** Physical pin 1: ~{W}; input. */
  "~{W}": "1",
  /** Physical pin 2: D8; input. */
  "D8": "2",
  /** Physical pin 3: D3; input. */
  "D3": "3",
  /** Physical pin 4: D2; input. */
  "D2": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D0; input. */
  "D0": "6",
  /** Physical pin 7: ~{XI}; input. */
  "~{XI}": "7",
  /** Physical pin 8: ~{FF}; output. */
  "~{FF}": "8",
  /** Physical pin 9: Q0; output. */
  "Q0": "9",
  /** Physical pin 10: Q1; output. */
  "Q1": "10",
  /** Physical pin 11: Q2; output. */
  "Q2": "11",
  /** Physical pin 12: Q3; output. */
  "Q3": "12",
  /** Physical pin 13: Q8; output. */
  "Q8": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: ~{R}; input. */
  "~{R}": "15",
  /** Physical pin 16: Q4; output. */
  "Q4": "16",
  /** Physical pin 17: Q5; output. */
  "Q5": "17",
  /** Physical pin 18: Q6; output. */
  "Q6": "18",
  /** Physical pin 19: Q7; output. */
  "Q7": "19",
  /** Physical pin 20: ~{HF}/~{XO}; output. */
  "~{HF}/~{XO}": "20",
  /** Physical pin 21: ~{EF}; output. */
  "~{EF}": "21",
  /** Physical pin 22: ~{RS}; input. */
  "~{RS}": "22",
  /** Physical pin 23: ~{FL}/~{RT}; input. */
  "~{FL}/~{RT}": "23",
  /** Physical pin 24: D7; input. */
  "D7": "24",
  /** Physical pin 25: D6; input. */
  "D6": "25",
  /** Physical pin 26: D5; input. */
  "D5": "26",
  /** Physical pin 27: D4; input. */
  "D4": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_RAM:IDT7207";
  override referencePrefix = "U";
}

/**
 * 65536x9 CMOS Asynchronous FIFO, DIP-28
 *
 * KiCad symbol: `Memory_RAM:IDT7208`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see http://www.idt.com/document/7203-7208-datasheet
 * Keywords: asynchronous fifo memory.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IDT7208 extends Component.withPins({
  /** Physical pin 1: ~{W}; input. */
  "~{W}": "1",
  /** Physical pin 2: D8; input. */
  "D8": "2",
  /** Physical pin 3: D3; input. */
  "D3": "3",
  /** Physical pin 4: D2; input. */
  "D2": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D0; input. */
  "D0": "6",
  /** Physical pin 7: ~{XI}; input. */
  "~{XI}": "7",
  /** Physical pin 8: ~{FF}; output. */
  "~{FF}": "8",
  /** Physical pin 9: Q0; output. */
  "Q0": "9",
  /** Physical pin 10: Q1; output. */
  "Q1": "10",
  /** Physical pin 11: Q2; output. */
  "Q2": "11",
  /** Physical pin 12: Q3; output. */
  "Q3": "12",
  /** Physical pin 13: Q8; output. */
  "Q8": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: ~{R}; input. */
  "~{R}": "15",
  /** Physical pin 16: Q4; output. */
  "Q4": "16",
  /** Physical pin 17: Q5; output. */
  "Q5": "17",
  /** Physical pin 18: Q6; output. */
  "Q6": "18",
  /** Physical pin 19: Q7; output. */
  "Q7": "19",
  /** Physical pin 20: ~{HF}/~{XO}; output. */
  "~{HF}/~{XO}": "20",
  /** Physical pin 21: ~{EF}; output. */
  "~{EF}": "21",
  /** Physical pin 22: ~{RS}; input. */
  "~{RS}": "22",
  /** Physical pin 23: ~{FL}/~{RT}; input. */
  "~{FL}/~{RT}": "23",
  /** Physical pin 24: D7; input. */
  "D7": "24",
  /** Physical pin 25: D6; input. */
  "D6": "25",
  /** Physical pin 26: D5; input. */
  "D5": "26",
  /** Physical pin 27: D4; input. */
  "D4": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_RAM:IDT7208";
  override referencePrefix = "U";
}

/**
 * 64Mb Synchronous DRAM, 1 Mb x 16 b x 4 Banks, Cu leadframe plated with matte Sn, TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:IS42S16400J-xC`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see http://www.issi.com/WW/pdf/42-45S16400J.pdf
 * Keywords: DRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS42S16400J_xC extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: GNDQ; power_in. */
  "GNDQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: GNDQ; passive. */
  "GNDQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: LDQM; input. */
  "LDQM": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10; input. */
  "A10": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: UDQM; input. */
  "UDQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: GNDQ; passive. */
  "GNDQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: GNDQ; passive. */
  "GNDQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
}) {
  override schema = "Memory_RAM:IS42S16400J-xC";
  override referencePrefix = "U";
}

/**
 * 64Mb Synchronous DRAM, 1 Mb x 16 b x 4 Banks, Alloy42 leadframe plated with matte Sn, TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:IS42S16400J-xT`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see http://www.issi.com/WW/pdf/42-45S16400J.pdf
 * Keywords: DRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS42S16400J_xT extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: GNDQ; power_in. */
  "GNDQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: GNDQ; passive. */
  "GNDQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: LDQM; input. */
  "LDQM": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10; input. */
  "A10": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: UDQM; input. */
  "UDQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: GNDQ; passive. */
  "GNDQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: GNDQ; passive. */
  "GNDQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
}) {
  override schema = "Memory_RAM:IS42S16400J-xT";
  override referencePrefix = "U";
}

/**
 * 256Mx32 bit Low Power Double Data Rate 4 (LPDDR4) SDRAM, 1600 MHz, Industrial, BGA-200
 *
 * KiCad symbol: `Memory_RAM:IS43LQ32256A-062BLI`. Reference prefix: `U`.
 * Footprint filters: BGA*10x14.5mm*Layout12x22*P0.8x0.65mm*.
 * @see http://www.issi.com/WW/pdf/43-46LQ32256A-AL.pdf
 * Keywords: DRAM MEMORY.
 * Default footprint: Package_BGA:BGA-200_10x14.5mm_Layout12x22_P0.8x0.65mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS43LQ32256A_062BLI extends Component.withPins({
  /** Physical pin A1: DNU; no_connect. */
  "DNU_A1": "A1",
  /** Physical pin A2: DNU; no_connect. */
  "DNU_A2": "A2",
  /** Physical pin A3: VSS; passive. */
  "VSS_A3": "A3",
  /** Physical pin A4: VDD2; power_in. */
  "VDD2_A4": "A4",
  /** Physical pin A9: VDD2; passive. */
  "VDD2_A9": "A9",
  /** Physical pin A10: VSS; power_in. */
  "VSS_A10": "A10",
  /** Physical pin A11: DNU; no_connect. */
  "DNU_A11": "A11",
  /** Physical pin A12: DNU; no_connect. */
  "DNU_A12": "A12",
  /** Physical pin B1: DNU; no_connect. */
  "DNU_B1": "B1",
  /** Physical pin B2: DQ0_A; bidirectional. */
  "DQ0_A": "B2",
  /** Physical pin B3: VDDQ; passive. */
  "VDDQ_B3": "B3",
  /** Physical pin B4: DQ7_A; bidirectional. */
  "DQ7_A": "B4",
  /** Physical pin B5: VDDQ; passive. */
  "VDDQ_B5": "B5",
  /** Physical pin B8: VDDQ; passive. */
  "VDDQ_B8": "B8",
  /** Physical pin B9: DQ15_A; bidirectional. */
  "DQ15_A": "B9",
  /** Physical pin B10: VDDQ; power_in. */
  "VDDQ_B10": "B10",
  /** Physical pin B11: DQ8_A; bidirectional. */
  "DQ8_A": "B11",
  /** Physical pin B12: DNU; no_connect. */
  "DNU_B12": "B12",
  /** Physical pin C1: VSS; passive. */
  "VSS_C1": "C1",
  /** Physical pin C2: DQ1_A; bidirectional. */
  "DQ1_A": "C2",
  /** Physical pin C3: DMI0_A; bidirectional. */
  "DMI0_A": "C3",
  /** Physical pin C4: DQ6_A; bidirectional. */
  "DQ6_A": "C4",
  /** Physical pin C5: VSS; passive. */
  "VSS_C5": "C5",
  /** Physical pin C8: VSS; passive. */
  "VSS_C8": "C8",
  /** Physical pin C9: DQ14_A; bidirectional. */
  "DQ14_A": "C9",
  /** Physical pin C10: DMI1_A; bidirectional. */
  "DMI1_A": "C10",
  /** Physical pin C11: DQ9_A; bidirectional. */
  "DQ9_A": "C11",
  /** Physical pin C12: VSS; passive. */
  "VSS_C12": "C12",
  /** Physical pin D1: VDDQ; passive. */
  "VDDQ_D1": "D1",
  /** Physical pin D2: VSS; passive. */
  "VSS_D2": "D2",
  /** Physical pin D3: DQS0_T_A; bidirectional. */
  "DQS0_T_A": "D3",
  /** Physical pin D4: VSS; passive. */
  "VSS_D4": "D4",
  /** Physical pin D5: VDDQ; passive. */
  "VDDQ_D5": "D5",
  /** Physical pin D8: VDDQ; passive. */
  "VDDQ_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: DQS1_T_A; bidirectional. */
  "DQS1_T_A": "D10",
  /** Physical pin D11: VSS; passive. */
  "VSS_D11": "D11",
  /** Physical pin D12: VDDQ; passive. */
  "VDDQ_D12": "D12",
  /** Physical pin E1: VSS; passive. */
  "VSS_E1": "E1",
  /** Physical pin E2: DQ2_A; bidirectional. */
  "DQ2_A": "E2",
  /** Physical pin E3: DQS0_C_A; bidirectional. */
  "DQS0_C_A": "E3",
  /** Physical pin E4: DQ5_A; bidirectional. */
  "DQ5_A": "E4",
  /** Physical pin E5: VSS; passive. */
  "VSS_E5": "E5",
  /** Physical pin E8: VSS; passive. */
  "VSS_E8": "E8",
  /** Physical pin E9: DQ13_A; bidirectional. */
  "DQ13_A": "E9",
  /** Physical pin E10: DQS1_C_A; bidirectional. */
  "DQS1_C_A": "E10",
  /** Physical pin E11: DQ10_A; bidirectional. */
  "DQ10_A": "E11",
  /** Physical pin E12: VSS; passive. */
  "VSS_E12": "E12",
  /** Physical pin F1: VDD1; power_in. */
  "VDD1_F1": "F1",
  /** Physical pin F2: DQ3_A; bidirectional. */
  "DQ3_A": "F2",
  /** Physical pin F3: VDDQ; passive. */
  "VDDQ_F3": "F3",
  /** Physical pin F4: DQ4_A; bidirectional. */
  "DQ4_A": "F4",
  /** Physical pin F5: VDD2; passive. */
  "VDD2_F5": "F5",
  /** Physical pin F8: VDD2; passive. */
  "VDD2_F8": "F8",
  /** Physical pin F9: DQ12_A; bidirectional. */
  "DQ12_A": "F9",
  /** Physical pin F10: VDDQ; passive. */
  "VDDQ_F10": "F10",
  /** Physical pin F11: DQ11_A; bidirectional. */
  "DQ11_A": "F11",
  /** Physical pin F12: VDD1; passive. */
  "VDD1_F12": "F12",
  /** Physical pin G1: VSS; passive. */
  "VSS_G1": "G1",
  /** Physical pin G2: ODT_CA_A; input. */
  "ODT_CA_A": "G2",
  /** Physical pin G3: VSS; passive. */
  "VSS_G3": "G3",
  /** Physical pin G4: VDD1; passive. */
  "VDD1_G4": "G4",
  /** Physical pin G5: VSS; passive. */
  "VSS_G5": "G5",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VDD1; passive. */
  "VDD1_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin H1: VDD2; passive. */
  "VDD2_H1": "H1",
  /** Physical pin H2: CA0_A; input. */
  "CA0_A": "H2",
  /** Physical pin H3: NC; no_connect. */
  "NC_H3": "H3",
  /** Physical pin H4: CS0_A; input. */
  "CS0_A": "H4",
  /** Physical pin H5: VDD2; passive. */
  "VDD2_H5": "H5",
  /** Physical pin H8: VDD2; passive. */
  "VDD2_H8": "H8",
  /** Physical pin H9: CA2_A; input. */
  "CA2_A": "H9",
  /** Physical pin H10: CA3_A; input. */
  "CA3_A": "H10",
  /** Physical pin H11: CA4_A; input. */
  "CA4_A": "H11",
  /** Physical pin H12: VDD2; passive. */
  "VDD2_H12": "H12",
  /** Physical pin J1: VSS; passive. */
  "VSS_J1": "J1",
  /** Physical pin J2: CA1_A; input. */
  "CA1_A": "J2",
  /** Physical pin J3: VSS; passive. */
  "VSS_J3": "J3",
  /** Physical pin J4: CKE0_A; input. */
  "CKE0_A": "J4",
  /** Physical pin J5: NC; no_connect. */
  "NC_J5": "J5",
  /** Physical pin J8: CK_T_A; input. */
  "CK_T_A": "J8",
  /** Physical pin J9: CK_C_A; input. */
  "CK_C_A": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J11: CA5_A; input. */
  "CA5_A": "J11",
  /** Physical pin J12: VSS; passive. */
  "VSS_J12": "J12",
  /** Physical pin K1: VDD2; passive. */
  "VDD2_K1": "K1",
  /** Physical pin K2: VSS; passive. */
  "VSS_K2": "K2",
  /** Physical pin K3: VDD2; passive. */
  "VDD2_K3": "K3",
  /** Physical pin K4: VSS; passive. */
  "VSS_K4": "K4",
  /** Physical pin K5: NC; no_connect. */
  "NC_K5": "K5",
  /** Physical pin K8: NC; no_connect. */
  "NC_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VDD2; passive. */
  "VDD2_K10": "K10",
  /** Physical pin K11: VSS; passive. */
  "VSS_K11": "K11",
  /** Physical pin K12: VDD2; passive. */
  "VDD2_K12": "K12",
  /** Physical pin A5: ZQ0; input. */
  "ZQ0": "A5",
  /** Physical pin A8: NC; no_connect. */
  "NC_A8": "A8",
  /** Physical pin AA1: DNU; no_connect. */
  "DNU_AA1": "AA1",
  /** Physical pin AA2: DQ0_B; bidirectional. */
  "DQ0_B": "AA2",
  /** Physical pin AA3: VDDQ; passive. */
  "VDDQ_AA3": "AA3",
  /** Physical pin AA4: DQ7_B; bidirectional. */
  "DQ7_B": "AA4",
  /** Physical pin AA5: VDDQ; passive. */
  "VDDQ_AA5": "AA5",
  /** Physical pin AA8: VDDQ; passive. */
  "VDDQ_AA8": "AA8",
  /** Physical pin AA9: DQ15_B; bidirectional. */
  "DQ15_B": "AA9",
  /** Physical pin AA10: VDDQ; power_in. */
  "VDDQ_AA10": "AA10",
  /** Physical pin AA11: DQ8_B; bidirectional. */
  "DQ8_B": "AA11",
  /** Physical pin AA12: DNU; no_connect. */
  "DNU_AA12": "AA12",
  /** Physical pin AB1: DNU; no_connect. */
  "DNU_AB1": "AB1",
  /** Physical pin AB2: DNU; no_connect. */
  "DNU_AB2": "AB2",
  /** Physical pin AB3: VSS; passive. */
  "VSS_AB3": "AB3",
  /** Physical pin AB4: VDD2; power_in. */
  "VDD2_AB4": "AB4",
  /** Physical pin AB5: VSS; passive. */
  "VSS_AB5": "AB5",
  /** Physical pin AB8: VSS; passive. */
  "VSS_AB8": "AB8",
  /** Physical pin AB9: VDD2; passive. */
  "VDD2_AB9": "AB9",
  /** Physical pin AB10: VSS; power_in. */
  "VSS_AB10": "AB10",
  /** Physical pin AB11: DNU; no_connect. */
  "DNU_AB11": "AB11",
  /** Physical pin AB12: DNU; no_connect. */
  "DNU_AB12": "AB12",
  /** Physical pin G11: NC; no_connect. */
  "NC_G11": "G11",
  /** Physical pin N1: VDD2; passive. */
  "VDD2_N1": "N1",
  /** Physical pin N2: VSS; passive. */
  "VSS_N2": "N2",
  /** Physical pin N3: VDD2; passive. */
  "VDD2_N3": "N3",
  /** Physical pin N4: VSS; passive. */
  "VSS_N4": "N4",
  /** Physical pin N5: NC; no_connect. */
  "NC_N5": "N5",
  /** Physical pin N8: NC; no_connect. */
  "NC_N8": "N8",
  /** Physical pin N9: VSS; passive. */
  "VSS_N9": "N9",
  /** Physical pin N10: VDD2; passive. */
  "VDD2_N10": "N10",
  /** Physical pin N11: VSS; passive. */
  "VSS_N11": "N11",
  /** Physical pin N12: VDD2; passive. */
  "VDD2_N12": "N12",
  /** Physical pin P1: VSS; passive. */
  "VSS_P1": "P1",
  /** Physical pin P2: CA1_B; input. */
  "CA1_B": "P2",
  /** Physical pin P3: VSS; passive. */
  "VSS_P3": "P3",
  /** Physical pin P4: CKE0_B; input. */
  "CKE0_B": "P4",
  /** Physical pin P5: NC; no_connect. */
  "NC_P5": "P5",
  /** Physical pin P8: CK_T_B; input. */
  "CK_T_B": "P8",
  /** Physical pin P9: CK_C_B; input. */
  "CK_C_B": "P9",
  /** Physical pin P10: VSS; passive. */
  "VSS_P10": "P10",
  /** Physical pin P11: CA5_B; input. */
  "CA5_B": "P11",
  /** Physical pin P12: VSS; passive. */
  "VSS_P12": "P12",
  /** Physical pin R1: VDD2; passive. */
  "VDD2_R1": "R1",
  /** Physical pin R2: CA0_B; input. */
  "CA0_B": "R2",
  /** Physical pin R3: NC; no_connect. */
  "NC_R3": "R3",
  /** Physical pin R4: CS0_B; input. */
  "CS0_B": "R4",
  /** Physical pin R5: VDD2; passive. */
  "VDD2_R5": "R5",
  /** Physical pin R8: VDD2; passive. */
  "VDD2_R8": "R8",
  /** Physical pin R9: CA2_B; input. */
  "CA2_B": "R9",
  /** Physical pin R10: CA3_B; input. */
  "CA3_B": "R10",
  /** Physical pin R11: CA4_B; input. */
  "CA4_B": "R11",
  /** Physical pin R12: VDD2; passive. */
  "VDD2_R12": "R12",
  /** Physical pin T1: VSS; passive. */
  "VSS_T1": "T1",
  /** Physical pin T2: ODT_CA_B; input. */
  "ODT_CA_B": "T2",
  /** Physical pin T3: VSS; passive. */
  "VSS_T3": "T3",
  /** Physical pin T4: VDD1; power_in. */
  "VDD1_T4": "T4",
  /** Physical pin T5: VSS; passive. */
  "VSS_T5": "T5",
  /** Physical pin T8: VSS; passive. */
  "VSS_T8": "T8",
  /** Physical pin T9: VDD1; passive. */
  "VDD1_T9": "T9",
  /** Physical pin T10: VSS; passive. */
  "VSS_T10": "T10",
  /** Physical pin T11: RESET_N; input. */
  "RESET_N": "T11",
  /** Physical pin T12: VSS; passive. */
  "VSS_T12": "T12",
  /** Physical pin U1: VDD1; passive. */
  "VDD1_U1": "U1",
  /** Physical pin U2: DQ3_B; bidirectional. */
  "DQ3_B": "U2",
  /** Physical pin U3: VDDQ; passive. */
  "VDDQ_U3": "U3",
  /** Physical pin U4: DQ4_B; bidirectional. */
  "DQ4_B": "U4",
  /** Physical pin U5: VDD2; passive. */
  "VDD2_U5": "U5",
  /** Physical pin U8: VDD2; passive. */
  "VDD2_U8": "U8",
  /** Physical pin U9: DQ12_B; bidirectional. */
  "DQ12_B": "U9",
  /** Physical pin U10: VDDQ; passive. */
  "VDDQ_U10": "U10",
  /** Physical pin U11: DQ11_B; bidirectional. */
  "DQ11_B": "U11",
  /** Physical pin U12: VDD1; passive. */
  "VDD1_U12": "U12",
  /** Physical pin V1: VSS; passive. */
  "VSS_V1": "V1",
  /** Physical pin V2: DQ2_B; bidirectional. */
  "DQ2_B": "V2",
  /** Physical pin V3: DQS0_C_B; bidirectional. */
  "DQS0_C_B": "V3",
  /** Physical pin V4: DQ5_B; bidirectional. */
  "DQ5_B": "V4",
  /** Physical pin V5: VSS; passive. */
  "VSS_V5": "V5",
  /** Physical pin V8: VSS; passive. */
  "VSS_V8": "V8",
  /** Physical pin V9: DQ13_B; bidirectional. */
  "DQ13_B": "V9",
  /** Physical pin V10: DQS1_C_B; bidirectional. */
  "DQS1_C_B": "V10",
  /** Physical pin V11: DQ10_B; bidirectional. */
  "DQ10_B": "V11",
  /** Physical pin V12: VSS; passive. */
  "VSS_V12": "V12",
  /** Physical pin W1: VDDQ; passive. */
  "VDDQ_W1": "W1",
  /** Physical pin W2: VSS; passive. */
  "VSS_W2": "W2",
  /** Physical pin W3: DQS0_T_B; bidirectional. */
  "DQS0_T_B": "W3",
  /** Physical pin W4: VSS; passive. */
  "VSS_W4": "W4",
  /** Physical pin W5: VDDQ; passive. */
  "VDDQ_W5": "W5",
  /** Physical pin W8: VDDQ; passive. */
  "VDDQ_W8": "W8",
  /** Physical pin W9: VSS; passive. */
  "VSS_W9": "W9",
  /** Physical pin W10: DQS1_T_B; bidirectional. */
  "DQS1_T_B": "W10",
  /** Physical pin W11: VSS; passive. */
  "VSS_W11": "W11",
  /** Physical pin W12: VDDQ; passive. */
  "VDDQ_W12": "W12",
  /** Physical pin Y1: VSS; passive. */
  "VSS_Y1": "Y1",
  /** Physical pin Y2: DQ1_B; bidirectional. */
  "DQ1_B": "Y2",
  /** Physical pin Y3: DMI0_B; bidirectional. */
  "DMI0_B": "Y3",
  /** Physical pin Y4: DQ6_B; bidirectional. */
  "DQ6_B": "Y4",
  /** Physical pin Y5: VSS; passive. */
  "VSS_Y5": "Y5",
  /** Physical pin Y8: VSS; passive. */
  "VSS_Y8": "Y8",
  /** Physical pin Y9: DQ14_B; bidirectional. */
  "DQ14_B": "Y9",
  /** Physical pin Y10: DMI1_B; bidirectional. */
  "DMI1_B": "Y10",
  /** Physical pin Y11: DQ9_B; bidirectional. */
  "DQ9_B": "Y11",
  /** Physical pin Y12: VSS; passive. */
  "VSS_Y12": "Y12",
}) {
  override schema = "Memory_RAM:IS43LQ32256A-062BLI";
  override referencePrefix = "U";
}

/**
 * 256Mx32 bit Low Power Double Data Rate 4X (LPDDR4X) SDRAM, 1600 MHz, Industrial, BGA-200
 *
 * KiCad symbol: `Memory_RAM:IS43LQ32256AL-062BLI`. Reference prefix: `U`.
 * Footprint filters: BGA*10x14.5mm*Layout12x22*P0.8x0.65mm*.
 * @see http://www.issi.com/WW/pdf/43-46LQ32256AL-AL.pdf
 * Keywords: DRAM MEMORY.
 * Default footprint: Package_BGA:BGA-200_10x14.5mm_Layout12x22_P0.8x0.65mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS43LQ32256AL_062BLI extends Component.withPins({
  /** Physical pin A1: DNU; no_connect. */
  "DNU_A1": "A1",
  /** Physical pin A2: DNU; no_connect. */
  "DNU_A2": "A2",
  /** Physical pin A3: VSS; passive. */
  "VSS_A3": "A3",
  /** Physical pin A4: VDD2; power_in. */
  "VDD2_A4": "A4",
  /** Physical pin A9: VDD2; passive. */
  "VDD2_A9": "A9",
  /** Physical pin A10: VSS; power_in. */
  "VSS_A10": "A10",
  /** Physical pin A11: DNU; no_connect. */
  "DNU_A11": "A11",
  /** Physical pin A12: DNU; no_connect. */
  "DNU_A12": "A12",
  /** Physical pin B1: DNU; no_connect. */
  "DNU_B1": "B1",
  /** Physical pin B2: DQ0_A; bidirectional. */
  "DQ0_A": "B2",
  /** Physical pin B3: VDDQ; passive. */
  "VDDQ_B3": "B3",
  /** Physical pin B4: DQ7_A; bidirectional. */
  "DQ7_A": "B4",
  /** Physical pin B5: VDDQ; passive. */
  "VDDQ_B5": "B5",
  /** Physical pin B8: VDDQ; passive. */
  "VDDQ_B8": "B8",
  /** Physical pin B9: DQ15_A; bidirectional. */
  "DQ15_A": "B9",
  /** Physical pin B10: VDDQ; power_in. */
  "VDDQ_B10": "B10",
  /** Physical pin B11: DQ8_A; bidirectional. */
  "DQ8_A": "B11",
  /** Physical pin B12: DNU; no_connect. */
  "DNU_B12": "B12",
  /** Physical pin C1: VSS; passive. */
  "VSS_C1": "C1",
  /** Physical pin C2: DQ1_A; bidirectional. */
  "DQ1_A": "C2",
  /** Physical pin C3: DMI0_A; bidirectional. */
  "DMI0_A": "C3",
  /** Physical pin C4: DQ6_A; bidirectional. */
  "DQ6_A": "C4",
  /** Physical pin C5: VSS; passive. */
  "VSS_C5": "C5",
  /** Physical pin C8: VSS; passive. */
  "VSS_C8": "C8",
  /** Physical pin C9: DQ14_A; bidirectional. */
  "DQ14_A": "C9",
  /** Physical pin C10: DMI1_A; bidirectional. */
  "DMI1_A": "C10",
  /** Physical pin C11: DQ9_A; bidirectional. */
  "DQ9_A": "C11",
  /** Physical pin C12: VSS; passive. */
  "VSS_C12": "C12",
  /** Physical pin D1: VDDQ; passive. */
  "VDDQ_D1": "D1",
  /** Physical pin D2: VSS; passive. */
  "VSS_D2": "D2",
  /** Physical pin D3: DQS0_T_A; bidirectional. */
  "DQS0_T_A": "D3",
  /** Physical pin D4: VSS; passive. */
  "VSS_D4": "D4",
  /** Physical pin D5: VDDQ; passive. */
  "VDDQ_D5": "D5",
  /** Physical pin D8: VDDQ; passive. */
  "VDDQ_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: DQS1_T_A; bidirectional. */
  "DQS1_T_A": "D10",
  /** Physical pin D11: VSS; passive. */
  "VSS_D11": "D11",
  /** Physical pin D12: VDDQ; passive. */
  "VDDQ_D12": "D12",
  /** Physical pin E1: VSS; passive. */
  "VSS_E1": "E1",
  /** Physical pin E2: DQ2_A; bidirectional. */
  "DQ2_A": "E2",
  /** Physical pin E3: DQS0_C_A; bidirectional. */
  "DQS0_C_A": "E3",
  /** Physical pin E4: DQ5_A; bidirectional. */
  "DQ5_A": "E4",
  /** Physical pin E5: VSS; passive. */
  "VSS_E5": "E5",
  /** Physical pin E8: VSS; passive. */
  "VSS_E8": "E8",
  /** Physical pin E9: DQ13_A; bidirectional. */
  "DQ13_A": "E9",
  /** Physical pin E10: DQS1_C_A; bidirectional. */
  "DQS1_C_A": "E10",
  /** Physical pin E11: DQ10_A; bidirectional. */
  "DQ10_A": "E11",
  /** Physical pin E12: VSS; passive. */
  "VSS_E12": "E12",
  /** Physical pin F1: VDD1; power_in. */
  "VDD1_F1": "F1",
  /** Physical pin F2: DQ3_A; bidirectional. */
  "DQ3_A": "F2",
  /** Physical pin F3: VDDQ; passive. */
  "VDDQ_F3": "F3",
  /** Physical pin F4: DQ4_A; bidirectional. */
  "DQ4_A": "F4",
  /** Physical pin F5: VDD2; passive. */
  "VDD2_F5": "F5",
  /** Physical pin F8: VDD2; passive. */
  "VDD2_F8": "F8",
  /** Physical pin F9: DQ12_A; bidirectional. */
  "DQ12_A": "F9",
  /** Physical pin F10: VDDQ; passive. */
  "VDDQ_F10": "F10",
  /** Physical pin F11: DQ11_A; bidirectional. */
  "DQ11_A": "F11",
  /** Physical pin F12: VDD1; passive. */
  "VDD1_F12": "F12",
  /** Physical pin G1: VSS; passive. */
  "VSS_G1": "G1",
  /** Physical pin G2: ODT_CA_A; input. */
  "ODT_CA_A": "G2",
  /** Physical pin G3: VSS; passive. */
  "VSS_G3": "G3",
  /** Physical pin G4: VDD1; passive. */
  "VDD1_G4": "G4",
  /** Physical pin G5: VSS; passive. */
  "VSS_G5": "G5",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VDD1; passive. */
  "VDD1_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin H1: VDD2; passive. */
  "VDD2_H1": "H1",
  /** Physical pin H2: CA0_A; input. */
  "CA0_A": "H2",
  /** Physical pin H3: NC; no_connect. */
  "NC_H3": "H3",
  /** Physical pin H4: CS0_A; input. */
  "CS0_A": "H4",
  /** Physical pin H5: VDD2; passive. */
  "VDD2_H5": "H5",
  /** Physical pin H8: VDD2; passive. */
  "VDD2_H8": "H8",
  /** Physical pin H9: CA2_A; input. */
  "CA2_A": "H9",
  /** Physical pin H10: CA3_A; input. */
  "CA3_A": "H10",
  /** Physical pin H11: CA4_A; input. */
  "CA4_A": "H11",
  /** Physical pin H12: VDD2; passive. */
  "VDD2_H12": "H12",
  /** Physical pin J1: VSS; passive. */
  "VSS_J1": "J1",
  /** Physical pin J2: CA1_A; input. */
  "CA1_A": "J2",
  /** Physical pin J3: VSS; passive. */
  "VSS_J3": "J3",
  /** Physical pin J4: CKE0_A; input. */
  "CKE0_A": "J4",
  /** Physical pin J5: NC; no_connect. */
  "NC_J5": "J5",
  /** Physical pin J8: CK_T_A; input. */
  "CK_T_A": "J8",
  /** Physical pin J9: CK_C_A; input. */
  "CK_C_A": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J11: CA5_A; input. */
  "CA5_A": "J11",
  /** Physical pin J12: VSS; passive. */
  "VSS_J12": "J12",
  /** Physical pin K1: VDD2; passive. */
  "VDD2_K1": "K1",
  /** Physical pin K2: VSS; passive. */
  "VSS_K2": "K2",
  /** Physical pin K3: VDD2; passive. */
  "VDD2_K3": "K3",
  /** Physical pin K4: VSS; passive. */
  "VSS_K4": "K4",
  /** Physical pin K5: NC; no_connect. */
  "NC_K5": "K5",
  /** Physical pin K8: NC; no_connect. */
  "NC_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VDD2; passive. */
  "VDD2_K10": "K10",
  /** Physical pin K11: VSS; passive. */
  "VSS_K11": "K11",
  /** Physical pin K12: VDD2; passive. */
  "VDD2_K12": "K12",
  /** Physical pin A5: ZQ0; input. */
  "ZQ0": "A5",
  /** Physical pin A8: NC; no_connect. */
  "NC_A8": "A8",
  /** Physical pin AA1: DNU; no_connect. */
  "DNU_AA1": "AA1",
  /** Physical pin AA2: DQ0_B; bidirectional. */
  "DQ0_B": "AA2",
  /** Physical pin AA3: VDDQ; passive. */
  "VDDQ_AA3": "AA3",
  /** Physical pin AA4: DQ7_B; bidirectional. */
  "DQ7_B": "AA4",
  /** Physical pin AA5: VDDQ; passive. */
  "VDDQ_AA5": "AA5",
  /** Physical pin AA8: VDDQ; passive. */
  "VDDQ_AA8": "AA8",
  /** Physical pin AA9: DQ15_B; bidirectional. */
  "DQ15_B": "AA9",
  /** Physical pin AA10: VDDQ; power_in. */
  "VDDQ_AA10": "AA10",
  /** Physical pin AA11: DQ8_B; bidirectional. */
  "DQ8_B": "AA11",
  /** Physical pin AA12: DNU; no_connect. */
  "DNU_AA12": "AA12",
  /** Physical pin AB1: DNU; no_connect. */
  "DNU_AB1": "AB1",
  /** Physical pin AB2: DNU; no_connect. */
  "DNU_AB2": "AB2",
  /** Physical pin AB3: VSS; passive. */
  "VSS_AB3": "AB3",
  /** Physical pin AB4: VDD2; power_in. */
  "VDD2_AB4": "AB4",
  /** Physical pin AB5: VSS; passive. */
  "VSS_AB5": "AB5",
  /** Physical pin AB8: VSS; passive. */
  "VSS_AB8": "AB8",
  /** Physical pin AB9: VDD2; passive. */
  "VDD2_AB9": "AB9",
  /** Physical pin AB10: VSS; power_in. */
  "VSS_AB10": "AB10",
  /** Physical pin AB11: DNU; no_connect. */
  "DNU_AB11": "AB11",
  /** Physical pin AB12: DNU; no_connect. */
  "DNU_AB12": "AB12",
  /** Physical pin G11: NC; no_connect. */
  "NC_G11": "G11",
  /** Physical pin N1: VDD2; passive. */
  "VDD2_N1": "N1",
  /** Physical pin N2: VSS; passive. */
  "VSS_N2": "N2",
  /** Physical pin N3: VDD2; passive. */
  "VDD2_N3": "N3",
  /** Physical pin N4: VSS; passive. */
  "VSS_N4": "N4",
  /** Physical pin N5: NC; no_connect. */
  "NC_N5": "N5",
  /** Physical pin N8: NC; no_connect. */
  "NC_N8": "N8",
  /** Physical pin N9: VSS; passive. */
  "VSS_N9": "N9",
  /** Physical pin N10: VDD2; passive. */
  "VDD2_N10": "N10",
  /** Physical pin N11: VSS; passive. */
  "VSS_N11": "N11",
  /** Physical pin N12: VDD2; passive. */
  "VDD2_N12": "N12",
  /** Physical pin P1: VSS; passive. */
  "VSS_P1": "P1",
  /** Physical pin P2: CA1_B; input. */
  "CA1_B": "P2",
  /** Physical pin P3: VSS; passive. */
  "VSS_P3": "P3",
  /** Physical pin P4: CKE0_B; input. */
  "CKE0_B": "P4",
  /** Physical pin P5: NC; no_connect. */
  "NC_P5": "P5",
  /** Physical pin P8: CK_T_B; input. */
  "CK_T_B": "P8",
  /** Physical pin P9: CK_C_B; input. */
  "CK_C_B": "P9",
  /** Physical pin P10: VSS; passive. */
  "VSS_P10": "P10",
  /** Physical pin P11: CA5_B; input. */
  "CA5_B": "P11",
  /** Physical pin P12: VSS; passive. */
  "VSS_P12": "P12",
  /** Physical pin R1: VDD2; passive. */
  "VDD2_R1": "R1",
  /** Physical pin R2: CA0_B; input. */
  "CA0_B": "R2",
  /** Physical pin R3: NC; no_connect. */
  "NC_R3": "R3",
  /** Physical pin R4: CS0_B; input. */
  "CS0_B": "R4",
  /** Physical pin R5: VDD2; passive. */
  "VDD2_R5": "R5",
  /** Physical pin R8: VDD2; passive. */
  "VDD2_R8": "R8",
  /** Physical pin R9: CA2_B; input. */
  "CA2_B": "R9",
  /** Physical pin R10: CA3_B; input. */
  "CA3_B": "R10",
  /** Physical pin R11: CA4_B; input. */
  "CA4_B": "R11",
  /** Physical pin R12: VDD2; passive. */
  "VDD2_R12": "R12",
  /** Physical pin T1: VSS; passive. */
  "VSS_T1": "T1",
  /** Physical pin T2: ODT_CA_B; input. */
  "ODT_CA_B": "T2",
  /** Physical pin T3: VSS; passive. */
  "VSS_T3": "T3",
  /** Physical pin T4: VDD1; power_in. */
  "VDD1_T4": "T4",
  /** Physical pin T5: VSS; passive. */
  "VSS_T5": "T5",
  /** Physical pin T8: VSS; passive. */
  "VSS_T8": "T8",
  /** Physical pin T9: VDD1; passive. */
  "VDD1_T9": "T9",
  /** Physical pin T10: VSS; passive. */
  "VSS_T10": "T10",
  /** Physical pin T11: RESET_N; input. */
  "RESET_N": "T11",
  /** Physical pin T12: VSS; passive. */
  "VSS_T12": "T12",
  /** Physical pin U1: VDD1; passive. */
  "VDD1_U1": "U1",
  /** Physical pin U2: DQ3_B; bidirectional. */
  "DQ3_B": "U2",
  /** Physical pin U3: VDDQ; passive. */
  "VDDQ_U3": "U3",
  /** Physical pin U4: DQ4_B; bidirectional. */
  "DQ4_B": "U4",
  /** Physical pin U5: VDD2; passive. */
  "VDD2_U5": "U5",
  /** Physical pin U8: VDD2; passive. */
  "VDD2_U8": "U8",
  /** Physical pin U9: DQ12_B; bidirectional. */
  "DQ12_B": "U9",
  /** Physical pin U10: VDDQ; passive. */
  "VDDQ_U10": "U10",
  /** Physical pin U11: DQ11_B; bidirectional. */
  "DQ11_B": "U11",
  /** Physical pin U12: VDD1; passive. */
  "VDD1_U12": "U12",
  /** Physical pin V1: VSS; passive. */
  "VSS_V1": "V1",
  /** Physical pin V2: DQ2_B; bidirectional. */
  "DQ2_B": "V2",
  /** Physical pin V3: DQS0_C_B; bidirectional. */
  "DQS0_C_B": "V3",
  /** Physical pin V4: DQ5_B; bidirectional. */
  "DQ5_B": "V4",
  /** Physical pin V5: VSS; passive. */
  "VSS_V5": "V5",
  /** Physical pin V8: VSS; passive. */
  "VSS_V8": "V8",
  /** Physical pin V9: DQ13_B; bidirectional. */
  "DQ13_B": "V9",
  /** Physical pin V10: DQS1_C_B; bidirectional. */
  "DQS1_C_B": "V10",
  /** Physical pin V11: DQ10_B; bidirectional. */
  "DQ10_B": "V11",
  /** Physical pin V12: VSS; passive. */
  "VSS_V12": "V12",
  /** Physical pin W1: VDDQ; passive. */
  "VDDQ_W1": "W1",
  /** Physical pin W2: VSS; passive. */
  "VSS_W2": "W2",
  /** Physical pin W3: DQS0_T_B; bidirectional. */
  "DQS0_T_B": "W3",
  /** Physical pin W4: VSS; passive. */
  "VSS_W4": "W4",
  /** Physical pin W5: VDDQ; passive. */
  "VDDQ_W5": "W5",
  /** Physical pin W8: VDDQ; passive. */
  "VDDQ_W8": "W8",
  /** Physical pin W9: VSS; passive. */
  "VSS_W9": "W9",
  /** Physical pin W10: DQS1_T_B; bidirectional. */
  "DQS1_T_B": "W10",
  /** Physical pin W11: VSS; passive. */
  "VSS_W11": "W11",
  /** Physical pin W12: VDDQ; passive. */
  "VDDQ_W12": "W12",
  /** Physical pin Y1: VSS; passive. */
  "VSS_Y1": "Y1",
  /** Physical pin Y2: DQ1_B; bidirectional. */
  "DQ1_B": "Y2",
  /** Physical pin Y3: DMI0_B; bidirectional. */
  "DMI0_B": "Y3",
  /** Physical pin Y4: DQ6_B; bidirectional. */
  "DQ6_B": "Y4",
  /** Physical pin Y5: VSS; passive. */
  "VSS_Y5": "Y5",
  /** Physical pin Y8: VSS; passive. */
  "VSS_Y8": "Y8",
  /** Physical pin Y9: DQ14_B; bidirectional. */
  "DQ14_B": "Y9",
  /** Physical pin Y10: DMI1_B; bidirectional. */
  "DMI1_B": "Y10",
  /** Physical pin Y11: DQ9_B; bidirectional. */
  "DQ9_B": "Y11",
  /** Physical pin Y12: VSS; passive. */
  "VSS_Y12": "Y12",
}) {
  override schema = "Memory_RAM:IS43LQ32256AL-062BLI";
  override referencePrefix = "U";
}

/**
 * 512K x 8 HIGH-SPEED CMOS STATIC RAM, 10ns, SOJ-36
 *
 * KiCad symbol: `Memory_RAM:IS61C5128AL-10KLI`. Reference prefix: `U`.
 * Footprint filters: SOJ*10.16*23.*P1.27mm*.
 * @see http://www.issi.com/WW/pdf/61-64C5128AL.pdf
 * Keywords: SRAM MEMORY.
 * Default footprint: Package_SO:SOJ-36_10.16x23.495mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS61C5128AL_10KLI extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: A3; input. */
  "A3": "4",
  /** Physical pin 5: A4; input. */
  "A4": "5",
  /** Physical pin 6: ~{CE}; input. */
  "~{CE}": "6",
  /** Physical pin 7: I/O0; bidirectional. */
  "I/O0": "7",
  /** Physical pin 8: I/O1; bidirectional. */
  "I/O1": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD_9": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: I/O2; bidirectional. */
  "I/O2": "11",
  /** Physical pin 12: I/O3; bidirectional. */
  "I/O3": "12",
  /** Physical pin 13: ~{WE}; input. */
  "~{WE}": "13",
  /** Physical pin 14: A5; input. */
  "A5": "14",
  /** Physical pin 15: A6; input. */
  "A6": "15",
  /** Physical pin 16: A7; input. */
  "A7": "16",
  /** Physical pin 17: A8; input. */
  "A8": "17",
  /** Physical pin 18: A9; input. */
  "A9": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: A10; input. */
  "A10": "20",
  /** Physical pin 21: A11; input. */
  "A11": "21",
  /** Physical pin 22: A12; input. */
  "A12": "22",
  /** Physical pin 23: A13; input. */
  "A13": "23",
  /** Physical pin 24: A14; input. */
  "A14": "24",
  /** Physical pin 25: I/O4; bidirectional. */
  "I/O4": "25",
  /** Physical pin 26: I/O5; bidirectional. */
  "I/O5": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: I/O6; bidirectional. */
  "I/O6": "29",
  /** Physical pin 30: I/O7; bidirectional. */
  "I/O7": "30",
  /** Physical pin 31: ~{OE}; input. */
  "~{OE}": "31",
  /** Physical pin 32: A15; input. */
  "A15": "32",
  /** Physical pin 33: A16; input. */
  "A16": "33",
  /** Physical pin 34: A17; input. */
  "A17": "34",
  /** Physical pin 35: A18; input. */
  "A18": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
}) {
  override schema = "Memory_RAM:IS61C5128AL-10KLI";
  override referencePrefix = "U";
}

/**
 * 512K x 8 HIGH-SPEED CMOS STATIC RAM, 10ns, TSOP II-44
 *
 * KiCad symbol: `Memory_RAM:IS61C5128AL-10TLI`. Reference prefix: `U`.
 * Footprint filters: TSOP*10.16*18.*P0.8mm*.
 * @see http://www.issi.com/WW/pdf/61-64C5128AL.pdf
 * Keywords: SRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-44_10.16x18.41mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS61C5128AL_10TLI extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: A0; input. */
  "A0": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A2; input. */
  "A2": "5",
  /** Physical pin 6: A3; input. */
  "A3": "6",
  /** Physical pin 7: A4; input. */
  "A4": "7",
  /** Physical pin 8: ~{CE}; input. */
  "~{CE}": "8",
  /** Physical pin 9: I/O0; bidirectional. */
  "I/O0": "9",
  /** Physical pin 10: I/O1; bidirectional. */
  "I/O1": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: I/O2; bidirectional. */
  "I/O2": "13",
  /** Physical pin 14: I/O3; bidirectional. */
  "I/O3": "14",
  /** Physical pin 15: ~{WE}; input. */
  "~{WE}": "15",
  /** Physical pin 16: A5; input. */
  "A5": "16",
  /** Physical pin 17: A6; input. */
  "A6": "17",
  /** Physical pin 18: A7; input. */
  "A7": "18",
  /** Physical pin 19: A8; input. */
  "A8": "19",
  /** Physical pin 20: A9; input. */
  "A9": "20",
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
  /** Physical pin 26: A10; input. */
  "A10": "26",
  /** Physical pin 27: A11; input. */
  "A11": "27",
  /** Physical pin 28: A12; input. */
  "A12": "28",
  /** Physical pin 29: A13; input. */
  "A13": "29",
  /** Physical pin 30: A14; input. */
  "A14": "30",
  /** Physical pin 31: I/O4; bidirectional. */
  "I/O4": "31",
  /** Physical pin 32: I/O5; bidirectional. */
  "I/O5": "32",
  /** Physical pin 33: VDD; passive. */
  "VDD_33": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: I/O6; bidirectional. */
  "I/O6": "35",
  /** Physical pin 36: I/O7; bidirectional. */
  "I/O7": "36",
  /** Physical pin 37: ~{OE}; input. */
  "~{OE}": "37",
  /** Physical pin 38: A15; input. */
  "A15": "38",
  /** Physical pin 39: A16; input. */
  "A16": "39",
  /** Physical pin 40: A17; input. */
  "A17": "40",
  /** Physical pin 41: A18; input. */
  "A18": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
}) {
  override schema = "Memory_RAM:IS61C5128AL-10TLI";
  override referencePrefix = "U";
}

/**
 * 512K x 8 HIGH-SPEED CMOS STATIC RAM, 25ns, sTSOP I-32
 *
 * KiCad symbol: `Memory_RAM:IS61C5128AS-25HLI`. Reference prefix: `U`.
 * Footprint filters: TSOP*11.8*8*P0.5mm*.
 * @see http://www.issi.com/WW/pdf/61-64C5128AL.pdf
 * Keywords: SRAM MEMORY.
 * Default footprint: Package_SO:TSOP-I-32_11.8x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS61C5128AS_25HLI extends Component.withPins({
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: A18; input. */
  "A18": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: A17; input. */
  "A17": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; bidirectional. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; bidirectional. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; bidirectional. */
  "I/O2": "23",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 25: I/O3; bidirectional. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; bidirectional. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; bidirectional. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; bidirectional. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; bidirectional. */
  "I/O7": "29",
  /** Physical pin 30: ~{CE}; input. */
  "~{CE}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:IS61C5128AS-25HLI";
  override referencePrefix = "U";
}

/**
 * 512K x 8 HIGH-SPEED CMOS STATIC RAM, 25ns, SOP-32
 *
 * KiCad symbol: `Memory_RAM:IS61C5128AS-25QLI`. Reference prefix: `U`.
 * Footprint filters: SOP*11.3*20.*P1.27mm*.
 * @see http://www.issi.com/WW/pdf/61-64C5128AL.pdf
 * Keywords: SRAM MEMORY.
 * Default footprint: Package_SO:SOP-32_11.305x20.495mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS61C5128AS_25QLI extends Component.withPins({
  /** Physical pin 1: A17; input. */
  "A17": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; bidirectional. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; bidirectional. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; bidirectional. */
  "I/O2": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: I/O3; bidirectional. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; bidirectional. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; bidirectional. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; bidirectional. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; bidirectional. */
  "I/O7": "21",
  /** Physical pin 22: ~{CE}; input. */
  "~{CE}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: A18; input. */
  "A18": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD": "32",
}) {
  override schema = "Memory_RAM:IS61C5128AS-25QLI";
  override referencePrefix = "U";
}

/**
 * 512K x 8 HIGH-SPEED CMOS STATIC RAM, 25ns, TSOP II-32
 *
 * KiCad symbol: `Memory_RAM:IS61C5128AS-25TLI`. Reference prefix: `U`.
 * Footprint filters: TSOP*21.0*10.*P1.27mm*.
 * @see http://www.issi.com/WW/pdf/61-64C5128AL.pdf
 * Keywords: SRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-32_21.0x10.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS61C5128AS_25TLI extends Component.withPins({
  /** Physical pin 1: A17; input. */
  "A17": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; bidirectional. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; bidirectional. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; bidirectional. */
  "I/O2": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: I/O3; bidirectional. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; bidirectional. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; bidirectional. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; bidirectional. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; bidirectional. */
  "I/O7": "21",
  /** Physical pin 22: ~{CE}; input. */
  "~{CE}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: A18; input. */
  "A18": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD": "32",
}) {
  override schema = "Memory_RAM:IS61C5128AS-25TLI";
  override referencePrefix = "U";
}

/**
 * 32Kx8 bit Low Power CMOS Static RAM, 25/45ns
 *
 * KiCad symbol: `Memory_RAM:IS62C256AL`. Reference prefix: `U`.
 * Footprint filters: SOP*8.4*18.16*P1.27*.
 * @see https://www.issi.com/WW/pdf/62-65C256AL.pdf
 * Keywords: SRAM MEMORY ISSI parallel-interface.
 * Default footprint: Package_SO:SOP-28_8.4x18.16mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS62C256AL extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 1: A14; input. */
  "A14": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: I/O0; tri_state. */
  "I/O0": "11",
  /** Physical pin 12: I/O1; tri_state. */
  "I/O1": "12",
  /** Physical pin 13: I/O2; tri_state. */
  "I/O2": "13",
  /** Physical pin 15: I/O3; tri_state. */
  "I/O3": "15",
  /** Physical pin 16: I/O4; tri_state. */
  "I/O4": "16",
  /** Physical pin 17: I/O5; tri_state. */
  "I/O5": "17",
  /** Physical pin 18: I/O6; tri_state. */
  "I/O6": "18",
  /** Physical pin 19: I/O7; tri_state. */
  "I/O7": "19",
  /** Physical pin 20: ~{CE}; input. */
  "~{CE}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: A13; input. */
  "A13": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:IS62C256AL";
  override referencePrefix = "U";
}

/**
 * 512K x 8 HIGH-SPEED CMOS STATIC RAM, 12ns, TSOP II-44
 *
 * KiCad symbol: `Memory_RAM:IS64C5128AL-12CTLA3`. Reference prefix: `U`.
 * Footprint filters: TSOP*10.16*18.*P0.8mm*.
 * @see http://www.issi.com/WW/pdf/61-64C5128AL.pdf
 * Keywords: SRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-44_10.16x18.41mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS64C5128AL_12CTLA3 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: A0; input. */
  "A0": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A2; input. */
  "A2": "5",
  /** Physical pin 6: A3; input. */
  "A3": "6",
  /** Physical pin 7: A4; input. */
  "A4": "7",
  /** Physical pin 8: ~{CE}; input. */
  "~{CE}": "8",
  /** Physical pin 9: I/O0; bidirectional. */
  "I/O0": "9",
  /** Physical pin 10: I/O1; bidirectional. */
  "I/O1": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: I/O2; bidirectional. */
  "I/O2": "13",
  /** Physical pin 14: I/O3; bidirectional. */
  "I/O3": "14",
  /** Physical pin 15: ~{WE}; input. */
  "~{WE}": "15",
  /** Physical pin 16: A5; input. */
  "A5": "16",
  /** Physical pin 17: A6; input. */
  "A6": "17",
  /** Physical pin 18: A7; input. */
  "A7": "18",
  /** Physical pin 19: A8; input. */
  "A8": "19",
  /** Physical pin 20: A9; input. */
  "A9": "20",
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
  /** Physical pin 26: A10; input. */
  "A10": "26",
  /** Physical pin 27: A11; input. */
  "A11": "27",
  /** Physical pin 28: A12; input. */
  "A12": "28",
  /** Physical pin 29: A13; input. */
  "A13": "29",
  /** Physical pin 30: A14; input. */
  "A14": "30",
  /** Physical pin 31: I/O4; bidirectional. */
  "I/O4": "31",
  /** Physical pin 32: I/O5; bidirectional. */
  "I/O5": "32",
  /** Physical pin 33: VDD; passive. */
  "VDD_33": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: I/O6; bidirectional. */
  "I/O6": "35",
  /** Physical pin 36: I/O7; bidirectional. */
  "I/O7": "36",
  /** Physical pin 37: ~{OE}; input. */
  "~{OE}": "37",
  /** Physical pin 38: A15; input. */
  "A15": "38",
  /** Physical pin 39: A16; input. */
  "A16": "39",
  /** Physical pin 40: A17; input. */
  "A17": "40",
  /** Physical pin 41: A18; input. */
  "A18": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
}) {
  override schema = "Memory_RAM:IS64C5128AL-12CTLA3";
  override referencePrefix = "U";
}

/**
 * 512K x 8 HIGH-SPEED CMOS STATIC RAM, 12ns, SOJ-36
 *
 * KiCad symbol: `Memory_RAM:IS64C5128AL-12KLA3`. Reference prefix: `U`.
 * Footprint filters: SOJ*10.16*23.*P1.27mm*.
 * @see http://www.issi.com/WW/pdf/61-64C5128AL.pdf
 * Keywords: SRAM MEMORY.
 * Default footprint: Package_SO:SOJ-36_10.16x23.495mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS64C5128AL_12KLA3 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: A3; input. */
  "A3": "4",
  /** Physical pin 5: A4; input. */
  "A4": "5",
  /** Physical pin 6: ~{CE}; input. */
  "~{CE}": "6",
  /** Physical pin 7: I/O0; bidirectional. */
  "I/O0": "7",
  /** Physical pin 8: I/O1; bidirectional. */
  "I/O1": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD_9": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: I/O2; bidirectional. */
  "I/O2": "11",
  /** Physical pin 12: I/O3; bidirectional. */
  "I/O3": "12",
  /** Physical pin 13: ~{WE}; input. */
  "~{WE}": "13",
  /** Physical pin 14: A5; input. */
  "A5": "14",
  /** Physical pin 15: A6; input. */
  "A6": "15",
  /** Physical pin 16: A7; input. */
  "A7": "16",
  /** Physical pin 17: A8; input. */
  "A8": "17",
  /** Physical pin 18: A9; input. */
  "A9": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: A10; input. */
  "A10": "20",
  /** Physical pin 21: A11; input. */
  "A11": "21",
  /** Physical pin 22: A12; input. */
  "A12": "22",
  /** Physical pin 23: A13; input. */
  "A13": "23",
  /** Physical pin 24: A14; input. */
  "A14": "24",
  /** Physical pin 25: I/O4; bidirectional. */
  "I/O4": "25",
  /** Physical pin 26: I/O5; bidirectional. */
  "I/O5": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: I/O6; bidirectional. */
  "I/O6": "29",
  /** Physical pin 30: I/O7; bidirectional. */
  "I/O7": "30",
  /** Physical pin 31: ~{OE}; input. */
  "~{OE}": "31",
  /** Physical pin 32: A15; input. */
  "A15": "32",
  /** Physical pin 33: A16; input. */
  "A16": "33",
  /** Physical pin 34: A17; input. */
  "A17": "34",
  /** Physical pin 35: A18; input. */
  "A18": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
}) {
  override schema = "Memory_RAM:IS64C5128AL-12KLA3";
  override referencePrefix = "U";
}

/**
 * 32Kx8 bit Low Power CMOS Static RAM, 25/45ns, Automotive
 *
 * KiCad symbol: `Memory_RAM:IS65C256AL`. Reference prefix: `U`.
 * Footprint filters: SOP*8.4*18.16*P1.27*.
 * @see https://www.issi.com/WW/pdf/62-65C256AL.pdf
 * Keywords: SRAM MEMORY ISSI parallel-interface.
 * Default footprint: Package_SO:SOP-28_8.4x18.16mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS65C256AL extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 1: A14; input. */
  "A14": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: I/O0; tri_state. */
  "I/O0": "11",
  /** Physical pin 12: I/O1; tri_state. */
  "I/O1": "12",
  /** Physical pin 13: I/O2; tri_state. */
  "I/O2": "13",
  /** Physical pin 15: I/O3; tri_state. */
  "I/O3": "15",
  /** Physical pin 16: I/O4; tri_state. */
  "I/O4": "16",
  /** Physical pin 17: I/O5; tri_state. */
  "I/O5": "17",
  /** Physical pin 18: I/O6; tri_state. */
  "I/O6": "18",
  /** Physical pin 19: I/O7; tri_state. */
  "I/O7": "19",
  /** Physical pin 20: ~{CE}; input. */
  "~{CE}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: A13; input. */
  "A13": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:IS65C256AL";
  override referencePrefix = "U";
}

/**
 * 128K x 8-bit High-Speed CMOS Static RAM, IS61C1024AL (commercial and industrial) / IS64C1024AL (automotive), VDD = 5V ±10%, 12/15ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:IS6xC1024AL-xxT`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*18.4*8*P0.5mm*.
 * @see https://www.issi.com/WW/pdf/61-64C1024AL.pdf
 * Keywords: SRAM MEMORY 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_18.4x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS6xC1024AL_xxT extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:IS6xC1024AL-xxT";
  override referencePrefix = "U";
}

/**
 * 128K x 8-bit High-Speed CMOS Static RAM, IS61C1024AL (commercial and industrial) / IS64C1024AL (automotive), VDD = 5V ±10%, 12/15ns, TSOP-I-32
 *
 * KiCad symbol: `Memory_RAM:IS6xC1024AL-xxH`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*11.8*8*P0.5mm*.
 * @see https://www.issi.com/WW/pdf/61-64C1024AL.pdf
 * Keywords: SRAM MEMORY 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_11.8x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS6xC1024AL_xxH extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: I/O0; tri_state. */
  "I/O0": "21",
  /** Physical pin 22: I/O1; tri_state. */
  "I/O1": "22",
  /** Physical pin 23: I/O2; tri_state. */
  "I/O2": "23",
  /** Physical pin 25: I/O3; tri_state. */
  "I/O3": "25",
  /** Physical pin 26: I/O4; tri_state. */
  "I/O4": "26",
  /** Physical pin 27: I/O5; tri_state. */
  "I/O5": "27",
  /** Physical pin 28: I/O6; tri_state. */
  "I/O6": "28",
  /** Physical pin 29: I/O7; tri_state. */
  "I/O7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:IS6xC1024AL-xxH";
  override referencePrefix = "U";
}

/**
 * 128K x 8-bit High-Speed CMOS Static RAM, IS61C1024AL (commercial and industrial) / IS64C1024AL (automotive), VDD = 5V ±10%, 12/15ns, SOJ-32 (300 mil)
 *
 * KiCad symbol: `Memory_RAM:IS6xC1024AL-xxJ`. Reference prefix: `U`.
 * Footprint filters: *SOJ*7.6*20.*P1.27mm*.
 * @see https://www.digikey.com/htmldatasheets/production/74798/0/0/1/IS6xC1024AL.pdf
 * Keywords: SRAM MEMORY 1Mbit Obsolete.
 * Default footprint: Package_SO:SOJ-32_7.62x20.955mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS6xC1024AL_xxJ extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:IS6xC1024AL-xxJ";
  override referencePrefix = "U";
}

/**
 * 128K x 8-bit High-Speed CMOS Static RAM, IS61C1024AL (commercial and industrial) / IS64C1024AL (automotive), VDD = 5V ±10%, 12/15ns, SOJ-32 (400 mil)
 *
 * KiCad symbol: `Memory_RAM:IS6xC1024AL-xxK`. Reference prefix: `U`.
 * Footprint filters: *SOJ*10.1*20.*P1.27mm*.
 * @see https://www.digikey.com/htmldatasheets/production/74798/0/0/1/IS6xC1024AL.pdf
 * Keywords: SRAM MEMORY 1Mbit Obsolete.
 * Default footprint: Package_SO:SOJ-32_10.16x20.955mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS6xC1024AL_xxK extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: I/O0; tri_state. */
  "I/O0": "13",
  /** Physical pin 14: I/O1; tri_state. */
  "I/O1": "14",
  /** Physical pin 15: I/O2; tri_state. */
  "I/O2": "15",
  /** Physical pin 17: I/O3; tri_state. */
  "I/O3": "17",
  /** Physical pin 18: I/O4; tri_state. */
  "I/O4": "18",
  /** Physical pin 19: I/O5; tri_state. */
  "I/O5": "19",
  /** Physical pin 20: I/O6; tri_state. */
  "I/O6": "20",
  /** Physical pin 21: I/O7; tri_state. */
  "I/O7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:IS6xC1024AL-xxK";
  override referencePrefix = "U";
}

/**
 * 5.0 V, 16 Kbit (2 Kb x 8) TIMEKEEPER® SRAM, DIP-24
 *
 * KiCad symbol: `Memory_RAM:M48Tx2`. Reference prefix: `U`.
 * Footprint filters: DIP*18.0mmx34.29mm*W15.24mm*.
 * @see https://www.mouser.at/datasheet/2/389/m48t02-1849963.pdf
 * Keywords: st M48T02 M48T12.
 * Default footprint: Package_DIP:DIP-24_18.0mmx34.29mm_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M48Tx2 extends Component.withPins({
  /** Physical pin 1: A7; input. */
  "A7": "1",
  /** Physical pin 2: A6; input. */
  "A6": "2",
  /** Physical pin 3: A5; input. */
  "A5": "3",
  /** Physical pin 4: A4; input. */
  "A4": "4",
  /** Physical pin 5: A3; input. */
  "A3": "5",
  /** Physical pin 6: A2; input. */
  "A2": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 8: A0; input. */
  "A0": "8",
  /** Physical pin 9: DQ0; bidirectional. */
  "DQ0": "9",
  /** Physical pin 10: DQ1; bidirectional. */
  "DQ1": "10",
  /** Physical pin 11: DQ2; bidirectional. */
  "DQ2": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: DQ3; bidirectional. */
  "DQ3": "13",
  /** Physical pin 14: DQ4; bidirectional. */
  "DQ4": "14",
  /** Physical pin 15: DQ5; bidirectional. */
  "DQ5": "15",
  /** Physical pin 16: DQ6; bidirectional. */
  "DQ6": "16",
  /** Physical pin 17: DQ7; bidirectional. */
  "DQ7": "17",
  /** Physical pin 18: ~{E}; input. */
  "~{E}": "18",
  /** Physical pin 19: A10; input. */
  "A10": "19",
  /** Physical pin 20: ~{G}; input. */
  "~{G}": "20",
  /** Physical pin 21: ~{W}; input. */
  "~{W}": "21",
  /** Physical pin 22: A9; input. */
  "A9": "22",
  /** Physical pin 23: A8; input. */
  "A8": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Memory_RAM:M48Tx2";
  override referencePrefix = "U";
}

/**
 * 5 V, 16 kbit (2 Kb x 8) ZEROPOWER® SRAM, DIP-24
 *
 * KiCad symbol: `Memory_RAM:M48Zx2`. Reference prefix: `U`.
 * Footprint filters: DIP*18.0mmx34.29mm*W15.24mm*.
 * @see https://www.mouser.at/datasheet/2/389/m48z02-1849661.pdf
 * Keywords: st M48Z02 M48Z12.
 * Default footprint: Package_DIP:DIP-24_18.0mmx34.29mm_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M48Zx2 extends Component.withPins({
  /** Physical pin 1: A7; input. */
  "A7": "1",
  /** Physical pin 2: A6; input. */
  "A6": "2",
  /** Physical pin 3: A5; input. */
  "A5": "3",
  /** Physical pin 4: A4; input. */
  "A4": "4",
  /** Physical pin 5: A3; input. */
  "A3": "5",
  /** Physical pin 6: A2; input. */
  "A2": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 8: A0; input. */
  "A0": "8",
  /** Physical pin 9: DQ0; bidirectional. */
  "DQ0": "9",
  /** Physical pin 10: DQ1; bidirectional. */
  "DQ1": "10",
  /** Physical pin 11: DQ2; bidirectional. */
  "DQ2": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: DQ3; bidirectional. */
  "DQ3": "13",
  /** Physical pin 14: DQ4; bidirectional. */
  "DQ4": "14",
  /** Physical pin 15: DQ5; bidirectional. */
  "DQ5": "15",
  /** Physical pin 16: DQ6; bidirectional. */
  "DQ6": "16",
  /** Physical pin 17: DQ7; bidirectional. */
  "DQ7": "17",
  /** Physical pin 18: ~{E}; input. */
  "~{E}": "18",
  /** Physical pin 19: A10; input. */
  "A10": "19",
  /** Physical pin 20: ~{G}; input. */
  "~{G}": "20",
  /** Physical pin 21: ~{W}; input. */
  "~{W}": "21",
  /** Physical pin 22: A9; input. */
  "A9": "22",
  /** Physical pin 23: A8; input. */
  "A8": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Memory_RAM:M48Zx2";
  override referencePrefix = "U";
}

/**
 * 16384 x 1 bit Dynamic RAM, 150/200/250ns access time, VBB -5V, VCC 5V, VDD 12V, ±10% tolerance on all power supplies, TTL compatible inputs, DIP-16 (Epoxy/Plastic package)
 *
 * KiCad symbol: `Memory_RAM:MK4116N`. Reference prefix: `U`.
 * Footprint filters: *DIP*7.62mm*.
 * @see https://deramp.com/downloads/mfe_archive/050-Component%20Specifications/Mostek/1980_Mostek_Memory_Data_Book_and_Designers_Guide.pdf#page=98
 * Keywords: DRAM NMOS 16Kbit MEMORY Obsolete.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MK4116N extends Component.withPins({
  /** Physical pin 1: VBB; power_in. */
  "VBB": "1",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 16: VSS; power_in. */
  "VSS": "16",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: ~{WRITE}; input. */
  "~{WRITE}": "3",
  /** Physical pin 4: ~{RAS}; input. */
  "~{RAS}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A2; input. */
  "A2": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 10: A5; input. */
  "A5": "10",
  /** Physical pin 11: A4; input. */
  "A4": "11",
  /** Physical pin 12: A3; input. */
  "A3": "12",
  /** Physical pin 13: A6; input. */
  "A6": "13",
  /** Physical pin 14: DOUT; tri_state. */
  "DOUT": "14",
  /** Physical pin 15: ~{CAS}; input. */
  "~{CAS}": "15",
}) {
  override schema = "Memory_RAM:MK4116N";
  override referencePrefix = "U";
}

/**
 * 65536 x 1 bit Dynamic RAM, 120/150ns access time, single 5V ±10% power supply, TTL compatible inputs, DIP-16 (Epoxy/Plastic package)
 *
 * KiCad symbol: `Memory_RAM:MK4164N`. Reference prefix: `U`.
 * Footprint filters: *DIP*7.62mm*.
 * @see https://deramp.com/downloads/mfe_archive/050-Component%20Specifications/Mostek/1980_Mostek_Memory_Data_Book_and_Designers_Guide.pdf#page=134
 * Keywords: DRAM NMOS 64Kbit MEMORY Obsolete.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MK4164N extends Component.withPins({
  /** Physical pin 1: ~{RFSH}; input. */
  "~{RFSH}": "1",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: A7; input. */
  "A7": "9",
  /** Physical pin 16: VSS; power_in. */
  "VSS": "16",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: ~{WRITE}; input. */
  "~{WRITE}": "3",
  /** Physical pin 4: ~{RAS}; input. */
  "~{RAS}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A2; input. */
  "A2": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 10: A5; input. */
  "A5": "10",
  /** Physical pin 11: A4; input. */
  "A4": "11",
  /** Physical pin 12: A3; input. */
  "A3": "12",
  /** Physical pin 13: A6; input. */
  "A6": "13",
  /** Physical pin 14: DOUT; tri_state. */
  "DOUT": "14",
  /** Physical pin 15: ~{CAS}; input. */
  "~{CAS}": "15",
}) {
  override schema = "Memory_RAM:MK4164N";
  override referencePrefix = "U";
}

/**
 * 512M x 16-bit (8 Gbit) CMOS Double Data Rate IV Synchronous RAM, Rev. D / E / H, FBGA-96
 *
 * KiCad symbol: `Memory_RAM:MT40A512M16LY`. Reference prefix: `U`.
 * Footprint filters: *FBGA*7.5x13.5mm*Layout9x16*P0.8mm*.
 * @see https://eu.mouser.com/datasheet/2/671/8gb_ddr4_sdram-3178955.pdf
 * Keywords: DDR4 DRAM SDRAM x16 MEMORY.
 * Default footprint: Package_BGA:Micron_FBGA-96_7.5x13.5mm_Layout9x16_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT40A512M16LY extends Component.withPins({
  /** Physical pin A1: V_{DDQ}; power_in. */
  "V_{DDQ}_A1": "A1",
  /** Physical pin A2: V_{SSQ}; power_in. */
  "V_{SSQ}_A2": "A2",
  /** Physical pin A3: DQ8; bidirectional. */
  "DQ8": "A3",
  /** Physical pin A7: UDQS_c; bidirectional. */
  "UDQS_c": "A7",
  /** Physical pin A8: V_{SSQ}; passive. */
  "V_{SSQ}_A8": "A8",
  /** Physical pin A9: V_{DDQ}; passive. */
  "V_{DDQ}_A9": "A9",
  /** Physical pin B1: V_{PP}; power_in. */
  "V_{PP}_B1": "B1",
  /** Physical pin B2: V_{SS}; power_in. */
  "V_{SS}_B2": "B2",
  /** Physical pin B3: V_{DD}; passive. */
  "V_{DD}_B3": "B3",
  /** Physical pin B7: UDQS_t; bidirectional. */
  "UDQS_t": "B7",
  /** Physical pin B8: DQ9; bidirectional. */
  "DQ9": "B8",
  /** Physical pin B9: V_{DD}; power_in. */
  "V_{DD}_B9": "B9",
  /** Physical pin C1: V_{DDQ}; passive. */
  "V_{DDQ}_C1": "C1",
  /** Physical pin C2: DQ12; bidirectional. */
  "DQ12": "C2",
  /** Physical pin C3: DQ10; bidirectional. */
  "DQ10": "C3",
  /** Physical pin C7: DQ11; bidirectional. */
  "DQ11": "C7",
  /** Physical pin C8: DQ13; bidirectional. */
  "DQ13": "C8",
  /** Physical pin C9: V_{SSQ}; passive. */
  "V_{SSQ}_C9": "C9",
  /** Physical pin D1: V_{DD}; passive. */
  "V_{DD}_D1": "D1",
  /** Physical pin D2: V_{SSQ}; passive. */
  "V_{SSQ}_D2": "D2",
  /** Physical pin D3: DQ14; bidirectional. */
  "DQ14": "D3",
  /** Physical pin D7: DQ15; bidirectional. */
  "DQ15": "D7",
  /** Physical pin D8: V_{SSQ}; passive. */
  "V_{SSQ}_D8": "D8",
  /** Physical pin D9: V_{DDQ}; passive. */
  "V_{DDQ}_D9": "D9",
  /** Physical pin E1: V_{SS}; passive. */
  "V_{SS}_E1": "E1",
  /** Physical pin E2: NF/~{UDM}/~{UDBI}; bidirectional. */
  "NF/~{UDM}/~{UDBI}": "E2",
  /** Physical pin E3: V_{SSQ}; passive. */
  "V_{SSQ}_E3": "E3",
  /** Physical pin E7: NF/~{LDM}/~{LDBI}; bidirectional. */
  "NF/~{LDM}/~{LDBI}": "E7",
  /** Physical pin E8: V_{SSQ}; passive. */
  "V_{SSQ}_E8": "E8",
  /** Physical pin E9: V_{SS}; passive. */
  "V_{SS}_E9": "E9",
  /** Physical pin F1: V_{SSQ}; passive. */
  "V_{SSQ}_F1": "F1",
  /** Physical pin F2: V_{DDQ}; passive. */
  "V_{DDQ}_F2": "F2",
  /** Physical pin F3: LDQS_c; bidirectional. */
  "LDQS_c": "F3",
  /** Physical pin F7: DQ1; bidirectional. */
  "DQ1": "F7",
  /** Physical pin F8: V_{DDQ}; passive. */
  "V_{DDQ}_F8": "F8",
  /** Physical pin F9: ZQ; passive. */
  "ZQ": "F9",
  /** Physical pin G1: V_{DDQ}; passive. */
  "V_{DDQ}_G1": "G1",
  /** Physical pin G2: DQ0; bidirectional. */
  "DQ0": "G2",
  /** Physical pin G3: LDQS_t; bidirectional. */
  "LDQS_t": "G3",
  /** Physical pin G7: V_{DD}; passive. */
  "V_{DD}_G7": "G7",
  /** Physical pin G8: V_{SS}; passive. */
  "V_{SS}_G8": "G8",
  /** Physical pin G9: V_{DDQ}; passive. */
  "V_{DDQ}_G9": "G9",
  /** Physical pin H1: V_{SSQ}; passive. */
  "V_{SSQ}_H1": "H1",
  /** Physical pin H2: DQ4; bidirectional. */
  "DQ4": "H2",
  /** Physical pin H3: DQ2; bidirectional. */
  "DQ2": "H3",
  /** Physical pin H7: DQ3; bidirectional. */
  "DQ3": "H7",
  /** Physical pin H8: DQ5; bidirectional. */
  "DQ5": "H8",
  /** Physical pin H9: V_{SSQ}; passive. */
  "V_{SSQ}_H9": "H9",
  /** Physical pin J1: V_{DD}; passive. */
  "V_{DD}_J1": "J1",
  /** Physical pin J2: V_{DDQ}; passive. */
  "V_{DDQ}_J2": "J2",
  /** Physical pin J3: DQ6; bidirectional. */
  "DQ6": "J3",
  /** Physical pin J7: DQ7; bidirectional. */
  "DQ7": "J7",
  /** Physical pin J8: V_{DDQ}; passive. */
  "V_{DDQ}_J8": "J8",
  /** Physical pin J9: V_{DD}; passive. */
  "V_{DD}_J9": "J9",
  /** Physical pin K1: V_{SS}; passive. */
  "V_{SS}_K1": "K1",
  /** Physical pin K2: CKE; input. */
  "CKE": "K2",
  /** Physical pin K3: ODT; input. */
  "ODT": "K3",
  /** Physical pin K7: CK_t; input. */
  "CK_t": "K7",
  /** Physical pin K8: CK_c; input. */
  "CK_c": "K8",
  /** Physical pin K9: V_{SS}; passive. */
  "V_{SS}_K9": "K9",
  /** Physical pin L1: V_{DD}; passive. */
  "V_{DD}_L1": "L1",
  /** Physical pin L2: A14/~{WE}; input. */
  "A14/~{WE}": "L2",
  /** Physical pin L3: ~{ACT}; input. */
  "~{ACT}": "L3",
  /** Physical pin L7: ~{CS}; input. */
  "~{CS}": "L7",
  /** Physical pin L8: A16/~{RAS}; input. */
  "A16/~{RAS}": "L8",
  /** Physical pin L9: V_{DD}; passive. */
  "V_{DD}_L9": "L9",
  /** Physical pin M1: V_{REFCA}; passive. */
  "V_{REFCA}": "M1",
  /** Physical pin M2: BG0; input. */
  "BG0": "M2",
  /** Physical pin M3: A10/AP; input. */
  "A10/AP": "M3",
  /** Physical pin M7: A12/~{BC}; input. */
  "A12/~{BC}": "M7",
  /** Physical pin M8: A15/~{CAS}; input. */
  "A15/~{CAS}": "M8",
  /** Physical pin M9: V_{SS}; passive. */
  "V_{SS}_M9": "M9",
  /** Physical pin N1: V_{SS}; passive. */
  "V_{SS}_N1": "N1",
  /** Physical pin N2: BA0; input. */
  "BA0": "N2",
  /** Physical pin N3: A4; input. */
  "A4": "N3",
  /** Physical pin N7: A3; input. */
  "A3": "N7",
  /** Physical pin N8: BA1; input. */
  "BA1": "N8",
  /** Physical pin N9: TEN; input. */
  "TEN": "N9",
  /** Physical pin P1: ~{RESET}; input. */
  "~{RESET}": "P1",
  /** Physical pin P2: A6; input. */
  "A6": "P2",
  /** Physical pin P3: A0; input. */
  "A0": "P3",
  /** Physical pin P7: A1; input. */
  "A1": "P7",
  /** Physical pin P8: A5; input. */
  "A5": "P8",
  /** Physical pin P9: ~{ALERT}; open_collector. */
  "~{ALERT}": "P9",
  /** Physical pin R1: V_{DD}; passive. */
  "V_{DD}_R1": "R1",
  /** Physical pin R2: A8; input. */
  "A8": "R2",
  /** Physical pin R3: A2; input. */
  "A2": "R3",
  /** Physical pin R7: A9; input. */
  "A9": "R7",
  /** Physical pin R8: A7; input. */
  "A7": "R8",
  /** Physical pin R9: V_{PP}; passive. */
  "V_{PP}_R9": "R9",
  /** Physical pin T1: V_{SS}; passive. */
  "V_{SS}_T1": "T1",
  /** Physical pin T2: A11; input. */
  "A11": "T2",
  /** Physical pin T3: PAR; input. */
  "PAR": "T3",
  /** Physical pin T7: NF/NC; no_connect. */
  "NF/NC": "T7",
  /** Physical pin T8: A13; input. */
  "A13": "T8",
  /** Physical pin T9: V_{DD}; passive. */
  "V_{DD}_T9": "T9",
}) {
  override schema = "Memory_RAM:MT40A512M16LY";
  override referencePrefix = "U";
}

/**
 * 512M x 16-bit (8 Gbit) CMOS Double Data Rate IV Synchronous RAM, Rev. J / R, FBGA-96
 *
 * KiCad symbol: `Memory_RAM:MT40A512M16TB`. Reference prefix: `U`.
 * Footprint filters: *FBGA*7.5x13mm*Layout9x16*P0.8mm*.
 * @see https://eu.mouser.com/datasheet/2/671/8gb_ddr4_sdram-3178955.pdf
 * Keywords: DDR4 DRAM SDRAM x16 MEMORY.
 * Default footprint: Package_BGA:FBGA-96_7.5x13mm_Layout9x16_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT40A512M16TB extends Component.withPins({
  /** Physical pin A1: V_{DDQ}; power_in. */
  "V_{DDQ}_A1": "A1",
  /** Physical pin A2: V_{SSQ}; power_in. */
  "V_{SSQ}_A2": "A2",
  /** Physical pin A3: DQ8; bidirectional. */
  "DQ8": "A3",
  /** Physical pin A7: UDQS_c; bidirectional. */
  "UDQS_c": "A7",
  /** Physical pin A8: V_{SSQ}; passive. */
  "V_{SSQ}_A8": "A8",
  /** Physical pin A9: V_{DDQ}; passive. */
  "V_{DDQ}_A9": "A9",
  /** Physical pin B1: V_{PP}; power_in. */
  "V_{PP}_B1": "B1",
  /** Physical pin B2: V_{SS}; power_in. */
  "V_{SS}_B2": "B2",
  /** Physical pin B3: V_{DD}; passive. */
  "V_{DD}_B3": "B3",
  /** Physical pin B7: UDQS_t; bidirectional. */
  "UDQS_t": "B7",
  /** Physical pin B8: DQ9; bidirectional. */
  "DQ9": "B8",
  /** Physical pin B9: V_{DD}; power_in. */
  "V_{DD}_B9": "B9",
  /** Physical pin C1: V_{DDQ}; passive. */
  "V_{DDQ}_C1": "C1",
  /** Physical pin C2: DQ12; bidirectional. */
  "DQ12": "C2",
  /** Physical pin C3: DQ10; bidirectional. */
  "DQ10": "C3",
  /** Physical pin C7: DQ11; bidirectional. */
  "DQ11": "C7",
  /** Physical pin C8: DQ13; bidirectional. */
  "DQ13": "C8",
  /** Physical pin C9: V_{SSQ}; passive. */
  "V_{SSQ}_C9": "C9",
  /** Physical pin D1: V_{DD}; passive. */
  "V_{DD}_D1": "D1",
  /** Physical pin D2: V_{SSQ}; passive. */
  "V_{SSQ}_D2": "D2",
  /** Physical pin D3: DQ14; bidirectional. */
  "DQ14": "D3",
  /** Physical pin D7: DQ15; bidirectional. */
  "DQ15": "D7",
  /** Physical pin D8: V_{SSQ}; passive. */
  "V_{SSQ}_D8": "D8",
  /** Physical pin D9: V_{DDQ}; passive. */
  "V_{DDQ}_D9": "D9",
  /** Physical pin E1: V_{SS}; passive. */
  "V_{SS}_E1": "E1",
  /** Physical pin E2: NF/~{UDM}/~{UDBI}; bidirectional. */
  "NF/~{UDM}/~{UDBI}": "E2",
  /** Physical pin E3: V_{SSQ}; passive. */
  "V_{SSQ}_E3": "E3",
  /** Physical pin E7: NF/~{LDM}/~{LDBI}; bidirectional. */
  "NF/~{LDM}/~{LDBI}": "E7",
  /** Physical pin E8: V_{SSQ}; passive. */
  "V_{SSQ}_E8": "E8",
  /** Physical pin E9: V_{SS}; passive. */
  "V_{SS}_E9": "E9",
  /** Physical pin F1: V_{SSQ}; passive. */
  "V_{SSQ}_F1": "F1",
  /** Physical pin F2: V_{DDQ}; passive. */
  "V_{DDQ}_F2": "F2",
  /** Physical pin F3: LDQS_c; bidirectional. */
  "LDQS_c": "F3",
  /** Physical pin F7: DQ1; bidirectional. */
  "DQ1": "F7",
  /** Physical pin F8: V_{DDQ}; passive. */
  "V_{DDQ}_F8": "F8",
  /** Physical pin F9: ZQ; passive. */
  "ZQ": "F9",
  /** Physical pin G1: V_{DDQ}; passive. */
  "V_{DDQ}_G1": "G1",
  /** Physical pin G2: DQ0; bidirectional. */
  "DQ0": "G2",
  /** Physical pin G3: LDQS_t; bidirectional. */
  "LDQS_t": "G3",
  /** Physical pin G7: V_{DD}; passive. */
  "V_{DD}_G7": "G7",
  /** Physical pin G8: V_{SS}; passive. */
  "V_{SS}_G8": "G8",
  /** Physical pin G9: V_{DDQ}; passive. */
  "V_{DDQ}_G9": "G9",
  /** Physical pin H1: V_{SSQ}; passive. */
  "V_{SSQ}_H1": "H1",
  /** Physical pin H2: DQ4; bidirectional. */
  "DQ4": "H2",
  /** Physical pin H3: DQ2; bidirectional. */
  "DQ2": "H3",
  /** Physical pin H7: DQ3; bidirectional. */
  "DQ3": "H7",
  /** Physical pin H8: DQ5; bidirectional. */
  "DQ5": "H8",
  /** Physical pin H9: V_{SSQ}; passive. */
  "V_{SSQ}_H9": "H9",
  /** Physical pin J1: V_{DD}; passive. */
  "V_{DD}_J1": "J1",
  /** Physical pin J2: V_{DDQ}; passive. */
  "V_{DDQ}_J2": "J2",
  /** Physical pin J3: DQ6; bidirectional. */
  "DQ6": "J3",
  /** Physical pin J7: DQ7; bidirectional. */
  "DQ7": "J7",
  /** Physical pin J8: V_{DDQ}; passive. */
  "V_{DDQ}_J8": "J8",
  /** Physical pin J9: V_{DD}; passive. */
  "V_{DD}_J9": "J9",
  /** Physical pin K1: V_{SS}; passive. */
  "V_{SS}_K1": "K1",
  /** Physical pin K2: CKE; input. */
  "CKE": "K2",
  /** Physical pin K3: ODT; input. */
  "ODT": "K3",
  /** Physical pin K7: CK_t; input. */
  "CK_t": "K7",
  /** Physical pin K8: CK_c; input. */
  "CK_c": "K8",
  /** Physical pin K9: V_{SS}; passive. */
  "V_{SS}_K9": "K9",
  /** Physical pin L1: V_{DD}; passive. */
  "V_{DD}_L1": "L1",
  /** Physical pin L2: A14/~{WE}; input. */
  "A14/~{WE}": "L2",
  /** Physical pin L3: ~{ACT}; input. */
  "~{ACT}": "L3",
  /** Physical pin L7: ~{CS}; input. */
  "~{CS}": "L7",
  /** Physical pin L8: A16/~{RAS}; input. */
  "A16/~{RAS}": "L8",
  /** Physical pin L9: V_{DD}; passive. */
  "V_{DD}_L9": "L9",
  /** Physical pin M1: V_{REFCA}; passive. */
  "V_{REFCA}": "M1",
  /** Physical pin M2: BG0; input. */
  "BG0": "M2",
  /** Physical pin M3: A10/AP; input. */
  "A10/AP": "M3",
  /** Physical pin M7: A12/~{BC}; input. */
  "A12/~{BC}": "M7",
  /** Physical pin M8: A15/~{CAS}; input. */
  "A15/~{CAS}": "M8",
  /** Physical pin M9: V_{SS}; passive. */
  "V_{SS}_M9": "M9",
  /** Physical pin N1: V_{SS}; passive. */
  "V_{SS}_N1": "N1",
  /** Physical pin N2: BA0; input. */
  "BA0": "N2",
  /** Physical pin N3: A4; input. */
  "A4": "N3",
  /** Physical pin N7: A3; input. */
  "A3": "N7",
  /** Physical pin N8: BA1; input. */
  "BA1": "N8",
  /** Physical pin N9: TEN; input. */
  "TEN": "N9",
  /** Physical pin P1: ~{RESET}; input. */
  "~{RESET}": "P1",
  /** Physical pin P2: A6; input. */
  "A6": "P2",
  /** Physical pin P3: A0; input. */
  "A0": "P3",
  /** Physical pin P7: A1; input. */
  "A1": "P7",
  /** Physical pin P8: A5; input. */
  "A5": "P8",
  /** Physical pin P9: ~{ALERT}; open_collector. */
  "~{ALERT}": "P9",
  /** Physical pin R1: V_{DD}; passive. */
  "V_{DD}_R1": "R1",
  /** Physical pin R2: A8; input. */
  "A8": "R2",
  /** Physical pin R3: A2; input. */
  "A2": "R3",
  /** Physical pin R7: A9; input. */
  "A9": "R7",
  /** Physical pin R8: A7; input. */
  "A7": "R8",
  /** Physical pin R9: V_{PP}; passive. */
  "V_{PP}_R9": "R9",
  /** Physical pin T1: V_{SS}; passive. */
  "V_{SS}_T1": "T1",
  /** Physical pin T2: A11; input. */
  "A11": "T2",
  /** Physical pin T3: PAR; input. */
  "PAR": "T3",
  /** Physical pin T7: NF/NC; no_connect. */
  "NF/NC": "T7",
  /** Physical pin T8: A13; input. */
  "A13": "T8",
  /** Physical pin T9: V_{DD}; passive. */
  "V_{DD}_T9": "T9",
}) {
  override schema = "Memory_RAM:MT40A512M16TB";
  override referencePrefix = "U";
}

/**
 * 32M x 16-bit x 8 Banks (4-Gbit / 512 MB) DDR3L SDRAM, 1.35V nominal supply voltage, Rev. N, FBGA-96 (7.5x13.5mm)
 *
 * KiCad symbol: `Memory_RAM:MT41K256M16LY`. Reference prefix: `U`.
 * Footprint filters: Micron*FBGA*7.5x13.5mm*Layout9x16*P0.8mm*.
 * @see https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/6128/MT41K1G4_MT41K512M8_MT41K256M16_RevR_Sep2018.pdf
 * Keywords: Micron MEMORY Double-Data-Rate-3 Low-Voltage-Synchronous-DRAM.
 * Default footprint: Package_BGA:Micron_FBGA-96_7.5x13.5mm_Layout9x16_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT41K256M16LY extends Component.withPins({
  /** Physical pin A2: DQ13; bidirectional. */
  "DQ13": "A2",
  /** Physical pin A3: DQ15; bidirectional. */
  "DQ15": "A3",
  /** Physical pin A7: DQ12; bidirectional. */
  "DQ12": "A7",
  /** Physical pin A8: V_{DDQ}; passive. */
  "V_{DDQ}_A8": "A8",
  /** Physical pin A9: V_{SS}; passive. */
  "V_{SS}_A9": "A9",
  /** Physical pin B2: V_{DD}; passive. */
  "V_{DD}_B2": "B2",
  /** Physical pin B3: V_{SS}; passive. */
  "V_{SS}_B3": "B3",
  /** Physical pin B8: DQ14; bidirectional. */
  "DQ14": "B8",
  /** Physical pin B9: V_{SSQ}; passive. */
  "V_{SSQ}_B9": "B9",
  /** Physical pin C1: V_{DDQ}; passive. */
  "V_{DDQ}_C1": "C1",
  /** Physical pin C2: DQ11; bidirectional. */
  "DQ11": "C2",
  /** Physical pin C3: DQ9; bidirectional. */
  "DQ9": "C3",
  /** Physical pin C7: UDQS; bidirectional. */
  "UDQS": "C7",
  /** Physical pin C8: DQ10; bidirectional. */
  "DQ10": "C8",
  /** Physical pin C9: V_{DDQ}; passive. */
  "V_{DDQ}_C9": "C9",
  /** Physical pin D1: V_{SSQ}; passive. */
  "V_{SSQ}_D1": "D1",
  /** Physical pin D2: V_{DDQ}; passive. */
  "V_{DDQ}_D2": "D2",
  /** Physical pin D3: UDM; input. */
  "UDM": "D3",
  /** Physical pin D7: DQ8; bidirectional. */
  "DQ8": "D7",
  /** Physical pin D8: V_{SSQ}; passive. */
  "V_{SSQ}_D8": "D8",
  /** Physical pin D9: V_{DD}; passive. */
  "V_{DD}_D9": "D9",
  /** Physical pin E2: V_{SSQ}; passive. */
  "V_{SSQ}_E2": "E2",
  /** Physical pin E3: DQ0; bidirectional. */
  "DQ0": "E3",
  /** Physical pin E7: LDM; input. */
  "LDM": "E7",
  /** Physical pin E8: V_{SSQ}; passive. */
  "V_{SSQ}_E8": "E8",
  /** Physical pin E9: V_{DDQ}; passive. */
  "V_{DDQ}_E9": "E9",
  /** Physical pin F1: V_{DDQ}; passive. */
  "V_{DDQ}_F1": "F1",
  /** Physical pin F2: DQ2; bidirectional. */
  "DQ2": "F2",
  /** Physical pin F3: LDQS; bidirectional. */
  "LDQS": "F3",
  /** Physical pin F7: DQ1; bidirectional. */
  "DQ1": "F7",
  /** Physical pin F8: DQ3; bidirectional. */
  "DQ3": "F8",
  /** Physical pin F9: V_{SSQ}; passive. */
  "V_{SSQ}_F9": "F9",
  /** Physical pin G1: V_{SSQ}; passive. */
  "V_{SSQ}_G1": "G1",
  /** Physical pin G2: DQ6; bidirectional. */
  "DQ6": "G2",
  /** Physical pin G7: V_{DD}; passive. */
  "V_{DD}_G7": "G7",
  /** Physical pin G8: V_{SS}; passive. */
  "V_{SS}_G8": "G8",
  /** Physical pin G9: V_{SSQ}; passive. */
  "V_{SSQ}_G9": "G9",
  /** Physical pin H1: V_{REFDQ}; passive. */
  "V_{REFDQ}": "H1",
  /** Physical pin H2: V_{DDQ}; passive. */
  "V_{DDQ}_H2": "H2",
  /** Physical pin H3: DQ4; bidirectional. */
  "DQ4": "H3",
  /** Physical pin H7: DQ7; bidirectional. */
  "DQ7": "H7",
  /** Physical pin H8: DQ5; bidirectional. */
  "DQ5": "H8",
  /** Physical pin H9: V_{DDQ}; passive. */
  "V_{DDQ}_H9": "H9",
  /** Physical pin J1: NC; no_connect. */
  "NC_J1": "J1",
  /** Physical pin J2: V_{SS}; passive. */
  "V_{SS}_J2": "J2",
  /** Physical pin J7: CK; input. */
  "CK": "J7",
  /** Physical pin J8: V_{SS}; passive. */
  "V_{SS}_J8": "J8",
  /** Physical pin J9: NC; no_connect. */
  "NC_J9": "J9",
  /** Physical pin K1: ODT; input. */
  "ODT": "K1",
  /** Physical pin K2: V_{DD}; passive. */
  "V_{DD}_K2": "K2",
  /** Physical pin K8: V_{DD}; passive. */
  "V_{DD}_K8": "K8",
  /** Physical pin K9: CKE; input. */
  "CKE": "K9",
  /** Physical pin L1: NC; no_connect. */
  "NC_L1": "L1",
  /** Physical pin L7: A10/AP; input. */
  "A10/AP": "L7",
  /** Physical pin L8: ZQ; passive. */
  "ZQ": "L8",
  /** Physical pin L9: NC; no_connect. */
  "NC_L9": "L9",
  /** Physical pin M1: V_{SS}; passive. */
  "V_{SS}_M1": "M1",
  /** Physical pin M2: BA0; input. */
  "BA0": "M2",
  /** Physical pin M3: BA2; input. */
  "BA2": "M3",
  /** Physical pin M7: NC; no_connect. */
  "NC_M7": "M7",
  /** Physical pin M8: V_{REFCA}; passive. */
  "V_{REFCA}": "M8",
  /** Physical pin M9: V_{SS}; passive. */
  "V_{SS}_M9": "M9",
  /** Physical pin N2: A3; input. */
  "A3": "N2",
  /** Physical pin N3: A0; input. */
  "A0": "N3",
  /** Physical pin N8: BA1; input. */
  "BA1": "N8",
  /** Physical pin N9: V_{DD}; passive. */
  "V_{DD}_N9": "N9",
  /** Physical pin P1: V_{SS}; passive. */
  "V_{SS}_P1": "P1",
  /** Physical pin P2: A5; input. */
  "A5": "P2",
  /** Physical pin P3: A2; input. */
  "A2": "P3",
  /** Physical pin P7: A1; input. */
  "A1": "P7",
  /** Physical pin P8: A4; input. */
  "A4": "P8",
  /** Physical pin P9: V_{SS}; passive. */
  "V_{SS}_P9": "P9",
  /** Physical pin R1: V_{DD}; passive. */
  "V_{DD}_R1": "R1",
  /** Physical pin R2: A7; input. */
  "A7": "R2",
  /** Physical pin R3: A9; input. */
  "A9": "R3",
  /** Physical pin R7: A11; input. */
  "A11": "R7",
  /** Physical pin R8: A6; input. */
  "A6": "R8",
  /** Physical pin R9: V_{DD}; passive. */
  "V_{DD}_R9": "R9",
  /** Physical pin T1: V_{SS}; passive. */
  "V_{SS}_T1": "T1",
  /** Physical pin T3: A13; input. */
  "A13": "T3",
  /** Physical pin T7: A14; input. */
  "A14": "T7",
  /** Physical pin T8: A8; input. */
  "A8": "T8",
  /** Physical pin T9: V_{SS}; passive. */
  "V_{SS}_T9": "T9",
  /** Physical pin A1: V_{DDQ}; power_in. */
  "V_{DDQ}_A1": "A1",
  /** Physical pin B1: V_{SSQ}; power_in. */
  "V_{SSQ}_B1": "B1",
  /** Physical pin B7: ~{UDQS}; bidirectional. */
  "~{UDQS}": "B7",
  /** Physical pin E1: V_{SS}; power_in. */
  "V_{SS}_E1": "E1",
  /** Physical pin G3: ~{LDQS}; bidirectional. */
  "~{LDQS}": "G3",
  /** Physical pin J3: ~{RAS}; input. */
  "~{RAS}": "J3",
  /** Physical pin K3: ~{CAS}; input. */
  "~{CAS}": "K3",
  /** Physical pin K7: ~{CK}; input. */
  "~{CK}": "K7",
  /** Physical pin L2: ~{CS}; input. */
  "~{CS}": "L2",
  /** Physical pin L3: ~{WE}; input. */
  "~{WE}": "L3",
  /** Physical pin N1: V_{DD}; power_in. */
  "V_{DD}_N1": "N1",
  /** Physical pin N7: A12/~{BC}; input. */
  "A12/~{BC}": "N7",
  /** Physical pin T2: ~{RESET}; input. */
  "~{RESET}": "T2",
}) {
  override schema = "Memory_RAM:MT41K256M16LY";
  override referencePrefix = "U";
}

/**
 * 32M x 16-bit x 8 Banks (4-Gbit / 512 MB) DDR3L SDRAM, 1.35V nominal supply voltage, Rev. E, FBGA-96 (9x14mm)
 *
 * KiCad symbol: `Memory_RAM:MT41K256M16HA`. Reference prefix: `U`.
 * Footprint filters: Micron*FBGA*9x14mm*Layout9x16*P0.8mm*.
 * @see https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/6128/MT41K1G4_MT41K512M8_MT41K256M16_RevR_Sep2018.pdf
 * Keywords: Micron MEMORY Double-Data-Rate-3 Low-Voltage-Synchronous-DRAM.
 * Default footprint: Package_BGA:Micron_FBGA-96_9x14mm_Layout9x16_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT41K256M16HA extends Component.withPins({
  /** Physical pin A2: DQ13; bidirectional. */
  "DQ13": "A2",
  /** Physical pin A3: DQ15; bidirectional. */
  "DQ15": "A3",
  /** Physical pin A7: DQ12; bidirectional. */
  "DQ12": "A7",
  /** Physical pin A8: V_{DDQ}; passive. */
  "V_{DDQ}_A8": "A8",
  /** Physical pin A9: V_{SS}; passive. */
  "V_{SS}_A9": "A9",
  /** Physical pin B2: V_{DD}; passive. */
  "V_{DD}_B2": "B2",
  /** Physical pin B3: V_{SS}; passive. */
  "V_{SS}_B3": "B3",
  /** Physical pin B8: DQ14; bidirectional. */
  "DQ14": "B8",
  /** Physical pin B9: V_{SSQ}; passive. */
  "V_{SSQ}_B9": "B9",
  /** Physical pin C1: V_{DDQ}; passive. */
  "V_{DDQ}_C1": "C1",
  /** Physical pin C2: DQ11; bidirectional. */
  "DQ11": "C2",
  /** Physical pin C3: DQ9; bidirectional. */
  "DQ9": "C3",
  /** Physical pin C7: UDQS; bidirectional. */
  "UDQS": "C7",
  /** Physical pin C8: DQ10; bidirectional. */
  "DQ10": "C8",
  /** Physical pin C9: V_{DDQ}; passive. */
  "V_{DDQ}_C9": "C9",
  /** Physical pin D1: V_{SSQ}; passive. */
  "V_{SSQ}_D1": "D1",
  /** Physical pin D2: V_{DDQ}; passive. */
  "V_{DDQ}_D2": "D2",
  /** Physical pin D3: UDM; input. */
  "UDM": "D3",
  /** Physical pin D7: DQ8; bidirectional. */
  "DQ8": "D7",
  /** Physical pin D8: V_{SSQ}; passive. */
  "V_{SSQ}_D8": "D8",
  /** Physical pin D9: V_{DD}; passive. */
  "V_{DD}_D9": "D9",
  /** Physical pin E2: V_{SSQ}; passive. */
  "V_{SSQ}_E2": "E2",
  /** Physical pin E3: DQ0; bidirectional. */
  "DQ0": "E3",
  /** Physical pin E7: LDM; input. */
  "LDM": "E7",
  /** Physical pin E8: V_{SSQ}; passive. */
  "V_{SSQ}_E8": "E8",
  /** Physical pin E9: V_{DDQ}; passive. */
  "V_{DDQ}_E9": "E9",
  /** Physical pin F1: V_{DDQ}; passive. */
  "V_{DDQ}_F1": "F1",
  /** Physical pin F2: DQ2; bidirectional. */
  "DQ2": "F2",
  /** Physical pin F3: LDQS; bidirectional. */
  "LDQS": "F3",
  /** Physical pin F7: DQ1; bidirectional. */
  "DQ1": "F7",
  /** Physical pin F8: DQ3; bidirectional. */
  "DQ3": "F8",
  /** Physical pin F9: V_{SSQ}; passive. */
  "V_{SSQ}_F9": "F9",
  /** Physical pin G1: V_{SSQ}; passive. */
  "V_{SSQ}_G1": "G1",
  /** Physical pin G2: DQ6; bidirectional. */
  "DQ6": "G2",
  /** Physical pin G7: V_{DD}; passive. */
  "V_{DD}_G7": "G7",
  /** Physical pin G8: V_{SS}; passive. */
  "V_{SS}_G8": "G8",
  /** Physical pin G9: V_{SSQ}; passive. */
  "V_{SSQ}_G9": "G9",
  /** Physical pin H1: V_{REFDQ}; passive. */
  "V_{REFDQ}": "H1",
  /** Physical pin H2: V_{DDQ}; passive. */
  "V_{DDQ}_H2": "H2",
  /** Physical pin H3: DQ4; bidirectional. */
  "DQ4": "H3",
  /** Physical pin H7: DQ7; bidirectional. */
  "DQ7": "H7",
  /** Physical pin H8: DQ5; bidirectional. */
  "DQ5": "H8",
  /** Physical pin H9: V_{DDQ}; passive. */
  "V_{DDQ}_H9": "H9",
  /** Physical pin J1: NC; no_connect. */
  "NC_J1": "J1",
  /** Physical pin J2: V_{SS}; passive. */
  "V_{SS}_J2": "J2",
  /** Physical pin J7: CK; input. */
  "CK": "J7",
  /** Physical pin J8: V_{SS}; passive. */
  "V_{SS}_J8": "J8",
  /** Physical pin J9: NC; no_connect. */
  "NC_J9": "J9",
  /** Physical pin K1: ODT; input. */
  "ODT": "K1",
  /** Physical pin K2: V_{DD}; passive. */
  "V_{DD}_K2": "K2",
  /** Physical pin K8: V_{DD}; passive. */
  "V_{DD}_K8": "K8",
  /** Physical pin K9: CKE; input. */
  "CKE": "K9",
  /** Physical pin L1: NC; no_connect. */
  "NC_L1": "L1",
  /** Physical pin L7: A10/AP; input. */
  "A10/AP": "L7",
  /** Physical pin L8: ZQ; passive. */
  "ZQ": "L8",
  /** Physical pin L9: NC; no_connect. */
  "NC_L9": "L9",
  /** Physical pin M1: V_{SS}; passive. */
  "V_{SS}_M1": "M1",
  /** Physical pin M2: BA0; input. */
  "BA0": "M2",
  /** Physical pin M3: BA2; input. */
  "BA2": "M3",
  /** Physical pin M7: NC; no_connect. */
  "NC_M7": "M7",
  /** Physical pin M8: V_{REFCA}; passive. */
  "V_{REFCA}": "M8",
  /** Physical pin M9: V_{SS}; passive. */
  "V_{SS}_M9": "M9",
  /** Physical pin N2: A3; input. */
  "A3": "N2",
  /** Physical pin N3: A0; input. */
  "A0": "N3",
  /** Physical pin N8: BA1; input. */
  "BA1": "N8",
  /** Physical pin N9: V_{DD}; passive. */
  "V_{DD}_N9": "N9",
  /** Physical pin P1: V_{SS}; passive. */
  "V_{SS}_P1": "P1",
  /** Physical pin P2: A5; input. */
  "A5": "P2",
  /** Physical pin P3: A2; input. */
  "A2": "P3",
  /** Physical pin P7: A1; input. */
  "A1": "P7",
  /** Physical pin P8: A4; input. */
  "A4": "P8",
  /** Physical pin P9: V_{SS}; passive. */
  "V_{SS}_P9": "P9",
  /** Physical pin R1: V_{DD}; passive. */
  "V_{DD}_R1": "R1",
  /** Physical pin R2: A7; input. */
  "A7": "R2",
  /** Physical pin R3: A9; input. */
  "A9": "R3",
  /** Physical pin R7: A11; input. */
  "A11": "R7",
  /** Physical pin R8: A6; input. */
  "A6": "R8",
  /** Physical pin R9: V_{DD}; passive. */
  "V_{DD}_R9": "R9",
  /** Physical pin T1: V_{SS}; passive. */
  "V_{SS}_T1": "T1",
  /** Physical pin T3: A13; input. */
  "A13": "T3",
  /** Physical pin T7: A14; input. */
  "A14": "T7",
  /** Physical pin T8: A8; input. */
  "A8": "T8",
  /** Physical pin T9: V_{SS}; passive. */
  "V_{SS}_T9": "T9",
  /** Physical pin A1: V_{DDQ}; power_in. */
  "V_{DDQ}_A1": "A1",
  /** Physical pin B1: V_{SSQ}; power_in. */
  "V_{SSQ}_B1": "B1",
  /** Physical pin B7: ~{UDQS}; bidirectional. */
  "~{UDQS}": "B7",
  /** Physical pin E1: V_{SS}; power_in. */
  "V_{SS}_E1": "E1",
  /** Physical pin G3: ~{LDQS}; bidirectional. */
  "~{LDQS}": "G3",
  /** Physical pin J3: ~{RAS}; input. */
  "~{RAS}": "J3",
  /** Physical pin K3: ~{CAS}; input. */
  "~{CAS}": "K3",
  /** Physical pin K7: ~{CK}; input. */
  "~{CK}": "K7",
  /** Physical pin L2: ~{CS}; input. */
  "~{CS}": "L2",
  /** Physical pin L3: ~{WE}; input. */
  "~{WE}": "L3",
  /** Physical pin N1: V_{DD}; power_in. */
  "V_{DD}_N1": "N1",
  /** Physical pin N7: A12/~{BC}; input. */
  "A12/~{BC}": "N7",
  /** Physical pin T2: ~{RESET}; input. */
  "~{RESET}": "T2",
}) {
  override schema = "Memory_RAM:MT41K256M16HA";
  override referencePrefix = "U";
}

/**
 * 32M x 16-bit x 8 Banks (4-Gbit / 512 MB) DDR3L SDRAM, 1.35V nominal supply voltage, Rev. P, FBGA-96 (8x14mm)
 *
 * KiCad symbol: `Memory_RAM:MT41K256M16TW`. Reference prefix: `U`.
 * Footprint filters: Micron*FBGA*8x14mm*Layout9x16*P0.8mm*.
 * @see https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/6128/MT41K1G4_MT41K512M8_MT41K256M16_RevR_Sep2018.pdf
 * Keywords: Micron MEMORY Double-Data-Rate-3 Low-Voltage-Synchronous-DRAM.
 * Default footprint: Package_BGA:Micron_FBGA-96_8x14mm_Layout9x16_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT41K256M16TW extends Component.withPins({
  /** Physical pin A2: DQ13; bidirectional. */
  "DQ13": "A2",
  /** Physical pin A3: DQ15; bidirectional. */
  "DQ15": "A3",
  /** Physical pin A7: DQ12; bidirectional. */
  "DQ12": "A7",
  /** Physical pin A8: V_{DDQ}; passive. */
  "V_{DDQ}_A8": "A8",
  /** Physical pin A9: V_{SS}; passive. */
  "V_{SS}_A9": "A9",
  /** Physical pin B2: V_{DD}; passive. */
  "V_{DD}_B2": "B2",
  /** Physical pin B3: V_{SS}; passive. */
  "V_{SS}_B3": "B3",
  /** Physical pin B8: DQ14; bidirectional. */
  "DQ14": "B8",
  /** Physical pin B9: V_{SSQ}; passive. */
  "V_{SSQ}_B9": "B9",
  /** Physical pin C1: V_{DDQ}; passive. */
  "V_{DDQ}_C1": "C1",
  /** Physical pin C2: DQ11; bidirectional. */
  "DQ11": "C2",
  /** Physical pin C3: DQ9; bidirectional. */
  "DQ9": "C3",
  /** Physical pin C7: UDQS; bidirectional. */
  "UDQS": "C7",
  /** Physical pin C8: DQ10; bidirectional. */
  "DQ10": "C8",
  /** Physical pin C9: V_{DDQ}; passive. */
  "V_{DDQ}_C9": "C9",
  /** Physical pin D1: V_{SSQ}; passive. */
  "V_{SSQ}_D1": "D1",
  /** Physical pin D2: V_{DDQ}; passive. */
  "V_{DDQ}_D2": "D2",
  /** Physical pin D3: UDM; input. */
  "UDM": "D3",
  /** Physical pin D7: DQ8; bidirectional. */
  "DQ8": "D7",
  /** Physical pin D8: V_{SSQ}; passive. */
  "V_{SSQ}_D8": "D8",
  /** Physical pin D9: V_{DD}; passive. */
  "V_{DD}_D9": "D9",
  /** Physical pin E2: V_{SSQ}; passive. */
  "V_{SSQ}_E2": "E2",
  /** Physical pin E3: DQ0; bidirectional. */
  "DQ0": "E3",
  /** Physical pin E7: LDM; input. */
  "LDM": "E7",
  /** Physical pin E8: V_{SSQ}; passive. */
  "V_{SSQ}_E8": "E8",
  /** Physical pin E9: V_{DDQ}; passive. */
  "V_{DDQ}_E9": "E9",
  /** Physical pin F1: V_{DDQ}; passive. */
  "V_{DDQ}_F1": "F1",
  /** Physical pin F2: DQ2; bidirectional. */
  "DQ2": "F2",
  /** Physical pin F3: LDQS; bidirectional. */
  "LDQS": "F3",
  /** Physical pin F7: DQ1; bidirectional. */
  "DQ1": "F7",
  /** Physical pin F8: DQ3; bidirectional. */
  "DQ3": "F8",
  /** Physical pin F9: V_{SSQ}; passive. */
  "V_{SSQ}_F9": "F9",
  /** Physical pin G1: V_{SSQ}; passive. */
  "V_{SSQ}_G1": "G1",
  /** Physical pin G2: DQ6; bidirectional. */
  "DQ6": "G2",
  /** Physical pin G7: V_{DD}; passive. */
  "V_{DD}_G7": "G7",
  /** Physical pin G8: V_{SS}; passive. */
  "V_{SS}_G8": "G8",
  /** Physical pin G9: V_{SSQ}; passive. */
  "V_{SSQ}_G9": "G9",
  /** Physical pin H1: V_{REFDQ}; passive. */
  "V_{REFDQ}": "H1",
  /** Physical pin H2: V_{DDQ}; passive. */
  "V_{DDQ}_H2": "H2",
  /** Physical pin H3: DQ4; bidirectional. */
  "DQ4": "H3",
  /** Physical pin H7: DQ7; bidirectional. */
  "DQ7": "H7",
  /** Physical pin H8: DQ5; bidirectional. */
  "DQ5": "H8",
  /** Physical pin H9: V_{DDQ}; passive. */
  "V_{DDQ}_H9": "H9",
  /** Physical pin J1: NC; no_connect. */
  "NC_J1": "J1",
  /** Physical pin J2: V_{SS}; passive. */
  "V_{SS}_J2": "J2",
  /** Physical pin J7: CK; input. */
  "CK": "J7",
  /** Physical pin J8: V_{SS}; passive. */
  "V_{SS}_J8": "J8",
  /** Physical pin J9: NC; no_connect. */
  "NC_J9": "J9",
  /** Physical pin K1: ODT; input. */
  "ODT": "K1",
  /** Physical pin K2: V_{DD}; passive. */
  "V_{DD}_K2": "K2",
  /** Physical pin K8: V_{DD}; passive. */
  "V_{DD}_K8": "K8",
  /** Physical pin K9: CKE; input. */
  "CKE": "K9",
  /** Physical pin L1: NC; no_connect. */
  "NC_L1": "L1",
  /** Physical pin L7: A10/AP; input. */
  "A10/AP": "L7",
  /** Physical pin L8: ZQ; passive. */
  "ZQ": "L8",
  /** Physical pin L9: NC; no_connect. */
  "NC_L9": "L9",
  /** Physical pin M1: V_{SS}; passive. */
  "V_{SS}_M1": "M1",
  /** Physical pin M2: BA0; input. */
  "BA0": "M2",
  /** Physical pin M3: BA2; input. */
  "BA2": "M3",
  /** Physical pin M7: NC; no_connect. */
  "NC_M7": "M7",
  /** Physical pin M8: V_{REFCA}; passive. */
  "V_{REFCA}": "M8",
  /** Physical pin M9: V_{SS}; passive. */
  "V_{SS}_M9": "M9",
  /** Physical pin N2: A3; input. */
  "A3": "N2",
  /** Physical pin N3: A0; input. */
  "A0": "N3",
  /** Physical pin N8: BA1; input. */
  "BA1": "N8",
  /** Physical pin N9: V_{DD}; passive. */
  "V_{DD}_N9": "N9",
  /** Physical pin P1: V_{SS}; passive. */
  "V_{SS}_P1": "P1",
  /** Physical pin P2: A5; input. */
  "A5": "P2",
  /** Physical pin P3: A2; input. */
  "A2": "P3",
  /** Physical pin P7: A1; input. */
  "A1": "P7",
  /** Physical pin P8: A4; input. */
  "A4": "P8",
  /** Physical pin P9: V_{SS}; passive. */
  "V_{SS}_P9": "P9",
  /** Physical pin R1: V_{DD}; passive. */
  "V_{DD}_R1": "R1",
  /** Physical pin R2: A7; input. */
  "A7": "R2",
  /** Physical pin R3: A9; input. */
  "A9": "R3",
  /** Physical pin R7: A11; input. */
  "A11": "R7",
  /** Physical pin R8: A6; input. */
  "A6": "R8",
  /** Physical pin R9: V_{DD}; passive. */
  "V_{DD}_R9": "R9",
  /** Physical pin T1: V_{SS}; passive. */
  "V_{SS}_T1": "T1",
  /** Physical pin T3: A13; input. */
  "A13": "T3",
  /** Physical pin T7: A14; input. */
  "A14": "T7",
  /** Physical pin T8: A8; input. */
  "A8": "T8",
  /** Physical pin T9: V_{SS}; passive. */
  "V_{SS}_T9": "T9",
  /** Physical pin A1: V_{DDQ}; power_in. */
  "V_{DDQ}_A1": "A1",
  /** Physical pin B1: V_{SSQ}; power_in. */
  "V_{SSQ}_B1": "B1",
  /** Physical pin B7: ~{UDQS}; bidirectional. */
  "~{UDQS}": "B7",
  /** Physical pin E1: V_{SS}; power_in. */
  "V_{SS}_E1": "E1",
  /** Physical pin G3: ~{LDQS}; bidirectional. */
  "~{LDQS}": "G3",
  /** Physical pin J3: ~{RAS}; input. */
  "~{RAS}": "J3",
  /** Physical pin K3: ~{CAS}; input. */
  "~{CAS}": "K3",
  /** Physical pin K7: ~{CK}; input. */
  "~{CK}": "K7",
  /** Physical pin L2: ~{CS}; input. */
  "~{CS}": "L2",
  /** Physical pin L3: ~{WE}; input. */
  "~{WE}": "L3",
  /** Physical pin N1: V_{DD}; power_in. */
  "V_{DD}_N1": "N1",
  /** Physical pin N7: A12/~{BC}; input. */
  "A12/~{BC}": "N7",
  /** Physical pin T2: ~{RESET}; input. */
  "~{RESET}": "T2",
}) {
  override schema = "Memory_RAM:MT41K256M16TW";
  override referencePrefix = "U";
}

/**
 * 256M – (16M x 16 bit) Synchronous DRAM (SDRAM), TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:MT48LC16M16A2TG`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.micron.com/-/media/client/global/documents/products/data-sheet/dram/256mb_sdr.pdf
 * Keywords: SDRAM Synchronous DRAM PC100 PC133 256Mb 16Mbx16 MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT48LC16M16A2TG extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: DQML; input. */
  "DQML": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10; input. */
  "A10": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: A12; input. */
  "A12": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: DQMH; input. */
  "DQMH": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:MT48LC16M16A2TG";
  override referencePrefix = "U";
}

/**
 * 256M – (16M x 16 bit) Synchronous DRAM (SDRAM), TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:MT48LC16M16A2P`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.micron.com/-/media/client/global/documents/products/data-sheet/dram/256mb_sdr.pdf
 * Keywords: SDRAM Synchronous DRAM PC100 PC133 256Mb 16Mbx16 MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT48LC16M16A2P extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: DQML; input. */
  "DQML": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10; input. */
  "A10": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: A12; input. */
  "A12": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: DQMH; input. */
  "DQMH": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:MT48LC16M16A2P";
  override referencePrefix = "U";
}

/**
 * 256M – (32M x 8 bit) Synchronous DRAM (SDRAM), TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:MT48LC32M8A2TG`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.micron.com/-/media/client/global/documents/products/data-sheet/dram/256mb_sdr.pdf
 * Keywords: SDRAM Synchronous DRAM PC100 PC133 256Mb 32Mbx8 MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT48LC32M8A2TG extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: DQ1; bidirectional. */
  "DQ1": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: DQ2; bidirectional. */
  "DQ2": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: DQ3; bidirectional. */
  "DQ3": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10; input. */
  "A10": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: A12; input. */
  "A12": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: DQM; input. */
  "DQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ4; bidirectional. */
  "DQ4": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ5; bidirectional. */
  "DQ5": "47",
  /** Physical pin 48: NC; no_connect. */
  "NC_48": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ6; bidirectional. */
  "DQ6": "50",
  /** Physical pin 51: NC; no_connect. */
  "NC_51": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ7; bidirectional. */
  "DQ7": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:MT48LC32M8A2TG";
  override referencePrefix = "U";
}

/**
 * 256M – (32M x 8 bit) Synchronous DRAM (SDRAM), TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:MT48LC32M8A2P`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.micron.com/-/media/client/global/documents/products/data-sheet/dram/256mb_sdr.pdf
 * Keywords: SDRAM Synchronous DRAM PC100 PC133 256Mb 32Mbx8 MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT48LC32M8A2P extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: DQ1; bidirectional. */
  "DQ1": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: DQ2; bidirectional. */
  "DQ2": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: DQ3; bidirectional. */
  "DQ3": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10; input. */
  "A10": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: A12; input. */
  "A12": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: DQM; input. */
  "DQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ4; bidirectional. */
  "DQ4": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ5; bidirectional. */
  "DQ5": "47",
  /** Physical pin 48: NC; no_connect. */
  "NC_48": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ6; bidirectional. */
  "DQ6": "50",
  /** Physical pin 51: NC; no_connect. */
  "NC_51": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ7; bidirectional. */
  "DQ7": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:MT48LC32M8A2P";
  override referencePrefix = "U";
}

/**
 * 256M – (64M x 4 bit) Synchronous DRAM (SDRAM), TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:MT48LC64M4A2TG`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.micron.com/-/media/client/global/documents/products/data-sheet/dram/256mb_sdr.pdf
 * Keywords: SDRAM Synchronous DRAM PC100 PC133 256Mb 64Mbx4 MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT48LC64M4A2TG extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: DQ0; bidirectional. */
  "DQ0": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: DQ1; bidirectional. */
  "DQ1": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10; input. */
  "A10": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: A12; input. */
  "A12": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: DQM; input. */
  "DQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ2; bidirectional. */
  "DQ2": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 48: NC; no_connect. */
  "NC_48": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ3; bidirectional. */
  "DQ3": "50",
  /** Physical pin 51: NC; no_connect. */
  "NC_51": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: NC; no_connect. */
  "NC_53": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:MT48LC64M4A2TG";
  override referencePrefix = "U";
}

/**
 * 256M – (64M x 4 bit) Synchronous DRAM (SDRAM), TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:MT48LC64M4A2P`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.micron.com/-/media/client/global/documents/products/data-sheet/dram/256mb_sdr.pdf
 * Keywords: SDRAM Synchronous DRAM PC100 PC133 256Mb 64Mbx4 MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT48LC64M4A2P extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: DQ0; bidirectional. */
  "DQ0": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: DQ1; bidirectional. */
  "DQ1": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BA0; input. */
  "BA0": "20",
  /** Physical pin 21: BA1; input. */
  "BA1": "21",
  /** Physical pin 22: A10; input. */
  "A10": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: A12; input. */
  "A12": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: DQM; input. */
  "DQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ2; bidirectional. */
  "DQ2": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 48: NC; no_connect. */
  "NC_48": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ3; bidirectional. */
  "DQ3": "50",
  /** Physical pin 51: NC; no_connect. */
  "NC_51": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: NC; no_connect. */
  "NC_53": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:MT48LC64M4A2P";
  override referencePrefix = "U";
}

/**
 * 1-Mbit Advanced Low Power SRAM (128K x 8-bit), operating voltage 5V, 55/70ns, TSOP-32
 *
 * KiCad symbol: `Memory_RAM:R1LP0108ESF`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*18.4*8*P0.5mm*.
 * @see https://www.renesas.com/en/document/dst/r1lp0108e-series-datasheet
 * Keywords: CMOS MEMORY Static 1Mbit.
 * Default footprint: Package_SO:TSOP-I-32_18.4x8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R1LP0108ESF extends Component.withPins({
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: CS2/CE2; input. */
  "CS2/CE2": "6",
  /** Physical pin 7: A15; input. */
  "A15": "7",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A14; input. */
  "A14": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: DQ0; tri_state. */
  "DQ0": "21",
  /** Physical pin 22: DQ1; tri_state. */
  "DQ1": "22",
  /** Physical pin 23: DQ2; tri_state. */
  "DQ2": "23",
  /** Physical pin 25: DQ3; tri_state. */
  "DQ3": "25",
  /** Physical pin 26: DQ4; tri_state. */
  "DQ4": "26",
  /** Physical pin 27: DQ5; tri_state. */
  "DQ5": "27",
  /** Physical pin 28: DQ6; tri_state. */
  "DQ6": "28",
  /** Physical pin 29: DQ7; tri_state. */
  "DQ7": "29",
  /** Physical pin 30: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: ~{OE}; input. */
  "~{OE}": "32",
}) {
  override schema = "Memory_RAM:R1LP0108ESF";
  override referencePrefix = "U";
}

/**
 * 1-Mbit Advanced Low Power SRAM (128K x 8-bit), operating voltage 5V, 55/70ns, SOP-32
 *
 * KiCad symbol: `Memory_RAM:R1LP0108ESN`. Reference prefix: `U`.
 * Footprint filters: *SOP*11.4*20.*P1.27mm*.
 * @see https://www.renesas.com/en/document/dst/r1lp0108e-series-datasheet
 * Keywords: CMOS MEMORY Static 1Mbit.
 * Default footprint: Package_SO:Renesas_SOP-32_11.4x20.75mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class R1LP0108ESN extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: DQ0; tri_state. */
  "DQ0": "13",
  /** Physical pin 14: DQ1; tri_state. */
  "DQ1": "14",
  /** Physical pin 15: DQ2; tri_state. */
  "DQ2": "15",
  /** Physical pin 17: DQ3; tri_state. */
  "DQ3": "17",
  /** Physical pin 18: DQ4; tri_state. */
  "DQ4": "18",
  /** Physical pin 19: DQ5; tri_state. */
  "DQ5": "19",
  /** Physical pin 20: DQ6; tri_state. */
  "DQ6": "20",
  /** Physical pin 21: DQ7; tri_state. */
  "DQ7": "21",
  /** Physical pin 22: ~{CS1}/~{CE1}; input. */
  "~{CS1}/~{CE1}": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: ~{OE}; input. */
  "~{OE}": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: ~{WE}; input. */
  "~{WE}": "29",
  /** Physical pin 30: CS2/CE2; input. */
  "CS2/CE2": "30",
  /** Physical pin 31: A15; input. */
  "A15": "31",
}) {
  override schema = "Memory_RAM:R1LP0108ESN";
  override referencePrefix = "U";
}

/**
 * 32K x 8-bit Static CMOS XRAM, 100/120/150ns access time, 5V ±10% supply, DIP-28 (600 mil)
 *
 * KiCad symbol: `Memory_RAM:uPD42832C`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://archive.org/details/bitsavers_necdataBooBook_14399588/page/n241/mode/2up
 * Keywords: μPD42832C NEC 32KB 256Kbit 256-Kbit SRAM pseudostatic PSRAM MEMORY TTL-compatible Obsolete.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class uPD42832C extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: V_{DD}; power_in. */
  "V_{DD}": "28",
  /** Physical pin 1: A_{14}; input. */
  "A_{14}": "1",
  /** Physical pin 2: A_{12}; input. */
  "A_{12}": "2",
  /** Physical pin 3: A_{7}; input. */
  "A_{7}": "3",
  /** Physical pin 4: A_{6}; input. */
  "A_{6}": "4",
  /** Physical pin 5: A_{5}; input. */
  "A_{5}": "5",
  /** Physical pin 6: A_{4}; input. */
  "A_{4}": "6",
  /** Physical pin 7: A_{3}; input. */
  "A_{3}": "7",
  /** Physical pin 8: A_{2}; input. */
  "A_{2}": "8",
  /** Physical pin 9: A_{1}; input. */
  "A_{1}": "9",
  /** Physical pin 10: A_{0}; input. */
  "A_{0}": "10",
  /** Physical pin 11: I/O_{0}; tri_state. */
  "I/O_{0}": "11",
  /** Physical pin 12: I/O_{1}; tri_state. */
  "I/O_{1}": "12",
  /** Physical pin 13: I/O_{2}; tri_state. */
  "I/O_{2}": "13",
  /** Physical pin 15: I/O_{3}; tri_state. */
  "I/O_{3}": "15",
  /** Physical pin 16: I/O_{4}; tri_state. */
  "I/O_{4}": "16",
  /** Physical pin 17: I/O_{5}; tri_state. */
  "I/O_{5}": "17",
  /** Physical pin 18: I/O_{6}; tri_state. */
  "I/O_{6}": "18",
  /** Physical pin 19: I/O_{7}; tri_state. */
  "I/O_{7}": "19",
  /** Physical pin 20: ~{CE}; input. */
  "~{CE}": "20",
  /** Physical pin 21: A_{10}; input. */
  "A_{10}": "21",
  /** Physical pin 22: ~{OE}/~{RFSH}; input. */
  "~{OE}/~{RFSH}": "22",
  /** Physical pin 23: A_{11}; input. */
  "A_{11}": "23",
  /** Physical pin 24: A_{9}; input. */
  "A_{9}": "24",
  /** Physical pin 25: A_{8}; input. */
  "A_{8}": "25",
  /** Physical pin 26: A_{13}; input. */
  "A_{13}": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:uPD42832C";
  override referencePrefix = "U";
}

/**
 * 32K x 8-bit CMOS Pseudo-Static RAM, 85/100/120ns access time, 5V ±10% supply, DIP-28 (600 mil)
 *
 * KiCad symbol: `Memory_RAM:TC51832P`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://retrocdn.net/images/2/28/TC51832_datasheet.pdf
 * Keywords: Toshiba 32KB 256Kbit 256-Kbit SRAM pseudostatic PSRAM MEMORY TTL-compatible Obsolete.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TC51832P extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: V_{DD}; power_in. */
  "V_{DD}": "28",
  /** Physical pin 1: A_{14}; input. */
  "A_{14}": "1",
  /** Physical pin 2: A_{12}; input. */
  "A_{12}": "2",
  /** Physical pin 3: A_{7}; input. */
  "A_{7}": "3",
  /** Physical pin 4: A_{6}; input. */
  "A_{6}": "4",
  /** Physical pin 5: A_{5}; input. */
  "A_{5}": "5",
  /** Physical pin 6: A_{4}; input. */
  "A_{4}": "6",
  /** Physical pin 7: A_{3}; input. */
  "A_{3}": "7",
  /** Physical pin 8: A_{2}; input. */
  "A_{2}": "8",
  /** Physical pin 9: A_{1}; input. */
  "A_{1}": "9",
  /** Physical pin 10: A_{0}; input. */
  "A_{0}": "10",
  /** Physical pin 11: I/O_{0}; tri_state. */
  "I/O_{0}": "11",
  /** Physical pin 12: I/O_{1}; tri_state. */
  "I/O_{1}": "12",
  /** Physical pin 13: I/O_{2}; tri_state. */
  "I/O_{2}": "13",
  /** Physical pin 15: I/O_{3}; tri_state. */
  "I/O_{3}": "15",
  /** Physical pin 16: I/O_{4}; tri_state. */
  "I/O_{4}": "16",
  /** Physical pin 17: I/O_{5}; tri_state. */
  "I/O_{5}": "17",
  /** Physical pin 18: I/O_{6}; tri_state. */
  "I/O_{6}": "18",
  /** Physical pin 19: I/O_{7}; tri_state. */
  "I/O_{7}": "19",
  /** Physical pin 20: ~{CE}; input. */
  "~{CE}": "20",
  /** Physical pin 21: A_{10}; input. */
  "A_{10}": "21",
  /** Physical pin 22: ~{OE}/~{RFSH}; input. */
  "~{OE}/~{RFSH}": "22",
  /** Physical pin 23: A_{11}; input. */
  "A_{11}": "23",
  /** Physical pin 24: A_{9}; input. */
  "A_{9}": "24",
  /** Physical pin 25: A_{8}; input. */
  "A_{8}": "25",
  /** Physical pin 26: A_{13}; input. */
  "A_{13}": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:TC51832P";
  override referencePrefix = "U";
}

/**
 * 262144 x 1 bit Dynamic RAM, 100/120/150ns access time, single 5V ±10% power supply, TTL compatible inputs, DIP-16
 *
 * KiCad symbol: `Memory_RAM:TMM41256AP`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://minuszerodegrees.net/memory/41256/datasheet_TMM41256A.pdf
 * Keywords: Toshiba DRAM NMOS 256Kbit MEMORY Obsolete.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TMM41256AP extends Component.withPins({
  /** Physical pin 1: A8; input. */
  "A8": "1",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
  /** Physical pin 9: A7; input. */
  "A7": "9",
  /** Physical pin 16: V_{SS}; power_in. */
  "V_{SS}": "16",
  /** Physical pin 2: D_{IN}; input. */
  "D_{IN}": "2",
  /** Physical pin 3: ~{WRITE}; input. */
  "~{WRITE}": "3",
  /** Physical pin 4: ~{RAS}; input. */
  "~{RAS}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A2; input. */
  "A2": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 10: A5; input. */
  "A5": "10",
  /** Physical pin 11: A4; input. */
  "A4": "11",
  /** Physical pin 12: A3; input. */
  "A3": "12",
  /** Physical pin 13: A6; input. */
  "A6": "13",
  /** Physical pin 14: D_{OUT}; tri_state. */
  "D_{OUT}": "14",
  /** Physical pin 15: ~{CAS}; input. */
  "~{CAS}": "15",
}) {
  override schema = "Memory_RAM:TMM41256AP";
  override referencePrefix = "U";
}

/**
 * 128Mb Synchronous DRAM, 2 Mb x 16 b x 4 Banks, 200 MHz, TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:W9812G6KH-5`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.winbond.com/resource-files/da00-w9812g6khc1.pdf
 * Keywords: DRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W9812G6KH_5 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: LDQM; input. */
  "LDQM": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BS0; input. */
  "BS0": "20",
  /** Physical pin 21: BS1; input. */
  "BS1": "21",
  /** Physical pin 22: A10/AP; input. */
  "A10/AP": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: UDQM; input. */
  "UDQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:W9812G6KH-5";
  override referencePrefix = "U";
}

/**
 * 128Mb Synchronous DRAM, 2 Mb x 16 b x 4 Banks, 166 MHz, TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:W9812G6KH-6`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.winbond.com/resource-files/da00-w9812g6khc1.pdf
 * Keywords: DRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W9812G6KH_6 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: LDQM; input. */
  "LDQM": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BS0; input. */
  "BS0": "20",
  /** Physical pin 21: BS1; input. */
  "BS1": "21",
  /** Physical pin 22: A10/AP; input. */
  "A10/AP": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: UDQM; input. */
  "UDQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:W9812G6KH-6";
  override referencePrefix = "U";
}

/**
 * 128Mb Synchronous DRAM, 2 Mb x 16 b x 4 Banks, 166 MHz, TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:W9812G6KH-6I`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.winbond.com/resource-files/da00-w9812g6khc1.pdf
 * Keywords: DRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W9812G6KH_6I extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: LDQM; input. */
  "LDQM": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BS0; input. */
  "BS0": "20",
  /** Physical pin 21: BS1; input. */
  "BS1": "21",
  /** Physical pin 22: A10/AP; input. */
  "A10/AP": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: UDQM; input. */
  "UDQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:W9812G6KH-6I";
  override referencePrefix = "U";
}

/**
 * 128Mb Synchronous DRAM, 2 Mb x 16 b x 4 Banks, 133 MHz, TSOP-II-54
 *
 * KiCad symbol: `Memory_RAM:W9812G6KH-75`. Reference prefix: `U`.
 * Footprint filters: TSOP?II*22.2x10.16mm*P0.8mm*.
 * @see https://www.winbond.com/resource-files/da00-w9812g6khc1.pdf
 * Keywords: DRAM MEMORY.
 * Default footprint: Package_SO:TSOP-II-54_22.2x10.16mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W9812G6KH_75 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DQ0; bidirectional. */
  "DQ0": "2",
  /** Physical pin 3: VDDQ; power_in. */
  "VDDQ_3": "3",
  /** Physical pin 4: DQ1; bidirectional. */
  "DQ1": "4",
  /** Physical pin 5: DQ2; bidirectional. */
  "DQ2": "5",
  /** Physical pin 6: VSSQ; power_in. */
  "VSSQ_6": "6",
  /** Physical pin 7: DQ3; bidirectional. */
  "DQ3": "7",
  /** Physical pin 8: DQ4; bidirectional. */
  "DQ4": "8",
  /** Physical pin 9: VDDQ; passive. */
  "VDDQ_9": "9",
  /** Physical pin 10: DQ5; bidirectional. */
  "DQ5": "10",
  /** Physical pin 11: DQ6; bidirectional. */
  "DQ6": "11",
  /** Physical pin 12: VSSQ; passive. */
  "VSSQ_12": "12",
  /** Physical pin 13: DQ7; bidirectional. */
  "DQ7": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: LDQM; input. */
  "LDQM": "15",
  /** Physical pin 16: ~{WE}; input. */
  "~{WE}": "16",
  /** Physical pin 17: ~{CAS}; input. */
  "~{CAS}": "17",
  /** Physical pin 18: ~{RAS}; input. */
  "~{RAS}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: BS0; input. */
  "BS0": "20",
  /** Physical pin 21: BS1; input. */
  "BS1": "21",
  /** Physical pin 22: A10/AP; input. */
  "A10/AP": "22",
  /** Physical pin 23: A0; input. */
  "A0": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A2; input. */
  "A2": "25",
  /** Physical pin 26: A3; input. */
  "A3": "26",
  /** Physical pin 27: VDD; passive. */
  "VDD_27": "27",
  /** Physical pin 28: VSS; power_in. */
  "VSS_28": "28",
  /** Physical pin 29: A4; input. */
  "A4": "29",
  /** Physical pin 30: A5; input. */
  "A5": "30",
  /** Physical pin 31: A6; input. */
  "A6": "31",
  /** Physical pin 32: A7; input. */
  "A7": "32",
  /** Physical pin 33: A8; input. */
  "A8": "33",
  /** Physical pin 34: A9; input. */
  "A9": "34",
  /** Physical pin 35: A11; input. */
  "A11": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: CKE; input. */
  "CKE": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: UDQM; input. */
  "UDQM": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: DQ8; bidirectional. */
  "DQ8": "42",
  /** Physical pin 43: VDDQ; passive. */
  "VDDQ_43": "43",
  /** Physical pin 44: DQ9; bidirectional. */
  "DQ9": "44",
  /** Physical pin 45: DQ10; bidirectional. */
  "DQ10": "45",
  /** Physical pin 46: VSSQ; passive. */
  "VSSQ_46": "46",
  /** Physical pin 47: DQ11; bidirectional. */
  "DQ11": "47",
  /** Physical pin 48: DQ12; bidirectional. */
  "DQ12": "48",
  /** Physical pin 49: VDDQ; passive. */
  "VDDQ_49": "49",
  /** Physical pin 50: DQ13; bidirectional. */
  "DQ13": "50",
  /** Physical pin 51: DQ14; bidirectional. */
  "DQ14": "51",
  /** Physical pin 52: VSSQ; passive. */
  "VSSQ_52": "52",
  /** Physical pin 53: DQ15; bidirectional. */
  "DQ15": "53",
  /** Physical pin 54: VSS; passive. */
  "VSS_54": "54",
}) {
  override schema = "Memory_RAM:W9812G6KH-75";
  override referencePrefix = "U";
}

/**
 * 256Kbit Dual-Port Dynamic NMOS RAM (64K x 4-bit), 120/150ns access time (RAM Port), 40/60ns access time (Serial Port), 5V ±10% supply, DIP-24 (400 mil)
 *
 * KiCad symbol: `Memory_RAM:uPD41264C`. Reference prefix: `U`.
 * Footprint filters: DIP*W10.16mm*.
 * @see https://archive.org/details/bitsavers_necdataBooBook_14399588/page/n61/mode/1up
 * Keywords: μPD41264C 256-Kbit NEC DRAM VRAM MEMORY Graphics-Buffer TTL-compatible Obsolete.
 * Default footprint: Package_DIP:DIP-24_W10.16mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class uPD41264C extends Component.withPins({
  /** Physical pin 12: V_{CC}; power_in. */
  "V_{CC}": "12",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 1: SC; input. */
  "SC": "1",
  /** Physical pin 2: SO_{0}; tri_state. */
  "SO_{0}": "2",
  /** Physical pin 3: SO_{1}; tri_state. */
  "SO_{1}": "3",
  /** Physical pin 4: ~{DT}/~{OE}; input. */
  "~{DT}/~{OE}": "4",
  /** Physical pin 5: W_{0}/IO_{0}; bidirectional. */
  "W_{0}/IO_{0}": "5",
  /** Physical pin 6: W_{1}/IO_{1}; bidirectional. */
  "W_{1}/IO_{1}": "6",
  /** Physical pin 7: ~{WB}/~{WE}; input. */
  "~{WB}/~{WE}": "7",
  /** Physical pin 8: ~{RAS}; input. */
  "~{RAS}": "8",
  /** Physical pin 9: A_{6}; input. */
  "A_{6}": "9",
  /** Physical pin 10: A_{5}; input. */
  "A_{5}": "10",
  /** Physical pin 11: A_{4}; input. */
  "A_{4}": "11",
  /** Physical pin 13: A_{7}; input. */
  "A_{7}": "13",
  /** Physical pin 14: A_{3}; input. */
  "A_{3}": "14",
  /** Physical pin 15: A_{2}; input. */
  "A_{2}": "15",
  /** Physical pin 16: A_{1}; input. */
  "A_{1}": "16",
  /** Physical pin 17: A_{0}; input. */
  "A_{0}": "17",
  /** Physical pin 18: ~{CAS}; input. */
  "~{CAS}": "18",
  /** Physical pin 19: W_{2}/IO_{2}; bidirectional. */
  "W_{2}/IO_{2}": "19",
  /** Physical pin 20: W_{3}/IO_{3}; bidirectional. */
  "W_{3}/IO_{3}": "20",
  /** Physical pin 21: ~{SOE}; input. */
  "~{SOE}": "21",
  /** Physical pin 22: SO_{2}; tri_state. */
  "SO_{2}": "22",
  /** Physical pin 23: SO_{3}; tri_state. */
  "SO_{3}": "23",
}) {
  override schema = "Memory_RAM:uPD41264C";
  override referencePrefix = "U";
}

/**
 * 8192 x 8-bit Static NMOS XRAM, 120/150/200ns access time, 5V ±10% supply, DIP-28 (600 mil)
 *
 * KiCad symbol: `Memory_RAM:uPD4168C`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://archive.org/details/bitsavers_necdataBooBook_14399588/page/n233/mode/2up
 * Keywords: μPD4168C NEC 8KB 64Kbit 64-Kbit SRAM pseudostatic PSRAM MEMORY TTL-compatible Obsolete.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class uPD4168C extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: V_{CC}; power_in. */
  "V_{CC}": "28",
  /** Physical pin 1: ~{RFSH}; input. */
  "~{RFSH}": "1",
  /** Physical pin 2: A_{12}; input. */
  "A_{12}": "2",
  /** Physical pin 3: A_{7}; input. */
  "A_{7}": "3",
  /** Physical pin 4: A_{6}; input. */
  "A_{6}": "4",
  /** Physical pin 5: A_{5}; input. */
  "A_{5}": "5",
  /** Physical pin 6: A_{4}; input. */
  "A_{4}": "6",
  /** Physical pin 7: A_{3}; input. */
  "A_{3}": "7",
  /** Physical pin 8: A_{2}; input. */
  "A_{2}": "8",
  /** Physical pin 9: A_{1}; input. */
  "A_{1}": "9",
  /** Physical pin 10: A_{0}; input. */
  "A_{0}": "10",
  /** Physical pin 11: I/O_{0}; tri_state. */
  "I/O_{0}": "11",
  /** Physical pin 12: I/O_{1}; tri_state. */
  "I/O_{1}": "12",
  /** Physical pin 13: I/O_{2}; tri_state. */
  "I/O_{2}": "13",
  /** Physical pin 15: I/O_{3}; tri_state. */
  "I/O_{3}": "15",
  /** Physical pin 16: I/O_{4}; tri_state. */
  "I/O_{4}": "16",
  /** Physical pin 17: I/O_{5}; tri_state. */
  "I/O_{5}": "17",
  /** Physical pin 18: I/O_{6}; tri_state. */
  "I/O_{6}": "18",
  /** Physical pin 19: I/O_{7}; tri_state. */
  "I/O_{7}": "19",
  /** Physical pin 20: ~{CE}; input. */
  "~{CE}": "20",
  /** Physical pin 21: A_{10}; input. */
  "A_{10}": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A_{11}; input. */
  "A_{11}": "23",
  /** Physical pin 24: A_{9}; input. */
  "A_{9}": "24",
  /** Physical pin 25: A_{8}; input. */
  "A_{8}": "25",
  /** Physical pin 26: CS; input. */
  "CS": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:uPD4168C";
  override referencePrefix = "U";
}

/**
 * 8192 x 8-bit Static CMOS RAM, 100/120/150ns access time, 5V ±10% supply, DIP-28 (300 mil)
 *
 * KiCad symbol: `Memory_RAM:uPD4364CX`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.silicon-ark.co.uk/datasheets/upd4364-datasheet-nec.pdf
 * Keywords: μPD4364CX NEC 8KB 64Kbit 64-Kbit SRAM MEMORY TTL-compatible Obsolete.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class uPD4364CX extends Component.withPins({
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 28: V_{CC}; power_in. */
  "V_{CC}": "28",
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A_{12}; input. */
  "A_{12}": "2",
  /** Physical pin 3: A_{7}; input. */
  "A_{7}": "3",
  /** Physical pin 4: A_{6}; input. */
  "A_{6}": "4",
  /** Physical pin 5: A_{5}; input. */
  "A_{5}": "5",
  /** Physical pin 6: A_{4}; input. */
  "A_{4}": "6",
  /** Physical pin 7: A_{3}; input. */
  "A_{3}": "7",
  /** Physical pin 8: A_{2}; input. */
  "A_{2}": "8",
  /** Physical pin 9: A_{1}; input. */
  "A_{1}": "9",
  /** Physical pin 10: A_{0}; input. */
  "A_{0}": "10",
  /** Physical pin 11: I/O_{1}; tri_state. */
  "I/O_{1}": "11",
  /** Physical pin 12: I/O_{2}; tri_state. */
  "I/O_{2}": "12",
  /** Physical pin 13: I/O_{3}; tri_state. */
  "I/O_{3}": "13",
  /** Physical pin 15: I/O_{4}; tri_state. */
  "I/O_{4}": "15",
  /** Physical pin 16: I/O_{5}; tri_state. */
  "I/O_{5}": "16",
  /** Physical pin 17: I/O_{6}; tri_state. */
  "I/O_{6}": "17",
  /** Physical pin 18: I/O_{7}; tri_state. */
  "I/O_{7}": "18",
  /** Physical pin 19: I/O_{8}; tri_state. */
  "I/O_{8}": "19",
  /** Physical pin 20: ~{CE_{1}}; input. */
  "~{CE_{1}}": "20",
  /** Physical pin 21: A_{10}; input. */
  "A_{10}": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A_{11}; input. */
  "A_{11}": "23",
  /** Physical pin 24: A_{9}; input. */
  "A_{9}": "24",
  /** Physical pin 25: A_{8}; input. */
  "A_{8}": "25",
  /** Physical pin 26: CE_{2}; input. */
  "CE_{2}": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
}) {
  override schema = "Memory_RAM:uPD4364CX";
  override referencePrefix = "U";
}

