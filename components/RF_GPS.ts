// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Quectel GPS Module
 *
 * KiCad symbol: `RF_GPS:L70-R`. Reference prefix: `U`.
 * Footprint filters: Quectel*L70*R*.
 * @see https://www.quectel.com/product/gps-only-l70-r
 * Keywords: quectel GPS GNSS module.
 * Default footprint: RF_GPS:Quectel_L70-R.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L70_R extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: TXD1; output. */
  "TXD1": "2",
  /** Physical pin 3: RXD1; input. */
  "RXD1": "3",
  /** Physical pin 4: 1PPS; output. */
  "1PPS": "4",
  /** Physical pin 5: STANDBY; input. */
  "STANDBY": "5",
  /** Physical pin 6: V_BCKP; power_in. */
  "V_BCKP": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: ANTON; output. */
  "ANTON": "13",
  /** Physical pin 14: VCC_RF; power_out. */
  "VCC_RF": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: RESERVED; passive. */
  "RESERVED_16": "16",
  /** Physical pin 17: RESERVED; passive. */
  "RESERVED_17": "17",
  /** Physical pin 18: RESERVED; passive. */
  "RESERVED_18": "18",
}) {
  override schema = "RF_GPS:L70-R";
  override referencePrefix = "U";
}

/**
 * Quectel GPS Module
 *
 * KiCad symbol: `RF_GPS:L80-R`. Reference prefix: `U`.
 * Footprint filters: Quectel*L80*R*.
 * @see https://www.quectel.com/UploadImage/Downlad/Quectel_L80-R_Hardware_Design_V1.2.pdf
 * Keywords: quectel GPS GNSS module.
 * Default footprint: RF_GPS:Quectel_L80-R.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L80_R extends Component.withPins({
  /** Physical pin 1: RXD1; input. */
  "RXD1": "1",
  /** Physical pin 2: TXD1; output. */
  "TXD1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: V_BCKP; power_in. */
  "V_BCKP": "5",
  /** Physical pin 6: 1PPS; output. */
  "1PPS": "6",
  /** Physical pin 7: RESERVED; passive. */
  "RESERVED_7": "7",
  /** Physical pin 8: RESERVED; passive. */
  "RESERVED_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: ~{RESET}; input. */
  "~{RESET}": "10",
  /** Physical pin 11: RESERVED; passive. */
  "RESERVED_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
}) {
  override schema = "RF_GPS:L80-R";
  override referencePrefix = "U";
}

/**
 * GNSS Module LEA M8, VCC 3V to 3.6V
 *
 * KiCad symbol: `RF_GPS:LEA-M8F`. Reference prefix: `U`.
 * Footprint filters: ublox*LEA*.
 * @see https://www.u-blox.com/sites/default/files/products/documents/LEA-M8F_DataSheet_%28UBX-14001772%29.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_LEA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LEA_M8F extends Component.withPins({
  /** Physical pin 1: SDA2/~{SPI_CS}; bidirectional. */
  "SDA2/~{SPI_CS}": "1",
  /** Physical pin 2: SCL2/SPI_CLK; input. */
  "SCL2/SPI_CLK": "2",
  /** Physical pin 3: TxD1/SPI_MISO; output. */
  "TxD1/SPI_MISO": "3",
  /** Physical pin 4: RxD1/SPI_MOSI; input. */
  "RxD1/SPI_MOSI": "4",
  /** Physical pin 5: D_SEL; input. */
  "D_SEL": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VCC_OUT; power_out. */
  "VCC_OUT": "8",
  /** Physical pin 9: REF_FREQ_OUT; output. */
  "REF_FREQ_OUT": "9",
  /** Physical pin 10: ~{RESET}; input. */
  "~{RESET}": "10",
  /** Physical pin 11: V_BCKP; power_in. */
  "V_BCKP": "11",
  /** Physical pin 12: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: RF_IN; input. */
  "RF_IN": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: VCC_RF; power_out. */
  "VCC_RF": "18",
  /** Physical pin 19: V_ANT; power_in. */
  "V_ANT": "19",
  /** Physical pin 20: RESERVED; no_connect. */
  "RESERVED": "20",
  /** Physical pin 21: FREQ_PHASE_IN1; input. */
  "FREQ_PHASE_IN1": "21",
  /** Physical pin 22: SDA_DAC; bidirectional. */
  "SDA_DAC": "22",
  /** Physical pin 23: SCL_DAC; output. */
  "SCL_DAC": "23",
  /** Physical pin 24: VDD_USB; power_in. */
  "VDD_USB": "24",
  /** Physical pin 25: USB_DM; bidirectional. */
  "USB_DM": "25",
  /** Physical pin 26: USB_DP; bidirectional. */
  "USB_DP": "26",
  /** Physical pin 27: FREQ_PHASE_IN0; input. */
  "FREQ_PHASE_IN0": "27",
  /** Physical pin 28: TIMEPULSE/TP2/~{SAFEBOOT}; bidirectional. */
  "TIMEPULSE/TP2/~{SAFEBOOT}": "28",
}) {
  override schema = "RF_GPS:LEA-M8F";
  override referencePrefix = "U";
}

/**
 * GNSS Module LEA M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:LEA-M8S`. Reference prefix: `U`.
 * Footprint filters: ublox*LEA*.
 * @see https://www.u-blox.com/sites/default/files/LEA-M8S-FW3_DataSheet_%28UBX-16010205%29.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_LEA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LEA_M8S extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: TXD; output. */
  "TXD": "3",
  /** Physical pin 4: RXD; input. */
  "RXD": "4",
  /** Physical pin 5: RESERVED; no_connect. */
  "RESERVED_5": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VCC_OUT; power_out. */
  "VCC_OUT": "8",
  /** Physical pin 9: RESERVED; no_connect. */
  "RESERVED_9": "9",
  /** Physical pin 10: ~{RESET}; input. */
  "~{RESET}": "10",
  /** Physical pin 11: V_BCKP; power_in. */
  "V_BCKP": "11",
  /** Physical pin 12: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: RF_IN; input. */
  "RF_IN": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: VCC_RF; power_out. */
  "VCC_RF": "18",
  /** Physical pin 19: V_ANT; power_in. */
  "V_ANT": "19",
  /** Physical pin 20: EXTINT1; input. */
  "EXTINT1": "20",
  /** Physical pin 21: RESERVED; no_connect. */
  "RESERVED_21": "21",
  /** Physical pin 22: RESERVED; no_connect. */
  "RESERVED_22": "22",
  /** Physical pin 23: RESERVED; no_connect. */
  "RESERVED_23": "23",
  /** Physical pin 24: VDD_USB; power_in. */
  "VDD_USB": "24",
  /** Physical pin 25: USB_DM; bidirectional. */
  "USB_DM": "25",
  /** Physical pin 26: USB_DP; bidirectional. */
  "USB_DP": "26",
  /** Physical pin 27: EXTINT0; input. */
  "EXTINT0": "27",
  /** Physical pin 28: TIMEPULSE; output. */
  "TIMEPULSE": "28",
}) {
  override schema = "RF_GPS:LEA-M8S";
  override referencePrefix = "U";
}

