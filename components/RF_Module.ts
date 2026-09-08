// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * L-band satellite communication Astronode S module
 *
 * KiCad symbol: `RF_Module:AST50147-xx`. Reference prefix: `U`.
 * Footprint filters: Astrocast*AST50147*.
 * @see https://docs.astrocast.com/dl/0532-DOC-M2M-ASTRO-Astronode_S-Datasheet.pdf
 * Keywords: RF module Astrocast radio Astronode .
 * Default footprint: RF_Module:Astrocast_AST50147-00.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AST50147_xx extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: VDD; passive. */
  "VDD_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: EVENT_NOTIF; output. */
  "EVENT_NOTIF": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: ANTN_USE; output. */
  "ANTN_USE": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: WAKEUP; input. */
  "WAKEUP": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: TXD; output. */
  "TXD": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: RXD; input. */
  "RXD": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: RESET; input. */
  "RESET": "14",
  /** Physical pin 15: GND_RF; power_in. */
  "GND_RF_15": "15",
  /** Physical pin 16: GND_RF; passive. */
  "GND_RF_16": "16",
  /** Physical pin 17: ANTN_RF; passive. */
  "ANTN_RF": "17",
  /** Physical pin 18: GND_RF; passive. */
  "GND_RF_18": "18",
  /** Physical pin 19: GND_RF; passive. */
  "GND_RF_19": "19",
  /** Physical pin 20: RSVD; no_connect. */
  "RSVD_20": "20",
  /** Physical pin 21: RSVD; no_connect. */
  "RSVD_21": "21",
  /** Physical pin 22: RSVD; no_connect. */
  "RSVD_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: N.C.; no_connect. */
  "N.C._24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: N.C.; no_connect. */
  "N.C._26": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: N.C.; no_connect. */
  "N.C._28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: N.C.; no_connect. */
  "N.C._30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: N.C.; no_connect. */
  "N.C._32": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: N.C.; no_connect. */
  "N.C._34": "34",
  /** Physical pin 35: N.C.; no_connect. */
  "N.C._35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: RSVD; no_connect. */
  "RSVD_37": "37",
  /** Physical pin 38: RSVD; no_connect. */
  "RSVD_38": "38",
}) {
  override schema = "RF_Module:AST50147-xx";
  override referencePrefix = "U";
}

/**
 * RF Module, ATSAMR21, Zigbee 802.15.4, external antenna, SMD
 *
 * KiCad symbol: `RF_Module:ATSAMR21G18-MR210UA_NoRFPads`. Reference prefix: `U`.
 * Footprint filters: Atmel*ATSAMR21G18*MR210UA*NoRFPads*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/atmel-42475-atsamr21g18-mr210ua_datasheet.pdf
 * Keywords: Wireless Zigbee 802.15.4 ATSAMR21G18 AT45DB041E TECC508A.
 * Default footprint: RF_Module:Atmel_ATSAMR21G18-MR210UA_NoRFPads.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ATSAMR21G18_MR210UA_NoRFPads extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC_3": "3",
  /** Physical pin 4: VCC; passive. */
  "VCC_4": "4",
  /** Physical pin 5: ~{RST}; input. */
  "~{RST}": "5",
  /** Physical pin 6: PA17; bidirectional. */
  "PA17": "6",
  /** Physical pin 7: PA18; bidirectional. */
  "PA18": "7",
  /** Physical pin 8: PA16; bidirectional. */
  "PA16": "8",
  /** Physical pin 9: PA19; bidirectional. */
  "PA19": "9",
  /** Physical pin 10: PA28; bidirectional. */
  "PA28": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA07; bidirectional. */
  "PA07": "13",
  /** Physical pin 14: PA08; bidirectional. */
  "PA08": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: PA13; bidirectional. */
  "PA13": "17",
  /** Physical pin 18: PA12; bidirectional. */
  "PA12": "18",
  /** Physical pin 19: PA24; bidirectional. */
  "PA24": "19",
  /** Physical pin 20: PA25; bidirectional. */
  "PA25": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: PA15; bidirectional. */
  "PA15": "22",
  /** Physical pin 23: PA14; bidirectional. */
  "PA14": "23",
  /** Physical pin 24: PA4; bidirectional. */
  "PA4": "24",
  /** Physical pin 25: PA5; bidirectional. */
  "PA5": "25",
  /** Physical pin 26: PA6; bidirectional. */
  "PA6": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: PA30; bidirectional. */
  "PA30": "30",
  /** Physical pin 31: PA31; bidirectional. */
  "PA31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: ATECC508_GPIO; bidirectional. */
  "ATECC508_GPIO": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: PA23; bidirectional. */
  "PA23": "36",
  /** Physical pin 37: PA22; bidirectional. */
  "PA22": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
}) {
  override schema = "RF_Module:ATSAMR21G18-MR210UA_NoRFPads";
  override referencePrefix = "U";
}

/**
 * Ultra low power, Sigfox or custom, system in package transceiver, 868Mhz
 *
 * KiCad symbol: `RF_Module:AX-SIP-SFEU`. Reference prefix: `U`.
 * Footprint filters: OnSemi*SIP*6EP*9x7mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/AX-SIP-SFEU-D.PDF
 * Keywords: Sigfox SIP 868Mhz.
 * Default footprint: Package_DFN_QFN:OnSemi_SIP-38-6EP-9x7mm_P0.65mm_EP1.2x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AX_SIP_SFEU extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: ANT; passive. */
  "ANT": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: GPIO11/PC6; bidirectional. */
  "GPIO11/PC6": "10",
  /** Physical pin 11: GPIO10/PC5; bidirectional. */
  "GPIO10/PC5": "11",
  /** Physical pin 12: GPIO8/PC4; bidirectional. */
  "GPIO8/PC4": "12",
  /** Physical pin 13: GPIO7/PC3; bidirectional. */
  "GPIO7/PC3": "13",
  /** Physical pin 14: GPIO6/PC2; bidirectional. */
  "GPIO6/PC2": "14",
  /** Physical pin 15: GPIO5/PC1; bidirectional. */
  "GPIO5/PC1": "15",
  /** Physical pin 16: GPIO4/PC0; bidirectional. */
  "GPIO4/PC0": "16",
  /** Physical pin 17: CPULED; output. */
  "CPULED": "17",
  /** Physical pin 18: RADIOLED; output. */
  "RADIOLED": "18",
  /** Physical pin 19: GPIO9/PB3; bidirectional. */
  "GPIO9/PB3": "19",
  /** Physical pin 20: UART_TX; output. */
  "UART_TX": "20",
  /** Physical pin 21: UART_RX; input. */
  "UART_RX": "21",
  /** Physical pin 22: RX_LED; output. */
  "RX_LED": "22",
  /** Physical pin 23: TX_LED; output. */
  "TX_LED": "23",
  /** Physical pin 24: NC24; no_connect. */
  "NC24": "24",
  /** Physical pin 25: ~{RESET}; input. */
  "~{RESET}": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: VDD_IO; power_in. */
  "VDD_IO": "27",
  /** Physical pin 28: GPIO0/PA0; bidirectional. */
  "GPIO0/PA0": "28",
  /** Physical pin 29: GPIO1/PA1; bidirectional. */
  "GPIO1/PA1": "29",
  /** Physical pin 30: GPIO2/PA2; bidirectional. */
  "GPIO2/PA2": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: GPIO3/PA5; bidirectional. */
  "GPIO3/PA5": "33",
  /** Physical pin 34: GPIO12/PA6; bidirectional. */
  "GPIO12/PA6": "34",
  /** Physical pin 35: GPIO13/PA7; bidirectional. */
  "GPIO13/PA7": "35",
  /** Physical pin 36: GPIO14/PC7; bidirectional. */
  "GPIO14/PC7": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
}) {
  override schema = "RF_Module:AX-SIP-SFEU";
  override referencePrefix = "U";
}

/**
 * Ultra low power, Sigfox or custom, programmable system in package, 868Mhz
 *
 * KiCad symbol: `RF_Module:AX-SIP-SFEU-API`. Reference prefix: `U`.
 * Footprint filters: OnSemi*SIP*6EP*9x7mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/AX-SIP-SFEU-D.PDF
 * Keywords: Sigfox SIP 868Mhz.
 * Default footprint: Package_DFN_QFN:OnSemi_SIP-38-6EP-9x7mm_P0.65mm_EP1.2x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AX_SIP_SFEU_API extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: ANT; passive. */
  "ANT": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: GPIO11/PC6; bidirectional. */
  "GPIO11/PC6": "10",
  /** Physical pin 11: GPIO10/PC5; bidirectional. */
  "GPIO10/PC5": "11",
  /** Physical pin 12: GPIO8/PC4; bidirectional. */
  "GPIO8/PC4": "12",
  /** Physical pin 13: GPIO7/PC3; bidirectional. */
  "GPIO7/PC3": "13",
  /** Physical pin 14: GPIO6/PC2; bidirectional. */
  "GPIO6/PC2": "14",
  /** Physical pin 15: GPIO5/PC1; bidirectional. */
  "GPIO5/PC1": "15",
  /** Physical pin 16: GPIO4/PC0; bidirectional. */
  "GPIO4/PC0": "16",
  /** Physical pin 17: CPULED/PB0; output. */
  "CPULED/PB0": "17",
  /** Physical pin 18: RADIOLED/PB1; output. */
  "RADIOLED/PB1": "18",
  /** Physical pin 19: GPIO9/PB3; bidirectional. */
  "GPIO9/PB3": "19",
  /** Physical pin 20: UART_TX/PB4; output. */
  "UART_TX/PB4": "20",
  /** Physical pin 21: UART_RX/PB5; input. */
  "UART_RX/PB5": "21",
  /** Physical pin 22: DBG_DATA/PB6; bidirectional. */
  "DBG_DATA/PB6": "22",
  /** Physical pin 23: DBG_CLK/PB7; input. */
  "DBG_CLK/PB7": "23",
  /** Physical pin 24: DBG_EN; input. */
  "DBG_EN": "24",
  /** Physical pin 25: ~{RESET}; input. */
  "~{RESET}": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: VDD_IO; power_in. */
  "VDD_IO": "27",
  /** Physical pin 28: GPIO0/PA0; bidirectional. */
  "GPIO0/PA0": "28",
  /** Physical pin 29: GPIO1/PA1; bidirectional. */
  "GPIO1/PA1": "29",
  /** Physical pin 30: GPIO2/PA2; bidirectional. */
  "GPIO2/PA2": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: GPIO3/PA5; bidirectional. */
  "GPIO3/PA5": "33",
  /** Physical pin 34: GPIO12/PA6; bidirectional. */
  "GPIO12/PA6": "34",
  /** Physical pin 35: GPIO13/PA7; bidirectional. */
  "GPIO13/PA7": "35",
  /** Physical pin 36: GPIO14/PC7; bidirectional. */
  "GPIO14/PC7": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
}) {
  override schema = "RF_Module:AX-SIP-SFEU-API";
  override referencePrefix = "U";
}

/**
 * Ai-Thinker Ra-01 410-525 MHz LoRa Module, SPI interface, external antenna
 *
 * KiCad symbol: `RF_Module:Ai-Thinker-Ra-01`. Reference prefix: `U`.
 * Footprint filters: Ai?Thinker?Ra?01*.
 * @see http://wiki.ai-thinker.com/_media/lora/docs/c047ps01a1_ra-01_product_specification_v1.1.pdf
 * Keywords: Ra-01 LoRa.
 * Default footprint: RF_Module:Ai-Thinker-Ra-01-LoRa.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Ai_Thinker_Ra_01 extends Component.withPins({
  /** Physical pin 1: ANT; passive. */
  "ANT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: DIO0; bidirectional. */
  "DIO0": "5",
  /** Physical pin 6: DIO1; bidirectional. */
  "DIO1": "6",
  /** Physical pin 7: DIO2; bidirectional. */
  "DIO2": "7",
  /** Physical pin 8: DIO3; bidirectional. */
  "DIO3": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: DIO4; bidirectional. */
  "DIO4": "10",
  /** Physical pin 11: DIO5; bidirectional. */
  "DIO5": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: MISO; output. */
  "MISO": "13",
  /** Physical pin 14: MOSI; input. */
  "MOSI": "14",
  /** Physical pin 15: ~{NSS}; input. */
  "~{NSS}": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
}) {
  override schema = "RF_Module:Ai-Thinker-Ra-01";
  override referencePrefix = "U";
}

/**
 * Ai-Thinker Ra-02 410-525 MHz LoRa Module, SPI interface, U.FL antenna connector
 *
 * KiCad symbol: `RF_Module:Ai-Thinker-Ra-02`. Reference prefix: `U`.
 * Footprint filters: Ai?Thinker?Ra?01*.
 * @see http://wiki.ai-thinker.com/_media/lora/docs/c048ps01a1_ra-02_product_specification_v1.1.pdf
 * Keywords: Ra-02 LoRa.
 * Default footprint: RF_Module:Ai-Thinker-Ra-01-LoRa.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Ai_Thinker_Ra_02 extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: DIO0; bidirectional. */
  "DIO0": "5",
  /** Physical pin 6: DIO1; bidirectional. */
  "DIO1": "6",
  /** Physical pin 7: DIO2; bidirectional. */
  "DIO2": "7",
  /** Physical pin 8: DIO3; bidirectional. */
  "DIO3": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: DIO4; bidirectional. */
  "DIO4": "10",
  /** Physical pin 11: DIO5; bidirectional. */
  "DIO5": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: MISO; output. */
  "MISO": "13",
  /** Physical pin 14: MOSI; input. */
  "MOSI": "14",
  /** Physical pin 15: ~{NSS}; input. */
  "~{NSS}": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
}) {
  override schema = "RF_Module:Ai-Thinker-Ra-02";
  override referencePrefix = "U";
}

/**
 * LoRa/SigFox Module, STM32L082 MCU, Murata CMWX1ZZABZ
 *
 * KiCad symbol: `RF_Module:CMWX1ZZABZ-078`. Reference prefix: `U`.
 * Footprint filters: CMWX1ZZABZ*.
 * @see https://wireless.murata.com/RFM/data/type_abz.pdf
 * Keywords: iot lora sigfox.
 * Default footprint: RF_Module:CMWX1ZZABZ.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CMWX1ZZABZ_078 extends Component.withPins({
  /** Physical pin 1: PA12/USB_DP; bidirectional. */
  "PA12/USB_DP": "1",
  /** Physical pin 2: PA11/USB_DM; bidirectional. */
  "PA11/USB_DM": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD_USB; power_in. */
  "VDD_USB": "4",
  /** Physical pin 5: VDD_MCU; power_in. */
  "VDD_MCU": "5",
  /** Physical pin 6: VDD_RF; power_in. */
  "VDD_RF": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: DBG_SX1276_DIO2; bidirectional. */
  "DBG_SX1276_DIO2": "8",
  /** Physical pin 9: DBG_SX1276_DI03; bidirectional. */
  "DBG_SX1276_DI03": "9",
  /** Physical pin 10: SX1276_DIO4; bidirectional. */
  "SX1276_DIO4": "10",
  /** Physical pin 11: DBG_SX1276_DIO5; bidirectional. */
  "DBG_SX1276_DIO5": "11",
  /** Physical pin 12: DBG_SX1276_DIO1; bidirectional. */
  "DBG_SX1276_DIO1": "12",
  /** Physical pin 13: DBG_SX1276_DIO0; bidirectional. */
  "DBG_SX1276_DIO0": "13",
  /** Physical pin 14: PB15/SPI2_MOSI; bidirectional. */
  "PB15/SPI2_MOSI": "14",
  /** Physical pin 15: PB14/SPI2_MISO; bidirectional. */
  "PB14/SPI2_MISO": "15",
  /** Physical pin 16: PB13/SPI2_SCK; bidirectional. */
  "PB13/SPI2_SCK": "16",
  /** Physical pin 17: PB12/SPI2_NSS; bidirectional. */
  "PB12/SPI2_NSS": "17",
  /** Physical pin 18: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "18",
  /** Physical pin 19: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "19",
  /** Physical pin 20: PA8/MCO; bidirectional. */
  "PA8/MCO": "20",
  /** Physical pin 21: PA5/ADC5/DAC2; bidirectional. */
  "PA5/ADC5/DAC2": "21",
  /** Physical pin 22: PA4/ADC4/DAC1; bidirectional. */
  "PA4/ADC4/DAC1": "22",
  /** Physical pin 23: PA3/ADC3; bidirectional. */
  "PA3/ADC3": "23",
  /** Physical pin 24: PA2/ADC2; bidirectional. */
  "PA2/ADC2": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: ANT; passive. */
  "ANT": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: DBG_CRF1; passive. */
  "DBG_CRF1": "28",
  /** Physical pin 29: DBG_CRF3; passive. */
  "DBG_CRF3": "29",
  /** Physical pin 30: DGB_CRF2; passive. */
  "DGB_CRF2": "30",
  /** Physical pin 31: ~{STSAFE_RST}; passive. */
  "~{STSAFE_RST}": "31",
  /** Physical pin 32: VREF+; power_in. */
  "VREF+": "32",
  /** Physical pin 33: PA0/WKUP1; bidirectional. */
  "PA0/WKUP1": "33",
  /** Physical pin 34: ~{MCU_RST}; input. */
  "~{MCU_RST}": "34",
  /** Physical pin 35: PB8/I2C1_SCL; bidirectional. */
  "PB8/I2C1_SCL": "35",
  /** Physical pin 36: PB9/I2C1_SDA; bidirectional. */
  "PB9/I2C1_SDA": "36",
  /** Physical pin 37: PB2/LPTIM1_OUT; bidirectional. */
  "PB2/LPTIM1_OUT": "37",
  /** Physical pin 38: PB7/LPTIM1_IN2; bidirectional. */
  "PB7/LPTIM1_IN2": "38",
  /** Physical pin 39: PB6/LPTIM1_ETR; bidirectional. */
  "PB6/LPTIM1_ETR": "39",
  /** Physical pin 40: PB5/LPTIM1_IN1; bidirectional. */
  "PB5/LPTIM1_IN1": "40",
  /** Physical pin 41: PA13/SWDIO; bidirectional. */
  "PA13/SWDIO": "41",
  /** Physical pin 42: PA14/SWCLK; bidirectional. */
  "PA14/SWCLK": "42",
  /** Physical pin 43: BOOT0; input. */
  "BOOT0": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: PH1/OSC_OUT; bidirectional. */
  "PH1/OSC_OUT": "45",
  /** Physical pin 46: PH0/OSC_IN; bidirectional. */
  "PH0/OSC_IN": "46",
  /** Physical pin 47: TCXO_OUT; output. */
  "TCXO_OUT": "47",
  /** Physical pin 48: VDD_TCXO; power_in. */
  "VDD_TCXO": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: GND; passive. */
  "GND_52": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
}) {
  override schema = "RF_Module:CMWX1ZZABZ-078";
  override referencePrefix = "U";
}

/**
 * LoRa/SigFox Module, STM32L072 MCU, Murata CMWX1ZZABZ
 *
 * KiCad symbol: `RF_Module:CMWX1ZZABZ-091`. Reference prefix: `U`.
 * Footprint filters: CMWX1ZZABZ*.
 * @see https://wireless.murata.com/RFM/data/type_abz.pdf
 * Keywords: iot lora sigfox.
 * Default footprint: RF_Module:CMWX1ZZABZ.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CMWX1ZZABZ_091 extends Component.withPins({
  /** Physical pin 1: PA12/USB_DP; bidirectional. */
  "PA12/USB_DP": "1",
  /** Physical pin 2: PA11/USB_DM; bidirectional. */
  "PA11/USB_DM": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD_USB; power_in. */
  "VDD_USB": "4",
  /** Physical pin 5: VDD_MCU; power_in. */
  "VDD_MCU": "5",
  /** Physical pin 6: VDD_RF; power_in. */
  "VDD_RF": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: DBG_SX1276_DIO2; bidirectional. */
  "DBG_SX1276_DIO2": "8",
  /** Physical pin 9: DBG_SX1276_DI03; bidirectional. */
  "DBG_SX1276_DI03": "9",
  /** Physical pin 10: SX1276_DIO4; bidirectional. */
  "SX1276_DIO4": "10",
  /** Physical pin 11: DBG_SX1276_DIO5; bidirectional. */
  "DBG_SX1276_DIO5": "11",
  /** Physical pin 12: DBG_SX1276_DIO1; bidirectional. */
  "DBG_SX1276_DIO1": "12",
  /** Physical pin 13: DBG_SX1276_DIO0; bidirectional. */
  "DBG_SX1276_DIO0": "13",
  /** Physical pin 14: PB15/SPI2_MOSI; bidirectional. */
  "PB15/SPI2_MOSI": "14",
  /** Physical pin 15: PB14/SPI2_MISO; bidirectional. */
  "PB14/SPI2_MISO": "15",
  /** Physical pin 16: PB13/SPI2_SCK; bidirectional. */
  "PB13/SPI2_SCK": "16",
  /** Physical pin 17: PB12/SPI2_NSS; bidirectional. */
  "PB12/SPI2_NSS": "17",
  /** Physical pin 18: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "18",
  /** Physical pin 19: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "19",
  /** Physical pin 20: PA8/MCO; bidirectional. */
  "PA8/MCO": "20",
  /** Physical pin 21: PA5/ADC5/DAC2; bidirectional. */
  "PA5/ADC5/DAC2": "21",
  /** Physical pin 22: PA4/ADC4/DAC1; bidirectional. */
  "PA4/ADC4/DAC1": "22",
  /** Physical pin 23: PA3/ADC3; bidirectional. */
  "PA3/ADC3": "23",
  /** Physical pin 24: PA2/ADC2; bidirectional. */
  "PA2/ADC2": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: ANT; passive. */
  "ANT": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: DBG_CRF1; passive. */
  "DBG_CRF1": "28",
  /** Physical pin 29: DBG_CRF3; passive. */
  "DBG_CRF3": "29",
  /** Physical pin 30: DGB_CRF2; passive. */
  "DGB_CRF2": "30",
  /** Physical pin 31: ~{STSAFE_RST}; passive. */
  "~{STSAFE_RST}": "31",
  /** Physical pin 32: VREF+; power_in. */
  "VREF+": "32",
  /** Physical pin 33: PA0/WKUP1; bidirectional. */
  "PA0/WKUP1": "33",
  /** Physical pin 34: ~{MCU_RST}; input. */
  "~{MCU_RST}": "34",
  /** Physical pin 35: PB8/I2C1_SCL; bidirectional. */
  "PB8/I2C1_SCL": "35",
  /** Physical pin 36: PB9/I2C1_SDA; bidirectional. */
  "PB9/I2C1_SDA": "36",
  /** Physical pin 37: PB2/LPTIM1_OUT; bidirectional. */
  "PB2/LPTIM1_OUT": "37",
  /** Physical pin 38: PB7/LPTIM1_IN2; bidirectional. */
  "PB7/LPTIM1_IN2": "38",
  /** Physical pin 39: PB6/LPTIM1_ETR; bidirectional. */
  "PB6/LPTIM1_ETR": "39",
  /** Physical pin 40: PB5/LPTIM1_IN1; bidirectional. */
  "PB5/LPTIM1_IN1": "40",
  /** Physical pin 41: PA13/SWDIO; bidirectional. */
  "PA13/SWDIO": "41",
  /** Physical pin 42: PA14/SWCLK; bidirectional. */
  "PA14/SWCLK": "42",
  /** Physical pin 43: BOOT0; input. */
  "BOOT0": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: PH1/OSC_OUT; bidirectional. */
  "PH1/OSC_OUT": "45",
  /** Physical pin 46: PH0/OSC_IN; bidirectional. */
  "PH0/OSC_IN": "46",
  /** Physical pin 47: TCXO_OUT; output. */
  "TCXO_OUT": "47",
  /** Physical pin 48: VDD_TCXO; power_in. */
  "VDD_TCXO": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: GND; passive. */
  "GND_52": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
}) {
  override schema = "RF_Module:CMWX1ZZABZ-091";
  override referencePrefix = "U";
}

/**
 * D52M Module, nRF52832 SoC, ARM Cortex-M4F, 64kB RAM, 512kB Flash, 1.7-3.6V, M8-35
 *
 * KiCad symbol: `RF_Module:D52MxxM8`. Reference prefix: `U`.
 * Footprint filters: Garmin*M8*9.8x14.0mm*Layout6x6*P1.5mm*.
 * @see https://www.thisisant.com/assets/resources/D00001687_D52_Module_Datasheet.v.2.3_(Garmin).pdf
 * Keywords: RF Radio ANT Bluetooth BLE D52 nRF52 Garmin Canada Dynastream Nordic.
 * Default footprint: RF_Module:Garmin_M8-35_9.8x14.0mm_Layout6x6_P1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D52MxxM8 extends Component.withPins({
  /** Physical pin A2: VSS; power_in. */
  "VSS_A2": "A2",
  /** Physical pin A3: VSS; passive. */
  "VSS_A3": "A3",
  /** Physical pin A4: VSS; passive. */
  "VSS_A4": "A4",
  /** Physical pin A5: VSS; passive. */
  "VSS_A5": "A5",
  /** Physical pin A6: VSS; passive. */
  "VSS_A6": "A6",
  /** Physical pin B1: SWDIO; bidirectional. */
  "SWDIO": "B1",
  /** Physical pin B2: P012; bidirectional. */
  "P012": "B2",
  /** Physical pin B3: P015; bidirectional. */
  "P015": "B3",
  /** Physical pin B4: P020; bidirectional. */
  "P020": "B4",
  /** Physical pin B5: VCC; power_in. */
  "VCC_B5": "B5",
  /** Physical pin B6: VCC; passive. */
  "VCC_B6": "B6",
  /** Physical pin C1: SWDCLK; input. */
  "SWDCLK": "C1",
  /** Physical pin C2: NFC1/P009; bidirectional. */
  "NFC1/P009": "C2",
  /** Physical pin C3: NFC2/P010; bidirectional. */
  "NFC2/P010": "C3",
  /** Physical pin C4: P016; bidirectional. */
  "P016": "C4",
  /** Physical pin C5: VCC; passive. */
  "VCC_C5": "C5",
  /** Physical pin C6: VCC; passive. */
  "VCC_C6": "C6",
  /** Physical pin D1: P008; bidirectional. */
  "P008": "D1",
  /** Physical pin D2: P014; bidirectional. */
  "P014": "D2",
  /** Physical pin D3: P013; bidirectional. */
  "P013": "D3",
  /** Physical pin D4: P022; bidirectional. */
  "P022": "D4",
  /** Physical pin D5: P018; bidirectional. */
  "P018": "D5",
  /** Physical pin D6: P024; bidirectional. */
  "P024": "D6",
  /** Physical pin E1: P006; bidirectional. */
  "P006": "E1",
  /** Physical pin E2: AIN3/P005; bidirectional. */
  "AIN3/P005": "E2",
  /** Physical pin E3: AIN1/P003; bidirectional. */
  "AIN1/P003": "E3",
  /** Physical pin E4: AIN2/P004; bidirectional. */
  "AIN2/P004": "E4",
  /** Physical pin E5: AIN0/P002; bidirectional. */
  "AIN0/P002": "E5",
  /** Physical pin E6: P021/RESET; bidirectional. */
  "P021/RESET": "E6",
  /** Physical pin F1: P025; bidirectional. */
  "P025": "F1",
  /** Physical pin F2: AIN7/P031; bidirectional. */
  "AIN7/P031": "F2",
  /** Physical pin F3: AIN6/P030; bidirectional. */
  "AIN6/P030": "F3",
  /** Physical pin F4: AIN5/P029; bidirectional. */
  "AIN5/P029": "F4",
  /** Physical pin F5: AIN4/P028; bidirectional. */
  "AIN4/P028": "F5",
  /** Physical pin F6: P011; bidirectional. */
  "P011": "F6",
}) {
  override schema = "RF_Module:D52MxxM8";
  override referencePrefix = "U";
}

