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
 */
export class _0900PC15J0013 extends Component.withPins({
  "LNA_N": "1",
  "LNA_P": "2",
  "TRX": "3",
  "PA": "4",
  "GND_5": "5",
  "GND_6": "6",
  "ANT": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LNA_N: "passive", LNA_P: "passive", TRX: "passive", PA: "passive", GND_5: "power_in", GND_6: "passive", ANT: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD8302xRU extends Component.withPins({
  "INPA": "2",
  "OFSA": "3",
  "VPOS": "4",
  "OFSB": "5",
  "INPB": "6",
  "PFLT": "8",
  "VPHS": "9",
  "PSET": "10",
  "VREF": "11",
  "MSET": "12",
  "VMAG": "13",
  "MFLT": "14",
  "COMM": "[1,7]",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INPA: "input", OFSA: "input", VPOS: "power_in", OFSB: "input", INPB: "input", PFLT: "input", VPHS: "output", PSET: "input", VREF: "output", MSET: "input", VMAG: "output", MFLT: "input", COMM: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADC_10_1R extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "CPL": "3",
  "NC": "4",
  "GND_5": "5",
  "OUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND_2: "power_in", CPL: "output", NC: "no_connect", GND_5: "passive", OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class ADCH_80 extends Component.withPins({
  "NC_1": "1",
  "RF&DC": "2",
  "NC_3": "3",
  "NC_4": "4",
  "DC": "5",
  "NC_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", "RF&DC": "passive", NC_3: "no_connect", NC_4: "no_connect", DC: "passive", NC_6: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ADCH_80A extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "DC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "RF&DC": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", DC: "passive", NC_4: "no_connect", NC_5: "no_connect", "RF&DC": "passive", ...opts.pinTypes } });
  }
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
 */
export class ADL5904 extends Component.withPins({
  "RFIN": "1",
  "DNC_2": "2",
  "VCAL": "3",
  "DECL": "4",
  "VPOS_5": "5",
  "DNC_6": "6",
  "VPOS_7": "7",
  "DNC_8": "8",
  "CRMS": "9",
  "VRMS": "10",
  "GND_11": "11",
  "Q": "12",
  "~{Q}": "13",
  "ENBL": "14",
  "RST": "15",
  "VIN-": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RFIN: "input", DNC_2: "no_connect", VCAL: "output", DECL: "passive", VPOS_5: "power_in", DNC_6: "no_connect", VPOS_7: "passive", DNC_8: "no_connect", CRMS: "passive", VRMS: "output", GND_11: "power_in", Q: "output", "~{Q}": "output", ENBL: "input", RST: "input", "VIN-": "input", GND_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADP_2_1W extends Component.withPins({
  "SUM": "1",
  "NC_2": "2",
  "PORT1": "3",
  "PORT2": "4",
  "NC_5": "5",
  "GND": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SUM: "passive", NC_2: "no_connect", PORT1: "passive", PORT2: "passive", NC_5: "no_connect", GND: "passive", ...opts.pinTypes } });
  }
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
 */
