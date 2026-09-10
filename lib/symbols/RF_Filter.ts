// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Bandpass Filter, 1090MHz, SAW filter 6-pin
 *
 * KiCad symbol: `RF_Filter:TA0970B`. Reference prefix: `X`.
 * Footprint filters: Filter*SAW*3.8x3.8mm*.
 * @see https://www.golledge.com/media/3785/mp08167.pdf
 * Keywords: SAW Filter 1090 bandpass MP08167.
 * Default footprint: Filter:Filter_SAW-6_3.8x3.8mm.
 */
export class TA0970B extends Component.withPins({
  "GND_1": "1",
  "IN": "2",
  "GND_3": "3",
  "GND_4": "4",
  "OUT": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN: "input", GND_3: "passive", GND_4: "passive", OUT: "output", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:TA0970B";
  override referencePrefix = "X";
}

/**
 * Bandpass Filter, 869MHz, SAW filter 6-pin
 *
 * KiCad symbol: `RF_Filter:B3715`. Reference prefix: `X`.
 * Footprint filters: Filter*SAW*DCC6C*3x3mm*.
 * @see https://www.mouser.de/datasheet/2/842/epcos16633_1-2300371.pdf
 * Keywords: SAW Filter 869 bandpass.
 * Default footprint: Filter:Filter_SAW_Epcos_DCC6C_3x3mm.
 */
export class B3715 extends Component.withPins({
  "GND_1": "1",
  "IN": "2",
  "GND_3": "3",
  "GND_4": "4",
  "OUT": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN: "input", GND_3: "passive", GND_4: "passive", OUT: "output", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:B3715";
  override referencePrefix = "X";
}

/**
 * 1420-1470MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-1445`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1445+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_1445 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1445";
  override referencePrefix = "FL";
}

/**
 * 1480-1570MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-1525`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1525+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_1525 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1525";
  override referencePrefix = "FL";
}

/**
 * 950-1970MHz 75 Ohm Passive Band Pass Filter, FV1206-7
 *
 * KiCad symbol: `RF_Filter:BFCN-152W-75`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?7*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1445+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-7.
 */
export class BFCN_152W_75 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND: "passive", OUT: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-152W-75";
  override referencePrefix = "FL";
}

/**
 * 1500-1620MHz 50 Ohm Passive Band Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:BFCN-1560`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1560+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class BFCN_1560 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1560";
  override referencePrefix = "FL";
}

/**
 * 1530-1620MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-1575`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1575+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_1575 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1575";
  override referencePrefix = "FL";
}

/**
 * 1570-1810MHz 50 Ohm Passive Band Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:BFCN-1690`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1690+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class BFCN_1690 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1690";
  override referencePrefix = "FL";
}

/**
 * 1750-1930MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-1840`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1840+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_1840 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1840";
  override referencePrefix = "FL";
}

/**
 * 1790-1920MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-1855`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1855+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_1855 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1855";
  override referencePrefix = "FL";
}

/**
 * 1580-2200MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-1860`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1860+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_1860 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1860";
  override referencePrefix = "FL";
}

/**
 * 1893-1920MHz 50 Ohm Passive Band Pass Filter, FV1206-5
 *
 * KiCad symbol: `RF_Filter:BFCN-1900`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?5*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1900+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-5.
 */
export class BFCN_1900 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1900";
  override referencePrefix = "FL";
}

