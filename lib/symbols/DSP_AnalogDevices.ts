// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * SigmaDSP SigmaDSP Digital Audio Processor, 147.456 MHz, 8kword Data RAM, I2C/SPI, LFCSP-72
 *
 * KiCad symbol: `DSP_AnalogDevices:ADAU1450`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*10x10mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1452_1451_1450.pdf
 * Keywords: sigmadsp audio.
 * Default footprint: Package_CSP:LFCSP-72-1EP_10x10mm_P0.5mm_EP5.3x5.3mm.
 */
export class ADAU1450 extends Component.withPins({
  "DGND_1": "1",
  "IOVDD_2": "2",
  "VDRIVE": "3",
  "SPDIFIN": "4",
  "SPDIFOUT": "5",
  "AGND": "6",
  "AVDD": "7",
  "AUXADC0": "8",
  "AUXADC1": "9",
  "AUXADC2": "10",
  "AUXADC3": "11",
  "AUXADC4": "12",
  "AUXADC5": "13",
  "PGND": "14",
  "PVDD": "15",
  "PLLFILT": "16",
  "DGND_17": "17",
  "IOVDD_18": "18",
  "DGND_19": "19",
  "DVDD_20": "20",
  "XTALIN/MCLK": "21",
  "XTALOUT": "22",
  "CLKOUT": "23",
  "~{RESET}": "24",
  "DGND_25": "25",
  "SS_M/MP0": "26",
  "MOSI_M/MP1": "27",
  "SCL_M/SCLK_M/MP2": "28",
  "SDA_M/MISO_M/MP3": "29",
  "MISO/SDA": "30",
  "SCLK/SCL": "31",
  "MOSI/ADDR1": "32",
  "SS/ADDR0": "33",
  "SELFBOOT": "34",
  "DVDD_35": "35",
  "DGND_36": "36",
  "DGND_37": "37",
  "IOVDD_38": "38",
  "LRCLK_OUT0/MP4": "39",
  "BCLK_OUT0": "40",
  "SDATA_OUT0": "41",
  "LRCLK_OUT1/MP5": "42",
  "BCLK_OUT1": "43",
  "SDATA_OUT1": "44",
  "MP6": "45",
  "MP7": "46",
  "LRCLK_OUT2/MP8": "47",
  "BCLK_OUT2": "48",
  "SDATA_OUT2": "49",
  "LRCLK_OUT3/MP9": "50",
  "BCLK_OUT3": "51",
  "SDATA_OUT3": "52",
  "DVDD_53": "53",
  "DGND_54": "54",
  "DGND_55": "55",
  "IOVDD_56": "56",
  "BCLK_IN0": "57",
  "LRCLK_IN0/MP10": "58",
  "SDATA_IN0": "59",
  "BCLK_IN1": "60",
  "LRCLK_IN1/MP11": "61",
  "SDATA_IN1": "62",
  "THD_M": "63",
  "THD_P": "64",
  "BCLK_IN2": "65",
  "LRCLK_IN2/MP12": "66",
  "SDATA_IN2": "67",
  "BCLK_IN3": "68",
  "LRCLK_IN3/MP13": "69",
  "SDATA_IN3": "70",
  "DVDD_71": "71",
  "DGND_72": "72",
  "EP": "73",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DGND_1: "power_in", IOVDD_2: "power_in", VDRIVE: "output", SPDIFIN: "input", SPDIFOUT: "output", AGND: "power_in", AVDD: "power_in", AUXADC0: "input", AUXADC1: "input", AUXADC2: "input", AUXADC3: "input", AUXADC4: "input", AUXADC5: "input", PGND: "power_in", PVDD: "power_in", PLLFILT: "passive", DGND_17: "passive", IOVDD_18: "passive", DGND_19: "passive", DVDD_20: "power_in", "XTALIN/MCLK": "input", XTALOUT: "output", CLKOUT: "output", "~{RESET}": "input", DGND_25: "passive", "SS_M/MP0": "bidirectional", "MOSI_M/MP1": "bidirectional", "SCL_M/SCLK_M/MP2": "bidirectional", "SDA_M/MISO_M/MP3": "bidirectional", "MISO/SDA": "bidirectional", "SCLK/SCL": "input", "MOSI/ADDR1": "input", "SS/ADDR0": "input", SELFBOOT: "input", DVDD_35: "passive", DGND_36: "passive", DGND_37: "passive", IOVDD_38: "passive", "LRCLK_OUT0/MP4": "bidirectional", BCLK_OUT0: "bidirectional", SDATA_OUT0: "output", "LRCLK_OUT1/MP5": "bidirectional", BCLK_OUT1: "bidirectional", SDATA_OUT1: "output", MP6: "bidirectional", MP7: "bidirectional", "LRCLK_OUT2/MP8": "bidirectional", BCLK_OUT2: "bidirectional", SDATA_OUT2: "output", "LRCLK_OUT3/MP9": "bidirectional", BCLK_OUT3: "bidirectional", SDATA_OUT3: "output", DVDD_53: "passive", DGND_54: "passive", DGND_55: "passive", IOVDD_56: "passive", BCLK_IN0: "bidirectional", "LRCLK_IN0/MP10": "bidirectional", SDATA_IN0: "input", BCLK_IN1: "bidirectional", "LRCLK_IN1/MP11": "bidirectional", SDATA_IN1: "input", THD_M: "passive", THD_P: "passive", BCLK_IN2: "bidirectional", "LRCLK_IN2/MP12": "bidirectional", SDATA_IN2: "input", BCLK_IN3: "bidirectional", "LRCLK_IN3/MP13": "bidirectional", SDATA_IN3: "input", DVDD_71: "passive", DGND_72: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "DSP_AnalogDevices:ADAU1450";
  override referencePrefix = "U";
}

/**
 * SigmaDSP SigmaDSP Digital Audio Processor, 294.912 MHz, 40kword Data RAM, I2C/SPI, S/PDIF I/O, 16-Channel ASRC, LFCSP-72
 *
 * KiCad symbol: `DSP_AnalogDevices:ADAU1451`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*10x10mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1452_1451_1450.pdf
 * Keywords: sigmadsp audio.
 * Default footprint: Package_CSP:LFCSP-72-1EP_10x10mm_P0.5mm_EP5.3x5.3mm.
 */
export class ADAU1451 extends Component.withPins({
  "DGND_1": "1",
  "IOVDD_2": "2",
  "VDRIVE": "3",
  "SPDIFIN": "4",
  "SPDIFOUT": "5",
  "AGND": "6",
  "AVDD": "7",
  "AUXADC0": "8",
  "AUXADC1": "9",
  "AUXADC2": "10",
  "AUXADC3": "11",
  "AUXADC4": "12",
  "AUXADC5": "13",
  "PGND": "14",
  "PVDD": "15",
  "PLLFILT": "16",
  "DGND_17": "17",
  "IOVDD_18": "18",
  "DGND_19": "19",
  "DVDD_20": "20",
  "XTALIN/MCLK": "21",
  "XTALOUT": "22",
  "CLKOUT": "23",
  "~{RESET}": "24",
  "DGND_25": "25",
  "SS_M/MP0": "26",
  "MOSI_M/MP1": "27",
  "SCL_M/SCLK_M/MP2": "28",
  "SDA_M/MISO_M/MP3": "29",
  "MISO/SDA": "30",
  "SCLK/SCL": "31",
  "MOSI/ADDR1": "32",
  "SS/ADDR0": "33",
  "SELFBOOT": "34",
  "DVDD_35": "35",
  "DGND_36": "36",
  "DGND_37": "37",
  "IOVDD_38": "38",
  "LRCLK_OUT0/MP4": "39",
  "BCLK_OUT0": "40",
  "SDATA_OUT0": "41",
  "LRCLK_OUT1/MP5": "42",
  "BCLK_OUT1": "43",
  "SDATA_OUT1": "44",
  "MP6": "45",
  "MP7": "46",
  "LRCLK_OUT2/MP8": "47",
  "BCLK_OUT2": "48",
  "SDATA_OUT2": "49",
  "LRCLK_OUT3/MP9": "50",
  "BCLK_OUT3": "51",
  "SDATA_OUT3": "52",
  "DVDD_53": "53",
  "DGND_54": "54",
  "DGND_55": "55",
  "IOVDD_56": "56",
  "BCLK_IN0": "57",
  "LRCLK_IN0/MP10": "58",
  "SDATA_IN0": "59",
  "BCLK_IN1": "60",
  "LRCLK_IN1/MP11": "61",
  "SDATA_IN1": "62",
  "THD_M": "63",
  "THD_P": "64",
  "BCLK_IN2": "65",
  "LRCLK_IN2/MP12": "66",
  "SDATA_IN2": "67",
  "BCLK_IN3": "68",
  "LRCLK_IN3/MP13": "69",
  "SDATA_IN3": "70",
  "DVDD_71": "71",
  "DGND_72": "72",
  "EP": "73",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DGND_1: "power_in", IOVDD_2: "power_in", VDRIVE: "output", SPDIFIN: "input", SPDIFOUT: "output", AGND: "power_in", AVDD: "power_in", AUXADC0: "input", AUXADC1: "input", AUXADC2: "input", AUXADC3: "input", AUXADC4: "input", AUXADC5: "input", PGND: "power_in", PVDD: "power_in", PLLFILT: "passive", DGND_17: "passive", IOVDD_18: "passive", DGND_19: "passive", DVDD_20: "power_in", "XTALIN/MCLK": "input", XTALOUT: "output", CLKOUT: "output", "~{RESET}": "input", DGND_25: "passive", "SS_M/MP0": "bidirectional", "MOSI_M/MP1": "bidirectional", "SCL_M/SCLK_M/MP2": "bidirectional", "SDA_M/MISO_M/MP3": "bidirectional", "MISO/SDA": "bidirectional", "SCLK/SCL": "input", "MOSI/ADDR1": "input", "SS/ADDR0": "input", SELFBOOT: "input", DVDD_35: "passive", DGND_36: "passive", DGND_37: "passive", IOVDD_38: "passive", "LRCLK_OUT0/MP4": "bidirectional", BCLK_OUT0: "bidirectional", SDATA_OUT0: "output", "LRCLK_OUT1/MP5": "bidirectional", BCLK_OUT1: "bidirectional", SDATA_OUT1: "output", MP6: "bidirectional", MP7: "bidirectional", "LRCLK_OUT2/MP8": "bidirectional", BCLK_OUT2: "bidirectional", SDATA_OUT2: "output", "LRCLK_OUT3/MP9": "bidirectional", BCLK_OUT3: "bidirectional", SDATA_OUT3: "output", DVDD_53: "passive", DGND_54: "passive", DGND_55: "passive", IOVDD_56: "passive", BCLK_IN0: "bidirectional", "LRCLK_IN0/MP10": "bidirectional", SDATA_IN0: "input", BCLK_IN1: "bidirectional", "LRCLK_IN1/MP11": "bidirectional", SDATA_IN1: "input", THD_M: "passive", THD_P: "passive", BCLK_IN2: "bidirectional", "LRCLK_IN2/MP12": "bidirectional", SDATA_IN2: "input", BCLK_IN3: "bidirectional", "LRCLK_IN3/MP13": "bidirectional", SDATA_IN3: "input", DVDD_71: "passive", DGND_72: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "DSP_AnalogDevices:ADAU1451";
  override referencePrefix = "U";
}

/**
 * SigmaDSP SigmaDSP Digital Audio Processor, 294.912 MHz, 40kword Data RAM, I2C/SPI, S/PDIF I/O, 16-Channel ASRC, LFCSP-72
 *
 * KiCad symbol: `DSP_AnalogDevices:ADAU1452`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*10x10mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1452_1451_1450.pdf
 * Keywords: sigmadsp audio.
 * Default footprint: Package_CSP:LFCSP-72-1EP_10x10mm_P0.5mm_EP5.3x5.3mm.
 */
export class ADAU1452 extends Component.withPins({
  "DGND_1": "1",
  "IOVDD_2": "2",
  "VDRIVE": "3",
  "SPDIFIN": "4",
  "SPDIFOUT": "5",
  "AGND": "6",
  "AVDD": "7",
  "AUXADC0": "8",
  "AUXADC1": "9",
  "AUXADC2": "10",
  "AUXADC3": "11",
  "AUXADC4": "12",
  "AUXADC5": "13",
  "PGND": "14",
  "PVDD": "15",
  "PLLFILT": "16",
  "DGND_17": "17",
  "IOVDD_18": "18",
  "DGND_19": "19",
  "DVDD_20": "20",
  "XTALIN/MCLK": "21",
  "XTALOUT": "22",
  "CLKOUT": "23",
  "~{RESET}": "24",
  "DGND_25": "25",
  "SS_M/MP0": "26",
  "MOSI_M/MP1": "27",
  "SCL_M/SCLK_M/MP2": "28",
  "SDA_M/MISO_M/MP3": "29",
  "MISO/SDA": "30",
  "SCLK/SCL": "31",
  "MOSI/ADDR1": "32",
  "SS/ADDR0": "33",
  "SELFBOOT": "34",
  "DVDD_35": "35",
  "DGND_36": "36",
  "DGND_37": "37",
  "IOVDD_38": "38",
  "LRCLK_OUT0/MP4": "39",
  "BCLK_OUT0": "40",
  "SDATA_OUT0": "41",
  "LRCLK_OUT1/MP5": "42",
  "BCLK_OUT1": "43",
  "SDATA_OUT1": "44",
  "MP6": "45",
  "MP7": "46",
  "LRCLK_OUT2/MP8": "47",
  "BCLK_OUT2": "48",
  "SDATA_OUT2": "49",
  "LRCLK_OUT3/MP9": "50",
  "BCLK_OUT3": "51",
  "SDATA_OUT3": "52",
  "DVDD_53": "53",
  "DGND_54": "54",
  "DGND_55": "55",
  "IOVDD_56": "56",
  "BCLK_IN0": "57",
  "LRCLK_IN0/MP10": "58",
  "SDATA_IN0": "59",
  "BCLK_IN1": "60",
  "LRCLK_IN1/MP11": "61",
  "SDATA_IN1": "62",
  "THD_M": "63",
  "THD_P": "64",
  "BCLK_IN2": "65",
  "LRCLK_IN2/MP12": "66",
  "SDATA_IN2": "67",
  "BCLK_IN3": "68",
  "LRCLK_IN3/MP13": "69",
  "SDATA_IN3": "70",
  "DVDD_71": "71",
  "DGND_72": "72",
  "EP": "73",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DGND_1: "power_in", IOVDD_2: "power_in", VDRIVE: "output", SPDIFIN: "input", SPDIFOUT: "output", AGND: "power_in", AVDD: "power_in", AUXADC0: "input", AUXADC1: "input", AUXADC2: "input", AUXADC3: "input", AUXADC4: "input", AUXADC5: "input", PGND: "power_in", PVDD: "power_in", PLLFILT: "passive", DGND_17: "passive", IOVDD_18: "passive", DGND_19: "passive", DVDD_20: "power_in", "XTALIN/MCLK": "input", XTALOUT: "output", CLKOUT: "output", "~{RESET}": "input", DGND_25: "passive", "SS_M/MP0": "bidirectional", "MOSI_M/MP1": "bidirectional", "SCL_M/SCLK_M/MP2": "bidirectional", "SDA_M/MISO_M/MP3": "bidirectional", "MISO/SDA": "bidirectional", "SCLK/SCL": "input", "MOSI/ADDR1": "input", "SS/ADDR0": "input", SELFBOOT: "input", DVDD_35: "passive", DGND_36: "passive", DGND_37: "passive", IOVDD_38: "passive", "LRCLK_OUT0/MP4": "bidirectional", BCLK_OUT0: "bidirectional", SDATA_OUT0: "output", "LRCLK_OUT1/MP5": "bidirectional", BCLK_OUT1: "bidirectional", SDATA_OUT1: "output", MP6: "bidirectional", MP7: "bidirectional", "LRCLK_OUT2/MP8": "bidirectional", BCLK_OUT2: "bidirectional", SDATA_OUT2: "output", "LRCLK_OUT3/MP9": "bidirectional", BCLK_OUT3: "bidirectional", SDATA_OUT3: "output", DVDD_53: "passive", DGND_54: "passive", DGND_55: "passive", IOVDD_56: "passive", BCLK_IN0: "bidirectional", "LRCLK_IN0/MP10": "bidirectional", SDATA_IN0: "input", BCLK_IN1: "bidirectional", "LRCLK_IN1/MP11": "bidirectional", SDATA_IN1: "input", THD_M: "passive", THD_P: "passive", BCLK_IN2: "bidirectional", "LRCLK_IN2/MP12": "bidirectional", SDATA_IN2: "input", BCLK_IN3: "bidirectional", "LRCLK_IN3/MP13": "bidirectional", SDATA_IN3: "input", DVDD_71: "passive", DGND_72: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "DSP_AnalogDevices:ADAU1452";
  override referencePrefix = "U";
}

/**
 * SigmaDSP 28-/56-Bit Audio Processor with Two ADCs and Four DACs, 50 MIPS, 1kword Program RAM, 2kword Data RAM, LQFP-48
 *
 * KiCad symbol: `DSP_AnalogDevices:ADAU1701`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1701.pdf
 * Keywords: sigmadsp audio adc dac.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class ADAU1701 extends Component.withPins({
  "AGND_1": "1",
  "ADC0": "2",
  "ADC_RES": "3",
  "ADC1": "4",
  "~{RESET}": "5",
  "SELFBOOT": "6",
  "ADDR0": "7",
  "MP4": "8",
  "MP5": "9",
  "MP1": "10",
  "MP0": "11",
  "DGND_12": "12",
  "DVDD_13": "13",
  "MP7": "14",
  "MP6": "15",
  "MP10": "16",
  "VDRIVE": "17",
  "IOVDD": "18",
  "MP11": "19",
  "ADDR1/CDATA/WB": "20",
  "CLATCH/WP": "21",
  "SDA/COUT": "22",
  "SCL/CCLK": "23",
  "DVDD_24": "24",
  "DGND_25": "25",
  "MP9": "26",
  "MP8": "27",
  "MP3": "28",
  "MP2": "29",
  "RSVD": "30",
  "OSCO": "31",
  "MCLKI": "32",
  "PGND": "33",
  "PVDD": "34",
  "PLL_LF": "35",
  "AVDD_36": "36",
  "AGND_37": "37",
  "PLL_MODE0": "38",
  "PLL_MODE1": "39",
  "CM": "40",
  "FILTD": "41",
  "AGND_42": "42",
  "VOUT3": "43",
  "VOUT2": "44",
  "VOUT1": "45",
  "VOUT0": "46",
  "FILTA": "47",
  "AVDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AGND_1: "power_in", ADC0: "input", ADC_RES: "passive", ADC1: "input", "~{RESET}": "input", SELFBOOT: "input", ADDR0: "input", MP4: "bidirectional", MP5: "bidirectional", MP1: "bidirectional", MP0: "bidirectional", DGND_12: "power_in", DVDD_13: "power_in", MP7: "bidirectional", MP6: "bidirectional", MP10: "bidirectional", VDRIVE: "output", IOVDD: "power_in", MP11: "bidirectional", "ADDR1/CDATA/WB": "input", "CLATCH/WP": "bidirectional", "SDA/COUT": "bidirectional", "SCL/CCLK": "bidirectional", DVDD_24: "passive", DGND_25: "passive", MP9: "bidirectional", MP8: "bidirectional", MP3: "bidirectional", MP2: "bidirectional", RSVD: "passive", OSCO: "passive", MCLKI: "passive", PGND: "power_in", PVDD: "power_in", PLL_LF: "passive", AVDD_36: "power_in", AGND_37: "passive", PLL_MODE0: "input", PLL_MODE1: "input", CM: "output", FILTD: "output", AGND_42: "passive", VOUT3: "output", VOUT2: "output", VOUT1: "output", VOUT0: "output", FILTA: "output", AVDD_48: "passive", ...opts.pinTypes } });
  }
  override schema = "DSP_AnalogDevices:ADAU1701";
  override referencePrefix = "U";
}

/**
 * SigmaDSP 28-/56-Bit Audio Processor with Two ADCs and Four DACs, 25 MIPS, 512kword Program RAM, 512kword Data RAM, LQFP-48
 *
 * KiCad symbol: `DSP_AnalogDevices:ADAU1702`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1702.pdf
 * Keywords: sigmadsp audio adc dac.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class ADAU1702 extends Component.withPins({
  "AGND_1": "1",
  "ADC0": "2",
  "ADC_RES": "3",
  "ADC1": "4",
  "~{RESET}": "5",
  "SELFBOOT": "6",
  "ADDR0": "7",
  "MP4": "8",
  "MP5": "9",
  "MP1": "10",
  "MP0": "11",
  "DGND_12": "12",
  "DVDD_13": "13",
  "MP7": "14",
  "MP6": "15",
  "MP10": "16",
  "VDRIVE": "17",
  "IOVDD": "18",
  "MP11": "19",
  "ADDR1/CDATA/WB": "20",
  "CLATCH/WP": "21",
  "SDA/COUT": "22",
  "SCL/CCLK": "23",
  "DVDD_24": "24",
  "DGND_25": "25",
  "MP9": "26",
  "MP8": "27",
  "MP3": "28",
  "MP2": "29",
  "RSVD": "30",
  "OSCO": "31",
  "MCLKI": "32",
  "PGND": "33",
  "PVDD": "34",
  "PLL_LF": "35",
  "AVDD_36": "36",
  "AGND_37": "37",
  "PLL_MODE0": "38",
  "PLL_MODE1": "39",
  "CM": "40",
  "FILTD": "41",
  "AGND_42": "42",
  "VOUT3": "43",
  "VOUT2": "44",
  "VOUT1": "45",
  "VOUT0": "46",
  "FILTA": "47",
  "AVDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AGND_1: "power_in", ADC0: "input", ADC_RES: "passive", ADC1: "input", "~{RESET}": "input", SELFBOOT: "input", ADDR0: "input", MP4: "bidirectional", MP5: "bidirectional", MP1: "bidirectional", MP0: "bidirectional", DGND_12: "power_in", DVDD_13: "power_in", MP7: "bidirectional", MP6: "bidirectional", MP10: "bidirectional", VDRIVE: "output", IOVDD: "power_in", MP11: "bidirectional", "ADDR1/CDATA/WB": "input", "CLATCH/WP": "bidirectional", "SDA/COUT": "bidirectional", "SCL/CCLK": "bidirectional", DVDD_24: "passive", DGND_25: "passive", MP9: "bidirectional", MP8: "bidirectional", MP3: "bidirectional", MP2: "bidirectional", RSVD: "passive", OSCO: "passive", MCLKI: "passive", PGND: "power_in", PVDD: "power_in", PLL_LF: "passive", AVDD_36: "power_in", AGND_37: "passive", PLL_MODE0: "input", PLL_MODE1: "input", CM: "output", FILTD: "output", AGND_42: "passive", VOUT3: "output", VOUT2: "output", VOUT1: "output", VOUT0: "output", FILTA: "output", AVDD_48: "passive", ...opts.pinTypes } });
  }
  override schema = "DSP_AnalogDevices:ADAU1702";
  override referencePrefix = "U";
}
