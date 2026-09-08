// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Stereo, 24-Bit, 192 kHz, Multibit Sigma-Delta DAC, SSOP-28
 *
 * KiCad symbol: `Audio:AD1853`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD1853.pdf
 * Keywords: audio dac 2ch 24bit 192kHz.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD1853 extends Component.withPins({
  /** Physical pin 1: DGND; power_in. */
  "DGND": "1",
  /** Physical pin 2: MCLK; input. */
  "MCLK": "2",
  /** Physical pin 3: CLATCH; input. */
  "CLATCH": "3",
  /** Physical pin 4: CCLK; input. */
  "CCLK": "4",
  /** Physical pin 5: CDATA; input. */
  "CDATA": "5",
  /** Physical pin 6: INT4X; input. */
  "INT4X": "6",
  /** Physical pin 7: INT2X; input. */
  "INT2X": "7",
  /** Physical pin 8: ZEROR; output. */
  "ZEROR": "8",
  /** Physical pin 9: DEEMP; input. */
  "DEEMP": "9",
  /** Physical pin 10: IREF; passive. */
  "IREF": "10",
  /** Physical pin 11: AGND; power_in. */
  "AGND": "11",
  /** Physical pin 12: OUTL+; output. */
  "OUTL+": "12",
  /** Physical pin 13: OUTL-; output. */
  "OUTL-": "13",
  /** Physical pin 14: FILTR; output. */
  "FILTR": "14",
  /** Physical pin 15: FCR; output. */
  "FCR": "15",
  /** Physical pin 16: OUTR-; output. */
  "OUTR-": "16",
  /** Physical pin 17: OUTR+; output. */
  "OUTR+": "17",
  /** Physical pin 18: AVDD; power_in. */
  "AVDD": "18",
  /** Physical pin 19: FILTB; output. */
  "FILTB": "19",
  /** Physical pin 20: IDPM1; input. */
  "IDPM1": "20",
  /** Physical pin 21: IDPM0; input. */
  "IDPM0": "21",
  /** Physical pin 22: ZEROL; output. */
  "ZEROL": "22",
  /** Physical pin 23: MUTE; input. */
  "MUTE": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: L/~{R}CLK; input. */
  "L/~{R}CLK": "25",
  /** Physical pin 26: BCLK; input. */
  "BCLK": "26",
  /** Physical pin 27: SDATA; input. */
  "SDATA": "27",
  /** Physical pin 28: DVDD; power_in. */
  "DVDD": "28",
}) {
  override schema = "Audio:AD1853";
  override referencePrefix = "U";
}

/**
 * Stereo, 96 kHz, Multibit Sigma-Delta DAC, SSOP-28
 *
 * KiCad symbol: `Audio:AD1855`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD1855.pdf
 * Keywords: audio dac 2ch 24bit 96kHz.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD1855 extends Component.withPins({
  /** Physical pin 1: DGND; power_in. */
  "DGND": "1",
  /** Physical pin 2: MCLK; input. */
  "MCLK": "2",
  /** Physical pin 3: CLATCH; input. */
  "CLATCH": "3",
  /** Physical pin 4: CCLK; input. */
  "CCLK": "4",
  /** Physical pin 5: CDATA; input. */
  "CDATA": "5",
  /** Physical pin 6: 384/~{256}; input. */
  "384/~{256}": "6",
  /** Physical pin 7: X2MCLK; input. */
  "X2MCLK": "7",
  /** Physical pin 8: ZEROR; output. */
  "ZEROR": "8",
  /** Physical pin 9: DEEMP; input. */
  "DEEMP": "9",
  /** Physical pin 10: 96/~{48}; input. */
  "96/~{48}": "10",
  /** Physical pin 11: AGND; power_in. */
  "AGND_11": "11",
  /** Physical pin 12: OUTR+; output. */
  "OUTR+": "12",
  /** Physical pin 13: OUTR-; output. */
  "OUTR-": "13",
  /** Physical pin 14: FILTR; output. */
  "FILTR": "14",
  /** Physical pin 15: AGND; passive. */
  "AGND_15": "15",
  /** Physical pin 16: OUTL-; output. */
  "OUTL-": "16",
  /** Physical pin 17: OUTL+; output. */
  "OUTL+": "17",
  /** Physical pin 18: AVDD; power_in. */
  "AVDD": "18",
  /** Physical pin 19: FILTB; output. */
  "FILTB": "19",
  /** Physical pin 20: IDPM1; input. */
  "IDPM1": "20",
  /** Physical pin 21: IDPM0; input. */
  "IDPM0": "21",
  /** Physical pin 22: ZEROL; output. */
  "ZEROL": "22",
  /** Physical pin 23: MUTE; input. */
  "MUTE": "23",
  /** Physical pin 24: ~{PD/RST}; input. */
  "~{PD/RST}": "24",
  /** Physical pin 25: L/~{R}CLK; input. */
  "L/~{R}CLK": "25",
  /** Physical pin 26: BCLK; input. */
  "BCLK": "26",
  /** Physical pin 27: SDATA; input. */
  "SDATA": "27",
  /** Physical pin 28: DVDD; power_in. */
  "DVDD": "28",
}) {
  override schema = "Audio:AD1855";
  override referencePrefix = "U";
}

/**
 * High Performance Multibit Sigma-Delta DAC with SACD Playback, SSOP-28
 *
 * KiCad symbol: `Audio:AD1955`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD1955.pdf
 * Keywords: audio dac 2ch 24bit 192kHz.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD1955 extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: LRCLK/EF_WCLK; input. */
  "LRCLK/EF_WCLK": "2",
  /** Physical pin 3: BCLK/EF_BCLK; input. */
  "BCLK/EF_BCLK": "3",
  /** Physical pin 4: SDATA/EF_LDATA; input. */
  "SDATA/EF_LDATA": "4",
  /** Physical pin 5: EF_RDATA; input. */
  "EF_RDATA": "5",
  /** Physical pin 6: DSD_SCLK; bidirectional. */
  "DSD_SCLK": "6",
  /** Physical pin 7: DSD_LDATA; input. */
  "DSD_LDATA": "7",
  /** Physical pin 8: DSD_RDATA; input. */
  "DSD_RDATA": "8",
  /** Physical pin 9: DSD_PHASE; bidirectional. */
  "DSD_PHASE": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND_10": "10",
  /** Physical pin 11: OUTR+; output. */
  "OUTR+": "11",
  /** Physical pin 12: OUTR-; output. */
  "OUTR-": "12",
  /** Physical pin 13: FILTR; output. */
  "FILTR": "13",
  /** Physical pin 14: IREF; passive. */
  "IREF": "14",
  /** Physical pin 15: AVDD; power_in. */
  "AVDD": "15",
  /** Physical pin 16: FILTB; output. */
  "FILTB": "16",
  /** Physical pin 17: OUTL-; output. */
  "OUTL-": "17",
  /** Physical pin 18: OUTL+; output. */
  "OUTL+": "18",
  /** Physical pin 19: AGND; passive. */
  "AGND_19": "19",
  /** Physical pin 20: ZEROR; output. */
  "ZEROR": "20",
  /** Physical pin 21: ZEROL; output. */
  "ZEROL": "21",
  /** Physical pin 22: MUTE; input. */
  "MUTE": "22",
  /** Physical pin 23: ~{PD/RST}; input. */
  "~{PD/RST}": "23",
  /** Physical pin 24: CDATA; input. */
  "CDATA": "24",
  /** Physical pin 25: ~{CLATCH}; input. */
  "~{CLATCH}": "25",
  /** Physical pin 26: CCLK; input. */
  "CCLK": "26",
  /** Physical pin 27: MCLK; input. */
  "MCLK": "27",
  /** Physical pin 28: DGND; power_in. */
  "DGND": "28",
}) {
  override schema = "Audio:AD1955";
  override referencePrefix = "U";
}

/**
 * Stereo, Low Power, 96 kHz, 24-bit Audio Codec with Integrated PLL, VQFN-32 (LFCSP-32)
 *
 * KiCad symbol: `Audio:ADAU1361`. Reference prefix: `U`.
 * Footprint filters: *5x5mm*P0.5mm*EP3.5x3.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1361.pdf
 * Keywords: ADC DAC PGA I2S TDM I2C SPI.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.5x3.5mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1361 extends Component.withPins({
  /** Physical pin 1: IOVDD; power_in. */
  "IOVDD": "1",
  /** Physical pin 2: MCLK; input. */
  "MCLK": "2",
  /** Physical pin 3: ADDR0/~{CLATCH}; input. */
  "ADDR0/~{CLATCH}": "3",
  /** Physical pin 4: JACKDET/MICIN; input. */
  "JACKDET/MICIN": "4",
  /** Physical pin 5: MICBIAS; output. */
  "MICBIAS": "5",
  /** Physical pin 6: LAUX; input. */
  "LAUX": "6",
  /** Physical pin 7: CM; output. */
  "CM": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD_8": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND_9": "9",
  /** Physical pin 10: LINP; input. */
  "LINP": "10",
  /** Physical pin 11: LINN; input. */
  "LINN": "11",
  /** Physical pin 12: RINP; input. */
  "RINP": "12",
  /** Physical pin 13: RINN; input. */
  "RINN": "13",
  /** Physical pin 14: RAUX; input. */
  "RAUX": "14",
  /** Physical pin 15: ROUTP; output. */
  "ROUTP": "15",
  /** Physical pin 16: ROUTN; output. */
  "ROUTN": "16",
  /** Physical pin 17: LOUTN; output. */
  "LOUTN": "17",
  /** Physical pin 18: LOUTP; output. */
  "LOUTP": "18",
  /** Physical pin 19: RHP; output. */
  "RHP": "19",
  /** Physical pin 20: LHP; output. */
  "LHP": "20",
  /** Physical pin 21: MONOOUT; output. */
  "MONOOUT": "21",
  /** Physical pin 22: AGND; passive. */
  "AGND_22": "22",
  /** Physical pin 23: AVDD; passive. */
  "AVDD_23": "23",
  /** Physical pin 24: DVDDOUT; power_out. */
  "DVDDOUT": "24",
  /** Physical pin 25: DGND; power_in. */
  "DGND": "25",
  /** Physical pin 26: ADC_SDATA; output. */
  "ADC_SDATA": "26",
  /** Physical pin 27: DAC_SDATA; input. */
  "DAC_SDATA": "27",
  /** Physical pin 28: BCLK; bidirectional. */
  "BCLK": "28",
  /** Physical pin 29: LRCLK; bidirectional. */
  "LRCLK": "29",
  /** Physical pin 30: ADDR1/CDATA; input. */
  "ADDR1/CDATA": "30",
  /** Physical pin 31: SDA/COUT; bidirectional. */
  "SDA/COUT": "31",
  /** Physical pin 32: SCL/CCLK; input. */
  "SCL/CCLK": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
  override schema = "Audio:ADAU1361";
  override referencePrefix = "U";
}

/**
 * SigmaDSP Stereo, Low Power, 96 kHz, 24-bit Audio Codec with Integrated PLL, VQFN-32 (LFCSP-32)
 *
 * KiCad symbol: `Audio:ADAU1761`. Reference prefix: `U`.
 * Footprint filters: *5x5mm*P0.5mm*EP3.5x3.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1761.pdf
 * Keywords: DSP GPIO ADC DAC PGA I2S TDM I2C SPI.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.5x3.5mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1761 extends Component.withPins({
  /** Physical pin 1: IOVDD; power_in. */
  "IOVDD": "1",
  /** Physical pin 2: MCLK; input. */
  "MCLK": "2",
  /** Physical pin 3: ADDR0/~{CLATCH}; input. */
  "ADDR0/~{CLATCH}": "3",
  /** Physical pin 4: JACKDET/MICIN; input. */
  "JACKDET/MICIN": "4",
  /** Physical pin 5: MICBIAS; output. */
  "MICBIAS": "5",
  /** Physical pin 6: LAUX; input. */
  "LAUX": "6",
  /** Physical pin 7: CM; output. */
  "CM": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD_8": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND_9": "9",
  /** Physical pin 10: LINP; input. */
  "LINP": "10",
  /** Physical pin 11: LINN; input. */
  "LINN": "11",
  /** Physical pin 12: RINP; input. */
  "RINP": "12",
  /** Physical pin 13: RINN; input. */
  "RINN": "13",
  /** Physical pin 14: RAUX; input. */
  "RAUX": "14",
  /** Physical pin 15: ROUTP; output. */
  "ROUTP": "15",
  /** Physical pin 16: ROUTN; output. */
  "ROUTN": "16",
  /** Physical pin 17: LOUTN; output. */
  "LOUTN": "17",
  /** Physical pin 18: LOUTP; output. */
  "LOUTP": "18",
  /** Physical pin 19: RHP; output. */
  "RHP": "19",
  /** Physical pin 20: LHP; output. */
  "LHP": "20",
  /** Physical pin 21: MONOOUT; output. */
  "MONOOUT": "21",
  /** Physical pin 22: AGND; passive. */
  "AGND_22": "22",
  /** Physical pin 23: AVDD; passive. */
  "AVDD_23": "23",
  /** Physical pin 24: DVDDOUT; power_out. */
  "DVDDOUT": "24",
  /** Physical pin 25: DGND; power_in. */
  "DGND": "25",
  /** Physical pin 26: ADC_SDATA/GPIO1; bidirectional. */
  "ADC_SDATA/GPIO1": "26",
  /** Physical pin 27: DAC_SDATA/GPIO0; bidirectional. */
  "DAC_SDATA/GPIO0": "27",
  /** Physical pin 28: BCLK/GPIO2; bidirectional. */
  "BCLK/GPIO2": "28",
  /** Physical pin 29: LRCLK/GPIO3; bidirectional. */
  "LRCLK/GPIO3": "29",
  /** Physical pin 30: ADDR1/CDATA; input. */
  "ADDR1/CDATA": "30",
  /** Physical pin 31: SDA/COUT; bidirectional. */
  "SDA/COUT": "31",
  /** Physical pin 32: SCL/CCLK; input. */
  "SCL/CCLK": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
  override schema = "Audio:ADAU1761";
  override referencePrefix = "U";
}

/**
 * Quad Analog-to-Digital Converter, 2Vrms differential inputs, LFCSP-40
 *
 * KiCad symbol: `Audio:ADAU1978xBCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*6x6mm*P0.5mm*EP3.9x3.9mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1978.pdf
 * Keywords: Audio ADC I2S TDM.
 * Default footprint: Package_CSP:LFCSP-40-1EP_6x6mm_P0.5mm_EP3.9x3.9mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1978xBCP extends Component.withPins({
  /** Physical pin 1: AGND; power_in. */
  "AGND_1": "1",
  /** Physical pin 2: VREF; output. */
  "VREF": "2",
  /** Physical pin 3: PLL_FILT; output. */
  "PLL_FILT": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD_4": "4",
  /** Physical pin 5: AGND; passive. */
  "AGND_5": "5",
  /** Physical pin 6: ~{PD}/~{RST}; input. */
  "~{PD}/~{RST}": "6",
  /** Physical pin 7: MCLKIN; input. */
  "MCLKIN": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: SA_MODE; input. */
  "SA_MODE": "9",
  /** Physical pin 10: DVDD; power_out. */
  "DVDD": "10",
  /** Physical pin 11: DGND; power_in. */
  "DGND": "11",
  /** Physical pin 12: IOVDD; power_in. */
  "IOVDD": "12",
  /** Physical pin 13: SDATAOUT1; output. */
  "SDATAOUT1": "13",
  /** Physical pin 14: SDATAOUT2; output. */
  "SDATAOUT2": "14",
  /** Physical pin 15: LRCLK; bidirectional. */
  "LRCLK": "15",
  /** Physical pin 16: BCLK; bidirectional. */
  "BCLK": "16",
  /** Physical pin 17: SDA; bidirectional. */
  "SDA": "17",
  /** Physical pin 18: SCL; input. */
  "SCL": "18",
  /** Physical pin 19: ADDR0; input. */
  "ADDR0": "19",
  /** Physical pin 20: ADDR1; input. */
  "ADDR1": "20",
  /** Physical pin 21: AGND; passive. */
  "AGND_21": "21",
  /** Physical pin 22: AGND; passive. */
  "AGND_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
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
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: AVDD; passive. */
  "AVDD_31": "31",
  /** Physical pin 32: AIN1N; input. */
  "AIN1N": "32",
  /** Physical pin 33: AIN1P; input. */
  "AIN1P": "33",
  /** Physical pin 34: AIN2N; input. */
  "AIN2N": "34",
  /** Physical pin 35: AIN2P; input. */
  "AIN2P": "35",
  /** Physical pin 36: AIN3N; input. */
  "AIN3N": "36",
  /** Physical pin 37: AIN3P; input. */
  "AIN3P": "37",
  /** Physical pin 38: AIN4N; input. */
  "AIN4N": "38",
  /** Physical pin 39: AIN4P; input. */
  "AIN4P": "39",
  /** Physical pin 40: AVDD; passive. */
  "AVDD_40": "40",
  /** Physical pin 41: EP; power_in. */
  "EP": "41",
}) {
  override schema = "Audio:ADAU1978xBCP";
  override referencePrefix = "U";
}

/**
 * Quad Analog-to-Digital Converter, 4.5Vrms differential inputs, LFCSP-40
 *
 * KiCad symbol: `Audio:ADAU1979xBCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*6x6mm*P0.5mm*EP3.9x3.9mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADAU1979.pdf
 * Keywords: Audio ADC I2S TDM.
 * Default footprint: Package_CSP:LFCSP-40-1EP_6x6mm_P0.5mm_EP3.9x3.9mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADAU1979xBCP extends Component.withPins({
  /** Physical pin 1: AGND; power_in. */
  "AGND_1": "1",
  /** Physical pin 2: VREF; output. */
  "VREF": "2",
  /** Physical pin 3: PLL_FILT; output. */
  "PLL_FILT": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD_4": "4",
  /** Physical pin 5: AGND; passive. */
  "AGND_5": "5",
  /** Physical pin 6: ~{PD}/~{RST}; input. */
  "~{PD}/~{RST}": "6",
  /** Physical pin 7: MCLKIN; input. */
  "MCLKIN": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: SA_MODE; input. */
  "SA_MODE": "9",
  /** Physical pin 10: DVDD; power_out. */
  "DVDD": "10",
  /** Physical pin 11: DGND; power_in. */
  "DGND": "11",
  /** Physical pin 12: IOVDD; power_in. */
  "IOVDD": "12",
  /** Physical pin 13: SDATAOUT1; output. */
  "SDATAOUT1": "13",
  /** Physical pin 14: SDATAOUT2; output. */
  "SDATAOUT2": "14",
  /** Physical pin 15: LRCLK; bidirectional. */
  "LRCLK": "15",
  /** Physical pin 16: BCLK; bidirectional. */
  "BCLK": "16",
  /** Physical pin 17: SDA; bidirectional. */
  "SDA": "17",
  /** Physical pin 18: SCL; input. */
  "SCL": "18",
  /** Physical pin 19: ADDR0; input. */
  "ADDR0": "19",
  /** Physical pin 20: ADDR1; input. */
  "ADDR1": "20",
  /** Physical pin 21: AGND; passive. */
  "AGND_21": "21",
  /** Physical pin 22: AGND; passive. */
  "AGND_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
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
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: AVDD; passive. */
  "AVDD_31": "31",
  /** Physical pin 32: AIN1N; input. */
  "AIN1N": "32",
  /** Physical pin 33: AIN1P; input. */
  "AIN1P": "33",
  /** Physical pin 34: AIN2N; input. */
  "AIN2N": "34",
  /** Physical pin 35: AIN2P; input. */
  "AIN2P": "35",
  /** Physical pin 36: AIN3N; input. */
  "AIN3N": "36",
  /** Physical pin 37: AIN3P; input. */
  "AIN3P": "37",
  /** Physical pin 38: AIN4N; input. */
  "AIN4N": "38",
  /** Physical pin 39: AIN4P; input. */
  "AIN4P": "39",
  /** Physical pin 40: AVDD; passive. */
  "AVDD_40": "40",
  /** Physical pin 41: EP; power_in. */
  "EP": "41",
}) {
  override schema = "Audio:ADAU1979xBCP";
  override referencePrefix = "U";
}

/**
 * Enhanced Dual Bit Sigma-Delta 24Bit ADC, SOIC-28
 *
 * KiCad symbol: `Audio:AK5392VS`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x18.7mm*P1.27mm*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/AKM%20Semiconductor%20Inc.%20PDFs/AK5392.pdf
 * Keywords: audio adc 2ch 24bit.
 * Default footprint: Package_SO:SOIC-28W_7.5x18.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AK5392VS extends Component.withPins({
  /** Physical pin 1: VREFL; output. */
  "VREFL": "1",
  /** Physical pin 2: GNDL; power_in. */
  "GNDL": "2",
  /** Physical pin 3: VCOML; output. */
  "VCOML": "3",
  /** Physical pin 4: AINL+; input. */
  "AINL+": "4",
  /** Physical pin 5: AINL-; input. */
  "AINL-": "5",
  /** Physical pin 6: ZCAL; input. */
  "ZCAL": "6",
  /** Physical pin 7: VD; power_in. */
  "VD": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: CAL; output. */
  "CAL": "9",
  /** Physical pin 10: ~{RST}; input. */
  "~{RST}": "10",
  /** Physical pin 11: SMODE2; input. */
  "SMODE2": "11",
  /** Physical pin 12: SMODE1; input. */
  "SMODE1": "12",
  /** Physical pin 13: LRCK; bidirectional. */
  "LRCK": "13",
  /** Physical pin 14: SCLK; bidirectional. */
  "SCLK": "14",
  /** Physical pin 15: SDATA; output. */
  "SDATA": "15",
  /** Physical pin 16: FSYNC; bidirectional. */
  "FSYNC": "16",
  /** Physical pin 17: CLK; input. */
  "CLK": "17",
  /** Physical pin 18: CMODE; input. */
  "CMODE": "18",
  /** Physical pin 19: HPFE; input. */
  "HPFE": "19",
  /** Physical pin 20: TEST; input. */
  "TEST": "20",
  /** Physical pin 21: BGND; power_in. */
  "BGND": "21",
  /** Physical pin 22: AGND; power_in. */
  "AGND": "22",
  /** Physical pin 23: VA; power_in. */
  "VA": "23",
  /** Physical pin 24: AINR-; input. */
  "AINR-": "24",
  /** Physical pin 25: AINR+; input. */
  "AINR+": "25",
  /** Physical pin 26: VCOMR; output. */
  "VCOMR": "26",
  /** Physical pin 27: GNDR; output. */
  "GNDR": "27",
  /** Physical pin 28: VREFR; output. */
  "VREFR": "28",
}) {
  override schema = "Audio:AK5392VS";
  override referencePrefix = "U";
}

/**
 * Enhanced Dual Bit Sigma-Delta 96kHz 24-Bit ADC, SOIC-28
 *
 * KiCad symbol: `Audio:AK5393VS`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x18.7mm*P1.27mm*.
 * @see https://www.akm.com/akm/en/file/datasheet/AK5393VS.pdf
 * Keywords: audio adc 2ch 24bit 96kHz.
 * Default footprint: Package_SO:SOIC-28W_7.5x18.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AK5393VS extends Component.withPins({
  /** Physical pin 1: VREFL; output. */
  "VREFL": "1",
  /** Physical pin 2: GNDL; power_in. */
  "GNDL": "2",
  /** Physical pin 3: VCOML; output. */
  "VCOML": "3",
  /** Physical pin 4: AINL+; input. */
  "AINL+": "4",
  /** Physical pin 5: AINL-; input. */
  "AINL-": "5",
  /** Physical pin 6: ZCAL; input. */
  "ZCAL": "6",
  /** Physical pin 7: VD; power_in. */
  "VD": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: CAL; output. */
  "CAL": "9",
  /** Physical pin 10: ~{RST}; input. */
  "~{RST}": "10",
  /** Physical pin 11: SMODE2; input. */
  "SMODE2": "11",
  /** Physical pin 12: SMODE1; input. */
  "SMODE1": "12",
  /** Physical pin 13: LRCK; bidirectional. */
  "LRCK": "13",
  /** Physical pin 14: SCLK; bidirectional. */
  "SCLK": "14",
  /** Physical pin 15: SDATA; output. */
  "SDATA": "15",
  /** Physical pin 16: FSYNC; bidirectional. */
  "FSYNC": "16",
  /** Physical pin 17: MCLK; input. */
  "MCLK": "17",
  /** Physical pin 18: DFS; input. */
  "DFS": "18",
  /** Physical pin 19: HPFE; input. */
  "HPFE": "19",
  /** Physical pin 20: TEST; input. */
  "TEST": "20",
  /** Physical pin 21: BGND; power_in. */
  "BGND": "21",
  /** Physical pin 22: AGND; power_in. */
  "AGND": "22",
  /** Physical pin 23: VA; power_in. */
  "VA": "23",
  /** Physical pin 24: AINR-; input. */
  "AINR-": "24",
  /** Physical pin 25: AINR+; input. */
  "AINR+": "25",
  /** Physical pin 26: VCOMR; output. */
  "VCOMR": "26",
  /** Physical pin 27: GNDR; output. */
  "GNDR": "27",
  /** Physical pin 28: VREFR; output. */
  "VREFR": "28",
}) {
  override schema = "Audio:AK5393VS";
  override referencePrefix = "U";
}

/**
 * Super High Performance 192kHz 24-Bit Sigma-Delta ADC, SOIC-28
 *
 * KiCad symbol: `Audio:AK5394AVS`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x18.7mm*P1.27mm*.
 * @see http://www.akm.com/akm/en/file/datasheet/AK5394AVS.pdf
 * Keywords: audio adc 2ch 24bit 192kHz.
 * Default footprint: Package_SO:SOIC-28W_7.5x18.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AK5394AVS extends Component.withPins({
  /** Physical pin 1: VREFL+; output. */
  "VREFL+": "1",
  /** Physical pin 2: VREFL-; output. */
  "VREFL-": "2",
  /** Physical pin 3: VCOML; output. */
  "VCOML": "3",
  /** Physical pin 4: AINL+; input. */
  "AINL+": "4",
  /** Physical pin 5: AINL-; input. */
  "AINL-": "5",
  /** Physical pin 6: ZCAL; input. */
  "ZCAL": "6",
  /** Physical pin 7: VD; power_in. */
  "VD": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: CAL; output. */
  "CAL": "9",
  /** Physical pin 10: ~{RST}; input. */
  "~{RST}": "10",
  /** Physical pin 11: SMODE2; input. */
  "SMODE2": "11",
  /** Physical pin 12: SMODE1; input. */
  "SMODE1": "12",
  /** Physical pin 13: LRCK; bidirectional. */
  "LRCK": "13",
  /** Physical pin 14: SCLK; bidirectional. */
  "SCLK": "14",
  /** Physical pin 15: SDATA; output. */
  "SDATA": "15",
  /** Physical pin 16: FSYNC; bidirectional. */
  "FSYNC": "16",
  /** Physical pin 17: MCLK; input. */
  "MCLK": "17",
  /** Physical pin 18: DFS0; input. */
  "DFS0": "18",
  /** Physical pin 19: HPFE; input. */
  "HPFE": "19",
  /** Physical pin 20: DFS1; input. */
  "DFS1": "20",
  /** Physical pin 21: BGND; power_in. */
  "BGND": "21",
  /** Physical pin 22: AGND; power_in. */
  "AGND": "22",
  /** Physical pin 23: VA; power_in. */
  "VA": "23",
  /** Physical pin 24: AINR-; input. */
  "AINR-": "24",
  /** Physical pin 25: AINR+; input. */
  "AINR+": "25",
  /** Physical pin 26: VCOMR; output. */
  "VCOMR": "26",
  /** Physical pin 27: VREFR-; output. */
  "VREFR-": "27",
  /** Physical pin 28: VREFR+; output. */
  "VREFR+": "28",
}) {
  override schema = "Audio:AK5394AVS";
  override referencePrefix = "U";
}

/**
 * Stereo, 96kHz, 24-Bit, Delta-Sigma ADC, TSSOP-16
 *
 * KiCad symbol: `Audio:AK5720VT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.akm.com/akm/en/file/datasheet/AK5720VT.pdf
 * Keywords: audio adc 2ch 24bit 96kHz I2S MSB TDM.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AK5720VT extends Component.withPins({
  /** Physical pin 1: VCOM; passive. */
  "VCOM": "1",
  /** Physical pin 2: RIN; input. */
  "RIN": "2",
  /** Physical pin 3: LIN; input. */
  "LIN": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: VA; power_in. */
  "VA": "5",
  /** Physical pin 6: VD; power_in. */
  "VD": "6",
  /** Physical pin 7: GSEL; input. */
  "GSEL": "7",
  /** Physical pin 8: REGO; passive. */
  "REGO": "8",
  /** Physical pin 9: SDTO; output. */
  "SDTO": "9",
  /** Physical pin 10: LRCLK; bidirectional. */
  "LRCLK": "10",
  /** Physical pin 11: MCLK; input. */
  "MCLK": "11",
  /** Physical pin 12: BICK; bidirectional. */
  "BICK": "12",
  /** Physical pin 13: ~{PDN}; input. */
  "~{PDN}": "13",
  /** Physical pin 14: DIF/TDMI; input. */
  "DIF/TDMI": "14",
  /** Physical pin 15: FSEL; input. */
  "FSEL": "15",
  /** Physical pin 16: CKS; input. */
  "CKS": "16",
}) {
  override schema = "Audio:AK5720VT";
  override referencePrefix = "U";
}