export class AMK_2_13 extends Component.withPins({
  "GND_1": "1",
  "NC": "2",
  "F_IN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "2F_OUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", NC: "no_connect", F_IN: "input", GND_4: "passive", GND_5: "passive", "2F_OUT": "output", ...opts.pinTypes } });
  }
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
 */
export class AX5043 extends Component.withPins({
  "VDD_ANA_1": "1",
  "GND_2": "2",
  "ANTP": "3",
  "ANTN": "4",
  "ANTP1": "5",
  "GND_6": "6",
  "VDD_ANA_7": "7",
  "FILT": "8",
  "L2": "9",
  "L1": "10",
  "DATA": "11",
  "DCLK": "12",
  "SYSCLK": "13",
  "SEL": "14",
  "CLK": "15",
  "MISO": "16",
  "MOSI": "17",
  "NC_18": "18",
  "IRQ": "19",
  "PWRAMP": "20",
  "ANTSEL": "21",
  "NC_22": "22",
  "VDD_IO": "23",
  "NC_24": "24",
  "GPADC1": "25",
  "GPADC2": "26",
  "CLK16N": "27",
  "CLK16P": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_ANA_1: "power_out", GND_2: "power_in", ANTP: "bidirectional", ANTN: "bidirectional", ANTP1: "output", GND_6: "passive", VDD_ANA_7: "power_out", FILT: "input", L2: "passive", L1: "passive", DATA: "bidirectional", DCLK: "bidirectional", SYSCLK: "bidirectional", SEL: "input", CLK: "input", MISO: "output", MOSI: "input", NC_18: "no_connect", IRQ: "output", PWRAMP: "bidirectional", ANTSEL: "bidirectional", NC_22: "no_connect", VDD_IO: "power_in", NC_24: "no_connect", GPADC1: "input", GPADC2: "input", CLK16N: "input", CLK16P: "input", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class CC1000 extends Component.withPins({
  "AVDD_1": "1",
  "AGND_2": "2",
  "RF_IN": "3",
  "RF_OUT": "4",
  "AVDD_5": "5",
  "AGND_6": "6",
  "AGND_7": "7",
  "AGND_8": "8",
  "AVDD_9": "9",
  "L1": "10",
  "L2": "11",
  "CHP_OUT": "12",
  "R_BIAS": "13",
  "AGND_14": "14",
  "AVDD_15": "15",
  "AGND_16": "16",
  "XOSC_Q2": "17",
  "XOSC_Q1": "18",
  "AGND_19": "19",
  "DGND_20": "20",
  "DVDD": "21",
  "DGND_22": "22",
  "DIO": "23",
  "DCLK": "24",
  "PCLK": "25",
  "PDATA": "26",
  "PALE": "27",
  "RSSI/IF": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AVDD_1: "power_in", AGND_2: "power_in", RF_IN: "passive", RF_OUT: "passive", AVDD_5: "power_in", AGND_6: "power_in", AGND_7: "power_in", AGND_8: "power_in", AVDD_9: "power_in", L1: "passive", L2: "passive", CHP_OUT: "passive", R_BIAS: "passive", AGND_14: "power_in", AVDD_15: "power_in", AGND_16: "power_in", XOSC_Q2: "passive", XOSC_Q1: "passive", AGND_19: "power_in", DGND_20: "power_in", DVDD: "power_in", DGND_22: "power_in", DIO: "bidirectional", DCLK: "output", PCLK: "input", PDATA: "bidirectional", PALE: "input", "RSSI/IF": "passive", ...opts.pinTypes } });
  }
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
 */
export class CC1200 extends Component.withPins({
  "VDD_GUARD": "1",
  "~{RESET}": "2",
  "GPIO3": "3",
  "GPIO2": "4",
  "DVDD_5": "5",
  "DCPL": "6",
  "SI": "7",
  "SCLK": "8",
  "SO(GPIO1)": "9",
  "GPIO0": "10",
  "~{CS}": "11",
  "DVDD_12": "12",
  "AVDD_IF": "13",
  "RBIAS": "14",
  "AVDD_RF": "15",
  "PA": "17",
  "TRX_SW": "18",
  "LNA_P": "19",
  "LNA_N": "20",
  "DCPL_VCO": "21",
  "AVDD_SYNTH1": "22",
  "LPF0": "23",
  "LPF1": "24",
  "AVDD_PFD_CHP": "25",
  "DCPL_PFD_CHP": "26",
  "AVDD_SYNTH2": "27",
  "AVDD_XOSC": "28",
  "DCPL_XOSC": "29",
  "XOSC_Q1": "30",
  "XOSC_Q2": "31",
  "EXT_XOSC": "32",
  "GND_EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_GUARD: "power_in", "~{RESET}": "input", GPIO3: "bidirectional", GPIO2: "bidirectional", DVDD_5: "power_in", DCPL: "power_out", SI: "input", SCLK: "input", "SO(GPIO1)": "bidirectional", GPIO0: "bidirectional", "~{CS}": "input", DVDD_12: "power_in", AVDD_IF: "power_in", RBIAS: "passive", AVDD_RF: "power_in", PA: "passive", TRX_SW: "passive", LNA_P: "passive", LNA_N: "passive", DCPL_VCO: "power_out", AVDD_SYNTH1: "power_in", LPF0: "passive", LPF1: "passive", AVDD_PFD_CHP: "power_in", DCPL_PFD_CHP: "power_out", AVDD_SYNTH2: "power_in", AVDD_XOSC: "power_in", DCPL_XOSC: "power_out", XOSC_Q1: "passive", XOSC_Q2: "passive", EXT_XOSC: "input", GND_EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CC2500 extends Component.withPins({
  "SCLK": "1",
  "SO(GDO1)": "2",
  "GDO2": "3",
  "DVDD": "4",
  "DCOUPL": "5",
  "GDO0(ATEST)": "6",
  "~{CS}": "7",
  "XOSC_Q1": "8",
  "AVDD_9": "9",
  "XOSC_Q2": "10",
  "AVDD_11": "11",
  "RF_P": "12",
  "RF_N": "13",
  "AVDD_14": "14",
  "AVDD_15": "15",
  "GND_16": "16",
  "RBIAS": "17",
  "VDD_GUARD": "18",
  "GND_19": "19",
  "SI": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCLK: "input", "SO(GDO1)": "bidirectional", GDO2: "bidirectional", DVDD: "power_in", DCOUPL: "power_out", "GDO0(ATEST)": "bidirectional", "~{CS}": "input", XOSC_Q1: "passive", AVDD_9: "power_in", XOSC_Q2: "passive", AVDD_11: "passive", RF_P: "passive", RF_N: "passive", AVDD_14: "passive", AVDD_15: "passive", GND_16: "power_in", RBIAS: "passive", VDD_GUARD: "power_in", GND_19: "passive", SI: "input", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class DC4759J5020AHF_1 extends Component.withPins({
  "Direct": "1",
  "Isolated": "2",
  "GND_3": "3",
  "GND_4": "4",
  "Coupled": "5",
  "Input": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Direct: "output", Isolated: "output", GND_3: "power_in", GND_4: "passive", Coupled: "output", Input: "input", ...opts.pinTypes } });
  }
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
 */
export class DC4759J5020AHF_2 extends Component.withPins({
  "Input": "1",
  "Coupled": "2",
  "GND_3": "3",
  "GND_4": "4",
  "Isolated": "5",
  "Direct": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Input: "input", Coupled: "output", GND_3: "power_in", GND_4: "passive", Isolated: "output", Direct: "output", ...opts.pinTypes } });
  }
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
 */
