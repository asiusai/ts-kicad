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
 */
export class PN5321A3HN_C1xx extends Component.withPins({
  "DVSS": "1",
  "LOADMOD": "2",
  "TVSS1": "3",
  "TX1": "4",
  "TVDD": "5",
  "TX2": "6",
  "TVSS2": "7",
  "AVDD": "8",
  "VMID": "9",
  "RX": "10",
  "AVSS_11": "11",
  "AUX1": "12",
  "AUX2": "13",
  "OSCIN": "14",
  "OSCOUT": "15",
  "I0": "16",
  "I1": "17",
  "TESTEN": "18",
  "P35": "19",
  "N.C._20": "20",
  "N.C._21": "21",
  "N.C._22": "22",
  "PVDD": "23",
  "P30/UART_RX": "24",
  "P70_IRQ": "25",
  "~{RSTOUT}": "26",
  "NSS/P50_SCL/HSU_RX": "27",
  "MOSI/SDA/HSU_TX": "28",
  "MISO/P71": "29",
  "SCK/P72": "30",
  "P31/UART_TX": "31",
  "P32_INT0": "32",
  "P33_INT1": "33",
  "SIC_CLK/P34": "34",
  "SIGOUT": "35",
  "SIGIN": "36",
  "SVDD": "37",
  "~{RSTPD}": "38",
  "DVDD": "39",
  "VBAT": "40",
  "AVSS_41": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVSS: "power_in", LOADMOD: "output", TVSS1: "power_in", TX1: "output", TVDD: "power_in", TX2: "output", TVSS2: "power_in", AVDD: "power_in", VMID: "output", RX: "input", AVSS_11: "power_in", AUX1: "output", AUX2: "output", OSCIN: "input", OSCOUT: "output", I0: "passive", I1: "passive", TESTEN: "passive", P35: "bidirectional", "N.C._20": "no_connect", "N.C._21": "no_connect", "N.C._22": "no_connect", PVDD: "power_in", "P30/UART_RX": "bidirectional", P70_IRQ: "bidirectional", "~{RSTOUT}": "output", "NSS/P50_SCL/HSU_RX": "bidirectional", "MOSI/SDA/HSU_TX": "bidirectional", "MISO/P71": "bidirectional", "SCK/P72": "bidirectional", "P31/UART_TX": "bidirectional", P32_INT0: "bidirectional", P33_INT1: "bidirectional", "SIC_CLK/P34": "bidirectional", SIGOUT: "output", SIGIN: "input", SVDD: "output", "~{RSTPD}": "input", DVDD: "power_out", VBAT: "power_in", AVSS_41: "passive", ...opts.pinTypes } });
  }
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
 */
