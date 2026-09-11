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
 */
export class AD1853 extends Component.withPins({
  "DGND": "1",
  "MCLK": "2",
  "CLATCH": "3",
  "CCLK": "4",
  "CDATA": "5",
  "INT4X": "6",
  "INT2X": "7",
  "ZEROR": "8",
  "DEEMP": "9",
  "IREF": "10",
  "AGND": "11",
  "OUTL+": "12",
  "OUTL-": "13",
  "FILTR": "14",
  "FCR": "15",
  "OUTR-": "16",
  "OUTR+": "17",
  "AVDD": "18",
  "FILTB": "19",
  "IDPM1": "20",
  "IDPM0": "21",
  "ZEROL": "22",
  "MUTE": "23",
  "~{RST}": "24",
  "L/~{R}CLK": "25",
  "BCLK": "26",
  "SDATA": "27",
  "DVDD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DGND: "power_in", MCLK: "input", CLATCH: "input", CCLK: "input", CDATA: "input", INT4X: "input", INT2X: "input", ZEROR: "output", DEEMP: "input", IREF: "passive", AGND: "power_in", "OUTL+": "output", "OUTL-": "output", FILTR: "output", FCR: "output", "OUTR-": "output", "OUTR+": "output", AVDD: "power_in", FILTB: "output", IDPM1: "input", IDPM0: "input", ZEROL: "output", MUTE: "input", "~{RST}": "input", "L/~{R}CLK": "input", BCLK: "input", SDATA: "input", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD1855 extends Component.withPins({
  "DGND": "1",
  "MCLK": "2",
  "CLATCH": "3",
  "CCLK": "4",
  "CDATA": "5",
  "384/~{256}": "6",
  "X2MCLK": "7",
  "ZEROR": "8",
  "DEEMP": "9",
  "96/~{48}": "10",
  "AGND_11": "11",
  "OUTR+": "12",
  "OUTR-": "13",
  "FILTR": "14",
  "AGND_15": "15",
  "OUTL-": "16",
  "OUTL+": "17",
  "AVDD": "18",
  "FILTB": "19",
  "IDPM1": "20",
  "IDPM0": "21",
  "ZEROL": "22",
  "MUTE": "23",
  "~{PD/RST}": "24",
  "L/~{R}CLK": "25",
  "BCLK": "26",
  "SDATA": "27",
  "DVDD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DGND: "power_in", MCLK: "input", CLATCH: "input", CCLK: "input", CDATA: "input", "384/~{256}": "input", X2MCLK: "input", ZEROR: "output", DEEMP: "input", "96/~{48}": "input", AGND_11: "power_in", "OUTR+": "output", "OUTR-": "output", FILTR: "output", AGND_15: "passive", "OUTL-": "output", "OUTL+": "output", AVDD: "power_in", FILTB: "output", IDPM1: "input", IDPM0: "input", ZEROL: "output", MUTE: "input", "~{PD/RST}": "input", "L/~{R}CLK": "input", BCLK: "input", SDATA: "input", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD1955 extends Component.withPins({
  "DVDD": "1",
  "LRCLK/EF_WCLK": "2",
  "BCLK/EF_BCLK": "3",
  "SDATA/EF_LDATA": "4",
  "EF_RDATA": "5",
  "DSD_SCLK": "6",
  "DSD_LDATA": "7",
  "DSD_RDATA": "8",
  "DSD_PHASE": "9",
  "AGND_10": "10",
  "OUTR+": "11",
  "OUTR-": "12",
  "FILTR": "13",
  "IREF": "14",
  "AVDD": "15",
  "FILTB": "16",
  "OUTL-": "17",
  "OUTL+": "18",
  "AGND_19": "19",
  "ZEROR": "20",
  "ZEROL": "21",
  "MUTE": "22",
  "~{PD/RST}": "23",
  "CDATA": "24",
  "~{CLATCH}": "25",
  "CCLK": "26",
  "MCLK": "27",
  "DGND": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVDD: "power_in", "LRCLK/EF_WCLK": "input", "BCLK/EF_BCLK": "input", "SDATA/EF_LDATA": "input", EF_RDATA: "input", DSD_SCLK: "bidirectional", DSD_LDATA: "input", DSD_RDATA: "input", DSD_PHASE: "bidirectional", AGND_10: "power_in", "OUTR+": "output", "OUTR-": "output", FILTR: "output", IREF: "passive", AVDD: "power_in", FILTB: "output", "OUTL-": "output", "OUTL+": "output", AGND_19: "passive", ZEROR: "output", ZEROL: "output", MUTE: "input", "~{PD/RST}": "input", CDATA: "input", "~{CLATCH}": "input", CCLK: "input", MCLK: "input", DGND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADAU1361 extends Component.withPins({
  "IOVDD": "1",
  "MCLK": "2",
  "ADDR0/~{CLATCH}": "3",
  "JACKDET/MICIN": "4",
  "MICBIAS": "5",
  "LAUX": "6",
  "CM": "7",
  "AVDD_8": "8",
  "AGND_9": "9",
  "LINP": "10",
  "LINN": "11",
  "RINP": "12",
  "RINN": "13",
  "RAUX": "14",
  "ROUTP": "15",
  "ROUTN": "16",
  "LOUTN": "17",
  "LOUTP": "18",
  "RHP": "19",
  "LHP": "20",
  "MONOOUT": "21",
  "AGND_22": "22",
  "AVDD_23": "23",
  "DVDDOUT": "24",
  "DGND": "25",
  "ADC_SDATA": "26",
  "DAC_SDATA": "27",
  "BCLK": "28",
  "LRCLK": "29",
  "ADDR1/CDATA": "30",
  "SDA/COUT": "31",
  "SCL/CCLK": "32",
  "EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IOVDD: "power_in", MCLK: "input", "ADDR0/~{CLATCH}": "input", "JACKDET/MICIN": "input", MICBIAS: "output", LAUX: "input", CM: "output", AVDD_8: "power_in", AGND_9: "power_in", LINP: "input", LINN: "input", RINP: "input", RINN: "input", RAUX: "input", ROUTP: "output", ROUTN: "output", LOUTN: "output", LOUTP: "output", RHP: "output", LHP: "output", MONOOUT: "output", AGND_22: "passive", AVDD_23: "passive", DVDDOUT: "power_out", DGND: "power_in", ADC_SDATA: "output", DAC_SDATA: "input", BCLK: "bidirectional", LRCLK: "bidirectional", "ADDR1/CDATA": "input", "SDA/COUT": "bidirectional", "SCL/CCLK": "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADAU1761 extends Component.withPins({
  "IOVDD": "1",
  "MCLK": "2",
  "ADDR0/~{CLATCH}": "3",
  "JACKDET/MICIN": "4",
  "MICBIAS": "5",
  "LAUX": "6",
  "CM": "7",
  "AVDD_8": "8",
  "AGND_9": "9",
  "LINP": "10",
  "LINN": "11",
  "RINP": "12",
  "RINN": "13",
  "RAUX": "14",
  "ROUTP": "15",
  "ROUTN": "16",
  "LOUTN": "17",
  "LOUTP": "18",
  "RHP": "19",
  "LHP": "20",
  "MONOOUT": "21",
  "AGND_22": "22",
  "AVDD_23": "23",
  "DVDDOUT": "24",
  "DGND": "25",
  "ADC_SDATA/GPIO1": "26",
  "DAC_SDATA/GPIO0": "27",
  "BCLK/GPIO2": "28",
  "LRCLK/GPIO3": "29",
  "ADDR1/CDATA": "30",
  "SDA/COUT": "31",
  "SCL/CCLK": "32",
  "EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IOVDD: "power_in", MCLK: "input", "ADDR0/~{CLATCH}": "input", "JACKDET/MICIN": "input", MICBIAS: "output", LAUX: "input", CM: "output", AVDD_8: "power_in", AGND_9: "power_in", LINP: "input", LINN: "input", RINP: "input", RINN: "input", RAUX: "input", ROUTP: "output", ROUTN: "output", LOUTN: "output", LOUTP: "output", RHP: "output", LHP: "output", MONOOUT: "output", AGND_22: "passive", AVDD_23: "passive", DVDDOUT: "power_out", DGND: "power_in", "ADC_SDATA/GPIO1": "bidirectional", "DAC_SDATA/GPIO0": "bidirectional", "BCLK/GPIO2": "bidirectional", "LRCLK/GPIO3": "bidirectional", "ADDR1/CDATA": "input", "SDA/COUT": "bidirectional", "SCL/CCLK": "input", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADAU1978xBCP extends Component.withPins({
  "AGND_1": "1",
  "VREF": "2",
  "PLL_FILT": "3",
  "AVDD_4": "4",
  "AGND_5": "5",
  "~{PD}/~{RST}": "6",
  "MCLKIN": "7",
  "NC_8": "8",
  "SA_MODE": "9",
  "DVDD": "10",
  "DGND": "11",
  "IOVDD": "12",
  "SDATAOUT1": "13",
  "SDATAOUT2": "14",
  "LRCLK": "15",
  "BCLK": "16",
  "SDA": "17",
  "SCL": "18",
  "ADDR0": "19",
  "ADDR1": "20",
  "AGND_21": "21",
  "AGND_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "AGND_28": "28",
  "AGND_29": "29",
  "NC_30": "30",
  "AVDD_31": "31",
  "AIN1N": "32",
  "AIN1P": "33",
  "AIN2N": "34",
  "AIN2P": "35",
  "AIN3N": "36",
  "AIN3P": "37",
  "AIN4N": "38",
  "AIN4P": "39",
  "AVDD_40": "40",
  "EP": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AGND_1: "power_in", VREF: "output", PLL_FILT: "output", AVDD_4: "power_in", AGND_5: "passive", "~{PD}/~{RST}": "input", MCLKIN: "input", NC_8: "no_connect", SA_MODE: "input", DVDD: "power_out", DGND: "power_in", IOVDD: "power_in", SDATAOUT1: "output", SDATAOUT2: "output", LRCLK: "bidirectional", BCLK: "bidirectional", SDA: "bidirectional", SCL: "input", ADDR0: "input", ADDR1: "input", AGND_21: "passive", AGND_22: "passive", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", AGND_28: "passive", AGND_29: "passive", NC_30: "no_connect", AVDD_31: "passive", AIN1N: "input", AIN1P: "input", AIN2N: "input", AIN2P: "input", AIN3N: "input", AIN3P: "input", AIN4N: "input", AIN4P: "input", AVDD_40: "passive", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADAU1979xBCP extends Component.withPins({
  "AGND_1": "1",
  "VREF": "2",
  "PLL_FILT": "3",
  "AVDD_4": "4",
  "AGND_5": "5",
  "~{PD}/~{RST}": "6",
  "MCLKIN": "7",
  "NC_8": "8",
  "SA_MODE": "9",
  "DVDD": "10",
  "DGND": "11",
  "IOVDD": "12",
  "SDATAOUT1": "13",
  "SDATAOUT2": "14",
  "LRCLK": "15",
  "BCLK": "16",
  "SDA": "17",
  "SCL": "18",
  "ADDR0": "19",
  "ADDR1": "20",
  "AGND_21": "21",
  "AGND_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "NC_27": "27",
  "AGND_28": "28",
  "AGND_29": "29",
  "NC_30": "30",
  "AVDD_31": "31",
  "AIN1N": "32",
  "AIN1P": "33",
  "AIN2N": "34",
  "AIN2P": "35",
  "AIN3N": "36",
  "AIN3P": "37",
  "AIN4N": "38",
  "AIN4P": "39",
  "AVDD_40": "40",
  "EP": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AGND_1: "power_in", VREF: "output", PLL_FILT: "output", AVDD_4: "power_in", AGND_5: "passive", "~{PD}/~{RST}": "input", MCLKIN: "input", NC_8: "no_connect", SA_MODE: "input", DVDD: "power_out", DGND: "power_in", IOVDD: "power_in", SDATAOUT1: "output", SDATAOUT2: "output", LRCLK: "bidirectional", BCLK: "bidirectional", SDA: "bidirectional", SCL: "input", ADDR0: "input", ADDR1: "input", AGND_21: "passive", AGND_22: "passive", NC_23: "no_connect", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", NC_27: "no_connect", AGND_28: "passive", AGND_29: "passive", NC_30: "no_connect", AVDD_31: "passive", AIN1N: "input", AIN1P: "input", AIN2N: "input", AIN2P: "input", AIN3N: "input", AIN3P: "input", AIN4N: "input", AIN4P: "input", AVDD_40: "passive", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AK5392VS extends Component.withPins({
  "VREFL": "1",
  "GNDL": "2",
  "VCOML": "3",
  "AINL+": "4",
  "AINL-": "5",
  "ZCAL": "6",
  "VD": "7",
  "DGND": "8",
  "CAL": "9",
  "~{RST}": "10",
  "SMODE2": "11",
  "SMODE1": "12",
  "LRCK": "13",
  "SCLK": "14",
  "SDATA": "15",
  "FSYNC": "16",
  "CLK": "17",
  "CMODE": "18",
  "HPFE": "19",
  "TEST": "20",
  "BGND": "21",
  "AGND": "22",
  "VA": "23",
  "AINR-": "24",
  "AINR+": "25",
  "VCOMR": "26",
  "GNDR": "27",
  "VREFR": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VREFL: "output", GNDL: "power_in", VCOML: "output", "AINL+": "input", "AINL-": "input", ZCAL: "input", VD: "power_in", DGND: "power_in", CAL: "output", "~{RST}": "input", SMODE2: "input", SMODE1: "input", LRCK: "bidirectional", SCLK: "bidirectional", SDATA: "output", FSYNC: "bidirectional", CLK: "input", CMODE: "input", HPFE: "input", TEST: "input", BGND: "power_in", AGND: "power_in", VA: "power_in", "AINR-": "input", "AINR+": "input", VCOMR: "output", GNDR: "output", VREFR: "output", ...opts.pinTypes } });
  }
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
 */
export class AK5393VS extends Component.withPins({
  "VREFL": "1",
  "GNDL": "2",
  "VCOML": "3",
  "AINL+": "4",
  "AINL-": "5",
  "ZCAL": "6",
  "VD": "7",
  "DGND": "8",
  "CAL": "9",
  "~{RST}": "10",
  "SMODE2": "11",
  "SMODE1": "12",
  "LRCK": "13",
  "SCLK": "14",
  "SDATA": "15",
  "FSYNC": "16",
  "MCLK": "17",
  "DFS": "18",
  "HPFE": "19",
  "TEST": "20",
  "BGND": "21",
  "AGND": "22",
  "VA": "23",
  "AINR-": "24",
  "AINR+": "25",
  "VCOMR": "26",
  "GNDR": "27",
  "VREFR": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VREFL: "output", GNDL: "power_in", VCOML: "output", "AINL+": "input", "AINL-": "input", ZCAL: "input", VD: "power_in", DGND: "power_in", CAL: "output", "~{RST}": "input", SMODE2: "input", SMODE1: "input", LRCK: "bidirectional", SCLK: "bidirectional", SDATA: "output", FSYNC: "bidirectional", MCLK: "input", DFS: "input", HPFE: "input", TEST: "input", BGND: "power_in", AGND: "power_in", VA: "power_in", "AINR-": "input", "AINR+": "input", VCOMR: "output", GNDR: "output", VREFR: "output", ...opts.pinTypes } });
  }
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
 */
export class AK5394AVS extends Component.withPins({
  "VREFL+": "1",
  "VREFL-": "2",
  "VCOML": "3",
  "AINL+": "4",
  "AINL-": "5",
  "ZCAL": "6",
  "VD": "7",
  "DGND": "8",
  "CAL": "9",
  "~{RST}": "10",
  "SMODE2": "11",
  "SMODE1": "12",
  "LRCK": "13",
  "SCLK": "14",
  "SDATA": "15",
  "FSYNC": "16",
  "MCLK": "17",
  "DFS0": "18",
  "HPFE": "19",
  "DFS1": "20",
  "BGND": "21",
  "AGND": "22",
  "VA": "23",
  "AINR-": "24",
  "AINR+": "25",
  "VCOMR": "26",
  "VREFR-": "27",
  "VREFR+": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VREFL+": "output", "VREFL-": "output", VCOML: "output", "AINL+": "input", "AINL-": "input", ZCAL: "input", VD: "power_in", DGND: "power_in", CAL: "output", "~{RST}": "input", SMODE2: "input", SMODE1: "input", LRCK: "bidirectional", SCLK: "bidirectional", SDATA: "output", FSYNC: "bidirectional", MCLK: "input", DFS0: "input", HPFE: "input", DFS1: "input", BGND: "power_in", AGND: "power_in", VA: "power_in", "AINR-": "input", "AINR+": "input", VCOMR: "output", "VREFR-": "output", "VREFR+": "output", ...opts.pinTypes } });
  }
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
 */
export class AK5720VT extends Component.withPins({
  "VCOM": "1",
  "RIN": "2",
  "LIN": "3",
  "VSS": "4",
  "VA": "5",
  "VD": "6",
  "GSEL": "7",
  "REGO": "8",
  "SDTO": "9",
  "LRCLK": "10",
  "MCLK": "11",
  "BICK": "12",
  "~{PDN}": "13",
  "DIF/TDMI": "14",
  "FSEL": "15",
  "CKS": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCOM: "passive", RIN: "input", LIN: "input", VSS: "power_in", VA: "power_in", VD: "power_in", GSEL: "input", REGO: "passive", SDTO: "output", LRCLK: "bidirectional", MCLK: "input", BICK: "bidirectional", "~{PDN}": "input", "DIF/TDMI": "input", FSEL: "input", CKS: "input", ...opts.pinTypes } });
  }
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
 */
