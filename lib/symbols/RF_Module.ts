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
 */
export class AST50147_xx extends Component.withPins({
  "VDD_1": "1",
  "VDD_2": "2",
  "GND_3": "3",
  "EVENT_NOTIF": "4",
  "GND_5": "5",
  "ANTN_USE": "6",
  "GND_7": "7",
  "WAKEUP": "8",
  "GND_9": "9",
  "TXD": "10",
  "GND_11": "11",
  "RXD": "12",
  "GND_13": "13",
  "RESET": "14",
  "GND_RF_15": "15",
  "GND_RF_16": "16",
  "ANTN_RF": "17",
  "GND_RF_18": "18",
  "GND_RF_19": "19",
  "RSVD_20": "20",
  "RSVD_21": "21",
  "RSVD_22": "22",
  "GND_23": "23",
  "N.C._24": "24",
  "GND_25": "25",
  "N.C._26": "26",
  "GND_27": "27",
  "N.C._28": "28",
  "GND_29": "29",
  "N.C._30": "30",
  "GND_31": "31",
  "N.C._32": "32",
  "GND_33": "33",
  "N.C._34": "34",
  "N.C._35": "35",
  "GND_36": "36",
  "RSVD_37": "37",
  "RSVD_38": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VDD_2: "passive", GND_3: "power_in", EVENT_NOTIF: "output", GND_5: "passive", ANTN_USE: "output", GND_7: "passive", WAKEUP: "input", GND_9: "passive", TXD: "output", GND_11: "passive", RXD: "input", GND_13: "passive", RESET: "input", GND_RF_15: "power_in", GND_RF_16: "passive", ANTN_RF: "passive", GND_RF_18: "passive", GND_RF_19: "passive", RSVD_20: "no_connect", RSVD_21: "no_connect", RSVD_22: "no_connect", GND_23: "passive", "N.C._24": "no_connect", GND_25: "passive", "N.C._26": "no_connect", GND_27: "passive", "N.C._28": "no_connect", GND_29: "passive", "N.C._30": "no_connect", GND_31: "passive", "N.C._32": "no_connect", GND_33: "passive", "N.C._34": "no_connect", "N.C._35": "no_connect", GND_36: "passive", RSVD_37: "no_connect", RSVD_38: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ATSAMR21G18_MR210UA_NoRFPads extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "VCC_3": "3",
  "VCC_4": "4",
  "~{RST}": "5",
  "PA17": "6",
  "PA18": "7",
  "PA16": "8",
  "PA19": "9",
  "PA28": "10",
  "NC_11": "11",
  "GND_12": "12",
  "PA07": "13",
  "PA08": "14",
  "NC_15": "15",
  "NC_16": "16",
  "PA13": "17",
  "PA12": "18",
  "PA24": "19",
  "PA25": "20",
  "NC_21": "21",
  "PA15": "22",
  "PA14": "23",
  "PA4": "24",
  "PA5": "25",
  "PA6": "26",
  "NC_27": "27",
  "NC_28": "28",
  "GND_29": "29",
  "PA30": "30",
  "PA31": "31",
  "NC_32": "32",
  "ATECC508_GPIO": "33",
  "NC_34": "34",
  "NC_35": "35",
  "PA23": "36",
  "PA22": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "GND_41": "41",
  "GND_42": "42",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", VCC_3: "power_in", VCC_4: "passive", "~{RST}": "input", PA17: "bidirectional", PA18: "bidirectional", PA16: "bidirectional", PA19: "bidirectional", PA28: "bidirectional", NC_11: "no_connect", GND_12: "passive", PA07: "bidirectional", PA08: "bidirectional", NC_15: "no_connect", NC_16: "no_connect", PA13: "bidirectional", PA12: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", NC_21: "no_connect", PA15: "bidirectional", PA14: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", NC_27: "no_connect", NC_28: "no_connect", GND_29: "passive", PA30: "bidirectional", PA31: "bidirectional", NC_32: "no_connect", ATECC508_GPIO: "bidirectional", NC_34: "no_connect", NC_35: "no_connect", PA23: "bidirectional", PA22: "bidirectional", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", GND_41: "passive", GND_42: "passive", ...opts.pinTypes } });
  }
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
 */
export class AX_SIP_SFEU extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "ANT": "3",
  "GND_4": "4",
  "NC_5": "5",
  "GND_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "GPIO11/PC6": "10",
  "GPIO10/PC5": "11",
  "GPIO8/PC4": "12",
  "GPIO7/PC3": "13",
  "GPIO6/PC2": "14",
  "GPIO5/PC1": "15",
  "GPIO4/PC0": "16",
  "CPULED": "17",
  "RADIOLED": "18",
  "GPIO9/PB3": "19",
  "UART_TX": "20",
  "UART_RX": "21",
  "RX_LED": "22",
  "TX_LED": "23",
  "NC24": "24",
  "~{RESET}": "25",
  "GND_26": "26",
  "VDD_IO": "27",
  "GPIO0/PA0": "28",
  "GPIO1/PA1": "29",
  "GPIO2/PA2": "30",
  "NC_31": "31",
  "NC_32": "32",
  "GPIO3/PA5": "33",
  "GPIO12/PA6": "34",
  "GPIO13/PA7": "35",
  "GPIO14/PC7": "36",
  "NC_37": "37",
  "NC_38": "38",
  "GND_39": "39",
  "GND_40": "40",
  "GND_41": "41",
  "GND_42": "42",
  "GND_43": "43",
  "GND_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", ANT: "passive", GND_4: "passive", NC_5: "no_connect", GND_6: "passive", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", "GPIO11/PC6": "bidirectional", "GPIO10/PC5": "bidirectional", "GPIO8/PC4": "bidirectional", "GPIO7/PC3": "bidirectional", "GPIO6/PC2": "bidirectional", "GPIO5/PC1": "bidirectional", "GPIO4/PC0": "bidirectional", CPULED: "output", RADIOLED: "output", "GPIO9/PB3": "bidirectional", UART_TX: "output", UART_RX: "input", RX_LED: "output", TX_LED: "output", NC24: "no_connect", "~{RESET}": "input", GND_26: "passive", VDD_IO: "power_in", "GPIO0/PA0": "bidirectional", "GPIO1/PA1": "bidirectional", "GPIO2/PA2": "bidirectional", NC_31: "no_connect", NC_32: "no_connect", "GPIO3/PA5": "bidirectional", "GPIO12/PA6": "bidirectional", "GPIO13/PA7": "bidirectional", "GPIO14/PC7": "bidirectional", NC_37: "no_connect", NC_38: "no_connect", GND_39: "passive", GND_40: "passive", GND_41: "passive", GND_42: "passive", GND_43: "passive", GND_44: "passive", ...opts.pinTypes } });
  }
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
 */
export class AX_SIP_SFEU_API extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "ANT": "3",
  "GND_4": "4",
  "NC_5": "5",
  "GND_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "GPIO11/PC6": "10",
  "GPIO10/PC5": "11",
  "GPIO8/PC4": "12",
  "GPIO7/PC3": "13",
  "GPIO6/PC2": "14",
  "GPIO5/PC1": "15",
  "GPIO4/PC0": "16",
  "CPULED/PB0": "17",
  "RADIOLED/PB1": "18",
  "GPIO9/PB3": "19",
  "UART_TX/PB4": "20",
  "UART_RX/PB5": "21",
  "DBG_DATA/PB6": "22",
  "DBG_CLK/PB7": "23",
  "DBG_EN": "24",
  "~{RESET}": "25",
  "GND_26": "26",
  "VDD_IO": "27",
  "GPIO0/PA0": "28",
  "GPIO1/PA1": "29",
  "GPIO2/PA2": "30",
  "NC_31": "31",
  "NC_32": "32",
  "GPIO3/PA5": "33",
  "GPIO12/PA6": "34",
  "GPIO13/PA7": "35",
  "GPIO14/PC7": "36",
  "NC_37": "37",
  "NC_38": "38",
  "GND_39": "39",
  "GND_40": "40",
  "GND_41": "41",
  "GND_42": "42",
  "GND_43": "43",
  "GND_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", ANT: "passive", GND_4: "passive", NC_5: "no_connect", GND_6: "passive", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", "GPIO11/PC6": "bidirectional", "GPIO10/PC5": "bidirectional", "GPIO8/PC4": "bidirectional", "GPIO7/PC3": "bidirectional", "GPIO6/PC2": "bidirectional", "GPIO5/PC1": "bidirectional", "GPIO4/PC0": "bidirectional", "CPULED/PB0": "output", "RADIOLED/PB1": "output", "GPIO9/PB3": "bidirectional", "UART_TX/PB4": "output", "UART_RX/PB5": "input", "DBG_DATA/PB6": "bidirectional", "DBG_CLK/PB7": "input", DBG_EN: "input", "~{RESET}": "input", GND_26: "passive", VDD_IO: "power_in", "GPIO0/PA0": "bidirectional", "GPIO1/PA1": "bidirectional", "GPIO2/PA2": "bidirectional", NC_31: "no_connect", NC_32: "no_connect", "GPIO3/PA5": "bidirectional", "GPIO12/PA6": "bidirectional", "GPIO13/PA7": "bidirectional", "GPIO14/PC7": "bidirectional", NC_37: "no_connect", NC_38: "no_connect", GND_39: "passive", GND_40: "passive", GND_41: "passive", GND_42: "passive", GND_43: "passive", GND_44: "passive", ...opts.pinTypes } });
  }
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
 */
export class Ai_Thinker_Ra_01 extends Component.withPins({
  "ANT": "1",
  "GND_2": "2",
  "VDD": "3",
  "~{RESET}": "4",
  "DIO0": "5",
  "DIO1": "6",
  "DIO2": "7",
  "DIO3": "8",
  "GND_9": "9",
  "DIO4": "10",
  "DIO5": "11",
  "SCK": "12",
  "MISO": "13",
  "MOSI": "14",
  "~{NSS}": "15",
  "GND_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ANT: "passive", GND_2: "power_in", VDD: "power_in", "~{RESET}": "input", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", GND_9: "passive", DIO4: "bidirectional", DIO5: "bidirectional", SCK: "input", MISO: "output", MOSI: "input", "~{NSS}": "input", GND_16: "passive", ...opts.pinTypes } });
  }
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
 */
export class Ai_Thinker_Ra_02 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "VDD": "3",
  "~{RESET}": "4",
  "DIO0": "5",
  "DIO1": "6",
  "DIO2": "7",
  "DIO3": "8",
  "GND_9": "9",
  "DIO4": "10",
  "DIO5": "11",
  "SCK": "12",
  "MISO": "13",
  "MOSI": "14",
  "~{NSS}": "15",
  "GND_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "passive", GND_2: "power_in", VDD: "power_in", "~{RESET}": "input", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", GND_9: "passive", DIO4: "bidirectional", DIO5: "bidirectional", SCK: "input", MISO: "output", MOSI: "input", "~{NSS}": "input", GND_16: "passive", ...opts.pinTypes } });
  }
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
 */
