// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Quad 12bit DAC, 4LSB Gain Error, DH-28
 *
 * KiCad symbol: `Analog_DAC:AD390JD`. Reference prefix: `U`.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD390MIL.pdf
 * Keywords: 4ch DAC 12bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD390JD extends Component.withPins({
  /** Physical pin 1: D0; input. */
  "D0": "1",
  /** Physical pin 2: D1; input. */
  "D1": "2",
  /** Physical pin 3: D2; input. */
  "D2": "3",
  /** Physical pin 4: D3; input. */
  "D3": "4",
  /** Physical pin 5: D4; input. */
  "D4": "5",
  /** Physical pin 6: D5; input. */
  "D5": "6",
  /** Physical pin 7: D6; input. */
  "D6": "7",
  /** Physical pin 8: D7; input. */
  "D7": "8",
  /** Physical pin 9: D8; input. */
  "D8": "9",
  /** Physical pin 10: D9; input. */
  "D9": "10",
  /** Physical pin 11: D10; input. */
  "D10": "11",
  /** Physical pin 12: D11; input. */
  "D11": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: -VS; power_in. */
  "-VS": "14",
  /** Physical pin 15: AGND; passive. */
  "AGND": "15",
  /** Physical pin 16: REFOUT; passive. */
  "REFOUT": "16",
  /** Physical pin 17: REFIN; passive. */
  "REFIN": "17",
  /** Physical pin 18: VOUT1; passive. */
  "VOUT1": "18",
  /** Physical pin 19: VOUT2; passive. */
  "VOUT2": "19",
  /** Physical pin 20: VOUT3; passive. */
  "VOUT3": "20",
  /** Physical pin 21: VOUT4; passive. */
  "VOUT4": "21",
  /** Physical pin 22: +VS; power_in. */
  "+VS": "22",
  /** Physical pin 23: ~{A1}; input. */
  "~{A1}": "23",
  /** Physical pin 24: ~{A0}; input. */
  "~{A0}": "24",
  /** Physical pin 25: ~{CS1}; input. */
  "~{CS1}": "25",
  /** Physical pin 26: ~{CS2}; input. */
  "~{CS2}": "26",
  /** Physical pin 27: ~{CS3}; input. */
  "~{CS3}": "27",
  /** Physical pin 28: ~{CS4}; input. */
  "~{CS4}": "28",
}) {
  override schema = "Analog_DAC:AD390JD";
  override referencePrefix = "U";
}

/**
 * Quad 12bit DAC, 2LSB Gain Error, DH-28
 *
 * KiCad symbol: `Analog_DAC:AD390KD`. Reference prefix: `U`.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD390MIL.pdf
 * Keywords: 4ch DAC 12bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD390KD extends Component.withPins({
  /** Physical pin 1: D0; input. */
  "D0": "1",
  /** Physical pin 2: D1; input. */
  "D1": "2",
  /** Physical pin 3: D2; input. */
  "D2": "3",
  /** Physical pin 4: D3; input. */
  "D3": "4",
  /** Physical pin 5: D4; input. */
  "D4": "5",
  /** Physical pin 6: D5; input. */
  "D5": "6",
  /** Physical pin 7: D6; input. */
  "D6": "7",
  /** Physical pin 8: D7; input. */
  "D7": "8",
  /** Physical pin 9: D8; input. */
  "D8": "9",
  /** Physical pin 10: D9; input. */
  "D9": "10",
  /** Physical pin 11: D10; input. */
  "D10": "11",
  /** Physical pin 12: D11; input. */
  "D11": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: -VS; power_in. */
  "-VS": "14",
  /** Physical pin 15: AGND; passive. */
  "AGND": "15",
  /** Physical pin 16: REFOUT; passive. */
  "REFOUT": "16",
  /** Physical pin 17: REFIN; passive. */
  "REFIN": "17",
  /** Physical pin 18: VOUT1; passive. */
  "VOUT1": "18",
  /** Physical pin 19: VOUT2; passive. */
  "VOUT2": "19",
  /** Physical pin 20: VOUT3; passive. */
  "VOUT3": "20",
  /** Physical pin 21: VOUT4; passive. */
  "VOUT4": "21",
  /** Physical pin 22: +VS; power_in. */
  "+VS": "22",
  /** Physical pin 23: ~{A1}; input. */
  "~{A1}": "23",
  /** Physical pin 24: ~{A0}; input. */
  "~{A0}": "24",
  /** Physical pin 25: ~{CS1}; input. */
  "~{CS1}": "25",
  /** Physical pin 26: ~{CS2}; input. */
  "~{CS2}": "26",
  /** Physical pin 27: ~{CS3}; input. */
  "~{CS3}": "27",
  /** Physical pin 28: ~{CS4}; input. */
  "~{CS4}": "28",
}) {
  override schema = "Analog_DAC:AD390KD";
  override referencePrefix = "U";
}

/**
 * Single 8-bit DAC, Internal Reference, Output Amp, Single Supply, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD558JN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD558.pdf
 * Keywords: 8bit DAC Reference Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD558JN extends Component.withPins({
  /** Physical pin 1: DB0; input. */
  "DB0": "1",
  /** Physical pin 2: DB1; input. */
  "DB1": "2",
  /** Physical pin 3: DB2; input. */
  "DB2": "3",
  /** Physical pin 4: DB3; input. */
  "DB3": "4",
  /** Physical pin 5: DB4; input. */
  "DB4": "5",
  /** Physical pin 6: DB5; input. */
  "DB5": "6",
  /** Physical pin 7: DB6; input. */
  "DB6": "7",
  /** Physical pin 8: DB7; input. */
  "DB7": "8",
  /** Physical pin 9: ~{CE}; input. */
  "~{CE}": "9",
  /** Physical pin 10: ~{CS}; input. */
  "~{CS}": "10",
  /** Physical pin 11: V+; power_in. */
  "V+": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND": "13",
  /** Physical pin 14: VSEL; input. */
  "VSEL": "14",
  /** Physical pin 15: VSEN; input. */
  "VSEN": "15",
  /** Physical pin 16: VOUT; output. */
  "VOUT": "16",
}) {
  override schema = "Analog_DAC:AD558JN";
  override referencePrefix = "U";
}

/**
 * Single 8-bit DAC, Internal Reference, Output Amp, Single Supply, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD558JP`. Reference prefix: `U`.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD558.pdf
 * Keywords: 8bit DAC Reference Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD558JP extends Component.withPins({
  /** Physical pin 2: DB0; input. */
  "DB0": "2",
  /** Physical pin 3: DB1; input. */
  "DB1": "3",
  /** Physical pin 4: DB2; input. */
  "DB2": "4",
  /** Physical pin 5: DB3; input. */
  "DB3": "5",
  /** Physical pin 7: DB4; input. */
  "DB4": "7",
  /** Physical pin 8: DB5; input. */
  "DB5": "8",
  /** Physical pin 9: DB6; input. */
  "DB6": "9",
  /** Physical pin 10: DB7; input. */
  "DB7": "10",
  /** Physical pin 12: ~{CE}; input. */
  "~{CE}": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: V+; power_in. */
  "V+": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 17: AGND; power_in. */
  "AGND": "17",
  /** Physical pin 18: VSEL; input. */
  "VSEL": "18",
  /** Physical pin 19: VSEN; input. */
  "VSEN": "19",
  /** Physical pin 20: VOUT; output. */
  "VOUT": "20",
}) {
  override schema = "Analog_DAC:AD558JP";
  override referencePrefix = "U";
}

/**
 * Single 8-bit DAC, Internal Reference, Output Amp, Single Supply, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD558KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD558.pdf
 * Keywords: 8bit DAC Reference Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD558KN extends Component.withPins({
  /** Physical pin 1: DB0; input. */
  "DB0": "1",
  /** Physical pin 2: DB1; input. */
  "DB1": "2",
  /** Physical pin 3: DB2; input. */
  "DB2": "3",
  /** Physical pin 4: DB3; input. */
  "DB3": "4",
  /** Physical pin 5: DB4; input. */
  "DB4": "5",
  /** Physical pin 6: DB5; input. */
  "DB5": "6",
  /** Physical pin 7: DB6; input. */
  "DB6": "7",
  /** Physical pin 8: DB7; input. */
  "DB7": "8",
  /** Physical pin 9: ~{CE}; input. */
  "~{CE}": "9",
  /** Physical pin 10: ~{CS}; input. */
  "~{CS}": "10",
  /** Physical pin 11: V+; power_in. */
  "V+": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND": "13",
  /** Physical pin 14: VSEL; input. */
  "VSEL": "14",
  /** Physical pin 15: VSEN; input. */
  "VSEN": "15",
  /** Physical pin 16: VOUT; output. */
  "VOUT": "16",
}) {
  override schema = "Analog_DAC:AD558KN";
  override referencePrefix = "U";
}