/**
 * 24bit 2ch ADC + 24bit 4ch DAC with Audio DSP, LQFP-48
 *
 * KiCad symbol: `Audio:AK7742EQ`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.akm.com/akm/en/file/datasheet/AK7742EQ.pdf
 * Keywords: audio adc 2ch dac 4ch dsp.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AK7742EQ extends Component.withPins({
  /** Physical pin 1: AIN3L; input. */
  "AIN3L": "1",
  /** Physical pin 2: AIN2R; input. */
  "AIN2R": "2",
  /** Physical pin 3: AIN2L; input. */
  "AIN2L": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD_4": "4",
  /** Physical pin 5: VSS1; power_in. */
  "VSS1_5": "5",
  /** Physical pin 6: LFLT; passive. */
  "LFLT": "6",
  /** Physical pin 7: TEST1; passive. */
  "TEST1": "7",
  /** Physical pin 8: CKM2; input. */
  "CKM2": "8",
  /** Physical pin 9: DVDD; power_in. */
  "DVDD_9": "9",
  /** Physical pin 10: VSS2; power_in. */
  "VSS2_10": "10",
  /** Physical pin 11: XTI; input. */
  "XTI": "11",
  /** Physical pin 12: XTO; output. */
  "XTO": "12",
  /** Physical pin 13: SDOUT1; output. */
  "SDOUT1": "13",
  /** Physical pin 14: SDIN1/JX1; input. */
  "SDIN1/JX1": "14",
  /** Physical pin 15: SDIN2/JX2; input. */
  "SDIN2/JX2": "15",
  /** Physical pin 16: CKM1; input. */
  "CKM1": "16",
  /** Physical pin 17: CKM0; input. */
  "CKM0": "17",
  /** Physical pin 18: ~{IRESET}; input. */
  "~{IRESET}": "18",
  /** Physical pin 19: I2CSEL; input. */
  "I2CSEL": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD_20": "20",
  /** Physical pin 21: VSS2; passive. */
  "VSS2_21": "21",
  /** Physical pin 22: LRCK; bidirectional. */
  "LRCK": "22",
  /** Physical pin 23: BICK; bidirectional. */
  "BICK": "23",
  /** Physical pin 24: CLKO/SDOUT3; output. */
  "CLKO/SDOUT3": "24",
  /** Physical pin 25: SO/RDY/GPO/SDOUT2; output. */
  "SO/RDY/GPO/SDOUT2": "25",
  /** Physical pin 26: SDA; bidirectional. */
  "SDA": "26",
  /** Physical pin 27: SCL; input. */
  "SCL": "27",
  /** Physical pin 28: CAD0; input. */
  "CAD0": "28",
  /** Physical pin 29: CAD1; input. */
  "CAD1": "29",
  /** Physical pin 30: VSS1; passive. */
  "VSS1_30": "30",
  /** Physical pin 31: AVDRV; passive. */
  "AVDRV": "31",
  /** Physical pin 32: AVDD; power_in. */
  "AVDD_32": "32",
  /** Physical pin 33: AOUT2RN; output. */
  "AOUT2RN": "33",
  /** Physical pin 34: AOUT2RP; output. */
  "AOUT2RP": "34",
  /** Physical pin 35: AOUT2LN; output. */
  "AOUT2LN": "35",
  /** Physical pin 36: AOUT2LP; output. */
  "AOUT2LP": "36",
  /** Physical pin 37: AOUT1RN; output. */
  "AOUT1RN": "37",
  /** Physical pin 38: AOUT1RP; output. */
  "AOUT1RP": "38",
  /** Physical pin 39: AOUT1LN; output. */
  "AOUT1LN": "39",
  /** Physical pin 40: AOUT1LP; output. */
  "AOUT1LP": "40",
  /** Physical pin 41: VSS1; passive. */
  "VSS1_41": "41",
  /** Physical pin 42: VCOM; passive. */
  "VCOM": "42",
  /** Physical pin 43: AVDD; power_in. */
  "AVDD_43": "43",
  /** Physical pin 44: AIN1RN; input. */
  "AIN1RN": "44",
  /** Physical pin 45: AIN1RP; input. */
  "AIN1RP": "45",
  /** Physical pin 46: AIN1LN; input. */
  "AIN1LN": "46",
  /** Physical pin 47: AIN1LP; input. */
  "AIN1LP": "47",
  /** Physical pin 48: AIN3R; input. */
  "AIN3R": "48",
}) {
  override schema = "Audio:AK7742EQ";
  override referencePrefix = "U";
}

/**
 * ADSR Voltage Controlled Envelope Generator, DIP-16/SOIC-16
 *
 * KiCad symbol: `Audio:AS3310`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3310.pdf
 * Keywords: VCEG CEM3310 ALFA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3310 extends Component.withPins({
  /** Physical pin 1: CAP; passive. */
  "CAP": "1",
  /** Physical pin 2: ENVOUT; output. */
  "ENVOUT": "2",
  /** Physical pin 3: VP; input. */
  "VP": "3",
  /** Physical pin 4: GATE; input. */
  "GATE": "4",
  /** Physical pin 5: TRIG; input. */
  "TRIG": "5",
  /** Physical pin 6: VEE; power_in. */
  "VEE": "6",
  /** Physical pin 7: PGND; power_in. */
  "PGND": "7",
  /** Physical pin 8: CCOMP; passive. */
  "CCOMP": "8",
  /** Physical pin 9: VCS; input. */
  "VCS": "9",
  /** Physical pin 10: IIN; input. */
  "IIN": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: VCD; input. */
  "VCD": "12",
  /** Physical pin 13: VCR; input. */
  "VCR": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: VCA; input. */
  "VCA": "15",
  /** Physical pin 16: ATKOUT; output. */
  "ATKOUT": "16",
}) {
  override schema = "Audio:AS3310";
  override referencePrefix = "U";
}

/**
 * Voltage Controlled Filter (VCF), DIP-18
 *
 * KiCad symbol: `Audio:AS3320`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3320.pdf
 * Keywords: VCF CEM3320 ALFA.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3320 extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN2; input. */
  "IN2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CAP2; passive. */
  "CAP2": "4",
  /** Physical pin 5: CAP1; passive. */
  "CAP1": "5",
  /** Physical pin 6: OUT2; output. */
  "OUT2": "6",
  /** Physical pin 7: OUT1; output. */
  "OUT1": "7",
  /** Physical pin 8: VRES; input. */
  "VRES": "8",
  /** Physical pin 9: IRES; input. */
  "IRES": "9",
  /** Physical pin 10: OUT4; output. */
  "OUT4": "10",
  /** Physical pin 11: CAP4; passive. */
  "CAP4": "11",
  /** Physical pin 12: VCFI; input. */
  "VCFI": "12",
  /** Physical pin 13: VEE; power_in. */
  "VEE": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: OUT3; output. */
  "OUT3": "15",
  /** Physical pin 16: CAP3; passive. */
  "CAP3": "16",
  /** Physical pin 17: IN3; input. */
  "IN3": "17",
  /** Physical pin 18: IN4; input. */
  "IN4": "18",
}) {
  override schema = "Audio:AS3320";
  override referencePrefix = "U";
}

/**
 * Voltage Controlled Filter (VCF), QFN-24
 *
 * KiCad symbol: `Audio:AS3320F`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3320.pdf
 * Keywords: VCF CEM3320 ALFA.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3320F extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IN3; input. */
  "IN3": "2",
  /** Physical pin 3: IN4; input. */
  "IN4": "3",
  /** Physical pin 4: IN1; input. */
  "IN1": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: CAP2; passive. */
  "CAP2": "8",
  /** Physical pin 9: CAP1; passive. */
  "CAP1": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: OUT2; output. */
  "OUT2": "11",
  /** Physical pin 12: OUT1; output. */
  "OUT1": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VRES; input. */
  "VRES": "14",
  /** Physical pin 15: IRES; input. */
  "IRES": "15",
  /** Physical pin 16: OUT4; output. */
  "OUT4": "16",
  /** Physical pin 17: CAP4; passive. */
  "CAP4": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: VCFI; input. */
  "VCFI": "19",
  /** Physical pin 20: VEE; power_in. */
  "VEE": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: VCC; power_in. */
  "VCC": "22",
  /** Physical pin 23: OUT3; output. */
  "OUT3": "23",
  /** Physical pin 24: CAP3; passive. */
  "CAP3": "24",
}) {
  override schema = "Audio:AS3320F";
  override referencePrefix = "U";
}

/**
 * Dual Voltage Controlled Amplifier (VCA), DIP-18
 *
 * KiCad symbol: `Audio:AS3330`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3330.pdf
 * Keywords: VCA CEM3330 ALFA.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3330 extends Component.withPins({
  /** Physical pin 5: VEE; power_in. */
  "VEE": "5",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
  /** Physical pin 18: GND; power_in. */
  "GND": "18",
  /** Physical pin 1: OUT1; output. */
  "OUT1": "1",
  /** Physical pin 2: VG1; input. */
  "VG1": "2",
  /** Physical pin 3: DTRIM1; passive. */
  "DTRIM1": "3",
  /** Physical pin 4: IN1; input. */
  "IN1": "4",
  /** Physical pin 6: VCE1; input. */
  "VCE1": "6",
  /** Physical pin 7: VCL1; input. */
  "VCL1": "7",
  /** Physical pin 8: IDLE; passive. */
  "IDLE": "8",
  /** Physical pin 9: CCOMP1; passive. */
  "CCOMP1": "9",
  /** Physical pin 11: CCOMP2; passive. */
  "CCOMP2": "11",
  /** Physical pin 12: VCL2; input. */
  "VCL2": "12",
  /** Physical pin 13: IN2; input. */
  "IN2": "13",
  /** Physical pin 14: VCE2; input. */
  "VCE2": "14",
  /** Physical pin 15: VG2; input. */
  "VG2": "15",
  /** Physical pin 16: OUT2; output. */
  "OUT2": "16",
  /** Physical pin 17: DTRIM2; passive. */
  "DTRIM2": "17",
}) {
  override schema = "Audio:AS3330";
  override referencePrefix = "U";
}

/**
 * Dual Voltage Controlled Amplifier (VCA), QFN-24
 *
 * KiCad symbol: `Audio:AS3330F`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3330.pdf
 * Keywords: VCA CEM3330 ALFA.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3330F extends Component.withPins({
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 9: VEE; power_in. */
  "VEE": "9",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 4: OUT1; output. */
  "OUT1": "4",
  /** Physical pin 5: VG1; input. */
  "VG1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: DTRIM1; passive. */
  "DTRIM1": "7",
  /** Physical pin 8: IN1; input. */
  "IN1": "8",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VCE1; input. */
  "VCE1": "11",
  /** Physical pin 12: VCL1; input. */
  "VCL1": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: IDLE; passive. */
  "IDLE": "14",
  /** Physical pin 15: CCOMP1; passive. */
  "CCOMP1": "15",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 2: DTRIM2; passive. */
  "DTRIM2": "2",
  /** Physical pin 17: CCOMP2; passive. */
  "CCOMP2": "17",
  /** Physical pin 19: VCL2; input. */
  "VCL2": "19",
  /** Physical pin 20: IN2; input. */
  "IN2": "20",
  /** Physical pin 22: VCE2; input. */
  "VCE2": "22",
  /** Physical pin 23: VG2; input. */
  "VG2": "23",
  /** Physical pin 24: OUT2; output. */
  "OUT2": "24",
}) {
  override schema = "Audio:AS3330F";
  override referencePrefix = "U";
}

/**
 * Voltage Controlled Oscillator (VCO), DIP-16/SOIC-16
 *
 * KiCad symbol: `Audio:AS3340`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3340.pdf
 * Keywords: VCO CEM340 ALFA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3340 extends Component.withPins({
  /** Physical pin 1: SCALE1; input. */
  "SCALE1": "1",
  /** Physical pin 2: SCALE2; input. */
  "SCALE2": "2",
  /** Physical pin 3: VEE; power_in. */
  "VEE": "3",
  /** Physical pin 4: VP; output. */
  "VP": "4",
  /** Physical pin 5: VPWM; input. */
  "VPWM": "5",
  /** Physical pin 6: VHSI; input. */
  "VHSI": "6",
  /** Physical pin 7: VHFT; input. */
  "VHFT": "7",
  /** Physical pin 8: VSO; output. */
  "VSO": "8",
  /** Physical pin 9: VSSI; input. */
  "VSSI": "9",
  /** Physical pin 10: VTO; output. */
  "VTO": "10",
  /** Physical pin 11: CAP; passive. */
  "CAP": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: VLFI; input. */
  "VLFI": "13",
  /** Physical pin 14: VS; passive. */
  "VS": "14",
  /** Physical pin 15: VFCI; input. */
  "VFCI": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Audio:AS3340";
  override referencePrefix = "U";
}

/**
 * Voltage Controlled Oscillator (VCO), DIP-18
 *
 * KiCad symbol: `Audio:AS3345`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3340.pdf
 * Keywords: VCO CEM345 ALFA.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3345 extends Component.withPins({
  /** Physical pin 1: SCALE1; input. */
  "SCALE1": "1",
  /** Physical pin 2: SCALE2; input. */
  "SCALE2": "2",
  /** Physical pin 3: VEE; power_in. */
  "VEE": "3",
  /** Physical pin 4: VP; output. */
  "VP": "4",
  /** Physical pin 5: VPWM; input. */
  "VPWM": "5",
  /** Physical pin 6: VHSI; input. */
  "VHSI": "6",
  /** Physical pin 7: VMO; output. */
  "VMO": "7",
  /** Physical pin 8: VHFT; input. */
  "VHFT": "8",
  /** Physical pin 9: VSO; output. */
  "VSO": "9",
  /** Physical pin 10: VSSI; input. */
  "VSSI": "10",
  /** Physical pin 11: VTO; output. */
  "VTO": "11",
  /** Physical pin 12: CAP; passive. */
  "CAP": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 15: VLFI; input. */
  "VLFI": "15",
  /** Physical pin 16: VS; passive. */
  "VS": "16",
  /** Physical pin 17: VFCI; input. */
  "VFCI": "17",
  /** Physical pin 18: VCC; power_in. */
  "VCC": "18",
}) {
  override schema = "Audio:AS3345";
  override referencePrefix = "U";
}

/**
 * Voltage Controlled Oscillator (VCO), QFN-24
 *
 * KiCad symbol: `Audio:AS3345F`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3340.pdf
 * Keywords: VCO CEM345 ALFA.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3345F extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: VFCI; input. */
  "VFCI": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: SCALE1; input. */
  "SCALE1": "4",
  /** Physical pin 5: SCALE2; input. */
  "SCALE2": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VEE; power_in. */
  "VEE": "7",
  /** Physical pin 8: VP; output. */
  "VP": "8",
  /** Physical pin 9: VPWM; input. */
  "VPWM": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VHSI; input. */
  "VHSI": "11",
  /** Physical pin 12: VMO; output. */
  "VMO": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VHFT; input. */
  "VHFT": "14",
  /** Physical pin 15: VSO; output. */
  "VSO": "15",
  /** Physical pin 16: VSSI; input. */
  "VSSI": "16",
  /** Physical pin 17: VTO; output. */
  "VTO": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: CAP; passive. */
  "CAP": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: VLFI; input. */
  "VLFI": "23",
  /** Physical pin 24: VS; passive. */
  "VS": "24",
}) {
  override schema = "Audio:AS3345F";
  override referencePrefix = "U";
}

/**
 * Dual Voltage Controlled Amplifier (VCA), DIP-14/SOIC-14
 *
 * KiCad symbol: `Audio:AS3360`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS3360.pdf
 * Keywords: VCA CEM3360 ALFA.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3360 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 7: VEE; power_in. */
  "VEE": "7",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 2: IO1; output. */
  "IO1": "2",
  /** Physical pin 3: VE1; input. */
  "VE1": "3",
  /** Physical pin 4: VO1; output. */
  "VO1": "4",
  /** Physical pin 5: VC1; input. */
  "VC1": "5",
  /** Physical pin 6: II1; input. */
  "II1": "6",
  /** Physical pin 8: VREF; passive. */
  "VREF": "8",
  /** Physical pin 9: II2; input. */
  "II2": "9",
  /** Physical pin 10: VC2; input. */
  "VC2": "10",
  /** Physical pin 11: VO2; output. */
  "VO2": "11",
  /** Physical pin 12: VE2; input. */
  "VE2": "12",
  /** Physical pin 13: IO2; output. */
  "IO2": "13",
}) {
  override schema = "Audio:AS3360";
  override referencePrefix = "U";
}

/**
 * 104 dB, 24-Bit, 192 kHz Stereo Audio CODEC, LQFP-48
 *
 * KiCad symbol: `Audio:CS4245`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://d3uzseaevmutz1.cloudfront.net/pubs/proDatasheet/CS4245_F3.pdf
 * Keywords: audio codec 2ch 24bit 192kHz.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS4245 extends Component.withPins({
  /** Physical pin 1: SDA/CDOUT; bidirectional. */
  "SDA/CDOUT": "1",
  /** Physical pin 2: SCL/CCLK; input. */
  "SCL/CCLK": "2",
  /** Physical pin 3: AD0/~{CS}; input. */
  "AD0/~{CS}": "3",
  /** Physical pin 4: AD1/CDIN; input. */
  "AD1/CDIN": "4",
  /** Physical pin 5: VLC; input. */
  "VLC": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: AIN3A; input. */
  "AIN3A": "7",
  /** Physical pin 8: AIN3B; input. */
  "AIN3B": "8",
  /** Physical pin 9: AIN2A; input. */
  "AIN2A": "9",
  /** Physical pin 10: AIN2B; input. */
  "AIN2B": "10",
  /** Physical pin 11: AIN1A; input. */
  "AIN1A": "11",
  /** Physical pin 12: AIN1B; input. */
  "AIN1B": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND_13": "13",
  /** Physical pin 14: VA; power_in. */
  "VA_14": "14",
  /** Physical pin 15: AFILTA; output. */
  "AFILTA": "15",
  /** Physical pin 16: AFILTB; output. */
  "AFILTB": "16",
  /** Physical pin 17: VQ1; output. */
  "VQ1": "17",
  /** Physical pin 18: VQ2; output. */
  "VQ2": "18",
  /** Physical pin 19: FILT1+; output. */
  "FILT1+": "19",
  /** Physical pin 20: FILT2+; output. */
  "FILT2+": "20",
  /** Physical pin 21: AIN4A/MICIN1; input. */
  "AIN4A/MICIN1": "21",
  /** Physical pin 22: AIN4B/MICIN2; input. */
  "AIN4B/MICIN2": "22",
  /** Physical pin 23: AIN5A; input. */
  "AIN5A": "23",
  /** Physical pin 24: AIN5B; input. */
  "AIN5B": "24",
  /** Physical pin 25: MICBIAS; output. */
  "MICBIAS": "25",
  /** Physical pin 26: AIN6A; input. */
  "AIN6A": "26",
  /** Physical pin 27: AIN6B; input. */
  "AIN6B": "27",
  /** Physical pin 28: AUXOUTA; output. */
  "AUXOUTA": "28",
  /** Physical pin 29: AUXOUTB; output. */
  "AUXOUTB": "29",
  /** Physical pin 30: VA; power_in. */
  "VA_30": "30",
  /** Physical pin 31: AGND; passive. */
  "AGND_31": "31",
  /** Physical pin 32: AGND; passive. */
  "AGND_32": "32",
  /** Physical pin 33: AOUTA; output. */
  "AOUTA": "33",
  /** Physical pin 34: AOUTB; output. */
  "AOUTB": "34",
  /** Physical pin 35: ~{MUTEC}; output. */
  "~{MUTEC}": "35",
  /** Physical pin 36: VLS; power_in. */
  "VLS": "36",
  /** Physical pin 37: SDIN; input. */
  "SDIN": "37",
  /** Physical pin 38: SCLK2; bidirectional. */
  "SCLK2": "38",
  /** Physical pin 39: LRCK2; bidirectional. */
  "LRCK2": "39",
  /** Physical pin 40: MCLK2; input. */
  "MCLK2": "40",
  /** Physical pin 41: SDOUT; output. */
  "SDOUT": "41",
  /** Physical pin 42: SCLK1; bidirectional. */
  "SCLK1": "42",
  /** Physical pin 43: LRCK1; bidirectional. */
  "LRCK1": "43",
  /** Physical pin 44: MCLK1; input. */
  "MCLK1": "44",
  /** Physical pin 45: DGND; power_in. */
  "DGND": "45",
  /** Physical pin 46: VD; power_in. */
  "VD": "46",
  /** Physical pin 47: INT; output. */
  "INT": "47",
  /** Physical pin 48: OVFL; output. */
  "OVFL": "48",
}) {
  override schema = "Audio:CS4245";
  override referencePrefix = "U";
}

/**
 * 104 dB, 24-Bit, 192 kHz Stereo Audio CODEC, QFN-32
 *
 * KiCad symbol: `Audio:CS4265`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4265_F5.pdf
 * Keywords: Audio codec 24bit 192khz stereo.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS4265 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: VLC; input. */
  "VLC": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: VA; power_in. */
  "VA_5": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND_6": "6",
  /** Physical pin 7: AINA; input. */
  "AINA": "7",
  /** Physical pin 8: AINB; input. */
  "AINB": "8",
  /** Physical pin 9: SGND; power_in. */
  "SGND": "9",
  /** Physical pin 10: AFILTA; output. */
  "AFILTA": "10",
  /** Physical pin 11: AFILTB; output. */
  "AFILTB": "11",
  /** Physical pin 12: VQ; output. */
  "VQ": "12",
  /** Physical pin 13: FILT+; output. */
  "FILT+": "13",
  /** Physical pin 14: MICIN1; input. */
  "MICIN1": "14",
  /** Physical pin 15: MICIN2; input. */
  "MICIN2": "15",
  /** Physical pin 16: MICBIAS; output. */
  "MICBIAS": "16",
  /** Physical pin 17: VA; power_in. */
  "VA_17": "17",
  /** Physical pin 18: AGND; passive. */
  "AGND_18": "18",
  /** Physical pin 19: AOUTA; output. */
  "AOUTA": "19",
  /** Physical pin 20: AOUTB; output. */
  "AOUTB": "20",
  /** Physical pin 21: ~{MUTEC}; output. */
  "~{MUTEC}": "21",
  /** Physical pin 22: VLS; input. */
  "VLS": "22",
  /** Physical pin 23: TXSDIN; input. */
  "TXSDIN": "23",
  /** Physical pin 24: SDIN2; input. */
  "SDIN2": "24",
  /** Physical pin 25: SDIN1; input. */
  "SDIN1": "25",
  /** Physical pin 26: SDOUT; output. */
  "SDOUT": "26",
  /** Physical pin 27: SCLK; bidirectional. */
  "SCLK": "27",
  /** Physical pin 28: LRCK; bidirectional. */
  "LRCK": "28",
  /** Physical pin 29: MCLK; input. */
  "MCLK": "29",
  /** Physical pin 30: DGND; power_in. */
  "DGND": "30",
  /** Physical pin 31: VD; power_in. */
  "VD": "31",
  /** Physical pin 32: TXOUT; output. */
  "TXOUT": "32",
  /** Physical pin 33: AGND; passive. */
  "AGND_33": "33",
}) {
  override schema = "Audio:CS4265";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 192-kHz Stereo Audio CODEC, TSSOP-24
 *
 * KiCad symbol: `Audio:CS4270`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4270_F1.pdf
 * Keywords: Audio Codec.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS4270 extends Component.withPins({
  /** Physical pin 1: SDIN; input. */
  "SDIN": "1",
  /** Physical pin 2: LRCLK; bidirectional. */
  "LRCLK": "2",
  /** Physical pin 3: MCLK; input. */
  "MCLK": "3",
  /** Physical pin 4: SCLK; bidirectional. */
  "SCLK": "4",
  /** Physical pin 5: VD; power_in. */
  "VD": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND": "6",
  /** Physical pin 7: SDOUT; output. */
  "SDOUT": "7",
  /** Physical pin 8: VLC; power_in. */
  "VLC": "8",
  /** Physical pin 9: SDA/CDOUT/M1; bidirectional. */
  "SDA/CDOUT/M1": "9",
  /** Physical pin 10: SCL/CCLK/M0; input. */
  "SCL/CCLK/M0": "10",
  /** Physical pin 11: AD0/~{CS}/I2S/~{LJ}; input. */
  "AD0/~{CS}/I2S/~{LJ}": "11",
  /** Physical pin 12: AD1/CDIN/MDIV1; input. */
  "AD1/CDIN/MDIV1": "12",
  /** Physical pin 13: AD2/MDIV2; input. */
  "AD2/MDIV2": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: AINA; input. */
  "AINA": "15",
  /** Physical pin 16: AINB; input. */
  "AINB": "16",
  /** Physical pin 17: VQ; passive. */
  "VQ": "17",
  /** Physical pin 18: FIL+; passive. */
  "FIL+": "18",
  /** Physical pin 19: VA; power_in. */
  "VA": "19",
  /** Physical pin 20: AGND; power_in. */
  "AGND": "20",
  /** Physical pin 21: ~{MUTEA}; input. */
  "~{MUTEA}": "21",
  /** Physical pin 22: OUTA; output. */
  "OUTA": "22",
  /** Physical pin 23: OUTB; output. */
  "OUTB": "23",
  /** Physical pin 24: ~{MUTEB}; input. */
  "~{MUTEB}": "24",
}) {
  override schema = "Audio:CS4270";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 192 kHz Stereo Audio CODEC, TSSOP-28
 *
 * KiCad symbol: `Audio:CS4272`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4272_F1.pdf
 * Keywords: stereo 2ch audio codec i2s 24bit 192kHz.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS4272 extends Component.withPins({
  /** Physical pin 1: XT0; output. */
  "XT0": "1",
  /** Physical pin 2: XTI; input. */
  "XTI": "2",
  /** Physical pin 3: MCLK; bidirectional. */
  "MCLK": "3",
  /** Physical pin 4: LRCK; bidirectional. */
  "LRCK": "4",
  /** Physical pin 5: SCLK; bidirectional. */
  "SCLK": "5",
  /** Physical pin 6: SDOUT(M/~{S}); output. */
  "SDOUT(M/~{S})": "6",
  /** Physical pin 7: SDIN; input. */
  "SDIN": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: VD; power_in. */
  "VD": "9",
  /** Physical pin 10: VL; power_in. */
  "VL": "10",
  /** Physical pin 11: SCL/CCLK(M0); input. */
  "SCL/CCLK(M0)": "11",
  /** Physical pin 12: SDA/CDIN(M1); bidirectional. */
  "SDA/CDIN(M1)": "12",
  /** Physical pin 13: AD0/~{CS}(I2S/~{LJ}); input. */
  "AD0/~{CS}(I2S/~{LJ})": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: VCOM; output. */
  "VCOM": "15",
  /** Physical pin 16: AINA-; input. */
  "AINA-": "16",
  /** Physical pin 17: AINA+; input. */
  "AINA+": "17",
  /** Physical pin 18: AINB+; input. */
  "AINB+": "18",
  /** Physical pin 19: AINB-; input. */
  "AINB-": "19",
  /** Physical pin 20: VA; power_in. */
  "VA": "20",
  /** Physical pin 21: AGND; power_in. */
  "AGND": "21",
  /** Physical pin 22: FILT+; output. */
  "FILT+": "22",
  /** Physical pin 23: ~{AMUTEC}; output. */
  "~{AMUTEC}": "23",
  /** Physical pin 24: AOUTA-; output. */
  "AOUTA-": "24",
  /** Physical pin 25: AOUTA+; output. */
  "AOUTA+": "25",
  /** Physical pin 26: AOUTB+; output. */
  "AOUTB+": "26",
  /** Physical pin 27: AOUTB-; output. */
  "AOUTB-": "27",
  /** Physical pin 28: ~{BMUTEC}; output. */
  "~{BMUTEC}": "28",
}) {
  override schema = "Audio:CS4272";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 96kHz Stereo D/A Converter, SOIC-8
 *
 * KiCad symbol: `Audio:CS4334`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4334-5-8-9_F7.pdf
 * Keywords: stereo 2ch audio codec i2s 24bit 96kHz.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS4334 extends Component.withPins({
  /** Physical pin 1: SDATA; input. */
  "SDATA": "1",
  /** Physical pin 2: ~{DEM}/SCLK; input. */
  "~{DEM}/SCLK": "2",
  /** Physical pin 3: LRCK; input. */
  "LRCK": "3",
  /** Physical pin 4: MCLK; input. */
  "MCLK": "4",
  /** Physical pin 5: AOUTR; output. */
  "AOUTR": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND": "6",
  /** Physical pin 7: VA; power_in. */
  "VA": "7",
  /** Physical pin 8: AOUTL; output. */
  "AOUTL": "8",
}) {
  override schema = "Audio:CS4334";
  override referencePrefix = "U";
}

/**
 * 16 to 24-Bit, 192 kHz Stereo D/A Converter, I2S Audio Format, TSSOP-10
 *
 * KiCad symbol: `Audio:CS4344`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4344-45-48_F2.pdf
 * Keywords: stereo 2ch audio codec.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS4344 extends Component.withPins({
  /** Physical pin 1: SDIN; input. */
  "SDIN": "1",
  /** Physical pin 2: ~{DEM}/SCLK; input. */
  "~{DEM}/SCLK": "2",
  /** Physical pin 3: LRCK; input. */
  "LRCK": "3",
  /** Physical pin 4: MCLK; input. */
  "MCLK": "4",
  /** Physical pin 5: VQ; output. */
  "VQ": "5",
  /** Physical pin 6: FILT+; output. */
  "FILT+": "6",
  /** Physical pin 7: AOUTL; output. */
  "AOUTL": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VA; power_in. */
  "VA": "9",
  /** Physical pin 10: AOUTR; output. */
  "AOUTR": "10",
}) {
  override schema = "Audio:CS4344";
  override referencePrefix = "U";
}

/**
 * 16 to 24-Bit, 192 kHz Stereo D/A Converter, Left-Justified Audio Format, TSSOP-10
 *
 * KiCad symbol: `Audio:CS4345`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4344-45-48_F2.pdf
 * Keywords: stereo 2ch audio codec.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS4345 extends Component.withPins({
  /** Physical pin 1: SDIN; input. */
  "SDIN": "1",
  /** Physical pin 2: ~{DEM}/SCLK; input. */
  "~{DEM}/SCLK": "2",
  /** Physical pin 3: LRCK; input. */
  "LRCK": "3",
  /** Physical pin 4: MCLK; input. */
  "MCLK": "4",
  /** Physical pin 5: VQ; output. */
  "VQ": "5",
  /** Physical pin 6: FILT+; output. */
  "FILT+": "6",
  /** Physical pin 7: AOUTL; output. */
  "AOUTL": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VA; power_in. */
  "VA": "9",
  /** Physical pin 10: AOUTR; output. */
  "AOUTR": "10",
}) {
  override schema = "Audio:CS4345";
  override referencePrefix = "U";
}

