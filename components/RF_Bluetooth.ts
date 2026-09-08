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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BL652 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: SIO_24; bidirectional. */
  "SIO_24": "2",
  /** Physical pin 3: SIO_23; bidirectional. */
  "SIO_23": "3",
  /** Physical pin 4: SIO_22; bidirectional. */
  "SIO_22": "4",
  /** Physical pin 5: SWDIO; bidirectional. */
  "SWDIO": "5",
  /** Physical pin 6: SWDCLK; bidirectional. */
  "SWDCLK": "6",
  /** Physical pin 7: SIO_21; bidirectional. */
  "SIO_21": "7",
  /** Physical pin 8: SIO_20; bidirectional. */
  "SIO_20": "8",
  /** Physical pin 9: SIO_18; bidirectional. */
  "SIO_18": "9",
  /** Physical pin 10: SIO_16; bidirectional. */
  "SIO_16": "10",
  /** Physical pin 11: SIO_14; bidirectional. */
  "SIO_14": "11",
  /** Physical pin 12: SIO_12; bidirectional. */
  "SIO_12": "12",
  /** Physical pin 13: SIO_11; bidirectional. */
  "SIO_11": "13",
  /** Physical pin 14: SIO_10/NFC2; bidirectional. */
  "SIO_10/NFC2": "14",
  /** Physical pin 15: SIO_09/NFC1; bidirectional. */
  "SIO_09/NFC1": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: SIO_08; bidirectional. */
  "SIO_08": "17",
  /** Physical pin 18: SIO_07; bidirectional. */
  "SIO_07": "18",
  /** Physical pin 19: SIO_06; bidirectional. */
  "SIO_06": "19",
  /** Physical pin 20: SIO_05/AIN3; bidirectional. */
  "SIO_05/AIN3": "20",
  /** Physical pin 21: SIO_04/AIN2; bidirectional. */
  "SIO_04/AIN2": "21",
  /** Physical pin 22: SIO_03/AIN1; bidirectional. */
  "SIO_03/AIN1": "22",
  /** Physical pin 23: SIO_02/AIN0; bidirectional. */
  "SIO_02/AIN0": "23",
  /** Physical pin 24: SIO_01; bidirectional. */
  "SIO_01": "24",
  /** Physical pin 25: SIO_00; bidirectional. */
  "SIO_00": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: SIO_13; bidirectional. */
  "SIO_13": "28",
  /** Physical pin 29: SIO_15; bidirectional. */
  "SIO_15": "29",
  /** Physical pin 30: SIO_17; bidirectional. */
  "SIO_17": "30",
  /** Physical pin 31: SIO_19; bidirectional. */
  "SIO_19": "31",
  /** Physical pin 32: SIO_31/AIN7; bidirectional. */
  "SIO_31/AIN7": "32",
  /** Physical pin 33: SIO_30/AIN6; bidirectional. */
  "SIO_30/AIN6": "33",
  /** Physical pin 34: SIO_29/AIN5; bidirectional. */
  "SIO_29/AIN5": "34",
  /** Physical pin 35: SIO_28/AIN4; bidirectional. */
  "SIO_28/AIN4": "35",
  /** Physical pin 36: SIO_27; bidirectional. */
  "SIO_27": "36",
  /** Physical pin 37: SIO_26; bidirectional. */
  "SIO_26": "37",
  /** Physical pin 38: SIO_25; bidirectional. */
  "SIO_25": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BM78SPPS5MC2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: BAT_IN; power_in. */
  "BAT_IN": "4",
  /** Physical pin 5: SW_BTN; input. */
  "SW_BTN": "5",
  /** Physical pin 6: LDO33_O; power_out. */
  "LDO33_O": "6",
  /** Physical pin 7: VDD_IO; power_in. */
  "VDD_IO": "7",
  /** Physical pin 8: LDO18_O; power_out. */
  "LDO18_O": "8",
  /** Physical pin 9: WAKE_UP; input. */
  "WAKE_UP": "9",
  /** Physical pin 10: PMULDO_O; passive. */
  "PMULDO_O": "10",
  /** Physical pin 11: P0_4; output. */
  "P0_4": "11",
  /** Physical pin 12: P1_5; output. */
  "P1_5": "12",
  /** Physical pin 13: SCL/P1_2; output. */
  "SCL/P1_2": "13",
  /** Physical pin 14: SDA/P1_3; bidirectional. */
  "SDA/P1_3": "14",
  /** Physical pin 15: P1_7; bidirectional. */
  "P1_7": "15",
  /** Physical pin 16: P0_5; bidirectional. */
  "P0_5": "16",
  /** Physical pin 17: P0_0; bidirectional. */
  "P0_0": "17",
  /** Physical pin 18: P2_0; input. */
  "P2_0": "18",
  /** Physical pin 19: P2_4; input. */
  "P2_4": "19",
  /** Physical pin 20: EAN; input. */
  "EAN": "20",
  /** Physical pin 21: ~{RST}; input. */
  "~{RST}": "21",
  /** Physical pin 22: HCI_RXD; input. */
  "HCI_RXD": "22",
  /** Physical pin 23: HCI_TXD; output. */
  "HCI_TXD": "23",
  /** Physical pin 24: P3_1; bidirectional. */
  "P3_1": "24",
  /** Physical pin 25: P3_2; bidirectional. */
  "P3_2": "25",
  /** Physical pin 26: P3_3; bidirectional. */
  "P3_3": "26",
  /** Physical pin 27: P3_4; bidirectional. */
  "P3_4": "27",
  /** Physical pin 28: P3_6; bidirectional. */
  "P3_6": "28",
  /** Physical pin 29: P3_7; bidirectional. */
  "P3_7": "29",
  /** Physical pin 30: LED1; output. */
  "LED1": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BM78SPPS5NC2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: BAT_IN; power_in. */
  "BAT_IN": "4",
  /** Physical pin 5: SW_BTN; input. */
  "SW_BTN": "5",
  /** Physical pin 6: LDO33_O; power_out. */
  "LDO33_O": "6",
  /** Physical pin 7: VDD_IO; power_in. */
  "VDD_IO": "7",
  /** Physical pin 8: LDO18_O; power_out. */
  "LDO18_O": "8",
  /** Physical pin 9: WAKE_UP; input. */
  "WAKE_UP": "9",
  /** Physical pin 10: PMULDO_O; passive. */
  "PMULDO_O": "10",
  /** Physical pin 11: P0_4; output. */
  "P0_4": "11",
  /** Physical pin 12: P1_5; output. */
  "P1_5": "12",
  /** Physical pin 13: SCL/P1_2; output. */
  "SCL/P1_2": "13",
  /** Physical pin 14: SDA/P1_3; bidirectional. */
  "SDA/P1_3": "14",
  /** Physical pin 15: P1_7; bidirectional. */
  "P1_7": "15",
  /** Physical pin 16: P0_5; bidirectional. */
  "P0_5": "16",
  /** Physical pin 17: P0_0; bidirectional. */
  "P0_0": "17",
  /** Physical pin 18: P2_0; input. */
  "P2_0": "18",
  /** Physical pin 19: P2_4; input. */
  "P2_4": "19",
  /** Physical pin 20: EAN; input. */
  "EAN": "20",
  /** Physical pin 21: ~{RST}; input. */
  "~{RST}": "21",
  /** Physical pin 22: HCI_RXD; input. */
  "HCI_RXD": "22",
  /** Physical pin 23: HCI_TXD; output. */
  "HCI_TXD": "23",
  /** Physical pin 24: P3_1; bidirectional. */
  "P3_1": "24",
  /** Physical pin 25: P3_2; bidirectional. */
  "P3_2": "25",
  /** Physical pin 26: P3_3; bidirectional. */
  "P3_3": "26",
  /** Physical pin 27: P3_4; bidirectional. */
  "P3_4": "27",
  /** Physical pin 28: P3_6; bidirectional. */
  "P3_6": "28",
  /** Physical pin 29: P3_7; bidirectional. */
  "P3_7": "29",
  /** Physical pin 30: LED1; output. */
  "LED1": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "RF_Bluetooth:BM78SPPS5NC2";
  override referencePrefix = "U";
}