/**
 * GNSS Module LEA M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:LEA-M8T`. Reference prefix: `U`.
 * Footprint filters: ublox*LEA*.
 * @see https://content.u-blox.com/sites/default/files/documents/NEO-LEA-M8T-FW3_DataSheet_UBX-15025193.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_LEA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LEA_M8T extends Component.withPins({
  /** Physical pin 1: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "1",
  /** Physical pin 2: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "2",
  /** Physical pin 3: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "3",
  /** Physical pin 4: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "4",
  /** Physical pin 5: D_SEL; input. */
  "D_SEL": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VCC_OUT; power_out. */
  "VCC_OUT": "8",
  /** Physical pin 9: RESERVED; no_connect. */
  "RESERVED_9": "9",
  /** Physical pin 10: ~{RESET}; input. */
  "~{RESET}": "10",
  /** Physical pin 11: V_BCKP; power_in. */
  "V_BCKP": "11",
  /** Physical pin 12: TP2/~{SAFEBOOT}; bidirectional. */
  "TP2/~{SAFEBOOT}": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: RF_IN; input. */
  "RF_IN": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: VCC_RF; power_out. */
  "VCC_RF": "18",
  /** Physical pin 19: V_ANT; power_in. */
  "V_ANT": "19",
  /** Physical pin 20: EXTINT1; input. */
  "EXTINT1": "20",
  /** Physical pin 21: RESERVED; no_connect. */
  "RESERVED_21": "21",
  /** Physical pin 22: RESERVED; no_connect. */
  "RESERVED_22": "22",
  /** Physical pin 23: RESERVED; no_connect. */
  "RESERVED_23": "23",
  /** Physical pin 24: VDD_USB; power_in. */
  "VDD_USB": "24",
  /** Physical pin 25: USB_DM; bidirectional. */
  "USB_DM": "25",
  /** Physical pin 26: USB_DP; bidirectional. */
  "USB_DP": "26",
  /** Physical pin 27: EXTINT0; input. */
  "EXTINT0": "27",
  /** Physical pin 28: TIMEPULSE; output. */
  "TIMEPULSE": "28",
}) {
  override schema = "RF_GPS:LEA-M8T";
  override referencePrefix = "U";
}