/**
 * 16-Bit, 192 kHz Stereo D/A Converter, Right-Justified Audio Format, TSSOP-10
 *
 * KiCad symbol: `Audio:CS4348`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4344-45-48_F2.pdf
 * Keywords: stereo 2ch audio codec.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS4348 extends Component.withPins({
  /** Physical pin 1: SDIN; input. */
  "SDIN": "1",
  /** Physical pin 2: ~{DEM}/SCLK; input. */
  "~{DEM}/SCLK": "2",
  /** Physical pin 3: LRCK; input. */
  "LRCK": "3",
  /** Physical pin 4: MCLK; input. */
  "MCLK": "4",
  /** Physical pin 5: VQ; output. */
  "VQ": "5",
  /** Physical pin 6: FILT+; output. */
  "FILT+": "6",
  /** Physical pin 7: AOUTL; output. */
  "AOUTL": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: VA; power_in. */
  "VA": "9",
  /** Physical pin 10: AOUTR; output. */
  "AOUTR": "10",
}) {
  override schema = "Audio:CS4348";
  override referencePrefix = "U";
}

/**
 * Low-Power, Stereo Digital-to-Analog Converter, QFN-32
 *
 * KiCad symbol: `Audio:CS43L21`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see https://d3uzseaevmutz1.cloudfront.net/pubs/proDatasheet/CS43L21_F1.pdf
 * Keywords: audio dac 2ch 24bit 96kHz.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS43L21 extends Component.withPins({
  /** Physical pin 1: LRCK; bidirectional. */
  "LRCK": "1",
  /** Physical pin 2: SDA/MCLKDIV2; bidirectional. */
  "SDA/MCLKDIV2": "2",
  /** Physical pin 3: SCL/CCLK/I2S/~{LJ}; input. */
  "SCL/CCLK/I2S/~{LJ}": "3",
  /** Physical pin 4: AD0/~{CS}/DEM; input. */
  "AD0/~{CS}/DEM": "4",
  /** Physical pin 5: VA_HP; input. */
  "VA_HP": "5",
  /** Physical pin 6: FLYP; input. */
  "FLYP": "6",
  /** Physical pin 7: GND_HP; input. */
  "GND_HP": "7",
  /** Physical pin 8: FLYN; input. */
  "FLYN": "8",
  /** Physical pin 9: VSS_HP; output. */
  "VSS_HP": "9",
  /** Physical pin 10: AOUTB; output. */
  "AOUTB": "10",
  /** Physical pin 11: AOUTA; output. */
  "AOUTA": "11",
  /** Physical pin 12: VA; input. */
  "VA": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND_13": "13",
  /** Physical pin 14: FILT+; output. */
  "FILT+": "14",
  /** Physical pin 15: VQ; output. */
  "VQ": "15",
  /** Physical pin 16: NIC; no_connect. */
  "NIC": "16",
  /** Physical pin 17: TSTO; no_connect. */
  "TSTO_17": "17",
  /** Physical pin 18: TSTO; no_connect. */
  "TSTO_18": "18",
  /** Physical pin 19: TSTO; no_connect. */
  "TSTO_19": "19",
  /** Physical pin 20: TSTO; no_connect. */
  "TSTO_20": "20",
  /** Physical pin 21: TSTO; no_connect. */
  "TSTO_21": "21",
  /** Physical pin 22: TSTO; no_connect. */
  "TSTO_22": "22",
  /** Physical pin 23: TSTO; no_connect. */
  "TSTO_23": "23",
  /** Physical pin 24: TSTO; no_connect. */
  "TSTO_24": "24",
  /** Physical pin 25: ~{RESET}; input. */
  "~{RESET}": "25",
  /** Physical pin 26: VL; input. */
  "VL": "26",
  /** Physical pin 27: VD; power_in. */
  "VD": "27",
  /** Physical pin 28: DGND; power_in. */
  "DGND": "28",
  /** Physical pin 29: TESTO/M/~{S}; input. */
  "TESTO/M/~{S}": "29",
  /** Physical pin 30: MCLK; input. */
  "MCLK": "30",
  /** Physical pin 31: SCLK; input. */
  "SCLK": "31",
  /** Physical pin 32: SDIN; input. */
  "SDIN": "32",
  /** Physical pin 33: AGND; passive. */
  "AGND_33": "33",
}) {
  override schema = "Audio:CS43L21";
  override referencePrefix = "U";
}

/**
 * 98 dB, 96 kHz, 24bit Stereo Audio A/D Converter, I2S Audio Format, TSSOP-10
 *
 * KiCad symbol: `Audio:CS5343`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS5343-44_F5.pdf
 * Keywords: stereo 2ch audio codec.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS5343 extends Component.withPins({
  /** Physical pin 1: SDOUT; output. */
  "SDOUT": "1",
  /** Physical pin 2: SCLK; bidirectional. */
  "SCLK": "2",
  /** Physical pin 3: LRCK; bidirectional. */
  "LRCK": "3",
  /** Physical pin 4: MCLK; input. */
  "MCLK": "4",
  /** Physical pin 5: FILT+; output. */
  "FILT+": "5",
  /** Physical pin 6: AINL; input. */
  "AINL": "6",
  /** Physical pin 7: VQ; output. */
  "VQ": "7",
  /** Physical pin 8: AINR; input. */
  "AINR": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: VA; power_in. */
  "VA": "10",
}) {
  override schema = "Audio:CS5343";
  override referencePrefix = "U";
}

/**
 * 98 dB, 96 kHz, 24bit Stereo Audio A/D Converter, Left-Justified Audio Format, TSSOP-10
 *
 * KiCad symbol: `Audio:CS5344`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS5343-44_F5.pdf
 * Keywords: stereo 2ch audio codec.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS5344 extends Component.withPins({
  /** Physical pin 1: SDOUT; output. */
  "SDOUT": "1",
  /** Physical pin 2: SCLK; bidirectional. */
  "SCLK": "2",
  /** Physical pin 3: LRCK; bidirectional. */
  "LRCK": "3",
  /** Physical pin 4: MCLK; input. */
  "MCLK": "4",
  /** Physical pin 5: FILT+; output. */
  "FILT+": "5",
  /** Physical pin 6: AINL; input. */
  "AINL": "6",
  /** Physical pin 7: VQ; output. */
  "VQ": "7",
  /** Physical pin 8: AINR; input. */
  "AINR": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: VA; power_in. */
  "VA": "10",
}) {
  override schema = "Audio:CS5344";
  override referencePrefix = "U";
}

/**
 * 114 dB, 192 kHz, Multi-Bit Audio A/D Converter, SOIC-24/TSSOP-24
 *
 * KiCad symbol: `Audio:CS5361`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://d3uzseaevmutz1.cloudfront.net/pubs/proDatasheet/CS5361_F2.pdf
 * Keywords: audio adc 2ch 24bit 192kHz.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS5361 extends Component.withPins({
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: M/~{S}; input. */
  "M/~{S}": "2",
  /** Physical pin 3: LRCK; bidirectional. */
  "LRCK": "3",
  /** Physical pin 4: SCLK; bidirectional. */
  "SCLK": "4",
  /** Physical pin 5: MCLK; input. */
  "MCLK": "5",
  /** Physical pin 6: VD; power_in. */
  "VD": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VL; power_in. */
  "VL": "8",
  /** Physical pin 9: SDOUT; output. */
  "SDOUT": "9",
  /** Physical pin 10: MDIV; input. */
  "MDIV": "10",
  /** Physical pin 11: ~{HPF}; input. */
  "~{HPF}": "11",
  /** Physical pin 12: I2S/~{LJ}; input. */
  "I2S/~{LJ}": "12",
  /** Physical pin 13: M0; input. */
  "M0": "13",
  /** Physical pin 14: M1; input. */
  "M1": "14",
  /** Physical pin 15: ~{OVFL}; input. */
  "~{OVFL}": "15",
  /** Physical pin 16: AINL+; input. */
  "AINL+": "16",
  /** Physical pin 17: AINL-; input. */
  "AINL-": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: VA; power_in. */
  "VA": "19",
  /** Physical pin 20: AINR-; input. */
  "AINR-": "20",
  /** Physical pin 21: AINR+; input. */
  "AINR+": "21",
  /** Physical pin 22: VQ; power_out. */
  "VQ": "22",
  /** Physical pin 23: REFGND; power_in. */
  "REFGND": "23",
  /** Physical pin 24: FILT+; power_out. */
  "FILT+": "24",
}) {
  override schema = "Audio:CS5361";
  override referencePrefix = "U";
}

/**
 * 192 kHz Digital Audio Interface Transmitter, SOIC-28/TSSOP-28
 *
 * KiCad symbol: `Audio:CS8406`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*, TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://d3uzseaevmutz1.cloudfront.net/pubs/proDatasheet/CS8406_F6.pdf
 * Keywords: audio digital interface transmitter 192kHz.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS8406 extends Component.withPins({
  /** Physical pin 6: VD; power_in. */
  "VD": "6",
  /** Physical pin 9: ~{RST}; input. */
  "~{RST}": "9",
  /** Physical pin 12: ILRCK; bidirectional. */
  "ILRCK": "12",
  /** Physical pin 13: ISCLK; bidirectional. */
  "ISCLK": "13",
  /** Physical pin 14: SDIN; input. */
  "SDIN": "14",
  /** Physical pin 21: OMCK; input. */
  "OMCK": "21",
  /** Physical pin 22: GND; power_in. */
  "GND": "22",
  /** Physical pin 23: VL; power_in. */
  "VL": "23",
  /** Physical pin 24: H/~{S}; input. */
  "H/~{S}": "24",
  /** Physical pin 25: TXN; output. */
  "TXN": "25",
  /** Physical pin 26: TXP; output. */
  "TXP": "26",
  /** Physical pin 1: SDA/CDOUT/COPY/C; bidirectional. */
  "SDA/CDOUT/COPY/C": "1",
  /** Physical pin 2: AD0/~{CS}/TEST; input. */
  "AD0/~{CS}/TEST": "2",
  /** Physical pin 3: AD2/~{EMPH}; input. */
  "AD2/~{EMPH}": "3",
  /** Physical pin 4: RXP/SFMT0; input. */
  "RXP/SFMT0": "4",
  /** Physical pin 5: TSTN/SFMT1; input. */
  "TSTN/SFMT1": "5",
  /** Physical pin 7: TEST; input. */
  "TEST_7": "7",
  /** Physical pin 8: TEST; input. */
  "TEST_8": "8",
  /** Physical pin 10: TEST/APMS; input. */
  "TEST/APMS": "10",
  /** Physical pin 11: TEST/TCBLD; input. */
  "TEST/TCBLD": "11",
  /** Physical pin 15: TCBL; bidirectional. */
  "TCBL": "15",
  /** Physical pin 16: TEST/CEN; input. */
  "TEST/CEN": "16",
  /** Physical pin 17: TEST/U; input. */
  "TEST/U": "17",
  /** Physical pin 18: TEST/V; input. */
  "TEST/V": "18",
  /** Physical pin 19: INT/~{AUDIO}; bidirectional. */
  "INT/~{AUDIO}": "19",
  /** Physical pin 20: U/HWCK0; input. */
  "U/HWCK0": "20",
  /** Physical pin 27: AD1/CDIN/HWCK1; input. */
  "AD1/CDIN/HWCK1": "27",
  /** Physical pin 28: SCL/CCLK/ORIG; input. */
  "SCL/CCLK/ORIG": "28",
}) {
  override schema = "Audio:CS8406";
  override referencePrefix = "U";
}

/**
 * 96 kHz Digital Audio Receiver, SOIC-28
 *
 * KiCad symbol: `Audio:CS8414`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://lampizator.eu/LAMPIZATOR/TRANSPORT/CS8414_receiver.pdf
 * Keywords: audio digital interface receiver.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS8414 extends Component.withPins({
  /** Physical pin 1: C; output. */
  "C": "1",
  /** Physical pin 2: CD/F1; output. */
  "CD/F1": "2",
  /** Physical pin 3: CC/F0; output. */
  "CC/F0": "3",
  /** Physical pin 4: CB/E2; output. */
  "CB/E2": "4",
  /** Physical pin 5: CA/E1; output. */
  "CA/E1": "5",
  /** Physical pin 6: C0/E0; output. */
  "C0/E0": "6",
  /** Physical pin 7: VD; power_in. */
  "VD": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: RXP; input. */
  "RXP": "9",
  /** Physical pin 10: RXN; input. */
  "RXN": "10",
  /** Physical pin 11: FSYNC; bidirectional. */
  "FSYNC": "11",
  /** Physical pin 12: SCK; bidirectional. */
  "SCK": "12",
  /** Physical pin 13: CS12/FCK; input. */
  "CS12/FCK": "13",
  /** Physical pin 14: U; output. */
  "U": "14",
  /** Physical pin 15: CBL; output. */
  "CBL": "15",
  /** Physical pin 16: SEL; input. */
  "SEL": "16",
  /** Physical pin 17: M3; input. */
  "M3": "17",
  /** Physical pin 18: M2; input. */
  "M2": "18",
  /** Physical pin 19: MCK; output. */
  "MCK": "19",
  /** Physical pin 20: FILT; input. */
  "FILT": "20",
  /** Physical pin 21: AGND; power_in. */
  "AGND": "21",
  /** Physical pin 22: VA; power_in. */
  "VA": "22",
  /** Physical pin 23: M0; input. */
  "M0": "23",
  /** Physical pin 24: M1; input. */
  "M1": "24",
  /** Physical pin 25: ERF; output. */
  "ERF": "25",
  /** Physical pin 26: SDATA; output. */
  "SDATA": "26",
  /** Physical pin 27: CE/F2; output. */
  "CE/F2": "27",
  /** Physical pin 28: VERF; output. */
  "VERF": "28",
}) {
  override schema = "Audio:CS8414";
  override referencePrefix = "U";
}

/**
 * 192 kHz Digital Audio Interface Receiver, QFN-28
 *
 * KiCad symbol: `Audio:CS8416-xNZ`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see https://d3uzseaevmutz1.cloudfront.net/pubs/proDatasheet/CS8416_F3.pdf
 * Keywords: audio digital interface receiver.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS8416_xNZ extends Component.withPins({
  /** Physical pin 1: RXP0; input. */
  "RXP0": "1",
  /** Physical pin 2: RXN; input. */
  "RXN": "2",
  /** Physical pin 3: VA; power_in. */
  "VA": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: FILT; passive. */
  "FILT": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: RXP4/RXSEL1; input. */
  "RXP4/RXSEL1": "7",
  /** Physical pin 8: RXP5/RXSEL0; input. */
  "RXP5/RXSEL0": "8",
  /** Physical pin 9: RXP6/TXSEL1; input. */
  "RXP6/TXSEL1": "9",
  /** Physical pin 10: RXP7/TXSEL0; input. */
  "RXP7/TXSEL0": "10",
  /** Physical pin 11: AD0/~{CS}/NV/RERR; input. */
  "AD0/~{CS}/NV/RERR": "11",
  /** Physical pin 12: AD1/CDIN/~{AUDIO}; input. */
  "AD1/CDIN/~{AUDIO}": "12",
  /** Physical pin 13: SCL/CCLK/96KHZ; input. */
  "SCL/CCLK/96KHZ": "13",
  /** Physical pin 14: SDA/CDOUT/RCBL; bidirectional. */
  "SDA/CDOUT/RCBL": "14",
  /** Physical pin 15: U/AD2/GPO2; output. */
  "U/AD2/GPO2": "15",
  /** Physical pin 16: C/GPO1; output. */
  "C/GPO1": "16",
  /** Physical pin 17: TX/GPO0; output. */
  "TX/GPO0": "17",
  /** Physical pin 18: VL; power_in. */
  "VL": "18",
  /** Physical pin 19: DGND; power_in. */
  "DGND": "19",
  /** Physical pin 20: VD; power_in. */
  "VD": "20",
  /** Physical pin 21: RMCK; output. */
  "RMCK": "21",
  /** Physical pin 22: OMCK; input. */
  "OMCK": "22",
  /** Physical pin 23: SDOUT; output. */
  "SDOUT": "23",
  /** Physical pin 24: OSCLK; bidirectional. */
  "OSCLK": "24",
  /** Physical pin 25: OLRCK; bidirectional. */
  "OLRCK": "25",
  /** Physical pin 26: RXP3; input. */
  "RXP3": "26",
  /** Physical pin 27: RXP2; input. */
  "RXP2": "27",
  /** Physical pin 28: RXP1; input. */
  "RXP1": "28",
  /** Physical pin 29: TP; power_in. */
  "TP": "29",
}) {
  override schema = "Audio:CS8416-xNZ";
  override referencePrefix = "U";
}

/**
 * 192 kHz Digital Audio Interface Receiver, SOIC-28
 *
 * KiCad symbol: `Audio:CS8416-xSZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*, TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://d3uzseaevmutz1.cloudfront.net/pubs/proDatasheet/CS8416_F3.pdf
 * Keywords: audio digital interface receiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS8416_xSZ extends Component.withPins({
  /** Physical pin 1: RXP3; input. */
  "RXP3": "1",
  /** Physical pin 2: RXP2; input. */
  "RXP2": "2",
  /** Physical pin 3: RXP1; input. */
  "RXP1": "3",
  /** Physical pin 4: RXP0; input. */
  "RXP0": "4",
  /** Physical pin 5: RXN; input. */
  "RXN": "5",
  /** Physical pin 6: VA; power_in. */
  "VA": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: FILT; passive. */
  "FILT": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: RXP4/RXSEL1; input. */
  "RXP4/RXSEL1": "10",
  /** Physical pin 11: RXP5/RXSEL0; input. */
  "RXP5/RXSEL0": "11",
  /** Physical pin 12: RXP6/TXSEL1; input. */
  "RXP6/TXSEL1": "12",
  /** Physical pin 13: RXP7/TXSEL0; input. */
  "RXP7/TXSEL0": "13",
  /** Physical pin 14: AD0/~{CS}/NV/RERR; input. */
  "AD0/~{CS}/NV/RERR": "14",
  /** Physical pin 15: AD1/CDIN/~{AUDIO}; input. */
  "AD1/CDIN/~{AUDIO}": "15",
  /** Physical pin 16: SCL/CCLK/96KHZ; input. */
  "SCL/CCLK/96KHZ": "16",
  /** Physical pin 17: SDA/CDOUT/RCBL; bidirectional. */
  "SDA/CDOUT/RCBL": "17",
  /** Physical pin 18: U/AD2/GPO2; output. */
  "U/AD2/GPO2": "18",
  /** Physical pin 19: C/GPO1; output. */
  "C/GPO1": "19",
  /** Physical pin 20: TX/GPO0; output. */
  "TX/GPO0": "20",
  /** Physical pin 21: VL; power_in. */
  "VL": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: VD; power_in. */
  "VD": "23",
  /** Physical pin 24: RMCK; output. */
  "RMCK": "24",
  /** Physical pin 25: OMCK; input. */
  "OMCK": "25",
  /** Physical pin 26: SDOUT; output. */
  "SDOUT": "26",
  /** Physical pin 27: OSCLK; bidirectional. */
  "OSCLK": "27",
  /** Physical pin 28: OLRCK; bidirectional. */
  "OLRCK": "28",
}) {
  override schema = "Audio:CS8416-xSZ";
  override referencePrefix = "U";
}

/**
 * 192 kHz Digital Audio Interface Receiver, TSSOP-28
 *
 * KiCad symbol: `Audio:CS8416-xZZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*, TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://d3uzseaevmutz1.cloudfront.net/pubs/proDatasheet/CS8416_F3.pdf
 * Keywords: audio digital interface receiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS8416_xZZ extends Component.withPins({
  /** Physical pin 1: RXP3; input. */
  "RXP3": "1",
  /** Physical pin 2: RXP2; input. */
  "RXP2": "2",
  /** Physical pin 3: RXP1; input. */
  "RXP1": "3",
  /** Physical pin 4: RXP0; input. */
  "RXP0": "4",
  /** Physical pin 5: RXN; input. */
  "RXN": "5",
  /** Physical pin 6: VA; power_in. */
  "VA": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: FILT; passive. */
  "FILT": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: RXP4/RXSEL1; input. */
  "RXP4/RXSEL1": "10",
  /** Physical pin 11: RXP5/RXSEL0; input. */
  "RXP5/RXSEL0": "11",
  /** Physical pin 12: RXP6/TXSEL1; input. */
  "RXP6/TXSEL1": "12",
  /** Physical pin 13: RXP7/TXSEL0; input. */
  "RXP7/TXSEL0": "13",
  /** Physical pin 14: AD0/~{CS}/NV/RERR; input. */
  "AD0/~{CS}/NV/RERR": "14",
  /** Physical pin 15: AD1/CDIN/~{AUDIO}; input. */
  "AD1/CDIN/~{AUDIO}": "15",
  /** Physical pin 16: SCL/CCLK/96KHZ; input. */
  "SCL/CCLK/96KHZ": "16",
  /** Physical pin 17: SDA/CDOUT/RCBL; bidirectional. */
  "SDA/CDOUT/RCBL": "17",
  /** Physical pin 18: U/AD2/GPO2; output. */
  "U/AD2/GPO2": "18",
  /** Physical pin 19: C/GPO1; output. */
  "C/GPO1": "19",
  /** Physical pin 20: TX/GPO0; output. */
  "TX/GPO0": "20",
  /** Physical pin 21: VL; power_in. */
  "VL": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: VD; power_in. */
  "VD": "23",
  /** Physical pin 24: RMCK; output. */
  "RMCK": "24",
  /** Physical pin 25: OMCK; input. */
  "OMCK": "25",
  /** Physical pin 26: SDOUT; output. */
  "SDOUT": "26",
  /** Physical pin 27: OSCLK; bidirectional. */
  "OSCLK": "27",
  /** Physical pin 28: OLRCK; bidirectional. */
  "OLRCK": "28",
}) {
  override schema = "Audio:CS8416-xZZ";
  override referencePrefix = "U";
}

/**
 * Digital Audio Sample Rate Converter, SOIC-28
 *
 * KiCad symbol: `Audio:CS8420`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://d3uzseaevmutz1.cloudfront.net/pubs/proDatasheet/CS8420_F4.pdf
 * Keywords: audio sample rate converter.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS8420 extends Component.withPins({
  /** Physical pin 1: SDA/CDOUT/COPY/C; bidirectional. */
  "SDA/CDOUT/COPY/C": "1",
  /** Physical pin 2: AD0/~{CS}/DFC0; input. */
  "AD0/~{CS}/DFC0": "2",
  /** Physical pin 3: ~{EMPH}/U/V; bidirectional. */
  "~{EMPH}/U/V": "3",
  /** Physical pin 4: RXP/SMFT0; input. */
  "RXP/SMFT0": "4",
  /** Physical pin 5: RXN/SMFT1; input. */
  "RXN/SMFT1": "5",
  /** Physical pin 6: VA+; power_in. */
  "VA+": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: FILT; passive. */
  "FILT": "8",
  /** Physical pin 9: ~{RST}; input. */
  "~{RST}": "9",
  /** Physical pin 10: RMCK/APMS; bidirectional. */
  "RMCK/APMS": "10",
  /** Physical pin 11: RERR/~{LOCK}/TBCLD; output. */
  "RERR/~{LOCK}/TBCLD": "11",
  /** Physical pin 12: ILRCK/TCBLD/RCBL; bidirectional. */
  "ILRCK/TCBLD/RCBL": "12",
  /** Physical pin 13: ISCLK/PRO/C; bidirectional. */
  "ISCLK/PRO/C": "13",
  /** Physical pin 14: SDIN/MUTE/CHS; input. */
  "SDIN/MUTE/CHS": "14",
  /** Physical pin 15: TCBL/NVERR; bidirectional. */
  "TCBL/NVERR": "15",
  /** Physical pin 16: OSCLK/CEN; bidirectional. */
  "OSCLK/CEN": "16",
  /** Physical pin 17: OLRCK/V; bidirectional. */
  "OLRCK/V": "17",
  /** Physical pin 18: SDOUT/U; bidirectional. */
  "SDOUT/U": "18",
  /** Physical pin 19: INT/~{AUDIO}/V/CUVEN; bidirectional. */
  "INT/~{AUDIO}/V/CUVEN": "19",
  /** Physical pin 20: U/S/~{AES}/PRO/C; bidirectional. */
  "U/S/~{AES}/PRO/C": "20",
  /** Physical pin 21: OMCK/APMS; input. */
  "OMCK/APMS": "21",
  /** Physical pin 22: DGND; power_in. */
  "DGND": "22",
  /** Physical pin 23: VD+; power_in. */
  "VD+": "23",
  /** Physical pin 24: H/~{S}; input. */
  "H/~{S}": "24",
  /** Physical pin 25: TXN/U; output. */
  "TXN/U": "25",
  /** Physical pin 26: TXP/C; output. */
  "TXP/C": "26",
  /** Physical pin 27: AD1/CDIN/DFC1; input. */
  "AD1/CDIN/DFC1": "27",
  /** Physical pin 28: SCL/CCLK/ORIG/U; bidirectional. */
  "SCL/CCLK/ORIG/U": "28",
}) {
  override schema = "Audio:CS8420";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 192-kHz Sampling, Advanced Segment, Audio Stereo Digital-to-Analog Converter, SW Control, SSOP-28
 *
 * KiCad symbol: `Audio:DSD1794A`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/dsd1794a.pdf
 * Keywords: audio dac 2ch 24bit 192kHz.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSD1794A extends Component.withPins({
  /** Physical pin 1: DSDL; bidirectional. */
  "DSDL": "1",
  /** Physical pin 2: DSDR; bidirectional. */
  "DSDR": "2",
  /** Physical pin 3: DBCK; input. */
  "DBCK": "3",
  /** Physical pin 4: PLRCK; input. */
  "PLRCK": "4",
  /** Physical pin 5: PDATA; input. */
  "PDATA": "5",
  /** Physical pin 6: PBK; input. */
  "PBK": "6",
  /** Physical pin 7: SCK; input. */
  "SCK": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: ADR0; input. */
  "ADR0": "10",
  /** Physical pin 11: ADR1; input. */
  "ADR1": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: VCC2R; power_in. */
  "VCC2R": "15",
  /** Physical pin 16: AGND3R; power_in. */
  "AGND3R": "16",
  /** Physical pin 17: IOUTR+; output. */
  "IOUTR+": "17",
  /** Physical pin 18: IOUTR-; output. */
  "IOUTR-": "18",
  /** Physical pin 19: AGND1; power_in. */
  "AGND1": "19",
  /** Physical pin 20: IREF; passive. */
  "IREF": "20",
  /** Physical pin 21: VCOMR; output. */
  "VCOMR": "21",
  /** Physical pin 22: VCOML; passive. */
  "VCOML": "22",
  /** Physical pin 23: VCC1; power_in. */
  "VCC1": "23",
  /** Physical pin 24: AGND2; power_in. */
  "AGND2": "24",
  /** Physical pin 25: IOUTL+; output. */
  "IOUTL+": "25",
  /** Physical pin 26: IOUTL-; output. */
  "IOUTL-": "26",
  /** Physical pin 27: AGND3L; power_in. */
  "AGND3L": "27",
  /** Physical pin 28: VCC2L; power_in. */
  "VCC2L": "28",
}) {
  override schema = "Audio:DSD1794A";
  override referencePrefix = "U";
}

/**
 * Low Power Stereo Audio CODEC With Headphone Amplifier, 24-bit, 8kHz - 96kHz ADC / DAC sampling frequency, 1.8V - 3.3V supply, WQFN-28
 *
 * KiCad symbol: `Audio:ES8388`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.45mm*EP2.6*x2.6*.
 * @see http://www.everest-semi.com/pdf/ES8388%20DS.pdf
 * Keywords: i2s 2ch i2c spi dsp pcm.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x4mm_P0.45mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ES8388 extends Component.withPins({
  /** Physical pin 1: MCLK; input. */
  "MCLK": "1",
  /** Physical pin 2: DVDD; power_in. */
  "DVDD": "2",
  /** Physical pin 3: PVDD; power_in. */
  "PVDD": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: SCLK; bidirectional. */
  "SCLK": "5",
  /** Physical pin 6: DSDIN; input. */
  "DSDIN": "6",
  /** Physical pin 7: LRCK; bidirectional. */
  "LRCK": "7",
  /** Physical pin 8: ASDOUT; output. */
  "ASDOUT": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: VREF; input. */
  "VREF": "10",
  /** Physical pin 11: ROUT1; output. */
  "ROUT1": "11",
  /** Physical pin 12: LOUT1; output. */
  "LOUT1": "12",
  /** Physical pin 13: HPGND; power_in. */
  "HPGND": "13",
  /** Physical pin 14: ROUT2; output. */
  "ROUT2": "14",
  /** Physical pin 15: LOUT2; output. */
  "LOUT2": "15",
  /** Physical pin 16: HPVDD; power_in. */
  "HPVDD": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: AGND; power_in. */
  "AGND": "18",
  /** Physical pin 19: ADCVREF; input. */
  "ADCVREF": "19",
  /** Physical pin 20: VMID; input. */
  "VMID": "20",
  /** Physical pin 21: RIN2; input. */
  "RIN2": "21",
  /** Physical pin 22: LIN2; input. */
  "LIN2": "22",
  /** Physical pin 23: RIN1; input. */
  "RIN1": "23",
  /** Physical pin 24: LIN1; input. */
  "LIN1": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: CE; input. */
  "CE": "26",
  /** Physical pin 27: CDATA; bidirectional. */
  "CDATA": "27",
  /** Physical pin 28: CCLK; input. */
  "CCLK": "28",
  /** Physical pin 29: EPAD; passive. */
  "EPAD": "29",
}) {
  override schema = "Audio:ES8388";
  override referencePrefix = "U";
}

