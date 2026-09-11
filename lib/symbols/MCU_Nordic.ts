// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Multiprotocol BLE/2.4GHz Cortex-M0+ SoC
 *
 * KiCad symbol: `MCU_Nordic:nRF51x22-QFxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*.
 * @see http://infocenter.nordicsemi.com/pdf/nRF51822_PS_v3.3.pdf
 * Keywords: MCU ARM BLE 2.4GHz.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.6x4.6mm.
 */
export class nRF51x22_QFxx extends Component.withPins({
  "VDD_1": "1",
  "DCC": "2",
  "P0.30": "3",
  "P0.0": "4",
  "P0.1": "5",
  "P0.2": "6",
  "P0.3": "7",
  "P0.4": "8",
  "P0.5": "9",
  "P0.6": "10",
  "P0.7": "11",
  "VDD_12": "12",
  "VSS_13": "13",
  "P0.8": "14",
  "P0.9": "15",
  "P0.10": "16",
  "P0.11": "17",
  "P0.12": "18",
  "P0.13": "19",
  "P0.14": "20",
  "P0.15": "21",
  "P0.16": "22",
  "SWDIO/~{RST}": "23",
  "SWDCLK": "24",
  "P0.17": "25",
  "P0.18": "26",
  "P0.19": "27",
  "P0.20": "28",
  "DEC2": "29",
  "VDD_PA": "30",
  "ANT1": "31",
  "ANT2": "32",
  "VSS_33": "33",
  "VSS_34": "34",
  "AVDD_35": "35",
  "AVDD_36": "36",
  "XC1": "37",
  "XC2": "38",
  "DEC1": "39",
  "P0.21": "40",
  "P0.22": "41",
  "P0.23": "42",
  "P0.24": "43",
  "P0.25": "44",
  "P0.26": "45",
  "P0.27": "46",
  "P0.28": "47",
  "P0.29": "48",
  "EP": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", DCC: "power_out", "P0.30": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", VDD_12: "passive", VSS_13: "power_in", "P0.8": "bidirectional", "P0.9": "bidirectional", "P0.10": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "SWDIO/~{RST}": "bidirectional", SWDCLK: "input", "P0.17": "bidirectional", "P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", DEC2: "passive", VDD_PA: "power_out", ANT1: "output", ANT2: "output", VSS_33: "passive", VSS_34: "passive", AVDD_35: "power_in", AVDD_36: "passive", XC1: "input", XC2: "input", DEC1: "passive", "P0.21": "bidirectional", "P0.22": "bidirectional", "P0.23": "bidirectional", "P0.24": "bidirectional", "P0.25": "bidirectional", "P0.26": "bidirectional", "P0.27": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF51x22-QFxx";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/2.4GHz Cortex-M4 SoC, QFN-32
 *
 * KiCad symbol: `MCU_Nordic:nRF52810-QCxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://infocenter.nordicsemi.com/pdf/nRF52810_PS_v1.1.pdf
 * Keywords: MCU ARM BLE 2.4GHz.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class nRF52810_QCxx extends Component.withPins({
  "DEC1": "1",
  "P0.00/XL1": "2",
  "P0.01/XL2": "3",
  "P0.04/AIN2": "4",
  "P0.05/AIN3": "5",
  "P0.06": "6",
  "P0.09": "7",
  "P0.10": "8",
  "VDD_9": "9",
  "P0.12": "10",
  "P0.14": "11",
  "P0.15": "12",
  "P0.16": "13",
  "P0.18": "14",
  "P0.20": "15",
  "P0.21/~{RESET}": "16",
  "SWDCLK": "17",
  "SWDIO": "18",
  "ANT": "19",
  "VSS_20": "20",
  "DEC2": "21",
  "DEC3": "22",
  "XC1": "23",
  "XC2": "24",
  "VDD_25": "25",
  "P0.25": "26",
  "P0.28/AIN4": "27",
  "P0.30/AIN6": "28",
  "VSS_29": "29",
  "DEC4": "30",
  "DCC": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEC1: "passive", "P0.00/XL1": "bidirectional", "P0.01/XL2": "bidirectional", "P0.04/AIN2": "bidirectional", "P0.05/AIN3": "bidirectional", "P0.06": "bidirectional", "P0.09": "bidirectional", "P0.10": "bidirectional", VDD_9: "power_in", "P0.12": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.18": "bidirectional", "P0.20": "bidirectional", "P0.21/~{RESET}": "bidirectional", SWDCLK: "input", SWDIO: "bidirectional", ANT: "passive", VSS_20: "power_in", DEC2: "passive", DEC3: "passive", XC1: "input", XC2: "input", VDD_25: "passive", "P0.25": "bidirectional", "P0.28/AIN4": "bidirectional", "P0.30/AIN6": "bidirectional", VSS_29: "passive", DEC4: "passive", DCC: "power_out", VDD_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF52810-QCxx";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/2.4GHz Cortex-M4 SoC, QFN-48
 *
 * KiCad symbol: `MCU_Nordic:nRF52810-QFxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*.
 * @see http://infocenter.nordicsemi.com/pdf/nRF52810_PS_v1.1.pdf
 * Keywords: MCU ARM BLE 2.4GHz.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.6x4.6mm.
 */
export class nRF52810_QFxx extends Component.withPins({
  "DEC1": "1",
  "P0.00/XL1": "2",
  "P0.01/XL2": "3",
  "P0.02/AIN0": "4",
  "P0.03/AIN1": "5",
  "P0.04/AIN2": "6",
  "P0.05/AIN3": "7",
  "P0.06": "8",
  "P0.07": "9",
  "P0.08": "10",
  "P0.09": "11",
  "P0.10": "12",
  "VDD_13": "13",
  "P0.11": "14",
  "P0.12": "15",
  "P0.13": "16",
  "P0.14": "17",
  "P0.15": "18",
  "P0.16": "19",
  "P0.17": "20",
  "P0.18": "21",
  "P0.19": "22",
  "P0.20": "23",
  "P0.21/~{RESET}": "24",
  "SWDCLK": "25",
  "SWDIO": "26",
  "P0.22": "27",
  "P0.23": "28",
  "P0.24": "29",
  "ANT": "30",
  "VSS_31": "31",
  "DEC2": "32",
  "DEC3": "33",
  "XC1": "34",
  "XC2": "35",
  "VDD_36": "36",
  "P0.25": "37",
  "P0.26": "38",
  "P0.27": "39",
  "P0.28/AIN4": "40",
  "P0.29/AIN5": "41",
  "P0.30/AIN6": "42",
  "P0.31/AIN7": "43",
  "NC": "44",
  "VSS_45": "45",
  "DEC4": "46",
  "DCC": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEC1: "passive", "P0.00/XL1": "bidirectional", "P0.01/XL2": "bidirectional", "P0.02/AIN0": "bidirectional", "P0.03/AIN1": "bidirectional", "P0.04/AIN2": "bidirectional", "P0.05/AIN3": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "P0.09": "bidirectional", "P0.10": "bidirectional", VDD_13: "power_in", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P0.21/~{RESET}": "bidirectional", SWDCLK: "input", SWDIO: "bidirectional", "P0.22": "bidirectional", "P0.23": "bidirectional", "P0.24": "bidirectional", ANT: "passive", VSS_31: "power_in", DEC2: "passive", DEC3: "passive", XC1: "input", XC2: "input", VDD_36: "passive", "P0.25": "bidirectional", "P0.26": "bidirectional", "P0.27": "bidirectional", "P0.28/AIN4": "bidirectional", "P0.29/AIN5": "bidirectional", "P0.30/AIN6": "bidirectional", "P0.31/AIN7": "bidirectional", NC: "no_connect", VSS_45: "passive", DEC4: "passive", DCC: "power_out", VDD_48: "passive", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF52810-QFxx";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, QFN-32
 *
 * KiCad symbol: `MCU_Nordic:nRF52811-QCxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://infocenter.nordicsemi.com/pdf/nRF52811_PS_v1.0.pdf
 * Keywords: MCU ARM BLE ANT 2.4GHz 802.15.4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm_ThermalVias.
 */
export class nRF52811_QCxx extends Component.withPins({
  "DEC1": "1",
  "XL1/P0.00": "2",
  "XL2/P0.01": "3",
  "AIN2/P0.04": "4",
  "AIN3/P0.05": "5",
  "P0.06": "6",
  "P0.09": "7",
  "P0.10": "8",
  "VDD_9": "9",
  "P0.12": "10",
  "P0.14": "11",
  "P0.15": "12",
  "P0.16": "13",
  "P0.18": "14",
  "P0.20": "15",
  "P0.21/~{RESET}": "16",
  "SWDCLK": "17",
  "SWDIO": "18",
  "ANT": "19",
  "VSS_20": "20",
  "DEC2": "21",
  "DEC3": "22",
  "XC1": "23",
  "XC2": "24",
  "VDD_25": "25",
  "P0.25": "26",
  "AIN4/P0.28": "27",
  "AIN6/P0.30": "28",
  "VSS_29": "29",
  "DEC4": "30",
  "DCC": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEC1: "passive", "XL1/P0.00": "bidirectional", "XL2/P0.01": "bidirectional", "AIN2/P0.04": "bidirectional", "AIN3/P0.05": "bidirectional", "P0.06": "bidirectional", "P0.09": "bidirectional", "P0.10": "bidirectional", VDD_9: "power_in", "P0.12": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.18": "bidirectional", "P0.20": "bidirectional", "P0.21/~{RESET}": "bidirectional", SWDCLK: "input", SWDIO: "bidirectional", ANT: "passive", VSS_20: "power_in", DEC2: "passive", DEC3: "passive", XC1: "input", XC2: "input", VDD_25: "power_in", "P0.25": "bidirectional", "AIN4/P0.28": "bidirectional", "AIN6/P0.30": "bidirectional", VSS_29: "passive", DEC4: "passive", DCC: "power_out", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF52811-QCxx";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4 SoC, QFN-40
 *
 * KiCad symbol: `MCU_Nordic:nRF52820-QDxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.4mm*.
 * @see https://infocenter.nordicsemi.com/pdf/nRF52820_PS_v1.0.pdf
 * Keywords: MCU ARM BLE ANT 2.4GHz 802.15.4.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_5x5mm_P0.4mm_EP3.6x3.6mm.
 */
export class nRF52820_QDxx extends Component.withPins({
  "DEC1": "1",
  "XL1/P0.00": "2",
  "XL2/P0.01": "3",
  "AIN2/P0.04": "4",
  "AIN3/P0.05": "5",
  "P0.06": "6",
  "P0.07": "7",
  "VDD_8": "8",
  "VDDH": "9",
  "VBUS": "10",
  "DECUSB": "11",
  "D-": "12",
  "D+": "13",
  "P0.14": "14",
  "P0.15": "15",
  "P0.18/~{RESET}": "16",
  "P0.20": "17",
  "VDD_18": "18",
  "SWDIO": "19",
  "SWDCLK": "20",
  "DEC5": "21",
  "P0.16": "22",
  "P0.17": "23",
  "ANT": "24",
  "VSS_PA": "25",
  "DEC6": "26",
  "DEC3": "27",
  "XC1": "28",
  "XC2": "29",
  "VDD_30": "30",
  "P0.08": "31",
  "P0.29": "32",
  "P0.30": "33",
  "P0.28": "34",
  "AIN1/P0.03": "35",
  "AIN0/P0.02": "36",
  "VSS_37": "37",
  "DEC4": "38",
  "DCC": "39",
  "VDD_40": "40",
  "VSS_41": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEC1: "passive", "XL1/P0.00": "bidirectional", "XL2/P0.01": "bidirectional", "AIN2/P0.04": "bidirectional", "AIN3/P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", VDD_8: "power_in", VDDH: "power_in", VBUS: "power_in", DECUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.18/~{RESET}": "bidirectional", "P0.20": "bidirectional", VDD_18: "power_in", SWDIO: "bidirectional", SWDCLK: "input", DEC5: "passive", "P0.16": "bidirectional", "P0.17": "bidirectional", ANT: "passive", VSS_PA: "power_in", DEC6: "passive", DEC3: "passive", XC1: "input", XC2: "input", VDD_30: "power_in", "P0.08": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", "P0.28": "bidirectional", "AIN1/P0.03": "bidirectional", "AIN0/P0.02": "bidirectional", VSS_37: "power_in", DEC4: "passive", DCC: "power_out", VDD_40: "power_in", VSS_41: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF52820-QDxx";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/2.4GHz Cortex-M4 SoC, QFN-48
 *
 * KiCad symbol: `MCU_Nordic:nRF52832-QFxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*.
 * @see https://docs-be.nordicsemi.com/bundle/nRF52832_PS_v1.9/raw/resource/enus/nRF52832_PS_v1.9.pdf
 * Keywords: MCU ARM BLE 2.4GHz.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.6x4.6mm.
 */
export class nRF52832_QFxx extends Component.withPins({
  "DEC1": "1",
  "P0.00/XL1": "2",
  "P0.01/XL2": "3",
  "P0.02/AIN0": "4",
  "P0.03/AIN1": "5",
  "P0.04/AIN2": "6",
  "P0.05/AIN3": "7",
  "P0.06": "8",
  "P0.07": "9",
  "P0.08": "10",
  "NFC1/P0.09": "11",
  "NFC2/P0.10": "12",
  "VDD_13": "13",
  "P0.11": "14",
  "P0.12": "15",
  "P0.13": "16",
  "P0.14": "17",
  "P0.15": "18",
  "P0.16": "19",
  "P0.17": "20",
  "P0.18/SWO": "21",
  "P0.19": "22",
  "P0.20": "23",
  "P0.21/~{RESET}": "24",
  "SWDCLK": "25",
  "SWDIO": "26",
  "P0.22": "27",
  "P0.23": "28",
  "P0.24": "29",
  "ANT": "30",
  "VSS_31": "31",
  "DEC2": "32",
  "DEC3": "33",
  "XC1": "34",
  "XC2": "35",
  "VDD_36": "36",
  "P0.25": "37",
  "P0.26": "38",
  "P0.27": "39",
  "P0.28/AIN4": "40",
  "P0.29/AIN5": "41",
  "P0.30/AIN6": "42",
  "P0.31/AIN7": "43",
  "NC": "44",
  "VSS_45": "45",
  "DEC4": "46",
  "DCC": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEC1: "passive", "P0.00/XL1": "bidirectional", "P0.01/XL2": "bidirectional", "P0.02/AIN0": "bidirectional", "P0.03/AIN1": "bidirectional", "P0.04/AIN2": "bidirectional", "P0.05/AIN3": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", "P0.08": "bidirectional", "NFC1/P0.09": "bidirectional", "NFC2/P0.10": "bidirectional", VDD_13: "power_in", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "P0.18/SWO": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P0.21/~{RESET}": "bidirectional", SWDCLK: "input", SWDIO: "bidirectional", "P0.22": "bidirectional", "P0.23": "bidirectional", "P0.24": "bidirectional", ANT: "passive", VSS_31: "power_in", DEC2: "passive", DEC3: "passive", XC1: "input", XC2: "input", VDD_36: "passive", "P0.25": "bidirectional", "P0.26": "bidirectional", "P0.27": "bidirectional", "P0.28/AIN4": "bidirectional", "P0.29/AIN5": "bidirectional", "P0.30/AIN6": "bidirectional", "P0.31/AIN7": "bidirectional", NC: "no_connect", VSS_45: "passive", DEC4: "passive", DCC: "power_out", VDD_48: "passive", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF52832-QFxx";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, QFN-40
 *
 * KiCad symbol: `MCU_Nordic:nRF52833_QDxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.4mm*.
 * @see https://infocenter.nordicsemi.com/pdf/nRF52833_PS_v1.5.pdf
 * Keywords: MCU ARM BLE ANT 2.4GHz 802.15.4.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_5x5mm_P0.4mm_EP3.6x3.6mm.
 */
export class nRF52833_QDxx extends Component.withPins({
  "DEC1": "1",
  "XL1/P0.00": "2",
  "XL2/P0.01": "3",
  "AIN2/P0.04": "4",
  "AIN3/P0.05": "5",
  "P1.09": "6",
  "P0.11": "7",
  "VDD_8": "8",
  "VDDH": "9",
  "VBUS": "10",
  "DECUSB": "11",
  "D-": "12",
  "D+": "13",
  "P0.15": "14",
  "P0.17": "15",
  "P0.18/~{RESET}": "16",
  "P0.20": "17",
  "VDD_18": "18",
  "SWDIO": "19",
  "SWDCLK": "20",
  "DEC5": "21",
  "NFC1/P0.09": "22",
  "NFC2/P0.10": "23",
  "ANT": "24",
  "VSS_PA": "25",
  "DEC6": "26",
  "DEC3": "27",
  "XC1": "28",
  "XC2": "29",
  "VDD_30": "30",
  "AIN1/P0.03": "31",
  "AIN0/P0.02": "32",
  "AIN4/P0.28": "33",
  "AIN5/P0.29": "34",
  "AIN6/P0.30": "35",
  "AIN7/P0.31": "36",
  "VSS_37": "37",
  "DEC4": "38",
  "DCC": "39",
  "VDD_40": "40",
  "VSS_41": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DEC1: "passive", "XL1/P0.00": "bidirectional", "XL2/P0.01": "bidirectional", "AIN2/P0.04": "bidirectional", "AIN3/P0.05": "bidirectional", "P1.09": "bidirectional", "P0.11": "bidirectional", VDD_8: "power_in", VDDH: "power_in", VBUS: "power_in", DECUSB: "passive", "D-": "bidirectional", "D+": "bidirectional", "P0.15": "bidirectional", "P0.17": "bidirectional", "P0.18/~{RESET}": "bidirectional", "P0.20": "bidirectional", VDD_18: "passive", SWDIO: "bidirectional", SWDCLK: "input", DEC5: "passive", "NFC1/P0.09": "bidirectional", "NFC2/P0.10": "bidirectional", ANT: "passive", VSS_PA: "power_in", DEC6: "passive", DEC3: "passive", XC1: "input", XC2: "input", VDD_30: "passive", "AIN1/P0.03": "bidirectional", "AIN0/P0.02": "bidirectional", "AIN4/P0.28": "bidirectional", "AIN5/P0.29": "bidirectional", "AIN6/P0.30": "bidirectional", "AIN7/P0.31": "bidirectional", VSS_37: "power_in", DEC4: "passive", DCC: "power_out", VDD_40: "passive", VSS_41: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF52833_QDxx";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, AQFN-73
 *
 * KiCad symbol: `MCU_Nordic:nRF52833_QIxx`. Reference prefix: `U`.
 * Footprint filters: Nordic*AQFN*1EP*7x7mm*P0.5mm*.
 * @see https://infocenter.nordicsemi.com/pdf/nRF52833_PS_v1.5.pdf
 * Keywords: MCU ARM BLE ANT 2.4GHz 802.15.4.
 * Default footprint: Package_DFN_QFN:Nordic_AQFN-73-1EP_7x7mm_P0.5mm.
 */
export class nRF52833_QIxx extends Component.withPins({
  "AIN7/P0.31": "A8",
  "AIN5/P0.29": "A10",
  "AIN0/P0.02": "A12",
  "P0.19": "A14",
  "P1.05": "A16",
  "NC_A18": "A18",
  "P0.25": "A20",
  "VDD_A22": "A22",
  "XC2": "A23",
  "SWDCLK": "AA24",
  "NC_AB2": "AB2",
  "DECUSB": "AC5",
  "P0.14": "AC9",
  "P0.16": "AC11",
  "P0.18/~{RESET}": "AC13",
  "NC_AC15": "AC15",
  "P0.21": "AC17",
  "NC_AC19": "AC19",
  "NC_AC21": "AC21",
  "SWDIO": "AC24",
  "VBUS": "AD2",
  "D-": "AD4",
  "D+": "AD6",
  "P0.13": "AD8",
  "P0.15": "AD10",
  "P0.17": "AD12",
  "VDD_AD14": "AD14",
  "P0.20": "AD16",
  "P0.22": "AD18",
  "P0.24": "AD20",
  "TRACEDATA0/P1.00": "AD22",
  "VDD_AD23": "AD23",
  "VDD_B1": "B1",
  "DCC": "B3",
  "DEC4": "B5",
  "VSS_B7": "B7",
  "AIN6/P0.30": "B9",
  "AIN4/P0.28": "B11",
  "AIN1/P0.03": "B13",
  "P1.03": "B15",
  "P0.23": "B17",
  "NC_B19": "B19",
  "XC1": "B24",
  "DEC1": "C1",
  "XL1/P0.00": "D2",
  "DEC3": "D23",
  "DEC6": "E24",
  "VSS_EP": "EP",
  "XL2/P0.01": "F2",
  "VSS_PA": "F23",
  "P0.26": "G1",
  "P0.27": "H2",
  "ANT": "H23",
  "AIN2/P0.04": "J1",
  "NFC2/P0.10": "J24",
  "AIN3/P0.05": "K2",
  "P0.06": "L1",
  "NFC1/P0.09": "L24",
  "TRACECLK/P0.07": "M2",
  "P0.08": "N1",
  "DEC5": "N24",
  "P1.08": "P2",
  "P1.07": "P23",
  "TRACEDATA3/P1.09": "R1",
  "P1.06": "R24",
  "TRACEDATA2/P0.11": "T2",
  "NC_T23": "T23",
  "TRACEDATA1/P0.12": "U1",
  "P1.04": "U24",
  "NC_V23": "V23",
  "VDD_W1": "W1",
  "P1.02": "W24",
  "VDDH": "Y2",
  "P1.01": "Y23",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AIN7/P0.31": "bidirectional", "AIN5/P0.29": "bidirectional", "AIN0/P0.02": "bidirectional", "P0.19": "bidirectional", "P1.05": "bidirectional", NC_A18: "no_connect", "P0.25": "bidirectional", VDD_A22: "passive", XC2: "input", SWDCLK: "input", NC_AB2: "no_connect", DECUSB: "passive", "P0.14": "bidirectional", "P0.16": "bidirectional", "P0.18/~{RESET}": "bidirectional", NC_AC15: "no_connect", "P0.21": "bidirectional", NC_AC19: "no_connect", NC_AC21: "no_connect", SWDIO: "bidirectional", VBUS: "power_in", "D-": "bidirectional", "D+": "bidirectional", "P0.13": "bidirectional", "P0.15": "bidirectional", "P0.17": "bidirectional", VDD_AD14: "passive", "P0.20": "bidirectional", "P0.22": "bidirectional", "P0.24": "bidirectional", "TRACEDATA0/P1.00": "bidirectional", VDD_AD23: "passive", VDD_B1: "power_in", DCC: "power_out", DEC4: "passive", VSS_B7: "power_in", "AIN6/P0.30": "bidirectional", "AIN4/P0.28": "bidirectional", "AIN1/P0.03": "bidirectional", "P1.03": "bidirectional", "P0.23": "bidirectional", NC_B19: "no_connect", XC1: "input", DEC1: "passive", "XL1/P0.00": "bidirectional", DEC3: "passive", DEC6: "passive", VSS_EP: "passive", "XL2/P0.01": "bidirectional", VSS_PA: "power_in", "P0.26": "bidirectional", "P0.27": "bidirectional", ANT: "passive", "AIN2/P0.04": "bidirectional", "NFC2/P0.10": "bidirectional", "AIN3/P0.05": "bidirectional", "P0.06": "bidirectional", "NFC1/P0.09": "bidirectional", "TRACECLK/P0.07": "bidirectional", "P0.08": "bidirectional", DEC5: "passive", "P1.08": "bidirectional", "P1.07": "bidirectional", "TRACEDATA3/P1.09": "bidirectional", "P1.06": "bidirectional", "TRACEDATA2/P0.11": "bidirectional", NC_T23: "no_connect", "TRACEDATA1/P0.12": "bidirectional", "P1.04": "bidirectional", NC_V23: "no_connect", VDD_W1: "passive", "P1.02": "bidirectional", VDDH: "power_in", "P1.01": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF52833_QIxx";
  override referencePrefix = "U";
}

/**
 * Multiprotocol BLE/ANT/2.4 GHz/802.15.4 Cortex-M4F SoC, AQFN-73
 *
 * KiCad symbol: `MCU_Nordic:nRF52840`. Reference prefix: `U`.
 * Footprint filters: Nordic*AQFN*1EP*7x7mm*P0.5mm*.
 * @see http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.nrf52/dita/nrf52/chips/nrf52840.html
 * Keywords: MCU ARM BLE ANT 2.4GHz 802.15.4.
 * Default footprint: Package_DFN_QFN:Nordic_AQFN-73-1EP_7x7mm_P0.5mm.
 */
export class nRF52840 extends Component.withPins({
  "AIN7/P0.31": "A8",
  "AIN5/P0.29": "A10",
  "AIN0/P0.02": "A12",
  "P1.15": "A14",
  "P1.13": "A16",
  "DEC2": "A18",
  "P1.10": "A20",
  "VDD_A22": "A22",
  "XC2": "A23",
  "SWDCLK": "AA24",
  "DCCH": "AB2",
  "DECUSB": "AC5",
  "P0.14": "AC9",
  "P0.16": "AC11",
  "P0.18/~{RESET}": "AC13",
  "P0.19": "AC15",
  "P0.21": "AC17",
  "P0.23": "AC19",
  "P0.25": "AC21",
  "SWDIO": "AC24",
  "VBUS": "AD2",
  "D-": "AD4",
  "D+": "AD6",
  "P0.13": "AD8",
  "P0.15": "AD10",
  "P0.17": "AD12",
  "VDD_AD14": "AD14",
  "P0.20": "AD16",
  "P0.22": "AD18",
  "P0.24": "AD20",
  "TRACEDATA0/P1.00": "AD22",
  "VDD_AD23": "AD23",
  "VDD_B1": "B1",
  "DCC": "B3",
  "DEC4": "B5",
  "VSS_B7": "B7",
  "AIN6/P0.30": "B9",
  "AIN4/P0.28": "B11",
  "AIN1/P0.03": "B13",
  "P1.14": "B15",
  "P1.12": "B17",
  "P1.11": "B19",
  "XC1": "B24",
  "DEC1": "C1",
  "XL1/P0.00": "D2",
  "DEC3": "D23",
  "DEC6": "E24",
  "VSS_EP": "EP",
  "XL2/P0.01": "F2",
  "VSS_PA": "F23",
  "P0.26": "G1",
  "P0.27": "H2",
  "ANT": "H23",
  "AIN2/P0.04": "J1",
  "NFC2/P0.10": "J24",
  "AIN3/P0.05": "K2",
  "P0.06": "L1",
  "NFC1/P0.09": "L24",
  "TRACECLK/P0.07": "M2",
  "P0.08": "N1",
  "DEC5": "N24",
  "P1.08": "P2",
  "P1.07": "P23",
  "TRACEDATA3/P1.09": "R1",
  "P1.06": "R24",
  "TRACEDATA2/P0.11": "T2",
  "P1.05": "T23",
  "TRACEDATA1/P0.12": "U1",
  "P1.04": "U24",
  "P1.03": "V23",
  "VDD_W1": "W1",
  "P1.02": "W24",
  "VDDH": "Y2",
  "P1.01": "Y23",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AIN7/P0.31": "bidirectional", "AIN5/P0.29": "bidirectional", "AIN0/P0.02": "bidirectional", "P1.15": "bidirectional", "P1.13": "bidirectional", DEC2: "passive", "P1.10": "bidirectional", VDD_A22: "passive", XC2: "input", SWDCLK: "input", DCCH: "power_out", DECUSB: "passive", "P0.14": "bidirectional", "P0.16": "bidirectional", "P0.18/~{RESET}": "bidirectional", "P0.19": "bidirectional", "P0.21": "bidirectional", "P0.23": "bidirectional", "P0.25": "bidirectional", SWDIO: "bidirectional", VBUS: "power_in", "D-": "bidirectional", "D+": "bidirectional", "P0.13": "bidirectional", "P0.15": "bidirectional", "P0.17": "bidirectional", VDD_AD14: "passive", "P0.20": "bidirectional", "P0.22": "bidirectional", "P0.24": "bidirectional", "TRACEDATA0/P1.00": "bidirectional", VDD_AD23: "passive", VDD_B1: "power_in", DCC: "power_out", DEC4: "passive", VSS_B7: "power_in", "AIN6/P0.30": "bidirectional", "AIN4/P0.28": "bidirectional", "AIN1/P0.03": "bidirectional", "P1.14": "bidirectional", "P1.12": "bidirectional", "P1.11": "bidirectional", XC1: "input", DEC1: "passive", "XL1/P0.00": "bidirectional", DEC3: "passive", DEC6: "passive", VSS_EP: "passive", "XL2/P0.01": "bidirectional", VSS_PA: "power_in", "P0.26": "bidirectional", "P0.27": "bidirectional", ANT: "passive", "AIN2/P0.04": "bidirectional", "NFC2/P0.10": "bidirectional", "AIN3/P0.05": "bidirectional", "P0.06": "bidirectional", "NFC1/P0.09": "bidirectional", "TRACECLK/P0.07": "bidirectional", "P0.08": "bidirectional", DEC5: "passive", "P1.08": "bidirectional", "P1.07": "bidirectional", "TRACEDATA3/P1.09": "bidirectional", "P1.06": "bidirectional", "TRACEDATA2/P0.11": "bidirectional", "P1.05": "bidirectional", "TRACEDATA1/P0.12": "bidirectional", "P1.04": "bidirectional", "P1.03": "bidirectional", VDD_W1: "passive", "P1.02": "bidirectional", VDDH: "power_in", "P1.01": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF52840";
  override referencePrefix = "U";
}

/**
 * nRF5340, BLE, NFC, Thread, Zigbee, ARM M33 SoC, Dual Core, AQFN-94
 *
 * KiCad symbol: `MCU_Nordic:nRF5340-QKxx`. Reference prefix: `U1`.
 * Footprint filters: Nordic*AQFN*1EP*7x7mm*P0.4mm*.
 * @see https://infocenter.nordicsemi.com/pdf/nRF5340_PS_v1.2.pdf
 * Keywords: nordic nrf nRF5340 aQFN94 BLE Zigbee NFC Thread M33.
 * Default footprint: Package_DFN_QFN:Nordic_AQFN-94-1EP_7x7mm_P0.4mm.
 */
export class nRF5340_QKxx extends Component.withPins({
  "VBUS": "A5",
  "DECA": "A13",
  "DECD": "A15",
  "P1.13": "A17",
  "VDD_A19": "A19",
  "DCC": "A21",
  "DECN": "A23",
  "NC_A25": "A25",
  "DECR": "A27",
  "NFC2/P0.03": "AA1",
  "SWDIO": "AA31",
  "AIN2/P0.06": "AB2",
  "VDD_AC1": "AC1",
  "~{RESET}": "AC31",
  "AIN3/P0.07": "AD2",
  "TWI/P1.02": "AE1",
  "AIN7/P0.28": "AE31",
  "TWI/P1.03": "AF2",
  "VDD_AG1": "AG1",
  "NC_AG31": "AG31",
  "SCK/TRACEDATA3/P0.08": "AH2",
  "MOSI/TRACEDATA2/P0.09": "AJ1",
  "VDD_AJ31": "AJ31",
  "MISO/TRACEDATA1/P0.10": "AK2",
  "CSN/TRACEDATA0/P0.11": "AK4",
  "DCX/TRACECLK/P0.12": "AK6",
  "IO1/P0.14": "AK8",
  "IO2/P0.15": "AK10",
  "SCK/P0.17": "AK12",
  "CSN/P0.18": "AK14",
  "P0.20": "AK16",
  "P0.22": "AK18",
  "P0.23": "AK20",
  "P1.05": "AK22",
  "P1.07": "AK24",
  "P1.09": "AK26",
  "AIN4/P0.25": "AK28",
  "AIN6/P0.27": "AK30",
  "VDD_AL3": "AL3",
  "IO0/P0.13": "AL5",
  "VDD_AL7": "AL7",
  "IO3/P0.16": "AL9",
  "VDD_AL11": "AL11",
  "P0.19": "AL13",
  "P0.21": "AL15",
  "VDD_AL17": "AL17",
  "P1.04": "AL19",
  "P1.06": "AL21",
  "P1.08": "AL23",
  "VDD_AL25": "AL25",
  "P0.24": "AL27",
  "AIN5/P0.26": "AL29",
  "D+": "B2",
  "D-": "B4",
  "DECUSB": "B6",
  "VDD_B8": "B8",
  "DCCD": "B10",
  "NC_B12": "B12",
  "P1.15": "B14",
  "P1.14": "B16",
  "P1.12": "B18",
  "P1.11": "B20",
  "P0.31": "B22",
  "P0.30": "B24",
  "NC_B26": "B26",
  "VDD_B28": "B28",
  "XC2": "B30",
  "VDD_C1": "C1",
  "XC1": "C31",
  "NC_D2": "D2",
  "VDDH": "E1",
  "VDD_E31": "E31",
  "VSS": "EP",
  "NC_F2": "F2",
  "NC_G1": "G1",
  "DECRF": "G31",
  "NC_H2": "H2",
  "DCCH": "J1",
  "NC_J31": "J31",
  "NC_K2": "K2",
  "VDD_L1": "L1",
  "ANT": "L31",
  "P1.00": "M2",
  "XL1/P0.00": "N1",
  "VDD_N31": "N31",
  "P1.01": "P2",
  "XL2/P0.01": "R1",
  "P1.10": "R31",
  "NC_T2": "T2",
  "VDD_U1": "U1",
  "P0.29": "U31",
  "AIN0/P0.04": "V2",
  "NFC1/P0.02": "W1",
  "SWDCLK": "W31",
  "AIN1/P0.05": "Y2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBUS: "power_in", DECA: "passive", DECD: "passive", "P1.13": "bidirectional", VDD_A19: "power_in", DCC: "power_out", DECN: "passive", NC_A25: "no_connect", DECR: "passive", "NFC2/P0.03": "bidirectional", SWDIO: "bidirectional", "AIN2/P0.06": "bidirectional", VDD_AC1: "passive", "~{RESET}": "input", "AIN3/P0.07": "bidirectional", "TWI/P1.02": "bidirectional", "AIN7/P0.28": "bidirectional", "TWI/P1.03": "bidirectional", VDD_AG1: "passive", NC_AG31: "no_connect", "SCK/TRACEDATA3/P0.08": "bidirectional", "MOSI/TRACEDATA2/P0.09": "bidirectional", VDD_AJ31: "passive", "MISO/TRACEDATA1/P0.10": "bidirectional", "CSN/TRACEDATA0/P0.11": "bidirectional", "DCX/TRACECLK/P0.12": "bidirectional", "IO1/P0.14": "bidirectional", "IO2/P0.15": "bidirectional", "SCK/P0.17": "bidirectional", "CSN/P0.18": "bidirectional", "P0.20": "bidirectional", "P0.22": "bidirectional", "P0.23": "bidirectional", "P1.05": "bidirectional", "P1.07": "bidirectional", "P1.09": "bidirectional", "AIN4/P0.25": "bidirectional", "AIN6/P0.27": "bidirectional", VDD_AL3: "passive", "IO0/P0.13": "bidirectional", VDD_AL7: "passive", "IO3/P0.16": "bidirectional", VDD_AL11: "passive", "P0.19": "bidirectional", "P0.21": "bidirectional", VDD_AL17: "passive", "P1.04": "bidirectional", "P1.06": "bidirectional", "P1.08": "bidirectional", VDD_AL25: "passive", "P0.24": "bidirectional", "AIN5/P0.26": "bidirectional", "D+": "bidirectional", "D-": "bidirectional", DECUSB: "passive", VDD_B8: "passive", DCCD: "power_out", NC_B12: "no_connect", "P1.15": "bidirectional", "P1.14": "bidirectional", "P1.12": "bidirectional", "P1.11": "bidirectional", "P0.31": "bidirectional", "P0.30": "bidirectional", NC_B26: "no_connect", VDD_B28: "passive", XC2: "input", VDD_C1: "passive", XC1: "input", NC_D2: "no_connect", VDDH: "power_in", VDD_E31: "passive", VSS: "power_in", NC_F2: "no_connect", NC_G1: "no_connect", DECRF: "passive", NC_H2: "no_connect", DCCH: "passive", NC_J31: "no_connect", NC_K2: "no_connect", VDD_L1: "passive", ANT: "passive", "P1.00": "bidirectional", "XL1/P0.00": "bidirectional", VDD_N31: "passive", "P1.01": "bidirectional", "XL2/P0.01": "bidirectional", "P1.10": "bidirectional", NC_T2: "no_connect", VDD_U1: "passive", "P0.29": "bidirectional", "AIN0/P0.04": "bidirectional", "NFC1/P0.02": "bidirectional", SWDCLK: "input", "AIN1/P0.05": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF5340-QKxx";
  override referencePrefix = "U1";
}

/**
 * Low power SiP with integrated LTE-M/NB-IoT modem and GNSS
 *
 * KiCad symbol: `MCU_Nordic:nRF9160-SIxA`. Reference prefix: `U`.
 * Footprint filters: Nordic*nRF9160*LGA?102?59EP*16.0x10.5mm*P0.5mm*.
 * @see https://docs-be.nordicsemi.com/bundle/ps_nrf9160/attach/nRF9160_PS_v2.2.pdf
 * Keywords: MCU ARM M33 cellular GPS.
 * Default footprint: Package_LGA:Nordic_nRF9160-SIxx_LGA-102-59EP_16.0x10.5mm_P0.5mm.
 */
export class nRF9160_SIxA extends Component.withPins({
  "GND_Shield_1": "1",
  "GND_Shield_5": "5",
  "GND_Shield_6": "6",
  "GND_Shield_7": "7",
  "GND_Shield_8": "8",
  "GND_Shield_9": "9",
  "NC_10": "10",
  "GND_Shield_11": "11",
  "GND_Shield_14": "14",
  "GND_Shield_17": "17",
  "GND_Shield_21": "21",
  "GND_Shield_27": "27",
  "GND_Shield_31": "31",
  "GND_Shield_36": "36",
  "GND_Shield_41": "41",
  "GND_Shield_44": "44",
  "GND_Shield_47": "47",
  "GND_Shield_50": "50",
  "NC_51": "51",
  "GND_Shield_52": "52",
  "GND_Shield_56": "56",
  "GND_Shield_60": "60",
  "GND_Shield_62": "62",
  "GND_Shield_63": "63",
  "GND_Shield_65": "65",
  "GND_Shield_66": "66",
  "GND_Shield_68": "68",
  "GND_Shield_69": "69",
  "NC_70": "70",
  "NC_71": "71",
  "GND_Shield_72": "72",
  "NC_73": "73",
  "GND_Shield_74": "74",
  "GND_Shield_75": "75",
  "GND_Shield_76": "76",
  "GND_Shield_77": "77",
  "GND_Shield_78": "78",
  "GND_Shield_79": "79",
  "GND_Shield_80": "80",
  "GND_Shield_81": "81",
  "GND_Shield_82": "82",
  "GND_Shield_85": "85",
  "GND_Shield_90": "90",
  "GND_Shield_94": "94",
  "GND_Shield_98": "98",
  "NC_104": "104",
  "NC_105": "105",
  "NC_106": "106",
  "NC_107": "107",
  "NC_108": "108",
  "NC_109": "109",
  "NC_110": "110",
  "NC_111": "111",
  "NC_112": "112",
  "NC_113": "113",
  "NC_114": "114",
  "NC_115": "115",
  "NC_116": "116",
  "NC_117": "117",
  "NC_118": "118",
  "NC_119": "119",
  "NC_120": "120",
  "NC_121": "121",
  "NC_122": "122",
  "NC_123": "123",
  "NC_124": "124",
  "NC_125": "125",
  "NC_126": "126",
  "NC_127": "127",
  "P0.05": "2",
  "P0.06": "3",
  "P0.07": "4",
  "VDD_GPIO": "12",
  "DEC0": "13",
  "P0.08": "15",
  "P0.09": "16",
  "P0.10": "18",
  "P0.11": "19",
  "P0.12": "20",
  "VDD2": "22",
  "AIN0/P0.13": "23",
  "AIN1/P0.14": "24",
  "AIN2/P0.15": "25",
  "AIN3/P0.16": "26",
  "AIN4/P0.17": "28",
  "AIN5/P0.18": "29",
  "AIN6/P0.19": "30",
  "~{RESET}": "32",
  "SWDCLK": "33",
  "SWDIO": "34",
  "AIN7/P0.20": "35",
  "TRACECLK/P0.21": "37",
  "TRACEDATA0/P0.22": "38",
  "TRACEDATA1/P0.23": "39",
  "TRACEDATA2/P0.24": "40",
  "TRACEDATA3/P0.25": "42",
  "SIM_RST": "43",
  "SIM_DET": "45",
  "SIM_CLK": "46",
  "SIM_IO": "48",
  "SIM_1V8": "49",
  "MAGPIO2": "53",
  "MAGPIO1": "54",
  "MAGPIO0": "55",
  "VIO": "57",
  "SCLK": "58",
  "SDATA": "59",
  "ANT": "61",
  "AUX": "64",
  "GPS": "67",
  "P0.26": "83",
  "P0.27": "84",
  "P0.28": "86",
  "P0.29": "87",
  "P0.30": "88",
  "P0.31": "89",
  "COEX2": "91",
  "COEX1": "92",
  "COEX0": "93",
  "P0.00": "95",
  "P0.01": "96",
  "P0.02": "97",
  "P0.03": "99",
  "P0.04": "100",
  "ENABLE": "101",
  "VDD1": "102",
  "VSS": "103",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_Shield_1: "passive", GND_Shield_5: "passive", GND_Shield_6: "passive", GND_Shield_7: "passive", GND_Shield_8: "passive", GND_Shield_9: "passive", NC_10: "no_connect", GND_Shield_11: "passive", GND_Shield_14: "passive", GND_Shield_17: "passive", GND_Shield_21: "passive", GND_Shield_27: "passive", GND_Shield_31: "passive", GND_Shield_36: "passive", GND_Shield_41: "passive", GND_Shield_44: "passive", GND_Shield_47: "passive", GND_Shield_50: "passive", NC_51: "no_connect", GND_Shield_52: "passive", GND_Shield_56: "passive", GND_Shield_60: "passive", GND_Shield_62: "passive", GND_Shield_63: "passive", GND_Shield_65: "passive", GND_Shield_66: "passive", GND_Shield_68: "passive", GND_Shield_69: "passive", NC_70: "no_connect", NC_71: "no_connect", GND_Shield_72: "passive", NC_73: "no_connect", GND_Shield_74: "passive", GND_Shield_75: "passive", GND_Shield_76: "passive", GND_Shield_77: "passive", GND_Shield_78: "passive", GND_Shield_79: "passive", GND_Shield_80: "passive", GND_Shield_81: "passive", GND_Shield_82: "passive", GND_Shield_85: "passive", GND_Shield_90: "passive", GND_Shield_94: "passive", GND_Shield_98: "passive", NC_104: "no_connect", NC_105: "no_connect", NC_106: "no_connect", NC_107: "no_connect", NC_108: "no_connect", NC_109: "no_connect", NC_110: "no_connect", NC_111: "no_connect", NC_112: "no_connect", NC_113: "no_connect", NC_114: "no_connect", NC_115: "no_connect", NC_116: "no_connect", NC_117: "no_connect", NC_118: "no_connect", NC_119: "no_connect", NC_120: "no_connect", NC_121: "no_connect", NC_122: "no_connect", NC_123: "no_connect", NC_124: "no_connect", NC_125: "no_connect", NC_126: "no_connect", NC_127: "no_connect", "P0.05": "bidirectional", "P0.06": "bidirectional", "P0.07": "bidirectional", VDD_GPIO: "power_in", DEC0: "passive", "P0.08": "bidirectional", "P0.09": "bidirectional", "P0.10": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", VDD2: "power_in", "AIN0/P0.13": "bidirectional", "AIN1/P0.14": "bidirectional", "AIN2/P0.15": "bidirectional", "AIN3/P0.16": "bidirectional", "AIN4/P0.17": "bidirectional", "AIN5/P0.18": "bidirectional", "AIN6/P0.19": "bidirectional", "~{RESET}": "input", SWDCLK: "input", SWDIO: "bidirectional", "AIN7/P0.20": "bidirectional", "TRACECLK/P0.21": "bidirectional", "TRACEDATA0/P0.22": "bidirectional", "TRACEDATA1/P0.23": "bidirectional", "TRACEDATA2/P0.24": "bidirectional", "TRACEDATA3/P0.25": "bidirectional", SIM_RST: "output", SIM_DET: "no_connect", SIM_CLK: "output", SIM_IO: "bidirectional", SIM_1V8: "power_out", MAGPIO2: "bidirectional", MAGPIO1: "bidirectional", MAGPIO0: "bidirectional", VIO: "power_out", SCLK: "output", SDATA: "bidirectional", ANT: "passive", AUX: "passive", GPS: "passive", "P0.26": "bidirectional", "P0.27": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", "P0.31": "bidirectional", COEX2: "bidirectional", COEX1: "bidirectional", COEX0: "bidirectional", "P0.00": "bidirectional", "P0.01": "bidirectional", "P0.02": "bidirectional", "P0.03": "bidirectional", "P0.04": "bidirectional", ENABLE: "input", VDD1: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Nordic:nRF9160-SIxA";
  override referencePrefix = "U";
}
