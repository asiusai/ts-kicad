// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Bluetooth module
 *
 * KiCad symbol: `RF_Bluetooth:BL652`. Reference prefix: `U`.
 * Footprint filters: Laird*BL652*.
 * @see http://cdn.lairdtech.com/home/brandworld/files/Datasheet%20-%20BL652.pdf
 * Keywords: Bluetooth Nordic nRF52.
 * Default footprint: RF_Module:Laird_BL652.
 */
export class BL652 extends Component.withPins({
  "GND_1": "1",
  "SIO_24": "2",
  "SIO_23": "3",
  "SIO_22": "4",
  "SWDIO": "5",
  "SWDCLK": "6",
  "SIO_21": "7",
  "SIO_20": "8",
  "SIO_18": "9",
  "SIO_16": "10",
  "SIO_14": "11",
  "SIO_12": "12",
  "SIO_11": "13",
  "SIO_10/NFC2": "14",
  "SIO_09/NFC1": "15",
  "GND_16": "16",
  "SIO_08": "17",
  "SIO_07": "18",
  "SIO_06": "19",
  "SIO_05/AIN3": "20",
  "SIO_04/AIN2": "21",
  "SIO_03/AIN1": "22",
  "SIO_02/AIN0": "23",
  "SIO_01": "24",
  "SIO_00": "25",
  "VDD": "26",
  "GND_27": "27",
  "SIO_13": "28",
  "SIO_15": "29",
  "SIO_17": "30",
  "SIO_19": "31",
  "SIO_31/AIN7": "32",
  "SIO_30/AIN6": "33",
  "SIO_29/AIN5": "34",
  "SIO_28/AIN4": "35",
  "SIO_27": "36",
  "SIO_26": "37",
  "SIO_25": "38",
  "GND_39": "39",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", SIO_24: "bidirectional", SIO_23: "bidirectional", SIO_22: "bidirectional", SWDIO: "bidirectional", SWDCLK: "bidirectional", SIO_21: "bidirectional", SIO_20: "bidirectional", SIO_18: "bidirectional", SIO_16: "bidirectional", SIO_14: "bidirectional", SIO_12: "bidirectional", SIO_11: "bidirectional", "SIO_10/NFC2": "bidirectional", "SIO_09/NFC1": "bidirectional", GND_16: "power_in", SIO_08: "bidirectional", SIO_07: "bidirectional", SIO_06: "bidirectional", "SIO_05/AIN3": "bidirectional", "SIO_04/AIN2": "bidirectional", "SIO_03/AIN1": "bidirectional", "SIO_02/AIN0": "bidirectional", SIO_01: "bidirectional", SIO_00: "bidirectional", VDD: "power_in", GND_27: "power_in", SIO_13: "bidirectional", SIO_15: "bidirectional", SIO_17: "bidirectional", SIO_19: "bidirectional", "SIO_31/AIN7": "bidirectional", "SIO_30/AIN6": "bidirectional", "SIO_29/AIN5": "bidirectional", "SIO_28/AIN4": "bidirectional", SIO_27: "bidirectional", SIO_26: "bidirectional", SIO_25: "bidirectional", GND_39: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:BL652";
  override referencePrefix = "U";
}

/**
 * Bluetooth Dual-Mode, UART, Class 2
 *
 * KiCad symbol: `RF_Bluetooth:BM78SPPS5MC2`. Reference prefix: `U`.
 * Footprint filters: BM78SPPS5XC2*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001380C.pdf
 * Keywords: Bluetooth BLE BT GAP SPP SDP RFCOMM L2CAP GATT ATT SMP L2CAP.
 * Default footprint: RF_Module:BM78SPPS5XC2.
 */
export class BM78SPPS5MC2 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "BAT_IN": "4",
  "SW_BTN": "5",
  "LDO33_O": "6",
  "VDD_IO": "7",
  "LDO18_O": "8",
  "WAKE_UP": "9",
  "PMULDO_O": "10",
  "P0_4": "11",
  "P1_5": "12",
  "SCL/P1_2": "13",
  "SDA/P1_3": "14",
  "P1_7": "15",
  "P0_5": "16",
  "P0_0": "17",
  "P2_0": "18",
  "P2_4": "19",
  "EAN": "20",
  "~{RST}": "21",
  "HCI_RXD": "22",
  "HCI_TXD": "23",
  "P3_1": "24",
  "P3_2": "25",
  "P3_3": "26",
  "P3_4": "27",
  "P3_6": "28",
  "P3_7": "29",
  "LED1": "30",
  "GND_31": "31",
  "GND_32": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", BAT_IN: "power_in", SW_BTN: "input", LDO33_O: "power_out", VDD_IO: "power_in", LDO18_O: "power_out", WAKE_UP: "input", PMULDO_O: "passive", P0_4: "output", P1_5: "output", "SCL/P1_2": "output", "SDA/P1_3": "bidirectional", P1_7: "bidirectional", P0_5: "bidirectional", P0_0: "bidirectional", P2_0: "input", P2_4: "input", EAN: "input", "~{RST}": "input", HCI_RXD: "input", HCI_TXD: "output", P3_1: "bidirectional", P3_2: "bidirectional", P3_3: "bidirectional", P3_4: "bidirectional", P3_6: "bidirectional", P3_7: "bidirectional", LED1: "output", GND_31: "passive", GND_32: "passive", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:BM78SPPS5MC2";
  override referencePrefix = "U";
}