/**
 * 1850-2040MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-1945`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-1945+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_1945 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-1945";
  override referencePrefix = "FL";
}

/**
 * 2170-2380MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-2275`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2275+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_2275 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2275";
  override referencePrefix = "FL";
}

/**
 * 2250-2470MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-2360`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2360+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_2360 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2360";
  override referencePrefix = "FL";
}

/**
 * 2340-2530MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-2435`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2435+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_2435 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2435";
  override referencePrefix = "FL";
}

/**
 * 2400-2550MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-2450`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2450+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_2450 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2450";
  override referencePrefix = "FL";
}

/**
 * 2100-2900MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-2500`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2500+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_2500 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2500";
  override referencePrefix = "FL";
}

/**
 * 2500-2610MHz 50 Ohm Passive Band Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:BFCN-2555`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2555+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class BFCN_2555 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2555";
  override referencePrefix = "FL";
}

/**
 * 2600-2800MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-2700`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2700+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_2700 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2700";
  override referencePrefix = "FL";
}

/**
 * 2750-2930MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-2840`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2840+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_2840 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2840";
  override referencePrefix = "FL";
}

/**
 * 2750-2950MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-2850`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2850+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_2850 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2850";
  override referencePrefix = "FL";
}

/**
 * 2700-3100MHz 50 Ohm Passive Band Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:BFCN-2900`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2900+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class BFCN_2900 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2900";
  override referencePrefix = "FL";
}

/**
 * 2850-2970MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-2910`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2910+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_2910 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2910";
  override referencePrefix = "FL";
}

/**
 * 2570-3440MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-2975`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-2975+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_2975 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-2975";
  override referencePrefix = "FL";
}

/**
 * 2920-3100MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-3010`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-3010+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_3010 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-3010";
  override referencePrefix = "FL";
}

/**
 * 2800-3400MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-3085`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-3085+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_3085 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-3085";
  override referencePrefix = "FL";
}

/**
 * 2800-3400MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-3085A`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-3085A+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_3085A extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-3085A";
  override referencePrefix = "FL";
}

/**
 * 2720-3570MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-3115`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-3115+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_3115 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-3115";
  override referencePrefix = "FL";
}

/**
 * 3300-3900MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-3600`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-3600+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_3600 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-3600";
  override referencePrefix = "FL";
}

/**
 * 3000-4600MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-3700`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-3700+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_3700 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-3700";
  override referencePrefix = "FL";
}

/**
 * 3700-4500MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-4100`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-4100+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_4100 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-4100";
  override referencePrefix = "FL";
}

/**
 * 4200-4700MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-4440`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-4440+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_4440 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-4440";
  override referencePrefix = "FL";
}

/**
 * 4400-5200MHz 50 Ohm Passive Band Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:BFCN-4800`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/BFCN-4800+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class BFCN_4800 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-4800";
  override referencePrefix = "FL";
}

/**
 * 3100-7100MHz 50 Ohm Passive Band Pass Filter, FV1206-6
 *
 * KiCad symbol: `RF_Filter:BFCN-5100`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?6*.
 * @see https://www.minicircuits.com/pdfs/BFCN-5100+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-6.
 */
export class BFCN_5100 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "OUT": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", GND_3: "passive", GND_4: "passive", OUT: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-5100";
  override referencePrefix = "FL";
}

/**
 * 4250-6300MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-5200`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-5200+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_5200 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-5200";
  override referencePrefix = "FL";
}

/**
 * 4620-6640MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-5540`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-5540+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_5540 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-5540";
  override referencePrefix = "FL";
}

/**
 * 5650-5850MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-5750`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-5750+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_5750 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-5750";
  override referencePrefix = "FL";
}

/**
 * 7100-7300MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-7200`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-7200+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_7200 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-7200";
  override referencePrefix = "FL";
}

/**
 * 6850-7850MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-7331`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-7331+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_7331 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-7331";
  override referencePrefix = "FL";
}

/**
 * 7150-7550MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-7350`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-7350+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_7350 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-7350";
  override referencePrefix = "FL";
}

/**
 * 7450-7650MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-7500`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-7500+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_7500 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-7500";
  override referencePrefix = "FL";
}

/**
 * 7500-7900MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-7700`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-7700+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_7700 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-7700";
  override referencePrefix = "FL";
}

/**
 * 7800-8100MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-7900`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-7900+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_7900 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-7900";
  override referencePrefix = "FL";
}

/**
 * 7900-8100MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-8000`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-8000+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_8000 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-8000";
  override referencePrefix = "FL";
}

/**
 * 8250-8450MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-8350`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-8350+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_8350 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-8350";
  override referencePrefix = "FL";
}

/**
 * 8350-8550MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-8450`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-8450+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_8450 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-8450";
  override referencePrefix = "FL";
}

/**
 * 8550-8750MHz 50 Ohm Passive Band Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:BFCN-8650`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/BFCN-8650+.pdf
 * Keywords: Mini-Circuits band pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class BFCN_8650 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BFCN-8650";
  override referencePrefix = "FL";
}

/**
 * Bandpass Filter, 310 to 400 MHz, 50 Ohm, Mini-Circuits HQ1157
 *
 * KiCad symbol: `RF_Filter:BPF-A355`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*HQ1157*.
 * @see https://www.minicircuits.com/pdfs/BPF-A355+.pdf
 * Keywords: Bandpass Filter.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_HQ1157.
 */