export class AK7742EQ extends Component.withPins({
  "AIN3L": "1",
  "AIN2R": "2",
  "AIN2L": "3",
  "AVDD_4": "4",
  "VSS1_5": "5",
  "LFLT": "6",
  "TEST1": "7",
  "CKM2": "8",
  "DVDD_9": "9",
  "VSS2_10": "10",
  "XTI": "11",
  "XTO": "12",
  "SDOUT1": "13",
  "SDIN1/JX1": "14",
  "SDIN2/JX2": "15",
  "CKM1": "16",
  "CKM0": "17",
  "~{IRESET}": "18",
  "I2CSEL": "19",
  "DVDD_20": "20",
  "VSS2_21": "21",
  "LRCK": "22",
  "BICK": "23",
  "CLKO/SDOUT3": "24",
  "SO/RDY/GPO/SDOUT2": "25",
  "SDA": "26",
  "SCL": "27",
  "CAD0": "28",
  "CAD1": "29",
  "VSS1_30": "30",
  "AVDRV": "31",
  "AVDD_32": "32",
  "AOUT2RN": "33",
  "AOUT2RP": "34",
  "AOUT2LN": "35",
  "AOUT2LP": "36",
  "AOUT1RN": "37",
  "AOUT1RP": "38",
  "AOUT1LN": "39",
  "AOUT1LP": "40",
  "VSS1_41": "41",
  "VCOM": "42",
  "AVDD_43": "43",
  "AIN1RN": "44",
  "AIN1RP": "45",
  "AIN1LN": "46",
  "AIN1LP": "47",
  "AIN3R": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AIN3L: "input", AIN2R: "input", AIN2L: "input", AVDD_4: "power_in", VSS1_5: "power_in", LFLT: "passive", TEST1: "passive", CKM2: "input", DVDD_9: "power_in", VSS2_10: "power_in", XTI: "input", XTO: "output", SDOUT1: "output", "SDIN1/JX1": "input", "SDIN2/JX2": "input", CKM1: "input", CKM0: "input", "~{IRESET}": "input", I2CSEL: "input", DVDD_20: "power_in", VSS2_21: "passive", LRCK: "bidirectional", BICK: "bidirectional", "CLKO/SDOUT3": "output", "SO/RDY/GPO/SDOUT2": "output", SDA: "bidirectional", SCL: "input", CAD0: "input", CAD1: "input", VSS1_30: "passive", AVDRV: "passive", AVDD_32: "power_in", AOUT2RN: "output", AOUT2RP: "output", AOUT2LN: "output", AOUT2LP: "output", AOUT1RN: "output", AOUT1RP: "output", AOUT1LN: "output", AOUT1LP: "output", VSS1_41: "passive", VCOM: "passive", AVDD_43: "power_in", AIN1RN: "input", AIN1RP: "input", AIN1LN: "input", AIN1LP: "input", AIN3R: "input", ...opts.pinTypes } });
  }
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
 */
export class AS3310 extends Component.withPins({
  "CAP": "1",
  "ENVOUT": "2",
  "VP": "3",
  "GATE": "4",
  "TRIG": "5",
  "VEE": "6",
  "PGND": "7",
  "CCOMP": "8",
  "VCS": "9",
  "IIN": "10",
  "VCC": "11",
  "VCD": "12",
  "VCR": "13",
  "GND": "14",
  "VCA": "15",
  "ATKOUT": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CAP: "passive", ENVOUT: "output", VP: "input", GATE: "input", TRIG: "input", VEE: "power_in", PGND: "power_in", CCOMP: "passive", VCS: "input", IIN: "input", VCC: "power_in", VCD: "input", VCR: "input", GND: "power_in", VCA: "input", ATKOUT: "output", ...opts.pinTypes } });
  }
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
 */
export class AS3320 extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "GND": "3",
  "CAP2": "4",
  "CAP1": "5",
  "OUT2": "6",
  "OUT1": "7",
  "VRES": "8",
  "IRES": "9",
  "OUT4": "10",
  "CAP4": "11",
  "VCFI": "12",
  "VEE": "13",
  "VCC": "14",
  "OUT3": "15",
  "CAP3": "16",
  "IN3": "17",
  "IN4": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN2: "input", GND: "power_in", CAP2: "passive", CAP1: "passive", OUT2: "output", OUT1: "output", VRES: "input", IRES: "input", OUT4: "output", CAP4: "passive", VCFI: "input", VEE: "power_in", VCC: "power_in", OUT3: "output", CAP3: "passive", IN3: "input", IN4: "input", ...opts.pinTypes } });
  }
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
 */
export class AS3320F extends Component.withPins({
  "NC_1": "1",
  "IN3": "2",
  "IN4": "3",
  "IN1": "4",
  "IN2": "5",
  "NC_6": "6",
  "GND": "7",
  "CAP2": "8",
  "CAP1": "9",
  "NC_10": "10",
  "OUT2": "11",
  "OUT1": "12",
  "NC_13": "13",
  "VRES": "14",
  "IRES": "15",
  "OUT4": "16",
  "CAP4": "17",
  "NC_18": "18",
  "VCFI": "19",
  "VEE": "20",
  "NC_21": "21",
  "VCC": "22",
  "OUT3": "23",
  "CAP3": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN3: "input", IN4: "input", IN1: "input", IN2: "input", NC_6: "no_connect", GND: "power_in", CAP2: "passive", CAP1: "passive", NC_10: "no_connect", OUT2: "output", OUT1: "output", NC_13: "no_connect", VRES: "input", IRES: "input", OUT4: "output", CAP4: "passive", NC_18: "no_connect", VCFI: "input", VEE: "power_in", NC_21: "no_connect", VCC: "power_in", OUT3: "output", CAP3: "passive", ...opts.pinTypes } });
  }
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
 */
export class AS3330 extends Component.withPins({
  "VEE": "5",
  "VCC": "10",
  "GND": "18",
  "OUT1": "1",
  "VG1": "2",
  "DTRIM1": "3",
  "IN1": "4",
  "VCE1": "6",
  "VCL1": "7",
  "IDLE": "8",
  "CCOMP1": "9",
  "CCOMP2": "11",
  "VCL2": "12",
  "IN2": "13",
  "VCE2": "14",
  "VG2": "15",
  "OUT2": "16",
  "DTRIM2": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VEE: "power_in", VCC: "power_in", GND: "power_in", OUT1: "output", VG1: "input", DTRIM1: "passive", IN1: "input", VCE1: "input", VCL1: "input", IDLE: "passive", CCOMP1: "passive", CCOMP2: "passive", VCL2: "input", IN2: "input", VCE2: "input", VG2: "input", OUT2: "output", DTRIM2: "passive", ...opts.pinTypes } });
  }
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
 */
export class AS3330F extends Component.withPins({
  "GND": "3",
  "VEE": "9",
  "VCC": "16",
  "NC_1": "1",
  "OUT1": "4",
  "VG1": "5",
  "NC_6": "6",
  "DTRIM1": "7",
  "IN1": "8",
  "NC_10": "10",
  "VCE1": "11",
  "VCL1": "12",
  "NC_13": "13",
  "IDLE": "14",
  "CCOMP1": "15",
  "NC_18": "18",
  "NC_21": "21",
  "DTRIM2": "2",
  "CCOMP2": "17",
  "VCL2": "19",
  "IN2": "20",
  "VCE2": "22",
  "VG2": "23",
  "OUT2": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VEE: "power_in", VCC: "power_in", NC_1: "no_connect", OUT1: "output", VG1: "input", NC_6: "no_connect", DTRIM1: "passive", IN1: "input", NC_10: "no_connect", VCE1: "input", VCL1: "input", NC_13: "no_connect", IDLE: "passive", CCOMP1: "passive", NC_18: "no_connect", NC_21: "no_connect", DTRIM2: "passive", CCOMP2: "passive", VCL2: "input", IN2: "input", VCE2: "input", VG2: "input", OUT2: "output", ...opts.pinTypes } });
  }
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
 */
export class AS3340 extends Component.withPins({
  "SCALE1": "1",
  "SCALE2": "2",
  "VEE": "3",
  "VP": "4",
  "VPWM": "5",
  "VHSI": "6",
  "VHFT": "7",
  "VSO": "8",
  "VSSI": "9",
  "VTO": "10",
  "CAP": "11",
  "GND": "12",
  "VLFI": "13",
  "VS": "14",
  "VFCI": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCALE1: "input", SCALE2: "input", VEE: "power_in", VP: "output", VPWM: "input", VHSI: "input", VHFT: "input", VSO: "output", VSSI: "input", VTO: "output", CAP: "passive", GND: "power_in", VLFI: "input", VS: "passive", VFCI: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AS3345 extends Component.withPins({
  "SCALE1": "1",
  "SCALE2": "2",
  "VEE": "3",
  "VP": "4",
  "VPWM": "5",
  "VHSI": "6",
  "VMO": "7",
  "VHFT": "8",
  "VSO": "9",
  "VSSI": "10",
  "VTO": "11",
  "CAP": "12",
  "GND_13": "13",
  "GND_14": "14",
  "VLFI": "15",
  "VS": "16",
  "VFCI": "17",
  "VCC": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCALE1: "input", SCALE2: "input", VEE: "power_in", VP: "output", VPWM: "input", VHSI: "input", VMO: "output", VHFT: "input", VSO: "output", VSSI: "input", VTO: "output", CAP: "passive", GND_13: "passive", GND_14: "power_in", VLFI: "input", VS: "passive", VFCI: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AS3345F extends Component.withPins({
  "NC_1": "1",
  "VFCI": "2",
  "VCC": "3",
  "SCALE1": "4",
  "SCALE2": "5",
  "NC_6": "6",
  "VEE": "7",
  "VP": "8",
  "VPWM": "9",
  "NC_10": "10",
  "VHSI": "11",
  "VMO": "12",
  "NC_13": "13",
  "VHFT": "14",
  "VSO": "15",
  "VSSI": "16",
  "VTO": "17",
  "NC_18": "18",
  "CAP": "19",
  "GND_20": "20",
  "NC_21": "21",
  "GND_22": "22",
  "VLFI": "23",
  "VS": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VFCI: "input", VCC: "power_in", SCALE1: "input", SCALE2: "input", NC_6: "no_connect", VEE: "power_in", VP: "output", VPWM: "input", NC_10: "no_connect", VHSI: "input", VMO: "output", NC_13: "no_connect", VHFT: "input", VSO: "output", VSSI: "input", VTO: "output", NC_18: "no_connect", CAP: "passive", GND_20: "power_in", NC_21: "no_connect", GND_22: "passive", VLFI: "input", VS: "passive", ...opts.pinTypes } });
  }
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
 */
export class AS3360 extends Component.withPins({
  "GND": "1",
  "VEE": "7",
  "VCC": "14",
  "IO1": "2",
  "VE1": "3",
  "VO1": "4",
  "VC1": "5",
  "II1": "6",
  "VREF": "8",
  "II2": "9",
  "VC2": "10",
  "VO2": "11",
  "VE2": "12",
  "IO2": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VEE: "power_in", VCC: "power_in", IO1: "output", VE1: "input", VO1: "output", VC1: "input", II1: "input", VREF: "passive", II2: "input", VC2: "input", VO2: "output", VE2: "input", IO2: "output", ...opts.pinTypes } });
  }
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
 */
export class CS4245 extends Component.withPins({
  "SDA/CDOUT": "1",
  "SCL/CCLK": "2",
  "AD0/~{CS}": "3",
  "AD1/CDIN": "4",
  "VLC": "5",
  "~{RESET}": "6",
  "AIN3A": "7",
  "AIN3B": "8",
  "AIN2A": "9",
  "AIN2B": "10",
  "AIN1A": "11",
  "AIN1B": "12",
  "AGND_13": "13",
  "VA_14": "14",
  "AFILTA": "15",
  "AFILTB": "16",
  "VQ1": "17",
  "VQ2": "18",
  "FILT1+": "19",
  "FILT2+": "20",
  "AIN4A/MICIN1": "21",
  "AIN4B/MICIN2": "22",
  "AIN5A": "23",
  "AIN5B": "24",
  "MICBIAS": "25",
  "AIN6A": "26",
  "AIN6B": "27",
  "AUXOUTA": "28",
  "AUXOUTB": "29",
  "VA_30": "30",
  "AGND_31": "31",
  "AGND_32": "32",
  "AOUTA": "33",
  "AOUTB": "34",
  "~{MUTEC}": "35",
  "VLS": "36",
  "SDIN": "37",
  "SCLK2": "38",
  "LRCK2": "39",
  "MCLK2": "40",
  "SDOUT": "41",
  "SCLK1": "42",
  "LRCK1": "43",
  "MCLK1": "44",
  "DGND": "45",
  "VD": "46",
  "INT": "47",
  "OVFL": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA/CDOUT": "bidirectional", "SCL/CCLK": "input", "AD0/~{CS}": "input", "AD1/CDIN": "input", VLC: "input", "~{RESET}": "input", AIN3A: "input", AIN3B: "input", AIN2A: "input", AIN2B: "input", AIN1A: "input", AIN1B: "input", AGND_13: "power_in", VA_14: "power_in", AFILTA: "output", AFILTB: "output", VQ1: "output", VQ2: "output", "FILT1+": "output", "FILT2+": "output", "AIN4A/MICIN1": "input", "AIN4B/MICIN2": "input", AIN5A: "input", AIN5B: "input", MICBIAS: "output", AIN6A: "input", AIN6B: "input", AUXOUTA: "output", AUXOUTB: "output", VA_30: "power_in", AGND_31: "passive", AGND_32: "passive", AOUTA: "output", AOUTB: "output", "~{MUTEC}": "output", VLS: "power_in", SDIN: "input", SCLK2: "bidirectional", LRCK2: "bidirectional", MCLK2: "input", SDOUT: "output", SCLK1: "bidirectional", LRCK1: "bidirectional", MCLK1: "input", DGND: "power_in", VD: "power_in", INT: "output", OVFL: "output", ...opts.pinTypes } });
  }
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
 */
export class CS4265 extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "VLC": "3",
  "~{RESET}": "4",
  "VA_5": "5",
  "AGND_6": "6",
  "AINA": "7",
  "AINB": "8",
  "SGND": "9",
  "AFILTA": "10",
  "AFILTB": "11",
  "VQ": "12",
  "FILT+": "13",
  "MICIN1": "14",
  "MICIN2": "15",
  "MICBIAS": "16",
  "VA_17": "17",
  "AGND_18": "18",
  "AOUTA": "19",
  "AOUTB": "20",
  "~{MUTEC}": "21",
  "VLS": "22",
  "TXSDIN": "23",
  "SDIN2": "24",
  "SDIN1": "25",
  "SDOUT": "26",
  "SCLK": "27",
  "LRCK": "28",
  "MCLK": "29",
  "DGND": "30",
  "VD": "31",
  "TXOUT": "32",
  "AGND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", VLC: "input", "~{RESET}": "input", VA_5: "power_in", AGND_6: "power_in", AINA: "input", AINB: "input", SGND: "power_in", AFILTA: "output", AFILTB: "output", VQ: "output", "FILT+": "output", MICIN1: "input", MICIN2: "input", MICBIAS: "output", VA_17: "power_in", AGND_18: "passive", AOUTA: "output", AOUTB: "output", "~{MUTEC}": "output", VLS: "input", TXSDIN: "input", SDIN2: "input", SDIN1: "input", SDOUT: "output", SCLK: "bidirectional", LRCK: "bidirectional", MCLK: "input", DGND: "power_in", VD: "power_in", TXOUT: "output", AGND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class CS4270 extends Component.withPins({
  "SDIN": "1",
  "LRCLK": "2",
  "MCLK": "3",
  "SCLK": "4",
  "VD": "5",
  "DGND": "6",
  "SDOUT": "7",
  "VLC": "8",
  "SDA/CDOUT/M1": "9",
  "SCL/CCLK/M0": "10",
  "AD0/~{CS}/I2S/~{LJ}": "11",
  "AD1/CDIN/MDIV1": "12",
  "AD2/MDIV2": "13",
  "~{RST}": "14",
  "AINA": "15",
  "AINB": "16",
  "VQ": "17",
  "FIL+": "18",
  "VA": "19",
  "AGND": "20",
  "~{MUTEA}": "21",
  "OUTA": "22",
  "OUTB": "23",
  "~{MUTEB}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDIN: "input", LRCLK: "bidirectional", MCLK: "input", SCLK: "bidirectional", VD: "power_in", DGND: "power_in", SDOUT: "output", VLC: "power_in", "SDA/CDOUT/M1": "bidirectional", "SCL/CCLK/M0": "input", "AD0/~{CS}/I2S/~{LJ}": "input", "AD1/CDIN/MDIV1": "input", "AD2/MDIV2": "input", "~{RST}": "input", AINA: "input", AINB: "input", VQ: "passive", "FIL+": "passive", VA: "power_in", AGND: "power_in", "~{MUTEA}": "input", OUTA: "output", OUTB: "output", "~{MUTEB}": "input", ...opts.pinTypes } });
  }
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
 */
export class CS4272 extends Component.withPins({
  "XT0": "1",
  "XTI": "2",
  "MCLK": "3",
  "LRCK": "4",
  "SCLK": "5",
  "SDOUT(M/~{S})": "6",
  "SDIN": "7",
  "DGND": "8",
  "VD": "9",
  "VL": "10",
  "SCL/CCLK(M0)": "11",
  "SDA/CDIN(M1)": "12",
  "AD0/~{CS}(I2S/~{LJ})": "13",
  "~{RST}": "14",
  "VCOM": "15",
  "AINA-": "16",
  "AINA+": "17",
  "AINB+": "18",
  "AINB-": "19",
  "VA": "20",
  "AGND": "21",
  "FILT+": "22",
  "~{AMUTEC}": "23",
  "AOUTA-": "24",
  "AOUTA+": "25",
  "AOUTB+": "26",
  "AOUTB-": "27",
  "~{BMUTEC}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XT0: "output", XTI: "input", MCLK: "bidirectional", LRCK: "bidirectional", SCLK: "bidirectional", "SDOUT(M/~{S})": "output", SDIN: "input", DGND: "power_in", VD: "power_in", VL: "power_in", "SCL/CCLK(M0)": "input", "SDA/CDIN(M1)": "bidirectional", "AD0/~{CS}(I2S/~{LJ})": "input", "~{RST}": "input", VCOM: "output", "AINA-": "input", "AINA+": "input", "AINB+": "input", "AINB-": "input", VA: "power_in", AGND: "power_in", "FILT+": "output", "~{AMUTEC}": "output", "AOUTA-": "output", "AOUTA+": "output", "AOUTB+": "output", "AOUTB-": "output", "~{BMUTEC}": "output", ...opts.pinTypes } });
  }
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
 */
export class CS4334 extends Component.withPins({
  "SDATA": "1",
  "~{DEM}/SCLK": "2",
  "LRCK": "3",
  "MCLK": "4",
  "AOUTR": "5",
  "AGND": "6",
  "VA": "7",
  "AOUTL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDATA: "input", "~{DEM}/SCLK": "input", LRCK: "input", MCLK: "input", AOUTR: "output", AGND: "power_in", VA: "power_in", AOUTL: "output", ...opts.pinTypes } });
  }
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
 */
export class CS4344 extends Component.withPins({
  "SDIN": "1",
  "~{DEM}/SCLK": "2",
  "LRCK": "3",
  "MCLK": "4",
  "VQ": "5",
  "FILT+": "6",
  "AOUTL": "7",
  "GND": "8",
  "VA": "9",
  "AOUTR": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDIN: "input", "~{DEM}/SCLK": "input", LRCK: "input", MCLK: "input", VQ: "output", "FILT+": "output", AOUTL: "output", GND: "power_in", VA: "power_in", AOUTR: "output", ...opts.pinTypes } });
  }
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
 */
export class CS4345 extends Component.withPins({
  "SDIN": "1",
  "~{DEM}/SCLK": "2",
  "LRCK": "3",
  "MCLK": "4",
  "VQ": "5",
  "FILT+": "6",
  "AOUTL": "7",
  "GND": "8",
  "VA": "9",
  "AOUTR": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDIN: "input", "~{DEM}/SCLK": "input", LRCK: "input", MCLK: "input", VQ: "output", "FILT+": "output", AOUTL: "output", GND: "power_in", VA: "power_in", AOUTR: "output", ...opts.pinTypes } });
  }
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
 */
