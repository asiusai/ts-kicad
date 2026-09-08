// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 18-Bit, 2 MSPS/1 MSPS/500 kSPS, Differential SAR ADCs, 2.4V to 5.1V reference, 1.8V supply, 1.71 to 5.5V logic IO, 3x3mm LFCSP-10
 *
 * KiCad symbol: `Analog_ADC:AD40xxBCPZ`. Reference prefix: `U`.
 * Footprint filters: *LFCSP?WD*EP?3x3mm?P0.5mm?EP1.64x2.38mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad4003-4007-4011.pdf
 * Keywords: ADC 18-bit AD4003BCPZ AD4007BCPZ AD4011BCPZ.
 * Default footprint: Package_CSP:LFCSP-WD-10-1EP_3x3mm_P0.5mm_EP1.64x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD40xxBCPZ extends Component.withPins({
  /** Physical pin 1: REF; input. */
  "REF": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: CNV; input. */
  "CNV": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: SDI; input. */
  "SDI": "9",
  /** Physical pin 10: VIO; power_in. */
  "VIO": "10",
  /** Physical pin 11: PAD; power_in. */
  "PAD": "11",
}) {
  override schema = "Analog_ADC:AD40xxBCPZ";
  override referencePrefix = "U";
}

/**
 * 18-Bit, 2 MSPS/1 MSPS/500 kSPS, Differential SAR ADCs, 2.4V to 5.1V reference, 1.8V supply, 1.71 to 5.5V logic IO, MSOP-10
 *
 * KiCad symbol: `Analog_ADC:AD40xxBRMZ`. Reference prefix: `U`.
 * Footprint filters: *MSOP*3x3mm?P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad4003-4007-4011.pdf
 * Keywords: ADC 18-bit AD4003BRMZ AD4007BRMZ AD4011BRMZ.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD40xxBRMZ extends Component.withPins({
  /** Physical pin 1: REF; input. */
  "REF": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: CNV; input. */
  "CNV": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: SDI; input. */
  "SDI": "9",
  /** Physical pin 10: VIO; power_in. */
  "VIO": "10",
}) {
  override schema = "Analog_ADC:AD40xxBRMZ";
  override referencePrefix = "U";
}

/**
 * 12-Bit Successive-Approximation (SAR) ADC
 *
 * KiCad symbol: `Analog_ADC:AD574A`. Reference prefix: `U`.
 * Footprint filters: *DIP*W15.24mm*, *PLCC*, *LCC*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad574a.pdf
 * Keywords: analog.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD574A extends Component.withPins({
  /** Physical pin 1: V_{LOGIC}; power_in. */
  "V_{LOGIC}": "1",
  /** Physical pin 2: 12/~{8}; input. */
  "12/~{8}": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: A_{0}; input. */
  "A_{0}": "4",
  /** Physical pin 5: R/~{C}; input. */
  "R/~{C}": "5",
  /** Physical pin 6: CE; input. */
  "CE": "6",
  /** Physical pin 7: V_{CC}; power_in. */
  "V_{CC}": "7",
  /** Physical pin 8: REF_OUT; output. */
  "REF_OUT": "8",
  /** Physical pin 9: AC; passive. */
  "AC": "9",
  /** Physical pin 10: REF_IN; input. */
  "REF_IN": "10",
  /** Physical pin 11: V_{EE}; power_in. */
  "V_{EE}": "11",
  /** Physical pin 12: BIP_OFF; input. */
  "BIP_OFF": "12",
  /** Physical pin 13: 10V_{IN}; input. */
  "10V_{IN}": "13",
  /** Physical pin 14: 20V_{IN}; input. */
  "20V_{IN}": "14",
  /** Physical pin 15: DC; power_in. */
  "DC": "15",
  /** Physical pin 16: D0; output. */
  "D0": "16",
  /** Physical pin 17: DB1; output. */
  "DB1": "17",
  /** Physical pin 18: DB2; output. */
  "DB2": "18",
  /** Physical pin 19: DB3; output. */
  "DB3": "19",
  /** Physical pin 20: DB4; output. */
  "DB4": "20",
  /** Physical pin 21: DB5; output. */
  "DB5": "21",
  /** Physical pin 22: DB6; output. */
  "DB6": "22",
  /** Physical pin 23: DB7; output. */
  "DB7": "23",
  /** Physical pin 24: DB8; output. */
  "DB8": "24",
  /** Physical pin 25: DB9; output. */
  "DB9": "25",
  /** Physical pin 26: DB10; output. */
  "DB10": "26",
  /** Physical pin 27: DB11; output. */
  "DB11": "27",
  /** Physical pin 28: STS; output. */
  "STS": "28",
}) {
  override schema = "Analog_ADC:AD574A";
  override referencePrefix = "U";
}

/**
 * A/D Converter, 14-Bit, 40 MSPS/65 MSPS, TQFP-52
 *
 * KiCad symbol: `Analog_ADC:AD6644`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*10x10mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD6644.pdf
 * Keywords: ADC differential analog digital converter.
 * Default footprint: Package_QFP:TQFP-52-1EP_10x10mm_P0.65mm_EP6.5x6.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD6644 extends Component.withPins({
  /** Physical pin 1: DVCC; power_in. */
  "DVCC_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: ENCODE; input. */
  "ENCODE": "5",
  /** Physical pin 6: ~{ENCODE}; input. */
  "~{ENCODE}": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: AVCC; power_in. */
  "AVCC_8": "8",
  /** Physical pin 9: AVCC; passive. */
  "AVCC_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: AIN; input. */
  "AIN": "11",
  /** Physical pin 12: ~{AIN}; input. */
  "~{AIN}": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: AVCC; passive. */
  "AVCC_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: AVCC; passive. */
  "AVCC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: AVCC; passive. */
  "AVCC_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: C1; passive. */
  "C1": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: AVCC; passive. */
  "AVCC_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: C2; passive. */
  "C2": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: AVCC; passive. */
  "AVCC_26": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: AVCC; passive. */
  "AVCC_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: AVCC; passive. */
  "AVCC_30": "30",
  /** Physical pin 31: DNC; no_connect. */
  "DNC": "31",
  /** Physical pin 32: OVR; output. */
  "OVR": "32",
  /** Physical pin 33: DVCC; passive. */
  "DVCC_33": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: DMID; output. */
  "DMID": "35",
  /** Physical pin 36: D0; output. */
  "D0": "36",
  /** Physical pin 37: D1; output. */
  "D1": "37",
  /** Physical pin 38: D2; output. */
  "D2": "38",
  /** Physical pin 39: D3; output. */
  "D3": "39",
  /** Physical pin 40: D4; output. */
  "D4": "40",
  /** Physical pin 41: D5; output. */
  "D5": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: DVCC; passive. */
  "DVCC_43": "43",
  /** Physical pin 44: D6; output. */
  "D6": "44",
  /** Physical pin 45: D7; output. */
  "D7": "45",
  /** Physical pin 46: D8; output. */
  "D8": "46",
  /** Physical pin 47: D9; output. */
  "D9": "47",
  /** Physical pin 48: D10; output. */
  "D10": "48",
  /** Physical pin 49: D11; output. */
  "D11": "49",
  /** Physical pin 50: D12; output. */
  "D12": "50",
  /** Physical pin 51: D13; output. */
  "D13": "51",
  /** Physical pin 52: DRY; output. */
  "DRY": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
}) {
  override schema = "Analog_ADC:AD6644";
  override referencePrefix = "U";
}

/**
 * A/D Converter, 14-Bit, 80 MSPS/105 MSPS, TQFP-52
 *
 * KiCad symbol: `Analog_ADC:AD6645`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*10x10mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD6645.pdf
 * Keywords: ADC differential analog digital converter.
 * Default footprint: Package_QFP:TQFP-52-1EP_10x10mm_P0.65mm_EP6.5x6.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD6645 extends Component.withPins({
  /** Physical pin 1: DVCC; power_in. */
  "DVCC_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VREF; passive. */
  "VREF": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: ENCODE; input. */
  "ENCODE": "5",
  /** Physical pin 6: ~{ENCODE}; input. */
  "~{ENCODE}": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: AVCC; power_in. */
  "AVCC_8": "8",
  /** Physical pin 9: AVCC; passive. */
  "AVCC_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: AIN; input. */
  "AIN": "11",
  /** Physical pin 12: ~{AIN}; input. */
  "~{AIN}": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: AVCC; passive. */
  "AVCC_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: AVCC; passive. */
  "AVCC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: AVCC; passive. */
  "AVCC_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: C1; passive. */
  "C1": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: AVCC; passive. */
  "AVCC_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: C2; passive. */
  "C2": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: AVCC; passive. */
  "AVCC_26": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: AVCC; passive. */
  "AVCC_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: AVCC; passive. */
  "AVCC_30": "30",
  /** Physical pin 31: DNC; no_connect. */
  "DNC": "31",
  /** Physical pin 32: OVR; output. */
  "OVR": "32",
  /** Physical pin 33: DVCC; passive. */
  "DVCC_33": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: DMID; output. */
  "DMID": "35",
  /** Physical pin 36: D0; output. */
  "D0": "36",
  /** Physical pin 37: D1; output. */
  "D1": "37",
  /** Physical pin 38: D2; output. */
  "D2": "38",
  /** Physical pin 39: D3; output. */
  "D3": "39",
  /** Physical pin 40: D4; output. */
  "D4": "40",
  /** Physical pin 41: D5; output. */
  "D5": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: DVCC; passive. */
  "DVCC_43": "43",
  /** Physical pin 44: D6; output. */
  "D6": "44",
  /** Physical pin 45: D7; output. */
  "D7": "45",
  /** Physical pin 46: D8; output. */
  "D8": "46",
  /** Physical pin 47: D9; output. */
  "D9": "47",
  /** Physical pin 48: D10; output. */
  "D10": "48",
  /** Physical pin 49: D11; output. */
  "D11": "49",
  /** Physical pin 50: D12; output. */
  "D12": "50",
  /** Physical pin 51: D13; output. */
  "D13": "51",
  /** Physical pin 52: DRY; output. */
  "DRY": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
}) {
  override schema = "Analog_ADC:AD6645";
  override referencePrefix = "U";
}

/**
 * Single channel Analog to Digital Converter, 16-bit, differential input, 125Hz, SPI interface
 *
 * KiCad symbol: `Analog_ADC:AD7171`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*EP1.55x2.48mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7171.pdf
 * Keywords: sigma delta adc spi 1ch.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.55x2.48mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7171 extends Component.withPins({
  /** Physical pin 1: SCK; input. */
  "SCK": "1",
  /** Physical pin 2: DOUT/~{RDY}; tri_state. */
  "DOUT/~{RDY}": "2",
  /** Physical pin 3: AIN+; passive. */
  "AIN+": "3",
  /** Physical pin 4: AIN-; passive. */
  "AIN-": "4",
  /** Physical pin 5: REFIN+; passive. */
  "REFIN+": "5",
  /** Physical pin 6: REFIN-; passive. */
  "REFIN-": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: ~{PDRST}; input. */
  "~{PDRST}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: PAD; power_in. */
  "PAD": "11",
}) {
  override schema = "Analog_ADC:AD7171";
  override referencePrefix = "U";
}

/**
 * 8 channel, 1MSPS, 12-bit SAR ADC with Temperature Sensor, LFCSP-20
 *
 * KiCad symbol: `Analog_ADC:AD7298`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7298.pdf
 * Keywords: ADC, 3.3V, SPI.
 * Default footprint: Package_CSP:LFCSP-20-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7298 extends Component.withPins({
  /** Physical pin 1: VIN3; input. */
  "VIN3": "1",
  /** Physical pin 2: VIN4; input. */
  "VIN4": "2",
  /** Physical pin 3: VIN5; input. */
  "VIN5": "3",
  /** Physical pin 4: VIN6; input. */
  "VIN6": "4",
  /** Physical pin 5: VIN7; input. */
  "VIN7": "5",
  /** Physical pin 6: GND1; power_in. */
  "GND1": "6",
  /** Physical pin 7: VREF; passive. */
  "VREF": "7",
  /** Physical pin 8: DCAP; passive. */
  "DCAP": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: TSENSE_BUSY; output. */
  "TSENSE_BUSY": "12",
  /** Physical pin 13: DIN; input. */
  "DIN": "13",
  /** Physical pin 14: DOUT; output. */
  "DOUT": "14",
  /** Physical pin 15: SCLK; input. */
  "SCLK": "15",
  /** Physical pin 16: VDRIVE; power_in. */
  "VDRIVE": "16",
  /** Physical pin 17: ~{PD}/~{RST}; input. */
  "~{PD}/~{RST}": "17",
  /** Physical pin 18: VIN0; input. */
  "VIN0": "18",
  /** Physical pin 19: VIN1; input. */
  "VIN1": "19",
  /** Physical pin 20: VIN2; input. */
  "VIN2": "20",
  /** Physical pin 21: EPAD; power_in. */
  "EPAD": "21",
}) {
  override schema = "Analog_ADC:AD7298";
  override referencePrefix = "U";
}

/**
 * 2-Channel, software selectable input range ±10 V, ±5V, ±2.5V, 0 V to +10 V, true bipolar input, 12-Bit plus sign, 500 kSPS SAR ADC, TSSOP-14
 *
 * KiCad symbol: `Analog_ADC:AD7321`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7321.pdf
 * Keywords: Analog-Devices ADC bipolar 12-Bit SPI.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7321 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: REF_{IN/OUT}; power_in. */
  "REF_{IN/OUT}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: V_{IN}0; input. */
  "V_{IN}0": "7",
  /** Physical pin 8: V_{IN}1; input. */
  "V_{IN}1": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: V_{CC}; power_in. */
  "V_{CC}": "10",
  /** Physical pin 11: V_{DRIVE}; power_in. */
  "V_{DRIVE}": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: DGND; passive. */
  "DGND_13": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
}) {
  override schema = "Analog_ADC:AD7321";
  override referencePrefix = "U";
}

/**
 * 2-Channel, software selectable input range ±10 V, ±5V, ±2.5V, 0 V to +10 V, true bipolar input, 12-Bit plus sign, 1 MSPS SAR ADC, TSSOP-14
 *
 * KiCad symbol: `Analog_ADC:AD7322`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7322.pdf
 * Keywords: Analog-Devices ADC bipolar 12-Bit SPI.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7322 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: REF_{IN/OUT}; power_in. */
  "REF_{IN/OUT}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: V_{IN}0; input. */
  "V_{IN}0": "7",
  /** Physical pin 8: V_{IN}1; input. */
  "V_{IN}1": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: V_{CC}; power_in. */
  "V_{CC}": "10",
  /** Physical pin 11: V_{DRIVE}; power_in. */
  "V_{DRIVE}": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: DGND; passive. */
  "DGND_13": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
}) {
  override schema = "Analog_ADC:AD7322";
  override referencePrefix = "U";
}

/**
 * 4-Channel, software selectable input range ±10 V, ±5V, ±2.5V, 0 V to +10 V, true bipolar input, 12-Bit plus sign, 500 kSPS SAR ADC, TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:AD7323`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7323.pdf
 * Keywords: Analog-Devices ADC bipolar 12-Bit SPI.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7323 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: REF_{IN/OUT}; power_in. */
  "REF_{IN/OUT}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: V_{IN}0; input. */
  "V_{IN}0": "7",
  /** Physical pin 8: V_{IN}1; input. */
  "V_{IN}1": "8",
  /** Physical pin 9: V_{IN}3; input. */
  "V_{IN}3": "9",
  /** Physical pin 10: V_{IN}2; input. */
  "V_{IN}2": "10",
  /** Physical pin 11: V_{DD}; power_in. */
  "V_{DD}": "11",
  /** Physical pin 12: V_{CC}; power_in. */
  "V_{CC}": "12",
  /** Physical pin 13: V_{DRIVE}; power_in. */
  "V_{DRIVE}": "13",
  /** Physical pin 14: DOUT; output. */
  "DOUT": "14",
  /** Physical pin 15: DGND; passive. */
  "DGND_15": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
}) {
  override schema = "Analog_ADC:AD7323";
  override referencePrefix = "U";
}

/**
 * 4-Channel, software selectable input range ±10 V, ±5V, ±2.5V, 0 V to +10 V, true bipolar input, 12-Bit plus sign, 1 MSPS SAR ADC, TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:AD7324`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7324.pdf
 * Keywords: Analog-Devices ADC bipolar 12-Bit SPI.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7324 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: REF_{IN/OUT}; power_in. */
  "REF_{IN/OUT}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: V_{IN}0; input. */
  "V_{IN}0": "7",
  /** Physical pin 8: V_{IN}1; input. */
  "V_{IN}1": "8",
  /** Physical pin 9: V_{IN}3; input. */
  "V_{IN}3": "9",
  /** Physical pin 10: V_{IN}2; input. */
  "V_{IN}2": "10",
  /** Physical pin 11: V_{DD}; power_in. */
  "V_{DD}": "11",
  /** Physical pin 12: V_{CC}; power_in. */
  "V_{CC}": "12",
  /** Physical pin 13: V_{DRIVE}; power_in. */
  "V_{DRIVE}": "13",
  /** Physical pin 14: DOUT; output. */
  "DOUT": "14",
  /** Physical pin 15: DGND; passive. */
  "DGND_15": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
}) {
  override schema = "Analog_ADC:AD7324";
  override referencePrefix = "U";
}

/**
 * 8-Channel, software selectable input range ±10 V, ±5V, ±2.5V, 0 V to +10 V, true bipolar input, 12-Bit plus sign, 500 kSPS SAR ADC, TSSOP-20
 *
 * KiCad symbol: `Analog_ADC:AD7327`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7327.pdf
 * Keywords: Analog-Devices ADC bipolar 12-Bit SPI.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7327 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: REF_{IN/OUT}; power_in. */
  "REF_{IN/OUT}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: V_{IN}0; input. */
  "V_{IN}0": "7",
  /** Physical pin 8: V_{IN}1; input. */
  "V_{IN}1": "8",
  /** Physical pin 9: V_{IN}4; input. */
  "V_{IN}4": "9",
  /** Physical pin 10: V_{IN}5; input. */
  "V_{IN}5": "10",
  /** Physical pin 11: V_{IN}7; input. */
  "V_{IN}7": "11",
  /** Physical pin 12: V_{IN}6; input. */
  "V_{IN}6": "12",
  /** Physical pin 13: V_{IN}3; input. */
  "V_{IN}3": "13",
  /** Physical pin 14: V_{IN}2; input. */
  "V_{IN}2": "14",
  /** Physical pin 15: V_{DD}; power_in. */
  "V_{DD}": "15",
  /** Physical pin 16: V_{CC}; power_in. */
  "V_{CC}": "16",
  /** Physical pin 17: V_{DRIVE}; power_in. */
  "V_{DRIVE}": "17",
  /** Physical pin 18: DOUT; output. */
  "DOUT": "18",
  /** Physical pin 19: DGND; passive. */
  "DGND_19": "19",
  /** Physical pin 20: SCLK; input. */
  "SCLK": "20",
}) {
  override schema = "Analog_ADC:AD7327";
  override referencePrefix = "U";
}

/**
 * 8-Channel, software selectable input range ±10 V, ±5V, ±2.5V, 0 V to +10 V, true bipolar input, 12-Bit plus sign, 1 MSPS SAR ADC, TSSOP-20
 *
 * KiCad symbol: `Analog_ADC:AD7328`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7328.pdf
 * Keywords: Analog-Devices ADC bipolar 12-Bit SPI.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7328 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: REF_{IN/OUT}; power_in. */
  "REF_{IN/OUT}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: V_{IN}0; input. */
  "V_{IN}0": "7",
  /** Physical pin 8: V_{IN}1; input. */
  "V_{IN}1": "8",
  /** Physical pin 9: V_{IN}4; input. */
  "V_{IN}4": "9",
  /** Physical pin 10: V_{IN}5; input. */
  "V_{IN}5": "10",
  /** Physical pin 11: V_{IN}7; input. */
  "V_{IN}7": "11",
  /** Physical pin 12: V_{IN}6; input. */
  "V_{IN}6": "12",
  /** Physical pin 13: V_{IN}3; input. */
  "V_{IN}3": "13",
  /** Physical pin 14: V_{IN}2; input. */
  "V_{IN}2": "14",
  /** Physical pin 15: V_{DD}; power_in. */
  "V_{DD}": "15",
  /** Physical pin 16: V_{CC}; power_in. */
  "V_{CC}": "16",
  /** Physical pin 17: V_{DRIVE}; power_in. */
  "V_{DRIVE}": "17",
  /** Physical pin 18: DOUT; output. */
  "DOUT": "18",
  /** Physical pin 19: DGND; passive. */
  "DGND_19": "19",
  /** Physical pin 20: SCLK; input. */
  "SCLK": "20",
}) {
  override schema = "Analog_ADC:AD7328";
  override referencePrefix = "U";
}

/**
 * 8-Channel, software selectable input range ±10 V, ±5V, ±2.5V, 0 V to +10 V, true bipolar input, 12-Bit plus sign, 1 MSPS SAR ADC, TSSOP-24
 *
 * KiCad symbol: `Analog_ADC:AD7329`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7329.pdf
 * Keywords: Analog-Devices ADC bipolar 12-Bit SPI.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7329 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: DGND; power_in. */
  "DGND_3": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: REF_{IN/OUT}; power_in. */
  "REF_{IN/OUT}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: ADC_{IN}+; power_in. */
  "ADC_{IN}+": "7",
  /** Physical pin 8: MUX_{OUT}+; output. */
  "MUX_{OUT}+": "8",
  /** Physical pin 9: V_{IN}0; input. */
  "V_{IN}0": "9",
  /** Physical pin 10: V_{IN}1; input. */
  "V_{IN}1": "10",
  /** Physical pin 11: V_{IN}4; input. */
  "V_{IN}4": "11",
  /** Physical pin 12: V_{IN}5; input. */
  "V_{IN}5": "12",
  /** Physical pin 13: V_{IN}7; input. */
  "V_{IN}7": "13",
  /** Physical pin 14: V_{IN}6; input. */
  "V_{IN}6": "14",
  /** Physical pin 15: V_{IN}3; input. */
  "V_{IN}3": "15",
  /** Physical pin 16: V_{IN}2; input. */
  "V_{IN}2": "16",
  /** Physical pin 17: MUX_{OUT}-; output. */
  "MUX_{OUT}-": "17",
  /** Physical pin 18: ADC_{IN}-; power_in. */
  "ADC_{IN}-": "18",
  /** Physical pin 19: V_{DD}; power_in. */
  "V_{DD}": "19",
  /** Physical pin 20: V_{CC}; power_in. */
  "V_{CC}": "20",
  /** Physical pin 21: V_{DRIVE}; power_in. */
  "V_{DRIVE}": "21",
  /** Physical pin 22: DOUT; output. */
  "DOUT": "22",
  /** Physical pin 23: DGND; passive. */
  "DGND_23": "23",
  /** Physical pin 24: SCLK; input. */
  "SCLK": "24",
}) {
  override schema = "Analog_ADC:AD7329";
  override referencePrefix = "U";
}

/**
 * Differential Input, Quad, External Reference Simultaneous Sampling, 16-bit resolution, SAR ADC, SNR = 92 dB at VREF=3.3V, UQFN-24 (LFCSP-24)
 *
 * KiCad symbol: `Analog_ADC:AD7380-4`. Reference prefix: `U`.
 * Footprint filters: LFCSP*4x4mm*P0.5mm*EP0.5x0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7380-4.pdf
 * Keywords: Analog-Devices SPI.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP0.5x0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7380_4 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_{LOGIC}; power_in. */
  "V_{LOGIC}": "2",
  /** Physical pin 3: REGCAP; passive. */
  "REGCAP": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: A_{IN}D-; input. */
  "A_{IN}D-": "6",
  /** Physical pin 7: A_{IN}D+; input. */
  "A_{IN}D+": "7",
  /** Physical pin 8: A_{IN}C-; input. */
  "A_{IN}C-": "8",
  /** Physical pin 9: A_{IN}C+; input. */
  "A_{IN}C+": "9",
  /** Physical pin 10: A_{IN}B-; input. */
  "A_{IN}B-": "10",
  /** Physical pin 11: A_{IN}B+; input. */
  "A_{IN}B+": "11",
  /** Physical pin 12: A_{IN}A-; input. */
  "A_{IN}A-": "12",
  /** Physical pin 13: A_{IN}A+; input. */
  "A_{IN}A+": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: REFIN; passive. */
  "REFIN": "17",
  /** Physical pin 18: ~{CS}; input. */
  "~{CS}": "18",
  /** Physical pin 19: SDOA; output. */
  "SDOA": "19",
  /** Physical pin 20: SDOB; output. */
  "SDOB": "20",
  /** Physical pin 21: SDI; input. */
  "SDI": "21",
  /** Physical pin 22: SCLK; input. */
  "SCLK": "22",
  /** Physical pin 23: SDOC; output. */
  "SDOC": "23",
  /** Physical pin 24: SDOD/~{ALERT}; output. */
  "SDOD/~{ALERT}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Analog_ADC:AD7380-4";
  override referencePrefix = "U";
}

/**
 * Single-Ended Input, Quad, Simultaneous Sampling, 16-bit resolution, SAR ADC, SNR = 84.7 dB at VREF = 3.3V, UQFN-24 (LFCSP-24)
 *
 * KiCad symbol: `Analog_ADC:AD7386-4`. Reference prefix: `U`.
 * Footprint filters: LFCSP*4x4mm*P0.5mm*EP0.5x0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7386-4-7387-4-7388-4.pdf
 * Keywords: Analog-Devices SPI.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP0.5x0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7386_4 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_{LOGIC}; power_in. */
  "V_{LOGIC}": "2",
  /** Physical pin 3: REGCAP; passive. */
  "REGCAP": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: A_{IN}D1; input. */
  "A_{IN}D1": "6",
  /** Physical pin 7: A_{IN}D0; input. */
  "A_{IN}D0": "7",
  /** Physical pin 8: A_{IN}C1; input. */
  "A_{IN}C1": "8",
  /** Physical pin 9: A_{IN}C0; input. */
  "A_{IN}C0": "9",
  /** Physical pin 10: A_{IN}B1; input. */
  "A_{IN}B1": "10",
  /** Physical pin 11: A_{IN}B0; input. */
  "A_{IN}B0": "11",
  /** Physical pin 12: A_{IN}A1; input. */
  "A_{IN}A1": "12",
  /** Physical pin 13: A_{IN}A0; input. */
  "A_{IN}A0": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: REFCAP; passive. */
  "REFCAP": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: REFIO; passive. */
  "REFIO": "17",
  /** Physical pin 18: ~{CS}; input. */
  "~{CS}": "18",
  /** Physical pin 19: SDOA; output. */
  "SDOA": "19",
  /** Physical pin 20: SDOB; output. */
  "SDOB": "20",
  /** Physical pin 21: SDI; input. */
  "SDI": "21",
  /** Physical pin 22: SCLK; input. */
  "SCLK": "22",
  /** Physical pin 23: SDOC; output. */
  "SDOC": "23",
  /** Physical pin 24: SDOD/~{ALERT}; output. */
  "SDOD/~{ALERT}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Analog_ADC:AD7386-4";
  override referencePrefix = "U";
}

/**
 * Single-Ended Input, Quad, Simultaneous Sampling, 14-bit resolution, SAR ADC, SNR = 82.4 dB at VREF = 3.3V, UQFN-24 (LFCSP-24)
 *
 * KiCad symbol: `Analog_ADC:AD7387-4`. Reference prefix: `U`.
 * Footprint filters: LFCSP*4x4mm*P0.5mm*EP0.5x0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7386-4-7387-4-7388-4.pdf
 * Keywords: Analog-Devices SPI.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP0.5x0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7387_4 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_{LOGIC}; power_in. */
  "V_{LOGIC}": "2",
  /** Physical pin 3: REGCAP; passive. */
  "REGCAP": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: A_{IN}D1; input. */
  "A_{IN}D1": "6",
  /** Physical pin 7: A_{IN}D0; input. */
  "A_{IN}D0": "7",
  /** Physical pin 8: A_{IN}C1; input. */
  "A_{IN}C1": "8",
  /** Physical pin 9: A_{IN}C0; input. */
  "A_{IN}C0": "9",
  /** Physical pin 10: A_{IN}B1; input. */
  "A_{IN}B1": "10",
  /** Physical pin 11: A_{IN}B0; input. */
  "A_{IN}B0": "11",
  /** Physical pin 12: A_{IN}A1; input. */
  "A_{IN}A1": "12",
  /** Physical pin 13: A_{IN}A0; input. */
  "A_{IN}A0": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: REFCAP; passive. */
  "REFCAP": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: REFIO; passive. */
  "REFIO": "17",
  /** Physical pin 18: ~{CS}; input. */
  "~{CS}": "18",
  /** Physical pin 19: SDOA; output. */
  "SDOA": "19",
  /** Physical pin 20: SDOB; output. */
  "SDOB": "20",
  /** Physical pin 21: SDI; input. */
  "SDI": "21",
  /** Physical pin 22: SCLK; input. */
  "SCLK": "22",
  /** Physical pin 23: SDOC; output. */
  "SDOC": "23",
  /** Physical pin 24: SDOD/~{ALERT}; output. */
  "SDOD/~{ALERT}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Analog_ADC:AD7387-4";
  override referencePrefix = "U";
}

/**
 * Single-Ended Input, Quad, Simultaneous Sampling, 12-bit resolution, SAR ADC, SNR = 73.7 dB at VREF = 3.3V, UQFN-24 (LFCSP-24)
 *
 * KiCad symbol: `Analog_ADC:AD7388-4`. Reference prefix: `U`.
 * Footprint filters: LFCSP*4x4mm*P0.5mm*EP0.5x0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7386-4-7387-4-7388-4.pdf
 * Keywords: Analog-Devices SPI.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP0.5x0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7388_4 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_{LOGIC}; power_in. */
  "V_{LOGIC}": "2",
  /** Physical pin 3: REGCAP; passive. */
  "REGCAP": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: A_{IN}D1; input. */
  "A_{IN}D1": "6",
  /** Physical pin 7: A_{IN}D0; input. */
  "A_{IN}D0": "7",
  /** Physical pin 8: A_{IN}C1; input. */
  "A_{IN}C1": "8",
  /** Physical pin 9: A_{IN}C0; input. */
  "A_{IN}C0": "9",
  /** Physical pin 10: A_{IN}B1; input. */
  "A_{IN}B1": "10",
  /** Physical pin 11: A_{IN}B0; input. */
  "A_{IN}B0": "11",
  /** Physical pin 12: A_{IN}A1; input. */
  "A_{IN}A1": "12",
  /** Physical pin 13: A_{IN}A0; input. */
  "A_{IN}A0": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: REFCAP; passive. */
  "REFCAP": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: REFIO; passive. */
  "REFIO": "17",
  /** Physical pin 18: ~{CS}; input. */
  "~{CS}": "18",
  /** Physical pin 19: SDOA; output. */
  "SDOA": "19",
  /** Physical pin 20: SDOB; output. */
  "SDOB": "20",
  /** Physical pin 21: SDI; input. */
  "SDI": "21",
  /** Physical pin 22: SCLK; input. */
  "SCLK": "22",
  /** Physical pin 23: SDOC; output. */
  "SDOC": "23",
  /** Physical pin 24: SDOD/~{ALERT}; output. */
  "SDOD/~{ALERT}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Analog_ADC:AD7388-4";
  override referencePrefix = "U";
}