/**
 * Single 8-bit DAC, Internal Reference, Output Amp, Single Supply, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD558KP`. Reference prefix: `U`.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD558.pdf
 * Keywords: 8bit DAC Reference Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD558KP extends Component.withPins({
  /** Physical pin 2: DB0; input. */
  "DB0": "2",
  /** Physical pin 3: DB1; input. */
  "DB1": "3",
  /** Physical pin 4: DB2; input. */
  "DB2": "4",
  /** Physical pin 5: DB3; input. */
  "DB3": "5",
  /** Physical pin 7: DB4; input. */
  "DB4": "7",
  /** Physical pin 8: DB5; input. */
  "DB5": "8",
  /** Physical pin 9: DB6; input. */
  "DB6": "9",
  /** Physical pin 10: DB7; input. */
  "DB7": "10",
  /** Physical pin 12: ~{CE}; input. */
  "~{CE}": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: V+; power_in. */
  "V+": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 17: AGND; power_in. */
  "AGND": "17",
  /** Physical pin 18: VSEL; input. */
  "VSEL": "18",
  /** Physical pin 19: VSEN; input. */
  "VSEN": "19",
  /** Physical pin 20: VOUT; output. */
  "VOUT": "20",
}) {
  override schema = "Analog_DAC:AD558KP";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with SPI Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5687BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689_5687.pdf
 * Keywords: dac 2nch 12bit spi.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5687BCPZ extends Component.withPins({
  /** Physical pin 1: VOUTA; output. */
  "VOUTA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VOUTB; output. */
  "VOUTB": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: ~{LDAC}; input. */
  "~{LDAC}": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN": "8",
  /** Physical pin 9: VLOGIC; power_in. */
  "VLOGIC": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: ~{SYNC}; input. */
  "~{SYNC}": "11",
  /** Physical pin 12: SDIN; input. */
  "SDIN": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: RSTSEL; input. */
  "RSTSEL": "14",
  /** Physical pin 15: VREF; power_in. */
  "VREF": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Analog_DAC:AD5687BCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with SPI Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5687BRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689_5687.pdf
 * Keywords: dac 2nch 12bit spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5687BRUZ extends Component.withPins({
  /** Physical pin 1: VREF; power_in. */
  "VREF": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VOUTB; output. */
  "VOUTB": "7",
  /** Physical pin 8: SDO; output. */
  "SDO": "8",
  /** Physical pin 9: ~{LDAC}; input. */
  "~{LDAC}": "9",
  /** Physical pin 10: GAIN; input. */
  "GAIN": "10",
  /** Physical pin 11: VLOGIC; power_in. */
  "VLOGIC": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: ~{SYNC}; input. */
  "~{SYNC}": "13",
  /** Physical pin 14: SDIN; input. */
  "SDIN": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: RSTSEL; input. */
  "RSTSEL": "16",
}) {
  override schema = "Analog_DAC:AD5687BRUZ";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with 2 ppm/°C Reference, SPI Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5687RBCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689R_5687R.pdf
 * Keywords: dac 2nch 12bit spi.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5687RBCPZ extends Component.withPins({
  /** Physical pin 1: VOUTA; output. */
  "VOUTA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VOUTB; output. */
  "VOUTB": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: ~{LDAC}; input. */
  "~{LDAC}": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN": "8",
  /** Physical pin 9: VLOGIC; power_in. */
  "VLOGIC": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: ~{SYNC}; input. */
  "~{SYNC}": "11",
  /** Physical pin 12: SDIN; input. */
  "SDIN": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: RSTSEL; input. */
  "RSTSEL": "14",
  /** Physical pin 15: VREF; power_in. */
  "VREF": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Analog_DAC:AD5687RBCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with 2 ppm/°C Reference, SPI Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5687RBRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689R_5687R.pdf
 * Keywords: dac 2nch 12bit spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5687RBRUZ extends Component.withPins({
  /** Physical pin 1: VREF; power_in. */
  "VREF": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VOUTB; output. */
  "VOUTB": "7",
  /** Physical pin 8: SDO; output. */
  "SDO": "8",
  /** Physical pin 9: ~{LDAC}; input. */
  "~{LDAC}": "9",
  /** Physical pin 10: GAIN; input. */
  "GAIN": "10",
  /** Physical pin 11: VLOGIC; power_in. */
  "VLOGIC": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: ~{SYNC}; input. */
  "~{SYNC}": "13",
  /** Physical pin 14: SDIN; input. */
  "SDIN": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: RSTSEL; input. */
  "RSTSEL": "16",
}) {
  override schema = "Analog_DAC:AD5687RBRUZ";
  override referencePrefix = "U";
}

/**
 * Dual, 16-Bit nanoDAC+ with SPI Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5689BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689_5687.pdf
 * Keywords: dac 2nch 16bit spi.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5689BCPZ extends Component.withPins({
  /** Physical pin 1: VOUTA; output. */
  "VOUTA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VOUTB; output. */
  "VOUTB": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: ~{LDAC}; input. */
  "~{LDAC}": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN": "8",
  /** Physical pin 9: VLOGIC; power_in. */
  "VLOGIC": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: ~{SYNC}; input. */
  "~{SYNC}": "11",
  /** Physical pin 12: SDIN; input. */
  "SDIN": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: RSTSEL; input. */
  "RSTSEL": "14",
  /** Physical pin 15: VREF; power_in. */
  "VREF": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Analog_DAC:AD5689BCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 16-Bit nanoDAC+ with SPI Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5689BRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689_5687.pdf
 * Keywords: dac 2nch 16bit spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5689BRUZ extends Component.withPins({
  /** Physical pin 1: VREF; power_in. */
  "VREF": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VOUTB; output. */
  "VOUTB": "7",
  /** Physical pin 8: SDO; output. */
  "SDO": "8",
  /** Physical pin 9: ~{LDAC}; input. */
  "~{LDAC}": "9",
  /** Physical pin 10: GAIN; input. */
  "GAIN": "10",
  /** Physical pin 11: VLOGIC; power_in. */
  "VLOGIC": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: ~{SYNC}; input. */
  "~{SYNC}": "13",
  /** Physical pin 14: SDIN; input. */
  "SDIN": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: RSTSEL; input. */
  "RSTSEL": "16",
}) {
  override schema = "Analog_DAC:AD5689BRUZ";
  override referencePrefix = "U";
}

/**
 * Dual, 16-Bit nanoDAC+ with 2 ppm/°C Reference, SPI Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5689RxCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689R_5687R.pdf
 * Keywords: dac 2nch 16bit spi.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5689RxCPZ extends Component.withPins({
  /** Physical pin 1: VOUTA; output. */
  "VOUTA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VOUTB; output. */
  "VOUTB": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: ~{LDAC}; input. */
  "~{LDAC}": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN": "8",
  /** Physical pin 9: VLOGIC; power_in. */
  "VLOGIC": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: ~{SYNC}; input. */
  "~{SYNC}": "11",
  /** Physical pin 12: SDIN; input. */
  "SDIN": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: RSTSEL; input. */
  "RSTSEL": "14",
  /** Physical pin 15: VREF; power_in. */
  "VREF": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Analog_DAC:AD5689RxCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 16-Bit nanoDAC+ with 2 ppm/°C Reference, SPI Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5689RxRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689R_5687R.pdf
 * Keywords: dac 2nch 16bit spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5689RxRUZ extends Component.withPins({
  /** Physical pin 1: VREF; power_in. */
  "VREF": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VOUTB; output. */
  "VOUTB": "7",
  /** Physical pin 8: SDO; output. */
  "SDO": "8",
  /** Physical pin 9: ~{LDAC}; input. */
  "~{LDAC}": "9",
  /** Physical pin 10: GAIN; input. */
  "GAIN": "10",
  /** Physical pin 11: VLOGIC; power_in. */
  "VLOGIC": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: ~{SYNC}; input. */
  "~{SYNC}": "13",
  /** Physical pin 14: SDIN; input. */
  "SDIN": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: RSTSEL; input. */
  "RSTSEL": "16",
}) {
  override schema = "Analog_DAC:AD5689RxRUZ";
  override referencePrefix = "U";
}

/**
 * Tiny, 12-Bit, I2C, nanoDAC+, 2 ppm/°C Reference, MSOP-10
 *
 * KiCad symbol: `Analog_DAC:AD5691RxRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5693R_5692R_5691R_5693.pdf
 * Keywords: serial DAC i2c digital analog converter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5691RxRM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VLOGIC; power_in. */
  "VLOGIC": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: ~{LDAC}; input. */
  "~{LDAC}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A0; input. */
  "A0": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: VREF; passive. */
  "VREF": "9",
  /** Physical pin 10: VOUT; output. */
  "VOUT": "10",
}) {
  override schema = "Analog_DAC:AD5691RxRM";
  override referencePrefix = "U";
}

/**
 * Tiny, 14-Bit, I2C, nanoDAC+, 2 ppm/°C Reference, MSOP-10
 *
 * KiCad symbol: `Analog_DAC:AD5692RxRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5693R_5692R_5691R_5693.pdf
 * Keywords: serial DAC i2c digital analog converter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5692RxRM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VLOGIC; power_in. */
  "VLOGIC": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: ~{LDAC}; input. */
  "~{LDAC}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A0; input. */
  "A0": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: VREF; passive. */
  "VREF": "9",
  /** Physical pin 10: VOUT; output. */
  "VOUT": "10",
}) {
  override schema = "Analog_DAC:AD5692RxRM";
  override referencePrefix = "U";
}

/**
 * Tiny, 16-Bit, I2C, nanoDAC+, 2 ppm/°C Reference, MSOP-10
 *
 * KiCad symbol: `Analog_DAC:AD5693RxRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5693R_5692R_5691R_5693.pdf
 * Keywords: serial DAC i2c digital analog converter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5693RxRM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VLOGIC; power_in. */
  "VLOGIC": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: ~{LDAC}; input. */
  "~{LDAC}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: A0; input. */
  "A0": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: VREF; passive. */
  "VREF": "9",
  /** Physical pin 10: VOUT; output. */
  "VOUT": "10",
}) {
  override schema = "Analog_DAC:AD5693RxRM";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with 2 ppm/°C Reference, I2C Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5697RBCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5697R.pdf
 * Keywords: dac 2nch 12bit i2c.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5697RBCPZ extends Component.withPins({
  /** Physical pin 1: VOUTA; output. */
  "VOUTA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VOUTB; output. */
  "VOUTB": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: ~{LDAC}; input. */
  "~{LDAC}": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN": "8",
  /** Physical pin 9: VLOGIC; power_in. */
  "VLOGIC": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: SCL; input. */
  "SCL": "11",
  /** Physical pin 12: A1; input. */
  "A1": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: RSTSEL; input. */
  "RSTSEL": "14",
  /** Physical pin 15: VREF; power_in. */
  "VREF": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Analog_DAC:AD5697RBCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with 2 ppm/°C Reference, I2C Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5697RBRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5697R.pdf
 * Keywords: dac 2nch 12bit i2c.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5697RBRUZ extends Component.withPins({
  /** Physical pin 1: VREF; power_in. */
  "VREF": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VOUTB; output. */
  "VOUTB": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: ~{LDAC}; input. */
  "~{LDAC}": "9",
  /** Physical pin 10: GAIN; input. */
  "GAIN": "10",
  /** Physical pin 11: VLOGIC; power_in. */
  "VLOGIC": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: A1; input. */
  "A1": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: RSTSEL; input. */
  "RSTSEL": "16",
}) {
  override schema = "Analog_DAC:AD5697RBRUZ";
  override referencePrefix = "U";
}

/**
 * 18Bit, ±0,5 LSB INL, Voltage Output DAC, TSSOP-20
 *
 * KiCad symbol: `Analog_DAC:AD5781xRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4?6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad5781.pdf
 * Keywords: 1ch.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5781xRUZ extends Component.withPins({
  /** Physical pin 1: INV; output. */
  "INV": "1",
  /** Physical pin 2: V_{OUT}; output. */
  "V_{OUT}": "2",
  /** Physical pin 3: V_{REFPS}; output. */
  "V_{REFPS}": "3",
  /** Physical pin 4: V_{REFPF}; input. */
  "V_{REFPF}": "4",
  /** Physical pin 5: V_{DD}; power_in. */
  "V_{DD}": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: ~{CLR}; input. */
  "~{CLR}": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: V_{CC}; power_in. */
  "V_{CC}": "9",
  /** Physical pin 10: IOV_{CC}; power_in. */
  "IOV_{CC}": "10",
  /** Physical pin 11: SDO; output. */
  "SDO": "11",
  /** Physical pin 12: SDIN; input. */
  "SDIN": "12",
  /** Physical pin 13: SCLK; input. */
  "SCLK": "13",
  /** Physical pin 14: ~{SYNC}; input. */
  "~{SYNC}": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 16: V_{REFNF}; input. */
  "V_{REFNF}": "16",
  /** Physical pin 17: V_{REFNS}; output. */
  "V_{REFNS}": "17",
  /** Physical pin 18: V_{SS}; power_in. */
  "V_{SS}": "18",
  /** Physical pin 19: AGND; power_in. */
  "AGND": "19",
  /** Physical pin 20: R_{FB}; passive. */
  "R_{FB}": "20",
}) {
  override schema = "Analog_DAC:AD5781xRUZ";
  override referencePrefix = "U";
}

/**
 * 1 ppm, 20-Bit, ±1 LSB INL, Voltage Output DAC, TSSOP-20
 *
 * KiCad symbol: `Analog_DAC:AD5791xRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4?6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad5791.pdf
 * Keywords: 1ch.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5791xRUZ extends Component.withPins({
  /** Physical pin 1: INV; output. */
  "INV": "1",
  /** Physical pin 2: V_{OUT}; output. */
  "V_{OUT}": "2",
  /** Physical pin 3: V_{REFPS}; output. */
  "V_{REFPS}": "3",
  /** Physical pin 4: V_{REFPF}; input. */
  "V_{REFPF}": "4",
  /** Physical pin 5: V_{DD}; power_in. */
  "V_{DD}": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: ~{CLR}; input. */
  "~{CLR}": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: V_{CC}; power_in. */
  "V_{CC}": "9",
  /** Physical pin 10: IOV_{CC}; power_in. */
  "IOV_{CC}": "10",
  /** Physical pin 11: SDO; output. */
  "SDO": "11",
  /** Physical pin 12: SDIN; input. */
  "SDIN": "12",
  /** Physical pin 13: SCLK; input. */
  "SCLK": "13",
  /** Physical pin 14: ~{SYNC}; input. */
  "~{SYNC}": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 16: V_{REFNF}; input. */
  "V_{REFNF}": "16",
  /** Physical pin 17: V_{REFNS}; output. */
  "V_{REFNS}": "17",
  /** Physical pin 18: V_{SS}; power_in. */
  "V_{SS}": "18",
  /** Physical pin 19: AGND; power_in. */
  "AGND": "19",
  /** Physical pin 20: R_{FB}; passive. */
  "R_{FB}": "20",
}) {
  override schema = "Analog_DAC:AD5791xRUZ";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, DIP-18
 *
 * KiCad symbol: `Analog_DAC:AD7224KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7224KN extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: VOUT; output. */
  "VOUT": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: AGND; passive. */
  "AGND": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: DB7(MSB); input. */
  "DB7(MSB)": "6",
  /** Physical pin 7: DB6; input. */
  "DB6": "7",
  /** Physical pin 8: DB5; input. */
  "DB5": "8",
  /** Physical pin 9: DB4; input. */
  "DB4": "9",
  /** Physical pin 10: DB3; input. */
  "DB3": "10",
  /** Physical pin 11: DB2; input. */
  "DB2": "11",
  /** Physical pin 12: DB1; input. */
  "DB1": "12",
  /** Physical pin 13: DB0(LSB); input. */
  "DB0(LSB)": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: ~{LDAC}; input. */
  "~{LDAC}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
}) {
  override schema = "Analog_DAC:AD7224KN";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7224KP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7224KP extends Component.withPins({
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VOUT; output. */
  "VOUT": "3",
  /** Physical pin 4: VREF; passive. */
  "VREF": "4",
  /** Physical pin 5: AGND; passive. */
  "AGND": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND": "6",
  /** Physical pin 7: DB7(MSB); input. */
  "DB7(MSB)": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 12: DB3; input. */
  "DB3": "12",
  /** Physical pin 13: DB2; input. */
  "DB2": "13",
  /** Physical pin 14: DB1; input. */
  "DB1": "14",
  /** Physical pin 15: DB0(LSB); input. */
  "DB0(LSB)": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: ~{LDAC}; input. */
  "~{LDAC}": "18",
  /** Physical pin 19: ~{RST}; input. */
  "~{RST}": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Analog_DAC:AD7224KP";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, SOIC-20
 *
 * KiCad symbol: `Analog_DAC:AD7224KR-1`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7224KR_1 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: VOUT; output. */
  "VOUT": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: AGND; passive. */
  "AGND": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: DB7(MSB); input. */
  "DB7(MSB)": "6",
  /** Physical pin 7: DB6; input. */
  "DB6": "7",
  /** Physical pin 8: DB5; input. */
  "DB5": "8",
  /** Physical pin 9: DB4; input. */
  "DB4": "9",
  /** Physical pin 12: DB3; input. */
  "DB3": "12",
  /** Physical pin 13: DB2; input. */
  "DB2": "13",
  /** Physical pin 14: DB1; input. */
  "DB1": "14",
  /** Physical pin 15: DB0(LSB); input. */
  "DB0(LSB)": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: ~{LDAC}; input. */
  "~{LDAC}": "18",
  /** Physical pin 19: ~{RST}; input. */
  "~{RST}": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Analog_DAC:AD7224KR-1";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, SOIC-18
 *
 * KiCad symbol: `Analog_DAC:AD7224KR-18`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7224KR_18 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: VOUT; output. */
  "VOUT": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: AGND; passive. */
  "AGND": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: DB7(MSB); input. */
  "DB7(MSB)": "6",
  /** Physical pin 7: DB6; input. */
  "DB6": "7",
  /** Physical pin 8: DB5; input. */
  "DB5": "8",
  /** Physical pin 9: DB4; input. */
  "DB4": "9",
  /** Physical pin 10: DB3; input. */
  "DB3": "10",
  /** Physical pin 11: DB2; input. */
  "DB2": "11",
  /** Physical pin 12: DB1; input. */
  "DB1": "12",
  /** Physical pin 13: DB0(LSB); input. */
  "DB0(LSB)": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: ~{LDAC}; input. */
  "~{LDAC}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
}) {
  override schema = "Analog_DAC:AD7224KR-18";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, DIP-18
 *
 * KiCad symbol: `Analog_DAC:AD7224LN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7224LN extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: VOUT; output. */
  "VOUT": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: AGND; passive. */
  "AGND": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: DB7(MSB); input. */
  "DB7(MSB)": "6",
  /** Physical pin 7: DB6; input. */
  "DB6": "7",
  /** Physical pin 8: DB5; input. */
  "DB5": "8",
  /** Physical pin 9: DB4; input. */
  "DB4": "9",
  /** Physical pin 10: DB3; input. */
  "DB3": "10",
  /** Physical pin 11: DB2; input. */
  "DB2": "11",
  /** Physical pin 12: DB1; input. */
  "DB1": "12",
  /** Physical pin 13: DB0(LSB); input. */
  "DB0(LSB)": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: ~{LDAC}; input. */
  "~{LDAC}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
}) {
  override schema = "Analog_DAC:AD7224LN";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7224LP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7224LP extends Component.withPins({
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VOUT; output. */
  "VOUT": "3",
  /** Physical pin 4: VREF; passive. */
  "VREF": "4",
  /** Physical pin 5: AGND; passive. */
  "AGND": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND": "6",
  /** Physical pin 7: DB7(MSB); input. */
  "DB7(MSB)": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 12: DB3; input. */
  "DB3": "12",
  /** Physical pin 13: DB2; input. */
  "DB2": "13",
  /** Physical pin 14: DB1; input. */
  "DB1": "14",
  /** Physical pin 15: DB0(LSB); input. */
  "DB0(LSB)": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: ~{LDAC}; input. */
  "~{LDAC}": "18",
  /** Physical pin 19: ~{RST}; input. */
  "~{RST}": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Analog_DAC:AD7224LP";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, SOIC-20
 *
 * KiCad symbol: `Analog_DAC:AD7224LR-1`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7224LR_1 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: VOUT; output. */
  "VOUT": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: AGND; passive. */
  "AGND": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: DB7(MSB); input. */
  "DB7(MSB)": "6",
  /** Physical pin 7: DB6; input. */
  "DB6": "7",
  /** Physical pin 8: DB5; input. */
  "DB5": "8",
  /** Physical pin 9: DB4; input. */
  "DB4": "9",
  /** Physical pin 12: DB3; input. */
  "DB3": "12",
  /** Physical pin 13: DB2; input. */
  "DB2": "13",
  /** Physical pin 14: DB1; input. */
  "DB1": "14",
  /** Physical pin 15: DB0(LSB); input. */
  "DB0(LSB)": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: ~{LDAC}; input. */
  "~{LDAC}": "18",
  /** Physical pin 19: ~{RST}; input. */
  "~{RST}": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Analog_DAC:AD7224LR-1";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, SOIC-18
 *
 * KiCad symbol: `Analog_DAC:AD7224LR-18`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7224LR_18 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: VOUT; output. */
  "VOUT": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: AGND; passive. */
  "AGND": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: DB7(MSB); input. */
  "DB7(MSB)": "6",
  /** Physical pin 7: DB6; input. */
  "DB6": "7",
  /** Physical pin 8: DB5; input. */
  "DB5": "8",
  /** Physical pin 9: DB4; input. */
  "DB4": "9",
  /** Physical pin 10: DB3; input. */
  "DB3": "10",
  /** Physical pin 11: DB2; input. */
  "DB2": "11",
  /** Physical pin 12: DB1; input. */
  "DB1": "12",
  /** Physical pin 13: DB0(LSB); input. */
  "DB0(LSB)": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: ~{LDAC}; input. */
  "~{LDAC}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
}) {
  override schema = "Analog_DAC:AD7224LR-18";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, SSOP-24
 *
 * KiCad symbol: `Analog_DAC:AD7225BRS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7225BRS extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREFB; input. */
  "VREFB": "4",
  /** Physical pin 5: VREFA; input. */
  "VREFA": "5",
  /** Physical pin 6: AGND; input. */
  "AGND": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: DB7; input. */
  "DB7": "9",
  /** Physical pin 10: DB6; input. */
  "DB6": "10",
  /** Physical pin 11: DB5; input. */
  "DB5": "11",
  /** Physical pin 12: DB4; input. */
  "DB4": "12",
  /** Physical pin 13: DB3; input. */
  "DB3": "13",
  /** Physical pin 14: DB2; input. */
  "DB2": "14",
  /** Physical pin 15: DB1; input. */
  "DB1": "15",
  /** Physical pin 16: DB0; input. */
  "DB0": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: A1; input. */
  "A1": "18",
  /** Physical pin 19: A0; input. */
  "A0": "19",
  /** Physical pin 20: VREFD; input. */
  "VREFD": "20",
  /** Physical pin 21: VREFC; input. */
  "VREFC": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD": "22",
  /** Physical pin 23: VOUTD; output. */
  "VOUTD": "23",
  /** Physical pin 24: VOUTC; output. */
  "VOUTC": "24",
}) {
  override schema = "Analog_DAC:AD7225BRS";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, SSOP-24
 *
 * KiCad symbol: `Analog_DAC:AD7225CRS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7225CRS extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREFB; input. */
  "VREFB": "4",
  /** Physical pin 5: VREFA; input. */
  "VREFA": "5",
  /** Physical pin 6: AGND; input. */
  "AGND": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: DB7; input. */
  "DB7": "9",
  /** Physical pin 10: DB6; input. */
  "DB6": "10",
  /** Physical pin 11: DB5; input. */
  "DB5": "11",
  /** Physical pin 12: DB4; input. */
  "DB4": "12",
  /** Physical pin 13: DB3; input. */
  "DB3": "13",
  /** Physical pin 14: DB2; input. */
  "DB2": "14",
  /** Physical pin 15: DB1; input. */
  "DB1": "15",
  /** Physical pin 16: DB0; input. */
  "DB0": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: A1; input. */
  "A1": "18",
  /** Physical pin 19: A0; input. */
  "A0": "19",
  /** Physical pin 20: VREFD; input. */
  "VREFD": "20",
  /** Physical pin 21: VREFC; input. */
  "VREFC": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD": "22",
  /** Physical pin 23: VOUTD; output. */
  "VOUTD": "23",
  /** Physical pin 24: VOUTC; output. */
  "VOUTC": "24",
}) {
  override schema = "Analog_DAC:AD7225CRS";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, PDIP-24
 *
 * KiCad symbol: `Analog_DAC:AD7225KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7225KN extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREFB; input. */
  "VREFB": "4",
  /** Physical pin 5: VREFA; input. */
  "VREFA": "5",
  /** Physical pin 6: AGND; input. */
  "AGND": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: DB7; input. */
  "DB7": "9",
  /** Physical pin 10: DB6; input. */
  "DB6": "10",
  /** Physical pin 11: DB5; input. */
  "DB5": "11",
  /** Physical pin 12: DB4; input. */
  "DB4": "12",
  /** Physical pin 13: DB3; input. */
  "DB3": "13",
  /** Physical pin 14: DB2; input. */
  "DB2": "14",
  /** Physical pin 15: DB1; input. */
  "DB1": "15",
  /** Physical pin 16: DB0; input. */
  "DB0": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: A1; input. */
  "A1": "18",
  /** Physical pin 19: A0; input. */
  "A0": "19",
  /** Physical pin 20: VREFD; input. */
  "VREFD": "20",
  /** Physical pin 21: VREFC; input. */
  "VREFC": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD": "22",
  /** Physical pin 23: VOUTD; output. */
  "VOUTD": "23",
  /** Physical pin 24: VOUTC; output. */
  "VOUTC": "24",
}) {
  override schema = "Analog_DAC:AD7225KN";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, PLCC-28
 *
 * KiCad symbol: `Analog_DAC:AD7225KP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7225KP extends Component.withPins({
  /** Physical pin 2: VOUTB; output. */
  "VOUTB": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: VREFB; input. */
  "VREFB": "5",
  /** Physical pin 6: VREFA; input. */
  "VREFA": "6",
  /** Physical pin 7: AGND; input. */
  "AGND": "7",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: ~{LDAC}; input. */
  "~{LDAC}": "10",
  /** Physical pin 11: DB7; input. */
  "DB7": "11",
  /** Physical pin 12: DB6; input. */
  "DB6": "12",
  /** Physical pin 13: DB5; input. */
  "DB5": "13",
  /** Physical pin 14: DB4; input. */
  "DB4": "14",
  /** Physical pin 16: DB3; input. */
  "DB3": "16",
  /** Physical pin 17: DB2; input. */
  "DB2": "17",
  /** Physical pin 18: DB1; input. */
  "DB1": "18",
  /** Physical pin 19: DB0; input. */
  "DB0": "19",
  /** Physical pin 20: ~{WR}; input. */
  "~{WR}": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: VREFD; input. */
  "VREFD": "24",
  /** Physical pin 25: VREFC; input. */
  "VREFC": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: VOUTD; output. */
  "VOUTD": "27",
  /** Physical pin 28: VOUTC; output. */
  "VOUTC": "28",
}) {
  override schema = "Analog_DAC:AD7225KP";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, SOIC-24
 *
 * KiCad symbol: `Analog_DAC:AD7225KR`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7225KR extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREFB; input. */
  "VREFB": "4",
  /** Physical pin 5: VREFA; input. */
  "VREFA": "5",
  /** Physical pin 6: AGND; input. */
  "AGND": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: DB7; input. */
  "DB7": "9",
  /** Physical pin 10: DB6; input. */
  "DB6": "10",
  /** Physical pin 11: DB5; input. */
  "DB5": "11",
  /** Physical pin 12: DB4; input. */
  "DB4": "12",
  /** Physical pin 13: DB3; input. */
  "DB3": "13",
  /** Physical pin 14: DB2; input. */
  "DB2": "14",
  /** Physical pin 15: DB1; input. */
  "DB1": "15",
  /** Physical pin 16: DB0; input. */
  "DB0": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: A1; input. */
  "A1": "18",
  /** Physical pin 19: A0; input. */
  "A0": "19",
  /** Physical pin 20: VREFD; input. */
  "VREFD": "20",
  /** Physical pin 21: VREFC; input. */
  "VREFC": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD": "22",
  /** Physical pin 23: VOUTD; output. */
  "VOUTD": "23",
  /** Physical pin 24: VOUTC; output. */
  "VOUTC": "24",
}) {
  override schema = "Analog_DAC:AD7225KR";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, PDIP-24
 *
 * KiCad symbol: `Analog_DAC:AD7225LN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7225LN extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREFB; input. */
  "VREFB": "4",
  /** Physical pin 5: VREFA; input. */
  "VREFA": "5",
  /** Physical pin 6: AGND; input. */
  "AGND": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: DB7; input. */
  "DB7": "9",
  /** Physical pin 10: DB6; input. */
  "DB6": "10",
  /** Physical pin 11: DB5; input. */
  "DB5": "11",
  /** Physical pin 12: DB4; input. */
  "DB4": "12",
  /** Physical pin 13: DB3; input. */
  "DB3": "13",
  /** Physical pin 14: DB2; input. */
  "DB2": "14",
  /** Physical pin 15: DB1; input. */
  "DB1": "15",
  /** Physical pin 16: DB0; input. */
  "DB0": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: A1; input. */
  "A1": "18",
  /** Physical pin 19: A0; input. */
  "A0": "19",
  /** Physical pin 20: VREFD; input. */
  "VREFD": "20",
  /** Physical pin 21: VREFC; input. */
  "VREFC": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD": "22",
  /** Physical pin 23: VOUTD; output. */
  "VOUTD": "23",
  /** Physical pin 24: VOUTC; output. */
  "VOUTC": "24",
}) {
  override schema = "Analog_DAC:AD7225LN";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, PLCC-28
 *
 * KiCad symbol: `Analog_DAC:AD7225LP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7225LP extends Component.withPins({
  /** Physical pin 2: VOUTB; output. */
  "VOUTB": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: VREFB; input. */
  "VREFB": "5",
  /** Physical pin 6: VREFA; input. */
  "VREFA": "6",
  /** Physical pin 7: AGND; input. */
  "AGND": "7",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: ~{LDAC}; input. */
  "~{LDAC}": "10",
  /** Physical pin 11: DB7; input. */
  "DB7": "11",
  /** Physical pin 12: DB6; input. */
  "DB6": "12",
  /** Physical pin 13: DB5; input. */
  "DB5": "13",
  /** Physical pin 14: DB4; input. */
  "DB4": "14",
  /** Physical pin 16: DB3; input. */
  "DB3": "16",
  /** Physical pin 17: DB2; input. */
  "DB2": "17",
  /** Physical pin 18: DB1; input. */
  "DB1": "18",
  /** Physical pin 19: DB0; input. */
  "DB0": "19",
  /** Physical pin 20: ~{WR}; input. */
  "~{WR}": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: VREFD; input. */
  "VREFD": "24",
  /** Physical pin 25: VREFC; input. */
  "VREFC": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: VOUTD; output. */
  "VOUTD": "27",
  /** Physical pin 28: VOUTC; output. */
  "VOUTC": "28",
}) {
  override schema = "Analog_DAC:AD7225LP";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, SO-24
 *
 * KiCad symbol: `Analog_DAC:AD7225LR`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7225LR extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREFB; input. */
  "VREFB": "4",
  /** Physical pin 5: VREFA; input. */
  "VREFA": "5",
  /** Physical pin 6: AGND; input. */
  "AGND": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: DB7; input. */
  "DB7": "9",
  /** Physical pin 10: DB6; input. */
  "DB6": "10",
  /** Physical pin 11: DB5; input. */
  "DB5": "11",
  /** Physical pin 12: DB4; input. */
  "DB4": "12",
  /** Physical pin 13: DB3; input. */
  "DB3": "13",
  /** Physical pin 14: DB2; input. */
  "DB2": "14",
  /** Physical pin 15: DB1; input. */
  "DB1": "15",
  /** Physical pin 16: DB0; input. */
  "DB0": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: A1; input. */
  "A1": "18",
  /** Physical pin 19: A0; input. */
  "A0": "19",
  /** Physical pin 20: VREFD; input. */
  "VREFD": "20",
  /** Physical pin 21: VREFC; input. */
  "VREFC": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD": "22",
  /** Physical pin 23: VOUTD; output. */
  "VOUTD": "23",
  /** Physical pin 24: VOUTC; output. */
  "VOUTC": "24",
}) {
  override schema = "Analog_DAC:AD7225LR";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, 4 Channel, Single Reference Voltage, SSOP-20
 *
 * KiCad symbol: `Analog_DAC:AD7226BRSZ`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7226.pdf
 * Keywords: 4CH DAC 8bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7226BRSZ extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREF; input. */
  "VREF": "4",
  /** Physical pin 5: AGND; input. */
  "AGND": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: DB7; input. */
  "DB7": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 11: DB3; input. */
  "DB3": "11",
  /** Physical pin 12: DB2; input. */
  "DB2": "12",
  /** Physical pin 13: DB1; input. */
  "DB1": "13",
  /** Physical pin 14: DB0; input. */
  "DB0": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A0; input. */
  "A0": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: VOUTD; output. */
  "VOUTD": "19",
  /** Physical pin 20: VOUTC; output. */
  "VOUTC": "20",
}) {
  override schema = "Analog_DAC:AD7226BRSZ";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, 4 Channel, Single Reference Voltage, DIP-20
 *
 * KiCad symbol: `Analog_DAC:AD7226KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7226.pdf
 * Keywords: 4CH DAC 8bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7226KN extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREF; input. */
  "VREF": "4",
  /** Physical pin 5: AGND; input. */
  "AGND": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: DB7; input. */
  "DB7": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 11: DB3; input. */
  "DB3": "11",
  /** Physical pin 12: DB2; input. */
  "DB2": "12",
  /** Physical pin 13: DB1; input. */
  "DB1": "13",
  /** Physical pin 14: DB0; input. */
  "DB0": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A0; input. */
  "A0": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: VOUTD; output. */
  "VOUTD": "19",
  /** Physical pin 20: VOUTC; output. */
  "VOUTC": "20",
}) {
  override schema = "Analog_DAC:AD7226KN";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, 4 Channel, Single Reference Voltage, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7226KP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7226.pdf
 * Keywords: 4CH DAC 8bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7226KP extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREF; input. */
  "VREF": "4",
  /** Physical pin 5: AGND; input. */
  "AGND": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: DB7; input. */
  "DB7": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 11: DB3; input. */
  "DB3": "11",
  /** Physical pin 12: DB2; input. */
  "DB2": "12",
  /** Physical pin 13: DB1; input. */
  "DB1": "13",
  /** Physical pin 14: DB0; input. */
  "DB0": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A0; input. */
  "A0": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: VOUTD; output. */
  "VOUTD": "19",
  /** Physical pin 20: VOUTC; output. */
  "VOUTC": "20",
}) {
  override schema = "Analog_DAC:AD7226KP";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, 4 Channel, Single Reference Voltage, SOIC-20
 *
 * KiCad symbol: `Analog_DAC:AD7226KR`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7226.pdf
 * Keywords: 4CH DAC 8bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7226KR extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREF; input. */
  "VREF": "4",
  /** Physical pin 5: AGND; input. */
  "AGND": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: DB7; input. */
  "DB7": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 11: DB3; input. */
  "DB3": "11",
  /** Physical pin 12: DB2; input. */
  "DB2": "12",
  /** Physical pin 13: DB1; input. */
  "DB1": "13",
  /** Physical pin 14: DB0; input. */
  "DB0": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A0; input. */
  "A0": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: VOUTD; output. */
  "VOUTD": "19",
  /** Physical pin 20: VOUTC; output. */
  "VOUTC": "20",
}) {
  override schema = "Analog_DAC:AD7226KR";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, DIP-24
 *
 * KiCad symbol: `Analog_DAC:AD7228ABN`. Reference prefix: `U`.
 * Footprint filters: PDIP*, DIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7228ABN extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VOUT8; output. */
  "VOUT8": "2",
  /** Physical pin 3: VOUT7; output. */
  "VOUT7": "3",
  /** Physical pin 4: VOUT6; output. */
  "VOUT6": "4",
  /** Physical pin 5: VOUT5; output. */
  "VOUT5": "5",
  /** Physical pin 6: VOUT4; output. */
  "VOUT4": "6",
  /** Physical pin 7: VOUT3; output. */
  "VOUT3": "7",
  /** Physical pin 8: VOUT2; output. */
  "VOUT2": "8",
  /** Physical pin 9: VOUT1; output. */
  "VOUT1": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: VREF; passive. */
  "VREF": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: DB7; input. */
  "DB7": "13",
  /** Physical pin 14: DB6; input. */
  "DB6": "14",
  /** Physical pin 15: DB5; input. */
  "DB5": "15",
  /** Physical pin 16: DB4; input. */
  "DB4": "16",
  /** Physical pin 17: DB3; input. */
  "DB3": "17",
  /** Physical pin 18: DB2; input. */
  "DB2": "18",
  /** Physical pin 19: DB1; input. */
  "DB1": "19",
  /** Physical pin 20: DB0; input. */
  "DB0": "20",
  /** Physical pin 21: ~{WR}; input. */
  "~{WR}": "21",
  /** Physical pin 22: A2; input. */
  "A2": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A0; input. */
  "A0": "24",
}) {
  override schema = "Analog_DAC:AD7228ABN";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, PLCC-28
 *
 * KiCad symbol: `Analog_DAC:AD7228ABP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7228ABP extends Component.withPins({
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VOUT8; output. */
  "VOUT8": "3",
  /** Physical pin 4: VOUT7; output. */
  "VOUT7": "4",
  /** Physical pin 5: VOUT6; output. */
  "VOUT6": "5",
  /** Physical pin 6: VOUT5; output. */
  "VOUT5": "6",
  /** Physical pin 7: VOUT4; output. */
  "VOUT4": "7",
  /** Physical pin 9: VOUT3; output. */
  "VOUT3": "9",
  /** Physical pin 10: VOUT2; output. */
  "VOUT2": "10",
  /** Physical pin 11: VOUT1; output. */
  "VOUT1": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: VREF; passive. */
  "VREF": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 16: DB7; input. */
  "DB7": "16",
  /** Physical pin 17: DB6; input. */
  "DB6": "17",
  /** Physical pin 18: DB5; input. */
  "DB5": "18",
  /** Physical pin 19: DB4; input. */
  "DB4": "19",
  /** Physical pin 20: DB3; input. */
  "DB3": "20",
  /** Physical pin 21: DB2; input. */
  "DB2": "21",
  /** Physical pin 23: DB1; input. */
  "DB1": "23",
  /** Physical pin 24: DB0; input. */
  "DB0": "24",
  /** Physical pin 25: ~{WR}; input. */
  "~{WR}": "25",
  /** Physical pin 26: A2; input. */
  "A2": "26",
  /** Physical pin 27: A1; input. */
  "A1": "27",
  /** Physical pin 28: A0; input. */
  "A0": "28",
}) {
  override schema = "Analog_DAC:AD7228ABP";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, SOIC-24
 *
 * KiCad symbol: `Analog_DAC:AD7228ABR`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7228ABR extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VOUT8; output. */
  "VOUT8": "2",
  /** Physical pin 3: VOUT7; output. */
  "VOUT7": "3",
  /** Physical pin 4: VOUT6; output. */
  "VOUT6": "4",
  /** Physical pin 5: VOUT5; output. */
  "VOUT5": "5",
  /** Physical pin 6: VOUT4; output. */
  "VOUT4": "6",
  /** Physical pin 7: VOUT3; output. */
  "VOUT3": "7",
  /** Physical pin 8: VOUT2; output. */
  "VOUT2": "8",
  /** Physical pin 9: VOUT1; output. */
  "VOUT1": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: VREF; passive. */
  "VREF": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: DB7; input. */
  "DB7": "13",
  /** Physical pin 14: DB6; input. */
  "DB6": "14",
  /** Physical pin 15: DB5; input. */
  "DB5": "15",
  /** Physical pin 16: DB4; input. */
  "DB4": "16",
  /** Physical pin 17: DB3; input. */
  "DB3": "17",
  /** Physical pin 18: DB2; input. */
  "DB2": "18",
  /** Physical pin 19: DB1; input. */
  "DB1": "19",
  /** Physical pin 20: DB0; input. */
  "DB0": "20",
  /** Physical pin 21: ~{WR}; input. */
  "~{WR}": "21",
  /** Physical pin 22: A2; input. */
  "A2": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A0; input. */
  "A0": "24",
}) {
  override schema = "Analog_DAC:AD7228ABR";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, DIP-24
 *
 * KiCad symbol: `Analog_DAC:AD7228ACN`. Reference prefix: `U`.
 * Footprint filters: PDIP*, DIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7228ACN extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VOUT8; output. */
  "VOUT8": "2",
  /** Physical pin 3: VOUT7; output. */
  "VOUT7": "3",
  /** Physical pin 4: VOUT6; output. */
  "VOUT6": "4",
  /** Physical pin 5: VOUT5; output. */
  "VOUT5": "5",
  /** Physical pin 6: VOUT4; output. */
  "VOUT4": "6",
  /** Physical pin 7: VOUT3; output. */
  "VOUT3": "7",
  /** Physical pin 8: VOUT2; output. */
  "VOUT2": "8",
  /** Physical pin 9: VOUT1; output. */
  "VOUT1": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: VREF; passive. */
  "VREF": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: DB7; input. */
  "DB7": "13",
  /** Physical pin 14: DB6; input. */
  "DB6": "14",
  /** Physical pin 15: DB5; input. */
  "DB5": "15",
  /** Physical pin 16: DB4; input. */
  "DB4": "16",
  /** Physical pin 17: DB3; input. */
  "DB3": "17",
  /** Physical pin 18: DB2; input. */
  "DB2": "18",
  /** Physical pin 19: DB1; input. */
  "DB1": "19",
  /** Physical pin 20: DB0; input. */
  "DB0": "20",
  /** Physical pin 21: ~{WR}; input. */
  "~{WR}": "21",
  /** Physical pin 22: A2; input. */
  "A2": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A0; input. */
  "A0": "24",
}) {
  override schema = "Analog_DAC:AD7228ACN";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, PLCC-28
 *
 * KiCad symbol: `Analog_DAC:AD7228ACP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7228ACP extends Component.withPins({
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: VOUT8; output. */
  "VOUT8": "3",
  /** Physical pin 4: VOUT7; output. */
  "VOUT7": "4",
  /** Physical pin 5: VOUT6; output. */
  "VOUT6": "5",
  /** Physical pin 6: VOUT5; output. */
  "VOUT5": "6",
  /** Physical pin 7: VOUT4; output. */
  "VOUT4": "7",
  /** Physical pin 9: VOUT3; output. */
  "VOUT3": "9",
  /** Physical pin 10: VOUT2; output. */
  "VOUT2": "10",
  /** Physical pin 11: VOUT1; output. */
  "VOUT1": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: VREF; passive. */
  "VREF": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 16: DB7; input. */
  "DB7": "16",
  /** Physical pin 17: DB6; input. */
  "DB6": "17",
  /** Physical pin 18: DB5; input. */
  "DB5": "18",
  /** Physical pin 19: DB4; input. */
  "DB4": "19",
  /** Physical pin 20: DB3; input. */
  "DB3": "20",
  /** Physical pin 21: DB2; input. */
  "DB2": "21",
  /** Physical pin 23: DB1; input. */
  "DB1": "23",
  /** Physical pin 24: DB0; input. */
  "DB0": "24",
  /** Physical pin 25: ~{WR}; input. */
  "~{WR}": "25",
  /** Physical pin 26: A2; input. */
  "A2": "26",
  /** Physical pin 27: A1; input. */
  "A1": "27",
  /** Physical pin 28: A0; input. */
  "A0": "28",
}) {
  override schema = "Analog_DAC:AD7228ACP";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, SOIC-24
 *
 * KiCad symbol: `Analog_DAC:AD7228ACR`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7228ACR extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VOUT8; output. */
  "VOUT8": "2",
  /** Physical pin 3: VOUT7; output. */
  "VOUT7": "3",
  /** Physical pin 4: VOUT6; output. */
  "VOUT6": "4",
  /** Physical pin 5: VOUT5; output. */
  "VOUT5": "5",
  /** Physical pin 6: VOUT4; output. */
  "VOUT4": "6",
  /** Physical pin 7: VOUT3; output. */
  "VOUT3": "7",
  /** Physical pin 8: VOUT2; output. */
  "VOUT2": "8",
  /** Physical pin 9: VOUT1; output. */
  "VOUT1": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: VREF; passive. */
  "VREF": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: DB7; input. */
  "DB7": "13",
  /** Physical pin 14: DB6; input. */
  "DB6": "14",
  /** Physical pin 15: DB5; input. */
  "DB5": "15",
  /** Physical pin 16: DB4; input. */
  "DB4": "16",
  /** Physical pin 17: DB3; input. */
  "DB3": "17",
  /** Physical pin 18: DB2; input. */
  "DB2": "18",
  /** Physical pin 19: DB1; input. */
  "DB1": "19",
  /** Physical pin 20: DB0; input. */
  "DB0": "20",
  /** Physical pin 21: ~{WR}; input. */
  "~{WR}": "21",
  /** Physical pin 22: A2; input. */
  "A2": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A0; input. */
  "A0": "24",
}) {
  override schema = "Analog_DAC:AD7228ACR";
  override referencePrefix = "U";
}

/**
 * 3V/5V, Rail-to-Rail, Quad, 8-Bit DAC, SPI Interface, SOIC-16/TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD7304`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x10.3mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7304_7305.pdf
 * Keywords: dac 4ch 8bit spi.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7304 extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREFA; input. */
  "VREFA": "4",
  /** Physical pin 5: VREFB; input. */
  "VREFB": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: ~{LDAC}; output. */
  "~{LDAC}": "7",
  /** Physical pin 8: ~{CLR}; output. */
  "~{CLR}": "8",
  /** Physical pin 9: ~{CS}; input. */
  "~{CS}": "9",
  /** Physical pin 10: CLK; input. */
  "CLK": "10",
  /** Physical pin 11: SDI/SHDN; input. */
  "SDI/SHDN": "11",
  /** Physical pin 12: VREFC; input. */
  "VREFC": "12",
  /** Physical pin 13: VREFD; input. */
  "VREFD": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: VOUTD; output. */
  "VOUTD": "15",
  /** Physical pin 16: VOUTC; output. */
  "VOUTC": "16",
}) {
  override schema = "Analog_DAC:AD7304";
  override referencePrefix = "U";
}

