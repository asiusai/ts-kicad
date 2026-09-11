// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Haptic driver for solenoids and voice coils, up to 3A output, TSSOP-16
 *
 * KiCad symbol: `Driver:DRV2510-Q1`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv2510-q1.pdf
 * Keywords: driver haptic solenoid coil.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask3x3mm_ThermalVias.
 */
export class DRV2510_Q1 extends Component.withPins({
  "GND_1": "1",
  "EN": "2",
  "REG": "3",
  "SDA": "4",
  "SCL": "5",
  "IN+": "6",
  "IN-": "7",
  "STDBY": "8",
  "GND_9": "9",
  "BSTN": "10",
  "OUT-": "11",
  "OUT+": "12",
  "BSTP": "13",
  "INTZ": "14",
  "VDD": "15",
  "GND_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", EN: "input", REG: "passive", SDA: "bidirectional", SCL: "input", "IN+": "input", "IN-": "input", STDBY: "input", GND_9: "passive", BSTN: "passive", "OUT-": "power_out", "OUT+": "power_out", BSTP: "passive", INTZ: "open_collector", VDD: "power_in", GND_16: "passive", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver:DRV2510-Q1";
  override referencePrefix = "U";
}

/**
 * Haptic driver for LRAs and ERMs with effect library, 2-5.2V, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Driver:DRV2605LDGS`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv2605l.pdf
 * Keywords: haptic driver i2c.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class DRV2605LDGS extends Component.withPins({
  "REG": "1",
  "SCL": "2",
  "SDA": "3",
  "IN/TRIG": "4",
  "EN": "5",
  "VDD/NC": "6",
  "OUT+": "7",
  "GND": "8",
  "OUT-": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REG: "passive", SCL: "input", SDA: "bidirectional", "IN/TRIG": "input", EN: "input", "VDD/NC": "power_in", "OUT+": "output", GND: "power_in", "OUT-": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver:DRV2605LDGS";
  override referencePrefix = "U";
}

/**
 * 8-Channel Serial Interface Low-Side Driver
 *
 * KiCad symbol: `Driver:DRV8860`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8860.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DRV8860 extends Component.withPins({
  "VM": "1",
  "DIN": "2",
  "SCLK": "3",
  "Latch": "4",
  "GND": "5",
  "DOUT": "6",
  "FAULT": "7",
  "ENABLE": "8",
  "OUT8": "9",
  "OUT7": "10",
  "OUT6": "11",
  "OUT5": "12",
  "OUT4": "13",
  "OUT3": "14",
  "OUT2": "15",
  "OUT1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VM: "power_in", DIN: "input", SCLK: "input", Latch: "input", GND: "power_in", DOUT: "output", FAULT: "open_collector", ENABLE: "input", OUT8: "output", OUT7: "output", OUT6: "output", OUT5: "output", OUT4: "output", OUT3: "output", OUT2: "output", OUT1: "output", ...opts.pinTypes } });
  }
  override schema = "Driver:DRV8860";
  override referencePrefix = "U";
}

/**
 * 8-Channel Serial Interface Low-Side Driver
 *
 * KiCad symbol: `Driver:DRV8860_PWPR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8860.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:TSSOP-16-1EP_4.4x5mm_P0.65mm.
 */
export class DRV8860_PWPR extends Component.withPins({
  "VM": "1",
  "DIN": "2",
  "SCLK": "3",
  "Latch": "4",
  "GND": "5",
  "DOUT": "6",
  "FAULT": "7",
  "ENABLE": "8",
  "OUT8": "9",
  "OUT7": "10",
  "OUT6": "11",
  "OUT5": "12",
  "OUT4": "13",
  "OUT3": "14",
  "OUT2": "15",
  "OUT1": "16",
  "PAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VM: "power_in", DIN: "input", SCLK: "input", Latch: "input", GND: "power_in", DOUT: "output", FAULT: "open_collector", ENABLE: "input", OUT8: "output", OUT7: "output", OUT6: "output", OUT5: "output", OUT4: "output", OUT3: "output", OUT2: "output", OUT1: "output", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver:DRV8860_PWPR";
  override referencePrefix = "U";
}

/**
 * Power Driver for Peltier TEC Modules, ±3A, HTSSOP-28
 *
 * KiCad symbol: `Driver:MAX1968xUI`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1968-MAX1969.pdf
 * Keywords: thermoelectric cooler.
 * Default footprint: Package_SO:HTSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.85x5.4mm.
 */
export class MAX1968xUI extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "CTLI": "3",
  "REF": "4",
  "PGND_5": "5",
  "LX2_6": "6",
  "PGND_7": "7",
  "LX2_8": "8",
  "PVDD2_9": "9",
  "LX2_10": "10",
  "PVDD2_11": "11",
  "FREQ": "12",
  "ITEC": "13",
  "OS2": "14",
  "OS1": "15",
  "CS": "16",
  "~{SHDN}": "17",
  "PVDD1_18": "18",
  "LX1_19": "19",
  "PVDD1_20": "20",
  "LX1_21": "21",
  "PGND_22": "22",
  "LX1_23": "23",
  "PGND_24": "24",
  "COMP": "25",
  "MAXIN": "26",
  "MAXIP": "27",
  "MAXV": "28",
  "GND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", CTLI: "input", REF: "output", PGND_5: "power_in", LX2_6: "power_out", PGND_7: "passive", LX2_8: "passive", PVDD2_9: "power_in", LX2_10: "passive", PVDD2_11: "passive", FREQ: "input", ITEC: "output", OS2: "input", OS1: "input", CS: "input", "~{SHDN}": "input", PVDD1_18: "power_in", LX1_19: "power_out", PVDD1_20: "passive", LX1_21: "passive", PGND_22: "passive", LX1_23: "passive", PGND_24: "passive", COMP: "passive", MAXIN: "input", MAXIP: "input", MAXV: "input", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver:MAX1968xUI";
  override referencePrefix = "U";
}

/**
 * Power Driver for Peltier TEC Modules, 6A, HTSSOP-28
 *
 * KiCad symbol: `Driver:MAX1969xUI`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1968-MAX1969.pdf
 * Keywords: thermoelectric cooler.
 * Default footprint: Package_SO:HTSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.85x5.4mm.
 */
export class MAX1969xUI extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "CTLI": "3",
  "REF": "4",
  "PGND_5": "5",
  "LX2_6": "6",
  "PGND_7": "7",
  "LX2_8": "8",
  "PVDD2_9": "9",
  "LX2_10": "10",
  "PVDD2_11": "11",
  "FREQ": "12",
  "ITEC": "13",
  "OS2": "14",
  "OS1": "15",
  "CS": "16",
  "~{SHDN}": "17",
  "PVDD1_18": "18",
  "LX1_19": "19",
  "PVDD1_20": "20",
  "LX1_21": "21",
  "PGND_22": "22",
  "LX1_23": "23",
  "PGND_24": "24",
  "COMP": "25",
  "MAXIN": "26",
  "MAXIP": "27",
  "MAXV": "28",
  "GND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", CTLI: "input", REF: "output", PGND_5: "power_in", LX2_6: "power_out", PGND_7: "passive", LX2_8: "passive", PVDD2_9: "power_in", LX2_10: "passive", PVDD2_11: "passive", FREQ: "input", ITEC: "output", OS2: "input", OS1: "input", CS: "input", "~{SHDN}": "input", PVDD1_18: "power_in", LX1_19: "power_out", PVDD1_20: "passive", LX1_21: "passive", PGND_22: "passive", LX1_23: "passive", PGND_24: "passive", COMP: "passive", MAXIN: "input", MAXIP: "input", MAXV: "input", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver:MAX1969xUI";
  override referencePrefix = "U";
}