/**
 * 32-bit 8-Channel Audio DAC, 135 / 129 dB DNR (mono / 8-Channel), S/PDIF / PCM (I2S and left/right-justified formats) / DoP / DSD audio input, GPIO / I2C control interface, TQFP-64
 *
 * KiCad symbol: `Audio:ES9028PRO`. Reference prefix: `U`.
 * Footprint filters: *TQFP*10x10mm?P0.5mm?EP5.3*x5.3*mm*.
 * @see https://www.esstech.com/wp-content/uploads/2022/09/ES9028PRO-Datasheet-v3.7.pdf
 * Keywords: ESS-Technology SABRE-PRO PGA Audiophile.
 * Default footprint: Package_QFP:TQFP-64-1EP_10x10mm_P0.5mm_EP5.305x5.305mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ES9028PRO extends Component.withPins({
  /** Physical pin 1: VDD_{L}; power_in. */
  "VDD_{L}_1": "1",
  /** Physical pin 2: DAC1; output. */
  "DAC1": "2",
  /** Physical pin 3: DAC1B; output. */
  "DAC1B": "3",
  /** Physical pin 4: DAC3B; output. */
  "DAC3B": "4",
  /** Physical pin 5: DAC3; output. */
  "DAC3": "5",
  /** Physical pin 6: AGND_{L}; power_in. */
  "AGND_{L}_6": "6",
  /** Physical pin 7: AVCC_{L}; power_in. */
  "AVCC_{L}_7": "7",
  /** Physical pin 8: ~{RESETB}; input. */
  "~{RESETB}": "8",
  /** Physical pin 9: DGND; power_in. */
  "DGND_9": "9",
  /** Physical pin 10: AVCC_{L}; passive. */
  "AVCC_{L}_10": "10",
  /** Physical pin 11: AGND_{L}; passive. */
  "AGND_{L}_11": "11",
  /** Physical pin 12: DAC5; output. */
  "DAC5": "12",
  /** Physical pin 13: DAC5B; output. */
  "DAC5B": "13",
  /** Physical pin 14: DAC7B; output. */
  "DAC7B": "14",
  /** Physical pin 15: DAC7; output. */
  "DAC7": "15",
  /** Physical pin 16: VDD_{L}; passive. */
  "VDD_{L}_16": "16",
  /** Physical pin 17: AVCC_{L}; passive. */
  "AVCC_{L}_17": "17",
  /** Physical pin 18: AGND_{L}; passive. */
  "AGND_{L}_18": "18",
  /** Physical pin 19: DGND; passive. */
  "DGND_19": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD_20": "20",
  /** Physical pin 21: SDA; bidirectional. */
  "SDA": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: XOUT; output. */
  "XOUT": "23",
  /** Physical pin 24: XIN; input. */
  "XIN": "24",
  /** Physical pin 25: VCCA; power_in. */
  "VCCA": "25",
  /** Physical pin 26: GPIO4; bidirectional. */
  "GPIO4": "26",
  /** Physical pin 27: GPIO3; bidirectional. */
  "GPIO3": "27",
  /** Physical pin 28: GPIO2; bidirectional. */
  "GPIO2": "28",
  /** Physical pin 29: DVDD; passive. */
  "DVDD_29": "29",
  /** Physical pin 30: DGND; passive. */
  "DGND_30": "30",
  /** Physical pin 31: AGND_{R}; power_in. */
  "AGND_{R}_31": "31",
  /** Physical pin 32: AVCC_{R}; power_in. */
  "AVCC_{R}_32": "32",
  /** Physical pin 33: VDD_{R}; power_in. */
  "VDD_{R}_33": "33",
  /** Physical pin 34: DAC8; output. */
  "DAC8": "34",
  /** Physical pin 35: DAC8B; output. */
  "DAC8B": "35",
  /** Physical pin 36: DAC6B; output. */
  "DAC6B": "36",
  /** Physical pin 37: DAC6; output. */
  "DAC6": "37",
  /** Physical pin 38: AGND_{R}; passive. */
  "AGND_{R}_38": "38",
  /** Physical pin 39: AVCC_{R}; passive. */
  "AVCC_{R}_39": "39",
  /** Physical pin 40: GPIO1; bidirectional. */
  "GPIO1": "40",
  /** Physical pin 41: ADDR; input. */
  "ADDR": "41",
  /** Physical pin 42: AVCC_{R}; passive. */
  "AVCC_{R}_42": "42",
  /** Physical pin 43: AGND_{R}; passive. */
  "AGND_{R}_43": "43",
  /** Physical pin 44: DAC4; output. */
  "DAC4": "44",
  /** Physical pin 45: DAC4B; output. */
  "DAC4B": "45",
  /** Physical pin 46: DAC2B; output. */
  "DAC2B": "46",
  /** Physical pin 47: DAC2; output. */
  "DAC2": "47",
  /** Physical pin 48: VDD_{R}; passive. */
  "VDD_{R}_48": "48",
  /** Physical pin 49: AVCC_{R}; passive. */
  "AVCC_{R}_49": "49",
  /** Physical pin 50: AGND_{R}; passive. */
  "AGND_{R}_50": "50",
  /** Physical pin 51: DGND; passive. */
  "DGND_51": "51",
  /** Physical pin 52: DATA8; bidirectional. */
  "DATA8": "52",
  /** Physical pin 53: DATA7; bidirectional. */
  "DATA7": "53",
  /** Physical pin 54: DATA6; bidirectional. */
  "DATA6": "54",
  /** Physical pin 55: DATA5; bidirectional. */
  "DATA5": "55",
  /** Physical pin 56: DATA4; bidirectional. */
  "DATA4": "56",
  /** Physical pin 57: DATA3; bidirectional. */
  "DATA3": "57",
  /** Physical pin 58: DATA2; bidirectional. */
  "DATA2": "58",
  /** Physical pin 59: DATA1; bidirectional. */
  "DATA1": "59",
  /** Physical pin 60: DATA_CLK; bidirectional. */
  "DATA_CLK": "60",
  /** Physical pin 61: DVDD; passive. */
  "DVDD_61": "61",
  /** Physical pin 62: AVDD; power_in. */
  "AVDD": "62",
  /** Physical pin 63: AGND_{L}; passive. */
  "AGND_{L}_63": "63",
  /** Physical pin 64: AVCC_{L}; passive. */
  "AVCC_{L}_64": "64",
  /** Physical pin 65: EPAD; passive. */
  "EPAD": "65",
}) {
  override schema = "Audio:ES9028PRO";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 60-Second Duration, DIP-28
 *
 * KiCad symbol: `Audio:ISD2560P`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2560.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2560P extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2560P";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 120-Second Duration, DIP-28
 *
 * KiCad symbol: `Audio:ISD25120P`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd25120.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD25120P extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD25120P";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 60-Second Duration, SOIC-28
 *
 * KiCad symbol: `Audio:ISD2560S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2560.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2560S extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2560S";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 120-Second Duration, SOIC-28
 *
 * KiCad symbol: `Audio:ISD25120S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd25120.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD25120S extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD25120S";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 60-Second Duration, TSOP-I-28
 *
 * KiCad symbol: `Audio:ISD2560E`. Reference prefix: `U`.
 * Footprint filters: TSOP*11.8x8mm*P0.55mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2560.
 * Default footprint: Package_SO:TSOP-I-28_11.8x8mm_P0.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2560E extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2560E";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 75-Second Duration, TSOP-I-28
 *
 * KiCad symbol: `Audio:ISD2575E`. Reference prefix: `U`.
 * Footprint filters: TSOP*11.8x8mm*P0.55mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2575.
 * Default footprint: Package_SO:TSOP-I-28_11.8x8mm_P0.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2575E extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2575E";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 75-Second Duration, DIP-28
 *
 * KiCad symbol: `Audio:ISD2575P`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2575.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2575P extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2575P";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 75-Second Duration, SOIC-28
 *
 * KiCad symbol: `Audio:ISD2575S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2575.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2575S extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2575S";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 90-Second Duration, TSOP-I-28
 *
 * KiCad symbol: `Audio:ISD2590E`. Reference prefix: `U`.
 * Footprint filters: TSOP*11.8x8mm*P0.55mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2590.
 * Default footprint: Package_SO:TSOP-I-28_11.8x8mm_P0.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2590E extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2590E";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 90-Second Duration, DIP-28
 *
 * KiCad symbol: `Audio:ISD2590P`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2590.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2590P extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2590P";
  override referencePrefix = "U";
}

/**
 * Single-Chip Voice Record/Playback Device 90-Second Duration, SOIC-28
 *
 * KiCad symbol: `Audio:ISD2590S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://datasheetspdf.com/pdf-file/700027/Winbond/ISD2560/1
 * Keywords: isd2590.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISD2590S extends Component.withPins({
  /** Physical pin 1: A0/M0; input. */
  "A0/M0": "1",
  /** Physical pin 2: A1/M1; input. */
  "A1/M1": "2",
  /** Physical pin 3: A2/M2; input. */
  "A2/M2": "3",
  /** Physical pin 4: A3/M3; input. */
  "A3/M3": "4",
  /** Physical pin 5: A4/M4; input. */
  "A4/M4": "5",
  /** Physical pin 6: A5/M5; input. */
  "A5/M5": "6",
  /** Physical pin 7: A6/M6; input. */
  "A6/M6": "7",
  /** Physical pin 8: A7; input. */
  "A7": "8",
  /** Physical pin 9: A8; input. */
  "A8": "9",
  /** Physical pin 10: A9; input. */
  "A9": "10",
  /** Physical pin 11: AUX_IN; input. */
  "AUX_IN": "11",
  /** Physical pin 12: VSSD; power_in. */
  "VSSD": "12",
  /** Physical pin 13: VSSA; power_in. */
  "VSSA": "13",
  /** Physical pin 14: SP+; output. */
  "SP+": "14",
  /** Physical pin 15: SP-; output. */
  "SP-": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
  /** Physical pin 17: MIC; input. */
  "MIC": "17",
  /** Physical pin 18: MIC_REF; passive. */
  "MIC_REF": "18",
  /** Physical pin 19: AGC; passive. */
  "AGC": "19",
  /** Physical pin 20: ANA_IN; input. */
  "ANA_IN": "20",
  /** Physical pin 21: ANA_OUT; output. */
  "ANA_OUT": "21",
  /** Physical pin 22: ~{OVF}; output. */
  "~{OVF}": "22",
  /** Physical pin 23: ~{CE}; input. */
  "~{CE}": "23",
  /** Physical pin 24: PD; input. */
  "PD": "24",
  /** Physical pin 25: ~{EOM}; output. */
  "~{EOM}": "25",
  /** Physical pin 26: XCLK; input. */
  "XCLK": "26",
  /** Physical pin 27: P/~{R}; input. */
  "P/~{R}": "27",
  /** Physical pin 28: VCCD; power_in. */
  "VCCD": "28",
}) {
  override schema = "Audio:ISD2590S";
  override referencePrefix = "U";
}

/**
 * Mono DAC with amplifier, I2S, PCM, TDM, 32-bit, 96khz, 3.2W, TQFP-16
 *
 * KiCad symbol: `Audio:MAX98357A`. Reference prefix: `U`.
 * Footprint filters: TQFN*3x3mm*P0.5mm*EP1.23x1.23mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX98357A-MAX98357B.pdf
 * Keywords: pcm tdm i2s left-justified amplifier audio dac.
 * Default footprint: Package_DFN_QFN:TQFN-16-1EP_3x3mm_P0.5mm_EP1.23x1.23mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX98357A extends Component.withPins({
  /** Physical pin 1: DIN; input. */
  "DIN": "1",
  /** Physical pin 2: GAIN_SLOT; passive. */
  "GAIN_SLOT": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: ~{SD_MODE}; input. */
  "~{SD_MODE}": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: OUTP; output. */
  "OUTP": "9",
  /** Physical pin 10: OUTN; output. */
  "OUTN": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: LRCLK; input. */
  "LRCLK": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: BCLK; input. */
  "BCLK": "16",
  /** Physical pin 17: PAD; unspecified. */
  "PAD": "17",
}) {
  override schema = "Audio:MAX98357A";
  override referencePrefix = "U";
}

/**
 * Mono DAC with amplifier, I2S, left-justified, TDM, 32-bit, 96khz, 3.2W, TQFP-16
 *
 * KiCad symbol: `Audio:MAX98357B`. Reference prefix: `U`.
 * Footprint filters: TQFN*3x3mm*P0.5mm*EP1.23x1.23mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX98357A-MAX98357B.pdf
 * Keywords: tdm i2s left-justified amplifier audio dac.
 * Default footprint: Package_DFN_QFN:TQFN-16-1EP_3x3mm_P0.5mm_EP1.23x1.23mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX98357B extends Component.withPins({
  /** Physical pin 1: DIN; input. */
  "DIN": "1",
  /** Physical pin 2: GAIN_SLOT; passive. */
  "GAIN_SLOT": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: ~{SD_MODE}; input. */
  "~{SD_MODE}": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VDD; passive. */
  "VDD_8": "8",
  /** Physical pin 9: OUTP; output. */
  "OUTP": "9",
  /** Physical pin 10: OUTN; output. */
  "OUTN": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: LRCLK; input. */
  "LRCLK": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: BCLK; input. */
  "BCLK": "16",
  /** Physical pin 17: PAD; unspecified. */
  "PAD": "17",
}) {
  override schema = "Audio:MAX98357B";
  override referencePrefix = "U";
}

/**
 * 4096-STAGE LONG DELAY BBD (bucket brigade device), delay time 20.48ms to 204.8ms, S/N 75dB, clock frequency range 10KHz to 100KHz
 *
 * KiCad symbol: `Audio:MN3005`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see http://www.experimentalistsanonymous.com/diy/Datasheets/MN3005.pdf
 * Keywords: Matsushita Panasonic BBD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MN3005 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: CP2; input. */
  "CP2": "2",
  /** Physical pin 3: OUT1; output. */
  "OUT1": "3",
  /** Physical pin 4: OUT2; output. */
  "OUT2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: CP1; input. */
  "CP1": "6",
  /** Physical pin 7: IN; input. */
  "IN": "7",
  /** Physical pin 8: VGG; power_in. */
  "VGG": "8",
}) {
  override schema = "Audio:MN3005";
  override referencePrefix = "U";
}

/**
 * 1024-STAGE LOW NOISE BBD (bucket brigade device), delay time 5.12ms to 51.2ms, S/N 80dB, clock frequency range 10KHz to 100KHz
 *
 * KiCad symbol: `Audio:MN3007`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see http://www.experimentalistsanonymous.com/diy/Datasheets/MN3007.pdf
 * Keywords: Matsushita Panasonic BBD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MN3007 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: CP1; input. */
  "CP1": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: VGG; power_in. */
  "VGG": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: CP2; input. */
  "CP2": "6",
  /** Physical pin 7: OUT1; output. */
  "OUT1": "7",
  /** Physical pin 8: OUT2; output. */
  "OUT2": "8",
}) {
  override schema = "Audio:MN3007";
  override referencePrefix = "U";
}

/**
 * 1024-STAGE LOW VOLTAGE OPERATION LOW NOISE BBD (bucket brigade device), delay time 2.56ms to 51.2ms, S/N 73dB, clock frequency range 10KHz to 200KHz
 *
 * KiCad symbol: `Audio:MN3207`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see http://www.experimentalistsanonymous.com/diy/Datasheets/MN3207.pdf
 * Keywords: Matsushita Panasonic BBD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MN3207 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: CP1; input. */
  "CP1": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: VGG; power_in. */
  "VGG": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: CP2; input. */
  "CP2": "6",
  /** Physical pin 7: OUT1; output. */
  "OUT1": "7",
  /** Physical pin 8: OUT2; output. */
  "OUT2": "8",
}) {
  override schema = "Audio:MN3207";
  override referencePrefix = "U";
}

/**
 * Seven Band Graphic Equalizer, DIP-8/SOIC-8
 *
 * KiCad symbol: `Audio:MSGEQ7`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://mix-sig.com/images/datasheets/MSGEQ7.pdf
 * Keywords: equalizer filter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MSGEQ7 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: STROBE; input. */
  "STROBE": "4",
  /** Physical pin 5: IN; input. */
  "IN": "5",
  /** Physical pin 6: GND; power_out. */
  "GND": "6",
  /** Physical pin 7: RESET; input. */
  "RESET": "7",
  /** Physical pin 8: CKIN; input. */
  "CKIN": "8",
}) {
  override schema = "Audio:MSGEQ7";
  override referencePrefix = "U";
}

/**
 * 24-bit, 192-kHz sampling, Stereo Audio DAC, SSOP-16
 *
 * KiCad symbol: `Audio:PCM1754DBQ`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcm1754.pdf
 * Keywords: audio dac 24-bit.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM1754DBQ extends Component.withPins({
  /** Physical pin 1: BCK; input. */
  "BCK": "1",
  /** Physical pin 2: DATA; input. */
  "DATA": "2",
  /** Physical pin 3: LRCLK; input. */
  "LRCLK": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: V_{CC}; power_in. */
  "V_{CC}": "6",
  /** Physical pin 7: V_{OUT}L; output. */
  "V_{OUT}L": "7",
  /** Physical pin 8: V_{OUT}R; output. */
  "V_{OUT}R": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: V_{COM}; output. */
  "V_{COM}": "10",
  /** Physical pin 11: ZEROA; output. */
  "ZEROA": "11",
  /** Physical pin 12: TEST; passive. */
  "TEST": "12",
  /** Physical pin 13: DEMP; input. */
  "DEMP": "13",
  /** Physical pin 14: MUTE; input. */
  "MUTE": "14",
  /** Physical pin 15: FMT; input. */
  "FMT": "15",
  /** Physical pin 16: SCK; input. */
  "SCK": "16",
}) {
  override schema = "Audio:PCM1754DBQ";
  override referencePrefix = "U";
}

/**
 * 24-bit, 192-kHz sampling, Stereo Audio DAC, SSOP-16
 *
 * KiCad symbol: `Audio:PCM1780`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcm1780.pdf
 * Keywords: audio dac 24-bit.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM1780 extends Component.withPins({
  /** Physical pin 1: ZEROL; output. */
  "ZEROL": "1",
  /** Physical pin 2: ~{MS}; input. */
  "~{MS}": "2",
  /** Physical pin 3: MC; input. */
  "MC": "3",
  /** Physical pin 4: MD; input. */
  "MD": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: DATA; input. */
  "DATA": "6",
  /** Physical pin 7: BCK; input. */
  "BCK": "7",
  /** Physical pin 8: LRCK; input. */
  "LRCK": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: Vcc; power_in. */
  "Vcc": "11",
  /** Physical pin 12: AGND; power_in. */
  "AGND": "12",
  /** Physical pin 13: V_{COM}; output. */
  "V_{COM}": "13",
  /** Physical pin 14: V_{OUT}R; output. */
  "V_{OUT}R": "14",
  /** Physical pin 15: V_{OUT}L; output. */
  "V_{OUT}L": "15",
  /** Physical pin 16: ZEROR; output. */
  "ZEROR": "16",
}) {
  override schema = "Audio:PCM1780";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 192-kHz Sampling, Advanced Segment, Audio Stereo Digital-to-Analog Converter, SW Control, SSOP-28
 *
 * KiCad symbol: `Audio:PCM1792A`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pcm1792a.pdf
 * Keywords: audio dac 2ch 24bit 192kHz.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM1792A extends Component.withPins({
  /** Physical pin 1: ZEROL; output. */
  "ZEROL": "1",
  /** Physical pin 2: ZEROR; output. */
  "ZEROR": "2",
  /** Physical pin 3: MSEL; input. */
  "MSEL": "3",
  /** Physical pin 4: LRCK; input. */
  "LRCK": "4",
  /** Physical pin 5: DATA; input. */
  "DATA": "5",
  /** Physical pin 6: BCK; input. */
  "BCK": "6",
  /** Physical pin 7: SCK; input. */
  "SCK": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: ~{MS}; input. */
  "~{MS}": "10",
  /** Physical pin 11: MDI; input. */
  "MDI": "11",
  /** Physical pin 12: MC; input. */
  "MC": "12",
  /** Physical pin 13: MDO; bidirectional. */
  "MDO": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: VCC2R; power_in. */
  "VCC2R": "15",
  /** Physical pin 16: AGND3R; power_in. */
  "AGND3R": "16",
  /** Physical pin 17: IOUTR+; output. */
  "IOUTR+": "17",
  /** Physical pin 18: IOUTR-; output. */
  "IOUTR-": "18",
  /** Physical pin 19: AGND1; power_in. */
  "AGND1": "19",
  /** Physical pin 20: IREF; passive. */
  "IREF": "20",
  /** Physical pin 21: VCOMR; output. */
  "VCOMR": "21",
  /** Physical pin 22: VCOML; passive. */
  "VCOML": "22",
  /** Physical pin 23: VCC1; power_in. */
  "VCC1": "23",
  /** Physical pin 24: AGND2; power_in. */
  "AGND2": "24",
  /** Physical pin 25: IOUTL+; output. */
  "IOUTL+": "25",
  /** Physical pin 26: IOUTL-; output. */
  "IOUTL-": "26",
  /** Physical pin 27: AGND3L; power_in. */
  "AGND3L": "27",
  /** Physical pin 28: VCC2L; power_in. */
  "VCC2L": "28",
}) {
  override schema = "Audio:PCM1792A";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 192-kHz Sampling, Advanced Segment, Audio Stereo Digital-to-Analog Converter, HW Control, SSOP-28
 *
 * KiCad symbol: `Audio:PCM1794A`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pcm1794a.pdf
 * Keywords: audio dac 2ch 24bit 192kHz.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM1794A extends Component.withPins({
  /** Physical pin 1: MONO; input. */
  "MONO": "1",
  /** Physical pin 2: CHSL; input. */
  "CHSL": "2",
  /** Physical pin 3: DEM; input. */
  "DEM": "3",
  /** Physical pin 4: LRCK; input. */
  "LRCK": "4",
  /** Physical pin 5: DATA; input. */
  "DATA": "5",
  /** Physical pin 6: BCK; input. */
  "BCK": "6",
  /** Physical pin 7: SCK; input. */
  "SCK": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: MUTE; input. */
  "MUTE": "10",
  /** Physical pin 11: FMT0; input. */
  "FMT0": "11",
  /** Physical pin 12: FMT1; input. */
  "FMT1": "12",
  /** Physical pin 13: ZERO; open_collector. */
  "ZERO": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: VCC2R; power_in. */
  "VCC2R": "15",
  /** Physical pin 16: AGND3R; power_in. */
  "AGND3R": "16",
  /** Physical pin 17: IOUTR+; output. */
  "IOUTR+": "17",
  /** Physical pin 18: IOUTR-; output. */
  "IOUTR-": "18",
  /** Physical pin 19: AGND1; power_in. */
  "AGND1": "19",
  /** Physical pin 20: IREF; passive. */
  "IREF": "20",
  /** Physical pin 21: VCOMR; output. */
  "VCOMR": "21",
  /** Physical pin 22: VCOML; passive. */
  "VCOML": "22",
  /** Physical pin 23: VCC1; power_in. */
  "VCC1": "23",
  /** Physical pin 24: AGND2; power_in. */
  "AGND2": "24",
  /** Physical pin 25: IOUTL+; output. */
  "IOUTL+": "25",
  /** Physical pin 26: IOUTL-; output. */
  "IOUTL-": "26",
  /** Physical pin 27: AGND3L; power_in. */
  "AGND3L": "27",
  /** Physical pin 28: VCC2L; power_in. */
  "VCC2L": "28",
}) {
  override schema = "Audio:PCM1794A";
  override referencePrefix = "U";
}

/**
 * 2-Channel, 192 kHz, 24-bit, Audio ADC, 103dB SNR, I2S / left-justified digital output formats, hardware control interface, TSSOP-30
 *
 * KiCad symbol: `Audio:PCM1860DBT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcm1860.pdf
 * Keywords: Texas-Instruments PCM PGA PLL audio-front-end analog-MUX energysense PCM1861DBT.
 * Default footprint: Package_SO:TSSOP-30_4.4x7.8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM1860DBT extends Component.withPins({
  /** Physical pin 25: MD1; input. */
  "MD1": "25",
  /** Physical pin 26: MD0; input. */
  "MD0": "26",
  /** Physical pin 27: VINL4/VIN4M; input. */
  "VINL4/VIN4M": "27",
  /** Physical pin 28: VINR4/VIN3M; input. */
  "VINR4/VIN3M": "28",
  /** Physical pin 29: VINL3/VIN4P; input. */
  "VINL3/VIN4P": "29",
  /** Physical pin 30: VINR3/VIN3P; input. */
  "VINR3/VIN3P": "30",
  /** Physical pin 1: VINL2/VIN1M; input. */
  "VINL2/VIN1M": "1",
  /** Physical pin 2: VINR2/VIN2M; input. */
  "VINR2/VIN2M": "2",
  /** Physical pin 3: VINL1/VIN1P; input. */
  "VINL1/VIN1P": "3",
  /** Physical pin 4: VINR1/VIN2P; input. */
  "VINR1/VIN2P": "4",
  /** Physical pin 5: Mic_Bias; power_out. */
  "Mic_Bias": "5",
  /** Physical pin 6: VREF; power_out. */
  "VREF": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: XO; output. */
  "XO": "9",
  /** Physical pin 10: XI; input. */
  "XI": "10",
  /** Physical pin 11: LDO; power_in. */
  "LDO": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD": "13",
  /** Physical pin 14: IOVDD; power_in. */
  "IOVDD": "14",
  /** Physical pin 15: SCKI; input. */
  "SCKI": "15",
  /** Physical pin 16: LRCK; bidirectional. */
  "LRCK": "16",
  /** Physical pin 17: BCK; bidirectional. */
  "BCK": "17",
  /** Physical pin 18: DOUT; output. */
  "DOUT": "18",
  /** Physical pin 19: INT; output. */
  "INT": "19",
  /** Physical pin 20: MD6; input. */
  "MD6": "20",
  /** Physical pin 21: MD5; input. */
  "MD5": "21",
  /** Physical pin 22: MD4; input. */
  "MD4": "22",
  /** Physical pin 23: MD2; input. */
  "MD2": "23",
  /** Physical pin 24: MD3; input. */
  "MD3": "24",
}) {
  override schema = "Audio:PCM1860DBT";
  override referencePrefix = "U";
}