/**
 * 3V/5V, Rail-to-Rail, Quad, 8-Bit DAC, Parallel Interface, SOIC-20/TSSOP-20
 *
 * KiCad symbol: `Analog_DAC:AD7305`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x12.8mm*P1.27mm*, TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7304_7305.pdf
 * Keywords: dac 4ch 8bit parallel.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7305 extends Component.withPins({
  /** Physical pin 1: VOUTB; output. */
  "VOUTB": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VREF; input. */
  "VREF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: ~{LDAC}; input. */
  "~{LDAC}": "6",
  /** Physical pin 7: DB7; input. */
  "DB7": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 11: DB3; input. */
  "DB3": "11",
  /** Physical pin 12: DB2; input. */
  "DB2": "12",
  /** Physical pin 13: DB1; input. */
  "DB1": "13",
  /** Physical pin 14: DB0; input. */
  "DB0": "14",
  /** Physical pin 15: ~{WR}; output. */
  "~{WR}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A0/SHDN; input. */
  "A0/SHDN": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: VOUTD; output. */
  "VOUTD": "19",
  /** Physical pin 20: VOUTC; output. */
  "VOUTC": "20",
}) {
  override schema = "Analog_DAC:AD7305";
  override referencePrefix = "U";
}

/**
 * Serial-Input Micropower 12-Bit DAC, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Analog_DAC:AD7390`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7390_7391.pdf
 * Keywords: SPI 12 bit DAC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7390 extends Component.withPins({
  /** Physical pin 1: ~{LD}; input. */
  "~{LD}": "1",
  /** Physical pin 2: CLK; input. */
  "CLK": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: ~{CLR}; input. */
  "~{CLR}": "4",
  /** Physical pin 5: Vss; power_in. */
  "Vss": "5",
  /** Physical pin 6: Vout; output. */
  "Vout": "6",
  /** Physical pin 7: Vdd; power_in. */
  "Vdd": "7",
  /** Physical pin 8: Vref; input. */
  "Vref": "8",
}) {
  override schema = "Analog_DAC:AD7390";
  override referencePrefix = "U";
}

