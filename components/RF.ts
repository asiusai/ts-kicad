// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 868/915MHz Impedance Matched, Multi-Function, Integrated Ceramic Passive Component for Texas Instruments CC112x, CC117x & CC12xx Chipsets
 *
 * KiCad symbol: `RF:0900PC15J0013`. Reference prefix: `U`.
 * Footprint filters: Balun*Johanson*0900PC15J0013*.
 * @see https://www.johansontechnology.com/datasheets/0900PC15J0013/0900PC15J0013.pdf
 * Keywords: CC1120 CC1121 CC1125 CC1175 CC1200 CC1201 balun.
 * Default footprint: RF_Converter:Balun_Johanson_0900PC15J0013.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _0900PC15J0013 extends Component.withPins({
  /** Physical pin 1: LNA_N; passive. */
  "LNA_N": "1",
  /** Physical pin 2: LNA_P; passive. */
  "LNA_P": "2",
  /** Physical pin 3: TRX; passive. */
  "TRX": "3",
  /** Physical pin 4: PA; passive. */
  "PA": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: ANT; passive. */
  "ANT": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
}) {
  override schema = "RF:0900PC15J0013";
  override referencePrefix = "U";
}

/**
 * RF/IF Gain and Phase Detector, up to 2.7 GHz, TSSOP-16
 *
 * KiCad symbol: `RF:AD8302xRU`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8302.pdf
 * Keywords: magnitude-ratio phase-difference AD8302ARUZ.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8302xRU extends Component.withPins({
  /** Physical pin 2: INPA; input. */
  "INPA": "2",
  /** Physical pin 3: OFSA; input. */
  "OFSA": "3",
  /** Physical pin 4: VPOS; power_in. */
  "VPOS": "4",
  /** Physical pin 5: OFSB; input. */
  "OFSB": "5",
  /** Physical pin 6: INPB; input. */
  "INPB": "6",
  /** Physical pin 8: PFLT; input. */
  "PFLT": "8",
  /** Physical pin 9: VPHS; output. */
  "VPHS": "9",
  /** Physical pin 10: PSET; input. */
  "PSET": "10",
  /** Physical pin 11: VREF; output. */
  "VREF": "11",
  /** Physical pin 12: MSET; input. */
  "MSET": "12",
  /** Physical pin 13: VMAG; output. */
  "VMAG": "13",
  /** Physical pin 14: MFLT; input. */
  "MFLT": "14",
  /** Physical pin [1,7]: COMM; power_in. */
  "COMM": "[1,7]",
}) {
  override schema = "RF:AD8302xRU";
  override referencePrefix = "U";
}

/**
 * Directional Coupler, 5 to 900 MHz, 10 dB Coupling, 50 Ohm, Mini-Circuits CD542
 *
 * KiCad symbol: `RF:ADC-10-1R`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADC-10-1R.pdf
 * Keywords: Directional Coupler.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_LandPatternPL-094.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC_10_1R extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: CPL; output. */
  "CPL": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
}) {
  override schema = "RF:ADC-10-1R";
  override referencePrefix = "U";
}

/**
 * 50-10000MHz, RF Choke, Mini-Circuits CD542
 *
 * KiCad symbol: `RF:ADCH-80`. Reference prefix: `L`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADCH-80+.pdf
 * Keywords: bias filter DC choke.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADCH_80 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: RF&DC; passive. */
  "RF&DC": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: DC; passive. */
  "DC": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
}) {
  override schema = "RF:ADCH-80";
  override referencePrefix = "L";
}

/**
 * 50-10000MHz, RF Choke, Mini-Circuits CD542
 *
 * KiCad symbol: `RF:ADCH-80A`. Reference prefix: `L`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADCH-80A+.pdf
 * Keywords: bias filter DC choke.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_H2.84mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADCH_80A extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: DC; passive. */
  "DC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: RF&DC; passive. */
  "RF&DC": "6",
}) {
  override schema = "RF:ADCH-80A";
  override referencePrefix = "L";
}

/**
 * DC to 6 GHz, 45 dB TruPwr Detector with Envelope Threshold Detection, LFCSP-16
 *
 * KiCad symbol: `RF:ADL5904`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADL5904.pdf
 * Keywords: RMS power detector log decibel dB.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADL5904 extends Component.withPins({
  /** Physical pin 1: RFIN; input. */
  "RFIN": "1",
  /** Physical pin 2: DNC; no_connect. */
  "DNC_2": "2",
  /** Physical pin 3: VCAL; output. */
  "VCAL": "3",
  /** Physical pin 4: DECL; passive. */
  "DECL": "4",
  /** Physical pin 5: VPOS; power_in. */
  "VPOS_5": "5",
  /** Physical pin 6: DNC; no_connect. */
  "DNC_6": "6",
  /** Physical pin 7: VPOS; passive. */
  "VPOS_7": "7",
  /** Physical pin 8: DNC; no_connect. */
  "DNC_8": "8",
  /** Physical pin 9: CRMS; passive. */
  "CRMS": "9",
  /** Physical pin 10: VRMS; output. */
  "VRMS": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: Q; output. */
  "Q": "12",
  /** Physical pin 13: ~{Q}; output. */
  "~{Q}": "13",
  /** Physical pin 14: ENBL; input. */
  "ENBL": "14",
  /** Physical pin 15: RST; input. */
  "RST": "15",
  /** Physical pin 16: VIN-; input. */
  "VIN-": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "RF:ADL5904";
  override referencePrefix = "U";
}

/**
 * Power splitter combiner, 1 to 650 MHz, 2 way 0-degree, 50 ohm, Mini-Circuits CD636
 *
 * KiCad symbol: `RF:ADP-2-1W`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*CD636*.
 * @see https://www.minicircuits.com/pdfs/ADP-2-1W.pdf
 * Keywords: splitter combiner.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD636_LandPatternPL-035.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADP_2_1W extends Component.withPins({
  /** Physical pin 1: SUM; passive. */
  "SUM": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: PORT1; passive. */
  "PORT1": "3",
  /** Physical pin 4: PORT2; passive. */
  "PORT2": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND": "6",
}) {
  override schema = "RF:ADP-2-1W";
  override referencePrefix = "U";
}

/**
 * 2x Frequency Multiplier, output 20 to 1000 MHz, 50 Ohm, Mini-Circuits CD542
 *
 * KiCad symbol: `RF:AMK-2-13`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/AMK-2-13+.pdf
 * Keywords: frequency multiplier.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_LandPatternPL-052.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AMK_2_13 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: F_IN; input. */
  "F_IN": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: 2F_OUT; output. */
  "2F_OUT": "6",
}) {
  override schema = "RF:AMK-2-13";
  override referencePrefix = "U";
}

/**
 * Advanced High Performance ASK and FSK Narrow-band Transceiver for 27 - 1050 MHz Range
 *
 * KiCad symbol: `RF:AX5043`. Reference prefix: `U`.
 * Footprint filters: QFN?28*5x5mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/AX5043-D.PDF
 * Keywords: RF, transceiver.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AX5043 extends Component.withPins({
  /** Physical pin 1: VDD_ANA; power_out. */
  "VDD_ANA_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: ANTP; bidirectional. */
  "ANTP": "3",
  /** Physical pin 4: ANTN; bidirectional. */
  "ANTN": "4",
  /** Physical pin 5: ANTP1; output. */
  "ANTP1": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: VDD_ANA; power_out. */
  "VDD_ANA_7": "7",
  /** Physical pin 8: FILT; input. */
  "FILT": "8",
  /** Physical pin 9: L2; passive. */
  "L2": "9",
  /** Physical pin 10: L1; passive. */
  "L1": "10",
  /** Physical pin 11: DATA; bidirectional. */
  "DATA": "11",
  /** Physical pin 12: DCLK; bidirectional. */
  "DCLK": "12",
  /** Physical pin 13: SYSCLK; bidirectional. */
  "SYSCLK": "13",
  /** Physical pin 14: SEL; input. */
  "SEL": "14",
  /** Physical pin 15: CLK; input. */
  "CLK": "15",
  /** Physical pin 16: MISO; output. */
  "MISO": "16",
  /** Physical pin 17: MOSI; input. */
  "MOSI": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: IRQ; output. */
  "IRQ": "19",
  /** Physical pin 20: PWRAMP; bidirectional. */
  "PWRAMP": "20",
  /** Physical pin 21: ANTSEL; bidirectional. */
  "ANTSEL": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: VDD_IO; power_in. */
  "VDD_IO": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GPADC1; input. */
  "GPADC1": "25",
  /** Physical pin 26: GPADC2; input. */
  "GPADC2": "26",
  /** Physical pin 27: CLK16N; input. */
  "CLK16N": "27",
  /** Physical pin 28: CLK16P; input. */
  "CLK16P": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "RF:AX5043";
  override referencePrefix = "U";
}