/**
 * 2-Channel, 192 kHz, 24-bit, Audio ADC, 103dB SNR, I2S / left/right-justified / TDM digital output formats, I2C / SPI control interface, 2 digital microphone support, TSSOP-30
 *
 * KiCad symbol: `Audio:PCM1862DBT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcm1862.pdf
 * Keywords: Texas-Instruments PCM PGA GPIO PLL audio-front-end analog-MUX mixer energysense PCM1863DBT.
 * Default footprint: Package_SO:TSSOP-30_4.4x7.8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM1862DBT extends Component.withPins({
  /** Physical pin 25: MS/AD; input. */
  "MS/AD": "25",
  /** Physical pin 26: MD0; input. */
  "MD0": "26",
  /** Physical pin 27: VINL4/VIN4M; input. */
  "VINL4/VIN4M": "27",
  /** Physical pin 28: VINR4/VIN3M; input. */
  "VINR4/VIN3M": "28",
  /** Physical pin 29: VINL3/VIN4P; input. */
  "VINL3/VIN4P": "29",
  /** Physical pin 30: VINR3/VIN3P; input. */
  "VINR3/VIN3P": "30",
  /** Physical pin 1: VINL2/VIN1M; input. */
  "VINL2/VIN1M": "1",
  /** Physical pin 2: VINR2/VIN2M; input. */
  "VINR2/VIN2M": "2",
  /** Physical pin 3: VINL1/VIN1P; input. */
  "VINL1/VIN1P": "3",
  /** Physical pin 4: VINR1/VIN2P; input. */
  "VINR1/VIN2P": "4",
  /** Physical pin 5: Mic_Bias; power_out. */
  "Mic_Bias": "5",
  /** Physical pin 6: VREF; power_out. */
  "VREF": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: XO; output. */
  "XO": "9",
  /** Physical pin 10: XI; input. */
  "XI": "10",
  /** Physical pin 11: LDO; power_in. */
  "LDO": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD": "13",
  /** Physical pin 14: IOVDD; power_in. */
  "IOVDD": "14",
  /** Physical pin 15: SCKI; input. */
  "SCKI": "15",
  /** Physical pin 16: LRCK; bidirectional. */
  "LRCK": "16",
  /** Physical pin 17: BCK; bidirectional. */
  "BCK": "17",
  /** Physical pin 18: DOUT; output. */
  "DOUT": "18",
  /** Physical pin 19: GPIO3/INTC; bidirectional. */
  "GPIO3/INTC": "19",
  /** Physical pin 20: GPIO2/INTB/DMCLK; bidirectional. */
  "GPIO2/INTB/DMCLK": "20",
  /** Physical pin 21: GPIO1/INTA/DMIN; bidirectional. */
  "GPIO1/INTA/DMIN": "21",
  /** Physical pin 22: MISO/GPIO0; bidirectional. */
  "MISO/GPIO0": "22",
  /** Physical pin 23: MOSI/SDA; bidirectional. */
  "MOSI/SDA": "23",
  /** Physical pin 24: MC/SCL; input. */
  "MC/SCL": "24",
}) {
  override schema = "Audio:PCM1862DBT";
  override referencePrefix = "U";
}

/**
 * 4-Channel, 192 kHz, 24-bit, Audio ADC, 103dB SNR, I2S / left/right-justified / TDM digital output formats, I2C / SPI control interface, 4 digital microphone support (DMIN2 pin), TSSOP-30
 *
 * KiCad symbol: `Audio:PCM1864DBT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcm1864.pdf
 * Keywords: Texas-Instruments PCM PGA GPIO PLL audio-front-end analog-MUX mixer energysense PCM1865DBT.
 * Default footprint: Package_SO:TSSOP-30_4.4x7.8mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM1864DBT extends Component.withPins({
  /** Physical pin 25: MS/AD; input. */
  "MS/AD": "25",
  /** Physical pin 26: MD0; input. */
  "MD0": "26",
  /** Physical pin 27: VINL4/VIN4M; input. */
  "VINL4/VIN4M": "27",
  /** Physical pin 28: VINR4/VIN3M; input. */
  "VINR4/VIN3M": "28",
  /** Physical pin 29: VINL3/VIN4P; input. */
  "VINL3/VIN4P": "29",
  /** Physical pin 30: VINR3/VIN3P; input. */
  "VINR3/VIN3P": "30",
  /** Physical pin 1: VINL2/VIN1M; input. */
  "VINL2/VIN1M": "1",
  /** Physical pin 2: VINR2/VIN2M; input. */
  "VINR2/VIN2M": "2",
  /** Physical pin 3: VINL1/VIN1P; input. */
  "VINL1/VIN1P": "3",
  /** Physical pin 4: VINR1/VIN2P; input. */
  "VINR1/VIN2P": "4",
  /** Physical pin 5: Mic_Bias; power_out. */
  "Mic_Bias": "5",
  /** Physical pin 6: VREF; power_out. */
  "VREF": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: XO; output. */
  "XO": "9",
  /** Physical pin 10: XI; input. */
  "XI": "10",
  /** Physical pin 11: LDO; power_in. */
  "LDO": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD": "13",
  /** Physical pin 14: IOVDD; power_in. */
  "IOVDD": "14",
  /** Physical pin 15: SCKI; input. */
  "SCKI": "15",
  /** Physical pin 16: LRCK; bidirectional. */
  "LRCK": "16",
  /** Physical pin 17: BCK; bidirectional. */
  "BCK": "17",
  /** Physical pin 18: DOUT; output. */
  "DOUT": "18",
  /** Physical pin 19: GPIO3/INTC; bidirectional. */
  "GPIO3/INTC": "19",
  /** Physical pin 20: GPIO2/INTB/DMCLK; bidirectional. */
  "GPIO2/INTB/DMCLK": "20",
  /** Physical pin 21: GPIO1/INTA/DMIN; bidirectional. */
  "GPIO1/INTA/DMIN": "21",
  /** Physical pin 22: MISO/GPIO0/DMIN2; bidirectional. */
  "MISO/GPIO0/DMIN2": "22",
  /** Physical pin 23: MOSI/SDA; bidirectional. */
  "MOSI/SDA": "23",
  /** Physical pin 24: MC/SCL; input. */
  "MC/SCL": "24",
}) {
  override schema = "Audio:PCM1864DBT";
  override referencePrefix = "U";
}

/**
 * Stereo Audio Codec with USB interface, Analog Input/Output, and S/PDIF, SSOP-28
 *
 * KiCad symbol: `Audio:PCM2902`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pcm2902c.pdf
 * Keywords: pcm2902 usb audio.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM2902 extends Component.withPins({
  /** Physical pin 1: D+; bidirectional. */
  "D+": "1",
  /** Physical pin 2: D-; bidirectional. */
  "D-": "2",
  /** Physical pin 3: VBUS; power_in. */
  "VBUS": "3",
  /** Physical pin 4: DGNDU; power_in. */
  "DGNDU": "4",
  /** Physical pin 5: HID0; input. */
  "HID0": "5",
  /** Physical pin 6: HID1; input. */
  "HID1": "6",
  /** Physical pin 7: HID2; input. */
  "HID2": "7",
  /** Physical pin 8: SEL0; input. */
  "SEL0": "8",
  /** Physical pin 9: SEL1; input. */
  "SEL1": "9",
  /** Physical pin 10: VCCCI; passive. */
  "VCCCI": "10",
  /** Physical pin 11: AGNDC; power_in. */
  "AGNDC": "11",
  /** Physical pin 12: VINL; input. */
  "VINL": "12",
  /** Physical pin 13: VINR; input. */
  "VINR": "13",
  /** Physical pin 14: VCOM; passive. */
  "VCOM": "14",
  /** Physical pin 15: VOUTR; output. */
  "VOUTR": "15",
  /** Physical pin 16: VOUTL; output. */
  "VOUTL": "16",
  /** Physical pin 17: VCCP1I; passive. */
  "VCCP1I": "17",
  /** Physical pin 18: AGNDP; power_in. */
  "AGNDP": "18",
  /** Physical pin 19: VCCP2I; passive. */
  "VCCP2I": "19",
  /** Physical pin 20: XTO; output. */
  "XTO": "20",
  /** Physical pin 21: XTI; input. */
  "XTI": "21",
  /** Physical pin 22: AGNDX; power_in. */
  "AGNDX": "22",
  /** Physical pin 23: VCCXI; passive. */
  "VCCXI": "23",
  /** Physical pin 24: DIN; input. */
  "DIN": "24",
  /** Physical pin 25: DOUT; output. */
  "DOUT": "25",
  /** Physical pin 26: DGND; power_in. */
  "DGND": "26",
  /** Physical pin 27: VDDI; power_out. */
  "VDDI": "27",
  /** Physical pin 28: ~{SSPND}; output. */
  "~{SSPND}": "28",
}) {
  override schema = "Audio:PCM2902";
  override referencePrefix = "U";
}

/**
 * 24-bit Asynchronous Stereo Audio Codec with 96/192kHz sampling rate, TSSOP-28
 *
 * KiCad symbol: `Audio:PCM3060`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.ti.com/lit/gpn/pcm3060
 * Keywords: audio codec 2ch 24bit 192kHz.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM3060 extends Component.withPins({
  /** Physical pin 1: MC/SCL/FMT; input. */
  "MC/SCL/FMT": "1",
  /** Physical pin 2: MD/SDA/DEMP; bidirectional. */
  "MD/SDA/DEMP": "2",
  /** Physical pin 3: DOUT; output. */
  "DOUT": "3",
  /** Physical pin 4: LRCK1; bidirectional. */
  "LRCK1": "4",
  /** Physical pin 5: BCK1; bidirectional. */
  "BCK1": "5",
  /** Physical pin 6: SCKI1; input. */
  "SCKI1": "6",
  /** Physical pin 7: V_{DD}; power_in. */
  "V_{DD}": "7",
  /** Physical pin 8: DGND; power_in. */
  "DGND": "8",
  /** Physical pin 9: SCKI2; input. */
  "SCKI2": "9",
  /** Physical pin 10: BCK2; bidirectional. */
  "BCK2": "10",
  /** Physical pin 11: LRCK2; bidirectional. */
  "LRCK2": "11",
  /** Physical pin 12: DIN; input. */
  "DIN": "12",
  /** Physical pin 13: ZEROR; output. */
  "ZEROR": "13",
  /** Physical pin 14: ZEROL; output. */
  "ZEROL": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: SGND; power_in. */
  "SGND": "16",
  /** Physical pin 17: V_{OUT}R-; output. */
  "V_{OUT}R-": "17",
  /** Physical pin 18: V_{OUT}R+; output. */
  "V_{OUT}R+": "18",
  /** Physical pin 19: V_{OUT}L-; output. */
  "V_{OUT}L-": "19",
  /** Physical pin 20: V_{OUT}L+; output. */
  "V_{OUT}L+": "20",
  /** Physical pin 21: V_{COM}; output. */
  "V_{COM}": "21",
  /** Physical pin 22: AGND2; power_in. */
  "AGND2": "22",
  /** Physical pin 23: AGND1; power_in. */
  "AGND1": "23",
  /** Physical pin 24: V_{CC}; power_in. */
  "V_{CC}": "24",
  /** Physical pin 25: V_{IN}L; input. */
  "V_{IN}L": "25",
  /** Physical pin 26: V_{IN}R; input. */
  "V_{IN}R": "26",
  /** Physical pin 27: ~{MS}/AD/IFMD; input. */
  "~{MS}/AD/IFMD": "27",
  /** Physical pin 28: MODE; input. */
  "MODE": "28",
}) {
  override schema = "Audio:PCM3060";
  override referencePrefix = "U";
}

/**
 * 2VRMS DirectPath, 100dB Audio Stereo DAC with 32-bit, 384kHz PCM Interface, TSSOP-20
 *
 * KiCad symbol: `Audio:PCM5100`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pcm5100.pdf
 * Keywords: audio dac 2ch 32bit 384kHz.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM5100 extends Component.withPins({
  /** Physical pin 1: CPVDD; passive. */
  "CPVDD": "1",
  /** Physical pin 2: CAPP; passive. */
  "CAPP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: CAPM; passive. */
  "CAPM": "4",
  /** Physical pin 5: VNEG; passive. */
  "VNEG": "5",
  /** Physical pin 6: OUTL; output. */
  "OUTL": "6",
  /** Physical pin 7: OUTR; output. */
  "OUTR": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: DEMP; input. */
  "DEMP": "10",
  /** Physical pin 11: FLT; input. */
  "FLT": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: BCK; input. */
  "BCK": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: LRCK; input. */
  "LRCK": "15",
  /** Physical pin 16: FMT; input. */
  "FMT": "16",
  /** Physical pin 17: XSMT; input. */
  "XSMT": "17",
  /** Physical pin 18: LDOO; passive. */
  "LDOO": "18",
  /** Physical pin 19: DGND; power_in. */
  "DGND": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD": "20",
}) {
  override schema = "Audio:PCM5100";
  override referencePrefix = "U";
}

/**
 * 2.1 VRMS, 100dB Audio Stereo DAC with PLL and 32-bit, 384kHz PCM Interface, TSSOP-20
 *
 * KiCad symbol: `Audio:PCM5100A`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcm5100a.pdf
 * Keywords: audio dac 2ch 32bit 384kHz.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM5100A extends Component.withPins({
  /** Physical pin 1: CPVDD; passive. */
  "CPVDD": "1",
  /** Physical pin 2: CAPP; passive. */
  "CAPP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: CAPM; passive. */
  "CAPM": "4",
  /** Physical pin 5: VNEG; passive. */
  "VNEG": "5",
  /** Physical pin 6: OUTL; output. */
  "OUTL": "6",
  /** Physical pin 7: OUTR; output. */
  "OUTR": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: DEMP; input. */
  "DEMP": "10",
  /** Physical pin 11: FLT; input. */
  "FLT": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: BCK; input. */
  "BCK": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: LRCK; input. */
  "LRCK": "15",
  /** Physical pin 16: FMT; input. */
  "FMT": "16",
  /** Physical pin 17: XSMT; input. */
  "XSMT": "17",
  /** Physical pin 18: LDOO; passive. */
  "LDOO": "18",
  /** Physical pin 19: DGND; power_in. */
  "DGND": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD": "20",
}) {
  override schema = "Audio:PCM5100A";
  override referencePrefix = "U";
}

/**
 * 2VRMS DirectPath, 106dB Audio Stereo DAC with 32-bit, 384kHz PCM Interface, TSSOP-20
 *
 * KiCad symbol: `Audio:PCM5101`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pcm5101.pdf
 * Keywords: audio dac 2ch 32bit 384kHz.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM5101 extends Component.withPins({
  /** Physical pin 1: CPVDD; passive. */
  "CPVDD": "1",
  /** Physical pin 2: CAPP; passive. */
  "CAPP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: CAPM; passive. */
  "CAPM": "4",
  /** Physical pin 5: VNEG; passive. */
  "VNEG": "5",
  /** Physical pin 6: OUTL; output. */
  "OUTL": "6",
  /** Physical pin 7: OUTR; output. */
  "OUTR": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: DEMP; input. */
  "DEMP": "10",
  /** Physical pin 11: FLT; input. */
  "FLT": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: BCK; input. */
  "BCK": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: LRCK; input. */
  "LRCK": "15",
  /** Physical pin 16: FMT; input. */
  "FMT": "16",
  /** Physical pin 17: XSMT; input. */
  "XSMT": "17",
  /** Physical pin 18: LDOO; passive. */
  "LDOO": "18",
  /** Physical pin 19: DGND; power_in. */
  "DGND": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD": "20",
}) {
  override schema = "Audio:PCM5101";
  override referencePrefix = "U";
}

/**
 * 2.1 VRMS, 106dB Audio Stereo DAC with PLL and 32-bit, 384kHz PCM Interface, TSSOP-20
 *
 * KiCad symbol: `Audio:PCM5101A`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcm5101a.pdf
 * Keywords: audio dac 2ch 32bit 384kHz.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM5101A extends Component.withPins({
  /** Physical pin 1: CPVDD; passive. */
  "CPVDD": "1",
  /** Physical pin 2: CAPP; passive. */
  "CAPP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: CAPM; passive. */
  "CAPM": "4",
  /** Physical pin 5: VNEG; passive. */
  "VNEG": "5",
  /** Physical pin 6: OUTL; output. */
  "OUTL": "6",
  /** Physical pin 7: OUTR; output. */
  "OUTR": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: DEMP; input. */
  "DEMP": "10",
  /** Physical pin 11: FLT; input. */
  "FLT": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: BCK; input. */
  "BCK": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: LRCK; input. */
  "LRCK": "15",
  /** Physical pin 16: FMT; input. */
  "FMT": "16",
  /** Physical pin 17: XSMT; input. */
  "XSMT": "17",
  /** Physical pin 18: LDOO; passive. */
  "LDOO": "18",
  /** Physical pin 19: DGND; power_in. */
  "DGND": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD": "20",
}) {
  override schema = "Audio:PCM5101A";
  override referencePrefix = "U";
}

/**
 * 2VRMS DirectPath, 112dB Audio Stereo DAC with 32-bit, 384kHz PCM Interface, TSSOP-20
 *
 * KiCad symbol: `Audio:PCM5102`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pcm5102.pdf
 * Keywords: audio dac 2ch 32bit 384kHz.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM5102 extends Component.withPins({
  /** Physical pin 1: CPVDD; passive. */
  "CPVDD": "1",
  /** Physical pin 2: CAPP; passive. */
  "CAPP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: CAPM; passive. */
  "CAPM": "4",
  /** Physical pin 5: VNEG; passive. */
  "VNEG": "5",
  /** Physical pin 6: OUTL; output. */
  "OUTL": "6",
  /** Physical pin 7: OUTR; output. */
  "OUTR": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: DEMP; input. */
  "DEMP": "10",
  /** Physical pin 11: FLT; input. */
  "FLT": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: BCK; input. */
  "BCK": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: LRCK; input. */
  "LRCK": "15",
  /** Physical pin 16: FMT; input. */
  "FMT": "16",
  /** Physical pin 17: XSMT; input. */
  "XSMT": "17",
  /** Physical pin 18: LDOO; passive. */
  "LDOO": "18",
  /** Physical pin 19: DGND; power_in. */
  "DGND": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD": "20",
}) {
  override schema = "Audio:PCM5102";
  override referencePrefix = "U";
}

/**
 * 2.1 VRMS, 112dB Audio Stereo DAC with PLL and 32-bit, 384kHz PCM Interface, TSSOP-20
 *
 * KiCad symbol: `Audio:PCM5102A`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcm5102a.pdf
 * Keywords: audio dac 2ch 32bit 384kHz.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM5102A extends Component.withPins({
  /** Physical pin 1: CPVDD; passive. */
  "CPVDD": "1",
  /** Physical pin 2: CAPP; passive. */
  "CAPP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: CAPM; passive. */
  "CAPM": "4",
  /** Physical pin 5: VNEG; passive. */
  "VNEG": "5",
  /** Physical pin 6: OUTL; output. */
  "OUTL": "6",
  /** Physical pin 7: OUTR; output. */
  "OUTR": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: DEMP; input. */
  "DEMP": "10",
  /** Physical pin 11: FLT; input. */
  "FLT": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: BCK; input. */
  "BCK": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: LRCK; input. */
  "LRCK": "15",
  /** Physical pin 16: FMT; input. */
  "FMT": "16",
  /** Physical pin 17: XSMT; input. */
  "XSMT": "17",
  /** Physical pin 18: LDOO; passive. */
  "LDOO": "18",
  /** Physical pin 19: DGND; power_in. */
  "DGND": "19",
  /** Physical pin 20: DVDD; power_in. */
  "DVDD": "20",
}) {
  override schema = "Audio:PCM5102A";
  override referencePrefix = "U";
}

/**
 * 2VRMS DirectPath, 112dB Audio Stereo DAC with 32-bit, 384kHz PCM Interface, TSSOP-28
 *
 * KiCad symbol: `Audio:PCM5122PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pcm5122.pdf
 * Keywords: audio dac 2ch 32bit 384kHz.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM5122PW extends Component.withPins({
  /** Physical pin 1: CPVDD; power_in. */
  "CPVDD": "1",
  /** Physical pin 2: CAPP; passive. */
  "CAPP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: CAPM; passive. */
  "CAPM": "4",
  /** Physical pin 5: VNEG; passive. */
  "VNEG": "5",
  /** Physical pin 6: OUTL; output. */
  "OUTL": "6",
  /** Physical pin 7: OUTR; output. */
  "OUTR": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: VCOM/DEMP; bidirectional. */
  "VCOM/DEMP": "10",
  /** Physical pin 11: SDA/MOSI/ATT2; bidirectional. */
  "SDA/MOSI/ATT2": "11",
  /** Physical pin 12: SCL/MC/ATT1; input. */
  "SCL/MC/ATT1": "12",
  /** Physical pin 13: GPIO5/ATT0; bidirectional. */
  "GPIO5/ATT0": "13",
  /** Physical pin 14: GPIO4/MAST; bidirectional. */
  "GPIO4/MAST": "14",
  /** Physical pin 15: GPIO3/AGNS; bidirectional. */
  "GPIO3/AGNS": "15",
  /** Physical pin 16: ADR2/GPIO2/DOUT; bidirectional. */
  "ADR2/GPIO2/DOUT": "16",
  /** Physical pin 17: MODE1; input. */
  "MODE1": "17",
  /** Physical pin 18: MODE2/MS; input. */
  "MODE2/MS": "18",
  /** Physical pin 19: GPIO6/FLT; bidirectional. */
  "GPIO6/FLT": "19",
  /** Physical pin 20: SCK; input. */
  "SCK": "20",
  /** Physical pin 21: BCK; bidirectional. */
  "BCK": "21",
  /** Physical pin 22: DIN; input. */
  "DIN": "22",
  /** Physical pin 23: LRCK; bidirectional. */
  "LRCK": "23",
  /** Physical pin 24: ADR1/MISO/FMT; bidirectional. */
  "ADR1/MISO/FMT": "24",
  /** Physical pin 25: XSMT; input. */
  "XSMT": "25",
  /** Physical pin 26: LDOO; passive. */
  "LDOO": "26",
  /** Physical pin 27: DGND; power_in. */
  "DGND": "27",
  /** Physical pin 28: DVDD; power_in. */
  "DVDD": "28",
}) {
  override schema = "Audio:PCM5122PW";
  override referencePrefix = "U";
}

/**
 * 2VRMS DirectPath, 106dB Audio Stereo DAC with 32-bit, 384kHz PCM Interface, TSSOP-28
 *
 * KiCad symbol: `Audio:PCM5121PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pcm5121.pdf
 * Keywords: audio dac 2ch 32bit 384kHz.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCM5121PW extends Component.withPins({
  /** Physical pin 1: CPVDD; power_in. */
  "CPVDD": "1",
  /** Physical pin 2: CAPP; passive. */
  "CAPP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: CAPM; passive. */
  "CAPM": "4",
  /** Physical pin 5: VNEG; passive. */
  "VNEG": "5",
  /** Physical pin 6: OUTL; output. */
  "OUTL": "6",
  /** Physical pin 7: OUTR; output. */
  "OUTR": "7",
  /** Physical pin 8: AVDD; power_in. */
  "AVDD": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: VCOM/DEMP; bidirectional. */
  "VCOM/DEMP": "10",
  /** Physical pin 11: SDA/MOSI/ATT2; bidirectional. */
  "SDA/MOSI/ATT2": "11",
  /** Physical pin 12: SCL/MC/ATT1; input. */
  "SCL/MC/ATT1": "12",
  /** Physical pin 13: GPIO5/ATT0; bidirectional. */
  "GPIO5/ATT0": "13",
  /** Physical pin 14: GPIO4/MAST; bidirectional. */
  "GPIO4/MAST": "14",
  /** Physical pin 15: GPIO3/AGNS; bidirectional. */
  "GPIO3/AGNS": "15",
  /** Physical pin 16: ADR2/GPIO2/DOUT; bidirectional. */
  "ADR2/GPIO2/DOUT": "16",
  /** Physical pin 17: MODE1; input. */
  "MODE1": "17",
  /** Physical pin 18: MODE2/MS; input. */
  "MODE2/MS": "18",
  /** Physical pin 19: GPIO6/FLT; bidirectional. */
  "GPIO6/FLT": "19",
  /** Physical pin 20: SCK; input. */
  "SCK": "20",
  /** Physical pin 21: BCK; bidirectional. */
  "BCK": "21",
  /** Physical pin 22: DIN; input. */
  "DIN": "22",
  /** Physical pin 23: LRCK; bidirectional. */
  "LRCK": "23",
  /** Physical pin 24: ADR1/MISO/FMT; bidirectional. */
  "ADR1/MISO/FMT": "24",
  /** Physical pin 25: XSMT; input. */
  "XSMT": "25",
  /** Physical pin 26: LDOO; passive. */
  "LDOO": "26",
  /** Physical pin 27: DGND; power_in. */
  "DGND": "27",
  /** Physical pin 28: DVDD; power_in. */
  "DVDD": "28",
}) {
  override schema = "Audio:PCM5121PW";
  override referencePrefix = "U";
}

/**
 * 2-Channel Audio Volume Control, SPI Interface, +31.5dB to -95.5dB, SOL-16
 *
 * KiCad symbol: `Audio:PGA2310UA`. Reference prefix: `U`.
 * Footprint filters: SOIC*16W*7.5x10.3mm*P1.27mm*.
 * @see https://www.ti.com.cn/cn/lit/gpn/pga2310
 * Keywords: audio volume control 2ch spi.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PGA2310UA extends Component.withPins({
  /** Physical pin 8: ~{MUTE}; input. */
  "~{MUTE}": "8",
  /** Physical pin 1: ZCEN; input. */
  "ZCEN": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: V_{D}+; power_in. */
  "V_{D}+": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
  /** Physical pin 9: V_{IN}R; input. */
  "V_{IN}R": "9",
  /** Physical pin 10: AGNDR; power_in. */
  "AGNDR": "10",
  /** Physical pin 11: V_{OUT}R; output. */
  "V_{OUT}R": "11",
  /** Physical pin 12: V_{A}+; power_in. */
  "V_{A}+": "12",
  /** Physical pin 13: V_{A}-; power_in. */
  "V_{A}-": "13",
  /** Physical pin 14: V_{OUT}L; output. */
  "V_{OUT}L": "14",
  /** Physical pin 15: AGNDL; power_in. */
  "AGNDL": "15",
  /** Physical pin 16: V_{IN}L; input. */
  "V_{IN}L": "16",
}) {
  override schema = "Audio:PGA2310UA";
  override referencePrefix = "U";
}

/**
 * 2-Channel Audio Volume Control, SPI Interface, +31.5dB to -95.5dB, PDIP-16
 *
 * KiCad symbol: `Audio:PGA2310PA`. Reference prefix: `U`.
 * Footprint filters: DIP*16*W7.62mm*.
 * @see https://www.ti.com.cn/cn/lit/gpn/pga2310
 * Keywords: audio volume control 2ch spi.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PGA2310PA extends Component.withPins({
  /** Physical pin 8: ~{MUTE}; input. */
  "~{MUTE}": "8",
  /** Physical pin 1: ZCEN; input. */
  "ZCEN": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: V_{D}+; power_in. */
  "V_{D}+": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
  /** Physical pin 9: V_{IN}R; input. */
  "V_{IN}R": "9",
  /** Physical pin 10: AGNDR; power_in. */
  "AGNDR": "10",
  /** Physical pin 11: V_{OUT}R; output. */
  "V_{OUT}R": "11",
  /** Physical pin 12: V_{A}+; power_in. */
  "V_{A}+": "12",
  /** Physical pin 13: V_{A}-; power_in. */
  "V_{A}-": "13",
  /** Physical pin 14: V_{OUT}L; output. */
  "V_{OUT}L": "14",
  /** Physical pin 15: AGNDL; power_in. */
  "AGNDL": "15",
  /** Physical pin 16: V_{IN}L; input. */
  "V_{IN}L": "16",
}) {
  override schema = "Audio:PGA2310PA";
  override referencePrefix = "U";
}