/**
 * Serial-Input Micropower 10-Bit DAC, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Analog_DAC:AD7391`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7390_7391.pdf
 * Keywords: SPI 10 bit DAC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7391 extends Component.withPins({
  /** Physical pin 1: ~{LD}; input. */
  "~{LD}": "1",
  /** Physical pin 2: CLK; input. */
  "CLK": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: ~{CLR}; input. */
  "~{CLR}": "4",
  /** Physical pin 5: Vss; power_in. */
  "Vss": "5",
  /** Physical pin 6: Vout; output. */
  "Vout": "6",
  /** Physical pin 7: Vdd; power_in. */
  "Vdd": "7",
  /** Physical pin 8: Vref; input. */
  "Vref": "8",
}) {
  override schema = "Analog_DAC:AD7391";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD7533JN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7533JN extends Component.withPins({
  /** Physical pin 1: I_OUT1; passive. */
  "I_OUT1": "1",
  /** Physical pin 2: I_OUT2; passive. */
  "I_OUT2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D9(MSB); input. */
  "D9(MSB)": "4",
  /** Physical pin 5: D8; input. */
  "D8": "5",
  /** Physical pin 6: D7; input. */
  "D7": "6",
  /** Physical pin 7: D6; input. */
  "D6": "7",
  /** Physical pin 8: D5; input. */
  "D5": "8",
  /** Physical pin 9: D4; input. */
  "D4": "9",
  /** Physical pin 10: D3; input. */
  "D3": "10",
  /** Physical pin 11: D2; input. */
  "D2": "11",
  /** Physical pin 12: D1; input. */
  "D1": "12",
  /** Physical pin 13: D0(LSB); input. */
  "D0(LSB)": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: VREF; passive. */
  "VREF": "15",
  /** Physical pin 16: RFBACK; passive. */
  "RFBACK": "16",
}) {
  override schema = "Analog_DAC:AD7533JN";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7533JP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7533JP extends Component.withPins({
  /** Physical pin 2: I_OUT1; passive. */
  "I_OUT1": "2",
  /** Physical pin 3: I_OUT2; passive. */
  "I_OUT2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: D9(MSB); input. */
  "D9(MSB)": "5",
  /** Physical pin 7: D8; input. */
  "D8": "7",
  /** Physical pin 8: D7; input. */
  "D7": "8",
  /** Physical pin 9: D6; input. */
  "D6": "9",
  /** Physical pin 10: D5; input. */
  "D5": "10",
  /** Physical pin 12: D4; input. */
  "D4": "12",
  /** Physical pin 13: D3; input. */
  "D3": "13",
  /** Physical pin 14: D2; input. */
  "D2": "14",
  /** Physical pin 15: D1; input. */
  "D1": "15",
  /** Physical pin 17: D0(LSB); input. */
  "D0(LSB)": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: VREF; passive. */
  "VREF": "19",
  /** Physical pin 20: RFBACK; passive. */
  "RFBACK": "20",
}) {
  override schema = "Analog_DAC:AD7533JP";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD7533KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7533KN extends Component.withPins({
  /** Physical pin 1: I_OUT1; passive. */
  "I_OUT1": "1",
  /** Physical pin 2: I_OUT2; passive. */
  "I_OUT2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D9(MSB); input. */
  "D9(MSB)": "4",
  /** Physical pin 5: D8; input. */
  "D8": "5",
  /** Physical pin 6: D7; input. */
  "D7": "6",
  /** Physical pin 7: D6; input. */
  "D6": "7",
  /** Physical pin 8: D5; input. */
  "D5": "8",
  /** Physical pin 9: D4; input. */
  "D4": "9",
  /** Physical pin 10: D3; input. */
  "D3": "10",
  /** Physical pin 11: D2; input. */
  "D2": "11",
  /** Physical pin 12: D1; input. */
  "D1": "12",
  /** Physical pin 13: D0(LSB); input. */
  "D0(LSB)": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: VREF; passive. */
  "VREF": "15",
  /** Physical pin 16: RFBACK; passive. */
  "RFBACK": "16",
}) {
  override schema = "Analog_DAC:AD7533KN";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7533KP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7533KP extends Component.withPins({
  /** Physical pin 2: I_OUT1; passive. */
  "I_OUT1": "2",
  /** Physical pin 3: I_OUT2; passive. */
  "I_OUT2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: D9(MSB); input. */
  "D9(MSB)": "5",
  /** Physical pin 7: D8; input. */
  "D8": "7",
  /** Physical pin 8: D7; input. */
  "D7": "8",
  /** Physical pin 9: D6; input. */
  "D6": "9",
  /** Physical pin 10: D5; input. */
  "D5": "10",
  /** Physical pin 12: D4; input. */
  "D4": "12",
  /** Physical pin 13: D3; input. */
  "D3": "13",
  /** Physical pin 14: D2; input. */
  "D2": "14",
  /** Physical pin 15: D1; input. */
  "D1": "15",
  /** Physical pin 17: D0(LSB); input. */
  "D0(LSB)": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: VREF; passive. */
  "VREF": "19",
  /** Physical pin 20: RFBACK; passive. */
  "RFBACK": "20",
}) {
  override schema = "Analog_DAC:AD7533KP";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, SOIC-16
 *
 * KiCad symbol: `Analog_DAC:AD7533KR`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7533KR extends Component.withPins({
  /** Physical pin 1: I_OUT1; passive. */
  "I_OUT1": "1",
  /** Physical pin 2: I_OUT2; passive. */
  "I_OUT2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D9(MSB); input. */
  "D9(MSB)": "4",
  /** Physical pin 5: D8; input. */
  "D8": "5",
  /** Physical pin 6: D7; input. */
  "D7": "6",
  /** Physical pin 7: D6; input. */
  "D6": "7",
  /** Physical pin 8: D5; input. */
  "D5": "8",
  /** Physical pin 9: D4; input. */
  "D4": "9",
  /** Physical pin 10: D3; input. */
  "D3": "10",
  /** Physical pin 11: D2; input. */
  "D2": "11",
  /** Physical pin 12: D1; input. */
  "D1": "12",
  /** Physical pin 13: D0(LSB); input. */
  "D0(LSB)": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: VREF; passive. */
  "VREF": "15",
  /** Physical pin 16: RFBACK; passive. */
  "RFBACK": "16",
}) {
  override schema = "Analog_DAC:AD7533KR";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD7533LN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7533LN extends Component.withPins({
  /** Physical pin 1: I_OUT1; passive. */
  "I_OUT1": "1",
  /** Physical pin 2: I_OUT2; passive. */
  "I_OUT2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D9(MSB); input. */
  "D9(MSB)": "4",
  /** Physical pin 5: D8; input. */
  "D8": "5",
  /** Physical pin 6: D7; input. */
  "D7": "6",
  /** Physical pin 7: D6; input. */
  "D6": "7",
  /** Physical pin 8: D5; input. */
  "D5": "8",
  /** Physical pin 9: D4; input. */
  "D4": "9",
  /** Physical pin 10: D3; input. */
  "D3": "10",
  /** Physical pin 11: D2; input. */
  "D2": "11",
  /** Physical pin 12: D1; input. */
  "D1": "12",
  /** Physical pin 13: D0(LSB); input. */
  "D0(LSB)": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: VREF; passive. */
  "VREF": "15",
  /** Physical pin 16: RFBACK; passive. */
  "RFBACK": "16",
}) {
  override schema = "Analog_DAC:AD7533LN";
  override referencePrefix = "U";
}

/**
 * DA Converter 8 bits - 20MHz, PDIP/SOIC-24
 *
 * KiCad symbol: `Analog_DAC:AD775`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD775.pdf
 * Keywords: DAC CNA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD775 extends Component.withPins({
  /** Physical pin 1: ~{OE}; input. */
  "~{OE}": "1",
  /** Physical pin 2: DGND; power_in. */
  "DGND_2": "2",
  /** Physical pin 3: D0; tri_state. */
  "D0": "3",
  /** Physical pin 4: D1; tri_state. */
  "D1": "4",
  /** Physical pin 5: D2; tri_state. */
  "D2": "5",
  /** Physical pin 6: D3; tri_state. */
  "D3": "6",
  /** Physical pin 7: D4; tri_state. */
  "D4": "7",
  /** Physical pin 8: D5; tri_state. */
  "D5": "8",
  /** Physical pin 9: D6; tri_state. */
  "D6": "9",
  /** Physical pin 10: D7; tri_state. */
  "D7": "10",
  /** Physical pin 11: DVDD; power_in. */
  "DVDD_11": "11",
  /** Physical pin 12: CLK; input. */
  "CLK": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD_13": "13",
  /** Physical pin 14: AVDD; power_in. */
  "AVDD_14": "14",
  /** Physical pin 15: AVDD; power_in. */
  "AVDD_15": "15",
  /** Physical pin 16: VRTS; input. */
  "VRTS": "16",
  /** Physical pin 17: VRT; input. */
  "VRT": "17",
  /** Physical pin 18: AVDD; power_in. */
  "AVDD_18": "18",
  /** Physical pin 19: VIN; input. */
  "VIN": "19",
  /** Physical pin 20: AGND; power_in. */
  "AGND_20": "20",
  /** Physical pin 21: AGND; power_in. */
  "AGND_21": "21",
  /** Physical pin 22: VRBS; input. */
  "VRBS": "22",
  /** Physical pin 23: VRB; input. */
  "VRB": "23",
  /** Physical pin 24: DGND; power_in. */
  "DGND_24": "24",
}) {
  override schema = "Analog_DAC:AD775";
  override referencePrefix = "U";
}

/**
 * Analog Devices Quad, Low Power, 12-Bit, 180 MSPS, Digital-to-Analog Converter and Waveform Generator
 *
 * KiCad symbol: `Analog_DAC:AD9106BCP`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*1EP*5x5mm*P0.5mm*EP3.6x3.6mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad9106.pdf
 * Keywords: analog devices DAC DDS.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9106BCP extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: SDIO; bidirectional. */
  "SDIO": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: DLDO2; power_out. */
  "DLDO2": "4",
  /** Physical pin 5: DVDD; power_in. */
  "DVDD": "5",
  /** Physical pin 6: DLDO1; power_out. */
  "DLDO1": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: IOUTP4; output. */
  "IOUTP4": "10",
  /** Physical pin 11: IOUTN4; output. */
  "IOUTN4": "11",
  /** Physical pin 12: AVDD2; power_in. */
  "AVDD2": "12",
  /** Physical pin 13: IOUTN3; output. */
  "IOUTN3": "13",
  /** Physical pin 14: IOUTP3; output. */
  "IOUTP3": "14",
  /** Physical pin 15: AGND; power_in. */
  "AGND_15": "15",
  /** Physical pin 16: FSADJ3; output. */
  "FSADJ3": "16",
  /** Physical pin 17: FSADJ4; output. */
  "FSADJ4": "17",
  /** Physical pin 18: REFIO; bidirectional. */
  "REFIO": "18",
  /** Physical pin 19: CLKGND; power_in. */
  "CLKGND": "19",
  /** Physical pin 20: CLKN; input. */
  "CLKN": "20",
  /** Physical pin 21: CLKP; input. */
  "CLKP": "21",
  /** Physical pin 22: CLDO; bidirectional. */
  "CLDO": "22",
  /** Physical pin 23: CLKVDD; power_in. */
  "CLKVDD": "23",
  /** Physical pin 24: FSADJ2/CAL_SENSE; bidirectional. */
  "FSADJ2/CAL_SENSE": "24",
  /** Physical pin 25: FSADJ1; output. */
  "FSADJ1": "25",
  /** Physical pin 26: AGND; passive. */
  "AGND_26": "26",
  /** Physical pin 27: IOUTP1; output. */
  "IOUTP1": "27",
  /** Physical pin 28: IOUTN1; output. */
  "IOUTN1": "28",
  /** Physical pin 29: AVDD1; power_in. */
  "AVDD1": "29",
  /** Physical pin 30: IOUTN2; output. */
  "IOUTN2": "30",
  /** Physical pin 31: IOUTP2; output. */
  "IOUTP2": "31",
  /** Physical pin 32: ~{TRIGGER}; input. */
  "~{TRIGGER}": "32",
  /** Physical pin 33: DGND; passive. */
  "DGND_33": "33",
}) {
  override schema = "Analog_DAC:AD9106BCP";
  override referencePrefix = "U";
}

/**
 * 1.6GSPS 16bit dual-channel DAC, LFCSP-72
 *
 * KiCad symbol: `Analog_DAC:AD9142`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*10x10mm*P0.5mm*EP6.15x6.15mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9142.pdf
 * Keywords: 16bit DAC 2CH.
 * Default footprint: Package_CSP:LFCSP-72-1EP_10x10mm_P0.5mm_EP6.15x6.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9142 extends Component.withPins({
  /** Physical pin 1: CVDD18; power_in. */
  "CVDD18_1": "1",
  /** Physical pin 2: REFP/SYNCP; input. */
  "REFP/SYNCP": "2",
  /** Physical pin 3: REFN/SYNCN; input. */
  "REFN/SYNCN": "3",
  /** Physical pin 4: CVDD18; passive. */
  "CVDD18_4": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: TXEN; input. */
  "TXEN": "6",
  /** Physical pin 7: DVDD18; power_in. */
  "DVDD18_7": "7",
  /** Physical pin 8: FRAMEP; input. */
  "FRAMEP": "8",
  /** Physical pin 9: FRAMEN; input. */
  "FRAMEN": "9",
  /** Physical pin 10: D15P; input. */
  "D15P": "10",
  /** Physical pin 11: D15N; input. */
  "D15N": "11",
  /** Physical pin 12: DVDD18; passive. */
  "DVDD18_12": "12",
  /** Physical pin 13: D14P; input. */
  "D14P": "13",
  /** Physical pin 14: D14N; input. */
  "D14N": "14",
  /** Physical pin 15: D13P; input. */
  "D13P": "15",
  /** Physical pin 16: D13N; input. */
  "D13N": "16",
  /** Physical pin 17: D12P; input. */
  "D12P": "17",
  /** Physical pin 18: D12N; input. */
  "D12N": "18",
  /** Physical pin 19: DVDD18; passive. */
  "DVDD18_19": "19",
  /** Physical pin 20: D11P; input. */
  "D11P": "20",
  /** Physical pin 21: D11N; input. */
  "D11N": "21",
  /** Physical pin 22: D10P; input. */
  "D10P": "22",
  /** Physical pin 23: D10N; input. */
  "D10N": "23",
  /** Physical pin 24: D9P; input. */
  "D9P": "24",
  /** Physical pin 25: D9N; input. */
  "D9N": "25",
  /** Physical pin 26: D8P; input. */
  "D8P": "26",
  /** Physical pin 27: D8N; input. */
  "D8N": "27",
  /** Physical pin 28: DCIP; input. */
  "DCIP": "28",
  /** Physical pin 29: DCIN; input. */
  "DCIN": "29",
  /** Physical pin 30: D7P; input. */
  "D7P": "30",
  /** Physical pin 31: D7N; input. */
  "D7N": "31",
  /** Physical pin 32: D6P; input. */
  "D6P": "32",
  /** Physical pin 33: D6N; input. */
  "D6N": "33",
  /** Physical pin 34: D5P; input. */
  "D5P": "34",
  /** Physical pin 35: D5N; input. */
  "D5N": "35",
  /** Physical pin 36: DVDD18; passive. */
  "DVDD18_36": "36",
  /** Physical pin 37: D4P; input. */
  "D4P": "37",
  /** Physical pin 38: D4N; input. */
  "D4N": "38",
  /** Physical pin 39: D3P; input. */
  "D3P": "39",
  /** Physical pin 40: D3N; input. */
  "D3N": "40",
  /** Physical pin 41: D2P; input. */
  "D2P": "41",
  /** Physical pin 42: D2N; input. */
  "D2N": "42",
  /** Physical pin 43: DVDD18; passive. */
  "DVDD18_43": "43",
  /** Physical pin 44: D1P; input. */
  "D1P": "44",
  /** Physical pin 45: D1N; input. */
  "D1N": "45",
  /** Physical pin 46: D0P; input. */
  "D0P": "46",
  /** Physical pin 47: D0N; input. */
  "D0N": "47",
  /** Physical pin 48: DVDD18; passive. */
  "DVDD18_48": "48",
  /** Physical pin 49: DVDD18; passive. */
  "DVDD18_49": "49",
  /** Physical pin 50: ~{IRQ2}; input. */
  "~{IRQ2}": "50",
  /** Physical pin 51: ~{IRQ1}; input. */
  "~{IRQ1}": "51",
  /** Physical pin 52: SDIO; bidirectional. */
  "SDIO": "52",
  /** Physical pin 53: SCLK; input. */
  "SCLK": "53",
  /** Physical pin 54: ~{CS}; input. */
  "~{CS}": "54",
  /** Physical pin 55: AVDD33; power_in. */
  "AVDD33_55": "55",
  /** Physical pin 56: IOUT2P; output. */
  "IOUT2P": "56",
  /** Physical pin 57: IOUT2N; output. */
  "IOUT2N": "57",
  /** Physical pin 58: AVDD33; passive. */
  "AVDD33_58": "58",
  /** Physical pin 59: CVDD18; passive. */
  "CVDD18_59": "59",
  /** Physical pin 60: CVDD18; passive. */
  "CVDD18_60": "60",
  /** Physical pin 61: DACCLKN; input. */
  "DACCLKN": "61",
  /** Physical pin 62: DACCLKP; input. */
  "DACCLKP": "62",
  /** Physical pin 63: CVDD18; passive. */
  "CVDD18_63": "63",
  /** Physical pin 64: CVDD18; passive. */
  "CVDD18_64": "64",
  /** Physical pin 65: AVDD33; passive. */
  "AVDD33_65": "65",
  /** Physical pin 66: IOUT1N; output. */
  "IOUT1N": "66",
  /** Physical pin 67: IOUT1P; output. */
  "IOUT1P": "67",
  /** Physical pin 68: AVDD33; passive. */
  "AVDD33_68": "68",
  /** Physical pin 69: FSADJ; input. */
  "FSADJ": "69",
  /** Physical pin 70: REFIO; input. */
  "REFIO": "70",
  /** Physical pin 71: CVDD18; passive. */
  "CVDD18_71": "71",
  /** Physical pin 72: CVDD18; passive. */
  "CVDD18_72": "72",
  /** Physical pin 73: AVSS; power_in. */
  "AVSS": "73",
}) {
  override schema = "Analog_DAC:AD9142";
  override referencePrefix = "U";
}

/**
 * 210MSPS 14bit DAC, TSSOP-28
 *
 * KiCad symbol: `Analog_DAC:AD9744`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9744.pdf
 * Keywords: 14bit DAC 1CH.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9744 extends Component.withPins({
  /** Physical pin 1: D13; input. */
  "D13": "1",
  /** Physical pin 2: D12; input. */
  "D12": "2",
  /** Physical pin 3: D11; input. */
  "D11": "3",
  /** Physical pin 4: D10; input. */
  "D10": "4",
  /** Physical pin 5: D9; input. */
  "D9": "5",
  /** Physical pin 6: D8; input. */
  "D8": "6",
  /** Physical pin 7: D7; input. */
  "D7": "7",
  /** Physical pin 8: D6; input. */
  "D6": "8",
  /** Physical pin 9: D5; input. */
  "D5": "9",
  /** Physical pin 10: D4; input. */
  "D4": "10",
  /** Physical pin 11: D3; input. */
  "D3": "11",
  /** Physical pin 12: D2; input. */
  "D2": "12",
  /** Physical pin 13: D1; input. */
  "D1": "13",
  /** Physical pin 14: D0; input. */
  "D0": "14",
  /** Physical pin 15: SLEEP; input. */
  "SLEEP": "15",
  /** Physical pin 16: REFLO; input. */
  "REFLO": "16",
  /** Physical pin 17: REFIO; input. */
  "REFIO": "17",
  /** Physical pin 18: FS_ADJ; input. */
  "FS_ADJ": "18",
  /** Physical pin 20: AGND; power_in. */
  "AGND": "20",
  /** Physical pin 21: IOUTB; output. */
  "IOUTB": "21",
  /** Physical pin 22: IOUTA; output. */
  "IOUTA": "22",
  /** Physical pin 24: AVDD; power_in. */
  "AVDD": "24",
  /** Physical pin 25: MODE; input. */
  "MODE": "25",
  /** Physical pin 26: DGND; power_in. */
  "DGND": "26",
  /** Physical pin 27: DVDD; power_in. */
  "DVDD": "27",
  /** Physical pin 28: CLK; input. */
  "CLK": "28",
}) {
  override schema = "Analog_DAC:AD9744";
  override referencePrefix = "U";
}

/**
 * Single-supply, 8bit, 8 ch, SAR, 70kHz SR, 2.7 - 5 VDD, I2C, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:ADS7830`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7830.pdf
 * Keywords: 8bit DAC 8CH.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7830 extends Component.withPins({
  /** Physical pin 1: CH0; input. */
  "CH0": "1",
  /** Physical pin 2: CH1; input. */
  "CH1": "2",
  /** Physical pin 3: CH2; input. */
  "CH2": "3",
  /** Physical pin 4: CH3; input. */
  "CH3": "4",
  /** Physical pin 5: CH4; input. */
  "CH4": "5",
  /** Physical pin 6: CH5; input. */
  "CH5": "6",
  /** Physical pin 7: CH6; input. */
  "CH6": "7",
  /** Physical pin 8: CH7; input. */
  "CH7": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: REFin/REFout; bidirectional. */
  "REFin/REFout": "10",
  /** Physical pin 11: COM; input. */
  "COM": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: A1; input. */
  "A1": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Analog_DAC:ADS7830";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 192-kHz Stereo D/A Converter, TSSOP-10
 *
 * KiCad symbol: `Analog_DAC:CS434x-xZZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4344-45-48_F2.pdf
 * Keywords: 24-bit PCM DAC.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS434x_xZZ extends Component.withPins({
  /** Physical pin 1: SDIN; input. */
  "SDIN": "1",
  /** Physical pin 2: ~{DEM}/SCLK; input. */
  "~{DEM}/SCLK": "2",
  /** Physical pin 3: LRCK; input. */
  "LRCK": "3",
  /** Physical pin 4: MCLK; input. */
  "MCLK": "4",
  /** Physical pin 5: VQ; passive. */
  "VQ": "5",
  /** Physical pin 6: FILT+; passive. */
  "FILT+": "6",
  /** Physical pin 7: AOUTL; output. */
  "AOUTL": "7",
  /** Physical pin 8: AGND; power_in. */
  "AGND": "8",
  /** Physical pin 9: VA; power_in. */
  "VA": "9",
  /** Physical pin 10: AOUTR; output. */
  "AOUTR": "10",
}) {
  override schema = "Analog_DAC:CS434x-xZZ";
  override referencePrefix = "U";
}

/**
 * DA Converter 8 bits
 *
 * KiCad symbol: `Analog_DAC:DAC08`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DAC08.pdf
 * Keywords: DAC CNA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC08 extends Component.withPins({
  /** Physical pin 1: VLC; input. */
  "VLC": "1",
  /** Physical pin 2: I+; output. */
  "I+": "2",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: I-; output. */
  "I-": "4",
  /** Physical pin 5: B0; input. */
  "B0": "5",
  /** Physical pin 6: B1; input. */
  "B1": "6",
  /** Physical pin 7: B2; input. */
  "B2": "7",
  /** Physical pin 8: B3; input. */
  "B3": "8",
  /** Physical pin 9: B4; input. */
  "B4": "9",
  /** Physical pin 10: B5; input. */
  "B5": "10",
  /** Physical pin 11: B6; input. */
  "B6": "11",
  /** Physical pin 12: B7; input. */
  "B7": "12",
  /** Physical pin 13: V+; power_in. */
  "V+": "13",
  /** Physical pin 14: R+; input. */
  "R+": "14",
  /** Physical pin 15: R-; input. */
  "R-": "15",
  /** Physical pin 16: CMP; input. */
  "CMP": "16",
}) {
  override schema = "Analog_DAC:DAC08";
  override referencePrefix = "U";
}

/**
 * 8-bit multiplying DAC
 *
 * KiCad symbol: `Analog_DAC:MC1408_DIP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.pinballpcb.com/datasheets/OnMC1408-dac.pdf
 * Keywords: 8 bit multiplying DAC.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC1408_DIP extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VEE; power_in. */
  "VEE": "3",
  /** Physical pin 4: I0; input. */
  "I0": "4",
  /** Physical pin 5: A8; input. */
  "A8": "5",
  /** Physical pin 6: A7; input. */
  "A7": "6",
  /** Physical pin 7: A6; input. */
  "A6": "7",
  /** Physical pin 8: A5; input. */
  "A5": "8",
  /** Physical pin 9: A4; input. */
  "A4": "9",
  /** Physical pin 10: A3; input. */
  "A3": "10",
  /** Physical pin 11: A2; input. */
  "A2": "11",
  /** Physical pin 12: A1; input. */
  "A1": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC": "13",
  /** Physical pin 14: VREF+; output. */
  "VREF+": "14",
  /** Physical pin 15: VREF-; output. */
  "VREF-": "15",
  /** Physical pin 16: COMPEN; passive. */
  "COMPEN": "16",
}) {
  override schema = "Analog_DAC:MC1408_DIP";
  override referencePrefix = "U";
}

