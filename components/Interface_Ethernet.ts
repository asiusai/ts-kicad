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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DP83825I extends Component.withPins({
  /** Physical pin 2: 50MHzOut/LED2/S(RX_DV_EN); bidirectional. */
  "50MHzOut/LED2/S(RX_DV_EN)": "2",
  /** Physical pin 3: INTR/~{PWRDN}; input. */
  "INTR/~{PWRDN}": "3",
  /** Physical pin 1: TX_EN; input. */
  "TX_EN": "1",
  /** Physical pin 4: LED0/S(ANEG_Dis); bidirectional. */
  "LED0/S(ANEG_Dis)": "4",
  /** Physical pin 5: ~{RST}; input. */
  "~{RST}": "5",
  /** Physical pin 6: VDDA3V3; power_in. */
  "VDDA3V3": "6",
  /** Physical pin 7: RD-; input. */
  "RD-": "7",
  /** Physical pin 8: RD+; input. */
  "RD+": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: TD-; input. */
  "TD-": "10",
  /** Physical pin 11: TD+; input. */
  "TD+": "11",
  /** Physical pin 12: XO; output. */
  "XO": "12",
  /** Physical pin 13: XI/50MHzIn; input. */
  "XI/50MHzIn": "13",
  /** Physical pin 14: RBIAS; input. */
  "RBIAS": "14",
  /** Physical pin 15: MDIO; bidirectional. */
  "MDIO": "15",
  /** Physical pin 16: MDC; input. */
  "MDC": "16",
  /** Physical pin 17: RX_D1/S(Master/Slave); output. */
  "RX_D1/S(Master/Slave)": "17",
  /** Physical pin 18: RX_D0/S(PhyAdd[0]); output. */
  "RX_D0/S(PhyAdd[0])": "18",
  /** Physical pin 19: VDDIO; power_in. */
  "VDDIO": "19",
  /** Physical pin 20: CRS_DV/S(PhyAdd[1]); input. */
  "CRS_DV/S(PhyAdd[1])": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: RX_ER/S(A-MDIX); output. */
  "RX_ER/S(A-MDIX)": "22",
  /** Physical pin 23: TX_D0; input. */
  "TX_D0": "23",
  /** Physical pin 24: TX_D1; input. */
  "TX_D1": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DP83848C extends Component.withPins({
  /** Physical pin 1: TX_CLK; output. */
  "TX_CLK": "1",
  /** Physical pin 2: TX_EN; input. */
  "TX_EN": "2",
  /** Physical pin 3: TXD_0; input. */
  "TXD_0": "3",
  /** Physical pin 4: TXD_1; input. */
  "TXD_1": "4",
  /** Physical pin 5: TXD_2; input. */
  "TXD_2": "5",
  /** Physical pin 6: TXD_3/SNI_MODE; input. */
  "TXD_3/SNI_MODE": "6",
  /** Physical pin 7: PWR_DOWN/INT; input. */
  "PWR_DOWN/INT": "7",
  /** Physical pin 13: RD-; passive. */
  "RD-": "13",
  /** Physical pin 14: RD+; passive. */
  "RD+": "14",
  /** Physical pin 15: AGND; power_in. */
  "AGND_15": "15",
  /** Physical pin 16: TD-; passive. */
  "TD-": "16",
  /** Physical pin 17: TD+; passive. */
  "TD+": "17",
  /** Physical pin 18: PFBIN1; passive. */
  "PFBIN1": "18",
  /** Physical pin 19: AGND; passive. */
  "AGND_19": "19",
  /** Physical pin 20: RESERVED; passive. */
  "RESERVED_20": "20",
  /** Physical pin 21: RESERVED; passive. */
  "RESERVED_21": "21",
  /** Physical pin 22: AVDD33; power_in. */
  "AVDD33": "22",
  /** Physical pin 23: PFBOUT; passive. */
  "PFBOUT": "23",
  /** Physical pin 24: RBIAS; passive. */
  "RBIAS": "24",
  /** Physical pin 25: 25M_OUT; output. */
  "25M_OUT": "25",
  /** Physical pin 26: AN_EN/LED_ACT/COL; output. */
  "AN_EN/LED_ACT/COL": "26",
  /** Physical pin 27: AN1/LED_SPEED; output. */
  "AN1/LED_SPEED": "27",
  /** Physical pin 28: AN0/LED_LINK; output. */
  "AN0/LED_LINK": "28",
  /** Physical pin 29: ~{RESET}; input. */
  "~{RESET}": "29",
  /** Physical pin 30: MDIO; bidirectional. */
  "MDIO": "30",
  /** Physical pin 31: MDC; input. */
  "MDC": "31",
  /** Physical pin 32: IOVDD33; power_in. */
  "IOVDD33_32": "32",
  /** Physical pin 33: X2; output. */
  "X2": "33",
  /** Physical pin 34: X1; input. */
  "X1": "34",
  /** Physical pin 35: IOGND; power_in. */
  "IOGND_35": "35",
  /** Physical pin 36: DGND; power_in. */
  "DGND": "36",
  /** Physical pin 37: PFBIN2; passive. */
  "PFBIN2": "37",
  /** Physical pin 38: RX_CLK; output. */
  "RX_CLK": "38",
  /** Physical pin 39: RX_DV/MII_MODE; output. */
  "RX_DV/MII_MODE": "39",
  /** Physical pin 40: CRS/CRS_DV/LED_CFG; output. */
  "CRS/CRS_DV/LED_CFG": "40",
  /** Physical pin 41: RX_ER/MDIX_EN; output. */
  "RX_ER/MDIX_EN": "41",
  /** Physical pin 42: COL/PHY_AD0; output. */
  "COL/PHY_AD0": "42",
  /** Physical pin 43: RXD_0/PHY_AD1; output. */
  "RXD_0/PHY_AD1": "43",
  /** Physical pin 44: RXD_1/PHY_AD2; output. */
  "RXD_1/PHY_AD2": "44",
  /** Physical pin 45: RXD_2/PHY_AD3; output. */
  "RXD_2/PHY_AD3": "45",
  /** Physical pin 46: RXD_3/PHY_AD4; output. */
  "RXD_3/PHY_AD4": "46",
  /** Physical pin 47: IOGND; passive. */
  "IOGND_47": "47",
  /** Physical pin 48: IOVDD33; passive. */
  "IOVDD33_48": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DP83848I extends Component.withPins({
  /** Physical pin 1: TX_CLK; output. */
  "TX_CLK": "1",
  /** Physical pin 2: TX_EN; input. */
  "TX_EN": "2",
  /** Physical pin 3: TXD_0; input. */
  "TXD_0": "3",
  /** Physical pin 4: TXD_1; input. */
  "TXD_1": "4",
  /** Physical pin 5: TXD_2; input. */
  "TXD_2": "5",
  /** Physical pin 6: TXD_3/SNI_MODE; input. */
  "TXD_3/SNI_MODE": "6",
  /** Physical pin 7: PWR_DOWN/INT; input. */
  "PWR_DOWN/INT": "7",
  /** Physical pin 13: RD-; passive. */
  "RD-": "13",
  /** Physical pin 14: RD+; passive. */
  "RD+": "14",
  /** Physical pin 15: AGND; power_in. */
  "AGND_15": "15",
  /** Physical pin 16: TD-; passive. */
  "TD-": "16",
  /** Physical pin 17: TD+; passive. */
  "TD+": "17",
  /** Physical pin 18: PFBIN1; passive. */
  "PFBIN1": "18",
  /** Physical pin 19: AGND; passive. */
  "AGND_19": "19",
  /** Physical pin 20: RESERVED; passive. */
  "RESERVED_20": "20",
  /** Physical pin 21: RESERVED; passive. */
  "RESERVED_21": "21",
  /** Physical pin 22: AVDD33; power_in. */
  "AVDD33": "22",
  /** Physical pin 23: PFBOUT; passive. */
  "PFBOUT": "23",
  /** Physical pin 24: RBIAS; passive. */
  "RBIAS": "24",
  /** Physical pin 25: 25M_OUT; output. */
  "25M_OUT": "25",
  /** Physical pin 26: AN_EN/LED_ACT/COL; output. */
  "AN_EN/LED_ACT/COL": "26",
  /** Physical pin 27: AN1/LED_SPEED; output. */
  "AN1/LED_SPEED": "27",
  /** Physical pin 28: AN0/LED_LINK; output. */
  "AN0/LED_LINK": "28",
  /** Physical pin 29: ~{RESET}; input. */
  "~{RESET}": "29",
  /** Physical pin 30: MDIO; bidirectional. */
  "MDIO": "30",
  /** Physical pin 31: MDC; input. */
  "MDC": "31",
  /** Physical pin 32: IOVDD33; power_in. */
  "IOVDD33_32": "32",
  /** Physical pin 33: X2; output. */
  "X2": "33",
  /** Physical pin 34: X1; input. */
  "X1": "34",
  /** Physical pin 35: IOGND; power_in. */
  "IOGND_35": "35",
  /** Physical pin 36: DGND; power_in. */
  "DGND": "36",
  /** Physical pin 37: PFBIN2; passive. */
  "PFBIN2": "37",
  /** Physical pin 38: RX_CLK; output. */
  "RX_CLK": "38",
  /** Physical pin 39: RX_DV/MII_MODE; output. */
  "RX_DV/MII_MODE": "39",
  /** Physical pin 40: CRS/CRS_DV/LED_CFG; output. */
  "CRS/CRS_DV/LED_CFG": "40",
  /** Physical pin 41: RX_ER/MDIX_EN; output. */
  "RX_ER/MDIX_EN": "41",
  /** Physical pin 42: COL/PHY_AD0; output. */
  "COL/PHY_AD0": "42",
  /** Physical pin 43: RXD_0/PHY_AD1; output. */
  "RXD_0/PHY_AD1": "43",
  /** Physical pin 44: RXD_1/PHY_AD2; output. */
  "RXD_1/PHY_AD2": "44",
  /** Physical pin 45: RXD_2/PHY_AD3; output. */
  "RXD_2/PHY_AD3": "45",
  /** Physical pin 46: RXD_3/PHY_AD4; output. */
  "RXD_3/PHY_AD4": "46",
  /** Physical pin 47: IOGND; passive. */
  "IOGND_47": "47",
  /** Physical pin 48: IOVDD33; passive. */
  "IOVDD33_48": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ENC28J60x_ML extends Component.withPins({
  /** Physical pin 1: ~{WOL}; output. */
  "~{WOL}": "1",
  /** Physical pin 2: SO; output. */
  "SO": "2",
  /** Physical pin 3: SI; input. */
  "SI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: VSSRX; power_out. */
  "VSSRX": "7",
  /** Physical pin 8: TPIN-; input. */
  "TPIN-": "8",
  /** Physical pin 9: TPIN+; input. */
  "TPIN+": "9",
  /** Physical pin 10: RBIAS; input. */
  "RBIAS": "10",
  /** Physical pin 11: VDDTX; power_in. */
  "VDDTX": "11",
  /** Physical pin 12: TPOUT-; output. */
  "TPOUT-": "12",
  /** Physical pin 13: TPOUT+; output. */
  "TPOUT+": "13",
  /** Physical pin 14: VSSTX; power_out. */
  "VSSTX": "14",
  /** Physical pin 15: VDDRX; power_in. */
  "VDDRX": "15",
  /** Physical pin 16: VDDPLL; power_in. */
  "VDDPLL": "16",
  /** Physical pin 17: VSSPLL; power_in. */
  "VSSPLL": "17",
  /** Physical pin 18: VSSOSC; power_in. */
  "VSSOSC": "18",
  /** Physical pin 19: OSC1; input. */
  "OSC1": "19",
  /** Physical pin 20: OSC2; output. */
  "OSC2": "20",
  /** Physical pin 21: VDDOSC; power_in. */
  "VDDOSC": "21",
  /** Physical pin 22: LEDB; output. */
  "LEDB": "22",
  /** Physical pin 23: LEDA; output. */
  "LEDA": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: VCAP; input. */
  "VCAP": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS": "26",
  /** Physical pin 27: CLKOUT; output. */
  "CLKOUT": "27",
  /** Physical pin 28: ~{INT}; output. */
  "~{INT}": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ENC28J60x_SO extends Component.withPins({
  /** Physical pin 1: VCAP; input. */
  "VCAP": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: CLKOUT; output. */
  "CLKOUT": "3",
  /** Physical pin 4: ~{INT}; output. */
  "~{INT}": "4",
  /** Physical pin 5: ~{WOL}; output. */
  "~{WOL}": "5",
  /** Physical pin 6: SO; output. */
  "SO": "6",
  /** Physical pin 7: SI; input. */
  "SI": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: ~{CS}; input. */
  "~{CS}": "9",
  /** Physical pin 10: ~{RESET}; input. */
  "~{RESET}": "10",
  /** Physical pin 11: VSSRX; power_in. */
  "VSSRX": "11",
  /** Physical pin 12: TPIN-; input. */
  "TPIN-": "12",
  /** Physical pin 13: TPIN+; input. */
  "TPIN+": "13",
  /** Physical pin 14: RBIAS; input. */
  "RBIAS": "14",
  /** Physical pin 15: VDDTX; power_in. */
  "VDDTX": "15",
  /** Physical pin 16: TPOUT-; output. */
  "TPOUT-": "16",
  /** Physical pin 17: TPOUT+; output. */
  "TPOUT+": "17",
  /** Physical pin 18: VSSTX; power_in. */
  "VSSTX": "18",
  /** Physical pin 19: VDDRX; power_in. */
  "VDDRX": "19",
  /** Physical pin 20: VDDPLL; power_in. */
  "VDDPLL": "20",
  /** Physical pin 21: VSSPLL; power_in. */
  "VSSPLL": "21",
  /** Physical pin 22: VSSOSC; power_in. */
  "VSSOSC": "22",
  /** Physical pin 23: OSC1; input. */
  "OSC1": "23",
  /** Physical pin 24: OSC2; input. */
  "OSC2": "24",
  /** Physical pin 25: VDDOSC; power_in. */
  "VDDOSC": "25",
  /** Physical pin 26: LEDB; output. */
  "LEDB": "26",
  /** Physical pin 27: LEDA; output. */
  "LEDA": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ENC28J60x_SP extends Component.withPins({
  /** Physical pin 1: VCAP; input. */
  "VCAP": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: CLKOUT; output. */
  "CLKOUT": "3",
  /** Physical pin 4: ~{INT}; output. */
  "~{INT}": "4",
  /** Physical pin 5: ~{WOL}; output. */
  "~{WOL}": "5",
  /** Physical pin 6: SO; output. */
  "SO": "6",
  /** Physical pin 7: SI; input. */
  "SI": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: ~{CS}; input. */
  "~{CS}": "9",
  /** Physical pin 10: ~{RESET}; input. */
  "~{RESET}": "10",
  /** Physical pin 11: VSSRX; power_in. */
  "VSSRX": "11",
  /** Physical pin 12: TPIN-; input. */
  "TPIN-": "12",
  /** Physical pin 13: TPIN+; input. */
  "TPIN+": "13",
  /** Physical pin 14: RBIAS; input. */
  "RBIAS": "14",
  /** Physical pin 15: VDDTX; power_in. */
  "VDDTX": "15",
  /** Physical pin 16: TPOUT-; output. */
  "TPOUT-": "16",
  /** Physical pin 17: TPOUT+; output. */
  "TPOUT+": "17",
  /** Physical pin 18: VSSTX; power_in. */
  "VSSTX": "18",
  /** Physical pin 19: VDDRX; power_in. */
  "VDDRX": "19",
  /** Physical pin 20: VDDPLL; power_in. */
  "VDDPLL": "20",
  /** Physical pin 21: VSSPLL; power_in. */
  "VSSPLL": "21",
  /** Physical pin 22: VSSOSC; power_in. */
  "VSSOSC": "22",
  /** Physical pin 23: OSC1; input. */
  "OSC1": "23",
  /** Physical pin 24: OSC2; input. */
  "OSC2": "24",
  /** Physical pin 25: VDDOSC; power_in. */
  "VDDOSC": "25",
  /** Physical pin 26: LEDB; output. */
  "LEDB": "26",
  /** Physical pin 27: LEDA; output. */
  "LEDA": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ENC28J60x_SS extends Component.withPins({
  /** Physical pin 1: VCAP; input. */
  "VCAP": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: CLKOUT; output. */
  "CLKOUT": "3",
  /** Physical pin 4: ~{INT}; output. */
  "~{INT}": "4",
  /** Physical pin 5: ~{WOL}; output. */
  "~{WOL}": "5",
  /** Physical pin 6: SO; output. */
  "SO": "6",
  /** Physical pin 7: SI; input. */
  "SI": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: ~{CS}; input. */
  "~{CS}": "9",
  /** Physical pin 10: ~{RESET}; input. */
  "~{RESET}": "10",
  /** Physical pin 11: VSSRX; power_in. */
  "VSSRX": "11",
  /** Physical pin 12: TPIN-; input. */
  "TPIN-": "12",
  /** Physical pin 13: TPIN+; input. */
  "TPIN+": "13",
  /** Physical pin 14: RBIAS; input. */
  "RBIAS": "14",
  /** Physical pin 15: VDDTX; power_in. */
  "VDDTX": "15",
  /** Physical pin 16: TPOUT-; output. */
  "TPOUT-": "16",
  /** Physical pin 17: TPOUT+; output. */
  "TPOUT+": "17",
  /** Physical pin 18: VSSTX; power_in. */
  "VSSTX": "18",
  /** Physical pin 19: VDDRX; power_in. */
  "VDDRX": "19",
  /** Physical pin 20: VDDPLL; power_in. */
  "VDDPLL": "20",
  /** Physical pin 21: VSSPLL; power_in. */
  "VSSPLL": "21",
  /** Physical pin 22: VSSOSC; power_in. */
  "VSSOSC": "22",
  /** Physical pin 23: OSC1; input. */
  "OSC1": "23",
  /** Physical pin 24: OSC2; input. */
  "OSC2": "24",
  /** Physical pin 25: VDDOSC; power_in. */
  "VDDOSC": "25",
  /** Physical pin 26: LEDB; output. */
  "LEDB": "26",
  /** Physical pin 27: LEDA; output. */
  "LEDA": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ENC424J600_ML extends Component.withPins({
  /** Physical pin 1: VSSOSC; power_in. */
  "VSSOSC": "1",
  /** Physical pin 2: OSC2; output. */
  "OSC2": "2",
  /** Physical pin 3: OSC1; input. */
  "OSC1": "3",
  /** Physical pin 4: VDDOSC; power_in. */
  "VDDOSC": "4",
  /** Physical pin 5: AD4; bidirectional. */
  "AD4": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: AD6; bidirectional. */
  "AD6": "7",
  /** Physical pin 8: AD7; bidirectional. */
  "AD7": "8",
  /** Physical pin 9: LEDB; output. */
  "LEDB": "9",
  /** Physical pin 10: LEDA; output. */
  "LEDA": "10",
  /** Physical pin 11: RBIAS; input. */
  "RBIAS": "11",
  /** Physical pin 12: VDDPLL; power_in. */
  "VDDPLL": "12",
  /** Physical pin 13: VSSPLL; power_in. */
  "VSSPLL": "13",
  /** Physical pin 14: VSSRX; power_in. */
  "VSSRX": "14",
  /** Physical pin 15: VDDRX; power_in. */
  "VDDRX": "15",
  /** Physical pin 16: TPIN+; input. */
  "TPIN+": "16",
  /** Physical pin 17: TPIN-; input. */
  "TPIN-": "17",
  /** Physical pin 18: VDDTX; power_in. */
  "VDDTX": "18",
  /** Physical pin 19: VSSTX; power_in. */
  "VSSTX_19": "19",
  /** Physical pin 20: TPOUT+; output. */
  "TPOUT+": "20",
  /** Physical pin 21: TPOUT-; output. */
  "TPOUT-": "21",
  /** Physical pin 22: VSSTX; passive. */
  "VSSTX_22": "22",
  /** Physical pin 23: CLKOUT; output. */
  "CLKOUT": "23",
  /** Physical pin 24: ~{INT}/SPISEL; bidirectional. */
  "~{INT}/SPISEL": "24",
  /** Physical pin 25: AD8; bidirectional. */
  "AD8": "25",
  /** Physical pin 26: AD9; bidirectional. */
  "AD9": "26",
  /** Physical pin 27: AD10; bidirectional. */
  "AD10": "27",
  /** Physical pin 28: AD11; bidirectional. */
  "AD11": "28",
  /** Physical pin 29: AD12; bidirectional. */
  "AD12": "29",
  /** Physical pin 30: AD13; bidirectional. */
  "AD13": "30",
  /** Physical pin 31: AD14; bidirectional. */
  "AD14": "31",
  /** Physical pin 32: PSPCFG0; input. */
  "PSPCFG0": "32",
  /** Physical pin 33: VSS; power_in. */
  "VSS_33": "33",
  /** Physical pin 34: ~{CS}/CS; input. */
  "~{CS}/CS": "34",
  /** Physical pin 35: SO/WR/EN; bidirectional. */
  "SO/WR/EN": "35",
  /** Physical pin 36: SI/RD/R~{W}; input. */
  "SI/RD/R~{W}": "36",
  /** Physical pin 37: SCK/AL; input. */
  "SCK/AL": "37",
  /** Physical pin 38: AD0; bidirectional. */
  "AD0": "38",
  /** Physical pin 39: AD1; input. */
  "AD1": "39",
  /** Physical pin 40: AD2; bidirectional. */
  "AD2": "40",
  /** Physical pin 41: AD3; bidirectional. */
  "AD3": "41",
  /** Physical pin 42: VSS; passive. */
  "VSS_42": "42",
  /** Physical pin 43: VCAP; input. */
  "VCAP": "43",
  /** Physical pin 44: VDD; power_in. */
  "VDD": "44",
  /** Physical pin 45: EP; power_in. */
  "EP": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ENC424J600_PT extends Component.withPins({
  /** Physical pin 1: VSSOSC; power_in. */
  "VSSOSC": "1",
  /** Physical pin 2: OSC2; output. */
  "OSC2": "2",
  /** Physical pin 3: OSC1; input. */
  "OSC1": "3",
  /** Physical pin 4: VDDOSC; power_in. */
  "VDDOSC": "4",
  /** Physical pin 5: AD4; bidirectional. */
  "AD4": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: AD6; bidirectional. */
  "AD6": "7",
  /** Physical pin 8: AD7; bidirectional. */
  "AD7": "8",
  /** Physical pin 9: LEDB; output. */
  "LEDB": "9",
  /** Physical pin 10: LEDA; output. */
  "LEDA": "10",
  /** Physical pin 11: RBIAS; input. */
  "RBIAS": "11",
  /** Physical pin 12: VDDPLL; power_in. */
  "VDDPLL": "12",
  /** Physical pin 13: VSSPLL; power_in. */
  "VSSPLL": "13",
  /** Physical pin 14: VSSRX; power_in. */
  "VSSRX": "14",
  /** Physical pin 15: VDDRX; power_in. */
  "VDDRX": "15",
  /** Physical pin 16: TPIN+; input. */
  "TPIN+": "16",
  /** Physical pin 17: TPIN-; input. */
  "TPIN-": "17",
  /** Physical pin 18: VDDTX; power_in. */
  "VDDTX": "18",
  /** Physical pin 19: VSSTX; power_in. */
  "VSSTX_19": "19",
  /** Physical pin 20: TPOUT+; output. */
  "TPOUT+": "20",
  /** Physical pin 21: TPOUT-; output. */
  "TPOUT-": "21",
  /** Physical pin 22: VSSTX; passive. */
  "VSSTX_22": "22",
  /** Physical pin 23: CLKOUT; output. */
  "CLKOUT": "23",
  /** Physical pin 24: ~{INT}/SPISEL; bidirectional. */
  "~{INT}/SPISEL": "24",
  /** Physical pin 25: AD8; bidirectional. */
  "AD8": "25",
  /** Physical pin 26: AD9; bidirectional. */
  "AD9": "26",
  /** Physical pin 27: AD10; bidirectional. */
  "AD10": "27",
  /** Physical pin 28: AD11; bidirectional. */
  "AD11": "28",
  /** Physical pin 29: AD12; bidirectional. */
  "AD12": "29",
  /** Physical pin 30: AD13; bidirectional. */
  "AD13": "30",
  /** Physical pin 31: AD14; bidirectional. */
  "AD14": "31",
  /** Physical pin 32: PSPCFG0; input. */
  "PSPCFG0": "32",
  /** Physical pin 33: VSS; power_in. */
  "VSS_33": "33",
  /** Physical pin 34: ~{CS}/CS; input. */
  "~{CS}/CS": "34",
  /** Physical pin 35: SO/WR/EN; bidirectional. */
  "SO/WR/EN": "35",
  /** Physical pin 36: SI/RD/R~{W}; input. */
  "SI/RD/R~{W}": "36",
  /** Physical pin 37: SCK/AL; input. */
  "SCK/AL": "37",
  /** Physical pin 38: AD0; bidirectional. */
  "AD0": "38",
  /** Physical pin 39: AD1; input. */
  "AD1": "39",
  /** Physical pin 40: AD2; bidirectional. */
  "AD2": "40",
  /** Physical pin 41: AD3; bidirectional. */
  "AD3": "41",
  /** Physical pin 42: VSS; passive. */
  "VSS_42": "42",
  /** Physical pin 43: VCAP; input. */
  "VCAP": "43",
  /** Physical pin 44: VDD; power_in. */
  "VDD": "44",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSZ8081MLX extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: VDD_1.2; power_out. */
  "VDD_1.2_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VDDA_3.3; power_in. */
  "VDDA_3.3": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: RXM; passive. */
  "RXM": "9",
  /** Physical pin 10: RXP; passive. */
  "RXP": "10",
  /** Physical pin 11: TXM; passive. */
  "TXM": "11",
  /** Physical pin 12: TXP; passive. */
  "TXP": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: XO; output. */
  "XO": "14",
  /** Physical pin 15: XI; input. */
  "XI": "15",
  /** Physical pin 16: REXT; passive. */
  "REXT": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: MDIO; bidirectional. */
  "MDIO": "18",
  /** Physical pin 19: MDC; input. */
  "MDC": "19",
  /** Physical pin 20: RXD3/PHYAD0; output. */
  "RXD3/PHYAD0": "20",
  /** Physical pin 21: RXD2/PHYAD1; output. */
  "RXD2/PHYAD1": "21",
  /** Physical pin 22: RXD1/PHYAD2; output. */
  "RXD1/PHYAD2": "22",
  /** Physical pin 23: RXD0/DUPLEX; output. */
  "RXD0/DUPLEX": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: VDDIO; power_in. */
  "VDDIO": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RXDV/CONFIG2; bidirectional. */
  "RXDV/CONFIG2": "27",
  /** Physical pin 28: RXC/B-CAST_OFF; bidirectional. */
  "RXC/B-CAST_OFF": "28",
  /** Physical pin 29: RXER/ISO; output. */
  "RXER/ISO": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: VDD_1.2; power_in. */
  "VDD_1.2_31": "31",
  /** Physical pin 32: INTRP/NAND_Tree#; bidirectional. */
  "INTRP/NAND_Tree#": "32",
  /** Physical pin 33: TXC; bidirectional. */
  "TXC": "33",
  /** Physical pin 34: TXEN; input. */
  "TXEN": "34",
  /** Physical pin 35: TXD0; input. */
  "TXD0": "35",
  /** Physical pin 36: TXD1; input. */
  "TXD1": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: TXD2; input. */
  "TXD2": "38",
  /** Physical pin 39: TXD3; input. */
  "TXD3": "39",
  /** Physical pin 40: COL/CONFIG0; bidirectional. */
  "COL/CONFIG0": "40",
  /** Physical pin 41: CRS/CONFIG1; bidirectional. */
  "CRS/CONFIG1": "41",
  /** Physical pin 42: LED0/NWAYEN; bidirectional. */
  "LED0/NWAYEN": "42",
  /** Physical pin 43: LED1/SPEED; output. */
  "LED1/SPEED": "43",
  /** Physical pin 44: TEST/NC; no_connect. */
  "TEST/NC": "44",
  /** Physical pin 45: NC; no_connect. */
  "NC_45": "45",
  /** Physical pin 46: NC; no_connect. */
  "NC_46": "46",
  /** Physical pin 47: ~{RST}; input. */
  "~{RST}": "47",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSZ8081RNA extends Component.withPins({
  /** Physical pin 1: VDD_1.2; power_out. */
  "VDD_1.2": "1",
  /** Physical pin 2: VDDA_3.3; power_in. */
  "VDDA_3.3": "2",
  /** Physical pin 3: RXM; bidirectional. */
  "RXM": "3",
  /** Physical pin 4: RXP; bidirectional. */
  "RXP": "4",
  /** Physical pin 5: TXM; bidirectional. */
  "TXM": "5",
  /** Physical pin 6: TXP; bidirectional. */
  "TXP": "6",
  /** Physical pin 7: XO; output. */
  "XO": "7",
  /** Physical pin 8: XI; input. */
  "XI": "8",
  /** Physical pin 9: REXT; passive. */
  "REXT": "9",
  /** Physical pin 10: MDIO; bidirectional. */
  "MDIO": "10",
  /** Physical pin 11: MDC; input. */
  "MDC": "11",
  /** Physical pin 12: RXD1; output. */
  "RXD1": "12",
  /** Physical pin 13: RXD0; output. */
  "RXD0": "13",
  /** Physical pin 14: VDDIO; power_in. */
  "VDDIO": "14",
  /** Physical pin 15: CRS_DV/PHYAD[1:0]; output. */
  "CRS_DV/PHYAD[1:0]": "15",
  /** Physical pin 16: REF_CLK; output. */
  "REF_CLK": "16",
  /** Physical pin 17: RXER; output. */
  "RXER": "17",
  /** Physical pin 18: INTRP; bidirectional. */
  "INTRP": "18",
  /** Physical pin 19: TXEN; input. */
  "TXEN": "19",
  /** Physical pin 20: TXD0; input. */
  "TXD0": "20",
  /** Physical pin 21: TXD1; bidirectional. */
  "TXD1": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: LED0/ANEN_SPEED; output. */
  "LED0/ANEN_SPEED": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSZ8081RND extends Component.withPins({
  /** Physical pin 1: VDD_1.2; power_out. */
  "VDD_1.2": "1",
  /** Physical pin 2: VDDA_3.3; power_in. */
  "VDDA_3.3": "2",
  /** Physical pin 3: RXM; bidirectional. */
  "RXM": "3",
  /** Physical pin 4: RXP; bidirectional. */
  "RXP": "4",
  /** Physical pin 5: TXM; bidirectional. */
  "TXM": "5",
  /** Physical pin 6: TXP; bidirectional. */
  "TXP": "6",
  /** Physical pin 7: XO; output. */
  "XO": "7",
  /** Physical pin 8: XI; input. */
  "XI": "8",
  /** Physical pin 9: REXT; passive. */
  "REXT": "9",
  /** Physical pin 10: MDIO; bidirectional. */
  "MDIO": "10",
  /** Physical pin 11: MDC; input. */
  "MDC": "11",
  /** Physical pin 12: RXD1; output. */
  "RXD1": "12",
  /** Physical pin 13: RXD0; output. */
  "RXD0": "13",
  /** Physical pin 14: VDDIO; power_in. */
  "VDDIO": "14",
  /** Physical pin 15: CRS_DV/PHYAD[1:0]; output. */
  "CRS_DV/PHYAD[1:0]": "15",
  /** Physical pin 16: REF_CLK; output. */
  "REF_CLK": "16",
  /** Physical pin 17: RXER; output. */
  "RXER": "17",
  /** Physical pin 18: INTRP; bidirectional. */
  "INTRP": "18",
  /** Physical pin 19: TXEN; input. */
  "TXEN": "19",
  /** Physical pin 20: TXD0; input. */
  "TXD0": "20",
  /** Physical pin 21: TXD1; bidirectional. */
  "TXD1": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: LED0/ANEN_SPEED; output. */
  "LED0/ANEN_SPEED": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSZ9031RNXCA extends Component.withPins({
  /** Physical pin 1: AVDDH; power_in. */
  "AVDDH_1": "1",
  /** Physical pin 2: TXRXP_A; input. */
  "TXRXP_A": "2",
  /** Physical pin 3: TXRXM_A; input. */
  "TXRXM_A": "3",
  /** Physical pin 4: AVDDL; power_in. */
  "AVDDL_4": "4",
  /** Physical pin 5: TXRXP_B; input. */
  "TXRXP_B": "5",
  /** Physical pin 6: TXRXM_B; input. */
  "TXRXM_B": "6",
  /** Physical pin 7: TXRXP_C; input. */
  "TXRXP_C": "7",
  /** Physical pin 8: TXRXM_C; input. */
  "TXRXM_C": "8",
  /** Physical pin 9: AVDDL; power_in. */
  "AVDDL_9": "9",
  /** Physical pin 10: TXRXP_D; input. */
  "TXRXP_D": "10",
  /** Physical pin 11: TXRXM_D; input. */
  "TXRXM_D": "11",
  /** Physical pin 12: AVDDH; power_in. */
  "AVDDH_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: DVDDL; power_in. */
  "DVDDL_14": "14",
  /** Physical pin 15: LED2/PHYAD1; bidirectional. */
  "LED2/PHYAD1": "15",
  /** Physical pin 16: DVDDH; power_in. */
  "DVDDH_16": "16",
  /** Physical pin 17: LED1/PHAD0/PME_N1; bidirectional. */
  "LED1/PHAD0/PME_N1": "17",
  /** Physical pin 18: DVDDL; power_in. */
  "DVDDL_18": "18",
  /** Physical pin 19: TXD0; input. */
  "TXD0": "19",
  /** Physical pin 20: TXD1; input. */
  "TXD1": "20",
  /** Physical pin 21: TXD2; input. */
  "TXD2": "21",
  /** Physical pin 22: TXD3; input. */
  "TXD3": "22",
  /** Physical pin 23: DVDDL; power_in. */
  "DVDDL_23": "23",
  /** Physical pin 24: GTX_CLK; input. */
  "GTX_CLK": "24",
  /** Physical pin 25: TX_EN; input. */
  "TX_EN": "25",
  /** Physical pin 26: DVDDL; power_in. */
  "DVDDL_26": "26",
  /** Physical pin 27: RXD3/MODE3; input. */
  "RXD3/MODE3": "27",
  /** Physical pin 28: RXD2/MODE2; input. */
  "RXD2/MODE2": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS": "29",
  /** Physical pin 30: DVDDL; power_in. */
  "DVDDL_30": "30",
  /** Physical pin 31: RXD1/MODE1; input. */
  "RXD1/MODE1": "31",
  /** Physical pin 32: RXD0/MODE0; input. */
  "RXD0/MODE0": "32",
  /** Physical pin 33: RX_DV/CLK125_EN; input. */
  "RX_DV/CLK125_EN": "33",
  /** Physical pin 34: DVDDH; power_in. */
  "DVDDH_34": "34",
  /** Physical pin 35: RX_CLK/PHYAD2; input. */
  "RX_CLK/PHYAD2": "35",
  /** Physical pin 36: MDC; input. */
  "MDC": "36",
  /** Physical pin 37: MDIO; input. */
  "MDIO": "37",
  /** Physical pin 38: INT_N/PME_N2; input. */
  "INT_N/PME_N2": "38",
  /** Physical pin 39: DVDDL; power_in. */
  "DVDDL_39": "39",
  /** Physical pin 40: DVDDH; power_in. */
  "DVDDH_40": "40",
  /** Physical pin 41: CLK125_NDO/LED_MODE; input. */
  "CLK125_NDO/LED_MODE": "41",
  /** Physical pin 42: RESET_N; input. */
  "RESET_N": "42",
  /** Physical pin 43: LDO_O; input. */
  "LDO_O": "43",
  /** Physical pin 44: AVDDL_PLL; power_in. */
  "AVDDL_PLL": "44",
  /** Physical pin 45: XO; input. */
  "XO": "45",
  /** Physical pin 46: XI; input. */
  "XI": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 48: ISET; output. */
  "ISET": "48",
  /** Physical pin 49: PAD_GND; power_in. */
  "PAD_GND": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSZ9563RNX extends Component.withPins({
  /** Physical pin 1: TXRX1P_B; passive. */
  "TXRX1P_B": "1",
  /** Physical pin 2: TXRX1M_B; passive. */
  "TXRX1M_B": "2",
  /** Physical pin 3: TXRX1P_C; passive. */
  "TXRX1P_C": "3",
  /** Physical pin 4: TXRX1M_C; passive. */
  "TXRX1M_C": "4",
  /** Physical pin 5: AVDDL; power_in. */
  "AVDDL_5": "5",
  /** Physical pin 6: TXRX1P_D; passive. */
  "TXRX1P_D": "6",
  /** Physical pin 7: TXRX1M_D; passive. */
  "TXRX1M_D": "7",
  /** Physical pin 8: AVDDH; power_in. */
  "AVDDH_8": "8",
  /** Physical pin 9: TXRX2P_A; passive. */
  "TXRX2P_A": "9",
  /** Physical pin 10: TXRX2M_A; passive. */
  "TXRX2M_A": "10",
  /** Physical pin 11: AVDDL; power_in. */
  "AVDDL_11": "11",
  /** Physical pin 12: TXRX2P_B; passive. */
  "TXRX2P_B": "12",
  /** Physical pin 13: TXRX2M_B; passive. */
  "TXRX2M_B": "13",
  /** Physical pin 14: TXRX2P_C; passive. */
  "TXRX2P_C": "14",
  /** Physical pin 15: TXRX2M_C; passive. */
  "TXRX2M_C": "15",
  /** Physical pin 16: AVDDL; power_in. */
  "AVDDL_16": "16",
  /** Physical pin 17: TXRX2P_D; passive. */
  "TXRX2P_D": "17",
  /** Physical pin 18: TXRX2M_D; passive. */
  "TXRX2M_D": "18",
  /** Physical pin 19: AVDDH; power_in. */
  "AVDDH_19": "19",
  /** Physical pin 20: DVDDL; power_in. */
  "DVDDL_20": "20",
  /** Physical pin 21: RXD3; output. */
  "RXD3": "21",
  /** Physical pin 22: RXD2; output. */
  "RXD2": "22",
  /** Physical pin 23: RXD1; output. */
  "RXD1": "23",
  /** Physical pin 24: RXD0; output. */
  "RXD0": "24",
  /** Physical pin 25: RX_CLK/REFCLKO; bidirectional. */
  "RX_CLK/REFCLKO": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO_26": "26",
  /** Physical pin 27: RX_DV/CRS_DV/RX_CTL; output. */
  "RX_DV/CRS_DV/RX_CTL": "27",
  /** Physical pin 28: RX_ER; output. */
  "RX_ER": "28",
  /** Physical pin 29: TXD3; input. */
  "TXD3": "29",
  /** Physical pin 30: TXD2; input. */
  "TXD2": "30",
  /** Physical pin 31: TXD1; input. */
  "TXD1": "31",
  /** Physical pin 32: TXD0; input. */
  "TXD0": "32",
  /** Physical pin 33: TX_CLK/REFCLKI; bidirectional. */
  "TX_CLK/REFCLKI": "33",
  /** Physical pin 34: DVDDL; power_in. */
  "DVDDL_34": "34",
  /** Physical pin 35: TX_EN/TX_CTL; input. */
  "TX_EN/TX_CTL": "35",
  /** Physical pin 36: TX_ER; input. */
  "TX_ER": "36",
  /** Physical pin 37: DVDDL; power_in. */
  "DVDDL_37": "37",
  /** Physical pin 38: VDDIO; power_in. */
  "VDDIO_38": "38",
  /** Physical pin 39: GPIO_1; bidirectional. */
  "GPIO_1": "39",
  /** Physical pin 40: GPIO_2; bidirectional. */
  "GPIO_2": "40",
  /** Physical pin 41: DVDDL; power_in. */
  "DVDDL_41": "41",
  /** Physical pin 42: LED2_0; output. */
  "LED2_0": "42",
  /** Physical pin 43: LED2_1; output. */
  "LED2_1": "43",
  /** Physical pin 44: ~{PME}; output. */
  "~{PME}": "44",
  /** Physical pin 45: ~{INTRP}; open_collector. */
  "~{INTRP}": "45",
  /** Physical pin 46: ~{RESET}; input. */
  "~{RESET}": "46",
  /** Physical pin 47: SDO; output. */
  "SDO": "47",
  /** Physical pin 48: SDI/SDA/MDIO; bidirectional. */
  "SDI/SDA/MDIO": "48",
  /** Physical pin 49: ~{SCS}; input. */
  "~{SCS}": "49",
  /** Physical pin 50: SCL/MDC; input. */
  "SCL/MDC": "50",
  /** Physical pin 51: DVDDL; power_in. */
  "DVDDL_51": "51",
  /** Physical pin 52: LED1_0; output. */
  "LED1_0": "52",
  /** Physical pin 53: LED1_1; output. */
  "LED1_1": "53",
  /** Physical pin 54: VDDIO; power_in. */
  "VDDIO_54": "54",
  /** Physical pin 55: DVDDL; power_in. */
  "DVDDL_55": "55",
  /** Physical pin 56: AVDDL; power_in. */
  "AVDDL_56": "56",
  /** Physical pin 57: XO; output. */
  "XO": "57",
  /** Physical pin 58: XI; input. */
  "XI": "58",
  /** Physical pin 59: GND; power_in. */
  "GND_59": "59",
  /** Physical pin 60: ISET; passive. */
  "ISET": "60",
  /** Physical pin 61: AVDDH; power_in. */
  "AVDDH_61": "61",
  /** Physical pin 62: TXRX1P_A; passive. */
  "TXRX1P_A": "62",
  /** Physical pin 63: TXRX1M_A; passive. */
  "TXRX1M_A": "63",
  /** Physical pin 64: AVDDL; power_in. */
  "AVDDL_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KSZ9893RNX extends Component.withPins({
  /** Physical pin 1: TXRX1P_B; passive. */
  "TXRX1P_B": "1",
  /** Physical pin 2: TXRX1M_B; passive. */
  "TXRX1M_B": "2",
  /** Physical pin 3: TXRX1P_C; passive. */
  "TXRX1P_C": "3",
  /** Physical pin 4: TXRX1M_C; passive. */
  "TXRX1M_C": "4",
  /** Physical pin 5: AVDDL; power_in. */
  "AVDDL_5": "5",
  /** Physical pin 6: TXRX1P_D; passive. */
  "TXRX1P_D": "6",
  /** Physical pin 7: TXRX1M_D; passive. */
  "TXRX1M_D": "7",
  /** Physical pin 8: AVDDH; power_in. */
  "AVDDH_8": "8",
  /** Physical pin 9: TXRX2P_A; passive. */
  "TXRX2P_A": "9",
  /** Physical pin 10: TXRX2M_A; passive. */
  "TXRX2M_A": "10",
  /** Physical pin 11: AVDDL; power_in. */
  "AVDDL_11": "11",
  /** Physical pin 12: TXRX2P_B; passive. */
  "TXRX2P_B": "12",
  /** Physical pin 13: TXRX2M_B; passive. */
  "TXRX2M_B": "13",
  /** Physical pin 14: TXRX2P_C; passive. */
  "TXRX2P_C": "14",
  /** Physical pin 15: TXRX2M_C; passive. */
  "TXRX2M_C": "15",
  /** Physical pin 16: AVDDL; power_in. */
  "AVDDL_16": "16",
  /** Physical pin 17: TXRX2P_D; passive. */
  "TXRX2P_D": "17",
  /** Physical pin 18: TXRX2M_D; passive. */
  "TXRX2M_D": "18",
  /** Physical pin 19: AVDDH; power_in. */
  "AVDDH_19": "19",
  /** Physical pin 20: DVDDL; power_in. */
  "DVDDL_20": "20",
  /** Physical pin 21: RXD3; output. */
  "RXD3": "21",
  /** Physical pin 22: RXD2; output. */
  "RXD2": "22",
  /** Physical pin 23: RXD1; output. */
  "RXD1": "23",
  /** Physical pin 24: RXD0; output. */
  "RXD0": "24",
  /** Physical pin 25: RX_CLK/REFCLKO; output. */
  "RX_CLK/REFCLKO": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO_26": "26",
  /** Physical pin 27: RX_DV/CRS_DV/RX_CTL; output. */
  "RX_DV/CRS_DV/RX_CTL": "27",
  /** Physical pin 28: RX_ER; output. */
  "RX_ER": "28",
  /** Physical pin 29: TXD3; input. */
  "TXD3": "29",
  /** Physical pin 30: TXD2; input. */
  "TXD2": "30",
  /** Physical pin 31: TXD1; input. */
  "TXD1": "31",
  /** Physical pin 32: TXD0; input. */
  "TXD0": "32",
  /** Physical pin 33: TX_CLK/REFCLKI; input. */
  "TX_CLK/REFCLKI": "33",
  /** Physical pin 34: DVDDL; power_in. */
  "DVDDL_34": "34",
  /** Physical pin 35: TX_EN/TX_CTL; input. */
  "TX_EN/TX_CTL": "35",
  /** Physical pin 36: TX_ER; input. */
  "TX_ER": "36",
  /** Physical pin 37: DVDDL; power_in. */
  "DVDDL_37": "37",
  /** Physical pin 38: VDDIO; power_in. */
  "VDDIO_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: DVDDL; power_in. */
  "DVDDL_41": "41",
  /** Physical pin 42: LED2_0; output. */
  "LED2_0": "42",
  /** Physical pin 43: LED2_1; output. */
  "LED2_1": "43",
  /** Physical pin 44: ~{PME}; output. */
  "~{PME}": "44",
  /** Physical pin 45: ~{INTRP}; output. */
  "~{INTRP}": "45",
  /** Physical pin 46: ~{RESET}; input. */
  "~{RESET}": "46",
  /** Physical pin 47: SDO; output. */
  "SDO": "47",
  /** Physical pin 48: SDI/SDA/MDIO; bidirectional. */
  "SDI/SDA/MDIO": "48",
  /** Physical pin 49: ~{SCS}; input. */
  "~{SCS}": "49",
  /** Physical pin 50: SCL/MDC; input. */
  "SCL/MDC": "50",
  /** Physical pin 51: DVDDL; power_in. */
  "DVDDL_51": "51",
  /** Physical pin 52: LED1_0; output. */
  "LED1_0": "52",
  /** Physical pin 53: LED1_1; output. */
  "LED1_1": "53",
  /** Physical pin 54: VDDIO; power_in. */
  "VDDIO_54": "54",
  /** Physical pin 55: DVDDL; power_in. */
  "DVDDL_55": "55",
  /** Physical pin 56: AVDDL; power_in. */
  "AVDDL_56": "56",
  /** Physical pin 57: XO; output. */
  "XO": "57",
  /** Physical pin 58: XI; input. */
  "XI": "58",
  /** Physical pin 59: GND; power_in. */
  "GND_59": "59",
  /** Physical pin 60: ISET; passive. */
  "ISET": "60",
  /** Physical pin 61: AVDDH; power_in. */
  "AVDDH_61": "61",
  /** Physical pin 62: TXRX1P_A; passive. */
  "TXRX1P_A": "62",
  /** Physical pin 63: TXRX1M_A; passive. */
  "TXRX1M_A": "63",
  /** Physical pin 64: AVDDL; power_in. */
  "AVDDL_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN7500_ABJZ extends Component.withPins({
  /** Physical pin 1: TDI; input. */
  "TDI": "1",
  /** Physical pin 2: TCK; input. */
  "TCK": "2",
  /** Physical pin 3: TMS; input. */
  "TMS": "3",
  /** Physical pin 4: TDO; output. */
  "TDO": "4",
  /** Physical pin 5: XI; input. */
  "XI": "5",
  /** Physical pin 6: XO; output. */
  "XO": "6",
  /** Physical pin 7: VDDVARIO; power_in. */
  "VDDVARIO_7": "7",
  /** Physical pin 8: VDD12CORE; power_in. */
  "VDD12CORE_8": "8",
  /** Physical pin 9: SW_MODE; output. */
  "SW_MODE": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: VDD12CORE; passive. */
  "VDD12CORE_11": "11",
  /** Physical pin 15: VDD33A; power_in. */
  "VDD33A": "15",
  /** Physical pin 17: VDD12USBPLL; power_in. */
  "VDD12USBPLL": "17",
  /** Physical pin 18: GPIO8; bidirectional. */
  "GPIO8": "18",
  /** Physical pin 19: VDDVARIO; passive. */
  "VDDVARIO_19": "19",
  /** Physical pin 20: VDD12CORE; passive. */
  "VDD12CORE_20": "20",
  /** Physical pin 21: GPIO9; bidirectional. */
  "GPIO9": "21",
  /** Physical pin 22: GPIO10; bidirectional. */
  "GPIO10": "22",
  /** Physical pin 23: VDD12CORE; passive. */
  "VDD12CORE_23": "23",
  /** Physical pin 24: VDDVARIO; passive. */
  "VDDVARIO_24": "24",
  /** Physical pin 25: GPIO11; bidirectional. */
  "GPIO11": "25",
  /** Physical pin 26: EECLK; output. */
  "EECLK": "26",
  /** Physical pin 27: EEDI; input. */
  "EEDI": "27",
  /** Physical pin 28: EEDO; output. */
  "EEDO": "28",
  /** Physical pin 29: EECS; output. */
  "EECS": "29",
  /** Physical pin 30: VDD12CORE; passive. */
  "VDD12CORE_30": "30",
  /** Physical pin 31: GPIO0; bidirectional. */
  "GPIO0": "31",
  /** Physical pin 32: GPIO1; bidirectional. */
  "GPIO1": "32",
  /** Physical pin 33: GPIO2; bidirectional. */
  "GPIO2": "33",
  /** Physical pin 34: GPIO3; bidirectional. */
  "GPIO3": "34",
  /** Physical pin 35: GPIO4; bidirectional. */
  "GPIO4": "35",
  /** Physical pin 36: VDD12CORE; passive. */
  "VDD12CORE_36": "36",
  /** Physical pin 37: VDDVARIO; passive. */
  "VDDVARIO_37": "37",
  /** Physical pin 38: GPIO5; bidirectional. */
  "GPIO5": "38",
  /** Physical pin 39: TEST; input. */
  "TEST": "39",
  /** Physical pin 40: GPIO6; bidirectional. */
  "GPIO6": "40",
  /** Physical pin 42: ~{RESET}; input. */
  "~{RESET}": "42",
  /** Physical pin 45: VDD12A; power_in. */
  "VDD12A_45": "45",
  /** Physical pin 48: VDD12A; passive. */
  "VDD12A_48": "48",
  /** Physical pin 49: VDD12BIAS; power_in. */
  "VDD12BIAS": "49",
  /** Physical pin 50: VDD12PLL; power_in. */
  "VDD12PLL": "50",
  /** Physical pin 53: VDD12A; passive. */
  "VDD12A_53": "53",
  /** Physical pin 56: VDD12A; passive. */
  "VDD12A_56": "56",
  /** Physical pin 57: GND; power_in. */
  "GND": "57",
  /** Physical pin 12: USBDM; bidirectional. */
  "USBDM": "12",
  /** Physical pin 13: USBDP; bidirectional. */
  "USBDP": "13",
  /** Physical pin 14: VBUS_DET; input. */
  "VBUS_DET": "14",
  /** Physical pin 16: USBRBIAS; passive. */
  "USBRBIAS": "16",
  /** Physical pin 41: ETHRBIAS; passive. */
  "ETHRBIAS": "41",
  /** Physical pin 43: TR0N; bidirectional. */
  "TR0N": "43",
  /** Physical pin 44: TR0P; bidirectional. */
  "TR0P": "44",
  /** Physical pin 46: TR1N; bidirectional. */
  "TR1N": "46",
  /** Physical pin 47: TR1P; bidirectional. */
  "TR1P": "47",
  /** Physical pin 51: TR2N; bidirectional. */
  "TR2N": "51",
  /** Physical pin 52: TR2P; bidirectional. */
  "TR2P": "52",
  /** Physical pin 54: TR3N; bidirectional. */
  "TR3N": "54",
  /** Physical pin 55: TR3P; bidirectional. */
  "TR3P": "55",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN8710A extends Component.withPins({
  /** Physical pin 1: VDD2A; power_in. */
  "VDD2A": "1",
  /** Physical pin 2: LED2/~{INTSEL}; bidirectional. */
  "LED2/~{INTSEL}": "2",
  /** Physical pin 3: LED1/~{REGOFF}; bidirectional. */
  "LED1/~{REGOFF}": "3",
  /** Physical pin 4: XTAL2; output. */
  "XTAL2": "4",
  /** Physical pin 5: XTAL1/CLKIN; input. */
  "XTAL1/CLKIN": "5",
  /** Physical pin 6: VDDCR; power_in. */
  "VDDCR": "6",
  /** Physical pin 7: RXCLK/~{PHYAD1}; bidirectional. */
  "RXCLK/~{PHYAD1}": "7",
  /** Physical pin 8: RXD3/~{PHYAD2}; bidirectional. */
  "RXD3/~{PHYAD2}": "8",
  /** Physical pin 9: RXD2/~{RMIISEL}; bidirectional. */
  "RXD2/~{RMIISEL}": "9",
  /** Physical pin 10: RXD1/~{MODE1}; bidirectional. */
  "RXD1/~{MODE1}": "10",
  /** Physical pin 11: RXD0/~{MODE0}; bidirectional. */
  "RXD0/~{MODE0}": "11",
  /** Physical pin 12: VDDIO; power_in. */
  "VDDIO": "12",
  /** Physical pin 13: RXER/RXD4/~{PHYAD0}; bidirectional. */
  "RXER/RXD4/~{PHYAD0}": "13",
  /** Physical pin 14: CRS; output. */
  "CRS": "14",
  /** Physical pin 15: COL/CRS_DV/~{MODE2}; bidirectional. */
  "COL/CRS_DV/~{MODE2}": "15",
  /** Physical pin 16: MDIO; bidirectional. */
  "MDIO": "16",
  /** Physical pin 17: MDC; input. */
  "MDC": "17",
  /** Physical pin 18: ~{INT}/TXER/TXD4; bidirectional. */
  "~{INT}/TXER/TXD4": "18",
  /** Physical pin 19: ~{RST}; input. */
  "~{RST}": "19",
  /** Physical pin 20: TXCLK; output. */
  "TXCLK": "20",
  /** Physical pin 21: TXEN; input. */
  "TXEN": "21",
  /** Physical pin 22: TXD0; input. */
  "TXD0": "22",
  /** Physical pin 23: TXD1; input. */
  "TXD1": "23",
  /** Physical pin 24: TXD2; input. */
  "TXD2": "24",
  /** Physical pin 25: TXD3; input. */
  "TXD3": "25",
  /** Physical pin 26: RXDV; output. */
  "RXDV": "26",
  /** Physical pin 27: VDD1A; power_in. */
  "VDD1A": "27",
  /** Physical pin 28: TXN; bidirectional. */
  "TXN": "28",
  /** Physical pin 29: TXP; bidirectional. */
  "TXP": "29",
  /** Physical pin 30: RXN; bidirectional. */
  "RXN": "30",
  /** Physical pin 31: RXP; bidirectional. */
  "RXP": "31",
  /** Physical pin 32: RBIAS; passive. */
  "RBIAS": "32",
  /** Physical pin 33: VSS; power_in. */
  "VSS": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN8720A extends Component.withPins({
  /** Physical pin 1: VDD2A; power_in. */
  "VDD2A": "1",
  /** Physical pin 2: LED2/~{INTSEL}; bidirectional. */
  "LED2/~{INTSEL}": "2",
  /** Physical pin 3: LED1/REGOFF; bidirectional. */
  "LED1/REGOFF": "3",
  /** Physical pin 4: XTAL2; output. */
  "XTAL2": "4",
  /** Physical pin 5: XTAL1/CLKIN; input. */
  "XTAL1/CLKIN": "5",
  /** Physical pin 6: VDDCR; power_in. */
  "VDDCR": "6",
  /** Physical pin 7: RXD1/MODE1; bidirectional. */
  "RXD1/MODE1": "7",
  /** Physical pin 8: RXD0/MODE0; bidirectional. */
  "RXD0/MODE0": "8",
  /** Physical pin 9: VDDIO; power_in. */
  "VDDIO": "9",
  /** Physical pin 10: RXER/PHYAD0; output. */
  "RXER/PHYAD0": "10",
  /** Physical pin 11: CRS_DV/MODE2; bidirectional. */
  "CRS_DV/MODE2": "11",
  /** Physical pin 12: MDIO; bidirectional. */
  "MDIO": "12",
  /** Physical pin 13: MDC; input. */
  "MDC": "13",
  /** Physical pin 14: ~{INT}/REFCLKO; output. */
  "~{INT}/REFCLKO": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: TXEN; input. */
  "TXEN": "16",
  /** Physical pin 17: TXD0; input. */
  "TXD0": "17",
  /** Physical pin 18: TXD1; input. */
  "TXD1": "18",
  /** Physical pin 19: VDD1A; power_in. */
  "VDD1A": "19",
  /** Physical pin 20: TXN; bidirectional. */
  "TXN": "20",
  /** Physical pin 21: TXP; bidirectional. */
  "TXP": "21",
  /** Physical pin 22: RXN; bidirectional. */
  "RXN": "22",
  /** Physical pin 23: RXP; bidirectional. */
  "RXP": "23",
  /** Physical pin 24: RBIAS; passive. */
  "RBIAS": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN8742A extends Component.withPins({
  /** Physical pin 1: VDD2A; power_in. */
  "VDD2A": "1",
  /** Physical pin 2: LED2/~{INTSEL}; bidirectional. */
  "LED2/~{INTSEL}": "2",
  /** Physical pin 3: LED1/REGOFF; bidirectional. */
  "LED1/REGOFF": "3",
  /** Physical pin 4: XTAL2; output. */
  "XTAL2": "4",
  /** Physical pin 5: XTAL1/CLKIN; input. */
  "XTAL1/CLKIN": "5",
  /** Physical pin 6: VDDCR; power_in. */
  "VDDCR": "6",
  /** Physical pin 7: RXD1/MODE1; bidirectional. */
  "RXD1/MODE1": "7",
  /** Physical pin 8: RXD0/MODE0; bidirectional. */
  "RXD0/MODE0": "8",
  /** Physical pin 9: VDDIO; power_in. */
  "VDDIO": "9",
  /** Physical pin 10: RXER/PHYAD0; output. */
  "RXER/PHYAD0": "10",
  /** Physical pin 11: CRS_DV/MODE2; bidirectional. */
  "CRS_DV/MODE2": "11",
  /** Physical pin 12: MDIO; bidirectional. */
  "MDIO": "12",
  /** Physical pin 13: MDC; input. */
  "MDC": "13",
  /** Physical pin 14: ~{INT}/REFCLKO; output. */
  "~{INT}/REFCLKO": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: TXEN; input. */
  "TXEN": "16",
  /** Physical pin 17: TXD0; input. */
  "TXD0": "17",
  /** Physical pin 18: TXD1; input. */
  "TXD1": "18",
  /** Physical pin 19: VDD1A; power_in. */
  "VDD1A": "19",
  /** Physical pin 20: TXN; passive. */
  "TXN": "20",
  /** Physical pin 21: TXP; passive. */
  "TXP": "21",
  /** Physical pin 22: RXN; passive. */
  "RXN": "22",
  /** Physical pin 23: RXP; passive. */
  "RXP": "23",
  /** Physical pin 24: RBIAS; passive. */
  "RBIAS": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN9303 extends Component.withPins({
  /** Physical pin 1: TXN2; bidirectional. */
  "TXN2": "1",
  /** Physical pin 2: P0_IND3; passive. */
  "P0_IND3": "2",
  /** Physical pin 3: P0_IND2; passive. */
  "P0_IND2": "3",
  /** Physical pin 4: P0_IND1; input. */
  "P0_IND1": "4",
  /** Physical pin 5: P0_IND0; input. */
  "P0_IND0": "5",
  /** Physical pin 6: P0_INDV; input. */
  "P0_INDV": "6",
  /** Physical pin 7: P0_INER; passive. */
  "P0_INER": "7",
  /** Physical pin 8: P0_INCLK; passive. */
  "P0_INCLK": "8",
  /** Physical pin 9: VDD33IO; power_in. */
  "VDD33IO_9": "9",
  /** Physical pin 10: VDD18CORE; output. */
  "VDD18CORE_10": "10",
  /** Physical pin 11: P0_OUTD3/~{DUPLEX_POL_0}; passive. */
  "P0_OUTD3/~{DUPLEX_POL_0}": "11",
  /** Physical pin 12: P0_OUTD2/~{P0_MODE2}; passive. */
  "P0_OUTD2/~{P0_MODE2}": "12",
  /** Physical pin 13: P0_OUTD1/~{P0_MODE1}; bidirectional. */
  "P0_OUTD1/~{P0_MODE1}": "13",
  /** Physical pin 14: P0_OUTD0/~{P0_MODE0}; bidirectional. */
  "P0_OUTD0/~{P0_MODE0}": "14",
  /** Physical pin 15: VDD33IO; passive. */
  "VDD33IO_15": "15",
  /** Physical pin 16: P0_OUTDV; output. */
  "P0_OUTDV": "16",
  /** Physical pin 17: P0_OUTCLK; bidirectional. */
  "P0_OUTCLK": "17",
  /** Physical pin 18: P0_COL; passive. */
  "P0_COL": "18",
  /** Physical pin 19: P0_CRS; passive. */
  "P0_CRS": "19",
  /** Physical pin 20: P0_DUPLEX; input. */
  "P0_DUPLEX": "20",
  /** Physical pin 21: MDIO; bidirectional. */
  "MDIO": "21",
  /** Physical pin 22: MDC; bidirectional. */
  "MDC": "22",
  /** Physical pin 23: VDD33IO; passive. */
  "VDD33IO_23": "23",
  /** Physical pin 24: LED5/GPIO5/~{PHYADDR}; passive. */
  "LED5/GPIO5/~{PHYADDR}": "24",
  /** Physical pin 25: LED4/GPIO4/~{MNGT1}; passive. */
  "LED4/GPIO4/~{MNGT1}": "25",
  /** Physical pin 26: LED3/GPIO3/~{MNGT0}; passive. */
  "LED3/GPIO3/~{MNGT0}": "26",
  /** Physical pin 27: LED2/GPIO2/~{E2PSIZE}; passive. */
  "LED2/GPIO2/~{E2PSIZE}": "27",
  /** Physical pin 28: LED1/GPIO1/~{AMDIX2}; passive. */
  "LED1/GPIO1/~{AMDIX2}": "28",
  /** Physical pin 29: LED0/GPIO0/~{AMDIX1}; passive. */
  "LED0/GPIO0/~{AMDIX1}": "29",
  /** Physical pin 30: VDD33IO; passive. */
  "VDD33IO_30": "30",
  /** Physical pin 31: VDD18CORE; passive. */
  "VDD18CORE_31": "31",
  /** Physical pin 32: VDD33IO; passive. */
  "VDD33IO_32": "32",
  /** Physical pin 33: VDD33IO; passive. */
  "VDD33IO_33": "33",
  /** Physical pin 34: VSS; power_in. */
  "VSS_34": "34",
  /** Physical pin 35: EE_SDA/SDA; bidirectional. */
  "EE_SDA/SDA": "35",
  /** Physical pin 36: EE_SCL/SCL; bidirectional. */
  "EE_SCL/SCL": "36",
  /** Physical pin 37: ~{RST}; passive. */
  "~{RST}": "37",
  /** Physical pin 38: IRQ; passive. */
  "IRQ": "38",
  /** Physical pin 39: XI; input. */
  "XI": "39",
  /** Physical pin 40: XO; passive. */
  "XO": "40",
  /** Physical pin 41: VDD18PLL; output. */
  "VDD18PLL": "41",
  /** Physical pin 42: TXN1; bidirectional. */
  "TXN1": "42",
  /** Physical pin 43: TXP1; bidirectional. */
  "TXP1": "43",
  /** Physical pin 44: VDD33A1; power_in. */
  "VDD33A1_44": "44",
  /** Physical pin 45: RXN1; bidirectional. */
  "RXN1": "45",
  /** Physical pin 46: RXP1; bidirectional. */
  "RXP1": "46",
  /** Physical pin 47: VDD33A1; passive. */
  "VDD33A1_47": "47",
  /** Physical pin 48: VDD18TX1; input. */
  "VDD18TX1": "48",
  /** Physical pin 49: EXRES; passive. */
  "EXRES": "49",
  /** Physical pin 50: VDD33BIAS; power_in. */
  "VDD33BIAS": "50",
  /** Physical pin 51: VDD18TX2; output. */
  "VDD18TX2": "51",
  /** Physical pin 52: VDD33A2; power_in. */
  "VDD33A2_52": "52",
  /** Physical pin 53: RXP2; bidirectional. */
  "RXP2": "53",
  /** Physical pin 54: RXN2; bidirectional. */
  "RXN2": "54",
  /** Physical pin 55: VDD33A2; passive. */
  "VDD33A2_55": "55",
  /** Physical pin 56: TXP2; bidirectional. */
  "TXP2": "56",
  /** Physical pin 57: VSS; passive. */
  "VSS_57": "57",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN9303i extends Component.withPins({
  /** Physical pin 1: TXN2; bidirectional. */
  "TXN2": "1",
  /** Physical pin 2: P0_IND3; passive. */
  "P0_IND3": "2",
  /** Physical pin 3: P0_IND2; passive. */
  "P0_IND2": "3",
  /** Physical pin 4: P0_IND1; input. */
  "P0_IND1": "4",
  /** Physical pin 5: P0_IND0; input. */
  "P0_IND0": "5",
  /** Physical pin 6: P0_INDV; input. */
  "P0_INDV": "6",
  /** Physical pin 7: P0_INER; passive. */
  "P0_INER": "7",
  /** Physical pin 8: P0_INCLK; passive. */
  "P0_INCLK": "8",
  /** Physical pin 9: VDD33IO; power_in. */
  "VDD33IO_9": "9",
  /** Physical pin 10: VDD18CORE; output. */
  "VDD18CORE_10": "10",
  /** Physical pin 11: P0_OUTD3/~{DUPLEX_POL_0}; passive. */
  "P0_OUTD3/~{DUPLEX_POL_0}": "11",
  /** Physical pin 12: P0_OUTD2/~{P0_MODE2}; passive. */
  "P0_OUTD2/~{P0_MODE2}": "12",
  /** Physical pin 13: P0_OUTD1/~{P0_MODE1}; bidirectional. */
  "P0_OUTD1/~{P0_MODE1}": "13",
  /** Physical pin 14: P0_OUTD0/~{P0_MODE0}; bidirectional. */
  "P0_OUTD0/~{P0_MODE0}": "14",
  /** Physical pin 15: VDD33IO; passive. */
  "VDD33IO_15": "15",
  /** Physical pin 16: P0_OUTDV; output. */
  "P0_OUTDV": "16",
  /** Physical pin 17: P0_OUTCLK; bidirectional. */
  "P0_OUTCLK": "17",
  /** Physical pin 18: P0_COL; passive. */
  "P0_COL": "18",
  /** Physical pin 19: P0_CRS; passive. */
  "P0_CRS": "19",
  /** Physical pin 20: P0_DUPLEX; input. */
  "P0_DUPLEX": "20",
  /** Physical pin 21: MDIO; bidirectional. */
  "MDIO": "21",
  /** Physical pin 22: MDC; bidirectional. */
  "MDC": "22",
  /** Physical pin 23: VDD33IO; passive. */
  "VDD33IO_23": "23",
  /** Physical pin 24: LED5/GPIO5/~{PHYADDR}; passive. */
  "LED5/GPIO5/~{PHYADDR}": "24",
  /** Physical pin 25: LED4/GPIO4/~{MNGT1}; passive. */
  "LED4/GPIO4/~{MNGT1}": "25",
  /** Physical pin 26: LED3/GPIO3/~{MNGT0}; passive. */
  "LED3/GPIO3/~{MNGT0}": "26",
  /** Physical pin 27: LED2/GPIO2/~{E2PSIZE}; passive. */
  "LED2/GPIO2/~{E2PSIZE}": "27",
  /** Physical pin 28: LED1/GPIO1/~{AMDIX2}; passive. */
  "LED1/GPIO1/~{AMDIX2}": "28",
  /** Physical pin 29: LED0/GPIO0/~{AMDIX1}; passive. */
  "LED0/GPIO0/~{AMDIX1}": "29",
  /** Physical pin 30: VDD33IO; passive. */
  "VDD33IO_30": "30",
  /** Physical pin 31: VDD18CORE; passive. */
  "VDD18CORE_31": "31",
  /** Physical pin 32: VDD33IO; passive. */
  "VDD33IO_32": "32",
  /** Physical pin 33: VDD33IO; passive. */
  "VDD33IO_33": "33",
  /** Physical pin 34: VSS; power_in. */
  "VSS_34": "34",
  /** Physical pin 35: EE_SDA/SDA; bidirectional. */
  "EE_SDA/SDA": "35",
  /** Physical pin 36: EE_SCL/SCL; bidirectional. */
  "EE_SCL/SCL": "36",
  /** Physical pin 37: ~{RST}; passive. */
  "~{RST}": "37",
  /** Physical pin 38: IRQ; passive. */
  "IRQ": "38",
  /** Physical pin 39: XI; input. */
  "XI": "39",
  /** Physical pin 40: XO; passive. */
  "XO": "40",
  /** Physical pin 41: VDD18PLL; output. */
  "VDD18PLL": "41",
  /** Physical pin 42: TXN1; bidirectional. */
  "TXN1": "42",
  /** Physical pin 43: TXP1; bidirectional. */
  "TXP1": "43",
  /** Physical pin 44: VDD33A1; power_in. */
  "VDD33A1_44": "44",
  /** Physical pin 45: RXN1; bidirectional. */
  "RXN1": "45",
  /** Physical pin 46: RXP1; bidirectional. */
  "RXP1": "46",
  /** Physical pin 47: VDD33A1; passive. */
  "VDD33A1_47": "47",
  /** Physical pin 48: VDD18TX1; input. */
  "VDD18TX1": "48",
  /** Physical pin 49: EXRES; passive. */
  "EXRES": "49",
  /** Physical pin 50: VDD33BIAS; power_in. */
  "VDD33BIAS": "50",
  /** Physical pin 51: VDD18TX2; output. */
  "VDD18TX2": "51",
  /** Physical pin 52: VDD33A2; power_in. */
  "VDD33A2_52": "52",
  /** Physical pin 53: RXP2; bidirectional. */
  "RXP2": "53",
  /** Physical pin 54: RXN2; bidirectional. */
  "RXN2": "54",
  /** Physical pin 55: VDD33A2; passive. */
  "VDD33A2_55": "55",
  /** Physical pin 56: TXP2; bidirectional. */
  "TXP2": "56",
  /** Physical pin 57: VSS; passive. */
  "VSS_57": "57",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN9512 extends Component.withPins({
  /** Physical pin 5: VDD33A; power_in. */
  "VDD33A_5": "5",
  /** Physical pin 10: VDD33A; passive. */
  "VDD33A_10": "10",
  /** Physical pin 12: ~{RESET}; input. */
  "~{RESET}": "12",
  /** Physical pin 13: TEST1; input. */
  "TEST1": "13",
  /** Physical pin 15: VDD18CORE; power_in. */
  "VDD18CORE_15": "15",
  /** Physical pin 19: VDD33IO; power_in. */
  "VDD33IO_19": "19",
  /** Physical pin 20: ~{FDX_LED}/GPIO0; bidirectional. */
  "~{FDX_LED}/GPIO0": "20",
  /** Physical pin 21: ~{LNKA_LED}/GPIO1; bidirectional. */
  "~{LNKA_LED}/GPIO1": "21",
  /** Physical pin 22: ~{SPD_LED}/GPIO2; bidirectional. */
  "~{SPD_LED}/GPIO2": "22",
  /** Physical pin 23: EECLK; output. */
  "EECLK": "23",
  /** Physical pin 24: EECS; output. */
  "EECS": "24",
  /** Physical pin 25: EEDO; output. */
  "EEDO": "25",
  /** Physical pin 26: EEDI; input. */
  "EEDI": "26",
  /** Physical pin 27: VDD33IO; passive. */
  "VDD33IO_27": "27",
  /** Physical pin 28: ~{TRST}; input. */
  "~{TRST}": "28",
  /** Physical pin 29: TMS; input. */
  "TMS": "29",
  /** Physical pin 30: TDI; input. */
  "TDI": "30",
  /** Physical pin 31: TDO; output. */
  "TDO": "31",
  /** Physical pin 32: TCK; input. */
  "TCK": "32",
  /** Physical pin 33: VDD33IO; passive. */
  "VDD33IO_33": "33",
  /** Physical pin 34: TEST2; input. */
  "TEST2": "34",
  /** Physical pin 35: GPIO3; bidirectional. */
  "GPIO3": "35",
  /** Physical pin 36: GPIO4; bidirectional. */
  "GPIO4": "36",
  /** Physical pin 37: GPIO5; bidirectional. */
  "GPIO5": "37",
  /** Physical pin 38: VDD18CORE; passive. */
  "VDD18CORE_38": "38",
  /** Physical pin 39: VDD33IO; passive. */
  "VDD33IO_39": "39",
  /** Physical pin 40: TEST3; input. */
  "TEST3": "40",
  /** Physical pin 42: GPIO6; bidirectional. */
  "GPIO6": "42",
  /** Physical pin 43: GPIO7; bidirectional. */
  "GPIO7": "43",
  /** Physical pin 44: CLK24_EN; input. */
  "CLK24_EN": "44",
  /** Physical pin 45: CLK24_OUT; output. */
  "CLK24_OUT": "45",
  /** Physical pin 46: VDD33IO; passive. */
  "VDD33IO_46": "46",
  /** Physical pin 47: TEST4; input. */
  "TEST4": "47",
  /** Physical pin 48: VDD18ETHPLL; power_in. */
  "VDD18ETHPLL": "48",
  /** Physical pin 49: VDD33A; passive. */
  "VDD33A_49": "49",
  /** Physical pin 51: VDD33A; passive. */
  "VDD33A_51": "51",
  /** Physical pin 54: VDD33A; passive. */
  "VDD33A_54": "54",
  /** Physical pin 57: VDD33A; passive. */
  "VDD33A_57": "57",
  /** Physical pin 60: XO; input. */
  "XO": "60",
  /** Physical pin 61: XI; input. */
  "XI": "61",
  /** Physical pin 62: VDD18USBPLL; power_in. */
  "VDD18USBPLL": "62",
  /** Physical pin 64: VDD33A; passive. */
  "VDD33A_64": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
  /** Physical pin 1: USBDM2; bidirectional. */
  "USBDM2": "1",
  /** Physical pin 2: USBDP2; bidirectional. */
  "USBDP2": "2",
  /** Physical pin 3: USBDM3; bidirectional. */
  "USBDM3": "3",
  /** Physical pin 4: USBDP3; bidirectional. */
  "USBDP3": "4",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: VBUS_DET; input. */
  "VBUS_DET": "11",
  /** Physical pin 14: PRTCTL2; bidirectional. */
  "PRTCTL2": "14",
  /** Physical pin 16: PRTCTL3; bidirectional. */
  "PRTCTL3": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 41: AUTOMDIX_EN; input. */
  "AUTOMDIX_EN": "41",
  /** Physical pin 50: EXRES; input. */
  "EXRES": "50",
  /** Physical pin 52: RXP; input. */
  "RXP": "52",
  /** Physical pin 53: RXN; input. */
  "RXN": "53",
  /** Physical pin 55: TXP; output. */
  "TXP": "55",
  /** Physical pin 56: TXN; output. */
  "TXN": "56",
  /** Physical pin 58: USBDM0; bidirectional. */
  "USBDM0": "58",
  /** Physical pin 59: USBDP0; bidirectional. */
  "USBDP0": "59",
  /** Physical pin 63: USBRBIAS; input. */
  "USBRBIAS": "63",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN9512i extends Component.withPins({
  /** Physical pin 5: VDD33A; power_in. */
  "VDD33A_5": "5",
  /** Physical pin 10: VDD33A; passive. */
  "VDD33A_10": "10",
  /** Physical pin 12: ~{RESET}; input. */
  "~{RESET}": "12",
  /** Physical pin 13: TEST1; input. */
  "TEST1": "13",
  /** Physical pin 15: VDD18CORE; power_in. */
  "VDD18CORE_15": "15",
  /** Physical pin 19: VDD33IO; power_in. */
  "VDD33IO_19": "19",
  /** Physical pin 20: ~{FDX_LED}/GPIO0; bidirectional. */
  "~{FDX_LED}/GPIO0": "20",
  /** Physical pin 21: ~{LNKA_LED}/GPIO1; bidirectional. */
  "~{LNKA_LED}/GPIO1": "21",
  /** Physical pin 22: ~{SPD_LED}/GPIO2; bidirectional. */
  "~{SPD_LED}/GPIO2": "22",
  /** Physical pin 23: EECLK; output. */
  "EECLK": "23",
  /** Physical pin 24: EECS; output. */
  "EECS": "24",
  /** Physical pin 25: EEDO; output. */
  "EEDO": "25",
  /** Physical pin 26: EEDI; input. */
  "EEDI": "26",
  /** Physical pin 27: VDD33IO; passive. */
  "VDD33IO_27": "27",
  /** Physical pin 28: ~{TRST}; input. */
  "~{TRST}": "28",
  /** Physical pin 29: TMS; input. */
  "TMS": "29",
  /** Physical pin 30: TDI; input. */
  "TDI": "30",
  /** Physical pin 31: TDO; output. */
  "TDO": "31",
  /** Physical pin 32: TCK; input. */
  "TCK": "32",
  /** Physical pin 33: VDD33IO; passive. */
  "VDD33IO_33": "33",
  /** Physical pin 34: TEST2; input. */
  "TEST2": "34",
  /** Physical pin 35: GPIO3; bidirectional. */
  "GPIO3": "35",
  /** Physical pin 36: GPIO4; bidirectional. */
  "GPIO4": "36",
  /** Physical pin 37: GPIO5; bidirectional. */
  "GPIO5": "37",
  /** Physical pin 38: VDD18CORE; passive. */
  "VDD18CORE_38": "38",
  /** Physical pin 39: VDD33IO; passive. */
  "VDD33IO_39": "39",
  /** Physical pin 40: TEST3; input. */
  "TEST3": "40",
  /** Physical pin 42: GPIO6; bidirectional. */
  "GPIO6": "42",
  /** Physical pin 43: GPIO7; bidirectional. */
  "GPIO7": "43",
  /** Physical pin 44: CLK24_EN; input. */
  "CLK24_EN": "44",
  /** Physical pin 45: CLK24_OUT; output. */
  "CLK24_OUT": "45",
  /** Physical pin 46: VDD33IO; passive. */
  "VDD33IO_46": "46",
  /** Physical pin 47: TEST4; input. */
  "TEST4": "47",
  /** Physical pin 48: VDD18ETHPLL; power_in. */
  "VDD18ETHPLL": "48",
  /** Physical pin 49: VDD33A; passive. */
  "VDD33A_49": "49",
  /** Physical pin 51: VDD33A; passive. */
  "VDD33A_51": "51",
  /** Physical pin 54: VDD33A; passive. */
  "VDD33A_54": "54",
  /** Physical pin 57: VDD33A; passive. */
  "VDD33A_57": "57",
  /** Physical pin 60: XO; input. */
  "XO": "60",
  /** Physical pin 61: XI; input. */
  "XI": "61",
  /** Physical pin 62: VDD18USBPLL; power_in. */
  "VDD18USBPLL": "62",
  /** Physical pin 64: VDD33A; passive. */
  "VDD33A_64": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
  /** Physical pin 1: USBDM2; bidirectional. */
  "USBDM2": "1",
  /** Physical pin 2: USBDP2; bidirectional. */
  "USBDP2": "2",
  /** Physical pin 3: USBDM3; bidirectional. */
  "USBDM3": "3",
  /** Physical pin 4: USBDP3; bidirectional. */
  "USBDP3": "4",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: VBUS_DET; input. */
  "VBUS_DET": "11",
  /** Physical pin 14: PRTCTL2; bidirectional. */
  "PRTCTL2": "14",
  /** Physical pin 16: PRTCTL3; bidirectional. */
  "PRTCTL3": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 41: AUTOMDIX_EN; input. */
  "AUTOMDIX_EN": "41",
  /** Physical pin 50: EXRES; input. */
  "EXRES": "50",
  /** Physical pin 52: RXP; input. */
  "RXP": "52",
  /** Physical pin 53: RXN; input. */
  "RXN": "53",
  /** Physical pin 55: TXP; output. */
  "TXP": "55",
  /** Physical pin 56: TXN; output. */
  "TXN": "56",
  /** Physical pin 58: USBDM0; bidirectional. */
  "USBDM0": "58",
  /** Physical pin 59: USBDP0; bidirectional. */
  "USBDP0": "59",
  /** Physical pin 63: USBRBIAS; input. */
  "USBRBIAS": "63",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN9513 extends Component.withPins({
  /** Physical pin 5: VDD33A; power_in. */
  "VDD33A_5": "5",
  /** Physical pin 10: VDD33A; passive. */
  "VDD33A_10": "10",
  /** Physical pin 12: ~{RESET}; input. */
  "~{RESET}": "12",
  /** Physical pin 13: TEST1; input. */
  "TEST1": "13",
  /** Physical pin 15: VDD18CORE; power_in. */
  "VDD18CORE_15": "15",
  /** Physical pin 19: VDD33IO; power_in. */
  "VDD33IO_19": "19",
  /** Physical pin 20: ~{FDX_LED}/GPIO0; bidirectional. */
  "~{FDX_LED}/GPIO0": "20",
  /** Physical pin 21: ~{LNKA_LED}/GPIO1; bidirectional. */
  "~{LNKA_LED}/GPIO1": "21",
  /** Physical pin 22: ~{SPD_LED}/GPIO2; bidirectional. */
  "~{SPD_LED}/GPIO2": "22",
  /** Physical pin 23: EECLK; output. */
  "EECLK": "23",
  /** Physical pin 24: EECS; output. */
  "EECS": "24",
  /** Physical pin 25: EEDO; output. */
  "EEDO": "25",
  /** Physical pin 26: EEDI; input. */
  "EEDI": "26",
  /** Physical pin 27: VDD33IO; passive. */
  "VDD33IO_27": "27",
  /** Physical pin 28: ~{TRST}; input. */
  "~{TRST}": "28",
  /** Physical pin 29: TMS; input. */
  "TMS": "29",
  /** Physical pin 30: TDI; input. */
  "TDI": "30",
  /** Physical pin 31: TDO; output. */
  "TDO": "31",
  /** Physical pin 32: TCK; input. */
  "TCK": "32",
  /** Physical pin 33: VDD33IO; passive. */
  "VDD33IO_33": "33",
  /** Physical pin 34: TEST2; input. */
  "TEST2": "34",
  /** Physical pin 35: GPIO3; bidirectional. */
  "GPIO3": "35",
  /** Physical pin 36: GPIO4; bidirectional. */
  "GPIO4": "36",
  /** Physical pin 37: GPIO5; bidirectional. */
  "GPIO5": "37",
  /** Physical pin 38: VDD18CORE; passive. */
  "VDD18CORE_38": "38",
  /** Physical pin 39: VDD33IO; passive. */
  "VDD33IO_39": "39",
  /** Physical pin 40: TEST3; input. */
  "TEST3": "40",
  /** Physical pin 42: GPIO6; bidirectional. */
  "GPIO6": "42",
  /** Physical pin 43: GPIO7; bidirectional. */
  "GPIO7": "43",
  /** Physical pin 44: CLK24_EN; input. */
  "CLK24_EN": "44",
  /** Physical pin 45: CLK24_OUT; output. */
  "CLK24_OUT": "45",
  /** Physical pin 46: VDD33IO; passive. */
  "VDD33IO_46": "46",
  /** Physical pin 47: TEST4; input. */
  "TEST4": "47",
  /** Physical pin 48: VDD18ETHPLL; power_in. */
  "VDD18ETHPLL": "48",
  /** Physical pin 49: VDD33A; passive. */
  "VDD33A_49": "49",
  /** Physical pin 51: VDD33A; passive. */
  "VDD33A_51": "51",
  /** Physical pin 54: VDD33A; passive. */
  "VDD33A_54": "54",
  /** Physical pin 57: VDD33A; passive. */
  "VDD33A_57": "57",
  /** Physical pin 60: XO; input. */
  "XO": "60",
  /** Physical pin 61: XI; input. */
  "XI": "61",
  /** Physical pin 62: VDD18USBPLL; power_in. */
  "VDD18USBPLL": "62",
  /** Physical pin 64: VDD33A; passive. */
  "VDD33A_64": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
  /** Physical pin 1: USBDM2; bidirectional. */
  "USBDM2": "1",
  /** Physical pin 2: USBDP2; bidirectional. */
  "USBDP2": "2",
  /** Physical pin 3: USBDM3; bidirectional. */
  "USBDM3": "3",
  /** Physical pin 4: USBDP3; bidirectional. */
  "USBDP3": "4",
  /** Physical pin 6: USBDM4; bidirectional. */
  "USBDM4": "6",
  /** Physical pin 7: USBDP4; bidirectional. */
  "USBDP4": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: VBUS_DET; input. */
  "VBUS_DET": "11",
  /** Physical pin 14: PRTCTL2; bidirectional. */
  "PRTCTL2": "14",
  /** Physical pin 16: PRTCTL3; bidirectional. */
  "PRTCTL3": "16",
  /** Physical pin 17: PRTCTL4; bidirectional. */
  "PRTCTL4": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 41: AUTOMDIX_EN; input. */
  "AUTOMDIX_EN": "41",
  /** Physical pin 50: EXRES; input. */
  "EXRES": "50",
  /** Physical pin 52: RXP; input. */
  "RXP": "52",
  /** Physical pin 53: RXN; input. */
  "RXN": "53",
  /** Physical pin 55: TXP; output. */
  "TXP": "55",
  /** Physical pin 56: TXN; output. */
  "TXN": "56",
  /** Physical pin 58: USBDM0; bidirectional. */
  "USBDM0": "58",
  /** Physical pin 59: USBDP0; bidirectional. */
  "USBDP0": "59",
  /** Physical pin 63: USBRBIAS; input. */
  "USBRBIAS": "63",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN9513i extends Component.withPins({
  /** Physical pin 5: VDD33A; power_in. */
  "VDD33A_5": "5",
  /** Physical pin 10: VDD33A; passive. */
  "VDD33A_10": "10",
  /** Physical pin 12: ~{RESET}; input. */
  "~{RESET}": "12",
  /** Physical pin 13: TEST1; input. */
  "TEST1": "13",
  /** Physical pin 15: VDD18CORE; power_in. */
  "VDD18CORE_15": "15",
  /** Physical pin 19: VDD33IO; power_in. */
  "VDD33IO_19": "19",
  /** Physical pin 20: ~{FDX_LED}/GPIO0; bidirectional. */
  "~{FDX_LED}/GPIO0": "20",
  /** Physical pin 21: ~{LNKA_LED}/GPIO1; bidirectional. */
  "~{LNKA_LED}/GPIO1": "21",
  /** Physical pin 22: ~{SPD_LED}/GPIO2; bidirectional. */
  "~{SPD_LED}/GPIO2": "22",
  /** Physical pin 23: EECLK; output. */
  "EECLK": "23",
  /** Physical pin 24: EECS; output. */
  "EECS": "24",
  /** Physical pin 25: EEDO; output. */
  "EEDO": "25",
  /** Physical pin 26: EEDI; input. */
  "EEDI": "26",
  /** Physical pin 27: VDD33IO; passive. */
  "VDD33IO_27": "27",
  /** Physical pin 28: ~{TRST}; input. */
  "~{TRST}": "28",
  /** Physical pin 29: TMS; input. */
  "TMS": "29",
  /** Physical pin 30: TDI; input. */
  "TDI": "30",
  /** Physical pin 31: TDO; output. */
  "TDO": "31",
  /** Physical pin 32: TCK; input. */
  "TCK": "32",
  /** Physical pin 33: VDD33IO; passive. */
  "VDD33IO_33": "33",
  /** Physical pin 34: TEST2; input. */
  "TEST2": "34",
  /** Physical pin 35: GPIO3; bidirectional. */
  "GPIO3": "35",
  /** Physical pin 36: GPIO4; bidirectional. */
  "GPIO4": "36",
  /** Physical pin 37: GPIO5; bidirectional. */
  "GPIO5": "37",
  /** Physical pin 38: VDD18CORE; passive. */
  "VDD18CORE_38": "38",
  /** Physical pin 39: VDD33IO; passive. */
  "VDD33IO_39": "39",
  /** Physical pin 40: TEST3; input. */
  "TEST3": "40",
  /** Physical pin 42: GPIO6; bidirectional. */
  "GPIO6": "42",
  /** Physical pin 43: GPIO7; bidirectional. */
  "GPIO7": "43",
  /** Physical pin 44: CLK24_EN; input. */
  "CLK24_EN": "44",
  /** Physical pin 45: CLK24_OUT; output. */
  "CLK24_OUT": "45",
  /** Physical pin 46: VDD33IO; passive. */
  "VDD33IO_46": "46",
  /** Physical pin 47: TEST4; input. */
  "TEST4": "47",
  /** Physical pin 48: VDD18ETHPLL; power_in. */
  "VDD18ETHPLL": "48",
  /** Physical pin 49: VDD33A; passive. */
  "VDD33A_49": "49",
  /** Physical pin 51: VDD33A; passive. */
  "VDD33A_51": "51",
  /** Physical pin 54: VDD33A; passive. */
  "VDD33A_54": "54",
  /** Physical pin 57: VDD33A; passive. */
  "VDD33A_57": "57",
  /** Physical pin 60: XO; input. */
  "XO": "60",
  /** Physical pin 61: XI; input. */
  "XI": "61",
  /** Physical pin 62: VDD18USBPLL; power_in. */
  "VDD18USBPLL": "62",
  /** Physical pin 64: VDD33A; passive. */
  "VDD33A_64": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
  /** Physical pin 1: USBDM2; bidirectional. */
  "USBDM2": "1",
  /** Physical pin 2: USBDP2; bidirectional. */
  "USBDP2": "2",
  /** Physical pin 3: USBDM3; bidirectional. */
  "USBDM3": "3",
  /** Physical pin 4: USBDP3; bidirectional. */
  "USBDP3": "4",
  /** Physical pin 6: USBDM4; bidirectional. */
  "USBDM4": "6",
  /** Physical pin 7: USBDP4; bidirectional. */
  "USBDP4": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: VBUS_DET; input. */
  "VBUS_DET": "11",
  /** Physical pin 14: PRTCTL2; bidirectional. */
  "PRTCTL2": "14",
  /** Physical pin 16: PRTCTL3; bidirectional. */
  "PRTCTL3": "16",
  /** Physical pin 17: PRTCTL4; bidirectional. */
  "PRTCTL4": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 41: AUTOMDIX_EN; input. */
  "AUTOMDIX_EN": "41",
  /** Physical pin 50: EXRES; input. */
  "EXRES": "50",
  /** Physical pin 52: RXP; input. */
  "RXP": "52",
  /** Physical pin 53: RXN; input. */
  "RXN": "53",
  /** Physical pin 55: TXP; output. */
  "TXP": "55",
  /** Physical pin 56: TXN; output. */
  "TXN": "56",
  /** Physical pin 58: USBDM0; bidirectional. */
  "USBDM0": "58",
  /** Physical pin 59: USBDP0; bidirectional. */
  "USBDP0": "59",
  /** Physical pin 63: USBRBIAS; input. */
  "USBRBIAS": "63",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN9514 extends Component.withPins({
  /** Physical pin 5: VDD33A; power_in. */
  "VDD33A_5": "5",
  /** Physical pin 10: VDD33A; passive. */
  "VDD33A_10": "10",
  /** Physical pin 12: ~{RESET}; input. */
  "~{RESET}": "12",
  /** Physical pin 13: TEST1; input. */
  "TEST1": "13",
  /** Physical pin 15: VDD18CORE; power_in. */
  "VDD18CORE_15": "15",
  /** Physical pin 19: VDD33IO; power_in. */
  "VDD33IO_19": "19",
  /** Physical pin 20: ~{FDX_LED}/GPIO0; bidirectional. */
  "~{FDX_LED}/GPIO0": "20",
  /** Physical pin 21: ~{LNKA_LED}/GPIO1; bidirectional. */
  "~{LNKA_LED}/GPIO1": "21",
  /** Physical pin 22: ~{SPD_LED}/GPIO2; bidirectional. */
  "~{SPD_LED}/GPIO2": "22",
  /** Physical pin 23: EECLK; output. */
  "EECLK": "23",
  /** Physical pin 24: EECS; output. */
  "EECS": "24",
  /** Physical pin 25: EEDO; output. */
  "EEDO": "25",
  /** Physical pin 26: EEDI; input. */
  "EEDI": "26",
  /** Physical pin 27: VDD33IO; passive. */
  "VDD33IO_27": "27",
  /** Physical pin 28: ~{TRST}; input. */
  "~{TRST}": "28",
  /** Physical pin 29: TMS; input. */
  "TMS": "29",
  /** Physical pin 30: TDI; input. */
  "TDI": "30",
  /** Physical pin 31: TDO; output. */
  "TDO": "31",
  /** Physical pin 32: TCK; input. */
  "TCK": "32",
  /** Physical pin 33: VDD33IO; passive. */
  "VDD33IO_33": "33",
  /** Physical pin 34: TEST2; input. */
  "TEST2": "34",
  /** Physical pin 35: GPIO3; bidirectional. */
  "GPIO3": "35",
  /** Physical pin 36: GPIO4; bidirectional. */
  "GPIO4": "36",
  /** Physical pin 37: GPIO5; bidirectional. */
  "GPIO5": "37",
  /** Physical pin 38: VDD18CORE; passive. */
  "VDD18CORE_38": "38",
  /** Physical pin 39: VDD33IO; passive. */
  "VDD33IO_39": "39",
  /** Physical pin 40: TEST3; input. */
  "TEST3": "40",
  /** Physical pin 42: GPIO6; bidirectional. */
  "GPIO6": "42",
  /** Physical pin 43: GPIO7; bidirectional. */
  "GPIO7": "43",
  /** Physical pin 44: CLK24_EN; input. */
  "CLK24_EN": "44",
  /** Physical pin 45: CLK24_OUT; output. */
  "CLK24_OUT": "45",
  /** Physical pin 46: VDD33IO; passive. */
  "VDD33IO_46": "46",
  /** Physical pin 47: TEST4; input. */
  "TEST4": "47",
  /** Physical pin 48: VDD18ETHPLL; power_in. */
  "VDD18ETHPLL": "48",
  /** Physical pin 49: VDD33A; passive. */
  "VDD33A_49": "49",
  /** Physical pin 51: VDD33A; passive. */
  "VDD33A_51": "51",
  /** Physical pin 54: VDD33A; passive. */
  "VDD33A_54": "54",
  /** Physical pin 57: VDD33A; passive. */
  "VDD33A_57": "57",
  /** Physical pin 60: XO; input. */
  "XO": "60",
  /** Physical pin 61: XI; input. */
  "XI": "61",
  /** Physical pin 62: VDD18USBPLL; power_in. */
  "VDD18USBPLL": "62",
  /** Physical pin 64: VDD33A; passive. */
  "VDD33A_64": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
  /** Physical pin 1: USBDM2; bidirectional. */
  "USBDM2": "1",
  /** Physical pin 2: USBDP2; bidirectional. */
  "USBDP2": "2",
  /** Physical pin 3: USBDM3; bidirectional. */
  "USBDM3": "3",
  /** Physical pin 4: USBDP3; bidirectional. */
  "USBDP3": "4",
  /** Physical pin 6: USBDM4; bidirectional. */
  "USBDM4": "6",
  /** Physical pin 7: USBDP4; bidirectional. */
  "USBDP4": "7",
  /** Physical pin 8: USBDM5; bidirectional. */
  "USBDM5": "8",
  /** Physical pin 9: USBDP5; bidirectional. */
  "USBDP5": "9",
  /** Physical pin 11: VBUS_DET; input. */
  "VBUS_DET": "11",
  /** Physical pin 14: PRTCTL2; bidirectional. */
  "PRTCTL2": "14",
  /** Physical pin 16: PRTCTL3; bidirectional. */
  "PRTCTL3": "16",
  /** Physical pin 17: PRTCTL4; bidirectional. */
  "PRTCTL4": "17",
  /** Physical pin 18: PRTCTL5; bidirectional. */
  "PRTCTL5": "18",
  /** Physical pin 41: AUTOMDIX_EN; input. */
  "AUTOMDIX_EN": "41",
  /** Physical pin 50: EXRES; input. */
  "EXRES": "50",
  /** Physical pin 52: RXP; input. */
  "RXP": "52",
  /** Physical pin 53: RXN; input. */
  "RXN": "53",
  /** Physical pin 55: TXP; output. */
  "TXP": "55",
  /** Physical pin 56: TXN; output. */
  "TXN": "56",
  /** Physical pin 58: USBDM0; bidirectional. */
  "USBDM0": "58",
  /** Physical pin 59: USBDP0; bidirectional. */
  "USBDP0": "59",
  /** Physical pin 63: USBRBIAS; input. */
  "USBRBIAS": "63",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAN9514i extends Component.withPins({
  /** Physical pin 5: VDD33A; power_in. */
  "VDD33A_5": "5",
  /** Physical pin 10: VDD33A; passive. */
  "VDD33A_10": "10",
  /** Physical pin 12: ~{RESET}; input. */
  "~{RESET}": "12",
  /** Physical pin 13: TEST1; input. */
  "TEST1": "13",
  /** Physical pin 15: VDD18CORE; power_in. */
  "VDD18CORE_15": "15",
  /** Physical pin 19: VDD33IO; power_in. */
  "VDD33IO_19": "19",
  /** Physical pin 20: ~{FDX_LED}/GPIO0; bidirectional. */
  "~{FDX_LED}/GPIO0": "20",
  /** Physical pin 21: ~{LNKA_LED}/GPIO1; bidirectional. */
  "~{LNKA_LED}/GPIO1": "21",
  /** Physical pin 22: ~{SPD_LED}/GPIO2; bidirectional. */
  "~{SPD_LED}/GPIO2": "22",
  /** Physical pin 23: EECLK; output. */
  "EECLK": "23",
  /** Physical pin 24: EECS; output. */
  "EECS": "24",
  /** Physical pin 25: EEDO; output. */
  "EEDO": "25",
  /** Physical pin 26: EEDI; input. */
  "EEDI": "26",
  /** Physical pin 27: VDD33IO; passive. */
  "VDD33IO_27": "27",
  /** Physical pin 28: ~{TRST}; input. */
  "~{TRST}": "28",
  /** Physical pin 29: TMS; input. */
  "TMS": "29",
  /** Physical pin 30: TDI; input. */
  "TDI": "30",
  /** Physical pin 31: TDO; output. */
  "TDO": "31",
  /** Physical pin 32: TCK; input. */
  "TCK": "32",
  /** Physical pin 33: VDD33IO; passive. */
  "VDD33IO_33": "33",
  /** Physical pin 34: TEST2; input. */
  "TEST2": "34",
  /** Physical pin 35: GPIO3; bidirectional. */
  "GPIO3": "35",
  /** Physical pin 36: GPIO4; bidirectional. */
  "GPIO4": "36",
  /** Physical pin 37: GPIO5; bidirectional. */
  "GPIO5": "37",
  /** Physical pin 38: VDD18CORE; passive. */
  "VDD18CORE_38": "38",
  /** Physical pin 39: VDD33IO; passive. */
  "VDD33IO_39": "39",
  /** Physical pin 40: TEST3; input. */
  "TEST3": "40",
  /** Physical pin 42: GPIO6; bidirectional. */
  "GPIO6": "42",
  /** Physical pin 43: GPIO7; bidirectional. */
  "GPIO7": "43",
  /** Physical pin 44: CLK24_EN; input. */
  "CLK24_EN": "44",
  /** Physical pin 45: CLK24_OUT; output. */
  "CLK24_OUT": "45",
  /** Physical pin 46: VDD33IO; passive. */
  "VDD33IO_46": "46",
  /** Physical pin 47: TEST4; input. */
  "TEST4": "47",
  /** Physical pin 48: VDD18ETHPLL; power_in. */
  "VDD18ETHPLL": "48",
  /** Physical pin 49: VDD33A; passive. */
  "VDD33A_49": "49",
  /** Physical pin 51: VDD33A; passive. */
  "VDD33A_51": "51",
  /** Physical pin 54: VDD33A; passive. */
  "VDD33A_54": "54",
  /** Physical pin 57: VDD33A; passive. */
  "VDD33A_57": "57",
  /** Physical pin 60: XO; input. */
  "XO": "60",
  /** Physical pin 61: XI; input. */
  "XI": "61",
  /** Physical pin 62: VDD18USBPLL; power_in. */
  "VDD18USBPLL": "62",
  /** Physical pin 64: VDD33A; passive. */
  "VDD33A_64": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
  /** Physical pin 1: USBDM2; bidirectional. */
  "USBDM2": "1",
  /** Physical pin 2: USBDP2; bidirectional. */
  "USBDP2": "2",
  /** Physical pin 3: USBDM3; bidirectional. */
  "USBDM3": "3",
  /** Physical pin 4: USBDP3; bidirectional. */
  "USBDP3": "4",
  /** Physical pin 6: USBDM4; bidirectional. */
  "USBDM4": "6",
  /** Physical pin 7: USBDP4; bidirectional. */
  "USBDP4": "7",
  /** Physical pin 8: USBDM5; bidirectional. */
  "USBDM5": "8",
  /** Physical pin 9: USBDP5; bidirectional. */
  "USBDP5": "9",
  /** Physical pin 11: VBUS_DET; input. */
  "VBUS_DET": "11",
  /** Physical pin 14: PRTCTL2; bidirectional. */
  "PRTCTL2": "14",
  /** Physical pin 16: PRTCTL3; bidirectional. */
  "PRTCTL3": "16",
  /** Physical pin 17: PRTCTL4; bidirectional. */
  "PRTCTL4": "17",
  /** Physical pin 18: PRTCTL5; bidirectional. */
  "PRTCTL5": "18",
  /** Physical pin 41: AUTOMDIX_EN; input. */
  "AUTOMDIX_EN": "41",
  /** Physical pin 50: EXRES; input. */
  "EXRES": "50",
  /** Physical pin 52: RXP; input. */
  "RXP": "52",
  /** Physical pin 53: RXN; input. */
  "RXN": "53",
  /** Physical pin 55: TXP; output. */
  "TXP": "55",
  /** Physical pin 56: TXN; output. */
  "TXN": "56",
  /** Physical pin 58: USBDM0; bidirectional. */
  "USBDM0": "58",
  /** Physical pin 59: USBDP0; bidirectional. */
  "USBDP0": "59",
  /** Physical pin 63: USBRBIAS; input. */
  "USBRBIAS": "63",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RTL8211EG_VB_CG extends Component.withPins({
  /** Physical pin 1: CLK125; output. */
  "CLK125": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: REG_OUT; power_out. */
  "REG_OUT": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: MDI[0]+; bidirectional. */
  "MDI[0]+": "5",
  /** Physical pin 6: MDI[0]-; bidirectional. */
  "MDI[0]-": "6",
  /** Physical pin 7: AVDD10; power_in. */
  "AVDD10_7": "7",
  /** Physical pin 8: MDI[1]+; bidirectional. */
  "MDI[1]+": "8",
  /** Physical pin 9: MDI[1]-; bidirectional. */
  "MDI[1]-": "9",
  /** Physical pin 10: AVDD33; power_in. */
  "AVDD33_10": "10",
  /** Physical pin 11: MDI[2]+; bidirectional. */
  "MDI[2]+": "11",
  /** Physical pin 12: MDI[2]-; bidirectional. */
  "MDI[2]-": "12",
  /** Physical pin 13: AVDD10; power_in. */
  "AVDD10_13": "13",
  /** Physical pin 14: MDI[3]+; bidirectional. */
  "MDI[3]+": "14",
  /** Physical pin 15: MDI[3]-; bidirectional. */
  "MDI[3]-": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: RXDV/PHY_AD2; bidirectional. */
  "RXDV/PHY_AD2": "18",
  /** Physical pin 19: RXD0; output. */
  "RXD0": "19",
  /** Physical pin 20: DVDD33; power_in. */
  "DVDD33_20": "20",
  /** Physical pin 21: RXD1; output. */
  "RXD1": "21",
  /** Physical pin 22: RXD2; output. */
  "RXD2": "22",
  /** Physical pin 23: RXD3; output. */
  "RXD3": "23",
  /** Physical pin 24: RXC; output. */
  "RXC": "24",
  /** Physical pin 25: RXD4/SELRGV; bidirectional. */
  "RXD4/SELRGV": "25",
  /** Physical pin 26: DVDD33; power_in. */
  "DVDD33_26": "26",
  /** Physical pin 27: RXD5/TXDLY; bidirectional. */
  "RXD5/TXDLY": "27",
  /** Physical pin 28: RXD6/RXDLY; bidirectional. */
  "RXD6/RXDLY": "28",
  /** Physical pin 29: RXD7/AN0; bidirectional. */
  "RXD7/AN0": "29",
  /** Physical pin 30: RXER/AN1; bidirectional. */
  "RXER/AN1": "30",
  /** Physical pin 31: COL/MODE; bidirectional. */
  "COL/MODE": "31",
  /** Physical pin 32: CRS; output. */
  "CRS": "32",
  /** Physical pin 33: DVDD10; power_in. */
  "DVDD10_33": "33",
  /** Physical pin 34: GTX_CLK; input. */
  "GTX_CLK": "34",
  /** Physical pin 35: TXEN; input. */
  "TXEN": "35",
  /** Physical pin 36: TXD0; input. */
  "TXD0": "36",
  /** Physical pin 37: DVDD33; power_in. */
  "DVDD33_37": "37",
  /** Physical pin 38: ~{PHYRST}; input. */
  "~{PHYRST}": "38",
  /** Physical pin 39: TXD1; input. */
  "TXD1": "39",
  /** Physical pin 40: TXD2; input. */
  "TXD2": "40",
  /** Physical pin 41: TXD3; input. */
  "TXD3": "41",
  /** Physical pin 42: TXCLK; output. */
  "TXCLK": "42",
  /** Physical pin 43: TXD4; input. */
  "TXD4": "43",
  /** Physical pin 44: TXD5; input. */
  "TXD5": "44",
  /** Physical pin 45: TXD6; input. */
  "TXD6": "45",
  /** Physical pin 46: TXD7; input. */
  "TXD7": "46",
  /** Physical pin 47: TXER; input. */
  "TXER": "47",
  /** Physical pin 48: DVDD10; power_in. */
  "DVDD10_48": "48",
  /** Physical pin 49: DVDD33; power_in. */
  "DVDD33_49": "49",
  /** Physical pin 50: LED0/PHY_AD0; bidirectional. */
  "LED0/PHY_AD0": "50",
  /** Physical pin 51: LED1/PHY_AD1; bidirectional. */
  "LED1/PHY_AD1": "51",
  /** Physical pin 52: LED2; bidirectional. */
  "LED2": "52",
  /** Physical pin 53: MDC; input. */
  "MDC": "53",
  /** Physical pin 54: MDIO; bidirectional. */
  "MDIO": "54",
  /** Physical pin 55: ~{PME}; open_collector. */
  "~{PME}": "55",
  /** Physical pin 56: ~{INT}; open_collector. */
  "~{INT}": "56",
  /** Physical pin 57: ENSWREG; input. */
  "ENSWREG": "57",
  /** Physical pin 58: RSET; passive. */
  "RSET": "58",
  /** Physical pin 59: AVDD10; power_in. */
  "AVDD10_59": "59",
  /** Physical pin 60: AVDD33; power_in. */
  "AVDD33_60": "60",
  /** Physical pin 61: CKXTAL1; input. */
  "CKXTAL1": "61",
  /** Physical pin 62: CKXTAL2; output. */
  "CKXTAL2": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: VDDREG; power_in. */
  "VDDREG": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VSC8541XMV_0x extends Component.withPins({
  /** Physical pin 1: REF_REXT; passive. */
  "REF_REXT": "1",
  /** Physical pin 2: VDD25A; power_in. */
  "VDD25A_2": "2",
  /** Physical pin 3: P0_D3N; passive. */
  "P0_D3N": "3",
  /** Physical pin 4: P0_D3P; passive. */
  "P0_D3P": "4",
  /** Physical pin 5: VDD1A; power_in. */
  "VDD1A_5": "5",
  /** Physical pin 6: P0_D2N; passive. */
  "P0_D2N": "6",
  /** Physical pin 7: P0_D2P; passive. */
  "P0_D2P": "7",
  /** Physical pin 8: VDD25A; power_in. */
  "VDD25A_8": "8",
  /** Physical pin 9: P0_D1N; passive. */
  "P0_D1N": "9",
  /** Physical pin 10: P0_D1P; passive. */
  "P0_D1P": "10",
  /** Physical pin 11: VDD25A; power_in. */
  "VDD25A_11": "11",
  /** Physical pin 12: P0_D0N; passive. */
  "P0_D0N": "12",
  /** Physical pin 13: P0_D0P; passive. */
  "P0_D0P": "13",
  /** Physical pin 14: VDD1A; power_in. */
  "VDD1A_14": "14",
  /** Physical pin 15: THERMDA; passive. */
  "THERMDA": "15",
  /** Physical pin 16: THERMDC_VSS; passive. */
  "THERMDC_VSS": "16",
  /** Physical pin 17: VDD1; power_in. */
  "VDD1_17": "17",
  /** Physical pin 18: COL; bidirectional. */
  "COL": "18",
  /** Physical pin 19: CRS; bidirectional. */
  "CRS": "19",
  /** Physical pin 20: RXD7; bidirectional. */
  "RXD7": "20",
  /** Physical pin 21: RXD6; bidirectional. */
  "RXD6": "21",
  /** Physical pin 22: VDDMAC; power_in. */
  "VDDMAC_22": "22",
  /** Physical pin 23: RXD5; bidirectional. */
  "RXD5": "23",
  /** Physical pin 24: RXD4; bidirectional. */
  "RXD4": "24",
  /** Physical pin 25: RXD3; bidirectional. */
  "RXD3": "25",
  /** Physical pin 26: RXD2; bidirectional. */
  "RXD2": "26",
  /** Physical pin 27: RXD1; bidirectional. */
  "RXD1": "27",
  /** Physical pin 28: VDDMAC; passive. */
  "VDDMAC_28": "28",
  /** Physical pin 29: RXD0; bidirectional. */
  "RXD0": "29",
  /** Physical pin 30: RX_DV/RX_CTL; bidirectional. */
  "RX_DV/RX_CTL": "30",
  /** Physical pin 31: RX_ER; bidirectional. */
  "RX_ER": "31",
  /** Physical pin 32: RX_CLK; bidirectional. */
  "RX_CLK": "32",
  /** Physical pin 33: TX_EN/TX_CTL; input. */
  "TX_EN/TX_CTL": "33",
  /** Physical pin 34: VDD1; passive. */
  "VDD1_34": "34",
  /** Physical pin 35: TX_ER; input. */
  "TX_ER": "35",
  /** Physical pin 36: MII_TXCLK; bidirectional. */
  "MII_TXCLK": "36",
  /** Physical pin 37: GTX_CLK; input. */
  "GTX_CLK": "37",
  /** Physical pin 38: TXD0; input. */
  "TXD0": "38",
  /** Physical pin 39: VDDMAC; passive. */
  "VDDMAC_39": "39",
  /** Physical pin 40: TXD1; input. */
  "TXD1": "40",
  /** Physical pin 41: TXD2; input. */
  "TXD2": "41",
  /** Physical pin 42: TXD3; input. */
  "TXD3": "42",
  /** Physical pin 43: TXD4; input. */
  "TXD4": "43",
  /** Physical pin 44: VDDMAC; passive. */
  "VDDMAC_44": "44",
  /** Physical pin 45: TXD5; input. */
  "TXD5": "45",
  /** Physical pin 46: TXD6; input. */
  "TXD6": "46",
  /** Physical pin 47: TXD7; input. */
  "TXD7": "47",
  /** Physical pin 48: MDC; input. */
  "MDC": "48",
  /** Physical pin 49: VDDMDIO; power_in. */
  "VDDMDIO": "49",
  /** Physical pin 50: MDIO; bidirectional. */
  "MDIO": "50",
  /** Physical pin 51: MDINT; output. */
  "MDINT": "51",
  /** Physical pin 52: FASTLINK_FAIL; output. */
  "FASTLINK_FAIL": "52",
  /** Physical pin 53: NRESET; input. */
  "NRESET": "53",
  /** Physical pin 54: CLKOUT; bidirectional. */
  "CLKOUT": "54",
  /** Physical pin 55: RCVRD_CLK; output. */
  "RCVRD_CLK": "55",
  /** Physical pin 56: COMA_MODE; bidirectional. */
  "COMA_MODE": "56",
  /** Physical pin 57: CLK_SQUELCH_IN; input. */
  "CLK_SQUELCH_IN": "57",
  /** Physical pin 58: VDDIO; power_in. */
  "VDDIO": "58",
  /** Physical pin 59: LED1; output. */
  "LED1": "59",
  /** Physical pin 60: LED0; output. */
  "LED0": "60",
  /** Physical pin 61: REFCLK_SEL_1; input. */
  "REFCLK_SEL_1": "61",
  /** Physical pin 62: REFCLK_SEL_0; input. */
  "REFCLK_SEL_0": "62",
  /** Physical pin 63: XTAL1; input. */
  "XTAL1": "63",
  /** Physical pin 64: XTAL2; output. */
  "XTAL2": "64",
  /** Physical pin 65: RESERVED_1; no_connect. */
  "RESERVED_1": "65",
  /** Physical pin 66: RESERVED_0; no_connect. */
  "RESERVED_0": "66",
  /** Physical pin 67: REF_FILT; passive. */
  "REF_FILT": "67",
  /** Physical pin 68: VDD1A; power_in. */
  "VDD1A_68": "68",
  /** Physical pin 69: VSS; power_in. */
  "VSS": "69",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W5100 extends Component.withPins({
  /** Physical pin 1: RSET_BG; output. */
  "RSET_BG": "1",
  /** Physical pin 2: VCC3V3A; power_in. */
  "VCC3V3A": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GNDA; power_in. */
  "GNDA_4": "4",
  /** Physical pin 5: RXIP; input. */
  "RXIP": "5",
  /** Physical pin 6: RXIN; input. */
  "RXIN": "6",
  /** Physical pin 7: VCC1V8A; power_in. */
  "VCC1V8A_7": "7",
  /** Physical pin 8: TXOP; output. */
  "TXOP": "8",
  /** Physical pin 9: TXON; output. */
  "TXON": "9",
  /** Physical pin 10: GNDA; passive. */
  "GNDA_10": "10",
  /** Physical pin 11: 1V8_OUT; power_out. */
  "1V8_OUT": "11",
  /** Physical pin 12: VCC3V3D; power_in. */
  "VCC3V3D_12": "12",
  /** Physical pin 13: GNDD; power_in. */
  "GNDD_13": "13",
  /** Physical pin 14: GNDD; passive. */
  "GNDD_14": "14",
  /** Physical pin 15: VCC1V8D; power_in. */
  "VCC1V8D_15": "15",
  /** Physical pin 16: VCC1V8D; passive. */
  "VCC1V8D_16": "16",
  /** Physical pin 17: GNDD; passive. */
  "GNDD_17": "17",
  /** Physical pin 18: VCC3V3D; passive. */
  "VCC3V3D_18": "18",
  /** Physical pin 19: DATA7; bidirectional. */
  "DATA7": "19",
  /** Physical pin 20: DATA6; bidirectional. */
  "DATA6": "20",
  /** Physical pin 21: DATA5; bidirectional. */
  "DATA5": "21",
  /** Physical pin 22: DATA4; bidirectional. */
  "DATA4": "22",
  /** Physical pin 23: DATA3; bidirectional. */
  "DATA3": "23",
  /** Physical pin 24: DATA2; bidirectional. */
  "DATA2": "24",
  /** Physical pin 25: DATA1; bidirectional. */
  "DATA1": "25",
  /** Physical pin 26: DATA0; bidirectional. */
  "DATA0": "26",
  /** Physical pin 27: MISO; output. */
  "MISO": "27",
  /** Physical pin 28: MOSI; input. */
  "MOSI": "28",
  /** Physical pin 29: ~{SCS}; input. */
  "~{SCS}": "29",
  /** Physical pin 30: SCLK; input. */
  "SCLK": "30",
  /** Physical pin 31: SEN; input. */
  "SEN": "31",
  /** Physical pin 32: GNDD; passive. */
  "GNDD_32": "32",
  /** Physical pin 33: VCC1V8D; passive. */
  "VCC1V8D_33": "33",
  /** Physical pin 34: TEST_MODE3; input. */
  "TEST_MODE3": "34",
  /** Physical pin 35: TEST_MODE2; input. */
  "TEST_MODE2": "35",
  /** Physical pin 36: TEST_MODE1; input. */
  "TEST_MODE1": "36",
  /** Physical pin 37: TEST_MODE0; input. */
  "TEST_MODE0": "37",
  /** Physical pin 38: ADDR14; input. */
  "ADDR14": "38",
  /** Physical pin 39: ADDR13; input. */
  "ADDR13": "39",
  /** Physical pin 40: ADDR12; input. */
  "ADDR12": "40",
  /** Physical pin 41: ADDR11; input. */
  "ADDR11": "41",
  /** Physical pin 42: ADDR10; input. */
  "ADDR10": "42",
  /** Physical pin 43: GNDD; passive. */
  "GNDD_43": "43",
  /** Physical pin 44: VCC3V3D; passive. */
  "VCC3V3D_44": "44",
  /** Physical pin 45: ADDR9; input. */
  "ADDR9": "45",
  /** Physical pin 46: ADDR8; input. */
  "ADDR8": "46",
  /** Physical pin 47: ADDR7; input. */
  "ADDR7": "47",
  /** Physical pin 48: ADDR6; input. */
  "ADDR6": "48",
  /** Physical pin 49: ADDR5; input. */
  "ADDR5": "49",
  /** Physical pin 50: ADDR4; input. */
  "ADDR4": "50",
  /** Physical pin 51: ADDR3; input. */
  "ADDR3": "51",
  /** Physical pin 52: ADDR2; input. */
  "ADDR2": "52",
  /** Physical pin 53: ADDR1; input. */
  "ADDR1": "53",
  /** Physical pin 54: ADDR0; input. */
  "ADDR0": "54",
  /** Physical pin 55: ~{CS}; input. */
  "~{CS}": "55",
  /** Physical pin 56: ~{INT}; output. */
  "~{INT}": "56",
  /** Physical pin 57: ~{WR}; input. */
  "~{WR}": "57",
  /** Physical pin 58: ~{RD}; input. */
  "~{RD}": "58",
  /** Physical pin 59: ~{RESET}; input. */
  "~{RESET}": "59",
  /** Physical pin 60: NC; no_connect. */
  "NC_60": "60",
  /** Physical pin 61: NC; no_connect. */
  "NC_61": "61",
  /** Physical pin 62: NC; no_connect. */
  "NC_62": "62",
  /** Physical pin 63: OPMODE0; input. */
  "OPMODE0": "63",
  /** Physical pin 64: OPMODE1; input. */
  "OPMODE1": "64",
  /** Physical pin 65: OPMODE2; input. */
  "OPMODE2": "65",
  /** Physical pin 66: LINKLED; output. */
  "LINKLED": "66",
  /** Physical pin 67: SPDLED; output. */
  "SPDLED": "67",
  /** Physical pin 68: GNDD; passive. */
  "GNDD_68": "68",
  /** Physical pin 69: VCC1V8D; passive. */
  "VCC1V8D_69": "69",
  /** Physical pin 70: FDXLED; output. */
  "FDXLED": "70",
  /** Physical pin 71: COLLED; output. */
  "COLLED": "71",
  /** Physical pin 72: RXLED; output. */
  "RXLED": "72",
  /** Physical pin 73: TXLED; output. */
  "TXLED": "73",
  /** Physical pin 74: VCC1V8A; passive. */
  "VCC1V8A_74": "74",
  /** Physical pin 75: XTLN; input. */
  "XTLN": "75",
  /** Physical pin 76: XTLP; output. */
  "XTLP": "76",
  /** Physical pin 77: GNDA; passive. */
  "GNDA_77": "77",
  /** Physical pin 78: NC; no_connect. */
  "NC_78": "78",
  /** Physical pin 79: NC; no_connect. */
  "NC_79": "79",
  /** Physical pin 80: NC; no_connect. */
  "NC_80": "80",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W5100S_L extends Component.withPins({
  /** Physical pin 48: ~{RST}; input. */
  "~{RST}": "48",
  /** Physical pin 1: GNDA; power_in. */
  "GNDA_1": "1",
  /** Physical pin 2: TXON; output. */
  "TXON": "2",
  /** Physical pin 3: TXOP; output. */
  "TXOP": "3",
  /** Physical pin 4: 1V2A; power_in. */
  "1V2A": "4",
  /** Physical pin 5: RXIN; input. */
  "RXIN": "5",
  /** Physical pin 6: RXIP; input. */
  "RXIP": "6",
  /** Physical pin 7: GNDA; passive. */
  "GNDA_7": "7",
  /** Physical pin 8: 3V3A; power_in. */
  "3V3A_8": "8",
  /** Physical pin 9: RSET_BG; output. */
  "RSET_BG": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: XSCO; output. */
  "XSCO": "11",
  /** Physical pin 12: XSCI; input. */
  "XSCI": "12",
  /** Physical pin 13: 1V2D; power_in. */
  "1V2D_13": "13",
  /** Physical pin 14: 1V2O; power_out. */
  "1V2O": "14",
  /** Physical pin 15: 3V3A; passive. */
  "3V3A_15": "15",
  /** Physical pin 16: GNDA; passive. */
  "GNDA_16": "16",
  /** Physical pin 17: ~{LNK}; output. */
  "~{LNK}": "17",
  /** Physical pin 18: ~{SPD}; output. */
  "~{SPD}": "18",
  /** Physical pin 19: ~{DPX}; output. */
  "~{DPX}": "19",
  /** Physical pin 20: ~{ACT}; output. */
  "~{ACT}": "20",
  /** Physical pin 21: ~{COL}; output. */
  "~{COL}": "21",
  /** Physical pin 22: 1V2D; passive. */
  "1V2D_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: 3V3D; power_in. */
  "3V3D_24": "24",
  /** Physical pin 25: MOD[0]; input. */
  "MOD[0]": "25",
  /** Physical pin 26: MOD[1]; input. */
  "MOD[1]": "26",
  /** Physical pin 27: MOD[2]; input. */
  "MOD[2]": "27",
  /** Physical pin 28: MOD[3]; input. */
  "MOD[3]": "28",
  /** Physical pin 29: ~{CS}; input. */
  "~{CS}": "29",
  /** Physical pin 30: SCLK; input. */
  "SCLK": "30",
  /** Physical pin 31: 1V2D; passive. */
  "1V2D_31": "31",
  /** Physical pin 32: MOSI; input. */
  "MOSI": "32",
  /** Physical pin 33: MISO; output. */
  "MISO": "33",
  /** Physical pin 34: ~{RD}; input. */
  "~{RD}": "34",
  /** Physical pin 35: ~{WR}; input. */
  "~{WR}": "35",
  /** Physical pin 36: 3V3D; passive. */
  "3V3D_36": "36",
  /** Physical pin 37: DATA0; bidirectional. */
  "DATA0": "37",
  /** Physical pin 38: DATA1; bidirectional. */
  "DATA1": "38",
  /** Physical pin 39: DATA2; bidirectional. */
  "DATA2": "39",
  /** Physical pin 40: DATA3; bidirectional. */
  "DATA3": "40",
  /** Physical pin 41: DATA4; bidirectional. */
  "DATA4": "41",
  /** Physical pin 42: DATA5; bidirectional. */
  "DATA5": "42",
  /** Physical pin 43: DATA6; bidirectional. */
  "DATA6": "43",
  /** Physical pin 44: DATA7; bidirectional. */
  "DATA7": "44",
  /** Physical pin 45: 1V2D; passive. */
  "1V2D_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: ~{INT}; output. */
  "~{INT}": "47",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W5100S_Q extends Component.withPins({
  /** Physical pin 48: ~{RST}; input. */
  "~{RST}": "48",
  /** Physical pin 1: GNDA; power_in. */
  "GNDA_1": "1",
  /** Physical pin 2: TXON; output. */
  "TXON": "2",
  /** Physical pin 3: TXOP; output. */
  "TXOP": "3",
  /** Physical pin 4: 1V2A; power_in. */
  "1V2A": "4",
  /** Physical pin 5: RXIN; input. */
  "RXIN": "5",
  /** Physical pin 6: RXIP; input. */
  "RXIP": "6",
  /** Physical pin 7: GNDA; passive. */
  "GNDA_7": "7",
  /** Physical pin 8: 3V3A; power_in. */
  "3V3A_8": "8",
  /** Physical pin 9: RSET_BG; output. */
  "RSET_BG": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: XSCO; output. */
  "XSCO": "11",
  /** Physical pin 12: XSCI; input. */
  "XSCI": "12",
  /** Physical pin 13: 1V2D; power_in. */
  "1V2D_13": "13",
  /** Physical pin 14: 1V2O; power_out. */
  "1V2O": "14",
  /** Physical pin 15: 3V3A; passive. */
  "3V3A_15": "15",
  /** Physical pin 16: GNDA; passive. */
  "GNDA_16": "16",
  /** Physical pin 17: ~{LNK}; output. */
  "~{LNK}": "17",
  /** Physical pin 18: ~{SPD}; output. */
  "~{SPD}": "18",
  /** Physical pin 19: ~{DPX}; output. */
  "~{DPX}": "19",
  /** Physical pin 20: ~{ACT}; output. */
  "~{ACT}": "20",
  /** Physical pin 21: ~{COL}; output. */
  "~{COL}": "21",
  /** Physical pin 22: 1V2D; passive. */
  "1V2D_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: 3V3D; power_in. */
  "3V3D_24": "24",
  /** Physical pin 25: MOD[0]; input. */
  "MOD[0]": "25",
  /** Physical pin 26: MOD[1]; input. */
  "MOD[1]": "26",
  /** Physical pin 27: MOD[2]; input. */
  "MOD[2]": "27",
  /** Physical pin 28: MOD[3]; input. */
  "MOD[3]": "28",
  /** Physical pin 29: ~{CS}; input. */
  "~{CS}": "29",
  /** Physical pin 30: SCLK; input. */
  "SCLK": "30",
  /** Physical pin 31: 1V2D; passive. */
  "1V2D_31": "31",
  /** Physical pin 32: MOSI; input. */
  "MOSI": "32",
  /** Physical pin 33: MISO; output. */
  "MISO": "33",
  /** Physical pin 34: ~{RD}; input. */
  "~{RD}": "34",
  /** Physical pin 35: ~{WR}; input. */
  "~{WR}": "35",
  /** Physical pin 36: 3V3D; passive. */
  "3V3D_36": "36",
  /** Physical pin 37: DATA0; bidirectional. */
  "DATA0": "37",
  /** Physical pin 38: DATA1; bidirectional. */
  "DATA1": "38",
  /** Physical pin 39: DATA2; bidirectional. */
  "DATA2": "39",
  /** Physical pin 40: DATA3; bidirectional. */
  "DATA3": "40",
  /** Physical pin 41: DATA4; bidirectional. */
  "DATA4": "41",
  /** Physical pin 42: DATA5; bidirectional. */
  "DATA5": "42",
  /** Physical pin 43: DATA6; bidirectional. */
  "DATA6": "43",
  /** Physical pin 44: DATA7; bidirectional. */
  "DATA7": "44",
  /** Physical pin 45: 1V2D; passive. */
  "1V2D_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: ~{INT}; output. */
  "~{INT}": "47",
  /** Physical pin 49: EP; passive. */
  "EP": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W5500 extends Component.withPins({
  /** Physical pin 1: TXN; output. */
  "TXN": "1",
  /** Physical pin 2: TXP; output. */
  "TXP": "2",
  /** Physical pin 3: AGND; power_in. */
  "AGND_3": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD_4": "4",
  /** Physical pin 5: RXN; input. */
  "RXN": "5",
  /** Physical pin 6: RXP; input. */
  "RXP": "6",
  /** Physical pin 7: DNC; no_connect. */
  "DNC": "7",
  /** Physical pin 8: AVDD; passive. */
  "AVDD_8": "8",
  /** Physical pin 9: AGND; passive. */
  "AGND_9": "9",
  /** Physical pin 10: EXRES1; passive. */
  "EXRES1": "10",
  /** Physical pin 11: AVDD; passive. */
  "AVDD_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: AGND; passive. */
  "AGND_14": "14",
  /** Physical pin 15: AVDD; passive. */
  "AVDD_15": "15",
  /** Physical pin 16: AGND; passive. */
  "AGND_16": "16",
  /** Physical pin 17: AVDD; passive. */
  "AVDD_17": "17",
  /** Physical pin 18: VBG; passive. */
  "VBG": "18",
  /** Physical pin 19: AGND; passive. */
  "AGND_19": "19",
  /** Physical pin 20: TOCAP; passive. */
  "TOCAP": "20",
  /** Physical pin 21: AVDD; passive. */
  "AVDD_21": "21",
  /** Physical pin 22: 1V2O; output. */
  "1V2O": "22",
  /** Physical pin 23: RSVD; input. */
  "RSVD_23": "23",
  /** Physical pin 24: SPDLED; output. */
  "SPDLED": "24",
  /** Physical pin 25: LINKLED; output. */
  "LINKLED": "25",
  /** Physical pin 26: DUPLED; output. */
  "DUPLED": "26",
  /** Physical pin 27: ACTLED; output. */
  "ACTLED": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
  /** Physical pin 29: GND; power_in. */
  "GND": "29",
  /** Physical pin 30: XI/CLKIN; input. */
  "XI/CLKIN": "30",
  /** Physical pin 31: XO; output. */
  "XO": "31",
  /** Physical pin 32: ~{SCS}; input. */
  "~{SCS}": "32",
  /** Physical pin 33: SCLK; input. */
  "SCLK": "33",
  /** Physical pin 34: MISO; output. */
  "MISO": "34",
  /** Physical pin 35: MOSI; input. */
  "MOSI": "35",
  /** Physical pin 36: ~{INT}; input. */
  "~{INT}": "36",
  /** Physical pin 37: ~{RST}; input. */
  "~{RST}": "37",
  /** Physical pin 38: RSVD; input. */
  "RSVD_38": "38",
  /** Physical pin 39: RSVD; input. */
  "RSVD_39": "39",
  /** Physical pin 40: RSVD; input. */
  "RSVD_40": "40",
  /** Physical pin 41: RSVD; input. */
  "RSVD_41": "41",
  /** Physical pin 42: RSVD; input. */
  "RSVD_42": "42",
  /** Physical pin 43: PMODE2; input. */
  "PMODE2": "43",
  /** Physical pin 44: PMODE1; input. */
  "PMODE1": "44",
  /** Physical pin 45: PMODE0; input. */
  "PMODE0": "45",
  /** Physical pin 46: NC; no_connect. */
  "NC_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 48: AGND; passive. */
  "AGND_48": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W6100_L extends Component.withPins({
  /** Physical pin 48: ~{RST}; input. */
  "~{RST}": "48",
  /** Physical pin 1: GNDA; power_in. */
  "GNDA_1": "1",
  /** Physical pin 2: TXON; output. */
  "TXON": "2",
  /** Physical pin 3: TXOP; output. */
  "TXOP": "3",
  /** Physical pin 4: 1V2A; power_in. */
  "1V2A": "4",
  /** Physical pin 5: RXIN; input. */
  "RXIN": "5",
  /** Physical pin 6: RXIP; input. */
  "RXIP": "6",
  /** Physical pin 7: GNDA; passive. */
  "GNDA_7": "7",
  /** Physical pin 8: 3V3A; power_in. */
  "3V3A_8": "8",
  /** Physical pin 9: RSET_BG; output. */
  "RSET_BG": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: XSCO; output. */
  "XSCO": "11",
  /** Physical pin 12: XSCI; input. */
  "XSCI": "12",
  /** Physical pin 13: 1V2D; power_in. */
  "1V2D_13": "13",
  /** Physical pin 14: 1V2O; power_out. */
  "1V2O": "14",
  /** Physical pin 15: 3V3A; passive. */
  "3V3A_15": "15",
  /** Physical pin 16: GNDA; passive. */
  "GNDA_16": "16",
  /** Physical pin 17: ~{LNK}; output. */
  "~{LNK}": "17",
  /** Physical pin 18: ~{SPD}; output. */
  "~{SPD}": "18",
  /** Physical pin 19: ~{DPX}; output. */
  "~{DPX}": "19",
  /** Physical pin 20: ~{ACT}; output. */
  "~{ACT}": "20",
  /** Physical pin 21: ~{COL}; output. */
  "~{COL}": "21",
  /** Physical pin 22: 1V2D; passive. */
  "1V2D_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: 3V3D; power_in. */
  "3V3D_24": "24",
  /** Physical pin 25: MOD[0]; input. */
  "MOD[0]": "25",
  /** Physical pin 26: MOD[1]; input. */
  "MOD[1]": "26",
  /** Physical pin 27: MOD[2]; input. */
  "MOD[2]": "27",
  /** Physical pin 28: MOD[3]; input. */
  "MOD[3]": "28",
  /** Physical pin 29: ~{CS}; input. */
  "~{CS}": "29",
  /** Physical pin 30: SCLK; input. */
  "SCLK": "30",
  /** Physical pin 31: 1V2D; passive. */
  "1V2D_31": "31",
  /** Physical pin 32: MOSI; input. */
  "MOSI": "32",
  /** Physical pin 33: MISO; output. */
  "MISO": "33",
  /** Physical pin 34: ~{RD}; input. */
  "~{RD}": "34",
  /** Physical pin 35: ~{WR}; input. */
  "~{WR}": "35",
  /** Physical pin 36: 3V3D; passive. */
  "3V3D_36": "36",
  /** Physical pin 37: DATA0; bidirectional. */
  "DATA0": "37",
  /** Physical pin 38: DATA1; bidirectional. */
  "DATA1": "38",
  /** Physical pin 39: DATA2; bidirectional. */
  "DATA2": "39",
  /** Physical pin 40: DATA3; bidirectional. */
  "DATA3": "40",
  /** Physical pin 41: DATA4; bidirectional. */
  "DATA4": "41",
  /** Physical pin 42: DATA5; bidirectional. */
  "DATA5": "42",
  /** Physical pin 43: DATA6; bidirectional. */
  "DATA6": "43",
  /** Physical pin 44: DATA7; bidirectional. */
  "DATA7": "44",
  /** Physical pin 45: 1V2D; passive. */
  "1V2D_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: ~{INT}; output. */
  "~{INT}": "47",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W6100_Q extends Component.withPins({
  /** Physical pin 48: ~{RST}; input. */
  "~{RST}": "48",
  /** Physical pin 1: GNDA; power_in. */
  "GNDA_1": "1",
  /** Physical pin 2: TXON; output. */
  "TXON": "2",
  /** Physical pin 3: TXOP; output. */
  "TXOP": "3",
  /** Physical pin 4: 1V2A; power_in. */
  "1V2A": "4",
  /** Physical pin 5: RXIN; input. */
  "RXIN": "5",
  /** Physical pin 6: RXIP; input. */
  "RXIP": "6",
  /** Physical pin 7: GNDA; passive. */
  "GNDA_7": "7",
  /** Physical pin 8: 3V3A; power_in. */
  "3V3A_8": "8",
  /** Physical pin 9: RSET_BG; output. */
  "RSET_BG": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: XSCO; output. */
  "XSCO": "11",
  /** Physical pin 12: XSCI; input. */
  "XSCI": "12",
  /** Physical pin 13: 1V2D; power_in. */
  "1V2D_13": "13",
  /** Physical pin 14: 1V2O; power_out. */
  "1V2O": "14",
  /** Physical pin 15: 3V3A; passive. */
  "3V3A_15": "15",
  /** Physical pin 16: GNDA; passive. */
  "GNDA_16": "16",
  /** Physical pin 17: ~{LNK}; output. */
  "~{LNK}": "17",
  /** Physical pin 18: ~{SPD}; output. */
  "~{SPD}": "18",
  /** Physical pin 19: ~{DPX}; output. */
  "~{DPX}": "19",
  /** Physical pin 20: ~{ACT}; output. */
  "~{ACT}": "20",
  /** Physical pin 21: ~{COL}; output. */
  "~{COL}": "21",
  /** Physical pin 22: 1V2D; passive. */
  "1V2D_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: 3V3D; power_in. */
  "3V3D_24": "24",
  /** Physical pin 25: MOD[0]; input. */
  "MOD[0]": "25",
  /** Physical pin 26: MOD[1]; input. */
  "MOD[1]": "26",
  /** Physical pin 27: MOD[2]; input. */
  "MOD[2]": "27",
  /** Physical pin 28: MOD[3]; input. */
  "MOD[3]": "28",
  /** Physical pin 29: ~{CS}; input. */
  "~{CS}": "29",
  /** Physical pin 30: SCLK; input. */
  "SCLK": "30",
  /** Physical pin 31: 1V2D; passive. */
  "1V2D_31": "31",
  /** Physical pin 32: MOSI; input. */
  "MOSI": "32",
  /** Physical pin 33: MISO; output. */
  "MISO": "33",
  /** Physical pin 34: ~{RD}; input. */
  "~{RD}": "34",
  /** Physical pin 35: ~{WR}; input. */
  "~{WR}": "35",
  /** Physical pin 36: 3V3D; passive. */
  "3V3D_36": "36",
  /** Physical pin 37: DATA0; bidirectional. */
  "DATA0": "37",
  /** Physical pin 38: DATA1; bidirectional. */
  "DATA1": "38",
  /** Physical pin 39: DATA2; bidirectional. */
  "DATA2": "39",
  /** Physical pin 40: DATA3; bidirectional. */
  "DATA3": "40",
  /** Physical pin 41: DATA4; bidirectional. */
  "DATA4": "41",
  /** Physical pin 42: DATA5; bidirectional. */
  "DATA5": "42",
  /** Physical pin 43: DATA6; bidirectional. */
  "DATA6": "43",
  /** Physical pin 44: DATA7; bidirectional. */
  "DATA7": "44",
  /** Physical pin 45: 1V2D; passive. */
  "1V2D_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: ~{INT}; output. */
  "~{INT}": "47",
  /** Physical pin 49: EP; passive. */
  "EP": "49",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WGI210AT extends Component.withPins({
  /** Physical pin 1: LAN_PWR_GOOD; input. */
  "LAN_PWR_GOOD": "1",
  /** Physical pin 2: NC_SI_CLK_IN; input. */
  "NC_SI_CLK_IN": "2",
  /** Physical pin 3: NC_SI_CRS_DV; output. */
  "NC_SI_CRS_DV": "3",
  /** Physical pin 4: JTAG_TDO; output. */
  "JTAG_TDO": "4",
  /** Physical pin 5: NC_SI_RXD1; output. */
  "NC_SI_RXD1": "5",
  /** Physical pin 6: NC_SI_RXD0; output. */
  "NC_SI_RXD0": "6",
  /** Physical pin 7: NC_SI_TX_EN; input. */
  "NC_SI_TX_EN": "7",
  /** Physical pin 8: NC_SI_TXD1; input. */
  "NC_SI_TXD1": "8",
  /** Physical pin 9: NC_SI_TXD0; input. */
  "NC_SI_TXD0": "9",
  /** Physical pin 10: VDD3p3; power_in. */
  "VDD3p3_10": "10",
  /** Physical pin 11: VDD0p9; power_in. */
  "VDD0p9_11": "11",
  /** Physical pin 12: NVM_SI; output. */
  "NVM_SI": "12",
  /** Physical pin 13: NVM_SK; output. */
  "NVM_SK": "13",
  /** Physical pin 14: NVM_SO; input. */
  "NVM_SO": "14",
  /** Physical pin 15: ~{NVM_CS}; output. */
  "~{NVM_CS}": "15",
  /** Physical pin 16: ~{PE_WAKE}; bidirectional. */
  "~{PE_WAKE}": "16",
  /** Physical pin 17: ~{PE_RST}; input. */
  "~{PE_RST}": "17",
  /** Physical pin 18: JTAG_TMS; input. */
  "JTAG_TMS": "18",
  /** Physical pin 19: JTAG_CLK; input. */
  "JTAG_CLK": "19",
  /** Physical pin 20: PE_Tn; output. */
  "PE_Tn": "20",
  /** Physical pin 21: PE_Tp; output. */
  "PE_Tp": "21",
  /** Physical pin 22: NC/Vext; power_in. */
  "NC/Vext": "22",
  /** Physical pin 23: PE_Rn; input. */
  "PE_Rn": "23",
  /** Physical pin 24: PE_Rp; input. */
  "PE_Rp": "24",
  /** Physical pin 25: PECLKn; input. */
  "PECLKn": "25",
  /** Physical pin 26: PECLKp; input. */
  "PECLKp": "26",
  /** Physical pin 27: VDD3p3; passive. */
  "VDD3p3_27": "27",
  /** Physical pin 28: ~{DEV_OFF}; input. */
  "~{DEV_OFF}": "28",
  /** Physical pin 29: JTAG_TDI; input. */
  "JTAG_TDI": "29",
  /** Physical pin 30: LED1; output. */
  "LED1": "30",
  /** Physical pin 31: LED0; output. */
  "LED0": "31",
  /** Physical pin 32: VDD0p9; power_in. */
  "VDD0p9_32": "32",
  /** Physical pin 33: LED2; output. */
  "LED2": "33",
  /** Physical pin 34: SMB_CLK; bidirectional. */
  "SMB_CLK": "34",
  /** Physical pin 35: ~{SMB_ALRT}; output. */
  "~{SMB_ALRT}": "35",
  /** Physical pin 36: SMB_DATA; bidirectional. */
  "SMB_DATA": "36",
  /** Physical pin 37: CBOT; passive. */
  "CBOT": "37",
  /** Physical pin 38: VDD0p9_OUT; power_out. */
  "VDD0p9_OUT": "38",
  /** Physical pin 39: VDD1p5_OUT; power_out. */
  "VDD1p5_OUT": "39",
  /** Physical pin 40: CTOP; passive. */
  "CTOP": "40",
  /** Physical pin 41: VDD3p3; passive. */
  "VDD3p3_41": "41",
  /** Physical pin 42: VDD0p9; power_in. */
  "VDD0p9_42": "42",
  /** Physical pin 43: NC_SI_ARB_IN; input. */
  "NC_SI_ARB_IN": "43",
  /** Physical pin 44: NC_SI_ARB_OUT; output. */
  "NC_SI_ARB_OUT": "44",
  /** Physical pin 45: XTAL2; output. */
  "XTAL2": "45",
  /** Physical pin 46: XTAL1; input. */
  "XTAL1": "46",
  /** Physical pin 47: VDD1p5; power_in. */
  "VDD1p5_47": "47",
  /** Physical pin 48: RSET; passive. */
  "RSET": "48",
  /** Physical pin 49: MDI_MINUS[3]/SER_N; bidirectional. */
  "MDI_MINUS[3]/SER_N": "49",
  /** Physical pin 50: MDI_PLUS[3]/SER_P; bidirectional. */
  "MDI_PLUS[3]/SER_P": "50",
  /** Physical pin 51: VDD3p3; power_in. */
  "VDD3p3_51": "51",
  /** Physical pin 52: MDI_MINUS[2]/SET_N; bidirectional. */
  "MDI_MINUS[2]/SET_N": "52",
  /** Physical pin 53: MDI_PLUS[2]; bidirectional. */
  "MDI_PLUS[2]": "53",
  /** Physical pin 54: MDI_MINUS[1]/SRDS_SIG_DET; bidirectional. */
  "MDI_MINUS[1]/SRDS_SIG_DET": "54",
  /** Physical pin 55: MDI_PLUS[1]/SFP_I2C_CLK; bidirectional. */
  "MDI_PLUS[1]/SFP_I2C_CLK": "55",
  /** Physical pin 56: VDD1p5; power_in. */
  "VDD1p5_56": "56",
  /** Physical pin 57: MDI_MINUS[0]/SFP_I2C_DATA; bidirectional. */
  "MDI_MINUS[0]/SFP_I2C_DATA": "57",
  /** Physical pin 58: MDI_PLUS[0]/NC; bidirectional. */
  "MDI_PLUS[0]/NC": "58",
  /** Physical pin 59: VDD0p9; power_in. */
  "VDD0p9_59": "59",
  /** Physical pin 60: SDP3; bidirectional. */
  "SDP3": "60",
  /** Physical pin 61: SDP1; bidirectional. */
  "SDP1": "61",
  /** Physical pin 62: SDP2; bidirectional. */
  "SDP2": "62",
  /** Physical pin 63: SDP0; bidirectional. */
  "SDP0": "63",
  /** Physical pin 64: VDD3p3; passive. */
  "VDD3p3_64": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
}) {
  override schema = "Interface_Ethernet:WGI210AT";
  override referencePrefix = "U";
}