export class DW1000 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "EXTCLK/XTAL1": "3",
  "XTAL2": "4",
  "VREF": "5",
  "VDDMS": "6",
  "VDDIF": "7",
  "CLKTUNE": "8",
  "VDDCLK": "9",
  "VDDSYN": "10",
  "VDDVCO": "11",
  "VCOTUNE": "12",
  "NC_13": "13",
  "NC_14": "14",
  "VDDLNA": "15",
  "RF_P": "16",
  "RF_N": "17",
  "VDDPA1": "18",
  "VDDPA2": "19",
  "VDDREG": "20",
  "EXTON": "21",
  "FORCEON": "22",
  "WAKEUP": "23",
  "~{SPICS}": "24",
  "VDDAON": "25",
  "VDDLDOD": "26",
  "~{RST}": "27",
  "VDDIOA": "28",
  "SYNC/GPIO7": "29",
  "GPIO6/EXTRXE/SPIPHA": "30",
  "VDDIO_31": "31",
  "VSSIO_32": "32",
  "GPIO5/EXTTXE/SPIPOL": "33",
  "GPIO4/EXTPA": "34",
  "GPIO3/TXLED": "35",
  "GPIO2/RXLED": "36",
  "GPIO1/SFDLED": "37",
  "GPIO0/RXOKLED": "38",
  "SPIMOSI": "39",
  "SPIMISO": "40",
  "SPICLK": "41",
  "VDDIO_42": "42",
  "VSSIO_43": "43",
  "VDDDIG": "44",
  "IRQ/GPIO8": "45",
  "TESTMODE": "46",
  "VDDBATT": "47",
  "VDDLDOA": "48",
  "GND": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", "EXTCLK/XTAL1": "input", XTAL2: "input", VREF: "bidirectional", VDDMS: "power_out", VDDIF: "power_out", CLKTUNE: "bidirectional", VDDCLK: "power_out", VDDSYN: "power_out", VDDVCO: "power_out", VCOTUNE: "bidirectional", NC_13: "no_connect", NC_14: "no_connect", VDDLNA: "power_in", RF_P: "bidirectional", RF_N: "bidirectional", VDDPA1: "power_in", VDDPA2: "power_in", VDDREG: "power_out", EXTON: "output", FORCEON: "input", WAKEUP: "input", "~{SPICS}": "input", VDDAON: "power_in", VDDLDOD: "power_in", "~{RST}": "bidirectional", VDDIOA: "power_in", "SYNC/GPIO7": "bidirectional", "GPIO6/EXTRXE/SPIPHA": "bidirectional", VDDIO_31: "power_out", VSSIO_32: "power_in", "GPIO5/EXTTXE/SPIPOL": "bidirectional", "GPIO4/EXTPA": "bidirectional", "GPIO3/TXLED": "bidirectional", "GPIO2/RXLED": "bidirectional", "GPIO1/SFDLED": "bidirectional", "GPIO0/RXOKLED": "bidirectional", SPIMOSI: "input", SPIMISO: "output", SPICLK: "input", VDDIO_42: "power_out", VSSIO_43: "passive", VDDDIG: "power_out", "IRQ/GPIO8": "bidirectional", TESTMODE: "input", VDDBATT: "power_in", VDDLDOA: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class F115 extends Component.withPins({
  "PAOUT": "1",
  "VSS": "2",
  "VDD": "3",
  "XTLOUT": "4",
  "XTLIN": "5",
  "ASK": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PAOUT: "output", VSS: "power_in", VDD: "power_in", XTLOUT: "output", XTLIN: "input", ASK: "input", ...opts.pinTypes } });
  }
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
 */
export class F113 extends Component.withPins({
  "PAOUT": "1",
  "VSS": "2",
  "VDD": "3",
  "XTLOUT": "4",
  "XTLIN": "5",
  "ASK": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PAOUT: "output", VSS: "power_in", VDD: "power_in", XTLOUT: "output", XTLIN: "input", ASK: "input", ...opts.pinTypes } });
  }
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
 */
export class F117 extends Component.withPins({
  "PAOUT": "1",
  "VSS": "2",
  "VDD": "3",
  "XTLOUT": "4",
  "XTLIN": "5",
  "ASK": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PAOUT: "output", VSS: "power_in", VDD: "power_in", XTLOUT: "output", XTLIN: "input", ASK: "input", ...opts.pinTypes } });
  }
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
 */
