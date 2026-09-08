// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * FM receiver front-end IC for radio-cassette recorder, music center applications, SIP-9
 *
 * KiCad symbol: `RF_AM_FM:LA1185`. Reference prefix: `U`.
 * Footprint filters: SIP*22.3x3mm*P2.54mm*.
 * @see https://www.alldatasheet.com/datasheet-pdf/pdf/39974/SANYO/LA1185.html
 * Keywords: FM mixer receiver amplifier.
 * Default footprint: Package_SIP:SIP-9_22.3x3mm_P2.54mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LA1185 extends Component.withPins({
  /** Physical pin 1: RF_IN; input. */
  "RF_IN": "1",
  /** Physical pin 2: RF_BYPASS; passive. */
  "RF_BYPASS": "2",
  /** Physical pin 3: RF_OUT; output. */
  "RF_OUT": "3",
  /** Physical pin 4: MIX_IN; input. */
  "MIX_IN": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: MIX_OUT; output. */
  "MIX_OUT": "6",
  /** Physical pin 7: OSC_MON; passive. */
  "OSC_MON": "7",
  /** Physical pin 8: OSC; output. */
  "OSC": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
}) {
  override schema = "RF_AM_FM:LA1185";
  override referencePrefix = "U";
}

/**
 * Microchip KEELOQ classic / ultimate encoder - keyfob IC sending button state, serial and authentiation as PWM/manchester encoded AM/FM signal in ISM bands
 *
 * KiCad symbol: `RF_AM_FM:MCS3142`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm?P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001747A.pdf
 * Keywords: KEELOQ classic ultimate keyless entry keyfob ISM.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCS3142 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: SOSCI; input. */
  "SOSCI": "2",
  /** Physical pin 3: SOSCO; output. */
  "SOSCO": "3",
  /** Physical pin 4: SW3; input. */
  "SW3": "4",
  /** Physical pin 5: PGC; input. */
  "PGC": "5",
  /** Physical pin 6: PGD; bidirectional. */
  "PGD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: CTRL_IN; input. */
  "CTRL_IN": "9",
  /** Physical pin 10: RF_OUT; output. */
  "RF_OUT": "10",
  /** Physical pin 11: VSS; passive. */
  "VSS_11": "11",
  /** Physical pin 12: DATA_IN; input. */
  "DATA_IN": "12",
  /** Physical pin 13: XTAL; input. */
  "XTAL": "13",
  /** Physical pin 14: CTRL_OUT; output. */
  "CTRL_OUT": "14",
  /** Physical pin 15: DATA_OUT; output. */
  "DATA_OUT": "15",
  /** Physical pin 16: ~{LED}; output. */
  "~{LED}": "16",
  /** Physical pin 17: SW2; input. */
  "SW2": "17",
  /** Physical pin 18: SW1; input. */
  "SW1": "18",
  /** Physical pin 19: SW0; input. */
  "SW0": "19",
  /** Physical pin 20: VSS; passive. */
  "VSS_20": "20",
}) {
  override schema = "RF_AM_FM:MCS3142";
  override referencePrefix = "U";
}

/**
 * High performance monolithic low-power FM IF system, SO-20
 *
 * KiCad symbol: `RF_AM_FM:SA605D`. Reference prefix: `U`.
 * Footprint filters: SO*12.8x7.5mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SA605.pdf
 * Keywords: High performance monolithic low-power FM IF system.
 * Default footprint: Package_SO:SO-20_12.8x7.5mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SA605D extends Component.withPins({
  /** Physical pin 1: RF_IN; input. */
  "RF_IN": "1",
  /** Physical pin 2: RF_BYPASS; input. */
  "RF_BYPASS": "2",
  /** Physical pin 3: OSC_OUT; output. */
  "OSC_OUT": "3",
  /** Physical pin 4: OSC_IN; input. */
  "OSC_IN": "4",
  /** Physical pin 5: MUTE_INPUT; input. */
  "MUTE_INPUT": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: RSSI_OUT; output. */
  "RSSI_OUT": "7",
  /** Physical pin 8: MUTED_AUD_OUTP; output. */
  "MUTED_AUD_OUTP": "8",
  /** Physical pin 9: UNMUTED_AUD_OUTP; output. */
  "UNMUTED_AUD_OUTP": "9",
  /** Physical pin 10: QUADRATURE_IN; input. */
  "QUADRATURE_IN": "10",
  /** Physical pin 11: LIMITER_OUT; output. */
  "LIMITER_OUT": "11",
  /** Physical pin 12: LIMITER_DECOUPL; input. */
  "LIMITER_DECOUPL_12": "12",
  /** Physical pin 13: LIMITER_DECOUPL; input. */
  "LIMITER_DECOUPL_13": "13",
  /** Physical pin 14: LIMITER_IN; input. */
  "LIMITER_IN": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: IF_AMP_OUT; output. */
  "IF_AMP_OUT": "16",
  /** Physical pin 17: IF_AMP_DECOUPL; input. */
  "IF_AMP_DECOUPL_17": "17",
  /** Physical pin 18: IF_AMP_IN; input. */
  "IF_AMP_IN": "18",
  /** Physical pin 19: IF_AMP_DECOUPL; input. */
  "IF_AMP_DECOUPL_19": "19",
  /** Physical pin 20: MIXER_OUT; output. */
  "MIXER_OUT": "20",
}) {
  override schema = "RF_AM_FM:SA605D";
  override referencePrefix = "U";
}

