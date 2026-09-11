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
 */
export class LA1185 extends Component.withPins({
  "RF_IN": "1",
  "RF_BYPASS": "2",
  "RF_OUT": "3",
  "MIX_IN": "4",
  "GND": "5",
  "MIX_OUT": "6",
  "OSC_MON": "7",
  "OSC": "8",
  "VCC": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF_IN: "input", RF_BYPASS: "passive", RF_OUT: "output", MIX_IN: "input", GND: "power_in", MIX_OUT: "output", OSC_MON: "passive", OSC: "output", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCS3142 extends Component.withPins({
  "VDD_1": "1",
  "SOSCI": "2",
  "SOSCO": "3",
  "SW3": "4",
  "PGC": "5",
  "PGD": "6",
  "VSS_7": "7",
  "VDD_8": "8",
  "CTRL_IN": "9",
  "RF_OUT": "10",
  "VSS_11": "11",
  "DATA_IN": "12",
  "XTAL": "13",
  "CTRL_OUT": "14",
  "DATA_OUT": "15",
  "~{LED}": "16",
  "SW2": "17",
  "SW1": "18",
  "SW0": "19",
  "VSS_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", SOSCI: "input", SOSCO: "output", SW3: "input", PGC: "input", PGD: "bidirectional", VSS_7: "power_in", VDD_8: "passive", CTRL_IN: "input", RF_OUT: "output", VSS_11: "passive", DATA_IN: "input", XTAL: "input", CTRL_OUT: "output", DATA_OUT: "output", "~{LED}": "output", SW2: "input", SW1: "input", SW0: "input", VSS_20: "passive", ...opts.pinTypes } });
  }
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
 */