export class HMC394LP4 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "GND_6": "6",
  "VCC_7": "7",
  "VCC_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "~{IN}": "13",
  "IN": "14",
  "GND_15": "15",
  "OUT": "16",
  "~{OUT}": "17",
  "GND_18": "18",
  "GND_19": "19",
  "GND_20": "20",
  "GND_21": "21",
  "GND_22": "22",
  "VCC_23": "23",
  "VCC_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", GND_6: "power_in", VCC_7: "power_in", VCC_8: "power_in", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", "~{IN}": "input", IN: "input", GND_15: "passive", OUT: "output", "~{OUT}": "output", GND_18: "passive", GND_19: "passive", GND_20: "passive", GND_21: "passive", GND_22: "passive", VCC_23: "power_in", VCC_24: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class HMC431 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "GND_15": "15",
  "RFOUT": "16",
  "NC_17": "17",
  "NC_18": "18",
  "NC_19": "19",
  "VCC": "20",
  "NC_21": "21",
  "VTUNE": "22",
  "NC_23": "23",
  "NC_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "passive", NC_2: "passive", NC_3: "passive", NC_4: "passive", NC_5: "passive", NC_6: "passive", NC_7: "passive", NC_8: "passive", NC_9: "passive", NC_10: "passive", NC_11: "passive", NC_12: "passive", NC_13: "passive", NC_14: "passive", GND_15: "power_in", RFOUT: "output", NC_17: "passive", NC_18: "passive", NC_19: "passive", VCC: "power_in", NC_21: "passive", VTUNE: "input", NC_23: "passive", NC_24: "passive", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class LAT_3 extends Component.withPins({
  "GND_1": "1",
  "OUT": "2",
  "GND_3": "3",
  "IN": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", OUT: "output", GND_3: "passive", IN: "input", ...opts.pinTypes } });
  }
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
 */
export class LRPS_2_1 extends Component.withPins({
  "GND": "1",
  "NC_2": "2",
  "PORT2": "3",
  "PORT1": "4",
  "NC_5": "5",
  "SUM": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "passive", NC_2: "no_connect", PORT2: "passive", PORT1: "passive", NC_5: "no_connect", SUM: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC5507ES6 extends Component.withPins({
  "~{SHDN}": "1",
  "GND": "2",
  "V_{OUT}": "3",
  "V_{CC}": "4",
  "PCAP": "5",
  "RF_{IN}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SHDN}": "input", GND: "power_in", "V_{OUT}": "output", "V_{CC}": "power_in", PCAP: "passive", "RF_{IN}": "input", ...opts.pinTypes } });
  }
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
 */
export class MAADSS0008 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V1": "4",
  "V2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RF1: "passive", GND: "passive", RF2: "passive", V1: "input", V2: "input", ...opts.pinTypes } });
  }
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
 */
export class MAAVSS0004 extends Component.withPins({
  "VC": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF2": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "RF1": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VC: "input", GND_2: "power_in", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", RF2: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", GND_13: "passive", RF1: "passive", ...opts.pinTypes } });
  }
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
 */
export class MC12080 extends Component.withPins({
  "IN": "1",
  "VCC": "2",
  "SW1": "3",
  "OUT": "4",
  "GND": "5",
  "SW2": "6",
  "SW3": "7",
  "~{IN}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", VCC: "power_in", SW1: "input", OUT: "output", GND: "power_in", SW2: "input", SW3: "input", "~{IN}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC12093D extends Component.withPins({
  "IN": "1",
  "VCC": "2",
  "SW2": "3",
  "OUT": "4",
  "GND": "5",
  "SW1": "6",
  "SB": "7",
  "~{IN}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", VCC: "power_in", SW2: "input", OUT: "output", GND: "power_in", SW1: "input", SB: "input", "~{IN}": "input", ...opts.pinTypes } });
  }
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
 */
export class MICRF112YMM extends Component.withPins({
  "ASK": "1",
  "XTLIN": "2",
  "XTLOUT": "3",
  "VSS": "4",
  "XTAL_MOD": "5",
  "FSK": "6",
  "EN": "7",
  "VSSPA": "8",
  "PAOUT": "9",
  "VDD": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ASK: "input", XTLIN: "input", XTLOUT: "output", VSS: "power_in", XTAL_MOD: "passive", FSK: "input", EN: "input", VSSPA: "power_in", PAOUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MICRF220AYQS extends Component.withPins({
  "RO1": "1",
  "GNDRF_2": "2",
  "ANT": "3",
  "GNDRF_4": "4",
  "VDD": "5",
  "SQ": "6",
  "SEL0": "7",
  "~{SHDN}": "8",
  "GND": "9",
  "DO": "10",
  "SEL1": "11",
  "CTH": "12",
  "CAGC": "13",
  "RSSI": "14",
  "NC": "15",
  "RO2": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RO1: "input", GNDRF_2: "power_in", ANT: "input", GNDRF_4: "passive", VDD: "power_in", SQ: "input", SEL0: "input", "~{SHDN}": "input", GND: "power_in", DO: "output", SEL1: "input", CTH: "input", CAGC: "input", RSSI: "output", NC: "no_connect", RO2: "output", ...opts.pinTypes } });
  }
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
 */