export class CS4348 extends Component.withPins({
  "SDIN": "1",
  "~{DEM}/SCLK": "2",
  "LRCK": "3",
  "MCLK": "4",
  "VQ": "5",
  "FILT+": "6",
  "AOUTL": "7",
  "GND": "8",
  "VA": "9",
  "AOUTR": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDIN: "input", "~{DEM}/SCLK": "input", LRCK: "input", MCLK: "input", VQ: "output", "FILT+": "output", AOUTL: "output", GND: "power_in", VA: "power_in", AOUTR: "output", ...opts.pinTypes } });
  }
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
 */
export class CS43L21 extends Component.withPins({
  "LRCK": "1",
  "SDA/MCLKDIV2": "2",
  "SCL/CCLK/I2S/~{LJ}": "3",
  "AD0/~{CS}/DEM": "4",
  "VA_HP": "5",
  "FLYP": "6",
  "GND_HP": "7",
  "FLYN": "8",
  "VSS_HP": "9",
  "AOUTB": "10",
  "AOUTA": "11",
  "VA": "12",
  "AGND_13": "13",
  "FILT+": "14",
  "VQ": "15",
  "NIC": "16",
  "TSTO_17": "17",
  "TSTO_18": "18",
  "TSTO_19": "19",
  "TSTO_20": "20",
  "TSTO_21": "21",
  "TSTO_22": "22",
  "TSTO_23": "23",
  "TSTO_24": "24",
  "~{RESET}": "25",
  "VL": "26",
  "VD": "27",
  "DGND": "28",
  "TESTO/M/~{S}": "29",
  "MCLK": "30",
  "SCLK": "31",
  "SDIN": "32",
  "AGND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LRCK: "bidirectional", "SDA/MCLKDIV2": "bidirectional", "SCL/CCLK/I2S/~{LJ}": "input", "AD0/~{CS}/DEM": "input", VA_HP: "input", FLYP: "input", GND_HP: "input", FLYN: "input", VSS_HP: "output", AOUTB: "output", AOUTA: "output", VA: "input", AGND_13: "power_in", "FILT+": "output", VQ: "output", NIC: "no_connect", TSTO_17: "no_connect", TSTO_18: "no_connect", TSTO_19: "no_connect", TSTO_20: "no_connect", TSTO_21: "no_connect", TSTO_22: "no_connect", TSTO_23: "no_connect", TSTO_24: "no_connect", "~{RESET}": "input", VL: "input", VD: "power_in", DGND: "power_in", "TESTO/M/~{S}": "input", MCLK: "input", SCLK: "input", SDIN: "input", AGND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class CS5343 extends Component.withPins({
  "SDOUT": "1",
  "SCLK": "2",
  "LRCK": "3",
  "MCLK": "4",
  "FILT+": "5",
  "AINL": "6",
  "VQ": "7",
  "AINR": "8",
  "GND": "9",
  "VA": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDOUT: "output", SCLK: "bidirectional", LRCK: "bidirectional", MCLK: "input", "FILT+": "output", AINL: "input", VQ: "output", AINR: "input", GND: "power_in", VA: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CS5344 extends Component.withPins({
  "SDOUT": "1",
  "SCLK": "2",
  "LRCK": "3",
  "MCLK": "4",
  "FILT+": "5",
  "AINL": "6",
  "VQ": "7",
  "AINR": "8",
  "GND": "9",
  "VA": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDOUT: "output", SCLK: "bidirectional", LRCK: "bidirectional", MCLK: "input", "FILT+": "output", AINL: "input", VQ: "output", AINR: "input", GND: "power_in", VA: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CS5361 extends Component.withPins({
  "~{RST}": "1",
  "M/~{S}": "2",
  "LRCK": "3",
  "SCLK": "4",
  "MCLK": "5",
  "VD": "6",
  "GND_7": "7",
  "VL": "8",
  "SDOUT": "9",
  "MDIV": "10",
  "~{HPF}": "11",
  "I2S/~{LJ}": "12",
  "M0": "13",
  "M1": "14",
  "~{OVFL}": "15",
  "AINL+": "16",
  "AINL-": "17",
  "GND_18": "18",
  "VA": "19",
  "AINR-": "20",
  "AINR+": "21",
  "VQ": "22",
  "REFGND": "23",
  "FILT+": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", "M/~{S}": "input", LRCK: "bidirectional", SCLK: "bidirectional", MCLK: "input", VD: "power_in", GND_7: "power_in", VL: "power_in", SDOUT: "output", MDIV: "input", "~{HPF}": "input", "I2S/~{LJ}": "input", M0: "input", M1: "input", "~{OVFL}": "input", "AINL+": "input", "AINL-": "input", GND_18: "passive", VA: "power_in", "AINR-": "input", "AINR+": "input", VQ: "power_out", REFGND: "power_in", "FILT+": "power_out", ...opts.pinTypes } });
  }
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
 */
export class CS8406 extends Component.withPins({
  "VD": "6",
  "~{RST}": "9",
  "ILRCK": "12",
  "ISCLK": "13",
  "SDIN": "14",
  "OMCK": "21",
  "GND": "22",
  "VL": "23",
  "H/~{S}": "24",
  "TXN": "25",
  "TXP": "26",
  "SDA/CDOUT/COPY/C": "1",
  "AD0/~{CS}/TEST": "2",
  "AD2/~{EMPH}": "3",
  "RXP/SFMT0": "4",
  "TSTN/SFMT1": "5",
  "TEST_7": "7",
  "TEST_8": "8",
  "TEST/APMS": "10",
  "TEST/TCBLD": "11",
  "TCBL": "15",
  "TEST/CEN": "16",
  "TEST/U": "17",
  "TEST/V": "18",
  "INT/~{AUDIO}": "19",
  "U/HWCK0": "20",
  "AD1/CDIN/HWCK1": "27",
  "SCL/CCLK/ORIG": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VD: "power_in", "~{RST}": "input", ILRCK: "bidirectional", ISCLK: "bidirectional", SDIN: "input", OMCK: "input", GND: "power_in", VL: "power_in", "H/~{S}": "input", TXN: "output", TXP: "output", "SDA/CDOUT/COPY/C": "bidirectional", "AD0/~{CS}/TEST": "input", "AD2/~{EMPH}": "input", "RXP/SFMT0": "input", "TSTN/SFMT1": "input", TEST_7: "input", TEST_8: "input", "TEST/APMS": "input", "TEST/TCBLD": "input", TCBL: "bidirectional", "TEST/CEN": "input", "TEST/U": "input", "TEST/V": "input", "INT/~{AUDIO}": "bidirectional", "U/HWCK0": "input", "AD1/CDIN/HWCK1": "input", "SCL/CCLK/ORIG": "input", ...opts.pinTypes } });
  }
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
 */
export class CS8414 extends Component.withPins({
  "C": "1",
  "CD/F1": "2",
  "CC/F0": "3",
  "CB/E2": "4",
  "CA/E1": "5",
  "C0/E0": "6",
  "VD": "7",
  "DGND": "8",
  "RXP": "9",
  "RXN": "10",
  "FSYNC": "11",
  "SCK": "12",
  "CS12/FCK": "13",
  "U": "14",
  "CBL": "15",
  "SEL": "16",
  "M3": "17",
  "M2": "18",
  "MCK": "19",
  "FILT": "20",
  "AGND": "21",
  "VA": "22",
  "M0": "23",
  "M1": "24",
  "ERF": "25",
  "SDATA": "26",
  "CE/F2": "27",
  "VERF": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C: "output", "CD/F1": "output", "CC/F0": "output", "CB/E2": "output", "CA/E1": "output", "C0/E0": "output", VD: "power_in", DGND: "power_in", RXP: "input", RXN: "input", FSYNC: "bidirectional", SCK: "bidirectional", "CS12/FCK": "input", U: "output", CBL: "output", SEL: "input", M3: "input", M2: "input", MCK: "output", FILT: "input", AGND: "power_in", VA: "power_in", M0: "input", M1: "input", ERF: "output", SDATA: "output", "CE/F2": "output", VERF: "output", ...opts.pinTypes } });
  }
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
 */
export class CS8416_xNZ extends Component.withPins({
  "RXP0": "1",
  "RXN": "2",
  "VA": "3",
  "AGND": "4",
  "FILT": "5",
  "~{RESET}": "6",
  "RXP4/RXSEL1": "7",
  "RXP5/RXSEL0": "8",
  "RXP6/TXSEL1": "9",
  "RXP7/TXSEL0": "10",
  "AD0/~{CS}/NV/RERR": "11",
  "AD1/CDIN/~{AUDIO}": "12",
  "SCL/CCLK/96KHZ": "13",
  "SDA/CDOUT/RCBL": "14",
  "U/AD2/GPO2": "15",
  "C/GPO1": "16",
  "TX/GPO0": "17",
  "VL": "18",
  "DGND": "19",
  "VD": "20",
  "RMCK": "21",
  "OMCK": "22",
  "SDOUT": "23",
  "OSCLK": "24",
  "OLRCK": "25",
  "RXP3": "26",
  "RXP2": "27",
  "RXP1": "28",
  "TP": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXP0: "input", RXN: "input", VA: "power_in", AGND: "power_in", FILT: "passive", "~{RESET}": "input", "RXP4/RXSEL1": "input", "RXP5/RXSEL0": "input", "RXP6/TXSEL1": "input", "RXP7/TXSEL0": "input", "AD0/~{CS}/NV/RERR": "input", "AD1/CDIN/~{AUDIO}": "input", "SCL/CCLK/96KHZ": "input", "SDA/CDOUT/RCBL": "bidirectional", "U/AD2/GPO2": "output", "C/GPO1": "output", "TX/GPO0": "output", VL: "power_in", DGND: "power_in", VD: "power_in", RMCK: "output", OMCK: "input", SDOUT: "output", OSCLK: "bidirectional", OLRCK: "bidirectional", RXP3: "input", RXP2: "input", RXP1: "input", TP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CS8416_xSZ extends Component.withPins({
  "RXP3": "1",
  "RXP2": "2",
  "RXP1": "3",
  "RXP0": "4",
  "RXN": "5",
  "VA": "6",
  "AGND": "7",
  "FILT": "8",
  "~{RESET}": "9",
  "RXP4/RXSEL1": "10",
  "RXP5/RXSEL0": "11",
  "RXP6/TXSEL1": "12",
  "RXP7/TXSEL0": "13",
  "AD0/~{CS}/NV/RERR": "14",
  "AD1/CDIN/~{AUDIO}": "15",
  "SCL/CCLK/96KHZ": "16",
  "SDA/CDOUT/RCBL": "17",
  "U/AD2/GPO2": "18",
  "C/GPO1": "19",
  "TX/GPO0": "20",
  "VL": "21",
  "DGND": "22",
  "VD": "23",
  "RMCK": "24",
  "OMCK": "25",
  "SDOUT": "26",
  "OSCLK": "27",
  "OLRCK": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXP3: "input", RXP2: "input", RXP1: "input", RXP0: "input", RXN: "input", VA: "power_in", AGND: "power_in", FILT: "passive", "~{RESET}": "input", "RXP4/RXSEL1": "input", "RXP5/RXSEL0": "input", "RXP6/TXSEL1": "input", "RXP7/TXSEL0": "input", "AD0/~{CS}/NV/RERR": "input", "AD1/CDIN/~{AUDIO}": "input", "SCL/CCLK/96KHZ": "input", "SDA/CDOUT/RCBL": "bidirectional", "U/AD2/GPO2": "output", "C/GPO1": "output", "TX/GPO0": "output", VL: "power_in", DGND: "power_in", VD: "power_in", RMCK: "output", OMCK: "input", SDOUT: "output", OSCLK: "bidirectional", OLRCK: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class CS8416_xZZ extends Component.withPins({
  "RXP3": "1",
  "RXP2": "2",
  "RXP1": "3",
  "RXP0": "4",
  "RXN": "5",
  "VA": "6",
  "AGND": "7",
  "FILT": "8",
  "~{RESET}": "9",
  "RXP4/RXSEL1": "10",
  "RXP5/RXSEL0": "11",
  "RXP6/TXSEL1": "12",
  "RXP7/TXSEL0": "13",
  "AD0/~{CS}/NV/RERR": "14",
  "AD1/CDIN/~{AUDIO}": "15",
  "SCL/CCLK/96KHZ": "16",
  "SDA/CDOUT/RCBL": "17",
  "U/AD2/GPO2": "18",
  "C/GPO1": "19",
  "TX/GPO0": "20",
  "VL": "21",
  "DGND": "22",
  "VD": "23",
  "RMCK": "24",
  "OMCK": "25",
  "SDOUT": "26",
  "OSCLK": "27",
  "OLRCK": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RXP3: "input", RXP2: "input", RXP1: "input", RXP0: "input", RXN: "input", VA: "power_in", AGND: "power_in", FILT: "passive", "~{RESET}": "input", "RXP4/RXSEL1": "input", "RXP5/RXSEL0": "input", "RXP6/TXSEL1": "input", "RXP7/TXSEL0": "input", "AD0/~{CS}/NV/RERR": "input", "AD1/CDIN/~{AUDIO}": "input", "SCL/CCLK/96KHZ": "input", "SDA/CDOUT/RCBL": "bidirectional", "U/AD2/GPO2": "output", "C/GPO1": "output", "TX/GPO0": "output", VL: "power_in", DGND: "power_in", VD: "power_in", RMCK: "output", OMCK: "input", SDOUT: "output", OSCLK: "bidirectional", OLRCK: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class CS8420 extends Component.withPins({
  "SDA/CDOUT/COPY/C": "1",
  "AD0/~{CS}/DFC0": "2",
  "~{EMPH}/U/V": "3",
  "RXP/SMFT0": "4",
  "RXN/SMFT1": "5",
  "VA+": "6",
  "AGND": "7",
  "FILT": "8",
  "~{RST}": "9",
  "RMCK/APMS": "10",
  "RERR/~{LOCK}/TBCLD": "11",
  "ILRCK/TCBLD/RCBL": "12",
  "ISCLK/PRO/C": "13",
  "SDIN/MUTE/CHS": "14",
  "TCBL/NVERR": "15",
  "OSCLK/CEN": "16",
  "OLRCK/V": "17",
  "SDOUT/U": "18",
  "INT/~{AUDIO}/V/CUVEN": "19",
  "U/S/~{AES}/PRO/C": "20",
  "OMCK/APMS": "21",
  "DGND": "22",
  "VD+": "23",
  "H/~{S}": "24",
  "TXN/U": "25",
  "TXP/C": "26",
  "AD1/CDIN/DFC1": "27",
  "SCL/CCLK/ORIG/U": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA/CDOUT/COPY/C": "bidirectional", "AD0/~{CS}/DFC0": "input", "~{EMPH}/U/V": "bidirectional", "RXP/SMFT0": "input", "RXN/SMFT1": "input", "VA+": "power_in", AGND: "power_in", FILT: "passive", "~{RST}": "input", "RMCK/APMS": "bidirectional", "RERR/~{LOCK}/TBCLD": "output", "ILRCK/TCBLD/RCBL": "bidirectional", "ISCLK/PRO/C": "bidirectional", "SDIN/MUTE/CHS": "input", "TCBL/NVERR": "bidirectional", "OSCLK/CEN": "bidirectional", "OLRCK/V": "bidirectional", "SDOUT/U": "bidirectional", "INT/~{AUDIO}/V/CUVEN": "bidirectional", "U/S/~{AES}/PRO/C": "bidirectional", "OMCK/APMS": "input", DGND: "power_in", "VD+": "power_in", "H/~{S}": "input", "TXN/U": "output", "TXP/C": "output", "AD1/CDIN/DFC1": "input", "SCL/CCLK/ORIG/U": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DSD1794A extends Component.withPins({
  "DSDL": "1",
  "DSDR": "2",
  "DBCK": "3",
  "PLRCK": "4",
  "PDATA": "5",
  "PBK": "6",
  "SCK": "7",
  "DGND": "8",
  "VDD": "9",
  "ADR0": "10",
  "ADR1": "11",
  "SCL": "12",
  "SDA": "13",
  "~{RST}": "14",
  "VCC2R": "15",
  "AGND3R": "16",
  "IOUTR+": "17",
  "IOUTR-": "18",
  "AGND1": "19",
  "IREF": "20",
  "VCOMR": "21",
  "VCOML": "22",
  "VCC1": "23",
  "AGND2": "24",
  "IOUTL+": "25",
  "IOUTL-": "26",
  "AGND3L": "27",
  "VCC2L": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DSDL: "bidirectional", DSDR: "bidirectional", DBCK: "input", PLRCK: "input", PDATA: "input", PBK: "input", SCK: "input", DGND: "power_in", VDD: "power_in", ADR0: "input", ADR1: "input", SCL: "input", SDA: "bidirectional", "~{RST}": "input", VCC2R: "power_in", AGND3R: "power_in", "IOUTR+": "output", "IOUTR-": "output", AGND1: "power_in", IREF: "passive", VCOMR: "output", VCOML: "passive", VCC1: "power_in", AGND2: "power_in", "IOUTL+": "output", "IOUTL-": "output", AGND3L: "power_in", VCC2L: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ES8388 extends Component.withPins({
  "MCLK": "1",
  "DVDD": "2",
  "PVDD": "3",
  "DGND": "4",
  "SCLK": "5",
  "DSDIN": "6",
  "LRCK": "7",
  "ASDOUT": "8",
  "NC_9": "9",
  "VREF": "10",
  "ROUT1": "11",
  "LOUT1": "12",
  "HPGND": "13",
  "ROUT2": "14",
  "LOUT2": "15",
  "HPVDD": "16",
  "AVDD": "17",
  "AGND": "18",
  "ADCVREF": "19",
  "VMID": "20",
  "RIN2": "21",
  "LIN2": "22",
  "RIN1": "23",
  "LIN1": "24",
  "NC_25": "25",
  "CE": "26",
  "CDATA": "27",
  "CCLK": "28",
  "EPAD": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MCLK: "input", DVDD: "power_in", PVDD: "power_in", DGND: "power_in", SCLK: "bidirectional", DSDIN: "input", LRCK: "bidirectional", ASDOUT: "output", NC_9: "no_connect", VREF: "input", ROUT1: "output", LOUT1: "output", HPGND: "power_in", ROUT2: "output", LOUT2: "output", HPVDD: "power_in", AVDD: "power_in", AGND: "power_in", ADCVREF: "input", VMID: "input", RIN2: "input", LIN2: "input", RIN1: "input", LIN1: "input", NC_25: "no_connect", CE: "input", CDATA: "bidirectional", CCLK: "input", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class ES9028PRO extends Component.withPins({
  "VDD_{L}_1": "1",
  "DAC1": "2",
  "DAC1B": "3",
  "DAC3B": "4",
  "DAC3": "5",
  "AGND_{L}_6": "6",
  "AVCC_{L}_7": "7",
  "~{RESETB}": "8",
  "DGND_9": "9",
  "AVCC_{L}_10": "10",
  "AGND_{L}_11": "11",
  "DAC5": "12",
  "DAC5B": "13",
  "DAC7B": "14",
  "DAC7": "15",
  "VDD_{L}_16": "16",
  "AVCC_{L}_17": "17",
  "AGND_{L}_18": "18",
  "DGND_19": "19",
  "DVDD_20": "20",
  "SDA": "21",
  "SCL": "22",
  "XOUT": "23",
  "XIN": "24",
  "VCCA": "25",
  "GPIO4": "26",
  "GPIO3": "27",
  "GPIO2": "28",
  "DVDD_29": "29",
  "DGND_30": "30",
  "AGND_{R}_31": "31",
  "AVCC_{R}_32": "32",
  "VDD_{R}_33": "33",
  "DAC8": "34",
  "DAC8B": "35",
  "DAC6B": "36",
  "DAC6": "37",
  "AGND_{R}_38": "38",
  "AVCC_{R}_39": "39",
  "GPIO1": "40",
  "ADDR": "41",
  "AVCC_{R}_42": "42",
  "AGND_{R}_43": "43",
  "DAC4": "44",
  "DAC4B": "45",
  "DAC2B": "46",
  "DAC2": "47",
  "VDD_{R}_48": "48",
  "AVCC_{R}_49": "49",
  "AGND_{R}_50": "50",
  "DGND_51": "51",
  "DATA8": "52",
  "DATA7": "53",
  "DATA6": "54",
  "DATA5": "55",
  "DATA4": "56",
  "DATA3": "57",
  "DATA2": "58",
  "DATA1": "59",
  "DATA_CLK": "60",
  "DVDD_61": "61",
  "AVDD": "62",
  "AGND_{L}_63": "63",
  "AVCC_{L}_64": "64",
  "EPAD": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VDD_{L}_1": "power_in", DAC1: "output", DAC1B: "output", DAC3B: "output", DAC3: "output", "AGND_{L}_6": "power_in", "AVCC_{L}_7": "power_in", "~{RESETB}": "input", DGND_9: "power_in", "AVCC_{L}_10": "passive", "AGND_{L}_11": "passive", DAC5: "output", DAC5B: "output", DAC7B: "output", DAC7: "output", "VDD_{L}_16": "passive", "AVCC_{L}_17": "passive", "AGND_{L}_18": "passive", DGND_19: "passive", DVDD_20: "power_in", SDA: "bidirectional", SCL: "input", XOUT: "output", XIN: "input", VCCA: "power_in", GPIO4: "bidirectional", GPIO3: "bidirectional", GPIO2: "bidirectional", DVDD_29: "passive", DGND_30: "passive", "AGND_{R}_31": "power_in", "AVCC_{R}_32": "power_in", "VDD_{R}_33": "power_in", DAC8: "output", DAC8B: "output", DAC6B: "output", DAC6: "output", "AGND_{R}_38": "passive", "AVCC_{R}_39": "passive", GPIO1: "bidirectional", ADDR: "input", "AVCC_{R}_42": "passive", "AGND_{R}_43": "passive", DAC4: "output", DAC4B: "output", DAC2B: "output", DAC2: "output", "VDD_{R}_48": "passive", "AVCC_{R}_49": "passive", "AGND_{R}_50": "passive", DGND_51: "passive", DATA8: "bidirectional", DATA7: "bidirectional", DATA6: "bidirectional", DATA5: "bidirectional", DATA4: "bidirectional", DATA3: "bidirectional", DATA2: "bidirectional", DATA1: "bidirectional", DATA_CLK: "bidirectional", DVDD_61: "passive", AVDD: "power_in", "AGND_{L}_63": "passive", "AVCC_{L}_64": "passive", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class ISD2560P extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD25120P extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD2560S extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD25120S extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD2560E extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD2575E extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD2575P extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD2575S extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD2590E extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD2590P extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISD2590S extends Component.withPins({
  "A0/M0": "1",
  "A1/M1": "2",
  "A2/M2": "3",
  "A3/M3": "4",
  "A4/M4": "5",
  "A5/M5": "6",
  "A6/M6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "AUX_IN": "11",
  "VSSD": "12",
  "VSSA": "13",
  "SP+": "14",
  "SP-": "15",
  "VCCA": "16",
  "MIC": "17",
  "MIC_REF": "18",
  "AGC": "19",
  "ANA_IN": "20",
  "ANA_OUT": "21",
  "~{OVF}": "22",
  "~{CE}": "23",
  "PD": "24",
  "~{EOM}": "25",
  "XCLK": "26",
  "P/~{R}": "27",
  "VCCD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/M0": "input", "A1/M1": "input", "A2/M2": "input", "A3/M3": "input", "A4/M4": "input", "A5/M5": "input", "A6/M6": "input", A7: "input", A8: "input", A9: "input", AUX_IN: "input", VSSD: "power_in", VSSA: "power_in", "SP+": "output", "SP-": "output", VCCA: "power_in", MIC: "input", MIC_REF: "passive", AGC: "passive", ANA_IN: "input", ANA_OUT: "output", "~{OVF}": "output", "~{CE}": "input", PD: "input", "~{EOM}": "output", XCLK: "input", "P/~{R}": "input", VCCD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MAX98357A extends Component.withPins({
  "DIN": "1",
  "GAIN_SLOT": "2",
  "GND_3": "3",
  "~{SD_MODE}": "4",
  "NC_5": "5",
  "NC_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "OUTP": "9",
  "OUTN": "10",
  "GND_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "LRCLK": "14",
  "GND_15": "15",
  "BCLK": "16",
  "PAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIN: "input", GAIN_SLOT: "passive", GND_3: "power_in", "~{SD_MODE}": "input", NC_5: "no_connect", NC_6: "no_connect", VDD_7: "power_in", VDD_8: "passive", OUTP: "output", OUTN: "output", GND_11: "passive", NC_12: "no_connect", NC_13: "no_connect", LRCLK: "input", GND_15: "passive", BCLK: "input", PAD: "unspecified", ...opts.pinTypes } });
  }
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
 */
export class MAX98357B extends Component.withPins({
  "DIN": "1",
  "GAIN_SLOT": "2",
  "GND_3": "3",
  "~{SD_MODE}": "4",
  "NC_5": "5",
  "NC_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "OUTP": "9",
  "OUTN": "10",
  "GND_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "LRCLK": "14",
  "GND_15": "15",
  "BCLK": "16",
  "PAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIN: "input", GAIN_SLOT: "passive", GND_3: "power_in", "~{SD_MODE}": "input", NC_5: "no_connect", NC_6: "no_connect", VDD_7: "power_in", VDD_8: "passive", OUTP: "output", OUTN: "output", GND_11: "passive", NC_12: "no_connect", NC_13: "no_connect", LRCLK: "input", GND_15: "passive", BCLK: "input", PAD: "unspecified", ...opts.pinTypes } });
  }
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
 */
export class MN3005 extends Component.withPins({
  "GND": "1",
  "CP2": "2",
  "OUT1": "3",
  "OUT2": "4",
  "VDD": "5",
  "CP1": "6",
  "IN": "7",
  "VGG": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", CP2: "input", OUT1: "output", OUT2: "output", VDD: "power_in", CP1: "input", IN: "input", VGG: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MN3007 extends Component.withPins({
  "GND": "1",
  "CP1": "2",
  "IN": "3",
  "VGG": "4",
  "VDD": "5",
  "CP2": "6",
  "OUT1": "7",
  "OUT2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", CP1: "input", IN: "input", VGG: "power_in", VDD: "power_in", CP2: "input", OUT1: "output", OUT2: "output", ...opts.pinTypes } });
  }
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
 */
export class MN3207 extends Component.withPins({
  "GND": "1",
  "CP1": "2",
  "IN": "3",
  "VGG": "4",
  "VDD": "5",
  "CP2": "6",
  "OUT1": "7",
  "OUT2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", CP1: "input", IN: "input", VGG: "power_in", VDD: "power_in", CP2: "input", OUT1: "output", OUT2: "output", ...opts.pinTypes } });
  }
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
 */
export class MSGEQ7 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "OUT": "3",
  "STROBE": "4",
  "IN": "5",
  "GND": "6",
  "RESET": "7",
  "CKIN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", OUT: "output", STROBE: "input", IN: "input", GND: "power_out", RESET: "input", CKIN: "input", ...opts.pinTypes } });
  }
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
 */
export class PCM1754DBQ extends Component.withPins({
  "BCK": "1",
  "DATA": "2",
  "LRCLK": "3",
  "DGND": "4",
  "NC": "5",
  "V_{CC}": "6",
  "V_{OUT}L": "7",
  "V_{OUT}R": "8",
  "AGND": "9",
  "V_{COM}": "10",
  "ZEROA": "11",
  "TEST": "12",
  "DEMP": "13",
  "MUTE": "14",
  "FMT": "15",
  "SCK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BCK: "input", DATA: "input", LRCLK: "input", DGND: "power_in", NC: "no_connect", "V_{CC}": "power_in", "V_{OUT}L": "output", "V_{OUT}R": "output", AGND: "power_in", "V_{COM}": "output", ZEROA: "output", TEST: "passive", DEMP: "input", MUTE: "input", FMT: "input", SCK: "input", ...opts.pinTypes } });
  }
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
 */
export class PCM1780 extends Component.withPins({
  "ZEROL": "1",
  "~{MS}": "2",
  "MC": "3",
  "MD": "4",
  "SCK": "5",
  "DATA": "6",
  "BCK": "7",
  "LRCK": "8",
  "NC_9": "9",
  "NC_10": "10",
  "Vcc": "11",
  "AGND": "12",
  "V_{COM}": "13",
  "V_{OUT}R": "14",
  "V_{OUT}L": "15",
  "ZEROR": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ZEROL: "output", "~{MS}": "input", MC: "input", MD: "input", SCK: "input", DATA: "input", BCK: "input", LRCK: "input", NC_9: "no_connect", NC_10: "no_connect", Vcc: "power_in", AGND: "power_in", "V_{COM}": "output", "V_{OUT}R": "output", "V_{OUT}L": "output", ZEROR: "output", ...opts.pinTypes } });
  }
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
 */
export class PCM1792A extends Component.withPins({
  "ZEROL": "1",
  "ZEROR": "2",
  "MSEL": "3",
  "LRCK": "4",
  "DATA": "5",
  "BCK": "6",
  "SCK": "7",
  "DGND": "8",
  "VDD": "9",
  "~{MS}": "10",
  "MDI": "11",
  "MC": "12",
  "MDO": "13",
  "~{RST}": "14",
  "VCC2R": "15",
  "AGND3R": "16",
  "IOUTR+": "17",
  "IOUTR-": "18",
  "AGND1": "19",
  "IREF": "20",
  "VCOMR": "21",
  "VCOML": "22",
  "VCC1": "23",
  "AGND2": "24",
  "IOUTL+": "25",
  "IOUTL-": "26",
  "AGND3L": "27",
  "VCC2L": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ZEROL: "output", ZEROR: "output", MSEL: "input", LRCK: "input", DATA: "input", BCK: "input", SCK: "input", DGND: "power_in", VDD: "power_in", "~{MS}": "input", MDI: "input", MC: "input", MDO: "bidirectional", "~{RST}": "input", VCC2R: "power_in", AGND3R: "power_in", "IOUTR+": "output", "IOUTR-": "output", AGND1: "power_in", IREF: "passive", VCOMR: "output", VCOML: "passive", VCC1: "power_in", AGND2: "power_in", "IOUTL+": "output", "IOUTL-": "output", AGND3L: "power_in", VCC2L: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM1794A extends Component.withPins({
  "MONO": "1",
  "CHSL": "2",
  "DEM": "3",
  "LRCK": "4",
  "DATA": "5",
  "BCK": "6",
  "SCK": "7",
  "DGND": "8",
  "VDD": "9",
  "MUTE": "10",
  "FMT0": "11",
  "FMT1": "12",
  "ZERO": "13",
  "~{RST}": "14",
  "VCC2R": "15",
  "AGND3R": "16",
  "IOUTR+": "17",
  "IOUTR-": "18",
  "AGND1": "19",
  "IREF": "20",
  "VCOMR": "21",
  "VCOML": "22",
  "VCC1": "23",
  "AGND2": "24",
  "IOUTL+": "25",
  "IOUTL-": "26",
  "AGND3L": "27",
  "VCC2L": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MONO: "input", CHSL: "input", DEM: "input", LRCK: "input", DATA: "input", BCK: "input", SCK: "input", DGND: "power_in", VDD: "power_in", MUTE: "input", FMT0: "input", FMT1: "input", ZERO: "open_collector", "~{RST}": "input", VCC2R: "power_in", AGND3R: "power_in", "IOUTR+": "output", "IOUTR-": "output", AGND1: "power_in", IREF: "passive", VCOMR: "output", VCOML: "passive", VCC1: "power_in", AGND2: "power_in", "IOUTL+": "output", "IOUTL-": "output", AGND3L: "power_in", VCC2L: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM1860DBT extends Component.withPins({
  "MD1": "25",
  "MD0": "26",
  "VINL4/VIN4M": "27",
  "VINR4/VIN3M": "28",
  "VINL3/VIN4P": "29",
  "VINR3/VIN3P": "30",
  "VINL2/VIN1M": "1",
  "VINR2/VIN2M": "2",
  "VINL1/VIN1P": "3",
  "VINR1/VIN2P": "4",
  "Mic_Bias": "5",
  "VREF": "6",
  "AGND": "7",
  "AVDD": "8",
  "XO": "9",
  "XI": "10",
  "LDO": "11",
  "DGND": "12",
  "DVDD": "13",
  "IOVDD": "14",
  "SCKI": "15",
  "LRCK": "16",
  "BCK": "17",
  "DOUT": "18",
  "INT": "19",
  "MD6": "20",
  "MD5": "21",
  "MD4": "22",
  "MD2": "23",
  "MD3": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MD1: "input", MD0: "input", "VINL4/VIN4M": "input", "VINR4/VIN3M": "input", "VINL3/VIN4P": "input", "VINR3/VIN3P": "input", "VINL2/VIN1M": "input", "VINR2/VIN2M": "input", "VINL1/VIN1P": "input", "VINR1/VIN2P": "input", Mic_Bias: "power_out", VREF: "power_out", AGND: "power_in", AVDD: "power_in", XO: "output", XI: "input", LDO: "power_in", DGND: "power_in", DVDD: "power_in", IOVDD: "power_in", SCKI: "input", LRCK: "bidirectional", BCK: "bidirectional", DOUT: "output", INT: "output", MD6: "input", MD5: "input", MD4: "input", MD2: "input", MD3: "input", ...opts.pinTypes } });
  }
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
 */
export class PCM1862DBT extends Component.withPins({
  "MS/AD": "25",
  "MD0": "26",
  "VINL4/VIN4M": "27",
  "VINR4/VIN3M": "28",
  "VINL3/VIN4P": "29",
  "VINR3/VIN3P": "30",
  "VINL2/VIN1M": "1",
  "VINR2/VIN2M": "2",
  "VINL1/VIN1P": "3",
  "VINR1/VIN2P": "4",
  "Mic_Bias": "5",
  "VREF": "6",
  "AGND": "7",
  "AVDD": "8",
  "XO": "9",
  "XI": "10",
  "LDO": "11",
  "DGND": "12",
  "DVDD": "13",
  "IOVDD": "14",
  "SCKI": "15",
  "LRCK": "16",
  "BCK": "17",
  "DOUT": "18",
  "GPIO3/INTC": "19",
  "GPIO2/INTB/DMCLK": "20",
  "GPIO1/INTA/DMIN": "21",
  "MISO/GPIO0": "22",
  "MOSI/SDA": "23",
  "MC/SCL": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "MS/AD": "input", MD0: "input", "VINL4/VIN4M": "input", "VINR4/VIN3M": "input", "VINL3/VIN4P": "input", "VINR3/VIN3P": "input", "VINL2/VIN1M": "input", "VINR2/VIN2M": "input", "VINL1/VIN1P": "input", "VINR1/VIN2P": "input", Mic_Bias: "power_out", VREF: "power_out", AGND: "power_in", AVDD: "power_in", XO: "output", XI: "input", LDO: "power_in", DGND: "power_in", DVDD: "power_in", IOVDD: "power_in", SCKI: "input", LRCK: "bidirectional", BCK: "bidirectional", DOUT: "output", "GPIO3/INTC": "bidirectional", "GPIO2/INTB/DMCLK": "bidirectional", "GPIO1/INTA/DMIN": "bidirectional", "MISO/GPIO0": "bidirectional", "MOSI/SDA": "bidirectional", "MC/SCL": "input", ...opts.pinTypes } });
  }
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
 */
export class PCM1864DBT extends Component.withPins({
  "MS/AD": "25",
  "MD0": "26",
  "VINL4/VIN4M": "27",
  "VINR4/VIN3M": "28",
  "VINL3/VIN4P": "29",
  "VINR3/VIN3P": "30",
  "VINL2/VIN1M": "1",
  "VINR2/VIN2M": "2",
  "VINL1/VIN1P": "3",
  "VINR1/VIN2P": "4",
  "Mic_Bias": "5",
  "VREF": "6",
  "AGND": "7",
  "AVDD": "8",
  "XO": "9",
  "XI": "10",
  "LDO": "11",
  "DGND": "12",
  "DVDD": "13",
  "IOVDD": "14",
  "SCKI": "15",
  "LRCK": "16",
  "BCK": "17",
  "DOUT": "18",
  "GPIO3/INTC": "19",
  "GPIO2/INTB/DMCLK": "20",
  "GPIO1/INTA/DMIN": "21",
  "MISO/GPIO0/DMIN2": "22",
  "MOSI/SDA": "23",
  "MC/SCL": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "MS/AD": "input", MD0: "input", "VINL4/VIN4M": "input", "VINR4/VIN3M": "input", "VINL3/VIN4P": "input", "VINR3/VIN3P": "input", "VINL2/VIN1M": "input", "VINR2/VIN2M": "input", "VINL1/VIN1P": "input", "VINR1/VIN2P": "input", Mic_Bias: "power_out", VREF: "power_out", AGND: "power_in", AVDD: "power_in", XO: "output", XI: "input", LDO: "power_in", DGND: "power_in", DVDD: "power_in", IOVDD: "power_in", SCKI: "input", LRCK: "bidirectional", BCK: "bidirectional", DOUT: "output", "GPIO3/INTC": "bidirectional", "GPIO2/INTB/DMCLK": "bidirectional", "GPIO1/INTA/DMIN": "bidirectional", "MISO/GPIO0/DMIN2": "bidirectional", "MOSI/SDA": "bidirectional", "MC/SCL": "input", ...opts.pinTypes } });
  }
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
 */
export class PCM2902 extends Component.withPins({
  "D+": "1",
  "D-": "2",
  "VBUS": "3",
  "DGNDU": "4",
  "HID0": "5",
  "HID1": "6",
  "HID2": "7",
  "SEL0": "8",
  "SEL1": "9",
  "VCCCI": "10",
  "AGNDC": "11",
  "VINL": "12",
  "VINR": "13",
  "VCOM": "14",
  "VOUTR": "15",
  "VOUTL": "16",
  "VCCP1I": "17",
  "AGNDP": "18",
  "VCCP2I": "19",
  "XTO": "20",
  "XTI": "21",
  "AGNDX": "22",
  "VCCXI": "23",
  "DIN": "24",
  "DOUT": "25",
  "DGND": "26",
  "VDDI": "27",
  "~{SSPND}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D+": "bidirectional", "D-": "bidirectional", VBUS: "power_in", DGNDU: "power_in", HID0: "input", HID1: "input", HID2: "input", SEL0: "input", SEL1: "input", VCCCI: "passive", AGNDC: "power_in", VINL: "input", VINR: "input", VCOM: "passive", VOUTR: "output", VOUTL: "output", VCCP1I: "passive", AGNDP: "power_in", VCCP2I: "passive", XTO: "output", XTI: "input", AGNDX: "power_in", VCCXI: "passive", DIN: "input", DOUT: "output", DGND: "power_in", VDDI: "power_out", "~{SSPND}": "output", ...opts.pinTypes } });
  }
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
 */
export class PCM3060 extends Component.withPins({
  "MC/SCL/FMT": "1",
  "MD/SDA/DEMP": "2",
  "DOUT": "3",
  "LRCK1": "4",
  "BCK1": "5",
  "SCKI1": "6",
  "V_{DD}": "7",
  "DGND": "8",
  "SCKI2": "9",
  "BCK2": "10",
  "LRCK2": "11",
  "DIN": "12",
  "ZEROR": "13",
  "ZEROL": "14",
  "~{RST}": "15",
  "SGND": "16",
  "V_{OUT}R-": "17",
  "V_{OUT}R+": "18",
  "V_{OUT}L-": "19",
  "V_{OUT}L+": "20",
  "V_{COM}": "21",
  "AGND2": "22",
  "AGND1": "23",
  "V_{CC}": "24",
  "V_{IN}L": "25",
  "V_{IN}R": "26",
  "~{MS}/AD/IFMD": "27",
  "MODE": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "MC/SCL/FMT": "input", "MD/SDA/DEMP": "bidirectional", DOUT: "output", LRCK1: "bidirectional", BCK1: "bidirectional", SCKI1: "input", "V_{DD}": "power_in", DGND: "power_in", SCKI2: "input", BCK2: "bidirectional", LRCK2: "bidirectional", DIN: "input", ZEROR: "output", ZEROL: "output", "~{RST}": "input", SGND: "power_in", "V_{OUT}R-": "output", "V_{OUT}R+": "output", "V_{OUT}L-": "output", "V_{OUT}L+": "output", "V_{COM}": "output", AGND2: "power_in", AGND1: "power_in", "V_{CC}": "power_in", "V_{IN}L": "input", "V_{IN}R": "input", "~{MS}/AD/IFMD": "input", MODE: "input", ...opts.pinTypes } });
  }
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
 */
