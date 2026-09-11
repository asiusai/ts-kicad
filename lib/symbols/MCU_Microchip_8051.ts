// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 12MHz, 2kB Flash, 128B SRAM, DIP-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89C2051-12P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0368.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class AT89C2051_12P extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89C2051-12P";
  override referencePrefix = "U";
}

/**
 * 12MHz, 2kB Flash, 128B SRAM, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89C2051-12S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0368.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class AT89C2051_12S extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89C2051-12S";
  override referencePrefix = "U";
}

/**
 * 24MHz, 2kB Flash, 128B SRAM, DIP-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89C2051-24P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0368.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class AT89C2051_24P extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89C2051-24P";
  override referencePrefix = "U";
}

/**
 * 24MHz, 2kB Flash, 128B SRAM, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89C2051-24S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0368.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class AT89C2051_24S extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89C2051-24S";
  override referencePrefix = "U";
}

/**
 * 12MHz, 4kB Flash, 128B SRAM, DIP-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89C4051-12P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc1001.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class AT89C4051_12P extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89C4051-12P";
  override referencePrefix = "U";
}

/**
 * 12MHz, 4kB Flash, 128B SRAM, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89C4051-12S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc1001.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class AT89C4051_12S extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89C4051-12S";
  override referencePrefix = "U";
}

/**
 * 24MHz, 4kB Flash, 128B SRAM, DIP-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89C4051-24P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc1001.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class AT89C4051_24P extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89C4051-24P";
  override referencePrefix = "U";
}

/**
 * 24MHz, 4kB Flash, 128B SRAM, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89C4051-24S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc1001.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class AT89C4051_24S extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89C4051-24S";
  override referencePrefix = "U";
}

/**
 * 24MHz, 2kB Flash, 256B SRAM, DIP-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89S2051-24P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc3390.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class AT89S2051_24P extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89S2051-24P";
  override referencePrefix = "U";
}

/**
 * 24MHz, 2kB Flash, 256B SRAM, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89S2051-24S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc3390.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class AT89S2051_24S extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89S2051-24S";
  override referencePrefix = "U";
}

/**
 * 24MHz, 4kB Flash, 256B SRAM, DIP-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89S4051-24P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc3390.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class AT89S4051_24P extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89S4051-24P";
  override referencePrefix = "U";
}

/**
 * 24MHz, 4kB Flash, 256B SRAM, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89S4051-24S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc3390.pdf
 * Keywords: MCS-51 8bit Flash Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class AT89S4051_24S extends Component.withPins({
  "RST/VPP": "1",
  "P3.0": "2",
  "P3.1": "3",
  "XTAL2": "4",
  "XTAL1": "5",
  "P3.2": "6",
  "P3.3": "7",
  "P3.4": "8",
  "P3.5": "9",
  "GND": "10",
  "P3.7": "11",
  "P1.0": "12",
  "P1.1": "13",
  "P1.2": "14",
  "P1.3": "15",
  "P1.4": "16",
  "P1.5": "17",
  "P1.6": "18",
  "P1.7": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RST/VPP": "input", "P3.0": "bidirectional", "P3.1": "bidirectional", XTAL2: "output", XTAL1: "input", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", GND: "power_in", "P3.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89S4051-24S";
  override referencePrefix = "U";
}

/**
 * 8-bit Microcontroller with 4K Bytes Flash, TQFP-44
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89x51xxA`. Reference prefix: `U`.
 * Footprint filters: ?QFP?44*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/doc2487.pdf
 * Keywords: Microcontroller 8051 TQFP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class AT89x51xxA extends Component.withPins({
  "P1.2": "42",
  "P1.5": "1",
  "P1.6": "2",
  "P1.7/SCK": "3",
  "RST": "4",
  "P3.0": "5",
  "NC_6": "6",
  "P3.1": "7",
  "P3.2": "8",
  "P3.3": "9",
  "P3.4": "10",
  "P3.5": "11",
  "P3.6": "12",
  "P3.7": "13",
  "XTAL2": "14",
  "XTAL1": "15",
  "GND_16": "16",
  "GND_17": "17",
  "P2.0/A8": "18",
  "P2.1/A9": "19",
  "P2.2/A10": "20",
  "P2.3/A11": "21",
  "P2.4/A12": "22",
  "P2.5/A13": "23",
  "P2.6/A14": "24",
  "P2.7/A15": "25",
  "~{PSEN}": "26",
  "ALE": "27",
  "NC_28": "28",
  "~{EA}/V_{pp}": "29",
  "P0.7/AD7": "30",
  "P0.6/AD6": "31",
  "P0.5/AD5": "32",
  "P0.4/AD4": "33",
  "P0.3/AD3": "34",
  "P0.2/AD2": "35",
  "P0.1/AD1": "36",
  "P0.0/AD0": "37",
  "V_{cc}": "38",
  "NC_39": "39",
  "P1.0": "40",
  "P1.1": "41",
  "P1.3": "43",
  "P1.4": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.2": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7/SCK": "bidirectional", RST: "input", "P3.0": "bidirectional", NC_6: "no_connect", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", XTAL2: "input", XTAL1: "input", GND_16: "power_in", GND_17: "passive", "P2.0/A8": "bidirectional", "P2.1/A9": "bidirectional", "P2.2/A10": "bidirectional", "P2.3/A11": "bidirectional", "P2.4/A12": "bidirectional", "P2.5/A13": "bidirectional", "P2.6/A14": "bidirectional", "P2.7/A15": "bidirectional", "~{PSEN}": "output", ALE: "output", NC_28: "no_connect", "~{EA}/V_{pp}": "input", "P0.7/AD7": "bidirectional", "P0.6/AD6": "bidirectional", "P0.5/AD5": "bidirectional", "P0.4/AD4": "bidirectional", "P0.3/AD3": "bidirectional", "P0.2/AD2": "bidirectional", "P0.1/AD1": "bidirectional", "P0.0/AD0": "bidirectional", "V_{cc}": "power_in", NC_39: "no_connect", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89x51xxA";
  override referencePrefix = "U";
}

/**
 * 8-bit Microcontroller with 4K Bytes Flash, PLCC-44
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89x51xxJ`. Reference prefix: `U`.
 * Footprint filters: PLCC?44*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/doc2487.pdf
 * Keywords: Microcontroller 8051 PLCC.
 * Default footprint: Package_LCC:PLCC-44.
 */