export class MRF89XA extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "VCORS": "3",
  "VCOTN": "4",
  "VCOTP": "5",
  "PLLN": "6",
  "PLLP": "7",
  "GND_8": "8",
  "GND_9": "9",
  "OSC1": "10",
  "OSC2": "11",
  "GND_12": "12",
  "RST/TEST8": "13",
  "~{CSCON}": "14",
  "~{CSDAT}": "15",
  "SDO": "16",
  "SDI": "17",
  "SCK": "18",
  "CLKOUT": "19",
  "DATA": "20",
  "IRQ0": "21",
  "IRQ1": "22",
  "PLOCK": "23",
  "GND_24": "24",
  "GND_25": "25",
  "V_{DD}": "26",
  "AVRS": "27",
  "DVRS": "28",
  "PARS": "29",
  "GND_30": "30",
  "RFIO": "31",
  "GND_32": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", VCORS: "power_out", VCOTN: "passive", VCOTP: "passive", PLLN: "passive", PLLP: "passive", GND_8: "passive", GND_9: "passive", OSC1: "passive", OSC2: "passive", GND_12: "passive", "RST/TEST8": "input", "~{CSCON}": "input", "~{CSDAT}": "input", SDO: "output", SDI: "input", SCK: "input", CLKOUT: "output", DATA: "bidirectional", IRQ0: "output", IRQ1: "output", PLOCK: "output", GND_24: "passive", GND_25: "passive", "V_{DD}": "power_in", AVRS: "power_out", DVRS: "power_out", PARS: "power_out", GND_30: "passive", RFIO: "bidirectional", GND_32: "passive", GND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class NRF24L01 extends Component.withPins({
  "CE": "1",
  "CSN": "2",
  "SCK": "3",
  "MOSI": "4",
  "MISO": "5",
  "IRQ": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "XC2": "9",
  "XC1": "10",
  "VDD_PA": "11",
  "ANT1": "12",
  "ANT2": "13",
  "VSS_14": "14",
  "VDD_15": "15",
  "IREF": "16",
  "VSS_17": "17",
  "VDD_18": "18",
  "DVDD": "19",
  "VSS_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CE: "input", CSN: "input", SCK: "input", MOSI: "input", MISO: "output", IRQ: "output", VDD_7: "power_in", VSS_8: "power_in", XC2: "passive", XC1: "passive", VDD_PA: "power_out", ANT1: "passive", ANT2: "passive", VSS_14: "power_in", VDD_15: "power_in", IREF: "passive", VSS_17: "power_in", VDD_18: "power_in", DVDD: "power_out", VSS_20: "power_in", ...opts.pinTypes } });
  }
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
 */
export class NRF24L01_Breakout extends Component.withPins({
  "GND": "1",
  "VCC": "2",
  "CE": "3",
  "~{CSN}": "4",
  "SCK": "5",
  "MOSI": "6",
  "MISO": "7",
  "IRQ": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", CE: "input", "~{CSN}": "input", SCK: "input", MOSI: "input", MISO: "output", IRQ: "output", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_0DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_10DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_1DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_2DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_3DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_4DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_5DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_6DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_7DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_8DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PAT1220_C_9DB extends Component.withPins({
  "P3": "3",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
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
 */
export class PD4859J5050S2HF extends Component.withPins({
  "GND_1": "1",
  "Input": "2",
  "GND_3": "3",
  "Output1": "4",
  "GND_5": "5",
  "Output2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", Input: "input", GND_3: "passive", Output1: "output", GND_5: "passive", Output2: "output", ...opts.pinTypes } });
  }
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
 */