/**
 * High performance monolithic low-power FM IF system, SSOP-20
 *
 * KiCad symbol: `RF_AM_FM:SA605DK`. Reference prefix: `U`.
 * Footprint filters: SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SA605.pdf
 * Keywords: High performance monolithic low-power FM IF system.
 * Default footprint: Package_SO:SSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SA605DK extends Component.withPins({
  /** Physical pin 1: RF_IN; input. */
  "RF_IN": "1",
  /** Physical pin 2: RF_BYPASS; input. */
  "RF_BYPASS": "2",
  /** Physical pin 3: OSC_OUT; output. */
  "OSC_OUT": "3",
  /** Physical pin 4: OSC_IN; input. */
  "OSC_IN": "4",
  /** Physical pin 5: MUTE_INPUT; input. */
  "MUTE_INPUT": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: RSSI_OUT; output. */
  "RSSI_OUT": "7",
  /** Physical pin 8: MUTED_AUD_OUTP; output. */
  "MUTED_AUD_OUTP": "8",
  /** Physical pin 9: UNMUTED_AUD_OUTP; output. */
  "UNMUTED_AUD_OUTP": "9",
  /** Physical pin 10: QUADRATURE_IN; input. */
  "QUADRATURE_IN": "10",
  /** Physical pin 11: LIMITER_OUT; output. */
  "LIMITER_OUT": "11",
  /** Physical pin 12: LIMITER_DECOUPL; input. */
  "LIMITER_DECOUPL_12": "12",
  /** Physical pin 13: LIMITER_DECOUPL; input. */
  "LIMITER_DECOUPL_13": "13",
  /** Physical pin 14: LIMITER_IN; input. */
  "LIMITER_IN": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: IF_AMP_OUT; output. */
  "IF_AMP_OUT": "16",
  /** Physical pin 17: IF_AMP_DECOUPL; input. */
  "IF_AMP_DECOUPL_17": "17",
  /** Physical pin 18: IF_AMP_IN; input. */
  "IF_AMP_IN": "18",
  /** Physical pin 19: IF_AMP_DECOUPL; input. */
  "IF_AMP_DECOUPL_19": "19",
  /** Physical pin 20: MIXER_OUT; output. */
  "MIXER_OUT": "20",
}) {
  override schema = "RF_AM_FM:SA605DK";
  override referencePrefix = "U";
}