/**
 * 8-Channel DAS with 16-Bit, Bipolar Input, Simultaneous Sampling ADC, LQFP-64
 *
 * KiCad symbol: `Analog_ADC:AD7606`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7606_7606-6_7606-4.pdf
 * Keywords: 16bit DAS ADC 8channel 200KSPS.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7606 extends Component.withPins({
  /** Physical pin 1: AVCC; power_in. */
  "AVCC_1": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND_2": "2",
  /** Physical pin 3: OS0; input. */
  "OS0": "3",
  /** Physical pin 4: OS1; input. */
  "OS1": "4",
  /** Physical pin 5: OS2; input. */
  "OS2": "5",
  /** Physical pin 6: ~{PAR}/SER/BYTE_SEL; input. */
  "~{PAR}/SER/BYTE_SEL": "6",
  /** Physical pin 7: ~{STBY}; input. */
  "~{STBY}": "7",
  /** Physical pin 8: RANGE; input. */
  "RANGE": "8",
  /** Physical pin 9: CONVST_A; input. */
  "CONVST_A": "9",
  /** Physical pin 10: CONVST_B; input. */
  "CONVST_B": "10",
  /** Physical pin 11: RESET; input. */
  "RESET": "11",
  /** Physical pin 12: ~{RD}/SCLK; input. */
  "~{RD}/SCLK": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: BUSY; output. */
  "BUSY": "14",
  /** Physical pin 15: FRSTDATA; output. */
  "FRSTDATA": "15",
  /** Physical pin 16: DB0; output. */
  "DB0": "16",
  /** Physical pin 17: DB1; output. */
  "DB1": "17",
  /** Physical pin 18: DB2; output. */
  "DB2": "18",
  /** Physical pin 19: DB3; output. */
  "DB3": "19",
  /** Physical pin 20: DB4; output. */
  "DB4": "20",
  /** Physical pin 21: DB5; output. */
  "DB5": "21",
  /** Physical pin 22: DB6; output. */
  "DB6": "22",
  /** Physical pin 23: Vdrive; power_in. */
  "Vdrive": "23",
  /** Physical pin 24: DB7/DOUT_A; output. */
  "DB7/DOUT_A": "24",
  /** Physical pin 25: DB8/DOUT_B; output. */
  "DB8/DOUT_B": "25",
  /** Physical pin 26: AGND; passive. */
  "AGND_26": "26",
  /** Physical pin 27: DB9; output. */
  "DB9": "27",
  /** Physical pin 28: DB10; output. */
  "DB10": "28",
  /** Physical pin 29: DB11; output. */
  "DB11": "29",
  /** Physical pin 30: DB12; output. */
  "DB12": "30",
  /** Physical pin 31: DB13; output. */
  "DB13": "31",
  /** Physical pin 32: DB14/HBEN; bidirectional. */
  "DB14/HBEN": "32",
  /** Physical pin 33: DB15/BYTE_SEL; bidirectional. */
  "DB15/BYTE_SEL": "33",
  /** Physical pin 34: REF_SELECT; input. */
  "REF_SELECT": "34",
  /** Physical pin 35: AGND; passive. */
  "AGND_35": "35",
  /** Physical pin 36: REGCAP; passive. */
  "REGCAP_36": "36",
  /** Physical pin 37: AVCC; power_in. */
  "AVCC_37": "37",
  /** Physical pin 38: AVCC; power_in. */
  "AVCC_38": "38",
  /** Physical pin 39: REGCAP; passive. */
  "REGCAP_39": "39",
  /** Physical pin 40: AGND; passive. */
  "AGND_40": "40",
  /** Physical pin 41: AGND; passive. */
  "AGND_41": "41",
  /** Physical pin 42: REFIN/REFOUT; passive. */
  "REFIN/REFOUT": "42",
  /** Physical pin 43: REFGND; power_in. */
  "REFGND_43": "43",
  /** Physical pin 44: REFCAPA; passive. */
  "REFCAPA": "44",
  /** Physical pin 45: REFCAPB; passive. */
  "REFCAPB": "45",
  /** Physical pin 46: REFGND; passive. */
  "REFGND_46": "46",
  /** Physical pin 47: AGND; passive. */
  "AGND_47": "47",
  /** Physical pin 48: AVCC; power_in. */
  "AVCC_48": "48",
  /** Physical pin 49: V1; input. */
  "V1": "49",
  /** Physical pin 50: V1GND; input. */
  "V1GND": "50",
  /** Physical pin 51: V2; input. */
  "V2": "51",
  /** Physical pin 52: V2GND; input. */
  "V2GND": "52",
  /** Physical pin 53: V3; input. */
  "V3": "53",
  /** Physical pin 54: V3GND; input. */
  "V3GND": "54",
  /** Physical pin 55: V4; input. */
  "V4": "55",
  /** Physical pin 56: V4GND; input. */
  "V4GND": "56",
  /** Physical pin 57: V5; input. */
  "V5": "57",
  /** Physical pin 58: V5GND; input. */
  "V5GND": "58",
  /** Physical pin 59: V6; input. */
  "V6": "59",
  /** Physical pin 60: V6GND; input. */
  "V6GND": "60",
  /** Physical pin 61: V7; input. */
  "V7": "61",
  /** Physical pin 62: V7GND; input. */
  "V7GND": "62",
  /** Physical pin 63: V8; input. */
  "V8": "63",
  /** Physical pin 64: V8GND; input. */
  "V8GND": "64",
}) {
  override schema = "Analog_ADC:AD7606";
  override referencePrefix = "U";
}

/**
 * 4-Channel DAS with 16-Bit, Bipolar Input, Simultaneous Sampling ADC, LQFP-64
 *
 * KiCad symbol: `Analog_ADC:AD7606-4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7606_7606-6_7606-4.pdf
 * Keywords: 16bit DAS ADC 4channel 200KSPS.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7606_4 extends Component.withPins({
  /** Physical pin 1: AVCC; power_in. */
  "AVCC_1": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND_2": "2",
  /** Physical pin 3: OS0; input. */
  "OS0": "3",
  /** Physical pin 4: OS1; input. */
  "OS1": "4",
  /** Physical pin 5: OS2; input. */
  "OS2": "5",
  /** Physical pin 6: ~{PAR}/SER/BYTE_SEL; input. */
  "~{PAR}/SER/BYTE_SEL": "6",
  /** Physical pin 7: ~{STBY}; input. */
  "~{STBY}": "7",
  /** Physical pin 8: RANGE; input. */
  "RANGE": "8",
  /** Physical pin 9: CONVST_A; input. */
  "CONVST_A": "9",
  /** Physical pin 10: CONVST_B; input. */
  "CONVST_B": "10",
  /** Physical pin 11: RESET; input. */
  "RESET": "11",
  /** Physical pin 12: ~{RD}/SCLK; input. */
  "~{RD}/SCLK": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: BUSY; output. */
  "BUSY": "14",
  /** Physical pin 15: FRSTDATA; output. */
  "FRSTDATA": "15",
  /** Physical pin 16: DB0; output. */
  "DB0": "16",
  /** Physical pin 17: DB1; output. */
  "DB1": "17",
  /** Physical pin 18: DB2; output. */
  "DB2": "18",
  /** Physical pin 19: DB3; output. */
  "DB3": "19",
  /** Physical pin 20: DB4; output. */
  "DB4": "20",
  /** Physical pin 21: DB5; output. */
  "DB5": "21",
  /** Physical pin 22: DB6; output. */
  "DB6": "22",
  /** Physical pin 23: Vdrive; power_in. */
  "Vdrive": "23",
  /** Physical pin 24: DB7/DOUT_A; output. */
  "DB7/DOUT_A": "24",
  /** Physical pin 25: DB8/DOUT_B; output. */
  "DB8/DOUT_B": "25",
  /** Physical pin 26: AGND; passive. */
  "AGND_26": "26",
  /** Physical pin 27: DB9; output. */
  "DB9": "27",
  /** Physical pin 28: DB10; output. */
  "DB10": "28",
  /** Physical pin 29: DB11; output. */
  "DB11": "29",
  /** Physical pin 30: DB12; output. */
  "DB12": "30",
  /** Physical pin 31: DB13; output. */
  "DB13": "31",
  /** Physical pin 32: DB14/HBEN; bidirectional. */
  "DB14/HBEN": "32",
  /** Physical pin 33: DB15/BYTE_SEL; bidirectional. */
  "DB15/BYTE_SEL": "33",
  /** Physical pin 34: REF_SELECT; input. */
  "REF_SELECT": "34",
  /** Physical pin 35: AGND; passive. */
  "AGND_35": "35",
  /** Physical pin 36: REGCAP; passive. */
  "REGCAP_36": "36",
  /** Physical pin 37: AVCC; power_in. */
  "AVCC_37": "37",
  /** Physical pin 38: AVCC; power_in. */
  "AVCC_38": "38",
  /** Physical pin 39: REGCAP; passive. */
  "REGCAP_39": "39",
  /** Physical pin 40: AGND; passive. */
  "AGND_40": "40",
  /** Physical pin 41: AGND; passive. */
  "AGND_41": "41",
  /** Physical pin 42: REFIN/REFOUT; passive. */
  "REFIN/REFOUT": "42",
  /** Physical pin 43: REFGND; power_in. */
  "REFGND_43": "43",
  /** Physical pin 44: REFCAPA; passive. */
  "REFCAPA": "44",
  /** Physical pin 45: REFCAPB; passive. */
  "REFCAPB": "45",
  /** Physical pin 46: REFGND; passive. */
  "REFGND_46": "46",
  /** Physical pin 47: AGND; passive. */
  "AGND_47": "47",
  /** Physical pin 48: AVCC; power_in. */
  "AVCC_48": "48",
  /** Physical pin 49: V1; input. */
  "V1": "49",
  /** Physical pin 50: V1GND; input. */
  "V1GND": "50",
  /** Physical pin 51: V2; input. */
  "V2": "51",
  /** Physical pin 52: V2GND; input. */
  "V2GND": "52",
  /** Physical pin 53: AGND; passive. */
  "AGND_53": "53",
  /** Physical pin 54: AGND; passive. */
  "AGND_54": "54",
  /** Physical pin 55: AGND; passive. */
  "AGND_55": "55",
  /** Physical pin 56: AGND; passive. */
  "AGND_56": "56",
  /** Physical pin 57: V3; input. */
  "V3": "57",
  /** Physical pin 58: V3GND; input. */
  "V3GND": "58",
  /** Physical pin 59: V4; input. */
  "V4": "59",
  /** Physical pin 60: V4GND; input. */
  "V4GND": "60",
  /** Physical pin 61: AGND; passive. */
  "AGND_61": "61",
  /** Physical pin 62: AGND; passive. */
  "AGND_62": "62",
  /** Physical pin 63: AGND; passive. */
  "AGND_63": "63",
  /** Physical pin 64: AGND; passive. */
  "AGND_64": "64",
}) {
  override schema = "Analog_ADC:AD7606-4";
  override referencePrefix = "U";
}

/**
 * 6-Channel DAS with 16-Bit, Bipolar Input, Simultaneous Sampling ADC, LQFP-64
 *
 * KiCad symbol: `Analog_ADC:AD7606-6`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7606_7606-6_7606-4.pdf
 * Keywords: 16bit DAS ADC 6channel 200KSPS.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7606_6 extends Component.withPins({
  /** Physical pin 1: AVCC; power_in. */
  "AVCC_1": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND_2": "2",
  /** Physical pin 3: OS0; input. */
  "OS0": "3",
  /** Physical pin 4: OS1; input. */
  "OS1": "4",
  /** Physical pin 5: OS2; input. */
  "OS2": "5",
  /** Physical pin 6: ~{PAR}/SER/BYTE_SEL; input. */
  "~{PAR}/SER/BYTE_SEL": "6",
  /** Physical pin 7: ~{STBY}; input. */
  "~{STBY}": "7",
  /** Physical pin 8: RANGE; input. */
  "RANGE": "8",
  /** Physical pin 9: CONVST_A; input. */
  "CONVST_A": "9",
  /** Physical pin 10: CONVST_B; input. */
  "CONVST_B": "10",
  /** Physical pin 11: RESET; input. */
  "RESET": "11",
  /** Physical pin 12: ~{RD}/SCLK; input. */
  "~{RD}/SCLK": "12",
  /** Physical pin 13: ~{CS}; input. */
  "~{CS}": "13",
  /** Physical pin 14: BUSY; output. */
  "BUSY": "14",
  /** Physical pin 15: FRSTDATA; output. */
  "FRSTDATA": "15",
  /** Physical pin 16: DB0; output. */
  "DB0": "16",
  /** Physical pin 17: DB1; output. */
  "DB1": "17",
  /** Physical pin 18: DB2; output. */
  "DB2": "18",
  /** Physical pin 19: DB3; output. */
  "DB3": "19",
  /** Physical pin 20: DB4; output. */
  "DB4": "20",
  /** Physical pin 21: DB5; output. */
  "DB5": "21",
  /** Physical pin 22: DB6; output. */
  "DB6": "22",
  /** Physical pin 23: Vdrive; power_in. */
  "Vdrive": "23",
  /** Physical pin 24: DB7/DOUT_A; output. */
  "DB7/DOUT_A": "24",
  /** Physical pin 25: DB8/DOUT_B; output. */
  "DB8/DOUT_B": "25",
  /** Physical pin 26: AGND; passive. */
  "AGND_26": "26",
  /** Physical pin 27: DB9; output. */
  "DB9": "27",
  /** Physical pin 28: DB10; output. */
  "DB10": "28",
  /** Physical pin 29: DB11; output. */
  "DB11": "29",
  /** Physical pin 30: DB12; output. */
  "DB12": "30",
  /** Physical pin 31: DB13; output. */
  "DB13": "31",
  /** Physical pin 32: DB14/HBEN; bidirectional. */
  "DB14/HBEN": "32",
  /** Physical pin 33: DB15/BYTE_SEL; bidirectional. */
  "DB15/BYTE_SEL": "33",
  /** Physical pin 34: REF_SELECT; input. */
  "REF_SELECT": "34",
  /** Physical pin 35: AGND; passive. */
  "AGND_35": "35",
  /** Physical pin 36: REGCAP; passive. */
  "REGCAP_36": "36",
  /** Physical pin 37: AVCC; power_in. */
  "AVCC_37": "37",
  /** Physical pin 38: AVCC; power_in. */
  "AVCC_38": "38",
  /** Physical pin 39: REGCAP; passive. */
  "REGCAP_39": "39",
  /** Physical pin 40: AGND; passive. */
  "AGND_40": "40",
  /** Physical pin 41: AGND; passive. */
  "AGND_41": "41",
  /** Physical pin 42: REFIN/REFOUT; passive. */
  "REFIN/REFOUT": "42",
  /** Physical pin 43: REFGND; power_in. */
  "REFGND_43": "43",
  /** Physical pin 44: REFCAPA; passive. */
  "REFCAPA": "44",
  /** Physical pin 45: REFCAPB; passive. */
  "REFCAPB": "45",
  /** Physical pin 46: REFGND; passive. */
  "REFGND_46": "46",
  /** Physical pin 47: AGND; passive. */
  "AGND_47": "47",
  /** Physical pin 48: AVCC; power_in. */
  "AVCC_48": "48",
  /** Physical pin 49: V1; input. */
  "V1": "49",
  /** Physical pin 50: V1GND; input. */
  "V1GND": "50",
  /** Physical pin 51: V2; input. */
  "V2": "51",
  /** Physical pin 52: V2GND; input. */
  "V2GND": "52",
  /** Physical pin 53: V3; input. */
  "V3": "53",
  /** Physical pin 54: V3GND; input. */
  "V3GND": "54",
  /** Physical pin 55: AGND; passive. */
  "AGND_55": "55",
  /** Physical pin 56: AGND; passive. */
  "AGND_56": "56",
  /** Physical pin 57: V4; input. */
  "V4": "57",
  /** Physical pin 58: V4GND; input. */
  "V4GND": "58",
  /** Physical pin 59: V5; input. */
  "V5": "59",
  /** Physical pin 60: V5GND; input. */
  "V5GND": "60",
  /** Physical pin 61: V6; input. */
  "V6": "61",
  /** Physical pin 62: V6GND; input. */
  "V6GND": "62",
  /** Physical pin 63: AGND; passive. */
  "AGND_63": "63",
  /** Physical pin 64: AGND; passive. */
  "AGND_64": "64",
}) {
  override schema = "Analog_ADC:AD7606-6";
  override referencePrefix = "U";
}

/**
 * 16-Channel DAS with 16-Bit, Bipolar Input, Dual Simultaneous Sampling ADC, 2x1MSPS ADC, Serial and parallel IO, LQFP-80
 *
 * KiCad symbol: `Analog_ADC:AD7616`. Reference prefix: `U`.
 * Footprint filters: *LQFP*14x14mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7616.pdf
 * Keywords: 16bit DAS ADC 16channel 1MSPS.
 * Default footprint: Package_QFP:LQFP-80_14x14mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7616 extends Component.withPins({
  /** Physical pin 1: V4BGND; input. */
  "V4BGND": "1",
  /** Physical pin 2: V4B; input. */
  "V4B": "2",
  /** Physical pin 3: V5BGND; input. */
  "V5BGND": "3",
  /** Physical pin 4: V5B; input. */
  "V5B": "4",
  /** Physical pin 5: AGND; power_in. */
  "AGND_5": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC_6": "6",
  /** Physical pin 7: V6B; input. */
  "V6B": "7",
  /** Physical pin 8: V6BGND; input. */
  "V6BGND": "8",
  /** Physical pin 9: V7B; input. */
  "V7B": "9",
  /** Physical pin 10: V7BGND; input. */
  "V7BGND": "10",
  /** Physical pin 11: V7AGND; input. */
  "V7AGND": "11",
  /** Physical pin 12: V7A; input. */
  "V7A": "12",
  /** Physical pin 13: V6AGND; input. */
  "V6AGND": "13",
  /** Physical pin 14: V6A; input. */
  "V6A": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC_15": "15",
  /** Physical pin 16: AGND; passive. */
  "AGND_16": "16",
  /** Physical pin 17: V5A; input. */
  "V5A": "17",
  /** Physical pin 18: V5AGND; input. */
  "V5AGND": "18",
  /** Physical pin 19: V4A; input. */
  "V4A": "19",
  /** Physical pin 20: V4AGND; input. */
  "V4AGND": "20",
  /** Physical pin 21: V3AGND; input. */
  "V3AGND": "21",
  /** Physical pin 22: V3A; input. */
  "V3A": "22",
  /** Physical pin 23: V2AGND; input. */
  "V2AGND": "23",
  /** Physical pin 24: V2A; input. */
  "V2A": "24",
  /** Physical pin 25: V1AGND; input. */
  "V1AGND": "25",
  /** Physical pin 26: V1A; input. */
  "V1A": "26",
  /** Physical pin 27: V0AGND; input. */
  "V0AGND": "27",
  /** Physical pin 28: V0A; input. */
  "V0A": "28",
  /** Physical pin 29: AGND; passive. */
  "AGND_29": "29",
  /** Physical pin 30: VCC; power_in. */
  "VCC_30": "30",
  /** Physical pin 31: REFCAP; passive. */
  "REFCAP": "31",
  /** Physical pin 32: REFGND; power_in. */
  "REFGND": "32",
  /** Physical pin 33: REFINOUT; input. */
  "REFINOUT": "33",
  /** Physical pin 34: REFINOUTGND; power_in. */
  "REFINOUTGND": "34",
  /** Physical pin 35: REFSEL; input. */
  "REFSEL": "35",
  /** Physical pin 36: ~{RESET}; input. */
  "~{RESET}": "36",
  /** Physical pin 37: SEQEN; input. */
  "SEQEN": "37",
  /** Physical pin 38: HW_RNGSEL1; input. */
  "HW_RNGSEL1": "38",
  /** Physical pin 39: HW_RNGSEL0; input. */
  "HW_RNGSEL0": "39",
  /** Physical pin 40: SER/~{PAR}; input. */
  "SER/~{PAR}": "40",
  /** Physical pin 41: DB0; bidirectional. */
  "DB0": "41",
  /** Physical pin 42: DB1; bidirectional. */
  "DB1": "42",
  /** Physical pin 43: DB2; bidirectional. */
  "DB2": "43",
  /** Physical pin 44: DB3; bidirectional. */
  "DB3": "44",
  /** Physical pin 45: DB4/~{SER1W}; bidirectional. */
  "DB4/~{SER1W}": "45",
  /** Physical pin 46: DB5/CRCEN; bidirectional. */
  "DB5/CRCEN": "46",
  /** Physical pin 47: DB6; bidirectional. */
  "DB6": "47",
  /** Physical pin 48: DB7; bidirectional. */
  "DB7": "48",
  /** Physical pin 49: VDRIVE; power_in. */
  "VDRIVE": "49",
  /** Physical pin 50: DGND; power_in. */
  "DGND": "50",
  /** Physical pin 51: REGGNDD; power_in. */
  "REGGNDD": "51",
  /** Physical pin 52: REGCAPD; passive. */
  "REGCAPD": "52",
  /** Physical pin 53: DB8; bidirectional. */
  "DB8": "53",
  /** Physical pin 54: DB9; bidirectional. */
  "DB9": "54",
  /** Physical pin 55: DB10/SDI; bidirectional. */
  "DB10/SDI": "55",
  /** Physical pin 56: DB11/SDOB; bidirectional. */
  "DB11/SDOB": "56",
  /** Physical pin 57: DB12/SDOA; bidirectional. */
  "DB12/SDOA": "57",
  /** Physical pin 58: DB13/OS0; bidirectional. */
  "DB13/OS0": "58",
  /** Physical pin 59: DB14/OS1; bidirectional. */
  "DB14/OS1": "59",
  /** Physical pin 60: DB15/OS2; bidirectional. */
  "DB15/OS2": "60",
  /** Physical pin 61: BURST/~{WR}; input. */
  "BURST/~{WR}": "61",
  /** Physical pin 62: SCLK/~{RD}; input. */
  "SCLK/~{RD}": "62",
  /** Physical pin 63: ~{CS}; input. */
  "~{CS}": "63",
  /** Physical pin 64: CHSEL0; input. */
  "CHSEL0": "64",
  /** Physical pin 65: CHSEL1; input. */
  "CHSEL1": "65",
  /** Physical pin 66: CHSEL2; input. */
  "CHSEL2": "66",
  /** Physical pin 67: BUSY; output. */
  "BUSY": "67",
  /** Physical pin 68: CONVST; input. */
  "CONVST": "68",
  /** Physical pin 69: REGGND; power_in. */
  "REGGND": "69",
  /** Physical pin 70: REGCAP; passive. */
  "REGCAP": "70",
  /** Physical pin 71: VCC; power_in. */
  "VCC_71": "71",
  /** Physical pin 72: AGND; passive. */
  "AGND_72": "72",
  /** Physical pin 73: V0B; input. */
  "V0B": "73",
  /** Physical pin 74: V0BGND; input. */
  "V0BGND": "74",
  /** Physical pin 75: V1B; input. */
  "V1B": "75",
  /** Physical pin 76: V1BGND; input. */
  "V1BGND": "76",
  /** Physical pin 77: V2B; input. */
  "V2B": "77",
  /** Physical pin 78: V2BGND; input. */
  "V2BGND": "78",
  /** Physical pin 79: V3B; input. */
  "V3B": "79",
  /** Physical pin 80: V3BGND; input. */
  "V3BGND": "80",
}) {
  override schema = "Analog_ADC:AD7616";
  override referencePrefix = "U";
}

/**
 * 16-bit, 4-Channel, 250kSPS, PulSAR ADC, Bipolar-Unipolar, LFCSP-20
 *
 * KiCad symbol: `Analog_ADC:AD7682BCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7682_7689.pdf
 * Keywords: 16-Bit 4-Channel 250kSPS.
 * Default footprint: Package_CSP:LFCSP-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7682BCP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: REF; passive. */
  "REF": "2",
  /** Physical pin 3: REFIN; passive. */
  "REFIN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: IN2; input. */
  "IN2": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: IN3; input. */
  "IN3": "9",
  /** Physical pin 10: COM; input. */
  "COM": "10",
  /** Physical pin 11: CNV; input. */
  "CNV": "11",
  /** Physical pin 12: DIN; input. */
  "DIN": "12",
  /** Physical pin 13: SCK; input. */
  "SCK": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: VIO; power_in. */
  "VIO": "15",
  /** Physical pin 16: IN0; input. */
  "IN0": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: IN1; input. */
  "IN1": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD_20": "20",
  /** Physical pin 21: EPAD; passive. */
  "EPAD": "21",
}) {
  override schema = "Analog_ADC:AD7682BCP";
  override referencePrefix = "U";
}

/**
 * 14-Bit, 8-Channel, 250 kSPS PulSAR ADC, LFSCP-20
 *
 * KiCad symbol: `Analog_ADC:AD7949BCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7949.pdf
 * Keywords: ADC, SPI.
 * Default footprint: Package_CSP:LFCSP-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7949BCP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: REF; passive. */
  "REF": "2",
  /** Physical pin 3: REFIN; passive. */
  "REFIN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: IN4; input. */
  "IN4": "6",
  /** Physical pin 7: IN5; input. */
  "IN5": "7",
  /** Physical pin 8: IN6; input. */
  "IN6": "8",
  /** Physical pin 9: IN7; input. */
  "IN7": "9",
  /** Physical pin 10: COM; input. */
  "COM": "10",
  /** Physical pin 11: CNV; input. */
  "CNV": "11",
  /** Physical pin 12: DIN; input. */
  "DIN": "12",
  /** Physical pin 13: SCK; input. */
  "SCK": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: VIO; power_in. */
  "VIO": "15",
  /** Physical pin 16: IN0; input. */
  "IN0": "16",
  /** Physical pin 17: IN1; input. */
  "IN1": "17",
  /** Physical pin 18: IN2; input. */
  "IN2": "18",
  /** Physical pin 19: IN3; input. */
  "IN3": "19",
  /** Physical pin 20: VDD; passive. */
  "VDD_20": "20",
  /** Physical pin 21: EPAD; power_in. */
  "EPAD": "21",
}) {
  override schema = "Analog_ADC:AD7949BCP";
  override referencePrefix = "U";
}

/**
 * 16-Bit, 8-Channel, 250 kSPS PulSAR ADC, LFSCP-20
 *
 * KiCad symbol: `Analog_ADC:AD7689xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7682_7689.pdf
 * Keywords: ADC, SPI.
 * Default footprint: Package_CSP:LFCSP-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7689xCP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: REF; passive. */
  "REF": "2",
  /** Physical pin 3: REFIN; passive. */
  "REFIN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: IN4; input. */
  "IN4": "6",
  /** Physical pin 7: IN5; input. */
  "IN5": "7",
  /** Physical pin 8: IN6; input. */
  "IN6": "8",
  /** Physical pin 9: IN7; input. */
  "IN7": "9",
  /** Physical pin 10: COM; input. */
  "COM": "10",
  /** Physical pin 11: CNV; input. */
  "CNV": "11",
  /** Physical pin 12: DIN; input. */
  "DIN": "12",
  /** Physical pin 13: SCK; input. */
  "SCK": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: VIO; power_in. */
  "VIO": "15",
  /** Physical pin 16: IN0; input. */
  "IN0": "16",
  /** Physical pin 17: IN1; input. */
  "IN1": "17",
  /** Physical pin 18: IN2; input. */
  "IN2": "18",
  /** Physical pin 19: IN3; input. */
  "IN3": "19",
  /** Physical pin 20: VDD; passive. */
  "VDD_20": "20",
  /** Physical pin 21: EPAD; power_in. */
  "EPAD": "21",
}) {
  override schema = "Analog_ADC:AD7689xCP";
  override referencePrefix = "U";
}

/**
 * 16-Bit, 8-Channel, 500 kSPS PulSAR ADC, LFSCP-20
 *
 * KiCad symbol: `Analog_ADC:AD7699BCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7699.pdf
 * Keywords: ADC, SPI.
 * Default footprint: Package_CSP:LFCSP-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7699BCP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: REF; passive. */
  "REF": "2",
  /** Physical pin 3: REFIN; passive. */
  "REFIN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: IN4; input. */
  "IN4": "6",
  /** Physical pin 7: IN5; input. */
  "IN5": "7",
  /** Physical pin 8: IN6; input. */
  "IN6": "8",
  /** Physical pin 9: IN7; input. */
  "IN7": "9",
  /** Physical pin 10: COM; input. */
  "COM": "10",
  /** Physical pin 11: CNV; input. */
  "CNV": "11",
  /** Physical pin 12: DIN; input. */
  "DIN": "12",
  /** Physical pin 13: SCK; input. */
  "SCK": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: VIO; power_in. */
  "VIO": "15",
  /** Physical pin 16: IN0; input. */
  "IN0": "16",
  /** Physical pin 17: IN1; input. */
  "IN1": "17",
  /** Physical pin 18: IN2; input. */
  "IN2": "18",
  /** Physical pin 19: IN3; input. */
  "IN3": "19",
  /** Physical pin 20: VDD; passive. */
  "VDD_20": "20",
  /** Physical pin 21: EPAD; power_in. */
  "EPAD": "21",
}) {
  override schema = "Analog_ADC:AD7699BCP";
  override referencePrefix = "U";
}

/**
 * 16-Bit, 195 kSPS CMOS, Sigma-Delta ADC, PQFP-44 (JEDEC MO-112 variation AA-2)
 *
 * KiCad symbol: `Analog_ADC:AD7722`. Reference prefix: `U`.
 * Footprint filters: *PQFP*10x10mm*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7722.pdf
 * Keywords: adc 1ch 16bit parallel serial.
 * Default footprint: Package_QFP:Microchip_PQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7722 extends Component.withPins({
  /** Physical pin 1: DB2; input. */
  "DB2": "1",
  /** Physical pin 2: DB1; input. */
  "DB1": "2",
  /** Physical pin 3: DB0; input. */
  "DB0": "3",
  /** Physical pin 4: CFMT/~{DRDY}; input. */
  "CFMT/~{DRDY}": "4",
  /** Physical pin 5: DVAL/~{RD}; input. */
  "DVAL/~{RD}": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND_6": "6",
  /** Physical pin 7: ~{UNI}; input. */
  "~{UNI}": "7",
  /** Physical pin 8: P/~{S}; input. */
  "P/~{S}": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND_9": "9",
  /** Physical pin 10: AGND1; power_in. */
  "AGND1": "10",
  /** Physical pin 11: CLKIN; input. */
  "CLKIN": "11",
  /** Physical pin 12: XTAL; output. */
  "XTAL": "12",
  /** Physical pin 13: AGND; passive. */
  "AGND_13": "13",
  /** Physical pin 14: AVDD1; power_in. */
  "AVDD1": "14",
  /** Physical pin 15: AGND; passive. */
  "AGND_15": "15",
  /** Physical pin 16: VIN-; input. */
  "VIN-": "16",
  /** Physical pin 17: RESET; input. */
  "RESET": "17",
  /** Physical pin 18: VIN+; input. */
  "VIN+": "18",
  /** Physical pin 19: AGND; passive. */
  "AGND_19": "19",
  /** Physical pin 20: AVDD; power_in. */
  "AVDD_20": "20",
  /** Physical pin 21: AGND; passive. */
  "AGND_21": "21",
  /** Physical pin 22: REF1; power_out. */
  "REF1": "22",
  /** Physical pin 23: AVDD; passive. */
  "AVDD_23": "23",
  /** Physical pin 24: REF2; power_out. */
  "REF2": "24",
  /** Physical pin 25: AGND; passive. */
  "AGND_25": "25",
  /** Physical pin 26: AGND; passive. */
  "AGND_26": "26",
  /** Physical pin 27: CAL; input. */
  "CAL": "27",
  /** Physical pin 28: DGND; passive. */
  "DGND_28": "28",
  /** Physical pin 29: ~{CS}; input. */
  "~{CS}": "29",
  /** Physical pin 30: SYNC; input. */
  "SYNC": "30",
  /** Physical pin 31: DB15; output. */
  "DB15": "31",
  /** Physical pin 32: DB14; output. */
  "DB14": "32",
  /** Physical pin 33: DB13; output. */
  "DB13": "33",
  /** Physical pin 34: DB12; output. */
  "DB12": "34",
  /** Physical pin 35: DB11; output. */
  "DB11": "35",
  /** Physical pin 36: DB10; output. */
  "DB10": "36",
  /** Physical pin 37: FSO/DB9; output. */
  "FSO/DB9": "37",
  /** Physical pin 38: SDO/DB8; output. */
  "SDO/DB8": "38",
  /** Physical pin 39: DVDD; power_in. */
  "DVDD": "39",
  /** Physical pin 40: SCO/DB7; input. */
  "SCO/DB7": "40",
  /** Physical pin 41: FSI/DB6; input. */
  "FSI/DB6": "41",
  /** Physical pin 42: SFMT/DB5; input. */
  "SFMT/DB5": "42",
  /** Physical pin 43: DOE/DB4; input. */
  "DOE/DB4": "43",
  /** Physical pin 44: TSI/DB3; input. */
  "TSI/DB3": "44",
}) {
  override schema = "Analog_ADC:AD7722";
  override referencePrefix = "U";
}