/**
 * IQRF common transceiver with PCB antenna, FSK modulation
 *
 * KiCad symbol: `RF_Module:TR-52DA`. Reference prefix: `U`.
 * Footprint filters: IQRF?TRx2DA?KON?SIM?01*.
 * @see https://iqrf.org/weben/downloads.php?id=213
 * Keywords: IQRF common transceiver, PCB antenna, FSK modulation.
 * Default footprint: RF_Module:IQRF_TRx2DA_KON-SIM-01.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TR_52DA extends Component.withPins({
  /** Physical pin C1: RA0/AN0/C12IN0; bidirectional. */
  "RA0/AN0/C12IN0": "C1",
  /** Physical pin C2: RC2/VOUT; bidirectional. */
  "RC2/VOUT": "C2",
  /** Physical pin C3: VIN; power_in. */
  "VIN": "C3",
  /** Physical pin C4: GND; power_in. */
  "GND": "C4",
  /** Physical pin C5: RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3; bidirectional. */
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  /** Physical pin C6: RC3/SCK/SCL; bidirectional. */
  "RC3/SCK/SCL": "C6",
  /** Physical pin C7: RC4/SDI/SDA; bidirectional. */
  "RC4/SDI/SDA": "C7",
  /** Physical pin C8: RC5/RC7/RX/SDO; bidirectional. */
  "RC5/RC7/RX/SDO": "C8",
}) {
  override schema = "RF_Module:TR-52DA";
  override referencePrefix = "U";
}

/**
 * IQRF data controlled transceiver with PCB antenna, FSK modulation
 *
 * KiCad symbol: `RF_Module:DCTR-52DA`. Reference prefix: `U`.
 * Footprint filters: IQRF?TRx2DA?KON?SIM?01*.
 * @see https://iqrf.org/weben/downloads.php?id=213
 * Keywords: IQRF data controlled transceiver, PCB antenna, FSK modulation.
 * Default footprint: RF_Module:IQRF_TRx2DA_KON-SIM-01.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DCTR_52DA extends Component.withPins({
  /** Physical pin C1: RA0/AN0/C12IN0; bidirectional. */
  "RA0/AN0/C12IN0": "C1",
  /** Physical pin C2: RC2/VOUT; bidirectional. */
  "RC2/VOUT": "C2",
  /** Physical pin C3: VIN; power_in. */
  "VIN": "C3",
  /** Physical pin C4: GND; power_in. */
  "GND": "C4",
  /** Physical pin C5: RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3; bidirectional. */
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  /** Physical pin C6: RC3/SCK/SCL; bidirectional. */
  "RC3/SCK/SCL": "C6",
  /** Physical pin C7: RC4/SDI/SDA; bidirectional. */
  "RC4/SDI/SDA": "C7",
  /** Physical pin C8: RC5/RC7/RX/SDO; bidirectional. */
  "RC5/RC7/RX/SDO": "C8",
}) {
  override schema = "RF_Module:DCTR-52DA";
  override referencePrefix = "U";
}

/**
 * IQRF data controlled transceiver with PCB antenna and thermometer, FSK modulation
 *
 * KiCad symbol: `RF_Module:DCTR-52DAT`. Reference prefix: `U`.
 * Footprint filters: IQRF?TRx2DA?KON?SIM?01*.
 * @see https://iqrf.org/weben/downloads.php?id=213
 * Keywords: IQRF data controlled transceiver, PCB antenna, thermometer, FSK modulation.
 * Default footprint: RF_Module:IQRF_TRx2DA_KON-SIM-01.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DCTR_52DAT extends Component.withPins({
  /** Physical pin C1: RA0/AN0/C12IN0; bidirectional. */
  "RA0/AN0/C12IN0": "C1",
  /** Physical pin C2: RC2/VOUT; bidirectional. */
  "RC2/VOUT": "C2",
  /** Physical pin C3: VIN; power_in. */
  "VIN": "C3",
  /** Physical pin C4: GND; power_in. */
  "GND": "C4",
  /** Physical pin C5: RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3; bidirectional. */
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  /** Physical pin C6: RC3/SCK/SCL; bidirectional. */
  "RC3/SCK/SCL": "C6",
  /** Physical pin C7: RC4/SDI/SDA; bidirectional. */
  "RC4/SDI/SDA": "C7",
  /** Physical pin C8: RC5/RC7/RX/SDO; bidirectional. */
  "RC5/RC7/RX/SDO": "C8",
}) {
  override schema = "RF_Module:DCTR-52DAT";
  override referencePrefix = "U";
}

/**
 * Ultra wide band RF module With ranging location capabilities
 *
 * KiCad symbol: `RF_Module:DWM1000`. Reference prefix: `DWM`.
 * Footprint filters: *DWM1000*.
 * @see https://www.decawave.com/sites/default/files/resources/dwm1000-datasheet-v1.3.pdf
 * Keywords: Decawave Qorvo UWB.
 * Default footprint: RF_Module:DWM1000.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DWM1000 extends Component.withPins({
  /** Physical pin 1: EXTON; output. */
  "EXTON": "1",
  /** Physical pin 2: WAKEUP; bidirectional. */
  "WAKEUP": "2",
  /** Physical pin 3: ~{RST}; bidirectional. */
  "~{RST}": "3",
  /** Physical pin 4: GPIO7; bidirectional. */
  "GPIO7": "4",
  /** Physical pin 5: VDDAON; power_in. */
  "VDDAON": "5",
  /** Physical pin 6: VDD3V3; power_in. */
  "VDD3V3_6": "6",
  /** Physical pin 7: VDD3V3; power_in. */
  "VDD3V3_7": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: GPIO6/EXTRXE/SPIHA; bidirectional. */
  "GPIO6/EXTRXE/SPIHA": "9",
  /** Physical pin 10: GPIO5/EXTTXE/SPIPOL; bidirectional. */
  "GPIO5/EXTTXE/SPIPOL": "10",
  /** Physical pin 11: GPIO4/EXTPA; bidirectional. */
  "GPIO4/EXTPA": "11",
  /** Physical pin 12: GPIO3/TXLED; bidirectional. */
  "GPIO3/TXLED": "12",
  /** Physical pin 13: GPIO2/RXLED; bidirectional. */
  "GPIO2/RXLED": "13",
  /** Physical pin 14: GPIO1/SFDLED; bidirectional. */
  "GPIO1/SFDLED": "14",
  /** Physical pin 15: GPIO0/RXOKLED; bidirectional. */
  "GPIO0/RXOKLED": "15",
  /** Physical pin 16: VSS; passive. */
  "VSS_16": "16",
  /** Physical pin 17: ~{SPICS}; input. */
  "~{SPICS}": "17",
  /** Physical pin 18: SPIMOSI; input. */
  "SPIMOSI": "18",
  /** Physical pin 19: SPIMISO; output. */
  "SPIMISO": "19",
  /** Physical pin 20: SPICLK; input. */
  "SPICLK": "20",
  /** Physical pin 21: VSS; passive. */
  "VSS_21": "21",
  /** Physical pin 22: IRQ/GPIO8; bidirectional. */
  "IRQ/GPIO8": "22",
  /** Physical pin 23: VSS; passive. */
  "VSS_23": "23",
  /** Physical pin 24: VSS; passive. */
  "VSS_24": "24",
}) {
  override schema = "RF_Module:DWM1000";
  override referencePrefix = "DWM";
}

/**
 * Ultra wide band RF module With ranging location capabilities, I2C, UART, SPI, +2.8V to +3.6V VCC
 *
 * KiCad symbol: `RF_Module:DWM1001`. Reference prefix: `U`.
 * Footprint filters: *DWM1001*.
 * @see https://www.decawave.com/sites/default/files/dwm1001_datasheet.pdf
 * Keywords: DWM1000  DecaWave RF ranging UWB.
 * Default footprint: RF_Module:DecaWave_DWM1001.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DWM1001 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: SWD_CLK; input. */
  "SWD_CLK": "2",
  /** Physical pin 3: SWD_DIO; bidirectional. */
  "SWD_DIO": "3",
  /** Physical pin 4: GPIO_10; bidirectional. */
  "GPIO_10": "4",
  /** Physical pin 5: GPIO_9; bidirectional. */
  "GPIO_9": "5",
  /** Physical pin 6: GPIO_12; bidirectional. */
  "GPIO_12": "6",
  /** Physical pin 7: GPIO_14; bidirectional. */
  "GPIO_14": "7",
  /** Physical pin 8: GPIO_22; bidirectional. */
  "GPIO_22": "8",
  /** Physical pin 9: GPIO_31; bidirectional. */
  "GPIO_31": "9",
  /** Physical pin 10: GPIO_30; bidirectional. */
  "GPIO_30": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: GPIO_27; bidirectional. */
  "GPIO_27": "13",
  /** Physical pin 14: I2C_SDA; bidirectional. */
  "I2C_SDA": "14",
  /** Physical pin 15: I2C_SCL; output. */
  "I2C_SCL": "15",
  /** Physical pin 16: GPIO_23; bidirectional. */
  "GPIO_23": "16",
  /** Physical pin 17: GPIO_13; bidirectional. */
  "GPIO_13": "17",
  /** Physical pin 18: UART_RX; input. */
  "UART_RX": "18",
  /** Physical pin 19: READY; output. */
  "READY": "19",
  /** Physical pin 20: UART_TX; output. */
  "UART_TX": "20",
  /** Physical pin 21: GPIO_1; bidirectional. */
  "GPIO_1": "21",
  /** Physical pin 22: GPIO_0; bidirectional. */
  "GPIO_0": "22",
  /** Physical pin 23: GPIO_15; bidirectional. */
  "GPIO_15": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: GPIO_8; bidirectional. */
  "GPIO_8": "25",
  /** Physical pin 26: SPIS_MISO; output. */
  "SPIS_MISO": "26",
  /** Physical pin 27: SPIS_MOSI; tri_state. */
  "SPIS_MOSI": "27",
  /** Physical pin 28: SPIS_CLK; input. */
  "SPIS_CLK": "28",
  /** Physical pin 29: ~{SPIS_CS}; input. */
  "~{SPIS_CS}": "29",
  /** Physical pin 30: GPIO_3; bidirectional. */
  "GPIO_3": "30",
  /** Physical pin 31: GPIO_2; bidirectional. */
  "GPIO_2": "31",
  /** Physical pin 32: BT_WAKE_UP; input. */
  "BT_WAKE_UP": "32",
  /** Physical pin 33: ~{RESET}; input. */
  "~{RESET}": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:DWM1001";
  override referencePrefix = "U";
}

/**
 * Ultra wide band RF module With ranging location capabilities
 *
 * KiCad symbol: `RF_Module:DWM3000`. Reference prefix: `DWM`.
 * Footprint filters: *DWM1000*.
 * @see https://www.qorvo.com/products/d/da008334
 * Keywords: DWM3000 Decawave Qorvo RF ranging UWB.
 * Default footprint: RF_Module:DWM1000.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DWM3000 extends Component.withPins({
  /** Physical pin 1: EXTON; output. */
  "EXTON": "1",
  /** Physical pin 2: WAKEUP; bidirectional. */
  "WAKEUP": "2",
  /** Physical pin 3: ~{RST}; bidirectional. */
  "~{RST}": "3",
  /** Physical pin 4: GPIO7; bidirectional. */
  "GPIO7": "4",
  /** Physical pin 5: VDDAON; power_in. */
  "VDDAON": "5",
  /** Physical pin 6: VDD3V3; power_in. */
  "VDD3V3_6": "6",
  /** Physical pin 7: VDD3V3; power_in. */
  "VDD3V3_7": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: GPIO6/EXTRXE/SPIHA; bidirectional. */
  "GPIO6/EXTRXE/SPIHA": "9",
  /** Physical pin 10: GPIO5/EXTTXE/SPIPOL; bidirectional. */
  "GPIO5/EXTTXE/SPIPOL": "10",
  /** Physical pin 11: GPIO4/EXTPA; bidirectional. */
  "GPIO4/EXTPA": "11",
  /** Physical pin 12: GPIO3/TXLED; bidirectional. */
  "GPIO3/TXLED": "12",
  /** Physical pin 13: GPIO2/RXLED; bidirectional. */
  "GPIO2/RXLED": "13",
  /** Physical pin 14: GPIO1/SFDLED; bidirectional. */
  "GPIO1/SFDLED": "14",
  /** Physical pin 15: GPIO0/RXOKLED; bidirectional. */
  "GPIO0/RXOKLED": "15",
  /** Physical pin 16: VSS; passive. */
  "VSS_16": "16",
  /** Physical pin 17: ~{SPICS}; input. */
  "~{SPICS}": "17",
  /** Physical pin 18: SPIMOSI; input. */
  "SPIMOSI": "18",
  /** Physical pin 19: SPIMISO; output. */
  "SPIMISO": "19",
  /** Physical pin 20: SPICLK; input. */
  "SPICLK": "20",
  /** Physical pin 21: VSS; passive. */
  "VSS_21": "21",
  /** Physical pin 22: IRQ/GPIO8; bidirectional. */
  "IRQ/GPIO8": "22",
  /** Physical pin 23: VSS; passive. */
  "VSS_23": "23",
  /** Physical pin 24: VSS; passive. */
  "VSS_24": "24",
}) {
  override schema = "RF_Module:DWM3000";
  override referencePrefix = "DWM";
}

/**
 * Zigbee RF Module
 *
 * KiCad symbol: `RF_Module:E18-MS1-PCB`. Reference prefix: `U`.
 * Footprint filters: E18-MS1-PCB*.
 * @see http://www.cdebyte.com/en/downpdf.aspx?id=122
 * Keywords: Zigbee, RF, 802.15.4.
 * Default footprint: RF_Module:E18-MS1-PCB.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class E18_MS1_PCB extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: P2.2; bidirectional. */
  "P2.2": "3",
  /** Physical pin 4: P2.1; bidirectional. */
  "P2.1": "4",
  /** Physical pin 5: P2.0; bidirectional. */
  "P2.0": "5",
  /** Physical pin 6: P1.7; bidirectional. */
  "P1.7": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: P1.5; bidirectional. */
  "P1.5": "10",
  /** Physical pin 11: P1.4; bidirectional. */
  "P1.4": "11",
  /** Physical pin 12: P1.3; bidirectional. */
  "P1.3": "12",
  /** Physical pin 13: P1.2; bidirectional. */
  "P1.2": "13",
  /** Physical pin 14: P1.1; bidirectional. */
  "P1.1": "14",
  /** Physical pin 15: P1.0; bidirectional. */
  "P1.0": "15",
  /** Physical pin 16: P0.7; bidirectional. */
  "P0.7": "16",
  /** Physical pin 17: P0.6; bidirectional. */
  "P0.6": "17",
  /** Physical pin 18: P0.5; bidirectional. */
  "P0.5": "18",
  /** Physical pin 19: P0.4; bidirectional. */
  "P0.4": "19",
  /** Physical pin 20: P0.3; bidirectional. */
  "P0.3": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.1; bidirectional. */
  "P0.1": "22",
  /** Physical pin 23: P0.0; bidirectional. */
  "P0.0": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
}) {
  override schema = "RF_Module:E18-MS1-PCB";
  override referencePrefix = "U";
}

/**
 * nRF52832 BLE5 Module
 *
 * KiCad symbol: `RF_Module:E73-2G4M04S-52832`. Reference prefix: `U`.
 * Footprint filters: E73*2G4M04S*.
 * @see http://www.cdebyte.com/en/downpdf.aspx?id=243
 * Keywords: BLE5, BLE, nRF52832.
 * Default footprint: RF_Module:E73-2G4M04S.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class E73_2G4M04S_52832 extends Component.withPins({
  /** Physical pin 0: GND; power_in. */
  "GND_0": "0",
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: DEC2; passive. */
  "DEC2": "3",
  /** Physical pin 4: DEC3; passive. */
  "DEC3": "4",
  /** Physical pin 5: P0.25; bidirectional. */
  "P0.25": "5",
  /** Physical pin 6: P0.26; bidirectional. */
  "P0.26": "6",
  /** Physical pin 7: P0.27; bidirectional. */
  "P0.27": "7",
  /** Physical pin 8: AIN4/P0.28; bidirectional. */
  "AIN4/P0.28": "8",
  /** Physical pin 9: AIN5/P0.29; bidirectional. */
  "AIN5/P0.29": "9",
  /** Physical pin 10: AIN6/P0.30; bidirectional. */
  "AIN6/P0.30": "10",
  /** Physical pin 11: AIN7/P0.31; bidirectional. */
  "AIN7/P0.31": "11",
  /** Physical pin 12: DEC4; passive. */
  "DEC4": "12",
  /** Physical pin 13: DCC; power_out. */
  "DCC": "13",
  /** Physical pin 14: DEC1; passive. */
  "DEC1": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: AIN0/P0.02; bidirectional. */
  "AIN0/P0.02": "17",
  /** Physical pin 18: AIN1/P0.03; bidirectional. */
  "AIN1/P0.03": "18",
  /** Physical pin 19: AIN2/P0.04; bidirectional. */
  "AIN2/P0.04": "19",
  /** Physical pin 20: AIN3/P0.05; bidirectional. */
  "AIN3/P0.05": "20",
  /** Physical pin 21: P0.06; bidirectional. */
  "P0.06": "21",
  /** Physical pin 22: P0.07; bidirectional. */
  "P0.07": "22",
  /** Physical pin 23: P0.08; bidirectional. */
  "P0.08": "23",
  /** Physical pin 24: NFC1/P0.09; bidirectional. */
  "NFC1/P0.09": "24",
  /** Physical pin 25: NFC2/P0.10; bidirectional. */
  "NFC2/P0.10": "25",
  /** Physical pin 26: P0.11; bidirectional. */
  "P0.11": "26",
  /** Physical pin 27: P0.12; bidirectional. */
  "P0.12": "27",
  /** Physical pin 28: P0.13; bidirectional. */
  "P0.13": "28",
  /** Physical pin 29: P0.14; bidirectional. */
  "P0.14": "29",
  /** Physical pin 30: P0.15; bidirectional. */
  "P0.15": "30",
  /** Physical pin 31: P0.16; bidirectional. */
  "P0.16": "31",
  /** Physical pin 32: P0.17; bidirectional. */
  "P0.17": "32",
  /** Physical pin 33: SWO/P0.18; bidirectional. */
  "SWO/P0.18": "33",
  /** Physical pin 34: P0.19; bidirectional. */
  "P0.19": "34",
  /** Physical pin 35: P0.20; bidirectional. */
  "P0.20": "35",
  /** Physical pin 36: P0.21/~{RESET}; bidirectional. */
  "P0.21/~{RESET}": "36",
  /** Physical pin 37: SWDCLK; input. */
  "SWDCLK": "37",
  /** Physical pin 38: SWDIO; bidirectional. */
  "SWDIO": "38",
  /** Physical pin 39: P0.22; bidirectional. */
  "P0.22": "39",
  /** Physical pin 40: P0.23; bidirectional. */
  "P0.23": "40",
  /** Physical pin 41: P0.24; bidirectional. */
  "P0.24": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
}) {
  override schema = "RF_Module:E73-2G4M04S-52832";
  override referencePrefix = "U";
}

/**
 * nRF52810 BLE5 Module
 *
 * KiCad symbol: `RF_Module:E73-2G4M04S-52810`. Reference prefix: `U`.
 * Footprint filters: E73*2G4M04S*.
 * @see http://www.cdebyte.com/en/downpdf.aspx?id=243
 * Keywords: BLE5, BLE, nRF52810.
 * Default footprint: RF_Module:E73-2G4M04S.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class E73_2G4M04S_52810 extends Component.withPins({
  /** Physical pin 0: GND; power_in. */
  "GND_0": "0",
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: DEC2; passive. */
  "DEC2": "3",
  /** Physical pin 4: DEC3; passive. */
  "DEC3": "4",
  /** Physical pin 5: P0.25; bidirectional. */
  "P0.25": "5",
  /** Physical pin 6: P0.26; bidirectional. */
  "P0.26": "6",
  /** Physical pin 7: P0.27; bidirectional. */
  "P0.27": "7",
  /** Physical pin 8: AIN4/P0.28; bidirectional. */
  "AIN4/P0.28": "8",
  /** Physical pin 9: AIN5/P0.29; bidirectional. */
  "AIN5/P0.29": "9",
  /** Physical pin 10: AIN6/P0.30; bidirectional. */
  "AIN6/P0.30": "10",
  /** Physical pin 11: AIN7/P0.31; bidirectional. */
  "AIN7/P0.31": "11",
  /** Physical pin 12: DEC4; passive. */
  "DEC4": "12",
  /** Physical pin 13: DCC; power_out. */
  "DCC": "13",
  /** Physical pin 14: DEC1; passive. */
  "DEC1": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: AIN0/P0.02; bidirectional. */
  "AIN0/P0.02": "17",
  /** Physical pin 18: AIN1/P0.03; bidirectional. */
  "AIN1/P0.03": "18",
  /** Physical pin 19: AIN2/P0.04; bidirectional. */
  "AIN2/P0.04": "19",
  /** Physical pin 20: AIN3/P0.05; bidirectional. */
  "AIN3/P0.05": "20",
  /** Physical pin 21: P0.06; bidirectional. */
  "P0.06": "21",
  /** Physical pin 22: P0.07; bidirectional. */
  "P0.07": "22",
  /** Physical pin 23: P0.08; bidirectional. */
  "P0.08": "23",
  /** Physical pin 24: NFC1/P0.09; bidirectional. */
  "NFC1/P0.09": "24",
  /** Physical pin 25: NFC2/P0.10; bidirectional. */
  "NFC2/P0.10": "25",
  /** Physical pin 26: P0.11; bidirectional. */
  "P0.11": "26",
  /** Physical pin 27: P0.12; bidirectional. */
  "P0.12": "27",
  /** Physical pin 28: P0.13; bidirectional. */
  "P0.13": "28",
  /** Physical pin 29: P0.14; bidirectional. */
  "P0.14": "29",
  /** Physical pin 30: P0.15; bidirectional. */
  "P0.15": "30",
  /** Physical pin 31: P0.16; bidirectional. */
  "P0.16": "31",
  /** Physical pin 32: P0.17; bidirectional. */
  "P0.17": "32",
  /** Physical pin 33: SWO/P0.18; bidirectional. */
  "SWO/P0.18": "33",
  /** Physical pin 34: P0.19; bidirectional. */
  "P0.19": "34",
  /** Physical pin 35: P0.20; bidirectional. */
  "P0.20": "35",
  /** Physical pin 36: P0.21/~{RESET}; bidirectional. */
  "P0.21/~{RESET}": "36",
  /** Physical pin 37: SWDCLK; input. */
  "SWDCLK": "37",
  /** Physical pin 38: SWDIO; bidirectional. */
  "SWDIO": "38",
  /** Physical pin 39: P0.22; bidirectional. */
  "P0.22": "39",
  /** Physical pin 40: P0.23; bidirectional. */
  "P0.23": "40",
  /** Physical pin 41: P0.24; bidirectional. */
  "P0.24": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
}) {
  override schema = "RF_Module:E73-2G4M04S-52810";
  override referencePrefix = "U";
}

/**
 * 802.11 b/g/n Wi-Fi Module based on ESP8266
 *
 * KiCad symbol: `RF_Module:ESP-01`. Reference prefix: `U`.
 * Footprint filters: ESP?01*.
 * @see https://aithinker-static.oss-cn-shenzhen.aliyuncs.com/docs/_media_old/esp-01_product_specification_en.pdf
 * Keywords: 802.11 Wi-Fi.
 * Default footprint: RF_Module:ESP-01.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP_01 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IO2; bidirectional. */
  "IO2": "2",
  /** Physical pin 3: IO0; bidirectional. */
  "IO0": "3",
  /** Physical pin 4: RXD/IO3; bidirectional. */
  "RXD/IO3": "4",
  /** Physical pin 5: TXD/IO1; bidirectional. */
  "TXD/IO1": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
  /** Physical pin 7: ~{RST}; input. */
  "~{RST}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "RF_Module:ESP-01";
  override referencePrefix = "U";
}

/**
 * 802.11 b/g/n Wi-Fi Module
 *
 * KiCad symbol: `RF_Module:ESP-07`. Reference prefix: `U`.
 * Footprint filters: ESP?07*.
 * @see http://wiki.ai-thinker.com/_media/esp8266/esp8266_series_modules_user_manual_v1.1.pdf
 * Keywords: 802.11 Wi-Fi.
 * Default footprint: RF_Module:ESP-07.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP_07 extends Component.withPins({
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: ADC; input. */
  "ADC": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GPIO16; bidirectional. */
  "GPIO16": "4",
  /** Physical pin 5: GPIO14; bidirectional. */
  "GPIO14": "5",
  /** Physical pin 6: GPIO12; bidirectional. */
  "GPIO12": "6",
  /** Physical pin 7: GPIO13; bidirectional. */
  "GPIO13": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: GPIO15; bidirectional. */
  "GPIO15": "10",
  /** Physical pin 11: GPIO2; bidirectional. */
  "GPIO2": "11",
  /** Physical pin 12: GPIO0; bidirectional. */
  "GPIO0": "12",
  /** Physical pin 13: GPIO4; bidirectional. */
  "GPIO4": "13",
  /** Physical pin 14: GPIO5; bidirectional. */
  "GPIO5": "14",
  /** Physical pin 15: GPIO3/RXD; bidirectional. */
  "GPIO3/RXD": "15",
  /** Physical pin 16: GPIO1/TXD; bidirectional. */
  "GPIO1/TXD": "16",
}) {
  override schema = "RF_Module:ESP-07";
  override referencePrefix = "U";
}

