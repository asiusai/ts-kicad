// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * MicroConverter, Dual-Channel 16-bit ADCs with Embedded Flash MCU, 12-bit DAC, 256 Bytes User RAM, 8KB Flash/EE Program Memory, 640 Bytes Flash/EE Data Memory, PQFP-52 (MQFP-52, case S-52-2)
 *
 * KiCad symbol: `MCU_AnalogDevices:ADUC816BSZ`. Reference prefix: `U`.
 * Footprint filters: *MO112AC1*PQFP*10x10mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/ADUC816.pdf
 * Keywords: 8051-CORE microcontroller EEPROM sigma-delta-ADC UART I2C SPI WDT.
 * Default footprint: Package_QFP:MO112AC1_PQFP-52_10x10mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADUC816BSZ extends Component.withPins({
  /** Physical pin 1: P1.0/T2; bidirectional. */
  "P1.0/T2": "1",
  /** Physical pin 2: P1.1/T2EX; bidirectional. */
  "P1.1/T2EX": "2",
  /** Physical pin 3: P1.2/DAC/IEXC1; bidirectional. */
  "P1.2/DAC/IEXC1": "3",
  /** Physical pin 4: P1.3/AIN5/IEXC2; bidirectional. */
  "P1.3/AIN5/IEXC2": "4",
  /** Physical pin 5: AV_{DD}; power_in. */
  "AV_{DD}": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND": "6",
  /** Physical pin 7: REFIN(-); passive. */
  "REFIN(-)": "7",
  /** Physical pin 8: REFIN(+); passive. */
  "REFIN(+)": "8",
  /** Physical pin 9: P1.4/AIN1; input. */
  "P1.4/AIN1": "9",
  /** Physical pin 10: P1.5/AIN2; input. */
  "P1.5/AIN2": "10",
  /** Physical pin 11: P1.6/AIN3; input. */
  "P1.6/AIN3": "11",
  /** Physical pin 12: P1.7/AIN4/DAC; bidirectional. */
  "P1.7/AIN4/DAC": "12",
  /** Physical pin 13: ~{SS}; input. */
  "~{SS}": "13",
  /** Physical pin 14: MISO; input. */
  "MISO": "14",
  /** Physical pin 15: RESET; input. */
  "RESET": "15",
  /** Physical pin 16: RXD/P3.0; bidirectional. */
  "RXD/P3.0": "16",
  /** Physical pin 17: TXD/P3.1; bidirectional. */
  "TXD/P3.1": "17",
  /** Physical pin 18: ~{INT0}/P3.2; bidirectional. */
  "~{INT0}/P3.2": "18",
  /** Physical pin 19: ~{INT1}/P3.3; bidirectional. */
  "~{INT1}/P3.3": "19",
  /** Physical pin 20: DV_{DD}; power_in. */
  "DV_{DD}_20": "20",
  /** Physical pin 21: DGND; power_in. */
  "DGND_21": "21",
  /** Physical pin 22: T0/P3.4; bidirectional. */
  "T0/P3.4": "22",
  /** Physical pin 23: T1/P3.5; bidirectional. */
  "T1/P3.5": "23",
  /** Physical pin 24: ~{WR}/P3.6; bidirectional. */
  "~{WR}/P3.6": "24",
  /** Physical pin 25: ~{RD}/P3.7; bidirectional. */
  "~{RD}/P3.7": "25",
  /** Physical pin 26: SCLOCK; bidirectional. */
  "SCLOCK": "26",
  /** Physical pin 27: SDATA/MOSI; bidirectional. */
  "SDATA/MOSI": "27",
  /** Physical pin 28: A8/P2.0; bidirectional. */
  "A8/P2.0": "28",
  /** Physical pin 29: A9/P2.1; bidirectional. */
  "A9/P2.1": "29",
  /** Physical pin 30: A10/P2.2; bidirectional. */
  "A10/P2.2": "30",
  /** Physical pin 31: A11/P2.3; bidirectional. */
  "A11/P2.3": "31",
  /** Physical pin 32: XTAL1; input. */
  "XTAL1": "32",
  /** Physical pin 33: XTAL2; output. */
  "XTAL2": "33",
  /** Physical pin 34: DV_{DD}; passive. */
  "DV_{DD}_34": "34",
  /** Physical pin 35: DGND; passive. */
  "DGND_35": "35",
  /** Physical pin 36: A12/P2.4; bidirectional. */
  "A12/P2.4": "36",
  /** Physical pin 37: A13/P2.5; bidirectional. */
  "A13/P2.5": "37",
  /** Physical pin 38: A14/P2.6; bidirectional. */
  "A14/P2.6": "38",
  /** Physical pin 39: A15/P2.7; bidirectional. */
  "A15/P2.7": "39",
  /** Physical pin 40: ~{EA}; bidirectional. */
  "~{EA}": "40",
  /** Physical pin 41: ~{PSEN}; output. */
  "~{PSEN}": "41",
  /** Physical pin 42: ALE; output. */
  "ALE": "42",
  /** Physical pin 43: AD0/P0.0; bidirectional. */
  "AD0/P0.0": "43",
  /** Physical pin 44: AD1/P0.1; bidirectional. */
  "AD1/P0.1": "44",
  /** Physical pin 45: AD2/P0.2; bidirectional. */
  "AD2/P0.2": "45",
  /** Physical pin 46: AD3/P0.3; bidirectional. */
  "AD3/P0.3": "46",
  /** Physical pin 47: DGND; passive. */
  "DGND_47": "47",
  /** Physical pin 48: DV_{DD}; passive. */
  "DV_{DD}_48": "48",
  /** Physical pin 49: AD4/P0.4; bidirectional. */
  "AD4/P0.4": "49",
  /** Physical pin 50: AD5/P0.5; bidirectional. */
  "AD5/P0.5": "50",
  /** Physical pin 51: AD6/P0.6; bidirectional. */
  "AD6/P0.6": "51",
  /** Physical pin 52: AD7/P0.7; bidirectional. */
  "AD7/P0.7": "52",
}) {
  override schema = "MCU_AnalogDevices:ADUC816BSZ";
  override referencePrefix = "U";
}