export class BPF_A355 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "OUT": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "GND_14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND_2: "power_in", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", OUT: "output", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", GND_13: "passive", GND_14: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:BPF-A355";
  override referencePrefix = "U";
}

/**
 * 440MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-440`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-440+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_440 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-440";
  override referencePrefix = "FL";
}

/**
 * 1000MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1000`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1000+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1000 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1000";
  override referencePrefix = "FL";
}

/**
 * 1080MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1080`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1080+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1080 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1080";
  override referencePrefix = "FL";
}

/**
 * 1100MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1100`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1100+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1100 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1100";
  override referencePrefix = "FL";
}

/**
 * 1150MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1150`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1150+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1150 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1150";
  override referencePrefix = "FL";
}

/**
 * 1180MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1200`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1200+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1200 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1200";
  override referencePrefix = "FL";
}

/**
 * 1180MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1200D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1200D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1200D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1200D";
  override referencePrefix = "FL";
}

/**
 * 1300MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1300`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1300+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1300 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1300";
  override referencePrefix = "FL";
}

/**
 * 1300MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1300D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1300D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1300D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1300D";
  override referencePrefix = "FL";
}

/**
 * 1320MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1320`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1320+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1320 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1320";
  override referencePrefix = "FL";
}

/**
 * 1320MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1320D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1320D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1320D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1320D";
  override referencePrefix = "FL";
}

/**
 * 13300MHz 50 Ohm Passive High Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:HFCN-1322`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1322+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class HFCN_1322 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1322";
  override referencePrefix = "FL";
}

/**
 * 1550MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1500`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1500+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1500 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1500";
  override referencePrefix = "FL";
}

/**
 * 1550MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1500D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1500D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1500D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1500D";
  override referencePrefix = "FL";
}

/**
 * 1600MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1600`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1600+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1600 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1600";
  override referencePrefix = "FL";
}

/**
 * 1600MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1600D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1600D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1600D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1600D";
  override referencePrefix = "FL";
}

/**
 * 1760MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1760`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1760+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1760 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1760";
  override referencePrefix = "FL";
}

/**
 * 1810MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1810`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1810+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1810 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1810";
  override referencePrefix = "FL";
}

/**
 * 1810MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1810D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1810D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1810D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1810D";
  override referencePrefix = "FL";
}

/**
 * 1910MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1910`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1910+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1910 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1910";
  override referencePrefix = "FL";
}

/**
 * 1910MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-1910D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-1910D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_1910D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-1910D";
  override referencePrefix = "FL";
}

/**
 * 2000MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-2000`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-2000.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_2000 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-2000";
  override referencePrefix = "FL";
}

/**
 * 2100MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-2100`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-2100+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_2100 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-2100";
  override referencePrefix = "FL";
}

/**
 * 2100MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-2100D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-2100D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_2100D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-2100D";
  override referencePrefix = "FL";
}

/**
 * 2275MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-2275`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-2275+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_2275 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-2275";
  override referencePrefix = "FL";
}

/**
 * 2500MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-2700`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-2700+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_2700 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-2700";
  override referencePrefix = "FL";
}

/**
 * 6275MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-672`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-672+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_672 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-672";
  override referencePrefix = "FL";
}

/**
 * 2700MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-2700A`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-2700A+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_2700A extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-2700A";
  override referencePrefix = "FL";
}

/**
 * 2700MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-2700AD`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-2700AD+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_2700AD extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-2700AD";
  override referencePrefix = "FL";
}

/**
 * 3100MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-3100`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-3100+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_3100 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-3100";
  override referencePrefix = "FL";
}

/**
 * 3100MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-3100D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-3100D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_3100D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-3100D";
  override referencePrefix = "FL";
}

/**
 * 3500MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-3500`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-3500+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_3500 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-3500";
  override referencePrefix = "FL";
}

/**
 * 3500MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-3500D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-3500D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_3500D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-3500D";
  override referencePrefix = "FL";
}

/**
 * 3800MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-3800`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-3800+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_3800 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-3800";
  override referencePrefix = "FL";
}

/**
 * 3800MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-3800D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-3800D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_3800D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-3800D";
  override referencePrefix = "FL";
}

/**
 * 4400MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-4400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-4400+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_4400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-4400";
  override referencePrefix = "FL";
}

/**
 * 4400MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-4400D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-4400D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_4400D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-4400D";
  override referencePrefix = "FL";
}

/**
 * 4600MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-4600`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-4600+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_4600 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-4600";
  override referencePrefix = "FL";
}

/**
 * 5050MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-5050`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-5050+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_5050 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-5050";
  override referencePrefix = "FL";
}

/**
 * 5500MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-5500`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-5500+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_5500 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-5500";
  override referencePrefix = "FL";
}

/**
 * 5500MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-5500D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-5500D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_5500D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-5500D";
  override referencePrefix = "FL";
}

/**
 * 6010MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-6010`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-6010+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_6010 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-6010";
  override referencePrefix = "FL";
}

/**
 * 650MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-650`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-650+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_650 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-650";
  override referencePrefix = "FL";
}

/**
 * 650MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-650D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-650D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_650D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-650D";
  override referencePrefix = "FL";
}

/**
 * 7150MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-7150`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-7150+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_7150 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-7150";
  override referencePrefix = "FL";
}

/**
 * 740MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-740`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-740+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_740 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-740";
  override referencePrefix = "FL";
}

/**
 * 740MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-740D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-740D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_740D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-740D";
  override referencePrefix = "FL";
}

/**
 * 8000MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-7971`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-7971+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_7971 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-7971";
  override referencePrefix = "FL";
}

/**
 * 8400MHz 50 Ohm Passive High Pass Filter, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-8400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-8400+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_8400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-8400";
  override referencePrefix = "FL";
}

/**
 * 8400MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206-1
 *
 * KiCad symbol: `RF_Filter:HFCN-8400D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?1*.
 * @see https://www.minicircuits.com/pdfs/HFCN-8400D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-1.
 */