/**
 * GNSS Module MAX M8, VCC 1.65V to 3.6V
 *
 * KiCad symbol: `RF_GPS:MAX-8C`. Reference prefix: `U`.
 * Footprint filters: ublox*MAX*.
 * @see https://www.u-blox.com/sites/default/files/MAX-8_DataSheet_%28UBX-16000093%29.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_MAX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX_8C extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: TIMEPULSE; output. */
  "TIMEPULSE": "4",
  /** Physical pin 5: EXTINT; input. */
  "EXTINT": "5",
  /** Physical pin 6: V_BCKP; power_in. */
  "V_BCKP": "6",
  /** Physical pin 7: VCC_IO; power_in. */
  "VCC_IO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: LNA_EN; output. */
  "LNA_EN": "13",
  /** Physical pin 14: VCC_RF; power_out. */
  "VCC_RF": "14",
  /** Physical pin 15: Reserved; no_connect. */
  "Reserved": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
  /** Physical pin 17: SCL; input. */
  "SCL": "17",
  /** Physical pin 18: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "18",
}) {
  override schema = "RF_GPS:MAX-8C";
  override referencePrefix = "U";
}

/**
 * GNSS Module M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:MAX-8Q`. Reference prefix: `U`.
 * Footprint filters: ublox*MAX*.
 * @see https://www.u-blox.com/sites/default/files/MAX-8_DataSheet_%28UBX-16000093%29.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_MAX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX_8Q extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: TIMEPULSE; output. */
  "TIMEPULSE": "4",
  /** Physical pin 5: EXTINT; input. */
  "EXTINT": "5",
  /** Physical pin 6: V_BCKP; power_in. */
  "V_BCKP": "6",
  /** Physical pin 7: VCC_IO; power_in. */
  "VCC_IO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: LNA_EN; output. */
  "LNA_EN": "13",
  /** Physical pin 14: VCC_RF; power_out. */
  "VCC_RF": "14",
  /** Physical pin 15: Reserved; no_connect. */
  "Reserved": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
  /** Physical pin 17: SCL; input. */
  "SCL": "17",
  /** Physical pin 18: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "18",
}) {
  override schema = "RF_GPS:MAX-8Q";
  override referencePrefix = "U";
}

/**
 * GNSS Module MAX M10, VCC 1.65V to 3.6V
 *
 * KiCad symbol: `RF_GPS:MAX-M10S`. Reference prefix: `U`.
 * Footprint filters: ublox?MAX*.
 * @see https://content.u-blox.com/sites/default/files/MAX-M10S_DataSheet_UBX-20035208.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_MAX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX_M10S extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: TIMEPULSE; output. */
  "TIMEPULSE": "4",
  /** Physical pin 5: EXTINT; input. */
  "EXTINT": "5",
  /** Physical pin 6: V_BCKP; power_in. */
  "V_BCKP": "6",
  /** Physical pin 7: VCC_IO; power_in. */
  "VCC_IO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: LNA_EN; output. */
  "LNA_EN": "13",
  /** Physical pin 14: VCC_RF; power_out. */
  "VCC_RF": "14",
  /** Physical pin 15: VIO_SEL; input. */
  "VIO_SEL": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
  /** Physical pin 17: SCL; input. */
  "SCL": "17",
  /** Physical pin 18: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "18",
}) {
  override schema = "RF_GPS:MAX-M10S";
  override referencePrefix = "U";
}

/**
 * GNSS Module MAX M8, VCC 1.65V to 3.6V
 *
 * KiCad symbol: `RF_GPS:MAX-M8C`. Reference prefix: `U`.
 * Footprint filters: ublox*MAX*.
 * @see https://www.u-blox.com/sites/default/files/MAX-M8-FW3_DataSheet_%28UBX-15031506%29.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_MAX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX_M8C extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: TIMEPULSE; output. */
  "TIMEPULSE": "4",
  /** Physical pin 5: EXTINT; input. */
  "EXTINT": "5",
  /** Physical pin 6: V_BCKP; power_in. */
  "V_BCKP": "6",
  /** Physical pin 7: VCC_IO; power_in. */
  "VCC_IO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: LNA_EN; output. */
  "LNA_EN": "13",
  /** Physical pin 14: VCC_RF; power_out. */
  "VCC_RF": "14",
  /** Physical pin 15: Reserved; no_connect. */
  "Reserved": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
  /** Physical pin 17: SCL; input. */
  "SCL": "17",
  /** Physical pin 18: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "18",
}) {
  override schema = "RF_GPS:MAX-M8C";
  override referencePrefix = "U";
}

/**
 * GNSS Module MAX M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:MAX-M8Q`. Reference prefix: `U`.
 * Footprint filters: ublox*MAX*.
 * @see https://www.u-blox.com/sites/default/files/MAX-M8-FW3_DataSheet_%28UBX-15031506%29.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_MAX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX_M8Q extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: TIMEPULSE; output. */
  "TIMEPULSE": "4",
  /** Physical pin 5: EXTINT; input. */
  "EXTINT": "5",
  /** Physical pin 6: V_BCKP; power_in. */
  "V_BCKP": "6",
  /** Physical pin 7: VCC_IO; power_in. */
  "VCC_IO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: LNA_EN; output. */
  "LNA_EN": "13",
  /** Physical pin 14: VCC_RF; power_out. */
  "VCC_RF": "14",
  /** Physical pin 15: Reserved; no_connect. */
  "Reserved": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
  /** Physical pin 17: SCL; input. */
  "SCL": "17",
  /** Physical pin 18: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "18",
}) {
  override schema = "RF_GPS:MAX-M8Q";
  override referencePrefix = "U";
}

/**
 * GNSS Module MAX M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:MAX-M8W`. Reference prefix: `U`.
 * Footprint filters: ublox*MAX*.
 * @see https://www.u-blox.com/sites/default/files/MAX-M8-FW3_DataSheet_%28UBX-15031506%29.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_MAX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX_M8W extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: TXD; output. */
  "TXD": "2",
  /** Physical pin 3: RXD; input. */
  "RXD": "3",
  /** Physical pin 4: TIMEPULSE; output. */
  "TIMEPULSE": "4",
  /** Physical pin 5: EXTINT; input. */
  "EXTINT": "5",
  /** Physical pin 6: V_BCKP; power_in. */
  "V_BCKP": "6",
  /** Physical pin 7: VCC_IO; power_in. */
  "VCC_IO": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: Reserved; no_connect. */
  "Reserved": "13",
  /** Physical pin 14: VCC_RF; power_out. */
  "VCC_RF": "14",
  /** Physical pin 15: V_ANT; power_in. */
  "V_ANT": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
  /** Physical pin 17: SCL; input. */
  "SCL": "17",
  /** Physical pin 18: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "18",
}) {
  override schema = "RF_GPS:MAX-M8W";
  override referencePrefix = "U";
}

/**
 * GNSS receiver module (GPS, Galileo, GLONASS, BeiDou), I2C / UART interface, LGA-53 (MIA M-LGA53)
 *
 * KiCad symbol: `RF_GPS:MIA-M10Q`. Reference prefix: `U`.
 * Footprint filters: ublox?LGA*4.5x4.5mm?Layout9x9?P0.5mm*.
 * @see https://content.u-blox.com/sites/default/files/documents/MIA-M10Q_DataSheet_UBX-22015849.pdf
 * Keywords: u-blox.
 * Default footprint: Package_LGA:ublox_LGA-53_4.5x4.5mm_Layout9x9_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MIA_M10Q extends Component.withPins({
  /** Physical pin A1: GND; power_in. */
  "GND_A1": "A1",
  /** Physical pin A2: GND; passive. */
  "GND_A2": "A2",
  /** Physical pin A3: GND; passive. */
  "GND_A3": "A3",
  /** Physical pin A4: RTC_I; input. */
  "RTC_I": "A4",
  /** Physical pin A5: RTC_O; output. */
  "RTC_O": "A5",
  /** Physical pin A6: EXTINT; bidirectional. */
  "EXTINT": "A6",
  /** Physical pin A7: TIMEPULSE; output. */
  "TIMEPULSE": "A7",
  /** Physical pin A8: GND; passive. */
  "GND_A8": "A8",
  /** Physical pin A9: GND; passive. */
  "GND_A9": "A9",
  /** Physical pin B1: VCC; power_in. */
  "VCC": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B8: GND; passive. */
  "GND_B8": "B8",
  /** Physical pin B9: RF_IN; input. */
  "RF_IN": "B9",
  /** Physical pin C1: Reserved; no_connect. */
  "Reserved_C1": "C1",
  /** Physical pin C3: GND; passive. */
  "GND_C3": "C3",
  /** Physical pin C4: ~{RESET}; input. */
  "~{RESET}": "C4",
  /** Physical pin C5: Reserved; no_connect. */
  "Reserved_C5": "C5",
  /** Physical pin C6: VCC_RF; power_out. */
  "VCC_RF": "C6",
  /** Physical pin C7: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "C7",
  /** Physical pin C9: GND; passive. */
  "GND_C9": "C9",
  /** Physical pin D1: SDA; bidirectional. */
  "SDA": "D1",
  /** Physical pin D2: Reserved; passive. */
  "Reserved_D2": "D2",
  /** Physical pin D9: Reserved; no_connect. */
  "Reserved_D9": "D9",
  /** Physical pin E1: SCL; input. */
  "SCL": "E1",
  /** Physical pin E2: Reserved; passive. */
  "Reserved_E2": "E2",
  /** Physical pin E3: GND; passive. */
  "GND_E3": "E3",
  /** Physical pin E4: GND; passive. */
  "GND_E4": "E4",
  /** Physical pin E7: Reserved; no_connect. */
  "Reserved_E7": "E7",
  /** Physical pin E9: GND; passive. */
  "GND_E9": "E9",
  /** Physical pin F1: GND; passive. */
  "GND_F1": "F1",
  /** Physical pin F3: GND; passive. */
  "GND_F3": "F3",
  /** Physical pin F4: GND; passive. */
  "GND_F4": "F4",
  /** Physical pin F7: PIO6; bidirectional. */
  "PIO6": "F7",
  /** Physical pin F9: Reserved; passive. */
  "Reserved_F9": "F9",
  /** Physical pin G1: TX; output. */
  "TX": "G1",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: GND; passive. */
  "GND_G4": "G4",
  /** Physical pin G5: GND; passive. */
  "GND_G5": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: Reserved; passive. */
  "Reserved_G7": "G7",
  /** Physical pin G9: Reserved; no_connect. */
  "Reserved_G9": "G9",
  /** Physical pin H1: RX; input. */
  "RX": "H1",
  /** Physical pin H8: GND; passive. */
  "GND_H8": "H8",
  /** Physical pin H9: LNA_EN; output. */
  "LNA_EN": "H9",
  /** Physical pin J1: Reserved; no_connect. */
  "Reserved_J1": "J1",
  /** Physical pin J2: Reserved; no_connect. */
  "Reserved_J2": "J2",
  /** Physical pin J3: Reserved; no_connect. */
  "Reserved_J3": "J3",
  /** Physical pin J4: V_IO; power_in. */
  "V_IO": "J4",
  /** Physical pin J5: V_BCKP; power_in. */
  "V_BCKP": "J5",
  /** Physical pin J6: VIO_SEL; input. */
  "VIO_SEL": "J6",
  /** Physical pin J7: Reserved; no_connect. */
  "Reserved_J7": "J7",
  /** Physical pin J8: GND; passive. */
  "GND_J8": "J8",
  /** Physical pin J9: GND; passive. */
  "GND_J9": "J9",
}) {
  override schema = "RF_GPS:MIA-M10Q";
  override referencePrefix = "U";
}

