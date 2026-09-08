// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Near Field Communication (NFC) controller, QFN-40
 *
 * KiCad symbol: `RF_NFC:PN5321A3HN_C1xx`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*6x6mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/nxp/data-sheets/PN532_C1.pdf
 * Keywords: NFC.
 * Default footprint: Package_DFN_QFN:HVQFN-40-1EP_6x6mm_P0.5mm_EP4.1x4.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PN5321A3HN_C1xx extends Component.withPins({
  /** Physical pin 1: DVSS; power_in. */
  "DVSS": "1",
  /** Physical pin 2: LOADMOD; output. */
  "LOADMOD": "2",
  /** Physical pin 3: TVSS1; power_in. */
  "TVSS1": "3",
  /** Physical pin 4: TX1; output. */
  "TX1": "4",
  /** Physical pin 5: TVDD; power_in. */
  "TVDD": "5",
  /** Physical pin 6: TX2; output. */
  "TX2": "6",
  /** Physical pin 7: TVSS2; power_in. */
  "TVSS2": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: VMID; output. */
  "VMID": "9",
  /** Physical pin 10: RX; input. */
  "RX": "10",
  /** Physical pin 11: AVSS; power_in. */
  "AVSS_11": "11",
  /** Physical pin 12: AUX1; output. */
  "AUX1": "12",
  /** Physical pin 13: AUX2; output. */
  "AUX2": "13",
  /** Physical pin 14: OSCIN; input. */
  "OSCIN": "14",
  /** Physical pin 15: OSCOUT; output. */
  "OSCOUT": "15",
  /** Physical pin 16: I0; passive. */
  "I0": "16",
  /** Physical pin 17: I1; passive. */
  "I1": "17",
  /** Physical pin 18: TESTEN; passive. */
  "TESTEN": "18",
  /** Physical pin 19: P35; bidirectional. */
  "P35": "19",
  /** Physical pin 20: N.C.; no_connect. */
  "N.C._20": "20",
  /** Physical pin 21: N.C.; no_connect. */
  "N.C._21": "21",
  /** Physical pin 22: N.C.; no_connect. */
  "N.C._22": "22",
  /** Physical pin 23: PVDD; power_in. */
  "PVDD": "23",
  /** Physical pin 24: P30/UART_RX; bidirectional. */
  "P30/UART_RX": "24",
  /** Physical pin 25: P70_IRQ; bidirectional. */
  "P70_IRQ": "25",
  /** Physical pin 26: ~{RSTOUT}; output. */
  "~{RSTOUT}": "26",
  /** Physical pin 27: NSS/P50_SCL/HSU_RX; bidirectional. */
  "NSS/P50_SCL/HSU_RX": "27",
  /** Physical pin 28: MOSI/SDA/HSU_TX; bidirectional. */
  "MOSI/SDA/HSU_TX": "28",
  /** Physical pin 29: MISO/P71; bidirectional. */
  "MISO/P71": "29",
  /** Physical pin 30: SCK/P72; bidirectional. */
  "SCK/P72": "30",
  /** Physical pin 31: P31/UART_TX; bidirectional. */
  "P31/UART_TX": "31",
  /** Physical pin 32: P32_INT0; bidirectional. */
  "P32_INT0": "32",
  /** Physical pin 33: P33_INT1; bidirectional. */
  "P33_INT1": "33",
  /** Physical pin 34: SIC_CLK/P34; bidirectional. */
  "SIC_CLK/P34": "34",
  /** Physical pin 35: SIGOUT; output. */
  "SIGOUT": "35",
  /** Physical pin 36: SIGIN; input. */
  "SIGIN": "36",
  /** Physical pin 37: SVDD; output. */
  "SVDD": "37",
  /** Physical pin 38: ~{RSTPD}; input. */
  "~{RSTPD}": "38",
  /** Physical pin 39: DVDD; power_out. */
  "DVDD": "39",
  /** Physical pin 40: VBAT; power_in. */
  "VBAT": "40",
  /** Physical pin 41: AVSS; passive. */
  "AVSS_41": "41",
}) {
  override schema = "RF_NFC:PN5321A3HN_C1xx";
  override referencePrefix = "U";
}

