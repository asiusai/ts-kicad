// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * RMII Single 10/100Mbps Ethernet Physical Layer Transceiver, up to 150m reach, Energy-Efficient-Ethernet, Cable Diagnostics, QFN-24
 *
 * KiCad symbol: `Interface_Ethernet:DP83825I`. Reference prefix: `U`.
 * Footprint filters: Texas*RMQ*.
 * @see https://www.ti.com/lit/ds/symlink/dp83825i.pdf
 * Keywords: Ethernet 802.3 PHY Texas EEE extended TDR.
 * Default footprint: Package_DFN_QFN:Texas_RMQ0024A_WQFN-24-1EP_3x3mm_P0.4mm_EP1.9x1.9mm.
 */
export class DP83825I extends Component.withPins({
  "50MHzOut/LED2/S(RX_DV_EN)": "2",
  "INTR/~{PWRDN}": "3",
  "TX_EN": "1",
  "LED0/S(ANEG_Dis)": "4",
  "~{RST}": "5",
  "VDDA3V3": "6",
  "RD-": "7",
  "RD+": "8",
  "GND_9": "9",
  "TD-": "10",
  "TD+": "11",
  "XO": "12",
  "XI/50MHzIn": "13",
  "RBIAS": "14",
  "MDIO": "15",
  "MDC": "16",
  "RX_D1/S(Master/Slave)": "17",
  "RX_D0/S(PhyAdd[0])": "18",
  "VDDIO": "19",
  "CRS_DV/S(PhyAdd[1])": "20",
  "GND_21": "21",
  "RX_ER/S(A-MDIX)": "22",
  "TX_D0": "23",
  "TX_D1": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "50MHzOut/LED2/S(RX_DV_EN)": "bidirectional", "INTR/~{PWRDN}": "input", TX_EN: "input", "LED0/S(ANEG_Dis)": "bidirectional", "~{RST}": "input", VDDA3V3: "power_in", "RD-": "input", "RD+": "input", GND_9: "power_in", "TD-": "input", "TD+": "input", XO: "output", "XI/50MHzIn": "input", RBIAS: "input", MDIO: "bidirectional", MDC: "input", "RX_D1/S(Master/Slave)": "output", "RX_D0/S(PhyAdd[0])": "output", VDDIO: "power_in", "CRS_DV/S(PhyAdd[1])": "input", GND_21: "passive", "RX_ER/S(A-MDIX)": "output", TX_D0: "input", TX_D1: "input", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:DP83825I";
  override referencePrefix = "U";
}

/**
 * MII/RMII Single 10/100Mbps Ethernet Physical Layer Transceiver, LQFP-48
 *
 * KiCad symbol: `Interface_Ethernet:DP83848C`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/dp83848c.pdf
 * Keywords: Ethernet PHY MII RMII 10/100Mpbs.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class DP83848C extends Component.withPins({
  "TX_CLK": "1",
  "TX_EN": "2",
  "TXD_0": "3",
  "TXD_1": "4",
  "TXD_2": "5",
  "TXD_3/SNI_MODE": "6",
  "PWR_DOWN/INT": "7",
  "RD-": "13",
  "RD+": "14",
  "AGND_15": "15",
  "TD-": "16",
  "TD+": "17",
  "PFBIN1": "18",
  "AGND_19": "19",
  "RESERVED_20": "20",
  "RESERVED_21": "21",
  "AVDD33": "22",
  "PFBOUT": "23",
  "RBIAS": "24",
  "25M_OUT": "25",
  "AN_EN/LED_ACT/COL": "26",
  "AN1/LED_SPEED": "27",
  "AN0/LED_LINK": "28",
  "~{RESET}": "29",
  "MDIO": "30",
  "MDC": "31",
  "IOVDD33_32": "32",
  "X2": "33",
  "X1": "34",
  "IOGND_35": "35",
  "DGND": "36",
  "PFBIN2": "37",
  "RX_CLK": "38",
  "RX_DV/MII_MODE": "39",
  "CRS/CRS_DV/LED_CFG": "40",
  "RX_ER/MDIX_EN": "41",
  "COL/PHY_AD0": "42",
  "RXD_0/PHY_AD1": "43",
  "RXD_1/PHY_AD2": "44",
  "RXD_2/PHY_AD3": "45",
  "RXD_3/PHY_AD4": "46",
  "IOGND_47": "47",
  "IOVDD33_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TX_CLK: "output", TX_EN: "input", TXD_0: "input", TXD_1: "input", TXD_2: "input", "TXD_3/SNI_MODE": "input", "PWR_DOWN/INT": "input", "RD-": "passive", "RD+": "passive", AGND_15: "power_in", "TD-": "passive", "TD+": "passive", PFBIN1: "passive", AGND_19: "passive", RESERVED_20: "passive", RESERVED_21: "passive", AVDD33: "power_in", PFBOUT: "passive", RBIAS: "passive", "25M_OUT": "output", "AN_EN/LED_ACT/COL": "output", "AN1/LED_SPEED": "output", "AN0/LED_LINK": "output", "~{RESET}": "input", MDIO: "bidirectional", MDC: "input", IOVDD33_32: "power_in", X2: "output", X1: "input", IOGND_35: "power_in", DGND: "power_in", PFBIN2: "passive", RX_CLK: "output", "RX_DV/MII_MODE": "output", "CRS/CRS_DV/LED_CFG": "output", "RX_ER/MDIX_EN": "output", "COL/PHY_AD0": "output", "RXD_0/PHY_AD1": "output", "RXD_1/PHY_AD2": "output", "RXD_2/PHY_AD3": "output", "RXD_3/PHY_AD4": "output", IOGND_47: "passive", IOVDD33_48: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:DP83848C";
  override referencePrefix = "U";
}

/**
 * MII/RMII Single 10/100Mbps Ethernet Physical Layer Transceiver, LQFP-48
 *
 * KiCad symbol: `Interface_Ethernet:DP83848I`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/dp83848c.pdf
 * Keywords: Ethernet PHY MII RMII 10/100Mpbs.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class DP83848I extends Component.withPins({
  "TX_CLK": "1",
  "TX_EN": "2",
  "TXD_0": "3",
  "TXD_1": "4",
  "TXD_2": "5",
  "TXD_3/SNI_MODE": "6",
  "PWR_DOWN/INT": "7",
  "RD-": "13",
  "RD+": "14",
  "AGND_15": "15",
  "TD-": "16",
  "TD+": "17",
  "PFBIN1": "18",
  "AGND_19": "19",
  "RESERVED_20": "20",
  "RESERVED_21": "21",
  "AVDD33": "22",
  "PFBOUT": "23",
  "RBIAS": "24",
  "25M_OUT": "25",
  "AN_EN/LED_ACT/COL": "26",
  "AN1/LED_SPEED": "27",
  "AN0/LED_LINK": "28",
  "~{RESET}": "29",
  "MDIO": "30",
  "MDC": "31",
  "IOVDD33_32": "32",
  "X2": "33",
  "X1": "34",
  "IOGND_35": "35",
  "DGND": "36",
  "PFBIN2": "37",
  "RX_CLK": "38",
  "RX_DV/MII_MODE": "39",
  "CRS/CRS_DV/LED_CFG": "40",
  "RX_ER/MDIX_EN": "41",
  "COL/PHY_AD0": "42",
  "RXD_0/PHY_AD1": "43",
  "RXD_1/PHY_AD2": "44",
  "RXD_2/PHY_AD3": "45",
  "RXD_3/PHY_AD4": "46",
  "IOGND_47": "47",
  "IOVDD33_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TX_CLK: "output", TX_EN: "input", TXD_0: "input", TXD_1: "input", TXD_2: "input", "TXD_3/SNI_MODE": "input", "PWR_DOWN/INT": "input", "RD-": "passive", "RD+": "passive", AGND_15: "power_in", "TD-": "passive", "TD+": "passive", PFBIN1: "passive", AGND_19: "passive", RESERVED_20: "passive", RESERVED_21: "passive", AVDD33: "power_in", PFBOUT: "passive", RBIAS: "passive", "25M_OUT": "output", "AN_EN/LED_ACT/COL": "output", "AN1/LED_SPEED": "output", "AN0/LED_LINK": "output", "~{RESET}": "input", MDIO: "bidirectional", MDC: "input", IOVDD33_32: "power_in", X2: "output", X1: "input", IOGND_35: "power_in", DGND: "power_in", PFBIN2: "passive", RX_CLK: "output", "RX_DV/MII_MODE": "output", "CRS/CRS_DV/LED_CFG": "output", "RX_ER/MDIX_EN": "output", "COL/PHY_AD0": "output", "RXD_0/PHY_AD1": "output", "RXD_1/PHY_AD2": "output", "RXD_2/PHY_AD3": "output", "RXD_3/PHY_AD4": "output", IOGND_47: "passive", IOVDD33_48: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:DP83848I";
  override referencePrefix = "U";
}

/**
 * ENC28J60 Single Chip Ethernet Interface,QFN-28
 *
 * KiCad symbol: `Interface_Ethernet:ENC28J60x-ML`. Reference prefix: `U`.
 * Footprint filters: QFN*28*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39662e.pdf
 * Keywords: ENC Ethernet.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class ENC28J60x_ML extends Component.withPins({
  "~{WOL}": "1",
  "SO": "2",
  "SI": "3",
  "SCK": "4",
  "~{CS}": "5",
  "~{RESET}": "6",
  "VSSRX": "7",
  "TPIN-": "8",
  "TPIN+": "9",
  "RBIAS": "10",
  "VDDTX": "11",
  "TPOUT-": "12",
  "TPOUT+": "13",
  "VSSTX": "14",
  "VDDRX": "15",
  "VDDPLL": "16",
  "VSSPLL": "17",
  "VSSOSC": "18",
  "OSC1": "19",
  "OSC2": "20",
  "VDDOSC": "21",
  "LEDB": "22",
  "LEDA": "23",
  "VDD": "24",
  "VCAP": "25",
  "VSS": "26",
  "CLKOUT": "27",
  "~{INT}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{WOL}": "output", SO: "output", SI: "input", SCK: "input", "~{CS}": "input", "~{RESET}": "input", VSSRX: "power_out", "TPIN-": "input", "TPIN+": "input", RBIAS: "input", VDDTX: "power_in", "TPOUT-": "output", "TPOUT+": "output", VSSTX: "power_out", VDDRX: "power_in", VDDPLL: "power_in", VSSPLL: "power_in", VSSOSC: "power_in", OSC1: "input", OSC2: "output", VDDOSC: "power_in", LEDB: "output", LEDA: "output", VDD: "power_in", VCAP: "input", VSS: "power_in", CLKOUT: "output", "~{INT}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:ENC28J60x-ML";
  override referencePrefix = "U";
}

/**
 * ENC28J60 Single Chip Ethernet Interface, SOIC-28
 *
 * KiCad symbol: `Interface_Ethernet:ENC28J60x-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*28*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39662e.pdf
 * Keywords: ENC Ethernet.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class ENC28J60x_SO extends Component.withPins({
  "VCAP": "1",
  "VSS": "2",
  "CLKOUT": "3",
  "~{INT}": "4",
  "~{WOL}": "5",
  "SO": "6",
  "SI": "7",
  "SCK": "8",
  "~{CS}": "9",
  "~{RESET}": "10",
  "VSSRX": "11",
  "TPIN-": "12",
  "TPIN+": "13",
  "RBIAS": "14",
  "VDDTX": "15",
  "TPOUT-": "16",
  "TPOUT+": "17",
  "VSSTX": "18",
  "VDDRX": "19",
  "VDDPLL": "20",
  "VSSPLL": "21",
  "VSSOSC": "22",
  "OSC1": "23",
  "OSC2": "24",
  "VDDOSC": "25",
  "LEDB": "26",
  "LEDA": "27",
  "VDD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCAP: "input", VSS: "power_in", CLKOUT: "output", "~{INT}": "output", "~{WOL}": "output", SO: "output", SI: "input", SCK: "input", "~{CS}": "input", "~{RESET}": "input", VSSRX: "power_in", "TPIN-": "input", "TPIN+": "input", RBIAS: "input", VDDTX: "power_in", "TPOUT-": "output", "TPOUT+": "output", VSSTX: "power_in", VDDRX: "power_in", VDDPLL: "power_in", VSSPLL: "power_in", VSSOSC: "power_in", OSC1: "input", OSC2: "input", VDDOSC: "power_in", LEDB: "output", LEDA: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:ENC28J60x-SO";
  override referencePrefix = "U";
}

/**
 * ENC28J60 Single Chip Ethernet Interface, DIP-28
 *
 * KiCad symbol: `Interface_Ethernet:ENC28J60x-SP`. Reference prefix: `U`.
 * Footprint filters: DIP*28*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39662e.pdf
 * Keywords: ENC Ethernet.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class ENC28J60x_SP extends Component.withPins({
  "VCAP": "1",
  "VSS": "2",
  "CLKOUT": "3",
  "~{INT}": "4",
  "~{WOL}": "5",
  "SO": "6",
  "SI": "7",
  "SCK": "8",
  "~{CS}": "9",
  "~{RESET}": "10",
  "VSSRX": "11",
  "TPIN-": "12",
  "TPIN+": "13",
  "RBIAS": "14",
  "VDDTX": "15",
  "TPOUT-": "16",
  "TPOUT+": "17",
  "VSSTX": "18",
  "VDDRX": "19",
  "VDDPLL": "20",
  "VSSPLL": "21",
  "VSSOSC": "22",
  "OSC1": "23",
  "OSC2": "24",
  "VDDOSC": "25",
  "LEDB": "26",
  "LEDA": "27",
  "VDD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCAP: "input", VSS: "power_in", CLKOUT: "output", "~{INT}": "output", "~{WOL}": "output", SO: "output", SI: "input", SCK: "input", "~{CS}": "input", "~{RESET}": "input", VSSRX: "power_in", "TPIN-": "input", "TPIN+": "input", RBIAS: "input", VDDTX: "power_in", "TPOUT-": "output", "TPOUT+": "output", VSSTX: "power_in", VDDRX: "power_in", VDDPLL: "power_in", VSSPLL: "power_in", VSSOSC: "power_in", OSC1: "input", OSC2: "input", VDDOSC: "power_in", LEDB: "output", LEDA: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:ENC28J60x-SP";
  override referencePrefix = "U";
}

/**
 * ENC28J60 Single Chip Ethernet Interface, SSOP-28
 *
 * KiCad symbol: `Interface_Ethernet:ENC28J60x-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*28*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39662e.pdf
 * Keywords: ENC Ethernet.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class ENC28J60x_SS extends Component.withPins({
  "VCAP": "1",
  "VSS": "2",
  "CLKOUT": "3",
  "~{INT}": "4",
  "~{WOL}": "5",
  "SO": "6",
  "SI": "7",
  "SCK": "8",
  "~{CS}": "9",
  "~{RESET}": "10",
  "VSSRX": "11",
  "TPIN-": "12",
  "TPIN+": "13",
  "RBIAS": "14",
  "VDDTX": "15",
  "TPOUT-": "16",
  "TPOUT+": "17",
  "VSSTX": "18",
  "VDDRX": "19",
  "VDDPLL": "20",
  "VSSPLL": "21",
  "VSSOSC": "22",
  "OSC1": "23",
  "OSC2": "24",
  "VDDOSC": "25",
  "LEDB": "26",
  "LEDA": "27",
  "VDD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCAP: "input", VSS: "power_in", CLKOUT: "output", "~{INT}": "output", "~{WOL}": "output", SO: "output", SI: "input", SCK: "input", "~{CS}": "input", "~{RESET}": "input", VSSRX: "power_in", "TPIN-": "input", "TPIN+": "input", RBIAS: "input", VDDTX: "power_in", "TPOUT-": "output", "TPOUT+": "output", VSSTX: "power_in", VDDRX: "power_in", VDDPLL: "power_in", VSSPLL: "power_in", VSSOSC: "power_in", OSC1: "input", OSC2: "input", VDDOSC: "power_in", LEDB: "output", LEDA: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:ENC28J60x-SS";
  override referencePrefix = "U";
}

/**
 * Stand-Alone 10/100 Ethernet Controller with SPI or Parallel Interface, QFN-44
 *
 * KiCad symbol: `Interface_Ethernet:ENC424J600-ML`. Reference prefix: `U`.
 * Footprint filters: QFN*44*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39935c.pdf
 * Keywords: ENC Ethernet.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class ENC424J600_ML extends Component.withPins({
  "VSSOSC": "1",
  "OSC2": "2",
  "OSC1": "3",
  "VDDOSC": "4",
  "AD4": "5",
  "AD5": "6",
  "AD6": "7",
  "AD7": "8",
  "LEDB": "9",
  "LEDA": "10",
  "RBIAS": "11",
  "VDDPLL": "12",
  "VSSPLL": "13",
  "VSSRX": "14",
  "VDDRX": "15",
  "TPIN+": "16",
  "TPIN-": "17",
  "VDDTX": "18",
  "VSSTX_19": "19",
  "TPOUT+": "20",
  "TPOUT-": "21",
  "VSSTX_22": "22",
  "CLKOUT": "23",
  "~{INT}/SPISEL": "24",
  "AD8": "25",
  "AD9": "26",
  "AD10": "27",
  "AD11": "28",
  "AD12": "29",
  "AD13": "30",
  "AD14": "31",
  "PSPCFG0": "32",
  "VSS_33": "33",
  "~{CS}/CS": "34",
  "SO/WR/EN": "35",
  "SI/RD/R~{W}": "36",
  "SCK/AL": "37",
  "AD0": "38",
  "AD1": "39",
  "AD2": "40",
  "AD3": "41",
  "VSS_42": "42",
  "VCAP": "43",
  "VDD": "44",
  "EP": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSOSC: "power_in", OSC2: "output", OSC1: "input", VDDOSC: "power_in", AD4: "bidirectional", AD5: "bidirectional", AD6: "bidirectional", AD7: "bidirectional", LEDB: "output", LEDA: "output", RBIAS: "input", VDDPLL: "power_in", VSSPLL: "power_in", VSSRX: "power_in", VDDRX: "power_in", "TPIN+": "input", "TPIN-": "input", VDDTX: "power_in", VSSTX_19: "power_in", "TPOUT+": "output", "TPOUT-": "output", VSSTX_22: "passive", CLKOUT: "output", "~{INT}/SPISEL": "bidirectional", AD8: "bidirectional", AD9: "bidirectional", AD10: "bidirectional", AD11: "bidirectional", AD12: "bidirectional", AD13: "bidirectional", AD14: "bidirectional", PSPCFG0: "input", VSS_33: "power_in", "~{CS}/CS": "input", "SO/WR/EN": "bidirectional", "SI/RD/R~{W}": "input", "SCK/AL": "input", AD0: "bidirectional", AD1: "input", AD2: "bidirectional", AD3: "bidirectional", VSS_42: "passive", VCAP: "input", VDD: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:ENC424J600-ML";
  override referencePrefix = "U";
}

/**
 * Stand-Alone 10/100 Ethernet Controller with SPI or Parallel Interface, TQFP-44
 *
 * KiCad symbol: `Interface_Ethernet:ENC424J600-PT`. Reference prefix: `U`.
 * Footprint filters: TQFP*44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39935c.pdf
 * Keywords: ENC Ethernet.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class ENC424J600_PT extends Component.withPins({
  "VSSOSC": "1",
  "OSC2": "2",
  "OSC1": "3",
  "VDDOSC": "4",
  "AD4": "5",
  "AD5": "6",
  "AD6": "7",
  "AD7": "8",
  "LEDB": "9",
  "LEDA": "10",
  "RBIAS": "11",
  "VDDPLL": "12",
  "VSSPLL": "13",
  "VSSRX": "14",
  "VDDRX": "15",
  "TPIN+": "16",
  "TPIN-": "17",
  "VDDTX": "18",
  "VSSTX_19": "19",
  "TPOUT+": "20",
  "TPOUT-": "21",
  "VSSTX_22": "22",
  "CLKOUT": "23",
  "~{INT}/SPISEL": "24",
  "AD8": "25",
  "AD9": "26",
  "AD10": "27",
  "AD11": "28",
  "AD12": "29",
  "AD13": "30",
  "AD14": "31",
  "PSPCFG0": "32",
  "VSS_33": "33",
  "~{CS}/CS": "34",
  "SO/WR/EN": "35",
  "SI/RD/R~{W}": "36",
  "SCK/AL": "37",
  "AD0": "38",
  "AD1": "39",
  "AD2": "40",
  "AD3": "41",
  "VSS_42": "42",
  "VCAP": "43",
  "VDD": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSOSC: "power_in", OSC2: "output", OSC1: "input", VDDOSC: "power_in", AD4: "bidirectional", AD5: "bidirectional", AD6: "bidirectional", AD7: "bidirectional", LEDB: "output", LEDA: "output", RBIAS: "input", VDDPLL: "power_in", VSSPLL: "power_in", VSSRX: "power_in", VDDRX: "power_in", "TPIN+": "input", "TPIN-": "input", VDDTX: "power_in", VSSTX_19: "power_in", "TPOUT+": "output", "TPOUT-": "output", VSSTX_22: "passive", CLKOUT: "output", "~{INT}/SPISEL": "bidirectional", AD8: "bidirectional", AD9: "bidirectional", AD10: "bidirectional", AD11: "bidirectional", AD12: "bidirectional", AD13: "bidirectional", AD14: "bidirectional", PSPCFG0: "input", VSS_33: "power_in", "~{CS}/CS": "input", "SO/WR/EN": "bidirectional", "SI/RD/R~{W}": "input", "SCK/AL": "input", AD0: "bidirectional", AD1: "input", AD2: "bidirectional", AD3: "bidirectional", VSS_42: "passive", VCAP: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:ENC424J600-PT";
  override referencePrefix = "U";
}

/**
 * 10BASE-T/100BASE-TX PHY with RMII Support, 25 MHz input clock, LQFP-48
 *
 * KiCad symbol: `Interface_Ethernet:KSZ8081MLX`. Reference prefix: `U`.
 * Footprint filters: LQFP?48*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/KSZ8081MLX.pdf
 * Keywords: ETH PHY RMII MII.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class KSZ8081MLX extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "VDD_1.2_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "VDDA_3.3": "7",
  "NC_8": "8",
  "RXM": "9",
  "RXP": "10",
  "TXM": "11",
  "TXP": "12",
  "GND_13": "13",
  "XO": "14",
  "XI": "15",
  "REXT": "16",
  "GND_17": "17",
  "MDIO": "18",
  "MDC": "19",
  "RXD3/PHYAD0": "20",
  "RXD2/PHYAD1": "21",
  "RXD1/PHYAD2": "22",
  "RXD0/DUPLEX": "23",
  "GND_24": "24",
  "VDDIO": "25",
  "NC_26": "26",
  "RXDV/CONFIG2": "27",
  "RXC/B-CAST_OFF": "28",
  "RXER/ISO": "29",
  "GND_30": "30",
  "VDD_1.2_31": "31",
  "INTRP/NAND_Tree#": "32",
  "TXC": "33",
  "TXEN": "34",
  "TXD0": "35",
  "TXD1": "36",
  "GND_37": "37",
  "TXD2": "38",
  "TXD3": "39",
  "COL/CONFIG0": "40",
  "CRS/CONFIG1": "41",
  "LED0/NWAYEN": "42",
  "LED1/SPEED": "43",
  "TEST/NC": "44",
  "NC_45": "45",
  "NC_46": "46",
  "~{RST}": "47",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", "VDD_1.2_4": "power_out", NC_5: "no_connect", NC_6: "no_connect", "VDDA_3.3": "power_in", NC_8: "no_connect", RXM: "passive", RXP: "passive", TXM: "passive", TXP: "passive", GND_13: "passive", XO: "output", XI: "input", REXT: "passive", GND_17: "passive", MDIO: "bidirectional", MDC: "input", "RXD3/PHYAD0": "output", "RXD2/PHYAD1": "output", "RXD1/PHYAD2": "output", "RXD0/DUPLEX": "output", GND_24: "passive", VDDIO: "power_in", NC_26: "no_connect", "RXDV/CONFIG2": "bidirectional", "RXC/B-CAST_OFF": "bidirectional", "RXER/ISO": "output", GND_30: "passive", "VDD_1.2_31": "power_in", "INTRP/NAND_Tree#": "bidirectional", TXC: "bidirectional", TXEN: "input", TXD0: "input", TXD1: "input", GND_37: "passive", TXD2: "input", TXD3: "input", "COL/CONFIG0": "bidirectional", "CRS/CONFIG1": "bidirectional", "LED0/NWAYEN": "bidirectional", "LED1/SPEED": "output", "TEST/NC": "no_connect", NC_45: "no_connect", NC_46: "no_connect", "~{RST}": "input", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:KSZ8081MLX";
  override referencePrefix = "U";
}

/**
 * 10BASE-T/100BASE-TX PHY with RMII Support, 25 MHz input clock/50 MHz output, QFN-24
 *
 * KiCad symbol: `Interface_Ethernet:KSZ8081RNA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002199A.pdf
 * Keywords: ETH PHY RMII.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class KSZ8081RNA extends Component.withPins({
  "VDD_1.2": "1",
  "VDDA_3.3": "2",
  "RXM": "3",
  "RXP": "4",
  "TXM": "5",
  "TXP": "6",
  "XO": "7",
  "XI": "8",
  "REXT": "9",
  "MDIO": "10",
  "MDC": "11",
  "RXD1": "12",
  "RXD0": "13",
  "VDDIO": "14",
  "CRS_DV/PHYAD[1:0]": "15",
  "REF_CLK": "16",
  "RXER": "17",
  "INTRP": "18",
  "TXEN": "19",
  "TXD0": "20",
  "TXD1": "21",
  "GND_22": "22",
  "LED0/ANEN_SPEED": "23",
  "~{RST}": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VDD_1.2": "power_out", "VDDA_3.3": "power_in", RXM: "bidirectional", RXP: "bidirectional", TXM: "bidirectional", TXP: "bidirectional", XO: "output", XI: "input", REXT: "passive", MDIO: "bidirectional", MDC: "input", RXD1: "output", RXD0: "output", VDDIO: "power_in", "CRS_DV/PHYAD[1:0]": "output", REF_CLK: "output", RXER: "output", INTRP: "bidirectional", TXEN: "input", TXD0: "input", TXD1: "bidirectional", GND_22: "power_in", "LED0/ANEN_SPEED": "output", "~{RST}": "input", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:KSZ8081RNA";
  override referencePrefix = "U";
}

/**
 * 10BASE-T/100BASE-TX PHY with RMII Support, 50 MHz input clock, QFN-24
 *
 * KiCad symbol: `Interface_Ethernet:KSZ8081RND`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002199A.pdf
 * Keywords: ETH PHY RMII.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class KSZ8081RND extends Component.withPins({
  "VDD_1.2": "1",
  "VDDA_3.3": "2",
  "RXM": "3",
  "RXP": "4",
  "TXM": "5",
  "TXP": "6",
  "XO": "7",
  "XI": "8",
  "REXT": "9",
  "MDIO": "10",
  "MDC": "11",
  "RXD1": "12",
  "RXD0": "13",
  "VDDIO": "14",
  "CRS_DV/PHYAD[1:0]": "15",
  "REF_CLK": "16",
  "RXER": "17",
  "INTRP": "18",
  "TXEN": "19",
  "TXD0": "20",
  "TXD1": "21",
  "GND_22": "22",
  "LED0/ANEN_SPEED": "23",
  "~{RST}": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VDD_1.2": "power_out", "VDDA_3.3": "power_in", RXM: "bidirectional", RXP: "bidirectional", TXM: "bidirectional", TXP: "bidirectional", XO: "output", XI: "input", REXT: "passive", MDIO: "bidirectional", MDC: "input", RXD1: "output", RXD0: "output", VDDIO: "power_in", "CRS_DV/PHYAD[1:0]": "output", REF_CLK: "output", RXER: "output", INTRP: "bidirectional", TXEN: "input", TXD0: "input", TXD1: "bidirectional", GND_22: "power_in", "LED0/ANEN_SPEED": "output", "~{RST}": "input", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:KSZ8081RND";
  override referencePrefix = "U";
}

/**
 * 10/100/1000Mbps Ethernet Transceiver with RGMII Interface, QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:KSZ9031RNXCA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002117C.pdf
 * Keywords: ETHERNET PHY RGMII WOL IEEE 802.3 MICROCHIP.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class KSZ9031RNXCA extends Component.withPins({
  "AVDDH_1": "1",
  "TXRXP_A": "2",
  "TXRXM_A": "3",
  "AVDDL_4": "4",
  "TXRXP_B": "5",
  "TXRXM_B": "6",
  "TXRXP_C": "7",
  "TXRXM_C": "8",
  "AVDDL_9": "9",
  "TXRXP_D": "10",
  "TXRXM_D": "11",
  "AVDDH_12": "12",
  "NC_13": "13",
  "DVDDL_14": "14",
  "LED2/PHYAD1": "15",
  "DVDDH_16": "16",
  "LED1/PHAD0/PME_N1": "17",
  "DVDDL_18": "18",
  "TXD0": "19",
  "TXD1": "20",
  "TXD2": "21",
  "TXD3": "22",
  "DVDDL_23": "23",
  "GTX_CLK": "24",
  "TX_EN": "25",
  "DVDDL_26": "26",
  "RXD3/MODE3": "27",
  "RXD2/MODE2": "28",
  "VSS": "29",
  "DVDDL_30": "30",
  "RXD1/MODE1": "31",
  "RXD0/MODE0": "32",
  "RX_DV/CLK125_EN": "33",
  "DVDDH_34": "34",
  "RX_CLK/PHYAD2": "35",
  "MDC": "36",
  "MDIO": "37",
  "INT_N/PME_N2": "38",
  "DVDDL_39": "39",
  "DVDDH_40": "40",
  "CLK125_NDO/LED_MODE": "41",
  "RESET_N": "42",
  "LDO_O": "43",
  "AVDDL_PLL": "44",
  "XO": "45",
  "XI": "46",
  "NC_47": "47",
  "ISET": "48",
  "PAD_GND": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AVDDH_1: "power_in", TXRXP_A: "input", TXRXM_A: "input", AVDDL_4: "power_in", TXRXP_B: "input", TXRXM_B: "input", TXRXP_C: "input", TXRXM_C: "input", AVDDL_9: "power_in", TXRXP_D: "input", TXRXM_D: "input", AVDDH_12: "power_in", NC_13: "no_connect", DVDDL_14: "power_in", "LED2/PHYAD1": "bidirectional", DVDDH_16: "power_in", "LED1/PHAD0/PME_N1": "bidirectional", DVDDL_18: "power_in", TXD0: "input", TXD1: "input", TXD2: "input", TXD3: "input", DVDDL_23: "power_in", GTX_CLK: "input", TX_EN: "input", DVDDL_26: "power_in", "RXD3/MODE3": "input", "RXD2/MODE2": "input", VSS: "power_in", DVDDL_30: "power_in", "RXD1/MODE1": "input", "RXD0/MODE0": "input", "RX_DV/CLK125_EN": "input", DVDDH_34: "power_in", "RX_CLK/PHYAD2": "input", MDC: "input", MDIO: "input", "INT_N/PME_N2": "input", DVDDL_39: "power_in", DVDDH_40: "power_in", "CLK125_NDO/LED_MODE": "input", RESET_N: "input", LDO_O: "input", AVDDL_PLL: "power_in", XO: "input", XI: "input", NC_47: "no_connect", ISET: "output", PAD_GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:KSZ9031RNXCA";
  override referencePrefix = "U";
}

/**
 * 3-Port Gigabit Ethernet Switch with RGMII/MII/RMII Interface and IEEE 1588v2, QFN-64
 *
 * KiCad symbol: `Interface_Ethernet:KSZ9563RNX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/KSZ9563R-Data-Sheet-DS00002419C.pdf
 * Keywords: Gigabit Ethernet Switch RGMII MII RMII ieee1588v2.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_8x8mm_P0.4mm_EP6.5x6.5mm.
 */
export class KSZ9563RNX extends Component.withPins({
  "TXRX1P_B": "1",
  "TXRX1M_B": "2",
  "TXRX1P_C": "3",
  "TXRX1M_C": "4",
  "AVDDL_5": "5",
  "TXRX1P_D": "6",
  "TXRX1M_D": "7",
  "AVDDH_8": "8",
  "TXRX2P_A": "9",
  "TXRX2M_A": "10",
  "AVDDL_11": "11",
  "TXRX2P_B": "12",
  "TXRX2M_B": "13",
  "TXRX2P_C": "14",
  "TXRX2M_C": "15",
  "AVDDL_16": "16",
  "TXRX2P_D": "17",
  "TXRX2M_D": "18",
  "AVDDH_19": "19",
  "DVDDL_20": "20",
  "RXD3": "21",
  "RXD2": "22",
  "RXD1": "23",
  "RXD0": "24",
  "RX_CLK/REFCLKO": "25",
  "VDDIO_26": "26",
  "RX_DV/CRS_DV/RX_CTL": "27",
  "RX_ER": "28",
  "TXD3": "29",
  "TXD2": "30",
  "TXD1": "31",
  "TXD0": "32",
  "TX_CLK/REFCLKI": "33",
  "DVDDL_34": "34",
  "TX_EN/TX_CTL": "35",
  "TX_ER": "36",
  "DVDDL_37": "37",
  "VDDIO_38": "38",
  "GPIO_1": "39",
  "GPIO_2": "40",
  "DVDDL_41": "41",
  "LED2_0": "42",
  "LED2_1": "43",
  "~{PME}": "44",
  "~{INTRP}": "45",
  "~{RESET}": "46",
  "SDO": "47",
  "SDI/SDA/MDIO": "48",
  "~{SCS}": "49",
  "SCL/MDC": "50",
  "DVDDL_51": "51",
  "LED1_0": "52",
  "LED1_1": "53",
  "VDDIO_54": "54",
  "DVDDL_55": "55",
  "AVDDL_56": "56",
  "XO": "57",
  "XI": "58",
  "GND_59": "59",
  "ISET": "60",
  "AVDDH_61": "61",
  "TXRX1P_A": "62",
  "TXRX1M_A": "63",
  "AVDDL_64": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXRX1P_B: "passive", TXRX1M_B: "passive", TXRX1P_C: "passive", TXRX1M_C: "passive", AVDDL_5: "power_in", TXRX1P_D: "passive", TXRX1M_D: "passive", AVDDH_8: "power_in", TXRX2P_A: "passive", TXRX2M_A: "passive", AVDDL_11: "power_in", TXRX2P_B: "passive", TXRX2M_B: "passive", TXRX2P_C: "passive", TXRX2M_C: "passive", AVDDL_16: "power_in", TXRX2P_D: "passive", TXRX2M_D: "passive", AVDDH_19: "power_in", DVDDL_20: "power_in", RXD3: "output", RXD2: "output", RXD1: "output", RXD0: "output", "RX_CLK/REFCLKO": "bidirectional", VDDIO_26: "power_in", "RX_DV/CRS_DV/RX_CTL": "output", RX_ER: "output", TXD3: "input", TXD2: "input", TXD1: "input", TXD0: "input", "TX_CLK/REFCLKI": "bidirectional", DVDDL_34: "power_in", "TX_EN/TX_CTL": "input", TX_ER: "input", DVDDL_37: "power_in", VDDIO_38: "power_in", GPIO_1: "bidirectional", GPIO_2: "bidirectional", DVDDL_41: "power_in", LED2_0: "output", LED2_1: "output", "~{PME}": "output", "~{INTRP}": "open_collector", "~{RESET}": "input", SDO: "output", "SDI/SDA/MDIO": "bidirectional", "~{SCS}": "input", "SCL/MDC": "input", DVDDL_51: "power_in", LED1_0: "output", LED1_1: "output", VDDIO_54: "power_in", DVDDL_55: "power_in", AVDDL_56: "power_in", XO: "output", XI: "input", GND_59: "power_in", ISET: "passive", AVDDH_61: "power_in", TXRX1P_A: "passive", TXRX1M_A: "passive", AVDDL_64: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:KSZ9563RNX";
  override referencePrefix = "U";
}

/**
 * 3-Port Gigabit Ethernet Switch with RGMII/MII/RMII Interface, QFN-64
 *
 * KiCad symbol: `Interface_Ethernet:KSZ9893RNX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/KSZ9893R-Data-Sheet-DS00002420C.pdf
 * Keywords: Gigabit Ethernet Switch RGMII MII RMII.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_8x8mm_P0.4mm_EP6.5x6.5mm.
 */
export class KSZ9893RNX extends Component.withPins({
  "TXRX1P_B": "1",
  "TXRX1M_B": "2",
  "TXRX1P_C": "3",
  "TXRX1M_C": "4",
  "AVDDL_5": "5",
  "TXRX1P_D": "6",
  "TXRX1M_D": "7",
  "AVDDH_8": "8",
  "TXRX2P_A": "9",
  "TXRX2M_A": "10",
  "AVDDL_11": "11",
  "TXRX2P_B": "12",
  "TXRX2M_B": "13",
  "TXRX2P_C": "14",
  "TXRX2M_C": "15",
  "AVDDL_16": "16",
  "TXRX2P_D": "17",
  "TXRX2M_D": "18",
  "AVDDH_19": "19",
  "DVDDL_20": "20",
  "RXD3": "21",
  "RXD2": "22",
  "RXD1": "23",
  "RXD0": "24",
  "RX_CLK/REFCLKO": "25",
  "VDDIO_26": "26",
  "RX_DV/CRS_DV/RX_CTL": "27",
  "RX_ER": "28",
  "TXD3": "29",
  "TXD2": "30",
  "TXD1": "31",
  "TXD0": "32",
  "TX_CLK/REFCLKI": "33",
  "DVDDL_34": "34",
  "TX_EN/TX_CTL": "35",
  "TX_ER": "36",
  "DVDDL_37": "37",
  "VDDIO_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "DVDDL_41": "41",
  "LED2_0": "42",
  "LED2_1": "43",
  "~{PME}": "44",
  "~{INTRP}": "45",
  "~{RESET}": "46",
  "SDO": "47",
  "SDI/SDA/MDIO": "48",
  "~{SCS}": "49",
  "SCL/MDC": "50",
  "DVDDL_51": "51",
  "LED1_0": "52",
  "LED1_1": "53",
  "VDDIO_54": "54",
  "DVDDL_55": "55",
  "AVDDL_56": "56",
  "XO": "57",
  "XI": "58",
  "GND_59": "59",
  "ISET": "60",
  "AVDDH_61": "61",
  "TXRX1P_A": "62",
  "TXRX1M_A": "63",
  "AVDDL_64": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXRX1P_B: "passive", TXRX1M_B: "passive", TXRX1P_C: "passive", TXRX1M_C: "passive", AVDDL_5: "power_in", TXRX1P_D: "passive", TXRX1M_D: "passive", AVDDH_8: "power_in", TXRX2P_A: "passive", TXRX2M_A: "passive", AVDDL_11: "power_in", TXRX2P_B: "passive", TXRX2M_B: "passive", TXRX2P_C: "passive", TXRX2M_C: "passive", AVDDL_16: "power_in", TXRX2P_D: "passive", TXRX2M_D: "passive", AVDDH_19: "power_in", DVDDL_20: "power_in", RXD3: "output", RXD2: "output", RXD1: "output", RXD0: "output", "RX_CLK/REFCLKO": "output", VDDIO_26: "power_in", "RX_DV/CRS_DV/RX_CTL": "output", RX_ER: "output", TXD3: "input", TXD2: "input", TXD1: "input", TXD0: "input", "TX_CLK/REFCLKI": "input", DVDDL_34: "power_in", "TX_EN/TX_CTL": "input", TX_ER: "input", DVDDL_37: "power_in", VDDIO_38: "power_in", NC_39: "no_connect", NC_40: "no_connect", DVDDL_41: "power_in", LED2_0: "output", LED2_1: "output", "~{PME}": "output", "~{INTRP}": "output", "~{RESET}": "input", SDO: "output", "SDI/SDA/MDIO": "bidirectional", "~{SCS}": "input", "SCL/MDC": "input", DVDDL_51: "power_in", LED1_0: "output", LED1_1: "output", VDDIO_54: "power_in", DVDDL_55: "power_in", AVDDL_56: "power_in", XO: "output", XI: "input", GND_59: "power_in", ISET: "passive", AVDDH_61: "power_in", TXRX1P_A: "passive", TXRX1M_A: "passive", AVDDL_64: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:KSZ9893RNX";
  override referencePrefix = "U";
}

/**
 * Hi-Speed USB 2.0 to 10/100/1000 Ethernet Controller, QFN-56
 *
 * KiCad symbol: `Interface_Ethernet:LAN7500-ABJZ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00001734B.pdf
 * Keywords: USB Ethernet 10/100/1000.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP5.9x5.9mm.
 */
export class LAN7500_ABJZ extends Component.withPins({
  "TDI": "1",
  "TCK": "2",
  "TMS": "3",
  "TDO": "4",
  "XI": "5",
  "XO": "6",
  "VDDVARIO_7": "7",
  "VDD12CORE_8": "8",
  "SW_MODE": "9",
  "GPIO7": "10",
  "VDD12CORE_11": "11",
  "VDD33A": "15",
  "VDD12USBPLL": "17",
  "GPIO8": "18",
  "VDDVARIO_19": "19",
  "VDD12CORE_20": "20",
  "GPIO9": "21",
  "GPIO10": "22",
  "VDD12CORE_23": "23",
  "VDDVARIO_24": "24",
  "GPIO11": "25",
  "EECLK": "26",
  "EEDI": "27",
  "EEDO": "28",
  "EECS": "29",
  "VDD12CORE_30": "30",
  "GPIO0": "31",
  "GPIO1": "32",
  "GPIO2": "33",
  "GPIO3": "34",
  "GPIO4": "35",
  "VDD12CORE_36": "36",
  "VDDVARIO_37": "37",
  "GPIO5": "38",
  "TEST": "39",
  "GPIO6": "40",
  "~{RESET}": "42",
  "VDD12A_45": "45",
  "VDD12A_48": "48",
  "VDD12BIAS": "49",
  "VDD12PLL": "50",
  "VDD12A_53": "53",
  "VDD12A_56": "56",
  "GND": "57",
  "USBDM": "12",
  "USBDP": "13",
  "VBUS_DET": "14",
  "USBRBIAS": "16",
  "ETHRBIAS": "41",
  "TR0N": "43",
  "TR0P": "44",
  "TR1N": "46",
  "TR1P": "47",
  "TR2N": "51",
  "TR2P": "52",
  "TR3N": "54",
  "TR3P": "55",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TDI: "input", TCK: "input", TMS: "input", TDO: "output", XI: "input", XO: "output", VDDVARIO_7: "power_in", VDD12CORE_8: "power_in", SW_MODE: "output", GPIO7: "bidirectional", VDD12CORE_11: "passive", VDD33A: "power_in", VDD12USBPLL: "power_in", GPIO8: "bidirectional", VDDVARIO_19: "passive", VDD12CORE_20: "passive", GPIO9: "bidirectional", GPIO10: "bidirectional", VDD12CORE_23: "passive", VDDVARIO_24: "passive", GPIO11: "bidirectional", EECLK: "output", EEDI: "input", EEDO: "output", EECS: "output", VDD12CORE_30: "passive", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", VDD12CORE_36: "passive", VDDVARIO_37: "passive", GPIO5: "bidirectional", TEST: "input", GPIO6: "bidirectional", "~{RESET}": "input", VDD12A_45: "power_in", VDD12A_48: "passive", VDD12BIAS: "power_in", VDD12PLL: "power_in", VDD12A_53: "passive", VDD12A_56: "passive", GND: "power_in", USBDM: "bidirectional", USBDP: "bidirectional", VBUS_DET: "input", USBRBIAS: "passive", ETHRBIAS: "passive", TR0N: "bidirectional", TR0P: "bidirectional", TR1N: "bidirectional", TR1P: "bidirectional", TR2N: "bidirectional", TR2P: "bidirectional", TR3N: "bidirectional", TR3P: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN7500-ABJZ";
  override referencePrefix = "U";
}

/**
 * LAN8710 Ethernet PHY with MII/RMII interface, QFN-32
 *
 * KiCad symbol: `Interface_Ethernet:LAN8710A`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/8710a.pdf
 * Keywords: ETH PHY MII RMII.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm_ThermalVias.
 */
export class LAN8710A extends Component.withPins({
  "VDD2A": "1",
  "LED2/~{INTSEL}": "2",
  "LED1/~{REGOFF}": "3",
  "XTAL2": "4",
  "XTAL1/CLKIN": "5",
  "VDDCR": "6",
  "RXCLK/~{PHYAD1}": "7",
  "RXD3/~{PHYAD2}": "8",
  "RXD2/~{RMIISEL}": "9",
  "RXD1/~{MODE1}": "10",
  "RXD0/~{MODE0}": "11",
  "VDDIO": "12",
  "RXER/RXD4/~{PHYAD0}": "13",
  "CRS": "14",
  "COL/CRS_DV/~{MODE2}": "15",
  "MDIO": "16",
  "MDC": "17",
  "~{INT}/TXER/TXD4": "18",
  "~{RST}": "19",
  "TXCLK": "20",
  "TXEN": "21",
  "TXD0": "22",
  "TXD1": "23",
  "TXD2": "24",
  "TXD3": "25",
  "RXDV": "26",
  "VDD1A": "27",
  "TXN": "28",
  "TXP": "29",
  "RXN": "30",
  "RXP": "31",
  "RBIAS": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD2A: "power_in", "LED2/~{INTSEL}": "bidirectional", "LED1/~{REGOFF}": "bidirectional", XTAL2: "output", "XTAL1/CLKIN": "input", VDDCR: "power_in", "RXCLK/~{PHYAD1}": "bidirectional", "RXD3/~{PHYAD2}": "bidirectional", "RXD2/~{RMIISEL}": "bidirectional", "RXD1/~{MODE1}": "bidirectional", "RXD0/~{MODE0}": "bidirectional", VDDIO: "power_in", "RXER/RXD4/~{PHYAD0}": "bidirectional", CRS: "output", "COL/CRS_DV/~{MODE2}": "bidirectional", MDIO: "bidirectional", MDC: "input", "~{INT}/TXER/TXD4": "bidirectional", "~{RST}": "input", TXCLK: "output", TXEN: "input", TXD0: "input", TXD1: "input", TXD2: "input", TXD3: "input", RXDV: "output", VDD1A: "power_in", TXN: "bidirectional", TXP: "bidirectional", RXN: "bidirectional", RXP: "bidirectional", RBIAS: "passive", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN8710A";
  override referencePrefix = "U";
}

/**
 * LAN8720 Ethernet PHY with RMII interface, QFN-24
 *
 * KiCad symbol: `Interface_Ethernet:LAN8720A`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/8720a.pdf
 * Keywords: ETH PHY RMII.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm_ThermalVias.
 */
export class LAN8720A extends Component.withPins({
  "VDD2A": "1",
  "LED2/~{INTSEL}": "2",
  "LED1/REGOFF": "3",
  "XTAL2": "4",
  "XTAL1/CLKIN": "5",
  "VDDCR": "6",
  "RXD1/MODE1": "7",
  "RXD0/MODE0": "8",
  "VDDIO": "9",
  "RXER/PHYAD0": "10",
  "CRS_DV/MODE2": "11",
  "MDIO": "12",
  "MDC": "13",
  "~{INT}/REFCLKO": "14",
  "~{RST}": "15",
  "TXEN": "16",
  "TXD0": "17",
  "TXD1": "18",
  "VDD1A": "19",
  "TXN": "20",
  "TXP": "21",
  "RXN": "22",
  "RXP": "23",
  "RBIAS": "24",
  "VSS": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD2A: "power_in", "LED2/~{INTSEL}": "bidirectional", "LED1/REGOFF": "bidirectional", XTAL2: "output", "XTAL1/CLKIN": "input", VDDCR: "power_in", "RXD1/MODE1": "bidirectional", "RXD0/MODE0": "bidirectional", VDDIO: "power_in", "RXER/PHYAD0": "output", "CRS_DV/MODE2": "bidirectional", MDIO: "bidirectional", MDC: "input", "~{INT}/REFCLKO": "output", "~{RST}": "input", TXEN: "input", TXD0: "input", TXD1: "input", VDD1A: "power_in", TXN: "bidirectional", TXP: "bidirectional", RXN: "bidirectional", RXP: "bidirectional", RBIAS: "passive", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN8720A";
  override referencePrefix = "U";
}

/**
 * LAN8720 Ethernet PHY with RMII interface, QFN-24
 *
 * KiCad symbol: `Interface_Ethernet:LAN8742A`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/8742a.pdf
 * Keywords: ETH PHY RMII.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm_ThermalVias.
 */
export class LAN8742A extends Component.withPins({
  "VDD2A": "1",
  "LED2/~{INTSEL}": "2",
  "LED1/REGOFF": "3",
  "XTAL2": "4",
  "XTAL1/CLKIN": "5",
  "VDDCR": "6",
  "RXD1/MODE1": "7",
  "RXD0/MODE0": "8",
  "VDDIO": "9",
  "RXER/PHYAD0": "10",
  "CRS_DV/MODE2": "11",
  "MDIO": "12",
  "MDC": "13",
  "~{INT}/REFCLKO": "14",
  "~{RST}": "15",
  "TXEN": "16",
  "TXD0": "17",
  "TXD1": "18",
  "VDD1A": "19",
  "TXN": "20",
  "TXP": "21",
  "RXN": "22",
  "RXP": "23",
  "RBIAS": "24",
  "VSS": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD2A: "power_in", "LED2/~{INTSEL}": "bidirectional", "LED1/REGOFF": "bidirectional", XTAL2: "output", "XTAL1/CLKIN": "input", VDDCR: "power_in", "RXD1/MODE1": "bidirectional", "RXD0/MODE0": "bidirectional", VDDIO: "power_in", "RXER/PHYAD0": "output", "CRS_DV/MODE2": "bidirectional", MDIO: "bidirectional", MDC: "input", "~{INT}/REFCLKO": "output", "~{RST}": "input", TXEN: "input", TXD0: "input", TXD1: "input", VDD1A: "power_in", TXN: "passive", TXP: "passive", RXN: "passive", RXP: "passive", RBIAS: "passive", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN8742A";
  override referencePrefix = "U";
}

/**
 * 3-port managed Ethernet switch with dual PHY and RMII interface, QFN-56
 *
 * KiCad symbol: `Interface_Ethernet:LAN9303`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/9303.pdf
 * Keywords: ETH PHY RMII switch.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP5.9x5.9mm_ThermalVias.
 */
export class LAN9303 extends Component.withPins({
  "TXN2": "1",
  "P0_IND3": "2",
  "P0_IND2": "3",
  "P0_IND1": "4",
  "P0_IND0": "5",
  "P0_INDV": "6",
  "P0_INER": "7",
  "P0_INCLK": "8",
  "VDD33IO_9": "9",
  "VDD18CORE_10": "10",
  "P0_OUTD3/~{DUPLEX_POL_0}": "11",
  "P0_OUTD2/~{P0_MODE2}": "12",
  "P0_OUTD1/~{P0_MODE1}": "13",
  "P0_OUTD0/~{P0_MODE0}": "14",
  "VDD33IO_15": "15",
  "P0_OUTDV": "16",
  "P0_OUTCLK": "17",
  "P0_COL": "18",
  "P0_CRS": "19",
  "P0_DUPLEX": "20",
  "MDIO": "21",
  "MDC": "22",
  "VDD33IO_23": "23",
  "LED5/GPIO5/~{PHYADDR}": "24",
  "LED4/GPIO4/~{MNGT1}": "25",
  "LED3/GPIO3/~{MNGT0}": "26",
  "LED2/GPIO2/~{E2PSIZE}": "27",
  "LED1/GPIO1/~{AMDIX2}": "28",
  "LED0/GPIO0/~{AMDIX1}": "29",
  "VDD33IO_30": "30",
  "VDD18CORE_31": "31",
  "VDD33IO_32": "32",
  "VDD33IO_33": "33",
  "VSS_34": "34",
  "EE_SDA/SDA": "35",
  "EE_SCL/SCL": "36",
  "~{RST}": "37",
  "IRQ": "38",
  "XI": "39",
  "XO": "40",
  "VDD18PLL": "41",
  "TXN1": "42",
  "TXP1": "43",
  "VDD33A1_44": "44",
  "RXN1": "45",
  "RXP1": "46",
  "VDD33A1_47": "47",
  "VDD18TX1": "48",
  "EXRES": "49",
  "VDD33BIAS": "50",
  "VDD18TX2": "51",
  "VDD33A2_52": "52",
  "RXP2": "53",
  "RXN2": "54",
  "VDD33A2_55": "55",
  "TXP2": "56",
  "VSS_57": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXN2: "bidirectional", P0_IND3: "passive", P0_IND2: "passive", P0_IND1: "input", P0_IND0: "input", P0_INDV: "input", P0_INER: "passive", P0_INCLK: "passive", VDD33IO_9: "power_in", VDD18CORE_10: "output", "P0_OUTD3/~{DUPLEX_POL_0}": "passive", "P0_OUTD2/~{P0_MODE2}": "passive", "P0_OUTD1/~{P0_MODE1}": "bidirectional", "P0_OUTD0/~{P0_MODE0}": "bidirectional", VDD33IO_15: "passive", P0_OUTDV: "output", P0_OUTCLK: "bidirectional", P0_COL: "passive", P0_CRS: "passive", P0_DUPLEX: "input", MDIO: "bidirectional", MDC: "bidirectional", VDD33IO_23: "passive", "LED5/GPIO5/~{PHYADDR}": "passive", "LED4/GPIO4/~{MNGT1}": "passive", "LED3/GPIO3/~{MNGT0}": "passive", "LED2/GPIO2/~{E2PSIZE}": "passive", "LED1/GPIO1/~{AMDIX2}": "passive", "LED0/GPIO0/~{AMDIX1}": "passive", VDD33IO_30: "passive", VDD18CORE_31: "passive", VDD33IO_32: "passive", VDD33IO_33: "passive", VSS_34: "power_in", "EE_SDA/SDA": "bidirectional", "EE_SCL/SCL": "bidirectional", "~{RST}": "passive", IRQ: "passive", XI: "input", XO: "passive", VDD18PLL: "output", TXN1: "bidirectional", TXP1: "bidirectional", VDD33A1_44: "power_in", RXN1: "bidirectional", RXP1: "bidirectional", VDD33A1_47: "passive", VDD18TX1: "input", EXRES: "passive", VDD33BIAS: "power_in", VDD18TX2: "output", VDD33A2_52: "power_in", RXP2: "bidirectional", RXN2: "bidirectional", VDD33A2_55: "passive", TXP2: "bidirectional", VSS_57: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN9303";
  override referencePrefix = "U";
}

/**
 * 3-port managed Ethernet switch with dual PHY and RMII interface, QFN-56, industrial version
 *
 * KiCad symbol: `Interface_Ethernet:LAN9303i`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/9303.pdf
 * Keywords: ETH PHY RMII switch industrial.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP5.9x5.9mm_ThermalVias.
 */
export class LAN9303i extends Component.withPins({
  "TXN2": "1",
  "P0_IND3": "2",
  "P0_IND2": "3",
  "P0_IND1": "4",
  "P0_IND0": "5",
  "P0_INDV": "6",
  "P0_INER": "7",
  "P0_INCLK": "8",
  "VDD33IO_9": "9",
  "VDD18CORE_10": "10",
  "P0_OUTD3/~{DUPLEX_POL_0}": "11",
  "P0_OUTD2/~{P0_MODE2}": "12",
  "P0_OUTD1/~{P0_MODE1}": "13",
  "P0_OUTD0/~{P0_MODE0}": "14",
  "VDD33IO_15": "15",
  "P0_OUTDV": "16",
  "P0_OUTCLK": "17",
  "P0_COL": "18",
  "P0_CRS": "19",
  "P0_DUPLEX": "20",
  "MDIO": "21",
  "MDC": "22",
  "VDD33IO_23": "23",
  "LED5/GPIO5/~{PHYADDR}": "24",
  "LED4/GPIO4/~{MNGT1}": "25",
  "LED3/GPIO3/~{MNGT0}": "26",
  "LED2/GPIO2/~{E2PSIZE}": "27",
  "LED1/GPIO1/~{AMDIX2}": "28",
  "LED0/GPIO0/~{AMDIX1}": "29",
  "VDD33IO_30": "30",
  "VDD18CORE_31": "31",
  "VDD33IO_32": "32",
  "VDD33IO_33": "33",
  "VSS_34": "34",
  "EE_SDA/SDA": "35",
  "EE_SCL/SCL": "36",
  "~{RST}": "37",
  "IRQ": "38",
  "XI": "39",
  "XO": "40",
  "VDD18PLL": "41",
  "TXN1": "42",
  "TXP1": "43",
  "VDD33A1_44": "44",
  "RXN1": "45",
  "RXP1": "46",
  "VDD33A1_47": "47",
  "VDD18TX1": "48",
  "EXRES": "49",
  "VDD33BIAS": "50",
  "VDD18TX2": "51",
  "VDD33A2_52": "52",
  "RXP2": "53",
  "RXN2": "54",
  "VDD33A2_55": "55",
  "TXP2": "56",
  "VSS_57": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXN2: "bidirectional", P0_IND3: "passive", P0_IND2: "passive", P0_IND1: "input", P0_IND0: "input", P0_INDV: "input", P0_INER: "passive", P0_INCLK: "passive", VDD33IO_9: "power_in", VDD18CORE_10: "output", "P0_OUTD3/~{DUPLEX_POL_0}": "passive", "P0_OUTD2/~{P0_MODE2}": "passive", "P0_OUTD1/~{P0_MODE1}": "bidirectional", "P0_OUTD0/~{P0_MODE0}": "bidirectional", VDD33IO_15: "passive", P0_OUTDV: "output", P0_OUTCLK: "bidirectional", P0_COL: "passive", P0_CRS: "passive", P0_DUPLEX: "input", MDIO: "bidirectional", MDC: "bidirectional", VDD33IO_23: "passive", "LED5/GPIO5/~{PHYADDR}": "passive", "LED4/GPIO4/~{MNGT1}": "passive", "LED3/GPIO3/~{MNGT0}": "passive", "LED2/GPIO2/~{E2PSIZE}": "passive", "LED1/GPIO1/~{AMDIX2}": "passive", "LED0/GPIO0/~{AMDIX1}": "passive", VDD33IO_30: "passive", VDD18CORE_31: "passive", VDD33IO_32: "passive", VDD33IO_33: "passive", VSS_34: "power_in", "EE_SDA/SDA": "bidirectional", "EE_SCL/SCL": "bidirectional", "~{RST}": "passive", IRQ: "passive", XI: "input", XO: "passive", VDD18PLL: "output", TXN1: "bidirectional", TXP1: "bidirectional", VDD33A1_44: "power_in", RXN1: "bidirectional", RXP1: "bidirectional", VDD33A1_47: "passive", VDD18TX1: "input", EXRES: "passive", VDD33BIAS: "power_in", VDD18TX2: "output", VDD33A2_52: "power_in", RXP2: "bidirectional", RXN2: "bidirectional", VDD33A2_55: "passive", TXP2: "bidirectional", VSS_57: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN9303i";
  override referencePrefix = "U";
}

/**
 * Two USB 2.0 hub with an integrated 10/100 Ethernet controller (0°C to +70°C), QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:LAN9512`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP?9x9mm?P0.5mm?EP7.3x7.3mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002304A.pdf
 * Keywords: USB HUB Ethernet 10/100.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.3x7.3mm.
 */
export class LAN9512 extends Component.withPins({
  "VDD33A_5": "5",
  "VDD33A_10": "10",
  "~{RESET}": "12",
  "TEST1": "13",
  "VDD18CORE_15": "15",
  "VDD33IO_19": "19",
  "~{FDX_LED}/GPIO0": "20",
  "~{LNKA_LED}/GPIO1": "21",
  "~{SPD_LED}/GPIO2": "22",
  "EECLK": "23",
  "EECS": "24",
  "EEDO": "25",
  "EEDI": "26",
  "VDD33IO_27": "27",
  "~{TRST}": "28",
  "TMS": "29",
  "TDI": "30",
  "TDO": "31",
  "TCK": "32",
  "VDD33IO_33": "33",
  "TEST2": "34",
  "GPIO3": "35",
  "GPIO4": "36",
  "GPIO5": "37",
  "VDD18CORE_38": "38",
  "VDD33IO_39": "39",
  "TEST3": "40",
  "GPIO6": "42",
  "GPIO7": "43",
  "CLK24_EN": "44",
  "CLK24_OUT": "45",
  "VDD33IO_46": "46",
  "TEST4": "47",
  "VDD18ETHPLL": "48",
  "VDD33A_49": "49",
  "VDD33A_51": "51",
  "VDD33A_54": "54",
  "VDD33A_57": "57",
  "XO": "60",
  "XI": "61",
  "VDD18USBPLL": "62",
  "VDD33A_64": "64",
  "GND": "65",
  "USBDM2": "1",
  "USBDP2": "2",
  "USBDM3": "3",
  "USBDP3": "4",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VBUS_DET": "11",
  "PRTCTL2": "14",
  "PRTCTL3": "16",
  "NC_17": "17",
  "NC_18": "18",
  "AUTOMDIX_EN": "41",
  "EXRES": "50",
  "RXP": "52",
  "RXN": "53",
  "TXP": "55",
  "TXN": "56",
  "USBDM0": "58",
  "USBDP0": "59",
  "USBRBIAS": "63",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD33A_5: "power_in", VDD33A_10: "passive", "~{RESET}": "input", TEST1: "input", VDD18CORE_15: "power_in", VDD33IO_19: "power_in", "~{FDX_LED}/GPIO0": "bidirectional", "~{LNKA_LED}/GPIO1": "bidirectional", "~{SPD_LED}/GPIO2": "bidirectional", EECLK: "output", EECS: "output", EEDO: "output", EEDI: "input", VDD33IO_27: "passive", "~{TRST}": "input", TMS: "input", TDI: "input", TDO: "output", TCK: "input", VDD33IO_33: "passive", TEST2: "input", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", VDD18CORE_38: "passive", VDD33IO_39: "passive", TEST3: "input", GPIO6: "bidirectional", GPIO7: "bidirectional", CLK24_EN: "input", CLK24_OUT: "output", VDD33IO_46: "passive", TEST4: "input", VDD18ETHPLL: "power_in", VDD33A_49: "passive", VDD33A_51: "passive", VDD33A_54: "passive", VDD33A_57: "passive", XO: "input", XI: "input", VDD18USBPLL: "power_in", VDD33A_64: "passive", GND: "power_in", USBDM2: "bidirectional", USBDP2: "bidirectional", USBDM3: "bidirectional", USBDP3: "bidirectional", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", VBUS_DET: "input", PRTCTL2: "bidirectional", PRTCTL3: "bidirectional", NC_17: "no_connect", NC_18: "no_connect", AUTOMDIX_EN: "input", EXRES: "input", RXP: "input", RXN: "input", TXP: "output", TXN: "output", USBDM0: "bidirectional", USBDP0: "bidirectional", USBRBIAS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN9512";
  override referencePrefix = "U";
}

/**
 * Two USB 2.0 hub with an integrated 10/100 Ethernet controller (-40° to 85°C), QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:LAN9512i`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP?9x9mm?P0.5mm?EP7.3x7.3mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002304A.pdf
 * Keywords: USB HUB Ethernet 10/100.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.3x7.3mm.
 */
export class LAN9512i extends Component.withPins({
  "VDD33A_5": "5",
  "VDD33A_10": "10",
  "~{RESET}": "12",
  "TEST1": "13",
  "VDD18CORE_15": "15",
  "VDD33IO_19": "19",
  "~{FDX_LED}/GPIO0": "20",
  "~{LNKA_LED}/GPIO1": "21",
  "~{SPD_LED}/GPIO2": "22",
  "EECLK": "23",
  "EECS": "24",
  "EEDO": "25",
  "EEDI": "26",
  "VDD33IO_27": "27",
  "~{TRST}": "28",
  "TMS": "29",
  "TDI": "30",
  "TDO": "31",
  "TCK": "32",
  "VDD33IO_33": "33",
  "TEST2": "34",
  "GPIO3": "35",
  "GPIO4": "36",
  "GPIO5": "37",
  "VDD18CORE_38": "38",
  "VDD33IO_39": "39",
  "TEST3": "40",
  "GPIO6": "42",
  "GPIO7": "43",
  "CLK24_EN": "44",
  "CLK24_OUT": "45",
  "VDD33IO_46": "46",
  "TEST4": "47",
  "VDD18ETHPLL": "48",
  "VDD33A_49": "49",
  "VDD33A_51": "51",
  "VDD33A_54": "54",
  "VDD33A_57": "57",
  "XO": "60",
  "XI": "61",
  "VDD18USBPLL": "62",
  "VDD33A_64": "64",
  "GND": "65",
  "USBDM2": "1",
  "USBDP2": "2",
  "USBDM3": "3",
  "USBDP3": "4",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VBUS_DET": "11",
  "PRTCTL2": "14",
  "PRTCTL3": "16",
  "NC_17": "17",
  "NC_18": "18",
  "AUTOMDIX_EN": "41",
  "EXRES": "50",
  "RXP": "52",
  "RXN": "53",
  "TXP": "55",
  "TXN": "56",
  "USBDM0": "58",
  "USBDP0": "59",
  "USBRBIAS": "63",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD33A_5: "power_in", VDD33A_10: "passive", "~{RESET}": "input", TEST1: "input", VDD18CORE_15: "power_in", VDD33IO_19: "power_in", "~{FDX_LED}/GPIO0": "bidirectional", "~{LNKA_LED}/GPIO1": "bidirectional", "~{SPD_LED}/GPIO2": "bidirectional", EECLK: "output", EECS: "output", EEDO: "output", EEDI: "input", VDD33IO_27: "passive", "~{TRST}": "input", TMS: "input", TDI: "input", TDO: "output", TCK: "input", VDD33IO_33: "passive", TEST2: "input", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", VDD18CORE_38: "passive", VDD33IO_39: "passive", TEST3: "input", GPIO6: "bidirectional", GPIO7: "bidirectional", CLK24_EN: "input", CLK24_OUT: "output", VDD33IO_46: "passive", TEST4: "input", VDD18ETHPLL: "power_in", VDD33A_49: "passive", VDD33A_51: "passive", VDD33A_54: "passive", VDD33A_57: "passive", XO: "input", XI: "input", VDD18USBPLL: "power_in", VDD33A_64: "passive", GND: "power_in", USBDM2: "bidirectional", USBDP2: "bidirectional", USBDM3: "bidirectional", USBDP3: "bidirectional", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", VBUS_DET: "input", PRTCTL2: "bidirectional", PRTCTL3: "bidirectional", NC_17: "no_connect", NC_18: "no_connect", AUTOMDIX_EN: "input", EXRES: "input", RXP: "input", RXN: "input", TXP: "output", TXN: "output", USBDM0: "bidirectional", USBDP0: "bidirectional", USBRBIAS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN9512i";
  override referencePrefix = "U";
}

/**
 * Three USB 2.0 hub with an integrated 10/100 Ethernet controller (0°C to +70°C), QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:LAN9513`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP?9x9mm?P0.5mm?EP7.3x7.3mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002305A.pdf
 * Keywords: USB HUB Ethernet 10/100.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.3x7.3mm.
 */
export class LAN9513 extends Component.withPins({
  "VDD33A_5": "5",
  "VDD33A_10": "10",
  "~{RESET}": "12",
  "TEST1": "13",
  "VDD18CORE_15": "15",
  "VDD33IO_19": "19",
  "~{FDX_LED}/GPIO0": "20",
  "~{LNKA_LED}/GPIO1": "21",
  "~{SPD_LED}/GPIO2": "22",
  "EECLK": "23",
  "EECS": "24",
  "EEDO": "25",
  "EEDI": "26",
  "VDD33IO_27": "27",
  "~{TRST}": "28",
  "TMS": "29",
  "TDI": "30",
  "TDO": "31",
  "TCK": "32",
  "VDD33IO_33": "33",
  "TEST2": "34",
  "GPIO3": "35",
  "GPIO4": "36",
  "GPIO5": "37",
  "VDD18CORE_38": "38",
  "VDD33IO_39": "39",
  "TEST3": "40",
  "GPIO6": "42",
  "GPIO7": "43",
  "CLK24_EN": "44",
  "CLK24_OUT": "45",
  "VDD33IO_46": "46",
  "TEST4": "47",
  "VDD18ETHPLL": "48",
  "VDD33A_49": "49",
  "VDD33A_51": "51",
  "VDD33A_54": "54",
  "VDD33A_57": "57",
  "XO": "60",
  "XI": "61",
  "VDD18USBPLL": "62",
  "VDD33A_64": "64",
  "GND": "65",
  "USBDM2": "1",
  "USBDP2": "2",
  "USBDM3": "3",
  "USBDP3": "4",
  "USBDM4": "6",
  "USBDP4": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VBUS_DET": "11",
  "PRTCTL2": "14",
  "PRTCTL3": "16",
  "PRTCTL4": "17",
  "NC_18": "18",
  "AUTOMDIX_EN": "41",
  "EXRES": "50",
  "RXP": "52",
  "RXN": "53",
  "TXP": "55",
  "TXN": "56",
  "USBDM0": "58",
  "USBDP0": "59",
  "USBRBIAS": "63",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD33A_5: "power_in", VDD33A_10: "passive", "~{RESET}": "input", TEST1: "input", VDD18CORE_15: "power_in", VDD33IO_19: "power_in", "~{FDX_LED}/GPIO0": "bidirectional", "~{LNKA_LED}/GPIO1": "bidirectional", "~{SPD_LED}/GPIO2": "bidirectional", EECLK: "output", EECS: "output", EEDO: "output", EEDI: "input", VDD33IO_27: "passive", "~{TRST}": "input", TMS: "input", TDI: "input", TDO: "output", TCK: "input", VDD33IO_33: "passive", TEST2: "input", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", VDD18CORE_38: "passive", VDD33IO_39: "passive", TEST3: "input", GPIO6: "bidirectional", GPIO7: "bidirectional", CLK24_EN: "input", CLK24_OUT: "output", VDD33IO_46: "passive", TEST4: "input", VDD18ETHPLL: "power_in", VDD33A_49: "passive", VDD33A_51: "passive", VDD33A_54: "passive", VDD33A_57: "passive", XO: "input", XI: "input", VDD18USBPLL: "power_in", VDD33A_64: "passive", GND: "power_in", USBDM2: "bidirectional", USBDP2: "bidirectional", USBDM3: "bidirectional", USBDP3: "bidirectional", USBDM4: "bidirectional", USBDP4: "bidirectional", NC_8: "no_connect", NC_9: "no_connect", VBUS_DET: "input", PRTCTL2: "bidirectional", PRTCTL3: "bidirectional", PRTCTL4: "bidirectional", NC_18: "no_connect", AUTOMDIX_EN: "input", EXRES: "input", RXP: "input", RXN: "input", TXP: "output", TXN: "output", USBDM0: "bidirectional", USBDP0: "bidirectional", USBRBIAS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN9513";
  override referencePrefix = "U";
}

/**
 * Three USB 2.0 hub with an integrated 10/100 Ethernet controller (-40° to 85°C), QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:LAN9513i`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP?9x9mm?P0.5mm?EP7.3x7.3mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002305A.pdf
 * Keywords: USB HUB Ethernet 10/100.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.3x7.3mm.
 */
export class LAN9513i extends Component.withPins({
  "VDD33A_5": "5",
  "VDD33A_10": "10",
  "~{RESET}": "12",
  "TEST1": "13",
  "VDD18CORE_15": "15",
  "VDD33IO_19": "19",
  "~{FDX_LED}/GPIO0": "20",
  "~{LNKA_LED}/GPIO1": "21",
  "~{SPD_LED}/GPIO2": "22",
  "EECLK": "23",
  "EECS": "24",
  "EEDO": "25",
  "EEDI": "26",
  "VDD33IO_27": "27",
  "~{TRST}": "28",
  "TMS": "29",
  "TDI": "30",
  "TDO": "31",
  "TCK": "32",
  "VDD33IO_33": "33",
  "TEST2": "34",
  "GPIO3": "35",
  "GPIO4": "36",
  "GPIO5": "37",
  "VDD18CORE_38": "38",
  "VDD33IO_39": "39",
  "TEST3": "40",
  "GPIO6": "42",
  "GPIO7": "43",
  "CLK24_EN": "44",
  "CLK24_OUT": "45",
  "VDD33IO_46": "46",
  "TEST4": "47",
  "VDD18ETHPLL": "48",
  "VDD33A_49": "49",
  "VDD33A_51": "51",
  "VDD33A_54": "54",
  "VDD33A_57": "57",
  "XO": "60",
  "XI": "61",
  "VDD18USBPLL": "62",
  "VDD33A_64": "64",
  "GND": "65",
  "USBDM2": "1",
  "USBDP2": "2",
  "USBDM3": "3",
  "USBDP3": "4",
  "USBDM4": "6",
  "USBDP4": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VBUS_DET": "11",
  "PRTCTL2": "14",
  "PRTCTL3": "16",
  "PRTCTL4": "17",
  "NC_18": "18",
  "AUTOMDIX_EN": "41",
  "EXRES": "50",
  "RXP": "52",
  "RXN": "53",
  "TXP": "55",
  "TXN": "56",
  "USBDM0": "58",
  "USBDP0": "59",
  "USBRBIAS": "63",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD33A_5: "power_in", VDD33A_10: "passive", "~{RESET}": "input", TEST1: "input", VDD18CORE_15: "power_in", VDD33IO_19: "power_in", "~{FDX_LED}/GPIO0": "bidirectional", "~{LNKA_LED}/GPIO1": "bidirectional", "~{SPD_LED}/GPIO2": "bidirectional", EECLK: "output", EECS: "output", EEDO: "output", EEDI: "input", VDD33IO_27: "passive", "~{TRST}": "input", TMS: "input", TDI: "input", TDO: "output", TCK: "input", VDD33IO_33: "passive", TEST2: "input", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", VDD18CORE_38: "passive", VDD33IO_39: "passive", TEST3: "input", GPIO6: "bidirectional", GPIO7: "bidirectional", CLK24_EN: "input", CLK24_OUT: "output", VDD33IO_46: "passive", TEST4: "input", VDD18ETHPLL: "power_in", VDD33A_49: "passive", VDD33A_51: "passive", VDD33A_54: "passive", VDD33A_57: "passive", XO: "input", XI: "input", VDD18USBPLL: "power_in", VDD33A_64: "passive", GND: "power_in", USBDM2: "bidirectional", USBDP2: "bidirectional", USBDM3: "bidirectional", USBDP3: "bidirectional", USBDM4: "bidirectional", USBDP4: "bidirectional", NC_8: "no_connect", NC_9: "no_connect", VBUS_DET: "input", PRTCTL2: "bidirectional", PRTCTL3: "bidirectional", PRTCTL4: "bidirectional", NC_18: "no_connect", AUTOMDIX_EN: "input", EXRES: "input", RXP: "input", RXN: "input", TXP: "output", TXN: "output", USBDM0: "bidirectional", USBDP0: "bidirectional", USBRBIAS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN9513i";
  override referencePrefix = "U";
}

/**
 * Four USB 2.0 hub with an integrated 10/100 Ethernet controller (0°C to +70°C), QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:LAN9514`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP?9x9mm?P0.5mm?EP7.3x7.3mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002306A.pdf
 * Keywords: USB HUB Ethernet 10/100.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.3x7.3mm.
 */
export class LAN9514 extends Component.withPins({
  "VDD33A_5": "5",
  "VDD33A_10": "10",
  "~{RESET}": "12",
  "TEST1": "13",
  "VDD18CORE_15": "15",
  "VDD33IO_19": "19",
  "~{FDX_LED}/GPIO0": "20",
  "~{LNKA_LED}/GPIO1": "21",
  "~{SPD_LED}/GPIO2": "22",
  "EECLK": "23",
  "EECS": "24",
  "EEDO": "25",
  "EEDI": "26",
  "VDD33IO_27": "27",
  "~{TRST}": "28",
  "TMS": "29",
  "TDI": "30",
  "TDO": "31",
  "TCK": "32",
  "VDD33IO_33": "33",
  "TEST2": "34",
  "GPIO3": "35",
  "GPIO4": "36",
  "GPIO5": "37",
  "VDD18CORE_38": "38",
  "VDD33IO_39": "39",
  "TEST3": "40",
  "GPIO6": "42",
  "GPIO7": "43",
  "CLK24_EN": "44",
  "CLK24_OUT": "45",
  "VDD33IO_46": "46",
  "TEST4": "47",
  "VDD18ETHPLL": "48",
  "VDD33A_49": "49",
  "VDD33A_51": "51",
  "VDD33A_54": "54",
  "VDD33A_57": "57",
  "XO": "60",
  "XI": "61",
  "VDD18USBPLL": "62",
  "VDD33A_64": "64",
  "GND": "65",
  "USBDM2": "1",
  "USBDP2": "2",
  "USBDM3": "3",
  "USBDP3": "4",
  "USBDM4": "6",
  "USBDP4": "7",
  "USBDM5": "8",
  "USBDP5": "9",
  "VBUS_DET": "11",
  "PRTCTL2": "14",
  "PRTCTL3": "16",
  "PRTCTL4": "17",
  "PRTCTL5": "18",
  "AUTOMDIX_EN": "41",
  "EXRES": "50",
  "RXP": "52",
  "RXN": "53",
  "TXP": "55",
  "TXN": "56",
  "USBDM0": "58",
  "USBDP0": "59",
  "USBRBIAS": "63",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD33A_5: "power_in", VDD33A_10: "passive", "~{RESET}": "input", TEST1: "input", VDD18CORE_15: "power_in", VDD33IO_19: "power_in", "~{FDX_LED}/GPIO0": "bidirectional", "~{LNKA_LED}/GPIO1": "bidirectional", "~{SPD_LED}/GPIO2": "bidirectional", EECLK: "output", EECS: "output", EEDO: "output", EEDI: "input", VDD33IO_27: "passive", "~{TRST}": "input", TMS: "input", TDI: "input", TDO: "output", TCK: "input", VDD33IO_33: "passive", TEST2: "input", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", VDD18CORE_38: "passive", VDD33IO_39: "passive", TEST3: "input", GPIO6: "bidirectional", GPIO7: "bidirectional", CLK24_EN: "input", CLK24_OUT: "output", VDD33IO_46: "passive", TEST4: "input", VDD18ETHPLL: "power_in", VDD33A_49: "passive", VDD33A_51: "passive", VDD33A_54: "passive", VDD33A_57: "passive", XO: "input", XI: "input", VDD18USBPLL: "power_in", VDD33A_64: "passive", GND: "power_in", USBDM2: "bidirectional", USBDP2: "bidirectional", USBDM3: "bidirectional", USBDP3: "bidirectional", USBDM4: "bidirectional", USBDP4: "bidirectional", USBDM5: "bidirectional", USBDP5: "bidirectional", VBUS_DET: "input", PRTCTL2: "bidirectional", PRTCTL3: "bidirectional", PRTCTL4: "bidirectional", PRTCTL5: "bidirectional", AUTOMDIX_EN: "input", EXRES: "input", RXP: "input", RXN: "input", TXP: "output", TXN: "output", USBDM0: "bidirectional", USBDP0: "bidirectional", USBRBIAS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN9514";
  override referencePrefix = "U";
}

/**
 * Four USB 2.0 hub with an integrated 10/100 Ethernet controller (-40° to 85°C), QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:LAN9514i`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP?9x9mm?P0.5mm?EP7.3x7.3mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00002306A.pdf
 * Keywords: USB HUB Ethernet 10/100.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.3x7.3mm.
 */
export class LAN9514i extends Component.withPins({
  "VDD33A_5": "5",
  "VDD33A_10": "10",
  "~{RESET}": "12",
  "TEST1": "13",
  "VDD18CORE_15": "15",
  "VDD33IO_19": "19",
  "~{FDX_LED}/GPIO0": "20",
  "~{LNKA_LED}/GPIO1": "21",
  "~{SPD_LED}/GPIO2": "22",
  "EECLK": "23",
  "EECS": "24",
  "EEDO": "25",
  "EEDI": "26",
  "VDD33IO_27": "27",
  "~{TRST}": "28",
  "TMS": "29",
  "TDI": "30",
  "TDO": "31",
  "TCK": "32",
  "VDD33IO_33": "33",
  "TEST2": "34",
  "GPIO3": "35",
  "GPIO4": "36",
  "GPIO5": "37",
  "VDD18CORE_38": "38",
  "VDD33IO_39": "39",
  "TEST3": "40",
  "GPIO6": "42",
  "GPIO7": "43",
  "CLK24_EN": "44",
  "CLK24_OUT": "45",
  "VDD33IO_46": "46",
  "TEST4": "47",
  "VDD18ETHPLL": "48",
  "VDD33A_49": "49",
  "VDD33A_51": "51",
  "VDD33A_54": "54",
  "VDD33A_57": "57",
  "XO": "60",
  "XI": "61",
  "VDD18USBPLL": "62",
  "VDD33A_64": "64",
  "GND": "65",
  "USBDM2": "1",
  "USBDP2": "2",
  "USBDM3": "3",
  "USBDP3": "4",
  "USBDM4": "6",
  "USBDP4": "7",
  "USBDM5": "8",
  "USBDP5": "9",
  "VBUS_DET": "11",
  "PRTCTL2": "14",
  "PRTCTL3": "16",
  "PRTCTL4": "17",
  "PRTCTL5": "18",
  "AUTOMDIX_EN": "41",
  "EXRES": "50",
  "RXP": "52",
  "RXN": "53",
  "TXP": "55",
  "TXN": "56",
  "USBDM0": "58",
  "USBDP0": "59",
  "USBRBIAS": "63",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD33A_5: "power_in", VDD33A_10: "passive", "~{RESET}": "input", TEST1: "input", VDD18CORE_15: "power_in", VDD33IO_19: "power_in", "~{FDX_LED}/GPIO0": "bidirectional", "~{LNKA_LED}/GPIO1": "bidirectional", "~{SPD_LED}/GPIO2": "bidirectional", EECLK: "output", EECS: "output", EEDO: "output", EEDI: "input", VDD33IO_27: "passive", "~{TRST}": "input", TMS: "input", TDI: "input", TDO: "output", TCK: "input", VDD33IO_33: "passive", TEST2: "input", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", VDD18CORE_38: "passive", VDD33IO_39: "passive", TEST3: "input", GPIO6: "bidirectional", GPIO7: "bidirectional", CLK24_EN: "input", CLK24_OUT: "output", VDD33IO_46: "passive", TEST4: "input", VDD18ETHPLL: "power_in", VDD33A_49: "passive", VDD33A_51: "passive", VDD33A_54: "passive", VDD33A_57: "passive", XO: "input", XI: "input", VDD18USBPLL: "power_in", VDD33A_64: "passive", GND: "power_in", USBDM2: "bidirectional", USBDP2: "bidirectional", USBDM3: "bidirectional", USBDP3: "bidirectional", USBDM4: "bidirectional", USBDP4: "bidirectional", USBDM5: "bidirectional", USBDP5: "bidirectional", VBUS_DET: "input", PRTCTL2: "bidirectional", PRTCTL3: "bidirectional", PRTCTL4: "bidirectional", PRTCTL5: "bidirectional", AUTOMDIX_EN: "input", EXRES: "input", RXP: "input", RXN: "input", TXP: "output", TXN: "output", USBDM0: "bidirectional", USBDP0: "bidirectional", USBRBIAS: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:LAN9514i";
  override referencePrefix = "U";
}

/**
 * 10/100/1000Mbps Ethernet Transceiver with RGMII/GMII/MII/RMII Interface, QFN-64
 *
 * KiCad symbol: `Interface_Ethernet:RTL8211EG-VB-CG`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://datasheet.lcsc.com/szlcsc/Realtek-Semicon-RTL8211EG-VB-CG_C69264.pdf
 * Keywords: Ethernet Phy Gigabit.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP3.8x3.8mm.
 */
export class RTL8211EG_VB_CG extends Component.withPins({
  "CLK125": "1",
  "GND_2": "2",
  "REG_OUT": "3",
  "GND_4": "4",
  "MDI[0]+": "5",
  "MDI[0]-": "6",
  "AVDD10_7": "7",
  "MDI[1]+": "8",
  "MDI[1]-": "9",
  "AVDD33_10": "10",
  "MDI[2]+": "11",
  "MDI[2]-": "12",
  "AVDD10_13": "13",
  "MDI[3]+": "14",
  "MDI[3]-": "15",
  "NC_16": "16",
  "NC_17": "17",
  "RXDV/PHY_AD2": "18",
  "RXD0": "19",
  "DVDD33_20": "20",
  "RXD1": "21",
  "RXD2": "22",
  "RXD3": "23",
  "RXC": "24",
  "RXD4/SELRGV": "25",
  "DVDD33_26": "26",
  "RXD5/TXDLY": "27",
  "RXD6/RXDLY": "28",
  "RXD7/AN0": "29",
  "RXER/AN1": "30",
  "COL/MODE": "31",
  "CRS": "32",
  "DVDD10_33": "33",
  "GTX_CLK": "34",
  "TXEN": "35",
  "TXD0": "36",
  "DVDD33_37": "37",
  "~{PHYRST}": "38",
  "TXD1": "39",
  "TXD2": "40",
  "TXD3": "41",
  "TXCLK": "42",
  "TXD4": "43",
  "TXD5": "44",
  "TXD6": "45",
  "TXD7": "46",
  "TXER": "47",
  "DVDD10_48": "48",
  "DVDD33_49": "49",
  "LED0/PHY_AD0": "50",
  "LED1/PHY_AD1": "51",
  "LED2": "52",
  "MDC": "53",
  "MDIO": "54",
  "~{PME}": "55",
  "~{INT}": "56",
  "ENSWREG": "57",
  "RSET": "58",
  "AVDD10_59": "59",
  "AVDD33_60": "60",
  "CKXTAL1": "61",
  "CKXTAL2": "62",
  "GND_63": "63",
  "VDDREG": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLK125: "output", GND_2: "power_in", REG_OUT: "power_out", GND_4: "passive", "MDI[0]+": "bidirectional", "MDI[0]-": "bidirectional", AVDD10_7: "power_in", "MDI[1]+": "bidirectional", "MDI[1]-": "bidirectional", AVDD33_10: "power_in", "MDI[2]+": "bidirectional", "MDI[2]-": "bidirectional", AVDD10_13: "power_in", "MDI[3]+": "bidirectional", "MDI[3]-": "bidirectional", NC_16: "no_connect", NC_17: "no_connect", "RXDV/PHY_AD2": "bidirectional", RXD0: "output", DVDD33_20: "power_in", RXD1: "output", RXD2: "output", RXD3: "output", RXC: "output", "RXD4/SELRGV": "bidirectional", DVDD33_26: "power_in", "RXD5/TXDLY": "bidirectional", "RXD6/RXDLY": "bidirectional", "RXD7/AN0": "bidirectional", "RXER/AN1": "bidirectional", "COL/MODE": "bidirectional", CRS: "output", DVDD10_33: "power_in", GTX_CLK: "input", TXEN: "input", TXD0: "input", DVDD33_37: "power_in", "~{PHYRST}": "input", TXD1: "input", TXD2: "input", TXD3: "input", TXCLK: "output", TXD4: "input", TXD5: "input", TXD6: "input", TXD7: "input", TXER: "input", DVDD10_48: "power_in", DVDD33_49: "power_in", "LED0/PHY_AD0": "bidirectional", "LED1/PHY_AD1": "bidirectional", LED2: "bidirectional", MDC: "input", MDIO: "bidirectional", "~{PME}": "open_collector", "~{INT}": "open_collector", ENSWREG: "input", RSET: "passive", AVDD10_59: "power_in", AVDD33_60: "power_in", CKXTAL1: "input", CKXTAL2: "output", GND_63: "passive", VDDREG: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:RTL8211EG-VB-CG";
  override referencePrefix = "U";
}

/**
 * Single Port Gigabit Ethernet, GMII/RGMII/MII/RMII Interfaces, QFN-68
 *
 * KiCad symbol: `Interface_Ethernet:VSC8541XMV-0x`. Reference prefix: `U`.
 * Footprint filters: QFN?68*1EP*8x8mm*P0.4mm*.
 * @see https://ethernet.microsemi.com/products/download.php?fid=7978&number=vsc8541
 * Keywords: Gigabit Ethernet PHY GMII RGMII MII RMII.
 * Default footprint: Package_DFN_QFN:QFN-68-1EP_8x8mm_P0.4mm_EP5.2x5.2mm.
 */
export class VSC8541XMV_0x extends Component.withPins({
  "REF_REXT": "1",
  "VDD25A_2": "2",
  "P0_D3N": "3",
  "P0_D3P": "4",
  "VDD1A_5": "5",
  "P0_D2N": "6",
  "P0_D2P": "7",
  "VDD25A_8": "8",
  "P0_D1N": "9",
  "P0_D1P": "10",
  "VDD25A_11": "11",
  "P0_D0N": "12",
  "P0_D0P": "13",
  "VDD1A_14": "14",
  "THERMDA": "15",
  "THERMDC_VSS": "16",
  "VDD1_17": "17",
  "COL": "18",
  "CRS": "19",
  "RXD7": "20",
  "RXD6": "21",
  "VDDMAC_22": "22",
  "RXD5": "23",
  "RXD4": "24",
  "RXD3": "25",
  "RXD2": "26",
  "RXD1": "27",
  "VDDMAC_28": "28",
  "RXD0": "29",
  "RX_DV/RX_CTL": "30",
  "RX_ER": "31",
  "RX_CLK": "32",
  "TX_EN/TX_CTL": "33",
  "VDD1_34": "34",
  "TX_ER": "35",
  "MII_TXCLK": "36",
  "GTX_CLK": "37",
  "TXD0": "38",
  "VDDMAC_39": "39",
  "TXD1": "40",
  "TXD2": "41",
  "TXD3": "42",
  "TXD4": "43",
  "VDDMAC_44": "44",
  "TXD5": "45",
  "TXD6": "46",
  "TXD7": "47",
  "MDC": "48",
  "VDDMDIO": "49",
  "MDIO": "50",
  "MDINT": "51",
  "FASTLINK_FAIL": "52",
  "NRESET": "53",
  "CLKOUT": "54",
  "RCVRD_CLK": "55",
  "COMA_MODE": "56",
  "CLK_SQUELCH_IN": "57",
  "VDDIO": "58",
  "LED1": "59",
  "LED0": "60",
  "REFCLK_SEL_1": "61",
  "REFCLK_SEL_0": "62",
  "XTAL1": "63",
  "XTAL2": "64",
  "RESERVED_1": "65",
  "RESERVED_0": "66",
  "REF_FILT": "67",
  "VDD1A_68": "68",
  "VSS": "69",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF_REXT: "passive", VDD25A_2: "power_in", P0_D3N: "passive", P0_D3P: "passive", VDD1A_5: "power_in", P0_D2N: "passive", P0_D2P: "passive", VDD25A_8: "power_in", P0_D1N: "passive", P0_D1P: "passive", VDD25A_11: "power_in", P0_D0N: "passive", P0_D0P: "passive", VDD1A_14: "power_in", THERMDA: "passive", THERMDC_VSS: "passive", VDD1_17: "power_in", COL: "bidirectional", CRS: "bidirectional", RXD7: "bidirectional", RXD6: "bidirectional", VDDMAC_22: "power_in", RXD5: "bidirectional", RXD4: "bidirectional", RXD3: "bidirectional", RXD2: "bidirectional", RXD1: "bidirectional", VDDMAC_28: "passive", RXD0: "bidirectional", "RX_DV/RX_CTL": "bidirectional", RX_ER: "bidirectional", RX_CLK: "bidirectional", "TX_EN/TX_CTL": "input", VDD1_34: "passive", TX_ER: "input", MII_TXCLK: "bidirectional", GTX_CLK: "input", TXD0: "input", VDDMAC_39: "passive", TXD1: "input", TXD2: "input", TXD3: "input", TXD4: "input", VDDMAC_44: "passive", TXD5: "input", TXD6: "input", TXD7: "input", MDC: "input", VDDMDIO: "power_in", MDIO: "bidirectional", MDINT: "output", FASTLINK_FAIL: "output", NRESET: "input", CLKOUT: "bidirectional", RCVRD_CLK: "output", COMA_MODE: "bidirectional", CLK_SQUELCH_IN: "input", VDDIO: "power_in", LED1: "output", LED0: "output", REFCLK_SEL_1: "input", REFCLK_SEL_0: "input", XTAL1: "input", XTAL2: "output", RESERVED_1: "no_connect", RESERVED_0: "no_connect", REF_FILT: "passive", VDD1A_68: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:VSC8541XMV-0x";
  override referencePrefix = "U";
}

/**
 * 10/100Mb Ethernet controller with TCP/IP stack, LQFP-80
 *
 * KiCad symbol: `Interface_Ethernet:W5100`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.4mm*.
 * @see http://www.wiznet.io/wp-content/uploads/wiznethome/Chip/W5100/Document/W5100_Datasheet_v1.2.7.pdf
 * Keywords: Wiznet Ethernet controller.
 * Default footprint: Package_QFP:LQFP-80_10x10mm_P0.4mm.
 */
export class W5100 extends Component.withPins({
  "RSET_BG": "1",
  "VCC3V3A": "2",
  "NC_3": "3",
  "GNDA_4": "4",
  "RXIP": "5",
  "RXIN": "6",
  "VCC1V8A_7": "7",
  "TXOP": "8",
  "TXON": "9",
  "GNDA_10": "10",
  "1V8_OUT": "11",
  "VCC3V3D_12": "12",
  "GNDD_13": "13",
  "GNDD_14": "14",
  "VCC1V8D_15": "15",
  "VCC1V8D_16": "16",
  "GNDD_17": "17",
  "VCC3V3D_18": "18",
  "DATA7": "19",
  "DATA6": "20",
  "DATA5": "21",
  "DATA4": "22",
  "DATA3": "23",
  "DATA2": "24",
  "DATA1": "25",
  "DATA0": "26",
  "MISO": "27",
  "MOSI": "28",
  "~{SCS}": "29",
  "SCLK": "30",
  "SEN": "31",
  "GNDD_32": "32",
  "VCC1V8D_33": "33",
  "TEST_MODE3": "34",
  "TEST_MODE2": "35",
  "TEST_MODE1": "36",
  "TEST_MODE0": "37",
  "ADDR14": "38",
  "ADDR13": "39",
  "ADDR12": "40",
  "ADDR11": "41",
  "ADDR10": "42",
  "GNDD_43": "43",
  "VCC3V3D_44": "44",
  "ADDR9": "45",
  "ADDR8": "46",
  "ADDR7": "47",
  "ADDR6": "48",
  "ADDR5": "49",
  "ADDR4": "50",
  "ADDR3": "51",
  "ADDR2": "52",
  "ADDR1": "53",
  "ADDR0": "54",
  "~{CS}": "55",
  "~{INT}": "56",
  "~{WR}": "57",
  "~{RD}": "58",
  "~{RESET}": "59",
  "NC_60": "60",
  "NC_61": "61",
  "NC_62": "62",
  "OPMODE0": "63",
  "OPMODE1": "64",
  "OPMODE2": "65",
  "LINKLED": "66",
  "SPDLED": "67",
  "GNDD_68": "68",
  "VCC1V8D_69": "69",
  "FDXLED": "70",
  "COLLED": "71",
  "RXLED": "72",
  "TXLED": "73",
  "VCC1V8A_74": "74",
  "XTLN": "75",
  "XTLP": "76",
  "GNDA_77": "77",
  "NC_78": "78",
  "NC_79": "79",
  "NC_80": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RSET_BG: "output", VCC3V3A: "power_in", NC_3: "no_connect", GNDA_4: "power_in", RXIP: "input", RXIN: "input", VCC1V8A_7: "power_in", TXOP: "output", TXON: "output", GNDA_10: "passive", "1V8_OUT": "power_out", VCC3V3D_12: "power_in", GNDD_13: "power_in", GNDD_14: "passive", VCC1V8D_15: "power_in", VCC1V8D_16: "passive", GNDD_17: "passive", VCC3V3D_18: "passive", DATA7: "bidirectional", DATA6: "bidirectional", DATA5: "bidirectional", DATA4: "bidirectional", DATA3: "bidirectional", DATA2: "bidirectional", DATA1: "bidirectional", DATA0: "bidirectional", MISO: "output", MOSI: "input", "~{SCS}": "input", SCLK: "input", SEN: "input", GNDD_32: "passive", VCC1V8D_33: "passive", TEST_MODE3: "input", TEST_MODE2: "input", TEST_MODE1: "input", TEST_MODE0: "input", ADDR14: "input", ADDR13: "input", ADDR12: "input", ADDR11: "input", ADDR10: "input", GNDD_43: "passive", VCC3V3D_44: "passive", ADDR9: "input", ADDR8: "input", ADDR7: "input", ADDR6: "input", ADDR5: "input", ADDR4: "input", ADDR3: "input", ADDR2: "input", ADDR1: "input", ADDR0: "input", "~{CS}": "input", "~{INT}": "output", "~{WR}": "input", "~{RD}": "input", "~{RESET}": "input", NC_60: "no_connect", NC_61: "no_connect", NC_62: "no_connect", OPMODE0: "input", OPMODE1: "input", OPMODE2: "input", LINKLED: "output", SPDLED: "output", GNDD_68: "passive", VCC1V8D_69: "passive", FDXLED: "output", COLLED: "output", RXLED: "output", TXLED: "output", VCC1V8A_74: "passive", XTLN: "input", XTLP: "output", GNDA_77: "passive", NC_78: "no_connect", NC_79: "no_connect", NC_80: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:W5100";
  override referencePrefix = "U";
}

/**
 * 10/100Mb Ethernet controller with TCP/IP stack, LQFP-48
 *
 * KiCad symbol: `Interface_Ethernet:W5100S-L`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://docs.wiznet.io/img/products/w5100s/w5100s-ds-v128e.pdf
 * Keywords: Wiznet.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class W5100S_L extends Component.withPins({
  "~{RST}": "48",
  "GNDA_1": "1",
  "TXON": "2",
  "TXOP": "3",
  "1V2A": "4",
  "RXIN": "5",
  "RXIP": "6",
  "GNDA_7": "7",
  "3V3A_8": "8",
  "RSET_BG": "9",
  "GND_10": "10",
  "XSCO": "11",
  "XSCI": "12",
  "1V2D_13": "13",
  "1V2O": "14",
  "3V3A_15": "15",
  "GNDA_16": "16",
  "~{LNK}": "17",
  "~{SPD}": "18",
  "~{DPX}": "19",
  "~{ACT}": "20",
  "~{COL}": "21",
  "1V2D_22": "22",
  "GND_23": "23",
  "3V3D_24": "24",
  "MOD[0]": "25",
  "MOD[1]": "26",
  "MOD[2]": "27",
  "MOD[3]": "28",
  "~{CS}": "29",
  "SCLK": "30",
  "1V2D_31": "31",
  "MOSI": "32",
  "MISO": "33",
  "~{RD}": "34",
  "~{WR}": "35",
  "3V3D_36": "36",
  "DATA0": "37",
  "DATA1": "38",
  "DATA2": "39",
  "DATA3": "40",
  "DATA4": "41",
  "DATA5": "42",
  "DATA6": "43",
  "DATA7": "44",
  "1V2D_45": "45",
  "GND_46": "46",
  "~{INT}": "47",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", GNDA_1: "power_in", TXON: "output", TXOP: "output", "1V2A": "power_in", RXIN: "input", RXIP: "input", GNDA_7: "passive", "3V3A_8": "power_in", RSET_BG: "output", GND_10: "power_in", XSCO: "output", XSCI: "input", "1V2D_13": "power_in", "1V2O": "power_out", "3V3A_15": "passive", GNDA_16: "passive", "~{LNK}": "output", "~{SPD}": "output", "~{DPX}": "output", "~{ACT}": "output", "~{COL}": "output", "1V2D_22": "passive", GND_23: "passive", "3V3D_24": "power_in", "MOD[0]": "input", "MOD[1]": "input", "MOD[2]": "input", "MOD[3]": "input", "~{CS}": "input", SCLK: "input", "1V2D_31": "passive", MOSI: "input", MISO: "output", "~{RD}": "input", "~{WR}": "input", "3V3D_36": "passive", DATA0: "bidirectional", DATA1: "bidirectional", DATA2: "bidirectional", DATA3: "bidirectional", DATA4: "bidirectional", DATA5: "bidirectional", DATA6: "bidirectional", DATA7: "bidirectional", "1V2D_45": "passive", GND_46: "passive", "~{INT}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:W5100S-L";
  override referencePrefix = "U";
}

/**
 * 10/100Mb Ethernet controller with TCP/IP stack, QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:W5100S-Q`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.5mm*EP5.3x5.3mm*.
 * @see https://docs.wiznet.io/img/products/w5100s/w5100s-ds-v128e.pdf
 * Keywords: Wiznet.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.3x5.3mm.
 */
export class W5100S_Q extends Component.withPins({
  "~{RST}": "48",
  "GNDA_1": "1",
  "TXON": "2",
  "TXOP": "3",
  "1V2A": "4",
  "RXIN": "5",
  "RXIP": "6",
  "GNDA_7": "7",
  "3V3A_8": "8",
  "RSET_BG": "9",
  "GND_10": "10",
  "XSCO": "11",
  "XSCI": "12",
  "1V2D_13": "13",
  "1V2O": "14",
  "3V3A_15": "15",
  "GNDA_16": "16",
  "~{LNK}": "17",
  "~{SPD}": "18",
  "~{DPX}": "19",
  "~{ACT}": "20",
  "~{COL}": "21",
  "1V2D_22": "22",
  "GND_23": "23",
  "3V3D_24": "24",
  "MOD[0]": "25",
  "MOD[1]": "26",
  "MOD[2]": "27",
  "MOD[3]": "28",
  "~{CS}": "29",
  "SCLK": "30",
  "1V2D_31": "31",
  "MOSI": "32",
  "MISO": "33",
  "~{RD}": "34",
  "~{WR}": "35",
  "3V3D_36": "36",
  "DATA0": "37",
  "DATA1": "38",
  "DATA2": "39",
  "DATA3": "40",
  "DATA4": "41",
  "DATA5": "42",
  "DATA6": "43",
  "DATA7": "44",
  "1V2D_45": "45",
  "GND_46": "46",
  "~{INT}": "47",
  "EP": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", GNDA_1: "power_in", TXON: "output", TXOP: "output", "1V2A": "power_in", RXIN: "input", RXIP: "input", GNDA_7: "passive", "3V3A_8": "power_in", RSET_BG: "output", GND_10: "power_in", XSCO: "output", XSCI: "input", "1V2D_13": "power_in", "1V2O": "power_out", "3V3A_15": "passive", GNDA_16: "passive", "~{LNK}": "output", "~{SPD}": "output", "~{DPX}": "output", "~{ACT}": "output", "~{COL}": "output", "1V2D_22": "passive", GND_23: "passive", "3V3D_24": "power_in", "MOD[0]": "input", "MOD[1]": "input", "MOD[2]": "input", "MOD[3]": "input", "~{CS}": "input", SCLK: "input", "1V2D_31": "passive", MOSI: "input", MISO: "output", "~{RD}": "input", "~{WR}": "input", "3V3D_36": "passive", DATA0: "bidirectional", DATA1: "bidirectional", DATA2: "bidirectional", DATA3: "bidirectional", DATA4: "bidirectional", DATA5: "bidirectional", DATA6: "bidirectional", DATA7: "bidirectional", "1V2D_45": "passive", GND_46: "passive", "~{INT}": "output", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:W5100S-Q";
  override referencePrefix = "U";
}

/**
 * 10/100Mb SPI Ethernet controller with TCP/IP stack, LQFP-48
 *
 * KiCad symbol: `Interface_Ethernet:W5500`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://wizwiki.net/wiki/lib/exe/fetch.php/products:w5500:w5500_ds_v109e.pdf
 * Keywords: WIZnet Ethernet controller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class W5500 extends Component.withPins({
  "TXN": "1",
  "TXP": "2",
  "AGND_3": "3",
  "AVDD_4": "4",
  "RXN": "5",
  "RXP": "6",
  "DNC": "7",
  "AVDD_8": "8",
  "AGND_9": "9",
  "EXRES1": "10",
  "AVDD_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "AGND_14": "14",
  "AVDD_15": "15",
  "AGND_16": "16",
  "AVDD_17": "17",
  "VBG": "18",
  "AGND_19": "19",
  "TOCAP": "20",
  "AVDD_21": "21",
  "1V2O": "22",
  "RSVD_23": "23",
  "SPDLED": "24",
  "LINKLED": "25",
  "DUPLED": "26",
  "ACTLED": "27",
  "VDD": "28",
  "GND": "29",
  "XI/CLKIN": "30",
  "XO": "31",
  "~{SCS}": "32",
  "SCLK": "33",
  "MISO": "34",
  "MOSI": "35",
  "~{INT}": "36",
  "~{RST}": "37",
  "RSVD_38": "38",
  "RSVD_39": "39",
  "RSVD_40": "40",
  "RSVD_41": "41",
  "RSVD_42": "42",
  "PMODE2": "43",
  "PMODE1": "44",
  "PMODE0": "45",
  "NC_46": "46",
  "NC_47": "47",
  "AGND_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TXN: "output", TXP: "output", AGND_3: "power_in", AVDD_4: "power_in", RXN: "input", RXP: "input", DNC: "no_connect", AVDD_8: "passive", AGND_9: "passive", EXRES1: "passive", AVDD_11: "passive", NC_12: "no_connect", NC_13: "no_connect", AGND_14: "passive", AVDD_15: "passive", AGND_16: "passive", AVDD_17: "passive", VBG: "passive", AGND_19: "passive", TOCAP: "passive", AVDD_21: "passive", "1V2O": "output", RSVD_23: "input", SPDLED: "output", LINKLED: "output", DUPLED: "output", ACTLED: "output", VDD: "power_in", GND: "power_in", "XI/CLKIN": "input", XO: "output", "~{SCS}": "input", SCLK: "input", MISO: "output", MOSI: "input", "~{INT}": "input", "~{RST}": "input", RSVD_38: "input", RSVD_39: "input", RSVD_40: "input", RSVD_41: "input", RSVD_42: "input", PMODE2: "input", PMODE1: "input", PMODE0: "input", NC_46: "no_connect", NC_47: "no_connect", AGND_48: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:W5500";
  override referencePrefix = "U";
}

/**
 * 10/100Mb Ethernet controller with TCP/IP stack, IPv4/IPv6, LQFP-48
 *
 * KiCad symbol: `Interface_Ethernet:W6100-L`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://docs.wiznet.io/img/products/w6100/w6100_ds_v105e.pdf
 * Keywords: Wiznet.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class W6100_L extends Component.withPins({
  "~{RST}": "48",
  "GNDA_1": "1",
  "TXON": "2",
  "TXOP": "3",
  "1V2A": "4",
  "RXIN": "5",
  "RXIP": "6",
  "GNDA_7": "7",
  "3V3A_8": "8",
  "RSET_BG": "9",
  "GND_10": "10",
  "XSCO": "11",
  "XSCI": "12",
  "1V2D_13": "13",
  "1V2O": "14",
  "3V3A_15": "15",
  "GNDA_16": "16",
  "~{LNK}": "17",
  "~{SPD}": "18",
  "~{DPX}": "19",
  "~{ACT}": "20",
  "~{COL}": "21",
  "1V2D_22": "22",
  "GND_23": "23",
  "3V3D_24": "24",
  "MOD[0]": "25",
  "MOD[1]": "26",
  "MOD[2]": "27",
  "MOD[3]": "28",
  "~{CS}": "29",
  "SCLK": "30",
  "1V2D_31": "31",
  "MOSI": "32",
  "MISO": "33",
  "~{RD}": "34",
  "~{WR}": "35",
  "3V3D_36": "36",
  "DATA0": "37",
  "DATA1": "38",
  "DATA2": "39",
  "DATA3": "40",
  "DATA4": "41",
  "DATA5": "42",
  "DATA6": "43",
  "DATA7": "44",
  "1V2D_45": "45",
  "GND_46": "46",
  "~{INT}": "47",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", GNDA_1: "power_in", TXON: "output", TXOP: "output", "1V2A": "power_in", RXIN: "input", RXIP: "input", GNDA_7: "passive", "3V3A_8": "power_in", RSET_BG: "output", GND_10: "power_in", XSCO: "output", XSCI: "input", "1V2D_13": "power_in", "1V2O": "power_out", "3V3A_15": "passive", GNDA_16: "passive", "~{LNK}": "output", "~{SPD}": "output", "~{DPX}": "output", "~{ACT}": "output", "~{COL}": "output", "1V2D_22": "passive", GND_23: "passive", "3V3D_24": "power_in", "MOD[0]": "input", "MOD[1]": "input", "MOD[2]": "input", "MOD[3]": "input", "~{CS}": "input", SCLK: "input", "1V2D_31": "passive", MOSI: "input", MISO: "output", "~{RD}": "input", "~{WR}": "input", "3V3D_36": "passive", DATA0: "bidirectional", DATA1: "bidirectional", DATA2: "bidirectional", DATA3: "bidirectional", DATA4: "bidirectional", DATA5: "bidirectional", DATA6: "bidirectional", DATA7: "bidirectional", "1V2D_45": "passive", GND_46: "passive", "~{INT}": "output", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:W6100-L";
  override referencePrefix = "U";
}

/**
 * 10/100Mb Ethernet controller with TCP/IP stack, IPv4/IPv6, QFN-48
 *
 * KiCad symbol: `Interface_Ethernet:W6100-Q`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.5mm*EP5.3x5.3mm*.
 * @see https://docs.wiznet.io/img/products/w6100/w6100_ds_v105e.pdf
 * Keywords: Wiznet.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.3x5.3mm.
 */
export class W6100_Q extends Component.withPins({
  "~{RST}": "48",
  "GNDA_1": "1",
  "TXON": "2",
  "TXOP": "3",
  "1V2A": "4",
  "RXIN": "5",
  "RXIP": "6",
  "GNDA_7": "7",
  "3V3A_8": "8",
  "RSET_BG": "9",
  "GND_10": "10",
  "XSCO": "11",
  "XSCI": "12",
  "1V2D_13": "13",
  "1V2O": "14",
  "3V3A_15": "15",
  "GNDA_16": "16",
  "~{LNK}": "17",
  "~{SPD}": "18",
  "~{DPX}": "19",
  "~{ACT}": "20",
  "~{COL}": "21",
  "1V2D_22": "22",
  "GND_23": "23",
  "3V3D_24": "24",
  "MOD[0]": "25",
  "MOD[1]": "26",
  "MOD[2]": "27",
  "MOD[3]": "28",
  "~{CS}": "29",
  "SCLK": "30",
  "1V2D_31": "31",
  "MOSI": "32",
  "MISO": "33",
  "~{RD}": "34",
  "~{WR}": "35",
  "3V3D_36": "36",
  "DATA0": "37",
  "DATA1": "38",
  "DATA2": "39",
  "DATA3": "40",
  "DATA4": "41",
  "DATA5": "42",
  "DATA6": "43",
  "DATA7": "44",
  "1V2D_45": "45",
  "GND_46": "46",
  "~{INT}": "47",
  "EP": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", GNDA_1: "power_in", TXON: "output", TXOP: "output", "1V2A": "power_in", RXIN: "input", RXIP: "input", GNDA_7: "passive", "3V3A_8": "power_in", RSET_BG: "output", GND_10: "power_in", XSCO: "output", XSCI: "input", "1V2D_13": "power_in", "1V2O": "power_out", "3V3A_15": "passive", GNDA_16: "passive", "~{LNK}": "output", "~{SPD}": "output", "~{DPX}": "output", "~{ACT}": "output", "~{COL}": "output", "1V2D_22": "passive", GND_23: "passive", "3V3D_24": "power_in", "MOD[0]": "input", "MOD[1]": "input", "MOD[2]": "input", "MOD[3]": "input", "~{CS}": "input", SCLK: "input", "1V2D_31": "passive", MOSI: "input", MISO: "output", "~{RD}": "input", "~{WR}": "input", "3V3D_36": "passive", DATA0: "bidirectional", DATA1: "bidirectional", DATA2: "bidirectional", DATA3: "bidirectional", DATA4: "bidirectional", DATA5: "bidirectional", DATA6: "bidirectional", DATA7: "bidirectional", "1V2D_45": "passive", GND_46: "passive", "~{INT}": "output", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:W6100-Q";
  override referencePrefix = "U";
}

/**
 * 10/100/1000Mbps Ethernet transceiver with GMII/Serdes/PCIe interface, QFN-64
 *
 * KiCad symbol: `Interface_Ethernet:WGI210AT`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://www.intel.com/content/www/us/en/ethernet-controllers/i210-ethernet-controller-datasheet.html
 * Keywords: Gigabit ethernet PHY PCIe.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP3.4x3.4mm.
 */
export class WGI210AT extends Component.withPins({
  "LAN_PWR_GOOD": "1",
  "NC_SI_CLK_IN": "2",
  "NC_SI_CRS_DV": "3",
  "JTAG_TDO": "4",
  "NC_SI_RXD1": "5",
  "NC_SI_RXD0": "6",
  "NC_SI_TX_EN": "7",
  "NC_SI_TXD1": "8",
  "NC_SI_TXD0": "9",
  "VDD3p3_10": "10",
  "VDD0p9_11": "11",
  "NVM_SI": "12",
  "NVM_SK": "13",
  "NVM_SO": "14",
  "~{NVM_CS}": "15",
  "~{PE_WAKE}": "16",
  "~{PE_RST}": "17",
  "JTAG_TMS": "18",
  "JTAG_CLK": "19",
  "PE_Tn": "20",
  "PE_Tp": "21",
  "NC/Vext": "22",
  "PE_Rn": "23",
  "PE_Rp": "24",
  "PECLKn": "25",
  "PECLKp": "26",
  "VDD3p3_27": "27",
  "~{DEV_OFF}": "28",
  "JTAG_TDI": "29",
  "LED1": "30",
  "LED0": "31",
  "VDD0p9_32": "32",
  "LED2": "33",
  "SMB_CLK": "34",
  "~{SMB_ALRT}": "35",
  "SMB_DATA": "36",
  "CBOT": "37",
  "VDD0p9_OUT": "38",
  "VDD1p5_OUT": "39",
  "CTOP": "40",
  "VDD3p3_41": "41",
  "VDD0p9_42": "42",
  "NC_SI_ARB_IN": "43",
  "NC_SI_ARB_OUT": "44",
  "XTAL2": "45",
  "XTAL1": "46",
  "VDD1p5_47": "47",
  "RSET": "48",
  "MDI_MINUS[3]/SER_N": "49",
  "MDI_PLUS[3]/SER_P": "50",
  "VDD3p3_51": "51",
  "MDI_MINUS[2]/SET_N": "52",
  "MDI_PLUS[2]": "53",
  "MDI_MINUS[1]/SRDS_SIG_DET": "54",
  "MDI_PLUS[1]/SFP_I2C_CLK": "55",
  "VDD1p5_56": "56",
  "MDI_MINUS[0]/SFP_I2C_DATA": "57",
  "MDI_PLUS[0]/NC": "58",
  "VDD0p9_59": "59",
  "SDP3": "60",
  "SDP1": "61",
  "SDP2": "62",
  "SDP0": "63",
  "VDD3p3_64": "64",
  "GND": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LAN_PWR_GOOD: "input", NC_SI_CLK_IN: "input", NC_SI_CRS_DV: "output", JTAG_TDO: "output", NC_SI_RXD1: "output", NC_SI_RXD0: "output", NC_SI_TX_EN: "input", NC_SI_TXD1: "input", NC_SI_TXD0: "input", VDD3p3_10: "power_in", VDD0p9_11: "power_in", NVM_SI: "output", NVM_SK: "output", NVM_SO: "input", "~{NVM_CS}": "output", "~{PE_WAKE}": "bidirectional", "~{PE_RST}": "input", JTAG_TMS: "input", JTAG_CLK: "input", PE_Tn: "output", PE_Tp: "output", "NC/Vext": "power_in", PE_Rn: "input", PE_Rp: "input", PECLKn: "input", PECLKp: "input", VDD3p3_27: "passive", "~{DEV_OFF}": "input", JTAG_TDI: "input", LED1: "output", LED0: "output", VDD0p9_32: "power_in", LED2: "output", SMB_CLK: "bidirectional", "~{SMB_ALRT}": "output", SMB_DATA: "bidirectional", CBOT: "passive", VDD0p9_OUT: "power_out", VDD1p5_OUT: "power_out", CTOP: "passive", VDD3p3_41: "passive", VDD0p9_42: "power_in", NC_SI_ARB_IN: "input", NC_SI_ARB_OUT: "output", XTAL2: "output", XTAL1: "input", VDD1p5_47: "power_in", RSET: "passive", "MDI_MINUS[3]/SER_N": "bidirectional", "MDI_PLUS[3]/SER_P": "bidirectional", VDD3p3_51: "power_in", "MDI_MINUS[2]/SET_N": "bidirectional", "MDI_PLUS[2]": "bidirectional", "MDI_MINUS[1]/SRDS_SIG_DET": "bidirectional", "MDI_PLUS[1]/SFP_I2C_CLK": "bidirectional", VDD1p5_56: "power_in", "MDI_MINUS[0]/SFP_I2C_DATA": "bidirectional", "MDI_PLUS[0]/NC": "bidirectional", VDD0p9_59: "power_in", SDP3: "bidirectional", SDP1: "bidirectional", SDP2: "bidirectional", SDP0: "bidirectional", VDD3p3_64: "passive", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Ethernet:WGI210AT";
  override referencePrefix = "U";
}
