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
 */
export class _23AA02M_ISN extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "V_{SS}": "4",
  "SI/SIO0": "5",
  "SCK": "6",
  "~{HOLD}/SIO3": "7",
  "V_{CC}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", "V_{SS}": "power_in", "SI/SIO0": "bidirectional", SCK: "input", "~{HOLD}/SIO3": "bidirectional", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class _23AA02M_IP extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "V_{SS}": "4",
  "SI/SIO0": "5",
  "SCK": "6",
  "~{HOLD}/SIO3": "7",
  "V_{CC}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", "V_{SS}": "power_in", "SI/SIO0": "bidirectional", SCK: "input", "~{HOLD}/SIO3": "bidirectional", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class _23AA02M_IST extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "V_{SS}": "4",
  "SI/SIO0": "5",
  "SCK": "6",
  "~{HOLD}/SIO3": "7",
  "V_{CC}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", "V_{SS}": "power_in", "SI/SIO0": "bidirectional", SCK: "input", "~{HOLD}/SIO3": "bidirectional", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class APS1604M_SQRx_SN extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", VSS: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", SIO3: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class APS1604M_3SQRx_SN extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", VSS: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", SIO3: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class APS1604M_SQRx_ZR extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VDD": "8",
  "EPAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", VSS: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", SIO3: "bidirectional", VDD: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class APS1604M_3SQRx_ZR extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VDD": "8",
  "EPAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", VSS: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", SIO3: "bidirectional", VDD: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class APS6404L_SQRx_SN extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", VSS: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", SIO3: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class APS6404L_3SQRx_SN extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", VSS: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", SIO3: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class APS6404L_SQRx_ZR extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VDD": "8",
  "EPAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", VSS: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", SIO3: "bidirectional", VDD: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class APS6404L_3SQRx_ZR extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO1": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VDD": "8",
  "EPAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO1": "bidirectional", SIO2: "bidirectional", VSS: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", SIO3: "bidirectional", VDD: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class AS4C256M16D3 extends Component.withPins({
  "VDDQ_A1": "A1",
  "VDDQ_A8": "A8",
  "VSS_A9": "A9",
  "VSSQ_B1": "B1",
  "VDD_B2": "B2",
  "VSS_B3": "B3",
  "VSSQ_B9": "B9",
  "VDDQ_C1": "C1",
  "VDDQ_C9": "C9",
  "VSSQ_D1": "D1",
  "VDDQ_D2": "D2",
  "VSSQ_D8": "D8",
  "VDD_D9": "D9",
  "VSS_E1": "E1",
  "VSSQ_E2": "E2",
  "DQ0": "E3",
  "VSSQ_E8": "E8",
  "VDDQ_E9": "E9",
  "VDDQ_F1": "F1",
  "DQ2": "F2",
  "DQ1": "F7",
  "DQ3": "F8",
  "VSSQ_F9": "F9",
  "VSSQ_G1": "G1",
  "DQ6": "G2",
  "VDD_G7": "G7",
  "VSS_G8": "G8",
  "VSSQ_G9": "G9",
  "VREFDQ": "H1",
  "VDDQ_H2": "H2",
  "DQ4": "H3",
  "DQ7": "H7",
  "DQ5": "H8",
  "VDDQ_H9": "H9",
  "VSS_J2": "J2",
  "VSS_J8": "J8",
  "VDD_K2": "K2",
  "VDD_K8": "K8",
  "~{CS}": "L2",
  "A10/AP": "L7",
  "VSS_M1": "M1",
  "VSS_M9": "M9",
  "VDD_N1": "N1",
  "A3": "N2",
  "A0": "N3",
  "A12/~{BC}": "N7",
  "VDD_N9": "N9",
  "VSS_P1": "P1",
  "A5": "P2",
  "A2": "P3",
  "A1": "P7",
  "A4": "P8",
  "VSS_P9": "P9",
  "VDD_R1": "R1",
  "A7": "R2",
  "A9": "R3",
  "A11": "R7",
  "A6": "R8",
  "VDD_R9": "R9",
  "VSS_T1": "T1",
  "~{RESET}": "T2",
  "A13": "T3",
  "A14": "T7",
  "A8": "T8",
  "VSS_T9": "T9",
  "DQ13": "A2",
  "DQ15": "A3",
  "DQ12": "A7",
  "~{UDQS}": "B7",
  "DQ14": "B8",
  "DQ11": "C2",
  "DQ9": "C3",
  "UDQS": "C7",
  "DQ10": "C8",
  "UDM": "D3",
  "DQ8": "D7",
  "LDM": "E7",
  "LDQS": "F3",
  "~{LDQS}": "G3",
  "NC_J1": "J1",
  "~{RAS}": "J3",
  "CK": "J7",
  "NC_J9": "J9",
  "ODT": "K1",
  "~{CAS}": "K3",
  "~{CK}": "K7",
  "CKE": "K9",
  "NC_L1": "L1",
  "~{WE}": "L3",
  "ZQ": "L8",
  "NC_L9": "L9",
  "BA0": "M2",
  "BA2": "M3",
  "NC_M7": "M7",
  "VREFCA": "M8",
  "BA1": "N8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDQ_A1: "power_in", VDDQ_A8: "passive", VSS_A9: "power_in", VSSQ_B1: "power_in", VDD_B2: "power_in", VSS_B3: "passive", VSSQ_B9: "passive", VDDQ_C1: "passive", VDDQ_C9: "passive", VSSQ_D1: "passive", VDDQ_D2: "passive", VSSQ_D8: "passive", VDD_D9: "passive", VSS_E1: "passive", VSSQ_E2: "passive", DQ0: "bidirectional", VSSQ_E8: "passive", VDDQ_E9: "passive", VDDQ_F1: "passive", DQ2: "bidirectional", DQ1: "bidirectional", DQ3: "bidirectional", VSSQ_F9: "passive", VSSQ_G1: "passive", DQ6: "bidirectional", VDD_G7: "passive", VSS_G8: "passive", VSSQ_G9: "passive", VREFDQ: "power_in", VDDQ_H2: "passive", DQ4: "bidirectional", DQ7: "bidirectional", DQ5: "bidirectional", VDDQ_H9: "passive", VSS_J2: "passive", VSS_J8: "passive", VDD_K2: "passive", VDD_K8: "passive", "~{CS}": "input", "A10/AP": "input", VSS_M1: "passive", VSS_M9: "passive", VDD_N1: "passive", A3: "input", A0: "input", "A12/~{BC}": "input", VDD_N9: "passive", VSS_P1: "passive", A5: "input", A2: "input", A1: "input", A4: "input", VSS_P9: "passive", VDD_R1: "passive", A7: "input", A9: "input", A11: "input", A6: "input", VDD_R9: "passive", VSS_T1: "passive", "~{RESET}": "input", A13: "input", A14: "input", A8: "input", VSS_T9: "passive", DQ13: "bidirectional", DQ15: "bidirectional", DQ12: "bidirectional", "~{UDQS}": "bidirectional", DQ14: "bidirectional", DQ11: "bidirectional", DQ9: "bidirectional", UDQS: "bidirectional", DQ10: "bidirectional", UDM: "input", DQ8: "bidirectional", LDM: "input", LDQS: "bidirectional", "~{LDQS}": "bidirectional", NC_J1: "no_connect", "~{RAS}": "input", CK: "input", NC_J9: "no_connect", ODT: "input", "~{CAS}": "input", "~{CK}": "input", CKE: "input", NC_L1: "no_connect", "~{WE}": "input", ZQ: "input", NC_L9: "no_connect", BA0: "input", BA2: "input", NC_M7: "no_connect", VREFCA: "power_in", BA1: "input", ...opts.pinTypes } });
  }
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
 */
export class AS4C4M16SA extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "VSSQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "VSSQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "LDQM": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10/AP": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "NC": "36",
  "CKE": "37",
  "CLK": "38",
  "UDQM": "39",
  "NC/RFU": "40",
  "VSS_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "VSSQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "VSSQ_52": "52",
  "DQ15": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", VSSQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", VSSQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", LDQM: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", "A10/AP": "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", NC: "no_connect", CKE: "input", CLK: "input", UDQM: "input", "NC/RFU": "no_connect", VSS_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", VSSQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", VSSQ_52: "passive", DQ15: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class AS6C1008_xxB extends Component.withPins({
  "GND_D1": "D1",
  "VCC_D6": "D6",
  "VCC_E1": "E1",
  "GND_E6": "E6",
  "NC_F3": "F3",
  "NC_F4": "F4",
  "A0": "A1",
  "A1": "A2",
  "CS2/CE2": "A3",
  "A3": "A4",
  "A6": "A5",
  "A8": "A6",
  "DQ4": "B1",
  "A2": "B2",
  "~{WE}": "B3",
  "A4": "B4",
  "A7": "B5",
  "DQ0": "B6",
  "DQ5": "C1",
  "NC_C3": "C3",
  "A5": "C4",
  "DQ1": "C6",
  "DQ6": "F1",
  "DQ2": "F6",
  "DQ7": "G1",
  "~{OE}": "G2",
  "~{CS1}/~{CE1}": "G3",
  "A16": "G4",
  "A15": "G5",
  "DQ3": "G6",
  "A9": "H1",
  "A10": "H2",
  "A11": "H3",
  "A12": "H4",
  "A13": "H5",
  "A14": "H6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_D1: "power_in", VCC_D6: "power_in", VCC_E1: "passive", GND_E6: "passive", NC_F3: "no_connect", NC_F4: "no_connect", A0: "input", A1: "input", "CS2/CE2": "input", A3: "input", A6: "input", A8: "input", DQ4: "tri_state", A2: "input", "~{WE}": "input", A4: "input", A7: "input", DQ0: "tri_state", DQ5: "tri_state", NC_C3: "no_connect", A5: "input", DQ1: "tri_state", DQ6: "tri_state", DQ2: "tri_state", DQ7: "tri_state", "~{OE}": "input", "~{CS1}/~{CE1}": "input", A16: "input", A15: "input", DQ3: "tri_state", A9: "input", A10: "input", A11: "input", A12: "input", A13: "input", A14: "input", ...opts.pinTypes } });
  }
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
 */
export class AS6C1008_xxP extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class AS6C1008_xxS extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class AS6C1008_xxT extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "DQ0": "21",
  "DQ1": "22",
  "DQ2": "23",
  "DQ3": "25",
  "DQ4": "26",
  "DQ5": "27",
  "DQ6": "28",
  "DQ7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class AS6C1008_xxST extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "DQ0": "21",
  "DQ1": "22",
  "DQ2": "23",
  "DQ3": "25",
  "DQ4": "26",
  "DQ5": "27",
  "DQ6": "28",
  "DQ7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class AS6C1616 extends Component.withPins({
  "A15": "1",
  "A14": "2",
  "A13": "3",
  "A12": "4",
  "A11": "5",
  "A10": "6",
  "A9": "7",
  "A8": "8",
  "A19": "9",
  "NC_10": "10",
  "WE#": "11",
  "CE2": "12",
  "NC_13": "13",
  "UB#": "14",
  "LB#": "15",
  "A18": "16",
  "A17": "17",
  "A7": "18",
  "A6": "19",
  "A5": "20",
  "A4": "21",
  "A3": "22",
  "A2": "23",
  "A1": "24",
  "A0": "25",
  "CE#": "26",
  "VSS_27": "27",
  "OE#": "28",
  "DQ0": "29",
  "DQ8": "30",
  "DQ1": "31",
  "DQ9": "32",
  "DQ2": "33",
  "DQ10": "34",
  "DQ3": "35",
  "DQ11": "36",
  "VCC": "37",
  "DQ4": "38",
  "DQ12": "39",
  "DQ5": "40",
  "DQ13": "41",
  "DQ6": "42",
  "DQ14": "43",
  "DQ7": "44",
  "DQ15": "45",
  "VSS_46": "46",
  "NC_47": "47",
  "A16": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A15: "input", A14: "input", A13: "input", A12: "input", A11: "input", A10: "input", A9: "input", A8: "input", A19: "input", NC_10: "no_connect", "WE#": "input", CE2: "input", NC_13: "no_connect", "UB#": "input", "LB#": "input", A18: "input", A17: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "CE#": "input", VSS_27: "power_in", "OE#": "input", DQ0: "bidirectional", DQ8: "bidirectional", DQ1: "bidirectional", DQ9: "bidirectional", DQ2: "bidirectional", DQ10: "bidirectional", DQ3: "bidirectional", DQ11: "bidirectional", VCC: "power_in", DQ4: "bidirectional", DQ12: "bidirectional", DQ5: "bidirectional", DQ13: "bidirectional", DQ6: "bidirectional", DQ14: "bidirectional", DQ7: "bidirectional", DQ15: "input", VSS_46: "power_in", NC_47: "no_connect", A16: "input", ...opts.pinTypes } });
  }
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
 */
