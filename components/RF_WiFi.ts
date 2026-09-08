// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * WiFi IEEE802.11b/g/n with Ethernet Module, UART, GPIO
 *
 * KiCad symbol: `RF_WiFi:HF-A11-SMT`. Reference prefix: `U`.
 * @see http://www.hi-flying.com/index.php?route=tool/upload/download&code=190ec6c62d497905ed783d140f8e5af7a753b8ab
 * Keywords: WiFi IEEE802.11 b/g/n.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HF_A11_SMT extends Component.withPins({
  /** Physical pin 1: 3.3V; power_in. */
  "3.3V_1": "1",
  /** Physical pin 2: 3.3V; power_in. */
  "3.3V_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: UART_TXD; output. */
  "UART_TXD": "4",
  /** Physical pin 5: UART_RXD; input. */
  "UART_RXD": "5",
  /** Physical pin 6: UART_RTS; output. */
  "UART_RTS": "6",
  /** Physical pin 7: UART_CTS; input. */
  "UART_CTS": "7",
  /** Physical pin 8: TX+; passive. */
  "TX+": "8",
  /** Physical pin 9: TX-; passive. */
  "TX-": "9",
  /** Physical pin 10: RX+; passive. */
  "RX+": "10",
  /** Physical pin 11: RX-; passive. */
  "RX-": "11",
  /** Physical pin 14: ~{LINK}; output. */
  "~{LINK}": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: ~{READY}; output. */
  "~{READY}": "16",
  /** Physical pin 17: ~{RELOAD}; input. */
  "~{RELOAD}": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: UART1_RXD; input. */
  "UART1_RXD": "21",
  /** Physical pin 22: UART1_TXD; output. */
  "UART1_TXD": "22",
  /** Physical pin 23: 1.8VOUT; power_out. */
  "1.8VOUT": "23",
  /** Physical pin 24: GND; power_in. */
  "GND_24": "24",
  /** Physical pin 25: RF; passive. */
  "RF": "25",
  /** Physical pin 26: GND; power_in. */
  "GND_26": "26",
}) {
  override schema = "RF_WiFi:HF-A11-SMT";
  override referencePrefix = "U";
}

/**
 * 802.11 b/g/n Wi-Fi Module
 *
 * KiCad symbol: `RF_WiFi:USR-C322`. Reference prefix: `U`.
 * Footprint filters: USR?C322*.
 * @see https://www.usriot.com/download/WIFI/USR-C322%20User%20Manual%20V2.3.pdf
 * Keywords: WiFi IEEE802.11 b/g/n.
 * Default footprint: RF_WiFi:USR-C322.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class USR_C322 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GPIO0; bidirectional. */
  "GPIO0": "2",
  /** Physical pin 3: GPIO1; bidirectional. */
  "GPIO1": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: SOP2; passive. */
  "SOP2": "5",
  /** Physical pin 6: SOP1; passive. */
  "SOP1": "6",
  /** Physical pin 7: SOP0; passive. */
  "SOP0": "7",
  /** Physical pin 8: ANA_DC-DC; passive. */
  "ANA_DC-DC": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: VBT_CC; power_in. */
  "VBT_CC": "13",
  /** Physical pin 14: VDD_ANA2; power_in. */
  "VDD_ANA2": "14",
  /** Physical pin 15: GPIO2; bidirectional. */
  "GPIO2": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GPIO3; bidirectional. */
  "GPIO3": "18",
  /** Physical pin 19: UART0_TX; output. */
  "UART0_TX": "19",
  /** Physical pin 20: UART0_RX; input. */
  "UART0_RX": "20",
  /** Physical pin 21: ~{RELOAD}; input. */
  "~{RELOAD}": "21",
  /** Physical pin 22: ~{READY}; open_collector. */
  "~{READY}": "22",
  /** Physical pin 23: ~{LINK}; open_collector. */
  "~{LINK}": "23",
  /** Physical pin 24: UART0_CTS; input. */
  "UART0_CTS": "24",
  /** Physical pin 25: UART0_RTS; output. */
  "UART0_RTS": "25",
  /** Physical pin 26: GPIO4; bidirectional. */
  "GPIO4": "26",
  /** Physical pin 27: GPIO5; bidirectional. */
  "GPIO5": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: UART1_TX; output. */
  "UART1_TX": "30",
  /** Physical pin 31: UART1_RX; input. */
  "UART1_RX": "31",
  /** Physical pin 32: GPIO6; bidirectional. */
  "GPIO6": "32",
  /** Physical pin 33: GPIO7; bidirectional. */
  "GPIO7": "33",
  /** Physical pin 34: GPIO8; bidirectional. */
  "GPIO8": "34",
  /** Physical pin 35: GPIO9; bidirectional. */
  "GPIO9": "35",
  /** Physical pin 36: GPIO10; bidirectional. */
  "GPIO10": "36",
  /** Physical pin 37: GPIO11; bidirectional. */
  "GPIO11": "37",
  /** Physical pin 38: GPIO12; bidirectional. */
  "GPIO12": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: GPIO13; bidirectional. */
  "GPIO13": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: NC; no_connect. */
  "NC_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
}) {
  override schema = "RF_WiFi:USR-C322";
  override referencePrefix = "U";
}