/**
 * Bluetooth Dual-Mode, UART, Class 2
 *
 * KiCad symbol: `RF_Bluetooth:BM78SPPS5NC2`. Reference prefix: `U`.
 * Footprint filters: BM78SPPS5XC2*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001380C.pdf
 * Keywords: Bluetooth BLE BT GAP SPP SDP RFCOMM L2CAP GATT ATT SMP L2CAP.
 * Default footprint: RF_Module:BM78SPPS5XC2.
 */
export class BM78SPPS5NC2 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "BAT_IN": "4",
  "SW_BTN": "5",
  "LDO33_O": "6",
  "VDD_IO": "7",
  "LDO18_O": "8",
  "WAKE_UP": "9",
  "PMULDO_O": "10",
  "P0_4": "11",
  "P1_5": "12",
  "SCL/P1_2": "13",
  "SDA/P1_3": "14",
  "P1_7": "15",
  "P0_5": "16",
  "P0_0": "17",
  "P2_0": "18",
  "P2_4": "19",
  "EAN": "20",
  "~{RST}": "21",
  "HCI_RXD": "22",
  "HCI_TXD": "23",
  "P3_1": "24",
  "P3_2": "25",
  "P3_3": "26",
  "P3_4": "27",
  "P3_6": "28",
  "P3_7": "29",
  "LED1": "30",
  "GND_31": "31",
  "GND_32": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", BAT_IN: "power_in", SW_BTN: "input", LDO33_O: "power_out", VDD_IO: "power_in", LDO18_O: "power_out", WAKE_UP: "input", PMULDO_O: "passive", P0_4: "output", P1_5: "output", "SCL/P1_2": "output", "SDA/P1_3": "bidirectional", P1_7: "bidirectional", P0_5: "bidirectional", P0_0: "bidirectional", P2_0: "input", P2_4: "input", EAN: "input", "~{RST}": "input", HCI_RXD: "input", HCI_TXD: "output", P3_1: "bidirectional", P3_2: "bidirectional", P3_3: "bidirectional", P3_4: "bidirectional", P3_6: "bidirectional", P3_7: "bidirectional", LED1: "output", GND_31: "passive", GND_32: "passive", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:BM78SPPS5NC2";
  override referencePrefix = "U";
}

/**
 * Bluetooth SPP Module, UART, Class 2
 *
 * KiCad symbol: `RF_Bluetooth:BTM112`. Reference prefix: `U`.
 * @see https://www.sparkfun.com/datasheets/Wireless/Bluetooth/BTM112_wATcommands.pdf
 * Keywords: Bluetooth BT SPP Module.
 */