export class PCM5100 extends Component.withPins({
  "CPVDD": "1",
  "CAPP": "2",
  "CPGND": "3",
  "CAPM": "4",
  "VNEG": "5",
  "OUTL": "6",
  "OUTR": "7",
  "AVDD": "8",
  "AGND": "9",
  "DEMP": "10",
  "FLT": "11",
  "SCK": "12",
  "BCK": "13",
  "DIN": "14",
  "LRCK": "15",
  "FMT": "16",
  "XSMT": "17",
  "LDOO": "18",
  "DGND": "19",
  "DVDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPVDD: "passive", CAPP: "passive", CPGND: "power_in", CAPM: "passive", VNEG: "passive", OUTL: "output", OUTR: "output", AVDD: "power_in", AGND: "power_in", DEMP: "input", FLT: "input", SCK: "input", BCK: "input", DIN: "input", LRCK: "input", FMT: "input", XSMT: "input", LDOO: "passive", DGND: "power_in", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM5100A extends Component.withPins({
  "CPVDD": "1",
  "CAPP": "2",
  "CPGND": "3",
  "CAPM": "4",
  "VNEG": "5",
  "OUTL": "6",
  "OUTR": "7",
  "AVDD": "8",
  "AGND": "9",
  "DEMP": "10",
  "FLT": "11",
  "SCK": "12",
  "BCK": "13",
  "DIN": "14",
  "LRCK": "15",
  "FMT": "16",
  "XSMT": "17",
  "LDOO": "18",
  "DGND": "19",
  "DVDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPVDD: "passive", CAPP: "passive", CPGND: "power_in", CAPM: "passive", VNEG: "passive", OUTL: "output", OUTR: "output", AVDD: "power_in", AGND: "power_in", DEMP: "input", FLT: "input", SCK: "input", BCK: "input", DIN: "input", LRCK: "input", FMT: "input", XSMT: "input", LDOO: "passive", DGND: "power_in", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM5101 extends Component.withPins({
  "CPVDD": "1",
  "CAPP": "2",
  "CPGND": "3",
  "CAPM": "4",
  "VNEG": "5",
  "OUTL": "6",
  "OUTR": "7",
  "AVDD": "8",
  "AGND": "9",
  "DEMP": "10",
  "FLT": "11",
  "SCK": "12",
  "BCK": "13",
  "DIN": "14",
  "LRCK": "15",
  "FMT": "16",
  "XSMT": "17",
  "LDOO": "18",
  "DGND": "19",
  "DVDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPVDD: "passive", CAPP: "passive", CPGND: "power_in", CAPM: "passive", VNEG: "passive", OUTL: "output", OUTR: "output", AVDD: "power_in", AGND: "power_in", DEMP: "input", FLT: "input", SCK: "input", BCK: "input", DIN: "input", LRCK: "input", FMT: "input", XSMT: "input", LDOO: "passive", DGND: "power_in", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM5101A extends Component.withPins({
  "CPVDD": "1",
  "CAPP": "2",
  "CPGND": "3",
  "CAPM": "4",
  "VNEG": "5",
  "OUTL": "6",
  "OUTR": "7",
  "AVDD": "8",
  "AGND": "9",
  "DEMP": "10",
  "FLT": "11",
  "SCK": "12",
  "BCK": "13",
  "DIN": "14",
  "LRCK": "15",
  "FMT": "16",
  "XSMT": "17",
  "LDOO": "18",
  "DGND": "19",
  "DVDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPVDD: "passive", CAPP: "passive", CPGND: "power_in", CAPM: "passive", VNEG: "passive", OUTL: "output", OUTR: "output", AVDD: "power_in", AGND: "power_in", DEMP: "input", FLT: "input", SCK: "input", BCK: "input", DIN: "input", LRCK: "input", FMT: "input", XSMT: "input", LDOO: "passive", DGND: "power_in", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM5102 extends Component.withPins({
  "CPVDD": "1",
  "CAPP": "2",
  "CPGND": "3",
  "CAPM": "4",
  "VNEG": "5",
  "OUTL": "6",
  "OUTR": "7",
  "AVDD": "8",
  "AGND": "9",
  "DEMP": "10",
  "FLT": "11",
  "SCK": "12",
  "BCK": "13",
  "DIN": "14",
  "LRCK": "15",
  "FMT": "16",
  "XSMT": "17",
  "LDOO": "18",
  "DGND": "19",
  "DVDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPVDD: "passive", CAPP: "passive", CPGND: "power_in", CAPM: "passive", VNEG: "passive", OUTL: "output", OUTR: "output", AVDD: "power_in", AGND: "power_in", DEMP: "input", FLT: "input", SCK: "input", BCK: "input", DIN: "input", LRCK: "input", FMT: "input", XSMT: "input", LDOO: "passive", DGND: "power_in", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM5102A extends Component.withPins({
  "CPVDD": "1",
  "CAPP": "2",
  "CPGND": "3",
  "CAPM": "4",
  "VNEG": "5",
  "OUTL": "6",
  "OUTR": "7",
  "AVDD": "8",
  "AGND": "9",
  "DEMP": "10",
  "FLT": "11",
  "SCK": "12",
  "BCK": "13",
  "DIN": "14",
  "LRCK": "15",
  "FMT": "16",
  "XSMT": "17",
  "LDOO": "18",
  "DGND": "19",
  "DVDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPVDD: "passive", CAPP: "passive", CPGND: "power_in", CAPM: "passive", VNEG: "passive", OUTL: "output", OUTR: "output", AVDD: "power_in", AGND: "power_in", DEMP: "input", FLT: "input", SCK: "input", BCK: "input", DIN: "input", LRCK: "input", FMT: "input", XSMT: "input", LDOO: "passive", DGND: "power_in", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM5122PW extends Component.withPins({
  "CPVDD": "1",
  "CAPP": "2",
  "CPGND": "3",
  "CAPM": "4",
  "VNEG": "5",
  "OUTL": "6",
  "OUTR": "7",
  "AVDD": "8",
  "AGND": "9",
  "VCOM/DEMP": "10",
  "SDA/MOSI/ATT2": "11",
  "SCL/MC/ATT1": "12",
  "GPIO5/ATT0": "13",
  "GPIO4/MAST": "14",
  "GPIO3/AGNS": "15",
  "ADR2/GPIO2/DOUT": "16",
  "MODE1": "17",
  "MODE2/MS": "18",
  "GPIO6/FLT": "19",
  "SCK": "20",
  "BCK": "21",
  "DIN": "22",
  "LRCK": "23",
  "ADR1/MISO/FMT": "24",
  "XSMT": "25",
  "LDOO": "26",
  "DGND": "27",
  "DVDD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPVDD: "power_in", CAPP: "passive", CPGND: "power_in", CAPM: "passive", VNEG: "passive", OUTL: "output", OUTR: "output", AVDD: "power_in", AGND: "power_in", "VCOM/DEMP": "bidirectional", "SDA/MOSI/ATT2": "bidirectional", "SCL/MC/ATT1": "input", "GPIO5/ATT0": "bidirectional", "GPIO4/MAST": "bidirectional", "GPIO3/AGNS": "bidirectional", "ADR2/GPIO2/DOUT": "bidirectional", MODE1: "input", "MODE2/MS": "input", "GPIO6/FLT": "bidirectional", SCK: "input", BCK: "bidirectional", DIN: "input", LRCK: "bidirectional", "ADR1/MISO/FMT": "bidirectional", XSMT: "input", LDOO: "passive", DGND: "power_in", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCM5121PW extends Component.withPins({
  "CPVDD": "1",
  "CAPP": "2",
  "CPGND": "3",
  "CAPM": "4",
  "VNEG": "5",
  "OUTL": "6",
  "OUTR": "7",
  "AVDD": "8",
  "AGND": "9",
  "VCOM/DEMP": "10",
  "SDA/MOSI/ATT2": "11",
  "SCL/MC/ATT1": "12",
  "GPIO5/ATT0": "13",
  "GPIO4/MAST": "14",
  "GPIO3/AGNS": "15",
  "ADR2/GPIO2/DOUT": "16",
  "MODE1": "17",
  "MODE2/MS": "18",
  "GPIO6/FLT": "19",
  "SCK": "20",
  "BCK": "21",
  "DIN": "22",
  "LRCK": "23",
  "ADR1/MISO/FMT": "24",
  "XSMT": "25",
  "LDOO": "26",
  "DGND": "27",
  "DVDD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPVDD: "power_in", CAPP: "passive", CPGND: "power_in", CAPM: "passive", VNEG: "passive", OUTL: "output", OUTR: "output", AVDD: "power_in", AGND: "power_in", "VCOM/DEMP": "bidirectional", "SDA/MOSI/ATT2": "bidirectional", "SCL/MC/ATT1": "input", "GPIO5/ATT0": "bidirectional", "GPIO4/MAST": "bidirectional", "GPIO3/AGNS": "bidirectional", "ADR2/GPIO2/DOUT": "bidirectional", MODE1: "input", "MODE2/MS": "input", "GPIO6/FLT": "bidirectional", SCK: "input", BCK: "bidirectional", DIN: "input", LRCK: "bidirectional", "ADR1/MISO/FMT": "bidirectional", XSMT: "input", LDOO: "passive", DGND: "power_in", DVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PGA2310UA extends Component.withPins({
  "~{MUTE}": "8",
  "ZCEN": "1",
  "~{CS}": "2",
  "SDI": "3",
  "V_{D}+": "4",
  "DGND": "5",
  "SCLK": "6",
  "SDO": "7",
  "V_{IN}R": "9",
  "AGNDR": "10",
  "V_{OUT}R": "11",
  "V_{A}+": "12",
  "V_{A}-": "13",
  "V_{OUT}L": "14",
  "AGNDL": "15",
  "V_{IN}L": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MUTE}": "input", ZCEN: "input", "~{CS}": "input", SDI: "input", "V_{D}+": "power_in", DGND: "power_in", SCLK: "input", SDO: "output", "V_{IN}R": "input", AGNDR: "power_in", "V_{OUT}R": "output", "V_{A}+": "power_in", "V_{A}-": "power_in", "V_{OUT}L": "output", AGNDL: "power_in", "V_{IN}L": "input", ...opts.pinTypes } });
  }
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
 */