/**
 * 8-bit multiplying DAC
 *
 * KiCad symbol: `Analog_DAC:DAC0808_DIP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac0808.pdf
 * Keywords: 8 bit multiplying DAC.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC0808_DIP extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VEE; power_in. */
  "VEE": "3",
  /** Physical pin 4: I0; input. */
  "I0": "4",
  /** Physical pin 5: A8; input. */
  "A8": "5",
  /** Physical pin 6: A7; input. */
  "A7": "6",
  /** Physical pin 7: A6; input. */
  "A6": "7",
  /** Physical pin 8: A5; input. */
  "A5": "8",
  /** Physical pin 9: A4; input. */
  "A4": "9",
  /** Physical pin 10: A3; input. */
  "A3": "10",
  /** Physical pin 11: A2; input. */
  "A2": "11",
  /** Physical pin 12: A1; input. */
  "A1": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC": "13",
  /** Physical pin 14: VREF+; output. */
  "VREF+": "14",
  /** Physical pin 15: VREF-; output. */
  "VREF-": "15",
  /** Physical pin 16: COMPEN; passive. */
  "COMPEN": "16",
}) {
  override schema = "Analog_DAC:DAC0808_DIP";
  override referencePrefix = "U";
}

/**
 * 8-bit multiplying DAC
 *
 * KiCad symbol: `Analog_DAC:MC1408_SOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.pinballpcb.com/datasheets/OnMC1408-dac.pdf
 * Keywords: 8 bit multiplying DAC.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC1408_SOIC extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: VREF+; output. */
  "VREF+": "2",
  /** Physical pin 3: VREF-; output. */
  "VREF-": "3",
  /** Physical pin 4: COMPEN; passive. */
  "COMPEN": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VEE; power_in. */
  "VEE": "7",
  /** Physical pin 8: I0; input. */
  "I0": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A3; input. */
  "A3": "11",
  /** Physical pin 12: A4; input. */
  "A4": "12",
  /** Physical pin 13: A5; input. */
  "A5": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A7; input. */
  "A7": "15",
  /** Physical pin 16: A8; input. */
  "A8": "16",
}) {
  override schema = "Analog_DAC:MC1408_SOIC";
  override referencePrefix = "U";
}

/**
 * 8-bit multiplying DAC
 *
 * KiCad symbol: `Analog_DAC:DAC0808_SOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac0808.pdf
 * Keywords: 8 bit multiplying DAC.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC0808_SOIC extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: VREF+; output. */
  "VREF+": "2",
  /** Physical pin 3: VREF-; output. */
  "VREF-": "3",
  /** Physical pin 4: COMPEN; passive. */
  "COMPEN": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VEE; power_in. */
  "VEE": "7",
  /** Physical pin 8: I0; input. */
  "I0": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A3; input. */
  "A3": "11",
  /** Physical pin 12: A4; input. */
  "A4": "12",
  /** Physical pin 13: A5; input. */
  "A5": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A7; input. */
  "A7": "15",
  /** Physical pin 16: A8; input. */
  "A8": "16",
}) {
  override schema = "Analog_DAC:DAC0808_SOIC";
  override referencePrefix = "U";
}

/**
 * 8-bit Micropower DAC with I2C-Compatible Interface, SOT-23-6
 *
 * KiCad symbol: `Analog_DAC:DAC081C081CIMK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/dac081c081.pdf
 * Keywords: I2C DAC 8-bit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC081C081CIMK extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VA; power_in. */
  "VA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: ADR0; input. */
  "ADR0": "6",
}) {
  override schema = "Analog_DAC:DAC081C081CIMK";
  override referencePrefix = "U";
}

/**
 * Double-Buffered D to A Converters, DIP-20
 *
 * KiCad symbol: `Analog_DAC:DAC1007LCN`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://pdf.datasheetcatalog.com/datasheets/400/195351_DS.pdf
 * Keywords: DAC.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC1007LCN extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{WR}; input. */
  "~{WR}": "2",
  /** Physical pin 3: Byte1/~{Byte2}; input. */
  "Byte1/~{Byte2}": "3",
  /** Physical pin 4: ~{XFER}; input. */
  "~{XFER}": "4",
  /** Physical pin 5: DI5; input. */
  "DI5": "5",
  /** Physical pin 6: DI6; input. */
  "DI6": "6",
  /** Physical pin 7: DI7; input. */
  "DI7": "7",
  /** Physical pin 8: DI8; input. */
  "DI8": "8",
  /** Physical pin 9: DI9(MSB); input. */
  "DI9(MSB)": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: I_{OUT}2; output. */
  "I_{OUT}2": "11",
  /** Physical pin 12: I_{OUT}1; output. */
  "I_{OUT}1": "12",
  /** Physical pin 13: V_{REF}; input. */
  "V_{REF}": "13",
  /** Physical pin 14: R_{FB}; input. */
  "R_{FB}": "14",
  /** Physical pin 15: DI0(LSB); input. */
  "DI0(LSB)": "15",
  /** Physical pin 16: DI1; input. */
  "DI1": "16",
  /** Physical pin 17: DI2; input. */
  "DI2": "17",
  /** Physical pin 18: DI3; input. */
  "DI3": "18",
  /** Physical pin 19: DI4; input. */
  "DI4": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
  override schema = "Analog_DAC:DAC1007LCN";
  override referencePrefix = "U";
}

/**
 * Double-Buffered D to A Converters, DIP-20
 *
 * KiCad symbol: `Analog_DAC:DAC1006LCN`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://pdf.datasheetcatalog.com/datasheets/400/195351_DS.pdf
 * Keywords: DAC.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC1006LCN extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{WR}; input. */
  "~{WR}": "2",
  /** Physical pin 3: Byte1/~{Byte2}; input. */
  "Byte1/~{Byte2}": "3",
  /** Physical pin 4: ~{XFER}; input. */
  "~{XFER}": "4",
  /** Physical pin 5: DI5; input. */
  "DI5": "5",
  /** Physical pin 6: DI6; input. */
  "DI6": "6",
  /** Physical pin 7: DI7; input. */
  "DI7": "7",
  /** Physical pin 8: DI8; input. */
  "DI8": "8",
  /** Physical pin 9: DI9(MSB); input. */
  "DI9(MSB)": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: I_{OUT}2; output. */
  "I_{OUT}2": "11",
  /** Physical pin 12: I_{OUT}1; output. */
  "I_{OUT}1": "12",
  /** Physical pin 13: V_{REF}; input. */
  "V_{REF}": "13",
  /** Physical pin 14: R_{FB}; input. */
  "R_{FB}": "14",
  /** Physical pin 15: DI0(LSB); input. */
  "DI0(LSB)": "15",
  /** Physical pin 16: DI1; input. */
  "DI1": "16",
  /** Physical pin 17: DI2; input. */
  "DI2": "17",
  /** Physical pin 18: DI3; input. */
  "DI3": "18",
  /** Physical pin 19: DI4; input. */
  "DI4": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
  override schema = "Analog_DAC:DAC1006LCN";
  override referencePrefix = "U";
}

/**
 * Double-Buffered D to A Converters, DIP-20
 *
 * KiCad symbol: `Analog_DAC:DAC1006LCWM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*W_7.5x12.8mm*.
 * @see https://pdf.datasheetcatalog.com/datasheets/400/195351_DS.pdf
 * Keywords: DAC.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC1006LCWM extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{WR}; input. */
  "~{WR}": "2",
  /** Physical pin 3: Byte1/~{Byte2}; input. */
  "Byte1/~{Byte2}": "3",
  /** Physical pin 4: ~{XFER}; input. */
  "~{XFER}": "4",
  /** Physical pin 5: DI5; input. */
  "DI5": "5",
  /** Physical pin 6: DI6; input. */
  "DI6": "6",
  /** Physical pin 7: DI7; input. */
  "DI7": "7",
  /** Physical pin 8: DI8; input. */
  "DI8": "8",
  /** Physical pin 9: DI9(MSB); input. */
  "DI9(MSB)": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: I_{OUT}2; output. */
  "I_{OUT}2": "11",
  /** Physical pin 12: I_{OUT}1; output. */
  "I_{OUT}1": "12",
  /** Physical pin 13: V_{REF}; input. */
  "V_{REF}": "13",
  /** Physical pin 14: R_{FB}; input. */
  "R_{FB}": "14",
  /** Physical pin 15: DI0(LSB); input. */
  "DI0(LSB)": "15",
  /** Physical pin 16: DI1; input. */
  "DI1": "16",
  /** Physical pin 17: DI2; input. */
  "DI2": "17",
  /** Physical pin 18: DI3; input. */
  "DI3": "18",
  /** Physical pin 19: DI4; input. */
  "DI4": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
  override schema = "Analog_DAC:DAC1006LCWM";
  override referencePrefix = "U";
}

/**
 * Double-Buffered D to A Converters, DIP-20
 *
 * KiCad symbol: `Analog_DAC:DAC1008LCN`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://pdf.datasheetcatalog.com/datasheets/400/195351_DS.pdf
 * Keywords: DAC.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC1008LCN extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{WR}; input. */
  "~{WR}": "2",
  /** Physical pin 3: Byte1/~{Byte2}; input. */
  "Byte1/~{Byte2}": "3",
  /** Physical pin 4: ~{XFER}; input. */
  "~{XFER}": "4",
  /** Physical pin 5: DI5; input. */
  "DI5": "5",
  /** Physical pin 6: DI6; input. */
  "DI6": "6",
  /** Physical pin 7: DI7; input. */
  "DI7": "7",
  /** Physical pin 8: DI8; input. */
  "DI8": "8",
  /** Physical pin 9: DI9(MSB); input. */
  "DI9(MSB)": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: I_{OUT}2; output. */
  "I_{OUT}2": "11",
  /** Physical pin 12: I_{OUT}1; output. */
  "I_{OUT}1": "12",
  /** Physical pin 13: V_{REF}; input. */
  "V_{REF}": "13",
  /** Physical pin 14: R_{FB}; input. */
  "R_{FB}": "14",
  /** Physical pin 15: DI0(LSB); input. */
  "DI0(LSB)": "15",
  /** Physical pin 16: DI1; input. */
  "DI1": "16",
  /** Physical pin 17: DI2; input. */
  "DI2": "17",
  /** Physical pin 18: DI3; input. */
  "DI3": "18",
  /** Physical pin 19: DI4; input. */
  "DI4": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
  override schema = "Analog_DAC:DAC1008LCN";
  override referencePrefix = "U";
}

/**
 * 10-bit Micropower DAC with I2C-Compatible Interface, SOT-23-6
 *
 * KiCad symbol: `Analog_DAC:DAC101C081CIMK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/dac101c081.pdf
 * Keywords: I2C DAC 10-bit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC101C081CIMK extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VA; power_in. */
  "VA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: ADR0; input. */
  "ADR0": "6",
}) {
  override schema = "Analog_DAC:DAC101C081CIMK";
  override referencePrefix = "U";
}

/**
 * 12-bit Micropower DAC with I2C-Compatible Interface, SOT-23-6
 *
 * KiCad symbol: `Analog_DAC:DAC121C081CIMK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/dac121c081.pdf
 * Keywords: I2C DAC 12-bit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC121C081CIMK extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VA; power_in. */
  "VA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: ADR0; input. */
  "ADR0": "6",
}) {
  override schema = "Analog_DAC:DAC121C081CIMK";
  override referencePrefix = "U";
}

/**
 * 20-Bit , Low-Power Digital-to-Analog Converter, SSOP-16
 *
 * KiCad symbol: `Analog_DAC:DAC1220E`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac1220.pdf
 * Keywords: DAC.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC1220E extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: XOUT; output. */
  "XOUT": "2",
  /** Physical pin 3: XIN; input. */
  "XIN": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: AVDD; power_in. */
  "AVDD": "5",
  /** Physical pin 6: DNC; no_connect. */
  "DNC_6": "6",
  /** Physical pin 7: DNC; no_connect. */
  "DNC_7": "7",
  /** Physical pin 8: DNC; no_connect. */
  "DNC_8": "8",
  /** Physical pin 9: C1; passive. */
  "C1": "9",
  /** Physical pin 10: C2; passive. */
  "C2": "10",
  /** Physical pin 11: VOUT; output. */
  "VOUT": "11",
  /** Physical pin 12: VREF; input. */
  "VREF": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: SDIO; bidirectional. */
  "SDIO": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
}) {
  override schema = "Analog_DAC:DAC1220E";
  override referencePrefix = "U";
}

/**
 * 8-Bit, Single-Channel, Voltage Output, Serial Interface Digital-to-Analog Converters, SC-70
 *
 * KiCad symbol: `Analog_DAC:DAC5311xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.ti.com/lit/ds/symlink/dac5311.pdf
 * Keywords: DAC SPI 1-channel.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC5311xDCK extends Component.withPins({
  /** Physical pin 1: ~{SYNC}; input. */
  "~{SYNC}": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DIN; input. */
  "DIN": "3",
  /** Physical pin 4: AVDD/AVREF; power_in. */
  "AVDD/AVREF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VOUT; output. */
  "VOUT": "6",
}) {
  override schema = "Analog_DAC:DAC5311xDCK";
  override referencePrefix = "U";
}

/**
 * 8-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:DAC5578xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC5578xPW extends Component.withPins({
  /** Physical pin 1: ~{LDAC}; input. */
  "~{LDAC}": "1",
  /** Physical pin 2: ADDR0; input. */
  "ADDR0": "2",
  /** Physical pin 3: AVDD; power_in. */
  "AVDD": "3",
  /** Physical pin 4: VOUTA; output. */
  "VOUTA": "4",
  /** Physical pin 5: VOUTC; output. */
  "VOUTC": "5",
  /** Physical pin 6: VOUTE; output. */
  "VOUTE": "6",
  /** Physical pin 7: VOUTG; output. */
  "VOUTG": "7",
  /** Physical pin 8: VREFIN; input. */
  "VREFIN": "8",
  /** Physical pin 9: ~{CLR}; input. */
  "~{CLR}": "9",
  /** Physical pin 10: VOUTH; output. */
  "VOUTH": "10",
  /** Physical pin 11: VOUTF; output. */
  "VOUTF": "11",
  /** Physical pin 12: VOUTD; output. */
  "VOUTD": "12",
  /** Physical pin 13: VOUTB; output. */
  "VOUTB": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: SCL; input. */
  "SCL": "16",
}) {
  override schema = "Analog_DAC:DAC5578xPW";
  override referencePrefix = "U";
}

/**
 * 8-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, QFN-24
 *
 * KiCad symbol: `Analog_DAC:DAC5578xRGE`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC5578xRGE extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: AVDD; power_in. */
  "AVDD": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: VOUTC; output. */
  "VOUTC": "4",
  /** Physical pin 5: VOUTE; output. */
  "VOUTE": "5",
  /** Physical pin 6: VOUTG; output. */
  "VOUTG": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VREFIN; input. */
  "VREFIN": "8",
  /** Physical pin 9: RSTSEL; input. */
  "RSTSEL": "9",
  /** Physical pin 10: ADDR1; input. */
  "ADDR1": "10",
  /** Physical pin 11: ADDR0; input. */
  "ADDR0": "11",
  /** Physical pin 12: ~{CLR}; input. */
  "~{CLR}": "12",
  /** Physical pin 13: VOUTH; output. */
  "VOUTH": "13",
  /** Physical pin 14: VOUTF; output. */
  "VOUTF": "14",
  /** Physical pin 15: VOUTD; output. */
  "VOUTD": "15",
  /** Physical pin 16: VOUTB; output. */
  "VOUTB": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: SCL; input. */
  "SCL": "20",
  /** Physical pin 21: TWOC; input. */
  "TWOC": "21",
  /** Physical pin 22: ~{LDAC}; input. */
  "~{LDAC}": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
  override schema = "Analog_DAC:DAC5578xRGE";
  override referencePrefix = "U";
}

/**
 * 16-bit dual-channel voltage output DAC, 2.5V 5ppm/°C internal reference, WSON-10
 *
 * KiCad symbol: `Analog_DAC:DAC80502`. Reference prefix: `U`.
 * Footprint filters: Texas*2.5x2.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac80502.pdf
 * Keywords: texas digital-analog converter.
 * Default footprint: Package_SON:Texas_DRX_WSON-10_2.5x2.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC80502 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: RSTSEL; input. */
  "RSTSEL": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: SPI2C; input. */
  "SPI2C": "5",
  /** Physical pin 7: ~{SYNC}/A0; input. */
  "~{SYNC}/A0": "7",
  /** Physical pin 8: SDIN/SDA; bidirectional. */
  "SDIN/SDA": "8",
  /** Physical pin 9: VOUTB; output. */
  "VOUTB": "9",
  /** Physical pin 10: VREFIO; bidirectional. */
  "VREFIO": "10",
  /** Physical pin 6: SCLK/SCL; input. */
  "SCLK/SCL": "6",
}) {
  override schema = "Analog_DAC:DAC80502";
  override referencePrefix = "U";
}

/**
 * 12-bit dual-channel voltage output DAC, 2.5V 5ppm/°C internal reference, WSON-10
 *
 * KiCad symbol: `Analog_DAC:DAC60502`. Reference prefix: `U`.
 * Footprint filters: Texas*2.5x2.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac80502.pdf
 * Keywords: texas digital-analog converter.
 * Default footprint: Package_SON:Texas_DRX_WSON-10_2.5x2.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC60502 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: RSTSEL; input. */
  "RSTSEL": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: SPI2C; input. */
  "SPI2C": "5",
  /** Physical pin 7: ~{SYNC}/A0; input. */
  "~{SYNC}/A0": "7",
  /** Physical pin 8: SDIN/SDA; bidirectional. */
  "SDIN/SDA": "8",
  /** Physical pin 9: VOUTB; output. */
  "VOUTB": "9",
  /** Physical pin 10: VREFIO; bidirectional. */
  "VREFIO": "10",
  /** Physical pin 6: SCLK/SCL; input. */
  "SCLK/SCL": "6",
}) {
  override schema = "Analog_DAC:DAC60502";
  override referencePrefix = "U";
}

