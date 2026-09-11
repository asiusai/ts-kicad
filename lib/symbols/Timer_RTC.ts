// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Real-Time Clock, I2C Interface, 3 GPO, QFN-16
 *
 * KiCad symbol: `Timer_RTC:AB0805`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://abracon.com/Precisiontiming/AB08X5-RTC.PDF
 * Keywords: rtc.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class AB0805 extends Component.withPins({
  "NC_1": "1",
  "WDI": "2",
  "NC_3": "3",
  "~{IRQ2}": "4",
  "VBAT": "5",
  "SDA": "6",
  "SCL": "7",
  "NC_8": "8",
  "VSS_9": "9",
  "EXTI": "10",
  "FOUT/~{IRQ}": "11",
  "~{TIRQ}": "12",
  "VCC": "13",
  "AF": "14",
  "XO": "15",
  "XI": "16",
  "VSS_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", WDI: "input", NC_3: "no_connect", "~{IRQ2}": "open_collector", VBAT: "power_in", SDA: "bidirectional", SCL: "input", NC_8: "no_connect", VSS_9: "power_in", EXTI: "input", "FOUT/~{IRQ}": "open_collector", "~{TIRQ}": "open_collector", VCC: "power_in", AF: "passive", XO: "output", XI: "input", VSS_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:AB0805";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI Interface, 2 GPO, QFN-16
 *
 * KiCad symbol: `Timer_RTC:AB0815`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://abracon.com/Precisiontiming/AB08X5-RTC.PDF
 * Keywords: rtc.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class AB0815 extends Component.withPins({
  "NC_1": "1",
  "WDI": "2",
  "NC_3": "3",
  "~{IRQ2}": "4",
  "VBAT": "5",
  "SDO": "6",
  "SCL": "7",
  "NC_8": "8",
  "SDI": "9",
  "EXTI": "10",
  "FOUT/~{IRQ}": "11",
  "~{CE}": "12",
  "VCC": "13",
  "AF": "14",
  "XO": "15",
  "XI": "16",
  "VSS": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", WDI: "input", NC_3: "no_connect", "~{IRQ2}": "open_collector", VBAT: "power_in", SDO: "output", SCL: "input", NC_8: "no_connect", SDI: "input", EXTI: "input", "FOUT/~{IRQ}": "open_collector", "~{CE}": "input", VCC: "power_in", AF: "passive", XO: "output", XI: "input", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:AB0815";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C Interface, 4 GPO, QFN-16
 *
 * KiCad symbol: `Timer_RTC:AB1805`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://abracon.com/Precisiontiming/AB18X5-RTC.pdf
 * Keywords: rtc.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class AB1805 extends Component.withPins({
  "~{RST}": "1",
  "WDI": "2",
  "~{EXTR}": "3",
  "~{IRQ2}": "4",
  "VBAT": "5",
  "SDA": "6",
  "SCL": "7",
  "CLKOUT/~{IRQ3}": "8",
  "VSS_9": "9",
  "EXTI": "10",
  "FOUT/~{IRQ}": "11",
  "~{TIRQ}": "12",
  "VCC": "13",
  "AF": "14",
  "XO": "15",
  "XI": "16",
  "VSS_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "open_collector", WDI: "input", "~{EXTR}": "input", "~{IRQ2}": "open_collector", VBAT: "power_in", SDA: "bidirectional", SCL: "input", "CLKOUT/~{IRQ3}": "output", VSS_9: "power_in", EXTI: "input", "FOUT/~{IRQ}": "open_collector", "~{TIRQ}": "open_collector", VCC: "power_in", AF: "passive", XO: "output", XI: "input", VSS_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:AB1805";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI Interface, 3 GPO, QFN-16
 *
 * KiCad symbol: `Timer_RTC:AB1815`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://abracon.com/Precisiontiming/AB18X5-RTC.pdf
 * Keywords: rtc.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class AB1815 extends Component.withPins({
  "~{RST}": "1",
  "WDI": "2",
  "~{EXTR}": "3",
  "~{IRQ2}": "4",
  "VBAT": "5",
  "SDO": "6",
  "SCL": "7",
  "CLKOUT/~{IRQ3}": "8",
  "SDI": "9",
  "EXTI": "10",
  "FOUT/~{IRQ}": "11",
  "~{CE}": "12",
  "VCC": "13",
  "AF": "14",
  "XO": "15",
  "XI": "16",
  "VSS": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "open_collector", WDI: "input", "~{EXTR}": "input", "~{IRQ2}": "open_collector", VBAT: "power_in", SDO: "output", SCL: "input", "CLKOUT/~{IRQ3}": "output", SDI: "input", EXTI: "input", "FOUT/~{IRQ}": "open_collector", "~{CE}": "input", VCC: "power_in", AF: "passive", XO: "output", XI: "input", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:AB1815";
  override referencePrefix = "U";
}

/**
 * Serial, I2C Real-time clock, Trickle charger, 3V to 3.6V VCC, -40°C to +85°C, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:BQ32000`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq32000.pdf
 * Keywords: RTC, I2C Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class BQ32000 extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBACK": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "~{IRQ}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "input", VBACK: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", "~{IRQ}": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:BQ32000";
  override referencePrefix = "U";
}

/**
 * Serial, I2C Real-time clock, 3V to 3.6V VCC, -40°C to +85°C, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:BQ32002`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq32002.pdf
 * Keywords: RTC, I2C Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class BQ32002 extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBACK": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "~{IRQ}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "input", VBACK: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", "~{IRQ}": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:BQ32002";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, 0°C to +70°C, DIP-8
 *
 * KiCad symbol: `Timer_RTC:DS1302+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DS1302_ extends Component.withPins({
  "VCC2": "1",
  "X1": "2",
  "X2": "3",
  "GND": "4",
  "CE": "5",
  "I/O": "6",
  "SCLK": "7",
  "VCC1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC2: "power_in", X1: "input", X2: "input", GND: "power_in", CE: "input", "I/O": "bidirectional", SCLK: "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1302+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, -40°C to +85°C, DIP-8
 *
 * KiCad symbol: `Timer_RTC:DS1302N+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DS1302N_ extends Component.withPins({
  "VCC2": "1",
  "X1": "2",
  "X2": "3",
  "GND": "4",
  "CE": "5",
  "I/O": "6",
  "SCLK": "7",
  "VCC1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC2: "power_in", X1: "input", X2: "input", GND: "power_in", CE: "input", "I/O": "bidirectional", SCLK: "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1302N+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, 0°C to +70°C, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Timer_RTC:DS1302S+`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class DS1302S_ extends Component.withPins({
  "VCC2": "1",
  "X1": "2",
  "X2": "3",
  "GND": "4",
  "CE": "5",
  "I/O": "6",
  "SCLK": "7",
  "VCC1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC2: "power_in", X1: "input", X2: "input", GND: "power_in", CE: "input", "I/O": "bidirectional", SCLK: "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1302S+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, -40°C to +85°C, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Timer_RTC:DS1302SN+`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class DS1302SN_ extends Component.withPins({
  "VCC2": "1",
  "X1": "2",
  "X2": "3",
  "GND": "4",
  "CE": "5",
  "I/O": "6",
  "SCLK": "7",
  "VCC1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC2: "power_in", X1: "input", X2: "input", GND: "power_in", CE: "input", "I/O": "bidirectional", SCLK: "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1302SN+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, 0°C to +70°C, SOIC-8 (150 mil)
 *
 * KiCad symbol: `Timer_RTC:DS1302Z+`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS1302Z_ extends Component.withPins({
  "VCC2": "1",
  "X1": "2",
  "X2": "3",
  "GND": "4",
  "CE": "5",
  "I/O": "6",
  "SCLK": "7",
  "VCC1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC2: "power_in", X1: "input", X2: "input", GND: "power_in", CE: "input", "I/O": "bidirectional", SCLK: "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1302Z+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, -40°C to +85°C, SOIC-8 (150 mil)
 *
 * KiCad symbol: `Timer_RTC:DS1302ZN+`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS1302ZN_ extends Component.withPins({
  "VCC2": "1",
  "X1": "2",
  "X2": "3",
  "GND": "4",
  "CE": "5",
  "I/O": "6",
  "SCLK": "7",
  "VCC1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC2: "power_in", X1: "input", X2: "input", GND: "power_in", CE: "input", "I/O": "bidirectional", SCLK: "input", VCC1: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1302ZN+";
  override referencePrefix = "U";
}

/**
 * 64 x 8, Serial, I2C Real-time clock, 4.5V to 5.5V VCC, 0°C to +70°C, DIP-8
 *
 * KiCad symbol: `Timer_RTC:DS1307+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
 * Keywords: RTC, Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DS1307_ extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "SQW/OUT": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "input", VBAT: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", "SQW/OUT": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1307+";
  override referencePrefix = "U";
}

/**
 * 64 x 8, Serial, I2C Real-time clock, 4.5V to 5.5V VCC, -40°C to +85°C, DIP-8
 *
 * KiCad symbol: `Timer_RTC:DS1307N+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
 * Keywords: RTC, Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DS1307N_ extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "SQW/OUT": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "input", VBAT: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", "SQW/OUT": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1307N+";
  override referencePrefix = "U";
}

/**
 * 64 x 8, Serial, I2C Real-time clock, 4.5V to 5.5V VCC, 0°C to +70°C, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:DS1307Z+`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
 * Keywords: RTC, I2C Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS1307Z_ extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "SQW/OUT": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "input", VBAT: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", "SQW/OUT": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1307Z+";
  override referencePrefix = "U";
}

/**
 * 64 x 8, Serial, I2C Real-time clock, 4.5V to 5.5V VCC, -40°C to +85°C, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:DS1307ZN+`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
 * Keywords: RTC, I2C Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS1307ZN_ extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "SQW/OUT": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "input", VBAT: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", "SQW/OUT": "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1307ZN+";
  override referencePrefix = "U";
}

/**
 * Elapsed Time Counter, -40 to +85 C, 2.5V to 5.5V VCC, DIP-8, SO-8
 *
 * KiCad symbol: `Timer_RTC:DS1602`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SO*5.3x6.2mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1602.pdf
 * Keywords: Elapsed Time Counter.
 */
export class DS1602 extends Component.withPins({
  "~{RST}": "1",
  "DQ": "2",
  "CLK": "3",
  "GND": "4",
  "VBAT": "5",
  "XTAL2": "6",
  "XTAL1": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", DQ: "bidirectional", CLK: "input", GND: "power_in", VBAT: "power_in", XTAL2: "passive", XTAL1: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS1602";
  override referencePrefix = "U";
}

/**
 * Extremely Accurate I2C-Integrated RTC/TCXO/Crystal SOIC-16
 *
 * KiCad symbol: `Timer_RTC:DS3231M`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS3231.pdf
 * Keywords: RTC TCXO Realtime Time Clock Crystal Oscillator I2C.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class DS3231M extends Component.withPins({
  "32KHZ": "1",
  "VCC": "2",
  "~{INT}/SQW": "3",
  "~{RST}": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "VBAT": "14",
  "SDA": "15",
  "SCL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "32KHZ": "open_collector", VCC: "power_in", "~{INT}/SQW": "open_collector", "~{RST}": "bidirectional", GND_5: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", GND_13: "power_in", VBAT: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS3231M";
  override referencePrefix = "U";
}

/**
 * ±5ppm, I2C Real-Time Clock SOIC-8
 *
 * KiCad symbol: `Timer_RTC:DS3231MZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS3231M.pdf
 * Keywords: RTC TCXO Realtime Time Clock MEMS I2C.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS3231MZ extends Component.withPins({
  "32KHZ": "1",
  "VCC": "2",
  "~{INT}/SQW": "3",
  "~{RST}": "4",
  "GND": "5",
  "VBAT": "6",
  "SDA": "7",
  "SCL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "32KHZ": "open_collector", VCC: "power_in", "~{INT}/SQW": "open_collector", "~{RST}": "bidirectional", GND: "power_in", VBAT: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS3231MZ";
  override referencePrefix = "U";
}

/**
 * ±5ppm, I2C Real-Time Clock with SRAM SOIC-8
 *
 * KiCad symbol: `Timer_RTC:DS3232M`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS3232M.pdf
 * Keywords: RTC TCXO Realtime Time Clock MEMS SRAM I2C.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS3232M extends Component.withPins({
  "32KHZ": "1",
  "VCC": "2",
  "~{INT}/SQW": "3",
  "~{RST}": "4",
  "GND": "5",
  "VBAT": "6",
  "SDA": "7",
  "SCL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "32KHZ": "output", VCC: "power_in", "~{INT}/SQW": "open_collector", "~{RST}": "bidirectional", GND: "power_in", VBAT: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:DS3232M";
  override referencePrefix = "U";
}

/**
 * Low-power I2C RTC with alarm interrupt QFN
 *
 * KiCad symbol: `Timer_RTC:M41T62Q`. Reference prefix: `U`.
 * Footprint filters: QFN*16*1EP*3x3mm*P0.5mm*EP1.8x1.8mm*.
 * @see http://www.st.com/resource/en/datasheet/m41t62.pdf
 * Keywords: I2C RTC Alarm interrupt.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 */
export class M41T62Q extends Component.withPins({
  "XI": "1",
  "XO": "2",
  "SQW": "4",
  "VSS": "5",
  "SDA": "9",
  "SCL": "10",
  "~{IRQ}/OUT": "11",
  "VCC": "14",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XI: "input", XO: "input", SQW: "output", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{IRQ}/OUT": "output", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:M41T62Q";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, TDFN-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xMNY`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.36x1.46mm.
 */
export class MCP7940N_xMNY extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "MFP": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", MFP: "open_collector", VCC: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP7940N-xMNY";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, MSOP-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xMS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 */
export class MCP7940N_xMS extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "MFP": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP7940N-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, DIP-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xP`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 */
export class MCP7940N_xP extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "MFP": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP7940N-xP";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 */
export class MCP7940N_xSN extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "MFP": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP7940N-xSN";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, TSSOP-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xST`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 */
export class MCP7940N_xST extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "MFP": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP7940N-xST";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 1Kbit EEPROM, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79510-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MCP79510_xMS extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "~{CS}": "4",
  "VSS": "5",
  "SI": "6",
  "SO": "7",
  "SCK": "8",
  "MFP": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", "~{CS}": "input", VSS: "power_in", SI: "input", SO: "output", SCK: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP79510-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 1Kbit EEPROM, Unique ID EUI-48, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79511-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MCP79511_xMS extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "~{CS}": "4",
  "VSS": "5",
  "SI": "6",
  "SO": "7",
  "SCK": "8",
  "MFP": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", "~{CS}": "input", VSS: "power_in", SI: "input", SO: "output", SCK: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP79511-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 1Kbit EEPROM, Unique ID EUI-64, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79512-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MCP79512_xMS extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "~{CS}": "4",
  "VSS": "5",
  "SI": "6",
  "SO": "7",
  "SCK": "8",
  "MFP": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", "~{CS}": "input", VSS: "power_in", SI: "input", SO: "output", SCK: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP79512-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 2Kbit EEPROM, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79520-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MCP79520_xMS extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "~{CS}": "4",
  "VSS": "5",
  "SI": "6",
  "SO": "7",
  "SCK": "8",
  "MFP": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", "~{CS}": "input", VSS: "power_in", SI: "input", SO: "output", SCK: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP79520-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 2Kbit EEPROM, Unique ID EUI-48, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79521-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MCP79521_xMS extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "~{CS}": "4",
  "VSS": "5",
  "SI": "6",
  "SO": "7",
  "SCK": "8",
  "MFP": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", "~{CS}": "input", VSS: "power_in", SI: "input", SO: "output", SCK: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP79521-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 2Kbit EEPROM, Unique ID EUI-64, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79522-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MCP79522_xMS extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "VBAT": "3",
  "~{CS}": "4",
  "VSS": "5",
  "SI": "6",
  "SO": "7",
  "SCK": "8",
  "MFP": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X1: "input", X2: "output", VBAT: "power_in", "~{CS}": "input", VSS: "power_in", SI: "input", SO: "output", SCK: "input", MFP: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:MCP79522-xMS";
  override referencePrefix = "U";
}

/**
 * Nano-power highly accurate RTC with integrated quartz crystal for automotive, I2C / SPI interface, LSON-16
 *
 * KiCad symbol: `Timer_RTC:PCA2131`. Reference prefix: `U`.
 * Footprint filters: *LSON*3.5x4.5mm?P0.5mm?EP2x3.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA2131.pdf
 * Keywords: CMOS Real-Time-Clock PCA2131TF/Q900.
 * Default footprint: Package_SON:NXP_LSON-16-1EP_3.5x4.5mm_P0.5mm_EP2x3.8mm.
 */
export class PCA2131 extends Component.withPins({
  "IFS": "1",
  "SCL": "2",
  "SDI": "3",
  "SDO": "4",
  "SDA/~{CE}": "5",
  "CLKOUT": "6",
  "V_{SS}": "7",
  "~{TS1}": "8",
  "~{TS2}": "9",
  "~{TS3}": "10",
  "~{TS4}": "11",
  "~{INTB}": "12",
  "~{INTA}": "13",
  "BBS": "14",
  "V_{DD}": "15",
  "V_{BAT}": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IFS: "input", SCL: "input", SDI: "input", SDO: "tri_state", "SDA/~{CE}": "bidirectional", CLKOUT: "output", "V_{SS}": "power_in", "~{TS1}": "input", "~{TS2}": "input", "~{TS3}": "input", "~{TS4}": "input", "~{INTB}": "open_collector", "~{INTA}": "open_collector", BBS: "power_out", "V_{DD}": "power_in", "V_{BAT}": "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCA2131";
  override referencePrefix = "U";
}

/**
 * I2C Real-Time Clock Calendar w/ Alarm, DFN-10
 *
 * KiCad symbol: `Timer_RTC:PCF85063ATL`. Reference prefix: `U`.
 * Footprint filters: DFN*2.6x2.6mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85063A.pdf
 * Keywords: RTC I2C.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_2.6x2.6mm_P0.5mm_EP1.3x2.2mm.
 */
export class PCF85063ATL extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "CLKOE": "3",
  "~{INT}": "4",
  "VSS": "5",
  "SDA": "6",
  "SCL": "7",
  "NC": "8",
  "CLKOUT": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", CLKOE: "input", "~{INT}": "output", VSS: "power_in", SDA: "bidirectional", SCL: "input", NC: "no_connect", CLKOUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF85063ATL";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:PCF8523T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8523.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PCF8523T extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{INT1}/CLKOUT": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{INT1}/CLKOUT": "open_collector", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF8523T";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, HVSON-8
 *
 * KiCad symbol: `Timer_RTC:PCF8523TK`. Reference prefix: `U`.
 * Footprint filters: HVSON*1EP*4x4mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8523.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SON:HVSON-8-1EP_4x4mm_P0.8mm_EP2.2x3.1mm.
 */
export class PCF8523TK extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBAT": "3",
  "VSS_4": "4",
  "SDA": "5",
  "SCL": "6",
  "~{INT1}/CLKOUT": "7",
  "VDD": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", VBAT: "power_in", VSS_4: "power_in", SDA: "bidirectional", SCL: "input", "~{INT1}/CLKOUT": "open_collector", VDD: "power_in", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF8523TK";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, TSSOP-14
 *
 * KiCad symbol: `Timer_RTC:PCF8523TS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8523.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class PCF8523TS extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "NC_3": "3",
  "VBAT": "4",
  "VSS": "5",
  "NC_6": "6",
  "~{INT2}": "7",
  "CLKOUT": "8",
  "NC_9": "9",
  "SDA": "10",
  "SCL": "11",
  "NC_12": "12",
  "~{INT1}/CLKOUT": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", NC_3: "no_connect", VBAT: "power_in", VSS: "power_in", NC_6: "no_connect", "~{INT2}": "open_collector", CLKOUT: "open_collector", NC_9: "no_connect", SDA: "bidirectional", SCL: "input", NC_12: "no_connect", "~{INT1}/CLKOUT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF8523TS";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with alarm function, battery switch-over, time stamp input, I2C bus, SO-8
 *
 * KiCad symbol: `Timer_RTC:PCF85263AT`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85263A.pdf
 * Keywords: RTC battery I2C.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PCF85263AT extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{INTA}": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{INTA}": "open_collector", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF85263AT";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with alarm function, battery switch-over, time stamp input, I2C bus, DFN-10
 *
 * KiCad symbol: `Timer_RTC:PCF85263ATL`. Reference prefix: `U`.
 * Footprint filters: DFN*2.6x2.6mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85263A.pdf
 * Keywords: RTC battery I2C.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_2.6x2.6mm_P0.5mm_EP1.3x2.2mm.
 */
export class PCF85263ATL extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBAT": "3",
  "TS": "4",
  "VSS": "5",
  "SDA": "6",
  "SCL": "7",
  "CLK": "8",
  "~{INTA}": "9",
  "VDD": "10",
  "PAD": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", VBAT: "power_in", TS: "bidirectional", VSS: "power_in", SDA: "bidirectional", SCL: "input", CLK: "output", "~{INTA}": "open_collector", VDD: "power_in", PAD: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF85263ATL";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with alarm function, battery switch-over, time stamp input, I2C bus, TSSOP-8
 *
 * KiCad symbol: `Timer_RTC:PCF85263ATT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85263A.pdf
 * Keywords: RTC battery I2C.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class PCF85263ATT extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{INTA}": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{INTA}": "open_collector", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF85263ATT";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with alarm function, battery switch-over, time stamp input, I2C bus, TSSOP-10
 *
 * KiCad symbol: `Timer_RTC:PCF85263ATT1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85263A.pdf
 * Keywords: RTC battery I2C.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class PCF85263ATT1 extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBAT": "3",
  "TS": "4",
  "VSS": "5",
  "SDA": "6",
  "SCL": "7",
  "CLK": "8",
  "~{INTA}": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", VBAT: "power_in", TS: "bidirectional", VSS: "power_in", SDA: "bidirectional", SCL: "input", CLK: "output", "~{INTA}": "open_collector", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF85263ATT1";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with 64 byte RAM, alarm function, battery switch-over, time stamp input, I2C bus, TSSOP-8
 *
 * KiCad symbol: `Timer_RTC:PCF85363ATT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85363A.pdf
 * Keywords: RTC RAM battery I2C.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class PCF85363ATT extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBAT": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{INTA}": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", VBAT: "power_in", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{INTA}": "open_collector", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF85363ATT";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with 64 byte RAM, alarm function, battery switch-over, time stamp input, I2C bus, TSSOP-10
 *
 * KiCad symbol: `Timer_RTC:PCF85363ATT1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85363A.pdf
 * Keywords: RTC RAM battery I2C.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class PCF85363ATT1 extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "VBAT": "3",
  "TS": "4",
  "VSS": "5",
  "SDA": "6",
  "SCL": "7",
  "CLK": "8",
  "~{INTA}": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", VBAT: "power_in", TS: "bidirectional", VSS: "power_in", SDA: "bidirectional", SCL: "input", CLK: "output", "~{INTA}": "open_collector", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF85363ATT1";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:PCF8563T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8563.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PCF8563T extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "~{INT}": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "CLKO": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", "~{INT}": "output", VSS: "power_in", SDA: "bidirectional", SCL: "input", CLKO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF8563T";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, TSSOP-8
 *
 * KiCad symbol: `Timer_RTC:PCF8563TS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8563.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PCF8563TS extends Component.withPins({
  "OSCI": "1",
  "OSCO": "2",
  "~{INT}": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "CLKO": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSCI: "input", OSCO: "output", "~{INT}": "output", VSS: "power_in", SDA: "bidirectional", SCL: "input", CLKO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:PCF8563TS";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, Extreme Low Power, MicroCrystal C3
 *
 * KiCad symbol: `Timer_RTC:RV-1805-C3`. Reference prefix: `U`.
 * Footprint filters: RTC*SMD*MicroCrystal*C3*2.5x3.7mm*.
 * @see https://www.microcrystal.com/fileadmin/Media/Products/RTC/Datasheet/RV-1805-C3.pdf
 * Keywords: Low Power RTC I2C.
 * Default footprint: Package_SON:RTC_SMD_MicroCrystal_C3_2.5x3.7mm.
 */
export class RV_1805_C3 extends Component.withPins({
  "VDD": "1",
  "Cap_RC": "2",
  "CLK/~{INT}": "3",
  "SCL": "4",
  "SDA": "5",
  "VSS": "6",
  "VBACKUP": "7",
  "PSW": "8",
  "WDI": "9",
  "~{RST}": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", Cap_RC: "passive", "CLK/~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VSS: "power_in", VBACKUP: "power_in", PSW: "open_collector", WDI: "input", "~{RST}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:RV-1805-C3";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, Extreme Low Power, 1.1 V to 5.5 V, MicroCrystal C7
 *
 * KiCad symbol: `Timer_RTC:RV-3028-C7`. Reference prefix: `U`.
 * Footprint filters: MicroCrystal*C7*1.5x3.2mm*.
 * @see https://www.microcrystal.com/fileadmin/Media/Products/RTC/Datasheet/RV-3028-C7.pdf
 * Keywords: Low-power RTC I2C.
 * Default footprint: Package_SON:MicroCrystal_C7_SON-8_1.5x3.2mm_P0.9mm.
 */
export class RV_3028_C7 extends Component.withPins({
  "CLKOUT": "1",
  "~{INT}": "2",
  "SCL": "3",
  "SDA": "4",
  "VSS": "5",
  "VBACKUP": "6",
  "VDD": "7",
  "EVI": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKOUT: "output", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VSS: "power_in", VBACKUP: "power_in", VDD: "power_in", EVI: "input", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:RV-3028-C7";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, Low Power, 1.2 V to 5.5 V, MicroCrystal C3
 *
 * KiCad symbol: `Timer_RTC:RV-8523-C3`. Reference prefix: `U`.
 * Footprint filters: RTC*SMD*MicroCrystal*C3*2.5x3.7mm*.
 * @see https://www.microcrystal.com/fileadmin/Media/Products/RTC/Datasheet/RV-8523-C3.pdf
 * Keywords: Low Power RTC I2C.
 * Default footprint: Package_SON:RTC_SMD_MicroCrystal_C3_2.5x3.7mm.
 */
export class RV_8523_C3 extends Component.withPins({
  "VDD": "1",
  "~{INT_1}": "2",
  "SCL": "3",
  "SDA": "4",
  "CLKOUT": "5",
  "~{INT_2}": "6",
  "VSS": "7",
  "VBACKUP": "8",
  "NC_9": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "~{INT_1}": "open_collector", SCL: "input", SDA: "bidirectional", CLKOUT: "open_collector", "~{INT_2}": "open_collector", VSS: "power_in", VBACKUP: "power_in", NC_9: "no_connect", NC_10: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:RV-8523-C3";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface built-in crystal , SON-10
 *
 * KiCad symbol: `Timer_RTC:RX8901CE`. Reference prefix: `U`.
 * Footprint filters: *EPSON*CE*USON*10*USON*10*3.2x2.5mm*P0.7mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=app_RX8901CE&lang=en
 * Keywords: I2C RTC.
 * Default footprint: Package_SON:EPSON_CE-USON-10_USON-10_3.2x2.5mm_P0.7mm.
 */
export class RX8901CE extends Component.withPins({
  "V_{DD}": "1",
  "V_{OUT}": "2",
  "V_{BAT}": "3",
  "FOUT/EVIN3": "4",
  "SCL": "5",
  "EVIN1": "6",
  "SDA": "7",
  "~{INT}": "8",
  "GND": "9",
  "EVIN2/FOE": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{OUT}": "power_out", "V_{BAT}": "power_in", "FOUT/EVIN3": "bidirectional", SCL: "input", EVIN1: "passive", SDA: "bidirectional", "~{INT}": "open_collector", GND: "power_in", "EVIN2/FOE": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Timer_RTC:RX8901CE";
  override referencePrefix = "U";
}