/**
 * Cortex-M4 Microcontroller, WQFN-20 (Maxim T2044+5C)
 *
 * KiCad symbol: `MCU_AnalogDevices:MAX32660GTP`. Reference prefix: `U`.
 * Footprint filters: *WQFN*4x4mm?P0.5mm?EP2.7*x2.7*mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max32660.pdf
 * Keywords: ARM 32-bit Cortex-M4 Maxim ADI Darwin.
 * Default footprint: Package_DFN_QFN:WQFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX32660GTP extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: P0.13; bidirectional. */
  "P0.13": "3",
  /** Physical pin 4: P0.12; bidirectional. */
  "P0.12": "4",
  /** Physical pin 5: ~{RSTN}; input. */
  "~{RSTN}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}_6": "6",
  /** Physical pin 7: 32KOUT; output. */
  "32KOUT": "7",
  /** Physical pin 8: 32KIN; input. */
  "32KIN": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: VCORE; passive. */
  "VCORE": "10",
  /** Physical pin 11: P0.9; bidirectional. */
  "P0.9": "11",
  /** Physical pin 12: P0.8; bidirectional. */
  "P0.8": "12",
  /** Physical pin 13: P0.11; bidirectional. */
  "P0.11": "13",
  /** Physical pin 14: P0.10; bidirectional. */
  "P0.10": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: V_{SS}; passive. */
  "V_{SS}_21": "21",
}) {
  override schema = "MCU_AnalogDevices:MAX32660GTP";
  override referencePrefix = "U";
}