/**
 * 802.11 b/g/n Wi-Fi Module
 *
 * KiCad symbol: `RF_Module:ESP-12E`. Reference prefix: `U`.
 * Footprint filters: ESP?12*.
 * @see http://wiki.ai-thinker.com/_media/esp8266/esp8266_series_modules_user_manual_v1.1.pdf
 * Keywords: 802.11 Wi-Fi.
 * Default footprint: RF_Module:ESP-12E.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP_12E extends Component.withPins({
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: ADC; input. */
  "ADC": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GPIO16; bidirectional. */
  "GPIO16": "4",
  /** Physical pin 5: GPIO14; bidirectional. */
  "GPIO14": "5",
  /** Physical pin 6: GPIO12; bidirectional. */
  "GPIO12": "6",
  /** Physical pin 7: GPIO13; bidirectional. */
  "GPIO13": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: CS0; input. */
  "CS0": "9",
  /** Physical pin 10: MISO; bidirectional. */
  "MISO": "10",
  /** Physical pin 11: GPIO9; bidirectional. */
  "GPIO9": "11",
  /** Physical pin 12: GPIO10; bidirectional. */
  "GPIO10": "12",
  /** Physical pin 13: MOSI; bidirectional. */
  "MOSI": "13",
  /** Physical pin 14: SCLK; bidirectional. */
  "SCLK": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: GPIO15; bidirectional. */
  "GPIO15": "16",
  /** Physical pin 17: GPIO2; bidirectional. */
  "GPIO2": "17",
  /** Physical pin 18: GPIO0; bidirectional. */
  "GPIO0": "18",
  /** Physical pin 19: GPIO4; bidirectional. */
  "GPIO4": "19",
  /** Physical pin 20: GPIO5; bidirectional. */
  "GPIO5": "20",
  /** Physical pin 21: GPIO3/RXD; bidirectional. */
  "GPIO3/RXD": "21",
  /** Physical pin 22: GPIO1/TXD; bidirectional. */
  "GPIO1/TXD": "22",
}) {
  override schema = "RF_Module:ESP-12E";
  override referencePrefix = "U";
}

/**
 * 802.11 b/g/n Wi-Fi Module
 *
 * KiCad symbol: `RF_Module:ESP-12F`. Reference prefix: `U`.
 * Footprint filters: ESP?12*.
 * @see http://wiki.ai-thinker.com/_media/esp8266/esp8266_series_modules_user_manual_v1.1.pdf
 * Keywords: 802.11 Wi-Fi.
 * Default footprint: RF_Module:ESP-12E.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP_12F extends Component.withPins({
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: ADC; input. */
  "ADC": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: GPIO16; bidirectional. */
  "GPIO16": "4",
  /** Physical pin 5: GPIO14; bidirectional. */
  "GPIO14": "5",
  /** Physical pin 6: GPIO12; bidirectional. */
  "GPIO12": "6",
  /** Physical pin 7: GPIO13; bidirectional. */
  "GPIO13": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: CS0; input. */
  "CS0": "9",
  /** Physical pin 10: MISO; bidirectional. */
  "MISO": "10",
  /** Physical pin 11: GPIO9; bidirectional. */
  "GPIO9": "11",
  /** Physical pin 12: GPIO10; bidirectional. */
  "GPIO10": "12",
  /** Physical pin 13: MOSI; bidirectional. */
  "MOSI": "13",
  /** Physical pin 14: SCLK; bidirectional. */
  "SCLK": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: GPIO15; bidirectional. */
  "GPIO15": "16",
  /** Physical pin 17: GPIO2; bidirectional. */
  "GPIO2": "17",
  /** Physical pin 18: GPIO0; bidirectional. */
  "GPIO0": "18",
  /** Physical pin 19: GPIO4; bidirectional. */
  "GPIO4": "19",
  /** Physical pin 20: GPIO5; bidirectional. */
  "GPIO5": "20",
  /** Physical pin 21: GPIO3/RXD; bidirectional. */
  "GPIO3/RXD": "21",
  /** Physical pin 22: GPIO1/TXD; bidirectional. */
  "GPIO1/TXD": "22",
}) {
  override schema = "RF_Module:ESP-12F";
  override referencePrefix = "U";
}

/**
 * Wi-Fi Module, ESP8266EX SoC, 32-bit, 802.11b/g/n, WPA/WPA2, 2.7-3.6V, SMD
 *
 * KiCad symbol: `RF_Module:ESP-WROOM-02`. Reference prefix: `U`.
 * Footprint filters: ESP?WROOM?02*.
 * @see https://www.espressif.com/sites/default/files/documentation/0c-esp-wroom-02_datasheet_en.pdf
 * Keywords: RF Radio ESP Espressif.
 * Default footprint: RF_Module:ESP-WROOM-02.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP_WROOM_02 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: IO14; bidirectional. */
  "IO14": "3",
  /** Physical pin 4: IO12; bidirectional. */
  "IO12": "4",
  /** Physical pin 5: IO13; bidirectional. */
  "IO13": "5",
  /** Physical pin 6: IO15; bidirectional. */
  "IO15": "6",
  /** Physical pin 7: IO2; bidirectional. */
  "IO2": "7",
  /** Physical pin 8: IO0; bidirectional. */
  "IO0": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: IO4; bidirectional. */
  "IO4": "10",
  /** Physical pin 11: RXD; bidirectional. */
  "RXD": "11",
  /** Physical pin 12: TXD; bidirectional. */
  "TXD": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: IO5; bidirectional. */
  "IO5": "14",
  /** Physical pin 15: RST; input. */
  "RST": "15",
  /** Physical pin 16: TOUT; input. */
  "TOUT": "16",
  /** Physical pin 17: IO16; bidirectional. */
  "IO16": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
}) {
  override schema = "RF_Module:ESP-WROOM-02";
  override referencePrefix = "U";
}

/**
 * Development board featuring ESP32-C3-MINI-1 module
 *
 * KiCad symbol: `RF_Module:ESP32-C3-DevKitM-1`. Reference prefix: `U`.
 * Footprint filters: *ESP32?C3?DevKitM?1*.
 * @see https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/hw-reference/esp32c3/user-guide-devkitm-1.html
 * Keywords: riscv wifi bluetooth ble.
 * Default footprint: RF_Module:ESP32-C3-DevKitM-1.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_C3_DevKitM_1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: 3V3; power_out. */
  "3V3_2": "2",
  /** Physical pin 3: 3V3; passive. */
  "3V3_3": "3",
  /** Physical pin 4: IO2; bidirectional. */
  "IO2": "4",
  /** Physical pin 5: IO3; bidirectional. */
  "IO3": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: RST; input. */
  "RST": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: IO0; bidirectional. */
  "IO0": "9",
  /** Physical pin 10: IO1; bidirectional. */
  "IO1": "10",
  /** Physical pin 11: IO10; bidirectional. */
  "IO10": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: 5V; passive. */
  "5V_13": "13",
  /** Physical pin 14: 5V; passive. */
  "5V_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: IO19; bidirectional. */
  "IO19": "17",
  /** Physical pin 18: IO18; bidirectional. */
  "IO18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: IO4; bidirectional. */
  "IO4": "20",
  /** Physical pin 21: IO5; bidirectional. */
  "IO5": "21",
  /** Physical pin 22: IO6; bidirectional. */
  "IO6": "22",
  /** Physical pin 23: IO7; bidirectional. */
  "IO7": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: IO8; bidirectional. */
  "IO8": "25",
  /** Physical pin 26: IO9; bidirectional. */
  "IO9": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: RX; input. */
  "RX": "28",
  /** Physical pin 29: TX; output. */
  "TX": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
}) {
  override schema = "RF_Module:ESP32-C3-DevKitM-1";
  override referencePrefix = "U";
}

/**
 * 802.11 b/g/n Wi­Fi and Bluetooth 5 module, ESP32­C3 SoC, RISC­V microprocessor, On-board antenna
 *
 * KiCad symbol: `RF_Module:ESP32-C3-WROOM-02`. Reference prefix: `U`.
 * Footprint filters: ESP32?C3*WROOM?02*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-c3-wroom-02_datasheet_en.pdf
 * Keywords: esp32 espressif WiFi Bluetooth LE.
 * Default footprint: RF_Module:ESP32-C3-WROOM-02.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_C3_WROOM_02 extends Component.withPins({
  /** Physical pin 1: 3V3; power_in. */
  "3V3": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: IO4; bidirectional. */
  "IO4": "3",
  /** Physical pin 4: IO5; bidirectional. */
  "IO5": "4",
  /** Physical pin 5: IO6; bidirectional. */
  "IO6": "5",
  /** Physical pin 6: IO7; bidirectional. */
  "IO7": "6",
  /** Physical pin 7: IO8; bidirectional. */
  "IO8": "7",
  /** Physical pin 8: IO9; bidirectional. */
  "IO9": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: IO10; bidirectional. */
  "IO10": "10",
  /** Physical pin 11: IO20/RXD; bidirectional. */
  "IO20/RXD": "11",
  /** Physical pin 12: IO21/TXD; bidirectional. */
  "IO21/TXD": "12",
  /** Physical pin 13: IO18; bidirectional. */
  "IO18": "13",
  /** Physical pin 14: IO19; bidirectional. */
  "IO19": "14",
  /** Physical pin 15: IO3; bidirectional. */
  "IO3": "15",
  /** Physical pin 16: IO2; bidirectional. */
  "IO2": "16",
  /** Physical pin 17: IO1; bidirectional. */
  "IO1": "17",
  /** Physical pin 18: IO0; bidirectional. */
  "IO0": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
}) {
  override schema = "RF_Module:ESP32-C3-WROOM-02";
  override referencePrefix = "U";
}

