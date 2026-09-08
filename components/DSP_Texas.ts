// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 16bit DSP Controller 32Kx16B Flash 2.5Kx16B RAM, Obsolete NRND, PQFP-100
 *
 * KiCad symbol: `DSP_Texas:TMS320LF2406PZ`. Reference prefix: `U`.
 * Footprint filters: PQFP-100*.
 * @see http://www.ti.com/lit/ds/symlink/tms320lf2406.pdf
 * Keywords: 16BIT DSP TMS320 Obsolete.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TMS320LF2406PZ extends Component.withPins({
  /** Physical pin 1: TRST; input. */
  "TRST": "1",
  /** Physical pin 2: TDIRB/IOPF4; bidirectional. */
  "TDIRB/IOPF4": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC_4": "4",
  /** Physical pin 5: T4PWM/T4CMP/IOPF3; bidirectional. */
  "T4PWM/T4CMP/IOPF3": "5",
  /** Physical pin 6: PDPINTA; input. */
  "PDPINTA": "6",
  /** Physical pin 7: T3PWM/T3CMP/IOPF2; bidirectional. */
  "T3PWM/T3CMP/IOPF2": "7",
  /** Physical pin 8: PLLF2; passive. */
  "PLLF2": "8",
  /** Physical pin 9: PLLF; passive. */
  "PLLF": "9",
  /** Physical pin 10: PLLVcca; passive. */
  "PLLVcca": "10",
  /** Physical pin 11: TDIRA/IOPB6; bidirectional. */
  "TDIRA/IOPB6": "11",
  /** Physical pin 12: T1PWM/T1CMP/IOPB4; bidirectional. */
  "T1PWM/T1CMP/IOPB4": "12",
  /** Physical pin 13: T2PWM/T2CMP/IOPB5; bidirectional. */
  "T2PWM/T2CMP/IOPB5": "13",
  /** Physical pin 14: IOPC0; bidirectional. */
  "IOPC0": "14",
  /** Physical pin 15: XINT2/IOPD0; bidirectional. */
  "XINT2/IOPD0": "15",
  /** Physical pin 16: XINT1/IOPA2; bidirectional. */
  "XINT1/IOPA2": "16",
  /** Physical pin 17: TXD/IOPA0; bidirectional. */
  "TXD/IOPA0": "17",
  /** Physical pin 18: RXD/IOPA1; bidirectional. */
  "RXD/IOPA1": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC_20": "20",
  /** Physical pin 21: SPI_SIMO/IOPC2; bidirectional. */
  "SPI_SIMO/IOPC2": "21",
  /** Physical pin 22: SPI_SOMI/IOPC3; bidirectional. */
  "SPI_SOMI/IOPC3": "22",
  /** Physical pin 23: SPI_TE-/IOPC5; bidirectional. */
  "SPI_TE-/IOPC5": "23",
  /** Physical pin 24: SPI_CLK/IOPC4; bidirectional. */
  "SPI_CLK/IOPC4": "24",
  /** Physical pin 25: TMS2; input. */
  "TMS2": "25",
  /** Physical pin 26: TCLKINA/IOPB7; passive. */
  "TCLKINA/IOPB7": "26",
  /** Physical pin 27: PWM12/IOPE6; bidirectional. */
  "PWM12/IOPE6": "27",
  /** Physical pin 28: PWM6/IOPB3; bidirectional. */
  "PWM6/IOPB3": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: VCC; power_in. */
  "VCC_30": "30",
  /** Physical pin 31: PWM5/IOPB2; bidirectional. */
  "PWM5/IOPB2": "31",
  /** Physical pin 32: PWM11/IOPE5; bidirectional. */
  "PWM11/IOPE5": "32",
  /** Physical pin 33: PWM4/IOPB1; bidirectional. */
  "PWM4/IOPB1": "33",
  /** Physical pin 34: GND; power_in. */
  "GND_34": "34",
  /** Physical pin 35: VCC; power_in. */
  "VCC_35": "35",
  /** Physical pin 36: PWM3/IOPB0; bidirectional. */
  "PWM3/IOPB0": "36",
  /** Physical pin 37: PWM2/IOPA7; bidirectional. */
  "PWM2/IOPA7": "37",
  /** Physical pin 38: PWM10/IOPE4; bidirectional. */
  "PWM10/IOPE4": "38",
  /** Physical pin 39: PWM1/IOPA6; bidirectional. */
  "PWM1/IOPA6": "39",
  /** Physical pin 40: VccPROG_5V; passive. */
  "VccPROG_5V": "40",
  /** Physical pin 41: PWM9/IOPE3; bidirectional. */
  "PWM9/IOPE3": "41",
  /** Physical pin 43: PWM8/IOPE2; bidirectional. */
  "PWM8/IOPE2": "43",
  /** Physical pin 45: PWM7/IOPE1; bidirectional. */
  "PWM7/IOPE1": "45",
  /** Physical pin 46: GND; power_in. */
  "GND_46": "46",
  /** Physical pin 47: VCC; power_in. */
  "VCC_47": "47",
  /** Physical pin 48: CAP6/IOPF1; bidirectional. */
  "CAP6/IOPF1": "48",
  /** Physical pin 49: CANRX/IOPC7; bidirectional. */
  "CANRX/IOPC7": "49",
  /** Physical pin 50: CANTX/IOPC6; bidirectional. */
  "CANTX/IOPC6": "50",
  /** Physical pin 51: CLKOUT/IOPE0; bidirectional. */
  "CLKOUT/IOPE0": "51",
  /** Physical pin 52: CAP3/IOPA5; bidirectional. */
  "CAP3/IOPA5": "52",
  /** Physical pin 53: GND; power_in. */
  "GND_53": "53",
  /** Physical pin 54: VCC; power_in. */
  "VCC_54": "54",
  /** Physical pin 55: CAP2/QEP2/IOPA4; bidirectional. */
  "CAP2/QEP2/IOPA4": "55",
  /** Physical pin 56: CAP5/QEP4/IOPF0; passive. */
  "CAP5/QEP4/IOPF0": "56",
  /** Physical pin 57: CAP1/QEP1/IOPA3; bidirectional. */
  "CAP1/QEP1/IOPA3": "57",
  /** Physical pin 58: GND; power_in. */
  "GND_58": "58",
  /** Physical pin 59: VCC; power_in. */
  "VCC_59": "59",
  /** Physical pin 60: CAP4/QEP3/IOPE7; bidirectional. */
  "CAP4/QEP3/IOPE7": "60",
  /** Physical pin 61: EMU0; bidirectional. */
  "EMU0": "61",
  /** Physical pin 62: EMU1/OFF-; bidirectional. */
  "EMU1/OFF-": "62",
  /** Physical pin 63: GND; power_in. */
  "GND_63": "63",
  /** Physical pin 64: VCC; power_in. */
  "VCC_64": "64",
  /** Physical pin 65: ADCIN15; input. */
  "ADCIN15": "65",
  /** Physical pin 66: ADCIN07; input. */
  "ADCIN07": "66",
  /** Physical pin 67: ADCIN06; input. */
  "ADCIN06": "67",
  /** Physical pin 68: ADCIN14; input. */
  "ADCIN14": "68",
  /** Physical pin 69: ADCIN05; input. */
  "ADCIN05": "69",
  /** Physical pin 70: ADCIN04; input. */
  "ADCIN04": "70",
  /** Physical pin 71: ADCIN13; input. */
  "ADCIN13": "71",
  /** Physical pin 72: ADCIN03; input. */
  "ADCIN03": "72",
  /** Physical pin 73: ADCIN12; input. */
  "ADCIN12": "73",
  /** Physical pin 74: ADCIN02; input. */
  "ADCIN02": "74",
  /** Physical pin 75: ADCIN11; input. */
  "ADCIN11": "75",
  /** Physical pin 76: ADCIN10; input. */
  "ADCIN10": "76",
  /** Physical pin 77: ADCIN01; input. */
  "ADCIN01": "77",
  /** Physical pin 78: ADCIN09; input. */
  "ADCIN09": "78",
  /** Physical pin 79: ADCIN00; input. */
  "ADCIN00": "79",
  /** Physical pin 80: ADCIN08; input. */
  "ADCIN08": "80",
  /** Physical pin 81: VrefLO; passive. */
  "VrefLO": "81",
  /** Physical pin 82: VrefHI; passive. */
  "VrefHI": "82",
  /** Physical pin 83: VCCA; power_in. */
  "VCCA": "83",
  /** Physical pin 84: VSSA; power_in. */
  "VSSA": "84",
  /** Physical pin 85: BIO-/IOPC1; bidirectional. */
  "BIO-/IOPC1": "85",
  /** Physical pin 86: ~{BOOT_EN}/XF; output. */
  "~{BOOT_EN}/XF": "86",
  /** Physical pin 87: XTAL/CLKIN; input. */
  "XTAL/CLKIN": "87",
  /** Physical pin 88: XTAL2; output. */
  "XTAL2": "88",
  /** Physical pin 89: TCLKINB/IOPF5; bidirectional. */
  "TCLKINB/IOPF5": "89",
  /** Physical pin 90: GND; power_in. */
  "GND_90": "90",
  /** Physical pin 91: VCC; power_in. */
  "VCC_91": "91",
  /** Physical pin 92: IOPF6; bidirectional. */
  "IOPF6": "92",
  /** Physical pin 93: RESET; input. */
  "RESET": "93",
  /** Physical pin 94: TCK; input. */
  "TCK": "94",
  /** Physical pin 95: PDPINTB; input. */
  "PDPINTB": "95",
  /** Physical pin 96: TDI; input. */
  "TDI": "96",
  /** Physical pin 97: GND; power_in. */
  "GND_97": "97",
  /** Physical pin 98: VCC; power_in. */
  "VCC_98": "98",
  /** Physical pin 99: TDO; output. */
  "TDO": "99",
  /** Physical pin 100: TMS; input. */
  "TMS": "100",
}) {
  override schema = "DSP_Texas:TMS320LF2406PZ";
  override referencePrefix = "U";
}