/**
 * Dynamic NFC/RFID tag IC with 4-Kbit EEPROM, UFDFPN-8
 *
 * KiCad symbol: `RF_NFC:ST25DV04K-IER8C3`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/st25dv04k.pdf
 * Keywords: NFC Tag.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.36x1.46mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST25DV04K_IER8C3 extends Component.withPins({
  /** Physical pin 1: V_EH; power_out. */
  "V_EH": "1",
  /** Physical pin 2: AC0; passive. */
  "AC0": "2",
  /** Physical pin 3: AC1; passive. */
  "AC1": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: GPO; open_collector. */
  "GPO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
}) {
  override schema = "RF_NFC:ST25DV04K-IER8C3";
  override referencePrefix = "U";
}

/**
 * Dynamic NFC/RFID tag IC with 16-Kbit EEPROM, UFDFPN-12
 *
 * KiCad symbol: `RF_NFC:ST25DV16K-JFR6D3`. Reference prefix: `U`.
 * Footprint filters: ST*UFDFPN*3x3mm*P0.5mm*EP1.4x2.55mm*.
 * @see https://www.st.com/resource/en/datasheet/st25dv04k.pdf
 * Keywords: NFC Tag.
 * Default footprint: Package_DFN_QFN:ST_UFDFPN-12-1EP_3x3mm_P0.5mm_EP1.4x2.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST25DV16K_JFR6D3 extends Component.withPins({
  /** Physical pin 1: LPD; input. */
  "LPD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V_EH; power_out. */
  "V_EH": "3",
  /** Physical pin 4: AC0; passive. */
  "AC0": "4",
  /** Physical pin 5: AC1; passive. */
  "AC1": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: VDCG; power_in. */
  "VDCG": "10",
  /** Physical pin 11: GPO; output. */
  "GPO": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
}) {
  override schema = "RF_NFC:ST25DV16K-JFR6D3";
  override referencePrefix = "U";
}

/**
 * Dynamic NFC/RFID tag IC with 4-Kbit EEPROM, UFDFPN-12
 *
 * KiCad symbol: `RF_NFC:ST25DV04K-JFR6D3`. Reference prefix: `U`.
 * Footprint filters: ST*UFDFPN*3x3mm*P0.5mm*EP1.4x2.55mm*.
 * @see https://www.st.com/resource/en/datasheet/st25dv04k.pdf
 * Keywords: NFC Tag.
 * Default footprint: Package_DFN_QFN:ST_UFDFPN-12-1EP_3x3mm_P0.5mm_EP1.4x2.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST25DV04K_JFR6D3 extends Component.withPins({
  /** Physical pin 1: LPD; input. */
  "LPD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V_EH; power_out. */
  "V_EH": "3",
  /** Physical pin 4: AC0; passive. */
  "AC0": "4",
  /** Physical pin 5: AC1; passive. */
  "AC1": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: VDCG; power_in. */
  "VDCG": "10",
  /** Physical pin 11: GPO; output. */
  "GPO": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
}) {
  override schema = "RF_NFC:ST25DV04K-JFR6D3";
  override referencePrefix = "U";
}

/**
 * Dynamic NFC/RFID tag IC with 16-Kbit EEPROM, UFDFPN-8
 *
 * KiCad symbol: `RF_NFC:ST25DV16K-IER8C3`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/st25dv04k.pdf
 * Keywords: NFC Tag.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.36x1.46mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST25DV16K_IER8C3 extends Component.withPins({
  /** Physical pin 1: V_EH; power_out. */
  "V_EH": "1",
  /** Physical pin 2: AC0; passive. */
  "AC0": "2",
  /** Physical pin 3: AC1; passive. */
  "AC1": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: GPO; open_collector. */
  "GPO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
}) {
  override schema = "RF_NFC:ST25DV16K-IER8C3";
  override referencePrefix = "U";
}

