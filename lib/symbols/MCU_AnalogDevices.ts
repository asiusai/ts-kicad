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
 */
export class ADUC816BSZ extends Component.withPins({
  "P1.0/T2": "1",
  "P1.1/T2EX": "2",
  "P1.2/DAC/IEXC1": "3",
  "P1.3/AIN5/IEXC2": "4",
  "AV_{DD}": "5",
  "AGND": "6",
  "REFIN(-)": "7",
  "REFIN(+)": "8",
  "P1.4/AIN1": "9",
  "P1.5/AIN2": "10",
  "P1.6/AIN3": "11",
  "P1.7/AIN4/DAC": "12",
  "~{SS}": "13",
  "MISO": "14",
  "RESET": "15",
  "RXD/P3.0": "16",
  "TXD/P3.1": "17",
  "~{INT0}/P3.2": "18",
  "~{INT1}/P3.3": "19",
  "DV_{DD}_20": "20",
  "DGND_21": "21",
  "T0/P3.4": "22",
  "T1/P3.5": "23",
  "~{WR}/P3.6": "24",
  "~{RD}/P3.7": "25",
  "SCLOCK": "26",
  "SDATA/MOSI": "27",
  "A8/P2.0": "28",
  "A9/P2.1": "29",
  "A10/P2.2": "30",
  "A11/P2.3": "31",
  "XTAL1": "32",
  "XTAL2": "33",
  "DV_{DD}_34": "34",
  "DGND_35": "35",
  "A12/P2.4": "36",
  "A13/P2.5": "37",
  "A14/P2.6": "38",
  "A15/P2.7": "39",
  "~{EA}": "40",
  "~{PSEN}": "41",
  "ALE": "42",
  "AD0/P0.0": "43",
  "AD1/P0.1": "44",
  "AD2/P0.2": "45",
  "AD3/P0.3": "46",
  "DGND_47": "47",
  "DV_{DD}_48": "48",
  "AD4/P0.4": "49",
  "AD5/P0.5": "50",
  "AD6/P0.6": "51",
  "AD7/P0.7": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.0/T2": "bidirectional", "P1.1/T2EX": "bidirectional", "P1.2/DAC/IEXC1": "bidirectional", "P1.3/AIN5/IEXC2": "bidirectional", "AV_{DD}": "power_in", AGND: "power_in", "REFIN(-)": "passive", "REFIN(+)": "passive", "P1.4/AIN1": "input", "P1.5/AIN2": "input", "P1.6/AIN3": "input", "P1.7/AIN4/DAC": "bidirectional", "~{SS}": "input", MISO: "input", RESET: "input", "RXD/P3.0": "bidirectional", "TXD/P3.1": "bidirectional", "~{INT0}/P3.2": "bidirectional", "~{INT1}/P3.3": "bidirectional", "DV_{DD}_20": "power_in", DGND_21: "power_in", "T0/P3.4": "bidirectional", "T1/P3.5": "bidirectional", "~{WR}/P3.6": "bidirectional", "~{RD}/P3.7": "bidirectional", SCLOCK: "bidirectional", "SDATA/MOSI": "bidirectional", "A8/P2.0": "bidirectional", "A9/P2.1": "bidirectional", "A10/P2.2": "bidirectional", "A11/P2.3": "bidirectional", XTAL1: "input", XTAL2: "output", "DV_{DD}_34": "passive", DGND_35: "passive", "A12/P2.4": "bidirectional", "A13/P2.5": "bidirectional", "A14/P2.6": "bidirectional", "A15/P2.7": "bidirectional", "~{EA}": "bidirectional", "~{PSEN}": "output", ALE: "output", "AD0/P0.0": "bidirectional", "AD1/P0.1": "bidirectional", "AD2/P0.2": "bidirectional", "AD3/P0.3": "bidirectional", DGND_47: "passive", "DV_{DD}_48": "passive", "AD4/P0.4": "bidirectional", "AD5/P0.5": "bidirectional", "AD6/P0.6": "bidirectional", "AD7/P0.7": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MAX32660GTP extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "P0.13": "3",
  "P0.12": "4",
  "~{RSTN}": "5",
  "V_{SS}_6": "6",
  "32KOUT": "7",
  "32KIN": "8",
  "VDD": "9",
  "VCORE": "10",
  "P0.9": "11",
  "P0.8": "12",
  "P0.11": "13",
  "P0.10": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "V_{SS}_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", "P0.13": "bidirectional", "P0.12": "bidirectional", "~{RSTN}": "input", "V_{SS}_6": "power_in", "32KOUT": "output", "32KIN": "input", VDD: "power_in", VCORE: "passive", "P0.9": "bidirectional", "P0.8": "bidirectional", "P0.11": "bidirectional", "P0.10": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX32670GTL extends Component.withPins({
  "P0.20": "1",
  "P0.21": "2",
  "P0.22": "3",
  "P0.0": "4",
  "P0.1": "5",
  "P0.2": "6",
  "P0.3": "7",
  "P0.4": "8",
  "P0.5": "9",
  "P0.6": "10",
  "P0.7": "11",
  "P0.23": "12",
  "P0.24": "13",
  "P0.25": "14",
  "P0.26": "15",
  "P0.27": "16",
  "P0.28": "17",
  "P0.29": "18",
  "P0.30": "19",
  "P0.8": "20",
  "P0.9": "21",
  "P0.10": "22",
  "P0.11": "23",
  "P0.12": "24",
  "P0.13": "25",
  "P0.14": "26",
  "P0.15": "27",
  "P0.16": "28",
  "P0.17": "29",
  "P0.18": "30",
  "P0.19": "31",
  "VREG1": "32",
  "HFXIN": "33",
  "HFXOUT": "34",
  "~{RSTN}": "35",
  "V_{SS}_36": "36",
  "VDD": "37",
  "32KOUT": "38",
  "32KIN": "39",
  "VCORE": "40",
  "V_{SS}_41": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.20": "bidirectional", "P0.21": "bidirectional", "P0.22": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P0.23": "bidirectional", "P0.24": "bidirectional", "P0.25": "bidirectional", "P0.26": "bidirectional", "P0.27": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", "P0.8": "bidirectional", "P0.9": "bidirectional", "P0.10": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P0.14": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "P0.18": "bidirectional", "P0.19": "bidirectional", VREG1: "passive", HFXIN: "input", HFXOUT: "output", "~{RSTN}": "input", "V_{SS}_36": "power_in", VDD: "power_in", "32KOUT": "output", "32KIN": "input", VCORE: "passive", "V_{SS}_41": "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_AnalogDevices:MAX32670GTL";
  override referencePrefix = "U";
}