/**
 * Single Chip Low Power RF Transceiver, TSSOP-28
 *
 * KiCad symbol: `RF:CC1000`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see www.ti.com/lit/ds/symlink/cc1000.pdf
 * Keywords: Low Power RF Transceiver.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CC1000 extends Component.withPins({
  /** Physical pin 1: AVDD; power_in. */
  "AVDD_1": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND_2": "2",
  /** Physical pin 3: RF_IN; passive. */
  "RF_IN": "3",
  /** Physical pin 4: RF_OUT; passive. */
  "RF_OUT": "4",
  /** Physical pin 5: AVDD; power_in. */
  "AVDD_5": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND_6": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND_7": "7",
  /** Physical pin 8: AGND; power_in. */
  "AGND_8": "8",
  /** Physical pin 9: AVDD; power_in. */
  "AVDD_9": "9",
  /** Physical pin 10: L1; passive. */
  "L1": "10",
  /** Physical pin 11: L2; passive. */
  "L2": "11",
  /** Physical pin 12: CHP_OUT; passive. */
  "CHP_OUT": "12",
  /** Physical pin 13: R_BIAS; passive. */
  "R_BIAS": "13",
  /** Physical pin 14: AGND; power_in. */
  "AGND_14": "14",
  /** Physical pin 15: AVDD; power_in. */
  "AVDD_15": "15",
  /** Physical pin 16: AGND; power_in. */
  "AGND_16": "16",
  /** Physical pin 17: XOSC_Q2; passive. */
  "XOSC_Q2": "17",
  /** Physical pin 18: XOSC_Q1; passive. */
  "XOSC_Q1": "18",
  /** Physical pin 19: AGND; power_in. */
  "AGND_19": "19",
  /** Physical pin 20: DGND; power_in. */
  "DGND_20": "20",
  /** Physical pin 21: DVDD; power_in. */
  "DVDD": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND_22": "22",
  /** Physical pin 23: DIO; bidirectional. */
  "DIO": "23",
  /** Physical pin 24: DCLK; output. */
  "DCLK": "24",
  /** Physical pin 25: PCLK; input. */
  "PCLK": "25",
  /** Physical pin 26: PDATA; bidirectional. */
  "PDATA": "26",
  /** Physical pin 27: PALE; input. */
  "PALE": "27",
  /** Physical pin 28: RSSI/IF; passive. */
  "RSSI/IF": "28",
}) {
  override schema = "RF:CC1000";
  override referencePrefix = "U";
}

/**
 * Low-Power, High-Performance RF Transceiver, QFN-32
 *
 * KiCad symbol: `RF:CC1200`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/cc1200.pdf
 * Keywords: RF Tx Rx.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CC1200 extends Component.withPins({
  /** Physical pin 1: VDD_GUARD; power_in. */
  "VDD_GUARD": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: GPIO3; bidirectional. */
  "GPIO3": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: DVDD; power_in. */
  "DVDD_5": "5",
  /** Physical pin 6: DCPL; power_out. */
  "DCPL": "6",
  /** Physical pin 7: SI; input. */
  "SI": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
  /** Physical pin 9: SO(GPIO1); bidirectional. */
  "SO(GPIO1)": "9",
  /** Physical pin 10: GPIO0; bidirectional. */
  "GPIO0": "10",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: DVDD; power_in. */
  "DVDD_12": "12",
  /** Physical pin 13: AVDD_IF; power_in. */
  "AVDD_IF": "13",
  /** Physical pin 14: RBIAS; passive. */
  "RBIAS": "14",
  /** Physical pin 15: AVDD_RF; power_in. */
  "AVDD_RF": "15",
  /** Physical pin 17: PA; passive. */
  "PA": "17",
  /** Physical pin 18: TRX_SW; passive. */
  "TRX_SW": "18",
  /** Physical pin 19: LNA_P; passive. */
  "LNA_P": "19",
  /** Physical pin 20: LNA_N; passive. */
  "LNA_N": "20",
  /** Physical pin 21: DCPL_VCO; power_out. */
  "DCPL_VCO": "21",
  /** Physical pin 22: AVDD_SYNTH1; power_in. */
  "AVDD_SYNTH1": "22",
  /** Physical pin 23: LPF0; passive. */
  "LPF0": "23",
  /** Physical pin 24: LPF1; passive. */
  "LPF1": "24",
  /** Physical pin 25: AVDD_PFD_CHP; power_in. */
  "AVDD_PFD_CHP": "25",
  /** Physical pin 26: DCPL_PFD_CHP; power_out. */
  "DCPL_PFD_CHP": "26",
  /** Physical pin 27: AVDD_SYNTH2; power_in. */
  "AVDD_SYNTH2": "27",
  /** Physical pin 28: AVDD_XOSC; power_in. */
  "AVDD_XOSC": "28",
  /** Physical pin 29: DCPL_XOSC; power_out. */
  "DCPL_XOSC": "29",
  /** Physical pin 30: XOSC_Q1; passive. */
  "XOSC_Q1": "30",
  /** Physical pin 31: XOSC_Q2; passive. */
  "XOSC_Q2": "31",
  /** Physical pin 32: EXT_XOSC; input. */
  "EXT_XOSC": "32",
  /** Physical pin 33: GND_EP; power_in. */
  "GND_EP": "33",
}) {
  override schema = "RF:CC1200";
  override referencePrefix = "U";
}

/**
 * Single Chip Low Power RF Transceiver, QFN-20
 *
 * KiCad symbol: `RF:CC2500`. Reference prefix: `U`.
 * Footprint filters: Texas*RGP0020H*.
 * @see http://www.ti.com/lit/ds/symlink/cc2500.pdf
 * Keywords: Low Power RF Transceiver.
 * Default footprint: Package_DFN_QFN:Texas_RGP0020H_VQFN-20-1EP_4x4mm_P0.5mm_EP2.4x2.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CC2500 extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: SO(GDO1); bidirectional. */
  "SO(GDO1)": "2",
  /** Physical pin 3: GDO2; bidirectional. */
  "GDO2": "3",
  /** Physical pin 4: DVDD; power_in. */
  "DVDD": "4",
  /** Physical pin 5: DCOUPL; power_out. */
  "DCOUPL": "5",
  /** Physical pin 6: GDO0(ATEST); bidirectional. */
  "GDO0(ATEST)": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: XOSC_Q1; passive. */
  "XOSC_Q1": "8",
  /** Physical pin 9: AVDD; power_in. */
  "AVDD_9": "9",
  /** Physical pin 10: XOSC_Q2; passive. */
  "XOSC_Q2": "10",
  /** Physical pin 11: AVDD; passive. */
  "AVDD_11": "11",
  /** Physical pin 12: RF_P; passive. */
  "RF_P": "12",
  /** Physical pin 13: RF_N; passive. */
  "RF_N": "13",
  /** Physical pin 14: AVDD; passive. */
  "AVDD_14": "14",
  /** Physical pin 15: AVDD; passive. */
  "AVDD_15": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: RBIAS; passive. */
  "RBIAS": "17",
  /** Physical pin 18: VDD_GUARD; power_in. */
  "VDD_GUARD": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: SI; input. */
  "SI": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "RF:CC2500";
  override referencePrefix = "U";
}

/**
 * 4.7-5.9GHz 20dB Directional Coupler, Configuration 1, Anaren 0805
 *
 * KiCad symbol: `RF:DC4759J5020AHF-1`. Reference prefix: `U`.
 * Footprint filters: Anaren*0805*2012Metric*.
 * @see https://cdn.anaren.com/product-documents/Xinger/DirectionalCouplers/DC4759J5020AHF/DC4759J5020AHF_DataSheet(Rev_E).pdf
 * Keywords: RF coupler.
 * Default footprint: RF_Converter:Anaren_0805_2012Metric-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DC4759J5020AHF_1 extends Component.withPins({
  /** Physical pin 1: Direct; output. */
  "Direct": "1",
  /** Physical pin 2: Isolated; output. */
  "Isolated": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: Coupled; output. */
  "Coupled": "5",
  /** Physical pin 6: Input; input. */
  "Input": "6",
}) {
  override schema = "RF:DC4759J5020AHF-1";
  override referencePrefix = "U";
}

/**
 * 4.7-5.9GHz 20dB Directional Coupler, Configuration 2, Anaren 0805
 *
 * KiCad symbol: `RF:DC4759J5020AHF-2`. Reference prefix: `U`.
 * Footprint filters: Anaren*0805*2012Metric*.
 * @see https://cdn.anaren.com/product-documents/Xinger/DirectionalCouplers/DC4759J5020AHF/DC4759J5020AHF_DataSheet(Rev_E).pdf
 * Keywords: RF coupler.
 * Default footprint: RF_Converter:Anaren_0805_2012Metric-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DC4759J5020AHF_2 extends Component.withPins({
  /** Physical pin 1: Input; input. */
  "Input": "1",
  /** Physical pin 2: Coupled; output. */
  "Coupled": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: Isolated; output. */
  "Isolated": "5",
  /** Physical pin 6: Direct; output. */
  "Direct": "6",
}) {
  override schema = "RF:DC4759J5020AHF-2";
  override referencePrefix = "U";
}