export class ST25DV04K_IER8C3 extends Component.withPins({
  "V_EH": "1",
  "AC0": "2",
  "AC1": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "GPO": "7",
  "VCC": "8",
  "NC": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { V_EH: "power_out", AC0: "passive", AC1: "passive", VSS: "power_in", SDA: "bidirectional", SCL: "input", GPO: "open_collector", VCC: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ST25DV16K_JFR6D3 extends Component.withPins({
  "LPD": "1",
  "NC_2": "2",
  "V_EH": "3",
  "AC0": "4",
  "AC1": "5",
  "VSS": "6",
  "SDA": "7",
  "SCL": "8",
  "NC_9": "9",
  "VDCG": "10",
  "GPO": "11",
  "VCC": "12",
  "NC_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LPD: "input", NC_2: "no_connect", V_EH: "power_out", AC0: "passive", AC1: "passive", VSS: "power_in", SDA: "bidirectional", SCL: "input", NC_9: "no_connect", VDCG: "power_in", GPO: "output", VCC: "power_in", NC_13: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ST25DV04K_JFR6D3 extends Component.withPins({
  "LPD": "1",
  "NC_2": "2",
  "V_EH": "3",
  "AC0": "4",
  "AC1": "5",
  "VSS": "6",
  "SDA": "7",
  "SCL": "8",
  "NC_9": "9",
  "VDCG": "10",
  "GPO": "11",
  "VCC": "12",
  "NC_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LPD: "input", NC_2: "no_connect", V_EH: "power_out", AC0: "passive", AC1: "passive", VSS: "power_in", SDA: "bidirectional", SCL: "input", NC_9: "no_connect", VDCG: "power_in", GPO: "output", VCC: "power_in", NC_13: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ST25DV16K_IER8C3 extends Component.withPins({
  "V_EH": "1",
  "AC0": "2",
  "AC1": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "GPO": "7",
  "VCC": "8",
  "NC": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { V_EH: "power_out", AC0: "passive", AC1: "passive", VSS: "power_in", SDA: "bidirectional", SCL: "input", GPO: "open_collector", VCC: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ST25DV64K_IER8C3 extends Component.withPins({
  "V_EH": "1",
  "AC0": "2",
  "AC1": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "GPO": "7",
  "VCC": "8",
  "NC": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { V_EH: "power_out", AC0: "passive", AC1: "passive", VSS: "power_in", SDA: "bidirectional", SCL: "input", GPO: "open_collector", VCC: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ST25DV64K_JFR6D3 extends Component.withPins({
  "LPD": "1",
  "NC_2": "2",
  "V_EH": "3",
  "AC0": "4",
  "AC1": "5",
  "VSS": "6",
  "SDA": "7",
  "SCL": "8",
  "NC_9": "9",
  "VDCG": "10",
  "GPO": "11",
  "VCC": "12",
  "NC_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LPD: "input", NC_2: "no_connect", V_EH: "power_out", AC0: "passive", AC1: "passive", VSS: "power_in", SDA: "bidirectional", SCL: "input", NC_9: "no_connect", VDCG: "power_in", GPO: "output", VCC: "power_in", NC_13: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ST25R3911B_AQW extends Component.withPins({
  "VDD_IO": "1",
  "CSO": "2",
  "VSP_D": "3",
  "XTO": "4",
  "XTI": "5",
  "VSN_D": "6",
  "VSP_A": "7",
  "VDD": "8",
  "VSP_RF": "9",
  "RFO1": "10",
  "RFO2": "11",
  "VSN_RF": "12",
  "TRIM1_3": "13",
  "TRIM2_3": "14",
  "TRIM1_2": "15",
  "TRIM2_2": "16",
  "TRIM1_1": "17",
  "TRIM2_1": "18",
  "TRIM1_0": "19",
  "TRIM2_0": "20",
  "VSS": "21",
  "RFI1": "22",
  "RFI2": "23",
  "AGD": "24",
  "CSI": "25",
  "VSN_A": "26",
  "IRQ": "27",
  "MCU_CLK": "28",
  "MISO": "29",
  "MOSI": "30",
  "SCLK": "31",
  "/SS": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_IO: "power_in", CSO: "output", VSP_D: "power_out", XTO: "output", XTI: "passive", VSN_D: "power_in", VSP_A: "power_out", VDD: "power_in", VSP_RF: "power_out", RFO1: "output", RFO2: "output", VSN_RF: "power_in", TRIM1_3: "passive", TRIM2_3: "passive", TRIM1_2: "passive", TRIM2_2: "passive", TRIM1_1: "passive", TRIM2_1: "passive", TRIM1_0: "passive", TRIM2_0: "passive", VSS: "power_in", RFI1: "passive", RFI2: "passive", AGD: "passive", CSI: "passive", VSN_A: "power_in", IRQ: "output", MCU_CLK: "output", MISO: "output", MOSI: "input", SCLK: "input", "/SS": "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ST25R3911B_AQF extends Component.withPins({
  "VDD_IO": "1",
  "CSO": "2",
  "VSP_D": "3",
  "XTO": "4",
  "XTI": "5",
  "VSN_D": "6",
  "VSP_A": "7",
  "VDD": "8",
  "VSP_RF": "9",
  "RFO1": "10",
  "RFO2": "11",
  "VSN_RF": "12",
  "TRIM1_3": "13",
  "TRIM2_3": "14",
  "TRIM1_2": "15",
  "TRIM2_2": "16",
  "TRIM1_1": "17",
  "TRIM2_1": "18",
  "TRIM1_0": "19",
  "TRIM2_0": "20",
  "VSS": "21",
  "RFI1": "22",
  "RFI2": "23",
  "AGD": "24",
  "CSI": "25",
  "VSN_A": "26",
  "IRQ": "27",
  "MCU_CLK": "28",
  "MISO": "29",
  "MOSI": "30",
  "SCLK": "31",
  "/SS": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_IO: "power_in", CSO: "output", VSP_D: "power_out", XTO: "output", XTI: "passive", VSN_D: "power_in", VSP_A: "power_out", VDD: "power_in", VSP_RF: "power_out", RFO1: "output", RFO2: "output", VSN_RF: "power_in", TRIM1_3: "passive", TRIM2_3: "passive", TRIM1_2: "passive", TRIM2_2: "passive", TRIM1_1: "passive", TRIM2_1: "passive", TRIM1_0: "passive", TRIM2_0: "passive", VSS: "power_in", RFI1: "passive", RFI2: "passive", AGD: "passive", CSI: "passive", VSN_A: "power_in", IRQ: "output", MCU_CLK: "output", MISO: "output", MOSI: "input", SCLK: "input", "/SS": "input", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_NFC:ST25R3911B-AQF";
  override referencePrefix = "U";
}