/**
 * GNSS Module NEO M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:NEO-M8N`. Reference prefix: `U`.
 * Footprint filters: ublox*NEO*.
 * @see https://content.u-blox.com/sites/default/files/NEO-M8-FW3_DataSheet_UBX-15031086.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_NEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NEO_M8N extends Component.withPins({
  /** Physical pin 1: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "1",
  /** Physical pin 2: D_SEL; input. */
  "D_SEL": "2",
  /** Physical pin 3: TIMEPULSE; output. */
  "TIMEPULSE": "3",
  /** Physical pin 4: EXTINT; input. */
  "EXTINT": "4",
  /** Physical pin 5: USB_DM; bidirectional. */
  "USB_DM": "5",
  /** Physical pin 6: USB_DP; bidirectional. */
  "USB_DP": "6",
  /** Physical pin 7: VDD_USB; power_in. */
  "VDD_USB": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: VCC_RF; power_out. */
  "VCC_RF": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: LNA_EN; output. */
  "LNA_EN": "14",
  /** Physical pin 15: RESERVED; no_connect. */
  "RESERVED_15": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: RESERVED; no_connect. */
  "RESERVED_17": "17",
  /** Physical pin 18: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "18",
  /** Physical pin 19: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "19",
  /** Physical pin 20: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "20",
  /** Physical pin 21: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "21",
  /** Physical pin 22: V_BCKP; power_in. */
  "V_BCKP": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
}) {
  override schema = "RF_GPS:NEO-M8N";
  override referencePrefix = "U";
}

/**
 * GNSS Module NEO 8, VCC 1.65V to 3.6V
 *
 * KiCad symbol: `RF_GPS:NEO-8Q`. Reference prefix: `U`.
 * Footprint filters: ublox*NEO*.
 * @see https://content.u-blox.com/sites/default/files/documents/NEO-8Q_DataSheet_UBX-15031913.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_NEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NEO_8Q extends Component.withPins({
  /** Physical pin 1: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "1",
  /** Physical pin 2: D_SEL; input. */
  "D_SEL": "2",
  /** Physical pin 3: TIMEPULSE; output. */
  "TIMEPULSE": "3",
  /** Physical pin 4: EXTINT; input. */
  "EXTINT": "4",
  /** Physical pin 5: USB_DM; bidirectional. */
  "USB_DM": "5",
  /** Physical pin 6: USB_DP; bidirectional. */
  "USB_DP": "6",
  /** Physical pin 7: VDD_USB; power_in. */
  "VDD_USB": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: VCC_RF; power_out. */
  "VCC_RF": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: LNA_EN; output. */
  "LNA_EN": "14",
  /** Physical pin 15: RESERVED; no_connect. */
  "RESERVED_15": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: RESERVED; no_connect. */
  "RESERVED_17": "17",
  /** Physical pin 18: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "18",
  /** Physical pin 19: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "19",
  /** Physical pin 20: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "20",
  /** Physical pin 21: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "21",
  /** Physical pin 22: V_BCKP; power_in. */
  "V_BCKP": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
}) {
  override schema = "RF_GPS:NEO-8Q";
  override referencePrefix = "U";
}

/**
 * GNSS Module NEO M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:NEO-M8M`. Reference prefix: `U`.
 * Footprint filters: ublox*NEO*.
 * @see https://content.u-blox.com/sites/default/files/NEO-M8-FW3_DataSheet_UBX-15031086.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_NEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NEO_M8M extends Component.withPins({
  /** Physical pin 1: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "1",
  /** Physical pin 2: D_SEL; input. */
  "D_SEL": "2",
  /** Physical pin 3: TIMEPULSE; output. */
  "TIMEPULSE": "3",
  /** Physical pin 4: EXTINT; input. */
  "EXTINT": "4",
  /** Physical pin 5: USB_DM; bidirectional. */
  "USB_DM": "5",
  /** Physical pin 6: USB_DP; bidirectional. */
  "USB_DP": "6",
  /** Physical pin 7: VDD_USB; power_in. */
  "VDD_USB": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: VCC_RF; power_out. */
  "VCC_RF": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: RESERVED; no_connect. */
  "RESERVED_15": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: RESERVED; no_connect. */
  "RESERVED_17": "17",
  /** Physical pin 18: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "18",
  /** Physical pin 19: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "19",
  /** Physical pin 20: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "20",
  /** Physical pin 21: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "21",
  /** Physical pin 22: V_BCKP; power_in. */
  "V_BCKP": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
}) {
  override schema = "RF_GPS:NEO-M8M";
  override referencePrefix = "U";
}