/**
 * Ultra Wideband transceiver, 6.8Mbps data rates, 3.5GHz to 6.5GHz, QFN-48
 *
 * KiCad symbol: `RF:DW1000`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*.
 * @see https://www.decawave.com/wp-content/uploads/2020/04/DW1000_Datasheet.pdf
 * Keywords: Ultra Wideband UWB transceiver IEEE802.15.4-2011 Decawave Qorvo.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DW1000 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: EXTCLK/XTAL1; input. */
  "EXTCLK/XTAL1": "3",
  /** Physical pin 4: XTAL2; input. */
  "XTAL2": "4",
  /** Physical pin 5: VREF; bidirectional. */
  "VREF": "5",
  /** Physical pin 6: VDDMS; power_out. */
  "VDDMS": "6",
  /** Physical pin 7: VDDIF; power_out. */
  "VDDIF": "7",
  /** Physical pin 8: CLKTUNE; bidirectional. */
  "CLKTUNE": "8",
  /** Physical pin 9: VDDCLK; power_out. */
  "VDDCLK": "9",
  /** Physical pin 10: VDDSYN; power_out. */
  "VDDSYN": "10",
  /** Physical pin 11: VDDVCO; power_out. */
  "VDDVCO": "11",
  /** Physical pin 12: VCOTUNE; bidirectional. */
  "VCOTUNE": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: VDDLNA; power_in. */
  "VDDLNA": "15",
  /** Physical pin 16: RF_P; bidirectional. */
  "RF_P": "16",
  /** Physical pin 17: RF_N; bidirectional. */
  "RF_N": "17",
  /** Physical pin 18: VDDPA1; power_in. */
  "VDDPA1": "18",
  /** Physical pin 19: VDDPA2; power_in. */
  "VDDPA2": "19",
  /** Physical pin 20: VDDREG; power_out. */
  "VDDREG": "20",
  /** Physical pin 21: EXTON; output. */
  "EXTON": "21",
  /** Physical pin 22: FORCEON; input. */
  "FORCEON": "22",
  /** Physical pin 23: WAKEUP; input. */
  "WAKEUP": "23",
  /** Physical pin 24: ~{SPICS}; input. */
  "~{SPICS}": "24",
  /** Physical pin 25: VDDAON; power_in. */
  "VDDAON": "25",
  /** Physical pin 26: VDDLDOD; power_in. */
  "VDDLDOD": "26",
  /** Physical pin 27: ~{RST}; bidirectional. */
  "~{RST}": "27",
  /** Physical pin 28: VDDIOA; power_in. */
  "VDDIOA": "28",
  /** Physical pin 29: SYNC/GPIO7; bidirectional. */
  "SYNC/GPIO7": "29",
  /** Physical pin 30: GPIO6/EXTRXE/SPIPHA; bidirectional. */
  "GPIO6/EXTRXE/SPIPHA": "30",
  /** Physical pin 31: VDDIO; power_out. */
  "VDDIO_31": "31",
  /** Physical pin 32: VSSIO; power_in. */
  "VSSIO_32": "32",
  /** Physical pin 33: GPIO5/EXTTXE/SPIPOL; bidirectional. */
  "GPIO5/EXTTXE/SPIPOL": "33",
  /** Physical pin 34: GPIO4/EXTPA; bidirectional. */
  "GPIO4/EXTPA": "34",
  /** Physical pin 35: GPIO3/TXLED; bidirectional. */
  "GPIO3/TXLED": "35",
  /** Physical pin 36: GPIO2/RXLED; bidirectional. */
  "GPIO2/RXLED": "36",
  /** Physical pin 37: GPIO1/SFDLED; bidirectional. */
  "GPIO1/SFDLED": "37",
  /** Physical pin 38: GPIO0/RXOKLED; bidirectional. */
  "GPIO0/RXOKLED": "38",
  /** Physical pin 39: SPIMOSI; input. */
  "SPIMOSI": "39",
  /** Physical pin 40: SPIMISO; output. */
  "SPIMISO": "40",
  /** Physical pin 41: SPICLK; input. */
  "SPICLK": "41",
  /** Physical pin 42: VDDIO; power_out. */
  "VDDIO_42": "42",
  /** Physical pin 43: VSSIO; passive. */
  "VSSIO_43": "43",
  /** Physical pin 44: VDDDIG; power_out. */
  "VDDDIG": "44",
  /** Physical pin 45: IRQ/GPIO8; bidirectional. */
  "IRQ/GPIO8": "45",
  /** Physical pin 46: TESTMODE; input. */
  "TESTMODE": "46",
  /** Physical pin 47: VDDBATT; power_in. */
  "VDDBATT": "47",
  /** Physical pin 48: VDDLDOA; power_in. */
  "VDDLDOA": "48",
  /** Physical pin 49: GND; power_in. */
  "GND": "49",
}) {
  override schema = "RF:DW1000";
  override referencePrefix = "U";
}

/**
 * Synoxo 300-450MHz ASK/OOK Transmitter, +10dBm, 10kbps, Sleep/Wake Function, 1.8-3.6V, SOT-23-6
 *
 * KiCad symbol: `RF:F115`. Reference prefix: `U`.
 * Footprint filters: SOT-23-6*.
 * @see https://datasheet.lcsc.com/lcsc/2205181716_Synoxo-F115_C3010244.pdf
 * Keywords: Synoxo SYN115 RF Transmitter.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class F115 extends Component.withPins({
  /** Physical pin 1: PAOUT; output. */
  "PAOUT": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: XTLOUT; output. */
  "XTLOUT": "4",
  /** Physical pin 5: XTLIN; input. */
  "XTLIN": "5",
  /** Physical pin 6: ASK; input. */
  "ASK": "6",
}) {
  override schema = "RF:F115";
  override referencePrefix = "U";
}

/**
 * Synoxo 300-450MHz ASK/OOK Transmitter, +10dBm, 10kbps, 1.8-3.6V, SOT-23-6
 *
 * KiCad symbol: `RF:F113`. Reference prefix: `U`.
 * Footprint filters: SOT-23-6*.
 * @see https://datasheet.lcsc.com/lcsc/2205181716_Synoxo-F115_C3010244.pdf
 * Keywords: Synoxo SYN113 RF Transmitter.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class F113 extends Component.withPins({
  /** Physical pin 1: PAOUT; output. */
  "PAOUT": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: XTLOUT; output. */
  "XTLOUT": "4",
  /** Physical pin 5: XTLIN; input. */
  "XTLIN": "5",
  /** Physical pin 6: ASK; input. */
  "ASK": "6",
}) {
  override schema = "RF:F113";
  override referencePrefix = "U";
}

/**
 * Synoxo 300-450MHz ASK/OOK Transmitter, +13dBm, 10kbps, Sleep/Wake Function, 1.8-3.6V, SOT-23-6
 *
 * KiCad symbol: `RF:F117`. Reference prefix: `U`.
 * Footprint filters: SOT-23-6*.
 * @see https://datasheet.lcsc.com/lcsc/2205181716_Synoxo-F115_C3010244.pdf
 * Keywords: Synoxo SYN117 RF Transmitter.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class F117 extends Component.withPins({
  /** Physical pin 1: PAOUT; output. */
  "PAOUT": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: XTLOUT; output. */
  "XTLOUT": "4",
  /** Physical pin 5: XTLIN; input. */
  "XTLIN": "5",
  /** Physical pin 6: ASK; input. */
  "ASK": "6",
}) {
  override schema = "RF:F117";
  override referencePrefix = "U";
}

/**
 * GaAs HBT Programmable 5-bit Counter, DC - 2.2 GHz, QFN-24-1EP
 *
 * KiCad symbol: `RF:HMC394LP4`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/hmc394.pdf
 * Keywords: counter prescaler programmable frequency divider.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HMC394LP4 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: A3; input. */
  "A3": "4",
  /** Physical pin 5: A4; input. */
  "A4": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: ~{IN}; input. */
  "~{IN}": "13",
  /** Physical pin 14: IN; input. */
  "IN": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: OUT; output. */
  "OUT": "16",
  /** Physical pin 17: ~{OUT}; output. */
  "~{OUT}": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC_23": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "RF:HMC394LP4";
  override referencePrefix = "U";
}

/**
 * 5.5-6.1GHz VCO, QFN-24
 *
 * KiCad symbol: `RF:HMC431`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/hmc431.pdf
 * Keywords: vco rf.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HMC431 extends Component.withPins({
  /** Physical pin 1: NC; passive. */
  "NC_1": "1",
  /** Physical pin 2: NC; passive. */
  "NC_2": "2",
  /** Physical pin 3: NC; passive. */
  "NC_3": "3",
  /** Physical pin 4: NC; passive. */
  "NC_4": "4",
  /** Physical pin 5: NC; passive. */
  "NC_5": "5",
  /** Physical pin 6: NC; passive. */
  "NC_6": "6",
  /** Physical pin 7: NC; passive. */
  "NC_7": "7",
  /** Physical pin 8: NC; passive. */
  "NC_8": "8",
  /** Physical pin 9: NC; passive. */
  "NC_9": "9",
  /** Physical pin 10: NC; passive. */
  "NC_10": "10",
  /** Physical pin 11: NC; passive. */
  "NC_11": "11",
  /** Physical pin 12: NC; passive. */
  "NC_12": "12",
  /** Physical pin 13: NC; passive. */
  "NC_13": "13",
  /** Physical pin 14: NC; passive. */
  "NC_14": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: RFOUT; output. */
  "RFOUT": "16",
  /** Physical pin 17: NC; passive. */
  "NC_17": "17",
  /** Physical pin 18: NC; passive. */
  "NC_18": "18",
  /** Physical pin 19: NC; passive. */
  "NC_19": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: NC; passive. */
  "NC_21": "21",
  /** Physical pin 22: VTUNE; input. */
  "VTUNE": "22",
  /** Physical pin 23: NC; passive. */
  "NC_23": "23",
  /** Physical pin 24: NC; passive. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "RF:HMC431";
  override referencePrefix = "U";
}

/**
 * Attenuator, 3dB, 0.5W, DC to 2500 MHz, 50 Ohm, Mini-Circuits MMM168
 *
 * KiCad symbol: `RF:LAT-3`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*MMM168*.
 * @see https://www.minicircuits.com/pdfs/LAT-3+.pdf
 * Keywords: attenuator rf.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_MMM168_LandPatternPL-225.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LAT_3 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: OUT; output. */
  "OUT": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: IN; input. */
  "IN": "4",
}) {
  override schema = "RF:LAT-3";
  override referencePrefix = "U";
}