export class HFCN_8400D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-8400D";
  override referencePrefix = "FL";
}

/**
 * 880MHz 50 Ohm Passive High Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-880`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-880+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_880 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-880";
  override referencePrefix = "FL";
}

/**
 * 880MHz 50 Ohm Passive High Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:HFCN-880D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/HFCN-880D+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class HFCN_880D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-880D";
  override referencePrefix = "FL";
}

/**
 * 9070MHz 50 Ohm Passive High Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:HFCN-9700`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/HFCN-9700+.pdf
 * Keywords: Mini-Circuits high pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class HFCN_9700 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:HFCN-9700";
  override referencePrefix = "FL";
}

/**
 * 80MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-80`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-80+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_80 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-80";
  override referencePrefix = "FL";
}

/**
 * 1000MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1000`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1000+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1000 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1000";
  override referencePrefix = "FL";
}

/**
 * 1000MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1000D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1000D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1000D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1000D";
  override referencePrefix = "FL";
}

/**
 * 105MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-105`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-105+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_105 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-105";
  override referencePrefix = "FL";
}

/**
 * 11000MHz 50 Ohm Passive Low Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:LFCN-113`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/LFCN-113+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class LFCN_113 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-113";
  override referencePrefix = "FL";
}

/**
 * 120MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-120`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-120+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_120 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-120";
  override referencePrefix = "FL";
}

/**
 * 1200MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1200`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1200+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1200 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1200";
  override referencePrefix = "FL";
}

/**
 * 1200MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1200D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1200D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1200D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1200D";
  override referencePrefix = "FL";
}

/**
 * 12000MHz 50 Ohm Passive Low Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:LFCN-123`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/LFCN-123+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class LFCN_123 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-123";
  override referencePrefix = "FL";
}

/**
 * 12800MHz 50 Ohm Passive Low Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:LFCN-1282`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1282+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class LFCN_1282 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1282";
  override referencePrefix = "FL";
}

/**
 * 1325MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1325`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1325+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1325 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1325";
  override referencePrefix = "FL";
}

/**
 * 1400MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1400+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1400";
  override referencePrefix = "FL";
}

/**
 * 1400MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1400D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1400D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1400D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1400D";
  override referencePrefix = "FL";
}

/**
 * 1450MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1450`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1450+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1450 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1450";
  override referencePrefix = "FL";
}

/**
 * 1500MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1500`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1500+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1500 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1500";
  override referencePrefix = "FL";
}

/**
 * 1500MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1500D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1500D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1500D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1500D";
  override referencePrefix = "FL";
}

/**
 * 1525MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1525`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1525+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1525 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1525";
  override referencePrefix = "FL";
}

/**
 * 1525MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1525D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1525D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1525D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1525D";
  override referencePrefix = "FL";
}

/**
 * 1575MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1575`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1575+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1575 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1575";
  override referencePrefix = "FL";
}

/**
 * 1575MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1575D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1575D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1575D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1575D";
  override referencePrefix = "FL";
}

/**
 * 160MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-160`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-160+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_160 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-160";
  override referencePrefix = "FL";
}

/**
 * 1700MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1700`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1700+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1700 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1700";
  override referencePrefix = "FL";
}

/**
 * 1700MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1700D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1700D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1700D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1700D";
  override referencePrefix = "FL";
}

/**
 * 180MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-180`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-180+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_180 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-180";
  override referencePrefix = "FL";
}

/**
 * 1800MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1800`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1800+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1800 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1800";
  override referencePrefix = "FL";
}

/**
 * 1800MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-1800D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-1800D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_1800D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-1800D";
  override referencePrefix = "FL";
}

/**
 * 190MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-190`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-190+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_190 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-190";
  override referencePrefix = "FL";
}

/**
 * 2000MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2000`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2000+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2000 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2000";
  override referencePrefix = "FL";
}

/**
 * 2000MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2000D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2000D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2000D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2000D";
  override referencePrefix = "FL";
}

/**
 * 225MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-225`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-225+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_225 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-225";
  override referencePrefix = "FL";
}

/**
 * 2200MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2250`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2250+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2250 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2250";
  override referencePrefix = "FL";
}

/**
 * 2250MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2250D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2250D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2250D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2250D";
  override referencePrefix = "FL";
}

/**
 * 225MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-225D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-225D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_225D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-225D";
  override referencePrefix = "FL";
}

/**
 * 2290MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2290`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2290+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2290 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2290";
  override referencePrefix = "FL";
}

/**
 * 2400MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2400+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2400";
  override referencePrefix = "FL";
}

/**
 * 2400MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2400D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2400D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2400D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2400D";
  override referencePrefix = "FL";
}

/**
 * 2500MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2500`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2500+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2500 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2500";
  override referencePrefix = "FL";
}

/**
 * 2500MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2500D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2500D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2500D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2500D";
  override referencePrefix = "FL";
}

/**
 * 2600MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2600`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2600+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2600 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2600";
  override referencePrefix = "FL";
}

/**
 * 2600MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2600D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2600D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2600D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2600D";
  override referencePrefix = "FL";
}

/**
 * 2750MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2750`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2750+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2750 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2750";
  override referencePrefix = "FL";
}

/**
 * 2750MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2750D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2750D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2750D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2750D";
  override referencePrefix = "FL";
}

/**
 * 2800MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2850`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2850+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2850 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2850";
  override referencePrefix = "FL";
}

/**
 * 2800MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-2850D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-2850D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_2850D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-2850D";
  override referencePrefix = "FL";
}

/**
 * 3000MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-3000`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-3000+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_3000 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-3000";
  override referencePrefix = "FL";
}

/**
 * 3000MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-3000D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-3000D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_3000D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-3000D";
  override referencePrefix = "FL";
}

/**
 * 320MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-320`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-320+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_320 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-320";
  override referencePrefix = "FL";
}

/**
 * 320MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-320D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-320D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_320D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-320D";
  override referencePrefix = "FL";
}

/**
 * 3400MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-3400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-3400+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_3400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-3400";
  override referencePrefix = "FL";
}

/**
 * 3400MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-3400D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-3400D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_3400D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-3400D";
  override referencePrefix = "FL";
}

/**
 * 3900MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-3800`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-3800+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_3800 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-3800";
  override referencePrefix = "FL";
}

/**
 * 3900MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-3800D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-3800D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_3800D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-3800D";
  override referencePrefix = "FL";
}

/**
 * 400MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-400+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-400";
  override referencePrefix = "FL";
}

/**
 * 400MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-400D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-400D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_400D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-400D";
  override referencePrefix = "FL";
}

/**
 * 4400MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-4400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-4400+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_4400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-4400";
  override referencePrefix = "FL";
}

/**
 * 4400MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-4400D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-4400D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_4400D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-4400D";
  override referencePrefix = "FL";
}

/**
 * 490MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-490`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-490+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_490 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-490";
  override referencePrefix = "FL";
}

/**
 * 490MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-490D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-490D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_490D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-490D";
  override referencePrefix = "FL";
}

/**
 * 5000MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-5000`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-5000+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_5000 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-5000";
  override referencePrefix = "FL";
}

/**
 * 5000MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-5000D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-5000D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_5000D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-5000D";
  override referencePrefix = "FL";
}

/**
 * 530MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-530`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-530+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_530 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-530";
  override referencePrefix = "FL";
}

/**
 * 530MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-530D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-530D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_530D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-530D";
  override referencePrefix = "FL";
}

/**
 * 5500MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-5500`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-5500+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_5500 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-5500";
  override referencePrefix = "FL";
}

/**
 * 5500MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-5500D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-5500D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_5500D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-5500D";
  override referencePrefix = "FL";
}

/**
 * 575MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-575`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-575+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_575 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-575";
  override referencePrefix = "FL";
}

/**
 * 575MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-575D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-575D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_575D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-575D";
  override referencePrefix = "FL";
}

/**
 * 5850MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-5850`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-5850+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_5850 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-5850";
  override referencePrefix = "FL";
}

/**
 * 5850MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-5850D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-5850D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_5850D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-5850D";
  override referencePrefix = "FL";
}

/**
 * 6000MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-6000`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-6000+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_6000 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-6000";
  override referencePrefix = "FL";
}

/**
 * 6000MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-6000D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-6000D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_6000D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-6000D";
  override referencePrefix = "FL";
}

/**
 * 630MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-630`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-630+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_630 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-630";
  override referencePrefix = "FL";
}

/**
 * 630MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-630D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-630D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_630D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-630D";
  override referencePrefix = "FL";
}

/**
 * 6400MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-6400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-6400+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_6400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-6400";
  override referencePrefix = "FL";
}

/**
 * 6400MHz 50 Ohm Passive Low Pass Filter, DC capable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-6400D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-6400D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_6400D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-6400D";
  override referencePrefix = "FL";
}

/**
 * 6700MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-6700`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-6700+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_6700 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-6700";
  override referencePrefix = "FL";
}

/**
 * 6700MHz 50 Ohm Passive Low Pass Filter, DC cabable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-6700D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-6700D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_6700D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-6700D";
  override referencePrefix = "FL";
}

/**
 * 7200MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-7200`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-7200+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_7200 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-7200";
  override referencePrefix = "FL";
}

/**
 * 7200MHz 50 Ohm Passive Low Pass Filter, DC cabable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-7200D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-7200D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_7200D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-7200D";
  override referencePrefix = "FL";
}

/**
 * 7200MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-722`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-722+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_722 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-722";
  override referencePrefix = "FL";
}

/**
 * 800MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-800`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-800+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_800 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-800";
  override referencePrefix = "FL";
}

/**
 * 800MHz 50 Ohm Passive Low Pass Filter, DC cabable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-800D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-800D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_800D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-800D";
  override referencePrefix = "FL";
}

/**
 * 8400MHz 50 Ohm Passive Low Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:LFCN-8400`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/LFCN-8400+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class LFCN_8400 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-8400";
  override referencePrefix = "FL";
}

/**
 * 8440MHz 50 Ohm Passive Low Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:LFCN-8440`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/LFCN-8440+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class LFCN_8440 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-8440";
  override referencePrefix = "FL";
}

/**
 * 850MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-900`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-900+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_900 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-900";
  override referencePrefix = "FL";
}

/**
 * 850MHz 50 Ohm Passive Low Pass Filter, DC cabable, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-900D`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-900D+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_900D extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-900D";
  override referencePrefix = "FL";
}

/**
 * 9170MHz 50 Ohm Passive Low Pass Filter, FV1206-4
 *
 * KiCad symbol: `RF_Filter:LFCN-9170`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206?4*.
 * @see https://www.minicircuits.com/pdfs/LFCN-9170+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206-4.
 */