/**
 * 24-bit capacitance-to-digital converter with temperature sensor, TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:AD7745`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7745_7746.pdf
 * Keywords: adc cdc capacitance.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7745 extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: ~{RDY}; output. */
  "~{RDY}": "2",
  /** Physical pin 3: EXCA; output. */
  "EXCA": "3",
  /** Physical pin 4: EXCB; output. */
  "EXCB": "4",
  /** Physical pin 5: REFIN+; input. */
  "REFIN+": "5",
  /** Physical pin 6: REFIN-; input. */
  "REFIN-": "6",
  /** Physical pin 7: CIN1-; passive. */
  "CIN1-": "7",
  /** Physical pin 8: CIN1+; passive. */
  "CIN1+": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VIN+; input. */
  "VIN+": "11",
  /** Physical pin 12: VIN-; input. */
  "VIN-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
}) {
  override schema = "Analog_ADC:AD7745";
  override referencePrefix = "U";
}

/**
 * 24-bit capacitance-to-digital converter with temperature sensor, TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:AD7746`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7745_7746.pdf
 * Keywords: adc cdc capacitance.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7746 extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: ~{RDY}; output. */
  "~{RDY}": "2",
  /** Physical pin 3: EXCA; output. */
  "EXCA": "3",
  /** Physical pin 4: EXCB; output. */
  "EXCB": "4",
  /** Physical pin 5: REFIN+; input. */
  "REFIN+": "5",
  /** Physical pin 6: REFIN-; input. */
  "REFIN-": "6",
  /** Physical pin 7: CIN1-; passive. */
  "CIN1-": "7",
  /** Physical pin 8: CIN1+; passive. */
  "CIN1+": "8",
  /** Physical pin 9: CIN2+; passive. */
  "CIN2+": "9",
  /** Physical pin 10: CIN2-; passive. */
  "CIN2-": "10",
  /** Physical pin 11: VIN+; input. */
  "VIN+": "11",
  /** Physical pin 12: VIN-; input. */
  "VIN-": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
}) {
  override schema = "Analog_ADC:AD7746";
  override referencePrefix = "U";
}

/**
 * 8-Channel, 24-bit, Simultaneous Sampling ADC, WQFN-64 (LFCSP-64)
 *
 * KiCad symbol: `Analog_ADC:AD7779`. Reference prefix: `U`.
 * Footprint filters: *9x9mm*P0.5mm*EP7.6*x7.6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad7779.pdf
 * Keywords: Analog-Devices SPI SAR PGA.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.65x7.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7779 extends Component.withPins({
  /** Physical pin 1: AIN0-; input. */
  "AIN0-": "1",
  /** Physical pin 2: AIN0+; input. */
  "AIN0+": "2",
  /** Physical pin 3: AIN1-; input. */
  "AIN1-": "3",
  /** Physical pin 4: AIN1+; input. */
  "AIN1+": "4",
  /** Physical pin 5: AVSS1A; power_in. */
  "AVSS1A": "5",
  /** Physical pin 6: AVDD1A; power_in. */
  "AVDD1A": "6",
  /** Physical pin 7: REF1-; input. */
  "REF1-": "7",
  /** Physical pin 8: REF1+; input. */
  "REF1+": "8",
  /** Physical pin 9: AIN2-; input. */
  "AIN2-": "9",
  /** Physical pin 10: AIN2+; input. */
  "AIN2+": "10",
  /** Physical pin 11: AIN3-; input. */
  "AIN3-": "11",
  /** Physical pin 12: AIN3+; input. */
  "AIN3+": "12",
  /** Physical pin 13: MODE0/GPIO0; bidirectional. */
  "MODE0/GPIO0": "13",
  /** Physical pin 14: MODE1/GPIO1; bidirectional. */
  "MODE1/GPIO1": "14",
  /** Physical pin 15: MODE2/GPIO2; bidirectional. */
  "MODE2/GPIO2": "15",
  /** Physical pin 16: MODE3/ALERT; bidirectional. */
  "MODE3/ALERT": "16",
  /** Physical pin 17: CONVST_SAR; input. */
  "CONVST_SAR": "17",
  /** Physical pin 18: ALERT/~{CS}; bidirectional. */
  "ALERT/~{CS}": "18",
  /** Physical pin 19: DCLK2/SCLK; input. */
  "DCLK2/SCLK": "19",
  /** Physical pin 20: DCLK1/SDI; input. */
  "DCLK1/SDI": "20",
  /** Physical pin 21: DCLK0/SDO; bidirectional. */
  "DCLK0/SDO": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: DREGCAP; passive. */
  "DREGCAP": "23",
  /** Physical pin 24: IOVDD; power_in. */
  "IOVDD": "24",
  /** Physical pin 25: DOUT3; bidirectional. */
  "DOUT3": "25",
  /** Physical pin 26: DOUT2; bidirectional. */
  "DOUT2": "26",
  /** Physical pin 27: DOUT1; output. */
  "DOUT1": "27",
  /** Physical pin 28: DOUT0; output. */
  "DOUT0": "28",
  /** Physical pin 29: DCLK; output. */
  "DCLK": "29",
  /** Physical pin 30: ~{DRDY}; output. */
  "~{DRDY}": "30",
  /** Physical pin 31: XTAL1; passive. */
  "XTAL1": "31",
  /** Physical pin 32: XTAL2/MCLK; input. */
  "XTAL2/MCLK": "32",
  /** Physical pin 33: ~{START}; input. */
  "~{START}": "33",
  /** Physical pin 34: ~{SYNC_OUT}; output. */
  "~{SYNC_OUT}": "34",
  /** Physical pin 35: ~{SYNC_IN}; input. */
  "~{SYNC_IN}": "35",
  /** Physical pin 36: ~{RESET}; input. */
  "~{RESET}": "36",
  /** Physical pin 37: AIN7+; input. */
  "AIN7+": "37",
  /** Physical pin 38: AIN7-; input. */
  "AIN7-": "38",
  /** Physical pin 39: AIN6+; input. */
  "AIN6+": "39",
  /** Physical pin 40: AIN6-; input. */
  "AIN6-": "40",
  /** Physical pin 41: REF2+; input. */
  "REF2+": "41",
  /** Physical pin 42: REF2-; input. */
  "REF2-": "42",
  /** Physical pin 43: AVDD1B; power_in. */
  "AVDD1B": "43",
  /** Physical pin 44: AVSS1B; power_in. */
  "AVSS1B": "44",
  /** Physical pin 45: AIN5+; input. */
  "AIN5+": "45",
  /** Physical pin 46: AIN5-; input. */
  "AIN5-": "46",
  /** Physical pin 47: AIN4+; input. */
  "AIN4+": "47",
  /** Physical pin 48: AIN4-; input. */
  "AIN4-": "48",
  /** Physical pin 49: REF_OUT; output. */
  "REF_OUT": "49",
  /** Physical pin 50: AVSS2B; power_in. */
  "AVSS2B": "50",
  /** Physical pin 51: AREG2CAP; passive. */
  "AREG2CAP": "51",
  /** Physical pin 52: AVDD2B; power_in. */
  "AVDD2B": "52",
  /** Physical pin 53: AVSS3; power_in. */
  "AVSS3": "53",
  /** Physical pin 54: FORMAT1; input. */
  "FORMAT1": "54",
  /** Physical pin 55: FORMAT0; input. */
  "FORMAT0": "55",
  /** Physical pin 56: CLK_SEL; input. */
  "CLK_SEL": "56",
  /** Physical pin 57: VCM; output. */
  "VCM": "57",
  /** Physical pin 58: AVDD2A; power_in. */
  "AVDD2A": "58",
  /** Physical pin 59: AREG1CAP; passive. */
  "AREG1CAP": "59",
  /** Physical pin 60: AVSS2A; power_in. */
  "AVSS2A": "60",
  /** Physical pin 61: AVSS4; power_in. */
  "AVSS4": "61",
  /** Physical pin 62: AVDD4; power_in. */
  "AVDD4": "62",
  /** Physical pin 63: AUXAIN+; input. */
  "AUXAIN+": "63",
  /** Physical pin 64: AUXAIN-; input. */
  "AUXAIN-": "64",
  /** Physical pin 65: EPAD(AVSSx); power_in. */
  "EPAD(AVSSx)": "65",
}) {
  override schema = "Analog_ADC:AD7779";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 6-Channel Sigma-Delta ADC, TSSOP-28
 *
 * KiCad symbol: `Analog_ADC:AD7794`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7794_7795.pdf
 * Keywords: adc 6ch 24bit serial.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7794 extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: CLK; bidirectional. */
  "CLK": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: AIN6+/P1; input. */
  "AIN6+/P1": "5",
  /** Physical pin 6: AIN6-/P2; input. */
  "AIN6-/P2": "6",
  /** Physical pin 7: AIN1+; input. */
  "AIN1+": "7",
  /** Physical pin 8: AIN1-; input. */
  "AIN1-": "8",
  /** Physical pin 9: AIN2+; input. */
  "AIN2+": "9",
  /** Physical pin 10: AIN2-; input. */
  "AIN2-": "10",
  /** Physical pin 11: AIN3+; input. */
  "AIN3+": "11",
  /** Physical pin 12: AIN3-; input. */
  "AIN3-": "12",
  /** Physical pin 13: REFIN1+; input. */
  "REFIN1+": "13",
  /** Physical pin 14: REFIN1-; input. */
  "REFIN1-": "14",
  /** Physical pin 15: AIN5+/IOUT2; input. */
  "AIN5+/IOUT2": "15",
  /** Physical pin 16: AIN5-/IOUT1; input. */
  "AIN5-/IOUT1": "16",
  /** Physical pin 17: AIN4+/REFIN2+; input. */
  "AIN4+/REFIN2+": "17",
  /** Physical pin 18: AIN4-/REFIN2-; input. */
  "AIN4-/REFIN2-": "18",
  /** Physical pin 19: PSW; passive. */
  "PSW": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: AVDD; power_in. */
  "AVDD": "21",
  /** Physical pin 22: DVDD; power_in. */
  "DVDD": "22",
  /** Physical pin 23: DOUT/~{RDY}; output. */
  "DOUT/~{RDY}": "23",
  /** Physical pin 24: DIN; input. */
  "DIN": "24",
}) {
  override schema = "Analog_ADC:AD7794";
  override referencePrefix = "U";
}

/**
 * 16-Bit, 6-Channel Sigma-Delta ADC, TSSOP-28
 *
 * KiCad symbol: `Analog_ADC:AD7795`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7794_7795.pdf
 * Keywords: adc 6ch 16bit serial.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7795 extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: CLK; bidirectional. */
  "CLK": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: AIN6+/P1; input. */
  "AIN6+/P1": "5",
  /** Physical pin 6: AIN6-/P2; input. */
  "AIN6-/P2": "6",
  /** Physical pin 7: AIN1+; input. */
  "AIN1+": "7",
  /** Physical pin 8: AIN1-; input. */
  "AIN1-": "8",
  /** Physical pin 9: AIN2+; input. */
  "AIN2+": "9",
  /** Physical pin 10: AIN2-; input. */
  "AIN2-": "10",
  /** Physical pin 11: AIN3+; input. */
  "AIN3+": "11",
  /** Physical pin 12: AIN3-; input. */
  "AIN3-": "12",
  /** Physical pin 13: REFIN1+; input. */
  "REFIN1+": "13",
  /** Physical pin 14: REFIN1-; input. */
  "REFIN1-": "14",
  /** Physical pin 15: AIN5+/IOUT2; input. */
  "AIN5+/IOUT2": "15",
  /** Physical pin 16: AIN5-/IOUT1; input. */
  "AIN5-/IOUT1": "16",
  /** Physical pin 17: AIN4+/REFIN2+; input. */
  "AIN4+/REFIN2+": "17",
  /** Physical pin 18: AIN4-/REFIN2-; input. */
  "AIN4-/REFIN2-": "18",
  /** Physical pin 19: PSW; passive. */
  "PSW": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: AVDD; power_in. */
  "AVDD": "21",
  /** Physical pin 22: DVDD; power_in. */
  "DVDD": "22",
  /** Physical pin 23: DOUT/~{RDY}; output. */
  "DOUT/~{RDY}": "23",
  /** Physical pin 24: DIN; input. */
  "DIN": "24",
}) {
  override schema = "Analog_ADC:AD7795";
  override referencePrefix = "U";
}

/**
 * Analog to Digital 8 bits converter, PDIP/SOIC/TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:AD7819`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7819.pdf
 * Keywords: CAD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7819 extends Component.withPins({
  /** Physical pin 1: VREF; input. */
  "VREF": "1",
  /** Physical pin 2: Vin; input. */
  "Vin": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: START; input. */
  "START": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: OE; input. */
  "OE": "6",
  /** Physical pin 7: EOC; output. */
  "EOC": "7",
  /** Physical pin 8: DB0; tri_state. */
  "DB0": "8",
  /** Physical pin 9: DB1; tri_state. */
  "DB1": "9",
  /** Physical pin 10: DB2; tri_state. */
  "DB2": "10",
  /** Physical pin 11: DB3; tri_state. */
  "DB3": "11",
  /** Physical pin 12: DB4; tri_state. */
  "DB4": "12",
  /** Physical pin 13: DB5; tri_state. */
  "DB5": "13",
  /** Physical pin 14: DB6; tri_state. */
  "DB6": "14",
  /** Physical pin 15: DB7; tri_state. */
  "DB7": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Analog_ADC:AD7819";
  override referencePrefix = "U";
}

/**
 * Video ADC (32 Mhz), SSOP-28
 *
 * KiCad symbol: `Analog_ADC:AD9280ARS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad9280.pdf
 * Keywords: ADC CAN VIDEO.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9280ARS extends Component.withPins({
  /** Physical pin 1: AVSS; power_in. */
  "AVSS": "1",
  /** Physical pin 2: DRVDD; power_in. */
  "DRVDD": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: D0; output. */
  "D0": "5",
  /** Physical pin 6: D1; output. */
  "D1": "6",
  /** Physical pin 7: D2; output. */
  "D2": "7",
  /** Physical pin 8: D3; output. */
  "D3": "8",
  /** Physical pin 9: D4; output. */
  "D4": "9",
  /** Physical pin 10: D5; output. */
  "D5": "10",
  /** Physical pin 11: D6; output. */
  "D6": "11",
  /** Physical pin 12: D7; output. */
  "D7": "12",
  /** Physical pin 13: OTR; output. */
  "OTR": "13",
  /** Physical pin 14: DRVSS; power_in. */
  "DRVSS": "14",
  /** Physical pin 15: CLK; input. */
  "CLK": "15",
  /** Physical pin 16: THREE-STATE; input. */
  "THREE-STATE": "16",
  /** Physical pin 17: STBY; passive. */
  "STBY": "17",
  /** Physical pin 18: REFSENSE; input. */
  "REFSENSE": "18",
  /** Physical pin 19: CLAMP; passive. */
  "CLAMP": "19",
  /** Physical pin 20: CLAMPIN; input. */
  "CLAMPIN": "20",
  /** Physical pin 21: REFTS; input. */
  "REFTS": "21",
  /** Physical pin 22: REFTF; input. */
  "REFTF": "22",
  /** Physical pin 23: MODE; input. */
  "MODE": "23",
  /** Physical pin 24: REFBF; input. */
  "REFBF": "24",
  /** Physical pin 25: REFBS; input. */
  "REFBS": "25",
  /** Physical pin 26: VREF; passive. */
  "VREF": "26",
  /** Physical pin 27: AIN; input. */
  "AIN": "27",
  /** Physical pin 28: AVDD; power_in. */
  "AVDD": "28",
}) {
  override schema = "Analog_ADC:AD9280ARS";
  override referencePrefix = "U";
}

/**
 * ADC 50MHz 8 bits, SSOP-20
 *
 * KiCad symbol: `Analog_ADC:AD9283`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9283.pdf
 * Keywords: ADC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9283 extends Component.withPins({
  /** Physical pin 1: PWRDWN; input. */
  "PWRDWN": "1",
  /** Physical pin 2: VREFout; input. */
  "VREFout": "2",
  /** Physical pin 3: VREFin; input. */
  "VREFin": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: VaD; power_in. */
  "VaD_5": "5",
  /** Physical pin 6: Ain-; input. */
  "Ain-": "6",
  /** Physical pin 7: Ain+; input. */
  "Ain+": "7",
  /** Physical pin 8: VaD; power_in. */
  "VaD_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: CLK; input. */
  "CLK": "10",
  /** Physical pin 11: DO7; output. */
  "DO7": "11",
  /** Physical pin 12: DO6; output. */
  "DO6": "12",
  /** Physical pin 13: DO5; output. */
  "DO5": "13",
  /** Physical pin 14: DO4; output. */
  "DO4": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: DO3; output. */
  "DO3": "17",
  /** Physical pin 18: DO2; output. */
  "DO2": "18",
  /** Physical pin 19: DO1; output. */
  "DO1": "19",
  /** Physical pin 20: DO0; output. */
  "DO0": "20",
}) {
  override schema = "Analog_ADC:AD9283";
  override referencePrefix = "U";
}

/**
 * Analog to Digital 8 bits converter, DIP-18 (Hermetic)
 *
 * KiCad symbol: `Analog_ADC:ADC0800`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/snas562/snas562.pdf
 * Keywords: CAD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC0800 extends Component.withPins({
  /** Physical pin 1: QE; tri_state. */
  "QE": "1",
  /** Physical pin 2: QF; tri_state. */
  "QF": "2",
  /** Physical pin 3: QG; tri_state. */
  "QG": "3",
  /** Physical pin 4: QH; tri_state. */
  "QH": "4",
  /** Physical pin 5: Rbot; input. */
  "Rbot": "5",
  /** Physical pin 6: Start; input. */
  "Start": "6",
  /** Physical pin 7: OE; input. */
  "OE": "7",
  /** Physical pin 8: -Vgg; power_in. */
  "-Vgg": "8",
  /** Physical pin 9: EOC; output. */
  "EOC": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 11: Clk; input. */
  "Clk": "11",
  /** Physical pin 12: Vin; input. */
  "Vin": "12",
  /** Physical pin 13: QA; tri_state. */
  "QA": "13",
  /** Physical pin 14: QB; tri_state. */
  "QB": "14",
  /** Physical pin 15: Rtop; input. */
  "Rtop": "15",
  /** Physical pin 16: QC; tri_state. */
  "QC": "16",
  /** Physical pin 17: QD; tri_state. */
  "QD": "17",
  /** Physical pin 18: DGND; power_in. */
  "DGND": "18",
}) {
  override schema = "Analog_ADC:ADC0800";
  override referencePrefix = "U";
}

/**
 * Fast ADC  (20 .. 60 Mhz), TSSOP-24
 *
 * KiCad symbol: `Analog_ADC:ADC08060`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/adc08060.pdf
 * Keywords: ADC CAN VIDEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC08060 extends Component.withPins({
  /** Physical pin 1: AVDD; power_in. */
  "AVDD_1": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND_2": "2",
  /** Physical pin 3: VRT; input. */
  "VRT": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD_4": "4",
  /** Physical pin 5: AGND; power_in. */
  "AGND_5": "5",
  /** Physical pin 6: AIN; input. */
  "AIN": "6",
  /** Physical pin 7: VIN_GND; input. */
  "VIN_GND": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND_8": "8",
  /** Physical pin 9: VRB; input. */
  "VRB_9": "9",
  /** Physical pin 10: VRB; input. */
  "VRB_10": "10",
  /** Physical pin 11: AGND; power_in. */
  "AGND_11": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: D0; tri_state. */
  "D0": "13",
  /** Physical pin 14: D1; tri_state. */
  "D1": "14",
  /** Physical pin 15: D2; tri_state. */
  "D2": "15",
  /** Physical pin 16: D3; tri_state. */
  "D3": "16",
  /** Physical pin 17: DGND; power_in. */
  "DGND_17": "17",
  /** Physical pin 18: DVDD; power_in. */
  "DVDD": "18",
  /** Physical pin 19: D4; tri_state. */
  "D4": "19",
  /** Physical pin 20: D5; tri_state. */
  "D5": "20",
  /** Physical pin 21: D6; tri_state. */
  "D6": "21",
  /** Physical pin 22: D7; tri_state. */
  "D7": "22",
  /** Physical pin 23: PWR_DWN; input. */
  "PWR_DWN": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
}) {
  override schema = "Analog_ADC:ADC08060";
  override referencePrefix = "U";
}

/**
 * I2C-Compatible, 8-Bit Analog-to-Digital Converter with Alert Function, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:ADC081C021CIMM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/adc081c021.pdf
 * Keywords: ADC I2C 8-bit Alert.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC081C021CIMM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: ALERT; open_collector. */
  "ALERT": "2",
  /** Physical pin 3: ADR0; input. */
  "ADR0": "3",
  /** Physical pin 4: VIN; input. */
  "VIN": "4",
  /** Physical pin 5: VA; power_in. */
  "VA": "5",
  /** Physical pin 6: ADR1; input. */
  "ADR1": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
}) {
  override schema = "Analog_ADC:ADC081C021CIMM";
  override referencePrefix = "U";
}

/**
 * 2 channel, 50 - 200 ksps, 8-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC082S021`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc082s021.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC082S021 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC082S021";
  override referencePrefix = "U";
}

/**
 * 2 channel, 200 - 500 ksps, 8-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC082S051`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc082s051.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC082S051 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC082S051";
  override referencePrefix = "U";
}

/**
 * 2 channel, 500 - 1000 ksps, 8-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC082S101`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc082s101.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC082S101 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC082S101";
  override referencePrefix = "U";
}

/**
 * 2 inputs AD Converter (serial output),
 *
 * KiCad symbol: `Analog_ADC:ADC0832`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/adc0831-n.pdf
 * Keywords: ADC CAN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC0832 extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: ANALOG0; input. */
  "ANALOG0": "2",
  /** Physical pin 3: ANALOG1; input. */
  "ANALOG1": "3",
  /** Physical pin 4: GND; input. */
  "GND": "4",
  /** Physical pin 5: DIN; input. */
  "DIN": "5",
  /** Physical pin 6: DOUT; output. */
  "DOUT": "6",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 8: VCC; input. */
  "VCC": "8",
}) {
  override schema = "Analog_ADC:ADC0832";
  override referencePrefix = "U";
}

/**
 * 10-bit I2C ADC, SOT-23
 *
 * KiCad symbol: `Analog_ADC:ADC101C021CIMK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/adc101c021.pdf
 * Keywords: adc 10-bit i2c.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC101C021CIMK extends Component.withPins({
  /** Physical pin 1: V_{A}; power_in. */
  "V_{A}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: V_{IN}; input. */
  "V_{IN}": "3",
  /** Physical pin 4: ADDR; input. */
  "ADDR": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
}) {
  override schema = "Analog_ADC:ADC101C021CIMK";
  override referencePrefix = "U";
}

/**
 * I2C-Compatible, 10-Bit Analog-to-Digital Converter with Alert Function, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:ADC101C021CIMM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/adc101c021.pdf
 * Keywords: ADC I2C 10-bit Alert.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC101C021CIMM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: ALERT; open_collector. */
  "ALERT": "2",
  /** Physical pin 3: ADR0; input. */
  "ADR0": "3",
  /** Physical pin 4: VIN; input. */
  "VIN": "4",
  /** Physical pin 5: VA; power_in. */
  "VA": "5",
  /** Physical pin 6: ADR1; input. */
  "ADR1": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
}) {
  override schema = "Analog_ADC:ADC101C021CIMM";
  override referencePrefix = "U";
}

/**
 * 2 channel, 50 - 200 ksps, 10-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC102S021`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc102s021.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC102S021 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC102S021";
  override referencePrefix = "U";
}

/**
 * 2 channel, 200 - 500 ksps, 10-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC102S051`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc102s051.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC102S051 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC102S051";
  override referencePrefix = "U";
}

/**
 * 2 channel, 500 - 1000 ksps, 10-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC102S101`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc102s101.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC102S101 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC102S101";
  override referencePrefix = "U";
}

/**
 * Fast ADC  (15 Mhz), TSSOP-24
 *
 * KiCad symbol: `Analog_ADC:ADC1173`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/adc1173.pdf
 * Keywords: ADC CAN VIDEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC1173 extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: DVSS; power_in. */
  "DVSS_2": "2",
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
  /** Physical pin 20: AVSS; power_in. */
  "AVSS_20": "20",
  /** Physical pin 21: AVSS; power_in. */
  "AVSS_21": "21",
  /** Physical pin 22: VRBS; input. */
  "VRBS": "22",
  /** Physical pin 23: VRB; input. */
  "VRB": "23",
  /** Physical pin 24: DVSS; power_in. */
  "DVSS_24": "24",
}) {
  override schema = "Analog_ADC:ADC1173";
  override referencePrefix = "U";
}

/**
 * I2C-Compatible, 12-Bit Analog-to-Digital Converter with Alert Function, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:ADC121C021CIMM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/adc121c021.pdf
 * Keywords: ADC I2C 12-bit Alert.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC121C021CIMM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: ALERT; open_collector. */
  "ALERT": "2",
  /** Physical pin 3: ADR0; input. */
  "ADR0": "3",
  /** Physical pin 4: VIN; input. */
  "VIN": "4",
  /** Physical pin 5: VA; power_in. */
  "VA": "5",
  /** Physical pin 6: ADR1; input. */
  "ADR1": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
}) {
  override schema = "Analog_ADC:ADC121C021CIMM";
  override referencePrefix = "U";
}

/**
 * 2 channel, 50 - 200 ksps, 12-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC122S021`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc122s021.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC122S021 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC122S021";
  override referencePrefix = "U";
}

/**
 * 2 channel, 200 - 500 ksps, 12-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC122S051`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc122s051.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC122S051 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC122S051";
  override referencePrefix = "U";
}

/**
 * 2 channel, 500 - 1000 ksps, 12-bit ADC, 2.7 - 5.25V supply, TSSOP-8 (MSOP-8, Texas VSSOP-8)
 *
 * KiCad symbol: `Analog_ADC:ADC122S101`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/adc122s101.pdf
 * Keywords: ADC Texas-Instruments Analog-to-Digital-Converter QSPI SPI MICROWIRE.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC122S101 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: V_{A}; power_in. */
  "V_{A}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Analog_ADC:ADC122S101";
  override referencePrefix = "U";
}

/**
 * Low power 8-channel single ended 12-bit SAR ADC, 50 ksps to 200 ksps, SPI, TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:ADC1283`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/adc1283.pdf
 * Keywords: ADC 2.7V 3.3V 5.5V SPI 12bit 8-channel.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC1283 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: AVCC; power_in. */
  "AVCC": "2",
  /** Physical pin 3: AGND; power_in. */
  "AGND": "3",
  /** Physical pin 4: IN0; input. */
  "IN0": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: IN2; input. */
  "IN2": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: IN4; input. */
  "IN4": "8",
  /** Physical pin 9: IN5; input. */
  "IN5": "9",
  /** Physical pin 10: IN6; input. */
  "IN6": "10",
  /** Physical pin 11: IN7; input. */
  "IN7": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: DVCC; power_in. */
  "DVCC": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: DOUT; output. */
  "DOUT": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
}) {
  override schema = "Analog_ADC:ADC1283";
  override referencePrefix = "U";
}

/**
 * 12-Bit, 8-Channel, ADC System Monitor With Temperature Sensor, I2C Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:ADC128D818`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/adc128d818.pdf
 * Keywords: ADC 8 Channels TSSOP I2C.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADC128D818 extends Component.withPins({
  /** Physical pin 1: VREF; input. */
  "VREF": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 6: ~{INT}; output. */
  "~{INT}": "6",
  /** Physical pin 7: A0; input. */
  "A0": "7",
  /** Physical pin 8: A1; input. */
  "A1": "8",
  /** Physical pin 9: IN7; input. */
  "IN7": "9",
  /** Physical pin 10: IN6; input. */
  "IN6": "10",
  /** Physical pin 11: IN5; input. */
  "IN5": "11",
  /** Physical pin 12: IN4; input. */
  "IN4": "12",
  /** Physical pin 13: IN3; input. */
  "IN3": "13",
  /** Physical pin 14: IN2; input. */
  "IN2": "14",
  /** Physical pin 15: IN1; input. */
  "IN1": "15",
  /** Physical pin 16: IN0; input. */
  "IN0": "16",
}) {
  override schema = "Analog_ADC:ADC128D818";
  override referencePrefix = "U";
}

/**
 * Ultra-Small, Low-Power, I2C-Compatible, 3.3-kSPS, 12-Bit ADCs With Internal Reference and Oscillator, VSSOP-10
 *
 * KiCad symbol: `Analog_ADC:ADS1013IDGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1015.pdf
 * Keywords: 12 bit single channel I2C ADC.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1013IDGS extends Component.withPins({
  /** Physical pin 1: ADDR; input. */
  "ADDR": "1",
  /** Physical pin 2: unnamed; no_connect. */
  "P2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: AIN0; input. */
  "AIN0": "4",
  /** Physical pin 5: AIN1; input. */
  "AIN1": "5",
  /** Physical pin 6: unnamed; no_connect. */
  "P6": "6",
  /** Physical pin 7: unnamed; no_connect. */
  "P7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
}) {
  override schema = "Analog_ADC:ADS1013IDGS";
  override referencePrefix = "U";
}

/**
 * Ultra-Small, Low-Power, I2C-Compatible, 3.3-kSPS, 12-Bit ADCs With Internal Reference, Oscillator, and Programmable Comparator, VSSOP-10
 *
 * KiCad symbol: `Analog_ADC:ADS1014IDGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1015.pdf
 * Keywords: 12 bit single channel I2C ADC.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1014IDGS extends Component.withPins({
  /** Physical pin 1: ADDR; input. */
  "ADDR": "1",
  /** Physical pin 2: ALERT/RDY; output. */
  "ALERT/RDY": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: AIN0; input. */
  "AIN0": "4",
  /** Physical pin 5: AIN1; input. */
  "AIN1": "5",
  /** Physical pin 6: unnamed; no_connect. */
  "P6": "6",
  /** Physical pin 7: unnamed; no_connect. */
  "P7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
}) {
  override schema = "Analog_ADC:ADS1014IDGS";
  override referencePrefix = "U";
}