/**
 * Dynamic NFC/RFID tag IC with 64-Kbit EEPROM, UFDFPN-8
 *
 * KiCad symbol: `RF_NFC:ST25DV64K-IER8C3`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/st25dv04k.pdf
 * Keywords: NFC Tag.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.36x1.46mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST25DV64K_IER8C3 extends Component.withPins({
  /** Physical pin 1: V_EH; power_out. */
  "V_EH": "1",
  /** Physical pin 2: AC0; passive. */
  "AC0": "2",
  /** Physical pin 3: AC1; passive. */
  "AC1": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: GPO; open_collector. */
  "GPO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
}) {
  override schema = "RF_NFC:ST25DV64K-IER8C3";
  override referencePrefix = "U";
}

/**
 * Dynamic NFC/RFID tag IC with 64-Kbit EEPROM, UFDFPN-12
 *
 * KiCad symbol: `RF_NFC:ST25DV64K-JFR6D3`. Reference prefix: `U`.
 * Footprint filters: ST*UFDFPN*3x3mm*P0.5mm*EP1.4x2.55mm*.
 * @see https://www.st.com/resource/en/datasheet/st25dv04k.pdf
 * Keywords: NFC Tag.
 * Default footprint: Package_DFN_QFN:ST_UFDFPN-12-1EP_3x3mm_P0.5mm_EP1.4x2.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST25DV64K_JFR6D3 extends Component.withPins({
  /** Physical pin 1: LPD; input. */
  "LPD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V_EH; power_out. */
  "V_EH": "3",
  /** Physical pin 4: AC0; passive. */
  "AC0": "4",
  /** Physical pin 5: AC1; passive. */
  "AC1": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: VDCG; power_in. */
  "VDCG": "10",
  /** Physical pin 11: GPO; output. */
  "GPO": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
}) {
  override schema = "RF_NFC:ST25DV64K-JFR6D3";
  override referencePrefix = "U";
}

/**
 * High performance HR reader/NFC initiator with 1.4W supporting VHBR and AAT, VFQFPN32
 *
 * KiCad symbol: `RF_NFC:ST25R3911B-AQW`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/st25r3911b.pdf
 * Keywords: NFC.
 * Default footprint: Package_DFN_QFN:VQFN-32-1EP_5x5mm_P0.5mm_EP3.5x3.5mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST25R3911B_AQW extends Component.withPins({
  /** Physical pin 1: VDD_IO; power_in. */
  "VDD_IO": "1",
  /** Physical pin 2: CSO; output. */
  "CSO": "2",
  /** Physical pin 3: VSP_D; power_out. */
  "VSP_D": "3",
  /** Physical pin 4: XTO; output. */
  "XTO": "4",
  /** Physical pin 5: XTI; passive. */
  "XTI": "5",
  /** Physical pin 6: VSN_D; power_in. */
  "VSN_D": "6",
  /** Physical pin 7: VSP_A; power_out. */
  "VSP_A": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: VSP_RF; power_out. */
  "VSP_RF": "9",
  /** Physical pin 10: RFO1; output. */
  "RFO1": "10",
  /** Physical pin 11: RFO2; output. */
  "RFO2": "11",
  /** Physical pin 12: VSN_RF; power_in. */
  "VSN_RF": "12",
  /** Physical pin 13: TRIM1_3; passive. */
  "TRIM1_3": "13",
  /** Physical pin 14: TRIM2_3; passive. */
  "TRIM2_3": "14",
  /** Physical pin 15: TRIM1_2; passive. */
  "TRIM1_2": "15",
  /** Physical pin 16: TRIM2_2; passive. */
  "TRIM2_2": "16",
  /** Physical pin 17: TRIM1_1; passive. */
  "TRIM1_1": "17",
  /** Physical pin 18: TRIM2_1; passive. */
  "TRIM2_1": "18",
  /** Physical pin 19: TRIM1_0; passive. */
  "TRIM1_0": "19",
  /** Physical pin 20: TRIM2_0; passive. */
  "TRIM2_0": "20",
  /** Physical pin 21: VSS; power_in. */
  "VSS": "21",
  /** Physical pin 22: RFI1; passive. */
  "RFI1": "22",
  /** Physical pin 23: RFI2; passive. */
  "RFI2": "23",
  /** Physical pin 24: AGD; passive. */
  "AGD": "24",
  /** Physical pin 25: CSI; passive. */
  "CSI": "25",
  /** Physical pin 26: VSN_A; power_in. */
  "VSN_A": "26",
  /** Physical pin 27: IRQ; output. */
  "IRQ": "27",
  /** Physical pin 28: MCU_CLK; output. */
  "MCU_CLK": "28",
  /** Physical pin 29: MISO; output. */
  "MISO": "29",
  /** Physical pin 30: MOSI; input. */
  "MOSI": "30",
  /** Physical pin 31: SCLK; input. */
  "SCLK": "31",
  /** Physical pin 32: /SS; input. */
  "/SS": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
  override schema = "RF_NFC:ST25R3911B-AQW";
  override referencePrefix = "U";
}