/**
 * Power Splitter/Combiner, 5 to 500 MHz, 50 Ohm
 *
 * KiCad symbol: `RF:LRPS-2-1`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*QQQ130*.
 * @see https://www.minicircuits.com/pdfs/LRPS-2-1.pdf
 * Keywords: power splitter combiner.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_QQQ130_LandPattern_PL-236_ClockwisePinNumbering.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LRPS_2_1 extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: PORT2; passive. */
  "PORT2": "3",
  /** Physical pin 4: PORT1; passive. */
  "PORT1": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: SUM; passive. */
  "SUM": "6",
}) {
  override schema = "RF:LRPS-2-1";
  override referencePrefix = "U";
}

/**
 * 100kHz to 1GHz RF Power Detector, 2.7..6V supply, TSOT-23-6
 *
 * KiCad symbol: `RF:LTC5507ES6`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/5507f.pdf
 * Keywords: analog linear.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC5507ES6 extends Component.withPins({
  /** Physical pin 1: ~{SHDN}; input. */
  "~{SHDN}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: V_{OUT}; output. */
  "V_{OUT}": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: PCAP; passive. */
  "PCAP": "5",
  /** Physical pin 6: RF_{IN}; input. */
  "RF_{IN}": "6",
}) {
  override schema = "RF:LTC5507ES6";
  override referencePrefix = "U";
}

/**
 * 0-2GHz, 15dB step attenuator, SOT-23-5
 *
 * KiCad symbol: `RF:MAADSS0008`. Reference prefix: `U`.
 * Footprint filters: SOT*23*5*.
 * @see http://cdn.macom.com/datasheets/maadss0008.pdf
 * Keywords: RF attenuator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAADSS0008 extends Component.withPins({
  /** Physical pin 1: RF1; passive. */
  "RF1": "1",
  /** Physical pin 2: GND; passive. */
  "GND": "2",
  /** Physical pin 3: RF2; passive. */
  "RF2": "3",
  /** Physical pin 4: V1; input. */
  "V1": "4",
  /** Physical pin 5: V2; input. */
  "V2": "5",
}) {
  override schema = "RF:MAADSS0008";
  override referencePrefix = "U";
}

/**
 * DC-2GHz, 35dB, Voltage Variable Absorptive Attenuator, SOIC-14
 *
 * KiCad symbol: `RF:MAAVSS0004`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://cdn.macom.com/datasheets/MAAVSS0004.pdf
 * Keywords: VVA.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAAVSS0004 extends Component.withPins({
  /** Physical pin 1: VC; input. */
  "VC": "1",
  /** Physical pin 2: GND; power_in. */
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
  /** Physical pin 8: RF2; passive. */
  "RF2": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: RF1; passive. */
  "RF1": "14",
}) {
  override schema = "RF:MAAVSS0004";
  override referencePrefix = "U";
}

/**
 * 1.1 GHz Prescaler, divide by 10 20 40 80, SOIC-8
 *
 * KiCad symbol: `RF:MC12080`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC12080-D.PDF
 * Keywords: prescaler frequency divider.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC12080 extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: SW1; input. */
  "SW1": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SW2; input. */
  "SW2": "6",
  /** Physical pin 7: SW3; input. */
  "SW3": "7",
  /** Physical pin 8: ~{IN}; input. */
  "~{IN}": "8",
}) {
  override schema = "RF:MC12080";
  override referencePrefix = "U";
}

/**
 * /2, /4, /8, 1.1 GHz Low Power Prescaler with Stand‐By Mode, SOIC-8
 *
 * KiCad symbol: `RF:MC12093D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC12093-D.PDF
 * Keywords: prescaler frequency divider.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC12093D extends Component.withPins({
  /** Physical pin 1: IN; input. */
  "IN": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: SW2; input. */
  "SW2": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SW1; input. */
  "SW1": "6",
  /** Physical pin 7: SB; input. */
  "SB": "7",
  /** Physical pin 8: ~{IN}; input. */
  "~{IN}": "8",
}) {
  override schema = "RF:MC12093D";
  override referencePrefix = "U";
}

/**
 * ASK/FSK Transmitter, 1.8-3.6V, 300-450MHz, +10dBm, MSOP-10
 *
 * KiCad symbol: `RF:MICRF112YMM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MICRF112.pdf
 * Keywords: ask fsk ism transmitter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MICRF112YMM extends Component.withPins({
  /** Physical pin 1: ASK; input. */
  "ASK": "1",
  /** Physical pin 2: XTLIN; input. */
  "XTLIN": "2",
  /** Physical pin 3: XTLOUT; output. */
  "XTLOUT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: XTAL_MOD; passive. */
  "XTAL_MOD": "5",
  /** Physical pin 6: FSK; input. */
  "FSK": "6",
  /** Physical pin 7: EN; input. */
  "EN": "7",
  /** Physical pin 8: VSSPA; power_in. */
  "VSSPA": "8",
  /** Physical pin 9: PAOUT; output. */
  "PAOUT": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "RF:MICRF112YMM";
  override referencePrefix = "U";
}

/**
 * ASK Receiver 3.0-3.6V, 300-450MHz, -110dBm, QSOP-16
 *
 * KiCad symbol: `RF:MICRF220AYQS`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/micrf220.pdf
 * Keywords: ask receiver.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MICRF220AYQS extends Component.withPins({
  /** Physical pin 1: RO1; input. */
  "RO1": "1",
  /** Physical pin 2: GNDRF; power_in. */
  "GNDRF_2": "2",
  /** Physical pin 3: ANT; input. */
  "ANT": "3",
  /** Physical pin 4: GNDRF; passive. */
  "GNDRF_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: SQ; input. */
  "SQ": "6",
  /** Physical pin 7: SEL0; input. */
  "SEL0": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: DO; output. */
  "DO": "10",
  /** Physical pin 11: SEL1; input. */
  "SEL1": "11",
  /** Physical pin 12: CTH; input. */
  "CTH": "12",
  /** Physical pin 13: CAGC; input. */
  "CAGC": "13",
  /** Physical pin 14: RSSI; output. */
  "RSSI": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC": "15",
  /** Physical pin 16: RO2; output. */
  "RO2": "16",
}) {
  override schema = "RF:MICRF220AYQS";
  override referencePrefix = "U";
}

/**
 * Ultra Low-Power, Integrated ISM Band Sub-GHz Transceiver, QFN-32
 *
 * KiCad symbol: `RF:MRF89XA`. Reference prefix: `U2`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70000622D.pdf
 * Keywords: RF Tx Rx.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MRF89XA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: VCORS; power_out. */
  "VCORS": "3",
  /** Physical pin 4: VCOTN; passive. */
  "VCOTN": "4",
  /** Physical pin 5: VCOTP; passive. */
  "VCOTP": "5",
  /** Physical pin 6: PLLN; passive. */
  "PLLN": "6",
  /** Physical pin 7: PLLP; passive. */
  "PLLP": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: OSC1; passive. */
  "OSC1": "10",
  /** Physical pin 11: OSC2; passive. */
  "OSC2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: RST/TEST8; input. */
  "RST/TEST8": "13",
  /** Physical pin 14: ~{CSCON}; input. */
  "~{CSCON}": "14",
  /** Physical pin 15: ~{CSDAT}; input. */
  "~{CSDAT}": "15",
  /** Physical pin 16: SDO; output. */
  "SDO": "16",
  /** Physical pin 17: SDI; input. */
  "SDI": "17",
  /** Physical pin 18: SCK; input. */
  "SCK": "18",
  /** Physical pin 19: CLKOUT; output. */
  "CLKOUT": "19",
  /** Physical pin 20: DATA; bidirectional. */
  "DATA": "20",
  /** Physical pin 21: IRQ0; output. */
  "IRQ0": "21",
  /** Physical pin 22: IRQ1; output. */
  "IRQ1": "22",
  /** Physical pin 23: PLOCK; output. */
  "PLOCK": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: V_{DD}; power_in. */
  "V_{DD}": "26",
  /** Physical pin 27: AVRS; power_out. */
  "AVRS": "27",
  /** Physical pin 28: DVRS; power_out. */
  "DVRS": "28",
  /** Physical pin 29: PARS; power_out. */
  "PARS": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: RFIO; bidirectional. */
  "RFIO": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "RF:MRF89XA";
  override referencePrefix = "U2";
}