/**
 * Low-voltage, high performance, monolithic FM IF system with high-speed RSSI, SSOP-20
 *
 * KiCad symbol: `RF_AM_FM:SA636DK`. Reference prefix: `U`.
 * Footprint filters: SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SA636.pdf
 * Keywords: Low-voltage, monolithic, FM, IF, RSSI.
 * Default footprint: Package_SO:SSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SA636DK extends Component.withPins({
  /** Physical pin 1: RF_IN; input. */
  "RF_IN": "1",
  /** Physical pin 2: RF_IN_DECOUPL; passive. */
  "RF_IN_DECOUPL": "2",
  /** Physical pin 3: OSC_OUT; output. */
  "OSC_OUT": "3",
  /** Physical pin 4: OSC_IN; input. */
  "OSC_IN": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: RSSI_FEEDBACK; input. */
  "RSSI_FEEDBACK": "6",
  /** Physical pin 7: RSSI_OUT; output. */
  "RSSI_OUT": "7",
  /** Physical pin 8: POWER_DOWN_CTRL; input. */
  "POWER_DOWN_CTRL": "8",
  /** Physical pin 9: DATA_OUT; output. */
  "DATA_OUT": "9",
  /** Physical pin 10: QUADRATURE_IN; input. */
  "QUADRATURE_IN": "10",
  /** Physical pin 11: LIMITER_OUT; output. */
  "LIMITER_OUT": "11",
  /** Physical pin 12: LIMITER_DECOUPL; passive. */
  "LIMITER_DECOUPL_12": "12",
  /** Physical pin 13: LIMITER_DECOUPL; passive. */
  "LIMITER_DECOUPL_13": "13",
  /** Physical pin 14: LIMITER_IN; input. */
  "LIMITER_IN": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: IF_AMP_OUT; output. */
  "IF_AMP_OUT": "16",
  /** Physical pin 17: IF_AMP_DECOUPL; passive. */
  "IF_AMP_DECOUPL_17": "17",
  /** Physical pin 18: IF_AMP_IN; input. */
  "IF_AMP_IN": "18",
  /** Physical pin 19: IF_AMP_DECOUPL; passive. */
  "IF_AMP_DECOUPL_19": "19",
  /** Physical pin 20: MIXER_OUT; output. */
  "MIXER_OUT": "20",
}) {
  override schema = "RF_AM_FM:SA636DK";
  override referencePrefix = "U";
}

/**
 * EZRadioPRO Low Current Receiver
 *
 * KiCad symbol: `RF_AM_FM:Si4362`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/Si4362.pdf
 * Keywords: radio receiver.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4362 extends Component.withPins({
  /** Physical pin 1: SDN; input. */
  "SDN": "1",
  /** Physical pin 2: RXp; input. */
  "RXp": "2",
  /** Physical pin 3: RXn; input. */
  "RXn": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: GPIO0; bidirectional. */
  "GPIO0": "9",
  /** Physical pin 10: GPIO1; bidirectional. */
  "GPIO1": "10",
  /** Physical pin 11: ~{IRQ}; output. */
  "~{IRQ}": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
  /** Physical pin 15: ~{SEL}; input. */
  "~{SEL}": "15",
  /** Physical pin 16: XOUT; output. */
  "XOUT": "16",
  /** Physical pin 17: XIN; input. */
  "XIN": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: GPIO2; bidirectional. */
  "GPIO2": "19",
  /** Physical pin 20: GPIO3; bidirectional. */
  "GPIO3": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
}) {
  override schema = "RF_AM_FM:Si4362";
  override referencePrefix = "U";
}

/**
 * AM/FM/SW/LW Broadcast Radio Receiver with RDS/RBDS
 *
 * KiCad symbol: `RF_AM_FM:Si4735-D60-GU`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/Si4730-31-34-35-D60.pdf
 * Keywords: Broadcast AM FM SW LW Radio Receiver RDS RBDS.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4735_D60_GU extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: DFS; input. */
  "DFS": "2",
  /** Physical pin 3: GPO3/[DCLK]; bidirectional. */
  "GPO3/[DCLK]": "3",
  /** Physical pin 4: GPO2/[~{INT}]; output. */
  "GPO2/[~{INT}]": "4",
  /** Physical pin 5: GPO1; output. */
  "GPO1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: FMI; input. */
  "FMI": "8",
  /** Physical pin 9: RFGND; power_in. */
  "RFGND": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: AMI; input. */
  "AMI": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: ~{SEN}; input. */
  "~{SEN}": "16",
  /** Physical pin 17: SCLK; input. */
  "SCLK": "17",
  /** Physical pin 18: SDIO; bidirectional. */
  "SDIO": "18",
  /** Physical pin 19: RCLK; input. */
  "RCLK": "19",
  /** Physical pin 20: VD; power_in. */
  "VD": "20",
  /** Physical pin 21: VA; power_in. */
  "VA": "21",
  /** Physical pin 22: DBYP; passive. */
  "DBYP": "22",
  /** Physical pin 23: ROUT/[DOUT]; output. */
  "ROUT/[DOUT]": "23",
  /** Physical pin 24: LOUT/[DFS]; bidirectional. */
  "LOUT/[DFS]": "24",
}) {
  override schema = "RF_AM_FM:Si4735-D60-GU";
  override referencePrefix = "U";
}