export class LFCN_9170 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-9170";
  override referencePrefix = "FL";
}

/**
 * 95MHz 50 Ohm Passive Low Pass Filter, FV1206
 *
 * KiCad symbol: `RF_Filter:LFCN-95`. Reference prefix: `FL`.
 * Footprint filters: Filter*Mini?Circuits*FV1206*.
 * @see https://www.minicircuits.com/pdfs/LFCN-95+.pdf
 * Keywords: Mini-Circuits low pass filter.
 * Default footprint: Filter:Filter_Mini-Circuits_FV1206.
 */
export class LFCN_95 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "OUT": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "passive", GND_2: "passive", OUT: "passive", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LFCN-95";
  override referencePrefix = "FL";
}

/**
 * Low Pass Filter, DC to 0.3 MHz, 50 Ohm, Mini-Circuits HZ1198
 *
 * KiCad symbol: `RF_Filter:LPF-B0R3`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*HZ1198*.
 * @see https://www.minicircuits.com/pdfs/LPF-B0R3+.pdf
 * Keywords: low pass filter.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_HZ1198_LandPatternPL-247.
 */
export class LPF_B0R3 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", OUT: "output", GND_3: "power_in", GND_4: "passive", GND_5: "passive", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:LPF-B0R3";
  override referencePrefix = "U";
}