/**
 * Ultra low power 2.4GHz RF Transceiver, QFN-20
 *
 * KiCad symbol: `RF:NRF24L01`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4*0.5mm*.
 * @see http://www.nordicsemi.com/eng/content/download/2730/34105/file/nRF24L01_Product_Specification_v2_0.pdf
 * Keywords: Low Power RF Transceiver.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NRF24L01 extends Component.withPins({
  /** Physical pin 1: CE; input. */
  "CE": "1",
  /** Physical pin 2: CSN; input. */
  "CSN": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: MOSI; input. */
  "MOSI": "4",
  /** Physical pin 5: MISO; output. */
  "MISO": "5",
  /** Physical pin 6: IRQ; output. */
  "IRQ": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: XC2; passive. */
  "XC2": "9",
  /** Physical pin 10: XC1; passive. */
  "XC1": "10",
  /** Physical pin 11: VDD_PA; power_out. */
  "VDD_PA": "11",
  /** Physical pin 12: ANT1; passive. */
  "ANT1": "12",
  /** Physical pin 13: ANT2; passive. */
  "ANT2": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: IREF; passive. */
  "IREF": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: DVDD; power_out. */
  "DVDD": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS_20": "20",
}) {
  override schema = "RF:NRF24L01";
  override referencePrefix = "U";
}

/**
 * Ultra low power 2.4GHz RF Transceiver, Carrier PCB
 *
 * KiCad symbol: `RF:NRF24L01_Breakout`. Reference prefix: `U`.
 * Footprint filters: nRF24L01*Breakout*.
 * @see http://www.nordicsemi.com/eng/content/download/2730/34105/file/nRF24L01_Product_Specification_v2_0.pdf
 * Keywords: Low Power RF Transceiver breakout carrier.
 * Default footprint: RF_Module:nRF24L01_Breakout.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NRF24L01_Breakout extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: CE; input. */
  "CE": "3",
  /** Physical pin 4: ~{CSN}; input. */
  "~{CSN}": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: MOSI; input. */
  "MOSI": "6",
  /** Physical pin 7: MISO; output. */
  "MISO": "7",
  /** Physical pin 8: IRQ; output. */
  "IRQ": "8",
}) {
  override schema = "RF:NRF24L01_Breakout";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 0dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-0DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_0DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-0DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 10dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-10DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_10DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-10DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 1dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-1DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_1DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-1DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 2dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-2DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_2DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-2DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 3dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-3DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_3DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-3DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 4dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-4DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_4DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-4DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 5dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-5DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_5DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-5DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 6dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-6DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_6DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-6DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 7dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-7DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_7DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-7DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 8dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-8DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_8DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-8DB";
  override referencePrefix = "U";
}

/**
 * 10GHz RF Attenuator, 50ohm Matched Impedance, 9dB Attenuation, PAT1220
 *
 * KiCad symbol: `RF:PAT1220-C-9DB`. Reference prefix: `U`.
 * Footprint filters: RF*Attenuator*Susumu*PAT1220*.
 * @see https://www.susumu.co.jp/common/pdf/n_catalog_partition16_en.pdf
 * Keywords: RF attenuator.
 * Default footprint: RF_Converter:RF_Attenuator_Susumu_PAT1220.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAT1220_C_9DB extends Component.withPins({
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "RF:PAT1220-C-9DB";
  override referencePrefix = "U";
}

/**
 * 4.8-5.9GHz Wilkinson Power Divider, Anaren 0805
 *
 * KiCad symbol: `RF:PD4859J5050S2HF`. Reference prefix: `U`.
 * Footprint filters: Anaren*0805*2012Metric*.
 * @see https://cdn.anaren.com/product-documents/Xinger/PowerDividers/PD4859J5050S2HF/PD4859J5050S2HF_DataSheet(Rev_D).pdf
 * Keywords: rf power divider wilkinson.
 * Default footprint: RF_Converter:Anaren_0805_2012Metric-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PD4859J5050S2HF extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: Input; input. */
  "Input": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: Output1; output. */
  "Output1": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: Output2; output. */
  "Output2": "6",
}) {
  override schema = "RF:PD4859J5050S2HF";
  override referencePrefix = "U";
}

/**
 * 3x Frequency Multiplier, output 300 to 450 MHz, 50 Ohm, Mini-Circuits TT1224
 *
 * KiCad symbol: `RF:RMK-3-451`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*TT1224*.
 * @see https://www.minicircuits.com/pdfs/RMK-3-451+.pdf
 * Keywords: frequency multiplier.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_TT1224_LandPatternPL-258_ClockwisePinNumbering.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RMK_3_451 extends Component.withPins({
  /** Physical pin 1: F_IN; input. */
  "F_IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: 3F_OUT; output. */
  "3F_OUT": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
}) {
  override schema = "RF:RMK-3-451";
  override referencePrefix = "U";
}

/**
 * 5x Frequency Multiplier, Output 37.5 to 52.5 MHz, 50 Ohm, Mini-Circuits TT1224
 *
 * KiCad symbol: `RF:RMK-5-51`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*TT1224*.
 * @see https://www.minicircuits.com/pdfs/RMK-5-51+.pdf
 * Keywords: frequency multiplier.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_TT1224_LandPatternPL-258_ClockwisePinNumbering.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RMK_5_51 extends Component.withPins({
  /** Physical pin 1: F_IN; input. */
  "F_IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: 5F_OUT; output. */
  "5F_OUT": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
}) {
  override schema = "RF:RMK-5-51";
  override referencePrefix = "U";
}

/**
 * 5 GHz, 26dBm Power Amplifier with Power Detector, QFN-20
 *
 * KiCad symbol: `RF:SE5004L`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.skyworksinc.com/-/media/SkyWorks/Documents/Products/601-700/SE5004L_202393B.pdf
 * Keywords: RF Power Amplifier.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SE5004L extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: RFIN; input. */
  "RFIN": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: VREF; input. */
  "VREF": "5",
  /** Physical pin 6: SP1; passive. */
  "SP1": "6",
  /** Physical pin 7: SP2; passive. */
  "SP2": "7",
  /** Physical pin 8: VCC2; power_in. */
  "VCC2_8": "8",
  /** Physical pin 9: VCC3; power_in. */
  "VCC3_9": "9",
  /** Physical pin 10: DET; output. */
  "DET": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: RFOUT; output. */
  "RFOUT": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: VCC3; power_in. */
  "VCC3_18": "18",
  /** Physical pin 19: VCC2; power_in. */
  "VCC2_19": "19",
  /** Physical pin 20: VCC1; power_in. */
  "VCC1": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "RF:SE5004L";
  override referencePrefix = "U";
}

/**
 * Low Power Integrated UHF Transceiver, QFN-24
 *
 * KiCad symbol: `RF:SX1231IMLTRT`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/44000000MDkO/lWPNMeJClEs8Zvyu7AlDlKSyZqhYdVpQzFLVfUp.EXs
 * Keywords: UHF Transceiver.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1231IMLTRT extends Component.withPins({
  /** Physical pin 1: VBAT1; power_in. */
  "VBAT1": "1",
  /** Physical pin 2: VR_ANA; power_out. */
  "VR_ANA": "2",
  /** Physical pin 3: VR_DIG; power_out. */
  "VR_DIG": "3",
  /** Physical pin 4: XTA; input. */
  "XTA": "4",
  /** Physical pin 5: XTB; input. */
  "XTB": "5",
  /** Physical pin 6: RESET; input. */
  "RESET": "6",
  /** Physical pin 7: DIO0; bidirectional. */
  "DIO0": "7",
  /** Physical pin 8: DIO1/DCLK; bidirectional. */
  "DIO1/DCLK": "8",
  /** Physical pin 9: DIO2/DATA; bidirectional. */
  "DIO2/DATA": "9",
  /** Physical pin 10: DIO3; bidirectional. */
  "DIO3": "10",
  /** Physical pin 11: DIO4; bidirectional. */
  "DIO4": "11",
  /** Physical pin 12: DIO5; bidirectional. */
  "DIO5": "12",
  /** Physical pin 13: VBAT2; power_in. */
  "VBAT2": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: SCK; input. */
  "SCK": "15",
  /** Physical pin 16: MISO; output. */
  "MISO": "16",
  /** Physical pin 17: MOSI; input. */
  "MOSI": "17",
  /** Physical pin 18: NSS; input. */
  "NSS": "18",
  /** Physical pin 19: RXTX; output. */
  "RXTX": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: RFIO; bidirectional. */
  "RFIO": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: PA_BOOST; output. */
  "PA_BOOST": "23",
  /** Physical pin 24: VR_PA; power_out. */
  "VR_PA": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "RF:SX1231IMLTRT";
  override referencePrefix = "U";
}