/**
 * Ultra-Small, Low-Power, I2C-Compatible, 3.3-kSPS, 12-Bit ADCs With Internal Reference, Oscillator, and Programmable Comparator, VSSOP-10
 *
 * KiCad symbol: `Analog_ADC:ADS1015IDGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1015.pdf
 * Keywords: 12 bit 4 channel I2C ADC.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1015IDGS extends Component.withPins({
  /** Physical pin 1: ADDR; input. */
  "ADDR": "1",
  /** Physical pin 2: ALERT/RDY; output. */
  "ALERT/RDY": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: AIN0; input. */
  "AIN0": "4",
  /** Physical pin 5: AIN1; input. */
  "AIN1": "5",
  /** Physical pin 6: AIN2; input. */
  "AIN2": "6",
  /** Physical pin 7: AIN3; input. */
  "AIN3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
}) {
  override schema = "Analog_ADC:ADS1015IDGS";
  override referencePrefix = "U";
}

/**
 * Ultrasmall, Low-Power, SPI-Compatible, 12-Bit, Analog-to-Digital Converter With Internal Reference and Temperature Sensor, VSSOP-10
 *
 * KiCad symbol: `Analog_ADC:ADS1018IDGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1018.pdf
 * Keywords: 12 bit 4 channel SPI ADC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1018IDGS extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: AIN0; input. */
  "AIN0": "4",
  /** Physical pin 5: AIN1; input. */
  "AIN1": "5",
  /** Physical pin 6: AIN2; input. */
  "AIN2": "6",
  /** Physical pin 7: AIN3; input. */
  "AIN3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: DOUT/~{DRDY}; output. */
  "DOUT/~{DRDY}": "9",
  /** Physical pin 10: DIN; input. */
  "DIN": "10",
}) {
  override schema = "Analog_ADC:ADS1018IDGS";
  override referencePrefix = "U";
}

/**
 * 16 Bit Analog to Digital converter with on board reference
 *
 * KiCad symbol: `Analog_ADC:ADS1110`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ads1110.pdf
 * Keywords: 16 Bit Analog to digital converter ADC.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1110 extends Component.withPins({
  /** Physical pin 1: VIN+; input. */
  "VIN+": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: VIN-; input. */
  "VIN-": "6",
}) {
  override schema = "Analog_ADC:ADS1110";
  override referencePrefix = "U";
}

/**
 * Ultra-Small, Low-Power, I2C-Compatible, 860-SPS, 16-Bit ADCs With Internal Reference and Oscillator, VSSOP-10
 *
 * KiCad symbol: `Analog_ADC:ADS1113IDGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1113.pdf
 * Keywords: 16 bit single channel I2C ADC.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1113IDGS extends Component.withPins({
  /** Physical pin 1: ADDR; input. */
  "ADDR": "1",
  /** Physical pin 2: unnamed; no_connect. */
  "P2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: AIN0; input. */
  "AIN0": "4",
  /** Physical pin 5: AIN1; input. */
  "AIN1": "5",
  /** Physical pin 6: unnamed; no_connect. */
  "P6": "6",
  /** Physical pin 7: unnamed; no_connect. */
  "P7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
}) {
  override schema = "Analog_ADC:ADS1113IDGS";
  override referencePrefix = "U";
}

/**
 * Ultra-Small, Low-Power, I2C-Compatible, 860-SPS, 16-Bit ADCs With Internal Reference, Oscillator, and Programmable Comparator, VSSOP-10
 *
 * KiCad symbol: `Analog_ADC:ADS1114IDGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1113.pdf
 * Keywords: 16 bit single channel I2C ADC.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1114IDGS extends Component.withPins({
  /** Physical pin 1: ADDR; input. */
  "ADDR": "1",
  /** Physical pin 2: ALERT/RDY; output. */
  "ALERT/RDY": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: AIN0; input. */
  "AIN0": "4",
  /** Physical pin 5: AIN1; input. */
  "AIN1": "5",
  /** Physical pin 6: unnamed; no_connect. */
  "P6": "6",
  /** Physical pin 7: unnamed; no_connect. */
  "P7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
}) {
  override schema = "Analog_ADC:ADS1114IDGS";
  override referencePrefix = "U";
}

/**
 * Ultra-Small, Low-Power, I2C-Compatible, 860-SPS, 16-Bit ADCs With Internal Reference, Oscillator, and Programmable Comparator, VSSOP-10
 *
 * KiCad symbol: `Analog_ADC:ADS1115IDGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1113.pdf
 * Keywords: 16 bit 4 channel I2C ADC.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1115IDGS extends Component.withPins({
  /** Physical pin 1: ADDR; input. */
  "ADDR": "1",
  /** Physical pin 2: ALERT/RDY; output. */
  "ALERT/RDY": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: AIN0; input. */
  "AIN0": "4",
  /** Physical pin 5: AIN1; input. */
  "AIN1": "5",
  /** Physical pin 6: AIN2; input. */
  "AIN2": "6",
  /** Physical pin 7: AIN3; input. */
  "AIN3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
}) {
  override schema = "Analog_ADC:ADS1115IDGS";
  override referencePrefix = "U";
}

/**
 * Ultrasmall, Low-Power, SPI-Compatible, 16-Bit Analog-to-Digital Converter with Internal Reference and Temperature Sensor, VSSOP-10
 *
 * KiCad symbol: `Analog_ADC:ADS1118IDGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1118.pdf
 * Keywords: 16 bit 4 channel SPI ADC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1118IDGS extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: AIN0; input. */
  "AIN0": "4",
  /** Physical pin 5: AIN1; input. */
  "AIN1": "5",
  /** Physical pin 6: AIN2; input. */
  "AIN2": "6",
  /** Physical pin 7: AIN3; input. */
  "AIN3": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: DOUT/~{DRDY}; output. */
  "DOUT/~{DRDY}": "9",
  /** Physical pin 10: DIN; input. */
  "DIN": "10",
}) {
  override schema = "Analog_ADC:ADS1118IDGS";
  override referencePrefix = "U";
}

/**
 * Low-power, quad-input, 16-bit analog to digital converter, integrated temperature sensor, SPI interface, TSSOP-16 package
 *
 * KiCad symbol: `Analog_ADC:ADS1120-PW`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1120.pdf
 * Keywords: adc spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1120_PW extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: AVSS; power_in. */
  "AVSS": "5",
  /** Physical pin 6: AIN3/REFN1; input. */
  "AIN3/REFN1": "6",
  /** Physical pin 7: AIN2; input. */
  "AIN2": "7",
  /** Physical pin 8: REFN0; input. */
  "REFN0": "8",
  /** Physical pin 9: REFP0; input. */
  "REFP0": "9",
  /** Physical pin 10: AIN1; input. */
  "AIN1": "10",
  /** Physical pin 11: AIN0/REFP1; input. */
  "AIN0/REFP1": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD": "13",
  /** Physical pin 14: ~{DRDY}; output. */
  "~{DRDY}": "14",
  /** Physical pin 15: DOUT/~{DRDY}; output. */
  "DOUT/~{DRDY}": "15",
  /** Physical pin 16: DIN; input. */
  "DIN": "16",
}) {
  override schema = "Analog_ADC:ADS1120-PW";
  override referencePrefix = "U";
}

/**
 * Low-power, quad-input, 16-bit analog to digital converter, integrated temperature sensor, SPI interface, QFN-16 package
 *
 * KiCad symbol: `Analog_ADC:ADS1120-RVA`. Reference prefix: `U`.
 * Footprint filters: QFN*3.5x3.5mm*P0.50mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1120.pdf
 * Keywords: adc spi.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1120_RVA extends Component.withPins({
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: DGND; power_in. */
  "DGND": "2",
  /** Physical pin 3: AVSS; power_in. */
  "AVSS": "3",
  /** Physical pin 4: AIN3/REFN1; input. */
  "AIN3/REFN1": "4",
  /** Physical pin 5: AIN2; input. */
  "AIN2": "5",
  /** Physical pin 6: REFN0; input. */
  "REFN0": "6",
  /** Physical pin 7: REFP0; input. */
  "REFP0": "7",
  /** Physical pin 8: AIN1; input. */
  "AIN1": "8",
  /** Physical pin 9: AIN0/REFP1; input. */
  "AIN0/REFP1": "9",
  /** Physical pin 10: AVDD; power_in. */
  "AVDD": "10",
  /** Physical pin 11: DVDD; power_in. */
  "DVDD": "11",
  /** Physical pin 12: ~{DRDY}; output. */
  "~{DRDY}": "12",
  /** Physical pin 13: DOUT/~{DRDY}; output. */
  "DOUT/~{DRDY}": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: SCLK; input. */
  "SCLK": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: PAD; passive. */
  "PAD": "17",
}) {
  override schema = "Analog_ADC:ADS1120-RVA";
  override referencePrefix = "U";
}

/**
 * Low-power, quad-input, 24-bit analog to digital converter, integrated temperature sensor, SPI interface, TSSOP-16 package
 *
 * KiCad symbol: `Analog_ADC:ADS1220xPW`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1220.pdf
 * Keywords: adc spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1220xPW extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: AVSS; power_in. */
  "AVSS": "5",
  /** Physical pin 6: AIN3/REFN1; input. */
  "AIN3/REFN1": "6",
  /** Physical pin 7: AIN2; input. */
  "AIN2": "7",
  /** Physical pin 8: REFN0; input. */
  "REFN0": "8",
  /** Physical pin 9: REFP0; input. */
  "REFP0": "9",
  /** Physical pin 10: AIN1; input. */
  "AIN1": "10",
  /** Physical pin 11: AIN0/REFP1; input. */
  "AIN0/REFP1": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD": "13",
  /** Physical pin 14: ~{DRDY}; output. */
  "~{DRDY}": "14",
  /** Physical pin 15: DOUT/~{DRDY}; output. */
  "DOUT/~{DRDY}": "15",
  /** Physical pin 16: DIN; input. */
  "DIN": "16",
}) {
  override schema = "Analog_ADC:ADS1220xPW";
  override referencePrefix = "U";
}

/**
 * Single Bridge 24bit ADC for Sensors, TSSOP-24
 *
 * KiCad symbol: `Analog_ADC:ADS1232IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*.
 * @see http://www.ti.com/lit/ds/symlink/ads1232.pdf
 * Keywords: ADC 24bit Sensors Dual Channel.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1232IPW extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: DGND; power_in. */
  "DGND_2": "2",
  /** Physical pin 3: CLKIN/XTAL1; bidirectional. */
  "CLKIN/XTAL1": "3",
  /** Physical pin 4: XTAL2; bidirectional. */
  "XTAL2": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND_5": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND_6": "6",
  /** Physical pin 7: TEMP; input. */
  "TEMP": "7",
  /** Physical pin 8: A0; input. */
  "A0": "8",
  /** Physical pin 9: CAP; passive. */
  "CAP_9": "9",
  /** Physical pin 10: CAP; passive. */
  "CAP_10": "10",
  /** Physical pin 11: AINP1; input. */
  "AINP1": "11",
  /** Physical pin 12: AINN1; input. */
  "AINN1": "12",
  /** Physical pin 13: AINN2; input. */
  "AINN2": "13",
  /** Physical pin 14: AINP2; input. */
  "AINP2": "14",
  /** Physical pin 15: REFN; input. */
  "REFN": "15",
  /** Physical pin 16: REFP; input. */
  "REFP": "16",
  /** Physical pin 17: AGND; power_in. */
  "AGND": "17",
  /** Physical pin 18: AVDD; power_in. */
  "AVDD": "18",
  /** Physical pin 19: GAIN0; input. */
  "GAIN0": "19",
  /** Physical pin 20: GAIN1; input. */
  "GAIN1": "20",
  /** Physical pin 21: SPEED; input. */
  "SPEED": "21",
  /** Physical pin 22: ~{PWDN}; input. */
  "~{PWDN}": "22",
  /** Physical pin 23: SCLK; input. */
  "SCLK": "23",
  /** Physical pin 24: ~{DRDY}/DOUT; output. */
  "~{DRDY}/DOUT": "24",
}) {
  override schema = "Analog_ADC:ADS1232IPW";
  override referencePrefix = "U";
}

/**
 * Dual Bridge 24bit ADC for Sensors, TSSOP-28
 *
 * KiCad symbol: `Analog_ADC:ADS1234IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*.
 * @see http://www.ti.com/lit/ds/symlink/ads1232.pdf
 * Keywords: ADC 24bit Sensors Quad Channel.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1234IPW extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: DGND; power_in. */
  "DGND_2": "2",
  /** Physical pin 3: CLKIN/XTAL1; bidirectional. */
  "CLKIN/XTAL1": "3",
  /** Physical pin 4: XTAL2; bidirectional. */
  "XTAL2": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND_5": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND_6": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 8: A0; input. */
  "A0": "8",
  /** Physical pin 9: CAP; passive. */
  "CAP_9": "9",
  /** Physical pin 10: CAP; passive. */
  "CAP_10": "10",
  /** Physical pin 11: AINP1; input. */
  "AINP1": "11",
  /** Physical pin 12: AINN1; input. */
  "AINN1": "12",
  /** Physical pin 13: AINP3; input. */
  "AINP3": "13",
  /** Physical pin 14: AINN3; input. */
  "AINN3": "14",
  /** Physical pin 15: AINN4; input. */
  "AINN4": "15",
  /** Physical pin 16: AINP4; input. */
  "AINP4": "16",
  /** Physical pin 17: AINN2; input. */
  "AINN2": "17",
  /** Physical pin 18: AINP2; input. */
  "AINP2": "18",
  /** Physical pin 19: REFN; input. */
  "REFN": "19",
  /** Physical pin 20: REFP; input. */
  "REFP": "20",
  /** Physical pin 21: AGND; power_in. */
  "AGND": "21",
  /** Physical pin 22: AVDD; power_in. */
  "AVDD": "22",
  /** Physical pin 23: GAIN0; input. */
  "GAIN0": "23",
  /** Physical pin 24: GAIN1; input. */
  "GAIN1": "24",
  /** Physical pin 25: SPEED; input. */
  "SPEED": "25",
  /** Physical pin 26: ~{PWDN}; input. */
  "~{PWDN}": "26",
  /** Physical pin 27: SCLK; input. */
  "SCLK": "27",
  /** Physical pin 28: ~{DRDY}/DOUT; output. */
  "~{DRDY}/DOUT": "28",
}) {
  override schema = "Analog_ADC:ADS1234IPW";
  override referencePrefix = "U";
}

/**
 * 24-bit ADC, 8 Channels, SPI compatible, PGA 1 to 128, TSSOP-20
 *
 * KiCad symbol: `Analog_ADC:ADS1243`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1243.pdf
 * Keywords: 24bit ADC 8 Channels PGA SPI.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1243 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: XIN; input. */
  "XIN": "2",
  /** Physical pin 3: XOUT; output. */
  "XOUT": "3",
  /** Physical pin 4: ~{PDWN}; input. */
  "~{PDWN}": "4",
  /** Physical pin 5: VREF+; input. */
  "VREF+": "5",
  /** Physical pin 6: VREF-; input. */
  "VREF-": "6",
  /** Physical pin 7: Ain0/D0; input. */
  "Ain0/D0": "7",
  /** Physical pin 8: Ain1/D1; input. */
  "Ain1/D1": "8",
  /** Physical pin 9: Ain4/D4; input. */
  "Ain4/D4": "9",
  /** Physical pin 10: Ain5/D5; input. */
  "Ain5/D5": "10",
  /** Physical pin 11: Ain6/D6; input. */
  "Ain6/D6": "11",
  /** Physical pin 12: Ain7/D7; input. */
  "Ain7/D7": "12",
  /** Physical pin 13: Ain2/D2; input. */
  "Ain2/D2": "13",
  /** Physical pin 14: Ain3/D3; input. */
  "Ain3/D3": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: DIN; input. */
  "DIN": "17",
  /** Physical pin 18: DOUT; output. */
  "DOUT": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{DRDY}; open_collector. */
  "~{DRDY}": "20",
}) {
  override schema = "Analog_ADC:ADS1243";
  override referencePrefix = "U";
}

/**
 * Single channel 24-bit Analog to Digital Converter, 5V supply, differential input, 20kHz, 2-wire serial interface, SOIC-8
 *
 * KiCad symbol: `Analog_ADC:ADS1251`. Reference prefix: `U`.
 * Footprint filters: SOIC*.
 * @see http://www.ti.com/lit/ds/symlink/ads1251.pdf
 * Keywords: delta-sigma adc low-power.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1251 extends Component.withPins({
  /** Physical pin 1: IN+; input. */
  "IN+": "1",
  /** Physical pin 2: IN-; input. */
  "IN-": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: CLK; input. */
  "CLK": "4",
  /** Physical pin 5: DOUT/nDRDY; output. */
  "DOUT/nDRDY": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VREF; input. */
  "VREF": "8",
}) {
  override schema = "Analog_ADC:ADS1251";
  override referencePrefix = "U";
}

/**
 * 24-bit delta-sigma ADC, Single Channel, 512 kSPS, SPI & Frame-Sync interface, TQFP-32
 *
 * KiCad symbol: `Analog_ADC:ADS127L01xPBS`. Reference prefix: `U`.
 * Footprint filters: *TQFP*5x5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ads127l01.pdf
 * Keywords: Texas-Instruments high-speed 24bit ADS127L01IPBS.
 * Default footprint: Package_QFP:TQFP-32_5x5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS127L01xPBS extends Component.withPins({
  /** Physical pin 1: LVDD; power_in. */
  "LVDD": "1",
  /** Physical pin 2: CAP1; output. */
  "CAP1": "2",
  /** Physical pin 3: AINN; input. */
  "AINN": "3",
  /** Physical pin 4: AINP; input. */
  "AINP": "4",
  /** Physical pin 5: AGND; power_in. */
  "AGND_5": "5",
  /** Physical pin 6: AVDD; power_in. */
  "AVDD_6": "6",
  /** Physical pin 7: REXT; input. */
  "REXT": "7",
  /** Physical pin 8: ~{INTLDO}; input. */
  "~{INTLDO}": "8",
  /** Physical pin 9: REFP; input. */
  "REFP": "9",
  /** Physical pin 10: REFN; input. */
  "REFN": "10",
  /** Physical pin 11: CAP2; output. */
  "CAP2": "11",
  /** Physical pin 12: FILTER1; input. */
  "FILTER1": "12",
  /** Physical pin 13: FILTER0; input. */
  "FILTER0": "13",
  /** Physical pin 14: FSMODE; input. */
  "FSMODE": "14",
  /** Physical pin 15: OSR1; input. */
  "OSR1": "15",
  /** Physical pin 16: OSR0; input. */
  "OSR0": "16",
  /** Physical pin 17: START; input. */
  "START": "17",
  /** Physical pin 18: DAISYIN; input. */
  "DAISYIN": "18",
  /** Physical pin 19: ~{DRDY}/FSYNC; passive. */
  "~{DRDY}/FSYNC": "19",
  /** Physical pin 20: DOUT; output. */
  "DOUT": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: SCLK; input. */
  "SCLK": "22",
  /** Physical pin 23: ~{CS}; input. */
  "~{CS}": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
  /** Physical pin 25: CAP3; output. */
  "CAP3": "25",
  /** Physical pin 26: DGND; power_in. */
  "DGND": "26",
  /** Physical pin 27: DVDD; power_in. */
  "DVDD": "27",
  /** Physical pin 28: ~{RESET}/~{PWDN}; input. */
  "~{RESET}/~{PWDN}": "28",
  /** Physical pin 29: HR; input. */
  "HR": "29",
  /** Physical pin 30: FORMAT; input. */
  "FORMAT": "30",
  /** Physical pin 31: AGND; passive. */
  "AGND_31": "31",
  /** Physical pin 32: AVDD; passive. */
  "AVDD_32": "32",
}) {
  override schema = "Analog_ADC:ADS127L01xPBS";
  override referencePrefix = "U";
}

/**
 * ADS1298 Low-Power, 8-Channel, 24-Bit Analog Front-End for Biopotential Measurements, TQFP-64
 *
 * KiCad symbol: `Analog_ADC:ADS1298xPAG`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads1298.pdf
 * Keywords: 24bit ADC PGA SPI.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1298xPAG extends Component.withPins({
  /** Physical pin 1: IN8N; input. */
  "IN8N": "1",
  /** Physical pin 2: IN8P; input. */
  "IN8P": "2",
  /** Physical pin 3: IN7N; input. */
  "IN7N": "3",
  /** Physical pin 4: IN7P; input. */
  "IN7P": "4",
  /** Physical pin 5: IN6N; input. */
  "IN6N": "5",
  /** Physical pin 6: IN6P; input. */
  "IN6P": "6",
  /** Physical pin 7: IN5N; input. */
  "IN5N": "7",
  /** Physical pin 8: IN5P; input. */
  "IN5P": "8",
  /** Physical pin 9: IN4N; input. */
  "IN4N": "9",
  /** Physical pin 10: IN4P; input. */
  "IN4P": "10",
  /** Physical pin 11: IN3N; input. */
  "IN3N": "11",
  /** Physical pin 12: IN3P; input. */
  "IN3P": "12",
  /** Physical pin 13: IN2N; input. */
  "IN2N": "13",
  /** Physical pin 14: IN2P; input. */
  "IN2P": "14",
  /** Physical pin 15: IN1N; input. */
  "IN1N": "15",
  /** Physical pin 16: IN1P; input. */
  "IN1P": "16",
  /** Physical pin 17: TESTP_PACE_OUT1; bidirectional. */
  "TESTP_PACE_OUT1": "17",
  /** Physical pin 18: TESTP_PACE_OUT2; bidirectional. */
  "TESTP_PACE_OUT2": "18",
  /** Physical pin 19: AVDD; power_in. */
  "AVDD_19": "19",
  /** Physical pin 20: AVSS; power_in. */
  "AVSS_20": "20",
  /** Physical pin 21: AVDD; passive. */
  "AVDD_21": "21",
  /** Physical pin 22: AVDD; passive. */
  "AVDD_22": "22",
  /** Physical pin 23: AVSS; passive. */
  "AVSS_23": "23",
  /** Physical pin 24: VREFP; passive. */
  "VREFP": "24",
  /** Physical pin 25: VREFN; passive. */
  "VREFN": "25",
  /** Physical pin 26: VCAP4; passive. */
  "VCAP4": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: VCAP1; passive. */
  "VCAP1": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: VCAP2; passive. */
  "VCAP2": "30",
  /** Physical pin 31: RESV1; input. */
  "RESV1": "31",
  /** Physical pin 32: AVSS; passive. */
  "AVSS_32": "32",
  /** Physical pin 33: DGND; power_in. */
  "DGND_33": "33",
  /** Physical pin 34: DIN; input. */
  "DIN": "34",
  /** Physical pin 35: ~{PWDN}; input. */
  "~{PWDN}": "35",
  /** Physical pin 36: ~{RESET}; input. */
  "~{RESET}": "36",
  /** Physical pin 37: CLK; bidirectional. */
  "CLK": "37",
  /** Physical pin 38: START; input. */
  "START": "38",
  /** Physical pin 39: ~{CS}; input. */
  "~{CS}": "39",
  /** Physical pin 40: SCLK; input. */
  "SCLK": "40",
  /** Physical pin 41: DAISY_IN; input. */
  "DAISY_IN": "41",
  /** Physical pin 42: GPIO1; bidirectional. */
  "GPIO1": "42",
  /** Physical pin 43: DOUT; output. */
  "DOUT": "43",
  /** Physical pin 44: GPIO2; bidirectional. */
  "GPIO2": "44",
  /** Physical pin 45: GPIO3; bidirectional. */
  "GPIO3": "45",
  /** Physical pin 46: GPIO4; bidirectional. */
  "GPIO4": "46",
  /** Physical pin 47: ~{DRDY}; output. */
  "~{DRDY}": "47",
  /** Physical pin 48: DVDD; power_in. */
  "DVDD_48": "48",
  /** Physical pin 49: DGND; passive. */
  "DGND_49": "49",
  /** Physical pin 50: DVDD; passive. */
  "DVDD_50": "50",
  /** Physical pin 51: DGND; passive. */
  "DGND_51": "51",
  /** Physical pin 52: CLKSEL; input. */
  "CLKSEL": "52",
  /** Physical pin 53: AVSS1; power_in. */
  "AVSS1": "53",
  /** Physical pin 54: AVDD1; power_in. */
  "AVDD1": "54",
  /** Physical pin 55: VCAP3; passive. */
  "VCAP3": "55",
  /** Physical pin 56: AVDD; passive. */
  "AVDD_56": "56",
  /** Physical pin 57: AVSS; passive. */
  "AVSS_57": "57",
  /** Physical pin 58: AVSS; passive. */
  "AVSS_58": "58",
  /** Physical pin 59: AVDD; passive. */
  "AVDD_59": "59",
  /** Physical pin 60: RLDREF; input. */
  "RLDREF": "60",
  /** Physical pin 61: RLDINV; input. */
  "RLDINV": "61",
  /** Physical pin 62: RLDIN; input. */
  "RLDIN": "62",
  /** Physical pin 63: RLDOUT; output. */
  "RLDOUT": "63",
  /** Physical pin 64: WCT; output. */
  "WCT": "64",
}) {
  override schema = "Analog_ADC:ADS1298xPAG";
  override referencePrefix = "U";
}

/**
 * Low-Noise, 8-channel, 24-bit ADC for EEG and Biopotential Measurements, TQFP-64
 *
 * KiCad symbol: `Analog_ADC:ADS1299`. Reference prefix: `U`.
 * Footprint filters: *TQFP*10x10mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ads1299.pdf
 * Keywords: Texas-Instruments 24bit PGA SPI.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS1299 extends Component.withPins({
  /** Physical pin 1: IN8N; input. */
  "IN8N": "1",
  /** Physical pin 2: IN8P; input. */
  "IN8P": "2",
  /** Physical pin 3: IN7N; input. */
  "IN7N": "3",
  /** Physical pin 4: IN7P; input. */
  "IN7P": "4",
  /** Physical pin 5: IN6N; input. */
  "IN6N": "5",
  /** Physical pin 6: IN6P; input. */
  "IN6P": "6",
  /** Physical pin 7: IN5N; input. */
  "IN5N": "7",
  /** Physical pin 8: IN5P; input. */
  "IN5P": "8",
  /** Physical pin 9: IN4N; input. */
  "IN4N": "9",
  /** Physical pin 10: IN4P; input. */
  "IN4P": "10",
  /** Physical pin 11: IN3N; input. */
  "IN3N": "11",
  /** Physical pin 12: IN3P; input. */
  "IN3P": "12",
  /** Physical pin 13: IN2N; input. */
  "IN2N": "13",
  /** Physical pin 14: IN2P; input. */
  "IN2P": "14",
  /** Physical pin 15: IN1N; input. */
  "IN1N": "15",
  /** Physical pin 16: IN1P; input. */
  "IN1P": "16",
  /** Physical pin 17: SRB1; bidirectional. */
  "SRB1": "17",
  /** Physical pin 18: SRB2; bidirectional. */
  "SRB2": "18",
  /** Physical pin 19: AVDD; power_in. */
  "AVDD_19": "19",
  /** Physical pin 20: AVSS; power_in. */
  "AVSS_20": "20",
  /** Physical pin 21: AVDD; passive. */
  "AVDD_21": "21",
  /** Physical pin 22: AVDD; passive. */
  "AVDD_22": "22",
  /** Physical pin 23: AVSS; passive. */
  "AVSS_23": "23",
  /** Physical pin 24: VREFP; passive. */
  "VREFP": "24",
  /** Physical pin 25: VREFN; passive. */
  "VREFN": "25",
  /** Physical pin 26: VCAP4; passive. */
  "VCAP4": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: VCAP1; passive. */
  "VCAP1": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: VCAP2; passive. */
  "VCAP2": "30",
  /** Physical pin 31: RESV1; input. */
  "RESV1": "31",
  /** Physical pin 32: AVSS; passive. */
  "AVSS_32": "32",
  /** Physical pin 33: DGND; power_in. */
  "DGND_33": "33",
  /** Physical pin 34: DIN; input. */
  "DIN": "34",
  /** Physical pin 35: ~{PWDN}; input. */
  "~{PWDN}": "35",
  /** Physical pin 36: ~{RESET}; input. */
  "~{RESET}": "36",
  /** Physical pin 37: CLK; input. */
  "CLK": "37",
  /** Physical pin 38: START; input. */
  "START": "38",
  /** Physical pin 39: ~{CS}; input. */
  "~{CS}": "39",
  /** Physical pin 40: SCLK; input. */
  "SCLK": "40",
  /** Physical pin 41: DAISY_IN; input. */
  "DAISY_IN": "41",
  /** Physical pin 42: GPIO1; bidirectional. */
  "GPIO1": "42",
  /** Physical pin 43: DOUT; tri_state. */
  "DOUT": "43",
  /** Physical pin 44: GPIO2; bidirectional. */
  "GPIO2": "44",
  /** Physical pin 45: GPIO3; bidirectional. */
  "GPIO3": "45",
  /** Physical pin 46: GPIO4; bidirectional. */
  "GPIO4": "46",
  /** Physical pin 47: ~{DRDY}; output. */
  "~{DRDY}": "47",
  /** Physical pin 48: DVDD; power_in. */
  "DVDD_48": "48",
  /** Physical pin 49: DGND; passive. */
  "DGND_49": "49",
  /** Physical pin 50: DVDD; passive. */
  "DVDD_50": "50",
  /** Physical pin 51: DGND; passive. */
  "DGND_51": "51",
  /** Physical pin 52: CLKSEL; input. */
  "CLKSEL": "52",
  /** Physical pin 53: AVSS1; power_in. */
  "AVSS1": "53",
  /** Physical pin 54: AVDD1; power_in. */
  "AVDD1": "54",
  /** Physical pin 55: VCAP3; passive. */
  "VCAP3": "55",
  /** Physical pin 56: AVDD; passive. */
  "AVDD_56": "56",
  /** Physical pin 57: AVSS; passive. */
  "AVSS_57": "57",
  /** Physical pin 58: AVSS; passive. */
  "AVSS_58": "58",
  /** Physical pin 59: AVDD; passive. */
  "AVDD_59": "59",
  /** Physical pin 60: BIASREF; input. */
  "BIASREF": "60",
  /** Physical pin 61: BIASINV; input. */
  "BIASINV": "61",
  /** Physical pin 62: BIASIN; input. */
  "BIASIN": "62",
  /** Physical pin 63: BIASOUT; output. */
  "BIASOUT": "63",
  /** Physical pin 64: RESERVED; output. */
  "RESERVED": "64",
}) {
  override schema = "Analog_ADC:ADS1299";
  override referencePrefix = "U";
}