/**
 * Bandpass Filter, 260 to 310 MHz, 50 Ohm, Mini-Circuits GP731
 *
 * KiCad symbol: `RF_Filter:RBP-280`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*GP731*.
 * @see https://www.minicircuits.com/pdfs/RBP-280+.pdf
 * Keywords: bandpass filter rf.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_GP731_LandPatternPL-176.
 */
export class RBP_280 extends Component.withPins({
  "GND_1": "1",
  "IN": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "OUT": "6",
  "GND_7": "7",
  "GND_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN: "input", GND_3: "passive", GND_4: "passive", GND_5: "passive", OUT: "output", GND_7: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:RBP-280";
  override referencePrefix = "U";
}

/**
 * Bandpass Filter, 236 to 265 MHz, 50 Ohm, Mini-Circuits CK605
 *
 * KiCad symbol: `RF_Filter:RBPF-246`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*CK605*.
 * @see https://www.minicircuits.com/pdfs/RBPF-246+.pdf
 * Keywords: Bandpass Filter.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CK605_LandPatternPL-012.
 */
export class RBPF_246 extends Component.withPins({
  "GND_1": "1",
  "IN": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "OUT": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "NC": "14",
  "GND_15": "15",
  "GND_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN: "input", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", OUT: "output", GND_11: "passive", GND_12: "passive", GND_13: "passive", NC: "no_connect", GND_15: "passive", GND_16: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:RBPF-246";
  override referencePrefix = "U";
}

/**
 * Low Pass Filter, DC to 30 MHz, 50 Ohm, Mini-Circuits GP1212
 *
 * KiCad symbol: `RF_Filter:RLP-30`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*GP1212*.
 * @see https://www.minicircuits.com/pdfs/RLP-30+.pdf
 * Keywords: Low Pass Filter.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_GP1212_LandPatternPL-176.
 */
export class RLP_30 extends Component.withPins({
  "GND_1": "1",
  "IN": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "OUT": "6",
  "GND_7": "7",
  "GND_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN: "input", GND_3: "passive", GND_4: "passive", GND_5: "passive", OUT: "output", GND_7: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:RLP-30";
  override referencePrefix = "U";
}

/**
 * High Pass Filter, 31 to 1500 MHz, 50 Ohm, Mini-Circuits YY161
 *
 * KiCad symbol: `RF_Filter:SCHF-31`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*YY161*.
 * @see https://www.minicircuits.com/pdfs/SCHF-31+.pdf
 * Keywords: highpass filter rf.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_YY161_LandPatternPL-049.
 */
export class SCHF_31 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "OUT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND_2: "power_in", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:SCHF-31";
  override referencePrefix = "U";
}

/**
 * Bandpass Filter, 1090MHz, SAW filter 8-pin
 *
 * KiCad symbol: `RF_Filter:TA0232A`. Reference prefix: `X`.
 * Footprint filters: Filter*SAW*3.8x3.8mm*.
 * @see https://www.golledge.com/media/1831/ma05497.pdf
 * Keywords: SAW Filter 1090 bandpass.
 * Default footprint: Filter:Filter_SAW-8_3.8x3.8mm.
 */
export class TA0232A extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "OUT_1": "5",
  "OUT_2": "6",
  "GND_7": "7",
  "GND_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "input", IN_2: "input", GND_3: "power_in", GND_4: "passive", OUT_1: "output", OUT_2: "output", GND_7: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:TA0232A";
  override referencePrefix = "X";
}

/**
 * Bandpass Filter, 1090MHz, SAW filter 8-pin
 *
 * KiCad symbol: `RF_Filter:STA0232A`. Reference prefix: `X`.
 * Footprint filters: Filter*SAW*3.8x3.8mm*.
 * @see https://www.golledge.com/media/1831/ma05497.pdf
 * Keywords: SAW Filter 1090 bandpass.
 * Default footprint: Filter:Filter_SAW-8_3.8x3.8mm.
 */
export class STA0232A extends Component.withPins({
  "IN_1": "1",
  "IN_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "OUT_1": "5",
  "OUT_2": "6",
  "GND_7": "7",
  "GND_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN_1: "input", IN_2: "input", GND_3: "power_in", GND_4: "passive", OUT_1: "output", OUT_2: "output", GND_7: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:STA0232A";
  override referencePrefix = "X";
}

/**
 * Bandpass Filter, 1090MHz, SAW filter 6-pin
 *
 * KiCad symbol: `RF_Filter:STA1090EC`. Reference prefix: `X`.
 * Footprint filters: Filter*SAW*3.8x3.8mm*.
 * @see https://www.golledge.com/media/3785/mp08167.pdf
 * Keywords: SAW Filter 1090 bandpass.
 * Default footprint: Filter:Filter_SAW-6_3.8x3.8mm.
 */
export class STA1090EC extends Component.withPins({
  "GND_1": "1",
  "IN": "2",
  "GND_3": "3",
  "GND_4": "4",
  "OUT": "5",
  "GND_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IN: "input", GND_3: "passive", GND_4: "passive", OUT: "output", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:STA1090EC";
  override referencePrefix = "X";
}

/**
 * Bandpass Filter, 130 to 150 MHz, 50 Ohm, Mini-Circuits HF1139
 *
 * KiCad symbol: `RF_Filter:SXBP-140`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*HF1139*.
 * @see https://www.minicircuits.com/pdfs/SXBP-140+.pdf
 * Keywords: Mini-Circuits Band-Pass Filter.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_HF1139_LandPatternPL-230.
 */
export class SXBP_140 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "OUT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND_2: "power_in", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:SXBP-140";
  override referencePrefix = "U";
}

/**
 * Bandpass Filter, 87 to 117 MHz, 50 Ohm, Mini-Circuits HF1139
 *
 * KiCad symbol: `RF_Filter:SXBP-100`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*HF1139*.
 * @see https://www.minicircuits.com/pdfs/SXBP-100+.pdf
 * Keywords: bandpass filter.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_HF1139_LandPatternPL-230.
 */
export class SXBP_100 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "OUT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND_2: "power_in", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:SXBP-100";
  override referencePrefix = "U";
}

/**
 * Bandpass Filter, 198 to 206 MHz, 50 Ohm, Mini-Circuits HF1139
 *
 * KiCad symbol: `RF_Filter:SXBP-202`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*HF1139*.
 * @see https://www.minicircuits.com/pdfs/SXBP-202+.pdf
 * Keywords: bandpass filter.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_HF1139_LandPatternPL-230.
 */
export class SXBP_202 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "OUT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND_2: "power_in", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:SXBP-202";
  override referencePrefix = "U";
}

/**
 * Bandpass Filter, 24 to 31 MHz, 50 Ohm, Mini-Circuits HF1139
 *
 * KiCad symbol: `RF_Filter:SXBP-27R5`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*HF1139*.
 * @see https://www.minicircuits.com/pdfs/SXBP-27R5+.pdf
 * Keywords: bandpass filter.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_HF1139_LandPatternPL-230.
 */
export class SXBP_27R5 extends Component.withPins({
  "IN": "1",
  "GND_2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "OUT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN: "input", GND_2: "power_in", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Filter:SXBP-27R5";
  override referencePrefix = "U";
}
