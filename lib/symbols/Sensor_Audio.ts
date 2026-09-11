// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * TDK InvenSense MEMS Microphone, 24-bit I2S, 65 dBA SNR, LGA-6
 *
 * KiCad symbol: `Sensor_Audio:ICS-43434`. Reference prefix: `MK`.
 * Footprint filters: InvenSense*ICS*43434*.
 * @see https://www.invensense.com/wp-content/uploads/2016/02/DS-000069-ICS-43434-v1.2.pdf
 * Keywords: microphone MEMS 24bit I2S ICS-43434 TDK InvenSense.
 * Default footprint: Sensor_Audio:InvenSense_ICS-43434-6_3.5x2.65mm.
 */
export class ICS_43434 extends Component.withPins({
  "WS": "1",
  "LR": "2",
  "GND": "3",
  "SCK": "4",
  "VDD": "5",
  "SD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { WS: "input", LR: "input", GND: "power_in", SCK: "input", VDD: "power_in", SD: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Audio:ICS-43434";
  override referencePrefix = "MK";
}

/**
 * High performance digital XENSIV MEMS microphone, -26 dBFS Sensitivity, LLGA-5
 *
 * KiCad symbol: `Sensor_Audio:IM69D120`. Reference prefix: `MK`.
 * Footprint filters: Infineon*PG*LLGA*.
 * @see https://www.infineon.com/dgdl/Infineon-IM69D120-DS-v01_00-EN.pdf?fileId=5546d462602a9dc801607a0e41a01a2b
 * Keywords: mems microphone.
 * Default footprint: Sensor_Audio:Infineon_PG-LLGA-5-1.
 */
export class IM69D120 extends Component.withPins({
  "DATA": "1",
  "VDD": "2",
  "CLOCK": "3",
  "SELECT": "4",
  "GND": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DATA: "output", VDD: "power_in", CLOCK: "input", SELECT: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Audio:IM69D120";
  override referencePrefix = "MK";
}

/**
 * High performance digital XENSIV MEMS microphone, -36 dBFS Sensitivity, LLGA-5
 *
 * KiCad symbol: `Sensor_Audio:IM69D130`. Reference prefix: `MK`.
 * Footprint filters: Infineon*PG*LLGA*.
 * @see https://www.infineon.com/dgdl/Infineon-IM69D130-DS-v01_00-EN.pdf?fileId=5546d462602a9dc801607a0e46511a2e
 * Keywords: mems microphone.
 * Default footprint: Sensor_Audio:Infineon_PG-LLGA-5-1.
 */
export class IM69D130 extends Component.withPins({
  "DATA": "1",
  "VDD": "2",
  "CLOCK": "3",
  "SELECT": "4",
  "GND": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DATA: "output", VDD: "power_in", CLOCK: "input", SELECT: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Audio:IM69D130";
  override referencePrefix = "MK";
}

/**
 * IP57 Water and Dust Resistant, Differential MEMS Microphone, 135dBSPL AOP, 73dB SNR, PG-LLGA-5-2
 *
 * KiCad symbol: `Sensor_Audio:IM73A135V01`. Reference prefix: `MK`.
 * Footprint filters: Infineon*PG*LLGA*.
 * @see https://www.infineon.com/dgdl/Infineon-IM73A135-DataSheet-v01_00-EN.pdf?fileId=8ac78c8c7f2a768a017fadec36b84500
 * Keywords: Microphone MEMS analog.
 * Default footprint: Sensor_Audio:Infineon_PG-LLGA-5-2.
 */
export class IM73A135V01 extends Component.withPins({
  "OUT+": "1",
  "V_{DD}": "2",
  "OUT-": "3",
  "GND_4": "4",
  "GND_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "OUT+": "output", "V_{DD}": "power_in", "OUT-": "output", GND_4: "power_in", GND_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Audio:IM73A135V01";
  override referencePrefix = "MK";
}

/**
 * MEMS Omnidirectional Digital Microphone, HLGA-6
 *
 * KiCad symbol: `Sensor_Audio:MP45DT02`. Reference prefix: `MK`.
 * Footprint filters: ST*HLGA*3.76x4.72mm*P1.65mm*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/DM00025467.pdf
 * Keywords: MEMS Microphone.
 * Default footprint: Sensor_Audio:ST_HLGA-6_3.76x4.72mm_P1.65mm.
 */
export class MP45DT02 extends Component.withPins({
  "GND_1": "1",
  "LR": "2",
  "GND_3": "3",
  "CLK": "4",
  "DOUT": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", LR: "input", GND_3: "passive", CLK: "input", DOUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Audio:MP45DT02";
  override referencePrefix = "MK";
}

/**
 * Digital MEMS Microphone, LGA-5
 *
 * KiCad symbol: `Sensor_Audio:SPH0641LU4H-1`. Reference prefix: `MK`.
 * Footprint filters: Knowles*LGA*3.5x2.65mm*.
 * @see https://www.knowles.com/docs/default-source/model-downloads/sph0641lu4h-1-revb.pdf
 * Keywords: Microphone MEMS.
 * Default footprint: Sensor_Audio:Knowles_LGA-5_3.5x2.65mm.
 */
export class SPH0641LU4H_1 extends Component.withPins({
  "DATA": "1",
  "SEL": "2",
  "GND": "3",
  "CLOCK": "4",
  "VDD": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DATA: "output", SEL: "input", GND: "power_in", CLOCK: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Audio:SPH0641LU4H-1";
  override referencePrefix = "MK";
}

/**
 * Knowles MEMS Microphone, 24-bit I2S, 65 dBA SNR, LGA-6
 *
 * KiCad symbol: `Sensor_Audio:SPH0645LM4H`. Reference prefix: `MK`.
 * Footprint filters: Knowles*SPH0645LM4H*.
 * @see https://www.knowles.com/docs/default-source/default-document-library/sph0645lm4h-1-datasheet.pdf
 * Keywords: microphone MEMS I2S 24bit Knowles SPH0645LM4H Crawford.
 * Default footprint: Sensor_Audio:Knowles_SPH0645LM4H-6_3.5x2.65mm.
 */
export class SPH0645LM4H extends Component.withPins({
  "WS": "1",
  "SEL": "2",
  "GND": "3",
  "BCLK": "4",
  "VDD": "5",
  "DATA": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { WS: "input", SEL: "input", GND: "power_in", BCLK: "input", VDD: "power_in", DATA: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Audio:SPH0645LM4H";
  override referencePrefix = "MK";
}

/**
 * Differential/Single-Ended Analog MEMS Microphone, LGA-6
 *
 * KiCad symbol: `Sensor_Audio:SPM0687LR5H-1`. Reference prefix: `MK`.
 * Footprint filters: Knowles*LGA*4.72x3.76mm*.
 * @see https://www.knowles.com/docs/default-source/default-document-library/spm0687lr5h-1_winfrey_datasheet.pdf?Status=Master&sfvrsn=ac3971b1_0
 * Keywords: Microphone MEMS Knowles Sisonic winfrey.
 * Default footprint: Sensor_Audio:Knowles_LGA-6_4.72x3.76mm.
 */
export class SPM0687LR5H_1 extends Component.withPins({
  "OUT+": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "Vdd": "5",
  "OUT-": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "OUT+": "output", GND_2: "power_in", GND_3: "passive", GND_4: "passive", Vdd: "power_in", "OUT-": "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Audio:SPM0687LR5H-1";
  override referencePrefix = "MK";
}