export class PGA2310PA extends Component.withPins({
  "~{MUTE}": "8",
  "ZCEN": "1",
  "~{CS}": "2",
  "SDI": "3",
  "V_{D}+": "4",
  "DGND": "5",
  "SCLK": "6",
  "SDO": "7",
  "V_{IN}R": "9",
  "AGNDR": "10",
  "V_{OUT}R": "11",
  "V_{A}+": "12",
  "V_{A}-": "13",
  "V_{OUT}L": "14",
  "AGNDL": "15",
  "V_{IN}L": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MUTE}": "input", ZCEN: "input", "~{CS}": "input", SDI: "input", "V_{D}+": "power_in", DGND: "power_in", SCLK: "input", SDO: "output", "V_{IN}R": "input", AGNDR: "power_in", "V_{OUT}R": "output", "V_{A}+": "power_in", "V_{A}-": "power_in", "V_{OUT}L": "output", AGNDL: "power_in", "V_{IN}L": "input", ...opts.pinTypes } });
  }
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
 */
export class PGA2500 extends Component.withPins({
  "GPO1": "1",
  "GPO2": "2",
  "GPO3": "3",
  "GPO4": "4",
  "OVR": "5",
  "DGND": "6",
  "~{DCEN}": "7",
  "0dB": "8",
  "ZCEN": "9",
  "SDI": "10",
  "~{CS}": "11",
  "SCLK": "12",
  "SDO": "13",
  "VD-": "14",
  "VA-_15": "15",
  "V_{OUT}-": "16",
  "V_{OUT}+": "17",
  "VA+_18": "18",
  "VA+_19": "19",
  "VA-_20": "20",
  "C_{S22}": "21",
  "C_{S21}": "22",
  "C_{S12}": "23",
  "C_{S11}": "24",
  "VIN_{COM}": "25",
  "V_{IN}-": "26",
  "V_{IN}+": "27",
  "AGND": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPO1: "output", GPO2: "output", GPO3: "output", GPO4: "output", OVR: "output", DGND: "power_in", "~{DCEN}": "input", "0dB": "input", ZCEN: "input", SDI: "input", "~{CS}": "input", SCLK: "input", SDO: "output", "VD-": "power_in", "VA-_15": "power_in", "V_{OUT}-": "output", "V_{OUT}+": "output", "VA+_18": "power_in", "VA+_19": "power_in", "VA-_20": "power_in", "C_{S22}": "output", "C_{S21}": "output", "C_{S12}": "output", "C_{S11}": "output", "VIN_{COM}": "power_in", "V_{IN}-": "input", "V_{IN}+": "input", AGND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PGA4311 extends Component.withPins({
  "~{MUTE}": "1",
  "AGND_1_2": "2",
  "Ain-1": "3",
  "AGND_1_4": "4",
  "Aout_1": "5",
  "VA-_6": "6",
  "VA+_7": "7",
  "Aout_3": "8",
  "AGND_3_9": "9",
  "Ain-3": "10",
  "AGND_3_11": "11",
  "VD+": "12",
  "SDI": "13",
  "~{CS}": "14",
  "SCLK": "15",
  "SDO": "16",
  "DGND": "17",
  "AGND_4_18": "18",
  "Ain-4": "19",
  "AGND_4_20": "20",
  "Aout_4": "21",
  "VA+_22": "22",
  "VA-_23": "23",
  "Aout_2": "24",
  "AGND_2_25": "25",
  "Ain-2": "26",
  "AGND_2_27": "27",
  "ZCEN": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MUTE}": "input", AGND_1_2: "power_in", "Ain-1": "input", AGND_1_4: "passive", Aout_1: "output", "VA-_6": "power_in", "VA+_7": "power_in", Aout_3: "output", AGND_3_9: "power_in", "Ain-3": "input", AGND_3_11: "passive", "VD+": "power_in", SDI: "input", "~{CS}": "input", SCLK: "input", SDO: "output", DGND: "power_in", AGND_4_18: "power_in", "Ain-4": "input", AGND_4_20: "passive", Aout_4: "output", "VA+_22": "passive", "VA-_23": "passive", Aout_2: "output", AGND_2_25: "power_in", "Ain-2": "input", AGND_2_27: "passive", ZCEN: "input", ...opts.pinTypes } });
  }
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
 */
export class PT2258 extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "CODE2": "4",
  "DGND": "5",
  "SCL": "6",
  "SDA": "7",
  "IN4": "8",
  "IN5": "9",
  "IN6": "10",
  "OUT6": "11",
  "OUT5": "12",
  "OUT4": "13",
  "GND": "14",
  "REF": "15",
  "VCC": "16",
  "CODE1": "17",
  "OUT3": "18",
  "OUT2": "19",
  "OUT1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN2: "input", IN3: "input", CODE2: "input", DGND: "power_in", SCL: "bidirectional", SDA: "bidirectional", IN4: "input", IN5: "input", IN6: "input", OUT6: "output", OUT5: "output", OUT4: "output", GND: "power_in", REF: "output", VCC: "power_in", CODE1: "input", OUT3: "output", OUT2: "output", OUT1: "output", ...opts.pinTypes } });
  }
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
 */
export class PT2258_S extends Component.withPins({
  "IN1": "1",
  "IN2": "2",
  "IN3": "3",
  "CODE2": "4",
  "DGND": "5",
  "SCL": "6",
  "SDA": "7",
  "IN4": "8",
  "IN5": "9",
  "IN6": "10",
  "OUT6": "11",
  "OUT5": "12",
  "OUT4": "13",
  "GND": "14",
  "REF": "15",
  "VCC": "16",
  "CODE1": "17",
  "OUT3": "18",
  "OUT2": "19",
  "OUT1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN2: "input", IN3: "input", CODE2: "input", DGND: "power_in", SCL: "bidirectional", SDA: "bidirectional", IN4: "input", IN5: "input", IN6: "input", OUT6: "output", OUT5: "output", OUT4: "output", GND: "power_in", REF: "output", VCC: "power_in", CODE1: "input", OUT3: "output", OUT2: "output", OUT1: "output", ...opts.pinTypes } });
  }
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
 */
export class PT2399 extends Component.withPins({
  "VCC": "1",
  "REF": "2",
  "AGND": "3",
  "DGND": "4",
  "CLK_O": "5",
  "VCO": "6",
  "CC1": "7",
  "CC0": "8",
  "OP1-OUT": "9",
  "OP1-IN": "10",
  "OP2-IN": "11",
  "OP2-OUT": "12",
  "LPF2-IN": "13",
  "LPF2-OUT": "14",
  "LPF1-OUT": "15",
  "LPF1-IN": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", REF: "passive", AGND: "power_in", DGND: "power_in", CLK_O: "passive", VCO: "passive", CC1: "passive", CC0: "passive", "OP1-OUT": "output", "OP1-IN": "input", "OP2-IN": "input", "OP2-OUT": "output", "LPF2-IN": "input", "LPF2-OUT": "output", "LPF1-OUT": "output", "LPF1-IN": "input", ...opts.pinTypes } });
  }
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
 */
export class RD5106A extends Component.withPins({
  "Clock": "1",
  "VSS": "2",
  "NC": "3",
  "Output": "4",
  "VBB": "5",
  "Input": "6",
  "Sync": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Clock: "input", VSS: "power_in", NC: "no_connect", Output: "output", VBB: "power_in", Input: "input", Sync: "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class RD5107A extends Component.withPins({
  "Clock": "1",
  "VSS": "2",
  "NC": "3",
  "Output": "4",
  "VBB": "5",
  "Input": "6",
  "Sync": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Clock: "input", VSS: "power_in", NC: "no_connect", Output: "output", VBB: "power_in", Input: "input", Sync: "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class RE46C317 extends Component.withPins({
  "FEED": "1",
  "V_{DD}": "2",
  "LX": "3",
  "V_{SS}": "4",
  "V_{O}": "5",
  "HORNB": "6",
  "HORNS": "7",
  "HRNEN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FEED: "input", "V_{DD}": "power_in", LX: "input", "V_{SS}": "power_in", "V_{O}": "input", HORNB: "output", HORNS: "output", HRNEN: "input", ...opts.pinTypes } });
  }
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
 */
export class RE46C318 extends Component.withPins({
  "FEED": "1",
  "V_{DD}": "2",
  "LX": "3",
  "V_{SS}": "4",
  "V_{O}": "5",
  "HORNB": "6",
  "HORNS": "7",
  "HRNEN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FEED: "input", "V_{DD}": "power_in", LX: "input", "V_{SS}": "power_in", "V_{O}": "input", HORNB: "output", HORNS: "output", HRNEN: "input", ...opts.pinTypes } });
  }
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
 */
export class SAD1024 extends Component.withPins({
  "GND": "1",
  "NC_4": "4",
  "Vdd": "7",
  "Vbb": "9",
  "NC_13": "13",
  "NC_16": "16",
  "IN_A": "2",
  "02A": "3",
  "OUT_A": "5",
  "OUT_A'": "6",
  "01A": "8",
  "01B": "10",
  "OUT_B'": "11",
  "OUT_B": "12",
  "02B": "14",
  "IN_B": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", NC_4: "no_connect", Vdd: "power_in", Vbb: "power_in", NC_13: "no_connect", NC_16: "no_connect", IN_A: "input", "02A": "input", OUT_A: "output", "OUT_A'": "output", "01A": "input", "01B": "input", "OUT_B'": "output", OUT_B: "output", "02B": "input", IN_B: "input", ...opts.pinTypes } });
  }
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
 */
export class SAD512 extends Component.withPins({
  "GND": "1",
  "NC_4": "4",
  "Vdd": "7",
  "Vbb": "9",
  "NC_13": "13",
  "NC_16": "16",
  "IN_A": "2",
  "02A": "3",
  "OUT_A": "5",
  "OUT_A'": "6",
  "01A": "8",
  "01B": "10",
  "OUT_B'": "11",
  "OUT_B": "12",
  "02B": "14",
  "IN_B": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", NC_4: "no_connect", Vdd: "power_in", Vbb: "power_in", NC_13: "no_connect", NC_16: "no_connect", IN_A: "input", "02A": "input", OUT_A: "output", "OUT_A'": "output", "01A": "input", "01B": "input", "OUT_B'": "output", OUT_B: "output", "02B": "input", IN_B: "input", ...opts.pinTypes } });
  }
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
 */
export class SGTL5000XNAA3 extends Component.withPins({
  "GND_1": "1",
  "HP_R": "2",
  "GND_3": "3",
  "HP_VGND": "4",
  "VDDA": "5",
  "HP_L": "6",
  "AGND": "7",
  "NC_8": "8",
  "NC_9": "9",
  "VAG": "10",
  "LINEOUT_R": "11",
  "LINEOUT_L": "12",
  "LINEIN_R": "13",
  "LINEIN_L": "14",
  "MIC": "15",
  "MIC_BIAS": "16",
  "NC_17": "17",
  "CPFILT": "18",
  "NC_19": "19",
  "VDDIO": "20",
  "SYS_MCLK": "21",
  "NC_22": "22",
  "I2S_LRCLK": "23",
  "I2S_SCLK": "24",
  "I2S_DOUT": "25",
  "I2S_DIN": "26",
  "CTRL_DATA": "27",
  "NC_28": "28",
  "CTRL_CLK": "29",
  "VDDD": "30",
  "CTRL_ADR0_CS": "31",
  "CTRL_MODE": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", HP_R: "output", GND_3: "passive", HP_VGND: "power_out", VDDA: "power_in", HP_L: "output", AGND: "power_in", NC_8: "no_connect", NC_9: "no_connect", VAG: "passive", LINEOUT_R: "output", LINEOUT_L: "output", LINEIN_R: "input", LINEIN_L: "input", MIC: "input", MIC_BIAS: "input", NC_17: "no_connect", CPFILT: "input", NC_19: "no_connect", VDDIO: "power_in", SYS_MCLK: "input", NC_22: "no_connect", I2S_LRCLK: "input", I2S_SCLK: "input", I2S_DOUT: "output", I2S_DIN: "input", CTRL_DATA: "input", NC_28: "no_connect", CTRL_CLK: "input", VDDD: "power_in", CTRL_ADR0_CS: "input", CTRL_MODE: "input", GND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class SGTL5000XNLA3 extends Component.withPins({
  "HP_R": "1",
  "HP_VGND": "2",
  "VDDA": "3",
  "HP_L": "4",
  "VAG": "5",
  "LINEOUT_R": "6",
  "LINEOUT_L": "7",
  "LINEIN_R": "8",
  "LINEIN_L": "9",
  "MIC": "10",
  "MIC_BIAS": "11",
  "VDDIO": "12",
  "SYS_MCLK": "13",
  "I2S_LRCLK": "14",
  "I2S_SCLK": "15",
  "I2S_DOUT": "16",
  "I2S_DIN": "17",
  "CTRL_DATA": "18",
  "CTRL_CLK": "19",
  "VDDD": "20",
  "GND": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HP_R: "output", HP_VGND: "power_out", VDDA: "power_in", HP_L: "output", VAG: "passive", LINEOUT_R: "output", LINEOUT_L: "output", LINEIN_R: "input", LINEIN_L: "input", MIC: "input", MIC_BIAS: "input", VDDIO: "power_in", SYS_MCLK: "input", I2S_LRCLK: "input", I2S_SCLK: "input", I2S_DOUT: "output", I2S_DIN: "input", CTRL_DATA: "input", CTRL_CLK: "input", VDDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN76489AN extends Component.withPins({
  "D2": "1",
  "D1": "2",
  "D0": "3",
  "READY": "4",
  "~{WE}": "5",
  "~{CE}": "6",
  "AUDIO_OUT": "7",
  "GND": "8",
  "NC": "9",
  "D7": "10",
  "D6": "11",
  "D5": "12",
  "D4": "13",
  "CLOCK": "14",
  "D3": "15",
  "V_{CC}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D2: "input", D1: "input", D0: "input", READY: "open_collector", "~{WE}": "input", "~{CE}": "input", AUDIO_OUT: "output", GND: "power_in", NC: "no_connect", D7: "input", D6: "input", D5: "input", D4: "input", CLOCK: "input", D3: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class SN76494AN extends Component.withPins({
  "D2": "1",
  "D1": "2",
  "D0": "3",
  "READY": "4",
  "~{WE}": "5",
  "~{CE}": "6",
  "AUDIO_OUT": "7",
  "GND": "8",
  "AUDIO_IN": "9",
  "D7": "10",
  "D6": "11",
  "D5": "12",
  "D4": "13",
  "CLOCK": "14",
  "D3": "15",
  "V_{CC}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D2: "input", D1: "input", D0: "input", READY: "open_collector", "~{WE}": "input", "~{CE}": "input", AUDIO_OUT: "output", GND: "power_in", AUDIO_IN: "input", D7: "input", D6: "input", D5: "input", D4: "input", CLOCK: "input", D3: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class SPN1001 extends Component.withPins({
  "LIN": "1",
  "RIN": "2",
  "MID": "3",
  "GND_4": "4",
  "CLIP": "5",
  "AVDD": "6",
  "GND_7": "7",
  "DVDD_8": "8",
  "X2": "9",
  "X1": "10",
  "GND_11": "11",
  "T1": "12",
  "T0": "13",
  "SCK": "14",
  "SDA": "15",
  "S0": "16",
  "S1": "17",
  "S2": "18",
  "GND_19": "19",
  "POT0": "20",
  "POT1": "21",
  "POT2": "22",
  "DVDD_23": "23",
  "GND_24": "24",
  "REFN": "25",
  "REFP": "26",
  "ROUT": "27",
  "LOUT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LIN: "input", RIN: "input", MID: "power_out", GND_4: "power_in", CLIP: "power_out", AVDD: "power_in", GND_7: "passive", DVDD_8: "power_in", X2: "input", X1: "input", GND_11: "passive", T1: "input", T0: "input", SCK: "bidirectional", SDA: "bidirectional", S0: "input", S1: "input", S2: "input", GND_19: "passive", POT0: "input", POT1: "input", POT2: "input", DVDD_23: "passive", GND_24: "passive", REFN: "input", REFP: "input", ROUT: "output", LOUT: "output", ...opts.pinTypes } });
  }
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
 */
export class SRC4392xPFB extends Component.withPins({
  "RX1+": "1",
  "RX1-": "2",
  "RX2+": "3",
  "RX2-": "4",
  "RX3+": "5",
  "RX3-": "6",
  "RX4+": "7",
  "RX4-": "8",
  "VCC": "9",
  "AGND": "10",
  "~{LOCK}": "11",
  "RXCKO": "12",
  "RXCKI": "13",
  "MUTE": "14",
  "~{RDY}": "15",
  "DGND1": "16",
  "VDD18": "17",
  "CPM": "18",
  "~{CS}/A0": "19",
  "CCLK/SCL": "20",
  "CDIN/A1": "21",
  "CDOUT/SDA": "22",
  "~{INT}": "23",
  "~{RST}": "24",
  "MCLK": "25",
  "GPO1": "26",
  "GPO2": "27",
  "GPO3": "28",
  "GPO4": "29",
  "DGND2": "30",
  "TX-": "31",
  "TX+": "32",
  "VDD33": "33",
  "AESOUT": "34",
  "BLS": "35",
  "SYNC": "36",
  "BCKA": "37",
  "LRCKA": "38",
  "SDINA": "39",
  "SDOUTA": "40",
  "NC": "41",
  "VIO": "42",
  "DGND3": "43",
  "BGND": "44",
  "SDOUTB": "45",
  "SDINB": "46",
  "LRCKB": "47",
  "BCKB": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RX1+": "input", "RX1-": "input", "RX2+": "input", "RX2-": "input", "RX3+": "input", "RX3-": "input", "RX4+": "input", "RX4-": "input", VCC: "power_in", AGND: "power_in", "~{LOCK}": "output", RXCKO: "output", RXCKI: "input", MUTE: "input", "~{RDY}": "output", DGND1: "power_in", VDD18: "power_in", CPM: "input", "~{CS}/A0": "input", "CCLK/SCL": "input", "CDIN/A1": "input", "CDOUT/SDA": "bidirectional", "~{INT}": "open_collector", "~{RST}": "input", MCLK: "input", GPO1: "output", GPO2: "output", GPO3: "output", GPO4: "output", DGND2: "power_in", "TX-": "output", "TX+": "output", VDD33: "power_in", AESOUT: "output", BLS: "bidirectional", SYNC: "output", BCKA: "bidirectional", LRCKA: "bidirectional", SDINA: "input", SDOUTA: "output", NC: "no_connect", VIO: "power_in", DGND3: "power_in", BGND: "power_in", SDOUTB: "output", SDINB: "input", LRCKB: "bidirectional", BCKB: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class SSI2144 extends Component.withPins({
  "SIG_IN+": "1",
  "SIG_IN-": "2",
  "OUT": "3",
  "C4A": "4",
  "C4B": "5",
  "C3A": "6",
  "C3B": "7",
  "V-": "8",
  "GND": "9",
  "C2B": "10",
  "C2A": "11",
  "C1B": "12",
  "C1A": "13",
  "Q_CTRL": "14",
  "FREQ_CTRL": "15",
  "V+": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SIG_IN+": "input", "SIG_IN-": "input", OUT: "output", C4A: "passive", C4B: "passive", C3A: "passive", C3B: "passive", "V-": "power_in", GND: "power_in", C2B: "passive", C2A: "passive", C1B: "passive", C1A: "passive", Q_CTRL: "passive", FREQ_CTRL: "passive", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class SSI2164 extends Component.withPins({
  "MODE": "1",
  "I_IN1": "2",
  "VC1": "3",
  "I_OUT1": "4",
  "I_OUT2": "5",
  "VC2": "6",
  "I_IN2": "7",
  "GND": "8",
  "V-": "9",
  "I_IN3": "10",
  "VC3": "11",
  "I_OUT3": "12",
  "I_OUT4": "13",
  "VC4": "14",
  "I_IN4": "15",
  "V+": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MODE: "passive", I_IN1: "input", VC1: "passive", I_OUT1: "output", I_OUT2: "output", VC2: "passive", I_IN2: "input", GND: "power_in", "V-": "power_in", I_IN3: "input", VC3: "passive", I_OUT3: "output", I_OUT4: "output", VC4: "passive", I_IN4: "input", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class TDA1022 extends Component.withPins({
  "CL1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "CL2": "4",
  "Input": "5",
  "NC_6": "6",
  "NC_7": "7",
  "Output513": "8",
  "VDD": "9",
  "NC_10": "10",
  "NC_11": "11",
  "Output512": "12",
  "V13-16": "13",
  "NC_14": "14",
  "NC_15": "15",
  "GND": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CL1: "input", NC_2: "no_connect", NC_3: "no_connect", CL2: "input", Input: "input", NC_6: "no_connect", NC_7: "no_connect", Output513: "output", VDD: "power_in", NC_10: "no_connect", NC_11: "no_connect", Output512: "output", "V13-16": "power_in", NC_14: "no_connect", NC_15: "no_connect", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class THAT1580 extends Component.withPins({
  "1": "3",
  "P2": "2",
  "Rg1": "6",
  "IN1": "7",
  "IN2": "10",
  "V-_12": "12",
  "V+": "13",
  "Rg2": "15",
  "V-_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "1": "output", P2: "output", Rg1: "passive", IN1: "input", IN2: "input", "V-_12": "power_in", "V+": "power_in", Rg2: "passive", "V-_17": "passive", ...opts.pinTypes } });
  }
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
 */
export class THAT1583 extends Component.withPins({
  "1": "3",
  "P2": "2",
  "Rg1": "6",
  "IN1": "7",
  "IN2": "10",
  "V-_12": "12",
  "V+": "13",
  "Rg2": "15",
  "V-_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "1": "output", P2: "output", Rg1: "passive", IN1: "input", IN2: "input", "V-_12": "power_in", "V+": "power_in", Rg2: "passive", "V-_17": "passive", ...opts.pinTypes } });
  }
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
 */
export class THAT5171 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "Rg1": "3",
  "IN1": "4",
  "IN2": "5",
  "Rg2": "6",
  "NC_7": "7",
  "NC_8": "8",
  "VCC": "9",
  "AGND_10": "10",
  "VEE": "11",
  "NC_27": "27",
  "AGND_28": "28",
  "SCAP1": "29",
  "SCAP2": "30",
  "SOUT1": "31",
  "SOUT2": "32",
  "PAD": "33",
  "DGND_12": "12",
  "VDD_13": "13",
  "TRC": "14",
  "~{RST}": "15",
  "~{CS}": "16",
  "SCLK": "17",
  "DIN": "18",
  "DOUT": "19",
  "DGND_20": "20",
  "VDD_21": "21",
  "BSY": "22",
  "GPO0": "23",
  "GPO1": "24",
  "GPO2": "25",
  "GPO3": "26",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", Rg1: "passive", IN1: "input", IN2: "input", Rg2: "passive", NC_7: "no_connect", NC_8: "no_connect", VCC: "power_in", AGND_10: "power_in", VEE: "power_in", NC_27: "no_connect", AGND_28: "passive", SCAP1: "passive", SCAP2: "passive", SOUT1: "output", SOUT2: "output", PAD: "passive", DGND_12: "power_in", VDD_13: "power_in", TRC: "passive", "~{RST}": "input", "~{CS}": "input", SCLK: "input", DIN: "input", DOUT: "tri_state", DGND_20: "passive", VDD_21: "passive", BSY: "output", GPO0: "bidirectional", GPO1: "bidirectional", GPO2: "bidirectional", GPO3: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class THAT5173 extends Component.withPins({
  "SCAP2": "1",
  "Rg1": "2",
  "IN1": "3",
  "IN2": "4",
  "Rg2": "5",
  "VEE": "19",
  "VCC": "20",
  "AGND": "21",
  "SOUT1": "22",
  "SOUT2": "23",
  "SCAP1": "24",
  "PAD": "25",
  "~{RST}": "6",
  "~{CS}": "7",
  "SCLK": "8",
  "DIN": "9",
  "TRC": "10",
  "VDD": "11",
  "DGND": "12",
  "DOUT": "13",
  "BSY": "14",
  "GPO0": "15",
  "GPO1": "16",
  "GPO2": "17",
  "GPO3": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCAP2: "passive", Rg1: "passive", IN1: "input", IN2: "input", Rg2: "passive", VEE: "power_in", VCC: "power_in", AGND: "power_in", SOUT1: "output", SOUT2: "output", SCAP1: "passive", PAD: "passive", "~{RST}": "input", "~{CS}": "input", SCLK: "input", DIN: "input", TRC: "passive", VDD: "power_in", DGND: "power_in", DOUT: "tri_state", BSY: "output", GPO0: "output", GPO1: "output", GPO2: "output", GPO3: "output", ...opts.pinTypes } });
  }
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
 */
export class THAT5263 extends Component.withPins({
  "V-": "3",
  "V+": "4",
  "IN1_CH1": "5",
  "RA_CH1": "6",
  "RG1_CH1": "7",
  "RG2_CH1": "8",
  "RB_CH1": "9",
  "IN2_CH1": "10",
  "PAD": "25",
  "~{CS}": "11",
  "SCLK": "12",
  "DIN": "13",
  "DOUT": "14",
  "VDD": "15",
  "DGND": "16",
  "BSY_CH1": "17",
  "BSY_CH2": "18",
  "GPO_CH1": "19",
  "GPO_CH2": "20",
  "RB_CH2": "1",
  "IN2_CH2": "2",
  "IN1_CH2": "21",
  "RA_CH2": "22",
  "RG1_CH2": "23",
  "RG2_CH2": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", IN1_CH1: "input", RA_CH1: "passive", RG1_CH1: "passive", RG2_CH1: "passive", RB_CH1: "passive", IN2_CH1: "input", PAD: "passive", "~{CS}": "input", SCLK: "input", DIN: "input", DOUT: "tri_state", VDD: "power_in", DGND: "power_in", BSY_CH1: "output", BSY_CH2: "output", GPO_CH1: "output", GPO_CH2: "output", RB_CH2: "passive", IN2_CH2: "input", IN1_CH2: "input", RA_CH2: "passive", RG1_CH2: "passive", RG2_CH2: "passive", ...opts.pinTypes } });
  }
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
 */
export class THAT6261 extends Component.withPins({
  "RFB+_CH1": "1",
  "CFB-_CH1": "2",
  "CFB+_CH1": "3",
  "VA+_4": "4",
  "DI+_CH1": "5",
  "DI-_CH1": "6",
  "PO+_CH1": "7",
  "PO-_CH1": "8",
  "VA-_9": "9",
  "VA+_10": "10",
  "CG2_CH1": "11",
  "CG1_CH1": "12",
  "IN-_CH1": "13",
  "IN+_CH1": "14",
  "VA-_15": "15",
  "VA-_20": "20",
  "AGND": "43",
  "VCM": "44",
  "VAD": "45",
  "OUT-_CH1": "46",
  "OUT+_CH1": "47",
  "RFB-_CH1": "48",
  "PAD": "49",
  "GPO0_CH1": "25",
  "GPO1_CH1": "26",
  "BSY_CH1": "27",
  "DGND": "28",
  "VD": "29",
  "~{CS}": "30",
  "SCLK": "31",
  "DIN": "32",
  "DOUT": "33",
  "BSY_CH2": "34",
  "GPO_CH2": "35",
  "GP1_CH2": "36",
  "CG2_CH2": "16",
  "CG1_CH2": "17",
  "IN-_CH2": "18",
  "IN+_CH2": "19",
  "PO+_CH2": "21",
  "PO-_CH2": "22",
  "DI+_CH2": "23",
  "DI-_CH2": "24",
  "CFB+_CH2": "37",
  "CFB-_CH2": "38",
  "RFB+_CH2": "39",
  "RFB-_CH2": "40",
  "OUT+_CH2": "41",
  "OUT-_CH2": "42",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RFB+_CH1": "passive", "CFB-_CH1": "passive", "CFB+_CH1": "passive", "VA+_4": "power_in", "DI+_CH1": "input", "DI-_CH1": "input", "PO+_CH1": "output", "PO-_CH1": "output", "VA-_9": "power_in", "VA+_10": "passive", CG2_CH1: "passive", CG1_CH1: "passive", "IN-_CH1": "input", "IN+_CH1": "input", "VA-_15": "passive", "VA-_20": "passive", AGND: "power_in", VCM: "power_in", VAD: "power_in", "OUT-_CH1": "output", "OUT+_CH1": "output", "RFB-_CH1": "passive", PAD: "passive", GPO0_CH1: "output", GPO1_CH1: "output", BSY_CH1: "output", DGND: "power_in", VD: "power_in", "~{CS}": "input", SCLK: "input", DIN: "input", DOUT: "tri_state", BSY_CH2: "output", GPO_CH2: "output", GP1_CH2: "output", CG2_CH2: "passive", CG1_CH2: "passive", "IN-_CH2": "input", "IN+_CH2": "input", "PO+_CH2": "output", "PO-_CH2": "output", "DI+_CH2": "input", "DI-_CH2": "input", "CFB+_CH2": "passive", "CFB-_CH2": "passive", "RFB+_CH2": "passive", "RFB-_CH2": "passive", "OUT+_CH2": "output", "OUT-_CH2": "output", ...opts.pinTypes } });
  }
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
 */
export class THAT6262 extends Component.withPins({
  "RFB+_CH1": "1",
  "CFB-_CH1": "2",
  "CFB+_CH1": "3",
  "VA+_4": "4",
  "DI+_CH1": "5",
  "DI-_CH1": "6",
  "PO+_CH1": "7",
  "PO-_CH1": "8",
  "VA-_9": "9",
  "VA+_10": "10",
  "CG2_CH1": "11",
  "CG1_CH1": "12",
  "IN-_CH1": "13",
  "IN+_CH1": "14",
  "VA-_15": "15",
  "VA-_20": "20",
  "AGND": "43",
  "VCM": "44",
  "VAD": "45",
  "OUT-_CH1": "46",
  "OUT+_CH1": "47",
  "RFB-_CH1": "48",
  "PAD": "49",
  "GPO0_CH1": "25",
  "GPO1_CH1": "26",
  "BSY_CH1": "27",
  "DGND": "28",
  "VD": "29",
  "~{CS}": "30",
  "SCLK": "31",
  "DIN": "32",
  "DOUT": "33",
  "BSY_CH2": "34",
  "GPO_CH2": "35",
  "GP1_CH2": "36",
  "CG2_CH2": "16",
  "CG1_CH2": "17",
  "IN-_CH2": "18",
  "IN+_CH2": "19",
  "PO+_CH2": "21",
  "PO-_CH2": "22",
  "DI+_CH2": "23",
  "DI-_CH2": "24",
  "CFB+_CH2": "37",
  "CFB-_CH2": "38",
  "RFB+_CH2": "39",
  "RFB-_CH2": "40",
  "OUT+_CH2": "41",
  "OUT-_CH2": "42",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RFB+_CH1": "passive", "CFB-_CH1": "passive", "CFB+_CH1": "passive", "VA+_4": "power_in", "DI+_CH1": "input", "DI-_CH1": "input", "PO+_CH1": "output", "PO-_CH1": "output", "VA-_9": "power_in", "VA+_10": "passive", CG2_CH1: "passive", CG1_CH1: "passive", "IN-_CH1": "input", "IN+_CH1": "input", "VA-_15": "passive", "VA-_20": "passive", AGND: "power_in", VCM: "power_in", VAD: "power_in", "OUT-_CH1": "output", "OUT+_CH1": "output", "RFB-_CH1": "passive", PAD: "passive", GPO0_CH1: "output", GPO1_CH1: "output", BSY_CH1: "output", DGND: "power_in", VD: "power_in", "~{CS}": "input", SCLK: "input", DIN: "input", DOUT: "tri_state", BSY_CH2: "output", GPO_CH2: "output", GP1_CH2: "output", CG2_CH2: "passive", CG1_CH2: "passive", "IN-_CH2": "input", "IN+_CH2": "input", "PO+_CH2": "output", "PO-_CH2": "output", "DI+_CH2": "input", "DI-_CH2": "input", "CFB+_CH2": "passive", "CFB-_CH2": "passive", "RFB+_CH2": "passive", "RFB-_CH2": "passive", "OUT+_CH2": "output", "OUT-_CH2": "output", ...opts.pinTypes } });
  }
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
 */
export class THAT6263 extends Component.withPins({
  "RFB+_CH1": "1",
  "CFB-_CH1": "2",
  "CFB+_CH1": "3",
  "VA+_4": "4",
  "DI+_CH1": "5",
  "DI-_CH1": "6",
  "PO+_CH1": "7",
  "PO-_CH1": "8",
  "VA-_9": "9",
  "VA+_10": "10",
  "CG2_CH1": "11",
  "CG1_CH1": "12",
  "IN-_CH1": "13",
  "IN+_CH1": "14",
  "VA-_15": "15",
  "VA-_20": "20",
  "AGND": "43",
  "VCM": "44",
  "VAD": "45",
  "OUT-_CH1": "46",
  "OUT+_CH1": "47",
  "RFB-_CH1": "48",
  "PAD": "49",
  "GPO0_CH1": "25",
  "GPO1_CH1": "26",
  "BSY_CH1": "27",
  "DGND": "28",
  "VD": "29",
  "~{CS}": "30",
  "SCLK": "31",
  "DIN": "32",
  "DOUT": "33",
  "BSY_CH2": "34",
  "GPO_CH2": "35",
  "GP1_CH2": "36",
  "CG2_CH2": "16",
  "CG1_CH2": "17",
  "IN-_CH2": "18",
  "IN+_CH2": "19",
  "PO+_CH2": "21",
  "PO-_CH2": "22",
  "DI+_CH2": "23",
  "DI-_CH2": "24",
  "CFB+_CH2": "37",
  "CFB-_CH2": "38",
  "RFB+_CH2": "39",
  "RFB-_CH2": "40",
  "OUT+_CH2": "41",
  "OUT-_CH2": "42",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RFB+_CH1": "passive", "CFB-_CH1": "passive", "CFB+_CH1": "passive", "VA+_4": "power_in", "DI+_CH1": "input", "DI-_CH1": "input", "PO+_CH1": "output", "PO-_CH1": "output", "VA-_9": "power_in", "VA+_10": "passive", CG2_CH1: "passive", CG1_CH1: "passive", "IN-_CH1": "input", "IN+_CH1": "input", "VA-_15": "passive", "VA-_20": "passive", AGND: "power_in", VCM: "power_in", VAD: "power_in", "OUT-_CH1": "output", "OUT+_CH1": "output", "RFB-_CH1": "passive", PAD: "passive", GPO0_CH1: "output", GPO1_CH1: "output", BSY_CH1: "output", DGND: "power_in", VD: "power_in", "~{CS}": "input", SCLK: "input", DIN: "input", DOUT: "tri_state", BSY_CH2: "output", GPO_CH2: "output", GP1_CH2: "output", CG2_CH2: "passive", CG1_CH2: "passive", "IN-_CH2": "input", "IN+_CH2": "input", "PO+_CH2": "output", "PO-_CH2": "output", "DI+_CH2": "input", "DI-_CH2": "input", "CFB+_CH2": "passive", "CFB-_CH2": "passive", "RFB+_CH2": "passive", "RFB-_CH2": "passive", "OUT+_CH2": "output", "OUT-_CH2": "output", ...opts.pinTypes } });
  }
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
 */
export class TLV320AIC23BPW extends Component.withPins({
  "BVDD": "1",
  "CLKOUT": "2",
  "BCLK": "3",
  "DIN": "4",
  "LRCIN": "5",
  "DOUT": "6",
  "LRCOUT": "7",
  "HPVDD": "8",
  "LHPOUT": "9",
  "RHPOUT": "10",
  "HPGND": "11",
  "LOUT": "12",
  "ROUT": "13",
  "AVDD": "14",
  "AGND": "15",
  "VMID": "16",
  "MICBIAS": "17",
  "MICIN": "18",
  "RLINEIN": "19",
  "LLINEIN": "20",
  "~{CS}": "21",
  "MODE": "22",
  "SDIN": "23",
  "SCLK": "24",
  "XTI/MCK": "25",
  "XTO": "26",
  "DVDD": "27",
  "DGND": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BVDD: "power_in", CLKOUT: "output", BCLK: "bidirectional", DIN: "input", LRCIN: "input", DOUT: "output", LRCOUT: "output", HPVDD: "power_in", LHPOUT: "passive", RHPOUT: "passive", HPGND: "power_in", LOUT: "passive", ROUT: "passive", AVDD: "power_in", AGND: "power_in", VMID: "passive", MICBIAS: "passive", MICIN: "passive", RLINEIN: "passive", LLINEIN: "passive", "~{CS}": "input", MODE: "input", SDIN: "input", SCLK: "input", "XTI/MCK": "passive", XTO: "passive", DVDD: "power_in", DGND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TLV320AIC23BRHD extends Component.withPins({
  "DIN": "1",
  "LRCIN": "2",
  "DOUT": "3",
  "LRCOUT": "4",
  "HPVDD": "5",
  "LHPOUT": "6",
  "RHPOUT": "7",
  "HPGND": "8",
  "LOUT": "9",
  "ROUT": "10",
  "AVDD": "11",
  "AGND_12": "12",
  "VMID": "13",
  "MICBIAS": "14",
  "MICIN": "15",
  "RLINEIN": "16",
  "LLINEIN": "17",
  "~{CS}": "18",
  "MODE": "19",
  "SDIN": "20",
  "SCLK": "21",
  "XTI/MCK": "22",
  "XTO": "23",
  "DVDD": "24",
  "DGND": "25",
  "BVDD": "26",
  "CLKOUT": "27",
  "BCLK": "28",
  "AGND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIN: "input", LRCIN: "input", DOUT: "output", LRCOUT: "output", HPVDD: "power_in", LHPOUT: "passive", RHPOUT: "passive", HPGND: "power_in", LOUT: "passive", ROUT: "passive", AVDD: "power_in", AGND_12: "power_in", VMID: "passive", MICBIAS: "passive", MICIN: "passive", RLINEIN: "passive", LLINEIN: "passive", "~{CS}": "input", MODE: "input", SDIN: "input", SCLK: "input", "XTI/MCK": "passive", XTO: "passive", DVDD: "power_in", DGND: "power_in", BVDD: "power_in", CLKOUT: "output", BCLK: "bidirectional", AGND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class TLV320AIC23BxQE extends Component.withPins({
  "NC_A1": "A1",
  "HPGND": "A2",
  "RHPOUT": "A3",
  "LHPOUT": "A4",
  "HPVDD": "A5",
  "LRCOUT": "A6",
  "DOUT": "A7",
  "LRCIN": "A8",
  "NC_A9": "A9",
  "LOUT": "B1",
  "NC_B2": "B2",
  "NC_B3": "B3",
  "NC_B4": "B4",
  "NC_B5": "B5",
  "NC_B6": "B6",
  "NC_B7": "B7",
  "NC_B8": "B8",
  "DIN": "B9",
  "ROUT": "C1",
  "NC_C2": "C2",
  "NC_C4": "C4",
  "NC_C5": "C5",
  "NC_C6": "C6",
  "NC_C7": "C7",
  "NC_C8": "C8",
  "BCLK": "C9",
  "AVDD": "D1",
  "NC_D2": "D2",
  "NC_D3": "D3",
  "NC_D4": "D4",
  "NC_D5": "D5",
  "NC_D6": "D6",
  "NC_D7": "D7",
  "NC_D8": "D8",
  "CLKOUT": "D9",
  "AGND": "E1",
  "NC_E2": "E2",
  "NC_E3": "E3",
  "NC_E4": "E4",
  "NC_E5": "E5",
  "NC_E6": "E6",
  "NC_E7": "E7",
  "NC_E8": "E8",
  "BVDD": "E9",
  "VMID": "F1",
  "NC_F2": "F2",
  "NC_F3": "F3",
  "NC_F4": "F4",
  "NC_F5": "F5",
  "NC_F6": "F6",
  "NC_F7": "F7",
  "NC_F8": "F8",
  "DGND": "F9",
  "MICBIAS": "G1",
  "NC_G2": "G2",
  "NC_G3": "G3",
  "NC_G4": "G4",
  "NC_G5": "G5",
  "NC_G6": "G6",
  "NC_G7": "G7",
  "NC_G8": "G8",
  "DVDD": "G9",
  "MICIN": "H1",
  "NC_H2": "H2",
  "NC_H3": "H3",
  "NC_H4": "H4",
  "NC_H5": "H5",
  "NC_H6": "H6",
  "NC_H7": "H7",
  "NC_H8": "H8",
  "XTO": "H9",
  "NC_J1": "J1",
  "RLINEIN": "J2",
  "LLINEIN": "J3",
  "~{CS}": "J4",
  "MODE": "J5",
  "SDIN": "J6",
  "SCLK": "J7",
  "XTI/MCK": "J8",
  "NC_J9": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_A1: "no_connect", HPGND: "power_in", RHPOUT: "passive", LHPOUT: "passive", HPVDD: "power_in", LRCOUT: "output", DOUT: "output", LRCIN: "input", NC_A9: "no_connect", LOUT: "passive", NC_B2: "no_connect", NC_B3: "no_connect", NC_B4: "no_connect", NC_B5: "no_connect", NC_B6: "no_connect", NC_B7: "no_connect", NC_B8: "no_connect", DIN: "input", ROUT: "passive", NC_C2: "no_connect", NC_C4: "no_connect", NC_C5: "no_connect", NC_C6: "no_connect", NC_C7: "no_connect", NC_C8: "no_connect", BCLK: "bidirectional", AVDD: "power_in", NC_D2: "no_connect", NC_D3: "no_connect", NC_D4: "no_connect", NC_D5: "no_connect", NC_D6: "no_connect", NC_D7: "no_connect", NC_D8: "no_connect", CLKOUT: "output", AGND: "power_in", NC_E2: "no_connect", NC_E3: "no_connect", NC_E4: "no_connect", NC_E5: "no_connect", NC_E6: "no_connect", NC_E7: "no_connect", NC_E8: "no_connect", BVDD: "power_in", VMID: "passive", NC_F2: "no_connect", NC_F3: "no_connect", NC_F4: "no_connect", NC_F5: "no_connect", NC_F6: "no_connect", NC_F7: "no_connect", NC_F8: "no_connect", DGND: "power_in", MICBIAS: "passive", NC_G2: "no_connect", NC_G3: "no_connect", NC_G4: "no_connect", NC_G5: "no_connect", NC_G6: "no_connect", NC_G7: "no_connect", NC_G8: "no_connect", DVDD: "power_in", MICIN: "passive", NC_H2: "no_connect", NC_H3: "no_connect", NC_H4: "no_connect", NC_H5: "no_connect", NC_H6: "no_connect", NC_H7: "no_connect", NC_H8: "no_connect", XTO: "passive", NC_J1: "no_connect", RLINEIN: "passive", LLINEIN: "passive", "~{CS}": "input", MODE: "input", SDIN: "input", SCLK: "input", "XTI/MCK": "passive", NC_J9: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class TLV320AIC3100 extends Component.withPins({
  "IOVSS": "1",
  "IOVDD": "2",
  "DVDD": "3",
  "DOUT": "4",
  "DIN": "5",
  "WCLK": "6",
  "BCLK": "7",
  "MCLK": "8",
  "SDA": "9",
  "SCL": "10",
  "VOL/MICDET": "11",
  "MICBIAS": "12",
  "MIC1LP": "13",
  "MIC1RP": "14",
  "MIC1LM": "15",
  "AVSS": "16",
  "AVDD": "17",
  "DVSS": "18",
  "SPKM_19": "19",
  "SPKVSS_20": "20",
  "SPKVDD_21": "21",
  "SPKP_22": "22",
  "SPKM_23": "23",
  "SPKVDD_24": "24",
  "SPKVSS_25": "25",
  "SPKP_26": "26",
  "HPL": "27",
  "HPVDD": "28",
  "HPVSS": "29",
  "HPR": "30",
  "~{RESET}": "31",
  "GPIO1": "32",
  "EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IOVSS: "power_in", IOVDD: "power_in", DVDD: "power_in", DOUT: "output", DIN: "input", WCLK: "bidirectional", BCLK: "bidirectional", MCLK: "input", SDA: "bidirectional", SCL: "input", "VOL/MICDET": "input", MICBIAS: "power_out", MIC1LP: "input", MIC1RP: "input", MIC1LM: "input", AVSS: "power_in", AVDD: "power_in", DVSS: "power_in", SPKM_19: "output", SPKVSS_20: "power_in", SPKVDD_21: "power_in", SPKP_22: "output", SPKM_23: "passive", SPKVDD_24: "power_in", SPKVSS_25: "passive", SPKP_26: "passive", HPL: "output", HPVDD: "power_in", HPVSS: "power_in", HPR: "output", "~{RESET}": "input", GPIO1: "bidirectional", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TPA5050 extends Component.withPins({
  "LRCLK": "1",
  "DATA": "2",
  "SCL": "3",
  "SDA": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "ADD0": "10",
  "ADD1": "11",
  "ADD2": "12",
  "VDD": "13",
  "GND_14": "14",
  "DATA_OUT": "15",
  "BCLK": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LRCLK: "input", DATA: "input", SCL: "input", SDA: "bidirectional", GND_5: "power_in", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", ADD0: "input", ADD1: "input", ADD2: "input", VDD: "power_in", GND_14: "passive", DATA_OUT: "output", BCLK: "input", GND_17: "passive", ...opts.pinTypes } });
  }
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
 */
export class UDA1334ATS extends Component.withPins({
  "BCK": "1",
  "WS": "2",
  "DATAI": "3",
  "VDDD": "4",
  "VSSD": "5",
  "SYSCLK/PLL1": "6",
  "SFOR1": "7",
  "MUTE": "8",
  "DEEM/CLKOUT": "9",
  "PLL0": "10",
  "SFOR0": "11",
  "Vref(DAC)": "12",
  "VDDA": "13",
  "VOUTL": "14",
  "VSSA": "15",
  "VOUTR": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BCK: "input", WS: "input", DATAI: "input", VDDD: "power_in", VSSD: "power_in", "SYSCLK/PLL1": "input", SFOR1: "input", MUTE: "input", "DEEM/CLKOUT": "bidirectional", PLL0: "input", SFOR0: "input", "Vref(DAC)": "passive", VDDA: "power_in", VOUTL: "output", VSSA: "power_in", VOUTR: "output", ...opts.pinTypes } });
  }
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
 */
export class WM8731CLSEFL extends Component.withPins({
  "XTI/MCLK": "1",
  "XTO": "2",
  "DCVDD": "3",
  "DGND": "4",
  "DBVDD": "5",
  "CLKOUT": "6",
  "BCLK": "7",
  "DACDAT": "8",
  "DACLRC": "9",
  "ADCDAT": "10",
  "ADCLRC": "11",
  "HPVDD": "12",
  "LHPOUT": "13",
  "RHPOUT": "14",
  "HPGND": "15",
  "LOUT": "16",
  "ROUT": "17",
  "AVDD": "18",
  "AGND_19": "19",
  "VMID": "20",
  "MICBIAS": "21",
  "MICIN": "22",
  "RLINEIN": "23",
  "LLINEIN": "24",
  "MODE": "25",
  "~{CSB}": "26",
  "SDIN": "27",
  "SCLK": "28",
  "AGND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XTI/MCLK": "input", XTO: "output", DCVDD: "power_in", DGND: "power_in", DBVDD: "power_in", CLKOUT: "output", BCLK: "bidirectional", DACDAT: "input", DACLRC: "bidirectional", ADCDAT: "output", ADCLRC: "bidirectional", HPVDD: "power_in", LHPOUT: "output", RHPOUT: "output", HPGND: "power_in", LOUT: "output", ROUT: "output", AVDD: "power_in", AGND_19: "power_in", VMID: "passive", MICBIAS: "output", MICIN: "input", RLINEIN: "input", LLINEIN: "input", MODE: "input", "~{CSB}": "input", SDIN: "bidirectional", SCLK: "input", AGND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class WM8731CSEFL extends Component.withPins({
  "XTI/MCLK": "1",
  "XTO": "2",
  "DCVDD": "3",
  "DGND": "4",
  "DBVDD": "5",
  "CLKOUT": "6",
  "BCLK": "7",
  "DACDAT": "8",
  "DACLRC": "9",
  "ADCDAT": "10",
  "ADCLRC": "11",
  "HPVDD": "12",
  "LHPOUT": "13",
  "RHPOUT": "14",
  "HPGND": "15",
  "LOUT": "16",
  "ROUT": "17",
  "AVDD": "18",
  "AGND_19": "19",
  "VMID": "20",
  "MICBIAS": "21",
  "MICIN": "22",
  "RLINEIN": "23",
  "LLINEIN": "24",
  "MODE": "25",
  "~{CSB}": "26",
  "SDIN": "27",
  "SCLK": "28",
  "AGND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XTI/MCLK": "input", XTO: "output", DCVDD: "power_in", DGND: "power_in", DBVDD: "power_in", CLKOUT: "output", BCLK: "bidirectional", DACDAT: "input", DACLRC: "bidirectional", ADCDAT: "output", ADCLRC: "bidirectional", HPVDD: "power_in", LHPOUT: "output", RHPOUT: "output", HPGND: "power_in", LOUT: "output", ROUT: "output", AVDD: "power_in", AGND_19: "power_in", VMID: "passive", MICBIAS: "output", MICIN: "input", RLINEIN: "input", LLINEIN: "input", MODE: "input", "~{CSB}": "input", SDIN: "bidirectional", SCLK: "input", AGND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class WM8731SEDS extends Component.withPins({
  "DBVDD": "1",
  "CLKOUT": "2",
  "BCLK": "3",
  "DACDAT": "4",
  "DACLRC": "5",
  "ADCDAT": "6",
  "ADCLRC": "7",
  "HPVDD": "8",
  "LHPOUT": "9",
  "RHPOUT": "10",
  "HPGND": "11",
  "LOUT": "12",
  "ROUT": "13",
  "AVDD": "14",
  "AGND": "15",
  "VMID": "16",
  "MICBIAS": "17",
  "MICIN": "18",
  "RLINEIN": "19",
  "LLINEIN": "20",
  "MODE": "21",
  "~{CSB}": "22",
  "SDIN": "23",
  "SCLK": "24",
  "XTI/MCLK": "25",
  "XTO": "26",
  "DCVDD": "27",
  "DGND": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DBVDD: "power_in", CLKOUT: "output", BCLK: "bidirectional", DACDAT: "input", DACLRC: "bidirectional", ADCDAT: "output", ADCLRC: "bidirectional", HPVDD: "power_in", LHPOUT: "output", RHPOUT: "output", HPGND: "power_in", LOUT: "output", ROUT: "output", AVDD: "power_in", AGND: "power_in", VMID: "passive", MICBIAS: "output", MICIN: "input", RLINEIN: "input", LLINEIN: "input", MODE: "input", "~{CSB}": "input", SDIN: "bidirectional", SCLK: "input", "XTI/MCLK": "input", XTO: "output", DCVDD: "power_in", DGND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class YM2149 extends Component.withPins({
  "VSS": "1",
  "NC_2": "2",
  "A": "3",
  "B": "4",
  "NC_5": "5",
  "IOB7": "6",
  "IOB6": "7",
  "IOB5": "8",
  "IOB4": "9",
  "IOB3": "10",
  "IOB2": "11",
  "IOB1": "12",
  "IOB0": "13",
  "IOA7": "14",
  "IOA6": "15",
  "IOA5": "16",
  "IOA4": "17",
  "IOA3": "18",
  "IOA2": "19",
  "IOA1": "20",
  "IOA0": "21",
  "CLOCK": "22",
  "~{RESET}": "23",
  "~{A9}": "24",
  "A8": "25",
  "~{SEL}": "26",
  "BDIR": "27",
  "BC2": "28",
  "BC1": "29",
  "DA7": "30",
  "DA6": "31",
  "DA5": "32",
  "DA4": "33",
  "DA3": "34",
  "DA2": "35",
  "DA1": "36",
  "DA0": "37",
  "C": "38",
  "TEST1": "39",
  "VCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", NC_2: "no_connect", A: "output", B: "output", NC_5: "no_connect", IOB7: "bidirectional", IOB6: "bidirectional", IOB5: "bidirectional", IOB4: "bidirectional", IOB3: "bidirectional", IOB2: "bidirectional", IOB1: "bidirectional", IOB0: "bidirectional", IOA7: "bidirectional", IOA6: "bidirectional", IOA5: "bidirectional", IOA4: "bidirectional", IOA3: "bidirectional", IOA2: "bidirectional", IOA1: "bidirectional", IOA0: "bidirectional", CLOCK: "input", "~{RESET}": "input", "~{A9}": "input", A8: "input", "~{SEL}": "input", BDIR: "input", BC2: "input", BC1: "input", DA7: "bidirectional", DA6: "bidirectional", DA5: "bidirectional", DA4: "bidirectional", DA3: "bidirectional", DA2: "bidirectional", DA1: "bidirectional", DA0: "bidirectional", C: "output", TEST1: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class YM2612 extends Component.withPins({
  "GND_1": "1",
  "D_{0}": "2",
  "D_{1}": "3",
  "D_{2}": "4",
  "D_{3}": "5",
  "D_{4}": "6",
  "D_{5}": "7",
  "D_{6}": "8",
  "D_{7}": "9",
  "~{TEST}": "10",
  "~{IC}": "11",
  "GND_12": "12",
  "~{IRQ}": "13",
  "~{CS}": "14",
  "~{WR}": "15",
  "~{RD}": "16",
  "A_{0}": "17",
  "A_{1}": "18",
  "AGND": "19",
  "MOR": "20",
  "MOL": "21",
  "AV_{CC}": "22",
  "V_{CC}": "23",
  "ΦM": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "D_{0}": "bidirectional", "D_{1}": "bidirectional", "D_{2}": "bidirectional", "D_{3}": "bidirectional", "D_{4}": "bidirectional", "D_{5}": "bidirectional", "D_{6}": "bidirectional", "D_{7}": "bidirectional", "~{TEST}": "bidirectional", "~{IC}": "input", GND_12: "passive", "~{IRQ}": "open_collector", "~{CS}": "input", "~{WR}": "input", "~{RD}": "input", "A_{0}": "input", "A_{1}": "input", AGND: "power_in", MOR: "output", MOL: "output", "AV_{CC}": "power_in", "V_{CC}": "power_in", "ΦM": "input", ...opts.pinTypes } });
  }
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
 */
export class YM3438 extends Component.withPins({
  "GND_1": "1",
  "D_{0}": "2",
  "D_{1}": "3",
  "D_{2}": "4",
  "D_{3}": "5",
  "D_{4}": "6",
  "D_{5}": "7",
  "D_{6}": "8",
  "D_{7}": "9",
  "~{TEST}": "10",
  "~{IC}": "11",
  "GND_12": "12",
  "~{IRQ}": "13",
  "~{CS}": "14",
  "~{WR}": "15",
  "~{RD}": "16",
  "A_{0}": "17",
  "A_{1}": "18",
  "AGND": "19",
  "MOR": "20",
  "MOL": "21",
  "AV_{CC}": "22",
  "V_{CC}": "23",
  "ΦM": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "D_{0}": "bidirectional", "D_{1}": "bidirectional", "D_{2}": "bidirectional", "D_{3}": "bidirectional", "D_{4}": "bidirectional", "D_{5}": "bidirectional", "D_{6}": "bidirectional", "D_{7}": "bidirectional", "~{TEST}": "bidirectional", "~{IC}": "input", GND_12: "passive", "~{IRQ}": "open_collector", "~{CS}": "input", "~{WR}": "input", "~{RD}": "input", "A_{0}": "input", "A_{1}": "input", AGND: "power_in", MOR: "output", MOL: "output", "AV_{CC}": "power_in", "V_{CC}": "power_in", "ΦM": "input", ...opts.pinTypes } });
  }
  override schema = "Audio:YM3438";
  override referencePrefix = "U";
}