/**
 * GNSS RTK Module NEO M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:NEO-M8P`. Reference prefix: `U`.
 * Footprint filters: ublox*NEO*.
 * @see https://content.u-blox.com/sites/default/files/NEO-M8P_DataSheet_UBX-15016656.pdf
 * Keywords: ublox GPS GNSS RTK module.
 * Default footprint: RF_GPS:ublox_NEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NEO_M8P extends Component.withPins({
  /** Physical pin 1: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "1",
  /** Physical pin 2: D_SEL; input. */
  "D_SEL": "2",
  /** Physical pin 3: TIMEPULSE; output. */
  "TIMEPULSE": "3",
  /** Physical pin 4: EXTINT; input. */
  "EXTINT": "4",
  /** Physical pin 5: USB_DM; bidirectional. */
  "USB_DM": "5",
  /** Physical pin 6: USB_DP; bidirectional. */
  "USB_DP": "6",
  /** Physical pin 7: VDD_USB; power_in. */
  "VDD_USB": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: VCC_RF; power_out. */
  "VCC_RF": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: LNA_EN; output. */
  "LNA_EN": "14",
  /** Physical pin 15: RTK_STAT; output. */
  "RTK_STAT": "15",
  /** Physical pin 16: GEOFENCE_STAT; output. */
  "GEOFENCE_STAT": "16",
  /** Physical pin 17: RESERVED; no_connect. */
  "RESERVED": "17",
  /** Physical pin 18: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "18",
  /** Physical pin 19: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "19",
  /** Physical pin 20: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "20",
  /** Physical pin 21: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "21",
  /** Physical pin 22: V_BCKP; power_in. */
  "V_BCKP": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
}) {
  override schema = "RF_GPS:NEO-M8P";
  override referencePrefix = "U";
}

/**
 * GNSS Module NEO M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:NEO-M8Q`. Reference prefix: `U`.
 * Footprint filters: ublox*NEO*.
 * @see https://content.u-blox.com/sites/default/files/NEO-M8-FW3_DataSheet_UBX-15031086.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_NEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NEO_M8Q extends Component.withPins({
  /** Physical pin 1: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "1",
  /** Physical pin 2: D_SEL; input. */
  "D_SEL": "2",
  /** Physical pin 3: TIMEPULSE; output. */
  "TIMEPULSE": "3",
  /** Physical pin 4: EXTINT; input. */
  "EXTINT": "4",
  /** Physical pin 5: USB_DM; bidirectional. */
  "USB_DM": "5",
  /** Physical pin 6: USB_DP; bidirectional. */
  "USB_DP": "6",
  /** Physical pin 7: VDD_USB; power_in. */
  "VDD_USB": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: VCC_RF; power_out. */
  "VCC_RF": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: LNA_EN; output. */
  "LNA_EN": "14",
  /** Physical pin 15: RESERVED; no_connect. */
  "RESERVED_15": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: RESERVED; no_connect. */
  "RESERVED_17": "17",
  /** Physical pin 18: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "18",
  /** Physical pin 19: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "19",
  /** Physical pin 20: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "20",
  /** Physical pin 21: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "21",
  /** Physical pin 22: V_BCKP; power_in. */
  "V_BCKP": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
}) {
  override schema = "RF_GPS:NEO-M8Q";
  override referencePrefix = "U";
}

/**
 * GNSS Module NEO M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:NEO-M8T`. Reference prefix: `U`.
 * Footprint filters: ublox*NEO*.
 * @see https://content.u-blox.com/sites/default/files/documents/NEO-LEA-M8T-FW3_DataSheet_UBX-15025193.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_NEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NEO_M8T extends Component.withPins({
  /** Physical pin 1: TP2/~{SAFEBOOT}; bidirectional. */
  "TP2/~{SAFEBOOT}": "1",
  /** Physical pin 2: D_SEL; input. */
  "D_SEL": "2",
  /** Physical pin 3: TIMEPULSE; output. */
  "TIMEPULSE": "3",
  /** Physical pin 4: EXTINT0; input. */
  "EXTINT0": "4",
  /** Physical pin 5: USB_DM; bidirectional. */
  "USB_DM": "5",
  /** Physical pin 6: USB_DP; bidirectional. */
  "USB_DP": "6",
  /** Physical pin 7: VDD_USB; power_in. */
  "VDD_USB": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: VCC_RF; power_out. */
  "VCC_RF": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: LNA_EN; output. */
  "LNA_EN": "14",
  /** Physical pin 15: EXTINT1; input. */
  "EXTINT1": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: RESERVED; no_connect. */
  "RESERVED_17": "17",
  /** Physical pin 18: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "18",
  /** Physical pin 19: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "19",
  /** Physical pin 20: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "20",
  /** Physical pin 21: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "21",
  /** Physical pin 22: V_BCKP; power_in. */
  "V_BCKP": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
}) {
  override schema = "RF_GPS:NEO-M8T";
  override referencePrefix = "U";
}

/**
 * GNSS Module NEO M8, VCC 2.7V to 3.6V
 *
 * KiCad symbol: `RF_GPS:NEO-M9N`. Reference prefix: `U`.
 * Footprint filters: ublox*NEO*.
 * @see https://www.u-blox.com/sites/default/files/NEO-M9N-00B_DataSheet_UBX-19014285.pdf
 * Keywords: ublox GPS GNSS module.
 * Default footprint: RF_GPS:ublox_NEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NEO_M9N extends Component.withPins({
  /** Physical pin 1: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "1",
  /** Physical pin 2: D_SEL; input. */
  "D_SEL": "2",
  /** Physical pin 3: TIMEPULSE; output. */
  "TIMEPULSE": "3",
  /** Physical pin 4: EXTINT; input. */
  "EXTINT": "4",
  /** Physical pin 5: USB_DM; bidirectional. */
  "USB_DM": "5",
  /** Physical pin 6: USB_DP; bidirectional. */
  "USB_DP": "6",
  /** Physical pin 7: VDD_USB; power_in. */
  "VDD_USB": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: VCC_RF; power_out. */
  "VCC_RF": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: LNA_EN; output. */
  "LNA_EN": "14",
  /** Physical pin 15: RESERVED; no_connect. */
  "RESERVED_15": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: RESERVED; no_connect. */
  "RESERVED_17": "17",
  /** Physical pin 18: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "18",
  /** Physical pin 19: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "19",
  /** Physical pin 20: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "20",
  /** Physical pin 21: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "21",
  /** Physical pin 22: V_BCKP; power_in. */
  "V_BCKP": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
}) {
  override schema = "RF_GPS:NEO-M9N";
  override referencePrefix = "U";
}