/**
 * 4-Channel, 24-bit, simultaneous sampling Delta-Sigma ADC, 64kSPS, G=1..128 PGA, SPI interface, integrated 1.2V reference, TSSOP-20
 *
 * KiCad symbol: `Analog_ADC:ADS131M04xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ads131m04.pdf
 * Keywords: Texas-Instruments quad analog-digital converter low-power.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS131M04xPW extends Component.withPins({
  /** Physical pin 5: AIN1N; input. */
  "AIN1N": "5",
  /** Physical pin 15: DOUT; tri_state. */
  "DOUT": "15",
  /** Physical pin 16: DIN; input. */
  "DIN": "16",
  /** Physical pin 17: CLKIN; input. */
  "CLKIN": "17",
  /** Physical pin 18: CAP; passive. */
  "CAP": "18",
  /** Physical pin 19: DGND; power_in. */
  "DGND": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD": "20",
  /** Physical pin 1: AVDD; power_in. */
  "AVDD": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND": "2",
  /** Physical pin 3: AIN0P; input. */
  "AIN0P": "3",
  /** Physical pin 4: AIN0N; input. */
  "AIN0N": "4",
  /** Physical pin 6: AIN1P; input. */
  "AIN1P": "6",
  /** Physical pin 7: AIN2P; input. */
  "AIN2P": "7",
  /** Physical pin 8: AIN2N; input. */
  "AIN2N": "8",
  /** Physical pin 9: AIN3N; input. */
  "AIN3N": "9",
  /** Physical pin 10: AIN3P; input. */
  "AIN3P": "10",
  /** Physical pin 11: ~{SYNC}/~{RESET}; input. */
  "~{SYNC}/~{RESET}": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: ~{DRDY}; output. */
  "~{DRDY}": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
}) {
  override schema = "Analog_ADC:ADS131M04xPW";
  override referencePrefix = "U";
}

/**
 * 8-channel, 24-bit, simultaneous sampling Delta-Sigma ADC, 32kSPS, G=1..128 PGA, SPI interface, integrated 1.2V reference, TQFP-32 (Texas PBS / S-PQFP-G32)
 *
 * KiCad symbol: `Analog_ADC:ADS131M08xPBS`. Reference prefix: `U`.
 * Footprint filters: *TQFP*5x5mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ads131m08.pdf
 * Keywords: Texas-Instruments analog-digital-converter.
 * Default footprint: Package_QFP:TQFP-32_5x5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS131M08xPBS extends Component.withPins({
  /** Physical pin 1: AIN2P; input. */
  "AIN2P": "1",
  /** Physical pin 2: AIN2N; input. */
  "AIN2N": "2",
  /** Physical pin 3: AIN3N; input. */
  "AIN3N": "3",
  /** Physical pin 4: AIN3P; input. */
  "AIN3P": "4",
  /** Physical pin 5: AIN4P; input. */
  "AIN4P": "5",
  /** Physical pin 6: AIN4N; input. */
  "AIN4N": "6",
  /** Physical pin 7: AIN5N; input. */
  "AIN5N": "7",
  /** Physical pin 8: AIN5P; input. */
  "AIN5P": "8",
  /** Physical pin 9: AIN6P; input. */
  "AIN6P": "9",
  /** Physical pin 10: AIN6N; input. */
  "AIN6N": "10",
  /** Physical pin 11: AIN7N; input. */
  "AIN7N": "11",
  /** Physical pin 12: AIN7P; input. */
  "AIN7P": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND_13": "13",
  /** Physical pin 14: REFIN; input. */
  "REFIN": "14",
  /** Physical pin 15: AVDD; power_in. */
  "AVDD": "15",
  /** Physical pin 16: ~{SYNC}/~{RESET}; input. */
  "~{SYNC}/~{RESET}": "16",
  /** Physical pin 17: ~{CS}; input. */
  "~{CS}": "17",
  /** Physical pin 18: ~{DRDY}; output. */
  "~{DRDY}": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: DOUT; tri_state. */
  "DOUT": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: XTAL2; output. */
  "XTAL2": "22",
  /** Physical pin 23: XTAL1/CLKIN; input. */
  "XTAL1/CLKIN": "23",
  /** Physical pin 24: CAP; passive. */
  "CAP": "24",
  /** Physical pin 25: DGND; power_in. */
  "DGND": "25",
  /** Physical pin 26: DVDD; power_in. */
  "DVDD": "26",
  /** Physical pin 27: AGND; passive. */
  "AGND_27": "27",
  /** Physical pin 28: AGND; passive. */
  "AGND_28": "28",
  /** Physical pin 29: AIN0P; input. */
  "AIN0P": "29",
  /** Physical pin 30: AIN0N; input. */
  "AIN0N": "30",
  /** Physical pin 31: AIN1N; input. */
  "AIN1N": "31",
  /** Physical pin 32: AIN1P; input. */
  "AIN1P": "32",
}) {
  override schema = "Analog_ADC:ADS131M08xPBS";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Power, Ultra-Small Size, 8-Bit, 1-MSPS, SAR ADC
 *
 * KiCad symbol: `Analog_ADC:ADS7040xDCU`. Reference prefix: `U`.
 * Footprint filters: VSSOP*8*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7040.pdf
 * Keywords: 8 bit SAR ADC.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7040xDCU extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: AINM; input. */
  "AINM": "5",
  /** Physical pin 6: AINP; input. */
  "AINP": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_ADC:ADS7040xDCU";
  override referencePrefix = "U";
}

/**
 * Small-Size, Low-Power, 8-Bit, 2-MSPS, SAR ADC
 *
 * KiCad symbol: `Analog_ADC:ADS7029`. Reference prefix: `U`.
 * Footprint filters: VSSOP*8*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7029-q1.pdf
 * Keywords: 8 bit SAR ADC.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7029 extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: AINM; input. */
  "AINM": "5",
  /** Physical pin 6: AINP; input. */
  "AINP": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_ADC:ADS7029";
  override referencePrefix = "U";
}

/**
 * Small-Size, Low-Power, 10-Bit, 2-MSPS, SAR ADC
 *
 * KiCad symbol: `Analog_ADC:ADS7039`. Reference prefix: `U`.
 * Footprint filters: VSSOP*8*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7039-q1.pdf
 * Keywords: 10 bit SAR ADC.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7039 extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: AINM; input. */
  "AINM": "5",
  /** Physical pin 6: AINP; input. */
  "AINP": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_ADC:ADS7039";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Power, Ultra-Small Size, 10-Bit, 1-MSPS, SAR ADC
 *
 * KiCad symbol: `Analog_ADC:ADS7041xDCU`. Reference prefix: `U`.
 * Footprint filters: VSSOP*8*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7041.pdf
 * Keywords: 10 bit SAR ADC.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7041xDCU extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: AINM; input. */
  "AINM": "5",
  /** Physical pin 6: AINP; input. */
  "AINP": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_ADC:ADS7041xDCU";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Power, Ultra-Small Size, 12-Bit, 1-MSPS, SAR ADC
 *
 * KiCad symbol: `Analog_ADC:ADS7042xDCU`. Reference prefix: `U`.
 * Footprint filters: VSSOP*8*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7042.pdf
 * Keywords: 12 bit SAR ADC.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7042xDCU extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: AINM; input. */
  "AINM": "5",
  /** Physical pin 6: AINP; input. */
  "AINP": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_ADC:ADS7042xDCU";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Power, Ultra-Small Size, 12-Bit, 1-MSPS, SAR ADC
 *
 * KiCad symbol: `Analog_ADC:ADS7043xDCU`. Reference prefix: `U`.
 * Footprint filters: VSSOP*8*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7043.pdf
 * Keywords: 12 bit SAR ADC.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7043xDCU extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: AINM; input. */
  "AINM": "5",
  /** Physical pin 6: AINP; input. */
  "AINP": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_ADC:ADS7043xDCU";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Power, Ultra-Small Size, 12-Bit, 1-MSPS, SAR ADC
 *
 * KiCad symbol: `Analog_ADC:ADS7044xDCU`. Reference prefix: `U`.
 * Footprint filters: VSSOP*8*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7044.pdf
 * Keywords: 12 bit SAR ADC.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7044xDCU extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: AINM; input. */
  "AINM": "5",
  /** Physical pin 6: AINP; input. */
  "AINP": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_ADC:ADS7044xDCU";
  override referencePrefix = "U";
}

/**
 * Small-Size, Low-Power, 12-Bit, 2-MSPS, SAR ADC
 *
 * KiCad symbol: `Analog_ADC:ADS7049`. Reference prefix: `U`.
 * Footprint filters: VSSOP*8*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7049-q1.pdf
 * Keywords: 12 bit SAR ADC.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7049 extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: AINM; input. */
  "AINM": "5",
  /** Physical pin 6: AINP; input. */
  "AINP": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Analog_ADC:ADS7049";
  override referencePrefix = "U";
}

/**
 * 12-Bits, 8-Channels, ADC, I2C, TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:ADS7828`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7828.pdf
 * Keywords: I2C ADC 12Bits.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7828 extends Component.withPins({
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
  /** Physical pin 10: REF; bidirectional. */
  "REF": "10",
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
  override schema = "Analog_ADC:ADS7828";
  override referencePrefix = "U";
}

/**
 * Single Channel 12-bit ADC, 100-200 ksps, SPI, micro-power, SOT-23-6
 *
 * KiCad symbol: `Analog_ADC:ADS7866`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ads7866.pdf
 * Keywords: Texas-Instruments Burr-Brown.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7866 extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7866";
  override referencePrefix = "U";
}

/**
 * Single Channel 10-bit ADC, 100-200 ksps, SPI, micro-power, SOT-23-6
 *
 * KiCad symbol: `Analog_ADC:ADS7867`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ads7866.pdf
 * Keywords: Texas-Instruments Burr-Brown.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7867 extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7867";
  override referencePrefix = "U";
}

/**
 * Single Channel 8-bit ADC, 100-200 ksps, SPI interface, micro-power, SOT-23-6
 *
 * KiCad symbol: `Analog_ADC:ADS7868`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ads7866.pdf
 * Keywords: Texas-Instruments Burr-Brown.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7868 extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7868";
  override referencePrefix = "U";
}

/**
 * Single Channel 12-bit ADC, 1Msps, SPI, micro-power, SOT-23-6
 *
 * KiCad symbol: `Analog_ADC:ADS7886xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ads7886.pdf
 * Keywords: Texas-Instruments ADS7886SDBV ADS7886SBDBV.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7886xxDBV extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7886xxDBV";
  override referencePrefix = "U";
}

/**
 * Single Channel 12-bit ADC, 1Msps, SPI, micro-power, SC-70
 *
 * KiCad symbol: `Analog_ADC:ADS7886xxDCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.ti.com/lit/ds/symlink/ads7886.pdf
 * Keywords: Texas-Instruments ADS7886SDCK ADS7886SBDCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7886xxDCK extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7886xxDCK";
  override referencePrefix = "U";
}

/**
 * Single Channel 10-bit ADC, 1.25Msps, SPI, micro-power, SOT-23-6
 *
 * KiCad symbol: `Analog_ADC:ADS7887xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ads7887.pdf
 * Keywords: Texas-Instruments ADS7887SDBV.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7887xDBV extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7887xDBV";
  override referencePrefix = "U";
}

/**
 * Single Channel 10-bit ADC, 1.25Msps, SPI, micro-power, SC-70
 *
 * KiCad symbol: `Analog_ADC:ADS7887xDCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.ti.com/lit/ds/symlink/ads7887.pdf
 * Keywords: Texas-Instruments ADS7887SDCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7887xDCK extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7887xDCK";
  override referencePrefix = "U";
}

/**
 * Single Channel 8-bit ADC, 1.25Msps, SPI, micro-power, SOT-23-6
 *
 * KiCad symbol: `Analog_ADC:ADS7888xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ads7887.pdf
 * Keywords: Texas-Instruments ADS7888SDBV.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7888xDBV extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7888xDBV";
  override referencePrefix = "U";
}

/**
 * Single Channel 8-bit ADC, 1.25Msps, SPI, micro-power, SC-70
 *
 * KiCad symbol: `Analog_ADC:ADS7888xDCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.ti.com/lit/ds/symlink/ads7887.pdf
 * Keywords: Texas-Instruments ADS7888SDCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7888xDCK extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIN; input. */
  "VIN": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDO; tri_state. */
  "SDO": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
}) {
  override schema = "Analog_ADC:ADS7888xDCK";
  override referencePrefix = "U";
}

/**
 * 16-Bit, High-Speed, Single-Supply, SAR ADC Data Acquisition System with Programmable, Bipolar Input Ranges, 1MSPS, QFN-16
 *
 * KiCad symbol: `Analog_ADC:ADS8681RUM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads8681.pdf
 * Keywords: ADC SPI analog digital.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS8681RUM extends Component.withPins({
  /** Physical pin 1: AGND; power_in. */
  "AGND": "1",
  /** Physical pin 2: REFIO; passive. */
  "REFIO": "2",
  /** Physical pin 3: REFGND; power_in. */
  "REFGND": "3",
  /** Physical pin 4: REFCAP; power_in. */
  "REFCAP": "4",
  /** Physical pin 5: AIN_P; input. */
  "AIN_P": "5",
  /** Physical pin 6: AIN_GND; input. */
  "AIN_GND": "6",
  /** Physical pin 7: ~{RST}; input. */
  "~{RST}": "7",
  /** Physical pin 8: SDI; input. */
  "SDI": "8",
  /** Physical pin 9: CONVST/~{CS}; input. */
  "CONVST/~{CS}": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: SDO-0; tri_state. */
  "SDO-0": "11",
  /** Physical pin 12: SDO-1; tri_state. */
  "SDO-1": "12",
  /** Physical pin 13: RVS; output. */
  "RVS": "13",
  /** Physical pin 14: DVDD; power_in. */
  "DVDD": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 16: AVDD; power_in. */
  "AVDD": "16",
  /** Physical pin 17: PAD; power_in. */
  "PAD": "17",
}) {
  override schema = "Analog_ADC:ADS8681RUM";
  override referencePrefix = "U";
}

/**
 * 16-Bit, 500-kSPS, 4-Channels, Single-Supply, SAR ADC with Bipolar Input Range, TSSOP-38
 *
 * KiCad symbol: `Analog_ADC:ADS8684`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads8688.pdf
 * Keywords: adc analog digital spi bipolar input.
 * Default footprint: Package_SO:TSSOP-38_4.4x9.7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS8684 extends Component.withPins({
  /** Physical pin 1: SDI; input. */
  "SDI": "1",
  /** Physical pin 2: ~{RST/PD}; input. */
  "~{RST/PD}": "2",
  /** Physical pin 3: DAISY; input. */
  "DAISY": "3",
  /** Physical pin 4: ~{REFSEL}; input. */
  "~{REFSEL}": "4",
  /** Physical pin 5: REFIO; passive. */
  "REFIO": "5",
  /** Physical pin 6: REFGND; power_in. */
  "REFGND": "6",
  /** Physical pin 7: REFCAP; passive. */
  "REFCAP": "7",
  /** Physical pin 8: AGND; power_in. */
  "AGND_8": "8",
  /** Physical pin 9: AVDD; power_in. */
  "AVDD_9": "9",
  /** Physical pin 10: AUX_IN; input. */
  "AUX_IN": "10",
  /** Physical pin 11: AUX_GND; input. */
  "AUX_GND": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: AIN_0P; input. */
  "AIN_0P": "16",
  /** Physical pin 17: AIN_0GND; input. */
  "AIN_0GND": "17",
  /** Physical pin 18: AIN_1P; input. */
  "AIN_1P": "18",
  /** Physical pin 19: AIN_1GND; input. */
  "AIN_1GND": "19",
  /** Physical pin 20: AIN_2GND; input. */
  "AIN_2GND": "20",
  /** Physical pin 21: AIN_2P; input. */
  "AIN_2P": "21",
  /** Physical pin 22: AIN_3GND; input. */
  "AIN_3GND": "22",
  /** Physical pin 23: AIN_3P; input. */
  "AIN_3P": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: AGND; passive. */
  "AGND_28": "28",
  /** Physical pin 29: AGND; passive. */
  "AGND_29": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD_30": "30",
  /** Physical pin 31: AGND; passive. */
  "AGND_31": "31",
  /** Physical pin 32: AGND; passive. */
  "AGND_32": "32",
  /** Physical pin 33: DGND; power_in. */
  "DGND": "33",
  /** Physical pin 34: DVDD; power_in. */
  "DVDD": "34",
  /** Physical pin 35: DNC; no_connect. */
  "DNC": "35",
  /** Physical pin 36: SDO; output. */
  "SDO": "36",
  /** Physical pin 37: SCLK; input. */
  "SCLK": "37",
  /** Physical pin 38: ~{CS}; input. */
  "~{CS}": "38",
}) {
  override schema = "Analog_ADC:ADS8684";
  override referencePrefix = "U";
}

/**
 * 16-Bit, High-Speed, Single-Supply, SAR ADC Data Acquisition System with Programmable, Bipolar Input Ranges 500KSPS, QFN-16
 *
 * KiCad symbol: `Analog_ADC:ADS8685RUM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads8681.pdf
 * Keywords: ADC SPI analog digital.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS8685RUM extends Component.withPins({
  /** Physical pin 1: AGND; power_in. */
  "AGND": "1",
  /** Physical pin 2: REFIO; passive. */
  "REFIO": "2",
  /** Physical pin 3: REFGND; power_in. */
  "REFGND": "3",
  /** Physical pin 4: REFCAP; power_in. */
  "REFCAP": "4",
  /** Physical pin 5: AIN_P; input. */
  "AIN_P": "5",
  /** Physical pin 6: AIN_GND; input. */
  "AIN_GND": "6",
  /** Physical pin 7: ~{RST}; input. */
  "~{RST}": "7",
  /** Physical pin 8: SDI; input. */
  "SDI": "8",
  /** Physical pin 9: CONVST/~{CS}; input. */
  "CONVST/~{CS}": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: SDO-0; tri_state. */
  "SDO-0": "11",
  /** Physical pin 12: SDO-1; tri_state. */
  "SDO-1": "12",
  /** Physical pin 13: RVS; output. */
  "RVS": "13",
  /** Physical pin 14: DVDD; power_in. */
  "DVDD": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 16: AVDD; power_in. */
  "AVDD": "16",
  /** Physical pin 17: PAD; power_in. */
  "PAD": "17",
}) {
  override schema = "Analog_ADC:ADS8685RUM";
  override referencePrefix = "U";
}

/**
 * 16-Bit, 500-kSPS, 8-Channels, Single-Supply, SAR ADC with Bipolar Input Range, TSSOP-38
 *
 * KiCad symbol: `Analog_ADC:ADS8688`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads8688.pdf
 * Keywords: adc analog digital spi bipolar input.
 * Default footprint: Package_SO:TSSOP-38_4.4x9.7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS8688 extends Component.withPins({
  /** Physical pin 1: SDI; input. */
  "SDI": "1",
  /** Physical pin 2: ~{RST/PD}; input. */
  "~{RST/PD}": "2",
  /** Physical pin 3: DAISY; input. */
  "DAISY": "3",
  /** Physical pin 4: ~{REFSEL}; input. */
  "~{REFSEL}": "4",
  /** Physical pin 5: REFIO; passive. */
  "REFIO": "5",
  /** Physical pin 6: REFGND; power_in. */
  "REFGND": "6",
  /** Physical pin 7: REFCAP; passive. */
  "REFCAP": "7",
  /** Physical pin 8: AGND; power_in. */
  "AGND_8": "8",
  /** Physical pin 9: AVDD; power_in. */
  "AVDD_9": "9",
  /** Physical pin 10: AUX_IN; input. */
  "AUX_IN": "10",
  /** Physical pin 11: AUX_GND; input. */
  "AUX_GND": "11",
  /** Physical pin 12: AIN_6P; input. */
  "AIN_6P": "12",
  /** Physical pin 13: AIN_6GND; input. */
  "AIN_6GND": "13",
  /** Physical pin 14: AIN_7P; input. */
  "AIN_7P": "14",
  /** Physical pin 15: AIN_7GND; input. */
  "AIN_7GND": "15",
  /** Physical pin 16: AIN_0P; input. */
  "AIN_0P": "16",
  /** Physical pin 17: AIN_0GND; input. */
  "AIN_0GND": "17",
  /** Physical pin 18: AIN_1P; input. */
  "AIN_1P": "18",
  /** Physical pin 19: AIN_1GND; input. */
  "AIN_1GND": "19",
  /** Physical pin 20: AIN_2GND; input. */
  "AIN_2GND": "20",
  /** Physical pin 21: AIN_2P; input. */
  "AIN_2P": "21",
  /** Physical pin 22: AIN_3GND; input. */
  "AIN_3GND": "22",
  /** Physical pin 23: AIN_3P; input. */
  "AIN_3P": "23",
  /** Physical pin 24: AIN_4GND; input. */
  "AIN_4GND": "24",
  /** Physical pin 25: AIN_4P; input. */
  "AIN_4P": "25",
  /** Physical pin 26: AIN_5GND; input. */
  "AIN_5GND": "26",
  /** Physical pin 27: AIN_5P; input. */
  "AIN_5P": "27",
  /** Physical pin 28: AGND; passive. */
  "AGND_28": "28",
  /** Physical pin 29: AGND; passive. */
  "AGND_29": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD_30": "30",
  /** Physical pin 31: AGND; passive. */
  "AGND_31": "31",
  /** Physical pin 32: AGND; passive. */
  "AGND_32": "32",
  /** Physical pin 33: DGND; power_in. */
  "DGND": "33",
  /** Physical pin 34: DVDD; power_in. */
  "DVDD": "34",
  /** Physical pin 35: DNC; no_connect. */
  "DNC": "35",
  /** Physical pin 36: SDO; output. */
  "SDO": "36",
  /** Physical pin 37: SCLK; input. */
  "SCLK": "37",
  /** Physical pin 38: ~{CS}; input. */
  "~{CS}": "38",
}) {
  override schema = "Analog_ADC:ADS8688";
  override referencePrefix = "U";
}

/**
 * 16-Bit, High-Speed, Single-Supply, SAR ADC Data Acquisition System with Programmable, Bipolar Input Ranges, 100KSPS, QFN-16
 *
 * KiCad symbol: `Analog_ADC:ADS8689RUM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads8681.pdf
 * Keywords: ADC SPI analog digital.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS8689RUM extends Component.withPins({
  /** Physical pin 1: AGND; power_in. */
  "AGND": "1",
  /** Physical pin 2: REFIO; passive. */
  "REFIO": "2",
  /** Physical pin 3: REFGND; power_in. */
  "REFGND": "3",
  /** Physical pin 4: REFCAP; power_in. */
  "REFCAP": "4",
  /** Physical pin 5: AIN_P; input. */
  "AIN_P": "5",
  /** Physical pin 6: AIN_GND; input. */
  "AIN_GND": "6",
  /** Physical pin 7: ~{RST}; input. */
  "~{RST}": "7",
  /** Physical pin 8: SDI; input. */
  "SDI": "8",
  /** Physical pin 9: CONVST/~{CS}; input. */
  "CONVST/~{CS}": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: SDO-0; tri_state. */
  "SDO-0": "11",
  /** Physical pin 12: SDO-1; tri_state. */
  "SDO-1": "12",
  /** Physical pin 13: RVS; output. */
  "RVS": "13",
  /** Physical pin 14: DVDD; power_in. */
  "DVDD": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 16: AVDD; power_in. */
  "AVDD": "16",
  /** Physical pin 17: PAD; power_in. */
  "PAD": "17",
}) {
  override schema = "Analog_ADC:ADS8689RUM";
  override referencePrefix = "U";
}

/**
 * Reinforced Isolated Delta-Sigma Modulator With Integrated DC/DC Converter, SOIC-16W
 *
 * KiCad symbol: `Analog_ADC:AMC3336`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/amc3336.pdf
 * Keywords: isolated adc delta sigma integrated power supply.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AMC3336 extends Component.withPins({
  /** Physical pin 1: DCDC_OUT; power_out. */
  "DCDC_OUT": "1",
  /** Physical pin 2: DCDC_HGND; power_out. */
  "DCDC_HGND": "2",
  /** Physical pin 3: HLDO_IN; power_in. */
  "HLDO_IN": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: HLDO_OUT; power_out. */
  "HLDO_OUT": "5",
  /** Physical pin 6: INP; input. */
  "INP": "6",
  /** Physical pin 7: INN; input. */
  "INN": "7",
  /** Physical pin 8: HGND; power_in. */
  "HGND": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: DOUT; output. */
  "DOUT": "10",
  /** Physical pin 11: CLKIN; input. */
  "CLKIN": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
  /** Physical pin 13: LDO_OUT; power_out. */
  "LDO_OUT": "13",
  /** Physical pin 14: DIAG; output. */
  "DIAG": "14",
  /** Physical pin 15: DCDC_GND; power_in. */
  "DCDC_GND": "15",
  /** Physical pin 16: DCDC_IN; power_in. */
  "DCDC_IN": "16",
}) {
  override schema = "Analog_ADC:AMC3336";
  override referencePrefix = "U";
}

/**
 * Convertisseur A->D 6 bits rapide
 *
 * KiCad symbol: `Analog_ADC:CA3300`. Reference prefix: `U`.
 * Keywords: ADC CAN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CA3300 extends Component.withPins({
  /** Physical pin 1: D5; tri_state. */
  "D5": "1",
  /** Physical pin 2: OVF; tri_state. */
  "OVF": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: ZEN; input. */
  "ZEN": "4",
  /** Physical pin 5: CE2; input. */
  "CE2": "5",
  /** Physical pin 6: CE1; input. */
  "CE1": "6",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 8: PHAS; input. */
  "PHAS": "8",
  /** Physical pin 9: +REF; input. */
  "+REF": "9",
  /** Physical pin 10: -REF; input. */
  "-REF": "10",
  /** Physical pin 11: VIN; input. */
  "VIN": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: D0; tri_state. */
  "D0": "13",
  /** Physical pin 14: D1; tri_state. */
  "D1": "14",
  /** Physical pin 15: D2; tri_state. */
  "D2": "15",
  /** Physical pin 16: CREF; input. */
  "CREF": "16",
  /** Physical pin 17: D3; tri_state. */
  "D3": "17",
  /** Physical pin 18: D4; tri_state. */
  "D4": "18",
}) {
  override schema = "Analog_ADC:CA3300";
  override referencePrefix = "U";
}

/**
 * 24-bit Analog-to-Digital Converter (ADC) for Weight Scales, SOIC-16 (SOP-16)
 *
 * KiCad symbol: `Analog_ADC:HX711`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x9.9mm*P1.27mm*.
 * @see https://web.archive.org/web/20220615044707/https://akizukidenshi.com/download/ds/avia/hx711.pdf
 * Keywords: load-cell 24-bits.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HX711 extends Component.withPins({
  /** Physical pin 1: VSUP; power_in. */
  "VSUP": "1",
  /** Physical pin 2: BASE; passive. */
  "BASE": "2",
  /** Physical pin 3: AVDD; power_in. */
  "AVDD": "3",
  /** Physical pin 4: VFB; input. */
  "VFB": "4",
  /** Physical pin 5: AGND; power_in. */
  "AGND": "5",
  /** Physical pin 6: VBG; passive. */
  "VBG": "6",
  /** Physical pin 7: INA-; input. */
  "INA-": "7",
  /** Physical pin 8: INA+; input. */
  "INA+": "8",
  /** Physical pin 9: INB-; input. */
  "INB-": "9",
  /** Physical pin 10: INB+; input. */
  "INB+": "10",
  /** Physical pin 11: PD_SCK; input. */
  "PD_SCK": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: XO; passive. */
  "XO": "13",
  /** Physical pin 14: XI; passive. */
  "XI": "14",
  /** Physical pin 15: RATE; input. */
  "RATE": "15",
  /** Physical pin 16: DVDD; power_in. */
  "DVDD": "16",
}) {
  override schema = "Analog_ADC:HX711";
  override referencePrefix = "U";
}

/**
 * 3 1/2 Digit, LCD Display, A/D Converter, DIP-40
 *
 * KiCad symbol: `Analog_ADC:ICL7106CPL`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see https://www.renesas.com/eu/en/www/doc/datasheet/icl7106-07-07s.pdf
 * Keywords: LCD ADC.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICL7106CPL extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: D1; output. */
  "D1": "2",
  /** Physical pin 3: C1; output. */
  "C1": "3",
  /** Physical pin 4: B1; output. */
  "B1": "4",
  /** Physical pin 5: A1; output. */
  "A1": "5",
  /** Physical pin 6: F1; output. */
  "F1": "6",
  /** Physical pin 7: G1; output. */
  "G1": "7",
  /** Physical pin 8: E1; output. */
  "E1": "8",
  /** Physical pin 9: D2; output. */
  "D2": "9",
  /** Physical pin 10: C2; output. */
  "C2": "10",
  /** Physical pin 11: B2; output. */
  "B2": "11",
  /** Physical pin 12: A2; output. */
  "A2": "12",
  /** Physical pin 13: F2; output. */
  "F2": "13",
  /** Physical pin 14: E2; output. */
  "E2": "14",
  /** Physical pin 15: D3; output. */
  "D3": "15",
  /** Physical pin 16: B3; output. */
  "B3": "16",
  /** Physical pin 17: F3; output. */
  "F3": "17",
  /** Physical pin 18: E3; output. */
  "E3": "18",
  /** Physical pin 19: AB4; output. */
  "AB4": "19",
  /** Physical pin 20: POL; output. */
  "POL": "20",
  /** Physical pin 21: BP/GND; bidirectional. */
  "BP/GND": "21",
  /** Physical pin 22: G3; output. */
  "G3": "22",
  /** Physical pin 23: A3; output. */
  "A3": "23",
  /** Physical pin 24: C3; output. */
  "C3": "24",
  /** Physical pin 25: G2; output. */
  "G2": "25",
  /** Physical pin 26: V-; power_in. */
  "V-": "26",
  /** Physical pin 27: INT; passive. */
  "INT": "27",
  /** Physical pin 28: BUFF; output. */
  "BUFF": "28",
  /** Physical pin 29: A-Z; passive. */
  "A-Z": "29",
  /** Physical pin 30: IN_LO; input. */
  "IN_LO": "30",
  /** Physical pin 31: IN_HI; input. */
  "IN_HI": "31",
  /** Physical pin 32: COMMON; output. */
  "COMMON": "32",
  /** Physical pin 33: CREF-; passive. */
  "CREF-": "33",
  /** Physical pin 34: CREF+; passive. */
  "CREF+": "34",
  /** Physical pin 35: REF_LO; passive. */
  "REF_LO": "35",
  /** Physical pin 36: REF_HI; passive. */
  "REF_HI": "36",
  /** Physical pin 37: TEST; passive. */
  "TEST": "37",
  /** Physical pin 38: OSC3; passive. */
  "OSC3": "38",
  /** Physical pin 39: OSC2; passive. */
  "OSC2": "39",
  /** Physical pin 40: OSC1; passive. */
  "OSC1": "40",
}) {
  override schema = "Analog_ADC:ICL7106CPL";
  override referencePrefix = "U";
}