/**
 * 802.11 b/g/n Wi­Fi and Bluetooth 5 module, ESP32­C3 SoC, RISC­V microprocessor, On-board antenna
 *
 * KiCad symbol: `RF_Module:ESP32-C3-WROOM-02U`. Reference prefix: `U`.
 * Footprint filters: ESP32?C3*WROOM?02U*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-c3-wroom-02_datasheet_en.pdf
 * Keywords: esp32 espressif WiFi Bluetooth LE.
 * Default footprint: RF_Module:ESP32-C3-WROOM-02U.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_C3_WROOM_02U extends Component.withPins({
  /** Physical pin 1: 3V3; power_in. */
  "3V3": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: IO4; bidirectional. */
  "IO4": "3",
  /** Physical pin 4: IO5; bidirectional. */
  "IO5": "4",
  /** Physical pin 5: IO6; bidirectional. */
  "IO6": "5",
  /** Physical pin 6: IO7; bidirectional. */
  "IO7": "6",
  /** Physical pin 7: IO8; bidirectional. */
  "IO8": "7",
  /** Physical pin 8: IO9; bidirectional. */
  "IO9": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: IO10; bidirectional. */
  "IO10": "10",
  /** Physical pin 11: IO20/RXD; bidirectional. */
  "IO20/RXD": "11",
  /** Physical pin 12: IO21/TXD; bidirectional. */
  "IO21/TXD": "12",
  /** Physical pin 13: IO18; bidirectional. */
  "IO18": "13",
  /** Physical pin 14: IO19; bidirectional. */
  "IO19": "14",
  /** Physical pin 15: IO3; bidirectional. */
  "IO3": "15",
  /** Physical pin 16: IO2; bidirectional. */
  "IO2": "16",
  /** Physical pin 17: IO1; bidirectional. */
  "IO1": "17",
  /** Physical pin 18: IO0; bidirectional. */
  "IO0": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
}) {
  override schema = "RF_Module:ESP32-C3-WROOM-02U";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-C6 SoC, Wi-Fi 802.11b/g/n/ax, Bluetooth, BLE, Zigbee, Thread, 32-bit, 3.3V, SMD, onboard antenna
 *
 * KiCad symbol: `RF_Module:ESP32-C6-MINI-1`. Reference prefix: `U`.
 * Footprint filters: ESP32?C6?MINI?1*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-c6-mini-1_mini-1u_datasheet_en.pdf
 * Keywords: Radio BT ESP Espressif.
 * Default footprint: RF_Module:ESP32-C6-MINI-1.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_C6_MINI_1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: 3V3; power_in. */
  "3V3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: IO2; bidirectional. */
  "IO2": "5",
  /** Physical pin 6: IO3; bidirectional. */
  "IO3": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
  /** Physical pin 9: IO4; bidirectional. */
  "IO4": "9",
  /** Physical pin 10: IO5; bidirectional. */
  "IO5": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: IO0; bidirectional. */
  "IO0": "12",
  /** Physical pin 13: IO1; bidirectional. */
  "IO1": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: IO6; bidirectional. */
  "IO6": "15",
  /** Physical pin 16: IO7; bidirectional. */
  "IO7": "16",
  /** Physical pin 17: IO12; bidirectional. */
  "IO12": "17",
  /** Physical pin 18: IO13; bidirectional. */
  "IO13": "18",
  /** Physical pin 19: IO14; bidirectional. */
  "IO14": "19",
  /** Physical pin 20: IO15; bidirectional. */
  "IO15": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: IO8; bidirectional. */
  "IO8": "22",
  /** Physical pin 23: IO9; bidirectional. */
  "IO9": "23",
  /** Physical pin 24: IO18; bidirectional. */
  "IO18": "24",
  /** Physical pin 25: IO19; bidirectional. */
  "IO19": "25",
  /** Physical pin 26: IO20; bidirectional. */
  "IO20": "26",
  /** Physical pin 27: IO21; bidirectional. */
  "IO21": "27",
  /** Physical pin 28: IO22; bidirectional. */
  "IO22": "28",
  /** Physical pin 29: IO23; bidirectional. */
  "IO23": "29",
  /** Physical pin 30: RXD0; bidirectional. */
  "RXD0": "30",
  /** Physical pin 31: TXD0; bidirectional. */
  "TXD0": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: GND; passive. */
  "GND_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: GND; passive. */
  "GND_52": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
}) {
  override schema = "RF_Module:ESP32-C6-MINI-1";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WDQ6 SoC, Wi-Fi 802.11b/g/n, 32-bit, 2.7-3.6V, onboard antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-S2-WROVER`. Reference prefix: `U`.
 * Footprint filters: ESP32?S2?WROVER*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-s2-wroom_esp32-s2-wroom-i_datasheet_en.pdf
 * Keywords: RF Radio ESP ESP32 Espressif onboard PCB antenna.
 * Default footprint: RF_Module:ESP32-S2-WROVER.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_S2_WROVER extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: IO00; bidirectional. */
  "IO00": "3",
  /** Physical pin 4: IO01; bidirectional. */
  "IO01": "4",
  /** Physical pin 5: IO02; bidirectional. */
  "IO02": "5",
  /** Physical pin 6: IO03; bidirectional. */
  "IO03": "6",
  /** Physical pin 7: IO04; bidirectional. */
  "IO04": "7",
  /** Physical pin 8: IO05; bidirectional. */
  "IO05": "8",
  /** Physical pin 9: IO06; bidirectional. */
  "IO06": "9",
  /** Physical pin 10: IO07; bidirectional. */
  "IO07": "10",
  /** Physical pin 11: IO08; bidirectional. */
  "IO08": "11",
  /** Physical pin 12: IO09; bidirectional. */
  "IO09": "12",
  /** Physical pin 13: IO10; bidirectional. */
  "IO10": "13",
  /** Physical pin 14: IO11; bidirectional. */
  "IO11": "14",
  /** Physical pin 15: IO12; bidirectional. */
  "IO12": "15",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: IO14; bidirectional. */
  "IO14": "17",
  /** Physical pin 18: IO15; bidirectional. */
  "IO15": "18",
  /** Physical pin 19: IO16; bidirectional. */
  "IO16": "19",
  /** Physical pin 20: IO17; bidirectional. */
  "IO17": "20",
  /** Physical pin 21: IO18; bidirectional. */
  "IO18": "21",
  /** Physical pin 22: USB_D-; bidirectional. */
  "USB_D-": "22",
  /** Physical pin 23: USB_D+; bidirectional. */
  "USB_D+": "23",
  /** Physical pin 24: IO21; bidirectional. */
  "IO21": "24",
  /** Physical pin 25: IO26; bidirectional. */
  "IO26": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: IO33; bidirectional. */
  "IO33": "27",
  /** Physical pin 28: IO34; bidirectional. */
  "IO34": "28",
  /** Physical pin 29: IO35; bidirectional. */
  "IO35": "29",
  /** Physical pin 30: IO36; bidirectional. */
  "IO36": "30",
  /** Physical pin 31: IO37; bidirectional. */
  "IO37": "31",
  /** Physical pin 32: IO38; bidirectional. */
  "IO38": "32",
  /** Physical pin 33: IO39; bidirectional. */
  "IO39": "33",
  /** Physical pin 34: IO40; bidirectional. */
  "IO40": "34",
  /** Physical pin 35: IO41; bidirectional. */
  "IO41": "35",
  /** Physical pin 36: IO42; bidirectional. */
  "IO42": "36",
  /** Physical pin 37: TXD0; bidirectional. */
  "TXD0": "37",
  /** Physical pin 38: RXD0; bidirectional. */
  "RXD0": "38",
  /** Physical pin 39: IO45; bidirectional. */
  "IO45": "39",
  /** Physical pin 40: IO46; input. */
  "IO46": "40",
  /** Physical pin 41: EN; input. */
  "EN": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
}) {
  override schema = "RF_Module:ESP32-S2-WROVER";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WDQ6 SoC, Wi-Fi 802.11b/g/n, 32-bit, 2.7-3.6V, onboard antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-S2-WROVER-I`. Reference prefix: `U`.
 * Footprint filters: ESP32?S2?WROVER*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-s2-wroom_esp32-s2-wroom-i_datasheet_en.pdf
 * Keywords: RF Radio ESP ESP32 Espressif onboard PCB antenna.
 * Default footprint: RF_Module:ESP32-S2-WROVER.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_S2_WROVER_I extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: IO00; bidirectional. */
  "IO00": "3",
  /** Physical pin 4: IO01; bidirectional. */
  "IO01": "4",
  /** Physical pin 5: IO02; bidirectional. */
  "IO02": "5",
  /** Physical pin 6: IO03; bidirectional. */
  "IO03": "6",
  /** Physical pin 7: IO04; bidirectional. */
  "IO04": "7",
  /** Physical pin 8: IO05; bidirectional. */
  "IO05": "8",
  /** Physical pin 9: IO06; bidirectional. */
  "IO06": "9",
  /** Physical pin 10: IO07; bidirectional. */
  "IO07": "10",
  /** Physical pin 11: IO08; bidirectional. */
  "IO08": "11",
  /** Physical pin 12: IO09; bidirectional. */
  "IO09": "12",
  /** Physical pin 13: IO10; bidirectional. */
  "IO10": "13",
  /** Physical pin 14: IO11; bidirectional. */
  "IO11": "14",
  /** Physical pin 15: IO12; bidirectional. */
  "IO12": "15",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: IO14; bidirectional. */
  "IO14": "17",
  /** Physical pin 18: IO15; bidirectional. */
  "IO15": "18",
  /** Physical pin 19: IO16; bidirectional. */
  "IO16": "19",
  /** Physical pin 20: IO17; bidirectional. */
  "IO17": "20",
  /** Physical pin 21: IO18; bidirectional. */
  "IO18": "21",
  /** Physical pin 22: USB_D-; bidirectional. */
  "USB_D-": "22",
  /** Physical pin 23: USB_D+; bidirectional. */
  "USB_D+": "23",
  /** Physical pin 24: IO21; bidirectional. */
  "IO21": "24",
  /** Physical pin 25: IO26; bidirectional. */
  "IO26": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: IO33; bidirectional. */
  "IO33": "27",
  /** Physical pin 28: IO34; bidirectional. */
  "IO34": "28",
  /** Physical pin 29: IO35; bidirectional. */
  "IO35": "29",
  /** Physical pin 30: IO36; bidirectional. */
  "IO36": "30",
  /** Physical pin 31: IO37; bidirectional. */
  "IO37": "31",
  /** Physical pin 32: IO38; bidirectional. */
  "IO38": "32",
  /** Physical pin 33: IO39; bidirectional. */
  "IO39": "33",
  /** Physical pin 34: IO40; bidirectional. */
  "IO40": "34",
  /** Physical pin 35: IO41; bidirectional. */
  "IO41": "35",
  /** Physical pin 36: IO42; bidirectional. */
  "IO42": "36",
  /** Physical pin 37: TXD0; bidirectional. */
  "TXD0": "37",
  /** Physical pin 38: RXD0; bidirectional. */
  "RXD0": "38",
  /** Physical pin 39: IO45; bidirectional. */
  "IO45": "39",
  /** Physical pin 40: IO46; input. */
  "IO46": "40",
  /** Physical pin 41: EN; input. */
  "EN": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
}) {
  override schema = "RF_Module:ESP32-S2-WROVER-I";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-S3 SoC, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 3.3V, SMD, onboard antenna
 *
 * KiCad symbol: `RF_Module:ESP32-S3-MINI-1`. Reference prefix: `U`.
 * Footprint filters: ESP32?S*MINI?1.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-s3-mini-1_mini-1u_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32-S3 Espressif.
 * Default footprint: RF_Module:ESP32-S2-MINI-1.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_S3_MINI_1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: 3V3; power_in. */
  "3V3": "3",
  /** Physical pin 4: IO0; bidirectional. */
  "IO0": "4",
  /** Physical pin 5: IO1; bidirectional. */
  "IO1": "5",
  /** Physical pin 6: IO2; bidirectional. */
  "IO2": "6",
  /** Physical pin 7: IO3; bidirectional. */
  "IO3": "7",
  /** Physical pin 8: IO4; bidirectional. */
  "IO4": "8",
  /** Physical pin 9: IO5; bidirectional. */
  "IO5": "9",
  /** Physical pin 10: IO6; bidirectional. */
  "IO6": "10",
  /** Physical pin 11: IO7; bidirectional. */
  "IO7": "11",
  /** Physical pin 12: IO8; bidirectional. */
  "IO8": "12",
  /** Physical pin 13: IO9; bidirectional. */
  "IO9": "13",
  /** Physical pin 14: IO10; bidirectional. */
  "IO10": "14",
  /** Physical pin 15: IO11; bidirectional. */
  "IO11": "15",
  /** Physical pin 16: IO12; bidirectional. */
  "IO12": "16",
  /** Physical pin 17: IO13; bidirectional. */
  "IO13": "17",
  /** Physical pin 18: IO14; bidirectional. */
  "IO14": "18",
  /** Physical pin 19: IO15; bidirectional. */
  "IO15": "19",
  /** Physical pin 20: IO16; bidirectional. */
  "IO16": "20",
  /** Physical pin 21: IO17; bidirectional. */
  "IO17": "21",
  /** Physical pin 22: IO18; bidirectional. */
  "IO18": "22",
  /** Physical pin 23: USB_D-; bidirectional. */
  "USB_D-": "23",
  /** Physical pin 24: USB_D+; bidirectional. */
  "USB_D+": "24",
  /** Physical pin 25: IO21; bidirectional. */
  "IO21": "25",
  /** Physical pin 26: IO26; bidirectional. */
  "IO26": "26",
  /** Physical pin 27: IO47; bidirectional. */
  "IO47": "27",
  /** Physical pin 28: IO33; bidirectional. */
  "IO33": "28",
  /** Physical pin 29: IO34; bidirectional. */
  "IO34": "29",
  /** Physical pin 30: IO48; bidirectional. */
  "IO48": "30",
  /** Physical pin 31: IO35; bidirectional. */
  "IO35": "31",
  /** Physical pin 32: IO36; bidirectional. */
  "IO36": "32",
  /** Physical pin 33: IO37; bidirectional. */
  "IO37": "33",
  /** Physical pin 34: IO38; bidirectional. */
  "IO38": "34",
  /** Physical pin 35: IO39; bidirectional. */
  "IO39": "35",
  /** Physical pin 36: IO40; bidirectional. */
  "IO40": "36",
  /** Physical pin 37: IO41; bidirectional. */
  "IO41": "37",
  /** Physical pin 38: IO42; bidirectional. */
  "IO42": "38",
  /** Physical pin 39: TXD0; bidirectional. */
  "TXD0": "39",
  /** Physical pin 40: RXD0; bidirectional. */
  "RXD0": "40",
  /** Physical pin 41: IO45; bidirectional. */
  "IO45": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: IO46; bidirectional. */
  "IO46": "44",
  /** Physical pin 45: EN; input. */
  "EN": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: GND; passive. */
  "GND_52": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "RF_Module:ESP32-S3-MINI-1";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-S3 SoC, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 3.3V, SMD, external antenna
 *
 * KiCad symbol: `RF_Module:ESP32-S3-MINI-1U`. Reference prefix: `U`.
 * Footprint filters: ESP32?S*MINI?1U.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-s3-mini-1_mini-1u_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32-S3 Espressif.
 * Default footprint: RF_Module:ESP32-S2-MINI-1U.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_S3_MINI_1U extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: 3V3; power_in. */
  "3V3": "3",
  /** Physical pin 4: IO0; bidirectional. */
  "IO0": "4",
  /** Physical pin 5: IO1; bidirectional. */
  "IO1": "5",
  /** Physical pin 6: IO2; bidirectional. */
  "IO2": "6",
  /** Physical pin 7: IO3; bidirectional. */
  "IO3": "7",
  /** Physical pin 8: IO4; bidirectional. */
  "IO4": "8",
  /** Physical pin 9: IO5; bidirectional. */
  "IO5": "9",
  /** Physical pin 10: IO6; bidirectional. */
  "IO6": "10",
  /** Physical pin 11: IO7; bidirectional. */
  "IO7": "11",
  /** Physical pin 12: IO8; bidirectional. */
  "IO8": "12",
  /** Physical pin 13: IO9; bidirectional. */
  "IO9": "13",
  /** Physical pin 14: IO10; bidirectional. */
  "IO10": "14",
  /** Physical pin 15: IO11; bidirectional. */
  "IO11": "15",
  /** Physical pin 16: IO12; bidirectional. */
  "IO12": "16",
  /** Physical pin 17: IO13; bidirectional. */
  "IO13": "17",
  /** Physical pin 18: IO14; bidirectional. */
  "IO14": "18",
  /** Physical pin 19: IO15; bidirectional. */
  "IO15": "19",
  /** Physical pin 20: IO16; bidirectional. */
  "IO16": "20",
  /** Physical pin 21: IO17; bidirectional. */
  "IO17": "21",
  /** Physical pin 22: IO18; bidirectional. */
  "IO18": "22",
  /** Physical pin 23: USB_D-; bidirectional. */
  "USB_D-": "23",
  /** Physical pin 24: USB_D+; bidirectional. */
  "USB_D+": "24",
  /** Physical pin 25: IO21; bidirectional. */
  "IO21": "25",
  /** Physical pin 26: IO26; bidirectional. */
  "IO26": "26",
  /** Physical pin 27: IO47; bidirectional. */
  "IO47": "27",
  /** Physical pin 28: IO33; bidirectional. */
  "IO33": "28",
  /** Physical pin 29: IO34; bidirectional. */
  "IO34": "29",
  /** Physical pin 30: IO48; bidirectional. */
  "IO48": "30",
  /** Physical pin 31: IO35; bidirectional. */
  "IO35": "31",
  /** Physical pin 32: IO36; bidirectional. */
  "IO36": "32",
  /** Physical pin 33: IO37; bidirectional. */
  "IO37": "33",
  /** Physical pin 34: IO38; bidirectional. */
  "IO38": "34",
  /** Physical pin 35: IO39; bidirectional. */
  "IO39": "35",
  /** Physical pin 36: IO40; bidirectional. */
  "IO40": "36",
  /** Physical pin 37: IO41; bidirectional. */
  "IO41": "37",
  /** Physical pin 38: IO42; bidirectional. */
  "IO42": "38",
  /** Physical pin 39: TXD0; bidirectional. */
  "TXD0": "39",
  /** Physical pin 40: RXD0; bidirectional. */
  "RXD0": "40",
  /** Physical pin 41: IO45; bidirectional. */
  "IO45": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: IO46; bidirectional. */
  "IO46": "44",
  /** Physical pin 45: EN; input. */
  "EN": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: GND; passive. */
  "GND_52": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "RF_Module:ESP32-S3-MINI-1U";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-S3 SoC, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 3.3V, onboard antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-S3-WROOM-1`. Reference prefix: `U`.
 * Footprint filters: ESP32?S3?WROOM?1*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32-S3 Espressif onboard PCB antenna.
 * Default footprint: RF_Module:ESP32-S3-WROOM-1.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_S3_WROOM_1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: IO4; bidirectional. */
  "IO4": "4",
  /** Physical pin 5: IO5; bidirectional. */
  "IO5": "5",
  /** Physical pin 6: IO6; bidirectional. */
  "IO6": "6",
  /** Physical pin 7: IO7; bidirectional. */
  "IO7": "7",
  /** Physical pin 8: IO15; bidirectional. */
  "IO15": "8",
  /** Physical pin 9: IO16; bidirectional. */
  "IO16": "9",
  /** Physical pin 10: IO17; bidirectional. */
  "IO17": "10",
  /** Physical pin 11: IO18; bidirectional. */
  "IO18": "11",
  /** Physical pin 12: IO8; bidirectional. */
  "IO8": "12",
  /** Physical pin 13: USB_D-; bidirectional. */
  "USB_D-": "13",
  /** Physical pin 14: USB_D+; bidirectional. */
  "USB_D+": "14",
  /** Physical pin 15: IO3; bidirectional. */
  "IO3": "15",
  /** Physical pin 16: IO46; bidirectional. */
  "IO46": "16",
  /** Physical pin 17: IO9; bidirectional. */
  "IO9": "17",
  /** Physical pin 18: IO10; bidirectional. */
  "IO10": "18",
  /** Physical pin 19: IO11; bidirectional. */
  "IO11": "19",
  /** Physical pin 20: IO12; bidirectional. */
  "IO12": "20",
  /** Physical pin 21: IO13; bidirectional. */
  "IO13": "21",
  /** Physical pin 22: IO14; bidirectional. */
  "IO14": "22",
  /** Physical pin 23: IO21; bidirectional. */
  "IO21": "23",
  /** Physical pin 24: IO47; bidirectional. */
  "IO47": "24",
  /** Physical pin 25: IO48; bidirectional. */
  "IO48": "25",
  /** Physical pin 26: IO45; bidirectional. */
  "IO45": "26",
  /** Physical pin 27: IO0; bidirectional. */
  "IO0": "27",
  /** Physical pin 28: IO35; bidirectional. */
  "IO35": "28",
  /** Physical pin 29: IO36; bidirectional. */
  "IO36": "29",
  /** Physical pin 30: IO37; bidirectional. */
  "IO37": "30",
  /** Physical pin 31: IO38; bidirectional. */
  "IO38": "31",
  /** Physical pin 32: IO39; bidirectional. */
  "IO39": "32",
  /** Physical pin 33: IO40; bidirectional. */
  "IO40": "33",
  /** Physical pin 34: IO41; bidirectional. */
  "IO41": "34",
  /** Physical pin 35: IO42; bidirectional. */
  "IO42": "35",
  /** Physical pin 36: RXD0; bidirectional. */
  "RXD0": "36",
  /** Physical pin 37: TXD0; bidirectional. */
  "TXD0": "37",
  /** Physical pin 38: IO2; bidirectional. */
  "IO2": "38",
  /** Physical pin 39: IO1; bidirectional. */
  "IO1": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
}) {
  override schema = "RF_Module:ESP32-S3-WROOM-1";
  override referencePrefix = "U";
}

/**
 * RF Module, 2.4 GHz, Wi­-Fi, Bluetooth, BLE, ESP32­-S3R8V
 *
 * KiCad symbol: `RF_Module:ESP32-S3-WROOM-2`. Reference prefix: `U`.
 * Footprint filters: ESP32?S3?WROOM?2*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-2_datasheet_en.pdf
 * Keywords: Bluetooth WiFi Wi-Fi ESP WROOM.
 * Default footprint: RF_Module:ESP32-S3-WROOM-2.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_S3_WROOM_2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: IO4; bidirectional. */
  "IO4": "4",
  /** Physical pin 5: IO5; bidirectional. */
  "IO5": "5",
  /** Physical pin 6: IO6; bidirectional. */
  "IO6": "6",
  /** Physical pin 7: IO7; bidirectional. */
  "IO7": "7",
  /** Physical pin 8: IO15; bidirectional. */
  "IO15": "8",
  /** Physical pin 9: IO16; bidirectional. */
  "IO16": "9",
  /** Physical pin 10: IO17; bidirectional. */
  "IO17": "10",
  /** Physical pin 11: IO18; bidirectional. */
  "IO18": "11",
  /** Physical pin 12: IO8; bidirectional. */
  "IO8": "12",
  /** Physical pin 13: USB_D-/IO19; bidirectional. */
  "USB_D-/IO19": "13",
  /** Physical pin 14: USB_D+/IO20; bidirectional. */
  "USB_D+/IO20": "14",
  /** Physical pin 15: IO3; bidirectional. */
  "IO3": "15",
  /** Physical pin 16: IO46; bidirectional. */
  "IO46": "16",
  /** Physical pin 17: IO9; bidirectional. */
  "IO9": "17",
  /** Physical pin 18: IO10; bidirectional. */
  "IO10": "18",
  /** Physical pin 19: IO11; bidirectional. */
  "IO11": "19",
  /** Physical pin 20: IO12; bidirectional. */
  "IO12": "20",
  /** Physical pin 21: IO13; bidirectional. */
  "IO13": "21",
  /** Physical pin 22: IO14; bidirectional. */
  "IO14": "22",
  /** Physical pin 23: IO21; bidirectional. */
  "IO21": "23",
  /** Physical pin 24: IO47; bidirectional. */
  "IO47": "24",
  /** Physical pin 25: IO48; bidirectional. */
  "IO48": "25",
  /** Physical pin 26: IO45; bidirectional. */
  "IO45": "26",
  /** Physical pin 27: IO0; bidirectional. */
  "IO0": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: IO38; bidirectional. */
  "IO38": "31",
  /** Physical pin 32: MTCK/IO39; bidirectional. */
  "MTCK/IO39": "32",
  /** Physical pin 33: MTDO/IO40; bidirectional. */
  "MTDO/IO40": "33",
  /** Physical pin 34: MTDI/IO41; bidirectional. */
  "MTDI/IO41": "34",
  /** Physical pin 35: MTMS/IO42; bidirectional. */
  "MTMS/IO42": "35",
  /** Physical pin 36: RXD0/IO44; bidirectional. */
  "RXD0/IO44": "36",
  /** Physical pin 37: TXD0/IO43; bidirectional. */
  "TXD0/IO43": "37",
  /** Physical pin 38: IO2; bidirectional. */
  "IO2": "38",
  /** Physical pin 39: IO1; bidirectional. */
  "IO1": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
}) {
  override schema = "RF_Module:ESP32-S3-WROOM-2";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WDQ6 SoC, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 2.7-3.6V, onboard antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-WROOM-32`. Reference prefix: `U`.
 * Footprint filters: ESP32?WROOM?32*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif onboard PCB antenna.
 * Default footprint: RF_Module:ESP32-WROOM-32.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_WROOM_32 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SENSOR_VP; input. */
  "SENSOR_VP": "4",
  /** Physical pin 5: SENSOR_VN; input. */
  "SENSOR_VN": "5",
  /** Physical pin 6: IO34; input. */
  "IO34": "6",
  /** Physical pin 7: IO35; input. */
  "IO35": "7",
  /** Physical pin 8: IO32; bidirectional. */
  "IO32": "8",
  /** Physical pin 9: IO33; bidirectional. */
  "IO33": "9",
  /** Physical pin 10: IO25; bidirectional. */
  "IO25": "10",
  /** Physical pin 11: IO26; bidirectional. */
  "IO26": "11",
  /** Physical pin 12: IO27; bidirectional. */
  "IO27": "12",
  /** Physical pin 13: IO14; bidirectional. */
  "IO14": "13",
  /** Physical pin 14: IO12; bidirectional. */
  "IO12": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: SHD/SD2; bidirectional. */
  "SHD/SD2": "17",
  /** Physical pin 18: SWP/SD3; bidirectional. */
  "SWP/SD3": "18",
  /** Physical pin 19: SCS/CMD; bidirectional. */
  "SCS/CMD": "19",
  /** Physical pin 20: SCK/CLK; bidirectional. */
  "SCK/CLK": "20",
  /** Physical pin 21: SDO/SD0; bidirectional. */
  "SDO/SD0": "21",
  /** Physical pin 22: SDI/SD1; bidirectional. */
  "SDI/SD1": "22",
  /** Physical pin 23: IO15; bidirectional. */
  "IO15": "23",
  /** Physical pin 24: IO2; bidirectional. */
  "IO2": "24",
  /** Physical pin 25: IO0; bidirectional. */
  "IO0": "25",
  /** Physical pin 26: IO4; bidirectional. */
  "IO4": "26",
  /** Physical pin 27: IO16; bidirectional. */
  "IO16": "27",
  /** Physical pin 28: IO17; bidirectional. */
  "IO17": "28",
  /** Physical pin 29: IO5; bidirectional. */
  "IO5": "29",
  /** Physical pin 30: IO18; bidirectional. */
  "IO18": "30",
  /** Physical pin 31: IO19; bidirectional. */
  "IO19": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC": "32",
  /** Physical pin 33: IO21; bidirectional. */
  "IO21": "33",
  /** Physical pin 34: RXD0/IO3; bidirectional. */
  "RXD0/IO3": "34",
  /** Physical pin 35: TXD0/IO1; bidirectional. */
  "TXD0/IO1": "35",
  /** Physical pin 36: IO22; bidirectional. */
  "IO22": "36",
  /** Physical pin 37: IO23; bidirectional. */
  "IO23": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
}) {
  override schema = "RF_Module:ESP32-WROOM-32";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WD SoC, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 2.7-3.6V, onboard antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-WROOM-32D`. Reference prefix: `U`.
 * Footprint filters: ESP32?WROOM?32D*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32d_esp32-wroom-32u_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif onboard PCB antenna.
 * Default footprint: RF_Module:ESP32-WROOM-32D.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_WROOM_32D extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SENSOR_VP; input. */
  "SENSOR_VP": "4",
  /** Physical pin 5: SENSOR_VN; input. */
  "SENSOR_VN": "5",
  /** Physical pin 6: IO34; input. */
  "IO34": "6",
  /** Physical pin 7: IO35; input. */
  "IO35": "7",
  /** Physical pin 8: IO32; bidirectional. */
  "IO32": "8",
  /** Physical pin 9: IO33; bidirectional. */
  "IO33": "9",
  /** Physical pin 10: IO25; bidirectional. */
  "IO25": "10",
  /** Physical pin 11: IO26; bidirectional. */
  "IO26": "11",
  /** Physical pin 12: IO27; bidirectional. */
  "IO27": "12",
  /** Physical pin 13: IO14; bidirectional. */
  "IO14": "13",
  /** Physical pin 14: IO12; bidirectional. */
  "IO12": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: SHD/SD2; bidirectional. */
  "SHD/SD2": "17",
  /** Physical pin 18: SWP/SD3; bidirectional. */
  "SWP/SD3": "18",
  /** Physical pin 19: SCS/CMD; bidirectional. */
  "SCS/CMD": "19",
  /** Physical pin 20: SCK/CLK; bidirectional. */
  "SCK/CLK": "20",
  /** Physical pin 21: SDO/SD0; bidirectional. */
  "SDO/SD0": "21",
  /** Physical pin 22: SDI/SD1; bidirectional. */
  "SDI/SD1": "22",
  /** Physical pin 23: IO15; bidirectional. */
  "IO15": "23",
  /** Physical pin 24: IO2; bidirectional. */
  "IO2": "24",
  /** Physical pin 25: IO0; bidirectional. */
  "IO0": "25",
  /** Physical pin 26: IO4; bidirectional. */
  "IO4": "26",
  /** Physical pin 27: IO16; bidirectional. */
  "IO16": "27",
  /** Physical pin 28: IO17; bidirectional. */
  "IO17": "28",
  /** Physical pin 29: IO5; bidirectional. */
  "IO5": "29",
  /** Physical pin 30: IO18; bidirectional. */
  "IO18": "30",
  /** Physical pin 31: IO19; bidirectional. */
  "IO19": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC": "32",
  /** Physical pin 33: IO21; bidirectional. */
  "IO21": "33",
  /** Physical pin 34: RXD0/IO3; bidirectional. */
  "RXD0/IO3": "34",
  /** Physical pin 35: TXD0/IO1; bidirectional. */
  "TXD0/IO1": "35",
  /** Physical pin 36: IO22; bidirectional. */
  "IO22": "36",
  /** Physical pin 37: IO23; bidirectional. */
  "IO23": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
}) {
  override schema = "RF_Module:ESP32-WROOM-32D";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WD-V3 SoC, without PSRAM, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 2.7-3.6V, onboard antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-WROOM-32E`. Reference prefix: `U`.
 * Footprint filters: ESP32?WROOM?32E*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32e_esp32-wroom-32ue_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif onboard PCB antenna.
 * Default footprint: RF_Module:ESP32-WROOM-32E.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_WROOM_32E extends Component.withPins({
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SENSOR_VP; input. */
  "SENSOR_VP": "4",
  /** Physical pin 5: SENSOR_VN; input. */
  "SENSOR_VN": "5",
  /** Physical pin 6: IO34; input. */
  "IO34": "6",
  /** Physical pin 7: IO35; input. */
  "IO35": "7",
  /** Physical pin 8: IO32; bidirectional. */
  "IO32": "8",
  /** Physical pin 9: IO33; bidirectional. */
  "IO33": "9",
  /** Physical pin 10: IO25; bidirectional. */
  "IO25": "10",
  /** Physical pin 11: IO26; bidirectional. */
  "IO26": "11",
  /** Physical pin 12: IO27; bidirectional. */
  "IO27": "12",
  /** Physical pin 13: IO14; bidirectional. */
  "IO14": "13",
  /** Physical pin 14: IO12; bidirectional. */
  "IO12": "14",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: IO15; bidirectional. */
  "IO15": "23",
  /** Physical pin 24: IO2; bidirectional. */
  "IO2": "24",
  /** Physical pin 25: IO0; bidirectional. */
  "IO0": "25",
  /** Physical pin 26: IO4; bidirectional. */
  "IO4": "26",
  /** Physical pin 27: IO16; bidirectional. */
  "IO16": "27",
  /** Physical pin 28: IO17; bidirectional. */
  "IO17": "28",
  /** Physical pin 29: IO5; bidirectional. */
  "IO5": "29",
  /** Physical pin 30: IO18; bidirectional. */
  "IO18": "30",
  /** Physical pin 31: IO19; bidirectional. */
  "IO19": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: IO21; bidirectional. */
  "IO21": "33",
  /** Physical pin 34: RXD0/IO3; bidirectional. */
  "RXD0/IO3": "34",
  /** Physical pin 35: TXD0/IO1; bidirectional. */
  "TXD0/IO1": "35",
  /** Physical pin 36: IO22; bidirectional. */
  "IO22": "36",
  /** Physical pin 37: IO23; bidirectional. */
  "IO23": "37",
  /** Physical pin [1,15,38,39]: GND; power_in. */
  "GND": "[1,15,38,39]",
}) {
  override schema = "RF_Module:ESP32-WROOM-32E";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WDR2-V3 SoC, with 2MB PSRAM, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 2.7-3.6V, onboard antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-WROOM-32E-R2`. Reference prefix: `U`.
 * Footprint filters: ESP32?WROOM?32E*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32e_esp32-wroom-32ue_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif onboard PCB antenna.
 * Default footprint: RF_Module:ESP32-WROOM-32E.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_WROOM_32E_R2 extends Component.withPins({
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SENSOR_VP; input. */
  "SENSOR_VP": "4",
  /** Physical pin 5: SENSOR_VN; input. */
  "SENSOR_VN": "5",
  /** Physical pin 6: IO34; input. */
  "IO34": "6",
  /** Physical pin 7: IO35; input. */
  "IO35": "7",
  /** Physical pin 8: IO32; bidirectional. */
  "IO32": "8",
  /** Physical pin 9: IO33; bidirectional. */
  "IO33": "9",
  /** Physical pin 10: IO25; bidirectional. */
  "IO25": "10",
  /** Physical pin 11: IO26; bidirectional. */
  "IO26": "11",
  /** Physical pin 12: IO27; bidirectional. */
  "IO27": "12",
  /** Physical pin 13: IO14; bidirectional. */
  "IO14": "13",
  /** Physical pin 14: IO12; bidirectional. */
  "IO12": "14",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: IO15; bidirectional. */
  "IO15": "23",
  /** Physical pin 24: IO2; bidirectional. */
  "IO2": "24",
  /** Physical pin 25: IO0; bidirectional. */
  "IO0": "25",
  /** Physical pin 26: IO4; bidirectional. */
  "IO4": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: IO17; bidirectional. */
  "IO17": "28",
  /** Physical pin 29: IO5; bidirectional. */
  "IO5": "29",
  /** Physical pin 30: IO18; bidirectional. */
  "IO18": "30",
  /** Physical pin 31: IO19; bidirectional. */
  "IO19": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: IO21; bidirectional. */
  "IO21": "33",
  /** Physical pin 34: RXD0/IO3; bidirectional. */
  "RXD0/IO3": "34",
  /** Physical pin 35: TXD0/IO1; bidirectional. */
  "TXD0/IO1": "35",
  /** Physical pin 36: IO22; bidirectional. */
  "IO22": "36",
  /** Physical pin 37: IO23; bidirectional. */
  "IO23": "37",
  /** Physical pin [1,15,38,39]: GND; power_in. */
  "GND": "[1,15,38,39]",
}) {
  override schema = "RF_Module:ESP32-WROOM-32E-R2";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WD SoC, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 2.7-3.6V, external antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-WROOM-32U`. Reference prefix: `U`.
 * Footprint filters: ESP32?WROOM?32U*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32d_esp32-wroom-32u_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif external U.FL antenna.
 * Default footprint: RF_Module:ESP32-WROOM-32U.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_WROOM_32U extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SENSOR_VP; input. */
  "SENSOR_VP": "4",
  /** Physical pin 5: SENSOR_VN; input. */
  "SENSOR_VN": "5",
  /** Physical pin 6: IO34; input. */
  "IO34": "6",
  /** Physical pin 7: IO35; input. */
  "IO35": "7",
  /** Physical pin 8: IO32; bidirectional. */
  "IO32": "8",
  /** Physical pin 9: IO33; bidirectional. */
  "IO33": "9",
  /** Physical pin 10: IO25; bidirectional. */
  "IO25": "10",
  /** Physical pin 11: IO26; bidirectional. */
  "IO26": "11",
  /** Physical pin 12: IO27; bidirectional. */
  "IO27": "12",
  /** Physical pin 13: IO14; bidirectional. */
  "IO14": "13",
  /** Physical pin 14: IO12; bidirectional. */
  "IO12": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: SHD/SD2; bidirectional. */
  "SHD/SD2": "17",
  /** Physical pin 18: SWP/SD3; bidirectional. */
  "SWP/SD3": "18",
  /** Physical pin 19: SCS/CMD; bidirectional. */
  "SCS/CMD": "19",
  /** Physical pin 20: SCK/CLK; bidirectional. */
  "SCK/CLK": "20",
  /** Physical pin 21: SDO/SD0; bidirectional. */
  "SDO/SD0": "21",
  /** Physical pin 22: SDI/SD1; bidirectional. */
  "SDI/SD1": "22",
  /** Physical pin 23: IO15; bidirectional. */
  "IO15": "23",
  /** Physical pin 24: IO2; bidirectional. */
  "IO2": "24",
  /** Physical pin 25: IO0; bidirectional. */
  "IO0": "25",
  /** Physical pin 26: IO4; bidirectional. */
  "IO4": "26",
  /** Physical pin 27: IO16; bidirectional. */
  "IO16": "27",
  /** Physical pin 28: IO17; bidirectional. */
  "IO17": "28",
  /** Physical pin 29: IO5; bidirectional. */
  "IO5": "29",
  /** Physical pin 30: IO18; bidirectional. */
  "IO18": "30",
  /** Physical pin 31: IO19; bidirectional. */
  "IO19": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC": "32",
  /** Physical pin 33: IO21; bidirectional. */
  "IO21": "33",
  /** Physical pin 34: RXD0/IO3; bidirectional. */
  "RXD0/IO3": "34",
  /** Physical pin 35: TXD0/IO1; bidirectional. */
  "TXD0/IO1": "35",
  /** Physical pin 36: IO22; bidirectional. */
  "IO22": "36",
  /** Physical pin 37: IO23; bidirectional. */
  "IO23": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
}) {
  override schema = "RF_Module:ESP32-WROOM-32U";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WD-V3 SoC, without PSRAM, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 2.7-3.6V, external antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-WROOM-32UE`. Reference prefix: `U`.
 * Footprint filters: ESP32?WROOM?32UE*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32e_esp32-wroom-32ue_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif external U.FL antenna.
 * Default footprint: RF_Module:ESP32-WROOM-32UE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_WROOM_32UE extends Component.withPins({
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SENSOR_VP; input. */
  "SENSOR_VP": "4",
  /** Physical pin 5: SENSOR_VN; input. */
  "SENSOR_VN": "5",
  /** Physical pin 6: IO34; input. */
  "IO34": "6",
  /** Physical pin 7: IO35; input. */
  "IO35": "7",
  /** Physical pin 8: IO32; bidirectional. */
  "IO32": "8",
  /** Physical pin 9: IO33; bidirectional. */
  "IO33": "9",
  /** Physical pin 10: IO25; bidirectional. */
  "IO25": "10",
  /** Physical pin 11: IO26; bidirectional. */
  "IO26": "11",
  /** Physical pin 12: IO27; bidirectional. */
  "IO27": "12",
  /** Physical pin 13: IO14; bidirectional. */
  "IO14": "13",
  /** Physical pin 14: IO12; bidirectional. */
  "IO12": "14",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: IO15; bidirectional. */
  "IO15": "23",
  /** Physical pin 24: IO2; bidirectional. */
  "IO2": "24",
  /** Physical pin 25: IO0; bidirectional. */
  "IO0": "25",
  /** Physical pin 26: IO4; bidirectional. */
  "IO4": "26",
  /** Physical pin 27: IO16; bidirectional. */
  "IO16": "27",
  /** Physical pin 28: IO17; bidirectional. */
  "IO17": "28",
  /** Physical pin 29: IO5; bidirectional. */
  "IO5": "29",
  /** Physical pin 30: IO18; bidirectional. */
  "IO18": "30",
  /** Physical pin 31: IO19; bidirectional. */
  "IO19": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: IO21; bidirectional. */
  "IO21": "33",
  /** Physical pin 34: RXD0/IO3; bidirectional. */
  "RXD0/IO3": "34",
  /** Physical pin 35: TXD0/IO1; bidirectional. */
  "TXD0/IO1": "35",
  /** Physical pin 36: IO22; bidirectional. */
  "IO22": "36",
  /** Physical pin 37: IO23; bidirectional. */
  "IO23": "37",
  /** Physical pin [1,15,38,39]: GND; power_in. */
  "GND": "[1,15,38,39]",
}) {
  override schema = "RF_Module:ESP32-WROOM-32UE";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32-D0WDR2-V3 SoC, with 2MB PSRAM, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 2.7-3.6V, onboard antenna, SMD
 *
 * KiCad symbol: `RF_Module:ESP32-WROOM-32UE-R2`. Reference prefix: `U`.
 * Footprint filters: ESP32?WROOM?32UE*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32e_esp32-wroom-32ue_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif external U.FL antenna.
 * Default footprint: RF_Module:ESP32-WROOM-32UE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_WROOM_32UE_R2 extends Component.withPins({
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 4: SENSOR_VP; input. */
  "SENSOR_VP": "4",
  /** Physical pin 5: SENSOR_VN; input. */
  "SENSOR_VN": "5",
  /** Physical pin 6: IO34; input. */
  "IO34": "6",
  /** Physical pin 7: IO35; input. */
  "IO35": "7",
  /** Physical pin 8: IO32; bidirectional. */
  "IO32": "8",
  /** Physical pin 9: IO33; bidirectional. */
  "IO33": "9",
  /** Physical pin 10: IO25; bidirectional. */
  "IO25": "10",
  /** Physical pin 11: IO26; bidirectional. */
  "IO26": "11",
  /** Physical pin 12: IO27; bidirectional. */
  "IO27": "12",
  /** Physical pin 13: IO14; bidirectional. */
  "IO14": "13",
  /** Physical pin 14: IO12; bidirectional. */
  "IO12": "14",
  /** Physical pin 16: IO13; bidirectional. */
  "IO13": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: IO15; bidirectional. */
  "IO15": "23",
  /** Physical pin 24: IO2; bidirectional. */
  "IO2": "24",
  /** Physical pin 25: IO0; bidirectional. */
  "IO0": "25",
  /** Physical pin 26: IO4; bidirectional. */
  "IO4": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: IO17; bidirectional. */
  "IO17": "28",
  /** Physical pin 29: IO5; bidirectional. */
  "IO5": "29",
  /** Physical pin 30: IO18; bidirectional. */
  "IO18": "30",
  /** Physical pin 31: IO19; bidirectional. */
  "IO19": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: IO21; bidirectional. */
  "IO21": "33",
  /** Physical pin 34: RXD0/IO3; bidirectional. */
  "RXD0/IO3": "34",
  /** Physical pin 35: TXD0/IO1; bidirectional. */
  "TXD0/IO1": "35",
  /** Physical pin 36: IO22; bidirectional. */
  "IO22": "36",
  /** Physical pin 37: IO23; bidirectional. */
  "IO23": "37",
  /** Physical pin [1,15,38,39]: GND; power_in. */
  "GND": "[1,15,38,39]",
}) {
  override schema = "RF_Module:ESP32-WROOM-32UE-R2";
  override referencePrefix = "U";
}

/**
 * LoRa/LoRaWAN node module with ESP32-C3 and SX1262
 *
 * KiCad symbol: `RF_Module:HT-CT62`. Reference prefix: `U`.
 * Footprint filters: *HT?CT62*.
 * @see https://resource.heltec.cn/download/HT-CT62/HT-CT62(Rev1.1).pdf
 * Keywords: LoRa WiFi ESP32 SX1262.
 * Default footprint: RF_Module:Heltec_HT-CT62.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HT_CT62 extends Component.withPins({
  /** Physical pin 1: 2.4G_Ant; bidirectional. */
  "2.4G_Ant": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: GPIO7; bidirectional. */
  "GPIO7": "3",
  /** Physical pin 4: GPIO6; bidirectional. */
  "GPIO6": "4",
  /** Physical pin 5: GPIO5; bidirectional. */
  "GPIO5": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: GPIO3; bidirectional. */
  "GPIO3": "7",
  /** Physical pin 8: GPIO2; bidirectional. */
  "GPIO2": "8",
  /** Physical pin 9: GPIO1; bidirectional. */
  "GPIO1": "9",
  /** Physical pin 10: GPIO0; bidirectional. */
  "GPIO0": "10",
  /** Physical pin 11: EN; input. */
  "EN": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO9; bidirectional. */
  "GPIO9": "15",
  /** Physical pin 16: GPIO8; bidirectional. */
  "GPIO8": "16",
  /** Physical pin 17: GPIO18_DN; bidirectional. */
  "GPIO18_DN": "17",
  /** Physical pin 18: GPIO19_DP; bidirectional. */
  "GPIO19_DP": "18",
  /** Physical pin 19: GPIO20_RXD; bidirectional. */
  "GPIO20_RXD": "19",
  /** Physical pin 20: GPIO21_TXD; bidirectional. */
  "GPIO21_TXD": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: LoRa_Ant; bidirectional. */
  "LoRa_Ant": "22",
}) {
  override schema = "RF_Module:HT-CT62";
  override referencePrefix = "U";
}

/**
 * RFID UHF module, 1 antenna port, 27dBm, edge pin connections
 *
 * KiCad symbol: `RF_Module:Jadak_Thingmagic_M6e-Nano`. Reference prefix: `U`.
 * Footprint filters: *Thingmagic*M6e?Nano*.
 * @see https://www.jadaktech.com/product/thingmagic-m6e-nano-uhf-rain-rfid
 * Keywords: Jadak Thingmagic M6e Nano.
 * Default footprint: RF_Module:Jadak_Thingmagic_M6e-Nano.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Jadak_Thingmagic_M6e_Nano extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: Vout; power_out. */
  "Vout": "10",
  /** Physical pin 11: EN; input. */
  "EN": "11",
  /** Physical pin 12: GPIO1; bidirectional. */
  "GPIO1": "12",
  /** Physical pin 13: GPIO2; bidirectional. */
  "GPIO2": "13",
  /** Physical pin 14: GPIO3; bidirectional. */
  "GPIO3": "14",
  /** Physical pin 15: GPIO4; bidirectional. */
  "GPIO4": "15",
  /** Physical pin 16: Vin; power_in. */
  "Vin_16": "16",
  /** Physical pin 17: Vin; passive. */
  "Vin_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: UART_TX; output. */
  "UART_TX": "20",
  /** Physical pin 21: UART_RX; input. */
  "UART_RX": "21",
  /** Physical pin 22: RFU1; no_connect. */
  "RFU1": "22",
  /** Physical pin 23: RFU2; no_connect. */
  "RFU2": "23",
  /** Physical pin 24: RFU3; no_connect. */
  "RFU3": "24",
  /** Physical pin 25: RFU4; no_connect. */
  "RFU4": "25",
  /** Physical pin 26: RFU5; no_connect. */
  "RFU5": "26",
  /** Physical pin 27: RFU6; no_connect. */
  "RFU6": "27",
  /** Physical pin 28: RFU7; no_connect. */
  "RFU7": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: RF; bidirectional. */
  "RF": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
}) {
  override schema = "RF_Module:Jadak_Thingmagic_M6e-Nano";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, nRF52832 module, ceramic antenna
 *
 * KiCad symbol: `RF_Module:MDBT42Q-512K`. Reference prefix: `U`.
 * Footprint filters: Raytac?MDBT42Q*.
 * @see https://www.raytac.com/download/index.php?index_id=27
 * Keywords: MCU ARM BLE ANT 2.4GHz 802.15.4 MDBT42Q.
 * Default footprint: RF_Module:Raytac_MDBT42Q.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MDBT42Q_512K extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: P0.25; bidirectional. */
  "P0.25": "2",
  /** Physical pin 3: P0.26; bidirectional. */
  "P0.26": "3",
  /** Physical pin 4: P0.27; bidirectional. */
  "P0.27": "4",
  /** Physical pin 5: AIN4/P0.28; bidirectional. */
  "AIN4/P0.28": "5",
  /** Physical pin 6: AIN5/P0.29; bidirectional. */
  "AIN5/P0.29": "6",
  /** Physical pin 7: AIN6/P0.30; bidirectional. */
  "AIN6/P0.30": "7",
  /** Physical pin 8: AIN7/P0.31; bidirectional. */
  "AIN7/P0.31": "8",
  /** Physical pin 9: DEC4; power_out. */
  "DEC4": "9",
  /** Physical pin 10: DCC; power_out. */
  "DCC": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P0.00/XL1; bidirectional. */
  "P0.00/XL1": "13",
  /** Physical pin 14: P0.01/XL2; bidirectional. */
  "P0.01/XL2": "14",
  /** Physical pin 15: AIN0/P0.02; bidirectional. */
  "AIN0/P0.02": "15",
  /** Physical pin 16: AIN1/P0.03; bidirectional. */
  "AIN1/P0.03": "16",
  /** Physical pin 17: AIN2/P0.04; bidirectional. */
  "AIN2/P0.04": "17",
  /** Physical pin 18: AIN3/P0.05; bidirectional. */
  "AIN3/P0.05": "18",
  /** Physical pin 19: P0.06; bidirectional. */
  "P0.06": "19",
  /** Physical pin 20: P0.07; bidirectional. */
  "P0.07": "20",
  /** Physical pin 21: P0.08; bidirectional. */
  "P0.08": "21",
  /** Physical pin 22: NFC1/P0.09; bidirectional. */
  "NFC1/P0.09": "22",
  /** Physical pin 23: NFC2/P0.10; bidirectional. */
  "NFC2/P0.10": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: P0.11; bidirectional. */
  "P0.11": "25",
  /** Physical pin 26: P0.12; bidirectional. */
  "P0.12": "26",
  /** Physical pin 27: P0.13; bidirectional. */
  "P0.13": "27",
  /** Physical pin 28: TRACEDATA3/P0.14; bidirectional. */
  "TRACEDATA3/P0.14": "28",
  /** Physical pin 29: TRACEDATA2/P0.15; bidirectional. */
  "TRACEDATA2/P0.15": "29",
  /** Physical pin 30: TRACEDATA1/P0.16; bidirectional. */
  "TRACEDATA1/P0.16": "30",
  /** Physical pin 31: P0.17; bidirectional. */
  "P0.17": "31",
  /** Physical pin 32: TRACEDATA0/P0.18; bidirectional. */
  "TRACEDATA0/P0.18": "32",
  /** Physical pin 33: P0.19; bidirectional. */
  "P0.19": "33",
  /** Physical pin 34: TRACECLK/P0.20; bidirectional. */
  "TRACECLK/P0.20": "34",
  /** Physical pin 35: P0.21/~{RESET}; bidirectional. */
  "P0.21/~{RESET}": "35",
  /** Physical pin 36: SWDCLK; input. */
  "SWDCLK": "36",
  /** Physical pin 37: SWDIO; bidirectional. */
  "SWDIO": "37",
  /** Physical pin 38: P0.22; bidirectional. */
  "P0.22": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: P0.24; bidirectional. */
  "P0.24": "40",
  /** Physical pin 41: P0.23; bidirectional. */
  "P0.23": "41",
}) {
  override schema = "RF_Module:MDBT42Q-512K";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, nRF52840 module
 *
 * KiCad symbol: `RF_Module:MDBT50Q-1MV2`. Reference prefix: `U`.
 * Footprint filters: Raytac?MDBT50Q*.
 * @see https://www.raytac.com/download/index.php?index_id=43
 * Keywords: BLE ANT ZigBee Thread 802.15.4 nRF52840 nordic MDBT50Q.
 * Default footprint: RF_Module:Raytac_MDBT50Q.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MDBT50Q_1MV2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: P1.10; bidirectional. */
  "P1.10": "3",
  /** Physical pin 4: P1.11; bidirectional. */
  "P1.11": "4",
  /** Physical pin 5: P1.12; bidirectional. */
  "P1.12": "5",
  /** Physical pin 6: P1.13; bidirectional. */
  "P1.13": "6",
  /** Physical pin 7: P1.14; bidirectional. */
  "P1.14": "7",
  /** Physical pin 8: P1.15; bidirectional. */
  "P1.15": "8",
  /** Physical pin 9: P0.03; bidirectional. */
  "P0.03": "9",
  /** Physical pin 10: P0.29; bidirectional. */
  "P0.29": "10",
  /** Physical pin 11: P0.02; bidirectional. */
  "P0.02": "11",
  /** Physical pin 12: P0.31; bidirectional. */
  "P0.31": "12",
  /** Physical pin 13: P0.28; bidirectional. */
  "P0.28": "13",
  /** Physical pin 14: P0.30; bidirectional. */
  "P0.30": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: P0.27; bidirectional. */
  "P0.27": "16",
  /** Physical pin 17: P0.00; bidirectional. */
  "P0.00": "17",
  /** Physical pin 18: P0.01; bidirectional. */
  "P0.01": "18",
  /** Physical pin 19: P0.26; bidirectional. */
  "P0.26": "19",
  /** Physical pin 20: P0.04; bidirectional. */
  "P0.04": "20",
  /** Physical pin 21: P0.05; bidirectional. */
  "P0.05": "21",
  /** Physical pin 22: P0.06; bidirectional. */
  "P0.06": "22",
  /** Physical pin 23: P0.07; bidirectional. */
  "P0.07": "23",
  /** Physical pin 24: P0.08; bidirectional. */
  "P0.08": "24",
  /** Physical pin 25: P1.08; bidirectional. */
  "P1.08": "25",
  /** Physical pin 26: P1.09; bidirectional. */
  "P1.09": "26",
  /** Physical pin 27: P0.11; bidirectional. */
  "P0.11": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 29: P0.12; bidirectional. */
  "P0.12": "29",
  /** Physical pin 30: VDDH; power_in. */
  "VDDH": "30",
  /** Physical pin 31: DCCH; power_out. */
  "DCCH": "31",
  /** Physical pin 32: VBUS; power_in. */
  "VBUS": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: D-; bidirectional. */
  "D-": "34",
  /** Physical pin 35: D+; bidirectional. */
  "D+": "35",
  /** Physical pin 36: P0.14; bidirectional. */
  "P0.14": "36",
  /** Physical pin 37: P0.13; bidirectional. */
  "P0.13": "37",
  /** Physical pin 38: P0.16; bidirectional. */
  "P0.16": "38",
  /** Physical pin 39: P0.15; bidirectional. */
  "P0.15": "39",
  /** Physical pin 40: P0.18; bidirectional. */
  "P0.18": "40",
  /** Physical pin 41: P0.17; bidirectional. */
  "P0.17": "41",
  /** Physical pin 42: P0.19; bidirectional. */
  "P0.19": "42",
  /** Physical pin 43: P0.21; bidirectional. */
  "P0.21": "43",
  /** Physical pin 44: P0.20; bidirectional. */
  "P0.20": "44",
  /** Physical pin 45: P0.23; bidirectional. */
  "P0.23": "45",
  /** Physical pin 46: P0.22; bidirectional. */
  "P0.22": "46",
  /** Physical pin 47: P1.00; bidirectional. */
  "P1.00": "47",
  /** Physical pin 48: P0.24; bidirectional. */
  "P0.24": "48",
  /** Physical pin 49: P0.25; bidirectional. */
  "P0.25": "49",
  /** Physical pin 50: P1.02; bidirectional. */
  "P1.02": "50",
  /** Physical pin 51: SWDIO; bidirectional. */
  "SWDIO": "51",
  /** Physical pin 52: P0.09; bidirectional. */
  "P0.09": "52",
  /** Physical pin 53: SWDCLK; input. */
  "SWDCLK": "53",
  /** Physical pin 54: P0.10; bidirectional. */
  "P0.10": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: P1.04; bidirectional. */
  "P1.04": "56",
  /** Physical pin 57: P1.06; bidirectional. */
  "P1.06": "57",
  /** Physical pin 58: P1.07; bidirectional. */
  "P1.07": "58",
  /** Physical pin 59: P1.05; bidirectional. */
  "P1.05": "59",
  /** Physical pin 60: P1.03; bidirectional. */
  "P1.03": "60",
  /** Physical pin 61: P1.01; bidirectional. */
  "P1.01": "61",
}) {
  override schema = "RF_Module:MDBT50Q-1MV2";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, nRF52833 module
 *
 * KiCad symbol: `RF_Module:MDBT50Q-512K`. Reference prefix: `U`.
 * Footprint filters: Raytac?MDBT50Q*.
 * @see https://www.raytac.com/download/index.php?index_id=46
 * Keywords: MCU, ARM, BLE, ANT, 2.4GHz, 802.15.4 MDBT50Q.
 * Default footprint: RF_Module:Raytac_MDBT50Q.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MDBT50Q_512K extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: P0.25; bidirectional. */
  "P0.25": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: P0.23; bidirectional. */
  "P0.23": "5",
  /** Physical pin 6: P1.05; bidirectional. */
  "P1.05": "6",
  /** Physical pin 7: P1.03; bidirectional. */
  "P1.03": "7",
  /** Physical pin 8: P0.19; bidirectional. */
  "P0.19_8": "8",
  /** Physical pin 9: P0.03; bidirectional. */
  "P0.03": "9",
  /** Physical pin 10: P0.29; bidirectional. */
  "P0.29": "10",
  /** Physical pin 11: P0.02; bidirectional. */
  "P0.02": "11",
  /** Physical pin 12: P0.31; bidirectional. */
  "P0.31": "12",
  /** Physical pin 13: P0.28; bidirectional. */
  "P0.28": "13",
  /** Physical pin 14: P0.30; bidirectional. */
  "P0.30": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: P0.27; bidirectional. */
  "P0.27": "16",
  /** Physical pin 17: P0.00; bidirectional. */
  "P0.00": "17",
  /** Physical pin 18: P0.01; bidirectional. */
  "P0.01": "18",
  /** Physical pin 19: P0.26; bidirectional. */
  "P0.26": "19",
  /** Physical pin 20: P0.04; bidirectional. */
  "P0.04": "20",
  /** Physical pin 21: P0.05; bidirectional. */
  "P0.05": "21",
  /** Physical pin 22: P0.06; bidirectional. */
  "P0.06": "22",
  /** Physical pin 23: P0.07; bidirectional. */
  "P0.07": "23",
  /** Physical pin 24: P0.08; bidirectional. */
  "P0.08": "24",
  /** Physical pin 25: P1.08; bidirectional. */
  "P1.08": "25",
  /** Physical pin 26: P1.09; bidirectional. */
  "P1.09": "26",
  /** Physical pin 27: P0.11; bidirectional. */
  "P0.11": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 29: P0.12; bidirectional. */
  "P0.12": "29",
  /** Physical pin 30: VDDH; power_in. */
  "VDDH": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: VBUS; power_in. */
  "VBUS": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: D-; bidirectional. */
  "D-": "34",
  /** Physical pin 35: D+; bidirectional. */
  "D+": "35",
  /** Physical pin 36: P0.14; bidirectional. */
  "P0.14": "36",
  /** Physical pin 37: P0.13; bidirectional. */
  "P0.13": "37",
  /** Physical pin 38: P0.16; bidirectional. */
  "P0.16": "38",
  /** Physical pin 39: P0.15; bidirectional. */
  "P0.15": "39",
  /** Physical pin 40: P0.18; bidirectional. */
  "P0.18": "40",
  /** Physical pin 41: P0.17; bidirectional. */
  "P0.17": "41",
  /** Physical pin 42: P0.19; no_connect. */
  "P0.19_42": "42",
  /** Physical pin 43: P0.21; bidirectional. */
  "P0.21": "43",
  /** Physical pin 44: P0.20; bidirectional. */
  "P0.20": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: P0.22; bidirectional. */
  "P0.22": "46",
  /** Physical pin 47: P1.00; bidirectional. */
  "P1.00": "47",
  /** Physical pin 48: P0.24; bidirectional. */
  "P0.24": "48",
  /** Physical pin 49: NC; no_connect. */
  "NC_49": "49",
  /** Physical pin 50: P1.02; bidirectional. */
  "P1.02": "50",
  /** Physical pin 51: SWDIO; bidirectional. */
  "SWDIO": "51",
  /** Physical pin 52: P0.09; bidirectional. */
  "P0.09": "52",
  /** Physical pin 53: SWDCLK; input. */
  "SWDCLK": "53",
  /** Physical pin 54: P0.10; bidirectional. */
  "P0.10": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: P1.04; bidirectional. */
  "P1.04": "56",
  /** Physical pin 57: P1.06; bidirectional. */
  "P1.06": "57",
  /** Physical pin 58: P1.07; bidirectional. */
  "P1.07": "58",
  /** Physical pin 59: NC; no_connect. */
  "NC_59": "59",
  /** Physical pin 60: NC; no_connect. */
  "NC_60": "60",
  /** Physical pin 61: P1.01; bidirectional. */
  "P1.01": "61",
}) {
  override schema = "RF_Module:MDBT50Q-512K";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, nRF52840 module
 *
 * KiCad symbol: `RF_Module:MDBT50Q-P1MV2`. Reference prefix: `U`.
 * Footprint filters: Raytac?MDBT50Q*.
 * @see https://www.raytac.com/download/index.php?index_id=43
 * Keywords: BLE ANT ZigBee Thread 802.15.4 nRF52840 nordic MDBT50Q.
 * Default footprint: RF_Module:Raytac_MDBT50Q.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MDBT50Q_P1MV2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: P1.10; bidirectional. */
  "P1.10": "3",
  /** Physical pin 4: P1.11; bidirectional. */
  "P1.11": "4",
  /** Physical pin 5: P1.12; bidirectional. */
  "P1.12": "5",
  /** Physical pin 6: P1.13; bidirectional. */
  "P1.13": "6",
  /** Physical pin 7: P1.14; bidirectional. */
  "P1.14": "7",
  /** Physical pin 8: P1.15; bidirectional. */
  "P1.15": "8",
  /** Physical pin 9: P0.03; bidirectional. */
  "P0.03": "9",
  /** Physical pin 10: P0.29; bidirectional. */
  "P0.29": "10",
  /** Physical pin 11: P0.02; bidirectional. */
  "P0.02": "11",
  /** Physical pin 12: P0.31; bidirectional. */
  "P0.31": "12",
  /** Physical pin 13: P0.28; bidirectional. */
  "P0.28": "13",
  /** Physical pin 14: P0.30; bidirectional. */
  "P0.30": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: P0.27; bidirectional. */
  "P0.27": "16",
  /** Physical pin 17: P0.00; bidirectional. */
  "P0.00": "17",
  /** Physical pin 18: P0.01; bidirectional. */
  "P0.01": "18",
  /** Physical pin 19: P0.26; bidirectional. */
  "P0.26": "19",
  /** Physical pin 20: P0.04; bidirectional. */
  "P0.04": "20",
  /** Physical pin 21: P0.05; bidirectional. */
  "P0.05": "21",
  /** Physical pin 22: P0.06; bidirectional. */
  "P0.06": "22",
  /** Physical pin 23: P0.07; bidirectional. */
  "P0.07": "23",
  /** Physical pin 24: P0.08; bidirectional. */
  "P0.08": "24",
  /** Physical pin 25: P1.08; bidirectional. */
  "P1.08": "25",
  /** Physical pin 26: P1.09; bidirectional. */
  "P1.09": "26",
  /** Physical pin 27: P0.11; bidirectional. */
  "P0.11": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 29: P0.12; bidirectional. */
  "P0.12": "29",
  /** Physical pin 30: VDDH; power_in. */
  "VDDH": "30",
  /** Physical pin 31: DCCH; power_out. */
  "DCCH": "31",
  /** Physical pin 32: VBUS; power_in. */
  "VBUS": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: D-; bidirectional. */
  "D-": "34",
  /** Physical pin 35: D+; bidirectional. */
  "D+": "35",
  /** Physical pin 36: P0.14; bidirectional. */
  "P0.14": "36",
  /** Physical pin 37: P0.13; bidirectional. */
  "P0.13": "37",
  /** Physical pin 38: P0.16; bidirectional. */
  "P0.16": "38",
  /** Physical pin 39: P0.15; bidirectional. */
  "P0.15": "39",
  /** Physical pin 40: P0.18; bidirectional. */
  "P0.18": "40",
  /** Physical pin 41: P0.17; bidirectional. */
  "P0.17": "41",
  /** Physical pin 42: P0.19; bidirectional. */
  "P0.19": "42",
  /** Physical pin 43: P0.21; bidirectional. */
  "P0.21": "43",
  /** Physical pin 44: P0.20; bidirectional. */
  "P0.20": "44",
  /** Physical pin 45: P0.23; bidirectional. */
  "P0.23": "45",
  /** Physical pin 46: P0.22; bidirectional. */
  "P0.22": "46",
  /** Physical pin 47: P1.00; bidirectional. */
  "P1.00": "47",
  /** Physical pin 48: P0.24; bidirectional. */
  "P0.24": "48",
  /** Physical pin 49: P0.25; bidirectional. */
  "P0.25": "49",
  /** Physical pin 50: P1.02; bidirectional. */
  "P1.02": "50",
  /** Physical pin 51: SWDIO; bidirectional. */
  "SWDIO": "51",
  /** Physical pin 52: P0.09; bidirectional. */
  "P0.09": "52",
  /** Physical pin 53: SWDCLK; input. */
  "SWDCLK": "53",
  /** Physical pin 54: P0.10; bidirectional. */
  "P0.10": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: P1.04; bidirectional. */
  "P1.04": "56",
  /** Physical pin 57: P1.06; bidirectional. */
  "P1.06": "57",
  /** Physical pin 58: P1.07; bidirectional. */
  "P1.07": "58",
  /** Physical pin 59: P1.05; bidirectional. */
  "P1.05": "59",
  /** Physical pin 60: P1.03; bidirectional. */
  "P1.03": "60",
  /** Physical pin 61: P1.01; bidirectional. */
  "P1.01": "61",
}) {
  override schema = "RF_Module:MDBT50Q-P1MV2";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, nRF52833 module
 *
 * KiCad symbol: `RF_Module:MDBT50Q-P512K`. Reference prefix: `U`.
 * Footprint filters: Raytac?MDBT50Q*.
 * @see https://www.raytac.com/download/index.php?index_id=46
 * Keywords: MCU, ARM, BLE, ANT, 2.4GHz, 802.15.4 MDBT50Q.
 * Default footprint: RF_Module:Raytac_MDBT50Q.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MDBT50Q_P512K extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: P0.25; bidirectional. */
  "P0.25": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: P0.23; bidirectional. */
  "P0.23": "5",
  /** Physical pin 6: P1.05; bidirectional. */
  "P1.05": "6",
  /** Physical pin 7: P1.03; bidirectional. */
  "P1.03": "7",
  /** Physical pin 8: P0.19; bidirectional. */
  "P0.19_8": "8",
  /** Physical pin 9: P0.03; bidirectional. */
  "P0.03": "9",
  /** Physical pin 10: P0.29; bidirectional. */
  "P0.29": "10",
  /** Physical pin 11: P0.02; bidirectional. */
  "P0.02": "11",
  /** Physical pin 12: P0.31; bidirectional. */
  "P0.31": "12",
  /** Physical pin 13: P0.28; bidirectional. */
  "P0.28": "13",
  /** Physical pin 14: P0.30; bidirectional. */
  "P0.30": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: P0.27; bidirectional. */
  "P0.27": "16",
  /** Physical pin 17: P0.00; bidirectional. */
  "P0.00": "17",
  /** Physical pin 18: P0.01; bidirectional. */
  "P0.01": "18",
  /** Physical pin 19: P0.26; bidirectional. */
  "P0.26": "19",
  /** Physical pin 20: P0.04; bidirectional. */
  "P0.04": "20",
  /** Physical pin 21: P0.05; bidirectional. */
  "P0.05": "21",
  /** Physical pin 22: P0.06; bidirectional. */
  "P0.06": "22",
  /** Physical pin 23: P0.07; bidirectional. */
  "P0.07": "23",
  /** Physical pin 24: P0.08; bidirectional. */
  "P0.08": "24",
  /** Physical pin 25: P1.08; bidirectional. */
  "P1.08": "25",
  /** Physical pin 26: P1.09; bidirectional. */
  "P1.09": "26",
  /** Physical pin 27: P0.11; bidirectional. */
  "P0.11": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 29: P0.12; bidirectional. */
  "P0.12": "29",
  /** Physical pin 30: VDDH; power_in. */
  "VDDH": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: VBUS; power_in. */
  "VBUS": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: D-; bidirectional. */
  "D-": "34",
  /** Physical pin 35: D+; bidirectional. */
  "D+": "35",
  /** Physical pin 36: P0.14; bidirectional. */
  "P0.14": "36",
  /** Physical pin 37: P0.13; bidirectional. */
  "P0.13": "37",
  /** Physical pin 38: P0.16; bidirectional. */
  "P0.16": "38",
  /** Physical pin 39: P0.15; bidirectional. */
  "P0.15": "39",
  /** Physical pin 40: P0.18; bidirectional. */
  "P0.18": "40",
  /** Physical pin 41: P0.17; bidirectional. */
  "P0.17": "41",
  /** Physical pin 42: P0.19; no_connect. */
  "P0.19_42": "42",
  /** Physical pin 43: P0.21; bidirectional. */
  "P0.21": "43",
  /** Physical pin 44: P0.20; bidirectional. */
  "P0.20": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: P0.22; bidirectional. */
  "P0.22": "46",
  /** Physical pin 47: P1.00; bidirectional. */
  "P1.00": "47",
  /** Physical pin 48: P0.24; bidirectional. */
  "P0.24": "48",
  /** Physical pin 49: NC; no_connect. */
  "NC_49": "49",
  /** Physical pin 50: P1.02; bidirectional. */
  "P1.02": "50",
  /** Physical pin 51: SWDIO; bidirectional. */
  "SWDIO": "51",
  /** Physical pin 52: P0.09; bidirectional. */
  "P0.09": "52",
  /** Physical pin 53: SWDCLK; input. */
  "SWDCLK": "53",
  /** Physical pin 54: P0.10; bidirectional. */
  "P0.10": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: P1.04; bidirectional. */
  "P1.04": "56",
  /** Physical pin 57: P1.06; bidirectional. */
  "P1.06": "57",
  /** Physical pin 58: P1.07; bidirectional. */
  "P1.07": "58",
  /** Physical pin 59: NC; no_connect. */
  "NC_59": "59",
  /** Physical pin 60: NC; no_connect. */
  "NC_60": "60",
  /** Physical pin 61: P1.01; bidirectional. */
  "P1.01": "61",
}) {
  override schema = "RF_Module:MDBT50Q-P512K";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, nRF52840 module
 *
 * KiCad symbol: `RF_Module:MDBT50Q-U1MV2`. Reference prefix: `U`.
 * Footprint filters: Raytac?MDBT50Q*.
 * @see https://www.raytac.com/download/index.php?index_id=43
 * Keywords: BLE ANT ZigBee Thread 802.15.4 nRF52840 nordic MDBT50Q.
 * Default footprint: RF_Module:Raytac_MDBT50Q.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MDBT50Q_U1MV2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: P1.10; bidirectional. */
  "P1.10": "3",
  /** Physical pin 4: P1.11; bidirectional. */
  "P1.11": "4",
  /** Physical pin 5: P1.12; bidirectional. */
  "P1.12": "5",
  /** Physical pin 6: P1.13; bidirectional. */
  "P1.13": "6",
  /** Physical pin 7: P1.14; bidirectional. */
  "P1.14": "7",
  /** Physical pin 8: P1.15; bidirectional. */
  "P1.15": "8",
  /** Physical pin 9: P0.03; bidirectional. */
  "P0.03": "9",
  /** Physical pin 10: P0.29; bidirectional. */
  "P0.29": "10",
  /** Physical pin 11: P0.02; bidirectional. */
  "P0.02": "11",
  /** Physical pin 12: P0.31; bidirectional. */
  "P0.31": "12",
  /** Physical pin 13: P0.28; bidirectional. */
  "P0.28": "13",
  /** Physical pin 14: P0.30; bidirectional. */
  "P0.30": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: P0.27; bidirectional. */
  "P0.27": "16",
  /** Physical pin 17: P0.00; bidirectional. */
  "P0.00": "17",
  /** Physical pin 18: P0.01; bidirectional. */
  "P0.01": "18",
  /** Physical pin 19: P0.26; bidirectional. */
  "P0.26": "19",
  /** Physical pin 20: P0.04; bidirectional. */
  "P0.04": "20",
  /** Physical pin 21: P0.05; bidirectional. */
  "P0.05": "21",
  /** Physical pin 22: P0.06; bidirectional. */
  "P0.06": "22",
  /** Physical pin 23: P0.07; bidirectional. */
  "P0.07": "23",
  /** Physical pin 24: P0.08; bidirectional. */
  "P0.08": "24",
  /** Physical pin 25: P1.08; bidirectional. */
  "P1.08": "25",
  /** Physical pin 26: P1.09; bidirectional. */
  "P1.09": "26",
  /** Physical pin 27: P0.11; bidirectional. */
  "P0.11": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 29: P0.12; bidirectional. */
  "P0.12": "29",
  /** Physical pin 30: VDDH; power_in. */
  "VDDH": "30",
  /** Physical pin 31: DCCH; power_out. */
  "DCCH": "31",
  /** Physical pin 32: VBUS; power_in. */
  "VBUS": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: D-; bidirectional. */
  "D-": "34",
  /** Physical pin 35: D+; bidirectional. */
  "D+": "35",
  /** Physical pin 36: P0.14; bidirectional. */
  "P0.14": "36",
  /** Physical pin 37: P0.13; bidirectional. */
  "P0.13": "37",
  /** Physical pin 38: P0.16; bidirectional. */
  "P0.16": "38",
  /** Physical pin 39: P0.15; bidirectional. */
  "P0.15": "39",
  /** Physical pin 40: P0.18; bidirectional. */
  "P0.18": "40",
  /** Physical pin 41: P0.17; bidirectional. */
  "P0.17": "41",
  /** Physical pin 42: P0.19; bidirectional. */
  "P0.19": "42",
  /** Physical pin 43: P0.21; bidirectional. */
  "P0.21": "43",
  /** Physical pin 44: P0.20; bidirectional. */
  "P0.20": "44",
  /** Physical pin 45: P0.23; bidirectional. */
  "P0.23": "45",
  /** Physical pin 46: P0.22; bidirectional. */
  "P0.22": "46",
  /** Physical pin 47: P1.00; bidirectional. */
  "P1.00": "47",
  /** Physical pin 48: P0.24; bidirectional. */
  "P0.24": "48",
  /** Physical pin 49: P0.25; bidirectional. */
  "P0.25": "49",
  /** Physical pin 50: P1.02; bidirectional. */
  "P1.02": "50",
  /** Physical pin 51: SWDIO; bidirectional. */
  "SWDIO": "51",
  /** Physical pin 52: P0.09; bidirectional. */
  "P0.09": "52",
  /** Physical pin 53: SWDCLK; input. */
  "SWDCLK": "53",
  /** Physical pin 54: P0.10; bidirectional. */
  "P0.10": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: P1.04; bidirectional. */
  "P1.04": "56",
  /** Physical pin 57: P1.06; bidirectional. */
  "P1.06": "57",
  /** Physical pin 58: P1.07; bidirectional. */
  "P1.07": "58",
  /** Physical pin 59: P1.05; bidirectional. */
  "P1.05": "59",
  /** Physical pin 60: P1.03; bidirectional. */
  "P1.03": "60",
  /** Physical pin 61: P1.01; bidirectional. */
  "P1.01": "61",
}) {
  override schema = "RF_Module:MDBT50Q-U1MV2";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, nRF52833 module
 *
 * KiCad symbol: `RF_Module:MDBT50Q-U512K`. Reference prefix: `U`.
 * Footprint filters: Raytac?MDBT50Q*.
 * @see https://www.raytac.com/download/index.php?index_id=46
 * Keywords: MCU, ARM, BLE, ANT, 2.4GHz, 802.15.4 MDBT50Q.
 * Default footprint: RF_Module:Raytac_MDBT50Q.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MDBT50Q_U512K extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: P0.25; bidirectional. */
  "P0.25": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: P0.23; bidirectional. */
  "P0.23": "5",
  /** Physical pin 6: P1.05; bidirectional. */
  "P1.05": "6",
  /** Physical pin 7: P1.03; bidirectional. */
  "P1.03": "7",
  /** Physical pin 8: P0.19; bidirectional. */
  "P0.19_8": "8",
  /** Physical pin 9: P0.03; bidirectional. */
  "P0.03": "9",
  /** Physical pin 10: P0.29; bidirectional. */
  "P0.29": "10",
  /** Physical pin 11: P0.02; bidirectional. */
  "P0.02": "11",
  /** Physical pin 12: P0.31; bidirectional. */
  "P0.31": "12",
  /** Physical pin 13: P0.28; bidirectional. */
  "P0.28": "13",
  /** Physical pin 14: P0.30; bidirectional. */
  "P0.30": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: P0.27; bidirectional. */
  "P0.27": "16",
  /** Physical pin 17: P0.00; bidirectional. */
  "P0.00": "17",
  /** Physical pin 18: P0.01; bidirectional. */
  "P0.01": "18",
  /** Physical pin 19: P0.26; bidirectional. */
  "P0.26": "19",
  /** Physical pin 20: P0.04; bidirectional. */
  "P0.04": "20",
  /** Physical pin 21: P0.05; bidirectional. */
  "P0.05": "21",
  /** Physical pin 22: P0.06; bidirectional. */
  "P0.06": "22",
  /** Physical pin 23: P0.07; bidirectional. */
  "P0.07": "23",
  /** Physical pin 24: P0.08; bidirectional. */
  "P0.08": "24",
  /** Physical pin 25: P1.08; bidirectional. */
  "P1.08": "25",
  /** Physical pin 26: P1.09; bidirectional. */
  "P1.09": "26",
  /** Physical pin 27: P0.11; bidirectional. */
  "P0.11": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 29: P0.12; bidirectional. */
  "P0.12": "29",
  /** Physical pin 30: VDDH; power_in. */
  "VDDH": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: VBUS; power_in. */
  "VBUS": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: D-; bidirectional. */
  "D-": "34",
  /** Physical pin 35: D+; bidirectional. */
  "D+": "35",
  /** Physical pin 36: P0.14; bidirectional. */
  "P0.14": "36",
  /** Physical pin 37: P0.13; bidirectional. */
  "P0.13": "37",
  /** Physical pin 38: P0.16; bidirectional. */
  "P0.16": "38",
  /** Physical pin 39: P0.15; bidirectional. */
  "P0.15": "39",
  /** Physical pin 40: P0.18; bidirectional. */
  "P0.18": "40",
  /** Physical pin 41: P0.17; bidirectional. */
  "P0.17": "41",
  /** Physical pin 42: P0.19; no_connect. */
  "P0.19_42": "42",
  /** Physical pin 43: P0.21; bidirectional. */
  "P0.21": "43",
  /** Physical pin 44: P0.20; bidirectional. */
  "P0.20": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: P0.22; bidirectional. */
  "P0.22": "46",
  /** Physical pin 47: P1.00; bidirectional. */
  "P1.00": "47",
  /** Physical pin 48: P0.24; bidirectional. */
  "P0.24": "48",
  /** Physical pin 49: NC; no_connect. */
  "NC_49": "49",
  /** Physical pin 50: P1.02; bidirectional. */
  "P1.02": "50",
  /** Physical pin 51: SWDIO; bidirectional. */
  "SWDIO": "51",
  /** Physical pin 52: P0.09; bidirectional. */
  "P0.09": "52",
  /** Physical pin 53: SWDCLK; input. */
  "SWDCLK": "53",
  /** Physical pin 54: P0.10; bidirectional. */
  "P0.10": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: P1.04; bidirectional. */
  "P1.04": "56",
  /** Physical pin 57: P1.06; bidirectional. */
  "P1.06": "57",
  /** Physical pin 58: P1.07; bidirectional. */
  "P1.07": "58",
  /** Physical pin 59: NC; no_connect. */
  "NC_59": "59",
  /** Physical pin 60: NC; no_connect. */
  "NC_60": "60",
  /** Physical pin 61: P1.01; bidirectional. */
  "P1.01": "61",
}) {
  override schema = "RF_Module:MDBT50Q-U512K";
  override referencePrefix = "U";
}

/**
 * NEMEUS Modem dual-mode LoRa/SIGFOX
 *
 * KiCad symbol: `RF_Module:MM002`. Reference prefix: `U`.
 * @see http://www.nemeus.fr/resources/uploads/2015/04/MM002-xx-EU_datasheet_v0.11.pdf
 * Keywords: IOT LoRa SIGFOX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MM002 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: ~{RST}; input. */
  "~{RST}": "2",
  /** Physical pin 3: PB9-IO/I2C-SDA; bidirectional. */
  "PB9-IO/I2C-SDA": "3",
  /** Physical pin 4: PB8-IO/I2C-SCL; bidirectional. */
  "PB8-IO/I2C-SCL": "4",
  /** Physical pin 5: BOOT; input. */
  "BOOT": "5",
  /** Physical pin 6: PB7-IO/UART1-RX; bidirectional. */
  "PB7-IO/UART1-RX": "6",
  /** Physical pin 7: PB6-IO/UART1-TX; bidirectional. */
  "PB6-IO/UART1-TX": "7",
  /** Physical pin 8: PB4-IO/NJTRST; input. */
  "PB4-IO/NJTRST": "8",
  /** Physical pin 9: PB3-IO/JTDO; bidirectional. */
  "PB3-IO/JTDO": "9",
  /** Physical pin 10: PA15-IO/JTDI; bidirectional. */
  "PA15-IO/JTDI": "10",
  /** Physical pin 11: PA14-IO/JTCK/SWCLK; bidirectional. */
  "PA14-IO/JTCK/SWCLK": "11",
  /** Physical pin 12: PA13-IO/JTMS/SWDAT; bidirectional. */
  "PA13-IO/JTMS/SWDAT": "12",
  /** Physical pin 13: PA12-IO/UART1-RTS/USB-DP; bidirectional. */
  "PA12-IO/UART1-RTS/USB-DP": "13",
  /** Physical pin 14: PA11-IO/UART1-CTS/USB-DM; bidirectional. */
  "PA11-IO/UART1-CTS/USB-DM": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: ANT; bidirectional. */
  "ANT": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: PA7-IO/SPI-MOSI; bidirectional. */
  "PA7-IO/SPI-MOSI": "19",
  /** Physical pin 20: PA5-IO/SPI-SCK; bidirectional. */
  "PA5-IO/SPI-SCK": "20",
  /** Physical pin 21: PA6-IO/SPI-MISO; bidirectional. */
  "PA6-IO/SPI-MISO": "21",
  /** Physical pin 22: PA4-IO/SPI-NSS; bidirectional. */
  "PA4-IO/SPI-NSS": "22",
  /** Physical pin 23: PA3-IO/ADC/UART2-RX; bidirectional. */
  "PA3-IO/ADC/UART2-RX": "23",
  /** Physical pin 24: PA2-IO/ADC/UART2-TX; bidirectional. */
  "PA2-IO/ADC/UART2-TX": "24",
  /** Physical pin 25: PA0-IO/ADC/UART2-CTS/WKUP; bidirectional. */
  "PA0-IO/ADC/UART2-CTS/WKUP": "25",
  /** Physical pin 26: PA1-IO/ADC/UART2-RTS; bidirectional. */
  "PA1-IO/ADC/UART2-RTS": "26",
  /** Physical pin 27: VCC; power_in. */
  "VCC": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
}) {
  override schema = "RF_Module:MM002";
  override referencePrefix = "U";
}

/**
 * Wi-Fi module, 1MB flash, 128KB RAM
 *
 * KiCad symbol: `RF_Module:Particle_P1`. Reference prefix: `U`.
 * Footprint filters: Particle*P1*.
 * @see https://docs.particle.io/datasheets/p1-datasheet/
 * Keywords: Wi-Fi module.
 * Default footprint: RF_Module:Particle_P1.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Particle_P1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VBAT_WL; power_in. */
  "VBAT_WL_2": "2",
  /** Physical pin 3: VBAT_WL; power_in. */
  "VBAT_WL_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: VDDIO_3V3_WL; power_in. */
  "VDDIO_3V3_WL": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: WL_REG_ON; power_in. */
  "WL_REG_ON": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: WL_JTAG_TDI; input. */
  "WL_JTAG_TDI": "16",
  /** Physical pin 17: WL_JTAG_TCK; input. */
  "WL_JTAG_TCK": "17",
  /** Physical pin 18: WL_JTAG_~{TRST}; input. */
  "WL_JTAG_~{TRST}": "18",
  /** Physical pin 19: WL_JTAG_TMS; input. */
  "WL_JTAG_TMS": "19",
  /** Physical pin 20: WL_JTAG_TDO; input. */
  "WL_JTAG_TDO": "20",
  /** Physical pin 21: MICRO_SPI1_MISO/PA6; bidirectional. */
  "MICRO_SPI1_MISO/PA6": "21",
  /** Physical pin 22: MICRO_SPI1_SCK/PA5; bidirectional. */
  "MICRO_SPI1_SCK/PA5": "22",
  /** Physical pin 23: MICRO_SPI1_MOSI/PA7; bidirectional. */
  "MICRO_SPI1_MOSI/PA7": "23",
  /** Physical pin 24: MICRO_SPI1_SS/PA4; bidirectional. */
  "MICRO_SPI1_SS/PA4": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: VDD_3V3; power_in. */
  "VDD_3V3_26": "26",
  /** Physical pin 27: VDD_3V3; power_in. */
  "VDD_3V3_27": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: MICRO_UART2_RTS/PA1; bidirectional. */
  "MICRO_UART2_RTS/PA1": "29",
  /** Physical pin 30: MICRO_UART2_CTS/PA0; bidirectional. */
  "MICRO_UART2_CTS/PA0": "30",
  /** Physical pin 31: MICRO_UART2_RXD/PA3; bidirectional. */
  "MICRO_UART2_RXD/PA3": "31",
  /** Physical pin 32: MICRO_UART2_TXD/PA2; bidirectional. */
  "MICRO_UART2_TXD/PA2": "32",
  /** Physical pin 33: TESTMODE; bidirectional. */
  "TESTMODE": "33",
  /** Physical pin 34: MICRO_~{RST}; input. */
  "MICRO_~{RST}": "34",
  /** Physical pin 35: MICRO_I2C1_SCL/PB6; bidirectional. */
  "MICRO_I2C1_SCL/PB6": "35",
  /** Physical pin 36: MICRO_I2C1_SDA/PB7; bidirectional. */
  "MICRO_I2C1_SDA/PB7": "36",
  /** Physical pin 37: GND; power_in. */
  "GND_37": "37",
  /** Physical pin 38: VBAT_MICRO; power_in. */
  "VBAT_MICRO": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: MICRO_GPIO_1/PB0; bidirectional. */
  "MICRO_GPIO_1/PB0": "40",
  /** Physical pin 41: MICRO_GPIO_2/PB1; bidirectional. */
  "MICRO_GPIO_2/PB1": "41",
  /** Physical pin 42: MICRO_GPIO_3/PC0; bidirectional. */
  "MICRO_GPIO_3/PC0": "42",
  /** Physical pin 43: MICRO_GPIO_5/PC3; bidirectional. */
  "MICRO_GPIO_5/PC3": "43",
  /** Physical pin 44: MICRO_GPIO_6/PC4; bidirectional. */
  "MICRO_GPIO_6/PC4": "44",
  /** Physical pin 45: MICRO_GPIO_7/PB5; bidirectional. */
  "MICRO_GPIO_7/PB5": "45",
  /** Physical pin 46: MICRO_GPIO_8/PC7; bidirectional. */
  "MICRO_GPIO_8/PC7": "46",
  /** Physical pin 47: MICRO_GPIO_9/PC13; bidirectional. */
  "MICRO_GPIO_9/PC13": "47",
  /** Physical pin 48: MICRO_GPIO_12/PC1; bidirectional. */
  "MICRO_GPIO_12/PC1": "48",
  /** Physical pin 49: MICRO_GPIO_13/PC2; bidirectional. */
  "MICRO_GPIO_13/PC2": "49",
  /** Physical pin 50: MICRO_GPIO_14/PC5; bidirectional. */
  "MICRO_GPIO_14/PC5": "50",
  /** Physical pin 51: MICRO_JTAG_~{TRST}/PB4; bidirectional. */
  "MICRO_JTAG_~{TRST}/PB4": "51",
  /** Physical pin 52: MICRO_JTAG_TDO/PB3; bidirectional. */
  "MICRO_JTAG_TDO/PB3": "52",
  /** Physical pin 53: MICRO_JTAG_TDI/PA15; bidirectional. */
  "MICRO_JTAG_TDI/PA15": "53",
  /** Physical pin 54: MICRO_JTAG_TMS/PA13; bidirectional. */
  "MICRO_JTAG_TMS/PA13": "54",
  /** Physical pin 55: MICRO_JTAG_TCK/PA14; bidirectional. */
  "MICRO_JTAG_TCK/PA14": "55",
  /** Physical pin 56: BTCX_STATUS; input. */
  "BTCX_STATUS": "56",
  /** Physical pin 57: BTCX_RF_ACTIVE; input. */
  "BTCX_RF_ACTIVE": "57",
  /** Physical pin 58: BTCX_TXCONF; output. */
  "BTCX_TXCONF": "58",
  /** Physical pin 59: GND; power_in. */
  "GND_59": "59",
  /** Physical pin 60: WL_SLEEP_CLK; input. */
  "WL_SLEEP_CLK": "60",
  /** Physical pin 61: MICRO_UART1_RTS/PA12; bidirectional. */
  "MICRO_UART1_RTS/PA12": "61",
  /** Physical pin 62: MICRO_UART1_CTS/PA11; bidirectional. */
  "MICRO_UART1_CTS/PA11": "62",
  /** Physical pin 63: MICRO_UART1_RXD/PA10; bidirectional. */
  "MICRO_UART1_RXD/PA10": "63",
  /** Physical pin 64: MICRO_UART1_TXD/PA9; bidirectional. */
  "MICRO_UART1_TXD/PA9": "64",
  /** Physical pin 65: GND; power_in. */
  "GND_65": "65",
  /** Physical pin 66: GND; power_in. */
  "GND_66": "66",
  /** Physical pin 67: GND; power_in. */
  "GND_67": "67",
  /** Physical pin 68: GND; power_in. */
  "GND_68": "68",
  /** Physical pin 69: GND; power_in. */
  "GND_69": "69",
  /** Physical pin 70: GND; power_in. */
  "GND_70": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: GND; power_in. */
  "GND_73": "73",
  /** Physical pin 74: PAD1; no_connect. */
  "PAD1": "74",
  /** Physical pin 75: PAD2; no_connect. */
  "PAD2": "75",
}) {
  override schema = "RF_Module:Particle_P1";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32WLE5, RU864/IN865/EU868, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK3172-xx-8-SM-xI`. Reference prefix: `U`.
 * Footprint filters: RAK3172*.
 * @see https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Datasheet/
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK3172.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK3172_xx_8_SM_xI extends Component.withPins({
  /** Physical pin 1: UART2_RX/PA3; bidirectional. */
  "UART2_RX/PA3": "1",
  /** Physical pin 2: UART2_TX/PA2; bidirectional. */
  "UART2_TX/PA2": "2",
  /** Physical pin 6: PA1; bidirectional. */
  "PA1": "6",
  /** Physical pin 19: PA8; bidirectional. */
  "PA8": "19",
  /** Physical pin 20: PA9; bidirectional. */
  "PA9": "20",
  /** Physical pin 21: BOOT0; input. */
  "BOOT0": "21",
  /** Physical pin 27: PB12; bidirectional. */
  "PB12": "27",
  /** Physical pin 29: PA0; bidirectional. */
  "PA0": "29",
  /** Physical pin 30: PB5; bidirectional. */
  "PB5": "30",
  /** Physical pin 3: PA15/PIN_A4; bidirectional. */
  "PA15/PIN_A4": "3",
  /** Physical pin 4: PB6/UART1_TX; bidirectional. */
  "PB6/UART1_TX": "4",
  /** Physical pin 5: PB7/UART1_RX; bidirectional. */
  "PB7/UART1_RX": "5",
  /** Physical pin 7: PA13/SWDIO; bidirectional. */
  "PA13/SWDIO": "7",
  /** Physical pin 8: PA14/SWCLK; bidirectional. */
  "PA14/SWCLK": "8",
  /** Physical pin 9: PA12/SCL; bidirectional. */
  "PA12/SCL": "9",
  /** Physical pin 10: PA11/SDA; bidirectional. */
  "PA11/SDA": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: RF; passive. */
  "RF": "12",
  /** Physical pin 13: PA7/SPI1_MOSI; bidirectional. */
  "PA7/SPI1_MOSI": "13",
  /** Physical pin 14: PA6/SPI1_MISO; bidirectional. */
  "PA6/SPI1_MISO": "14",
  /** Physical pin 15: PA5/SPI1_CLK; bidirectional. */
  "PA5/SPI1_CLK": "15",
  /** Physical pin 16: PA4/~{SPI1_SS}; bidirectional. */
  "PA4/~{SPI1_SS}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 22: ~{RST}; passive. */
  "~{RST}": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: PA10/PIN_A3; bidirectional. */
  "PA10/PIN_A3": "25",
  /** Physical pin 26: PB2/PIN_A2; bidirectional. */
  "PB2/PIN_A2": "26",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 31: PB4/PIN_A1; bidirectional. */
  "PB4/PIN_A1": "31",
  /** Physical pin 32: PB3/PIN_A0; bidirectional. */
  "PB3/PIN_A0": "32",
}) {
  override schema = "RF_Module:RAK3172-xx-8-SM-xI";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32WLE5, EU433, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK3172-xx-43-SM-xI`. Reference prefix: `U`.
 * Footprint filters: RAK3172*.
 * @see https://docs.rakwireless.com/product-categories/wisduo/rak3172-module/datasheet
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK3172.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK3172_xx_43_SM_xI extends Component.withPins({
  /** Physical pin 1: UART2_RX/PA3; bidirectional. */
  "UART2_RX/PA3": "1",
  /** Physical pin 2: UART2_TX/PA2; bidirectional. */
  "UART2_TX/PA2": "2",
  /** Physical pin 6: PA1; bidirectional. */
  "PA1": "6",
  /** Physical pin 19: PA8; bidirectional. */
  "PA8": "19",
  /** Physical pin 20: PA9; bidirectional. */
  "PA9": "20",
  /** Physical pin 21: BOOT0; input. */
  "BOOT0": "21",
  /** Physical pin 27: PB12; bidirectional. */
  "PB12": "27",
  /** Physical pin 29: PA0; bidirectional. */
  "PA0": "29",
  /** Physical pin 30: PB5; bidirectional. */
  "PB5": "30",
  /** Physical pin 3: PA15/PIN_A4; bidirectional. */
  "PA15/PIN_A4": "3",
  /** Physical pin 4: PB6/UART1_TX; bidirectional. */
  "PB6/UART1_TX": "4",
  /** Physical pin 5: PB7/UART1_RX; bidirectional. */
  "PB7/UART1_RX": "5",
  /** Physical pin 7: PA13/SWDIO; bidirectional. */
  "PA13/SWDIO": "7",
  /** Physical pin 8: PA14/SWCLK; bidirectional. */
  "PA14/SWCLK": "8",
  /** Physical pin 9: PA12/SCL; bidirectional. */
  "PA12/SCL": "9",
  /** Physical pin 10: PA11/SDA; bidirectional. */
  "PA11/SDA": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: RF; passive. */
  "RF": "12",
  /** Physical pin 13: PA7/SPI1_MOSI; bidirectional. */
  "PA7/SPI1_MOSI": "13",
  /** Physical pin 14: PA6/SPI1_MISO; bidirectional. */
  "PA6/SPI1_MISO": "14",
  /** Physical pin 15: PA5/SPI1_CLK; bidirectional. */
  "PA5/SPI1_CLK": "15",
  /** Physical pin 16: PA4/~{SPI1_SS}; bidirectional. */
  "PA4/~{SPI1_SS}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 22: ~{RST}; passive. */
  "~{RST}": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: PA10/PIN_A3; bidirectional. */
  "PA10/PIN_A3": "25",
  /** Physical pin 26: PB2/PIN_A2; bidirectional. */
  "PB2/PIN_A2": "26",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 31: PB4/PIN_A1; bidirectional. */
  "PB4/PIN_A1": "31",
  /** Physical pin 32: PB3/PIN_A0; bidirectional. */
  "PB3/PIN_A0": "32",
}) {
  override schema = "RF_Module:RAK3172-xx-43-SM-xI";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32WLE5, CN470, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK3172-xx-47-SM-xI`. Reference prefix: `U`.
 * Footprint filters: RAK3172*.
 * @see https://docs.rakwireless.com/product-categories/wisduo/rak3172-module/datasheet
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK3172.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK3172_xx_47_SM_xI extends Component.withPins({
  /** Physical pin 1: UART2_RX/PA3; bidirectional. */
  "UART2_RX/PA3": "1",
  /** Physical pin 2: UART2_TX/PA2; bidirectional. */
  "UART2_TX/PA2": "2",
  /** Physical pin 6: PA1; bidirectional. */
  "PA1": "6",
  /** Physical pin 19: PA8; bidirectional. */
  "PA8": "19",
  /** Physical pin 20: PA9; bidirectional. */
  "PA9": "20",
  /** Physical pin 21: BOOT0; input. */
  "BOOT0": "21",
  /** Physical pin 27: PB12; bidirectional. */
  "PB12": "27",
  /** Physical pin 29: PA0; bidirectional. */
  "PA0": "29",
  /** Physical pin 30: PB5; bidirectional. */
  "PB5": "30",
  /** Physical pin 3: PA15/PIN_A4; bidirectional. */
  "PA15/PIN_A4": "3",
  /** Physical pin 4: PB6/UART1_TX; bidirectional. */
  "PB6/UART1_TX": "4",
  /** Physical pin 5: PB7/UART1_RX; bidirectional. */
  "PB7/UART1_RX": "5",
  /** Physical pin 7: PA13/SWDIO; bidirectional. */
  "PA13/SWDIO": "7",
  /** Physical pin 8: PA14/SWCLK; bidirectional. */
  "PA14/SWCLK": "8",
  /** Physical pin 9: PA12/SCL; bidirectional. */
  "PA12/SCL": "9",
  /** Physical pin 10: PA11/SDA; bidirectional. */
  "PA11/SDA": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: RF; passive. */
  "RF": "12",
  /** Physical pin 13: PA7/SPI1_MOSI; bidirectional. */
  "PA7/SPI1_MOSI": "13",
  /** Physical pin 14: PA6/SPI1_MISO; bidirectional. */
  "PA6/SPI1_MISO": "14",
  /** Physical pin 15: PA5/SPI1_CLK; bidirectional. */
  "PA5/SPI1_CLK": "15",
  /** Physical pin 16: PA4/~{SPI1_SS}; bidirectional. */
  "PA4/~{SPI1_SS}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 22: ~{RST}; passive. */
  "~{RST}": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: PA10/PIN_A3; bidirectional. */
  "PA10/PIN_A3": "25",
  /** Physical pin 26: PB2/PIN_A2; bidirectional. */
  "PB2/PIN_A2": "26",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 31: PB4/PIN_A1; bidirectional. */
  "PB4/PIN_A1": "31",
  /** Physical pin 32: PB3/PIN_A0; bidirectional. */
  "PB3/PIN_A0": "32",
}) {
  override schema = "RF_Module:RAK3172-xx-47-SM-xI";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32WLE5, US915/AU915/KR920/AS923, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK3172-xx-9-SM-xI`. Reference prefix: `U`.
 * Footprint filters: RAK3172*.
 * @see https://docs.rakwireless.com/product-categories/wisduo/rak3172-module/datasheet
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK3172.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK3172_xx_9_SM_xI extends Component.withPins({
  /** Physical pin 1: UART2_RX/PA3; bidirectional. */
  "UART2_RX/PA3": "1",
  /** Physical pin 2: UART2_TX/PA2; bidirectional. */
  "UART2_TX/PA2": "2",
  /** Physical pin 6: PA1; bidirectional. */
  "PA1": "6",
  /** Physical pin 19: PA8; bidirectional. */
  "PA8": "19",
  /** Physical pin 20: PA9; bidirectional. */
  "PA9": "20",
  /** Physical pin 21: BOOT0; input. */
  "BOOT0": "21",
  /** Physical pin 27: PB12; bidirectional. */
  "PB12": "27",
  /** Physical pin 29: PA0; bidirectional. */
  "PA0": "29",
  /** Physical pin 30: PB5; bidirectional. */
  "PB5": "30",
  /** Physical pin 3: PA15/PIN_A4; bidirectional. */
  "PA15/PIN_A4": "3",
  /** Physical pin 4: PB6/UART1_TX; bidirectional. */
  "PB6/UART1_TX": "4",
  /** Physical pin 5: PB7/UART1_RX; bidirectional. */
  "PB7/UART1_RX": "5",
  /** Physical pin 7: PA13/SWDIO; bidirectional. */
  "PA13/SWDIO": "7",
  /** Physical pin 8: PA14/SWCLK; bidirectional. */
  "PA14/SWCLK": "8",
  /** Physical pin 9: PA12/SCL; bidirectional. */
  "PA12/SCL": "9",
  /** Physical pin 10: PA11/SDA; bidirectional. */
  "PA11/SDA": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: RF; passive. */
  "RF": "12",
  /** Physical pin 13: PA7/SPI1_MOSI; bidirectional. */
  "PA7/SPI1_MOSI": "13",
  /** Physical pin 14: PA6/SPI1_MISO; bidirectional. */
  "PA6/SPI1_MISO": "14",
  /** Physical pin 15: PA5/SPI1_CLK; bidirectional. */
  "PA5/SPI1_CLK": "15",
  /** Physical pin 16: PA4/~{SPI1_SS}; bidirectional. */
  "PA4/~{SPI1_SS}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 22: ~{RST}; passive. */
  "~{RST}": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: PA10/PIN_A3; bidirectional. */
  "PA10/PIN_A3": "25",
  /** Physical pin 26: PB2/PIN_A2; bidirectional. */
  "PB2/PIN_A2": "26",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 31: PB4/PIN_A1; bidirectional. */
  "PB4/PIN_A1": "31",
  /** Physical pin 32: PB3/PIN_A0; bidirectional. */
  "PB3/PIN_A0": "32",
}) {
  override schema = "RF_Module:RAK3172-xx-9-SM-xI";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L071,  RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK4200`. Reference prefix: `U`.
 * Footprint filters: RAK4200*.
 * @see https://downloads.rakwireless.com/LoRa/RAK4200/Hardware-Specification/RAK4200_Module_Specifications_V1.4.pdf
 * Keywords: IoT, LoRa, LoRaWAN, RF.
 * Default footprint: RF_Module:RAK4200.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK4200 extends Component.withPins({
  /** Physical pin 1: PA3/UART2_RX; bidirectional. */
  "PA3/UART2_RX": "1",
  /** Physical pin 2: PA2/UART2_TX; bidirectional. */
  "PA2/UART2_TX": "2",
  /** Physical pin 3: PA1/UART2_DE; bidirectional. */
  "PA1/UART2_DE": "3",
  /** Physical pin 4: PA9/UART1_TX; bidirectional. */
  "PA9/UART1_TX": "4",
  /** Physical pin 5: PA10/UART1_RX; bidirectional. */
  "PA10/UART1_RX": "5",
  /** Physical pin 6: PA12/UART1_DE; bidirectional. */
  "PA12/UART1_DE": "6",
  /** Physical pin 7: PA13/SWDIO; bidirectional. */
  "PA13/SWDIO": "7",
  /** Physical pin 8: PA14/SWCLK; bidirectional. */
  "PA14/SWCLK": "8",
  /** Physical pin 9: I2C_SCL/PB6; bidirectional. */
  "I2C_SCL/PB6": "9",
  /** Physical pin 10: I2C_SDA/PB7; bidirectional. */
  "I2C_SDA/PB7": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: RF; passive. */
  "RF": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: PA5/SPI_CLK; bidirectional. */
  "PA5/SPI_CLK": "15",
  /** Physical pin 16: PA6/SPI_MISO; bidirectional. */
  "PA6/SPI_MISO": "16",
  /** Physical pin 17: PA7/SPI_MOSI; bidirectional. */
  "PA7/SPI_MOSI": "17",
  /** Physical pin 18: ~{MCU_NRESET}; bidirectional. */
  "~{MCU_NRESET}": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "RF_Module:RAK4200";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L151, EU868, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK811-HF-EU868`. Reference prefix: `U`.
 * Footprint filters: RAK811*.
 * @see https://downloads.rakwireless.com/LoRa/RAK811/Hardware_Specification/RAK811_LoRa_Module_Datasheet_V1.4.pdf
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK811.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK811_HF_EU868 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PB12; bidirectional. */
  "PB12": "2",
  /** Physical pin 3: PB14; bidirectional. */
  "PB14": "3",
  /** Physical pin 4: PB15; bidirectional. */
  "PB15": "4",
  /** Physical pin 5: PA8; bidirectional. */
  "PA8": "5",
  /** Physical pin 6: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "6",
  /** Physical pin 7: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "7",
  /** Physical pin 8: PA12; bidirectional. */
  "PA12": "8",
  /** Physical pin 9: PB4; bidirectional. */
  "PB4": "9",
  /** Physical pin 10: PA13; bidirectional. */
  "PA13": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA14; bidirectional. */
  "PA14": "13",
  /** Physical pin 14: PA15; bidirectional. */
  "PA15": "14",
  /** Physical pin 15: PB3; bidirectional. */
  "PB3": "15",
  /** Physical pin 16: PB5; bidirectional. */
  "PB5": "16",
  /** Physical pin 17: BOOT0; input. */
  "BOOT0": "17",
  /** Physical pin 18: PB8; bidirectional. */
  "PB8": "18",
  /** Physical pin 19: PB9; bidirectional. */
  "PB9": "19",
  /** Physical pin 20: PA2; bidirectional. */
  "PA2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: PA1; bidirectional. */
  "PA1": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: PB10; bidirectional. */
  "PB10": "25",
  /** Physical pin 26: PB11; bidirectional. */
  "PB11": "26",
  /** Physical pin 27: PB2; bidirectional. */
  "PB2": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RF_OUT; passive. */
  "RF_OUT": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:RAK811-HF-EU868";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L151, AS923, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK811-HF-AS923`. Reference prefix: `U`.
 * Footprint filters: RAK811*.
 * @see https://downloads.rakwireless.com/LoRa/RAK811/Hardware_Specification/RAK811_LoRa_Module_Datasheet_V1.4.pdf
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK811.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK811_HF_AS923 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PB12; bidirectional. */
  "PB12": "2",
  /** Physical pin 3: PB14; bidirectional. */
  "PB14": "3",
  /** Physical pin 4: PB15; bidirectional. */
  "PB15": "4",
  /** Physical pin 5: PA8; bidirectional. */
  "PA8": "5",
  /** Physical pin 6: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "6",
  /** Physical pin 7: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "7",
  /** Physical pin 8: PA12; bidirectional. */
  "PA12": "8",
  /** Physical pin 9: PB4; bidirectional. */
  "PB4": "9",
  /** Physical pin 10: PA13; bidirectional. */
  "PA13": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA14; bidirectional. */
  "PA14": "13",
  /** Physical pin 14: PA15; bidirectional. */
  "PA15": "14",
  /** Physical pin 15: PB3; bidirectional. */
  "PB3": "15",
  /** Physical pin 16: PB5; bidirectional. */
  "PB5": "16",
  /** Physical pin 17: BOOT0; input. */
  "BOOT0": "17",
  /** Physical pin 18: PB8; bidirectional. */
  "PB8": "18",
  /** Physical pin 19: PB9; bidirectional. */
  "PB9": "19",
  /** Physical pin 20: PA2; bidirectional. */
  "PA2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: PA1; bidirectional. */
  "PA1": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: PB10; bidirectional. */
  "PB10": "25",
  /** Physical pin 26: PB11; bidirectional. */
  "PB11": "26",
  /** Physical pin 27: PB2; bidirectional. */
  "PB2": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RF_OUT; passive. */
  "RF_OUT": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:RAK811-HF-AS923";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L151, AU915, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK811-HF-AU915`. Reference prefix: `U`.
 * Footprint filters: RAK811*.
 * @see https://downloads.rakwireless.com/LoRa/RAK811/Hardware_Specification/RAK811_LoRa_Module_Datasheet_V1.4.pdf
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK811.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK811_HF_AU915 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PB12; bidirectional. */
  "PB12": "2",
  /** Physical pin 3: PB14; bidirectional. */
  "PB14": "3",
  /** Physical pin 4: PB15; bidirectional. */
  "PB15": "4",
  /** Physical pin 5: PA8; bidirectional. */
  "PA8": "5",
  /** Physical pin 6: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "6",
  /** Physical pin 7: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "7",
  /** Physical pin 8: PA12; bidirectional. */
  "PA12": "8",
  /** Physical pin 9: PB4; bidirectional. */
  "PB4": "9",
  /** Physical pin 10: PA13; bidirectional. */
  "PA13": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA14; bidirectional. */
  "PA14": "13",
  /** Physical pin 14: PA15; bidirectional. */
  "PA15": "14",
  /** Physical pin 15: PB3; bidirectional. */
  "PB3": "15",
  /** Physical pin 16: PB5; bidirectional. */
  "PB5": "16",
  /** Physical pin 17: BOOT0; input. */
  "BOOT0": "17",
  /** Physical pin 18: PB8; bidirectional. */
  "PB8": "18",
  /** Physical pin 19: PB9; bidirectional. */
  "PB9": "19",
  /** Physical pin 20: PA2; bidirectional. */
  "PA2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: PA1; bidirectional. */
  "PA1": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: PB10; bidirectional. */
  "PB10": "25",
  /** Physical pin 26: PB11; bidirectional. */
  "PB11": "26",
  /** Physical pin 27: PB2; bidirectional. */
  "PB2": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RF_OUT; passive. */
  "RF_OUT": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:RAK811-HF-AU915";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L151, IN865, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK811-HF-IN865`. Reference prefix: `U`.
 * Footprint filters: RAK811*.
 * @see https://downloads.rakwireless.com/LoRa/RAK811/Hardware_Specification/RAK811_LoRa_Module_Datasheet_V1.4.pdf
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK811.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK811_HF_IN865 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PB12; bidirectional. */
  "PB12": "2",
  /** Physical pin 3: PB14; bidirectional. */
  "PB14": "3",
  /** Physical pin 4: PB15; bidirectional. */
  "PB15": "4",
  /** Physical pin 5: PA8; bidirectional. */
  "PA8": "5",
  /** Physical pin 6: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "6",
  /** Physical pin 7: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "7",
  /** Physical pin 8: PA12; bidirectional. */
  "PA12": "8",
  /** Physical pin 9: PB4; bidirectional. */
  "PB4": "9",
  /** Physical pin 10: PA13; bidirectional. */
  "PA13": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA14; bidirectional. */
  "PA14": "13",
  /** Physical pin 14: PA15; bidirectional. */
  "PA15": "14",
  /** Physical pin 15: PB3; bidirectional. */
  "PB3": "15",
  /** Physical pin 16: PB5; bidirectional. */
  "PB5": "16",
  /** Physical pin 17: BOOT0; input. */
  "BOOT0": "17",
  /** Physical pin 18: PB8; bidirectional. */
  "PB8": "18",
  /** Physical pin 19: PB9; bidirectional. */
  "PB9": "19",
  /** Physical pin 20: PA2; bidirectional. */
  "PA2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: PA1; bidirectional. */
  "PA1": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: PB10; bidirectional. */
  "PB10": "25",
  /** Physical pin 26: PB11; bidirectional. */
  "PB11": "26",
  /** Physical pin 27: PB2; bidirectional. */
  "PB2": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RF_OUT; passive. */
  "RF_OUT": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:RAK811-HF-IN865";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L151, KR920, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK811-HF-KR920`. Reference prefix: `U`.
 * Footprint filters: RAK811*.
 * @see https://downloads.rakwireless.com/LoRa/RAK811/Hardware_Specification/RAK811_LoRa_Module_Datasheet_V1.4.pdf
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK811.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK811_HF_KR920 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PB12; bidirectional. */
  "PB12": "2",
  /** Physical pin 3: PB14; bidirectional. */
  "PB14": "3",
  /** Physical pin 4: PB15; bidirectional. */
  "PB15": "4",
  /** Physical pin 5: PA8; bidirectional. */
  "PA8": "5",
  /** Physical pin 6: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "6",
  /** Physical pin 7: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "7",
  /** Physical pin 8: PA12; bidirectional. */
  "PA12": "8",
  /** Physical pin 9: PB4; bidirectional. */
  "PB4": "9",
  /** Physical pin 10: PA13; bidirectional. */
  "PA13": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA14; bidirectional. */
  "PA14": "13",
  /** Physical pin 14: PA15; bidirectional. */
  "PA15": "14",
  /** Physical pin 15: PB3; bidirectional. */
  "PB3": "15",
  /** Physical pin 16: PB5; bidirectional. */
  "PB5": "16",
  /** Physical pin 17: BOOT0; input. */
  "BOOT0": "17",
  /** Physical pin 18: PB8; bidirectional. */
  "PB8": "18",
  /** Physical pin 19: PB9; bidirectional. */
  "PB9": "19",
  /** Physical pin 20: PA2; bidirectional. */
  "PA2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: PA1; bidirectional. */
  "PA1": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: PB10; bidirectional. */
  "PB10": "25",
  /** Physical pin 26: PB11; bidirectional. */
  "PB11": "26",
  /** Physical pin 27: PB2; bidirectional. */
  "PB2": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RF_OUT; passive. */
  "RF_OUT": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:RAK811-HF-KR920";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L151, US915, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK811-HF-US915`. Reference prefix: `U`.
 * Footprint filters: RAK811*.
 * @see https://downloads.rakwireless.com/LoRa/RAK811/Hardware_Specification/RAK811_LoRa_Module_Datasheet_V1.4.pdf
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK811.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK811_HF_US915 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PB12; bidirectional. */
  "PB12": "2",
  /** Physical pin 3: PB14; bidirectional. */
  "PB14": "3",
  /** Physical pin 4: PB15; bidirectional. */
  "PB15": "4",
  /** Physical pin 5: PA8; bidirectional. */
  "PA8": "5",
  /** Physical pin 6: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "6",
  /** Physical pin 7: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "7",
  /** Physical pin 8: PA12; bidirectional. */
  "PA12": "8",
  /** Physical pin 9: PB4; bidirectional. */
  "PB4": "9",
  /** Physical pin 10: PA13; bidirectional. */
  "PA13": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA14; bidirectional. */
  "PA14": "13",
  /** Physical pin 14: PA15; bidirectional. */
  "PA15": "14",
  /** Physical pin 15: PB3; bidirectional. */
  "PB3": "15",
  /** Physical pin 16: PB5; bidirectional. */
  "PB5": "16",
  /** Physical pin 17: BOOT0; input. */
  "BOOT0": "17",
  /** Physical pin 18: PB8; bidirectional. */
  "PB8": "18",
  /** Physical pin 19: PB9; bidirectional. */
  "PB9": "19",
  /** Physical pin 20: PA2; bidirectional. */
  "PA2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: PA1; bidirectional. */
  "PA1": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: PB10; bidirectional. */
  "PB10": "25",
  /** Physical pin 26: PB11; bidirectional. */
  "PB11": "26",
  /** Physical pin 27: PB2; bidirectional. */
  "PB2": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RF_OUT; passive. */
  "RF_OUT": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:RAK811-HF-US915";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L151, EU433, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK811-LF-EU433`. Reference prefix: `U`.
 * Footprint filters: RAK811*.
 * @see https://downloads.rakwireless.com/LoRa/RAK811/Hardware_Specification/RAK811_LoRa_Module_Datasheet_V1.4.pdf
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK811.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK811_LF_EU433 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PB12; bidirectional. */
  "PB12": "2",
  /** Physical pin 3: PB14; bidirectional. */
  "PB14": "3",
  /** Physical pin 4: PB15; bidirectional. */
  "PB15": "4",
  /** Physical pin 5: PB13; bidirectional. */
  "PB13": "5",
  /** Physical pin 6: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "6",
  /** Physical pin 7: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "7",
  /** Physical pin 8: PA12; bidirectional. */
  "PA12": "8",
  /** Physical pin 9: PA11; bidirectional. */
  "PA11": "9",
  /** Physical pin 10: PA13; bidirectional. */
  "PA13": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA14; bidirectional. */
  "PA14": "13",
  /** Physical pin 14: PA15; bidirectional. */
  "PA15": "14",
  /** Physical pin 15: PA3; bidirectional. */
  "PA3": "15",
  /** Physical pin 16: PB5; bidirectional. */
  "PB5": "16",
  /** Physical pin 17: BOOT0; input. */
  "BOOT0": "17",
  /** Physical pin 18: PB6; bidirectional. */
  "PB6": "18",
  /** Physical pin 19: PB7; bidirectional. */
  "PB7": "19",
  /** Physical pin 20: PA2; bidirectional. */
  "PA2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: PA1; bidirectional. */
  "PA1": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: PB10; bidirectional. */
  "PB10": "25",
  /** Physical pin 26: PB11; bidirectional. */
  "PB11": "26",
  /** Physical pin 27: PB2; bidirectional. */
  "PB2": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RF_OUT; passive. */
  "RF_OUT": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:RAK811-LF-EU433";
  override referencePrefix = "U";
}

/**
 * LoRa Module, STM32L151, CN470, RAKwireless
 *
 * KiCad symbol: `RF_Module:RAK811-LF-CN470`. Reference prefix: `U`.
 * Footprint filters: RAK811*.
 * @see https://downloads.rakwireless.com/LoRa/RAK811/Hardware_Specification/RAK811_LoRa_Module_Datasheet_V1.4.pdf
 * Keywords: IoT LoRa LoRaWAN RF.
 * Default footprint: RF_Module:RAK811.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RAK811_LF_CN470 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: PB12; bidirectional. */
  "PB12": "2",
  /** Physical pin 3: PB14; bidirectional. */
  "PB14": "3",
  /** Physical pin 4: PB15; bidirectional. */
  "PB15": "4",
  /** Physical pin 5: PB13; bidirectional. */
  "PB13": "5",
  /** Physical pin 6: PA9/USART1_TX; bidirectional. */
  "PA9/USART1_TX": "6",
  /** Physical pin 7: PA10/USART1_RX; bidirectional. */
  "PA10/USART1_RX": "7",
  /** Physical pin 8: PA12; bidirectional. */
  "PA12": "8",
  /** Physical pin 9: PA11; bidirectional. */
  "PA11": "9",
  /** Physical pin 10: PA13; bidirectional. */
  "PA13": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: PA14; bidirectional. */
  "PA14": "13",
  /** Physical pin 14: PA15; bidirectional. */
  "PA15": "14",
  /** Physical pin 15: PA3; bidirectional. */
  "PA3": "15",
  /** Physical pin 16: PB5; bidirectional. */
  "PB5": "16",
  /** Physical pin 17: BOOT0; input. */
  "BOOT0": "17",
  /** Physical pin 18: PB6; bidirectional. */
  "PB6": "18",
  /** Physical pin 19: PB7; bidirectional. */
  "PB7": "19",
  /** Physical pin 20: PA2; bidirectional. */
  "PA2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: PA1; bidirectional. */
  "PA1": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: PB10; bidirectional. */
  "PB10": "25",
  /** Physical pin 26: PB11; bidirectional. */
  "PB11": "26",
  /** Physical pin 27: PB2; bidirectional. */
  "PB2": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RF_OUT; passive. */
  "RF_OUT": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
}) {
  override schema = "RF_Module:RAK811-LF-CN470";
  override referencePrefix = "U";
}

/**
 * Low power long range transceiver module, SPI and parallel interface, 868 MHz, spreading factor 6 to12, bandwidth 7.8 to 500kHz, -111 to -148 dBm, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM95W-868S2`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcbea20e9ef.pdf
 * Keywords: Low power long range transceiver module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM95W_868S2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM95W-868S2";
  override referencePrefix = "U";
}

/**
 * Low power ISM Radio Transceiver Module, SPI interface, AES encryption, 434 or 915 MHz, up to 100mW, up to 300 kb/s, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM69HCW`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcb8284d838.pdf
 * Keywords: low power Radio ISM Transceiver Module AES encryption SPI HopeRF.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM69HCW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM69HCW";
  override referencePrefix = "U";
}

/**
 * ISM Radio Transceiver Module, SPI interface
 *
 * KiCad symbol: `RF_Module:RFM69HW`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM69HW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcbb56f1fd7.pdf
 * Keywords: Radio ISM Transceiver Module AES.
 * Default footprint: RF_Module:HOPERF_RFM69HW.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM69HW extends Component.withPins({
  /** Physical pin 1: RESET; input. */
  "RESET": "1",
  /** Physical pin 2: DIO0; bidirectional. */
  "DIO0": "2",
  /** Physical pin 3: DIO1; bidirectional. */
  "DIO1": "3",
  /** Physical pin 4: DIO2; bidirectional. */
  "DIO2": "4",
  /** Physical pin 5: DIO3; bidirectional. */
  "DIO3": "5",
  /** Physical pin 6: DIO4; bidirectional. */
  "DIO4": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: 3.3V; power_in. */
  "3.3V": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: ANA; output. */
  "ANA": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: MISO; output. */
  "MISO": "13",
  /** Physical pin 14: MOSI; input. */
  "MOSI": "14",
  /** Physical pin 15: NSS; input. */
  "NSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC": "16",
}) {
  override schema = "RF_Module:RFM69HW";
  override referencePrefix = "U";
}