/**
 * Module GPS Low Power, 14mA tracking, 22 channels
 *
 * KiCad symbol: `RF_GPS:RXM-GPS-RM`. Reference prefix: `U`.
 * Footprint filters: Linx*RXM?GPS*.
 * @see https://linxtechnologies.com/wp/wp-content/uploads/rxm-gps-rm.pdf
 * Keywords: gps low-power.
 * Default footprint: RF_GPS:Linx_RXM-GPS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RXM_GPS_RM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: 1PPS; output. */
  "1PPS": "3",
  /** Physical pin 4: TX; output. */
  "TX": "4",
  /** Physical pin 5: RX; input. */
  "RX": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VBCKUP; power_in. */
  "VBCKUP": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: RFIN; input. */
  "RFIN": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
}) {
  override schema = "RF_GPS:RXM-GPS-RM";
  override referencePrefix = "U";
}

/**
 * Module GPS Low Power, 14mA tracking, 22 channels
 *
 * KiCad symbol: `RF_GPS:RXM-GPS-FM`. Reference prefix: `U`.
 * Footprint filters: Linx*RXM?GPS*.
 * @see https://linxtechnologies.com/wp/wp-content/uploads/rxm-gps-fm.pdf
 * Keywords: gps low-power.
 * Default footprint: RF_GPS:Linx_RXM-GPS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RXM_GPS_FM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: 1PPS; output. */
  "1PPS": "3",
  /** Physical pin 4: TX; output. */
  "TX": "4",
  /** Physical pin 5: RX; input. */
  "RX": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: ~{RESET}; input. */
  "~{RESET}": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VBCKUP; power_in. */
  "VBCKUP": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: RFIN; input. */
  "RFIN": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
}) {
  override schema = "RF_GPS:RXM-GPS-FM";
  override referencePrefix = "U";
}

/**
 * GPS ublox M8 variant
 *
 * KiCad symbol: `RF_GPS:SAM-M8Q`. Reference prefix: `U`.
 * Footprint filters: ublox*SAM?M8Q*.
 * @see https://www.u-blox.com/sites/default/files/SAM-M8Q_DataSheet_%28UBX-16012619%29.pdf
 * Keywords: gps module with antenna.
 * Default footprint: RF_GPS:ublox_SAM-M8Q.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SAM_M8Q extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VCC_IO; power_in. */
  "VCC_IO": "2",
  /** Physical pin 3: V_BCKP; power_in. */
  "V_BCKP": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: TIMEPULSE; output. */
  "TIMEPULSE": "7",
  /** Physical pin 8: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: TXD; output. */
  "TXD": "13",
  /** Physical pin 14: RXD; input. */
  "RXD": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VCC; power_in. */
  "VCC": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: EXTINT; input. */
  "EXTINT": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
}) {
  override schema = "RF_GPS:SAM-M8Q";
  override referencePrefix = "U";
}

/**
 * Standalone GPS/A-GPS receiver module, built-in LNA, -165dBm sensitivity, 2.8-4.3V, SMD
 *
 * KiCad symbol: `RF_GPS:SIM28ML`. Reference prefix: `U`.
 * Footprint filters: SIM28ML*.
 * @see https://simcom.ee/documents/SIM28ML/SIM28ML_Hardware%20Design_V1.01.pdf
 * Keywords: GPS A-GPS receiver.
 * Default footprint: RF_GPS:SIM28ML.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SIM28ML extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: TXD0; output. */
  "TXD0": "2",
  /** Physical pin 3: RXD0; input. */
  "RXD0": "3",
  /** Physical pin 4: TIMEMARK; output. */
  "TIMEMARK": "4",
  /** Physical pin 5: EXTINT; input. */
  "EXTINT": "5",
  /** Physical pin 6: V_BACKUP; power_in. */
  "V_BACKUP": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: RF_IN; input. */
  "RF_IN": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: ANTON; power_out. */
  "ANTON": "13",
  /** Physical pin 14: Vcc_RF; power_out. */
  "Vcc_RF": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: TXD1/SDA; bidirectional. */
  "TXD1/SDA": "16",
  /** Physical pin 17: RXD1/SCL; input. */
  "RXD1/SCL": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
}) {
  override schema = "RF_GPS:SIM28ML";
  override referencePrefix = "U";
}