/**
 * High performance HR reader/NFC initiator with 1.4W supporting VHBR and AAT, QFN32
 *
 * KiCad symbol: `RF_NFC:ST25R3911B-AQF`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/st25r3911b.pdf
 * Keywords: NFC.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST25R3911B_AQF extends Component.withPins({
  /** Physical pin 1: VDD_IO; power_in. */
  "VDD_IO": "1",
  /** Physical pin 2: CSO; output. */
  "CSO": "2",
  /** Physical pin 3: VSP_D; power_out. */
  "VSP_D": "3",
  /** Physical pin 4: XTO; output. */
  "XTO": "4",
  /** Physical pin 5: XTI; passive. */
  "XTI": "5",
  /** Physical pin 6: VSN_D; power_in. */
  "VSN_D": "6",
  /** Physical pin 7: VSP_A; power_out. */
  "VSP_A": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: VSP_RF; power_out. */
  "VSP_RF": "9",
  /** Physical pin 10: RFO1; output. */
  "RFO1": "10",
  /** Physical pin 11: RFO2; output. */
  "RFO2": "11",
  /** Physical pin 12: VSN_RF; power_in. */
  "VSN_RF": "12",
  /** Physical pin 13: TRIM1_3; passive. */
  "TRIM1_3": "13",
  /** Physical pin 14: TRIM2_3; passive. */
  "TRIM2_3": "14",
  /** Physical pin 15: TRIM1_2; passive. */
  "TRIM1_2": "15",
  /** Physical pin 16: TRIM2_2; passive. */
  "TRIM2_2": "16",
  /** Physical pin 17: TRIM1_1; passive. */
  "TRIM1_1": "17",
  /** Physical pin 18: TRIM2_1; passive. */
  "TRIM2_1": "18",
  /** Physical pin 19: TRIM1_0; passive. */
  "TRIM1_0": "19",
  /** Physical pin 20: TRIM2_0; passive. */
  "TRIM2_0": "20",
  /** Physical pin 21: VSS; power_in. */
  "VSS": "21",
  /** Physical pin 22: RFI1; passive. */
  "RFI1": "22",
  /** Physical pin 23: RFI2; passive. */
  "RFI2": "23",
  /** Physical pin 24: AGD; passive. */
  "AGD": "24",
  /** Physical pin 25: CSI; passive. */
  "CSI": "25",
  /** Physical pin 26: VSN_A; power_in. */
  "VSN_A": "26",
  /** Physical pin 27: IRQ; output. */
  "IRQ": "27",
  /** Physical pin 28: MCU_CLK; output. */
  "MCU_CLK": "28",
  /** Physical pin 29: MISO; output. */
  "MISO": "29",
  /** Physical pin 30: MOSI; input. */
  "MOSI": "30",
  /** Physical pin 31: SCLK; input. */
  "SCLK": "31",
  /** Physical pin 32: /SS; input. */
  "/SS": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
  override schema = "RF_NFC:ST25R3911B-AQF";
  override referencePrefix = "U";
}

