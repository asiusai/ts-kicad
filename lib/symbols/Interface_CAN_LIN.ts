// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Isolated CAN Transceiver, integrated isolated DC-DC converter, 1Mbps
 *
 * KiCad symbol: `Interface_CAN_LIN:ADM3053`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM3053.pdf
 * Keywords: protected.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class ADM3053 extends Component.withPins({
  "GND1_1": "1",
  "NC": "2",
  "GND1_3": "3",
  "RXD": "4",
  "TXD": "5",
  "VIO": "6",
  "GND1_7": "7",
  "VCC": "8",
  "GND1_9": "9",
  "GND1_10": "10",
  "GND2_11": "11",
  "VISOOUT": "12",
  "GND2_13": "13",
  "VREF": "14",
  "CANL": "15",
  "GND2_16": "16",
  "CANH": "17",
  "RS": "18",
  "VISOIN": "19",
  "GND2_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND1_1: "power_in", NC: "no_connect", GND1_3: "passive", RXD: "output", TXD: "input", VIO: "power_in", GND1_7: "passive", VCC: "power_in", GND1_9: "passive", GND1_10: "passive", GND2_11: "power_in", VISOOUT: "power_out", GND2_13: "passive", VREF: "input", CANL: "bidirectional", GND2_16: "passive", CANH: "bidirectional", RS: "input", VISOIN: "power_in", GND2_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:ADM3053";
  override referencePrefix = "U";
}

/**
 * Isolated CAN FD Transceiver, integrated isolated DC-DC converter, 12Mbps, SOIC-20W
 *
 * KiCad symbol: `Interface_CAN_LIN:ADM3057ExRW`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADM3055E-3057E.pdf
 * Keywords: can transceiver isolated protected.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class ADM3057ExRW extends Component.withPins({
  "GND1_1": "1",
  "GND1_2": "2",
  "VCC": "3",
  "VIO": "4",
  "RXD": "5",
  "SILENT": "6",
  "TXD": "7",
  "STBY": "8",
  "AUXIN": "9",
  "GND1_10": "10",
  "GND2_11": "11",
  "RS": "12",
  "CANL": "13",
  "CANH": "14",
  "GND2_15": "15",
  "VISOIN": "16",
  "AUXOUT": "17",
  "GNDISO_18": "18",
  "VISOOUT": "19",
  "GNDISO_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND1_1: "power_in", GND1_2: "passive", VCC: "power_in", VIO: "power_in", RXD: "output", SILENT: "input", TXD: "input", STBY: "input", AUXIN: "input", GND1_10: "passive", GND2_11: "passive", RS: "input", CANL: "bidirectional", CANH: "bidirectional", GND2_15: "passive", VISOIN: "passive", AUXOUT: "output", GNDISO_18: "passive", VISOOUT: "passive", GNDISO_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:ADM3057ExRW";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, separate VIO, standby mode, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1049T-3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TJA1049.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1049T_3 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", STB: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1049T-3";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver up to 5 Mbps, separate VIO, standby mode, ±30V bus common mode voltage, 5V supply, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:CA-IF1042LVS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheet.lcsc.com/lcsc/2401191740_Chipanalog-CA-IF1042LS-Q1_C20598901.pdf
 * Keywords: chipanalog.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CA_IF1042LVS extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", STB: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:CA-IF1042LVS";
  override referencePrefix = "U";
}

/**
 * Isolated CAN FD Transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:ISO1044BD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/iso1044.pdf
 * Keywords: CAN-FD Isolated.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ISO1044BD extends Component.withPins({
  "VCC1": "1",
  "TXD": "2",
  "RXD": "3",
  "GND1": "4",
  "CANL": "5",
  "CANH": "6",
  "GND2": "7",
  "VCC2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC1: "power_in", TXD: "input", RXD: "output", GND1: "power_in", CANL: "bidirectional", CANH: "bidirectional", GND2: "power_in", VCC2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:ISO1044BD";
  override referencePrefix = "U";
}

/**
 * Isolated CAN Transceiver, SOP-8
 *
 * KiCad symbol: `Interface_CAN_LIN:ISO1050DUB`. Reference prefix: `U`.
 * Footprint filters: SOP*6.62x9.15mm*P2.54mm*.
 * @see http://www.ti.com/lit/ds/symlink/iso1050.pdf
 * Keywords: CAN Isolated.
 * Default footprint: Package_SO:SOP-8_6.62x9.15mm_P2.54mm.
 */
export class ISO1050DUB extends Component.withPins({
  "VCC1": "1",
  "RXD": "2",
  "TXD": "3",
  "GND1": "4",
  "GND2": "5",
  "CANL": "6",
  "CANH": "7",
  "VCC2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC1: "power_in", RXD: "output", TXD: "input", GND1: "power_in", GND2: "power_in", CANL: "bidirectional", CANH: "bidirectional", VCC2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:ISO1050DUB";
  override referencePrefix = "U";
}

/**
 * Isolated CAN FD Transceiver, Integrated DC-DC Converter, 5Mbps, Reinforced Isolation,  SOIC-20W
 *
 * KiCad symbol: `Interface_CAN_LIN:ISOW1044`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/isow1044.pdf
 * Keywords: can transceiver isolated protected integrated isolated supply.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class ISOW1044 extends Component.withPins({
  "VIO": "1",
  "IN": "2",
  "TXD": "3",
  "STB": "4",
  "RXD": "5",
  "GNDIO": "6",
  "NC": "7",
  "EN/FLT": "8",
  "VDD": "9",
  "GND1": "10",
  "GND2": "11",
  "VISOOUT": "12",
  "VSIN": "13",
  "OUT": "14",
  "GISOIN_15": "15",
  "GISOIN_16": "16",
  "GISOIN_17": "17",
  "CANL": "18",
  "CANH": "19",
  "VISOIN": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIO: "power_in", IN: "input", TXD: "input", STB: "input", RXD: "output", GNDIO: "power_in", NC: "no_connect", "EN/FLT": "input", VDD: "power_in", GND1: "power_in", GND2: "power_out", VISOOUT: "power_out", VSIN: "power_in", OUT: "output", GISOIN_15: "power_in", GISOIN_16: "passive", GISOIN_17: "passive", CANL: "bidirectional", CANH: "bidirectional", VISOIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:ISOW1044";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 4Mbps, 3.3V or 5V supply, DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:LTC2875-DD`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2875f.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 */
export class LTC2875_DD extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "RS": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", SPLIT: "input", CANL: "bidirectional", CANH: "bidirectional", RS: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:LTC2875-DD";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 4Mbps, 3.3V or 5V supply, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:LTC2875-S8`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2875f.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LTC2875_S8 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "RS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", SPLIT: "input", CANL: "bidirectional", CANH: "bidirectional", RS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:LTC2875-S8";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V/5V, DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2021A-xxxxMD`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*4x4mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002298C.pdf
 * Keywords: LIN Transceiver regulator.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_4x4mm_P0.8mm_EP2.5x3.6mm.
 */
export class MCP2021A_xxxxMD extends Component.withPins({
  "RXD": "1",
  "CS/LWAKE": "2",
  "VREG": "3",
  "TXD": "4",
  "VSS_5": "5",
  "LBUS": "6",
  "VBB": "7",
  "~{FAULT}/TXE": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", VSS_5: "power_in", LBUS: "open_collector", VBB: "power_in", "~{FAULT}/TXE": "open_collector", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2021A-xxxxMD";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V/5V, DIP-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2021A-xxxxP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002298C.pdf
 * Keywords: LIN Transceiver regulator.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP2021A_xxxxP extends Component.withPins({
  "RXD": "1",
  "CS/LWAKE": "2",
  "VREG": "3",
  "TXD": "4",
  "VSS": "5",
  "LBUS": "6",
  "VBB": "7",
  "~{FAULT}/TXE": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "~{FAULT}/TXE": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2021A-xxxxP";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V/5V, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2021A-xxxxSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002298C.pdf
 * Keywords: LIN Transceiver regulator.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP2021A_xxxxSN extends Component.withPins({
  "RXD": "1",
  "CS/LWAKE": "2",
  "VREG": "3",
  "TXD": "4",
  "VSS": "5",
  "LBUS": "6",
  "VBB": "7",
  "~{FAULT}/TXE": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "~{FAULT}/TXE": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2021A-xxxxSN";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V/5V, DIP-14
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2022A-xxxxP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002298C.pdf
 * Keywords: LIN Transceiver regulator.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MCP2022A_xxxxP extends Component.withPins({
  "RXD": "1",
  "CS/LWAKE": "2",
  "VREG": "3",
  "TXD": "4",
  "~{RESET}": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VSS": "11",
  "LBUS": "12",
  "VBB": "13",
  "~{FAULT}/TXE": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "~{FAULT}/TXE": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2022A-xxxxP";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V/5V, SOIC-14
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2022A-xxxxSL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002298C.pdf
 * Keywords: LIN Transceiver regulator.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class MCP2022A_xxxxSL extends Component.withPins({
  "RXD": "1",
  "CS/LWAKE": "2",
  "VREG": "3",
  "TXD": "4",
  "~{RESET}": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VSS": "11",
  "LBUS": "12",
  "VBB": "13",
  "~{FAULT}/TXE": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "~{FAULT}/TXE": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2022A-xxxxSL";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V/5V, TSSOP-14
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2022A-xxxxST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002298C.pdf
 * Keywords: LIN Transceiver regulator.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MCP2022A_xxxxST extends Component.withPins({
  "RXD": "1",
  "CS/LWAKE": "2",
  "VREG": "3",
  "TXD": "4",
  "~{RESET}": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VSS": "11",
  "LBUS": "12",
  "VBB": "13",
  "~{FAULT}/TXE": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", NC_10: "no_connect", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "~{FAULT}/TXE": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2022A-xxxxST";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V, QFN-20
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2050-330-EMQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22299B.pdf
 * Keywords: LIN transceiver regulator.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 */
export class MCP2050_330_EMQ extends Component.withPins({
  "RXD": "1",
  "CS/LWAKE": "2",
  "VREG": "3",
  "TXD": "4",
  "~{RESET}": "5",
  "NC_6": "6",
  "LBUS": "7",
  "VSS": "8",
  "NC_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "VBB": "12",
  "FAULT/TXE": "13",
  "WWDTSELECT": "14",
  "~{WWDTTRIG}": "15",
  "NC_16": "16",
  "~{WWDTRESET}": "17",
  "VBAT_RATIO": "18",
  "NC_19": "19",
  "NC_20": "20",
  "PAD": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC_6: "no_connect", LBUS: "open_collector", VSS: "power_in", NC_9: "no_connect", NC_10: "no_connect", NC_11: "no_connect", VBB: "power_in", "FAULT/TXE": "open_collector", WWDTSELECT: "input", "~{WWDTTRIG}": "input", NC_16: "no_connect", "~{WWDTRESET}": "output", VBAT_RATIO: "output", NC_19: "no_connect", NC_20: "no_connect", PAD: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2050-330-EMQ";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V, PDIP
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2050-330-EP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22299B.pdf
 * Keywords: LIN transceiver regulator.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MCP2050_330_EP extends Component.withPins({
  "VBAT_RATIO": "1",
  "RXD": "2",
  "CS/LWAKE": "3",
  "VREG": "4",
  "TXD": "5",
  "~{RESET}": "6",
  "NC": "7",
  "VSS": "8",
  "LBUS": "9",
  "VBB": "10",
  "FAULT/TXE": "11",
  "WWDTSELECT": "12",
  "~{WWDTTRIG}": "13",
  "~{WWDTRESET}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT_RATIO: "output", RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC: "no_connect", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "FAULT/TXE": "open_collector", WWDTSELECT: "input", "~{WWDTTRIG}": "input", "~{WWDTRESET}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2050-330-EP";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 3.3V, SOIC-14
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2050-330-ESL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22299B.pdf
 * Keywords: LIN transceiver regulator.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class MCP2050_330_ESL extends Component.withPins({
  "VBAT_RATIO": "1",
  "RXD": "2",
  "CS/LWAKE": "3",
  "VREG": "4",
  "TXD": "5",
  "~{RESET}": "6",
  "NC": "7",
  "VSS": "8",
  "LBUS": "9",
  "VBB": "10",
  "FAULT/TXE": "11",
  "WWDTSELECT": "12",
  "~{WWDTTRIG}": "13",
  "~{WWDTRESET}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT_RATIO: "output", RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC: "no_connect", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "FAULT/TXE": "open_collector", WWDTSELECT: "input", "~{WWDTTRIG}": "input", "~{WWDTRESET}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2050-330-ESL";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 5V, QFN-20
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2050-500-EMQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22299B.pdf
 * Keywords: LIN transceiver regulator.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 */
export class MCP2050_500_EMQ extends Component.withPins({
  "RXD": "1",
  "CS/LWAKE": "2",
  "VREG": "3",
  "TXD": "4",
  "~{RESET}": "5",
  "NC_6": "6",
  "LBUS": "7",
  "VSS": "8",
  "NC_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "VBB": "12",
  "FAULT/TXE": "13",
  "WWDTSELECT": "14",
  "~{WWDTTRIG}": "15",
  "NC_16": "16",
  "~{WWDTRESET}": "17",
  "VBAT_RATIO": "18",
  "NC_19": "19",
  "NC_20": "20",
  "PAD": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC_6: "no_connect", LBUS: "open_collector", VSS: "power_in", NC_9: "no_connect", NC_10: "no_connect", NC_11: "no_connect", VBB: "power_in", "FAULT/TXE": "open_collector", WWDTSELECT: "input", "~{WWDTTRIG}": "input", NC_16: "no_connect", "~{WWDTRESET}": "output", VBAT_RATIO: "output", NC_19: "no_connect", NC_20: "no_connect", PAD: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2050-500-EMQ";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 5V, PDIP
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2050-500-EP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22299B.pdf
 * Keywords: LIN transceiver regulator.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MCP2050_500_EP extends Component.withPins({
  "VBAT_RATIO": "1",
  "RXD": "2",
  "CS/LWAKE": "3",
  "VREG": "4",
  "TXD": "5",
  "~{RESET}": "6",
  "NC": "7",
  "VSS": "8",
  "LBUS": "9",
  "VBB": "10",
  "FAULT/TXE": "11",
  "WWDTSELECT": "12",
  "~{WWDTTRIG}": "13",
  "~{WWDTRESET}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT_RATIO: "output", RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC: "no_connect", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "FAULT/TXE": "open_collector", WWDTSELECT: "input", "~{WWDTTRIG}": "input", "~{WWDTRESET}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2050-500-EP";
  override referencePrefix = "U";
}

/**
 * LIN Transceiver with Voltage Regulator, 5V, SOIC-14
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2050-500-ESL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22299B.pdf
 * Keywords: LIN transceiver regulator.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class MCP2050_500_ESL extends Component.withPins({
  "VBAT_RATIO": "1",
  "RXD": "2",
  "CS/LWAKE": "3",
  "VREG": "4",
  "TXD": "5",
  "~{RESET}": "6",
  "NC": "7",
  "VSS": "8",
  "LBUS": "9",
  "VBB": "10",
  "FAULT/TXE": "11",
  "WWDTSELECT": "12",
  "~{WWDTTRIG}": "13",
  "~{WWDTRESET}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT_RATIO: "output", RXD: "output", "CS/LWAKE": "input", VREG: "power_out", TXD: "input", "~{RESET}": "output", NC: "no_connect", VSS: "power_in", LBUS: "open_collector", VBB: "power_in", "FAULT/TXE": "open_collector", WWDTSELECT: "input", "~{WWDTTRIG}": "input", "~{WWDTRESET}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2050-500-ESL";
  override referencePrefix = "U";
}

/**
 * Stand-Alone CAN Controller with SPI Interface, SOIC-18
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2515-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21801e.pdf
 * Keywords: CAN Controller SPI.
 * Default footprint: Package_SO:SOIC-18W_7.5x11.6mm_P1.27mm.
 */
export class MCP2515_xSO extends Component.withPins({
  "TXCAN": "1",
  "RXCAN": "2",
  "CLKOUT/SOF": "3",
  "~{TX0RTS}": "4",
  "~{TX1RTS}": "5",
  "~{TX2RTS}": "6",
  "OSC2": "7",
  "OSC1": "8",
  "VSS": "9",
  "~{RX1BF}": "10",
  "~{RX0BF}": "11",
  "~{INT}": "12",
  "SCK": "13",
  "SI": "14",
  "SO": "15",
  "~{CS}": "16",
  "~{RESET}": "17",
  "VDD": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXCAN: "output", RXCAN: "input", "CLKOUT/SOF": "output", "~{TX0RTS}": "input", "~{TX1RTS}": "input", "~{TX2RTS}": "input", OSC2: "output", OSC1: "input", VSS: "power_in", "~{RX1BF}": "output", "~{RX0BF}": "output", "~{INT}": "output", SCK: "input", SI: "input", SO: "output", "~{CS}": "input", "~{RESET}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2515-xSO";
  override referencePrefix = "U";
}

/**
 * Stand-Alone CAN Controller with SPI Interface, TSSOP-20
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2515-xST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21801e.pdf
 * Keywords: CAN Controller SPI.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MCP2515_xST extends Component.withPins({
  "TXCAN": "1",
  "RXCAN": "2",
  "CLKOUT/SOF": "3",
  "~{TX0RTS}": "4",
  "~{TX1RTS}": "5",
  "NC_6": "6",
  "~{TX2RTS}": "7",
  "OSC2": "8",
  "OSC1": "9",
  "VSS": "10",
  "~{RX1BF}": "11",
  "~{RX0BF}": "12",
  "~{INT}": "13",
  "SCK": "14",
  "NC_15": "15",
  "SI": "16",
  "SO": "17",
  "~{CS}": "18",
  "~{RESET}": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXCAN: "output", RXCAN: "input", "CLKOUT/SOF": "output", "~{TX0RTS}": "input", "~{TX1RTS}": "input", NC_6: "no_connect", "~{TX2RTS}": "input", OSC2: "output", OSC1: "input", VSS: "power_in", "~{RX1BF}": "output", "~{RX0BF}": "output", "~{INT}": "output", SCK: "input", NC_15: "no_connect", SI: "input", SO: "output", "~{CS}": "input", "~{RESET}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2515-xST";
  override referencePrefix = "U";
}

/**
 * External CAN FD Controller with SPI Interface, VDFN-14
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2517FD-xJHA`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x4.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MCP2517FD-External-CAN-FD-Controller-with-SPI-Interface-20005688B.pdf
 * Keywords: CAN FD Controller SPI.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4.5mm_P0.65mm_EP1.65x4.25mm.
 */
export class MCP2517FD_xJHA extends Component.withPins({
  "TXCAN": "1",
  "RXCAN": "2",
  "CLKO/SOF": "3",
  "~{INT}": "4",
  "OSC2": "5",
  "OSC1": "6",
  "VSS_7": "7",
  "~{INT1}/GPIO1": "8",
  "~{INT0}/GPIO0/XSTBY": "9",
  "SCK": "10",
  "SDI": "11",
  "SDO": "12",
  "~{CS}": "13",
  "VDD": "14",
  "VSS_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXCAN: "output", RXCAN: "input", "CLKO/SOF": "output", "~{INT}": "output", OSC2: "output", OSC1: "input", VSS_7: "power_in", "~{INT1}/GPIO1": "bidirectional", "~{INT0}/GPIO0/XSTBY": "bidirectional", SCK: "input", SDI: "input", SDO: "output", "~{CS}": "input", VDD: "power_in", VSS_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2517FD-xJHA";
  override referencePrefix = "U";
}

/**
 * External CAN FD Controller with SPI Interface, SOIC-14
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2517FD-xSL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MCP2517FD-External-CAN-FD-Controller-with-SPI-Interface-20005688B.pdf
 * Keywords: CAN FD Controller SPI.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class MCP2517FD_xSL extends Component.withPins({
  "TXCAN": "1",
  "RXCAN": "2",
  "CLKO/SOF": "3",
  "~{INT}": "4",
  "OSC2": "5",
  "OSC1": "6",
  "VSS": "7",
  "~{INT1}/GPIO1": "8",
  "~{INT0}/GPIO0/XSTBY": "9",
  "SCK": "10",
  "SDI": "11",
  "SDO": "12",
  "~{CS}": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXCAN: "output", RXCAN: "input", "CLKO/SOF": "output", "~{INT}": "output", OSC2: "output", OSC1: "input", VSS: "power_in", "~{INT1}/GPIO1": "bidirectional", "~{INT0}/GPIO0/XSTBY": "bidirectional", SCK: "input", SDI: "input", SDO: "output", "~{CS}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2517FD-xSL";
  override referencePrefix = "U";
}

/**
 * External CAN FD Controller with Integrated Transceiver, VQFN-28
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP251863T-E-9PX`. Reference prefix: `U`.
 * Footprint filters: VQFN*5x5mm*P0.5mm*.
 * @see https://cz.mouser.com/datasheet/2/268/MCP251863_External_CAN_FD_Controller_with_Integrat-3442054.pdf
 * Keywords: CAN FD Controller Transceiver SPI.
 * Default footprint: Package_DFN_QFN:VQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 */
export class MCP251863T_E_9PX extends Component.withPins({
  "RXCAN": "1",
  "CLKO": "2",
  "~{INT}": "3",
  "OSC2": "4",
  "OSC1": "5",
  "NC_6": "6",
  "VSS": "7",
  "~{INT1}": "8",
  "~{INT0}": "9",
  "GND": "10",
  "RXD": "11",
  "NC_12": "12",
  "VCC": "13",
  "VIO": "14",
  "NC_15": "15",
  "CANL": "16",
  "CANH": "17",
  "STBY": "18",
  "NC_19": "19",
  "TXD": "20",
  "NC_21": "21",
  "SCK": "22",
  "SDI": "23",
  "SDO": "24",
  "~{CS}": "25",
  "VDD": "26",
  "TXCAN": "28",
  "NC_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXCAN: "input", CLKO: "output", "~{INT}": "output", OSC2: "output", OSC1: "input", NC_6: "no_connect", VSS: "power_in", "~{INT1}": "output", "~{INT0}": "output", GND: "power_in", RXD: "output", NC_12: "no_connect", VCC: "power_in", VIO: "power_in", NC_15: "no_connect", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", NC_19: "no_connect", TXD: "output", NC_21: "no_connect", SCK: "input", SDI: "input", SDO: "output", "~{CS}": "input", VDD: "power_in", TXCAN: "output", NC_29: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP251863T-E-9PX";
  override referencePrefix = "U";
}

/**
 * External CAN FD Controller with Integrated Transceiver, SSOP-28
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP251863T-H-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://cz.mouser.com/datasheet/2/268/MCP251863_External_CAN_FD_Controller_with_Integrat-3442054.pdf
 * Keywords: CAN FD Controller Transceiver SPI.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class MCP251863T_H_SS extends Component.withPins({
  "VIO": "1",
  "NC_2": "2",
  "CANL": "3",
  "CANH": "4",
  "STBY": "5",
  "~{INT1}": "6",
  "~{INT0}": "7",
  "NC_8": "8",
  "SCK": "9",
  "SDI": "10",
  "SDO": "11",
  "NC_12": "12",
  "~{CS}": "13",
  "VDD": "14",
  "TXCAN": "15",
  "RXCAN": "16",
  "NC_17": "17",
  "CLKO": "18",
  "~{INT}": "19",
  "OSC2": "20",
  "OSC1": "21",
  "VSS": "22",
  "TXD": "23",
  "GND": "24",
  "VCC": "25",
  "NC_26": "26",
  "NC_27": "27",
  "RXD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIO: "power_in", NC_2: "no_connect", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", "~{INT1}": "output", "~{INT0}": "output", NC_8: "no_connect", SCK: "input", SDI: "input", SDO: "output", NC_12: "no_connect", "~{CS}": "input", VDD: "power_in", TXCAN: "output", RXCAN: "input", NC_17: "no_connect", CLKO: "output", "~{INT}": "output", OSC2: "output", OSC1: "input", VSS: "power_in", TXD: "output", GND: "power_in", VCC: "power_in", NC_26: "no_connect", NC_27: "no_connect", RXD: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP251863T-H-SS";
  override referencePrefix = "U";
}

/**
 * CAN FD Controller with SPI Interface, up to 8 Mbps, Vdd 2.7..5.5V,  functional safety ready, VDFN-14
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2518FD-xQBB`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x4.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/External-CAN-FD-Controller-with-SPI-Interface-DS20006027B.pdf
 * Keywords: microchip.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4.5mm_P0.65mm_EP1.65x4.25mm.
 */
export class MCP2518FD_xQBB extends Component.withPins({
  "TXCAN": "1",
  "RXCAN": "2",
  "CLKO/SOF": "3",
  "~{INT}": "4",
  "OSC2": "5",
  "OSC1": "6",
  "VSS_7": "7",
  "~{INT1}/GPIO1": "8",
  "~{INT0}/GPIO0/XSTBY": "9",
  "SCK": "10",
  "SDI": "11",
  "SDO": "12",
  "~{CS}": "13",
  "VDD": "14",
  "VSS_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXCAN: "output", RXCAN: "input", "CLKO/SOF": "output", "~{INT}": "output", OSC2: "output", OSC1: "input", VSS_7: "power_in", "~{INT1}/GPIO1": "bidirectional", "~{INT0}/GPIO0/XSTBY": "bidirectional", SCK: "input", SDI: "input", SDO: "output", "~{CS}": "input", VDD: "power_in", VSS_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2518FD-xQBB";
  override referencePrefix = "U";
}

/**
 * CAN-FD Transceiver, Wake-Up on CAN activity, 8Mbps, 5V supply, STBY pin, 3x3 DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2542FDxMF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP2542FD-4FD-MCP2542WFD-4WFD-Data-Sheet20005514B.pdf
 * Keywords: CAN transceiver.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MCP2542FDxMF extends Component.withPins({
  "TXD": "1",
  "VSS_2": "2",
  "VDD": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS_2: "power_in", VDD: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2542FDxMF";
  override referencePrefix = "U";
}

/**
 * CAN-FD Transceiver, Wake-Up on CAN Pattern, 8Mbps, 5V supply, STBY pin, 3x3 DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2542WFDxMF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP2542FD-4FD-MCP2542WFD-4WFD-Data-Sheet20005514B.pdf
 * Keywords: CAN transceiver WUP.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MCP2542WFDxMF extends Component.withPins({
  "TXD": "1",
  "VSS_2": "2",
  "VDD": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS_2: "power_in", VDD: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2542WFDxMF";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, DIP-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2551-I-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21667d.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP2551_I_P extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "Vref": "5",
  "CANL": "6",
  "CANH": "7",
  "Rs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", Vref: "power_out", CANL: "bidirectional", CANH: "bidirectional", Rs: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2551-I-P";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2551-I-SN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21667d.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP2551_I_SN extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "Vref": "5",
  "CANL": "6",
  "CANH": "7",
  "Rs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", Vref: "power_out", CANL: "bidirectional", CANH: "bidirectional", Rs: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2551-I-SN";
  override referencePrefix = "U";
}

/**
 * CAN FD Transceiver with Silent Mode, up to 8 Mbps, DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2557FD-xMF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005533A.pdf
 * Keywords: CAN FD Transceiver.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MCP2557FD_xMF extends Component.withPins({
  "TXD": "1",
  "VSS_2": "2",
  "VDD": "3",
  "RXD": "4",
  "NC": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS_2: "power_in", VDD: "power_in", RXD: "output", NC: "no_connect", CANL: "bidirectional", CANH: "bidirectional", S: "input", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2557FD-xMF";
  override referencePrefix = "U";
}

/**
 * CAN FD Transceiver with Silent Mode, up to 8 Mbps, TDFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2557FD-xMNY`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005533A.pdf
 * Keywords: CAN FD Transceiver.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.80x1.65mm.
 */
export class MCP2557FD_xMNY extends Component.withPins({
  "TXD": "1",
  "VSS_2": "2",
  "VDD": "3",
  "RXD": "4",
  "NC": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS_2: "power_in", VDD: "power_in", RXD: "output", NC: "no_connect", CANL: "bidirectional", CANH: "bidirectional", S: "input", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2557FD-xMNY";
  override referencePrefix = "U";
}

/**
 * CAN FD Transceiver with Silent Mode, up to 8 Mbps, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2557FD-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005533A.pdf
 * Keywords: CAN FD Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP2557FD_xSN extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "NC": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", NC: "no_connect", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2557FD-xSN";
  override referencePrefix = "U";
}

/**
 * CAN FD Transceiver with Silent Mode, up to 8 Mbps, DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2558FD-xMF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005533A.pdf
 * Keywords: CAN FD Transceiver.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MCP2558FD_xMF extends Component.withPins({
  "TXD": "1",
  "VSS_2": "2",
  "VDD": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS_2: "power_in", VDD: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", S: "input", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2558FD-xMF";
  override referencePrefix = "U";
}

/**
 * CAN FD Transceiver with Silent Mode, up to 8 Mbps, TDFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2558FD-xMNY`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005533A.pdf
 * Keywords: CAN FD Transceiver.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.80x1.65mm.
 */
export class MCP2558FD_xMNY extends Component.withPins({
  "TXD": "1",
  "VSS_2": "2",
  "VDD": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS_2: "power_in", VDD: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", S: "input", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2558FD-xMNY";
  override referencePrefix = "U";
}

/**
 * CAN FD Transceiver with Silent Mode, up to 8 Mbps, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2558FD-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005533A.pdf
 * Keywords: CAN FD Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP2558FD_xSN extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2558FD-xSN";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, SPLIT pin, -40C to +125C, DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2561-E-MF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MCP2561_E_MF extends Component.withPins({
  "TXD": "1",
  "VSS_2": "2",
  "VDD": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS_2: "power_in", VDD: "power_in", RXD: "output", SPLIT: "passive", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2561-E-MF";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, SPLIT pin, -40C to +125C, DIP-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2561-E-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP2561_E_P extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", SPLIT: "passive", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2561-E-P";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, SPLIT pin, -40C to +125C, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2561-E-SN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP2561_E_SN extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", SPLIT: "passive", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2561-E-SN";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, SPLIT pin, -40C to +150C, DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2561-H-MF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MCP2561_H_MF extends Component.withPins({
  "TXD": "1",
  "VSS_2": "2",
  "VDD": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS_2: "power_in", VDD: "power_in", RXD: "output", SPLIT: "passive", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2561-H-MF";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, SPLIT pin, -40C to +150C, DIP-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2561-H-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP2561_H_P extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", SPLIT: "passive", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2561-H-P";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, SPLIT pin, -40C to +150C, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2561-H-SN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP2561_H_SN extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", SPLIT: "passive", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2561-H-SN";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, Vio pin, -40C to +125C, DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2562-E-MF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MCP2562_E_MF extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "Vio": "5",
  "CANL": "6",
  "CANH": "7",
  "SHDN": "8",
  "PAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", Vio: "power_in", CANL: "bidirectional", CANH: "bidirectional", SHDN: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2562-E-MF";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, Vio pin, -40C to +125C, DIP-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2562-E-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP2562_E_P extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "Vio": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", Vio: "power_in", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2562-E-P";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, Vio pin, -40C to +125C, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2562-E-SN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP2562_E_SN extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "Vio": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", Vio: "power_in", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2562-E-SN";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, Vio pin, -40C to +150C, DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2562-H-MF`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MCP2562_H_MF extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "Vio": "5",
  "CANL": "6",
  "CANH": "7",
  "SHDN": "8",
  "PAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", Vio: "power_in", CANL: "bidirectional", CANH: "bidirectional", SHDN: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2562-H-MF";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, Vio pin, -40C to +150C, DIP-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2562-H-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP2562_H_P extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "Vio": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", Vio: "power_in", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2562-H-P";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 5V supply, Vio pin, -40C to +150C, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP2562-H-SN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25167A.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP2562_H_SN extends Component.withPins({
  "TXD": "1",
  "VSS": "2",
  "VDD": "3",
  "RXD": "4",
  "Vio": "5",
  "CANL": "6",
  "CANH": "7",
  "STBY": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", VSS: "power_in", VDD: "power_in", RXD: "output", Vio: "power_in", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP2562-H-SN";
  override referencePrefix = "U";
}

/**
 * Stand-Alone CAN Controller with SPI Interface and integated Transceiver, VQFN-28
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP25625x-x-ML`. Reference prefix: `U`.
 * Footprint filters: *QFN*6x6mm*P0.65mm*EP4.2*4.2*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/MCP25625-CAN-Controller-Data-Sheet-20005282C.pdf
 * Keywords: Microchip CAN-2.0B MCP25625-E/ML MCP25625T-E/ML.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class MCP25625x_x_ML extends Component.withPins({
  "EP": "29",
  "~{CS}": "1",
  "~{RESET}": "2",
  "V_{DD}": "3",
  "TxCAN": "4",
  "RxCAN": "5",
  "CLKOUT": "6",
  "~{Tx0RTS}": "7",
  "~{Tx1RTS}": "8",
  "~{Tx2RTS}": "9",
  "R_{XD}": "10",
  "V_{IO}": "11",
  "CANL": "12",
  "CANH": "13",
  "NC_14": "14",
  "STBY": "15",
  "T_{XD}": "16",
  "NC_17": "17",
  "V_{SS}": "18",
  "V_{DDA}": "19",
  "OSC2": "20",
  "OSC1": "21",
  "GND": "22",
  "~{Rx1BF}": "23",
  "~{Rx0BF}": "24",
  "~{INT}": "25",
  "SCK": "26",
  "SI": "27",
  "SO": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EP: "passive", "~{CS}": "input", "~{RESET}": "input", "V_{DD}": "power_in", TxCAN: "output", RxCAN: "input", CLKOUT: "output", "~{Tx0RTS}": "input", "~{Tx1RTS}": "input", "~{Tx2RTS}": "input", "R_{XD}": "output", "V_{IO}": "power_in", CANL: "bidirectional", CANH: "bidirectional", NC_14: "no_connect", STBY: "input", "T_{XD}": "input", NC_17: "no_connect", "V_{SS}": "power_in", "V_{DDA}": "power_in", OSC2: "output", OSC1: "input", GND: "power_in", "~{Rx1BF}": "output", "~{Rx0BF}": "output", "~{INT}": "output", SCK: "input", SI: "input", SO: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP25625x-x-ML";
  override referencePrefix = "U";
}

/**
 * Stand-Alone CAN Controller with SPI Interface and integated Transceiver, SSOP-28
 *
 * KiCad symbol: `Interface_CAN_LIN:MCP25625x-x-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/MCP25625-CAN-Controller-Data-Sheet-20005282C.pdf
 * Keywords: Microchip CAN-2.0B MCP25625-E/SS MCP25625T-E/SS.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class MCP25625x_x_SS extends Component.withPins({
  "V_{IO}": "1",
  "NC_2": "2",
  "CANL": "3",
  "CANH": "4",
  "STBY": "5",
  "~{Tx1RTS}": "6",
  "~{Tx2RTS}": "7",
  "OSC2": "8",
  "OSC1": "9",
  "GND": "10",
  "~{Rx1BF}": "11",
  "~{Rx0BF}": "12",
  "~{INT}": "13",
  "SCK": "14",
  "SI": "15",
  "SO": "16",
  "~{CS}": "17",
  "~{RESET}": "18",
  "V_{DD}": "19",
  "TxCAN": "20",
  "RxCAN": "21",
  "CLKOUT": "22",
  "~{Tx0RTS}": "23",
  "T_{XD}": "24",
  "NC_25": "25",
  "V_{SS}": "26",
  "V_{DDA}": "27",
  "R_{XD}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IO}": "power_in", NC_2: "no_connect", CANL: "bidirectional", CANH: "bidirectional", STBY: "input", "~{Tx1RTS}": "input", "~{Tx2RTS}": "input", OSC2: "output", OSC1: "input", GND: "power_in", "~{Rx1BF}": "output", "~{Rx0BF}": "output", "~{INT}": "output", SCK: "input", SI: "input", SO: "output", "~{CS}": "input", "~{RESET}": "input", "V_{DD}": "power_in", TxCAN: "output", RxCAN: "input", CLKOUT: "output", "~{Tx0RTS}": "input", "T_{XD}": "input", NC_25: "no_connect", "V_{SS}": "power_in", "V_{DDA}": "power_in", "R_{XD}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:MCP25625x-x-SS";
  override referencePrefix = "U";
}

/**
 * CAN Transceiver for 24V Systems, SO-8
 *
 * KiCad symbol: `Interface_CAN_LIN:PCA82C251`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA82C251.pdf
 * Keywords: BUS CAN.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class PCA82C251 extends Component.withPins({
  "TxD": "1",
  "GND": "2",
  "VCC": "3",
  "RxD": "4",
  "Vref": "5",
  "CAN-": "6",
  "CAN+": "7",
  "Rsl": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TxD: "input", GND: "power_in", VCC: "power_in", RxD: "output", Vref: "output", "CAN-": "bidirectional", "CAN+": "bidirectional", Rsl: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:PCA82C251";
  override referencePrefix = "U";
}

/**
 * CAN-FD Transceiver, 5Mbps, 5V supply, I/O compatible with 3.3V (VIO supply), high-speed / silent mode pin, WSON-8 / DFN-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SIT1057TK-3`. Reference prefix: `U`.
 * Footprint filters: *DFN*3x3mm?P0.65mm?EP1.2x2.15mm*.
 * @see http://en.sitcores.com/uploadfile/2025/0701/20250701060510540.pdf
 * Keywords: CAN-transceiver SIT1057TK/3.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.2x2.15mm.
 */
export class SIT1057TK_3 extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", S: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SIT1057TK-3";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceiver, EMC optimised, 5.0V, 1Mbps, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD1050D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65hvd1050.pdf
 * Keywords: can transceiver ti canbus.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD1050D extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VREF": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VREF: "passive", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD1050D";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceivers, 3.3V, 1Mbps, Low-Power capabilities, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD230`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65hvd230.pdf
 * Keywords: can transeiver ti low-power.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD230 extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VCC": "3",
  "R": "4",
  "Vref": "5",
  "CANL": "6",
  "CANH": "7",
  "Rs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "input", GND: "power_in", VCC: "power_in", R: "output", Vref: "output", CANL: "bidirectional", CANH: "bidirectional", Rs: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD230";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceivers, 3.3V, 1Mbps,Ultra Low-Power capabilities, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD231`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65hvd230.pdf
 * Keywords: can transeiver ti ulp low-power.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD231 extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VCC": "3",
  "R": "4",
  "Vref": "5",
  "CANL": "6",
  "CANH": "7",
  "Rs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "input", GND: "power_in", VCC: "power_in", R: "output", Vref: "output", CANL: "bidirectional", CANH: "bidirectional", Rs: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD231";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceivers, 3.3V, 1Mbps, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD232`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65hvd230.pdf
 * Keywords: can transeiver ti.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD232 extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VCC": "3",
  "R": "4",
  "NC_5": "5",
  "CANL": "6",
  "CANH": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "input", GND: "power_in", VCC: "power_in", R: "output", NC_5: "no_connect", CANL: "bidirectional", CANH: "bidirectional", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD232";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceiver, 3.3V, 1Mbps, Loopback feature, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD233`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65hvd234.pdf
 * Keywords: can transeiver ti.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD233 extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VCC": "3",
  "R": "4",
  "LBK": "5",
  "CANL": "6",
  "CANH": "7",
  "Rs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "input", GND: "power_in", VCC: "power_in", R: "output", LBK: "input", CANL: "bidirectional", CANH: "bidirectional", Rs: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD233";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceiver, 3.3V, 1Mbps, Enable feature, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD234`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65hvd234.pdf
 * Keywords: can transeiver ti.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD234 extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VCC": "3",
  "R": "4",
  "EN": "5",
  "CANL": "6",
  "CANH": "7",
  "Rs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "input", GND: "power_in", VCC: "power_in", R: "output", EN: "input", CANL: "bidirectional", CANH: "bidirectional", Rs: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD234";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceiver, 3.3V, 1Mbps, Autobaud feature, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD235`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn65hvd234.pdf
 * Keywords: can transeiver ti.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD235 extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VCC": "3",
  "R": "4",
  "AB": "5",
  "CANL": "6",
  "CANH": "7",
  "Rs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "input", GND: "power_in", VCC: "power_in", R: "output", AB: "input", CANL: "bidirectional", CANH: "bidirectional", Rs: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD235";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceiver with Fast Loop Times for Highly Loaded Networks, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD255D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn65hvd257.pdf
 * Keywords: can transceiver ti canbus 5.0V 1Mbps SOIC-8.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD255D extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "NC": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", NC: "no_connect", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD255D";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceiver with Fast Loop Times for Highly Loaded Networks, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD256D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn65hvd257.pdf
 * Keywords: can transceiver ti canbus 5.0V 1Mbps SOIC-8.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD256D extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VRXD": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VRXD: "power_in", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD256D";
  override referencePrefix = "U";
}

/**
 * CAN Bus Transceiver with Fast Loop Times for Highly Loaded Networks, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:SN65HVD257D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn65hvd257.pdf
 * Keywords: can transceiver ti canbus 5.0V 1Mbps SOIC-8.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SN65HVD257D extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "FAULT": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", FAULT: "open_collector", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:SN65HVD257D";
  override referencePrefix = "U";
}

/**
 * High-speed CAN-FD Transceiver with Sleep Mode, SOIC-14
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN1043xDxQ1`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan1043-q1.pdf
 * Keywords: CAN FD High Speed CAN Transceiver Sleep VIO.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class TCAN1043xDxQ1 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "EN": "6",
  "INH": "7",
  "~{FAULT}": "8",
  "WAKE": "9",
  "VSUP": "10",
  "NC": "11",
  "CANL": "12",
  "CANH": "13",
  "~{STB}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", EN: "input", INH: "open_emitter", "~{FAULT}": "output", WAKE: "input", VSUP: "power_in", NC: "no_connect", CANL: "bidirectional", CANH: "bidirectional", "~{STB}": "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN1043xDxQ1";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 3.3V supply, silent mode, shutdown mode, SOT-23-8/SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN330`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan337.pdf
 * Keywords: High-Speed CAN Transceiver.
 */
export class TCAN330 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "SHDN": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "tri_state", SHDN: "input", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN330";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver with CAN FD, 5Mbps, 3.3V supply, silent mode, shutdown mode, SOT-23-8/SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN330G`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan337.pdf
 * Keywords: High-Speed CAN Transceiver.
 */
export class TCAN330G extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "SHDN": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "tri_state", SHDN: "input", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN330G";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 3.3V supply, SOT-23-8/SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN332`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan337.pdf
 * Keywords: High-Speed CAN Transceiver.
 */
export class TCAN332 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "NC_5": "5",
  "CANL": "6",
  "CANH": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "tri_state", NC_5: "no_connect", CANL: "bidirectional", CANH: "bidirectional", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN332";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver with CAN FD, 5Mbps, 3.3V supply, SOT-23-8/SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN332G`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan337.pdf
 * Keywords: High-Speed CAN Transceiver.
 */
export class TCAN332G extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "NC_5": "5",
  "CANL": "6",
  "CANH": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "tri_state", NC_5: "no_connect", CANL: "bidirectional", CANH: "bidirectional", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN332G";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 3.3V supply, low power standby mode, shutdown mode, SOT-23-8/SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN334`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan337.pdf
 * Keywords: High-Speed CAN Transceiver.
 */
export class TCAN334 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "SHDN": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "tri_state", SHDN: "input", CANL: "bidirectional", CANH: "bidirectional", STB: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN334";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver with CAN FD, 5Mbps, 3.3V supply, low power standby mode, shutdown mode, SOT-23-8/SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN334G`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan337.pdf
 * Keywords: High-Speed CAN Transceiver.
 */
export class TCAN334G extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "SHDN": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "tri_state", SHDN: "input", CANL: "bidirectional", CANH: "bidirectional", STB: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN334G";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, 1Mbps, 3.3V supply, silent mode, fault output, SOT-23-8/SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN337`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan337.pdf
 * Keywords: High-Speed CAN Transceiver.
 */
export class TCAN337 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "FAULT": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "tri_state", FAULT: "open_collector", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN337";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver with CAN FD, 5Mbps, 3.3V supply, silent mode, fault output, SOT-23-8/SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN337G`. Reference prefix: `U`.
 * Footprint filters: *TSOT?23*, *SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tcan337.pdf
 * Keywords: High-Speed CAN Transceiver.
 */
export class TCAN337G extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "FAULT": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "tri_state", FAULT: "open_collector", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN337G";
  override referencePrefix = "U";
}

/**
 * CAN-FD controller with integrated transceiver, 5Mbps, 3.3V to 5V supply, SPI interface, VQFN-20
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN4550RGY`. Reference prefix: `U`.
 * Footprint filters: *RGY*PVQFN*.
 * @see https://www.ti.com/lit/ds/symlink/tcan4550.pdf
 * Keywords: M_CAN.
 * Default footprint: Package_DFN_QFN:Texas_RGY_R-PVQFN-N20_EP2.05x3.05mm.
 */
export class TCAN4550RGY extends Component.withPins({
  "GPO2": "9",
  "CANL": "10",
  "CANH": "11",
  "WAKE": "12",
  "GND_13": "13",
  "V_{SUP}": "14",
  "INH": "15",
  "V_{CCOUT}": "16",
  "V_{IO}": "17",
  "FLTR": "18",
  "RST": "19",
  "OSC2": "20",
  "GND_21": "21",
  "OSC1": "1",
  "~{WKRQ}": "2",
  "GPO1": "3",
  "SCLK": "4",
  "SDI": "5",
  "SDO": "6",
  "~{CS}": "7",
  "~{INT}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPO2: "output", CANL: "bidirectional", CANH: "bidirectional", WAKE: "input", GND_13: "power_in", "V_{SUP}": "power_in", INH: "output", "V_{CCOUT}": "power_out", "V_{IO}": "power_out", FLTR: "output", RST: "input", OSC2: "output", GND_21: "passive", OSC1: "input", "~{WKRQ}": "output", GPO1: "output", SCLK: "input", SDI: "input", SDO: "output", "~{CS}": "input", "~{INT}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN4550RGY";
  override referencePrefix = "U";
}

/**
 * CAN-FD controller with integrated transceiver, 5Mbps, 3.3V to 5V supply, SPI interface, VQFN-20
 *
 * KiCad symbol: `Interface_CAN_LIN:TCAN4551RGYRQ1`. Reference prefix: `U`.
 * Footprint filters: *RGY*PVQFN*.
 * @see https://www.ti.com/lit/ds/symlink/tcan4551-q1.pdf
 * Keywords: M_CAN.
 * Default footprint: Package_DFN_QFN:Texas_RGY_R-PVQFN-N20_EP2.05x3.05mm.
 */
export class TCAN4551RGYRQ1 extends Component.withPins({
  "GPO2": "9",
  "CANL": "10",
  "CANH": "11",
  "WAKE": "12",
  "GND_13": "13",
  "V_{SUP}": "14",
  "INH": "15",
  "V_{CCFLTR}": "16",
  "V_{IO}": "17",
  "FLTR": "18",
  "RST": "19",
  "OSC2": "20",
  "GND_21": "21",
  "OSC1": "1",
  "~{WKRQ}": "2",
  "GPO1": "3",
  "SCLK": "4",
  "SDI": "5",
  "SDO": "6",
  "~{CS}": "7",
  "~{INT}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPO2: "output", CANL: "bidirectional", CANH: "bidirectional", WAKE: "input", GND_13: "power_in", "V_{SUP}": "power_in", INH: "output", "V_{CCFLTR}": "output", "V_{IO}": "power_out", FLTR: "output", RST: "input", OSC2: "output", GND_21: "passive", OSC1: "input", "~{WKRQ}": "output", GPO1: "output", SCLK: "input", SDI: "input", SDO: "output", "~{CS}": "input", "~{INT}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TCAN4551RGYRQ1";
  override referencePrefix = "U";
}

/**
 * LIN 2.2A / SAE J2602 transceiver, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1021xT`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1021.pdf
 * Keywords: NXP TJA1021T/10 TJA1021AT TJA1021BT.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1021xT extends Component.withPins({
  "RXD": "1",
  "~{SLP}": "2",
  "~{WAKE}": "3",
  "TXD": "4",
  "GND": "5",
  "LIN": "6",
  "VBAT": "7",
  "INH": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "open_collector", "~{SLP}": "input", "~{WAKE}": "input", TXD: "input", GND: "power_in", LIN: "bidirectional", VBAT: "power_in", INH: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1021xT";
  override referencePrefix = "U";
}

/**
 * LIN 2.2A / SAE J2602 transceiver, VSON-8 (DFN-8)
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1021xTK`. Reference prefix: `U`.
 * Footprint filters: *VSON*3x3mm*P0.65mm*EP1.6*x2.4*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1021.pdf
 * Keywords: NXP TJA1021TK/10 TJA1021ATK TJA1021BTK.
 * Default footprint: Package_SON:HVSON-8-1EP_3x3mm_P0.65mm_EP1.6x2.4mm.
 */
export class TJA1021xTK extends Component.withPins({
  "RXD": "1",
  "~{SLP}": "2",
  "~{WAKE}": "3",
  "TXD": "4",
  "GND_5": "5",
  "LIN": "6",
  "VBAT": "7",
  "INH": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "open_collector", "~{SLP}": "input", "~{WAKE}": "input", TXD: "input", GND_5: "power_in", LIN: "bidirectional", VBAT: "power_in", INH: "output", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1021xTK";
  override referencePrefix = "U";
}

/**
 * LIN 2.2A/SAE J2602 transceiver with TXD dominant timeout, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1029T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TJA1029.pdf
 * Keywords: LIN 2.2A/SAE J2602 Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1029T extends Component.withPins({
  "RXD": "1",
  "~{SLP}": "2",
  "NC_3": "3",
  "TXD": "4",
  "GND": "5",
  "LIN": "6",
  "VBAT": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "open_collector", "~{SLP}": "input", NC_3: "no_connect", TXD: "input", GND: "power_in", LIN: "bidirectional", VBAT: "power_in", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1029T";
  override referencePrefix = "U";
}

/**
 * LIN 2.2A / SAE J2602 transceiver with TXD dominant timeout, VSON-8 (DFN-8)
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1029TK`. Reference prefix: `U`.
 * Footprint filters: *VSON*3x3mm*P0.65mm*EP1.6*x2.4*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1029.pdf
 * Keywords: NXP.
 * Default footprint: Package_SON:HVSON-8-1EP_3x3mm_P0.65mm_EP1.6x2.4mm.
 */
export class TJA1029TK extends Component.withPins({
  "RXD": "1",
  "~{SLP}": "2",
  "NC_3": "3",
  "TXD": "4",
  "GND_5": "5",
  "LIN": "6",
  "VBAT": "7",
  "NC_8": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXD: "open_collector", "~{SLP}": "input", NC_3: "no_connect", TXD: "input", GND_5: "power_in", LIN: "bidirectional", VBAT: "power_in", NC_8: "no_connect", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1029TK";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, standby mode, split pin, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1049T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TJA1049.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1049T extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", SPLIT: "power_out", CANL: "bidirectional", CANH: "bidirectional", STB: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1049T";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, standby mode, split pin, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1042T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TJA1042.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1042T extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", SPLIT: "power_out", CANL: "bidirectional", CANH: "bidirectional", STB: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1042T";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, separate VIO, standby mode, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1042T-3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TJA1042.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1042T_3 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", STB: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1042T-3";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, separate VIO, standby mode, VSON-8 (DFN-8)
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1049TK-3`. Reference prefix: `U`.
 * Footprint filters: *VSON*3x3mm*P0.65mm*EP1.6*x2.4*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1049.pdf
 * Keywords: TJA1049TK/3.
 * Default footprint: Package_SON:HVSON-8-1EP_3x3mm_P0.65mm_EP1.6x2.4mm.
 */
export class TJA1049TK_3 extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", STB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1049TK-3";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, separate VIO, standby mode, VSON-8 (DFN-8)
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1042TK-3`. Reference prefix: `U`.
 * Footprint filters: *VSON*3x3mm*P0.65mm*EP1.6*x2.4*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1042.pdf
 * Keywords: TJA1042TK/3.
 * Default footprint: Package_SON:HVSON-8-1EP_3x3mm_P0.65mm_EP1.6x2.4mm.
 */
export class TJA1042TK_3 extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", STB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1042TK-3";
  override referencePrefix = "U";
}

/**
 * High-speed CAN-FD Transceiver with Sleep Mode, SOIC-14
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1043T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1043.pdf
 * Keywords: CAN FD High Speed CAN Transceiver Sleep Split-Pin VIO.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class TJA1043T extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "EN": "6",
  "INH": "7",
  "~{ERR}": "8",
  "WAKE": "9",
  "VBAT": "10",
  "SPLIT": "11",
  "CANL": "12",
  "CANH": "13",
  "~{STB}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", EN: "input", INH: "open_emitter", "~{ERR}": "output", WAKE: "input", VBAT: "power_in", SPLIT: "output", CANL: "bidirectional", CANH: "bidirectional", "~{STB}": "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1043T";
  override referencePrefix = "U";
}

/**
 * High-speed CAN-FD Transceiver with Sleep Mode, HVSON-14
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1043TK`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x4.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1043.pdf
 * Keywords: CAN FD High Speed CAN Transceiver Sleep Split-Pin VIO.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4.5mm_P0.65mm_EP1.65x4.25mm.
 */
export class TJA1043TK extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "EN": "6",
  "INH": "7",
  "~{ERR}": "8",
  "WAKE": "9",
  "VBAT": "10",
  "SPLIT": "11",
  "CANL": "12",
  "CANH": "13",
  "~{STB}": "14",
  "GND_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", EN: "input", INH: "open_emitter", "~{ERR}": "output", WAKE: "input", VBAT: "power_in", SPLIT: "output", CANL: "bidirectional", CANH: "bidirectional", "~{STB}": "input", GND_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1043TK";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, standby mode, VSON-8 (DFN-8)
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1049TK`. Reference prefix: `U`.
 * Footprint filters: *VSON*3x3mm*P0.65mm*EP1.6*x2.4*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1049.pdf
 * Keywords: NXP.
 * Default footprint: Package_SON:HVSON-8-1EP_3x3mm_P0.65mm_EP1.6x2.4mm.
 */
export class TJA1049TK extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "SPLIT": "5",
  "CANL": "6",
  "CANH": "7",
  "STB": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", SPLIT: "passive", CANL: "bidirectional", CANH: "bidirectional", STB: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1049TK";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, silent mode, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1051T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TJA1051.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1051T extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "NC": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", NC: "no_connect", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1051T";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, separate VIO, silent mode, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1051T-3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TJA1051.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1051T_3 extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1051T-3";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, enable pin, silent mode, SOIC-8
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1051T-E`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TJA1051.pdf
 * Keywords: High-Speed CAN Transceiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TJA1051T_E extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "EN": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", EN: "input", CANL: "bidirectional", CANH: "bidirectional", S: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1051T-E";
  override referencePrefix = "U";
}

/**
 * High-Speed CAN Transceiver, separate VIO, silent mode, VSON-8 (DFN-8)
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1051TK-3`. Reference prefix: `U`.
 * Footprint filters: *VSON*3x3mm*P0.65mm*EP1.6*x2.4*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1051.pdf
 * Keywords: TJA1051TK/3.
 * Default footprint: Package_SON:HVSON-8-1EP_3x3mm_P0.65mm_EP1.6x2.4mm.
 */
export class TJA1051TK_3 extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "CANL": "6",
  "CANH": "7",
  "S": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", CANL: "bidirectional", CANH: "bidirectional", S: "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1051TK-3";
  override referencePrefix = "U";
}

/**
 * Isolated CAN Transceiver 1.0kV, up to 5Mbps
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1052i-1`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1052I.pdf
 * Keywords: can transceiver isolated protected.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class TJA1052i_1 extends Component.withPins({
  "VDD1": "1",
  "GND1_2": "2",
  "TXD": "3",
  "NC_4": "4",
  "RXD": "5",
  "NC_6": "6",
  "GND1_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "GND2_10": "10",
  "VDD2_11": "11",
  "CANL": "12",
  "CANH": "13",
  "STB": "14",
  "GND2_15": "15",
  "VDD2_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", GND1_2: "power_in", TXD: "input", NC_4: "no_connect", RXD: "output", NC_6: "no_connect", GND1_7: "passive", GND1_8: "passive", GND2_9: "power_in", GND2_10: "passive", VDD2_11: "passive", CANL: "bidirectional", CANH: "bidirectional", STB: "input", GND2_15: "passive", VDD2_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1052i-1";
  override referencePrefix = "U";
}

/**
 * Isolated CAN Transceiver 2.5kV, up to 5Mbps
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1052i-2`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1052I.pdf
 * Keywords: can transceiver isolated protected.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class TJA1052i_2 extends Component.withPins({
  "VDD1": "1",
  "GND1_2": "2",
  "TXD": "3",
  "NC_4": "4",
  "RXD": "5",
  "NC_6": "6",
  "GND1_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "GND2_10": "10",
  "VDD2_11": "11",
  "CANL": "12",
  "CANH": "13",
  "STB": "14",
  "GND2_15": "15",
  "VDD2_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", GND1_2: "power_in", TXD: "input", NC_4: "no_connect", RXD: "output", NC_6: "no_connect", GND1_7: "passive", GND1_8: "passive", GND2_9: "power_in", GND2_10: "passive", VDD2_11: "passive", CANL: "bidirectional", CANH: "bidirectional", STB: "input", GND2_15: "passive", VDD2_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1052i-2";
  override referencePrefix = "U";
}

/**
 * Isolated CAN Transceiver 5.0kV, up to 5Mbps
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1052i-5`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1052I.pdf
 * Keywords: can transceiver isolated protected.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class TJA1052i_5 extends Component.withPins({
  "VDD1": "1",
  "GND1_2": "2",
  "TXD": "3",
  "NC_4": "4",
  "RXD": "5",
  "NC_6": "6",
  "GND1_7": "7",
  "GND1_8": "8",
  "GND2_9": "9",
  "GND2_10": "10",
  "VDD2_11": "11",
  "CANL": "12",
  "CANH": "13",
  "STB": "14",
  "GND2_15": "15",
  "VDD2_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", GND1_2: "power_in", TXD: "input", NC_4: "no_connect", RXD: "output", NC_6: "no_connect", GND1_7: "passive", GND1_8: "passive", GND2_9: "power_in", GND2_10: "passive", VDD2_11: "passive", CANL: "bidirectional", CANH: "bidirectional", STB: "input", GND2_15: "passive", VDD2_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1052i-5";
  override referencePrefix = "U";
}

/**
 * High-speed CAN transceiver for partial networking, SOIC-14
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1145T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1145.pdf
 * Keywords: CAN FD High Speed CAN Transceiver Sleep VIO Partial Networking SPI.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class TJA1145T extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "SDO": "6",
  "INH": "7",
  "SCK": "8",
  "WAKE": "9",
  "BAT": "10",
  "SDI": "11",
  "CANL": "12",
  "CANH": "13",
  "~{SCS}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", SDO: "output", INH: "open_emitter", SCK: "input", WAKE: "input", BAT: "power_in", SDI: "input", CANL: "bidirectional", CANH: "bidirectional", "~{SCS}": "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1145T";
  override referencePrefix = "U";
}

/**
 * High-speed CAN transceiver for partial networking with FD-passive function, SOIC-14
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1145T-FD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1145.pdf
 * Keywords: CAN FD High Speed CAN Transceiver Sleep VIO Partial Networking SPI.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class TJA1145T_FD extends Component.withPins({
  "TXD": "1",
  "GND": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "SDO": "6",
  "INH": "7",
  "SCK": "8",
  "WAKE": "9",
  "BAT": "10",
  "SDI": "11",
  "CANL": "12",
  "CANH": "13",
  "~{SCS}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", SDO: "output", INH: "open_emitter", SCK: "input", WAKE: "input", BAT: "power_in", SDI: "input", CANL: "bidirectional", CANH: "bidirectional", "~{SCS}": "input", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1145T-FD";
  override referencePrefix = "U";
}

/**
 * High-speed CAN transceiver for partial networking, DFN-14
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1145TK`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x4.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1145.pdf
 * Keywords: CAN FD High Speed CAN Transceiver Sleep VIO Partial Networking SPI.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4.5mm_P0.65mm_EP1.65x4.25mm.
 */
export class TJA1145TK extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "SDO": "6",
  "INH": "7",
  "SCK": "8",
  "WAKE": "9",
  "BAT": "10",
  "SDI": "11",
  "CANL": "12",
  "CANH": "13",
  "~{SCS}": "14",
  "GND_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", SDO: "output", INH: "open_emitter", SCK: "input", WAKE: "input", BAT: "power_in", SDI: "input", CANL: "bidirectional", CANH: "bidirectional", "~{SCS}": "input", GND_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1145TK";
  override referencePrefix = "U";
}

/**
 * High-speed CAN transceiver for partial networking with FD-passive function, DFN-14
 *
 * KiCad symbol: `Interface_CAN_LIN:TJA1145TK-FD`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x4.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TJA1145.pdf
 * Keywords: CAN FD High Speed CAN Transceiver Sleep VIO Partial Networking SPI.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x4.5mm_P0.65mm_EP1.65x4.25mm.
 */
export class TJA1145TK_FD extends Component.withPins({
  "TXD": "1",
  "GND_2": "2",
  "VCC": "3",
  "RXD": "4",
  "VIO": "5",
  "SDO": "6",
  "INH": "7",
  "SCK": "8",
  "WAKE": "9",
  "BAT": "10",
  "SDI": "11",
  "CANL": "12",
  "CANH": "13",
  "~{SCS}": "14",
  "GND_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXD: "input", GND_2: "power_in", VCC: "power_in", RXD: "output", VIO: "power_in", SDO: "output", INH: "open_emitter", SCK: "input", WAKE: "input", BAT: "power_in", SDI: "input", CANL: "bidirectional", CANH: "bidirectional", "~{SCS}": "input", GND_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CAN_LIN:TJA1145TK-FD";
  override referencePrefix = "U";
}