/**
 * GNSS Module ZED F9, VCC 2.7V to 3.6V, LGA-54
 *
 * KiCad symbol: `RF_GPS:ZED-F9P`. Reference prefix: `U`.
 * Footprint filters: ublox*ZED*.
 * @see https://content.u-blox.com/sites/default/files/ZED-F9P-04B_DataSheet_UBX-21044850.pdf
 * Keywords: u-blox GNSS multi-band RTK.
 * Default footprint: RF_GPS:ublox_ZED.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZED_F9P extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: RF_IN; input. */
  "RF_IN": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: ANT_DETECT; input. */
  "ANT_DETECT": "4",
  /** Physical pin 5: ANT_OFF; output. */
  "ANT_OFF": "5",
  /** Physical pin 6: ~{ANT_SHORT}; input. */
  "~{ANT_SHORT}": "6",
  /** Physical pin 7: VCC_RF; power_out. */
  "VCC_RF": "7",
  /** Physical pin 8: Reserved; no_connect. */
  "Reserved_8": "8",
  /** Physical pin 9: Reserved; no_connect. */
  "Reserved_9": "9",
  /** Physical pin 10: Reserved; no_connect. */
  "Reserved_10": "10",
  /** Physical pin 11: Reserved; no_connect. */
  "Reserved_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: Reserved; no_connect. */
  "Reserved_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: Reserved; no_connect. */
  "Reserved_15": "15",
  /** Physical pin 16: Reserved; no_connect. */
  "Reserved_16": "16",
  /** Physical pin 17: Reserved; no_connect. */
  "Reserved_17": "17",
  /** Physical pin 18: Reserved; no_connect. */
  "Reserved_18": "18",
  /** Physical pin 19: GEOFENCE_STAT; output. */
  "GEOFENCE_STAT": "19",
  /** Physical pin 20: RTK_STAT; output. */
  "RTK_STAT": "20",
  /** Physical pin 21: Reserved; no_connect. */
  "Reserved_21": "21",
  /** Physical pin 22: Reserved; no_connect. */
  "Reserved_22": "22",
  /** Physical pin 23: Reserved; no_connect. */
  "Reserved_23": "23",
  /** Physical pin 24: Reserved; no_connect. */
  "Reserved_24": "24",
  /** Physical pin 25: Reserved; no_connect. */
  "Reserved_25": "25",
  /** Physical pin 26: RXD2; input. */
  "RXD2": "26",
  /** Physical pin 27: TXD2; output. */
  "TXD2": "27",
  /** Physical pin 28: Reserved; no_connect. */
  "Reserved_28": "28",
  /** Physical pin 29: Reserved; no_connect. */
  "Reserved_29": "29",
  /** Physical pin 30: Reserved; no_connect. */
  "Reserved_30": "30",
  /** Physical pin 31: Reserved; no_connect. */
  "Reserved_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: VCC; passive. */
  "VCC_33": "33",
  /** Physical pin 34: VCC; power_in. */
  "VCC_34": "34",
  /** Physical pin 35: Reserved; no_connect. */
  "Reserved_35": "35",
  /** Physical pin 36: V_BCKP; power_in. */
  "V_BCKP": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: V_USB; power_in. */
  "V_USB": "38",
  /** Physical pin 39: USB_DM; bidirectional. */
  "USB_DM": "39",
  /** Physical pin 40: USB_DP; bidirectional. */
  "USB_DP": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "42",
  /** Physical pin 43: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "43",
  /** Physical pin 44: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "44",
  /** Physical pin 45: SCL/SPI_CLK; bidirectional. */
  "SCL/SPI_CLK": "45",
  /** Physical pin 46: TX_READY; output. */
  "TX_READY": "46",
  /** Physical pin 47: D_SEL; input. */
  "D_SEL": "47",
  /** Physical pin 48: GND; power_in. */
  "GND_48": "48",
  /** Physical pin 49: ~{RESET}; input. */
  "~{RESET}": "49",
  /** Physical pin 50: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "50",
  /** Physical pin 51: EXTINT; input. */
  "EXTINT": "51",
  /** Physical pin 52: Reserved; no_connect. */
  "Reserved_52": "52",
  /** Physical pin 53: TIMEPULSE; output. */
  "TIMEPULSE": "53",
  /** Physical pin 54: Reserved; no_connect. */
  "Reserved_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
}) {
  override schema = "RF_GPS:ZED-F9P";
  override referencePrefix = "U";
}

/**
 * ultra small GNSS  module IC, SiP
 *
 * KiCad symbol: `RF_GPS:ZOE-M8G`. Reference prefix: `U`.
 * Footprint filters: ublox*ZOE*M8*.
 * @see https://content.u-blox.com/sites/default/files/ZOE-M8_HIM_UBX-16030136.pdf
 * Keywords: ublox gnss sip.
 * Default footprint: RF_GPS:ublox_ZOE_M8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZOE_M8G extends Component.withPins({
  /** Physical pin A1: GND; power_in. */
  "GND_A1": "A1",
  /** Physical pin A2: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "A2",
  /** Physical pin A3: GND; passive. */
  "GND_A3": "A3",
  /** Physical pin A4: RF_IN; input. */
  "RF_IN": "A4",
  /** Physical pin A5: GND; passive. */
  "GND_A5": "A5",
  /** Physical pin A6: Reserved; no_connect. */
  "Reserved_A6": "A6",
  /** Physical pin A7: GND; passive. */
  "GND_A7": "A7",
  /** Physical pin A8: GND; passive. */
  "GND_A8": "A8",
  /** Physical pin A9: GND; passive. */
  "GND_A9": "A9",
  /** Physical pin B1: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "B1",
  /** Physical pin B9: GND; passive. */
  "GND_B9": "B9",
  /** Physical pin C1: SQI_D1; input. */
  "SQI_D1": "C1",
  /** Physical pin C3: TIMEPULSE; output. */
  "TIMEPULSE": "C3",
  /** Physical pin C4: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "C4",
  /** Physical pin C5: LNA_EN; output. */
  "LNA_EN": "C5",
  /** Physical pin C6: PIO15; bidirectional. */
  "PIO15": "C6",
  /** Physical pin C7: GND; passive. */
  "GND_C7": "C7",
  /** Physical pin C9: GND; passive. */
  "GND_C9": "C9",
  /** Physical pin D1: SQI_D0; bidirectional. */
  "SQI_D0": "D1",
  /** Physical pin D3: ~{SQI_CS}; bidirectional. */
  "~{SQI_CS}": "D3",
  /** Physical pin D4: D_SEL; input. */
  "D_SEL": "D4",
  /** Physical pin D6: GND; passive. */
  "GND_D6": "D6",
  /** Physical pin D9: GND; passive. */
  "GND_D9": "D9",
  /** Physical pin E1: SQI_CLK; bidirectional. */
  "SQI_CLK": "E1",
  /** Physical pin E3: SQI_D2; bidirectional. */
  "SQI_D2": "E3",
  /** Physical pin E7: GND; passive. */
  "GND_E7": "E7",
  /** Physical pin E9: Reserved; no_connect. */
  "Reserved_E9": "E9",
  /** Physical pin F1: Reserved; no_connect. */
  "Reserved_F1": "F1",
  /** Physical pin F3: SQI_D3; bidirectional. */
  "SQI_D3": "F3",
  /** Physical pin F4: Reserved; no_connect. */
  "Reserved_F4": "F4",
  /** Physical pin F6: PIO14; bidirectional. */
  "PIO14": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin F9: Reserved; no_connect. */
  "Reserved_F9": "F9",
  /** Physical pin G1: VCC; power_in. */
  "VCC_G1": "G1",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: PIO13/EXTINT; input. */
  "PIO13/EXTINT": "G4",
  /** Physical pin G5: Reserved; no_connect. */
  "Reserved_G5": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: GND; passive. */
  "GND_G7": "G7",
  /** Physical pin G9: Reserved; no_connect. */
  "Reserved_G9": "G9",
  /** Physical pin H1: VCC; power_in. */
  "VCC_H1": "H1",
  /** Physical pin H9: V_BCKP; power_in. */
  "V_BCKP": "H9",
  /** Physical pin J1: VCC; power_in. */
  "VCC_J1": "J1",
  /** Physical pin J2: VCC; passive. */
  "VCC_J2": "J2",
  /** Physical pin J3: GND; passive. */
  "GND_J3": "J3",
  /** Physical pin J4: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "J4",
  /** Physical pin J5: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "J5",
  /** Physical pin J6: ~{RESET}; input. */
  "~{RESET}": "J6",
  /** Physical pin J7: RTC_I; input. */
  "RTC_I": "J7",
  /** Physical pin J8: RTC_O; output. */
  "RTC_O": "J8",
  /** Physical pin J9: GND; passive. */
  "GND_J9": "J9",
}) {
  override schema = "RF_GPS:ZOE-M8G";
  override referencePrefix = "U";
}