/**
 * 16-bit quad-channel voltage output DAC, 2.5V 2ppm/°C internal reference, WQFN-16
 *
 * KiCad symbol: `Analog_DAC:DAC80504`. Reference prefix: `U`.
 * Footprint filters: Texas*RTE0016D*WQFN*16*EP0.8x0.8mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac80504.pdf
 * Keywords: texas quad digital-analog converter.
 * Default footprint: Package_DFN_QFN:Texas_RTE0016D_WQFN-16-1EP_3x3mm_P0.5mm_EP0.8x0.8mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC80504 extends Component.withPins({
  /** Physical pin 1: REF; bidirectional. */
  "REF": "1",
  /** Physical pin 2: OUT0; output. */
  "OUT0": "2",
  /** Physical pin 3: OUT1; output. */
  "OUT1": "3",
  /** Physical pin 4: OUT2; output. */
  "OUT2": "4",
  /** Physical pin 5: OUT3; output. */
  "OUT3": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN": "8",
  /** Physical pin 9: RSTSEL; input. */
  "RSTSEL": "9",
  /** Physical pin 10: REFDIV; input. */
  "REFDIV": "10",
  /** Physical pin 11: ~{LDAC}; input. */
  "~{LDAC}": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: SCLK; input. */
  "SCLK": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
  /** Physical pin 15: SDO/~{ALARM}; output. */
  "SDO/~{ALARM}": "15",
  /** Physical pin 16: VIO; power_in. */
  "VIO": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Analog_DAC:DAC80504";
  override referencePrefix = "U";
}

/**
 * 12-bit quad-channel voltage output DAC, 2.5V 2ppm/°C internal reference, WQFN-16
 *
 * KiCad symbol: `Analog_DAC:DAC60504`. Reference prefix: `U`.
 * Footprint filters: Texas*RTE0016D*WQFN*16*EP0.8x0.8mm*.
 * @see https://www.ti.com/lit/gpn/dac60504
 * Keywords: texas quad digital-analog converter.
 * Default footprint: Package_DFN_QFN:Texas_RTE0016D_WQFN-16-1EP_3x3mm_P0.5mm_EP0.8x0.8mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC60504 extends Component.withPins({
  /** Physical pin 1: REF; bidirectional. */
  "REF": "1",
  /** Physical pin 2: OUT0; output. */
  "OUT0": "2",
  /** Physical pin 3: OUT1; output. */
  "OUT1": "3",
  /** Physical pin 4: OUT2; output. */
  "OUT2": "4",
  /** Physical pin 5: OUT3; output. */
  "OUT3": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN": "8",
  /** Physical pin 9: RSTSEL; input. */
  "RSTSEL": "9",
  /** Physical pin 10: REFDIV; input. */
  "REFDIV": "10",
  /** Physical pin 11: ~{LDAC}; input. */
  "~{LDAC}": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: SCLK; input. */
  "SCLK": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
  /** Physical pin 15: SDO/~{ALARM}; output. */
  "SDO/~{ALARM}": "15",
  /** Physical pin 16: VIO; power_in. */
  "VIO": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Analog_DAC:DAC60504";
  override referencePrefix = "U";
}

/**
 * 10-Bit, Single-Channel, Voltage Output, Serial Interface Digital-to-Analog Converters, SC-70
 *
 * KiCad symbol: `Analog_DAC:DAC6311xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.ti.com/lit/ds/symlink/dac5311.pdf
 * Keywords: DAC SPI 1-channel.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC6311xDCK extends Component.withPins({
  /** Physical pin 1: ~{SYNC}; input. */
  "~{SYNC}": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DIN; input. */
  "DIN": "3",
  /** Physical pin 4: AVDD/AVREF; power_in. */
  "AVDD/AVREF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VOUT; output. */
  "VOUT": "6",
}) {
  override schema = "Analog_DAC:DAC6311xDCK";
  override referencePrefix = "U";
}

/**
 * 10-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:DAC6578xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC6578xPW extends Component.withPins({
  /** Physical pin 1: ~{LDAC}; input. */
  "~{LDAC}": "1",
  /** Physical pin 2: ADDR0; input. */
  "ADDR0": "2",
  /** Physical pin 3: AVDD; power_in. */
  "AVDD": "3",
  /** Physical pin 4: VOUTA; output. */
  "VOUTA": "4",
  /** Physical pin 5: VOUTC; output. */
  "VOUTC": "5",
  /** Physical pin 6: VOUTE; output. */
  "VOUTE": "6",
  /** Physical pin 7: VOUTG; output. */
  "VOUTG": "7",
  /** Physical pin 8: VREFIN; input. */
  "VREFIN": "8",
  /** Physical pin 9: ~{CLR}; input. */
  "~{CLR}": "9",
  /** Physical pin 10: VOUTH; output. */
  "VOUTH": "10",
  /** Physical pin 11: VOUTF; output. */
  "VOUTF": "11",
  /** Physical pin 12: VOUTD; output. */
  "VOUTD": "12",
  /** Physical pin 13: VOUTB; output. */
  "VOUTB": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: SCL; input. */
  "SCL": "16",
}) {
  override schema = "Analog_DAC:DAC6578xPW";
  override referencePrefix = "U";
}

/**
 * 10-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, QFN-24
 *
 * KiCad symbol: `Analog_DAC:DAC6578xRGE`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC6578xRGE extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: AVDD; power_in. */
  "AVDD": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: VOUTC; output. */
  "VOUTC": "4",
  /** Physical pin 5: VOUTE; output. */
  "VOUTE": "5",
  /** Physical pin 6: VOUTG; output. */
  "VOUTG": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VREFIN; input. */
  "VREFIN": "8",
  /** Physical pin 9: RSTSEL; input. */
  "RSTSEL": "9",
  /** Physical pin 10: ADDR1; input. */
  "ADDR1": "10",
  /** Physical pin 11: ADDR0; input. */
  "ADDR0": "11",
  /** Physical pin 12: ~{CLR}; input. */
  "~{CLR}": "12",
  /** Physical pin 13: VOUTH; output. */
  "VOUTH": "13",
  /** Physical pin 14: VOUTF; output. */
  "VOUTF": "14",
  /** Physical pin 15: VOUTD; output. */
  "VOUTD": "15",
  /** Physical pin 16: VOUTB; output. */
  "VOUTB": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: SCL; input. */
  "SCL": "20",
  /** Physical pin 21: TWOC; input. */
  "TWOC": "21",
  /** Physical pin 22: ~{LDAC}; input. */
  "~{LDAC}": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
  override schema = "Analog_DAC:DAC6578xRGE";
  override referencePrefix = "U";
}

/**
 * 14-bit dual-channel voltage output DAC, 2.5V 5ppm/°C internal reference, WSON-10
 *
 * KiCad symbol: `Analog_DAC:DAC70502`. Reference prefix: `U`.
 * Footprint filters: Texas*2.5x2.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac80502.pdf
 * Keywords: texas digital-analog converter.
 * Default footprint: Package_SON:Texas_DRX_WSON-10_2.5x2.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC70502 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VOUTA; output. */
  "VOUTA": "2",
  /** Physical pin 3: RSTSEL; input. */
  "RSTSEL": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: SPI2C; input. */
  "SPI2C": "5",
  /** Physical pin 7: ~{SYNC}/A0; input. */
  "~{SYNC}/A0": "7",
  /** Physical pin 8: SDIN/SDA; bidirectional. */
  "SDIN/SDA": "8",
  /** Physical pin 9: VOUTB; output. */
  "VOUTB": "9",
  /** Physical pin 10: VREFIO; bidirectional. */
  "VREFIO": "10",
  /** Physical pin 6: SCLK/SCL; input. */
  "SCLK/SCL": "6",
}) {
  override schema = "Analog_DAC:DAC70502";
  override referencePrefix = "U";
}

/**
 * 14-bit quad-channel voltage output DAC, 2.5V 2ppm/°C internal reference, WQFN-16
 *
 * KiCad symbol: `Analog_DAC:DAC70504`. Reference prefix: `U`.
 * Footprint filters: Texas*RTE0016D*WQFN*16*EP0.8x0.8mm*.
 * @see https://www.ti.com/lit/gpn/dac70504
 * Keywords: texas quad digital-analog converter.
 * Default footprint: Package_DFN_QFN:Texas_RTE0016D_WQFN-16-1EP_3x3mm_P0.5mm_EP0.8x0.8mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC70504 extends Component.withPins({
  /** Physical pin 1: REF; bidirectional. */
  "REF": "1",
  /** Physical pin 2: OUT0; output. */
  "OUT0": "2",
  /** Physical pin 3: OUT1; output. */
  "OUT1": "3",
  /** Physical pin 4: OUT2; output. */
  "OUT2": "4",
  /** Physical pin 5: OUT3; output. */
  "OUT3": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN": "8",
  /** Physical pin 9: RSTSEL; input. */
  "RSTSEL": "9",
  /** Physical pin 10: REFDIV; input. */
  "REFDIV": "10",
  /** Physical pin 11: ~{LDAC}; input. */
  "~{LDAC}": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: SCLK; input. */
  "SCLK": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
  /** Physical pin 15: SDO/~{ALARM}; output. */
  "SDO/~{ALARM}": "15",
  /** Physical pin 16: VIO; power_in. */
  "VIO": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Analog_DAC:DAC70504";
  override referencePrefix = "U";
}

/**
 * 12-Bit, Single-Channel, Voltage Output, Serial Interface Digital-to-Analog Converters, SC-70
 *
 * KiCad symbol: `Analog_DAC:DAC7311xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.ti.com/lit/ds/symlink/dac5311.pdf
 * Keywords: DAC SPI 1-channel.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC7311xDCK extends Component.withPins({
  /** Physical pin 1: ~{SYNC}; input. */
  "~{SYNC}": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DIN; input. */
  "DIN": "3",
  /** Physical pin 4: AVDD/AVREF; power_in. */
  "AVDD/AVREF": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VOUT; output. */
  "VOUT": "6",
}) {
  override schema = "Analog_DAC:DAC7311xDCK";
  override referencePrefix = "U";
}

/**
 * Low-Power, Rail-to-Rail Output, 12-Bit Serial Input DAC
 *
 * KiCad symbol: `Analog_DAC:DAC7513_DCN`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/dac7513.pdf
 * Keywords: TI DAC 12 bit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC7513_DCN extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VFB; input. */
  "VFB": "2",
  /** Physical pin 3: VREF; input. */
  "VREF": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: ~{SYNC}; input. */
  "~{SYNC}": "8",
}) {
  override schema = "Analog_DAC:DAC7513_DCN";
  override referencePrefix = "U";
}

/**
 * 14-bit quad-channel voltage output DAC with 2.5V internal reference
 *
 * KiCad symbol: `Analog_DAC:DAC8165`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8165.pdf
 * Keywords: 14-bit quad DAC voltage reference.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8165 extends Component.withPins({
  /** Physical pin 1: VOUTA; output. */
  "VOUTA": "1",
  /** Physical pin 2: VOUTB; output. */
  "VOUTB": "2",
  /** Physical pin 3: VREFH/VREFOUT; bidirectional. */
  "VREFH/VREFOUT": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD": "4",
  /** Physical pin 5: VREFL; input. */
  "VREFL": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VOUTC; output. */
  "VOUTC": "7",
  /** Physical pin 8: VOUTD; output. */
  "VOUTD": "8",
  /** Physical pin 9: ~{SYNC}; input. */
  "~{SYNC}": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: DIN; input. */
  "DIN": "11",
  /** Physical pin 12: IOVDD; power_in. */
  "IOVDD": "12",
  /** Physical pin 13: ~{RST}; input. */
  "~{RST}": "13",
  /** Physical pin 14: RSTSEL; input. */
  "RSTSEL": "14",
  /** Physical pin 15: ~{ENABLE}; input. */
  "~{ENABLE}": "15",
  /** Physical pin 16: LDAC; input. */
  "LDAC": "16",
}) {
  override schema = "Analog_DAC:DAC8165";
  override referencePrefix = "U";
}

/**
 * 12-bit quad-channel voltage output DAC with 2.5V internal reference
 *
 * KiCad symbol: `Analog_DAC:DAC7565`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac7565.pdf
 * Keywords: 12-bit quad DAC voltage reference.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC7565 extends Component.withPins({
  /** Physical pin 1: VOUTA; output. */
  "VOUTA": "1",
  /** Physical pin 2: VOUTB; output. */
  "VOUTB": "2",
  /** Physical pin 3: VREFH/VREFOUT; bidirectional. */
  "VREFH/VREFOUT": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD": "4",
  /** Physical pin 5: VREFL; input. */
  "VREFL": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VOUTC; output. */
  "VOUTC": "7",
  /** Physical pin 8: VOUTD; output. */
  "VOUTD": "8",
  /** Physical pin 9: ~{SYNC}; input. */
  "~{SYNC}": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: DIN; input. */
  "DIN": "11",
  /** Physical pin 12: IOVDD; power_in. */
  "IOVDD": "12",
  /** Physical pin 13: ~{RST}; input. */
  "~{RST}": "13",
  /** Physical pin 14: RSTSEL; input. */
  "RSTSEL": "14",
  /** Physical pin 15: ~{ENABLE}; input. */
  "~{ENABLE}": "15",
  /** Physical pin 16: LDAC; input. */
  "LDAC": "16",
}) {
  override schema = "Analog_DAC:DAC7565";
  override referencePrefix = "U";
}

/**
 * 12-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:DAC7578xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC7578xPW extends Component.withPins({
  /** Physical pin 1: ~{LDAC}; input. */
  "~{LDAC}": "1",
  /** Physical pin 2: ADDR0; input. */
  "ADDR0": "2",
  /** Physical pin 3: AVDD; power_in. */
  "AVDD": "3",
  /** Physical pin 4: VOUTA; output. */
  "VOUTA": "4",
  /** Physical pin 5: VOUTC; output. */
  "VOUTC": "5",
  /** Physical pin 6: VOUTE; output. */
  "VOUTE": "6",
  /** Physical pin 7: VOUTG; output. */
  "VOUTG": "7",
  /** Physical pin 8: VREFIN; input. */
  "VREFIN": "8",
  /** Physical pin 9: ~{CLR}; input. */
  "~{CLR}": "9",
  /** Physical pin 10: VOUTH; output. */
  "VOUTH": "10",
  /** Physical pin 11: VOUTF; output. */
  "VOUTF": "11",
  /** Physical pin 12: VOUTD; output. */
  "VOUTD": "12",
  /** Physical pin 13: VOUTB; output. */
  "VOUTB": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: SCL; input. */
  "SCL": "16",
}) {
  override schema = "Analog_DAC:DAC7578xPW";
  override referencePrefix = "U";
}

/**
 * 12-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, QFN-24
 *
 * KiCad symbol: `Analog_DAC:DAC7578xRGE`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC7578xRGE extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: AVDD; power_in. */
  "AVDD": "2",
  /** Physical pin 3: VOUTA; output. */
  "VOUTA": "3",
  /** Physical pin 4: VOUTC; output. */
  "VOUTC": "4",
  /** Physical pin 5: VOUTE; output. */
  "VOUTE": "5",
  /** Physical pin 6: VOUTG; output. */
  "VOUTG": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VREFIN; input. */
  "VREFIN": "8",
  /** Physical pin 9: RSTSEL; input. */
  "RSTSEL": "9",
  /** Physical pin 10: ADDR1; input. */
  "ADDR1": "10",
  /** Physical pin 11: ADDR0; input. */
  "ADDR0": "11",
  /** Physical pin 12: ~{CLR}; input. */
  "~{CLR}": "12",
  /** Physical pin 13: VOUTH; output. */
  "VOUTH": "13",
  /** Physical pin 14: VOUTF; output. */
  "VOUTF": "14",
  /** Physical pin 15: VOUTD; output. */
  "VOUTD": "15",
  /** Physical pin 16: VOUTB; output. */
  "VOUTB": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: SCL; input. */
  "SCL": "20",
  /** Physical pin 21: TWOC; input. */
  "TWOC": "21",
  /** Physical pin 22: ~{LDAC}; input. */
  "~{LDAC}": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
  override schema = "Analog_DAC:DAC7578xRGE";
  override referencePrefix = "U";
}

/**
 * Single-Channel, 16bit Programmable Current Output DAC for 4-mA to 20-mA Current Loop Applications, VQFN-40
 *
 * KiCad symbol: `Analog_DAC:DAC8750xRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA*EP4.6x4.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac7750.pdf
 * Keywords: DAC Current Loop 20mA.
 * Default footprint: Package_DFN_QFN:Texas_RHA_VQFN-40-1EP_6x6mm_P0.5mm_EP4.6x4.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8750xRHA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: ~{ALARM}; open_collector. */
  "~{ALARM}": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: CLR; input. */
  "CLR": "5",
  /** Physical pin 6: LATCH; input. */
  "LATCH": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: DIN; input. */
  "DIN": "8",
  /** Physical pin 9: SDO; output. */
  "SDO": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: ISET-R; passive. */
  "ISET-R": "16",
  /** Physical pin 17: REFOUT; output. */
  "REFOUT": "17",
  /** Physical pin 18: REFIN; input. */
  "REFIN": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: DVDD-EN; input. */
  "DVDD-EN": "23",
  /** Physical pin 24: HART-IN; input. */
  "HART-IN": "24",
  /** Physical pin 25: R3-SENSE; output. */
  "R3-SENSE": "25",
  /** Physical pin 26: IOUT; output. */
  "IOUT": "26",
  /** Physical pin 27: BOOST; output. */
  "BOOST": "27",
  /** Physical pin 28: CAP1; passive. */
  "CAP1": "28",
  /** Physical pin 29: CAP2; passive. */
  "CAP2": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: AVDD; power_in. */
  "AVDD": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: DVDD; power_in. */
  "DVDD": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
}) {
  override schema = "Analog_DAC:DAC8750xRHA";
  override referencePrefix = "U";
}

/**
 * Single-Channel, 12bit Programmable Current Output DAC for 4-mA to 20-mA Current Loop Applications, VQFN-40
 *
 * KiCad symbol: `Analog_DAC:DAC7750xRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA*EP4.6x4.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac7750.pdf
 * Keywords: DAC Current Loop 20mA.
 * Default footprint: Package_DFN_QFN:Texas_RHA_VQFN-40-1EP_6x6mm_P0.5mm_EP4.6x4.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC7750xRHA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: ~{ALARM}; open_collector. */
  "~{ALARM}": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: CLR; input. */
  "CLR": "5",
  /** Physical pin 6: LATCH; input. */
  "LATCH": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: DIN; input. */
  "DIN": "8",
  /** Physical pin 9: SDO; output. */
  "SDO": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: ISET-R; passive. */
  "ISET-R": "16",
  /** Physical pin 17: REFOUT; output. */
  "REFOUT": "17",
  /** Physical pin 18: REFIN; input. */
  "REFIN": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: DVDD-EN; input. */
  "DVDD-EN": "23",
  /** Physical pin 24: HART-IN; input. */
  "HART-IN": "24",
  /** Physical pin 25: R3-SENSE; output. */
  "R3-SENSE": "25",
  /** Physical pin 26: IOUT; output. */
  "IOUT": "26",
  /** Physical pin 27: BOOST; output. */
  "BOOST": "27",
  /** Physical pin 28: CAP1; passive. */
  "CAP1": "28",
  /** Physical pin 29: CAP2; passive. */
  "CAP2": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: AVDD; power_in. */
  "AVDD": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC_38": "38",
  /** Physical pin 39: DVDD; power_in. */
  "DVDD": "39",
  /** Physical pin 40: NC; no_connect. */
  "NC_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
}) {
  override schema = "Analog_DAC:DAC7750xRHA";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Rail-to-Rail Output, SPI interface, MSOP-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8501E`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8501.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8501E extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; input. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{FB}; input. */
  "V_{FB}": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: ~{SYNC}; input. */
  "~{SYNC}": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: D_{IN}; input. */
  "D_{IN}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8501E";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Rail-to-Rail Output, SPI interface, MSOP-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8531E`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8531.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8531E extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; input. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{FB}; input. */
  "V_{FB}": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: ~{SYNC}; input. */
  "~{SYNC}": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: D_{IN}; input. */
  "D_{IN}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8531E";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Rail-to-Rail Output, SPI interface, VSON-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8531IDRB`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8531.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.65x2.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8531IDRB extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; input. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{FB}; input. */
  "V_{FB}": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: ~{SYNC}; input. */
  "~{SYNC}": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: D_{IN}; input. */
  "D_{IN}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8531IDRB";
  override referencePrefix = "U";
}

/**
 * Dual Channel, 16-bit, Low Power, Serial Input Digital-To-Analog Converter, VDD = 2.7..5.5V, up to 30MHz (VDD = 5V), VSSOP-8
 *
 * KiCad symbol: `Analog_DAC:DAC8532xDGK`. Reference prefix: `U`.
 * Footprint filters: *VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8532.pdf
 * Keywords: 3-wire SPI Microwire.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8532xDGK extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; power_in. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{OUT}B; output. */
  "V_{OUT}B": "3",
  /** Physical pin 4: V_{OUT}A; output. */
  "V_{OUT}A": "4",
  /** Physical pin 5: ~{SYNC}; input. */
  "~{SYNC}": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: D_{IN}; input. */
  "D_{IN}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8532xDGK";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Ultra-Low Glitch, Rail-to-Rail Output, SPI interface, VSON-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8550IxDGK`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8550.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.65x2.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8550IxDGK extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; input. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{FB}; input. */
  "V_{FB}": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: ~{SYNC}; input. */
  "~{SYNC}": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: D_{IN}; input. */
  "D_{IN}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8550IxDGK";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Ultralow-Glitch, Rail-to-Rail Output, SPI interface, VSON-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8551IxDGK`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8551.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.65x2.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8551IxDGK extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; input. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{FB}; input. */
  "V_{FB}": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: ~{SYNC}; input. */
  "~{SYNC}": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: D_{IN}; input. */
  "D_{IN}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8551IxDGK";
  override referencePrefix = "U";
}

/**
 * Digital to analog converter, 16 Bit, 2 ch, ultra-low glitch, 2.7 - 5.5 VDD, MSOP-8
 *
 * KiCad symbol: `Analog_DAC:DAC8552`. Reference prefix: `U`.
 * Footprint filters: *S?PDSO?G8*3x3mm*P0.65*.
 * @see https://www.ti.com/lit/ds/symlink/dac8552.pdf
 * Keywords: Texas dual DAC.
 * Default footprint: Package_SO:Texas_S-PDSO-G8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8552 extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; power_in. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{OUT}B; output. */
  "V_{OUT}B": "3",
  /** Physical pin 4: V_{OUT}A; output. */
  "V_{OUT}A": "4",
  /** Physical pin 5: ~{SYNC}; input. */
  "~{SYNC}": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: D_{IN}; input. */
  "D_{IN}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8552";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Ultra-Low Glitch, Rail-to-Rail Output, 2.5V 2-ppm/°C Internal Reference, SPI interface, VSON-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8560IxDGK`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8560.pdf
 * Keywords: DAC 16-Bit Voltage Output Rail-to-Rail Internal Reference SPI.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.65x2.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8560IxDGK extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; bidirectional. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{FB}; input. */
  "V_{FB}": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: ~{SYNC}; input. */
  "~{SYNC}": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: D_{IN}; input. */
  "D_{IN}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8560IxDGK";
  override referencePrefix = "U";
}

