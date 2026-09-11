// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 512W EPROM, 25B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C508-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12C508_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C508-xP";
  override referencePrefix = "U";
}

/**
 * PIC12C508, 512W EPROM, 25B SRAM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C508-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12C508_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C508-xJW";
  override referencePrefix = "U";
}

/**
 * PIC12C508, 512W EPROM, 25B SRAM, SOIC-8 (208 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C508-xSM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class PIC12C508_xSM extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C508-xSM";
  override referencePrefix = "U";
}

/**
 * 512W EPROM, 25B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C508A-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12C508A_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C508A-xP";
  override referencePrefix = "U";
}

/**
 * PIC12C508A, 512W EPROM, 25B SRAM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C508A-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12C508A_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C508A-xJW";
  override referencePrefix = "U";
}

/**
 * PIC12C508A, 512W EPROM, 25B SRAM, SOIC-8 (208 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C508A-xSM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class PIC12C508A_xSM extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C508A-xSM";
  override referencePrefix = "U";
}

/**
 * PIC12C508A, 512W EPROM, 25B SRAM, SOIC-8 (150 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C508A-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12C508A_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C508A-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W EPROM, 41B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C509-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12C509_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C509-xP";
  override referencePrefix = "U";
}

/**
 * PIC12C509, 1024W EPROM, 41B SRAM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C509-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12C509_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C509-xJW";
  override referencePrefix = "U";
}

/**
 * PIC12C509, 1024W EPROM, 41B SRAM, SOIC-8 (208 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C509-xSM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class PIC12C509_xSM extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C509-xSM";
  override referencePrefix = "U";
}

/**
 * PIC12C509, 1024W EPROM, 41B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C509A-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12C509A_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C509A-xP";
  override referencePrefix = "U";
}

/**
 * PIC12C509A, 1024W EPROM, 41B SRAM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C509A-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12C509A_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C509A-xJW";
  override referencePrefix = "U";
}

/**
 * PIC12C509A, 1024W EPROM, 41B SRAM, SOIC-8 (208 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C509A-xSM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class PIC12C509A_xSM extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C509A-xSM";
  override referencePrefix = "U";
}

/**
 * PIC12C509A, 1024W EPROM, 41B SRAM, SOIC-8 (150 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C509A-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12C509A_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C509A-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W EPROM, 128B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C671-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12C671_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C671-xP";
  override referencePrefix = "U";
}

/**
 * PIC12C671, 1024W EPROM, 128B SRAM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C671-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12C671_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C671-xJW";
  override referencePrefix = "U";
}

/**
 * PIC12C671, 1024W EPROM, 128B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C671-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12C671_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C671-xSN";
  override referencePrefix = "U";
}

/**
 * 2048W EPROM, 128B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C672-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12C672_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C672-xP";
  override referencePrefix = "U";
}

/**
 * PIC12C672, 2048W EPROM, 128B SRAM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C672-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12C672_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C672-xJW";
  override referencePrefix = "U";
}

/**
 * PIC12C672, 2048W EPROM, 128B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12C672-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12C672_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12C672-xSN";
  override referencePrefix = "U";
}

/**
 * 512W EPROM, 25B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE518-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12CE518_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE518-xP";
  override referencePrefix = "U";
}

/**
 * PIC12CE518, 512W EPROM, 25B SRAM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE518-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12CE518_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE518-xJW";
  override referencePrefix = "U";
}

/**
 * PIC12CE518, 512W EPROM, 25B SRAM, SOIC-8 (208 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE518-xSM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class PIC12CE518_xSM extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE518-xSM";
  override referencePrefix = "U";
}

/**
 * PIC12CE518, 512W EPROM, 25B SRAM, SOIC-8 (150 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE518-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12CE518_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE518-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W EPROM, 41B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE519-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12CE519_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE519-xP";
  override referencePrefix = "U";
}

/**
 * PIC12CE519, 1024W EPROM, 41B SRAM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE519-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12CE519_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE519-xJW";
  override referencePrefix = "U";
}

/**
 * 1024W EPROM, 41B SRAM, SOIC-8 (208 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE519-xSM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class PIC12CE519_xSM extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE519-xSM";
  override referencePrefix = "U";
}

/**
 * PIC12CE519, 1024W EPROM, 41B SRAM, SOIC-8 (150 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE519-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12CE519_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE519-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W EPROM, 128B SRAM, 128B EPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE673-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12CE673_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE673-xP";
  override referencePrefix = "U";
}

/**
 * PIC12CE673, 1024W EPROM, 128B SRAM, 128B EEPROM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE673-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12CE673_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE673-xJW";
  override referencePrefix = "U";
}

/**
 * 2048W EPROM, 128B SRAM, 128B EPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE674-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12CE674_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE674-xP";
  override referencePrefix = "U";
}

/**
 * PIC12CE674, 2048W EPROM, 128B SRAM, 128B EEPROM, CERDIP-8 Windowed
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CE674-xJW`. Reference prefix: `U`.
 * Footprint filters: CERDIP*7.62mm*SideBrazed*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/30561b.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:CERDIP-8_W7.62mm_SideBrazed.
 */