/**
 * Digitally Controlled Microphone Preamplifier
 *
 * KiCad symbol: `Audio:PGA2500`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3*10.2mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/pga2500.pdf
 * Keywords: Digitally Controlled Microphone Preamplifier.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PGA2500 extends Component.withPins({
  /** Physical pin 1: GPO1; output. */
  "GPO1": "1",
  /** Physical pin 2: GPO2; output. */
  "GPO2": "2",
  /** Physical pin 3: GPO3; output. */
  "GPO3": "3",
  /** Physical pin 4: GPO4; output. */
  "GPO4": "4",
  /** Physical pin 5: OVR; output. */
  "OVR": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND": "6",
  /** Physical pin 7: ~{DCEN}; input. */
  "~{DCEN}": "7",
  /** Physical pin 8: 0dB; input. */
  "0dB": "8",
  /** Physical pin 9: ZCEN; input. */
  "ZCEN": "9",
  /** Physical pin 10: SDI; input. */
  "SDI": "10",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: VD-; power_in. */
  "VD-": "14",
  /** Physical pin 15: VA-; power_in. */
  "VA-_15": "15",
  /** Physical pin 16: V_{OUT}-; output. */
  "V_{OUT}-": "16",
  /** Physical pin 17: V_{OUT}+; output. */
  "V_{OUT}+": "17",
  /** Physical pin 18: VA+; power_in. */
  "VA+_18": "18",
  /** Physical pin 19: VA+; power_in. */
  "VA+_19": "19",
  /** Physical pin 20: VA-; power_in. */
  "VA-_20": "20",
  /** Physical pin 21: C_{S22}; output. */
  "C_{S22}": "21",
  /** Physical pin 22: C_{S21}; output. */
  "C_{S21}": "22",
  /** Physical pin 23: C_{S12}; output. */
  "C_{S12}": "23",
  /** Physical pin 24: C_{S11}; output. */
  "C_{S11}": "24",
  /** Physical pin 25: VIN_{COM}; power_in. */
  "VIN_{COM}": "25",
  /** Physical pin 26: V_{IN}-; input. */
  "V_{IN}-": "26",
  /** Physical pin 27: V_{IN}+; input. */
  "V_{IN}+": "27",
  /** Physical pin 28: AGND; power_in. */
  "AGND": "28",
}) {
  override schema = "Audio:PGA2500";
  override referencePrefix = "U";
}

/**
 * 4-Channel Audio Volume Control, SPI Interface, +31.5dB to -95.5dB, SOIC-28W
 *
 * KiCad symbol: `Audio:PGA4311`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/pga4311.pdf
 * Keywords: audio volume control 4ch spi.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PGA4311 extends Component.withPins({
  /** Physical pin 1: ~{MUTE}; input. */
  "~{MUTE}": "1",
  /** Physical pin 2: AGND_1; power_in. */
  "AGND_1_2": "2",
  /** Physical pin 3: Ain-1; input. */
  "Ain-1": "3",
  /** Physical pin 4: AGND_1; passive. */
  "AGND_1_4": "4",
  /** Physical pin 5: Aout_1; output. */
  "Aout_1": "5",
  /** Physical pin 6: VA-; power_in. */
  "VA-_6": "6",
  /** Physical pin 7: VA+; power_in. */
  "VA+_7": "7",
  /** Physical pin 8: Aout_3; output. */
  "Aout_3": "8",
  /** Physical pin 9: AGND_3; power_in. */
  "AGND_3_9": "9",
  /** Physical pin 10: Ain-3; input. */
  "Ain-3": "10",
  /** Physical pin 11: AGND_3; passive. */
  "AGND_3_11": "11",
  /** Physical pin 12: VD+; power_in. */
  "VD+": "12",
  /** Physical pin 13: SDI; input. */
  "SDI": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: SCLK; input. */
  "SCLK": "15",
  /** Physical pin 16: SDO; output. */
  "SDO": "16",
  /** Physical pin 17: DGND; power_in. */
  "DGND": "17",
  /** Physical pin 18: AGND_4; power_in. */
  "AGND_4_18": "18",
  /** Physical pin 19: Ain-4; input. */
  "Ain-4": "19",
  /** Physical pin 20: AGND_4; passive. */
  "AGND_4_20": "20",
  /** Physical pin 21: Aout_4; output. */
  "Aout_4": "21",
  /** Physical pin 22: VA+; passive. */
  "VA+_22": "22",
  /** Physical pin 23: VA-; passive. */
  "VA-_23": "23",
  /** Physical pin 24: Aout_2; output. */
  "Aout_2": "24",
  /** Physical pin 25: AGND_2; power_in. */
  "AGND_2_25": "25",
  /** Physical pin 26: Ain-2; input. */
  "Ain-2": "26",
  /** Physical pin 27: AGND_2; passive. */
  "AGND_2_27": "27",
  /** Physical pin 28: ZCEN; input. */
  "ZCEN": "28",
}) {
  override schema = "Audio:PGA4311";
  override referencePrefix = "U";
}

/**
 * 6-Channel Electronic Volume Controller, DIP-20
 *
 * KiCad symbol: `Audio:PT2258`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.princeton.com.tw/Portals/0/Product/PT2258-s.pdf
 * Keywords: Volume.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PT2258 extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN2; input. */
  "IN2": "2",
  /** Physical pin 3: IN3; input. */
  "IN3": "3",
  /** Physical pin 4: CODE2; input. */
  "CODE2": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: SCL; bidirectional. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: IN4; input. */
  "IN4": "8",
  /** Physical pin 9: IN5; input. */
  "IN5": "9",
  /** Physical pin 10: IN6; input. */
  "IN6": "10",
  /** Physical pin 11: OUT6; output. */
  "OUT6": "11",
  /** Physical pin 12: OUT5; output. */
  "OUT5": "12",
  /** Physical pin 13: OUT4; output. */
  "OUT4": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: REF; output. */
  "REF": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: CODE1; input. */
  "CODE1": "17",
  /** Physical pin 18: OUT3; output. */
  "OUT3": "18",
  /** Physical pin 19: OUT2; output. */
  "OUT2": "19",
  /** Physical pin 20: OUT1; output. */
  "OUT1": "20",
}) {
  override schema = "Audio:PT2258";
  override referencePrefix = "U";
}

/**
 * 6-Channel Electronic Volume Controller, SOP-20
 *
 * KiCad symbol: `Audio:PT2258-S`. Reference prefix: `U`.
 * Footprint filters: SO*12.8x7.5mm*P1.27mm*.
 * @see http://www.princeton.com.tw/Portals/0/Product/PT2258-s.pdf
 * Keywords: Volume.
 * Default footprint: Package_SO:SO-20_12.8x7.5mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PT2258_S extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN2; input. */
  "IN2": "2",
  /** Physical pin 3: IN3; input. */
  "IN3": "3",
  /** Physical pin 4: CODE2; input. */
  "CODE2": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: SCL; bidirectional. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: IN4; input. */
  "IN4": "8",
  /** Physical pin 9: IN5; input. */
  "IN5": "9",
  /** Physical pin 10: IN6; input. */
  "IN6": "10",
  /** Physical pin 11: OUT6; output. */
  "OUT6": "11",
  /** Physical pin 12: OUT5; output. */
  "OUT5": "12",
  /** Physical pin 13: OUT4; output. */
  "OUT4": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: REF; output. */
  "REF": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 17: CODE1; input. */
  "CODE1": "17",
  /** Physical pin 18: OUT3; output. */
  "OUT3": "18",
  /** Physical pin 19: OUT2; output. */
  "OUT2": "19",
  /** Physical pin 20: OUT1; output. */
  "OUT1": "20",
}) {
  override schema = "Audio:PT2258-S";
  override referencePrefix = "U";
}

/**
 * Echo Processor IC, DIP-16
 *
 * KiCad symbol: `Audio:PT2399`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.princeton.com.tw/Portals/0/Product/PT2399_1.pdf
 * Keywords: CMOS ADC DAC 44K Digital processing VCO.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PT2399 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: REF; passive. */
  "REF": "2",
  /** Physical pin 3: AGND; power_in. */
  "AGND": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: CLK_O; passive. */
  "CLK_O": "5",
  /** Physical pin 6: VCO; passive. */
  "VCO": "6",
  /** Physical pin 7: CC1; passive. */
  "CC1": "7",
  /** Physical pin 8: CC0; passive. */
  "CC0": "8",
  /** Physical pin 9: OP1-OUT; output. */
  "OP1-OUT": "9",
  /** Physical pin 10: OP1-IN; input. */
  "OP1-IN": "10",
  /** Physical pin 11: OP2-IN; input. */
  "OP2-IN": "11",
  /** Physical pin 12: OP2-OUT; output. */
  "OP2-OUT": "12",
  /** Physical pin 13: LPF2-IN; input. */
  "LPF2-IN": "13",
  /** Physical pin 14: LPF2-OUT; output. */
  "LPF2-OUT": "14",
  /** Physical pin 15: LPF1-OUT; output. */
  "LPF1-OUT": "15",
  /** Physical pin 16: LPF1-IN; input. */
  "LPF1-IN": "16",
}) {
  override schema = "Audio:PT2399";
  override referencePrefix = "U";
}

/**
 * Analog Delay Line 256 sample bucket brigade device, 512usec to more than 1second, input signal frequency range 0 to 170KHz, clock frequency range 500Hz to 1MHz
 *
 * KiCad symbol: `Audio:RD5106A`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see http://pdf.datasheetarchive.com/indexerfiles/Scans-091/DSAHI00048836.pdf
 * Keywords: EG&G RETICON BBD N-channel silicon-gate.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RD5106A extends Component.withPins({
  /** Physical pin 1: Clock; input. */
  "Clock": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: Output; output. */
  "Output": "4",
  /** Physical pin 5: VBB; power_in. */
  "VBB": "5",
  /** Physical pin 6: Input; input. */
  "Input": "6",
  /** Physical pin 7: Sync; input. */
  "Sync": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Audio:RD5106A";
  override referencePrefix = "U";
}

/**
 * Analog Delay Line 512 sample bucket brigade device, 1msec to more than 2seconds, input signal frequency range 0 to 170KHz, clock frequency range 500Hz to 1MHz
 *
 * KiCad symbol: `Audio:RD5107A`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see http://pdf.datasheetarchive.com/indexerfiles/Scans-091/DSAHI00048836.pdf
 * Keywords: EG&G RETICON BBD N-channel silicon-gate.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RD5107A extends Component.withPins({
  /** Physical pin 1: Clock; input. */
  "Clock": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: Output; output. */
  "Output": "4",
  /** Physical pin 5: VBB; power_in. */
  "VBB": "5",
  /** Physical pin 6: Input; input. */
  "Input": "6",
  /** Physical pin 7: Sync; input. */
  "Sync": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Audio:RD5107A";
  override referencePrefix = "U";
}

/**
 * Piezoelectric Horn Driver with Boost Converter, 3.3V supply, Tri-State Horn Enable, SOIC-8
 *
 * KiCad symbol: `Audio:RE46C317`. Reference prefix: `U`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22301B.pdf
 * Keywords: Microchip step-up.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RE46C317 extends Component.withPins({
  /** Physical pin 1: FEED; input. */
  "FEED": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: LX; input. */
  "LX": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: V_{O}; input. */
  "V_{O}": "5",
  /** Physical pin 6: HORNB; output. */
  "HORNB": "6",
  /** Physical pin 7: HORNS; output. */
  "HORNS": "7",
  /** Physical pin 8: HRNEN; input. */
  "HRNEN": "8",
}) {
  override schema = "Audio:RE46C317";
  override referencePrefix = "U";
}

/**
 * Piezoelectric Horn Driver with Boost Converter, 3.3V supply, SOIC-8
 *
 * KiCad symbol: `Audio:RE46C318`. Reference prefix: `U`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22301B.pdf
 * Keywords: Horn driver Piezo.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RE46C318 extends Component.withPins({
  /** Physical pin 1: FEED; input. */
  "FEED": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: LX; input. */
  "LX": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: V_{O}; input. */
  "V_{O}": "5",
  /** Physical pin 6: HORNB; output. */
  "HORNB": "6",
  /** Physical pin 7: HORNS; output. */
  "HORNS": "7",
  /** Physical pin 8: HRNEN; input. */
  "HRNEN": "8",
}) {
  override schema = "Audio:RE46C318";
  override referencePrefix = "U";
}

/**
 * SAD-1024 DUAL ANALOG DELAY LINE, bucket brigade device, 2 independent 512 stages, signal frequency range 0 to 200KHz, clock frequency range 1.5KHz to 1.5MHz
 *
 * KiCad symbol: `Audio:SAD1024`. Reference prefix: `U`.
 * Footprint filters: DIP-16*.
 * @see http://thmq.mysteria.cz/em1022/SAD1024.pdf
 * Keywords: EG&G RETICON BBD N-channel silicon-gate.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SAD1024 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 7: Vdd; power_in. */
  "Vdd": "7",
  /** Physical pin 9: Vbb; power_in. */
  "Vbb": "9",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: 02A; input. */
  "02A": "3",
  /** Physical pin 5: OUT_A; output. */
  "OUT_A": "5",
  /** Physical pin 6: OUT_A'; output. */
  "OUT_A'": "6",
  /** Physical pin 8: 01A; input. */
  "01A": "8",
  /** Physical pin 10: 01B; input. */
  "01B": "10",
  /** Physical pin 11: OUT_B'; output. */
  "OUT_B'": "11",
  /** Physical pin 12: OUT_B; output. */
  "OUT_B": "12",
  /** Physical pin 14: 02B; input. */
  "02B": "14",
  /** Physical pin 15: IN_B; input. */
  "IN_B": "15",
}) {
  override schema = "Audio:SAD1024";
  override referencePrefix = "U";
}

/**
 * SAD-512 ANALOG DELAY LINE, bucket brigade device, 512 stages, signal frequency range 0 to 200KHz, clock frequency range 1.5KHz to 1.5MHz
 *
 * KiCad symbol: `Audio:SAD512`. Reference prefix: `U`.
 * Footprint filters: DIP-16*.
 * @see http://thmq.mysteria.cz/em1022/SAD1024.pdf
 * Keywords: EG&G RETICON BBD N-channel silicon-gate.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SAD512 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 7: Vdd; power_in. */
  "Vdd": "7",
  /** Physical pin 9: Vbb; power_in. */
  "Vbb": "9",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 2: IN_A; input. */
  "IN_A": "2",
  /** Physical pin 3: 02A; input. */
  "02A": "3",
  /** Physical pin 5: OUT_A; output. */
  "OUT_A": "5",
  /** Physical pin 6: OUT_A'; output. */
  "OUT_A'": "6",
  /** Physical pin 8: 01A; input. */
  "01A": "8",
  /** Physical pin 10: 01B; input. */
  "01B": "10",
  /** Physical pin 11: OUT_B'; output. */
  "OUT_B'": "11",
  /** Physical pin 12: OUT_B; output. */
  "OUT_B": "12",
  /** Physical pin 14: 02B; input. */
  "02B": "14",
  /** Physical pin 15: IN_B; input. */
  "IN_B": "15",
}) {
  override schema = "Audio:SAD512";
  override referencePrefix = "U";
}

/**
 * Low Power Stereo Codec with Headphone Amp, QFN-32
 *
 * KiCad symbol: `Audio:SGTL5000XNAA3`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SGTL5000.pdf
 * Keywords: Codec.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SGTL5000XNAA3 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: HP_R; output. */
  "HP_R": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: HP_VGND; power_out. */
  "HP_VGND": "4",
  /** Physical pin 5: VDDA; power_in. */
  "VDDA": "5",
  /** Physical pin 6: HP_L; output. */
  "HP_L": "6",
  /** Physical pin 7: AGND; power_in. */
  "AGND": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: VAG; passive. */
  "VAG": "10",
  /** Physical pin 11: LINEOUT_R; output. */
  "LINEOUT_R": "11",
  /** Physical pin 12: LINEOUT_L; output. */
  "LINEOUT_L": "12",
  /** Physical pin 13: LINEIN_R; input. */
  "LINEIN_R": "13",
  /** Physical pin 14: LINEIN_L; input. */
  "LINEIN_L": "14",
  /** Physical pin 15: MIC; input. */
  "MIC": "15",
  /** Physical pin 16: MIC_BIAS; input. */
  "MIC_BIAS": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: CPFILT; input. */
  "CPFILT": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: VDDIO; power_in. */
  "VDDIO": "20",
  /** Physical pin 21: SYS_MCLK; input. */
  "SYS_MCLK": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: I2S_LRCLK; input. */
  "I2S_LRCLK": "23",
  /** Physical pin 24: I2S_SCLK; input. */
  "I2S_SCLK": "24",
  /** Physical pin 25: I2S_DOUT; output. */
  "I2S_DOUT": "25",
  /** Physical pin 26: I2S_DIN; input. */
  "I2S_DIN": "26",
  /** Physical pin 27: CTRL_DATA; input. */
  "CTRL_DATA": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: CTRL_CLK; input. */
  "CTRL_CLK": "29",
  /** Physical pin 30: VDDD; power_in. */
  "VDDD": "30",
  /** Physical pin 31: CTRL_ADR0_CS; input. */
  "CTRL_ADR0_CS": "31",
  /** Physical pin 32: CTRL_MODE; input. */
  "CTRL_MODE": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "Audio:SGTL5000XNAA3";
  override referencePrefix = "U";
}

/**
 * Low Power Stereo Codec with Headphone Amp, QFN-20
 *
 * KiCad symbol: `Audio:SGTL5000XNLA3`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.4mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SGTL5000.pdf
 * Keywords: Codec.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_3x3mm_P0.4mm_EP1.65x1.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SGTL5000XNLA3 extends Component.withPins({
  /** Physical pin 1: HP_R; output. */
  "HP_R": "1",
  /** Physical pin 2: HP_VGND; power_out. */
  "HP_VGND": "2",
  /** Physical pin 3: VDDA; power_in. */
  "VDDA": "3",
  /** Physical pin 4: HP_L; output. */
  "HP_L": "4",
  /** Physical pin 5: VAG; passive. */
  "VAG": "5",
  /** Physical pin 6: LINEOUT_R; output. */
  "LINEOUT_R": "6",
  /** Physical pin 7: LINEOUT_L; output. */
  "LINEOUT_L": "7",
  /** Physical pin 8: LINEIN_R; input. */
  "LINEIN_R": "8",
  /** Physical pin 9: LINEIN_L; input. */
  "LINEIN_L": "9",
  /** Physical pin 10: MIC; input. */
  "MIC": "10",
  /** Physical pin 11: MIC_BIAS; input. */
  "MIC_BIAS": "11",
  /** Physical pin 12: VDDIO; power_in. */
  "VDDIO": "12",
  /** Physical pin 13: SYS_MCLK; input. */
  "SYS_MCLK": "13",
  /** Physical pin 14: I2S_LRCLK; input. */
  "I2S_LRCLK": "14",
  /** Physical pin 15: I2S_SCLK; input. */
  "I2S_SCLK": "15",
  /** Physical pin 16: I2S_DOUT; output. */
  "I2S_DOUT": "16",
  /** Physical pin 17: I2S_DIN; input. */
  "I2S_DIN": "17",
  /** Physical pin 18: CTRL_DATA; input. */
  "CTRL_DATA": "18",
  /** Physical pin 19: CTRL_CLK; input. */
  "CTRL_CLK": "19",
  /** Physical pin 20: VDDD; power_in. */
  "VDDD": "20",
  /** Physical pin 21: GND; power_in. */
  "GND": "21",
}) {
  override schema = "Audio:SGTL5000XNLA3";
  override referencePrefix = "U";
}

/**
 * Digital Complex Sound Generator, 3 square wave channels, 1 noise channel, up to 4MHz clock input, DIP-16
 *
 * KiCad symbol: `Audio:SN76489AN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.vgmpf.com/Wiki/images/7/78/SN76489AN_-_Manual.pdf
 * Keywords: Texas-Instruments programmable-sound-generator PSG TTL-compatible Obsolete.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN76489AN extends Component.withPins({
  /** Physical pin 1: D2; input. */
  "D2": "1",
  /** Physical pin 2: D1; input. */
  "D1": "2",
  /** Physical pin 3: D0; input. */
  "D0": "3",
  /** Physical pin 4: READY; open_collector. */
  "READY": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: ~{CE}; input. */
  "~{CE}": "6",
  /** Physical pin 7: AUDIO_OUT; output. */
  "AUDIO_OUT": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: D7; input. */
  "D7": "10",
  /** Physical pin 11: D6; input. */
  "D6": "11",
  /** Physical pin 12: D5; input. */
  "D5": "12",
  /** Physical pin 13: D4; input. */
  "D4": "13",
  /** Physical pin 14: CLOCK; input. */
  "CLOCK": "14",
  /** Physical pin 15: D3; input. */
  "D3": "15",
  /** Physical pin 16: V_{CC}; power_in. */
  "V_{CC}": "16",
}) {
  override schema = "Audio:SN76489AN";
  override referencePrefix = "U";
}

/**
 * Digital Complex Sound Generator, 3 square wave channels, 1 noise channel, up to 500kHz clock input, audio input pin, DIP-16
 *
 * KiCad symbol: `Audio:SN76494AN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.vgmpf.com/Wiki/images/9/9c/SN76494_-_Manual.pdf
 * Keywords: Texas-Instruments programmable-sound-generator PSG TTL-compatible SN76489AN-replacement Obsolete.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN76494AN extends Component.withPins({
  /** Physical pin 1: D2; input. */
  "D2": "1",
  /** Physical pin 2: D1; input. */
  "D1": "2",
  /** Physical pin 3: D0; input. */
  "D0": "3",
  /** Physical pin 4: READY; open_collector. */
  "READY": "4",
  /** Physical pin 5: ~{WE}; input. */
  "~{WE}": "5",
  /** Physical pin 6: ~{CE}; input. */
  "~{CE}": "6",
  /** Physical pin 7: AUDIO_OUT; output. */
  "AUDIO_OUT": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: AUDIO_IN; input. */
  "AUDIO_IN": "9",
  /** Physical pin 10: D7; input. */
  "D7": "10",
  /** Physical pin 11: D6; input. */
  "D6": "11",
  /** Physical pin 12: D5; input. */
  "D5": "12",
  /** Physical pin 13: D4; input. */
  "D4": "13",
  /** Physical pin 14: CLOCK; input. */
  "CLOCK": "14",
  /** Physical pin 15: D3; input. */
  "D3": "15",
  /** Physical pin 16: V_{CC}; power_in. */
  "V_{CC}": "16",
}) {
  override schema = "Audio:SN76494AN";
  override referencePrefix = "U";
}

/**
 * Spin Semiconductor FV-1 Reverb IC, SOIC-28W
 *
 * KiCad symbol: `Audio:SPN1001`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://www.spinsemi.com/Products/datasheets/spn1001/FV-1.pdf
 * Keywords: SpinSemi FV-1 SPN1001.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SPN1001 extends Component.withPins({
  /** Physical pin 1: LIN; input. */
  "LIN": "1",
  /** Physical pin 2: RIN; input. */
  "RIN": "2",
  /** Physical pin 3: MID; power_out. */
  "MID": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: CLIP; power_out. */
  "CLIP": "5",
  /** Physical pin 6: AVDD; power_in. */
  "AVDD": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: DVDD; power_in. */
  "DVDD_8": "8",
  /** Physical pin 9: X2; input. */
  "X2": "9",
  /** Physical pin 10: X1; input. */
  "X1": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: T1; input. */
  "T1": "12",
  /** Physical pin 13: T0; input. */
  "T0": "13",
  /** Physical pin 14: SCK; bidirectional. */
  "SCK": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: S0; input. */
  "S0": "16",
  /** Physical pin 17: S1; input. */
  "S1": "17",
  /** Physical pin 18: S2; input. */
  "S2": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: POT0; input. */
  "POT0": "20",
  /** Physical pin 21: POT1; input. */
  "POT1": "21",
  /** Physical pin 22: POT2; input. */
  "POT2": "22",
  /** Physical pin 23: DVDD; passive. */
  "DVDD_23": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: REFN; input. */
  "REFN": "25",
  /** Physical pin 26: REFP; input. */
  "REFP": "26",
  /** Physical pin 27: ROUT; output. */
  "ROUT": "27",
  /** Physical pin 28: LOUT; output. */
  "LOUT": "28",
}) {
  override schema = "Audio:SPN1001";
  override referencePrefix = "U";
}

/**
 * Two-Channel, Asynchronous Sample Rate Converter with Integrated Digital Audio Interface Receiver and Transmitter, TQFP-48
 *
 * KiCad symbol: `Audio:SRC4392xPFB`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/src4392.pdf
 * Keywords: audio sample rate converter.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SRC4392xPFB extends Component.withPins({
  /** Physical pin 1: RX1+; input. */
  "RX1+": "1",
  /** Physical pin 2: RX1-; input. */
  "RX1-": "2",
  /** Physical pin 3: RX2+; input. */
  "RX2+": "3",
  /** Physical pin 4: RX2-; input. */
  "RX2-": "4",
  /** Physical pin 5: RX3+; input. */
  "RX3+": "5",
  /** Physical pin 6: RX3-; input. */
  "RX3-": "6",
  /** Physical pin 7: RX4+; input. */
  "RX4+": "7",
  /** Physical pin 8: RX4-; input. */
  "RX4-": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND": "10",
  /** Physical pin 11: ~{LOCK}; output. */
  "~{LOCK}": "11",
  /** Physical pin 12: RXCKO; output. */
  "RXCKO": "12",
  /** Physical pin 13: RXCKI; input. */
  "RXCKI": "13",
  /** Physical pin 14: MUTE; input. */
  "MUTE": "14",
  /** Physical pin 15: ~{RDY}; output. */
  "~{RDY}": "15",
  /** Physical pin 16: DGND1; power_in. */
  "DGND1": "16",
  /** Physical pin 17: VDD18; power_in. */
  "VDD18": "17",
  /** Physical pin 18: CPM; input. */
  "CPM": "18",
  /** Physical pin 19: ~{CS}/A0; input. */
  "~{CS}/A0": "19",
  /** Physical pin 20: CCLK/SCL; input. */
  "CCLK/SCL": "20",
  /** Physical pin 21: CDIN/A1; input. */
  "CDIN/A1": "21",
  /** Physical pin 22: CDOUT/SDA; bidirectional. */
  "CDOUT/SDA": "22",
  /** Physical pin 23: ~{INT}; open_collector. */
  "~{INT}": "23",
  /** Physical pin 24: ~{RST}; input. */
  "~{RST}": "24",
  /** Physical pin 25: MCLK; input. */
  "MCLK": "25",
  /** Physical pin 26: GPO1; output. */
  "GPO1": "26",
  /** Physical pin 27: GPO2; output. */
  "GPO2": "27",
  /** Physical pin 28: GPO3; output. */
  "GPO3": "28",
  /** Physical pin 29: GPO4; output. */
  "GPO4": "29",
  /** Physical pin 30: DGND2; power_in. */
  "DGND2": "30",
  /** Physical pin 31: TX-; output. */
  "TX-": "31",
  /** Physical pin 32: TX+; output. */
  "TX+": "32",
  /** Physical pin 33: VDD33; power_in. */
  "VDD33": "33",
  /** Physical pin 34: AESOUT; output. */
  "AESOUT": "34",
  /** Physical pin 35: BLS; bidirectional. */
  "BLS": "35",
  /** Physical pin 36: SYNC; output. */
  "SYNC": "36",
  /** Physical pin 37: BCKA; bidirectional. */
  "BCKA": "37",
  /** Physical pin 38: LRCKA; bidirectional. */
  "LRCKA": "38",
  /** Physical pin 39: SDINA; input. */
  "SDINA": "39",
  /** Physical pin 40: SDOUTA; output. */
  "SDOUTA": "40",
  /** Physical pin 41: NC; no_connect. */
  "NC": "41",
  /** Physical pin 42: VIO; power_in. */
  "VIO": "42",
  /** Physical pin 43: DGND3; power_in. */
  "DGND3": "43",
  /** Physical pin 44: BGND; power_in. */
  "BGND": "44",
  /** Physical pin 45: SDOUTB; output. */
  "SDOUTB": "45",
  /** Physical pin 46: SDINB; input. */
  "SDINB": "46",
  /** Physical pin 47: LRCKB; bidirectional. */
  "LRCKB": "47",
  /** Physical pin 48: BCKB; bidirectional. */
  "BCKB": "48",
}) {
  override schema = "Audio:SRC4392xPFB";
  override referencePrefix = "U";
}

/**
 * Four-pole VCF, SSOP-16
 *
 * KiCad symbol: `Audio:SSI2144`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.soundsemiconductor.com/downloads/ssi2144datasheet.pdf
 * Keywords: Sound Semiconductor VCF SSM2044.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSI2144 extends Component.withPins({
  /** Physical pin 1: SIG_IN+; input. */
  "SIG_IN+": "1",
  /** Physical pin 2: SIG_IN-; input. */
  "SIG_IN-": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: C4A; passive. */
  "C4A": "4",
  /** Physical pin 5: C4B; passive. */
  "C4B": "5",
  /** Physical pin 6: C3A; passive. */
  "C3A": "6",
  /** Physical pin 7: C3B; passive. */
  "C3B": "7",
  /** Physical pin 8: V-; power_in. */
  "V-": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: C2B; passive. */
  "C2B": "10",
  /** Physical pin 11: C2A; passive. */
  "C2A": "11",
  /** Physical pin 12: C1B; passive. */
  "C1B": "12",
  /** Physical pin 13: C1A; passive. */
  "C1A": "13",
  /** Physical pin 14: Q_CTRL; passive. */
  "Q_CTRL": "14",
  /** Physical pin 15: FREQ_CTRL; passive. */
  "FREQ_CTRL": "15",
  /** Physical pin 16: V+; power_in. */
  "V+": "16",
}) {
  override schema = "Audio:SSI2144";
  override referencePrefix = "U";
}