export class BTM112 extends Component.withPins({
  "PIO8": "1",
  "PIO9": "2",
  "PIO10": "3",
  "AIO0": "4",
  "AIO1": "5",
  "RESET": "6",
  "SPI_MISO": "7",
  "~{SPI_CSB}": "8",
  "SPI_CLK": "9",
  "SPI_MOSI": "10",
  "~{UART_CTS}": "11",
  "UART_TX": "12",
  "~{UART_RTS}": "13",
  "UART_RX": "14",
  "PIO11": "15",
  "VCC": "16",
  "GND_17": "17",
  "PCM_OUT": "18",
  "PCM_SYNC": "19",
  "PCM_IN": "20",
  "PCM_CLK": "21",
  "USB_D+": "22",
  "USB_D-": "23",
  "~{LINK}/PIO7": "24",
  "CONN/PIO6": "25",
  "PIO5": "26",
  "BTN/PIO4": "27",
  "PIO3": "28",
  "PIO2": "29",
  "PIO1": "30",
  "PIO0": "31",
  "GND_32": "32",
  "RF": "33",
  "GND_34": "34",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO8: "bidirectional", PIO9: "bidirectional", PIO10: "bidirectional", AIO0: "passive", AIO1: "passive", RESET: "input", SPI_MISO: "output", "~{SPI_CSB}": "input", SPI_CLK: "input", SPI_MOSI: "input", "~{UART_CTS}": "input", UART_TX: "output", "~{UART_RTS}": "output", UART_RX: "input", PIO11: "bidirectional", VCC: "power_in", GND_17: "power_in", PCM_OUT: "output", PCM_SYNC: "bidirectional", PCM_IN: "input", PCM_CLK: "bidirectional", "USB_D+": "bidirectional", "USB_D-": "bidirectional", "~{LINK}/PIO7": "bidirectional", "CONN/PIO6": "bidirectional", PIO5: "bidirectional", "BTN/PIO4": "bidirectional", PIO3: "bidirectional", PIO2: "bidirectional", PIO1: "bidirectional", PIO0: "bidirectional", GND_32: "power_in", RF: "passive", GND_34: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:BTM112";
  override referencePrefix = "U";
}

/**
 * Bluetooth SPP Module, UART, Class 1
 *
 * KiCad symbol: `RF_Bluetooth:BTM222`. Reference prefix: `U`.
 * @see https://www.tme.eu/de/Document/b90358c53cd65c9b10d2914f55812666/btm222_datasheet.pdf
 * Keywords: Bluetooth BT SPP Module.
 */
export class BTM222 extends Component.withPins({
  "GND_1": "1",
  "PVCC": "2",
  "AIO0/SLEEPCLK": "3",
  "AIO1": "4",
  "PIO0/RXEN": "5",
  "PIO1/TXEN": "6",
  "PIO2/USB_PU/CLK_REQ_OUT": "7",
  "PIO3/USB_WKUP/CLK_REQ_IN": "8",
  "PIO4/USB_ON/BT_PRIOR": "9",
  "GND_10": "10",
  "PIO5/USB_DETACH/BT_ACT": "11",
  "PIO6/CLK_REQ/WAN_ACT": "12",
  "PIO7": "13",
  "PIO8": "14",
  "PIO9": "15",
  "~{RESET}": "16",
  "VCC": "17",
  "GND_18": "18",
  "GND_19": "19",
  "USB_D+": "20",
  "USB_D-": "21",
  "PCM_SYNC": "22",
  "PCM_IN": "23",
  "PCM_OUT": "24",
  "PCM_CLK": "25",
  "UART_RX": "26",
  "UART_TX": "27",
  "UART_RTS": "28",
  "GND_29": "29",
  "UART_CTS": "30",
  "SPI_MOSI": "31",
  "~{SPI_CSB}": "32",
  "SPI_CLK": "33",
  "SPI_MISO": "34",
  "PIO11": "35",
  "PIO10": "36",
  "RF": "37",
  "GND_38": "38",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", PVCC: "power_in", "AIO0/SLEEPCLK": "bidirectional", AIO1: "bidirectional", "PIO0/RXEN": "bidirectional", "PIO1/TXEN": "bidirectional", "PIO2/USB_PU/CLK_REQ_OUT": "bidirectional", "PIO3/USB_WKUP/CLK_REQ_IN": "bidirectional", "PIO4/USB_ON/BT_PRIOR": "bidirectional", GND_10: "power_in", "PIO5/USB_DETACH/BT_ACT": "bidirectional", "PIO6/CLK_REQ/WAN_ACT": "bidirectional", PIO7: "bidirectional", PIO8: "bidirectional", PIO9: "bidirectional", "~{RESET}": "input", VCC: "power_in", GND_18: "power_in", GND_19: "power_in", "USB_D+": "bidirectional", "USB_D-": "bidirectional", PCM_SYNC: "bidirectional", PCM_IN: "input", PCM_OUT: "output", PCM_CLK: "bidirectional", UART_RX: "input", UART_TX: "output", UART_RTS: "output", GND_29: "power_in", UART_CTS: "input", SPI_MOSI: "input", "~{SPI_CSB}": "input", SPI_CLK: "input", SPI_MISO: "output", PIO11: "bidirectional", PIO10: "bidirectional", RF: "passive", GND_38: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:BTM222";
  override referencePrefix = "U";
}

/**
 * Bluetooth Low Energy module based on nRF8001 chipset
 *
 * KiCad symbol: `RF_Bluetooth:MOD-nRF8001`. Reference prefix: `U`.
 * Footprint filters: MOD?nRF8001*.
 * @see https://www.olimex.com/Products/Modules/RF/MOD-nRF8001/
 * Keywords: Bluetooth Low Energy nRF8001.
 * Default footprint: RF_Module:MOD-nRF8001.
 */
export class MOD_nRF8001 extends Component.withPins({
  "3V3": "1",
  "GND": "2",
  "RST": "3",
  "RXD": "4",
  "TXD": "5",
  "SCK": "6",
  "REQN": "7",
  "MOSI": "8",
  "MISO": "9",
  "RDYN": "10",
  "ACTIVE": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "3V3": "power_in", GND: "power_in", RST: "input", RXD: "input", TXD: "output", SCK: "input", REQN: "input", MOSI: "input", MISO: "output", RDYN: "output", ACTIVE: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:MOD-nRF8001";
  override referencePrefix = "U";
}

/**
 * Microchip BM23 Bluetooth 5.0 Audio Stereo Module, dual-mode, Audio Profiles, 32x15mm
 *
 * KiCad symbol: `RF_Bluetooth:Microchip_BM83`. Reference prefix: `U`.
 * Footprint filters: Microchip?BM83*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/WSG/ProductDocuments/DataSheets/70005402E.pdf
 * Keywords: HFP HSP A2DP SPP AVRCP PBAP.
 * Default footprint: RF_Module:Microchip_BM83.
 */
export class Microchip_BM83 extends Component.withPins({
  "DR1": "1",
  "RFS1": "2",
  "SCLK1": "3",
  "DT1": "4",
  "MCLK1": "5",
  "AOHPR": "6",
  "AOHPM": "7",
  "AOHPL": "8",
  "MICN2": "9",
  "MICP2": "10",
  "AIR": "11",
  "AIL": "12",
  "MICN1": "13",
  "MICP1": "14",
  "MICBIAS": "15",
  "GND_16": "16",
  "DMIC_CLK": "17",
  "DMIC1_R": "18",
  "DMIC1_L": "19",
  "P3_2": "20",
  "P2_6": "21",
  "ADAP_IN": "22",
  "BAT_IN": "23",
  "SYS_PWR": "24",
  "VDD_IO": "25",
  "PWR(MFB)": "26",
  "SK1_AMB_DET": "27",
  "SK2_KEY_AD": "28",
  "P8_6/UART_RXD": "29",
  "P8_5/UART_TXD": "30",
  "P3_4/UART_RTS": "31",
  "LED1": "32",
  "P0_2": "33",
  "LED2": "34",
  "P0_6": "35",
  "DM": "36",
  "DP": "37",
  "P0_3": "38",
  "P2_7": "39",
  "P0_5": "40",
  "P1_6/PWM1": "41",
  "P2_3": "42",
  "~{RST}": "43",
  "P0_1": "44",
  "P0_7": "45",
  "P1_2/TDI_CPU/SCL": "46",
  "P1_3/TCK_CPU/SDA": "47",
  "P3_7/UART_CTS": "48",
  "P0_0/UART_TX_IND": "49",
  "GND_50": "50",
  "GND_56": "56",
  "GND_57": "57",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DR1: "input", RFS1: "bidirectional", SCLK1: "bidirectional", DT1: "output", MCLK1: "output", AOHPR: "output", AOHPM: "output", AOHPL: "output", MICN2: "input", MICP2: "input", AIR: "input", AIL: "input", MICN1: "input", MICP1: "input", MICBIAS: "passive", GND_16: "power_in", DMIC_CLK: "output", DMIC1_R: "output", DMIC1_L: "output", P3_2: "bidirectional", P2_6: "bidirectional", ADAP_IN: "power_in", BAT_IN: "power_in", SYS_PWR: "power_out", VDD_IO: "no_connect", "PWR(MFB)": "input", SK1_AMB_DET: "input", SK2_KEY_AD: "input", "P8_6/UART_RXD": "bidirectional", "P8_5/UART_TXD": "bidirectional", "P3_4/UART_RTS": "bidirectional", LED1: "input", P0_2: "bidirectional", LED2: "input", P0_6: "bidirectional", DM: "bidirectional", DP: "bidirectional", P0_3: "bidirectional", P2_7: "bidirectional", P0_5: "bidirectional", "P1_6/PWM1": "bidirectional", P2_3: "bidirectional", "~{RST}": "input", P0_1: "bidirectional", P0_7: "bidirectional", "P1_2/TDI_CPU/SCL": "bidirectional", "P1_3/TCK_CPU/SDA": "bidirectional", "P3_7/UART_CTS": "bidirectional", "P0_0/UART_TX_IND": "bidirectional", GND_50: "passive", GND_56: "passive", GND_57: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:Microchip_BM83";
  override referencePrefix = "U";
}

/**
 * Simblee Bluetooth Smart Module with ARM Cortex-M0 and integrated antenna
 *
 * KiCad symbol: `RF_Bluetooth:RFD77101`. Reference prefix: `U`.
 * Footprint filters: RFDigital*RFD77101*.
 * @see https://www.simblee.com/Simblee%20RFD77101%20Datasheet%20v1.0.pdf
 * Keywords: Simblee ARM Cortex-M0 Bluetooth antenna.
 * Default footprint: RF_Module:RFDigital_RFD77101.
 */
export class RFD77101 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "NC_3": "3",
  "GND_4": "4",
  "NC_5": "5",
  "GND_6": "6",
  "VDD": "7",
  "RESET/SWDIO": "8",
  "FACTORY/SWDCLK": "9",
  "NC_10": "10",
  "P0.19": "11",
  "P0.17": "12",
  "P0.18": "13",
  "P0.16": "14",
  "P0.15": "15",
  "P0.12": "16",
  "P0.11": "17",
  "P0.09": "18",
  "GND_19": "19",
  "P0.08": "20",
  "P0.05/AIN6": "21",
  "P0.03/AIN4": "22",
  "P0.01/AIN2": "23",
  "P0.02/AIN3": "24",
  "P0.00/AREF0": "25",
  "P0.07": "26",
  "P0.10": "27",
  "P0.13": "28",
  "P0.14": "29",
  "GND_30": "30",
  "P0.06/AREF1/AIN7": "31",
  "P0.04/AIN5": "32",
  "P0.20": "33",
  "P0.23": "34",
  "P0.24": "35",
  "P0.21": "36",
  "P0.22": "37",
  "P0.25": "38",
  "P0.28": "39",
  "P0.29": "40",
  "P0.30": "41",
  "GND_42": "42",
  "GND_43": "43",
  "GND_44": "44",
  "GND_45": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", NC_3: "no_connect", GND_4: "power_in", NC_5: "no_connect", GND_6: "power_in", VDD: "power_in", "RESET/SWDIO": "bidirectional", "FACTORY/SWDCLK": "input", NC_10: "no_connect", "P0.19": "bidirectional", "P0.17": "bidirectional", "P0.18": "bidirectional", "P0.16": "bidirectional", "P0.15": "bidirectional", "P0.12": "bidirectional", "P0.11": "bidirectional", "P0.09": "bidirectional", GND_19: "power_in", "P0.08": "bidirectional", "P0.05/AIN6": "bidirectional", "P0.03/AIN4": "bidirectional", "P0.01/AIN2": "bidirectional", "P0.02/AIN3": "bidirectional", "P0.00/AREF0": "bidirectional", "P0.07": "bidirectional", "P0.10": "bidirectional", "P0.13": "bidirectional", "P0.14": "bidirectional", GND_30: "power_in", "P0.06/AREF1/AIN7": "bidirectional", "P0.04/AIN5": "bidirectional", "P0.20": "bidirectional", "P0.23": "bidirectional", "P0.24": "bidirectional", "P0.21": "bidirectional", "P0.22": "bidirectional", "P0.25": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", GND_42: "power_in", GND_43: "power_in", GND_44: "power_in", GND_45: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:RFD77101";
  override referencePrefix = "U";
}

/**
 * Class 2 Bluetooth Module with on-board antenna
 *
 * KiCad symbol: `RF_Bluetooth:RN42`. Reference prefix: `U`.
 * Footprint filters: RN42*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/rn-42-ds-v2.32r.pdf
 * Keywords: Bluetooth Module.
 * Default footprint: RF_Module:RN42.
 */
export class RN42 extends Component.withPins({
  "GND_1": "1",
  "SPI_MOSI": "2",
  "GPIO6": "3",
  "GPIO7": "4",
  "RESET": "5",
  "SPI_CLK": "6",
  "PCM_CLK": "7",
  "PCM_SYNC": "8",
  "PCM_IN": "9",
  "PCM_OUT": "10",
  "VDD": "11",
  "GND_12": "12",
  "UART_RX": "13",
  "UART_TX": "14",
  "UART_RTS": "15",
  "UART_CTS": "16",
  "USB_D+": "17",
  "USB_D-": "18",
  "GPIO2": "19",
  "GPIO3": "20",
  "GPIO5": "21",
  "GPIO4": "22",
  "SPI_CSB": "23",
  "SPI_MISO": "24",
  "GND_28": "28",
  "GND_29": "29",
  "AIO0": "30",
  "GPIO8": "31",
  "GPIO9": "32",
  "GPIO10": "33",
  "GPIO11": "34",
  "AIO1": "35",
  "SHIELD": "36",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", SPI_MOSI: "input", GPIO6: "input", GPIO7: "bidirectional", RESET: "input", SPI_CLK: "input", PCM_CLK: "bidirectional", PCM_SYNC: "bidirectional", PCM_IN: "input", PCM_OUT: "output", VDD: "power_in", GND_12: "power_in", UART_RX: "input", UART_TX: "output", UART_RTS: "output", UART_CTS: "input", "USB_D+": "bidirectional", "USB_D-": "bidirectional", GPIO2: "bidirectional", GPIO3: "input", GPIO5: "bidirectional", GPIO4: "bidirectional", SPI_CSB: "input", SPI_MISO: "output", GND_28: "power_in", GND_29: "power_in", AIO0: "input", GPIO8: "output", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", AIO1: "input", SHIELD: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:RN42";
  override referencePrefix = "U";
}

/**
 * Class 2 Bluetooth Module without antenna
 *
 * KiCad symbol: `RF_Bluetooth:RN42N`. Reference prefix: `U`.
 * Footprint filters: RN42N*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/rn-42-ds-v2.32r.pdf
 * Keywords: Bluetooth Module.
 * Default footprint: RF_Module:RN42N.
 */
export class RN42N extends Component.withPins({
  "GND_1": "1",
  "SPI_MOSI": "2",
  "GPIO6": "3",
  "GPIO7": "4",
  "RESET": "5",
  "SPI_CLK": "6",
  "PCM_CLK": "7",
  "PCM_SYNC": "8",
  "PCM_IN": "9",
  "PCM_OUT": "10",
  "VDD": "11",
  "GND_12": "12",
  "UART_RX": "13",
  "UART_TX": "14",
  "UART_RTS": "15",
  "UART_CTS": "16",
  "USB_D+": "17",
  "USB_D-": "18",
  "GPIO2": "19",
  "GPIO3": "20",
  "GPIO5": "21",
  "GPIO4": "22",
  "SPI_CSB": "23",
  "SPI_MISO": "24",
  "GND_25": "25",
  "RF_ANT": "26",
  "GND_27": "27",
  "GND_28": "28",
  "GND_29": "29",
  "AIO0": "30",
  "GPIO8": "31",
  "GPIO9": "32",
  "GPIO10": "33",
  "GPIO11": "34",
  "AIO1": "35",
  "SHIELD": "36",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", SPI_MOSI: "input", GPIO6: "input", GPIO7: "bidirectional", RESET: "input", SPI_CLK: "input", PCM_CLK: "bidirectional", PCM_SYNC: "bidirectional", PCM_IN: "input", PCM_OUT: "output", VDD: "power_in", GND_12: "power_in", UART_RX: "input", UART_TX: "output", UART_RTS: "output", UART_CTS: "input", "USB_D+": "bidirectional", "USB_D-": "bidirectional", GPIO2: "bidirectional", GPIO3: "input", GPIO5: "bidirectional", GPIO4: "bidirectional", SPI_CSB: "input", SPI_MISO: "output", GND_25: "power_in", RF_ANT: "bidirectional", GND_27: "power_in", GND_28: "power_in", GND_29: "power_in", AIO0: "input", GPIO8: "output", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", AIO1: "input", SHIELD: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:RN42N";
  override referencePrefix = "U";
}

/**
 * Bluetooth Low Energy 4.2 Module
 *
 * KiCad symbol: `RF_Bluetooth:RN4871`. Reference prefix: `U`.
 * Footprint filters: RF*Module:Microchip*RN4871*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/50002489A.pdf
 * Keywords: Bluetooth Low Energy 4.2 Module.
 * Default footprint: RF_Module:Microchip_RN4871.
 */
export class RN4871 extends Component.withPins({
  "BT_RF": "1",
  "GND_2": "2",
  "P1_2": "3",
  "P1_3": "4",
  "P1_7": "5",
  "P1_6": "6",
  "UART_RX": "7",
  "UART_TX": "8",
  "P3_6": "9",
  "RST": "10",
  "P0_0": "11",
  "P0_2": "12",
  "GND_13": "13",
  "VBAT": "14",
  "P2_7": "15",
  "P2_0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BT_RF: "output", GND_2: "power_in", P1_2: "bidirectional", P1_3: "bidirectional", P1_7: "bidirectional", P1_6: "bidirectional", UART_RX: "input", UART_TX: "output", P3_6: "bidirectional", RST: "input", P0_0: "bidirectional", P0_2: "bidirectional", GND_13: "power_in", VBAT: "power_in", P2_7: "bidirectional", P2_0: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:RN4871";
  override referencePrefix = "U";
}

/**
 * Very Low Power network processor module for BLE v4.1, Hub capabilities
 *
 * KiCad symbol: `RF_Bluetooth:SPBTLE-RF`. Reference prefix: `U`.
 * Footprint filters: ST*SPBTLE*.
 * @see http://www.st.com/resource/en/datasheet/spbtle-rf.pdf
 * Keywords: BLE bluetooth module low-power.
 * Default footprint: RF_Module:ST_SPBTLE.
 */
export class SPBTLE_RF extends Component.withPins({
  "NC/EXT_LPCLK": "1",
  "NC/GPIO2": "2",
  "NC/ANA_TEST": "3",
  "SPI_IRQ": "4",
  "VIN": "5",
  "GND": "6",
  "SPI_CLK": "7",
  "SPI_MISO": "8",
  "SPI_MOSI": "9",
  "SPI_~{CS}": "10",
  "~{BT_RESET}": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "NC/EXT_LPCLK": "input", "NC/GPIO2": "bidirectional", "NC/ANA_TEST": "input", SPI_IRQ: "output", VIN: "power_in", GND: "power_in", SPI_CLK: "input", SPI_MISO: "output", SPI_MOSI: "input", "SPI_~{CS}": "input", "~{BT_RESET}": "input", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:SPBTLE-RF";
  override referencePrefix = "U";
}

/**
 * Very Low Power network processor module for BLE v4.1
 *
 * KiCad symbol: `RF_Bluetooth:SPBTLE-RF0`. Reference prefix: `U`.
 * Footprint filters: ST*SPBTLE*.
 * @see http://www.st.com/resource/en/datasheet/spbtle-rf0.pdf
 * Keywords: BLE bluetooth module low-power.
 * Default footprint: RF_Module:ST_SPBTLE.
 */
export class SPBTLE_RF0 extends Component.withPins({
  "NC/EXT_LPCLK": "1",
  "NC/GPIO2": "2",
  "NC/ANA_TEST": "3",
  "SPI_IRQ": "4",
  "VIN": "5",
  "GND": "6",
  "SPI_CLK": "7",
  "SPI_MISO": "8",
  "SPI_MOSI": "9",
  "SPI_~{CS}": "10",
  "~{BT_RESET}": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "NC/EXT_LPCLK": "input", "NC/GPIO2": "bidirectional", "NC/ANA_TEST": "input", SPI_IRQ: "output", VIN: "power_in", GND: "power_in", SPI_CLK: "input", SPI_MISO: "output", SPI_MOSI: "input", "SPI_~{CS}": "input", "~{BT_RESET}": "input", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:SPBTLE-RF0";
  override referencePrefix = "U";
}

/**
 * BLE LE Connectivity IC, QFN-32
 *
 * KiCad symbol: `RF_Bluetooth:nRF8001`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.nordicsemi.com/eng/nordic/content_download/2981/38488/file/nRF8001_PS_v1.3.pdf
 * Keywords: BLE, bluetooth.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class nRF8001 extends Component.withPins({
  "VDD_1": "1",
  "DEC1": "2",
  "DEC2": "3",
  "XL2": "4",
  "XL1": "5",
  "ACTIVE": "6",
  "TXD": "7",
  "VSS_8": "8",
  "VDD_9": "9",
  "RXD": "10",
  "SCK": "11",
  "REQN": "12",
  "MOSI": "13",
  "MISO": "14",
  "N/C": "15",
  "RDYN": "16",
  "VSS_17": "17",
  "VSS_18": "18",
  "RESET": "19",
  "VDD_PA": "20",
  "ANT1": "21",
  "ANT2": "22",
  "VSS_23": "23",
  "AVDD_24": "24",
  "IREF": "25",
  "AVDD_26": "26",
  "XC2": "27",
  "XC1": "28",
  "AVDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "DCC": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", DEC1: "bidirectional", DEC2: "bidirectional", XL2: "bidirectional", XL1: "bidirectional", ACTIVE: "bidirectional", TXD: "output", VSS_8: "power_in", VDD_9: "power_in", RXD: "input", SCK: "input", REQN: "bidirectional", MOSI: "input", MISO: "output", "N/C": "no_connect", RDYN: "bidirectional", VSS_17: "power_in", VSS_18: "power_in", RESET: "input", VDD_PA: "output", ANT1: "bidirectional", ANT2: "bidirectional", VSS_23: "power_in", AVDD_24: "power_in", IREF: "input", AVDD_26: "power_in", XC2: "bidirectional", XC1: "bidirectional", AVDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", DCC: "bidirectional", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Bluetooth:nRF8001";
  override referencePrefix = "U";
}