/**
 * 3 1/2 Digit, LED Display, A/D Converter, DIP-40
 *
 * KiCad symbol: `Analog_ADC:ICL7107CPL`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see https://www.renesas.com/eu/en/www/doc/datasheet/icl7106-07-07s.pdf
 * Keywords: LED ADC.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICL7107CPL extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: D1; output. */
  "D1": "2",
  /** Physical pin 3: C1; output. */
  "C1": "3",
  /** Physical pin 4: B1; output. */
  "B1": "4",
  /** Physical pin 5: A1; output. */
  "A1": "5",
  /** Physical pin 6: F1; output. */
  "F1": "6",
  /** Physical pin 7: G1; output. */
  "G1": "7",
  /** Physical pin 8: E1; output. */
  "E1": "8",
  /** Physical pin 9: D2; output. */
  "D2": "9",
  /** Physical pin 10: C2; output. */
  "C2": "10",
  /** Physical pin 11: B2; output. */
  "B2": "11",
  /** Physical pin 12: A2; output. */
  "A2": "12",
  /** Physical pin 13: F2; output. */
  "F2": "13",
  /** Physical pin 14: E2; output. */
  "E2": "14",
  /** Physical pin 15: D3; output. */
  "D3": "15",
  /** Physical pin 16: B3; output. */
  "B3": "16",
  /** Physical pin 17: F3; output. */
  "F3": "17",
  /** Physical pin 18: E3; output. */
  "E3": "18",
  /** Physical pin 19: AB4; output. */
  "AB4": "19",
  /** Physical pin 20: POL; output. */
  "POL": "20",
  /** Physical pin 21: BP/GND; bidirectional. */
  "BP/GND": "21",
  /** Physical pin 22: G3; output. */
  "G3": "22",
  /** Physical pin 23: A3; output. */
  "A3": "23",
  /** Physical pin 24: C3; output. */
  "C3": "24",
  /** Physical pin 25: G2; output. */
  "G2": "25",
  /** Physical pin 26: V-; power_in. */
  "V-": "26",
  /** Physical pin 27: INT; passive. */
  "INT": "27",
  /** Physical pin 28: BUFF; output. */
  "BUFF": "28",
  /** Physical pin 29: A-Z; passive. */
  "A-Z": "29",
  /** Physical pin 30: IN_LO; input. */
  "IN_LO": "30",
  /** Physical pin 31: IN_HI; input. */
  "IN_HI": "31",
  /** Physical pin 32: COMMON; output. */
  "COMMON": "32",
  /** Physical pin 33: CREF-; passive. */
  "CREF-": "33",
  /** Physical pin 34: CREF+; passive. */
  "CREF+": "34",
  /** Physical pin 35: REF_LO; passive. */
  "REF_LO": "35",
  /** Physical pin 36: REF_HI; passive. */
  "REF_HI": "36",
  /** Physical pin 37: TEST; passive. */
  "TEST": "37",
  /** Physical pin 38: OSC3; passive. */
  "OSC3": "38",
  /** Physical pin 39: OSC2; passive. */
  "OSC2": "39",
  /** Physical pin 40: OSC1; passive. */
  "OSC1": "40",
}) {
  override schema = "Analog_ADC:ICL7107CPL";
  override referencePrefix = "U";
}

/**
 * ADC 8bit Low Power 20Msps, SSOP-24
 *
 * KiCad symbol: `Analog_ADC:LTC1406CGN`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1406f.pdf
 * Keywords: Low Power ADC 8bit 20Msps.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1406CGN extends Component.withPins({
  /** Physical pin 1: OGND; power_in. */
  "OGND": "1",
  /** Physical pin 2: OVDD; power_in. */
  "OVDD": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: VBIAS; input. */
  "VBIAS": "4",
  /** Physical pin 5: VREF; input. */
  "VREF": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND_6": "6",
  /** Physical pin 7: AIN+; input. */
  "AIN+": "7",
  /** Physical pin 8: AIN-; input. */
  "AIN-": "8",
  /** Physical pin 9: AVDD; power_in. */
  "AVDD": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND_10": "10",
  /** Physical pin 11: DGND; power_in. */
  "DGND": "11",
  /** Physical pin 12: DVDD; power_in. */
  "DVDD": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: D0; output. */
  "D0": "15",
  /** Physical pin 16: D1; output. */
  "D1": "16",
  /** Physical pin 17: D2; output. */
  "D2": "17",
  /** Physical pin 18: D3; output. */
  "D3": "18",
  /** Physical pin 19: D4; output. */
  "D4": "19",
  /** Physical pin 20: D5; output. */
  "D5": "20",
  /** Physical pin 21: D6; output. */
  "D6": "21",
  /** Physical pin 22: D7; output. */
  "D7": "22",
  /** Physical pin 23: OF/UF; output. */
  "OF/UF": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
}) {
  override schema = "Analog_ADC:LTC1406CGN";
  override referencePrefix = "U";
}

/**
 * ADC 8bit Low Power 20Msps, SSOP-24
 *
 * KiCad symbol: `Analog_ADC:LTC1406IGN`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1406f.pdf
 * Keywords: Low Power ADC 8bit 20Msps.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1406IGN extends Component.withPins({
  /** Physical pin 1: OGND; power_in. */
  "OGND": "1",
  /** Physical pin 2: OVDD; power_in. */
  "OVDD": "2",
  /** Physical pin 3: ~{SHDN}; input. */
  "~{SHDN}": "3",
  /** Physical pin 4: VBIAS; input. */
  "VBIAS": "4",
  /** Physical pin 5: VREF; input. */
  "VREF": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND_6": "6",
  /** Physical pin 7: AIN+; input. */
  "AIN+": "7",
  /** Physical pin 8: AIN-; input. */
  "AIN-": "8",
  /** Physical pin 9: AVDD; power_in. */
  "AVDD": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND_10": "10",
  /** Physical pin 11: DGND; power_in. */
  "DGND": "11",
  /** Physical pin 12: DVDD; power_in. */
  "DVDD": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: D0; output. */
  "D0": "15",
  /** Physical pin 16: D1; output. */
  "D1": "16",
  /** Physical pin 17: D2; output. */
  "D2": "17",
  /** Physical pin 18: D3; output. */
  "D3": "18",
  /** Physical pin 19: D4; output. */
  "D4": "19",
  /** Physical pin 20: D5; output. */
  "D5": "20",
  /** Physical pin 21: D6; output. */
  "D6": "21",
  /** Physical pin 22: D7; output. */
  "D7": "22",
  /** Physical pin 23: OF/UF; output. */
  "OF/UF": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
}) {
  override schema = "Analog_ADC:LTC1406IGN";
  override referencePrefix = "U";
}

/**
 * Micropower 12-bit 4 Channel ADC, Serial IO, SOIC-16
 *
 * KiCad symbol: `Analog_ADC:LTC1594CS`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/15948fb.pdf
 * Keywords: 12bit ADC 4 Channel.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1594CS extends Component.withPins({
  /** Physical pin 1: CH0; input. */
  "CH0": "1",
  /** Physical pin 2: CH1; input. */
  "CH1": "2",
  /** Physical pin 3: CH2; input. */
  "CH2": "3",
  /** Physical pin 4: CH3; input. */
  "CH3": "4",
  /** Physical pin 5: ADCIN; input. */
  "ADCIN": "5",
  /** Physical pin 6: VREF; input. */
  "VREF": "6",
  /** Physical pin 7: COM; input. */
  "COM": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: ~{CSADC}; input. */
  "~{CSADC}": "9",
  /** Physical pin 10: DOUT; output. */
  "DOUT": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC_11": "11",
  /** Physical pin 12: CLK; input. */
  "CLK": "12",
  /** Physical pin 13: ~{CSMUX}; input. */
  "~{CSMUX}": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: MUXOUT; output. */
  "MUXOUT": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC_16": "16",
}) {
  override schema = "Analog_ADC:LTC1594CS";
  override referencePrefix = "U";
}

/**
 * Micropower 12-bit 4 Channel ADC, Serial IO, SO-16
 *
 * KiCad symbol: `Analog_ADC:LTC1594IS`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/15948fb.pdf
 * Keywords: 12bit ADC 4 Channel.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1594IS extends Component.withPins({
  /** Physical pin 1: CH0; input. */
  "CH0": "1",
  /** Physical pin 2: CH1; input. */
  "CH1": "2",
  /** Physical pin 3: CH2; input. */
  "CH2": "3",
  /** Physical pin 4: CH3; input. */
  "CH3": "4",
  /** Physical pin 5: ADCIN; input. */
  "ADCIN": "5",
  /** Physical pin 6: VREF; input. */
  "VREF": "6",
  /** Physical pin 7: COM; input. */
  "COM": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: ~{CSADC}; input. */
  "~{CSADC}": "9",
  /** Physical pin 10: DOUT; output. */
  "DOUT": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC_11": "11",
  /** Physical pin 12: CLK; input. */
  "CLK": "12",
  /** Physical pin 13: ~{CSMUX}; input. */
  "~{CSMUX}": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: MUXOUT; output. */
  "MUXOUT": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC_16": "16",
}) {
  override schema = "Analog_ADC:LTC1594IS";
  override referencePrefix = "U";
}

/**
 * Micropower 12-bit 8 Channel ADC, Serial IO, SSOP-24
 *
 * KiCad symbol: `Analog_ADC:LTC1598CG`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/15948fb.pdf
 * Keywords: 12bit ADC 4 Channel.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1598CG extends Component.withPins({
  /** Physical pin 1: CH5; input. */
  "CH5": "1",
  /** Physical pin 2: CH6; input. */
  "CH6": "2",
  /** Physical pin 3: CH7; input. */
  "CH7": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: CLK; input. */
  "CLK_5": "5",
  /** Physical pin 6: ~{CSMUX}; input. */
  "~{CSMUX}": "6",
  /** Physical pin 7: DIN; input. */
  "DIN": "7",
  /** Physical pin 8: COM; input. */
  "COM": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: ~{CSADC}; input. */
  "~{CSADC}": "10",
  /** Physical pin 11: DOUT; output. */
  "DOUT": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: CLK; input. */
  "CLK_14": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC_15": "15",
  /** Physical pin 16: VREF; input. */
  "VREF": "16",
  /** Physical pin 17: ADCIN; input. */
  "ADCIN": "17",
  /** Physical pin 18: MUXOUT; output. */
  "MUXOUT": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC_19": "19",
  /** Physical pin 20: CH0; input. */
  "CH0": "20",
  /** Physical pin 21: CH1; input. */
  "CH1": "21",
  /** Physical pin 22: CH2; input. */
  "CH2": "22",
  /** Physical pin 23: CH3; input. */
  "CH3": "23",
  /** Physical pin 24: CH4; input. */
  "CH4": "24",
}) {
  override schema = "Analog_ADC:LTC1598CG";
  override referencePrefix = "U";
}

/**
 * Micropower 12-bit 8 Channel ADC, Serial IO, SSOP-24
 *
 * KiCad symbol: `Analog_ADC:LTC1598IG`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/15948fb.pdf
 * Keywords: 12bit ADC 4 Channel.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1598IG extends Component.withPins({
  /** Physical pin 1: CH5; input. */
  "CH5": "1",
  /** Physical pin 2: CH6; input. */
  "CH6": "2",
  /** Physical pin 3: CH7; input. */
  "CH7": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: CLK; input. */
  "CLK_5": "5",
  /** Physical pin 6: ~{CSMUX}; input. */
  "~{CSMUX}": "6",
  /** Physical pin 7: DIN; input. */
  "DIN": "7",
  /** Physical pin 8: COM; input. */
  "COM": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: ~{CSADC}; input. */
  "~{CSADC}": "10",
  /** Physical pin 11: DOUT; output. */
  "DOUT": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: CLK; input. */
  "CLK_14": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC_15": "15",
  /** Physical pin 16: VREF; input. */
  "VREF": "16",
  /** Physical pin 17: ADCIN; input. */
  "ADCIN": "17",
  /** Physical pin 18: MUXOUT; output. */
  "MUXOUT": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC_19": "19",
  /** Physical pin 20: CH0; input. */
  "CH0": "20",
  /** Physical pin 21: CH1; input. */
  "CH1": "21",
  /** Physical pin 22: CH2; input. */
  "CH2": "22",
  /** Physical pin 23: CH3; input. */
  "CH3": "23",
  /** Physical pin 24: CH4; input. */
  "CH4": "24",
}) {
  override schema = "Analog_ADC:LTC1598IG";
  override referencePrefix = "U";
}

/**
 * 14-Bit, 65Msps, Low Noise, ADC, TSSOP-48
 *
 * KiCad symbol: `Analog_ADC:LTC1742`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1742f.pdf
 * Keywords: ADC analog digital converter pipeline.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1742 extends Component.withPins({
  /** Physical pin 1: SENSE; input. */
  "SENSE": "1",
  /** Physical pin 2: VCM; output. */
  "VCM": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: AIN+; input. */
  "AIN+": "4",
  /** Physical pin 5: AIN-; input. */
  "AIN-": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: REFLB; passive. */
  "REFLB": "10",
  /** Physical pin 11: REFHA; passive. */
  "REFHA": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: REFLA; passive. */
  "REFLA": "14",
  /** Physical pin 15: REFHB; passive. */
  "REFHB": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; passive. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: VDD; passive. */
  "VDD_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: ~{MSBINV}; input. */
  "~{MSBINV}": "22",
  /** Physical pin 23: ENC; input. */
  "ENC": "23",
  /** Physical pin 24: ~{ENC}; input. */
  "~{ENC}": "24",
  /** Physical pin 25: ~{OE}; input. */
  "~{OE}": "25",
  /** Physical pin 26: CLKOUT; output. */
  "CLKOUT": "26",
  /** Physical pin 27: OGND; passive. */
  "OGND_27": "27",
  /** Physical pin 28: D0; output. */
  "D0": "28",
  /** Physical pin 29: D1; output. */
  "D1": "29",
  /** Physical pin 30: D2; output. */
  "D2": "30",
  /** Physical pin 31: D3; output. */
  "D3": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: D4; output. */
  "D4": "33",
  /** Physical pin 34: D5; output. */
  "D5": "34",
  /** Physical pin 35: D6; output. */
  "D6": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: OGND; passive. */
  "OGND_38": "38",
  /** Physical pin 39: D7; output. */
  "D7": "39",
  /** Physical pin 40: D8; output. */
  "D8": "40",
  /** Physical pin 41: D9; output. */
  "D9": "41",
  /** Physical pin 42: D10; output. */
  "D10": "42",
  /** Physical pin 43: OVDD; passive. */
  "OVDD_43": "43",
  /** Physical pin 44: D11; output. */
  "D11": "44",
  /** Physical pin 45: D12; output. */
  "D12": "45",
  /** Physical pin 46: D13; output. */
  "D13": "46",
  /** Physical pin 47: OGND; power_in. */
  "OGND_47": "47",
  /** Physical pin 48: OF; output. */
  "OF": "48",
}) {
  override schema = "Analog_ADC:LTC1742";
  override referencePrefix = "U";
}

/**
 * 14-Bit, 50Msps, ADC, TSSOP-48
 *
 * KiCad symbol: `Analog_ADC:LTC1744`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1744f.pdf
 * Keywords: ADC analog digital converter pipeline.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1744 extends Component.withPins({
  /** Physical pin 1: SENSE; input. */
  "SENSE": "1",
  /** Physical pin 2: VCM; output. */
  "VCM": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: AIN+; input. */
  "AIN+": "4",
  /** Physical pin 5: AIN-; input. */
  "AIN-": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: REFLB; passive. */
  "REFLB": "10",
  /** Physical pin 11: REFHA; passive. */
  "REFHA": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: REFLA; passive. */
  "REFLA": "14",
  /** Physical pin 15: REFHB; passive. */
  "REFHB": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; passive. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: VDD; passive. */
  "VDD_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: ~{MSBINV}; input. */
  "~{MSBINV}": "22",
  /** Physical pin 23: ENC; input. */
  "ENC": "23",
  /** Physical pin 24: ~{ENC}; input. */
  "~{ENC}": "24",
  /** Physical pin 25: ~{OE}; input. */
  "~{OE}": "25",
  /** Physical pin 26: CLKOUT; output. */
  "CLKOUT": "26",
  /** Physical pin 27: OGND; passive. */
  "OGND_27": "27",
  /** Physical pin 28: D0; output. */
  "D0": "28",
  /** Physical pin 29: D1; output. */
  "D1": "29",
  /** Physical pin 30: D2; output. */
  "D2": "30",
  /** Physical pin 31: D3; output. */
  "D3": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: D4; output. */
  "D4": "33",
  /** Physical pin 34: D5; output. */
  "D5": "34",
  /** Physical pin 35: D6; output. */
  "D6": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: OGND; passive. */
  "OGND_38": "38",
  /** Physical pin 39: D7; output. */
  "D7": "39",
  /** Physical pin 40: D8; output. */
  "D8": "40",
  /** Physical pin 41: D9; output. */
  "D9": "41",
  /** Physical pin 42: D10; output. */
  "D10": "42",
  /** Physical pin 43: OVDD; passive. */
  "OVDD_43": "43",
  /** Physical pin 44: D11; output. */
  "D11": "44",
  /** Physical pin 45: D12; output. */
  "D12": "45",
  /** Physical pin 46: D13; output. */
  "D13": "46",
  /** Physical pin 47: OGND; power_in. */
  "OGND_47": "47",
  /** Physical pin 48: OF; output. */
  "OF": "48",
}) {
  override schema = "Analog_ADC:LTC1744";
  override referencePrefix = "U";
}

/**
 * Low Power, 14-Bit, 25Msps, ADC, TSSOP-48
 *
 * KiCad symbol: `Analog_ADC:LTC1746`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1746f.pdf
 * Keywords: ADC analog digital converter pipeline.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1746 extends Component.withPins({
  /** Physical pin 1: SENSE; input. */
  "SENSE": "1",
  /** Physical pin 2: VCM; output. */
  "VCM": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: AIN+; input. */
  "AIN+": "4",
  /** Physical pin 5: AIN-; input. */
  "AIN-": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: REFLB; passive. */
  "REFLB": "10",
  /** Physical pin 11: REFHA; passive. */
  "REFHA": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: REFLA; passive. */
  "REFLA": "14",
  /** Physical pin 15: REFHB; passive. */
  "REFHB": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; passive. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: VDD; passive. */
  "VDD_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: ~{MSBINV}; input. */
  "~{MSBINV}": "22",
  /** Physical pin 23: ENC; input. */
  "ENC": "23",
  /** Physical pin 24: ~{ENC}; input. */
  "~{ENC}": "24",
  /** Physical pin 25: ~{OE}; input. */
  "~{OE}": "25",
  /** Physical pin 26: CLKOUT; output. */
  "CLKOUT": "26",
  /** Physical pin 27: OGND; passive. */
  "OGND_27": "27",
  /** Physical pin 28: D0; output. */
  "D0": "28",
  /** Physical pin 29: D1; output. */
  "D1": "29",
  /** Physical pin 30: D2; output. */
  "D2": "30",
  /** Physical pin 31: D3; output. */
  "D3": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: D4; output. */
  "D4": "33",
  /** Physical pin 34: D5; output. */
  "D5": "34",
  /** Physical pin 35: D6; output. */
  "D6": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: OGND; passive. */
  "OGND_38": "38",
  /** Physical pin 39: D7; output. */
  "D7": "39",
  /** Physical pin 40: D8; output. */
  "D8": "40",
  /** Physical pin 41: D9; output. */
  "D9": "41",
  /** Physical pin 42: D10; output. */
  "D10": "42",
  /** Physical pin 43: OVDD; passive. */
  "OVDD_43": "43",
  /** Physical pin 44: D11; output. */
  "D11": "44",
  /** Physical pin 45: D12; output. */
  "D12": "45",
  /** Physical pin 46: D13; output. */
  "D13": "46",
  /** Physical pin 47: OGND; power_in. */
  "OGND_47": "47",
  /** Physical pin 48: OF; output. */
  "OF": "48",
}) {
  override schema = "Analog_ADC:LTC1746";
  override referencePrefix = "U";
}

/**
 * 14-Bit, 80Msps, Low Noise, ADC, TSSOP-48
 *
 * KiCad symbol: `Analog_ADC:LTC1748`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1748fa.pdf
 * Keywords: ADC analog digital converter pipeline.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1748 extends Component.withPins({
  /** Physical pin 1: SENSE; input. */
  "SENSE": "1",
  /** Physical pin 2: VCM; output. */
  "VCM": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: AIN+; input. */
  "AIN+": "4",
  /** Physical pin 5: AIN-; input. */
  "AIN-": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: REFLB; passive. */
  "REFLB": "10",
  /** Physical pin 11: REFHA; passive. */
  "REFHA": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: REFLA; passive. */
  "REFLA": "14",
  /** Physical pin 15: REFHB; passive. */
  "REFHB": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; passive. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: VDD; passive. */
  "VDD_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: ~{MSBINV}; input. */
  "~{MSBINV}": "22",
  /** Physical pin 23: ENC; input. */
  "ENC": "23",
  /** Physical pin 24: ~{ENC}; input. */
  "~{ENC}": "24",
  /** Physical pin 25: ~{OE}; input. */
  "~{OE}": "25",
  /** Physical pin 26: CLKOUT; output. */
  "CLKOUT": "26",
  /** Physical pin 27: OGND; passive. */
  "OGND_27": "27",
  /** Physical pin 28: D0; output. */
  "D0": "28",
  /** Physical pin 29: D1; output. */
  "D1": "29",
  /** Physical pin 30: D2; output. */
  "D2": "30",
  /** Physical pin 31: D3; output. */
  "D3": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: D4; output. */
  "D4": "33",
  /** Physical pin 34: D5; output. */
  "D5": "34",
  /** Physical pin 35: D6; output. */
  "D6": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: OGND; passive. */
  "OGND_38": "38",
  /** Physical pin 39: D7; output. */
  "D7": "39",
  /** Physical pin 40: D8; output. */
  "D8": "40",
  /** Physical pin 41: D9; output. */
  "D9": "41",
  /** Physical pin 42: D10; output. */
  "D10": "42",
  /** Physical pin 43: OVDD; passive. */
  "OVDD_43": "43",
  /** Physical pin 44: D11; output. */
  "D11": "44",
  /** Physical pin 45: D12; output. */
  "D12": "45",
  /** Physical pin 46: D13; output. */
  "D13": "46",
  /** Physical pin 47: OGND; power_in. */
  "OGND_47": "47",
  /** Physical pin 48: OF; output. */
  "OF": "48",
}) {
  override schema = "Analog_ADC:LTC1748";
  override referencePrefix = "U";
}

/**
 * Single channel 16-bit SAR Analog to Digital Converter, 3V supply, differential input, 150ksps, SPI interface
 *
 * KiCad symbol: `Analog_ADC:LTC1864L`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/18645lfs.pdf
 * Keywords: adc spi 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1864L extends Component.withPins({
  /** Physical pin 1: V_{REF}; input. */
  "V_{REF}": "1",
  /** Physical pin 2: IN^{+}; input. */
  "IN^{+}": "2",
  /** Physical pin 3: IN^{-}; input. */
  "IN^{-}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CONV; input. */
  "CONV": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: SCK; input. */
  "SCK": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Analog_ADC:LTC1864L";
  override referencePrefix = "U";
}

/**
 * Single channel 16-bit SAR Analog to Digital Converter, 5V supply, differential input, 150ksps, SPI interface
 *
 * KiCad symbol: `Analog_ADC:LTC1864`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/18645fb.pdf
 * Keywords: adc spi 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1864 extends Component.withPins({
  /** Physical pin 1: V_{REF}; input. */
  "V_{REF}": "1",
  /** Physical pin 2: IN^{+}; input. */
  "IN^{+}": "2",
  /** Physical pin 3: IN^{-}; input. */
  "IN^{-}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CONV; input. */
  "CONV": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: SCK; input. */
  "SCK": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Analog_ADC:LTC1864";
  override referencePrefix = "U";
}

/**
 * Dual channel 16-bit SAR Analog to Digital Converter, 3V supply, 150ksps, SPI interface
 *
 * KiCad symbol: `Analog_ADC:LTC1865L-MS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/18645lfs.pdf
 * Keywords: adc 2ch.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1865L_MS extends Component.withPins({
  /** Physical pin 1: CONV; input. */
  "CONV": "1",
  /** Physical pin 2: CH0; input. */
  "CH0": "2",
  /** Physical pin 3: CH1; input. */
  "CH1": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: SDI; input. */
  "SDI": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: V_{CC}; power_in. */
  "V_{CC}": "9",
  /** Physical pin 10: V_{REF}; input. */
  "V_{REF}": "10",
}) {
  override schema = "Analog_ADC:LTC1865L-MS";
  override referencePrefix = "U";
}

/**
 * Dual channel 16-bit SAR Analog to Digital Converter, 5V supply, 150ksps, SPI interface
 *
 * KiCad symbol: `Analog_ADC:LTC1865-MS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/18645fb.pdf
 * Keywords: adc 2ch.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1865_MS extends Component.withPins({
  /** Physical pin 1: CONV; input. */
  "CONV": "1",
  /** Physical pin 2: CH0; input. */
  "CH0": "2",
  /** Physical pin 3: CH1; input. */
  "CH1": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: SDI; input. */
  "SDI": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: V_{CC}; power_in. */
  "V_{CC}": "9",
  /** Physical pin 10: V_{REF}; input. */
  "V_{REF}": "10",
}) {
  override schema = "Analog_ADC:LTC1865-MS";
  override referencePrefix = "U";
}

/**
 * Dual channel 16-bit SAR Analog to Digital Converter, 3V supply, 150ksps, SPI interface
 *
 * KiCad symbol: `Analog_ADC:LTC1865L-S8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/18645lfs.pdf
 * Keywords: adc 2ch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1865L_S8 extends Component.withPins({
  /** Physical pin 1: CONV; input. */
  "CONV": "1",
  /** Physical pin 2: CH0; input. */
  "CH0": "2",
  /** Physical pin 3: CH1; input. */
  "CH1": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: SCK; input. */
  "SCK": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Analog_ADC:LTC1865L-S8";
  override referencePrefix = "U";
}

/**
 * Dual channel 16-bit SAR Analog to Digital Converter, 5V supply, 150ksps, SPI interface
 *
 * KiCad symbol: `Analog_ADC:LTC1865-S8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/18645fb.pdf
 * Keywords: adc 2ch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1865_S8 extends Component.withPins({
  /** Physical pin 1: CONV; input. */
  "CONV": "1",
  /** Physical pin 2: CH0; input. */
  "CH0": "2",
  /** Physical pin 3: CH1; input. */
  "CH1": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: SCK; input. */
  "SCK": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Analog_ADC:LTC1865-S8";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 12-Bit Low Power ADC, 105Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2282xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2282fb.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2282xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2282xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 14-Bit Low Power ADC, 105Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2284xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2284fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2284xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2284xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 12-Bit Low Power ADC, 10Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2290xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2290fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2290xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2290xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 12-Bit Low Power ADC, 25Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2291xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/229321fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2291xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2291xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 12-Bit Low Power ADC, 40Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2292xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/229321fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2292xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2292xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 12-Bit Low Power ADC, 65Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2293xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/229321fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2293xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2293xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 12-Bit Low Power ADC, 80Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2294xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2294fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2294xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2294xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 14-Bit Low Power ADC, 10Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2295xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2295fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2295xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2295xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 14-Bit Low Power ADC, 25Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2296xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/229876fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2296xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2296xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 14-Bit Low Power ADC, 40Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2297xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/229876fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2297xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2297xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 14-Bit Low Power ADC, 65Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2298xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/229876fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2298xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2298xUP";
  override referencePrefix = "U";
}

/**
 * Dual-Channel, 14-Bit Low Power ADC, 80Msps, QFN-64
 *
 * KiCad symbol: `Analog_ADC:LTC2299xUP`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2299fa.pdf
 * Keywords: ADC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2299xUP extends Component.withPins({
  /** Physical pin 1: AINA+; input. */
  "AINA+": "1",
  /** Physical pin 2: AINA-; input. */
  "AINA-": "2",
  /** Physical pin 3: REFHA; input. */
  "REFHA_3": "3",
  /** Physical pin 4: REFHA; input. */
  "REFHA_4": "4",
  /** Physical pin 5: REFLA; input. */
  "REFLA_5": "5",
  /** Physical pin 6: REFLA; input. */
  "REFLA_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: CLKA; input. */
  "CLKA": "8",
  /** Physical pin 9: CLKB; input. */
  "CLKB": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: REFLB; input. */
  "REFLB_11": "11",
  /** Physical pin 12: REFLB; input. */
  "REFLB_12": "12",
  /** Physical pin 13: REFHB; input. */
  "REFHB_13": "13",
  /** Physical pin 14: REFHB; input. */
  "REFHB_14": "14",
  /** Physical pin 15: AINB-; input. */
  "AINB-": "15",
  /** Physical pin 16: AINB+; input. */
  "AINB+": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: SENSEB; input. */
  "SENSEB": "19",
  /** Physical pin 20: VCMB; passive. */
  "VCMB": "20",
  /** Physical pin 21: MUX; input. */
  "MUX": "21",
  /** Physical pin 22: SHDNB; input. */
  "SHDNB": "22",
  /** Physical pin 23: ~{OEB}; input. */
  "~{OEB}": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: DB0; output. */
  "DB0": "26",
  /** Physical pin 27: DB1; output. */
  "DB1": "27",
  /** Physical pin 28: DB2; output. */
  "DB2": "28",
  /** Physical pin 29: DB3; output. */
  "DB3": "29",
  /** Physical pin 30: DB4; output. */
  "DB4": "30",
  /** Physical pin 31: OGND; power_in. */
  "OGND_31": "31",
  /** Physical pin 32: OVDD; power_in. */
  "OVDD_32": "32",
  /** Physical pin 33: DB5; output. */
  "DB5": "33",
  /** Physical pin 34: DB6; output. */
  "DB6": "34",
  /** Physical pin 35: DB7; output. */
  "DB7": "35",
  /** Physical pin 36: DB8; output. */
  "DB8": "36",
  /** Physical pin 37: DB9; output. */
  "DB9": "37",
  /** Physical pin 38: DB10; output. */
  "DB10": "38",
  /** Physical pin 39: DB11; output. */
  "DB11": "39",
  /** Physical pin 40: OFB; output. */
  "OFB": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: DA0; output. */
  "DA0": "43",
  /** Physical pin 44: DA1; output. */
  "DA1": "44",
  /** Physical pin 45: DA2; output. */
  "DA2": "45",
  /** Physical pin 46: DA3; output. */
  "DA3": "46",
  /** Physical pin 47: DA4; output. */
  "DA4": "47",
  /** Physical pin 48: DA5; output. */
  "DA5": "48",
  /** Physical pin 49: OVDD; power_in. */
  "OVDD_49": "49",
  /** Physical pin 50: OGND; passive. */
  "OGND_50": "50",
  /** Physical pin 51: DA6; output. */
  "DA6": "51",
  /** Physical pin 52: DA7; output. */
  "DA7": "52",
  /** Physical pin 53: DA8; output. */
  "DA8": "53",
  /** Physical pin 54: DA9; output. */
  "DA9": "54",
  /** Physical pin 55: DA10; output. */
  "DA10": "55",
  /** Physical pin 56: DA11; output. */
  "DA11": "56",
  /** Physical pin 57: OFA; output. */
  "OFA": "57",
  /** Physical pin 58: ~{OEA}; input. */
  "~{OEA}": "58",
  /** Physical pin 59: SHDNA; input. */
  "SHDNA": "59",
  /** Physical pin 60: MODE; input. */
  "MODE": "60",
  /** Physical pin 61: VCMA; passive. */
  "VCMA": "61",
  /** Physical pin 62: SENSEA; input. */
  "SENSEA": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
}) {
  override schema = "Analog_ADC:LTC2299xUP";
  override referencePrefix = "U";
}