/**
 * Cortex-M4 Microcontroller, TQFN-40
 *
 * KiCad symbol: `MCU_AnalogDevices:MAX32670GTL`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*5x5mm*P0.4mm*EP3.5x3.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max32670-max32671.pdf
 * Keywords: ARM 32-bit Cortex-M4 Maxim ADI Darwin.
 * Default footprint: Package_DFN_QFN:TQFN-40-1EP_5x5mm_P0.4mm_EP3.5x3.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX32670GTL extends Component.withPins({
  /** Physical pin 1: P0.20; bidirectional. */
  "P0.20": "1",
  /** Physical pin 2: P0.21; bidirectional. */
  "P0.21": "2",
  /** Physical pin 3: P0.22; bidirectional. */
  "P0.22": "3",
  /** Physical pin 4: P0.0; bidirectional. */
  "P0.0": "4",
  /** Physical pin 5: P0.1; bidirectional. */
  "P0.1": "5",
  /** Physical pin 6: P0.2; bidirectional. */
  "P0.2": "6",
  /** Physical pin 7: P0.3; bidirectional. */
  "P0.3": "7",
  /** Physical pin 8: P0.4; bidirectional. */
  "P0.4": "8",
  /** Physical pin 9: P0.5; bidirectional. */
  "P0.5": "9",
  /** Physical pin 10: P0.6; bidirectional. */
  "P0.6": "10",
  /** Physical pin 11: P0.7; bidirectional. */
  "P0.7": "11",
  /** Physical pin 12: P0.23; bidirectional. */
  "P0.23": "12",
  /** Physical pin 13: P0.24; bidirectional. */
  "P0.24": "13",
  /** Physical pin 14: P0.25; bidirectional. */
  "P0.25": "14",
  /** Physical pin 15: P0.26; bidirectional. */
  "P0.26": "15",
  /** Physical pin 16: P0.27; bidirectional. */
  "P0.27": "16",
  /** Physical pin 17: P0.28; bidirectional. */
  "P0.28": "17",
  /** Physical pin 18: P0.29; bidirectional. */
  "P0.29": "18",
  /** Physical pin 19: P0.30; bidirectional. */
  "P0.30": "19",
  /** Physical pin 20: P0.8; bidirectional. */
  "P0.8": "20",
  /** Physical pin 21: P0.9; bidirectional. */
  "P0.9": "21",
  /** Physical pin 22: P0.10; bidirectional. */
  "P0.10": "22",
  /** Physical pin 23: P0.11; bidirectional. */
  "P0.11": "23",
  /** Physical pin 24: P0.12; bidirectional. */
  "P0.12": "24",
  /** Physical pin 25: P0.13; bidirectional. */
  "P0.13": "25",
  /** Physical pin 26: P0.14; bidirectional. */
  "P0.14": "26",
  /** Physical pin 27: P0.15; bidirectional. */
  "P0.15": "27",
  /** Physical pin 28: P0.16; bidirectional. */
  "P0.16": "28",
  /** Physical pin 29: P0.17; bidirectional. */
  "P0.17": "29",
  /** Physical pin 30: P0.18; bidirectional. */
  "P0.18": "30",
  /** Physical pin 31: P0.19; bidirectional. */
  "P0.19": "31",
  /** Physical pin 32: VREG1; passive. */
  "VREG1": "32",
  /** Physical pin 33: HFXIN; input. */
  "HFXIN": "33",
  /** Physical pin 34: HFXOUT; output. */
  "HFXOUT": "34",
  /** Physical pin 35: ~{RSTN}; input. */
  "~{RSTN}": "35",
  /** Physical pin 36: V_{SS}; power_in. */
  "V_{SS}_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD": "37",
  /** Physical pin 38: 32KOUT; output. */
  "32KOUT": "38",
  /** Physical pin 39: 32KIN; input. */
  "32KIN": "39",
  /** Physical pin 40: VCORE; passive. */
  "VCORE": "40",
  /** Physical pin 41: V_{SS}; passive. */
  "V_{SS}_41": "41",
}) {
  override schema = "MCU_AnalogDevices:MAX32670GTL";
  override referencePrefix = "U";
}