export class PIC12CE674_xJW extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CE674-xJW";
  override referencePrefix = "U";
}

/**
 * 1024W ROM, 41B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CR509A-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12CR509A_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CR509A-xP";
  override referencePrefix = "U";
}

/**
 * PIC12CR509A, 1024W ROM, 41B SRAM, SOIC-8 (208 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CR509A-xSM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class PIC12CR509A_xSM extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CR509A-xSM";
  override referencePrefix = "U";
}

/**
 * PIC12CR509A, 1024W ROM, 41B SRAM, SOIC-8 (150 mil)
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12CR509A-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/devicedoc/40139e.pdf
 * Keywords: 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12CR509A_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12CR509A-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W FLASH, 64B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1501-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41615A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F1501_xP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1501-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F1501, 1024W FLASH, 64B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1501-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41615A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F1501_xMC extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1501-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F1501, 1024W FLASH, 64B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1501-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41615A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F1501_xMS extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1501-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F1501, 1024W FLASH, 64B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1501-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41615A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F1501_xSN extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1501-xSN";
  override referencePrefix = "U";
}

/**
 * 2kW FLASH, 128B SRAM, 256 EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1822-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41413B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F1822_xP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1822-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F1822, 2kW FLASH, 128B SRAM, 256 EEPROM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1822-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41413B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F1822_xMC extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1822-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F1822, 2kW FLASH, 128B SRAM, 256 EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1822-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41413B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F1822_xSN extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1822-xSN";
  override referencePrefix = "U";
}

/**
 * 4kW FLASH, 256B SRAM, 256B EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1840-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41441B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F1840_xP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1840-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F1840, 4kW FLASH, 256B SRAM, 256B EEPROM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1840-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41441B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F1840_xMC extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1840-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F1840, 4kW FLASH, 256B SRAM, 256B EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F1840-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41441B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F1840_xSN extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F1840-xSN";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 25B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F508-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F508_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F508-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F508, 512W Flash, 25B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F508-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F508_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F508-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F508, 512W Flash, 25B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F508-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F508_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F508-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F508, 512W Flash, 25B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F508-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F508_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F508-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 41B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F509-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F509_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F509-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F509, 1024W Flash, 41B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F509-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F509_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F509-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F509, 1024W Flash, 41B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F509-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F509_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F509-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F509, 1024W Flash, 41B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F509-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F509_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F509-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W FLASH, 38B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F510-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41268D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F510_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F510-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F510, 1024W FLASH, 38B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F510-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41268D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F510_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F510-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F510, 1024W FLASH, 38B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F510-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41268D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F510_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F510-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F510, 1024W FLASH, 38B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F510-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41268D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F510_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F510-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 41B SRAM, 64B EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F519-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41319B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F519_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F519-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F519, 1024W Flash, 41B SRAM, 64B EEPROM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F519-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41319B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F519_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F519-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F519, 1024W Flash, 41B SRAM, 64B EEPROM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F519-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41319B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F519_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F519-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F519, 1024W Flash, 41B SRAM, 64B EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F519-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41319B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F519_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F519-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F609-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F609_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F609-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F609, 1024W Flash, 64B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F609-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F609_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F609-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F609, 1024W Flash, 64B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F609-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F609_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F609-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F609, 1024W Flash, 64B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F609-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F609_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F609-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F615-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F615_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F615-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F615, 1024W Flash, 64B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F615-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F615_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F615-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F615, 1024W Flash, 64B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F615-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F615_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F615-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F615, 1024W Flash, 64B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F615-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F615_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F615-xSN";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 128B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F617-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F617_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F617-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F617, 2048W Flash, 128B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F617-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F617_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F617-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F617, 2048W Flash, 128B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F617-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F617_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F617-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F617, 2048W Flash, 128B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F617-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F617_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F617-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, 128B EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F629-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41190G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F629_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F629-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F629, 1024W Flash, 64B SRAM, 128B EEPROM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F629-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41190G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F629_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F629-xMC";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, 128B EEPROM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F629-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41190G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F629_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F629-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F629, 1024W Flash, 64B SRAM, 128B EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F629-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41190G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F629_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F629-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, 128B EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F635-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41232D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F635_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F635-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F635, 1024W Flash, 64B SRAM, 128B EEPROM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F635-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41232D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F635_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F635-xMC";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, 128B EEPROM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F635-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41232D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F635_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F635-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F635, 1024W Flash, 64B SRAM, 128B EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F635-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41232D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F635_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F635-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, 128B EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F675-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41190G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F675_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F675-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F675, 1024W Flash, 64B SRAM, 128B EEPROM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F675-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41190G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F675_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F675-xMC";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, 128B EEPROM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F675-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41190G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F675_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F675-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F675, 1024W Flash, 64B SRAM, 128B EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F675-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41190G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F675_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F675-xSN";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 128B SRAM, 256B EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F683-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41232D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F683_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F683-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F683, 2048W Flash, 128B SRAM, 256B EEPROM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F683-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41211D_.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F683_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F683-xMC";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 128B SRAM, 256B EEPROM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F683-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41232D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12F683_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F683-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12F683, 2048W Flash, 128B SRAM, 256B EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F683-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41211D_.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F683_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F683-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F752-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41576B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12F752_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F752-xP";
  override referencePrefix = "U";
}

/**
 * PIC12F752, 1024W Flash, 64B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F752-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41576B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12F752_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F752-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12F752, 1024W Flash, 64B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12F752-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41576B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12F752_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12F752-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV609-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12HV609_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV609-xP";
  override referencePrefix = "U";
}

/**
 * PIC12HV609, 1024W Flash, 64B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV609-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12HV609_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV609-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12HV609, 1024W Flash, 64B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV609-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12HV609_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV609-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12HV609, 1024W Flash, 64B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV609-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12HV609_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV609-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV615-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12HV615_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV615-xP";
  override referencePrefix = "U";
}

/**
 * PIC12HV615, 1024W Flash, 64B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV615-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12HV615_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV615-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12HV615, 1024W Flash, 64B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV615-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12HV615_xMS extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV615-xMS";
  override referencePrefix = "U";
}

/**
 * PIC12HV615, 1024W Flash, 64B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV615-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41302D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12HV615_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV615-xSN";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV752-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41576B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12HV752_xP extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV752-xP";
  override referencePrefix = "U";
}

/**
 * PIC12HV752, 1024W Flash, 64B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV752-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41576B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12HV752_xMC extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV752-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12HV752, 1024W Flash, 64B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12HV752-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41576B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller High Voltage.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12HV752_xSN extends Component.withPins({
  "VDD": "1",
  "GP5": "2",
  "GP4": "3",
  "GP3": "4",
  "GP2": "5",
  "GP1": "6",
  "GP0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP5: "bidirectional", GP4: "bidirectional", GP3: "input", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12HV752-xSN";
  override referencePrefix = "U";
}

/**
 * PIC12LF1501, 1024W FLASH, 64B SRAM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1501-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41615A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12LF1501_xMC extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1501-xMC";
  override referencePrefix = "U";
}

/**
 * PIC12LF1501, 1024W FLASH, 64B SRAM, MSOP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1501-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41615A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PIC12LF1501_xMS extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1501-xMS";
  override referencePrefix = "U";
}

/**
 * 1024W FLASH, 64B SRAM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1501-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41615A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12LF1501_xP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1501-xP";
  override referencePrefix = "U";
}

/**
 * PIC12LF1501, 1024W FLASH, 64B SRAM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1501-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41615A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12LF1501_xSN extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1501-xSN";
  override referencePrefix = "U";
}

/**
 * PIC12LF1822, 2kW FLASH, 128B SRAM, 256 EEPROM, DFN-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1822-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41413B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12LF1822_xMC extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1822-xMC";
  override referencePrefix = "U";
}

/**
 * 2kW FLASH, 128B SRAM, 256 EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1822-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41413B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12LF1822_xP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1822-xP";
  override referencePrefix = "U";
}

/**
 * PIC12LF1822, 2kW FLASH, 128B SRAM, 256 EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1822-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41413B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12LF1822_xSN extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1822-xSN";
  override referencePrefix = "U";
}

/**
 * PIC12LF1840, 4kW FLASH, 256B SRAM, 256B EEPROM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1840-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41441B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC12LF1840_xMC extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1840-xMC";
  override referencePrefix = "U";
}

/**
 * 4kW FLASH, 256B SRAM, 256B EEPROM, PDIP-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1840-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41441B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC12LF1840_xP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1840-xP";
  override referencePrefix = "U";
}

/**
 * PIC12LF1840, 4kW FLASH, 256B SRAM, 256B EEPROM, SOIC-8
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1840-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/41441B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class PIC12LF1840_xSN extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "RA2": "5",
  "RA1": "6",
  "RA0": "7",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1840-xSN";
  override referencePrefix = "U";
}

/**
 * PIC12LF1840T48, 4kW FLASH, 256B SRAM, 256B EEPROM, RF, TSSOP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC12:PIC12LF1840T48-xST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/40001594C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP RF Transmitter.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class PIC12LF1840T48_xST extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3": "4",
  "VDDRF": "5",
  "CTRL": "6",
  "RFOUT": "7",
  "VSSRF": "8",
  "DATA": "9",
  "XTAL": "10",
  "RA2": "11",
  "RA1": "12",
  "RA0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", RA3: "input", VDDRF: "power_in", CTRL: "input", RFOUT: "input", VSSRF: "power_in", DATA: "input", XTAL: "input", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC12:PIC12LF1840T48-xST";
  override referencePrefix = "U";
}