/**
 * ultra small GNSS  module IC, SiP
 *
 * KiCad symbol: `RF_GPS:ZOE-M8Q`. Reference prefix: `U`.
 * Footprint filters: ublox*ZOE*M8*.
 * @see https://content.u-blox.com/sites/default/files/ZOE-M8_HIM_UBX-16030136.pdf
 * Keywords: ublox gnss sip.
 * Default footprint: RF_GPS:ublox_ZOE_M8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZOE_M8Q extends Component.withPins({
  /** Physical pin A1: GND; power_in. */
  "GND_A1": "A1",
  /** Physical pin A2: SDA/~{SPI_CS}; bidirectional. */
  "SDA/~{SPI_CS}": "A2",
  /** Physical pin A3: GND; passive. */
  "GND_A3": "A3",
  /** Physical pin A4: RF_IN; input. */
  "RF_IN": "A4",
  /** Physical pin A5: GND; passive. */
  "GND_A5": "A5",
  /** Physical pin A6: Reserved; no_connect. */
  "Reserved_A6": "A6",
  /** Physical pin A7: GND; passive. */
  "GND_A7": "A7",
  /** Physical pin A8: GND; passive. */
  "GND_A8": "A8",
  /** Physical pin A9: GND; passive. */
  "GND_A9": "A9",
  /** Physical pin B1: SCL/SPI_CLK; input. */
  "SCL/SPI_CLK": "B1",
  /** Physical pin B9: GND; passive. */
  "GND_B9": "B9",
  /** Physical pin C1: SQI_D1; input. */
  "SQI_D1": "C1",
  /** Physical pin C3: TIMEPULSE; output. */
  "TIMEPULSE": "C3",
  /** Physical pin C4: ~{SAFEBOOT}; input. */
  "~{SAFEBOOT}": "C4",
  /** Physical pin C5: LNA_EN; output. */
  "LNA_EN": "C5",
  /** Physical pin C6: PIO15; bidirectional. */
  "PIO15": "C6",
  /** Physical pin C7: GND; passive. */
  "GND_C7": "C7",
  /** Physical pin C9: GND; passive. */
  "GND_C9": "C9",
  /** Physical pin D1: SQI_D0; bidirectional. */
  "SQI_D0": "D1",
  /** Physical pin D3: ~{SQI_CS}; bidirectional. */
  "~{SQI_CS}": "D3",
  /** Physical pin D4: D_SEL; input. */
  "D_SEL": "D4",
  /** Physical pin D6: GND; passive. */
  "GND_D6": "D6",
  /** Physical pin D9: GND; passive. */
  "GND_D9": "D9",
  /** Physical pin E1: SQI_CLK; bidirectional. */
  "SQI_CLK": "E1",
  /** Physical pin E3: SQI_D2; bidirectional. */
  "SQI_D2": "E3",
  /** Physical pin E7: GND; passive. */
  "GND_E7": "E7",
  /** Physical pin E9: Reserved; no_connect. */
  "Reserved_E9": "E9",
  /** Physical pin F1: Reserved; no_connect. */
  "Reserved_F1": "F1",
  /** Physical pin F3: SQI_D3; bidirectional. */
  "SQI_D3": "F3",
  /** Physical pin F4: Reserved; no_connect. */
  "Reserved_F4": "F4",
  /** Physical pin F6: PIO14; bidirectional. */
  "PIO14": "F6",
  /** Physical pin F7: GND; passive. */
  "GND_F7": "F7",
  /** Physical pin F9: Reserved; no_connect. */
  "Reserved_F9": "F9",
  /** Physical pin G1: V_CORE; power_in. */
  "V_CORE": "G1",
  /** Physical pin G3: GND; passive. */
  "GND_G3": "G3",
  /** Physical pin G4: PIO13/EXTINT; input. */
  "PIO13/EXTINT": "G4",
  /** Physical pin G5: Reserved; no_connect. */
  "Reserved_G5": "G5",
  /** Physical pin G6: GND; passive. */
  "GND_G6": "G6",
  /** Physical pin G7: GND; passive. */
  "GND_G7": "G7",
  /** Physical pin G9: Reserved; no_connect. */
  "Reserved_G9": "G9",
  /** Physical pin H1: V_DCDC_OUT; power_out. */
  "V_DCDC_OUT": "H1",
  /** Physical pin H9: V_BCKP; power_in. */
  "V_BCKP": "H9",
  /** Physical pin J1: VCC; power_in. */
  "VCC_J1": "J1",
  /** Physical pin J2: VCC; passive. */
  "VCC_J2": "J2",
  /** Physical pin J3: GND; passive. */
  "GND_J3": "J3",
  /** Physical pin J4: RXD/SPI_MOSI; input. */
  "RXD/SPI_MOSI": "J4",
  /** Physical pin J5: TXD/SPI_MISO; output. */
  "TXD/SPI_MISO": "J5",
  /** Physical pin J6: ~{RESET}; input. */
  "~{RESET}": "J6",
  /** Physical pin J7: RTC_I; input. */
  "RTC_I": "J7",
  /** Physical pin J8: RTC_O; output. */
  "RTC_O": "J8",
  /** Physical pin J9: GND; passive. */
  "GND_J9": "J9",
}) {
  override schema = "RF_GPS:ZOE-M8Q";
  override referencePrefix = "U";
}