/**
 * ISM Radio Transceiver Module, SPI interface
 *
 * KiCad symbol: `RF_Module:RFM69W`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM69HW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcbe34756e1.pdf
 * Keywords: Radio, ISM, Transceiver, Module, AES.
 * Default footprint: RF_Module:HOPERF_RFM69HW.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM69W extends Component.withPins({
  /** Physical pin 1: RESET; input. */
  "RESET": "1",
  /** Physical pin 2: DIO0; bidirectional. */
  "DIO0": "2",
  /** Physical pin 3: DIO1; bidirectional. */
  "DIO1": "3",
  /** Physical pin 4: DIO2; bidirectional. */
  "DIO2": "4",
  /** Physical pin 5: DIO3; bidirectional. */
  "DIO3": "5",
  /** Physical pin 6: DIO4; bidirectional. */
  "DIO4": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: 3.3V; power_in. */
  "3.3V": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: ANA; output. */
  "ANA": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: MISO; output. */
  "MISO": "13",
  /** Physical pin 14: MOSI; input. */
  "MOSI": "14",
  /** Physical pin 15: NSS; input. */
  "NSS": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC": "16",
}) {
  override schema = "RF_Module:RFM69W";
  override referencePrefix = "U";
}

/**
 * Low power long range transceiver module, SPI and parallel interface, 915 MHz, spreading factor 6 to12, bandwidth 7.8 to 500kHz, -111 to -148 dBm, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM95W-915S2`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcbea20e9ef.pdf
 * Keywords: Low power long range transceiver module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM95W_915S2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM95W-915S2";
  override referencePrefix = "U";
}

/**
 * Low power long range transceiver module, SPI and parallel interface, 315 MHz, spreading factor 6 to12, bandwidth 7.8 to 500kHz, -111 to -148 dBm, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM96W-315S2`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcc0ac60235.pdf
 * Keywords: Low power long range transceiver module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM96W_315S2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM96W-315S2";
  override referencePrefix = "U";
}

/**
 * Low power long range transceiver module, SPI and parallel interface, 433 MHz, spreading factor 6 to12, bandwidth 7.8 to 500kHz, -111 to -148 dBm, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM96W-433S2`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcc0ac60235.pdf
 * Keywords: Low power long range transceiver module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM96W_433S2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM96W-433S2";
  override referencePrefix = "U";
}

/**
 * Low power long range transceiver module, SPI and parallel interface, 868 MHz, spreading factor 6 to12, bandwidth 7.8 to 500kHz, -111 to -139 dBm, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM97W-868S2`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcbea20e9ef.pdf
 * Keywords: Low power long range transceiver module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM97W_868S2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM97W-868S2";
  override referencePrefix = "U";
}

/**
 * Low power long range transceiver module, SPI and parallel interface, 915 MHz, spreading factor 6 to12, bandwidth 7.8 to 500kHz, -111 to -139 dBm, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM97W-915S2`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcbea20e9ef.pdf
 * Keywords: Low power long range transceiver module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM97W_915S2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM97W-915S2";
  override referencePrefix = "U";
}

/**
 * Low power long range transceiver module, SPI and parallel interface, 315 MHz, spreading factor 6 to12, bandwidth 7.8 to 500kHz, -111 to -148 dBm, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM98W-315S2`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcdb5e17543.pdf
 * Keywords: Low power long range transceiver module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM98W_315S2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM98W-315S2";
  override referencePrefix = "U";
}

/**
 * Low power long range transceiver module, SPI and parallel interface, 433 MHz, spreading factor 6 to12, bandwidth 7.8 to 500kHz, -111 to -148 dBm, SMD-16, DIP-16
 *
 * KiCad symbol: `RF_Module:RFM98W-433S2`. Reference prefix: `U`.
 * Footprint filters: HOPERF*RFM9XW*.
 * @see https://www.hoperf.com/data/upload/portal/20181127/5bfcdb5e17543.pdf
 * Keywords: Low power long range transceiver module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RFM98W_433S2 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: MISO; output. */
  "MISO": "2",
  /** Physical pin 3: MOSI; input. */
  "MOSI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: NSS; input. */
  "NSS": "5",
  /** Physical pin 6: RESET; bidirectional. */
  "RESET": "6",
  /** Physical pin 7: DIO5; bidirectional. */
  "DIO5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ANT; bidirectional. */
  "ANT": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: 3.3V; power_in. */
  "3.3V": "13",
  /** Physical pin 14: DIO0; bidirectional. */
  "DIO0": "14",
  /** Physical pin 15: DIO1; bidirectional. */
  "DIO1": "15",
  /** Physical pin 16: DIO2; bidirectional. */
  "DIO2": "16",
}) {
  override schema = "RF_Module:RFM98W-433S2";
  override referencePrefix = "U";
}