/**
 * 8-Channel Serial Interface Low-Side Driver, TSSOP-20
 *
 * KiCad symbol: `Driver:MAX4820xUP`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX4820-MAX4821.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP2.85x4mm.
 */
export class MAX4820xUP extends Component.withPins({
  "GND_9": "9",
  "OUT3": "17",
  "GND_18": "18",
  "OUT2": "19",
  "OUT1": "20",
  "GND_21": "21",
  "VCC": "1",
  "~{SET}": "2",
  "~{RESET}": "3",
  "~{CS}": "4",
  "DIN": "5",
  "SCLK": "6",
  "DOUT": "7",
  "NC": "8",
  "OUT8": "10",
  "OUT7": "11",
  "GND_12": "12",
  "OUT6": "13",
  "OUT5": "14",
  "COM": "15",
  "OUT4": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_9: "power_in", OUT3: "open_collector", GND_18: "passive", OUT2: "open_collector", OUT1: "open_collector", GND_21: "passive", VCC: "power_in", "~{SET}": "input", "~{RESET}": "input", "~{CS}": "input", DIN: "input", SCLK: "input", DOUT: "output", NC: "no_connect", OUT8: "open_collector", OUT7: "open_collector", GND_12: "passive", OUT6: "open_collector", OUT5: "open_collector", COM: "passive", OUT4: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver:MAX4820xUP";
  override referencePrefix = "U";
}

/**
 * 8-Channel Parallel Interface Low-Side Driver, TSSOP-20
 *
 * KiCad symbol: `Driver:MAX4821xUP`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX4820-MAX4821.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP2.85x4mm.
 */
export class MAX4821xUP extends Component.withPins({
  "GND_9": "9",
  "OUT3": "17",
  "GND_18": "18",
  "OUT2": "19",
  "OUT1": "20",
  "GND_21": "21",
  "VCC": "1",
  "~{SET}": "2",
  "~{RESET}": "3",
  "~{CS}": "4",
  "LVL": "5",
  "A0": "6",
  "A1": "7",
  "A2": "8",
  "OUT8": "10",
  "OUT7": "11",
  "GND_12": "12",
  "OUT6": "13",
  "OUT5": "14",
  "COM": "15",
  "OUT4": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_9: "power_in", OUT3: "open_collector", GND_18: "passive", OUT2: "open_collector", OUT1: "open_collector", GND_21: "passive", VCC: "power_in", "~{SET}": "input", "~{RESET}": "input", "~{CS}": "input", LVL: "input", A0: "input", A1: "input", A2: "input", OUT8: "open_collector", OUT7: "open_collector", GND_12: "passive", OUT6: "open_collector", OUT5: "open_collector", COM: "passive", OUT4: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver:MAX4821xUP";
  override referencePrefix = "U";
}

/**
 * 8-CHANNEL RELAY DRIVER WITH INTEGRATED 5-V LDO AND ZERO-VOLT DETECTION TSSOP-20
 *
 * KiCad symbol: `Driver:TPL9201_TSSOP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*4.4x6.5mm*P0.65mm*ThermalVias*.
 * @see http://www.ti.com/lit/ds/symlink/tpl9201.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_ThermalVias.
 */
export class TPL9201_TSSOP extends Component.withPins({
  "ZVS": "1",
  "OUT1": "2",
  "OUT2": "3",
  "OUT3": "4",
  "OUT4": "5",
  "OUT5": "6",
  "OUT6": "7",
  "OUT7": "8",
  "OUT8": "9",
  "GND_10": "10",
  "GND_11": "11",
  "EN1": "12",
  "Rdelay": "13",
  "RST": "14",
  "MOSI": "15",
  "CS": "16",
  "SCLK": "17",
  "5Vout": "18",
  "Vin": "19",
  "SYN": "20",
  "PAD": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ZVS: "output", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", OUT5: "output", OUT6: "output", OUT7: "output", OUT8: "output", GND_10: "power_in", GND_11: "power_in", EN1: "input", Rdelay: "output", RST: "bidirectional", MOSI: "input", CS: "input", SCLK: "input", "5Vout": "power_out", Vin: "power_in", SYN: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver:TPL9201_TSSOP";
  override referencePrefix = "U";
}

/**
 * Direct Drive Ultrasonic Sensor IC with Logarithmic Amplifier, WQFN-20
 *
 * KiCad symbol: `Driver:TUSS4470`. Reference prefix: `U`.
 * Footprint filters: *WQFN*4x4mm?P0.5mm?EP2.7*x2.7*mm*.
 * @see https://www.ti.com/lit/ds/symlink/tuss4470.pdf
 * Keywords: Texas-Instruments SPI H-bridge TUSS4470TRTJT TUSS4470TRTJR.
 * Default footprint: Package_DFN_QFN:WQFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class TUSS4470 extends Component.withPins({
  "OUT3": "1",
  "DGND": "2",
  "~{CS}": "3",
  "SCLK": "4",
  "SDI": "5",
  "SDO": "6",
  "IO1": "7",
  "IO2": "8",
  "VOUT": "9",
  "VDD": "10",
  "INN": "11",
  "INP": "12",
  "SGND": "13",
  "GND": "14",
  "OUTA": "15",
  "OUTB": "16",
  "VDRV": "17",
  "FLT": "18",
  "OUT4": "19",
  "VPWR": "20",
  "EPAD": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT3: "output", DGND: "power_in", "~{CS}": "input", SCLK: "input", SDI: "input", SDO: "tri_state", IO1: "input", IO2: "input", VOUT: "output", VDD: "power_in", INN: "input", INP: "input", SGND: "power_in", GND: "power_in", OUTA: "tri_state", OUTB: "tri_state", VDRV: "power_in", FLT: "bidirectional", OUT4: "output", VPWR: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver:TUSS4470";
  override referencePrefix = "U";
}