export class AT89x51xxJ extends Component.withPins({
  "P1.2": "4",
  "NC_1": "1",
  "P1.0": "2",
  "P1.1": "3",
  "P1.3": "5",
  "P1.4": "6",
  "P1.5": "7",
  "P1.6": "8",
  "P1.7/SCK": "9",
  "RST": "10",
  "P3.0": "11",
  "NC_12": "12",
  "P3.1": "13",
  "P3.2": "14",
  "P3.3": "15",
  "P3.4": "16",
  "P3.5": "17",
  "P3.6": "18",
  "P3.7": "19",
  "XTAL2": "20",
  "XTAL1": "21",
  "GND": "22",
  "NC_23": "23",
  "P2.0/A8": "24",
  "P2.1/A9": "25",
  "P2.2/A10": "26",
  "P2.3/A11": "27",
  "P2.4/A12": "28",
  "P2.5/A13": "29",
  "P2.6/A14": "30",
  "P2.7/A15": "31",
  "~{PSEN}": "32",
  "ALE": "33",
  "NC_34": "34",
  "~{EA}/V_{pp}": "35",
  "P0.7/AD7": "36",
  "P0.6/AD6": "37",
  "P0.5/AD5": "38",
  "P0.4/AD4": "39",
  "P0.3/AD3": "40",
  "P0.2/AD2": "41",
  "P0.1/AD1": "42",
  "P0.0/AD0": "43",
  "V_{cc}": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.2": "bidirectional", NC_1: "no_connect", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7/SCK": "bidirectional", RST: "input", "P3.0": "bidirectional", NC_12: "no_connect", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", XTAL2: "input", XTAL1: "input", GND: "power_in", NC_23: "no_connect", "P2.0/A8": "bidirectional", "P2.1/A9": "bidirectional", "P2.2/A10": "bidirectional", "P2.3/A11": "bidirectional", "P2.4/A12": "bidirectional", "P2.5/A13": "bidirectional", "P2.6/A14": "bidirectional", "P2.7/A15": "bidirectional", "~{PSEN}": "output", ALE: "output", NC_34: "no_connect", "~{EA}/V_{pp}": "input", "P0.7/AD7": "bidirectional", "P0.6/AD6": "bidirectional", "P0.5/AD5": "bidirectional", "P0.4/AD4": "bidirectional", "P0.3/AD3": "bidirectional", "P0.2/AD2": "bidirectional", "P0.1/AD1": "bidirectional", "P0.0/AD0": "bidirectional", "V_{cc}": "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89x51xxJ";
  override referencePrefix = "U";
}

/**
 * 8-bit Microcontroller with 4K Bytes Flash, DIP-40
 *
 * KiCad symbol: `MCU_Microchip_8051:AT89x51xxP`. Reference prefix: `U`.
 * Footprint filters: DIP*40*W15.24*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/doc2487.pdf
 * Keywords: Microcontroller 8051 DIP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class AT89x51xxP extends Component.withPins({
  "P1.2": "3",
  "P1.0": "1",
  "P1.1": "2",
  "P1.3": "4",
  "P1.4": "5",
  "P1.5": "6",
  "P1.6": "7",
  "P1.7/SCK": "8",
  "RST": "9",
  "P3.0": "10",
  "P3.1": "11",
  "P3.2": "12",
  "P3.3": "13",
  "P3.4": "14",
  "P3.5": "15",
  "P3.6": "16",
  "P3.7": "17",
  "XTAL2": "18",
  "XTAL1": "19",
  "GND": "20",
  "P2.0/A8": "21",
  "P2.1/A9": "22",
  "P2.2/A10": "23",
  "P2.3/A11": "24",
  "P2.4/A12": "25",
  "P2.5/A13": "26",
  "P2.6/A14": "27",
  "P2.7/A15": "28",
  "~{PSEN}": "29",
  "ALE": "30",
  "~{EA}/V_{pp}": "31",
  "P0.7/AD7": "32",
  "P0.6/AD6": "33",
  "P0.5/AD5": "34",
  "P0.4/AD4": "35",
  "P0.3/AD3": "36",
  "P0.2/AD2": "37",
  "P0.1/AD1": "38",
  "P0.0/AD0": "39",
  "V_{cc}": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.2": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7/SCK": "bidirectional", RST: "input", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", XTAL2: "input", XTAL1: "input", GND: "power_in", "P2.0/A8": "bidirectional", "P2.1/A9": "bidirectional", "P2.2/A10": "bidirectional", "P2.3/A11": "bidirectional", "P2.4/A12": "bidirectional", "P2.5/A13": "bidirectional", "P2.6/A14": "bidirectional", "P2.7/A15": "bidirectional", "~{PSEN}": "output", ALE: "output", "~{EA}/V_{pp}": "input", "P0.7/AD7": "bidirectional", "P0.6/AD6": "bidirectional", "P0.5/AD5": "bidirectional", "P0.4/AD4": "bidirectional", "P0.3/AD3": "bidirectional", "P0.2/AD2": "bidirectional", "P0.1/AD1": "bidirectional", "P0.0/AD0": "bidirectional", "V_{cc}": "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_8051:AT89x51xxP";
  override referencePrefix = "U";
}