/**
 * ST Microelectronics STM32WB55VG ARM Cortex Bluetooth Low Energy 5.0, Zigbee and 802.15.4 module, 1 MB Flash, 256kb RAM, Fully integrated BOM
 *
 * KiCad symbol: `RF_Module:STM32WB5MMG`. Reference prefix: `U`.
 * Footprint filters: RF?Module:ST?SiP?LGA?86?11x7.3mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb5mmg.pdf
 * Keywords: bluetooth bluetooth5 bluetooth5.0 802.15.4 zigbee module stm32 rf ARM Cortex-M3 Cortex-M0+.
 * Default footprint: RF_Module:ST-SiP-LGA-86-11x7.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32WB5MMG extends Component.withPins({
  /** Physical pin 1: PA2; bidirectional. */
  "PA2": "1",
  /** Physical pin 2: PA1; bidirectional. */
  "PA1": "2",
  /** Physical pin 3: PA0; bidirectional. */
  "PA0": "3",
  /** Physical pin 4: VREF; input. */
  "VREF": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS_5": "5",
  /** Physical pin 6: VDDA; power_in. */
  "VDDA": "6",
  /** Physical pin 7: PC3; bidirectional. */
  "PC3": "7",
  /** Physical pin 8: PC2; bidirectional. */
  "PC2": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: NRST; input. */
  "NRST": "10",
  /** Physical pin 11: PB9; bidirectional. */
  "PB9": "11",
  /** Physical pin 12: PC0; bidirectional. */
  "PC0": "12",
  /** Physical pin 13: PH3-BOOT0; bidirectional. */
  "PH3-BOOT0": "13",
  /** Physical pin 14: PB8; bidirectional. */
  "PB8": "14",
  /** Physical pin 15: VBAT; power_in. */
  "VBAT": "15",
  /** Physical pin 16: VSSSMPS; power_in. */
  "VSSSMPS": "16",
  /** Physical pin 17: VDDSMPS; power_in. */
  "VDDSMPS": "17",
  /** Physical pin 18: PB7; bidirectional. */
  "PB7": "18",
  /** Physical pin 19: PB5; bidirectional. */
  "PB5": "19",
  /** Physical pin 20: PB4; bidirectional. */
  "PB4": "20",
  /** Physical pin 21: PB3; bidirectional. */
  "PB3": "21",
  /** Physical pin 22: PC10; bidirectional. */
  "PC10": "22",
  /** Physical pin 23: PC11; bidirectional. */
  "PC11": "23",
  /** Physical pin 24: PC12; bidirectional. */
  "PC12": "24",
  /** Physical pin 25: PA13; bidirectional. */
  "PA13": "25",
  /** Physical pin 26: PA14; bidirectional. */
  "PA14": "26",
  /** Physical pin 27: PA15; bidirectional. */
  "PA15": "27",
  /** Physical pin 28: PA10; bidirectional. */
  "PA10": "28",
  /** Physical pin 29: PA12; bidirectional. */
  "PA12": "29",
  /** Physical pin 30: PA11; bidirectional. */
  "PA11": "30",
  /** Physical pin 31: VSS; passive. */
  "VSS_31": "31",
  /** Physical pin 32: VDDUSB; power_in. */
  "VDDUSB": "32",
  /** Physical pin 33: PD0; bidirectional. */
  "PD0": "33",
  /** Physical pin 34: PD1; bidirectional. */
  "PD1": "34",
  /** Physical pin 35: PB13; bidirectional. */
  "PB13": "35",
  /** Physical pin 36: PC6; bidirectional. */
  "PC6": "36",
  /** Physical pin 37: PB14; bidirectional. */
  "PB14": "37",
  /** Physical pin 38: PB15; bidirectional. */
  "PB15": "38",
  /** Physical pin 39: PB6; bidirectional. */
  "PB6": "39",
  /** Physical pin 40: PC13; bidirectional. */
  "PC13": "40",
  /** Physical pin 41: PB12; bidirectional. */
  "PB12": "41",
  /** Physical pin 42: PE4; bidirectional. */
  "PE4": "42",
  /** Physical pin 43: PB1; bidirectional. */
  "PB1": "43",
  /** Physical pin 44: PB0; bidirectional. */
  "PB0": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB11; bidirectional. */
  "PB11": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PC4; bidirectional. */
  "PC4": "49",
  /** Physical pin 50: PA8; bidirectional. */
  "PA8": "50",
  /** Physical pin 51: PA9; bidirectional. */
  "PA9": "51",
  /** Physical pin 52: PA7; bidirectional. */
  "PA7": "52",
  /** Physical pin 53: PA6; bidirectional. */
  "PA6": "53",
  /** Physical pin 54: PA5; bidirectional. */
  "PA5": "54",
  /** Physical pin 55: PA4; bidirectional. */
  "PA4": "55",
  /** Physical pin 56: PA3; bidirectional. */
  "PA3": "56",
  /** Physical pin 57: VSS; passive. */
  "VSS_57": "57",
  /** Physical pin 58: ANT_IN; passive. */
  "ANT_IN": "58",
  /** Physical pin 59: RF_OUT; passive. */
  "RF_OUT": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: PH0; bidirectional. */
  "PH0": "61",
  /** Physical pin 62: PH1; bidirectional. */
  "PH1": "62",
  /** Physical pin 63: PD14; bidirectional. */
  "PD14": "63",
  /** Physical pin 64: PE1; bidirectional. */
  "PE1": "64",
  /** Physical pin 65: PD13; bidirectional. */
  "PD13": "65",
  /** Physical pin 66: PD12; bidirectional. */
  "PD12": "66",
  /** Physical pin 67: PD7; bidirectional. */
  "PD7": "67",
  /** Physical pin 68: PD2; bidirectional. */
  "PD2": "68",
  /** Physical pin 69: PC9; bidirectional. */
  "PC9": "69",
  /** Physical pin 70: PD3; bidirectional. */
  "PD3": "70",
  /** Physical pin 71: PC7; bidirectional. */
  "PC7": "71",
  /** Physical pin 72: PE3; bidirectional. */
  "PE3": "72",
  /** Physical pin 73: PD4; bidirectional. */
  "PD4": "73",
  /** Physical pin 74: PD9; bidirectional. */
  "PD9": "74",
  /** Physical pin 75: PD8; bidirectional. */
  "PD8": "75",
  /** Physical pin 76: PD15; bidirectional. */
  "PD15": "76",
  /** Physical pin 77: PD10; bidirectional. */
  "PD10": "77",
  /** Physical pin 78: PE2; bidirectional. */
  "PE2": "78",
  /** Physical pin 79: PE0; bidirectional. */
  "PE0": "79",
  /** Physical pin 80: PD5; bidirectional. */
  "PD5": "80",
  /** Physical pin 81: PD6; bidirectional. */
  "PD6": "81",
  /** Physical pin 82: PD11; bidirectional. */
  "PD11": "82",
  /** Physical pin 83: PC8; bidirectional. */
  "PC8": "83",
  /** Physical pin 84: VSS; passive. */
  "VSS_84": "84",
  /** Physical pin 85: ANT_NC; no_connect. */
  "ANT_NC": "85",
  /** Physical pin 86: VSS; passive. */
  "VSS_86": "86",
}) {
  override schema = "RF_Module:STM32WB5MMG";
  override referencePrefix = "U";
}

