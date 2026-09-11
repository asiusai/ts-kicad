// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * ZigBee  transceiver, 2.4GHz, AES, SPI, 1.8 to 3.6V, QFN-32
 *
 * KiCad symbol: `RF_ZigBee:AT86RF233-Z`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm?P0.5mm?EP3.3x3.3mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8351-MCU_Wireless-AT86RF233_Datasheet.pdf
 * Keywords: Microchip Atmel 802.15.4 RF RF4CE 6LoWPAN ISM.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm.
 */
export class AT86RF233_Z extends Component.withPins({
  "DIG3": "1",
  "DIG4": "2",
  "AVSS_3": "3",
  "RFP": "4",
  "RFN": "5",
  "AVSS_6": "6",
  "DVSS_7": "7",
  "~{RST}": "8",
  "DIG1": "9",
  "DIG2": "10",
  "SLP_TR": "11",
  "DVSS_12": "12",
  "DVDD_13": "13",
  "DVDD_14": "14",
  "DEVDD": "15",
  "DVSS_16": "16",
  "CLKM": "17",
  "DVSS_18": "18",
  "SCLK": "19",
  "MISO": "20",
  "DVSS_21": "21",
  "MOSI": "22",
  "~{SEL}": "23",
  "IRQ": "24",
  "XTAL2": "25",
  "XTAL1": "26",
  "AVSS_27": "27",
  "EVDD": "28",
  "AVDD": "29",
  "AVSS_30": "30",
  "AVSS_31": "31",
  "AVSS_32": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG3: "output", DIG4: "output", AVSS_3: "power_in", RFP: "passive", RFN: "passive", AVSS_6: "passive", DVSS_7: "power_in", "~{RST}": "input", DIG1: "output", DIG2: "output", SLP_TR: "input", DVSS_12: "passive", DVDD_13: "power_in", DVDD_14: "passive", DEVDD: "power_in", DVSS_16: "passive", CLKM: "output", DVSS_18: "passive", SCLK: "input", MISO: "output", DVSS_21: "passive", MOSI: "input", "~{SEL}": "input", IRQ: "output", XTAL2: "passive", XTAL1: "passive", AVSS_27: "passive", EVDD: "power_in", AVDD: "power_in", AVSS_30: "passive", AVSS_31: "passive", AVSS_32: "passive", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_ZigBee:AT86RF233-Z";
  override referencePrefix = "U";
}

/**
 * 2.4 GHz ZigBee/IEEE 802.15.4 RF transceiver
 *
 * KiCad symbol: `RF_ZigBee:CC2520`. Reference prefix: `U`.
 * Footprint filters: *QFN*28*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/gpn/cc2520
 * Keywords: 2.4GHz rf transceiver ZigBee 802.15.4.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 */
export class CC2520 extends Component.withPins({
  "SO": "1",
  "SI": "2",
  "~{CS}": "3",
  "GPIO5": "4",
  "GPIO4": "5",
  "GPIO3": "6",
  "GPIO2": "7",
  "DVDD": "8",
  "GPIO1": "9",
  "GPIO0": "10",
  "AVDD5": "11",
  "XOSC_Q2": "12",
  "XOSC_Q1": "13",
  "AVDD3": "14",
  "NC_15": "15",
  "AVDD2": "16",
  "RF_P": "17",
  "RF_N": "19",
  "AVDD1": "20",
  "NC_21": "21",
  "AVDD4": "22",
  "RBIAS": "23",
  "AVDD_GUARD": "24",
  "~{RESET}": "25",
  "VREG_EN": "26",
  "DCOUPL": "27",
  "SCLK": "28",
  "AGND": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SO: "output", SI: "input", "~{CS}": "input", GPIO5: "bidirectional", GPIO4: "bidirectional", GPIO3: "bidirectional", GPIO2: "bidirectional", DVDD: "power_in", GPIO1: "bidirectional", GPIO0: "bidirectional", AVDD5: "power_in", XOSC_Q2: "passive", XOSC_Q1: "passive", AVDD3: "power_in", NC_15: "no_connect", AVDD2: "power_in", RF_P: "passive", RF_N: "passive", AVDD1: "power_in", NC_21: "no_connect", AVDD4: "power_in", RBIAS: "passive", AVDD_GUARD: "power_in", "~{RESET}": "input", VREG_EN: "input", DCOUPL: "passive", SCLK: "input", AGND: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_ZigBee:CC2520";
  override referencePrefix = "U";
}

/**
 * 2.4 GHz, Low Power Transceiver for 802.15.4 (Zigbee controller)
 *
 * KiCad symbol: `RF_ZigBee:MC13192`. Reference prefix: `U`.
 * @see https://www.nxp.com/products/no-longer-manufactured/2.4-ghz-low-power-transceiver-for-802.15.4:MC13192
 * Keywords: ZIGBEE.
 */
export class MC13192 extends Component.withPins({
  "RFIN-": "1",
  "RFIN+": "2",
  "TINJ_P": "3",
  "TINJ_M": "4",
  "PAO_P": "5",
  "PAO_M": "6",
  "SM": "7",
  "GPIO4": "8",
  "GPIO3": "9",
  "GPIO2": "10",
  "GPIO1": "11",
  "RSTBi": "12",
  "RXTXENi": "13",
  "ATTNBi": "14",
  "CLKOo": "15",
  "SPICLKi": "16",
  "MOSIi": "17",
  "MISOo": "18",
  "CEBi": "19",
  "IRQBo": "20",
  "VDDD": "21",
  "VDDIN": "22",
  "GPIO5": "23",
  "GPIO6": "24",
  "GPIO7": "25",
  "XTALin": "26",
  "XTALout": "27",
  "VDDLO2": "28",
  "VDDLO1": "29",
  "VDDVCO": "30",
  "VBATT": "31",
  "VDDA": "32",
  "GND": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RFIN-": "input", "RFIN+": "input", TINJ_P: "input", TINJ_M: "input", PAO_P: "open_collector", PAO_M: "open_collector", SM: "input", GPIO4: "bidirectional", GPIO3: "bidirectional", GPIO2: "bidirectional", GPIO1: "bidirectional", RSTBi: "input", RXTXENi: "input", ATTNBi: "input", CLKOo: "output", SPICLKi: "input", MOSIi: "input", MISOo: "tri_state", CEBi: "input", IRQBo: "open_collector", VDDD: "power_out", VDDIN: "power_in", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", XTALin: "input", XTALout: "output", VDDLO2: "power_in", VDDLO1: "power_in", VDDVCO: "power_out", VBATT: "input", VDDA: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_ZigBee:MC13192";
  override referencePrefix = "U";
}

/**
 * NXP JN5164/JN5169 breakout module, DIP
 *
 * KiCad symbol: `RF_ZigBee:TWE-L-DP-W`. Reference prefix: `U`.
 * Footprint filters: DIP*28*W15.24mm*.
 * @see https://www.mono-wireless.com/jp/products/TWE-Lite-DIP/MW-PDS-TWELITEDIP-JP.pdf
 * Keywords: TWELITE.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class TWE_L_DP_W extends Component.withPins({
  "GND_1": "1",
  "DIO14/SCL": "2",
  "DIO7/RX": "3",
  "DIO5/PWM1": "4",
  "DIO18/DO1": "5",
  "DO0/PWM2": "6",
  "DO1/PWM3": "7",
  "DIO19/DO2": "8",
  "DIO4/DO3": "9",
  "DIO6/TX": "10",
  "DIO8/PWM4": "11",
  "DIO9/DO4": "12",
  "DIO10/M1": "13",
  "GND_14": "14",
  "DIO12/DI1": "15",
  "DIO13/DI2": "16",
  "DIO11/DI3": "17",
  "DIO16/DI4": "18",
  "DIO15/SDA": "19",
  "DIO17/BPS": "20",
  "~{RESET}": "21",
  "ADC1/AI1": "22",
  "DIO0/AI2": "23",
  "ADC2/AI3": "24",
  "DIO1/AI4": "25",
  "DIO2/M2": "26",
  "DIO3/M3": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "DIO14/SCL": "bidirectional", "DIO7/RX": "bidirectional", "DIO5/PWM1": "bidirectional", "DIO18/DO1": "bidirectional", "DO0/PWM2": "output", "DO1/PWM3": "bidirectional", "DIO19/DO2": "bidirectional", "DIO4/DO3": "bidirectional", "DIO6/TX": "bidirectional", "DIO8/PWM4": "bidirectional", "DIO9/DO4": "bidirectional", "DIO10/M1": "bidirectional", GND_14: "passive", "DIO12/DI1": "bidirectional", "DIO13/DI2": "bidirectional", "DIO11/DI3": "bidirectional", "DIO16/DI4": "bidirectional", "DIO15/SDA": "bidirectional", "DIO17/BPS": "bidirectional", "~{RESET}": "input", "ADC1/AI1": "input", "DIO0/AI2": "bidirectional", "ADC2/AI3": "input", "DIO1/AI4": "bidirectional", "DIO2/M2": "bidirectional", "DIO3/M3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_ZigBee:TWE-L-DP-W";
  override referencePrefix = "U";
}

/**
 * NXP JN5164/JN5169 breakout module, DIP
 *
 * KiCad symbol: `RF_ZigBee:MW-R-DP-W`. Reference prefix: `U`.
 * Footprint filters: DIP*28*W15.24mm*.
 * @see https://www.mono-wireless.com/jp/products/TWE-Lite-DIP/MW-PDS-TWELITEDIP-JP.pdf
 * Keywords: TWELITE.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class MW_R_DP_W extends Component.withPins({
  "GND_1": "1",
  "DIO14/SCL": "2",
  "DIO7/RX": "3",
  "DIO5/PWM1": "4",
  "DIO18/DO1": "5",
  "DO0/PWM2": "6",
  "DO1/PWM3": "7",
  "DIO19/DO2": "8",
  "DIO4/DO3": "9",
  "DIO6/TX": "10",
  "DIO8/PWM4": "11",
  "DIO9/DO4": "12",
  "DIO10/M1": "13",
  "GND_14": "14",
  "DIO12/DI1": "15",
  "DIO13/DI2": "16",
  "DIO11/DI3": "17",
  "DIO16/DI4": "18",
  "DIO15/SDA": "19",
  "DIO17/BPS": "20",
  "~{RESET}": "21",
  "ADC1/AI1": "22",
  "DIO0/AI2": "23",
  "ADC2/AI3": "24",
  "DIO1/AI4": "25",
  "DIO2/M2": "26",
  "DIO3/M3": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "DIO14/SCL": "bidirectional", "DIO7/RX": "bidirectional", "DIO5/PWM1": "bidirectional", "DIO18/DO1": "bidirectional", "DO0/PWM2": "output", "DO1/PWM3": "bidirectional", "DIO19/DO2": "bidirectional", "DIO4/DO3": "bidirectional", "DIO6/TX": "bidirectional", "DIO8/PWM4": "bidirectional", "DIO9/DO4": "bidirectional", "DIO10/M1": "bidirectional", GND_14: "passive", "DIO12/DI1": "bidirectional", "DIO13/DI2": "bidirectional", "DIO11/DI3": "bidirectional", "DIO16/DI4": "bidirectional", "DIO15/SDA": "bidirectional", "DIO17/BPS": "bidirectional", "~{RESET}": "input", "ADC1/AI1": "input", "DIO0/AI2": "bidirectional", "ADC2/AI3": "input", "DIO1/AI4": "bidirectional", "DIO2/M2": "bidirectional", "DIO3/M3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_ZigBee:MW-R-DP-W";
  override referencePrefix = "U";
}

/**
 * NXP JN5164/JN5169 breakout module, SMD
 *
 * KiCad symbol: `RF_ZigBee:TWE-L-WX`. Reference prefix: `U`.
 * Footprint filters: MonoWireless?TWE*.
 * @see https://www.mono-wireless.com/jp/products/TWE-LITE/MW-PDS-TWELITE-JP.pdf
 * Keywords: TWELITE.
 * Default footprint: RF_Module:MonoWireless_TWE-L-WX.
 */
export class TWE_L_WX extends Component.withPins({
  "DO0/PWM2": "1",
  "DO1/PWM3": "2",
  "DIO18/DO1": "3",
  "DIO19/DO2": "4",
  "VCC": "5",
  "DIO4/DO3": "6",
  "DIO5/PWM1": "7",
  "DIO6/TX": "8",
  "DIO7/RX": "9",
  "DIO8/PWM4": "10",
  "DIO9/DO4": "11",
  "DIO10/M1": "12",
  "DIO12/DI1": "13",
  "DIO14/SCL": "14",
  "DIO13/DI2": "15",
  "DIO11/DI3": "16",
  "DIO15/SDA": "17",
  "DIO16/DI4": "18",
  "DIO17/BPS": "19",
  "GND_20": "20",
  "~{RESET}": "21",
  "ADC2/AI3": "22",
  "ADC1/AI1": "23",
  "DIO0/AI2": "24",
  "DIO1/AI4": "25",
  "DIO2/M2": "26",
  "DIO3/M3": "27",
  "GND_28": "28",
  "NC": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "DO0/PWM2": "output", "DO1/PWM3": "bidirectional", "DIO18/DO1": "bidirectional", "DIO19/DO2": "bidirectional", VCC: "power_in", "DIO4/DO3": "bidirectional", "DIO5/PWM1": "bidirectional", "DIO6/TX": "bidirectional", "DIO7/RX": "bidirectional", "DIO8/PWM4": "bidirectional", "DIO9/DO4": "bidirectional", "DIO10/M1": "bidirectional", "DIO12/DI1": "bidirectional", "DIO14/SCL": "bidirectional", "DIO13/DI2": "bidirectional", "DIO11/DI3": "bidirectional", "DIO15/SDA": "bidirectional", "DIO16/DI4": "bidirectional", "DIO17/BPS": "bidirectional", GND_20: "power_in", "~{RESET}": "input", "ADC2/AI3": "input", "ADC1/AI1": "input", "DIO0/AI2": "bidirectional", "DIO1/AI4": "bidirectional", "DIO2/M2": "bidirectional", "DIO3/M3": "bidirectional", GND_28: "passive", NC: "no_connect", GND_30: "passive", GND_31: "passive", GND_32: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_ZigBee:TWE-L-WX";
  override referencePrefix = "U";
}

/**
 * NXP JN5164/JN5169 breakout module, SMD
 *
 * KiCad symbol: `RF_ZigBee:MW-R-WX`. Reference prefix: `U`.
 * Footprint filters: MonoWireless?TWE*.
 * @see https://www.mono-wireless.com/jp/products/TWE-LITE/MW-PDS-TWELITE-JP.pdf
 * Keywords: TWELITE.
 * Default footprint: RF_Module:MonoWireless_TWE-L-WX.
 */
export class MW_R_WX extends Component.withPins({
  "DO0/PWM2": "1",
  "DO1/PWM3": "2",
  "DIO18/DO1": "3",
  "DIO19/DO2": "4",
  "VCC": "5",
  "DIO4/DO3": "6",
  "DIO5/PWM1": "7",
  "DIO6/TX": "8",
  "DIO7/RX": "9",
  "DIO8/PWM4": "10",
  "DIO9/DO4": "11",
  "DIO10/M1": "12",
  "DIO12/DI1": "13",
  "DIO14/SCL": "14",
  "DIO13/DI2": "15",
  "DIO11/DI3": "16",
  "DIO15/SDA": "17",
  "DIO16/DI4": "18",
  "DIO17/BPS": "19",
  "GND_20": "20",
  "~{RESET}": "21",
  "ADC2/AI3": "22",
  "ADC1/AI1": "23",
  "DIO0/AI2": "24",
  "DIO1/AI4": "25",
  "DIO2/M2": "26",
  "DIO3/M3": "27",
  "GND_28": "28",
  "NC": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "DO0/PWM2": "output", "DO1/PWM3": "bidirectional", "DIO18/DO1": "bidirectional", "DIO19/DO2": "bidirectional", VCC: "power_in", "DIO4/DO3": "bidirectional", "DIO5/PWM1": "bidirectional", "DIO6/TX": "bidirectional", "DIO7/RX": "bidirectional", "DIO8/PWM4": "bidirectional", "DIO9/DO4": "bidirectional", "DIO10/M1": "bidirectional", "DIO12/DI1": "bidirectional", "DIO14/SCL": "bidirectional", "DIO13/DI2": "bidirectional", "DIO11/DI3": "bidirectional", "DIO15/SDA": "bidirectional", "DIO16/DI4": "bidirectional", "DIO17/BPS": "bidirectional", GND_20: "power_in", "~{RESET}": "input", "ADC2/AI3": "input", "ADC1/AI1": "input", "DIO0/AI2": "bidirectional", "DIO1/AI4": "bidirectional", "DIO2/M2": "bidirectional", "DIO3/M3": "bidirectional", GND_28: "passive", NC: "no_connect", GND_30: "passive", GND_31: "passive", GND_32: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_ZigBee:MW-R-WX";
  override referencePrefix = "U";
}

/**
 * Digi Xbee SMT RF module
 *
 * KiCad symbol: `RF_ZigBee:XBee_SMT`. Reference prefix: `U`.
 * Footprint filters: Digi*XBee*SMT*.
 * @see http://www.digi.com/resources/documentation/digidocs/pdfs/90002126.pdf
 * Keywords: Digi XBee.
 * Default footprint: RF_Module:Digi_XBee_SMT.
 */
export class XBee_SMT extends Component.withPins({
  "GND_1": "1",
  "VCC": "2",
  "DIO13/UART_TX": "3",
  "DIO14/UART_RX/~{CONFIG}": "4",
  "DIO12": "5",
  "RESET/OD_OUT": "6",
  "DIO10/RSSI/PWM0": "7",
  "DIO11/PWM1": "8",
  "NC_9": "9",
  "DIO8/SLEEP_REQUEST": "10",
  "GND_11": "11",
  "DIO19/SPI_~{ATTN}": "12",
  "GND_13": "13",
  "DIO18/SPI_CLK": "14",
  "DIO17/SPI_~{SSEL}": "15",
  "DIO16/SPI_MOSI": "16",
  "DIO15/SPI_MISO": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "GND_22": "22",
  "NC_23": "23",
  "DIO4": "24",
  "DIO7/~{CTS}": "25",
  "DIO9/ON/~{SLEEP}": "26",
  "VREF": "27",
  "DIO5/ASSOCIATE": "28",
  "DIO6/~{RTS}": "29",
  "DIO3/AD3": "30",
  "DIO2/AD2": "31",
  "DIO1/AD1": "32",
  "DIO0/AD0": "33",
  "NC_34": "34",
  "GND_35": "35",
  "RF": "36",
  "NC_37": "37",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VCC: "power_in", "DIO13/UART_TX": "bidirectional", "DIO14/UART_RX/~{CONFIG}": "bidirectional", DIO12: "bidirectional", "RESET/OD_OUT": "bidirectional", "DIO10/RSSI/PWM0": "bidirectional", "DIO11/PWM1": "bidirectional", NC_9: "no_connect", "DIO8/SLEEP_REQUEST": "bidirectional", GND_11: "power_in", "DIO19/SPI_~{ATTN}": "output", GND_13: "power_in", "DIO18/SPI_CLK": "input", "DIO17/SPI_~{SSEL}": "input", "DIO16/SPI_MOSI": "input", "DIO15/SPI_MISO": "output", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", GND_22: "power_in", NC_23: "no_connect", DIO4: "bidirectional", "DIO7/~{CTS}": "bidirectional", "DIO9/ON/~{SLEEP}": "bidirectional", VREF: "input", "DIO5/ASSOCIATE": "bidirectional", "DIO6/~{RTS}": "bidirectional", "DIO3/AD3": "bidirectional", "DIO2/AD2": "bidirectional", "DIO1/AD1": "bidirectional", "DIO0/AD0": "bidirectional", NC_34: "no_connect", GND_35: "power_in", RF: "bidirectional", NC_37: "no_connect", ...opts.pinTypes } });
  }
  override schema = "RF_ZigBee:XBee_SMT";
  override referencePrefix = "U";
}