/**
 * AM/FM Broadcast Radio Receiver
 *
 * KiCad symbol: `RF_AM_FM:Si4730-D60-GU`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/Si4730-31-34-35-D60.pdf
 * Keywords: Broadcast AM FM Radio Receiver.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4730_D60_GU extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: DFS; input. */
  "DFS": "2",
  /** Physical pin 3: GPO3/[DCLK]; bidirectional. */
  "GPO3/[DCLK]": "3",
  /** Physical pin 4: GPO2/[~{INT}]; output. */
  "GPO2/[~{INT}]": "4",
  /** Physical pin 5: GPO1; output. */
  "GPO1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: FMI; input. */
  "FMI": "8",
  /** Physical pin 9: RFGND; power_in. */
  "RFGND": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: AMI; input. */
  "AMI": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: ~{SEN}; input. */
  "~{SEN}": "16",
  /** Physical pin 17: SCLK; input. */
  "SCLK": "17",
  /** Physical pin 18: SDIO; bidirectional. */
  "SDIO": "18",
  /** Physical pin 19: RCLK; input. */
  "RCLK": "19",
  /** Physical pin 20: VD; power_in. */
  "VD": "20",
  /** Physical pin 21: VA; power_in. */
  "VA": "21",
  /** Physical pin 22: DBYP; passive. */
  "DBYP": "22",
  /** Physical pin 23: ROUT/[DOUT]; output. */
  "ROUT/[DOUT]": "23",
  /** Physical pin 24: LOUT/[DFS]; bidirectional. */
  "LOUT/[DFS]": "24",
}) {
  override schema = "RF_AM_FM:Si4730-D60-GU";
  override referencePrefix = "U";
}

/**
 * AM/FM Broadcast Radio Receiver with RDS/RBDS
 *
 * KiCad symbol: `RF_AM_FM:Si4731-D60-GU`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/Si4730-31-34-35-D60.pdf
 * Keywords: Broadcast AM FM Radio Receiver RDS RBDS.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4731_D60_GU extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: DFS; input. */
  "DFS": "2",
  /** Physical pin 3: GPO3/[DCLK]; bidirectional. */
  "GPO3/[DCLK]": "3",
  /** Physical pin 4: GPO2/[~{INT}]; output. */
  "GPO2/[~{INT}]": "4",
  /** Physical pin 5: GPO1; output. */
  "GPO1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: FMI; input. */
  "FMI": "8",
  /** Physical pin 9: RFGND; power_in. */
  "RFGND": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: AMI; input. */
  "AMI": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: ~{SEN}; input. */
  "~{SEN}": "16",
  /** Physical pin 17: SCLK; input. */
  "SCLK": "17",
  /** Physical pin 18: SDIO; bidirectional. */
  "SDIO": "18",
  /** Physical pin 19: RCLK; input. */
  "RCLK": "19",
  /** Physical pin 20: VD; power_in. */
  "VD": "20",
  /** Physical pin 21: VA; power_in. */
  "VA": "21",
  /** Physical pin 22: DBYP; passive. */
  "DBYP": "22",
  /** Physical pin 23: ROUT/[DOUT]; output. */
  "ROUT/[DOUT]": "23",
  /** Physical pin 24: LOUT/[DFS]; bidirectional. */
  "LOUT/[DFS]": "24",
}) {
  override schema = "RF_AM_FM:Si4731-D60-GU";
  override referencePrefix = "U";
}

/**
 * AM/FM/SW/LW Broadcast Radio Receiver
 *
 * KiCad symbol: `RF_AM_FM:Si4734-D60-GU`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/Si4730-31-34-35-D60.pdf
 * Keywords: Broadcast AM FM SW LW Radio Receiver.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4734_D60_GU extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: DFS; input. */
  "DFS": "2",
  /** Physical pin 3: GPO3/[DCLK]; bidirectional. */
  "GPO3/[DCLK]": "3",
  /** Physical pin 4: GPO2/[~{INT}]; output. */
  "GPO2/[~{INT}]": "4",
  /** Physical pin 5: GPO1; output. */
  "GPO1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: FMI; input. */
  "FMI": "8",
  /** Physical pin 9: RFGND; power_in. */
  "RFGND": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: AMI; input. */
  "AMI": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: ~{SEN}; input. */
  "~{SEN}": "16",
  /** Physical pin 17: SCLK; input. */
  "SCLK": "17",
  /** Physical pin 18: SDIO; bidirectional. */
  "SDIO": "18",
  /** Physical pin 19: RCLK; input. */
  "RCLK": "19",
  /** Physical pin 20: VD; power_in. */
  "VD": "20",
  /** Physical pin 21: VA; power_in. */
  "VA": "21",
  /** Physical pin 22: DBYP; passive. */
  "DBYP": "22",
  /** Physical pin 23: ROUT/[DOUT]; output. */
  "ROUT/[DOUT]": "23",
  /** Physical pin 24: LOUT/[DFS]; bidirectional. */
  "LOUT/[DFS]": "24",
}) {
  override schema = "RF_AM_FM:Si4734-D60-GU";
  override referencePrefix = "U";
}

