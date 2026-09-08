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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM3053 extends Component.withPins({
  /** Physical pin 1: GND1; power_in. */
  "GND1_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND1; passive. */
  "GND1_3": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: TXD; input. */
  "TXD": "5",
  /** Physical pin 6: VIO; power_in. */
  "VIO": "6",
  /** Physical pin 7: GND1; passive. */
  "GND1_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND1; passive. */
  "GND1_9": "9",
  /** Physical pin 10: GND1; passive. */
  "GND1_10": "10",
  /** Physical pin 11: GND2; power_in. */
  "GND2_11": "11",
  /** Physical pin 12: VISOOUT; power_out. */
  "VISOOUT": "12",
  /** Physical pin 13: GND2; passive. */
  "GND2_13": "13",
  /** Physical pin 14: VREF; input. */
  "VREF": "14",
  /** Physical pin 15: CANL; bidirectional. */
  "CANL": "15",
  /** Physical pin 16: GND2; passive. */
  "GND2_16": "16",
  /** Physical pin 17: CANH; bidirectional. */
  "CANH": "17",
  /** Physical pin 18: RS; input. */
  "RS": "18",
  /** Physical pin 19: VISOIN; power_in. */
  "VISOIN": "19",
  /** Physical pin 20: GND2; passive. */
  "GND2_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADM3057ExRW extends Component.withPins({
  /** Physical pin 1: GND1; power_in. */
  "GND1_1": "1",
  /** Physical pin 2: GND1; passive. */
  "GND1_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: VIO; power_in. */
  "VIO": "4",
  /** Physical pin 5: RXD; output. */
  "RXD": "5",
  /** Physical pin 6: SILENT; input. */
  "SILENT": "6",
  /** Physical pin 7: TXD; input. */
  "TXD": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
  /** Physical pin 9: AUXIN; input. */
  "AUXIN": "9",
  /** Physical pin 10: GND1; passive. */
  "GND1_10": "10",
  /** Physical pin 11: GND2; passive. */
  "GND2_11": "11",
  /** Physical pin 12: RS; input. */
  "RS": "12",
  /** Physical pin 13: CANL; bidirectional. */
  "CANL": "13",
  /** Physical pin 14: CANH; bidirectional. */
  "CANH": "14",
  /** Physical pin 15: GND2; passive. */
  "GND2_15": "15",
  /** Physical pin 16: VISOIN; passive. */
  "VISOIN": "16",
  /** Physical pin 17: AUXOUT; output. */
  "AUXOUT": "17",
  /** Physical pin 18: GNDISO; passive. */
  "GNDISO_18": "18",
  /** Physical pin 19: VISOOUT; passive. */
  "VISOOUT": "19",
  /** Physical pin 20: GNDISO; passive. */
  "GNDISO_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1049T_3 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CA_IF1042LVS extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISO1044BD extends Component.withPins({
  /** Physical pin 1: VCC1; power_in. */
  "VCC1": "1",
  /** Physical pin 2: TXD; input. */
  "TXD": "2",
  /** Physical pin 3: RXD; output. */
  "RXD": "3",
  /** Physical pin 4: GND1; power_in. */
  "GND1": "4",
  /** Physical pin 5: CANL; bidirectional. */
  "CANL": "5",
  /** Physical pin 6: CANH; bidirectional. */
  "CANH": "6",
  /** Physical pin 7: GND2; power_in. */
  "GND2": "7",
  /** Physical pin 8: VCC2; power_in. */
  "VCC2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISO1050DUB extends Component.withPins({
  /** Physical pin 1: VCC1; power_in. */
  "VCC1": "1",
  /** Physical pin 2: RXD; output. */
  "RXD": "2",
  /** Physical pin 3: TXD; input. */
  "TXD": "3",
  /** Physical pin 4: GND1; power_in. */
  "GND1": "4",
  /** Physical pin 5: GND2; power_in. */
  "GND2": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: VCC2; power_in. */
  "VCC2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISOW1044 extends Component.withPins({
  /** Physical pin 1: VIO; power_in. */
  "VIO": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: TXD; input. */
  "TXD": "3",
  /** Physical pin 4: STB; input. */
  "STB": "4",
  /** Physical pin 5: RXD; output. */
  "RXD": "5",
  /** Physical pin 6: GNDIO; power_in. */
  "GNDIO": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: EN/FLT; input. */
  "EN/FLT": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: GND1; power_in. */
  "GND1": "10",
  /** Physical pin 11: GND2; power_out. */
  "GND2": "11",
  /** Physical pin 12: VISOOUT; power_out. */
  "VISOOUT": "12",
  /** Physical pin 13: VSIN; power_in. */
  "VSIN": "13",
  /** Physical pin 14: OUT; output. */
  "OUT": "14",
  /** Physical pin 15: GISOIN; power_in. */
  "GISOIN_15": "15",
  /** Physical pin 16: GISOIN; passive. */
  "GISOIN_16": "16",
  /** Physical pin 17: GISOIN; passive. */
  "GISOIN_17": "17",
  /** Physical pin 18: CANL; bidirectional. */
  "CANL": "18",
  /** Physical pin 19: CANH; bidirectional. */
  "CANH": "19",
  /** Physical pin 20: VISOIN; power_in. */
  "VISOIN": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2875_DD extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; input. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: RS; input. */
  "RS": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2875_S8 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; input. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: RS; input. */
  "RS": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2021A_xxxxMD extends Component.withPins({
  /** Physical pin 1: RXD; output. */
  "RXD": "1",
  /** Physical pin 2: CS/LWAKE; input. */
  "CS/LWAKE": "2",
  /** Physical pin 3: VREG; power_out. */
  "VREG": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS_5": "5",
  /** Physical pin 6: LBUS; open_collector. */
  "LBUS": "6",
  /** Physical pin 7: VBB; power_in. */
  "VBB": "7",
  /** Physical pin 8: ~{FAULT}/TXE; open_collector. */
  "~{FAULT}/TXE": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2021A_xxxxP extends Component.withPins({
  /** Physical pin 1: RXD; output. */
  "RXD": "1",
  /** Physical pin 2: CS/LWAKE; input. */
  "CS/LWAKE": "2",
  /** Physical pin 3: VREG; power_out. */
  "VREG": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: LBUS; open_collector. */
  "LBUS": "6",
  /** Physical pin 7: VBB; power_in. */
  "VBB": "7",
  /** Physical pin 8: ~{FAULT}/TXE; open_collector. */
  "~{FAULT}/TXE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2021A_xxxxSN extends Component.withPins({
  /** Physical pin 1: RXD; output. */
  "RXD": "1",
  /** Physical pin 2: CS/LWAKE; input. */
  "CS/LWAKE": "2",
  /** Physical pin 3: VREG; power_out. */
  "VREG": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: LBUS; open_collector. */
  "LBUS": "6",
  /** Physical pin 7: VBB; power_in. */
  "VBB": "7",
  /** Physical pin 8: ~{FAULT}/TXE; open_collector. */
  "~{FAULT}/TXE": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2022A_xxxxP extends Component.withPins({
  /** Physical pin 1: RXD; output. */
  "RXD": "1",
  /** Physical pin 2: CS/LWAKE; input. */
  "CS/LWAKE": "2",
  /** Physical pin 3: VREG; power_out. */
  "VREG": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: ~{RESET}; output. */
  "~{RESET}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS": "11",
  /** Physical pin 12: LBUS; open_collector. */
  "LBUS": "12",
  /** Physical pin 13: VBB; power_in. */
  "VBB": "13",
  /** Physical pin 14: ~{FAULT}/TXE; open_collector. */
  "~{FAULT}/TXE": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2022A_xxxxSL extends Component.withPins({
  /** Physical pin 1: RXD; output. */
  "RXD": "1",
  /** Physical pin 2: CS/LWAKE; input. */
  "CS/LWAKE": "2",
  /** Physical pin 3: VREG; power_out. */
  "VREG": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: ~{RESET}; output. */
  "~{RESET}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS": "11",
  /** Physical pin 12: LBUS; open_collector. */
  "LBUS": "12",
  /** Physical pin 13: VBB; power_in. */
  "VBB": "13",
  /** Physical pin 14: ~{FAULT}/TXE; open_collector. */
  "~{FAULT}/TXE": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2022A_xxxxST extends Component.withPins({
  /** Physical pin 1: RXD; output. */
  "RXD": "1",
  /** Physical pin 2: CS/LWAKE; input. */
  "CS/LWAKE": "2",
  /** Physical pin 3: VREG; power_out. */
  "VREG": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: ~{RESET}; output. */
  "~{RESET}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS": "11",
  /** Physical pin 12: LBUS; open_collector. */
  "LBUS": "12",
  /** Physical pin 13: VBB; power_in. */
  "VBB": "13",
  /** Physical pin 14: ~{FAULT}/TXE; open_collector. */
  "~{FAULT}/TXE": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2050_330_EMQ extends Component.withPins({
  /** Physical pin 1: RXD; output. */
  "RXD": "1",
  /** Physical pin 2: CS/LWAKE; input. */
  "CS/LWAKE": "2",
  /** Physical pin 3: VREG; power_out. */
  "VREG": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: ~{RESET}; output. */
  "~{RESET}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: LBUS; open_collector. */
  "LBUS": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: VBB; power_in. */
  "VBB": "12",
  /** Physical pin 13: FAULT/TXE; open_collector. */
  "FAULT/TXE": "13",
  /** Physical pin 14: WWDTSELECT; input. */
  "WWDTSELECT": "14",
  /** Physical pin 15: ~{WWDTTRIG}; input. */
  "~{WWDTTRIG}": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: ~{WWDTRESET}; output. */
  "~{WWDTRESET}": "17",
  /** Physical pin 18: VBAT_RATIO; output. */
  "VBAT_RATIO": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: PAD; no_connect. */
  "PAD": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2050_330_EP extends Component.withPins({
  /** Physical pin 1: VBAT_RATIO; output. */
  "VBAT_RATIO": "1",
  /** Physical pin 2: RXD; output. */
  "RXD": "2",
  /** Physical pin 3: CS/LWAKE; input. */
  "CS/LWAKE": "3",
  /** Physical pin 4: VREG; power_out. */
  "VREG": "4",
  /** Physical pin 5: TXD; input. */
  "TXD": "5",
  /** Physical pin 6: ~{RESET}; output. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: LBUS; open_collector. */
  "LBUS": "9",
  /** Physical pin 10: VBB; power_in. */
  "VBB": "10",
  /** Physical pin 11: FAULT/TXE; open_collector. */
  "FAULT/TXE": "11",
  /** Physical pin 12: WWDTSELECT; input. */
  "WWDTSELECT": "12",
  /** Physical pin 13: ~{WWDTTRIG}; input. */
  "~{WWDTTRIG}": "13",
  /** Physical pin 14: ~{WWDTRESET}; output. */
  "~{WWDTRESET}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2050_330_ESL extends Component.withPins({
  /** Physical pin 1: VBAT_RATIO; output. */
  "VBAT_RATIO": "1",
  /** Physical pin 2: RXD; output. */
  "RXD": "2",
  /** Physical pin 3: CS/LWAKE; input. */
  "CS/LWAKE": "3",
  /** Physical pin 4: VREG; power_out. */
  "VREG": "4",
  /** Physical pin 5: TXD; input. */
  "TXD": "5",
  /** Physical pin 6: ~{RESET}; output. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: LBUS; open_collector. */
  "LBUS": "9",
  /** Physical pin 10: VBB; power_in. */
  "VBB": "10",
  /** Physical pin 11: FAULT/TXE; open_collector. */
  "FAULT/TXE": "11",
  /** Physical pin 12: WWDTSELECT; input. */
  "WWDTSELECT": "12",
  /** Physical pin 13: ~{WWDTTRIG}; input. */
  "~{WWDTTRIG}": "13",
  /** Physical pin 14: ~{WWDTRESET}; output. */
  "~{WWDTRESET}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2050_500_EMQ extends Component.withPins({
  /** Physical pin 1: RXD; output. */
  "RXD": "1",
  /** Physical pin 2: CS/LWAKE; input. */
  "CS/LWAKE": "2",
  /** Physical pin 3: VREG; power_out. */
  "VREG": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: ~{RESET}; output. */
  "~{RESET}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: LBUS; open_collector. */
  "LBUS": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: VBB; power_in. */
  "VBB": "12",
  /** Physical pin 13: FAULT/TXE; open_collector. */
  "FAULT/TXE": "13",
  /** Physical pin 14: WWDTSELECT; input. */
  "WWDTSELECT": "14",
  /** Physical pin 15: ~{WWDTTRIG}; input. */
  "~{WWDTTRIG}": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: ~{WWDTRESET}; output. */
  "~{WWDTRESET}": "17",
  /** Physical pin 18: VBAT_RATIO; output. */
  "VBAT_RATIO": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: PAD; no_connect. */
  "PAD": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2050_500_EP extends Component.withPins({
  /** Physical pin 1: VBAT_RATIO; output. */
  "VBAT_RATIO": "1",
  /** Physical pin 2: RXD; output. */
  "RXD": "2",
  /** Physical pin 3: CS/LWAKE; input. */
  "CS/LWAKE": "3",
  /** Physical pin 4: VREG; power_out. */
  "VREG": "4",
  /** Physical pin 5: TXD; input. */
  "TXD": "5",
  /** Physical pin 6: ~{RESET}; output. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: LBUS; open_collector. */
  "LBUS": "9",
  /** Physical pin 10: VBB; power_in. */
  "VBB": "10",
  /** Physical pin 11: FAULT/TXE; open_collector. */
  "FAULT/TXE": "11",
  /** Physical pin 12: WWDTSELECT; input. */
  "WWDTSELECT": "12",
  /** Physical pin 13: ~{WWDTTRIG}; input. */
  "~{WWDTTRIG}": "13",
  /** Physical pin 14: ~{WWDTRESET}; output. */
  "~{WWDTRESET}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2050_500_ESL extends Component.withPins({
  /** Physical pin 1: VBAT_RATIO; output. */
  "VBAT_RATIO": "1",
  /** Physical pin 2: RXD; output. */
  "RXD": "2",
  /** Physical pin 3: CS/LWAKE; input. */
  "CS/LWAKE": "3",
  /** Physical pin 4: VREG; power_out. */
  "VREG": "4",
  /** Physical pin 5: TXD; input. */
  "TXD": "5",
  /** Physical pin 6: ~{RESET}; output. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: LBUS; open_collector. */
  "LBUS": "9",
  /** Physical pin 10: VBB; power_in. */
  "VBB": "10",
  /** Physical pin 11: FAULT/TXE; open_collector. */
  "FAULT/TXE": "11",
  /** Physical pin 12: WWDTSELECT; input. */
  "WWDTSELECT": "12",
  /** Physical pin 13: ~{WWDTTRIG}; input. */
  "~{WWDTTRIG}": "13",
  /** Physical pin 14: ~{WWDTRESET}; output. */
  "~{WWDTRESET}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2515_xSO extends Component.withPins({
  /** Physical pin 1: TXCAN; output. */
  "TXCAN": "1",
  /** Physical pin 2: RXCAN; input. */
  "RXCAN": "2",
  /** Physical pin 3: CLKOUT/SOF; output. */
  "CLKOUT/SOF": "3",
  /** Physical pin 4: ~{TX0RTS}; input. */
  "~{TX0RTS}": "4",
  /** Physical pin 5: ~{TX1RTS}; input. */
  "~{TX1RTS}": "5",
  /** Physical pin 6: ~{TX2RTS}; input. */
  "~{TX2RTS}": "6",
  /** Physical pin 7: OSC2; output. */
  "OSC2": "7",
  /** Physical pin 8: OSC1; input. */
  "OSC1": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS": "9",
  /** Physical pin 10: ~{RX1BF}; output. */
  "~{RX1BF}": "10",
  /** Physical pin 11: ~{RX0BF}; output. */
  "~{RX0BF}": "11",
  /** Physical pin 12: ~{INT}; output. */
  "~{INT}": "12",
  /** Physical pin 13: SCK; input. */
  "SCK": "13",
  /** Physical pin 14: SI; input. */
  "SI": "14",
  /** Physical pin 15: SO; output. */
  "SO": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2515_xST extends Component.withPins({
  /** Physical pin 1: TXCAN; output. */
  "TXCAN": "1",
  /** Physical pin 2: RXCAN; input. */
  "RXCAN": "2",
  /** Physical pin 3: CLKOUT/SOF; output. */
  "CLKOUT/SOF": "3",
  /** Physical pin 4: ~{TX0RTS}; input. */
  "~{TX0RTS}": "4",
  /** Physical pin 5: ~{TX1RTS}; input. */
  "~{TX1RTS}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: ~{TX2RTS}; input. */
  "~{TX2RTS}": "7",
  /** Physical pin 8: OSC2; output. */
  "OSC2": "8",
  /** Physical pin 9: OSC1; input. */
  "OSC1": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: ~{RX1BF}; output. */
  "~{RX1BF}": "11",
  /** Physical pin 12: ~{RX0BF}; output. */
  "~{RX0BF}": "12",
  /** Physical pin 13: ~{INT}; output. */
  "~{INT}": "13",
  /** Physical pin 14: SCK; input. */
  "SCK": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: SI; input. */
  "SI": "16",
  /** Physical pin 17: SO; output. */
  "SO": "17",
  /** Physical pin 18: ~{CS}; input. */
  "~{CS}": "18",
  /** Physical pin 19: ~{RESET}; input. */
  "~{RESET}": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2517FD_xJHA extends Component.withPins({
  /** Physical pin 1: TXCAN; output. */
  "TXCAN": "1",
  /** Physical pin 2: RXCAN; input. */
  "RXCAN": "2",
  /** Physical pin 3: CLKO/SOF; output. */
  "CLKO/SOF": "3",
  /** Physical pin 4: ~{INT}; output. */
  "~{INT}": "4",
  /** Physical pin 5: OSC2; output. */
  "OSC2": "5",
  /** Physical pin 6: OSC1; input. */
  "OSC1": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS_7": "7",
  /** Physical pin 8: ~{INT1}/GPIO1; bidirectional. */
  "~{INT1}/GPIO1": "8",
  /** Physical pin 9: ~{INT0}/GPIO0/XSTBY; bidirectional. */
  "~{INT0}/GPIO0/XSTBY": "9",
  /** Physical pin 10: SCK; input. */
  "SCK": "10",
  /** Physical pin 11: SDI; input. */
  "SDI": "11",
  /** Physical pin 12: SDO; output. */
  "SDO": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2517FD_xSL extends Component.withPins({
  /** Physical pin 1: TXCAN; output. */
  "TXCAN": "1",
  /** Physical pin 2: RXCAN; input. */
  "RXCAN": "2",
  /** Physical pin 3: CLKO/SOF; output. */
  "CLKO/SOF": "3",
  /** Physical pin 4: ~{INT}; output. */
  "~{INT}": "4",
  /** Physical pin 5: OSC2; output. */
  "OSC2": "5",
  /** Physical pin 6: OSC1; input. */
  "OSC1": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: ~{INT1}/GPIO1; bidirectional. */
  "~{INT1}/GPIO1": "8",
  /** Physical pin 9: ~{INT0}/GPIO0/XSTBY; bidirectional. */
  "~{INT0}/GPIO0/XSTBY": "9",
  /** Physical pin 10: SCK; input. */
  "SCK": "10",
  /** Physical pin 11: SDI; input. */
  "SDI": "11",
  /** Physical pin 12: SDO; output. */
  "SDO": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP251863T_E_9PX extends Component.withPins({
  /** Physical pin 1: RXCAN; input. */
  "RXCAN": "1",
  /** Physical pin 2: CLKO; output. */
  "CLKO": "2",
  /** Physical pin 3: ~{INT}; output. */
  "~{INT}": "3",
  /** Physical pin 4: OSC2; output. */
  "OSC2": "4",
  /** Physical pin 5: OSC1; input. */
  "OSC1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: ~{INT1}; output. */
  "~{INT1}": "8",
  /** Physical pin 9: ~{INT0}; output. */
  "~{INT0}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: RXD; output. */
  "RXD": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC": "13",
  /** Physical pin 14: VIO; power_in. */
  "VIO": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: CANL; bidirectional. */
  "CANL": "16",
  /** Physical pin 17: CANH; bidirectional. */
  "CANH": "17",
  /** Physical pin 18: STBY; input. */
  "STBY": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: TXD; output. */
  "TXD": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: SCK; input. */
  "SCK": "22",
  /** Physical pin 23: SDI; input. */
  "SDI": "23",
  /** Physical pin 24: SDO; output. */
  "SDO": "24",
  /** Physical pin 25: ~{CS}; input. */
  "~{CS}": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 28: TXCAN; output. */
  "TXCAN": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP251863T_H_SS extends Component.withPins({
  /** Physical pin 1: VIO; power_in. */
  "VIO": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: CANL; bidirectional. */
  "CANL": "3",
  /** Physical pin 4: CANH; bidirectional. */
  "CANH": "4",
  /** Physical pin 5: STBY; input. */
  "STBY": "5",
  /** Physical pin 6: ~{INT1}; output. */
  "~{INT1}": "6",
  /** Physical pin 7: ~{INT0}; output. */
  "~{INT0}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: SCK; input. */
  "SCK": "9",
  /** Physical pin 10: SDI; input. */
  "SDI": "10",
  /** Physical pin 11: SDO; output. */
  "SDO": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: TXCAN; output. */
  "TXCAN": "15",
  /** Physical pin 16: RXCAN; input. */
  "RXCAN": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: CLKO; output. */
  "CLKO": "18",
  /** Physical pin 19: ~{INT}; output. */
  "~{INT}": "19",
  /** Physical pin 20: OSC2; output. */
  "OSC2": "20",
  /** Physical pin 21: OSC1; input. */
  "OSC1": "21",
  /** Physical pin 22: VSS; power_in. */
  "VSS": "22",
  /** Physical pin 23: TXD; output. */
  "TXD": "23",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 25: VCC; power_in. */
  "VCC": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: RXD; output. */
  "RXD": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2518FD_xQBB extends Component.withPins({
  /** Physical pin 1: TXCAN; output. */
  "TXCAN": "1",
  /** Physical pin 2: RXCAN; input. */
  "RXCAN": "2",
  /** Physical pin 3: CLKO/SOF; output. */
  "CLKO/SOF": "3",
  /** Physical pin 4: ~{INT}; output. */
  "~{INT}": "4",
  /** Physical pin 5: OSC2; output. */
  "OSC2": "5",
  /** Physical pin 6: OSC1; input. */
  "OSC1": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS_7": "7",
  /** Physical pin 8: ~{INT1}/GPIO1; bidirectional. */
  "~{INT1}/GPIO1": "8",
  /** Physical pin 9: ~{INT0}/GPIO0/XSTBY; bidirectional. */
  "~{INT0}/GPIO0/XSTBY": "9",
  /** Physical pin 10: SCK; input. */
  "SCK": "10",
  /** Physical pin 11: SDI; input. */
  "SDI": "11",
  /** Physical pin 12: SDO; output. */
  "SDO": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2542FDxMF extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2542WFDxMF extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2551_I_P extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: Vref; power_out. */
  "Vref": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: Rs; input. */
  "Rs": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2551_I_SN extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: Vref; power_out. */
  "Vref": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: Rs; input. */
  "Rs": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2557FD_xMF extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2557FD_xMNY extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2557FD_xSN extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2558FD_xMF extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2558FD_xMNY extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2558FD_xSN extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2561_E_MF extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; passive. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2561_E_P extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; passive. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2561_E_SN extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; passive. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2561_H_MF extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; passive. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2561_H_P extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; passive. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2561_H_SN extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; passive. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2562_E_MF extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: Vio; power_in. */
  "Vio": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: SHDN; input. */
  "SHDN": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2562_E_P extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: Vio; power_in. */
  "Vio": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2562_E_SN extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: Vio; power_in. */
  "Vio": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2562_H_MF extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: Vio; power_in. */
  "Vio": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: SHDN; input. */
  "SHDN": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2562_H_P extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: Vio; power_in. */
  "Vio": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP2562_H_SN extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: Vio; power_in. */
  "Vio": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STBY; input. */
  "STBY": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP25625x_x_ML extends Component.withPins({
  /** Physical pin 29: EP; passive. */
  "EP": "29",
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: TxCAN; output. */
  "TxCAN": "4",
  /** Physical pin 5: RxCAN; input. */
  "RxCAN": "5",
  /** Physical pin 6: CLKOUT; output. */
  "CLKOUT": "6",
  /** Physical pin 7: ~{Tx0RTS}; input. */
  "~{Tx0RTS}": "7",
  /** Physical pin 8: ~{Tx1RTS}; input. */
  "~{Tx1RTS}": "8",
  /** Physical pin 9: ~{Tx2RTS}; input. */
  "~{Tx2RTS}": "9",
  /** Physical pin 10: R_{XD}; output. */
  "R_{XD}": "10",
  /** Physical pin 11: V_{IO}; power_in. */
  "V_{IO}": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: STBY; input. */
  "STBY": "15",
  /** Physical pin 16: T_{XD}; input. */
  "T_{XD}": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: V_{SS}; power_in. */
  "V_{SS}": "18",
  /** Physical pin 19: V_{DDA}; power_in. */
  "V_{DDA}": "19",
  /** Physical pin 20: OSC2; output. */
  "OSC2": "20",
  /** Physical pin 21: OSC1; input. */
  "OSC1": "21",
  /** Physical pin 22: GND; power_in. */
  "GND": "22",
  /** Physical pin 23: ~{Rx1BF}; output. */
  "~{Rx1BF}": "23",
  /** Physical pin 24: ~{Rx0BF}; output. */
  "~{Rx0BF}": "24",
  /** Physical pin 25: ~{INT}; output. */
  "~{INT}": "25",
  /** Physical pin 26: SCK; input. */
  "SCK": "26",
  /** Physical pin 27: SI; input. */
  "SI": "27",
  /** Physical pin 28: SO; output. */
  "SO": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP25625x_x_SS extends Component.withPins({
  /** Physical pin 1: V_{IO}; power_in. */
  "V_{IO}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: CANL; bidirectional. */
  "CANL": "3",
  /** Physical pin 4: CANH; bidirectional. */
  "CANH": "4",
  /** Physical pin 5: STBY; input. */
  "STBY": "5",
  /** Physical pin 6: ~{Tx1RTS}; input. */
  "~{Tx1RTS}": "6",
  /** Physical pin 7: ~{Tx2RTS}; input. */
  "~{Tx2RTS}": "7",
  /** Physical pin 8: OSC2; output. */
  "OSC2": "8",
  /** Physical pin 9: OSC1; input. */
  "OSC1": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{Rx1BF}; output. */
  "~{Rx1BF}": "11",
  /** Physical pin 12: ~{Rx0BF}; output. */
  "~{Rx0BF}": "12",
  /** Physical pin 13: ~{INT}; output. */
  "~{INT}": "13",
  /** Physical pin 14: SCK; input. */
  "SCK": "14",
  /** Physical pin 15: SI; input. */
  "SI": "15",
  /** Physical pin 16: SO; output. */
  "SO": "16",
  /** Physical pin 17: ~{CS}; input. */
  "~{CS}": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: V_{DD}; power_in. */
  "V_{DD}": "19",
  /** Physical pin 20: TxCAN; output. */
  "TxCAN": "20",
  /** Physical pin 21: RxCAN; input. */
  "RxCAN": "21",
  /** Physical pin 22: CLKOUT; output. */
  "CLKOUT": "22",
  /** Physical pin 23: ~{Tx0RTS}; input. */
  "~{Tx0RTS}": "23",
  /** Physical pin 24: T_{XD}; input. */
  "T_{XD}": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: V_{SS}; power_in. */
  "V_{SS}": "26",
  /** Physical pin 27: V_{DDA}; power_in. */
  "V_{DDA}": "27",
  /** Physical pin 28: R_{XD}; output. */
  "R_{XD}": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA82C251 extends Component.withPins({
  /** Physical pin 1: TxD; input. */
  "TxD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RxD; output. */
  "RxD": "4",
  /** Physical pin 5: Vref; output. */
  "Vref": "5",
  /** Physical pin 6: CAN-; bidirectional. */
  "CAN-": "6",
  /** Physical pin 7: CAN+; bidirectional. */
  "CAN+": "7",
  /** Physical pin 8: Rsl; input. */
  "Rsl": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SIT1057TK_3 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD1050D extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VREF; passive. */
  "VREF": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD230 extends Component.withPins({
  /** Physical pin 1: D; input. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: R; output. */
  "R": "4",
  /** Physical pin 5: Vref; output. */
  "Vref": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: Rs; input. */
  "Rs": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD231 extends Component.withPins({
  /** Physical pin 1: D; input. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: R; output. */
  "R": "4",
  /** Physical pin 5: Vref; output. */
  "Vref": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: Rs; input. */
  "Rs": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD232 extends Component.withPins({
  /** Physical pin 1: D; input. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: R; output. */
  "R": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD233 extends Component.withPins({
  /** Physical pin 1: D; input. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: R; output. */
  "R": "4",
  /** Physical pin 5: LBK; input. */
  "LBK": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: Rs; input. */
  "Rs": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD234 extends Component.withPins({
  /** Physical pin 1: D; input. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: R; output. */
  "R": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: Rs; input. */
  "Rs": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD235 extends Component.withPins({
  /** Physical pin 1: D; input. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: R; output. */
  "R": "4",
  /** Physical pin 5: AB; input. */
  "AB": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: Rs; input. */
  "Rs": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD255D extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD256D extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VRXD; power_in. */
  "VRXD": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN65HVD257D extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: FAULT; open_collector. */
  "FAULT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN1043xDxQ1 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
  /** Physical pin 7: INH; open_emitter. */
  "INH": "7",
  /** Physical pin 8: ~{FAULT}; output. */
  "~{FAULT}": "8",
  /** Physical pin 9: WAKE; input. */
  "WAKE": "9",
  /** Physical pin 10: VSUP; power_in. */
  "VSUP": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: ~{STB}; input. */
  "~{STB}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN330 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; tri_state. */
  "RXD": "4",
  /** Physical pin 5: SHDN; input. */
  "SHDN": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN330G extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; tri_state. */
  "RXD": "4",
  /** Physical pin 5: SHDN; input. */
  "SHDN": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN332 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; tri_state. */
  "RXD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN332G extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; tri_state. */
  "RXD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN334 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; tri_state. */
  "RXD": "4",
  /** Physical pin 5: SHDN; input. */
  "SHDN": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN334G extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; tri_state. */
  "RXD": "4",
  /** Physical pin 5: SHDN; input. */
  "SHDN": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN337 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; tri_state. */
  "RXD": "4",
  /** Physical pin 5: FAULT; open_collector. */
  "FAULT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN337G extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; tri_state. */
  "RXD": "4",
  /** Physical pin 5: FAULT; open_collector. */
  "FAULT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN4550RGY extends Component.withPins({
  /** Physical pin 9: GPO2; output. */
  "GPO2": "9",
  /** Physical pin 10: CANL; bidirectional. */
  "CANL": "10",
  /** Physical pin 11: CANH; bidirectional. */
  "CANH": "11",
  /** Physical pin 12: WAKE; input. */
  "WAKE": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: V_{SUP}; power_in. */
  "V_{SUP}": "14",
  /** Physical pin 15: INH; output. */
  "INH": "15",
  /** Physical pin 16: V_{CCOUT}; power_out. */
  "V_{CCOUT}": "16",
  /** Physical pin 17: V_{IO}; power_out. */
  "V_{IO}": "17",
  /** Physical pin 18: FLTR; output. */
  "FLTR": "18",
  /** Physical pin 19: RST; input. */
  "RST": "19",
  /** Physical pin 20: OSC2; output. */
  "OSC2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 1: OSC1; input. */
  "OSC1": "1",
  /** Physical pin 2: ~{WKRQ}; output. */
  "~{WKRQ}": "2",
  /** Physical pin 3: GPO1; output. */
  "GPO1": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: ~{INT}; output. */
  "~{INT}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAN4551RGYRQ1 extends Component.withPins({
  /** Physical pin 9: GPO2; output. */
  "GPO2": "9",
  /** Physical pin 10: CANL; bidirectional. */
  "CANL": "10",
  /** Physical pin 11: CANH; bidirectional. */
  "CANH": "11",
  /** Physical pin 12: WAKE; input. */
  "WAKE": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: V_{SUP}; power_in. */
  "V_{SUP}": "14",
  /** Physical pin 15: INH; output. */
  "INH": "15",
  /** Physical pin 16: V_{CCFLTR}; output. */
  "V_{CCFLTR}": "16",
  /** Physical pin 17: V_{IO}; power_out. */
  "V_{IO}": "17",
  /** Physical pin 18: FLTR; output. */
  "FLTR": "18",
  /** Physical pin 19: RST; input. */
  "RST": "19",
  /** Physical pin 20: OSC2; output. */
  "OSC2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 1: OSC1; input. */
  "OSC1": "1",
  /** Physical pin 2: ~{WKRQ}; output. */
  "~{WKRQ}": "2",
  /** Physical pin 3: GPO1; output. */
  "GPO1": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: ~{INT}; output. */
  "~{INT}": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1021xT extends Component.withPins({
  /** Physical pin 1: RXD; open_collector. */
  "RXD": "1",
  /** Physical pin 2: ~{SLP}; input. */
  "~{SLP}": "2",
  /** Physical pin 3: ~{WAKE}; input. */
  "~{WAKE}": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: LIN; bidirectional. */
  "LIN": "6",
  /** Physical pin 7: VBAT; power_in. */
  "VBAT": "7",
  /** Physical pin 8: INH; output. */
  "INH": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1021xTK extends Component.withPins({
  /** Physical pin 1: RXD; open_collector. */
  "RXD": "1",
  /** Physical pin 2: ~{SLP}; input. */
  "~{SLP}": "2",
  /** Physical pin 3: ~{WAKE}; input. */
  "~{WAKE}": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: LIN; bidirectional. */
  "LIN": "6",
  /** Physical pin 7: VBAT; power_in. */
  "VBAT": "7",
  /** Physical pin 8: INH; output. */
  "INH": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1029T extends Component.withPins({
  /** Physical pin 1: RXD; open_collector. */
  "RXD": "1",
  /** Physical pin 2: ~{SLP}; input. */
  "~{SLP}": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: LIN; bidirectional. */
  "LIN": "6",
  /** Physical pin 7: VBAT; power_in. */
  "VBAT": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1029TK extends Component.withPins({
  /** Physical pin 1: RXD; open_collector. */
  "RXD": "1",
  /** Physical pin 2: ~{SLP}; input. */
  "~{SLP}": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: TXD; input. */
  "TXD": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: LIN; bidirectional. */
  "LIN": "6",
  /** Physical pin 7: VBAT; power_in. */
  "VBAT": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1049T extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; power_out. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1042T extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; power_out. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1042T_3 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1049TK_3 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1042TK_3 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1043T extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
  /** Physical pin 7: INH; open_emitter. */
  "INH": "7",
  /** Physical pin 8: ~{ERR}; output. */
  "~{ERR}": "8",
  /** Physical pin 9: WAKE; input. */
  "WAKE": "9",
  /** Physical pin 10: VBAT; power_in. */
  "VBAT": "10",
  /** Physical pin 11: SPLIT; output. */
  "SPLIT": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: ~{STB}; input. */
  "~{STB}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1043TK extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: EN; input. */
  "EN": "6",
  /** Physical pin 7: INH; open_emitter. */
  "INH": "7",
  /** Physical pin 8: ~{ERR}; output. */
  "~{ERR}": "8",
  /** Physical pin 9: WAKE; input. */
  "WAKE": "9",
  /** Physical pin 10: VBAT; power_in. */
  "VBAT": "10",
  /** Physical pin 11: SPLIT; output. */
  "SPLIT": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: ~{STB}; input. */
  "~{STB}": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1049TK extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: SPLIT; passive. */
  "SPLIT": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: STB; input. */
  "STB": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1051T extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1051T_3 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1051T_E extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1051TK_3 extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: CANL; bidirectional. */
  "CANL": "6",
  /** Physical pin 7: CANH; bidirectional. */
  "CANH": "7",
  /** Physical pin 8: S; input. */
  "S": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1052i_1 extends Component.withPins({
  /** Physical pin 1: VDD1; power_in. */
  "VDD1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: TXD; input. */
  "TXD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: RXD; output. */
  "RXD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND1; passive. */
  "GND1_7": "7",
  /** Physical pin 8: GND1; passive. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: GND2; passive. */
  "GND2_10": "10",
  /** Physical pin 11: VDD2; passive. */
  "VDD2_11": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: STB; input. */
  "STB": "14",
  /** Physical pin 15: GND2; passive. */
  "GND2_15": "15",
  /** Physical pin 16: VDD2; power_in. */
  "VDD2_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1052i_2 extends Component.withPins({
  /** Physical pin 1: VDD1; power_in. */
  "VDD1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: TXD; input. */
  "TXD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: RXD; output. */
  "RXD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND1; passive. */
  "GND1_7": "7",
  /** Physical pin 8: GND1; passive. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: GND2; passive. */
  "GND2_10": "10",
  /** Physical pin 11: VDD2; passive. */
  "VDD2_11": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: STB; input. */
  "STB": "14",
  /** Physical pin 15: GND2; passive. */
  "GND2_15": "15",
  /** Physical pin 16: VDD2; power_in. */
  "VDD2_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1052i_5 extends Component.withPins({
  /** Physical pin 1: VDD1; power_in. */
  "VDD1": "1",
  /** Physical pin 2: GND1; power_in. */
  "GND1_2": "2",
  /** Physical pin 3: TXD; input. */
  "TXD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: RXD; output. */
  "RXD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND1; passive. */
  "GND1_7": "7",
  /** Physical pin 8: GND1; passive. */
  "GND1_8": "8",
  /** Physical pin 9: GND2; power_in. */
  "GND2_9": "9",
  /** Physical pin 10: GND2; passive. */
  "GND2_10": "10",
  /** Physical pin 11: VDD2; passive. */
  "VDD2_11": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: STB; input. */
  "STB": "14",
  /** Physical pin 15: GND2; passive. */
  "GND2_15": "15",
  /** Physical pin 16: VDD2; power_in. */
  "VDD2_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1145T extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: INH; open_emitter. */
  "INH": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: WAKE; input. */
  "WAKE": "9",
  /** Physical pin 10: BAT; power_in. */
  "BAT": "10",
  /** Physical pin 11: SDI; input. */
  "SDI": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: ~{SCS}; input. */
  "~{SCS}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1145T_FD extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: INH; open_emitter. */
  "INH": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: WAKE; input. */
  "WAKE": "9",
  /** Physical pin 10: BAT; power_in. */
  "BAT": "10",
  /** Physical pin 11: SDI; input. */
  "SDI": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: ~{SCS}; input. */
  "~{SCS}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1145TK extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: INH; open_emitter. */
  "INH": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: WAKE; input. */
  "WAKE": "9",
  /** Physical pin 10: BAT; power_in. */
  "BAT": "10",
  /** Physical pin 11: SDI; input. */
  "SDI": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: ~{SCS}; input. */
  "~{SCS}": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TJA1145TK_FD extends Component.withPins({
  /** Physical pin 1: TXD; input. */
  "TXD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: RXD; output. */
  "RXD": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: INH; open_emitter. */
  "INH": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: WAKE; input. */
  "WAKE": "9",
  /** Physical pin 10: BAT; power_in. */
  "BAT": "10",
  /** Physical pin 11: SDI; input. */
  "SDI": "11",
  /** Physical pin 12: CANL; bidirectional. */
  "CANL": "12",
  /** Physical pin 13: CANH; bidirectional. */
  "CANH": "13",
  /** Physical pin 14: ~{SCS}; input. */
  "~{SCS}": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
  override schema = "Interface_CAN_LIN:TJA1145TK-FD";
  override referencePrefix = "U";
}