export class RMK_3_451 extends Component.withPins({
  "F_IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "3F_OUT": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { F_IN: "input", GND_2: "power_in", GND_3: "passive", "3F_OUT": "output", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
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
 */
export class RMK_5_51 extends Component.withPins({
  "F_IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "5F_OUT": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { F_IN: "input", GND_2: "power_in", GND_3: "passive", "5F_OUT": "output", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
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
 */
export class SE5004L extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "RFIN": "3",
  "GND_4": "4",
  "VREF": "5",
  "SP1": "6",
  "SP2": "7",
  "VCC2_8": "8",
  "VCC3_9": "9",
  "DET": "10",
  "GND_11": "11",
  "GND_12": "12",
  "RFOUT": "13",
  "GND_14": "14",
  "GND_15": "15",
  "GND_16": "16",
  "GND_17": "17",
  "VCC3_18": "18",
  "VCC2_19": "19",
  "VCC1": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", RFIN: "input", GND_4: "passive", VREF: "input", SP1: "passive", SP2: "passive", VCC2_8: "power_in", VCC3_9: "power_in", DET: "output", GND_11: "passive", GND_12: "passive", RFOUT: "output", GND_14: "passive", GND_15: "passive", GND_16: "passive", GND_17: "passive", VCC3_18: "power_in", VCC2_19: "power_in", VCC1: "power_in", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1231IMLTRT extends Component.withPins({
  "VBAT1": "1",
  "VR_ANA": "2",
  "VR_DIG": "3",
  "XTA": "4",
  "XTB": "5",
  "RESET": "6",
  "DIO0": "7",
  "DIO1/DCLK": "8",
  "DIO2/DATA": "9",
  "DIO3": "10",
  "DIO4": "11",
  "DIO5": "12",
  "VBAT2": "13",
  "GND_14": "14",
  "SCK": "15",
  "MISO": "16",
  "MOSI": "17",
  "NSS": "18",
  "RXTX": "19",
  "GND_20": "20",
  "RFIO": "21",
  "GND_22": "22",
  "PA_BOOST": "23",
  "VR_PA": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT1: "power_in", VR_ANA: "power_out", VR_DIG: "power_out", XTA: "input", XTB: "input", RESET: "input", DIO0: "bidirectional", "DIO1/DCLK": "bidirectional", "DIO2/DATA": "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", VBAT2: "power_in", GND_14: "power_in", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", RXTX: "output", GND_20: "passive", RFIO: "bidirectional", GND_22: "passive", PA_BOOST: "output", VR_PA: "power_out", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1262IMLTRT extends Component.withPins({
  "VDD_IN": "1",
  "GND_2": "2",
  "XTA": "3",
  "XTB": "4",
  "GND_5": "5",
  "DIO3": "6",
  "VREG": "7",
  "GND_8": "8",
  "DCC_SW": "9",
  "VBAT": "10",
  "VBAT_IO": "11",
  "DIO2": "12",
  "DIO1": "13",
  "BUSY": "14",
  "~{RESET}": "15",
  "MISO": "16",
  "MOSI": "17",
  "SCK": "18",
  "NSS": "19",
  "GND_20": "20",
  "RFI_P": "21",
  "RFI_N": "22",
  "RFO": "23",
  "VR_PA": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_IN: "power_in", GND_2: "power_in", XTA: "bidirectional", XTB: "bidirectional", GND_5: "passive", DIO3: "bidirectional", VREG: "power_out", GND_8: "passive", DCC_SW: "power_out", VBAT: "power_in", VBAT_IO: "power_in", DIO2: "bidirectional", DIO1: "bidirectional", BUSY: "output", "~{RESET}": "input", MISO: "tri_state", MOSI: "input", SCK: "input", NSS: "input", GND_20: "passive", RFI_P: "input", RFI_N: "input", RFO: "output", VR_PA: "power_out", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1261IMLTRT extends Component.withPins({
  "VDD_IN": "1",
  "GND_2": "2",
  "XTA": "3",
  "XTB": "4",
  "GND_5": "5",
  "DIO3": "6",
  "VREG": "7",
  "GND_8": "8",
  "DCC_SW": "9",
  "VBAT": "10",
  "VBAT_IO": "11",
  "DIO2": "12",
  "DIO1": "13",
  "BUSY": "14",
  "~{RESET}": "15",
  "MISO": "16",
  "MOSI": "17",
  "SCK": "18",
  "NSS": "19",
  "GND_20": "20",
  "RFI_P": "21",
  "RFI_N": "22",
  "RFO": "23",
  "VR_PA": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_IN: "power_in", GND_2: "power_in", XTA: "bidirectional", XTB: "bidirectional", GND_5: "passive", DIO3: "bidirectional", VREG: "power_out", GND_8: "passive", DCC_SW: "power_out", VBAT: "power_in", VBAT_IO: "power_in", DIO2: "bidirectional", DIO1: "bidirectional", BUSY: "output", "~{RESET}": "input", MISO: "tri_state", MOSI: "input", SCK: "input", NSS: "input", GND_20: "passive", RFI_P: "input", RFI_N: "input", RFO: "output", VR_PA: "power_out", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1272 extends Component.withPins({
  "VBAT1": "1",
  "VR_ANA": "2",
  "VR_DIG": "3",
  "XTA": "4",
  "XTB": "5",
  "~{RESET}": "6",
  "NC_7": "7",
  "NC_8": "8",
  "DIO0": "9",
  "DIO1": "10",
  "DIO2": "11",
  "DIO3": "12",
  "DIO4": "13",
  "DIO5": "14",
  "VBAT2": "15",
  "GND_16": "16",
  "SCK": "17",
  "MISO": "18",
  "MOSI": "19",
  "NSS": "20",
  "RF_MOD": "21",
  "GND_22": "22",
  "RXTX": "23",
  "RFO": "24",
  "RFI": "25",
  "GND_26": "26",
  "PA_BOOST": "27",
  "VR_PA": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT1: "power_in", VR_ANA: "power_in", VR_DIG: "power_in", XTA: "bidirectional", XTB: "bidirectional", "~{RESET}": "input", NC_7: "no_connect", NC_8: "no_connect", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", VBAT2: "power_in", GND_16: "power_in", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", RF_MOD: "output", GND_22: "passive", RXTX: "output", RFO: "output", RFI: "input", GND_26: "passive", PA_BOOST: "power_out", VR_PA: "power_out", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1273 extends Component.withPins({
  "VBAT1": "1",
  "VR_ANA": "2",
  "VR_DIG": "3",
  "XTA": "4",
  "XTB": "5",
  "~{RESET}": "6",
  "NC_7": "7",
  "NC_8": "8",
  "DIO0": "9",
  "DIO1": "10",
  "DIO2": "11",
  "DIO3": "12",
  "DIO4": "13",
  "DIO5": "14",
  "VBAT2": "15",
  "GND_16": "16",
  "SCK": "17",
  "MISO": "18",
  "MOSI": "19",
  "NSS": "20",
  "RF_MOD": "21",
  "GND_22": "22",
  "RXTX": "23",
  "RFO": "24",
  "RFI": "25",
  "GND_26": "26",
  "PA_BOOST": "27",
  "VR_PA": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT1: "power_in", VR_ANA: "power_in", VR_DIG: "power_in", XTA: "bidirectional", XTB: "bidirectional", "~{RESET}": "input", NC_7: "no_connect", NC_8: "no_connect", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", VBAT2: "power_in", GND_16: "power_in", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", RF_MOD: "output", GND_22: "passive", RXTX: "output", RFO: "output", RFI: "input", GND_26: "passive", PA_BOOST: "power_out", VR_PA: "power_out", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1276 extends Component.withPins({
  "RFI_LF": "1",
  "VR_ANA": "2",
  "VBAT_ANA": "3",
  "VR_DIG": "4",
  "XTA": "5",
  "XTB": "6",
  "~{RESET}": "7",
  "DIO0": "8",
  "DIO1": "9",
  "DIO2": "10",
  "DIO3": "11",
  "DIO4": "12",
  "DIO5": "13",
  "VBAT_DIG": "14",
  "GND_15": "15",
  "SCK": "16",
  "MISO": "17",
  "MOSI": "18",
  "NSS": "19",
  "RXTX/RF_MOD": "20",
  "RFI_HF": "21",
  "RFO_HF": "22",
  "GND_23": "23",
  "VBAT_RF": "24",
  "VR_PA": "25",
  "GND_26": "26",
  "PA_BOOST": "27",
  "RFO_LF": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RFI_LF: "input", VR_ANA: "power_in", VBAT_ANA: "power_in", VR_DIG: "power_in", XTA: "bidirectional", XTB: "bidirectional", "~{RESET}": "input", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", VBAT_DIG: "power_in", GND_15: "power_in", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", "RXTX/RF_MOD": "output", RFI_HF: "input", RFO_HF: "output", GND_23: "passive", VBAT_RF: "power_in", VR_PA: "power_out", GND_26: "passive", PA_BOOST: "power_out", RFO_LF: "output", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1277 extends Component.withPins({
  "RFI_LF": "1",
  "VR_ANA": "2",
  "VBAT_ANA": "3",
  "VR_DIG": "4",
  "XTA": "5",
  "XTB": "6",
  "~{RESET}": "7",
  "DIO0": "8",
  "DIO1": "9",
  "DIO2": "10",
  "DIO3": "11",
  "DIO4": "12",
  "DIO5": "13",
  "VBAT_DIG": "14",
  "GND_15": "15",
  "SCK": "16",
  "MISO": "17",
  "MOSI": "18",
  "NSS": "19",
  "RXTX/RF_MOD": "20",
  "RFI_HF": "21",
  "RFO_HF": "22",
  "GND_23": "23",
  "VBAT_RF": "24",
  "VR_PA": "25",
  "GND_26": "26",
  "PA_BOOST": "27",
  "RFO_LF": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RFI_LF: "input", VR_ANA: "power_in", VBAT_ANA: "power_in", VR_DIG: "power_in", XTA: "bidirectional", XTB: "bidirectional", "~{RESET}": "input", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", VBAT_DIG: "power_in", GND_15: "power_in", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", "RXTX/RF_MOD": "output", RFI_HF: "input", RFO_HF: "output", GND_23: "passive", VBAT_RF: "power_in", VR_PA: "power_out", GND_26: "passive", PA_BOOST: "power_out", RFO_LF: "output", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1278 extends Component.withPins({
  "RFI_LF": "1",
  "VR_ANA": "2",
  "VBAT_ANA": "3",
  "VR_DIG": "4",
  "XTA": "5",
  "XTB": "6",
  "~{RESET}": "7",
  "DIO0": "8",
  "DIO1": "9",
  "DIO2": "10",
  "DIO3": "11",
  "DIO4": "12",
  "DIO5": "13",
  "VBAT_DIG": "14",
  "GND_15": "15",
  "SCK": "16",
  "MISO": "17",
  "MOSI": "18",
  "NSS": "19",
  "RXTX/RF_MOD": "20",
  "GND_21": "21",
  "GND_22": "22",
  "GND_23": "23",
  "VBAT_RF": "24",
  "VR_PA": "25",
  "GND_26": "26",
  "PA_BOOST": "27",
  "RFO_LF": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RFI_LF: "input", VR_ANA: "power_in", VBAT_ANA: "power_in", VR_DIG: "power_in", XTA: "bidirectional", XTB: "bidirectional", "~{RESET}": "input", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", VBAT_DIG: "power_in", GND_15: "power_in", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", "RXTX/RF_MOD": "output", GND_21: "passive", GND_22: "passive", GND_23: "passive", VBAT_RF: "power_in", VR_PA: "power_out", GND_26: "passive", PA_BOOST: "power_out", RFO_LF: "output", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class SX1279 extends Component.withPins({
  "RFI_LF": "1",
  "VR_ANA": "2",
  "VBAT_ANA": "3",
  "VR_DIG": "4",
  "XTA": "5",
  "XTB": "6",
  "~{RESET}": "7",
  "DIO0": "8",
  "DIO1": "9",
  "DIO2": "10",
  "DIO3": "11",
  "DIO4": "12",
  "DIO5": "13",
  "VBAT_DIG": "14",
  "GND_15": "15",
  "SCK": "16",
  "MISO": "17",
  "MOSI": "18",
  "NSS": "19",
  "RXTX/RF_MOD": "20",
  "RFI_HF": "21",
  "RFO_HF": "22",
  "GND_23": "23",
  "VBAT_RF": "24",
  "VR_PA": "25",
  "GND_26": "26",
  "PA_BOOST": "27",
  "RFO_LF": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RFI_LF: "input", VR_ANA: "power_in", VBAT_ANA: "power_in", VR_DIG: "power_in", XTA: "bidirectional", XTB: "bidirectional", "~{RESET}": "input", DIO0: "bidirectional", DIO1: "bidirectional", DIO2: "bidirectional", DIO3: "bidirectional", DIO4: "bidirectional", DIO5: "bidirectional", VBAT_DIG: "power_in", GND_15: "power_in", SCK: "input", MISO: "output", MOSI: "input", NSS: "input", "RXTX/RF_MOD": "output", RFI_HF: "input", RFO_HF: "output", GND_23: "passive", VBAT_RF: "power_in", VR_PA: "power_out", GND_26: "passive", PA_BOOST: "power_out", RFO_LF: "output", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class SYPD_2 extends Component.withPins({
  "RF1": "1",
  "RF2": "2",
  "DC": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RF1: "input", RF2: "input", DC: "output", GND_4: "power_in", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
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
 */
export class SYPD_1 extends Component.withPins({
  "RF1": "1",
  "RF2": "2",
  "DC": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RF1: "input", RF2: "input", DC: "output", GND_4: "power_in", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
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
 */
export class SYPD_52 extends Component.withPins({
  "RF1": "1",
  "RF2": "2",
  "DC": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RF1: "input", RF2: "input", DC: "output", GND_4: "power_in", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
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
 */
export class Si4012_C1001xT extends Component.withPins({
  "XTAL": "1",
  "GND": "2",
  "TXM": "3",
  "TXP": "4",
  "VDD": "5",
  "LED": "6",
  "~{IRQ}": "7",
  "SDN": "8",
  "SCL": "9",
  "SDA": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTAL: "input", GND: "power_in", TXM: "output", TXP: "output", VDD: "power_in", LED: "output", "~{IRQ}": "open_collector", SDN: "input", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class Si4460 extends Component.withPins({
  "SDN": "1",
  "RXp": "2",
  "RXn": "3",
  "TX": "4",
  "NC": "5",
  "VDD_6": "6",
  "TXRAMP": "7",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDN: "input", RXp: "input", RXn: "input", TX: "output", NC: "no_connect", VDD_6: "power_in", TXRAMP: "output", VDD_8: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", "~{IRQ}": "open_collector", SCLK: "input", SDO: "output", SDI: "input", "~{SEL}": "input", XOUT: "passive", XIN: "input", GND_18: "power_in", GPIO2: "bidirectional", GPIO3: "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class Si4461 extends Component.withPins({
  "SDN": "1",
  "RXp": "2",
  "RXn": "3",
  "TX": "4",
  "NC": "5",
  "VDD_6": "6",
  "TXRAMP": "7",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDN: "input", RXp: "input", RXn: "input", TX: "output", NC: "no_connect", VDD_6: "power_in", TXRAMP: "output", VDD_8: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", "~{IRQ}": "open_collector", SCLK: "input", SDO: "output", SDI: "input", "~{SEL}": "input", XOUT: "passive", XIN: "input", GND_18: "power_in", GPIO2: "bidirectional", GPIO3: "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class Si4463 extends Component.withPins({
  "SDN": "1",
  "RXp": "2",
  "RXn": "3",
  "TX": "4",
  "NC": "5",
  "VDD_6": "6",
  "TXRAMP": "7",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDN: "input", RXp: "input", RXn: "input", TX: "output", NC: "no_connect", VDD_6: "power_in", TXRAMP: "output", VDD_8: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", "~{IRQ}": "open_collector", SCLK: "input", SDO: "output", SDI: "input", "~{SEL}": "input", XOUT: "passive", XIN: "input", GND_18: "power_in", GPIO2: "bidirectional", GPIO3: "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class Si4464 extends Component.withPins({
  "SDN": "1",
  "RXp": "2",
  "RXn": "3",
  "TX": "4",
  "NC": "5",
  "VDD_6": "6",
  "TXRAMP": "7",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDN: "input", RXp: "input", RXn: "input", TX: "output", NC: "no_connect", VDD_6: "power_in", TXRAMP: "output", VDD_8: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", "~{IRQ}": "open_collector", SCLK: "input", SDO: "output", SDI: "input", "~{SEL}": "input", XOUT: "passive", XIN: "input", GND_18: "power_in", GPIO2: "bidirectional", GPIO3: "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class TCP_2_10X extends Component.withPins({
  "GND": "1",
  "CON_2": "2",
  "PORT1": "3",
  "PORT2": "4",
  "CON_5": "5",
  "SUM": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "passive", CON_2: "passive", PORT1: "passive", PORT2: "passive", CON_5: "passive", SUM: "passive", ...opts.pinTypes } });
  }
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
 */
export class nRF24L01P extends Component.withPins({
  "CE": "1",
  "CSN": "2",
  "SCK": "3",
  "MOSI": "4",
  "MISO": "5",
  "IRQ": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "XC2": "9",
  "XC1": "10",
  "VDD_PA": "11",
  "ANT1": "12",
  "ANT2": "13",
  "VSS_14": "14",
  "VDD_15": "15",
  "IREF": "16",
  "VSS_17": "17",
  "VDD_18": "18",
  "DVDD": "19",
  "VSS_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CE: "input", CSN: "input", SCK: "input", MOSI: "input", MISO: "output", IRQ: "output", VDD_7: "power_in", VSS_8: "power_in", XC2: "passive", XC1: "passive", VDD_PA: "power_out", ANT1: "passive", ANT2: "passive", VSS_14: "power_in", VDD_15: "power_in", IREF: "passive", VSS_17: "power_in", VDD_18: "power_in", DVDD: "power_out", VSS_20: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF:nRF24L01P";
  override referencePrefix = "U";
}