/**
 * 150 MHz to 960 MHz Low Power Long Range Transceiver, 22dBm output power, spreading factor from 5 to 12, LoRA, QFN-24
 *
 * KiCad symbol: `RF:SX1262IMLTRT`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://semtech.file.force.com/sfc/dist/version/download/?oid=00DE0000000JelG&ids=0682R00000IjPWSQA3&d=%2Fa%2F2R000000Un7F%2FyT.fKdAr9ZAo3cJLc4F2cBdUsMftpT2vsOICP7NmvMo
 * Keywords: low-power lora transceiver.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1262IMLTRT extends Component.withPins({
  /** Physical pin 1: VDD_IN; power_in. */
  "VDD_IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: XTA; bidirectional. */
  "XTA": "3",
  /** Physical pin 4: XTB; bidirectional. */
  "XTB": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: DIO3; bidirectional. */
  "DIO3": "6",
  /** Physical pin 7: VREG; power_out. */
  "VREG": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: DCC_SW; power_out. */
  "DCC_SW": "9",
  /** Physical pin 10: VBAT; power_in. */
  "VBAT": "10",
  /** Physical pin 11: VBAT_IO; power_in. */
  "VBAT_IO": "11",
  /** Physical pin 12: DIO2; bidirectional. */
  "DIO2": "12",
  /** Physical pin 13: DIO1; bidirectional. */
  "DIO1": "13",
  /** Physical pin 14: BUSY; output. */
  "BUSY": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: MISO; tri_state. */
  "MISO": "16",
  /** Physical pin 17: MOSI; input. */
  "MOSI": "17",
  /** Physical pin 18: SCK; input. */
  "SCK": "18",
  /** Physical pin 19: NSS; input. */
  "NSS": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: RFI_P; input. */
  "RFI_P": "21",
  /** Physical pin 22: RFI_N; input. */
  "RFI_N": "22",
  /** Physical pin 23: RFO; output. */
  "RFO": "23",
  /** Physical pin 24: VR_PA; power_out. */
  "VR_PA": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "RF:SX1262IMLTRT";
  override referencePrefix = "U";
}

/**
 * 150 MHz to 960 MHz Low Power Long Range Transceiver, 14dBm output power, spreading factor from 5 to 12, LoRA, QFN-24
 *
 * KiCad symbol: `RF:SX1261IMLTRT`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://semtech.file.force.com/sfc/dist/version/download/?oid=00DE0000000JelG&ids=0682R00000IjPWSQA3&d=%2Fa%2F2R000000Un7F%2FyT.fKdAr9ZAo3cJLc4F2cBdUsMftpT2vsOICP7NmvMo
 * Keywords: low-power lora transceiver.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1261IMLTRT extends Component.withPins({
  /** Physical pin 1: VDD_IN; power_in. */
  "VDD_IN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: XTA; bidirectional. */
  "XTA": "3",
  /** Physical pin 4: XTB; bidirectional. */
  "XTB": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: DIO3; bidirectional. */
  "DIO3": "6",
  /** Physical pin 7: VREG; power_out. */
  "VREG": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: DCC_SW; power_out. */
  "DCC_SW": "9",
  /** Physical pin 10: VBAT; power_in. */
  "VBAT": "10",
  /** Physical pin 11: VBAT_IO; power_in. */
  "VBAT_IO": "11",
  /** Physical pin 12: DIO2; bidirectional. */
  "DIO2": "12",
  /** Physical pin 13: DIO1; bidirectional. */
  "DIO1": "13",
  /** Physical pin 14: BUSY; output. */
  "BUSY": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: MISO; tri_state. */
  "MISO": "16",
  /** Physical pin 17: MOSI; input. */
  "MOSI": "17",
  /** Physical pin 18: SCK; input. */
  "SCK": "18",
  /** Physical pin 19: NSS; input. */
  "NSS": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: RFI_P; input. */
  "RFI_P": "21",
  /** Physical pin 22: RFI_N; input. */
  "RFI_N": "22",
  /** Physical pin 23: RFO; output. */
  "RFO": "23",
  /** Physical pin 24: VR_PA; power_out. */
  "VR_PA": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "RF:SX1261IMLTRT";
  override referencePrefix = "U";
}

/**
 * 860 MHz to 1020 MHz Low Power Long Range Transceiver, spreading factor from 6 to 12, LoRA, QFN-28
 *
 * KiCad symbol: `RF:SX1272`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/440000001NCE/v_VBhk1IolDgxwwnOpcS_vTFxPfSEPQbuneK3mWsXlU
 * Keywords: low-power lora transceiver.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.8x4.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1272 extends Component.withPins({
  /** Physical pin 1: VBAT1; power_in. */
  "VBAT1": "1",
  /** Physical pin 2: VR_ANA; power_in. */
  "VR_ANA": "2",
  /** Physical pin 3: VR_DIG; power_in. */
  "VR_DIG": "3",
  /** Physical pin 4: XTA; bidirectional. */
  "XTA": "4",
  /** Physical pin 5: XTB; bidirectional. */
  "XTB": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: DIO0; bidirectional. */
  "DIO0": "9",
  /** Physical pin 10: DIO1; bidirectional. */
  "DIO1": "10",
  /** Physical pin 11: DIO2; bidirectional. */
  "DIO2": "11",
  /** Physical pin 12: DIO3; bidirectional. */
  "DIO3": "12",
  /** Physical pin 13: DIO4; bidirectional. */
  "DIO4": "13",
  /** Physical pin 14: DIO5; bidirectional. */
  "DIO5": "14",
  /** Physical pin 15: VBAT2; power_in. */
  "VBAT2": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: SCK; input. */
  "SCK": "17",
  /** Physical pin 18: MISO; output. */
  "MISO": "18",
  /** Physical pin 19: MOSI; input. */
  "MOSI": "19",
  /** Physical pin 20: NSS; input. */
  "NSS": "20",
  /** Physical pin 21: RF_MOD; output. */
  "RF_MOD": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: RXTX; output. */
  "RXTX": "23",
  /** Physical pin 24: RFO; output. */
  "RFO": "24",
  /** Physical pin 25: RFI; input. */
  "RFI": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: PA_BOOST; power_out. */
  "PA_BOOST": "27",
  /** Physical pin 28: VR_PA; power_out. */
  "VR_PA": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "RF:SX1272";
  override referencePrefix = "U";
}

/**
 * 860 MHz to 1020 MHz Low Power Long Range Transceiver, spreading factor from 6 to 9, LoRA, QFN-28
 *
 * KiCad symbol: `RF:SX1273`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/440000001NCE/v_VBhk1IolDgxwwnOpcS_vTFxPfSEPQbuneK3mWsXlU
 * Keywords: low-power lora transceiver.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.8x4.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1273 extends Component.withPins({
  /** Physical pin 1: VBAT1; power_in. */
  "VBAT1": "1",
  /** Physical pin 2: VR_ANA; power_in. */
  "VR_ANA": "2",
  /** Physical pin 3: VR_DIG; power_in. */
  "VR_DIG": "3",
  /** Physical pin 4: XTA; bidirectional. */
  "XTA": "4",
  /** Physical pin 5: XTB; bidirectional. */
  "XTB": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: DIO0; bidirectional. */
  "DIO0": "9",
  /** Physical pin 10: DIO1; bidirectional. */
  "DIO1": "10",
  /** Physical pin 11: DIO2; bidirectional. */
  "DIO2": "11",
  /** Physical pin 12: DIO3; bidirectional. */
  "DIO3": "12",
  /** Physical pin 13: DIO4; bidirectional. */
  "DIO4": "13",
  /** Physical pin 14: DIO5; bidirectional. */
  "DIO5": "14",
  /** Physical pin 15: VBAT2; power_in. */
  "VBAT2": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: SCK; input. */
  "SCK": "17",
  /** Physical pin 18: MISO; output. */
  "MISO": "18",
  /** Physical pin 19: MOSI; input. */
  "MOSI": "19",
  /** Physical pin 20: NSS; input. */
  "NSS": "20",
  /** Physical pin 21: RF_MOD; output. */
  "RF_MOD": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: RXTX; output. */
  "RXTX": "23",
  /** Physical pin 24: RFO; output. */
  "RFO": "24",
  /** Physical pin 25: RFI; input. */
  "RFI": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: PA_BOOST; power_out. */
  "PA_BOOST": "27",
  /** Physical pin 28: VR_PA; power_out. */
  "VR_PA": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "RF:SX1273";
  override referencePrefix = "U";
}

/**
 * 137 MHz to 1020 MHz Low Power Long Range Transceiver, spreading factor from 6 to 12, LoRA, QFN-28
 *
 * KiCad symbol: `RF:SX1276`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R0000001Rbr/6EfVZUorrpoKFfvaF_Fkpgp5kzjiNyiAbqcpqh9qSjE
 * Keywords: low-power lora transceiver.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.8x4.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1276 extends Component.withPins({
  /** Physical pin 1: RFI_LF; input. */
  "RFI_LF": "1",
  /** Physical pin 2: VR_ANA; power_in. */
  "VR_ANA": "2",
  /** Physical pin 3: VBAT_ANA; power_in. */
  "VBAT_ANA": "3",
  /** Physical pin 4: VR_DIG; power_in. */
  "VR_DIG": "4",
  /** Physical pin 5: XTA; bidirectional. */
  "XTA": "5",
  /** Physical pin 6: XTB; bidirectional. */
  "XTB": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: DIO0; bidirectional. */
  "DIO0": "8",
  /** Physical pin 9: DIO1; bidirectional. */
  "DIO1": "9",
  /** Physical pin 10: DIO2; bidirectional. */
  "DIO2": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: DIO5; bidirectional. */
  "DIO5": "13",
  /** Physical pin 14: VBAT_DIG; power_in. */
  "VBAT_DIG": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: SCK; input. */
  "SCK": "16",
  /** Physical pin 17: MISO; output. */
  "MISO": "17",
  /** Physical pin 18: MOSI; input. */
  "MOSI": "18",
  /** Physical pin 19: NSS; input. */
  "NSS": "19",
  /** Physical pin 20: RXTX/RF_MOD; output. */
  "RXTX/RF_MOD": "20",
  /** Physical pin 21: RFI_HF; input. */
  "RFI_HF": "21",
  /** Physical pin 22: RFO_HF; output. */
  "RFO_HF": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VBAT_RF; power_in. */
  "VBAT_RF": "24",
  /** Physical pin 25: VR_PA; power_out. */
  "VR_PA": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: PA_BOOST; power_out. */
  "PA_BOOST": "27",
  /** Physical pin 28: RFO_LF; output. */
  "RFO_LF": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "RF:SX1276";
  override referencePrefix = "U";
}

