// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * WiFi IEEE802.11b/g/n with Ethernet Module, UART, GPIO
 *
 * KiCad symbol: `RF_WiFi:HF-A11-SMT`. Reference prefix: `U`.
 * @see http://www.hi-flying.com/index.php?route=tool/upload/download&code=190ec6c62d497905ed783d140f8e5af7a753b8ab
 * Keywords: WiFi IEEE802.11 b/g/n.
 */
export class HF_A11_SMT extends Component.withPins({
  "3.3V_1": "1",
  "3.3V_2": "2",
  "GND_3": "3",
  "UART_TXD": "4",
  "UART_RXD": "5",
  "UART_RTS": "6",
  "UART_CTS": "7",
  "TX+": "8",
  "TX-": "9",
  "RX+": "10",
  "RX-": "11",
  "~{LINK}": "14",
  "~{RESET}": "15",
  "~{READY}": "16",
  "~{RELOAD}": "17",
  "GND_18": "18",
  "GND_19": "19",
  "GND_20": "20",
  "UART1_RXD": "21",
  "UART1_TXD": "22",
  "1.8VOUT": "23",
  "GND_24": "24",
  "RF": "25",
  "GND_26": "26",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "3.3V_1": "power_in", "3.3V_2": "power_in", GND_3: "power_in", UART_TXD: "output", UART_RXD: "input", UART_RTS: "output", UART_CTS: "input", "TX+": "passive", "TX-": "passive", "RX+": "passive", "RX-": "passive", "~{LINK}": "output", "~{RESET}": "input", "~{READY}": "output", "~{RELOAD}": "input", GND_18: "power_in", GND_19: "power_in", GND_20: "power_in", UART1_RXD: "input", UART1_TXD: "output", "1.8VOUT": "power_out", GND_24: "power_in", RF: "passive", GND_26: "power_in", ...opts.pinTypes } });
  }
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
 */
export class USR_C322 extends Component.withPins({
  "GND_1": "1",
  "GPIO0": "2",
  "GPIO1": "3",
  "~{RESET}": "4",
  "SOP2": "5",
  "SOP1": "6",
  "SOP0": "7",
  "ANA_DC-DC": "8",
  "NC_9": "9",
  "NC_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "VBT_CC": "13",
  "VDD_ANA2": "14",
  "GPIO2": "15",
  "NC_16": "16",
  "GND_17": "17",
  "GPIO3": "18",
  "UART0_TX": "19",
  "UART0_RX": "20",
  "~{RELOAD}": "21",
  "~{READY}": "22",
  "~{LINK}": "23",
  "UART0_CTS": "24",
  "UART0_RTS": "25",
  "GPIO4": "26",
  "GPIO5": "27",
  "GND_28": "28",
  "GND_29": "29",
  "UART1_TX": "30",
  "UART1_RX": "31",
  "GPIO6": "32",
  "GPIO7": "33",
  "GPIO8": "34",
  "GPIO9": "35",
  "GPIO10": "36",
  "GPIO11": "37",
  "GPIO12": "38",
  "NC_39": "39",
  "NC_40": "40",
  "GPIO13": "41",
  "NC_42": "42",
  "NC_43": "43",
  "GND_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", "~{RESET}": "input", SOP2: "passive", SOP1: "passive", SOP0: "passive", "ANA_DC-DC": "passive", NC_9: "no_connect", NC_10: "no_connect", GND_11: "passive", GND_12: "passive", VBT_CC: "power_in", VDD_ANA2: "power_in", GPIO2: "bidirectional", NC_16: "no_connect", GND_17: "passive", GPIO3: "bidirectional", UART0_TX: "output", UART0_RX: "input", "~{RELOAD}": "input", "~{READY}": "open_collector", "~{LINK}": "open_collector", UART0_CTS: "input", UART0_RTS: "output", GPIO4: "bidirectional", GPIO5: "bidirectional", GND_28: "passive", GND_29: "passive", UART1_TX: "output", UART1_RX: "input", GPIO6: "bidirectional", GPIO7: "bidirectional", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", NC_39: "no_connect", NC_40: "no_connect", GPIO13: "bidirectional", NC_42: "no_connect", NC_43: "no_connect", GND_44: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_WiFi:USR-C322";
  override referencePrefix = "U";
}