/**
 * 16-bit quad-channel voltage output DAC with 2.5V internal reference
 *
 * KiCad symbol: `Analog_DAC:DAC8565`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8565.pdf
 * Keywords: 16-bit quad DAC voltage reference.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8565 extends Component.withPins({
  /** Physical pin 1: VOUTA; output. */
  "VOUTA": "1",
  /** Physical pin 2: VOUTB; output. */
  "VOUTB": "2",
  /** Physical pin 3: VREFH/VREFOUT; bidirectional. */
  "VREFH/VREFOUT": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD": "4",
  /** Physical pin 5: VREFL; input. */
  "VREFL": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VOUTC; output. */
  "VOUTC": "7",
  /** Physical pin 8: VOUTD; output. */
  "VOUTD": "8",
  /** Physical pin 9: ~{SYNC}; input. */
  "~{SYNC}": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: DIN; input. */
  "DIN": "11",
  /** Physical pin 12: IOVDD; power_in. */
  "IOVDD": "12",
  /** Physical pin 13: ~{RST}; input. */
  "~{RST}": "13",
  /** Physical pin 14: RSTSEL; input. */
  "RSTSEL": "14",
  /** Physical pin 15: ~{ENABLE}; input. */
  "~{ENABLE}": "15",
  /** Physical pin 16: LDAC; input. */
  "LDAC": "16",
}) {
  override schema = "Analog_DAC:DAC8565";
  override referencePrefix = "U";
}

/**
 * DAC, 16-Bit, Low Power, Voltage Output, Rail-to-Rail Output, I2C Interface, MSOP-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8571IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8571.pdf
 * Keywords: DAC 16-Bit Voltage Output Rail-to-Rail I2C.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DAC8571IDGK extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{REF}; input. */
  "V_{REF}": "2",
  /** Physical pin 3: V_{SENSE}; input. */
  "V_{SENSE}": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:DAC8571IDGK";
  override referencePrefix = "U";
}

/**
 * Single Supply 12-bit DAC with Internal Reference Voltage, SOIC-8
 *
 * KiCad symbol: `Analog_DAC:LTC1257`. Reference prefix: `U`.
 * Footprint filters: SOIC*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1257fc.pdf
 * Keywords: DAC 12-bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1257 extends Component.withPins({
  /** Physical pin 1: CKL; input. */
  "CKL": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: ~{LOAD}; input. */
  "~{LOAD}": "3",
  /** Physical pin 4: DOUT; output. */
  "DOUT": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VREF; bidirectional. */
  "VREF": "6",
  /** Physical pin 7: VOUT; output. */
  "VOUT": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Analog_DAC:LTC1257";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12-Bit Rail-To-Rail D/A Converters with SPI Interface and Internal Reference (4.096V)
 *
 * KiCad symbol: `Analog_DAC:LTC1446`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1446fa.pdf
 * Keywords: 12-Bit DAC SPI Reference 2ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1446 extends Component.withPins({
  /** Physical pin 1: SCK; input. */
  "SCK": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: ~{CS}/LD; input. */
  "~{CS}/LD": "3",
  /** Physical pin 4: SDO; output. */
  "SDO": "4",
  /** Physical pin 5: VA; output. */
  "VA": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VB; output. */
  "VB": "8",
}) {
  override schema = "Analog_DAC:LTC1446";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12-Bit Rail-To-Rail D/A Converters with SPI Interface and Internal Reference (2.500V)
 *
 * KiCad symbol: `Analog_DAC:LTC1446L`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1446fa.pdf
 * Keywords: 12-Bit DAC SPI 2ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1446L extends Component.withPins({
  /** Physical pin 1: SCK; input. */
  "SCK": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: ~{CS}/LD; input. */
  "~{CS}/LD": "3",
  /** Physical pin 4: SDO; output. */
  "SDO": "4",
  /** Physical pin 5: VA; output. */
  "VA": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: VB; output. */
  "VB": "8",
}) {
  override schema = "Analog_DAC:LTC1446L";
  override referencePrefix = "U";
}

/**
 * Quad Micropower 10-bit DAC, Standard, SSOP-16
 *
 * KiCad symbol: `Analog_DAC:LTC1664CGN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1664fa.pdf
 * Keywords: Quad DAC Micropower 10bit 4ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1664CGN extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: OUTA; output. */
  "OUTA": "2",
  /** Physical pin 3: OUTB; output. */
  "OUTB": "3",
  /** Physical pin 4: OUTC; output. */
  "OUTC": "4",
  /** Physical pin 5: OUTD; output. */
  "OUTD": "5",
  /** Physical pin 6: REF; input. */
  "REF": "6",
  /** Physical pin 7: ~{CS}/LD; input. */
  "~{CS}/LD": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: DIN; input. */
  "DIN": "9",
  /** Physical pin 10: DOUT; output. */
  "DOUT": "10",
  /** Physical pin 11: ~{CLR}; input. */
  "~{CLR}": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Analog_DAC:LTC1664CGN";
  override referencePrefix = "U";
}

/**
 * Quad Micropower 10-bit DAC, Standard, DIP-16
 *
 * KiCad symbol: `Analog_DAC:LTC1664CN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1664fa.pdf
 * Keywords: Quad DAC Micropower 10bit 4ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1664CN extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: OUTA; output. */
  "OUTA": "2",
  /** Physical pin 3: OUTB; output. */
  "OUTB": "3",
  /** Physical pin 4: OUTC; output. */
  "OUTC": "4",
  /** Physical pin 5: OUTD; output. */
  "OUTD": "5",
  /** Physical pin 6: REF; input. */
  "REF": "6",
  /** Physical pin 7: ~{CS}/LD; input. */
  "~{CS}/LD": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: DIN; input. */
  "DIN": "9",
  /** Physical pin 10: DOUT; output. */
  "DOUT": "10",
  /** Physical pin 11: ~{CLR}; input. */
  "~{CLR}": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Analog_DAC:LTC1664CN";
  override referencePrefix = "U";
}

/**
 * Quad Micropower 10-bit DAC, Industrial, SSOP-16
 *
 * KiCad symbol: `Analog_DAC:LTC1664IGN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1664fa.pdf
 * Keywords: Quad DAC Micropower 10bit 4ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1664IGN extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: OUTA; output. */
  "OUTA": "2",
  /** Physical pin 3: OUTB; output. */
  "OUTB": "3",
  /** Physical pin 4: OUTC; output. */
  "OUTC": "4",
  /** Physical pin 5: OUTD; output. */
  "OUTD": "5",
  /** Physical pin 6: REF; input. */
  "REF": "6",
  /** Physical pin 7: ~{CS}/LD; input. */
  "~{CS}/LD": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: DIN; input. */
  "DIN": "9",
  /** Physical pin 10: DOUT; output. */
  "DOUT": "10",
  /** Physical pin 11: ~{CLR}; input. */
  "~{CLR}": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Analog_DAC:LTC1664IGN";
  override referencePrefix = "U";
}

/**
 * Quad Micropower 10-bit DAC, Industrial, DIP-16
 *
 * KiCad symbol: `Analog_DAC:LTC1664IN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1664fa.pdf
 * Keywords: Quad DAC Micropower 10bit 4ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1664IN extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: OUTA; output. */
  "OUTA": "2",
  /** Physical pin 3: OUTB; output. */
  "OUTB": "3",
  /** Physical pin 4: OUTC; output. */
  "OUTC": "4",
  /** Physical pin 5: OUTD; output. */
  "OUTD": "5",
  /** Physical pin 6: REF; input. */
  "REF": "6",
  /** Physical pin 7: ~{CS}/LD; input. */
  "~{CS}/LD": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: DIN; input. */
  "DIN": "9",
  /** Physical pin 10: DOUT; output. */
  "DOUT": "10",
  /** Physical pin 11: ~{CLR}; input. */
  "~{CLR}": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Analog_DAC:LTC1664IN";
  override referencePrefix = "U";
}

/**
 * Low-Power, Single, 12-Bit, Buffered Voltage-Output DAC
 *
 * KiCad symbol: `Analog_DAC:MAX5139`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*3x3mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5138-MAX5139.pdf
 * Keywords: 12-bit DAC 1CH.
 * Default footprint: Package_DFN_QFN:TQFN-16-1EP_3x3mm_P0.5mm_EP1.23x1.23mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5139 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: M/~{Z}; input. */
  "M/~{Z}": "2",
  /** Physical pin 3: ~{LDAC}; input. */
  "~{LDAC}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: SCLK; input. */
  "SCLK": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: DIN; input. */
  "DIN": "7",
  /** Physical pin 8: AGND; power_in. */
  "AGND_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: ~{READY}; output. */
  "~{READY}": "10",
  /** Physical pin 11: DVDD; power_in. */
  "DVDD": "11",
  /** Physical pin 12: OUT; output. */
  "OUT": "12",
  /** Physical pin 13: AVDD; power_in. */
  "AVDD": "13",
  /** Physical pin 14: REFI; input. */
  "REFI": "14",
  /** Physical pin 15: REFO; output. */
  "REFO": "15",
  /** Physical pin 16: AGND; power_in. */
  "AGND_16": "16",
}) {
  override schema = "Analog_DAC:MAX5139";
  override referencePrefix = "U";
}

/**
 * Low-Power, Single, 16-Bit, Buffered Voltage-Output DAC
 *
 * KiCad symbol: `Analog_DAC:MAX5138`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*3x3mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5138-MAX5139.pdf
 * Keywords: 16-bit DAC 1CH.
 * Default footprint: Package_DFN_QFN:TQFN-16-1EP_3x3mm_P0.5mm_EP1.23x1.23mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5138 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: M/~{Z}; input. */
  "M/~{Z}": "2",
  /** Physical pin 3: ~{LDAC}; input. */
  "~{LDAC}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: SCLK; input. */
  "SCLK": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: DIN; input. */
  "DIN": "7",
  /** Physical pin 8: AGND; power_in. */
  "AGND_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: ~{READY}; output. */
  "~{READY}": "10",
  /** Physical pin 11: DVDD; power_in. */
  "DVDD": "11",
  /** Physical pin 12: OUT; output. */
  "OUT": "12",
  /** Physical pin 13: AVDD; power_in. */
  "AVDD": "13",
  /** Physical pin 14: REFI; input. */
  "REFI": "14",
  /** Physical pin 15: REFO; output. */
  "REFO": "15",
  /** Physical pin 16: AGND; power_in. */
  "AGND_16": "16",
}) {
  override schema = "Analog_DAC:MAX5138";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 14 Bit, 1 ch, 2.7 - 5.5 VDD, I2C, uMAX-8
 *
 * KiCad symbol: `Analog_DAC:MAX5215`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5215-MAX5217.pdf
 * Keywords: DA 14 Bit 1 ch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5215 extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: ~{AUX}; input. */
  "~{AUX}": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:MAX5215";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 16 Bit, 1 ch, 2.7 - 5.5 VDD, I2C, uMAX-8
 *
 * KiCad symbol: `Analog_DAC:MAX5217`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5215-MAX5217.pdf
 * Keywords: DA 16 Bit 1 ch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5217 extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: ~{AUX}; input. */
  "~{AUX}": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_DAC:MAX5217";
  override referencePrefix = "U";
}

/**
 * 16-bit Voltage Digital-to-Analog converter, SOIC-14
 *
 * KiCad symbol: `Analog_DAC:MAX5717xSD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5717-MAX5719.pdf
 * Keywords: DAC.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5717xSD extends Component.withPins({
  /** Physical pin 1: RFB; passive. */
  "RFB": "1",
  /** Physical pin 2: OUT; output. */
  "OUT": "2",
  /** Physical pin 3: AGNDF; power_in. */
  "AGNDF": "3",
  /** Physical pin 4: AGNDS; power_in. */
  "AGNDS": "4",
  /** Physical pin 5: REFS; input. */
  "REFS": "5",
  /** Physical pin 6: REFF; input. */
  "REFF": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: DIN; input. */
  "DIN": "10",
  /** Physical pin 11: ~{LDAC}; input. */
  "~{LDAC}": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: INV; passive. */
  "INV": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Analog_DAC:MAX5717xSD";
  override referencePrefix = "U";
}

/**
 * 20-bit Voltage Digital-to-Analog converter, SOIC-14
 *
 * KiCad symbol: `Analog_DAC:MAX5719xSD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5717-MAX5719.pdf
 * Keywords: DAC.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5719xSD extends Component.withPins({
  /** Physical pin 1: RFB; passive. */
  "RFB": "1",
  /** Physical pin 2: OUT; output. */
  "OUT": "2",
  /** Physical pin 3: AGNDF; power_in. */
  "AGNDF": "3",
  /** Physical pin 4: AGNDS; power_in. */
  "AGNDS": "4",
  /** Physical pin 5: REFS; input. */
  "REFS": "5",
  /** Physical pin 6: REFF; input. */
  "REFF": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: DIN; input. */
  "DIN": "10",
  /** Physical pin 11: ~{LDAC}; input. */
  "~{LDAC}": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: INV; passive. */
  "INV": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Analog_DAC:MAX5719xSD";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 10 Bit, 4 ch, 2.7 - 5.5 VDD, SPI, uMAX-10
 *
 * KiCad symbol: `Analog_DAC:MAX5741`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm?P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5741.pdf
 * Keywords: DA 8 Bit 4 ch.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5741 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DIN; input. */
  "DIN": "5",
  /** Physical pin 6: REF; power_in. */
  "REF": "6",
  /** Physical pin 7: OUTA; output. */
  "OUTA": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB": "8",
  /** Physical pin 9: OUTC; output. */
  "OUTC": "9",
  /** Physical pin 10: OUTD; output. */
  "OUTD": "10",
}) {
  override schema = "Analog_DAC:MAX5741";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 8 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14
 *
 * KiCad symbol: `Analog_DAC:MAX5813`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*14*4.4*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 8 Bit 4 ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5813 extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: OUTA; output. */
  "OUTA": "2",
  /** Physical pin 3: OUTB; output. */
  "OUTB": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUTC; output. */
  "OUTC": "5",
  /** Physical pin 6: OUTD; output. */
  "OUTD": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: ADDR1; input. */
  "ADDR1": "8",
  /** Physical pin 9: ADDR0; input. */
  "ADDR0": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
  /** Physical pin 11: SDA; bidirectional. */
  "SDA": "11",
  /** Physical pin 12: ~{CLR}; input. */
  "~{CLR}": "12",
  /** Physical pin 13: VDDIO; power_in. */
  "VDDIO": "13",
  /** Physical pin 14: ~{LDAC}; input. */
  "~{LDAC}": "14",
}) {
  override schema = "Analog_DAC:MAX5813";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 8 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14, Maxim_WLP-12
 *
 * KiCad symbol: `Analog_DAC:MAX5813WLP`. Reference prefix: `U`.
 * Footprint filters: *Maxim*WLP*12*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 8 Bit 4 ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5813WLP extends Component.withPins({
  /** Physical pin A1: OUTA; output. */
  "OUTA": "A1",
  /** Physical pin A2: OUTB; output. */
  "OUTB": "A2",
  /** Physical pin A3: OUTC; output. */
  "OUTC": "A3",
  /** Physical pin A4: OUTD; output. */
  "OUTD": "A4",
  /** Physical pin B1: REF; power_in. */
  "REF": "B1",
  /** Physical pin B2: GND; power_in. */
  "GND": "B2",
  /** Physical pin B3: VDDIO; power_in. */
  "VDDIO": "B3",
  /** Physical pin B4: VDD; power_in. */
  "VDD": "B4",
  /** Physical pin C1: ~{CLR}; input. */
  "~{CLR}": "C1",
  /** Physical pin C2: SDA; bidirectional. */
  "SDA": "C2",
  /** Physical pin C3: SCL; input. */
  "SCL": "C3",
  /** Physical pin C4: ADDR0; input. */
  "ADDR0": "C4",
}) {
  override schema = "Analog_DAC:MAX5813WLP";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 10 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14
 *
 * KiCad symbol: `Analog_DAC:MAX5814`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*14*4.4*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 10 Bit 4 ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5814 extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: OUTA; output. */
  "OUTA": "2",
  /** Physical pin 3: OUTB; output. */
  "OUTB": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUTC; output. */
  "OUTC": "5",
  /** Physical pin 6: OUTD; output. */
  "OUTD": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: ADDR1; input. */
  "ADDR1": "8",
  /** Physical pin 9: ADDR0; input. */
  "ADDR0": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
  /** Physical pin 11: SDA; bidirectional. */
  "SDA": "11",
  /** Physical pin 12: ~{CLR}; input. */
  "~{CLR}": "12",
  /** Physical pin 13: VDDIO; power_in. */
  "VDDIO": "13",
  /** Physical pin 14: ~{LDAC}; input. */
  "~{LDAC}": "14",
}) {
  override schema = "Analog_DAC:MAX5814";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 10 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14, Maxim_WLP-12
 *
 * KiCad symbol: `Analog_DAC:MAX5814WLP`. Reference prefix: `U`.
 * Footprint filters: *Maxim*WLP*12*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 10 Bit 4 ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5814WLP extends Component.withPins({
  /** Physical pin A1: OUTA; output. */
  "OUTA": "A1",
  /** Physical pin A2: OUTB; output. */
  "OUTB": "A2",
  /** Physical pin A3: OUTC; output. */
  "OUTC": "A3",
  /** Physical pin A4: OUTD; output. */
  "OUTD": "A4",
  /** Physical pin B1: REF; power_in. */
  "REF": "B1",
  /** Physical pin B2: GND; power_in. */
  "GND": "B2",
  /** Physical pin B3: VDDIO; power_in. */
  "VDDIO": "B3",
  /** Physical pin B4: VDD; power_in. */
  "VDD": "B4",
  /** Physical pin C1: ~{CLR}; input. */
  "~{CLR}": "C1",
  /** Physical pin C2: SDA; bidirectional. */
  "SDA": "C2",
  /** Physical pin C3: SCL; input. */
  "SCL": "C3",
  /** Physical pin C4: ADDR0; input. */
  "ADDR0": "C4",
}) {
  override schema = "Analog_DAC:MAX5814WLP";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 12 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14
 *
 * KiCad symbol: `Analog_DAC:MAX5815`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*14*4.4*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 12 Bit 4 ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5815 extends Component.withPins({
  /** Physical pin 1: REF; power_in. */
  "REF": "1",
  /** Physical pin 2: OUTA; output. */
  "OUTA": "2",
  /** Physical pin 3: OUTB; output. */
  "OUTB": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUTC; output. */
  "OUTC": "5",
  /** Physical pin 6: OUTD; output. */
  "OUTD": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: ADDR1; input. */
  "ADDR1": "8",
  /** Physical pin 9: ADDR0; input. */
  "ADDR0": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
  /** Physical pin 11: SDA; bidirectional. */
  "SDA": "11",
  /** Physical pin 12: ~{CLR}; input. */
  "~{CLR}": "12",
  /** Physical pin 13: VDDIO; power_in. */
  "VDDIO": "13",
  /** Physical pin 14: ~{LDAC}; input. */
  "~{LDAC}": "14",
}) {
  override schema = "Analog_DAC:MAX5815";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 12 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14, Maxim_WLP-12
 *
 * KiCad symbol: `Analog_DAC:MAX5815WLP`. Reference prefix: `U`.
 * Footprint filters: *Maxim*WLP*12*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 12 Bit 4 ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5815WLP extends Component.withPins({
  /** Physical pin A1: OUTA; output. */
  "OUTA": "A1",
  /** Physical pin A2: OUTB; output. */
  "OUTB": "A2",
  /** Physical pin A3: OUTC; output. */
  "OUTC": "A3",
  /** Physical pin A4: OUTD; output. */
  "OUTD": "A4",
  /** Physical pin B1: REF; power_in. */
  "REF": "B1",
  /** Physical pin B2: GND; power_in. */
  "GND": "B2",
  /** Physical pin B3: VDDIO; power_in. */
  "VDDIO": "B3",
  /** Physical pin B4: VDD; power_in. */
  "VDD": "B4",
  /** Physical pin C1: ~{CLR}; input. */
  "~{CLR}": "C1",
  /** Physical pin C2: SDA; bidirectional. */
  "SDA": "C2",
  /** Physical pin C3: SCL; input. */
  "SCL": "C3",
  /** Physical pin C4: ADDR0; input. */
  "ADDR0": "C4",
}) {
  override schema = "Analog_DAC:MAX5815WLP";
  override referencePrefix = "U";
}

/**
 * 12-bit Digital-to-Analog Converter, integrated EEPROM, I2C interface, SOT-23-6
 *
 * KiCad symbol: `Analog_DAC:MCP4725xxx-xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22039d.pdf
 * Keywords: dac twi.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4725xxx_xCH extends Component.withPins({
  /** Physical pin 1: VOUT; output. */
  "VOUT": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: A0; input. */
  "A0": "6",
}) {
  override schema = "Analog_DAC:MCP4725xxx-xCH";
  override referencePrefix = "U";
}

/**
 * 12-bit digital to analog converter, quad output, 2.048V internal reference, integrated EEPROM, I2C interface
 *
 * KiCad symbol: `Analog_DAC:MCP4728`. Reference prefix: `U`.
 * Footprint filters: *SOP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22187E.pdf
 * Keywords: dac i2c.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4728 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: ~{LDAC}; input. */
  "~{LDAC}": "4",
  /** Physical pin 5: RDY/~{BSY}; output. */
  "RDY/~{BSY}": "5",
  /** Physical pin 6: VOUTA; output. */
  "VOUTA": "6",
  /** Physical pin 7: VOUTB; output. */
  "VOUTB": "7",
  /** Physical pin 8: VOUTC; output. */
  "VOUTC": "8",
  /** Physical pin 9: VOUTD; output. */
  "VOUTD": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
}) {
  override schema = "Analog_DAC:MCP4728";
  override referencePrefix = "U";
}