/**
 * Bluetooth SPP Module, UART, Class 2
 *
 * KiCad symbol: `RF_Bluetooth:BTM112`. Reference prefix: `U`.
 * @see https://www.sparkfun.com/datasheets/Wireless/Bluetooth/BTM112_wATcommands.pdf
 * Keywords: Bluetooth BT SPP Module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTM112 extends Component.withPins({
  /** Physical pin 1: PIO8; bidirectional. */
  "PIO8": "1",
  /** Physical pin 2: PIO9; bidirectional. */
  "PIO9": "2",
  /** Physical pin 3: PIO10; bidirectional. */
  "PIO10": "3",
  /** Physical pin 4: AIO0; passive. */
  "AIO0": "4",
  /** Physical pin 5: AIO1; passive. */
  "AIO1": "5",
  /** Physical pin 6: RESET; input. */
  "RESET": "6",
  /** Physical pin 7: SPI_MISO; output. */
  "SPI_MISO": "7",
  /** Physical pin 8: ~{SPI_CSB}; input. */
  "~{SPI_CSB}": "8",
  /** Physical pin 9: SPI_CLK; input. */
  "SPI_CLK": "9",
  /** Physical pin 10: SPI_MOSI; input. */
  "SPI_MOSI": "10",
  /** Physical pin 11: ~{UART_CTS}; input. */
  "~{UART_CTS}": "11",
  /** Physical pin 12: UART_TX; output. */
  "UART_TX": "12",
  /** Physical pin 13: ~{UART_RTS}; output. */
  "~{UART_RTS}": "13",
  /** Physical pin 14: UART_RX; input. */
  "UART_RX": "14",
  /** Physical pin 15: PIO11; bidirectional. */
  "PIO11": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: PCM_OUT; output. */
  "PCM_OUT": "18",
  /** Physical pin 19: PCM_SYNC; bidirectional. */
  "PCM_SYNC": "19",
  /** Physical pin 20: PCM_IN; input. */
  "PCM_IN": "20",
  /** Physical pin 21: PCM_CLK; bidirectional. */
  "PCM_CLK": "21",
  /** Physical pin 22: USB_D+; bidirectional. */
  "USB_D+": "22",
  /** Physical pin 23: USB_D-; bidirectional. */
  "USB_D-": "23",
  /** Physical pin 24: ~{LINK}/PIO7; bidirectional. */
  "~{LINK}/PIO7": "24",
  /** Physical pin 25: CONN/PIO6; bidirectional. */
  "CONN/PIO6": "25",
  /** Physical pin 26: PIO5; bidirectional. */
  "PIO5": "26",
  /** Physical pin 27: BTN/PIO4; bidirectional. */
  "BTN/PIO4": "27",
  /** Physical pin 28: PIO3; bidirectional. */
  "PIO3": "28",
  /** Physical pin 29: PIO2; bidirectional. */
  "PIO2": "29",
  /** Physical pin 30: PIO1; bidirectional. */
  "PIO1": "30",
  /** Physical pin 31: PIO0; bidirectional. */
  "PIO0": "31",
  /** Physical pin 32: GND; power_in. */
  "GND_32": "32",
  /** Physical pin 33: RF; passive. */
  "RF": "33",
  /** Physical pin 34: GND; power_in. */
  "GND_34": "34",
}) {
  override schema = "RF_Bluetooth:BTM112";
  override referencePrefix = "U";
}