export class CMWX1ZZABZ_078 extends Component.withPins({
  "PA12/USB_DP": "1",
  "PA11/USB_DM": "2",
  "GND_3": "3",
  "VDD_USB": "4",
  "VDD_MCU": "5",
  "VDD_RF": "6",
  "GND_7": "7",
  "DBG_SX1276_DIO2": "8",
  "DBG_SX1276_DI03": "9",
  "SX1276_DIO4": "10",
  "DBG_SX1276_DIO5": "11",
  "DBG_SX1276_DIO1": "12",
  "DBG_SX1276_DIO0": "13",
  "PB15/SPI2_MOSI": "14",
  "PB14/SPI2_MISO": "15",
  "PB13/SPI2_SCK": "16",
  "PB12/SPI2_NSS": "17",
  "PA10/USART1_RX": "18",
  "PA9/USART1_TX": "19",
  "PA8/MCO": "20",
  "PA5/ADC5/DAC2": "21",
  "PA4/ADC4/DAC1": "22",
  "PA3/ADC3": "23",
  "PA2/ADC2": "24",
  "GND_25": "25",
  "ANT": "26",
  "GND_27": "27",
  "DBG_CRF1": "28",
  "DBG_CRF3": "29",
  "DGB_CRF2": "30",
  "~{STSAFE_RST}": "31",
  "VREF+": "32",
  "PA0/WKUP1": "33",
  "~{MCU_RST}": "34",
  "PB8/I2C1_SCL": "35",
  "PB9/I2C1_SDA": "36",
  "PB2/LPTIM1_OUT": "37",
  "PB7/LPTIM1_IN2": "38",
  "PB6/LPTIM1_ETR": "39",
  "PB5/LPTIM1_IN1": "40",
  "PA13/SWDIO": "41",
  "PA14/SWCLK": "42",
  "BOOT0": "43",
  "GND_44": "44",
  "PH1/OSC_OUT": "45",
  "PH0/OSC_IN": "46",
  "TCXO_OUT": "47",
  "VDD_TCXO": "48",
  "GND_49": "49",
  "GND_50": "50",
  "GND_51": "51",
  "GND_52": "52",
  "GND_53": "53",
  "GND_54": "54",
  "GND_55": "55",
  "GND_56": "56",
  "GND_57": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PA12/USB_DP": "bidirectional", "PA11/USB_DM": "bidirectional", GND_3: "power_in", VDD_USB: "power_in", VDD_MCU: "power_in", VDD_RF: "power_in", GND_7: "passive", DBG_SX1276_DIO2: "bidirectional", DBG_SX1276_DI03: "bidirectional", SX1276_DIO4: "bidirectional", DBG_SX1276_DIO5: "bidirectional", DBG_SX1276_DIO1: "bidirectional", DBG_SX1276_DIO0: "bidirectional", "PB15/SPI2_MOSI": "bidirectional", "PB14/SPI2_MISO": "bidirectional", "PB13/SPI2_SCK": "bidirectional", "PB12/SPI2_NSS": "bidirectional", "PA10/USART1_RX": "bidirectional", "PA9/USART1_TX": "bidirectional", "PA8/MCO": "bidirectional", "PA5/ADC5/DAC2": "bidirectional", "PA4/ADC4/DAC1": "bidirectional", "PA3/ADC3": "bidirectional", "PA2/ADC2": "bidirectional", GND_25: "passive", ANT: "passive", GND_27: "passive", DBG_CRF1: "passive", DBG_CRF3: "passive", DGB_CRF2: "passive", "~{STSAFE_RST}": "passive", "VREF+": "power_in", "PA0/WKUP1": "bidirectional", "~{MCU_RST}": "input", "PB8/I2C1_SCL": "bidirectional", "PB9/I2C1_SDA": "bidirectional", "PB2/LPTIM1_OUT": "bidirectional", "PB7/LPTIM1_IN2": "bidirectional", "PB6/LPTIM1_ETR": "bidirectional", "PB5/LPTIM1_IN1": "bidirectional", "PA13/SWDIO": "bidirectional", "PA14/SWCLK": "bidirectional", BOOT0: "input", GND_44: "passive", "PH1/OSC_OUT": "bidirectional", "PH0/OSC_IN": "bidirectional", TCXO_OUT: "output", VDD_TCXO: "power_in", GND_49: "passive", GND_50: "passive", GND_51: "passive", GND_52: "passive", GND_53: "passive", GND_54: "passive", GND_55: "passive", GND_56: "passive", GND_57: "passive", ...opts.pinTypes } });
  }
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
 */
export class CMWX1ZZABZ_091 extends Component.withPins({
  "PA12/USB_DP": "1",
  "PA11/USB_DM": "2",
  "GND_3": "3",
  "VDD_USB": "4",
  "VDD_MCU": "5",
  "VDD_RF": "6",
  "GND_7": "7",
  "DBG_SX1276_DIO2": "8",
  "DBG_SX1276_DI03": "9",
  "SX1276_DIO4": "10",
  "DBG_SX1276_DIO5": "11",
  "DBG_SX1276_DIO1": "12",
  "DBG_SX1276_DIO0": "13",
  "PB15/SPI2_MOSI": "14",
  "PB14/SPI2_MISO": "15",
  "PB13/SPI2_SCK": "16",
  "PB12/SPI2_NSS": "17",
  "PA10/USART1_RX": "18",
  "PA9/USART1_TX": "19",
  "PA8/MCO": "20",
  "PA5/ADC5/DAC2": "21",
  "PA4/ADC4/DAC1": "22",
  "PA3/ADC3": "23",
  "PA2/ADC2": "24",
  "GND_25": "25",
  "ANT": "26",
  "GND_27": "27",
  "DBG_CRF1": "28",
  "DBG_CRF3": "29",
  "DGB_CRF2": "30",
  "~{STSAFE_RST}": "31",
  "VREF+": "32",
  "PA0/WKUP1": "33",
  "~{MCU_RST}": "34",
  "PB8/I2C1_SCL": "35",
  "PB9/I2C1_SDA": "36",
  "PB2/LPTIM1_OUT": "37",
  "PB7/LPTIM1_IN2": "38",
  "PB6/LPTIM1_ETR": "39",
  "PB5/LPTIM1_IN1": "40",
  "PA13/SWDIO": "41",
  "PA14/SWCLK": "42",
  "BOOT0": "43",
  "GND_44": "44",
  "PH1/OSC_OUT": "45",
  "PH0/OSC_IN": "46",
  "TCXO_OUT": "47",
  "VDD_TCXO": "48",
  "GND_49": "49",
  "GND_50": "50",
  "GND_51": "51",
  "GND_52": "52",
  "GND_53": "53",
  "GND_54": "54",
  "GND_55": "55",
  "GND_56": "56",
  "GND_57": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PA12/USB_DP": "bidirectional", "PA11/USB_DM": "bidirectional", GND_3: "power_in", VDD_USB: "power_in", VDD_MCU: "power_in", VDD_RF: "power_in", GND_7: "passive", DBG_SX1276_DIO2: "bidirectional", DBG_SX1276_DI03: "bidirectional", SX1276_DIO4: "bidirectional", DBG_SX1276_DIO5: "bidirectional", DBG_SX1276_DIO1: "bidirectional", DBG_SX1276_DIO0: "bidirectional", "PB15/SPI2_MOSI": "bidirectional", "PB14/SPI2_MISO": "bidirectional", "PB13/SPI2_SCK": "bidirectional", "PB12/SPI2_NSS": "bidirectional", "PA10/USART1_RX": "bidirectional", "PA9/USART1_TX": "bidirectional", "PA8/MCO": "bidirectional", "PA5/ADC5/DAC2": "bidirectional", "PA4/ADC4/DAC1": "bidirectional", "PA3/ADC3": "bidirectional", "PA2/ADC2": "bidirectional", GND_25: "passive", ANT: "passive", GND_27: "passive", DBG_CRF1: "passive", DBG_CRF3: "passive", DGB_CRF2: "passive", "~{STSAFE_RST}": "passive", "VREF+": "power_in", "PA0/WKUP1": "bidirectional", "~{MCU_RST}": "input", "PB8/I2C1_SCL": "bidirectional", "PB9/I2C1_SDA": "bidirectional", "PB2/LPTIM1_OUT": "bidirectional", "PB7/LPTIM1_IN2": "bidirectional", "PB6/LPTIM1_ETR": "bidirectional", "PB5/LPTIM1_IN1": "bidirectional", "PA13/SWDIO": "bidirectional", "PA14/SWCLK": "bidirectional", BOOT0: "input", GND_44: "passive", "PH1/OSC_OUT": "bidirectional", "PH0/OSC_IN": "bidirectional", TCXO_OUT: "output", VDD_TCXO: "power_in", GND_49: "passive", GND_50: "passive", GND_51: "passive", GND_52: "passive", GND_53: "passive", GND_54: "passive", GND_55: "passive", GND_56: "passive", GND_57: "passive", ...opts.pinTypes } });
  }
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
 */
export class D52MxxM8 extends Component.withPins({
  "VSS_A2": "A2",
  "VSS_A3": "A3",
  "VSS_A4": "A4",
  "VSS_A5": "A5",
  "VSS_A6": "A6",
  "SWDIO": "B1",
  "P012": "B2",
  "P015": "B3",
  "P020": "B4",
  "VCC_B5": "B5",
  "VCC_B6": "B6",
  "SWDCLK": "C1",
  "NFC1/P009": "C2",
  "NFC2/P010": "C3",
  "P016": "C4",
  "VCC_C5": "C5",
  "VCC_C6": "C6",
  "P008": "D1",
  "P014": "D2",
  "P013": "D3",
  "P022": "D4",
  "P018": "D5",
  "P024": "D6",
  "P006": "E1",
  "AIN3/P005": "E2",
  "AIN1/P003": "E3",
  "AIN2/P004": "E4",
  "AIN0/P002": "E5",
  "P021/RESET": "E6",
  "P025": "F1",
  "AIN7/P031": "F2",
  "AIN6/P030": "F3",
  "AIN5/P029": "F4",
  "AIN4/P028": "F5",
  "P011": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS_A2: "power_in", VSS_A3: "passive", VSS_A4: "passive", VSS_A5: "passive", VSS_A6: "passive", SWDIO: "bidirectional", P012: "bidirectional", P015: "bidirectional", P020: "bidirectional", VCC_B5: "power_in", VCC_B6: "passive", SWDCLK: "input", "NFC1/P009": "bidirectional", "NFC2/P010": "bidirectional", P016: "bidirectional", VCC_C5: "passive", VCC_C6: "passive", P008: "bidirectional", P014: "bidirectional", P013: "bidirectional", P022: "bidirectional", P018: "bidirectional", P024: "bidirectional", P006: "bidirectional", "AIN3/P005": "bidirectional", "AIN1/P003": "bidirectional", "AIN2/P004": "bidirectional", "AIN0/P002": "bidirectional", "P021/RESET": "bidirectional", P025: "bidirectional", "AIN7/P031": "bidirectional", "AIN6/P030": "bidirectional", "AIN5/P029": "bidirectional", "AIN4/P028": "bidirectional", P011: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TR_52DA extends Component.withPins({
  "RA0/AN0/C12IN0": "C1",
  "RC2/VOUT": "C2",
  "VIN": "C3",
  "GND": "C4",
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  "RC3/SCK/SCL": "C6",
  "RC4/SDI/SDA": "C7",
  "RC5/RC7/RX/SDO": "C8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA0/AN0/C12IN0": "bidirectional", "RC2/VOUT": "bidirectional", VIN: "power_in", GND: "power_in", "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/RC7/RX/SDO": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DCTR_52DA extends Component.withPins({
  "RA0/AN0/C12IN0": "C1",
  "RC2/VOUT": "C2",
  "VIN": "C3",
  "GND": "C4",
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  "RC3/SCK/SCL": "C6",
  "RC4/SDI/SDA": "C7",
  "RC5/RC7/RX/SDO": "C8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA0/AN0/C12IN0": "bidirectional", "RC2/VOUT": "bidirectional", VIN: "power_in", GND: "power_in", "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/RC7/RX/SDO": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DCTR_52DAT extends Component.withPins({
  "RA0/AN0/C12IN0": "C1",
  "RC2/VOUT": "C2",
  "VIN": "C3",
  "GND": "C4",
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  "RC3/SCK/SCL": "C6",
  "RC4/SDI/SDA": "C7",
  "RC5/RC7/RX/SDO": "C8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA0/AN0/C12IN0": "bidirectional", "RC2/VOUT": "bidirectional", VIN: "power_in", GND: "power_in", "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/RC7/RX/SDO": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DWM1000 extends Component.withPins({
  "EXTON": "1",
  "WAKEUP": "2",
  "~{RST}": "3",
  "GPIO7": "4",
  "VDDAON": "5",
  "VDD3V3_6": "6",
  "VDD3V3_7": "7",
  "VSS_8": "8",
  "GPIO6/EXTRXE/SPIHA": "9",
  "GPIO5/EXTTXE/SPIPOL": "10",
  "GPIO4/EXTPA": "11",
  "GPIO3/TXLED": "12",
  "GPIO2/RXLED": "13",
  "GPIO1/SFDLED": "14",
  "GPIO0/RXOKLED": "15",
  "VSS_16": "16",
  "~{SPICS}": "17",
  "SPIMOSI": "18",
  "SPIMISO": "19",
  "SPICLK": "20",
  "VSS_21": "21",
  "IRQ/GPIO8": "22",
  "VSS_23": "23",
  "VSS_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EXTON: "output", WAKEUP: "bidirectional", "~{RST}": "bidirectional", GPIO7: "bidirectional", VDDAON: "power_in", VDD3V3_6: "power_in", VDD3V3_7: "power_in", VSS_8: "power_in", "GPIO6/EXTRXE/SPIHA": "bidirectional", "GPIO5/EXTTXE/SPIPOL": "bidirectional", "GPIO4/EXTPA": "bidirectional", "GPIO3/TXLED": "bidirectional", "GPIO2/RXLED": "bidirectional", "GPIO1/SFDLED": "bidirectional", "GPIO0/RXOKLED": "bidirectional", VSS_16: "passive", "~{SPICS}": "input", SPIMOSI: "input", SPIMISO: "output", SPICLK: "input", VSS_21: "passive", "IRQ/GPIO8": "bidirectional", VSS_23: "passive", VSS_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class DWM1001 extends Component.withPins({
  "GND_1": "1",
  "SWD_CLK": "2",
  "SWD_DIO": "3",
  "GPIO_10": "4",
  "GPIO_9": "5",
  "GPIO_12": "6",
  "GPIO_14": "7",
  "GPIO_22": "8",
  "GPIO_31": "9",
  "GPIO_30": "10",
  "GND_11": "11",
  "VCC": "12",
  "GPIO_27": "13",
  "I2C_SDA": "14",
  "I2C_SCL": "15",
  "GPIO_23": "16",
  "GPIO_13": "17",
  "UART_RX": "18",
  "READY": "19",
  "UART_TX": "20",
  "GPIO_1": "21",
  "GPIO_0": "22",
  "GPIO_15": "23",
  "GND_24": "24",
  "GPIO_8": "25",
  "SPIS_MISO": "26",
  "SPIS_MOSI": "27",
  "SPIS_CLK": "28",
  "~{SPIS_CS}": "29",
  "GPIO_3": "30",
  "GPIO_2": "31",
  "BT_WAKE_UP": "32",
  "~{RESET}": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", SWD_CLK: "input", SWD_DIO: "bidirectional", GPIO_10: "bidirectional", GPIO_9: "bidirectional", GPIO_12: "bidirectional", GPIO_14: "bidirectional", GPIO_22: "bidirectional", GPIO_31: "bidirectional", GPIO_30: "bidirectional", GND_11: "passive", VCC: "power_in", GPIO_27: "bidirectional", I2C_SDA: "bidirectional", I2C_SCL: "output", GPIO_23: "bidirectional", GPIO_13: "bidirectional", UART_RX: "input", READY: "output", UART_TX: "output", GPIO_1: "bidirectional", GPIO_0: "bidirectional", GPIO_15: "bidirectional", GND_24: "passive", GPIO_8: "bidirectional", SPIS_MISO: "output", SPIS_MOSI: "tri_state", SPIS_CLK: "input", "~{SPIS_CS}": "input", GPIO_3: "bidirectional", GPIO_2: "bidirectional", BT_WAKE_UP: "input", "~{RESET}": "input", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class DWM3000 extends Component.withPins({
  "EXTON": "1",
  "WAKEUP": "2",
  "~{RST}": "3",
  "GPIO7": "4",
  "VDDAON": "5",
  "VDD3V3_6": "6",
  "VDD3V3_7": "7",
  "VSS_8": "8",
  "GPIO6/EXTRXE/SPIHA": "9",
  "GPIO5/EXTTXE/SPIPOL": "10",
  "GPIO4/EXTPA": "11",
  "GPIO3/TXLED": "12",
  "GPIO2/RXLED": "13",
  "GPIO1/SFDLED": "14",
  "GPIO0/RXOKLED": "15",
  "VSS_16": "16",
  "~{SPICS}": "17",
  "SPIMOSI": "18",
  "SPIMISO": "19",
  "SPICLK": "20",
  "VSS_21": "21",
  "IRQ/GPIO8": "22",
  "VSS_23": "23",
  "VSS_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EXTON: "output", WAKEUP: "bidirectional", "~{RST}": "bidirectional", GPIO7: "bidirectional", VDDAON: "power_in", VDD3V3_6: "power_in", VDD3V3_7: "power_in", VSS_8: "power_in", "GPIO6/EXTRXE/SPIHA": "bidirectional", "GPIO5/EXTTXE/SPIPOL": "bidirectional", "GPIO4/EXTPA": "bidirectional", "GPIO3/TXLED": "bidirectional", "GPIO2/RXLED": "bidirectional", "GPIO1/SFDLED": "bidirectional", "GPIO0/RXOKLED": "bidirectional", VSS_16: "passive", "~{SPICS}": "input", SPIMOSI: "input", SPIMISO: "output", SPICLK: "input", VSS_21: "passive", "IRQ/GPIO8": "bidirectional", VSS_23: "passive", VSS_24: "passive", ...opts.pinTypes } });
  }
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
 */
export class E18_MS1_PCB extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "P2.2": "3",
  "P2.1": "4",
  "P2.0": "5",
  "P1.7": "6",
  "P1.6": "7",
  "NC_8": "8",
  "NC_9": "9",
  "P1.5": "10",
  "P1.4": "11",
  "P1.3": "12",
  "P1.2": "13",
  "P1.1": "14",
  "P1.0": "15",
  "P0.7": "16",
  "P0.6": "17",
  "P0.5": "18",
  "P0.4": "19",
  "P0.3": "20",
  "P0.2": "21",
  "P0.1": "22",
  "P0.0": "23",
  "~{RESET}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", NC_8: "no_connect", NC_9: "no_connect", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class E73_2G4M04S_52832 extends Component.withPins({
  "GND_0": "0",
  "GND_1": "1",
  "GND_2": "2",
  "DEC2": "3",
  "DEC3": "4",
  "P0.25": "5",
  "P0.26": "6",
  "P0.27": "7",
  "AIN4/P0.28": "8",
  "AIN5/P0.29": "9",
  "AIN6/P0.30": "10",
  "AIN7/P0.31": "11",
  "DEC4": "12",
  "DCC": "13",
  "DEC1": "14",
  "GND_15": "15",
  "VCC": "16",
  "AIN0/P0.02": "17",
  "AIN1/P0.03": "18",
  "AIN2/P0.04": "19",
  "AIN3/P0.05": "20",
  "P0.06": "21",
  "P0.07": "22",
  "P0.08": "23",
  "NFC1/P0.09": "24",
  "NFC2/P0.10": "25",
  "P0.11": "26",
  "P0.12": "27",
  "P0.13": "28",
  "P0.14": "29",
  "P0.15": "30",
  "P0.16": "31",
  "P0.17": "32",
  "SWO/P0.18": "33",
  "P0.19": "34",
  "P0.20": "35",
  "P0.21/~{RESET}": "36",
  "SWDCLK": "37",
  "SWDIO": "38",
  "P0.22": "39",
  "P0.23": "40",
  "P0.24": "41",
  "GND_42": "42",
  "GND_43": "43",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_0: "power_in", GND_1: "passive", GND_2: "passive", DEC2: "passive", DEC3: "passive", "P0.25": "bidirectional", "P0.26": "bidirectional", "P0.27": "bidirectional", "AIN4/P0.28": "bidirectional", "AIN5/P0.29": "bidirectional", "AIN6/P0.30": "bidirectional", "AIN7/P0.31": "bidirectional", DEC4: "passive", DCC: "power_out", DEC1: "passive", GND_15: "passive", VCC: "power_in", "AIN0/P0.02": "bidirectional", "AIN1/P0.03": "bidirectional", "AIN2/P0.04": "bidirectional", "AIN3/P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "NFC1/P0.09": "bidirectional", "NFC2/P0.10": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "SWO/P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P0.21/~{RESET}": "bidirectional", SWDCLK: "input", SWDIO: "bidirectional", "P0.22": "bidirectional", "P0.23": "bidirectional", "P0.24": "bidirectional", GND_42: "passive", GND_43: "passive", ...opts.pinTypes } });
  }
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
 */
export class E73_2G4M04S_52810 extends Component.withPins({
  "GND_0": "0",
  "GND_1": "1",
  "GND_2": "2",
  "DEC2": "3",
  "DEC3": "4",
  "P0.25": "5",
  "P0.26": "6",
  "P0.27": "7",
  "AIN4/P0.28": "8",
  "AIN5/P0.29": "9",
  "AIN6/P0.30": "10",
  "AIN7/P0.31": "11",
  "DEC4": "12",
  "DCC": "13",
  "DEC1": "14",
  "GND_15": "15",
  "VCC": "16",
  "AIN0/P0.02": "17",
  "AIN1/P0.03": "18",
  "AIN2/P0.04": "19",
  "AIN3/P0.05": "20",
  "P0.06": "21",
  "P0.07": "22",
  "P0.08": "23",
  "NFC1/P0.09": "24",
  "NFC2/P0.10": "25",
  "P0.11": "26",
  "P0.12": "27",
  "P0.13": "28",
  "P0.14": "29",
  "P0.15": "30",
  "P0.16": "31",
  "P0.17": "32",
  "SWO/P0.18": "33",
  "P0.19": "34",
  "P0.20": "35",
  "P0.21/~{RESET}": "36",
  "SWDCLK": "37",
  "SWDIO": "38",
  "P0.22": "39",
  "P0.23": "40",
  "P0.24": "41",
  "GND_42": "42",
  "GND_43": "43",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_0: "power_in", GND_1: "passive", GND_2: "passive", DEC2: "passive", DEC3: "passive", "P0.25": "bidirectional", "P0.26": "bidirectional", "P0.27": "bidirectional", "AIN4/P0.28": "bidirectional", "AIN5/P0.29": "bidirectional", "AIN6/P0.30": "bidirectional", "AIN7/P0.31": "bidirectional", DEC4: "passive", DCC: "power_out", DEC1: "passive", GND_15: "passive", VCC: "power_in", "AIN0/P0.02": "bidirectional", "AIN1/P0.03": "bidirectional", "AIN2/P0.04": "bidirectional", "AIN3/P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "NFC1/P0.09": "bidirectional", "NFC2/P0.10": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "SWO/P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P0.21/~{RESET}": "bidirectional", SWDCLK: "input", SWDIO: "bidirectional", "P0.22": "bidirectional", "P0.23": "bidirectional", "P0.24": "bidirectional", GND_42: "passive", GND_43: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP_01 extends Component.withPins({
  "GND": "1",
  "IO2": "2",
  "IO0": "3",
  "RXD/IO3": "4",
  "TXD/IO1": "5",
  "EN": "6",
  "~{RST}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", IO2: "bidirectional", IO0: "bidirectional", "RXD/IO3": "bidirectional", "TXD/IO1": "bidirectional", EN: "input", "~{RST}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ESP_07 extends Component.withPins({
  "~{RST}": "1",
  "ADC": "2",
  "EN": "3",
  "GPIO16": "4",
  "GPIO14": "5",
  "GPIO12": "6",
  "GPIO13": "7",
  "VCC": "8",
  "GND": "9",
  "GPIO15": "10",
  "GPIO2": "11",
  "GPIO0": "12",
  "GPIO4": "13",
  "GPIO5": "14",
  "GPIO3/RXD": "15",
  "GPIO1/TXD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", ADC: "input", EN: "input", GPIO16: "bidirectional", GPIO14: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", VCC: "power_in", GND: "power_in", GPIO15: "bidirectional", GPIO2: "bidirectional", GPIO0: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", "GPIO3/RXD": "bidirectional", "GPIO1/TXD": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class ESP_12E extends Component.withPins({
  "~{RST}": "1",
  "ADC": "2",
  "EN": "3",
  "GPIO16": "4",
  "GPIO14": "5",
  "GPIO12": "6",
  "GPIO13": "7",
  "VCC": "8",
  "CS0": "9",
  "MISO": "10",
  "GPIO9": "11",
  "GPIO10": "12",
  "MOSI": "13",
  "SCLK": "14",
  "GND": "15",
  "GPIO15": "16",
  "GPIO2": "17",
  "GPIO0": "18",
  "GPIO4": "19",
  "GPIO5": "20",
  "GPIO3/RXD": "21",
  "GPIO1/TXD": "22",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", ADC: "input", EN: "input", GPIO16: "bidirectional", GPIO14: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", VCC: "power_in", CS0: "input", MISO: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", MOSI: "bidirectional", SCLK: "bidirectional", GND: "power_in", GPIO15: "bidirectional", GPIO2: "bidirectional", GPIO0: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", "GPIO3/RXD": "bidirectional", "GPIO1/TXD": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class ESP_12F extends Component.withPins({
  "~{RST}": "1",
  "ADC": "2",
  "EN": "3",
  "GPIO16": "4",
  "GPIO14": "5",
  "GPIO12": "6",
  "GPIO13": "7",
  "VCC": "8",
  "CS0": "9",
  "MISO": "10",
  "GPIO9": "11",
  "GPIO10": "12",
  "MOSI": "13",
  "SCLK": "14",
  "GND": "15",
  "GPIO15": "16",
  "GPIO2": "17",
  "GPIO0": "18",
  "GPIO4": "19",
  "GPIO5": "20",
  "GPIO3/RXD": "21",
  "GPIO1/TXD": "22",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", ADC: "input", EN: "input", GPIO16: "bidirectional", GPIO14: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", VCC: "power_in", CS0: "input", MISO: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", MOSI: "bidirectional", SCLK: "bidirectional", GND: "power_in", GPIO15: "bidirectional", GPIO2: "bidirectional", GPIO0: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", "GPIO3/RXD": "bidirectional", "GPIO1/TXD": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class ESP_WROOM_02 extends Component.withPins({
  "VDD": "1",
  "EN": "2",
  "IO14": "3",
  "IO12": "4",
  "IO13": "5",
  "IO15": "6",
  "IO2": "7",
  "IO0": "8",
  "GND_9": "9",
  "IO4": "10",
  "RXD": "11",
  "TXD": "12",
  "GND_13": "13",
  "IO5": "14",
  "RST": "15",
  "TOUT": "16",
  "IO16": "17",
  "GND_18": "18",
  "GND_19": "19",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", EN: "input", IO14: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", GND_9: "power_in", IO4: "bidirectional", RXD: "bidirectional", TXD: "bidirectional", GND_13: "passive", IO5: "bidirectional", RST: "input", TOUT: "input", IO16: "bidirectional", GND_18: "passive", GND_19: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_C3_DevKitM_1 extends Component.withPins({
  "GND_1": "1",
  "3V3_2": "2",
  "3V3_3": "3",
  "IO2": "4",
  "IO3": "5",
  "GND_6": "6",
  "RST": "7",
  "GND_8": "8",
  "IO0": "9",
  "IO1": "10",
  "IO10": "11",
  "GND_12": "12",
  "5V_13": "13",
  "5V_14": "14",
  "GND_15": "15",
  "GND_16": "16",
  "IO19": "17",
  "IO18": "18",
  "GND_19": "19",
  "IO4": "20",
  "IO5": "21",
  "IO6": "22",
  "IO7": "23",
  "GND_24": "24",
  "IO8": "25",
  "IO9": "26",
  "GND_27": "27",
  "RX": "28",
  "TX": "29",
  "GND_30": "30",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "3V3_2": "power_out", "3V3_3": "passive", IO2: "bidirectional", IO3: "bidirectional", GND_6: "passive", RST: "input", GND_8: "passive", IO0: "bidirectional", IO1: "bidirectional", IO10: "bidirectional", GND_12: "passive", "5V_13": "passive", "5V_14": "passive", GND_15: "passive", GND_16: "passive", IO19: "bidirectional", IO18: "bidirectional", GND_19: "passive", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", GND_24: "passive", IO8: "bidirectional", IO9: "bidirectional", GND_27: "passive", RX: "input", TX: "output", GND_30: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_C3_WROOM_02 extends Component.withPins({
  "3V3": "1",
  "EN": "2",
  "IO4": "3",
  "IO5": "4",
  "IO6": "5",
  "IO7": "6",
  "IO8": "7",
  "IO9": "8",
  "GND_9": "9",
  "IO10": "10",
  "IO20/RXD": "11",
  "IO21/TXD": "12",
  "IO18": "13",
  "IO19": "14",
  "IO3": "15",
  "IO2": "16",
  "IO1": "17",
  "IO0": "18",
  "GND_19": "19",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "3V3": "power_in", EN: "input", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", IO8: "bidirectional", IO9: "bidirectional", GND_9: "power_in", IO10: "bidirectional", "IO20/RXD": "bidirectional", "IO21/TXD": "bidirectional", IO18: "bidirectional", IO19: "bidirectional", IO3: "bidirectional", IO2: "bidirectional", IO1: "bidirectional", IO0: "bidirectional", GND_19: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_C3_WROOM_02U extends Component.withPins({
  "3V3": "1",
  "EN": "2",
  "IO4": "3",
  "IO5": "4",
  "IO6": "5",
  "IO7": "6",
  "IO8": "7",
  "IO9": "8",
  "GND_9": "9",
  "IO10": "10",
  "IO20/RXD": "11",
  "IO21/TXD": "12",
  "IO18": "13",
  "IO19": "14",
  "IO3": "15",
  "IO2": "16",
  "IO1": "17",
  "IO0": "18",
  "GND_19": "19",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "3V3": "power_in", EN: "input", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", IO8: "bidirectional", IO9: "bidirectional", GND_9: "power_in", IO10: "bidirectional", "IO20/RXD": "bidirectional", "IO21/TXD": "bidirectional", IO18: "bidirectional", IO19: "bidirectional", IO3: "bidirectional", IO2: "bidirectional", IO1: "bidirectional", IO0: "bidirectional", GND_19: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_C6_MINI_1 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "3V3": "3",
  "NC_4": "4",
  "IO2": "5",
  "IO3": "6",
  "NC_7": "7",
  "EN": "8",
  "IO4": "9",
  "IO5": "10",
  "GND_11": "11",
  "IO0": "12",
  "IO1": "13",
  "GND_14": "14",
  "IO6": "15",
  "IO7": "16",
  "IO12": "17",
  "IO13": "18",
  "IO14": "19",
  "IO15": "20",
  "NC_21": "21",
  "IO8": "22",
  "IO9": "23",
  "IO18": "24",
  "IO19": "25",
  "IO20": "26",
  "IO21": "27",
  "IO22": "28",
  "IO23": "29",
  "RXD0": "30",
  "TXD0": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "GND_36": "36",
  "GND_37": "37",
  "GND_38": "38",
  "GND_39": "39",
  "GND_40": "40",
  "GND_41": "41",
  "GND_42": "42",
  "GND_43": "43",
  "GND_44": "44",
  "GND_45": "45",
  "GND_46": "46",
  "GND_47": "47",
  "GND_48": "48",
  "GND_49": "49",
  "GND_50": "50",
  "GND_51": "51",
  "GND_52": "52",
  "GND_53": "53",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "3V3": "power_in", NC_4: "no_connect", IO2: "bidirectional", IO3: "bidirectional", NC_7: "no_connect", EN: "input", IO4: "bidirectional", IO5: "bidirectional", GND_11: "passive", IO0: "bidirectional", IO1: "bidirectional", GND_14: "passive", IO6: "bidirectional", IO7: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", IO14: "bidirectional", IO15: "bidirectional", NC_21: "no_connect", IO8: "bidirectional", IO9: "bidirectional", IO18: "bidirectional", IO19: "bidirectional", IO20: "bidirectional", IO21: "bidirectional", IO22: "bidirectional", IO23: "bidirectional", RXD0: "bidirectional", TXD0: "bidirectional", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", GND_36: "passive", GND_37: "passive", GND_38: "passive", GND_39: "passive", GND_40: "passive", GND_41: "passive", GND_42: "passive", GND_43: "passive", GND_44: "passive", GND_45: "passive", GND_46: "passive", GND_47: "passive", GND_48: "passive", GND_49: "passive", GND_50: "passive", GND_51: "passive", GND_52: "passive", GND_53: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_S2_WROVER extends Component.withPins({
  "GND_1": "1",
  "3V3": "2",
  "IO00": "3",
  "IO01": "4",
  "IO02": "5",
  "IO03": "6",
  "IO04": "7",
  "IO05": "8",
  "IO06": "9",
  "IO07": "10",
  "IO08": "11",
  "IO09": "12",
  "IO10": "13",
  "IO11": "14",
  "IO12": "15",
  "IO13": "16",
  "IO14": "17",
  "IO15": "18",
  "IO16": "19",
  "IO17": "20",
  "IO18": "21",
  "USB_D-": "22",
  "USB_D+": "23",
  "IO21": "24",
  "IO26": "25",
  "GND_26": "26",
  "IO33": "27",
  "IO34": "28",
  "IO35": "29",
  "IO36": "30",
  "IO37": "31",
  "IO38": "32",
  "IO39": "33",
  "IO40": "34",
  "IO41": "35",
  "IO42": "36",
  "TXD0": "37",
  "RXD0": "38",
  "IO45": "39",
  "IO46": "40",
  "EN": "41",
  "GND_42": "42",
  "GND_43": "43",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "3V3": "power_in", IO00: "bidirectional", IO01: "bidirectional", IO02: "bidirectional", IO03: "bidirectional", IO04: "bidirectional", IO05: "bidirectional", IO06: "bidirectional", IO07: "bidirectional", IO08: "bidirectional", IO09: "bidirectional", IO10: "bidirectional", IO11: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", IO14: "bidirectional", IO15: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO18: "bidirectional", "USB_D-": "bidirectional", "USB_D+": "bidirectional", IO21: "bidirectional", IO26: "bidirectional", GND_26: "passive", IO33: "bidirectional", IO34: "bidirectional", IO35: "bidirectional", IO36: "bidirectional", IO37: "bidirectional", IO38: "bidirectional", IO39: "bidirectional", IO40: "bidirectional", IO41: "bidirectional", IO42: "bidirectional", TXD0: "bidirectional", RXD0: "bidirectional", IO45: "bidirectional", IO46: "input", EN: "input", GND_42: "passive", GND_43: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_S2_WROVER_I extends Component.withPins({
  "GND_1": "1",
  "3V3": "2",
  "IO00": "3",
  "IO01": "4",
  "IO02": "5",
  "IO03": "6",
  "IO04": "7",
  "IO05": "8",
  "IO06": "9",
  "IO07": "10",
  "IO08": "11",
  "IO09": "12",
  "IO10": "13",
  "IO11": "14",
  "IO12": "15",
  "IO13": "16",
  "IO14": "17",
  "IO15": "18",
  "IO16": "19",
  "IO17": "20",
  "IO18": "21",
  "USB_D-": "22",
  "USB_D+": "23",
  "IO21": "24",
  "IO26": "25",
  "GND_26": "26",
  "IO33": "27",
  "IO34": "28",
  "IO35": "29",
  "IO36": "30",
  "IO37": "31",
  "IO38": "32",
  "IO39": "33",
  "IO40": "34",
  "IO41": "35",
  "IO42": "36",
  "TXD0": "37",
  "RXD0": "38",
  "IO45": "39",
  "IO46": "40",
  "EN": "41",
  "GND_42": "42",
  "GND_43": "43",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "3V3": "power_in", IO00: "bidirectional", IO01: "bidirectional", IO02: "bidirectional", IO03: "bidirectional", IO04: "bidirectional", IO05: "bidirectional", IO06: "bidirectional", IO07: "bidirectional", IO08: "bidirectional", IO09: "bidirectional", IO10: "bidirectional", IO11: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", IO14: "bidirectional", IO15: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO18: "bidirectional", "USB_D-": "bidirectional", "USB_D+": "bidirectional", IO21: "bidirectional", IO26: "bidirectional", GND_26: "passive", IO33: "bidirectional", IO34: "bidirectional", IO35: "bidirectional", IO36: "bidirectional", IO37: "bidirectional", IO38: "bidirectional", IO39: "bidirectional", IO40: "bidirectional", IO41: "bidirectional", IO42: "bidirectional", TXD0: "bidirectional", RXD0: "bidirectional", IO45: "bidirectional", IO46: "input", EN: "input", GND_42: "passive", GND_43: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_S3_MINI_1 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "3V3": "3",
  "IO0": "4",
  "IO1": "5",
  "IO2": "6",
  "IO3": "7",
  "IO4": "8",
  "IO5": "9",
  "IO6": "10",
  "IO7": "11",
  "IO8": "12",
  "IO9": "13",
  "IO10": "14",
  "IO11": "15",
  "IO12": "16",
  "IO13": "17",
  "IO14": "18",
  "IO15": "19",
  "IO16": "20",
  "IO17": "21",
  "IO18": "22",
  "USB_D-": "23",
  "USB_D+": "24",
  "IO21": "25",
  "IO26": "26",
  "IO47": "27",
  "IO33": "28",
  "IO34": "29",
  "IO48": "30",
  "IO35": "31",
  "IO36": "32",
  "IO37": "33",
  "IO38": "34",
  "IO39": "35",
  "IO40": "36",
  "IO41": "37",
  "IO42": "38",
  "TXD0": "39",
  "RXD0": "40",
  "IO45": "41",
  "GND_42": "42",
  "GND_43": "43",
  "IO46": "44",
  "EN": "45",
  "GND_46": "46",
  "GND_47": "47",
  "GND_48": "48",
  "GND_49": "49",
  "GND_50": "50",
  "GND_51": "51",
  "GND_52": "52",
  "GND_53": "53",
  "GND_54": "54",
  "GND_55": "55",
  "GND_56": "56",
  "GND_57": "57",
  "GND_58": "58",
  "GND_59": "59",
  "GND_60": "60",
  "GND_61": "61",
  "GND_62": "62",
  "GND_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "3V3": "power_in", IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", IO3: "bidirectional", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", IO8: "bidirectional", IO9: "bidirectional", IO10: "bidirectional", IO11: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", IO14: "bidirectional", IO15: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO18: "bidirectional", "USB_D-": "bidirectional", "USB_D+": "bidirectional", IO21: "bidirectional", IO26: "bidirectional", IO47: "bidirectional", IO33: "bidirectional", IO34: "bidirectional", IO48: "bidirectional", IO35: "bidirectional", IO36: "bidirectional", IO37: "bidirectional", IO38: "bidirectional", IO39: "bidirectional", IO40: "bidirectional", IO41: "bidirectional", IO42: "bidirectional", TXD0: "bidirectional", RXD0: "bidirectional", IO45: "bidirectional", GND_42: "passive", GND_43: "passive", IO46: "bidirectional", EN: "input", GND_46: "passive", GND_47: "passive", GND_48: "passive", GND_49: "passive", GND_50: "passive", GND_51: "passive", GND_52: "passive", GND_53: "passive", GND_54: "passive", GND_55: "passive", GND_56: "passive", GND_57: "passive", GND_58: "passive", GND_59: "passive", GND_60: "passive", GND_61: "passive", GND_62: "passive", GND_63: "passive", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_S3_MINI_1U extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "3V3": "3",
  "IO0": "4",
  "IO1": "5",
  "IO2": "6",
  "IO3": "7",
  "IO4": "8",
  "IO5": "9",
  "IO6": "10",
  "IO7": "11",
  "IO8": "12",
  "IO9": "13",
  "IO10": "14",
  "IO11": "15",
  "IO12": "16",
  "IO13": "17",
  "IO14": "18",
  "IO15": "19",
  "IO16": "20",
  "IO17": "21",
  "IO18": "22",
  "USB_D-": "23",
  "USB_D+": "24",
  "IO21": "25",
  "IO26": "26",
  "IO47": "27",
  "IO33": "28",
  "IO34": "29",
  "IO48": "30",
  "IO35": "31",
  "IO36": "32",
  "IO37": "33",
  "IO38": "34",
  "IO39": "35",
  "IO40": "36",
  "IO41": "37",
  "IO42": "38",
  "TXD0": "39",
  "RXD0": "40",
  "IO45": "41",
  "GND_42": "42",
  "GND_43": "43",
  "IO46": "44",
  "EN": "45",
  "GND_46": "46",
  "GND_47": "47",
  "GND_48": "48",
  "GND_49": "49",
  "GND_50": "50",
  "GND_51": "51",
  "GND_52": "52",
  "GND_53": "53",
  "GND_54": "54",
  "GND_55": "55",
  "GND_56": "56",
  "GND_57": "57",
  "GND_58": "58",
  "GND_59": "59",
  "GND_60": "60",
  "GND_61": "61",
  "GND_62": "62",
  "GND_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "3V3": "power_in", IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", IO3: "bidirectional", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", IO8: "bidirectional", IO9: "bidirectional", IO10: "bidirectional", IO11: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", IO14: "bidirectional", IO15: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO18: "bidirectional", "USB_D-": "bidirectional", "USB_D+": "bidirectional", IO21: "bidirectional", IO26: "bidirectional", IO47: "bidirectional", IO33: "bidirectional", IO34: "bidirectional", IO48: "bidirectional", IO35: "bidirectional", IO36: "bidirectional", IO37: "bidirectional", IO38: "bidirectional", IO39: "bidirectional", IO40: "bidirectional", IO41: "bidirectional", IO42: "bidirectional", TXD0: "bidirectional", RXD0: "bidirectional", IO45: "bidirectional", GND_42: "passive", GND_43: "passive", IO46: "bidirectional", EN: "input", GND_46: "passive", GND_47: "passive", GND_48: "passive", GND_49: "passive", GND_50: "passive", GND_51: "passive", GND_52: "passive", GND_53: "passive", GND_54: "passive", GND_55: "passive", GND_56: "passive", GND_57: "passive", GND_58: "passive", GND_59: "passive", GND_60: "passive", GND_61: "passive", GND_62: "passive", GND_63: "passive", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_S3_WROOM_1 extends Component.withPins({
  "GND_1": "1",
  "3V3": "2",
  "EN": "3",
  "IO4": "4",
  "IO5": "5",
  "IO6": "6",
  "IO7": "7",
  "IO15": "8",
  "IO16": "9",
  "IO17": "10",
  "IO18": "11",
  "IO8": "12",
  "USB_D-": "13",
  "USB_D+": "14",
  "IO3": "15",
  "IO46": "16",
  "IO9": "17",
  "IO10": "18",
  "IO11": "19",
  "IO12": "20",
  "IO13": "21",
  "IO14": "22",
  "IO21": "23",
  "IO47": "24",
  "IO48": "25",
  "IO45": "26",
  "IO0": "27",
  "IO35": "28",
  "IO36": "29",
  "IO37": "30",
  "IO38": "31",
  "IO39": "32",
  "IO40": "33",
  "IO41": "34",
  "IO42": "35",
  "RXD0": "36",
  "TXD0": "37",
  "IO2": "38",
  "IO1": "39",
  "GND_40": "40",
  "GND_41": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "3V3": "power_in", EN: "input", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", IO15: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO18: "bidirectional", IO8: "bidirectional", "USB_D-": "bidirectional", "USB_D+": "bidirectional", IO3: "bidirectional", IO46: "bidirectional", IO9: "bidirectional", IO10: "bidirectional", IO11: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", IO14: "bidirectional", IO21: "bidirectional", IO47: "bidirectional", IO48: "bidirectional", IO45: "bidirectional", IO0: "bidirectional", IO35: "bidirectional", IO36: "bidirectional", IO37: "bidirectional", IO38: "bidirectional", IO39: "bidirectional", IO40: "bidirectional", IO41: "bidirectional", IO42: "bidirectional", RXD0: "bidirectional", TXD0: "bidirectional", IO2: "bidirectional", IO1: "bidirectional", GND_40: "passive", GND_41: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_S3_WROOM_2 extends Component.withPins({
  "GND_1": "1",
  "3V3": "2",
  "EN": "3",
  "IO4": "4",
  "IO5": "5",
  "IO6": "6",
  "IO7": "7",
  "IO15": "8",
  "IO16": "9",
  "IO17": "10",
  "IO18": "11",
  "IO8": "12",
  "USB_D-/IO19": "13",
  "USB_D+/IO20": "14",
  "IO3": "15",
  "IO46": "16",
  "IO9": "17",
  "IO10": "18",
  "IO11": "19",
  "IO12": "20",
  "IO13": "21",
  "IO14": "22",
  "IO21": "23",
  "IO47": "24",
  "IO48": "25",
  "IO45": "26",
  "IO0": "27",
  "NC_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "IO38": "31",
  "MTCK/IO39": "32",
  "MTDO/IO40": "33",
  "MTDI/IO41": "34",
  "MTMS/IO42": "35",
  "RXD0/IO44": "36",
  "TXD0/IO43": "37",
  "IO2": "38",
  "IO1": "39",
  "GND_40": "40",
  "GND_41": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "3V3": "power_in", EN: "input", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", IO15: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO18: "bidirectional", IO8: "bidirectional", "USB_D-/IO19": "bidirectional", "USB_D+/IO20": "bidirectional", IO3: "bidirectional", IO46: "bidirectional", IO9: "bidirectional", IO10: "bidirectional", IO11: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", IO14: "bidirectional", IO21: "bidirectional", IO47: "bidirectional", IO48: "bidirectional", IO45: "bidirectional", IO0: "bidirectional", NC_28: "no_connect", NC_29: "no_connect", NC_30: "no_connect", IO38: "bidirectional", "MTCK/IO39": "bidirectional", "MTDO/IO40": "bidirectional", "MTDI/IO41": "bidirectional", "MTMS/IO42": "bidirectional", "RXD0/IO44": "bidirectional", "TXD0/IO43": "bidirectional", IO2: "bidirectional", IO1: "bidirectional", GND_40: "passive", GND_41: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_WROOM_32 extends Component.withPins({
  "GND_1": "1",
  "VDD": "2",
  "EN": "3",
  "SENSOR_VP": "4",
  "SENSOR_VN": "5",
  "IO34": "6",
  "IO35": "7",
  "IO32": "8",
  "IO33": "9",
  "IO25": "10",
  "IO26": "11",
  "IO27": "12",
  "IO14": "13",
  "IO12": "14",
  "GND_15": "15",
  "IO13": "16",
  "SHD/SD2": "17",
  "SWP/SD3": "18",
  "SCS/CMD": "19",
  "SCK/CLK": "20",
  "SDO/SD0": "21",
  "SDI/SD1": "22",
  "IO15": "23",
  "IO2": "24",
  "IO0": "25",
  "IO4": "26",
  "IO16": "27",
  "IO17": "28",
  "IO5": "29",
  "IO18": "30",
  "IO19": "31",
  "NC": "32",
  "IO21": "33",
  "RXD0/IO3": "34",
  "TXD0/IO1": "35",
  "IO22": "36",
  "IO23": "37",
  "GND_38": "38",
  "GND_39": "39",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD: "power_in", EN: "input", SENSOR_VP: "input", SENSOR_VN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", GND_15: "passive", IO13: "bidirectional", "SHD/SD2": "bidirectional", "SWP/SD3": "bidirectional", "SCS/CMD": "bidirectional", "SCK/CLK": "bidirectional", "SDO/SD0": "bidirectional", "SDI/SD1": "bidirectional", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO5: "bidirectional", IO18: "bidirectional", IO19: "bidirectional", NC: "no_connect", IO21: "bidirectional", "RXD0/IO3": "bidirectional", "TXD0/IO1": "bidirectional", IO22: "bidirectional", IO23: "bidirectional", GND_38: "passive", GND_39: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_WROOM_32D extends Component.withPins({
  "GND_1": "1",
  "VDD": "2",
  "EN": "3",
  "SENSOR_VP": "4",
  "SENSOR_VN": "5",
  "IO34": "6",
  "IO35": "7",
  "IO32": "8",
  "IO33": "9",
  "IO25": "10",
  "IO26": "11",
  "IO27": "12",
  "IO14": "13",
  "IO12": "14",
  "GND_15": "15",
  "IO13": "16",
  "SHD/SD2": "17",
  "SWP/SD3": "18",
  "SCS/CMD": "19",
  "SCK/CLK": "20",
  "SDO/SD0": "21",
  "SDI/SD1": "22",
  "IO15": "23",
  "IO2": "24",
  "IO0": "25",
  "IO4": "26",
  "IO16": "27",
  "IO17": "28",
  "IO5": "29",
  "IO18": "30",
  "IO19": "31",
  "NC": "32",
  "IO21": "33",
  "RXD0/IO3": "34",
  "TXD0/IO1": "35",
  "IO22": "36",
  "IO23": "37",
  "GND_38": "38",
  "GND_39": "39",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD: "power_in", EN: "input", SENSOR_VP: "input", SENSOR_VN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", GND_15: "passive", IO13: "bidirectional", "SHD/SD2": "bidirectional", "SWP/SD3": "bidirectional", "SCS/CMD": "bidirectional", "SCK/CLK": "bidirectional", "SDO/SD0": "bidirectional", "SDI/SD1": "bidirectional", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO5: "bidirectional", IO18: "bidirectional", IO19: "bidirectional", NC: "no_connect", IO21: "bidirectional", "RXD0/IO3": "bidirectional", "TXD0/IO1": "bidirectional", IO22: "bidirectional", IO23: "bidirectional", GND_38: "passive", GND_39: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_WROOM_32E extends Component.withPins({
  "VDD": "2",
  "EN": "3",
  "SENSOR_VP": "4",
  "SENSOR_VN": "5",
  "IO34": "6",
  "IO35": "7",
  "IO32": "8",
  "IO33": "9",
  "IO25": "10",
  "IO26": "11",
  "IO27": "12",
  "IO14": "13",
  "IO12": "14",
  "IO13": "16",
  "NC_17": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "IO15": "23",
  "IO2": "24",
  "IO0": "25",
  "IO4": "26",
  "IO16": "27",
  "IO17": "28",
  "IO5": "29",
  "IO18": "30",
  "IO19": "31",
  "NC_32": "32",
  "IO21": "33",
  "RXD0/IO3": "34",
  "TXD0/IO1": "35",
  "IO22": "36",
  "IO23": "37",
  "GND": "[1,15,38,39]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", EN: "input", SENSOR_VP: "input", SENSOR_VN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", NC_17: "no_connect", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO5: "bidirectional", IO18: "bidirectional", IO19: "bidirectional", NC_32: "no_connect", IO21: "bidirectional", "RXD0/IO3": "bidirectional", "TXD0/IO1": "bidirectional", IO22: "bidirectional", IO23: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ESP32_WROOM_32E_R2 extends Component.withPins({
  "VDD": "2",
  "EN": "3",
  "SENSOR_VP": "4",
  "SENSOR_VN": "5",
  "IO34": "6",
  "IO35": "7",
  "IO32": "8",
  "IO33": "9",
  "IO25": "10",
  "IO26": "11",
  "IO27": "12",
  "IO14": "13",
  "IO12": "14",
  "IO13": "16",
  "NC_17": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "IO15": "23",
  "IO2": "24",
  "IO0": "25",
  "IO4": "26",
  "NC_27": "27",
  "IO17": "28",
  "IO5": "29",
  "IO18": "30",
  "IO19": "31",
  "NC_32": "32",
  "IO21": "33",
  "RXD0/IO3": "34",
  "TXD0/IO1": "35",
  "IO22": "36",
  "IO23": "37",
  "GND": "[1,15,38,39]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", EN: "input", SENSOR_VP: "input", SENSOR_VN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", NC_17: "no_connect", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", NC_27: "no_connect", IO17: "bidirectional", IO5: "bidirectional", IO18: "bidirectional", IO19: "bidirectional", NC_32: "no_connect", IO21: "bidirectional", "RXD0/IO3": "bidirectional", "TXD0/IO1": "bidirectional", IO22: "bidirectional", IO23: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ESP32_WROOM_32U extends Component.withPins({
  "GND_1": "1",
  "VDD": "2",
  "EN": "3",
  "SENSOR_VP": "4",
  "SENSOR_VN": "5",
  "IO34": "6",
  "IO35": "7",
  "IO32": "8",
  "IO33": "9",
  "IO25": "10",
  "IO26": "11",
  "IO27": "12",
  "IO14": "13",
  "IO12": "14",
  "GND_15": "15",
  "IO13": "16",
  "SHD/SD2": "17",
  "SWP/SD3": "18",
  "SCS/CMD": "19",
  "SCK/CLK": "20",
  "SDO/SD0": "21",
  "SDI/SD1": "22",
  "IO15": "23",
  "IO2": "24",
  "IO0": "25",
  "IO4": "26",
  "IO16": "27",
  "IO17": "28",
  "IO5": "29",
  "IO18": "30",
  "IO19": "31",
  "NC": "32",
  "IO21": "33",
  "RXD0/IO3": "34",
  "TXD0/IO1": "35",
  "IO22": "36",
  "IO23": "37",
  "GND_38": "38",
  "GND_39": "39",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD: "power_in", EN: "input", SENSOR_VP: "input", SENSOR_VN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", GND_15: "passive", IO13: "bidirectional", "SHD/SD2": "bidirectional", "SWP/SD3": "bidirectional", "SCS/CMD": "bidirectional", "SCK/CLK": "bidirectional", "SDO/SD0": "bidirectional", "SDI/SD1": "bidirectional", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO5: "bidirectional", IO18: "bidirectional", IO19: "bidirectional", NC: "no_connect", IO21: "bidirectional", "RXD0/IO3": "bidirectional", "TXD0/IO1": "bidirectional", IO22: "bidirectional", IO23: "bidirectional", GND_38: "passive", GND_39: "passive", ...opts.pinTypes } });
  }
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
 */
export class ESP32_WROOM_32UE extends Component.withPins({
  "VDD": "2",
  "EN": "3",
  "SENSOR_VP": "4",
  "SENSOR_VN": "5",
  "IO34": "6",
  "IO35": "7",
  "IO32": "8",
  "IO33": "9",
  "IO25": "10",
  "IO26": "11",
  "IO27": "12",
  "IO14": "13",
  "IO12": "14",
  "IO13": "16",
  "NC_17": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "IO15": "23",
  "IO2": "24",
  "IO0": "25",
  "IO4": "26",
  "IO16": "27",
  "IO17": "28",
  "IO5": "29",
  "IO18": "30",
  "IO19": "31",
  "NC_32": "32",
  "IO21": "33",
  "RXD0/IO3": "34",
  "TXD0/IO1": "35",
  "IO22": "36",
  "IO23": "37",
  "GND": "[1,15,38,39]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", EN: "input", SENSOR_VP: "input", SENSOR_VN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", NC_17: "no_connect", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", IO16: "bidirectional", IO17: "bidirectional", IO5: "bidirectional", IO18: "bidirectional", IO19: "bidirectional", NC_32: "no_connect", IO21: "bidirectional", "RXD0/IO3": "bidirectional", "TXD0/IO1": "bidirectional", IO22: "bidirectional", IO23: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ESP32_WROOM_32UE_R2 extends Component.withPins({
  "VDD": "2",
  "EN": "3",
  "SENSOR_VP": "4",
  "SENSOR_VN": "5",
  "IO34": "6",
  "IO35": "7",
  "IO32": "8",
  "IO33": "9",
  "IO25": "10",
  "IO26": "11",
  "IO27": "12",
  "IO14": "13",
  "IO12": "14",
  "IO13": "16",
  "NC_17": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "IO15": "23",
  "IO2": "24",
  "IO0": "25",
  "IO4": "26",
  "NC_27": "27",
  "IO17": "28",
  "IO5": "29",
  "IO18": "30",
  "IO19": "31",
  "NC_32": "32",
  "IO21": "33",
  "RXD0/IO3": "34",
  "TXD0/IO1": "35",
  "IO22": "36",
  "IO23": "37",
  "GND": "[1,15,38,39]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", EN: "input", SENSOR_VP: "input", SENSOR_VN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", IO13: "bidirectional", NC_17: "no_connect", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", NC_27: "no_connect", IO17: "bidirectional", IO5: "bidirectional", IO18: "bidirectional", IO19: "bidirectional", NC_32: "no_connect", IO21: "bidirectional", "RXD0/IO3": "bidirectional", "TXD0/IO1": "bidirectional", IO22: "bidirectional", IO23: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class HT_CT62 extends Component.withPins({
  "2.4G_Ant": "1",
  "GND_2": "2",
  "GPIO7": "3",
  "GPIO6": "4",
  "GPIO5": "5",
  "GPIO4": "6",
  "GPIO3": "7",
  "GPIO2": "8",
  "GPIO1": "9",
  "GPIO0": "10",
  "EN": "11",
  "VDD": "12",
  "GND_13": "13",
  "GPIO10": "14",
  "GPIO9": "15",
  "GPIO8": "16",
  "GPIO18_DN": "17",
  "GPIO19_DP": "18",
  "GPIO20_RXD": "19",
  "GPIO21_TXD": "20",
  "GND_21": "21",
  "LoRa_Ant": "22",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "2.4G_Ant": "bidirectional", GND_2: "power_in", GPIO7: "bidirectional", GPIO6: "bidirectional", GPIO5: "bidirectional", GPIO4: "bidirectional", GPIO3: "bidirectional", GPIO2: "bidirectional", GPIO1: "bidirectional", GPIO0: "bidirectional", EN: "input", VDD: "power_in", GND_13: "passive", GPIO10: "bidirectional", GPIO9: "bidirectional", GPIO8: "bidirectional", GPIO18_DN: "bidirectional", GPIO19_DP: "bidirectional", GPIO20_RXD: "bidirectional", GPIO21_TXD: "bidirectional", GND_21: "passive", LoRa_Ant: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class Jadak_Thingmagic_M6e_Nano extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "Vout": "10",
  "EN": "11",
  "GPIO1": "12",
  "GPIO2": "13",
  "GPIO3": "14",
  "GPIO4": "15",
  "Vin_16": "16",
  "Vin_17": "17",
  "GND_18": "18",
  "GND_19": "19",
  "UART_TX": "20",
  "UART_RX": "21",
  "RFU1": "22",
  "RFU2": "23",
  "RFU3": "24",
  "RFU4": "25",
  "RFU5": "26",
  "RFU6": "27",
  "RFU7": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "GND_33": "33",
  "GND_34": "34",
  "GND_35": "35",
  "GND_36": "36",
  "GND_37": "37",
  "GND_38": "38",
  "RF": "39",
  "GND_40": "40",
  "GND_41": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", Vout: "power_out", EN: "input", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", Vin_16: "power_in", Vin_17: "passive", GND_18: "passive", GND_19: "passive", UART_TX: "output", UART_RX: "input", RFU1: "no_connect", RFU2: "no_connect", RFU3: "no_connect", RFU4: "no_connect", RFU5: "no_connect", RFU6: "no_connect", RFU7: "no_connect", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", GND_33: "passive", GND_34: "passive", GND_35: "passive", GND_36: "passive", GND_37: "passive", GND_38: "passive", RF: "bidirectional", GND_40: "passive", GND_41: "passive", ...opts.pinTypes } });
  }
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
 */
export class MDBT42Q_512K extends Component.withPins({
  "GND_1": "1",
  "P0.25": "2",
  "P0.26": "3",
  "P0.27": "4",
  "AIN4/P0.28": "5",
  "AIN5/P0.29": "6",
  "AIN6/P0.30": "7",
  "AIN7/P0.31": "8",
  "DEC4": "9",
  "DCC": "10",
  "VDD": "11",
  "GND_12": "12",
  "P0.00/XL1": "13",
  "P0.01/XL2": "14",
  "AIN0/P0.02": "15",
  "AIN1/P0.03": "16",
  "AIN2/P0.04": "17",
  "AIN3/P0.05": "18",
  "P0.06": "19",
  "P0.07": "20",
  "P0.08": "21",
  "NFC1/P0.09": "22",
  "NFC2/P0.10": "23",
  "GND_24": "24",
  "P0.11": "25",
  "P0.12": "26",
  "P0.13": "27",
  "TRACEDATA3/P0.14": "28",
  "TRACEDATA2/P0.15": "29",
  "TRACEDATA1/P0.16": "30",
  "P0.17": "31",
  "TRACEDATA0/P0.18": "32",
  "P0.19": "33",
  "TRACECLK/P0.20": "34",
  "P0.21/~{RESET}": "35",
  "SWDCLK": "36",
  "SWDIO": "37",
  "P0.22": "38",
  "GND_39": "39",
  "P0.24": "40",
  "P0.23": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "P0.25": "bidirectional", "P0.26": "bidirectional", "P0.27": "bidirectional", "AIN4/P0.28": "bidirectional", "AIN5/P0.29": "bidirectional", "AIN6/P0.30": "bidirectional", "AIN7/P0.31": "bidirectional", DEC4: "power_out", DCC: "power_out", VDD: "power_in", GND_12: "passive", "P0.00/XL1": "bidirectional", "P0.01/XL2": "bidirectional", "AIN0/P0.02": "bidirectional", "AIN1/P0.03": "bidirectional", "AIN2/P0.04": "bidirectional", "AIN3/P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "NFC1/P0.09": "bidirectional", "NFC2/P0.10": "bidirectional", GND_24: "passive", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "TRACEDATA3/P0.14": "bidirectional", "TRACEDATA2/P0.15": "bidirectional", "TRACEDATA1/P0.16": "bidirectional", "P0.17": "bidirectional", "TRACEDATA0/P0.18": "bidirectional", "P0.19": "bidirectional", "TRACECLK/P0.20": "bidirectional", "P0.21/~{RESET}": "bidirectional", SWDCLK: "input", SWDIO: "bidirectional", "P0.22": "bidirectional", GND_39: "passive", "P0.24": "bidirectional", "P0.23": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MDBT50Q_1MV2 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "P1.10": "3",
  "P1.11": "4",
  "P1.12": "5",
  "P1.13": "6",
  "P1.14": "7",
  "P1.15": "8",
  "P0.03": "9",
  "P0.29": "10",
  "P0.02": "11",
  "P0.31": "12",
  "P0.28": "13",
  "P0.30": "14",
  "GND_15": "15",
  "P0.27": "16",
  "P0.00": "17",
  "P0.01": "18",
  "P0.26": "19",
  "P0.04": "20",
  "P0.05": "21",
  "P0.06": "22",
  "P0.07": "23",
  "P0.08": "24",
  "P1.08": "25",
  "P1.09": "26",
  "P0.11": "27",
  "VDD": "28",
  "P0.12": "29",
  "VDDH": "30",
  "DCCH": "31",
  "VBUS": "32",
  "GND_33": "33",
  "D-": "34",
  "D+": "35",
  "P0.14": "36",
  "P0.13": "37",
  "P0.16": "38",
  "P0.15": "39",
  "P0.18": "40",
  "P0.17": "41",
  "P0.19": "42",
  "P0.21": "43",
  "P0.20": "44",
  "P0.23": "45",
  "P0.22": "46",
  "P1.00": "47",
  "P0.24": "48",
  "P0.25": "49",
  "P1.02": "50",
  "SWDIO": "51",
  "P0.09": "52",
  "SWDCLK": "53",
  "P0.10": "54",
  "GND_55": "55",
  "P1.04": "56",
  "P1.06": "57",
  "P1.07": "58",
  "P1.05": "59",
  "P1.03": "60",
  "P1.01": "61",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "P1.10": "bidirectional", "P1.11": "bidirectional", "P1.12": "bidirectional", "P1.13": "bidirectional", "P1.14": "bidirectional", "P1.15": "bidirectional", "P0.03": "bidirectional", "P0.29": "bidirectional", "P0.02": "bidirectional", "P0.31": "bidirectional", "P0.28": "bidirectional", "P0.30": "bidirectional", GND_15: "passive", "P0.27": "bidirectional", "P0.00": "bidirectional", "P0.01": "bidirectional", "P0.26": "bidirectional", "P0.04": "bidirectional", "P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "P1.08": "bidirectional", "P1.09": "bidirectional", "P0.11": "bidirectional", VDD: "power_in", "P0.12": "bidirectional", VDDH: "power_in", DCCH: "power_out", VBUS: "power_in", GND_33: "passive", "D-": "bidirectional", "D+": "bidirectional", "P0.14": "bidirectional", "P0.13": "bidirectional", "P0.16": "bidirectional", "P0.15": "bidirectional", "P0.18": "bidirectional", "P0.17": "bidirectional", "P0.19": "bidirectional", "P0.21": "bidirectional", "P0.20": "bidirectional", "P0.23": "bidirectional", "P0.22": "bidirectional", "P1.00": "bidirectional", "P0.24": "bidirectional", "P0.25": "bidirectional", "P1.02": "bidirectional", SWDIO: "bidirectional", "P0.09": "bidirectional", SWDCLK: "input", "P0.10": "bidirectional", GND_55: "passive", "P1.04": "bidirectional", "P1.06": "bidirectional", "P1.07": "bidirectional", "P1.05": "bidirectional", "P1.03": "bidirectional", "P1.01": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MDBT50Q_512K extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "P0.25": "3",
  "NC_4": "4",
  "P0.23": "5",
  "P1.05": "6",
  "P1.03": "7",
  "P0.19_8": "8",
  "P0.03": "9",
  "P0.29": "10",
  "P0.02": "11",
  "P0.31": "12",
  "P0.28": "13",
  "P0.30": "14",
  "GND_15": "15",
  "P0.27": "16",
  "P0.00": "17",
  "P0.01": "18",
  "P0.26": "19",
  "P0.04": "20",
  "P0.05": "21",
  "P0.06": "22",
  "P0.07": "23",
  "P0.08": "24",
  "P1.08": "25",
  "P1.09": "26",
  "P0.11": "27",
  "VDD": "28",
  "P0.12": "29",
  "VDDH": "30",
  "NC_31": "31",
  "VBUS": "32",
  "GND_33": "33",
  "D-": "34",
  "D+": "35",
  "P0.14": "36",
  "P0.13": "37",
  "P0.16": "38",
  "P0.15": "39",
  "P0.18": "40",
  "P0.17": "41",
  "P0.19_42": "42",
  "P0.21": "43",
  "P0.20": "44",
  "NC_45": "45",
  "P0.22": "46",
  "P1.00": "47",
  "P0.24": "48",
  "NC_49": "49",
  "P1.02": "50",
  "SWDIO": "51",
  "P0.09": "52",
  "SWDCLK": "53",
  "P0.10": "54",
  "GND_55": "55",
  "P1.04": "56",
  "P1.06": "57",
  "P1.07": "58",
  "NC_59": "59",
  "NC_60": "60",
  "P1.01": "61",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "P0.25": "bidirectional", NC_4: "no_connect", "P0.23": "bidirectional", "P1.05": "bidirectional", "P1.03": "bidirectional", "P0.19_8": "bidirectional", "P0.03": "bidirectional", "P0.29": "bidirectional", "P0.02": "bidirectional", "P0.31": "bidirectional", "P0.28": "bidirectional", "P0.30": "bidirectional", GND_15: "passive", "P0.27": "bidirectional", "P0.00": "bidirectional", "P0.01": "bidirectional", "P0.26": "bidirectional", "P0.04": "bidirectional", "P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "P1.08": "bidirectional", "P1.09": "bidirectional", "P0.11": "bidirectional", VDD: "power_in", "P0.12": "bidirectional", VDDH: "power_in", NC_31: "no_connect", VBUS: "power_in", GND_33: "passive", "D-": "bidirectional", "D+": "bidirectional", "P0.14": "bidirectional", "P0.13": "bidirectional", "P0.16": "bidirectional", "P0.15": "bidirectional", "P0.18": "bidirectional", "P0.17": "bidirectional", "P0.19_42": "no_connect", "P0.21": "bidirectional", "P0.20": "bidirectional", NC_45: "no_connect", "P0.22": "bidirectional", "P1.00": "bidirectional", "P0.24": "bidirectional", NC_49: "no_connect", "P1.02": "bidirectional", SWDIO: "bidirectional", "P0.09": "bidirectional", SWDCLK: "input", "P0.10": "bidirectional", GND_55: "passive", "P1.04": "bidirectional", "P1.06": "bidirectional", "P1.07": "bidirectional", NC_59: "no_connect", NC_60: "no_connect", "P1.01": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MDBT50Q_P1MV2 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "P1.10": "3",
  "P1.11": "4",
  "P1.12": "5",
  "P1.13": "6",
  "P1.14": "7",
  "P1.15": "8",
  "P0.03": "9",
  "P0.29": "10",
  "P0.02": "11",
  "P0.31": "12",
  "P0.28": "13",
  "P0.30": "14",
  "GND_15": "15",
  "P0.27": "16",
  "P0.00": "17",
  "P0.01": "18",
  "P0.26": "19",
  "P0.04": "20",
  "P0.05": "21",
  "P0.06": "22",
  "P0.07": "23",
  "P0.08": "24",
  "P1.08": "25",
  "P1.09": "26",
  "P0.11": "27",
  "VDD": "28",
  "P0.12": "29",
  "VDDH": "30",
  "DCCH": "31",
  "VBUS": "32",
  "GND_33": "33",
  "D-": "34",
  "D+": "35",
  "P0.14": "36",
  "P0.13": "37",
  "P0.16": "38",
  "P0.15": "39",
  "P0.18": "40",
  "P0.17": "41",
  "P0.19": "42",
  "P0.21": "43",
  "P0.20": "44",
  "P0.23": "45",
  "P0.22": "46",
  "P1.00": "47",
  "P0.24": "48",
  "P0.25": "49",
  "P1.02": "50",
  "SWDIO": "51",
  "P0.09": "52",
  "SWDCLK": "53",
  "P0.10": "54",
  "GND_55": "55",
  "P1.04": "56",
  "P1.06": "57",
  "P1.07": "58",
  "P1.05": "59",
  "P1.03": "60",
  "P1.01": "61",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "P1.10": "bidirectional", "P1.11": "bidirectional", "P1.12": "bidirectional", "P1.13": "bidirectional", "P1.14": "bidirectional", "P1.15": "bidirectional", "P0.03": "bidirectional", "P0.29": "bidirectional", "P0.02": "bidirectional", "P0.31": "bidirectional", "P0.28": "bidirectional", "P0.30": "bidirectional", GND_15: "passive", "P0.27": "bidirectional", "P0.00": "bidirectional", "P0.01": "bidirectional", "P0.26": "bidirectional", "P0.04": "bidirectional", "P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "P1.08": "bidirectional", "P1.09": "bidirectional", "P0.11": "bidirectional", VDD: "power_in", "P0.12": "bidirectional", VDDH: "power_in", DCCH: "power_out", VBUS: "power_in", GND_33: "passive", "D-": "bidirectional", "D+": "bidirectional", "P0.14": "bidirectional", "P0.13": "bidirectional", "P0.16": "bidirectional", "P0.15": "bidirectional", "P0.18": "bidirectional", "P0.17": "bidirectional", "P0.19": "bidirectional", "P0.21": "bidirectional", "P0.20": "bidirectional", "P0.23": "bidirectional", "P0.22": "bidirectional", "P1.00": "bidirectional", "P0.24": "bidirectional", "P0.25": "bidirectional", "P1.02": "bidirectional", SWDIO: "bidirectional", "P0.09": "bidirectional", SWDCLK: "input", "P0.10": "bidirectional", GND_55: "passive", "P1.04": "bidirectional", "P1.06": "bidirectional", "P1.07": "bidirectional", "P1.05": "bidirectional", "P1.03": "bidirectional", "P1.01": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MDBT50Q_P512K extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "P0.25": "3",
  "NC_4": "4",
  "P0.23": "5",
  "P1.05": "6",
  "P1.03": "7",
  "P0.19_8": "8",
  "P0.03": "9",
  "P0.29": "10",
  "P0.02": "11",
  "P0.31": "12",
  "P0.28": "13",
  "P0.30": "14",
  "GND_15": "15",
  "P0.27": "16",
  "P0.00": "17",
  "P0.01": "18",
  "P0.26": "19",
  "P0.04": "20",
  "P0.05": "21",
  "P0.06": "22",
  "P0.07": "23",
  "P0.08": "24",
  "P1.08": "25",
  "P1.09": "26",
  "P0.11": "27",
  "VDD": "28",
  "P0.12": "29",
  "VDDH": "30",
  "NC_31": "31",
  "VBUS": "32",
  "GND_33": "33",
  "D-": "34",
  "D+": "35",
  "P0.14": "36",
  "P0.13": "37",
  "P0.16": "38",
  "P0.15": "39",
  "P0.18": "40",
  "P0.17": "41",
  "P0.19_42": "42",
  "P0.21": "43",
  "P0.20": "44",
  "NC_45": "45",
  "P0.22": "46",
  "P1.00": "47",
  "P0.24": "48",
  "NC_49": "49",
  "P1.02": "50",
  "SWDIO": "51",
  "P0.09": "52",
  "SWDCLK": "53",
  "P0.10": "54",
  "GND_55": "55",
  "P1.04": "56",
  "P1.06": "57",
  "P1.07": "58",
  "NC_59": "59",
  "NC_60": "60",
  "P1.01": "61",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "P0.25": "bidirectional", NC_4: "no_connect", "P0.23": "bidirectional", "P1.05": "bidirectional", "P1.03": "bidirectional", "P0.19_8": "bidirectional", "P0.03": "bidirectional", "P0.29": "bidirectional", "P0.02": "bidirectional", "P0.31": "bidirectional", "P0.28": "bidirectional", "P0.30": "bidirectional", GND_15: "passive", "P0.27": "bidirectional", "P0.00": "bidirectional", "P0.01": "bidirectional", "P0.26": "bidirectional", "P0.04": "bidirectional", "P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "P1.08": "bidirectional", "P1.09": "bidirectional", "P0.11": "bidirectional", VDD: "power_in", "P0.12": "bidirectional", VDDH: "power_in", NC_31: "no_connect", VBUS: "power_in", GND_33: "passive", "D-": "bidirectional", "D+": "bidirectional", "P0.14": "bidirectional", "P0.13": "bidirectional", "P0.16": "bidirectional", "P0.15": "bidirectional", "P0.18": "bidirectional", "P0.17": "bidirectional", "P0.19_42": "no_connect", "P0.21": "bidirectional", "P0.20": "bidirectional", NC_45: "no_connect", "P0.22": "bidirectional", "P1.00": "bidirectional", "P0.24": "bidirectional", NC_49: "no_connect", "P1.02": "bidirectional", SWDIO: "bidirectional", "P0.09": "bidirectional", SWDCLK: "input", "P0.10": "bidirectional", GND_55: "passive", "P1.04": "bidirectional", "P1.06": "bidirectional", "P1.07": "bidirectional", NC_59: "no_connect", NC_60: "no_connect", "P1.01": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MDBT50Q_U1MV2 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "P1.10": "3",
  "P1.11": "4",
  "P1.12": "5",
  "P1.13": "6",
  "P1.14": "7",
  "P1.15": "8",
  "P0.03": "9",
  "P0.29": "10",
  "P0.02": "11",
  "P0.31": "12",
  "P0.28": "13",
  "P0.30": "14",
  "GND_15": "15",
  "P0.27": "16",
  "P0.00": "17",
  "P0.01": "18",
  "P0.26": "19",
  "P0.04": "20",
  "P0.05": "21",
  "P0.06": "22",
  "P0.07": "23",
  "P0.08": "24",
  "P1.08": "25",
  "P1.09": "26",
  "P0.11": "27",
  "VDD": "28",
  "P0.12": "29",
  "VDDH": "30",
  "DCCH": "31",
  "VBUS": "32",
  "GND_33": "33",
  "D-": "34",
  "D+": "35",
  "P0.14": "36",
  "P0.13": "37",
  "P0.16": "38",
  "P0.15": "39",
  "P0.18": "40",
  "P0.17": "41",
  "P0.19": "42",
  "P0.21": "43",
  "P0.20": "44",
  "P0.23": "45",
  "P0.22": "46",
  "P1.00": "47",
  "P0.24": "48",
  "P0.25": "49",
  "P1.02": "50",
  "SWDIO": "51",
  "P0.09": "52",
  "SWDCLK": "53",
  "P0.10": "54",
  "GND_55": "55",
  "P1.04": "56",
  "P1.06": "57",
  "P1.07": "58",
  "P1.05": "59",
  "P1.03": "60",
  "P1.01": "61",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "P1.10": "bidirectional", "P1.11": "bidirectional", "P1.12": "bidirectional", "P1.13": "bidirectional", "P1.14": "bidirectional", "P1.15": "bidirectional", "P0.03": "bidirectional", "P0.29": "bidirectional", "P0.02": "bidirectional", "P0.31": "bidirectional", "P0.28": "bidirectional", "P0.30": "bidirectional", GND_15: "passive", "P0.27": "bidirectional", "P0.00": "bidirectional", "P0.01": "bidirectional", "P0.26": "bidirectional", "P0.04": "bidirectional", "P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "P1.08": "bidirectional", "P1.09": "bidirectional", "P0.11": "bidirectional", VDD: "power_in", "P0.12": "bidirectional", VDDH: "power_in", DCCH: "power_out", VBUS: "power_in", GND_33: "passive", "D-": "bidirectional", "D+": "bidirectional", "P0.14": "bidirectional", "P0.13": "bidirectional", "P0.16": "bidirectional", "P0.15": "bidirectional", "P0.18": "bidirectional", "P0.17": "bidirectional", "P0.19": "bidirectional", "P0.21": "bidirectional", "P0.20": "bidirectional", "P0.23": "bidirectional", "P0.22": "bidirectional", "P1.00": "bidirectional", "P0.24": "bidirectional", "P0.25": "bidirectional", "P1.02": "bidirectional", SWDIO: "bidirectional", "P0.09": "bidirectional", SWDCLK: "input", "P0.10": "bidirectional", GND_55: "passive", "P1.04": "bidirectional", "P1.06": "bidirectional", "P1.07": "bidirectional", "P1.05": "bidirectional", "P1.03": "bidirectional", "P1.01": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MDBT50Q_U512K extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "P0.25": "3",
  "NC_4": "4",
  "P0.23": "5",
  "P1.05": "6",
  "P1.03": "7",
  "P0.19_8": "8",
  "P0.03": "9",
  "P0.29": "10",
  "P0.02": "11",
  "P0.31": "12",
  "P0.28": "13",
  "P0.30": "14",
  "GND_15": "15",
  "P0.27": "16",
  "P0.00": "17",
  "P0.01": "18",
  "P0.26": "19",
  "P0.04": "20",
  "P0.05": "21",
  "P0.06": "22",
  "P0.07": "23",
  "P0.08": "24",
  "P1.08": "25",
  "P1.09": "26",
  "P0.11": "27",
  "VDD": "28",
  "P0.12": "29",
  "VDDH": "30",
  "NC_31": "31",
  "VBUS": "32",
  "GND_33": "33",
  "D-": "34",
  "D+": "35",
  "P0.14": "36",
  "P0.13": "37",
  "P0.16": "38",
  "P0.15": "39",
  "P0.18": "40",
  "P0.17": "41",
  "P0.19_42": "42",
  "P0.21": "43",
  "P0.20": "44",
  "NC_45": "45",
  "P0.22": "46",
  "P1.00": "47",
  "P0.24": "48",
  "NC_49": "49",
  "P1.02": "50",
  "SWDIO": "51",
  "P0.09": "52",
  "SWDCLK": "53",
  "P0.10": "54",
  "GND_55": "55",
  "P1.04": "56",
  "P1.06": "57",
  "P1.07": "58",
  "NC_59": "59",
  "NC_60": "60",
  "P1.01": "61",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "P0.25": "bidirectional", NC_4: "no_connect", "P0.23": "bidirectional", "P1.05": "bidirectional", "P1.03": "bidirectional", "P0.19_8": "bidirectional", "P0.03": "bidirectional", "P0.29": "bidirectional", "P0.02": "bidirectional", "P0.31": "bidirectional", "P0.28": "bidirectional", "P0.30": "bidirectional", GND_15: "passive", "P0.27": "bidirectional", "P0.00": "bidirectional", "P0.01": "bidirectional", "P0.26": "bidirectional", "P0.04": "bidirectional", "P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "P1.08": "bidirectional", "P1.09": "bidirectional", "P0.11": "bidirectional", VDD: "power_in", "P0.12": "bidirectional", VDDH: "power_in", NC_31: "no_connect", VBUS: "power_in", GND_33: "passive", "D-": "bidirectional", "D+": "bidirectional", "P0.14": "bidirectional", "P0.13": "bidirectional", "P0.16": "bidirectional", "P0.15": "bidirectional", "P0.18": "bidirectional", "P0.17": "bidirectional", "P0.19_42": "no_connect", "P0.21": "bidirectional", "P0.20": "bidirectional", NC_45: "no_connect", "P0.22": "bidirectional", "P1.00": "bidirectional", "P0.24": "bidirectional", NC_49: "no_connect", "P1.02": "bidirectional", SWDIO: "bidirectional", "P0.09": "bidirectional", SWDCLK: "input", "P0.10": "bidirectional", GND_55: "passive", "P1.04": "bidirectional", "P1.06": "bidirectional", "P1.07": "bidirectional", NC_59: "no_connect", NC_60: "no_connect", "P1.01": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "RF_Module:MDBT50Q-U512K";
  override referencePrefix = "U";
}

/**
 * NEMEUS Modem dual-mode LoRa/SIGFOX
 *
 * KiCad symbol: `RF_Module:MM002`. Reference prefix: `U`.
 * @see http://www.nemeus.fr/resources/uploads/2015/04/MM002-xx-EU_datasheet_v0.11.pdf
 * Keywords: IOT LoRa SIGFOX.
 */
export class MM002 extends Component.withPins({
  "GND_1": "1",
  "~{RST}": "2",
  "PB9-IO/I2C-SDA": "3",
  "PB8-IO/I2C-SCL": "4",
  "BOOT": "5",
  "PB7-IO/UART1-RX": "6",
  "PB6-IO/UART1-TX": "7",
  "PB4-IO/NJTRST": "8",
  "PB3-IO/JTDO": "9",
  "PA15-IO/JTDI": "10",
  "PA14-IO/JTCK/SWCLK": "11",
  "PA13-IO/JTMS/SWDAT": "12",
  "PA12-IO/UART1-RTS/USB-DP": "13",
  "PA11-IO/UART1-CTS/USB-DM": "14",
  "GND_15": "15",
  "GND_16": "16",
  "ANT": "17",
  "GND_18": "18",
  "PA7-IO/SPI-MOSI": "19",
  "PA5-IO/SPI-SCK": "20",
  "PA6-IO/SPI-MISO": "21",
  "PA4-IO/SPI-NSS": "22",
  "PA3-IO/ADC/UART2-RX": "23",
  "PA2-IO/ADC/UART2-TX": "24",
  "PA0-IO/ADC/UART2-CTS/WKUP": "25",
  "PA1-IO/ADC/UART2-RTS": "26",
  "VCC": "27",
  "GND_28": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "~{RST}": "input", "PB9-IO/I2C-SDA": "bidirectional", "PB8-IO/I2C-SCL": "bidirectional", BOOT: "input", "PB7-IO/UART1-RX": "bidirectional", "PB6-IO/UART1-TX": "bidirectional", "PB4-IO/NJTRST": "input", "PB3-IO/JTDO": "bidirectional", "PA15-IO/JTDI": "bidirectional", "PA14-IO/JTCK/SWCLK": "bidirectional", "PA13-IO/JTMS/SWDAT": "bidirectional", "PA12-IO/UART1-RTS/USB-DP": "bidirectional", "PA11-IO/UART1-CTS/USB-DM": "bidirectional", GND_15: "power_in", GND_16: "power_in", ANT: "bidirectional", GND_18: "power_in", "PA7-IO/SPI-MOSI": "bidirectional", "PA5-IO/SPI-SCK": "bidirectional", "PA6-IO/SPI-MISO": "bidirectional", "PA4-IO/SPI-NSS": "bidirectional", "PA3-IO/ADC/UART2-RX": "bidirectional", "PA2-IO/ADC/UART2-TX": "bidirectional", "PA0-IO/ADC/UART2-CTS/WKUP": "bidirectional", "PA1-IO/ADC/UART2-RTS": "bidirectional", VCC: "power_in", GND_28: "power_in", ...opts.pinTypes } });
  }
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
 */
export class Particle_P1 extends Component.withPins({
  "GND_1": "1",
  "VBAT_WL_2": "2",
  "VBAT_WL_3": "3",
  "GND_4": "4",
  "VDDIO_3V3_WL": "5",
  "GND_6": "6",
  "WL_REG_ON": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "NC_12": "12",
  "GND_13": "13",
  "NC_14": "14",
  "GND_15": "15",
  "WL_JTAG_TDI": "16",
  "WL_JTAG_TCK": "17",
  "WL_JTAG_~{TRST}": "18",
  "WL_JTAG_TMS": "19",
  "WL_JTAG_TDO": "20",
  "MICRO_SPI1_MISO/PA6": "21",
  "MICRO_SPI1_SCK/PA5": "22",
  "MICRO_SPI1_MOSI/PA7": "23",
  "MICRO_SPI1_SS/PA4": "24",
  "GND_25": "25",
  "VDD_3V3_26": "26",
  "VDD_3V3_27": "27",
  "GND_28": "28",
  "MICRO_UART2_RTS/PA1": "29",
  "MICRO_UART2_CTS/PA0": "30",
  "MICRO_UART2_RXD/PA3": "31",
  "MICRO_UART2_TXD/PA2": "32",
  "TESTMODE": "33",
  "MICRO_~{RST}": "34",
  "MICRO_I2C1_SCL/PB6": "35",
  "MICRO_I2C1_SDA/PB7": "36",
  "GND_37": "37",
  "VBAT_MICRO": "38",
  "GND_39": "39",
  "MICRO_GPIO_1/PB0": "40",
  "MICRO_GPIO_2/PB1": "41",
  "MICRO_GPIO_3/PC0": "42",
  "MICRO_GPIO_5/PC3": "43",
  "MICRO_GPIO_6/PC4": "44",
  "MICRO_GPIO_7/PB5": "45",
  "MICRO_GPIO_8/PC7": "46",
  "MICRO_GPIO_9/PC13": "47",
  "MICRO_GPIO_12/PC1": "48",
  "MICRO_GPIO_13/PC2": "49",
  "MICRO_GPIO_14/PC5": "50",
  "MICRO_JTAG_~{TRST}/PB4": "51",
  "MICRO_JTAG_TDO/PB3": "52",
  "MICRO_JTAG_TDI/PA15": "53",
  "MICRO_JTAG_TMS/PA13": "54",
  "MICRO_JTAG_TCK/PA14": "55",
  "BTCX_STATUS": "56",
  "BTCX_RF_ACTIVE": "57",
  "BTCX_TXCONF": "58",
  "GND_59": "59",
  "WL_SLEEP_CLK": "60",
  "MICRO_UART1_RTS/PA12": "61",
  "MICRO_UART1_CTS/PA11": "62",
  "MICRO_UART1_RXD/PA10": "63",
  "MICRO_UART1_TXD/PA9": "64",
  "GND_65": "65",
  "GND_66": "66",
  "GND_67": "67",
  "GND_68": "68",
  "GND_69": "69",
  "GND_70": "70",
  "GND_71": "71",
  "GND_72": "72",
  "GND_73": "73",
  "PAD1": "74",
  "PAD2": "75",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VBAT_WL_2: "power_in", VBAT_WL_3: "power_in", GND_4: "power_in", VDDIO_3V3_WL: "power_in", GND_6: "power_in", WL_REG_ON: "power_in", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", NC_11: "no_connect", NC_12: "no_connect", GND_13: "power_in", NC_14: "no_connect", GND_15: "power_in", WL_JTAG_TDI: "input", WL_JTAG_TCK: "input", "WL_JTAG_~{TRST}": "input", WL_JTAG_TMS: "input", WL_JTAG_TDO: "input", "MICRO_SPI1_MISO/PA6": "bidirectional", "MICRO_SPI1_SCK/PA5": "bidirectional", "MICRO_SPI1_MOSI/PA7": "bidirectional", "MICRO_SPI1_SS/PA4": "bidirectional", GND_25: "power_in", VDD_3V3_26: "power_in", VDD_3V3_27: "power_in", GND_28: "power_in", "MICRO_UART2_RTS/PA1": "bidirectional", "MICRO_UART2_CTS/PA0": "bidirectional", "MICRO_UART2_RXD/PA3": "bidirectional", "MICRO_UART2_TXD/PA2": "bidirectional", TESTMODE: "bidirectional", "MICRO_~{RST}": "input", "MICRO_I2C1_SCL/PB6": "bidirectional", "MICRO_I2C1_SDA/PB7": "bidirectional", GND_37: "power_in", VBAT_MICRO: "power_in", GND_39: "power_in", "MICRO_GPIO_1/PB0": "bidirectional", "MICRO_GPIO_2/PB1": "bidirectional", "MICRO_GPIO_3/PC0": "bidirectional", "MICRO_GPIO_5/PC3": "bidirectional", "MICRO_GPIO_6/PC4": "bidirectional", "MICRO_GPIO_7/PB5": "bidirectional", "MICRO_GPIO_8/PC7": "bidirectional", "MICRO_GPIO_9/PC13": "bidirectional", "MICRO_GPIO_12/PC1": "bidirectional", "MICRO_GPIO_13/PC2": "bidirectional", "MICRO_GPIO_14/PC5": "bidirectional", "MICRO_JTAG_~{TRST}/PB4": "bidirectional", "MICRO_JTAG_TDO/PB3": "bidirectional", "MICRO_JTAG_TDI/PA15": "bidirectional", "MICRO_JTAG_TMS/PA13": "bidirectional", "MICRO_JTAG_TCK/PA14": "bidirectional", BTCX_STATUS: "input", BTCX_RF_ACTIVE: "input", BTCX_TXCONF: "output", GND_59: "power_in", WL_SLEEP_CLK: "input", "MICRO_UART1_RTS/PA12": "bidirectional", "MICRO_UART1_CTS/PA11": "bidirectional", "MICRO_UART1_RXD/PA10": "bidirectional", "MICRO_UART1_TXD/PA9": "bidirectional", GND_65: "power_in", GND_66: "power_in", GND_67: "power_in", GND_68: "power_in", GND_69: "power_in", GND_70: "power_in", GND_71: "power_in", GND_72: "power_in", GND_73: "power_in", PAD1: "no_connect", PAD2: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class RAK3172_xx_8_SM_xI extends Component.withPins({
  "UART2_RX/PA3": "1",
  "UART2_TX/PA2": "2",
  "PA1": "6",
  "PA8": "19",
  "PA9": "20",
  "BOOT0": "21",
  "PB12": "27",
  "PA0": "29",
  "PB5": "30",
  "PA15/PIN_A4": "3",
  "PB6/UART1_TX": "4",
  "PB7/UART1_RX": "5",
  "PA13/SWDIO": "7",
  "PA14/SWCLK": "8",
  "PA12/SCL": "9",
  "PA11/SDA": "10",
  "GND_11": "11",
  "RF": "12",
  "PA7/SPI1_MOSI": "13",
  "PA6/SPI1_MISO": "14",
  "PA5/SPI1_CLK": "15",
  "PA4/~{SPI1_SS}": "16",
  "GND_17": "17",
  "GND_18": "18",
  "~{RST}": "22",
  "GND_23": "23",
  "VDD": "24",
  "PA10/PIN_A3": "25",
  "PB2/PIN_A2": "26",
  "GND_28": "28",
  "PB4/PIN_A1": "31",
  "PB3/PIN_A0": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "UART2_RX/PA3": "bidirectional", "UART2_TX/PA2": "bidirectional", PA1: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", BOOT0: "input", PB12: "bidirectional", PA0: "bidirectional", PB5: "bidirectional", "PA15/PIN_A4": "bidirectional", "PB6/UART1_TX": "bidirectional", "PB7/UART1_RX": "bidirectional", "PA13/SWDIO": "bidirectional", "PA14/SWCLK": "bidirectional", "PA12/SCL": "bidirectional", "PA11/SDA": "bidirectional", GND_11: "power_in", RF: "passive", "PA7/SPI1_MOSI": "bidirectional", "PA6/SPI1_MISO": "bidirectional", "PA5/SPI1_CLK": "bidirectional", "PA4/~{SPI1_SS}": "bidirectional", GND_17: "passive", GND_18: "passive", "~{RST}": "passive", GND_23: "passive", VDD: "power_in", "PA10/PIN_A3": "bidirectional", "PB2/PIN_A2": "bidirectional", GND_28: "passive", "PB4/PIN_A1": "bidirectional", "PB3/PIN_A0": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RAK3172_xx_43_SM_xI extends Component.withPins({
  "UART2_RX/PA3": "1",
  "UART2_TX/PA2": "2",
  "PA1": "6",
  "PA8": "19",
  "PA9": "20",
  "BOOT0": "21",
  "PB12": "27",
  "PA0": "29",
  "PB5": "30",
  "PA15/PIN_A4": "3",
  "PB6/UART1_TX": "4",
  "PB7/UART1_RX": "5",
  "PA13/SWDIO": "7",
  "PA14/SWCLK": "8",
  "PA12/SCL": "9",
  "PA11/SDA": "10",
  "GND_11": "11",
  "RF": "12",
  "PA7/SPI1_MOSI": "13",
  "PA6/SPI1_MISO": "14",
  "PA5/SPI1_CLK": "15",
  "PA4/~{SPI1_SS}": "16",
  "GND_17": "17",
  "GND_18": "18",
  "~{RST}": "22",
  "GND_23": "23",
  "VDD": "24",
  "PA10/PIN_A3": "25",
  "PB2/PIN_A2": "26",
  "GND_28": "28",
  "PB4/PIN_A1": "31",
  "PB3/PIN_A0": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "UART2_RX/PA3": "bidirectional", "UART2_TX/PA2": "bidirectional", PA1: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", BOOT0: "input", PB12: "bidirectional", PA0: "bidirectional", PB5: "bidirectional", "PA15/PIN_A4": "bidirectional", "PB6/UART1_TX": "bidirectional", "PB7/UART1_RX": "bidirectional", "PA13/SWDIO": "bidirectional", "PA14/SWCLK": "bidirectional", "PA12/SCL": "bidirectional", "PA11/SDA": "bidirectional", GND_11: "power_in", RF: "passive", "PA7/SPI1_MOSI": "bidirectional", "PA6/SPI1_MISO": "bidirectional", "PA5/SPI1_CLK": "bidirectional", "PA4/~{SPI1_SS}": "bidirectional", GND_17: "passive", GND_18: "passive", "~{RST}": "passive", GND_23: "passive", VDD: "power_in", "PA10/PIN_A3": "bidirectional", "PB2/PIN_A2": "bidirectional", GND_28: "passive", "PB4/PIN_A1": "bidirectional", "PB3/PIN_A0": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RAK3172_xx_47_SM_xI extends Component.withPins({
  "UART2_RX/PA3": "1",
  "UART2_TX/PA2": "2",
  "PA1": "6",
  "PA8": "19",
  "PA9": "20",
  "BOOT0": "21",
  "PB12": "27",
  "PA0": "29",
  "PB5": "30",
  "PA15/PIN_A4": "3",
  "PB6/UART1_TX": "4",
  "PB7/UART1_RX": "5",
  "PA13/SWDIO": "7",
  "PA14/SWCLK": "8",
  "PA12/SCL": "9",
  "PA11/SDA": "10",
  "GND_11": "11",
  "RF": "12",
  "PA7/SPI1_MOSI": "13",
  "PA6/SPI1_MISO": "14",
  "PA5/SPI1_CLK": "15",
  "PA4/~{SPI1_SS}": "16",
  "GND_17": "17",
  "GND_18": "18",
  "~{RST}": "22",
  "GND_23": "23",
  "VDD": "24",
  "PA10/PIN_A3": "25",
  "PB2/PIN_A2": "26",
  "GND_28": "28",
  "PB4/PIN_A1": "31",
  "PB3/PIN_A0": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "UART2_RX/PA3": "bidirectional", "UART2_TX/PA2": "bidirectional", PA1: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", BOOT0: "input", PB12: "bidirectional", PA0: "bidirectional", PB5: "bidirectional", "PA15/PIN_A4": "bidirectional", "PB6/UART1_TX": "bidirectional", "PB7/UART1_RX": "bidirectional", "PA13/SWDIO": "bidirectional", "PA14/SWCLK": "bidirectional", "PA12/SCL": "bidirectional", "PA11/SDA": "bidirectional", GND_11: "power_in", RF: "passive", "PA7/SPI1_MOSI": "bidirectional", "PA6/SPI1_MISO": "bidirectional", "PA5/SPI1_CLK": "bidirectional", "PA4/~{SPI1_SS}": "bidirectional", GND_17: "passive", GND_18: "passive", "~{RST}": "passive", GND_23: "passive", VDD: "power_in", "PA10/PIN_A3": "bidirectional", "PB2/PIN_A2": "bidirectional", GND_28: "passive", "PB4/PIN_A1": "bidirectional", "PB3/PIN_A0": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RAK3172_xx_9_SM_xI extends Component.withPins({
  "UART2_RX/PA3": "1",
  "UART2_TX/PA2": "2",
  "PA1": "6",
  "PA8": "19",
  "PA9": "20",
  "BOOT0": "21",
  "PB12": "27",
  "PA0": "29",
  "PB5": "30",
  "PA15/PIN_A4": "3",
  "PB6/UART1_TX": "4",
  "PB7/UART1_RX": "5",
  "PA13/SWDIO": "7",
  "PA14/SWCLK": "8",
  "PA12/SCL": "9",
  "PA11/SDA": "10",
  "GND_11": "11",
  "RF": "12",
  "PA7/SPI1_MOSI": "13",
  "PA6/SPI1_MISO": "14",
  "PA5/SPI1_CLK": "15",
  "PA4/~{SPI1_SS}": "16",
  "GND_17": "17",
  "GND_18": "18",
  "~{RST}": "22",
  "GND_23": "23",
  "VDD": "24",
  "PA10/PIN_A3": "25",
  "PB2/PIN_A2": "26",
  "GND_28": "28",
  "PB4/PIN_A1": "31",
  "PB3/PIN_A0": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "UART2_RX/PA3": "bidirectional", "UART2_TX/PA2": "bidirectional", PA1: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", BOOT0: "input", PB12: "bidirectional", PA0: "bidirectional", PB5: "bidirectional", "PA15/PIN_A4": "bidirectional", "PB6/UART1_TX": "bidirectional", "PB7/UART1_RX": "bidirectional", "PA13/SWDIO": "bidirectional", "PA14/SWCLK": "bidirectional", "PA12/SCL": "bidirectional", "PA11/SDA": "bidirectional", GND_11: "power_in", RF: "passive", "PA7/SPI1_MOSI": "bidirectional", "PA6/SPI1_MISO": "bidirectional", "PA5/SPI1_CLK": "bidirectional", "PA4/~{SPI1_SS}": "bidirectional", GND_17: "passive", GND_18: "passive", "~{RST}": "passive", GND_23: "passive", VDD: "power_in", "PA10/PIN_A3": "bidirectional", "PB2/PIN_A2": "bidirectional", GND_28: "passive", "PB4/PIN_A1": "bidirectional", "PB3/PIN_A0": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RAK4200 extends Component.withPins({
  "PA3/UART2_RX": "1",
  "PA2/UART2_TX": "2",
  "PA1/UART2_DE": "3",
  "PA9/UART1_TX": "4",
  "PA10/UART1_RX": "5",
  "PA12/UART1_DE": "6",
  "PA13/SWDIO": "7",
  "PA14/SWCLK": "8",
  "I2C_SCL/PB6": "9",
  "I2C_SDA/PB7": "10",
  "GND_11": "11",
  "RF": "12",
  "GND_13": "13",
  "GND_14": "14",
  "PA5/SPI_CLK": "15",
  "PA6/SPI_MISO": "16",
  "PA7/SPI_MOSI": "17",
  "~{MCU_NRESET}": "18",
  "GND_19": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PA3/UART2_RX": "bidirectional", "PA2/UART2_TX": "bidirectional", "PA1/UART2_DE": "bidirectional", "PA9/UART1_TX": "bidirectional", "PA10/UART1_RX": "bidirectional", "PA12/UART1_DE": "bidirectional", "PA13/SWDIO": "bidirectional", "PA14/SWCLK": "bidirectional", "I2C_SCL/PB6": "bidirectional", "I2C_SDA/PB7": "bidirectional", GND_11: "power_in", RF: "passive", GND_13: "passive", GND_14: "passive", "PA5/SPI_CLK": "bidirectional", "PA6/SPI_MISO": "bidirectional", "PA7/SPI_MOSI": "bidirectional", "~{MCU_NRESET}": "bidirectional", GND_19: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class RAK811_HF_EU868 extends Component.withPins({
  "GND_1": "1",
  "PB12": "2",
  "PB14": "3",
  "PB15": "4",
  "PA8": "5",
  "PA9/USART1_TX": "6",
  "PA10/USART1_RX": "7",
  "PA12": "8",
  "PB4": "9",
  "PA13": "10",
  "VCC": "11",
  "GND_12": "12",
  "PA14": "13",
  "PA15": "14",
  "PB3": "15",
  "PB5": "16",
  "BOOT0": "17",
  "PB8": "18",
  "PB9": "19",
  "PA2": "20",
  "GND_21": "21",
  "PA1": "22",
  "PA0": "23",
  "~{RST}": "24",
  "PB10": "25",
  "PB11": "26",
  "PB2": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "RF_OUT": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", PB12: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/USART1_TX": "bidirectional", "PA10/USART1_RX": "bidirectional", PA12: "bidirectional", PB4: "bidirectional", PA13: "bidirectional", VCC: "power_in", GND_12: "passive", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PA2: "bidirectional", GND_21: "passive", PA1: "bidirectional", PA0: "bidirectional", "~{RST}": "input", PB10: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", RF_OUT: "passive", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class RAK811_HF_AS923 extends Component.withPins({
  "GND_1": "1",
  "PB12": "2",
  "PB14": "3",
  "PB15": "4",
  "PA8": "5",
  "PA9/USART1_TX": "6",
  "PA10/USART1_RX": "7",
  "PA12": "8",
  "PB4": "9",
  "PA13": "10",
  "VCC": "11",
  "GND_12": "12",
  "PA14": "13",
  "PA15": "14",
  "PB3": "15",
  "PB5": "16",
  "BOOT0": "17",
  "PB8": "18",
  "PB9": "19",
  "PA2": "20",
  "GND_21": "21",
  "PA1": "22",
  "PA0": "23",
  "~{RST}": "24",
  "PB10": "25",
  "PB11": "26",
  "PB2": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "RF_OUT": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", PB12: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/USART1_TX": "bidirectional", "PA10/USART1_RX": "bidirectional", PA12: "bidirectional", PB4: "bidirectional", PA13: "bidirectional", VCC: "power_in", GND_12: "passive", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PA2: "bidirectional", GND_21: "passive", PA1: "bidirectional", PA0: "bidirectional", "~{RST}": "input", PB10: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", RF_OUT: "passive", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class RAK811_HF_AU915 extends Component.withPins({
  "GND_1": "1",
  "PB12": "2",
  "PB14": "3",
  "PB15": "4",
  "PA8": "5",
  "PA9/USART1_TX": "6",
  "PA10/USART1_RX": "7",
  "PA12": "8",
  "PB4": "9",
  "PA13": "10",
  "VCC": "11",
  "GND_12": "12",
  "PA14": "13",
  "PA15": "14",
  "PB3": "15",
  "PB5": "16",
  "BOOT0": "17",
  "PB8": "18",
  "PB9": "19",
  "PA2": "20",
  "GND_21": "21",
  "PA1": "22",
  "PA0": "23",
  "~{RST}": "24",
  "PB10": "25",
  "PB11": "26",
  "PB2": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "RF_OUT": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", PB12: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/USART1_TX": "bidirectional", "PA10/USART1_RX": "bidirectional", PA12: "bidirectional", PB4: "bidirectional", PA13: "bidirectional", VCC: "power_in", GND_12: "passive", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PA2: "bidirectional", GND_21: "passive", PA1: "bidirectional", PA0: "bidirectional", "~{RST}": "input", PB10: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", RF_OUT: "passive", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class RAK811_HF_IN865 extends Component.withPins({
  "GND_1": "1",
  "PB12": "2",
  "PB14": "3",
  "PB15": "4",
  "PA8": "5",
  "PA9/USART1_TX": "6",
  "PA10/USART1_RX": "7",
  "PA12": "8",
  "PB4": "9",
  "PA13": "10",
  "VCC": "11",
  "GND_12": "12",
  "PA14": "13",
  "PA15": "14",
  "PB3": "15",
  "PB5": "16",
  "BOOT0": "17",
  "PB8": "18",
  "PB9": "19",
  "PA2": "20",
  "GND_21": "21",
  "PA1": "22",
  "PA0": "23",
  "~{RST}": "24",
  "PB10": "25",
  "PB11": "26",
  "PB2": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "RF_OUT": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", PB12: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/USART1_TX": "bidirectional", "PA10/USART1_RX": "bidirectional", PA12: "bidirectional", PB4: "bidirectional", PA13: "bidirectional", VCC: "power_in", GND_12: "passive", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PA2: "bidirectional", GND_21: "passive", PA1: "bidirectional", PA0: "bidirectional", "~{RST}": "input", PB10: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", RF_OUT: "passive", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class RAK811_HF_KR920 extends Component.withPins({
  "GND_1": "1",
  "PB12": "2",
  "PB14": "3",
  "PB15": "4",
  "PA8": "5",
  "PA9/USART1_TX": "6",
  "PA10/USART1_RX": "7",
  "PA12": "8",
  "PB4": "9",
  "PA13": "10",
  "VCC": "11",
  "GND_12": "12",
  "PA14": "13",
  "PA15": "14",
  "PB3": "15",
  "PB5": "16",
  "BOOT0": "17",
  "PB8": "18",
  "PB9": "19",
  "PA2": "20",
  "GND_21": "21",
  "PA1": "22",
  "PA0": "23",
  "~{RST}": "24",
  "PB10": "25",
  "PB11": "26",
  "PB2": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "RF_OUT": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", PB12: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/USART1_TX": "bidirectional", "PA10/USART1_RX": "bidirectional", PA12: "bidirectional", PB4: "bidirectional", PA13: "bidirectional", VCC: "power_in", GND_12: "passive", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PA2: "bidirectional", GND_21: "passive", PA1: "bidirectional", PA0: "bidirectional", "~{RST}": "input", PB10: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", RF_OUT: "passive", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class RAK811_HF_US915 extends Component.withPins({
  "GND_1": "1",
  "PB12": "2",
  "PB14": "3",
  "PB15": "4",
  "PA8": "5",
  "PA9/USART1_TX": "6",
  "PA10/USART1_RX": "7",
  "PA12": "8",
  "PB4": "9",
  "PA13": "10",
  "VCC": "11",
  "GND_12": "12",
  "PA14": "13",
  "PA15": "14",
  "PB3": "15",
  "PB5": "16",
  "BOOT0": "17",
  "PB8": "18",
  "PB9": "19",
  "PA2": "20",
  "GND_21": "21",
  "PA1": "22",
  "PA0": "23",
  "~{RST}": "24",
  "PB10": "25",
  "PB11": "26",
  "PB2": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "RF_OUT": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", PB12: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/USART1_TX": "bidirectional", "PA10/USART1_RX": "bidirectional", PA12: "bidirectional", PB4: "bidirectional", PA13: "bidirectional", VCC: "power_in", GND_12: "passive", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PA2: "bidirectional", GND_21: "passive", PA1: "bidirectional", PA0: "bidirectional", "~{RST}": "input", PB10: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", RF_OUT: "passive", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class RAK811_LF_EU433 extends Component.withPins({
  "GND_1": "1",
  "PB12": "2",
  "PB14": "3",
  "PB15": "4",
  "PB13": "5",
  "PA9/USART1_TX": "6",
  "PA10/USART1_RX": "7",
  "PA12": "8",
  "PA11": "9",
  "PA13": "10",
  "VCC": "11",
  "GND_12": "12",
  "PA14": "13",
  "PA15": "14",
  "PA3": "15",
  "PB5": "16",
  "BOOT0": "17",
  "PB6": "18",
  "PB7": "19",
  "PA2": "20",
  "GND_21": "21",
  "PA1": "22",
  "PA0": "23",
  "~{RST}": "24",
  "PB10": "25",
  "PB11": "26",
  "PB2": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "RF_OUT": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", PB12: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PB13: "bidirectional", "PA9/USART1_TX": "bidirectional", "PA10/USART1_RX": "bidirectional", PA12: "bidirectional", PA11: "bidirectional", PA13: "bidirectional", VCC: "power_in", GND_12: "passive", PA14: "bidirectional", PA15: "bidirectional", PA3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB6: "bidirectional", PB7: "bidirectional", PA2: "bidirectional", GND_21: "passive", PA1: "bidirectional", PA0: "bidirectional", "~{RST}": "input", PB10: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", RF_OUT: "passive", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class RAK811_LF_CN470 extends Component.withPins({
  "GND_1": "1",
  "PB12": "2",
  "PB14": "3",
  "PB15": "4",
  "PB13": "5",
  "PA9/USART1_TX": "6",
  "PA10/USART1_RX": "7",
  "PA12": "8",
  "PA11": "9",
  "PA13": "10",
  "VCC": "11",
  "GND_12": "12",
  "PA14": "13",
  "PA15": "14",
  "PA3": "15",
  "PB5": "16",
  "BOOT0": "17",
  "PB6": "18",
  "PB7": "19",
  "PA2": "20",
  "GND_21": "21",
  "PA1": "22",
  "PA0": "23",
  "~{RST}": "24",
  "PB10": "25",
  "PB11": "26",
  "PB2": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "RF_OUT": "33",
  "GND_34": "34",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", PB12: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PB13: "bidirectional", "PA9/USART1_TX": "bidirectional", "PA10/USART1_RX": "bidirectional", PA12: "bidirectional", PA11: "bidirectional", PA13: "bidirectional", VCC: "power_in", GND_12: "passive", PA14: "bidirectional", PA15: "bidirectional", PA3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB6: "bidirectional", PB7: "bidirectional", PA2: "bidirectional", GND_21: "passive", PA1: "bidirectional", PA0: "bidirectional", "~{RST}": "input", PB10: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", RF_OUT: "passive", GND_34: "passive", ...opts.pinTypes } });
  }
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
 */
export class RFM95W_868S2 extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RFM69HCW extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RFM69HW extends Component.withPins({
  "RESET": "1",
  "DIO0": "2",
  "DIO1": "3",
  "DIO2": "4",
  "DIO3": "5",
  "DIO4": "6",
  "DIO5": "7",
  "3.3V": "8",
  "GND_9": "9",
  "ANA": "10",
  "GND_11": "11",
  "SCK": "12",
  "MISO": "13",
  "MOSI": "14",
  "NSS": "15",
  "NC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RESET: "input", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", "3.3V": "power_in", GND_9: "power_in", ANA: "output", GND_11: "passive", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class RFM69W extends Component.withPins({
  "RESET": "1",
  "DIO0": "2",
  "DIO1": "3",
  "DIO2": "4",
  "DIO3": "5",
  "DIO4": "6",
  "DIO5": "7",
  "3.3V": "8",
  "GND_9": "9",
  "ANA": "10",
  "GND_11": "11",
  "SCK": "12",
  "MISO": "13",
  "MOSI": "14",
  "NSS": "15",
  "NC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RESET: "input", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", "3.3V": "power_in", GND_9: "power_in", ANA: "output", GND_11: "passive", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class RFM95W_915S2 extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RFM96W_315S2 extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RFM96W_433S2 extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RFM97W_868S2 extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RFM97W_915S2 extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RFM98W_315S2 extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class RFM98W_433S2 extends Component.withPins({
  "GND_1": "1",
  "MISO": "2",
  "MOSI": "3",
  "SCK": "4",
  "NSS": "5",
  "RESET": "6",
  "DIO5": "7",
  "GND_8": "8",
  "ANT": "9",
  "GND_10": "10",
  "DIO3": "11",
  "DIO4": "12",
  "3.3V": "13",
  "DIO0": "14",
  "DIO1": "15",
  "DIO2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", MISO: "output", MOSI: "input", SCK: "input", NSS: "input", RESET: "bidirectional", DIO5: "bidirectional", GND_8: "power_in", ANT: "bidirectional", GND_10: "power_in", DIO3: "bidirectional", DIO4: "bidirectional", "3.3V": "power_in", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class STM32WB5MMG extends Component.withPins({
  "PA2": "1",
  "PA1": "2",
  "PA0": "3",
  "VREF": "4",
  "VSS_5": "5",
  "VDDA": "6",
  "PC3": "7",
  "PC2": "8",
  "PC1": "9",
  "NRST": "10",
  "PB9": "11",
  "PC0": "12",
  "PH3-BOOT0": "13",
  "PB8": "14",
  "VBAT": "15",
  "VSSSMPS": "16",
  "VDDSMPS": "17",
  "PB7": "18",
  "PB5": "19",
  "PB4": "20",
  "PB3": "21",
  "PC10": "22",
  "PC11": "23",
  "PC12": "24",
  "PA13": "25",
  "PA14": "26",
  "PA15": "27",
  "PA10": "28",
  "PA12": "29",
  "PA11": "30",
  "VSS_31": "31",
  "VDDUSB": "32",
  "PD0": "33",
  "PD1": "34",
  "PB13": "35",
  "PC6": "36",
  "PB14": "37",
  "PB15": "38",
  "PB6": "39",
  "PC13": "40",
  "PB12": "41",
  "PE4": "42",
  "PB1": "43",
  "PB0": "44",
  "PC5": "45",
  "PB11": "46",
  "PB10": "47",
  "PB2": "48",
  "PC4": "49",
  "PA8": "50",
  "PA9": "51",
  "PA7": "52",
  "PA6": "53",
  "PA5": "54",
  "PA4": "55",
  "PA3": "56",
  "VSS_57": "57",
  "ANT_IN": "58",
  "RF_OUT": "59",
  "VSS_60": "60",
  "PH0": "61",
  "PH1": "62",
  "PD14": "63",
  "PE1": "64",
  "PD13": "65",
  "PD12": "66",
  "PD7": "67",
  "PD2": "68",
  "PC9": "69",
  "PD3": "70",
  "PC7": "71",
  "PE3": "72",
  "PD4": "73",
  "PD9": "74",
  "PD8": "75",
  "PD15": "76",
  "PD10": "77",
  "PE2": "78",
  "PE0": "79",
  "PD5": "80",
  "PD6": "81",
  "PD11": "82",
  "PC8": "83",
  "VSS_84": "84",
  "ANT_NC": "85",
  "VSS_86": "86",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VREF: "input", VSS_5: "power_in", VDDA: "power_in", PC3: "bidirectional", PC2: "bidirectional", PC1: "bidirectional", NRST: "input", PB9: "bidirectional", PC0: "bidirectional", "PH3-BOOT0": "bidirectional", PB8: "bidirectional", VBAT: "power_in", VSSSMPS: "power_in", VDDSMPS: "power_in", PB7: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA10: "bidirectional", PA12: "bidirectional", PA11: "bidirectional", VSS_31: "passive", VDDUSB: "power_in", PD0: "bidirectional", PD1: "bidirectional", PB13: "bidirectional", PC6: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PB6: "bidirectional", PC13: "bidirectional", PB12: "bidirectional", PE4: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB10: "bidirectional", PB2: "bidirectional", PC4: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", VSS_57: "passive", ANT_IN: "passive", RF_OUT: "passive", VSS_60: "passive", PH0: "bidirectional", PH1: "bidirectional", PD14: "bidirectional", PE1: "bidirectional", PD13: "bidirectional", PD12: "bidirectional", PD7: "bidirectional", PD2: "bidirectional", PC9: "bidirectional", PD3: "bidirectional", PC7: "bidirectional", PE3: "bidirectional", PD4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PD15: "bidirectional", PD10: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD11: "bidirectional", PC8: "bidirectional", VSS_84: "passive", ANT_NC: "no_connect", VSS_86: "passive", ...opts.pinTypes } });
  }
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
 */
export class TD1205 extends Component.withPins({
  "BAT-": "1",
  "BAT+": "2",
  "VDD": "3",
  "GND": "4",
  "~{RST}": "5",
  "UART-TX": "6",
  "UART-RX": "7",
  "DB2-SWDIO": "8",
  "DB3-SWCLK": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "BAT-": "power_in", "BAT+": "power_in", VDD: "power_in", GND: "power_in", "~{RST}": "input", "UART-TX": "bidirectional", "UART-RX": "bidirectional", "DB2-SWDIO": "bidirectional", "DB3-SWCLK": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TD1208 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "Reserved": "3",
  "USR4": "4",
  "DB3-SWCLK": "5",
  "DB2-SWDIO": "6",
  "SDA": "7",
  "SCL": "8",
  "VDD": "9",
  "USR2": "10",
  "GND_11": "11",
  "GND_12": "12",
  "USR3": "13",
  "~{RST}": "14",
  "DAC0": "15",
  "USR0": "16",
  "USR1": "17",
  "UART-TX": "18",
  "UART-RX": "19",
  "ADC0": "20",
  "TIM2": "21",
  "GND_22": "22",
  "RF_GND_23": "23",
  "RF": "24",
  "RF_GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", Reserved: "unspecified", USR4: "bidirectional", "DB3-SWCLK": "bidirectional", "DB2-SWDIO": "bidirectional", SDA: "bidirectional", SCL: "bidirectional", VDD: "power_in", USR2: "bidirectional", GND_11: "power_in", GND_12: "power_in", USR3: "bidirectional", "~{RST}": "input", DAC0: "bidirectional", USR0: "bidirectional", USR1: "bidirectional", "UART-TX": "bidirectional", "UART-RX": "bidirectional", ADC0: "bidirectional", TIM2: "bidirectional", GND_22: "power_in", RF_GND_23: "power_in", RF: "bidirectional", RF_GND_25: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TR_52DAT extends Component.withPins({
  "RA0/AN0/C12IN0": "C1",
  "RC2/VOUT": "C2",
  "VIN": "C3",
  "GND": "C4",
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  "RC3/SCK/SCL": "C6",
  "RC4/SDI/SDA": "C7",
  "RC5/RC7/RX/SDO": "C8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA0/AN0/C12IN0": "bidirectional", "RC2/VOUT": "bidirectional", VIN: "power_in", GND: "power_in", "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/RC7/RX/SDO": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TR_72DA extends Component.withPins({
  "RA0/AN0/C12IN0": "C1",
  "RC2/VOUT": "C2",
  "VIN": "C3",
  "GND": "C4",
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  "RC3/SCK/SCL": "C6",
  "RC4/SDI/SDA": "C7",
  "RC5/RC7/RX/SDO": "C8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA0/AN0/C12IN0": "bidirectional", "RC2/VOUT": "bidirectional", VIN: "power_in", GND: "power_in", "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/RC7/RX/SDO": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TR_72DAT extends Component.withPins({
  "RA0/AN0/C12IN0": "C1",
  "RC2/VOUT": "C2",
  "VIN": "C3",
  "GND": "C4",
  "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "C5",
  "RC3/SCK/SCL": "C6",
  "RC4/SDI/SDA": "C7",
  "RC5/RC7/RX/SDO": "C8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA0/AN0/C12IN0": "bidirectional", "RC2/VOUT": "bidirectional", VIN: "power_in", GND: "power_in", "RA5/RB4/RC6/AN4/AN11/TX/~{SS}/C2OUT/CCP3": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/RC7/RX/SDO": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class WEMOS_C3_mini extends Component.withPins({
  "EN": "1",
  "D3": "2",
  "D2": "3",
  "D1": "4",
  "D0": "5",
  "D4": "6",
  "D5": "7",
  "3V3": "8",
  "VBus": "9",
  "GND": "10",
  "D6": "11",
  "D7": "12",
  "D8": "13",
  "D10": "14",
  "RX": "15",
  "TX": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", D4: "bidirectional", D5: "bidirectional", "3V3": "power_out", VBus: "power_in", GND: "power_in", D6: "bidirectional", D7: "bidirectional", D8: "bidirectional", D10: "bidirectional", RX: "input", TX: "output", ...opts.pinTypes } });
  }
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
 */
export class WEMOS_D1_mini extends Component.withPins({
  "~{RST}": "1",
  "A0": "2",
  "D0": "3",
  "SCK/D5": "4",
  "MISO/D6": "5",
  "MOSI/D7": "6",
  "CS/D8": "7",
  "3V3": "8",
  "5V": "9",
  "GND": "10",
  "D4": "11",
  "D3": "12",
  "SDA/D2": "13",
  "SCL/D1": "14",
  "RX": "15",
  "TX": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", A0: "input", D0: "bidirectional", "SCK/D5": "bidirectional", "MISO/D6": "bidirectional", "MOSI/D7": "bidirectional", "CS/D8": "bidirectional", "3V3": "power_out", "5V": "power_in", GND: "power_in", D4: "bidirectional", D3: "bidirectional", "SDA/D2": "bidirectional", "SCL/D1": "bidirectional", RX: "input", TX: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Module:WEMOS_D1_mini";
  override referencePrefix = "U";
}

/**
 * IMST Long Range Radio Module
 *
 * KiCad symbol: `RF_Module:iM880A`. Reference prefix: `U`.
 * @see http://www.wireless-solutions.de/images/stories/downloads/Radio%20Modules/iM880A/General_Information/iM880A_Datasheet_V1_1.pdf
 * Keywords: IOT LoRa.
 */
export class iM880A extends Component.withPins({
  "GND_1": "1",
  "P1-IO/JTCK/SWCLK": "2",
  "P2-IO/JTMS/SWDIO": "3",
  "P3-IO/JTDO": "4",
  "P4-IO/JTDI": "5",
  "GND_6": "6",
  "~{RST}": "7",
  "P5-IO/UART-CTS": "8",
  "P6-IO/UART-RTS": "9",
  "NC_10": "10",
  "GND_11": "11",
  "P7-IO/SPI-MISO": "12",
  "P8-IO/SPI-MOSI": "13",
  "P9-IO/SPI-CLK": "14",
  "P10-IO/SPI-NSS": "15",
  "GND_16": "16",
  "VDD": "17",
  "RxD-IO/UART-RX": "18",
  "TxD-IO/UART-TX": "19",
  "P11-IO": "20",
  "P12-IO/I2C-SCL": "21",
  "GND_22": "22",
  "P13-IO/I2C-SDA": "23",
  "P14-IO/ADC": "24",
  "P15-IO/WKUP": "25",
  "BOOT": "26",
  "GND_27": "27",
  "NC_28": "28",
  "P17-IO/ADC": "29",
  "GND_30": "30",
  "RF": "31",
  "GND_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "P1-IO/JTCK/SWCLK": "bidirectional", "P2-IO/JTMS/SWDIO": "bidirectional", "P3-IO/JTDO": "bidirectional", "P4-IO/JTDI": "bidirectional", GND_6: "power_in", "~{RST}": "input", "P5-IO/UART-CTS": "bidirectional", "P6-IO/UART-RTS": "bidirectional", NC_10: "no_connect", GND_11: "power_in", "P7-IO/SPI-MISO": "bidirectional", "P8-IO/SPI-MOSI": "bidirectional", "P9-IO/SPI-CLK": "bidirectional", "P10-IO/SPI-NSS": "bidirectional", GND_16: "power_in", VDD: "power_in", "RxD-IO/UART-RX": "bidirectional", "TxD-IO/UART-TX": "bidirectional", "P11-IO": "bidirectional", "P12-IO/I2C-SCL": "bidirectional", GND_22: "power_in", "P13-IO/I2C-SDA": "bidirectional", "P14-IO/ADC": "bidirectional", "P15-IO/WKUP": "bidirectional", BOOT: "input", GND_27: "power_in", NC_28: "no_connect", "P17-IO/ADC": "bidirectional", GND_30: "power_in", RF: "bidirectional", GND_32: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Module:iM880A";
  override referencePrefix = "U";
}

/**
 * IMST Long Range Radio Module - LoRa Alliance Certified
 *
 * KiCad symbol: `RF_Module:iM880B`. Reference prefix: `U`.
 * @see http://www.wireless-solutions.de/images/stories/downloads/Radio%20Modules/iM880B/General_Information/iM880B_Datasheet_V1_0.pdf
 * Keywords: IOT LoRa.
 */
export class iM880B extends Component.withPins({
  "GND_1": "1",
  "P1-IO/JTCK/SWCLK": "2",
  "P2-IO/JTMS/SWDIO": "3",
  "P3-IO/JTDO": "4",
  "P4-IO/JTDI": "5",
  "GND_6": "6",
  "~{RST}": "7",
  "P5-IO/UART-CTS": "8",
  "P6-IO/UART-RTS": "9",
  "NC_10": "10",
  "GND_11": "11",
  "P7-IO/SPI-MISO": "12",
  "P8-IO/SPI-MOSI": "13",
  "P9-IO/SPI-CLK": "14",
  "P10-IO/SPI-NSS": "15",
  "GND_16": "16",
  "VDD": "17",
  "RxD-IO/UART-RX": "18",
  "TxD-IO/UART-TX": "19",
  "P11-IO": "20",
  "P12-IO/I2C-SCL": "21",
  "GND_22": "22",
  "P13-IO/I2C-SDA": "23",
  "P14-IO/ADC": "24",
  "P15-IO/WKUP": "25",
  "BOOT": "26",
  "GND_27": "27",
  "NC_28": "28",
  "P17-IO/ADC": "29",
  "GND_30": "30",
  "RF": "31",
  "GND_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "P1-IO/JTCK/SWCLK": "bidirectional", "P2-IO/JTMS/SWDIO": "bidirectional", "P3-IO/JTDO": "bidirectional", "P4-IO/JTDI": "bidirectional", GND_6: "power_in", "~{RST}": "input", "P5-IO/UART-CTS": "bidirectional", "P6-IO/UART-RTS": "bidirectional", NC_10: "no_connect", GND_11: "power_in", "P7-IO/SPI-MISO": "bidirectional", "P8-IO/SPI-MOSI": "bidirectional", "P9-IO/SPI-CLK": "bidirectional", "P10-IO/SPI-NSS": "bidirectional", GND_16: "power_in", VDD: "power_in", "RxD-IO/UART-RX": "bidirectional", "TxD-IO/UART-TX": "bidirectional", "P11-IO": "bidirectional", "P12-IO/I2C-SCL": "bidirectional", GND_22: "power_in", "P13-IO/I2C-SDA": "bidirectional", "P14-IO/ADC": "bidirectional", "P15-IO/WKUP": "bidirectional", BOOT: "input", GND_27: "power_in", NC_28: "no_connect", "P17-IO/ADC": "bidirectional", GND_30: "power_in", RF: "bidirectional", GND_32: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Module:iM880B";
  override referencePrefix = "U";
}
