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
 */
export class L70_R extends Component.withPins({
  "GND_1": "1",
  "TXD1": "2",
  "RXD1": "3",
  "1PPS": "4",
  "STANDBY": "5",
  "V_BCKP": "6",
  "NC_7": "7",
  "VCC": "8",
  "~{RESET}": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "ANTON": "13",
  "VCC_RF": "14",
  "NC_15": "15",
  "RESERVED_16": "16",
  "RESERVED_17": "17",
  "RESERVED_18": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", TXD1: "output", RXD1: "input", "1PPS": "output", STANDBY: "input", V_BCKP: "power_in", NC_7: "no_connect", VCC: "power_in", "~{RESET}": "input", GND_10: "passive", RF_IN: "input", GND_12: "passive", ANTON: "output", VCC_RF: "power_out", NC_15: "no_connect", RESERVED_16: "passive", RESERVED_17: "passive", RESERVED_18: "passive", ...opts.pinTypes } });
  }
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
 */
export class L80_R extends Component.withPins({
  "RXD1": "1",
  "TXD1": "2",
  "GND_3": "3",
  "VCC": "4",
  "V_BCKP": "5",
  "1PPS": "6",
  "RESERVED_7": "7",
  "RESERVED_8": "8",
  "NC": "9",
  "~{RESET}": "10",
  "RESERVED_11": "11",
  "GND_12": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD1: "input", TXD1: "output", GND_3: "power_in", VCC: "power_in", V_BCKP: "power_in", "1PPS": "output", RESERVED_7: "passive", RESERVED_8: "passive", NC: "no_connect", "~{RESET}": "input", RESERVED_11: "passive", GND_12: "passive", ...opts.pinTypes } });
  }
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
 */