/**
 * High-Performance, Low-Current SIGFOX™ Gateway And GPS Receiver With Integrated Antennas
 *
 * KiCad symbol: `RF_Module:TD1205`. Reference prefix: `U`.
 * Footprint filters: TD1205*.
 * @see https://github.com/Telecom-Design/Documentation_TD_RF_Module/blob/master/TD1205%20Datasheet.pdf
 * Keywords: IOT SIGFOX GPS.
 * Default footprint: RF_Module:TD1205.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TD1205 extends Component.withPins({
  /** Physical pin 1: BAT-; power_in. */
  "BAT-": "1",
  /** Physical pin 2: BAT+; power_in. */
  "BAT+": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{RST}; input. */
  "~{RST}": "5",
  /** Physical pin 6: UART-TX; bidirectional. */
  "UART-TX": "6",
  /** Physical pin 7: UART-RX; bidirectional. */
  "UART-RX": "7",
  /** Physical pin 8: DB2-SWDIO; bidirectional. */
  "DB2-SWDIO": "8",
  /** Physical pin 9: DB3-SWCLK; bidirectional. */
  "DB3-SWCLK": "9",
}) {
  override schema = "RF_Module:TD1205";
  override referencePrefix = "U";
}

/**
 * High-Performance, Low-Current SIGFOX™ Gateway
 *
 * KiCad symbol: `RF_Module:TD1208`. Reference prefix: `U`.
 * Footprint filters: TD1208*.
 * @see https://github.com/Telecom-Design/Documentation_TD_RF_Module/blob/master/TD1208%20Datasheet.pdf
 * Keywords: IOT SIGFOX.
 * Default footprint: RF_Module:TD1208.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TD1208 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: Reserved; unspecified. */
  "Reserved": "3",
  /** Physical pin 4: USR4; bidirectional. */
  "USR4": "4",
  /** Physical pin 5: DB3-SWCLK; bidirectional. */
  "DB3-SWCLK": "5",
  /** Physical pin 6: DB2-SWDIO; bidirectional. */
  "DB2-SWDIO": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; bidirectional. */
  "SCL": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: USR2; bidirectional. */
  "USR2": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: USR3; bidirectional. */
  "USR3": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: DAC0; bidirectional. */
  "DAC0": "15",
  /** Physical pin 16: USR0; bidirectional. */
  "USR0": "16",
  /** Physical pin 17: USR1; bidirectional. */
  "USR1": "17",
  /** Physical pin 18: UART-TX; bidirectional. */
  "UART-TX": "18",
  /** Physical pin 19: UART-RX; bidirectional. */
  "UART-RX": "19",
  /** Physical pin 20: ADC0; bidirectional. */
  "ADC0": "20",
  /** Physical pin 21: TIM2; bidirectional. */
  "TIM2": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: RF_GND; power_in. */
  "RF_GND_23": "23",
  /** Physical pin 24: RF; bidirectional. */
  "RF": "24",
  /** Physical pin 25: RF_GND; power_in. */
  "RF_GND_25": "25",
}) {
  override schema = "RF_Module:TD1208";
  override referencePrefix = "U";
}