/**
 * FM ZETA TRANSCEIVER MODULE, OPTIMISED FOR 433MHZ
 *
 * KiCad symbol: `RF_AM_FM:ZETA-433-SO`. Reference prefix: `U`.
 * Footprint filters: ZETA?433?SO?SMD*, ZETA?433?SO?THT*.
 * @see https://www.rfsolutions.co.uk/downloads/1456219226DS-ZETA.pdf
 * Keywords: RF TRANSCEIVER MODULE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZETA_433_SO extends Component.withPins({
  /** Physical pin 1: ANT; bidirectional. */
  "ANT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDN; input. */
  "SDN": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: ~{IRQ}; output. */
  "~{IRQ}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: GPIO1; bidirectional. */
  "GPIO1": "7",
  /** Physical pin 8: GPIO2; bidirectional. */
  "GPIO2": "8",
  /** Physical pin 9: SCLK; input. */
  "SCLK": "9",
  /** Physical pin 10: SDI; input. */
  "SDI": "10",
  /** Physical pin 11: SDO; output. */
  "SDO": "11",
  /** Physical pin 12: SEL; input. */
  "SEL": "12",
}) {
  override schema = "RF_AM_FM:ZETA-433-SO";
  override referencePrefix = "U";
}

/**
 * FM ZETA TRANSCEIVER MODULE, OPTIMISED FOR 868MHZ
 *
 * KiCad symbol: `RF_AM_FM:ZETA-868-SO`. Reference prefix: `U`.
 * Footprint filters: ZETA?433?SO?SMD*, ZETA?433?SO?THT*.
 * @see https://www.rfsolutions.co.uk/downloads/1456219226DS-ZETA.pdf
 * Keywords: RF TRANSCEIVER MODULE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZETA_868_SO extends Component.withPins({
  /** Physical pin 1: ANT; bidirectional. */
  "ANT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDN; input. */
  "SDN": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: ~{IRQ}; output. */
  "~{IRQ}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: GPIO1; bidirectional. */
  "GPIO1": "7",
  /** Physical pin 8: GPIO2; bidirectional. */
  "GPIO2": "8",
  /** Physical pin 9: SCLK; input. */
  "SCLK": "9",
  /** Physical pin 10: SDI; input. */
  "SDI": "10",
  /** Physical pin 11: SDO; output. */
  "SDO": "11",
  /** Physical pin 12: SEL; input. */
  "SEL": "12",
}) {
  override schema = "RF_AM_FM:ZETA-868-SO";
  override referencePrefix = "U";
}

/**
 * FM ZETA TRANSCEIVER MODULE, OPTIMISED FOR 915MHZ
 *
 * KiCad symbol: `RF_AM_FM:ZETA-915-SO`. Reference prefix: `U`.
 * Footprint filters: ZETA?433?SO?SMD*, ZETA?433?SO?THT*.
 * @see https://www.rfsolutions.co.uk/downloads/1456219226DS-ZETA.pdf
 * Keywords: RF TRANSCEIVER MODULE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZETA_915_SO extends Component.withPins({
  /** Physical pin 1: ANT; bidirectional. */
  "ANT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDN; input. */
  "SDN": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: ~{IRQ}; output. */
  "~{IRQ}": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: GPIO1; bidirectional. */
  "GPIO1": "7",
  /** Physical pin 8: GPIO2; bidirectional. */
  "GPIO2": "8",
  /** Physical pin 9: SCLK; input. */
  "SCLK": "9",
  /** Physical pin 10: SDI; input. */
  "SDI": "10",
  /** Physical pin 11: SDO; output. */
  "SDO": "11",
  /** Physical pin 12: SEL; input. */
  "SEL": "12",
}) {
  override schema = "RF_AM_FM:ZETA-915-SO";
  override referencePrefix = "U";
}