export class AS6C4008_55PCN extends Component.withPins({
  "VSS": "16",
  "VCC": "32",
  "A18": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "CE#": "22",
  "A10": "23",
  "OE#": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "WE#": "29",
  "A17": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VCC: "power_in", A18: "input", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "CE#": "input", A10: "input", "OE#": "input", A11: "input", A9: "input", A8: "input", A13: "input", "WE#": "input", A17: "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class HM628128_DIP32_SOP32 extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class AS7C1024B_xxJ extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class HM628128_TSOP32 extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class AS7C1024B_xxT extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class AS7C1024B_xxTJ extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class AS7C31024B_xxJ extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class AS7C31024B_xxT extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class AS7C31024B_xxST extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class AS7C31024B_xxTJ extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class CY62128EV30xx_xxS extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class CY62128EV30xx_xxZ extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class CY62128Exx_xxS extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class CY62128Exx_xxZ extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class KM62256CLP extends Component.withPins({
  "GND": "14",
  "VCC": "28",
  "A14": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "Q0": "11",
  "Q1": "12",
  "Q2": "13",
  "Q3": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{CS}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", Q0: "tri_state", Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Q4: "tri_state", Q5: "tri_state", Q6: "tri_state", Q7: "tri_state", "~{CS}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class CY62256_70PC extends Component.withPins({
  "GND": "14",
  "VCC": "28",
  "A14": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "Q0": "11",
  "Q1": "12",
  "Q2": "13",
  "Q3": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{CS}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", Q0: "tri_state", Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Q4: "tri_state", Q5: "tri_state", Q6: "tri_state", Q7: "tri_state", "~{CS}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
  override schema = "Memory_RAM:CY62256-70PC";
  override referencePrefix = "U";
}

/**
 * CY7C199
 *
 * KiCad symbol: `Memory_RAM:CY7C199`. Reference prefix: `U`.
 */
export class CY7C199 extends Component.withPins({
  "GND": "14",
  "VCC": "28",
  "A5": "1",
  "A6": "2",
  "A7": "3",
  "A8": "4",
  "A9": "5",
  "A10": "6",
  "A11": "7",
  "A12": "8",
  "A13": "9",
  "A14": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A0": "21",
  "~{OE}": "22",
  "A1": "23",
  "A2": "24",
  "A3": "25",
  "A4": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A10: "input", A11: "input", A12: "input", A13: "input", A14: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A0: "input", "~{OE}": "input", A1: "input", A2: "input", A3: "input", A4: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class ESP_PSRAM32 extends Component.withPins({
  "~{CE}": "1",
  "SO/SIO": "2",
  "SIO2": "3",
  "VSS": "4",
  "SI/SIO": "5",
  "SCLK": "6",
  "SIO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", "SO/SIO": "output", SIO2: "bidirectional", VSS: "power_in", "SI/SIO": "input", SCLK: "output", SIO3: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MT40A512M16JY extends Component.withPins({
  "V_{DDQ}_A1": "A1",
  "V_{SSQ}_A2": "A2",
  "DQ8": "A3",
  "UDQS_c": "A7",
  "V_{SSQ}_A8": "A8",
  "V_{DDQ}_A9": "A9",
  "V_{PP}_B1": "B1",
  "V_{SS}_B2": "B2",
  "V_{DD}_B3": "B3",
  "UDQS_t": "B7",
  "DQ9": "B8",
  "V_{DD}_B9": "B9",
  "V_{DDQ}_C1": "C1",
  "DQ12": "C2",
  "DQ10": "C3",
  "DQ11": "C7",
  "DQ13": "C8",
  "V_{SSQ}_C9": "C9",
  "V_{DD}_D1": "D1",
  "V_{SSQ}_D2": "D2",
  "DQ14": "D3",
  "DQ15": "D7",
  "V_{SSQ}_D8": "D8",
  "V_{DDQ}_D9": "D9",
  "V_{SS}_E1": "E1",
  "NF/~{UDM}/~{UDBI}": "E2",
  "V_{SSQ}_E3": "E3",
  "NF/~{LDM}/~{LDBI}": "E7",
  "V_{SSQ}_E8": "E8",
  "V_{SS}_E9": "E9",
  "V_{SSQ}_F1": "F1",
  "V_{DDQ}_F2": "F2",
  "LDQS_c": "F3",
  "DQ1": "F7",
  "V_{DDQ}_F8": "F8",
  "ZQ": "F9",
  "V_{DDQ}_G1": "G1",
  "DQ0": "G2",
  "LDQS_t": "G3",
  "V_{DD}_G7": "G7",
  "V_{SS}_G8": "G8",
  "V_{DDQ}_G9": "G9",
  "V_{SSQ}_H1": "H1",
  "DQ4": "H2",
  "DQ2": "H3",
  "DQ3": "H7",
  "DQ5": "H8",
  "V_{SSQ}_H9": "H9",
  "V_{DD}_J1": "J1",
  "V_{DDQ}_J2": "J2",
  "DQ6": "J3",
  "DQ7": "J7",
  "V_{DDQ}_J8": "J8",
  "V_{DD}_J9": "J9",
  "V_{SS}_K1": "K1",
  "CKE": "K2",
  "ODT": "K3",
  "CK_t": "K7",
  "CK_c": "K8",
  "V_{SS}_K9": "K9",
  "V_{DD}_L1": "L1",
  "A14/~{WE}": "L2",
  "~{ACT}": "L3",
  "~{CS}": "L7",
  "A16/~{RAS}": "L8",
  "V_{DD}_L9": "L9",
  "V_{REFCA}": "M1",
  "BG0": "M2",
  "A10/AP": "M3",
  "A12/~{BC}": "M7",
  "A15/~{CAS}": "M8",
  "V_{SS}_M9": "M9",
  "V_{SS}_N1": "N1",
  "BA0": "N2",
  "A4": "N3",
  "A3": "N7",
  "BA1": "N8",
  "TEN": "N9",
  "~{RESET}": "P1",
  "A6": "P2",
  "A0": "P3",
  "A1": "P7",
  "A5": "P8",
  "~{ALERT}": "P9",
  "V_{DD}_R1": "R1",
  "A8": "R2",
  "A2": "R3",
  "A9": "R7",
  "A7": "R8",
  "V_{PP}_R9": "R9",
  "V_{SS}_T1": "T1",
  "A11": "T2",
  "PAR": "T3",
  "NF/NC": "T7",
  "A13": "T8",
  "V_{DD}_T9": "T9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DDQ}_A1": "power_in", "V_{SSQ}_A2": "power_in", DQ8: "bidirectional", UDQS_c: "bidirectional", "V_{SSQ}_A8": "passive", "V_{DDQ}_A9": "passive", "V_{PP}_B1": "power_in", "V_{SS}_B2": "power_in", "V_{DD}_B3": "passive", UDQS_t: "bidirectional", DQ9: "bidirectional", "V_{DD}_B9": "power_in", "V_{DDQ}_C1": "passive", DQ12: "bidirectional", DQ10: "bidirectional", DQ11: "bidirectional", DQ13: "bidirectional", "V_{SSQ}_C9": "passive", "V_{DD}_D1": "passive", "V_{SSQ}_D2": "passive", DQ14: "bidirectional", DQ15: "bidirectional", "V_{SSQ}_D8": "passive", "V_{DDQ}_D9": "passive", "V_{SS}_E1": "passive", "NF/~{UDM}/~{UDBI}": "bidirectional", "V_{SSQ}_E3": "passive", "NF/~{LDM}/~{LDBI}": "bidirectional", "V_{SSQ}_E8": "passive", "V_{SS}_E9": "passive", "V_{SSQ}_F1": "passive", "V_{DDQ}_F2": "passive", LDQS_c: "bidirectional", DQ1: "bidirectional", "V_{DDQ}_F8": "passive", ZQ: "passive", "V_{DDQ}_G1": "passive", DQ0: "bidirectional", LDQS_t: "bidirectional", "V_{DD}_G7": "passive", "V_{SS}_G8": "passive", "V_{DDQ}_G9": "passive", "V_{SSQ}_H1": "passive", DQ4: "bidirectional", DQ2: "bidirectional", DQ3: "bidirectional", DQ5: "bidirectional", "V_{SSQ}_H9": "passive", "V_{DD}_J1": "passive", "V_{DDQ}_J2": "passive", DQ6: "bidirectional", DQ7: "bidirectional", "V_{DDQ}_J8": "passive", "V_{DD}_J9": "passive", "V_{SS}_K1": "passive", CKE: "input", ODT: "input", CK_t: "input", CK_c: "input", "V_{SS}_K9": "passive", "V_{DD}_L1": "passive", "A14/~{WE}": "input", "~{ACT}": "input", "~{CS}": "input", "A16/~{RAS}": "input", "V_{DD}_L9": "passive", "V_{REFCA}": "passive", BG0: "input", "A10/AP": "input", "A12/~{BC}": "input", "A15/~{CAS}": "input", "V_{SS}_M9": "passive", "V_{SS}_N1": "passive", BA0: "input", A4: "input", A3: "input", BA1: "input", TEN: "input", "~{RESET}": "input", A6: "input", A0: "input", A1: "input", A5: "input", "~{ALERT}": "open_collector", "V_{DD}_R1": "passive", A8: "input", A2: "input", A9: "input", A7: "input", "V_{PP}_R9": "passive", "V_{SS}_T1": "passive", A11: "input", PAR: "input", "NF/NC": "no_connect", A13: "input", "V_{DD}_T9": "passive", ...opts.pinTypes } });
  }
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
 */
export class H5AN8G6NAFR_xxC extends Component.withPins({
  "V_{DDQ}_A1": "A1",
  "V_{SSQ}_A2": "A2",
  "DQ8": "A3",
  "UDQS_c": "A7",
  "V_{SSQ}_A8": "A8",
  "V_{DDQ}_A9": "A9",
  "V_{PP}_B1": "B1",
  "V_{SS}_B2": "B2",
  "V_{DD}_B3": "B3",
  "UDQS_t": "B7",
  "DQ9": "B8",
  "V_{DD}_B9": "B9",
  "V_{DDQ}_C1": "C1",
  "DQ12": "C2",
  "DQ10": "C3",
  "DQ11": "C7",
  "DQ13": "C8",
  "V_{SSQ}_C9": "C9",
  "V_{DD}_D1": "D1",
  "V_{SSQ}_D2": "D2",
  "DQ14": "D3",
  "DQ15": "D7",
  "V_{SSQ}_D8": "D8",
  "V_{DDQ}_D9": "D9",
  "V_{SS}_E1": "E1",
  "NF/~{UDM}/~{UDBI}": "E2",
  "V_{SSQ}_E3": "E3",
  "NF/~{LDM}/~{LDBI}": "E7",
  "V_{SSQ}_E8": "E8",
  "V_{SS}_E9": "E9",
  "V_{SSQ}_F1": "F1",
  "V_{DDQ}_F2": "F2",
  "LDQS_c": "F3",
  "DQ1": "F7",
  "V_{DDQ}_F8": "F8",
  "ZQ": "F9",
  "V_{DDQ}_G1": "G1",
  "DQ0": "G2",
  "LDQS_t": "G3",
  "V_{DD}_G7": "G7",
  "V_{SS}_G8": "G8",
  "V_{DDQ}_G9": "G9",
  "V_{SSQ}_H1": "H1",
  "DQ4": "H2",
  "DQ2": "H3",
  "DQ3": "H7",
  "DQ5": "H8",
  "V_{SSQ}_H9": "H9",
  "V_{DD}_J1": "J1",
  "V_{DDQ}_J2": "J2",
  "DQ6": "J3",
  "DQ7": "J7",
  "V_{DDQ}_J8": "J8",
  "V_{DD}_J9": "J9",
  "V_{SS}_K1": "K1",
  "CKE": "K2",
  "ODT": "K3",
  "CK_t": "K7",
  "CK_c": "K8",
  "V_{SS}_K9": "K9",
  "V_{DD}_L1": "L1",
  "A14/~{WE}": "L2",
  "~{ACT}": "L3",
  "~{CS}": "L7",
  "A16/~{RAS}": "L8",
  "V_{DD}_L9": "L9",
  "V_{REFCA}": "M1",
  "BG0": "M2",
  "A10/AP": "M3",
  "A12/~{BC}": "M7",
  "A15/~{CAS}": "M8",
  "V_{SS}_M9": "M9",
  "V_{SS}_N1": "N1",
  "BA0": "N2",
  "A4": "N3",
  "A3": "N7",
  "BA1": "N8",
  "TEN": "N9",
  "~{RESET}": "P1",
  "A6": "P2",
  "A0": "P3",
  "A1": "P7",
  "A5": "P8",
  "~{ALERT}": "P9",
  "V_{DD}_R1": "R1",
  "A8": "R2",
  "A2": "R3",
  "A9": "R7",
  "A7": "R8",
  "V_{PP}_R9": "R9",
  "V_{SS}_T1": "T1",
  "A11": "T2",
  "PAR": "T3",
  "NF/NC": "T7",
  "A13": "T8",
  "V_{DD}_T9": "T9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DDQ}_A1": "power_in", "V_{SSQ}_A2": "power_in", DQ8: "bidirectional", UDQS_c: "bidirectional", "V_{SSQ}_A8": "passive", "V_{DDQ}_A9": "passive", "V_{PP}_B1": "power_in", "V_{SS}_B2": "power_in", "V_{DD}_B3": "passive", UDQS_t: "bidirectional", DQ9: "bidirectional", "V_{DD}_B9": "power_in", "V_{DDQ}_C1": "passive", DQ12: "bidirectional", DQ10: "bidirectional", DQ11: "bidirectional", DQ13: "bidirectional", "V_{SSQ}_C9": "passive", "V_{DD}_D1": "passive", "V_{SSQ}_D2": "passive", DQ14: "bidirectional", DQ15: "bidirectional", "V_{SSQ}_D8": "passive", "V_{DDQ}_D9": "passive", "V_{SS}_E1": "passive", "NF/~{UDM}/~{UDBI}": "bidirectional", "V_{SSQ}_E3": "passive", "NF/~{LDM}/~{LDBI}": "bidirectional", "V_{SSQ}_E8": "passive", "V_{SS}_E9": "passive", "V_{SSQ}_F1": "passive", "V_{DDQ}_F2": "passive", LDQS_c: "bidirectional", DQ1: "bidirectional", "V_{DDQ}_F8": "passive", ZQ: "passive", "V_{DDQ}_G1": "passive", DQ0: "bidirectional", LDQS_t: "bidirectional", "V_{DD}_G7": "passive", "V_{SS}_G8": "passive", "V_{DDQ}_G9": "passive", "V_{SSQ}_H1": "passive", DQ4: "bidirectional", DQ2: "bidirectional", DQ3: "bidirectional", DQ5: "bidirectional", "V_{SSQ}_H9": "passive", "V_{DD}_J1": "passive", "V_{DDQ}_J2": "passive", DQ6: "bidirectional", DQ7: "bidirectional", "V_{DDQ}_J8": "passive", "V_{DD}_J9": "passive", "V_{SS}_K1": "passive", CKE: "input", ODT: "input", CK_t: "input", CK_c: "input", "V_{SS}_K9": "passive", "V_{DD}_L1": "passive", "A14/~{WE}": "input", "~{ACT}": "input", "~{CS}": "input", "A16/~{RAS}": "input", "V_{DD}_L9": "passive", "V_{REFCA}": "passive", BG0: "input", "A10/AP": "input", "A12/~{BC}": "input", "A15/~{CAS}": "input", "V_{SS}_M9": "passive", "V_{SS}_N1": "passive", BA0: "input", A4: "input", A3: "input", BA1: "input", TEN: "input", "~{RESET}": "input", A6: "input", A0: "input", A1: "input", A5: "input", "~{ALERT}": "open_collector", "V_{DD}_R1": "passive", A8: "input", A2: "input", A9: "input", A7: "input", "V_{PP}_R9": "passive", "V_{SS}_T1": "passive", A11: "input", PAR: "input", "NF/NC": "no_connect", A13: "input", "V_{DD}_T9": "passive", ...opts.pinTypes } });
  }
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
 */
export class H5AN8G8NAFR_UHC extends Component.withPins({
  "VDD_A1": "A1",
  "VSSQ_A2": "A2",
  "TDQS_c": "A3",
  "TDQS_t/~{DM/DBI}": "A7",
  "VSSQ_A8": "A8",
  "VSS_A9": "A9",
  "VPP_B1": "B1",
  "VDDQ_B2": "B2",
  "DQS_c": "B3",
  "DQ1": "B7",
  "VDDQ_B8": "B8",
  "ZQ": "B9",
  "VDDQ_C1": "C1",
  "DQ0": "C2",
  "DQS_t": "C3",
  "VDD_C7": "C7",
  "VSS_C8": "C8",
  "VDDQ_C9": "C9",
  "VSSQ_D1": "D1",
  "DQ4": "D2",
  "DQ2": "D3",
  "DQ3": "D7",
  "DQ5": "D8",
  "VSSQ_D9": "D9",
  "VSS_E1": "E1",
  "VDDQ_E2": "E2",
  "DQ6": "E3",
  "DQ7": "E7",
  "VDDQ_E8": "E8",
  "VSS_E9": "E9",
  "VDD_F1": "F1",
  "NC/C2/ODT1": "F2",
  "ODT": "F3",
  "CK_t": "F7",
  "CK_c": "F8",
  "VDD_F9": "F9",
  "VSS_G1": "G1",
  "NC/C0/CKE1": "G2",
  "CKE": "G3",
  "~{CS}": "G7",
  "NC/C1/~{CS1}": "G8",
  "TEN": "G9",
  "VDD_H1": "H1",
  "A14/~{WE}": "H2",
  "~{ACT}": "H3",
  "A15/~{CAS}": "H7",
  "A16/~{RAS}": "H8",
  "VSS_H9": "H9",
  "VREFCA": "J1",
  "BG0": "J2",
  "A10/AP": "J3",
  "A12/~{BC}": "J7",
  "BG1": "J8",
  "VDD_J9": "J9",
  "VSS_K1": "K1",
  "BA0": "K2",
  "A4": "K3",
  "A3": "K7",
  "BA1": "K8",
  "VSS_K9": "K9",
  "~{RESET}": "L1",
  "A6": "L2",
  "A0": "L3",
  "A1": "L7",
  "A5": "L8",
  "~{ALERT}": "L9",
  "VDD_M1": "M1",
  "A8": "M2",
  "A2": "M3",
  "A9": "M7",
  "A7": "M8",
  "VPP_M9": "M9",
  "VSS_N1": "N1",
  "A11": "N2",
  "PAR": "N3",
  "A17/NC": "N7",
  "A13": "N8",
  "VDD_N9": "N9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_A1: "power_in", VSSQ_A2: "power_in", TDQS_c: "output", "TDQS_t/~{DM/DBI}": "bidirectional", VSSQ_A8: "passive", VSS_A9: "power_in", VPP_B1: "power_in", VDDQ_B2: "power_in", DQS_c: "bidirectional", DQ1: "bidirectional", VDDQ_B8: "passive", ZQ: "passive", VDDQ_C1: "passive", DQ0: "bidirectional", DQS_t: "bidirectional", VDD_C7: "passive", VSS_C8: "passive", VDDQ_C9: "passive", VSSQ_D1: "passive", DQ4: "bidirectional", DQ2: "bidirectional", DQ3: "bidirectional", DQ5: "bidirectional", VSSQ_D9: "passive", VSS_E1: "passive", VDDQ_E2: "passive", DQ6: "bidirectional", DQ7: "bidirectional", VDDQ_E8: "passive", VSS_E9: "passive", VDD_F1: "passive", "NC/C2/ODT1": "passive", ODT: "input", CK_t: "input", CK_c: "input", VDD_F9: "passive", VSS_G1: "passive", "NC/C0/CKE1": "passive", CKE: "input", "~{CS}": "input", "NC/C1/~{CS1}": "passive", TEN: "input", VDD_H1: "passive", "A14/~{WE}": "input", "~{ACT}": "input", "A15/~{CAS}": "input", "A16/~{RAS}": "input", VSS_H9: "passive", VREFCA: "passive", BG0: "input", "A10/AP": "input", "A12/~{BC}": "input", BG1: "input", VDD_J9: "passive", VSS_K1: "passive", BA0: "input", A4: "input", A3: "input", BA1: "input", VSS_K9: "passive", "~{RESET}": "input", A6: "input", A0: "input", A1: "input", A5: "input", "~{ALERT}": "open_collector", VDD_M1: "passive", A8: "input", A2: "input", A9: "input", A7: "input", VPP_M9: "passive", VSS_N1: "passive", A11: "input", PAR: "input", "A17/NC": "passive", A13: "input", VDD_N9: "passive", ...opts.pinTypes } });
  }
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
 */
export class HM50256P extends Component.withPins({
  "A_{8}": "1",
  "V_{CC}": "8",
  "A_{7}": "9",
  "V_{SS}": "16",
  "Din": "2",
  "~{WE}": "3",
  "~{RAS}": "4",
  "A_{0}": "5",
  "A_{2}": "6",
  "A_{1}": "7",
  "A_{5}": "10",
  "A_{4}": "11",
  "A_{3}": "12",
  "A_{6}": "13",
  "Dout": "14",
  "~{CAS}": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A_{8}": "input", "V_{CC}": "power_in", "A_{7}": "input", "V_{SS}": "power_in", Din: "input", "~{WE}": "input", "~{RAS}": "input", "A_{0}": "input", "A_{2}": "input", "A_{1}": "input", "A_{5}": "input", "A_{4}": "input", "A_{3}": "input", "A_{6}": "input", Dout: "tri_state", "~{CAS}": "input", ...opts.pinTypes } });
  }
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
 */
export class HM62256BLP extends Component.withPins({
  "GND": "14",
  "VCC": "28",
  "A14": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "Q0": "11",
  "Q1": "12",
  "Q2": "13",
  "Q3": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{CS}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", Q0: "tri_state", Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Q4: "tri_state", Q5: "tri_state", Q6: "tri_state", Q7: "tri_state", "~{CS}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class HM628128D_DIP32_SOP32 extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class HM628128D_TSOP32 extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class HY6264AxP extends Component.withPins({
  "GND": "14",
  "VCC": "28",
  "NC": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "I/O0": "11",
  "I/O1": "12",
  "I/O2": "13",
  "I/O3": "15",
  "I/O4": "16",
  "I/O5": "17",
  "I/O6": "18",
  "I/O7": "19",
  "~{CS1}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "CS2": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", CS2: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class HY6264AxJ extends Component.withPins({
  "GND": "14",
  "VCC": "28",
  "NC": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "I/O0": "11",
  "I/O1": "12",
  "I/O2": "13",
  "I/O3": "15",
  "I/O4": "16",
  "I/O5": "17",
  "I/O6": "18",
  "I/O7": "19",
  "~{CS1}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "CS2": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", CS2: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class IDT7006PF extends Component.withPins({
  "I/O2L": "1",
  "I/O3L": "2",
  "I/O4L": "3",
  "I/O5L": "4",
  "GND_5": "5",
  "I/O6L": "6",
  "I/O7L": "7",
  "VCC_8": "8",
  "GND_9": "9",
  "I/O0R": "10",
  "I/O1R": "11",
  "I/O2R": "12",
  "VCC_13": "13",
  "I/O3R": "14",
  "I/O4R": "15",
  "I/O5R": "16",
  "I/O6R": "17",
  "I/O7R": "18",
  "~{OE}R": "19",
  "R/~{W}R": "20",
  "~{SEM}R": "21",
  "~{CE}R": "22",
  "A13R": "23",
  "GND_24": "24",
  "A12R": "25",
  "A11R": "26",
  "A10R": "27",
  "A9R": "28",
  "A8R": "29",
  "A7R": "30",
  "A6R": "31",
  "A5R": "32",
  "A4R": "33",
  "A3R": "34",
  "A2R": "35",
  "A1R": "36",
  "A0R": "37",
  "~{INT}R": "38",
  "~{BUSY}R": "39",
  "M/~{S}": "40",
  "GND_41": "41",
  "~{BUSY}L": "42",
  "~{INT}L": "43",
  "A0L": "44",
  "A1L": "45",
  "A2L": "46",
  "A3L": "47",
  "A4L": "48",
  "A5L": "49",
  "A6L": "50",
  "A7L": "51",
  "A8L": "52",
  "A9L": "53",
  "A10L": "54",
  "A11L": "55",
  "A12L": "56",
  "VCC_57": "57",
  "A13L": "58",
  "~{CE}L": "59",
  "~{SEM}L": "60",
  "R/~{W}L": "61",
  "~{OE}L": "62",
  "I/O0L": "63",
  "I/O1L": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O2L": "bidirectional", "I/O3L": "bidirectional", "I/O4L": "bidirectional", "I/O5L": "bidirectional", GND_5: "power_in", "I/O6L": "bidirectional", "I/O7L": "bidirectional", VCC_8: "power_in", GND_9: "passive", "I/O0R": "bidirectional", "I/O1R": "bidirectional", "I/O2R": "bidirectional", VCC_13: "power_in", "I/O3R": "bidirectional", "I/O4R": "bidirectional", "I/O5R": "bidirectional", "I/O6R": "bidirectional", "I/O7R": "bidirectional", "~{OE}R": "input", "R/~{W}R": "input", "~{SEM}R": "input", "~{CE}R": "input", A13R: "input", GND_24: "passive", A12R: "input", A11R: "input", A10R: "input", A9R: "input", A8R: "input", A7R: "input", A6R: "input", A5R: "input", A4R: "input", A3R: "input", A2R: "input", A1R: "input", A0R: "input", "~{INT}R": "output", "~{BUSY}R": "output", "M/~{S}": "input", GND_41: "passive", "~{BUSY}L": "output", "~{INT}L": "output", A0L: "input", A1L: "input", A2L: "input", A3L: "input", A4L: "input", A5L: "input", A6L: "input", A7L: "input", A8L: "input", A9L: "input", A10L: "input", A11L: "input", A12L: "input", VCC_57: "power_in", A13L: "input", "~{CE}L": "input", "~{SEM}L": "input", "R/~{W}L": "input", "~{OE}L": "input", "I/O0L": "bidirectional", "I/O1L": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_RAM:IDT7006PF";
  override referencePrefix = "U";
}

/**
 * IDT7027_TQ100
 *
 * KiCad symbol: `Memory_RAM:IDT7027_TQ100`. Reference prefix: `U`.
 */
export class IDT7027_TQ100 extends Component.withPins({
  "A9L": "1",
  "A10L": "2",
  "A11L": "3",
  "A12L": "4",
  "A13L": "5",
  "A14L": "6",
  "LBL": "10",
  "UBL": "11",
  "CE0L": "12",
  "CE1L": "13",
  "SEML": "14",
  "VCC_15": "15",
  "R/WL": "16",
  "OEL": "17",
  "GND_18": "18",
  "GND_19": "19",
  "I/O15L": "20",
  "I/O14L": "21",
  "I/O13L": "22",
  "I/O12L": "23",
  "I/O11L": "24",
  "I/O10L": "25",
  "I/O9L": "26",
  "I/O8L": "27",
  "VCC_28": "28",
  "I/O7L": "29",
  "I/O6L": "30",
  "I/O5L": "31",
  "I/O4L": "32",
  "I/O3L": "33",
  "I/O2L": "34",
  "GND_35": "35",
  "I/O1L": "36",
  "I/O0L": "37",
  "GND_38": "38",
  "I/O0R": "39",
  "I/O1R": "40",
  "I/O2R": "41",
  "I/O3R": "42",
  "I/O4R": "43",
  "I/O5R": "44",
  "I/O6R": "45",
  "VCC_46": "46",
  "I/O7R": "47",
  "I/O8R": "48",
  "I/O9R": "49",
  "I/O10R": "51",
  "I/O11R": "52",
  "I/O12R": "53",
  "I/O13R": "54",
  "I/O14R": "55",
  "I/O15R": "56",
  "GND_57": "57",
  "GND_58": "58",
  "OER": "59",
  "R/WR": "60",
  "GND_61": "61",
  "SEMR": "62",
  "CE1R": "63",
  "CE0R": "64",
  "UBR": "65",
  "LBR": "66",
  "A14R": "70",
  "A13R": "71",
  "A12R": "72",
  "A11R": "73",
  "A10R": "74",
  "A9R": "75",
  "A8R": "76",
  "A7R": "77",
  "A6R": "78",
  "A5R": "79",
  "A4R": "80",
  "A3R": "81",
  "A2R": "82",
  "A1R": "83",
  "A0R": "84",
  "INTR": "85",
  "BUSYR": "86",
  "M/S": "87",
  "GND_88": "88",
  "BUSYL": "89",
  "INTL": "90",
  "A0L": "92",
  "A1L": "93",
  "A2L": "94",
  "A3L": "95",
  "A4L": "96",
  "A5L": "97",
  "A6L": "98",
  "A7L": "99",
  "A8L": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A9L: "input", A10L: "input", A11L: "input", A12L: "input", A13L: "input", A14L: "input", LBL: "input", UBL: "input", CE0L: "input", CE1L: "input", SEML: "input", VCC_15: "power_in", "R/WL": "input", OEL: "input", GND_18: "power_in", GND_19: "passive", "I/O15L": "bidirectional", "I/O14L": "bidirectional", "I/O13L": "bidirectional", "I/O12L": "bidirectional", "I/O11L": "bidirectional", "I/O10L": "bidirectional", "I/O9L": "bidirectional", "I/O8L": "bidirectional", VCC_28: "passive", "I/O7L": "bidirectional", "I/O6L": "bidirectional", "I/O5L": "bidirectional", "I/O4L": "bidirectional", "I/O3L": "bidirectional", "I/O2L": "bidirectional", GND_35: "passive", "I/O1L": "bidirectional", "I/O0L": "bidirectional", GND_38: "passive", "I/O0R": "bidirectional", "I/O1R": "bidirectional", "I/O2R": "bidirectional", "I/O3R": "bidirectional", "I/O4R": "bidirectional", "I/O5R": "bidirectional", "I/O6R": "bidirectional", VCC_46: "passive", "I/O7R": "bidirectional", "I/O8R": "bidirectional", "I/O9R": "bidirectional", "I/O10R": "bidirectional", "I/O11R": "bidirectional", "I/O12R": "bidirectional", "I/O13R": "bidirectional", "I/O14R": "bidirectional", "I/O15R": "bidirectional", GND_57: "passive", GND_58: "passive", OER: "input", "R/WR": "input", GND_61: "passive", SEMR: "input", CE1R: "input", CE0R: "input", UBR: "input", LBR: "input", A14R: "input", A13R: "input", A12R: "input", A11R: "input", A10R: "input", A9R: "input", A8R: "input", A7R: "input", A6R: "input", A5R: "input", A4R: "input", A3R: "input", A2R: "input", A1R: "input", A0R: "input", INTR: "output", BUSYR: "bidirectional", "M/S": "input", GND_88: "passive", BUSYL: "bidirectional", INTL: "output", A0L: "input", A1L: "input", A2L: "input", A3L: "input", A4L: "input", A5L: "input", A6L: "input", A7L: "input", A8L: "input", ...opts.pinTypes } });
  }
  override schema = "Memory_RAM:IDT7027_TQ100";
  override referencePrefix = "U";
}

/**
 * IDT7132
 *
 * KiCad symbol: `Memory_RAM:IDT7132`. Reference prefix: `U`.
 */
export class IDT7132 extends Component.withPins({
  "/CEL": "1",
  "R/WL": "2",
  "/BSYL": "3",
  "A10L": "4",
  "/OEL": "5",
  "A0L": "6",
  "A1L": "7",
  "A2L": "8",
  "A3L": "9",
  "A4L": "10",
  "A5L": "11",
  "A6L": "12",
  "A7L": "13",
  "A8L": "14",
  "A9L": "15",
  "I/O0L": "16",
  "I/O1L": "17",
  "I/O2L": "18",
  "I/O3L": "19",
  "I/O4L": "20",
  "I/O5L": "21",
  "I/O6L": "22",
  "I/O7L": "23",
  "GND": "24",
  "I/O0R": "25",
  "I/O1R": "26",
  "I/O2R": "27",
  "I/O3R": "28",
  "I/O4R": "29",
  "I/O5R": "30",
  "I/O6R": "31",
  "I/O7R": "32",
  "A9R": "33",
  "A8R": "34",
  "A7R": "35",
  "A6R": "36",
  "A5R": "37",
  "A4R": "38",
  "A3R": "39",
  "A2R": "40",
  "A1R": "41",
  "A0R": "42",
  "/OER": "43",
  "A10R": "44",
  "/BSYR": "45",
  "R/WR": "46",
  "/CER": "47",
  "VCC": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "/CEL": "input", "R/WL": "input", "/BSYL": "output", A10L: "input", "/OEL": "input", A0L: "input", A1L: "input", A2L: "input", A3L: "input", A4L: "input", A5L: "input", A6L: "input", A7L: "input", A8L: "input", A9L: "input", "I/O0L": "input", "I/O1L": "input", "I/O2L": "input", "I/O3L": "input", "I/O4L": "input", "I/O5L": "input", "I/O6L": "input", "I/O7L": "input", GND: "power_in", "I/O0R": "input", "I/O1R": "input", "I/O2R": "input", "I/O3R": "input", "I/O4R": "input", "I/O5R": "input", "I/O6R": "input", "I/O7R": "input", A9R: "input", A8R: "input", A7R: "input", A6R: "input", A5R: "input", A4R: "input", A3R: "input", A2R: "input", A1R: "input", A0R: "input", "/OER": "input", A10R: "input", "/BSYR": "output", "R/WR": "input", "/CER": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_RAM:IDT7132";
  override referencePrefix = "U";
}

/**
 * 165 pins BGA 3.3V high-speed 9 Megabit synchronous SRAMs 512K x 18 (or  256K x 36)
 *
 * KiCad symbol: `Memory_RAM:IDT71V65903S`. Reference prefix: `U`.
 */
export class IDT71V65903S extends Component.withPins({
  "A7": "A2",
  "/CE1": "A3",
  "/BW2": "A4",
  "/CE2": "A6",
  "/CEN": "A7",
  "ADV/LD": "A8",
  "A18": "A9",
  "A8": "A10",
  "A10": "A11",
  "A6": "B2",
  "CE2": "B3",
  "/BW1": "B5",
  "CLK": "B6",
  "R/W": "B7",
  "/OE": "B8",
  "A9": "B10",
  "VDDQ_C3": "C3",
  "VSS_C4": "C4",
  "VSS_C5": "C5",
  "VSS_C6": "C6",
  "VSS_C7": "C7",
  "VSS_C8": "C8",
  "VDDQ_C9": "C9",
  "IOP1": "C11",
  "IO8": "D2",
  "VDDQ_D3": "D3",
  "VDD_D4": "D4",
  "VSS_D5": "D5",
  "VSS_D6": "D6",
  "VSS_D7": "D7",
  "VDD_D8": "D8",
  "VDDQ_D9": "D9",
  "IO7": "D11",
  "IO9": "E2",
  "VDDQ_E3": "E3",
  "VDD_E4": "E4",
  "VSS_E5": "E5",
  "VSS_E6": "E6",
  "VSS_E7": "E7",
  "VDD_E8": "E8",
  "VDDQ_E9": "E9",
  "IO6": "E11",
  "IO10": "F2",
  "VDDQ_F3": "F3",
  "VDD_F4": "F4",
  "VSS_F5": "F5",
  "VSS_F6": "F6",
  "VSS_F7": "F7",
  "VDD_F8": "F8",
  "VDDQ_F9": "F9",
  "IO5": "F11",
  "IO11": "G2",
  "VDDQ_G3": "G3",
  "VDD_G4": "G4",
  "VSS_G5": "G5",
  "VSS_G6": "G6",
  "VSS_G7": "G7",
  "VDD_G8": "G8",
  "VDDQ_G9": "G9",
  "IO4": "G11",
  "VSSx_H1": "H1",
  "VDDx": "H2",
  "VDD_H4": "H4",
  "VSS_H5": "H5",
  "VSS_H6": "H6",
  "VSS_H7": "H7",
  "VDD_H8": "H8",
  "ZZ": "H11",
  "IO12": "J1",
  "VDDQ_J3": "J3",
  "VDD_J4": "J4",
  "VSS_J5": "J5",
  "VSS_J6": "J6",
  "VSS_J7": "J7",
  "VDD_J8": "J8",
  "VDDQ_J9": "J9",
  "IO3": "J10",
  "IO13": "K1",
  "VDDQ_K3": "K3",
  "VDD_K4": "K4",
  "VSS_K5": "K5",
  "VSS_K6": "K6",
  "VSS_K7": "K7",
  "VDD_K8": "K8",
  "VDDQ_K9": "K9",
  "IO2": "K10",
  "IO14": "L1",
  "VDDQ_L3": "L3",
  "VDD_L4": "L4",
  "VSS_L5": "L5",
  "VSS_L6": "L6",
  "VSS_L7": "L7",
  "VDD_L8": "L8",
  "VDDQ_L9": "L9",
  "IO1": "L10",
  "IO15": "M1",
  "VDDQ_M3": "M3",
  "VDD_M4": "M4",
  "VSS_M5": "M5",
  "VSS_M6": "M6",
  "VSS_M7": "M7",
  "VDD_M8": "M8",
  "VDDQ_M9": "M9",
  "IO0": "M10",
  "IOP2": "N1",
  "VDDQ_N3": "N3",
  "VSS_N4": "N4",
  "VSSx_N7": "N7",
  "VSS_N8": "N8",
  "VDDQ_N9": "N9",
  "A5": "P3",
  "A2": "P4",
  "A1": "P6",
  "A11": "P8",
  "A14": "P9",
  "A15": "P10",
  "/LBO": "R1",
  "A4": "R3",
  "A3": "R4",
  "A0": "R6",
  "A12": "R8",
  "A13": "R9",
  "A16": "R10",
  "A17": "R11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A7: "input", "/CE1": "input", "/BW2": "input", "/CE2": "input", "/CEN": "input", "ADV/LD": "input", A18: "input", A8: "input", A10: "input", A6: "input", CE2: "input", "/BW1": "input", CLK: "input", "R/W": "input", "/OE": "input", A9: "input", VDDQ_C3: "power_in", VSS_C4: "passive", VSS_C5: "passive", VSS_C6: "passive", VSS_C7: "passive", VSS_C8: "passive", VDDQ_C9: "passive", IOP1: "bidirectional", IO8: "bidirectional", VDDQ_D3: "passive", VDD_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", VSS_D7: "passive", VDD_D8: "passive", VDDQ_D9: "passive", IO7: "bidirectional", IO9: "bidirectional", VDDQ_E3: "passive", VDD_E4: "passive", VSS_E5: "passive", VSS_E6: "passive", VSS_E7: "passive", VDD_E8: "passive", VDDQ_E9: "passive", IO6: "bidirectional", IO10: "bidirectional", VDDQ_F3: "passive", VDD_F4: "passive", VSS_F5: "passive", VSS_F6: "passive", VSS_F7: "passive", VDD_F8: "passive", VDDQ_F9: "passive", IO5: "bidirectional", IO11: "bidirectional", VDDQ_G3: "passive", VDD_G4: "passive", VSS_G5: "passive", VSS_G6: "passive", VSS_G7: "passive", VDD_G8: "passive", VDDQ_G9: "passive", IO4: "bidirectional", VSSx_H1: "passive", VDDx: "passive", VDD_H4: "passive", VSS_H5: "passive", VSS_H6: "passive", VSS_H7: "passive", VDD_H8: "passive", ZZ: "input", IO12: "bidirectional", VDDQ_J3: "passive", VDD_J4: "passive", VSS_J5: "passive", VSS_J6: "passive", VSS_J7: "passive", VDD_J8: "passive", VDDQ_J9: "passive", IO3: "bidirectional", IO13: "bidirectional", VDDQ_K3: "passive", VDD_K4: "passive", VSS_K5: "passive", VSS_K6: "passive", VSS_K7: "passive", VDD_K8: "passive", VDDQ_K9: "passive", IO2: "bidirectional", IO14: "bidirectional", VDDQ_L3: "passive", VDD_L4: "passive", VSS_L5: "passive", VSS_L6: "passive", VSS_L7: "passive", VDD_L8: "passive", VDDQ_L9: "passive", IO1: "bidirectional", IO15: "bidirectional", VDDQ_M3: "passive", VDD_M4: "passive", VSS_M5: "passive", VSS_M6: "passive", VSS_M7: "passive", VDD_M8: "passive", VDDQ_M9: "passive", IO0: "bidirectional", IOP2: "bidirectional", VDDQ_N3: "passive", VSS_N4: "passive", VSSx_N7: "passive", VSS_N8: "passive", VDDQ_N9: "power_in", A5: "input", A2: "input", A1: "input", A11: "input", A14: "input", A15: "input", "/LBO": "input", A4: "input", A3: "input", A0: "input", A12: "input", A13: "input", A16: "input", A17: "input", ...opts.pinTypes } });
  }
  override schema = "Memory_RAM:IDT71V65903S";
  override referencePrefix = "U";
}

/**
 * IDT7201
 *
 * KiCad symbol: `Memory_RAM:IDT7201`. Reference prefix: `U`.
 */
export class IDT7201 extends Component.withPins({
  "WR": "1",
  "D8": "2",
  "D3": "3",
  "D2": "4",
  "D1": "5",
  "D0": "6",
  "XI": "7",
  "FF": "8",
  "Q0": "9",
  "Q1": "10",
  "Q2": "11",
  "Q3": "12",
  "Q8": "13",
  "VSS": "14",
  "RD": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "XO": "20",
  "EF": "21",
  "CLR": "22",
  "FL": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { WR: "input", D8: "input", D3: "input", D2: "input", D1: "input", D0: "input", XI: "input", FF: "output", Q0: "tri_state", Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Q8: "tri_state", VSS: "power_in", RD: "input", Q4: "tri_state", Q5: "tri_state", Q6: "tri_state", Q7: "tri_state", XO: "input", EF: "output", CLR: "input", FL: "input", D7: "input", D6: "input", D5: "input", D4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_RAM:IDT7201";
  override referencePrefix = "U";
}

/**
 * IDT7202
 *
 * KiCad symbol: `Memory_RAM:IDT7202`. Reference prefix: `U`.
 */
export class IDT7202 extends Component.withPins({
  "WR": "1",
  "D8": "2",
  "D3": "3",
  "D2": "4",
  "D1": "5",
  "D0": "6",
  "XI": "7",
  "FF": "8",
  "Q0": "9",
  "Q1": "10",
  "Q2": "11",
  "Q3": "12",
  "Q8": "13",
  "VSS": "14",
  "RD": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "XO": "20",
  "EF": "21",
  "CLR": "22",
  "FL": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { WR: "input", D8: "input", D3: "input", D2: "input", D1: "input", D0: "input", XI: "input", FF: "output", Q0: "tri_state", Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Q8: "tri_state", VSS: "power_in", RD: "input", Q4: "tri_state", Q5: "tri_state", Q6: "tri_state", Q7: "tri_state", XO: "input", EF: "output", CLR: "input", FL: "input", D7: "input", D6: "input", D5: "input", D4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IDT7204 extends Component.withPins({
  "~{W}": "1",
  "D8": "2",
  "D3": "3",
  "D2": "4",
  "D1": "5",
  "D0": "6",
  "~{XI}": "7",
  "~{FF}": "8",
  "Q0": "9",
  "Q1": "10",
  "Q2": "11",
  "Q3": "12",
  "Q8": "13",
  "GND": "14",
  "~{R}": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{HF}/~{XO}": "20",
  "~{EF}": "21",
  "~{RS}": "22",
  "~{FL}/~{RT}": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{W}": "input", D8: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{XI}": "input", "~{FF}": "output", Q0: "output", Q1: "output", Q2: "output", Q3: "output", Q8: "output", GND: "power_in", "~{R}": "input", Q4: "output", Q5: "output", Q6: "output", Q7: "output", "~{HF}/~{XO}": "output", "~{EF}": "output", "~{RS}": "input", "~{FL}/~{RT}": "input", D7: "input", D6: "input", D5: "input", D4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IDT7203 extends Component.withPins({
  "~{W}": "1",
  "D8": "2",
  "D3": "3",
  "D2": "4",
  "D1": "5",
  "D0": "6",
  "~{XI}": "7",
  "~{FF}": "8",
  "Q0": "9",
  "Q1": "10",
  "Q2": "11",
  "Q3": "12",
  "Q8": "13",
  "GND": "14",
  "~{R}": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{HF}/~{XO}": "20",
  "~{EF}": "21",
  "~{RS}": "22",
  "~{FL}/~{RT}": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{W}": "input", D8: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{XI}": "input", "~{FF}": "output", Q0: "output", Q1: "output", Q2: "output", Q3: "output", Q8: "output", GND: "power_in", "~{R}": "input", Q4: "output", Q5: "output", Q6: "output", Q7: "output", "~{HF}/~{XO}": "output", "~{EF}": "output", "~{RS}": "input", "~{FL}/~{RT}": "input", D7: "input", D6: "input", D5: "input", D4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IDT7205 extends Component.withPins({
  "~{W}": "1",
  "D8": "2",
  "D3": "3",
  "D2": "4",
  "D1": "5",
  "D0": "6",
  "~{XI}": "7",
  "~{FF}": "8",
  "Q0": "9",
  "Q1": "10",
  "Q2": "11",
  "Q3": "12",
  "Q8": "13",
  "GND": "14",
  "~{R}": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{HF}/~{XO}": "20",
  "~{EF}": "21",
  "~{RS}": "22",
  "~{FL}/~{RT}": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{W}": "input", D8: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{XI}": "input", "~{FF}": "output", Q0: "output", Q1: "output", Q2: "output", Q3: "output", Q8: "output", GND: "power_in", "~{R}": "input", Q4: "output", Q5: "output", Q6: "output", Q7: "output", "~{HF}/~{XO}": "output", "~{EF}": "output", "~{RS}": "input", "~{FL}/~{RT}": "input", D7: "input", D6: "input", D5: "input", D4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IDT7206 extends Component.withPins({
  "~{W}": "1",
  "D8": "2",
  "D3": "3",
  "D2": "4",
  "D1": "5",
  "D0": "6",
  "~{XI}": "7",
  "~{FF}": "8",
  "Q0": "9",
  "Q1": "10",
  "Q2": "11",
  "Q3": "12",
  "Q8": "13",
  "GND": "14",
  "~{R}": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{HF}/~{XO}": "20",
  "~{EF}": "21",
  "~{RS}": "22",
  "~{FL}/~{RT}": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{W}": "input", D8: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{XI}": "input", "~{FF}": "output", Q0: "output", Q1: "output", Q2: "output", Q3: "output", Q8: "output", GND: "power_in", "~{R}": "input", Q4: "output", Q5: "output", Q6: "output", Q7: "output", "~{HF}/~{XO}": "output", "~{EF}": "output", "~{RS}": "input", "~{FL}/~{RT}": "input", D7: "input", D6: "input", D5: "input", D4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IDT7207 extends Component.withPins({
  "~{W}": "1",
  "D8": "2",
  "D3": "3",
  "D2": "4",
  "D1": "5",
  "D0": "6",
  "~{XI}": "7",
  "~{FF}": "8",
  "Q0": "9",
  "Q1": "10",
  "Q2": "11",
  "Q3": "12",
  "Q8": "13",
  "GND": "14",
  "~{R}": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{HF}/~{XO}": "20",
  "~{EF}": "21",
  "~{RS}": "22",
  "~{FL}/~{RT}": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{W}": "input", D8: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{XI}": "input", "~{FF}": "output", Q0: "output", Q1: "output", Q2: "output", Q3: "output", Q8: "output", GND: "power_in", "~{R}": "input", Q4: "output", Q5: "output", Q6: "output", Q7: "output", "~{HF}/~{XO}": "output", "~{EF}": "output", "~{RS}": "input", "~{FL}/~{RT}": "input", D7: "input", D6: "input", D5: "input", D4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IDT7208 extends Component.withPins({
  "~{W}": "1",
  "D8": "2",
  "D3": "3",
  "D2": "4",
  "D1": "5",
  "D0": "6",
  "~{XI}": "7",
  "~{FF}": "8",
  "Q0": "9",
  "Q1": "10",
  "Q2": "11",
  "Q3": "12",
  "Q8": "13",
  "GND": "14",
  "~{R}": "15",
  "Q4": "16",
  "Q5": "17",
  "Q6": "18",
  "Q7": "19",
  "~{HF}/~{XO}": "20",
  "~{EF}": "21",
  "~{RS}": "22",
  "~{FL}/~{RT}": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{W}": "input", D8: "input", D3: "input", D2: "input", D1: "input", D0: "input", "~{XI}": "input", "~{FF}": "output", Q0: "output", Q1: "output", Q2: "output", Q3: "output", Q8: "output", GND: "power_in", "~{R}": "input", Q4: "output", Q5: "output", Q6: "output", Q7: "output", "~{HF}/~{XO}": "output", "~{EF}": "output", "~{RS}": "input", "~{FL}/~{RT}": "input", D7: "input", D6: "input", D5: "input", D4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IS42S16400J_xC extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "GNDQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "GNDQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "LDQM": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "GND_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "NC_36": "36",
  "CKE": "37",
  "CLK": "38",
  "UDQM": "39",
  "NC_40": "40",
  "GND_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "GNDQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "GNDQ_52": "52",
  "DQ15": "53",
  "GND_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", GNDQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", GNDQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", LDQM: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", A10: "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", GND_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", NC_36: "no_connect", CKE: "input", CLK: "input", UDQM: "input", NC_40: "no_connect", GND_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", GNDQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", GNDQ_52: "passive", DQ15: "bidirectional", GND_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class IS42S16400J_xT extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "GNDQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "GNDQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "LDQM": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "GND_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "NC_36": "36",
  "CKE": "37",
  "CLK": "38",
  "UDQM": "39",
  "NC_40": "40",
  "GND_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "GNDQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "GNDQ_52": "52",
  "DQ15": "53",
  "GND_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", GNDQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", GNDQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", LDQM: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", A10: "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", GND_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", NC_36: "no_connect", CKE: "input", CLK: "input", UDQM: "input", NC_40: "no_connect", GND_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", GNDQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", GNDQ_52: "passive", DQ15: "bidirectional", GND_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class IS43LQ32256A_062BLI extends Component.withPins({
  "DNU_A1": "A1",
  "DNU_A2": "A2",
  "VSS_A3": "A3",
  "VDD2_A4": "A4",
  "VDD2_A9": "A9",
  "VSS_A10": "A10",
  "DNU_A11": "A11",
  "DNU_A12": "A12",
  "DNU_B1": "B1",
  "DQ0_A": "B2",
  "VDDQ_B3": "B3",
  "DQ7_A": "B4",
  "VDDQ_B5": "B5",
  "VDDQ_B8": "B8",
  "DQ15_A": "B9",
  "VDDQ_B10": "B10",
  "DQ8_A": "B11",
  "DNU_B12": "B12",
  "VSS_C1": "C1",
  "DQ1_A": "C2",
  "DMI0_A": "C3",
  "DQ6_A": "C4",
  "VSS_C5": "C5",
  "VSS_C8": "C8",
  "DQ14_A": "C9",
  "DMI1_A": "C10",
  "DQ9_A": "C11",
  "VSS_C12": "C12",
  "VDDQ_D1": "D1",
  "VSS_D2": "D2",
  "DQS0_T_A": "D3",
  "VSS_D4": "D4",
  "VDDQ_D5": "D5",
  "VDDQ_D8": "D8",
  "VSS_D9": "D9",
  "DQS1_T_A": "D10",
  "VSS_D11": "D11",
  "VDDQ_D12": "D12",
  "VSS_E1": "E1",
  "DQ2_A": "E2",
  "DQS0_C_A": "E3",
  "DQ5_A": "E4",
  "VSS_E5": "E5",
  "VSS_E8": "E8",
  "DQ13_A": "E9",
  "DQS1_C_A": "E10",
  "DQ10_A": "E11",
  "VSS_E12": "E12",
  "VDD1_F1": "F1",
  "DQ3_A": "F2",
  "VDDQ_F3": "F3",
  "DQ4_A": "F4",
  "VDD2_F5": "F5",
  "VDD2_F8": "F8",
  "DQ12_A": "F9",
  "VDDQ_F10": "F10",
  "DQ11_A": "F11",
  "VDD1_F12": "F12",
  "VSS_G1": "G1",
  "ODT_CA_A": "G2",
  "VSS_G3": "G3",
  "VDD1_G4": "G4",
  "VSS_G5": "G5",
  "VSS_G8": "G8",
  "VDD1_G9": "G9",
  "VSS_G10": "G10",
  "VSS_G12": "G12",
  "VDD2_H1": "H1",
  "CA0_A": "H2",
  "NC_H3": "H3",
  "CS0_A": "H4",
  "VDD2_H5": "H5",
  "VDD2_H8": "H8",
  "CA2_A": "H9",
  "CA3_A": "H10",
  "CA4_A": "H11",
  "VDD2_H12": "H12",
  "VSS_J1": "J1",
  "CA1_A": "J2",
  "VSS_J3": "J3",
  "CKE0_A": "J4",
  "NC_J5": "J5",
  "CK_T_A": "J8",
  "CK_C_A": "J9",
  "VSS_J10": "J10",
  "CA5_A": "J11",
  "VSS_J12": "J12",
  "VDD2_K1": "K1",
  "VSS_K2": "K2",
  "VDD2_K3": "K3",
  "VSS_K4": "K4",
  "NC_K5": "K5",
  "NC_K8": "K8",
  "VSS_K9": "K9",
  "VDD2_K10": "K10",
  "VSS_K11": "K11",
  "VDD2_K12": "K12",
  "ZQ0": "A5",
  "NC_A8": "A8",
  "DNU_AA1": "AA1",
  "DQ0_B": "AA2",
  "VDDQ_AA3": "AA3",
  "DQ7_B": "AA4",
  "VDDQ_AA5": "AA5",
  "VDDQ_AA8": "AA8",
  "DQ15_B": "AA9",
  "VDDQ_AA10": "AA10",
  "DQ8_B": "AA11",
  "DNU_AA12": "AA12",
  "DNU_AB1": "AB1",
  "DNU_AB2": "AB2",
  "VSS_AB3": "AB3",
  "VDD2_AB4": "AB4",
  "VSS_AB5": "AB5",
  "VSS_AB8": "AB8",
  "VDD2_AB9": "AB9",
  "VSS_AB10": "AB10",
  "DNU_AB11": "AB11",
  "DNU_AB12": "AB12",
  "NC_G11": "G11",
  "VDD2_N1": "N1",
  "VSS_N2": "N2",
  "VDD2_N3": "N3",
  "VSS_N4": "N4",
  "NC_N5": "N5",
  "NC_N8": "N8",
  "VSS_N9": "N9",
  "VDD2_N10": "N10",
  "VSS_N11": "N11",
  "VDD2_N12": "N12",
  "VSS_P1": "P1",
  "CA1_B": "P2",
  "VSS_P3": "P3",
  "CKE0_B": "P4",
  "NC_P5": "P5",
  "CK_T_B": "P8",
  "CK_C_B": "P9",
  "VSS_P10": "P10",
  "CA5_B": "P11",
  "VSS_P12": "P12",
  "VDD2_R1": "R1",
  "CA0_B": "R2",
  "NC_R3": "R3",
  "CS0_B": "R4",
  "VDD2_R5": "R5",
  "VDD2_R8": "R8",
  "CA2_B": "R9",
  "CA3_B": "R10",
  "CA4_B": "R11",
  "VDD2_R12": "R12",
  "VSS_T1": "T1",
  "ODT_CA_B": "T2",
  "VSS_T3": "T3",
  "VDD1_T4": "T4",
  "VSS_T5": "T5",
  "VSS_T8": "T8",
  "VDD1_T9": "T9",
  "VSS_T10": "T10",
  "RESET_N": "T11",
  "VSS_T12": "T12",
  "VDD1_U1": "U1",
  "DQ3_B": "U2",
  "VDDQ_U3": "U3",
  "DQ4_B": "U4",
  "VDD2_U5": "U5",
  "VDD2_U8": "U8",
  "DQ12_B": "U9",
  "VDDQ_U10": "U10",
  "DQ11_B": "U11",
  "VDD1_U12": "U12",
  "VSS_V1": "V1",
  "DQ2_B": "V2",
  "DQS0_C_B": "V3",
  "DQ5_B": "V4",
  "VSS_V5": "V5",
  "VSS_V8": "V8",
  "DQ13_B": "V9",
  "DQS1_C_B": "V10",
  "DQ10_B": "V11",
  "VSS_V12": "V12",
  "VDDQ_W1": "W1",
  "VSS_W2": "W2",
  "DQS0_T_B": "W3",
  "VSS_W4": "W4",
  "VDDQ_W5": "W5",
  "VDDQ_W8": "W8",
  "VSS_W9": "W9",
  "DQS1_T_B": "W10",
  "VSS_W11": "W11",
  "VDDQ_W12": "W12",
  "VSS_Y1": "Y1",
  "DQ1_B": "Y2",
  "DMI0_B": "Y3",
  "DQ6_B": "Y4",
  "VSS_Y5": "Y5",
  "VSS_Y8": "Y8",
  "DQ14_B": "Y9",
  "DMI1_B": "Y10",
  "DQ9_B": "Y11",
  "VSS_Y12": "Y12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNU_A1: "no_connect", DNU_A2: "no_connect", VSS_A3: "passive", VDD2_A4: "power_in", VDD2_A9: "passive", VSS_A10: "power_in", DNU_A11: "no_connect", DNU_A12: "no_connect", DNU_B1: "no_connect", DQ0_A: "bidirectional", VDDQ_B3: "passive", DQ7_A: "bidirectional", VDDQ_B5: "passive", VDDQ_B8: "passive", DQ15_A: "bidirectional", VDDQ_B10: "power_in", DQ8_A: "bidirectional", DNU_B12: "no_connect", VSS_C1: "passive", DQ1_A: "bidirectional", DMI0_A: "bidirectional", DQ6_A: "bidirectional", VSS_C5: "passive", VSS_C8: "passive", DQ14_A: "bidirectional", DMI1_A: "bidirectional", DQ9_A: "bidirectional", VSS_C12: "passive", VDDQ_D1: "passive", VSS_D2: "passive", DQS0_T_A: "bidirectional", VSS_D4: "passive", VDDQ_D5: "passive", VDDQ_D8: "passive", VSS_D9: "passive", DQS1_T_A: "bidirectional", VSS_D11: "passive", VDDQ_D12: "passive", VSS_E1: "passive", DQ2_A: "bidirectional", DQS0_C_A: "bidirectional", DQ5_A: "bidirectional", VSS_E5: "passive", VSS_E8: "passive", DQ13_A: "bidirectional", DQS1_C_A: "bidirectional", DQ10_A: "bidirectional", VSS_E12: "passive", VDD1_F1: "power_in", DQ3_A: "bidirectional", VDDQ_F3: "passive", DQ4_A: "bidirectional", VDD2_F5: "passive", VDD2_F8: "passive", DQ12_A: "bidirectional", VDDQ_F10: "passive", DQ11_A: "bidirectional", VDD1_F12: "passive", VSS_G1: "passive", ODT_CA_A: "input", VSS_G3: "passive", VDD1_G4: "passive", VSS_G5: "passive", VSS_G8: "passive", VDD1_G9: "passive", VSS_G10: "passive", VSS_G12: "passive", VDD2_H1: "passive", CA0_A: "input", NC_H3: "no_connect", CS0_A: "input", VDD2_H5: "passive", VDD2_H8: "passive", CA2_A: "input", CA3_A: "input", CA4_A: "input", VDD2_H12: "passive", VSS_J1: "passive", CA1_A: "input", VSS_J3: "passive", CKE0_A: "input", NC_J5: "no_connect", CK_T_A: "input", CK_C_A: "input", VSS_J10: "passive", CA5_A: "input", VSS_J12: "passive", VDD2_K1: "passive", VSS_K2: "passive", VDD2_K3: "passive", VSS_K4: "passive", NC_K5: "no_connect", NC_K8: "no_connect", VSS_K9: "passive", VDD2_K10: "passive", VSS_K11: "passive", VDD2_K12: "passive", ZQ0: "input", NC_A8: "no_connect", DNU_AA1: "no_connect", DQ0_B: "bidirectional", VDDQ_AA3: "passive", DQ7_B: "bidirectional", VDDQ_AA5: "passive", VDDQ_AA8: "passive", DQ15_B: "bidirectional", VDDQ_AA10: "power_in", DQ8_B: "bidirectional", DNU_AA12: "no_connect", DNU_AB1: "no_connect", DNU_AB2: "no_connect", VSS_AB3: "passive", VDD2_AB4: "power_in", VSS_AB5: "passive", VSS_AB8: "passive", VDD2_AB9: "passive", VSS_AB10: "power_in", DNU_AB11: "no_connect", DNU_AB12: "no_connect", NC_G11: "no_connect", VDD2_N1: "passive", VSS_N2: "passive", VDD2_N3: "passive", VSS_N4: "passive", NC_N5: "no_connect", NC_N8: "no_connect", VSS_N9: "passive", VDD2_N10: "passive", VSS_N11: "passive", VDD2_N12: "passive", VSS_P1: "passive", CA1_B: "input", VSS_P3: "passive", CKE0_B: "input", NC_P5: "no_connect", CK_T_B: "input", CK_C_B: "input", VSS_P10: "passive", CA5_B: "input", VSS_P12: "passive", VDD2_R1: "passive", CA0_B: "input", NC_R3: "no_connect", CS0_B: "input", VDD2_R5: "passive", VDD2_R8: "passive", CA2_B: "input", CA3_B: "input", CA4_B: "input", VDD2_R12: "passive", VSS_T1: "passive", ODT_CA_B: "input", VSS_T3: "passive", VDD1_T4: "power_in", VSS_T5: "passive", VSS_T8: "passive", VDD1_T9: "passive", VSS_T10: "passive", RESET_N: "input", VSS_T12: "passive", VDD1_U1: "passive", DQ3_B: "bidirectional", VDDQ_U3: "passive", DQ4_B: "bidirectional", VDD2_U5: "passive", VDD2_U8: "passive", DQ12_B: "bidirectional", VDDQ_U10: "passive", DQ11_B: "bidirectional", VDD1_U12: "passive", VSS_V1: "passive", DQ2_B: "bidirectional", DQS0_C_B: "bidirectional", DQ5_B: "bidirectional", VSS_V5: "passive", VSS_V8: "passive", DQ13_B: "bidirectional", DQS1_C_B: "bidirectional", DQ10_B: "bidirectional", VSS_V12: "passive", VDDQ_W1: "passive", VSS_W2: "passive", DQS0_T_B: "bidirectional", VSS_W4: "passive", VDDQ_W5: "passive", VDDQ_W8: "passive", VSS_W9: "passive", DQS1_T_B: "bidirectional", VSS_W11: "passive", VDDQ_W12: "passive", VSS_Y1: "passive", DQ1_B: "bidirectional", DMI0_B: "bidirectional", DQ6_B: "bidirectional", VSS_Y5: "passive", VSS_Y8: "passive", DQ14_B: "bidirectional", DMI1_B: "bidirectional", DQ9_B: "bidirectional", VSS_Y12: "passive", ...opts.pinTypes } });
  }
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
 */
export class IS43LQ32256AL_062BLI extends Component.withPins({
  "DNU_A1": "A1",
  "DNU_A2": "A2",
  "VSS_A3": "A3",
  "VDD2_A4": "A4",
  "VDD2_A9": "A9",
  "VSS_A10": "A10",
  "DNU_A11": "A11",
  "DNU_A12": "A12",
  "DNU_B1": "B1",
  "DQ0_A": "B2",
  "VDDQ_B3": "B3",
  "DQ7_A": "B4",
  "VDDQ_B5": "B5",
  "VDDQ_B8": "B8",
  "DQ15_A": "B9",
  "VDDQ_B10": "B10",
  "DQ8_A": "B11",
  "DNU_B12": "B12",
  "VSS_C1": "C1",
  "DQ1_A": "C2",
  "DMI0_A": "C3",
  "DQ6_A": "C4",
  "VSS_C5": "C5",
  "VSS_C8": "C8",
  "DQ14_A": "C9",
  "DMI1_A": "C10",
  "DQ9_A": "C11",
  "VSS_C12": "C12",
  "VDDQ_D1": "D1",
  "VSS_D2": "D2",
  "DQS0_T_A": "D3",
  "VSS_D4": "D4",
  "VDDQ_D5": "D5",
  "VDDQ_D8": "D8",
  "VSS_D9": "D9",
  "DQS1_T_A": "D10",
  "VSS_D11": "D11",
  "VDDQ_D12": "D12",
  "VSS_E1": "E1",
  "DQ2_A": "E2",
  "DQS0_C_A": "E3",
  "DQ5_A": "E4",
  "VSS_E5": "E5",
  "VSS_E8": "E8",
  "DQ13_A": "E9",
  "DQS1_C_A": "E10",
  "DQ10_A": "E11",
  "VSS_E12": "E12",
  "VDD1_F1": "F1",
  "DQ3_A": "F2",
  "VDDQ_F3": "F3",
  "DQ4_A": "F4",
  "VDD2_F5": "F5",
  "VDD2_F8": "F8",
  "DQ12_A": "F9",
  "VDDQ_F10": "F10",
  "DQ11_A": "F11",
  "VDD1_F12": "F12",
  "VSS_G1": "G1",
  "ODT_CA_A": "G2",
  "VSS_G3": "G3",
  "VDD1_G4": "G4",
  "VSS_G5": "G5",
  "VSS_G8": "G8",
  "VDD1_G9": "G9",
  "VSS_G10": "G10",
  "VSS_G12": "G12",
  "VDD2_H1": "H1",
  "CA0_A": "H2",
  "NC_H3": "H3",
  "CS0_A": "H4",
  "VDD2_H5": "H5",
  "VDD2_H8": "H8",
  "CA2_A": "H9",
  "CA3_A": "H10",
  "CA4_A": "H11",
  "VDD2_H12": "H12",
  "VSS_J1": "J1",
  "CA1_A": "J2",
  "VSS_J3": "J3",
  "CKE0_A": "J4",
  "NC_J5": "J5",
  "CK_T_A": "J8",
  "CK_C_A": "J9",
  "VSS_J10": "J10",
  "CA5_A": "J11",
  "VSS_J12": "J12",
  "VDD2_K1": "K1",
  "VSS_K2": "K2",
  "VDD2_K3": "K3",
  "VSS_K4": "K4",
  "NC_K5": "K5",
  "NC_K8": "K8",
  "VSS_K9": "K9",
  "VDD2_K10": "K10",
  "VSS_K11": "K11",
  "VDD2_K12": "K12",
  "ZQ0": "A5",
  "NC_A8": "A8",
  "DNU_AA1": "AA1",
  "DQ0_B": "AA2",
  "VDDQ_AA3": "AA3",
  "DQ7_B": "AA4",
  "VDDQ_AA5": "AA5",
  "VDDQ_AA8": "AA8",
  "DQ15_B": "AA9",
  "VDDQ_AA10": "AA10",
  "DQ8_B": "AA11",
  "DNU_AA12": "AA12",
  "DNU_AB1": "AB1",
  "DNU_AB2": "AB2",
  "VSS_AB3": "AB3",
  "VDD2_AB4": "AB4",
  "VSS_AB5": "AB5",
  "VSS_AB8": "AB8",
  "VDD2_AB9": "AB9",
  "VSS_AB10": "AB10",
  "DNU_AB11": "AB11",
  "DNU_AB12": "AB12",
  "NC_G11": "G11",
  "VDD2_N1": "N1",
  "VSS_N2": "N2",
  "VDD2_N3": "N3",
  "VSS_N4": "N4",
  "NC_N5": "N5",
  "NC_N8": "N8",
  "VSS_N9": "N9",
  "VDD2_N10": "N10",
  "VSS_N11": "N11",
  "VDD2_N12": "N12",
  "VSS_P1": "P1",
  "CA1_B": "P2",
  "VSS_P3": "P3",
  "CKE0_B": "P4",
  "NC_P5": "P5",
  "CK_T_B": "P8",
  "CK_C_B": "P9",
  "VSS_P10": "P10",
  "CA5_B": "P11",
  "VSS_P12": "P12",
  "VDD2_R1": "R1",
  "CA0_B": "R2",
  "NC_R3": "R3",
  "CS0_B": "R4",
  "VDD2_R5": "R5",
  "VDD2_R8": "R8",
  "CA2_B": "R9",
  "CA3_B": "R10",
  "CA4_B": "R11",
  "VDD2_R12": "R12",
  "VSS_T1": "T1",
  "ODT_CA_B": "T2",
  "VSS_T3": "T3",
  "VDD1_T4": "T4",
  "VSS_T5": "T5",
  "VSS_T8": "T8",
  "VDD1_T9": "T9",
  "VSS_T10": "T10",
  "RESET_N": "T11",
  "VSS_T12": "T12",
  "VDD1_U1": "U1",
  "DQ3_B": "U2",
  "VDDQ_U3": "U3",
  "DQ4_B": "U4",
  "VDD2_U5": "U5",
  "VDD2_U8": "U8",
  "DQ12_B": "U9",
  "VDDQ_U10": "U10",
  "DQ11_B": "U11",
  "VDD1_U12": "U12",
  "VSS_V1": "V1",
  "DQ2_B": "V2",
  "DQS0_C_B": "V3",
  "DQ5_B": "V4",
  "VSS_V5": "V5",
  "VSS_V8": "V8",
  "DQ13_B": "V9",
  "DQS1_C_B": "V10",
  "DQ10_B": "V11",
  "VSS_V12": "V12",
  "VDDQ_W1": "W1",
  "VSS_W2": "W2",
  "DQS0_T_B": "W3",
  "VSS_W4": "W4",
  "VDDQ_W5": "W5",
  "VDDQ_W8": "W8",
  "VSS_W9": "W9",
  "DQS1_T_B": "W10",
  "VSS_W11": "W11",
  "VDDQ_W12": "W12",
  "VSS_Y1": "Y1",
  "DQ1_B": "Y2",
  "DMI0_B": "Y3",
  "DQ6_B": "Y4",
  "VSS_Y5": "Y5",
  "VSS_Y8": "Y8",
  "DQ14_B": "Y9",
  "DMI1_B": "Y10",
  "DQ9_B": "Y11",
  "VSS_Y12": "Y12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNU_A1: "no_connect", DNU_A2: "no_connect", VSS_A3: "passive", VDD2_A4: "power_in", VDD2_A9: "passive", VSS_A10: "power_in", DNU_A11: "no_connect", DNU_A12: "no_connect", DNU_B1: "no_connect", DQ0_A: "bidirectional", VDDQ_B3: "passive", DQ7_A: "bidirectional", VDDQ_B5: "passive", VDDQ_B8: "passive", DQ15_A: "bidirectional", VDDQ_B10: "power_in", DQ8_A: "bidirectional", DNU_B12: "no_connect", VSS_C1: "passive", DQ1_A: "bidirectional", DMI0_A: "bidirectional", DQ6_A: "bidirectional", VSS_C5: "passive", VSS_C8: "passive", DQ14_A: "bidirectional", DMI1_A: "bidirectional", DQ9_A: "bidirectional", VSS_C12: "passive", VDDQ_D1: "passive", VSS_D2: "passive", DQS0_T_A: "bidirectional", VSS_D4: "passive", VDDQ_D5: "passive", VDDQ_D8: "passive", VSS_D9: "passive", DQS1_T_A: "bidirectional", VSS_D11: "passive", VDDQ_D12: "passive", VSS_E1: "passive", DQ2_A: "bidirectional", DQS0_C_A: "bidirectional", DQ5_A: "bidirectional", VSS_E5: "passive", VSS_E8: "passive", DQ13_A: "bidirectional", DQS1_C_A: "bidirectional", DQ10_A: "bidirectional", VSS_E12: "passive", VDD1_F1: "power_in", DQ3_A: "bidirectional", VDDQ_F3: "passive", DQ4_A: "bidirectional", VDD2_F5: "passive", VDD2_F8: "passive", DQ12_A: "bidirectional", VDDQ_F10: "passive", DQ11_A: "bidirectional", VDD1_F12: "passive", VSS_G1: "passive", ODT_CA_A: "input", VSS_G3: "passive", VDD1_G4: "passive", VSS_G5: "passive", VSS_G8: "passive", VDD1_G9: "passive", VSS_G10: "passive", VSS_G12: "passive", VDD2_H1: "passive", CA0_A: "input", NC_H3: "no_connect", CS0_A: "input", VDD2_H5: "passive", VDD2_H8: "passive", CA2_A: "input", CA3_A: "input", CA4_A: "input", VDD2_H12: "passive", VSS_J1: "passive", CA1_A: "input", VSS_J3: "passive", CKE0_A: "input", NC_J5: "no_connect", CK_T_A: "input", CK_C_A: "input", VSS_J10: "passive", CA5_A: "input", VSS_J12: "passive", VDD2_K1: "passive", VSS_K2: "passive", VDD2_K3: "passive", VSS_K4: "passive", NC_K5: "no_connect", NC_K8: "no_connect", VSS_K9: "passive", VDD2_K10: "passive", VSS_K11: "passive", VDD2_K12: "passive", ZQ0: "input", NC_A8: "no_connect", DNU_AA1: "no_connect", DQ0_B: "bidirectional", VDDQ_AA3: "passive", DQ7_B: "bidirectional", VDDQ_AA5: "passive", VDDQ_AA8: "passive", DQ15_B: "bidirectional", VDDQ_AA10: "power_in", DQ8_B: "bidirectional", DNU_AA12: "no_connect", DNU_AB1: "no_connect", DNU_AB2: "no_connect", VSS_AB3: "passive", VDD2_AB4: "power_in", VSS_AB5: "passive", VSS_AB8: "passive", VDD2_AB9: "passive", VSS_AB10: "power_in", DNU_AB11: "no_connect", DNU_AB12: "no_connect", NC_G11: "no_connect", VDD2_N1: "passive", VSS_N2: "passive", VDD2_N3: "passive", VSS_N4: "passive", NC_N5: "no_connect", NC_N8: "no_connect", VSS_N9: "passive", VDD2_N10: "passive", VSS_N11: "passive", VDD2_N12: "passive", VSS_P1: "passive", CA1_B: "input", VSS_P3: "passive", CKE0_B: "input", NC_P5: "no_connect", CK_T_B: "input", CK_C_B: "input", VSS_P10: "passive", CA5_B: "input", VSS_P12: "passive", VDD2_R1: "passive", CA0_B: "input", NC_R3: "no_connect", CS0_B: "input", VDD2_R5: "passive", VDD2_R8: "passive", CA2_B: "input", CA3_B: "input", CA4_B: "input", VDD2_R12: "passive", VSS_T1: "passive", ODT_CA_B: "input", VSS_T3: "passive", VDD1_T4: "power_in", VSS_T5: "passive", VSS_T8: "passive", VDD1_T9: "passive", VSS_T10: "passive", RESET_N: "input", VSS_T12: "passive", VDD1_U1: "passive", DQ3_B: "bidirectional", VDDQ_U3: "passive", DQ4_B: "bidirectional", VDD2_U5: "passive", VDD2_U8: "passive", DQ12_B: "bidirectional", VDDQ_U10: "passive", DQ11_B: "bidirectional", VDD1_U12: "passive", VSS_V1: "passive", DQ2_B: "bidirectional", DQS0_C_B: "bidirectional", DQ5_B: "bidirectional", VSS_V5: "passive", VSS_V8: "passive", DQ13_B: "bidirectional", DQS1_C_B: "bidirectional", DQ10_B: "bidirectional", VSS_V12: "passive", VDDQ_W1: "passive", VSS_W2: "passive", DQS0_T_B: "bidirectional", VSS_W4: "passive", VDDQ_W5: "passive", VDDQ_W8: "passive", VSS_W9: "passive", DQS1_T_B: "bidirectional", VSS_W11: "passive", VDDQ_W12: "passive", VSS_Y1: "passive", DQ1_B: "bidirectional", DMI0_B: "bidirectional", DQ6_B: "bidirectional", VSS_Y5: "passive", VSS_Y8: "passive", DQ14_B: "bidirectional", DMI1_B: "bidirectional", DQ9_B: "bidirectional", VSS_Y12: "passive", ...opts.pinTypes } });
  }
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
 */
export class IS61C5128AL_10KLI extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "~{CE}": "6",
  "I/O0": "7",
  "I/O1": "8",
  "VDD_9": "9",
  "GND_10": "10",
  "I/O2": "11",
  "I/O3": "12",
  "~{WE}": "13",
  "A5": "14",
  "A6": "15",
  "A7": "16",
  "A8": "17",
  "A9": "18",
  "NC_19": "19",
  "A10": "20",
  "A11": "21",
  "A12": "22",
  "A13": "23",
  "A14": "24",
  "I/O4": "25",
  "I/O5": "26",
  "VDD_27": "27",
  "GND_28": "28",
  "I/O6": "29",
  "I/O7": "30",
  "~{OE}": "31",
  "A15": "32",
  "A16": "33",
  "A17": "34",
  "A18": "35",
  "NC_36": "36",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", "~{CE}": "input", "I/O0": "bidirectional", "I/O1": "bidirectional", VDD_9: "power_in", GND_10: "power_in", "I/O2": "bidirectional", "I/O3": "bidirectional", "~{WE}": "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", NC_19: "no_connect", A10: "input", A11: "input", A12: "input", A13: "input", A14: "input", "I/O4": "bidirectional", "I/O5": "bidirectional", VDD_27: "passive", GND_28: "passive", "I/O6": "bidirectional", "I/O7": "bidirectional", "~{OE}": "input", A15: "input", A16: "input", A17: "input", A18: "input", NC_36: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IS61C5128AL_10TLI extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "A0": "3",
  "A1": "4",
  "A2": "5",
  "A3": "6",
  "A4": "7",
  "~{CE}": "8",
  "I/O0": "9",
  "I/O1": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "I/O2": "13",
  "I/O3": "14",
  "~{WE}": "15",
  "A5": "16",
  "A6": "17",
  "A7": "18",
  "A8": "19",
  "A9": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "A10": "26",
  "A11": "27",
  "A12": "28",
  "A13": "29",
  "A14": "30",
  "I/O4": "31",
  "I/O5": "32",
  "VDD_33": "33",
  "GND_34": "34",
  "I/O6": "35",
  "I/O7": "36",
  "~{OE}": "37",
  "A15": "38",
  "A16": "39",
  "A17": "40",
  "A18": "41",
  "NC_42": "42",
  "NC_43": "43",
  "NC_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", "~{CE}": "input", "I/O0": "bidirectional", "I/O1": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "I/O2": "bidirectional", "I/O3": "bidirectional", "~{WE}": "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", A10: "input", A11: "input", A12: "input", A13: "input", A14: "input", "I/O4": "bidirectional", "I/O5": "bidirectional", VDD_33: "passive", GND_34: "passive", "I/O6": "bidirectional", "I/O7": "bidirectional", "~{OE}": "input", A15: "input", A16: "input", A17: "input", A18: "input", NC_42: "no_connect", NC_43: "no_connect", NC_44: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IS61C5128AS_25HLI extends Component.withPins({
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "A18": "6",
  "A15": "7",
  "VDD": "8",
  "A17": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "GND": "24",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CE}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", A18: "input", A15: "input", VDD: "power_in", A17: "input", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "bidirectional", "I/O1": "bidirectional", "I/O2": "bidirectional", GND: "power_in", "I/O3": "bidirectional", "I/O4": "bidirectional", "I/O5": "bidirectional", "I/O6": "bidirectional", "I/O7": "bidirectional", "~{CE}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class IS61C5128AS_25QLI extends Component.withPins({
  "A17": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "GND": "16",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CE}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "A18": "30",
  "A15": "31",
  "VDD": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A17: "input", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "bidirectional", "I/O1": "bidirectional", "I/O2": "bidirectional", GND: "power_in", "I/O3": "bidirectional", "I/O4": "bidirectional", "I/O5": "bidirectional", "I/O6": "bidirectional", "I/O7": "bidirectional", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", A18: "input", A15: "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IS61C5128AS_25TLI extends Component.withPins({
  "A17": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "GND": "16",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CE}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "A18": "30",
  "A15": "31",
  "VDD": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A17: "input", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "bidirectional", "I/O1": "bidirectional", "I/O2": "bidirectional", GND: "power_in", "I/O3": "bidirectional", "I/O4": "bidirectional", "I/O5": "bidirectional", "I/O6": "bidirectional", "I/O7": "bidirectional", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", A18: "input", A15: "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class IS62C256AL extends Component.withPins({
  "GND": "14",
  "VDD": "28",
  "A14": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "I/O0": "11",
  "I/O1": "12",
  "I/O2": "13",
  "I/O3": "15",
  "I/O4": "16",
  "I/O5": "17",
  "I/O6": "18",
  "I/O7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class IS64C5128AL_12CTLA3 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "A0": "3",
  "A1": "4",
  "A2": "5",
  "A3": "6",
  "A4": "7",
  "~{CE}": "8",
  "I/O0": "9",
  "I/O1": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "I/O2": "13",
  "I/O3": "14",
  "~{WE}": "15",
  "A5": "16",
  "A6": "17",
  "A7": "18",
  "A8": "19",
  "A9": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "A10": "26",
  "A11": "27",
  "A12": "28",
  "A13": "29",
  "A14": "30",
  "I/O4": "31",
  "I/O5": "32",
  "VDD_33": "33",
  "GND_34": "34",
  "I/O6": "35",
  "I/O7": "36",
  "~{OE}": "37",
  "A15": "38",
  "A16": "39",
  "A17": "40",
  "A18": "41",
  "NC_42": "42",
  "NC_43": "43",
  "NC_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", "~{CE}": "input", "I/O0": "bidirectional", "I/O1": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "I/O2": "bidirectional", "I/O3": "bidirectional", "~{WE}": "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", A10: "input", A11: "input", A12: "input", A13: "input", A14: "input", "I/O4": "bidirectional", "I/O5": "bidirectional", VDD_33: "passive", GND_34: "passive", "I/O6": "bidirectional", "I/O7": "bidirectional", "~{OE}": "input", A15: "input", A16: "input", A17: "input", A18: "input", NC_42: "no_connect", NC_43: "no_connect", NC_44: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IS64C5128AL_12KLA3 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "~{CE}": "6",
  "I/O0": "7",
  "I/O1": "8",
  "VDD_9": "9",
  "GND_10": "10",
  "I/O2": "11",
  "I/O3": "12",
  "~{WE}": "13",
  "A5": "14",
  "A6": "15",
  "A7": "16",
  "A8": "17",
  "A9": "18",
  "NC_19": "19",
  "A10": "20",
  "A11": "21",
  "A12": "22",
  "A13": "23",
  "A14": "24",
  "I/O4": "25",
  "I/O5": "26",
  "VDD_27": "27",
  "GND_28": "28",
  "I/O6": "29",
  "I/O7": "30",
  "~{OE}": "31",
  "A15": "32",
  "A16": "33",
  "A17": "34",
  "A18": "35",
  "NC_36": "36",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", "~{CE}": "input", "I/O0": "bidirectional", "I/O1": "bidirectional", VDD_9: "power_in", GND_10: "power_in", "I/O2": "bidirectional", "I/O3": "bidirectional", "~{WE}": "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", NC_19: "no_connect", A10: "input", A11: "input", A12: "input", A13: "input", A14: "input", "I/O4": "bidirectional", "I/O5": "bidirectional", VDD_27: "passive", GND_28: "passive", "I/O6": "bidirectional", "I/O7": "bidirectional", "~{OE}": "input", A15: "input", A16: "input", A17: "input", A18: "input", NC_36: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class IS65C256AL extends Component.withPins({
  "GND": "14",
  "VDD": "28",
  "A14": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "I/O0": "11",
  "I/O1": "12",
  "I/O2": "13",
  "I/O3": "15",
  "I/O4": "16",
  "I/O5": "17",
  "I/O6": "18",
  "I/O7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class IS6xC1024AL_xxT extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class IS6xC1024AL_xxH extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "I/O0": "21",
  "I/O1": "22",
  "I/O2": "23",
  "I/O3": "25",
  "I/O4": "26",
  "I/O5": "27",
  "I/O6": "28",
  "I/O7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class IS6xC1024AL_xxJ extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class IS6xC1024AL_xxK extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "I/O0": "13",
  "I/O1": "14",
  "I/O2": "15",
  "I/O3": "17",
  "I/O4": "18",
  "I/O5": "19",
  "I/O6": "20",
  "I/O7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class M48Tx2 extends Component.withPins({
  "A7": "1",
  "A6": "2",
  "A5": "3",
  "A4": "4",
  "A3": "5",
  "A2": "6",
  "A1": "7",
  "A0": "8",
  "DQ0": "9",
  "DQ1": "10",
  "DQ2": "11",
  "VSS": "12",
  "DQ3": "13",
  "DQ4": "14",
  "DQ5": "15",
  "DQ6": "16",
  "DQ7": "17",
  "~{E}": "18",
  "A10": "19",
  "~{G}": "20",
  "~{W}": "21",
  "A9": "22",
  "A8": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "bidirectional", DQ1: "bidirectional", DQ2: "bidirectional", VSS: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", DQ5: "bidirectional", DQ6: "bidirectional", DQ7: "bidirectional", "~{E}": "input", A10: "input", "~{G}": "input", "~{W}": "input", A9: "input", A8: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M48Zx2 extends Component.withPins({
  "A7": "1",
  "A6": "2",
  "A5": "3",
  "A4": "4",
  "A3": "5",
  "A2": "6",
  "A1": "7",
  "A0": "8",
  "DQ0": "9",
  "DQ1": "10",
  "DQ2": "11",
  "VSS": "12",
  "DQ3": "13",
  "DQ4": "14",
  "DQ5": "15",
  "DQ6": "16",
  "DQ7": "17",
  "~{E}": "18",
  "A10": "19",
  "~{G}": "20",
  "~{W}": "21",
  "A9": "22",
  "A8": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "bidirectional", DQ1: "bidirectional", DQ2: "bidirectional", VSS: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", DQ5: "bidirectional", DQ6: "bidirectional", DQ7: "bidirectional", "~{E}": "input", A10: "input", "~{G}": "input", "~{W}": "input", A9: "input", A8: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MK4116N extends Component.withPins({
  "VBB": "1",
  "VDD": "8",
  "VCC": "9",
  "VSS": "16",
  "DIN": "2",
  "~{WRITE}": "3",
  "~{RAS}": "4",
  "A0": "5",
  "A2": "6",
  "A1": "7",
  "A5": "10",
  "A4": "11",
  "A3": "12",
  "A6": "13",
  "DOUT": "14",
  "~{CAS}": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBB: "power_in", VDD: "power_in", VCC: "power_in", VSS: "power_in", DIN: "input", "~{WRITE}": "input", "~{RAS}": "input", A0: "input", A2: "input", A1: "input", A5: "input", A4: "input", A3: "input", A6: "input", DOUT: "tri_state", "~{CAS}": "input", ...opts.pinTypes } });
  }
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
 */
export class MK4164N extends Component.withPins({
  "~{RFSH}": "1",
  "VCC": "8",
  "A7": "9",
  "VSS": "16",
  "DIN": "2",
  "~{WRITE}": "3",
  "~{RAS}": "4",
  "A0": "5",
  "A2": "6",
  "A1": "7",
  "A5": "10",
  "A4": "11",
  "A3": "12",
  "A6": "13",
  "DOUT": "14",
  "~{CAS}": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RFSH}": "input", VCC: "power_in", A7: "input", VSS: "power_in", DIN: "input", "~{WRITE}": "input", "~{RAS}": "input", A0: "input", A2: "input", A1: "input", A5: "input", A4: "input", A3: "input", A6: "input", DOUT: "tri_state", "~{CAS}": "input", ...opts.pinTypes } });
  }
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
 */
export class MT40A512M16LY extends Component.withPins({
  "V_{DDQ}_A1": "A1",
  "V_{SSQ}_A2": "A2",
  "DQ8": "A3",
  "UDQS_c": "A7",
  "V_{SSQ}_A8": "A8",
  "V_{DDQ}_A9": "A9",
  "V_{PP}_B1": "B1",
  "V_{SS}_B2": "B2",
  "V_{DD}_B3": "B3",
  "UDQS_t": "B7",
  "DQ9": "B8",
  "V_{DD}_B9": "B9",
  "V_{DDQ}_C1": "C1",
  "DQ12": "C2",
  "DQ10": "C3",
  "DQ11": "C7",
  "DQ13": "C8",
  "V_{SSQ}_C9": "C9",
  "V_{DD}_D1": "D1",
  "V_{SSQ}_D2": "D2",
  "DQ14": "D3",
  "DQ15": "D7",
  "V_{SSQ}_D8": "D8",
  "V_{DDQ}_D9": "D9",
  "V_{SS}_E1": "E1",
  "NF/~{UDM}/~{UDBI}": "E2",
  "V_{SSQ}_E3": "E3",
  "NF/~{LDM}/~{LDBI}": "E7",
  "V_{SSQ}_E8": "E8",
  "V_{SS}_E9": "E9",
  "V_{SSQ}_F1": "F1",
  "V_{DDQ}_F2": "F2",
  "LDQS_c": "F3",
  "DQ1": "F7",
  "V_{DDQ}_F8": "F8",
  "ZQ": "F9",
  "V_{DDQ}_G1": "G1",
  "DQ0": "G2",
  "LDQS_t": "G3",
  "V_{DD}_G7": "G7",
  "V_{SS}_G8": "G8",
  "V_{DDQ}_G9": "G9",
  "V_{SSQ}_H1": "H1",
  "DQ4": "H2",
  "DQ2": "H3",
  "DQ3": "H7",
  "DQ5": "H8",
  "V_{SSQ}_H9": "H9",
  "V_{DD}_J1": "J1",
  "V_{DDQ}_J2": "J2",
  "DQ6": "J3",
  "DQ7": "J7",
  "V_{DDQ}_J8": "J8",
  "V_{DD}_J9": "J9",
  "V_{SS}_K1": "K1",
  "CKE": "K2",
  "ODT": "K3",
  "CK_t": "K7",
  "CK_c": "K8",
  "V_{SS}_K9": "K9",
  "V_{DD}_L1": "L1",
  "A14/~{WE}": "L2",
  "~{ACT}": "L3",
  "~{CS}": "L7",
  "A16/~{RAS}": "L8",
  "V_{DD}_L9": "L9",
  "V_{REFCA}": "M1",
  "BG0": "M2",
  "A10/AP": "M3",
  "A12/~{BC}": "M7",
  "A15/~{CAS}": "M8",
  "V_{SS}_M9": "M9",
  "V_{SS}_N1": "N1",
  "BA0": "N2",
  "A4": "N3",
  "A3": "N7",
  "BA1": "N8",
  "TEN": "N9",
  "~{RESET}": "P1",
  "A6": "P2",
  "A0": "P3",
  "A1": "P7",
  "A5": "P8",
  "~{ALERT}": "P9",
  "V_{DD}_R1": "R1",
  "A8": "R2",
  "A2": "R3",
  "A9": "R7",
  "A7": "R8",
  "V_{PP}_R9": "R9",
  "V_{SS}_T1": "T1",
  "A11": "T2",
  "PAR": "T3",
  "NF/NC": "T7",
  "A13": "T8",
  "V_{DD}_T9": "T9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DDQ}_A1": "power_in", "V_{SSQ}_A2": "power_in", DQ8: "bidirectional", UDQS_c: "bidirectional", "V_{SSQ}_A8": "passive", "V_{DDQ}_A9": "passive", "V_{PP}_B1": "power_in", "V_{SS}_B2": "power_in", "V_{DD}_B3": "passive", UDQS_t: "bidirectional", DQ9: "bidirectional", "V_{DD}_B9": "power_in", "V_{DDQ}_C1": "passive", DQ12: "bidirectional", DQ10: "bidirectional", DQ11: "bidirectional", DQ13: "bidirectional", "V_{SSQ}_C9": "passive", "V_{DD}_D1": "passive", "V_{SSQ}_D2": "passive", DQ14: "bidirectional", DQ15: "bidirectional", "V_{SSQ}_D8": "passive", "V_{DDQ}_D9": "passive", "V_{SS}_E1": "passive", "NF/~{UDM}/~{UDBI}": "bidirectional", "V_{SSQ}_E3": "passive", "NF/~{LDM}/~{LDBI}": "bidirectional", "V_{SSQ}_E8": "passive", "V_{SS}_E9": "passive", "V_{SSQ}_F1": "passive", "V_{DDQ}_F2": "passive", LDQS_c: "bidirectional", DQ1: "bidirectional", "V_{DDQ}_F8": "passive", ZQ: "passive", "V_{DDQ}_G1": "passive", DQ0: "bidirectional", LDQS_t: "bidirectional", "V_{DD}_G7": "passive", "V_{SS}_G8": "passive", "V_{DDQ}_G9": "passive", "V_{SSQ}_H1": "passive", DQ4: "bidirectional", DQ2: "bidirectional", DQ3: "bidirectional", DQ5: "bidirectional", "V_{SSQ}_H9": "passive", "V_{DD}_J1": "passive", "V_{DDQ}_J2": "passive", DQ6: "bidirectional", DQ7: "bidirectional", "V_{DDQ}_J8": "passive", "V_{DD}_J9": "passive", "V_{SS}_K1": "passive", CKE: "input", ODT: "input", CK_t: "input", CK_c: "input", "V_{SS}_K9": "passive", "V_{DD}_L1": "passive", "A14/~{WE}": "input", "~{ACT}": "input", "~{CS}": "input", "A16/~{RAS}": "input", "V_{DD}_L9": "passive", "V_{REFCA}": "passive", BG0: "input", "A10/AP": "input", "A12/~{BC}": "input", "A15/~{CAS}": "input", "V_{SS}_M9": "passive", "V_{SS}_N1": "passive", BA0: "input", A4: "input", A3: "input", BA1: "input", TEN: "input", "~{RESET}": "input", A6: "input", A0: "input", A1: "input", A5: "input", "~{ALERT}": "open_collector", "V_{DD}_R1": "passive", A8: "input", A2: "input", A9: "input", A7: "input", "V_{PP}_R9": "passive", "V_{SS}_T1": "passive", A11: "input", PAR: "input", "NF/NC": "no_connect", A13: "input", "V_{DD}_T9": "passive", ...opts.pinTypes } });
  }
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
 */
export class MT40A512M16TB extends Component.withPins({
  "V_{DDQ}_A1": "A1",
  "V_{SSQ}_A2": "A2",
  "DQ8": "A3",
  "UDQS_c": "A7",
  "V_{SSQ}_A8": "A8",
  "V_{DDQ}_A9": "A9",
  "V_{PP}_B1": "B1",
  "V_{SS}_B2": "B2",
  "V_{DD}_B3": "B3",
  "UDQS_t": "B7",
  "DQ9": "B8",
  "V_{DD}_B9": "B9",
  "V_{DDQ}_C1": "C1",
  "DQ12": "C2",
  "DQ10": "C3",
  "DQ11": "C7",
  "DQ13": "C8",
  "V_{SSQ}_C9": "C9",
  "V_{DD}_D1": "D1",
  "V_{SSQ}_D2": "D2",
  "DQ14": "D3",
  "DQ15": "D7",
  "V_{SSQ}_D8": "D8",
  "V_{DDQ}_D9": "D9",
  "V_{SS}_E1": "E1",
  "NF/~{UDM}/~{UDBI}": "E2",
  "V_{SSQ}_E3": "E3",
  "NF/~{LDM}/~{LDBI}": "E7",
  "V_{SSQ}_E8": "E8",
  "V_{SS}_E9": "E9",
  "V_{SSQ}_F1": "F1",
  "V_{DDQ}_F2": "F2",
  "LDQS_c": "F3",
  "DQ1": "F7",
  "V_{DDQ}_F8": "F8",
  "ZQ": "F9",
  "V_{DDQ}_G1": "G1",
  "DQ0": "G2",
  "LDQS_t": "G3",
  "V_{DD}_G7": "G7",
  "V_{SS}_G8": "G8",
  "V_{DDQ}_G9": "G9",
  "V_{SSQ}_H1": "H1",
  "DQ4": "H2",
  "DQ2": "H3",
  "DQ3": "H7",
  "DQ5": "H8",
  "V_{SSQ}_H9": "H9",
  "V_{DD}_J1": "J1",
  "V_{DDQ}_J2": "J2",
  "DQ6": "J3",
  "DQ7": "J7",
  "V_{DDQ}_J8": "J8",
  "V_{DD}_J9": "J9",
  "V_{SS}_K1": "K1",
  "CKE": "K2",
  "ODT": "K3",
  "CK_t": "K7",
  "CK_c": "K8",
  "V_{SS}_K9": "K9",
  "V_{DD}_L1": "L1",
  "A14/~{WE}": "L2",
  "~{ACT}": "L3",
  "~{CS}": "L7",
  "A16/~{RAS}": "L8",
  "V_{DD}_L9": "L9",
  "V_{REFCA}": "M1",
  "BG0": "M2",
  "A10/AP": "M3",
  "A12/~{BC}": "M7",
  "A15/~{CAS}": "M8",
  "V_{SS}_M9": "M9",
  "V_{SS}_N1": "N1",
  "BA0": "N2",
  "A4": "N3",
  "A3": "N7",
  "BA1": "N8",
  "TEN": "N9",
  "~{RESET}": "P1",
  "A6": "P2",
  "A0": "P3",
  "A1": "P7",
  "A5": "P8",
  "~{ALERT}": "P9",
  "V_{DD}_R1": "R1",
  "A8": "R2",
  "A2": "R3",
  "A9": "R7",
  "A7": "R8",
  "V_{PP}_R9": "R9",
  "V_{SS}_T1": "T1",
  "A11": "T2",
  "PAR": "T3",
  "NF/NC": "T7",
  "A13": "T8",
  "V_{DD}_T9": "T9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DDQ}_A1": "power_in", "V_{SSQ}_A2": "power_in", DQ8: "bidirectional", UDQS_c: "bidirectional", "V_{SSQ}_A8": "passive", "V_{DDQ}_A9": "passive", "V_{PP}_B1": "power_in", "V_{SS}_B2": "power_in", "V_{DD}_B3": "passive", UDQS_t: "bidirectional", DQ9: "bidirectional", "V_{DD}_B9": "power_in", "V_{DDQ}_C1": "passive", DQ12: "bidirectional", DQ10: "bidirectional", DQ11: "bidirectional", DQ13: "bidirectional", "V_{SSQ}_C9": "passive", "V_{DD}_D1": "passive", "V_{SSQ}_D2": "passive", DQ14: "bidirectional", DQ15: "bidirectional", "V_{SSQ}_D8": "passive", "V_{DDQ}_D9": "passive", "V_{SS}_E1": "passive", "NF/~{UDM}/~{UDBI}": "bidirectional", "V_{SSQ}_E3": "passive", "NF/~{LDM}/~{LDBI}": "bidirectional", "V_{SSQ}_E8": "passive", "V_{SS}_E9": "passive", "V_{SSQ}_F1": "passive", "V_{DDQ}_F2": "passive", LDQS_c: "bidirectional", DQ1: "bidirectional", "V_{DDQ}_F8": "passive", ZQ: "passive", "V_{DDQ}_G1": "passive", DQ0: "bidirectional", LDQS_t: "bidirectional", "V_{DD}_G7": "passive", "V_{SS}_G8": "passive", "V_{DDQ}_G9": "passive", "V_{SSQ}_H1": "passive", DQ4: "bidirectional", DQ2: "bidirectional", DQ3: "bidirectional", DQ5: "bidirectional", "V_{SSQ}_H9": "passive", "V_{DD}_J1": "passive", "V_{DDQ}_J2": "passive", DQ6: "bidirectional", DQ7: "bidirectional", "V_{DDQ}_J8": "passive", "V_{DD}_J9": "passive", "V_{SS}_K1": "passive", CKE: "input", ODT: "input", CK_t: "input", CK_c: "input", "V_{SS}_K9": "passive", "V_{DD}_L1": "passive", "A14/~{WE}": "input", "~{ACT}": "input", "~{CS}": "input", "A16/~{RAS}": "input", "V_{DD}_L9": "passive", "V_{REFCA}": "passive", BG0: "input", "A10/AP": "input", "A12/~{BC}": "input", "A15/~{CAS}": "input", "V_{SS}_M9": "passive", "V_{SS}_N1": "passive", BA0: "input", A4: "input", A3: "input", BA1: "input", TEN: "input", "~{RESET}": "input", A6: "input", A0: "input", A1: "input", A5: "input", "~{ALERT}": "open_collector", "V_{DD}_R1": "passive", A8: "input", A2: "input", A9: "input", A7: "input", "V_{PP}_R9": "passive", "V_{SS}_T1": "passive", A11: "input", PAR: "input", "NF/NC": "no_connect", A13: "input", "V_{DD}_T9": "passive", ...opts.pinTypes } });
  }
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
 */
export class MT41K256M16LY extends Component.withPins({
  "DQ13": "A2",
  "DQ15": "A3",
  "DQ12": "A7",
  "V_{DDQ}_A8": "A8",
  "V_{SS}_A9": "A9",
  "V_{DD}_B2": "B2",
  "V_{SS}_B3": "B3",
  "DQ14": "B8",
  "V_{SSQ}_B9": "B9",
  "V_{DDQ}_C1": "C1",
  "DQ11": "C2",
  "DQ9": "C3",
  "UDQS": "C7",
  "DQ10": "C8",
  "V_{DDQ}_C9": "C9",
  "V_{SSQ}_D1": "D1",
  "V_{DDQ}_D2": "D2",
  "UDM": "D3",
  "DQ8": "D7",
  "V_{SSQ}_D8": "D8",
  "V_{DD}_D9": "D9",
  "V_{SSQ}_E2": "E2",
  "DQ0": "E3",
  "LDM": "E7",
  "V_{SSQ}_E8": "E8",
  "V_{DDQ}_E9": "E9",
  "V_{DDQ}_F1": "F1",
  "DQ2": "F2",
  "LDQS": "F3",
  "DQ1": "F7",
  "DQ3": "F8",
  "V_{SSQ}_F9": "F9",
  "V_{SSQ}_G1": "G1",
  "DQ6": "G2",
  "V_{DD}_G7": "G7",
  "V_{SS}_G8": "G8",
  "V_{SSQ}_G9": "G9",
  "V_{REFDQ}": "H1",
  "V_{DDQ}_H2": "H2",
  "DQ4": "H3",
  "DQ7": "H7",
  "DQ5": "H8",
  "V_{DDQ}_H9": "H9",
  "NC_J1": "J1",
  "V_{SS}_J2": "J2",
  "CK": "J7",
  "V_{SS}_J8": "J8",
  "NC_J9": "J9",
  "ODT": "K1",
  "V_{DD}_K2": "K2",
  "V_{DD}_K8": "K8",
  "CKE": "K9",
  "NC_L1": "L1",
  "A10/AP": "L7",
  "ZQ": "L8",
  "NC_L9": "L9",
  "V_{SS}_M1": "M1",
  "BA0": "M2",
  "BA2": "M3",
  "NC_M7": "M7",
  "V_{REFCA}": "M8",
  "V_{SS}_M9": "M9",
  "A3": "N2",
  "A0": "N3",
  "BA1": "N8",
  "V_{DD}_N9": "N9",
  "V_{SS}_P1": "P1",
  "A5": "P2",
  "A2": "P3",
  "A1": "P7",
  "A4": "P8",
  "V_{SS}_P9": "P9",
  "V_{DD}_R1": "R1",
  "A7": "R2",
  "A9": "R3",
  "A11": "R7",
  "A6": "R8",
  "V_{DD}_R9": "R9",
  "V_{SS}_T1": "T1",
  "A13": "T3",
  "A14": "T7",
  "A8": "T8",
  "V_{SS}_T9": "T9",
  "V_{DDQ}_A1": "A1",
  "V_{SSQ}_B1": "B1",
  "~{UDQS}": "B7",
  "V_{SS}_E1": "E1",
  "~{LDQS}": "G3",
  "~{RAS}": "J3",
  "~{CAS}": "K3",
  "~{CK}": "K7",
  "~{CS}": "L2",
  "~{WE}": "L3",
  "V_{DD}_N1": "N1",
  "A12/~{BC}": "N7",
  "~{RESET}": "T2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DQ13: "bidirectional", DQ15: "bidirectional", DQ12: "bidirectional", "V_{DDQ}_A8": "passive", "V_{SS}_A9": "passive", "V_{DD}_B2": "passive", "V_{SS}_B3": "passive", DQ14: "bidirectional", "V_{SSQ}_B9": "passive", "V_{DDQ}_C1": "passive", DQ11: "bidirectional", DQ9: "bidirectional", UDQS: "bidirectional", DQ10: "bidirectional", "V_{DDQ}_C9": "passive", "V_{SSQ}_D1": "passive", "V_{DDQ}_D2": "passive", UDM: "input", DQ8: "bidirectional", "V_{SSQ}_D8": "passive", "V_{DD}_D9": "passive", "V_{SSQ}_E2": "passive", DQ0: "bidirectional", LDM: "input", "V_{SSQ}_E8": "passive", "V_{DDQ}_E9": "passive", "V_{DDQ}_F1": "passive", DQ2: "bidirectional", LDQS: "bidirectional", DQ1: "bidirectional", DQ3: "bidirectional", "V_{SSQ}_F9": "passive", "V_{SSQ}_G1": "passive", DQ6: "bidirectional", "V_{DD}_G7": "passive", "V_{SS}_G8": "passive", "V_{SSQ}_G9": "passive", "V_{REFDQ}": "passive", "V_{DDQ}_H2": "passive", DQ4: "bidirectional", DQ7: "bidirectional", DQ5: "bidirectional", "V_{DDQ}_H9": "passive", NC_J1: "no_connect", "V_{SS}_J2": "passive", CK: "input", "V_{SS}_J8": "passive", NC_J9: "no_connect", ODT: "input", "V_{DD}_K2": "passive", "V_{DD}_K8": "passive", CKE: "input", NC_L1: "no_connect", "A10/AP": "input", ZQ: "passive", NC_L9: "no_connect", "V_{SS}_M1": "passive", BA0: "input", BA2: "input", NC_M7: "no_connect", "V_{REFCA}": "passive", "V_{SS}_M9": "passive", A3: "input", A0: "input", BA1: "input", "V_{DD}_N9": "passive", "V_{SS}_P1": "passive", A5: "input", A2: "input", A1: "input", A4: "input", "V_{SS}_P9": "passive", "V_{DD}_R1": "passive", A7: "input", A9: "input", A11: "input", A6: "input", "V_{DD}_R9": "passive", "V_{SS}_T1": "passive", A13: "input", A14: "input", A8: "input", "V_{SS}_T9": "passive", "V_{DDQ}_A1": "power_in", "V_{SSQ}_B1": "power_in", "~{UDQS}": "bidirectional", "V_{SS}_E1": "power_in", "~{LDQS}": "bidirectional", "~{RAS}": "input", "~{CAS}": "input", "~{CK}": "input", "~{CS}": "input", "~{WE}": "input", "V_{DD}_N1": "power_in", "A12/~{BC}": "input", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MT41K256M16HA extends Component.withPins({
  "DQ13": "A2",
  "DQ15": "A3",
  "DQ12": "A7",
  "V_{DDQ}_A8": "A8",
  "V_{SS}_A9": "A9",
  "V_{DD}_B2": "B2",
  "V_{SS}_B3": "B3",
  "DQ14": "B8",
  "V_{SSQ}_B9": "B9",
  "V_{DDQ}_C1": "C1",
  "DQ11": "C2",
  "DQ9": "C3",
  "UDQS": "C7",
  "DQ10": "C8",
  "V_{DDQ}_C9": "C9",
  "V_{SSQ}_D1": "D1",
  "V_{DDQ}_D2": "D2",
  "UDM": "D3",
  "DQ8": "D7",
  "V_{SSQ}_D8": "D8",
  "V_{DD}_D9": "D9",
  "V_{SSQ}_E2": "E2",
  "DQ0": "E3",
  "LDM": "E7",
  "V_{SSQ}_E8": "E8",
  "V_{DDQ}_E9": "E9",
  "V_{DDQ}_F1": "F1",
  "DQ2": "F2",
  "LDQS": "F3",
  "DQ1": "F7",
  "DQ3": "F8",
  "V_{SSQ}_F9": "F9",
  "V_{SSQ}_G1": "G1",
  "DQ6": "G2",
  "V_{DD}_G7": "G7",
  "V_{SS}_G8": "G8",
  "V_{SSQ}_G9": "G9",
  "V_{REFDQ}": "H1",
  "V_{DDQ}_H2": "H2",
  "DQ4": "H3",
  "DQ7": "H7",
  "DQ5": "H8",
  "V_{DDQ}_H9": "H9",
  "NC_J1": "J1",
  "V_{SS}_J2": "J2",
  "CK": "J7",
  "V_{SS}_J8": "J8",
  "NC_J9": "J9",
  "ODT": "K1",
  "V_{DD}_K2": "K2",
  "V_{DD}_K8": "K8",
  "CKE": "K9",
  "NC_L1": "L1",
  "A10/AP": "L7",
  "ZQ": "L8",
  "NC_L9": "L9",
  "V_{SS}_M1": "M1",
  "BA0": "M2",
  "BA2": "M3",
  "NC_M7": "M7",
  "V_{REFCA}": "M8",
  "V_{SS}_M9": "M9",
  "A3": "N2",
  "A0": "N3",
  "BA1": "N8",
  "V_{DD}_N9": "N9",
  "V_{SS}_P1": "P1",
  "A5": "P2",
  "A2": "P3",
  "A1": "P7",
  "A4": "P8",
  "V_{SS}_P9": "P9",
  "V_{DD}_R1": "R1",
  "A7": "R2",
  "A9": "R3",
  "A11": "R7",
  "A6": "R8",
  "V_{DD}_R9": "R9",
  "V_{SS}_T1": "T1",
  "A13": "T3",
  "A14": "T7",
  "A8": "T8",
  "V_{SS}_T9": "T9",
  "V_{DDQ}_A1": "A1",
  "V_{SSQ}_B1": "B1",
  "~{UDQS}": "B7",
  "V_{SS}_E1": "E1",
  "~{LDQS}": "G3",
  "~{RAS}": "J3",
  "~{CAS}": "K3",
  "~{CK}": "K7",
  "~{CS}": "L2",
  "~{WE}": "L3",
  "V_{DD}_N1": "N1",
  "A12/~{BC}": "N7",
  "~{RESET}": "T2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DQ13: "bidirectional", DQ15: "bidirectional", DQ12: "bidirectional", "V_{DDQ}_A8": "passive", "V_{SS}_A9": "passive", "V_{DD}_B2": "passive", "V_{SS}_B3": "passive", DQ14: "bidirectional", "V_{SSQ}_B9": "passive", "V_{DDQ}_C1": "passive", DQ11: "bidirectional", DQ9: "bidirectional", UDQS: "bidirectional", DQ10: "bidirectional", "V_{DDQ}_C9": "passive", "V_{SSQ}_D1": "passive", "V_{DDQ}_D2": "passive", UDM: "input", DQ8: "bidirectional", "V_{SSQ}_D8": "passive", "V_{DD}_D9": "passive", "V_{SSQ}_E2": "passive", DQ0: "bidirectional", LDM: "input", "V_{SSQ}_E8": "passive", "V_{DDQ}_E9": "passive", "V_{DDQ}_F1": "passive", DQ2: "bidirectional", LDQS: "bidirectional", DQ1: "bidirectional", DQ3: "bidirectional", "V_{SSQ}_F9": "passive", "V_{SSQ}_G1": "passive", DQ6: "bidirectional", "V_{DD}_G7": "passive", "V_{SS}_G8": "passive", "V_{SSQ}_G9": "passive", "V_{REFDQ}": "passive", "V_{DDQ}_H2": "passive", DQ4: "bidirectional", DQ7: "bidirectional", DQ5: "bidirectional", "V_{DDQ}_H9": "passive", NC_J1: "no_connect", "V_{SS}_J2": "passive", CK: "input", "V_{SS}_J8": "passive", NC_J9: "no_connect", ODT: "input", "V_{DD}_K2": "passive", "V_{DD}_K8": "passive", CKE: "input", NC_L1: "no_connect", "A10/AP": "input", ZQ: "passive", NC_L9: "no_connect", "V_{SS}_M1": "passive", BA0: "input", BA2: "input", NC_M7: "no_connect", "V_{REFCA}": "passive", "V_{SS}_M9": "passive", A3: "input", A0: "input", BA1: "input", "V_{DD}_N9": "passive", "V_{SS}_P1": "passive", A5: "input", A2: "input", A1: "input", A4: "input", "V_{SS}_P9": "passive", "V_{DD}_R1": "passive", A7: "input", A9: "input", A11: "input", A6: "input", "V_{DD}_R9": "passive", "V_{SS}_T1": "passive", A13: "input", A14: "input", A8: "input", "V_{SS}_T9": "passive", "V_{DDQ}_A1": "power_in", "V_{SSQ}_B1": "power_in", "~{UDQS}": "bidirectional", "V_{SS}_E1": "power_in", "~{LDQS}": "bidirectional", "~{RAS}": "input", "~{CAS}": "input", "~{CK}": "input", "~{CS}": "input", "~{WE}": "input", "V_{DD}_N1": "power_in", "A12/~{BC}": "input", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MT41K256M16TW extends Component.withPins({
  "DQ13": "A2",
  "DQ15": "A3",
  "DQ12": "A7",
  "V_{DDQ}_A8": "A8",
  "V_{SS}_A9": "A9",
  "V_{DD}_B2": "B2",
  "V_{SS}_B3": "B3",
  "DQ14": "B8",
  "V_{SSQ}_B9": "B9",
  "V_{DDQ}_C1": "C1",
  "DQ11": "C2",
  "DQ9": "C3",
  "UDQS": "C7",
  "DQ10": "C8",
  "V_{DDQ}_C9": "C9",
  "V_{SSQ}_D1": "D1",
  "V_{DDQ}_D2": "D2",
  "UDM": "D3",
  "DQ8": "D7",
  "V_{SSQ}_D8": "D8",
  "V_{DD}_D9": "D9",
  "V_{SSQ}_E2": "E2",
  "DQ0": "E3",
  "LDM": "E7",
  "V_{SSQ}_E8": "E8",
  "V_{DDQ}_E9": "E9",
  "V_{DDQ}_F1": "F1",
  "DQ2": "F2",
  "LDQS": "F3",
  "DQ1": "F7",
  "DQ3": "F8",
  "V_{SSQ}_F9": "F9",
  "V_{SSQ}_G1": "G1",
  "DQ6": "G2",
  "V_{DD}_G7": "G7",
  "V_{SS}_G8": "G8",
  "V_{SSQ}_G9": "G9",
  "V_{REFDQ}": "H1",
  "V_{DDQ}_H2": "H2",
  "DQ4": "H3",
  "DQ7": "H7",
  "DQ5": "H8",
  "V_{DDQ}_H9": "H9",
  "NC_J1": "J1",
  "V_{SS}_J2": "J2",
  "CK": "J7",
  "V_{SS}_J8": "J8",
  "NC_J9": "J9",
  "ODT": "K1",
  "V_{DD}_K2": "K2",
  "V_{DD}_K8": "K8",
  "CKE": "K9",
  "NC_L1": "L1",
  "A10/AP": "L7",
  "ZQ": "L8",
  "NC_L9": "L9",
  "V_{SS}_M1": "M1",
  "BA0": "M2",
  "BA2": "M3",
  "NC_M7": "M7",
  "V_{REFCA}": "M8",
  "V_{SS}_M9": "M9",
  "A3": "N2",
  "A0": "N3",
  "BA1": "N8",
  "V_{DD}_N9": "N9",
  "V_{SS}_P1": "P1",
  "A5": "P2",
  "A2": "P3",
  "A1": "P7",
  "A4": "P8",
  "V_{SS}_P9": "P9",
  "V_{DD}_R1": "R1",
  "A7": "R2",
  "A9": "R3",
  "A11": "R7",
  "A6": "R8",
  "V_{DD}_R9": "R9",
  "V_{SS}_T1": "T1",
  "A13": "T3",
  "A14": "T7",
  "A8": "T8",
  "V_{SS}_T9": "T9",
  "V_{DDQ}_A1": "A1",
  "V_{SSQ}_B1": "B1",
  "~{UDQS}": "B7",
  "V_{SS}_E1": "E1",
  "~{LDQS}": "G3",
  "~{RAS}": "J3",
  "~{CAS}": "K3",
  "~{CK}": "K7",
  "~{CS}": "L2",
  "~{WE}": "L3",
  "V_{DD}_N1": "N1",
  "A12/~{BC}": "N7",
  "~{RESET}": "T2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DQ13: "bidirectional", DQ15: "bidirectional", DQ12: "bidirectional", "V_{DDQ}_A8": "passive", "V_{SS}_A9": "passive", "V_{DD}_B2": "passive", "V_{SS}_B3": "passive", DQ14: "bidirectional", "V_{SSQ}_B9": "passive", "V_{DDQ}_C1": "passive", DQ11: "bidirectional", DQ9: "bidirectional", UDQS: "bidirectional", DQ10: "bidirectional", "V_{DDQ}_C9": "passive", "V_{SSQ}_D1": "passive", "V_{DDQ}_D2": "passive", UDM: "input", DQ8: "bidirectional", "V_{SSQ}_D8": "passive", "V_{DD}_D9": "passive", "V_{SSQ}_E2": "passive", DQ0: "bidirectional", LDM: "input", "V_{SSQ}_E8": "passive", "V_{DDQ}_E9": "passive", "V_{DDQ}_F1": "passive", DQ2: "bidirectional", LDQS: "bidirectional", DQ1: "bidirectional", DQ3: "bidirectional", "V_{SSQ}_F9": "passive", "V_{SSQ}_G1": "passive", DQ6: "bidirectional", "V_{DD}_G7": "passive", "V_{SS}_G8": "passive", "V_{SSQ}_G9": "passive", "V_{REFDQ}": "passive", "V_{DDQ}_H2": "passive", DQ4: "bidirectional", DQ7: "bidirectional", DQ5: "bidirectional", "V_{DDQ}_H9": "passive", NC_J1: "no_connect", "V_{SS}_J2": "passive", CK: "input", "V_{SS}_J8": "passive", NC_J9: "no_connect", ODT: "input", "V_{DD}_K2": "passive", "V_{DD}_K8": "passive", CKE: "input", NC_L1: "no_connect", "A10/AP": "input", ZQ: "passive", NC_L9: "no_connect", "V_{SS}_M1": "passive", BA0: "input", BA2: "input", NC_M7: "no_connect", "V_{REFCA}": "passive", "V_{SS}_M9": "passive", A3: "input", A0: "input", BA1: "input", "V_{DD}_N9": "passive", "V_{SS}_P1": "passive", A5: "input", A2: "input", A1: "input", A4: "input", "V_{SS}_P9": "passive", "V_{DD}_R1": "passive", A7: "input", A9: "input", A11: "input", A6: "input", "V_{DD}_R9": "passive", "V_{SS}_T1": "passive", A13: "input", A14: "input", A8: "input", "V_{SS}_T9": "passive", "V_{DDQ}_A1": "power_in", "V_{SSQ}_B1": "power_in", "~{UDQS}": "bidirectional", "V_{SS}_E1": "power_in", "~{LDQS}": "bidirectional", "~{RAS}": "input", "~{CAS}": "input", "~{CK}": "input", "~{CS}": "input", "~{WE}": "input", "V_{DD}_N1": "power_in", "A12/~{BC}": "input", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MT48LC16M16A2TG extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "VSSQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "VSSQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "DQML": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "A12": "36",
  "CKE": "37",
  "CLK": "38",
  "DQMH": "39",
  "NC": "40",
  "VSS_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "VSSQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "VSSQ_52": "52",
  "DQ15": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", VSSQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", VSSQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", DQML: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", A10: "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", A12: "input", CKE: "input", CLK: "input", DQMH: "input", NC: "no_connect", VSS_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", VSSQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", VSSQ_52: "passive", DQ15: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class MT48LC16M16A2P extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "VSSQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "VSSQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "DQML": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "A12": "36",
  "CKE": "37",
  "CLK": "38",
  "DQMH": "39",
  "NC": "40",
  "VSS_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "VSSQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "VSSQ_52": "52",
  "DQ15": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", VSSQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", VSSQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", DQML: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", A10: "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", A12: "input", CKE: "input", CLK: "input", DQMH: "input", NC: "no_connect", VSS_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", VSSQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", VSSQ_52: "passive", DQ15: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class MT48LC32M8A2TG extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "NC_4": "4",
  "DQ1": "5",
  "VSSQ_6": "6",
  "NC_7": "7",
  "DQ2": "8",
  "VDDQ_9": "9",
  "NC_10": "10",
  "DQ3": "11",
  "VSSQ_12": "12",
  "NC_13": "13",
  "VDD_14": "14",
  "NC_15": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "A12": "36",
  "CKE": "37",
  "CLK": "38",
  "DQM": "39",
  "NC_40": "40",
  "VSS_41": "41",
  "NC_42": "42",
  "VDDQ_43": "43",
  "DQ4": "44",
  "NC_45": "45",
  "VSSQ_46": "46",
  "DQ5": "47",
  "NC_48": "48",
  "VDDQ_49": "49",
  "DQ6": "50",
  "NC_51": "51",
  "VSSQ_52": "52",
  "DQ7": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", NC_4: "no_connect", DQ1: "bidirectional", VSSQ_6: "power_in", NC_7: "no_connect", DQ2: "bidirectional", VDDQ_9: "passive", NC_10: "no_connect", DQ3: "bidirectional", VSSQ_12: "passive", NC_13: "no_connect", VDD_14: "passive", NC_15: "no_connect", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", A10: "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", A12: "input", CKE: "input", CLK: "input", DQM: "input", NC_40: "no_connect", VSS_41: "passive", NC_42: "no_connect", VDDQ_43: "passive", DQ4: "bidirectional", NC_45: "no_connect", VSSQ_46: "passive", DQ5: "bidirectional", NC_48: "no_connect", VDDQ_49: "passive", DQ6: "bidirectional", NC_51: "no_connect", VSSQ_52: "passive", DQ7: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class MT48LC32M8A2P extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "NC_4": "4",
  "DQ1": "5",
  "VSSQ_6": "6",
  "NC_7": "7",
  "DQ2": "8",
  "VDDQ_9": "9",
  "NC_10": "10",
  "DQ3": "11",
  "VSSQ_12": "12",
  "NC_13": "13",
  "VDD_14": "14",
  "NC_15": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "A12": "36",
  "CKE": "37",
  "CLK": "38",
  "DQM": "39",
  "NC_40": "40",
  "VSS_41": "41",
  "NC_42": "42",
  "VDDQ_43": "43",
  "DQ4": "44",
  "NC_45": "45",
  "VSSQ_46": "46",
  "DQ5": "47",
  "NC_48": "48",
  "VDDQ_49": "49",
  "DQ6": "50",
  "NC_51": "51",
  "VSSQ_52": "52",
  "DQ7": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", NC_4: "no_connect", DQ1: "bidirectional", VSSQ_6: "power_in", NC_7: "no_connect", DQ2: "bidirectional", VDDQ_9: "passive", NC_10: "no_connect", DQ3: "bidirectional", VSSQ_12: "passive", NC_13: "no_connect", VDD_14: "passive", NC_15: "no_connect", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", A10: "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", A12: "input", CKE: "input", CLK: "input", DQM: "input", NC_40: "no_connect", VSS_41: "passive", NC_42: "no_connect", VDDQ_43: "passive", DQ4: "bidirectional", NC_45: "no_connect", VSSQ_46: "passive", DQ5: "bidirectional", NC_48: "no_connect", VDDQ_49: "passive", DQ6: "bidirectional", NC_51: "no_connect", VSSQ_52: "passive", DQ7: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class MT48LC64M4A2TG extends Component.withPins({
  "VDD_1": "1",
  "NC_2": "2",
  "VDDQ_3": "3",
  "NC_4": "4",
  "DQ0": "5",
  "VSSQ_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "VDDQ_9": "9",
  "NC_10": "10",
  "DQ1": "11",
  "VSSQ_12": "12",
  "NC_13": "13",
  "VDD_14": "14",
  "NC_15": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "A12": "36",
  "CKE": "37",
  "CLK": "38",
  "DQM": "39",
  "NC_40": "40",
  "VSS_41": "41",
  "NC_42": "42",
  "VDDQ_43": "43",
  "DQ2": "44",
  "NC_45": "45",
  "VSSQ_46": "46",
  "NC_47": "47",
  "NC_48": "48",
  "VDDQ_49": "49",
  "DQ3": "50",
  "NC_51": "51",
  "VSSQ_52": "52",
  "NC_53": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", NC_2: "no_connect", VDDQ_3: "power_in", NC_4: "no_connect", DQ0: "bidirectional", VSSQ_6: "power_in", NC_7: "no_connect", NC_8: "no_connect", VDDQ_9: "passive", NC_10: "no_connect", DQ1: "bidirectional", VSSQ_12: "passive", NC_13: "no_connect", VDD_14: "passive", NC_15: "no_connect", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", A10: "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", A12: "input", CKE: "input", CLK: "input", DQM: "input", NC_40: "no_connect", VSS_41: "passive", NC_42: "no_connect", VDDQ_43: "passive", DQ2: "bidirectional", NC_45: "no_connect", VSSQ_46: "passive", NC_47: "no_connect", NC_48: "no_connect", VDDQ_49: "passive", DQ3: "bidirectional", NC_51: "no_connect", VSSQ_52: "passive", NC_53: "no_connect", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class MT48LC64M4A2P extends Component.withPins({
  "VDD_1": "1",
  "NC_2": "2",
  "VDDQ_3": "3",
  "NC_4": "4",
  "DQ0": "5",
  "VSSQ_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "VDDQ_9": "9",
  "NC_10": "10",
  "DQ1": "11",
  "VSSQ_12": "12",
  "NC_13": "13",
  "VDD_14": "14",
  "NC_15": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BA0": "20",
  "BA1": "21",
  "A10": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "A12": "36",
  "CKE": "37",
  "CLK": "38",
  "DQM": "39",
  "NC_40": "40",
  "VSS_41": "41",
  "NC_42": "42",
  "VDDQ_43": "43",
  "DQ2": "44",
  "NC_45": "45",
  "VSSQ_46": "46",
  "NC_47": "47",
  "NC_48": "48",
  "VDDQ_49": "49",
  "DQ3": "50",
  "NC_51": "51",
  "VSSQ_52": "52",
  "NC_53": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", NC_2: "no_connect", VDDQ_3: "power_in", NC_4: "no_connect", DQ0: "bidirectional", VSSQ_6: "power_in", NC_7: "no_connect", NC_8: "no_connect", VDDQ_9: "passive", NC_10: "no_connect", DQ1: "bidirectional", VSSQ_12: "passive", NC_13: "no_connect", VDD_14: "passive", NC_15: "no_connect", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BA0: "input", BA1: "input", A10: "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", A12: "input", CKE: "input", CLK: "input", DQM: "input", NC_40: "no_connect", VSS_41: "passive", NC_42: "no_connect", VDDQ_43: "passive", DQ2: "bidirectional", NC_45: "no_connect", VSSQ_46: "passive", NC_47: "no_connect", NC_48: "no_connect", VDDQ_49: "passive", DQ3: "bidirectional", NC_51: "no_connect", VSSQ_52: "passive", NC_53: "no_connect", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class R1LP0108ESF extends Component.withPins({
  "VCC": "8",
  "GND": "24",
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "~{WE}": "5",
  "CS2/CE2": "6",
  "A15": "7",
  "NC": "9",
  "A16": "10",
  "A14": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "DQ0": "21",
  "DQ1": "22",
  "DQ2": "23",
  "DQ3": "25",
  "DQ4": "26",
  "DQ5": "27",
  "DQ6": "28",
  "DQ7": "29",
  "~{CS1}/~{CE1}": "30",
  "A10": "31",
  "~{OE}": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", ...opts.pinTypes } });
  }
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
 */
export class R1LP0108ESN extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{CS1}/~{CE1}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "~{WE}": "29",
  "CS2/CE2": "30",
  "A15": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "no_connect", A16: "input", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{CS1}/~{CE1}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "CS2/CE2": "input", A15: "input", ...opts.pinTypes } });
  }
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
 */
export class uPD42832C extends Component.withPins({
  "GND": "14",
  "V_{DD}": "28",
  "A_{14}": "1",
  "A_{12}": "2",
  "A_{7}": "3",
  "A_{6}": "4",
  "A_{5}": "5",
  "A_{4}": "6",
  "A_{3}": "7",
  "A_{2}": "8",
  "A_{1}": "9",
  "A_{0}": "10",
  "I/O_{0}": "11",
  "I/O_{1}": "12",
  "I/O_{2}": "13",
  "I/O_{3}": "15",
  "I/O_{4}": "16",
  "I/O_{5}": "17",
  "I/O_{6}": "18",
  "I/O_{7}": "19",
  "~{CE}": "20",
  "A_{10}": "21",
  "~{OE}/~{RFSH}": "22",
  "A_{11}": "23",
  "A_{9}": "24",
  "A_{8}": "25",
  "A_{13}": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "V_{DD}": "power_in", "A_{14}": "input", "A_{12}": "input", "A_{7}": "input", "A_{6}": "input", "A_{5}": "input", "A_{4}": "input", "A_{3}": "input", "A_{2}": "input", "A_{1}": "input", "A_{0}": "input", "I/O_{0}": "tri_state", "I/O_{1}": "tri_state", "I/O_{2}": "tri_state", "I/O_{3}": "tri_state", "I/O_{4}": "tri_state", "I/O_{5}": "tri_state", "I/O_{6}": "tri_state", "I/O_{7}": "tri_state", "~{CE}": "input", "A_{10}": "input", "~{OE}/~{RFSH}": "input", "A_{11}": "input", "A_{9}": "input", "A_{8}": "input", "A_{13}": "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class TC51832P extends Component.withPins({
  "GND": "14",
  "V_{DD}": "28",
  "A_{14}": "1",
  "A_{12}": "2",
  "A_{7}": "3",
  "A_{6}": "4",
  "A_{5}": "5",
  "A_{4}": "6",
  "A_{3}": "7",
  "A_{2}": "8",
  "A_{1}": "9",
  "A_{0}": "10",
  "I/O_{0}": "11",
  "I/O_{1}": "12",
  "I/O_{2}": "13",
  "I/O_{3}": "15",
  "I/O_{4}": "16",
  "I/O_{5}": "17",
  "I/O_{6}": "18",
  "I/O_{7}": "19",
  "~{CE}": "20",
  "A_{10}": "21",
  "~{OE}/~{RFSH}": "22",
  "A_{11}": "23",
  "A_{9}": "24",
  "A_{8}": "25",
  "A_{13}": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "V_{DD}": "power_in", "A_{14}": "input", "A_{12}": "input", "A_{7}": "input", "A_{6}": "input", "A_{5}": "input", "A_{4}": "input", "A_{3}": "input", "A_{2}": "input", "A_{1}": "input", "A_{0}": "input", "I/O_{0}": "tri_state", "I/O_{1}": "tri_state", "I/O_{2}": "tri_state", "I/O_{3}": "tri_state", "I/O_{4}": "tri_state", "I/O_{5}": "tri_state", "I/O_{6}": "tri_state", "I/O_{7}": "tri_state", "~{CE}": "input", "A_{10}": "input", "~{OE}/~{RFSH}": "input", "A_{11}": "input", "A_{9}": "input", "A_{8}": "input", "A_{13}": "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class TMM41256AP extends Component.withPins({
  "A8": "1",
  "V_{CC}": "8",
  "A7": "9",
  "V_{SS}": "16",
  "D_{IN}": "2",
  "~{WRITE}": "3",
  "~{RAS}": "4",
  "A0": "5",
  "A2": "6",
  "A1": "7",
  "A5": "10",
  "A4": "11",
  "A3": "12",
  "A6": "13",
  "D_{OUT}": "14",
  "~{CAS}": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A8: "input", "V_{CC}": "power_in", A7: "input", "V_{SS}": "power_in", "D_{IN}": "input", "~{WRITE}": "input", "~{RAS}": "input", A0: "input", A2: "input", A1: "input", A5: "input", A4: "input", A3: "input", A6: "input", "D_{OUT}": "tri_state", "~{CAS}": "input", ...opts.pinTypes } });
  }
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
 */
export class W9812G6KH_5 extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "VSSQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "VSSQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "LDQM": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BS0": "20",
  "BS1": "21",
  "A10/AP": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "NC_36": "36",
  "CKE": "37",
  "CLK": "38",
  "UDQM": "39",
  "NC_40": "40",
  "VSS_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "VSSQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "VSSQ_52": "52",
  "DQ15": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", VSSQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", VSSQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", LDQM: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BS0: "input", BS1: "input", "A10/AP": "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", NC_36: "no_connect", CKE: "input", CLK: "input", UDQM: "input", NC_40: "no_connect", VSS_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", VSSQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", VSSQ_52: "passive", DQ15: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class W9812G6KH_6 extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "VSSQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "VSSQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "LDQM": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BS0": "20",
  "BS1": "21",
  "A10/AP": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "NC_36": "36",
  "CKE": "37",
  "CLK": "38",
  "UDQM": "39",
  "NC_40": "40",
  "VSS_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "VSSQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "VSSQ_52": "52",
  "DQ15": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", VSSQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", VSSQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", LDQM: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BS0: "input", BS1: "input", "A10/AP": "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", NC_36: "no_connect", CKE: "input", CLK: "input", UDQM: "input", NC_40: "no_connect", VSS_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", VSSQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", VSSQ_52: "passive", DQ15: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class W9812G6KH_6I extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "VSSQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "VSSQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "LDQM": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BS0": "20",
  "BS1": "21",
  "A10/AP": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "NC_36": "36",
  "CKE": "37",
  "CLK": "38",
  "UDQM": "39",
  "NC_40": "40",
  "VSS_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "VSSQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "VSSQ_52": "52",
  "DQ15": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", VSSQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", VSSQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", LDQM: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BS0: "input", BS1: "input", "A10/AP": "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", NC_36: "no_connect", CKE: "input", CLK: "input", UDQM: "input", NC_40: "no_connect", VSS_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", VSSQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", VSSQ_52: "passive", DQ15: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class W9812G6KH_75 extends Component.withPins({
  "VDD_1": "1",
  "DQ0": "2",
  "VDDQ_3": "3",
  "DQ1": "4",
  "DQ2": "5",
  "VSSQ_6": "6",
  "DQ3": "7",
  "DQ4": "8",
  "VDDQ_9": "9",
  "DQ5": "10",
  "DQ6": "11",
  "VSSQ_12": "12",
  "DQ7": "13",
  "VDD_14": "14",
  "LDQM": "15",
  "~{WE}": "16",
  "~{CAS}": "17",
  "~{RAS}": "18",
  "~{CS}": "19",
  "BS0": "20",
  "BS1": "21",
  "A10/AP": "22",
  "A0": "23",
  "A1": "24",
  "A2": "25",
  "A3": "26",
  "VDD_27": "27",
  "VSS_28": "28",
  "A4": "29",
  "A5": "30",
  "A6": "31",
  "A7": "32",
  "A8": "33",
  "A9": "34",
  "A11": "35",
  "NC_36": "36",
  "CKE": "37",
  "CLK": "38",
  "UDQM": "39",
  "NC_40": "40",
  "VSS_41": "41",
  "DQ8": "42",
  "VDDQ_43": "43",
  "DQ9": "44",
  "DQ10": "45",
  "VSSQ_46": "46",
  "DQ11": "47",
  "DQ12": "48",
  "VDDQ_49": "49",
  "DQ13": "50",
  "DQ14": "51",
  "VSSQ_52": "52",
  "DQ15": "53",
  "VSS_54": "54",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DQ0: "bidirectional", VDDQ_3: "power_in", DQ1: "bidirectional", DQ2: "bidirectional", VSSQ_6: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", VDDQ_9: "passive", DQ5: "bidirectional", DQ6: "bidirectional", VSSQ_12: "passive", DQ7: "bidirectional", VDD_14: "passive", LDQM: "input", "~{WE}": "input", "~{CAS}": "input", "~{RAS}": "input", "~{CS}": "input", BS0: "input", BS1: "input", "A10/AP": "input", A0: "input", A1: "input", A2: "input", A3: "input", VDD_27: "passive", VSS_28: "power_in", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", A11: "input", NC_36: "no_connect", CKE: "input", CLK: "input", UDQM: "input", NC_40: "no_connect", VSS_41: "passive", DQ8: "bidirectional", VDDQ_43: "passive", DQ9: "bidirectional", DQ10: "bidirectional", VSSQ_46: "passive", DQ11: "bidirectional", DQ12: "bidirectional", VDDQ_49: "passive", DQ13: "bidirectional", DQ14: "bidirectional", VSSQ_52: "passive", DQ15: "bidirectional", VSS_54: "passive", ...opts.pinTypes } });
  }
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
 */
export class uPD41264C extends Component.withPins({
  "V_{CC}": "12",
  "GND": "24",
  "SC": "1",
  "SO_{0}": "2",
  "SO_{1}": "3",
  "~{DT}/~{OE}": "4",
  "W_{0}/IO_{0}": "5",
  "W_{1}/IO_{1}": "6",
  "~{WB}/~{WE}": "7",
  "~{RAS}": "8",
  "A_{6}": "9",
  "A_{5}": "10",
  "A_{4}": "11",
  "A_{7}": "13",
  "A_{3}": "14",
  "A_{2}": "15",
  "A_{1}": "16",
  "A_{0}": "17",
  "~{CAS}": "18",
  "W_{2}/IO_{2}": "19",
  "W_{3}/IO_{3}": "20",
  "~{SOE}": "21",
  "SO_{2}": "22",
  "SO_{3}": "23",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", SC: "input", "SO_{0}": "tri_state", "SO_{1}": "tri_state", "~{DT}/~{OE}": "input", "W_{0}/IO_{0}": "bidirectional", "W_{1}/IO_{1}": "bidirectional", "~{WB}/~{WE}": "input", "~{RAS}": "input", "A_{6}": "input", "A_{5}": "input", "A_{4}": "input", "A_{7}": "input", "A_{3}": "input", "A_{2}": "input", "A_{1}": "input", "A_{0}": "input", "~{CAS}": "input", "W_{2}/IO_{2}": "bidirectional", "W_{3}/IO_{3}": "bidirectional", "~{SOE}": "input", "SO_{2}": "tri_state", "SO_{3}": "tri_state", ...opts.pinTypes } });
  }
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
 */
export class uPD4168C extends Component.withPins({
  "GND": "14",
  "V_{CC}": "28",
  "~{RFSH}": "1",
  "A_{12}": "2",
  "A_{7}": "3",
  "A_{6}": "4",
  "A_{5}": "5",
  "A_{4}": "6",
  "A_{3}": "7",
  "A_{2}": "8",
  "A_{1}": "9",
  "A_{0}": "10",
  "I/O_{0}": "11",
  "I/O_{1}": "12",
  "I/O_{2}": "13",
  "I/O_{3}": "15",
  "I/O_{4}": "16",
  "I/O_{5}": "17",
  "I/O_{6}": "18",
  "I/O_{7}": "19",
  "~{CE}": "20",
  "A_{10}": "21",
  "~{OE}": "22",
  "A_{11}": "23",
  "A_{9}": "24",
  "A_{8}": "25",
  "CS": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "V_{CC}": "power_in", "~{RFSH}": "input", "A_{12}": "input", "A_{7}": "input", "A_{6}": "input", "A_{5}": "input", "A_{4}": "input", "A_{3}": "input", "A_{2}": "input", "A_{1}": "input", "A_{0}": "input", "I/O_{0}": "tri_state", "I/O_{1}": "tri_state", "I/O_{2}": "tri_state", "I/O_{3}": "tri_state", "I/O_{4}": "tri_state", "I/O_{5}": "tri_state", "I/O_{6}": "tri_state", "I/O_{7}": "tri_state", "~{CE}": "input", "A_{10}": "input", "~{OE}": "input", "A_{11}": "input", "A_{9}": "input", "A_{8}": "input", CS: "input", "~{WE}": "input", ...opts.pinTypes } });
  }
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
 */
export class uPD4364CX extends Component.withPins({
  "GND": "14",
  "V_{CC}": "28",
  "NC": "1",
  "A_{12}": "2",
  "A_{7}": "3",
  "A_{6}": "4",
  "A_{5}": "5",
  "A_{4}": "6",
  "A_{3}": "7",
  "A_{2}": "8",
  "A_{1}": "9",
  "A_{0}": "10",
  "I/O_{1}": "11",
  "I/O_{2}": "12",
  "I/O_{3}": "13",
  "I/O_{4}": "15",
  "I/O_{5}": "16",
  "I/O_{6}": "17",
  "I/O_{7}": "18",
  "I/O_{8}": "19",
  "~{CE_{1}}": "20",
  "A_{10}": "21",
  "~{OE}": "22",
  "A_{11}": "23",
  "A_{9}": "24",
  "A_{8}": "25",
  "CE_{2}": "26",
  "~{WE}": "27",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "V_{CC}": "power_in", NC: "no_connect", "A_{12}": "input", "A_{7}": "input", "A_{6}": "input", "A_{5}": "input", "A_{4}": "input", "A_{3}": "input", "A_{2}": "input", "A_{1}": "input", "A_{0}": "input", "I/O_{1}": "tri_state", "I/O_{2}": "tri_state", "I/O_{3}": "tri_state", "I/O_{4}": "tri_state", "I/O_{5}": "tri_state", "I/O_{6}": "tri_state", "I/O_{7}": "tri_state", "I/O_{8}": "tri_state", "~{CE_{1}}": "input", "A_{10}": "input", "~{OE}": "input", "A_{11}": "input", "A_{9}": "input", "A_{8}": "input", "CE_{2}": "input", "~{WE}": "input", ...opts.pinTypes } });
  }
  override schema = "Memory_RAM:uPD4364CX";
  override referencePrefix = "U";
}