/**
 * IQRF common transceiver with PCB antenna and thermometer, FSK modulation
 *
 * KiCad symbol: `RF_Module:TR-52DAT`. Reference prefix: `U`.
 * Footprint filters: IQRF?TRx2DA?KON?SIM?01*.
 * @see https://iqrf.org/weben/downloads.php?id=213
 * Keywords: IQRF common transceiver, PCB antenna, thermometer, FSK modulation.
 * Default footprint: RF_Module:IQRF_TRx2DA_KON-SIM-01.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TR_52DAT extends Component.withPins({
  /** Physical pin C1: RA0/AN0/C12IN0; bidirectional. */
  "RA0/AN0/C12IN0": "C1",
  /** Physical pin C2: RC2/VOUT; bidirectional. */
  "RC2/VOUT": "C2",
  /** Physical pin C3: VIN; power_in. */
  "VIN": "C3",
  /** Physical pin C4: GND; power_in. */
  "GND": "C4",
  /** Physical pin C5: RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3; bidirectional. */
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  /** Physical pin C6: RC3/SCK/SCL; bidirectional. */
  "RC3/SCK/SCL": "C6",
  /** Physical pin C7: RC4/SDI/SDA; bidirectional. */
  "RC4/SDI/SDA": "C7",
  /** Physical pin C8: RC5/RC7/RX/SDO; bidirectional. */
  "RC5/RC7/RX/SDO": "C8",
}) {
  override schema = "RF_Module:TR-52DAT";
  override referencePrefix = "U";
}

/**
 * IQRF transceiver with PCB antenna, GMSK modulation
 *
 * KiCad symbol: `RF_Module:TR-72DA`. Reference prefix: `U`.
 * Footprint filters: IQRF?TRx2DA?KON?SIM?01*.
 * @see https://iqrf.org/weben/downloads.php?id=337
 * Keywords: IQRF transceiver, PCB antenna, GMSK modulation.
 * Default footprint: RF_Module:IQRF_TRx2DA_KON-SIM-01.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TR_72DA extends Component.withPins({
  /** Physical pin C1: RA0/AN0/C12IN0; bidirectional. */
  "RA0/AN0/C12IN0": "C1",
  /** Physical pin C2: RC2/VOUT; bidirectional. */
  "RC2/VOUT": "C2",
  /** Physical pin C3: VIN; power_in. */
  "VIN": "C3",
  /** Physical pin C4: GND; power_in. */
  "GND": "C4",
  /** Physical pin C5: RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3; bidirectional. */
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  /** Physical pin C6: RC3/SCK/SCL; bidirectional. */
  "RC3/SCK/SCL": "C6",
  /** Physical pin C7: RC4/SDI/SDA; bidirectional. */
  "RC4/SDI/SDA": "C7",
  /** Physical pin C8: RC5/RC7/RX/SDO; bidirectional. */
  "RC5/RC7/RX/SDO": "C8",
}) {
  override schema = "RF_Module:TR-72DA";
  override referencePrefix = "U";
}

/**
 * IQRF transceiver with PCB antenna and thermometer, GMSK modulation
 *
 * KiCad symbol: `RF_Module:TR-72DAT`. Reference prefix: `U`.
 * Footprint filters: IQRF?TRx2DA?KON?SIM?01*.
 * @see https://iqrf.org/weben/downloads.php?id=337
 * Keywords: IQRF transceiver, PCB antenna, thermometer, GMSK modulation.
 * Default footprint: RF_Module:IQRF_TRx2DA_KON-SIM-01.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TR_72DAT extends Component.withPins({
  /** Physical pin C1: RA0/AN0/C12IN0; bidirectional. */
  "RA0/AN0/C12IN0": "C1",
  /** Physical pin C2: RC2/VOUT; bidirectional. */
  "RC2/VOUT": "C2",
  /** Physical pin C3: VIN; power_in. */
  "VIN": "C3",
  /** Physical pin C4: GND; power_in. */
  "GND": "C4",
  /** Physical pin C5: RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3; bidirectional. */
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  /** Physical pin C6: RC3/SCK/SCL; bidirectional. */
  "RC3/SCK/SCL": "C6",
  /** Physical pin C7: RC4/SDI/SDA; bidirectional. */
  "RC4/SDI/SDA": "C7",
  /** Physical pin C8: RC5/RC7/RX/SDO; bidirectional. */
  "RC5/RC7/RX/SDO": "C8",
}) {
  override schema = "RF_Module:TR-72DAT";
  override referencePrefix = "U";
}

/**
 * 32-bit microcontroller module with WiFi
 *
 * KiCad symbol: `RF_Module:WEMOS_C3_mini`. Reference prefix: `U`.
 * Footprint filters: WEMOS*C3*mini*.
 * @see https://www.wemos.cc/en/latest/c3/c3_mini.html
 * Keywords: ESP32-C3.
 * Default footprint: RF_Module:WEMOS_C3_mini.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WEMOS_C3_mini extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: D3; bidirectional. */
  "D3": "2",
  /** Physical pin 3: D2; bidirectional. */
  "D2": "3",
  /** Physical pin 4: D1; bidirectional. */
  "D1": "4",
  /** Physical pin 5: D0; bidirectional. */
  "D0": "5",
  /** Physical pin 6: D4; bidirectional. */
  "D4": "6",
  /** Physical pin 7: D5; bidirectional. */
  "D5": "7",
  /** Physical pin 8: 3V3; power_out. */
  "3V3": "8",
  /** Physical pin 9: VBus; power_in. */
  "VBus": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: D6; bidirectional. */
  "D6": "11",
  /** Physical pin 12: D7; bidirectional. */
  "D7": "12",
  /** Physical pin 13: D8; bidirectional. */
  "D8": "13",
  /** Physical pin 14: D10; bidirectional. */
  "D10": "14",
  /** Physical pin 15: RX; input. */
  "RX": "15",
  /** Physical pin 16: TX; output. */
  "TX": "16",
}) {
  override schema = "RF_Module:WEMOS_C3_mini";
  override referencePrefix = "U";
}

/**
 * 32-bit microcontroller module with WiFi
 *
 * KiCad symbol: `RF_Module:WEMOS_D1_mini`. Reference prefix: `U`.
 * Footprint filters: WEMOS*D1*mini*.
 * @see https://wiki.wemos.cc/products:d1:d1_mini#documentation
 * Keywords: ESP8266 WiFi microcontroller ESP8266EX.
 * Default footprint: RF_Module:WEMOS_D1_mini_light.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WEMOS_D1_mini extends Component.withPins({
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: D0; bidirectional. */
  "D0": "3",
  /** Physical pin 4: SCK/D5; bidirectional. */
  "SCK/D5": "4",
  /** Physical pin 5: MISO/D6; bidirectional. */
  "MISO/D6": "5",
  /** Physical pin 6: MOSI/D7; bidirectional. */
  "MOSI/D7": "6",
  /** Physical pin 7: CS/D8; bidirectional. */
  "CS/D8": "7",
  /** Physical pin 8: 3V3; power_out. */
  "3V3": "8",
  /** Physical pin 9: 5V; power_in. */
  "5V": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: D4; bidirectional. */
  "D4": "11",
  /** Physical pin 12: D3; bidirectional. */
  "D3": "12",
  /** Physical pin 13: SDA/D2; bidirectional. */
  "SDA/D2": "13",
  /** Physical pin 14: SCL/D1; bidirectional. */
  "SCL/D1": "14",
  /** Physical pin 15: RX; input. */
  "RX": "15",
  /** Physical pin 16: TX; output. */
  "TX": "16",
}) {
  override schema = "RF_Module:WEMOS_D1_mini";
  override referencePrefix = "U";
}

/**
 * IMST Long Range Radio Module
 *
 * KiCad symbol: `RF_Module:iM880A`. Reference prefix: `U`.
 * @see http://www.wireless-solutions.de/images/stories/downloads/Radio%20Modules/iM880A/General_Information/iM880A_Datasheet_V1_1.pdf
 * Keywords: IOT LoRa.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class iM880A extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: P1-IO/JTCK/SWCLK; bidirectional. */
  "P1-IO/JTCK/SWCLK": "2",
  /** Physical pin 3: P2-IO/JTMS/SWDIO; bidirectional. */
  "P2-IO/JTMS/SWDIO": "3",
  /** Physical pin 4: P3-IO/JTDO; bidirectional. */
  "P3-IO/JTDO": "4",
  /** Physical pin 5: P4-IO/JTDI; bidirectional. */
  "P4-IO/JTDI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: ~{RST}; input. */
  "~{RST}": "7",
  /** Physical pin 8: P5-IO/UART-CTS; bidirectional. */
  "P5-IO/UART-CTS": "8",
  /** Physical pin 9: P6-IO/UART-RTS; bidirectional. */
  "P6-IO/UART-RTS": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: P7-IO/SPI-MISO; bidirectional. */
  "P7-IO/SPI-MISO": "12",
  /** Physical pin 13: P8-IO/SPI-MOSI; bidirectional. */
  "P8-IO/SPI-MOSI": "13",
  /** Physical pin 14: P9-IO/SPI-CLK; bidirectional. */
  "P9-IO/SPI-CLK": "14",
  /** Physical pin 15: P10-IO/SPI-NSS; bidirectional. */
  "P10-IO/SPI-NSS": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
  /** Physical pin 18: RxD-IO/UART-RX; bidirectional. */
  "RxD-IO/UART-RX": "18",
  /** Physical pin 19: TxD-IO/UART-TX; bidirectional. */
  "TxD-IO/UART-TX": "19",
  /** Physical pin 20: P11-IO; bidirectional. */
  "P11-IO": "20",
  /** Physical pin 21: P12-IO/I2C-SCL; bidirectional. */
  "P12-IO/I2C-SCL": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: P13-IO/I2C-SDA; bidirectional. */
  "P13-IO/I2C-SDA": "23",
  /** Physical pin 24: P14-IO/ADC; bidirectional. */
  "P14-IO/ADC": "24",
  /** Physical pin 25: P15-IO/WKUP; bidirectional. */
  "P15-IO/WKUP": "25",
  /** Physical pin 26: BOOT; input. */
  "BOOT": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: P17-IO/ADC; bidirectional. */
  "P17-IO/ADC": "29",
  /** Physical pin 30: GND; power_in. */
  "GND_30": "30",
  /** Physical pin 31: RF; bidirectional. */
  "RF": "31",
  /** Physical pin 32: GND; power_in. */
  "GND_32": "32",
}) {
  override schema = "RF_Module:iM880A";
  override referencePrefix = "U";
}

/**
 * IMST Long Range Radio Module - LoRa Alliance Certified
 *
 * KiCad symbol: `RF_Module:iM880B`. Reference prefix: `U`.
 * @see http://www.wireless-solutions.de/images/stories/downloads/Radio%20Modules/iM880B/General_Information/iM880B_Datasheet_V1_0.pdf
 * Keywords: IOT LoRa.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class iM880B extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: P1-IO/JTCK/SWCLK; bidirectional. */
  "P1-IO/JTCK/SWCLK": "2",
  /** Physical pin 3: P2-IO/JTMS/SWDIO; bidirectional. */
  "P2-IO/JTMS/SWDIO": "3",
  /** Physical pin 4: P3-IO/JTDO; bidirectional. */
  "P3-IO/JTDO": "4",
  /** Physical pin 5: P4-IO/JTDI; bidirectional. */
  "P4-IO/JTDI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: ~{RST}; input. */
  "~{RST}": "7",
  /** Physical pin 8: P5-IO/UART-CTS; bidirectional. */
  "P5-IO/UART-CTS": "8",
  /** Physical pin 9: P6-IO/UART-RTS; bidirectional. */
  "P6-IO/UART-RTS": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: P7-IO/SPI-MISO; bidirectional. */
  "P7-IO/SPI-MISO": "12",
  /** Physical pin 13: P8-IO/SPI-MOSI; bidirectional. */
  "P8-IO/SPI-MOSI": "13",
  /** Physical pin 14: P9-IO/SPI-CLK; bidirectional. */
  "P9-IO/SPI-CLK": "14",
  /** Physical pin 15: P10-IO/SPI-NSS; bidirectional. */
  "P10-IO/SPI-NSS": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
  /** Physical pin 18: RxD-IO/UART-RX; bidirectional. */
  "RxD-IO/UART-RX": "18",
  /** Physical pin 19: TxD-IO/UART-TX; bidirectional. */
  "TxD-IO/UART-TX": "19",
  /** Physical pin 20: P11-IO; bidirectional. */
  "P11-IO": "20",
  /** Physical pin 21: P12-IO/I2C-SCL; bidirectional. */
  "P12-IO/I2C-SCL": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: P13-IO/I2C-SDA; bidirectional. */
  "P13-IO/I2C-SDA": "23",
  /** Physical pin 24: P14-IO/ADC; bidirectional. */
  "P14-IO/ADC": "24",
  /** Physical pin 25: P15-IO/WKUP; bidirectional. */
  "P15-IO/WKUP": "25",
  /** Physical pin 26: BOOT; input. */
  "BOOT": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: P17-IO/ADC; bidirectional. */
  "P17-IO/ADC": "29",
  /** Physical pin 30: GND; power_in. */
  "GND_30": "30",
  /** Physical pin 31: RF; bidirectional. */
  "RF": "31",
  /** Physical pin 32: GND; power_in. */
  "GND_32": "32",
}) {
  override schema = "RF_Module:iM880B";
  override referencePrefix = "U";
}