/**
 * Quad VCA, SOIC-16
 *
 * KiCad symbol: `Audio:SSI2164`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.soundsemiconductor.com/downloads/ssi2164datasheet.pdf
 * Keywords: Sound Semiconductor VCA SSM2164.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSI2164 extends Component.withPins({
  /** Physical pin 1: MODE; passive. */
  "MODE": "1",
  /** Physical pin 2: I_IN1; input. */
  "I_IN1": "2",
  /** Physical pin 3: VC1; passive. */
  "VC1": "3",
  /** Physical pin 4: I_OUT1; output. */
  "I_OUT1": "4",
  /** Physical pin 5: I_OUT2; output. */
  "I_OUT2": "5",
  /** Physical pin 6: VC2; passive. */
  "VC2": "6",
  /** Physical pin 7: I_IN2; input. */
  "I_IN2": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: V-; power_in. */
  "V-": "9",
  /** Physical pin 10: I_IN3; input. */
  "I_IN3": "10",
  /** Physical pin 11: VC3; passive. */
  "VC3": "11",
  /** Physical pin 12: I_OUT3; output. */
  "I_OUT3": "12",
  /** Physical pin 13: I_OUT4; output. */
  "I_OUT4": "13",
  /** Physical pin 14: VC4; passive. */
  "VC4": "14",
  /** Physical pin 15: I_IN4; input. */
  "I_IN4": "15",
  /** Physical pin 16: V+; power_in. */
  "V+": "16",
}) {
  override schema = "Audio:SSI2164";
  override referencePrefix = "U";
}

/**
 * BUCKET BRIGADE DELAY LINE FOR ANALOGUE SIGNALS, 512 stages, delay time 0.512ms to 51.2ms, signal frequency range 0 to 45KHz, clock frequency range 5KHz to 500KHz, DIP-16
 *
 * KiCad symbol: `Audio:TDA1022`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://thmq.mysteria.cz/em1022/TDA1022.pdf
 * Keywords: PHILIPS BBD MOS monolithic delay analogue.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA1022 extends Component.withPins({
  /** Physical pin 1: CL1; input. */
  "CL1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: CL2; input. */
  "CL2": "4",
  /** Physical pin 5: Input; input. */
  "Input": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: Output513; output. */
  "Output513": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: Output512; output. */
  "Output512": "12",
  /** Physical pin 13: V13-16; power_in. */
  "V13-16": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
}) {
  override schema = "Audio:TDA1022";
  override referencePrefix = "U";
}

/**
 * Low-Noise, Differential Audio Preamplifier IC, 0.005% THD+N, -134.8dBu EIN, QFN-16
 *
 * KiCad symbol: `Audio:THAT1580`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see http://www.thatcorp.com/datashts/THAT_1580_Datasheet.pdf
 * Keywords: diff amp mic preamp.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT1580 extends Component.withPins({
  /** Physical pin 3: 1; output. */
  "1": "3",
  /** Physical pin 2: 2; output. */
  "P2": "2",
  /** Physical pin 6: Rg1; passive. */
  "Rg1": "6",
  /** Physical pin 7: IN1; input. */
  "IN1": "7",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V+; power_in. */
  "V+": "13",
  /** Physical pin 15: Rg2; passive. */
  "Rg2": "15",
  /** Physical pin 17: V-; passive. */
  "V-_17": "17",
}) {
  override schema = "Audio:THAT1580";
  override referencePrefix = "U";
}

/**
 * Low-Noise, Differential Audio Preamplifier IC, 0.006% THD+N, -128.9dBu EIN, QFN-16
 *
 * KiCad symbol: `Audio:THAT1583`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*.
 * @see http://www.thatcorp.com/datashts/THAT_1583_Datasheet.pdf
 * Keywords: diff amp mic preamp.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT1583 extends Component.withPins({
  /** Physical pin 3: 1; output. */
  "1": "3",
  /** Physical pin 2: 2; output. */
  "P2": "2",
  /** Physical pin 6: Rg1; passive. */
  "Rg1": "6",
  /** Physical pin 7: IN1; input. */
  "IN1": "7",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V+; power_in. */
  "V+": "13",
  /** Physical pin 15: Rg2; passive. */
  "Rg2": "15",
  /** Physical pin 17: V-; passive. */
  "V-_17": "17",
}) {
  override schema = "Audio:THAT1583";
  override referencePrefix = "U";
}

/**
 * High-Performance Digital Preamplifier Controller IC, QFN-32
 *
 * KiCad symbol: `Audio:THAT5171`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.65mm*.
 * @see http://www.thatcorp.com/datashts/THAT_5171_Datasheet.pdf
 * Keywords: mic preamp gain controller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP5.4x5.4mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT5171 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: Rg1; passive. */
  "Rg1": "3",
  /** Physical pin 4: IN1; input. */
  "IN1": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: Rg2; passive. */
  "Rg2": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC": "9",
  /** Physical pin 10: AGND; power_in. */
  "AGND_10": "10",
  /** Physical pin 11: VEE; power_in. */
  "VEE": "11",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: AGND; passive. */
  "AGND_28": "28",
  /** Physical pin 29: SCAP1; passive. */
  "SCAP1": "29",
  /** Physical pin 30: SCAP2; passive. */
  "SCAP2": "30",
  /** Physical pin 31: SOUT1; output. */
  "SOUT1": "31",
  /** Physical pin 32: SOUT2; output. */
  "SOUT2": "32",
  /** Physical pin 33: PAD; passive. */
  "PAD": "33",
  /** Physical pin 12: DGND; power_in. */
  "DGND_12": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD_13": "13",
  /** Physical pin 14: TRC; passive. */
  "TRC": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: SCLK; input. */
  "SCLK": "17",
  /** Physical pin 18: DIN; input. */
  "DIN": "18",
  /** Physical pin 19: DOUT; tri_state. */
  "DOUT": "19",
  /** Physical pin 20: DGND; passive. */
  "DGND_20": "20",
  /** Physical pin 21: VDD; passive. */
  "VDD_21": "21",
  /** Physical pin 22: BSY; output. */
  "BSY": "22",
  /** Physical pin 23: GPO0; bidirectional. */
  "GPO0": "23",
  /** Physical pin 24: GPO1; bidirectional. */
  "GPO1": "24",
  /** Physical pin 25: GPO2; bidirectional. */
  "GPO2": "25",
  /** Physical pin 26: GPO3; bidirectional. */
  "GPO3": "26",
}) {
  override schema = "Audio:THAT5171";
  override referencePrefix = "U";
}

/**
 * Audio Preamplifier Digital Controller IC, QFN-24
 *
 * KiCad symbol: `Audio:THAT5173`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see http://www.thatcorp.com/datashts/THAT_5173_Datasheet.pdf
 * Keywords: mic preamp gain controller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.4x3.4mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT5173 extends Component.withPins({
  /** Physical pin 1: SCAP2; passive. */
  "SCAP2": "1",
  /** Physical pin 2: Rg1; passive. */
  "Rg1": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: IN2; input. */
  "IN2": "4",
  /** Physical pin 5: Rg2; passive. */
  "Rg2": "5",
  /** Physical pin 19: VEE; power_in. */
  "VEE": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: AGND; power_in. */
  "AGND": "21",
  /** Physical pin 22: SOUT1; output. */
  "SOUT1": "22",
  /** Physical pin 23: SOUT2; output. */
  "SOUT2": "23",
  /** Physical pin 24: SCAP1; passive. */
  "SCAP1": "24",
  /** Physical pin 25: PAD; passive. */
  "PAD": "25",
  /** Physical pin 6: ~{RST}; input. */
  "~{RST}": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
  /** Physical pin 9: DIN; input. */
  "DIN": "9",
  /** Physical pin 10: TRC; passive. */
  "TRC": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: DGND; power_in. */
  "DGND": "12",
  /** Physical pin 13: DOUT; tri_state. */
  "DOUT": "13",
  /** Physical pin 14: BSY; output. */
  "BSY": "14",
  /** Physical pin 15: GPO0; output. */
  "GPO0": "15",
  /** Physical pin 16: GPO1; output. */
  "GPO1": "16",
  /** Physical pin 17: GPO2; output. */
  "GPO2": "17",
  /** Physical pin 18: GPO3; output. */
  "GPO3": "18",
}) {
  override schema = "Audio:THAT5173";
  override referencePrefix = "U";
}

/**
 * 2-Channel Digital Preamplifier Controller IC, QFN-24
 *
 * KiCad symbol: `Audio:THAT5263`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see http://www.thatcorp.com/datashts/THAT_5263_Datasheet.pdf
 * Keywords: dual mic preamp gain controller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.4x3.4mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT5263 extends Component.withPins({
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 5: IN1_CH1; input. */
  "IN1_CH1": "5",
  /** Physical pin 6: RA_CH1; passive. */
  "RA_CH1": "6",
  /** Physical pin 7: RG1_CH1; passive. */
  "RG1_CH1": "7",
  /** Physical pin 8: RG2_CH1; passive. */
  "RG2_CH1": "8",
  /** Physical pin 9: RB_CH1; passive. */
  "RB_CH1": "9",
  /** Physical pin 10: IN2_CH1; input. */
  "IN2_CH1": "10",
  /** Physical pin 25: PAD; passive. */
  "PAD": "25",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: SCLK; input. */
  "SCLK": "12",
  /** Physical pin 13: DIN; input. */
  "DIN": "13",
  /** Physical pin 14: DOUT; tri_state. */
  "DOUT": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: DGND; power_in. */
  "DGND": "16",
  /** Physical pin 17: BSY_CH1; output. */
  "BSY_CH1": "17",
  /** Physical pin 18: BSY_CH2; output. */
  "BSY_CH2": "18",
  /** Physical pin 19: GPO_CH1; output. */
  "GPO_CH1": "19",
  /** Physical pin 20: GPO_CH2; output. */
  "GPO_CH2": "20",
  /** Physical pin 1: RB_CH2; passive. */
  "RB_CH2": "1",
  /** Physical pin 2: IN2_CH2; input. */
  "IN2_CH2": "2",
  /** Physical pin 21: IN1_CH2; input. */
  "IN1_CH2": "21",
  /** Physical pin 22: RA_CH2; passive. */
  "RA_CH2": "22",
  /** Physical pin 23: RG1_CH2; passive. */
  "RG1_CH2": "23",
  /** Physical pin 24: RG2_CH2; passive. */
  "RG2_CH2": "24",
}) {
  override schema = "Audio:THAT5263";
  override referencePrefix = "U";
}

/**
 * 2-Channel Low-Noise Programmable-Gain Preamplifier - ADC Driver IC, 1dB Step, QFN-48
 *
 * KiCad symbol: `Audio:THAT6261`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see http://www.thatcorp.com/datashts/THAT_626x_Datasheet.pdf
 * Keywords: dual mic preamp.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.45x5.45mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT6261 extends Component.withPins({
  /** Physical pin 1: RFB+_CH1; passive. */
  "RFB+_CH1": "1",
  /** Physical pin 2: CFB-_CH1; passive. */
  "CFB-_CH1": "2",
  /** Physical pin 3: CFB+_CH1; passive. */
  "CFB+_CH1": "3",
  /** Physical pin 4: VA+; power_in. */
  "VA+_4": "4",
  /** Physical pin 5: DI+_CH1; input. */
  "DI+_CH1": "5",
  /** Physical pin 6: DI-_CH1; input. */
  "DI-_CH1": "6",
  /** Physical pin 7: PO+_CH1; output. */
  "PO+_CH1": "7",
  /** Physical pin 8: PO-_CH1; output. */
  "PO-_CH1": "8",
  /** Physical pin 9: VA-; power_in. */
  "VA-_9": "9",
  /** Physical pin 10: VA+; passive. */
  "VA+_10": "10",
  /** Physical pin 11: CG2_CH1; passive. */
  "CG2_CH1": "11",
  /** Physical pin 12: CG1_CH1; passive. */
  "CG1_CH1": "12",
  /** Physical pin 13: IN-_CH1; input. */
  "IN-_CH1": "13",
  /** Physical pin 14: IN+_CH1; input. */
  "IN+_CH1": "14",
  /** Physical pin 15: VA-; passive. */
  "VA-_15": "15",
  /** Physical pin 20: VA-; passive. */
  "VA-_20": "20",
  /** Physical pin 43: AGND; power_in. */
  "AGND": "43",
  /** Physical pin 44: VCM; power_in. */
  "VCM": "44",
  /** Physical pin 45: VAD; power_in. */
  "VAD": "45",
  /** Physical pin 46: OUT-_CH1; output. */
  "OUT-_CH1": "46",
  /** Physical pin 47: OUT+_CH1; output. */
  "OUT+_CH1": "47",
  /** Physical pin 48: RFB-_CH1; passive. */
  "RFB-_CH1": "48",
  /** Physical pin 49: PAD; passive. */
  "PAD": "49",
  /** Physical pin 25: GPO0_CH1; output. */
  "GPO0_CH1": "25",
  /** Physical pin 26: GPO1_CH1; output. */
  "GPO1_CH1": "26",
  /** Physical pin 27: BSY_CH1; output. */
  "BSY_CH1": "27",
  /** Physical pin 28: DGND; power_in. */
  "DGND": "28",
  /** Physical pin 29: VD; power_in. */
  "VD": "29",
  /** Physical pin 30: ~{CS}; input. */
  "~{CS}": "30",
  /** Physical pin 31: SCLK; input. */
  "SCLK": "31",
  /** Physical pin 32: DIN; input. */
  "DIN": "32",
  /** Physical pin 33: DOUT; tri_state. */
  "DOUT": "33",
  /** Physical pin 34: BSY_CH2; output. */
  "BSY_CH2": "34",
  /** Physical pin 35: GPO_CH2; output. */
  "GPO_CH2": "35",
  /** Physical pin 36: GP1_CH2; output. */
  "GP1_CH2": "36",
  /** Physical pin 16: CG2_CH2; passive. */
  "CG2_CH2": "16",
  /** Physical pin 17: CG1_CH2; passive. */
  "CG1_CH2": "17",
  /** Physical pin 18: IN-_CH2; input. */
  "IN-_CH2": "18",
  /** Physical pin 19: IN+_CH2; input. */
  "IN+_CH2": "19",
  /** Physical pin 21: PO+_CH2; output. */
  "PO+_CH2": "21",
  /** Physical pin 22: PO-_CH2; output. */
  "PO-_CH2": "22",
  /** Physical pin 23: DI+_CH2; input. */
  "DI+_CH2": "23",
  /** Physical pin 24: DI-_CH2; input. */
  "DI-_CH2": "24",
  /** Physical pin 37: CFB+_CH2; passive. */
  "CFB+_CH2": "37",
  /** Physical pin 38: CFB-_CH2; passive. */
  "CFB-_CH2": "38",
  /** Physical pin 39: RFB+_CH2; passive. */
  "RFB+_CH2": "39",
  /** Physical pin 40: RFB-_CH2; passive. */
  "RFB-_CH2": "40",
  /** Physical pin 41: OUT+_CH2; output. */
  "OUT+_CH2": "41",
  /** Physical pin 42: OUT-_CH2; output. */
  "OUT-_CH2": "42",
}) {
  override schema = "Audio:THAT6261";
  override referencePrefix = "U";
}

/**
 * 2-Channel Low-Noise Programmable-Gain Preamplifier - ADC Driver IC, 2dB Step, QFN-48
 *
 * KiCad symbol: `Audio:THAT6262`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see http://www.thatcorp.com/datashts/THAT_626x_Datasheet.pdf
 * Keywords: dual mic preamp.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.45x5.45mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT6262 extends Component.withPins({
  /** Physical pin 1: RFB+_CH1; passive. */
  "RFB+_CH1": "1",
  /** Physical pin 2: CFB-_CH1; passive. */
  "CFB-_CH1": "2",
  /** Physical pin 3: CFB+_CH1; passive. */
  "CFB+_CH1": "3",
  /** Physical pin 4: VA+; power_in. */
  "VA+_4": "4",
  /** Physical pin 5: DI+_CH1; input. */
  "DI+_CH1": "5",
  /** Physical pin 6: DI-_CH1; input. */
  "DI-_CH1": "6",
  /** Physical pin 7: PO+_CH1; output. */
  "PO+_CH1": "7",
  /** Physical pin 8: PO-_CH1; output. */
  "PO-_CH1": "8",
  /** Physical pin 9: VA-; power_in. */
  "VA-_9": "9",
  /** Physical pin 10: VA+; passive. */
  "VA+_10": "10",
  /** Physical pin 11: CG2_CH1; passive. */
  "CG2_CH1": "11",
  /** Physical pin 12: CG1_CH1; passive. */
  "CG1_CH1": "12",
  /** Physical pin 13: IN-_CH1; input. */
  "IN-_CH1": "13",
  /** Physical pin 14: IN+_CH1; input. */
  "IN+_CH1": "14",
  /** Physical pin 15: VA-; passive. */
  "VA-_15": "15",
  /** Physical pin 20: VA-; passive. */
  "VA-_20": "20",
  /** Physical pin 43: AGND; power_in. */
  "AGND": "43",
  /** Physical pin 44: VCM; power_in. */
  "VCM": "44",
  /** Physical pin 45: VAD; power_in. */
  "VAD": "45",
  /** Physical pin 46: OUT-_CH1; output. */
  "OUT-_CH1": "46",
  /** Physical pin 47: OUT+_CH1; output. */
  "OUT+_CH1": "47",
  /** Physical pin 48: RFB-_CH1; passive. */
  "RFB-_CH1": "48",
  /** Physical pin 49: PAD; passive. */
  "PAD": "49",
  /** Physical pin 25: GPO0_CH1; output. */
  "GPO0_CH1": "25",
  /** Physical pin 26: GPO1_CH1; output. */
  "GPO1_CH1": "26",
  /** Physical pin 27: BSY_CH1; output. */
  "BSY_CH1": "27",
  /** Physical pin 28: DGND; power_in. */
  "DGND": "28",
  /** Physical pin 29: VD; power_in. */
  "VD": "29",
  /** Physical pin 30: ~{CS}; input. */
  "~{CS}": "30",
  /** Physical pin 31: SCLK; input. */
  "SCLK": "31",
  /** Physical pin 32: DIN; input. */
  "DIN": "32",
  /** Physical pin 33: DOUT; tri_state. */
  "DOUT": "33",
  /** Physical pin 34: BSY_CH2; output. */
  "BSY_CH2": "34",
  /** Physical pin 35: GPO_CH2; output. */
  "GPO_CH2": "35",
  /** Physical pin 36: GP1_CH2; output. */
  "GP1_CH2": "36",
  /** Physical pin 16: CG2_CH2; passive. */
  "CG2_CH2": "16",
  /** Physical pin 17: CG1_CH2; passive. */
  "CG1_CH2": "17",
  /** Physical pin 18: IN-_CH2; input. */
  "IN-_CH2": "18",
  /** Physical pin 19: IN+_CH2; input. */
  "IN+_CH2": "19",
  /** Physical pin 21: PO+_CH2; output. */
  "PO+_CH2": "21",
  /** Physical pin 22: PO-_CH2; output. */
  "PO-_CH2": "22",
  /** Physical pin 23: DI+_CH2; input. */
  "DI+_CH2": "23",
  /** Physical pin 24: DI-_CH2; input. */
  "DI-_CH2": "24",
  /** Physical pin 37: CFB+_CH2; passive. */
  "CFB+_CH2": "37",
  /** Physical pin 38: CFB-_CH2; passive. */
  "CFB-_CH2": "38",
  /** Physical pin 39: RFB+_CH2; passive. */
  "RFB+_CH2": "39",
  /** Physical pin 40: RFB-_CH2; passive. */
  "RFB-_CH2": "40",
  /** Physical pin 41: OUT+_CH2; output. */
  "OUT+_CH2": "41",
  /** Physical pin 42: OUT-_CH2; output. */
  "OUT-_CH2": "42",
}) {
  override schema = "Audio:THAT6262";
  override referencePrefix = "U";
}

/**
 * 2-Channel Low-Noise Programmable-Gain Preamplifier - ADC Driver IC, 3dB Step, QFN-48
 *
 * KiCad symbol: `Audio:THAT6263`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see http://www.thatcorp.com/datashts/THAT_626x_Datasheet.pdf
 * Keywords: dual mic preamp.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.45x5.45mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT6263 extends Component.withPins({
  /** Physical pin 1: RFB+_CH1; passive. */
  "RFB+_CH1": "1",
  /** Physical pin 2: CFB-_CH1; passive. */
  "CFB-_CH1": "2",
  /** Physical pin 3: CFB+_CH1; passive. */
  "CFB+_CH1": "3",
  /** Physical pin 4: VA+; power_in. */
  "VA+_4": "4",
  /** Physical pin 5: DI+_CH1; input. */
  "DI+_CH1": "5",
  /** Physical pin 6: DI-_CH1; input. */
  "DI-_CH1": "6",
  /** Physical pin 7: PO+_CH1; output. */
  "PO+_CH1": "7",
  /** Physical pin 8: PO-_CH1; output. */
  "PO-_CH1": "8",
  /** Physical pin 9: VA-; power_in. */
  "VA-_9": "9",
  /** Physical pin 10: VA+; passive. */
  "VA+_10": "10",
  /** Physical pin 11: CG2_CH1; passive. */
  "CG2_CH1": "11",
  /** Physical pin 12: CG1_CH1; passive. */
  "CG1_CH1": "12",
  /** Physical pin 13: IN-_CH1; input. */
  "IN-_CH1": "13",
  /** Physical pin 14: IN+_CH1; input. */
  "IN+_CH1": "14",
  /** Physical pin 15: VA-; passive. */
  "VA-_15": "15",
  /** Physical pin 20: VA-; passive. */
  "VA-_20": "20",
  /** Physical pin 43: AGND; power_in. */
  "AGND": "43",
  /** Physical pin 44: VCM; power_in. */
  "VCM": "44",
  /** Physical pin 45: VAD; power_in. */
  "VAD": "45",
  /** Physical pin 46: OUT-_CH1; output. */
  "OUT-_CH1": "46",
  /** Physical pin 47: OUT+_CH1; output. */
  "OUT+_CH1": "47",
  /** Physical pin 48: RFB-_CH1; passive. */
  "RFB-_CH1": "48",
  /** Physical pin 49: PAD; passive. */
  "PAD": "49",
  /** Physical pin 25: GPO0_CH1; output. */
  "GPO0_CH1": "25",
  /** Physical pin 26: GPO1_CH1; output. */
  "GPO1_CH1": "26",
  /** Physical pin 27: BSY_CH1; output. */
  "BSY_CH1": "27",
  /** Physical pin 28: DGND; power_in. */
  "DGND": "28",
  /** Physical pin 29: VD; power_in. */
  "VD": "29",
  /** Physical pin 30: ~{CS}; input. */
  "~{CS}": "30",
  /** Physical pin 31: SCLK; input. */
  "SCLK": "31",
  /** Physical pin 32: DIN; input. */
  "DIN": "32",
  /** Physical pin 33: DOUT; tri_state. */
  "DOUT": "33",
  /** Physical pin 34: BSY_CH2; output. */
  "BSY_CH2": "34",
  /** Physical pin 35: GPO_CH2; output. */
  "GPO_CH2": "35",
  /** Physical pin 36: GP1_CH2; output. */
  "GP1_CH2": "36",
  /** Physical pin 16: CG2_CH2; passive. */
  "CG2_CH2": "16",
  /** Physical pin 17: CG1_CH2; passive. */
  "CG1_CH2": "17",
  /** Physical pin 18: IN-_CH2; input. */
  "IN-_CH2": "18",
  /** Physical pin 19: IN+_CH2; input. */
  "IN+_CH2": "19",
  /** Physical pin 21: PO+_CH2; output. */
  "PO+_CH2": "21",
  /** Physical pin 22: PO-_CH2; output. */
  "PO-_CH2": "22",
  /** Physical pin 23: DI+_CH2; input. */
  "DI+_CH2": "23",
  /** Physical pin 24: DI-_CH2; input. */
  "DI-_CH2": "24",
  /** Physical pin 37: CFB+_CH2; passive. */
  "CFB+_CH2": "37",
  /** Physical pin 38: CFB-_CH2; passive. */
  "CFB-_CH2": "38",
  /** Physical pin 39: RFB+_CH2; passive. */
  "RFB+_CH2": "39",
  /** Physical pin 40: RFB-_CH2; passive. */
  "RFB-_CH2": "40",
  /** Physical pin 41: OUT+_CH2; output. */
  "OUT+_CH2": "41",
  /** Physical pin 42: OUT-_CH2; output. */
  "OUT-_CH2": "42",
}) {
  override schema = "Audio:THAT6263";
  override referencePrefix = "U";
}

/**
 * Stero Audio CODEC, 8- to 96-kHz, With Integrated Headphone Amplifier, TSSOP-28
 *
 * KiCad symbol: `Audio:TLV320AIC23BPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlv320aic23b.pdf
 * Keywords: audio codec 2ch 96kHz headphone amplifier.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV320AIC23BPW extends Component.withPins({
  /** Physical pin 1: BVDD; power_in. */
  "BVDD": "1",
  /** Physical pin 2: CLKOUT; output. */
  "CLKOUT": "2",
  /** Physical pin 3: BCLK; bidirectional. */
  "BCLK": "3",
  /** Physical pin 4: DIN; input. */
  "DIN": "4",
  /** Physical pin 5: LRCIN; input. */
  "LRCIN": "5",
  /** Physical pin 6: DOUT; output. */
  "DOUT": "6",
  /** Physical pin 7: LRCOUT; output. */
  "LRCOUT": "7",
  /** Physical pin 8: HPVDD; power_in. */
  "HPVDD": "8",
  /** Physical pin 9: LHPOUT; passive. */
  "LHPOUT": "9",
  /** Physical pin 10: RHPOUT; passive. */
  "RHPOUT": "10",
  /** Physical pin 11: HPGND; power_in. */
  "HPGND": "11",
  /** Physical pin 12: LOUT; passive. */
  "LOUT": "12",
  /** Physical pin 13: ROUT; passive. */
  "ROUT": "13",
  /** Physical pin 14: AVDD; power_in. */
  "AVDD": "14",
  /** Physical pin 15: AGND; power_in. */
  "AGND": "15",
  /** Physical pin 16: VMID; passive. */
  "VMID": "16",
  /** Physical pin 17: MICBIAS; passive. */
  "MICBIAS": "17",
  /** Physical pin 18: MICIN; passive. */
  "MICIN": "18",
  /** Physical pin 19: RLINEIN; passive. */
  "RLINEIN": "19",
  /** Physical pin 20: LLINEIN; passive. */
  "LLINEIN": "20",
  /** Physical pin 21: ~{CS}; input. */
  "~{CS}": "21",
  /** Physical pin 22: MODE; input. */
  "MODE": "22",
  /** Physical pin 23: SDIN; input. */
  "SDIN": "23",
  /** Physical pin 24: SCLK; input. */
  "SCLK": "24",
  /** Physical pin 25: XTI/MCK; passive. */
  "XTI/MCK": "25",
  /** Physical pin 26: XTO; passive. */
  "XTO": "26",
  /** Physical pin 27: DVDD; power_in. */
  "DVDD": "27",
  /** Physical pin 28: DGND; power_in. */
  "DGND": "28",
}) {
  override schema = "Audio:TLV320AIC23BPW";
  override referencePrefix = "U";
}

/**
 * Stero Audio CODEC, 8- to 96-kHz, With Integrated Headphone Amplifier, QFN-28
 *
 * KiCad symbol: `Audio:TLV320AIC23BRHD`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlv320aic23b.pdf
 * Keywords: audio codec 2ch 96kHz headphone amplifier.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV320AIC23BRHD extends Component.withPins({
  /** Physical pin 1: DIN; input. */
  "DIN": "1",
  /** Physical pin 2: LRCIN; input. */
  "LRCIN": "2",
  /** Physical pin 3: DOUT; output. */
  "DOUT": "3",
  /** Physical pin 4: LRCOUT; output. */
  "LRCOUT": "4",
  /** Physical pin 5: HPVDD; power_in. */
  "HPVDD": "5",
  /** Physical pin 6: LHPOUT; passive. */
  "LHPOUT": "6",
  /** Physical pin 7: RHPOUT; passive. */
  "RHPOUT": "7",
  /** Physical pin 8: HPGND; power_in. */
  "HPGND": "8",
  /** Physical pin 9: LOUT; passive. */
  "LOUT": "9",
  /** Physical pin 10: ROUT; passive. */
  "ROUT": "10",
  /** Physical pin 11: AVDD; power_in. */
  "AVDD": "11",
  /** Physical pin 12: AGND; power_in. */
  "AGND_12": "12",
  /** Physical pin 13: VMID; passive. */
  "VMID": "13",
  /** Physical pin 14: MICBIAS; passive. */
  "MICBIAS": "14",
  /** Physical pin 15: MICIN; passive. */
  "MICIN": "15",
  /** Physical pin 16: RLINEIN; passive. */
  "RLINEIN": "16",
  /** Physical pin 17: LLINEIN; passive. */
  "LLINEIN": "17",
  /** Physical pin 18: ~{CS}; input. */
  "~{CS}": "18",
  /** Physical pin 19: MODE; input. */
  "MODE": "19",
  /** Physical pin 20: SDIN; input. */
  "SDIN": "20",
  /** Physical pin 21: SCLK; input. */
  "SCLK": "21",
  /** Physical pin 22: XTI/MCK; passive. */
  "XTI/MCK": "22",
  /** Physical pin 23: XTO; passive. */
  "XTO": "23",
  /** Physical pin 24: DVDD; power_in. */
  "DVDD": "24",
  /** Physical pin 25: DGND; power_in. */
  "DGND": "25",
  /** Physical pin 26: BVDD; power_in. */
  "BVDD": "26",
  /** Physical pin 27: CLKOUT; output. */
  "CLKOUT": "27",
  /** Physical pin 28: BCLK; bidirectional. */
  "BCLK": "28",
  /** Physical pin 29: AGND; passive. */
  "AGND_29": "29",
}) {
  override schema = "Audio:TLV320AIC23BRHD";
  override referencePrefix = "U";
}

