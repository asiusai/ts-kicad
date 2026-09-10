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
 */
export class AD40xxBCPZ extends Component.withPins({
  "REF": "1",
  "VDD": "2",
  "IN+": "3",
  "IN-": "4",
  "GND": "5",
  "CNV": "6",
  "SDO": "7",
  "SCK": "8",
  "SDI": "9",
  "VIO": "10",
  "PAD": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "input", VDD: "power_in", "IN+": "input", "IN-": "input", GND: "power_in", CNV: "input", SDO: "output", SCK: "input", SDI: "input", VIO: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD40xxBRMZ extends Component.withPins({
  "REF": "1",
  "VDD": "2",
  "IN+": "3",
  "IN-": "4",
  "GND": "5",
  "CNV": "6",
  "SDO": "7",
  "SCK": "8",
  "SDI": "9",
  "VIO": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "input", VDD: "power_in", "IN+": "input", "IN-": "input", GND: "power_in", CNV: "input", SDO: "output", SCK: "input", SDI: "input", VIO: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD574A extends Component.withPins({
  "V_{LOGIC}": "1",
  "12/~{8}": "2",
  "~{CS}": "3",
  "A_{0}": "4",
  "R/~{C}": "5",
  "CE": "6",
  "V_{CC}": "7",
  "REF_OUT": "8",
  "AC": "9",
  "REF_IN": "10",
  "V_{EE}": "11",
  "BIP_OFF": "12",
  "10V_{IN}": "13",
  "20V_{IN}": "14",
  "DC": "15",
  "D0": "16",
  "DB1": "17",
  "DB2": "18",
  "DB3": "19",
  "DB4": "20",
  "DB5": "21",
  "DB6": "22",
  "DB7": "23",
  "DB8": "24",
  "DB9": "25",
  "DB10": "26",
  "DB11": "27",
  "STS": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{LOGIC}": "power_in", "12/~{8}": "input", "~{CS}": "input", "A_{0}": "input", "R/~{C}": "input", CE: "input", "V_{CC}": "power_in", REF_OUT: "output", AC: "passive", REF_IN: "input", "V_{EE}": "power_in", BIP_OFF: "input", "10V_{IN}": "input", "20V_{IN}": "input", DC: "power_in", D0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", STS: "output", ...opts.pinTypes } });
  }
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
 */
export class AD6644 extends Component.withPins({
  "DVCC_1": "1",
  "GND_2": "2",
  "VREF": "3",
  "GND_4": "4",
  "ENCODE": "5",
  "~{ENCODE}": "6",
  "GND_7": "7",
  "AVCC_8": "8",
  "AVCC_9": "9",
  "GND_10": "10",
  "AIN": "11",
  "~{AIN}": "12",
  "GND_13": "13",
  "AVCC_14": "14",
  "GND_15": "15",
  "AVCC_16": "16",
  "GND_17": "17",
  "AVCC_18": "18",
  "GND_19": "19",
  "C1": "20",
  "GND_21": "21",
  "AVCC_22": "22",
  "GND_23": "23",
  "C2": "24",
  "GND_25": "25",
  "AVCC_26": "26",
  "GND_27": "27",
  "AVCC_28": "28",
  "GND_29": "29",
  "AVCC_30": "30",
  "DNC": "31",
  "OVR": "32",
  "DVCC_33": "33",
  "GND_34": "34",
  "DMID": "35",
  "D0": "36",
  "D1": "37",
  "D2": "38",
  "D3": "39",
  "D4": "40",
  "D5": "41",
  "GND_42": "42",
  "DVCC_43": "43",
  "D6": "44",
  "D7": "45",
  "D8": "46",
  "D9": "47",
  "D10": "48",
  "D11": "49",
  "D12": "50",
  "D13": "51",
  "DRY": "52",
  "GND_53": "53",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVCC_1: "power_in", GND_2: "power_in", VREF: "passive", GND_4: "passive", ENCODE: "input", "~{ENCODE}": "input", GND_7: "passive", AVCC_8: "power_in", AVCC_9: "passive", GND_10: "passive", AIN: "input", "~{AIN}": "input", GND_13: "passive", AVCC_14: "passive", GND_15: "passive", AVCC_16: "passive", GND_17: "passive", AVCC_18: "passive", GND_19: "passive", C1: "passive", GND_21: "passive", AVCC_22: "passive", GND_23: "passive", C2: "passive", GND_25: "passive", AVCC_26: "passive", GND_27: "passive", AVCC_28: "passive", GND_29: "passive", AVCC_30: "passive", DNC: "no_connect", OVR: "output", DVCC_33: "passive", GND_34: "passive", DMID: "output", D0: "output", D1: "output", D2: "output", D3: "output", D4: "output", D5: "output", GND_42: "passive", DVCC_43: "passive", D6: "output", D7: "output", D8: "output", D9: "output", D10: "output", D11: "output", D12: "output", D13: "output", DRY: "output", GND_53: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD6645 extends Component.withPins({
  "DVCC_1": "1",
  "GND_2": "2",
  "VREF": "3",
  "GND_4": "4",
  "ENCODE": "5",
  "~{ENCODE}": "6",
  "GND_7": "7",
  "AVCC_8": "8",
  "AVCC_9": "9",
  "GND_10": "10",
  "AIN": "11",
  "~{AIN}": "12",
  "GND_13": "13",
  "AVCC_14": "14",
  "GND_15": "15",
  "AVCC_16": "16",
  "GND_17": "17",
  "AVCC_18": "18",
  "GND_19": "19",
  "C1": "20",
  "GND_21": "21",
  "AVCC_22": "22",
  "GND_23": "23",
  "C2": "24",
  "GND_25": "25",
  "AVCC_26": "26",
  "GND_27": "27",
  "AVCC_28": "28",
  "GND_29": "29",
  "AVCC_30": "30",
  "DNC": "31",
  "OVR": "32",
  "DVCC_33": "33",
  "GND_34": "34",
  "DMID": "35",
  "D0": "36",
  "D1": "37",
  "D2": "38",
  "D3": "39",
  "D4": "40",
  "D5": "41",
  "GND_42": "42",
  "DVCC_43": "43",
  "D6": "44",
  "D7": "45",
  "D8": "46",
  "D9": "47",
  "D10": "48",
  "D11": "49",
  "D12": "50",
  "D13": "51",
  "DRY": "52",
  "GND_53": "53",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVCC_1: "power_in", GND_2: "power_in", VREF: "passive", GND_4: "passive", ENCODE: "input", "~{ENCODE}": "input", GND_7: "passive", AVCC_8: "power_in", AVCC_9: "passive", GND_10: "passive", AIN: "input", "~{AIN}": "input", GND_13: "passive", AVCC_14: "passive", GND_15: "passive", AVCC_16: "passive", GND_17: "passive", AVCC_18: "passive", GND_19: "passive", C1: "passive", GND_21: "passive", AVCC_22: "passive", GND_23: "passive", C2: "passive", GND_25: "passive", AVCC_26: "passive", GND_27: "passive", AVCC_28: "passive", GND_29: "passive", AVCC_30: "passive", DNC: "no_connect", OVR: "output", DVCC_33: "passive", GND_34: "passive", DMID: "output", D0: "output", D1: "output", D2: "output", D3: "output", D4: "output", D5: "output", GND_42: "passive", DVCC_43: "passive", D6: "output", D7: "output", D8: "output", D9: "output", D10: "output", D11: "output", D12: "output", D13: "output", DRY: "output", GND_53: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD7171 extends Component.withPins({
  "SCK": "1",
  "DOUT/~{RDY}": "2",
  "AIN+": "3",
  "AIN-": "4",
  "REFIN+": "5",
  "REFIN-": "6",
  "GND_7": "7",
  "VDD": "8",
  "~{PDRST}": "9",
  "GND_10": "10",
  "PAD": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCK: "input", "DOUT/~{RDY}": "tri_state", "AIN+": "passive", "AIN-": "passive", "REFIN+": "passive", "REFIN-": "passive", GND_7: "power_in", VDD: "power_in", "~{PDRST}": "input", GND_10: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD7298 extends Component.withPins({
  "VIN3": "1",
  "VIN4": "2",
  "VIN5": "3",
  "VIN6": "4",
  "VIN7": "5",
  "GND1": "6",
  "VREF": "7",
  "DCAP": "8",
  "GND": "9",
  "VDD": "10",
  "~{CS}": "11",
  "TSENSE_BUSY": "12",
  "DIN": "13",
  "DOUT": "14",
  "SCLK": "15",
  "VDRIVE": "16",
  "~{PD}/~{RST}": "17",
  "VIN0": "18",
  "VIN1": "19",
  "VIN2": "20",
  "EPAD": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN3: "input", VIN4: "input", VIN5: "input", VIN6: "input", VIN7: "input", GND1: "power_in", VREF: "passive", DCAP: "passive", GND: "power_in", VDD: "power_in", "~{CS}": "input", TSENSE_BUSY: "output", DIN: "input", DOUT: "output", SCLK: "input", VDRIVE: "power_in", "~{PD}/~{RST}": "input", VIN0: "input", VIN1: "input", VIN2: "input", EPAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD7321 extends Component.withPins({
  "~{CS}": "1",
  "DIN": "2",
  "DGND_3": "3",
  "AGND": "4",
  "REF_{IN/OUT}": "5",
  "V_{SS}": "6",
  "V_{IN}0": "7",
  "V_{IN}1": "8",
  "V_{DD}": "9",
  "V_{CC}": "10",
  "V_{DRIVE}": "11",
  "DOUT": "12",
  "DGND_13": "13",
  "SCLK": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", DIN: "input", DGND_3: "power_in", AGND: "power_in", "REF_{IN/OUT}": "power_in", "V_{SS}": "power_in", "V_{IN}0": "input", "V_{IN}1": "input", "V_{DD}": "power_in", "V_{CC}": "power_in", "V_{DRIVE}": "power_in", DOUT: "output", DGND_13: "passive", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7322 extends Component.withPins({
  "~{CS}": "1",
  "DIN": "2",
  "DGND_3": "3",
  "AGND": "4",
  "REF_{IN/OUT}": "5",
  "V_{SS}": "6",
  "V_{IN}0": "7",
  "V_{IN}1": "8",
  "V_{DD}": "9",
  "V_{CC}": "10",
  "V_{DRIVE}": "11",
  "DOUT": "12",
  "DGND_13": "13",
  "SCLK": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", DIN: "input", DGND_3: "power_in", AGND: "power_in", "REF_{IN/OUT}": "power_in", "V_{SS}": "power_in", "V_{IN}0": "input", "V_{IN}1": "input", "V_{DD}": "power_in", "V_{CC}": "power_in", "V_{DRIVE}": "power_in", DOUT: "output", DGND_13: "passive", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7323 extends Component.withPins({
  "~{CS}": "1",
  "DIN": "2",
  "DGND_3": "3",
  "AGND": "4",
  "REF_{IN/OUT}": "5",
  "V_{SS}": "6",
  "V_{IN}0": "7",
  "V_{IN}1": "8",
  "V_{IN}3": "9",
  "V_{IN}2": "10",
  "V_{DD}": "11",
  "V_{CC}": "12",
  "V_{DRIVE}": "13",
  "DOUT": "14",
  "DGND_15": "15",
  "SCLK": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", DIN: "input", DGND_3: "power_in", AGND: "power_in", "REF_{IN/OUT}": "power_in", "V_{SS}": "power_in", "V_{IN}0": "input", "V_{IN}1": "input", "V_{IN}3": "input", "V_{IN}2": "input", "V_{DD}": "power_in", "V_{CC}": "power_in", "V_{DRIVE}": "power_in", DOUT: "output", DGND_15: "passive", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7324 extends Component.withPins({
  "~{CS}": "1",
  "DIN": "2",
  "DGND_3": "3",
  "AGND": "4",
  "REF_{IN/OUT}": "5",
  "V_{SS}": "6",
  "V_{IN}0": "7",
  "V_{IN}1": "8",
  "V_{IN}3": "9",
  "V_{IN}2": "10",
  "V_{DD}": "11",
  "V_{CC}": "12",
  "V_{DRIVE}": "13",
  "DOUT": "14",
  "DGND_15": "15",
  "SCLK": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", DIN: "input", DGND_3: "power_in", AGND: "power_in", "REF_{IN/OUT}": "power_in", "V_{SS}": "power_in", "V_{IN}0": "input", "V_{IN}1": "input", "V_{IN}3": "input", "V_{IN}2": "input", "V_{DD}": "power_in", "V_{CC}": "power_in", "V_{DRIVE}": "power_in", DOUT: "output", DGND_15: "passive", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7327 extends Component.withPins({
  "~{CS}": "1",
  "DIN": "2",
  "DGND_3": "3",
  "AGND": "4",
  "REF_{IN/OUT}": "5",
  "V_{SS}": "6",
  "V_{IN}0": "7",
  "V_{IN}1": "8",
  "V_{IN}4": "9",
  "V_{IN}5": "10",
  "V_{IN}7": "11",
  "V_{IN}6": "12",
  "V_{IN}3": "13",
  "V_{IN}2": "14",
  "V_{DD}": "15",
  "V_{CC}": "16",
  "V_{DRIVE}": "17",
  "DOUT": "18",
  "DGND_19": "19",
  "SCLK": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", DIN: "input", DGND_3: "power_in", AGND: "power_in", "REF_{IN/OUT}": "power_in", "V_{SS}": "power_in", "V_{IN}0": "input", "V_{IN}1": "input", "V_{IN}4": "input", "V_{IN}5": "input", "V_{IN}7": "input", "V_{IN}6": "input", "V_{IN}3": "input", "V_{IN}2": "input", "V_{DD}": "power_in", "V_{CC}": "power_in", "V_{DRIVE}": "power_in", DOUT: "output", DGND_19: "passive", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7328 extends Component.withPins({
  "~{CS}": "1",
  "DIN": "2",
  "DGND_3": "3",
  "AGND": "4",
  "REF_{IN/OUT}": "5",
  "V_{SS}": "6",
  "V_{IN}0": "7",
  "V_{IN}1": "8",
  "V_{IN}4": "9",
  "V_{IN}5": "10",
  "V_{IN}7": "11",
  "V_{IN}6": "12",
  "V_{IN}3": "13",
  "V_{IN}2": "14",
  "V_{DD}": "15",
  "V_{CC}": "16",
  "V_{DRIVE}": "17",
  "DOUT": "18",
  "DGND_19": "19",
  "SCLK": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", DIN: "input", DGND_3: "power_in", AGND: "power_in", "REF_{IN/OUT}": "power_in", "V_{SS}": "power_in", "V_{IN}0": "input", "V_{IN}1": "input", "V_{IN}4": "input", "V_{IN}5": "input", "V_{IN}7": "input", "V_{IN}6": "input", "V_{IN}3": "input", "V_{IN}2": "input", "V_{DD}": "power_in", "V_{CC}": "power_in", "V_{DRIVE}": "power_in", DOUT: "output", DGND_19: "passive", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7329 extends Component.withPins({
  "~{CS}": "1",
  "DIN": "2",
  "DGND_3": "3",
  "AGND": "4",
  "REF_{IN/OUT}": "5",
  "V_{SS}": "6",
  "ADC_{IN}+": "7",
  "MUX_{OUT}+": "8",
  "V_{IN}0": "9",
  "V_{IN}1": "10",
  "V_{IN}4": "11",
  "V_{IN}5": "12",
  "V_{IN}7": "13",
  "V_{IN}6": "14",
  "V_{IN}3": "15",
  "V_{IN}2": "16",
  "MUX_{OUT}-": "17",
  "ADC_{IN}-": "18",
  "V_{DD}": "19",
  "V_{CC}": "20",
  "V_{DRIVE}": "21",
  "DOUT": "22",
  "DGND_23": "23",
  "SCLK": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", DIN: "input", DGND_3: "power_in", AGND: "power_in", "REF_{IN/OUT}": "power_in", "V_{SS}": "power_in", "ADC_{IN}+": "power_in", "MUX_{OUT}+": "output", "V_{IN}0": "input", "V_{IN}1": "input", "V_{IN}4": "input", "V_{IN}5": "input", "V_{IN}7": "input", "V_{IN}6": "input", "V_{IN}3": "input", "V_{IN}2": "input", "MUX_{OUT}-": "output", "ADC_{IN}-": "power_in", "V_{DD}": "power_in", "V_{CC}": "power_in", "V_{DRIVE}": "power_in", DOUT: "output", DGND_23: "passive", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7380_4 extends Component.withPins({
  "GND_1": "1",
  "V_{LOGIC}": "2",
  "REGCAP": "3",
  "V_{CC}": "4",
  "GND_5": "5",
  "A_{IN}D-": "6",
  "A_{IN}D+": "7",
  "A_{IN}C-": "8",
  "A_{IN}C+": "9",
  "A_{IN}B-": "10",
  "A_{IN}B+": "11",
  "A_{IN}A-": "12",
  "A_{IN}A+": "13",
  "GND_14": "14",
  "NC": "15",
  "GND_16": "16",
  "REFIN": "17",
  "~{CS}": "18",
  "SDOA": "19",
  "SDOB": "20",
  "SDI": "21",
  "SCLK": "22",
  "SDOC": "23",
  "SDOD/~{ALERT}": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "V_{LOGIC}": "power_in", REGCAP: "passive", "V_{CC}": "power_in", GND_5: "passive", "A_{IN}D-": "input", "A_{IN}D+": "input", "A_{IN}C-": "input", "A_{IN}C+": "input", "A_{IN}B-": "input", "A_{IN}B+": "input", "A_{IN}A-": "input", "A_{IN}A+": "input", GND_14: "passive", NC: "no_connect", GND_16: "passive", REFIN: "passive", "~{CS}": "input", SDOA: "output", SDOB: "output", SDI: "input", SCLK: "input", SDOC: "output", "SDOD/~{ALERT}": "output", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD7386_4 extends Component.withPins({
  "GND_1": "1",
  "V_{LOGIC}": "2",
  "REGCAP": "3",
  "V_{CC}": "4",
  "GND_5": "5",
  "A_{IN}D1": "6",
  "A_{IN}D0": "7",
  "A_{IN}C1": "8",
  "A_{IN}C0": "9",
  "A_{IN}B1": "10",
  "A_{IN}B0": "11",
  "A_{IN}A1": "12",
  "A_{IN}A0": "13",
  "GND_14": "14",
  "REFCAP": "15",
  "GND_16": "16",
  "REFIO": "17",
  "~{CS}": "18",
  "SDOA": "19",
  "SDOB": "20",
  "SDI": "21",
  "SCLK": "22",
  "SDOC": "23",
  "SDOD/~{ALERT}": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "V_{LOGIC}": "power_in", REGCAP: "passive", "V_{CC}": "power_in", GND_5: "passive", "A_{IN}D1": "input", "A_{IN}D0": "input", "A_{IN}C1": "input", "A_{IN}C0": "input", "A_{IN}B1": "input", "A_{IN}B0": "input", "A_{IN}A1": "input", "A_{IN}A0": "input", GND_14: "passive", REFCAP: "passive", GND_16: "passive", REFIO: "passive", "~{CS}": "input", SDOA: "output", SDOB: "output", SDI: "input", SCLK: "input", SDOC: "output", "SDOD/~{ALERT}": "output", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD7387_4 extends Component.withPins({
  "GND_1": "1",
  "V_{LOGIC}": "2",
  "REGCAP": "3",
  "V_{CC}": "4",
  "GND_5": "5",
  "A_{IN}D1": "6",
  "A_{IN}D0": "7",
  "A_{IN}C1": "8",
  "A_{IN}C0": "9",
  "A_{IN}B1": "10",
  "A_{IN}B0": "11",
  "A_{IN}A1": "12",
  "A_{IN}A0": "13",
  "GND_14": "14",
  "REFCAP": "15",
  "GND_16": "16",
  "REFIO": "17",
  "~{CS}": "18",
  "SDOA": "19",
  "SDOB": "20",
  "SDI": "21",
  "SCLK": "22",
  "SDOC": "23",
  "SDOD/~{ALERT}": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "V_{LOGIC}": "power_in", REGCAP: "passive", "V_{CC}": "power_in", GND_5: "passive", "A_{IN}D1": "input", "A_{IN}D0": "input", "A_{IN}C1": "input", "A_{IN}C0": "input", "A_{IN}B1": "input", "A_{IN}B0": "input", "A_{IN}A1": "input", "A_{IN}A0": "input", GND_14: "passive", REFCAP: "passive", GND_16: "passive", REFIO: "passive", "~{CS}": "input", SDOA: "output", SDOB: "output", SDI: "input", SCLK: "input", SDOC: "output", "SDOD/~{ALERT}": "output", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD7388_4 extends Component.withPins({
  "GND_1": "1",
  "V_{LOGIC}": "2",
  "REGCAP": "3",
  "V_{CC}": "4",
  "GND_5": "5",
  "A_{IN}D1": "6",
  "A_{IN}D0": "7",
  "A_{IN}C1": "8",
  "A_{IN}C0": "9",
  "A_{IN}B1": "10",
  "A_{IN}B0": "11",
  "A_{IN}A1": "12",
  "A_{IN}A0": "13",
  "GND_14": "14",
  "REFCAP": "15",
  "GND_16": "16",
  "REFIO": "17",
  "~{CS}": "18",
  "SDOA": "19",
  "SDOB": "20",
  "SDI": "21",
  "SCLK": "22",
  "SDOC": "23",
  "SDOD/~{ALERT}": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "V_{LOGIC}": "power_in", REGCAP: "passive", "V_{CC}": "power_in", GND_5: "passive", "A_{IN}D1": "input", "A_{IN}D0": "input", "A_{IN}C1": "input", "A_{IN}C0": "input", "A_{IN}B1": "input", "A_{IN}B0": "input", "A_{IN}A1": "input", "A_{IN}A0": "input", GND_14: "passive", REFCAP: "passive", GND_16: "passive", REFIO: "passive", "~{CS}": "input", SDOA: "output", SDOB: "output", SDI: "input", SCLK: "input", SDOC: "output", "SDOD/~{ALERT}": "output", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD7606 extends Component.withPins({
  "AVCC_1": "1",
  "AGND_2": "2",
  "OS0": "3",
  "OS1": "4",
  "OS2": "5",
  "~{PAR}/SER/BYTE_SEL": "6",
  "~{STBY}": "7",
  "RANGE": "8",
  "CONVST_A": "9",
  "CONVST_B": "10",
  "RESET": "11",
  "~{RD}/SCLK": "12",
  "~{CS}": "13",
  "BUSY": "14",
  "FRSTDATA": "15",
  "DB0": "16",
  "DB1": "17",
  "DB2": "18",
  "DB3": "19",
  "DB4": "20",
  "DB5": "21",
  "DB6": "22",
  "Vdrive": "23",
  "DB7/DOUT_A": "24",
  "DB8/DOUT_B": "25",
  "AGND_26": "26",
  "DB9": "27",
  "DB10": "28",
  "DB11": "29",
  "DB12": "30",
  "DB13": "31",
  "DB14/HBEN": "32",
  "DB15/BYTE_SEL": "33",
  "REF_SELECT": "34",
  "AGND_35": "35",
  "REGCAP_36": "36",
  "AVCC_37": "37",
  "AVCC_38": "38",
  "REGCAP_39": "39",
  "AGND_40": "40",
  "AGND_41": "41",
  "REFIN/REFOUT": "42",
  "REFGND_43": "43",
  "REFCAPA": "44",
  "REFCAPB": "45",
  "REFGND_46": "46",
  "AGND_47": "47",
  "AVCC_48": "48",
  "V1": "49",
  "V1GND": "50",
  "V2": "51",
  "V2GND": "52",
  "V3": "53",
  "V3GND": "54",
  "V4": "55",
  "V4GND": "56",
  "V5": "57",
  "V5GND": "58",
  "V6": "59",
  "V6GND": "60",
  "V7": "61",
  "V7GND": "62",
  "V8": "63",
  "V8GND": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AVCC_1: "power_in", AGND_2: "power_in", OS0: "input", OS1: "input", OS2: "input", "~{PAR}/SER/BYTE_SEL": "input", "~{STBY}": "input", RANGE: "input", CONVST_A: "input", CONVST_B: "input", RESET: "input", "~{RD}/SCLK": "input", "~{CS}": "input", BUSY: "output", FRSTDATA: "output", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", DB5: "output", DB6: "output", Vdrive: "power_in", "DB7/DOUT_A": "output", "DB8/DOUT_B": "output", AGND_26: "passive", DB9: "output", DB10: "output", DB11: "output", DB12: "output", DB13: "output", "DB14/HBEN": "bidirectional", "DB15/BYTE_SEL": "bidirectional", REF_SELECT: "input", AGND_35: "passive", REGCAP_36: "passive", AVCC_37: "power_in", AVCC_38: "power_in", REGCAP_39: "passive", AGND_40: "passive", AGND_41: "passive", "REFIN/REFOUT": "passive", REFGND_43: "power_in", REFCAPA: "passive", REFCAPB: "passive", REFGND_46: "passive", AGND_47: "passive", AVCC_48: "power_in", V1: "input", V1GND: "input", V2: "input", V2GND: "input", V3: "input", V3GND: "input", V4: "input", V4GND: "input", V5: "input", V5GND: "input", V6: "input", V6GND: "input", V7: "input", V7GND: "input", V8: "input", V8GND: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7606_4 extends Component.withPins({
  "AVCC_1": "1",
  "AGND_2": "2",
  "OS0": "3",
  "OS1": "4",
  "OS2": "5",
  "~{PAR}/SER/BYTE_SEL": "6",
  "~{STBY}": "7",
  "RANGE": "8",
  "CONVST_A": "9",
  "CONVST_B": "10",
  "RESET": "11",
  "~{RD}/SCLK": "12",
  "~{CS}": "13",
  "BUSY": "14",
  "FRSTDATA": "15",
  "DB0": "16",
  "DB1": "17",
  "DB2": "18",
  "DB3": "19",
  "DB4": "20",
  "DB5": "21",
  "DB6": "22",
  "Vdrive": "23",
  "DB7/DOUT_A": "24",
  "DB8/DOUT_B": "25",
  "AGND_26": "26",
  "DB9": "27",
  "DB10": "28",
  "DB11": "29",
  "DB12": "30",
  "DB13": "31",
  "DB14/HBEN": "32",
  "DB15/BYTE_SEL": "33",
  "REF_SELECT": "34",
  "AGND_35": "35",
  "REGCAP_36": "36",
  "AVCC_37": "37",
  "AVCC_38": "38",
  "REGCAP_39": "39",
  "AGND_40": "40",
  "AGND_41": "41",
  "REFIN/REFOUT": "42",
  "REFGND_43": "43",
  "REFCAPA": "44",
  "REFCAPB": "45",
  "REFGND_46": "46",
  "AGND_47": "47",
  "AVCC_48": "48",
  "V1": "49",
  "V1GND": "50",
  "V2": "51",
  "V2GND": "52",
  "AGND_53": "53",
  "AGND_54": "54",
  "AGND_55": "55",
  "AGND_56": "56",
  "V3": "57",
  "V3GND": "58",
  "V4": "59",
  "V4GND": "60",
  "AGND_61": "61",
  "AGND_62": "62",
  "AGND_63": "63",
  "AGND_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AVCC_1: "power_in", AGND_2: "power_in", OS0: "input", OS1: "input", OS2: "input", "~{PAR}/SER/BYTE_SEL": "input", "~{STBY}": "input", RANGE: "input", CONVST_A: "input", CONVST_B: "input", RESET: "input", "~{RD}/SCLK": "input", "~{CS}": "input", BUSY: "output", FRSTDATA: "output", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", DB5: "output", DB6: "output", Vdrive: "power_in", "DB7/DOUT_A": "output", "DB8/DOUT_B": "output", AGND_26: "passive", DB9: "output", DB10: "output", DB11: "output", DB12: "output", DB13: "output", "DB14/HBEN": "bidirectional", "DB15/BYTE_SEL": "bidirectional", REF_SELECT: "input", AGND_35: "passive", REGCAP_36: "passive", AVCC_37: "power_in", AVCC_38: "power_in", REGCAP_39: "passive", AGND_40: "passive", AGND_41: "passive", "REFIN/REFOUT": "passive", REFGND_43: "power_in", REFCAPA: "passive", REFCAPB: "passive", REFGND_46: "passive", AGND_47: "passive", AVCC_48: "power_in", V1: "input", V1GND: "input", V2: "input", V2GND: "input", AGND_53: "passive", AGND_54: "passive", AGND_55: "passive", AGND_56: "passive", V3: "input", V3GND: "input", V4: "input", V4GND: "input", AGND_61: "passive", AGND_62: "passive", AGND_63: "passive", AGND_64: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD7606_6 extends Component.withPins({
  "AVCC_1": "1",
  "AGND_2": "2",
  "OS0": "3",
  "OS1": "4",
  "OS2": "5",
  "~{PAR}/SER/BYTE_SEL": "6",
  "~{STBY}": "7",
  "RANGE": "8",
  "CONVST_A": "9",
  "CONVST_B": "10",
  "RESET": "11",
  "~{RD}/SCLK": "12",
  "~{CS}": "13",
  "BUSY": "14",
  "FRSTDATA": "15",
  "DB0": "16",
  "DB1": "17",
  "DB2": "18",
  "DB3": "19",
  "DB4": "20",
  "DB5": "21",
  "DB6": "22",
  "Vdrive": "23",
  "DB7/DOUT_A": "24",
  "DB8/DOUT_B": "25",
  "AGND_26": "26",
  "DB9": "27",
  "DB10": "28",
  "DB11": "29",
  "DB12": "30",
  "DB13": "31",
  "DB14/HBEN": "32",
  "DB15/BYTE_SEL": "33",
  "REF_SELECT": "34",
  "AGND_35": "35",
  "REGCAP_36": "36",
  "AVCC_37": "37",
  "AVCC_38": "38",
  "REGCAP_39": "39",
  "AGND_40": "40",
  "AGND_41": "41",
  "REFIN/REFOUT": "42",
  "REFGND_43": "43",
  "REFCAPA": "44",
  "REFCAPB": "45",
  "REFGND_46": "46",
  "AGND_47": "47",
  "AVCC_48": "48",
  "V1": "49",
  "V1GND": "50",
  "V2": "51",
  "V2GND": "52",
  "V3": "53",
  "V3GND": "54",
  "AGND_55": "55",
  "AGND_56": "56",
  "V4": "57",
  "V4GND": "58",
  "V5": "59",
  "V5GND": "60",
  "V6": "61",
  "V6GND": "62",
  "AGND_63": "63",
  "AGND_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AVCC_1: "power_in", AGND_2: "power_in", OS0: "input", OS1: "input", OS2: "input", "~{PAR}/SER/BYTE_SEL": "input", "~{STBY}": "input", RANGE: "input", CONVST_A: "input", CONVST_B: "input", RESET: "input", "~{RD}/SCLK": "input", "~{CS}": "input", BUSY: "output", FRSTDATA: "output", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", DB5: "output", DB6: "output", Vdrive: "power_in", "DB7/DOUT_A": "output", "DB8/DOUT_B": "output", AGND_26: "passive", DB9: "output", DB10: "output", DB11: "output", DB12: "output", DB13: "output", "DB14/HBEN": "bidirectional", "DB15/BYTE_SEL": "bidirectional", REF_SELECT: "input", AGND_35: "passive", REGCAP_36: "passive", AVCC_37: "power_in", AVCC_38: "power_in", REGCAP_39: "passive", AGND_40: "passive", AGND_41: "passive", "REFIN/REFOUT": "passive", REFGND_43: "power_in", REFCAPA: "passive", REFCAPB: "passive", REFGND_46: "passive", AGND_47: "passive", AVCC_48: "power_in", V1: "input", V1GND: "input", V2: "input", V2GND: "input", V3: "input", V3GND: "input", AGND_55: "passive", AGND_56: "passive", V4: "input", V4GND: "input", V5: "input", V5GND: "input", V6: "input", V6GND: "input", AGND_63: "passive", AGND_64: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD7616 extends Component.withPins({
  "V4BGND": "1",
  "V4B": "2",
  "V5BGND": "3",
  "V5B": "4",
  "AGND_5": "5",
  "VCC_6": "6",
  "V6B": "7",
  "V6BGND": "8",
  "V7B": "9",
  "V7BGND": "10",
  "V7AGND": "11",
  "V7A": "12",
  "V6AGND": "13",
  "V6A": "14",
  "VCC_15": "15",
  "AGND_16": "16",
  "V5A": "17",
  "V5AGND": "18",
  "V4A": "19",
  "V4AGND": "20",
  "V3AGND": "21",
  "V3A": "22",
  "V2AGND": "23",
  "V2A": "24",
  "V1AGND": "25",
  "V1A": "26",
  "V0AGND": "27",
  "V0A": "28",
  "AGND_29": "29",
  "VCC_30": "30",
  "REFCAP": "31",
  "REFGND": "32",
  "REFINOUT": "33",
  "REFINOUTGND": "34",
  "REFSEL": "35",
  "~{RESET}": "36",
  "SEQEN": "37",
  "HW_RNGSEL1": "38",
  "HW_RNGSEL0": "39",
  "SER/~{PAR}": "40",
  "DB0": "41",
  "DB1": "42",
  "DB2": "43",
  "DB3": "44",
  "DB4/~{SER1W}": "45",
  "DB5/CRCEN": "46",
  "DB6": "47",
  "DB7": "48",
  "VDRIVE": "49",
  "DGND": "50",
  "REGGNDD": "51",
  "REGCAPD": "52",
  "DB8": "53",
  "DB9": "54",
  "DB10/SDI": "55",
  "DB11/SDOB": "56",
  "DB12/SDOA": "57",
  "DB13/OS0": "58",
  "DB14/OS1": "59",
  "DB15/OS2": "60",
  "BURST/~{WR}": "61",
  "SCLK/~{RD}": "62",
  "~{CS}": "63",
  "CHSEL0": "64",
  "CHSEL1": "65",
  "CHSEL2": "66",
  "BUSY": "67",
  "CONVST": "68",
  "REGGND": "69",
  "REGCAP": "70",
  "VCC_71": "71",
  "AGND_72": "72",
  "V0B": "73",
  "V0BGND": "74",
  "V1B": "75",
  "V1BGND": "76",
  "V2B": "77",
  "V2BGND": "78",
  "V3B": "79",
  "V3BGND": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { V4BGND: "input", V4B: "input", V5BGND: "input", V5B: "input", AGND_5: "power_in", VCC_6: "power_in", V6B: "input", V6BGND: "input", V7B: "input", V7BGND: "input", V7AGND: "input", V7A: "input", V6AGND: "input", V6A: "input", VCC_15: "power_in", AGND_16: "passive", V5A: "input", V5AGND: "input", V4A: "input", V4AGND: "input", V3AGND: "input", V3A: "input", V2AGND: "input", V2A: "input", V1AGND: "input", V1A: "input", V0AGND: "input", V0A: "input", AGND_29: "passive", VCC_30: "power_in", REFCAP: "passive", REFGND: "power_in", REFINOUT: "input", REFINOUTGND: "power_in", REFSEL: "input", "~{RESET}": "input", SEQEN: "input", HW_RNGSEL1: "input", HW_RNGSEL0: "input", "SER/~{PAR}": "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", "DB4/~{SER1W}": "bidirectional", "DB5/CRCEN": "bidirectional", DB6: "bidirectional", DB7: "bidirectional", VDRIVE: "power_in", DGND: "power_in", REGGNDD: "power_in", REGCAPD: "passive", DB8: "bidirectional", DB9: "bidirectional", "DB10/SDI": "bidirectional", "DB11/SDOB": "bidirectional", "DB12/SDOA": "bidirectional", "DB13/OS0": "bidirectional", "DB14/OS1": "bidirectional", "DB15/OS2": "bidirectional", "BURST/~{WR}": "input", "SCLK/~{RD}": "input", "~{CS}": "input", CHSEL0: "input", CHSEL1: "input", CHSEL2: "input", BUSY: "output", CONVST: "input", REGGND: "power_in", REGCAP: "passive", VCC_71: "power_in", AGND_72: "passive", V0B: "input", V0BGND: "input", V1B: "input", V1BGND: "input", V2B: "input", V2BGND: "input", V3B: "input", V3BGND: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7682BCP extends Component.withPins({
  "VDD_1": "1",
  "REF": "2",
  "REFIN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "NC_6": "6",
  "IN2": "7",
  "NC_8": "8",
  "IN3": "9",
  "COM": "10",
  "CNV": "11",
  "DIN": "12",
  "SCK": "13",
  "SDO": "14",
  "VIO": "15",
  "IN0": "16",
  "NC_17": "17",
  "IN1": "18",
  "NC_19": "19",
  "VDD_20": "20",
  "EPAD": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", REF: "passive", REFIN: "passive", GND_4: "power_in", GND_5: "passive", NC_6: "no_connect", IN2: "input", NC_8: "no_connect", IN3: "input", COM: "input", CNV: "input", DIN: "input", SCK: "input", SDO: "output", VIO: "power_in", IN0: "input", NC_17: "no_connect", IN1: "input", NC_19: "no_connect", VDD_20: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class AD7949BCP extends Component.withPins({
  "VDD_1": "1",
  "REF": "2",
  "REFIN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "IN4": "6",
  "IN5": "7",
  "IN6": "8",
  "IN7": "9",
  "COM": "10",
  "CNV": "11",
  "DIN": "12",
  "SCK": "13",
  "SDO": "14",
  "VIO": "15",
  "IN0": "16",
  "IN1": "17",
  "IN2": "18",
  "IN3": "19",
  "VDD_20": "20",
  "EPAD": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", REF: "passive", REFIN: "passive", GND_4: "power_in", GND_5: "passive", IN4: "input", IN5: "input", IN6: "input", IN7: "input", COM: "input", CNV: "input", DIN: "input", SCK: "input", SDO: "output", VIO: "power_in", IN0: "input", IN1: "input", IN2: "input", IN3: "input", VDD_20: "passive", EPAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD7689xCP extends Component.withPins({
  "VDD_1": "1",
  "REF": "2",
  "REFIN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "IN4": "6",
  "IN5": "7",
  "IN6": "8",
  "IN7": "9",
  "COM": "10",
  "CNV": "11",
  "DIN": "12",
  "SCK": "13",
  "SDO": "14",
  "VIO": "15",
  "IN0": "16",
  "IN1": "17",
  "IN2": "18",
  "IN3": "19",
  "VDD_20": "20",
  "EPAD": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", REF: "passive", REFIN: "passive", GND_4: "power_in", GND_5: "passive", IN4: "input", IN5: "input", IN6: "input", IN7: "input", COM: "input", CNV: "input", DIN: "input", SCK: "input", SDO: "output", VIO: "power_in", IN0: "input", IN1: "input", IN2: "input", IN3: "input", VDD_20: "passive", EPAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD7699BCP extends Component.withPins({
  "VDD_1": "1",
  "REF": "2",
  "REFIN": "3",
  "GND_4": "4",
  "GND_5": "5",
  "IN4": "6",
  "IN5": "7",
  "IN6": "8",
  "IN7": "9",
  "COM": "10",
  "CNV": "11",
  "DIN": "12",
  "SCK": "13",
  "SDO": "14",
  "VIO": "15",
  "IN0": "16",
  "IN1": "17",
  "IN2": "18",
  "IN3": "19",
  "VDD_20": "20",
  "EPAD": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", REF: "passive", REFIN: "passive", GND_4: "power_in", GND_5: "passive", IN4: "input", IN5: "input", IN6: "input", IN7: "input", COM: "input", CNV: "input", DIN: "input", SCK: "input", SDO: "output", VIO: "power_in", IN0: "input", IN1: "input", IN2: "input", IN3: "input", VDD_20: "passive", EPAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD7722 extends Component.withPins({
  "DB2": "1",
  "DB1": "2",
  "DB0": "3",
  "CFMT/~{DRDY}": "4",
  "DVAL/~{RD}": "5",
  "DGND_6": "6",
  "~{UNI}": "7",
  "P/~{S}": "8",
  "AGND_9": "9",
  "AGND1": "10",
  "CLKIN": "11",
  "XTAL": "12",
  "AGND_13": "13",
  "AVDD1": "14",
  "AGND_15": "15",
  "VIN-": "16",
  "RESET": "17",
  "VIN+": "18",
  "AGND_19": "19",
  "AVDD_20": "20",
  "AGND_21": "21",
  "REF1": "22",
  "AVDD_23": "23",
  "REF2": "24",
  "AGND_25": "25",
  "AGND_26": "26",
  "CAL": "27",
  "DGND_28": "28",
  "~{CS}": "29",
  "SYNC": "30",
  "DB15": "31",
  "DB14": "32",
  "DB13": "33",
  "DB12": "34",
  "DB11": "35",
  "DB10": "36",
  "FSO/DB9": "37",
  "SDO/DB8": "38",
  "DVDD": "39",
  "SCO/DB7": "40",
  "FSI/DB6": "41",
  "SFMT/DB5": "42",
  "DOE/DB4": "43",
  "TSI/DB3": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DB2: "input", DB1: "input", DB0: "input", "CFMT/~{DRDY}": "input", "DVAL/~{RD}": "input", DGND_6: "power_in", "~{UNI}": "input", "P/~{S}": "input", AGND_9: "power_in", AGND1: "power_in", CLKIN: "input", XTAL: "output", AGND_13: "passive", AVDD1: "power_in", AGND_15: "passive", "VIN-": "input", RESET: "input", "VIN+": "input", AGND_19: "passive", AVDD_20: "power_in", AGND_21: "passive", REF1: "power_out", AVDD_23: "passive", REF2: "power_out", AGND_25: "passive", AGND_26: "passive", CAL: "input", DGND_28: "passive", "~{CS}": "input", SYNC: "input", DB15: "output", DB14: "output", DB13: "output", DB12: "output", DB11: "output", DB10: "output", "FSO/DB9": "output", "SDO/DB8": "output", DVDD: "power_in", "SCO/DB7": "input", "FSI/DB6": "input", "SFMT/DB5": "input", "DOE/DB4": "input", "TSI/DB3": "input", ...opts.pinTypes } });
  }
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
 */
export class AD7745 extends Component.withPins({
  "SCL": "1",
  "~{RDY}": "2",
  "EXCA": "3",
  "EXCB": "4",
  "REFIN+": "5",
  "REFIN-": "6",
  "CIN1-": "7",
  "CIN1+": "8",
  "NC_9": "9",
  "NC_10": "10",
  "VIN+": "11",
  "VIN-": "12",
  "GND": "13",
  "VDD": "14",
  "NC_15": "15",
  "SDA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", "~{RDY}": "output", EXCA: "output", EXCB: "output", "REFIN+": "input", "REFIN-": "input", "CIN1-": "passive", "CIN1+": "passive", NC_9: "no_connect", NC_10: "no_connect", "VIN+": "input", "VIN-": "input", GND: "power_in", VDD: "power_in", NC_15: "no_connect", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class AD7746 extends Component.withPins({
  "SCL": "1",
  "~{RDY}": "2",
  "EXCA": "3",
  "EXCB": "4",
  "REFIN+": "5",
  "REFIN-": "6",
  "CIN1-": "7",
  "CIN1+": "8",
  "CIN2+": "9",
  "CIN2-": "10",
  "VIN+": "11",
  "VIN-": "12",
  "GND": "13",
  "VDD": "14",
  "NC": "15",
  "SDA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", "~{RDY}": "output", EXCA: "output", EXCB: "output", "REFIN+": "input", "REFIN-": "input", "CIN1-": "passive", "CIN1+": "passive", "CIN2+": "passive", "CIN2-": "passive", "VIN+": "input", "VIN-": "input", GND: "power_in", VDD: "power_in", NC: "no_connect", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class AD7779 extends Component.withPins({
  "AIN0-": "1",
  "AIN0+": "2",
  "AIN1-": "3",
  "AIN1+": "4",
  "AVSS1A": "5",
  "AVDD1A": "6",
  "REF1-": "7",
  "REF1+": "8",
  "AIN2-": "9",
  "AIN2+": "10",
  "AIN3-": "11",
  "AIN3+": "12",
  "MODE0/GPIO0": "13",
  "MODE1/GPIO1": "14",
  "MODE2/GPIO2": "15",
  "MODE3/ALERT": "16",
  "CONVST_SAR": "17",
  "ALERT/~{CS}": "18",
  "DCLK2/SCLK": "19",
  "DCLK1/SDI": "20",
  "DCLK0/SDO": "21",
  "DGND": "22",
  "DREGCAP": "23",
  "IOVDD": "24",
  "DOUT3": "25",
  "DOUT2": "26",
  "DOUT1": "27",
  "DOUT0": "28",
  "DCLK": "29",
  "~{DRDY}": "30",
  "XTAL1": "31",
  "XTAL2/MCLK": "32",
  "~{START}": "33",
  "~{SYNC_OUT}": "34",
  "~{SYNC_IN}": "35",
  "~{RESET}": "36",
  "AIN7+": "37",
  "AIN7-": "38",
  "AIN6+": "39",
  "AIN6-": "40",
  "REF2+": "41",
  "REF2-": "42",
  "AVDD1B": "43",
  "AVSS1B": "44",
  "AIN5+": "45",
  "AIN5-": "46",
  "AIN4+": "47",
  "AIN4-": "48",
  "REF_OUT": "49",
  "AVSS2B": "50",
  "AREG2CAP": "51",
  "AVDD2B": "52",
  "AVSS3": "53",
  "FORMAT1": "54",
  "FORMAT0": "55",
  "CLK_SEL": "56",
  "VCM": "57",
  "AVDD2A": "58",
  "AREG1CAP": "59",
  "AVSS2A": "60",
  "AVSS4": "61",
  "AVDD4": "62",
  "AUXAIN+": "63",
  "AUXAIN-": "64",
  "EPAD(AVSSx)": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AIN0-": "input", "AIN0+": "input", "AIN1-": "input", "AIN1+": "input", AVSS1A: "power_in", AVDD1A: "power_in", "REF1-": "input", "REF1+": "input", "AIN2-": "input", "AIN2+": "input", "AIN3-": "input", "AIN3+": "input", "MODE0/GPIO0": "bidirectional", "MODE1/GPIO1": "bidirectional", "MODE2/GPIO2": "bidirectional", "MODE3/ALERT": "bidirectional", CONVST_SAR: "input", "ALERT/~{CS}": "bidirectional", "DCLK2/SCLK": "input", "DCLK1/SDI": "input", "DCLK0/SDO": "bidirectional", DGND: "power_in", DREGCAP: "passive", IOVDD: "power_in", DOUT3: "bidirectional", DOUT2: "bidirectional", DOUT1: "output", DOUT0: "output", DCLK: "output", "~{DRDY}": "output", XTAL1: "passive", "XTAL2/MCLK": "input", "~{START}": "input", "~{SYNC_OUT}": "output", "~{SYNC_IN}": "input", "~{RESET}": "input", "AIN7+": "input", "AIN7-": "input", "AIN6+": "input", "AIN6-": "input", "REF2+": "input", "REF2-": "input", AVDD1B: "power_in", AVSS1B: "power_in", "AIN5+": "input", "AIN5-": "input", "AIN4+": "input", "AIN4-": "input", REF_OUT: "output", AVSS2B: "power_in", AREG2CAP: "passive", AVDD2B: "power_in", AVSS3: "power_in", FORMAT1: "input", FORMAT0: "input", CLK_SEL: "input", VCM: "output", AVDD2A: "power_in", AREG1CAP: "passive", AVSS2A: "power_in", AVSS4: "power_in", AVDD4: "power_in", "AUXAIN+": "input", "AUXAIN-": "input", "EPAD(AVSSx)": "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD7794 extends Component.withPins({
  "SCLK": "1",
  "CLK": "2",
  "~{CS}": "3",
  "NC": "4",
  "AIN6+/P1": "5",
  "AIN6-/P2": "6",
  "AIN1+": "7",
  "AIN1-": "8",
  "AIN2+": "9",
  "AIN2-": "10",
  "AIN3+": "11",
  "AIN3-": "12",
  "REFIN1+": "13",
  "REFIN1-": "14",
  "AIN5+/IOUT2": "15",
  "AIN5-/IOUT1": "16",
  "AIN4+/REFIN2+": "17",
  "AIN4-/REFIN2-": "18",
  "PSW": "19",
  "GND": "20",
  "AVDD": "21",
  "DVDD": "22",
  "DOUT/~{RDY}": "23",
  "DIN": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCLK: "input", CLK: "bidirectional", "~{CS}": "input", NC: "no_connect", "AIN6+/P1": "input", "AIN6-/P2": "input", "AIN1+": "input", "AIN1-": "input", "AIN2+": "input", "AIN2-": "input", "AIN3+": "input", "AIN3-": "input", "REFIN1+": "input", "REFIN1-": "input", "AIN5+/IOUT2": "input", "AIN5-/IOUT1": "input", "AIN4+/REFIN2+": "input", "AIN4-/REFIN2-": "input", PSW: "passive", GND: "power_in", AVDD: "power_in", DVDD: "power_in", "DOUT/~{RDY}": "output", DIN: "input", ...opts.pinTypes } });
  }
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
 */
export class AD7795 extends Component.withPins({
  "SCLK": "1",
  "CLK": "2",
  "~{CS}": "3",
  "NC": "4",
  "AIN6+/P1": "5",
  "AIN6-/P2": "6",
  "AIN1+": "7",
  "AIN1-": "8",
  "AIN2+": "9",
  "AIN2-": "10",
  "AIN3+": "11",
  "AIN3-": "12",
  "REFIN1+": "13",
  "REFIN1-": "14",
  "AIN5+/IOUT2": "15",
  "AIN5-/IOUT1": "16",
  "AIN4+/REFIN2+": "17",
  "AIN4-/REFIN2-": "18",
  "PSW": "19",
  "GND": "20",
  "AVDD": "21",
  "DVDD": "22",
  "DOUT/~{RDY}": "23",
  "DIN": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCLK: "input", CLK: "bidirectional", "~{CS}": "input", NC: "no_connect", "AIN6+/P1": "input", "AIN6-/P2": "input", "AIN1+": "input", "AIN1-": "input", "AIN2+": "input", "AIN2-": "input", "AIN3+": "input", "AIN3-": "input", "REFIN1+": "input", "REFIN1-": "input", "AIN5+/IOUT2": "input", "AIN5-/IOUT1": "input", "AIN4+/REFIN2+": "input", "AIN4-/REFIN2-": "input", PSW: "passive", GND: "power_in", AVDD: "power_in", DVDD: "power_in", "DOUT/~{RDY}": "output", DIN: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_ADC:AD7795";
  override referencePrefix = "U";
}

/**
 * Analog to Digital 8 bits converter, PDIP/SOIC/TSSOP-16
 *
 * KiCad symbol: `Analog_ADC:AD7819`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7819.pdf
 * Keywords: CAD.
 */
export class AD7819 extends Component.withPins({
  "VREF": "1",
  "Vin": "2",
  "GND": "3",
  "START": "4",
  "CS": "5",
  "OE": "6",
  "EOC": "7",
  "DB0": "8",
  "DB1": "9",
  "DB2": "10",
  "DB3": "11",
  "DB4": "12",
  "DB5": "13",
  "DB6": "14",
  "DB7": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "input", Vin: "input", GND: "power_in", START: "input", CS: "input", OE: "input", EOC: "output", DB0: "tri_state", DB1: "tri_state", DB2: "tri_state", DB3: "tri_state", DB4: "tri_state", DB5: "tri_state", DB6: "tri_state", DB7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD9280ARS extends Component.withPins({
  "AVSS": "1",
  "DRVDD": "2",
  "NC_3": "3",
  "NC_4": "4",
  "D0": "5",
  "D1": "6",
  "D2": "7",
  "D3": "8",
  "D4": "9",
  "D5": "10",
  "D6": "11",
  "D7": "12",
  "OTR": "13",
  "DRVSS": "14",
  "CLK": "15",
  "THREE-STATE": "16",
  "STBY": "17",
  "REFSENSE": "18",
  "CLAMP": "19",
  "CLAMPIN": "20",
  "REFTS": "21",
  "REFTF": "22",
  "MODE": "23",
  "REFBF": "24",
  "REFBS": "25",
  "VREF": "26",
  "AIN": "27",
  "AVDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AVSS: "power_in", DRVDD: "power_in", NC_3: "no_connect", NC_4: "no_connect", D0: "output", D1: "output", D2: "output", D3: "output", D4: "output", D5: "output", D6: "output", D7: "output", OTR: "output", DRVSS: "power_in", CLK: "input", "THREE-STATE": "input", STBY: "passive", REFSENSE: "input", CLAMP: "passive", CLAMPIN: "input", REFTS: "input", REFTF: "input", MODE: "input", REFBF: "input", REFBS: "input", VREF: "passive", AIN: "input", AVDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_ADC:AD9280ARS";
  override referencePrefix = "U";
}

/**
 * ADC 50MHz 8 bits, SSOP-20
 *
 * KiCad symbol: `Analog_ADC:AD9283`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9283.pdf
 * Keywords: ADC.
 */
export class AD9283 extends Component.withPins({
  "PWRDWN": "1",
  "VREFout": "2",
  "VREFin": "3",
  "GND_4": "4",
  "VaD_5": "5",
  "Ain-": "6",
  "Ain+": "7",
  "VaD_8": "8",
  "GND_9": "9",
  "CLK": "10",
  "DO7": "11",
  "DO6": "12",
  "DO5": "13",
  "DO4": "14",
  "VDD": "15",
  "GND_16": "16",
  "DO3": "17",
  "DO2": "18",
  "DO1": "19",
  "DO0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWRDWN: "input", VREFout: "input", VREFin: "input", GND_4: "power_in", VaD_5: "power_in", "Ain-": "input", "Ain+": "input", VaD_8: "power_in", GND_9: "power_in", CLK: "input", DO7: "output", DO6: "output", DO5: "output", DO4: "output", VDD: "power_in", GND_16: "power_in", DO3: "output", DO2: "output", DO1: "output", DO0: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_ADC:AD9283";
  override referencePrefix = "U";
}

/**
 * Analog to Digital 8 bits converter, DIP-18 (Hermetic)
 *
 * KiCad symbol: `Analog_ADC:ADC0800`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/snas562/snas562.pdf
 * Keywords: CAD.
 */
export class ADC0800 extends Component.withPins({
  "QE": "1",
  "QF": "2",
  "QG": "3",
  "QH": "4",
  "Rbot": "5",
  "Start": "6",
  "OE": "7",
  "-Vgg": "8",
  "EOC": "9",
  "VCC": "10",
  "Clk": "11",
  "Vin": "12",
  "QA": "13",
  "QB": "14",
  "Rtop": "15",
  "QC": "16",
  "QD": "17",
  "DGND": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QE: "tri_state", QF: "tri_state", QG: "tri_state", QH: "tri_state", Rbot: "input", Start: "input", OE: "input", "-Vgg": "power_in", EOC: "output", VCC: "power_in", Clk: "input", Vin: "input", QA: "tri_state", QB: "tri_state", Rtop: "input", QC: "tri_state", QD: "tri_state", DGND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_ADC:ADC0800";
  override referencePrefix = "U";
}

/**
 * Fast ADC  (20 .. 60 Mhz), TSSOP-24
 *
 * KiCad symbol: `Analog_ADC:ADC08060`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/adc08060.pdf
 * Keywords: ADC CAN VIDEO.
 */
export class ADC08060 extends Component.withPins({
  "AVDD_1": "1",
  "AGND_2": "2",
  "VRT": "3",
  "AVDD_4": "4",
  "AGND_5": "5",
  "AIN": "6",
  "VIN_GND": "7",
  "DGND_8": "8",
  "VRB_9": "9",
  "VRB_10": "10",
  "AGND_11": "11",
  "AVDD_12": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "D3": "16",
  "DGND_17": "17",
  "DVDD": "18",
  "D4": "19",
  "D5": "20",
  "D6": "21",
  "D7": "22",
  "PWR_DWN": "23",
  "CLK": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AVDD_1: "power_in", AGND_2: "power_in", VRT: "input", AVDD_4: "power_in", AGND_5: "power_in", AIN: "input", VIN_GND: "input", DGND_8: "power_in", VRB_9: "input", VRB_10: "input", AGND_11: "power_in", AVDD_12: "power_in", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", DGND_17: "power_in", DVDD: "power_in", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", PWR_DWN: "input", CLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC081C021CIMM extends Component.withPins({
  "SCL": "1",
  "ALERT": "2",
  "ADR0": "3",
  "VIN": "4",
  "VA": "5",
  "ADR1": "6",
  "GND": "7",
  "SDA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", ALERT: "open_collector", ADR0: "input", VIN: "input", VA: "power_in", ADR1: "input", GND: "power_in", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class ADC082S021 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC082S051 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC082S101 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_ADC:ADC082S101";
  override referencePrefix = "U";
}

/**
 * 2 inputs AD Converter (serial output),
 *
 * KiCad symbol: `Analog_ADC:ADC0832`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/adc0831-n.pdf
 * Keywords: ADC CAN.
 */
export class ADC0832 extends Component.withPins({
  "CS": "1",
  "ANALOG0": "2",
  "ANALOG1": "3",
  "GND": "4",
  "DIN": "5",
  "DOUT": "6",
  "CLK": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", ANALOG0: "input", ANALOG1: "input", GND: "input", DIN: "input", DOUT: "output", CLK: "input", VCC: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC101C021CIMK extends Component.withPins({
  "V_{A}": "1",
  "GND": "2",
  "V_{IN}": "3",
  "ADDR": "4",
  "SCL": "5",
  "SDA": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{A}": "power_in", GND: "power_in", "V_{IN}": "input", ADDR: "input", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class ADC101C021CIMM extends Component.withPins({
  "SCL": "1",
  "ALERT": "2",
  "ADR0": "3",
  "VIN": "4",
  "VA": "5",
  "ADR1": "6",
  "GND": "7",
  "SDA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", ALERT: "open_collector", ADR0: "input", VIN: "input", VA: "power_in", ADR1: "input", GND: "power_in", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class ADC102S021 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC102S051 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC102S101 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_ADC:ADC102S101";
  override referencePrefix = "U";
}

/**
 * Fast ADC  (15 Mhz), TSSOP-24
 *
 * KiCad symbol: `Analog_ADC:ADC1173`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/adc1173.pdf
 * Keywords: ADC CAN VIDEO.
 */
export class ADC1173 extends Component.withPins({
  "OE": "1",
  "DVSS_2": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "D4": "7",
  "D5": "8",
  "D6": "9",
  "D7": "10",
  "DVDD_11": "11",
  "CLK": "12",
  "DVDD_13": "13",
  "AVDD_14": "14",
  "AVDD_15": "15",
  "VRTS": "16",
  "VRT": "17",
  "AVDD_18": "18",
  "VIN": "19",
  "AVSS_20": "20",
  "AVSS_21": "21",
  "VRBS": "22",
  "VRB": "23",
  "DVSS_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", DVSS_2: "power_in", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", DVDD_11: "power_in", CLK: "input", DVDD_13: "power_in", AVDD_14: "power_in", AVDD_15: "power_in", VRTS: "input", VRT: "input", AVDD_18: "power_in", VIN: "input", AVSS_20: "power_in", AVSS_21: "power_in", VRBS: "input", VRB: "input", DVSS_24: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADC121C021CIMM extends Component.withPins({
  "SCL": "1",
  "ALERT": "2",
  "ADR0": "3",
  "VIN": "4",
  "VA": "5",
  "ADR1": "6",
  "GND": "7",
  "SDA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", ALERT: "open_collector", ADR0: "input", VIN: "input", VA: "power_in", ADR1: "input", GND: "power_in", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class ADC122S021 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC122S051 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC122S101 extends Component.withPins({
  "~{CS}": "1",
  "V_{A}": "2",
  "GND": "3",
  "IN2": "4",
  "IN1": "5",
  "DIN": "6",
  "DOUT": "7",
  "SCLK": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", "V_{A}": "power_in", GND: "power_in", IN2: "input", IN1: "input", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC1283 extends Component.withPins({
  "~{CS}": "1",
  "AVCC": "2",
  "AGND": "3",
  "IN0": "4",
  "IN1": "5",
  "IN2": "6",
  "IN3": "7",
  "IN4": "8",
  "IN5": "9",
  "IN6": "10",
  "IN7": "11",
  "DGND": "12",
  "DVCC": "13",
  "DIN": "14",
  "DOUT": "15",
  "SCLK": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", AVCC: "power_in", AGND: "power_in", IN0: "input", IN1: "input", IN2: "input", IN3: "input", IN4: "input", IN5: "input", IN6: "input", IN7: "input", DGND: "power_in", DVCC: "power_in", DIN: "input", DOUT: "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADC128D818 extends Component.withPins({
  "VREF": "1",
  "SDA": "2",
  "SCL": "3",
  "GND": "4",
  "V+": "5",
  "~{INT}": "6",
  "A0": "7",
  "A1": "8",
  "IN7": "9",
  "IN6": "10",
  "IN5": "11",
  "IN4": "12",
  "IN3": "13",
  "IN2": "14",
  "IN1": "15",
  "IN0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "input", SDA: "bidirectional", SCL: "input", GND: "power_in", "V+": "power_in", "~{INT}": "output", A0: "input", A1: "input", IN7: "input", IN6: "input", IN5: "input", IN4: "input", IN3: "input", IN2: "input", IN1: "input", IN0: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1013IDGS extends Component.withPins({
  "ADDR": "1",
  "P2": "2",
  "GND": "3",
  "AIN0": "4",
  "AIN1": "5",
  "P6": "6",
  "P7": "7",
  "VDD": "8",
  "SDA": "9",
  "SCL": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADDR: "input", P2: "no_connect", GND: "power_in", AIN0: "input", AIN1: "input", P6: "no_connect", P7: "no_connect", VDD: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1014IDGS extends Component.withPins({
  "ADDR": "1",
  "ALERT/RDY": "2",
  "GND": "3",
  "AIN0": "4",
  "AIN1": "5",
  "P6": "6",
  "P7": "7",
  "VDD": "8",
  "SDA": "9",
  "SCL": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADDR: "input", "ALERT/RDY": "output", GND: "power_in", AIN0: "input", AIN1: "input", P6: "no_connect", P7: "no_connect", VDD: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1015IDGS extends Component.withPins({
  "ADDR": "1",
  "ALERT/RDY": "2",
  "GND": "3",
  "AIN0": "4",
  "AIN1": "5",
  "AIN2": "6",
  "AIN3": "7",
  "VDD": "8",
  "SDA": "9",
  "SCL": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADDR: "input", "ALERT/RDY": "output", GND: "power_in", AIN0: "input", AIN1: "input", AIN2: "input", AIN3: "input", VDD: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1018IDGS extends Component.withPins({
  "SCLK": "1",
  "~{CS}": "2",
  "GND": "3",
  "AIN0": "4",
  "AIN1": "5",
  "AIN2": "6",
  "AIN3": "7",
  "VDD": "8",
  "DOUT/~{DRDY}": "9",
  "DIN": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCLK: "input", "~{CS}": "input", GND: "power_in", AIN0: "input", AIN1: "input", AIN2: "input", AIN3: "input", VDD: "power_in", "DOUT/~{DRDY}": "output", DIN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1110 extends Component.withPins({
  "VIN+": "1",
  "GND": "2",
  "SCL": "3",
  "SDA": "4",
  "VDD": "5",
  "VIN-": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "VIN+": "input", GND: "power_in", SCL: "input", SDA: "bidirectional", VDD: "power_in", "VIN-": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1113IDGS extends Component.withPins({
  "ADDR": "1",
  "P2": "2",
  "GND": "3",
  "AIN0": "4",
  "AIN1": "5",
  "P6": "6",
  "P7": "7",
  "VDD": "8",
  "SDA": "9",
  "SCL": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADDR: "input", P2: "no_connect", GND: "power_in", AIN0: "input", AIN1: "input", P6: "no_connect", P7: "no_connect", VDD: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1114IDGS extends Component.withPins({
  "ADDR": "1",
  "ALERT/RDY": "2",
  "GND": "3",
  "AIN0": "4",
  "AIN1": "5",
  "P6": "6",
  "P7": "7",
  "VDD": "8",
  "SDA": "9",
  "SCL": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADDR: "input", "ALERT/RDY": "output", GND: "power_in", AIN0: "input", AIN1: "input", P6: "no_connect", P7: "no_connect", VDD: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1115IDGS extends Component.withPins({
  "ADDR": "1",
  "ALERT/RDY": "2",
  "GND": "3",
  "AIN0": "4",
  "AIN1": "5",
  "AIN2": "6",
  "AIN3": "7",
  "VDD": "8",
  "SDA": "9",
  "SCL": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ADDR: "input", "ALERT/RDY": "output", GND: "power_in", AIN0: "input", AIN1: "input", AIN2: "input", AIN3: "input", VDD: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1118IDGS extends Component.withPins({
  "SCLK": "1",
  "~{CS}": "2",
  "GND": "3",
  "AIN0": "4",
  "AIN1": "5",
  "AIN2": "6",
  "AIN3": "7",
  "VDD": "8",
  "DOUT/~{DRDY}": "9",
  "DIN": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCLK: "input", "~{CS}": "input", GND: "power_in", AIN0: "input", AIN1: "input", AIN2: "input", AIN3: "input", VDD: "power_in", "DOUT/~{DRDY}": "output", DIN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1120_PW extends Component.withPins({
  "SCLK": "1",
  "~{CS}": "2",
  "CLK": "3",
  "DGND": "4",
  "AVSS": "5",
  "AIN3/REFN1": "6",
  "AIN2": "7",
  "REFN0": "8",
  "REFP0": "9",
  "AIN1": "10",
  "AIN0/REFP1": "11",
  "AVDD": "12",
  "DVDD": "13",
  "~{DRDY}": "14",
  "DOUT/~{DRDY}": "15",
  "DIN": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCLK: "input", "~{CS}": "input", CLK: "input", DGND: "power_in", AVSS: "power_in", "AIN3/REFN1": "input", AIN2: "input", REFN0: "input", REFP0: "input", AIN1: "input", "AIN0/REFP1": "input", AVDD: "power_in", DVDD: "power_in", "~{DRDY}": "output", "DOUT/~{DRDY}": "output", DIN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1120_RVA extends Component.withPins({
  "CLK": "1",
  "DGND": "2",
  "AVSS": "3",
  "AIN3/REFN1": "4",
  "AIN2": "5",
  "REFN0": "6",
  "REFP0": "7",
  "AIN1": "8",
  "AIN0/REFP1": "9",
  "AVDD": "10",
  "DVDD": "11",
  "~{DRDY}": "12",
  "DOUT/~{DRDY}": "13",
  "DIN": "14",
  "SCLK": "15",
  "~{CS}": "16",
  "PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLK: "input", DGND: "power_in", AVSS: "power_in", "AIN3/REFN1": "input", AIN2: "input", REFN0: "input", REFP0: "input", AIN1: "input", "AIN0/REFP1": "input", AVDD: "power_in", DVDD: "power_in", "~{DRDY}": "output", "DOUT/~{DRDY}": "output", DIN: "input", SCLK: "input", "~{CS}": "input", PAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADS1220xPW extends Component.withPins({
  "SCLK": "1",
  "~{CS}": "2",
  "CLK": "3",
  "DGND": "4",
  "AVSS": "5",
  "AIN3/REFN1": "6",
  "AIN2": "7",
  "REFN0": "8",
  "REFP0": "9",
  "AIN1": "10",
  "AIN0/REFP1": "11",
  "AVDD": "12",
  "DVDD": "13",
  "~{DRDY}": "14",
  "DOUT/~{DRDY}": "15",
  "DIN": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCLK: "input", "~{CS}": "input", CLK: "input", DGND: "power_in", AVSS: "power_in", "AIN3/REFN1": "input", AIN2: "input", REFN0: "input", REFP0: "input", AIN1: "input", "AIN0/REFP1": "input", AVDD: "power_in", DVDD: "power_in", "~{DRDY}": "output", "DOUT/~{DRDY}": "output", DIN: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS1232IPW extends Component.withPins({
  "DVDD": "1",
  "DGND_2": "2",
  "CLKIN/XTAL1": "3",
  "XTAL2": "4",
  "DGND_5": "5",
  "DGND_6": "6",
  "TEMP": "7",
  "A0": "8",
  "CAP_9": "9",
  "CAP_10": "10",
  "AINP1": "11",
  "AINN1": "12",
  "AINN2": "13",
  "AINP2": "14",
  "REFN": "15",
  "REFP": "16",
  "AGND": "17",
  "AVDD": "18",
  "GAIN0": "19",
  "GAIN1": "20",
  "SPEED": "21",
  "~{PWDN}": "22",
  "SCLK": "23",
  "~{DRDY}/DOUT": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", DGND_2: "power_in", "CLKIN/XTAL1": "bidirectional", XTAL2: "bidirectional", DGND_5: "power_in", DGND_6: "power_in", TEMP: "input", A0: "input", CAP_9: "passive", CAP_10: "passive", AINP1: "input", AINN1: "input", AINN2: "input", AINP2: "input", REFN: "input", REFP: "input", AGND: "power_in", AVDD: "power_in", GAIN0: "input", GAIN1: "input", SPEED: "input", "~{PWDN}": "input", SCLK: "input", "~{DRDY}/DOUT": "output", ...opts.pinTypes } });
  }
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
 */
export class ADS1234IPW extends Component.withPins({
  "DVDD": "1",
  "DGND_2": "2",
  "CLKIN/XTAL1": "3",
  "XTAL2": "4",
  "DGND_5": "5",
  "DGND_6": "6",
  "A1": "7",
  "A0": "8",
  "CAP_9": "9",
  "CAP_10": "10",
  "AINP1": "11",
  "AINN1": "12",
  "AINP3": "13",
  "AINN3": "14",
  "AINN4": "15",
  "AINP4": "16",
  "AINN2": "17",
  "AINP2": "18",
  "REFN": "19",
  "REFP": "20",
  "AGND": "21",
  "AVDD": "22",
  "GAIN0": "23",
  "GAIN1": "24",
  "SPEED": "25",
  "~{PWDN}": "26",
  "SCLK": "27",
  "~{DRDY}/DOUT": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", DGND_2: "power_in", "CLKIN/XTAL1": "bidirectional", XTAL2: "bidirectional", DGND_5: "power_in", DGND_6: "power_in", A1: "input", A0: "input", CAP_9: "passive", CAP_10: "passive", AINP1: "input", AINN1: "input", AINP3: "input", AINN3: "input", AINN4: "input", AINP4: "input", AINN2: "input", AINP2: "input", REFN: "input", REFP: "input", AGND: "power_in", AVDD: "power_in", GAIN0: "input", GAIN1: "input", SPEED: "input", "~{PWDN}": "input", SCLK: "input", "~{DRDY}/DOUT": "output", ...opts.pinTypes } });
  }
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
 */
export class ADS1243 extends Component.withPins({
  "VDD": "1",
  "XIN": "2",
  "XOUT": "3",
  "~{PDWN}": "4",
  "VREF+": "5",
  "VREF-": "6",
  "Ain0/D0": "7",
  "Ain1/D1": "8",
  "Ain4/D4": "9",
  "Ain5/D5": "10",
  "Ain6/D6": "11",
  "Ain7/D7": "12",
  "Ain2/D2": "13",
  "Ain3/D3": "14",
  "GND": "15",
  "~{CS}": "16",
  "DIN": "17",
  "DOUT": "18",
  "SCLK": "19",
  "~{DRDY}": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", XIN: "input", XOUT: "output", "~{PDWN}": "input", "VREF+": "input", "VREF-": "input", "Ain0/D0": "input", "Ain1/D1": "input", "Ain4/D4": "input", "Ain5/D5": "input", "Ain6/D6": "input", "Ain7/D7": "input", "Ain2/D2": "input", "Ain3/D3": "input", GND: "power_in", "~{CS}": "input", DIN: "input", DOUT: "output", SCLK: "input", "~{DRDY}": "open_collector", ...opts.pinTypes } });
  }
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
 */
export class ADS1251 extends Component.withPins({
  "IN+": "1",
  "IN-": "2",
  "VCC": "3",
  "CLK": "4",
  "DOUT/nDRDY": "5",
  "SCLK": "6",
  "GND": "7",
  "VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IN+": "input", "IN-": "input", VCC: "power_in", CLK: "input", "DOUT/nDRDY": "output", SCLK: "input", GND: "power_in", VREF: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS127L01xPBS extends Component.withPins({
  "LVDD": "1",
  "CAP1": "2",
  "AINN": "3",
  "AINP": "4",
  "AGND_5": "5",
  "AVDD_6": "6",
  "REXT": "7",
  "~{INTLDO}": "8",
  "REFP": "9",
  "REFN": "10",
  "CAP2": "11",
  "FILTER1": "12",
  "FILTER0": "13",
  "FSMODE": "14",
  "OSR1": "15",
  "OSR0": "16",
  "START": "17",
  "DAISYIN": "18",
  "~{DRDY}/FSYNC": "19",
  "DOUT": "20",
  "DIN": "21",
  "SCLK": "22",
  "~{CS}": "23",
  "CLK": "24",
  "CAP3": "25",
  "DGND": "26",
  "DVDD": "27",
  "~{RESET}/~{PWDN}": "28",
  "HR": "29",
  "FORMAT": "30",
  "AGND_31": "31",
  "AVDD_32": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LVDD: "power_in", CAP1: "output", AINN: "input", AINP: "input", AGND_5: "power_in", AVDD_6: "power_in", REXT: "input", "~{INTLDO}": "input", REFP: "input", REFN: "input", CAP2: "output", FILTER1: "input", FILTER0: "input", FSMODE: "input", OSR1: "input", OSR0: "input", START: "input", DAISYIN: "input", "~{DRDY}/FSYNC": "passive", DOUT: "output", DIN: "input", SCLK: "input", "~{CS}": "input", CLK: "input", CAP3: "output", DGND: "power_in", DVDD: "power_in", "~{RESET}/~{PWDN}": "input", HR: "input", FORMAT: "input", AGND_31: "passive", AVDD_32: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADS1298xPAG extends Component.withPins({
  "IN8N": "1",
  "IN8P": "2",
  "IN7N": "3",
  "IN7P": "4",
  "IN6N": "5",
  "IN6P": "6",
  "IN5N": "7",
  "IN5P": "8",
  "IN4N": "9",
  "IN4P": "10",
  "IN3N": "11",
  "IN3P": "12",
  "IN2N": "13",
  "IN2P": "14",
  "IN1N": "15",
  "IN1P": "16",
  "TESTP_PACE_OUT1": "17",
  "TESTP_PACE_OUT2": "18",
  "AVDD_19": "19",
  "AVSS_20": "20",
  "AVDD_21": "21",
  "AVDD_22": "22",
  "AVSS_23": "23",
  "VREFP": "24",
  "VREFN": "25",
  "VCAP4": "26",
  "NC_27": "27",
  "VCAP1": "28",
  "NC_29": "29",
  "VCAP2": "30",
  "RESV1": "31",
  "AVSS_32": "32",
  "DGND_33": "33",
  "DIN": "34",
  "~{PWDN}": "35",
  "~{RESET}": "36",
  "CLK": "37",
  "START": "38",
  "~{CS}": "39",
  "SCLK": "40",
  "DAISY_IN": "41",
  "GPIO1": "42",
  "DOUT": "43",
  "GPIO2": "44",
  "GPIO3": "45",
  "GPIO4": "46",
  "~{DRDY}": "47",
  "DVDD_48": "48",
  "DGND_49": "49",
  "DVDD_50": "50",
  "DGND_51": "51",
  "CLKSEL": "52",
  "AVSS1": "53",
  "AVDD1": "54",
  "VCAP3": "55",
  "AVDD_56": "56",
  "AVSS_57": "57",
  "AVSS_58": "58",
  "AVDD_59": "59",
  "RLDREF": "60",
  "RLDINV": "61",
  "RLDIN": "62",
  "RLDOUT": "63",
  "WCT": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN8N: "input", IN8P: "input", IN7N: "input", IN7P: "input", IN6N: "input", IN6P: "input", IN5N: "input", IN5P: "input", IN4N: "input", IN4P: "input", IN3N: "input", IN3P: "input", IN2N: "input", IN2P: "input", IN1N: "input", IN1P: "input", TESTP_PACE_OUT1: "bidirectional", TESTP_PACE_OUT2: "bidirectional", AVDD_19: "power_in", AVSS_20: "power_in", AVDD_21: "passive", AVDD_22: "passive", AVSS_23: "passive", VREFP: "passive", VREFN: "passive", VCAP4: "passive", NC_27: "no_connect", VCAP1: "passive", NC_29: "no_connect", VCAP2: "passive", RESV1: "input", AVSS_32: "passive", DGND_33: "power_in", DIN: "input", "~{PWDN}": "input", "~{RESET}": "input", CLK: "bidirectional", START: "input", "~{CS}": "input", SCLK: "input", DAISY_IN: "input", GPIO1: "bidirectional", DOUT: "output", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", "~{DRDY}": "output", DVDD_48: "power_in", DGND_49: "passive", DVDD_50: "passive", DGND_51: "passive", CLKSEL: "input", AVSS1: "power_in", AVDD1: "power_in", VCAP3: "passive", AVDD_56: "passive", AVSS_57: "passive", AVSS_58: "passive", AVDD_59: "passive", RLDREF: "input", RLDINV: "input", RLDIN: "input", RLDOUT: "output", WCT: "output", ...opts.pinTypes } });
  }
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
 */
export class ADS1299 extends Component.withPins({
  "IN8N": "1",
  "IN8P": "2",
  "IN7N": "3",
  "IN7P": "4",
  "IN6N": "5",
  "IN6P": "6",
  "IN5N": "7",
  "IN5P": "8",
  "IN4N": "9",
  "IN4P": "10",
  "IN3N": "11",
  "IN3P": "12",
  "IN2N": "13",
  "IN2P": "14",
  "IN1N": "15",
  "IN1P": "16",
  "SRB1": "17",
  "SRB2": "18",
  "AVDD_19": "19",
  "AVSS_20": "20",
  "AVDD_21": "21",
  "AVDD_22": "22",
  "AVSS_23": "23",
  "VREFP": "24",
  "VREFN": "25",
  "VCAP4": "26",
  "NC_27": "27",
  "VCAP1": "28",
  "NC_29": "29",
  "VCAP2": "30",
  "RESV1": "31",
  "AVSS_32": "32",
  "DGND_33": "33",
  "DIN": "34",
  "~{PWDN}": "35",
  "~{RESET}": "36",
  "CLK": "37",
  "START": "38",
  "~{CS}": "39",
  "SCLK": "40",
  "DAISY_IN": "41",
  "GPIO1": "42",
  "DOUT": "43",
  "GPIO2": "44",
  "GPIO3": "45",
  "GPIO4": "46",
  "~{DRDY}": "47",
  "DVDD_48": "48",
  "DGND_49": "49",
  "DVDD_50": "50",
  "DGND_51": "51",
  "CLKSEL": "52",
  "AVSS1": "53",
  "AVDD1": "54",
  "VCAP3": "55",
  "AVDD_56": "56",
  "AVSS_57": "57",
  "AVSS_58": "58",
  "AVDD_59": "59",
  "BIASREF": "60",
  "BIASINV": "61",
  "BIASIN": "62",
  "BIASOUT": "63",
  "RESERVED": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN8N: "input", IN8P: "input", IN7N: "input", IN7P: "input", IN6N: "input", IN6P: "input", IN5N: "input", IN5P: "input", IN4N: "input", IN4P: "input", IN3N: "input", IN3P: "input", IN2N: "input", IN2P: "input", IN1N: "input", IN1P: "input", SRB1: "bidirectional", SRB2: "bidirectional", AVDD_19: "power_in", AVSS_20: "power_in", AVDD_21: "passive", AVDD_22: "passive", AVSS_23: "passive", VREFP: "passive", VREFN: "passive", VCAP4: "passive", NC_27: "no_connect", VCAP1: "passive", NC_29: "no_connect", VCAP2: "passive", RESV1: "input", AVSS_32: "passive", DGND_33: "power_in", DIN: "input", "~{PWDN}": "input", "~{RESET}": "input", CLK: "input", START: "input", "~{CS}": "input", SCLK: "input", DAISY_IN: "input", GPIO1: "bidirectional", DOUT: "tri_state", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", "~{DRDY}": "output", DVDD_48: "power_in", DGND_49: "passive", DVDD_50: "passive", DGND_51: "passive", CLKSEL: "input", AVSS1: "power_in", AVDD1: "power_in", VCAP3: "passive", AVDD_56: "passive", AVSS_57: "passive", AVSS_58: "passive", AVDD_59: "passive", BIASREF: "input", BIASINV: "input", BIASIN: "input", BIASOUT: "output", RESERVED: "output", ...opts.pinTypes } });
  }
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
 */
export class ADS131M04xPW extends Component.withPins({
  "AIN1N": "5",
  "DOUT": "15",
  "DIN": "16",
  "CLKIN": "17",
  "CAP": "18",
  "DGND": "19",
  "DVDD": "20",
  "AVDD": "1",
  "AGND": "2",
  "AIN0P": "3",
  "AIN0N": "4",
  "AIN1P": "6",
  "AIN2P": "7",
  "AIN2N": "8",
  "AIN3N": "9",
  "AIN3P": "10",
  "~{SYNC}/~{RESET}": "11",
  "~{CS}": "12",
  "~{DRDY}": "13",
  "SCLK": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN1N: "input", DOUT: "tri_state", DIN: "input", CLKIN: "input", CAP: "passive", DGND: "power_in", DVDD: "power_in", AVDD: "power_in", AGND: "power_in", AIN0P: "input", AIN0N: "input", AIN1P: "input", AIN2P: "input", AIN2N: "input", AIN3N: "input", AIN3P: "input", "~{SYNC}/~{RESET}": "input", "~{CS}": "input", "~{DRDY}": "output", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS131M08xPBS extends Component.withPins({
  "AIN2P": "1",
  "AIN2N": "2",
  "AIN3N": "3",
  "AIN3P": "4",
  "AIN4P": "5",
  "AIN4N": "6",
  "AIN5N": "7",
  "AIN5P": "8",
  "AIN6P": "9",
  "AIN6N": "10",
  "AIN7N": "11",
  "AIN7P": "12",
  "AGND_13": "13",
  "REFIN": "14",
  "AVDD": "15",
  "~{SYNC}/~{RESET}": "16",
  "~{CS}": "17",
  "~{DRDY}": "18",
  "SCLK": "19",
  "DOUT": "20",
  "DIN": "21",
  "XTAL2": "22",
  "XTAL1/CLKIN": "23",
  "CAP": "24",
  "DGND": "25",
  "DVDD": "26",
  "AGND_27": "27",
  "AGND_28": "28",
  "AIN0P": "29",
  "AIN0N": "30",
  "AIN1N": "31",
  "AIN1P": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN2P: "input", AIN2N: "input", AIN3N: "input", AIN3P: "input", AIN4P: "input", AIN4N: "input", AIN5N: "input", AIN5P: "input", AIN6P: "input", AIN6N: "input", AIN7N: "input", AIN7P: "input", AGND_13: "power_in", REFIN: "input", AVDD: "power_in", "~{SYNC}/~{RESET}": "input", "~{CS}": "input", "~{DRDY}": "output", SCLK: "input", DOUT: "tri_state", DIN: "input", XTAL2: "output", "XTAL1/CLKIN": "input", CAP: "passive", DGND: "power_in", DVDD: "power_in", AGND_27: "passive", AGND_28: "passive", AIN0P: "input", AIN0N: "input", AIN1N: "input", AIN1P: "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7040xDCU extends Component.withPins({
  "DVDD": "1",
  "SCLK": "2",
  "SDO": "3",
  "~{CS}": "4",
  "AINM": "5",
  "AINP": "6",
  "AVDD": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", SCLK: "input", SDO: "output", "~{CS}": "input", AINM: "input", AINP: "input", AVDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7029 extends Component.withPins({
  "DVDD": "1",
  "SCLK": "2",
  "SDO": "3",
  "~{CS}": "4",
  "AINM": "5",
  "AINP": "6",
  "AVDD": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", SCLK: "input", SDO: "output", "~{CS}": "input", AINM: "input", AINP: "input", AVDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7039 extends Component.withPins({
  "DVDD": "1",
  "SCLK": "2",
  "SDO": "3",
  "~{CS}": "4",
  "AINM": "5",
  "AINP": "6",
  "AVDD": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", SCLK: "input", SDO: "output", "~{CS}": "input", AINM: "input", AINP: "input", AVDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7041xDCU extends Component.withPins({
  "DVDD": "1",
  "SCLK": "2",
  "SDO": "3",
  "~{CS}": "4",
  "AINM": "5",
  "AINP": "6",
  "AVDD": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", SCLK: "input", SDO: "output", "~{CS}": "input", AINM: "input", AINP: "input", AVDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7042xDCU extends Component.withPins({
  "DVDD": "1",
  "SCLK": "2",
  "SDO": "3",
  "~{CS}": "4",
  "AINM": "5",
  "AINP": "6",
  "AVDD": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", SCLK: "input", SDO: "output", "~{CS}": "input", AINM: "input", AINP: "input", AVDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7043xDCU extends Component.withPins({
  "DVDD": "1",
  "SCLK": "2",
  "SDO": "3",
  "~{CS}": "4",
  "AINM": "5",
  "AINP": "6",
  "AVDD": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", SCLK: "input", SDO: "output", "~{CS}": "input", AINM: "input", AINP: "input", AVDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7044xDCU extends Component.withPins({
  "DVDD": "1",
  "SCLK": "2",
  "SDO": "3",
  "~{CS}": "4",
  "AINM": "5",
  "AINP": "6",
  "AVDD": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", SCLK: "input", SDO: "output", "~{CS}": "input", AINM: "input", AINP: "input", AVDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7049 extends Component.withPins({
  "DVDD": "1",
  "SCLK": "2",
  "SDO": "3",
  "~{CS}": "4",
  "AINM": "5",
  "AINP": "6",
  "AVDD": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD: "power_in", SCLK: "input", SDO: "output", "~{CS}": "input", AINM: "input", AINP: "input", AVDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7828 extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "CH4": "5",
  "CH5": "6",
  "CH6": "7",
  "CH7": "8",
  "GND": "9",
  "REF": "10",
  "COM": "11",
  "A0": "12",
  "A1": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", CH4: "input", CH5: "input", CH6: "input", CH7: "input", GND: "power_in", REF: "bidirectional", COM: "input", A0: "input", A1: "input", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS7866 extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7867 extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7868 extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7886xxDBV extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7886xxDCK extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7887xDBV extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7887xDCK extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7888xDBV extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS7888xDCK extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "VIN": "3",
  "SCLK": "4",
  "SDO": "5",
  "~{CS}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", VIN: "input", SCLK: "input", SDO: "tri_state", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS8681RUM extends Component.withPins({
  "AGND": "1",
  "REFIO": "2",
  "REFGND": "3",
  "REFCAP": "4",
  "AIN_P": "5",
  "AIN_GND": "6",
  "~{RST}": "7",
  "SDI": "8",
  "CONVST/~{CS}": "9",
  "SCLK": "10",
  "SDO-0": "11",
  "SDO-1": "12",
  "RVS": "13",
  "DVDD": "14",
  "DGND": "15",
  "AVDD": "16",
  "PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AGND: "power_in", REFIO: "passive", REFGND: "power_in", REFCAP: "power_in", AIN_P: "input", AIN_GND: "input", "~{RST}": "input", SDI: "input", "CONVST/~{CS}": "input", SCLK: "input", "SDO-0": "tri_state", "SDO-1": "tri_state", RVS: "output", DVDD: "power_in", DGND: "power_in", AVDD: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS8684 extends Component.withPins({
  "SDI": "1",
  "~{RST/PD}": "2",
  "DAISY": "3",
  "~{REFSEL}": "4",
  "REFIO": "5",
  "REFGND": "6",
  "REFCAP": "7",
  "AGND_8": "8",
  "AVDD_9": "9",
  "AUX_IN": "10",
  "AUX_GND": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "AIN_0P": "16",
  "AIN_0GND": "17",
  "AIN_1P": "18",
  "AIN_1GND": "19",
  "AIN_2GND": "20",
  "AIN_2P": "21",
  "AIN_3GND": "22",
  "AIN_3P": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "AGND_28": "28",
  "AGND_29": "29",
  "AVDD_30": "30",
  "AGND_31": "31",
  "AGND_32": "32",
  "DGND": "33",
  "DVDD": "34",
  "DNC": "35",
  "SDO": "36",
  "SCLK": "37",
  "~{CS}": "38",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDI: "input", "~{RST/PD}": "input", DAISY: "input", "~{REFSEL}": "input", REFIO: "passive", REFGND: "power_in", REFCAP: "passive", AGND_8: "power_in", AVDD_9: "power_in", AUX_IN: "input", AUX_GND: "input", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", AIN_0P: "input", AIN_0GND: "input", AIN_1P: "input", AIN_1GND: "input", AIN_2GND: "input", AIN_2P: "input", AIN_3GND: "input", AIN_3P: "input", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", AGND_28: "passive", AGND_29: "passive", AVDD_30: "power_in", AGND_31: "passive", AGND_32: "passive", DGND: "power_in", DVDD: "power_in", DNC: "no_connect", SDO: "output", SCLK: "input", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS8685RUM extends Component.withPins({
  "AGND": "1",
  "REFIO": "2",
  "REFGND": "3",
  "REFCAP": "4",
  "AIN_P": "5",
  "AIN_GND": "6",
  "~{RST}": "7",
  "SDI": "8",
  "CONVST/~{CS}": "9",
  "SCLK": "10",
  "SDO-0": "11",
  "SDO-1": "12",
  "RVS": "13",
  "DVDD": "14",
  "DGND": "15",
  "AVDD": "16",
  "PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AGND: "power_in", REFIO: "passive", REFGND: "power_in", REFCAP: "power_in", AIN_P: "input", AIN_GND: "input", "~{RST}": "input", SDI: "input", "CONVST/~{CS}": "input", SCLK: "input", "SDO-0": "tri_state", "SDO-1": "tri_state", RVS: "output", DVDD: "power_in", DGND: "power_in", AVDD: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADS8688 extends Component.withPins({
  "SDI": "1",
  "~{RST/PD}": "2",
  "DAISY": "3",
  "~{REFSEL}": "4",
  "REFIO": "5",
  "REFGND": "6",
  "REFCAP": "7",
  "AGND_8": "8",
  "AVDD_9": "9",
  "AUX_IN": "10",
  "AUX_GND": "11",
  "AIN_6P": "12",
  "AIN_6GND": "13",
  "AIN_7P": "14",
  "AIN_7GND": "15",
  "AIN_0P": "16",
  "AIN_0GND": "17",
  "AIN_1P": "18",
  "AIN_1GND": "19",
  "AIN_2GND": "20",
  "AIN_2P": "21",
  "AIN_3GND": "22",
  "AIN_3P": "23",
  "AIN_4GND": "24",
  "AIN_4P": "25",
  "AIN_5GND": "26",
  "AIN_5P": "27",
  "AGND_28": "28",
  "AGND_29": "29",
  "AVDD_30": "30",
  "AGND_31": "31",
  "AGND_32": "32",
  "DGND": "33",
  "DVDD": "34",
  "DNC": "35",
  "SDO": "36",
  "SCLK": "37",
  "~{CS}": "38",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDI: "input", "~{RST/PD}": "input", DAISY: "input", "~{REFSEL}": "input", REFIO: "passive", REFGND: "power_in", REFCAP: "passive", AGND_8: "power_in", AVDD_9: "power_in", AUX_IN: "input", AUX_GND: "input", AIN_6P: "input", AIN_6GND: "input", AIN_7P: "input", AIN_7GND: "input", AIN_0P: "input", AIN_0GND: "input", AIN_1P: "input", AIN_1GND: "input", AIN_2GND: "input", AIN_2P: "input", AIN_3GND: "input", AIN_3P: "input", AIN_4GND: "input", AIN_4P: "input", AIN_5GND: "input", AIN_5P: "input", AGND_28: "passive", AGND_29: "passive", AVDD_30: "power_in", AGND_31: "passive", AGND_32: "passive", DGND: "power_in", DVDD: "power_in", DNC: "no_connect", SDO: "output", SCLK: "input", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class ADS8689RUM extends Component.withPins({
  "AGND": "1",
  "REFIO": "2",
  "REFGND": "3",
  "REFCAP": "4",
  "AIN_P": "5",
  "AIN_GND": "6",
  "~{RST}": "7",
  "SDI": "8",
  "CONVST/~{CS}": "9",
  "SCLK": "10",
  "SDO-0": "11",
  "SDO-1": "12",
  "RVS": "13",
  "DVDD": "14",
  "DGND": "15",
  "AVDD": "16",
  "PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AGND: "power_in", REFIO: "passive", REFGND: "power_in", REFCAP: "power_in", AIN_P: "input", AIN_GND: "input", "~{RST}": "input", SDI: "input", "CONVST/~{CS}": "input", SCLK: "input", "SDO-0": "tri_state", "SDO-1": "tri_state", RVS: "output", DVDD: "power_in", DGND: "power_in", AVDD: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AMC3336 extends Component.withPins({
  "DCDC_OUT": "1",
  "DCDC_HGND": "2",
  "HLDO_IN": "3",
  "NC": "4",
  "HLDO_OUT": "5",
  "INP": "6",
  "INN": "7",
  "HGND": "8",
  "GND": "9",
  "DOUT": "10",
  "CLKIN": "11",
  "VDD": "12",
  "LDO_OUT": "13",
  "DIAG": "14",
  "DCDC_GND": "15",
  "DCDC_IN": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DCDC_OUT: "power_out", DCDC_HGND: "power_out", HLDO_IN: "power_in", NC: "no_connect", HLDO_OUT: "power_out", INP: "input", INN: "input", HGND: "power_in", GND: "power_in", DOUT: "output", CLKIN: "input", VDD: "power_in", LDO_OUT: "power_out", DIAG: "output", DCDC_GND: "power_in", DCDC_IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_ADC:AMC3336";
  override referencePrefix = "U";
}

/**
 * Convertisseur A->D 6 bits rapide
 *
 * KiCad symbol: `Analog_ADC:CA3300`. Reference prefix: `U`.
 * Keywords: ADC CAN.
 */
export class CA3300 extends Component.withPins({
  "D5": "1",
  "OVF": "2",
  "GND": "3",
  "ZEN": "4",
  "CE2": "5",
  "CE1": "6",
  "CLK": "7",
  "PHAS": "8",
  "+REF": "9",
  "-REF": "10",
  "VIN": "11",
  "VCC": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "CREF": "16",
  "D3": "17",
  "D4": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D5: "tri_state", OVF: "tri_state", GND: "power_in", ZEN: "input", CE2: "input", CE1: "input", CLK: "input", PHAS: "input", "+REF": "input", "-REF": "input", VIN: "input", VCC: "power_in", D0: "tri_state", D1: "tri_state", D2: "tri_state", CREF: "input", D3: "tri_state", D4: "tri_state", ...opts.pinTypes } });
  }
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
 */
export class HX711 extends Component.withPins({
  "VSUP": "1",
  "BASE": "2",
  "AVDD": "3",
  "VFB": "4",
  "AGND": "5",
  "VBG": "6",
  "INA-": "7",
  "INA+": "8",
  "INB-": "9",
  "INB+": "10",
  "PD_SCK": "11",
  "DOUT": "12",
  "XO": "13",
  "XI": "14",
  "RATE": "15",
  "DVDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSUP: "power_in", BASE: "passive", AVDD: "power_in", VFB: "input", AGND: "power_in", VBG: "passive", "INA-": "input", "INA+": "input", "INB-": "input", "INB+": "input", PD_SCK: "input", DOUT: "output", XO: "passive", XI: "passive", RATE: "input", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ICL7106CPL extends Component.withPins({
  "V+": "1",
  "D1": "2",
  "C1": "3",
  "B1": "4",
  "A1": "5",
  "F1": "6",
  "G1": "7",
  "E1": "8",
  "D2": "9",
  "C2": "10",
  "B2": "11",
  "A2": "12",
  "F2": "13",
  "E2": "14",
  "D3": "15",
  "B3": "16",
  "F3": "17",
  "E3": "18",
  "AB4": "19",
  "POL": "20",
  "BP/GND": "21",
  "G3": "22",
  "A3": "23",
  "C3": "24",
  "G2": "25",
  "V-": "26",
  "INT": "27",
  "BUFF": "28",
  "A-Z": "29",
  "IN_LO": "30",
  "IN_HI": "31",
  "COMMON": "32",
  "CREF-": "33",
  "CREF+": "34",
  "REF_LO": "35",
  "REF_HI": "36",
  "TEST": "37",
  "OSC3": "38",
  "OSC2": "39",
  "OSC1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", D1: "output", C1: "output", B1: "output", A1: "output", F1: "output", G1: "output", E1: "output", D2: "output", C2: "output", B2: "output", A2: "output", F2: "output", E2: "output", D3: "output", B3: "output", F3: "output", E3: "output", AB4: "output", POL: "output", "BP/GND": "bidirectional", G3: "output", A3: "output", C3: "output", G2: "output", "V-": "power_in", INT: "passive", BUFF: "output", "A-Z": "passive", IN_LO: "input", IN_HI: "input", COMMON: "output", "CREF-": "passive", "CREF+": "passive", REF_LO: "passive", REF_HI: "passive", TEST: "passive", OSC3: "passive", OSC2: "passive", OSC1: "passive", ...opts.pinTypes } });
  }
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
 */
export class ICL7107CPL extends Component.withPins({
  "V+": "1",
  "D1": "2",
  "C1": "3",
  "B1": "4",
  "A1": "5",
  "F1": "6",
  "G1": "7",
  "E1": "8",
  "D2": "9",
  "C2": "10",
  "B2": "11",
  "A2": "12",
  "F2": "13",
  "E2": "14",
  "D3": "15",
  "B3": "16",
  "F3": "17",
  "E3": "18",
  "AB4": "19",
  "POL": "20",
  "BP/GND": "21",
  "G3": "22",
  "A3": "23",
  "C3": "24",
  "G2": "25",
  "V-": "26",
  "INT": "27",
  "BUFF": "28",
  "A-Z": "29",
  "IN_LO": "30",
  "IN_HI": "31",
  "COMMON": "32",
  "CREF-": "33",
  "CREF+": "34",
  "REF_LO": "35",
  "REF_HI": "36",
  "TEST": "37",
  "OSC3": "38",
  "OSC2": "39",
  "OSC1": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", D1: "output", C1: "output", B1: "output", A1: "output", F1: "output", G1: "output", E1: "output", D2: "output", C2: "output", B2: "output", A2: "output", F2: "output", E2: "output", D3: "output", B3: "output", F3: "output", E3: "output", AB4: "output", POL: "output", "BP/GND": "bidirectional", G3: "output", A3: "output", C3: "output", G2: "output", "V-": "power_in", INT: "passive", BUFF: "output", "A-Z": "passive", IN_LO: "input", IN_HI: "input", COMMON: "output", "CREF-": "passive", "CREF+": "passive", REF_LO: "passive", REF_HI: "passive", TEST: "passive", OSC3: "passive", OSC2: "passive", OSC1: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC1406CGN extends Component.withPins({
  "OGND": "1",
  "OVDD": "2",
  "~{SHDN}": "3",
  "VBIAS": "4",
  "VREF": "5",
  "AGND_6": "6",
  "AIN+": "7",
  "AIN-": "8",
  "AVDD": "9",
  "AGND_10": "10",
  "DGND": "11",
  "DVDD": "12",
  "NC_13": "13",
  "NC_14": "14",
  "D0": "15",
  "D1": "16",
  "D2": "17",
  "D3": "18",
  "D4": "19",
  "D5": "20",
  "D6": "21",
  "D7": "22",
  "OF/UF": "23",
  "CLK": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OGND: "power_in", OVDD: "power_in", "~{SHDN}": "input", VBIAS: "input", VREF: "input", AGND_6: "power_in", "AIN+": "input", "AIN-": "input", AVDD: "power_in", AGND_10: "power_in", DGND: "power_in", DVDD: "power_in", NC_13: "no_connect", NC_14: "no_connect", D0: "output", D1: "output", D2: "output", D3: "output", D4: "output", D5: "output", D6: "output", D7: "output", "OF/UF": "output", CLK: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC1406IGN extends Component.withPins({
  "OGND": "1",
  "OVDD": "2",
  "~{SHDN}": "3",
  "VBIAS": "4",
  "VREF": "5",
  "AGND_6": "6",
  "AIN+": "7",
  "AIN-": "8",
  "AVDD": "9",
  "AGND_10": "10",
  "DGND": "11",
  "DVDD": "12",
  "NC_13": "13",
  "NC_14": "14",
  "D0": "15",
  "D1": "16",
  "D2": "17",
  "D3": "18",
  "D4": "19",
  "D5": "20",
  "D6": "21",
  "D7": "22",
  "OF/UF": "23",
  "CLK": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OGND: "power_in", OVDD: "power_in", "~{SHDN}": "input", VBIAS: "input", VREF: "input", AGND_6: "power_in", "AIN+": "input", "AIN-": "input", AVDD: "power_in", AGND_10: "power_in", DGND: "power_in", DVDD: "power_in", NC_13: "no_connect", NC_14: "no_connect", D0: "output", D1: "output", D2: "output", D3: "output", D4: "output", D5: "output", D6: "output", D7: "output", "OF/UF": "output", CLK: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC1594CS extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "ADCIN": "5",
  "VREF": "6",
  "COM": "7",
  "GND": "8",
  "~{CSADC}": "9",
  "DOUT": "10",
  "VCC_11": "11",
  "CLK": "12",
  "~{CSMUX}": "13",
  "DIN": "14",
  "MUXOUT": "15",
  "VCC_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", ADCIN: "input", VREF: "input", COM: "input", GND: "power_in", "~{CSADC}": "input", DOUT: "output", VCC_11: "power_in", CLK: "input", "~{CSMUX}": "input", DIN: "input", MUXOUT: "output", VCC_16: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC1594IS extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "ADCIN": "5",
  "VREF": "6",
  "COM": "7",
  "GND": "8",
  "~{CSADC}": "9",
  "DOUT": "10",
  "VCC_11": "11",
  "CLK": "12",
  "~{CSMUX}": "13",
  "DIN": "14",
  "MUXOUT": "15",
  "VCC_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", ADCIN: "input", VREF: "input", COM: "input", GND: "power_in", "~{CSADC}": "input", DOUT: "output", VCC_11: "power_in", CLK: "input", "~{CSMUX}": "input", DIN: "input", MUXOUT: "output", VCC_16: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC1598CG extends Component.withPins({
  "CH5": "1",
  "CH6": "2",
  "CH7": "3",
  "GND_4": "4",
  "CLK_5": "5",
  "~{CSMUX}": "6",
  "DIN": "7",
  "COM": "8",
  "GND_9": "9",
  "~{CSADC}": "10",
  "DOUT": "11",
  "NC_12": "12",
  "NC_13": "13",
  "CLK_14": "14",
  "VCC_15": "15",
  "VREF": "16",
  "ADCIN": "17",
  "MUXOUT": "18",
  "VCC_19": "19",
  "CH0": "20",
  "CH1": "21",
  "CH2": "22",
  "CH3": "23",
  "CH4": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH5: "input", CH6: "input", CH7: "input", GND_4: "power_in", CLK_5: "input", "~{CSMUX}": "input", DIN: "input", COM: "input", GND_9: "power_in", "~{CSADC}": "input", DOUT: "output", NC_12: "no_connect", NC_13: "no_connect", CLK_14: "input", VCC_15: "power_in", VREF: "input", ADCIN: "input", MUXOUT: "output", VCC_19: "power_in", CH0: "input", CH1: "input", CH2: "input", CH3: "input", CH4: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC1598IG extends Component.withPins({
  "CH5": "1",
  "CH6": "2",
  "CH7": "3",
  "GND_4": "4",
  "CLK_5": "5",
  "~{CSMUX}": "6",
  "DIN": "7",
  "COM": "8",
  "GND_9": "9",
  "~{CSADC}": "10",
  "DOUT": "11",
  "NC_12": "12",
  "NC_13": "13",
  "CLK_14": "14",
  "VCC_15": "15",
  "VREF": "16",
  "ADCIN": "17",
  "MUXOUT": "18",
  "VCC_19": "19",
  "CH0": "20",
  "CH1": "21",
  "CH2": "22",
  "CH3": "23",
  "CH4": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH5: "input", CH6: "input", CH7: "input", GND_4: "power_in", CLK_5: "input", "~{CSMUX}": "input", DIN: "input", COM: "input", GND_9: "power_in", "~{CSADC}": "input", DOUT: "output", NC_12: "no_connect", NC_13: "no_connect", CLK_14: "input", VCC_15: "power_in", VREF: "input", ADCIN: "input", MUXOUT: "output", VCC_19: "power_in", CH0: "input", CH1: "input", CH2: "input", CH3: "input", CH4: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC1742 extends Component.withPins({
  "SENSE": "1",
  "VCM": "2",
  "GND_3": "3",
  "AIN+": "4",
  "AIN-": "5",
  "GND_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "GND_9": "9",
  "REFLB": "10",
  "REFHA": "11",
  "GND_12": "12",
  "GND_13": "13",
  "REFLA": "14",
  "REFHB": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "GND_19": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "~{MSBINV}": "22",
  "ENC": "23",
  "~{ENC}": "24",
  "~{OE}": "25",
  "CLKOUT": "26",
  "OGND_27": "27",
  "D0": "28",
  "D1": "29",
  "D2": "30",
  "D3": "31",
  "OVDD_32": "32",
  "D4": "33",
  "D5": "34",
  "D6": "35",
  "GND_36": "36",
  "GND_37": "37",
  "OGND_38": "38",
  "D7": "39",
  "D8": "40",
  "D9": "41",
  "D10": "42",
  "OVDD_43": "43",
  "D11": "44",
  "D12": "45",
  "D13": "46",
  "OGND_47": "47",
  "OF": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SENSE: "input", VCM: "output", GND_3: "power_in", "AIN+": "input", "AIN-": "input", GND_6: "passive", VDD_7: "power_in", VDD_8: "passive", GND_9: "passive", REFLB: "passive", REFHA: "passive", GND_12: "passive", GND_13: "passive", REFLA: "passive", REFHB: "passive", GND_16: "passive", VDD_17: "passive", VDD_18: "passive", GND_19: "passive", VDD_20: "passive", GND_21: "passive", "~{MSBINV}": "input", ENC: "input", "~{ENC}": "input", "~{OE}": "input", CLKOUT: "output", OGND_27: "passive", D0: "output", D1: "output", D2: "output", D3: "output", OVDD_32: "power_in", D4: "output", D5: "output", D6: "output", GND_36: "passive", GND_37: "passive", OGND_38: "passive", D7: "output", D8: "output", D9: "output", D10: "output", OVDD_43: "passive", D11: "output", D12: "output", D13: "output", OGND_47: "power_in", OF: "output", ...opts.pinTypes } });
  }
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
 */
export class LTC1744 extends Component.withPins({
  "SENSE": "1",
  "VCM": "2",
  "GND_3": "3",
  "AIN+": "4",
  "AIN-": "5",
  "GND_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "GND_9": "9",
  "REFLB": "10",
  "REFHA": "11",
  "GND_12": "12",
  "GND_13": "13",
  "REFLA": "14",
  "REFHB": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "GND_19": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "~{MSBINV}": "22",
  "ENC": "23",
  "~{ENC}": "24",
  "~{OE}": "25",
  "CLKOUT": "26",
  "OGND_27": "27",
  "D0": "28",
  "D1": "29",
  "D2": "30",
  "D3": "31",
  "OVDD_32": "32",
  "D4": "33",
  "D5": "34",
  "D6": "35",
  "GND_36": "36",
  "GND_37": "37",
  "OGND_38": "38",
  "D7": "39",
  "D8": "40",
  "D9": "41",
  "D10": "42",
  "OVDD_43": "43",
  "D11": "44",
  "D12": "45",
  "D13": "46",
  "OGND_47": "47",
  "OF": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SENSE: "input", VCM: "output", GND_3: "power_in", "AIN+": "input", "AIN-": "input", GND_6: "passive", VDD_7: "power_in", VDD_8: "passive", GND_9: "passive", REFLB: "passive", REFHA: "passive", GND_12: "passive", GND_13: "passive", REFLA: "passive", REFHB: "passive", GND_16: "passive", VDD_17: "passive", VDD_18: "passive", GND_19: "passive", VDD_20: "passive", GND_21: "passive", "~{MSBINV}": "input", ENC: "input", "~{ENC}": "input", "~{OE}": "input", CLKOUT: "output", OGND_27: "passive", D0: "output", D1: "output", D2: "output", D3: "output", OVDD_32: "power_in", D4: "output", D5: "output", D6: "output", GND_36: "passive", GND_37: "passive", OGND_38: "passive", D7: "output", D8: "output", D9: "output", D10: "output", OVDD_43: "passive", D11: "output", D12: "output", D13: "output", OGND_47: "power_in", OF: "output", ...opts.pinTypes } });
  }
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
 */
export class LTC1746 extends Component.withPins({
  "SENSE": "1",
  "VCM": "2",
  "GND_3": "3",
  "AIN+": "4",
  "AIN-": "5",
  "GND_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "GND_9": "9",
  "REFLB": "10",
  "REFHA": "11",
  "GND_12": "12",
  "GND_13": "13",
  "REFLA": "14",
  "REFHB": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "GND_19": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "~{MSBINV}": "22",
  "ENC": "23",
  "~{ENC}": "24",
  "~{OE}": "25",
  "CLKOUT": "26",
  "OGND_27": "27",
  "D0": "28",
  "D1": "29",
  "D2": "30",
  "D3": "31",
  "OVDD_32": "32",
  "D4": "33",
  "D5": "34",
  "D6": "35",
  "GND_36": "36",
  "GND_37": "37",
  "OGND_38": "38",
  "D7": "39",
  "D8": "40",
  "D9": "41",
  "D10": "42",
  "OVDD_43": "43",
  "D11": "44",
  "D12": "45",
  "D13": "46",
  "OGND_47": "47",
  "OF": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SENSE: "input", VCM: "output", GND_3: "power_in", "AIN+": "input", "AIN-": "input", GND_6: "passive", VDD_7: "power_in", VDD_8: "passive", GND_9: "passive", REFLB: "passive", REFHA: "passive", GND_12: "passive", GND_13: "passive", REFLA: "passive", REFHB: "passive", GND_16: "passive", VDD_17: "passive", VDD_18: "passive", GND_19: "passive", VDD_20: "passive", GND_21: "passive", "~{MSBINV}": "input", ENC: "input", "~{ENC}": "input", "~{OE}": "input", CLKOUT: "output", OGND_27: "passive", D0: "output", D1: "output", D2: "output", D3: "output", OVDD_32: "power_in", D4: "output", D5: "output", D6: "output", GND_36: "passive", GND_37: "passive", OGND_38: "passive", D7: "output", D8: "output", D9: "output", D10: "output", OVDD_43: "passive", D11: "output", D12: "output", D13: "output", OGND_47: "power_in", OF: "output", ...opts.pinTypes } });
  }
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
 */
export class LTC1748 extends Component.withPins({
  "SENSE": "1",
  "VCM": "2",
  "GND_3": "3",
  "AIN+": "4",
  "AIN-": "5",
  "GND_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "GND_9": "9",
  "REFLB": "10",
  "REFHA": "11",
  "GND_12": "12",
  "GND_13": "13",
  "REFLA": "14",
  "REFHB": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "GND_19": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "~{MSBINV}": "22",
  "ENC": "23",
  "~{ENC}": "24",
  "~{OE}": "25",
  "CLKOUT": "26",
  "OGND_27": "27",
  "D0": "28",
  "D1": "29",
  "D2": "30",
  "D3": "31",
  "OVDD_32": "32",
  "D4": "33",
  "D5": "34",
  "D6": "35",
  "GND_36": "36",
  "GND_37": "37",
  "OGND_38": "38",
  "D7": "39",
  "D8": "40",
  "D9": "41",
  "D10": "42",
  "OVDD_43": "43",
  "D11": "44",
  "D12": "45",
  "D13": "46",
  "OGND_47": "47",
  "OF": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SENSE: "input", VCM: "output", GND_3: "power_in", "AIN+": "input", "AIN-": "input", GND_6: "passive", VDD_7: "power_in", VDD_8: "passive", GND_9: "passive", REFLB: "passive", REFHA: "passive", GND_12: "passive", GND_13: "passive", REFLA: "passive", REFHB: "passive", GND_16: "passive", VDD_17: "passive", VDD_18: "passive", GND_19: "passive", VDD_20: "passive", GND_21: "passive", "~{MSBINV}": "input", ENC: "input", "~{ENC}": "input", "~{OE}": "input", CLKOUT: "output", OGND_27: "passive", D0: "output", D1: "output", D2: "output", D3: "output", OVDD_32: "power_in", D4: "output", D5: "output", D6: "output", GND_36: "passive", GND_37: "passive", OGND_38: "passive", D7: "output", D8: "output", D9: "output", D10: "output", OVDD_43: "passive", D11: "output", D12: "output", D13: "output", OGND_47: "power_in", OF: "output", ...opts.pinTypes } });
  }
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
 */
export class LTC1864L extends Component.withPins({
  "V_{REF}": "1",
  "IN^{+}": "2",
  "IN^{-}": "3",
  "GND": "4",
  "CONV": "5",
  "SDO": "6",
  "SCK": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{REF}": "input", "IN^{+}": "input", "IN^{-}": "input", GND: "power_in", CONV: "input", SDO: "output", SCK: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC1864 extends Component.withPins({
  "V_{REF}": "1",
  "IN^{+}": "2",
  "IN^{-}": "3",
  "GND": "4",
  "CONV": "5",
  "SDO": "6",
  "SCK": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{REF}": "input", "IN^{+}": "input", "IN^{-}": "input", GND: "power_in", CONV: "input", SDO: "output", SCK: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC1865L_MS extends Component.withPins({
  "CONV": "1",
  "CH0": "2",
  "CH1": "3",
  "AGND": "4",
  "DGND": "5",
  "SDI": "6",
  "SDO": "7",
  "SCK": "8",
  "V_{CC}": "9",
  "V_{REF}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CONV: "input", CH0: "input", CH1: "input", AGND: "power_in", DGND: "power_in", SDI: "input", SDO: "output", SCK: "input", "V_{CC}": "power_in", "V_{REF}": "input", ...opts.pinTypes } });
  }
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
 */
export class LTC1865_MS extends Component.withPins({
  "CONV": "1",
  "CH0": "2",
  "CH1": "3",
  "AGND": "4",
  "DGND": "5",
  "SDI": "6",
  "SDO": "7",
  "SCK": "8",
  "V_{CC}": "9",
  "V_{REF}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CONV: "input", CH0: "input", CH1: "input", AGND: "power_in", DGND: "power_in", SDI: "input", SDO: "output", SCK: "input", "V_{CC}": "power_in", "V_{REF}": "input", ...opts.pinTypes } });
  }
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
 */
export class LTC1865L_S8 extends Component.withPins({
  "CONV": "1",
  "CH0": "2",
  "CH1": "3",
  "GND": "4",
  "SDI": "5",
  "SDO": "6",
  "SCK": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CONV: "input", CH0: "input", CH1: "input", GND: "power_in", SDI: "input", SDO: "output", SCK: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC1865_S8 extends Component.withPins({
  "CONV": "1",
  "CH0": "2",
  "CH1": "3",
  "GND": "4",
  "SDI": "5",
  "SDO": "6",
  "SCK": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CONV: "input", CH0: "input", CH1: "input", GND: "power_in", SDI: "input", SDO: "output", SCK: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC2282xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2284xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2290xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2291xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2292xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2293xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2294xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2295xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2296xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2297xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2298xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2299xUP extends Component.withPins({
  "AINA+": "1",
  "AINA-": "2",
  "REFHA_3": "3",
  "REFHA_4": "4",
  "REFLA_5": "5",
  "REFLA_6": "6",
  "VDD_7": "7",
  "CLKA": "8",
  "CLKB": "9",
  "VDD_10": "10",
  "REFLB_11": "11",
  "REFLB_12": "12",
  "REFHB_13": "13",
  "REFHB_14": "14",
  "AINB-": "15",
  "AINB+": "16",
  "GND_17": "17",
  "VDD_18": "18",
  "SENSEB": "19",
  "VCMB": "20",
  "MUX": "21",
  "SHDNB": "22",
  "~{OEB}": "23",
  "NC_24": "24",
  "NC_25": "25",
  "DB0": "26",
  "DB1": "27",
  "DB2": "28",
  "DB3": "29",
  "DB4": "30",
  "OGND_31": "31",
  "OVDD_32": "32",
  "DB5": "33",
  "DB6": "34",
  "DB7": "35",
  "DB8": "36",
  "DB9": "37",
  "DB10": "38",
  "DB11": "39",
  "OFB": "40",
  "NC_41": "41",
  "NC_42": "42",
  "DA0": "43",
  "DA1": "44",
  "DA2": "45",
  "DA3": "46",
  "DA4": "47",
  "DA5": "48",
  "OVDD_49": "49",
  "OGND_50": "50",
  "DA6": "51",
  "DA7": "52",
  "DA8": "53",
  "DA9": "54",
  "DA10": "55",
  "DA11": "56",
  "OFA": "57",
  "~{OEA}": "58",
  "SHDNA": "59",
  "MODE": "60",
  "VCMA": "61",
  "SENSEA": "62",
  "VDD_63": "63",
  "GND_64": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AINA+": "input", "AINA-": "input", REFHA_3: "input", REFHA_4: "input", REFLA_5: "input", REFLA_6: "input", VDD_7: "power_in", CLKA: "input", CLKB: "input", VDD_10: "power_in", REFLB_11: "input", REFLB_12: "input", REFHB_13: "input", REFHB_14: "input", "AINB-": "input", "AINB+": "input", GND_17: "power_in", VDD_18: "power_in", SENSEB: "input", VCMB: "passive", MUX: "input", SHDNB: "input", "~{OEB}": "input", NC_24: "no_connect", NC_25: "no_connect", DB0: "output", DB1: "output", DB2: "output", DB3: "output", DB4: "output", OGND_31: "power_in", OVDD_32: "power_in", DB5: "output", DB6: "output", DB7: "output", DB8: "output", DB9: "output", DB10: "output", DB11: "output", OFB: "output", NC_41: "no_connect", NC_42: "no_connect", DA0: "output", DA1: "output", DA2: "output", DA3: "output", DA4: "output", DA5: "output", OVDD_49: "power_in", OGND_50: "passive", DA6: "output", DA7: "output", DA8: "output", DA9: "output", DA10: "output", DA11: "output", OFA: "output", "~{OEA}": "input", SHDNA: "input", MODE: "input", VCMA: "passive", SENSEA: "input", VDD_63: "power_in", GND_64: "passive", GND_65: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2309xF extends Component.withPins({
  "CH5": "16",
  "REFCOMP": "1",
  "GND_2": "2",
  "VDD_3": "3",
  "AD0": "4",
  "AD1": "5",
  "SCL": "6",
  "SDA": "7",
  "GND_8": "8",
  "GND_9": "9",
  "VDD_10": "10",
  "CH0": "11",
  "CH1": "12",
  "CH2": "13",
  "CH3": "14",
  "CH4": "15",
  "CH6": "17",
  "CH7": "18",
  "COM": "19",
  "VREF": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH5: "input", REFCOMP: "input", GND_2: "power_in", VDD_3: "power_in", AD0: "input", AD1: "input", SCL: "input", SDA: "bidirectional", GND_8: "passive", GND_9: "passive", VDD_10: "passive", CH0: "input", CH1: "input", CH2: "input", CH3: "input", CH4: "input", CH6: "input", CH7: "input", COM: "input", VREF: "input", ...opts.pinTypes } });
  }
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
 */
export class LTC2309xUF extends Component.withPins({
  "CH5": "3",
  "CH3": "1",
  "CH4": "2",
  "CH6": "4",
  "CH7": "5",
  "COM": "6",
  "VREF": "7",
  "REFCOMP": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "VDD_12": "12",
  "VDD_13": "13",
  "AD0": "14",
  "AD1": "15",
  "SCL": "16",
  "SDA": "17",
  "GND_18": "18",
  "GND_19": "19",
  "GND_20": "20",
  "VDD_21": "21",
  "CH0": "22",
  "CH1": "23",
  "CH2": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH5: "input", CH3: "input", CH4: "input", CH6: "input", CH7: "input", COM: "input", VREF: "input", REFCOMP: "input", GND_9: "power_in", GND_10: "passive", GND_11: "passive", VDD_12: "power_in", VDD_13: "passive", AD0: "input", AD1: "input", SCL: "input", SDA: "bidirectional", GND_18: "passive", GND_19: "passive", GND_20: "passive", VDD_21: "passive", CH0: "input", CH1: "input", CH2: "input", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2311_16 extends Component.withPins({
  "GND_1": "1",
  "REFIN": "2",
  "REFOUT": "3",
  "V_{DD}": "4",
  "GND_5": "5",
  "A_{IN+}": "6",
  "A_{IN-}": "7",
  "GND_8": "8",
  "~{CNV}": "9",
  "~{CMOS}/LVDS": "10",
  "GND_11": "11",
  "OV_{DD}": "12",
  "SDO^{-}": "13",
  "SDO^{+}": "14",
  "SCK^{-}": "15",
  "SCK^{+}": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", REFIN: "passive", REFOUT: "passive", "V_{DD}": "power_in", GND_5: "passive", "A_{IN+}": "input", "A_{IN-}": "input", GND_8: "passive", "~{CNV}": "input", "~{CMOS}/LVDS": "input", GND_11: "passive", "OV_{DD}": "power_in", "SDO^{-}": "tri_state", "SDO^{+}": "tri_state", "SCK^{-}": "input", "SCK^{+}": "input", GND_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2325_16 extends Component.withPins({
  "A_{IN4-}": "1",
  "A_{IN4+}": "2",
  "GND_3": "3",
  "A_{IN3-}": "4",
  "A_{IN3+}": "5",
  "REFOUT3": "6",
  "GND_7": "7",
  "REF": "8",
  "REFOUT2": "9",
  "A_{IN2-}": "10",
  "A_{IN2+}": "11",
  "GND_12": "12",
  "A_{IN1-}": "13",
  "A_{IN1+}": "14",
  "V_{DD}_15": "15",
  "NC_16": "16",
  "NC_17": "17",
  "GND_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "V_{DD}_21": "21",
  "REFOUT1": "22",
  "~{SDR}/DDR": "23",
  "~{CNV}": "24",
  "~{CMOS}/LVDS": "25",
  "GND_26": "26",
  "SDOA^{+}": "27",
  "SDOA^{-}": "28",
  "SDOB^{+}": "29",
  "SDOB^{-}": "30",
  "OV_{DD}_31": "31",
  "GND_32": "32",
  "CLKOUT^{+}": "33",
  "CLKOUT^{-}": "34",
  "SDOC^{+}": "35",
  "SDOC^{-}": "36",
  "OV_{DD}_37": "37",
  "GND_38": "38",
  "SDOD^{+}": "39",
  "SDOD^{-}": "40",
  "SCK^{+}": "41",
  "SCK^{-}": "42",
  "REFBUFEN": "43",
  "V_{DD}_44": "44",
  "REFOUT4": "45",
  "GND_46": "46",
  "NC_47": "47",
  "NC_48": "48",
  "GND_49": "49",
  "NC_50": "50",
  "NC_51": "51",
  "V_{DD}_52": "52",
  "GND_53": "53",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "A_{IN4-}": "input", "A_{IN4+}": "input", GND_3: "power_in", "A_{IN3-}": "input", "A_{IN3+}": "input", REFOUT3: "passive", GND_7: "passive", REF: "passive", REFOUT2: "passive", "A_{IN2-}": "input", "A_{IN2+}": "input", GND_12: "passive", "A_{IN1-}": "input", "A_{IN1+}": "input", "V_{DD}_15": "power_in", NC_16: "no_connect", NC_17: "no_connect", GND_18: "passive", NC_19: "no_connect", NC_20: "no_connect", "V_{DD}_21": "passive", REFOUT1: "passive", "~{SDR}/DDR": "input", "~{CNV}": "input", "~{CMOS}/LVDS": "input", GND_26: "passive", "SDOA^{+}": "output", "SDOA^{-}": "output", "SDOB^{+}": "output", "SDOB^{-}": "output", "OV_{DD}_31": "power_in", GND_32: "passive", "CLKOUT^{+}": "output", "CLKOUT^{-}": "output", "SDOC^{+}": "output", "SDOC^{-}": "output", "OV_{DD}_37": "passive", GND_38: "passive", "SDOD^{+}": "output", "SDOD^{-}": "output", "SCK^{+}": "input", "SCK^{-}": "input", REFBUFEN: "input", "V_{DD}_44": "passive", REFOUT4: "passive", GND_46: "passive", NC_47: "no_connect", NC_48: "no_connect", GND_49: "passive", NC_50: "no_connect", NC_51: "no_connect", "V_{DD}_52": "passive", GND_53: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2358_16 extends Component.withPins({
  "IN6-": "1",
  "IN6+": "2",
  "IN5-": "3",
  "IN5+": "4",
  "IN4-": "5",
  "IN4+": "6",
  "IN3-": "7",
  "IN3+": "8",
  "IN2-": "9",
  "IN2+": "10",
  "IN1-": "11",
  "IN1+": "12",
  "IN0-": "13",
  "IN0+": "14",
  "GND_15": "15",
  "VCC": "16",
  "VEE_17": "17",
  "GND_18": "18",
  "REFIN": "19",
  "GND_20": "20",
  "REFBUF": "21",
  "PD": "22",
  "LVDS/~{CMOS}": "23",
  "CNV": "24",
  "SDO0": "25",
  "SDI+/SDO1": "26",
  "SDI-/SDO2": "27",
  "SCKI+/SDO3": "28",
  "SCKI-/SCKI": "29",
  "GND_30": "30",
  "OVDD": "31",
  "SCKO+/SCKO": "32",
  "SCKO-/SDO4": "33",
  "SDO+/SDO5": "34",
  "SDO-/SDO6": "35",
  "SDO7": "36",
  "SDI": "37",
  "BUSY": "38",
  "~{CS}": "39",
  "VDDLBYP": "40",
  "GND_41": "41",
  "VDD_42": "42",
  "VDD_43": "43",
  "GND_44": "44",
  "VEE_45": "45",
  "GND_46": "46",
  "IN7-": "47",
  "IN7+": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IN6-": "input", "IN6+": "input", "IN5-": "input", "IN5+": "input", "IN4-": "input", "IN4+": "input", "IN3-": "input", "IN3+": "input", "IN2-": "input", "IN2+": "input", "IN1-": "input", "IN1+": "input", "IN0-": "input", "IN0+": "input", GND_15: "power_in", VCC: "power_in", VEE_17: "power_in", GND_18: "passive", REFIN: "passive", GND_20: "passive", REFBUF: "passive", PD: "input", "LVDS/~{CMOS}": "input", CNV: "input", SDO0: "tri_state", "SDI+/SDO1": "bidirectional", "SDI-/SDO2": "bidirectional", "SCKI+/SDO3": "bidirectional", "SCKI-/SCKI": "input", GND_30: "passive", OVDD: "power_in", "SCKO+/SCKO": "tri_state", "SCKO-/SDO4": "tri_state", "SDO+/SDO5": "tri_state", "SDO-/SDO6": "tri_state", SDO7: "tri_state", SDI: "input", BUSY: "output", "~{CS}": "input", VDDLBYP: "passive", GND_41: "passive", VDD_42: "passive", VDD_43: "power_in", GND_44: "passive", VEE_45: "passive", GND_46: "passive", "IN7-": "input", "IN7+": "input", ...opts.pinTypes } });
  }
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
 */
export class LTC2358_18 extends Component.withPins({
  "IN6-": "1",
  "IN6+": "2",
  "IN5-": "3",
  "IN5+": "4",
  "IN4-": "5",
  "IN4+": "6",
  "IN3-": "7",
  "IN3+": "8",
  "IN2-": "9",
  "IN2+": "10",
  "IN1-": "11",
  "IN1+": "12",
  "IN0-": "13",
  "IN0+": "14",
  "GND_15": "15",
  "VCC": "16",
  "VEE_17": "17",
  "GND_18": "18",
  "REFIN": "19",
  "GND_20": "20",
  "REFBUF": "21",
  "PD": "22",
  "LVDS/~{CMOS}": "23",
  "CNV": "24",
  "SDO0": "25",
  "SDI+/SDO1": "26",
  "SDI-/SDO2": "27",
  "SCKI+/SDO3": "28",
  "SCKI-/SCKI": "29",
  "GND_30": "30",
  "OVDD": "31",
  "SCKO+/SCKO": "32",
  "SCKO-/SDO4": "33",
  "SDO+/SDO5": "34",
  "SDO-/SDO6": "35",
  "SDO7": "36",
  "SDI": "37",
  "BUSY": "38",
  "~{CS}": "39",
  "VDDLBYP": "40",
  "GND_41": "41",
  "VDD_42": "42",
  "VDD_43": "43",
  "GND_44": "44",
  "VEE_45": "45",
  "GND_46": "46",
  "IN7-": "47",
  "IN7+": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IN6-": "input", "IN6+": "input", "IN5-": "input", "IN5+": "input", "IN4-": "input", "IN4+": "input", "IN3-": "input", "IN3+": "input", "IN2-": "input", "IN2+": "input", "IN1-": "input", "IN1+": "input", "IN0-": "input", "IN0+": "input", GND_15: "power_in", VCC: "power_in", VEE_17: "power_in", GND_18: "passive", REFIN: "passive", GND_20: "passive", REFBUF: "passive", PD: "input", "LVDS/~{CMOS}": "input", CNV: "input", SDO0: "tri_state", "SDI+/SDO1": "bidirectional", "SDI-/SDO2": "bidirectional", "SCKI+/SDO3": "bidirectional", "SCKI-/SCKI": "input", GND_30: "passive", OVDD: "power_in", "SCKO+/SCKO": "tri_state", "SCKO-/SDO4": "tri_state", "SDO+/SDO5": "tri_state", "SDO-/SDO6": "tri_state", SDO7: "tri_state", SDI: "input", BUSY: "output", "~{CS}": "input", VDDLBYP: "passive", GND_41: "passive", VDD_42: "passive", VDD_43: "power_in", GND_44: "passive", VEE_45: "passive", GND_46: "passive", "IN7-": "input", "IN7+": "input", ...opts.pinTypes } });
  }
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
 */
export class LTC2451xDDB extends Component.withPins({
  "GND_1": "1",
  "REF-": "2",
  "REF+": "3",
  "VCC": "4",
  "GND_5": "5",
  "IN": "6",
  "SCL": "7",
  "SDA": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "REF-": "power_in", "REF+": "power_in", VCC: "power_in", GND_5: "passive", IN: "input", SCL: "input", SDA: "bidirectional", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2451xTS8 extends Component.withPins({
  "GND_1": "1",
  "REF-": "2",
  "REF+": "3",
  "VCC": "4",
  "GND_5": "5",
  "IN": "6",
  "SCL": "7",
  "SDA": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", "REF-": "power_in", "REF+": "power_in", VCC: "power_in", GND_5: "passive", IN: "input", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LTC2508CDKD_32 extends Component.withPins({
  "~{RDLA}": "1",
  "~{RDLB}": "2",
  "V_{DD}": "3",
  "GND_4": "4",
  "IN+": "5",
  "IN-": "6",
  "GND_7": "7",
  "REF_8": "8",
  "REF_9": "9",
  "REF_10": "10",
  "SEL0": "11",
  "SEL1": "12",
  "MCLK": "13",
  "SYNC": "14",
  "~{DRL}": "15",
  "GND_16": "16",
  "SDOA": "17",
  "SCKA": "18",
  "SCKB": "19",
  "SDOB": "20",
  "BUSY": "21",
  "OV_{DD}": "22",
  "GND_23": "23",
  "GND_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RDLA}": "input", "~{RDLB}": "input", "V_{DD}": "power_in", GND_4: "power_in", "IN+": "input", "IN-": "input", GND_7: "passive", REF_8: "passive", REF_9: "passive", REF_10: "passive", SEL0: "input", SEL1: "input", MCLK: "input", SYNC: "input", "~{DRL}": "output", GND_16: "passive", SDOA: "tri_state", SCKA: "input", SCKB: "input", SDOB: "tri_state", BUSY: "output", "OV_{DD}": "power_in", GND_23: "passive", GND_24: "passive", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC2508IDKD_32 extends Component.withPins({
  "~{RDLA}": "1",
  "~{RDLB}": "2",
  "V_{DD}": "3",
  "GND_4": "4",
  "IN+": "5",
  "IN-": "6",
  "GND_7": "7",
  "REF_8": "8",
  "REF_9": "9",
  "REF_10": "10",
  "SEL0": "11",
  "SEL1": "12",
  "MCLK": "13",
  "SYNC": "14",
  "~{DRL}": "15",
  "GND_16": "16",
  "SDOA": "17",
  "SCKA": "18",
  "SCKB": "19",
  "SDOB": "20",
  "BUSY": "21",
  "OV_{DD}": "22",
  "GND_23": "23",
  "GND_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RDLA}": "input", "~{RDLB}": "input", "V_{DD}": "power_in", GND_4: "power_in", "IN+": "input", "IN-": "input", GND_7: "passive", REF_8: "passive", REF_9: "passive", REF_10: "passive", SEL0: "input", SEL1: "input", MCLK: "input", SYNC: "input", "~{DRL}": "output", GND_16: "passive", SDOA: "tri_state", SCKA: "input", SCKB: "input", SDOB: "tri_state", BUSY: "output", "OV_{DD}": "power_in", GND_23: "passive", GND_24: "passive", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX1112 extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "CH4": "5",
  "CH5": "6",
  "CH6": "7",
  "CH7": "8",
  "COM": "9",
  "~{SHDN}": "10",
  "REFIN": "11",
  "REFOUT": "12",
  "AGND": "13",
  "DGND": "14",
  "DOUT": "15",
  "SSTRB": "16",
  "DIN": "17",
  "~{CS}": "18",
  "SCLK": "19",
  "VDD": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", CH4: "input", CH5: "input", CH6: "input", CH7: "input", COM: "power_in", "~{SHDN}": "input", REFIN: "power_in", REFOUT: "power_out", AGND: "power_in", DGND: "power_in", DOUT: "output", SSTRB: "output", DIN: "input", "~{CS}": "input", SCLK: "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11120xTI extends Component.withPins({
  "AIN3": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "~{CNVST}": "12",
  "REF-": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", GND_2: "passive", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", "~{CNVST}": "input", "REF-": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11121xTI extends Component.withPins({
  "AIN3": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "~{CNVST}": "12",
  "REF-": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", GND_2: "passive", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", "~{CNVST}": "input", "REF-": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11122xTI extends Component.withPins({
  "AIN3": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "~{CNVST}": "12",
  "REF-": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", GND_2: "passive", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", "~{CNVST}": "input", "REF-": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11123xTI extends Component.withPins({
  "AIN3": "1",
  "AIN4": "2",
  "AIN5": "3",
  "AIN6": "4",
  "AIN7": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "~{CNVST}": "12",
  "REF-": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", "~{CNVST}": "input", "REF-": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11124xTI extends Component.withPins({
  "AIN3": "1",
  "AIN4": "2",
  "AIN5": "3",
  "AIN6": "4",
  "AIN7": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "~{CNVST}": "12",
  "REF-": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", "~{CNVST}": "input", "REF-": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11125xTI extends Component.withPins({
  "AIN3": "1",
  "AIN4": "2",
  "AIN5": "3",
  "AIN6": "4",
  "AIN7": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "~{CNVST}": "12",
  "REF-": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", "~{CNVST}": "input", "REF-": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11126xTI extends Component.withPins({
  "AIN3": "1",
  "AIN4": "2",
  "AIN5": "3",
  "AIN6": "4",
  "AIN7": "5",
  "AIN8": "6",
  "AIN9": "7",
  "AIN10": "8",
  "AIN11": "9",
  "AIN12": "10",
  "AIN13": "11",
  "~{CNVST}/AIN14": "12",
  "REF-/AIN15": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", AIN8: "input", AIN9: "input", AIN10: "input", AIN11: "input", AIN12: "input", AIN13: "input", "~{CNVST}/AIN14": "input", "REF-/AIN15": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11127xTI extends Component.withPins({
  "AIN3": "1",
  "AIN4": "2",
  "AIN5": "3",
  "AIN6": "4",
  "AIN7": "5",
  "AIN8": "6",
  "AIN9": "7",
  "AIN10": "8",
  "AIN11": "9",
  "AIN12": "10",
  "AIN13": "11",
  "~{CNVST}/AIN14": "12",
  "REF-/AIN15": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", AIN8: "input", AIN9: "input", AIN10: "input", AIN11: "input", AIN12: "input", AIN13: "input", "~{CNVST}/AIN14": "input", "REF-/AIN15": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11128xTI extends Component.withPins({
  "AIN3": "1",
  "AIN4": "2",
  "AIN5": "3",
  "AIN6": "4",
  "AIN7": "5",
  "AIN8": "6",
  "AIN9": "7",
  "AIN10": "8",
  "AIN11": "9",
  "AIN12": "10",
  "AIN13": "11",
  "~{CNVST}/AIN14": "12",
  "REF-/AIN15": "13",
  "GND_14": "14",
  "REF+": "15",
  "GND_16": "16",
  "VDD_17": "17",
  "VDD_18": "18",
  "SCLK": "19",
  "~{CS}": "20",
  "DIN": "21",
  "DGND": "22",
  "OVDD": "23",
  "DOUT": "24",
  "~{EOC}": "25",
  "AIN0": "26",
  "AIN1": "27",
  "AIN2": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", AIN8: "input", AIN9: "input", AIN10: "input", AIN11: "input", AIN12: "input", AIN13: "input", "~{CNVST}/AIN14": "input", "REF-/AIN15": "input", GND_14: "power_in", "REF+": "input", GND_16: "passive", VDD_17: "power_in", VDD_18: "passive", SCLK: "input", "~{CS}": "input", DIN: "input", DGND: "power_in", OVDD: "power_in", DOUT: "output", "~{EOC}": "output", AIN0: "input", AIN1: "input", AIN2: "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX1113 extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "COM": "5",
  "~{SHDN}": "6",
  "REFIN": "7",
  "REFOUT": "8",
  "AGND": "9",
  "DGND": "10",
  "DOUT": "11",
  "SSTRB": "12",
  "DIN": "13",
  "~{CS}": "14",
  "SCLK": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", COM: "power_in", "~{SHDN}": "input", REFIN: "power_in", REFOUT: "power_out", AGND: "power_in", DGND: "power_in", DOUT: "output", SSTRB: "output", DIN: "input", "~{CS}": "input", SCLK: "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11612 extends Component.withPins({
  "AIN0": "1",
  "AIN1": "2",
  "AIN2": "3",
  "AIN3/REF": "4",
  "SCL": "5",
  "SDA": "6",
  "GND": "7",
  "Vdd": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN0: "input", AIN1: "input", AIN2: "input", "AIN3/REF": "input", SCL: "input", SDA: "bidirectional", GND: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11613 extends Component.withPins({
  "AIN0": "1",
  "AIN1": "2",
  "AIN2": "3",
  "AIN3/REF": "4",
  "SCL": "5",
  "SDA": "6",
  "GND": "7",
  "Vdd": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN0: "input", AIN1: "input", AIN2: "input", "AIN3/REF": "input", SCL: "input", SDA: "bidirectional", GND: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11614 extends Component.withPins({
  "REF": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "AIN0": "5",
  "AIN1": "6",
  "AIN2": "7",
  "AIN3": "8",
  "AIN4": "9",
  "AIN5": "10",
  "AIN6": "11",
  "AIN7": "12",
  "SCL": "13",
  "SDA": "14",
  "GND": "15",
  "Vdd": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "input", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", AIN0: "input", AIN1: "input", AIN2: "input", AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", SCL: "input", SDA: "bidirectional", GND: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11615 extends Component.withPins({
  "REF": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "AIN0": "5",
  "AIN1": "6",
  "AIN2": "7",
  "AIN3": "8",
  "AIN4": "9",
  "AIN5": "10",
  "AIN6": "11",
  "AIN7": "12",
  "SCL": "13",
  "SDA": "14",
  "GND": "15",
  "Vdd": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REF: "input", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", AIN0: "input", AIN1: "input", AIN2: "input", AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", SCL: "input", SDA: "bidirectional", GND: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11616 extends Component.withPins({
  "AIN11": "1",
  "AIN10": "2",
  "AIN9": "3",
  "AIN8": "4",
  "AIN0": "5",
  "AIN1": "6",
  "AIN2": "7",
  "AIN3": "8",
  "AIN4": "9",
  "AIN5": "10",
  "AIN6": "11",
  "AIN7": "12",
  "SCL": "13",
  "SDA": "14",
  "GND": "15",
  "Vdd": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN11: "input", AIN10: "input", AIN9: "input", AIN8: "input", AIN0: "input", AIN1: "input", AIN2: "input", AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", SCL: "input", SDA: "bidirectional", GND: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX11617 extends Component.withPins({
  "AIN11": "1",
  "AIN10": "2",
  "AIN9": "3",
  "AIN8": "4",
  "AIN0": "5",
  "AIN1": "6",
  "AIN2": "7",
  "AIN3": "8",
  "AIN4": "9",
  "AIN5": "10",
  "AIN6": "11",
  "AIN7": "12",
  "SCL": "13",
  "SDA": "14",
  "GND": "15",
  "Vdd": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AIN11: "input", AIN10: "input", AIN9: "input", AIN8: "input", AIN0: "input", AIN1: "input", AIN2: "input", AIN3: "input", AIN4: "input", AIN5: "input", AIN6: "input", AIN7: "input", SCL: "input", SDA: "bidirectional", GND: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX1248 extends Component.withPins({
  "VDD": "1",
  "CH0": "2",
  "CH1": "3",
  "CH2": "4",
  "CH3": "5",
  "COM": "6",
  "~{SHDN}": "7",
  "VREF": "8",
  "REFADJ": "9",
  "AGND": "10",
  "DGND": "11",
  "DOUT": "12",
  "SSTRB": "13",
  "DIN": "14",
  "~{CS}": "15",
  "SCLK": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", CH0: "input", CH1: "input", CH2: "input", CH3: "input", COM: "power_in", "~{SHDN}": "tri_state", VREF: "power_in", REFADJ: "input", AGND: "power_in", DGND: "power_in", DOUT: "output", SSTRB: "output", DIN: "input", "~{CS}": "input", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX1249 extends Component.withPins({
  "VDD": "1",
  "CH0": "2",
  "CH1": "3",
  "CH2": "4",
  "CH3": "5",
  "COM": "6",
  "~{SHDN}": "7",
  "VREF": "8",
  "REFADJ": "9",
  "AGND": "10",
  "DGND": "11",
  "DOUT": "12",
  "SSTRB": "13",
  "DIN": "14",
  "~{CS}": "15",
  "SCLK": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", CH0: "input", CH1: "input", CH2: "input", CH3: "input", COM: "power_in", "~{SHDN}": "tri_state", VREF: "power_in", REFADJ: "input", AGND: "power_in", DGND: "power_in", DOUT: "output", SSTRB: "output", DIN: "input", "~{CS}": "input", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class MAX1274 extends Component.withPins({
  "AIN-": "1",
  "REF": "2",
  "RGND": "3",
  "VDD": "4",
  "NC_5": "5",
  "GND": "6",
  "VL": "7",
  "DOUT": "8",
  "CNVST": "9",
  "SCLK": "10",
  "NC_11": "11",
  "AIN+": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AIN-": "input", REF: "input", RGND: "power_in", VDD: "power_in", NC_5: "no_connect", GND: "power_in", VL: "power_in", DOUT: "output", CNVST: "input", SCLK: "input", NC_11: "no_connect", "AIN+": "input", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX1275 extends Component.withPins({
  "AIN-": "1",
  "REF": "2",
  "RGND": "3",
  "VDD": "4",
  "NC_5": "5",
  "GND": "6",
  "VL": "7",
  "DOUT": "8",
  "CNVST": "9",
  "SCLK": "10",
  "NC_11": "11",
  "AIN+": "12",
  "PAD": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AIN-": "input", REF: "input", RGND: "power_in", VDD: "power_in", NC_5: "no_connect", GND: "power_in", VL: "power_in", DOUT: "output", CNVST: "input", SCLK: "input", NC_11: "no_connect", "AIN+": "input", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3002 extends Component.withPins({
  "~{CS}/SHDN": "1",
  "CH0": "2",
  "CH1": "3",
  "VSS": "4",
  "DIN": "5",
  "DOUT": "6",
  "CLK": "7",
  "VDD/VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}/SHDN": "input", CH0: "passive", CH1: "passive", VSS: "power_in", DIN: "input", DOUT: "output", CLK: "input", "VDD/VREF": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3004 extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "NC_5": "5",
  "NC_6": "6",
  "DGND": "7",
  "~{CS}/SHDN": "8",
  "Din": "9",
  "Dout": "10",
  "CLK": "11",
  "AGND": "12",
  "Vref": "13",
  "Vdd": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", NC_5: "no_connect", NC_6: "no_connect", DGND: "power_in", "~{CS}/SHDN": "input", Din: "input", Dout: "output", CLK: "input", AGND: "power_in", Vref: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3208 extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "CH4": "5",
  "CH5": "6",
  "CH6": "7",
  "CH7": "8",
  "DGND": "9",
  "~{CS}/SHDN": "10",
  "Din": "11",
  "Dout": "12",
  "CLK": "13",
  "AGND": "14",
  "Vref": "15",
  "Vdd": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", CH4: "input", CH5: "input", CH6: "input", CH7: "input", DGND: "power_in", "~{CS}/SHDN": "input", Din: "input", Dout: "output", CLK: "input", AGND: "power_in", Vref: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3008 extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "CH4": "5",
  "CH5": "6",
  "CH6": "7",
  "CH7": "8",
  "DGND": "9",
  "~{CS}/SHDN": "10",
  "Din": "11",
  "Dout": "12",
  "CLK": "13",
  "AGND": "14",
  "Vref": "15",
  "Vdd": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", CH4: "input", CH5: "input", CH6: "input", CH7: "input", DGND: "power_in", "~{CS}/SHDN": "input", Din: "input", Dout: "output", CLK: "input", AGND: "power_in", Vref: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3201 extends Component.withPins({
  "Vref": "1",
  "IN+": "2",
  "IN-": "3",
  "Vss": "4",
  "~{CS}/SHDN": "5",
  "Dout": "6",
  "CLK": "7",
  "Vdd": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vref: "power_in", "IN+": "input", "IN-": "input", Vss: "power_in", "~{CS}/SHDN": "input", Dout: "output", CLK: "input", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3202 extends Component.withPins({
  "~{CS}/SHDN": "1",
  "CH0": "2",
  "CH1": "3",
  "VSS": "4",
  "DIN": "5",
  "DOUT": "6",
  "CLK": "7",
  "VDD/VREF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}/SHDN": "input", CH0: "passive", CH1: "passive", VSS: "power_in", DIN: "input", DOUT: "output", CLK: "input", "VDD/VREF": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3204 extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "NC_5": "5",
  "NC_6": "6",
  "DGND": "7",
  "~{CS}/SHDN": "8",
  "Din": "9",
  "Dout": "10",
  "CLK": "11",
  "AGND": "12",
  "Vref": "13",
  "Vdd": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", NC_5: "no_connect", NC_6: "no_connect", DGND: "power_in", "~{CS}/SHDN": "input", Din: "input", Dout: "output", CLK: "input", AGND: "power_in", Vref: "power_in", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3221 extends Component.withPins({
  "V_{DD}": "1",
  "V_{SS}": "2",
  "A_{IN}": "3",
  "SDA": "4",
  "SCL": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{SS}": "power_in", "A_{IN}": "input", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3301 extends Component.withPins({
  "Vref": "1",
  "IN+": "2",
  "IN-": "3",
  "Vss": "4",
  "~{CS}/SHDN": "5",
  "Dout": "6",
  "CLK": "7",
  "Vdd": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vref: "power_in", "IN+": "input", "IN-": "input", Vss: "power_in", "~{CS}/SHDN": "input", Dout: "output", CLK: "input", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3425Axx_xCH extends Component.withPins({
  "Vin+": "1",
  "V_{SS}": "2",
  "SCL": "3",
  "SDA": "4",
  "V_{DD}": "5",
  "Vin-": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vin+": "passive", "V_{SS}": "power_in", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", "Vin-": "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP3421A0T_ECH extends Component.withPins({
  "Vin+": "1",
  "V_{SS}": "2",
  "SCL": "3",
  "SDA": "4",
  "V_{DD}": "5",
  "Vin-": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vin+": "passive", "V_{SS}": "power_in", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", "Vin-": "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP3422Axx_xSN extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "V_{DD}": "3",
  "SDA": "4",
  "SCL": "5",
  "V_{SS}": "6",
  "CH2+": "7",
  "CH2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", "CH2+": "input", "CH2-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3422Axx_xMS extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "V_{DD}": "3",
  "SDA": "4",
  "SCL": "5",
  "V_{SS}": "6",
  "CH2+": "7",
  "CH2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", "CH2+": "input", "CH2-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3423x_xUN extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "V_{SS}": "3",
  "CH2+": "4",
  "CH2-": "5",
  "V_{DD}": "6",
  "SDA": "7",
  "SCL": "8",
  "A0": "9",
  "A1": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "V_{SS}": "power_in", "CH2+": "input", "CH2-": "input", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", A0: "input", A1: "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3424x_xSL extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "CH2+": "3",
  "CH2-": "4",
  "V_{SS}": "5",
  "V_{DD}": "6",
  "SDA": "7",
  "SCL": "8",
  "A0": "9",
  "A1": "10",
  "CH3+": "11",
  "CH3-": "12",
  "CH4+": "13",
  "CH4-": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "CH2+": "input", "CH2-": "input", "V_{SS}": "power_in", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", A0: "input", A1: "input", "CH3+": "input", "CH3-": "input", "CH4+": "input", "CH4-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3424x_xST extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "CH2+": "3",
  "CH2-": "4",
  "V_{SS}": "5",
  "V_{DD}": "6",
  "SDA": "7",
  "SCL": "8",
  "A0": "9",
  "A1": "10",
  "CH3+": "11",
  "CH3-": "12",
  "CH4+": "13",
  "CH4-": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "CH2+": "input", "CH2-": "input", "V_{SS}": "power_in", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", A0: "input", A1: "input", "CH3+": "input", "CH3-": "input", "CH4+": "input", "CH4-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3426Axx_xMC extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "V_{DD}": "3",
  "SDA": "4",
  "SCL": "5",
  "V_{SS}_6": "6",
  "CH2+": "7",
  "CH2-": "8",
  "V_{SS}_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", "V_{SS}_6": "power_in", "CH2+": "input", "CH2-": "input", "V_{SS}_9": "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP3426Axx_xMS extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "V_{DD}": "3",
  "SDA": "4",
  "SCL": "5",
  "V_{SS}": "6",
  "CH2+": "7",
  "CH2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", "CH2+": "input", "CH2-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3426Axx_xSN extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "V_{DD}": "3",
  "SDA": "4",
  "SCL": "5",
  "V_{SS}": "6",
  "CH2+": "7",
  "CH2-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", "V_{SS}": "power_in", "CH2+": "input", "CH2-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3427x_xMF extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "V_{SS}_3": "3",
  "CH2+": "4",
  "CH2-": "5",
  "V_{DD}": "6",
  "SDA": "7",
  "SCL": "8",
  "Adr0": "9",
  "Adr1": "10",
  "V_{SS}_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "V_{SS}_3": "power_in", "CH2+": "input", "CH2-": "input", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", Adr0: "input", Adr1: "input", "V_{SS}_11": "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP3427x_xUN extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "V_{SS}": "3",
  "CH2+": "4",
  "CH2-": "5",
  "V_{DD}": "6",
  "SDA": "7",
  "SCL": "8",
  "Adr0": "9",
  "Adr1": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "V_{SS}": "power_in", "CH2+": "input", "CH2-": "input", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", Adr0: "input", Adr1: "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3428x_xSL extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "CH2+": "3",
  "CH2-": "4",
  "V_{SS}": "5",
  "V_{DD}": "6",
  "SDA": "7",
  "SCL": "8",
  "Adr0": "9",
  "Adr1": "10",
  "CH3+": "11",
  "CH3-": "12",
  "CH4+": "13",
  "CH4-": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "CH2+": "input", "CH2-": "input", "V_{SS}": "power_in", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", Adr0: "input", Adr1: "input", "CH3+": "input", "CH3-": "input", "CH4+": "input", "CH4-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3428x_xST extends Component.withPins({
  "CH1+": "1",
  "CH1-": "2",
  "CH2+": "3",
  "CH2-": "4",
  "V_{SS}": "5",
  "V_{DD}": "6",
  "SDA": "7",
  "SCL": "8",
  "Adr0": "9",
  "Adr1": "10",
  "CH3+": "11",
  "CH3-": "12",
  "CH4+": "13",
  "CH4-": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CH1+": "input", "CH1-": "input", "CH2+": "input", "CH2-": "input", "V_{SS}": "power_in", "V_{DD}": "power_in", SDA: "bidirectional", SCL: "input", Adr0: "input", Adr1: "input", "CH3+": "input", "CH3-": "input", "CH4+": "input", "CH4-": "input", ...opts.pinTypes } });
  }
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
 */
export class MCP3550_50_EMS extends Component.withPins({
  "Vref": "1",
  "Vin+": "2",
  "Vin-": "3",
  "Vss": "4",
  "SCK": "5",
  "SDO/~{RDY}": "6",
  "~{CS}": "7",
  "Vdd": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vref: "input", "Vin+": "passive", "Vin-": "passive", Vss: "power_in", SCK: "input", "SDO/~{RDY}": "output", "~{CS}": "input", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3550_60_ESN extends Component.withPins({
  "Vref": "1",
  "Vin+": "2",
  "Vin-": "3",
  "VSS": "4",
  "SCK": "5",
  "SDO/~{RDY}": "6",
  "~{CS}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vref: "input", "Vin+": "passive", "Vin-": "passive", VSS: "power_in", SCK: "input", "SDO/~{RDY}": "output", "~{CS}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3551_EMS extends Component.withPins({
  "Vref": "1",
  "Vin+": "2",
  "Vin-": "3",
  "Vss": "4",
  "SCK": "5",
  "SDO/~{RDY}": "6",
  "~{CS}": "7",
  "Vdd": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vref: "input", "Vin+": "passive", "Vin-": "passive", Vss: "power_in", SCK: "input", "SDO/~{RDY}": "output", "~{CS}": "input", Vdd: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP3553_ESN extends Component.withPins({
  "Vref": "1",
  "Vin+": "2",
  "Vin-": "3",
  "VSS": "4",
  "SCK": "5",
  "SDO/~{RDY}": "6",
  "~{CS}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Vref: "input", "Vin+": "passive", "Vin-": "passive", VSS: "power_in", SCK: "input", "SDO/~{RDY}": "output", "~{CS}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_ADC:MCP3553-ESN";
  override referencePrefix = "U";
}