/**
 * 137 MHz to 525 MHz Low Power Long Range Transceiver, spreading factor from 6 to 12, LoRA, QFN-28
 *
 * KiCad symbol: `RF:SX1277`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R0000001Rbr/6EfVZUorrpoKFfvaF_Fkpgp5kzjiNyiAbqcpqh9qSjE
 * Keywords: low-power lora transceiver.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.8x4.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1277 extends Component.withPins({
  /** Physical pin 1: RFI_LF; input. */
  "RFI_LF": "1",
  /** Physical pin 2: VR_ANA; power_in. */
  "VR_ANA": "2",
  /** Physical pin 3: VBAT_ANA; power_in. */
  "VBAT_ANA": "3",
  /** Physical pin 4: VR_DIG; power_in. */
  "VR_DIG": "4",
  /** Physical pin 5: XTA; bidirectional. */
  "XTA": "5",
  /** Physical pin 6: XTB; bidirectional. */
  "XTB": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: DIO0; bidirectional. */
  "DIO0": "8",
  /** Physical pin 9: DIO1; bidirectional. */
  "DIO1": "9",
  /** Physical pin 10: DIO2; bidirectional. */
  "DIO2": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: DIO5; bidirectional. */
  "DIO5": "13",
  /** Physical pin 14: VBAT_DIG; power_in. */
  "VBAT_DIG": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: SCK; input. */
  "SCK": "16",
  /** Physical pin 17: MISO; output. */
  "MISO": "17",
  /** Physical pin 18: MOSI; input. */
  "MOSI": "18",
  /** Physical pin 19: NSS; input. */
  "NSS": "19",
  /** Physical pin 20: RXTX/RF_MOD; output. */
  "RXTX/RF_MOD": "20",
  /** Physical pin 21: RFI_HF; input. */
  "RFI_HF": "21",
  /** Physical pin 22: RFO_HF; output. */
  "RFO_HF": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VBAT_RF; power_in. */
  "VBAT_RF": "24",
  /** Physical pin 25: VR_PA; power_out. */
  "VR_PA": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: PA_BOOST; power_out. */
  "PA_BOOST": "27",
  /** Physical pin 28: RFO_LF; output. */
  "RFO_LF": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "RF:SX1277";
  override referencePrefix = "U";
}

/**
 * 137 MHz to 525 MHz Low Power Long Range Transceiver, spreading factor from 6 to 12, LoRA, QFN-28
 *
 * KiCad symbol: `RF:SX1278`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R0000001Rbr/6EfVZUorrpoKFfvaF_Fkpgp5kzjiNyiAbqcpqh9qSjE
 * Keywords: low-power lora transceiver.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.8x4.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1278 extends Component.withPins({
  /** Physical pin 1: RFI_LF; input. */
  "RFI_LF": "1",
  /** Physical pin 2: VR_ANA; power_in. */
  "VR_ANA": "2",
  /** Physical pin 3: VBAT_ANA; power_in. */
  "VBAT_ANA": "3",
  /** Physical pin 4: VR_DIG; power_in. */
  "VR_DIG": "4",
  /** Physical pin 5: XTA; bidirectional. */
  "XTA": "5",
  /** Physical pin 6: XTB; bidirectional. */
  "XTB": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: DIO0; bidirectional. */
  "DIO0": "8",
  /** Physical pin 9: DIO1; bidirectional. */
  "DIO1": "9",
  /** Physical pin 10: DIO2; bidirectional. */
  "DIO2": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: DIO5; bidirectional. */
  "DIO5": "13",
  /** Physical pin 14: VBAT_DIG; power_in. */
  "VBAT_DIG": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: SCK; input. */
  "SCK": "16",
  /** Physical pin 17: MISO; output. */
  "MISO": "17",
  /** Physical pin 18: MOSI; input. */
  "MOSI": "18",
  /** Physical pin 19: NSS; input. */
  "NSS": "19",
  /** Physical pin 20: RXTX/RF_MOD; output. */
  "RXTX/RF_MOD": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VBAT_RF; power_in. */
  "VBAT_RF": "24",
  /** Physical pin 25: VR_PA; power_out. */
  "VR_PA": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: PA_BOOST; power_out. */
  "PA_BOOST": "27",
  /** Physical pin 28: RFO_LF; output. */
  "RFO_LF": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "RF:SX1278";
  override referencePrefix = "U";
}

/**
 * 137 MHz to 960 MHz Low Power Long Range Transceiver, spreading factor from 6 to 12, LoRA, QFN-28
 *
 * KiCad symbol: `RF:SX1279`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R0000001Rbr/6EfVZUorrpoKFfvaF_Fkpgp5kzjiNyiAbqcpqh9qSjE
 * Keywords: low-power lora transceiver.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.8x4.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SX1279 extends Component.withPins({
  /** Physical pin 1: RFI_LF; input. */
  "RFI_LF": "1",
  /** Physical pin 2: VR_ANA; power_in. */
  "VR_ANA": "2",
  /** Physical pin 3: VBAT_ANA; power_in. */
  "VBAT_ANA": "3",
  /** Physical pin 4: VR_DIG; power_in. */
  "VR_DIG": "4",
  /** Physical pin 5: XTA; bidirectional. */
  "XTA": "5",
  /** Physical pin 6: XTB; bidirectional. */
  "XTB": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: DIO0; bidirectional. */
  "DIO0": "8",
  /** Physical pin 9: DIO1; bidirectional. */
  "DIO1": "9",
  /** Physical pin 10: DIO2; bidirectional. */
  "DIO2": "10",
  /** Physical pin 11: DIO3; bidirectional. */
  "DIO3": "11",
  /** Physical pin 12: DIO4; bidirectional. */
  "DIO4": "12",
  /** Physical pin 13: DIO5; bidirectional. */
  "DIO5": "13",
  /** Physical pin 14: VBAT_DIG; power_in. */
  "VBAT_DIG": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: SCK; input. */
  "SCK": "16",
  /** Physical pin 17: MISO; output. */
  "MISO": "17",
  /** Physical pin 18: MOSI; input. */
  "MOSI": "18",
  /** Physical pin 19: NSS; input. */
  "NSS": "19",
  /** Physical pin 20: RXTX/RF_MOD; output. */
  "RXTX/RF_MOD": "20",
  /** Physical pin 21: RFI_HF; input. */
  "RFI_HF": "21",
  /** Physical pin 22: RFO_HF; output. */
  "RFO_HF": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VBAT_RF; power_in. */
  "VBAT_RF": "24",
  /** Physical pin 25: VR_PA; power_out. */
  "VR_PA": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: PA_BOOST; power_out. */
  "PA_BOOST": "27",
  /** Physical pin 28: RFO_LF; output. */
  "RFO_LF": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "RF:SX1279";
  override referencePrefix = "U";
}

/**
 * Phase Detector, 10 to 200 MHz, 50 Ohm, Mini-Circuits TTT167
 *
 * KiCad symbol: `RF:SYPD-2`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*TTT167*.
 * @see https://www.minicircuits.com/pdfs/SYPD-2.pdf
 * Keywords: phase detector.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_TTT167_LandPatternPL-079.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SYPD_2 extends Component.withPins({
  /** Physical pin 1: RF1; input. */
  "RF1": "1",
  /** Physical pin 2: RF2; input. */
  "RF2": "2",
  /** Physical pin 3: DC; output. */
  "DC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
}) {
  override schema = "RF:SYPD-2";
  override referencePrefix = "U";
}

/**
 * Phase Detector, 1 to 100 MHz, 50 Ohm, Mini-Circuits TTT167
 *
 * KiCad symbol: `RF:SYPD-1`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*TTT167*.
 * @see https://www.minicircuits.com/pdfs/SYPD-1+.pdf
 * Keywords: Phase Detector.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_TTT167_LandPatternPL-079.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SYPD_1 extends Component.withPins({
  /** Physical pin 1: RF1; input. */
  "RF1": "1",
  /** Physical pin 2: RF2; input. */
  "RF2": "2",
  /** Physical pin 3: DC; output. */
  "DC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
}) {
  override schema = "RF:SYPD-1";
  override referencePrefix = "U";
}

