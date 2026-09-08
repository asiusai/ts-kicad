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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1450 extends Component.withPins({
  /** Physical pin 1: DGND; power_in. */
  "DGND_1": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: VDRIVE; output. */
  "VDRIVE": "3",
  /** Physical pin 4: SPDIFIN; input. */
  "SPDIFIN": "4",
  /** Physical pin 5: SPDIFOUT; output. */
  "SPDIFOUT": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: AUXADC0; input. */
  "AUXADC0": "8",
  /** Physical pin 9: AUXADC1; input. */
  "AUXADC1": "9",
  /** Physical pin 10: AUXADC2; input. */
  "AUXADC2": "10",
  /** Physical pin 11: AUXADC3; input. */
  "AUXADC3": "11",
  /** Physical pin 12: AUXADC4; input. */
  "AUXADC4": "12",
  /** Physical pin 13: AUXADC5; input. */
  "AUXADC5": "13",
  /** Physical pin 14: PGND; power_in. */
  "PGND": "14",
  /** Physical pin 15: PVDD; power_in. */
  "PVDD": "15",
  /** Physical pin 16: PLLFILT; passive. */
  "PLLFILT": "16",
  /** Physical pin 17: DGND; passive. */
  "DGND_17": "17",
  /** Physical pin 18: IOVDD; passive. */
  "IOVDD_18": "18",
  /** Physical pin 19: DGND; passive. */
  "DGND_19": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD_20": "20",
  /** Physical pin 21: XTALIN/MCLK; input. */
  "XTALIN/MCLK": "21",
  /** Physical pin 22: XTALOUT; output. */
  "XTALOUT": "22",
  /** Physical pin 23: CLKOUT; output. */
  "CLKOUT": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: DGND; passive. */
  "DGND_25": "25",
  /** Physical pin 26: SS_M/MP0; bidirectional. */
  "SS_M/MP0": "26",
  /** Physical pin 27: MOSI_M/MP1; bidirectional. */
  "MOSI_M/MP1": "27",
  /** Physical pin 28: SCL_M/SCLK_M/MP2; bidirectional. */
  "SCL_M/SCLK_M/MP2": "28",
  /** Physical pin 29: SDA_M/MISO_M/MP3; bidirectional. */
  "SDA_M/MISO_M/MP3": "29",
  /** Physical pin 30: MISO/SDA; bidirectional. */
  "MISO/SDA": "30",
  /** Physical pin 31: SCLK/SCL; input. */
  "SCLK/SCL": "31",
  /** Physical pin 32: MOSI/ADDR1; input. */
  "MOSI/ADDR1": "32",
  /** Physical pin 33: SS/ADDR0; input. */
  "SS/ADDR0": "33",
  /** Physical pin 34: SELFBOOT; input. */
  "SELFBOOT": "34",
  /** Physical pin 35: DVDD; passive. */
  "DVDD_35": "35",
  /** Physical pin 36: DGND; passive. */
  "DGND_36": "36",
  /** Physical pin 37: DGND; passive. */
  "DGND_37": "37",
  /** Physical pin 38: IOVDD; passive. */
  "IOVDD_38": "38",
  /** Physical pin 39: LRCLK_OUT0/MP4; bidirectional. */
  "LRCLK_OUT0/MP4": "39",
  /** Physical pin 40: BCLK_OUT0; bidirectional. */
  "BCLK_OUT0": "40",
  /** Physical pin 41: SDATA_OUT0; output. */
  "SDATA_OUT0": "41",
  /** Physical pin 42: LRCLK_OUT1/MP5; bidirectional. */
  "LRCLK_OUT1/MP5": "42",
  /** Physical pin 43: BCLK_OUT1; bidirectional. */
  "BCLK_OUT1": "43",
  /** Physical pin 44: SDATA_OUT1; output. */
  "SDATA_OUT1": "44",
  /** Physical pin 45: MP6; bidirectional. */
  "MP6": "45",
  /** Physical pin 46: MP7; bidirectional. */
  "MP7": "46",
  /** Physical pin 47: LRCLK_OUT2/MP8; bidirectional. */
  "LRCLK_OUT2/MP8": "47",
  /** Physical pin 48: BCLK_OUT2; bidirectional. */
  "BCLK_OUT2": "48",
  /** Physical pin 49: SDATA_OUT2; output. */
  "SDATA_OUT2": "49",
  /** Physical pin 50: LRCLK_OUT3/MP9; bidirectional. */
  "LRCLK_OUT3/MP9": "50",
  /** Physical pin 51: BCLK_OUT3; bidirectional. */
  "BCLK_OUT3": "51",
  /** Physical pin 52: SDATA_OUT3; output. */
  "SDATA_OUT3": "52",
  /** Physical pin 53: DVDD; passive. */
  "DVDD_53": "53",
  /** Physical pin 54: DGND; passive. */
  "DGND_54": "54",
  /** Physical pin 55: DGND; passive. */
  "DGND_55": "55",
  /** Physical pin 56: IOVDD; passive. */
  "IOVDD_56": "56",
  /** Physical pin 57: BCLK_IN0; bidirectional. */
  "BCLK_IN0": "57",
  /** Physical pin 58: LRCLK_IN0/MP10; bidirectional. */
  "LRCLK_IN0/MP10": "58",
  /** Physical pin 59: SDATA_IN0; input. */
  "SDATA_IN0": "59",
  /** Physical pin 60: BCLK_IN1; bidirectional. */
  "BCLK_IN1": "60",
  /** Physical pin 61: LRCLK_IN1/MP11; bidirectional. */
  "LRCLK_IN1/MP11": "61",
  /** Physical pin 62: SDATA_IN1; input. */
  "SDATA_IN1": "62",
  /** Physical pin 63: THD_M; passive. */
  "THD_M": "63",
  /** Physical pin 64: THD_P; passive. */
  "THD_P": "64",
  /** Physical pin 65: BCLK_IN2; bidirectional. */
  "BCLK_IN2": "65",
  /** Physical pin 66: LRCLK_IN2/MP12; bidirectional. */
  "LRCLK_IN2/MP12": "66",
  /** Physical pin 67: SDATA_IN2; input. */
  "SDATA_IN2": "67",
  /** Physical pin 68: BCLK_IN3; bidirectional. */
  "BCLK_IN3": "68",
  /** Physical pin 69: LRCLK_IN3/MP13; bidirectional. */
  "LRCLK_IN3/MP13": "69",
  /** Physical pin 70: SDATA_IN3; input. */
  "SDATA_IN3": "70",
  /** Physical pin 71: DVDD; passive. */
  "DVDD_71": "71",
  /** Physical pin 72: DGND; passive. */
  "DGND_72": "72",
  /** Physical pin 73: EP; power_in. */
  "EP": "73",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1451 extends Component.withPins({
  /** Physical pin 1: DGND; power_in. */
  "DGND_1": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: VDRIVE; output. */
  "VDRIVE": "3",
  /** Physical pin 4: SPDIFIN; input. */
  "SPDIFIN": "4",
  /** Physical pin 5: SPDIFOUT; output. */
  "SPDIFOUT": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: AUXADC0; input. */
  "AUXADC0": "8",
  /** Physical pin 9: AUXADC1; input. */
  "AUXADC1": "9",
  /** Physical pin 10: AUXADC2; input. */
  "AUXADC2": "10",
  /** Physical pin 11: AUXADC3; input. */
  "AUXADC3": "11",
  /** Physical pin 12: AUXADC4; input. */
  "AUXADC4": "12",
  /** Physical pin 13: AUXADC5; input. */
  "AUXADC5": "13",
  /** Physical pin 14: PGND; power_in. */
  "PGND": "14",
  /** Physical pin 15: PVDD; power_in. */
  "PVDD": "15",
  /** Physical pin 16: PLLFILT; passive. */
  "PLLFILT": "16",
  /** Physical pin 17: DGND; passive. */
  "DGND_17": "17",
  /** Physical pin 18: IOVDD; passive. */
  "IOVDD_18": "18",
  /** Physical pin 19: DGND; passive. */
  "DGND_19": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD_20": "20",
  /** Physical pin 21: XTALIN/MCLK; input. */
  "XTALIN/MCLK": "21",
  /** Physical pin 22: XTALOUT; output. */
  "XTALOUT": "22",
  /** Physical pin 23: CLKOUT; output. */
  "CLKOUT": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: DGND; passive. */
  "DGND_25": "25",
  /** Physical pin 26: SS_M/MP0; bidirectional. */
  "SS_M/MP0": "26",
  /** Physical pin 27: MOSI_M/MP1; bidirectional. */
  "MOSI_M/MP1": "27",
  /** Physical pin 28: SCL_M/SCLK_M/MP2; bidirectional. */
  "SCL_M/SCLK_M/MP2": "28",
  /** Physical pin 29: SDA_M/MISO_M/MP3; bidirectional. */
  "SDA_M/MISO_M/MP3": "29",
  /** Physical pin 30: MISO/SDA; bidirectional. */
  "MISO/SDA": "30",
  /** Physical pin 31: SCLK/SCL; input. */
  "SCLK/SCL": "31",
  /** Physical pin 32: MOSI/ADDR1; input. */
  "MOSI/ADDR1": "32",
  /** Physical pin 33: SS/ADDR0; input. */
  "SS/ADDR0": "33",
  /** Physical pin 34: SELFBOOT; input. */
  "SELFBOOT": "34",
  /** Physical pin 35: DVDD; passive. */
  "DVDD_35": "35",
  /** Physical pin 36: DGND; passive. */
  "DGND_36": "36",
  /** Physical pin 37: DGND; passive. */
  "DGND_37": "37",
  /** Physical pin 38: IOVDD; passive. */
  "IOVDD_38": "38",
  /** Physical pin 39: LRCLK_OUT0/MP4; bidirectional. */
  "LRCLK_OUT0/MP4": "39",
  /** Physical pin 40: BCLK_OUT0; bidirectional. */
  "BCLK_OUT0": "40",
  /** Physical pin 41: SDATA_OUT0; output. */
  "SDATA_OUT0": "41",
  /** Physical pin 42: LRCLK_OUT1/MP5; bidirectional. */
  "LRCLK_OUT1/MP5": "42",
  /** Physical pin 43: BCLK_OUT1; bidirectional. */
  "BCLK_OUT1": "43",
  /** Physical pin 44: SDATA_OUT1; output. */
  "SDATA_OUT1": "44",
  /** Physical pin 45: MP6; bidirectional. */
  "MP6": "45",
  /** Physical pin 46: MP7; bidirectional. */
  "MP7": "46",
  /** Physical pin 47: LRCLK_OUT2/MP8; bidirectional. */
  "LRCLK_OUT2/MP8": "47",
  /** Physical pin 48: BCLK_OUT2; bidirectional. */
  "BCLK_OUT2": "48",
  /** Physical pin 49: SDATA_OUT2; output. */
  "SDATA_OUT2": "49",
  /** Physical pin 50: LRCLK_OUT3/MP9; bidirectional. */
  "LRCLK_OUT3/MP9": "50",
  /** Physical pin 51: BCLK_OUT3; bidirectional. */
  "BCLK_OUT3": "51",
  /** Physical pin 52: SDATA_OUT3; output. */
  "SDATA_OUT3": "52",
  /** Physical pin 53: DVDD; passive. */
  "DVDD_53": "53",
  /** Physical pin 54: DGND; passive. */
  "DGND_54": "54",
  /** Physical pin 55: DGND; passive. */
  "DGND_55": "55",
  /** Physical pin 56: IOVDD; passive. */
  "IOVDD_56": "56",
  /** Physical pin 57: BCLK_IN0; bidirectional. */
  "BCLK_IN0": "57",
  /** Physical pin 58: LRCLK_IN0/MP10; bidirectional. */
  "LRCLK_IN0/MP10": "58",
  /** Physical pin 59: SDATA_IN0; input. */
  "SDATA_IN0": "59",
  /** Physical pin 60: BCLK_IN1; bidirectional. */
  "BCLK_IN1": "60",
  /** Physical pin 61: LRCLK_IN1/MP11; bidirectional. */
  "LRCLK_IN1/MP11": "61",
  /** Physical pin 62: SDATA_IN1; input. */
  "SDATA_IN1": "62",
  /** Physical pin 63: THD_M; passive. */
  "THD_M": "63",
  /** Physical pin 64: THD_P; passive. */
  "THD_P": "64",
  /** Physical pin 65: BCLK_IN2; bidirectional. */
  "BCLK_IN2": "65",
  /** Physical pin 66: LRCLK_IN2/MP12; bidirectional. */
  "LRCLK_IN2/MP12": "66",
  /** Physical pin 67: SDATA_IN2; input. */
  "SDATA_IN2": "67",
  /** Physical pin 68: BCLK_IN3; bidirectional. */
  "BCLK_IN3": "68",
  /** Physical pin 69: LRCLK_IN3/MP13; bidirectional. */
  "LRCLK_IN3/MP13": "69",
  /** Physical pin 70: SDATA_IN3; input. */
  "SDATA_IN3": "70",
  /** Physical pin 71: DVDD; passive. */
  "DVDD_71": "71",
  /** Physical pin 72: DGND; passive. */
  "DGND_72": "72",
  /** Physical pin 73: EP; power_in. */
  "EP": "73",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1452 extends Component.withPins({
  /** Physical pin 1: DGND; power_in. */
  "DGND_1": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: VDRIVE; output. */
  "VDRIVE": "3",
  /** Physical pin 4: SPDIFIN; input. */
  "SPDIFIN": "4",
  /** Physical pin 5: SPDIFOUT; output. */
  "SPDIFOUT": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: AUXADC0; input. */
  "AUXADC0": "8",
  /** Physical pin 9: AUXADC1; input. */
  "AUXADC1": "9",
  /** Physical pin 10: AUXADC2; input. */
  "AUXADC2": "10",
  /** Physical pin 11: AUXADC3; input. */
  "AUXADC3": "11",
  /** Physical pin 12: AUXADC4; input. */
  "AUXADC4": "12",
  /** Physical pin 13: AUXADC5; input. */
  "AUXADC5": "13",
  /** Physical pin 14: PGND; power_in. */
  "PGND": "14",
  /** Physical pin 15: PVDD; power_in. */
  "PVDD": "15",
  /** Physical pin 16: PLLFILT; passive. */
  "PLLFILT": "16",
  /** Physical pin 17: DGND; passive. */
  "DGND_17": "17",
  /** Physical pin 18: IOVDD; passive. */
  "IOVDD_18": "18",
  /** Physical pin 19: DGND; passive. */
  "DGND_19": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD_20": "20",
  /** Physical pin 21: XTALIN/MCLK; input. */
  "XTALIN/MCLK": "21",
  /** Physical pin 22: XTALOUT; output. */
  "XTALOUT": "22",
  /** Physical pin 23: CLKOUT; output. */
  "CLKOUT": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: DGND; passive. */
  "DGND_25": "25",
  /** Physical pin 26: SS_M/MP0; bidirectional. */
  "SS_M/MP0": "26",
  /** Physical pin 27: MOSI_M/MP1; bidirectional. */
  "MOSI_M/MP1": "27",
  /** Physical pin 28: SCL_M/SCLK_M/MP2; bidirectional. */
  "SCL_M/SCLK_M/MP2": "28",
  /** Physical pin 29: SDA_M/MISO_M/MP3; bidirectional. */
  "SDA_M/MISO_M/MP3": "29",
  /** Physical pin 30: MISO/SDA; bidirectional. */
  "MISO/SDA": "30",
  /** Physical pin 31: SCLK/SCL; input. */
  "SCLK/SCL": "31",
  /** Physical pin 32: MOSI/ADDR1; input. */
  "MOSI/ADDR1": "32",
  /** Physical pin 33: SS/ADDR0; input. */
  "SS/ADDR0": "33",
  /** Physical pin 34: SELFBOOT; input. */
  "SELFBOOT": "34",
  /** Physical pin 35: DVDD; passive. */
  "DVDD_35": "35",
  /** Physical pin 36: DGND; passive. */
  "DGND_36": "36",
  /** Physical pin 37: DGND; passive. */
  "DGND_37": "37",
  /** Physical pin 38: IOVDD; passive. */
  "IOVDD_38": "38",
  /** Physical pin 39: LRCLK_OUT0/MP4; bidirectional. */
  "LRCLK_OUT0/MP4": "39",
  /** Physical pin 40: BCLK_OUT0; bidirectional. */
  "BCLK_OUT0": "40",
  /** Physical pin 41: SDATA_OUT0; output. */
  "SDATA_OUT0": "41",
  /** Physical pin 42: LRCLK_OUT1/MP5; bidirectional. */
  "LRCLK_OUT1/MP5": "42",
  /** Physical pin 43: BCLK_OUT1; bidirectional. */
  "BCLK_OUT1": "43",
  /** Physical pin 44: SDATA_OUT1; output. */
  "SDATA_OUT1": "44",
  /** Physical pin 45: MP6; bidirectional. */
  "MP6": "45",
  /** Physical pin 46: MP7; bidirectional. */
  "MP7": "46",
  /** Physical pin 47: LRCLK_OUT2/MP8; bidirectional. */
  "LRCLK_OUT2/MP8": "47",
  /** Physical pin 48: BCLK_OUT2; bidirectional. */
  "BCLK_OUT2": "48",
  /** Physical pin 49: SDATA_OUT2; output. */
  "SDATA_OUT2": "49",
  /** Physical pin 50: LRCLK_OUT3/MP9; bidirectional. */
  "LRCLK_OUT3/MP9": "50",
  /** Physical pin 51: BCLK_OUT3; bidirectional. */
  "BCLK_OUT3": "51",
  /** Physical pin 52: SDATA_OUT3; output. */
  "SDATA_OUT3": "52",
  /** Physical pin 53: DVDD; passive. */
  "DVDD_53": "53",
  /** Physical pin 54: DGND; passive. */
  "DGND_54": "54",
  /** Physical pin 55: DGND; passive. */
  "DGND_55": "55",
  /** Physical pin 56: IOVDD; passive. */
  "IOVDD_56": "56",
  /** Physical pin 57: BCLK_IN0; bidirectional. */
  "BCLK_IN0": "57",
  /** Physical pin 58: LRCLK_IN0/MP10; bidirectional. */
  "LRCLK_IN0/MP10": "58",
  /** Physical pin 59: SDATA_IN0; input. */
  "SDATA_IN0": "59",
  /** Physical pin 60: BCLK_IN1; bidirectional. */
  "BCLK_IN1": "60",
  /** Physical pin 61: LRCLK_IN1/MP11; bidirectional. */
  "LRCLK_IN1/MP11": "61",
  /** Physical pin 62: SDATA_IN1; input. */
  "SDATA_IN1": "62",
  /** Physical pin 63: THD_M; passive. */
  "THD_M": "63",
  /** Physical pin 64: THD_P; passive. */
  "THD_P": "64",
  /** Physical pin 65: BCLK_IN2; bidirectional. */
  "BCLK_IN2": "65",
  /** Physical pin 66: LRCLK_IN2/MP12; bidirectional. */
  "LRCLK_IN2/MP12": "66",
  /** Physical pin 67: SDATA_IN2; input. */
  "SDATA_IN2": "67",
  /** Physical pin 68: BCLK_IN3; bidirectional. */
  "BCLK_IN3": "68",
  /** Physical pin 69: LRCLK_IN3/MP13; bidirectional. */
  "LRCLK_IN3/MP13": "69",
  /** Physical pin 70: SDATA_IN3; input. */
  "SDATA_IN3": "70",
  /** Physical pin 71: DVDD; passive. */
  "DVDD_71": "71",
  /** Physical pin 72: DGND; passive. */
  "DGND_72": "72",
  /** Physical pin 73: EP; power_in. */
  "EP": "73",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1701 extends Component.withPins({
  /** Physical pin 1: AGND; power_in. */
  "AGND_1": "1",
  /** Physical pin 2: ADC0; input. */
  "ADC0": "2",
  /** Physical pin 3: ADC_RES; passive. */
  "ADC_RES": "3",
  /** Physical pin 4: ADC1; input. */
  "ADC1": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: SELFBOOT; input. */
  "SELFBOOT": "6",
  /** Physical pin 7: ADDR0; input. */
  "ADDR0": "7",
  /** Physical pin 8: MP4; bidirectional. */
  "MP4": "8",
  /** Physical pin 9: MP5; bidirectional. */
  "MP5": "9",
  /** Physical pin 10: MP1; bidirectional. */
  "MP1": "10",
  /** Physical pin 11: MP0; bidirectional. */
  "MP0": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND_12": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD_13": "13",
  /** Physical pin 14: MP7; bidirectional. */
  "MP7": "14",
  /** Physical pin 15: MP6; bidirectional. */
  "MP6": "15",
  /** Physical pin 16: MP10; bidirectional. */
  "MP10": "16",
  /** Physical pin 17: VDRIVE; output. */
  "VDRIVE": "17",
  /** Physical pin 18: IOVDD; power_in. */
  "IOVDD": "18",
  /** Physical pin 19: MP11; bidirectional. */
  "MP11": "19",
  /** Physical pin 20: ADDR1/CDATA/WB; input. */
  "ADDR1/CDATA/WB": "20",
  /** Physical pin 21: CLATCH/WP; bidirectional. */
  "CLATCH/WP": "21",
  /** Physical pin 22: SDA/COUT; bidirectional. */
  "SDA/COUT": "22",
  /** Physical pin 23: SCL/CCLK; bidirectional. */
  "SCL/CCLK": "23",
  /** Physical pin 24: DVDD; passive. */
  "DVDD_24": "24",
  /** Physical pin 25: DGND; passive. */
  "DGND_25": "25",
  /** Physical pin 26: MP9; bidirectional. */
  "MP9": "26",
  /** Physical pin 27: MP8; bidirectional. */
  "MP8": "27",
  /** Physical pin 28: MP3; bidirectional. */
  "MP3": "28",
  /** Physical pin 29: MP2; bidirectional. */
  "MP2": "29",
  /** Physical pin 30: RSVD; passive. */
  "RSVD": "30",
  /** Physical pin 31: OSCO; passive. */
  "OSCO": "31",
  /** Physical pin 32: MCLKI; passive. */
  "MCLKI": "32",
  /** Physical pin 33: PGND; power_in. */
  "PGND": "33",
  /** Physical pin 34: PVDD; power_in. */
  "PVDD": "34",
  /** Physical pin 35: PLL_LF; passive. */
  "PLL_LF": "35",
  /** Physical pin 36: AVDD; power_in. */
  "AVDD_36": "36",
  /** Physical pin 37: AGND; passive. */
  "AGND_37": "37",
  /** Physical pin 38: PLL_MODE0; input. */
  "PLL_MODE0": "38",
  /** Physical pin 39: PLL_MODE1; input. */
  "PLL_MODE1": "39",
  /** Physical pin 40: CM; output. */
  "CM": "40",
  /** Physical pin 41: FILTD; output. */
  "FILTD": "41",
  /** Physical pin 42: AGND; passive. */
  "AGND_42": "42",
  /** Physical pin 43: VOUT3; output. */
  "VOUT3": "43",
  /** Physical pin 44: VOUT2; output. */
  "VOUT2": "44",
  /** Physical pin 45: VOUT1; output. */
  "VOUT1": "45",
  /** Physical pin 46: VOUT0; output. */
  "VOUT0": "46",
  /** Physical pin 47: FILTA; output. */
  "FILTA": "47",
  /** Physical pin 48: AVDD; passive. */
  "AVDD_48": "48",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1702 extends Component.withPins({
  /** Physical pin 1: AGND; power_in. */
  "AGND_1": "1",
  /** Physical pin 2: ADC0; input. */
  "ADC0": "2",
  /** Physical pin 3: ADC_RES; passive. */
  "ADC_RES": "3",
  /** Physical pin 4: ADC1; input. */
  "ADC1": "4",
  /** Physical pin 5: ~{RESET}; input. */
  "~{RESET}": "5",
  /** Physical pin 6: SELFBOOT; input. */
  "SELFBOOT": "6",
  /** Physical pin 7: ADDR0; input. */
  "ADDR0": "7",
  /** Physical pin 8: MP4; bidirectional. */
  "MP4": "8",
  /** Physical pin 9: MP5; bidirectional. */
  "MP5": "9",
  /** Physical pin 10: MP1; bidirectional. */
  "MP1": "10",
  /** Physical pin 11: MP0; bidirectional. */
  "MP0": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND_12": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD_13": "13",
  /** Physical pin 14: MP7; bidirectional. */
  "MP7": "14",
  /** Physical pin 15: MP6; bidirectional. */
  "MP6": "15",
  /** Physical pin 16: MP10; bidirectional. */
  "MP10": "16",
  /** Physical pin 17: VDRIVE; output. */
  "VDRIVE": "17",
  /** Physical pin 18: IOVDD; power_in. */
  "IOVDD": "18",
  /** Physical pin 19: MP11; bidirectional. */
  "MP11": "19",
  /** Physical pin 20: ADDR1/CDATA/WB; input. */
  "ADDR1/CDATA/WB": "20",
  /** Physical pin 21: CLATCH/WP; bidirectional. */
  "CLATCH/WP": "21",
  /** Physical pin 22: SDA/COUT; bidirectional. */
  "SDA/COUT": "22",
  /** Physical pin 23: SCL/CCLK; bidirectional. */
  "SCL/CCLK": "23",
  /** Physical pin 24: DVDD; passive. */
  "DVDD_24": "24",
  /** Physical pin 25: DGND; passive. */
  "DGND_25": "25",
  /** Physical pin 26: MP9; bidirectional. */
  "MP9": "26",
  /** Physical pin 27: MP8; bidirectional. */
  "MP8": "27",
  /** Physical pin 28: MP3; bidirectional. */
  "MP3": "28",
  /** Physical pin 29: MP2; bidirectional. */
  "MP2": "29",
  /** Physical pin 30: RSVD; passive. */
  "RSVD": "30",
  /** Physical pin 31: OSCO; passive. */
  "OSCO": "31",
  /** Physical pin 32: MCLKI; passive. */
  "MCLKI": "32",
  /** Physical pin 33: PGND; power_in. */
  "PGND": "33",
  /** Physical pin 34: PVDD; power_in. */
  "PVDD": "34",
  /** Physical pin 35: PLL_LF; passive. */
  "PLL_LF": "35",
  /** Physical pin 36: AVDD; power_in. */
  "AVDD_36": "36",
  /** Physical pin 37: AGND; passive. */
  "AGND_37": "37",
  /** Physical pin 38: PLL_MODE0; input. */
  "PLL_MODE0": "38",
  /** Physical pin 39: PLL_MODE1; input. */
  "PLL_MODE1": "39",
  /** Physical pin 40: CM; output. */
  "CM": "40",
  /** Physical pin 41: FILTD; output. */
  "FILTD": "41",
  /** Physical pin 42: AGND; passive. */
  "AGND_42": "42",
  /** Physical pin 43: VOUT3; output. */
  "VOUT3": "43",
  /** Physical pin 44: VOUT2; output. */
  "VOUT2": "44",
  /** Physical pin 45: VOUT1; output. */
  "VOUT1": "45",
  /** Physical pin 46: VOUT0; output. */
  "VOUT0": "46",
  /** Physical pin 47: FILTA; output. */
  "FILTA": "47",
  /** Physical pin 48: AVDD; passive. */
  "AVDD_48": "48",
}) {
  override schema = "DSP_AnalogDevices:ADAU1702";
  override referencePrefix = "U";
}