/**
 * 8-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4801`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 8-Bit DAC SPI Reference 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4801 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
}) {
  override schema = "Analog_DAC:MCP4801";
  override referencePrefix = "U";
}

/**
 * 8-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4801-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 8-Bit DAC SPI Reference 1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4801_EMC extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
  /** Physical pin 9: PAD/Vss; power_in. */
  "PAD/Vss": "9",
}) {
  override schema = "Analog_DAC:MCP4801-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 8-Bit D/A Converters with SPI Interface and Internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4802`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002249B.pdf
 * Keywords: 8-Bit DAC SPI Reference 2ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4802 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: VB; output. */
  "VB": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: VA; output. */
  "VA": "8",
}) {
  override schema = "Analog_DAC:MCP4802";
  override referencePrefix = "U";
}

/**
 * 10-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4811`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 10-Bit DAC SPI Reference 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4811 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
}) {
  override schema = "Analog_DAC:MCP4811";
  override referencePrefix = "U";
}

/**
 * 10-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4811-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 10-Bit DAC SPI Reference 1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4811_EMC extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
  /** Physical pin 9: PAD/Vss; power_in. */
  "PAD/Vss": "9",
}) {
  override schema = "Analog_DAC:MCP4811-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 10-Bit D/A Converters with SPI Interface and Internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4812`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002249B.pdf
 * Keywords: 10-Bit DAC SPI Reference 2ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4812 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: VB; output. */
  "VB": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: VA; output. */
  "VA": "8",
}) {
  override schema = "Analog_DAC:MCP4812";
  override referencePrefix = "U";
}

/**
 * 12-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4821`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 12-Bit DAC SPI Reference 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4821 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
}) {
  override schema = "Analog_DAC:MCP4821";
  override referencePrefix = "U";
}

/**
 * 12-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4821-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 12-Bit DAC SPI Reference 1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4821_EMC extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
  /** Physical pin 9: PAD/Vss; power_in. */
  "PAD/Vss": "9",
}) {
  override schema = "Analog_DAC:MCP4821-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12-Bit D/A Converters with SPI Interface and Internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4822`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002249B.pdf
 * Keywords: 12-Bit DAC SPI Reference 2ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4822 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: VB; output. */
  "VB": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: VA; output. */
  "VA": "8",
}) {
  override schema = "Analog_DAC:MCP4822";
  override referencePrefix = "U";
}

/**
 * 8-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4901`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 8-Bit DAC SPI  1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4901 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: Vref; power_in. */
  "Vref": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
}) {
  override schema = "Analog_DAC:MCP4901";
  override referencePrefix = "U";
}

/**
 * 8-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4901-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 8-Bit DAC SPI  1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4901_EMC extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: Vref; power_in. */
  "Vref": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
  /** Physical pin 9: PAD/Vss; power_in. */
  "PAD/Vss": "9",
}) {
  override schema = "Analog_DAC:MCP4901-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 8-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4902`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22250A.pdf
 * Keywords: 8-Bit DAC SPI  2ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4902 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: VB; output. */
  "VB": "10",
  /** Physical pin 11: VrefB; input. */
  "VrefB": "11",
  /** Physical pin 12: Vss; power_in. */
  "Vss": "12",
  /** Physical pin 13: VrefA; input. */
  "VrefA": "13",
  /** Physical pin 14: VA; output. */
  "VA": "14",
}) {
  override schema = "Analog_DAC:MCP4902";
  override referencePrefix = "U";
}

/**
 * 10-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4911`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 10-Bit DAC SPI 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4911 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: Vref; power_in. */
  "Vref": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
}) {
  override schema = "Analog_DAC:MCP4911";
  override referencePrefix = "U";
}

/**
 * 10-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4911-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 10-Bit DAC SPI  1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4911_EMC extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: Vref; power_in. */
  "Vref": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
  /** Physical pin 9: PAD/Vss; power_in. */
  "PAD/Vss": "9",
}) {
  override schema = "Analog_DAC:MCP4911-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 10-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4912`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22250A.pdf
 * Keywords: 10-Bit DAC SPI 2ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4912 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: VB; output. */
  "VB": "10",
  /** Physical pin 11: VrefB; input. */
  "VrefB": "11",
  /** Physical pin 12: Vss; power_in. */
  "Vss": "12",
  /** Physical pin 13: VrefA; input. */
  "VrefA": "13",
  /** Physical pin 14: VA; output. */
  "VA": "14",
}) {
  override schema = "Analog_DAC:MCP4912";
  override referencePrefix = "U";
}

/**
 * 12-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4921`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 12-Bit DAC SPI 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4921 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: Vref; power_in. */
  "Vref": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
}) {
  override schema = "Analog_DAC:MCP4921";
  override referencePrefix = "U";
}

/**
 * 12-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4921-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 12-Bit DAC SPI  1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4921_EMC extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: Vref; power_in. */
  "Vref": "6",
  /** Physical pin 7: Vss; power_in. */
  "Vss": "7",
  /** Physical pin 8: Vout; output. */
  "Vout": "8",
  /** Physical pin 9: PAD/Vss; power_in. */
  "PAD/Vss": "9",
}) {
  override schema = "Analog_DAC:MCP4921-EMC";
  override referencePrefix = "U";
}

/**
 * Single 12-bit Digital to Analog Converter, SPI Interface, MSOP-8
 *
 * KiCad symbol: `Analog_DAC:MCP4921-EMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*, SOIC*, DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Single DAC 1ch 12bit SPI.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4921_EMS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: VrefA; passive. */
  "VrefA": "6",
  /** Physical pin 7: AVSS; power_in. */
  "AVSS": "7",
  /** Physical pin 8: VoutA; passive. */
  "VoutA": "8",
}) {
  override schema = "Analog_DAC:MCP4921-EMS";
  override referencePrefix = "U";
}

/**
 * Single 12-bit Digital to Analog Converter, SPI Interface, PDIP-8
 *
 * KiCad symbol: `Analog_DAC:MCP4921-EP`. Reference prefix: `U`.
 * Footprint filters: MSOP*, SOIC*, DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Single DAC 1ch 12bit SPI.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4921_EP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: VrefA; passive. */
  "VrefA": "6",
  /** Physical pin 7: AVSS; power_in. */
  "AVSS": "7",
  /** Physical pin 8: VoutA; passive. */
  "VoutA": "8",
}) {
  override schema = "Analog_DAC:MCP4921-EP";
  override referencePrefix = "U";
}

/**
 * Single 12-bit Digital to Analog Converter, SPI Interface, SOIC-8
 *
 * KiCad symbol: `Analog_DAC:MCP4921-ESN`. Reference prefix: `U`.
 * Footprint filters: MSOP*, SOIC*, DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Single DAC 1ch 12bit SPI.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4921_ESN extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: ~{LDAC}; input. */
  "~{LDAC}": "5",
  /** Physical pin 6: VrefA; passive. */
  "VrefA": "6",
  /** Physical pin 7: AVSS; power_in. */
  "AVSS": "7",
  /** Physical pin 8: VoutA; passive. */
  "VoutA": "8",
}) {
  override schema = "Analog_DAC:MCP4921-ESN";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4922`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22250A.pdf
 * Keywords: 12-Bit DAC SPI 2CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4922 extends Component.withPins({
  /** Physical pin 1: Vdd; power_in. */
  "Vdd": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: VB; output. */
  "VB": "10",
  /** Physical pin 11: VrefB; input. */
  "VrefB": "11",
  /** Physical pin 12: Vss; power_in. */
  "Vss": "12",
  /** Physical pin 13: VrefA; input. */
  "VrefA": "13",
  /** Physical pin 14: VA; output. */
  "VA": "14",
}) {
  override schema = "Analog_DAC:MCP4922";
  override referencePrefix = "U";
}

/**
 * Dual 12-bit Digital to Analog Converter, SPI Interface, PDIP-14
 *
 * KiCad symbol: `Analog_DAC:MCP4922-EP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*, TSSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Dual DAC 1ch 12bit SPI.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4922_EP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: VoutB; passive. */
  "VoutB": "10",
  /** Physical pin 11: VrefB; passive. */
  "VrefB": "11",
  /** Physical pin 12: AVSS; power_in. */
  "AVSS": "12",
  /** Physical pin 13: VrefA; passive. */
  "VrefA": "13",
  /** Physical pin 14: VoutA; passive. */
  "VoutA": "14",
}) {
  override schema = "Analog_DAC:MCP4922-EP";
  override referencePrefix = "U";
}

/**
 * Dual 12-bit Digital to Analog Converter, SPI Interface, SOIC-14
 *
 * KiCad symbol: `Analog_DAC:MCP4922-ESL`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*, TSSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Dual DAC 1ch 12bit SPI.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4922_ESL extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: VoutB; passive. */
  "VoutB": "10",
  /** Physical pin 11: VrefB; passive. */
  "VrefB": "11",
  /** Physical pin 12: AVSS; power_in. */
  "AVSS": "12",
  /** Physical pin 13: VrefA; passive. */
  "VrefA": "13",
  /** Physical pin 14: VoutA; passive. */
  "VoutA": "14",
}) {
  override schema = "Analog_DAC:MCP4922-ESL";
  override referencePrefix = "U";
}

/**
 * Dual 12-bit Digital to Analog Converter, SPI Interface, TSSOP-14
 *
 * KiCad symbol: `Analog_DAC:MCP4922-EST`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*, TSSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Dual DAC 1ch 12bit SPI.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4922_EST extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: ~{LDAC}; input. */
  "~{LDAC}": "8",
  /** Physical pin 9: ~{SHDN}; input. */
  "~{SHDN}": "9",
  /** Physical pin 10: VoutB; passive. */
  "VoutB": "10",
  /** Physical pin 11: VrefB; passive. */
  "VrefB": "11",
  /** Physical pin 12: AVSS; power_in. */
  "AVSS": "12",
  /** Physical pin 13: VrefA; passive. */
  "VrefA": "13",
  /** Physical pin 14: VoutA; passive. */
  "VoutA": "14",
}) {
  override schema = "Analog_DAC:MCP4922-EST";
  override referencePrefix = "U";
}

/**
 * 8-Bit, 100 MSPS, CommsDAC, Parallel Current DAC, SOIC-28
 *
 * KiCad symbol: `Analog_DAC:THS5641AxDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ths5641a.pdf
 * Keywords: DAC IDAC.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS5641AxDW extends Component.withPins({
  /** Physical pin 1: D7; input. */
  "D7": "1",
  /** Physical pin 2: D6; input. */
  "D6": "2",
  /** Physical pin 3: D5; input. */
  "D5": "3",
  /** Physical pin 4: D4; input. */
  "D4": "4",
  /** Physical pin 5: D3; input. */
  "D3": "5",
  /** Physical pin 6: D2; input. */
  "D2": "6",
  /** Physical pin 7: D1; input. */
  "D1": "7",
  /** Physical pin 8: D0; input. */
  "D0": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: SLEEP; input. */
  "SLEEP": "15",
  /** Physical pin 16: EXTLO; bidirectional. */
  "EXTLO": "16",
  /** Physical pin 17: EXTIO; bidirectional. */
  "EXTIO": "17",
  /** Physical pin 18: BIASJ; passive. */
  "BIASJ": "18",
  /** Physical pin 19: COMP1; input. */
  "COMP1": "19",
  /** Physical pin 20: AGND; power_in. */
  "AGND": "20",
  /** Physical pin 21: ~{IOUT2}; output. */
  "~{IOUT2}": "21",
  /** Physical pin 22: IOUT1; output. */
  "IOUT1": "22",
  /** Physical pin 23: COMP2; input. */
  "COMP2": "23",
  /** Physical pin 24: AVDD; power_in. */
  "AVDD": "24",
  /** Physical pin 25: MODE; input. */
  "MODE": "25",
  /** Physical pin 26: DGND; power_in. */
  "DGND": "26",
  /** Physical pin 27: DVDD; power_in. */
  "DVDD": "27",
  /** Physical pin 28: CLK; input. */
  "CLK": "28",
}) {
  override schema = "Analog_DAC:THS5641AxDW";
  override referencePrefix = "U";
}

/**
 * 8-Bit, 100 MSPS, CommsDAC, Parallel Current DAC, TSSOP-28
 *
 * KiCad symbol: `Analog_DAC:THS5641AxPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ths5641a.pdf
 * Keywords: DAC IDAC.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS5641AxPW extends Component.withPins({
  /** Physical pin 1: D7; input. */
  "D7": "1",
  /** Physical pin 2: D6; input. */
  "D6": "2",
  /** Physical pin 3: D5; input. */
  "D5": "3",
  /** Physical pin 4: D4; input. */
  "D4": "4",
  /** Physical pin 5: D3; input. */
  "D3": "5",
  /** Physical pin 6: D2; input. */
  "D2": "6",
  /** Physical pin 7: D1; input. */
  "D1": "7",
  /** Physical pin 8: D0; input. */
  "D0": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: SLEEP; input. */
  "SLEEP": "15",
  /** Physical pin 16: EXTLO; bidirectional. */
  "EXTLO": "16",
  /** Physical pin 17: EXTIO; bidirectional. */
  "EXTIO": "17",
  /** Physical pin 18: BIASJ; passive. */
  "BIASJ": "18",
  /** Physical pin 19: COMP1; input. */
  "COMP1": "19",
  /** Physical pin 20: AGND; power_in. */
  "AGND": "20",
  /** Physical pin 21: ~{IOUT2}; output. */
  "~{IOUT2}": "21",
  /** Physical pin 22: IOUT1; output. */
  "IOUT1": "22",
  /** Physical pin 23: COMP2; input. */
  "COMP2": "23",
  /** Physical pin 24: AVDD; power_in. */
  "AVDD": "24",
  /** Physical pin 25: MODE; input. */
  "MODE": "25",
  /** Physical pin 26: DGND; power_in. */
  "DGND": "26",
  /** Physical pin 27: DVDD; power_in. */
  "DVDD": "27",
  /** Physical pin 28: CLK; input. */
  "CLK": "28",
}) {
  override schema = "Analog_DAC:THS5641AxPW";
  override referencePrefix = "U";
}

/**
 * 4-Channel DAC, 8bit, w/ Power Down, SOIC-16
 *
 * KiCad symbol: `Analog_DAC:TLV5627CD`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/tlv5627.pdf
 * Keywords: DAC 4CH 8bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV5627CD extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: ~{PD}; input. */
  "~{PD}": "2",
  /** Physical pin 3: ~{LDAC}; input. */
  "~{LDAC}": "3",
  /** Physical pin 4: DIN; input. */
  "DIN": "4",
  /** Physical pin 5: SCLK; input. */
  "SCLK": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: FS; input. */
  "FS": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: REFINCD; input. */
  "REFINCD": "10",
  /** Physical pin 11: OUTD; output. */
  "OUTD": "11",
  /** Physical pin 12: OUTC; output. */
  "OUTC": "12",
  /** Physical pin 13: OUTB; output. */
  "OUTB": "13",
  /** Physical pin 14: OUTA; output. */
  "OUTA": "14",
  /** Physical pin 15: REFINAB; input. */
  "REFINAB": "15",
  /** Physical pin 16: AVDD; power_in. */
  "AVDD": "16",
}) {
  override schema = "Analog_DAC:TLV5627CD";
  override referencePrefix = "U";
}

/**
 * 4-Channel DAC, 8bit, w/ Power Down, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:TLV5627CPW`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/tlv5627.pdf
 * Keywords: DAC 4CH 8bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV5627CPW extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: ~{PD}; input. */
  "~{PD}": "2",
  /** Physical pin 3: ~{LDAC}; input. */
  "~{LDAC}": "3",
  /** Physical pin 4: DIN; input. */
  "DIN": "4",
  /** Physical pin 5: SCLK; input. */
  "SCLK": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: FS; input. */
  "FS": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: REFINCD; input. */
  "REFINCD": "10",
  /** Physical pin 11: OUTD; output. */
  "OUTD": "11",
  /** Physical pin 12: OUTC; output. */
  "OUTC": "12",
  /** Physical pin 13: OUTB; output. */
  "OUTB": "13",
  /** Physical pin 14: OUTA; output. */
  "OUTA": "14",
  /** Physical pin 15: REFINAB; input. */
  "REFINAB": "15",
  /** Physical pin 16: AVDD; power_in. */
  "AVDD": "16",
}) {
  override schema = "Analog_DAC:TLV5627CPW";
  override referencePrefix = "U";
}