/**
 * 8 Channels, 12-Bit SAR ADC, I2C interface, TSSOP-20 package
 *
 * KiCad symbol: `Analog_ADC:LTC2309xF`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2309fd.pdf
 * Keywords: LT ADC 12bit I2C SAR TSSOP.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2309xF extends Component.withPins({
  /** Physical pin 16: CH5; input. */
  "CH5": "16",
  /** Physical pin 1: REFCOMP; input. */
  "REFCOMP": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD_3": "3",
  /** Physical pin 4: AD0; input. */
  "AD0": "4",
  /** Physical pin 5: AD1; input. */
  "AD1": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: VDD; passive. */
  "VDD_10": "10",
  /** Physical pin 11: CH0; input. */
  "CH0": "11",
  /** Physical pin 12: CH1; input. */
  "CH1": "12",
  /** Physical pin 13: CH2; input. */
  "CH2": "13",
  /** Physical pin 14: CH3; input. */
  "CH3": "14",
  /** Physical pin 15: CH4; input. */
  "CH4": "15",
  /** Physical pin 17: CH6; input. */
  "CH6": "17",
  /** Physical pin 18: CH7; input. */
  "CH7": "18",
  /** Physical pin 19: COM; input. */
  "COM": "19",
  /** Physical pin 20: VREF; input. */
  "VREF": "20",
}) {
  override schema = "Analog_ADC:LTC2309xF";
  override referencePrefix = "U";
}

/**
 * 8 Channels, 12-Bit SAR ADC, I2C interface, QFN-24 package
 *
 * KiCad symbol: `Analog_ADC:LTC2309xUF`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2309fd.pdf
 * Keywords: LT ADC 12bit I2C SAR QFN.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2309xUF extends Component.withPins({
  /** Physical pin 3: CH5; input. */
  "CH5": "3",
  /** Physical pin 1: CH3; input. */
  "CH3": "1",
  /** Physical pin 2: CH4; input. */
  "CH4": "2",
  /** Physical pin 4: CH6; input. */
  "CH6": "4",
  /** Physical pin 5: CH7; input. */
  "CH7": "5",
  /** Physical pin 6: COM; input. */
  "COM": "6",
  /** Physical pin 7: VREF; input. */
  "VREF": "7",
  /** Physical pin 8: REFCOMP; input. */
  "REFCOMP": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: VDD; power_in. */
  "VDD_12": "12",
  /** Physical pin 13: VDD; passive. */
  "VDD_13": "13",
  /** Physical pin 14: AD0; input. */
  "AD0": "14",
  /** Physical pin 15: AD1; input. */
  "AD1": "15",
  /** Physical pin 16: SCL; input. */
  "SCL": "16",
  /** Physical pin 17: SDA; bidirectional. */
  "SDA": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: VDD; passive. */
  "VDD_21": "21",
  /** Physical pin 22: CH0; input. */
  "CH0": "22",
  /** Physical pin 23: CH1; input. */
  "CH1": "23",
  /** Physical pin 24: CH2; input. */
  "CH2": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Analog_ADC:LTC2309xUF";
  override referencePrefix = "U";
}

/**
 * 16-Bit, 5Msps Differential Input ADC with Wide Input Common Mode Range, LVDS/CMOS interface, MSOP-16
 *
 * KiCad symbol: `Analog_ADC:LTC2311-16`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/231116fa.pdf
 * Keywords: 16-bit adc differential input 5 msps lvds cmos.
 * Default footprint: Package_SO:MSOP-16-1EP_3x4.039mm_P0.5mm_EP1.651x2.845mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2311_16 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: REFIN; passive. */
  "REFIN": "2",
  /** Physical pin 3: REFOUT; passive. */
  "REFOUT": "3",
  /** Physical pin 4: V_{DD}; power_in. */
  "V_{DD}": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: A_{IN+}; input. */
  "A_{IN+}": "6",
  /** Physical pin 7: A_{IN-}; input. */
  "A_{IN-}": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: ~{CNV}; input. */
  "~{CNV}": "9",
  /** Physical pin 10: ~{CMOS}/LVDS; input. */
  "~{CMOS}/LVDS": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: OV_{DD}; power_in. */
  "OV_{DD}": "12",
  /** Physical pin 13: SDO^{-}; tri_state. */
  "SDO^{-}": "13",
  /** Physical pin 14: SDO^{+}; tri_state. */
  "SDO^{+}": "14",
  /** Physical pin 15: SCK^{-}; input. */
  "SCK^{-}": "15",
  /** Physical pin 16: SCK^{+}; input. */
  "SCK^{+}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Analog_ADC:LTC2311-16";
  override referencePrefix = "U";
}

/**
 * Quad, 16-Bit, 5Msps/Ch Simultaneous Sampling ADC, LVDS/CMOS interface, QFN-52
 *
 * KiCad symbol: `Analog_ADC:LTC2325-16`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*P0.5mm*5.41x6.45mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/232516fa.pdf
 * Keywords: 16-Bit 5msps 4 channel adc lvds cmos.
 * Default footprint: Package_DFN_QFN:QFN-52-1EP_7x8mm_P0.5mm_EP5.41x6.45mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2325_16 extends Component.withPins({
  /** Physical pin 1: A_{IN4-}; input. */
  "A_{IN4-}": "1",
  /** Physical pin 2: A_{IN4+}; input. */
  "A_{IN4+}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: A_{IN3-}; input. */
  "A_{IN3-}": "4",
  /** Physical pin 5: A_{IN3+}; input. */
  "A_{IN3+}": "5",
  /** Physical pin 6: REFOUT3; passive. */
  "REFOUT3": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: REF; passive. */
  "REF": "8",
  /** Physical pin 9: REFOUT2; passive. */
  "REFOUT2": "9",
  /** Physical pin 10: A_{IN2-}; input. */
  "A_{IN2-}": "10",
  /** Physical pin 11: A_{IN2+}; input. */
  "A_{IN2+}": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: A_{IN1-}; input. */
  "A_{IN1-}": "13",
  /** Physical pin 14: A_{IN1+}; input. */
  "A_{IN1+}": "14",
  /** Physical pin 15: V_{DD}; power_in. */
  "V_{DD}_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: V_{DD}; passive. */
  "V_{DD}_21": "21",
  /** Physical pin 22: REFOUT1; passive. */
  "REFOUT1": "22",
  /** Physical pin 23: ~{SDR}/DDR; input. */
  "~{SDR}/DDR": "23",
  /** Physical pin 24: ~{CNV}; input. */
  "~{CNV}": "24",
  /** Physical pin 25: ~{CMOS}/LVDS; input. */
  "~{CMOS}/LVDS": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: SDOA^{+}; output. */
  "SDOA^{+}": "27",
  /** Physical pin 28: SDOA^{-}; output. */
  "SDOA^{-}": "28",
  /** Physical pin 29: SDOB^{+}; output. */
  "SDOB^{+}": "29",
  /** Physical pin 30: SDOB^{-}; output. */
  "SDOB^{-}": "30",
  /** Physical pin 31: OV_{DD}; power_in. */
  "OV_{DD}_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: CLKOUT^{+}; output. */
  "CLKOUT^{+}": "33",
  /** Physical pin 34: CLKOUT^{-}; output. */
  "CLKOUT^{-}": "34",
  /** Physical pin 35: SDOC^{+}; output. */
  "SDOC^{+}": "35",
  /** Physical pin 36: SDOC^{-}; output. */
  "SDOC^{-}": "36",
  /** Physical pin 37: OV_{DD}; passive. */
  "OV_{DD}_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: SDOD^{+}; output. */
  "SDOD^{+}": "39",
  /** Physical pin 40: SDOD^{-}; output. */
  "SDOD^{-}": "40",
  /** Physical pin 41: SCK^{+}; input. */
  "SCK^{+}": "41",
  /** Physical pin 42: SCK^{-}; input. */
  "SCK^{-}": "42",
  /** Physical pin 43: REFBUFEN; input. */
  "REFBUFEN": "43",
  /** Physical pin 44: V_{DD}; passive. */
  "V_{DD}_44": "44",
  /** Physical pin 45: REFOUT4; passive. */
  "REFOUT4": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: NC; no_connect. */
  "NC_47": "47",
  /** Physical pin 48: NC; no_connect. */
  "NC_48": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: NC; no_connect. */
  "NC_50": "50",
  /** Physical pin 51: NC; no_connect. */
  "NC_51": "51",
  /** Physical pin 52: V_{DD}; passive. */
  "V_{DD}_52": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
}) {
  override schema = "Analog_ADC:LTC2325-16";
  override referencePrefix = "U";
}

/**
 * LTC2358 Buffered Octal, 16 bit, 200ksps/Ch Differential ±10.24V Simultaneous Sampling ADC, 30Vpp common mode range, LQFP-48
 *
 * KiCad symbol: `Analog_ADC:LTC2358-16`. Reference prefix: `U`.
 * Footprint filters: LQFP?48*7x7mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/235816f.pdf
 * Keywords: 16bit Simultaneous Sampling ADC 8 Channels SPI buffered.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2358_16 extends Component.withPins({
  /** Physical pin 1: IN6-; input. */
  "IN6-": "1",
  /** Physical pin 2: IN6+; input. */
  "IN6+": "2",
  /** Physical pin 3: IN5-; input. */
  "IN5-": "3",
  /** Physical pin 4: IN5+; input. */
  "IN5+": "4",
  /** Physical pin 5: IN4-; input. */
  "IN4-": "5",
  /** Physical pin 6: IN4+; input. */
  "IN4+": "6",
  /** Physical pin 7: IN3-; input. */
  "IN3-": "7",
  /** Physical pin 8: IN3+; input. */
  "IN3+": "8",
  /** Physical pin 9: IN2-; input. */
  "IN2-": "9",
  /** Physical pin 10: IN2+; input. */
  "IN2+": "10",
  /** Physical pin 11: IN1-; input. */
  "IN1-": "11",
  /** Physical pin 12: IN1+; input. */
  "IN1+": "12",
  /** Physical pin 13: IN0-; input. */
  "IN0-": "13",
  /** Physical pin 14: IN0+; input. */
  "IN0+": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: VEE; power_in. */
  "VEE_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: REFIN; passive. */
  "REFIN": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: REFBUF; passive. */
  "REFBUF": "21",
  /** Physical pin 22: PD; input. */
  "PD": "22",
  /** Physical pin 23: LVDS/~{CMOS}; input. */
  "LVDS/~{CMOS}": "23",
  /** Physical pin 24: CNV; input. */
  "CNV": "24",
  /** Physical pin 25: SDO0; tri_state. */
  "SDO0": "25",
  /** Physical pin 26: SDI+/SDO1; bidirectional. */
  "SDI+/SDO1": "26",
  /** Physical pin 27: SDI-/SDO2; bidirectional. */
  "SDI-/SDO2": "27",
  /** Physical pin 28: SCKI+/SDO3; bidirectional. */
  "SCKI+/SDO3": "28",
  /** Physical pin 29: SCKI-/SCKI; input. */
  "SCKI-/SCKI": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: OVDD; power_in. */
  "OVDD": "31",
  /** Physical pin 32: SCKO+/SCKO; tri_state. */
  "SCKO+/SCKO": "32",
  /** Physical pin 33: SCKO-/SDO4; tri_state. */
  "SCKO-/SDO4": "33",
  /** Physical pin 34: SDO+/SDO5; tri_state. */
  "SDO+/SDO5": "34",
  /** Physical pin 35: SDO-/SDO6; tri_state. */
  "SDO-/SDO6": "35",
  /** Physical pin 36: SDO7; tri_state. */
  "SDO7": "36",
  /** Physical pin 37: SDI; input. */
  "SDI": "37",
  /** Physical pin 38: BUSY; output. */
  "BUSY": "38",
  /** Physical pin 39: ~{CS}; input. */
  "~{CS}": "39",
  /** Physical pin 40: VDDLBYP; passive. */
  "VDDLBYP": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: VDD; passive. */
  "VDD_42": "42",
  /** Physical pin 43: VDD; power_in. */
  "VDD_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: VEE; passive. */
  "VEE_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: IN7-; input. */
  "IN7-": "47",
  /** Physical pin 48: IN7+; input. */
  "IN7+": "48",
}) {
  override schema = "Analog_ADC:LTC2358-16";
  override referencePrefix = "U";
}

/**
 * LTC2358 Buffered Octal, 18 bit, 200ksps/Ch Differential ±10.24V Simultaneous Sampling ADC, 30Vpp common mode range, LQFP-48
 *
 * KiCad symbol: `Analog_ADC:LTC2358-18`. Reference prefix: `U`.
 * Footprint filters: LQFP?48*7x7mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/235818f.pdf
 * Keywords: 18bit Simultaneous Sampling ADC 8 Channels SPI buffered.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2358_18 extends Component.withPins({
  /** Physical pin 1: IN6-; input. */
  "IN6-": "1",
  /** Physical pin 2: IN6+; input. */
  "IN6+": "2",
  /** Physical pin 3: IN5-; input. */
  "IN5-": "3",
  /** Physical pin 4: IN5+; input. */
  "IN5+": "4",
  /** Physical pin 5: IN4-; input. */
  "IN4-": "5",
  /** Physical pin 6: IN4+; input. */
  "IN4+": "6",
  /** Physical pin 7: IN3-; input. */
  "IN3-": "7",
  /** Physical pin 8: IN3+; input. */
  "IN3+": "8",
  /** Physical pin 9: IN2-; input. */
  "IN2-": "9",
  /** Physical pin 10: IN2+; input. */
  "IN2+": "10",
  /** Physical pin 11: IN1-; input. */
  "IN1-": "11",
  /** Physical pin 12: IN1+; input. */
  "IN1+": "12",
  /** Physical pin 13: IN0-; input. */
  "IN0-": "13",
  /** Physical pin 14: IN0+; input. */
  "IN0+": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: VEE; power_in. */
  "VEE_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: REFIN; passive. */
  "REFIN": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: REFBUF; passive. */
  "REFBUF": "21",
  /** Physical pin 22: PD; input. */
  "PD": "22",
  /** Physical pin 23: LVDS/~{CMOS}; input. */
  "LVDS/~{CMOS}": "23",
  /** Physical pin 24: CNV; input. */
  "CNV": "24",
  /** Physical pin 25: SDO0; tri_state. */
  "SDO0": "25",
  /** Physical pin 26: SDI+/SDO1; bidirectional. */
  "SDI+/SDO1": "26",
  /** Physical pin 27: SDI-/SDO2; bidirectional. */
  "SDI-/SDO2": "27",
  /** Physical pin 28: SCKI+/SDO3; bidirectional. */
  "SCKI+/SDO3": "28",
  /** Physical pin 29: SCKI-/SCKI; input. */
  "SCKI-/SCKI": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: OVDD; power_in. */
  "OVDD": "31",
  /** Physical pin 32: SCKO+/SCKO; tri_state. */
  "SCKO+/SCKO": "32",
  /** Physical pin 33: SCKO-/SDO4; tri_state. */
  "SCKO-/SDO4": "33",
  /** Physical pin 34: SDO+/SDO5; tri_state. */
  "SDO+/SDO5": "34",
  /** Physical pin 35: SDO-/SDO6; tri_state. */
  "SDO-/SDO6": "35",
  /** Physical pin 36: SDO7; tri_state. */
  "SDO7": "36",
  /** Physical pin 37: SDI; input. */
  "SDI": "37",
  /** Physical pin 38: BUSY; output. */
  "BUSY": "38",
  /** Physical pin 39: ~{CS}; input. */
  "~{CS}": "39",
  /** Physical pin 40: VDDLBYP; passive. */
  "VDDLBYP": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: VDD; passive. */
  "VDD_42": "42",
  /** Physical pin 43: VDD; power_in. */
  "VDD_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: VEE; passive. */
  "VEE_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: IN7-; input. */
  "IN7-": "47",
  /** Physical pin 48: IN7+; input. */
  "IN7+": "48",
}) {
  override schema = "Analog_ADC:LTC2358-18";
  override referencePrefix = "U";
}

/**
 * Analog to Digital Converter, Single Channel, 16-Bit, 30/60 SPS, 2.7V to 5.5V, I2C interface, DFN-8
 *
 * KiCad symbol: `Analog_ADC:LTC2451xDDB`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2451fg.pdf
 * Keywords: analog to digital converter adc i2c twi single channel delta sigma 16 bit.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x3mm_P0.5mm_EP0.61x2.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2451xDDB extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: REF-; power_in. */
  "REF-": "2",
  /** Physical pin 3: REF+; power_in. */
  "REF+": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: IN; input. */
  "IN": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Analog_ADC:LTC2451xDDB";
  override referencePrefix = "U";
}

/**
 * Analog to Digital Converter, Single Channel, 16-Bit, 30/60 SPS, 2.7V to 5.5V, I2C interface, TSOT-23-6
 *
 * KiCad symbol: `Analog_ADC:LTC2451xTS8`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2451fg.pdf
 * Keywords: analog to digital converter adc i2c twi single channel delta sigma 16 bit.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2451xTS8 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: REF-; power_in. */
  "REF-": "2",
  /** Physical pin 3: REF+; power_in. */
  "REF+": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: IN; input. */
  "IN": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
}) {
  override schema = "Analog_ADC:LTC2451xTS8";
  override referencePrefix = "U";
}

/**
 * 32-Bit Oversampling ADC with Configurable Digital Filter, 0°C to 70°C, DFN-24 package
 *
 * KiCad symbol: `Analog_ADC:LTC2508CDKD-32`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*4x7mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/250832fc.pdf
 * Keywords: LT ADC 32bit.
 * Default footprint: Package_DFN_QFN:DFN-24-1EP_4x7mm_P0.5mm_EP2.64x6.44mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2508CDKD_32 extends Component.withPins({
  /** Physical pin 1: ~{RDLA}; input. */
  "~{RDLA}": "1",
  /** Physical pin 2: ~{RDLB}; input. */
  "~{RDLB}": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: IN+; input. */
  "IN+": "5",
  /** Physical pin 6: IN-; input. */
  "IN-": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: REF; passive. */
  "REF_8": "8",
  /** Physical pin 9: REF; passive. */
  "REF_9": "9",
  /** Physical pin 10: REF; passive. */
  "REF_10": "10",
  /** Physical pin 11: SEL0; input. */
  "SEL0": "11",
  /** Physical pin 12: SEL1; input. */
  "SEL1": "12",
  /** Physical pin 13: MCLK; input. */
  "MCLK": "13",
  /** Physical pin 14: SYNC; input. */
  "SYNC": "14",
  /** Physical pin 15: ~{DRL}; output. */
  "~{DRL}": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: SDOA; tri_state. */
  "SDOA": "17",
  /** Physical pin 18: SCKA; input. */
  "SCKA": "18",
  /** Physical pin 19: SCKB; input. */
  "SCKB": "19",
  /** Physical pin 20: SDOB; tri_state. */
  "SDOB": "20",
  /** Physical pin 21: BUSY; output. */
  "BUSY": "21",
  /** Physical pin 22: OV_{DD}; power_in. */
  "OV_{DD}": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Analog_ADC:LTC2508CDKD-32";
  override referencePrefix = "U";
}

/**
 * 32-Bit Oversampling ADC with Configurable Digital Filter, -40°C to 85°C, DFN-24 package
 *
 * KiCad symbol: `Analog_ADC:LTC2508IDKD-32`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*4x7mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/250832fc.pdf
 * Keywords: LT ADC 32bit.
 * Default footprint: Package_DFN_QFN:DFN-24-1EP_4x7mm_P0.5mm_EP2.64x6.44mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2508IDKD_32 extends Component.withPins({
  /** Physical pin 1: ~{RDLA}; input. */
  "~{RDLA}": "1",
  /** Physical pin 2: ~{RDLB}; input. */
  "~{RDLB}": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: IN+; input. */
  "IN+": "5",
  /** Physical pin 6: IN-; input. */
  "IN-": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: REF; passive. */
  "REF_8": "8",
  /** Physical pin 9: REF; passive. */
  "REF_9": "9",
  /** Physical pin 10: REF; passive. */
  "REF_10": "10",
  /** Physical pin 11: SEL0; input. */
  "SEL0": "11",
  /** Physical pin 12: SEL1; input. */
  "SEL1": "12",
  /** Physical pin 13: MCLK; input. */
  "MCLK": "13",
  /** Physical pin 14: SYNC; input. */
  "SYNC": "14",
  /** Physical pin 15: ~{DRL}; output. */
  "~{DRL}": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: SDOA; tri_state. */
  "SDOA": "17",
  /** Physical pin 18: SCKA; input. */
  "SCKA": "18",
  /** Physical pin 19: SCKB; input. */
  "SCKB": "19",
  /** Physical pin 20: SDOB; tri_state. */
  "SDOB": "20",
  /** Physical pin 21: BUSY; output. */
  "BUSY": "21",
  /** Physical pin 22: OV_{DD}; power_in. */
  "OV_{DD}": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Analog_ADC:LTC2508IDKD-32";
  override referencePrefix = "U";
}

/**
 * 8-Channel Single-Ended or 4-Channel Differential 8-Bit ADC, SSOP-20
 *
 * KiCad symbol: `Analog_ADC:MAX1112`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX1112-MAX1113.pdf
 * Keywords: MAXIM ADC 5V 8-Bit SPI QSPI MICROWIRE.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1112 extends Component.withPins({
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
  /** Physical pin 9: COM; power_in. */
  "COM": "9",
  /** Physical pin 10: ~{SHDN}; input. */
  "~{SHDN}": "10",
  /** Physical pin 11: REFIN; power_in. */
  "REFIN": "11",
  /** Physical pin 12: REFOUT; power_out. */
  "REFOUT": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND": "13",
  /** Physical pin 14: DGND; power_in. */
  "DGND": "14",
  /** Physical pin 15: DOUT; output. */
  "DOUT": "15",
  /** Physical pin 16: SSTRB; output. */
  "SSTRB": "16",
  /** Physical pin 17: DIN; input. */
  "DIN": "17",
  /** Physical pin 18: ~{CS}; input. */
  "~{CS}": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Analog_ADC:MAX1112";
  override referencePrefix = "U";
}

/**
 * 4-Channel 8-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11120xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 8-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11120xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: GND; passive. */
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
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: ~{CNVST}; input. */
  "~{CNVST}": "12",
  /** Physical pin 13: REF-; input. */
  "REF-": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11120xTI";
  override referencePrefix = "U";
}

/**
 * 4-Channel 10-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11121xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 10-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11121xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: GND; passive. */
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
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: ~{CNVST}; input. */
  "~{CNVST}": "12",
  /** Physical pin 13: REF-; input. */
  "REF-": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11121xTI";
  override referencePrefix = "U";
}

/**
 * 4-Channel 12-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11122xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 12-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11122xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: GND; passive. */
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
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: ~{CNVST}; input. */
  "~{CNVST}": "12",
  /** Physical pin 13: REF-; input. */
  "REF-": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11122xTI";
  override referencePrefix = "U";
}

/**
 * 8-Channel 8-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11123xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 8-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11123xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: AIN4; input. */
  "AIN4": "2",
  /** Physical pin 3: AIN5; input. */
  "AIN5": "3",
  /** Physical pin 4: AIN6; input. */
  "AIN6": "4",
  /** Physical pin 5: AIN7; input. */
  "AIN7": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: ~{CNVST}; input. */
  "~{CNVST}": "12",
  /** Physical pin 13: REF-; input. */
  "REF-": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11123xTI";
  override referencePrefix = "U";
}

/**
 * 8-Channel 10-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11124xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 10-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11124xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: AIN4; input. */
  "AIN4": "2",
  /** Physical pin 3: AIN5; input. */
  "AIN5": "3",
  /** Physical pin 4: AIN6; input. */
  "AIN6": "4",
  /** Physical pin 5: AIN7; input. */
  "AIN7": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: ~{CNVST}; input. */
  "~{CNVST}": "12",
  /** Physical pin 13: REF-; input. */
  "REF-": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11124xTI";
  override referencePrefix = "U";
}

/**
 * 8-Channel 12-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11125xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 12-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11125xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: AIN4; input. */
  "AIN4": "2",
  /** Physical pin 3: AIN5; input. */
  "AIN5": "3",
  /** Physical pin 4: AIN6; input. */
  "AIN6": "4",
  /** Physical pin 5: AIN7; input. */
  "AIN7": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: ~{CNVST}; input. */
  "~{CNVST}": "12",
  /** Physical pin 13: REF-; input. */
  "REF-": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11125xTI";
  override referencePrefix = "U";
}

/**
 * 16-Channel 8-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11126xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 8-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11126xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: AIN4; input. */
  "AIN4": "2",
  /** Physical pin 3: AIN5; input. */
  "AIN5": "3",
  /** Physical pin 4: AIN6; input. */
  "AIN6": "4",
  /** Physical pin 5: AIN7; input. */
  "AIN7": "5",
  /** Physical pin 6: AIN8; input. */
  "AIN8": "6",
  /** Physical pin 7: AIN9; input. */
  "AIN9": "7",
  /** Physical pin 8: AIN10; input. */
  "AIN10": "8",
  /** Physical pin 9: AIN11; input. */
  "AIN11": "9",
  /** Physical pin 10: AIN12; input. */
  "AIN12": "10",
  /** Physical pin 11: AIN13; input. */
  "AIN13": "11",
  /** Physical pin 12: ~{CNVST}/AIN14; input. */
  "~{CNVST}/AIN14": "12",
  /** Physical pin 13: REF-/AIN15; input. */
  "REF-/AIN15": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11126xTI";
  override referencePrefix = "U";
}

/**
 * 16-Channel 10-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11127xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 10-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11127xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: AIN4; input. */
  "AIN4": "2",
  /** Physical pin 3: AIN5; input. */
  "AIN5": "3",
  /** Physical pin 4: AIN6; input. */
  "AIN6": "4",
  /** Physical pin 5: AIN7; input. */
  "AIN7": "5",
  /** Physical pin 6: AIN8; input. */
  "AIN8": "6",
  /** Physical pin 7: AIN9; input. */
  "AIN9": "7",
  /** Physical pin 8: AIN10; input. */
  "AIN10": "8",
  /** Physical pin 9: AIN11; input. */
  "AIN11": "9",
  /** Physical pin 10: AIN12; input. */
  "AIN12": "10",
  /** Physical pin 11: AIN13; input. */
  "AIN13": "11",
  /** Physical pin 12: ~{CNVST}/AIN14; input. */
  "~{CNVST}/AIN14": "12",
  /** Physical pin 13: REF-/AIN15; input. */
  "REF-/AIN15": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11127xTI";
  override referencePrefix = "U";
}

/**
 * 16-Channel 12-Bit 1.5MHz Full-Linear Bandwidth External Reference High-Speed Low-Power ADC, QFN-28
 *
 * KiCad symbol: `Analog_ADC:MAX11128xTI`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11120-MAX11128.pdf
 * Keywords: MAXIM ADC 3.3V 12-Bit SPI.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11128xTI extends Component.withPins({
  /** Physical pin 1: AIN3; input. */
  "AIN3": "1",
  /** Physical pin 2: AIN4; input. */
  "AIN4": "2",
  /** Physical pin 3: AIN5; input. */
  "AIN5": "3",
  /** Physical pin 4: AIN6; input. */
  "AIN6": "4",
  /** Physical pin 5: AIN7; input. */
  "AIN7": "5",
  /** Physical pin 6: AIN8; input. */
  "AIN8": "6",
  /** Physical pin 7: AIN9; input. */
  "AIN9": "7",
  /** Physical pin 8: AIN10; input. */
  "AIN10": "8",
  /** Physical pin 9: AIN11; input. */
  "AIN11": "9",
  /** Physical pin 10: AIN12; input. */
  "AIN12": "10",
  /** Physical pin 11: AIN13; input. */
  "AIN13": "11",
  /** Physical pin 12: ~{CNVST}/AIN14; input. */
  "~{CNVST}/AIN14": "12",
  /** Physical pin 13: REF-/AIN15; input. */
  "REF-/AIN15": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: REF+; input. */
  "REF+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: VDD; passive. */
  "VDD_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: DIN; input. */
  "DIN": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: OVDD; power_in. */
  "OVDD": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
  /** Physical pin 25: ~{EOC}; output. */
  "~{EOC}": "25",
  /** Physical pin 26: AIN0; input. */
  "AIN0": "26",
  /** Physical pin 27: AIN1; input. */
  "AIN1": "27",
  /** Physical pin 28: AIN2; input. */
  "AIN2": "28",
  /** Physical pin 29: EP; power_in. */
  "EP": "29",
}) {
  override schema = "Analog_ADC:MAX11128xTI";
  override referencePrefix = "U";
}

/**
 * 4-Channel Single-Ended or 2-Channel Differential 8-Bit ADC, QSOP-16
 *
 * KiCad symbol: `Analog_ADC:MAX1113`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX1112-MAX1113.pdf
 * Keywords: MAXIM ADC 5V 8-Bit SPI QSPI MICROWIRE.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1113 extends Component.withPins({
  /** Physical pin 1: CH0; input. */
  "CH0": "1",
  /** Physical pin 2: CH1; input. */
  "CH1": "2",
  /** Physical pin 3: CH2; input. */
  "CH2": "3",
  /** Physical pin 4: CH3; input. */
  "CH3": "4",
  /** Physical pin 5: COM; power_in. */
  "COM": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: REFIN; power_in. */
  "REFIN": "7",
  /** Physical pin 8: REFOUT; power_out. */
  "REFOUT": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: DGND; power_in. */
  "DGND": "10",
  /** Physical pin 11: DOUT; output. */
  "DOUT": "11",
  /** Physical pin 12: SSTRB; output. */
  "SSTRB": "12",
  /** Physical pin 13: DIN; input. */
  "DIN": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: SCLK; input. */
  "SCLK": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Analog_ADC:MAX1113";
  override referencePrefix = "U";
}

/**
 * 4-channel single-ended or 2-channel, differential, 12-bit ADC, I2C, 4.096V internal reference, 8-MSOP package
 *
 * KiCad symbol: `Analog_ADC:MAX11612`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11612-MAX11617.pdf
 * Keywords: adc i2c 4ch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11612 extends Component.withPins({
  /** Physical pin 1: AIN0; input. */
  "AIN0": "1",
  /** Physical pin 2: AIN1; input. */
  "AIN1": "2",
  /** Physical pin 3: AIN2; input. */
  "AIN2": "3",
  /** Physical pin 4: AIN3/REF; input. */
  "AIN3/REF": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: Vdd; power_in. */
  "Vdd": "8",
}) {
  override schema = "Analog_ADC:MAX11612";
  override referencePrefix = "U";
}

/**
 * 4-channel single-ended or 2-channel, differential, 12-bit ADC, I2C, 2.048V internal reference, 8-MSOP package
 *
 * KiCad symbol: `Analog_ADC:MAX11613`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11612-MAX11617.pdf
 * Keywords: adc i2c 4ch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11613 extends Component.withPins({
  /** Physical pin 1: AIN0; input. */
  "AIN0": "1",
  /** Physical pin 2: AIN1; input. */
  "AIN1": "2",
  /** Physical pin 3: AIN2; input. */
  "AIN2": "3",
  /** Physical pin 4: AIN3/REF; input. */
  "AIN3/REF": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: Vdd; power_in. */
  "Vdd": "8",
}) {
  override schema = "Analog_ADC:MAX11613";
  override referencePrefix = "U";
}

