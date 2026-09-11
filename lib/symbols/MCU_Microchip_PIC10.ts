// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 256W Flash, 16B SRAM, DFN8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F200-IMC`. Reference prefix: `U`.
 * Footprint filters: DFN*8*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC10F200_IMC extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F200-IMC";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 16B SRAM, SOT-23-6
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F200-IOT`. Reference prefix: `U`.
 * Footprint filters: SOT*23*6*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PIC10F200_IOT extends Component.withPins({
  "GP0": "1",
  "VSS": "2",
  "GP1": "3",
  "GP2": "4",
  "VDD": "5",
  "GP3": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GP0: "bidirectional", VSS: "power_in", GP1: "bidirectional", GP2: "bidirectional", VDD: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F200-IOT";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 16B SRAM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F200-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC10F200_IP extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F200-IP";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, DFN8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F202-IMC`. Reference prefix: `U`.
 * Footprint filters: DFN*8*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC10F202_IMC extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F202-IMC";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, SOT-23-6
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F202-IOT`. Reference prefix: `U`.
 * Footprint filters: SOT*23*6*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PIC10F202_IOT extends Component.withPins({
  "GP0": "1",
  "VSS": "2",
  "GP1": "3",
  "GP2": "4",
  "VDD": "5",
  "GP3": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GP0: "bidirectional", VSS: "power_in", GP1: "bidirectional", GP2: "bidirectional", VDD: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F202-IOT";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F202-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC10F202_IP extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F202-IP";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 16B SRAM, DFN8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F204-IMC`. Reference prefix: `U`.
 * Footprint filters: DFN*8*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC10F204_IMC extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F204-IMC";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 16B SRAM, SOT-23-6
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F204-IOT`. Reference prefix: `U`.
 * Footprint filters: SOT*23*6*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PIC10F204_IOT extends Component.withPins({
  "GP0": "1",
  "VSS": "2",
  "GP1": "3",
  "GP2": "4",
  "VDD": "5",
  "GP3": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GP0: "bidirectional", VSS: "power_in", GP1: "bidirectional", GP2: "bidirectional", VDD: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F204-IOT";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 16B SRAM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F204-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC10F204_IP extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F204-IP";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, DFN8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F206-IMC`. Reference prefix: `U`.
 * Footprint filters: DFN*8*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC10F206_IMC extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F206-IMC";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, SOT-23-6
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F206-IOT`. Reference prefix: `U`.
 * Footprint filters: SOT*23*6*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PIC10F206_IOT extends Component.withPins({
  "GP0": "1",
  "VSS": "2",
  "GP1": "3",
  "GP2": "4",
  "VDD": "5",
  "GP3": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GP0: "bidirectional", VSS: "power_in", GP1: "bidirectional", GP2: "bidirectional", VDD: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F206-IOT";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F206-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41239D.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC10F206_IP extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F206-IP";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 16B SRAM, DFN8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F220-IMC`. Reference prefix: `U`.
 * Footprint filters: DFN*8*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41270E.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC10F220_IMC extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F220-IMC";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 16B SRAM, SOT-23-6
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F220-IOT`. Reference prefix: `U`.
 * Footprint filters: SOT*23*6*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41270E.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PIC10F220_IOT extends Component.withPins({
  "GP0": "1",
  "VSS": "2",
  "GP1": "3",
  "GP2": "4",
  "VDD": "5",
  "GP3": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GP0: "bidirectional", VSS: "power_in", GP1: "bidirectional", GP2: "bidirectional", VDD: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F220-IOT";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 16B SRAM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F220-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41270E.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC10F220_IP extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F220-IP";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, DFN8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F222-IMC`. Reference prefix: `U`.
 * Footprint filters: DFN*8*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41270E.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC10F222_IMC extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F222-IMC";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, SOT-23-6
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F222-IOT`. Reference prefix: `U`.
 * Footprint filters: SOT*23*6*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41270E.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PIC10F222_IOT extends Component.withPins({
  "GP0": "1",
  "VSS": "2",
  "GP1": "3",
  "GP2": "4",
  "VDD": "5",
  "GP3": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GP0: "bidirectional", VSS: "power_in", GP1: "bidirectional", GP2: "bidirectional", VDD: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F222-IOT";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 24B SRAM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F222-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41270E.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC10F222_IP extends Component.withPins({
  "VDD": "2",
  "GP2": "3",
  "GP1": "4",
  "GP0": "5",
  "VSS": "7",
  "GP3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GP2: "bidirectional", GP1: "bidirectional", GP0: "bidirectional", VSS: "power_in", GP3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F222-IP";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 64B SRAM, DFN8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F320-IMC`. Reference prefix: `U`.
 * Footprint filters: DFN*8*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41585A.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC10F320_IMC extends Component.withPins({
  "VDD": "2",
  "RA2": "3",
  "RA1": "4",
  "RA0": "5",
  "VSS": "7",
  "RA3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", RA3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F320-IMC";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 64B SRAM, SOT-23-6
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F320-IOT`. Reference prefix: `U`.
 * Footprint filters: SOT*23*6*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41585A.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PIC10F320_IOT extends Component.withPins({
  "RA0": "1",
  "VSS": "2",
  "RA1": "3",
  "RA2": "4",
  "VDD": "5",
  "RA3": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA0: "bidirectional", VSS: "power_in", RA1: "bidirectional", RA2: "bidirectional", VDD: "power_in", RA3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F320-IOT";
  override referencePrefix = "U";
}

/**
 * 256W Flash, 64B SRAM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F320-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41585A.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC10F320_IP extends Component.withPins({
  "VDD": "2",
  "RA2": "3",
  "RA1": "4",
  "RA0": "5",
  "VSS": "7",
  "RA3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", RA3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F320-IP";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 64B SRAM, DFN8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F322-IMC`. Reference prefix: `U`.
 * Footprint filters: DFN*8*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41585A.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class PIC10F322_IMC extends Component.withPins({
  "VDD": "2",
  "RA2": "3",
  "RA1": "4",
  "RA0": "5",
  "VSS": "7",
  "RA3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", RA3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F322-IMC";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 64B SRAM, SOT-23-6
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F322-IOT`. Reference prefix: `U`.
 * Footprint filters: SOT*23*6*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41585A.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PIC10F322_IOT extends Component.withPins({
  "RA0": "1",
  "VSS": "2",
  "RA1": "3",
  "RA2": "4",
  "VDD": "5",
  "RA3": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA0: "bidirectional", VSS: "power_in", RA1: "bidirectional", RA2: "bidirectional", VDD: "power_in", RA3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F322-IOT";
  override referencePrefix = "U";
}

/**
 * 512W Flash, 64B SRAM, PDIP8
 *
 * KiCad symbol: `MCU_Microchip_PIC10:PIC10F322-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41585A.pdf
 * Keywords: FLASH 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class PIC10F322_IP extends Component.withPins({
  "VDD": "2",
  "RA2": "3",
  "RA1": "4",
  "RA0": "5",
  "VSS": "7",
  "RA3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", RA3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC10:PIC10F322-IP";
  override referencePrefix = "U";
}
