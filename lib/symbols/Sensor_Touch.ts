// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Single-key Touch Sensor, UDFN-8
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1010-M`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001946A.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP0.9x1.5mm.
 */
export class AT42QT1010_M extends Component.withPins({
  "SNSK": "1",
  "NC_2": "2",
  "NC_3": "3",
  "VSS_4": "4",
  "OUT": "5",
  "SYNC": "6",
  "VDD": "7",
  "SNS": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SNSK: "passive", NC_2: "no_connect", NC_3: "no_connect", VSS_4: "power_in", OUT: "output", SYNC: "input", VDD: "power_in", SNS: "passive", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1010-M";
  override referencePrefix = "U";
}

/**
 * Single-key Touch Sensor, SOT-23-6
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1010-TSHR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001946A.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class AT42QT1010_TSHR extends Component.withPins({
  "OUT": "1",
  "VSS": "2",
  "SNSK": "3",
  "SNS": "4",
  "VDD": "5",
  "SYNC": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", VSS: "power_in", SNSK: "passive", SNS: "passive", VDD: "power_in", SYNC: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1010-TSHR";
  override referencePrefix = "U";
}

/**
 * Single-key Touch Sensor, UDFN-8
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1011-M`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001947A.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP0.9x1.5mm.
 */
export class AT42QT1011_M extends Component.withPins({
  "SNSK": "1",
  "NC_2": "2",
  "NC_3": "3",
  "VSS_4": "4",
  "OUT": "5",
  "SYNC": "6",
  "VDD": "7",
  "SNS": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SNSK: "passive", NC_2: "no_connect", NC_3: "no_connect", VSS_4: "power_in", OUT: "output", SYNC: "input", VDD: "power_in", SNS: "passive", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1011-M";
  override referencePrefix = "U";
}

/**
 * Single-key Touch Sensor, SOT-23-6
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1011-TSHR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001947A.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class AT42QT1011_TSHR extends Component.withPins({
  "OUT": "1",
  "VSS": "2",
  "SNSK": "3",
  "SNS": "4",
  "VDD": "5",
  "SYNC": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", VSS: "power_in", SNSK: "passive", SNS: "passive", VDD: "power_in", SYNC: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1011-TSHR";
  override referencePrefix = "U";
}

/**
 * Single-Key Touch Sensor IC, UDFN-8
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1012-M`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001948A.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP0.9x1.5mm.
 */
export class AT42QT1012_M extends Component.withPins({
  "SNSK": "1",
  "NC_2": "2",
  "NC_3": "3",
  "VSS_4": "4",
  "OUT": "5",
  "TIME": "6",
  "VDD": "7",
  "SNS": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SNSK: "passive", NC_2: "no_connect", NC_3: "no_connect", VSS_4: "power_in", OUT: "output", TIME: "input", VDD: "power_in", SNS: "passive", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1012-M";
  override referencePrefix = "U";
}

/**
 * Single-Key Touch Sensor IC, SOT-23-6
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1012-T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001948A.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class AT42QT1012_T extends Component.withPins({
  "OUT": "1",
  "VSS": "2",
  "SNSK": "3",
  "SNS": "4",
  "VDD": "5",
  "TIME": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", VSS: "power_in", SNSK: "passive", SNS: "passive", VDD: "power_in", TIME: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1012-T";
  override referencePrefix = "U";
}

/**
 * Four-key Touch Sensor IC, VQFN-20
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1040-M`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.45mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9524-AT42-QTouch-BSW-AT42QT1040_Datasheet.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_DFN_QFN:VQFN-20-1EP_3x3mm_P0.45mm_EP1.55x1.55mm.
 */
export class AT42QT1040_M extends Component.withPins({
  "SNS2": "1",
  "SNSK1": "2",
  "SNS1": "3",
  "SNSK0": "4",
  "SNS0": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VSS_8": "8",
  "VDD": "9",
  "NC_10": "10",
  "~{OUT0}": "11",
  "~{OUT1}": "12",
  "~{OUT3}": "13",
  "~{OUT2}": "14",
  "SNSK3": "15",
  "SNS3": "16",
  "NC_17": "17",
  "NC_18": "18",
  "NC_19": "19",
  "SNSK2": "20",
  "VSS_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SNS2: "passive", SNSK1: "passive", SNS1: "passive", SNSK0: "passive", SNS0: "passive", NC_6: "no_connect", NC_7: "no_connect", VSS_8: "power_in", VDD: "power_in", NC_10: "no_connect", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT3}": "open_collector", "~{OUT2}": "open_collector", SNSK3: "passive", SNS3: "passive", NC_17: "no_connect", NC_18: "no_connect", NC_19: "no_connect", SNSK2: "passive", VSS_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1040-M";
  override referencePrefix = "U";
}

/**
 * Five-Key Touch Sensor, VQFN-20
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1050-M`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.45mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9707-AT42-QTouch-BSW-AT42QT1050_Datasheet.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_DFN_QFN:VQFN-20-1EP_3x3mm_P0.45mm_EP1.55x1.55mm.
 */
export class AT42QT1050_M extends Component.withPins({
  "KEY2": "1",
  "NC_2": "2",
  "KEY1": "3",
  "KEY0": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VSS_8": "8",
  "VDD": "9",
  "NC_10": "10",
  "ADDR_SEL": "11",
  "SDA": "12",
  "~{RESET}": "13",
  "~{CHANGE}": "14",
  "SCL": "15",
  "KEY4": "16",
  "KEY3": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "VSS_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { KEY2: "passive", NC_2: "no_connect", KEY1: "passive", KEY0: "passive", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", VSS_8: "power_in", VDD: "power_in", NC_10: "no_connect", ADDR_SEL: "input", SDA: "bidirectional", "~{RESET}": "input", "~{CHANGE}": "open_collector", SCL: "input", KEY4: "passive", KEY3: "passive", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", VSS_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1050-M";
  override referencePrefix = "U";
}

/**
 * Five-Key Touch Sensor, WLCSP-12
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1050-U`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.403x1.555mm*Layout6x4*P0.4mm*Stagger*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9707-AT42-QTouch-BSW-AT42QT1050_Datasheet.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_CSP:WLCSP-12_1.403x1.555mm_Layout6x4_P0.4mm_Stagger.
 */
export class AT42QT1050_U extends Component.withPins({
  "KEY2": "A1",
  "KEY0": "A3",
  "KEY1": "A5",
  "KEY4": "B2",
  "VSS": "B4",
  "VDD": "B6",
  "KEY3": "C1",
  "SCL": "C3",
  "SDA": "C5",
  "~{CHANGE}": "D2",
  "~{RESET}": "D4",
  "ADDR_SEL": "D6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { KEY2: "passive", KEY0: "passive", KEY1: "passive", KEY4: "passive", VSS: "power_in", VDD: "power_in", KEY3: "passive", SCL: "input", SDA: "bidirectional", "~{CHANGE}": "open_collector", "~{RESET}": "input", ADDR_SEL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1050-U";
  override referencePrefix = "U";
}

/**
 * Six-Key Touch Sensor IC, VQFN-28
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1060-M`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.45mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9505-AT42-QTouch-BSW-AT42QT1060_Datasheet.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_DFN_QFN:VQFN-28-1EP_4x4mm_P0.45mm_EP2.4x2.4mm.
 */
export class AT42QT1060_M extends Component.withPins({
  "SNS1K": "1",
  "SNS2K": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "IO5": "5",
  "IO6": "6",
  "SNS3K": "7",
  "SNS4K": "8",
  "SNS5K": "9",
  "SNS0": "10",
  "SNS1": "11",
  "SNS2": "12",
  "SNS3": "13",
  "SNS4": "14",
  "SNS5": "15",
  "VDD_16": "16",
  "VDD_17": "17",
  "VSS_18": "18",
  "IO0": "19",
  "IO1": "20",
  "IO2": "21",
  "~{CHG}": "22",
  "SDA": "23",
  "SCL": "24",
  "~{RST}": "25",
  "IO3": "26",
  "IO4": "27",
  "SNS0K": "28",
  "VSS_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SNS1K: "passive", SNS2K: "passive", VDD_3: "power_in", VSS_4: "power_in", IO5: "bidirectional", IO6: "bidirectional", SNS3K: "passive", SNS4K: "passive", SNS5K: "passive", SNS0: "passive", SNS1: "passive", SNS2: "passive", SNS3: "passive", SNS4: "passive", SNS5: "passive", VDD_16: "passive", VDD_17: "passive", VSS_18: "passive", IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", "~{CHG}": "open_collector", SDA: "bidirectional", SCL: "input", "~{RST}": "input", IO3: "bidirectional", IO4: "bidirectional", SNS0K: "passive", VSS_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1060-M";
  override referencePrefix = "U";
}

/**
 * Seven-key Touch Sensor IC, VQFN-20
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1070-M`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.45mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9596-AT42-QTouch-BSW-AT42QT1070_Datasheet.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_DFN_QFN:VQFN-20-1EP_3x3mm_P0.45mm_EP1.55x1.55mm.
 */
export class AT42QT1070_M extends Component.withPins({
  "KEY4": "1",
  "KEY3": "2",
  "KEY2": "3",
  "KEY1": "4",
  "KEY0": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VSS_8": "8",
  "VDD": "9",
  "NC_10": "10",
  "MODE": "11",
  "SDA/OUT0": "12",
  "~{RESET}": "13",
  "~{CHANGE}/OUT4": "14",
  "SCL/OUT3": "15",
  "OUT2/KEY6": "16",
  "OUT1/KEY5": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "VSS_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { KEY4: "passive", KEY3: "passive", KEY2: "passive", KEY1: "passive", KEY0: "passive", NC_6: "no_connect", NC_7: "no_connect", VSS_8: "power_in", VDD: "power_in", NC_10: "no_connect", MODE: "input", "SDA/OUT0": "bidirectional", "~{RESET}": "input", "~{CHANGE}/OUT4": "open_collector", "SCL/OUT3": "bidirectional", "OUT2/KEY6": "output", "OUT1/KEY5": "output", NC_18: "no_connect", NC_19: "no_connect", NC_20: "no_connect", VSS_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1070-M";
  override referencePrefix = "U";
}

/**
 * Seven-key Touch Sensor IC, SOIC-14
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1070-S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9596-AT42-QTouch-BSW-AT42QT1070_Datasheet.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class AT42QT1070_S extends Component.withPins({
  "VDD": "1",
  "MODE": "2",
  "SDA/OUT0": "3",
  "~{RESET}": "4",
  "~{CHANGE}/OUT4": "5",
  "SCL/OUT3": "6",
  "OUT2/KEY6": "7",
  "OUT1/KEY5": "8",
  "KEY4": "9",
  "KEY3": "10",
  "KEY2": "11",
  "KEY1": "12",
  "KEY0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", MODE: "input", "SDA/OUT0": "bidirectional", "~{RESET}": "input", "~{CHANGE}/OUT4": "open_collector", "SCL/OUT3": "bidirectional", "OUT2/KEY6": "output", "OUT1/KEY5": "output", KEY4: "passive", KEY3: "passive", KEY2: "passive", KEY1: "passive", KEY0: "passive", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1070-S";
  override referencePrefix = "U";
}

/**
 * 11-Key Touch Sensor IC, VQFN-32
 *
 * KiCad symbol: `Sensor_Touch:AT42QT1110-M`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9520-AT42-QTouch-BSW-AT42QT1110_Datasheet.pdf
 * Keywords: Touch QTouch Sensor Key.
 * Default footprint: Package_DFN_QFN:VQFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AT42QT1110_M extends Component.withPins({
  "SNS0K": "1",
  "SNS1": "2",
  "SNS1K": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "SNS2K": "6",
  "SNS2": "7",
  "SNS3": "8",
  "SNS3K": "9",
  "SNS4": "10",
  "SNS4K": "11",
  "SNS5": "12",
  "SNS5K": "13",
  "~{SS}": "14",
  "MOSI": "15",
  "MISO": "16",
  "SCK": "17",
  "VDD_18": "18",
  "SNS6K": "19",
  "SNS6": "20",
  "VSS_21": "21",
  "DETECT0/SNS7K": "22",
  "DETECT1/SNS7": "23",
  "DETECT2/SNS8": "24",
  "DETECT3/SNS8K": "25",
  "DETECT4/SNS9": "26",
  "DETECT5/SNS9K": "27",
  "~{CHANGE}": "28",
  "~{RESET}": "29",
  "DETECT6/SNS10": "30",
  "SYNC/SNS10K": "31",
  "SNS0": "32",
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SNS0K: "passive", SNS1: "passive", SNS1K: "passive", VDD_4: "power_in", VSS_5: "power_in", SNS2K: "passive", SNS2: "passive", SNS3: "passive", SNS3K: "passive", SNS4: "passive", SNS4K: "passive", SNS5: "passive", SNS5K: "passive", "~{SS}": "input", MOSI: "input", MISO: "output", SCK: "input", VDD_18: "passive", SNS6K: "passive", SNS6: "passive", VSS_21: "passive", "DETECT0/SNS7K": "bidirectional", "DETECT1/SNS7": "bidirectional", "DETECT2/SNS8": "bidirectional", "DETECT3/SNS8K": "bidirectional", "DETECT4/SNS9": "bidirectional", "DETECT5/SNS9K": "bidirectional", "~{CHANGE}": "open_collector", "~{RESET}": "input", "DETECT6/SNS10": "bidirectional", "SYNC/SNS10K": "bidirectional", SNS0: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:AT42QT1110-M";
  override referencePrefix = "U";
}

/**
 * 6-Channel Capacitive Touch Sensor, DFN-10
 *
 * KiCad symbol: `Sensor_Touch:CAP1206-x-AIA`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00001567B.pdf
 * Keywords: 6 Channel Capacitive Touch Sensor.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.55x2.48mm.
 */
export class CAP1206_x_AIA extends Component.withPins({
  "CS1": "1",
  "ALERT#": "2",
  "SMDATA": "3",
  "SMCLK": "4",
  "VDD": "5",
  "CS6": "6",
  "CS5": "7",
  "CS4": "8",
  "CS3": "9",
  "CS2": "10",
  "GND": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CS1: "passive", "ALERT#": "open_collector", SMDATA: "bidirectional", SMCLK: "input", VDD: "power_in", CS6: "passive", CS5: "passive", CS4: "passive", CS3: "passive", CS2: "passive", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:CAP1206-x-AIA";
  override referencePrefix = "U";
}

/**
 * 6-Channel Capacitive Touch Sensor, SOIC-14
 *
 * KiCad symbol: `Sensor_Touch:CAP1206-x-SL`. Reference prefix: `U`.
 * Footprint filters: SOIC?14*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/00001567B.pdf
 * Keywords: 6 Channel Capacitive Touch Sensor.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class CAP1206_x_SL extends Component.withPins({
  "CS1": "2",
  "ALERT#": "3",
  "SMDATA": "4",
  "SMCLK": "5",
  "VDD": "7",
  "GND": "8",
  "CS6": "9",
  "CS5": "10",
  "CS4": "11",
  "CS3": "12",
  "CS2": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CS1: "passive", "ALERT#": "open_collector", SMDATA: "bidirectional", SMCLK: "input", VDD: "power_in", GND: "power_in", CS6: "passive", CS5: "passive", CS4: "passive", CS3: "passive", CS2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:CAP1206-x-SL";
  override referencePrefix = "U";
}

/**
 * CapSense Controller, 2 Sensors, SOIC-8
 *
 * KiCad symbol: `Sensor_Touch:CY8CMBR3002`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.cypress.com/?docID=49119
 * Keywords: Touch Sensor 2ch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CY8CMBR3002 extends Component.withPins({
  "GPO1": "1",
  "CMOD": "2",
  "VCC": "3",
  "VDD": "4",
  "VSS": "5",
  "CS1": "6",
  "CS0": "7",
  "GPO0": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPO1: "output", CMOD: "passive", VCC: "passive", VDD: "power_in", VSS: "power_in", CS1: "passive", CS0: "passive", GPO0: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:CY8CMBR3002";
  override referencePrefix = "U";
}

/**
 * CapSense Controller, 2 Sensors, SOIC-8
 *
 * KiCad symbol: `Sensor_Touch:CY8CMBR3102`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.cypress.com/?docID=49119
 * Keywords: Touch Sensor 2ch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CY8CMBR3102 extends Component.withPins({
  "SCL": "1",
  "CMOD": "2",
  "VCC": "3",
  "VDD": "4",
  "VSS": "5",
  "CS1": "6",
  "CS0": "7",
  "SDA": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", CMOD: "passive", VCC: "passive", VDD: "power_in", VSS: "power_in", CS1: "passive", CS0: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:CY8CMBR3102";
  override referencePrefix = "U";
}

/**
 * CapSense Controller, 16 Sensors w/ Slider, QFN-24+EP
 *
 * KiCad symbol: `Sensor_Touch:CY8CMBR3106S`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.cypress.com/?docID=49119
 * Keywords: Touch Sensor 16ch Slider.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class CY8CMBR3106S extends Component.withPins({
  "CS0": "1",
  "CS1": "2",
  "CS2": "3",
  "CS3": "4",
  "CMOD": "5",
  "VCC": "6",
  "VDD": "7",
  "VSS": "8",
  "SLD10": "9",
  "SLD11": "10",
  "SLD12": "11",
  "SLD13": "12",
  "SLD14": "13",
  "CS11": "14",
  "CS12": "15",
  "CS13": "16",
  "CS14": "17",
  "CS15": "18",
  "CS5": "19",
  "CS4": "20",
  "SDA": "21",
  "SCL": "22",
  "~{HI}": "23",
  "~{XRES}": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CS0: "passive", CS1: "passive", CS2: "passive", CS3: "passive", CMOD: "passive", VCC: "passive", VDD: "power_in", VSS: "power_in", SLD10: "passive", SLD11: "passive", SLD12: "passive", SLD13: "passive", SLD14: "passive", CS11: "passive", CS12: "passive", CS13: "passive", CS14: "passive", CS15: "passive", CS5: "passive", CS4: "passive", SDA: "bidirectional", SCL: "input", "~{HI}": "bidirectional", "~{XRES}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:CY8CMBR3106S";
  override referencePrefix = "U";
}

/**
 * CapSense Controller, 8 Sensors, QFN-16+EP
 *
 * KiCad symbol: `Sensor_Touch:CY8CMBR3108`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.cypress.com/?docID=49119
 * Keywords: Touch Sensor 8ch.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class CY8CMBR3108 extends Component.withPins({
  "CS0": "1",
  "CS1": "2",
  "CMOD": "3",
  "VCC": "4",
  "VDDIO": "5",
  "VDD": "6",
  "VSS": "7",
  "CS4": "8",
  "CS5": "9",
  "CS6": "10",
  "CS7": "11",
  "CS2": "12",
  "CS3": "13",
  "SDA": "14",
  "SCL": "15",
  "~{HI}": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CS0: "passive", CS1: "passive", CMOD: "passive", VCC: "passive", VDDIO: "power_in", VDD: "power_in", VSS: "power_in", CS4: "passive", CS5: "passive", CS6: "passive", CS7: "passive", CS2: "passive", CS3: "passive", SDA: "bidirectional", SCL: "input", "~{HI}": "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:CY8CMBR3108";
  override referencePrefix = "U";
}

/**
 * CapSense Controller, 10 Sensors, SOIC-16
 *
 * KiCad symbol: `Sensor_Touch:CY8CMBR3110`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.cypress.com/?docID=49119
 * Keywords: Touch Sensor 10ch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class CY8CMBR3110 extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "CS0": "3",
  "CS1": "4",
  "CMOD": "5",
  "VCC": "6",
  "VDD": "7",
  "VSS": "8",
  "CS5": "9",
  "CS6": "10",
  "CS7": "11",
  "CS8": "12",
  "CS2": "13",
  "CS9": "14",
  "CS3": "15",
  "CS4": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", CS0: "passive", CS1: "passive", CMOD: "passive", VCC: "passive", VDD: "power_in", VSS: "power_in", CS5: "passive", CS6: "passive", CS7: "passive", CS8: "passive", CS2: "passive", CS9: "passive", CS3: "passive", CS4: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:CY8CMBR3110";
  override referencePrefix = "U";
}

/**
 * CapSense Controller, 16 Sensors, QFN-24+EP
 *
 * KiCad symbol: `Sensor_Touch:CY8CMBR3116`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.cypress.com/?docID=49119
 * Keywords: Touch Sensor 16ch.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class CY8CMBR3116 extends Component.withPins({
  "CS0": "1",
  "CS1": "2",
  "CS2": "3",
  "CS3": "4",
  "CMOD": "5",
  "VCC": "6",
  "VDD": "7",
  "VSS": "8",
  "CS15": "9",
  "CS14": "10",
  "CS13": "11",
  "CS12": "12",
  "CS11": "13",
  "CS10": "14",
  "CS9": "15",
  "CS8": "16",
  "CS7": "17",
  "CS6": "18",
  "CS5": "19",
  "CS4": "20",
  "SDA": "21",
  "SCL": "22",
  "~{HI}": "23",
  "~{XRES}": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CS0: "passive", CS1: "passive", CS2: "passive", CS3: "passive", CMOD: "passive", VCC: "passive", VDD: "power_in", VSS: "power_in", CS15: "passive", CS14: "passive", CS13: "passive", CS12: "passive", CS11: "passive", CS10: "passive", CS9: "passive", CS8: "passive", CS7: "passive", CS6: "passive", CS5: "passive", CS4: "passive", SDA: "bidirectional", SCL: "input", "~{HI}": "bidirectional", "~{XRES}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:CY8CMBR3116";
  override referencePrefix = "U";
}

/**
 * 12ch Touch Sensor controller, UQFN-20
 *
 * KiCad symbol: `Sensor_Touch:MPR121QR2`. Reference prefix: `U`.
 * Footprint filters: UQFN*3x3mm*P0.4mm*.
 * @see https://resurgentsemi.com/wp-content/uploads/2018/09/MPR121_rev5-Resurgent.pdf?d453f8&d453f8
 * Keywords: Touch Sensor 12ch.
 * Default footprint: Package_DFN_QFN:UQFN-20_3x3mm_P0.4mm.
 */
export class MPR121QR2 extends Component.withPins({
  "~{IRQ}": "1",
  "SCL": "2",
  "SDA": "3",
  "ADDR": "4",
  "VREG": "5",
  "VSS": "6",
  "REXT": "7",
  "ELE0": "8",
  "ELE1": "9",
  "ELE2": "10",
  "ELE3": "11",
  "LED0/ELE4": "12",
  "LED1/ELE5": "13",
  "LED2/ELE6": "14",
  "LED3/ELE7": "15",
  "LED4/ELE8": "16",
  "LED5/ELE9": "17",
  "LED6/ELE10": "18",
  "LED7/ELE11": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{IRQ}": "open_collector", SCL: "input", SDA: "bidirectional", ADDR: "input", VREG: "passive", VSS: "power_in", REXT: "passive", ELE0: "passive", ELE1: "passive", ELE2: "passive", ELE3: "passive", "LED0/ELE4": "passive", "LED1/ELE5": "passive", "LED2/ELE6": "passive", "LED3/ELE7": "passive", "LED4/ELE8": "passive", "LED5/ELE9": "passive", "LED6/ELE10": "passive", "LED7/ELE11": "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:MPR121QR2";
  override referencePrefix = "U";
}

/**
 * Dual capacitive touch/proximity switch with auto-calibration, TSSOP-16
 *
 * KiCad symbol: `Sensor_Touch:PCA8886`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA8886.pdf
 * Keywords: NXP capacitive touch sensor auto-calibration.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class PCA8886 extends Component.withPins({
  "IN1": "1",
  "TYPE1": "2",
  "CPC1": "3",
  "VSS1": "4",
  "VDD1": "13",
  "OUT1": "14",
  "CLIN1": "15",
  "VDD(int)1": "16",
  "IN2": "5",
  "TYPE2": "6",
  "CPC2": "7",
  "VSS2": "8",
  "VDD2": "9",
  "OUT2": "10",
  "CLIN2": "11",
  "VDD(int)2": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", TYPE1: "input", CPC1: "bidirectional", VSS1: "power_in", VDD1: "power_in", OUT1: "output", CLIN1: "bidirectional", "VDD(int)1": "power_out", IN2: "input", TYPE2: "input", CPC2: "bidirectional", VSS2: "power_in", VDD2: "power_in", OUT2: "output", CLIN2: "bidirectional", "VDD(int)2": "power_out", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:PCA8886";
  override referencePrefix = "U";
}

/**
 * Capacitive touch/proximity switch with auto-calibration, SOIC-8/WLCSP-8
 *
 * KiCad symbol: `Sensor_Touch:PCF8883`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, NXP*WLCSP*PCF8883*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCF8883.pdf
 * Keywords: NXP capacitive touch sensor auto-calibration.
 */
export class PCF8883 extends Component.withPins({
  "IN": "1",
  "TYPE": "2",
  "CPC": "3",
  "VSS": "4",
  "VDD": "5",
  "OUT": "6",
  "CLIN": "7",
  "VDD(int)": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", TYPE: "input", CPC: "bidirectional", VSS: "power_in", VDD: "power_in", OUT: "output", CLIN: "bidirectional", "VDD(int)": "power_out", ...opts.pinTypes } });
  }
  override schema = "Sensor_Touch:PCF8883";
  override referencePrefix = "U";
}