/**
 * Bluetooth SPP Module, UART, Class 1
 *
 * KiCad symbol: `RF_Bluetooth:BTM222`. Reference prefix: `U`.
 * @see https://www.tme.eu/de/Document/b90358c53cd65c9b10d2914f55812666/btm222_datasheet.pdf
 * Keywords: Bluetooth BT SPP Module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BTM222 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PVCC; power_in. */
  "PVCC": "2",
  /** Physical pin 3: AIO0/SLEEPCLK; bidirectional. */
  "AIO0/SLEEPCLK": "3",
  /** Physical pin 4: AIO1; bidirectional. */
  "AIO1": "4",
  /** Physical pin 5: PIO0/RXEN; bidirectional. */
  "PIO0/RXEN": "5",
  /** Physical pin 6: PIO1/TXEN; bidirectional. */
  "PIO1/TXEN": "6",
  /** Physical pin 7: PIO2/USB_PU/CLK_REQ_OUT; bidirectional. */
  "PIO2/USB_PU/CLK_REQ_OUT": "7",
  /** Physical pin 8: PIO3/USB_WKUP/CLK_REQ_IN; bidirectional. */
  "PIO3/USB_WKUP/CLK_REQ_IN": "8",
  /** Physical pin 9: PIO4/USB_ON/BT_PRIOR; bidirectional. */
  "PIO4/USB_ON/BT_PRIOR": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: PIO5/USB_DETACH/BT_ACT; bidirectional. */
  "PIO5/USB_DETACH/BT_ACT": "11",
  /** Physical pin 12: PIO6/CLK_REQ/WAN_ACT; bidirectional. */
  "PIO6/CLK_REQ/WAN_ACT": "12",
  /** Physical pin 13: PIO7; bidirectional. */
  "PIO7": "13",
  /** Physical pin 14: PIO8; bidirectional. */
  "PIO8": "14",
  /** Physical pin 15: PIO9; bidirectional. */
  "PIO9": "15",
  /** Physical pin 16: ~{RESET}; input. */
  "~{RESET}": "16",
  /** Physical pin 17: VCC; power_in. */
  "VCC": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: USB_D+; bidirectional. */
  "USB_D+": "20",
  /** Physical pin 21: USB_D-; bidirectional. */
  "USB_D-": "21",
  /** Physical pin 22: PCM_SYNC; bidirectional. */
  "PCM_SYNC": "22",
  /** Physical pin 23: PCM_IN; input. */
  "PCM_IN": "23",
  /** Physical pin 24: PCM_OUT; output. */
  "PCM_OUT": "24",
  /** Physical pin 25: PCM_CLK; bidirectional. */
  "PCM_CLK": "25",
  /** Physical pin 26: UART_RX; input. */
  "UART_RX": "26",
  /** Physical pin 27: UART_TX; output. */
  "UART_TX": "27",
  /** Physical pin 28: UART_RTS; output. */
  "UART_RTS": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: UART_CTS; input. */
  "UART_CTS": "30",
  /** Physical pin 31: SPI_MOSI; input. */
  "SPI_MOSI": "31",
  /** Physical pin 32: ~{SPI_CSB}; input. */
  "~{SPI_CSB}": "32",
  /** Physical pin 33: SPI_CLK; input. */
  "SPI_CLK": "33",
  /** Physical pin 34: SPI_MISO; output. */
  "SPI_MISO": "34",
  /** Physical pin 35: PIO11; bidirectional. */
  "PIO11": "35",
  /** Physical pin 36: PIO10; bidirectional. */
  "PIO10": "36",
  /** Physical pin 37: RF; passive. */
  "RF": "37",
  /** Physical pin 38: GND; power_in. */
  "GND_38": "38",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MOD_nRF8001 extends Component.withPins({
  /** Physical pin 1: 3V3; power_in. */
  "3V3": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RST; input. */
  "RST": "3",
  /** Physical pin 4: RXD; input. */
  "RXD": "4",
  /** Physical pin 5: TXD; output. */
  "TXD": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: REQN; input. */
  "REQN": "7",
  /** Physical pin 8: MOSI; input. */
  "MOSI": "8",
  /** Physical pin 9: MISO; output. */
  "MISO": "9",
  /** Physical pin 10: RDYN; output. */
  "RDYN": "10",
  /** Physical pin 11: ACTIVE; output. */
  "ACTIVE": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Microchip_BM83 extends Component.withPins({
  /** Physical pin 1: DR1; input. */
  "DR1": "1",
  /** Physical pin 2: RFS1; bidirectional. */
  "RFS1": "2",
  /** Physical pin 3: SCLK1; bidirectional. */
  "SCLK1": "3",
  /** Physical pin 4: DT1; output. */
  "DT1": "4",
  /** Physical pin 5: MCLK1; output. */
  "MCLK1": "5",
  /** Physical pin 6: AOHPR; output. */
  "AOHPR": "6",
  /** Physical pin 7: AOHPM; output. */
  "AOHPM": "7",
  /** Physical pin 8: AOHPL; output. */
  "AOHPL": "8",
  /** Physical pin 9: MICN2; input. */
  "MICN2": "9",
  /** Physical pin 10: MICP2; input. */
  "MICP2": "10",
  /** Physical pin 11: AIR; input. */
  "AIR": "11",
  /** Physical pin 12: AIL; input. */
  "AIL": "12",
  /** Physical pin 13: MICN1; input. */
  "MICN1": "13",
  /** Physical pin 14: MICP1; input. */
  "MICP1": "14",
  /** Physical pin 15: MICBIAS; passive. */
  "MICBIAS": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: DMIC_CLK; output. */
  "DMIC_CLK": "17",
  /** Physical pin 18: DMIC1_R; output. */
  "DMIC1_R": "18",
  /** Physical pin 19: DMIC1_L; output. */
  "DMIC1_L": "19",
  /** Physical pin 20: P3_2; bidirectional. */
  "P3_2": "20",
  /** Physical pin 21: P2_6; bidirectional. */
  "P2_6": "21",
  /** Physical pin 22: ADAP_IN; power_in. */
  "ADAP_IN": "22",
  /** Physical pin 23: BAT_IN; power_in. */
  "BAT_IN": "23",
  /** Physical pin 24: SYS_PWR; power_out. */
  "SYS_PWR": "24",
  /** Physical pin 25: VDD_IO; no_connect. */
  "VDD_IO": "25",
  /** Physical pin 26: PWR(MFB); input. */
  "PWR(MFB)": "26",
  /** Physical pin 27: SK1_AMB_DET; input. */
  "SK1_AMB_DET": "27",
  /** Physical pin 28: SK2_KEY_AD; input. */
  "SK2_KEY_AD": "28",
  /** Physical pin 29: P8_6/UART_RXD; bidirectional. */
  "P8_6/UART_RXD": "29",
  /** Physical pin 30: P8_5/UART_TXD; bidirectional. */
  "P8_5/UART_TXD": "30",
  /** Physical pin 31: P3_4/UART_RTS; bidirectional. */
  "P3_4/UART_RTS": "31",
  /** Physical pin 32: LED1; input. */
  "LED1": "32",
  /** Physical pin 33: P0_2; bidirectional. */
  "P0_2": "33",
  /** Physical pin 34: LED2; input. */
  "LED2": "34",
  /** Physical pin 35: P0_6; bidirectional. */
  "P0_6": "35",
  /** Physical pin 36: DM; bidirectional. */
  "DM": "36",
  /** Physical pin 37: DP; bidirectional. */
  "DP": "37",
  /** Physical pin 38: P0_3; bidirectional. */
  "P0_3": "38",
  /** Physical pin 39: P2_7; bidirectional. */
  "P2_7": "39",
  /** Physical pin 40: P0_5; bidirectional. */
  "P0_5": "40",
  /** Physical pin 41: P1_6/PWM1; bidirectional. */
  "P1_6/PWM1": "41",
  /** Physical pin 42: P2_3; bidirectional. */
  "P2_3": "42",
  /** Physical pin 43: ~{RST}; input. */
  "~{RST}": "43",
  /** Physical pin 44: P0_1; bidirectional. */
  "P0_1": "44",
  /** Physical pin 45: P0_7; bidirectional. */
  "P0_7": "45",
  /** Physical pin 46: P1_2/TDI_CPU/SCL; bidirectional. */
  "P1_2/TDI_CPU/SCL": "46",
  /** Physical pin 47: P1_3/TCK_CPU/SDA; bidirectional. */
  "P1_3/TCK_CPU/SDA": "47",
  /** Physical pin 48: P3_7/UART_CTS; bidirectional. */
  "P3_7/UART_CTS": "48",
  /** Physical pin 49: P0_0/UART_TX_IND; bidirectional. */
  "P0_0/UART_TX_IND": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFD77101 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: RESET/SWDIO; bidirectional. */
  "RESET/SWDIO": "8",
  /** Physical pin 9: FACTORY/SWDCLK; input. */
  "FACTORY/SWDCLK": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: P0.19; bidirectional. */
  "P0.19": "11",
  /** Physical pin 12: P0.17; bidirectional. */
  "P0.17": "12",
  /** Physical pin 13: P0.18; bidirectional. */
  "P0.18": "13",
  /** Physical pin 14: P0.16; bidirectional. */
  "P0.16": "14",
  /** Physical pin 15: P0.15; bidirectional. */
  "P0.15": "15",
  /** Physical pin 16: P0.12; bidirectional. */
  "P0.12": "16",
  /** Physical pin 17: P0.11; bidirectional. */
  "P0.11": "17",
  /** Physical pin 18: P0.09; bidirectional. */
  "P0.09": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: P0.08; bidirectional. */
  "P0.08": "20",
  /** Physical pin 21: P0.05/AIN6; bidirectional. */
  "P0.05/AIN6": "21",
  /** Physical pin 22: P0.03/AIN4; bidirectional. */
  "P0.03/AIN4": "22",
  /** Physical pin 23: P0.01/AIN2; bidirectional. */
  "P0.01/AIN2": "23",
  /** Physical pin 24: P0.02/AIN3; bidirectional. */
  "P0.02/AIN3": "24",
  /** Physical pin 25: P0.00/AREF0; bidirectional. */
  "P0.00/AREF0": "25",
  /** Physical pin 26: P0.07; bidirectional. */
  "P0.07": "26",
  /** Physical pin 27: P0.10; bidirectional. */
  "P0.10": "27",
  /** Physical pin 28: P0.13; bidirectional. */
  "P0.13": "28",
  /** Physical pin 29: P0.14; bidirectional. */
  "P0.14": "29",
  /** Physical pin 30: GND; power_in. */
  "GND_30": "30",
  /** Physical pin 31: P0.06/AREF1/AIN7; bidirectional. */
  "P0.06/AREF1/AIN7": "31",
  /** Physical pin 32: P0.04/AIN5; bidirectional. */
  "P0.04/AIN5": "32",
  /** Physical pin 33: P0.20; bidirectional. */
  "P0.20": "33",
  /** Physical pin 34: P0.23; bidirectional. */
  "P0.23": "34",
  /** Physical pin 35: P0.24; bidirectional. */
  "P0.24": "35",
  /** Physical pin 36: P0.21; bidirectional. */
  "P0.21": "36",
  /** Physical pin 37: P0.22; bidirectional. */
  "P0.22": "37",
  /** Physical pin 38: P0.25; bidirectional. */
  "P0.25": "38",
  /** Physical pin 39: P0.28; bidirectional. */
  "P0.28": "39",
  /** Physical pin 40: P0.29; bidirectional. */
  "P0.29": "40",
  /** Physical pin 41: P0.30; bidirectional. */
  "P0.30": "41",
  /** Physical pin 42: GND; power_in. */
  "GND_42": "42",
  /** Physical pin 43: GND; power_in. */
  "GND_43": "43",
  /** Physical pin 44: GND; power_in. */
  "GND_44": "44",
  /** Physical pin 45: GND; power_in. */
  "GND_45": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RN42 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: SPI_MOSI; input. */
  "SPI_MOSI": "2",
  /** Physical pin 3: GPIO6; input. */
  "GPIO6": "3",
  /** Physical pin 4: GPIO7; bidirectional. */
  "GPIO7": "4",
  /** Physical pin 5: RESET; input. */
  "RESET": "5",
  /** Physical pin 6: SPI_CLK; input. */
  "SPI_CLK": "6",
  /** Physical pin 7: PCM_CLK; bidirectional. */
  "PCM_CLK": "7",
  /** Physical pin 8: PCM_SYNC; bidirectional. */
  "PCM_SYNC": "8",
  /** Physical pin 9: PCM_IN; input. */
  "PCM_IN": "9",
  /** Physical pin 10: PCM_OUT; output. */
  "PCM_OUT": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: UART_RX; input. */
  "UART_RX": "13",
  /** Physical pin 14: UART_TX; output. */
  "UART_TX": "14",
  /** Physical pin 15: UART_RTS; output. */
  "UART_RTS": "15",
  /** Physical pin 16: UART_CTS; input. */
  "UART_CTS": "16",
  /** Physical pin 17: USB_D+; bidirectional. */
  "USB_D+": "17",
  /** Physical pin 18: USB_D-; bidirectional. */
  "USB_D-": "18",
  /** Physical pin 19: GPIO2; bidirectional. */
  "GPIO2": "19",
  /** Physical pin 20: GPIO3; input. */
  "GPIO3": "20",
  /** Physical pin 21: GPIO5; bidirectional. */
  "GPIO5": "21",
  /** Physical pin 22: GPIO4; bidirectional. */
  "GPIO4": "22",
  /** Physical pin 23: SPI_CSB; input. */
  "SPI_CSB": "23",
  /** Physical pin 24: SPI_MISO; output. */
  "SPI_MISO": "24",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: AIO0; input. */
  "AIO0": "30",
  /** Physical pin 31: GPIO8; output. */
  "GPIO8": "31",
  /** Physical pin 32: GPIO9; bidirectional. */
  "GPIO9": "32",
  /** Physical pin 33: GPIO10; bidirectional. */
  "GPIO10": "33",
  /** Physical pin 34: GPIO11; bidirectional. */
  "GPIO11": "34",
  /** Physical pin 35: AIO1; input. */
  "AIO1": "35",
  /** Physical pin 36: SHIELD; input. */
  "SHIELD": "36",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RN42N extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: SPI_MOSI; input. */
  "SPI_MOSI": "2",
  /** Physical pin 3: GPIO6; input. */
  "GPIO6": "3",
  /** Physical pin 4: GPIO7; bidirectional. */
  "GPIO7": "4",
  /** Physical pin 5: RESET; input. */
  "RESET": "5",
  /** Physical pin 6: SPI_CLK; input. */
  "SPI_CLK": "6",
  /** Physical pin 7: PCM_CLK; bidirectional. */
  "PCM_CLK": "7",
  /** Physical pin 8: PCM_SYNC; bidirectional. */
  "PCM_SYNC": "8",
  /** Physical pin 9: PCM_IN; input. */
  "PCM_IN": "9",
  /** Physical pin 10: PCM_OUT; output. */
  "PCM_OUT": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: UART_RX; input. */
  "UART_RX": "13",
  /** Physical pin 14: UART_TX; output. */
  "UART_TX": "14",
  /** Physical pin 15: UART_RTS; output. */
  "UART_RTS": "15",
  /** Physical pin 16: UART_CTS; input. */
  "UART_CTS": "16",
  /** Physical pin 17: USB_D+; bidirectional. */
  "USB_D+": "17",
  /** Physical pin 18: USB_D-; bidirectional. */
  "USB_D-": "18",
  /** Physical pin 19: GPIO2; bidirectional. */
  "GPIO2": "19",
  /** Physical pin 20: GPIO3; input. */
  "GPIO3": "20",
  /** Physical pin 21: GPIO5; bidirectional. */
  "GPIO5": "21",
  /** Physical pin 22: GPIO4; bidirectional. */
  "GPIO4": "22",
  /** Physical pin 23: SPI_CSB; input. */
  "SPI_CSB": "23",
  /** Physical pin 24: SPI_MISO; output. */
  "SPI_MISO": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: RF_ANT; bidirectional. */
  "RF_ANT": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: AIO0; input. */
  "AIO0": "30",
  /** Physical pin 31: GPIO8; output. */
  "GPIO8": "31",
  /** Physical pin 32: GPIO9; bidirectional. */
  "GPIO9": "32",
  /** Physical pin 33: GPIO10; bidirectional. */
  "GPIO10": "33",
  /** Physical pin 34: GPIO11; bidirectional. */
  "GPIO11": "34",
  /** Physical pin 35: AIO1; input. */
  "AIO1": "35",
  /** Physical pin 36: SHIELD; input. */
  "SHIELD": "36",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RN4871 extends Component.withPins({
  /** Physical pin 1: BT_RF; output. */
  "BT_RF": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: P1_2; bidirectional. */
  "P1_2": "3",
  /** Physical pin 4: P1_3; bidirectional. */
  "P1_3": "4",
  /** Physical pin 5: P1_7; bidirectional. */
  "P1_7": "5",
  /** Physical pin 6: P1_6; bidirectional. */
  "P1_6": "6",
  /** Physical pin 7: UART_RX; input. */
  "UART_RX": "7",
  /** Physical pin 8: UART_TX; output. */
  "UART_TX": "8",
  /** Physical pin 9: P3_6; bidirectional. */
  "P3_6": "9",
  /** Physical pin 10: RST; input. */
  "RST": "10",
  /** Physical pin 11: P0_0; bidirectional. */
  "P0_0": "11",
  /** Physical pin 12: P0_2; bidirectional. */
  "P0_2": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: VBAT; power_in. */
  "VBAT": "14",
  /** Physical pin 15: P2_7; bidirectional. */
  "P2_7": "15",
  /** Physical pin 16: P2_0; input. */
  "P2_0": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SPBTLE_RF extends Component.withPins({
  /** Physical pin 1: NC/EXT_LPCLK; input. */
  "NC/EXT_LPCLK": "1",
  /** Physical pin 2: NC/GPIO2; bidirectional. */
  "NC/GPIO2": "2",
  /** Physical pin 3: NC/ANA_TEST; input. */
  "NC/ANA_TEST": "3",
  /** Physical pin 4: SPI_IRQ; output. */
  "SPI_IRQ": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: SPI_CLK; input. */
  "SPI_CLK": "7",
  /** Physical pin 8: SPI_MISO; output. */
  "SPI_MISO": "8",
  /** Physical pin 9: SPI_MOSI; input. */
  "SPI_MOSI": "9",
  /** Physical pin 10: SPI_~{CS}; input. */
  "SPI_~{CS}": "10",
  /** Physical pin 11: ~{BT_RESET}; input. */
  "~{BT_RESET}": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SPBTLE_RF0 extends Component.withPins({
  /** Physical pin 1: NC/EXT_LPCLK; input. */
  "NC/EXT_LPCLK": "1",
  /** Physical pin 2: NC/GPIO2; bidirectional. */
  "NC/GPIO2": "2",
  /** Physical pin 3: NC/ANA_TEST; input. */
  "NC/ANA_TEST": "3",
  /** Physical pin 4: SPI_IRQ; output. */
  "SPI_IRQ": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: SPI_CLK; input. */
  "SPI_CLK": "7",
  /** Physical pin 8: SPI_MISO; output. */
  "SPI_MISO": "8",
  /** Physical pin 9: SPI_MOSI; input. */
  "SPI_MOSI": "9",
  /** Physical pin 10: SPI_~{CS}; input. */
  "SPI_~{CS}": "10",
  /** Physical pin 11: ~{BT_RESET}; input. */
  "~{BT_RESET}": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class nRF8001 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: DEC1; bidirectional. */
  "DEC1": "2",
  /** Physical pin 3: DEC2; bidirectional. */
  "DEC2": "3",
  /** Physical pin 4: XL2; bidirectional. */
  "XL2": "4",
  /** Physical pin 5: XL1; bidirectional. */
  "XL1": "5",
  /** Physical pin 6: ACTIVE; bidirectional. */
  "ACTIVE": "6",
  /** Physical pin 7: TXD; output. */
  "TXD": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD_9": "9",
  /** Physical pin 10: RXD; input. */
  "RXD": "10",
  /** Physical pin 11: SCK; input. */
  "SCK": "11",
  /** Physical pin 12: REQN; bidirectional. */
  "REQN": "12",
  /** Physical pin 13: MOSI; input. */
  "MOSI": "13",
  /** Physical pin 14: MISO; output. */
  "MISO": "14",
  /** Physical pin 15: N/C; no_connect. */
  "N/C": "15",
  /** Physical pin 16: RDYN; bidirectional. */
  "RDYN": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS_17": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: RESET; input. */
  "RESET": "19",
  /** Physical pin 20: VDD_PA; output. */
  "VDD_PA": "20",
  /** Physical pin 21: ANT1; bidirectional. */
  "ANT1": "21",
  /** Physical pin 22: ANT2; bidirectional. */
  "ANT2": "22",
  /** Physical pin 23: VSS; power_in. */
  "VSS_23": "23",
  /** Physical pin 24: AVDD; power_in. */
  "AVDD_24": "24",
  /** Physical pin 25: IREF; input. */
  "IREF": "25",
  /** Physical pin 26: AVDD; power_in. */
  "AVDD_26": "26",
  /** Physical pin 27: XC2; bidirectional. */
  "XC2": "27",
  /** Physical pin 28: XC1; bidirectional. */
  "XC1": "28",
  /** Physical pin 29: AVDD; power_in. */
  "AVDD_29": "29",
  /** Physical pin 30: VSS; power_in. */
  "VSS_30": "30",
  /** Physical pin 31: VSS; power_in. */
  "VSS_31": "31",
  /** Physical pin 32: DCC; bidirectional. */
  "DCC": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
  override schema = "RF_Bluetooth:nRF8001";
  override referencePrefix = "U";
}