/**
 * Stero Audio CODEC, 8- to 96-kHz, With Integrated Headphone Amplifier, BGA-32
 *
 * KiCad symbol: `Audio:TLV320AIC23BxQE`. Reference prefix: `U`.
 * Footprint filters: *MicroStar*Junior*BGA*5*x5*mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlv320aic23b.pdf
 * Keywords: audio codec 2ch 96kHz headphone amplifier.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-80_5.0x5.0mm_Layout9x9_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV320AIC23BxQE extends Component.withPins({
  /** Physical pin A1: NC; no_connect. */
  "NC_A1": "A1",
  /** Physical pin A2: HPGND; power_in. */
  "HPGND": "A2",
  /** Physical pin A3: RHPOUT; passive. */
  "RHPOUT": "A3",
  /** Physical pin A4: LHPOUT; passive. */
  "LHPOUT": "A4",
  /** Physical pin A5: HPVDD; power_in. */
  "HPVDD": "A5",
  /** Physical pin A6: LRCOUT; output. */
  "LRCOUT": "A6",
  /** Physical pin A7: DOUT; output. */
  "DOUT": "A7",
  /** Physical pin A8: LRCIN; input. */
  "LRCIN": "A8",
  /** Physical pin A9: NC; no_connect. */
  "NC_A9": "A9",
  /** Physical pin B1: LOUT; passive. */
  "LOUT": "B1",
  /** Physical pin B2: NC; no_connect. */
  "NC_B2": "B2",
  /** Physical pin B3: NC; no_connect. */
  "NC_B3": "B3",
  /** Physical pin B4: NC; no_connect. */
  "NC_B4": "B4",
  /** Physical pin B5: NC; no_connect. */
  "NC_B5": "B5",
  /** Physical pin B6: NC; no_connect. */
  "NC_B6": "B6",
  /** Physical pin B7: NC; no_connect. */
  "NC_B7": "B7",
  /** Physical pin B8: NC; no_connect. */
  "NC_B8": "B8",
  /** Physical pin B9: DIN; input. */
  "DIN": "B9",
  /** Physical pin C1: ROUT; passive. */
  "ROUT": "C1",
  /** Physical pin C2: NC; no_connect. */
  "NC_C2": "C2",
  /** Physical pin C4: NC; no_connect. */
  "NC_C4": "C4",
  /** Physical pin C5: NC; no_connect. */
  "NC_C5": "C5",
  /** Physical pin C6: NC; no_connect. */
  "NC_C6": "C6",
  /** Physical pin C7: NC; no_connect. */
  "NC_C7": "C7",
  /** Physical pin C8: NC; no_connect. */
  "NC_C8": "C8",
  /** Physical pin C9: BCLK; bidirectional. */
  "BCLK": "C9",
  /** Physical pin D1: AVDD; power_in. */
  "AVDD": "D1",
  /** Physical pin D2: NC; no_connect. */
  "NC_D2": "D2",
  /** Physical pin D3: NC; no_connect. */
  "NC_D3": "D3",
  /** Physical pin D4: NC; no_connect. */
  "NC_D4": "D4",
  /** Physical pin D5: NC; no_connect. */
  "NC_D5": "D5",
  /** Physical pin D6: NC; no_connect. */
  "NC_D6": "D6",
  /** Physical pin D7: NC; no_connect. */
  "NC_D7": "D7",
  /** Physical pin D8: NC; no_connect. */
  "NC_D8": "D8",
  /** Physical pin D9: CLKOUT; output. */
  "CLKOUT": "D9",
  /** Physical pin E1: AGND; power_in. */
  "AGND": "E1",
  /** Physical pin E2: NC; no_connect. */
  "NC_E2": "E2",
  /** Physical pin E3: NC; no_connect. */
  "NC_E3": "E3",
  /** Physical pin E4: NC; no_connect. */
  "NC_E4": "E4",
  /** Physical pin E5: NC; no_connect. */
  "NC_E5": "E5",
  /** Physical pin E6: NC; no_connect. */
  "NC_E6": "E6",
  /** Physical pin E7: NC; no_connect. */
  "NC_E7": "E7",
  /** Physical pin E8: NC; no_connect. */
  "NC_E8": "E8",
  /** Physical pin E9: BVDD; power_in. */
  "BVDD": "E9",
  /** Physical pin F1: VMID; passive. */
  "VMID": "F1",
  /** Physical pin F2: NC; no_connect. */
  "NC_F2": "F2",
  /** Physical pin F3: NC; no_connect. */
  "NC_F3": "F3",
  /** Physical pin F4: NC; no_connect. */
  "NC_F4": "F4",
  /** Physical pin F5: NC; no_connect. */
  "NC_F5": "F5",
  /** Physical pin F6: NC; no_connect. */
  "NC_F6": "F6",
  /** Physical pin F7: NC; no_connect. */
  "NC_F7": "F7",
  /** Physical pin F8: NC; no_connect. */
  "NC_F8": "F8",
  /** Physical pin F9: DGND; power_in. */
  "DGND": "F9",
  /** Physical pin G1: MICBIAS; passive. */
  "MICBIAS": "G1",
  /** Physical pin G2: NC; no_connect. */
  "NC_G2": "G2",
  /** Physical pin G3: NC; no_connect. */
  "NC_G3": "G3",
  /** Physical pin G4: NC; no_connect. */
  "NC_G4": "G4",
  /** Physical pin G5: NC; no_connect. */
  "NC_G5": "G5",
  /** Physical pin G6: NC; no_connect. */
  "NC_G6": "G6",
  /** Physical pin G7: NC; no_connect. */
  "NC_G7": "G7",
  /** Physical pin G8: NC; no_connect. */
  "NC_G8": "G8",
  /** Physical pin G9: DVDD; power_in. */
  "DVDD": "G9",
  /** Physical pin H1: MICIN; passive. */
  "MICIN": "H1",
  /** Physical pin H2: NC; no_connect. */
  "NC_H2": "H2",
  /** Physical pin H3: NC; no_connect. */
  "NC_H3": "H3",
  /** Physical pin H4: NC; no_connect. */
  "NC_H4": "H4",
  /** Physical pin H5: NC; no_connect. */
  "NC_H5": "H5",
  /** Physical pin H6: NC; no_connect. */
  "NC_H6": "H6",
  /** Physical pin H7: NC; no_connect. */
  "NC_H7": "H7",
  /** Physical pin H8: NC; no_connect. */
  "NC_H8": "H8",
  /** Physical pin H9: XTO; passive. */
  "XTO": "H9",
  /** Physical pin J1: NC; no_connect. */
  "NC_J1": "J1",
  /** Physical pin J2: RLINEIN; passive. */
  "RLINEIN": "J2",
  /** Physical pin J3: LLINEIN; passive. */
  "LLINEIN": "J3",
  /** Physical pin J4: ~{CS}; input. */
  "~{CS}": "J4",
  /** Physical pin J5: MODE; input. */
  "MODE": "J5",
  /** Physical pin J6: SDIN; input. */
  "SDIN": "J6",
  /** Physical pin J7: SCLK; input. */
  "SCLK": "J7",
  /** Physical pin J8: XTI/MCK; passive. */
  "XTI/MCK": "J8",
  /** Physical pin J9: NC; no_connect. */
  "NC_J9": "J9",
}) {
  override schema = "Audio:TLV320AIC23BxQE";
  override referencePrefix = "U";
}

/**
 * Low Power Audio Codec with Audio Processing and Mono Class‑D Amplifier, VQFN-32
 *
 * KiCad symbol: `Audio:TLV320AIC3100`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlv320aic3100.pdf
 * Keywords: audio codec 2ch 192kHz class-d amplifier.
 * Default footprint: Package_DFN_QFN:VQFN-32-1EP_5x5mm_P0.5mm_EP3.5x3.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV320AIC3100 extends Component.withPins({
  /** Physical pin 1: IOVSS; power_in. */
  "IOVSS": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD": "2",
  /** Physical pin 3: DVDD; power_in. */
  "DVDD": "3",
  /** Physical pin 4: DOUT; output. */
  "DOUT": "4",
  /** Physical pin 5: DIN; input. */
  "DIN": "5",
  /** Physical pin 6: WCLK; bidirectional. */
  "WCLK": "6",
  /** Physical pin 7: BCLK; bidirectional. */
  "BCLK": "7",
  /** Physical pin 8: MCLK; input. */
  "MCLK": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
  /** Physical pin 11: VOL/MICDET; input. */
  "VOL/MICDET": "11",
  /** Physical pin 12: MICBIAS; power_out. */
  "MICBIAS": "12",
  /** Physical pin 13: MIC1LP; input. */
  "MIC1LP": "13",
  /** Physical pin 14: MIC1RP; input. */
  "MIC1RP": "14",
  /** Physical pin 15: MIC1LM; input. */
  "MIC1LM": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: DVSS; power_in. */
  "DVSS": "18",
  /** Physical pin 19: SPKM; output. */
  "SPKM_19": "19",
  /** Physical pin 20: SPKVSS; power_in. */
  "SPKVSS_20": "20",
  /** Physical pin 21: SPKVDD; power_in. */
  "SPKVDD_21": "21",
  /** Physical pin 22: SPKP; output. */
  "SPKP_22": "22",
  /** Physical pin 23: SPKM; passive. */
  "SPKM_23": "23",
  /** Physical pin 24: SPKVDD; power_in. */
  "SPKVDD_24": "24",
  /** Physical pin 25: SPKVSS; passive. */
  "SPKVSS_25": "25",
  /** Physical pin 26: SPKP; passive. */
  "SPKP_26": "26",
  /** Physical pin 27: HPL; output. */
  "HPL": "27",
  /** Physical pin 28: HPVDD; power_in. */
  "HPVDD": "28",
  /** Physical pin 29: HPVSS; power_in. */
  "HPVSS": "29",
  /** Physical pin 30: HPR; output. */
  "HPR": "30",
  /** Physical pin 31: ~{RESET}; input. */
  "~{RESET}": "31",
  /** Physical pin 32: GPIO1; bidirectional. */
  "GPIO1": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
  override schema = "Audio:TLV320AIC3100";
  override referencePrefix = "U";
}

/**
 * Stereo Digital Audio Lip-Sync Delay Processor With I2C Control, QFN-16
 *
 * KiCad symbol: `Audio:TPA5050`. Reference prefix: `U`.
 * Footprint filters: Texas?S?PVQFN?N*.
 * @see http://www.ti.com/lit/ds/symlink/tpa5050.pdf
 * Keywords: audio delay.
 * Default footprint: Package_DFN_QFN:Texas_S-PVQFN-N16_EP2.7x2.7mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPA5050 extends Component.withPins({
  /** Physical pin 1: LRCLK; input. */
  "LRCLK": "1",
  /** Physical pin 2: DATA; input. */
  "DATA": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: ADD0; input. */
  "ADD0": "10",
  /** Physical pin 11: ADD1; input. */
  "ADD1": "11",
  /** Physical pin 12: ADD2; input. */
  "ADD2": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: DATA_OUT; output. */
  "DATA_OUT": "15",
  /** Physical pin 16: BCLK; input. */
  "BCLK": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Audio:TPA5050";
  override referencePrefix = "U";
}

/**
 * Low Power Audio DAC with PLL, SSOP-16
 *
 * KiCad symbol: `Audio:UDA1334ATS`. Reference prefix: `U`.
 * Footprint filters: SSOP*4.4x5.2mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/UDA1334ATS.pdf
 * Keywords: audio dac 2ch 24bit 96kHz.
 * Default footprint: Package_SO:SSOP-16_4.4x5.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UDA1334ATS extends Component.withPins({
  /** Physical pin 1: BCK; input. */
  "BCK": "1",
  /** Physical pin 2: WS; input. */
  "WS": "2",
  /** Physical pin 3: DATAI; input. */
  "DATAI": "3",
  /** Physical pin 4: VDDD; power_in. */
  "VDDD": "4",
  /** Physical pin 5: VSSD; power_in. */
  "VSSD": "5",
  /** Physical pin 6: SYSCLK/PLL1; input. */
  "SYSCLK/PLL1": "6",
  /** Physical pin 7: SFOR1; input. */
  "SFOR1": "7",
  /** Physical pin 8: MUTE; input. */
  "MUTE": "8",
  /** Physical pin 9: DEEM/CLKOUT; bidirectional. */
  "DEEM/CLKOUT": "9",
  /** Physical pin 10: PLL0; input. */
  "PLL0": "10",
  /** Physical pin 11: SFOR0; input. */
  "SFOR0": "11",
  /** Physical pin 12: Vref(DAC); passive. */
  "Vref(DAC)": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: VOUTL; output. */
  "VOUTL": "14",
  /** Physical pin 15: VSSA; power_in. */
  "VSSA": "15",
  /** Physical pin 16: VOUTR; output. */
  "VOUTR": "16",
}) {
  override schema = "Audio:UDA1334ATS";
  override referencePrefix = "U";
}

/**
 * Portable Internet Audio CODEC with Headphone Driver and Programmable Sample Rates, QFN-28
 *
 * KiCad symbol: `Audio:WM8731CLSEFL`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/WM8731_v4.9.pdf
 * Keywords: wolfson stereo audio codec adc dac headphone.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WM8731CLSEFL extends Component.withPins({
  /** Physical pin 1: XTI/MCLK; input. */
  "XTI/MCLK": "1",
  /** Physical pin 2: XTO; output. */
  "XTO": "2",
  /** Physical pin 3: DCVDD; power_in. */
  "DCVDD": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: DBVDD; power_in. */
  "DBVDD": "5",
  /** Physical pin 6: CLKOUT; output. */
  "CLKOUT": "6",
  /** Physical pin 7: BCLK; bidirectional. */
  "BCLK": "7",
  /** Physical pin 8: DACDAT; input. */
  "DACDAT": "8",
  /** Physical pin 9: DACLRC; bidirectional. */
  "DACLRC": "9",
  /** Physical pin 10: ADCDAT; output. */
  "ADCDAT": "10",
  /** Physical pin 11: ADCLRC; bidirectional. */
  "ADCLRC": "11",
  /** Physical pin 12: HPVDD; power_in. */
  "HPVDD": "12",
  /** Physical pin 13: LHPOUT; output. */
  "LHPOUT": "13",
  /** Physical pin 14: RHPOUT; output. */
  "RHPOUT": "14",
  /** Physical pin 15: HPGND; power_in. */
  "HPGND": "15",
  /** Physical pin 16: LOUT; output. */
  "LOUT": "16",
  /** Physical pin 17: ROUT; output. */
  "ROUT": "17",
  /** Physical pin 18: AVDD; power_in. */
  "AVDD": "18",
  /** Physical pin 19: AGND; power_in. */
  "AGND_19": "19",
  /** Physical pin 20: VMID; passive. */
  "VMID": "20",
  /** Physical pin 21: MICBIAS; output. */
  "MICBIAS": "21",
  /** Physical pin 22: MICIN; input. */
  "MICIN": "22",
  /** Physical pin 23: RLINEIN; input. */
  "RLINEIN": "23",
  /** Physical pin 24: LLINEIN; input. */
  "LLINEIN": "24",
  /** Physical pin 25: MODE; input. */
  "MODE": "25",
  /** Physical pin 26: ~{CSB}; input. */
  "~{CSB}": "26",
  /** Physical pin 27: SDIN; bidirectional. */
  "SDIN": "27",
  /** Physical pin 28: SCLK; input. */
  "SCLK": "28",
  /** Physical pin 29: AGND; passive. */
  "AGND_29": "29",
}) {
  override schema = "Audio:WM8731CLSEFL";
  override referencePrefix = "U";
}

/**
 * Portable Internet Audio CODEC with Headphone Driver and Programmable Sample Rates, QFN-28
 *
 * KiCad symbol: `Audio:WM8731CSEFL`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/WM8731_v4.9.pdf
 * Keywords: wolfson stereo audio codec adc dac headphone.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WM8731CSEFL extends Component.withPins({
  /** Physical pin 1: XTI/MCLK; input. */
  "XTI/MCLK": "1",
  /** Physical pin 2: XTO; output. */
  "XTO": "2",
  /** Physical pin 3: DCVDD; power_in. */
  "DCVDD": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: DBVDD; power_in. */
  "DBVDD": "5",
  /** Physical pin 6: CLKOUT; output. */
  "CLKOUT": "6",
  /** Physical pin 7: BCLK; bidirectional. */
  "BCLK": "7",
  /** Physical pin 8: DACDAT; input. */
  "DACDAT": "8",
  /** Physical pin 9: DACLRC; bidirectional. */
  "DACLRC": "9",
  /** Physical pin 10: ADCDAT; output. */
  "ADCDAT": "10",
  /** Physical pin 11: ADCLRC; bidirectional. */
  "ADCLRC": "11",
  /** Physical pin 12: HPVDD; power_in. */
  "HPVDD": "12",
  /** Physical pin 13: LHPOUT; output. */
  "LHPOUT": "13",
  /** Physical pin 14: RHPOUT; output. */
  "RHPOUT": "14",
  /** Physical pin 15: HPGND; power_in. */
  "HPGND": "15",
  /** Physical pin 16: LOUT; output. */
  "LOUT": "16",
  /** Physical pin 17: ROUT; output. */
  "ROUT": "17",
  /** Physical pin 18: AVDD; power_in. */
  "AVDD": "18",
  /** Physical pin 19: AGND; power_in. */
  "AGND_19": "19",
  /** Physical pin 20: VMID; passive. */
  "VMID": "20",
  /** Physical pin 21: MICBIAS; output. */
  "MICBIAS": "21",
  /** Physical pin 22: MICIN; input. */
  "MICIN": "22",
  /** Physical pin 23: RLINEIN; input. */
  "RLINEIN": "23",
  /** Physical pin 24: LLINEIN; input. */
  "LLINEIN": "24",
  /** Physical pin 25: MODE; input. */
  "MODE": "25",
  /** Physical pin 26: ~{CSB}; input. */
  "~{CSB}": "26",
  /** Physical pin 27: SDIN; bidirectional. */
  "SDIN": "27",
  /** Physical pin 28: SCLK; input. */
  "SCLK": "28",
  /** Physical pin 29: AGND; passive. */
  "AGND_29": "29",
}) {
  override schema = "Audio:WM8731CSEFL";
  override referencePrefix = "U";
}

/**
 * Portable Internet Audio CODEC with Headphone Driver and Programmable Sample Rates, SSOP-28
 *
 * KiCad symbol: `Audio:WM8731SEDS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/WM8731_v4.9.pdf
 * Keywords: wolfson stereo audio codec adc dac headphone.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WM8731SEDS extends Component.withPins({
  /** Physical pin 1: DBVDD; power_in. */
  "DBVDD": "1",
  /** Physical pin 2: CLKOUT; output. */
  "CLKOUT": "2",
  /** Physical pin 3: BCLK; bidirectional. */
  "BCLK": "3",
  /** Physical pin 4: DACDAT; input. */
  "DACDAT": "4",
  /** Physical pin 5: DACLRC; bidirectional. */
  "DACLRC": "5",
  /** Physical pin 6: ADCDAT; output. */
  "ADCDAT": "6",
  /** Physical pin 7: ADCLRC; bidirectional. */
  "ADCLRC": "7",
  /** Physical pin 8: HPVDD; power_in. */
  "HPVDD": "8",
  /** Physical pin 9: LHPOUT; output. */
  "LHPOUT": "9",
  /** Physical pin 10: RHPOUT; output. */
  "RHPOUT": "10",
  /** Physical pin 11: HPGND; power_in. */
  "HPGND": "11",
  /** Physical pin 12: LOUT; output. */
  "LOUT": "12",
  /** Physical pin 13: ROUT; output. */
  "ROUT": "13",
  /** Physical pin 14: AVDD; power_in. */
  "AVDD": "14",
  /** Physical pin 15: AGND; power_in. */
  "AGND": "15",
  /** Physical pin 16: VMID; passive. */
  "VMID": "16",
  /** Physical pin 17: MICBIAS; output. */
  "MICBIAS": "17",
  /** Physical pin 18: MICIN; input. */
  "MICIN": "18",
  /** Physical pin 19: RLINEIN; input. */
  "RLINEIN": "19",
  /** Physical pin 20: LLINEIN; input. */
  "LLINEIN": "20",
  /** Physical pin 21: MODE; input. */
  "MODE": "21",
  /** Physical pin 22: ~{CSB}; input. */
  "~{CSB}": "22",
  /** Physical pin 23: SDIN; bidirectional. */
  "SDIN": "23",
  /** Physical pin 24: SCLK; input. */
  "SCLK": "24",
  /** Physical pin 25: XTI/MCLK; input. */
  "XTI/MCLK": "25",
  /** Physical pin 26: XTO; output. */
  "XTO": "26",
  /** Physical pin 27: DCVDD; power_in. */
  "DCVDD": "27",
  /** Physical pin 28: DGND; power_in. */
  "DGND": "28",
}) {
  override schema = "Audio:WM8731SEDS";
  override referencePrefix = "U";
}

/**
 * Software-Controlled Sound Generator, DIP-40
 *
 * KiCad symbol: `Audio:YM2149`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://www.ym2149.com/ym2149.pdf
 * Keywords: audio ssg 3ch.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class YM2149 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: A; output. */
  "A": "3",
  /** Physical pin 4: B; output. */
  "B": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: IOB7; bidirectional. */
  "IOB7": "6",
  /** Physical pin 7: IOB6; bidirectional. */
  "IOB6": "7",
  /** Physical pin 8: IOB5; bidirectional. */
  "IOB5": "8",
  /** Physical pin 9: IOB4; bidirectional. */
  "IOB4": "9",
  /** Physical pin 10: IOB3; bidirectional. */
  "IOB3": "10",
  /** Physical pin 11: IOB2; bidirectional. */
  "IOB2": "11",
  /** Physical pin 12: IOB1; bidirectional. */
  "IOB1": "12",
  /** Physical pin 13: IOB0; bidirectional. */
  "IOB0": "13",
  /** Physical pin 14: IOA7; bidirectional. */
  "IOA7": "14",
  /** Physical pin 15: IOA6; bidirectional. */
  "IOA6": "15",
  /** Physical pin 16: IOA5; bidirectional. */
  "IOA5": "16",
  /** Physical pin 17: IOA4; bidirectional. */
  "IOA4": "17",
  /** Physical pin 18: IOA3; bidirectional. */
  "IOA3": "18",
  /** Physical pin 19: IOA2; bidirectional. */
  "IOA2": "19",
  /** Physical pin 20: IOA1; bidirectional. */
  "IOA1": "20",
  /** Physical pin 21: IOA0; bidirectional. */
  "IOA0": "21",
  /** Physical pin 22: CLOCK; input. */
  "CLOCK": "22",
  /** Physical pin 23: ~{RESET}; input. */
  "~{RESET}": "23",
  /** Physical pin 24: ~{A9}; input. */
  "~{A9}": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: ~{SEL}; input. */
  "~{SEL}": "26",
  /** Physical pin 27: BDIR; input. */
  "BDIR": "27",
  /** Physical pin 28: BC2; input. */
  "BC2": "28",
  /** Physical pin 29: BC1; input. */
  "BC1": "29",
  /** Physical pin 30: DA7; bidirectional. */
  "DA7": "30",
  /** Physical pin 31: DA6; bidirectional. */
  "DA6": "31",
  /** Physical pin 32: DA5; bidirectional. */
  "DA5": "32",
  /** Physical pin 33: DA4; bidirectional. */
  "DA4": "33",
  /** Physical pin 34: DA3; bidirectional. */
  "DA3": "34",
  /** Physical pin 35: DA2; bidirectional. */
  "DA2": "35",
  /** Physical pin 36: DA1; bidirectional. */
  "DA1": "36",
  /** Physical pin 37: DA0; bidirectional. */
  "DA0": "37",
  /** Physical pin 38: C; output. */
  "C": "38",
  /** Physical pin 39: TEST1; passive. */
  "TEST1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "Audio:YM2149";
  override referencePrefix = "U";
}

/**
 * Yamaha 6-channel, 4-OP, FM sound generator (with built-in 9-bit DAC), sine-wave LFO, 8-bit PCM channel (DAC mode), DIP-24 (600 mil)
 *
 * KiCad symbol: `Audio:YM2612`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://ddraig68k.com/assets/files/datasheets/YM2612.pdf
 * Keywords: FM-synthesizer OPN2 NMOS stereo sound-chip low-frequency-oscillator.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class YM2612 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: D_{0}; bidirectional. */
  "D_{0}": "2",
  /** Physical pin 3: D_{1}; bidirectional. */
  "D_{1}": "3",
  /** Physical pin 4: D_{2}; bidirectional. */
  "D_{2}": "4",
  /** Physical pin 5: D_{3}; bidirectional. */
  "D_{3}": "5",
  /** Physical pin 6: D_{4}; bidirectional. */
  "D_{4}": "6",
  /** Physical pin 7: D_{5}; bidirectional. */
  "D_{5}": "7",
  /** Physical pin 8: D_{6}; bidirectional. */
  "D_{6}": "8",
  /** Physical pin 9: D_{7}; bidirectional. */
  "D_{7}": "9",
  /** Physical pin 10: ~{TEST}; bidirectional. */
  "~{TEST}": "10",
  /** Physical pin 11: ~{IC}; input. */
  "~{IC}": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: ~{IRQ}; open_collector. */
  "~{IRQ}": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: ~{RD}; input. */
  "~{RD}": "16",
  /** Physical pin 17: A_{0}; input. */
  "A_{0}": "17",
  /** Physical pin 18: A_{1}; input. */
  "A_{1}": "18",
  /** Physical pin 19: AGND; power_in. */
  "AGND": "19",
  /** Physical pin 20: MOR; output. */
  "MOR": "20",
  /** Physical pin 21: MOL; output. */
  "MOL": "21",
  /** Physical pin 22: AV_{CC}; power_in. */
  "AV_{CC}": "22",
  /** Physical pin 23: V_{CC}; power_in. */
  "V_{CC}": "23",
  /** Physical pin 24: ΦM; input. */
  "ΦM": "24",
}) {
  override schema = "Audio:YM2612";
  override referencePrefix = "U";
}

/**
 * Yamaha 6-channel, 4-OP, FM sound generator (with built-in 9-bit DAC), sine-wave LFO, 8-bit PCM channel (DAC mode), CMOS version of YM2612, DIP-24 (600 mil)
 *
 * KiCad symbol: `Audio:YM3438`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://retrocdn.net/images/7/76/YM3438_JP_Application_Manual.pdf
 * Keywords: FM-synthesizer OPN2C stereo sound-chip low-frequency-oscillator.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class YM3438 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: D_{0}; bidirectional. */
  "D_{0}": "2",
  /** Physical pin 3: D_{1}; bidirectional. */
  "D_{1}": "3",
  /** Physical pin 4: D_{2}; bidirectional. */
  "D_{2}": "4",
  /** Physical pin 5: D_{3}; bidirectional. */
  "D_{3}": "5",
  /** Physical pin 6: D_{4}; bidirectional. */
  "D_{4}": "6",
  /** Physical pin 7: D_{5}; bidirectional. */
  "D_{5}": "7",
  /** Physical pin 8: D_{6}; bidirectional. */
  "D_{6}": "8",
  /** Physical pin 9: D_{7}; bidirectional. */
  "D_{7}": "9",
  /** Physical pin 10: ~{TEST}; bidirectional. */
  "~{TEST}": "10",
  /** Physical pin 11: ~{IC}; input. */
  "~{IC}": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: ~{IRQ}; open_collector. */
  "~{IRQ}": "13",
  /** Physical pin 14: ~{CS}; input. */
  "~{CS}": "14",
  /** Physical pin 15: ~{WR}; input. */
  "~{WR}": "15",
  /** Physical pin 16: ~{RD}; input. */
  "~{RD}": "16",
  /** Physical pin 17: A_{0}; input. */
  "A_{0}": "17",
  /** Physical pin 18: A_{1}; input. */
  "A_{1}": "18",
  /** Physical pin 19: AGND; power_in. */
  "AGND": "19",
  /** Physical pin 20: MOR; output. */
  "MOR": "20",
  /** Physical pin 21: MOL; output. */
  "MOL": "21",
  /** Physical pin 22: AV_{CC}; power_in. */
  "AV_{CC}": "22",
  /** Physical pin 23: V_{CC}; power_in. */
  "V_{CC}": "23",
  /** Physical pin 24: ΦM; input. */
  "ΦM": "24",
}) {
  override schema = "Audio:YM3438";
  override referencePrefix = "U";
}