export class SA605D extends Component.withPins({
  "RF_IN": "1",
  "RF_BYPASS": "2",
  "OSC_OUT": "3",
  "OSC_IN": "4",
  "MUTE_INPUT": "5",
  "VCC": "6",
  "RSSI_OUT": "7",
  "MUTED_AUD_OUTP": "8",
  "UNMUTED_AUD_OUTP": "9",
  "QUADRATURE_IN": "10",
  "LIMITER_OUT": "11",
  "LIMITER_DECOUPL_12": "12",
  "LIMITER_DECOUPL_13": "13",
  "LIMITER_IN": "14",
  "GND": "15",
  "IF_AMP_OUT": "16",
  "IF_AMP_DECOUPL_17": "17",
  "IF_AMP_IN": "18",
  "IF_AMP_DECOUPL_19": "19",
  "MIXER_OUT": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF_IN: "input", RF_BYPASS: "input", OSC_OUT: "output", OSC_IN: "input", MUTE_INPUT: "input", VCC: "power_in", RSSI_OUT: "output", MUTED_AUD_OUTP: "output", UNMUTED_AUD_OUTP: "output", QUADRATURE_IN: "input", LIMITER_OUT: "output", LIMITER_DECOUPL_12: "input", LIMITER_DECOUPL_13: "input", LIMITER_IN: "input", GND: "power_in", IF_AMP_OUT: "output", IF_AMP_DECOUPL_17: "input", IF_AMP_IN: "input", IF_AMP_DECOUPL_19: "input", MIXER_OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class SA605DK extends Component.withPins({
  "RF_IN": "1",
  "RF_BYPASS": "2",
  "OSC_OUT": "3",
  "OSC_IN": "4",
  "MUTE_INPUT": "5",
  "VCC": "6",
  "RSSI_OUT": "7",
  "MUTED_AUD_OUTP": "8",
  "UNMUTED_AUD_OUTP": "9",
  "QUADRATURE_IN": "10",
  "LIMITER_OUT": "11",
  "LIMITER_DECOUPL_12": "12",
  "LIMITER_DECOUPL_13": "13",
  "LIMITER_IN": "14",
  "GND": "15",
  "IF_AMP_OUT": "16",
  "IF_AMP_DECOUPL_17": "17",
  "IF_AMP_IN": "18",
  "IF_AMP_DECOUPL_19": "19",
  "MIXER_OUT": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF_IN: "input", RF_BYPASS: "input", OSC_OUT: "output", OSC_IN: "input", MUTE_INPUT: "input", VCC: "power_in", RSSI_OUT: "output", MUTED_AUD_OUTP: "output", UNMUTED_AUD_OUTP: "output", QUADRATURE_IN: "input", LIMITER_OUT: "output", LIMITER_DECOUPL_12: "input", LIMITER_DECOUPL_13: "input", LIMITER_IN: "input", GND: "power_in", IF_AMP_OUT: "output", IF_AMP_DECOUPL_17: "input", IF_AMP_IN: "input", IF_AMP_DECOUPL_19: "input", MIXER_OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class SA636DK extends Component.withPins({
  "RF_IN": "1",
  "RF_IN_DECOUPL": "2",
  "OSC_OUT": "3",
  "OSC_IN": "4",
  "VCC": "5",
  "RSSI_FEEDBACK": "6",
  "RSSI_OUT": "7",
  "POWER_DOWN_CTRL": "8",
  "DATA_OUT": "9",
  "QUADRATURE_IN": "10",
  "LIMITER_OUT": "11",
  "LIMITER_DECOUPL_12": "12",
  "LIMITER_DECOUPL_13": "13",
  "LIMITER_IN": "14",
  "GND": "15",
  "IF_AMP_OUT": "16",
  "IF_AMP_DECOUPL_17": "17",
  "IF_AMP_IN": "18",
  "IF_AMP_DECOUPL_19": "19",
  "MIXER_OUT": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF_IN: "input", RF_IN_DECOUPL: "passive", OSC_OUT: "output", OSC_IN: "input", VCC: "power_in", RSSI_FEEDBACK: "input", RSSI_OUT: "output", POWER_DOWN_CTRL: "input", DATA_OUT: "output", QUADRATURE_IN: "input", LIMITER_OUT: "output", LIMITER_DECOUPL_12: "passive", LIMITER_DECOUPL_13: "passive", LIMITER_IN: "input", GND: "power_in", IF_AMP_OUT: "output", IF_AMP_DECOUPL_17: "passive", IF_AMP_IN: "input", IF_AMP_DECOUPL_19: "passive", MIXER_OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class Si4362 extends Component.withPins({
  "SDN": "1",
  "RXp": "2",
  "RXn": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VDD_6": "6",
  "NC_7": "7",
  "VDD_8": "8",
  "GPIO0": "9",
  "GPIO1": "10",
  "~{IRQ}": "11",
  "SCLK": "12",
  "SDO": "13",
  "SDI": "14",
  "~{SEL}": "15",
  "XOUT": "16",
  "XIN": "17",
  "GND_18": "18",
  "GPIO2": "19",
  "GPIO3": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDN: "input", RXp: "input", RXn: "input", NC_4: "no_connect", NC_5: "no_connect", VDD_6: "power_in", NC_7: "no_connect", VDD_8: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", "~{IRQ}": "output", SCLK: "input", SDO: "output", SDI: "input", "~{SEL}": "input", XOUT: "output", XIN: "input", GND_18: "power_in", GPIO2: "bidirectional", GPIO3: "bidirectional", GND_21: "power_in", ...opts.pinTypes } });
  }
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
 */
export class Si4735_D60_GU extends Component.withPins({
  "DOUT": "1",
  "DFS": "2",
  "GPO3/[DCLK]": "3",
  "GPO2/[~{INT}]": "4",
  "GPO1": "5",
  "NC_6": "6",
  "NC_7": "7",
  "FMI": "8",
  "RFGND": "9",
  "NC_10": "10",
  "NC_11": "11",
  "AMI": "12",
  "GND_13": "13",
  "GND_14": "14",
  "~{RST}": "15",
  "~{SEN}": "16",
  "SCLK": "17",
  "SDIO": "18",
  "RCLK": "19",
  "VD": "20",
  "VA": "21",
  "DBYP": "22",
  "ROUT/[DOUT]": "23",
  "LOUT/[DFS]": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", DFS: "input", "GPO3/[DCLK]": "bidirectional", "GPO2/[~{INT}]": "output", GPO1: "output", NC_6: "no_connect", NC_7: "no_connect", FMI: "input", RFGND: "power_in", NC_10: "no_connect", NC_11: "no_connect", AMI: "input", GND_13: "power_in", GND_14: "power_in", "~{RST}": "input", "~{SEN}": "input", SCLK: "input", SDIO: "bidirectional", RCLK: "input", VD: "power_in", VA: "power_in", DBYP: "passive", "ROUT/[DOUT]": "output", "LOUT/[DFS]": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class Si4730_D60_GU extends Component.withPins({
  "DOUT": "1",
  "DFS": "2",
  "GPO3/[DCLK]": "3",
  "GPO2/[~{INT}]": "4",
  "GPO1": "5",
  "NC_6": "6",
  "NC_7": "7",
  "FMI": "8",
  "RFGND": "9",
  "NC_10": "10",
  "NC_11": "11",
  "AMI": "12",
  "GND_13": "13",
  "GND_14": "14",
  "~{RST}": "15",
  "~{SEN}": "16",
  "SCLK": "17",
  "SDIO": "18",
  "RCLK": "19",
  "VD": "20",
  "VA": "21",
  "DBYP": "22",
  "ROUT/[DOUT]": "23",
  "LOUT/[DFS]": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", DFS: "input", "GPO3/[DCLK]": "bidirectional", "GPO2/[~{INT}]": "output", GPO1: "output", NC_6: "no_connect", NC_7: "no_connect", FMI: "input", RFGND: "power_in", NC_10: "no_connect", NC_11: "no_connect", AMI: "input", GND_13: "power_in", GND_14: "power_in", "~{RST}": "input", "~{SEN}": "input", SCLK: "input", SDIO: "bidirectional", RCLK: "input", VD: "power_in", VA: "power_in", DBYP: "passive", "ROUT/[DOUT]": "output", "LOUT/[DFS]": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class Si4731_D60_GU extends Component.withPins({
  "DOUT": "1",
  "DFS": "2",
  "GPO3/[DCLK]": "3",
  "GPO2/[~{INT}]": "4",
  "GPO1": "5",
  "NC_6": "6",
  "NC_7": "7",
  "FMI": "8",
  "RFGND": "9",
  "NC_10": "10",
  "NC_11": "11",
  "AMI": "12",
  "GND_13": "13",
  "GND_14": "14",
  "~{RST}": "15",
  "~{SEN}": "16",
  "SCLK": "17",
  "SDIO": "18",
  "RCLK": "19",
  "VD": "20",
  "VA": "21",
  "DBYP": "22",
  "ROUT/[DOUT]": "23",
  "LOUT/[DFS]": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", DFS: "input", "GPO3/[DCLK]": "bidirectional", "GPO2/[~{INT}]": "output", GPO1: "output", NC_6: "no_connect", NC_7: "no_connect", FMI: "input", RFGND: "power_in", NC_10: "no_connect", NC_11: "no_connect", AMI: "input", GND_13: "power_in", GND_14: "power_in", "~{RST}": "input", "~{SEN}": "input", SCLK: "input", SDIO: "bidirectional", RCLK: "input", VD: "power_in", VA: "power_in", DBYP: "passive", "ROUT/[DOUT]": "output", "LOUT/[DFS]": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class Si4734_D60_GU extends Component.withPins({
  "DOUT": "1",
  "DFS": "2",
  "GPO3/[DCLK]": "3",
  "GPO2/[~{INT}]": "4",
  "GPO1": "5",
  "NC_6": "6",
  "NC_7": "7",
  "FMI": "8",
  "RFGND": "9",
  "NC_10": "10",
  "NC_11": "11",
  "AMI": "12",
  "GND_13": "13",
  "GND_14": "14",
  "~{RST}": "15",
  "~{SEN}": "16",
  "SCLK": "17",
  "SDIO": "18",
  "RCLK": "19",
  "VD": "20",
  "VA": "21",
  "DBYP": "22",
  "ROUT/[DOUT]": "23",
  "LOUT/[DFS]": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", DFS: "input", "GPO3/[DCLK]": "bidirectional", "GPO2/[~{INT}]": "output", GPO1: "output", NC_6: "no_connect", NC_7: "no_connect", FMI: "input", RFGND: "power_in", NC_10: "no_connect", NC_11: "no_connect", AMI: "input", GND_13: "power_in", GND_14: "power_in", "~{RST}": "input", "~{SEN}": "input", SCLK: "input", SDIO: "bidirectional", RCLK: "input", VD: "power_in", VA: "power_in", DBYP: "passive", "ROUT/[DOUT]": "output", "LOUT/[DFS]": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class ZETA_433_SO extends Component.withPins({
  "ANT": "1",
  "GND": "2",
  "SDN": "3",
  "VCC": "4",
  "~{IRQ}": "5",
  "NC": "6",
  "GPIO1": "7",
  "GPIO2": "8",
  "SCLK": "9",
  "SDI": "10",
  "SDO": "11",
  "SEL": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ANT: "bidirectional", GND: "power_in", SDN: "input", VCC: "power_in", "~{IRQ}": "output", NC: "no_connect", GPIO1: "bidirectional", GPIO2: "bidirectional", SCLK: "input", SDI: "input", SDO: "output", SEL: "input", ...opts.pinTypes } });
  }
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
 */
export class ZETA_868_SO extends Component.withPins({
  "ANT": "1",
  "GND": "2",
  "SDN": "3",
  "VCC": "4",
  "~{IRQ}": "5",
  "NC": "6",
  "GPIO1": "7",
  "GPIO2": "8",
  "SCLK": "9",
  "SDI": "10",
  "SDO": "11",
  "SEL": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ANT: "bidirectional", GND: "power_in", SDN: "input", VCC: "power_in", "~{IRQ}": "output", NC: "no_connect", GPIO1: "bidirectional", GPIO2: "bidirectional", SCLK: "input", SDI: "input", SDO: "output", SEL: "input", ...opts.pinTypes } });
  }
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
 */
export class ZETA_915_SO extends Component.withPins({
  "ANT": "1",
  "GND": "2",
  "SDN": "3",
  "VCC": "4",
  "~{IRQ}": "5",
  "NC": "6",
  "GPIO1": "7",
  "GPIO2": "8",
  "SCLK": "9",
  "SDI": "10",
  "SDO": "11",
  "SEL": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ANT: "bidirectional", GND: "power_in", SDN: "input", VCC: "power_in", "~{IRQ}": "output", NC: "no_connect", GPIO1: "bidirectional", GPIO2: "bidirectional", SCLK: "input", SDI: "input", SDO: "output", SEL: "input", ...opts.pinTypes } });
  }
  override schema = "RF_AM_FM:ZETA-915-SO";
  override referencePrefix = "U";
}