/**
 * Phase Detector, 400 to 500 MHz, 50 Ohm, Mini-Circuits TTT167
 *
 * KiCad symbol: `RF:SYPD-52`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*TTT167*.
 * @see https://www.minicircuits.com/pdfs/SYPD-52+.pdf
 * Keywords: Phase Detector.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_TTT167_LandPatternPL-079.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SYPD_52 extends Component.withPins({
  /** Physical pin 1: RF1; input. */
  "RF1": "1",
  /** Physical pin 2: RF2; input. */
  "RF2": "2",
  /** Physical pin 3: DC; output. */
  "DC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
}) {
  override schema = "RF:SYPD-52";
  override referencePrefix = "U";
}

/**
 * Crystal-Less FSK/OOK RF Transmitter, -13dBm to +10dBm, 27-960 MHz, MSOP-10
 *
 * KiCad symbol: `RF:Si4012-C1001xT`. Reference prefix: `U`.
 * Footprint filters: *MSOP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si4012.pdf
 * Keywords: sub-GHz-ISM-band radio CMOS SMBus.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4012_C1001xT extends Component.withPins({
  /** Physical pin 1: XTAL; input. */
  "XTAL": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: TXM; output. */
  "TXM": "3",
  /** Physical pin 4: TXP; output. */
  "TXP": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: LED; output. */
  "LED": "6",
  /** Physical pin 7: ~{IRQ}; open_collector. */
  "~{IRQ}": "7",
  /** Physical pin 8: SDN; input. */
  "SDN": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
}) {
  override schema = "RF:Si4012-C1001xT";
  override referencePrefix = "U";
}

/**
 * High-Performance, Low-Current Sub-GHz Transceiver, +13dBm, Major bands 142-1050 MHz, QFN-20
 *
 * KiCad symbol: `RF:Si4460`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si4464-63-61-60.pdf
 * Keywords: transceiver sub-ghz radio ism.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4460 extends Component.withPins({
  /** Physical pin 1: SDN; input. */
  "SDN": "1",
  /** Physical pin 2: RXp; input. */
  "RXp": "2",
  /** Physical pin 3: RXn; input. */
  "RXn": "3",
  /** Physical pin 4: TX; output. */
  "TX": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: TXRAMP; output. */
  "TXRAMP": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: GPIO0; bidirectional. */
  "GPIO0": "9",
  /** Physical pin 10: GPIO1; bidirectional. */
  "GPIO1": "10",
  /** Physical pin 11: ~{IRQ}; open_collector. */
  "~{IRQ}": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
  /** Physical pin 15: ~{SEL}; input. */
  "~{SEL}": "15",
  /** Physical pin 16: XOUT; passive. */
  "XOUT": "16",
  /** Physical pin 17: XIN; input. */
  "XIN": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: GPIO2; bidirectional. */
  "GPIO2": "19",
  /** Physical pin 20: GPIO3; bidirectional. */
  "GPIO3": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "RF:Si4460";
  override referencePrefix = "U";
}

/**
 * High-Performance, Low-Current Sub-GHz Transceiver, +16dBm, Major bands 142-1050 MHz, QFN-20
 *
 * KiCad symbol: `RF:Si4461`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si4464-63-61-60.pdf
 * Keywords: transceiver sub-ghz radio ism.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4461 extends Component.withPins({
  /** Physical pin 1: SDN; input. */
  "SDN": "1",
  /** Physical pin 2: RXp; input. */
  "RXp": "2",
  /** Physical pin 3: RXn; input. */
  "RXn": "3",
  /** Physical pin 4: TX; output. */
  "TX": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: TXRAMP; output. */
  "TXRAMP": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: GPIO0; bidirectional. */
  "GPIO0": "9",
  /** Physical pin 10: GPIO1; bidirectional. */
  "GPIO1": "10",
  /** Physical pin 11: ~{IRQ}; open_collector. */
  "~{IRQ}": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
  /** Physical pin 15: ~{SEL}; input. */
  "~{SEL}": "15",
  /** Physical pin 16: XOUT; passive. */
  "XOUT": "16",
  /** Physical pin 17: XIN; input. */
  "XIN": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: GPIO2; bidirectional. */
  "GPIO2": "19",
  /** Physical pin 20: GPIO3; bidirectional. */
  "GPIO3": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "RF:Si4461";
  override referencePrefix = "U";
}

/**
 * High-Performance, Low-Current Sub-GHz Transceiver, +20dBm, Major bands 142-1050 MHz, QFN-20
 *
 * KiCad symbol: `RF:Si4463`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si4464-63-61-60.pdf
 * Keywords: transceiver sub-ghz radio ism.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4463 extends Component.withPins({
  /** Physical pin 1: SDN; input. */
  "SDN": "1",
  /** Physical pin 2: RXp; input. */
  "RXp": "2",
  /** Physical pin 3: RXn; input. */
  "RXn": "3",
  /** Physical pin 4: TX; output. */
  "TX": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: TXRAMP; output. */
  "TXRAMP": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: GPIO0; bidirectional. */
  "GPIO0": "9",
  /** Physical pin 10: GPIO1; bidirectional. */
  "GPIO1": "10",
  /** Physical pin 11: ~{IRQ}; open_collector. */
  "~{IRQ}": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
  /** Physical pin 15: ~{SEL}; input. */
  "~{SEL}": "15",
  /** Physical pin 16: XOUT; passive. */
  "XOUT": "16",
  /** Physical pin 17: XIN; input. */
  "XIN": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: GPIO2; bidirectional. */
  "GPIO2": "19",
  /** Physical pin 20: GPIO3; bidirectional. */
  "GPIO3": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "RF:Si4463";
  override referencePrefix = "U";
}

/**
 * High-Performance, Low-Current Sub-GHz Transceiver, +20dBm, Banded 119-960 MHz, QFN-20
 *
 * KiCad symbol: `RF:Si4464`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si4464-63-61-60.pdf
 * Keywords: transceiver sub-ghz radio ism.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si4464 extends Component.withPins({
  /** Physical pin 1: SDN; input. */
  "SDN": "1",
  /** Physical pin 2: RXp; input. */
  "RXp": "2",
  /** Physical pin 3: RXn; input. */
  "RXn": "3",
  /** Physical pin 4: TX; output. */
  "TX": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: TXRAMP; output. */
  "TXRAMP": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: GPIO0; bidirectional. */
  "GPIO0": "9",
  /** Physical pin 10: GPIO1; bidirectional. */
  "GPIO1": "10",
  /** Physical pin 11: ~{IRQ}; open_collector. */
  "~{IRQ}": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
  /** Physical pin 15: ~{SEL}; input. */
  "~{SEL}": "15",
  /** Physical pin 16: XOUT; passive. */
  "XOUT": "16",
  /** Physical pin 17: XIN; input. */
  "XIN": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: GPIO2; bidirectional. */
  "GPIO2": "19",
  /** Physical pin 20: GPIO3; bidirectional. */
  "GPIO3": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "RF:Si4464";
  override referencePrefix = "U";
}

/**
 * Power splitter combiner, 5 to 1000 MHz, 2 way 0-degree, 50 ohm, Mini-Circuits DB1627
 *
 * KiCad symbol: `RF:TCP-2-10X`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*DB1627*.
 * @see https://www.minicircuits.com/pdfs/TCP-2-10X+.pdf
 * Keywords: splitter combiner.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_DB1627.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCP_2_10X extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND": "1",
  /** Physical pin 2: CON; passive. */
  "CON_2": "2",
  /** Physical pin 3: PORT1; passive. */
  "PORT1": "3",
  /** Physical pin 4: PORT2; passive. */
  "PORT2": "4",
  /** Physical pin 5: CON; passive. */
  "CON_5": "5",
  /** Physical pin 6: SUM; passive. */
  "SUM": "6",
}) {
  override schema = "RF:TCP-2-10X";
  override referencePrefix = "U";
}

/**
 * nRF24L01+, Ultra low power 2.4GHz RF Transceiver, QFN20 4x4mm
 *
 * KiCad symbol: `RF:nRF24L01P`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4*0.5mm*.
 * @see http://www.nordicsemi.com/eng/content/download/2726/34069/file/nRF24L01P_Product_Specification_1_0.pdf
 * Keywords: Low Power RF Transceiver.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class nRF24L01P extends Component.withPins({
  /** Physical pin 1: CE; input. */
  "CE": "1",
  /** Physical pin 2: CSN; input. */
  "CSN": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: MOSI; input. */
  "MOSI": "4",
  /** Physical pin 5: MISO; output. */
  "MISO": "5",
  /** Physical pin 6: IRQ; output. */
  "IRQ": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: XC2; passive. */
  "XC2": "9",
  /** Physical pin 10: XC1; passive. */
  "XC1": "10",
  /** Physical pin 11: VDD_PA; power_out. */
  "VDD_PA": "11",
  /** Physical pin 12: ANT1; passive. */
  "ANT1": "12",
  /** Physical pin 13: ANT2; passive. */
  "ANT2": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: IREF; passive. */
  "IREF": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: DVDD; power_out. */
  "DVDD": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS_20": "20",
}) {
  override schema = "RF:nRF24L01P";
  override referencePrefix = "U";
}