export class LEA_M8F extends Component.withPins({
  "SDA2/~{SPI_CS}": "1",
  "SCL2/SPI_CLK": "2",
  "TxD1/SPI_MISO": "3",
  "RxD1/SPI_MOSI": "4",
  "D_SEL": "5",
  "VCC": "6",
  "GND_7": "7",
  "VCC_OUT": "8",
  "REF_FREQ_OUT": "9",
  "~{RESET}": "10",
  "V_BCKP": "11",
  "~{SAFEBOOT}": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GND_15": "15",
  "RF_IN": "16",
  "GND_17": "17",
  "VCC_RF": "18",
  "V_ANT": "19",
  "RESERVED": "20",
  "FREQ_PHASE_IN1": "21",
  "SDA_DAC": "22",
  "SCL_DAC": "23",
  "VDD_USB": "24",
  "USB_DM": "25",
  "USB_DP": "26",
  "FREQ_PHASE_IN0": "27",
  "TIMEPULSE/TP2/~{SAFEBOOT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA2/~{SPI_CS}": "bidirectional", "SCL2/SPI_CLK": "input", "TxD1/SPI_MISO": "output", "RxD1/SPI_MOSI": "input", D_SEL: "input", VCC: "power_in", GND_7: "power_in", VCC_OUT: "power_out", REF_FREQ_OUT: "output", "~{RESET}": "input", V_BCKP: "power_in", "~{SAFEBOOT}": "input", GND_13: "passive", GND_14: "passive", GND_15: "passive", RF_IN: "input", GND_17: "passive", VCC_RF: "power_out", V_ANT: "power_in", RESERVED: "no_connect", FREQ_PHASE_IN1: "input", SDA_DAC: "bidirectional", SCL_DAC: "output", VDD_USB: "power_in", USB_DM: "bidirectional", USB_DP: "bidirectional", FREQ_PHASE_IN0: "input", "TIMEPULSE/TP2/~{SAFEBOOT}": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LEA_M8S extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "TXD": "3",
  "RXD": "4",
  "RESERVED_5": "5",
  "VCC": "6",
  "GND_7": "7",
  "VCC_OUT": "8",
  "RESERVED_9": "9",
  "~{RESET}": "10",
  "V_BCKP": "11",
  "~{SAFEBOOT}": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GND_15": "15",
  "RF_IN": "16",
  "GND_17": "17",
  "VCC_RF": "18",
  "V_ANT": "19",
  "EXTINT1": "20",
  "RESERVED_21": "21",
  "RESERVED_22": "22",
  "RESERVED_23": "23",
  "VDD_USB": "24",
  "USB_DM": "25",
  "USB_DP": "26",
  "EXTINT0": "27",
  "TIMEPULSE": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", TXD: "output", RXD: "input", RESERVED_5: "no_connect", VCC: "power_in", GND_7: "power_in", VCC_OUT: "power_out", RESERVED_9: "no_connect", "~{RESET}": "input", V_BCKP: "power_in", "~{SAFEBOOT}": "input", GND_13: "passive", GND_14: "passive", GND_15: "passive", RF_IN: "input", GND_17: "passive", VCC_RF: "power_out", V_ANT: "power_in", EXTINT1: "input", RESERVED_21: "no_connect", RESERVED_22: "no_connect", RESERVED_23: "no_connect", VDD_USB: "power_in", USB_DM: "bidirectional", USB_DP: "bidirectional", EXTINT0: "input", TIMEPULSE: "output", ...opts.pinTypes } });
  }
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
 */
export class LEA_M8T extends Component.withPins({
  "SDA/~{SPI_CS}": "1",
  "SCL/SPI_CLK": "2",
  "TXD/SPI_MISO": "3",
  "RXD/SPI_MOSI": "4",
  "D_SEL": "5",
  "VCC": "6",
  "GND_7": "7",
  "VCC_OUT": "8",
  "RESERVED_9": "9",
  "~{RESET}": "10",
  "V_BCKP": "11",
  "TP2/~{SAFEBOOT}": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GND_15": "15",
  "RF_IN": "16",
  "GND_17": "17",
  "VCC_RF": "18",
  "V_ANT": "19",
  "EXTINT1": "20",
  "RESERVED_21": "21",
  "RESERVED_22": "22",
  "RESERVED_23": "23",
  "VDD_USB": "24",
  "USB_DM": "25",
  "USB_DP": "26",
  "EXTINT0": "27",
  "TIMEPULSE": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "input", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", D_SEL: "input", VCC: "power_in", GND_7: "power_in", VCC_OUT: "power_out", RESERVED_9: "no_connect", "~{RESET}": "input", V_BCKP: "power_in", "TP2/~{SAFEBOOT}": "bidirectional", GND_13: "passive", GND_14: "passive", GND_15: "passive", RF_IN: "input", GND_17: "passive", VCC_RF: "power_out", V_ANT: "power_in", EXTINT1: "input", RESERVED_21: "no_connect", RESERVED_22: "no_connect", RESERVED_23: "no_connect", VDD_USB: "power_in", USB_DM: "bidirectional", USB_DP: "bidirectional", EXTINT0: "input", TIMEPULSE: "output", ...opts.pinTypes } });
  }
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
 */
export class MAX_8C extends Component.withPins({
  "GND_1": "1",
  "TXD": "2",
  "RXD": "3",
  "TIMEPULSE": "4",
  "EXTINT": "5",
  "V_BCKP": "6",
  "VCC_IO": "7",
  "VCC": "8",
  "~{RESET}": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "LNA_EN": "13",
  "VCC_RF": "14",
  "Reserved": "15",
  "SDA": "16",
  "SCL": "17",
  "~{SAFEBOOT}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", TXD: "output", RXD: "input", TIMEPULSE: "output", EXTINT: "input", V_BCKP: "power_in", VCC_IO: "power_in", VCC: "power_in", "~{RESET}": "input", GND_10: "passive", RF_IN: "input", GND_12: "passive", LNA_EN: "output", VCC_RF: "power_out", Reserved: "no_connect", SDA: "bidirectional", SCL: "input", "~{SAFEBOOT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX_8Q extends Component.withPins({
  "GND_1": "1",
  "TXD": "2",
  "RXD": "3",
  "TIMEPULSE": "4",
  "EXTINT": "5",
  "V_BCKP": "6",
  "VCC_IO": "7",
  "VCC": "8",
  "~{RESET}": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "LNA_EN": "13",
  "VCC_RF": "14",
  "Reserved": "15",
  "SDA": "16",
  "SCL": "17",
  "~{SAFEBOOT}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", TXD: "output", RXD: "input", TIMEPULSE: "output", EXTINT: "input", V_BCKP: "power_in", VCC_IO: "power_in", VCC: "power_in", "~{RESET}": "input", GND_10: "passive", RF_IN: "input", GND_12: "passive", LNA_EN: "output", VCC_RF: "power_out", Reserved: "no_connect", SDA: "bidirectional", SCL: "input", "~{SAFEBOOT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX_M10S extends Component.withPins({
  "GND_1": "1",
  "TXD": "2",
  "RXD": "3",
  "TIMEPULSE": "4",
  "EXTINT": "5",
  "V_BCKP": "6",
  "VCC_IO": "7",
  "VCC": "8",
  "~{RESET}": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "LNA_EN": "13",
  "VCC_RF": "14",
  "VIO_SEL": "15",
  "SDA": "16",
  "SCL": "17",
  "~{SAFEBOOT}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", TXD: "output", RXD: "input", TIMEPULSE: "output", EXTINT: "input", V_BCKP: "power_in", VCC_IO: "power_in", VCC: "power_in", "~{RESET}": "input", GND_10: "passive", RF_IN: "input", GND_12: "passive", LNA_EN: "output", VCC_RF: "power_out", VIO_SEL: "input", SDA: "bidirectional", SCL: "input", "~{SAFEBOOT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX_M8C extends Component.withPins({
  "GND_1": "1",
  "TXD": "2",
  "RXD": "3",
  "TIMEPULSE": "4",
  "EXTINT": "5",
  "V_BCKP": "6",
  "VCC_IO": "7",
  "VCC": "8",
  "~{RESET}": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "LNA_EN": "13",
  "VCC_RF": "14",
  "Reserved": "15",
  "SDA": "16",
  "SCL": "17",
  "~{SAFEBOOT}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", TXD: "output", RXD: "input", TIMEPULSE: "output", EXTINT: "input", V_BCKP: "power_in", VCC_IO: "power_in", VCC: "power_in", "~{RESET}": "input", GND_10: "passive", RF_IN: "input", GND_12: "passive", LNA_EN: "output", VCC_RF: "power_out", Reserved: "no_connect", SDA: "bidirectional", SCL: "input", "~{SAFEBOOT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX_M8Q extends Component.withPins({
  "GND_1": "1",
  "TXD": "2",
  "RXD": "3",
  "TIMEPULSE": "4",
  "EXTINT": "5",
  "V_BCKP": "6",
  "VCC_IO": "7",
  "VCC": "8",
  "~{RESET}": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "LNA_EN": "13",
  "VCC_RF": "14",
  "Reserved": "15",
  "SDA": "16",
  "SCL": "17",
  "~{SAFEBOOT}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", TXD: "output", RXD: "input", TIMEPULSE: "output", EXTINT: "input", V_BCKP: "power_in", VCC_IO: "power_in", VCC: "power_in", "~{RESET}": "input", GND_10: "passive", RF_IN: "input", GND_12: "passive", LNA_EN: "output", VCC_RF: "power_out", Reserved: "no_connect", SDA: "bidirectional", SCL: "input", "~{SAFEBOOT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAX_M8W extends Component.withPins({
  "GND_1": "1",
  "TXD": "2",
  "RXD": "3",
  "TIMEPULSE": "4",
  "EXTINT": "5",
  "V_BCKP": "6",
  "VCC_IO": "7",
  "VCC": "8",
  "~{RESET}": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "Reserved": "13",
  "VCC_RF": "14",
  "V_ANT": "15",
  "SDA": "16",
  "SCL": "17",
  "~{SAFEBOOT}": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", TXD: "output", RXD: "input", TIMEPULSE: "output", EXTINT: "input", V_BCKP: "power_in", VCC_IO: "power_in", VCC: "power_in", "~{RESET}": "input", GND_10: "passive", RF_IN: "input", GND_12: "passive", Reserved: "no_connect", VCC_RF: "power_out", V_ANT: "power_in", SDA: "bidirectional", SCL: "input", "~{SAFEBOOT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MIA_M10Q extends Component.withPins({
  "GND_A1": "A1",
  "GND_A2": "A2",
  "GND_A3": "A3",
  "RTC_I": "A4",
  "RTC_O": "A5",
  "EXTINT": "A6",
  "TIMEPULSE": "A7",
  "GND_A8": "A8",
  "GND_A9": "A9",
  "VCC": "B1",
  "GND_B2": "B2",
  "GND_B8": "B8",
  "RF_IN": "B9",
  "Reserved_C1": "C1",
  "GND_C3": "C3",
  "~{RESET}": "C4",
  "Reserved_C5": "C5",
  "VCC_RF": "C6",
  "~{SAFEBOOT}": "C7",
  "GND_C9": "C9",
  "SDA": "D1",
  "Reserved_D2": "D2",
  "Reserved_D9": "D9",
  "SCL": "E1",
  "Reserved_E2": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "Reserved_E7": "E7",
  "GND_E9": "E9",
  "GND_F1": "F1",
  "GND_F3": "F3",
  "GND_F4": "F4",
  "PIO6": "F7",
  "Reserved_F9": "F9",
  "TX": "G1",
  "GND_G3": "G3",
  "GND_G4": "G4",
  "GND_G5": "G5",
  "GND_G6": "G6",
  "Reserved_G7": "G7",
  "Reserved_G9": "G9",
  "RX": "H1",
  "GND_H8": "H8",
  "LNA_EN": "H9",
  "Reserved_J1": "J1",
  "Reserved_J2": "J2",
  "Reserved_J3": "J3",
  "V_IO": "J4",
  "V_BCKP": "J5",
  "VIO_SEL": "J6",
  "Reserved_J7": "J7",
  "GND_J8": "J8",
  "GND_J9": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_A1: "power_in", GND_A2: "passive", GND_A3: "passive", RTC_I: "input", RTC_O: "output", EXTINT: "bidirectional", TIMEPULSE: "output", GND_A8: "passive", GND_A9: "passive", VCC: "power_in", GND_B2: "passive", GND_B8: "passive", RF_IN: "input", Reserved_C1: "no_connect", GND_C3: "passive", "~{RESET}": "input", Reserved_C5: "no_connect", VCC_RF: "power_out", "~{SAFEBOOT}": "input", GND_C9: "passive", SDA: "bidirectional", Reserved_D2: "passive", Reserved_D9: "no_connect", SCL: "input", Reserved_E2: "passive", GND_E3: "passive", GND_E4: "passive", Reserved_E7: "no_connect", GND_E9: "passive", GND_F1: "passive", GND_F3: "passive", GND_F4: "passive", PIO6: "bidirectional", Reserved_F9: "passive", TX: "output", GND_G3: "passive", GND_G4: "passive", GND_G5: "passive", GND_G6: "passive", Reserved_G7: "passive", Reserved_G9: "no_connect", RX: "input", GND_H8: "passive", LNA_EN: "output", Reserved_J1: "no_connect", Reserved_J2: "no_connect", Reserved_J3: "no_connect", V_IO: "power_in", V_BCKP: "power_in", VIO_SEL: "input", Reserved_J7: "no_connect", GND_J8: "passive", GND_J9: "passive", ...opts.pinTypes } });
  }
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
 */
export class NEO_M8N extends Component.withPins({
  "~{SAFEBOOT}": "1",
  "D_SEL": "2",
  "TIMEPULSE": "3",
  "EXTINT": "4",
  "USB_DM": "5",
  "USB_DP": "6",
  "VDD_USB": "7",
  "~{RESET}": "8",
  "VCC_RF": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "GND_13": "13",
  "LNA_EN": "14",
  "RESERVED_15": "15",
  "RESERVED_16": "16",
  "RESERVED_17": "17",
  "SDA/~{SPI_CS}": "18",
  "SCL/SPI_CLK": "19",
  "TXD/SPI_MISO": "20",
  "RXD/SPI_MOSI": "21",
  "V_BCKP": "22",
  "VCC": "23",
  "GND_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SAFEBOOT}": "input", D_SEL: "input", TIMEPULSE: "output", EXTINT: "input", USB_DM: "bidirectional", USB_DP: "bidirectional", VDD_USB: "power_in", "~{RESET}": "input", VCC_RF: "power_out", GND_10: "power_in", RF_IN: "input", GND_12: "passive", GND_13: "passive", LNA_EN: "output", RESERVED_15: "no_connect", RESERVED_16: "no_connect", RESERVED_17: "no_connect", "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "input", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", V_BCKP: "power_in", VCC: "power_in", GND_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class NEO_8Q extends Component.withPins({
  "~{SAFEBOOT}": "1",
  "D_SEL": "2",
  "TIMEPULSE": "3",
  "EXTINT": "4",
  "USB_DM": "5",
  "USB_DP": "6",
  "VDD_USB": "7",
  "~{RESET}": "8",
  "VCC_RF": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "GND_13": "13",
  "LNA_EN": "14",
  "RESERVED_15": "15",
  "RESERVED_16": "16",
  "RESERVED_17": "17",
  "SDA/~{SPI_CS}": "18",
  "SCL/SPI_CLK": "19",
  "TXD/SPI_MISO": "20",
  "RXD/SPI_MOSI": "21",
  "V_BCKP": "22",
  "VCC": "23",
  "GND_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SAFEBOOT}": "input", D_SEL: "input", TIMEPULSE: "output", EXTINT: "input", USB_DM: "bidirectional", USB_DP: "bidirectional", VDD_USB: "power_in", "~{RESET}": "input", VCC_RF: "power_out", GND_10: "power_in", RF_IN: "input", GND_12: "passive", GND_13: "passive", LNA_EN: "output", RESERVED_15: "no_connect", RESERVED_16: "no_connect", RESERVED_17: "no_connect", "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "input", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", V_BCKP: "power_in", VCC: "power_in", GND_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class NEO_M8M extends Component.withPins({
  "~{SAFEBOOT}": "1",
  "D_SEL": "2",
  "TIMEPULSE": "3",
  "EXTINT": "4",
  "USB_DM": "5",
  "USB_DP": "6",
  "VDD_USB": "7",
  "~{RESET}": "8",
  "VCC_RF": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "GND_13": "13",
  "RESERVED_14": "14",
  "RESERVED_15": "15",
  "RESERVED_16": "16",
  "RESERVED_17": "17",
  "SDA/~{SPI_CS}": "18",
  "SCL/SPI_CLK": "19",
  "TXD/SPI_MISO": "20",
  "RXD/SPI_MOSI": "21",
  "V_BCKP": "22",
  "VCC": "23",
  "GND_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SAFEBOOT}": "input", D_SEL: "input", TIMEPULSE: "output", EXTINT: "input", USB_DM: "bidirectional", USB_DP: "bidirectional", VDD_USB: "power_in", "~{RESET}": "input", VCC_RF: "power_out", GND_10: "power_in", RF_IN: "input", GND_12: "passive", GND_13: "passive", RESERVED_14: "no_connect", RESERVED_15: "no_connect", RESERVED_16: "no_connect", RESERVED_17: "no_connect", "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "input", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", V_BCKP: "power_in", VCC: "power_in", GND_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class NEO_M8P extends Component.withPins({
  "~{SAFEBOOT}": "1",
  "D_SEL": "2",
  "TIMEPULSE": "3",
  "EXTINT": "4",
  "USB_DM": "5",
  "USB_DP": "6",
  "VDD_USB": "7",
  "~{RESET}": "8",
  "VCC_RF": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "GND_13": "13",
  "LNA_EN": "14",
  "RTK_STAT": "15",
  "GEOFENCE_STAT": "16",
  "RESERVED": "17",
  "SDA/~{SPI_CS}": "18",
  "SCL/SPI_CLK": "19",
  "TXD/SPI_MISO": "20",
  "RXD/SPI_MOSI": "21",
  "V_BCKP": "22",
  "VCC": "23",
  "GND_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SAFEBOOT}": "input", D_SEL: "input", TIMEPULSE: "output", EXTINT: "input", USB_DM: "bidirectional", USB_DP: "bidirectional", VDD_USB: "power_in", "~{RESET}": "input", VCC_RF: "power_out", GND_10: "power_in", RF_IN: "input", GND_12: "passive", GND_13: "passive", LNA_EN: "output", RTK_STAT: "output", GEOFENCE_STAT: "output", RESERVED: "no_connect", "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "input", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", V_BCKP: "power_in", VCC: "power_in", GND_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class NEO_M8Q extends Component.withPins({
  "~{SAFEBOOT}": "1",
  "D_SEL": "2",
  "TIMEPULSE": "3",
  "EXTINT": "4",
  "USB_DM": "5",
  "USB_DP": "6",
  "VDD_USB": "7",
  "~{RESET}": "8",
  "VCC_RF": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "GND_13": "13",
  "LNA_EN": "14",
  "RESERVED_15": "15",
  "RESERVED_16": "16",
  "RESERVED_17": "17",
  "SDA/~{SPI_CS}": "18",
  "SCL/SPI_CLK": "19",
  "TXD/SPI_MISO": "20",
  "RXD/SPI_MOSI": "21",
  "V_BCKP": "22",
  "VCC": "23",
  "GND_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SAFEBOOT}": "input", D_SEL: "input", TIMEPULSE: "output", EXTINT: "input", USB_DM: "bidirectional", USB_DP: "bidirectional", VDD_USB: "power_in", "~{RESET}": "input", VCC_RF: "power_out", GND_10: "power_in", RF_IN: "input", GND_12: "passive", GND_13: "passive", LNA_EN: "output", RESERVED_15: "no_connect", RESERVED_16: "no_connect", RESERVED_17: "no_connect", "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "input", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", V_BCKP: "power_in", VCC: "power_in", GND_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class NEO_M8T extends Component.withPins({
  "TP2/~{SAFEBOOT}": "1",
  "D_SEL": "2",
  "TIMEPULSE": "3",
  "EXTINT0": "4",
  "USB_DM": "5",
  "USB_DP": "6",
  "VDD_USB": "7",
  "~{RESET}": "8",
  "VCC_RF": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "GND_13": "13",
  "LNA_EN": "14",
  "EXTINT1": "15",
  "RESERVED_16": "16",
  "RESERVED_17": "17",
  "SDA/~{SPI_CS}": "18",
  "SCL/SPI_CLK": "19",
  "TXD/SPI_MISO": "20",
  "RXD/SPI_MOSI": "21",
  "V_BCKP": "22",
  "VCC": "23",
  "GND_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TP2/~{SAFEBOOT}": "bidirectional", D_SEL: "input", TIMEPULSE: "output", EXTINT0: "input", USB_DM: "bidirectional", USB_DP: "bidirectional", VDD_USB: "power_in", "~{RESET}": "input", VCC_RF: "power_out", GND_10: "power_in", RF_IN: "input", GND_12: "passive", GND_13: "passive", LNA_EN: "output", EXTINT1: "input", RESERVED_16: "no_connect", RESERVED_17: "no_connect", "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "input", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", V_BCKP: "power_in", VCC: "power_in", GND_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class NEO_M9N extends Component.withPins({
  "~{SAFEBOOT}": "1",
  "D_SEL": "2",
  "TIMEPULSE": "3",
  "EXTINT": "4",
  "USB_DM": "5",
  "USB_DP": "6",
  "VDD_USB": "7",
  "~{RESET}": "8",
  "VCC_RF": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "GND_13": "13",
  "LNA_EN": "14",
  "RESERVED_15": "15",
  "RESERVED_16": "16",
  "RESERVED_17": "17",
  "SDA/~{SPI_CS}": "18",
  "SCL/SPI_CLK": "19",
  "TXD/SPI_MISO": "20",
  "RXD/SPI_MOSI": "21",
  "V_BCKP": "22",
  "VCC": "23",
  "GND_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SAFEBOOT}": "input", D_SEL: "input", TIMEPULSE: "output", EXTINT: "input", USB_DM: "bidirectional", USB_DP: "bidirectional", VDD_USB: "power_in", "~{RESET}": "input", VCC_RF: "power_out", GND_10: "power_in", RF_IN: "input", GND_12: "passive", GND_13: "passive", LNA_EN: "output", RESERVED_15: "no_connect", RESERVED_16: "no_connect", RESERVED_17: "no_connect", "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "input", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", V_BCKP: "power_in", VCC: "power_in", GND_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class RXM_GPS_RM extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "1PPS": "3",
  "TX": "4",
  "RX": "5",
  "NC_6": "6",
  "NC_7": "7",
  "~{RESET}": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VBCKUP": "11",
  "VCC": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "NC_16": "16",
  "GND_18": "18",
  "RFIN": "19",
  "GND_20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", "1PPS": "output", TX: "output", RX: "input", NC_6: "no_connect", NC_7: "no_connect", "~{RESET}": "input", NC_9: "no_connect", NC_10: "no_connect", VBCKUP: "power_in", VCC: "power_in", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", NC_16: "no_connect", GND_18: "power_in", RFIN: "input", GND_20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
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
 */
export class RXM_GPS_FM extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "1PPS": "3",
  "TX": "4",
  "RX": "5",
  "NC_6": "6",
  "NC_7": "7",
  "~{RESET}": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VBCKUP": "11",
  "VCC": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "NC_16": "16",
  "GND_18": "18",
  "RFIN": "19",
  "GND_20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", "1PPS": "output", TX: "output", RX: "input", NC_6: "no_connect", NC_7: "no_connect", "~{RESET}": "input", NC_9: "no_connect", NC_10: "no_connect", VBCKUP: "power_in", VCC: "power_in", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", NC_16: "no_connect", GND_18: "power_in", RFIN: "input", GND_20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
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
 */
export class SAM_M8Q extends Component.withPins({
  "GND_1": "1",
  "VCC_IO": "2",
  "V_BCKP": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "TIMEPULSE": "7",
  "~{SAFEBOOT}": "8",
  "SDA": "9",
  "GND_10": "10",
  "GND_11": "11",
  "SCL": "12",
  "TXD": "13",
  "RXD": "14",
  "GND_15": "15",
  "GND_16": "16",
  "VCC": "17",
  "~{RESET}": "18",
  "EXTINT": "19",
  "GND_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VCC_IO: "power_in", V_BCKP: "power_in", GND_4: "passive", GND_5: "passive", GND_6: "passive", TIMEPULSE: "output", "~{SAFEBOOT}": "input", SDA: "bidirectional", GND_10: "passive", GND_11: "passive", SCL: "input", TXD: "output", RXD: "input", GND_15: "passive", GND_16: "passive", VCC: "power_in", "~{RESET}": "input", EXTINT: "input", GND_20: "passive", ...opts.pinTypes } });
  }
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
 */
export class SIM28ML extends Component.withPins({
  "GND_1": "1",
  "TXD0": "2",
  "RXD0": "3",
  "TIMEMARK": "4",
  "EXTINT": "5",
  "V_BACKUP": "6",
  "NC_7": "7",
  "Vcc": "8",
  "~{RESET}": "9",
  "GND_10": "10",
  "RF_IN": "11",
  "GND_12": "12",
  "ANTON": "13",
  "Vcc_RF": "14",
  "NC_15": "15",
  "TXD1/SDA": "16",
  "RXD1/SCL": "17",
  "NC_18": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", TXD0: "output", RXD0: "input", TIMEMARK: "output", EXTINT: "input", V_BACKUP: "power_in", NC_7: "no_connect", Vcc: "power_in", "~{RESET}": "input", GND_10: "passive", RF_IN: "input", GND_12: "passive", ANTON: "power_out", Vcc_RF: "power_out", NC_15: "no_connect", "TXD1/SDA": "bidirectional", "RXD1/SCL": "input", NC_18: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ZED_F9P extends Component.withPins({
  "GND_1": "1",
  "RF_IN": "2",
  "GND_3": "3",
  "ANT_DETECT": "4",
  "ANT_OFF": "5",
  "~{ANT_SHORT}": "6",
  "VCC_RF": "7",
  "Reserved_8": "8",
  "Reserved_9": "9",
  "Reserved_10": "10",
  "Reserved_11": "11",
  "GND_12": "12",
  "Reserved_13": "13",
  "GND_14": "14",
  "Reserved_15": "15",
  "Reserved_16": "16",
  "Reserved_17": "17",
  "Reserved_18": "18",
  "GEOFENCE_STAT": "19",
  "RTK_STAT": "20",
  "Reserved_21": "21",
  "Reserved_22": "22",
  "Reserved_23": "23",
  "Reserved_24": "24",
  "Reserved_25": "25",
  "RXD2": "26",
  "TXD2": "27",
  "Reserved_28": "28",
  "Reserved_29": "29",
  "Reserved_30": "30",
  "Reserved_31": "31",
  "GND_32": "32",
  "VCC_33": "33",
  "VCC_34": "34",
  "Reserved_35": "35",
  "V_BCKP": "36",
  "GND_37": "37",
  "V_USB": "38",
  "USB_DM": "39",
  "USB_DP": "40",
  "GND_41": "41",
  "TXD/SPI_MISO": "42",
  "RXD/SPI_MOSI": "43",
  "SDA/~{SPI_CS}": "44",
  "SCL/SPI_CLK": "45",
  "TX_READY": "46",
  "D_SEL": "47",
  "GND_48": "48",
  "~{RESET}": "49",
  "~{SAFEBOOT}": "50",
  "EXTINT": "51",
  "Reserved_52": "52",
  "TIMEPULSE": "53",
  "Reserved_54": "54",
  "GND_55": "55",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "passive", RF_IN: "input", GND_3: "passive", ANT_DETECT: "input", ANT_OFF: "output", "~{ANT_SHORT}": "input", VCC_RF: "power_out", Reserved_8: "no_connect", Reserved_9: "no_connect", Reserved_10: "no_connect", Reserved_11: "no_connect", GND_12: "passive", Reserved_13: "no_connect", GND_14: "passive", Reserved_15: "no_connect", Reserved_16: "no_connect", Reserved_17: "no_connect", Reserved_18: "no_connect", GEOFENCE_STAT: "output", RTK_STAT: "output", Reserved_21: "no_connect", Reserved_22: "no_connect", Reserved_23: "no_connect", Reserved_24: "no_connect", Reserved_25: "no_connect", RXD2: "input", TXD2: "output", Reserved_28: "no_connect", Reserved_29: "no_connect", Reserved_30: "no_connect", Reserved_31: "no_connect", GND_32: "passive", VCC_33: "passive", VCC_34: "power_in", Reserved_35: "no_connect", V_BCKP: "power_in", GND_37: "passive", V_USB: "power_in", USB_DM: "bidirectional", USB_DP: "bidirectional", GND_41: "passive", "TXD/SPI_MISO": "output", "RXD/SPI_MOSI": "input", "SDA/~{SPI_CS}": "bidirectional", "SCL/SPI_CLK": "bidirectional", TX_READY: "output", D_SEL: "input", GND_48: "power_in", "~{RESET}": "input", "~{SAFEBOOT}": "input", EXTINT: "input", Reserved_52: "no_connect", TIMEPULSE: "output", Reserved_54: "no_connect", GND_55: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZOE_M8G extends Component.withPins({
  "GND_A1": "A1",
  "SDA/~{SPI_CS}": "A2",
  "GND_A3": "A3",
  "RF_IN": "A4",
  "GND_A5": "A5",
  "Reserved_A6": "A6",
  "GND_A7": "A7",
  "GND_A8": "A8",
  "GND_A9": "A9",
  "SCL/SPI_CLK": "B1",
  "GND_B9": "B9",
  "SQI_D1": "C1",
  "TIMEPULSE": "C3",
  "~{SAFEBOOT}": "C4",
  "LNA_EN": "C5",
  "PIO15": "C6",
  "GND_C7": "C7",
  "GND_C9": "C9",
  "SQI_D0": "D1",
  "~{SQI_CS}": "D3",
  "D_SEL": "D4",
  "GND_D6": "D6",
  "GND_D9": "D9",
  "SQI_CLK": "E1",
  "SQI_D2": "E3",
  "GND_E7": "E7",
  "Reserved_E9": "E9",
  "Reserved_F1": "F1",
  "SQI_D3": "F3",
  "Reserved_F4": "F4",
  "PIO14": "F6",
  "GND_F7": "F7",
  "Reserved_F9": "F9",
  "VCC_G1": "G1",
  "GND_G3": "G3",
  "PIO13/EXTINT": "G4",
  "Reserved_G5": "G5",
  "GND_G6": "G6",
  "GND_G7": "G7",
  "Reserved_G9": "G9",
  "VCC_H1": "H1",
  "V_BCKP": "H9",
  "VCC_J1": "J1",
  "VCC_J2": "J2",
  "GND_J3": "J3",
  "RXD/SPI_MOSI": "J4",
  "TXD/SPI_MISO": "J5",
  "~{RESET}": "J6",
  "RTC_I": "J7",
  "RTC_O": "J8",
  "GND_J9": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_A1: "power_in", "SDA/~{SPI_CS}": "bidirectional", GND_A3: "passive", RF_IN: "input", GND_A5: "passive", Reserved_A6: "no_connect", GND_A7: "passive", GND_A8: "passive", GND_A9: "passive", "SCL/SPI_CLK": "input", GND_B9: "passive", SQI_D1: "input", TIMEPULSE: "output", "~{SAFEBOOT}": "input", LNA_EN: "output", PIO15: "bidirectional", GND_C7: "passive", GND_C9: "passive", SQI_D0: "bidirectional", "~{SQI_CS}": "bidirectional", D_SEL: "input", GND_D6: "passive", GND_D9: "passive", SQI_CLK: "bidirectional", SQI_D2: "bidirectional", GND_E7: "passive", Reserved_E9: "no_connect", Reserved_F1: "no_connect", SQI_D3: "bidirectional", Reserved_F4: "no_connect", PIO14: "bidirectional", GND_F7: "passive", Reserved_F9: "no_connect", VCC_G1: "power_in", GND_G3: "passive", "PIO13/EXTINT": "input", Reserved_G5: "no_connect", GND_G6: "passive", GND_G7: "passive", Reserved_G9: "no_connect", VCC_H1: "power_in", V_BCKP: "power_in", VCC_J1: "power_in", VCC_J2: "passive", GND_J3: "passive", "RXD/SPI_MOSI": "input", "TXD/SPI_MISO": "output", "~{RESET}": "input", RTC_I: "input", RTC_O: "output", GND_J9: "passive", ...opts.pinTypes } });
  }
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
 */
export class ZOE_M8Q extends Component.withPins({
  "GND_A1": "A1",
  "SDA/~{SPI_CS}": "A2",
  "GND_A3": "A3",
  "RF_IN": "A4",
  "GND_A5": "A5",
  "Reserved_A6": "A6",
  "GND_A7": "A7",
  "GND_A8": "A8",
  "GND_A9": "A9",
  "SCL/SPI_CLK": "B1",
  "GND_B9": "B9",
  "SQI_D1": "C1",
  "TIMEPULSE": "C3",
  "~{SAFEBOOT}": "C4",
  "LNA_EN": "C5",
  "PIO15": "C6",
  "GND_C7": "C7",
  "GND_C9": "C9",
  "SQI_D0": "D1",
  "~{SQI_CS}": "D3",
  "D_SEL": "D4",
  "GND_D6": "D6",
  "GND_D9": "D9",
  "SQI_CLK": "E1",
  "SQI_D2": "E3",
  "GND_E7": "E7",
  "Reserved_E9": "E9",
  "Reserved_F1": "F1",
  "SQI_D3": "F3",
  "Reserved_F4": "F4",
  "PIO14": "F6",
  "GND_F7": "F7",
  "Reserved_F9": "F9",
  "V_CORE": "G1",
  "GND_G3": "G3",
  "PIO13/EXTINT": "G4",
  "Reserved_G5": "G5",
  "GND_G6": "G6",
  "GND_G7": "G7",
  "Reserved_G9": "G9",
  "V_DCDC_OUT": "H1",
  "V_BCKP": "H9",
  "VCC_J1": "J1",
  "VCC_J2": "J2",
  "GND_J3": "J3",
  "RXD/SPI_MOSI": "J4",
  "TXD/SPI_MISO": "J5",
  "~{RESET}": "J6",
  "RTC_I": "J7",
  "RTC_O": "J8",
  "GND_J9": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_A1: "power_in", "SDA/~{SPI_CS}": "bidirectional", GND_A3: "passive", RF_IN: "input", GND_A5: "passive", Reserved_A6: "no_connect", GND_A7: "passive", GND_A8: "passive", GND_A9: "passive", "SCL/SPI_CLK": "input", GND_B9: "passive", SQI_D1: "input", TIMEPULSE: "output", "~{SAFEBOOT}": "input", LNA_EN: "output", PIO15: "bidirectional", GND_C7: "passive", GND_C9: "passive", SQI_D0: "bidirectional", "~{SQI_CS}": "bidirectional", D_SEL: "input", GND_D6: "passive", GND_D9: "passive", SQI_CLK: "bidirectional", SQI_D2: "bidirectional", GND_E7: "passive", Reserved_E9: "no_connect", Reserved_F1: "no_connect", SQI_D3: "bidirectional", Reserved_F4: "no_connect", PIO14: "bidirectional", GND_F7: "passive", Reserved_F9: "no_connect", V_CORE: "power_in", GND_G3: "passive", "PIO13/EXTINT": "input", Reserved_G5: "no_connect", GND_G6: "passive", GND_G7: "passive", Reserved_G9: "no_connect", V_DCDC_OUT: "power_out", V_BCKP: "power_in", VCC_J1: "power_in", VCC_J2: "passive", GND_J3: "passive", "RXD/SPI_MOSI": "input", "TXD/SPI_MISO": "output", "~{RESET}": "input", RTC_I: "input", RTC_O: "output", GND_J9: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_GPS:ZOE-M8Q";
  override referencePrefix = "U";
}