/**
 * 8-channel single-ended or 4-channel, differential, 12-bit ADC, I2C, 4.096V internal reference, 16-QSOP package
 *
 * KiCad symbol: `Analog_ADC:MAX11614`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11612-MAX11617.pdf
 * Keywords: adc i2c 8ch.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11614 extends Component.withPins({
  /** Physical pin 1: REF; input. */
  "REF": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: AIN0; input. */
  "AIN0": "5",
  /** Physical pin 6: AIN1; input. */
  "AIN1": "6",
  /** Physical pin 7: AIN2; input. */
  "AIN2": "7",
  /** Physical pin 8: AIN3; input. */
  "AIN3": "8",
  /** Physical pin 9: AIN4; input. */
  "AIN4": "9",
  /** Physical pin 10: AIN5; input. */
  "AIN5": "10",
  /** Physical pin 11: AIN6; input. */
  "AIN6": "11",
  /** Physical pin 12: AIN7; input. */
  "AIN7": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: Vdd; power_in. */
  "Vdd": "16",
}) {
  override schema = "Analog_ADC:MAX11614";
  override referencePrefix = "U";
}

/**
 * 8-channel single-ended or 4-channel, differential, 12-bit ADC, I2C, 2.048V internal reference, 16-QSOP package
 *
 * KiCad symbol: `Analog_ADC:MAX11615`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11612-MAX11617.pdf
 * Keywords: adc i2c 8ch.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11615 extends Component.withPins({
  /** Physical pin 1: REF; input. */
  "REF": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: AIN0; input. */
  "AIN0": "5",
  /** Physical pin 6: AIN1; input. */
  "AIN1": "6",
  /** Physical pin 7: AIN2; input. */
  "AIN2": "7",
  /** Physical pin 8: AIN3; input. */
  "AIN3": "8",
  /** Physical pin 9: AIN4; input. */
  "AIN4": "9",
  /** Physical pin 10: AIN5; input. */
  "AIN5": "10",
  /** Physical pin 11: AIN6; input. */
  "AIN6": "11",
  /** Physical pin 12: AIN7; input. */
  "AIN7": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: Vdd; power_in. */
  "Vdd": "16",
}) {
  override schema = "Analog_ADC:MAX11615";
  override referencePrefix = "U";
}

/**
 * 12-channel single-ended or 6-channel, differential, 12-bit ADC, I2C, 4.096V internal reference, 16-QSOP package
 *
 * KiCad symbol: `Analog_ADC:MAX11616`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11612-MAX11617.pdf
 * Keywords: adc i2c 12ch.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11616 extends Component.withPins({
  /** Physical pin 1: AIN11; input. */
  "AIN11": "1",
  /** Physical pin 2: AIN10; input. */
  "AIN10": "2",
  /** Physical pin 3: AIN9; input. */
  "AIN9": "3",
  /** Physical pin 4: AIN8; input. */
  "AIN8": "4",
  /** Physical pin 5: AIN0; input. */
  "AIN0": "5",
  /** Physical pin 6: AIN1; input. */
  "AIN1": "6",
  /** Physical pin 7: AIN2; input. */
  "AIN2": "7",
  /** Physical pin 8: AIN3; input. */
  "AIN3": "8",
  /** Physical pin 9: AIN4; input. */
  "AIN4": "9",
  /** Physical pin 10: AIN5; input. */
  "AIN5": "10",
  /** Physical pin 11: AIN6; input. */
  "AIN6": "11",
  /** Physical pin 12: AIN7; input. */
  "AIN7": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: Vdd; power_in. */
  "Vdd": "16",
}) {
  override schema = "Analog_ADC:MAX11616";
  override referencePrefix = "U";
}

/**
 * 12-channel single-ended or 6-channel, differential, 12-bit ADC, I2C, 2.048V internal reference, 16-QSOP package
 *
 * KiCad symbol: `Analog_ADC:MAX11617`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX11612-MAX11617.pdf
 * Keywords: adc i2c 12ch.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX11617 extends Component.withPins({
  /** Physical pin 1: AIN11; input. */
  "AIN11": "1",
  /** Physical pin 2: AIN10; input. */
  "AIN10": "2",
  /** Physical pin 3: AIN9; input. */
  "AIN9": "3",
  /** Physical pin 4: AIN8; input. */
  "AIN8": "4",
  /** Physical pin 5: AIN0; input. */
  "AIN0": "5",
  /** Physical pin 6: AIN1; input. */
  "AIN1": "6",
  /** Physical pin 7: AIN2; input. */
  "AIN2": "7",
  /** Physical pin 8: AIN3; input. */
  "AIN3": "8",
  /** Physical pin 9: AIN4; input. */
  "AIN4": "9",
  /** Physical pin 10: AIN5; input. */
  "AIN5": "10",
  /** Physical pin 11: AIN6; input. */
  "AIN6": "11",
  /** Physical pin 12: AIN7; input. */
  "AIN7": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: Vdd; power_in. */
  "Vdd": "16",
}) {
  override schema = "Analog_ADC:MAX11617";
  override referencePrefix = "U";
}

/**
 * 4-Channel 10-Bit ADC with Serial Interface, +2.7V to +5.25V, Internal 2.5V Reference, Low-Power
 *
 * KiCad symbol: `Analog_ADC:MAX1248`. Reference prefix: `U`.
 * Footprint filters: DIP*, QSOP*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1248-MAX1249.pdf
 * Keywords: 10-Bit ADC Internal Reference Serial 4-Channel Maxim.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1248 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CH0; input. */
  "CH0": "2",
  /** Physical pin 3: CH1; input. */
  "CH1": "3",
  /** Physical pin 4: CH2; input. */
  "CH2": "4",
  /** Physical pin 5: CH3; input. */
  "CH3": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: ~{SHDN}; tri_state. */
  "~{SHDN}": "7",
  /** Physical pin 8: VREF; power_in. */
  "VREF": "8",
  /** Physical pin 9: REFADJ; input. */
  "REFADJ": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND": "10",
  /** Physical pin 11: DGND; power_in. */
  "DGND": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: SSTRB; output. */
  "SSTRB": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: ~{CS}; input. */
  "~{CS}": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
}) {
  override schema = "Analog_ADC:MAX1248";
  override referencePrefix = "U";
}

/**
 * 4-Channel 10-Bit ADC with Serial Interface, +2.7V to +5.25V, Low-Power
 *
 * KiCad symbol: `Analog_ADC:MAX1249`. Reference prefix: `U`.
 * Footprint filters: DIP*, QSOP*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1248-MAX1249.pdf
 * Keywords: 10-Bit ADC Serial 4-Channel Maxim.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1249 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CH0; input. */
  "CH0": "2",
  /** Physical pin 3: CH1; input. */
  "CH1": "3",
  /** Physical pin 4: CH2; input. */
  "CH2": "4",
  /** Physical pin 5: CH3; input. */
  "CH3": "5",
  /** Physical pin 6: COM; power_in. */
  "COM": "6",
  /** Physical pin 7: ~{SHDN}; tri_state. */
  "~{SHDN}": "7",
  /** Physical pin 8: VREF; power_in. */
  "VREF": "8",
  /** Physical pin 9: REFADJ; input. */
  "REFADJ": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND": "10",
  /** Physical pin 11: DGND; power_in. */
  "DGND": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: SSTRB; output. */
  "SSTRB": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: ~{CS}; input. */
  "~{CS}": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
}) {
  override schema = "Analog_ADC:MAX1249";
  override referencePrefix = "U";
}

/**
 * 1.8Msps, Single-Supply, Low-Power, True-Differential, 12-Bit ADCs, bipolar input
 *
 * KiCad symbol: `Analog_ADC:MAX1274`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.8mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1274-MAX1275.pdf
 * Keywords: 12bit ADC 1CH diff differential.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1274 extends Component.withPins({
  /** Physical pin 1: AIN-; input. */
  "AIN-": "1",
  /** Physical pin 2: REF; input. */
  "REF": "2",
  /** Physical pin 3: RGND; power_in. */
  "RGND": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VL; power_in. */
  "VL": "7",
  /** Physical pin 8: DOUT; output. */
  "DOUT": "8",
  /** Physical pin 9: CNVST; input. */
  "CNVST": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: AIN+; input. */
  "AIN+": "12",
  /** Physical pin 13: PAD; power_in. */
  "PAD": "13",
}) {
  override schema = "Analog_ADC:MAX1274";
  override referencePrefix = "U";
}

/**
 * 1.8Msps, Single-Supply, Low-Power, True-Differential, 12-Bit ADCs, unipolar input
 *
 * KiCad symbol: `Analog_ADC:MAX1275`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.8mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1274-MAX1275.pdf
 * Keywords: 12bit ADC 1CH diff differential.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1275 extends Component.withPins({
  /** Physical pin 1: AIN-; input. */
  "AIN-": "1",
  /** Physical pin 2: REF; input. */
  "REF": "2",
  /** Physical pin 3: RGND; power_in. */
  "RGND": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VL; power_in. */
  "VL": "7",
  /** Physical pin 8: DOUT; output. */
  "DOUT": "8",
  /** Physical pin 9: CNVST; input. */
  "CNVST": "9",
  /** Physical pin 10: SCLK; input. */
  "SCLK": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: AIN+; input. */
  "AIN+": "12",
  /** Physical pin 13: PAD; power_in. */
  "PAD": "13",
}) {
  override schema = "Analog_ADC:MAX1275";
  override referencePrefix = "U";
}

/**
 * Dual Channel 10-Bit A/D Converter with SPI Serial Interface
 *
 * KiCad symbol: `Analog_ADC:MCP3002`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm**, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*3x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21294E.pdf
 * Keywords: Dual Channel 10-Bit ADC SPI 2CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3002 extends Component.withPins({
  /** Physical pin 1: ~{CS}/SHDN; input. */
  "~{CS}/SHDN": "1",
  /** Physical pin 2: CH0; passive. */
  "CH0": "2",
  /** Physical pin 3: CH1; passive. */
  "CH1": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: DIN; input. */
  "DIN": "5",
  /** Physical pin 6: DOUT; output. */
  "DOUT": "6",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 8: VDD/VREF; power_in. */
  "VDD/VREF": "8",
}) {
  override schema = "Analog_ADC:MCP3002";
  override referencePrefix = "U";
}

/**
 * 4-Channel 10-Bit A/D Converters with SPI Interface
 *
 * KiCad symbol: `Analog_ADC:MCP3004`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21295C.pdf
 * Keywords: 10-Bit ADC SPI 4CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3004 extends Component.withPins({
  /** Physical pin 1: CH0; input. */
  "CH0": "1",
  /** Physical pin 2: CH1; input. */
  "CH1": "2",
  /** Physical pin 3: CH2; input. */
  "CH2": "3",
  /** Physical pin 4: CH3; input. */
  "CH3": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: DGND; power_in. */
  "DGND": "7",
  /** Physical pin 8: ~{CS}/SHDN; input. */
  "~{CS}/SHDN": "8",
  /** Physical pin 9: Din; input. */
  "Din": "9",
  /** Physical pin 10: Dout; output. */
  "Dout": "10",
  /** Physical pin 11: CLK; input. */
  "CLK": "11",
  /** Physical pin 12: AGND; power_in. */
  "AGND": "12",
  /** Physical pin 13: Vref; power_in. */
  "Vref": "13",
  /** Physical pin 14: Vdd; power_in. */
  "Vdd": "14",
}) {
  override schema = "Analog_ADC:MCP3004";
  override referencePrefix = "U";
}

/**
 * A/D Converter, 12-Bit, 8-Channel, SPI Interface , 2.7V-5.5V
 *
 * KiCad symbol: `Analog_ADC:MCP3208`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21298c.pdf
 * Keywords: 12bit ADC Reference Single Supply SPI 8ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3208 extends Component.withPins({
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
  /** Physical pin 9: DGND; power_in. */
  "DGND": "9",
  /** Physical pin 10: ~{CS}/SHDN; input. */
  "~{CS}/SHDN": "10",
  /** Physical pin 11: Din; input. */
  "Din": "11",
  /** Physical pin 12: Dout; output. */
  "Dout": "12",
  /** Physical pin 13: CLK; input. */
  "CLK": "13",
  /** Physical pin 14: AGND; power_in. */
  "AGND": "14",
  /** Physical pin 15: Vref; power_in. */
  "Vref": "15",
  /** Physical pin 16: Vdd; power_in. */
  "Vdd": "16",
}) {
  override schema = "Analog_ADC:MCP3208";
  override referencePrefix = "U";
}

/**
 * A/D Converter, 10-Bit, 8-Channel, SPI Interface , 2.7V-5.5V
 *
 * KiCad symbol: `Analog_ADC:MCP3008`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21295d.pdf
 * Keywords: 12bit ADC Reference Single Supply SPI 8CH.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3008 extends Component.withPins({
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
  /** Physical pin 9: DGND; power_in. */
  "DGND": "9",
  /** Physical pin 10: ~{CS}/SHDN; input. */
  "~{CS}/SHDN": "10",
  /** Physical pin 11: Din; input. */
  "Din": "11",
  /** Physical pin 12: Dout; output. */
  "Dout": "12",
  /** Physical pin 13: CLK; input. */
  "CLK": "13",
  /** Physical pin 14: AGND; power_in. */
  "AGND": "14",
  /** Physical pin 15: Vref; power_in. */
  "Vref": "15",
  /** Physical pin 16: Vdd; power_in. */
  "Vdd": "16",
}) {
  override schema = "Analog_ADC:MCP3008";
  override referencePrefix = "U";
}

/**
 * 2.7V 12-Bit A/D Converter with SPI™ Serial Interface, PDIP-8/SOIC-8/MSOP-8/TSSOP-8
 *
 * KiCad symbol: `Analog_ADC:MCP3201`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21290D.pdf
 * Keywords: 12-Bit Differential ADC SPI 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3201 extends Component.withPins({
  /** Physical pin 1: Vref; power_in. */
  "Vref": "1",
  /** Physical pin 2: IN+; input. */
  "IN+": "2",
  /** Physical pin 3: IN-; input. */
  "IN-": "3",
  /** Physical pin 4: Vss; power_in. */
  "Vss": "4",
  /** Physical pin 5: ~{CS}/SHDN; input. */
  "~{CS}/SHDN": "5",
  /** Physical pin 6: Dout; output. */
  "Dout": "6",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 8: Vdd; power_in. */
  "Vdd": "8",
}) {
  override schema = "Analog_ADC:MCP3201";
  override referencePrefix = "U";
}

/**
 * A/D Converter, 12-Bit, 2-Channel, SPI Interface, 2.7V-5.5V
 *
 * KiCad symbol: `Analog_ADC:MCP3202`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm**, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*3x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21034D.pdf
 * Keywords: 12bit ADC Reference Single Supply SPI 2ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3202 extends Component.withPins({
  /** Physical pin 1: ~{CS}/SHDN; input. */
  "~{CS}/SHDN": "1",
  /** Physical pin 2: CH0; passive. */
  "CH0": "2",
  /** Physical pin 3: CH1; passive. */
  "CH1": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: DIN; input. */
  "DIN": "5",
  /** Physical pin 6: DOUT; output. */
  "DOUT": "6",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 8: VDD/VREF; power_in. */
  "VDD/VREF": "8",
}) {
  override schema = "Analog_ADC:MCP3202";
  override referencePrefix = "U";
}

/**
 * A/D Converter, 12-Bit, 4-Channel, SPI Interface, 2.7V-5.5V
 *
 * KiCad symbol: `Analog_ADC:MCP3204`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21298c.pdf
 * Keywords: 12bit ADC Reference Single Supply SPI 4ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3204 extends Component.withPins({
  /** Physical pin 1: CH0; input. */
  "CH0": "1",
  /** Physical pin 2: CH1; input. */
  "CH1": "2",
  /** Physical pin 3: CH2; input. */
  "CH2": "3",
  /** Physical pin 4: CH3; input. */
  "CH3": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: DGND; power_in. */
  "DGND": "7",
  /** Physical pin 8: ~{CS}/SHDN; input. */
  "~{CS}/SHDN": "8",
  /** Physical pin 9: Din; input. */
  "Din": "9",
  /** Physical pin 10: Dout; output. */
  "Dout": "10",
  /** Physical pin 11: CLK; input. */
  "CLK": "11",
  /** Physical pin 12: AGND; power_in. */
  "AGND": "12",
  /** Physical pin 13: Vref; power_in. */
  "Vref": "13",
  /** Physical pin 14: Vdd; power_in. */
  "Vdd": "14",
}) {
  override schema = "Analog_ADC:MCP3204";
  override referencePrefix = "U";
}

/**
 * Single channel 12bit SAR Analog to Digital Converter, I2C Interface, SOT-23-5
 *
 * KiCad symbol: `Analog_ADC:MCP3221`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/20001732e.pdf
 * Keywords: ADC 1ch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3221 extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: A_{IN}; input. */
  "A_{IN}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
}) {
  override schema = "Analog_ADC:MCP3221";
  override referencePrefix = "U";
}

/**
 * 13-Bit Differential Input, Low Power A/D Converter with SPI Interface
 *
 * KiCad symbol: `Analog_ADC:MCP3301`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21700D.pdf
 * Keywords: 13-Bit Differential ADC SPI  1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3301 extends Component.withPins({
  /** Physical pin 1: Vref; power_in. */
  "Vref": "1",
  /** Physical pin 2: IN+; input. */
  "IN+": "2",
  /** Physical pin 3: IN-; input. */
  "IN-": "3",
  /** Physical pin 4: Vss; power_in. */
  "Vss": "4",
  /** Physical pin 5: ~{CS}/SHDN; input. */
  "~{CS}/SHDN": "5",
  /** Physical pin 6: Dout; output. */
  "Dout": "6",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 8: Vdd; power_in. */
  "Vdd": "8",
}) {
  override schema = "Analog_ADC:MCP3301";
  override referencePrefix = "U";
}

/**
 * Single Delta-Sigma 16bit Analog to Digital Converter, I2C Interface, SOT-23-6
 *
 * KiCad symbol: `Analog_ADC:MCP3425Axx-xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22072b.pdf
 * Keywords: Sigma-Delta ADC Converter 16bit I2C  1ch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3425Axx_xCH extends Component.withPins({
  /** Physical pin 1: Vin+; passive. */
  "Vin+": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: V_{DD}; power_in. */
  "V_{DD}": "5",
  /** Physical pin 6: Vin-; passive. */
  "Vin-": "6",
}) {
  override schema = "Analog_ADC:MCP3425Axx-xCH";
  override referencePrefix = "U";
}

/**
 * Single Delta-Sigma 18bit Analog to Digital Converter, I2C Interface, SOT-23-6
 *
 * KiCad symbol: `Analog_ADC:MCP3421A0T-ECH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22003e.pdf
 * Keywords: Sigma-Delta ADC Converter 18bit I2C 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3421A0T_ECH extends Component.withPins({
  /** Physical pin 1: Vin+; passive. */
  "Vin+": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: V_{DD}; power_in. */
  "V_{DD}": "5",
  /** Physical pin 6: Vin-; passive. */
  "Vin-": "6",
}) {
  override schema = "Analog_ADC:MCP3421A0T-ECH";
  override referencePrefix = "U";
}

/**
 * 2-Channel, 18-Bit, Delta-Sigma AD-Converter, I²C Interface, Reference, SOIC-8
 *
 * KiCad symbol: `Analog_ADC:MCP3422Axx-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22088c.pdf
 * Keywords: 18-Bit ADC I2C Delta-Sigma-ADC Delta-Sigma-ADC Reference 2ch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3422Axx_xSN extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: CH2+; input. */
  "CH2+": "7",
  /** Physical pin 8: CH2-; input. */
  "CH2-": "8",
}) {
  override schema = "Analog_ADC:MCP3422Axx-xSN";
  override referencePrefix = "U";
}

/**
 * 2-Channel, 18-Bit, Delta-Sigma AD-Converter, I²C Interface, Reference, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:MCP3422Axx-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22088c.pdf
 * Keywords: 18-Bit ADC I2C Delta-Sigma-ADC Delta-Sigma-ADC Reference 2ch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3422Axx_xMS extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: CH2+; input. */
  "CH2+": "7",
  /** Physical pin 8: CH2-; input. */
  "CH2-": "8",
}) {
  override schema = "Analog_ADC:MCP3422Axx-xMS";
  override referencePrefix = "U";
}

/**
 * 2-Channel, 18-Bit, Delta-Sigma AD-Converter, I²C Interface, Reference, MSOP-10
 *
 * KiCad symbol: `Analog_ADC:MCP3423x-xUN`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22088c.pdf
 * Keywords: 18-Bit ADC I2C Delta-Sigma-ADC Delta-Sigma-ADC Reference 2ch.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3423x_xUN extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}": "3",
  /** Physical pin 4: CH2+; input. */
  "CH2+": "4",
  /** Physical pin 5: CH2-; input. */
  "CH2-": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: A0; input. */
  "A0": "9",
  /** Physical pin 10: A1; input. */
  "A1": "10",
}) {
  override schema = "Analog_ADC:MCP3423x-xUN";
  override referencePrefix = "U";
}

/**
 * 4-Channel, 18-Bit, Delta-Sigma AD-Converter, I²C Interface, Reference, SOIC-14
 *
 * KiCad symbol: `Analog_ADC:MCP3424x-xSL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22088c.pdf
 * Keywords: 18-Bit ADC I2C IIC I²C Delta-Sigma-ADC Reference 4ch quadruple.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3424x_xSL extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: CH2+; input. */
  "CH2+": "3",
  /** Physical pin 4: CH2-; input. */
  "CH2-": "4",
  /** Physical pin 5: V_{SS}; power_in. */
  "V_{SS}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: A0; input. */
  "A0": "9",
  /** Physical pin 10: A1; input. */
  "A1": "10",
  /** Physical pin 11: CH3+; input. */
  "CH3+": "11",
  /** Physical pin 12: CH3-; input. */
  "CH3-": "12",
  /** Physical pin 13: CH4+; input. */
  "CH4+": "13",
  /** Physical pin 14: CH4-; input. */
  "CH4-": "14",
}) {
  override schema = "Analog_ADC:MCP3424x-xSL";
  override referencePrefix = "U";
}

/**
 * 4-Channel, 18-Bit, Delta-Sigma AD-Converter, I²C Interface, Reference, TSSOP-14
 *
 * KiCad symbol: `Analog_ADC:MCP3424x-xST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22088c.pdf
 * Keywords: 18-Bit ADC I2C Delta-Sigma-ADC Reference 4ch quadruple.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3424x_xST extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: CH2+; input. */
  "CH2+": "3",
  /** Physical pin 4: CH2-; input. */
  "CH2-": "4",
  /** Physical pin 5: V_{SS}; power_in. */
  "V_{SS}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: A0; input. */
  "A0": "9",
  /** Physical pin 10: A1; input. */
  "A1": "10",
  /** Physical pin 11: CH3+; input. */
  "CH3+": "11",
  /** Physical pin 12: CH3-; input. */
  "CH3-": "12",
  /** Physical pin 13: CH4+; input. */
  "CH4+": "13",
  /** Physical pin 14: CH4-; input. */
  "CH4-": "14",
}) {
  override schema = "Analog_ADC:MCP3424x-xST";
  override referencePrefix = "U";
}

/**
 * 16-Bit, Multi-Channel ΔΣ Analog-to-Digital Converter with I2C Interface and On-Board Reference, DFN-8
 *
 * KiCad symbol: `Analog_ADC:MCP3426Axx-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22226a.pdf
 * Keywords: adc 2ch 16bit i2c.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3426Axx_xMC extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}_6": "6",
  /** Physical pin 7: CH2+; input. */
  "CH2+": "7",
  /** Physical pin 8: CH2-; input. */
  "CH2-": "8",
  /** Physical pin 9: V_{SS}; passive. */
  "V_{SS}_9": "9",
}) {
  override schema = "Analog_ADC:MCP3426Axx-xMC";
  override referencePrefix = "U";
}

/**
 * 16-Bit, Multi-Channel ΔΣ Analog-to-Digital Converter with I2C Interface and On-Board Reference, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:MCP3426Axx-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22226a.pdf
 * Keywords: adc 2ch 16bit i2c.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3426Axx_xMS extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: CH2+; input. */
  "CH2+": "7",
  /** Physical pin 8: CH2-; input. */
  "CH2-": "8",
}) {
  override schema = "Analog_ADC:MCP3426Axx-xMS";
  override referencePrefix = "U";
}

/**
 * 16-Bit, Multi-Channel ΔΣ Analog-to-Digital Converter with I2C Interface and On-Board Reference, SOIC-8
 *
 * KiCad symbol: `Analog_ADC:MCP3426Axx-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22226a.pdf
 * Keywords: adc 2ch 16bit i2c.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3426Axx_xSN extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: CH2+; input. */
  "CH2+": "7",
  /** Physical pin 8: CH2-; input. */
  "CH2-": "8",
}) {
  override schema = "Analog_ADC:MCP3426Axx-xSN";
  override referencePrefix = "U";
}

/**
 * 16-Bit, Multi-Channel ΔΣ Analog-to-Digital Converter with I2C Interface and On-Board Reference, DFN-10
 *
 * KiCad symbol: `Analog_ADC:MCP3427x-xMF`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22226a.pdf
 * Keywords: adc 2ch 16bit i2c.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3427x_xMF extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}_3": "3",
  /** Physical pin 4: CH2+; input. */
  "CH2+": "4",
  /** Physical pin 5: CH2-; input. */
  "CH2-": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: Adr0; input. */
  "Adr0": "9",
  /** Physical pin 10: Adr1; input. */
  "Adr1": "10",
  /** Physical pin 11: V_{SS}; passive. */
  "V_{SS}_11": "11",
}) {
  override schema = "Analog_ADC:MCP3427x-xMF";
  override referencePrefix = "U";
}

/**
 * 16-Bit, Multi-Channel ΔΣ Analog-to-Digital Converter with I2C Interface and On-Board Reference, MSOP-10
 *
 * KiCad symbol: `Analog_ADC:MCP3427x-xUN`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22226a.pdf
 * Keywords: adc 2ch 16bit i2c.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3427x_xUN extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}": "3",
  /** Physical pin 4: CH2+; input. */
  "CH2+": "4",
  /** Physical pin 5: CH2-; input. */
  "CH2-": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: Adr0; input. */
  "Adr0": "9",
  /** Physical pin 10: Adr1; input. */
  "Adr1": "10",
}) {
  override schema = "Analog_ADC:MCP3427x-xUN";
  override referencePrefix = "U";
}

/**
 * 16-Bit, Multi-Channel ΔΣ Analog-to-Digital Converter with I2C Interface and On-Board Reference, SOIC-14
 *
 * KiCad symbol: `Analog_ADC:MCP3428x-xSL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22226a.pdf
 * Keywords: adc 4ch 16bit i2c.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3428x_xSL extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: CH2+; input. */
  "CH2+": "3",
  /** Physical pin 4: CH2-; input. */
  "CH2-": "4",
  /** Physical pin 5: V_{SS}; power_in. */
  "V_{SS}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: Adr0; input. */
  "Adr0": "9",
  /** Physical pin 10: Adr1; input. */
  "Adr1": "10",
  /** Physical pin 11: CH3+; input. */
  "CH3+": "11",
  /** Physical pin 12: CH3-; input. */
  "CH3-": "12",
  /** Physical pin 13: CH4+; input. */
  "CH4+": "13",
  /** Physical pin 14: CH4-; input. */
  "CH4-": "14",
}) {
  override schema = "Analog_ADC:MCP3428x-xSL";
  override referencePrefix = "U";
}

/**
 * 16-Bit, Multi-Channel ΔΣ Analog-to-Digital Converter with I2C Interface and On-Board Reference, TSSOP-14
 *
 * KiCad symbol: `Analog_ADC:MCP3428x-xST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22226a.pdf
 * Keywords: adc 4ch 16bit i2c.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3428x_xST extends Component.withPins({
  /** Physical pin 1: CH1+; input. */
  "CH1+": "1",
  /** Physical pin 2: CH1-; input. */
  "CH1-": "2",
  /** Physical pin 3: CH2+; input. */
  "CH2+": "3",
  /** Physical pin 4: CH2-; input. */
  "CH2-": "4",
  /** Physical pin 5: V_{SS}; power_in. */
  "V_{SS}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: Adr0; input. */
  "Adr0": "9",
  /** Physical pin 10: Adr1; input. */
  "Adr1": "10",
  /** Physical pin 11: CH3+; input. */
  "CH3+": "11",
  /** Physical pin 12: CH3-; input. */
  "CH3-": "12",
  /** Physical pin 13: CH4+; input. */
  "CH4+": "13",
  /** Physical pin 14: CH4-; input. */
  "CH4-": "14",
}) {
  override schema = "Analog_ADC:MCP3428x-xST";
  override referencePrefix = "U";
}

/**
 * Single Delta-Sigma 22bit Analog to Digital Converter, SPI Interface, 50Hz Rejection, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:MCP3550-50-EMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21950c.pdf
 * Keywords: Sigma-Delta ADC Converter 22bit SPI 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3550_50_EMS extends Component.withPins({
  /** Physical pin 1: Vref; input. */
  "Vref": "1",
  /** Physical pin 2: Vin+; passive. */
  "Vin+": "2",
  /** Physical pin 3: Vin-; passive. */
  "Vin-": "3",
  /** Physical pin 4: Vss; power_in. */
  "Vss": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: SDO/~{RDY}; output. */
  "SDO/~{RDY}": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: Vdd; power_in. */
  "Vdd": "8",
}) {
  override schema = "Analog_ADC:MCP3550-50-EMS";
  override referencePrefix = "U";
}

/**
 * Single Delta-Sigma 22bit Analog to Digital Converter, SPI Interface, 60Hz Rejection, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:MCP3550-60-ESN`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21950c.pdf
 * Keywords: Sigma-Delta ADC Converter 22bit SPI 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3550_60_ESN extends Component.withPins({
  /** Physical pin 1: Vref; input. */
  "Vref": "1",
  /** Physical pin 2: Vin+; passive. */
  "Vin+": "2",
  /** Physical pin 3: Vin-; passive. */
  "Vin-": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: SDO/~{RDY}; output. */
  "SDO/~{RDY}": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Analog_ADC:MCP3550-60-ESN";
  override referencePrefix = "U";
}

/**
 * Single Delta-Sigma 22bit Analog to Digital Converter, SPI Interface, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:MCP3551-EMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21950c.pdf
 * Keywords: Sigma-Delta ADC Converter 22bit SPI 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3551_EMS extends Component.withPins({
  /** Physical pin 1: Vref; input. */
  "Vref": "1",
  /** Physical pin 2: Vin+; passive. */
  "Vin+": "2",
  /** Physical pin 3: Vin-; passive. */
  "Vin-": "3",
  /** Physical pin 4: Vss; power_in. */
  "Vss": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: SDO/~{RDY}; output. */
  "SDO/~{RDY}": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: Vdd; power_in. */
  "Vdd": "8",
}) {
  override schema = "Analog_ADC:MCP3551-EMS";
  override referencePrefix = "U";
}

/**
 * Single Delta-Sigma 22bit Analog to Digital Converter, SPI Interface, MSOP-8
 *
 * KiCad symbol: `Analog_ADC:MCP3553-ESN`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21950c.pdf
 * Keywords: Sigma-Delta ADC Converter 22bit SPI 1ch.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP3553_ESN extends Component.withPins({
  /** Physical pin 1: Vref; input. */
  "Vref": "1",
  /** Physical pin 2: Vin+; passive. */
  "Vin+": "2",
  /** Physical pin 3: Vin-; passive. */
  "Vin-": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: SDO/~{RDY}; output. */
  "SDO/~{RDY}": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Analog_ADC:MCP3553-ESN";
  override referencePrefix = "U";
}

